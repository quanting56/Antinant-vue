<template>
  <input type="text" v-model="message" placeholder="edit me">
  <p>Message is: <b>{{ message }}</b></p>
</template>

<script setup>
import { ref } from "vue";

const message = ref("");
</script>

<style scoped>
p {
  margin-bottom: 0;
}
</style>
