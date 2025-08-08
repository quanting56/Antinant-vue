<template>
  <div ref="container" class="chart-container">
    <svg
      ref="svgRef"
      :width="width"
      :height="height"
    ></svg>
  </div>
</template>

<script setup>
// 以下的code還沒修好，待處理
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const width = 600;
const height = 400;

const svgRef = ref(null);

onMounted(() => {
  const svg = d3.select(svgRef.value);

  // 共通設定
  const r = 60;
  const theta = Math.PI / 3; // 60°
  const arrowColor = "#e91e63";

  // 左側（數學座標系）
  const leftOrigin = { x: 150, y: 150 };
  const leftX = leftOrigin.x + r * Math.cos(theta);  // 箭頭頂點x座標
  const leftY = leftOrigin.y - r * Math.sin(theta);  // 箭頭頂點y座標

  // 座標軸
  drawAxes(svg, leftOrigin, false);
  drawArrow(svg, leftOrigin, { x: leftX, y: leftY }, arrowColor);
  drawAngleArc(svg, leftOrigin, (Math.PI/6 - theta), false);
  drawMathLabels(svg, leftOrigin, theta, "數學", "x = r · cosθ", "y = r · sinθ");

  // 右側（SVG座標系）
  const rightOrigin = { x: 400, y: 150 };
  const rightX = rightOrigin.x + r * Math.cos(theta);
  const rightY = rightOrigin.y + r * Math.sin(theta);

  drawAxes(svg, rightOrigin, true);
  drawArrow(svg, rightOrigin, { x: rightX, y: rightY }, arrowColor);
  drawAngleArc(svg, rightOrigin, theta, true);
  drawMathLabels(svg, rightOrigin, theta, "SVG", "x = r · sinθ", "y = -r · cosθ");
});

// 畫箭頭
function drawArrow(svg, from, to, color) {
  svg.append("line")
    .attr("x1", from.x)
    .attr("y1", from.y)
    .attr("x2", to.x)
    .attr("y2", to.y)
    .attr("stroke", color)
    .attr("stroke-width", 3)
    .attr("marker-end", "url(#arrow)");

  // 加箭頭定義
  svg.append("defs").append("marker")
    .attr("id", "arrow")
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 10)
    .attr("refY", 0)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")
    .attr("fill", color);
}

// 畫座標軸
function drawAxes(svg, origin, isSvg) {
  const length = 70;
  const yDir = isSvg ? 1 : -1;

  // x軸
  svg.append("line")
    .attr("x1", origin.x - length)
    .attr("y1", origin.y)
    .attr("x2", origin.x + length)
    .attr("y2", origin.y)
    .attr("stroke", "#000000")
    .attr("stroke-width", 2);

  // y軸
  svg.append("line")
    .attr("x1", origin.x)
    .attr("y1", origin.y - length)
    .attr("x2", origin.x)
    .attr("y2", origin.y + length)
    .attr("stroke", "#000000")
    .attr("stroke-width", 2);

  // 原點標記
  svg.append("circle")
    .attr("cx", origin.x)
    .attr("cy", origin.y)
    .attr("r", 2.5)
    .attr("fill", "#000000");

  // 軸文字
  svg.append("text")
    .attr("x", origin.x + length + 5)
    .attr("y", origin.y + 5)
    .attr("font-size", 16)
    .text("x");

  svg.append("text")
    .attr("x", origin.x - 12)
    .attr("y", origin.y + yDir * length)
    .attr("font-size", 16)
    .text("y");

  svg.append("text")
    .attr("x", origin.x - 15)
    .attr("y", origin.y + 15)
    .attr("font-size", 16)
    .text("0°");
}

// 畫角度弧線
function drawAngleArc(svg, origin, angle, isSvg) {
  const arcGen = d3.arc()
    .innerRadius(20)
    .outerRadius(22)
    .startAngle( Math.PI / 2)
    .endAngle(isSvg ? angle : -angle);

  svg.append("path")
    .attr("d", arcGen())
    .attr("transform", `translate(${origin.x},${origin.y})`)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1.5)
    .attr("fill-opacity", 0.2);

  svg.append("text")
    .attr("x", origin.x + 30)
    .attr("y", isSvg ? origin.y + 5 : origin.y - 5)
    .attr("font-size", 14)
    .text("θ");
}

// 畫標籤文字
function drawMathLabels(svg, origin, angle, title, xText, yText) {
  // 上方標題
  svg.append("text")
    .attr("x", origin.x - 20)
    .attr("y", origin.y - 100)
    .attr("font-size", 24)
    .attr("font-weight", "bold")
    .text(title);

  // r 標記
  const rX = origin.x + 0.5 * 60 * Math.cos(angle)
  const rY = origin.y + (title === "SVG" ? 1 : -1) * 0.5 * 60 * Math.sin(angle)
  svg.append("text")
    .attr("x", rX + 5)
    .attr("y", rY)
    .attr("font-size", 16)
    .text("r");

  // 下方公式
  svg.append("text")
    .attr("x", origin.x - 40)
    .attr("y", origin.y + 100)
    .attr("font-size", 16)
    .text(xText);

  svg.append("text")
    .attr("x", origin.x - 40)
    .attr("y", origin.y + 125)
    .attr("font-size", 16)
    .text(yText);
};
</script>

<style scoped></style>
