<template>
  <svg
    ref="dragSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const dragSvgRef = ref(null);

const data = [
  {name: "A", x: 200, y: 340},
  {name: "B", x: 220, y: 300},
  {name: "C", x: 250, y: 198},
  {name: "D", x: 360, y: 296},
  {name: "E", x: 160, y: 150},
  {name: "F", x: 320, y: 60},
  {name: "G", x: 187, y: 250}
];

// 圖表尺寸與內邊距設定
const width = d3.max(data, (d) => d.x + 40);
const height = d3.max(data, (d) => d.y + 40);

onMounted(() => {
  // 建立圓點
  const dots = d3.select(dragSvgRef.value)
                 .append("g")
                 .selectAll("circle")
                 .data(data)
                 .join("circle")
                 .attr("r", 25)
                 .attr("cx", (d) => d.x)
                 .attr("cy", (d) => d.y)
                 .style("fill", "#19d3a2")
                 .style("fill-opacity", 0.3)
                 .attr("stroke", "#b3a2c8")
                 .attr("stroke-width", 4)
                 .style("cursor", "pointer");

  // 建立拖曳方法
  // 在d3.drag()事件處理器中，應避免使用箭頭函數來確保"this"能綁定到正確的DOM元素
  const drag = d3.drag()
                 .on("start", function() {  // 因為要用"this"，所以用普通函數
                   d3.select(this).style("stroke", "blue");
                 })
                 .on("drag", function(e) {  // 因為要用"this"，所以用普通函數
                   const pt = d3.pointer(e, this);
                   d3.select(this)
                     .attr("cx", pt[0])
                     .attr("cy", pt[1]);
                 })
                 .on("end", function() {  // 因為要用"this"，所以用普通函數
                   d3.select(this).style("stroke", "#b3a2c8");
                 });

  // 呼叫拖曳方法
  dots.call(drag);
});
</script>

<style scoped></style>
