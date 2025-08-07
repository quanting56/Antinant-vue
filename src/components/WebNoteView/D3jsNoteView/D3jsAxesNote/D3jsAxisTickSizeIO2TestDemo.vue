<template>
  <svg
    ref="axisTickSizeIO2TestSvgRef"
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

const axisTickSizeIO2TestSvgRef = ref(null);

onMounted(() => {
  // 設定比例尺
  const axisTickSizeIO2TestScale = d3.scaleLinear()
                                     .domain([0, 100])
                                     .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisTickSizeIO2TestAxisGeneratorInner = d3.axisBottom(axisTickSizeIO2TestScale)
                                                  .tickSizeInner(30);  // 調Inner用這個
  const axisTickSizeIO2TestAxisGeneratorOuter = d3.axisBottom(axisTickSizeIO2TestScale)
                                                  .tickSizeOuter(30);  // 調Outer用這個

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select(axisTickSizeIO2TestSvgRef.value)
    .append("g")
    .call(axisTickSizeIO2TestAxisGeneratorInner)
    .attr("transform", `translate(0, ${ height / 3 - 30})`)
    .append("text")
    .attr("x", `${ width / 2 }`)
    .attr("y", 60)
    .text("tickSizeInner(30)")
    .attr("fill", "#d63384")
    .attr("font-size", 13);

  d3.select(axisTickSizeIO2TestSvgRef.value)
    .append("g")
    .call(axisTickSizeIO2TestAxisGeneratorOuter)
    .attr("transform", `translate(0, ${ height * 2 / 3 + 2})`)
    .append("text")
    .attr("x", `${ width / 2 }`)
    .attr("y", 40)
    .text("tickSizeOuter(30)")
    .attr("fill", "#d63384")
    .attr("font-size", 13);
});
</script>

<style scoped></style>
