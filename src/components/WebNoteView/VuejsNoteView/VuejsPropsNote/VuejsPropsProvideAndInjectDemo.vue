<template>
  輸入一些文字，看看底下的變化：<br />
  <input type="text" v-model="msg"><br />
  父層資料： {{ msg }}
  <list-component></list-component>
</template>

<script setup>
import { ref, provide, computed } from "vue";
import ListComponent from "./VuejsPropsProvideAndInjectDemo/ListComponent.vue";

const msg = ref("Hello Vue.js!");

// 透過provide()，提供資料給子孫元件
provide("provideMsg1", msg.value)  // 只是這樣寫的話，當父層資料更動，子孫元件不會跟著動
provide("provideMsg2", computed(() => msg.value));  // 使用Vue.computed()進行包裝，才會跟著連動
</script>

<style scoped>
input {
  margin-top: 12px;
  padding: 4px;
  margin-bottom: 4px;
}
</style>
