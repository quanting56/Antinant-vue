<template>
  <div style="position: relative;">
    <svg
      ref="advancedTooltipSvgRef"
      :width="width"
      :height="height"
      style="border: 1px solid lightgray;"
    ></svg>

    <!-- tooltip -->
    <div
      v-show="tooltip.visible"
      :style="{
        left: tooltip.x + 'px',
        top: tooltip.y + 'px',
      }"
      class="tooltip"
    >
      {{ tooltip.text }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import * as d3 from "d3";

const advancedTooltipSvgRef = ref(null);
const tooltip = reactive({
  visible: false,
  x: 0,
  y: 0,
  text: ""
});

const data = [
  {r: 17, x: 134, y: 181},
  {r: 23, x: 294, y: 131},
  {r: 14, x: 84, y: 273},
  {r: 9, x: 323, y: 59},
  {r: 18, x: 172, y: 251},
  {r: 26, x: 404, y: 154}
];

// 圖表尺寸與內邊距設定
const width = d3.max(data, (d) => d.x) + 50;
const height = d3.max(data, (d) => d.y) + 50;

onMounted(() => {
  const svg = d3.select(advancedTooltipSvgRef.value);

  // 設定顏色
  const rData = data.map((d) => d.r);
  const colors = d3.scaleOrdinal(d3.schemeTableau10)  // 因'd3.schemeTableau10'已預設輸出域，所以不用另外設定'.range()'
                   .domain(rData);

  // 建立圓點
  svg.selectAll("circle")
     .data(data)
     .join("circle")
     .attr("cx", (d) => d.x)
     .attr("cy", (d) => d.y)
     .attr("r", (d) => d.r)
     .attr("fill", (d) => colors(d.x))
     .style("cursor", "pointer")
     .on("mouseover", () => {
       tooltip.visible = true;
     })
     .on("mousemove", (e, d) => {
       const pt = d3.pointer(e, svg.node());
       tooltip.x = pt[0] + 30;
       tooltip.y = pt[1];
       tooltip.text = `圓半徑： ${d.r}`;
     })
     .on("mouseleave", () => {
       tooltip.visible = false;
     });
});
</script>

<style scoped>
.tooltip {
  position: absolute;
  background-color: white;
  border: 2px solid;
  border-radius: 5px;
  padding: 5px;
}
</style>
