import { createRouter, createWebHistory } from "vue-router";

// layouts
import DefaultLayout from "../laylouts/DefaultLayout.vue";
import FullScreenLayout from "../laylouts/FullScreenLayout.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
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
        meta: { title: "關於我"}
      },
      {
        path: "/photo-portfolio",
        name: "photo-portfolio",
        component: () => import("../views/PhotoPortfolioView.vue"),
        meta: { title: "攝影"}
      },
      {
        path: "/photo/ntuphoto-life",
        name: "ntuphoto-life",
        component: () => import("../views/Photo/NtuphotoLifeView.vue"),
        meta: { title: "攝影社故事"}
      },
      {
        path: "/photo/photographic-equipment",
        name: "photographic-equipment",
        component: () => import("../views/Photo/PhotographicEquipment.vue"),
        meta: { title: "攝影器材"}
      },
      {
        path: "/web-note",
        name: "web-note",
        component: () => import("../views/WebNoteView.vue"),
        meta: { title: "網頁練習筆記"},
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
          {
            path: "python-note",
            name: "python-note",
            component: () => import("../views/WebNote/PythonNoteView.vue")
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
        meta: { title: "測試區"}
      },
    ]
  },
  {
    path: "/my-investment",
    component: FullScreenLayout,
    children: [
      {
        path: "/my-investment",
        component: () =>
          import(
            "../views/MyInvestmentView.vue"
          )
      }
    ]
  }
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

router.beforeEach((to, from, next) => {
  const siteName = "阿蛤ㄉ窩";
  if (to.meta.title) {
    document.title = `${siteName}｜${to.meta.title}`;
  } else {
    document.title = siteName;
  };
  next();
});

export default router;
