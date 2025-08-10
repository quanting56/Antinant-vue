<template>
  <svg
    ref="brushSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const data = [
  {r: 20, x: 200, y: 120},
  {r: 35, x: 350, y: 280},
  {r: 25, x: 120, y: 240},
];

// 圖表尺寸與內邊距設定
const width = d3.max(data, (d) => d.x + 60);
const height = d3.max(data, (d) => d.y + 60);

const brushSvgRef = ref(null);

onMounted(() => {
  const svg = d3.select(brushSvgRef.value);

  // 加上圓點
  const dots = svg.selectAll("circle")
                  .data(data)
                  .join("circle")
                  .attr("cx", (d) => d.x)
                  .attr("cy", (d) => d.y)
                  .attr("r", (d) => d.r)
                  .style("fill", "#69b3a2");

  // 設定brush的功能
  // 使用e.selection取得目前的selection
  // selection會產出一個二維陣列
  // 分別代表'x0', 'x1', 'y0', 'y1'，左上到右下的位置
  // 讓開發者有辦法重新計算目前位置的extent，進而進行其他操作。
  const brushed = (e) => {
    const brushExtent = e.selection;
    dots.style("fill", (d) => 
      isBrushed(brushExtent, d.x, d.y) ? "blue" : "#69b3a2"
    );

    // 判斷圓點是否在brush選到的區域內
    function isBrushed (brush_coors, cx, cy) {  // 'brush_coors', 'cx', 'cy'三者皆僅為函數變數名
      let x0 = brush_coors[0][0],
          x1 = brush_coors[1][0],
          y0 = brush_coors[0][1],
          y1 = brush_coors[1][1];
      return x0 <= cx && cx <= x1 && y0 <= cy && cy <= y1;  // 如果圓點在brush的範圍內，就會傳true：反之，則回傳false
    };
  };

  // 建立brush事件
  const brushEvent = d3.brush()
                       .extent([
                         [0, 0], [600, 600]
                       ])  // extent限制刷子的活動區塊，理想是比SVG畫布稍大
                       .on("start brush", brushed);  // 綁定brush事件

  // 呼叫brush事件
  svg.call(brushEvent);
});
</script>

<style scoped></style>
