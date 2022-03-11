export function createArticle(api, article) {
  return api.$post('create', article)
}