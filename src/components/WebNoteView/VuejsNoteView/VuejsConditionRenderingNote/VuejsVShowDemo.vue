<template>
  <button @click="toggleVisibility">切換顯示/隱藏</button>
  <code>isVisible</code> 現在狀態：<code>{{ isVisible }}</code>
  <p v-show="isVisible">這段文字會根據 <code>isVisible</code> 變數的值顯示或隱藏。</p>
</template>

<script setup>
import { ref } from "vue";

const isVisible = ref(true);  // 控制顯示/隱藏
function toggleVisibility() {
  isVisible.value = !isVisible.value;  // 切換 isVisible 的值
};
</script>

<style scoped>
button {
  margin-right: 32px;
}
</style>
