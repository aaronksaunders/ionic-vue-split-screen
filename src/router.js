import Vue from "vue";
import { IonicVueRouter } from "@ionic/vue";
import Home from "./views/Home.vue";
import useAuth from "./useAuth";

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
  {
    path: "/about/help",
    name: "about-help",
    component: () => import(/* webpackChunkName: "about" */ "@/views/Help.vue"),
  },
];

const router = new IonicVueRouter({
  routes,
});
Vue.use(IonicVueRouter);

// eslint-disable-next-line no-unused-vars
const privateRoute = (to, from, next) => {
  let { state } = useAuth();

  if (to.path === "/login") {
    next();
    return;
  }

  let isAuthenticated = state.value.loggedIn;
  console.log("isAuthenticated:" + isAuthenticated);
  if (!isAuthenticated) {
    next({ name: "login" });
  } else {
    next();
  }
};

router.beforeEach(privateRoute);

export default router;
