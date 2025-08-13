<template>
  <div ref="bubbleChartRef"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const bubbleChartRef = ref(null);

// 圖表尺寸與內邊距設定
const width = 600;
const height = 400;
const margin = {top: 20, right: 20, bottom: 30, left: 25};
const chartWidth = width - margin.left - margin.right;
const chartHeight = height - margin.top - margin.bottom;

onMounted(async () => {
  // 建立svg
  const svg = d3.select(bubbleChartRef.value)
                .style("position", "relative")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

  // 匯入資料
  const url = "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/4_ThreeNum.csv";
  const data = await d3.csv(`${url}`);

  // 整理X軸資料、Y軸資料、Z的人口數量資料
  const xData = data.map((d) => +d.gdpPercap);
  const yData = data.map((d) => +d.lifeExp);
  const zData = data.map((d) => +d.pop);

  // 建立X軸
  const xScale = d3.scaleLinear()
                   .domain([0, d3.max(xData)])
                   .range([margin.left, chartWidth])
                   .nice();
  const xAxisGenerator = d3.axisBottom(xScale);

  svg.append("g")
     .attr("transform", `translate(0, ${margin.top + chartHeight})`)
     .call(xAxisGenerator);

  // 建立Y軸
  const yScale = d3.scaleLinear()
                   .domain([0, d3.max(yData)])
                   .range([margin.top + chartHeight, margin.top])
                   .nice();
  const yAxisGenerator = d3.axisLeft(yScale);

  svg.append("g")
     .attr("transform", `translate(${margin.left}, 0)`)
     .call(yAxisGenerator);

  // 氣泡(Z)的部分
  // 按照人口去設定氣泡大小的比例尺
  const radiusScale = d3.scaleLinear()
                        .domain([d3.min(zData), d3.max(zData)])
                        .range([4, 30]);

  // 設定氣泡顏色，本例根據不同洲來設定
  const bubbleColor = d3.scaleOrdinal()
                        .domain(["Asia", "Europe", "Americas", "Africa", "Oceania"])
                        .range(d3.schemeSet2);

  // 建立tooltip
  const tooltip = d3.select(bubbleChartRef.value)
                    .append("div")
                    .style("position", "absolute")
                    .style("display", "none")
                    .attr("class", "dotsTooltip")
                    .style("background-color", "#121212")
                    .style("border-radius", "5px")
                    .style("padding", "10px")
                    .style("color", "#f2f2f2");

  // 綁定氣泡
  const bubble = svg.append("g")
                    .selectAll("circle")
                    .data(data)
                    .join("circle")
                    .attr("cx", (d) => xScale(d.gdpPercap))
                    .attr("cy", (d) => yScale(d.lifeExp))
                    .attr("r", (d) => radiusScale(d.pop))
                    .attr("fill", (d) => bubbleColor(d.continent))
                    .attr("opacity", 0.85)
                    .style("cursor", "pointer")
                    .on("mouseover", showTooltip)
                    .on("mousemove", moveTooltip)
                    .on("mouseleave", hideTooltip);

  // 設定顯示、移動、隱藏tooltips
  function showTooltip(e, d) {
    const pt = d3.pointer(e, e.target);

    // 設定tooltip樣式與呈現文字
    tooltip.style("display", "block")
           .html(`<p>國家：${d.country}</p>
                  <p>所屬洲：${d.continent}</p>
                  <p>人口數：${(+d.pop).toLocaleString()}</p>
                  <p>平均壽命：${d.lifeExp}</p>
                  <p>人均GDP：${d.gdpPercap}</p>`)
           .style("left", `${pt[0] + 10}px`)
           .style("top", `${pt[1] + 10}px`);

    // 圓點強調
    d3.select(e.target)
      .attr("r", radiusScale(d.pop) + 5)
      .style("opacity", 0.7);
  };

  function moveTooltip(e) {
    const pt = d3.pointer(e, e.target);
    tooltip.style("display", "block")
           .style("left", `${pt[0] + 10}px`)
           .style("top", `${pt[1] + 10}px`);
  };

  function hideTooltip(e, d) {
    tooltip.style("display", "none");

    // 圓點復原
    d3.select(e.target)
      .attr("r", radiusScale(d.pop))
      .style("opacity", 0.85);
  };
});
</script>

<style scoped></style>
