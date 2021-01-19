const setting = {
  namespaced: true,
  state: {
    cachedViews: []
  },
  getters: {},
  mutations: {
    SET_CACHEDVIEWS(state, viewList) {
      state.cachedViews = viewList;
    },
    ADD_CACHEDVIEWS(state, view) {
      if (state.cachedViews.indexOf(view) === -1) {
        state.cachedViews.push(view);
      }
    },
    DEL_CACHEDVIEWS(state, view) {
      state.cachedViews.splice(state.cachedViews.indexOf(view), 1);
    }
  },
  actions: {
    set_cachedviews({ commit }, viewList) {
      commit('SET_CACHEDVIEWS', viewList)
    },
    add_cachedViews({ commit }, view) {
      commit('ADD_CACHEDVIEWS', view);
    },
    del_cachedViews({ commit }, view) {
      commit('DEL_CACHEDVIEWS', view);
    }
  }
}