<template>
  <ol type="i" style="margin-top: -32px;">
    <li>先畫出實線部分<div ref="solidChartContainerRef"></div></li>
    <li>再畫出虛線部分<div ref="dashedChartContainerRef"></div></li>
    <li>將虛、實兩者合併<div ref="combinedChartContainerRef"></div></li>
    <li>加上圓點點<div ref="combinedAddPointChartContainerRef"></div></li>
  </ol>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const solidChartContainerRef = ref(null);
const dashedChartContainerRef = ref(null);
const combinedChartContainerRef = ref(null);
const combinedAddPointChartContainerRef = ref(null);

const drawChart = (container) => {
  const width = 300;
  const height = 200;
  const margin = 30;
  const data = [
    {x: 1, y: 60},
    {x: 2, y: 125},
    {x: 3, y: 0},
    {x: 4, y: 170},
    {x: 5, y: 15},
    {x: 6, y: 45},
    {x: 7, y: 0},
    {x: 8, y: 240},
  ];
  const svg = d3.select(container)
                .append("svg")
                .attr("width", width)
                .attr("height", height);
  const xData = data.map((d) => d.x);
  const yData = data.map((d) => d.y);

  const xScale = d3.scaleLinear()
                   .domain([0, d3.max(xData)])
                   .range([margin, width - margin])
                   .nice();
  const xAxisGenerator = d3.axisBottom(xScale)
  const xAxis = svg.append("g")
                   .attr("transform", `translate(0, ${height - margin})`)
                   .call(xAxisGenerator);

  const yScale = d3.scaleLinear()
                   .domain([0, d3.max(yData)])
                   .range([height - margin, margin])
                   .nice();
  const yAxisGenerator = d3.axisLeft(yScale)
  const yAxis = svg.append("g")
                   .attr("transform", `translate(${margin}, 0)`)
                   .call(yAxisGenerator);

  // 用line.defined過濾掉是零的數值，設定只回傳y大於0的數值
  const lineChart = d3.line()
                      .x((d) => xScale(d.x))
                      .y((d) => yScale(d.y))
                      .defined((d) => d.y > 0);

  let filteredData = data.filter(d => d.y > 0);

  if (container === solidChartContainerRef.value) {
    svg.append("path")
       .datum(data)
       .attr("d", lineChart(data))
       .attr("fill", "none")
       .attr("stroke", "#f68b47")
       .attr("stroke-width", 2.5);
  } else if (container === dashedChartContainerRef.value) {
    svg.append("path")
       .datum(data)
       .attr("d", lineChart(filteredData))
       .attr("fill", "none")
       .attr("stroke", "#f68b47")
       .attr("stroke-width", "2.5")
       .attr("stroke-dasharray", "4, 4");
  } else if (container === combinedChartContainerRef.value) {
    svg.append("path")
       .datum(data)
       .attr("d", lineChart(data))
       .attr("fill", "none")
       .attr("stroke", "#f68b47")
       .attr("stroke-width", 2.5);
    svg.append("path")
       .datum(data)
       .attr("d", lineChart(filteredData))
       .attr("fill", "none")
       .attr("stroke", "#f68b47")
       .attr("stroke-width", "2.5")
       .attr("stroke-dasharray", "4, 4");
  } else if (container === combinedAddPointChartContainerRef.value) {
    svg.append("path")
       .datum(data)
       .attr("d", lineChart(data))
       .attr("fill", "none")
       .attr("stroke", "#f68b47")
       .attr("stroke-width", 2.5);
    svg.append("path")
       .datum(data)
       .attr("d", lineChart(filteredData))
       .attr("fill", "none")
       .attr("stroke", "#f68b47")
       .attr("stroke-width", "2.5")
       .attr("stroke-dasharray", "4, 4");
    svg.append("g")
       .selectAll("circle")
       .data(filteredData)
       .join("circle")
       .attr("cx", (d) => xScale(d.x))
       .attr("cy", (d) => yScale(d.y))
       .attr("r", "4")
       .attr("fill", "white")
       .attr("stroke", "#f68b47")
       .attr("stroke-width", "1.5");
  };
};

onMounted(() => {
  drawChart(solidChartContainerRef.value);
  drawChart(dashedChartContainerRef.value);
  drawChart(combinedChartContainerRef.value);
  drawChart(combinedAddPointChartContainerRef.value);
});
</script>

<style scoped></style>
