(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c.n(n),a=c(7),s=c.n(a),r=(c(13),c(0));function o(){return Object(r.jsx)("nav",{className:"indigo lighten-1",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("a",{href:"/#",className:"brand-logo",children:"React Shop"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"/#",children:Object(r.jsx)("i",{className:"large material-icons",children:"shopping_cart"})})})})]})})})}var l=c(8),d=c(1),j=c(3);function u(){return Object(r.jsx)("div",{className:"preloader-wrapper big active",children:Object(r.jsxs)("div",{className:"spinner-layer spinner-blue",children:[Object(r.jsx)("div",{className:"circle-clipper left",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"gap-patch",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"circle-clipper right",children:Object(r.jsx)("div",{className:"circle"})})]})})}function b(e){var t=e.mainId,c=e.displayName,n=e.displayDescription,i=e.price,a=e.displayAssets,s=e.addToBasket,o=void 0===s?Function.prototype:s;return Object(r.jsxs)("div",{className:"card large",id:t,children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("img",{src:a[0].full_background,alt:c})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("span",{className:"card-title",children:c}),Object(r.jsx)("p",{children:n||"No description for this product "})]}),Object(r.jsxs)("div",{className:"card-action",children:[Object(r.jsx)("button",{className:"btn indigo lighten-1",type:"button",onClick:function(){return o({mainId:t,displayName:c,price:i})},children:"Buy"}),Object(r.jsxs)("span",{className:"card-price right",children:[i.regularPrice," usd."]})]})]})}function h(e){var t=e.goods,c=void 0===t?[]:t,n=e.addToBasket,i=void 0===n?Function.prototype:n;return c.length?Object(r.jsx)("div",{className:"goods",children:c.map((function(e){return Object(r.jsx)(b,Object(d.a)(Object(d.a)({},e),{},{addToBasket:i}),e.mainId)}))}):Object(r.jsx)("h3",{children:"Nothing here"})}function m(e){var t=e.quantity,c=void 0===t?0:t,n=e.handleBasketShow,i=void 0===n?Function.prototype:n;return Object(r.jsxs)("div",{className:"cart indigo lighten-1 white-text",onClick:i,children:[Object(r.jsx)("i",{className:"material-icons",children:"shopping_cart"}),c?Object(r.jsx)("span",{className:"cart-quantity",children:c}):null]})}function O(e){var t=e.mainId,c=e.displayName,n=e.price,i=e.quantity,a=e.removeFromBasket,s=void 0===a?Function.prototype:a,o=e.incQuantity,l=void 0===o?Function.prototype:o,d=e.decQuantity,j=void 0===d?Function.prototype:d;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("li",{className:"collection-item",children:[c," x ",i,"= ",n.regularPrice*i,Object(r.jsx)("button",{type:"button",className:"decrement-item-btn btn",onClick:function(){return j(t)},children:Object(r.jsx)("i",{className:"material-icons",children:"remove"})}),Object(r.jsx)("button",{type:"button",className:"increment-item-btn btn",onClick:function(){return l(t)},children:Object(r.jsx)("i",{className:"material-icons",children:"add"})}),Object(r.jsx)("span",{className:"secondary-content",onClick:function(){return s(t)},children:Object(r.jsx)("i",{className:"material-icons basket-delete",children:"close"})})]})})}function p(e){var t=e.order,c=void 0===t?[]:t,n=e.handleBasketShow,i=void 0===n?Function.prototype:n,a=e.removeFromBasket,s=void 0===a?Function.prototype:a,o=e.incQuantity,l=void 0===o?Function.prototype:o,j=e.decQuantity,u=void 0===j?Function.prototype:j,b=c.reduce((function(e,t){return e+t.price.regularPrice*t.quantity}),0);return Object(r.jsxs)("ul",{className:"collection basket-list",children:[Object(r.jsx)("li",{className:"collection-item active",children:"Cart"}),c.length?c.map((function(e){return Object(r.jsx)(O,Object(d.a)(Object(d.a)({},e),{},{removeFromBasket:s,incQuantity:l,decQuantity:u}),e.mainId)})):Object(r.jsx)("li",{className:"collection-item",children:"Empty cart"}),Object(r.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",b]}),Object(r.jsx)("li",{className:"collection-item active",children:Object(r.jsx)("button",{type:"button",className:"btn-small",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})}),Object(r.jsx)("i",{className:"material-icons basket-close",onClick:i,children:"close"})]})}function x(e){var t=e.name,c=void 0===t?"":t,i=e.closeAlert,a=void 0===i?Function.prototype:i;return Object(n.useEffect)((function(){var e=setTimeout(a,3e3);return function(){clearTimeout(e)}}),[c]),Object(r.jsx)("div",{id:"toast-container",children:Object(r.jsxs)("div",{className:"toast",children:[c," added to cart!"]})})}function v(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(!0),s=Object(j.a)(a,2),o=s[0],b=s[1],O=Object(n.useState)([]),v=Object(j.a)(O,2),f=v[0],N=v[1],y=Object(n.useState)(!1),g=Object(j.a)(y,2),k=g[0],F=g[1],B=Object(n.useState)(""),S=Object(j.a)(B,2),w=S[0],q=S[1],I=function(){F(!k)};return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v2/shop?lang=en",{headers:{Authorization:"e7cd2d94-06775e08-f6418413-7d7946f9"}}).then((function(e){return e.json()})).then((function(e){i(e.shop),b(!1)}))}),[]),Object(r.jsx)("main",{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(m,{quantity:f.length,handleBasketShow:I}),o?Object(r.jsx)(u,{}):Object(r.jsx)(h,{goods:c,addToBasket:function(e){var t=f.findIndex((function(t){return t.mainId===e.mainId}));if(t<0){var c=Object(d.a)(Object(d.a)({},e),{},{quantity:1});N([].concat(Object(l.a)(f),[c]))}else{var n=f.map((function(e,c){return c===t?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity+1}):e}));N(n)}q(e.displayName)}}),k&&Object(r.jsx)(p,{order:f,handleBasketShow:I,removeFromBasket:function(e){var t=f.filter((function(t){return t.mainId!==e}));N(t)},incQuantity:function(e){var t=f.map((function(t){if(t.mainId===e){var c=t.quantity+1;return Object(d.a)(Object(d.a)({},t),{},{quantity:c})}return t}));N(t)},decQuantity:function(e){var t=f.map((function(t){if(t.mainId===e){var c=t.quantity-1;return Object(d.a)(Object(d.a)({},t),{},{quantity:c>=1?c:0})}return t}));N(t)}}),w&&Object(r.jsx)(x,{name:w,closeAlert:function(){q("")}})]})})}function f(){return Object(r.jsxs)("footer",{className:"page-footer indigo lighten-1",children:[Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col l6 s12",children:[Object(r.jsx)("h5",{className:"white-text",children:"React Shop"}),Object(r.jsx)("p",{className:"grey-text text-lighten-4",children:"React Simple Shop for Portfolio."})]})})}),Object(r.jsx)("div",{className:"footer-copyright",children:Object(r.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Hryhorii Petrov",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"More Links"})]})})]})}function N(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsx)(v,{}),Object(r.jsx)(f,{})]})}s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.74012c91.chunk.js.map