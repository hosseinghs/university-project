const baseUrl = 'articles';

export function getArticlesApi(api, type) {
  return api.$get(baseUrl + `/get?type=${type}`);
}

export function getCategoryApi(api) {
  return api.$get(baseUrl + '/category');
}

export function getArticleByIdApi(api, articleId) {
  return api.$get(baseUrl + '/singleArticle' + `?id=${articleId}`);
}

export function getLatestArticlesApi(api) {
  return api.$get(baseUrl + '/latestArticles');
}

export function getArticelsWithCategoryWithCategoryIdApi(api, name) {
  return api.$get(baseUrl + '/getArticelsWithCategory?category=' + name);
}
