<template>
  <svg
    ref="loopAnimationSvgRef"
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

const loopAnimationSvgRef = ref(null);

onMounted(() => {
  d3.select(loopAnimationSvgRef.value)
    .append("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 25)
    .attr("fill", "#f68b47")
    .transition()
    .duration(2000)
    .on("start", goRight);

  function goRight() {
    d3.active(this)  // 取得正在進行中的過渡效果（transition）的函數
      .attr("cx", 250)
      .transition()
      .on("start", goLeft);
  };

  function goLeft() {
    d3.active(this)  // 取得正在進行中的過渡效果（transition）的函數
      .attr("cx", 50)
      .transition()
      .on("start", goRight);
  };
});
</script>

<style scoped></style>
