<template>
  <div ref="multiBarChartContainerRef"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const multiBarChartContainerRef = ref(null);

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
  const svg = d3.select(multiBarChartContainerRef.value)
                .append("svg")
                .attr("width", width)
                .attr("height", height);

  // 設定要給X軸用的scale和axis（年份xScale）
  const xData = data.map((d) => d["年度"]);
  const xScale = d3.scaleBand()
                   .domain(xData)  // '.scaleBand()'的'.domain()'需要一組data，而不是數對[,]
                   .range([margin.left, width - margin.right])
                   .padding(0.2);
  const xAxisGenerator = d3.axisBottom(xScale);

  // 呼叫繪製X軸、調整X軸位置
  const xAxisGroup = svg.append("g")
                        .attr("transform", `translate(0, ${height - margin.bottom})`)
                        .call(xAxisGenerator);
                                                                      
  // 設定要給Y軸用的scale和axis
  const yScale = d3.scaleLinear()
                   .domain([0, 600])
                   .range([height - margin.bottom, margin.top])
                   .nice();

  const yAxisGenerator = d3.axisLeft(yScale).ticks(5).tickSize(3);

  // 呼叫繪製Y軸、調整Y軸位置
  const yAxisGroup = svg.append("g")
                        .attr("transform", `translate(${margin.left}, 0)`)
                        .call(yAxisGenerator);

  // 設定第2條X軸資料、比例尺（本例為不同年齡層的xScale）
  // 用來設定「多條長條圖」的位置
  const xSubGroups = Object.keys(data[0]).slice(1);  // 取出data中，非年份的key，並返回一個新的陣列
  const xSubGroupsScale = d3.scaleBand()
                            .domain(xSubGroups)
                            .range([0, xScale.bandwidth()])
                            .padding(0.05);

  // 設定不同subgroup bar的顏色
  const color = d3.scaleOrdinal()
                  .domain(xSubGroups)
                  .range(["#d4be92", "#c2cccd", "#b2c2e3", "#ead0d1"]);

  // 開始建立長條圖
  const bar = svg.append("g")
                 .selectAll("g")
                 .data(data)
                 .join("g")
                 .attr("transform", d => `translate(${xScale(d["年度"])}, 0)`)
                 .selectAll("rect")
                 .data((d) => xSubGroups.map(key => {return {key: key, value: d[key]}}))
                 .join("rect")
                 .attr("x", (d) => xSubGroupsScale(d.key))
                 .attr("y", (d) => yScale(d.value))
                 .attr("width", xSubGroupsScale.bandwidth())
                 .attr("height", (d) => ( height - margin.bottom ) - yScale(d.value))
                 .attr("fill", (d) => color(d.key))
                 .style("cursor", "pointer")
                 .on("mouseover", multiBarChartMouseover)
                 .on("mousemove", multiBarChartMousemove)
                 .on("mouseleave", multiBarChartMouseleave);

  function multiBarChartMouseover(e) {
    const pt = d3.pointer(e, svg.node());

    // 加上文字標籤
    svg.append("text")
       .attr("class", "multiBarChartExampleInfoText")
       .attr("x", margin.left)
       .attr("y", yScale(e.target.__data__["value"]))
       .attr("fill", "#121212")
       .style("font-size", "18px")
       .style("font-weight", "bold")
       .style("text-anchor", "middle")
       .text(e.target.__data__["value"] + "千人");

    // 加上標示用輔助虛線
    svg.append("line")
       .attr("class", "multiBarChartExampleDashedY")
       .attr("x1", margin.left)
       .attr("y1", yScale(e.target.__data__["value"]))
       .attr("x2", pt[0])
       .attr("y2", yScale(e.target.__data__["value"]))
       .style("stroke", "black")
       .style("stroke-dasharray", 3);
  };

  function multiBarChartMousemove(e) {
    const pt = d3.pointer(e, svg.node());
    svg.selectAll(".multiBarChartExampleDashedY")
                               .attr("x2", pt[0]);
  };

  function multiBarChartMouseleave() {
    svg.select(".multiBarChartExampleInfoText").remove();
    svg.select(".multiBarChartExampleDashedY").remove();
  }

  // 加上辨識標籤
  const tagsWrap = svg.append("g")
                      .selectAll("g")
                      .data(xSubGroups)
                      .join("g")
                      .attr("class", "multiBarChartExampleTags");

  tagsWrap.append("rect")
          .attr("x", (d, i) => (i + 1) * margin.bottom * 1.3)
          .attr("y", height - margin.bottom / 2)
          .attr("width", 20)
          .attr("height", 20)
          .attr("fill", (d) => color(d));

  tagsWrap.append("text")
          .attr("x", (d, i) => (i + 1) * margin.bottom * 1.3)
          .attr("y", height - margin.bottom / 2 + 40)
          .style("fill", "#121212")
          .style("font-size", "12px")
          .style("font-weight", "bold")
          .style("text-anchor", "middle")
          .text(d => d);
});
</script>

<style scoped></style>
