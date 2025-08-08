<template>
  <svg
    ref="delayCircleMoveSvgRef"
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
      開始動作
    </button>
    <button
      type="button"
      class="reset-btn"
      @click="reset"
    >
      回復上一動
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;

const delayCircleMoveSvgRef = ref(null);
let circles = null;
const dataDelay = Array.from({ length: 8}, (d, i) => 160 - i * 20);  // 用Array.from()設定延遲時間
// [160, 140, 120, 100, ... 20]

onMounted(() => {
  circles = d3.select(delayCircleMoveSvgRef.value)
              .selectAll("circle")
              .data(dataDelay)
              .join("circle")
              .attr("cx", (d) => d)
              .attr("cy", 30)
              .attr("r", 15)
              .attr("fill", "#f48b47")
              .attr("opacity", 0.5);
});

const move = () => {
  circles.transition()
         .delay((d, i) => i * 200)  // 分別延遲
         .attr("cx", (d) => d + 120);  // 位移距離
};

const reset = () => {
  circles.transition()
         .delay((d, i) => 1600 - i * 200)  // 先進後出
         .attr("cx", (d) => d);  // 回復原位（每個圓形<circle>的cx起始位置就是它的d值，它們在前面就「記住了」自己的資料值）
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
