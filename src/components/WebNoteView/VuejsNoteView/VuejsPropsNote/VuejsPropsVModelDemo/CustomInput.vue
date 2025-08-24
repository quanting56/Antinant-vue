<template>
  <input
    :value="modelValue"
    @input="onInput"
  >
</template>

<script setup>
// 定義props（接收父元件傳入的值）
const props = defineProps(["modelValue"]);

// 定義emit（發送事件給父元件）
const emit = defineEmits(["update:modelValue"]);

// 處理input事件
function onInput(e) {
  emit("update:modelValue", e.target.value)
};
</script>

<style scoped></style>
