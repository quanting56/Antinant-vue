<template>
  <section id="usefulBootstrapComponent" class="segmentation" style="min-height: 100vh;">
        <div style="padding: 10px;">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-2">
                <!-- 導覽元件 -->
                <ul id="usefulBootstrapComponent_Tab" class="nav nav-pills flex-column">
                  <li class="nav-item"><button type="button" class="nav-link active" data-bs-toggle="pill" data-bs-target="#noteButton">按鈕（Button）</button></li>
                  <li class="nav-item"><button type="button" class="nav-link" data-bs-toggle="pill" data-bs-target="#noteForm">表單（Form）</button></li>
                  <li class="nav-item"><button type="button" class="nav-link" data-bs-toggle="pill" data-bs-target="#noteBreadcrumb">麵包屑（Breadcrumb）</button></li>
                  <li class="nav-item"><button type="button" class="nav-link" data-bs-toggle="pill" data-bs-target="#noteAlert">警報效果（Alert）</button></li>
                  <li class="nav-item"><button type="button" class="nav-link" data-bs-toggle="pill" data-bs-target="#noteDropdown">下拉式清單（Dropdown）</button></li>
                  <li class="nav-item"><button type="button" class="nav-link" data-bs-toggle="pill" data-bs-target="#noteNavsTabs">導覽（Navs）與標籤頁（Tabs）</button></li>
                  <li class="nav-item"><button type="button" class="nav-link" data-bs-toggle="pill" data-bs-target="#notePagination">分頁導覽（Pagination）</button></li>
                  <li class="nav-item"><button type="button" class="nav-link" data-bs-toggle="pill" data-bs-target="#noteModal">互動視窗（Modal）</button></li>
                  <li class="nav-item"><button type="button" class="nav-link" data-bs-toggle="pill" data-bs-target="#noteTooltips">工具提示（Tooltips）</button></li>
                  <li class="nav-item"><button type="button" class="nav-link" data-bs-toggle="pill" data-bs-target="#notePopers">彈出提示（Popers）</button></li>
                  <li class="nav-item"><button type="button" class="nav-link" data-bs-toggle="pill" data-bs-target="#noteCard">卡片（Card）</button></li>
                  <li class="nav-item"><button type="button" class="nav-link" data-bs-toggle="pill" data-bs-target="#noteCollapse">折疊元件（Collapse）</button></li>
                  <li class="nav-item"><button type="button" class="nav-link" data-bs-toggle="pill" data-bs-target="#noteCarousel">輪播（Carousel）</button></li>
                  <li class="nav-item"><button type="button" class="nav-link" data-bs-toggle="pill" data-bs-target="#noteAccordion">手風琴效果（Accordion）</button></li>
                  <li class="nav-item"><button type="button" class="nav-link" data-bs-toggle="pill" data-bs-target="#noteScrollspy">滾動監控（Scrollspy）</button></li>
                  <li class="nav-item"><button type="button" class="nav-link" data-bs-toggle="pill" data-bs-target="#noteToasts">吐司（Toasts）</button></li>
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
                  <div id="noteNavsTabs" class="tab-pane fade">
                    <h3>導覽（Navs）與標籤頁（Tabs）</h3>
                    <!-- 導覽元件 -->
                    <ul class="nav nav-tabs mb-3">
                      <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#noteNavsTabs1">標籤式的導覽元件</a></li>
                      <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#noteNavsTabs2">按鈕式的導覽元件</a></li>
                      <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#noteNavsTabs3">垂直排列的按鈕式導覽元件</a></li>
                      <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#noteNavsTabs4">用Bootstrap網格調整至左右排列</a></li>
                    </ul>
                    <!-- 標籤頁內容 -->
                    <div class="tab-content">
                      <div id="noteNavsTabs1" class="tab-pane fade show active">
                        <h4>標籤式的導覽元件</h4>
                        <!-- 導覽元件 -->
                        <ul id="myTab" class="nav nav-tabs">
                          <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#tab1">澎湖本島</a></li>
                          <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#tab2">白沙島</a></li>
                          <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#tab3">西嶼</a></li>
                        </ul>
                        <!-- 標籤頁內容 -->
                        <div id="myTabContent" class="tab-content">
                          <div id="tab1" class="tab-pane fade show active"><p style="text-indent: 32px;">澎湖本島，又稱菊島，舊名大山嶼。是位於臺灣澎湖縣的一個島嶼，也是澎湖群島中面積最大，人口最多的島嶼，土地面積65.4132平方公里，和白沙島相鄰。</p></div>
                          <div id="tab2" class="tab-pane fade">
                            <p style="text-indent: 32px;">白沙島，面積13.8763平方公里，是澎湖縣白沙鄉之中最大的島嶼，地形全島由南傾斜至北逐漸平坦，與北海的離島分開，和西嶼連接。產有嘉寶瓜、澎湖絲瓜、哈密瓜，也被稱作是瓜果的故鄉。</p>
                            <p style="text-indent: 32px;">島嶼北岸因佈滿珊瑚碎屑細沙，經過長期時間的堆積，便形成一大片的白色沙灘，因而被命名為「白沙」。根據澎湖縣民政局2008年八月統計人口資料共有5384人，白沙島可分為中屯、講美、城前、鎮海、港子、歧頭、赤崁、瓦硐、後寮、通梁等村落。</p>
                          </div>
                          <div id="tab3" class="tab-pane fade"><p style="text-indent: 32px;">西嶼，西方文獻稱為漁翁島（Pescadores），是位於臺灣澎湖群島中的第二大島，總面積約為18.7148平方公里，西嶼鄉的橫礁村和白沙鄉的通樑村以跨海大橋相連接。</p></div>
                        </div>
                        <div class="mt-3">本段code：
