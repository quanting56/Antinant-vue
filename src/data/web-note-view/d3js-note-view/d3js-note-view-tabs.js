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
const getCorsData = async () => {` + "\n" +
'  const dataGet = await d3.json(`${cors}${url}`); // 串接網址' + "\n" +
`  console.log("d3.json()", dataGet);
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
console.log("minimum", minNumber);

// return 'minimum' 1`,
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
console.log("maximum", maxNumber);

// return 'maximum' 35`,
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
console.log("minimum and maximum", extent);

// return 'minimum and maximum' [1, 35]`,
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

// return 'sum' 168`,
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
console.log("every > 20", isAllIntegerBiggerThanTwenty);

// return 'every > 20' false`,
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
console.log("any > 20", isAnyIntegerBiggerThanTwenty);

// return 'any > 20' true`,
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
console.log("filter", filter);

// return 'filter' [35, 21, 31, 29]`,
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

// return 'sort' [1, 5, 13, 15, 18, 21, 29, 31, 35]`,
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

// return 'd3標準格式時間' Thu Jul 25 2024 00:00:00 GMT+0800 (台北標準時間)



// 另外一種寫法
const timeParse = d3.timeParse("%Y-%m-%d")("2024-07-25");
console.log("d3標準格式時間", timeParse);

// return 'd3標準格式時間' Thu Jul 25 2024 00:00:00 GMT+0800 (台北標準時間)`,
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
console.log("我們要的時間格式", timeFormat(timeParse));

// return 'd3標準格式時間' Thu Jul 25 2024 00:00:00 GMT+0800 (台北標準時間)
// return '我們要的時間格式' 2024.07.25`,
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

// return '四捨五入至小數點後第四位' 3.1416



// 將數字轉換成二進位數字
const numberFormat = d3.format("b");
const binaryFormat = numberFormat(2024);
console.log("二進位數字", binaryFormat);

// return '二進位數字' 11111101000



// 將數值每三位加上一個逗號
const data = [99920, 11022, 35352, 11442];
const dataAdjusted = data.map((d) => d3.format(",")(d));
console.log("將數值千位一個逗號", dataAdjusted);

// return '將數值千位一個逗號' ['99,920', '11,022', '35,352', '11,442']`,
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
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsHelperFunctionNote/D3jsLinesDemo.vue")
            ),
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
              vueCode: 
`<template>
  <svg ref="svgRef" width="500" height="150"></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const svgRef = ref(null);

onMounted(() => {
  const data = [
    { x: 50, y: 180 },
    { x: 50, y: 100 },
    { x: 200, y: 100 },
    { x: 200, y: 20 },
    { x: 400, y: 20 },
  ];

  const drawLine = d3.line()
    .x((d) => d.x)
    .y((d) => d.y);
  
  d3.select(svgRef.value)
    .append("path")
    .attr("d", drawLine(data))
    .attr("stroke", "black")
    .attr("stroke-width", "2")
    .attr("fill", "none");
});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "Areas",
            detailSubtitle: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsHelperFunctionNote/D3jsAreasDemo.vue")
            ),
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
              vueCode: 
`<template>
  <svg ref="areaSvgRef" width="500" height="200"></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const areaSvgRef = ref(null);

onMounted(() => {
  const data = [
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

  d3.select(areaSvgRef.value)
    .append("path")
    .attr("d", drawArea(data))
    .attr("stroke", "black")
    .attr("stroke-width", "2")
    .attr("fill", "rgba(31, 211, 255, 0.2)");
});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "Curves",
            detailSubtitle: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsHelperFunctionNote/D3jsCurvesDemo.vue")
            ),
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
              vueCode: 
`<template>
  <svg ref="curveSvgRef" width="500" height="200"></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const curveSvgRef = ref(null);

onMounted(() => {
  const data = [
    { x: 50, y: 180 },
    { x: 50, y: 100 },
    { x: 200, y: 100 },
    { x: 200, y: 20 },
    { x: 400, y: 20 },
  ];

  const drawLineCurvesBasis = d3.line()
    .curve(d3.curveBasis)  // 選好要代入的d3.js曲線種類參數
    .x((d) => d.x)
    .y((d) => d.y);

  d3.select(curveSvgRef.value)
    .append("path")
    .attr("d", drawLineCurvesBasis(data))
    .attr("stroke", "black")
    .attr("stroke-width", "2")
    .attr("fill", "none");
});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "Arcs",
            detailSubtitle: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsHelperFunctionNote/D3jsArcsDemo.vue")
            ),
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
              vueCode: 
`<template>
  <svg ref="arcSvgRef" width="500" height="200"></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const arcSvgRef = ref(null);

onMounted(() => {
  const drawArc = d3.arc()
    .innerRadius(80)
    .outerRadius(90)
    .startAngle(Math.PI * 1.2)
    .endAngle(Math.PI * 2.8);

  d3.select(arcSvgRef.value)
    .append("g")
    .attr("transform", "translate(200, 100)")  // 圓心預設在[0, 0]，要透過transform移到畫面中
    .append("path")
    .attr("d" ,drawArc)
    .attr("stroke", "black")
    .attr("fill", "rgba(31, 211, 255, 0.2)");
});
</script>

<style scoped></style>`
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
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsHelperFunctionNote/D3jsAxesDemo.vue")
            ),
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
              vueCode: 
`<template>
  <svg ref="axisSvgRef" width="500" height="120"></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const axisSvgRef = ref(null);

onMounted(() => {
  // 預設一組資料，用這組資料來繪製出一條X軸線
  const data = [
    { x: 10, y: 100 },
    { x: 20, y: 100 },
    { x: 30, y: 100 },
    { x: 90, y: 20 },
    { x: 220, y: 10 },
  ];

  // 抓出X軸要使用的資料
  const xData = data.map((d) => d.x);

  // 設定X軸的比例尺與繪製範圍
  const xScale = d3.scaleLinear()
    .domain([0, d3.max(xData)])
    .range([10, 290]);

  // 使用xScale的設定，繪製刻度(ticks)朝下的軸線
  const xAxis = d3.axisBottom(xScale);

  // 繪製軸線
  d3.select(axisSvgRef.value)
    .append("g")
    .call(xAxis)
    .attr("transform", "translate(0, 50)")  // 調整X軸位置
});
</script>

<style scoped></style>`
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
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsHelperFunctionNote/D3jsStacksDemo.vue")
            ),
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
              vueCode: 
`<template>
  <svg ref="stackSvgRef" width="500" height="140"></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const stackSvgRef = ref(null);

onMounted(() => {
  const data = [
    { month: new Date(2023, 0, 1), China: 132, America: 120, Taiwan: 30 },
    { month: new Date(2023, 1, 1), China: 70, America: 127, Taiwan: 98 },
    { month: new Date(2023, 2, 1), China: 130, America: 33, Taiwan: 118 },
    { month: new Date(2023, 3, 1), China: 60, America: 90, Taiwan: 60 },
  ];

  // 設定資料的keys
  const stackGenerator = d3.stack()
    .keys(["China", "America", "Taiwan"]);

  // 把資料帶入stack方法
  const stackedSeries = stackGenerator(data);

  // 設定顏色
  const colorScale = d3.scaleOrdinal()
    .domain(["China", "America", "Taiwan"])
    .range(["red", "blue", "orange"]);

  // 建立集合g、設定顏色
  const g = d3.select(stackSvgRef.value)
    .attr("width", 300)
    .selectAll(stackSvgRef.value.g)
    .data(stackedSeries)
    .enter()
    .append("g")
    .attr("fill", (d) => colorScale(d.key));

  // 繪製長條圖
  g.selectAll("rect")
    .data((d) => d)
    .join("rect")
    .attr("width", (d) => d[1] - d[0])
    .attr("x" ,(d) => d[0])
    .attr("y" , (d, i) => i * 35)
    .attr("height", 20);
});
</script>

<style scoped></style>`
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
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsScalesNote/D3jsScaleWithNiceComparison.vue")
            ),
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
    descriptionComponent: defineAsyncComponent(() =>
      import("../../../components/WebNoteView/D3jsNoteView/D3jsAxesNote/D3jsAxesGraphExplanation.vue")
    ),
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "各種軸線與刻度（Axes & Ticks）",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "各種刻度方向的軸線",
            detailSubtitle: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsAxesNote/D3jsAxesDirectionsDemo.vue")
            ),
            detailCode: {
              htmlCode: null,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "繪製一般的 x 軸",
            detailSubtitle: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsAxesNote/D3jsXAxisDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="xAxis"></div>

<script>
  // 設定width、height、margin
  const width = 300;
  const height = 200;
  const margin = ( width - height ) / 2;

  // 建立繪製圖表的<svg>
  d3.select("#xAxis")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid lightgray");

  // 設定比例尺
  const xScale = d3.scaleLinear()
                   .domain([0, 100])
                   .range([margin, width - margin]);

  // 設定軸線產生方式
  const xAxisGenerator = d3.axisBottom(xScale);

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select("#xAxis svg")
    .append("g")
    .call(xAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`);' + "\n" +
`</script>`,
              jsCode: null,
              vueCode: 
`<template>
  <svg
    ref="xAxisSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = (width - height) / 2;

const xAxisSvgRef = ref(null);

onMounted(() => {
  // 設定比例尺
  const xScale = d3.scaleLinear()
                   .domain([0, 100])
                   .range([margin, width - margin]);

  // 設定軸線產生方式
  const xAxisGenerator = d3.axisBottom(xScale);

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select(xAxisSvgRef.value)
    .append("g")
    .call(xAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`);' + "\n" +
`});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "<code>axis.ticks(<i>刻度數[, 格式]</i>)</code> 調整刻度（tick）數量",
            detailSubtitle: "該方法僅接受 2、5、10 倍數的刻度數量，否則會自動抓取最近倍數來調整。",
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsAxesNote/D3jsAxisTickTestDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="axisTickTest"></div>

<script>
  // 設定width、height、margin
  const width = 300;
  const height = 200;
  const margin = ( width - height ) / 2;

  // 建立繪製圖表的<svg>
  d3.select("#axisTickTest")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid lightgray");

  // 設定比例尺
  const axisTickTestScale = d3.scaleLinear()
                              .domain([0, 100])
                              .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisTickTestAxisGenerator = d3.axisBottom(axisTickTestScale)
                                      .ticks(5);  // 軸線刻度數量5個，以及最前方的1個起始值

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select("#axisTickTest svg")
    .append("g")
    .call(axisTickTestAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`);' + "\n" +
`</script>`,
              jsCode: null,
              vueCode: 
