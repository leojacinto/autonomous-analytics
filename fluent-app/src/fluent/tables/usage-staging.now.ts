import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_snc_util_da_usage_staging = Table({
    name: 'x_snc_util_da_usage_staging',
    label: 'Usage Staging',
    extends: 'sys_import_set_row',
    allowWebServiceAccess: true,
    schema: {
        nmi_number: StringColumn({ label: 'NMI Number', maxLength: 20 }),
        usage_date: StringColumn({ label: 'Usage Date', maxLength: 40 }),
        interval_kwh: StringColumn({ label: 'Interval Usage (kWh)', maxLength: 40 }),
        demand_kw: StringColumn({ label: 'Peak Demand (kW)', maxLength: 40 }),
    },
})
