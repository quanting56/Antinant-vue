<template>
  <div>
    <div>從props來的parentMsg ==> {{ parentMsg }}</div>
    <div>自己的msg ==> {{ innerMsg }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 接受父元件傳來的資料
defineProps({
  parentMsg: {
    type: String,
    required: true
  }
});

const innerMsg = ref("這是內層元件的msg");
</script>

<style scoped></style>