`<template>
  <svg
    ref="axisTickTestSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = (width - height) / 2;

const axisTickTestSvgRef = ref(null);

onMounted(() => {
  // 設定比例尺
  const axisTickTestScale = d3.scaleLinear()
                              .domain([0, 100])
                              .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisTickTestAxisGenerator = d3.axisBottom(axisTickTestScale)
                                      .ticks(5);  // 軸線刻度數量5個，以及最前方的1個起始值

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select(axisTickTestSvgRef.value)
    .append("g")
    .call(axisTickTestAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`);' + "\n" +
`});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "<code>axis.ticks(<i>刻度數[, 格式]</i>)</code> 調整刻度的數字格式",
            detailSubtitle: "亦可改用 <code>axis.tickFormat()</code> 調整（見第 8 點）。",
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsAxesNote/D3jsFormatTestDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="axisFormatTest"></div>

<script>
  // 設定width、height、margin
  const width = 300;
  const height = 200;
  const margin = ( width - height ) / 2;

  // 建立繪製圖表的<svg>
  d3.select("#axisFormatTest")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid lightgray");

  // 設定比例尺
  const axisFormatTestScale = d3.scaleLinear()
                                .domain([0, 100])
                                .range([margin, width - margin]);
                            
  // 設定軸線產生方式
  const axisFormatTestAxisGenerator = d3.axisBottom(axisFormatTestScale)
                                        .ticks(5, '.1f');  // 本行亦可換成".ticks(5).tickFormat(d3.format('.1f'))"

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select("#axisFormatTest svg")
    .append("g")
    .call(axisFormatTestAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`);' + "\n" +
`</script>`,
              jsCode: null,
              vueCode: 
`<template>
  <svg
    ref="axisFormatTestSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = (width - height) / 2;

const axisFormatTestSvgRef = ref(null);

onMounted(() => {
  // 設定比例尺
  const axisFormatTestScale = d3.scaleLinear()
                                .domain([0, 100])
                                .range([margin, width - margin]);
                            
  // 設定軸線產生方式
  const axisFormatTestAxisGenerator = d3.axisBottom(axisFormatTestScale)
                                        .ticks(5, '.1f');  // 本行亦可換成".ticks(5).tickFormat(d3.format('.1f'))"

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select(axisFormatTestSvgRef.value)
    .append("g")
    .call(axisFormatTestAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`);' + "\n" +
`});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "時間比例尺的軸線",
            detailSubtitle: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsAxesNote/D3jsAxisTimeTickTestDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="axisTimeTickTest"></div>

<script>
  // 設定width、height、margin
  const width = 300;
  const height = 200;
  const margin = ( width - height ) / 2;
  const January = new Date(2024, 0);
  const December = new Date(2024, 11);

  // 建立繪製圖表的<svg>
  d3.select("#axisTimeTickTest")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid lightgray");

  // 設定比例尺
  const axisTimeTickTestScale = d3.scaleTime()
                                  .domain([January, December])
                                  .range([margin , width - margin]);

  // 設定軸線產生方式
  const axisTimeTickTestAxisGenerator = d3.axisBottom(axisTimeTickTestScale)
                                          .ticks(12, '%B');

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select("#axisTimeTickTest svg")
    .append("g")
    .call(axisTimeTickTestAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`);' + "\n" +
`</script>`,
              jsCode: 
`// 註：Time Formats常用說明字符如下：
// '%Y' => 西元年。
// '%y'	=> 西元年最末的兩位數。
// '%m'	=> 一年的某一個月（01~12）。
// '%d'	=> 一月的某一天（01~31）。
// '%j'	=> 一年的某一天（001~366）。
// '%B'	=> 月份。
// '%b'	=> 月份的縮寫。
// '%A'	=> 星期幾。
// '%a'	=> 星期幾的縮寫。`,
              vueCode: 
`<template>
  <svg
    ref="axisTimeTickTestSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = 20;

const January = new Date(2024, 0);
const December = new Date(2024, 11);

const axisTimeTickTestSvgRef = ref(null);

onMounted(() => {
  // 設定比例尺
  const axisTimeTickTestScale = d3.scaleTime()
                                  .domain([January, December])
                                  .range([margin , width - margin]);

  // 設定軸線產生方式
  const axisTimeTickTestAxisGenerator = d3.axisBottom(axisTimeTickTestScale)
                                          .ticks(12, "%b");

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select(axisTimeTickTestSvgRef.value)
    .append("g")
    .call(axisTimeTickTestAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`);' + "\n" +
`});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "<code>axis.tickValues()</code> 指定特殊刻度",
            detailSubtitle: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsAxesNote/D3jsAxisTickValueTestDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="axisTickValueTest"></div>

<script>
  // 設定width、height、margin
  const width = 300;
  const height = 200;
  const margin = ( width - height ) / 2;

  // 建立繪製圖表的<svg>
  d3.select("#axisTickValueTest")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid lightgray");

  // 設定比例尺
  const axisTickValueTestScale = d3.scaleLinear()
                                   .domain([0, 100])
                                   .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisTickValueTestAxisGenerator = d3.axisBottom(axisTickValueTestScale)
                                           .tickValues([0, 15, 23, 34, 60, 81, 100]);

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select("#axisTickValueTest svg")
    .append("g")
    .call(axisTickValueTestAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`);' + "\n" +
`</script>`,
              jsCode: null,
              vueCode: 
`<template>
  <svg
    ref="axisTickValueTestSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = ( width - height ) / 2;

const axisTickValueTestSvgRef = ref(null);

onMounted(() => {
  // 設定比例尺
  const axisTickValueTestScale = d3.scaleLinear()
                                   .domain([0, 100])
                                   .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisTickValueTestAxisGenerator = d3.axisBottom(axisTickValueTestScale)
                                           .tickValues([0, 15, 23, 34, 60, 81, 100]);

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select(axisTickValueTestSvgRef.value)
    .append("g")
    .call(axisTickValueTestAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`);' + "\n" +
`});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "<code>axis.tickValues()</code> 指定特殊刻度（用動態方式減少顯示的標籤數，以利閱讀）",
            detailSubtitle: "ScaleBand 比例尺呈現指定刻度。",
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsAxesNote/D3jsScaleBandTickValueTestDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="axisScaleBandTickValueTest"></div>

<script>
  // 設定width、height、margin、數據
  const width = 300;
  const height = 200;
  const margin = ( width - height ) / 2;
  const zodiacData = ['鼠', '牛', '虎', '兔', '龍', '蛇', '馬', '羊', '猴', '雞', '狗', '豬'];

  // 建立繪製圖表的<svg>
  const axisScaleBandTickValueTestSVG = d3.select("#axisScaleBandTickValueTest")
                                          .append("svg")
                                          .attr("width", width)
                                          .attr("height", height)
                                          .style("border", "1px solid lightgray");

  // 設定比例尺
  const axisScaleBandTickValueTestScale = d3.scaleBand()
                                            .domain(zodiacData)
                                            .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisScaleBandTickValueTestAxisGenerator = d3.axisBottom(axisScaleBandTickValueTestScale)
                                                    .tickValues(axisScaleBandTickValueTestScale.domain().filter((i, idx) => idx%2 === 0));  // 加這行減少顯示的標籤數（即指定刻度），以利閱讀

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  axisScaleBandTickValueTestSVG.append("g")
                               .call(axisScaleBandTickValueTestAxisGenerator)` + "\n" +
'                               .attr("transform", `translate(0, ${ height / 2})`);' + "\n" +
`</script>`,
              jsCode: null,
              vueCode: 
`<template>
  <svg
    ref="axisScaleBandTickValueTestSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = ( width - height ) / 2;

const axisScaleBandTickValueTestSvgRef = ref(null);

const zodiacData = ["鼠", "牛", "虎", "兔", "龍", "蛇", "馬", "羊", "猴", "雞", "狗", "豬"];

onMounted(() => {
  // 設定比例尺
  const axisScaleBandTickValueTestScale = d3.scaleBand()
                                            .domain(zodiacData)
                                            .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisScaleBandTickValueTestAxisGenerator = d3.axisBottom(axisScaleBandTickValueTestScale)
                                                    .tickValues(axisScaleBandTickValueTestScale.domain().filter((d, idx) => idx%2 === 0));  // 加這行減少顯示的標籤數（即指定刻度），以利閱讀

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select(axisScaleBandTickValueTestSvgRef.value)
    .append("g")
    .call(axisScaleBandTickValueTestAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2})`);' + "\n" +
`});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "<code>axis.tickFormat(<i>[format]</i>)</code> 調整刻度文字的樣式",
            detailSubtitle: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsAxesNote/D3jsAxisTickFormatTestDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="axisTickFormatTest"></div>

<script>
  // 設定width、height、margin
  const width = 300;
  const height = 200;
  const margin = ( width - height ) / 2;

  // 建立繪製圖表的<svg>
  d3.select("#axisTickFormatTest")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid lightgray");

  // 設定比例尺
  const axisTickFormatTestScale = d3.scaleLinear()
                                    .domain([0, 100])
                                    .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisTickFormatTestAxisGenerator = d3.axisBottom(axisTickFormatTestScale)
                                            .ticks(5)
                                            .tickFormat(d3.format('.2f'));  // 兩位小數

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select("#axisTickFormatTest svg")
    .append("g")
    .call(axisTickFormatTestAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`);' + "\n" +
`</script>`,
              jsCode: null,
              vueCode: 
`<template>
  <svg
    ref="axisTickFormatTestSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = ( width - height ) / 2;

const axisTickFormatTestSvgRef = ref(null);

onMounted(() => {
  // 設定比例尺
  const axisTickFormatTestScale = d3.scaleLinear()
                                    .domain([0, 100])
                                    .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisTickFormatTestAxisGenerator = d3.axisBottom(axisTickFormatTestScale)
                                            .ticks(5)
                                            .tickFormat(d3.format('.2f'));  // 兩位小數

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select(axisTickFormatTestSvgRef.value)
    .append("g")
    .call(axisTickFormatTestAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`);' + "\n" +
`});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "增加刻度單位（類調整刻度文字樣式）",
            detailSubtitle: "使用 <code>axis.tickFormat()</code> 調整。",
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsAxesNote/D3jsAxisTickFormatUnitTestDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="axisTickFormatUnitTest"></div>

<script>
  // 設定width、height、margin
  const width = 300;
  const height = 200;
  const margin = ( width - height ) / 2;

  // 建立繪製圖表的<svg>
  d3.select("#axisTickFormatUnitTest")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid lightgray");

  // 設定比例尺
  const axisTickFormatUnitTestScale = d3.scaleLinear()
                                        .domain([0, 100])
                                        .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisTickFormatUnitTestAxisGenerator = d3.axisBottom(axisTickFormatUnitTestScale)
                                                .ticks(5)` + "\n" +
'                                                .tickFormat(d => `${d}元`);  // 增加文字單位' + "\n" +
`
  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select("#axisTickFormatUnitTest svg")
    .append("g")
    .call(axisTickFormatUnitTestAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`);' + "\n" +
