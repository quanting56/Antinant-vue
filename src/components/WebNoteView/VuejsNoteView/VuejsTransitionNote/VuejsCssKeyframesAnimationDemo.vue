<template>
  <div ref="block" :class="{ 'app62-shake': activated }">Block</div>
  <button @click="activated = true">Shake it!</button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const block = ref(null);
const activated = ref(false);

function reactivated() {
  activated.value = false;
};

onMounted(() => {
  // 在onMounted階段加入animationend事件
  block.value.addEventListener("animationend", reactivated);
});

onBeforeUnmount(() => {
  // 記得解除事件
  block.value.removeEventListener("animationend", reactivated);
});
</script>

<style scoped>
.app62-shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97);
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

button {
  cursor: pointer;
}
</style>
