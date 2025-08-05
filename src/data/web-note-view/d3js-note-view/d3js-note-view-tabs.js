import { defineAsyncComponent } from "vue";

export const d3jsNoteViewTabs = [
  {
    id: "d3jsStartNote",
    title: "開始使用 D3.js",
    description: 
`<p><a href="https://d3js.org" target="_blank">D3.js 官網</a></p>
<p><a href="https://github.com/d3/d3/releases" target="_blank">D3.js 各版本程式碼</a><small>（GitHub頁面）</small></p>
<p><a href="https://observablehq.com/@d3/gallery" target="_blank">D3.js 圖表範例庫</a></p>
<p><a href="https://d3-graph-gallery.com" target="_blank">D3.js Graph Gallery</a></p>`,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "CDN 安裝",
        listSubtitle: "用純 html 方式導入",
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "將 js 文件引用到 <code>&lt;head&gt;</code> 裡：",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<head>
  ...
  <script src="js/d3_v7.9.0_min.js"></script>
  ...
</head>`,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "或是以 CDN 連結的方式引用到 <code>&lt;head&gt;</code> 裡：",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<head>
  ...
  <script src="https://d3js.org/d3.v7.min.js"></script>
  ...
</head>`,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "NPM 安裝",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: 
`// 先用終端機安裝 D3.js
npm install d3


// 再匯入 D3.js
import * as d3 from "d3";`,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "d3jsDataBindingNote",
    title: "資料綁定",
    description: 
`<svg width="420" height="320">
  <circle cx="150" cy="180" r="100" stroke="orange" stroke-width="5" fill="none"></circle>
  <circle cx="250" cy="180" r="100" stroke="#ffd382" stroke-width="5" fill="none"></circle>
  <text x="135" y="50" text-anchor="middle" font-size="20" font-family="Heiti TC" fill="orange">
    資料
  </text>
  <text x="270" y="50" text-anchor="middle" font-size="20" font-family="Heiti TC" fill="#ffd382">
    DOM元素
  </text>
  <text x="115" y="180" text-anchor="middle" font-size="16" font-family="Heiti TC">
    <tspan x="115" dy="0">資料多</tspan>
    <tspan x="115" dy="1.5em">enter</tspan>
  </text>
  <text x="200" y="180" text-anchor="middle" font-size="16" font-family="Heiti TC">
    <tspan x="200" dy="0">一樣多</tspan>
    <tspan x="200" dy="1.5em">update</tspan>
  </text>
  <text x="285" y="180" text-anchor="middle" font-size="16" font-family="Heiti TC">
    <tspan x="285" dy="0">元素多</tspan>
    <tspan x="285" dy="1.5em">exit</tspan>
  </text>
</svg>`,
    descriptionComponent: null,
    descriptionComponentStyle: "style='width: 800px; height: 400px;'",
    lists: [
      {
        listTitle: "資料綁定 API",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>selection.enter()</code>",
            detailSubtitle: "DOM 比較少的話，用 <code>enter()</code> 和 <code>append()</code> 調整。",
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsDataBindingNote/D3jsSelectionEnterDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div class="d3-Enter">
  <p></p>
  <p></p>
  <p></p>
</div>

<script>
  const enterData = ['我', '是', '資', '料'];
  const d3DataEnter = d3.select('.d3-Enter')
                        .selectAll('p')
                        .data(enterData)
                        .text(d => d)
                        .enter()
                        .append('p')
                        .text(d => d)
                        .attr('class', 'text-danger fw-bold');

  // 此處console.log資訊要由開發者工具的console來看
  console.log('d3DataEnter', d3DataEnter);
</script>`,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>selection.exit()</code>",
            detailSubtitle: "DOM 比較多的話，用 <code>exit()</code> 和 <code>remove()</code> 調整。",
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsDataBindingNote/D3jsSelectionExitDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div class="d3-Exit">
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
</div>

<script>
  const exitData = ['我', '是', '資', '料'];
  const d3DataExit = d3.select('.d3-Exit')
                       .selectAll('p')
                       .data(exitData)
                       .text(d => d)
                       .exit()
                       .remove();

  // 此處console.log資訊要由開發者工具的console來看
  console.log('d3DataExit', d3DataExit);
</script>`,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>selection.join()</code>",
            detailSubtitle: "用 <code>join()</code> 來調整 DOM 與 data 的數量差異。",
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsDataBindingNote/D3jsSelectionJoin1Demo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div class="d3-Join1">
  <p></p>
  <p></p>
  <p></p>
</div>

<script>
  const joinData1 = ['我', '是', '資', '料'];
  const d3DataJoin1 = d3.select('.d3-Join1')
                        .selectAll('p')
                        .data(joinData1)
                        .join('p')
                        .text(d => d)
                        .attr('class', 'text-danger fw-bold');

  // 此處console.log資訊要由開發者工具的console來看
  console.log('d3DataJoin1', d3DataJoin1);
</script>`,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>selection.join(<i>enter[, update][, exit]</i>)</code>",
            detailSubtitle: "用 <code>join(<i>enter, update, exit</i>)</code> 來調整 DOM 與 data 的數量差異。",
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsDataBindingNote/D3jsSelectionJoin2Demo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div class="d3-Join2">
  <p></p>
  <p></p>
  <p></p>
</div>

<script>
  const joinData2 = ['我', '是', '資', '料'];
  const d3DataJoin2 = d3.select('.d3-Join2')
                        .selectAll('p')
                        .data(joinData2)
                        .join(
                           enter => enter.append('p')
                                         .text(d => d)
                                         .attr('class', 'text-danger fw-bold'),
                           update => update,
                           exit => exit.remove()
                        )
                        .text(d => d);

  // 此處console.log資訊要由開發者工具的console來看
  console.log('d3DataJoin2', d3DataJoin2);
</script>`,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "一個範例（原小工具練習）",
        listSubtitle: 
`<ol>
  <li>畫面上有一個輸入資料數量的框框、隨機產生資料的按紐、目前的資料集，以及與資料搭配的柱狀圖表。</li>
  <li>每次點擊按鈕時，會根據資料數量隨機產生不同的資料，柱狀圖表也會隨著資料更新而變化。</li>
</ol>`,
        listComponent: defineAsyncComponent(() =>
          import("../../../components/WebNoteView/D3jsNoteView/D3jsDataBindingNote/D3jsDataBindingPractice.vue")
        ),
        listCode: {
          htmlCode: 
`<div>
  <label>資料數量</label>
  <input type="number" id="d3jsPractice_dataLength">
  <button type="button" id="d3jsPractice_getRandomData">點擊產生隨機資料</button>
</div>
<div class="my-2">data資料集：<span id="d3jsPractice_showData"></span></div>
<div id="d3jsPractice_chartWrap"></div>

<script>
  const getRandomData = document.querySelector('#d3jsPractice_getRandomData');
  const dataLength = document.querySelector('#d3jsPractice_dataLength');
  const showData = document.querySelector('#d3jsPractice_showData');
  let randomData = [];
  
  getRandomData.addEventListener("click", (e) => {
    randomData.length = 0;
  
    for (i = 0; i < dataLength.value; i++) {
      // 產生並塞入隨機亂數資料
      let random = Math.floor(Math.random() * 5);
      randomData.push(random);
    };

    // 畫面呈現目前資料集
    showData.innerHTML = randomData;

    // 繪製圖表
    drawDiagram();
  });

  // 建立SVG畫布
  const rangeSelect = d3.select('#d3jsPractice_chartWrap')
                        .append('svg')
                        .attr('width', 400)
                        .attr('height', 300)
                        .style('border', '1px solid rgb(96, 96, 96)');

  const drawDiagram = () => {
    // 綁定update資料
    let rects = rangeSelect.selectAll('rect')
                           .data(randomData);

    rects.enter()
         .append('rect')
         .attr('width', 0) // 初始化寬度為0
         .attr('height', 40)
         .style('fill', '#967259')
         .attr('x', (d, index) => 0)
         .attr('y', (d, index) => index * 60)
         .transition()
         .duration(500)
         .attr('width', (d) => d * 60);

    // 更新資料，重新設定長條圖的寬度
    rects.transition()
         .duration(500)
         .attr('width', (d) => d * 60);

    // 移除多的DOM元素
    rects.exit().remove();
  };
</script>`,
          jsCode: 
`// 而亦可將其中下面這段enter、update、exit分開寫的code改寫成join()的形式

// 此為原始code

const drawDiagram = () => {
  // 綁定update資料
  let rects = rangeSelect.selectAll('rect')
                         .data(randomData);
  
  rects.enter()
       .append('rect')
       .attr('width', 0) // 初始化寬度為0
       .attr('height', 40)
       .style('fill', '#967259')
       .attr('x', (d, index) => 0)
       .attr('y', (d, index) => index * 60)
       .transition()
       .duration(500)
       .attr('width', (d) => d * 60);

  // 更新資料，重新設定長條圖的寬度
  rects.transition()
       .duration(500)
       .attr('width', (d) => d * 60);
  
  // 移除多的DOM元素
  rects.exit().remove();
};
  
  
  
// 下面這段code為改寫成join()的形式

const drawDiagram = () => {
  // 綁定update資料
  let rects = rangeSelect.selectAll('rect')
                         .data(randomData)
                         .join(
                           (enter) => enter.append('rect')
                                           .attr('width', 0) // 初始化寬度為0
                                           .attr('height', 40)
                                           .style('fill', '#967259')
                                           .attr('x', (d, index) => 0)
                                           .attr('y', (d, index) => index * 60)
                                           .transition()
                                           .duration(500)
                                           .attr('width', (d) => d * 60),
                           (update) => update.transition()
                                             .duration(500)
                                             .attr('width', (d) => d * 60),
                           (exit) => exit.remove()
                         );
};`,
          vueCode: 
`<template>
  <div class="random-bar-chart">
    <label>資料數量</label>
    <input
      type="number"
      v-model.number="dataLength"
      placeholder="請輸入 0 ~ 5 的數"/>
    <button @click="generateRandomData">點擊產生隨機資料</button>

    <div>
      產生的 data 資料集：<span>{{ randomData.join(", ") }}</span>
    </div>

    <div ref="chartWrap" class="chart-wrap"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const dataLength = ref(5);
const randomData = ref([]);
const chartWrap = ref(null);
let svg = null;

const generateRandomData = () => {
  // 用 Array.from 建立一個長度為 dataLength 的陣列，每個元素都是 0～4 的隨機整數
  randomData.value = Array.from({ length: dataLength.value }, () =>
    Math.floor(Math.random() * 5)
  );
  drawDiagram();
};

const drawDiagram = () => {
  if (!svg) return;

  svg.selectAll("rect")
    .data(randomData.value)
    .join(
      (enter) =>
        enter
          .append("rect")
          .attr("width", 0)
          .attr("height", 40)
          .style("fill", "#967259")
          .attr("x", 0)
          .attr("y", (d, i) => i * 60)
          .transition()
          .duration(500)
          .attr("width", (d) => d * 60),
      (update) =>
        update
          .transition()
          .duration(500)
          .attr("width", (d) => d * 60),
      (exit) => exit.remove()
    );
};

onMounted(() => {
  svg = d3
    .select(chartWrap.value)
    .append("svg")
    .attr("width", 400)
    .attr("height", 300)
    .style("border", "1px solid rgb(96, 96, 96)");

  generateRandomData(); // 初始渲染
});
</script>

<style scoped>
.random-bar-chart input {
  margin: 0 8px;
}
.chart-wrap {
  margin-top: 8px;
}
</style>
`
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueCode: null
            }
          },
        ]
      }
    ]
  },
  {
    id: "d3jsApiForDataImportingNote",
    title: "匯入資料的 API",
    description: `<p>通常有 <u>JSON</u> / <u>CSV</u> 兩種。</p>`,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "以 JSON 的方式匯入",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "沒有 CORS 錯誤問題（例如 JSON 資料在本地端）",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`const url = "串接網址 or 檔案路徑";
const getJSONData = async () => {
  const resData = await d3.json(url);
  console.log("d3.json()", resData);
};

getJSONData();`,
              vueCode: null
            }
          },
          {
            detailTitle: "有 CORS 錯誤問題（此例用 AllOrigins API 來繞過 CORS（跨來源資源共享）限制的基本 URL）",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`const cors = "https://api.allorigins.win/get?url=";
const url = "目標 JSON 資料的 URL";
const getCorsData = async () => {
  const dataGet = await d3.json(cors + url); // 串接網址
  console.log("d3.json()", dataGet);
};

getCorsData();`,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "以 CSV 的方式匯入",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "取得 csv 資料",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`const getCsvData = async () => {
  const csvData = await d3.csv("串接網址 or 檔案路徑");
  console.log("csvData", csvData);
};

getCsvData();
`,
              vueCode: null
            }
          },
          {
            detailTitle: "只取得 csv 資料中所有特定類別的資料（類似 R 語言中 <code>food$vegetable</code> 的用法）",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`const getCsvSpecificData = async () => {
  const csvData = await d3.csv("檔案路徑", (d) => d.特定類別名);
  // 例：const csvData = await d3.csv("data/food.csv", (d) => d.vegetable);
  console.log("csvData", csvData);
};

getCsvSpecificData();`,
              vueCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "d3jsApiForDataOrganizationNote",
    title: "資料整理",
    description:
`<h4>Array 分類</h4>
<table>
  <thead>
    <tr>
      <th>Array 分類</th>
      <th>常用的 API</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Statistics（統計數據）</td>
      <td><code>d3.min</code>、<code>d3.max</code>、<code>d3.extent</code>、<code>d3.sum</code></td>
    </tr>
    <tr>
      <td>Search（尋找）</td>
      <td><code>d3.ascending</code>、<code>d3.descending</code></td>
    </tr>
    <tr>
      <td>Transformations（改變結構）</td>
      <td><code>d3.merge</code>、<code>d3.range</code></td>
    </tr>
    <tr>
      <td>Iterables（迭代）</td>
      <td><code>d3.every</code>、<code>d3.some</code>、<code>d3.map</code>、<code>d3.filter</code>、<code>d3.sort</code></td>
    </tr>
    <tr>
      <td>Sets（數組）</td>
      <td></td>
    </tr>
    <tr>
      <td>Histograms（直條圖）</td>
      <td></td>
    </tr>
    <tr>
      <td>Interning</td>
      <td></td>
    </tr>
  </tbody>
</table>`,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "Arrays 分類的常用 API",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>d3.min()</code> 尋找最小值",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`const numberData = [5, 1, 35, 13, 15, 18, 21, 31, 29];
const minNumber = d3.min(numberData);
console.log("minimum", minNumber);`,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>d3.max()</code> 尋找最大值",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`const numberData = [5, 1, 35, 13, 15, 18, 21, 31, 29];
const maxNumber = d3.max(numberData);
console.log("maximum", maxNumber);`,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>d3.extent()</code> 同時找出最小值與最大值",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`const numberData = [5, 1, 35, 13, 15, 18, 21, 31, 29];
const extent = d3.extent(numberData);
console.log("minimum and maximum", extent);`,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>d3.sum()</code> 加總",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`const numberData = [5, 1, 35, 13, 15, 18, 21, 31, 29];
const sum = d3.sum(numberData);
console.log("sum", sum);
`,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>d3.every(<i>資料, 方法</i>)</code> 遍歷資料陣列，確認陣列內的值是否都符合條件",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`const numberData = [5, 1, 35, 13, 15, 18, 21, 31, 29];
const isAllIntegerBiggerThanTwenty = d3.every(numberData, (d) => d > 20);
console.log("every > 20", isAllIntegerBiggerThanTwenty);`,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>d3.some(<i>資料, 方法</i>)</code>遍歷資料陣列，確認陣列內的值是否至少有一項符合條件",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`const numberData = [5, 1, 35, 13, 15, 18, 21, 31, 29];
const isAnyIntegerBiggerThanTwenty = d3.some(numberData, (d) => d > 20);
console.log("any > 20", isAnyIntegerBiggerThanTwenty);`,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>d3.filter(<i>資料, 方法</i>)</code>遍歷資料陣列，回傳所有符合條件的資料",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`const numberData = [5, 1, 35, 13, 15, 18, 21, 31, 29];
const filter = d3.filter(numberData, (d) => d > 20);
console.log("filter", filter);`,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>d3.sort(<i>資料[, 方法]</i>)</code>整理並排序陣列中的資料，預設是由小到大排序陣列",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`const numberData = [5, 1, 35, 13, 15, 18, 21, 31, 29];
const sort = d3.sort(numberData);
console.log("sort", sort);
`,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "Time Formats 分類的常用 API",
        listSubtitle: 
`<ul><li>
<h6>Time Formats 常用說明字符如下：</h6>
<table style="width: 100%;">
  <thead>
    <tr>
      <th>參數</th>
      <th>說明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>%Y</code></td>
      <td>西元年。</td>
    </tr>
    <tr>
      <td><code>%y</code></td>
      <td>西元年最末的兩位數。</td>
    </tr>
    <tr>
      <td><code>%m</code></td>
      <td>一年的某一個月（01~12）。</td>
    </tr>
    <tr>
      <td><code>%d</code></td>
      <td>一月的某一天（01~31）。</td>
    </tr>
    <tr>
      <td><code>%j</code></td>
      <td>一年的某一天（001~366）。</td>
    </tr>
    <tr>
      <td><code>%B</code></td>
      <td>月份。</td>
    </tr>
    <tr>
      <td><code>%b</code></td>
      <td>月份的縮寫。</td>
    </tr>
    <tr>
      <td><code>%A</code></td>
      <td>星期幾。</td>
    </tr>
    <tr>
      <td><code>%a</code></td>
      <td>星期幾的縮寫。</td>
    </tr>
  </tbody>
</table>
</li></ul>`,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>d3.timeParse(<i>說明字符</i>)</code> 將日期資訊轉換成 d3.js 能夠看得懂的數值",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`// 其中一種寫法
const timeData = "2024-07-25";
const timeParse = d3.timeParse("%Y-%m-%d");
console.log("d3標準格式時間", timeParse(timeData));

// 另外一種寫法
const timeParse = d3.timeParse("%Y-%m-%d")("2024-07-25");
console.log("d3標準格式時間", timeParse);`,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>d3.timeFormat(<i>轉換出來的方式</i>)</code> 將 d3.js 能夠看得懂的數值轉換成我們要的日期格式",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`// 若已有d3標準格式時間，可以直接套入以下code
const timeFormat = d3.timeFormat("%Y.%m.%d");
console.log("我們要的時間格式", timeFormat(此處放入d3標準格式時間));


// 也可用於先將一般格式轉換成d3標準格式時間
const timeParse = d3.timeParse("%Y-%m-%d")("2024-07-25");
console.log("d3標準格式時間", timeParse);

// 再套入函式轉換為我們要的時間格式
const timeFormat = d3.timeFormat("%Y.%m.%d");
console.log("我們要的時間格式", timeFormat(timeParse));`,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "Number Formats 分類的常用 API",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>d3.format(<i>說明字符</i>)</code> 處理數字，說明字符填入數字格式的方法。以下舉例三種常見用法。",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`// 將數字四捨五入到某位（此處以取至第四位做舉例）
const numberFormat = d3.format(".4f");
const roundFormat = numberFormat(Math.PI);
console.log("四捨五入至小數點後第四位", roundFormat);


// 將數字轉換成二進位數字
const numberFormat = d3.format("b");
const binaryFormat = numberFormat(2024);
console.log("二進位數字", binaryFormat);


// 將數值每三位加上一個逗號
const data = [99920, 11022, 35352, 11442];
const dataAdjusted = data.map((d) => d3.format(",")(d));
console.log("將數值千位一個逗號", dataAdjusted);`,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "Random Numbers 分類的常用 API",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>d3.randomInt(<i>[最小值, ]最大值</i>)</code> 產生隨機整數。若未設定最小值，最小值預設為 0。",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
` // 沒有設定最小值
const randomNum = d3.randomInt(100)();

// 有設定最大值
const randomNum = d3.randomInt(50, 100)();

console.log("隨機變數", randomNum);`,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "來自 ChatGPT 的重點整理",
        listSubtitle: 
`<div style="border-left: 5px solid #a8a8a8; padding-left: 24px;">
  <h3>《D3 實用工具函式整理（不含繪圖功能）》</h3>

  <h4>統計類（Statistics）</h4>
  <ul>
    <li><code>d3.min(array)</code>：取得陣列中的最小值</li>
    <li><code>d3.max(array)</code>：取得陣列中的最大值</li>
    <li><code>d3.extent(array)</code>：同時回傳最小與最大值，結果為 <code>[min, max]</code></li>
    <li><code>d3.sum(array)</code>：計算總和</li>
    <li><code>d3.mean(array)</code>：平均數</li>
    <li><code>d3.median(array)</code>：中位數</li>
  </ul>

  <h4>邏輯類（Boolean 判斷）</h4>
  <ul>
    <li><code>d3.every(array, fn)</code>：是否所有項目都符合條件</li>
    <li><code>d3.some(array, fn)</code>：是否有任一項目符合條件</li>
  </ul>

  <h4>搜尋與排序</h4>
  <ul>
    <li><code>d3.ascending(a, b)</code>：升冪排序用的 compare 函式</li>
    <li><code>d3.descending(a, b)</code>：降冪排序用的 compare 函式</li>
    <li><code>d3.bisect</code>：對已排序的陣列進行二分搜尋（快速找插入點）</li>
  </ul>

  <h4>資料處理</h4>
  <ul>
    <li><code>d3.group(array, keyFn)</code>：根據 key 分組，結果為 Map</li>
    <li><code>d3.rollup(array, reduceFn, keyFn)</code>：先分組，再統計</li>
    <li><code>d3.merge(arrays)</code>：將多個陣列合併成一個</li>
    <li><code>d3.range(start, stop[, step])</code>：生成數字範圍陣列</li>
  </ul>

  <h4>亂數產生</h4>
  <ul>
    <li><code>d3.randomUniform(min, max)</code>：生成均勻分佈亂數函式</li>
    <li><code>d3.randomInt(min, max)</code>：生成整數亂數函式（v7+）</li>
  </ul>

  <h4>時間處理</h4>
  <ul>
    <li><code>d3.timeParse(format)</code>：回傳一個函式，將字串轉為 <code>Date</code></li>
    <li><code>d3.timeFormat(format)</code>：回傳一個函式，將 <code>Date</code> 格式化為字串</li>
  </ul>

  <h4>格式化</h4>
  <ul>
    <li><code>d3.format(specifier)</code>：數字格式化（例：千分位、小數位數、補零）</li>
  </ul>
</div>`,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "d3jsHelperFunctionNote",
    title: "繪圖 HelperFunction",
    description: 
`<table>
  <thead>
    <tr>
      <th>Function 類別</th>
      <th>說明</th>
      <th>常用的 API</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Generators</b></td>
      <td>接受陣列類型的資料，產生 <code>&lt;path&gt;</code> 的 <code>d</code> 標籤路徑，用以繪製 svg。</td>
      <td><code>line()</code>、<code>area()</code>、<code>arc()</code></td>
    </tr>
    <tr>
      <td><b>Components</b></td>
      <td>接受方法類型的資料，產生 DOM 元素。</td>
      <td><code>axis()</code>、<code>brush()</code>、<code>zoom()</code></td>
    </tr>
    <tr>
      <td><b>Layouts</b></td>
      <td>接受完整資料集，產生整張圖表。</td>
      <td><code>stack()</code>、<code>pie()</code>、<code>chord()</code></td>
    </tr>
  </tbody>
</table>`,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "Generators",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "Lines",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<svg id="lineWrapper"></svg>

<script>
  const lineData = [
    { x: 50, y: 180 },
    { x: 50, y: 100 },
    { x: 200, y: 100 },
    { x: 200, y: 20 },
    { x: 400, y: 20 },
  ];
  const drawLine = d3.line().x((d) => d.x)
                            .y((d) => d.y);

  d3.select("#lineWrapper")
    .append("path")
    .attr("d", drawLine(lineData))
    .attr("stroke", "black")
    .attr("stroke-width", "2")
    .attr("fill", "none");


  // 這整段code，為的是寫出
  // <svg id="lineWrapper">
  //   <path d="M50,180L50,100L200,100L200,20L400,20" stroke="black" stroke-width="2" fill="none"></path>
  // </svg>
  // 其中<path>中的d，因不易用人工直接寫出，所以需要這段d3.js的code協助。
</script>`,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "Areas",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<svg id="areaWrapper"></svg>

<script>
  const areaData = [
    { x: 30, y: 180 },
    { x: 50, y: 100 },
    { x: 200, y: 100 },
    { x: 200, y: 20 },
    { x: 400, y: 20 },
  ];
  const drawArea = d3.area()
                     .x((d) => d.x)
                     .y0(10)
                     .y1((d) => d.y);
  // 此處一般至少會有三個參數，例如：area.x().y0().y1()

  d3.select("#areaWrapper")
    .append("path")
    .attr("d", drawArea(areaData))
    .attr("stroke", "black")
    .attr("stroke-width", "2")
    .attr("fill", "rgba(31, 211, 255, 0.2)");
</script>`,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "Curves",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<svg id="curveWrapper"></svg>

<script>
  const curveData = [
    { x: 50, y: 180 },
    { x: 50, y: 100 },
    { x: 200, y: 100 },
    { x: 200, y: 20 },
    { x: 400, y: 20 },
  ];
  const drawLineCurveBasis = d3.line()
                            .curve(d3.curveBasis)  // 選好要代入的d3.js曲線種類參數
                            .x((d) => d.x)
                            .y((d) => d.y);

  d3.select("#curveWrapper")
    .append("path")
    .attr("d", drawLineCurveBasis(curveData))
    .attr("stroke", "black")
    .attr("stroke-width", "2")
    .attr("fill", "none");
</script>`,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "Arcs",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<svg id="arcWrapper"></svg>

<script>
  const drawArc = d3.arc()
                    .innerRadius(80)
                    .outerRadius(90)
                    .startAngle(Math.PI * 1.2)
                    .endAngle(Math.PI * 2.8);

  d3.select("#arcWrapper")
    .append("g")
    .attr("transform", "translate(200, 100)")  // 圓心預設在[0, 0]，要透過transform移到畫面中
    .append("path")
    .attr("d", drawArc)
    .attr("stroke", "black")
    .attr("fill", "rgba(31, 211, 255, 0.2)");
</script>`,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "Components",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "Axes",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<svg id="axeWrapper"></svg>

<script>
  // 預設一組資料，用這組資料來繪製出一條X軸線
  const axeData = [
    { x: 10, y: 100 },
    { x: 20, y: 100 },
    { x: 30, y: 100 },
    { x: 90, y: 20 },
    { x: 220, y: 10 },
  ];

  // 抓出X軸要使用的資料
  const xData = axeData.map((i) => i.x);

  // 設定X軸的比例尺與繪製範圍
  const xScale = d3.scaleLinear()
                   .domain([0, d3.max(xData)])
                   .range([10, 290]);

  // 使用xScale的設定，繪製刻度(ticks)朝下的軸線
  const xAxis= d3.axisBottom(xScale);

  // 繪製軸線
  d3.select("#axeWrapper")
    .append("g")
    .call(xAxis)
    .attr("transform", "translate(0, 130)");  // 調整X軸位置
</script>`,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "Layouts",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "Stacks",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<svg id="stackWrapper"></svg>

<script>
  const dataStack = [
    { month: new Date(2023, 0, 1), China: 132, America: 120, Taiwan: 30 },
    { month: new Date(2023, 1, 1), China: 70, America: 127, Taiwan: 98 },
    { month: new Date(2023, 2, 1), China: 130, America: 33, Taiwan: 118 },
    { month: new Date(2023, 3, 1), China: 60, America: 90, Taiwan: 60 },
  ];

  // 設定資料的keys
  const stackGenerator = d3.stack()
                           .keys(["China", "America", "Taiwan"]);

  // 把資料帶入stack方法
  const stackedSeries = stackGenerator(dataStack);

  // 設定顏色
  const colorScale = d3.scaleOrdinal()
                       .domain(["China", "America", "Taiwan"])
                       .range(["red", "blue", "orange"]);

  // 建立集合g、設定顏色
  const g = d3.select("#stackWrapper")
              .attr("width", 300)
              .selectAll("#stackWrapper g")
              .data(stackedSeries)
              .enter()
              .append("g")
              .attr("fill", (d) => colorScale(d.key));

  // 繪製長條圖
  g.selectAll("rect")
   .data((d) => d)
   .join("rect")
   .attr("width", (d) => d[1] - d[0])
   .attr("x", (d) => d[0])
   .attr("y", (d, i) => i * 35)
   .attr("height", 20);
</script>`,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "d3jsScalesNote",
    title: "各種比例尺",
    description: 
`<svg width="450" height="120">
  <rect width="150" height="50" x="20" y="25" rx="10" stroke="#ffd382" stroke-width="4" fill="none"></rect>
  <text x="42" y="55" font-size="18">輸入域domain</text>
  <text x="200" y="62" font-size="40">&rarr;</text>
  <rect width="150" height="50" x="270" y="25" rx="10" stroke="orange" stroke-width="4" fill="none"></rect>
  <text x="300" y="55" font-size="18">輸出域range</text>
</svg>

<table>
  <tr>
    <td>「<b>連續性資料輸入</b>」與「<b>連續性資料輸出</b>」的比例尺</td>
    <td>連續性比例尺（Continuous Scale）、序列比例尺（Sequential Scale）、發散比例尺（Diverging Scale）</td>
  </tr>
  <tr>
    <td>「<b>連續性資料輸入</b>」與「<b>離散性資料輸出</b>」的比例尺</td>
    <td>量化比例尺（Quantize Scale）</td>
  </tr>
  <tr>
    <td>「<b>離散性資料輸入</b>」與「<b>離散性資料輸出</b>」的比例尺</td>
    <td>次序／序位比例尺（Ordinal Scale）</td>
  </tr>
</table>

<table style="margin-top: 16px;">
  <tr>
    <td>連續性比例尺（Continuous Scale）</td>
    <td>
      線性比例尺 <code>d3.scaleLinear()</code><br>
      冪比比例尺 d3.scalePow<br>
      對數比例尺 d3.scaleLog<br>
      恆等比例尺 d3.scaleIdentity<br>
      放射比例尺 d3.scaleRadial<br>
      時間比例尺 <code>d3.scaleTime()</code>、<code>d3.scaleUtc()</code>
    </td>
    <td rowspan="3">
      三者差異：
      <ul>
        <li style="margin-top: 4px;"><b>連續性比例尺</b>：<br>適用於連續數據的平滑變化，例如顏色連續過渡。</li>
        <li style="margin-top: 4px;"><b>序列比例尺</b>：<br>適用於有序數據的單向變化，例如顏色從淺到深或從深到淺。</li>
        <li style="margin-top: 4px;"><b>發散比例尺</b>：<br>適用於有兩個極端的數據，中間值對稱變化，例如強調正負或增減。</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>序列比例尺（Sequential Scale）</td>
    <td>
      <code>d3.scaleSequential()</code><br>
    </td>
  </tr>
  <tr>
    <td>發散比例尺（Diverging Scale）</td>
    <td>
      <code>d3.scaleDiverging()</code><br>
    </td>
  </tr>
  <tr>
    <td>量化比例尺（Quantize Scale）</td>
    <td colspan="2">
      量化比例尺 <code>d3.scaleQuantize()</code><br>
      分位數比例尺 d3.scaleQuantile<br>
      閾值／臨界值比例尺 d3.scaleThreshold
    </td>
  </tr>
  <tr>
    <td>次序／序位比例尺（Ordinal Scale）</td>
    <td colspan="2">
      次序比例尺 <code>d3.scaleOrdinal()</code><br>
      隱含比例尺 d3.scaleImplicit<br>
      區段比例尺 <code>d3.scaleBand()</code><br>
      點比例尺 <code>d3.scalePoint()</code>
    </td>
  </tr>
</table>`,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "連續性比例尺（Continuous Scale）",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>d3.scaleLinear()</code> 線性比例尺",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`const linearScale = d3.scaleLinear()
                      .domain([0, 100])
                      .range([0, 50]);

// 線性比例尺也可以用來換算顏色的色度
const colorScale = d3.scaleLinear()
                     .domain([0, 10])
                     .range(['yellow', 'red']);`,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>d3.scaleTime()</code> （本地）時間比例尺、<code>d3.scaleUtc()</code> 世界標準時間比例尺",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`const timeScale = d3.scaleTime()
                    .domain([new Date(2024, 0, 1), new Date(2024, 8, 1)])
                    .range([0, 100]);

const utcScale = d3.scaleUtc()
                   .domain([new Date(Date.UTC(2024, 1, 1)), new Date(Date.UTC(2024, 12, 31))])
                   .range([0, 100]);

// 兩者用法類似，有以下差別：
// '.scaleTime()'是D3.js中的時間尺度，用來處理本地時間（Local Time），根據使用者系統設定的時區來計算。
// '.scaleUtc()'則是處理UTC（Coordinated Universal Time，世界標準時間），時間不受時區影響。若在全球範圍內需要統一時間基準時，使用'.scaleUtc()'會更合適。
`,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>continuous.invert()</code>、<code>continuous.clamp()</code>、<code>continuous.nice()</code>一些連續比例尺的細節設定 API",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`// continuous.invert() 反推轉換
const linearScale = d3.scaleLinear()
                      .domain([0, 10])
                      .range([0, 100]);

console.log("invertTest", linearScale.invert(50));  // return 5



// continuous.clamp() 斬斷超過範圍的數值
const linearScaleClamp = d3.scaleLinear()
                           .domain([0, 10])
                           .range([0, 100])
                           .clamp(true);  // 截斷超過範圍的數值，例如此例的輸出域就不會超過[0, 100]

console.log("linearScaleClampTest", linearScaleClamp(-5));  // return 0
console.log("linearScaleClampTest", linearScaleClamp(3));  // return 30
console.log("linearScaleClampTest", linearScaleClamp(10.6));  // return 100



// continuous.nice() 延展終始值
const d3TestScaleNiceData = [0.243, 0.584, 0.987, 0.153, 0.433];
const d3TestScaleWithoutNice = d3.scaleLinear()
                                 .domain(d3.extent(data))
                                 .range([0, 300]);  // 此時比例尺輸出的軸線會有不完整的刻度（如上左圖）
const d3TestScaleWithNice = d3.scaleLinear()
                              .domain(d3.extent(data))
                              .range([0, 300]);  // 此時比例尺輸出的軸線終始值會有較好看的刻度（如上右圖）`,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "序列比例尺（Sequential Scale）",
        listSubtitle: "與連續比例尺不同的是，序列比例尺只能根據指定的內建插補器來設定，且輸出域、插補方式不可更動。",
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: 
`const sequentialScale = d3.scaleSequential()
                          .domain([0, 100])
                          .interpolator(d3.interpolateRainbow);

console.log("sequentialScaleTest", sequentialScale(0));  // return 'rgb(110, 64, 170)'
console.log("sequentialScaleTest", sequentialScale(50));  // return 'rgb(175, 240, 91)'
console.log("sequentialScaleTest", sequentialScale(100));  // return 'rgb(110, 64, 170)'`,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "發散比例尺（Diverging Scale）",
        listSubtitle: "主要用來將兩個相反方向的現象視覺化，像是正負數、朝上朝下。需帶入三個數值（兩個極端值與一個中間值），輸出域必須按照內建的插補值去設定。",
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: 
`const scaleAnomalyPuOr = d3.scaleDiverging()
                           .domain([-10, 0, 10])
                           .interpolator(d3.interpolatePuOr);

console.log("divergingScaleTest", scaleAnomalyPuOr(-10));  // return 'rgb(45, 0, 75)' 深紫色
console.log("divergingScaleTest", scaleAnomalyPuOr(0));  // return 'rgb(243, 238, 234)' 類白色
console.log("divergingScaleTest", scaleAnomalyPuOr(10));  // return 'rgb(127, 59, 8)' 橘色`,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "量化比例尺（Quantize Scale）",
        listSubtitle: "將一組連續性的資料，映射到另一組離散性的資料中。",
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>d3.scaleQuentize()</code> 量化比例尺",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`const quantizeScale = d3.scaleQuantize()
                        .domain([0, 100])
                        .range(['lightblue', 'orange', 'lightgreen', 'red']);

console.log("quantizeScaleTest", quantizeScale(3));  // return 'lightblue'
console.log("quantizeScaleTest", quantizeScale(73));  // return 'lightgreen'`,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "次序／序位比例尺（Ordinal Scale）",
        listSubtitle: "將一組離散性的資料，映射到另一組離散性的資料中。",
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>d3.scaleOrdinal()</code> 次序比例尺",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`const ordinalData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const ordinalScale = d3.scaleOrdinal()
                       .domain(ordinalData)
                       .range(['black', 'red', 'green']);

console.log("ordinalScaleTest", ordinalScale('Jan'));  // return 'black'
console.log("ordinalScaleTest", ordinalScale('May'));  // return 'red'

// 輸入的數值不在輸入域範圍的話，自動被加進輸入域的最後一位
console.log("ordinalScaleTest", ordinalScale('Sunday'));  // return 'black'
console.log("ordinalScaleTest", ordinalScale('Monday'));  // return 'red'`,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>d3.scaleBand()</code> 區段比例尺",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`const bandScale = d3.scaleBand()
                    .domain(['狗', '貓', '天竺鼠', '烏龜', '海豚'])
                    .range([0, 200]);

console.log("bandScaleTest", bandScale('狗'));  // return 0
console.log("bandScaleTest", bandScale('貓'));  // return 40
console.log("bandScaleTest", bandScale('海豚'));  // return 160


// 透過band.bandwidth()取得各刻度間距
console.log("bandwidthTest", bandScale.bandwidth());  // return 40`,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>d3.scalePoint()</code> 點比例尺",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`const pointScale = d3.scalePoint()
                     .domain(['狗', '貓', '天竺鼠', '烏龜', '海豚'])
                     .range([0, 200]);

console.log("pointScaleTest", pointScale('狗'));  // return 0
console.log("pointScaleTest", pointScale('貓'));  // return 50
console.log("pointScaleTest", pointScale('海豚'));  // return 200

// 透過point.step()取得各刻度間距
console.log("pointStepTest", pointScale.step());  // return 50`,
              vueCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "d3jsAxesNote",
    title: "各種軸線與刻度",
    description: 
`軸線由以下三種DOM元素構成：
<ul style="line-height: 1.65;">
  <li><code>&lt;path&gt;</code>：一條直線，繪製軸線的線段。</li>
  <li><code>&lt;line&gt;</code>：一組延著軸線的刻度記號。</li>
  <li><code>&lt;text&gt;</code>：每個刻度記號的標籤文字。</li>
</ul>`,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: null,
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "d3jsAnimationNote",
    title: "動畫",
    description: null,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: null,
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "d3jsMouseEventNote",
    title: "滑鼠事件",
    description: null,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: null,
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "d3jsPieChartNote",
    title: "圓餅圖",
    description: null,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: null,
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "d3jsScatterChartNote",
    title: "散點圖",
    description: null,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: null,
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "d3jsBubbleChartNote",
    title: "氣泡圖",
    description: null,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: null,
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "d3jsBarChartNote",
    title: "長條圖",
    description: null,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: null,
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "d3jsLineChartNote",
    title: "折線圖",
    description: null,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: null,
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      }
    ]
  },
  // ...把其他 tab 照此格式一一加入 tabs 陣列
];