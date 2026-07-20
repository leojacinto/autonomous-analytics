// Synthetic data generator + bulk loader for the x_snc_util_da utilities app.
// Seeds the 12 named personas from the existing Agent Experience NMI demo
// (Utilities Use Case/scenario-manifest.md) plus ~486 synthetic customers,
// then generates 24 months of usage/billing/meter_read/solar_export history
// with a real causal pattern behind hardship_flag/tamper_flag (not random noise).
//
// Usage: node scripts/generate-and-load.mjs
// Reads SN_UTIL_SRC_URL / SN_UTIL_SRC_USER / SN_UTIL_SRC_PASS from ../../.env

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// ---------- env loading (manual parse to survive special chars like $ in passwords) ----------
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
if (!BASE || !USER || !PASS) {
    throw new Error('Missing SN_UTIL_SRC_URL / SN_UTIL_SRC_USER / SN_UTIL_SRC_PASS in .env')
}
const AUTH = 'Basic ' + Buffer.from(`${USER}:${PASS}`).toString('base64')

// ---------- seeded RNG for reproducible demo data ----------
function mulberry32(seed) {
    let a = seed
    return function () {
        a |= 0
        a = (a + 0x6d2b79f5) | 0
        let t = Math.imul(a ^ (a >>> 15), 1 | a)
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
}
const rng = mulberry32(140974)
const randInt = (min, max) => Math.floor(rng() * (max - min + 1)) + min
const randFloat = (min, max, dp = 2) => Number((rng() * (max - min) + min).toFixed(dp))
const pick = (arr) => arr[randInt(0, arr.length - 1)]
const chance = (p) => rng() < p

// ---------- date helpers ----------
const END_DATE = new Date('2026-04-30')
const START_DATE = new Date('2024-05-01')
function toISODate(d) {
    return d.toISOString().slice(0, 10)
}
function addDays(d, n) {
    const r = new Date(d)
    r.setDate(r.getDate() + n)
    return r
}
function addMonths(d, n) {
    const r = new Date(d)
    r.setMonth(r.getMonth() + n)
    return r
}
function* monthsBetween(start, end) {
    let cur = new Date(start)
    while (cur <= end) {
        yield new Date(cur)
        cur = addMonths(cur, 1)
    }
}
function* daysBetween(start, end) {
    let cur = new Date(start)
    while (cur <= end) {
        yield new Date(cur)
        cur = addDays(cur, 1)
    }
}

// ---------- named personas (from Utilities Use Case/scenario-manifest.md) ----------
const NAMED_PERSONAS = [
    { name: 'Angus Young', nmi: '6305000000001', dnsp: 'Ausgrid', hardship: true, tamper: false, solar: false, commercial: false, capacityKw: 0 },
    { name: 'Paul McCartney', nmi: '6305000000002', dnsp: 'Ausgrid', hardship: false, tamper: false, solar: false, commercial: false, capacityKw: 0 },
    { name: 'John Lennon', nmi: '6305000000003', dnsp: 'Ausgrid', hardship: false, tamper: false, solar: false, commercial: false, capacityKw: 0 },
    { name: 'Ringo Starr', nmi: '6305000000004', dnsp: 'Ausgrid', hardship: false, tamper: false, solar: false, commercial: false, capacityKw: 0 },
    { name: 'George Harrison', nmi: '6305000000005', dnsp: 'Ausgrid', hardship: false, tamper: false, solar: true, commercial: false, capacityKw: 6.6, fitRate: 0.07 },
    { name: 'Eric Clapton', nmi: '6305000000006', dnsp: 'Ausgrid', hardship: false, tamper: false, solar: true, commercial: false, capacityKw: 5.0, fitRate: 0.07 },
    { name: 'Mark Knopfler', nmi: '12345678916', dnsp: 'Ausgrid', hardship: false, tamper: true, solar: false, commercial: true, capacityKw: 0, extraNmis: ['12345678917', '12345678918'] },
    { name: 'David Gilmour', nmi: '6305000000008', dnsp: 'Ausgrid', hardship: false, tamper: false, solar: true, commercial: false, capacityKw: 13.2, fitRate: 0.10 },
    { name: 'Elton John', nmi: '6305000000009', dnsp: 'Ausgrid', hardship: true, tamper: false, solar: false, commercial: false, capacityKw: 0 },
    { name: 'Malcolm Young', nmi: '6305000000010', dnsp: 'Ausgrid', hardship: false, tamper: false, solar: false, commercial: false, capacityKw: 0 },
    { name: 'Billy Gibbons', nmi: '6305000000011', dnsp: 'Ausgrid', hardship: true, tamper: false, solar: false, commercial: false, capacityKw: 0 },
    { name: 'Johnny Cash', nmi: '6305000000012', dnsp: 'Essential Energy', hardship: false, tamper: false, solar: false, commercial: false, capacityKw: 0, rural: true },
]

const STREETS = ['Elizabeth St', 'George St', 'Pitt St', 'Kent St', 'Bourke St', 'Crown St', 'King St', 'Oxford St', 'Parramatta Rd', 'Anzac Pde']
const SUBURBS_NSW = ['Sydney', 'Parramatta', 'Newtown', 'Bondi', 'Chatswood', 'Liverpool', 'Penrith', 'Cabramatta', 'Ryde', 'Blacktown']
const FIRST_NAMES = ['James', 'Olivia', 'Liam', 'Emma', 'Noah', 'Ava', 'Lucas', 'Mia', 'Ethan', 'Chloe', 'Jack', 'Isla', 'Henry', 'Zoe', 'Leo', 'Grace', 'Oscar', 'Ruby', 'Max', 'Ella']
const LAST_NAMES = ['Smith', 'Jones', 'Williams', 'Brown', 'Wilson', 'Taylor', 'Nguyen', 'Kelly', 'Ryan', 'Walker', 'Robinson', 'Wright', 'Thompson', 'White', 'Lee', 'Green', 'Baker', 'Hall', 'Clark', 'Davies']

function randomAddress() {
    return `${randInt(1, 300)} ${pick(STREETS)}`
}
function randomEmail(name) {
    return `${name.toLowerCase().replace(/[^a-z]/g, '.')}${randInt(1, 999)}@example.com`
}
function randomPhone() {
    return `04${randInt(10000000, 99999999)}`
}

// ---------- build entity graph ----------
const customers = []
const properties = []
const nmis = []

function pushCustomer(externalId, name, signupDate) {
    const [first, ...rest] = name.split(' ')
    customers.push({
        external_id: externalId,
        customer_name: name,
        email: randomEmail(name),
        phone: randomPhone(),
        customer_type: rest.join(' ').length ? 'residential' : 'residential',
        signup_date: toISODate(signupDate),
    })
}
function pushProperty(externalId, customerExternalId, address, suburb, state, postcode, propertyType) {
    properties.push({
        external_id: externalId,
        customer_external_id: customerExternalId,
        address,
        suburb,
        state,
        postcode,
        property_type: propertyType,
    })
}
function pushNmi(nmiNumber, propertyExternalId, opts) {
    nmis.push({
        nmi_number: nmiNumber,
        property_external_id: propertyExternalId,
        dnsp: opts.dnsp,
        connection_type: opts.commercial ? 'three_phase' : 'single_phase',
        installed_capacity_kw: opts.capacityKw || 0,
        fit_rate: opts.fitRate || 0,
        tariff: opts.commercial ? 'demand' : 'flat',
        status: 'active',
        connection_date: toISODate(opts.connectionDate || START_DATE),
        hardship_flag: !!opts.hardship,
        tamper_flag: !!opts.tamper,
        _solar: !!opts.solar,
        _hardship: !!opts.hardship,
        _tamper: !!opts.tamper,
        _commercial: !!opts.commercial,
    })
}

// -- named personas --
for (const p of NAMED_PERSONAS) {
    const custId = `CUST-NAMED-${p.nmi}`
    const propId = `PROP-NAMED-${p.nmi}`
    pushCustomer(custId, p.name, addMonths(START_DATE, -randInt(1, 24)))
    const suburb = p.rural ? 'Tamworth' : pick(SUBURBS_NSW)
    const state = 'NSW'
    pushProperty(propId, custId, p.commercial ? '225 Pitt Street' : randomAddress(), suburb, state, p.rural ? '2340' : `${randInt(2000, 2234)}`, p.commercial ? 'commercial' : 'house')
    pushNmi(p.nmi, propId, p)
    if (p.extraNmis) {
        for (const extra of p.extraNmis) {
            pushNmi(extra, propId, { ...p, capacityKw: 0, solar: false })
        }
    }
}

// -- synthetic population --
const SYNTHETIC_COUNT = 486
for (let i = 0; i < SYNTHETIC_COUNT; i++) {
    const name = `${pick(FIRST_NAMES)} ${pick(LAST_NAMES)}`
    const custId = `CUST-SYN-${String(i).padStart(5, '0')}`
    const propId = `PROP-SYN-${String(i).padStart(5, '0')}`
    const nmiNumber = `9${String(100000000 + i).padStart(9, '0')}`
    const hardship = chance(0.08)
    const tamper = chance(0.05)
    const solar = chance(0.25)
    pushCustomer(custId, name, addMonths(START_DATE, -randInt(1, 30)))
    pushProperty(propId, custId, randomAddress(), pick(SUBURBS_NSW), 'NSW', `${randInt(2000, 2234)}`, pick(['house', 'apartment', 'townhouse']))
    pushNmi(nmiNumber, propId, {
        dnsp: 'Ausgrid',
        hardship,
        tamper,
        solar,
        capacityKw: solar ? randFloat(3, 10, 1) : 0,
        fitRate: solar ? pick([0.05, 0.06, 0.07, 0.08]) : 0,
        connectionDate: addMonths(START_DATE, -randInt(1, 36)),
    })
}

console.log(`Built ${customers.length} customers, ${properties.length} properties, ${nmis.length} NMIs`)

// ---------- transactional data generation (with causal hardship/tamper signal) ----------
const usageRows = []
const billingRows = []
const meterReadRows = []
const solarExportRows = []

for (const nmi of nmis) {
    const baseDaily = nmi._commercial ? randFloat(80, 140) : nmi._hardship ? randFloat(16, 22) : randFloat(9, 15)
    let prevReading = randFloat(1000, 5000)
    let monthIndex = 0
    // tamper NMIs get exactly one rollback + a sustained near-zero usage window (bypass signature)
    const tamperBypassStart = nmi._tamper ? randInt(6, 16) : -1
    const tamperBypassLen = nmi._tamper ? randInt(2, 4) : 0
    const tamperRollbackMonth = nmi._tamper ? randInt(2, 20) : -1

    const monthlyUsageSum = {} // 'YYYY-MM' -> kWh, accumulated during the daily loop to avoid re-scanning usageRows
    for (const day of daysBetween(START_DATE, END_DATE)) {
        const season = Math.sin(((day.getMonth() + 1) / 12) * Math.PI * 2)
        const seasonal = nmi._solar ? -season * 1.5 : season * 2 // heating/cooling load vs solar offset
        let interval = Math.max(0.2, baseDaily + seasonal + randFloat(-1.5, 1.5))
        const monthOffset = Math.floor((day - START_DATE) / (1000 * 60 * 60 * 24 * 30))
        if (nmi._tamper && monthOffset >= tamperBypassStart && monthOffset < tamperBypassStart + tamperBypassLen) {
            interval = randFloat(0.1, 0.5) // near-zero usage despite active status = bypass signature
        }
        usageRows.push({
            nmi_number: nmi.nmi_number,
            usage_date: toISODate(day),
            interval_kwh: interval,
            demand_kw: Number((interval / 24).toFixed(2)),
        })
        const monthKey = toISODate(day).slice(0, 7)
        monthlyUsageSum[monthKey] = (monthlyUsageSum[monthKey] || 0) + interval
    }

    for (const monthStart of monthsBetween(START_DATE, END_DATE)) {
        const isoMonth = toISODate(monthStart)
        const monthUsage = monthlyUsageSum[isoMonth.slice(0, 7)] || 0

        // meter read: cumulative register, with deliberate rollback for tamper NMIs
        let reading = prevReading + monthUsage
        if (nmi._tamper && monthIndex === tamperRollbackMonth) {
            reading = prevReading - randFloat(5, 30) // register rollback = classic tamper signature
        }
        meterReadRows.push({
            nmi_number: nmi.nmi_number,
            read_date: isoMonth,
            read_type: chance(0.9) ? 'actual' : 'estimated',
            reading_kwh: Number(reading.toFixed(2)),
            previous_reading_kwh: Number(prevReading.toFixed(2)),
        })
        prevReading = reading

        // billing: hardship NMIs get a real overdue pattern, not a random flag
        const rate = 0.32 // $/kWh illustrative
        const amount = Number((monthUsage * rate).toFixed(2))
        const billDate = monthStart
        const dueDate = addDays(monthStart, 21)
        let status = 'paid'
        let paidDate = addDays(dueDate, -randInt(0, 5))
        if (nmi._hardship) {
            const overdue = chance(0.55)
            if (overdue) {
                status = monthIndex === (nmis.indexOf(nmi) % 24) ? 'overdue' : chance(0.5) ? 'overdue' : 'current'
                paidDate = null
            }
        } else if (chance(0.05)) {
            status = 'overdue'
            paidDate = null
        }
        billingRows.push({
            nmi_number: nmi.nmi_number,
            bill_date: toISODate(billDate),
            due_date: toISODate(dueDate),
            paid_date: paidDate ? toISODate(paidDate) : '',
            amount,
            status,
        })

        if (nmi._solar) {
            const exportBase = nmi.installed_capacity_kw * randFloat(2.5, 4.0)
            const seasonalExport = Math.sin(((monthStart.getMonth() + 1) / 12) * Math.PI * 2) * exportBase * 0.3
            const exportKwh = Math.max(0, exportBase + seasonalExport)
            solarExportRows.push({
                nmi_number: nmi.nmi_number,
                export_date: isoMonth,
                export_kwh: Number(exportKwh.toFixed(2)),
                feed_in_credit: Number((exportKwh * nmi.fit_rate).toFixed(2)),
            })
        }
        monthIndex++
    }
}

console.log(`Generated ${usageRows.length} usage, ${billingRows.length} billing, ${meterReadRows.length} meter_read, ${solarExportRows.length} solar_export rows`)

// ---------- Import Set insertMultiple default-maps request keys by COLUMN LABEL, not internal
// field name (confirmed against ServiceNow docs) -- so every payload key below must be the
// staging table's column label, matching the `label:` set on each StringColumn in fluent/tables/*.
const LABEL_MAPS = {
    x_snc_util_da_customer_staging: {
        external_id: 'External ID',
        customer_name: 'Customer Name',
        email: 'Email',
        phone: 'Phone',
        customer_type: 'Customer Type',
        signup_date: 'Signup Date',
    },
    x_snc_util_da_property_staging: {
        external_id: 'External ID',
        customer_external_id: 'Customer External ID',
        address: 'Address',
        suburb: 'Suburb',
        state: 'State',
        postcode: 'Postcode',
        property_type: 'Property Type',
    },
    x_snc_util_da_nmi_staging: {
        property_external_id: 'Property External ID',
        nmi_number: 'NMI Number',
        dnsp: 'DNSP',
        connection_type: 'Connection Type',
        installed_capacity_kw: 'Installed Capacity (kW)',
        fit_rate: 'FIT Rate',
        tariff: 'Tariff',
        status: 'Status',
        connection_date: 'Connection Date',
        hardship_flag: 'Hardship Flag',
        tamper_flag: 'Tamper Flag',
    },
    x_snc_util_da_usage_staging: {
        nmi_number: 'NMI Number',
        usage_date: 'Usage Date',
        interval_kwh: 'Interval Usage (kWh)',
        demand_kw: 'Peak Demand (kW)',
    },
    x_snc_util_da_billing_staging: {
        nmi_number: 'NMI Number',
        bill_date: 'Bill Date',
        due_date: 'Due Date',
        paid_date: 'Paid Date',
        amount: 'Amount',
        status: 'Status',
    },
    x_snc_util_da_meter_read_staging: {
        nmi_number: 'NMI Number',
        read_date: 'Read Date',
        read_type: 'Read Type',
        reading_kwh: 'Reading (kWh)',
        previous_reading_kwh: 'Previous Reading (kWh)',
    },
    x_snc_util_da_solar_export_staging: {
        nmi_number: 'NMI Number',
        export_date: 'Export Date',
        export_kwh: 'Export (kWh)',
        feed_in_credit: 'Feed-in Credit',
    },
}

function toLabelKeyed(row, labelMap) {
    const out = {}
    for (const [key, val] of Object.entries(row)) {
        out[labelMap[key] || key] = val
    }
    return out
}

// ---------- bulk load via Import Set insertMultiple ----------
async function insertMultiple(stagingTable, rows, batchSize = 1000) {
    const labelMap = LABEL_MAPS[stagingTable]
    if (!labelMap) throw new Error(`No label map registered for ${stagingTable}`)
    let loaded = 0
    for (let i = 0; i < rows.length; i += batchSize) {
        const batch = rows.slice(i, i + batchSize).map((r) => toLabelKeyed(r, labelMap))
        const res = await fetch(`${BASE}/api/now/import/${stagingTable}/insertMultiple`, {
            method: 'POST',
            headers: {
                Authorization: AUTH,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ records: batch }),
        })
        if (!res.ok) {
            const text = await res.text()
            throw new Error(`insertMultiple failed for ${stagingTable} batch ${i}: ${res.status} ${text.slice(0, 500)}`)
        }
        loaded += batch.length
        console.log(`  ${stagingTable}: ${loaded}/${rows.length}`)
    }
}

