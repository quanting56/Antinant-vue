<template>
  <svg ref="areaSvgRef" width="500" height="200"></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const areaSvgRef = ref(null);

onMounted(() => {
  const data = [
    { x: 30, y: 180 },
    { x: 50, y: 100 },
    { x: 200, y: 100 },
    { x: 200, y: 20 },
    { x: 400, y: 20 },
  ];

  const drawArea = d3.area()
    .x((d) => d.x)
    .y0(10)
    .y1((d) => d.y);
  // 此處一般至少會有三個參數，例如：area.x().y0().y1()

  d3.select(areaSvgRef.value)
    .append("path")
    .attr("d", drawArea(data))
    .attr("stroke", "black")
    .attr("stroke-width", "2")
    .attr("fill", "rgba(31, 211, 255, 0.2)");
});
</script>

<style scoped></style>
