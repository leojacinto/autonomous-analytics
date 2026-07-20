import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_snc_util_da_billing_staging = Table({
    name: 'x_snc_util_da_billing_staging',
    label: 'Billing Staging',
    extends: 'sys_import_set_row',
    allowWebServiceAccess: true,
    schema: {
        nmi_number: StringColumn({ label: 'NMI Number', maxLength: 20 }),
        bill_date: StringColumn({ label: 'Bill Date', maxLength: 40 }),
        due_date: StringColumn({ label: 'Due Date', maxLength: 40 }),
        paid_date: StringColumn({ label: 'Paid Date', maxLength: 40 }),
        amount: StringColumn({ label: 'Amount', maxLength: 40 }),
        status: StringColumn({ label: 'Status', maxLength: 40 }),
    },
})
