<template>
  <p><b>{{ greeting }}</b> 好棒棒！</p>
  <input v-model="greeting" placeholder="可輸入文字" />
</template>

<script setup>
import { ref } from "vue";

const greeting = ref("");
</script>

<style scoped>
p {
  margin-top: 0;
}
</style>
