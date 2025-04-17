<template>
  <v-app>
    <!-- NavBar -->
    <v-app-bar app dark style="background-color: rgba(33, 33, 33, 0.9)">
      <div class="d-flex align-center">
        <v-app-bar-title class="d-flex me-4">
          <router-link
            :to="{ name: 'home' }"
            class="d-flex ms-2 nav-bar-user-defined"
          >
            <v-img
              src="./assets/IMG_2073.jpg"
              width="30"
              height="30"
              class="rounded-circle mx-2"
            ></v-img>
            阿蛤的窩
          </router-link>
        </v-app-bar-title>

        <router-link :to="{ name: 'about' }" class="nav-bar-user-defined"
          >關於我</router-link
        >
        <router-link to="/web_note" class="nav-bar-user-defined"
          >網頁練習</router-link
        >
      </div>
    </v-app-bar>

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

<style scoped>
.nav-bar-user-defined {
  padding: 10px 5px;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: #555555;
    transition: background-color 0.5s;
  }
}
</style>
