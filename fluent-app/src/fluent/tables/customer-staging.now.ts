import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_snc_util_da_customer_staging = Table({
    name: 'x_snc_util_da_customer_staging',
    label: 'Customer Staging',
    extends: 'sys_import_set_row',
    allowWebServiceAccess: true,
    schema: {
        external_id: StringColumn({ label: 'External ID', maxLength: 40 }),
        customer_name: StringColumn({ label: 'Customer Name', maxLength: 100 }),
        email: StringColumn({ label: 'Email', maxLength: 100 }),
        phone: StringColumn({ label: 'Phone', maxLength: 20 }),
        customer_type: StringColumn({ label: 'Customer Type', maxLength: 40 }),
        signup_date: StringColumn({ label: 'Signup Date', maxLength: 40 }),
    },
})