<pre><code class="html">
  &lt;!-- 導覽元件 --&gt;
  &lt;ul id="myTab" class="nav nav-tabs"&gt;
    &lt;li class="nav-item"&gt;&lt;a class="nav-link active" data-bs-toggle="tab" href="#tab1"&gt;澎湖本島&lt;/a&gt;&lt;/li&gt;
    &lt;li class="nav-item"&gt;&lt;a class="nav-link" data-bs-toggle="tab" href="#tab2"&gt;白沙島&lt;/a&gt;&lt;/li&gt;
    &lt;li class="nav-item"&gt;&lt;a class="nav-link" data-bs-toggle="tab" href="#tab3"&gt;西嶼&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
  &lt;!-- 標籤頁內容 --&gt;
  &lt;div id="myTabContent" class="tab-content"&gt;
    &lt;div id="tab1" class="tab-pane fade show active"&gt;&lt;p style="text-indent: 32px;"&gt;澎湖本島，又稱...和白沙島相鄰。&lt;/p&gt;&lt;/div&gt;
    &lt;div id="tab2" class="tab-pane fade"&gt;
      &lt;p style="text-indent: 32px;"&gt;白沙島，面積...瓜果的故鄉。&lt;/p&gt;
      &lt;p style="text-indent: 32px;"&gt;島嶼北岸因佈滿...等村落。&lt;/p&gt;
    &lt;/div&gt;
    &lt;div id="tab3" class="tab-pane fade"&gt;&lt;p style="text-indent: 32px;"&gt;西嶼，西方文獻...以跨海大橋相連接。&lt;/p&gt;&lt;/div&gt;
  &lt;/div&gt;

</code></pre>
                        </div>
                        <div class="mt-3">若要使用，請複製這邊的code：
<pre><code class="html">
  &lt;!-- 導覽元件 --&gt;
  &lt;ul id="myTab" class="nav nav-tabs"&gt;
    &lt;li class="nav-item"&gt;&lt;a class="nav-link active" data-bs-toggle="tab" href="#tab1"&gt;澎湖本島&lt;/a&gt;&lt;/li&gt;
    &lt;li class="nav-item"&gt;&lt;a class="nav-link" data-bs-toggle="tab" href="#tab2"&gt;白沙島&lt;/a&gt;&lt;/li&gt;
    &lt;li class="nav-item"&gt;&lt;a class="nav-link" data-bs-toggle="tab" href="#tab3"&gt;西嶼&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
  &lt;!-- 標籤頁內容 --&gt;
  &lt;div id="myTabContent" class="tab-content"&gt;
    &lt;div id="tab1" class="tab-pane fade show active"&gt;
      &lt;p&gt;澎湖本島，又稱...和白沙島相鄰。&lt;/p&gt;
    &lt;/div&gt;
    &lt;div id="tab2" class="tab-pane fade"&gt;
      &lt;p&gt;白沙島，面積...瓜果的故鄉。&lt;/p&gt;
    &lt;/div&gt;
    &lt;div id="tab3" class="tab-pane fade"&gt;
      &lt;p&gt;西嶼，西方文獻...以跨海大橋相連接。&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code></pre>
                        </div>
                      </div>
                      <div id="noteNavsTabs2" class="tab-pane fade">
                        <h4>按鈕式的導覽元件</h4>
                        <!-- 導覽元件 -->
                        <ul id="myTab" class="nav nav-pills">
                          <li class="nav-item"><a class="nav-link active" data-bs-toggle="pill" href="#tab4">澎湖本島</a></li>
                          <li class="nav-item"><a class="nav-link" data-bs-toggle="pill" href="#tab5">白沙島</a></li>
                          <li class="nav-item"><a class="nav-link" data-bs-toggle="pill" href="#tab6">西嶼</a></li>
                        </ul>
                        <!-- 標籤頁內容 -->
                        <div id="myTabContent" class="tab-content">
                          <div id="tab4" class="tab-pane fade show active"><p style="text-indent: 32px;">澎湖本島，又稱菊島，舊名大山嶼。是位於臺灣澎湖縣的一個島嶼，也是澎湖群島中面積最大，人口最多的島嶼，土地面積65.4132平方公里，和白沙島相鄰。</p></div>
                          <div id="tab5" class="tab-pane fade">
                            <p style="text-indent: 32px;">白沙島，面積13.8763平方公里，是澎湖縣白沙鄉之中最大的島嶼，地形全島由南傾斜至北逐漸平坦，與北海的離島分開，和西嶼連接。產有嘉寶瓜、澎湖絲瓜、哈密瓜，也被稱作是瓜果的故鄉。</p>
                            <p style="text-indent: 32px;">島嶼北岸因佈滿珊瑚碎屑細沙，經過長期時間的堆積，便形成一大片的白色沙灘，因而被命名為「白沙」。根據澎湖縣民政局2008年八月統計人口資料共有5384人，白沙島可分為中屯、講美、城前、鎮海、港子、歧頭、赤崁、瓦硐、後寮、通梁等村落。</p>
                          </div>
                          <div id="tab6" class="tab-pane fade"><p style="text-indent: 32px;">西嶼，西方文獻稱為漁翁島（Pescadores），是位於臺灣澎湖群島中的第二大島，總面積約為18.7148平方公里，西嶼鄉的橫礁村和白沙鄉的通樑村以跨海大橋相連接。</p></div>
                        </div>
                        <div class="mt-3">本段code：
