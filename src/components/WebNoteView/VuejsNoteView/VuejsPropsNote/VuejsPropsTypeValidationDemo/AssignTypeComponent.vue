<template>
  <div>指定type後，接受到的msg： {{ propsNumber }}</div>
</template>

<script setup>
defineProps({
  propsNumber: [Number, String]  // 若只需要一個type，可寫作"type: Number"
});
</script>