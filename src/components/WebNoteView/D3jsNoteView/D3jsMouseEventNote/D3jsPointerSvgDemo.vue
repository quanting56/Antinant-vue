<template>
  <svg
    ref="pointerSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray; cursor: pointer;"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;

const pointerSvgRef = ref(null);
let pointerTxt = null;

onMounted(() => {
  const pointerSvg = d3.select(pointerSvgRef.value);
  pointerTxt = pointerSvg.append("text")
                         .style("display", "none");
});

// 滑鼠移動時顯示座標
const onMouseMove = (e) => {
  const [x, y] = d3.pointer(e, pointerSvgRef.value);

  pointerTxt.attr("x", x)
            .attr("y", y)
            .text(`x: ${Math.floor(x)}, y: ${Math.floor(y)}`)
            .style("display", "block");
};

// 滑鼠離開時隱藏文字
const onMouseLeave = () => {
  pointerTxt.style("display", "none");  // 離開SVG後不顯示文字
};
</script>

<style scoped></style>
