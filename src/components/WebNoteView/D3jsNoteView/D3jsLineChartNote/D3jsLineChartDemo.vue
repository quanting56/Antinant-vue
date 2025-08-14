<template>
  <svg
    ref="lineChartSvgRef"
    :width="width"
    :height="height"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";
import dayjs from "dayjs";
import "dayjs/locale/zh-tw";

import nangangHousePriceData from "../../../../assets/web-note-view/d3js-note-view/nangang-house-price/南港96Q3至113Q1買賣契約價格平均總價.csv?url";

// 圖表尺寸與內邊距設定
const width = 600;
const height = 400;
const margin = {top: 20, bottom: 60, right: 20, left: 60};

const lineChartSvgRef = ref(null);

// 先設一個函式轉換日期格式
// 中華民國年份改成西元
const ROCDateToADDate = (date) => {
  // 年份轉換
  date = date.replace(/\d{3}/, (match) => String(+match + 1911));

  // 季度換成每季第一天
  // 定義一個對應表，用於將季度表示（如Q1, Q2）轉換成對應的日期
  const seasonDates = {
    Q1: "-01-01",
    Q2: "-04-01",
    Q3: "-07-01",
    Q4: "-10-01"
  };

  const season = date.match(/Q\d/)[0];  // 找到季度表示（如Q1, Q2），因為'.match()'會返回一個陣列（此處為單元素陣列），所以需要用[0]取出該元素
  date = date.replace(season, seasonDates[season]);  // 用對應的日期替換季度表示
  return new Date(date);  // 將處理後的字串轉換成Date物件，並回傳
};

onMounted(async () => {
  const svg = d3.select(lineChartSvgRef.value)

  // 取資料
  const res = await d3.csv(nangangHousePriceData);
  const data = res.map((i) => {
    i["date"] = ROCDateToADDate(i["date"]);
    return i;
  });  // 日期格式轉換

  // map資料集
  const xData = data.map((i) => i["date"]);
  const yData = data.map((i) => +i["price"]);

  // Time Axis
  const xScale = d3.scaleTime()
                   .domain(d3.extent(xData))
                   .range([margin.left, width - margin.right])
                   .nice();
  let tickNumber = window.innerWidth > 900 ? (xData.length / 3) : 10 ;  // 根據視窗不同寬來調整tick數量
  const xAxisGenerator = d3.axisBottom(xScale)
                           .ticks(tickNumber)
                           .tickFormat((d) => dayjs(d).format("YYYY/MM/DD"));  // 此行亦可改用'.tickFormat(d3.timeFormat("%Y/%m/%d"))'
  const xAxis = svg.append("g")
                   .attr("transform", `translate(0, ${height - margin.bottom})`)
                   .call(xAxisGenerator)
                   .style("font-size", "12px");
  xAxis.selectAll(".tick text")
       .attr("transform", "rotate(-45)")
       .attr("x", "-35")
       .attr("y", "6");

  // Price Axis
  const yScale = d3.scaleLinear()
                   .domain(d3.extent(yData))
                   .range([height - margin.bottom, margin.top])
                   .nice();
  const yAxisGenerator = d3.axisLeft(yScale).tickFormat((d) => d + "萬");
  // 上行也可以寫成"const yAxisGenerator = d3.axisLeft(yScale).tickFormat((d) => `${d}萬`);"
  const yAxis = svg.append("g")
                   .attr("transform", `translate(${margin.left}, 0)`)
                   .call(yAxisGenerator);

  // 設定path的d
  const lineChart = d3.line()
                      .x((d) => xScale(d["date"]))
                      .y((d) => yScale(+d["price"]));
    
  // 建立折線圖
  svg.append("path")
     .datum(data)  // ".datum()"是直接綁定「一整份資料」到單一DOM元素（path就是一條線）；".data()"則是做data join，會嘗試為每個資料元素綁定一個DOM元素
     .attr("d", lineChart(data))
     .attr("fill", "none")
     .attr("stroke", "#f68b47")
     .attr("stroke-width", 1.5);
});
</script>

<style scoped></style>
