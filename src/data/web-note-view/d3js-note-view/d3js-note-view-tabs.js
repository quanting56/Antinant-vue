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
            detailSubtitle: "DOM 比較少，用 <code>enter()</code> 和 <code>append()</code> 調整。",
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
            detailSubtitle: "DOM 比較多，用 <code>exit()</code> 和 <code>remove()</code> 調整。",
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
            detailTitle: "<code>selection.join(enter[, update][, exit])</code>",
            detailSubtitle: "用 <code>join(enter, update, exit)</code> 來調整 DOM 與 data 的數量差異。",
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
    description: // 處理到這邊，再來要調整表格樣式
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
    id: "d3jsHelperFunctionNote",
    title: "繪圖 HelperFunction",
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
    id: "d3jsScalesNote",
    title: "各種比例尺",
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
    id: "d3jsAxesNote",
    title: "各種軸線與刻度",
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