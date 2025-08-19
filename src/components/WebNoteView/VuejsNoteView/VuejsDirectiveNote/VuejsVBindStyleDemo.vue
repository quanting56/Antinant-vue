<template>
  <input
    type="text"
    v-model.trim="message22"
    placeholder="請勿超過10個字"
    :style="msgStyle"
  >
</template>

<script setup>
import { ref, computed } from "vue";

const message22 = ref("");
const msgStyle = computed(() => {
  return {
    "border": message22.value.length <= 10 ? "" : "red solid 1px",
    "color": message22.value.length <= 10 ? "" : "red"
  };
});
</script>

<style scoped></style>
