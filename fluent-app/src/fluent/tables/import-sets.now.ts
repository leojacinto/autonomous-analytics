import { ImportSet } from '@servicenow/sdk/core'

export const customerImportSet = ImportSet({
    $id: Now.ID['x_snc_util_da_customer_importset'],
    name: 'Customer Import Set',
    sourceTable: 'x_snc_util_da_customer_staging',
    targetTable: 'x_snc_util_da_customer',
    active: true,
    enforceMandatoryFields: 'no',
    fields: {
        external_id: { sourceField: 'external_id', coalesce: true },
        customer_name: { sourceField: 'customer_name' },
        email: { sourceField: 'email' },
        phone: { sourceField: 'phone' },
        customer_type: { sourceField: 'customer_type' },
        signup_date: { sourceField: 'signup_date', dateFormat: 'yyyy-MM-dd' },
    },
    runScript: false,
})

export const propertyImportSet = ImportSet({
    $id: Now.ID['x_snc_util_da_property_importset'],
    name: 'Property Import Set',
    sourceTable: 'x_snc_util_da_property_staging',
    targetTable: 'x_snc_util_da_property',
    active: true,
    enforceMandatoryFields: 'no',
    fields: {
        external_id: { sourceField: 'external_id', coalesce: true },
        customer: { sourceField: 'customer_external_id', referenceValueField: 'external_id' },
        address: { sourceField: 'address' },
        suburb: { sourceField: 'suburb' },
        state: { sourceField: 'state' },
        postcode: { sourceField: 'postcode' },
        property_type: { sourceField: 'property_type' },
    },
    runScript: false,
})

export const nmiImportSet = ImportSet({
    $id: Now.ID['x_snc_util_da_nmi_importset'],
    name: 'NMI Import Set',
    sourceTable: 'x_snc_util_da_nmi_staging',
    targetTable: 'x_snc_util_da_nmi',
    active: true,
    enforceMandatoryFields: 'no',
    fields: {
        nmi_number: { sourceField: 'nmi_number', coalesce: true },
        property: { sourceField: 'property_external_id', referenceValueField: 'external_id' },
        dnsp: { sourceField: 'dnsp' },
        connection_type: { sourceField: 'connection_type' },
        installed_capacity_kw: { sourceField: 'installed_capacity_kw' },
        fit_rate: { sourceField: 'fit_rate' },
        tariff: { sourceField: 'tariff' },
        status: { sourceField: 'status' },
        connection_date: { sourceField: 'connection_date', dateFormat: 'yyyy-MM-dd' },
        hardship_flag: { sourceField: 'hardship_flag' },
        tamper_flag: { sourceField: 'tamper_flag' },
    },
    runScript: false,
})

export const usageImportSet = ImportSet({
    $id: Now.ID['x_snc_util_da_usage_importset'],
    name: 'Usage Import Set',
    sourceTable: 'x_snc_util_da_usage_staging',
    targetTable: 'x_snc_util_da_usage',
    active: true,
    enforceMandatoryFields: 'no',
    fields: {
        nmi: { sourceField: 'nmi_number', referenceValueField: 'nmi_number' },
        usage_date: { sourceField: 'usage_date', dateFormat: 'yyyy-MM-dd' },
        interval_kwh: { sourceField: 'interval_kwh' },
        demand_kw: { sourceField: 'demand_kw' },
    },
    runScript: false,
})

export const billingImportSet = ImportSet({
    $id: Now.ID['x_snc_util_da_billing_importset'],
    name: 'Billing Import Set',
    sourceTable: 'x_snc_util_da_billing_staging',
    targetTable: 'x_snc_util_da_billing',
    active: true,
    enforceMandatoryFields: 'no',
    fields: {
        nmi: { sourceField: 'nmi_number', referenceValueField: 'nmi_number' },
        bill_date: { sourceField: 'bill_date', dateFormat: 'yyyy-MM-dd' },
        due_date: { sourceField: 'due_date', dateFormat: 'yyyy-MM-dd' },
        paid_date: { sourceField: 'paid_date', dateFormat: 'yyyy-MM-dd' },
        amount: { sourceField: 'amount' },
        status: { sourceField: 'status' },
    },
    runScript: false,
})

export const meterReadImportSet = ImportSet({
    $id: Now.ID['x_snc_util_da_meter_read_importset'],
    name: 'Meter Read Import Set',
    sourceTable: 'x_snc_util_da_meter_read_staging',
    targetTable: 'x_snc_util_da_meter_read',
    active: true,
    enforceMandatoryFields: 'no',
    fields: {
        nmi: { sourceField: 'nmi_number', referenceValueField: 'nmi_number' },
        read_date: { sourceField: 'read_date', dateFormat: 'yyyy-MM-dd' },
        read_type: { sourceField: 'read_type' },
        reading_kwh: { sourceField: 'reading_kwh' },
        previous_reading_kwh: { sourceField: 'previous_reading_kwh' },
    },
    runScript: false,
})

export const solarExportImportSet = ImportSet({
    $id: Now.ID['x_snc_util_da_solar_export_importset'],
    name: 'Solar Export Import Set',
    sourceTable: 'x_snc_util_da_solar_export_staging',
    targetTable: 'x_snc_util_da_solar_export',
    active: true,
    enforceMandatoryFields: 'no',
    fields: {
        nmi: { sourceField: 'nmi_number', referenceValueField: 'nmi_number' },
        export_date: { sourceField: 'export_date', dateFormat: 'yyyy-MM-dd' },
        export_kwh: { sourceField: 'export_kwh' },
        feed_in_credit: { sourceField: 'feed_in_credit' },
    },
    runScript: false,
})