`</script>`,
              jsCode: null,
              vueCode: 
`<template>
  <svg
    ref="axisTickFormatUnitTestSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = ( width - height ) / 2;

const axisTickFormatUnitTestSvgRef = ref(null);

onMounted(() => {
  // 設定比例尺
  const axisTickFormatUnitTestScale = d3.scaleLinear()
                                        .domain([0, 100])
                                        .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisTickFormatUnitTestAxisGenerator = d3.axisBottom(axisTickFormatUnitTestScale)
                                                .ticks(5)` + "\n" +
'                                                .tickFormat(d => `${d}元`);  // 增加文字單位' + "\n" +
`
  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select(axisTickFormatUnitTestSvgRef.value)
    .append("g")
    .call(axisTickFormatUnitTestAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`);' + "\n" +
`});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "<code>axis.tickSize()</code> 調整刻度線段長度",
            detailSubtitle: "刻度線段長度預設長度為 6。",
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsAxesNote/D3jsAxisTickSizeTestDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="axisTickSizeTest"></div>

<script>
  // 設定width、height、margin
  const width = 300;
  const height = 200;
  const margin = ( width - height ) / 2;

  // 建立繪製圖表的<svg>
  const axisTickSizeTestSVG = d3.select("#axisTickSizeTest")
                                .append("svg")
                                .attr("width", width)
                                .attr("height", height)
                                .style("border", "1px solid lightgray");

  // 設定比例尺
  const axisTickSizeTestScale = d3.scaleLinear()
                                  .domain([0, 100])
                                  .range([margin, width - margin]);

  // 設定軸線產生方式，以此例來說，代入正數向下延伸，代入負數向上延伸
  const axisTickSizeTestAxisGenerator = d3.axisBottom(axisTickSizeTestScale)
                                          .tickSize(30);

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  axisTickSizeTestSVG.append("g")
                     .call(axisTickSizeTestAxisGenerator)` + "\n" +
'                     .attr("transform", `translate(0, ${ height / 2 })`)' + "\n" +
`</script>`,
              jsCode: null,
              vueCode: 
`<template>
  <svg
    ref="axisTickSizeTestSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = ( width - height ) / 2;

const axisTickSizeTestSvgRef = ref(null);

onMounted(() => {
  // 設定比例尺
  const axisTickSizeTestScale = d3.scaleLinear()
                                  .domain([0, 100])
                                  .range([margin, width - margin]);

  // 設定軸線產生方式，以此例來說，代入正數向下延伸，代入負數向上延伸
  const axisTickSizeTestAxisGenerator = d3.axisBottom(axisTickSizeTestScale)
                                          .tickSize(30);

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select(axisTickSizeTestSvgRef.value)
    .append("g")
    .call(axisTickSizeTestAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`);' + "\n" +
`});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "<code>axis.tickSizeInner()</code>、<code>axis.tickSizeOuter()</code> 分開調整長度",
            detailSubtitle: "D3.js 的刻度線段分成 Inner 與 Outer，可分開調整。",
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsAxesNote/D3jsAxisTickSizeIOTestDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="axisTickSizeIOTest"></div>

<script>
  // 設定width、height、margin
  const width = 300;
  const height = 200;
  const margin = ( width - height ) / 2;
  const zodiacData = ['鼠', '牛', '虎', '兔', '龍', '蛇', '馬', '羊', '猴', '雞', '狗', '豬'];

  // 建立繪製圖表的<svg>
  d3.select("#axisTickSizeIOTest")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid lightgray");

  // 設定比例尺
  const axisTickSizeIOTestScale = d3.scaleBand()
                                    .domain(zodiacData)
                                    .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisTickSizeIOTestAxisGeneratorInner = d3.axisBottom(axisTickSizeIOTestScale)
                                                 .tickSizeInner(30);  // 調Inner用這個
                                                 // .tickSizeOuter(30);  調Outer用這個

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select("#axisTickSizeIOTest svg")
    .append("g")
    .call(axisTickSizeIOTestAxisGeneratorInner)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`);' + "\n" +
`</script>`,
              jsCode: null,
              vueCode: 
`<template>
  <svg
    ref="axisTickSizeIOTestSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = ( width - height ) / 2;

const axisTickSizeIOTestSvgRef =ref(null);

const zodiacData = ["鼠", "牛", "虎", "兔", "龍", "蛇", "馬", "羊", "猴", "雞", "狗", "豬"];

onMounted(() => {
  // 設定比例尺
  const axisTickSizeIOTestScale = d3.scaleBand()
                                    .domain(zodiacData)
                                    .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisTickSizeIOTestAxisGeneratorInner = d3.axisBottom(axisTickSizeIOTestScale)
                                                 .tickSizeInner(30);  // 調Inner用這個
                                                 // .tickSizeOuter(30);  調Outer用這個

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select(axisTickSizeIOTestSvgRef.value)
    .append("g")
    .call(axisTickSizeIOTestAxisGeneratorInner)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`);' + "\n" +
`});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "<code>axis.tickSizeInner()</code>、<code>axis.tickSizeOuter()</code> 無法完全分開調整長度？",
            detailSubtitle: "由於 Outer 刻度其實並非刻度線段之一，而是隸屬軸線，所以 Outer 在某些情況下會和首末 Inner 刻度線段重疊，例如使用連續性比例尺（d3.scaleLinear）時。",
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsAxesNote/D3jsAxisTickSizeIO2TestDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="axisTickSizeIO2Test"></div>

<script>
  // 設定width、height、margin
  const width = 300;
  const height = 200;
  const margin = ( width - height ) / 2;

  // 建立繪製圖表的<svg>
  d3.select("#axisTickSizeIO2Test")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid lightgray");

  // 設定比例尺
  const axisTickSizeIO2TestScale = d3.scaleLinear()
                                     .domain([0, 100])
                                     .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisTickSizeIO2TestAxisGeneratorInner = d3.axisBottom(axisTickSizeIO2TestScale)
                                                  .tickSizeInner(30);  // 調Inner用這個
                                                  // .tickSizeOuter(30);  調Outer用這個

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select("#axisTickSizeIO2Test svg")
    .append("g")
    .call(axisTickSizeIO2TestAxisGeneratorInner)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`)' + "\n" +
`</script>`,
              jsCode: null,
              vueCode: 
`<template>
  <svg
    ref="axisTickSizeIO2TestSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = ( width - height ) / 2;

const axisTickSizeIO2TestSvgRef = ref(null);

onMounted(() => {
  // 設定比例尺
  const axisTickSizeIO2TestScale = d3.scaleLinear()
                                     .domain([0, 100])
                                     .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisTickSizeIO2TestAxisGeneratorInner = d3.axisBottom(axisTickSizeIO2TestScale)
                                                  .tickSizeInner(30);  // 調Inner用這個
                                                  // .tickSizeOuter(30);  調Outer用這個

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select(axisTickSizeIO2TestSvgRef.value)
    .append("g")
    .call(axisTickSizeIO2TestAxisGeneratorInner)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`)' + "\n" +
`});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "<code>axis.tickPadding()</code> 調整刻度線段與文字標籤的距離",
            detailSubtitle: "刻度線段與文字標籤的距離預設為 3。",
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsAxesNote/D3jsAxisTickPaddingTestDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="axisTickPaddingTest"></div>

<script>
  // 設定width、height、margin
  const width = 300;
  const height = 200;
  const margin = ( width - height ) / 2;

  // 建立繪製圖表的<svg>
  d3.select("#axisTickPaddingTest")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid lightgray");

  // 設定比例尺
  const axisTickPaddingTestScale = d3.scaleLinear()
                                     .domain([0, 100])
                                     .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisTickPaddingTestAxisGenerator = d3.axisBottom(axisTickPaddingTestScale)
                                             .tickPadding(30);

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select("#axisTickPaddingTest svg")
    .append("g")
    .call(axisTickPaddingTestAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`);' + "\n" +
`</script>`,
              jsCode: null,
              vueCode: 
`<template>
  <svg
    ref="axisTickPaddingTestSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = ( width - height ) / 2;

const axisTickPaddingTestSvgRef = ref(null);

onMounted(() => {
  // 設定比例尺
  const axisTickPaddingTestScale = d3.scaleLinear()
                                     .domain([0, 100])
                                     .range([margin, width - margin]);

  // 設定軸線產生方式
  const axisTickPaddingTestAxisGenerator = d3.axisBottom(axisTickPaddingTestScale)
                                             .tickPadding(30);

  // 建立<g>元素並呼叫軸線產生方式，生成軸線
  d3.select(axisTickPaddingTestSvgRef.value)
    .append("g")
    .call(axisTickPaddingTestAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`);' + "\n" +
`});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "建立 x、y 軸",
            detailSubtitle: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsAxesNote/D3jsXYAxesDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="xyAxes"></div>

<script>
  // 設定width、height、margin
  const width = 300;
  const height = 200;
  const margin = ( width - height ) / 2;

  // 給定的數據
  const xyAxesData = [{x: 100, y: 20}, {x: 18, y: 30}, {x: 90, y: 250}];

  // 建立繪製圖表的<svg>
  const xyAxesSVG = d3.select("#xyAxes")
                      .append("svg")
                      .attr("width", width)
                      .attr("height", height)
                      .style("border", "1px solid lightgray");

  // 抓出x軸、y軸需要用到的資料
  const xyAxesXData = xyAxesData.map((d) => d.x);
  const xyAxesYData = xyAxesData.map((d) => d.y);

  // x比例尺與軸線
  const xyAxesXScale = d3.scaleLinear()
                         .domain([0, d3.max(xyAxesXData)])
                         .range([margin, width - margin])
                         .nice();
  const xyAxesXAxisGenerator = d3.axisBottom(xyAxesXScale)
                                 .ticks(10);  // 調整數量，讓間距看起來跟y軸差不多

  // y比例尺與軸線
  const xyAxesYScale = d3.scaleLinear()
                         .domain([0, d3.max(xyAxesYData)])
                         .range([height - margin * 2, 0])
                         .nice();
  const xyAxesYAxisGenerator = d3.axisLeft(xyAxesYScale)
                                 .ticks(5)  // 調整數量，讓間距看起來跟x軸差不多
                                 .tickSizeOuter(0);  // 消除非整數倍的刻度線段

  // 建立<g>元素並呼叫軸線產生方式，分別生成x與y軸線
  xyAxesSVG.append("g")
           .call(xyAxesXAxisGenerator)` + "\n" +
'           .attr("transform", `translate(0, ${ height - margin })`);' + "\n" +
`
  xyAxesSVG.append("g")
           .call(xyAxesYAxisGenerator)` + "\n" +
'           .attr("transform", `translate(${margin}, ${margin})`);' + "\n" +
`</script>`,
              jsCode: null,
              vueCode: 
