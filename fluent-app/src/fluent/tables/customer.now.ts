import { Table, StringColumn, EmailColumn, DateColumn } from '@servicenow/sdk/core'

export const x_snc_util_da_customer = Table({
    name: 'x_snc_util_da_customer',
    label: 'Customer',
    display: 'customer_name',
    allowWebServiceAccess: true,
    schema: {
        external_id: StringColumn({ label: 'External ID', maxLength: 40, unique: true }),
        customer_name: StringColumn({ label: 'Customer Name', maxLength: 100, mandatory: true }),
        email: EmailColumn({ label: 'Email' }),
        phone: StringColumn({ label: 'Phone', maxLength: 20 }),
        customer_type: StringColumn({
            label: 'Customer Type',
            choices: {
                residential: 'Residential',
                business: 'Business',
            },
            dropdown: 'dropdown_without_none',
        }),
        signup_date: DateColumn({ label: 'Signup Date' }),
    },
})
