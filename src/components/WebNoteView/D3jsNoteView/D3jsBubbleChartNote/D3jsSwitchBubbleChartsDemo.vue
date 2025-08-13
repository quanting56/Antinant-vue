<template>
  <div ref="svgContainerRef"></div>
  <div class="btn-container" :style="{ 'width': width + 'px'}">
    <button type="button" @click="bubbleChartPractice('該行政區國民黨得票率', '#000095')" class="kmt-btn">國民黨</button>
    <button type="button" @click="bubbleChartPractice('該行政區民進黨得票率', '#1b9431')" class="dpp-btn">民進黨</button>
    <button type="button" @click="bubbleChartPractice('該行政區民眾黨得票率', '#28c8c8')" class="tpp-btn">民眾黨</button>
    <button type="button" @click="bubbleChartPracticeAll" class="all-btn">一起看</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

import csvData from "../../../../assets/web-note-view/d3js-note-view/vote-share/第11屆全國不分區及僑居國外國民立法委員選舉各政黨在北北基桃各投開票所得票數一覽表.csv?url";

const svgContainerRef = ref(null);

// 圖表尺寸與內邊距設定
const width = 600;
const height = 400;
const margin = {top: 20, right: 20, bottom: 50, left: 63};

let svg, xScale, yScale;

onMounted(() => {
  svg = d3.select(svgContainerRef.value)
          .append("svg")
          .attr("width", width)
          .attr("height", height);

  // X軸
  xScale = d3.scaleLinear()
             .domain([0, 600000])
             .range([margin.left, width - margin.right])
             .nice();
  const xAxisGenerator = d3.axisBottom(xScale);
  svg.append("g")
     .attr("transform", `translate(0, ${height - margin.bottom})`)
     .call(xAxisGenerator);

  // Y軸
  yScale = d3.scaleLinear()
             .domain([0, 0.5])
             .range([height - margin.bottom, margin.top])
             .nice();
  const yAxisGenerator = d3.axisLeft(yScale);
  svg.append("g")
     .attr("transform", `translate(${margin.left}, 0)`)
     .call(yAxisGenerator);

  // X軸標題（由於X軸標題與政黨無關，不需重繪，所以放在'bubbleChartPractice()'外）
  svg.append("text")
     .attr("class", "bubbleChartXTitle")
     .attr("fill", "#000000")
     .attr("x", `${width - margin.right * 6}`)
     .attr("y", `${height - margin.bottom / 6}`)
     .text("人口數")
     .style("font-family", "sans-serif")
     .style("font-size", "14px");

  // 預設顯示國民黨
  bubbleChartPractice("該行政區國民黨得票率", "#000095");
});

