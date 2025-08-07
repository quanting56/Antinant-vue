<template>
  <svg
    ref="axisTickSizeIOTestSvgRef"
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

const axisTickSizeIOTestSvgRef =ref(null);

const zodiacData = ["鼠", "牛", "虎", "兔", "龍", "蛇", "馬", "羊", "猴", "雞", "狗", "豬"];

onMounted(() => {
  // 設定比例尺
  const axisTickSizeIOTestScale = d3.scaleBand()
                                    .domain(zodiacData)
                                    .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisTickSizeIOTestAxisGeneratorInner = d3.axisBottom(axisTickSizeIOTestScale)
                                                 .tickSizeInner(30);  // 調Inner用這個
  const axisTickSizeIOTestAxisGeneratorOuter = d3.axisBottom(axisTickSizeIOTestScale)
                                                 .tickSizeOuter(30);  // 調Outer用這個

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select(axisTickSizeIOTestSvgRef.value)
    .append("g")
    .call(axisTickSizeIOTestAxisGeneratorInner)
    .attr("transform", `translate(0, ${ height / 3 - 30})`)
    .append("text")
    .attr("x", `${ width / 2 }`)
    .attr("y", 60)
    .text("tickSizeInner(30)")
    .attr("fill", "#d63384")
    .attr("font-size", 13);

  d3.select(axisTickSizeIOTestSvgRef.value)
    .append("g")
    .call(axisTickSizeIOTestAxisGeneratorOuter)
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
