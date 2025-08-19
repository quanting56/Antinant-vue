<template>
  <input
    type="text"
    v-model.trim="message20"
    :class="{ 'error': message20.length > 10 }"
  >
</template>

<script setup>
import { ref } from "vue";

const message20 = ref("");
</script>

<style scoped>
  .error {
    border: red solid 1px;
    color: red;
  }
</style>
