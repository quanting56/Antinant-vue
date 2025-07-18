<template>
  <NavBar></NavBar>
  <router-view></router-view>
  <Footer></Footer>
  <BackToTopButton></BackToTopButton>
</template>

<script setup>
import NavBar from './components/Common/NavBar.vue';
import Footer from './components/Common/Footer.vue';
import BackToTopButton from './components/Common/BackToTopButton.vue';
</script>

<style scoped></style>
