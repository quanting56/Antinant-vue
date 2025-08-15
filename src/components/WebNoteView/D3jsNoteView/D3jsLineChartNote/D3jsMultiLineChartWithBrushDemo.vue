<template>
  <div ref="multiLineChartWithBrushRef"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const multiLineChartWithBrushRef = ref(null);

// 圖表尺寸與內邊距設定
const width = 600;
const height = 400;
const margin = 50;

onMounted(async () => {
  const svg = d3.select(multiLineChartWithBrushRef.value)
                .append("svg")
                .attr("width", width)
                .attr("height", height);

  // 取資料集
  const data = await d3.json("https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=5n9c3AlEJ2DH&IsTransData=1");
  const xData = data.map((d) => d3.timeParse("%Y%m")(d.observeDate));
  const yData = data.map((d) => {
    let rainfall = parseFloat(d.rainfall);
    return rainfall = rainfall || 0;  // 如果rainfall的值是NaN、null、undefined、0或""（空字串），那麼rainfall會被設定為0，否則保持原來的值
  });

  // X軸
  const xScale = d3.scaleTime()
                   .domain(d3.extent(xData))
                   .range([margin, width - margin])
                   .nice();
  const xAxisGenerator = d3.axisBottom(xScale).tickFormat(d => d3.timeFormat("%Y/%m")(d)).ticks(6);
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

  // 用有隨機字串的id，避免變數全域污染
  const clipId = `multiLineChartWithBrushClip-${Math.random().toString(36).slice(2)}`;
  // 建立一個畫布範圍，超過此畫布的畫面都不會被渲染，這樣才能控制縮放的大小
  const clip = svg.append("defs")
                  .append("clipPath")
                  .attr("id", clipId)
                  .append("rect")
                  .attr("x", margin)
                  .attr("y", margin)
                  .attr("width", width - margin * 2)
                  .attr("height", height - margin * 2);

  // 設定brush
  const brush = d3.brushX()
                  .extent([[margin, margin], [width - margin, height - margin]])
                  .on("end", updateChart);

  // 開始建立折線圖
  const line = svg.append("g");

  // 畫上折線
  line.selectAll("path")
      .data(sumName)
      .join("path")
      .attr("class", "multiLineChartWithBrushLine")
      .attr("d", d => {
        return d3.line()
                 .x((d) => xScale(d3.timeParse("%Y%m")(d.observeDate)))
                 .y((d) => {
                  let rainfall = parseFloat(d.rainfall);
                  rainfall = rainfall || 0;
                  return yScale(rainfall);
                 })(d[1])  // 因為是從sumName裡面取資料，除了觀測站（observatory）以外的資料都在d[1]裡
      })
      .attr("fill", "none")
      .attr("stroke", d => color(d))
      .attr("stroke-width", 1.5)
      .style("cursor", "pointer");

  // 加上brush
  line.attr("clip-path", `url(#${clipId})`)
      .append("g")
      .attr("class", "multiLineChartWithBrushBrush")
      .call(brush);

  // 設定brush後的動作
  function updateChart(e, d) {
    // xBrush的範圍，會回傳一個[x0, x1]的陣列
    const brushExtent = e.selection;
    if (brushExtent) {
      // xScale.invert是把回傳的x0和x1變成xScale接受的數值
      xScale.domain([xScale.invert(brushExtent[0]), xScale.invert(brushExtent[1])]);
      // 移除brush的灰色區域
      // 'brush.move'是用來改變或移動brush的選取範圍，將第二個參數設定為'null'，可以清除目前的選取區域
      line.select(".multiLineChartWithBrushBrush").call(brush.move, null);
    };

    // 按照更新的domain範圍值重新選染圖表
    xAxis.transition().duration(1000).call(xAxisGenerator);
    line.selectAll(".multiLineChartWithBrushLine")
        .transition()
        .duration(1000)
        .attr("d", d => {
          return d3.line()
                   .x((d) => xScale(d3.timeParse("%Y%m")(d.observeDate)))
                   .y((d) => {
                     let rainfall = parseFloat(d.rainfall);
                     rainfall = rainfall || 0;
                     return yScale(rainfall);
                   })(d[1]);
        });
  };

  // 雙極svg縮回原本大小
  svg.on("dblclick", reset);

  function reset() {
    // 回到原本的大小
    xScale.domain(d3.extent(xData));

    // 重新呼叫渲染軸線和折線
    xAxis.transition().duration(1000).call(xAxisGenerator);
    line.selectAll(".multiLineChartWithBrushLine")
        .transition()
        .duration(1000)
        .attr("d", d => {
          return d3.line()
                   .x((d) => xScale(d3.timeParse("%Y%m")(d.observeDate)))
                   .y((d) => {
                     let rainfall = parseFloat(d.rainfall);
                     rainfall = rainfall || 0;
                     return yScale(rainfall);
                   })(d[1])
        });
  };
});
</script>

<style scoped></style>
