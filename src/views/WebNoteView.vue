<template>
  <v-container>
    <h1>網頁練習</h1>
    <ul>
      <li v-for="i in 5" :key="i">
        <router-link :to="`/web_note/users/${i}`">
          /web_note/users/{{ i }}
        </router-link>
      </li>
    </ul>

    <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  name: "WebNoteView",
};
</script>
