<template>
  <div>
    <select v-model="engine">
      <option value="Google">Google</option>
      <option value="Yahoo">Yahoo!奇摩</option>
      <option value="Bing">Bing</option>
    </select>
    <button @click="toSearchEngine()">Go!</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const engine = ref("Google");

function toSearchEngine() {
  const urls = {
    Google: "https://www.google.com.tw",
    Yahoo: "https://tw.yahoo.com",
    Bing: "https://www.bing.com",
  };
  window.open(urls[engine.value], "_blank");
};
</script>
