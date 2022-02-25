import { signUpUserApi, signInUserApi } from '~/services/register'
import { Signup, Login } from '~/models/register'
export default {
  namespaced: true,

  state: () => ({
    signUpUserData: new Signup(),
    loginUserData: new Login(),
    isLoggedIn: false,
  }),

  mutations: {
    SET_USER_SIGNUP_DATA(state, { k, v }) {
      state.signUpUserData[k] = v
    },
    SET_USER_LOGIN_DATA(state, { k, v }) {
      state.loginUserData[k] = v
    },
    SET_LOGGEDIN_STATE(state, bool) {
      state.isLoggedIn = bool
    },
  },

  actions: {
    setUserSignupData({ commit }, { k, v }) {
      commit('SET_USER_SIGNUP_DATA', { k, v })
    },
    setUserLoginData({ commit }, { k, v }) {
      commit('SET_USER_LOGIN_DATA', { k, v })
    },
    setLoggedInState({ commit }, bool) {
      commit('SET_LOGGEDIN_STATE', bool)
    },
    async signupUser({ state, commit }) {
      const user = state.signUpUserData
      async function apiCall(api) {
        const { data, status } = await signUpUserApi(api, user)
        if (status === 200) console.log(data)
        return true
      }
      return await this.$apiCaller(apiCall)()
    },
    async loginUser({ state, dispatch }) {
      const user = state.loginUserData
      async function apiCall(api) {
        const { status } = await signInUserApi(api, user)
        if (status === 200) dispatch('setLoggedInState', true)
        return true
      }
      return await this.$apiCaller(apiCall)()
    },
  },
}
