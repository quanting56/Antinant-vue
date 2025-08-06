<template>
  <svg ref="curveSvgRef" width="500" height="200"></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const curveSvgRef = ref(null);

onMounted(() => {
  const data = [
    { x: 50, y: 180 },
    { x: 50, y: 100 },
    { x: 200, y: 100 },
    { x: 200, y: 20 },
    { x: 400, y: 20 },
  ];

  const drawLineCurvesBasis = d3.line()
    .curve(d3.curveBasis)  // 選好要代入的d3.js曲線種類參數
    .x((d) => d.x)
    .y((d) => d.y);

  d3.select(curveSvgRef.value)
    .append("path")
    .attr("d", drawLineCurvesBasis(data))
    .attr("stroke", "black")
    .attr("stroke-width", "2")
    .attr("fill", "none");
});
</script>

<style scoped></style>