<pre><code class="html">
  &lt;!-- 將「標籤式的導覽元件」code裡的 .nav-tabs 改成 .nav-pills 、 data-bs-toggle="tab" 改成 data-bs-toggle="pill" --&gt;

  &lt;!-- 導覽元件 --&gt;
  &lt;ul id="myTab" class="nav nav-pills"&gt;
    &lt;li class="nav-item"&gt;&lt;a class="nav-link active" data-bs-toggle="pill" href="#tab4"&gt;澎湖本島&lt;/a&gt;&lt;/li&gt;
    &lt;li class="nav-item"&gt;&lt;a class="nav-link" data-bs-toggle="pill" href="#tab5"&gt;白沙島&lt;/a&gt;&lt;/li&gt;
    &lt;li class="nav-item"&gt;&lt;a class="nav-link" data-bs-toggle="pill" href="#tab6"&gt;西嶼&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
  &lt;!-- 標籤頁內容 --&gt;
  &lt;div id="myTabContent" class="tab-content"&gt;
    &lt;div id="tab4" class="tab-pane fade show active"&gt;&lt;p style="text-indent: 32px;"&gt;澎湖本島，又稱...和白沙島相鄰。&lt;/p&gt;&lt;/div&gt;
    &lt;div id="tab5" class="tab-pane fade"&gt;
      &lt;p style="text-indent: 32px;"&gt;白沙島，面積...瓜果的故鄉。&lt;/p&gt;
      &lt;p style="text-indent: 32px;"&gt;島嶼北岸因佈滿...等村落。&lt;/p&gt;
    &lt;/div&gt;
    &lt;div id="tab6" class="tab-pane fade"&gt;&lt;p style="text-indent: 32px;"&gt;西嶼，西方文獻...以跨海大橋相連接。&lt;/p&gt;&lt;/div&gt;
  &lt;/div&gt;

</code></pre>
                        </div>
                      </div>
                      <div id="noteNavsTabs3" class="tab-pane fade">
                        <h4>垂直排列的按鈕式導覽元件</h4>
                        <!-- 導覽元件 -->
                        <ul id="myTab" class="nav nav-pills flex-column">
                          <li class="nav-item"><a class="nav-link active" data-bs-toggle="pill" href="#tab7">澎湖本島</a></li>
                          <li class="nav-item"><a class="nav-link" data-bs-toggle="pill" href="#tab8">白沙島</a></li>
                          <li class="nav-item"><a class="nav-link" data-bs-toggle="pill" href="#tab9">西嶼</a></li>
                        </ul>
                        <!-- 標籤頁內容 -->
                        <div id="myTabContent" class="tab-content">
                          <div id="tab7" class="tab-pane fade show active"><p style="text-indent: 32px;">澎湖本島，又稱菊島，舊名大山嶼。是位於臺灣澎湖縣的一個島嶼，也是澎湖群島中面積最大，人口最多的島嶼，土地面積65.4132平方公里，和白沙島相鄰。</p></div>
                          <div id="tab8" class="tab-pane fade">
                            <p style="text-indent: 32px;">白沙島，面積13.8763平方公里，是澎湖縣白沙鄉之中最大的島嶼，地形全島由南傾斜至北逐漸平坦，與北海的離島分開，和西嶼連接。產有嘉寶瓜、澎湖絲瓜、哈密瓜，也被稱作是瓜果的故鄉。</p>
                            <p style="text-indent: 32px;">島嶼北岸因佈滿珊瑚碎屑細沙，經過長期時間的堆積，便形成一大片的白色沙灘，因而被命名為「白沙」。根據澎湖縣民政局2008年八月統計人口資料共有5384人，白沙島可分為中屯、講美、城前、鎮海、港子、歧頭、赤崁、瓦硐、後寮、通梁等村落。</p>
                          </div>
                          <div id="tab9" class="tab-pane fade"><p style="text-indent: 32px;">西嶼，西方文獻稱為漁翁島（Pescadores），是位於臺灣澎湖群島中的第二大島，總面積約為18.7148平方公里，西嶼鄉的橫礁村和白沙鄉的通樑村以跨海大橋相連接。</p></div>
                        </div>
                        <div class="mt-3">本段code：
