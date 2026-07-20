import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_snc_util_da_nmi_staging = Table({
    name: 'x_snc_util_da_nmi_staging',
    label: 'NMI Staging',
    extends: 'sys_import_set_row',
    allowWebServiceAccess: true,
    schema: {
        property_external_id: StringColumn({ label: 'Property External ID', maxLength: 40 }),
        nmi_number: StringColumn({ label: 'NMI Number', maxLength: 20 }),
        dnsp: StringColumn({ label: 'DNSP', maxLength: 40 }),
        connection_type: StringColumn({ label: 'Connection Type', maxLength: 40 }),
        installed_capacity_kw: StringColumn({ label: 'Installed Capacity (kW)', maxLength: 40 }),
        fit_rate: StringColumn({ label: 'FIT Rate', maxLength: 40 }),
        tariff: StringColumn({ label: 'Tariff', maxLength: 40 }),
        status: StringColumn({ label: 'Status', maxLength: 40 }),
        connection_date: StringColumn({ label: 'Connection Date', maxLength: 40 }),
        hardship_flag: StringColumn({ label: 'Hardship Flag', maxLength: 10 }),
        tamper_flag: StringColumn({ label: 'Tamper Flag', maxLength: 10 }),
    },
})
