const baseUrl = 'articles';

export function getArticlesApi(api, type) {
  return api.$get(baseUrl + `/get?type=${type}`);
}

export function getCategoryApi(api) {
  return api.$get(baseUrl + '/category');
}

export function getArticleByIdApi(api, articleId) {
  return api.$get(baseUrl);
}
