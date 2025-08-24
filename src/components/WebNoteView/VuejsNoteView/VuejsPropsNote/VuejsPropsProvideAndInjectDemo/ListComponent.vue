<template>
  <ul>
    <li v-for="i in 3">
      用 <code>v-for</code> 跑出３次一樣的孫元件，這是第 {{ i }} 次
      <list-item></list-item>
    </li>
  </ul>
</template>

<script setup>
import ListItem from "./ListItem.vue";
</script>

<style scoped>
li {
  margin-top: 12px;
  margin-bottom: 12px;
}
</style>
