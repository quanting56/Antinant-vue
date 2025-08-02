<template>
  <div class="button-update-message">
    <p>{{ message }}</p>
    <button @click="updateMessage1">Update Message 1</button>
    <button @click="updateMessage2">Update Message 2</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("原始文字");

function updateMessage1() {
  message.value = "我是按鈕一的文字";
};

function updateMessage2() {
  message.value = "我是按鈕二的文字";
};
</script>

<style scoped>
.button-update-message button {
  padding: 4px;
  margin-right: 4px;
}
</style>
