/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import { reject } from "q";

export default {
  namespaced: true,

  state: {
    user: null,
    authChecked: false,
  },

  //
  // ACTIONS (asynchronous)
  //
  actions: {
    checkAuth({ commit }) {
      let state = this.state.user;
      return new Promise((resolve) => {
        commit("checkAuth", { authChecked: true, user: state.user });
        resolve(true);
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
      return new Promise((resolve) => {
        commit("clearUser", {});
        resolve(true);
      });
    },
  },

  //
  // MUTATIONS ( set the state )
  //
  mutations: {
    hasUser(state, payload) {
      state.user = { ...payload };
    },
    clearUser(state, payload) {
      state.user = null;
    },
    checkAuth(state, payload) {
      state.user = payload.user;
      state.authChecked = payload.authChecked;
    },
  },
};
