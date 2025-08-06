<template>
  <svg
    ref="axisTickTestSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = (width - height) / 2;

const axisTickTestSvgRef = ref(null);

onMounted(() => {
  // 設定比例尺
  const axisTickTestScale = d3.scaleLinear()
                              .domain([0, 100])
                              .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisTickTestAxisGenerator = d3.axisBottom(axisTickTestScale)
                                      .ticks(5);  // 軸線刻度數量5個，以及最前方的1個起始值

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select(axisTickTestSvgRef.value)
    .append("g")
    .call(axisTickTestAxisGenerator)
    .attr("transform", `translate(0, ${ height / 2 })`);
});
</script>

<style scoped></style>
