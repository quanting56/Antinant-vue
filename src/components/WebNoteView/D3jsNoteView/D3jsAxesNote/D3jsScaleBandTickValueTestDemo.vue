<template>
  <svg
    ref="axisScaleBandTickValueTestSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = ( width - height ) / 2;

const axisScaleBandTickValueTestSvgRef = ref(null);

const zodiacData = ["鼠", "牛", "虎", "兔", "龍", "蛇", "馬", "羊", "猴", "雞", "狗", "豬"];

onMounted(() => {
  // 設定比例尺
  const axisScaleBandTickValueTestScale = d3.scaleBand()
                                            .domain(zodiacData)
                                            .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisScaleBandWithoutTickValueTestAxisGenerator = d3.axisBottom(axisScaleBandTickValueTestScale);
  const axisScaleBandWithTickValueTestAxisGenerator = d3.axisBottom(axisScaleBandTickValueTestScale)
                                                    .tickValues(axisScaleBandTickValueTestScale.domain().filter((d, idx) => idx%2 === 0));  // 加這行減少顯示的標籤數（即指定刻度），以利閱讀

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select(axisScaleBandTickValueTestSvgRef.value)
    .append("g")
    .call(axisScaleBandWithoutTickValueTestAxisGenerator)
    .attr("transform", `translate(0, ${ height / 3 - 15})`);

  d3.select(axisScaleBandTickValueTestSvgRef.value)
    .append("g")
    .call(axisScaleBandWithTickValueTestAxisGenerator)
    .attr("transform", `translate(0, ${ height * 2 / 3})`);

  d3.select(axisScaleBandTickValueTestSvgRef.value)
    .append("text")
    .text("↓")
    .attr("transform", `translate(${ width / 2 }, ${ height / 2 + 3})`);
});
</script>

<style scoped></style>
