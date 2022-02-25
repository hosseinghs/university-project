export function signInUserApi(api, user) {
  return api.$post('admin/login', user)
}
