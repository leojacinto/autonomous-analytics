import { Table, ReferenceColumn, DateColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_snc_util_da_usage = Table({
    name: 'x_snc_util_da_usage',
    label: 'Usage',
    display: 'usage_date',
    allowWebServiceAccess: true,
    schema: {
        nmi: ReferenceColumn({
            label: 'NMI',
            referenceTable: 'x_snc_util_da_nmi',
            mandatory: true,
        }),
        usage_date: DateColumn({ label: 'Usage Date', mandatory: true }),
        interval_kwh: DecimalColumn({ label: 'Interval Usage (kWh)' }),
        demand_kw: DecimalColumn({ label: 'Peak Demand (kW)' }),
    },
})
