<template>
  <div>指定type並加入驗證後，收到的msg： {{ propsNumber }}</div>
</template>

<script setup>
defineProps({
  propsNumber: {
    type: Number,
    required: true,
    default: 0,
    validator: value => value >= 0 && value <= 100
  }
});
</script>