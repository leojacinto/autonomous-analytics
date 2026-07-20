import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_snc_util_da_property_staging = Table({
    name: 'x_snc_util_da_property_staging',
    label: 'Property Staging',
    extends: 'sys_import_set_row',
    allowWebServiceAccess: true,
    schema: {
        external_id: StringColumn({ label: 'External ID', maxLength: 40 }),
        customer_external_id: StringColumn({ label: 'Customer External ID', maxLength: 40 }),
        address: StringColumn({ label: 'Address', maxLength: 150 }),
        suburb: StringColumn({ label: 'Suburb', maxLength: 60 }),
        state: StringColumn({ label: 'State', maxLength: 3 }),
        postcode: StringColumn({ label: 'Postcode', maxLength: 4 }),
        property_type: StringColumn({ label: 'Property Type', maxLength: 40 }),
    },
})
