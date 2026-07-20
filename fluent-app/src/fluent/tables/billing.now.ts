import { Table, ReferenceColumn, DateColumn, DecimalColumn, StringColumn } from '@servicenow/sdk/core'

export const x_snc_util_da_billing = Table({
    name: 'x_snc_util_da_billing',
    label: 'Billing',
    display: 'bill_date',
    allowWebServiceAccess: true,
    schema: {
        nmi: ReferenceColumn({
            label: 'NMI',
            referenceTable: 'x_snc_util_da_nmi',
            mandatory: true,
        }),
        bill_date: DateColumn({ label: 'Bill Date', mandatory: true }),
        due_date: DateColumn({ label: 'Due Date' }),
        paid_date: DateColumn({ label: 'Paid Date' }),
        amount: DecimalColumn({ label: 'Amount' }),
        status: StringColumn({
            label: 'Status',
            choices: {
                current: 'Current',
                paid: 'Paid',
                overdue: 'Overdue',
                credit: 'Credit',
                final_bill: 'Final Bill',
                disputed: 'Disputed',
            },
            dropdown: 'dropdown_without_none',
            default: 'current',
        }),
    },
})
