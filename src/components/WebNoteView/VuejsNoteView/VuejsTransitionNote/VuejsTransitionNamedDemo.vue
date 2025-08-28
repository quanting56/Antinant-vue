<template>
  <!-- slide -->
  <transition name="slide">
    <div v-show="slideIsShow">我是slide特效</div>
  </transition>
  <button @click="slideIsShow = !slideIsShow">Toggle</button>

  <!-- fade -->
  <transition name="fade">
    <div v-show="fadeIsShow">我是fade特效</div>
  </transition>
  <button @click="fadeIsShow = !fadeIsShow">Toggle</button>
</template>

<script setup>
import { ref } from "vue";

const slideIsShow = ref(true);
const fadeIsShow = ref(true);
</script>

<style scoped>
/* <transition name="slide"> */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.9s ease;
}

.slide-enter-from {
  transform: translateX(-100%);
}

.slide-leave-to {
  transform: translateX(100%);
}

/* <transition name="fade"> */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

button {
  margin-bottom: 16px;
}
</style>
