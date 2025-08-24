<template>
  <p>{{ message }}</p>

  <!-- 透過v-model來做到父子元件間的「雙向綁定」 -->
  <!-- "modelValue"是Vue 3 v-model預設對應的prop名稱 -->
  <!-- 若想使用多個v-model prop或非modelValue，就必須使用"v-model:其他名稱" -->
  <custom-input v-model="message"></custom-input>
  <!-- 上一行實際上等於下一行，為下一行的簡寫 -->
   <!-- <custom-input v-model:modelValue="message"></custom-input> -->
  <!-- 上一行實際上等於下一行，為下一行的語法糖 -->
  <!-- <custom-input :modelValue="message" @update:modelValue="message = $event"></custom-input> -->
</template>

<script setup>
import { ref } from "vue";
import CustomInput from "./VuejsPropsVModelDemo/CustomInput.vue";

const message = ref("Hello World!");
</script>

<style scoped>
p {
  font-size: 28px;
  margin-top: 0;
}
</style>
