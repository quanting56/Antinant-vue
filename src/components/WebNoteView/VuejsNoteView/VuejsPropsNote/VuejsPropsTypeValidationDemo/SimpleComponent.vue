<template>
  <div>從外層接受到的的msg： {{ propsNumber }}</div>
</template>

<script setup>
defineProps(["propsNumber"]);
// 或是寫成
// defineProps({ propsNumber: {} });
</script>