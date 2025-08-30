<template>
  <ul>
    <li v-for="i in 5" :key="i">
      <router-link :to="{ name: 'users', params: { userId: i } }">
        /web_note/users/{{ i }}
      </router-link>
    </li>
  </ul>

  <router-view></router-view>
</template>

<script setup></script>

<style scoped></style>
