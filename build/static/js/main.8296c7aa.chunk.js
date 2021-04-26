(this["webpackJsonpbakers-math"]=this["webpackJsonpbakers-math"]||[]).push([[0],{29:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),a=t(23),i=t.n(a),s=(t(29),t(3)),u=t(21),o=t(12),l=t(2),d=t(7),j=t(0);var p=function(e){return Object(j.jsxs)("header",{className:"recipe-header",children:[Object(j.jsxs)("div",{className:"recipe-container",children:[Object(j.jsx)("legend",{className:"recipe-container__legend",children:"Name"}),Object(j.jsx)("input",{className:"recipe__input_heading",type:"text",placeholder:"Recipe Name",value:e.recipe.recipe_name,name:"recipe_name",onChange:function(n){return e.handleChangeRecipe(n)}})]}),Object(j.jsxs)("div",{className:"recipe-container",children:[Object(j.jsx)("legend",{className:"recipe-container__legend",children:"Total Flour (g)"}),Object(j.jsx)("input",{className:"recipe__input_heading",type:"number",placeholder:"0",value:e.recipe.flour_total,name:"flour_total",onChange:function(n){return e.handleChangeRecipe(n)}})]})]})};var b=function(e){return Object(j.jsx)("div",{className:"recipe-ingredient-name-container",children:Object(j.jsx)("input",{className:"recipe-ingredient__input recipe-ingredient__input_name",type:"text",placeholder:"Ingredient",name:e.inputName,value:e.ingredientTextValue,onChange:function(n){return e.handleChangeIngredient(n)}})})};var f=function(e){return Object(j.jsxs)("div",{className:"recipe__input-percent-container",children:[Object(j.jsx)("input",{className:"recipe-ingredient__input_percent",type:"number",name:e.inputName,value:e.ingredientPercentValue,onChange:function(n){return e.handleChangeIngredient(n)}}),Object(j.jsx)("p",{className:"recipe__input_percent-text",children:"%"})]})};var h=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"recipe-ingredient-container",children:[Object(j.jsx)(b,{inputName:"name-".concat(e.ingredient_id),ingredientTextValue:e.ingredientTextValue,handleChangeIngredient:function(n){return e.handleChangeIngredient(n)}}),Object(j.jsxs)("div",{className:"recipe-ingredient-percent-wt-btn-container",children:[Object(j.jsx)(f,{inputName:"percent-".concat(e.ingredient_id),ingredientPercentValue:e.ingredientPercentValue,handleChangeIngredient:function(n){return e.handleChangeIngredient(n)}}),Object(j.jsx)("div",{className:"recipe-ingredient-container__calc-weight-div",children:function(){var n=e.flourTotal*(e.ingredientPercentValue/100);return n=isNaN(n)||!isFinite(n)?"":n.toFixed(1),Object(j.jsxs)("p",{className:"recipe-ingredient-container__calc-weight-value",children:[n," g"]})}()}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(n){return e.handleSubtractClick(n)},className:"recipe__button_delete",children:"-"})})]})]})})};var O=function(e){var n;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("section",{className:"recipe-section",children:[Object(j.jsxs)("div",{className:"recipe-banner",children:[Object(j.jsx)("p",{className:"recipe-banner__text",children:e.sectionName}),Object(j.jsx)("button",{className:"recipe-button_add",onClick:function(n){return e.handleClickAddIngredient(n,e.ingredientType)},children:"+"})]}),(n=e.ingredients,n.map((function(n,t){var r=n.id;return Object(j.jsx)(h,{ingredient_id:r,flourTotal:e.recipe.flour_total,ingredientCount:t,ingredientTextValue:n.name,ingredientPercentValue:n.percent,handleChangeIngredient:function(n){return e.handleChangeIngredient(n,e.ingredientType)},handleSubtractClick:function(n,t){return e.handleSubtractClick(n,t,e.ingredientType)}},r)})))]})})},g=t(10),m=t.n(g),v=t(13),x={API_ENDPOINT:"http://localhost:9000/api",HEADERS:{"Content-Type":"application/json",Authorization:"Bearer ".concat("1234")}};var _=function(e){var n=function(e,n,t){var c,a=Object(r.useState)({formData:null,isSaving:!1,saveSuccessful:!1,saveError:""}),i=Object(d.a)(a,2),s=i[0],u=i[1],o="".concat(x.API_ENDPOINT,"/").concat(n);return"new"===t?c="POST":(c="PATCH",o="".concat(o,"/").concat(t)),[s,Object(r.useCallback)(Object(v.a)(m.a.mark((function n(){var t;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u((function(e){return Object(l.a)(Object(l.a)({},e),{},{isSaving:!0})})),n.prev=1,console.log(e,c),n.next=6,fetch(o,{method:c,body:JSON.stringify(e),headers:{Authorization:"Bearer ".concat("1234"),"Content-Type":"application/json"}});case 6:(t=n.sent).ok?u((function(e){return Object(l.a)(Object(l.a)({},e),{},{isSaving:!1,saveSuccessful:!0,saveError:""})})):t.ok||u((function(e){return Object(l.a)(Object(l.a)({},e),{},{isSaving:!1,saveSuccessful:!1,saveError:"Failed to save."})})),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),u((function(e){return Object(l.a)(Object(l.a)({},e),{},{isSaving:!1,saveSuccessful:!1,saveError:"Failed to save."})}));case 13:case"end":return n.stop()}}),n,null,[[1,10]])}))),[e,c,o])]}(e.formData,e.endpointSuffix,e.rowId),t=Object(d.a)(n,1)[0],c=function(){t()};return Object(j.jsx)("section",{className:"save-button-section",children:Object(j.jsx)("button",{id:"button-save",className:"button save-button-section__button",type:"submit",value:"Save",onClick:function(e){e.preventDefault(),c()},children:"Save"})})};var N=function(e){var n=Object(r.useState)({recipe_name:"",flour_total:""}),t=Object(d.a)(n,2),c=t[0],a=t[1],i=Object(r.useState)([{name:"",percent:"",id:""}]),b=Object(d.a)(i,2),f=b[0],h=b[1],g=Object(r.useState)([{name:"",percent:"",id:""}]),m=Object(d.a)(g,2),v=m[0],x=m[1],N=Object(s.f)().recipeId;Object(r.useEffect)((function(){if("new"!==N){var n=e.data[0],t=n.flours,r=n.ingredients;h(t),x(r),a({recipe_name:n.recipe_name,flour_total:n.flour_total})}else h([{name:"",percent:"",id:Date.now()}]),x([{name:"",percent:"",id:Date.now()}]),a({recipe_name:"",flour_total:""})}),[e.data,N]);var C=function(e,n){var t=e.target.name.split("-"),r=t[0],c=t[1];"flour"===n?T(e,r,c):"ingredient"===n&&S(e,r,c)},S=function(e,n,t){x(v.map((function(r){return r.id===t?Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},n,e.target.value)):r})))},T=function(e,n,t){h(f.map((function(r){return r.id===t?Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},n,e.target.value)):r})))},E=function(e,n,t){e.preventDefault(),"flour"===t?h(f.filter((function(e){return e.id!==n}))):"ingredient"===t&&x(v.filter((function(e){return e.id!==n})))},I=function(e,n){e.preventDefault(),"flour"===n?h([].concat(Object(u.a)(f),[{name:"",percent:"",id:Date.now()}])):"ingredient"===n&&x([].concat(Object(u.a)(v),[{name:"",percent:"",id:Date.now()}]))};return Object(j.jsxs)("form",{children:[Object(j.jsx)(p,{recipe:c,handleChangeRecipe:function(e){return function(e){a(Object(l.a)(Object(l.a)({},c),{},Object(o.a)({},e.target.name,e.target.value)))}(e)}}),Object(j.jsx)("hr",{}),Object(j.jsx)(O,{sectionName:"Flour",recipe:c,ingredients:f,ingredientType:"flour",handleClickAddIngredient:function(e,n){return I(e,n)},handleChangeIngredient:function(e,n){return C(e,n)},handleSubtractClick:function(e,n,t){return E(e,n,t)}}),Object(j.jsx)(O,{sectionName:"Ingredients",recipe:c,ingredients:v,ingredientType:"ingredient",handleClickAddIngredient:function(e,n){return I(e,n)},handleChangeIngredient:function(e,n){return C(e,n)},handleSubtractClick:function(e,n,t){return E(e,n,t)}}),Object(j.jsx)(_,{formData:{recipe_name:c.recipe_name,flour_total:c.flour_total,flours:f,ingredients:v},formName:"recipe",endpointSuffix:"recipes",redirectSuffix:"/",rowId:N})]})},C=function(e,n){switch(n.type){case"FETCH_INIT":return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0,isLoaded:!1,isError:!1});case"FETCH_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,isLoaded:!0,isError:!1,data:n.payload});case"FETCH_FAILURE":return Object(l.a)(Object(l.a)({},e),{},{isLoading:!1,isLoaded:!1,isError:!0,error:n.error});default:throw new Error}},S=function(e){return e.map((function(e){return"".concat(x.API_ENDPOINT,"/").concat(e)}))},T=function(){var e=Object(v.a)(m.a.mark((function e(n,t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(n.map((function(e){return fetch(e,{method:"GET",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}})})));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),E=function(){var e=Object(v.a)(m.a.mark((function e(n){var t,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=I(n)).status){e.next=5;break}return e.abrupt("return",{type:"FETCH_FAILURE",error:t});case 5:return e.next=7,Promise.all(n.map((function(e){return e.json()})));case 7:return r=e.sent,e.abrupt("return",{type:"FETCH_SUCCESS",payload:r});case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),I=function(e){var n={};return e.forEach((function(e){e.ok||(n={status:e.status,statusText:e.statusText})})),n};var k=function(e){var n=function(e){var n=Object(r.useReducer)(C,{isLoading:!0,isError:!1,error:{},data:[]}),t=Object(d.a)(n,2),c=t[0],a=t[1];return Object(r.useEffect)((function(){var n=!1;return function(){var t=Object(v.a)(m.a.mark((function t(){var r,c,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.length){t.next=2;break}return t.abrupt("return",a({type:"FETCH_SUCCESS",payload:{}}));case 2:if(a({type:"FETCH_INIT"}),r=S(e),t.prev=4,n){t.next=14;break}return t.next=9,T(r,"1234");case 9:return c=t.sent,t.next=12,E(c);case 12:i=t.sent,a(i);case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(4),n||a({type:"FETCH_FAILURE",error:{status:"NA",statusText:"Failed to fetch resource"}});case 19:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(){return t.apply(this,arguments)}}()(),function(){n=!0}}),[e]),[c,a]}(e.endpointArr),t=Object(d.a)(n,1)[0],a=t.data,i=t.isLoading,s=t.isError,u=t.error,o=function(){return Object(j.jsxs)("h1",{children:[u.status," ",u.statusText]})},l=function(){return Object(j.jsx)(j.Fragment,{children:c.a.cloneElement(e.children,{data:a})})};return Object(j.jsx)(j.Fragment,{children:i?Object(j.jsx)("h1",{children:"Loading..."}):s?o():l()})};var y=function(){var e=Object(s.f)().recipeId,n="new"===e?[]:["recipes/".concat(e)];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(k,{endpointArr:n,children:Object(j.jsx)(N,{})})})},F=t(9);var w=function(e){return Object(j.jsx)(F.b,{className:"recipe-list__link",to:"/form/recipe/".concat(e.recipe.recipe_id),children:Object(j.jsx)("li",{className:"recipe-list__list-item",children:e.recipe.recipe_name})})};var A=function(e){return Object(j.jsx)("main",{children:Object(j.jsx)("ul",{className:"recipe-list",children:e.data[0].map((function(e){return Object(j.jsx)(w,{recipe:e},e.recipe_id)}))})})};var P=function(){return Object(j.jsx)(k,{endpointArr:["recipes"],children:Object(j.jsx)(A,{})})};var D=function(){return Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{path:"/form/recipe/:recipeId",component:y}),Object(j.jsx)(s.a,{exact:!0,path:"/",component:P})]})};var L=function(){return Object(j.jsx)("nav",{className:"navbar",children:Object(j.jsxs)("div",{className:"navbar__content",children:[Object(j.jsx)(F.b,{className:"navbar__link",to:"/",children:"Baker's Books"}),Object(j.jsx)(F.b,{className:"navbar__link",to:"/form/recipe/new",children:"New"})]})})};var H=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(L,{}),Object(j.jsx)(D,{})]})},R=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(F.a,{children:Object(j.jsx)(H,{})})}),document.getElementById("root")),R()}},[[37,1,2]]]);
//# sourceMappingURL=main.8296c7aa.chunk.js.map