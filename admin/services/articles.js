export function createArticleApi(api, article) {
  return api.$post('create', article)
}

export function getCategoryApi(api){
  return api.$get('articles')
}