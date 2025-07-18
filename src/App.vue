<template>
  <NavBar></NavBar>
  <router-view></router-view>
  <Footer></Footer>
  <BackToTopButton></BackToTopButton>
</template>

<script setup>
import NavBar from './components/common/NavBar.vue';
import Footer from './components/common/Footer.vue';
import BackToTopButton from './components/common/BackToTopButton.vue';
</script>

<style scoped></style>
