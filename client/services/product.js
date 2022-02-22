const baseUrl = 'product';

export function getSidebarProductsApi(api) {
  return api.$get(`${baseUrl}/sidebar`);
}

export function getSubCategoryProductsApi(api, SubCategoryID) {
  return api.$get(
    `${baseUrl}/SubCategoryProducts?SubCategoryID=${SubCategoryID}`
  );
}

export function getSpecialSaleApi(api) {
  return api.$get(`${baseUrl}/SpecialSale`);
}

export function getOffProductsApi(api) {
  return api.$get(`${baseUrl}/OffProducts`);
}

export function getNewProductsApi(api) {
  return api.$get(`${baseUrl}/NewProducts`);
}

export function getHighSalesProductsApi(api) {
  return api.$get(`${baseUrl}/HighSales`);
}

export function searchApi(api, term) {
  return api.$get(`${baseUrl}/SearchProducts?${term}`);
}

export function getSearchFiltersApi(api) {
  return api.$get(`${baseUrl}/SearchParameters`);
}
