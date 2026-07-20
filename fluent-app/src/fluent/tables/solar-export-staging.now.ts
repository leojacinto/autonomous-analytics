import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_snc_util_da_solar_export_staging = Table({
    name: 'x_snc_util_da_solar_export_staging',
    label: 'Solar Export Staging',
    extends: 'sys_import_set_row',
    allowWebServiceAccess: true,
    schema: {
        nmi_number: StringColumn({ label: 'NMI Number', maxLength: 20 }),
        export_date: StringColumn({ label: 'Export Date', maxLength: 40 }),
        export_kwh: StringColumn({ label: 'Export (kWh)', maxLength: 40 }),
        feed_in_credit: StringColumn({ label: 'Feed-in Credit', maxLength: 40 }),
    },
})
