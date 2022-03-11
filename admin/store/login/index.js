import { loginUserApi } from '~/services/login'
import { Login, Admin } from '~/models/login'
export default {
  namespaced: true,

  state: () => ({
    loginUserData: new Login(),
    isLoggedIn: false,
    admin: new Admin(),
  }),

  mutations: {
    SET_USER_LOGIN_DATA(state, { k, v }) {
      state.loginUserData[k] = v
    },
    SET_LOGGEDIN_STATE(state, bool) {
      state.isLoggedIn = bool
    },
    SET_ADMIN_INFO(state, admin) {
      state.admin = Object.assign({}, admin)
    },
  },

  actions: {
    setUserLoginData({ commit }, { k, v }) {
      commit('SET_USER_LOGIN_DATA', { k, v })
    },
    setLoggedInState({ commit }, bool) {
      commit('SET_LOGGEDIN_STATE', bool)
    },
    setAdminInfo({ commit }, admin) {
      commit('SET_ADMIN_INFO', admin)
    },
    async loginUser({ state, dispatch }) {
      const user = state.loginUserData
      async function apiCall(api) {
        const { success, res } = await loginUserApi(api, user)
        if (success) {
          window.localStorage.setItem('token', res.token)
          dispatch('setAdminInfo', res.admin)
          dispatch('setLoggedInState', true)
        }
        return success
      }
      return await this.$apiCaller(apiCall)()
    },
  },
}