// 畫單一政黨圖
const bubbleChartPractice = async (voteShareKey, colorKey) => {
  // 先移除舊的圖形內容
  svg.selectAll(".bubbleChartYTitle").transition().duration(300).style("opacity", "0").remove();
  svg.selectAll("circle").transition().duration(1000).attr("r", 0).remove();

  // 整理數據
  const res = await d3.csv(csvData);
  const data = res.filter((_, index) => index !== 61)  // 過濾掉第62橫列的數據;
  const xData = res.map((d) => +d["人口數"]);
  const yData = res.map((d) => d3.format(".4f")(+d[voteShareKey]));
  const zData = res.map((d) => ( +d["一一一年底老年人口數"] / +d["人口數"] ));

  // z比例尺
  const zScale = d3.scaleLinear()
                   .domain(d3.extent(zData))
                   .range([1, 25]);

  // Y軸標題
  svg.append("text")
     .attr("class", "bubbleChartYTitle")
     .attr("fill", "#000000")
     .attr("x", `${margin.left / 4}`)
     .attr("y", `${margin.top * 4}`)
     .style("font-family", "sans-serif")
     .style("font-size", "14px")
     .selectAll("tspan")
     .data(("該行政區" + voteShareKey.substring(4, 7) + "得票率").split(""))  // 將文字轉換成一個個字
     .join("tspan")
     .attr("x", `${margin.left / 6}`)  // 確保每行的x座標都相同
     .attr("dy", "1.1em")  // 控制每行的間距
     .text(d => d)
     .style("opacity", 0)
     .transition()
     .duration(200)
     .style("opacity", 1);

  // 加上點點
  const dots = svg.append("g")
                  .selectAll("circle")
                  .data(data)
                  .join("circle")
                  .attr("cx", (d) => xScale(d["人口數"]))
                  .attr("cy", (d) => yScale(d[voteShareKey]))
                  .attr("fill", colorKey)
                  .style("cursor", "pointer")
                  .style("opacity", 0.8)
                  .on("mouseover", handleMouseOver)
                  .on("mouseout", handleMouseOut)
                  .transition()
                  .duration(1000)
                  .attr("r", (d) => parseFloat(zScale( +d["一一一年底老年人口數"] / +d["人口數"] )));

  const tooltip = d3.select(svgContainerRef.value)
                    .style("position", "relative")
                    .append("div")
                    .style("position", "absolute")
                    .style("display", "none")
                    .style("background-color", "#121212")
                    .style("color", "#f2f2f2")
                    .style("border", "#f2f2f2")
                    .style("border-radius", "8px")
                    .style("padding", "6px")
                    .style("font-family", "sans-serif")
                    .style("font-size", "12px")
                    .style("white-space", "nowrap")
                    .style("opacity", "0.85");

  function handleMouseOver(e) {
    // 點點變色
    d3.select(this)
      .attr("r", (d) => parseFloat(zScale( +d["一一一年底老年人口數"] / +d["人口數"] )) + 8)
      .attr("fill", "black")
      .style("opacity", 0.8);
  
    let pt = d3.pointer(e, e.target);
    tooltip.style("display", "block")
           .html(`<p style="margin: 0;">
             <strong>${e.target.__data__["縣市"] + e.target.__data__["行政區"]}</strong><br>
             2024一月人口數：${d3.format(",")(e.target.__data__["人口數"])} 人<br>
             老年人口比例：${d3.format(".4f")(+e.target.__data__["一一一年底老年人口數"] / +e.target.__data__["人口數"] * 100)}%<br>
             ${voteShareKey}：${d3.format(".2f")(e.target.__data__[voteShareKey] * 100)}%
           </p>`)
           .style("left", `${((pt[0] + 10) < width) ? (pt[0] + 10) : (pt[0] - margin.right * 40)}px`)
           .style("top", `${pt[1]}px`);
  };

  function handleMouseOut() {
    d3.select(this)
      .attr("r", (d) => parseFloat(zScale( +d["一一一年底老年人口數"] / +d["人口數"] )))
      .attr("fill", colorKey)
    tooltip.style("display", "none");
  };
};

