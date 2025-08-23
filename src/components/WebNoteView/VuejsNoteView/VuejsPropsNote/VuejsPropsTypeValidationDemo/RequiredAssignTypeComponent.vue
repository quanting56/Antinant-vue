<template>
  <div>接受到的msg：{{ propsNumber }}</div>
</template>

<script setup>
defineProps({
  propsNumber: {
    // required: true  // 先註解掉，不然一直報錯很煩
  }
});
</script>