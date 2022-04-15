import { addToArr } from '~/utils/general';
import { getCategoryApi, getArticlesApi } from '~/services/article';

export default {
  namespaced: true,

  state: () => ({
    categories: [],
    articles: [],
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
  },
};
