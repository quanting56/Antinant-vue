<template>
  <div id="app63-wrap">
    <button
      v-for="c in animateClasses"
      :key="c"
      @click="activedAnimate(c)"
    >
      {{ c }}
    </button>
  </div>

  <!-- 透過v-bind:class來控制class屬性 -->
  <div
    ref="block"
    class="app63-block"
    :class="animatedClassName"
  >
    Block
  </div>
</template>

<script setup>
import { ref } from "vue";

const animateClasses = ref([
  "bounce",
  "rubberBand",
  "tada",
  "shakeY",
  "shakeX"
]);
const animatedClassName = ref("");

function activedAnimate(className) {
  animatedClassName.value = `animate__animated animate__${className}`;
};
</script>

<style scoped>
.app63-block {
  display: block;
  width: 120px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background-color: #3eaf7c;
  color: #ffffff;
}

button {
  cursor: pointer;
}
</style>
