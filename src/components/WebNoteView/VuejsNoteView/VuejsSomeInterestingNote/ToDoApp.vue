<template>
  <div class="todo-list">
    <div class="section">
      <h3>待辦事項</h3>
      <div>
        <input
          v-model="todo"
          @keyup.enter="add"
          type="text"
          placeholder="在此輸入待辦事項"
        />
        <button @click="add">Add</button>
      </div>

      <ul class="list-group">
        <li v-for="item in items" :key="item">
          <span>{{ item }}</span>
          <button @click="remove(item)">
            <span>&times;</span>
          </button>
        </li>
      </ul>
    </div>

    <div class="section">
      <h3>已完成事項</h3>
      <ul class="finished-list-group">
        <li v-for="finishedItem in finishedItems" :key="finishedItem">
          <span>{{ finishedItem }}</span>
          <button @click="removeFinishedItem(finishedItem)">
            <span>&times;</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const todo = ref("");
const items = ref(["起床", "吃早餐", "吃午餐", "吃晚餐", "每日運動"]);
const finishedItems = ref([]);

// 將輸入框新增到列表中
const add = () => {
  if (todo.value) {
    items.value.push(todo.value);
    todo.value = "";
  }
};

// 將選中的項目移到已做完的項目
const remove = (item) => {
  finishedItems.value.push(item);
  items.value = items.value.filter((v) => v !== item);
};

// 移除「已完成項目」
const removeFinishedItem = (finishedItem) => {
  finishedItems.value = finishedItems.value.filter((v) => v !== finishedItem);
};
</script>

<style scoped>
.todo-list {
  display: flex;
  flex-direction: row; /* 預設即為row */
  justify-content: space-between;
  gap: 2rem; /* 電腦版左右間距 */
  flex-wrap: wrap;
}

.section {
  flex: 1 1 45%; /* 
    flex-grow: 1 → 可以放大填滿空間 
    flex-shrink: 1 → 可以縮小
    flex-basis: 45% → 初始寬度為父元素的 45%
  */
  min-width: 300px;
}

ul {
  list-style-type: none;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  margin: 4px 0;
  background-color: #f0f0f0;
  border-radius: 5px;
}

button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 4px 8px;
  cursor: pointer;
}

button:hover {
  background-color: #e60000;
}

/* 手機版變成上下排列 */
@media (max-width: 768px) {
  .todo-list {
    flex-direction: column;
    gap: 1.5rem; /* 上下間距 */
  }

  .section {
    width: 100%;
  }
}
</style>
