// stores/counter.js
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,  // 狀態
  }),
  getters: {
    doubleCount: (state) => state.count * 2,  // 計算屬性（像computed）
  },
  actions: {
    increment() {
      this.count++;
    },
    reset() {
      this.count = 0;
    }
  }
});