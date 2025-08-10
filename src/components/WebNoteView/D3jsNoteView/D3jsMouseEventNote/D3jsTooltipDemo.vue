<template>
  <div style="position: relative;">
    <svg
      ref="tooltipSvgRef"
      :width="width"
      :height="height"
      style="border: 1px solid lightgray;"
    ></svg>
    <div
      v-show="isTooltipVisible"
      style="position: absolute; top: 15px; left: 220px;"
      class="tooltip"
    >
      <p>
        <b>我是Tooltip</b><br />
        這裡可以放入想放入的文字，<br />
        也可以插入圖片
      </p>
      <img :src="tooltipImg" width="60px">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";
import tooltipImg from "../../../../assets/IMG_2073.jpg";

// 圖表尺寸與內邊距設定
const width = 200;
const height = 200;

const tooltipSvgRef = ref(null);
const isTooltipVisible = ref(false);
let tooltipCircle = null;

onMounted(() => {
  const tooltipSvg = d3.select(tooltipSvgRef.value);

  tooltipCircle = tooltipSvg.append("circle")
                            .attr("cx", 100)
                            .attr("cy", 100)
                            .attr("r", 40)
                            .attr("cursor", "pointer")
                            .attr("fill", "#f6cefc")
                            .on("mouseover", () => {
                              isTooltipVisible.value = true;
                            })
                            .on("mouseleave", () => {
                              isTooltipVisible.value = false;
                            });
});
</script>

<style scoped>
.tooltip {
  border: 1px solid black;
  border-radius: 5px;
  padding: 8px;
}

.tooltip p {
  margin-top: 4px;
}

.tooltip img {
  margin-bottom: 0;
}
</style>
