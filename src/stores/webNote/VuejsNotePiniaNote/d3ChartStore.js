// stores/chartStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useChartStore = defineStore("chart", () => {
  const data = ref([]);

  async function fetchChartData() {
    const res = await fetch("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json");
    const json = await res.json();
    data.value = json.map(d => ({
      x: +d.longitude,  // 經度
      y: +d.latitude,  // 緯度
      name: d.sna  // 站名
    })); // 整理成 D3 好處理的格式
  };

  return { data, fetchChartData };
});
