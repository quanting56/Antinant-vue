<template>
  <div class="palette-container">
    <h2>🎨 Color Palette Preview</h2>

    <label for="input">輸入色碼陣列（JSON 格式）</label>
    <textarea
      id="input"
      v-model="input"
      rows="4"
      placeholder='例如：["#356323","#758323","#321114"]'
    ></textarea>

    <div class="button-group">
      <button @click="parseInput" class="btn primary">解析並顯示</button>
      <button @click="resetSample" class="btn secondary">恢復範例</button>
      <span v-if="error" class="error">{{ error }}</span>
    </div>

    <div v-if="colors.length === 0" class="empty-msg">
      尚未解析到有效色碼
    </div>

    <div v-else class="color-grid">
      <div v-for="(c, idx) in colors" :key="c + '-' + idx" class="color-card">
        <div class="color-box" :style="{ background: c, color: textColorFor(c) }">
          <span class="color-code">{{ c }}</span>
        </div>

        <div class="color-info">
          <div class="color-details">
            <span>{{ c }}</span>
            <small>RGB: {{ hexToRgbText(c) }}</small>
          </div>

          <div class="color-actions">
            <button class="btn small copy" @click="copyColor(c)">複製</button>
            <button class="btn small delete" @click="removeAt(idx)">刪除</button>
          </div>
        </div>
      </div>
    </div>

    <div class="tips">
      <p><strong>提示：</strong></p>
      <ul>
        <li>輸入需為合法 JSON 陣列，元素為 hex 色碼（支援 #fff 或 #ffffff）。</li>
        <li>你可直接修改輸入框內容後再按「解析並顯示」。</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const sample = '["#356323", "#758323", "#321114"]';
const input = ref(sample);
const colors = ref([]);
const error = ref("");

function parseInput() {
  error.value = "";
  try {
    const parsed = JSON.parse(input.value);
    if (!Array.isArray(parsed)) throw new Error("輸入必須為陣列");

    const validated = parsed
      .map((s) => (typeof s === "string" ? s.trim() : s))
      .filter(Boolean)
      .map((s) => normalizeHex(s))
      .filter(Boolean);

    if (validated.length === 0) throw new Error("沒有合法的 hex 色碼");

    colors.value = validated;
  } catch (e) {
    error.value = "解析錯誤：" + (e.message || e);
    colors.value = [];
  }
}

function normalizeHex(s) {
  if (typeof s !== "string") return null;
  const m = s.match(/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);
  if (!m) return null;
  let hex = m[1];
  if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
  return "#" + hex.toLowerCase();
}

function textColorFor(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return "#000";
  const [r, g, b] = rgb.map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return lum > 0.179 ? "#000" : "#fff";
}

function hexToRgb(hex) {
  if (!hex) return null;
  const m = hex.replace("#", "");
  if (m.length === 6) {
    return [
      parseInt(m.slice(0, 2), 16),
      parseInt(m.slice(2, 4), 16),
      parseInt(m.slice(4, 6), 16),
    ];
  }
  return null;
}

function hexToRgbText(hex) {
  const rgb = hexToRgb(hex);
  return rgb ? `rgb(${rgb.join(",")})` : "-";
}

async function copyColor(hex) {
  try {
    await navigator.clipboard.writeText(hex);
    alert(`已複製 ${hex}`);
  } catch {
    alert("複製失敗");
  }
}

function removeAt(idx) {
  colors.value.splice(idx, 1);
}

function resetSample() {
  input.value = sample;
  parseInput();
}

parseInput();
</script>

<style scoped>
.palette-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
  font-family: "Segoe UI", Arial, sans-serif;
  color: #222;
}

h2 {
  font-size: 1.6rem;
  margin-bottom: 12px;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
}

textarea {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 8px 10px;
  font-family: monospace;
  font-size: 14px;
  box-sizing: border-box;
  margin-bottom: 10px;
  resize: vertical;
}

.button-group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.btn {
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 14px;
  transition: background 0.2s, transform 0.1s;
}

.btn:hover {
  transform: scale(1.03);
}

.btn.primary {
  background-color: #2563eb;
  color: white;
}

.btn.secondary {
  background-color: #e0e0e0;
}

.btn.small {
  padding: 4px 8px;
  font-size: 13px;
}

.btn.copy {
  background-color: #4f46e5;
  color: #fff;
}

.btn.delete {
  background-color: #f3f4f6;
}

.error {
  color: #c00;
  font-size: 14px;
}

.empty-msg {
  color: #777;
  font-style: italic;
  margin-top: 10px;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.color-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
}

.color-box {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
}

.color-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  background: #fff;
}

.color-details span {
  display: block;
  font-weight: 500;
}

.color-details small {
  font-size: 12px;
  color: #666;
}

.tips {
  margin-top: 20px;
  font-size: 14px;
  color: #444;
}

.tips ul {
  margin: 6px 0 0 18px;
}
</style>
