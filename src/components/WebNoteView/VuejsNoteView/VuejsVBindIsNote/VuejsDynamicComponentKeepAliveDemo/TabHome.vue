<template>
  <div class="demo-tab"><input v-model="title"></div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("Home component");
</script>