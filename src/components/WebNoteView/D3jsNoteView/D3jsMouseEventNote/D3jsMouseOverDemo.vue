<template>
  <svg
    ref="mouseOverSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;

const mouseOverSvgRef = ref(null);

onMounted(() => {
  const mouseOverCircle = d3.select(mouseOverSvgRef.value)
                            .append("circle")
                            .attr("cx", 20)
                            .attr("cy", 20)
                            .attr("r", 50)
                            .attr("cursor", "pointer")
                            .attr("fill", "#f68b47")
                            .attr("transform", "translate(130, 55)");

  mouseOverCircle.on("mouseover", (e) => {
                    d3.select(e.target)
                      .transition()
                      .duration(2000)
                      .attr("fill", "blue");
                  })
                  .on("mouseleave", (e) => {
                    d3.select(e.target)
                      .transition()
                      .duration(2000)
                      .attr("fill", "#f68b47");
                  });
});
</script>

<style scoped></style>
