<template>
  <!-- 加上v-pre後不會解析模板內容，直接顯示{{ text }} -->
  <div v-pre>
    有 <code>v-pre</code> → {{ text }}
  </div>

  <!-- 將{{ text }}轉換為text的內容 -->
  <div>
    沒有 <code>v-pre</code> → {{ text }}
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("v-pre測試內容");
</script>

<style scoped></style>
