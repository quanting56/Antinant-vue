<template>
  <div ref="definedLineChartContainerRef"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 600;
const height = 400;
const margin = 50;

const definedLineChartContainerRef = ref(null);

const data = [
  {x: 1, y: 120},
  {x: 2, y: 355},
  {x: 3, y: 0},
  {x: 4, y: 470},
  {x: 5, y: 19},
  {x: 6, y: 90},
  {x: 7, y: 0},
  {x: 8, y: 220},
];

onMounted(() => {
  const svg = d3.select(definedLineChartContainerRef.value)
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

  // 用用line.defined過濾掉是零的數值，設定只回傳y大於0的數值
  const lineChart = d3.line()
                      .x((d) => xScale(d.x))
                      .y((d) => yScale(d.y))
                      .defined((d) => d.y > 0);
                      
  // 保留d.y大於零的資料（不要d.y等於0的資料），用這些資料去建立連線（虛線）
  let filteredData = data.filter(d => d.y > 0);  // 也可以用lineChart.defined()
                      
  // 先建立虛線（dashed折線）
  svg.append("path")
     .datum(data)
     .attr("d", lineChart(filteredData))  // 因為已經沒有d.y等於0的資料，所以不會有斷點
     .attr("fill", "none")
     .attr("stroke", "#f68b47")
     .attr("stroke-width", "2.5")
     .attr("stroke-dasharray", "4, 4");

  // 再畫實線
  svg.append("path")
     .datum(data)
     .attr("d", lineChart(data))  // 原始資料含有d.y等於0的資料，所以會有斷點
     .attr("fill", "none")
     .attr("stroke", "#f68b47")
     .attr("stroke-width", 2.5);

  // 加上tooltip
  const tooltip = d3.select(definedLineChartContainerRef.value)
                    .style("position", "relative")
                    .append("div")
                    .style("position", "absolute")
                    .style("opacity", "0")
                    .style("background-color", "white")
                    .style("border", "1px solid black")
                    .style("border-radius", "5px")
                    .style("padding", "5px");

  // 加上圓點點
  svg.append("g")
     .selectAll("circle")
     .data(filteredData)
     .join("circle")
     .attr("cx", (d) => xScale(d.x))
     .attr("cy", (d) => yScale(d.y))
     .attr("r", "5")
     .attr("fill", "white")
     .attr("stroke", "#f68b47")
     .attr("stroke-width", "2")
     .style("cursor", "pointer")
     .on("mouseover", dotsMouseover)
     .on("mouseleave", dotsMouseleave);

  function dotsMouseover(e) {
    let pt = d3.pointer(e, e.target);
    tooltip.style("opacity", "1")
           .style("left", pt[0] + 20 + "px")
           .style("top", pt[1] + "px")
           .html(`x值：${e.target.__data__.x}<br>` + 
                 `y值：${e.target.__data__.y}`
           );

    // 加上X-dashed線
    svg.append("line")
       .attr("class", "definedLineChartDashedX")
       .attr("x1", xScale(e.target.__data__.x))
       .attr("y1", height - margin)
       .attr("x2", xScale(e.target.__data__.x))
       .attr("y2", margin)
       .attr("stroke", "#f68b46")
       .attr("stroke-dasharray", "4");

    // 加上Y-dashed線
    svg.append("line")
       .attr("class", "definedLineChartDashedY")
       .attr("x1", margin)
       .attr("y1", yScale(e.target.__data__.y))
       .attr("x2", width - margin)
       .attr("y2", yScale(e.target.__data__.y))
       .style("stroke", "#f68b47")
       .style("stroke-dasharray", "4");
  };

  function dotsMouseleave(d) {
    tooltip.style("opacity", 0)
    svg.selectAll(".definedLineChartDashedX").remove();
    svg.selectAll(".definedLineChartDashedY").remove();
  };
});
</script>

<style scoped></style>
