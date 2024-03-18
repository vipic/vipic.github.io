function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/ai.CfiFXcN0.js","_astro/astro/assets-service.DcMRmNXG.js","_astro/chinese-cry.5FT4tN1q.js","_astro/index.B_rw2R2a.js","_astro/index.BQOh2Fl9.js","_astro/draft-post.BqVvDO8J.js","_astro/long-title._78xsKyM.js","_astro/index.CW_NaAIr.js","_astro/missing-content.DSgpdeHx.js","_astro/social-image.Cu3lvswa.js","_astro/the-houses-i-have-lived-in.B_eujbfw.js","_astro/tv-skill.DGmg67Qe.js","_astro/index.DusLhJiy.js","_astro/unique-tags.DQsaUqcr.js","_astro/index.Dxkhrouo.js","_astro/ui-core.SMyfw7mc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./astro/assets-service.DcMRmNXG.js";function g(t,e){t.classList.toggle(e)}function d(){return document.documentElement.getAttribute("data-theme")==="dark"}typeof process<"u"&&process.stdout&&process.stdout.isTTY;const{replace:f}="",y=/[&<>'"]/g,b={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},L=t=>b[t],T=t=>f.call(t,y,L);function S(t){return!!t&&typeof t=="object"&&typeof t.then=="function"}async function*v(t){const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)return;yield i}}finally{e.releaseLock()}}const x=T;class m extends Uint8Array{}Object.defineProperty(m.prototype,Symbol.toStringTag,{get(){return"HTMLBytes"}});class _ extends String{get[Symbol.toStringTag](){return"HTMLString"}}const R=t=>t instanceof _?t:typeof t=="string"?new _(t):t;function C(t){return Object.prototype.toString.call(t)==="[object HTMLString]"}function w(t){return new m(t)}function p(t){return typeof t.getReader=="function"}async function*u(t){if(p(t))for await(const e of v(t))yield s(e);else for await(const e of t)yield s(e)}function*k(t){for(const e of t)yield s(e)}function s(t){if(t&&typeof t=="object"){if(t instanceof Uint8Array)return w(t);if(t instanceof Response&&t.body){const e=t.body;return u(e)}else{if(typeof t.then=="function")return Promise.resolve(t).then(e=>s(e));if(Symbol.iterator in t)return k(t);if(Symbol.asyncIterator in t||p(t))return u(t)}}return R(t)}new TextEncoder;new TextDecoder;function B(t){return!!t&&typeof t=="object"&&"render"in t&&typeof t.render=="function"}function r({globResult:t,contentDir:e}){const n={};for(const i in t){const a=i.replace(new RegExp(`^${e}`),"").split("/");if(a.length<=1)continue;const l=a[0];n[l]??={},n[l][i]=t[i]}return n}const c="/src/content/",E=Object.assign({"/src/content/post/ai.md":()=>o(()=>import("./ai.CSh8nfd2.js"),__vite__mapDeps([])),"/src/content/post/chinese-cry.md":()=>o(()=>import("./chinese-cry.B-7DZ-Gy.js"),__vite__mapDeps([])),"/src/content/post/cover-image/index.md":()=>o(()=>import("./index.DD-4wZUW.js"),__vite__mapDeps([])),"/src/content/post/design-book/index.md":()=>o(()=>import("./index.D6FxQviU.js"),__vite__mapDeps([])),"/src/content/post/draft-post.md":()=>o(()=>import("./draft-post.Bo7tcanE.js"),__vite__mapDeps([])),"/src/content/post/long-title.md":()=>o(()=>import("./long-title.BWi8x02i.js"),__vite__mapDeps([])),"/src/content/post/markdown-elements/index.md":()=>o(()=>import("./index.1dG_R46x.js"),__vite__mapDeps([])),"/src/content/post/missing-content.md":()=>o(()=>import("./missing-content.w3t-9AA4.js"),__vite__mapDeps([])),"/src/content/post/social-image.md":()=>o(()=>import("./social-image.BsdW8dW2.js"),__vite__mapDeps([])),"/src/content/post/the-houses-i-have-lived-in.md":()=>o(()=>import("./the-houses-i-have-lived-in.DnQG1fWp.js"),__vite__mapDeps([])),"/src/content/post/tv-skill.md":()=>o(()=>import("./tv-skill.BRQ747Eb.js"),__vite__mapDeps([])),"/src/content/post/ui/index.md":()=>o(()=>import("./index.D0-UcB_i.js"),__vite__mapDeps([])),"/src/content/post/unique-tags.md":()=>o(()=>import("./unique-tags.Dtq_UIxu.js"),__vite__mapDeps([])),"/src/content/post/webmentions/index.md":()=>o(()=>import("./index.D25mLja6.js"),__vite__mapDeps([]))});r({globResult:E,contentDir:c});const h=Object.assign({});r({globResult:h,contentDir:c});r({globResult:{...E,...h},contentDir:c});const A=Object.assign({"/src/content/post/ai.md":()=>o(()=>import("./ai.CfiFXcN0.js"),__vite__mapDeps([0,1])),"/src/content/post/chinese-cry.md":()=>o(()=>import("./chinese-cry.5FT4tN1q.js"),__vite__mapDeps([2,1])),"/src/content/post/cover-image/index.md":()=>o(()=>import("./index.B_rw2R2a.js"),__vite__mapDeps([3,1])),"/src/content/post/design-book/index.md":()=>o(()=>import("./index.BQOh2Fl9.js"),__vite__mapDeps([4,1])),"/src/content/post/draft-post.md":()=>o(()=>import("./draft-post.BqVvDO8J.js"),__vite__mapDeps([5,1])),"/src/content/post/long-title.md":()=>o(()=>import("./long-title._78xsKyM.js"),__vite__mapDeps([6,1])),"/src/content/post/markdown-elements/index.md":()=>o(()=>import("./index.CW_NaAIr.js"),__vite__mapDeps([7,1])),"/src/content/post/missing-content.md":()=>o(()=>import("./missing-content.DSgpdeHx.js"),__vite__mapDeps([8,1])),"/src/content/post/social-image.md":()=>o(()=>import("./social-image.Cu3lvswa.js"),__vite__mapDeps([9,1])),"/src/content/post/the-houses-i-have-lived-in.md":()=>o(()=>import("./the-houses-i-have-lived-in.B_eujbfw.js"),__vite__mapDeps([10,1])),"/src/content/post/tv-skill.md":()=>o(()=>import("./tv-skill.DGmg67Qe.js"),__vite__mapDeps([11,1])),"/src/content/post/ui/index.md":()=>o(()=>import("./index.DusLhJiy.js"),__vite__mapDeps([12,1])),"/src/content/post/unique-tags.md":()=>o(()=>import("./unique-tags.DQsaUqcr.js"),__vite__mapDeps([13,1])),"/src/content/post/webmentions/index.md":()=>o(()=>import("./index.Dxkhrouo.js"),__vite__mapDeps([14,1]))});r({globResult:A,contentDir:c});const I="https://vipic.github.io";new URL(I).hostname;class O extends HTMLElement{headerEl;menuOpen;mobileButtonEl;toggleMobileMenu=()=>{g(this.headerEl,"menu-open"),this.menuOpen=!this.menuOpen,this.mobileButtonEl.setAttribute("aria-expanded",this.menuOpen.toString())};constructor(){super(),this.headerEl=document.getElementById("main-header"),this.mobileButtonEl=this.querySelector("button"),this.menuOpen=!1,this.mobileButtonEl.addEventListener("click",this.toggleMobileMenu)}}customElements.define("mobile-button",O);class D extends HTMLElement{closeBtn;dialog;dialogFrame;openBtn;closeModal=()=>{this.dialog.open&&(this.dialog.close(),window.removeEventListener("click",this.onWindowClick))};onWindowClick=e=>{("href"in(e.target||{})||document.body.contains(e.target)&&!this.dialogFrame.contains(e.target))&&this.closeModal()};onWindowKeydown=e=>{e.key==="/"&&!this.dialog.open&&(this.openModal(),e.preventDefault())};openModal=e=>{this.dialog.showModal(),this.querySelector("input")?.focus(),e?.stopPropagation(),window.addEventListener("click",this.onWindowClick)};constructor(){super(),this.openBtn=this.querySelector("button[data-open-modal]"),this.closeBtn=this.querySelector("button[data-close-modal]"),this.dialog=this.querySelector("dialog"),this.dialogFrame=this.querySelector(".dialog-frame"),this.openBtn.addEventListener("click",this.openModal),this.openBtn.disabled=!1,this.closeBtn.addEventListener("click",this.closeModal)}connectedCallback(){window.addEventListener("keydown",this.onWindowKeydown),(window.requestIdleCallback||(n=>setTimeout(n,1)))(async()=>{const{PagefindUI:n}=await o(()=>import("./ui-core.SMyfw7mc.js"),__vite__mapDeps([15,1]));new n({baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",element:"#cactus__search",showImages:!1,showSubResults:!0})})}disconnectedCallback(){window.removeEventListener("keydown",this.onWindowKeydown)}}customElements.define("site-search",D);class P extends HTMLElement{#t;connectedCallback(){const e=this.querySelector("button");e.setAttribute("role","switch"),e.setAttribute("aria-checked",String(d()));const{signal:n}=this.#t=new AbortController;e.addEventListener("click",()=>{let i=new CustomEvent("theme-change",{detail:{theme:d()?"light":"dark"}});document.dispatchEvent(i),e.setAttribute("aria-checked",String(d()))},{signal:n})}disconnectedCallback(){this.#t?.abort()}}customElements.define("theme-toggle",P);export{_ as H,B as a,S as b,x as e,C as i,R as m,s as u};
