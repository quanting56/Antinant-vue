<template>
  <section id="usefulBootstrapComponent" class="segmentation" style="min-height: 100vh;">
        <h2 class="bg-warning">一些好用的Bootstrap元件</h2>
        <hr>
        <div style="padding: 10px;">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-2">
                <!-- 導覽元件 -->
                <ul id="usefulBootstrapComponent_Tab" class="nav nav-pills flex-column">
                  <li class="nav-item"><a class="nav-link active" data-bs-toggle="pill" href="#noteButton">按鈕（Button）</a></li>
                  <li class="nav-item"><a class="nav-link" data-bs-toggle="pill" href="#noteForm">表單（Form）</a></li>
                  <li class="nav-item"><a class="nav-link" data-bs-toggle="pill" href="#noteBreadcrumb">麵包屑（Breadcrumb）</a></li>
                  <li class="nav-item"><a class="nav-link" data-bs-toggle="pill" href="#noteAlert">警報效果（Alert）</a></li>
                  <li class="nav-item"><a class="nav-link" data-bs-toggle="pill" href="#noteDropdown">下拉式清單（Dropdown）</a></li>
                </ul>
              </div>
              <div class="col-md-10">
                <!-- 標籤頁內容 -->
                <div id="usefulBootstrapComponent_TabContent" class="tab-content">
                  <div id="noteButton" class="tab-pane fade show active">
                    <h3>Bootstrap按鈕</h3>
                    <ul>
                      <li class="mb-3">按鈕有三種寫法：
                        <ol>
                          <li><code>&lt;a class="btn" href="#" role="botton"&gt;</code>按鈕名稱<code>&lt;/a&gt;</code></li>
                          <li><code>&lt;button class="btn" type="submit"&gt;</code>按鈕名稱<code>&lt;/button&gt;</code></li>
                          <li><code>&lt;input class="btn" type="submit" value="按鈕名稱"&gt;</code></li>
                        </ol>
                      </li>
                      <li class="mb-4">一般紅色按鈕<br>class="btn btn-danger"<br>
                        <input class="btn btn-danger mt-2" type="button" value="測試按鈕1">
                      </li>
                      <li class="mb-4">預設啟用的一般紅色按鈕<br>class="btn btn-danger <b>active</b>"<br>
                        <input class="btn btn-danger active mt-2" type="button" value="測試按鈕2">
                      </li>
                      <li class="mb-4">停用的一般紅色按鈕<br>xclass="btn btn-danger <b>disabled</b>"<br>
                        <input class="btn btn-danger disabled mt-2" type="button" value="測試按鈕3">
                      </li>
                      <li class="mb-4">比較小的紅色按鈕<br>class="btn btn-danger <b>btn-sm</b>"<br>
                        <input class="btn btn-danger btn-sm mt-2" type="button" value="測試按鈕4">
                      </li>
                      <li class="mb-4">比較大的紅色按鈕<br>class="btn btn-danger <b>btn-lg</b>"<br>
                        <input class="btn btn-danger btn-lg mt-2" type="button" value="測試按鈕5">
                      </li>
                      <li class="mb-4">各種顏色的一般按鈕<br>class="btn （按鈕內）"<br>
                        <input class="btn btn-primary mt-2" type="button" value=".btn-primary">
                        <input class="btn btn-secondary mt-2" type="button" value=".btn-secondary">
                        <input class="btn btn-success mt-2" type="button" value=".btn-success">
                        <input class="btn btn-danger mt-2" type="button" value=".btn-danger">
                        <input class="btn btn-warning mt-2" type="button" value=".btn-warning">
                        <input class="btn btn-info mt-2" type="button" value=".btn-info">
                        <input class="btn btn-light mt-2" type="button" value=".btn-light">
                        <input class="btn btn-dark mt-2" type="button" value=".btn-dark">
                        <input class="btn btn-link mt-2" type="button" value=".btn-link">
                      </li>
                      <li class="mb-4">各種外框顏色的一般按鈕<br>class="btn （按鈕內）"<br>
                        <input class="btn btn-outline-primary mt-2" type="button" value=".btn-outline-primary">
                        <input class="btn btn-outline-secondary mt-2" type="button" value=".btn-outline-secondary">
                        <input class="btn btn-outline-success mt-2" type="button" value=".btn-outline-success">
                        <input class="btn btn-outline-danger mt-2" type="button" value=".btn-outline-danger">
                        <input class="btn btn-outline-warning mt-2" type="button" value=".btn-outline-warning">
                        <input class="btn btn-outline-info mt-2" type="button" value=".btn-outline-info">
                        <input class="btn btn-outline-light mt-2" type="button" value=".btn-outline-light">
                        <input class="btn btn-outline-dark mt-2" type="button" value=".btn-outline-dark">
                        <input class="btn btn-outline-link mt-2" type="button" value=".btn-outline-link">
                      </li>
                    </ul>
                  </div>
                  <div id="noteForm" class="tab-pane fade">
                    <h3>Bootstrap表單</h3>
                    <!-- 導覽元件 -->
                    <ul class="nav nav-tabs mb-3">
                      <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#noteForm1">基本表單</a></li>
                      <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#noteForm2">有addon的表單</a></li>
                    </ul>
                    <!-- 標籤頁內容 -->
                    <div class="tab-content">
                      <div id="noteForm1" class="tab-pane fade show active">
                        <h4>基本表單</h4>
                        <form>
                          <div class="mt-3">
                            <label for="userEmail" class="form-label">電子郵件</label>
                            <input type="email" class="form-control" id="userEmail">
                            <div id="emailHelp" class="form-text">我們不會洩漏你的個資</div>
                          </div>
                          <div class="mt-3">
                            <label for="userPWD" class="form-label">密碼</label>
                            <input type="password" class="form-control" id="userPWD">
                          </div>
                          <button type="submit" class="btn btn-primary">提交</button>
                        </form>
                        <div class="mt-3">本段code：
