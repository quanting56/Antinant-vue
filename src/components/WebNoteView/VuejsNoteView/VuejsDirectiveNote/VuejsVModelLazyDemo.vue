<template>
  <input v-model.lazy="lazyMessage" placeholder="edit me">
  <p>Message is: {{ lazyMessage }}</p>
</template>

<script setup>
import { ref } from "vue";

const lazyMessage = ref("");
</script>

<style scoped>
p {
  margin-bottom: 0;
}
</style>
