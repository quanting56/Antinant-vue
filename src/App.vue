<template>
  <v-app>
    <!-- 之後直接把NavBar寫在App.vue -->
    <!-- NavBar -->
    <router-link to="/">阿蛤的窩</router-link>
    <router-link to="/about">關於我</router-link>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import NavBar from "./components/NavBar";  // 之後直接把NavBar寫在App.vue裡面

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    // NavBar,  // 之後直接把NavBar寫在App.vue裡面
  },
};
</script>
