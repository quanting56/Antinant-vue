<template>
  <svg
    ref="axisTickSizeTestSvgRef"
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

const axisTickSizeTestSvgRef = ref(null);

onMounted(() => {
  // 設定比例尺
  const axisTickSizeTestScale = d3.scaleLinear()
                                  .domain([0, 100])
                                  .range([margin + 8, width - margin - 8]);

  // 設定軸線產生方式，以此例來說，代入正數向下延伸，代入負數向上延伸
  const axisTickSizeTestAxisGeneratorNegative = d3.axisBottom(axisTickSizeTestScale)
                                                  .tickSize(-30);
  const axisTickSizeTestAxisGenerator = d3.axisBottom(axisTickSizeTestScale);
  const axisTickSizeTestAxisGeneratorPositive = d3.axisBottom(axisTickSizeTestScale)
                                                  .tickSize(30);

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select(axisTickSizeTestSvgRef.value)
    .append("g")
    .call(axisTickSizeTestAxisGeneratorNegative)
    .attr("transform", `translate(-32, ${ height / 2 - 35})`)
    .append("text")
    .attr("x", 253)
    .attr("y", -10)
    .text("tickSize(-30)")
    .attr("fill", "#d63384")
    .attr("font-size", 12.5)
    .attr("text-anchor", "start");

  d3.select(axisTickSizeTestSvgRef.value)
    .append("g")
    .call(axisTickSizeTestAxisGenerator)
    .attr("transform", `translate(-32, ${ height / 2})`)
    .append("text")
    .attr("x", 263)
    .attr("y", 10)
    .text("預設")
    .attr("fill", "#d63384")
    .attr("font-size", 12.5)
    .attr("text-anchor", "start");

  d3.select(axisTickSizeTestSvgRef.value)
    .append("g")
    .call(axisTickSizeTestAxisGeneratorPositive)
    .attr("transform", `translate(-32, ${ height / 2 + 35})`)
    .append("text")
    .attr("x", 255)
    .attr("y", 20)
    .text("tickSize(30)")
    .attr("fill", "#d63384")
    .attr("font-size", 12.5)
    .attr("text-anchor", "start");
});
</script>

<style scoped></style>
