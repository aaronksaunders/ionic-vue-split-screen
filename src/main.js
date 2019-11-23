import Vue from "vue";
import App from "./App.vue";
import { IonicVueRouter } from "@ionic/vue";
import Ionic from "@ionic/vue";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import store from "./store";

import Home from "./views/Home.vue";

Vue.use(IonicVueRouter);
Vue.use(Ionic);

Vue.config.productionTip = false;

Vue.config.ignoredElements = [/^ion-/];

console.log(window.Ionic);

const privateRoute = (to, from, next) => {
  let userStore = store.state.user;
  let isAuthenticated = userStore.user !== null;
  console.log("isAuthenticated:" + isAuthenticated);
  
  if (!isAuthenticated) {
    next({ name: "login" });
  } else {
    next();
  }
};

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: Home,
    beforeEnter: privateRoute
  },
  // Add @babel/plugin-syntax-dynamic-import (https://git.io/vb4Sv) to the
  // 'plugins' section of your Babel config to enable parsing.
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "@/views/Login.vue")
    //beforeEnter: privateRoute
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  {
    path: "/about/help",
    name: "about-help",
    component: () => import(/* webpackChunkName: "about" */ "@/views/Help.vue")
  }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new IonicVueRouter({
  routes
});
store.dispatch("user/checkAuth").then(() => {
  new Vue({
    render: h => h(App),
    store,
    router
  }).$mount("#app");
});
