<template>
  <svg
    ref="easeDemonstrationSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;

const easeDemonstrationSvgRef = ref(null);
</script>

<style scoped></style>
