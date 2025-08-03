<template>
  <div class="d3-Join2">
    <p></p>
    <p></p>
    <p></p>
  </div>
</template>

<script setup>
import * as d3 from "d3";
import { onMounted } from "vue";

onMounted(() => {
  const joinData2 = ["我", "是", "資", "料"];

  d3.select('.d3-Join2')
    .selectAll('p')
    .data(joinData2)
    .join(
       enter => enter.append('p')
                     .text(d => d)
                     .attr("style", "color: #ff0000;"),
       update => update,
       exit => exit.remove()
    )
    .text(d => d);
});
</script>
