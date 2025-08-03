<template>
  <div class="random-bar-chart">
    <label>資料數量</label>
    <input
      type="number"
      v-model.number="dataLength"
      placeholder="請輸入 0 ~ 5 的數"/>
    <button @click="generateRandomData">點擊產生隨機資料</button>

    <div class="my-2">
      data資料集：<span>{{ randomData.join(', ') }}</span>
    </div>

    <div ref="chartWrap" class="chart-wrap"></div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import * as d3 from 'd3'

const dataLength = ref(5)
const randomData = ref([])
const chartWrap = ref(null)
let svg = null

const generateRandomData = () => {
  randomData.value = Array.from({ length: dataLength.value }, () =>
    Math.floor(Math.random() * 5)
  )
  drawDiagram()
}

const drawDiagram = () => {
  if (!svg) return

  svg.selectAll('rect')
    .data(randomData.value)
    .join(
      (enter) =>
        enter
          .append('rect')
          .attr('width', 0)
          .attr('height', 40)
          .style('fill', '#967259')
          .attr('x', 0)
          .attr('y', (d, i) => i * 60)
          .transition()
          .duration(500)
          .attr('width', (d) => d * 60),
      (update) =>
        update
          .transition()
          .duration(500)
          .attr('width', (d) => d * 60),
      (exit) => exit.remove()
    )
}

onMounted(() => {
  svg = d3
    .select(chartWrap.value)
    .append('svg')
    .attr('width', 400)
    .attr('height', 300)
    .style('border', '1px solid rgb(96, 96, 96)')

  generateRandomData() // 初始渲染
})
</script>

<style scoped>
.random-bar-chart input {
  margin: 0 8px;
}
.chart-wrap {
  margin-top: 1rem;
}
</style>
