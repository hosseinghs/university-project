export function loginUserApi(api, user) {
  return api.$post('admin/login', user)
}
