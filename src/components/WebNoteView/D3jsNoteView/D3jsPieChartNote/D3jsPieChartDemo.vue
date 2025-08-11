<template>
  <svg
    ref="pieChartSvgRef"
    :width="width"
    :height="height"
  ></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

// 圖表尺寸與內邊距設定
const width = 420;
const height = 280;
const margin = 15;

const pieChartSvgRef = ref(null);

const rawData = [
  { item: "交通", cost: 3000 },
  { item: "房租", cost: 12000 },
  { item: "日常用品", cost: 1400 },
  { item: "吃飯", cost: 4000 },
  { item: "交際應酬", cost: 2400 }
];

onMounted(() => {
  const svg = d3.select(pieChartSvgRef.value);

  // 建立圓餅圖的群組元素"g"，用來容納圓餅圖的切片
  const g = svg.append("g")
               .attr("transform", `translate(${width / 2}, ${height / 2})`);

  // 設定顏色比例尺，從"d3.schemeSet2"配色方案中選取顏色
  const color = d3.scaleOrdinal().range(d3.schemeSet2);

  // 設定圓餅圖的半徑
  const radius = Math.min(width, height) / 2 - margin;

  // 設定圓餅圖的生成器，指定根據"cost"屬性來生成圖表
  const pieGenerator = d3.pie().value((d) => d.cost);

  // 使用圓餅圖生成器將資料轉換為可以繪製的形式
  const arcData = pieGenerator(rawData);

  // 設定每個圓餅圖切片的弧度生成器，定義內半徑和外半徑
  const arc = d3.arc()
                .innerRadius(0)  // 設定內半徑為0（實心圓）
                .outerRadius(radius)  // 設定外半徑為計算出的半徑值
                .padAngle(0);  // 設定每個切片之間的間隔角度為0

  // 設定外弧，用於放置標籤或其他用途
  const outerArc = d3.arc()
                     .innerRadius(radius - 10)
                     .outerRadius(radius);

  // 在群組元素中綁定資料並生成"path"元素，代表圓餅圖的每一塊
  const slices = g.selectAll("path")
                  .data(arcData)
                  .join("path")
                  .attr("d", arc)  // 根據生成的弧形路徑繪製圓餅圖
                  .attr("fill", color)  // 根據資料設定填充顏色
                  .attr("stroke", "#ffffff")  // 設定弧形的邊框顏色為白色
                  .attr("stroke-width", "3px")  // 設定邊框寬度為3像素
                  .style("opacity", 1);  // 設定每個切片的透明度為1（不透明）

  // 加上每個區塊的數字標示，計算百分比並設定標籤文字
  const total = d3.sum(rawData, (d) => d.cost);  // 計算總支出金額
  rawData.forEach((i) => {  // 透過一個forEach迴圈，計算每項支出佔總額的百分比
    i.percentage = Math.round((i.cost / total) * 100);  // 在原始data新增一個名為"percentage"的新屬性，儲存百分比
  });

  // 綁定標籤資料，生成"text"元素並設定位置、文字內容、樣式
  const labels = g.selectAll("text")
                  .data(arcData)  // 需使用d3.pie()處理後的資料，因為原始資料沒有角度資訊
                  .join("text")
                  .attr("transform", (d) => `translate(${outerArc.centroid(d)})`)  // ".centroid()"是取得圓弧線段中心的座標
                  .text((d) => `${d.data.item} ${d.data.percentage}%`)  // "d.data"是d3.pie()處理後的資料裡所包含的原始資料部分
                  .style("text-anchor", "middle")
                  .style("font-size", 16)
                  .style("fill", "black");

  // 設定滑鼠互動事件，當滑鼠移到圓餅圖的切片上時，切片會放大並產生陰影
  slices.style("cursor", "pointer")
        .on("mouseover", (e, d) => {  // 當滑鼠移到切片上時觸發
          d3.select(e.target)
            .transition()
            .duration(500)
            .style("transform", "scale(1.1)");  // 將切片放大至1.1倍

          labels.filter((labelData) => labelData.index === d.index)  // 選取對應的標籤
                .transition()
                .duration(500)
                .style("font-size", "24px");
        })
        .on("mousemove", (e) => {
          d3.select(e.target)
            .style("filter", "drop-shadow(2px 4px 6px #000000)");  // 加上陰影效果
        })
        .on("mouseleave", (e, d) => {  // 當滑鼠離開切片時觸發
          d3.select(e.target)
            .transition()
            .duration(500)
            .style("filter", "drop-shadow(0 0 0 black)")  // 移除陰影效果
            .style("transform", "scale(1)");  // 將切片還原到原始大小

          labels.filter((labelData) => labelData.index === d.index)  // 選取對應的標籤
                .transition()
                .duration(500)
                .style("font-size", "16px");
        });
});
</script>

<style scoped></style>
