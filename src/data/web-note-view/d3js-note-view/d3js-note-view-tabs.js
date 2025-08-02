export const d3jsNoteViewTabs = [
  {
    id: "d3jsStartNote",
    title: "開始使用 D3.js",
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
    id: "d3jsDataBindingNote",
    title: "資料綁定",
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
            detailTitle: "有CORS錯誤問題（此例用AllOrigins API來繞過CORS（跨來源資源共享）限制的基本URL）",
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