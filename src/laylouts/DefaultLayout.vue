<template>
  <NavBar></NavBar>
  <main>
    <router-view></router-view>
  </main>
  <Footer></Footer>
  <BackToTopButton></BackToTopButton>
</template>

<script setup>
import NavBar from "../components/Common/NavBar.vue";
import Footer from "../components/Common/Footer.vue";
import BackToTopButton from "../components/Common/BackToTopButton.vue";
</script>

<style scoped></style>
