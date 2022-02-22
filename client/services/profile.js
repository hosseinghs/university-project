const baseUrl = 'user';

export function getUserProfileApi(api) {
  return api.$get(`${baseUrl}/profile`);
}

export function updateProfileApi(api, updatedUserData) {
  return api.$put(`${baseUrl}/profileUpdate`, updatedUserData);
}

export function getFavProductsForEachUserApi(api) {
  return api.$get(`${baseUrl}/Favorites`);
}

export function addToFavApi(api, ProductID) {
  return api.$post(`${baseUrl}/Favorites`, { ProductID });
}

export function deleteProductFromFavApi(api, ProductID) {
  return api.$delete(`${baseUrl}/Favorites?ProductID=${ProductID}`);
}
