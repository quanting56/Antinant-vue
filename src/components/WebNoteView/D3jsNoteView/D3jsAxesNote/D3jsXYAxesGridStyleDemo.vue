<template>
  <svg
    ref="xyAxesGridStyleSvgRef"
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

const xyAxesGridStyleSvgRef = ref(null);

// 給定的數據
const data = [
  {x: 100, y: 20},
  {x: 18, y: 30},
  {x: 105, y: 250}
];

// 抓出x軸、y軸需要用到的資料
const xData = data.map((d) => d.x);
const yData = data.map((d) => d.y);

onMounted(() => {
  const svg = d3.select(xyAxesGridStyleSvgRef.value);

  // x比例尺與軸線
  const xScale = d3.scaleLinear()
                   .domain([0, d3.max(xData)])
                   .range([margin, width - margin]);
                   // .nice();  // 加不加'.nice()'看情況

  const xAxisGenerator = d3.axisBottom(xScale)
                           .ticks(10)  // 調整數量，讓間距看起來跟y軸差不多
                           .tickSizeOuter(0);  // 消除非整數倍的刻度線段

  // y比例尺與軸線
  const yScale = d3.scaleLinear()
                   .domain([0, d3.max(yData)])
                   .range([height - margin * 2, 0])
                   .nice();  // 加不加'.nice()'看情況

  const yAxisGenerator = d3.axisLeft(yScale)
                           .ticks(5)  // 調整數量，讓間距看起來跟x軸差不多
                           .tickSizeOuter(0);  // 消除非整數倍的刻度線段

  // 建立<g>元素並呼叫軸線產生方式，先分別生成x與y軸線，再繪製x軸向上與y軸向右的不同色軸線
  svg.append("g")
     .call(xAxisGenerator)
     .attr("transform", `translate(0, ${ height - margin })`)
     .selectAll(".tick")  // '.tick'為預設的class名稱
     .append("line")
     .attr("x1", 0)
     .attr("x2", 0)
     .attr("y1", 0)
     .attr("y2", -height + margin * 2 )
     .attr("stroke", "#e4e4e4");

  svg.append("g")
     .call(yAxisGenerator)
     .attr("transform", `translate(${margin}, ${margin})`)
     .selectAll(".tick")  // '.tick'為預設的class名稱
     .filter((d, i) => i !== 0)  // 不繪製第一條與x軸重疊的y軸線
     .append("line")
     .attr("x1", 0)
     .attr("x2", width - margin * 2)
     .attr("y1", 0)
     .attr("y2", 0)
     .attr("stroke", "#e4e4e4");
});
</script>

<style scoped></style>