<pre><code class="html">
  &lt;!-- 在&lt;ul&gt;裡面加上 .flex-column --&gt;

  &lt;!-- 導覽元件 --&gt;
  &lt;ul id="myTab" class="nav nav-pills flex-column"&gt;
    &lt;li class="nav-item"&gt;&lt;a class="nav-link active" data-bs-toggle="pill" href="#tab7"&gt;澎湖本島&lt;/a&gt;&lt;/li&gt;
    &lt;li class="nav-item"&gt;&lt;a class="nav-link" data-bs-toggle="pill" href="#tab8"&gt;白沙島&lt;/a&gt;&lt;/li&gt;
    &lt;li class="nav-item"&gt;&lt;a class="nav-link" data-bs-toggle="pill" href="#tab9"&gt;西嶼&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
  &lt;!-- 標籤頁內容 --&gt;
  &lt;div id="myTabContent" class="tab-content"&gt;
    &lt;div id="tab7" class="tab-pane fade show active"&gt;&lt;p style="text-indent: 32px;"&gt;澎湖本島，又稱...和白沙島相鄰。&lt;/p&gt;&lt;/div&gt;
    &lt;div id="tab8" class="tab-pane fade"&gt;
      &lt;p style="text-indent: 32px;"&gt;白沙島，面積...瓜果的故鄉。&lt;/p&gt;
      &lt;p style="text-indent: 32px;"&gt;島嶼北岸因佈滿...等村落。&lt;/p&gt;
    &lt;/div&gt;
    &lt;div id="tab9" class="tab-pane fade"&gt;&lt;p style="text-indent: 32px;"&gt;西嶼，西方文獻...以跨海大橋相連接。&lt;/p&gt;&lt;/div&gt;
  &lt;/div&gt;

</code></pre>
                        </div>
                      </div>
                      <div id="noteNavsTabs4" class="tab-pane fade">
                        <h4>用Bootstrap網格調整至左右排列</h4>
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-3">
                              <!-- 導覽元件 -->
                              <ul id="myTab" class="nav nav-pills flex-column">
                                <li class="nav-item"><a class="nav-link active" data-bs-toggle="pill" href="#tab10">澎湖本島</a></li>
                                <li class="nav-item"><a class="nav-link" data-bs-toggle="pill" href="#tab11">白沙島</a></li>
                                <li class="nav-item"><a class="nav-link" data-bs-toggle="pill" href="#tab12">西嶼</a></li>
                              </ul>
                            </div>
                            <div class="col-9">
                              <!-- 標籤頁內容 -->
                              <div id="myTabContent" class="tab-content">
                                <div id="tab10" class="tab-pane fade show active"><p style="text-indent: 32px;">澎湖本島，又稱菊島，舊名大山嶼。是位於臺灣澎湖縣的一個島嶼，也是澎湖群島中面積最大，人口最多的島嶼，土地面積65.4132平方公里，和白沙島相鄰。</p></div>
                                <div id="tab11" class="tab-pane fade">
                                  <p style="text-indent: 32px;">白沙島，面積13.8763平方公里，是澎湖縣白沙鄉之中最大的島嶼，地形全島由南傾斜至北逐漸平坦，與北海的離島分開，和西嶼連接。產有嘉寶瓜、澎湖絲瓜、哈密瓜，也被稱作是瓜果的故鄉。</p>
                                  <p style="text-indent: 32px;">島嶼北岸因佈滿珊瑚碎屑細沙，經過長期時間的堆積，便形成一大片的白色沙灘，因而被命名為「白沙」。根據澎湖縣民政局2008年八月統計人口資料共有5384人，白沙島可分為中屯、講美、城前、鎮海、港子、歧頭、赤崁、瓦硐、後寮、通梁等村落。</p>
                                </div>
                                <div id="tab12" class="tab-pane fade"><p style="text-indent: 32px;">西嶼，西方文獻稱為漁翁島（Pescadores），是位於臺灣澎湖群島中的第二大島，總面積約為18.7148平方公里，西嶼鄉的橫礁村和白沙鄉的通樑村以跨海大橋相連接。</p></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="notePagination" class="tab-pane fade">
                    <h3>分頁導覽（Pagination）</h3>
                    <ul class="pagination">
                      <li class="page-item"><a class="page-link"><span>&laquo;</span></a></li>
                      <li class="page-item active"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item"><a class="page-link" href="#">4</a></li>
                      <li class="page-item disabled"><a class="page-link" href="#">5</a></li>
                      <li class="page-item"><a class="page-link"><span>&raquo;</span></a></li>
                    </ul>
                    <div class="mt-3">本段code：
<pre><code class="html">
  &lt;ul class="pagination"&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link"&gt;&lt;span&gt;&laquo;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item active"&gt;&lt;a class="page-link" href="#"&gt;1&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;2&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;3&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;4&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item disabled"&gt;&lt;a class="page-link" href="#"&gt;5&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link"&gt;&lt;span&gt;&raquo;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;

</code></pre>
                    </div>
                  </div>
                  <div id="noteModal" class="tab-pane fade">
                    <h3>互動視窗（Modal）</h3>
                    <!-- 觸發互動視窗的按鈕 -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">商品資訊</button>
                    <!-- 互動視窗 -->
                    <div class="modal fade" id="myModal" tabindex="-1">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h3 class="modal-title">2019的阿楷</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                          </div>
                          <div class="modal-body">
                            <img src="../../assets/web-note/2019_Cimei_thetiger.jpg" title="2019_cimei_thetiger" alt="2019在七美的阿楷" width="50%" class="img-fluid">
                            <p class="h3 text-end">$199.0</p>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-primary">放入購物車</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br>
                    <div class="mt-3">本段code：
