import { addToArr } from '~/utils/general'
import { Article } from '~/models/article'
import { createArticleApi, getCategoryApi } from '~/services/articles'
export default {
  namespaced: true,
  state: () => ({
    categories: [],
    articles: [],
    article: new Article(),
  }),
  mutations: {
    SET_CATEGORIES(state, categories) {
      const list = state.categories
      list.splice(0)
      addToArr(list, categories)
    },
    SET_ARTICLES(state, articles) {
      const list = state.articles
      list.splice(0)
      addToArr(list, articles)
    },
    ADD_ARTICLE_TO_THE_LIST(state, newArticle) {
      state.articles.push(newArticle)
    },
    CLEAR_ARTICLE_STATE(state) {
      state.article = new Article()
    },
  },
  actions: {
    clearArticle({ commit }) {
      commit('CLEAR_ARTICLE_STATE')
    },
    async getCategories({ commit }) {
      async function apiCall(api) {
        const { res, success } = await getCategoryApi(api)
        if (success) commit('SET_CATEGORIES', res)
        return success
      }
      return await this.$apiCaller(apiCall)()
    },
    async createArticle({ state, commit }) {
      const article = state.article
      async function apiCall(api) {
        const { res, success } = await createArticleApi(api, article)
        if (success) commit('ADD_ARTICLE_TO_THE_LIST', res)
        return success
      }
      return await this.$apiCaller(apiCall)()
    },
  },
}
