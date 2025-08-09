<template>
  <svg
    ref="pointerSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;

const pointerSvgRef = ref(null);
</script>

<style scoped></style>
