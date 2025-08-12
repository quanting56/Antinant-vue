<template>
  <svg
    ref="addPointScatterSvgRef"
    :width="width"
    :height="height"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const addPointScatterSvgRef = ref(null);

// 圖表尺寸與內邊距設定
const width = 600;
const height = 400;
const margin = 50;

const dotRadius = 2;

const data = [
  { x: 100, y: 110 }, { x: 83, y: 43 }, { x: 92, y: 28 },
  { x: 49, y: 74 }, { x: 51, y: 10 }, { x: 25, y: 98 },
  { x: 77, y: 30}, { x: 20, y: 83 }, { x: 11, y: 63 },
  { x: 4, y: 55 }, { x: 0, y: 0 }, { x: 85, y: 100 },
  { x: 60, y: 40 }, { x: 70, y: 80 }, { x: 10,  y: 20 },
  { x: 40, y: 50 }, { x: 25, y: 31 }
];

onMounted(() => {
  const svg = d3.select(addPointScatterSvgRef.value);

  // 建立X軸線
  const xScale = d3.scaleLinear()
                   .domain([0, d3.max(data, d => d.x)])
                   .range([margin, width - margin])
                   .nice();
  const xAxisGenerator = d3.axisBottom(xScale);
  svg.append("g")
     .attr("transform", `translate(0, ${height - margin})`)
     .call(xAxisGenerator);

  // 建立Y軸線
  const yScale = d3.scaleLinear()
                   .domain([0, (d3.max(data, d => d.y))])
                   .range([height - margin, margin])
                   .nice();
  const yAxisGenerator = d3.axisLeft(yScale);
  svg.append("g")
     .attr("transform", `translate(${margin}, 0)`)
     .call(yAxisGenerator);

  // 加上點點
  svg.append("g")
     .selectAll("circle")
     .data(data)
     .join("circle")
     .attr("cx", (d) => xScale(d.x))
     .attr("cy", (d) => yScale(d.y))
     .attr("r", dotRadius)
     .attr("fill", "#121212")
     .on("mouseover", handleMouseOver)
     .on("mouseout", handleMouseOut);

  // mouseover時點點變色+tooltip
  function handleMouseOver(e) {
    d3.select(this)  // 選定this元素，改變hover時的顏色和形狀
      .style("fill", "orange")
      .attr("r", dotRadius * 2)
      .style("cursor", "pointer");

    let pt = d3.pointer(e, e.target);
    svg.append("text")
       .attr("class", "addPointScatterHoverTextInfo")
       .attr("x", pt[0] + 10)
       .attr("y", pt[1] - 10)
       .style("fill", "red")
       .text(`x:${e.target.__data__.x}, y:${e.target.__data__.y}`);
  };

  function handleMouseOut() {
    d3.selectAll(".addPointScatterHoverTextInfo").remove();
    d3.select(this)
      .style("fill", "#121212")
      .attr("r", dotRadius);
  };

  // 滑鼠click的時候增加一個點
  svg.on("click", (e) => {
    const coords = d3.pointer(e, e.target);
    const newData = {
      x: Math.round(xScale.invert(coords[0])),
      y: Math.round(yScale.invert(coords[1]))
    };  // 透過scale.invert()把XY像素位置轉換回座標資料值

    // 將增加的資料座標推入原本的data
    data.push(newData);

    // 將新的資料綁定上circle
    svg.selectAll("circle")
       .data(data)
       .join("circle")
       .attr("cx", (d) => xScale(d.x))
       .attr("cy", (d) => yScale(d.y))
       .attr("r", dotRadius)
       .attr("fill", "#121212")
       .on("mouseover", handleMouseOver)
       .on("mouseout", handleMouseOut);
  });
});
</script>

<style scoped></style>
