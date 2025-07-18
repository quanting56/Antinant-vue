<template>
  <div id="back-to-top" @click="scrollToTop" v-show="showButton">
    <i class="bi bi-arrow-up-circle-fill"></i>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScroll = () => {
  showButton.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
#back-to-top {
  position: fixed;
  right: 24px;
  bottom: 20px;
  font-size: 32px;
  color: chocolate;
  cursor: pointer;
  opacity: 0.25;
  z-index: 9999;
}

#back-to-top:hover {
  opacity: 0.8;
}
</style>
