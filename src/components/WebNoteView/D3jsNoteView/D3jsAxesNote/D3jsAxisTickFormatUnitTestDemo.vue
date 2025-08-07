<template>
  <svg
    ref="axisTickFormatUnitTestSvgRef"
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
const margin = ( width - height ) / 2;

const axisTickFormatUnitTestSvgRef = ref(null);

onMounted(() => {
  // 設定比例尺
  const axisTickFormatUnitTestScale = d3.scaleLinear()
                                        .domain([0, 100])
                                        .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisTickFormatUnitTestAxisGenerator = d3.axisBottom(axisTickFormatUnitTestScale)
                                                .ticks(5)
                                                .tickFormat(d => `${d}元`);  // 增加文字單位

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select(axisTickFormatUnitTestSvgRef.value)
    .append("g")
    .call(axisTickFormatUnitTestAxisGenerator)
    .attr("transform", `translate(0, ${ height / 2 })`);
});
</script>

<style scoped></style>
