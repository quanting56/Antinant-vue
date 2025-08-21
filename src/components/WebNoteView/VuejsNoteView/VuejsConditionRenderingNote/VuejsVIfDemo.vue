<template>
  <button @click="changeVisibility">切換段落</button>
  <template v-if="visibility === 'A'">
    <h4>Title A</h4>
    <p>Paragraph A - 1</p>
    <p>Paragraph A - 2</p>
  </template>
  <template v-else>
    <h4>Title B</h4>
    <p>Paragraph B - 1</p>
    <p>Paragraph B - 2</p>
  </template>
</template>

<script setup>
import { ref } from "vue";

const visibility = ref("A");
function changeVisibility() {
  if(visibility.value == "A") {
    visibility.value = "B";
  } else {
    visibility.value = "A";
  };
};
</script>

<style scoped></style>
