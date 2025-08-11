<template>
  <svg
    ref="TEst"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  >
    <circle cx="60" cy="50" r="30" fill="#567866"></circle>
  </svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = (width - height) / 2;

const TEst = ref(null);
</script>

<style scoped></style>
