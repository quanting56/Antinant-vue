<template>
  <div>這次轉帳的金額（若未輸入則顯示為0）： <b>{{ propsNumber }}</b> 元</div>
</template>

<script setup>
defineProps({
  propsNumber: {
    default: 0

    // 可以是陣列
    // default: [1,2,3]
            
    // 也可以是物件的預設內容
    // default: {
    //   msg: "Hello Vue3.0!"
    // }
  }
});
</script>