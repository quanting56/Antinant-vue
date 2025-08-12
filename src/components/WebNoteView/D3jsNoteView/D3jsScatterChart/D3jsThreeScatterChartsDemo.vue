<template>
  <div ref="svgContainer1"></div>
  <div ref="svgContainer2"></div>
  <div ref="svgContainer3"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 使用Vite的"?url"，讓Vite回傳檔案URL字串，使後面d3.csv()可以使用來載入
import csvUrl from "../../../../assets/web-note-view/d3js-note-view/vote-share/第11屆全國不分區及僑居國外國民立法委員選舉各政黨在北北基桃各投開票所得票數一覽表.csv?url";

const svgContainer1 = ref(null);
const svgContainer2 = ref(null);
const svgContainer3 = ref(null);

// 圖表尺寸與內邊距設定
const width = 600;
const height = 400;
const margin = {top: 20, right: 20, bottom: 50, left: 63};
const dotRadius = 3;

async function voteShareScatter(container, voteShareKey, colorKey) {
  const svg = d3.select(container)
                .append("svg")
                .attr("width", width)
                .attr("height", height);
  const dotRadius = 3;
  const rawData = await d3.csv(csvUrl);

  // 整理數據
  const voteShare = rawData.map((i) => d3.format(".4f")(i[voteShareKey]));  // 'd3.format(".4f")'這樣寫才會對array裡面每個元素做處理
  const population = rawData.filter((d, index) => index !== 61)  // 過濾掉第62橫列的數據
                            .map((i) => +i["人口數"]);

  // X軸
  const xScale = d3.scaleLinear()
                   .domain([0, d3.max(population) * 1.15])  // 乘1.15是怕tooltip超出svg範圍
                   .range([margin.left, width - margin.right])
                   .nice();
  const xScaleGenerator = d3.axisBottom(xScale);
  svg.append("g")
     .attr("transform", `translate(0, ${height - margin.bottom})`)
     .call(xScaleGenerator);

  // X軸標題
  svg.append("text")
     .attr("fill", "#000000")
     .attr("x", `${width - margin.right * 6}`)
     .attr("y", `${height - margin.bottom / 6}`)
     .text("人口數")
     .style("font-family", "sans-serif")
     .style("font-size", "14px");                                  

  // Y軸
  const yScale = d3.scaleLinear()
                   .domain([0, d3.max(voteShare)])
                   .range([height - margin.bottom, margin.top])
                   .nice();
                   
  const yScaleGenerator = d3.axisLeft(yScale);
  svg.append("g")
     .attr("transform", `translate(${margin.left}, 0)`)
     .call(yScaleGenerator);

  // Y軸標題
  svg.append("text")
     .attr("fill", "#000000")
     .attr("x", `${margin.left / 4}`)
     .attr("y", `${margin.top * 4}`)
     .style("font-family", "sans-serif")
     .style("font-size", "14px")
     .selectAll("tspan")
     .data(voteShareKey.split(""))  // 將文字轉換成一個個字
     .join("tspan")
     .attr("x", `${margin.left / 6}`)  // 確保每行的x座標都相同
     .attr("dy", "1.1em")  // 控制每行的間距
     .text(d => d)

  // 加上點點
  svg.append("g")
     .selectAll("circle")
     .data(rawData)
     .join("circle")
     .attr("cx", (d) => xScale(d["人口數"]))
     .attr("cy", (d) => yScale(d[voteShareKey]))
     .attr("r", dotRadius)
     .attr("fill", colorKey)
     .style("cursor", "pointer")
     .on("mouseover", handleMouseOver)
     .on("mouseout", handleMouseOut);

  let tooltip = d3.select("#basicScatterPractice1")
                  .style("position", "relative")
                  .append("div")
                  .attr("class", "basicScatterPractice1Tooltip")
                  .style("position", "absolute")
  
  function handleMouseOver(e) {
    // 移除現有的 tooltip，確保只有一個 tooltip 存在
    d3.select(".basicScatterPracticeTooltip").remove();

    // 點點變色
    d3.select(this)
      .attr("r", dotRadius * 2)
      .attr("fill", "black");

    let pt = d3.pointer(e, e.target);
    let tooltip = d3.select(container)
                    .style("position", "relative")
                    .append("div")
                    .attr("class", "basicScatterPracticeTooltip")
                    .style("position", "absolute")
                    .html(`<p style="margin: 0;">
                      <strong>${e.target.__data__["縣市"] + e.target.__data__["行政區"]}</strong><br>
                      2024一月人口數：${d3.format(",")(e.target.__data__["人口數"])}<br>
                      ${voteShareKey}：${d3.format(".2f")(e.target.__data__[voteShareKey] * 100)}%
                    </p>`)
                    .style("left", `${((pt[0] + 10) < width) ? (pt[0] + 10) : (pt[0] - margin)}px`)
                    .style("top", `${pt[1]}px`)
                    .style("background-color", "#121212")
                    .style("color", "#f2f2f2")
                    .style("border", "#f2f2f2")
                    .style("border-radius", "8px")
                    .style("padding", "6px")
                    .style("font-family", "sans-serif")
                    .style("font-size", "12px")
                    .style("white-space", "nowrap")
                    .style("opacity", "0.85");
  };
  function handleMouseOut() {
    d3.select(this)
      .attr("r", dotRadius)
      .attr("fill", colorKey)
    d3.select(".basicScatterPracticeTooltip").remove();
  };
};

onMounted(() => {
  voteShareScatter(svgContainer1.value, "該行政區國民黨得票率", "#000095");
  voteShareScatter(svgContainer2.value, "該行政區民進黨得票率", "#1B9431");
  voteShareScatter(svgContainer3.value, "該行政區民眾黨得票率", "#28C8C8");
});
</script>

<style scoped></style>
