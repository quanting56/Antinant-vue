<template>
  <label>
    <input type="checkbox" v-model="isChecked">
    Status: {{ isChecked }}
  </label>
</template>

<script setup>
import { ref } from "vue";

const isChecked = ref(false);
</script>

<style scoped></style>
