<template>
  <!-- 注意下面input對應的都是v-model="checkedNames" -->
  <!-- 另外，把<input>包在<label>裡面的寫法，可以避免使用id+for造成的全域污染問題 -->
  <label>
    <input type="checkbox" value="Jack" v-model="checkedNames">
    Jack
  </label>
  <label>
    <input type="checkbox" value="John" v-model="checkedNames">
    John
  </label>
  <label>
    <input type="checkbox" value="Mike" v-model="checkedNames">
    Mike
  </label>
  <label>
    <input type="checkbox" value="Mary" v-model="checkedNames">
    Mary
  </label>
  <br>
  <p>Checked names: {{ checkedNames }}</p>
</template>

<script setup>
import { ref } from "vue";

// 因為是複選的關係，這裡的checkedNames是陣列
const checkedNames = ref([]);
</script>

<style scoped>
p {
  margin-bottom: 0;
}
</style>
