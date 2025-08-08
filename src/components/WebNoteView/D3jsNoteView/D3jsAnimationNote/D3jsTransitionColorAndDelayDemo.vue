<template>
  <svg
    ref="transitionColorAndDelaySvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
  <div class="btn-container">
    <button
      type="button"
      class="move-and-change-btn"
      @click="moveAndChangeColor"
    >
      開始動作
    </button>
    <button
      type="button"
      class="reset-btn"
      @click="reset"
    >
      回復
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;

const transitionColorAndDelaySvgRef = ref(null);
let transitionColorAndDelayRect = null;

onMounted(() => {
  transitionColorAndDelayRect = d3.select(transitionColorAndDelaySvgRef.value)
                                  .append("rect")
                                  .attr("width", 40)
                                  .attr("height", 40)
                                  .attr("fill", "#f68b47")
                                  .attr("stroke", "#f68b47");
});

const moveAndChangeColor = () => {
  transitionColorAndDelayRect.transition()  // 這裡開始第一段動畫
                             .duration(1500)
                             .delay(300)  // 按下按鈕後，延遲0.3秒再執行下列動作
                             .attr("transform", "translate(140, 60)")
                             .transition()  // 這裡開始第二段動畫
                             .delay(500)  // 移動到定位後，延遲0.5秒再執行下列動作
                             .attr("fill", "green")
                             .attr("stroke-width", 6)
                             .attr("stroke", "red");
};

const reset = () => {
  transitionColorAndDelayRect.transition()
                             .attr("fill", "#f68b47")
                             .attr("stroke-width", 1)
                             .attr("stroke", "#f68b47")
                             .transition()
                             .delay(300)
                             .attr("transform", "translate(0, 0)");
};
</script>

<style scoped>
.btn-container {
  display: flex;
  gap: 5px;
}

.move-and-change-btn {
  padding: 6px 12px 6px 12px;
  font-size: 16px;
  font-weight: 400;
  font-family: inherit;
  line-height: 1.5;
  color: #0d6efd;
  background-color: #ffffff;
  border: 1px solid #0d6efd;
  border-radius: 6px;
  cursor: pointer;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}

.move-and-change-btn:hover {
  color: #ffffff;
  background-color: #0d6efd;
  border-color: #0d6efd;
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
