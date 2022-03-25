import { loginUserApi } from '~/services/login';
import { Login, User } from '~/models/login';
export default {
  namespaced: true,

  state: () => ({
    loginUserData: new Login(),
    isLoggedIn: false,
    admin: new User(),
  }),

  mutations: {
    SET_USER_LOGIN_DATA(state, { k, v }) {
      state.loginUserData[k] = v;
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
    setLoggedInState({ commit }, bool) {
      commit('SET_LOGGEDIN_STATE', bool);
    },
    setAdminInfo({ commit }, user) {
      commit('SET_ADMIN_INFO', user);
    },
    async loginUser({ state, dispatch }) {
      const user = state.loginUserData;
      async function apiCall(api) {
        const { success, res } = await loginUserApi(api, user);
        if (success) {
          window.localStorage.setItem('token', res.token);
          dispatch('setAdminInfo', res.user);
          dispatch('setLoggedInState', true);
        }
        return success;
      }
      return await this.$apiCaller(apiCall)();
    },
  },
};
