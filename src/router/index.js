import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CountyOverview from "../views/CountyOverview.vue";
import OurTeam from "../views/OurTeam.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/countyoverview",
    name: "CountyOverview",
    component: CountyOverview
  },
  {
    path: "/ourteam",
    name: "OurTeam",
    component: OurTeam
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
