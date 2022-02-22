const baseUrl = 'user/ShopList';

export function getUserBasketApi(api) {
  return api.$get(`${baseUrl}`);
}

export function addProductToBasketApi(api, Product) {
  return api.$post(`${baseUrl}`, Product);
}

export function editBasketProductsApi(api, Product) {
  return api.$put(`${baseUrl}`, Product);
}

export function deleteProductFromUserBasketApi(api, productId) {
  return api.$delete(`${baseUrl}?ID=${productId}`);
}
