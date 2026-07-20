import { Table, ReferenceColumn, DateColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_snc_util_da_solar_export = Table({
    name: 'x_snc_util_da_solar_export',
    label: 'Solar Export',
    display: 'export_date',
    allowWebServiceAccess: true,
    schema: {
        nmi: ReferenceColumn({
            label: 'NMI',
            referenceTable: 'x_snc_util_da_nmi',
            mandatory: true,
        }),
        export_date: DateColumn({ label: 'Export Date', mandatory: true }),
        export_kwh: DecimalColumn({ label: 'Export (kWh)' }),
        feed_in_credit: DecimalColumn({ label: 'Feed-in Credit' }),
    },
})
