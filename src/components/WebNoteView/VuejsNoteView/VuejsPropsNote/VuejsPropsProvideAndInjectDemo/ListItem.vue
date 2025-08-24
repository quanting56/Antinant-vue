<template>
  <div>provideMsg1: {{ provideMsg1 }} <small>→ 非響應式</small></div>
  <div>provideMsg2: {{ provideMsg2 }} <small>→ 響應式（用 <code>computed()</code>）</small></div>
</template>

<script setup>
import { inject } from "vue";

// 用inject()拿資料
const provideMsg1 = inject("provideMsg1");
const provideMsg2 = inject("provideMsg2");
</script>

<style scoped>
small {
  margin-left: 8px;
}
</style>
