<!-- D3DataImportDemo.vue -->
<template>
  <div id="d3js-api-demo">
    <h3>匯入資料的 API（ JSON / CSV ）</h3>
    <hr />

    <!-- JSON 範例 一般 -->
    <section>
      <h4>以 JSON 方式匯入（無 CORS 問題）</h4>
      <button @click="loadJson">載入 JSON</button>
      <pre>{{ jsonData }}</pre>
    </section>

    <!-- JSON 範例 CORS -->
    <section>
      <h4>以 JSON 方式匯入（繞過 CORS）</h4>
      <button @click="loadJsonCORS">載入 JSON (AllOrigins)</button>
      <pre>{{ jsonCorsData }}</pre>
    </section>

    <!-- CSV 範例 -->
    <section>
      <h4>以 CSV 方式匯入</h4>
      <button @click="loadCsv">載入 CSV</button>
      <pre>{{ csvData }}</pre>
    </section>

    <!-- CSV 篩選範例 -->
    <section>
      <h4>篩選並排序 CSV 中「里程_單位公里」欄位</h4>
      <button @click="loadMileageData">載入並處理里程資料</button>
      <div class="mileage-summary">
        <p>最短里程：<strong>{{ minMileage }}</strong> km</p>
        <p>最長里程：<strong>{{ maxMileage }}</strong> km</p>
        <div class="mileage-list" v-html="formattedMileageList"></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import * as d3 from 'd3'

// Reactive state
const jsonData = ref(null)
const jsonCorsData = ref(null)
const csvData = ref(null)

const mileageRaw = ref([])       // 篩選前
const minMileage = ref(null)
const maxMileage = ref(null)
const formattedMileageList = ref('')

// 1. 直接用 d3.json()
async function loadJson() {
  const url = '/path/to/data.json'
  jsonData.value = await d3.json(url)
}

// 2. 用 AllOrigins 繞過 CORS
async function loadJsonCORS() {
  const cors = 'https://api.allorigins.win/get?url='
  const target = encodeURIComponent('https://example.com/data.json')
  const resp = await d3.json(`${cors}${target}`)
  // AllOrigins 回傳 data 在 contents 欄位
  jsonCorsData.value = resp.contents
}

// 3. 直接用 d3.csv()
async function loadCsv() {
  const url = '/path/to/data.csv'
  csvData.value = await d3.csv(url)
}

// 4. 專門讀取里程資料、篩選排序
async function loadMileageData() {
  // 讀入並轉成 number
  const raw = await d3.csv('/assets/testAssets/CountyRoad_1021003.csv',
    d => +d['里程_單位公里']
  )
  // 篩掉 <=0 或 >=200
  const filtered = raw.filter(d => d > 0 && d < 200)
  // 排序
  const sorted = filtered.sort((a, b) => a - b)
  // 最小最大
  minMileage.value = d3.min(filtered)
  maxMileage.value = d3.max(filtered)
  // 轉成 <br> 分行
  formattedMileageList.value = sorted.join('<br>')
}
</script>

<style scoped>
#d3js-api-demo section {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.mileage-summary {
  background: #f6f6f6;
  padding: 1rem;
}
.mileage-list {
  max-height: 200px;
  overflow-y: auto;
  background: white;
  padding: 0.5rem;
  border: 1px solid #ccc;
}
</style>
