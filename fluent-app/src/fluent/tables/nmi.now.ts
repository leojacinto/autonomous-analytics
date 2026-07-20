import { Table, StringColumn, ReferenceColumn, DecimalColumn, BooleanColumn, DateColumn } from '@servicenow/sdk/core'

export const x_snc_util_da_nmi = Table({
    name: 'x_snc_util_da_nmi',
    label: 'NMI',
    display: 'nmi_number',
    allowWebServiceAccess: true,
    schema: {
        property: ReferenceColumn({
            label: 'Property',
            referenceTable: 'x_snc_util_da_property',
            mandatory: true,
        }),
        nmi_number: StringColumn({ label: 'NMI Number', maxLength: 20, mandatory: true, unique: true }),
        dnsp: StringColumn({ label: 'DNSP', maxLength: 40 }),
        connection_type: StringColumn({
            label: 'Connection Type',
            choices: {
                single_phase: 'Single Phase',
                three_phase: 'Three Phase',
            },
            dropdown: 'dropdown_without_none',
        }),
        installed_capacity_kw: DecimalColumn({ label: 'Installed Solar Capacity (kW)' }),
        fit_rate: DecimalColumn({ label: 'Feed-in Tariff Rate' }),
        tariff: StringColumn({
            label: 'Tariff',
            choices: {
                flat: 'Flat Rate',
                tou: 'Time of Use',
                demand: 'Demand',
            },
            dropdown: 'dropdown_without_none',
        }),
        status: StringColumn({
            label: 'Status',
            choices: {
                active: 'Active',
                disconnected: 'Disconnected',
                pending: 'Pending Connection',
            },
            dropdown: 'dropdown_without_none',
            default: 'active',
        }),
        connection_date: DateColumn({ label: 'Connection Date' }),
        hardship_flag: BooleanColumn({ label: 'Hardship Flag', default: false }),
        tamper_flag: BooleanColumn({ label: 'Tamper Flag', default: false }),
    },
})
