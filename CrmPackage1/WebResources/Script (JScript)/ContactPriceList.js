define(["require", "exports", 'Common/Utils/EntityUtils', 'Common/Utils/ODataQueryOptions'], function (require, exports, EntityUtils_1, ODataQueryOptions_1) {
    "use strict";
    var ContactPriceList = (function () {
        function ContactPriceList(entity) {
            this.id = EntityUtils_1.default.entityReferenceIdToString(entity.msdyn_PriceList);
            if (entity.msdyn_pricelevel_msdyn_contactpricelist_PriceList) {
                this.priceListId = EntityUtils_1.default.entityReferenceIdToString(entity.msdyn_PriceList);
                this.currencyId = EntityUtils_1.default.entityReferenceIdToString(entity.msdyn_pricelevel_msdyn_contactpricelist_PriceList.TransactionCurrencyId);
                this.startDate = entity.msdyn_pricelevel_msdyn_contactpricelist_PriceList.BeginDate;
                this.endDate = entity.msdyn_pricelevel_msdyn_contactpricelist_PriceList.EndDate;
                this.module = EntityUtils_1.default.optionSetToString(entity.msdyn_pricelevel_msdyn_contactpricelist_PriceList.msdyn_Module);
                this.entity = entity.msdyn_pricelevel_msdyn_contactpricelist_PriceList.msdyn_Entity;
                this.priceList = entity.msdyn_PriceList;
            }
        }
        ;
        ContactPriceList.filterForCustomerById = function (customerId) {
            var queryOptions = new ODataQueryOptions_1.default();
            var simpleFields = ['msdyn_PriceList'];
            var relatedFields = {};
            relatedFields[this.relationships.priceList] = ['msdyn_Entity', 'msdyn_Module', 'BeginDate', 'EndDate', 'Description', 'TransactionCurrencyId'];
            EntityUtils_1.default.populateODataQuery(queryOptions, simpleFields, relatedFields);
            queryOptions.$filter.fieldNameAsId('msdyn_Contact').eq.guid(customerId);
            return queryOptions;
        };
        ContactPriceList.filterForCustomer = function (customer) {
            return ContactPriceList.filterForCustomerById(customer.id);
        };
        ContactPriceList.LogicalName = "msdyn_contactpricelist";
        ContactPriceList.PrimaryKeyName = "msdyn_contactpricelistId";
        ContactPriceList.relationships = {
            priceList: 'msdyn_pricelevel_msdyn_contactpricelist_PriceList'
        };
        return ContactPriceList;
    }());
    exports.default = ContactPriceList;
});
