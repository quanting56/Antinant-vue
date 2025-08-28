<template>
  <button @click="addListElement()">生成一個隨機數字方塊</button><br>
  <button @click="shuffle()">給我重新排列</button><br>
  <button @click="lists.length = 0">通通蛋雕</button>

  <!-- 添增一個tag屬性，此處代表在外層加一層<ul>來包覆 -->
  <!-- <transition>的class屬性，是給外層<ul>的class屬性 -->
  <!-- 另外，內層子元素都需要加上key的唯一屬性來確保動畫正常運作 -->
  <transition-group tag="ul" class="number-list" name="number-list">
    <li v-for="item in lists" :key="item" class="number-item">{{ item }}</li>
  </transition-group>
</template>

<script setup>
import { ref } from "vue";

const lists = ref([1, 2, 3, 4, 5]);

function addListElement() {
  // 生成新數字，並且是唯一
  let randomNumber;
  do {
    randomNumber = Math.ceil(Math.random() * 100);
  } while ( lists.value.includes(randomNumber) );
  lists.value.push(randomNumber);
};

function shuffle() {
  lists.value.sort(() => Math.random() - 0.5);
}
</script>

<style scoped>
  .number-list {
    overflow: hidden;
    padding: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .number-list li {
    display: block;
    float: left;
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    background-color: #ff0000;
    color: #ffffff;
    margin-right: 1rem;
    margin-bottom: 1rem;
    font-family: system-ui;
  }

  .number-list-enter-from {
    opacity: 0;
    transform: translateY(-20px);
  }

  /* 只有在<transition-group>中才會有v-move可以使用 */
  .number-list-enter-active,
  .number-list-leave-active,
  .number-list-move {
    transition: opacity 0.7s, transform 0.7s ease;
  }

  .number-list-enter-to,
  .number-list-leave-from {
    opacity: 1;
    transform: 0;
  }

  /* 此步是為了要讓元素到同一處消失 */
  .number-list-leave-active {
    position: absolute;
  }

  .number-list-leave-to {
    opacity: 0;
  }
</style>
