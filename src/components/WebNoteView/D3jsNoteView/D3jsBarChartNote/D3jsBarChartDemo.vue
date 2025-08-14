<template>
  <div ref="barChartContainerRef"></div>
  <div class="btn-container">
    <button
      type="button"
      v-for="(btn, index) in buttons"
      :key="index"
      @click="updateElectricChart(btn.file)"
      class="month-button"
    >
      {{ btn.label }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

import file202404 from "../../../../assets/web-note-view/d3js-note-view/taipower-data/202404.csv?url";
import file202405 from "../../../../assets/web-note-view/d3js-note-view/taipower-data/202405.csv?url";
import file202406 from "../../../../assets/web-note-view/d3js-note-view/taipower-data/202406.csv?url";

const barChartContainerRef = ref(null);

// 圖表尺寸與內邊距設定
const width = 600;
const height = 400;
const margin = {top: 40, right: 40, bottom: 50, left: 80};

const buttons = [
  { label: "2024 4月", file: file202404 },
  { label: "2024 5月", file: file202405 },
  { label: "2024 6月", file: file202406 },
];

let svg, xScale, yScale, xAxisGenerator, yAxisGenerator, xAxis, yAxis;

const initChart = () => {
  svg = d3.select(barChartContainerRef.value)
          .append("svg")
          .attr("width", width)
          .attr("height", height);

  // 建立初始X軸
  xScale = d3.scaleBand()
             .range([margin.left, width - margin.right])
             .padding(0.2);
  xAxisGenerator = d3.axisBottom(xScale)
                     .tickSizeOuter(0);
  xAxis = svg.append("g")
             .attr("transform", `translate(0, ${height - margin.bottom})`);

  // 建立初始Y軸
  yScale = d3.scaleLinear()
             .range([height - margin.bottom, margin.top]);
  yAxisGenerator = d3.axisLeft(yScale)
                     .ticks(5)
                     .tickSize(3)
                     .tickSizeOuter(0);
  yAxis = svg.append("g")
             .attr("transform", `translate(${margin.left}, 0)`);
};

const updateElectricChart = async (csvData) => {
  const data = await d3.csv(csvData);
  // map資料集
  const xData = data.map((i) => i["縣市"]);
  const yData = data.map((i) => parseInt(i["合計售電量_度"].split(",").join("")));  // 用'parseInt(目標.split(",").join(""))'消去數字裡三位的逗號，並轉成數值

  // 設定X軸Domain、建立X軸
  xScale.domain(xData);
  xAxis.transition().duration(1000).call(xAxisGenerator);

  // 調整X軸刻度文字標籤傾斜
  xAxis.selectAll("text")
       .attr("transform", "translate(-10, 0) rotate(-45)")
       .style("text-anchor", "end");

  // 設定Y軸Domain、建立Y軸
  yScale.domain([0, d3.max(yData)]).nice();
  yAxis.transition().duration(1000).call(yAxisGenerator);

  // 開始建立長條圖
  const bar = svg.selectAll("rect")
                 .data(data)
                 .join("rect")
                 .attr("x", d => xScale(d["縣市"]))
                 .attr("width", xScale.bandwidth())
                 .attr("fill", "#69b3a2");

  // 加上漸增動畫
  // 注意：如果要加動畫，事件要分開寫
  bar.transition()
     .duration(1000)
     .attr("y", d => yScale(parseInt(d["合計售電量_度"].split(",").join(""))))
     .attr("height", d => ( height - margin.bottom) - yScale(parseInt(d["合計售電量_度"].split(",").join(""))));

  // 加上滑鼠事件
  bar.style("cursor", "pointer")
     .on("mouseover", handleMouseOver)
     .on("mouseleave", handleMouseLeave);
};

function handleMouseOver(e) {
  d3.select(this).attr("fill", "#f68b47");

  // 加上文字標籤
  svg.append("text")
     .attr("class", "d3jsBarChartInfoText")
     .attr("x", xScale(e.target.__data__["縣市"]))
     .attr("y", yScale(parseInt(e.target.__data__["合計售電量_度"].split(",").join(""))))
     .style("fill", "#121212")
     .style("font-size", "18px")
     .style("font-weight", "bold")
     .style("text-anchor", "middle")
     .text(e.target.__data__["合計售電量_度"] + "度");
};

function handleMouseLeave() {
  d3.select(this).attr("fill", "#69b3a2");
  svg.select(".d3jsBarChartInfoText").remove();
};

onMounted(() => {
  initChart();
  updateElectricChart(buttons[0].file);
});
</script>

<style scoped>
.btn-container {
  display: flex;
  gap: 5px;
}

.month-button {
  padding: 6px 12px 6px 12px;
  font-size: 16px;
  font-weight: 400;
  font-family: inherit;
  line-height: 1.5;
  color: #ffc107;
  background-color: #ffffff;
  border: 1px solid #ffc107;
  border-radius: 6px;
  cursor: pointer;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}

.month-button:hover {
  color: #ffffff;
  background-color: #ffc107;
  border-color: #ffc107;
}
</style>
