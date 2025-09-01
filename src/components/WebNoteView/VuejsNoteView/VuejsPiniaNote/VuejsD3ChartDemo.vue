<template>
  <svg ref="myChart"></svg>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useChartStore } from "../../../../stores/webNote/VuejsNotePiniaNote/d3ChartStore";
import * as d3 from "d3";

const chartStore = useChartStore();
const myChart = ref(null);

onMounted(() => {
  chartStore.fetchChartData();
});

// 監聽 store.data 更新 -> 重新畫圖
watch(() => chartStore.data, (newData) => {
  if (newData.length > 0) drawChart(newData);
});

function drawChart(data) {
  const width = 400;
  const height = 400;
  const margin = 15;
  
  const svg = d3.select(myChart.value)
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid lightgray");

  svg.selectAll("*").remove(); // 清空舊圖

  // 標題
  svg.append("text")
    .text("《臺北市 Ubike 站點圖》")
    .attr("x", margin)
    .attr("y", height - margin);

  // 建立投影：把經緯度轉成畫布上的座標
  const projection = d3.geoMercator()
    .center([121.54, 25.06]) // 以台北為中心（經度, 緯度）
    .scale(100000) // 縮放倍率
    .translate([width / 2, height / 2]); // 置中

  // 畫點
  svg.selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", d => projection([d.x, d.y])[0]) // 投影後的 x
    .attr("cy", d => projection([d.x, d.y])[1]) // 投影後的 y
    .attr("r", 2)
    .attr("fill", "green");
};
</script>

<style scoped></style>
