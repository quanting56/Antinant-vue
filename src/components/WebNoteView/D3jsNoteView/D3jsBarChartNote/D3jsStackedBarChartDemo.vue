<template>
  <div ref="stackedBarChartContainerRef"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const stackedBarChartContainerRef = ref(null);

// 圖表尺寸與內邊距設定
const width = 600;
const height = 400;
const margin = {top: 20, right: 20, bottom: 100, left: 40};

const data = [
  {"年度": 2017, "15~24歲(千人)": 80, "25~44歲(千人)": 506, "45~64歲(千人)": 381, "65歲及以上(千人)": 35},
  {"年度": 2018, "15~24歲(千人)": 80, "25~44歲(千人)": 508, "45~64歲(千人)": 392, "65歲及以上(千人)": 38},
  {"年度": 2019, "15~24歲(千人)": 82, "25~44歲(千人)": 511, "45~64歲(千人)": 398, "65歲及以上(千人)": 39},
  {"年度": 2020, "15~24歲(千人)": 79, "25~44歲(千人)": 504, "45~64歲(千人)": 387, "65歲及以上(千人)": 42}
];

onMounted(() => {
  const svg = d3.select(stackedBarChartContainerRef.value)
                .append("svg")
                .attr("width", width)
                .attr("height", height);

  // 設定要給X軸用的scale和axis
  const xData = data.map((d) => d["年度"])
  const xScale = d3.scaleBand()
                   .domain(xData)
                   .range([margin.left, width - margin.right])
                   .padding(0.2);
  const xAxisGenerator = d3.axisBottom(xScale);

  // 呼叫繪製X軸、調整X軸位置
  const xAxisGroup = svg.append("g")
                        .attr("transform", `translate(0, ${height - margin.bottom})`)
                        .call(xAxisGenerator);

  // 設定要給Y軸用的scale和axis
  const yScale = d3.scaleLinear()
                   .domain([0, 1200])
                   .range([height - margin.bottom, margin.top])
                   .nice();
  const yAxisGenerator = d3.axisLeft(yScale).ticks(5).tickSize(3);

  // 呼叫繪製Y軸、調整Y軸位置
  const yAxisGroup = svg.append("g")
                        .attr("transform", `translate(${margin.left}, 0)`)
                        .call(yAxisGenerator);

  // 設定分組，用d3.stack()把資料堆疊起來
  const xSubGroups = Object.keys(data[0]).slice(1);
  const stackedData = d3.stack().keys(xSubGroups)(data);

  // 設定不同subgroup bar的顏色
  const color = d3.scaleOrdinal()
                  .domain(xSubGroups)
                  .range(["#97a9bf", "#d6dbbb", "#d4e6e8", "#dcd2d0"]);

  // 開始建立長條圖
  const bar = svg.append("g")
                 .selectAll("g")
                 .data(stackedData)
                 .join("g")
                 .attr("fill", (d) => color(d.key))  // 顏色放在<g>的屬性中，所以這行要放在這裡
                 .selectAll("rect")
                 .data(d => d)
                 .join("rect")
                 .attr("x", (d) => xScale(d.data["年度"]))  // 此處的'd.data'是'd3.stack()'生成之新陣列中，對應原始資料的部分，非我們自己設的'data'變數
                 .attr("y", (d) => yScale(d[1]))
                 .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
                 .attr("width", xScale.bandwidth())
                 .style("cursor", "pointer")  // 未完成
                 .on("mouseover", handleMouseover)
                 .on("mousemove", handleMousemove)
                 .on("mouseleave", handleMouseleave);

  function handleMouseover(e) {
    const pt = d3.pointer(e, svg.node());
    d3.select(this).style("opacity", 0.5);

    // 加上文字標籤
    svg.append("text")
       .attr("class", "stackedBarChartInfoText")
       .attr("fill", "#121212")
       .style("font-size", "18px")
       .style("font-weight", "bold")
       .style("text-anchor", "start")
       .attr("x", pt[0])
       .attr("y", pt[1] - 20)
       .text((e.target.__data__[1] - e.target.__data__[0]) + " 千人");
  };

  function handleMousemove(e) {
    const pt = d3.pointer(e, svg.node());
    svg.select(".stackedBarChartInfoText")
       .attr("x", pt[0] + 10)
       .attr("y", pt[1] - 15);
  };

  function handleMouseleave() {
    d3.select(this).style("opacity", "1");
    svg.select(".stackedBarChartInfoText").remove();
  };

  // 加上辨識標籤
  const tagsWrap = svg.append("g")
                      .selectAll("g")
                      .data(xSubGroups)
                      .join("g")
                      .attr("class", "stackedBarChartTags");

  tagsWrap.append("rect")
          .attr("x", (d, i) => ( i + 1 ) * margin.bottom * 1.3)
          .attr("y", height - margin.bottom / 2)
          .attr("width", 20)
          .attr("height", 20)
          .attr("fill", (d) => color(d));

  tagsWrap.append("text")
          .attr("x", (d, i) => ( i + 1 ) * margin.bottom * 1.3)
          .attr("y", height - margin.bottom / 2 + 40)
          .style("fill", "#121212")
          .style("font-size", "12px")
          .style("font-weight", "bold")
          .style("text-anchor", "middle")
          .text(d => d);
});
</script>

<style scoped></style>
