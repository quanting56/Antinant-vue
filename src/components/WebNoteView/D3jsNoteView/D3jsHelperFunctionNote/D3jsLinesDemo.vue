<template>
  <svg ref="lineSvgRef" width="500" height="200"></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const lineSvgRef = ref(null);

onMounted(() => {
  const data = [
    { x: 50, y: 180 },
    { x: 50, y: 100 },
    { x: 200, y: 100 },
    { x: 200, y: 20 },
    { x: 400, y: 20 },
  ];

  const drawLine = d3.line()
    .x((d) => d.x)
    .y((d) => d.y);
  
  d3.select(lineSvgRef.value)
    .append("path")
    .attr("d", drawLine(data))
    .attr("stroke", "black")
    .attr("stroke-width", "2")
    .attr("fill", "none");
});
</script>

<style scoped></style>
