<template>
  <div>
    &gt; Hello {{ msg }}
    <div>
      &gt; <slot>這是預設內容，若沒有傳資料進來就會出現這段文字。</slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const msg = ref("Child!");
</script>

<style scoped></style>
