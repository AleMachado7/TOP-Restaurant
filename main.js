(()=>{"use strict";const e=function(e,t,n){const a=document.createElement(e);return a.setAttribute("id",t),a.textContent=n,a};console.log("hello world"),document.getElementById("content").appendChild(function(){const t=e("section","home-content"),n=e("header","header"),a=e("ul","content-items"),o=e("li","header-home","Home"),i=e("li","header-menu","Menu"),s=e("li","header-contact","Contact");a.append(o,i,s),n.appendChild(a),t.appendChild(n);const r=e("h1","home-title","Ciao Bella Restaurant");t.appendChild(r);const d=e("img","home-logo");d.setAttribute("src","../src/assets/logo.webp"),t.appendChild(d);const l=e("div","home-description"),c=e("p","restaurant-description");c.textContent="Welcome to Ciao Bella, where authentic Italian cuisine meets warm and sophisticated hospitality. Our\n                    menu features delicious dishes, from fresh salads to homemade pastas, crispy pizzas, and grilled\n                    meats. Don't forget to try our artisanal desserts and carefully selected Italian wines. ";const h=e("p","restaurant-invite");return h.textContent="Join us for a romantic dinner for two, a gathering with friends, or a special celebration. Let our attentive\n                    staff take care of everything for you. Ciao Bella, where the food is always delicious and the\n                    hospitality is unmatched.",l.append(c,h),t.append(l),t}())})();