import { shallowMount } from '@vue/test-utils';
import 'src/module/sw-sales-channel/view/sw-sales-channel-detail-base';

const PRODUCT_COMPARISON_TYPE_ID = 'ed535e5722134ac1aa6524f73e26881b';
const STOREFRONT_SALES_CHANNEL_TYPE_ID = '8a243080f92e4c719546314b577cf82b';

function createWrapper(privileges = []) {
    return shallowMount(Shopware.Component.build('sw-sales-channel-detail-base'), {
        stubs: {
            'sw-card': true,
            'sw-field': true,
            'sw-container': true,
            'sw-entity-single-select': true,
            'sw-sales-channel-defaults-select': true,
            'router-link': true,
            'sw-icon': true,
            'sw-button': true,
            'sw-radio-field': true,
            'sw-multi-tag-ip-select': true
        },
        provide: {
            salesChannelService: {},
            productExportService: {},
            knownIpsService: {
                getKnownIps: () => Promise.resolve()
            },
            repositoryFactory: {},
            acl: {
                can: (identifier) => {
                    if (!identifier) { return true; }

                    return privileges.includes(identifier);
                }
            }
        },
        mocks: {
            $tc: v => v
        },
        propsData: {
            salesChannel: {},
            productExport: {},
            customFieldSets: []
        }
    });
}

