import{_ as h,r as y,k as f,o as w,p as v,c as e,b as t,i as d,g as x,F as u,d as k,w as _,T as S,f as s,j as m,t as c,h as r,s as C,v as T,n as A}from"./index-CzRUwQiI.js";import{H as p}from"./vs2015-txMzNINg.js";import{x as B,j as J}from"./javascript-BK9ByurK.js";const j="/Antinant-vue/assets/2019_Cimei_thetiger-Cbl0xoVw.jpg",N="/Antinant-vue/assets/2023_Tai'an_bedroom-j8z1_QkR.jpg",P="/Antinant-vue/assets/2023_Tai'an_thetiger-BwBnPV1G.jpg",D="/Antinant-vue/assets/DSC4378-w3ITu-D7.jpg",F="/Antinant-vue/assets/DSC_5360-CMm59o5a.jpg",M="/Antinant-vue/assets/DSC_5434-jyoKKk-I.jpg",$="/Antinant-vue/assets/2021_Erlin_%E6%9A%AB01-Rz1toDdm.jpg",H={class:"useful-bootstrap-component-view"},V={class:"layout"},E={class:"sidebar"},L=["onClick"],G={class:"content-title"},q={class:"content-body"},z=["innerHTML"],I=["innerHTML"],U={class:"code"},K={class:"html"},R={class:"javascript"},W={__name:"UsefulBootstrapComponentView",setup(Q){p.registerLanguage("html",B),p.registerLanguage("javascript",J);const n=[{id:"noteButton",title:"按鈕（Button）",description:null,demoStyle:null,component:null,demo:`<ul>
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
</ul>`,demoJS:null},{id:"noteForm",title:"表單（Form）",description:null,demoStyle:null,component:null,demo:`<!-- 導覽元件 -->
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
  </div>
</div>`,demoJS:null},{id:"noteBreadcrumb",title:"麵包屑（Breadcrumb）",description:null,demoStyle:null,component:null,demo:`<ul class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">首頁</a></li>
  <li class="breadcrumb-item"><a href="#">甜點</a></li>
  <li class="breadcrumb-item active">馬卡龍</li>
</ul>`,demoJS:null},{id:"noteAlert",title:"警報效果（Alert）",description:null,demoStyle:null,component:null,demo:`<div class="alert alert-success" role="alert">
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
</div>`,demoJS:null},{id:"noteDropdown",title:"下拉式清單（Dropdown）",description:null,demoStyle:null,component:null,demo:`<!-- 導覽元件 -->
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
  </div>
</div>`,demoJS:null},{id:"noteNavsTabs",title:"導覽（Navs）與標籤頁（Tabs）",description:null,demoStyle:null,component:null,demo:`<!-- 導覽元件 -->
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
</div>`,demoJS:null},{id:"notePagination",title:"分頁導覽（Pagination）",description:null,demoStyle:null,component:null,demo:`<ul class="pagination">
  <li class="page-item"><a class="page-link"><span>&laquo;</span></a></li>
  <li class="page-item active"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">4</a></li>
  <li class="page-item disabled"><a class="page-link" href="#">5</a></li>
  <li class="page-item"><a class="page-link"><span>&raquo;</span></a></li>
</ul>`,demoJS:null},{id:"noteModal",title:"互動視窗（Modal）",description:null,demoStyle:null,component:null,demo:`<!-- 觸發互動視窗的按鈕 -->
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
        <img src="${j}" title="2019_cimei_thetiger.jpg" alt="2019在七美的阿楷" width="50%" class="img-fluid">
        <p class="h3 text-end">$199.0</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">放入購物車</button>
      </div>
    </div>
  </div>
</div>`,demoJS:null},{id:"noteTooltips",title:"工具提示（Tooltips）",description:null,demoStyle:null,component:null,demo:null,demoJS:null},{id:"notePopers",title:"彈出提示（Popers）",description:null,demoStyle:null,component:null,demo:null,demoJS:null},{id:"noteCard",title:"卡片（Card）",description:null,demoStyle:null,component:null,demo:`<!-- 導覽元件 -->
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
  </div>
  <div id="tabCard2" class="tab-pane fade mt-3">
    <h4>混合樣式卡片</h4>
    <div class="card" style="width: 20rem;">
      <img src="${D}" title="搧風亭儀" alt="天氣熱，何亭儀在搧風" class="card-img-top" width="318px">
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
  </div>
  <div id="tabCard3" class="tab-pane fade mt-3">
    <h4>雙欄式響應式卡片</h4>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 mt-3">
          <div class="card">
            <div class="card-header text-center">1</div>
            <img class="card-img-top" src="${N}" title="拍照的旻倫" alt="2023年跨年烤肉在拍照的旻倫" width="300px">
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
            <img class="card-img-top" src="${P}" title="拍照的竣楷" alt="2023年跨年烤肉在拍照的阿楷" width="300px">
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
</div>`,demoJS:null},{id:"noteCollapse",title:"折疊元件（Collapse）",description:null,demoStyle:null,component:null,demo:`<p>
  <!-- 使用<a>元素作為觸發摺疊效果的開關 -->
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseContent">白居易 - 詠菊</a>
  <!-- 使用<button>元素作為觸發摺疊效果的開關 -->
  <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseContent">白居易 - 詠菊</button>
</p>
<div id="collapseContent" class="collapse">
  <div class="card card-body">
    一夜新霜著瓦輕，芭蕉新折敗荷傾。<br>耐寒唯有東籬菊，金粟初開曉更清
  </div>
</div>`,demoJS:null},{id:"noteCarousel",title:"輪播（Carousel）",description:null,demoStyle:null,component:null,demo:`<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
  <!-- 輪播指示 -->
  <ol class="carousel-indicators" style="list-style: none;">
    <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
    <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
  </ol>
  <!-- 輪播內容 -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${$}" class="d-block w-100" alt="二林臺灣酒窖" style="width: 100%;">
      <div class="carousel-caption d-none d-md-block">
        <h5>臺灣酒窖</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="${F}" class="d-block w-100" alt="芳苑夕景與離岸風電" style="width: 100%;">
      <div class="carousel-caption d-none d-md-block">
        <h5>芳苑夕陽與離岸風電</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="${M}" class="d-block w-100" alt="芳苑夕景剪影" style="width: 100%;">
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
</div>`,demoJS:null},{id:"noteAccordion",title:"手風琴效果（Accordion）",description:null,demoStyle:null,component:null,demo:`<div id="myAccordion" class="accordion">
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
</div>`,demoJS:null},{id:"noteScrollspy",title:"滾動監控（Scrollspy）",description:'<p>可至 <a href="https://bootstrap5.hexschool.com/docs/5.1/components/scrollspy/" target="_blank">官方文件</a> 查看效果</p>',demoStyle:null,component:null,demo:null,demoJS:null},{id:"noteToasts",title:"吐司（Toasts）",description:'<p>可至 <a href="https://bootstrap5.hexschool.com/docs/5.1/components/toasts/" target="_blank">官方文件</a> 查看效果</p>',demoStyle:null,component:null,demo:null,demoJS:null}],b=y(n[0].id),a=f(()=>n.find(i=>i.id===b.value)||n[0]);w(()=>{v(()=>p.highlightAll())});function g(){v(()=>{document.querySelectorAll("pre code").forEach(i=>{delete i.dataset.highlighted}),p.highlightAll()})}return(i,l)=>(s(),e("div",H,[l[3]||(l[3]=t("h3",null,[d(" 此頁面尚未完全完工，目前僅將程式碼放進，還未完全套入 Bootstrap 效果。需使用此區程式碼請至舊網頁 "),t("a",{href:"https://quanting56.github.io/Antinant/web_note.html#usefulBootstrapComponent",target:"_blank",style:{"background-color":"#f2ea9d","text-wrap":"nowrap"}},"舊・阿蛤的窩 - 網頁練習｜一些好用的Bootstrap元件"),d(" 查詢 UI/UX 與 code。 ")],-1)),t("div",V,[t("nav",E,[t("ul",null,[(s(),e(u,null,k(n,o=>t("li",{key:o.id,class:m({active:o.id===b.value}),onClick:X=>b.value=o.id},c(o.title),11,L)),64))])]),x(S,{name:"fade",mode:"out-in",onAfterEnter:g},{default:_(()=>[a.value?(s(),e("section",{class:"content",key:a.value.id},[t("h3",G,c(a.value.title),1),l[2]||(l[2]=t("hr",null,null,-1)),t("div",q,[a.value.description?(s(),e("div",{key:0,class:"description",innerHTML:a.value.description},null,8,z)):r("",!0),t("div",{class:m({demo:a.value.demo})},[a.value.component?(s(),C(T(a.value.component),{key:0})):(s(),e("div",{key:1,innerHTML:a.value.demo,style:A(a.value.demoStyle)},null,12,I))],2),t("div",U,[a.value.demo?(s(),e(u,{key:0},[l[0]||(l[0]=d(" html code: ")),t("pre",null,[t("code",K,c(a.value.demo),1)])],64)):r("",!0),a.value.demoJS?(s(),e(u,{key:1},[l[1]||(l[1]=d(" javascript code: ")),t("pre",null,[t("code",R,c(a.value.demoJS),1)])],64)):r("",!0)])])])):r("",!0)]),_:1})])]))}},tt=h(W,[["__scopeId","data-v-d1bef052"]]);export{tt as default};
