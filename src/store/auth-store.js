import { reject } from "q";

export default {
  namespaced: true,

  state: {
    user: null
  },

  //
  // ACTIONS (asynchronous)
  //
  actions: {
    checkAuth({ commit }) {
      return new Promise((resolve, reject) => {
        this.state.user !== null ? resolve(true) : reject(false)
      });
    },
login({ commit }, payload) {
  if (payload.email == "aaronksaunders@gmail.com") {
    commit("hasUser", { ...payload });
    return true;
  } else {
    commit("clearUser", {});
    return false;
  }
},
    logout({ commit }) {
      return new Promise(resolve => {
        commit("clearUser", {});
        resolve(true);
      });
    }
  },

//
// MUTATIONS ( set the state )
//
mutations: {
  hasUser(state, payload) {
    state.user = payload;
  },
  clearUser(state, payload) {
    state.user = null;
  }
}
};