<pre><code class="html">
  &lt;!-- 觸發互動視窗的按鈕 --&gt;
  &lt;button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"&gt;商品資訊&lt;/button&gt;
  &lt;!-- 互動視窗 --&gt;
  &lt;div class="modal fade" id="myModal" tabindex="-1"&gt;
    &lt;div class="modal-dialog"&gt;
      &lt;div class="modal-content"&gt;
        &lt;div class="modal-header"&gt;
          &lt;h3 class="modal-title"&gt;2019的阿楷&lt;/h3&gt;
          &lt;button type="button" class="btn-close" data-bs-dismiss="modal"&gt;&lt;/button&gt;
        &lt;/div&gt;
        &lt;div class="modal-body"&gt;
          &lt;img src="assets/2019_Cimei_thetiger.jpg" title="2019_cimei_thetiger" alt="2019在七美的阿楷" width="50%" class="img-fluid"&gt;
          &lt;p class="h3 text-end"&gt;$199.0&lt;/p&gt;
        &lt;/div&gt;
        &lt;div class="modal-footer"&gt;
          &lt;button type="button" class="btn btn-primary"&gt;放入購物車&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code></pre>
                    </div>
                  </div>
                  <div id="noteTooltips" class="tab-pane fade">
                    <h3>工具提示（Tooltips）</h3>
                  </div>
                  <div id="notePopers" class="tab-pane fade">
                    <h3>彈出提示（Popers）</h3>
                  </div>
                  <div id="noteCard" class="tab-pane fade">
                    <h3>卡片（Card）</h3>
                    <div>
                      <!-- 導覽元件 -->
                      <ul id="CardTab" class="nav nav-tabs">
                        <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#tabCard1">基本卡片範例</a></li>
                        <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#tabCard2">混合樣式卡片</a></li>
                        <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#tabCard3">雙欄式響應式卡片</a></li>
                      </ul>
                      <!-- 標籤頁內容 -->
                      <div id="CardTabContent" class="tab-content">
                        <div id="tabCard1" class="tab-pane fade show active">
                          <h4 class="mt-3">基本卡片範例</h4>
                          <div class="card text-center" style="width: 400px;">
                            <div class="card-header">詩句欣賞</div>
                            <div class="card-body">
                              <h5 class="card-title">陶淵明 - 飲酒其五</h5>
                              <p class="card-text">結廬在人境，而無車馬喧。<br>問君何能爾，心遠地自偏。<br>採菊東籬下，悠然見南山。<br>山氣日夕佳，飛鳥相與還。<br>此中有眞意，欲辨已忘言。</p>
                              <a class="btn btn-outline-success">註釋與賞析</a>
                            </div>
                            <div class="card-footer text-muted">2024年</div>
                          </div>
                          <div class="mt-3">本段code：
<pre><code class="html">
  &lt;div class="card text-center" style="width: 400px;"&gt;
    &lt;div class="card-header"&gt;詩句欣賞&lt;/div&gt;
    &lt;div class="card-body"&gt;
      &lt;h5 class="card-title"&gt;陶淵明 - 飲酒其五&lt;/h5&gt;
      &lt;p class="card-text"&gt;結廬在人境，而無車馬喧。&lt;br&gt;...此中有眞意，欲辨已忘言。&lt;/p&gt;
      &lt;a class="btn btn-outline-success"&gt;註釋與賞析&lt;/a&gt;
    &lt;/div&gt;
    &lt;div class="card-footer text-muted"&gt;2024年&lt;/div&gt;
  &lt;/div&gt;

</code></pre>
                          </div>
                        </div>
                        <div id="tabCard2" class="tab-pane fade mt-3">
                          <h4>混合樣式卡片</h4>
                          <div class="card" style="width: 20rem;">
                            <img src="../../assets/DSC4378.jpg" title="搧風亭儀" alt="天氣熱，何亭儀在搧風" class="card-img-top">
                            <div class="card-body">
                              <h3 class="card-title">何亭儀</h3>
                              <p class="card-text">一個跟我去許多地方旅行過的朋友</p>
                            </div>
                            <ul class="list-group list-group-flush">
                              <ol class="list-group-item">首次一日遊｜淡水<sub style="color: #aaaaaa; font-family: Georgia; padding-left: 0.5rem;"><i>2021.01.27</i></sub></ol>
                              <ol class="list-group-item">首次跨夜遊｜花蓮<sub style="color: #aaaaaa; font-family: Georgia; padding-left: 0.5rem;"><i>2021.04.23 - 04.25</i></sub></ol>
                              <ol class="list-group-item">首次雙人遊｜蘭嶼<sub style="color: #aaaaaa; font-family: Georgia; padding-left: 0.5rem;"><i>2022.08.23 - 08.26</i></sub></ol>
                            </ul>
                            <div class="card-body">
                              <a href="KaohsiungPingtung_trip_2021.html" class="card-link">高屏行</a>
                              <a href="#" class="card-link">蘭嶼小旅行</a>
                            </div>
                          </div>
                          <div class="mt-3">本段code：
