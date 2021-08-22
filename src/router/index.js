import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Create from "../views/Create.vue";
import Cancel from "../views/CancelContract.vue";
import inherit from "../views/LegateeWithdraws.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/cancelcontract",
    name: "CancelContract",
    component: Cancel,
  },
  {
    path: "/inherit",
    name: "inherit",
    component: inherit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
