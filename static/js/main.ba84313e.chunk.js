(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{29:function(t,e,c){},30:function(t,e,c){"use strict";c.r(e);var a=c(14),n=c.n(a),s=c(7),i=(c(0),c(2)),b=c(1),r=function(){return Object(b.jsx)("h1",{className:"title",children:"Home Page"})},j=c(15),o=c.n(j),l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],d=function(){var t=Object(i.g)().tabId,e=l.find((function(e){return e.id===t}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:l.map((function(e){return Object(b.jsx)("li",{className:o()({"is-active":t===e.id}),children:Object(b.jsx)(s.b,{to:"/tabs/".concat(e.id),children:e.title})},e.id)}))})}),Object(b.jsx)("p",{children:e?e.content:"Please select a tab"})]})},x=function(){return Object(b.jsx)("nav",{children:Object(b.jsx)("div",{className:"navbar",children:Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)(s.c,{to:"/",exact:!0,className:"navbar-item is-tab",activeClassName:"is-active",children:"Home"}),Object(b.jsx)(s.c,{to:"/tabs",className:"navbar-item is-tab",activeClassName:"is-active",children:"Tabs"})]})})})},h=function(){return Object(b.jsx)("h1",{className:"title",children:"Page not found"})},m=(c(28),c(29),function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(x,{}),Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{path:"/",exact:!0,component:r}),Object(b.jsx)(i.b,{path:"/tabs/:tabId?",component:d}),Object(b.jsx)(i.a,{to:"/",from:"/home"}),Object(b.jsx)(h,{})]})]})});n.a.render(Object(b.jsx)(s.a,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.ba84313e.chunk.js.map