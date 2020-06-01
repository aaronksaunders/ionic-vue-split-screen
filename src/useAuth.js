import Vue from "vue";
import VueCompositionApi, { computed, ref } from "@vue/composition-api";
Vue.use(VueCompositionApi);

// STATE
const state = ref({
  user: {},
  loggedIn: false,
  loading: true,
  error: {},
});

export default function() {
  return {
    state: computed(() => state.value),
    login: () => {
      return new Promise((resolve) => {
        state.value.user = { id: 100, name: "aaron" };
        state.value.loggedIn = true;
        resolve(true);
      });
    },
    logout: () => {
      return new Promise((resolve) => {
        state.value.user = {};
        state.value.loggedIn = false;
        resolve(true);
      });
    },
  };
}
