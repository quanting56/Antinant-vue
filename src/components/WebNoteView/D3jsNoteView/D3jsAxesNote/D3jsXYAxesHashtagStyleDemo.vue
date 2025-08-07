<template>
  <svg
    ref="xyAxesHashtagStyleSvgRef"
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

const xyAxesHashtagStyleSvgRef = ref(null);

// 給定的數據
const data = [
  {x: 100, y: 20},
  {x: 18, y: 30},
  {x: 90, y: 95}
];

// 抓出x軸、y軸需要用到的資料
const xData = data.map((d) => d.x);
const yData = data.map((d) => d.y);

onMounted(() => {
  // x比例尺與軸線
  const xScale = d3.scaleLinear()
                   .domain([0, d3.max(xData)])
                   .range([margin, width - margin])
                   .nice();
  const xAxisGenerator = d3.axisBottom(xScale)
                           .tickSize( -height + margin )  // y軸線長度
                           .tickSizeOuter(0)
                           .tickPadding( margin / 2 + 7 );  // 讓標籤文字跟軸線保持一段距離

  // y比例尺與軸線
  const yScale = d3.scaleLinear()
                   .domain([0, d3.max(yData)])
                   .range([height - margin * 2, 0])
                   .nice();
  const yAxisGenerator = d3.axisLeft(yScale)
                           .tickSize( -width + margin )  // x軸線長度
                           .tickSizeOuter(0)
                           .tickPadding( margin - 20 );  // 讓標籤文字跟軸線保持一段距離

  // 建立<g>元素並呼叫軸線產生方式，分別生成x與y軸線
  d3.select(xyAxesHashtagStyleSvgRef.value)
    .append("g")
    .call(xAxisGenerator)
    .attr("transform", `translate(0, ${ height - margin })`)
    .selectAll("line")
    .attr("transform", `translate(0, ${ margin / 2 })`);

  d3.select(xyAxesHashtagStyleSvgRef.value)
    .append("g")
    .call(yAxisGenerator)
    .attr("transform", `translate(${margin}, ${margin})`)
    .selectAll("line")
    .attr("transform", `translate(${ -margin / 2 }, 0)`);
});
</script>

<style scoped></style>
