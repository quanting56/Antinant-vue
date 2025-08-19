<template>
  <input v-model="text">
  <div>沒有 <code>v-once</code> → {{ text }}</div>
  <div v-once>有 <code>v-once</code> → {{ text }}</div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("Hello World");
</script>

<style scoped></style>
