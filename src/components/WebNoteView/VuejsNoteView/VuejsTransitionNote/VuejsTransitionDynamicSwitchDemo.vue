<template>
  <button @click="modeToggle()">Toggle</button>

  <!-- 用mode="out-in"以先執行離場動畫，再執行進場動畫 -->
  <transition name="app59-fade" mode="out-in">
    <div v-if="mode === 'mode-1'">Block 1</div>
    <div v-else-if="mode === 'mode-2'">Block 2</div>
    <div v-else>Block 3</div>
  </transition>
</template>

<script setup>
import { ref } from "vue";

const modeLists = ["mode-1", "mode-2", "mode-3"];
const mode = ref(modeLists[0]);

function modeToggle() {
  const index = modeLists.indexOf(mode.value);
  mode.value = modeLists[(index + 1) % modeLists.length];
};
</script>

<style scoped>
.app59-fade-enter-active,
.app59-fade-leave-active {
  transition: opacity 0.25s;
}

.app59-fade-enter-from,
.app59-fade-leave-to {
  opacity: 0;
}

.app59-fade-enter-to,
.app59-fade-leave-from {
  opacity: 1;
}

button {
  cursor: pointer;
}
</style>
