if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),c={module:{uri:t},exports:l,require:o};s[t]=Promise.all(r.map((e=>c[e]||o(e)))).then((e=>(n(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/CalculatorView-dJASoZ6T.js",revision:null},{url:"assets/CurrencyConverterView-q0XOpZKD.js",revision:null},{url:"assets/index-FNrLesB7.css",revision:null},{url:"assets/index-Y79VGwpZ.js",revision:null},{url:"assets/UnitConverterView-dq9ZaHKA.js",revision:null},{url:"index.html",revision:"9d970dc681ca7047beccf0ccf0d8cef8"},{url:"registerSW.js",revision:"7a3217f0fb7ae3b80cf5889c9f24ccbe"},{url:"manifest.webmanifest",revision:"edb823ec294695303b089f2007e37eea"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));