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
          jsCode: null
        },
        listDetails: [
          {
            detailTitle: "將 js 文件引用到 &lt;head&gt; 裡：",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<head>
  ...
  <script src="js/d3_v7.9.0_min.js"></script>
  ...
</head>`,
              jsCode: null
            }
          },
          {
            detailTitle: "或是以 CDN 連結的方式引用到 &lt;head&gt; 裡：",
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: 
`<head>
  ...
  <script src="https://d3js.org/d3.v7.min.js"></script>
  ...
</head>`,
              jsCode: null
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
import * as d3 from "d3";`
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null
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
          jsCode: null
        },
        listDetails: [
          {
            detailTitle: "selection.enter()",
            detailSubtitle: "DOM 比較少，用 <code>enter()</code> 和 <code>append()</code> 調整。",
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsDataBindingNote/D3SelectionEnterDemo.vue")
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
              jsCode: null
            }
          },
          {
            detailTitle: "selection.exit()",
            detailSubtitle: "DOM 比較多，用 <code>exit()</code> 和 <code>remove()</code> 調整。",
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsDataBindingNote/D3SelectionExitDemo.vue")
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
              jsCode: null
            }
          },
          {
            detailTitle: "selection.join()",
            detailSubtitle: "用 <code>join()</code> 來調整 DOM 與 data 的數量差異。",
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsDataBindingNote/D3SelectionJoin1Demo.vue")
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
              jsCode: null
            }
          },
          {
            detailTitle: "selection.join(enter[, update][, exit])",
            detailSubtitle: "用 <code>join(enter, update, exit)</code> 來調整 DOM 與 data 的數量差異。",
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/D3jsNoteView/D3jsDataBindingNote/D3SelectionJoin2Demo.vue")
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
              jsCode: null
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
        listComponent: null, // 目前開發到元件（在TestTestTest.vue裡面編輯）
        listCode: {
          htmlCode: null,
          jsCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null
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
          jsCode: null
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

getJSONData();`
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

getCorsData();`
            }
          }
        ]
      }
    ]
  },
  {
    id: "d3jsApiForDataOrganizationNote",
    title: "資料整理",
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
          jsCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null
            }
          }
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
          jsCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null
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
          jsCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null
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
          jsCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null
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
          jsCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null
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
          jsCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null
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
          jsCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null
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
          jsCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null
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
          jsCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null
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
          jsCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null
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
          jsCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null
            }
          }
        ]
      }
    ]
  },
  // ...把其他 tab 照此格式一一加入 tabs 陣列
];