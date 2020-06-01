import Vue from "vue";
import Ionic from "@ionic/vue";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import App from "./App.vue";
import router from "./router";

import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);
Vue.use(Ionic);

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
