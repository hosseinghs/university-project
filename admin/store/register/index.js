import { loginUserApi } from '~/services/register'
import { Login } from '~/models/register'
export default {
  namespaced: true,

  state: () => ({
    loginUserData: new Login(),
    isLoggedIn: false,
  }),

  mutations: {
    SET_USER_LOGIN_DATA(state, { k, v }) {
      state.loginUserData[k] = v
    },
    SET_LOGGEDIN_STATE(state, bool) {
      state.isLoggedIn = bool
    },
  },

  actions: {
    setUserLoginData({ commit }, { k, v }) {
      commit('SET_USER_LOGIN_DATA', { k, v })
    },
    setLoggedInState({ commit }, bool) {
      commit('SET_LOGGEDIN_STATE', bool)
    },
    async loginUser({ state, dispatch }) {
      const user = state.loginUserData
      async function apiCall(api) {
        const { status } = await loginUserApi(api, user)
        if (status === 200) dispatch('setLoggedInState', true)
        return true
      }
      return await this.$apiCaller(apiCall)()
    },
  },
}
