<template>
  <div ref="multiLineChartContainerRef"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const multiLineChartContainerRef = ref(null);

// 圖表尺寸與內邊距設定
const width = 600;
const height = 400;
const margin = 50;

onMounted(async () => {
  const svg = d3.select(multiLineChartContainerRef.value)
                .append("svg")
                .attr("width", width)
                .attr("height", height);

  // 取資料集
  const res = await d3.json("https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=5n9c3AlEJ2DH&IsTransData=1");
  const data = res.filter(d => d.observeDate.substring(0, 4) === "2023");  // 只取2023年的資料
  const xData = data.map((i) => i.observeDate.substring(4, 6));
  const yData = data.map((i) => {
    let rainfall = parseFloat(i.rainfall);
    return rainfall = rainfall || 0;  // 如果rainfall的值是NaN、null、undefined、0或""（空字串），那麼rainfall會被設定為0，否則保持原來的值
  });

  // X軸
  const xScale = d3.scaleLinear()
                   .domain(d3.extent(xData))
                   .range([margin, width - margin])
                   .nice();
  const xAxisGenerator = d3.axisBottom(xScale)
                           .ticks(8)
                           .tickFormat(d => d + "月");
  const xAxis = svg.append("g")
                   .attr("transform", `translate(0, ${height - margin})`)
                   .call(xAxisGenerator);

  // Y軸
  const yScale = d3.scaleLinear()
                   .domain(d3.extent(yData))
                   .range([height - margin, margin])
                   .nice();
  const yAxisGenerator = d3.axisLeft(yScale).tickFormat(d => d + "mm");
  const yAxis = svg.append("g")
                   .attr("transform", `translate(${margin}, 0)`)
                   .call(yAxisGenerator);

  // 把資料按照name分組
  const sumName = d3.group(data, d => d.observatory);
  const color = d3.scaleOrdinal()
                  .domain(data.map(d => d.item))  // 此資料沒有item項，因此此同'.domain()'，即domain是空的
                  .range(d3.schemeCategory10);

  // 建立tooltip
  const nameTag = d3.select(multiLineChartContainerRef.value)
                    .style("position", "relative")
                    .append("div")
                    .attr("class", "multiLineChartNameTag")
                    .style("position", "absolute")
                    .style("background-color", "#121212")
                    .style("color", "#f2f2f2")
                    .style("border-radius", "5px")
                    .style("padding", "10px")
                    .style("display", "none");

  // 開始建立折線圖
  svg.append("g")
     .selectAll("path")
     .data(sumName)
     .join("path")
     .attr("d", d => {
       return d3.line()
                .x((d) => xScale(d.observeDate.substr(4, 6)))
                .y((d) => {
                  let rainfall = parseFloat(d.rainfall);
                  rainfall = rainfall || 0;
                  return yScale(rainfall);
                })(d[1])  // 因為是從sumName裡面取資料，除了觀測站（observatory）以外的資料都在d[1]裡
     })
     .attr("fill", "none")
     .attr("stroke", d => color(d))
     .attr("stroke-width", 1.5)
     .style("cursor", "pointer")
     .on("mouseover", handleMouseover)
     .on("mouseleave", handleMouseleave);

  function handleMouseover(e) {
    let pt = d3.pointer(e, e.target);
    d3.select(this).style("stroke-width", "5");

    nameTag.style("display", "block")
           .html(e.target.__data__[0])  // 因為已用"d3.group()"分組，所以此處"e.target.__data__[0]"代表觀測站名稱
           .style("left", pt[0] + 10 + "px")
           .style("top", pt[1] + "px");
  };

  function handleMouseleave() {
    d3.select(this).style("stroke-width", "1.5");
    nameTag.style("display", "none");
  };
});
</script>

<style scoped></style>
