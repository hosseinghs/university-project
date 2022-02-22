const baseUrl = 'user';

export function signUpUserApi(api, newUserData) {
  return api.$post(`${baseUrl}/register`, newUserData);
}

export function signInUserApi(api, user) {
  return api.$post(`${baseUrl}/login`, user);
}

