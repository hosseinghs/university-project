const baseUrl = 'articles'

export function createArticleApi(api, article) {
  return api.$post(baseUrl + '/create', article)
}

export function getCategoryApi(api) {
  return api.$get(baseUrl + '/category')
}

export function getArticlesApi(api) {
  return api.$get(baseUrl + '/get')
}
