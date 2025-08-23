<!-- 把元件拆開成多個.vue檔（父元件＆子元件） -->
<template>
  <input type="text" v-model="msg" placeholder="請輸入msg內容">
  <p>外層的 msg：{{ msg }}</p>

  <ol>
    <li>
      單純的資料傳遞
      <simple-component :props-number="msg"></simple-component>
    </li>
    <li>
      替props指定資料格式
      <assign-type-component :props-number="msg"></assign-type-component>
    </li>
    <li>
      加上 <code>required: true</code>，若沒有 props，Vue 會在開發模式下顯示警告
      <required-assign-type-component></required-assign-type-component>
    </li>
    <li>
      替 props 指定預設值
      <set-props-default-component :props-number="msg || undefined"></set-props-default-component>
    </li>
    <li>
      自訂 props 驗證規則，只會在主控臺跳警告通知，不會報錯<br />
      <input type="text" v-model="msgForValidator" placeholder="請輸入 0 ~ 100"><br />
      輸入的值為 {{ msgForValidator }}
      <validator-component :props-number="Number(msgForValidator) || undefined"></validator-component>
    </li>
  </ol>
</template>

<script setup>
import { ref } from "vue";
import SimpleComponent from "./VuejsPropsTypeValidationDemo/SimpleComponent.vue";
import AssignTypeComponent from "./VuejsPropsTypeValidationDemo/AssignTypeComponent.vue";
import RequiredAssignTypeComponent from "./VuejsPropsTypeValidationDemo/RequiredAssignTypeComponent.vue";
import SetPropsDefaultComponent from "./VuejsPropsTypeValidationDemo/SetPropsDefaultComponent.vue";
import ValidatorComponent from "./VuejsPropsTypeValidationDemo/ValidatorComponent.vue";

// 父元件資料
const msg = ref("");
const msgForValidator = ref("");
</script>

<style scoped>
li {
  margin-bottom: 12px;
  line-height: 1.6;
}
</style>
