import { addToArr, generateQueryStringFromAnObject } from '~/utils/general'
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
        id: '0',
        text: 'منتشرنشده',
      },
      {
        id: '1',
        text: 'منتشرشده',
      },
      {
        id: '2',
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
      state.articles.unshift(newArticle)
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
      state.queries[k] = v
    },
    SET_ARTICLE(state, article) {
      state.article = Object.assign({}, article)
    },
  },
  actions: {
    clearArticle({ commit }) {
      commit('CLEAR_ARTICLE_STATE')
    },
    setNewArticleData({ commit }, { k, v }) {
      commit('SET_NEW_ARTICLE_DATA', { k, v })
    },
    updateQueries({ commit, dispatch }, { k, v, forceUpdate = true }) {
      commit('UPDATE_QUERIES', { k, v })
      if (forceUpdate) dispatch('getArticles')
    },
    setArticle({ commit }, article) {
      commit('SET_ARTICLE', article)
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

    async getArticles({ state, commit }) {
      const queries = generateQueryStringFromAnObject(state.queries)
      async function apiCall(api) {
        const { success, res } = await getArticlesApi(api, queries)
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
