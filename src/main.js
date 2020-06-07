import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Navbar from "./components/Navbar";

Vue.component("Navbar", Navbar);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
