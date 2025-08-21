<template>
  <!-- 以下兩種寫法結果相同 -->
  <!-- 寫法1：直接在模板中寫表達式 -->
  <p>Count: {{ count1 }}</p>
  <button v-on:click="count1++">Plus</button>
  
  <!-- 寫法2：用methods -->
  <p>Count: {{ count2 }}</p>
  <button v-on:click="plus">Plus</button>
</template>

<script setup>
import { ref } from "vue";

// 寫法1：直接操作變數
const count1 = ref(0);

// 寫法2：用methods（在<script setup其實就是一個函式）
const count2 = ref(0);
function plus() {
  count2.value++;
};
</script>

<style scoped>
p {
  margin: 0;
}

button {
  margin-bottom: 16px;
}
</style>
