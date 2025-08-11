<template>
  <div
    ref="containerRef"
    :style="{ width: width + 'px' }"
    style="position: relative;"
  >
    <svg ref="svgRef" :width="width" :height="height"></svg>
    <div class="btn-container">
      <button
        v-for="m in months"
        :key="m.key"
        class="month-btn"
        :class="{ 'active-month-btn': selectedMonth === m.key }"
        @click="loadAndUpdate(m.key)"
      >
        {{ m.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as d3 from "d3";

// 你的 JSON 檔
import energyGain202305 from "../../../../assets/web-note-view/d3js-note-view/energy-gain/202305.json";
import energyGain202306 from "../../../../assets/web-note-view/d3js-note-view/energy-gain/202306.json";
import energyGain202307 from "../../../../assets/web-note-view/d3js-note-view/energy-gain/202307.json";

const width = 420;
const height = 280;
const margin = 15;
const MEALS = ["breakfast", "lunch", "dinner", "snack"];

const containerRef = ref(null);
const svgRef = ref(null);
const selectedMonth = ref("202305");

const months = [
  { key: "202305", label: "2023/05", data: energyGain202305 },
  { key: "202306", label: "2023/06", data: energyGain202306 },
  { key: "202307", label: "2023/07", data: energyGain202307 }
];

// D3狀態（提升到外層，方便共用與清理）
let svg, g, arcsGroup, labelsGroup, color, pie, arc, outerArc, tooltipEl;

function aggregateByMeal(dailyRows) {
  // dailyRows是json檔裡每日物件陣列
  return MEALS.map(meal => {
    const total = d3.sum(dailyRows, r => +r[meal] || 0);
    return { date: meal, total };
  });
}

function createTooltip(container) {
  const t = d3.select(container)
              .append("div")
              .attr("class", "d3-tooltip")
              .style("position", "absolute")
              .style("pointer-events", "none")
              .style("display", "none")
              .style("background", "#f2f2f2")
              .style("color", "#121212")
              .style("border", "1px solid #121212")
              .style("border-radius", "6px")
              .style("padding", "8px")
              .style("font-size", "13px")
              .style("z-index", 1000);
  return t;
}

function updateChartFromDaily(rawDailyRows) {
  // 1) 聚合成各餐別的資料
  const agg = aggregateByMeal(rawDailyRows);
  const totalAll = d3.sum(agg, d => d.total) || 1;
  agg.forEach(d => (d.percentage = Math.round((d.total / totalAll) * 100)));

  // 2) 產生pieData
  const pieData = pie(agg);

  // 3) 每一片slices，以餐別名稱作為key
  const slices = arcsGroup.selectAll("path.slice").data(pieData, d => d.data.date);

  // 新增部分
  const enterSlices = slices.enter()
                            .append("path")
                            .attr("class", "slice")
                            .attr("fill", d => color(d.data.date))
                            .attr("stroke", "#f2f2f2")
                            .attr("stroke-width", 3)
                            .each(function(d) { this._current = d; }) // 保存初始 state
                            .style("opacity", 0)
                            .style("transform-box", "fill-box")
                            .style("transform-origin", "center");

  // 合併新增與更新部分
  const mergedSlices = enterSlices.merge(slices);

  // 在合併後的selection上綁定事件
  mergedSlices.style("cursor", "pointer")
              .on("mouseover", function(event, d) {
                const el = d3.select(this);
                el.raise();
                el.transition().duration(500).style("transform", "scale(1.08)");
              
                // 放大標籤文字
                labelsGroup.selectAll("text.label")
                           .filter(ld => ld.data.date === d.data.date)
                           .transition()
                           .duration(500)
                           .style("font-size", "20px");
              
                // 在相對容器位置顯示tooltip
                const [mx, my] = d3.pointer(event, containerRef.value);
                tooltipEl.html(`共 ${d3.format(",")(d.data.total)} 大卡`)  // 每三位一個逗號
                         .style("left", `${mx + 12}px`)
                         .style("top", `${my + 12}px`)
                         .style("display", "block");
              })
              .on("mousemove", function(e) {
                const [mx, my] = d3.pointer(e, containerRef.value);
                tooltipEl.style("left", `${mx + 12}px`)
                         .style("top", `${my + 12}px`);
                d3.select(this)
                  .style("filter", "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.45))");
              })
              .on("mouseleave", function(event, d) {
                d3.select(this)
                  .transition()
                  .duration(500)
                  .style("transform", "scale(1)")
                  .style("filter", null);

                labelsGroup.selectAll("text.label")
                           .filter(ld => ld.data.date === d.data.date)
                           .transition().duration(500)
                           .style("font-size", "14px");

                tooltipEl.style("display", "none");
              });

  // 4) 使用d3.interpolate()來動畫改變弧形的d屬性
  mergedSlices.transition()
              .duration(500)
              .style("opacity", 1)
              .attrTween("d", function(d) {
                const prev = this._current || d;
                const i = d3.interpolate(prev, d);
                this._current = i(1);
                return t => arc(i(t));
              });

  // 刪除部分
  slices.exit()
        .transition()
        .duration(500)
        .style("opacity", 0)
        .remove();

  const mealType = d3.scaleOrdinal()
                     .domain(MEALS)
                     .range(["早餐", "午餐", "晚餐", "點心"]);

  const texts = labelsGroup.selectAll("text.label")
                           .data(pieData, d => d.data.date);

  const enterTexts = texts.enter()
                          .append("text")
                          .attr("class", "label")
                          .attr("text-anchor", "middle")
                          .style("font-size", "14px")
                          .each(function(d){ this._current = d; })
                          .style("opacity", 0);

  const mergedTexts = enterTexts.merge(texts);

  mergedTexts.transition()
             .duration(500)
             .attrTween("transform", function(d) {
               const prev = this._current || d;
               const i = d3.interpolate(prev, d);
               this._current = i(1);
               return t => `translate(${outerArc.centroid(i(t))})`;
             })
             .tween("text", function(d) {
               const raw = this.textContent.replace(/[^\d]/g, "");
               const start = raw !== "" ? +raw : d.data.percentage;
               const interp = d3.interpolateRound(start, d.data.percentage);
               return t => d3.select(this).text(`${mealType(d.data.date)} ${interp(t)}%`);
             })
             .style("opacity", 1);

  texts.exit()
       .transition()
       .duration(500)
       .style("opacity", 0)
       .remove();
}

function loadAndUpdate(monthKey) {
  selectedMonth.value = monthKey;
  const row = months.find(m => m.key === monthKey);
  if (!row) return;
  updateChartFromDaily(row.data);
}

onMounted(() => {
  svg = d3.select(svgRef.value);
  svg.selectAll("*").remove();  // 防呆清空

  g = svg.append("g")
         .attr("transform", `translate(${width/2}, ${height/2})`);

  arcsGroup = g.append("g")
               .attr("class","arcs-group");
  labelsGroup = g.append("g")
                 .attr("class","labels-group");

  color = d3.scaleOrdinal()
            .domain(MEALS)
            .range(d3.schemeTableau10);

  const radius = Math.min(width, height)/2 - margin;

  pie = d3.pie().value(d => d.total).sort(null);

  arc = d3.arc()
          .innerRadius(0)
          .outerRadius(radius);
  outerArc = d3.arc()
               .innerRadius(radius - 10)
               .outerRadius(radius);

  // 建立可重複使用的tooltip
  tooltipEl = createTooltip(containerRef.value);

  // 初始繪製
  loadAndUpdate(selectedMonth.value);
});

onBeforeUnmount(() => {
  // 中斷過度動畫並移除tooltip
  d3.select(svgRef.value).selectAll("*").interrupt();
  d3.select(containerRef.value).selectAll(".d3-tooltip").remove();
});
</script>

<style scoped>
.btn-container {
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-top: 8px;
}

.month-btn {
  padding: 6px 12px;
  font-size: 14px;
  border: 1px solid #dc3545;
  background: #fff;
  color: #dc3545;
  border-radius: 6px;
  cursor: pointer;
}

.month-btn:hover {
  background:#dc3545;
  color:#fff;
}

.active-month-btn {
  background:#e09500;
  color:#fff;
  border-color: #e09500;
}

.slice {
  transition: transform 0.12s ease;
  transform-origin: center;
  transform-box: fill-box;
}

.d3-tooltip {
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
}
</style>