`<template>
  <svg
    ref="xyAxesSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = ( width - height ) / 2;

const xyAxesSvgRef = ref(null);

// 給定的數據
const data = [
  {x: 100, y: 20},
  {x: 18, y: 30},
  {x: 90, y: 250}
];

// 抓出x軸、y軸需要用到的資料
const xData = data.map((d) => d.x);
const yData = data.map((d) => d.y);

onMounted(() => {
  // x比例尺與軸線
  const xScale = d3.scaleLinear()
                   .domain([0, d3.max(xData)])
                   .range([margin, width - margin])
                   .nice();
  const xAxisGenerator = d3.axisBottom(xScale)
                           .ticks(10);  // 調整數量，讓間距看起來跟y軸差不多

  // y比例尺與軸線
  const yScale = d3.scaleLinear()
                   .domain([0, d3.max(yData)])
                   .range([height - margin * 2, 0])
                   .nice();
  const yAxisGenerator = d3.axisLeft(yScale)
                           .ticks(5)  // 調整數量，讓間距看起來跟x軸差不多
                           .tickSizeOuter(0);  // 消除非整數倍的刻度線段

  // 建立<g>元素並呼叫軸線產生方式，分別生成x與y軸線
  d3.select(xyAxesSvgRef.value)
    .append("g")
    .call(xAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height - margin })`);' + "\n" +
`
  d3.select(xyAxesSvgRef.value)
    .append("g")
    .call(yAxisGenerator)` + "\n" +
'    .attr("transform", `translate(${margin}, ${margin})`);' + "\n" +
`});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "建立棋盤軸線樣式的 x、y 軸",
            detailSubtitle: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsAxesNote/D3jsXYAxesCheckerBoardStyleDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="xyAxesCheckerboardStyle"></div>

<script>
  // 設定width、height、margin
  const width = 300;
  const height = 200;
  const margin = ( width - height ) / 2;

  // 給定的數據
  const xyAxesCheckerboardStyleData = [{x: 100, y: 20}, {x: 18, y: 30}, {x: 90, y: 95}];

  // 建立繪製圖表的<svg>
  const xyAxesCheckerboardStyleSVG = d3.select("#xyAxesCheckerboardStyle")
                                       .append("svg")
                                       .attr("width", width)
                                       .attr("height", height)
                                       .style("border", "1px solid lightgray");

  // 抓出x軸、y軸需要用到的資料
  const xyAxesCheckerboardStyleXData = xyAxesCheckerboardStyleData.map((d) => d.x);
  const xyAxesCheckerboardStyleYData = xyAxesCheckerboardStyleData.map((d) => d.y);

  // x比例尺與軸線
  const xyAxesCheckerboardStyleXScale = d3.scaleLinear()
                                          .domain([0, d3.max(xyAxesCheckerboardStyleXData)])
                                          .range([margin, width - margin])
                                          .nice();
  const xyAxesCheckerboardStyleXAxisGenerator = d3.axisBottom(xyAxesCheckerboardStyleXScale)
                                                  .tickSize( -height + margin * 2 )  // y軸線長度
                                                  .tickPadding(7);  // 讓標籤文字跟軸線保持一段距離

  // y比例尺與軸線
  const xyAxesCheckerboardStyleYScale = d3.scaleLinear()
                                          .domain([0, d3.max(xyAxesCheckerboardStyleYData)])
                                          .range([height - margin * 2, 0])
                                          .nice();
  const xyAxesCheckerboardStyleYAxisGenerator = d3.axisLeft(xyAxesCheckerboardStyleYScale)
                                                  .tickSize( -width + margin * 2 )  // x軸線長度
                                                  .tickPadding(7);  // 讓標籤文字跟軸線保持一段距離

  // 建立<g>元素並呼叫軸線產生方式，分別生成x與y軸線
  xyAxesCheckerboardStyleSVG.append("g")
                            .call(xyAxesCheckerboardStyleXAxisGenerator)` + "\n" +
'                            .attr("transform", `translate(0, ${ height - margin })`);' + "\n" +
`
  xyAxesCheckerboardStyleSVG.append("g")
                            .call(xyAxesCheckerboardStyleYAxisGenerator)` + "\n" +
'                            .attr("transform", `translate(${margin}, ${margin})`);' + "\n" +
`</script>`,
              jsCode: null,
              vueCode: 
`<template>
  <svg
    ref="xyAxesCheckerBoardStyleSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = ( width - height ) / 2;

const xyAxesCheckerBoardStyleSvgRef = ref(null);

// 給定的數據
const data = [
  {x: 100, y: 20},
  {x: 18, y: 30},
  {x: 90, y: 95}
];

// 抓出x軸、y軸需要用到的資料
const xData = data.map((d) => d.x);
const yData = data.map((d) => d.y);

onMounted(() => {
  // x比例尺與軸線
  const xScale = d3.scaleLinear()
                   .domain([0, d3.max(xData)])
                   .range([margin, width - margin])
                   .nice();
  const xAxisGenerator = d3.axisBottom(xScale)
                           .tickSize( -height + margin * 2 )  // y軸線長度
                           .tickPadding(7);  // 讓標籤文字跟軸線保持一段距離

  // y比例尺與軸線
  const yScale = d3.scaleLinear()
                   .domain([0, d3.max(yData)])
                   .range([height - margin * 2, 0])
                   .nice();
  const yAxisGenerator = d3.axisLeft(yScale)
                           .tickSize( -width + margin * 2 )  // x軸線長度
                           .tickPadding(7);  // 讓標籤文字跟軸線保持一段距離

  // 建立<g>元素並呼叫軸線產生方式，分別生成x與y軸線
  d3.select(xyAxesCheckerBoardStyleSvgRef.value)
    .append("g")
    .call(xAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height - margin })`);' + "\n" +
`
  d3.select(xyAxesCheckerBoardStyleSvgRef.value)
    .append("g")
    .call(yAxisGenerator)` + "\n" +
'    .attr("transform", `translate(${margin}, ${margin})`);' + "\n" +
`});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "建立井字軸線樣式的 x、y 軸",
            detailSubtitle: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsAxesNote/D3jsXYAxesHashtagStyleDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="xyAxesHashtagStyle"></div>

<script>
  // 設定width、height、margin
  const width = 300;
  const height = 200;
  const margin = ( width - height ) / 2;

  // 給定的數據
  const xyAxesHashtagStyleData = [{x: 100, y: 20}, {x: 18, y: 30}, {x: 90, y: 95}];

  // 建立繪製圖表的<svg>
  const xyAxesHashtagStyleSVG = d3.select("#xyAxesHashtagStyle")
                                  .append("svg")
                                  .attr("width", width)
                                  .attr("height", height)
                                  .style("border", "1px solid lightgray");

  // 抓出x軸、y軸需要用到的資料
  const xyAxesHashtagStyleXData = xyAxesHashtagStyleData.map((d) => d.x);
  const xyAxesHashtagStyleYData = xyAxesHashtagStyleData.map((d) => d.y);

  // x比例尺與軸線
  const xyAxesHashtagStyleXScale = d3.scaleLinear()
                                     .domain([0, d3.max(xyAxesHashtagStyleXData)])
                                     .range([margin, width - margin])
                                     .nice();
  const xyAxesHashtagStyleXAxisGenerator = d3.axisBottom(xyAxesHashtagStyleXScale)
                                             .tickSize( -height + margin )  // y軸線長度
                                             .tickSizeOuter(0)
                                             .tickPadding( margin / 2 + 7 );  // 讓標籤文字跟軸線保持一段距離

  // y比例尺與軸線
  const xyAxesHashtagStyleYScale = d3.scaleLinear()
                                     .domain([0, d3.max(xyAxesHashtagStyleYData)])
                                     .range([height - margin * 2, 0])
                                     .nice();
  const xyAxesHashtagStyleYAxisGenerator = d3.axisLeft(xyAxesHashtagStyleYScale)
                                             .tickSize( -width + margin )  // x軸線長度
                                             .tickSizeOuter(0)
                                             .tickPadding( margin - 20 );  // 讓標籤文字跟軸線保持一段距離

  // 建立<g>元素並呼叫軸線產生方式，分別生成x與y軸線
  xyAxesHashtagStyleSVG.append("g")
                       .attr("id", "xyAxesHashtagStyleXAxis")
                       .call(xyAxesHashtagStyleXAxisGenerator)` + "\n" +
'                       .attr("transform", `translate(0, ${ height - margin })`)' + "\n" +
`                       .selectAll("#xyAxesHashtagStyleXAxis line")` + "\n" +
'                       .attr("transform", `translate(0, ${ margin / 2 })`);' + "\n" +
`
  xyAxesHashtagStyleSVG.append("g")
                       .attr("id", "xyAxesHashtagStyleYAxis")
                       .call(xyAxesHashtagStyleYAxisGenerator)` + "\n" +
'                       .attr("transform", `translate(${margin}, ${margin})`)' + "\n" +
`                       .selectAll("#xyAxesHashtagStyleYAxis line")` + "\n" +
'                       .attr("transform", `translate(${ -margin / 2 }, 0)`);' + "\n" +
`</script>`,
              jsCode: null,
              vueCode: 
`<template>
  <svg
    ref="xyAxesHashtagStyleSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = ( width - height ) / 2;

const xyAxesHashtagStyleSvgRef = ref(null);

// 給定的數據
const data = [
  {x: 100, y: 20},
  {x: 18, y: 30},
  {x: 90, y: 95}
];

// 抓出x軸、y軸需要用到的資料
const xData = data.map((d) => d.x);
const yData = data.map((d) => d.y);

onMounted(() => {
  // x比例尺與軸線
  const xScale = d3.scaleLinear()
                   .domain([0, d3.max(xData)])
                   .range([margin, width - margin])
                   .nice();
  const xAxisGenerator = d3.axisBottom(xScale)
                           .tickSize( -height + margin )  // y軸線長度
                           .tickSizeOuter(0)
                           .tickPadding( margin / 2 + 7 );  // 讓標籤文字跟軸線保持一段距離

  // y比例尺與軸線
  const yScale = d3.scaleLinear()
                   .domain([0, d3.max(yData)])
                   .range([height - margin * 2, 0])
                   .nice();
  const yAxisGenerator = d3.axisLeft(yScale)
                           .tickSize( -width + margin )  // x軸線長度
                           .tickSizeOuter(0)
                           .tickPadding( margin - 20 );  // 讓標籤文字跟軸線保持一段距離

  // 建立<g>元素並呼叫軸線產生方式，分別生成x與y軸線
  d3.select(xyAxesHashtagStyleSvgRef.value)
    .append("g")
    .call(xAxisGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height - margin })`)' + "\n" +
`    .selectAll("line")` + "\n" +
'    .attr("transform", `translate(0, ${ margin / 2 })`);' + "\n" +
`
  d3.select(xyAxesHashtagStyleSvgRef.value)
    .append("g")
    .call(yAxisGenerator)` + "\n" +
