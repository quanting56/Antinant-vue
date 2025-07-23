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
    path: "/photo",
    name: "photo",
    component: () => import("../views/PhotoView.vue"),
  },
  {
    path: "/photo/ntuphoto-life",
    name: "ntuphoto-life",
    component: () => import("../views/Photo/NtuphotoLifeView.vue")
  },
  {
    path: "/photo/photographic_equipment",
    name: "photographic_equipment",
    component: () => import("../views/Photo/PhotographicEquipment.vue")
  },
  {
    path: "/web-note",
    name: "web-note",
    component: () => import("../views/WebNoteView.vue"),
  },
  {
    path: "/web-note/test-test-test",
    name: "test-test-test",
    component: () =>
      import(
        "../views/WebNote/TestTestTestView.vue"
      ),
  },
//   {
//     path: "/activity",
//     name: "activity",
//     component: () => import("../views/ActivityView.vue"),
//     children: [
//       {
//         path: ":id",
//         name: "activity_post",
//         component: () =>
//           import("../views/ActivityPostView.vue"),
//         children: [
//           {
//             path: "posts",
//             name: "posts",
//             component: () =>
//               import(
//                 "../components/RoutePracticeDynamicRouteMatchingPost.vue"
//               ),
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: "/management_team",
//     name: "management_team",
//     component: () => import("../views/ManagementTeamView.vue"),
//   },
];

const router = createRouter({
  history: createWebHistory("/Antinant-vue/"),
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
