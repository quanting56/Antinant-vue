# 阿蛤的窩（正在 Vue 化中）

這是 **阿蛤ㄉ窩（原版個人網站）** 的重建專案，主要差別在與我正在把我剛開始學前端技術時所弄的個人網站 Vue 化，並持續維護、更新它。

本網站係以原個人網站 **阿蛤ㄉ窩** 早期使用純 HTML/CSS/JavaScript 及 Bootstrap 所架設之原始網站為藍本，使用 **Vue 3** + Vite 重構與維護更新，目的是將原本以靜態內容與筆記的網站，轉化為一個更模組化、可維護、互動性更高的 SPA (Single Page Application)。

> 暫不 TS 化、Tailwind 化，未來 Nuxt 化時再一併考慮是否要以 TypeScript 和 TailwindCSS 重構。


## 專案特色

- 使用 **Vue 3 Composition API** 與 **SFC**（單檔元件）開發，方便內容維護與擴充。
- 採用 **Vite** 作為建構工具，啟動快速、熱重載流暢。
- 使用 **Vue Router 4** 自行規劃多頁路由。
- 使用 **Pinia** 為狀態管理庫（以初始化，暫時未使用到）。
- 實作 **RWD 響應式設計**，手機、平板、桌機皆可順暢瀏覽。
- 使用 **Git** 版本控制，記錄開發歷程。
- 網站部署於 GitHub Pages，可由 **[阿蛤ㄉ窩](https://quanting56.github.io/Antinant-vue/)** 瀏覽效果。


## 技術使用

- **框架**：Vue 3 Composition API
- **打包工具**：Vite
- **路由**：Vue Router 4（history 模式，base 動態設定為 `import.meta.env.BASE_URL`）
- **狀態管理**：~~Pinia~~（本專案暫未使用，未來預計）
- **樣式**：純 CSS + Flexbox/Grid + Media Queries
- **程式碼高亮**：Web 筆記頁面採用 `highlight.js` 函式庫
- **資料視覺化圖表**：`D3.js` 函式庫
- **部署**：GitHub Pages


## 安裝與本地開發

```bash
# Clone 專案
git clone git@github.com:quanting56/project1.git
cd project1

# 安裝相依套件
npm install

# 啟動開發伺服器
npm run dev
```


## 部署

網站部署於 GitHub Pages，下列為建置與部署流程摘要：

```bash
# 建置專案
npm run build

# 推送 dist 內容到 GitHub Pages
npx gh-pages -d dist

# 網站已部署於 gh-pages branch
```


## 專案結構

```text
project1/
├─ public/
│   ├─ 404.html             ← 錯誤頁重新導向(for GitHub pages)
│   └─ vite.svg             ← 網站暫時 favicon
├─ src/
│   ├─ assets/              ← 網站圖片
│   │   ├─ about-me-view/
│   │   │   ├─ timeline/
│   │   │   │   ├─ program-learning-timeline/
│   │   │   │   └─ ...
│   │   │   └─ ...
│   │   ├─ home-view/
│   │   │   └─ ...
│   │   ├─ web-note-view/
│   │   │   ├─ d3js-note-view/
│   │   │   │   └─ ... /
│   │   │   └─ ...
│   │   └─ ...
│   ├─ components/
│   │   ├─ Common/
│   │   │   ├─ BackToTopButton.vue    ← 回到頁頂按鈕
│   │   │   ├─ Footer.vue             ← 頁尾
│   │   │   └─ NavBar.vue             ← 頁首 nav 列
│   │   ├─ AboutMeView/
│   │   │   └─ Timeline.vue           ← 時間軸元件
│   │   ├─ InvestmentView/
│   │   ├─ TripView/
│   │   └─ WebNoteView/
│   │       ├─ D3jsNoteView/
│   │       │   └─ ... /              ← D3js 筆記頁眾元件
│   │       ├─ DevelopUtilityView/
│   │       │   └─ ColorPalettePreview.vue          ← 色碼查詢元件
│   │       ├─ JavascriptNoteView/
│   │       │   ├─ ButtonUpdateMessageNoteDemo.vue  ← 按鈕更新文字元件
│   │       │   └─ JsOpenCloseWindowNoteDemo.vue    ← 開新視窗與關閉視窗元件
│   │       ├─ VuejsNoteView/
│   │       │   └─ ... /              ← Vuejs 筆記頁眾元件
│   │       └─ WebNoteSimpleView/
│   │           ├─ DropDownHrefNoteDemo.vue         ← 下拉式超連結元件
│   │           ├─ ImageHoverSwitchNoteDemo.vue     ← 移動游標換照片元件
│   │           └─ ImageOverlayTransitionNoteDemo.vue   ← 疊圖照片接替出現元件
│   ├─ data/
│   │   ├─ about-me-view/
│   │   │   ├─ general-timeline.js              ← 一般時間軸內容
│   │   │   └─ program-learning-timeline.js     ← 程式語言學習時間軸內容
│   │   └─ web-note-view/
│   │       ├─ d3js-note-view/
│   │       │   └─ d3js-note-view-tabs.js       ← D3js 筆記內容
│   │       ├─ python-note-view/
│   │       │   └─ python-note-view-tabs.js     ← Python 筆記內容
│   │       ├─ vue-i18n-note-view/
│   │       │   └─ vue-i18n-note-view-tabs.js   ← Vue-i18n 筆記內容
│   │       └─ vuejs-note-view/
│   │           └─ vuejs-note-view-tabs.js      ← Vuejs 筆記內容
│   ├─ layouts/
│   │   ├─ DefaultLayout.vue      ← 有 NavBar, Footer, BackToTop 的 layout
│   │   └─ FullScreenLayout.vue   ← 全螢幕 layout
│   ├─ router/
│   │   └─ index.js         ← 路由設定檔
│   ├─ store/
│   │   └─ webNote/
│   │       └─ VuejsNotePiniaNote/    ← Vue.js 筆記內 Pinia 示範碼（皆供單一 SFC 引用）
│   │           ├─ counterStore.js
│   │           ├─ d3ChartStore.js
│   │           └─ productStore.js
│   ├─ views/
│   │   ├─ Photo/
│   │   │   ├─ NtuphotoLifeView.vue         ← 攝影社生活頁 (TODO)
│   │   │   └─ PhotographicEquipment.vue    ← 攝影器材頁 (TODO)
│   │   ├─ WebNote/
│   │   │   ├─ BootstrapNoteView.vue        ← 「Bootstrap網格與內容樣式筆記」頁
│   │   │   ├─ CssFunctionNoteView.vue      ← 「一些CSS函式庫」頁
│   │   │   ├─ D3jsNoteView.vue             ← 「D3.js資料視覺化筆記」頁
│   │   │   ├─ DevelopUtilityView.vue       ← 「開發用小工具」頁
│   │   │   ├─ JavascriptNoteView.vue       ← 「一些JavaScript筆記」頁
│   │   │   ├─ PythonNoteView.vue           ← 「Python筆記」頁
│   │   │   ├─ TailwindNoteView.vue         ← 「Tailwind筆記」頁
│   │   │   ├─ TestTestTestView.vue         ← 「測試場」頁
│   │   │   ├─ UsefulBootstrapComponentView.vue  ← 「一些好用的Bootstrap元件」頁
│   │   │   ├─ VueI18nNoteView.vue          ← 「Vue I18n筆記」頁
│   │   │   ├─ VuejsNoteView.vue            ← 「Vue.js（Vue 3）筆記」頁
│   │   │   └─ WebNoteSimpleView.vue        ← 「一些與Bootstrap無關的筆記」頁
│   │   ├─ AboutMeView.vue            ← 「關於我」頁
│   │   ├─ HomeView.vue               ← 首頁
│   │   ├─ MyInvestmentView.vue       ← 「投資相關」入口頁 (TODO)
│   │   ├─ PhotoPortfolioView.vue     ← 「攝影」入口頁
│   │   └─ WebNoteView.vue            ← 「網頁」入口頁
│   ├─ App.vue              ← App 根元件
│   ├─ main.js              ← Vue app 入口，掛載 router、Pinia 與全域設定
│   └─ style.css            ← 全域樣式
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
└─ vite.config.js
```


## 網站架構（Router）

以下是目前網站的頁面與路由結構：

|路由位置    |對應頁面檔案     |說明      |
|-----------|---------------|---------|
|`/`        |`HomeView.vue` |首頁      |
|`/about-me`|`AboutMeView.vue`|關於我  |
|`/photo-portfolio`|`PhotoPortfolioView.vue`|攝影相關 總覽頁|
|`/photo/ntuphoto-life`|`NtuPhotoLifeView.vue`|那些年在攝影社的故事|
|`/photo/photographic-equipment`|`PhotographicEquipment.vue`|攝影器材介紹|
|`/web-note`|`WebNoteView.vue`|網頁練習筆記|
|`/web-note/test-test-test`|`TestTestTestView.vue`|測試場|


## git commit 指令

以下是目前網站常用的 git commit 指令，在終端機（terminal）輸入以下指令：

```bash
# 確認距離上次 commit 增減、修改了哪些檔案
git status

# 將這些變動通通加入 git 暫存區（Staging Area）
git add .

# 在 commit 中，打上此次變動的部分
git commit -m "feat: 新增ＯＯ功能"

# 把此次變動 push 到 GitHub 上
git push
```

|類型	|用途說明                |
|------|-----------------------|
|`feat`|💡 新增一個功能（feature）|
|`fix` |🐛 修復一個錯誤（bug）    |
|`docs`|📚 修改文件（README、說明文字、註解等）|
|`style`|🎨 調整程式碼格式（例如空格、縮排、換行，不影響功能）|
|`refactor`|🔧 重構程式碼（邏輯不變，非 bug fix 或新功能）|
|`test`|✅ 增加或修改測試內容     |
|`chore`|🔨 其他雜項（更新套件、CI 設定、建置腳本等）|
|`perf`|🚀 性能優化|
|`build`|🏗️ 編譯相關檔案變動，如 webpack 設定或打包流程|
|`revert`|♻️ 撤銷回覆先前的commit|


## 開發者

本案由 **[quanting56](https://github.com/quanting56)** 開發與維護。

> README.md 更新時間：2026/05/21 21:11
