<template>
  <svg
    ref="clockAxisSvgRef"
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
const height = width;
// const margin = ( width - height ) / 2; 此例不用另外設定margin

const clockAxisSvgRef = ref(null);

onMounted(() => {
  const svg = d3.select(clockAxisSvgRef.value);

  // 設定變數
  const clockRadius = height / 3;  // 時鐘半徑，設定為<svg>高度的三分之一
  const minuteTickInnerRadius = clockRadius - 10;  // 分鐘刻度線長度，設定為10
  const hourTickInnerRadius = clockRadius - 17;  // 小時刻度線長度，設定為17
  const degToRad = Math.PI / 180;  // 弧度，將度數轉換為弧度
  const minuteLabelRadius = clockRadius + 15;  // 分鐘文字標籤半徑，設定為時鐘半徑+15
  const minuteLabelYOffset = 5;  // 分鐘文字標籤Y方向的偏移量（y位置為文字基線，需再修正），避免標籤與刻度線重疊
  const hourLabelRadius = clockRadius - 35;  // 小時文字標籤半徑，設定為時鐘半徑-15
  const hourLabelYOffset = 6;  // 小時文字標籤Y方向上的偏移量（y位置為文字基線，需再修正）

  // 設定小時刻度比例尺和分鐘刻度比例尺
  // 小時比例尺（12小時映射到360度）
  const hourScale = d3.scaleLinear()
                      .domain([0, 12])
                      .range([0, 360]);
  // 分鐘比例尺（60分鐘映射到360度）
  const minuteScale = d3.scaleLinear()
                        .domain([0, 60])
                        .range([0, 360]);

  // 建立<g>，起始點移動到<svg>中心
  const G = svg.append("g")
               .attr("transform", `translate(${[Math.round( width / 2 ), Math.round( height / 2 )]})`);

  // 分鐘刻度
  G.selectAll(".minuteTicks")
   .data(d3.range(0, 60))  // 建立0到59的數列
   .join("line")
   .attr("class", "minuteTicks")
   .attr("x1", "0")
   .attr("x2", "0")
   .attr("y1", clockRadius)
   .attr("y2", minuteTickInnerRadius)
   .attr("stroke-width", "3")
   .attr("stroke", "black")
   .attr("transform", (d) => `rotate(${minuteScale(d)})`);

  // 分鐘數字標籤
  G.selectAll(".minuteLabels")
   .data(d3.range(5, 61, 5))  // 5到60，間隔5
   .join("text")
   .attr("class", "minuteLabels")
   .attr("x", (d) => minuteLabelRadius * Math.sin(minuteScale(d) * degToRad))  // 標籤的半徑乘以sin(比例尺承弧度)
   .attr("y", (d) => -minuteLabelRadius * Math.cos(minuteScale(d) * degToRad) + minuteLabelYOffset)  // 標籤的半徑乘以cos(比例尺承弧度)
   .text((d) => d)
   .attr("text-anchor", "middle")
   .attr("font-size", "14")
   .style("fill", "#a0a0a0");

  // 時鐘刻度
  G.selectAll(".hourTicks")
   .data(d3.range(0, 12))  // 建立0到11的數列
   .join("line")
   .attr("class", "hourTicks")
   .attr("x1", "0")
   .attr("x2", "0")
   .attr("y1", clockRadius)
   .attr("y2", hourTickInnerRadius)
   .attr("stroke-width", "5")
   .attr("stroke", "black")
   .attr("transform", (d) => `rotate(${hourScale(d)})`);

  // 時鐘數字標籤
  G.selectAll(".hourLabels")
   .data(d3.range(3, 13, 3))  // 3到12，間隔3
   .join("text")
   .attr("class", "hourLabels")
   .attr("x", (d) => hourLabelRadius * Math.sin(hourScale(d) * degToRad))  // 標籤的半徑乘以sin(比例尺承弧度)
   .attr("y", (d) => -hourLabelRadius * Math.cos(hourScale(d) * degToRad) + hourLabelYOffset)  // 標籤的半徑乘以cos(比例尺承弧度)
   .text((d) => d)
   .attr("text-anchor", "middle")
   .style("font-weight", "bolder");
});
</script>

<style scoped></style>
