// Bulk-delete all rows from a given table via concurrent Table API DELETE calls.
// Usage: node scripts/purge-table.mjs <table_name> [concurrency]

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function loadEnv(envPath) {
    const out = {}
    const raw = fs.readFileSync(envPath, 'utf8')
    for (const line of raw.split('\n')) {
        const trimmed = line.trim()
        if (!trimmed || trimmed.startsWith('#')) continue
        const eq = trimmed.indexOf('=')
        if (eq === -1) continue
        const key = trimmed.slice(0, eq).trim()
        let val = trimmed.slice(eq + 1).trim()
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.slice(1, -1)
        }
        out[key] = val
    }
    return out
}

const env = loadEnv(path.resolve(__dirname, '../../.env'))
const BASE = env.SN_UTIL_SRC_URL
const USER = env.SN_UTIL_SRC_USER
const PASS = env.SN_UTIL_SRC_PASS
const AUTH = 'Basic ' + Buffer.from(`${USER}:${PASS}`).toString('base64')

const table = process.argv[2]
const concurrency = Number(process.argv[3] || 40)
if (!table) throw new Error('Usage: node purge-table.mjs <table_name> [concurrency]')

async function fetchSysIds(limit = 5000) {
    const res = await fetch(`${BASE}/api/now/table/${table}?sysparm_fields=sys_id&sysparm_limit=${limit}`, {
        headers: { Authorization: AUTH, Accept: 'application/json' },
    })
    if (!res.ok) throw new Error(`fetch failed: ${res.status} ${await res.text()}`)
    const json = await res.json()
    return json.result.map((r) => r.sys_id)
}

// Batch API: bundle many DELETE sub-requests into one HTTP call, executed server-side.
// Far more reliable than hundreds of raw concurrent connections against a single instance.
async function deleteBatch(ids, batchLabel) {
    const rest_requests = ids.map((sysId, idx) => ({
        id: String(idx),
        url: `/api/now/table/${table}/${sysId}`,
        method: 'DELETE',
        headers: [{ name: 'Accept', value: 'application/json' }],
    }))
    const res = await fetch(`${BASE}/api/now/v1/batch`, {
        method: 'POST',
        headers: { Authorization: AUTH, 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ batch_request_id: batchLabel, rest_requests }),
    })
    if (!res.ok) {
        throw new Error(`batch delete failed: ${res.status} ${(await res.text()).slice(0, 500)}`)
    }
    const json = await res.json()
    const failed = (json.serviced_requests || []).filter((r) => r.status_code >= 300)
    if (failed.length) {
        console.error(`  ${failed.length} sub-requests failed in batch ${batchLabel}`)
    }
}

async function main() {
    let totalDeleted = 0
    const batchSize = 200 // sub-requests per Batch API call
    const concurrentBatches = concurrency // number of Batch API calls in flight at once
    while (true) {
        const ids = await fetchSysIds(5000)
        if (ids.length === 0) break
        const chunks = []
        for (let i = 0; i < ids.length; i += batchSize) chunks.push(ids.slice(i, i + batchSize))
        for (let i = 0; i < chunks.length; i += concurrentBatches) {
            const slice = chunks.slice(i, i + concurrentBatches)
            await Promise.all(slice.map((chunk, j) => deleteBatch(chunk, `${table}-${i + j}`)))
        }
        totalDeleted += ids.length
        console.log(`${table}: deleted ${totalDeleted} so far`)
    }
    console.log(`${table}: purge complete, ${totalDeleted} total deleted`)
}

main().catch((err) => {
    console.error(err)
    process.exit(1)
})
