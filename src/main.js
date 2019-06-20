import Vue from "vue";
import App from "./App.vue";
import { IonicVueRouter } from "@ionic/vue";
import Ionic from "@ionic/vue";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Help from "./views/Help.vue";

Vue.use(IonicVueRouter);
Vue.use(Ionic);

Vue.config.productionTip = false;

Vue.config.ignoredElements = [/^ion-/];

console.log(window.Ionic);

const routes = [
  { path: "/", component: Home },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/about/help",
    name: "about-help",
    component: Help,
  },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new IonicVueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
