import { addToArr } from '~/utils/general';
import {
  getCategoryApi,
  getArticlesApi,
  getArticleByIdApi,
  getLatestArticlesApi,
} from '~/services/article';
import { Article } from '~/models/article';

export default {
  namespaced: true,

  state: () => ({
    categories: [],
    articles: [],
    latestArticles: [],
    article: new Article(),
  }),

  mutations: {
    SET_CATEGORIES(state, categories) {
      const list = state.categories;
      list.splice(0);
      addToArr(list, categories);
    },

    SET_ARTICLES(state, arr) {
      const list = state.articles;
      list.splice(0);
      addToArr(list, arr);
    },

    SET_LATEST_ARTICLES(state, arr) {
      const list = state.latestArticles;
      list.splice(0);
      addToArr(list, arr);
    },

    SET_ARTICLE(state, article) {
      state.article = Object.assign({}, article);
    },
  },

  actions: {
    async getCategories({ commit }) {
      async function apiCall(api) {
        const { res, success } = await getCategoryApi(api);
        if (success) commit('SET_CATEGORIES', res);
        return success;
      }
      return await this.$apiCaller(apiCall)();
    },

    async getArticles({ commit }, type = 2) {
      async function apiCall(api) {
        const { success, res } = await getArticlesApi(api, type);
        if (success) commit('SET_ARTICLES', res);
        return success;
      }
      return await this.$apiCaller(apiCall)();
    },

    async getArticleById({ commit }, articleId) {
      async function apiCall(api) {
        const { success, res } = await getArticleByIdApi(api, articleId);
        if (success) commit('SET_ARTICLE', res);
        return success;
      }
      return await this.$apiCaller(apiCall)();
    },

    async getLatestArticles({ commit }, articleId) {
      async function apiCall(api) {
        const { success, res } = await getLatestArticlesApi(api, articleId);
        if (success) commit('SET_LATEST_ARTICLES', res);
        return success;
      }
      return await this.$apiCaller(apiCall)();
    },
  },
};
