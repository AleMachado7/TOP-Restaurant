(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(81),i=t.n(a),r=t(645),o=t.n(r)()(i());o.push([e.id,'* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: rgb(223, 208, 145);\n  min-height: 100vh;\n  padding: 0 1rem 1rem 1rem;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nsection {\n  display: none;\n}\n\n.active {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.header {\n  margin: 1rem 0;\n}\n\n.header-container {\n  display: flex;\n  gap: 2rem;\n  list-style-type: none;\n  flex-grow: 1;\n  font-weight: 600;\n  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\n}\n\n.header-item {\n  padding: 0 8px;\n  font-size: clamp(20px, 2vw, 3vw);\n  border: solid 3px rgb(0, 0, 0);\n  border-radius: 20px;\n  background-color: rgb(184, 84, 66);\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.header-item:hover {\n  box-shadow: 0px 0px 10px 5px rgba(255, 3, 3, 0.6);\n  cursor: pointer;\n}\n\n.title {\n  display: flex;\n  justify-content: center;\n  font-size: clamp(30px, 2.5vw, 3vw);\n  margin: 1rem 0;\n  color: rgb(134, 20, 0);\n  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.38);\n}\n\n.subtitle {\n  font-size: clamp(18px, 1.2vw, 1.4vw);\n}\n\n.logo {\n  width: 300px;\n}\n\n.large-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgb(139, 105, 56);\n  padding: 2rem;\n  margin-top: 2rem;\n  border-radius: 8px;\n  width: clamp(300px, 30vw, 35vw);\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.large-text {\n  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",\n    "Lucida Sans", Arial, sans-serif;\n  font-size: clamp(14px, 0.8vw, 1vw);\n  margin: 6px 0;\n}\n\n.food-grid {\n  display: grid;\n  justify-content: center;\n  width: 80vw;\n  grid-template-columns: repeat(auto-fit, 300px);\n  gap: 1.3rem;\n}\n\n.food-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgb(182, 133, 59);\n  width: 300px;\n  border-radius: 8px;\n  padding: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.food-image {\n  width: clamp(200px, 12vw, 15vw);\n  height: clamp(150px, 9vw, 12vw);\n  padding: 8px 0;\n}\n\n.food-description {\n  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",\n    "Lucida Sans", Arial, sans-serif;\n  font-size: clamp(12px, 0.7vw, 0.8vw);\n  margin: 6px 0;\n}\n\n.food-price {\n  font-size: clamp(14px, 1vw, 1.2vw);\n  font-weight: 800;\n}\n',""]);const s=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(o[d]=!0)}for(var p=0;p<e.length;p++){var c=[].concat(e[p]);a&&o[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),n.push(c))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},o=[],s=0;s<e.length;s++){var d=e[s],p=a.base?d[0]+a.base:d[0],c=r[p]||0,l="".concat(p," ").concat(c);r[p]=c+1;var u=t(l),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var h=i(f,a);a.byIndex=s,n.splice(s,0,{identifier:l,updater:h,references:1})}o.push(l)}return o}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var r=a(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var s=t(r[o]);n[s].references--}for(var d=a(e,i),p=0;p<r.length;p++){var c=t(r[p]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}r=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var i=n[a];if(void 0!==i)return i.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e=function(e,n,t){const a=document.createElement(e);return a.setAttribute("class",n),a.textContent=t,a};var n=t(379),a=t.n(n),i=t(795),r=t.n(i),o=t(569),s=t.n(o),d=t(565),p=t.n(d),c=t(216),l=t.n(c),u=t(589),f=t.n(u),h=t(426),m={};m.styleTagTransform=f(),m.setAttributes=p(),m.insert=s().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),a()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals,function(){const n=document.getElementById("content");n.appendChild(function(){const n=e("header","header"),t=e("ul","header-container"),a=e("li","header-item","Home"),i=e("li","header-item","Menu"),r=e("li","header-item","Contact");return t.append(a,i,r),n.appendChild(t),n}()),n.appendChild(function(){const n=e("section","home");n.classList.add("active");const t=e("h1","title","Ciao Bella Restaurant");n.appendChild(t);const a=e("img","logo");a.setAttribute("src","assets/images/logo.png"),n.appendChild(a);const i=e("div","large-container"),r=e("div","large-container");return i.appendChild(e("p","large-text","Welcome to Ciao Bella, where authentic Italian cuisine meets warm and sophisticated hospitality.")),i.appendChild(e("p","large-text","Our menu features delicious dishes, from fresh salads to homemade pastas, crispy pizzas, and grilled meats.")),i.appendChild(e("p","large-text","Don't forget to try our artisanal desserts and carefully selected Italian wines.")),n.appendChild(i),r.appendChild(e("p","large-text","Join us for a romantic dinner for two, a gathering with friends, or a special celebration.")),r.appendChild(e("p","large-text","Let our attentive staff take care of everything for you")),r.appendChild(e("p","large-text","Ciao Bella, where the food is always delicious and the hospitality is unmatched.")),n.appendChild(r),n}()),n.appendChild(function(){const n=e("section","menu"),t=e("h1","title","Restaurant Menu");n.appendChild(t);const a=e("div","food-grid"),i=e("div","food-item");i.appendChild(e("h2","subtitle","Bruschetta"));const r=e("img","food-image");r.setAttribute("src","./assets/images/bruschetta.png"),i.appendChild(r),i.appendChild(e("p","food-description","A classic Italian appetizer consisting of grilled bread rubbed with garlic and topped with fresh tomatoes, basil, and olive oil.")),i.appendChild(e("p","food-price","Price: $4.50")),a.appendChild(i);const o=e("div","food-item");o.appendChild(e("h2","subtitle","Risotto alla Milanese"));const s=e("img","food-image");s.setAttribute("src","./assets/images/risoto_milanes_com_ossobuco.png"),o.appendChild(s),o.appendChild(e("p","food-description","This creamy rice dish is made with saffron, butter, onion, Parmesan cheese, and white wine. It is a classic Milanese recipe and is often served with Osso Buco.")),o.appendChild(e("p","food-price","Price: $15.00")),a.appendChild(o);const d=e("div","food-item");d.appendChild(e("h2","subtitle","Tiramisu"));const p=e("img","food-image");return p.setAttribute("src","./assets/images/tiramisu.png"),d.appendChild(p),d.appendChild(e("p","food-description","A popular Italian dessert made with layers of ladyfingers soaked in espresso and coffee liqueur, mascarpone cheese, and cocoa powder. It is a rich and indulgent treat that is perfect for satisfying your sweet tooth.")),d.appendChild(e("p","food-price","Price: $8.00")),a.appendChild(d),n.appendChild(a),n}()),n.appendChild(function(){const n=e("section","contact"),t=e("h1","title","Contact Us");n.appendChild(t);const a=e("div","large-container");return a.appendChild(e("p","subtitle","Reach us out!")),a.appendChild(e("p","large-text","Telephone: +55 31 9999999999")),a.appendChild(e("p","large-text","Email: totaly-trustworthy-mail@validmail.com")),n.appendChild(a),n}())}();const g=document.querySelectorAll(".header-item"),x=document.querySelectorAll("section");g.forEach((e=>{e.addEventListener("click",(()=>{const n=document.querySelector(`.${e.textContent.toLowerCase()}`);x.forEach((e=>e.classList.remove("active"))),n.classList.add("active")}))}))})()})();