<pre><code class="html">
  &lt;div class="card" style="width: 20rem;"&gt;
    &lt;img src="assets/KaohsiungPingtung_trip_2021/DSC4378.jpg" title="搧風亭儀" alt="天氣熱，何亭儀在搧風" class="card-img-top"&gt;
    &lt;div class="card-body"&gt;
      &lt;h3 class="card-title"&gt;何亭儀&lt;/h3&gt;
      &lt;p class="card-text"&gt;一個跟我去許多地方旅行過的朋友&lt;/p&gt;
    &lt;/div&gt;
    &lt;ul class="list-group list-group-flush"&gt;
      &lt;ol class="list-group-item"&gt;首次一日遊｜淡水&lt;sub style="color: #aaaaaa; font-family: Georgia; padding-left: 0.5rem;"&gt;&lt;i&gt;2021.01.27&lt;/i&gt;&lt;/sub&gt;&lt;/ol&gt;
      &lt;ol class="list-group-item"&gt;首次跨夜遊｜花蓮&lt;sub style="color: #aaaaaa; font-family: Georgia; padding-left: 0.5rem;"&gt;&lt;i&gt;2021.04.23 - 04.25&lt;/i&gt;&lt;/sub&gt;&lt;/ol&gt;
      &lt;ol class="list-group-item"&gt;首次雙人遊｜蘭嶼&lt;sub style="color: #aaaaaa; font-family: Georgia; padding-left: 0.5rem;"&gt;&lt;i&gt;2022.08.23 - 08.26&lt;/i&gt;&lt;/sub&gt;&lt;/ol&gt;
    &lt;/ul&gt;
    &lt;div class="card-body"&gt;
      &lt;a href="KaohsiungPingtung_trip_2021.html" class="card-link"&gt;高屏行&lt;/a&gt;
      &lt;a href="#" class="card-link"&gt;蘭嶼小旅行&lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code></pre>
                          </div>
                        </div>
                        <div id="tabCard3" class="tab-pane fade mt-3">
                          <h4>雙欄式響應式卡片</h4>
                          <div class="container">
                            <div class="row">
                              <div class="col-sm-6 mt-3">
                                <div class="card">
                                  <div class="card-header text-center">1</div>
                                  <img class="card-img-top" src="../../assets/2023_Tai'an_bedroom.jpg" title="拍照的旻倫" alt="2023年跨年烤肉在拍照的旻倫">
                                  <div class="card-body">
                                    <h5 class="card-title">拍照的旻倫</h5>
                                    <p class="card-text" style="text-indent: 32px;">2023年苗栗跨年烤肉時，在一旁拍照的旻倫。</p>
                                  </div>
                                  <div class="card-footer text-end text-muted">2023.01.01 苗栗泰安</div>
                                </div>
                              </div>
                              <div class="col-sm-6 mt-3">
                                <div class="card">
                                  <div class="card-header text-center">2</div>
                                  <img class="card-img-top" src="../../assets/2023_Tai'an_thetiger.jpg" title="拍照的竣楷" alt="2023年跨年烤肉在拍照的阿楷">
                                  <div class="card-body">
                                    <h5 class="card-title">拍照的竣楷</h5>
                                    <p class="card-text" style="text-indent: 32px;">2023年苗栗跨年烤肉時，在一旁拍照的阿楷。</p>
                                  </div>
                                  <div class="card-footer text-end text-muted">2023.01.01 苗栗泰安</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="noteCollapse" class="tab-pane fade">
                    <h3>折疊元件（Collapse）</h3>
                    <p>
                      <!-- 使用<a>元素作為觸發摺疊效果的開關 -->
                      <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseContent">白居易 - 詠菊</a>
                      <!-- 使用<button>元素作為觸發摺疊效果的開關 -->
                      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseContent">白居易 - 詠菊</button>
                    </p>
                    <div id="collapseContent" class="collapse">
                      <div class="card card-body">
                        一夜新霜著瓦輕，芭蕉新折敗荷傾。<br>耐寒唯有東籬菊，金粟初開曉更清
                      </div>
                    </div>
                    <div>本段code：
<pre><code class="html">
  &lt;p&gt;
    &lt;!-- 使用&lt;a&gt;元素作為觸發摺疊效果的開關 --&gt;
    &lt;a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseContent"&gt;白居易 - 詠菊&lt;/a&gt;
    &lt;!-- 使用&lt;button&gt;元素作為觸發摺疊效果的開關 --&gt;
    &lt;button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseContent"&gt;白居易 - 詠菊&lt;/button&gt;
  &lt;/p&gt;
  &lt;div id="collapseContent" class="collapse"&gt;
    &lt;div class="card card-body"&gt;
      一夜新霜著瓦輕，芭蕉新折敗荷傾。&lt;br&gt;耐寒唯有東籬菊，金粟初開曉更清
    &lt;/div&gt;
  &lt;/div&gt;

</code></pre>
                    </div>
                  </div>
                  <div id="noteCarousel" class="tab-pane fade">
                    <h3>輪播（Carousel）</h3>
                    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                      <!-- 輪播指示 -->
                      <ol class="carousel-indicators" style="list-style: none;">
                        <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
                        <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                        <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                      </ol>
                      <!-- 輪播內容 -->
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="../../assets/2021_Erlin_暫01.jpg" class="d-block w-100" alt="二林臺灣酒窖">
                          <div class="carousel-caption d-none d-md-block">
                            <h5>臺灣酒窖</h5>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img src="../../assets/DSC_5360.jpg" class="d-block w-100" alt="芳苑夕景與離岸風電">
                          <div class="carousel-caption d-none d-md-block">
                            <h5>芳苑夕陽與離岸風電</h5>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img src="../../assets/DSC_5434.jpg" class="d-block w-100" alt="芳苑夕景剪影">
                          <div class="carousel-caption d-none d-md-block">
                            <h5>芳苑夕景</h5>
                          </div>
                        </div>
                      </div>
                      <!-- 輪播控制 -->
                      <a class="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                        <span class="visually-hidden">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#myCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                        <span class="visually-hidden">Next</span>
                      </a>
                    </div>
                    <br>
                    <div class="mt-3">本段code：
