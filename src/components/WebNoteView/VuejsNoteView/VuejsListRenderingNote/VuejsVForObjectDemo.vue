<template>
  <ul>
    <h4>value in fishBurger</h4>
    <li><u>value</u></li>
    <li v-for="value in fishBurger">{{ value }}</li>
    <h4>(value, key) in fishBurger</h4>
    <li><u>key</u>: <u>value</u></li>
    <li v-for="(value, key) in fishBurger">{{ key }}: {{ value }}</li>
    <h4>(value, key, index) in fishBurger</h4>
    <li><u>index</u> -&gt; <u>key</u>: <u>value</u></li>
    <li v-for="(value, key, index) in fishBurger">{{ index }} -&gt; {{ key }}: {{ value }}</li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const fishBurger = ref({
  Calories: "508 Kcal",
  Protein: "20.5 g",
  Fat: "28.7 g",
  Carbonhydrates: "39.6 g",
  Sodium: "608.0 mg"
});
</script>

<script setup></script>
