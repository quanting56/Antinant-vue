<template>
  <svg
    ref="zoomSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
  <div class="btn-container">
    <button
      type="button"
      ref="zoomResetBtnRef"
      class="reset-btn">重設</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;

const zoomSvgRef = ref(null);
const zoomResetBtnRef = ref(null);

onMounted(() => {
  // 加個圓點
  const circle = d3.select(zoomSvgRef.value)
                   .append("circle")
                   .attr("id", "dot")
                   .attr("cx", width / 2)
                   .attr("cy", height / 2)
                   .attr("r", 50)
                   .attr("fill", "#69b3a2")
                   .style("cursor", "pointer");

  // 建立Zoom事件
  const zoomEvent = d3.zoom()
                      .scaleExtent([1/5, 5])  // 縮放大小倍率限制
                      .duration(600)
                      .on("zoom", (e) => {
                        const transform = e.transform;  // e.transform是一個d3.zoomTransform物件
                        // transfrom裡面有transform.x、transform.y、transform.k三個參數可以調整
                        // transform.x管x平移量，transform.y管y平移量，transform.k管縮放倍率
                        // 使用transform.k調整選定元素屬性的transform的k，避免動到x、y造成元素位置改變
                        // 50為圓原半徑
                        circle.attr("r", (d) => 50 * transform.k);
                      });
        
  // 呼叫Zoom事件
  circle.call(zoomEvent);

  // 設立重置按鈕
  d3.select(zoomResetBtnRef.value)
    .on("click", () => {
      const transformReset = d3.zoomIdentity.scale(1);
      circle.transition()
            .call(zoomEvent.transform, transformReset);
    });
});
</script>

<style scoped>
.btn-container {
  display: flex;
  gap: 5px;
}

.reset-btn {
  padding: 6px 12px 6px 12px;
  font-size: 16px;
  font-weight: 400;
  font-family: inherit;
  line-height: 1.5;
  color: #dc3545;
  background-color: #ffffff;
  border: 1px solid #dc3545;
  border-radius: 6px;
  cursor: pointer;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}

.reset-btn:hover {
  color: #ffffff;
  background-color: #dc3545;
  border-color: #dc3545;
}
</style>
