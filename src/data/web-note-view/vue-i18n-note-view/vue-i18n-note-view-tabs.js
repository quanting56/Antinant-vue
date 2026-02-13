// import { defineAsyncComponent } from "vue";  這份文件目前沒用到

export const vueI18nNoteViewTabs = [
  {
    id: "vueI18nStartNote",
    title: "開始使用 Vue I18n",
    description: "<p>使用 Vue i18n 創立一個多語系的網站吧！</p>",
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "npm 安裝",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: `npm install vue-i18n`,
          jsCode: null,
          tsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              tsCode: null,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "相關設定",
        listSubtitle: "在 Vue 專案 <code>src/</code> 底下新增如下結構（以 JavaScript 專案舉例）。",
        listComponent: null,
        listCode: {
          htmlCode: 
`src/
┌┘
├─ i18n/               ← i18n 插件設定
│   ├─ locales         ← 語系檔統一放這個資料夾
│   │   ├─ en.json     ← 英語語系檔
│   │   └─ zh-TW.json  ← 中文（臺灣）語系檔
│   └─ index.js        ← i18n 相關設定
├─ components/
├─ stores/
├─ ...
├─ App.vue
└─ main.js             ← 在 main.js 裡套用 i18n`,
          jsCode: null,
          tsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>src/i18n/index.js</code>",
            detailSubtitle: "i18n 主要設定",
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`import { createI18n } from "vue-i18n";
import zhTW from "@/i18n/locales/zh-TW.json";
import en from "@/i18n/locales/en.json";

export const SUPPORTED_LOCALES = ["zh-TW", "en"];

export const i18n = createI18n({
  legacy: false,          // Composition API 模式
  globalInjection: true,  // 允許 template 直接用 $t
  locale: "zh-TW",
  fallbackLocale: "en",
  messages: {
    "zh-TW": zhTW,
    "en": en
  }
});`,
              tsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>src/main.js</code>",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { i18n } from "@/i18n";

import { useLocaleStore } from "@/stores/locale";  // 自訂 Pinia 檔

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.use(i18n);

// mount 前 init，避免初始語言閃一下
useLocaleStore(pinia).init();


app.mount("#app");`,
              tsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>src/stores/locale.js</code>",
            detailSubtitle: "以將語言設定存在 <code>localStorage</code> 做舉例。",
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`import { defineStore } from "pinia";
import { ref } from "vue";
import { i18n, SUPPORTED_LOCALES } from "@/i18n/index";

const STORAGE_KEY = "projectName:locale";

function isSupportedLocale(v) {
  return SUPPORTED_LOCALES.includes(v);
}

export const useLocaleStore = defineStore("locale", () => {
  const locale = ref("zh-TW");
  
  function init() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved && isSupportedLocale(saved)) {
      locale.value = saved;
    }
    
    // 全站切換，改 global 的 locale
    i18n.global.locale.value = locale.value;

    // 同步 <html lang="...">
    document.documentElement.lang = locale.value;
  }

  function setLocale(next) {
    if (!isSupportedLocale(next)) { return; }

    locale.value = next;
    i18n.global.locale.value = next;
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }

  return {
    locale,
    init,
    setLocale
  };
})`,
              tsCode: null,
              vueCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "i18nLocaleSampleNote",
    title: "語系檔範例",
    description: "建立不同語言的 <code>.json</code> 語系檔，之中儘可能不要使用 <code>null</code> 以避免非預期渲染結果。",
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "一些範例",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          tsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "繁體中文（臺灣） <code>zh-TW</code>",
            detailSubtitle: "<code>src/i18n/locales/zh-TW.json</code>",
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`{
  "nav": {
    "dashboard": "儀表板",
    "medication": "用藥紀錄"
  },
  "common": {
    "ok": "確定",
    "cancel": "取消",
    "loading": "載入中..."
  },
  "error": {
    "selectPatient": "請先選擇病人"
  }
}`,
              tsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "英文 <code>en</code>",
            detailSubtitle: "<code>src/i18n/locales/en.json</code>",
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`{
  "nav": {
    "dashboard": "Dashboard",
    "medication": "Medication"
  },
  "common": {
    "ok": "OK",
    "cancel": "Cancel",
    "loading": "Loading..."
  },
  "error": {
    "selectPatient": "Please select a patient"
  }
}`,
              tsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "哈囉世界！",
            detailSubtitle: "<code>src/i18n/locales/hello-world.json</code>",
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: 
`{
  "nav": {
    "dashboard": "Hello world!",
    "medication": "Hello world!"
  },
  "common": {
    "ok": "Hello world!",
    "cancel": "Hello world!",
    "loading": "Hello world!"
  },
  "error": {
    "selectPatient": "Hello world!"
  }
}`,
              tsCode: null,
              vueCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "i18nVueSFCNote",
    title: "在 Vue SFC 裡使用",
    description: null,
    descriptionComponent: null,
    descriptionComponentStyle: null,
    lists: [
      {
        listTitle: "Vue SFC 中使用",
        listSubtitle: "<p>有兩種使用方法，可以直接在 <code>&lt;template&gt;</code> 中用 <code>&#123;&#123; $t('key.subKey.value') &#125;&#125;</code>；或是先在 <code>&lt;script&gt;</code> 中 <code>import</code> ，再在 <code>&lt;template&gt;</code> 中用 <code>&#123;&#123; t('key.subKey.value') &#125;&#125;</code>。推薦後者。</p>",
        listComponent: null,
        listCode: {
          htmlCode: null,
          jsCode: null,
          tsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>&#123;&#123; $t('key.subKey.value') &#125;&#125;</code>",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              tsCode: null,
              vueCode: 
`<template>
  <h1>{{ $t("nav.dashboard") }}</h1>
  <button>{{ $t("common.ok") }}</button>
</template>

<script setup></script>

<style scoped></style>`
            }
          },
          {
            detailTitle: "<code>&#123;&#123; $t('key.subKey.value') &#125;&#125;</code> + <code>&lt;script&gt;</code> 中 <code>import</code>",
            detailSubtitle: "這種寫法可以在 <code>&lt;script&gt;</code> 中用 <code>t()</code> 的方式注入模板。",
            detailContent: null,
            detailComponent: null,
            detailCode: {
              htmlCode: null,
              jsCode: null,
              tsCode: null,
              vueCode: `
<template>
  <h1>{{ t("nav.dashboard") }}</h1>
  <button>{{ t("common.ok") }}</button>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

// 可以在這邊直接改語系
// locale.value = "en";
</script>

<style scoped></style>`
            }
          }
        ]
      }
    ]
  }
];
