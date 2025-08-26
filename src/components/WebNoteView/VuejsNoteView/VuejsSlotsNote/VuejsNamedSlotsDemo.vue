<template>
  <light-box>
    <template v-slot:header>
      <p>我是Header</p>
    </template>

    <template v-slot:footer>
      <p>我是Footer</p>
    </template>

    <div>
      <a href="https://www.google.com/" target="_blank">點我進到內容的超連結</a>
    </div>
  </light-box>
</template>

<script setup>
import { ref } from "vue";

const msg = ref("預設文字呼呼嘿嘿");
</script>

<style scoped></style>
