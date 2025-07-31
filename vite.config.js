import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: "/Antinant-vue/",
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === tag.startsWith("bootstrap-")
      }
    }
  })],
})
