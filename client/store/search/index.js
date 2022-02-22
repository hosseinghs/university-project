import { addToArr, generateQueryString } from '../../utils/general';
import { searchParamethers } from '../../models/search';
import {
  searchApi,
  getSubCategoryProductsApi,
  getSearchFiltersApi,
} from '~/services/product';

export default {
  namespaced: true,
  state: () => ({
    filters: [],
    queries: new searchParamethers(),
    subcategoryProductsArr: [],
  }),
  mutations: {
    SET_SEARCHED_PRODUCTS(state, payload) {
      const arr = state.subcategoryProductsArr;
      arr.splice(0);
      addToArr(arr, payload);
    },
    SET_FILTERS(state, payload) {
      const arr = state.filters;
      arr.splice(0);
      addToArr(arr, payload);
    },
    SET_QUERIES(state, { k, v }) {
      if (k === 'Size' || k === 'Material' || k === 'Color') {
        const isAlreadyThere = state.queries[`${k}List`].find(
          (item) => item === v
        );
        if (!isAlreadyThere) {
          if (v && v !== '') {
            state.queries[`${k}List`].push(v);
            state.queries[k] = true;
          }
        } else {
          const indexOfAlreadyThere =
            state.queries[`${k}List`].indexOf(isAlreadyThere);
          state.queries[`${k}List`].splice(indexOfAlreadyThere, 1);
        }
      } else state.queries[k] = v;
    },
  },
  actions: {
    updateFilters({ commit, dispatch }, { k, v }) {
      commit('SET_QUERIES', { k, v });
      dispatch('getSearchedProducts');
    },
    async getSearchedProducts({ state, commit }) {
      const q = generateQueryString(state.queries);
      async function apiCall(api) {
        const { isSuccess, resultData } = await searchApi(api, q);
        if (isSuccess) commit('SET_SEARCHED_PRODUCTS', resultData);
        return isSuccess;
      }
      return await this.$apiCaller(apiCall)();
    },
    async getSearchFilters({ commit }) {
      async function apiCall(api) {
        const { isSuccess, resultData } = await getSearchFiltersApi(api);
        if (isSuccess) commit('SET_FILTERS', resultData.reverse());
        return isSuccess;
      }
      return await this.$apiCaller(apiCall)();
    },
    async getSubCategoryProducts({ commit }, subCategoryId) {
      async function apiCall(api) {
        const { isSuccess, resultData } = await getSubCategoryProductsApi(
          api,
          subCategoryId
        );
        if (isSuccess) commit('SET_SEARCHED_PRODUCTS', resultData);
        return isSuccess;
      }
      return await this.$apiCaller(apiCall)();
    },
  },
  getters: {
    searchedProducts: (state) => state.subcategoryProductsArr,
    filters: (state) => state.filters,
    queries: (state) => state.queries,
  },
};
