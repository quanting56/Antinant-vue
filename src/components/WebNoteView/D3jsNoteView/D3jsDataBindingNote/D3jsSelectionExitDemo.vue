<template>
  <div class="d3-Exit">
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </div>
</template>

<script setup>
import * as d3 from "d3";
import { onMounted } from "vue";

onMounted(() => {
  const exitData = ["我", "是", "資", "料"];

  d3.select(".d3-Exit")
    .selectAll('p')
    .data(exitData)
    .text(d => d)
    .exit()
    .remove();
});
</script>
