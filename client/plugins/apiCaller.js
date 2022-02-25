export default function ({ $axios, store, env, redirect }, inject) {
  store.registerModule('notification', {
    namespaced: true,

    state: () => ({
      isVisible: false,
      notif: {
        color: '',
        title: '',
      },
      timer: 5000,
    }),

    mutations: {
      SET_IS_VISIBLE(state, isVisible) {
        state.isVisible = isVisible;
      },
      SET_NOTIF(state, notifConfig) {
        Object.assign(state.notif, notifConfig);
      },
      SET_TIMER(state, timer) {
        state.timer = timer;
      },
    },

    actions: {
      notify({ commit }, { config, timer }) {
        if (timer === 0) return;
        commit('SET_NOTIF', config);
        commit('SET_TIMER', timer);
        commit('SET_IS_VISIBLE', true);
        if (timer === -1) return;
        setTimeout(() => {
          commit('SET_IS_VISIBLE', false);
        }, timer);
      },
      disable({ commit }) {
        commit('SET_IS_VISIBLE', false);
      },
      showSuccess({ dispatch }, { title, timer }) {
        title = title || 'عملیات با موفقیت انجام شد';
        timer = timer === undefined ? 5000 : timer;
        dispatch('notify', {
          config: { color: 'success', title },
          timer,
        });
      },
      showError({ dispatch }, { title, timer }) {
        title = title || 'خطایی رخ داده است. مجدد تلاش کنید.';
        timer = timer === undefined ? 5000 : timer;
        dispatch('notify', {
          config: { color: 'error', title },
          timer,
        });
      },
      showInfo({ dispatch }, { title, timer }) {
        title = title || 'متن پیام را وارد کنید';
        timer = timer === undefined ? 5000 : timer;
        dispatch('notify', {
          config: { color: 'info', title },
          timer,
        });
      },
    },
  });
  store.registerModule('loading', {
    namespaced: true,
    state: () => ({
      isLoading: false,
    }),
    mutations: {
      SET_IS_LOADING(state, bool) {
        state.isLoading = bool;
      },
    },
    actions: {
      setLoadingState({ commit }, bool) {
        commit('SET_IS_LOADING', bool);
      },
    },
  });

  const api = $axios.create({ baseURL: env.baseUrl, withCredentials: false });
  // api.onRequest((req) => {
  //   const token = window.localStorage.getItem('token');
  //   const bearer = `bearer ${JSON.parse(token)}`;
  //   req.headers.authorization = bearer;
  // });
  api.onResponseError(async (err) => {
    let msg;
    if (err.response) {
      if (err.response.data.errors.length > 0) {
        msg = err.response.data.errors[0].msg;
      } else if (
        err.response.data.errors.length === 0 &&
        err.response.data.description
      )
        msg = err.response.data.description;
      else if (
        err.response.data.errors.length === 0 &&
        !err.response.data.description &&
        err.response.data.title
      )
        msg = err.response.data.title;
      const payload = {
        config: {
          color: 'error',
          title: msg,
        },
        timer: 3000,
      };
      if (err.response.status === 500) {
        payload.config.title = 'انجام دادن این عملیات مجاز نمیباشد';
      }
      store.dispatch('notification/notify', payload);
      throw new Error(msg);
    }
    store.dispatch('loading/setLoadingState', false);
  });
  const apiCaller = function (apiCallFunc, hasLoading = true) {
    return async function () {
      let result;
      let timeout;
      let isLoadingActivated = false;
      try {
        if (hasLoading) {
          timeout = setTimeout(() => {
            isLoadingActivated = true;
            store.dispatch('loading/setLoadingState', true);
          }, 200);
        }
        result = await apiCallFunc(api);
      } catch (e) {
        result = false;
      } finally {
        if (isLoadingActivated)
          store.dispatch('loading/setLoadingState', false);
        else clearTimeout(timeout);
      }
      return result;
    };
  };
  inject('apiCaller', apiCaller);
}
