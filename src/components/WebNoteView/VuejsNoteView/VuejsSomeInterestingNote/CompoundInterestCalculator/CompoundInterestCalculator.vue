<template>
  輸入起始金額：
  <input type="text" placeholder="本金" v-model.number="presentValue" />
  萬<br />
  利率為：<input placeholder="請輸入利率" v-model.number="rate" /> ％<br />
  <button @click="increment">1 year later</button>
  <button @click="reset">reset</button>
  <p>
    第 <b>{{ count }}</b> 年<br />
    起初 <b>{{ presentValue }}</b> 萬，After
    <b>{{ rate.toFixed(2) }}%</b> compound interest is:
    <b>{{ futureValue.toFixed(2) }} 萬</b><br />
    此時投資報酬率為
    <b>{{ ((futureValue / presentValue) * 100 - 100).toFixed(2) }}</b> ％。
  </p>
  <CompoundChart :data="futureList"></CompoundChart>
</template>

<script setup>
import { ref, computed } from "vue";
import CompoundChart from "./CompoundInterestCalculatorChart.vue";

const count = ref(0);
const presentValue = ref(100);
const rate = ref(5);
const futureValue = computed(
  () => presentValue.value * Math.pow(1 + rate.value / 100, count.value)
);

const increment = () => {
  count.value++;
};

const reset = () => {
  count.value = 0;
  presentValue.value = 100;
  rate.value = 5;
};

const futureList = computed(() => {
  const result = [];
  for (let i = 0; i <= count.value; i++) {
    result.push(
      Number(presentValue.value * Math.pow(1 + rate.value / 100, i).toFixed(2))
    );
  }
  return result;
});
</script>

<style scoped>
button {
  background-color: #ff4d4d;
  color: white;
  border: 1px solid orange;
  border-radius: 3px;
  padding: 4px 8px;
  cursor: pointer;
  gap: 2rem;
}

button:hover {
  background-color: #e60000;
}
</style>
