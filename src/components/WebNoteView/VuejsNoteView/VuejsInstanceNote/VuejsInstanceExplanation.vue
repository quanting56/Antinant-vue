<template>
  <div
    class="explanation-container"
    v-for="cont in content"
    :key="cont.title"
  >
    <div>
      <h5 class="title">{{ cont.title }}</h5>
      <pre v-if="cont.htmlCode"><code class="html">{{ cont.htmlCode }}</code></pre>
      <pre v-if="cont.jsCode"><code class="javascript">{{ cont.jsCode }}</code></pre>
    </div>
  </div>
</template>

<script setup>
const content = [
  { 
    title: "Vue 實體",
    htmlCode: null,
    jsCode:  
`data() {
  return {
    name: "Vue.js"
  }
}`
  },
  { 
    title: "HTML 模板",
    htmlCode: `正在使用 {{ name }}`,
    jsCode: null
  },
  { 
    title: "輸出結果",
    htmlCode: `正在使用 Vue.js`,
    jsCode: null
  }
];
</script>

<style scoped>
.explanation-container {
  background: #fafafa;
  border-radius: 10px;
  padding: 4px 20px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
}

/* 其他樣式寫在style.css裡 */
pre code {
  padding: 24px;
}
</style>