<pre><code class="html">
  &lt;form&gt;
    &lt;div class="mb-3"&gt;
      &lt;label for="userEmail" class="form-label"&gt;電子郵件&lt;/label&gt;
      &lt;input type="email" class="form-control" id="userEmail"&gt;
      &lt;div id="emailHelp" class="form-text"&gt;我們不會洩漏你的個資&gt;/div&gt;
    &lt;/div&gt;
    &lt;div class="mb-3"&gt;
      &lt;label for="userPWD" class="form-label"&gt;密碼&lt;/label&gt;
      &lt;input type="password" class="form-control" id="userPWD"&gt;
    &lt;/div&gt;
    &lt;button type="submit" class="btn btn-primary"&gt;提交&lt;/button&gt;
  &lt;/form&gt;

</code></pre>
                        </div>
                      </div>
                      <div id="noteForm2" class="tab-pane fade">
                        <h4>有addon的表單</h4>
                        <form class="row g-2">
                          <div class="col-md-6">
                            <div class="input-group mb-3">
                              <span class="input-group-text" id="addon1">@</span>
                              <input type="text" class="form-control" placeholder="請輸入拍攝地點">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="input-group mb-3">
                              <span class="input-group-text" id="addon2">與</span>
                              <input type="text" class="form-control" placeholder="誰">
                              <span class="input-group-text" id="addon3">一起的行程</span>
                            </div>
                          </div>
                        </form>
                        <div class="mt-3">本段code：
<pre><code class="html">
  &lt;form class="row g-2"&gt;
    &lt;div class="col-md-6"&gt;
      &lt;div class="input-group mb-3"&gt;
        &lt;span class="input-group-text" id="addon1"&gt;@&lt;/span&gt;
        &lt;input type="text" class="form-control" placeholder="請輸入拍攝地點"&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-md-6"&gt;
      &lt;div class="input-group mb-3"&gt;
        &lt;span class="input-group-text" id="addon2"&gt;與&lt;/span&gt;
        &lt;input type="text" class="form-control" placeholder="誰"&gt;
        &lt;span class="input-group-text" id="addon3"&gt;一起的行程&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/form&gt;

</code></pre>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="noteBreadcrumb" class="tab-pane fade">
                    <h3>麵包屑（Breadcrumb）</h3>
                    <ul class="breadcrumb">
                      <li class="breadcrumb-item"><a href="#">首頁</a></li>
                      <li class="breadcrumb-item"><a href="#">甜點</a></li>
                      <li class="breadcrumb-item active">馬卡龍</li>
                    </ul>
                    <div class="mt-3">本段code：
