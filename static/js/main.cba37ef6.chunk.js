(this["webpackJsonpmvp-falso-idolo-front"]=this["webpackJsonpmvp-falso-idolo-front"]||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var c=n(2),o=n.n(c),a=n(15),r=n.n(a),s=(n(23),n(24),n(6)),i=n.n(s),l=n(16),u=n(18),p=n(17),f=n.n(p),j=n(0);function d(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],o=e[1],a=function(){var t=Object(l.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("https://mvp-falso-idolo-api.herokuapp.com/api/v1/fonogramas");case 3:e=t.sent,n=e.data,console.log(n),o(n.fonos),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),Object(j.jsx)("div",{className:"list-container",children:n.map((function(t){var e=t.nombre,n=t.imagen,c=t.artista,o=t._id;return Object(j.jsx)("a",{href:"https://mvp-falso-idolo-api.herokuapp.com/api/v1/fonogramas/".concat(o),children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:n,alt:e}),Object(j.jsx)("h2",{children:e}),Object(j.jsx)("h3",{children:c})]},o)})}))})}var h=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Falso \xcddolo Portafolio"}),Object(j.jsx)(d,{})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),o(t),a(t),r(t)}))};r.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),b()}},[[45,1,2]]]);
//# sourceMappingURL=main.cba37ef6.chunk.js.map