async function main() {
    if (process.env.DRY_RUN) {
        console.log('DRY RUN — sample rows:')
        console.log('customer[0]', customers[0])
        console.log('property[0]', properties[0])
        console.log('nmi[0]', nmis[0])
        console.log('usage[0]', usageRows[0])
        console.log('billing[0]', billingRows[0])
        console.log('meter_read[0]', meterReadRows[0])
        console.log('solar_export[0]', solarExportRows[0])
        const namedAngus = nmis.find((n) => n.nmi_number === '6305000000001')
        console.log('Angus Young NMI:', namedAngus)
        return
    }
    const resumeFrom = process.env.RESUME_FROM || 'customer'
    const order = ['customer', 'property', 'nmi', 'usage', 'billing', 'meter_read', 'solar_export']
    const startIdx = order.indexOf(resumeFrom)
    if (startIdx === -1) throw new Error(`Invalid RESUME_FROM: ${resumeFrom}`)

    if (startIdx <= 0) {
        console.log('Loading customer...')
        await insertMultiple('x_snc_util_da_customer_staging', customers)
    }
    if (startIdx <= 1) {
        console.log('Loading property...')
        await insertMultiple('x_snc_util_da_property_staging', properties)
    }
    if (startIdx <= 2) {
        console.log('Loading nmi...')
        await insertMultiple(
            'x_snc_util_da_nmi_staging',
            nmis.map(({ _solar, _hardship, _tamper, _commercial, ...rest }) => rest)
        )
    }
    if (startIdx <= 3) {
        console.log('Loading usage...')
        await insertMultiple('x_snc_util_da_usage_staging', usageRows)
    }
    if (startIdx <= 4) {
        console.log('Loading billing...')
        await insertMultiple('x_snc_util_da_billing_staging', billingRows)
    }
    if (startIdx <= 5) {
        console.log('Loading meter_read...')
        await insertMultiple('x_snc_util_da_meter_read_staging', meterReadRows)
    }
    if (startIdx <= 6) {
        console.log('Loading solar_export...')
        await insertMultiple('x_snc_util_da_solar_export_staging', solarExportRows)
    }

    console.log('Done.')
}

main().catch((err) => {
    console.error(err)
    process.exit(1)
})
