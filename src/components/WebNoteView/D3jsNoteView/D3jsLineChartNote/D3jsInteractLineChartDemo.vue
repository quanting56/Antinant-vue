<template>
  <div ref="interactLineChartContainerRef"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

import hivDiseaseTrend from "../../../../assets/web-note-view/d3js-note-view/hiv-disease/後天免疫缺乏症候群趨勢.csv?url";

const interactLineChartContainerRef = ref(null);

// 圖表尺寸與內邊距設定
const width = 600;
const height = 400;
const margin = 50;

onMounted(async () => {
  const svg = d3.select(interactLineChartContainerRef.value)
                .append("svg")
                .attr("width", width)
                .attr("height", height);

  const res = await d3.csv(hivDiseaseTrend);
  const data = res.filter(i => i["診斷年週"] < "202401");
  // map資料集
  const xData = data.map((i) => +i["診斷年週"].substring(4, 6));
  const yData = data.map((i) => +i["確定病例數"]);

  // Time Axis（x軸）
  const xScale = d3.scaleLinear()
                   .domain(d3.extent(xData))
                   .range([margin, width - margin])
                   .nice();
  const xAxisGenerator = d3.axisBottom(xScale)
                           .tickFormat(d => "第" + d + "週");
  const xAxis = svg.append("g")
                   .attr("transform", `translate(0, ${height - margin})`)
                   .call(xAxisGenerator);

  // Number_of_cases Axis（y軸）
  const yScale = d3.scaleLinear()
                   .domain([0, d3.max(yData)])
                   .range([height - margin, margin])
                   .nice();
  const yAxisGenerator = d3.axisLeft(yScale)
                           .ticks(5)
                           .tickSizeOuter(0);
  const yAxis = svg.append("g")
                   .attr("transform", `translate(${margin}, 0)`)
                   .call(yAxisGenerator);

  // 開始建立折線圖，設定折線圖相關資料
  const lineChart = d3.line()
                      .x((d) => xScale(+d["診斷年週"].substring(4, 6)))
                      .y((d) => yScale(+d["確定病例數"]));
  svg.append("path")
     .datum(data)
     .attr("d", lineChart(data))
     .attr("fill", "none")
     .attr("stroke", "#f68b47")
     .attr("stroke-width", 1.5);

  // 建立一個覆蓋SVG的方形
  svg.append("rect")
     .style("fill", "transparent")
     .style("pointer-events", "all")
     .style("cursor", "pointer")
     .attr("width", width - margin)
     .attr("height", height - margin)
     .on("mouseover", mouseover)
     .on("mousemove", mousemove)
     .on("mouseout", mouseout);

  // 建立沿著折線移動的圓點點
  const focusDot = svg.append("g")
                      .append("circle")
                      .style("fill", "black")
                      .attr("stroke", "black")
                      .attr("r", 3)
                      .style("opacity", 0);

  // 建立移動的資料標籤
  const focusText = svg.append("text")
                       .style("opacity", 0)
                       .attr("text-anchor", "start")
                       .attr("alignment-baseline", "middle");

  // 使用d3.bisector()找到根據資料的"診斷年週"對應的資料點
  const bisect = d3.bisector((d) => d["診斷年週"]).left;

  // 設定滑鼠事件
  function mouseover() {
    focusDot.style("opacity", 1);
    focusText.style("opacity", 1);
  };

  function mousemove(e) {
    // 把目前X的位置用xScale去換算
    const x0 = xScale.invert(d3.pointer(e, this)[0]);
    // 由於X軸資料是擷取過的，這裡要整理並補零（整數部分先轉換為字串，並補足兩位數（如 01, 02, ...））
    const fixedX0 = parseInt(x0).toString().padStart(2, "0");
    // 接者把擷取掉的2023補回來，因為data是帶入原本的資料
    let i = bisect(data, "2023" + fixedX0);
    let selectedData = data[i];

    // 圓點
    focusDot.attr("cx", xScale(selectedData["診斷年週"].substring(4, 6)))
            .attr("cy", yScale(selectedData["確定病例數"]));

    focusText.html("確定病例數：" + selectedData["確定病例數"])
             .attr("x", xScale(selectedData["診斷年週"].substring(4, 6)) + 15)
             .attr("y", yScale(selectedData["確定病例數"]));
  };

  function mouseout() {
    focusDot.style("opacity", 0);
    focusText.style("opacity", 0);
  }
});
</script>

<style scoped></style>
