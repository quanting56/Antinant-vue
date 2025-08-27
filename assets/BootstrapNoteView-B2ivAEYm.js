import{_ as x,r as f,k as y,o as _,p as g,c as e,b as t,i as o,g as u,F as p,d as N,w,T as k,f as s,j as m,t as r,h as v,s as j,v as F,n as T}from"./index-CHtcQ5JH.js";import{H as n,x as H,j as S}from"./vs2015-CSxvYctc.js";const B={class:"bootstrap-note-view"},K={class:"layout"},U={class:"sidebar"},C=["onClick"],z={class:"content-title"},L={class:"content-body"},M=["innerHTML"],D=["innerHTML"],J={class:"code"},P={class:"html"},A={class:"javascript"},V={__name:"BootstrapNoteView",setup(W){n.registerLanguage("html",H),n.registerLanguage("javascript",S);const d=[{id:"breakPointTest",title:"斷點測試",description:null,demoStyle:null,component:null,demo:`<!-- 導覽元件 -->
<ul id="breakpointTestTab" class="nav nav-tabs">
  <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#containerBreakpointTest">Container斷點測試</a></li>
  <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#containerColumnBreakpointTest">Container裡欄位位置 斷點測試</a></li>
</ul>
<!-- 標籤頁內容 -->
<div id="breakpointTestTabContent" class="tab-content">
  <div id="containerBreakpointTest" class="tab-pane fade show active mt-3">
    <h4>Bootstrap Container 斷點測試</h4>
    <div>
      <div class="container bootstrapNote_col_bg text-center">區塊01 class="container"</div>
      <div class="container-sm bootstrapNote_col_bg text-center">區塊02 class="container-sm"</div>
      <div class="container-md bootstrapNote_col_bg text-center">區塊03 class="container-md"</div>
      <div class="container-lg bootstrapNote_col_bg text-center">區塊04 class="container-lg"</div>
      <div class="container-xl bootstrapNote_col_bg text-center">區塊05 class="container-xl"</div>
      <div class="container-xxl bootstrapNote_col_bg text-center">區塊06 class="container-xxl"</div>
      <div class="container-fluid bootstrapNote_col_bg text-center">區塊07 class="container-fluid"</div>
    </div>
  </div>
  <div id="containerColumnBreakpointTest" class="tab-pane fade mt-3">
    <h4>Bootstrap Container裡欄位位置 斷點測試</h4>
    <div class="container">
      <div class="row bootstrapNote_col_bg">
        <div class="col-md-8 col-lg-4 bootstrapNote_col">區塊1 class="(col-12) col-md-8 col-lg-4"</div>
        <div class="col-md-4 col-lg-4 bootstrapNote_col">區塊2 class="(col-12) col-md-4 col-lg-4"</div>
        <div class="col-md-12 col-lg-4 bootstrapNote_col">區塊3 class="(col-12) col-md-12 col-lg-4"</div>
      </div>
    </div>
  </div>
</div>`,demoJS:null},{id:"rowNote",title:"row垂直對齊方式",description:null,demoStyle:null,component:null,demo:`<div class="container mt-3">
  <div class="row bootstrapNote_col_bg mb-3" style="height: 100px;">
    <div class="col bootstrapNote_col">區塊1 row的class=""<br>未於class輸入垂直對齊方式</div>
    <div class="col bootstrapNote_col">區塊2 row的class=""<br>未於class輸入垂直對齊方式</div>
  </div>
  <div class="row align-items-start bootstrapNote_col_bg mb-3" style="height: 100px;">
    <div class="col bootstrapNote_col">區塊3 row的class="align-items-start"<br>垂直向上對齊</div>
    <div class="col bootstrapNote_col">區塊4 row的class="align-items-start"<br>垂直向上對齊</div>
  </div>
  <div class="row align-items-center bootstrapNote_col_bg mb-3" style="height: 100px;">
    <div class="col bootstrapNote_col">區塊5 row的class="align-items-center"<br>垂直置中對齊</div>
    <div class="col bootstrapNote_col">區塊6 row的class="align-items-center"<br>垂直置中對齊</div>
  </div>
  <div class="row align-items-end bootstrapNote_col_bg mb-3" style="height: 100px;">
    <div class="col bootstrapNote_col">區塊7 row的class="align-items-end"<br>垂直向下對齊</div>
    <div class="col bootstrapNote_col">區塊8 row的class="align-items-end"<br>垂直向下對齊</div>
  </div>
</div>`,demoJS:null},{id:"columnNote",title:"column對齊方式與位移",description:null,demoStyle:null,component:null,demo:`<!-- 導覽元件 -->
<ul id="columnNoteTab" class="nav nav-tabs">
  <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#columnAlignNote">column水平對齊方式</a></li>
  <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#offsetNote">column的位移</a></li>
</ul>
<!-- 標籤頁內容 -->
<div id="columnNoteTabContent" class="tab-content ">
  <div id="columnAlignNote" class="tab-pane fade show active">
    <h4 class="mt-3">column水平對齊方式</h4>
    <div class="container">
      <div class="row align-items-center bootstrapNote_col_bg mb-3">
        <div class="col-3 bootstrapNote_col">區塊01 class="col-3"<br>row的class=""</div>
        <div class="col-3 bootstrapNote_col">區塊02 class="col-3"<br>row的class=""</div>
      </div>
      <div class="row align-items-center justify-content-start bootstrapNote_col_bg mb-3">
        <div class="col-3 bootstrapNote_col">區塊03 class="col-3"<br>row的class="justify-content-start"</div>
        <div class="col-3 bootstrapNote_col">區塊04 class="col-3"<br>row的class="justify-content-start"</div>
      </div>
      <div class="row align-items-center justify-content-center bootstrapNote_col_bg mb-3">
        <div class="col-3 bootstrapNote_col">區塊05 class="col-3"<br>row的class="justify-content-center"</div>
        <div class="col-3 bootstrapNote_col">區塊06 class="col-3"<br>row的class="justify-content-center"</div>
      </div>
      <div class="row align-items-center justify-content-end bootstrapNote_col_bg mb-3">
        <div class="col-3 bootstrapNote_col">區塊07 class="col-3"<br>row的class="justify-content-end"</div>
        <div class="col-3 bootstrapNote_col">區塊08 class="col-3"<br>row的class="justify-content-end"</div>
      </div>
      <div class="row align-items-center justify-content-around bootstrapNote_col_bg mb-3">
        <div class="col-3 bootstrapNote_col">區塊09 class="col-3"<br>row的class="justify-content-around"</div>
        <div class="col-3 bootstrapNote_col">區塊10 class="col-3"<br>row的class="justify-content-around"</div>
      </div>
      <div class="row align-items-center justify-content-between bootstrapNote_col_bg mb-3">
        <div class="col-3 bootstrapNote_col">區塊11 class="col-3"<br>row的class="justify-content-between"</div>
        <div class="col-3 bootstrapNote_col">區塊12 class="col-3"<br>row的class="justify-content-between"</div>
      </div>
      <div class="row align-items-center justify-content-evenly bootstrapNote_col_bg mb-3">
        <div class="col-3 bootstrapNote_col">區塊13 class="col-3"<br>row的class="justify-content-evenly"</div>
        <div class="col-3 bootstrapNote_col">區塊14 class="col-3"<br>row的class="justify-content-evenly"</div>
      </div>
    </div>
  </div>
  <div id="offsetNote" class="tab-pane fade">
    <h4 class="mt-3">column的位移</h4>
    <div class="container">
      <div class="row bootstrapNote_col_bg mb-3">
        <div class="col-3 bootstrapNote_col py-2">區塊01 class="col-3"</div>
        <div class="offset-3 col-3 bootstrapNote_col py-2">區塊02 class="offset-3 col-3"</div>
      </div>
      <div class="row bootstrapNote_col_bg mb-3">
        <div class="col-3 bootstrapNote_col py-2">區塊03 class="col-3"</div>
        <div class="offset-4 col-3 bootstrapNote_col py-2">區塊04 class="offset-4 col-3"</div>
      </div>
      <div class="row bootstrapNote_col_bg mb-3">
        <div class="col-4 bootstrapNote_col py-2">區塊05 class="col-4"</div>
        <div class="offset-3 col-4 bootstrapNote_col py-2">區塊06 class="offset-3 col-4"</div>
      </div>
      <div class="row bootstrapNote_col_bg mb-3">
        <div class="col-2 bootstrapNote_col py-2">區塊07 class="col-2"</div>
        <div class="offset-1 col-3 bootstrapNote_col py-2">區塊08 class="offset-1 col-3"</div>
        <div class="offset-2 col-4 bootstrapNote_col py-2">區塊09 class="offset-2 col-4"</div>
      </div>
    </div>
  </div>
</div>`,demoJS:null},{id:"imgNote",title:"圖片相關",description:null,demoStyle:null,component:null,demo:`<!-- 導覽元件 -->
<ul id="imgNoteTab" class="nav nav-tabs">
  <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#imgNote1">圖片裁切形狀</a></li>
  <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#imgNote2">圖片水平位置</a></li>
  <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#imgNote3">圖片垂直對齊</a></li>
</ul>
<!-- 標籤頁內容 -->
<div id="imgNoteTabContent" class="tab-content">
  <div id="imgNote1" class="tab-pane fade show active">
    <h4 class="mt-3">透過Bootstrap把圖片裁成形狀</h4>
    <div class="container-fluid mt-3">
      <div class="row">
        <div class="col-md-4 bootstrapNote_col_bg" style="padding-top: 3%;">
          <a><img src="assets/Kodak_UltraMax_053.jpg" title="小門嶼一隅(Kodak Ultramax400)" width="60%" class="border rounded mx-auto d-block"></a>
          <p class="text-center">class="border rounded"</p>
        </div>
        <div class="col-md-4 bootstrapNote_col_bg" style="padding-top: 3%;">
          <a><img src="assets/Kodak_UltraMax_053.jpg" title="小門嶼一隅(Kodak Ultramax400)" width="60%" class="border rounded-pill mx-auto d-block"></a>
          <p class="text-center">class="border rounded-pill"</p>
        </div>
        <div class="col-md-4 bootstrapNote_col_bg" style="padding-top: 3%;">
          <a><img src="assets/Kodak_UltraMax_053.jpg" title="小門嶼一隅(Kodak Ultramax400)" width="60%" class="border rounded-circle mx-auto d-block"></a>
          <p class="text-center">class="border rounded-circle"</p>
        </div>
      </div>
    </div>
  </div>
  <div id="imgNote2" class="tab-pane fade">
    <h4 class="mt-3">Bootstrap圖片對齊方式</h4>
    <div class="container-fluid mt-3">
      <div class="row">
        <div class="col-md-4 bootstrapNote_col_bg" style="padding-top: 3%;">
          <a><img src="assets/Kodak_UltraMax_053.jpg" title="小門嶼一隅(Kodak Ultramax400)" width="60%" class="border float-start"></a>
          <p class="text-center" style="clear: both;">class="border float-start"</p>
        </div>
        <div class="col-md-4 bootstrapNote_col_bg" style="padding-top: 3%;">
          <a><img src="assets/Kodak_UltraMax_053.jpg" title="小門嶼一隅(Kodak Ultramax400)" width="60%" class="border mx-auto d-block"></a>
          <p class="text-center" style="clear: both;">class="border mx-auto d-block"</p>
        </div>
        <div class="col-md-4 bootstrapNote_col_bg" style="padding-top: 3%;">
          <a><img src="assets/Kodak_UltraMax_053.jpg" title="小門嶼一隅(Kodak Ultramax400)" width="60%" class="border float-end"></a>
          <p class="text-center" style="clear: both;">class="border float-end"</p>
        </div>
      </div>
    </div>
  </div>
  <div id="imgNote3" class="tab-pane fade">
    <h4 class="mt-3">圖片垂直對齊</h4>
    <div class="container mt-3">
      <div class="row">
        <div class="col-lg-6" style="padding: 5px; border: 0.5px solid gray; text-align: left;">
          <img src="assets/Kodak_UltraMax_053.jpg" title="小門嶼一隅(Kodak Ultramax400)" width="40%" class="align-baseline p-1"> 圖片class="align-baseline" 對齊基底
        </div>
        <div class="col-lg-6" style="padding: 5px; border: 0.5px solid gray; text-align: left;">
          <img src="assets/Kodak_UltraMax_053.jpg" title="小門嶼一隅(Kodak Ultramax400)" width="40%" class="align-top p-1"> 圖片class="align-top" 整行頂端
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6" style="padding: 5px; border: 0.5px solid gray; text-align: left;">
          <img src="assets/Kodak_UltraMax_053.jpg" title="小門嶼一隅(Kodak Ultramax400)" width="40%" class="align-bottom p-1"> 圖片class="align-bottom" 整行底部
        </div>
        <div class="col-lg-6" style="padding: 5px; border: 0.5px solid gray; text-align: left;">
          <img src="assets/Kodak_UltraMax_053.jpg" title="小門嶼一隅(Kodak Ultramax400)" width="40%" class="align-text-top p-1"> 圖片class="align-text-top" 文字頂端
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6" style="padding: 5px; border: 0.5px solid gray; text-align: left;">
          <img src="assets/Kodak_UltraMax_053.jpg" title="小門嶼一隅(Kodak Ultramax400)" width="40%" class="align-text-bottom p-1"> 圖片class="align-text-bottom" 文字底部
        </div>
      </div>
    </div>
  </div>
</div>`,demoJS:null},{id:"tableNote",title:"表格相關",description:null,demoStyle:null,component:null,demo:`<!-- 導覽元件 -->
<ul id="tableNoteTab" class="nav nav-tabs">
  <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#tableNote1">表格格式</a></li>
  <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#tableNote2">表格顏色套用</a></li>
</ul>
<!-- 標籤頁內容 -->
<div id="tableNoteTabContent" class="tab-content">
  <div id="tableNote1" class="tab-pane fade show active">
    <h4 class="mt-3">Bootstrap表格套用</h4>
    <hr>
    <table class="table caption-top table-hover table-responsive">
      <caption>統一發票對獎號碼</caption>
      <thead>
        <tr>
          <th style="text-align: center;">對獎月份</th>
          <th style="text-align: left;">七~八月</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2" style="text-align: center;" class="align-middle">特獎</td>
          <td>88888888</td>
        </tr>
        <tr>
          <td>同期統一發票收執聯八位數號碼與上列號碼相同者獎金二百萬元整</td>
        </tr>
        <tr>
          <td rowspan="4" style="text-align: center;" class="align-middle">頭獎</td>
          <td>11111111</td>
        </tr>
        <tr>
          <td>22222222</td>
        </tr>
        <tr>
          <td>33333333</td>
        </tr>
        <tr>
          <td>同期統一發票收執聯八位數號碼與上列號碼相同者獎金二十萬元整</td>
        </tr>
        <tr>
          <td style="text-align: center;">二獎</td>
          <td>同期統一發票收執聯七位數號碼與上列號碼與頭獎中獎號碼末七位相同者各得獎金四萬元整</td>
        </tr>
        <tr>
          <td style="text-align: center;">三獎</td>
          <td>同期統一發票收執聯六位數號碼與上列號碼與頭獎中獎號碼末六位相同者各得獎金一萬元整</td>
        </tr>
        <tr>
          <td style="text-align: center;">四獎</td>
          <td>同期統一發票收執聯五位數號碼與上列號碼與頭獎中獎號碼末五位相同者各得獎金四千元整</td>
        </tr>
        <tr>
          <td style="text-align: center;">五獎</td>
          <td>同期統一發票收執聯四位數號碼與上列號碼與頭獎中獎號碼末四位相同者各得獎金一千元整</td>
        </tr>
        <tr>
          <td style="text-align: center;">六獎</td>
          <td>同期統一發票收執聯三位數號碼與上列號碼與頭獎中獎號碼末三位相同者各得獎金二百元整</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div id="tableNote2" class="tab-pane fade">
    <h4 class="mt-3">Bootstrap表格顏色套用</h4>
    <hr>
    <table class="table table-sm table-bordered table-hover" style="margin: 15px;">
      <tr class="table-primary"><td>class="table-primary"</td></tr>
      <tr class="table-secondary"><td>class="table-secondary"</td></tr>
      <tr class="table-success"><td>class="table-success"</td></tr>
      <tr class="table-danger"><td>class="table-danger"</td></tr>
      <tr class="table-warning"><td>class="table-warning"</td></tr>
      <tr class="table-info"><td>class="table-info"</td></tr>
      <tr class="table-light"><td>class="table-light"</td></tr>
      <tr class="table-dark"><td>class="table-dark"</td></tr>
    </table>
  </div>
</div>`,demoJS:null},{id:"flexBoxNote",title:"Flex網格容器相關",description:null,demoStyle:null,component:null,demo:`<!-- 導覽元件 -->
<ul id="flexBoxNoteTab" class="nav nav-tabs">
  <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#flexBoxNote1">Flex網格容器的方向</a></li>
  <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#flexBoxNote2">Flex網格容器的對齊</a></li>
</ul>
<!-- 標籤頁內容 -->
<div id="flexBoxNoteTabContent" class="tab-content">
  <div id="flexBoxNote1" class="tab-pane fade show active" style="padding-left: 10px;">
    <h4 class="mt-3">Flex網格容器的方向</h4>
    <hr>
    <div class="container">
      <div class="row">
        <!-- 水平排列 -->
        <div class="col-md-6">
          <ul style="text-align: left;"><li>水平排列</li></ul>
          <div class="d-flex flex-row mb-5 bootstrapNote_col_bg">
            <div class="bootstrapNote_col p-2">Flex item 1</div>
            <div class="bootstrapNote_col p-2">Flex item 2</div>
            <div class="bootstrapNote_col p-2">Flex item 3</div>
            <div class="pt-3 ps-2">class="d-flex flex-row"</div>
          </div>
          <div class="d-flex flex-row-reverse mb-3 bootstrapNote_col_bg">
            <div class="bootstrapNote_col p-2">Flex item 1</div>
            <div class="bootstrapNote_col p-2">Flex item 2</div>
            <div class="bootstrapNote_col p-2">Flex item 3</div>
            <div class="pt-3 pe-2">class="d-flex flex-row-reverse"</div>
          </div>
        </div>
        <!-- 垂直排列 -->
        <div class="offset-md-1 col-md-2 mb-3">
          <ul style="text-align: left;"><li>垂直排列</li></ul>
          <div class="d-flex flex-column bootstrapNote_col_bg">
            <div class="bootstrapNote_col p-2">Flex item 1</div>
            <div class="bootstrapNote_col p-2">Flex item 2</div>
            <div class="bootstrapNote_col p-2">Flex item 3</div>
            <p style="text-align: center;">class="d-flex flex-column"</p>
          </div>
        </div>
        <div class="offset-md-1 col-md-2 mb-3" style="padding-top: 36px;">
          <div class="d-flex flex-column-reverse bootstrapNote_col_bg">
            <p style="text-align: center;">class="d-flex flex-column-reverse"</p>
            <div class="bootstrapNote_col p-2">Flex item 1</div>
            <div class="bootstrapNote_col p-2">Flex item 2</div>
            <div class="bootstrapNote_col p-2">Flex item 3</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="flexBoxNote2" class="tab-pane fade" style="padding-left: 10px;">
    <h4 class="mt-3">Flex網格容器的對齊</h4>
    <hr>
    <div>
      <h5 class="mt-3">水平對齊</h5>
      <ul>
        <li>靠左（起始端）對齊<br>class="d-flex <b>justify-content-start</b>"</li>
        <div class="d-flex justify-content-start mt-2 mb-4 bootstrapNote_col_bg">
          <div class="bootstrapNote_col p-2">Flex item 1</div>
          <div class="bootstrapNote_col p-2">Flex item 2</div>
          <div class="bootstrapNote_col p-2">Flex item 3</div>
        </div>
        <li>靠右（結尾端）對齊<br>class="d-flex <b>justify-content-end</b>"</li>
        <div class="d-flex justify-content-end mt-2 mb-4 bootstrapNote_col_bg">
          <div class="bootstrapNote_col p-2">Flex item 1</div>
          <div class="bootstrapNote_col p-2">Flex item 2</div>
          <div class="bootstrapNote_col p-2">Flex item 3</div>
        </div>
        <li>水平置中<br>class="d-flex <b>justify-content-center</b>"</li>
        <div class="d-flex justify-content-center mt-2 mb-4 bootstrapNote_col_bg">
          <div class="bootstrapNote_col p-2">Flex item 1</div>
          <div class="bootstrapNote_col p-2">Flex item 2</div>
          <div class="bootstrapNote_col p-2">Flex item 3</div>
        </div>
        <li>平均分配容器寬度且左中右元素各自對齊左中右<br>class="d-flex <b>justify-content-between</b>"</li>
        <div class="d-flex justify-content-between mt-2 mb-4 bootstrapNote_col_bg">
          <div class="bootstrapNote_col p-2">Flex item 1</div>
          <div class="bootstrapNote_col p-2">Flex item 2</div>
          <div class="bootstrapNote_col p-2">Flex item 3</div>
        </div>
        <li>平均分配容器寬度且平均分配間距<br>class="d-flex <b>justify-content-around</b>"</li>
        <div class="d-flex justify-content-around mt-2 mb-4 bootstrapNote_col_bg">
          <div class="bootstrapNote_col p-2">Flex item 1</div>
          <div class="bootstrapNote_col p-2">Flex item 2</div>
          <div class="bootstrapNote_col p-2">Flex item 3</div>
        </div>
        <li>平均分配容器寬度且間隔對齊<br>class="d-flex <b>justify-content-evenly</b>"</li>
        <div class="d-flex justify-content-evenly mt-2 mb-4 bootstrapNote_col_bg">
          <div class="bootstrapNote_col p-2">Flex item 1</div>
          <div class="bootstrapNote_col p-2">Flex item 2</div>
          <div class="bootstrapNote_col p-2">Flex item 3</div>
        </div>
      </ul>
    </div>
    <hr class="mt-5">
    <div>
      <h5>垂直對齊</h5>
      <div class="container-fluid" style="padding-left: 30px;">
        <div class="row">
          <ul class="col-lg-5">
            <li>靠起始端（上）對齊<br>class="d-flex <b>align-items-start</b>"</li>
            <div class="d-flex align-items-start mt-2 mb-4 bootstrapNote_col_bg" style="height: 100px;">
              <div class="bootstrapNote_col p-2">Flex item 1</div>
              <div class="bootstrapNote_col p-2">Flex item 2</div>
              <div class="bootstrapNote_col p-2">Flex item 3</div>
            </div>
          </ul>
          <ul class="offset-lg-1 col-lg-5">
            <li>靠結尾端（下）對齊<br>class="d-flex <b>align-items-end</b>"</li>
            <div class="d-flex align-items-end mt-2 mb-4 bootstrapNote_col_bg" style="height: 100px;">
              <div class="bootstrapNote_col p-2">Flex item 1</div>
              <div class="bootstrapNote_col p-2">Flex item 2</div>
              <div class="bootstrapNote_col p-2">Flex item 3</div>
            </div>
          </ul>
          <ul class="col-lg-5">
            <li>垂直置中<br>class="d-flex <b>align-items-center</b>"</li>
            <div class="d-flex align-items-center mt-2 mb-4 bootstrapNote_col_bg" style="height: 100px;">
              <div class="bootstrapNote_col p-2">Flex item 1</div>
              <div class="bootstrapNote_col p-2">Flex item 2</div>
              <div class="bootstrapNote_col p-2">Flex item 3</div>
            </div>
          </ul>
          <ul class="offset-lg-1 col-lg-5">
            <li>靠基準線對齊<br>class="d-flex <b>align-items-baseline</b>"</li>
            <div class="d-flex align-items-baseline mt-2 mb-4 bootstrapNote_col_bg" style="height: 100px;">
              <div class="bootstrapNote_col p-2">Flex item 1</div>
              <div class="bootstrapNote_col p-2">Flex item 2</div>
              <div class="bootstrapNote_col p-2">Flex item 3</div>
            </div>
          </ul>
          <ul class="col-lg-5">
            <li>延伸對齊<br>class="d-flex <b>align-items-stretch</b>"</li>
            <div class="d-flex align-items-stretch mt-2 mb-4 bootstrapNote_col_bg" style="height: 100px;">
              <div class="bootstrapNote_col p-2">Flex item 1</div>
              <div class="bootstrapNote_col p-2">Flex item 2</div>
              <div class="bootstrapNote_col p-2">Flex item 3</div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>`,demoJS:null},{id:"cardNote",title:"卡片類別相關",description:null,demoStyle:null,component:null,demo:`<!-- 導覽元件 -->
<ul id="cardNoteTab" class="nav nav-tabs">
  <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#cardNoteTab1">卡片寬度</a></li>
  <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#cardNoteTab2">卡片加上導覽元件</a></li>
  <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#cardNoteTab3">圖片放置在卡片背景</a></li>
  <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#cardNoteTab4">水平的卡片</a></li>
  <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#cardNoteTab5">卡片顏色</a></li>
</ul>
<!-- 標籤頁內容 -->
<div id="cardNoteTabContent" class="tab-content">
  <div id="cardNoteTab1" class="tab-pane fade show active mt-3">
    <h4>卡片寬度</h4>
    <div class="card w-100">
      <div class="card-body">
        <h3 class="card-title">class="w-100"</h3>
        <p class="card-text">這是一張寬度為<code>w-100</code>的卡片</p>
        <a href="#" class="btn btn-primary">我是按鈕</a>
      </div>
    </div>
    <div class="card w-50 mt-3 me-3" style="float: left;">
      <div class="card-body">
        <h3 class="card-title">class="w-50"</h3>
        <p class="card-text">這是一張寬度為<code>w-50</code>的卡片</p>
        <a href="#" class="btn btn-primary">我是按鈕</a>
      </div>
    </div>
    <div class="card w-25 mt-3" style="float: left;">
      <div class="card-body">
        <h3 class="card-title">class="w-25"</h3>
        <p class="card-text">這是一張寬度為<code>w-50</code>的卡片</p>
        <a href="#" class="btn btn-primary">我是按鈕</a>
      </div>
    </div>
  </div>
  <div id="cardNoteTab2" class="tab-pane fade mt-3">
    <h4>加上導覽</h4>
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" aria-current="true" href="#cardNoteTab2_1">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#cardNoteTab2_2">一般按鈕1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#cardNoteTab2_3">一般按鈕2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://zh.wikipedia.org/wiki/中華民國臺灣地區島嶼列表" target="_blank">直接前往超連結</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <div id="cardNoteTab2_1" class="tab-pane fade show active card-body">
          <h5 class="card-title">小琉球</h5>
          <img src="assets/KaohsiungPingtung_trip_2021/DSC4460.jpg" title="小琉球" alt="小琉球" class="w-50">
          <p class="card-text"><strong><u>琉球嶼</u></strong><br>俗稱小琉球<br>是臺灣島西南方的一座外島<br>全境屬屏東縣琉球鄉管轄<br>為珊瑚礁石灰岩島嶼<br>面積6.802平方公里<br>位於屏東縣東港、高屏溪出海口西南方海面約15公里處<br>島上有許多石灰岩洞穴<br>全島在大鵬灣國家風景區範圍之內。</p>
          <a href="#" class="btn btn-primary">出發Go!</a>
          <a href="#" class="btn btn-primary">我不要這個</a>
        </div>
        <div id="cardNoteTab2_2" class="tab-pane fade card-body">
          <h5 class="card-title">綠島</h5>
          <img src="assets/KaohsiungPingtung_trip_2021/DSC4876.jpg" title="綠島" alt="綠島" class="w-50">
          <p class="card-text"><strong><u>綠島</u></strong><br>位於臺灣臺東縣東南方外海、太平洋之上<br>面積約為15平方公里<br>綠島是由輝石安山岩所形成之火山島<br>為全國第四大附屬島嶼<br>族群結構上主要為清領時期自琉球嶼與東港移民而來的閩南人<br>在戒嚴時期曾是關押政治犯的著名監獄</p>
          <a href="#" class="btn btn-primary">出發Go!</a>
          <a href="#" class="btn btn-primary">我不要這個</a>
        </div>
        <div id="cardNoteTab2_3" class="tab-pane fade card-body">
          <h5 class="card-title">蘭嶼</h5>
          <img src="assets/KaohsiungPingtung_trip_2021/DSC4746.jpg" title="蘭嶼" alt="蘭嶼" class="w-50">
          <p class="card-text"><strong><u>蘭嶼</u>（達悟語：Pongso no Tao）</strong><br>舊稱紅頭嶼<br>位於臺灣東南方外海上<br>行政區劃上為臺東縣蘭嶼鄉所管轄<br>四面環海，因其島上獨有的達悟族地土風俗與自然景點，遠近馳名<br>「蘭嶼聚落與自然景觀」為文化部遴選之臺灣世界遺產潛力點之一</p>
          <a href="#" class="btn btn-primary">出發Go!</a>
          <a href="#" class="btn btn-primary">我不要這個</a>
        </div>
      </div>
    </div>
  </div>
  <div id="cardNoteTab3" class="tab-pane fade mt-3">
    <h4>將圖片設為卡片背景</h4>
    <div class="card bg-dark text-white">
      <img src="assets/facebook_banner_2024.jpg" class="card-img" title="那些我們一起在九份的日子" alt="跟芸綺、亭儀、士豪、瑋宸、旻倫一起走在九份輕便路的照片" style="height: 300px; width: auto; object-fit: cover; object-position: bottom center;">
      <div class="card-img-overlay">
        <h5 class="card-title">那些我們一起在九份的日子</h5>
        <p class="card-text">pc: 王士豪</p>
      </div>
    </div>
  </div>
  <div id="cardNoteTab4" class="tab-pane fade mt-3">
    <h4>水平卡片</h4>
    <div class="card" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="assets/facebook_img_2024.jpg" class="img-fluid rounder-start" title="大頭貼" alt="臉書上的大頭貼">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">董冠霆</h3>
            <p class="card-text">我是這個網站的架設者，歡迎來到這個網站。</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="cardNoteTab5" class="tab-pane fade mt-3">
    <h4>卡片顏色</h4>
    <div>
      <div class="card text-white bg-primary m-2" style="max-width: 18rem; float: left;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Primary card title</h5>
          <p class="card-text">
            <pre style="font-size: 11px;">
<code class="html">
  &lt;div class="card text-white bg-primary" style="max-width: 18rem;"&gt;
    &lt;div class="card-header"&gt;Header&lt;/div&gt;
    &lt;div class="card-body"&gt;
      &lt;h5 class="card-title"&gt;Primary card title&lt;/h5&gt;
      &lt;p class="card-text"&gt;...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code>
            </pre>
          </p>
        </div>
      </div>
      <div class="card text-white bg-secondary m-2" style="max-width: 18rem; float: left;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Secondary card title</h5>
          <p class="card-text">
            <pre style="font-size: 11px;">
<code class="html">
  &lt;div class="card text-white bg-secondary" style="max-width: 18rem; float: right;"&gt;
    &lt;div class="card-header"&gt;Header&lt;/div&gt;
    &lt;div class="card-body"&gt;
      &lt;h5 class="card-title"&gt;Secondary card title&lt;/h5&gt;
      &lt;p class="card-text"&gt;...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code>
            </pre>
          </p>
        </div>
      </div>
      <div class="card text-white bg-success m-2" style="max-width: 18rem; float: left;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Success card title</h5>
          <p class="card-text">
            <pre style="font-size: 11px;">
<code class="html">
  &lt;div class="card text-white bg-success" style="max-width: 18rem;"&gt;
    &lt;div class="card-header"&gt;Header&lt;/div&gt;
    &lt;div class="card-body"&gt;
      &lt;h5 class="card-title"&gt;Success card title&lt;/h5&gt;
      &lt;p class="card-text"&gt;...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code>
            </pre>
          </p>
        </div>
      </div>
      <div class="card text-white bg-danger m-2" style="max-width: 18rem; float: left;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Danger card title</h5>
          <p class="card-text">
            <pre style="font-size: 11px;">
<code class="html">
  &lt;div class="card text-white bg-danger" style="18rem;"&gt;
    &lt;div class="card-header"&gt;Header&lt;/div&gt;
    &lt;div class="card-body"&gt;
      &lt;h5 class="card-title"&gt;Danger card title&lt;/h5&gt;
      &lt;p class="card-text"&gt;...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code>
            </pre>
          </p>
        </div>
      </div>
      <div class="card text-dark bg-warning m-2" style="max-width: 18rem; float: left;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Warning card title</h5>
          <p class="card-text">
            <pre style="font-size: 11px;">
<code class="html">
  &lt;div class="card text-dark bg-warning" style="max-width: 18rem;"&gt;
    &lt;div class="card-header"&gt;Header&lt;/div&gt;
    &lt;div class="card-body"&gt;
      &lt;h5 class="card-title"&gt;Warning card title&lt;/h5&gt;
      &lt;p class="card-text"&gt;...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code>
            </pre>
          </p>
        </div>
      </div>
      <div class="card bg-info m-2" style="max-width: 18rem; float: left;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Light card title</h5>
          <p class="card-text">
            <pre style="font-size: 11px;">
<code class="html">
  &lt;div class="card bg-info" style="max-width: 18rem;"&gt;
    &lt;div class="card-header"&gt;Header&lt;/div&gt;
    &lt;div class="card-body"&gt;
      &lt;h5 class="card-title"&gt;Light card title&lt;/h5&gt;
      &lt;p class="card-text"&gt;...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code>
            </pre>
          </p>
        </div>
      </div>
      <div class="card text-dark bg-light m-2" style="max-width: 18rem; float: left;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Light card title</h5>
          <p class="card-text">
            <pre style="font-size: 11px;">
<code class="html">
  &lt;div class="card text-dark bg-light" style="max-width: 18rem;"&gt;
    &lt;div class="card-header"&gt;Header&lt;/div&gt;
    &lt;div class="card-body"&gt;
      &lt;h5 class="card-title"&gt;Light card title&lt;/h5&gt;
      &lt;p class="card-text"&gt;...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code>
            </pre>
          </p>
        </div>
      </div>
      <div class="card text-white bg-dark m-2" style="max-width: 18rem; float: left;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Dark card title</h5>
          <p class="card-text">
            <pre style="font-size: 11px;">
<code class="html">
  &lt;div class="card text-white bg-dark" style="max-width: 18rem;"&gt;
    &lt;div class="card-header"&gt;Header&lt;/div&gt;
    &lt;div class="card-body"&gt;
      &lt;h5 class="card-title"&gt;Dark card title&lt;/h5&gt;
      &lt;p class="card-text"&gt;...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code>
            </pre>
          </p>
        </div>
      </div>
      <hr class="my-3" style="clear: both;">
      <div class="card border-primary m-2" style="max-width: 18rem; float: left;">
        <div class="card-header">Header</div>
        <div class="card-body text-primary">
          <h5 class="card-title">Primary card title</h5>
          <p class="card-text">
            <pre style="font-size: 11px;">
<code class="html">
  &lt;div class="card border-primary" style="max-width: 18rem;"&gt;
    &lt;div class="card-header"&gt;Header&lt;/div&gt;
    &lt;div class="card-body text-primary"&gt;
      &lt;h5 class="card-title"&gt;Primary card title&lt;/h5&gt;
      &lt;p class="card-text"&gt;...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code>
            </pre>
          </p>
        </div>
      </div>
      <div class="card border-secondary m-2" style="max-width: 18rem; float: left;">
        <div class="card-header">Header</div>
        <div class="card-body text-secondary">
          <h5 class="card-title">Secondary card title</h5>
          <p class="card-text">
            <pre style="font-size: 11px;">
<code class="html">
  &lt;div class="card border-secondary" style="max-width: 18rem; float: right;"&gt;
    &lt;div class="card-header"&gt;Header&lt;/div&gt;
    &lt;div class="card-body text-secondary&gt;
      &lt;h5 class="card-title"&gt;Secondary card title&lt;/h5&gt;
      &lt;p class="card-text"&gt;...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code>
            </pre>
          </p>
        </div>
      </div>
      <div class="card border-success m-2" style="max-width: 18rem; float: left;">
        <div class="card-header">Header</div>
        <div class="card-body text-success">
          <h5 class="card-title">Success card title</h5>
          <p class="card-text">
            <pre style="font-size: 11px;">
<code class="html">
  &lt;div class="card border-success" style="max-width: 18rem;"&gt;
    &lt;div class="card-header"&gt;Header&lt;/div&gt;
    &lt;div class="card-body text-success"&gt;
      &lt;h5 class="card-title"&gt;Success card title&lt;/h5&gt;
      &lt;p class="card-text"&gt;...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code>
            </pre>
          </p>
        </div>
      </div>
      <div class="card border-danger m-2" style="max-width: 18rem; float: left;">
        <div class="card-header">Header</div>
        <div class="card-body text-danger">
          <h5 class="card-title">Danger card title</h5>
          <p class="card-text">
            <pre style="font-size: 11px;">
<code class="html">
  &lt;div class="card border-danger" style="18rem;"&gt;
    &lt;div class="card-header"&gt;Header&lt;/div&gt;
    &lt;div class="card-body text-danger"&gt;
      &lt;h5 class="card-title"&gt;Danger card title&lt;/h5&gt;
      &lt;p class="card-text"&gt;...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code>
            </pre>
          </p>
        </div>
      </div>
      <div class="card border-warning m-2" style="max-width: 18rem; float: left;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Warning card title</h5>
          <p class="card-text">
            <pre style="font-size: 11px;">
<code class="html">
  &lt;div class="card border-warning" style="max-width: 18rem;"&gt;
    &lt;div class="card-header"&gt;Header&lt;/div&gt;
    &lt;div class="card-body"&gt;
      &lt;h5 class="card-title"&gt;Warning card title&lt;/h5&gt;
      &lt;p class="card-text"&gt;...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code>
            </pre>
          </p>
        </div>
      </div>
      <div class="card border-info m-2" style="max-width: 18rem; float: left;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Light card title</h5>
          <p class="card-text">
            <pre style="font-size: 11px;">
<code class="html">
  &lt;div class="card border-info" style="max-width: 18rem;"&gt;
    &lt;div class="card-header"&gt;Header&lt;/div&gt;
    &lt;div class="card-body"&gt;
      &lt;h5 class="card-title"&gt;Light card title&lt;/h5&gt;
      &lt;p class="card-text"&gt;...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code>
            </pre>
          </p>
        </div>
      </div>
      <div class="card border-light m-2" style="max-width: 18rem; float: left;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Light card title</h5>
          <p class="card-text">
            <pre style="font-size: 11px;">
<code class="html">
  &lt;div class="card border-light" style="max-width: 18rem;"&gt;
    &lt;div class="card-header"&gt;Header&lt;/div&gt;
    &lt;div class="card-body"&gt;
      &lt;h5 class="card-title"&gt;Light card title&lt;/h5&gt;
      &lt;p class="card-text"&gt;...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code>
            </pre>
          </p>
        </div>
      </div>
      <div class="card border-dark m-2" style="max-width: 18rem; float: left;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Dark card title</h5>
          <p class="card-text">
            <pre style="font-size: 11px;">
<code class="html">
  &lt;div class="card border-dark" style="max-width: 18rem;"&gt;
    &lt;div class="card-header"&gt;Header&lt;/div&gt;
    &lt;div class="card-body"&gt;
      &lt;h5 class="card-title"&gt;Dark card title&lt;/h5&gt;
      &lt;p class="card-text"&gt;...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

</code>
            </pre>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,demoJS:null}],b=f(d[0].id),a=y(()=>d.find(c=>c.id===b.value)||d[0]);_(()=>{g(()=>n.highlightAll())});function h(){g(()=>{document.querySelectorAll("pre code").forEach(c=>{delete c.dataset.highlighted}),n.highlightAll()})}return(c,l)=>(s(),e("div",B,[l[3]||(l[3]=t("h3",null,[o(" 此頁面尚未完全完工，目前僅將程式碼放進，還未完全套入 Bootstrap 效果。需使用此區程式碼請至舊網頁 "),t("a",{href:"https://quanting56.github.io/Antinant/web_note.html#bootstrapNote",target:"_blank",style:{"background-color":"#f2ea9d","text-wrap":"nowrap"}},"舊・阿蛤的窩 - 網頁練習｜Bootstrap網格與內容樣式筆記"),o(" 查詢 UI/UX 與 code。 ")],-1)),t("div",K,[t("nav",U,[t("ul",null,[(s(),e(p,null,N(d,i=>t("li",{key:i.id,class:m({active:i.id===b.value}),onClick:E=>b.value=i.id},r(i.title),11,C)),64))])]),u(k,{name:"fade",mode:"out-in",onAfterEnter:h},{default:w(()=>[a.value?(s(),e("section",{class:"content",key:a.value.id},[t("h3",z,r(a.value.title),1),l[2]||(l[2]=t("hr",null,null,-1)),t("div",L,[a.value.description?(s(),e("div",{key:0,class:"description",innerHTML:a.value.description},null,8,M)):v("",!0),t("div",{class:m({demo:a.value.demo})},[a.value.component?(s(),j(F(a.value.component),{key:0})):(s(),e("div",{key:1,innerHTML:a.value.demo,style:T(a.value.demoStyle)},null,12,D))],2),t("div",J,[a.value.demo?(s(),e(p,{key:0},[l[0]||(l[0]=o(" html code: ")),t("pre",null,[t("code",P,r(a.value.demo),1)])],64)):v("",!0),a.value.demoJS?(s(),e(p,{key:1},[l[1]||(l[1]=o(" javascript code: ")),t("pre",null,[t("code",A,r(a.value.demoJS),1)])],64)):v("",!0)])])])):v("",!0)]),_:1})])]))}},I=x(V,[["__scopeId","data-v-8f9fa7be"]]);export{I as default};
