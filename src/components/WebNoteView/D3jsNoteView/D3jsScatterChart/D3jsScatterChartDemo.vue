<template>
  <svg
    ref="basicScatterSvgRef"
    :width="width"
    :height="height"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const basicScatterSvgRef = ref(null);

// 圖表尺寸與內邊距設定
const width = 600;
const height = width * 2/3;
const margin = 50;

const dotRadius = 2;

onMounted(async () => {
  const svg = d3.select(basicScatterSvgRef.value);
  
  // 取資料
  const url = "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/2_TwoNum.csv";
  const data = await d3.csv(url);

  // 建立X軸線
  const xScale = d3.scaleLinear()
                   .domain([0, 4000])
                   .range([ margin, width - margin ]);
  const xAxisGenerator = d3.axisBottom(xScale);

  svg.append("g")
     .attr("transform", `translate(0, ${height - margin})`)
     .call(xAxisGenerator);
    
  // 建立Y軸線
  const yScale = d3.scaleLinear()
                   .domain([0, 550000])
                   .range([height - margin, margin]);
  const yAxisGenerator = d3.axisLeft(yScale)
                           .tickFormat((d) => "$" + d);

  svg.append("g")
     .attr("transform", `translate(${margin}, 0)`)
     .call(yAxisGenerator);

  // 加上點點
  svg.append("g")
     .selectAll("circle")
     .data(data)
     .join("circle")
     .attr("cx", (d) => xScale(d.GrLivArea))
     .attr("cy", (d) => yScale(d.SalePrice))
     .attr("r", dotRadius)
     .style("cursor", "pointer")
     .style("fill", (d) => d.SalePrice > 129000 ? "pink" : "#69b3a2")
     .on("mouseover", handleMouseOver)
     .on("mouseout", handleMouseOut);
  
  // mouseover時點點變色+tooltip
  function handleMouseOver(e) {
    d3.select(this)  // 選定this元素，改變hover時的顏色和形狀
      .style("fill", "orange")
      .attr("r", dotRadius * 2);

    const pt = d3.pointer(e, e.target);
    svg.append("text")
       .attr("class", "hoverTextInfo")
       .attr("x", pt[0] + 10)
       .attr("y", pt[1] - 10)
       .style("fill", "red")
       .text([`GrLivArea: ${e.target.__data__.GrLivArea}, SalePrice: $${d3.format(",")(e.target.__data__.SalePrice)}`]);
  };

  function handleMouseOut(e, d) {
    d3.selectAll(".hoverTextInfo").remove();
    d3.select(this)
      .style("fill", (d) => d.SalePrice > 129000 ? "pink" : "#69b3a2")
      .attr("r", dotRadius);
  };
});
</script>

<style scoped></style>
