const baseUrl = 'register';

export function signUpUserApi(api, newUserData) {
  return api.$post(baseUrl + '/newUser', newUserData);
}

export function loginApi(api, user) {
  return api.$post(baseUrl + '/login', user);
}