<pre><code class="html">
  &lt;ul class="breadcrumb"&gt;
    &lt;li class="breadcrumb-item"&gt;&lt;a href="#"&gt;首頁&lt;/a&gt;&lt;/li&gt;
    &lt;li class="breadcrumb-item"&gt;&lt;a href="#"&gt;甜點&lt;/a&gt;&lt;/li&gt;
    &lt;li class="breadcrumb-item active"&gt;馬卡龍&lt;/li&gt;
  &lt;/ul&gt;

</code></pre>
                    </div>
                  </div>
                  <div id="noteAlert" class="tab-pane fade">
                    <h3>警報效果（Alert）</h3>
                    <div class="alert alert-success" role="alert">
                      <strong>年終特惠！</strong>雙十連假出國馬上報名一人限折3000元！
                      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    </div>
                    <div class="alert alert-info" role="alert">
                      <strong>賞楓一起Go！</strong>日本賞楓團享四人同行一人免費！
                    </div>
                    <div class="alert alert-warning" role="alert">
                      <a class="alert-link" href="#"><strong>東澳特賣會！</strong></a>雪梨煙火秀再送免費擁抱無尾熊！
                    </div>
                    <div class="alert alert-danger" role="alert">
                      <strong>一起扮鬼趣！</strong>香港迪士尼歡度萬聖節9,888元起！
                    </div>
                    <div class="mt-3">本段code：
<pre><code class="html">
  &lt;div class="alert alert-success" role="alert"&gt;
    &lt;strong&gt;年終特惠！&lt;/strong&gt;雙十連假出國馬上報名一人限折3000元！
    &lt;button type="button" class="btn-close" data-bs-dismiss="alert"&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="alert alert-info" role="alert"&gt;
    &lt;strong&gt;賞楓一起Go！&lt;/strong&gt;日本賞楓團享四人同行一人免費！
  &lt;/div&gt;
  &lt;div class="alert alert-warning" role="alert"&gt;
    &lt;a class="alert-link" href="#"&gt;&lt;strong&gt;東澳特賣會！&lt;/strong&gt;&lt;/a&gt;雪梨煙火秀再送免費擁抱無尾熊！
  &lt;/div&gt;
  &lt;div class="alert alert-danger" role="alert"&gt;
    &lt;strong&gt;一起扮鬼趣！&lt;/strong&gt;香港迪士尼歡度萬聖節9,888元起！
  &lt;/div&gt;

</code></pre>
                    </div>
                  </div>
                  <div id="noteDropdown" class="tab-pane fade">
                    <h3>下拉式清單（Dropdown）</h3>
                    <!-- 導覽元件 -->
                    <ul class="nav nav-tabs mb-3">
                      <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#singleButton">單一按鈕下拉式清單</a></li>
                      <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#splitButton">分離按鈕下拉式清單</a></li>
                      <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#btngroup3">巢狀按鈕群組</a></li>
                    </ul>
                    <!-- 標籤頁內容 -->
                    <div class="tab-content">
                      <div id="singleButton" class="tab-pane fade show active">
                        <h4>單一按鈕下拉式清單<small>（Single button）</small></h4>
                        <div class="dropdown">
                          <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">旅遊</button>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">澎湖之旅</a></li>
                            <li><a class="dropdown-item" href="#">高屏行</a></li>
                            <li><a class="dropdown-item" href="#">二林實地考察</a></li>
                            <li><a class="dropdown-item" href="#">蘭嶼小旅行</a></li>
                          </ul>
                          <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">一些文章</button>
                          <ul class="dropdown-menu">
                            <li><h3 class="dropdown-header">攝影相關</h3></li>
                            <li><a class="dropdown-item" href="#">攝影</a></li>
                            <li><a class="dropdown-item" href="#">攝影社故事</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">公路</a></li>
                            <li><a class="dropdown-item" href="#">投資</a></li>
                          </ul>
                        </div>
                        <div class="mt-3">本段code：
