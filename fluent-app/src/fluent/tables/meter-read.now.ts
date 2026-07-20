import { Table, ReferenceColumn, DateColumn, DecimalColumn, StringColumn } from '@servicenow/sdk/core'

export const x_snc_util_da_meter_read = Table({
    name: 'x_snc_util_da_meter_read',
    label: 'Meter Read',
    display: 'read_date',
    allowWebServiceAccess: true,
    schema: {
        nmi: ReferenceColumn({
            label: 'NMI',
            referenceTable: 'x_snc_util_da_nmi',
            mandatory: true,
        }),
        read_date: DateColumn({ label: 'Read Date', mandatory: true }),
        read_type: StringColumn({
            label: 'Read Type',
            choices: {
                actual: 'Actual',
                estimated: 'Estimated',
            },
            dropdown: 'dropdown_without_none',
            default: 'actual',
        }),
        reading_kwh: DecimalColumn({ label: 'Reading (kWh)' }),
        previous_reading_kwh: DecimalColumn({ label: 'Previous Reading (kWh)' }),
    },
})
