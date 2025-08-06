<template>
  <svg
    ref="axesDirectionsSvgRef"
    width="300"
    height="300"
    style="border: 1px solid lightgray"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const axesDirectionsSvgRef = ref(null);

onMounted(() => {
  const axesDirectionsScale = d3.scaleLinear()
                                .domain([0, 100])
                                .range([0, 200]);
  const axesDirectionsTopGenerator = d3.axisTop(axesDirectionsScale);
  const axesDirectionsLeftGenerator = d3.axisLeft(axesDirectionsScale);
  const axesDirectionsRightGenerator = d3.axisRight(axesDirectionsScale);
  const axesDirectionsBottomGenerator = d3.axisBottom(axesDirectionsScale);

  d3.select(axesDirectionsSvgRef.value)
    .append("g")
    .call(axesDirectionsTopGenerator)
    .attr("transform", "translate(50, 40)")
    .append("text")
    .attr("x", 100)
    .attr("y", 20)
    .text("d3.axisTop()")
    .attr("fill", "#d63384")
    .attr("font-size", "13")
    .attr("text-anchor", "middle");
  d3.select(axesDirectionsSvgRef.value)
    .append("g")
    .call(axesDirectionsLeftGenerator)
    .attr("transform", "translate(40, 50)")
    .append("text")
    .attr("x", -100)
    .attr("y", 20)
    .text("d3.axisLeft()")
    .attr("fill", "#d63384")
    .attr("font-size", "13")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)");
  d3.select(axesDirectionsSvgRef.value)
    .append("g")
    .call(axesDirectionsRightGenerator)
    .attr("transform", "translate(260, 50)")
    .append("text")
    .attr("x", 100)
    .attr("y", 20)
    .text("d3.axisRight()")
    .attr("fill", "#d63384")
    .attr("font-size", "13")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(90)");
  d3.select(axesDirectionsSvgRef.value)
    .append("g")
    .call(axesDirectionsBottomGenerator)
    .attr("transform", "translate(50, 260)")
    .append("text")
    .attr("x", 100)
    .attr("y", -12)
    .text("d3.axisBottom()")
    .attr("fill", "#d63384")
    .attr("font-size", "13")
    .attr("text-anchor", "middle");
});
</script>

<style scoped></style>
