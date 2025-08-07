<template>
  <svg
    ref="clockAxisSvgRef"
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
const height = width;
// const margin = ( width - height ) / 2; 此例不用另外設定margin

const clockAxisSvgRef = ref(null);

onMounted(() => {

});
</script>

<style scoped></style>
