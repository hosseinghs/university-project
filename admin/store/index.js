export default {
  namespaced: true,
  state: () => ({
    isLoading: false,
    isModalVisible: false,
    isBlured: false,
  }),
  mutations: {
    SET_IS_LOADING_STATE(state, bool) {
      state.isLoading = bool
    },
    SET_MODAL_STATE(state, bool) {
      state.isModalVisible = bool
    },
  },
  actions: {
    setLoadingState({ commit }, bool) {
      commit('SET_IS_LOADING_STATE', bool)
    },
    setModalState({ commit }, bool) {
      commit('SET_MODAL_STATE', bool)
    },
  },
  getters: {
    isLoading: (state) => state.isLoading,
    isModalVisible: (state) => state.isModalVisible,
  },
}
