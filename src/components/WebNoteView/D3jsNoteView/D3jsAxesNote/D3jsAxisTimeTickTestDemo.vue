<template>
  <svg
    ref="axisTimeTickTestSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = 20;

const January = new Date(2024, 0);
const December = new Date(2024, 11);

const axisTimeTickTestSvgRef = ref(null);

onMounted(() => {
  // 設定比例尺
  const axisTimeTickTestScale = d3.scaleTime()
                                  .domain([January, December])
                                  .range([margin , width - margin]);

  // 設定軸線產生方式
  const axisTimeTickTestAxisGenerator = d3.axisBottom(axisTimeTickTestScale)
                                          .ticks(12, "%b");

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select(axisTimeTickTestSvgRef.value)
    .append("g")
    .call(axisTimeTickTestAxisGenerator)
    .attr("transform", `translate(0, ${ height / 2 })`);
});
</script>

<style scoped></style>
