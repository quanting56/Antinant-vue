import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/web_note",
    name: "web_note",
    component: () => import("../views/WebNoteView.vue"),
    children: [
      {
        path: "users/:userId", // 這裡開頭不能加'/'，否則會被帶回根目錄
        name: "users",
        component: () => import("../components/DynamicRouteMatching.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
