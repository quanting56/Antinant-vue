import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/about-me",
    name: "about-me",
    component: () => import("../views/AboutMeView.vue"),
  },
  {
    path: "/photo-portfolio",
    name: "photo-portfolio",
    component: () => import("../views/PhotoPortfolioView.vue"),
  },
  {
    path: "/photo/ntuphoto-life",
    name: "ntuphoto-life",
    component: () => import("../views/Photo/NtuphotoLifeView.vue")
  },
  {
    path: "/photo/photographic-equipment",
    name: "photographic-equipment",
    component: () => import("../views/Photo/PhotographicEquipment.vue")
  },
  {
    path: "/web-note",
    name: "web-note",
    component: () => import("../views/WebNoteView.vue"),
    children: [
      {
        path: "web-note-simple",
        name: "web-note-simple",
        component: () => import("../views/WebNote/WebNoteSimpleView.vue")
      },
      {
        path: "useful-bootstrap-component",
        name: "useful-bootstrap-component",
        component: () => import("../views/WebNote/UsefulBootstrapComponentView.vue")
      },
      {
        path: "bootstrap-note",
        name: "bootstrap-note",
        component: () => import("../views/WebNote/BootstrapNoteView.vue")
      },
      {
        path: "css-function-note",
        name: "css-function-note",
        component: () => import("../views/WebNote/CssFunctionNoteView.vue")
      },
      {
        path: "javascript-note",
        name: "javascript-note",
        component: () => import("../views/WebNote/JavascriptNoteView.vue")
      },
      {
        path: "d3js-note",
        name: "d3js-note",
        component: () => import("../views/WebNote/D3jsNoteView.vue")
      },
      {
        path: "vuejs-note",
        name: "vuejs-note",
        component: () => import("../views/WebNote/VuejsNoteView.vue")
      },
    ]
  },
  {
    path: "/web-note/test-test-test",
    name: "test-test-test",
    component: () =>
      import(
        "../views/WebNote/TestTestTestView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
//   scrollBehavior(to, from, savePosition) {
//     // 判斷是否為/activity與/activity/:id之間的跳轉
//     const isActivityPost = (route) => 
//       route.name === "activity" ||
//       route.name === "activity_post";

//     if (isActivityPost(to) && isActivityPost(from)) {
//       return false;
//     }

//     // 其他情況：總是捲動到頁面最上方
//     return { top: 0 };
//   }
});

export default router;
