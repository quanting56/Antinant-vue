<template>
  <div
    ref="barChartContainerRef"
    style="border: 1px solid lightgray;"
  ></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const barChartContainerRef = ref(null);

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = (width - height) / 2;
</script>

<style scoped></style>
