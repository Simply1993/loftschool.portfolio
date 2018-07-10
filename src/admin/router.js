import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

Vue.use(VueRouter);

const guard = axios.create({
  baseURL: "http://webdev-api.loftschool.com"
});

import header from "./components/header.vue";
import tabs from "./components/tabs.vue";
import skills from "./components/skills.vue";
import works from "./components/works.vue";
import blog from "./components/blog.vue";

const routes = [
  {
    path: "/loftschool.portfolio/dist/admin",
    components: {
      default: skills,
      header: header,
      tabs: tabs
    }
  },
  {
    path: "/loftschool.portfolio/dist/admin/works",
    components: {
      default: works,
      header: header,
      tabs: tabs
    }
  },
  {
    path: "/loftschool.portfolio/dist/admin/blog",
    components: {
      default: blog,
      header: header,
      tabs: tabs
    }
  }
];

const router = new VueRouter({ routes, mode: "history" });

router.beforeEach((to, from, next) => {
  guard
    .get("/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(response => {
      next();
    })
    .catch(error => {
      console.log(error);
      localStorage.removeItem("token");
      window.location.href = "/loftschool.portfolio/dist/";
    });
});

export default router;
