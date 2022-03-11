export function loginUserApi(api, user) {
  return api.$post('login', user)
}
