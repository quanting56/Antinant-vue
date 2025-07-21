<template>
  <div class="timeline">
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
              <h3
                v-if="unit.time"
                class="timeline-unit-flag-title"
              >
                <div class="timeline-unit-flag-time">
                  {{ unit.time }}
                </div>
              </h3>
            </header>
            <div class="timeline-unit-body">
              <div class="timeline-record">
                <div class="timeline-record-body">
                  <div class="timeline-record-content">
                    <h4 class="timeline-record-title">{{ unit.title }}</h4>
                    <p class="timeline-record-text" v-html="unit.text"></p>
                  </div>
                  <figure
                    v-if="unit.image"
                    class="timeline-record-image"
                  >
                    <img
                      :src="resolveImages(unit.image.src)"
                      :alt="unit.image.caption"
                      :title="unit.image.description"
                    />
                    <figcaption>{{ unit.image.caption }}</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
    <p class="timeline-record-text">
      <span class="timeline-note">本時間軸參考改編自<a href="https://medium.com/twreporter/twreporter-lab-timeline-news-tool-4fe8db1035f2" target="_blank">《報導者》新聞小工具上線公測part 2：「大事記」圖表產生器</a></span>
    </p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Vite 的批次導入工具（batch import），適合用來載入靜態資源
const images = import.meta.glob("../../assets/about-me/timeline/*", { eager: true, as: "url"});

// JSON 檔裡面只有 fileName，透過函式把它轉成路徑
function resolveImages(fileName) {
  return images[`../../assets/about-me/timeline/${fileName}`]
};

const props = defineProps({
  items: Array
});
</script>

<style scoped>
.timeline {
  padding: 2px 6px;
}

.timeline-box {
  position: relative;
}

.timeline-line {
  border-right: 2px solid #000000;
  width: 13px;
  height: 100%;
  position: absolute;
  left: -1px;
  top: 0;
}

.timeline-group-flag-header {
  position: relative;
  margin-bottom: 14px;
}

.timeline-group-flag-title {
  margin: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  margin-left: 6px;
  background: #a67a44;
  font-family: ff-tisa-web-pro, source-han-sans-traditional, Noto Sans TC, PingFang TC, Apple LiGothic Medium, Roboto, Microsoft JhengHei, Lucida Grande, Lucida Sans Unicode, sans-serif;
  color: #fefae0;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  padding: 3px 10px 3px 5px;
  line-height: 1.28;
}

