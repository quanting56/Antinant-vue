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
  history: createWebHistory(),
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
