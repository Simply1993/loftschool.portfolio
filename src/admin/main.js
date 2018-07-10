import Vue from "vue";
import App from "./App.vue";
import SimpleVueValidation from "simple-vue-validator";
import router from "./router";
import { store } from "./store";
import axios from "./request";

store.$axios = axios;

Vue.use(SimpleVueValidation);

new Vue({
  el: "#admin-app",
  store,
  router,
  render: h => h(App)
});
