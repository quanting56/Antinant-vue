<template>
  <div class="d3-Enter">
    <p></p>
    <p></p>
    <p></p>
  </div>
</template>

<script setup>
import * as d3 from "d3";
import { onMounted } from "vue";

onMounted(() => {
  const enterData = ["我", "是", "資", "料"];

  d3.select(".d3-Enter")
    .selectAll("p")
    .data(enterData)
    .text(d => d)
    .enter()
    .append("p")
    .text(d => d)
    .attr("style", "color: #ff0000;");
});
</script>
