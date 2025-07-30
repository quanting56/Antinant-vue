# 阿蛤的窩（正在 Vue 化中）

> 這是 **阿蛤ㄉ窩（原版個人網站）** 的重建專案，主要差別在與我正在把我剛開始學前端技術時所弄的個人網站 Vue 化，並持續維護、更新它。

本網站係以原個人網站 **阿蛤ㄉ窩** 早期使用純 HTML/CSS/JavaScript 及 Bootstrap 所架設之原始網站為藍本，使用 **Vue 3** + Vite 重構與維護更新，目的是將原本以靜態內容與筆記的網站，轉化為一個更模組化、可維護、互動性更高的 SPA (Single Page Application)。


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
- ~~**資料視覺化圖表**：`D3.js` 函式庫~~
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

```cs
project1/
├─ public/                 # 靜態資源 (如favicon)
├─ src/
│  ├─ assets/              # 網站圖片
│  ├─ components/          # 可重用元件
│  │  ├─ Common/           # Navbar, Footer, BackToTop按鈕 等共用元件
│  │  └─ ... /             # 其他頁面元件
│  ├─ data/                # 資料
│  ├─ router/
│  │  └─ index.js          # 路由設定檔
│  ├─ store/               # Pinia狀態管理（預留）
│  ├─ views/               # 各頁面元件 (HomeView.vue, AboutMeView.vue…)
│  │  └─ ... /             # 各頁面子元件
│  ├─ style.css            # 全域樣式
│  └─ App.vue, main.js     # 入口
├─ index.html
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


## 開發者

本案由 **[quanting56](https://github.com/quanting56)** 開發與維護。

> README.md 更新時間：2025/07/30 13:14