<template>
  <svg
    ref="easeDemonstrationSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
  <div class="ease-container">
    <select v-model="selectedEase" class="ease-select">
      <option value="">請選擇</option>
      <option
        v-for="ease in easeNames"
        :key="ease"
        :value="ease"
      >
        d3.{{ ease }}
      </option>
    </select>

    <button
      type="button"
      class="ease-button"
      @click="updateEase"
    >
      Ease 開始
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;

const easeDemonstrationSvgRef = ref(null);
const selectedEase = ref("");
const easeNames = Object.keys(d3).filter(((d) => d.startsWith("ease")));

let easeDot = null;

onMounted(() =>{
  // 建立圓點
  easeDot = d3.select(easeDemonstrationSvgRef.value)
              .append("circle")
              .attr("cx", 40)
              .attr("cy", 40)
              .attr("r", 30)
              .attr("fill", "#f68b47");
});

const updateEase = () => {
  if (!selectedEase) return;

  easeDot.attr("cx", 40)  // 回原點
         .transition()
         .duration(500)
         .ease(d3[selectedEase.value])  // 設定動畫效果
         .attr("cx", 200);
};
</script>

<style scoped>
.ease-container {
  display: flex;
  gap: 8px
}

.ease-select {
  font-size: 16px;
  padding-left: 6px;
}

.ease-button {
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

.ease-button:hover {
  color: #ffffff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
</style>
