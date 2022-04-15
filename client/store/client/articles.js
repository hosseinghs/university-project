import { addToArr } from '~/utils/general';
import { getArticlesApi } from '~/services/article';

export default {
  namespaced: true,

  state: () => ({
    articles: [],
  }),

  mutation: {
    SET_ARTICLES(state, arr) {
      const list = state.articles;
      list.splice(0);
      addToArr(list, arr);
    },
  },

  actions: {
    async getArticles({ commit }) {
      async function apiCall(api) {
        const { success, res } = await getArticlesApi(api);
        if (success) commit('SET_ARTICLES', res);
        return success;
      }
      return await this.$apiCaller(apiCall)();
    },
  },
};