const bubbleChartPracticeAll = async () => {
  // 移除舊的圖形內容
  svg.selectAll(".bubbleChartYTitle").transition().duration(300).style("opacity", "0").remove();
  svg.selectAll("circle").transition().duration(1000).attr("r", 0).remove();

  // 讀取並整理數據
  const res = await d3.csv(csvData);
  const data = res.filter((d, index) => index !== 61);  // 過濾掉第62橫列的數據;
  const zData = res.map((d) => ( +d["一一一年底老年人口數"] / +d["人口數"] ));
  const zScale = d3.scaleLinear()
                   .domain(d3.extent(zData))
                   .range([1, 25]);

  // 定義顏色
  const colors = {
    "該行政區國民黨得票率": "#000095",
    "該行政區民進黨得票率": "#1B9431",
    "該行政區民眾黨得票率": "#28C8C8"
  };

  // Y軸標題
  svg.append("text")
     .attr("class", "bubbleChartYTitle")
     .attr("fill", "#000000")
     .attr("x", `${margin.left / 4}`)
     .attr("y", `${margin.top * 4}`)
     .style("font-family", "sans-serif")
     .style("font-size", "14px")
     .selectAll("tspan")
     .data(("該行政區三大黨得票率").split(""))  // 將文字轉換成一個個字
     .join("tspan")
     .attr("x", `${margin.left / 6}`)  // 確保每行的x座標都相同
     .attr("dy", "1.1em")  // 控制每行的間距
     .text(d => d)
     .style("opacity", 0)
     .transition()
     .duration(200)
     .style("opacity", 1);

  // 加上點點
  Object.keys(colors).forEach((voteShareKey) => {
    svg.append("g")
       .selectAll("circle")
       .data(data)
       .join("circle")
       .attr("cx", (d) => xScale(d["人口數"]))
       .attr("cy", (d) => yScale(d[voteShareKey]))
       .attr("fill", colors[voteShareKey])
       .attr("data-vote-key", voteShareKey)  // 存儲與該圓圈相關的投票率鍵
       .style("cursor", "pointer")
       .style("opacity", 0.8)
       .on("mouseover", handleMouseOver)
       .on("mouseout", handleMouseOut)
       .transition()
       .duration(1000)
       .attr("r", (d) => parseFloat(zScale( +d["一一一年底老年人口數"] / +d["人口數"] )));
  });

  const tooltip = d3.select(svgContainerRef.value)
                    .style("position", "relative")
                    .append("div")
                    .style("position", "absolute")
                    .style("display", "none")
                    .style("background-color", "#121212")
                    .style("color", "#f2f2f2")
                    .style("border", "#f2f2f2")
                    .style("border-radius", "8px")
                    .style("padding", "6px")
                    .style("font-family", "sans-serif")
                    .style("font-size", "12px")
                    .style("white-space", "nowrap")
                    .style("opacity", "0.85");

  function handleMouseOver(e) {
    const voteShareKey = d3.select(this).attr("data-vote-key");  // 從data-*屬性中取出voteShareKey
  
    d3.select(this)
      .attr("r", (d) => parseFloat(zScale(+d["一一一年底老年人口數"] / +d["人口數"])) + 8)
      .attr("fill", "black")
      .style("opacity", 0.8);

    let pt = d3.pointer(e, e.target);
    tooltip.style("display", "block")
           .html(`<p style="margin: 0;">
              <strong>${e.target.__data__["縣市"] + e.target.__data__["行政區"]}</strong><br>
              2024一月人口數：${d3.format(",")(e.target.__data__["人口數"])}<br>
              老年人口比例：${d3.format(".4f")(+e.target.__data__["一一一年底老年人口數"] / +e.target.__data__["人口數"] * 100)}%<br>
              ${voteShareKey}：${d3.format(".2f")(e.target.__data__[voteShareKey] * 100)}%
            </p>`)
           .style("left", `${((pt[0] + 10) < width) ? (pt[0] + 10) : (pt[0] - margin.right * 40)}px`)
           .style("top", `${pt[1]}px`);
  };

  function handleMouseOut() {
    const voteShareKey = d3.select(this).attr("data-vote-key");  // 從data-*屬性中取出voteShareKey
  
    d3.select(this)
      .attr("r", (d) => parseFloat(zScale( +d["一一一年底老年人口數"] / +d["人口數"] )))
      .attr("fill", colors[voteShareKey]);
    tooltip.style("display", "none");
  };
};
</script>

<style scoped>
.btn-container {
  display: flex;
  gap: 5px;
  justify-content: center;
}

.kmt-btn {
  padding: 6px 12px 6px 12px;
  font-size: 16px;
  font-weight: 400;
  font-family: inherit;
  line-height: 1.5;
  color: #000095;
  background-color: #ffffff;
  border: 1px solid #000095;
  border-radius: 6px;
  cursor: pointer;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}

.kmt-btn:hover {
  color: #ffffff;
  background-color: #000095;
  border-color: #000095;
}

.dpp-btn {
  padding: 6px 12px 6px 12px;
  font-size: 16px;
  font-weight: 400;
  font-family: inherit;
  line-height: 1.5;
  color: #1b9431;
  background-color: #ffffff;
  border: 1px solid #1b9431;
  border-radius: 6px;
  cursor: pointer;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}

.dpp-btn:hover {
  color: #ffffff;
  background-color: #1b9431;
  border-color: #1b9431;
}

.tpp-btn {
  padding: 6px 12px 6px 12px;
  font-size: 16px;
  font-weight: 400;
  font-family: inherit;
  line-height: 1.5;
  color: #28c8c8;
  background-color: #ffffff;
  border: 1px solid #28c8c8;
  border-radius: 6px;
  cursor: pointer;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}

.tpp-btn:hover {
  color: #ffffff;
  background-color: #28c8c8;
  border-color: #28c8c8;
}

.all-btn {
  padding: 6px 12px 6px 12px;
  font-size: 16px;
  font-weight: 400;
  font-family: inherit;
  line-height: 1.5;
  color: #dc3535;
  background-color: #ffffff;
  border: 1px solid #dc3535;
  border-radius: 6px;
  cursor: pointer;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}

.all-btn:hover {
  color: #ffffff;
  background-color: #dc3535;
  border-color: #dc3535;
}
</style>
