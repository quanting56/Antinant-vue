<template>
  <div class="tooltip-container">
    <svg
      class="tooltip-svg"
      ref="insertHtmlSvgRef"
      :width="width"
      :height="height"
    ></svg>

    <div
      class="tooltip-html"
      v-show="tooltip.visible"
      :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }"
      v-html="tooltip.html"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 200;
const height = 200;

const insertHtmlSvgRef = ref(null);
const tooltip = reactive({
  visible: false,
  x: 0,
  y: 0,
  html: ""
});

let isClick = false;

onMounted(() => {
  const svg = d3.select(insertHtmlSvgRef.value)
                .append("g")
                .style("cursor", "pointer");

  const circle = svg.append("circle")
                    .attr("cx", 100)
                    .attr("cy", 100)
                    .attr("r", 60)
                    .attr("fill", "#69b3a2");

  // btnIcon的文字
  svg.append("text")
     .text("按鈕")
     .attr("fill", "#eeeeee")
     .attr("x", 100)
     .attr("y", 110)
     .attr("text-anchor", "middle")
     .attr("font-size", 30)
     .attr("font-family", "sans-serif");

  svg
    .on("click", () => {
      if (!isClick) {
        d3.html("https://quanting56.github.io/Antinant/study/statistics_note.html").then((doc) => {
          const bodyContent = d3.select(doc).select("body").html();
          tooltip.html = bodyContent;
          tooltip.visible = true;

          // MathJax.typesetPromise();  // 重新渲染MathJax公式（但前端使用上建議用CDN方式引入，真有需要再用）
        });
        isClick = true;
      } else {
        tooltip.visible = false;
        isClick = false;
      };
    })
    .on("mouseover", () => {
      circle.attr("stroke", "#ffffff").attr("stroke-width", 5);
    })
    .on("mousemove", (e) => {
      const pt = d3.pointer(e, svg.node());
      tooltip.x = pt[0] + 40;
      tooltip.y = pt[1] - 30;
    })
    .on("mouseleave", () => {
      circle.attr("stroke-width", 0);
    });
});
</script>

<style scoped>
.tooltip-container {
  position: relative;
}

.tooltip-svg {
  border: 1px solid lightgray;
}

.tooltip-html {
  position: absolute;
  border: 2px solid black;
  border-radius: 10px;
  width: 700px;
  max-height: 600px;
  overflow: auto;
  background-color: #ffffff;
  padding: 20px;
}
</style>
