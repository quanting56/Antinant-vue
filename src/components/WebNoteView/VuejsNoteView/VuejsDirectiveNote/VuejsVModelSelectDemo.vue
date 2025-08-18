<template>
  <!-- 注意，v-model要放在select而不是option -->
  <select v-model="selected">
    <!-- 第一個選項設定為disabled的好處是可以保證使用者不會送出此預設值 -->
    <option disabled value="">請選擇</option>
    <option value="臺北市">臺北市</option>
    <option value="新北市">新北市</option>
    <option value="基隆市">基隆市</option>
  </select>
  <p>現在選到的行政區是 <b>{{ selected || '未選擇'}}</b></p>
</template>

<script setup>
import { ref } from "vue";

const selected = ref("");
</script>

<style scoped></style>
