import { signUpUserApi, loginApi } from '~/services/register';
import { Login, User } from '~/models/register';
export default {
  namespaced: true,

  state: () => ({
    loginUserData: new Login(),
    isLoggedIn: false,
    user: new User(),
  }),

  mutations: {
    SET_USER_LOGIN_DATA(state, { k, v }) {
      state.loginUserData[k] = v;
    },
    SET_USER_REGISTER_DATA(state, { k, v }) {
      state.user[k] = v;
    },
    SET_LOGGEDIN_STATE(state, bool) {
      state.isLoggedIn = bool;
    },
    SET_ADMIN_INFO(state, user) {
      state.user = Object.assign({}, user);
    },
  },

  actions: {
    setUserLoginData({ commit }, { k, v }) {
      commit('SET_USER_LOGIN_DATA', { k, v });
    },

    setUserRegisterData({ commit }, { k, v }) {
      commit('SET_USER_REGISTER_DATA', { k, v });
    },

    setLoggedInState({ commit }, bool) {
      commit('SET_LOGGEDIN_STATE', bool);
    },

    setUserInfo({ commit }, user) {
      commit('setUserInfo', user);
    },

    /* -------------------------------------------------------------------------- */
    /*                                 api calles                                 */
    /* -------------------------------------------------------------------------- */

    async loginUser({ state, dispatch }) {
      const user = state.loginUserData;
      async function apiCall(api) {
        const { success, res } = await loginApi(api, user);
        if (success) {
          window.localStorage.setItem('token', res.token);
          dispatch('setUserInfo', res.user);
          dispatch('setLoggedInState', true);
        }
        return success;
      }
      return await this.$apiCaller(apiCall)();
    },

    
    async signupUser({ state, dispatch }) {
      const user = state.user;
      async function apiCall(api) {
        const { success, res } = await signUpUserApi(api, user);
        if (success) {
          window.localStorage.setItem('token', res.token);
          dispatch('setUserInfo', res.user);
          dispatch('setLoggedInState', true);
        }
        return success;
      }
      return await this.$apiCaller(apiCall)();
    },
  },
};
