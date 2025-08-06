<template>
  <svg ref="stackSvgRef" width="500" height="140"></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const stackSvgRef = ref(null);

onMounted(() => {
  const data = [
    { month: new Date(2023, 0, 1), China: 132, America: 120, Taiwan: 30 },
    { month: new Date(2023, 1, 1), China: 70, America: 127, Taiwan: 98 },
    { month: new Date(2023, 2, 1), China: 130, America: 33, Taiwan: 118 },
    { month: new Date(2023, 3, 1), China: 60, America: 90, Taiwan: 60 },
  ];

  // 設定資料的keys
  const stackGenerator = d3.stack()
    .keys(["China", "America", "Taiwan"]);

  // 把資料帶入stack方法
  const stackedSeries = stackGenerator(data);

  // 設定顏色
  const colorScale = d3.scaleOrdinal()
    .domain(["China", "America", "Taiwan"])
    .range(["red", "blue", "orange"]);

  // 建立集合g、設定顏色
  const g = d3.select(stackSvgRef.value)
    .attr("width", 300)
    .selectAll(stackSvgRef.value.g)
    .data(stackedSeries)
    .enter()
    .append("g")
    .attr("fill", (d) => colorScale(d.key));

  // 繪製長條圖
  g.selectAll("rect")
    .data((d) => d)
    .join("rect")
    .attr("width", (d) => d[1] - d[0])
    .attr("x" ,(d) => d[0])
    .attr("y" , (d, i) => i * 35)
    .attr("height", 20);
});
</script>

<style scoped></style>
