<template>
  <div v-text="text"></div>
  <div v-html="text"></div>
  <div>{{ text }}</div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("<h3>Hello World!</h3>");
</script>

<style scoped></style>
