<template>
  <svg width="800" height="150">
    <g ref="withoutNiceRef">
      <text x="145" y="50" fill="black" font-size="16">沒有加 nice() 的軸線</text>
    </g>
    <text x="365" y="90" font-size="40">&rarr;</text>
    <g ref="withNiceRef">
      <text x="150" y="50" fill="black" font-size="16">有加 nice() 的軸線</text>
    </g>
  </svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const withNiceRef = ref(null);
const withoutNiceRef = ref(null);

onMounted(() => {
  const data = [0.243, 0.584, 0.987, 0.153, 0.433];

  // 沒加nice()
  const scaleWithoutNice = d3.scaleLinear()
    .domain(d3.extent(data))
    .range([0, 300]);

  // 有加nice()
  const scaleWithNice = d3.scaleLinear()
    .domain(d3.extent(data))
    .range([0, 300])
    .nice();

  const scaleWithoutNiceAxis = d3.axisTop(scaleWithoutNice);
  const scaleWithNiceAxis = d3.axisTop(scaleWithNice);

  d3.select(withoutNiceRef.value)
    .call(scaleWithoutNiceAxis)
    .attr("transform", "translate(20, 80)");

  d3.select(withNiceRef.value)
    .call(scaleWithNiceAxis)
    .attr("transform", "translate(460, 80)");
});
</script>

<style scoped></style>
