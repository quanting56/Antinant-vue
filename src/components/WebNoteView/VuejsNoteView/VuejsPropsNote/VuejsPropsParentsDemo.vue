<template>
  <!-- 這是外層元素的msg -->
  <p>{{ msg }}</p>

  <!-- 把父層的msg傳給子元件 -->
  <my-component :parent-msg="msg"></my-component>
</template>

<script setup>
import { ref } from "vue";
import MyComponent from "./VuejsPropsParentsDemo/MyComponent.vue";

const msg = ref("這是外層元件的msg");
</script>

<style scoped>
p {
  margin-top: 0;
}
</style>
