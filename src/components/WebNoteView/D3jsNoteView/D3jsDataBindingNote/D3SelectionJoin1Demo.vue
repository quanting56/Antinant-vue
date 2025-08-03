<template>
  <div class="d3-Join1">
    <p></p>
    <p></p>
    <p></p>
  </div>
</template>

<script setup>
import * as d3 from "d3";
import { onMounted } from "vue";

onMounted(() => {
  const joinData1 = ["我", "是", "資", "料"];

  d3.select(".d3-Join1")
    .selectAll('p')
    .data(joinData1)
    .join('p')
    .text(d => d)
    .attr("style", "color: #ff0000;");
});
</script>
