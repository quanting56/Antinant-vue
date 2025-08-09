<template>
  <svg
    ref="clickSvgRef"
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

const clickSvgRef = ref(null);
let isMoved = false;  // 用來追蹤圓球是否已經移動

onMounted(() => {
  const clickCircle = d3.select(clickSvgRef.value)
                        .append("circle")
                        .attr("cx", 30)
                        .attr("cy", 30)
                        .attr("r", 20)
                        .attr("fill", "#f68b47")
                        .attr("cursor", "pointer");

  clickCircle.on("click", (e) => {
    if (!isMoved) {
      d3.select(e.target)
        .transition()
        .ease(d3.easeBack)
        .duration(1000)
        .attr("fill", "blue")
        .attr("transform", "translate(240, 0)");
      isMoved = true;  // 更新狀態為已移動
    } else {
      d3.select(e.target)
        .transition()
        .ease(d3.easeBack)
        .duration(1000)
        .attr("fill", "#f68b47")
        .attr("transform", "translate(0, 0)");
      isMoved = false;  // 更新狀態為未移動
    };
  })
});
</script>

<style scoped></style>
