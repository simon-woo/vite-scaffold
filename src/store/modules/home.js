const userModule = {
  state: () => ({
    userInfo: {
      token: 'xxxxxxxx'
    }
  }),
  mutations: {
    SET_USER_INFO(state, params) {
      state.userInfo = params.userInfo
    }
  },
  actions: {
    SET_USER_INFO({ commit }, params) {
      commit('SET_USER_INFO', params)
    }
  },
  getters: {
    userInfo({ state }) {
      return state.userInfo
    }
  },
  namespaced: true
}

export default userModule
