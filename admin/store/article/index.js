import { addToArr } from '~/utils/general'
import { Article, Queries } from '~/models/article'
import {
  getCategoryApi,
  getArticlesApi,
  createArticleApi,
  changeArticlePublishmentStateApi,
} from '~/services/articles'

export default {
  namespaced: true,

  state: () => ({
    categories: [],
    articles: [],
    article: new Article(),
    articleTypes: [
      {
        id: 0,
        text: 'منتشرنشده',
      },
      {
        id: 1,
        text: 'منتشرشده',
      },
      {
        id: 2,
        text: 'همه',
      },
    ],
    queries: new Queries(),
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
    SET_NEW_ARTICLE_DATA(state, { k, v }) {
      state.article[k] = v
    },
    CHANGE_ARTICLE_PUBLISHMENT_STATE(state, id) {
      const article = state.articles.find((article) => article.id === id)
      article.isPublished = !article.isPublished
    },
    UPDATE_QUERIES(state, { k, v }) {
      state[k] = v
    },
  },
  actions: {
    clearArticle({ commit }) {
      commit('CLEAR_ARTICLE_STATE')
    },
    setNewArticleData({ commit }, { k, v }) {
      commit('SET_NEW_ARTICLE_DATA', { k, v })
    },
    updateQueries({ commit }, { k, v }) {
      commit('UPDATE_QUERIES', { k, v })
    },

    /* -------------------------------- apiCalls -------------------------------- */

    async getCategories({ commit }) {
      async function apiCall(api) {
        const { res, success } = await getCategoryApi(api)
        if (success) commit('SET_CATEGORIES', res)
        return success
      }
      return await this.$apiCaller(apiCall)()
    },

    async getArticles({ state, commit }, type = 2) {
      async function apiCall(api) {
        const { success, res } = await getArticlesApi(api, type)
        if (success) commit('SET_ARTICLES', res)
        return success
      }
      return await this.$apiCaller(apiCall)()
    },

    async createArticle({ state, commit }) {
      const article = state.article
      async function apiCall(api) {
        const { success } = await createArticleApi(api, article)
        if (success) commit('ADD_ARTICLE_TO_THE_LIST', article)
        return success
      }
      return await this.$apiCaller(apiCall)()
    },

    async changeArticlePublishmentState({ commit }, id) {
      async function apiCall(api) {
        const { success } = await changeArticlePublishmentStateApi(api, id)
        if (success) commit('CHANGE_ARTICLE_PUBLISHMENT_STATE', id)
        return success
      }
      return await this.$apiCaller(apiCall)()
    },
  },
}
