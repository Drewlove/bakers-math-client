(this["webpackJsonpbakers-math"]=this["webpackJsonpbakers-math"]||[]).push([[0],{29:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),a=t(23),i=t.n(a),u=(t(29),t(2)),s=t(21),o=t(12),d=t(4),l=t(8),j=t(0);var p=function(e){return Object(j.jsxs)("header",{className:"recipe-header",children:[Object(j.jsxs)("div",{className:"recipe-container",children:[Object(j.jsx)("legend",{className:"recipe-container__legend",children:"Name"}),Object(j.jsx)("input",{className:"recipe__input_heading",type:"text",placeholder:"Recipe Name",value:e.recipe.recipe_name,name:"recipe_name",onChange:function(n){return e.handleChangeRecipe(n)}})]}),Object(j.jsxs)("div",{className:"recipe-container",children:[Object(j.jsx)("legend",{className:"recipe-container__legend",children:"Total Flour (g)"}),Object(j.jsx)("input",{className:"recipe__input_heading",type:"number",placeholder:"0",value:e.recipe.flour_total,name:"flour_total",onChange:function(n){return e.handleChangeRecipe(n)}})]})]})};var b=function(e){return Object(j.jsx)("div",{className:"recipe-ingredient-name-container",children:Object(j.jsx)("input",{className:"recipe-ingredient__input recipe-ingredient__input_name",type:"text",placeholder:"Ingredient",name:e.inputName,value:e.ingredientTextValue,onChange:function(n){return e.handleChangeIngredient(n)}})})};var h=function(e){return Object(j.jsxs)("div",{className:"recipe__input-percent-container",children:[Object(j.jsx)("input",{className:"recipe-ingredient__input_percent",type:"number",name:e.inputName,value:e.ingredientPercentValue,onChange:function(n){return e.handleChangeIngredient(n)}}),Object(j.jsx)("p",{className:"recipe__input_percent-text",children:"%"})]})};var f=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"recipe-ingredient-container",children:[Object(j.jsx)(b,{inputName:"name_".concat(e.id),ingredientTextValue:e.ingredientTextValue,handleChangeIngredient:function(n){return e.handleChangeIngredient(n)}}),Object(j.jsxs)("div",{className:"recipe-ingredient-percent-wt-btn-container",children:[Object(j.jsx)(h,{inputName:"percent_".concat(e.id),ingredientPercentValue:e.ingredientPercentValue,handleChangeIngredient:function(n){return e.handleChangeIngredient(n)}}),Object(j.jsx)("div",{className:"recipe-ingredient-container__calc-weight-div",children:function(){var n=e.flourTotal*(e.ingredientPercentValue/100);return n=isNaN(n)||!isFinite(n)?"":n.toFixed(1),Object(j.jsxs)("p",{className:"recipe-ingredient-container__calc-weight-value",children:[n," g"]})}()}),Object(j.jsx)("div",{children:function(){var n=e.id;return Object(j.jsx)("button",{onClick:function(t){return e.handleSubtractClick(t,n)},className:"recipe__button_delete",children:"-"})}()})]})]})})};var g=function(e){var n;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("section",{className:"recipe-section",children:[Object(j.jsxs)("div",{className:"recipe-banner",children:[Object(j.jsx)("p",{className:"recipe-banner__text",children:e.sectionName}),Object(j.jsx)("button",{className:"recipe-button_add",onClick:function(n){return e.handleClickAddIngredient(n,e.ingredientType)},children:"+"})]}),(n=e.ingredients,n.map((function(n,t){var r=n.id;return Object(j.jsx)(f,{id:r,flourTotal:e.recipe.flour_total,ingredientCount:t,ingredientTextValue:n.name,ingredientPercentValue:n.percent,handleChangeIngredient:function(n){return e.handleChangeIngredient(n,e.ingredientType)},handleSubtractClick:function(n,t){return e.handleSubtractClick(n,t,e.ingredientType)}},r)})))]})})};var O=function(e){var n=Object(r.useState)({recipe_name:"",flour_total:""}),t=Object(l.a)(n,2),c=t[0],a=t[1],i=Object(r.useState)([{name:"",percent:"",id:""}]),u=Object(l.a)(i,2),b=u[0],h=u[1],f=Object(r.useState)([{name:"",percent:"",id:""}]),O=Object(l.a)(f,2),m=O[0],x=O[1];Object(r.useEffect)((function(){var n=e.data[0],t=n.flours,r=n.ingredients;h(v(t)),x(v(r)),a({recipe_name:n.recipe_name,flour_total:n.flour_total})}),[e.data]);var v=function(e){return e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{id:"".concat(e.name,"-").concat(e.percent)})}))},_=function(e,n){var t=e.target.name.split("_"),r=t[0],c=parseInt(t[1]);"flour"===n?N(e,r,c):"ingredient"===n&&C(e,r,c)},C=function(e,n,t){x(m.map((function(r){return r.id===t?Object(d.a)(Object(d.a)({},r),{},Object(o.a)({},n,e.target.value)):r})))},N=function(e,n,t){h(b.map((function(r){return r.id===t?Object(d.a)(Object(d.a)({},r),{},Object(o.a)({},n,e.target.value)):r})))},T=function(e,n,t){e.preventDefault(),"flour"===t?h(b.filter((function(e){return e.id!==n}))):"ingredient"===t&&x(m.filter((function(e){return e.id!==n})))},E=function(e,n){e.preventDefault(),"flour"===n?h([].concat(Object(s.a)(b),[{name:"",percent:"",id:Date.now()}])):"ingredient"===n&&x([].concat(Object(s.a)(m),[{name:"",percent:"",id:Date.now()}]))};return Object(j.jsxs)("form",{children:[Object(j.jsx)(p,{recipe:c,handleChangeRecipe:function(e){return function(e){a(Object(d.a)(Object(d.a)({},c),{},Object(o.a)({},e.target.name,e.target.value)))}(e)}}),Object(j.jsx)("hr",{}),Object(j.jsx)(g,{sectionName:"Flour",recipe:c,ingredients:b,ingredientType:"flour",handleClickAddIngredient:function(e,n){return E(e,n)},handleChangeIngredient:function(e,n){return _(e,n)},handleSubtractClick:function(e,n,t){return T(e,n,t)}}),Object(j.jsx)(g,{sectionName:"Ingredients",recipe:c,ingredients:m,ingredientType:"ingredient",handleClickAddIngredient:function(e,n){return E(e,n)},handleChangeIngredient:function(e,n){return _(e,n)},handleSubtractClick:function(e,n,t){return T(e,n,t)}})]})},m=t(10),x=t.n(m),v=t(16),_="http://localhost:9000/api",C=("Bearer ".concat("1234"),function(e,n){switch(n.type){case"FETCH_INIT":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!0,isLoaded:!1,isError:!1});case"FETCH_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,isLoaded:!0,isError:!1,data:n.payload});case"FETCH_FAILURE":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,isLoaded:!1,isError:!0,error:n.error});default:throw new Error}}),N=function(e){return e.map((function(e){return"".concat(_,"/").concat(e)}))},T=function(){var e=Object(v.a)(x.a.mark((function e(n,t){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Promise.all(n.map((function(e){return fetch(e,{method:"GET",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}})})));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),E=function(){var e=Object(v.a)(x.a.mark((function e(n){var t,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=I(n)).status){e.next=5;break}return e.abrupt("return",{type:"FETCH_FAILURE",error:t});case 5:return e.next=7,Promise.all(n.map((function(e){return e.json()})));case 7:return r=e.sent,e.abrupt("return",{type:"FETCH_SUCCESS",payload:r});case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),I=function(e){var n={};return e.forEach((function(e){e.ok||(n={status:e.status,statusText:e.statusText})})),n};var k=function(e){var n=function(e){var n=Object(r.useReducer)(C,{isLoading:!0,isError:!1,error:{},data:[]}),t=Object(l.a)(n,2),c=t[0],a=t[1];return Object(r.useEffect)((function(){var n=!1;return function(){var t=Object(v.a)(x.a.mark((function t(){var r,c,i;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.length){t.next=2;break}return t.abrupt("return",a({type:"FETCH_SUCCESS",payload:{}}));case 2:if(a({type:"FETCH_INIT"}),r=N(e),t.prev=4,n){t.next=14;break}return t.next=9,T(r,"1234");case 9:return c=t.sent,t.next=12,E(c);case 12:i=t.sent,a(i);case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(4),n||a({type:"FETCH_FAILURE",error:{status:"NA",statusText:"Failed to fetch resource"}});case 19:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(){return t.apply(this,arguments)}}()(),function(){n=!0}}),[e]),[c,a]}(e.endpointArr),t=Object(l.a)(n,1)[0],a=t.data,i=t.isLoading,u=t.isError,s=function(){return Object(j.jsx)("h1",{children:"Error"})},o=function(){return Object(j.jsx)(j.Fragment,{children:c.a.cloneElement(e.children,{data:a})})};return Object(j.jsx)(j.Fragment,{children:i?Object(j.jsx)("h1",{children:"Skeleton"}):u?s():o()})};var F=function(){var e=Object(u.f)().recipeId;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(k,{endpointArr:["recipes/".concat(e)],children:Object(j.jsx)(O,{})})})},y=t(11);var S=function(e){return Object(j.jsx)(y.b,{className:"recipe-list__link",to:"/form/".concat(e.recipe.recipe_id),children:Object(j.jsx)("li",{className:"recipe-list__list-item",children:e.recipe.recipe_name})})};var w=function(e){return Object(j.jsx)("main",{children:Object(j.jsx)("ul",{className:"recipe-list",children:e.data[0].map((function(e){return Object(j.jsx)(S,{recipe:e},e.recipe_id)}))})})};var L=function(){return Object(j.jsx)(k,{endpointArr:["recipes"],children:Object(j.jsx)(w,{})})};var A=function(){return Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{path:"/form/:recipeId",component:F}),Object(j.jsx)(u.a,{exact:!0,path:"/",component:L})]})};var P=function(){return Object(j.jsx)("nav",{className:"navbar",children:Object(j.jsx)("h1",{children:"Baker's Books"})})};var V=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(P,{}),Object(j.jsx)(A,{})]})},H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y.a,{children:Object(j.jsx)(V,{})})}),document.getElementById("root")),H()}},[[37,1,2]]]);
//# sourceMappingURL=main.3efeb16d.chunk.js.map