'    .attr("transform", `translate(${margin}, ${margin})`)' + "\n" +
`    .selectAll("line")` + "\n" +
'    .attr("transform", `translate(${ -margin / 2 }, 0)`);' + "\n" +
`});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "建立 Grid 軸線樣式的 x、y 軸",
            detailSubtitle: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsAxesNote/D3jsXYAxesGridStyleDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="xyAxesGridStyle"></div>

<script>
  // 設定width、height、margin
  const width = 300;
  const height = 200;
  const margin = ( width - height ) / 2;

  // 給定的數據
  const xyAxesGridStyleData = [{x: 100, y: 20}, {x: 18, y: 30}, {x: 105, y: 250}];

  // 建立繪製圖表的<svg>
  const xyAxesGridStyleSVG = d3.select("#xyAxesGridStyle")
                               .append("svg")
                               .attr("width", width)
                               .attr("height", height)
                               .style("border", "1px solid lightgray");

  // 抓出x軸、y軸需要用到的資料
  const xyAxesGridStyleXData = xyAxesGridStyleData.map((d) => d.x);
  const xyAxesGridStyleYData = xyAxesGridStyleData.map((d) => d.y);

  // x比例尺與軸線
  const xyAxesGridStyleXScale = d3.scaleLinear()
                                  .domain([0, d3.max(xyAxesGridStyleXData)])
                                  .range([margin, width - margin]);
                                  // .nice();  // 加不加'.nice()'看情況
  const xyAxesGridStyleXAxisGenerator = d3.axisBottom(xyAxesGridStyleXScale)
                                          .ticks(10)  // 調整數量，讓間距看起來跟y軸差不多
                                          .tickSizeOuter(0);  // 消除非整數倍的刻度線段

  // y比例尺與軸線
  const xyAxesGridStyleYScale = d3.scaleLinear()
                                  .domain([0, d3.max(xyAxesGridStyleYData)])
                                  .range([height - margin * 2, 0])
                                  .nice();  // 加不加'.nice()'看情況
  const xyAxesGridStyleYAxisGenerator = d3.axisLeft(xyAxesGridStyleYScale)
                                          .ticks(5)  // 調整數量，讓間距看起來跟x軸差不多
                                          .tickSizeOuter(0);  // 消除非整數倍的刻度線段

  // 建立<g>元素並呼叫軸線產生方式，分別生成x與y軸線
  xyAxesGridStyleSVG.append("g")
                    .attr("id", "xyAxesGridStyleXAxis")  // 增加id，方便之後選擇而用以增添不同色軸線
                    .call(xyAxesGridStyleXAxisGenerator)` + "\n" +
'                    .attr("transform", `translate(0, ${ height - margin })`);' + "\n" +
`
  xyAxesGridStyleSVG.append("g")
                    .attr("id", "xyAxesGridStyleYAxis")  // 增加id，方便之後選擇而用以增添不同色軸線
                    .call(xyAxesGridStyleYAxisGenerator)` + "\n" +
'                    .attr("transform", `translate(${margin}, ${margin})`);' + "\n" +
`
  // 繪製x軸向上的不同色軸線
  xyAxesGridStyleSVG.selectAll("#xyAxesGridStyleXAxis .tick")  // '.tick'為預設的class名稱
                    .append("line")
                    .attr("x1", 0)
                    .attr("x2", 0)
                    .attr("y1", 0)
                    .attr("y2", -height + margin * 2 )
                    .attr("stroke", "#e4e4e4");

  // 繪製y軸向右的不同色軸線
  xyAxesGridStyleSVG.selectAll("#xyAxesGridStyleYAxis .tick")  // '.tick'為預設的class名稱
                    .filter((d, i) => i !== 0)  // 不繪製第一條與x軸重疊的y軸線
                    .append("line")
                    .attr("x1", 0)
                    .attr("x2", width - margin * 2)
                    .attr("y1", 0)
                    .attr("y2", 0)
                    .attr("stroke", "#e4e4e4");
</script>`,
              jsCode: null,
              vueCode: 
`<template>
  <svg
    ref="xyAxesGridStyleSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = ( width - height ) / 2;

const xyAxesGridStyleSvgRef = ref(null);

// 給定的數據
const data = [
  {x: 100, y: 20},
  {x: 18, y: 30},
  {x: 105, y: 250}
];

// 抓出x軸、y軸需要用到的資料
const xData = data.map((d) => d.x);
const yData = data.map((d) => d.y);

onMounted(() => {
  const svg = d3.select(xyAxesGridStyleSvgRef.value);

  // x比例尺與軸線
  const xScale = d3.scaleLinear()
                   .domain([0, d3.max(xData)])
                   .range([margin, width - margin]);
                   // .nice();  // 加不加'.nice()'看情況

  const xAxisGenerator = d3.axisBottom(xScale)
                           .ticks(10)  // 調整數量，讓間距看起來跟y軸差不多
                           .tickSizeOuter(0);  // 消除非整數倍的刻度線段

  // y比例尺與軸線
  const yScale = d3.scaleLinear()
                   .domain([0, d3.max(yData)])
                   .range([height - margin * 2, 0])
                   .nice();  // 加不加'.nice()'看情況

  const yAxisGenerator = d3.axisLeft(yScale)
                           .ticks(5)  // 調整數量，讓間距看起來跟x軸差不多
                           .tickSizeOuter(0);  // 消除非整數倍的刻度線段

  // 建立<g>元素並呼叫軸線產生方式，先分別生成x與y軸線，再繪製x軸向上與y軸向右的不同色軸線
  svg.append("g")
     .call(xAxisGenerator)` + "\n" +
'     .attr("transform", `translate(0, ${ height - margin })`)' + "\n" +
`     .selectAll(".tick")  // '.tick'為預設的class名稱
     .append("line")
     .attr("x1", 0)
     .attr("x2", 0)
     .attr("y1", 0)
     .attr("y2", -height + margin * 2 )
     .attr("stroke", "#e4e4e4");

  svg.append("g")
     .call(yAxisGenerator)` + "\n" +
'     .attr("transform", `translate(${margin}, ${margin})`)' + "\n" +
`     .selectAll(".tick")  // '.tick'為預設的class名稱
     .filter((d, i) => i !== 0)  // 不繪製第一條與x軸重疊的y軸線
     .append("line")
     .attr("x1", 0)
     .attr("x2", width - margin * 2)
     .attr("y1", 0)
     .attr("y2", 0)
     .attr("stroke", "#e4e4e4");
});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "文字標籤旋轉",
            detailSubtitle: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsAxesNote/D3jsXYAxesTickTextRotationDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="xyAxesTickTextRotation"></div>

<script>
  // 設定width、height、margin
  const width = 300;
  const height = 200;
  const margin = ( width - height ) / 2;

  // 給定的數據
  const xyAxesTickTextRotationData = [
    {x: new Date(2024, 0), y: 30},
    {x: new Date(2024, 2), y: 80},
    {x: new Date(2024, 8), y: 90},
    {x: new Date(2024, 11), y: 20},
  ];

  // 建立繪製圖表的<svg>
  const xyAxesTickTextRotationSVG = d3.select("#xyAxesTickTextRotation")
                                      .append("svg")
                                      .attr("width", width)
                                      .attr("height", height)
                                      .style("border", "1px solid lightgray");

  // 抓出x軸、y軸需要用到的資料
  const xyAxesTickTextRotationXData = xyAxesTickTextRotationData.map((d) => d.x);
  const xyAxesTickTextRotationYData = xyAxesTickTextRotationData.map((d) => d.y);

  // x比例尺與軸線
  const xyAxesTickTextRotationXScale = d3.scaleTime()
                                         .domain([new Date(2024, 0), new Date(2024, 11)])
                                         .range([margin, width - margin]);
  const xyAxesTickTextRotationXAxisGenerator = d3.axisBottom(xyAxesTickTextRotationXScale)
                                                 .tickFormat(d3.timeFormat("%Y-%m-%d"))
                                                 .tickSize(10);  // 延長刻度線，方便判讀

  // y比例尺與軸線
  const xyAxesTickTextRotationYScale = d3.scaleLinear()
                                         .domain([0, d3.max(xyAxesTickTextRotationYData)])
                                         .range([height - margin * 2, 0]);
  const xyAxesTickTextRotationYAxisGenerator = d3.axisLeft(xyAxesTickTextRotationYScale)
                                                 .ticks(5)
                                                 .tickSize(10)  // 延長刻度線，方便判讀
                                                 .tickSizeOuter(0);  // 消除非整數倍的刻度線段                          

  // 建立<g>元素並呼叫軸線產生方式，分別生成x與y軸線
  xyAxesTickTextRotationSVG.append("g")
                           .attr("id", "xyAxesTickTextRotationXAxis")  // 增加id，方便之後選擇而用以增添不同色軸線
                           .call(xyAxesTickTextRotationXAxisGenerator)` + "\n" +
'                           .attr("transform", `translate(0, ${ height - margin - 15})`);' + "\n" +
`
  xyAxesTickTextRotationSVG.append("g")
                           .call(xyAxesTickTextRotationYAxisGenerator)` + "\n" +
'                           .attr("transform", `translate(${margin}, ${margin - 15})`);' + "\n" +
`
  // 旋轉x軸上的文字標籤
  xyAxesTickTextRotationSVG.selectAll("#xyAxesTickTextRotationXAxis text")  // '.tick'為預設的class名稱
                           .attr("transform", "translate(-27, 22) rotate(-45)");
</script>`,
              jsCode: null,
              vueCode: 
`<template>
  <svg
    ref="xyAxesTickTextRotationSvgRef"
    :width="width"
    :height="height"
    style="border: 1px solid lightgray;"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 300;
const height = 200;
const margin = ( width - height ) / 2;

const xyAxesTickTextRotationSvgRef = ref(null);

// 給定的數據
const data = [
  {x: new Date(2024, 0), y: 30},
  {x: new Date(2024, 2), y: 80},
  {x: new Date(2024, 8), y: 90},
  {x: new Date(2024, 11), y: 20},
];

// 抓出x軸、y軸需要用到的資料
const xData = data.map((d) => d.x);
const yData = data.map((d) => d.y);

onMounted(() => {
  const svg = d3.select(xyAxesTickTextRotationSvgRef.value);

  // x比例尺與軸線
  const xScale = d3.scaleTime()
                   .domain([new Date(2024, 0), new Date(2024, 11)])
                   .range([margin, width - margin]);
  const xAxisGenerator = d3.axisBottom(xScale)
                           .tickFormat(d3.timeFormat("%Y-%m-%d"))
                           .tickSize(10);  // 延長刻度線，方便判讀

  // y比例尺與軸線
  const yScale = d3.scaleLinear()
                   .domain([0, d3.max(yData)])
                   .range([height - margin * 2, 0]);
  const yAxisGenerator = d3.axisLeft(yScale)
                           .ticks(5)
                           .tickSize(10)  // 延長刻度線，方便判讀
                           .tickSizeOuter(0);  // 消除非整數倍的刻度線段                          

  // 建立<g>元素並呼叫軸線產生方式，分別生成x與y軸線
  svg.append("g")
     .call(xAxisGenerator)` + "\n" +