describe('src/module/sw-sales-channel/view/sw-sales-channel-detail-base', () => {
    it('should be a Vue.js component', () => {
        const wrapper = createWrapper();

        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('should have the select template field disabled', () => {
        const wrapper = createWrapper();
        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const selectField = wrapper.find(
            'sw-select-field[placeholder="sw-sales-channel.detail.productComparison.templates.placeholderSelectTemplate"]'
        );

        expect(selectField.attributes().disabled).toBe('true');
    });

    it('should have the select template field enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const selectField = wrapper.find(
            'sw-select-field[placeholder="sw-sales-channel.detail.productComparison.templates.placeholderSelectTemplate"]'
        );

        expect(selectField.attributes().disabled).toBeUndefined();
    });

    it('should have the name field disabled', () => {
        const wrapper = createWrapper();
        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const field = wrapper.find(
            'sw-field-stub[placeholder="sw-sales-channel.detail.placeholderName"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the name field enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const field = wrapper.find(
            'sw-field-stub[placeholder="sw-sales-channel.detail.placeholderName"]'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the navigation category id field disabled', () => {
        const wrapper = createWrapper();

        const field = wrapper.find(
            '.sw-sales-channel-detail__select-navigation-category-id'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the navigation category id field enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        const field = wrapper.find(
            '.sw-sales-channel-detail__select-navigation-category-id'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the navigation category depth field disabled', () => {
        const wrapper = createWrapper();

        const field = wrapper.find(
            'sw-field-stub[label="sw-sales-channel.detail.navigationCategoryDepth"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the navigation category depth field enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        const field = wrapper.find(
            'sw-field-stub[label="sw-sales-channel.detail.navigationCategoryDepth"]'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the service category id field disabled', () => {
        const wrapper = createWrapper();

        const field = wrapper.find(
            '.sw-sales-channel-detail__select-service-category-id'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the service category id field enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        const field = wrapper.find(
            '.sw-sales-channel-detail__select-service-category-id'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the customer group id field disabled', () => {
        const wrapper = createWrapper();

        const field = wrapper.find(
            '.sw-sales-channel-detail__select-service-category-id'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the customer group id field enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        const field = wrapper.find(
            '.sw-sales-channel-detail__select-service-category-id'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the sales channel defaults select for countries field disabled', () => {
        const wrapper = createWrapper();

        const field = wrapper.find(
            'sw-sales-channel-defaults-select-stub[propertyname="countries"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the sales channel defaults select for countries field enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        const field = wrapper.find(
            'sw-sales-channel-defaults-select-stub[propertyname="countries"]'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the sales channel defaults select for languages field disabled', () => {
        const wrapper = createWrapper();

        const field = wrapper.find(
            'sw-sales-channel-defaults-select-stub[propertyname="languages"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the sales channel defaults select for languages field enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        const field = wrapper.find(
            'sw-sales-channel-defaults-select-stub[propertyname="languages"]'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the sales channel defaults select for paymentMethods field disabled', () => {
        const wrapper = createWrapper();

        const field = wrapper.find(
            'sw-sales-channel-defaults-select-stub[propertyname="paymentMethods"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the sales channel defaults select for paymentMethods field enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        const field = wrapper.find(
            'sw-sales-channel-defaults-select-stub[propertyname="paymentMethods"]'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the sales channel defaults select for shippingMethods field disabled', () => {
        const wrapper = createWrapper();

        const field = wrapper.find(
            'sw-sales-channel-defaults-select-stub[propertyname="shippingMethods"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the sales channel defaults select for shippingMethods field enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        const field = wrapper.find(
            'sw-sales-channel-defaults-select-stub[propertyname="shippingMethods"]'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the sales channel defaults select for currencies field disabled', () => {
        const wrapper = createWrapper();

        const field = wrapper.find(
            'sw-sales-channel-defaults-select-stub[propertyname="currencies"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the sales channel defaults select for currencies field enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        const field = wrapper.find(
            'sw-sales-channel-defaults-select-stub[propertyname="currencies"]'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the radio select field for taxCalculationType disabled', () => {
        const wrapper = createWrapper();

        const field = wrapper.find(
            '.sw-sales-channel-detail__tax-calculation'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the radio select field for taxCalculationType enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        const field = wrapper.find(
            '.sw-sales-channel-detail__tax-calculation'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the sales-channel-detail-hreflang component disabled', () => {
        const wrapper = createWrapper();

        wrapper.setProps({
            salesChannel: {
                typeId: STOREFRONT_SALES_CHANNEL_TYPE_ID
            }
        });

        const field = wrapper.find(
            'sw-sales-channel-detail-hreflang'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the sales-channel-detail-hreflang component enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        wrapper.setProps({
            salesChannel: {
                typeId: STOREFRONT_SALES_CHANNEL_TYPE_ID
            }
        });

        const field = wrapper.find(
            'sw-sales-channel-detail-hreflang'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the sales-channel-detail-domains component disabled', () => {
        const wrapper = createWrapper();

        wrapper.setProps({
            salesChannel: {
                typeId: STOREFRONT_SALES_CHANNEL_TYPE_ID
            }
        });

        const field = wrapper.find(
            'sw-sales-channel-detail-domains'
        );

        expect(field.attributes().disableedit).toBe('true');
    });

    it('should have the sales-channel-detail-domains component enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        wrapper.setProps({
            salesChannel: {
                typeId: STOREFRONT_SALES_CHANNEL_TYPE_ID
            }
        });

        const field = wrapper.find(
            'sw-sales-channel-detail-domains'
        );

        expect(field.attributes().disableedit).toBeUndefined();
    });

    it('should have the select field for product export storefront sales channel id disabled', () => {
        const wrapper = createWrapper();

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const field = wrapper.find(
            '.sw-sales-channel-detail__product-comparison-storefront'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the select field for product export storefront sales channel id enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const field = wrapper.find(
            '.sw-sales-channel-detail__product-comparison-storefront'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the select field for product export sales channel domain id disabled', () => {
        const wrapper = createWrapper();

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            },
            productExport: {
                salesChannelDomainId: '1a',
                storefrontSalesChannelId: '2b'
            }
        });

        const field = wrapper.find(
            '.sw-sales-channel-detail__product-comparison-domain'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the select field for product export sales channel domain id enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            },
            productExport: {
                salesChannelDomainId: '1a',
                storefrontSalesChannelId: '2b'
            }
        });

        const field = wrapper.find(
            '.sw-sales-channel-detail__product-comparison-domain'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the select field for product export currency id disabled', () => {
        const wrapper = createWrapper();

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            },
            productExport: {
                salesChannelDomain: {}
            }
        });

        const field = wrapper.find(
            'sw-entity-single-select-stub[entity="currency"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the select field for product export currency id enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            },
            productExport: {
                salesChannelDomain: {}
            }
        });

        const field = wrapper.find(
            'sw-entity-single-select-stub[entity="currency"]'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the select field for product export sales channel domain language id disabled', () => {
        const wrapper = createWrapper();

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            },
            productExport: {
                salesChannelDomain: {}
            }
        });

        const field = wrapper.find(
            'sw-entity-single-select-stub[entity="language"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the select field for product export sales channel domain language id disabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            },
            productExport: {
                salesChannelDomain: {}
            }
        });

        const field = wrapper.find(
            'sw-entity-single-select-stub[entity="language"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the select field for product export sales channel customer group id disabled', () => {
        const wrapper = createWrapper();

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            },
            productExport: {
                salesChannelDomain: {}
            }
        });

        const field = wrapper.find(
            'sw-entity-single-select-stub[entity="customer_group"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the select field for product export sales channel customer group id disabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            },
            productExport: {
                salesChannelDomain: {}
            }
        });

        const field = wrapper.find(
            'sw-entity-single-select-stub[entity="customer_group"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the field for product export file name disabled', () => {
        const wrapper = createWrapper();

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const field = wrapper.find(
            'sw-field-stub[placeholder="sw-sales-channel.detail.productComparison.placeholderFileName"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the field for product export file name enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const field = wrapper.find(
            'sw-field-stub[placeholder="sw-sales-channel.detail.productComparison.placeholderFileName"]'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the select field for product export encoding disabled', () => {
        const wrapper = createWrapper();

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const field = wrapper.find(
            'sw-select-field[placeholder="sw-sales-channel.detail.productComparison.placeholderSelectEncoding"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the select field for product export encoding enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const field = wrapper.find(
            'sw-select-field[placeholder="sw-sales-channel.detail.productComparison.placeholderSelectEncoding"]'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the select field for product export file format disabled', () => {
        const wrapper = createWrapper();

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const field = wrapper.find(
            'sw-select-field[placeholder="sw-sales-channel.detail.productComparison.placeholderSelectFileFormat"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the select field for product export file format enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const field = wrapper.find(
            'sw-select-field[placeholder="sw-sales-channel.detail.productComparison.placeholderSelectFileFormat"]'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the field for product export includeVariants disabled', () => {
        const wrapper = createWrapper();

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const field = wrapper.find(
            'sw-field-stub[label="sw-sales-channel.detail.productComparison.includeVariants"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the field for product export includeVariants enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const field = wrapper.find(
            'sw-field-stub[label="sw-sales-channel.detail.productComparison.includeVariants"]'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the select number field for product export interval disabled', () => {
        const wrapper = createWrapper();

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const field = wrapper.find(
            'sw-select-number-field[label="sw-sales-channel.detail.productComparison.interval"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the select number field for product export interval enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const field = wrapper.find(
            'sw-select-number-field[label="sw-sales-channel.detail.productComparison.interval"]'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the switch field for product export generateByCronjob disabled', () => {
        const wrapper = createWrapper();

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const field = wrapper.find(
            'sw-field-stub[label="sw-sales-channel.detail.productComparison.generateByCronjob"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the switch field for product export generateByCronjob enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const field = wrapper.find(
            'sw-field-stub[label="sw-sales-channel.detail.productComparison.generateByCronjob"]'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the entity single field for product export productStreamId disabled', () => {
        const wrapper = createWrapper();

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const field = wrapper.find(
            '.sw-sales-channel-detail__product-comparison-product-stream'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the entity single field for product export productStreamId enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const field = wrapper.find(
            '.sw-sales-channel-detail__product-comparison-product-stream'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the field for salesChannel accessKey disabled', () => {
        const wrapper = createWrapper();

        wrapper.setProps({
            salesChannel: {}
        });

        const field = wrapper.find(
            'sw-field-stub[label="sw-sales-channel.detail.labelAccessKeyField"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the field for salesChannel accessKey disabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        wrapper.setProps({
            salesChannel: {}
        });

        const field = wrapper.find(
            'sw-field-stub[label="sw-sales-channel.detail.labelAccessKeyField"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the button for generate keys disabled', () => {
        const wrapper = createWrapper();

        wrapper.setProps({
            salesChannel: {}
        });

        const field = wrapper.find(
            '.sw-sales-channel-detail-base__button-generate-keys'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the button for generate keys enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        wrapper.setProps({
            salesChannel: {}
        });

        const field = wrapper.find(
            '.sw-sales-channel-detail-base__button-generate-keys'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the field for productExport accesKey disabled', () => {
        const wrapper = createWrapper();

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const field = wrapper.find(
            'sw-field-stub[label="sw-sales-channel.detail.productComparison.accessKey"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the field for productExport accesKey disabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            }
        });

        const field = wrapper.find(
            'sw-field-stub[label="sw-sales-channel.detail.productComparison.accessKey"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the field for productExport accesUrl disabled', () => {
        const wrapper = createWrapper();

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            },
            productExport: {
                salesChannelDomainId: '1a2b3c'
            }
        });

        const field = wrapper.find(
            'sw-field-stub[label="sw-sales-channel.detail.productComparison.accessUrl"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the field for productExport accesUrl disabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        wrapper.setProps({
            salesChannel: {
                typeId: PRODUCT_COMPARISON_TYPE_ID
            },
            productExport: {
                salesChannelDomainId: '1a2b3c'
            }
        });

        const field = wrapper.find(
            'sw-field-stub[label="sw-sales-channel.detail.productComparison.accessUrl"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the button for generating the keys disabled', () => {
        const wrapper = createWrapper();

        const field = wrapper.find(
            '.sw-sales-channel-detail-base__button-generate-keys'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the button for generating the keys enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        const field = wrapper.find(
            '.sw-sales-channel-detail-base__button-generate-keys'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the switch field for salesChannel active disabled', () => {
        const wrapper = createWrapper();

        const field = wrapper.find(
            'sw-field-stub[label="sw-sales-channel.detail.labelInputActive"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the switch field for salesChannel active enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        const field = wrapper.find(
            'sw-field-stub[label="sw-sales-channel.detail.labelInputActive"]'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the switch field for salesChannel maintenance disabled', () => {
        const wrapper = createWrapper();

        const field = wrapper.find(
            'sw-field-stub[label="sw-sales-channel.detail.labelMaintenanceActive"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the switch field for salesChannel maintenance enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        const field = wrapper.find(
            'sw-field-stub[label="sw-sales-channel.detail.labelMaintenanceActive"]'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });

    it('should have the field multi tag ip select for maintenanceIpWhitelist disabled', () => {
        const wrapper = createWrapper();

        const field = wrapper.find(
            'sw-multi-tag-ip-select-stub[label="sw-sales-channel.detail.ipAddressWhitleList"]'
        );

        expect(field.attributes().disabled).toBe('true');
    });

    it('should have the field multi tag ip select for maintenanceIpWhitelist enabled', () => {
        const wrapper = createWrapper([
            'sales_channel.editor'
        ]);

        const field = wrapper.find(
            'sw-multi-tag-ip-select-stub[label="sw-sales-channel.detail.ipAddressWhitleList"]'
        );

        expect(field.attributes().disabled).toBeUndefined();
    });
});