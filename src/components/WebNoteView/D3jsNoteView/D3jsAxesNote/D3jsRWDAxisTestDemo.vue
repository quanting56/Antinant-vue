<template>
  <svg
    ref="rwdAxisTestSvgRef"
    :width="rwdAxisTestCurrentWidth"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const rwdAxisTestSvgRef = ref(null);

// 圖表尺寸與內邊距設定（初始化）
const rwdAxisTestCurrentWidth = ref("100%");
const height = 300;
const rwdAxisTestCurrentMargin = Math.abs((rwdAxisTestCurrentWidth.value - height) / 2);

onMounted(() => {
  // 圖表尺寸與內邊距設定（需掛載完成才計算）
  const rwdAxisTestCurrentWidth = parseInt(d3.select(rwdAxisTestSvgRef.value).style("width"));
  const height = 300;
  const rwdAxisTestCurrentMargin = rwdAxisTestCurrentWidth > height
    ? ( rwdAxisTestCurrentWidth - height ) / 2
    : ( height - rwdAxisTestCurrentWidth ) / 2;

  // 設定比例尺
  const xScale = d3.scaleLinear()
                   .domain([0, 100])
                   .range([rwdAxisTestCurrentMargin, rwdAxisTestCurrentWidth - rwdAxisTestCurrentMargin]);

  // 設定軸線產生方式
  const xAxisGenerator = d3.axisTop(xScale);

  // 再建立<g>元素，並呼叫軸線產生方法，生成軸線
  d3.select(rwdAxisTestSvgRef.value)
    .append("g")
    .call(xAxisGenerator)
    .attr("transform", `translate(0, ${ height / 2 })`);
});
</script>

<style scoped></style>