'     .attr("transform", `translate(0, ${ height - margin - 15})`)' + "\n" +
`     .selectAll("text")  // '.tick'為預設的class名稱
     .attr("transform", "translate(-27, 22) rotate(-45)");  // 旋轉x軸上的文字標籤

  svg.append("g")
     .call(yAxisGenerator)` + "\n" +
'     .attr("transform", `translate(${margin}, ${margin - 15})`);' + "\n" +
`});
</script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "時鐘刻度軸線",
            detailSubtitle: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsAxesNote/D3jsClockAxisDemo.vue")
            ),
            detailCode: {
              htmlCode: 
`<div id="clockAxisTest"></div>

<script>
  // 設定繪製圖表的<svg>大小，並建立之
  const height = 300;
  const width = height;
  const SVG = d3.select("#clockAxisTest")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .style("border", "1px solid lightgray");

  // 設定變數
  const clockRadius = height / 3;  // 時鐘半徑，設定為<svg>高度的三分之一
  const minuteTickInnerRadius = clockRadius - 10;  // 分鐘刻度線長度，設定為10
  const hourTickInnerRadius = clockRadius - 17;  // 小時刻度線長度，設定為17
  const degToRad = Math.PI / 180;  // 弧度，將度數轉換為弧度
  const minuteLabelRadius = clockRadius + 15;  // 分鐘文字標籤半徑，設定為時鐘半徑+15
  const minuteLabelYOffset = 5;  // 分鐘文字標籤Y方向的偏移量（y位置為文字基線，需再修正），避免標籤與刻度線重疊
  const hourLabelRadius = clockRadius - 35;  // 小時文字標籤半徑，設定為時鐘半徑-15
  const hourLabelYOffset = 6;  // 小時文字標籤Y方向上的偏移量（y位置為文字基線，需再修正）

  // 設定小時刻度比例尺和分鐘刻度比例尺
  // 小時比例尺（12小時映射到360度）
  const hourScale = d3.scaleLinear()
                      .domain([0, 12])
                      .range([0, 360]);
  // 分鐘比例尺（60分鐘映射到360度）
  const minuteScale = d3.scaleLinear()
                        .domain([0, 60])
                        .range([0, 360]);

  // 建立<g>，起始點移動到<svg>中心
  const G = SVG.append("g")` + "\n" +
'               .attr("transform", `translate(${[Math.round( width / 2 ), Math.round( height / 2 )]})`);' + "\n" +
`
  // 分鐘刻度
  G.selectAll(".minuteTicks")
   .data(d3.range(0, 60))  // 建立0到59的數列
   .enter()
   .append("line")
   .attr("class", "minuteTicks")
   .attr("x1", "0")
   .attr("x2", "0")
   .attr("y1", clockRadius)
   .attr("y2", minuteTickInnerRadius)
   .attr("stroke-width", "3")
   .attr("stroke", "black")` + "\n" +
'   .attr("transform", (d) => `rotate(${minuteScale(d)})`);' + "\n" +
`
  // 分鐘數字標籤
  G.selectAll(".minuteLabels")
   .data(d3.range(5, 61, 5))  // 5到60，間隔5
   .enter()
   .append("text")
   .attr("class", "minuteLabels")
   .attr("x", (d) => minuteLabelRadius * Math.sin(minuteScale(d) * degToRad))  // 標籤的半徑乘以sin(比例尺承弧度)
   .attr("y", (d) => -minuteLabelRadius * Math.cos(minuteScale(d) * degToRad) + minuteLabelYOffset)  // 標籤的半徑乘以cos(比例尺承弧度)
   .text((d) => d)
   .attr("text-anchor", "middle")
   .attr("font-size", "14")
   .style("fill", "#a0a0a0");

  // 時鐘刻度
  G.selectAll(".hourTicks")
   .data(d3.range(0, 12))  // 建立0到11的數列
   .enter()
   .append("line")
   .attr("class", "hourTicks")
   .attr("x1", "0")
   .attr("x2", "0")
   .attr("y1", clockRadius)
   .attr("y2", hourTickInnerRadius)
   .attr("stroke-width", "5")
   .attr("stroke", "black")` + "\n" +
'   .attr("transform", (d) => `rotate(${hourScale(d)})`);' + "\n" +
`
  // 時鐘數字標籤
  G.selectAll(".hourLabels")
   .data(d3.range(3, 13, 3))  // 3到12，間隔3
   .enter()
   .append("text")
   .attr("class", "hourLabels")
   .attr("x", (d) => hourLabelRadius * Math.sin(hourScale(d) * degToRad))  // 標籤的半徑乘以sin(比例尺承弧度)
   .attr("y", (d) => -hourLabelRadius * Math.cos(hourScale(d) * degToRad) + hourLabelYOffset)  // 標籤的半徑乘以cos(比例尺承弧度)
   .text((d) => d)
   .attr("text-anchor", "middle")
   .style("font-weight", "bolder");
</script>`,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "響應式圖表",
            detailSubtitle: "使用現有寬度來調整寬度大小（需重新整理）。當放置在 Bootstrap 標籤頁（Tabs）裡非首頁時，渲染可能會失敗。",
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<div id="RWDAxisTest"></div>

<script>
  // 設定width、height、margin
  const RWDAxisTestCurrentWidth = parseInt(d3.select("#RWDAxisTest").style("width"));
  const height = 300;
  const RWDAxisTestCurrentMargin = ( RWDAxisTestCurrentWidth - height ) / 2;

  // 建立繪製圖表的<svg>
  d3.select("#RWDAxisTest")
    .append("svg")
    .attr("width", RWDAxisTestCurrentWidth)
    .attr("height", height)
    .style("border", "1px solid rgb(96, 96, 96)");

  // 設定比例尺
  const RWDAxisTestScale = d3.scaleLinear()
                             .domain([0, 100])
                             .range([RWDAxisTestCurrentMargin, RWDAxisTestCurrentWidth - RWDAxisTestCurrentMargin]);

  // 設定軸線產生方式
  const RWDAxisTestGenerator = d3.axisBottom(RWDAxisTestScale);

  // 再建立<g>元素，並呼叫軸線產生方法，生成軸線
  d3.select("#RWDAxisTest svg")
    .append("g")
    .call(RWDAxisTestGenerator)` + "\n" +
'    .attr("transform", `translate(0, ${ height / 2 })`);' + "\n" +
`</script>`,
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
        listTitle: "動畫（Transition）",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "瞬間移動",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<svg id="move" class="mt-1" style="border: 1px solid rgb(103, 102, 102);"></svg><br>
<button id="moveBtn" class="btn btn-primary mt-2" type="button">移動</button>
<button id="moveBtnReset" class="btn btn-primary mt-2 ms-1" type="button">回復</button>

<script>
  const moveRect = d3.select("#move")
                     .append("rect")
                     .attr("width", 40)
                     .attr("height", 40)
                     .attr("fill", "#f68b47")
                     .attr("stroke", "#f68b47");
  
  document.querySelector("#moveBtn").addEventListener("click", () => {
    moveRect.attr("transform", "translate(140, 60)");
  });

  document.querySelector("#moveBtnReset").addEventListener("click", () => {
    moveRect.attr("transform", "translate(0, 0)");
  });
</script>`,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>selection.transition()</code> 平滑移動",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<svg id="transition" class="mt-1" style="border: 1px solid rgb(103, 102, 102);"></svg><br>
<button id="transitionBtn" class="btn btn-primary mt-2" type="button">移動</button>
<button id="transitionBtnReset" class="btn btn-primary mt-2 ms-1" type="button">回復</button>

<script>
  const transitionRect = d3.select("#transition")
                           .append("rect")
                           .attr("width", 40)
                           .attr("height", 40)
                           .attr("fill", "#f68b47")
                           .attr("stroke", "#f68b47");
  
  document.querySelector("#transitionBtn").addEventListener("click", () => {
    transitionRect.transition()  // 使用transition()
                  .attr("transform", "translate(140, 60)");
  });

  document.querySelector("#transitionBtnReset").addEventListener("click", () => {
    transitionRect.attr("transform", "translate(0, 0)");
  });
</script>`,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>transition.duration()</code> 設定持續時間",
            detailSubtitle: "單位：ms。",
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<svg id="transitionDuration" class="mt-1" style="border: 1px solid rgb(103, 102, 102);"></svg><br>
<button id="transitionDurationBtn" class="btn btn-primary mt-2" type="button">移動</button>
<button id="transitionDurationBtnReset" class="btn btn-primary mt-2 ms-1" type="button">回復</button>

<script>
  const transitionDurationRect = d3.select("#transitionDuration")
                                   .append("rect")
                                   .attr("width", 40)
                                   .attr("height", 40)
                                   .attr("fill", "#f68b47")
                                   .attr("stroke", "#f68b47");
  
  document.querySelector("#transitionDurationBtn").addEventListener("click", () => {
    transitionDurationRect.transition()
                          .duration(2000)  // 設定動畫時間持續2秒鐘
                          .attr("transform", "translate(140, 60)");
  });

  document.querySelector("#transitionDurationBtnReset").addEventListener("click", () => {
    transitionDurationRect.attr("transform", "translate(0, 0)");
  });
</script>`,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "逐漸改變顏色",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<svg id="transitionColor" class="mt-1" style="border: 1px solid rgb(103, 102, 102);"></svg><br>
<button id="transitionColorBtn" class="btn btn-primary mt-2" type="button">變色</button>
<button id="transitionColorBtnReset" class="btn btn-primary mt-2 ms-1" type="button">回復</button>

<script>
  const transitionColorRect = d3.select("#transitionColor")
                                .append("rect")
                                .attr("width", 40)
                                .attr("height", 40)
                                .attr("fill", "#f68b47")
                                .attr("stroke", "#f68b47")
                                .attr("transform", "translate(140, 60)");
  
  document.querySelector("#transitionColorBtn").addEventListener("click", () => {
    transitionColorRect.transition()
                       .duration(1000)
                       .attr("fill", "green")
                       .attr("stroke-width", 6)
                       .attr("stroke", "red");
  });

  document.querySelector("#transitionColorBtnReset").addEventListener("click", () => {
    transitionColorRect.attr("fill", "#f68b47")
                       .attr("stroke-width", 1)
                       .attr("stroke", "#f68b47");
  });
</script>`,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>transition.delay()</code> 延遲發動動畫的時間",
            detailSubtitle: "本例為逐漸移動再改變顏色",
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<svg id="transitionColorAndDelay" class="mt-1" style="border: 1px solid rgb(103, 102, 102);"></svg><br>
<button id="transitionColorAndDelayBtn" class="btn btn-primary mt-2" type="button">開始動作</button>
<button id="transitionColorAndDelayBtnReset" class="btn btn-primary mt-2 ms-1" type="button">回復</button>

