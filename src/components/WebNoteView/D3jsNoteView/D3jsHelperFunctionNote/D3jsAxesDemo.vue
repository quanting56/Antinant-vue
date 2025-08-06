<template>
  <svg ref="axisSvgRef" width="500" height="120"></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const axisSvgRef = ref(null);

onMounted(() => {
  // 預設一組資料，用這組資料來繪製出一條X軸線
  const data = [
    { x: 10, y: 100 },
    { x: 20, y: 100 },
    { x: 30, y: 100 },
    { x: 90, y: 20 },
    { x: 220, y: 10 },
  ];

  // 抓出X軸要使用的資料
  const xData = data.map((d) => d.x);

  // 設定X軸的比例尺與繪製範圍
  const xScale = d3.scaleLinear()
    .domain([0, d3.max(xData)])
    .range([10, 290]);

  // 使用xScale的設定，繪製刻度(ticks)朝下的軸線
  const xAxis = d3.axisBottom(xScale);

  // 繪製軸線
  d3.select(axisSvgRef.value)
    .append("g")
    .call(xAxis)
    .attr("transform", "translate(0, 50)")  // 調整X軸位置
});
</script>

<style scoped></style>
