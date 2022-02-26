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
        const { success, res } = await loginUserApi(api, user)
        if (success) {
          dispatch('setLoggedInState', true)
          window.localStorage.setItem('token', res)
        }
        return success
      }
      return await this.$apiCaller(apiCall)()
    },
  },
}