<script>
  const transitionColorAndDelayRect = d3.select("#transitionColorAndDelay")
                                        .append("rect")
                                        .attr("width", 40)
                                        .attr("height", 40)
                                        .attr("fill", "#f68b47")
                                        .attr("stroke", "#f68b47")
  
  document.querySelector("#transitionColorAndDelayBtn").addEventListener("click", () => {
    transitionColorAndDelayRect.transition()  // 這裡開始第一段動畫
                               .duration(1500)
                               .delay(300)  // 按下按鈕後，延遲0.3秒再執行下列動作
                               .attr("transform", "translate(140, 60)")
                               .transition()  // 這裡開始第二段動畫
                               .delay(500)  // 移動到定位後，延遲0.5秒再執行下列動作
                               .attr("fill", "green")
                               .attr("stroke-width", 6)
                               .attr("stroke", "red");
  });

  document.querySelector("#transitionColorAndDelayBtnReset").addEventListener("click", () => {
    transitionColorAndDelayRect.attr("transform", "translate(0, 0)")
                               .attr("fill", "#f68b47")
                               .attr("stroke-width", 1)
                               .attr("stroke", "#f68b47");
  });
</script>`,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>transition.delay()</code> 動畫逐漸發動",
            detailSubtitle: "本例為球依次移動。",
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<svg id="delayCircleMove" style="border: 1px solid rgb(103, 102, 102);"></svg><br>
<button id="delayCircleMoveBtn" class="btn btn-primary mt-3" type="button">開始動作</button>
<button id="delayCircleMoveBtnReset" class="btn btn-primary mt-3 ms-1" type="button">回復上一動</button>

<script>
  // 用for迴圈設定延遲時間
  const dataDelay = [];
  for (let i = 0; i < 8; i++) {
    dataDelay.push(160 - i * 20);
  };
  // 160 140 120 100 ... 20

  const delayCircleMove = d3.select("#delayCircleMove")
                                .selectAll("circle")
                                .data(dataDelay)
                                .join("circle")
                                .attr("cx", (d) => d)
                                .attr("cy", 30)
                                .attr("r", 15)
                                .attr("fill", "#f48b47")
                                .attr("opacity", 0.5);

  document.querySelector("#delayCircleMoveBtn").addEventListener("click", () => {
    delayCircleMove.transition()
                   .delay((d, i) => i * 200)  // 分別延遲
                   .attr("cx", (d) => d + 120);  // 位移距離
  });

  document.querySelector("#delayCircleMoveBtnReset").addEventListener("click", () => {
    delayCircleMove.transition()
                   .delay((d, i) => 1600 - i * 200)  // 先進後出
                   .attr("cx", (d) => d);  // 回復原位
  });
</script>`,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>transition.ease()</code>",
            detailSubtitle: "ease動畫展示。",
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<svg id="easeDemonstration" class="mt-1" style="border: 1px solid rgb(103, 102, 102);"></svg>
<div class="d-flex align-items-baseline">
  <select name="easeDemonstration" id="easeDemonstrationSelection" class="m-3">
    <option></option>
  </select>
  <button id="easeDemonstrationBtn" class="btn btn-primary mt-3" type="button" onclick="updateEase()">Ease開始</button>
</div>

<script>
  const easeDot = d3.select("#easeDemonstration")
                    .append("circle")
                    .attr("cx", 40)
                    .attr("cy", 40)
                    .attr("r", 30)
                    .attr("fill", "#f68b47");
              
  // 抓出 D3.js 中所有 API 中名稱帶有 ease 開頭的 API
  const easeNames = Object.keys(d3).filter((d) => d.slice(0, 4) === "ease");  // 註：'slice(0, 4)'是將字符串的第0個到第4個字符提取出來（不包含第4個字符）
              
  d3.select("#easeDemonstrationSelection")
    .selectAll("option")
    .data(easeNames)
    .join("option")
    .attr("value", (d) => d)` + "\n" +
'    .text((d) => `d3.${d}`);' + "\n" +
`
  const updateEase = () => {
    const easeName = d3.select("#easeDemonstrationSelection")
                       .node().value;
    easeDot.attr("cx", 40)  // 回原點
           .transition()
           .ease(d3[easeName])  // 設定動畫效果
           .attr("cx", 200);
  };
</script>`,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>transition.on(<i>typename[, 想執行的程式]</i>)</code>",
            detailSubtitle: "<code>typename = ['start', 'end', 'interrupt', 'cancel']</code>",
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<svg id="loopAnimation" style="border: 1px solid rgb(103, 102, 102);"></svg>

<script>
  const loopAnimation = d3.select("#loopAnimation")
                          .append("circle")
                          .attr("cx", 50)
                          .attr("cy", 50)
                          .attr("r", 25)
                          .attr("fill", "#f68b47")
                          .transition()
                          .duration(2000)
                          .on("start", goRight);

  function goRight() {
    d3.active(this)  // 取得正在進行中的過渡效果（transition）的函數
      .attr("cx", 250)
      .transition()
      .on("start", goLeft);
  };

  function goLeft() {
    d3.active(this)  // 取得正在進行中的過渡效果（transition）的函數
      .attr("cx", 50)
      .transition()
      .on("start", goRight);
  };
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
    id: "d3jsMouseEventNote",
    title: "滑鼠事件",
    description: "滑鼠事件，常見的事件有 <strong>點擊</strong>＆<strong>拂過</strong>、<strong>拖曳</strong>、<strong>縮放</strong>、<strong>選取刷</strong>。",
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "點擊＆拂過",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>selection.on()</code> 滑鼠觸發事件 - 點擊",
            detailSubtitle: '點擊事件發生。此處使用 <code>.on("click", listener)</code>。',
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<svg id="clickSVG" style="border: 1px solid rgb(103, 102, 102);"></svg>

<script>
  const clickCircle = d3.select("#clickSVG")
                        .append("circle")
                        .attr("cx", 30)
                        .attr("cy", 20)
                        .attr("r", 20)
                        .attr("fill", "#f68b47")
                        .attr("cursor", "pointer");
  let isMoved = false;  // 用來追蹤圓球是否已經移動

  clickCircle.on("click", (e) => {
    if (!isMoved) {
      d3.select(e.target)
        .transition()
        .ease(d3.easeBack)
        .duration(1000)
        .attr("fill", "blue")
        .attr("transform", "translate(240, 0)");
      isMoved = true;  // 更新狀態為已移動
    } else {
      d3.select(e.target)
        .transition()
        .ease(d3.easeBack)
        .duration(1000)
        .attr("fill", "#f68b47")
        .attr("transform", "translate(0, 0)");
      isMoved = false;  // 更新狀態為未移動
    };
  });
</script>`,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>selection.on()</code> 滑鼠觸發事件 - 拂過",
            detailSubtitle: '滑鼠拂過變色。此處使用 <code>.on("mouseover", listener)</code> 與 <code>.on("mouseleave", listener)</code>。',
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<svg id="mouseoverSVG" style="border: 1px solid rgb(103, 102, 102);"></svg>

<script>
  const mouseoverCircle = d3.select("#mouseoverSVG")
                            .append("circle")
                            .attr("cx", 20)
                            .attr("cy", 20)
                            .attr("r", 50)
                            .attr("cursor", "pointer")
                            .attr("fill", "#f68b47")
                            .attr("transform", "translate(130, 55)");

  mouseoverCircle
    .on("mouseover", (e) => {
      d3.select(e.target)
        .transition()
        .duration(2000)
        .attr("fill", "blue");
    })
    .on("mouseleave", (e) => {
      d3.select(e.target)
        .transition()
        .duration(2000)
        .attr("fill", "#f68b47");
    });
</script>`,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>d3.pointer(<i>event[, target]</i>)</code> 取得 DOM 節點的座標軸座標",
            detailSubtitle: "<code>event</code> 代表進行的事件；<code>target</code> 代表指定（要顯示座標）的目標。",
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<svg id="pointerSVG" style="border: 1px solid rgb(103, 102, 102);"></svg>

<script>
  const pointerSVG = d3.select("#pointerSVG")
                       .attr("width", 500)
                       .attr("height", 300)
                       .attr("cursor", "pointer");
  let pointerTxt = pointerSVG.append("text");

  pointerSVG
    .on("mousemove", (e) => {
      let pointerPosition = d3.pointer(e, pointerSVG.node());

      pointerTxt.attr("x", pointerPosition[0])  // 取[x]
                .attr("y", pointerPosition[1])  // 取[y]` + "\n" +
'                .text(`x: ${parseInt(pointerPosition[0])},' + "\n" +
'                       y: ${parseInt(pointerPosition[1])}`)' + "\n" +
`                .style("display", "block");
    })
    .on("mouseleave", (e) => {
      pointerTxt.style("display", "none");  // 離開SVG後不顯示文字
    });
</script>`,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "工具提示框（Tooltips）",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<div id="tooltip"></div>

