<template>
  <!-- 要注意下面兩組input對應的都是v-model="picked" -->
  <!-- 另外，把<input>包在<label>裡面的寫法，可以避免使用id+for造成的全域污染問題 -->
  <div>
    <label>
      <input type="radio" value="1" v-model="picked">
      <label>One</label>
    </label>
  </div>
  <div>
    <label>
      <input type="radio" value="2" v-model="picked">
      <label>Two</label>
    </label>
  </div>
  <span>Picked: {{ picked }}</span>
</template>

<script setup>
import { ref } from "vue";

const picked = ref("");
</script>

<style scoped></style>
