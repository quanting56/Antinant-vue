<template>
  <textarea v-model="message" placeholder="add multiline lines"></textarea>
  <p>Multiline message is: <b>{{ message }}</b></p>
</template>

<script setup>
import { ref } from "vue";

const message = ref("");
</script>

<style scoped>
p {
  margin: 0;
}
</style>
