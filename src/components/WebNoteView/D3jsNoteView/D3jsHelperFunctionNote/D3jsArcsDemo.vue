<template>
  <svg ref="arcSvgRef" width="500" height="200"></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const arcSvgRef = ref(null);

onMounted(() => {
  const drawArc = d3.arc()
    .innerRadius(80)
    .outerRadius(90)
    .startAngle(Math.PI * 1.2)
    .endAngle(Math.PI * 2.8);

  d3.select(arcSvgRef.value)
    .append("g")
    .attr("transform", "translate(200, 100)")  // 圓心預設在[0, 0]，要透過transform移到畫面中
    .append("path")
    .attr("d" ,drawArc)
    .attr("stroke", "black")
    .attr("fill", "rgba(31, 211, 255, 0.2)");
});
</script>

<style scoped></style>
