import Vue from "vue";
import VueRouter, { Route } from "vue-router";
import Home from "../views/Home.vue";
import Links from "../views/Links.vue";
import NotFound from "../views/404.vue";
import ErrorPage from "../views/Error.vue";

import {
  isMD5,
  isSHA1,
  isSHA256,
  isSHA512
} from "ioc-extractor/dist/aux/regexs";

Vue.use(VueRouter);

const isHash = (str: string): boolean => {
  if (isMD5(str)) {
    return true;
  }
  if (isSHA1(str)) {
    return true;
  }
  if (isSHA256(str)) {
    return true;
  }
  if (isSHA512(str)) {
    return true;
  }

  return false;
};

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/hash/:hash",
    name: "hash",
    component: Links,
    beforeEnter: (to: Route, from: Route, next: any) => {
      if ("hash" in to.params) {
        const hash = to.params.hash;
        if (isHash(hash)) {
          next();
        } else {
          next("/error");
        }
      } else {
        next("/error");
      }
    }
  },
  {
    path: "/error",
    name: "error",
    component: ErrorPage
  },
  {
    path: "/404",
    name: "404",
    component: NotFound
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
