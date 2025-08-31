<template>
  <div ref="chart"></div>
</template>

<script setup>
import { ref, watch, onMounted, defineProps } from "vue";
import * as d3 from "d3";

const chart = ref(null);
const props = defineProps({
  data: Array,
});

// D3 元素引用
let svg, xScale, yScale, xAxisGroup, yAxisGroup, linePath;

onMounted(() => {
  const svgHeight = 300;
  const svgWidth = parseInt(d3.select(chart.value).style("width"));
  const margin = { top: 50, right: 120, bottom: 50, left: 60 };

  // 建立 SVG
  svg = d3
    .select(chart.value)
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  // 建立比例尺
  xScale = d3.scaleLinear().range([margin.left, svgWidth - margin.right]);
  yScale = d3.scaleLinear().range([svgHeight - margin.bottom, margin.top]);

  // 建立軸群組
  xAxisGroup = svg
    .append("g")
    .attr("transform", `translate(0, ${svgHeight - margin.bottom})`);

  yAxisGroup = svg
    .append("g")
    .attr("transform", `translate(${margin.left}, 0)`);

  // 建立折線 path
  linePath = svg
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "#42b983")
    .attr("stroke-width", 2);

  // 初始化圖表
  updateChart(props.data);
});

// 監聽 data 變化
watch(
  () => props.data,
  (newData) => {
    updateChart(newData);
  }
);

function updateChart(data) {
  if (!data || data.length === 0) return;

  const svgHeight = 300;
  const svgWidth = parseInt(d3.select(chart.value).style("width"));
  const margin = { top: 50, right: 120, bottom: 50, left: 60 };

  // 更新比例尺
  xScale.domain([0, data.length - 1]);
  yScale.domain([0, d3.max(data)]);

  // 軸生成器
  const xAxisGenerator = d3.axisBottom(xScale)
    .ticks(data.length)
    .tickFormat(d => `第${d}年`);
  const yAxisGenerator = d3.axisLeft(yScale)
    .tickFormat(d => `${d}萬 元`);

  // 平滑更新軸
  xAxisGroup.transition().duration(500).call(xAxisGenerator);
  xAxisGroup.selectAll("text").attr("transform", "translate(-20,15) rotate(-45)");
  yAxisGroup.transition().duration(500).call(yAxisGenerator);

  // 折線生成器
  const lineChart = d3.line()
    .x((d, i) => xScale(i))
    .y(d => yScale(d));

  // 平滑更新折線
  linePath
    .datum(data)
    .transition()
    .duration(500)
    .attr("d", lineChart);

  // 如果需要滑鼠點
  setupMouseInteraction(svg, data, xScale, yScale, margin, svgHeight);
}

// 建立滑鼠互動
function setupMouseInteraction(svg, data, xScale, yScale, margin, svgHeight) {
  // 移除舊的覆蓋矩形
  svg.selectAll("rect.mouse-overlay").remove();
  svg.selectAll("g.focus-dot").remove();

  // 建立覆蓋矩形
  svg.append("rect")
    .classed("mouse-overlay", true)
    .style("fill", "transparent")
    .style("pointer-events", "all")
    .style("cursor", "pointer")
    .attr("width", parseInt(d3.select(chart.value).style("width")) - margin.left - margin.right)
    .attr("height", svgHeight - margin.top - margin.bottom)
    .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseout", mouseout);

  // 建立圓點
  const focusDot = svg.append("g")
    .classed("focus-dot", true)
    .append("circle")
    .style("fill", "#ffffff")
    .style("stroke", "#000000")
    .style("stroke-width", 0.8)
    .attr("r", 3)
    .style("opacity", 0);

  // 建立文字標籤
  const focusText = svg.append("text")
    .style("opacity", 0)
    .attr("text-anchor", "start")
    .attr("alignment-baseline", "middle");

  function mouseover() {
    focusDot.style("opacity", 1);
    focusText.style("opacity", 1);
  }

  function mousemove(e) {
    const [mouseX] = d3.pointer(e, this);
    const x0 = xScale.invert(mouseX);
    let i = Math.round(x0);
    if (i < 0 || i >= data.length || data[i] === undefined) return;
    const selectedData = data[i];
    focusDot.attr("cx", xScale(i)).attr("cy", yScale(selectedData));
    focusText
      .text(`第${i}年，本利和${selectedData.toFixed(0)}萬元`)
      .attr("x", xScale(i) - 20)
      .attr("y", yScale(selectedData) - 20);
  }

  function mouseout() {
    focusDot.style("opacity", 0);
    focusText.style("opacity", 0);
  }
}
</script>

<style scoped>
/* 可以加一些 SVG hover 或文字樣式 */
</style>