.timeline-group-flag-title-time {
  font-size: 20px;
  font-weight: 300;
  -webkit-letter-spacing: 0.5px;
  -moz-letter-spacing: 0.5px;
  -ms-letter-spacing: 0.5px;
  letter-spacing: 0.5px;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.timeline-group-flag-title-text {
  font-size: 20px;
  font-weight: 400;
  margin-left: 0.4em;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
}

.timeline-record {
  font-family: ff-tisa-web-pro, source-han-sans-traditional, Noto Sans TC, PingFang TC, Apple LiGothic Medium, Roboto, Microsoft JhengHei, Lucida Grande, Lucida Sans Unicode, sans-serif;
  position: relative;
  padding: 12px;
  margin-bottom: 12px;
}

.timeline-record::before {
  content: '';
  display: block;
  height: 3px;
  width: 16px;
  background: #000000;
  position: absolute;
  top: 26px;
  left: -8px;
}

.timeline-record-body {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

@media (max-width: 587px) {
  .timeline-record-body {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}

@media (max-width: 587px) {
  .timeline-record-content {
    -webkit-flex: 1 0 100%;
    -ms-flex: 1 0 100%;
    flex: 1 0 100%;
    -webkit-order: 2;
    -ms-flex-order: 2;
    order: 1;
  }
}

@media (min-width: 588px) {
  .timeline-record-content {
    -webkit-flex: 1 1 100%;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
  }
}

.timeline-record-title {
  margin: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  color: #a67a44;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0.2em;
}

.timeline-record-text {
  vertical-align: baseline;
  margin: 0;
  color: #404040;
  font-size: 18px;
  line-height: 1.6;
  font-weight: 300;
  -webkit-letter-spacing: 1.2px;
  -moz-letter-spacing: 1.2px;
  -ms-letter-spacing: 1.2px;
  letter-spacing: 1.2px;
  margin-top: 0.4em;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}

.timeline-record-text:first-child {
  margin-top: 0;
}

.timeline-record-text strong,
.timeline-record-text em {
  color: #262626;
}

::v-deep(.timeline-record-text a),
::v-deep(.timeline-record-text a:link),
::v-deep(.timeline-record-text a:visited),
::v-deep(.timeline-record-text a:active) {
  color: #a67a44;
  -webkit-text-decoration: none;
  text-decoration: none;
  border-bottom: 1px solid #d8d8d8;
}

::v-deep(.timeline-record-text a:hover) {
  border-bottom: 1px solid #a67a44;
}

.timeline-record-image {
  margin: 0;
}

@media (max-width: 1411px) {
  .timeline-record-image {
    -webkit-flex: 1 1 100%;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
    padding: 15px;
    margin-bottom: 12px;
  }
  .timeline-record-image > figcaption {
    margin-top: 2px;
    margin-bottom: .5em;
    line-height: 1.4;
  }
}

@media (min-width: 1412px) and (max-width: 1411px) {
  .timeline-record-image {
    -webkit-flex: 1 0 280px;
    -ms-flex: 1 0 280px;
    flex: 1 0 280px;
    margin-left: 10px;
  }
}

@media (min-width: 1212px) {
  .timeline-record-image {
    -webkit-flex: 1 0 350px;
    -ms-flex: 1 0 350px;
    flex: 1 0 500px;
    margin-left: 12px;
  }
}

.timeline-record-image > img {
  width: 100%;
  height: auto;
  display: block;
}

.timeline-record-image > figcaption {
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  color: #a67a44;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}

.timeline-record-image > figcaption::before {
  content: "▲ ";
  font-size: 15px;
  font-weight: 500;
  color: #a67a44;
}

.timeline-unit-flag-header {
  margin-left: -20px;
  margin-bottom: 6px;
  position: relative;
  max-width: 94%;
}

.timeline-unit-flag-title {
  margin: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  font-family: ff-tisa-web-pro, source-han-sans-traditional, Noto Sans TC, PingFang TC, Apple LiGothic Medium, Roboto, Microsoft JhengHei, Lucida Grande, Lucida Sans Unicode, sans-serif;
  background: #000000;
  color: #ffffff;
  margin-left: 13px;
  display: inline-block;
  padding: 2px 12px 2px 5px;
  line-height: 1.28;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
}

.timeline-unit-flag-time {
  font-size: 16px;
  font-weight: 300;
  -webkit-letter-spacing: 0.9px;
  -moz-letter-spacing: 0.9px;
  -ms-letter-spacing: 0.9px;
  letter-spacing: 0.9px;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.timeline-group-body {
  background: transparent;
  margin-left: 20px;
}

.timeline-unit-body {
  background: #ffffff;
}

.timeline-group {
  margin-top: 36px;
}

.timeline-group:first-of-type {
  margin-top: 12px;
}

.timeline-unit {
  margin-top: 24px;
}

.timeline-unit:first-of-type {
  margin-top: 12px;
}

#timeline-box {
  position: relative;
  padding-right: 13px;
  padding-bottom: 18px;
  margin-top: 20px;
  margin-bottom: 20px;
}

#timeline-box,
#timeline-box * {
  box-sizing: border-box;
}

@media (max-width: 1023px) {
  #timeline-box {
    text-align: initial;
  }
}

.timeline-note {
  font-size: 14px;
  font-style: italic;
}
</style>