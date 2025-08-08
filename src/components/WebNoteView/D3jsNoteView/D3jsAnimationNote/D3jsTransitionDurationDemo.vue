<template>
  <svg
    ref="transitionDurationSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
  <div class="btn-container">
    <button
      type="button"
      class="move-btn"
      @click="move"
    >
      移動
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

const transitionDurationSvgRef = ref(null);
let transitionDurationRect = null;

onMounted(() => {
  transitionDurationRect = d3.select(transitionDurationSvgRef.value)
                             .append("rect")
                             .attr("width", 40)
                             .attr("height", 40)
                             .attr("fill", "#f68b47")
                             .attr("stroke", "#f68b47");
});

const move = () => {
  transitionDurationRect.transition()
                        .duration(2000)  // 設定動畫時間持續2秒鐘
                        .attr("transform", "translate(140, 60)");
};

const reset = () => {
  transitionDurationRect.transition()
                        .attr("transform", "translate(0, 0)");
};
</script>

<style scoped>
.btn-container {
  display: flex;
  gap: 5px;
}

.move-btn {
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

.move-btn:hover {
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
