const baseUrl = 'user/Payment';

export function submitPurchaseApi(api, ID) {
  return api.$post(baseUrl, { ID });
}

export function getUserPurchasesApi(api, id) {
  return api.$get(baseUrl, id);
}
