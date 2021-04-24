(this["webpackJsonpbakers-math"]=this["webpackJsonpbakers-math"]||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),r=t(9),i=t.n(r),l=t(8),u=t(3),s=t(2),d=t(6),o=(t(14),t(0));var j=function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("input",{className:"recipe__input_name",type:"text",placeholder:"Ingredient",name:e.inputName,value:e.ingredientTextValue,onChange:function(n){return e.handleChange(n)}})})};var p=function(e){return Object(o.jsxs)("div",{className:"recipe__input-percent-container",children:[Object(o.jsx)("input",{className:"recipe__input_percent",type:"number",name:e.inputName,value:e.ingredientPercentValue,onChange:function(n){return e.handleChange(n)}}),Object(o.jsx)("p",{className:"recipe__input_percent-text",children:"%"})]})};var b=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"recipe-ingredient-container",children:[Object(o.jsx)(j,{inputName:"name_".concat(e.id),ingredientTextValue:e.ingredientTextValue,handleChange:function(n){return e.handleChange(n)}}),Object(o.jsx)(p,{inputName:"percent_".concat(e.id),ingredientPercentValue:e.ingredientPercentValue,handleChange:function(n){return e.handleChange(n)}}),Object(o.jsx)("div",{className:"recipe-ingredient-container__calc-weight-div",children:function(){var n=e.flourTotal*(e.ingredientPercentValue/100);return n=isNaN(n)||!isFinite(n)?"":n.toFixed(1),Object(o.jsxs)("p",{className:"recipe-ingredient-container__calc-weight-value",children:[n," g"]})}()}),Object(o.jsx)("div",{children:function(){var n=e.id;return Object(o.jsx)("button",{onClick:function(t){return e.handleSubtractClick(t,n)},className:"recipe__button_delete",children:"-"})}()})]})})};var h=function(){var e=Object(c.useState)({recipe_name:"",flour_total:0}),n=Object(d.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)([{name:"",percent:"",id:Date.now()}]),i=Object(d.a)(r,2),j=i[0],p=i[1],h=Object(c.useState)([{name:"",percent:"",id:Date.now()}]),m=Object(d.a)(h,2),g=m[0],O=m[1],f=function(e){a(Object(s.a)(Object(s.a)({},t),{},Object(u.a)({},e.target.name,e.target.value)))},_=function(e,n){e.preventDefault(),p(j.filter((function(e){return e.id!==n})))};return Object(o.jsx)("main",{className:"recipe",children:Object(o.jsxs)("form",{children:[Object(o.jsxs)("header",{className:"recipe-header",children:[Object(o.jsxs)("div",{className:"recipe-container",children:[Object(o.jsx)("legend",{className:"recipe-container__legend",children:"Name"}),Object(o.jsx)("input",{className:"recipe__input_heading",type:"text",placeholder:"Recipe Name",value:t.recipe_name,name:"recipe_name",onChange:function(e){return f(e)}})]}),Object(o.jsxs)("div",{className:"recipe-container",children:[Object(o.jsx)("legend",{className:"recipe-container__legend",children:"Total Flour (g)"}),Object(o.jsx)("input",{className:"recipe__input_heading",type:"number",placeholder:"0",value:t.flour_total,name:"flour_total",onChange:function(e){return f(e)}})]})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("section",{className:"recipe-section",children:[Object(o.jsxs)("div",{className:"recipe-banner",children:[Object(o.jsx)("p",{className:"recipe-banner__text",children:"Flour"}),Object(o.jsx)("button",{className:"recipe-button_add",onClick:function(e){return function(e){e.preventDefault(),p([].concat(Object(l.a)(j),[{name:"",percent:"",id:Date.now()}]))}(e)},children:"Add"})]}),j.map((function(e,n){var c=e.id;return Object(o.jsx)(b,{id:c,flourTotal:t.flour_total,ingredientCount:n,ingredientTextValue:e.name,ingredientPercentValue:e.percent,handleChange:function(e){return function(e){var n=e.target.name.split("_"),t=n[0],c=parseInt(n[1]);p(j.map((function(n){return n.id===c?Object(s.a)(Object(s.a)({},n),{},Object(u.a)({},t,e.target.value)):n})))}(e)},handleSubtractClick:function(e,n){return _(e,n)}},c)}))]}),Object(o.jsxs)("section",{className:"recipe-section recipe-section_ingredients",children:[Object(o.jsxs)("div",{className:"recipe-banner",children:[Object(o.jsx)("p",{className:"recipe-banner__text",children:"Ingredients"}),Object(o.jsx)("button",{className:"recipe-button_add",onClick:function(e){return function(e){e.preventDefault(),O([].concat(Object(l.a)(g),[{name:"",percent:"",id:Date.now()}]))}(e)},children:"Add"})]}),g.map((function(e,n){var c=e.id;return Object(o.jsx)(b,{id:c,flourTotal:t.flour_total,ingredientCount:n,ingredientTextValue:e.name,ingredientPercentValue:e.percent,handleChange:function(e){return function(e){var n=e.target.name.split("_"),t=n[0],c=parseInt(n[1]);O(g.map((function(n){return n.id===c?Object(s.a)(Object(s.a)({},n),{},Object(u.a)({},t,e.target.value)):n})))}(e)},handleSubtractClick:function(e,n){return _(e,n)}},c)}))]})]})})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.57821f27.chunk.js.map