<template>
  <svg ref="svgRef" width="300" height="100"></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const svgRef = ref(null);

onMounted(() => {
  const scale = d3.scaleLinear()
    .domain([1, 5])
    .range([30, 140]);

  const scaleGenerator = d3.axisTop(scale)
    .ticks(5)
    .tickPadding(6)
    .tickSize(13.5)
    .tickSizeOuter(0);

  const g = d3.select(svgRef.value)
    .append("g")
    .call(scaleGenerator)
    .attr("transform", "translate(40, 45)");

  g.selectAll("path")
    .attr("stroke", "#ff8030")
    .attr("stroke-width", 2.5);
  
  g.selectAll("line")
    .attr("stroke", "#ffc271")
    .attr("stroke-width", 2);
  
  g.selectAll("text")
    .attr("font-size", 16);

  // 加入標籤文字
  g.append("text")
    .attr("x", 160)
    .attr("y", -20)
    .text("<text>")
    .attr("fill", "black")
    .attr("font-size", 13.5)
    .attr("text-anchor", "start");

  g.append("text")
    .attr("x", 160)
    .attr("y", -3)
    .text("<line>")
    .attr("fill", "#ffc271")
    .attr("font-size", 13.5)
    .attr("text-anchor", "start");

  g.append("text")
    .attr("x", 88)
    .attr("y", 17)
    .text("<path>")
    .attr("fill", "#ff8030")
    .attr("font-size", 13.5);
});
</script>

<style scoped></style>
