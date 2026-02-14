import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isDev = command === "serve";  // 只有 npm run dev 才是 serve
  const isBuild = command === "build";

  const plugins = [
    vue(),
    isDev && vueDevTools()  // 只在開發時啟用
  ].filter(Boolean);

  return {
    plugins,

    // dev 用 /，部署到 gh-pages 才用 repo 子路徑
    base: isBuild ? "/Antinant-vue/" : "/"
  };
});
