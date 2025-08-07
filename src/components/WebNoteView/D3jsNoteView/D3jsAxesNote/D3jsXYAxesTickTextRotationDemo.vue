<template>
  <svg
    ref="xyAxesTickTextRotationSvgRef"
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
const margin = ( width - height ) / 2;

const xyAxesTickTextRotationSvgRef = ref(null);

// 給定的數據
const data = [
  {x: new Date(2024, 0), y: 30},
  {x: new Date(2024, 2), y: 80},
  {x: new Date(2024, 8), y: 90},
  {x: new Date(2024, 11), y: 20},
];

// 抓出x軸、y軸需要用到的資料
const xData = data.map((d) => d.x);
const yData = data.map((d) => d.y);

onMounted(() => {
  const svg = d3.select(xyAxesTickTextRotationSvgRef.value);

  // x比例尺與軸線
  const xScale = d3.scaleTime()
                   .domain([new Date(2024, 0), new Date(2024, 11)])
                   .range([margin, width - margin]);
  const xAxisGenerator = d3.axisBottom(xScale)
                           .tickFormat(d3.timeFormat("%Y-%m-%d"))
                           .tickSize(10);  // 延長刻度線，方便判讀

  // y比例尺與軸線
  const yScale = d3.scaleLinear()
                   .domain([0, d3.max(yData)])
                   .range([height - margin * 2, 0]);
  const yAxisGenerator = d3.axisLeft(yScale)
                           .ticks(5)
                           .tickSize(10)  // 延長刻度線，方便判讀
                           .tickSizeOuter(0);  // 消除非整數倍的刻度線段                          

  // 建立<g>元素並呼叫軸線產生方式，分別生成x與y軸線
  svg.append("g")
     .call(xAxisGenerator)
     .attr("transform", `translate(0, ${ height - margin - 15})`)
     .selectAll("text")  // '.tick'為預設的class名稱
     .attr("transform", "translate(-27, 22) rotate(-45)");  // 旋轉x軸上的文字標籤

  svg.append("g")
     .call(yAxisGenerator)
     .attr("transform", `translate(${margin}, ${margin - 15})`);
});
</script>

<style scoped></style>
