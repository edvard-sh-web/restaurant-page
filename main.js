(()=>{"use strict";var e={28:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(81),r=i.n(n),o=i(645),a=i.n(o)()(r());a.push([e.id,"img{\n\theight: 600px;\n}\n\n#content {\n\tfont-family: system-ui;\n\tdisplay: grid;\n\tplace-items: center;\n}\n\n.tabs {\n\tmargin: 0 auto;\n\twidth: 600px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr;\n\tpadding: 20px;\n\tgap: 10px;\n}\n\np{\n\twidth: 900px;\n}",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",n=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),n&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),n&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,n,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(a[u]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),i&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=i):d[2]=i),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function i(e){for(var i=-1,n=0;n<t.length;n++)if(t[n].identifier===e){i=n;break}return i}function n(e,n){for(var o={},a=[],s=0;s<e.length;s++){var u=e[s],c=n.base?u[0]+n.base:u[0],d=o[c]||0,p="".concat(c," ").concat(d);o[c]=d+1;var l=i(p),m={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==l)t[l].references++,t[l].updater(m);else{var f=r(m,n);n.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(e,t){var i=t.domAPI(t);return i.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,r){var o=n(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=i(o[a]);t[s].references--}for(var u=n(e,r),c=0;c<o.length;c++){var d=i(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=u}}},569:e=>{var t={};e.exports=function(e,i){var n=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,i)=>{e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var r=void 0!==i.layer;r&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,r&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var o=i.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,i),o.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),i.nc=void 0,(()=>{const e=i.p+"5d4ead59a4044100f85f.png";function t(){const t=document.querySelector("#content");t.innerHTML="";const i=document.createElement("img");i.src=e;const n=document.createElement("h1");n.textContent="Contact us";const r=document.createElement("p");r.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima similique ex, enim molestiae necessitatibus commodi quae ea iure accusantium nesciunt, dolores facilis possimus repudiandae itaque nemo dolor. Sapiente, eius maiores! At, quod doloribus? Provident optio explicabo odit labore officiis deserunt cum, aliquam possimus debitis sapiente eum quas fugit molestias ipsa illo doloribus vero sequi rerum ullam obcaecati quasi repudiandae perferendis. Necessitatibus molestias suscipit molestiae laudantium cumque itaque tenetur. Atque fugiat porro id assumenda recusandae hic dicta ad, iure perspiciatis quia obcaecati et cumque nisi sunt eos nihil laudantium impedit reprehenderit. Eum itaque voluptas corrupti aperiam, eius perferendis impedit perspiciatis excepturi officia soluta quidem! Adipisci sint esse eaque dicta modi autem perferendis nobis, corrupti voluptas dolor. Delectus nobis error doloribus minima! Amet alias deleniti, illo culpa perspiciatis corrupti unde porro tenetur. ",t.appendChild(i),t.appendChild(n),t.appendChild(r)}const n=i.p+"e7dffb2e444b577eff32.jpeg";function r(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("img");t.src=n;const i=document.createElement("h1");i.textContent="Our great restaurant";const r=document.createElement("p");r.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima similique ex, enim molestiae necessitatibus commodi quae ea iure accusantium nesciunt, dolores facilis possimus repudiandae itaque nemo dolor. Sapiente, eius maiores! At, quod doloribus? Provident optio explicabo odit labore officiis deserunt cum, aliquam possimus debitis sapiente eum quas fugit molestias ipsa illo doloribus vero sequi rerum ullam obcaecati quasi repudiandae perferendis. Necessitatibus molestias suscipit molestiae laudantium cumque itaque tenetur. Atque fugiat porro id assumenda recusandae hic dicta ad, iure perspiciatis quia obcaecati et cumque nisi sunt eos nihil laudantium impedit reprehenderit. Eum itaque voluptas corrupti aperiam, eius perferendis impedit perspiciatis excepturi officia soluta quidem! Adipisci sint esse eaque dicta modi autem perferendis nobis, corrupti voluptas dolor. Delectus nobis error doloribus minima! Amet alias deleniti, illo culpa perspiciatis corrupti unde porro tenetur. ",e.appendChild(t),e.appendChild(i),e.appendChild(r)}const o=i.p+"94a215423daf8d7415e8.png";function a(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("img");t.src=o;const i=document.createElement("h1");i.textContent="Our great menu";const n=document.createElement("p");n.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima similique ex, enim molestiae necessitatibus commodi quae ea iure accusantium nesciunt, dolores facilis possimus repudiandae itaque nemo dolor. Sapiente, eius maiores! At, quod doloribus? Provident optio explicabo odit labore officiis deserunt cum, aliquam possimus debitis sapiente eum quas fugit molestias ipsa illo doloribus vero sequi rerum ullam obcaecati quasi repudiandae perferendis. Necessitatibus molestias suscipit molestiae laudantium cumque itaque tenetur. Atque fugiat porro id assumenda recusandae hic dicta ad, iure perspiciatis quia obcaecati et cumque nisi sunt eos nihil laudantium impedit reprehenderit. Eum itaque voluptas corrupti aperiam, eius perferendis impedit perspiciatis excepturi officia soluta quidem! Adipisci sint esse eaque dicta modi autem perferendis nobis, corrupti voluptas dolor. Delectus nobis error doloribus minima! Amet alias deleniti, illo culpa perspiciatis corrupti unde porro tenetur. ",e.appendChild(t),e.appendChild(i),e.appendChild(n)}var s=i(379),u=i.n(s),c=i(795),d=i.n(c),p=i(569),l=i.n(p),m=i(565),f=i.n(m),v=i(216),h=i.n(v),b=i(589),g=i.n(b),q=i(28),y={};y.styleTagTransform=g(),y.setAttributes=f(),y.insert=l().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=h(),u()(q.Z,y),q.Z&&q.Z.locals&&q.Z.locals,document.addEventListener("DOMContentLoaded",(e=>{console.log("DOM fully loaded and parsed"),function(){const e=document.querySelector("#content"),i=document.createElement("button"),n=document.createElement("button"),o=document.createElement("button"),s=document.createElement("div");s.classList.add("tabs"),i.textContent="Home",n.textContent="Menu",o.textContent="Contact",i.addEventListener("click",r),n.addEventListener("click",a),o.addEventListener("click",t),s.appendChild(i),s.appendChild(n),s.appendChild(o),e.before(s)}(),r()}))})()})();