<pre><code class="html">
  &lt;div id="myCarousel" class="carousel slide" data-bs-ride="carousel"&gt;
    &lt;!-- 輪播指示 --&gt;
    &lt;ol class="carousel-indicators" style="list-style: none;"&gt;
      &lt;li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"&gt;&lt;/li&gt;
      &lt;li data-bs-target="#myCarousel" data-bs-slide-to="1"&gt;&lt;/li&gt;
      &lt;li data-bs-target="#myCarousel" data-bs-slide-to="2"&gt;&lt;/li&gt;
    &lt;/ol&gt;
    &lt;!-- 輪播內容 --&gt;
    &lt;div class="carousel-inner"&gt;
      &lt;div class="carousel-item active"&gt;
        &lt;img src="assets/2021_Erlin_暫01.jpg" class="d-block w-100" alt="二林臺灣酒窖"&gt;
        &lt;div class="carousel-caption d-none d-md-block"&gt;
          &lt;h5&gt;臺灣酒窖&lt;/h5&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="carousel-item"&gt;
        &lt;img src="assets/DSC_5360.jpg" class="d-block w-100" alt="芳苑夕景與離岸風電"&gt;
        &lt;div class="carousel-caption d-none d-md-block"&gt;
          &lt;h5&gt;芳苑夕陽與離岸風電&lt;/h5&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="carousel-item"&gt;
        &lt;img src="assets/DSC_5434.jpg" class="d-block w-100" alt="芳苑夕景剪影"&gt;
        &lt;div class="carousel-caption d-none d-md-block"&gt;
          &lt;h5&gt;芳苑夕景&lt;/h5&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- 輪播控制 --&gt;
    &lt;a class="carousel-control-prev" href="#myCarousel" data-bs-slide="prev"&gt;
      &lt;span class="carousel-control-prev-icon"&gt;&lt;/span&gt;
      &lt;span class="visually-hidden"&gt;Previous&lt;/span&gt;
    &lt;/a&gt;
    &lt;a class="carousel-control-next" href="#myCarousel" data-bs-slide="next"&gt;
      &lt;span class="carousel-control-next-icon"&gt;&lt;/span&gt;
      &lt;span class="visually-hidden"&gt;Next&lt;/span&gt;
    &lt;/a&gt;
  &lt;/div&gt;

</code></pre>
                    </div>
                  </div>
                  <div id="noteAccordion" class="tab-pane fade">
                    <h3>手風琴效果（Accordion）</h3>
                    <div id="myAccordion" class="accordion">
                      <div class="accordion-item">
                        <h2 id="heading1" class="accordion-header">
                          <button type="button" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse1">大一的課</button>
                        </h2>
                        <div id="collapse1" class="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                          <div class="accordion-body">
                            <h5>大一上<small>（109-1）</small></h5>
                            <p>音樂作品中的愛、個體經濟學原理與實習、現代農業體驗一、園藝學原理、社會學、營養教育與傳播</p>
                            <hr>
                            <h5>大一下<small>（109-2）</small></h5>
                            <p>音樂作品欣賞二、總體經濟學原理與實習、造園學、媒介概論、農業發展與政策、茶與茶業、商業攝影</p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 id="heading2" class="accordion-header">
                          <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse2">大二的課</button>
                        </h2>
                        <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                          <div class="accordion-body">
                            <h5>大二上<small>（110-1）</small></h5>
                            <p>全民國防教育軍事訓練課程-全民國防、全民國防教育軍事訓練課程-國防政策（<span style="color: red;">F</span>）、視覺傳播、行銷學、全球化與區域發展、統計學一上、<i style="color: gray"><s>地圖學</s>（停修）</i>、基礎攝影</p>
                            <hr>
                            <h5>大二下<small></small></h5>
                            <p>全民國防教育軍事訓練課程-國防科技、服務學習乙校內服務、日文一下（<span style="color: red;">F</span>）、臺灣區域海洋學、社區營造與區域規劃、整合行銷傳播、<i style="color: gray"><s>計量導論</s>（停修）</i>、商事法</p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 id="heading3" class="accordion-header">
                          <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse3">大三的課</button>
                        </h2>
                        <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                          <div class="accordion-body">
                            <h5>大三上<small>（111-1）</small></h5>
                            <p>運動與體重管理（選修體育）、<i style="color: gray"><s>政黨與選舉制度</s>（停修）</i>、傳播學、數位行銷、統計學與實習上、消費者行為</p>
                            <hr>
                            <h5>大三下<small>（111-2）</small></h5>
                            <p>全民國防教育軍事訓練課程-國防科技、貨幣金融專題、現代農業體驗二、社會科學研究方法、傳播企劃、農業組織與管理、專題研究二、蔬菜各論、<i style="color: gray"><s>Python計算機程式設計</s>（停修）</i>、書法（隸書）、養生醫學</p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 id="heading4" class="accordion-header">
                          <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse4">大四的課</button>
                        </h2>
                        <div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                          <div class="accordion-body">
                            <h5>大四上<small>（112-1）</small></h5>
                            <p>壁球初級、音樂作品欣賞一、網頁設計與敘事、專題研究一、社區資源調查、德語入門</p>
                            <hr>
                            <h5>大四下<small>（112-2）</small></h5>
                            <p>（待補）</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-3">本段code：