<pre><code class="html">
  &lt;div class="dropdown"&gt;
    &lt;button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"&gt;旅遊&lt;/button&gt;
    &lt;ul class="dropdown-menu"&gt;
      &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;澎湖之旅&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;高屏行&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;二林實地考察&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;蘭嶼小旅行&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"&gt;一些文章&lt;/button&gt;
    &lt;ul class="dropdown-menu"&gt;
      &lt;li&gt;&lt;h3 class="dropdown-header"&gt;攝影相關&lt;/h3&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;攝影&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;攝影社故事&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;公路&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;投資&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;

</code></pre>
                        </div>
                      </div>
                      <div id="splitButton" class="tab-pane fade">
                        <h4>分離按鈕下拉式清單<small>（Split button）</small></h4>
                        <div class="btn-group">
                          <button type="button" class="btn btn-primary">旅遊</button>
                          <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
                            <span class="visually-hidden">Toggle Dropdown</span>
                          </button>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">澎湖之旅</a></li>
                            <li><a class="dropdown-item" href="#">高屏行</a></li>
                            <li><a class="dropdown-item" href="#">二林實地考察</a></li>
                            <li><a class="dropdown-item" href="#">蘭嶼小旅行</a></li>
                          </ul>
                        </div>
                        <div class="btn-group">
                          <button type="button" class="btn btn-primary">一些文章</button>
                          <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
                            <span class="visually-hidden">Toggle Dropdown</span>
                          </button>
                          <ul class="dropdown-menu">
                            <li><h3 class="dropdown-header">攝影相關</h3></li>
                            <li><a class="dropdown-item" href="#">攝影</a></li>
                            <li><a class="dropdown-item" href="#">攝影社故事</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">公路</a></li>
                            <li><a class="dropdown-item" href="#">投資</a></li>
                          </ul>
                        </div>
                        <div class="mt-3">本段code：
<pre><code class="html">
  &lt;div class="btn-group"&gt;
    &lt;button type="button" class="btn btn-primary"&gt;旅遊&lt;/button&gt;
    &lt;button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"&gt;
      &lt;span class="visually-hidden"&gt;Toggle Dropdown&lt;/span&gt;
    &lt;/button&gt;
    &lt;ul class="dropdown-menu"&gt;
      &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;澎湖之旅&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;高屏行&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;二林實地考察&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;蘭嶼小旅行&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div class="btn-group"&gt;
    &lt;button type="button" class="btn btn-primary"&gt;一些文章&lt;/button&gt;
    &lt;button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown"&gt;
      &lt;span class="visually-hidden"&gt;Toggle Dropdown&lt;/span&gt;
    &lt;/button&gt;
    &lt;ul class="dropdown-menu"&gt;
      &lt;li&gt;&lt;h3 class="dropdown-header"&gt;攝影相關&lt;/h3&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;攝影&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;攝影社故事&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;hr class="dropdown-divider"&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;公路&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;投資&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;

</code></pre>
                        </div>
                      </div>
                      <div id="btngroup3" class="tab-pane fade">
                        <h4>巢狀按鈕群組</h4>
                        <div class="btn-group" role="group">
                          <button type="button" class="btn btn-warning">首頁</button>
                          <button type="button" class="btn btn-warning">票券</button>
                          <div class="btn-group" role="group">
                            <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown">訂房</button>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">國外訂房</a></li>
                              <li><a class="dropdown-item" href="#">國內訂房</a></li>
                            </ul>
                          </div>
                        </div>
                        <div class="mt-3">本段code：
<pre><code class="html">
  &lt;div class="btn-group" role="group"&gt;
    &lt;button type="button" class="btn btn-warning"&gt;首頁&lt;/button&gt;
    &lt;button type="button" class="btn btn-warning"&gt;票券&lt;/button&gt;
    &lt;div class="btn-group" role="group"&gt;
      &lt;button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown"&gt;訂房&lt;/button&gt;
      &lt;ul class="dropdown-menu"&gt;
        &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;國外訂房&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class="dropdown-item" href="#"&gt;國內訂房&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code></pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

let tooltipInstances = [];

onMounted(() => {
  // 初始化 tooltip
  const els = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipInstances = Array.from(els).map(el => new bootstrap.Tooltip(el));
});

onUnmounted(() => {
  tooltipInstances.forEach(instance => instance.dispose());
})
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
</style>
