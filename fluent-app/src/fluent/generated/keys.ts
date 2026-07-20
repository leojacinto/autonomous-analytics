import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'c7464503734b43bd8c9788c07d0cbf78'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'e022b8464ce045e4865f328a5cb605f7'
                    }
                    x_snc_util_da_billing_importset: {
                        table: 'sys_transform_map'
                        id: '0bafda9316484b3cb8c28f6fc215fddf'
                    }
                    x_snc_util_da_customer_importset: {
                        table: 'sys_transform_map'
                        id: '820538f3f3d1492b903a16edc14a6a16'
                    }
                    x_snc_util_da_meter_read_importset: {
                        table: 'sys_transform_map'
                        id: '85390bb1cc3f48b3bdc59fcc1a3fbebe'
                    }
                    x_snc_util_da_nmi_importset: {
                        table: 'sys_transform_map'
                        id: '27ca693435674c90a94e5b8b2dfb4833'
                    }
                    x_snc_util_da_property_importset: {
                        table: 'sys_transform_map'
                        id: '190c7131c67c4706a820518d2eac3a26'
                    }
                    x_snc_util_da_solar_export_importset: {
                        table: 'sys_transform_map'
                        id: '9adea8aecc9f4dd7b7d7b3ff58d08045'
                    }
                    x_snc_util_da_usage_importset: {
                        table: 'sys_transform_map'
                        id: '258c70e3369a45e1a7445406d5ceb4d9'
                    }
                }
                composite: [
                    {
                        table: 'sys_transform_entry'
                        id: '004df58ebd4848e38c8689150ca8acf0'
                        key: {
                            map: '820538f3f3d1492b903a16edc14a6a16'
                            target_field: 'external_id'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '012a50e605f84e29b85426316b93482c'
                        key: {
                            map: '820538f3f3d1492b903a16edc14a6a16'
                            target_field: 'customer_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '01530deb74e74e76a6ace14e52d7d7d5'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'external_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '01f275fc7160404cb475189fd1887326'
                        key: {
                            name: 'x_snc_util_da_customer'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '03339f40993e4ff0b3a535dc90ac4416'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0427f4b863ab4706bb6940bcf31c92c5'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'property_external_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '04c609bd68a24f8f8cc52bceb8562f30'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'dnsp'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '05e3a5ce65be44c9a5c7947fdea731e1'
                        key: {
                            name: 'x_snc_util_da_customer_staging'
                            element: 'signup_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0684171b73d34241926c963aad956607'
                        key: {
                            name: 'x_snc_util_da_usage'
                            element: 'nmi'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '07d3b2aec9aa4fd59ec3aad8e011df7b'
                        key: {
                            name: 'x_snc_util_da_solar_export_staging'
                            element: 'export_kwh'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0843fc0b7027449db9889cada2438cab'
                        key: {
                            name: 'x_snc_util_da_usage'
                            element: 'usage_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '08b2ef081f8d4d399b303cdb9842b76e'
                        key: {
                            name: 'x_snc_util_da_meter_read_staging'
                            element: 'reading_kwh'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '095800d96c8d41a49164d2d5c2e9833f'
                        key: {
                            name: 'x_snc_util_da_usage'
                            element: 'demand_kw'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0ca3e682a02e4a77a33813d2c38c8249'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'connection_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '0cc9a0e8f96f40f392807533e71416a6'
                        key: {
                            name: 'x_snc_util_da_customer'
                            element: 'customer_type'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '0e09301a82554e168cad6d7e8d9db1ff'
                        key: {
                            map: '258c70e3369a45e1a7445406d5ceb4d9'
                            target_field: 'demand_kw'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f67be254eea418e8888a181043e9f5e'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'hardship_flag'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '10fd12bb013b478faf7c159f9fe2a7b5'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '12254fe60663457dbc5b23cb089e485d'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'connection_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1238d802be8c49a1b49aa6e8be1621db'
                        key: {
                            name: 'x_snc_util_da_meter_read_staging'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '12584a9c8c5f444aaf9fb673025a09f7'
                        key: {
                            map: '820538f3f3d1492b903a16edc14a6a16'
                            target_field: 'phone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '12b259ffcc20418e99eff6dd6b6b0317'
                        key: {
                            name: 'x_snc_util_da_customer_staging'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '13236ec9173b46d39c71ec91d17e9dff'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'customer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '132f56d797e247eaaf2cb4729c55a887'
                        key: {
                            name: 'x_snc_util_da_meter_read_staging'
                            element: 'read_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '14b6f621c42941b6b771ba5fef3f388a'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'paid_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '14cb26bd918e42498f1823a53ab7624e'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'connection_type'
                            value: 'three_phase'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '163184537a214920a2dcd61364a4ef29'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'amount'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1697962eebea4cf281687299439bbcbe'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'nmi'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1759bcbfebba470c9db264d5fb3b4767'
                        key: {
                            name: 'x_snc_util_da_usage'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1812b5fdfe064578b5c841b402da21b6'
                        key: {
                            name: 'x_snc_util_da_property_staging'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '19205efd4bc54c19b61eb0d1b8fd31d1'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'connection_type'
                            value: 'single_phase'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '198bebfe96404284b9dbc708beed680e'
                        key: {
                            name: 'x_snc_util_da_property_staging'
                            element: 'suburb'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '19ba5da12ddb4e2aa3169a9fa8df0880'
                        key: {
                            name: 'x_snc_util_da_meter_read'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '1a4c8668b57846898f1a9bda6e4c7709'
                        key: {
                            map: '27ca693435674c90a94e5b8b2dfb4833'
                            target_field: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1cbeb0179a1f4df0861d0e4a9db61de4'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'bill_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1cd2367f0008457da959d827ec48302f'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'tamper_flag'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1f3e2cae86134afa85b2a9eff861f5a1'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'state'
                            value: 'VIC'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1f5c959b420a43fba7a9368b35baaa97'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '241f81d13d8845bbb3b00c7b28ba396e'
                        key: {
                            name: 'x_snc_util_da_property_staging'
                            element: 'suburb'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '24a830e4e15e4270b109febd30689f78'
                        key: {
                            name: 'x_snc_util_da_meter_read_staging'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '25313ded7672496a9bfe87344dafc63d'
                        key: {
                            name: 'x_snc_util_da_usage_staging'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2697c2e2b132436cba24a882e735f9ad'
                        key: {
                            name: 'x_snc_util_da_customer_staging'
                            element: 'external_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '27934492b3774709b077ecea844b1e72'
                        key: {
                            name: 'x_snc_util_da_usage_staging'
                            element: 'usage_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '27d8c6f9d2874db1962333d5b012cc6a'
                        key: {
                            name: 'x_snc_util_da_billing_staging'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '29a9288c34be420e91f072b6b8a6e29c'
                        key: {
                            name: 'x_snc_util_da_nmi'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2a02959d6f0c481ba3cb0128ca24f3ad'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'property_type'
                            value: 'apartment'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2aac2d216b15425cb0b341c95ef65228'
                        key: {
                            name: 'x_snc_util_da_billing_staging'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2ab4aedeb411455aae1cab4ea50073d2'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'tariff'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2ab7ed14314148f8b3a79106104dd805'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'property'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2b8ef2a5f0704c99a2c7850baf1b6450'
                        key: {
                            name: 'x_snc_util_da_usage_staging'
                            element: 'usage_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2c3eb66d6a7f45f08befe3ec56884d5e'
                        key: {
                            name: 'x_snc_util_da_solar_export_staging'
                            element: 'export_date'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '2ce3612577d54c3c86c651e5d71d986b'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'property_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2ce8ad27f8dc41d590c3c9918a1485d0'
                        key: {
                            name: 'x_snc_util_da_customer'
                            element: 'customer_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '2dc77c6d86904d30bf1b06088a6daa37'
                        key: {
                            map: '9adea8aecc9f4dd7b7d7b3ff58d08045'
                            target_field: 'feed_in_credit'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '2df7ffcd2ea64d1d8a2cd9164424da76'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '2e34f2a969ca4ab4a2b20b7d4a8c748d'
                        key: {
                            map: '0bafda9316484b3cb8c28f6fc215fddf'
                            target_field: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2f2075391c9d4c1fbdbf8876467766a7'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'status'
                            value: 'disconnected'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '30a8ee86cfad41d590f84ab37c6b1156'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3176341f8942459a9c1d623bc0dfeb61'
                        key: {
                            name: 'x_snc_util_da_usage_staging'
                            element: 'nmi_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '32346f2e869a4341b6e70c829f330574'
                        key: {
                            name: 'x_snc_util_da_customer'
                            element: 'signup_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '330906d3ea024d42931f859ce091d33c'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'connection_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '357947af8d4c4d43ac98d3eb13d51413'
                        key: {
                            name: 'x_snc_util_da_meter_read'
                            element: 'read_type'
                            value: 'actual'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3586440c8bbf4121a40a3dbd6a5010fa'
                        key: {
                            name: 'x_snc_util_da_customer'
                            element: 'external_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '35b99296f55f4f68942023509269f5fb'
                        key: {
                            name: 'x_snc_util_da_solar_export_staging'
                            element: 'feed_in_credit'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3639d0a6f6ab4265bad3fd4358054ef2'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '3775c76e36124608bf9c484120480ff7'
                        key: {
                            name: 'x_snc_util_da_property'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '37976c0622204c8c99db46288665d994'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'status'
                            value: 'final_bill'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '390f39b442254e1191fd6b1cbb24c94a'
                        key: {
                            name: 'x_snc_util_da_solar_export'
                            element: 'nmi'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3a3d7b69ca8c4b43ba76f5f974b9366b'
                        key: {
                            name: 'x_snc_util_da_meter_read'
                            element: 'nmi'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3a5d115a8a164519b3ae57c84c77142e'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'status'
                            value: 'current'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3c530751c45f448183a9086e12c1b869'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'nmi_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3c5591a229fb45f1951a81a72bff21ae'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'dnsp'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3c770c1bf267410ebd1acf926212b4ad'
                        key: {
                            name: 'x_snc_util_da_customer'
                            element: 'external_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3c932cbe42134e31b05236dc71ec7456'
                        key: {
                            name: 'x_snc_util_da_solar_export_staging'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3cd1938d08854714af069cf75590ad3c'
                        key: {
                            name: 'x_snc_util_da_meter_read'
                            element: 'read_date'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '3cdca3739763438b9383320af75d72bc'
                        key: {
                            name: 'x_snc_util_da_usage'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3d0af77d7cf444fdb7cbf2b363b92192'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'property_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3f4067aa27494bfba78c072e9a642645'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '401a4e48fd3a455b97ca680e662a44bc'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'connection_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '410a2f8df8aa4712a51b716fab6da04f'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '42e41a14c2264a1f9119042ea5b192c3'
                        key: {
                            name: 'x_snc_util_da_meter_read'
                            element: 'read_type'
                            value: 'estimated'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '42fd1f2f895c43089aed9efc418b6d1d'
                        key: {
                            name: 'x_snc_util_da_solar_export'
                            element: 'export_date'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '4538efb8a7f3471b854ae1d335d3ba95'
                        key: {
                            map: '820538f3f3d1492b903a16edc14a6a16'
                            target_field: 'customer_type'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '463a667c04724db4987bc3c112b26ed1'
                        key: {
                            name: 'x_snc_util_da_billing_staging'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4836fbb29a454c1481565dc4c6f518c9'
                        key: {
                            name: 'x_snc_util_da_billing_staging'
                            element: 'bill_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '489b3ef9d0204c07a760e0a7710923bb'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'fit_rate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4a91db758b8b4cdd854e4ba35e1cee06'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'installed_capacity_kw'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4afd7e8ed9f34576bfef4f2e450a4ce4'
                        key: {
                            name: 'x_snc_util_da_meter_read_staging'
                            element: 'nmi_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4b0dd1bd35704213bf6f3dd54da310c3'
                        key: {
                            name: 'x_snc_util_da_customer'
                            element: 'customer_type'
                            value: 'residential'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4c12337946f243ea9631aa8c2531b234'
                        key: {
                            name: 'x_snc_util_da_meter_read'
                            element: 'read_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4d9071f3cfc04da89a45450a346d368c'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'state'
                            value: 'QLD'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '51a213c181e74984b09e307efb9cd9f5'
                        key: {
                            name: 'x_snc_util_da_customer'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '524a6b5d2a6347dd89f9c458b85d4cd8'
                        key: {
                            name: 'x_snc_util_da_meter_read_staging'
                            element: 'previous_reading_kwh'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '52ae70bfba1a4257a15b25a31df7db95'
                        key: {
                            name: 'x_snc_util_da_usage_staging'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '52edf94d7e484992a3b3fae4dbb24075'
                        key: {
                            name: 'x_snc_util_da_meter_read_staging'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '52ef53b9fc524f6093b45e740047e503'
                        key: {
                            map: '85390bb1cc3f48b3bdc59fcc1a3fbebe'
                            target_field: 'previous_reading_kwh'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '54d4492ca5a5430f84be3d56124aa508'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'property_type'
                            value: 'townhouse'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '550e37770b294459bc6193437b5a40ae'
                        key: {
                            name: 'x_snc_util_da_meter_read_staging'
                            element: 'nmi_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5641a0c482be4a7092ff688714ddbd2c'
                        key: {
                            name: 'x_snc_util_da_solar_export_staging'
                            element: 'export_kwh'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '574a5ea3f2e74d62b245a3a5a2027de7'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'tariff'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '59660265c4ea44f9a8503acaacec5f09'
                        key: {
                            map: '27ca693435674c90a94e5b8b2dfb4833'
                            target_field: 'connection_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5989b5f30f5f4017b0dd5e9e93c3d87c'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'tariff'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5ac74731c18b4311bf3f72c77e95b74d'
                        key: {
                            name: 'x_snc_util_da_meter_read'
                            element: 'read_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '5bbdb928a90a4c2ab332dece91fb658a'
                        key: {
                            map: '190c7131c67c4706a820518d2eac3a26'
                            target_field: 'address'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5bd71b93ef2d40d1b994fd18c239f5b7'
                        key: {
                            name: 'x_snc_util_da_billing_staging'
                            element: 'nmi_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5c0f830a004040ca874c46987a6f8b39'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'hardship_flag'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '5c584371b5c74063a29d48b1b3eaae1c'
                        key: {
                            name: 'x_snc_util_da_meter_read'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5da23d46dacb4633b64819b2b681a97b'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'installed_capacity_kw'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5ded43dc44a7420ab303b1d4d3b81f51'
                        key: {
                            name: 'x_snc_util_da_billing_staging'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '5f542e77a4194cb39b8391c52977f6c7'
                        key: {
                            map: '27ca693435674c90a94e5b8b2dfb4833'
                            target_field: 'dnsp'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '61204a398ea941d4a315318c8417fc2e'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'connection_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6136fa03960a486096a0bc4edd563e77'
                        key: {
                            name: 'x_snc_util_da_customer_staging'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '623a8d31d0c14ef6adbda017dc388857'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'hardship_flag'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '645d25cdb805460f9262d973a1d00b1c'
                        key: {
                            map: '85390bb1cc3f48b3bdc59fcc1a3fbebe'
                            target_field: 'read_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '648aff3005f2412d97a03e2f3d7e9e11'
                        key: {
                            name: 'x_snc_util_da_customer_staging'
                            element: 'customer_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '64e194cc8c5645598514ec4b55e875f4'
                        key: {
                            map: '9adea8aecc9f4dd7b7d7b3ff58d08045'
                            target_field: 'export_date'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '65476386d3bc4efcb9d7d30bd2d4734b'
                        key: {
                            map: '190c7131c67c4706a820518d2eac3a26'
                            target_field: 'property_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '65dff1b5d9bf4cb589670f57234b2ee9'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'nmi_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '65e45add5bbb47aebc0cf1f409245199'
                        key: {
                            name: 'x_snc_util_da_solar_export'
                            element: 'export_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '66995558d42b42e78905da55510d9207'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'state'
                            value: 'ACT'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '671e66f63e0c4b0abb59ecc6f3519c68'
                        key: {
                            name: 'x_snc_util_da_billing_staging'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '671f9447ab5f431896bf7e9fde40b50b'
                        key: {
                            map: '258c70e3369a45e1a7445406d5ceb4d9'
                            target_field: 'usage_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6803b09e8f304d7cae4f97efe0869366'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'property_type'
                            value: 'house'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '689299173b1e4823beb557a48bf754ff'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'suburb'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '690e1380e1c346e89a048dade11e338c'
                        key: {
                            name: 'x_snc_util_da_meter_read'
                            element: 'nmi'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '694a285fa06c4ccbbdd2cd7f9dffdbe9'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'status'
                            value: 'paid'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '696f99e8549d4f539e67a03dd847fe37'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'nmi_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6b8c91c11ced4b3284c9922f9ef5215f'
                        key: {
                            name: 'x_snc_util_da_property_staging'
                            element: 'postcode'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '6b9ad80d43f64a909abf10a35a1797c8'
                        key: {
                            map: '190c7131c67c4706a820518d2eac3a26'
                            target_field: 'postcode'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '6be6a7bdc3c343df868e3b054b4d006f'
                        key: {
                            name: 'x_snc_util_da_property_staging'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '6cd705a70efa41318df151d1a476298d'
                        key: {
                            map: '85390bb1cc3f48b3bdc59fcc1a3fbebe'
                            target_field: 'reading_kwh'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e610605268345cf929c149c05d3f678'
                        key: {
                            name: 'x_snc_util_da_property_staging'
                            element: 'customer_external_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '709f121dac4b4b90bf07e3f4f5fc0943'
                        key: {
                            name: 'x_snc_util_da_meter_read'
                            element: 'reading_kwh'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '70d6cf7fad1b40ea8183a859f64340b4'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '712484a0438e4fe8931905f74bd3c46d'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '729891c4f9614ca5a3808919b7029d24'
                        key: {
                            name: 'x_snc_util_da_billing_staging'
                            element: 'bill_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '73a2f1cfec6542c58a6f0ae729d08217'
                        key: {
                            name: 'x_snc_util_da_property_staging'
                            element: 'customer_external_id'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '74650fbb623a4ba9aa0c1829db4e2ae0'
                        key: {
                            name: 'x_snc_util_da_solar_export'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '74802dcc4cf1438ebde15547518a69d1'
                        key: {
                            name: 'x_snc_util_da_billing_staging'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '74bf057abc554a9aa0766d0dd51aef04'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'nmi_number'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '754a4930f173477a8ad0bf5df6cdef8e'
                        key: {
                            map: '9adea8aecc9f4dd7b7d7b3ff58d08045'
                            target_field: 'export_kwh'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '76411342344c4ba794025bf408599ceb'
                        key: {
                            name: 'x_snc_util_da_property_staging'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7690492cd2ff4331b012df111b752eb2'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'tariff'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '76a7b2de9143476cb208a08a324d8139'
                        key: {
                            name: 'x_snc_util_da_solar_export_staging'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '783c0ef74f924426b896335666e55146'
                        key: {
                            name: 'x_snc_util_da_customer'
                            element: 'customer_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '786f9d65f6154b1cb08474bd7b11177d'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7912250c59df4078b2a7b9ff187d5a18'
                        key: {
                            name: 'x_snc_util_da_solar_export'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '79ca5940fbb54dc5975c745411310027'
                        key: {
                            name: 'x_snc_util_da_property_staging'
                            element: 'property_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a024101aeff42939a0ffb69f5de8c57'
                        key: {
                            name: 'x_snc_util_da_solar_export'
                            element: 'feed_in_credit'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7ac7b9586c174357bfe08d6ee106d312'
                        key: {
                            name: 'x_snc_util_da_property_staging'
                            element: 'address'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7aefb524c25b47909deb3afc09969262'
                        key: {
                            name: 'x_snc_util_da_customer_staging'
                            element: 'phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7afc318e7b654a4eb86fa90749804244'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7ba5136efd5c46f29d0996866e1ee1d5'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'nmi'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7d3b1529cfec4008b2a678fbcec501b9'
                        key: {
                            name: 'x_snc_util_da_billing'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7e9d4d6e90994b238357c491e2a9a0bb'
                        key: {
                            name: 'x_snc_util_da_usage'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8097823a1fa546a8a35ea9e049c35720'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'tariff'
                            value: 'flat'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '8135f4e4b57b42789841ef7233a5ab24'
                        key: {
                            map: '258c70e3369a45e1a7445406d5ceb4d9'
                            target_field: 'interval_kwh'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '82696178ace344e7baba09abffd1f4d9'
                        key: {
                            map: '9adea8aecc9f4dd7b7d7b3ff58d08045'
                            target_field: 'nmi'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '82b4d0d9af08485d86b442a2bb6f37a6'
                        key: {
                            name: 'x_snc_util_da_customer'
                            element: 'customer_type'
                            value: 'business'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '83508121dcf140fb86c52cb8e06ea6d7'
                        key: {
                            map: '27ca693435674c90a94e5b8b2dfb4833'
                            target_field: 'tariff'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '83c4766b611c4bac806c2f894df21488'
                        key: {
                            name: 'x_snc_util_da_customer_staging'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '848e1eeed0cb4dd1be5182b89c042e26'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '8657826531ee4b058b74fbbfee991234'
                        key: {
                            map: '27ca693435674c90a94e5b8b2dfb4833'
                            target_field: 'property'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '871a64ef323c4e329f208177037eee0d'
                        key: {
                            map: '820538f3f3d1492b903a16edc14a6a16'
                            target_field: 'email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '872e976a0e30476b9d8169c3912341e4'
                        key: {
                            name: 'x_snc_util_da_usage_staging'
                            element: 'interval_kwh'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '873e34b48e7c42a2b6ecf99ff8890923'
                        key: {
                            map: '0bafda9316484b3cb8c28f6fc215fddf'
                            target_field: 'bill_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '88399f2af5b0448f8a158e9102b03740'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'fit_rate'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '88f8065ce34c4be2a76547457bf3007e'
                        key: {
                            name: 'x_snc_util_da_customer_staging'
                            element: 'signup_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a0957d536d94e1a9303c9dc918be609'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'postcode'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8a87869706b84f819331190928d41403'
                        key: {
                            name: 'x_snc_util_da_customer_staging'
                            element: 'customer_name'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '8b219eeb23b844ec87c4c77ccc7fe00a'
                        key: {
                            map: '190c7131c67c4706a820518d2eac3a26'
                            target_field: 'suburb'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8b3e706d74c3485fb9369b062b9a092d'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'bill_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8c10936367114d71a9ac81081e9bd771'
                        key: {
                            name: 'x_snc_util_da_usage_staging'
                            element: 'interval_kwh'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8de1b3b7f45e47b59ecf64a0f798789b'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'status'
                            value: 'credit'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8e268444d8664cd2bbba226d79e41b19'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'status'
                            value: 'overdue'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8e3ed87cfb3b452fbffcec688e33aed7'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'address'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '8ec01aadb53a41148cf274f14d403a7b'
                        key: {
                            name: 'x_snc_util_da_customer_staging'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '904d920a7c574623885b13a732857cc1'
                        key: {
                            name: 'x_snc_util_da_usage_staging'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '91eef97881b4446180fd9236015ad329'
                        key: {
                            map: '27ca693435674c90a94e5b8b2dfb4833'
                            target_field: 'connection_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '929b3ba6768b4674923c4ed4d828a6b2'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'tamper_flag'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9330b53f7526486fa2bcf0e8f8106bd9'
                        key: {
                            name: 'x_snc_util_da_meter_read_staging'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '934b8b260e7842dda392d36f51209b12'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'postcode'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '93f450b42d484e0585819f73ec860247'
                        key: {
                            name: 'x_snc_util_da_customer'
                            element: 'customer_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9409793dc12746b881394e6437e64d55'
                        key: {
                            name: 'x_snc_util_da_solar_export'
                            element: 'export_kwh'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '95ab1c20cb9d4767bb15b2f4c3e410c2'
                        key: {
                            name: 'x_snc_util_da_usage'
                            element: 'nmi'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '969cc1d9c651478da7b3a546fef48e07'
                        key: {
                            map: '85390bb1cc3f48b3bdc59fcc1a3fbebe'
                            target_field: 'nmi'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '96f1693a778f48b496969cd62f062656'
                        key: {
                            map: '27ca693435674c90a94e5b8b2dfb4833'
                            target_field: 'tamper_flag'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '97f78c5dfe9d4f20b9141185d474bb3c'
                        key: {
                            name: 'x_snc_util_da_solar_export_staging'
                            element: 'feed_in_credit'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9834242b6ac547efb7da4c8b614f1558'
                        key: {
                            name: 'x_snc_util_da_customer_staging'
                            element: 'customer_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '989cd22837584b55aea886588c6236e4'
                        key: {
                            name: 'x_snc_util_da_meter_read_staging'
                            element: 'read_date'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '99aa418883ed4990ade2428a6e2340fa'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9b7d223e44ec4da8b7a83ca681ad5b00'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'property_external_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9f1179717f79476da405270a3a96c30d'
                        key: {
                            name: 'x_snc_util_da_customer_staging'
                            element: 'external_id'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'a0463636e08344dcb2ff75b317de23f4'
                        key: {
                            name: 'x_snc_util_da_usage'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a0685cd7d2c946b2bb4c6549fc4ad89b'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'status'
                            value: 'disputed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a0a3e020c2a244d0ab58b8830844786c'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'paid_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a1f1ba9c610447a78b6657721e0ffb40'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'connection_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a303b9fa2c314d9fa77bee3a54f6e717'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'dnsp'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a317264b74cc4f53a42d4776095857ab'
                        key: {
                            name: 'x_snc_util_da_usage'
                            element: 'usage_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a354a34161f8450a856c8c2a3c69b0f9'
                        key: {
                            name: 'x_snc_util_da_meter_read'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a4716ae0b0054f01b29e4b534e7dc313'
                        key: {
                            name: 'x_snc_util_da_meter_read_staging'
                            element: 'read_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a4934f79229c49d18d9e23a3772dfc03'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'dnsp'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a5644be45362474f9f9c98b99939a61e'
                        key: {
                            name: 'x_snc_util_da_billing_staging'
                            element: 'amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a5a023669bd04fc0ab587a3313bce227'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'customer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a5b9f627ace64c65981ef677415110aa'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'a68036d20eaa487bb692f8e602d13008'
                        key: {
                            map: '27ca693435674c90a94e5b8b2dfb4833'
                            target_field: 'nmi_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a763710981a44dd4bf83ac08841d2e71'
                        key: {
                            name: 'x_snc_util_da_billing_staging'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a9cb9529ef1b49ae83312f268fc1f9fc'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a9cea1d963cd4b6787ee5a40d3bcb1e5'
                        key: {
                            name: 'x_snc_util_da_meter_read'
                            element: 'read_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a9f4e67d5d294267a1820bb373aabb79'
                        key: {
                            name: 'x_snc_util_da_meter_read_staging'
                            element: 'reading_kwh'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aa1878c4a08f4cd78992f6d498fdf535'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'aa724574ba7b4ef784c05c7f2cdbeeec'
                        key: {
                            map: '190c7131c67c4706a820518d2eac3a26'
                            target_field: 'customer'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'ab6024d2f5ac4c5ca1f4746606064213'
                        key: {
                            map: '190c7131c67c4706a820518d2eac3a26'
                            target_field: 'state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ab7de3964ec94432a8eda00165c8cb8b'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'tariff'
                            value: 'demand'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ac5bc56093924323b535dff0ce198385'
                        key: {
                            name: 'x_snc_util_da_customer'
                            element: 'customer_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ace2774dd7204f45b444b61980fc33cd'
                        key: {
                            name: 'x_snc_util_da_property_staging'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'acf51979ce1a47b69eb571f8aa21c830'
                        key: {
                            name: 'x_snc_util_da_property_staging'
                            element: 'address'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'af6d918657354250afa5dbe784f08f44'
                        key: {
                            name: 'x_snc_util_da_usage'
                            element: 'interval_kwh'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b256c4e3c6344799bd0e34c8fc8490af'
                        key: {
                            name: 'x_snc_util_da_usage'
                            element: 'interval_kwh'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'b2bb1473b92449b5b664e50549173dcc'
                        key: {
                            map: '0bafda9316484b3cb8c28f6fc215fddf'
                            target_field: 'amount'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b36ed65d723049bbb8b0a7cfeca18d13'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'state'
                            value: 'NSW'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b42977c12606424690ad7c54a3df3fc9'
                        key: {
                            name: 'x_snc_util_da_meter_read_staging'
                            element: 'previous_reading_kwh'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b4692ca052e4453b8bc30bc868c079f6'
                        key: {
                            name: 'x_snc_util_da_billing_staging'
                            element: 'nmi_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b470e2c2924d42babf2e0337b19bf6fc'
                        key: {
                            name: 'x_snc_util_da_solar_export_staging'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'b58819a0869b46dbb684dbb44a50d459'
                        key: {
                            map: '27ca693435674c90a94e5b8b2dfb4833'
                            target_field: 'hardship_flag'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b65d0918f5594df2914f71c7521a2b00'
                        key: {
                            name: 'x_snc_util_da_meter_read'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b66e7edfc1ae4ce1a06933f00bdc2796'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'property'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b69c52ef26bd4fc39eb296519819befa'
                        key: {
                            name: 'x_snc_util_da_customer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b78d556fa25e42e9868e6e08b75bbc77'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b7a4ce8f0fc64c2fb4d2778954a09435'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'tamper_flag'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b86670f7d4ca436a92f0d9772eca8a9c'
                        key: {
                            name: 'x_snc_util_da_solar_export'
                            element: 'export_kwh'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'b973c8de01064c65b1dcd52b527c98ad'
                        key: {
                            map: '0bafda9316484b3cb8c28f6fc215fddf'
                            target_field: 'nmi'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba2f47288dbe4ebeba43b5ff32e2b777'
                        key: {
                            name: 'x_snc_util_da_customer'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'bad31847cffd428db4b23ca477449b8d'
                        key: {
                            name: 'x_snc_util_da_nmi'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bbe42349d3e54ccf91708c5c08620d41'
                        key: {
                            name: 'x_snc_util_da_property_staging'
                            element: 'external_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bc239392969c4ece90a48969badfdc4d'
                        key: {
                            name: 'x_snc_util_da_solar_export'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bc39bb8e8ff8472eba644fbf9c56e9a2'
                        key: {
                            name: 'x_snc_util_da_billing'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bc82fb40fa744bb689dc97a492139004'
                        key: {
                            name: 'x_snc_util_da_billing_staging'
                            element: 'paid_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bd34e14a5add4140bc86916d2a71258d'
                        key: {
                            name: 'x_snc_util_da_solar_export_staging'
                            element: 'nmi_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'bd5f809f6ed94716b2cf9632500fa6b4'
                        key: {
                            name: 'x_snc_util_da_customer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bee59ac48e6543fc86c80c3136be5deb'
                        key: {
                            name: 'x_snc_util_da_customer_staging'
                            element: 'customer_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c1335522dccb4f94aa4b5017f58cd2b3'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'suburb'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c1d26cd700d64e28a084294c63cb821a'
                        key: {
                            name: 'x_snc_util_da_meter_read_staging'
                            element: 'read_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c35a1cf8acba4203b973c421d798971a'
                        key: {
                            name: 'x_snc_util_da_property_staging'
                            element: 'postcode'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c4b37467f71046f09014e1c229b81680'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'status'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'c4d8c6d853c84d2b8491c15bf0f4caa3'
                        key: {
                            name: 'x_snc_util_da_solar_export_staging'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c54a930050a24799b2a706d9e25c8b37'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c6acaeb3a70f42dba4abf0556078934a'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'tariff'
                            value: 'tou'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c6fe6911f7404e1f84b20216d0e1502a'
                        key: {
                            name: 'x_snc_util_da_solar_export'
                            element: 'feed_in_credit'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c7ce8b9889074d31ab2b362f9121a1d2'
                        key: {
                            name: 'x_snc_util_da_billing_staging'
                            element: 'amount'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'c7e5fa825b0f4f0c9070c62fa6925d80'
                        key: {
                            map: '258c70e3369a45e1a7445406d5ceb4d9'
                            target_field: 'nmi'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c9cec28a0fdc46beb665c706961793e7'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'external_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca128e2f6c8c4cd79efb7ab8c0823d83'
                        key: {
                            name: 'x_snc_util_da_meter_read'
                            element: 'reading_kwh'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ca527fafced8479da7888258b4560c08'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'connection_date'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'cabc44b5ce0b483183fcebfa0ceef145'
                        key: {
                            map: '27ca693435674c90a94e5b8b2dfb4833'
                            target_field: 'installed_capacity_kw'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'cb1df54bf9e44772ba401bda5aede60f'
                        key: {
                            map: '85390bb1cc3f48b3bdc59fcc1a3fbebe'
                            target_field: 'read_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cc1f49af454742639f9bf8a9229cb74c'
                        key: {
                            name: 'x_snc_util_da_billing_staging'
                            element: 'paid_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cd1a3178021b43f18df0bdf8fc6cc390'
                        key: {
                            name: 'x_snc_util_da_billing_staging'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cd34fec2afec4018ba90a6cdbec92e63'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'installed_capacity_kw'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cd7021afbaed46f8b0a363755bfb52dc'
                        key: {
                            name: 'x_snc_util_da_property_staging'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cdd29ba5e8a8469397a229e5b2558bb2'
                        key: {
                            name: 'x_snc_util_da_meter_read'
                            element: 'previous_reading_kwh'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'ce9256e92b5748a6bb1c169e1808899b'
                        key: {
                            map: '820538f3f3d1492b903a16edc14a6a16'
                            target_field: 'signup_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd1bac58f9fe54954a4970f84a2eebec8'
                        key: {
                            name: 'x_snc_util_da_usage_staging'
                            element: 'demand_kw'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd2e20ca4c63e42a589afbaa83e714333'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd64b57ddfe2a4ca2b0f9ed61ab8bab6e'
                        key: {
                            name: 'x_snc_util_da_property_staging'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd67e3cc628ab442881b81fd757b30f97'
                        key: {
                            name: 'x_snc_util_da_solar_export_staging'
                            element: 'nmi_number'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd6b78e83b71242e18e7863a837a1ede3'
                        key: {
                            name: 'x_snc_util_da_customer_staging'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd6d839f8832f44a1a7bdb01352c2d505'
                        key: {
                            name: 'x_snc_util_da_usage_staging'
                            element: 'nmi_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd737fc8ad97d486cb0701b510d43c5f6'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd74ef37e03bd4786b54473395c60301c'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'state'
                            value: 'WA'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'da97723eb4164497899ca03bf9d2d54d'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'fit_rate'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'db29c4d55a5446a79584bd4f854015be'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'tariff'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'ddf603b33e3646a7afdc51645aac4d8d'
                        key: {
                            name: 'x_snc_util_da_usage_staging'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ddf90b3f9ba94626a614ca31203d5ef2'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'property_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'de6a49aa00754289b9316ded6a1df8fe'
                        key: {
                            map: '27ca693435674c90a94e5b8b2dfb4833'
                            target_field: 'fit_rate'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'df0bc6e7e7f64880bb3d689c31bc6d99'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'tamper_flag'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'df1a28d85fa8408cae81fcfc3bdded8e'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'connection_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dfee4f3d630943798a4c3120274e30d7'
                        key: {
                            name: 'x_snc_util_da_property_staging'
                            element: 'external_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e214668d25c841debb4877c3e6000969'
                        key: {
                            name: 'x_snc_util_da_nmi_staging'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e21d23e2f758483c9b010a902a9b4aa7'
                        key: {
                            name: 'x_snc_util_da_customer_staging'
                            element: 'phone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e4da43e57ae64cf18382f17dd7c4665c'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'fit_rate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e6113fa0bbbc4588914554b240b0b8c6'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'connection_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e6bad53f60314465900250e6fe368c3d'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e857d969096345959d1a5a0db48a55d6'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'state'
                            value: 'SA'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'eb9709f1d54e4a619c9e5b17b40d89e2'
                        key: {
                            map: '0bafda9316484b3cb8c28f6fc215fddf'
                            target_field: 'paid_date'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ec4e08a6ee8b46ea87dd1fae035ad842'
                        key: {
                            name: 'x_snc_util_da_billing'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ec9d69a40e6b4ef3aad38655d0a0c265'
                        key: {
                            name: 'x_snc_util_da_customer'
                            element: 'signup_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'ecc2b8820ccc444a81743749dd111bcc'
                        key: {
                            name: 'x_snc_util_da_meter_read'
                            element: 'read_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed121a958d67414b9cf2022bd5221b3b'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'address'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'edff47d903404274b2a754f952665f85'
                        key: {
                            name: 'x_snc_util_da_usage'
                            element: 'demand_kw'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'ee0b26dd9a0642049c36cc5ab6249674'
                        key: {
                            map: '0bafda9316484b3cb8c28f6fc215fddf'
                            target_field: 'due_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ee372a1dc57c449eb5c94655ebf0a678'
                        key: {
                            name: 'x_snc_util_da_customer'
                            element: 'phone'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ee518ca28a7d4a0a8dd1225d770d964f'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'state'
                            value: 'TAS'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'efcc94e6ed0c437e87a59a9a4a63eb77'
                        key: {
                            name: 'x_snc_util_da_property_staging'
                            element: 'property_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f01511e260294225a460c09d646e8c0c'
                        key: {
                            name: 'x_snc_util_da_usage_staging'
                            element: 'demand_kw'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f236047b2aeb4f38aeb9f0c8b394f656'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f2917b794d384d97a1d7a27659815987'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'installed_capacity_kw'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f2e2d1e56b344005a9d0a81a75cfd80b'
                        key: {
                            name: 'x_snc_util_da_customer'
                            element: 'phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f2ead03827594db4bc5cf5a5d9f3a990'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'property_type'
                            value: 'commercial'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f3b7005c63da4a2fbc29591919aa4fa8'
                        key: {
                            name: 'x_snc_util_da_solar_export'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f516907ecad14bee8b8be76eb1fed2f7'
                        key: {
                            name: 'x_snc_util_da_property'
                            element: 'state'
                            value: 'NT'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f5d4c0470d694bbc9950d5d2f2eb0ed2'
                        key: {
                            name: 'x_snc_util_da_meter_read'
                            element: 'previous_reading_kwh'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'fa21f6ad851f45dd817221008903dd01'
                        key: {
                            map: '190c7131c67c4706a820518d2eac3a26'
                            target_field: 'external_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'faf2e2454b274102baaa2dd04e2ebc6c'
                        key: {
                            name: 'x_snc_util_da_nmi'
                            element: 'hardship_flag'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'fb7e5a3fa2b04b438763610c7ae5c25d'
                        key: {
                            name: 'x_snc_util_da_property'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fd575aa96747437690b3b1a3d36e5652'
                        key: {
                            name: 'x_snc_util_da_solar_export'
                            element: 'nmi'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fef9bb31c04f4b8dbae06c889076bf72'
                        key: {
                            name: 'x_snc_util_da_customer_staging'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ffc5a97c30094c6f8513b8e363b3272d'
                        key: {
                            name: 'x_snc_util_da_customer'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fffe31691b28428d84c812456aca2797'
                        key: {
                            name: 'x_snc_util_da_solar_export_staging'
                            element: 'export_date'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
