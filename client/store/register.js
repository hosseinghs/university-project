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
    SET_ADMIN_INFO(_, user) {},
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
      commit('SET_ADMIN_INFO', user);
    },

    /* -------------------------------------------------------------------------- */
    /*                                 api calles                                 */
    /* -------------------------------------------------------------------------- */

    async loginUser({ state, dispatch }) {
      const _user = state.loginUserData;
      async function apiCall(api) {
        const { success, token, user } = await loginApi(api, _user);
        console.log(token);
        if (success) {
          window.localStorage.setItem('token', token);
          window.localStorage.setItem('user', JSON.stringify(user));
          dispatch('setLoggedInState', true);
        }
        return success;
      }
      return await this.$apiCaller(apiCall)();
    },

    async signupUser({ state }) {
      const user = state.user;
      async function apiCall(api) {
        const { success } = await signUpUserApi(api, user);
        return success;
      }
      return await this.$apiCaller(apiCall)();
    },
  },
};
