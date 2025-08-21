<template>
  <ul>
    <h4>item in arr:</h4>
    <li><u>item</u></li>
    <li v-for="item in arr">{{ item }}</li>
    <br>
    <h4>(item, index) in arr:</h4>
    <li><u>index</u> -&gt; <u>item</u></li>
    <li v-for="(item, index) in arr">{{ index }} -&gt; {{ item }}</li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const arr = ref(['008', 'js', 'is', 'awesome']);
</script>

<style scoped>
h4 {
  margin-top: 0 !important;
}
</style>
