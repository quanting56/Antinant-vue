<template>
  <div class="timeline">
    <h2 id="personalTimeLine">阿蛤的時間軸</h2>
    <hr />
    <div class="timeline-box">
      <div class="timeline-line"></div>
      <section
        v-for="(group, gi) in items"
        :key="gi"
        class="timeline-group"
      >
        <header class="timeline-group-flag-header">
          <h2 class="timeline-group-flag-title">
            <span class="timeline-group-flag-title-time">{{ group.year }}</span>
            <span
              v-if="group.groupTitle"
              class="timeline-group-flag-title-text"
            >
              {{ group.groupTitle }}
            </span>
          </h2>
        </header>
        <div class="timeline-group-body">
          <section
            v-for="(unit, ui) in group.units"
            :key="ui"
            class="timeline-unit"
          >
            <header class="timeline-unit-flag-header">
              <h3 class="timeline-unit-flag-title">
                <div
                  v-if="unit.time"
                  class="timeline-unit-flag-time"
                >
                  {{ unit.time }}
                </div>
              </h3>
            </header>
            <div class="timeline-unit-body">
              <div class="timeline-record">
                <div class="timeline-record-body">
                  <div class="timeline-record-content">
                    <h4 class="timeline-record-title">{{ unit.title }}</h4>
                    <p class="timeline-record-text">{{ unit.text }}</p>
                  </div>
                  <figure
                    v-if="unit.image"
                    class="timeline-record-image"
                  >
                    <img :src="unit.image.src" :alt="unit.image.caption" />
                    <figcaption>{{ unit.image.caption }}</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  items: Array
})
</script>

<style scoped>
.timeline {
  padding: 10px;
}
.timeline-box {
  position: relative;
  margin-top: 20px;
  padding-bottom: 18px;
}
.timeline-line {
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background: #000;
}
.timeline-group {
  margin-top: 36px;
  padding-left: 20px;
}
.timeline-group-flag-header {
  position: relative;
  margin-bottom: 14px;
}
.timeline-group-flag-title {
  display: inline-flex;
  align-items: center;
  background: #a67a44;
  color: #fefae0;
  padding: 3px 10px 3px 5px;
  font-size: 20px;
}
.timeline-group-flag-title-time {
  font-weight: 300;
}
.timeline-group-flag-title-text {
  margin-left: 0.4em;
  font-weight: 400;
}
.timeline-unit {
  margin-top: 24px;
}
.timeline-unit-flag-header {
  margin-left: -20px;
  margin-bottom: 6px;
}
.timeline-unit-flag-time {
  font-size: 16px;
  font-weight: 300;
}
.timeline-unit-body {
  background: #fff;
}
.timeline-record {
  position: relative;
  padding: 12px;
  margin-bottom: 12px;
}
.timeline-record::before {
  content: '';
  position: absolute;
  top: 23px;
  left: -8px;
  width: 16px;
  height: 3px;
  background: #000;
}
.timeline-record-body {
  display: flex;
}
.timeline-record-content {
  flex: 1;
}
.timeline-record-title {
  color: #a67a44;
  font-size: 20px;
  margin-bottom: 0.2em;
}
.timeline-record-text {
  color: #404040;
  font-size: 18px;
  line-height: 1.6;
  margin-top: 0.4em;
}
.timeline-record-image {
  margin-left: 12px;
}
.timeline-record-image img {
  width: 100%;
  height: auto;
  display: block;
}
.timeline-record-image figcaption {
  text-align: center;
  color: #a67a44;
  margin-top: 0.5em;
}
</style>