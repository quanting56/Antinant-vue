<template>
  <div>
    沒有加 <code>.exact</code>：
    <input
      type="text"
      placeholder="輸入任意文字後按下Enter鍵"
      v-model.trim="keyboardModifiers1"
      @keydown.enter="addToMessages1"
    >
  </div>
  <div>
    有加 <code>.exact</code>：
    <input
      type="text"
      placeholder="輸入任意文字後按下Enter鍵"
      v-model.trim="keyboardModifiers2"
      @keydown.enter.exact="addToMessages2"
    >
  </div>
</template>

<script setup>
import { ref } from "vue";

const keyboardModifiers1 = ref("");
const keyboardModifiers2 = ref("");
function addToMessages1() {
  alert("hello world\n" + keyboardModifiers1.value );
};
function addToMessages2() {
  alert("hello world\n" + keyboardModifiers2.value );
};
</script>

<style scoped>
h5 {
  margin-top: 0;
}

input {
  width: 180px;
  padding: 3px;
}
</style>
