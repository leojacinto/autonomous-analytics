import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_snc_util_da_meter_read_staging = Table({
    name: 'x_snc_util_da_meter_read_staging',
    label: 'Meter Read Staging',
    extends: 'sys_import_set_row',
    allowWebServiceAccess: true,
    schema: {
        nmi_number: StringColumn({ label: 'NMI Number', maxLength: 20 }),
        read_date: StringColumn({ label: 'Read Date', maxLength: 40 }),
        read_type: StringColumn({ label: 'Read Type', maxLength: 40 }),
        reading_kwh: StringColumn({ label: 'Reading (kWh)', maxLength: 40 }),
        previous_reading_kwh: StringColumn({ label: 'Previous Reading (kWh)', maxLength: 40 }),
    },
})
