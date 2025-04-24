<template>
  <v-container>
    <h1>網頁練習</h1>
    <router-link :to="{ name: 'route_practice' }">路由練習</router-link>

    <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  name: "WebNoteView",
};
</script>
