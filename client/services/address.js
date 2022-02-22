const baseUrl = 'user/Address';

export function getUserAddressesApi(api) {
  return api.$get(baseUrl);
}

export function addUserAddressApi(api, address) {
  return api.$post(baseUrl, address);
}

export function editUserAddressApi(api, editedAddress) {
  return api.$put(baseUrl, editedAddress);
}

export function deleteUserAddressApi(api, id) {
  return api.$delete(`${baseUrl}?ID=${id}`);
}
