<template>
  <textarea v-model.trim="message16"></textarea>
  <p>產出結果為： <pre>{{ message16 }}</pre></p>
</template>

<script setup>
import { ref } from "vue";

const message16 = ref("");
</script>

<style scoped></style>
