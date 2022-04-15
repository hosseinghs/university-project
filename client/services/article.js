const baseUrl = 'articles';

export function getArticlesApi(api) {
  return api.$get(baseUrl + '/get');
}
