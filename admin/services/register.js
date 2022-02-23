export function signUpUserApi(api, newUserData) {
  return api.$post('SignUp', newUserData)
}

export function signInUserApi(api, user) {
  return api.$post('login', user)
}
