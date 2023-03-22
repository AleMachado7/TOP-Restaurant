(()=>{"use strict";const e=function(e,t,i){const a=document.createElement(e);return a.setAttribute("class",t),a.textContent=i,a};!function(){const t=document.getElementById("content");t.appendChild(function(){const t=e("header","header"),i=e("ul","header-container"),a=e("li","header-item","Home"),n=e("li","header-item","Menu"),d=e("li","header-item","Contact");return i.append(a,n,d),t.appendChild(i),t}()),t.appendChild(function(){const t=e("section","home");t.classList.add("active");const i=e("h1","title","Ciao Bella Restaurant");t.appendChild(i);const a=e("img","logo");a.setAttribute("src","../src/assets/logo.webp"),t.appendChild(a);const n=e("div","large-container"),d=e("div","large-container");return n.appendChild(e("p","large-text","Welcome to Ciao Bella, where authentic Italian cuisine meets warm and sophisticated hospitality.")),n.appendChild(e("p","large-text","Our menu features delicious dishes, from fresh salads to homemade pastas, crispy pizzas, and grilled meats.")),n.appendChild(e("p","large-text","Don't forget to try our artisanal desserts and carefully selected Italian wines.")),t.appendChild(n),d.appendChild(e("p","large-text","Join us for a romantic dinner for two, a gathering with friends, or a special celebration.")),d.appendChild(e("p","large-text","Let our attentive staff take care of everything for you")),d.appendChild(e("p","large-text","Ciao Bella, where the food is always delicious and the hospitality is unmatched.")),t.appendChild(d),t}()),t.appendChild(function(){const t=e("section","menu"),i=e("h1","title","Restaurant Menu");t.appendChild(i);const a=e("div","food-grid"),n=e("div","food-item");n.appendChild(e("h2","subtitle","Bruschetta"));const d=e("img","food-image");d.setAttribute("src","../src/assets/bruschetta.png"),n.appendChild(d),n.appendChild(e("p","food-description","A classic Italian appetizer consisting of grilled bread rubbed with garlic and topped with fresh tomatoes, basil, and olive oil.")),n.appendChild(e("p","food-price","Price: $4.50")),a.appendChild(n);const o=e("div","food-item");o.appendChild(e("h2","subtitle","Risotto alla Milanese"));const s=e("img","food-image");s.setAttribute("src","../src/assets/risoto_milanes_com_ossobuco.png"),o.appendChild(s),o.appendChild(e("p","food-description","This creamy rice dish is made with saffron, butter, onion, Parmesan cheese, and white wine. It is a classic Milanese recipe and is often served with Osso Buco.")),o.appendChild(e("p","food-price","Price: $15.00")),a.appendChild(o);const r=e("div","food-item");r.appendChild(e("h2","subtitle","Tiramisu"));const l=e("img","food-image");return l.setAttribute("src","../src/assets/tiramisu.png"),r.appendChild(l),r.appendChild(e("p","food-description","A popular Italian dessert made with layers of ladyfingers soaked in espresso and coffee liqueur, mascarpone cheese, and cocoa powder. It is a rich and indulgent treat that is perfect for satisfying your sweet tooth.")),r.appendChild(e("p","food-price","Price: $8.00")),a.appendChild(r),t.appendChild(a),t}()),t.appendChild(function(){const t=e("section","contact"),i=e("h1","title","Contact Us");t.appendChild(i);const a=e("div","large-container");return a.appendChild(e("p","subtitle","Reach us out!")),a.appendChild(e("p","large-text","Telephone: +55 31 9999999999")),a.appendChild(e("p","large-text","Email: totaly-trustworthy-mail@validmail.com")),t.appendChild(a),t}())}();const t=document.querySelectorAll(".header-item"),i=document.querySelectorAll("section");t.forEach((e=>{e.addEventListener("click",(()=>{const t=document.querySelector(`.${e.textContent.toLowerCase()}`);i.forEach((e=>e.classList.remove("active"))),t.classList.add("active")}))}))})();