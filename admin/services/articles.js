const baseUrl = 'articles'

export function createArticleApi(api, article) {
  return api.$post(baseUrl + '/create', article)
}

export function getCategoryApi(api) {
  return api.$get(baseUrl + '/category')
}

export function getArticlesApi(api, type) {
  return api.$get(baseUrl + `/get?type=${type}`)
}

export function changeArticlePublishmentStateApi(api, id) {
  return api.$put(baseUrl + `/changePublishmentState?id=${id}`)
}
