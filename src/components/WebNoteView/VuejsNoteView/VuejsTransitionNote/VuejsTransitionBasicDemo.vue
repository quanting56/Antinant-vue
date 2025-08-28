<template>
  <transition>
    <!-- 透過v-show來控制顯示或隱藏 -->
    <div v-show="isShow">Hello Vue.js!</div>
  </transition>

  <button @click="isShow = !isShow">Toggle</button>
</template>

<script setup>
import { ref } from "vue";

const isShow = ref(true);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}

button {
  cursor: pointer;
}
</style>