<pre><code class="html">
  &lt;div id="myAccordion" class="accordion"&gt;
    &lt;div class="accordion-item"&gt;
      &lt;h2 id="heading1" class="accordion-header"&gt;
        &lt;button type="button" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse1"&gt;大一的課&lt;/button&gt;
      &lt;/h2&gt;
      &lt;div id="collapse1" class="accordion-collapse collapse show" data-bs-parent="#myAccordion"&gt;
        &lt;div class="accordion-body"&gt;
          &lt;h5&gt;大一上&lt;small&gt;（109-1）&lt;/small&gt;&lt;/h5&gt;
          &lt;p&gt;音樂作品中的愛、...、營養教育與傳播&lt;/p&gt;
          &lt;hr&gt;
          &lt;h5&gt;大一下&lt;small&gt;（109-2）&lt;/small&gt;&lt;/h5&gt;
          &lt;p&gt;音樂作品欣賞二、...、商業攝影&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="accordion-item"&gt;
      &lt;h2 id="heading2" class="accordion-header"&gt;
        &lt;button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse2"&gt;大二的課&lt;/button&gt;
      &lt;/h2&gt;
      &lt;div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#myAccordion"&gt;
        &lt;div class="accordion-body"&gt;
          &lt;h5&gt;大二上&lt;small&gt;（110-1）&lt;/small&gt;&lt;/h5&gt;
          &lt;p&gt;全民國防教育軍事訓練課程-全民國防、...、基礎攝影&lt;/p&gt;
          &lt;hr&gt;
          &lt;h5&gt;大二下&lt;small&gt;&lt;/small&gt;&lt;/h5&gt;
          &lt;p&gt;全民國防教育軍事訓練課程-國防科技、...、商事法&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="accordion-item"&gt;
      &lt;h2 id="heading3" class="accordion-header"&gt;
        &lt;button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse3"&gt;大三的課&lt;/button&gt;
      &lt;/h2&gt;
      &lt;div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#myAccordion"&gt;
        &lt;div class="accordion-body"&gt;
          &lt;h5&gt;大三上&lt;small&gt;（111-1）&lt;/small&gt;&lt;/h5&gt;
          &lt;p&gt;運動與體重管理（選修體育）、...、消費者行為&lt;/p&gt;
          &lt;hr&gt;
          &lt;h5&gt;大三下&lt;small&gt;（111-2）&lt;/small&gt;&lt;/h5&gt;
          &lt;p&gt;全民國防教育軍事訓練課程-國防科技、...、養生醫學&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="accordion-item"&gt;
      &lt;h2 id="heading4" class="accordion-header"&gt;
        &lt;button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse4"&gt;大四的課&lt;/button&gt;
      &lt;/h2&gt;
      &lt;div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#myAccordion"&gt;
        &lt;div class="accordion-body"&gt;
          &lt;h5&gt;大四上&lt;small&gt;（112-1）&lt;/small&gt;&lt;/h5&gt;
          &lt;p&gt;壁球初級、...、德語入門&lt;/p&gt;
          &lt;hr&gt;
          &lt;h5&gt;大四下&lt;small&gt;（112-2）&lt;/small&gt;&lt;/h5&gt;
          &lt;p&gt;（待補）&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code></pre>
                    </div>
                    <div class="mt-3">若要使用，請複製這邊的code：
<pre><code class="html">
  &lt;div id="myAccordion" class="accordion"&gt;
    &lt;div class="accordion-item"&gt;
      &lt;h2 id="heading1" class="accordion-header"&gt;
        &lt;button type="button" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse1"&gt;大一的課&lt;/button&gt;
      &lt;/h2&gt;
      &lt;div id="collapse1" class="accordion-collapse collapse show" data-bs-parent="#myAccordion"&gt;
        &lt;div class="accordion-body"&gt;
          &lt;p&gt;音樂作品中的愛、...、營養教育與傳播&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="accordion-item"&gt;
      &lt;h2 id="heading2" class="accordion-header"&gt;
        &lt;button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse2"&gt;大二的課&lt;/button&gt;
      &lt;/h2&gt;
      &lt;div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#myAccordion"&gt;
        &lt;div class="accordion-body"&gt;
          &lt;p&gt;全民國防教育軍事訓練課程-國防科技、...、商事法&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="accordion-item"&gt;
      &lt;h2 id="heading3" class="accordion-header"&gt;
        &lt;button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse3"&gt;大三的課&lt;/button&gt;
      &lt;/h2&gt;
      &lt;div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#myAccordion"&gt;
        &lt;div class="accordion-body"&gt;
          &lt;p&gt;全民國防教育軍事訓練課程-國防科技、...、養生醫學&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code></pre>
                    </div>
                  </div>
                  <div id="noteScrollspy" class="tab-pane fade">
                    <h3>滾動監控（Scrollspy）</h3>
                    <hr>
                    <h5><a href="https://bootstrap5.hexschool.com/docs/5.1/components/scrollspy/" target="_blank">外部連結</a></h5>
                  </div>
                  <div id="noteToasts" class="tab-pane fade">
                    <h3>吐司（Toasts）</h3>
                    <hr>
                    <h5><a href="https://bootstrap5.hexschool.com/docs/5.1/components/toasts/" target="_blank">外部連結</a></h5>
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

let tooltipInstances = [];

onMounted(async () => {
  const bootstrapJS = await import("bootstrap/dist/js/bootstrap.bundle.min.js")

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
