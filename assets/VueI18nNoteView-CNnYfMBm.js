import{_ as ae,r as ie,k as ce,o as de,p as z,c as o,b as d,g as re,F as f,d as w,u as ue,w as me,T as Ce,f as t,j as pe,t as m,h as a,n as ge,s as D,v as P,i as F}from"./index-YWpp7Snf.js";import{H as N}from"./vs2015-txMzNINg.js";import{x as _e,j as be}from"./javascript-BK9ByurK.js";const Ee=[{id:"vueI18nStartNote",title:"開始使用 Vue I18n",description:"<p>使用 Vue i18n 創立一個多語系的網站吧！</p>",descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:"npm 安裝",listSubtitle:null,listComponent:null,listCode:{htmlCode:"npm install vue-i18n",jsCode:null,tsCode:null,vueCode:null},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,tsCode:null,vueCode:null}}]},{listTitle:"相關設定",listSubtitle:"在 Vue 專案 <code>src/</code> 底下新增如下結構（以 JavaScript 專案舉例）。",listComponent:null,listCode:{htmlCode:`src/
┌┘
├─ i18n/               ← i18n 插件設定
│   ├─ locales         ← 語系檔統一放這個資料夾
│   │   ├─ en.json     ← 英語語系檔
│   │   └─ zh-TW.json  ← 中文（臺灣）語系檔
│   └─ index.js        ← i18n 相關設定
├─ components/
├─ stores/
├─ ...
├─ App.vue
└─ main.js             ← 在 main.js 裡套用 i18n`,jsCode:null,tsCode:null,vueCode:null},listDetails:[{detailTitle:"<code>src/i18n/index.js</code>",detailSubtitle:"i18n 主要設定",detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:`import { createI18n } from "vue-i18n";
import zhTW from "@/i18n/locales/zh-TW.json";
import en from "@/i18n/locales/en.json";

export const SUPPORTED_LOCALES = ["zh-TW", "en"];

export const i18n = createI18n({
  legacy: false,          // Composition API 模式
  globalInjection: true,  // 允許 template 直接用 $t
  locale: "zh-TW",
  fallbackLocale: "en",
  messages: {
    "zh-TW": zhTW,
    "en": en
  }
});`,tsCode:null,vueCode:null}},{detailTitle:"<code>src/main.js</code>",detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:`import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { i18n } from "@/i18n";

import { useLocaleStore } from "@/stores/locale";  // 自訂 Pinia 檔

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.use(i18n);

// mount 前 init，避免初始語言閃一下
useLocaleStore(pinia).init();


app.mount("#app");`,tsCode:null,vueCode:null}},{detailTitle:"<code>src/stores/locale.js</code>",detailSubtitle:"以將語言設定存在 <code>localStorage</code> 做舉例。",detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:`import { defineStore } from "pinia";
import { ref } from "vue";
import { i18n, SUPPORTED_LOCALES } from "@/i18n/index";

const STORAGE_KEY = "projectName:locale";

function isSupportedLocale(v) {
  return SUPPORTED_LOCALES.includes(v);
}

export const useLocaleStore = defineStore("locale", () => {
  const locale = ref("zh-TW");
  
  function init() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved && isSupportedLocale(saved)) {
      locale.value = saved;
    }
    
    // 全站切換，改 global 的 locale
    i18n.global.locale.value = locale.value;

    // 同步 <html lang="...">
    document.documentElement.lang = locale.value;
  }

  function setLocale(next) {
    if (!isSupportedLocale(next)) { return; }

    locale.value = next;
    i18n.global.locale.value = next;
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }

  return {
    locale,
    init,
    setLocale
  };
})`,tsCode:null,vueCode:null}}]}]},{id:"i18nLocaleSampleNote",title:"語系檔範例",description:"建立不同語言的 <code>.json</code> 語系檔，之中儘可能不要使用 <code>null</code> 以避免非預期渲染結果。",descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:"一些範例",listSubtitle:null,listComponent:null,listCode:{htmlCode:null,jsCode:null,tsCode:null,vueCode:null},listDetails:[{detailTitle:"繁體中文（臺灣） <code>zh-TW</code>",detailSubtitle:"<code>src/i18n/locales/zh-TW.json</code>",detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:`{
  "nav": {
    "dashboard": "儀表板",
    "medication": "用藥紀錄"
  },
  "common": {
    "ok": "確定",
    "cancel": "取消",
    "loading": "載入中..."
  },
  "error": {
    "selectPatient": "請先選擇病人"
  }
}`,tsCode:null,vueCode:null}},{detailTitle:"英文 <code>en</code>",detailSubtitle:"<code>src/i18n/locales/en.json</code>",detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:`{
  "nav": {
    "dashboard": "Dashboard",
    "medication": "Medication"
  },
  "common": {
    "ok": "OK",
    "cancel": "Cancel",
    "loading": "Loading..."
  },
  "error": {
    "selectPatient": "Please select a patient"
  }
}`,tsCode:null,vueCode:null}},{detailTitle:"哈囉世界！",detailSubtitle:"<code>src/i18n/locales/hello-world.json</code>",detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:`{
  "nav": {
    "dashboard": "Hello world!",
    "medication": "Hello world!"
  },
  "common": {
    "ok": "Hello world!",
    "cancel": "Hello world!",
    "loading": "Hello world!"
  },
  "error": {
    "selectPatient": "Hello world!"
  }
}`,tsCode:null,vueCode:null}}]}]},{id:"i18nVueSFCNote",title:"在 Vue SFC 裡使用",description:null,descriptionComponent:null,descriptionComponentStyle:null,lists:[{listTitle:"Vue SFC 中使用",listSubtitle:"<p>有兩種使用方法，可以直接在 <code>&lt;template&gt;</code> 中用 <code>&#123;&#123; $t('key.subKey.value') &#125;&#125;</code>；或是先在 <code>&lt;script&gt;</code> 中 <code>import</code> ，再在 <code>&lt;template&gt;</code> 中用 <code>&#123;&#123; t('key.subKey.value') &#125;&#125;</code>。推薦後者。</p>",listComponent:null,listCode:{htmlCode:null,jsCode:null,tsCode:null,vueCode:null},listDetails:[{detailTitle:"<code>&#123;&#123; $t('key.subKey.value') &#125;&#125;</code>",detailSubtitle:null,detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,tsCode:null,vueCode:`<template>
  <h1>{{ $t("nav.dashboard") }}</h1>
  <button>{{ $t("common.ok") }}</button>
</template>

<script setup><\/script>

<style scoped></style>`}},{detailTitle:"<code>&#123;&#123; $t('key.subKey.value') &#125;&#125;</code> + <code>&lt;script&gt;</code> 中 <code>import</code>",detailSubtitle:"這種寫法可以在 <code>&lt;script&gt;</code> 中用 <code>t()</code> 的方式注入模板。",detailContent:null,detailComponent:null,detailCode:{htmlCode:null,jsCode:null,tsCode:null,vueCode:`
<template>
  <h1>{{ t("nav.dashboard") }}</h1>
  <button>{{ t("common.ok") }}</button>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

// 可以在這邊直接改語系
// locale.value = "en";
<\/script>

<style scoped></style>`}}]}]}],O="[A-Za-z$_][0-9A-Za-z$_]*",G=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],K=["true","false","null","undefined","NaN","Infinity"],V=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Z=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],W=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Y=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],J=[].concat(W,V,Z);function Se(l){const i=l.regex,c=(u,{after:S})=>{const y="</"+u[0].slice(1);return u.input.indexOf(y,S)!==-1},n=O,_={begin:"<>",end:"</>"},g=/<[A-Za-z0-9\\._:-]+\s*\/>/,r={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(u,S)=>{const y=u[0].length+u.index,k=u.input[y];if(k==="<"||k===","){S.ignoreMatch();return}k===">"&&(c(u,{after:y})||S.ignoreMatch());let x;const j=u.input.substring(y);if(x=j.match(/^\s*=/)){S.ignoreMatch();return}if((x=j.match(/^\s+extends\s+/))&&x.index===0){S.ignoreMatch();return}}},e={$pattern:O,keyword:G,literal:K,built_in:J,"variable.language":Y},s="[0-9](_?[0-9])*",b=`\\.(${s})`,T="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",v={className:"number",variants:[{begin:`(\\b(${T})((${b})|\\.)?|(${b}))[eE][+-]?(${s})\\b`},{begin:`\\b(${T})\\b((${b})\\b|\\.)?|(${b})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},C={className:"subst",begin:"\\$\\{",end:"\\}",keywords:e,contains:[]},h={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[l.BACKSLASH_ESCAPE,C],subLanguage:"xml"}},I={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[l.BACKSLASH_ESCAPE,C],subLanguage:"css"}},p={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[l.BACKSLASH_ESCAPE,C],subLanguage:"graphql"}},R={className:"string",begin:"`",end:"`",contains:[l.BACKSLASH_ESCAPE,C]},E={className:"comment",variants:[l.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),l.C_BLOCK_COMMENT_MODE,l.C_LINE_COMMENT_MODE]},L=[l.APOS_STRING_MODE,l.QUOTE_STRING_MODE,h,I,p,R,{match:/\$\d+/},v];C.contains=L.concat({begin:/\{/,end:/\}/,keywords:e,contains:["self"].concat(L)});const U=[].concat(E,C.contains),M=U.concat([{begin:/(\s*)\(/,end:/\)/,keywords:e,contains:["self"].concat(U)}]),A={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:e,contains:M},X={variants:[{match:[/class/,/\s+/,n,/\s+/,/extends/,/\s+/,i.concat(n,"(",i.concat(/\./,n),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}}]},$={relevance:0,match:i.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...V,...Z]}},q={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Q={variants:[{match:[/function/,/\s+/,n,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[A],illegal:/%/},ee={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function te(u){return i.concat("(?!",u.join("|"),")")}const ne={match:i.concat(/\b/,te([...W,"super","import"].map(u=>`${u}\\s*\\(`)),n,i.lookahead(/\s*\(/)),className:"title.function",relevance:0},oe={begin:i.concat(/\./,i.lookahead(i.concat(n,/(?![0-9A-Za-z$_(])/))),end:n,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},le={match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},A]},H="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+l.UNDERSCORE_IDENT_RE+")\\s*=>",se={match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,/(async\s*)?/,i.lookahead(H)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[A]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:e,exports:{PARAMS_CONTAINS:M,CLASS_REFERENCE:$},illegal:/#(?![$_A-z])/,contains:[l.SHEBANG({label:"shebang",binary:"node",relevance:5}),q,l.APOS_STRING_MODE,l.QUOTE_STRING_MODE,h,I,p,R,E,{match:/\$\d+/},v,$,{scope:"attr",match:n+i.lookahead(":"),relevance:0},se,{begin:"("+l.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[E,l.REGEXP_MODE,{className:"function",begin:H,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:l.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:e,contains:M}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:_.begin,end:_.end},{match:g},{begin:r.begin,"on:begin":r.isTrulyOpeningTag,end:r.end}],subLanguage:"xml",contains:[{begin:r.begin,end:r.end,skip:!0,contains:["self"]}]}]},Q,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+l.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[A,l.inherit(l.TITLE_MODE,{begin:n,className:"title.function"})]},{match:/\.\.\./,relevance:0},oe,{match:"\\$"+n,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[A]},ne,ee,X,le,{match:/\$[(.]/}]}}function Te(l){const i=l.regex,c=Se(l),n=O,_=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],g={begin:[/namespace/,/\s+/,l.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},r={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:_},contains:[c.exports.CLASS_REFERENCE]},e={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},s=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],b={$pattern:O,keyword:G.concat(s),literal:K,built_in:J.concat(_),"variable.language":Y},T={className:"meta",begin:"@"+n},v=(p,R,B)=>{const E=p.contains.findIndex(L=>L.label===R);if(E===-1)throw new Error("can not find mode to replace");p.contains.splice(E,1,B)};Object.assign(c.keywords,b),c.exports.PARAMS_CONTAINS.push(T);const C=c.contains.find(p=>p.scope==="attr"),h=Object.assign({},C,{match:i.concat(n,i.lookahead(/\s*\?:/))});c.exports.PARAMS_CONTAINS.push([c.exports.CLASS_REFERENCE,C,h]),c.contains=c.contains.concat([T,g,r,h]),v(c,"shebang",l.SHEBANG()),v(c,"use_strict",e);const I=c.contains.find(p=>p.label==="func.def");return I.relevance=0,Object.assign(c,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),c}const ve={class:"vue-i18n-note-view"},he={class:"layout"},Ae={class:"sidebar"},ye=["onClick"],fe={class:"content-title"},Ne=["innerHTML"],Ie={key:2,class:"content-body"},Re=["innerHTML"],Le=["innerHTML"],ke={key:1,class:"lists-demo"},Oe={key:2,class:"code"},Me={key:0},xe={class:"language-html"},we={key:1},De={class:"language-javascript"},Pe={key:2},Be={class:"language-typescript"},Ue={class:"language-html"},$e={key:3},He=["innerHTML"],je=["innerHTML"],ze=["innerHTML"],Fe={key:2,class:"details-demo"},Ge={key:3,class:"code"},Ke={key:0},Ve={class:"language-html"},Ze={key:1},We={class:"language-javascript"},Ye={key:2},Je={class:"language-typescript"},Xe={class:"language-html"},qe={__name:"VueI18nNoteView",setup(l){const i=Ee,c=ie(i[0].id),n=ce(()=>i.find(g=>g.id===c.value)||i[0]);N.registerLanguage("html",_e),N.registerLanguage("javascript",be),N.registerLanguage("typescript",Te),de(()=>{z(()=>N.highlightAll())});function _(){z(()=>{document.querySelectorAll("pre code").forEach(g=>{delete g.dataset.highlighted}),N.highlightAll()})}return(g,r)=>(t(),o("div",ve,[d("div",he,[d("nav",Ae,[d("ul",null,[(t(!0),o(f,null,w(ue(i),e=>(t(),o("li",{key:e.id,class:pe({active:e.id===c.value}),onClick:s=>c.value=e.id},m(e.title),11,ye))),128))])]),re(Ce,{name:"fade",mode:"out-in",onAfterEnter:_},{default:me(()=>[n.value?(t(),o("section",{class:"content",key:n.value.id},[d("h3",fe,m(n.value.title),1),r[2]||(r[2]=d("hr",null,null,-1)),n.value.description?(t(),o("div",{key:0,class:"description",innerHTML:n.value.description},null,8,Ne)):a("",!0),n.value.descriptionComponent?(t(),o("div",{key:1,style:ge(n.value.descriptionComponentStyle),class:"description-component"},[(t(),D(P(n.value.descriptionComponent)))],4)):a("",!0),n.value.lists.length&&n.value.lists[0].listTitle?(t(),o("ul",Ie,[(t(!0),o(f,null,w(n.value.lists,e=>(t(),o("li",{key:e.listTitle,class:"list"},[d("h4",{class:"list-title",innerHTML:e.listTitle},null,8,Re),e.listSubtitle?(t(),o("div",{key:0,class:"list-subtitle",innerHTML:e.listSubtitle},null,8,Le)):a("",!0),e.listComponent?(t(),o("div",ke,[(t(),D(P(e.listComponent)))])):a("",!0),e.listCode.htmlCode||e.listCode.jsCode||e.listCode.tsCode||e.listCode.vueCode?(t(),o("div",Oe,[e.listCode.htmlCode?(t(),o("pre",Me,[d("code",xe,m(e.listCode.htmlCode),1)])):a("",!0),e.listCode.jsCode?(t(),o("pre",we,[d("code",De,m(e.listCode.jsCode),1)])):a("",!0),e.listCode.tsCode?(t(),o("pre",Pe,[d("code",Be,m(e.listCode.tsCode),1)])):a("",!0),e.listCode.vueCode?(t(),o(f,{key:3},[r[0]||(r[0]=F(" Vue 3 SFC（使用Composition API）這樣寫： ")),d("pre",null,[d("code",Ue,m(e.listCode.vueCode),1)])],64)):a("",!0)])):a("",!0),e.listDetails.length&&e.listDetails[0].detailTitle?(t(),o("ol",$e,[(t(!0),o(f,null,w(e.listDetails,s=>(t(),o("li",{key:s.detailTitle,class:"detail"},[d("h5",{class:"detail-title",innerHTML:s.detailTitle},null,8,He),s.detailSubtitle?(t(),o("div",{key:0,class:"detail-subtitle",innerHTML:s.detailSubtitle},null,8,je)):a("",!0),s.detailContent?(t(),o("div",{key:1,class:"detail-content",innerHTML:s.detailContent},null,8,ze)):a("",!0),s.detailComponent?(t(),o("div",Fe,[(t(),D(P(s.detailComponent)))])):a("",!0),s.detailCode.htmlCode||s.detailCode.jsCode||s.detailCode.tsCode||s.detailCode.vueCode?(t(),o("div",Ge,[s.detailCode.htmlCode?(t(),o("pre",Ke,[d("code",Ve,m(s.detailCode.htmlCode),1)])):a("",!0),s.detailCode.jsCode?(t(),o("pre",Ze,[d("code",We,m(s.detailCode.jsCode),1)])):a("",!0),s.detailCode.tsCode?(t(),o("pre",Ye,[d("code",Je,m(s.detailCode.tsCode),1)])):a("",!0),s.detailCode.vueCode?(t(),o(f,{key:3},[r[1]||(r[1]=F(" Vue 3 SFC（使用Composition API）這樣寫： ")),d("pre",null,[d("code",Xe,m(s.detailCode.vueCode),1)])],64)):a("",!0)])):a("",!0)]))),128))])):a("",!0)]))),128))])):a("",!0)])):a("",!0)]),_:1})])]))}},nt=ae(qe,[["__scopeId","data-v-32b99b90"]]);export{nt as default};