<script>
  const tooltipCircle = d3.select("#tooltip")
                          .append("svg")
                          .append("circle")
                          .attr("cx", 80)
                          .attr("cy", 75)
                          .attr("r", 40)
                          .attr("cursor", "pointer")
                          .attr("fill", "#f6cefc");
  const tooltip = d3.select("#tooltip")
                    .style("position", "relative")
                    .append("div")
                    .style("position", "absolute")
                    .style("display", "none")  // 初始隱藏Tooltip
                    .style("border", "1px solid black")
                    .style("border-radius", "5px")
                    .style("padding", "8px")
                    .html(` + "\n" +
'                      `<p>' + "\n" +
`                        <b>我是Tooltip</b><br>
                        這裡可以放入想放入的文字，<br>
                        也可以插入圖片
                       </p>
                       <img src="assets/IMG_2073.jpg" width="60px" class="d-inline-block">` + "\n" +
'                      `);' + "\n" +
`
  // 加上滑鼠事件
  tooltipCircle
    .on("mouseover", (e) => {
      tooltip.style("display", "block");  
    })
    .on("mousemove", (e) => {
      tooltip.style("top", "-5px")
             .style("left", "180px");
    })
    .on("mouseleave", (e) => {
      tooltip.style("display", "none");
    });
</script>`,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "進階工具提示框（Tooltips）",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<div id="d3jsMouseEventAdvancedTooltip"></div>

<script>
  const data = [
    {r: 17, x: 134, y: 181},
    {r: 23, x: 294, y: 131},
    {r: 14, x: 84, y: 273},
    {r: 9, x: 323, y: 59},
    {r: 18, x: 172, y: 251},
    {r: 26, x: 404, y: 154}
  ];
  const svg = d3.select("#d3jsMouseEventAdvancedTooltip")
                .append("svg")
                .style("border", "1px solid rgb(103, 102, 102)")
                .attr("width", 500)
                .attr("height", 300);
  
  // 設定顏色
  const rData = data.map((d) => d.r);
  const colors = d3.scaleOrdinal(d3.schemeTableau10)  // 因'd3.schemeTableau10'已預設輸出域，所以不有另設定'.range()'
                   .domain(rData);

  // 建立圓點
  const dots = svg.selectAll("circle")
                  .data(data)
                  .join("circle")
                  .attr("cx", (d) => d.x)
                  .attr("cy", (d) => d.y)
                  .attr("r", (d) => d.r)
                  .attr("fill", (d) => colors(d.x))
                  .style("cursor", "pointer");

  // 建立tooltip
  const tooltip = d3.select("#d3jsMouseEventAdvancedTooltip")
                    .style("position", "relative")
                    .append("div")
                    .style("display", "none")
                    .style("position", "absolute")
                    .style("background-color", "white")
                    .style("border", "2px solid")
                    .style("border-radius", "5px")
                    .style("padding", "5px");

  // 顯示tooltip
  dots
    .on("mouseover", (e) => {
      tooltip.style("display", "block");
    })
    .on("mousemove", (e) => {
      let pt = d3.pointer(e, e.target);  // 抓圓點位置` + "\n" +
'      tooltip.style("left", `${pt[0] + 30}px`)  // 設定tooltip的水平位置' + "\n" +
'             .style("top", `${pt[1]}px`)  // 設定tooltip的垂直位置' + "\n" +
'             .html(`圓半徑：${e.target.__data__.r}`);' + "\n" +
`    })
    .on("mouseleave", (e) => {
      tooltip.style("display", "none");
    });
</script>`,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "插入其他 html 頁面",
            detailSubtitle: "點擊以打開包含其他 web 的 Tooltip，再點擊一次關閉。",
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<div id="d3jsMouseEventInsertHTMLWeb"></div>

<script>
  const tooltipIcon = d3.select("#d3jsMouseEventInsertHTMLWeb")
                        .append("svg")
                        .attr("height", 200)
                        .attr("width", 200)
                        .append("g")
                        .style("cursor", "pointer");
  const tooltipIconCircle = tooltipIcon.append("circle")
                                       .attr("cx", 100)
                                       .attr("cy", 100)
                                       .attr("r", 60)
                                       .attr("fill", "#69b3a2");
  const tooltipIconText = tooltipIcon.append("text")
                                     .text("按鈕")
                                     .attr("fill", "#eeeeee")
                                     .attr("x", 100)
                                     .attr("y", 110)
                                     .attr("text-anchor", "middle")
                                     .attr("font-size", 30)
                                     .attr("font-family", "sans-serif");
  const tooltip = d3.select("#d3jsMouseEventInsertHTMLWeb")
                    .style("position", "relative")
                    .append("div")
                    .attr("id", "tooltipWebsite")
                    .style("position", "absolute")
                    .style("display", "none")
                    .style("border", "2px solid black")
                    .style("border-radius", "10px")
                    .style("width", "700px")
                    .style("max-height", "600px")
                    .style("overflow", "auto")
                    .style("background-color", "#ffffff")
                    .style("padding", "20px");

  // 判斷是否已點擊開啟tooltip用
  let isClick = false;

  tooltipIcon
    .on("click", (e) => {
      if (!isClick) {
        // 引用其他網頁內容
        d3.html("study/statistics_note.html").then( (d) => {
          const bodyContent = d3.select(d).select("body").html();  // 只選取該網頁<body>內的內容

          d3.select("#tooltipWebsite")
            .style("display", "block")
            .html(bodyContent);  // 將選取的內容插入到Tooltip中

          MathJax.typesetPromise();  // 重新渲染 MathJax 公式
        });
        isClick = true;  // 切換至已開啟tooltip狀態
      } else {
        d3.select("#tooltipWebsite")
          .style("display", "none");
        isClick = false;  // 切換至未開啟tooltip狀態
      };
    })
    .on("mouseover", () => {
      tooltipIconCircle.attr("stroke", "#ffffff")
                       .attr("stroke-width", 5);
    })
    .on("mousemove", (e) => {
      let pt = d3.pointer(e, e.target);
      // 設置Tooltip位置
      d3.select("#tooltipWebsite")` + "\n" +
'        .style("left", `${pt[0] + 40}px`)' + "\n" +
'        .style("top", `${pt[1] - 30}px`);' + "\n" +
`    })
    .on("mouseleave", () => {
      tooltipIconCircle.attr("stroke-width", 0);
    });
</script>`,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "拖曳",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: 
`<code>d3.drag()</code> 拖曳
<ul style="list-style-type: circle; margin-top: 16px;">
  <li><code>drag.on(<i>"typenames"[, listener]</i>)</code>：設定拖曳的細節，兩個參數分別是事件 <code>typenames</code> 與函式 <code>listener</code>，其中 <code>typenames</code> 有 <code>"start"</code>、<code>"dragged"</code>、<code>"end"</code> 三個階段。</li>
</ul>`,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<div id="d3jsDragContainer"></div>

<script>
  const data = [
    {name: "A", x: 200, y: 340},
    {name: "B", x: 220, y: 300},
    {name: "C", x: 250, y: 198},
    {name: "D", x: 360, y: 296},
    {name: "E", x: 160, y: 150},
    {name: "F", x: 320, y: 60},
    {name: "G", x: 187, y: 250}
  ];
  const width = 600;
  const height = 400;
  const svg = d3.select("#d3jsDragContainer")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .style("border", "1px solid rgb(103, 102, 102)");

  // 建立圓點
  const dots = svg.append("g")
                  .selectAll("circle")
                  .data(data)
                  .join("circle")
                  .attr("r", 25)
                  .attr("cx", (d) => d.x)
                  .attr("cy", (d) => d.y)
                  .style("fill", "#19d3a2")
                  .style("fill-opacity", 0.3)
                  .attr("stroke", "#b3a2c8")
                  .attr("stroke-width", 4)
                  .style("cursor", "pointer");

  // 建立拖曳方法
  // 在d3.drag()事件處理器中，應避免使用箭頭函數來確保'this'能綁定到正確的DOM元素
  const drag = d3.drag()
                 .on("start", function() {  // 因為要用'this'，所以用普通函數
                   d3.select(this).style("stroke", "blue");
                 })
                 .on("drag", function(e) {  // 因為要用'this'，所以用普通函數
                   const pt = d3.pointer(e, this);
                   d3.select(this)
                     .attr("cx", pt[0])
                     .attr("cy", pt[1]);
                 })
                 .on("end", function() {  // 因為要用'this'，所以用普通函數
                   d3.select(this).style("stroke", "#b3a2c8");
                 });

  // 呼叫拖曳方法
  dots.call(drag);
</script>`,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "縮放",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: 
`<code>d3.zoom()</code> 縮放
<ul style="list-style-type: circle; margin-top: 16px; line-height: 1.6;">
  <li><code>zoom.scaleExtent(<i>[k0, k1]</i>)</code>：設定縮放係數的大小範圍，預設是 [0, &infin;]。</li>
  <li><code>zoom.duration()</code>：滑鼠雙擊或觸控雙擊時 zoom 縮放的變換時長。</li>
  <li><code>d3.zoomIdentity()</code>：設定 transform 物件的狀態，可以藉下面的 code，讓縮放後的物件回復到原本大小。</li>
<pre style="padding: 8px;"><code class="javascript">d3.select("#resetBtn")
  .on("click", () => {
    const transformFunction = d3.zoomIdendity.scale(1);
    svg.call(zoomFunction.transform, transformFunction);
  });
</code></pre>
</ul>`,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<div id="zoomBasic"></div>

<button id="resetBtn" type="button" class="btn btn-primary mt-2">重設</button>
<script>
  const width = 450;
  const height = 300;
  const svg = d3.select("#zoomBasic")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .style("border", "1px solid gray");
        
  // 加個圓點
  const circle = svg.append("circle")
                    .attr("id", "dot")
                    .attr("cx", width / 2)
                    .attr("cy", height / 2)
                    .attr("r", 50)
                    .attr("fill", "#69b3a2")
                    .style("cursor", "pointer");

  // 建立Zoom事件
  const zoomEvent = d3.zoom()
                      .extent([
                        [0, 0], [250, 250]
                      ])
                      .scaleExtent([1/5, 5])  // 縮放大小倍率限制
                      .duration(600)
                      .on("zoom", (e) => {
                        const transform = e.transform;
                        // 這邊決定要放大誰
                        // 使用transform.k調整選定元素屬性的transform的k，避免動到x、y造成元素位置改變
                        // 50為圓原半徑
                        circle.attr("r", (d) => 50 * transform.k);
                      });
        
  // 呼叫Zoom事件
  svg.call(zoomEvent);
  
  // 設立重置按鈕，以回復到原本狀態
  d3.select("#resetBtn")
    .on("click", () => {
      const transform = d3.zoomIdentity.scale(1);
      svg.call(zoomEvent.transform, transform);
    });
</script>`,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "選取刷",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: 
`<code>d3.brush()</code> 選取刷
<ul style="list-style-type: circle; margin-top: 16px; line-height: 1.6;">
  <li><code>d3.brush()</code>、<code>d3.brushX()</code>、<code>d3.brushY()</code>：分別是建立二維 brush、水平方向 brush、垂直方向 brush。</li>
  <li><code>brush.on(<i>"typenames"[, listener]</i>)</code>：用來監聽 brush 事件，兩個參數分別是事件 <code>typenames</code> 與函式 <code>listener</code>，其中 <code>typenames</code> 有 <code>"start"</code>、<code>"brush"</code>、<code>"end"</code> 三個階段。</li>
  <li><code>brush.extent(<i>[[x0, y0], [x1, y1]]</i>)</code>：設定允許刷取的範圍，<code>[x0, y0]</code>為範圍左上角，<code>[x1, y1]</code> 為範圍右下角。</li>
</ul>`,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<div id="brush"></div>

<script>
  const width = 540;
  const height = 360;
  const data = [
    {r: 20, x: 200, y: 120},
    {r: 35, x: 350, y: 280},
    {r: 25, x: 120, y: 240},
  ];

  // 建立SVG
  const svg = d3.select("#brush")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .style("border", "1px solid gray");

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
                         [0, 0],
                         [600, 600]
                       ])  // extent限制刷子的活動區塊，理想是比SVG畫布稍大
                       .on("start brush", brushed);  // 綁定brush事件

  // 呼叫brush事件
  svg.call(brushEvent);
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