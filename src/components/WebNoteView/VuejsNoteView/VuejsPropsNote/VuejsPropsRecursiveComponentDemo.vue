<template>
  <!-- Magic! -->
  <menu-component
    :title="recursiveComponentData.title"
    :child="recursiveComponentData.childNodes"></menu-component>
</template>

<script setup>
import MenuComponent from "./VuejsPropsRecursiveComponentDemo/MenuComponent.vue";

const recursiveComponentData = {
  title: '好書推薦',
  childNodes: [
    {
      title: 'Git',
      url: null,
      childNodes: [
        {
          title: '為你自己學 Git',
          url: 'https://www.tenlong.com.tw/products/9789864342662'
        }
      ]
    },
    {
      title: '前端開發',
      url: null,
      childNodes: [
        {
          title: '金魚都能懂的 CSS 選取器',
          url: 'https://www.tenlong.com.tw/products/9789864344994'
        },
        {
          title: '0 陷阱！0 誤解！8 天重新認識 JavaScript！',
          url: 'https://www.tenlong.com.tw/products/9789864344130'
        },
        {
          title: '讓 TypeScript 成為你全端開發的 ACE！',
          url: 'https://www.tenlong.com.tw/products/9789864344895'
        },
      ]
    },
    {
      title: 'IoT',
      url: null,
      childNodes: [
        {
          title: 'IoT沒那麼難！新手用 JavaScript 入門做自己的玩具！',
          url: 'https://www.tenlong.com.tw/products/9789864345328'
        }
      ]
    },
    {
      title: 'Chatbot',
      url: null,
      childNodes: [
        {
          title: '人人可作卡米狗：從零打造自己的 LINE 聊天機器人',
          url: 'https://www.tenlong.com.tw/products/9789864342938'
        }
      ]
    }
  ]
};
</script>

<style scoped></style>
