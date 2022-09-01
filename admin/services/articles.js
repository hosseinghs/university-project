const baseUrl = 'articles'

export function createArticleApi(api, article) {
  return api.$post(baseUrl + '/create', article)
}

export function editArticleApi(api, article) {
  return api.$put(baseUrl + '/edit', article)
}

export function getCategoryApi(api) {
  return api.$get(baseUrl + '/category')
}

export function getArticlesApi(api, queries) {
  return api.$get(baseUrl + `/get?${queries}`)
}

export function deleteArticleApi(api, id) {
  return api.$delete(baseUrl + `/delete?id=${id}`)
}

export function changePublishmentStateApi(api, { id, isPublished }) {
  return api.$put(
    baseUrl + `/changePublishmentState?id=${id}&isPublished=${isPublished}`
  )
}

export function addNewCategoryApi(api, tag) {
  return api.$post(baseUrl + '/new-category', tag)
}
