<template>
  <div
    ref="definedLineChartContainerRef"
    style="border: 1px solid lightgray;"
  ></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = (width - height) / 2;

const definedLineChartContainerRef = ref(null);
</script>

<style scoped></style>
