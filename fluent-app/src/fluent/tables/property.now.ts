import { Table, StringColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_snc_util_da_property = Table({
    name: 'x_snc_util_da_property',
    label: 'Property',
    display: 'address',
    allowWebServiceAccess: true,
    schema: {
        external_id: StringColumn({ label: 'External ID', maxLength: 40, unique: true }),
        customer: ReferenceColumn({
            label: 'Customer',
            referenceTable: 'x_snc_util_da_customer',
            mandatory: true,
        }),
        address: StringColumn({ label: 'Address', maxLength: 150, mandatory: true }),
        suburb: StringColumn({ label: 'Suburb', maxLength: 60 }),
        state: StringColumn({
            label: 'State',
            maxLength: 3,
            choices: {
                NSW: 'NSW',
                VIC: 'VIC',
                QLD: 'QLD',
                SA: 'SA',
                WA: 'WA',
                TAS: 'TAS',
                NT: 'NT',
                ACT: 'ACT',
            },
            dropdown: 'dropdown_without_none',
        }),
        postcode: StringColumn({ label: 'Postcode', maxLength: 4 }),
        property_type: StringColumn({
            label: 'Property Type',
            choices: {
                house: 'House',
                apartment: 'Apartment',
                townhouse: 'Townhouse',
                commercial: 'Commercial',
            },
            dropdown: 'dropdown_without_none',
        }),
    },
})
