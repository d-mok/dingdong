!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);o(1),o(2),o(3)},function(e,t){globalThis.sweet={async warn(e,t){const o=await Swal.fire({title:e,text:t,icon:"warning"});if(!o.isConfirmed)throw"Sweet Confirm Dismissed! Stop Execution";return o.isConfirmed},async ask(e,t,o="",n="text"){const r=await Swal.fire({title:e,text:t,input:n,icon:"question",inputValue:o,inputValidator:e=>e?null:"Enter Something!"});if(!("value"in r))throw"Sweet Input Dismissed! Stop Execution";return r.value},error(e,t){Swal.fire({title:e,text:t,icon:"error"})},cheer(e,t){Swal.fire({title:e,text:t,icon:"success"})},toast(e,t,o="success"){Swal.fire({title:e,text:t,icon:o,toast:!0,position:"bottom",timer:4e3,timerProgressBar:!0,showConfirmButton:!1,onOpen:e=>{e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}})},show(e,t,o){Swal.fire({title:e,text:t,html:'<textarea id="swal-input2" style="height:auto!important" class="swal2-input" rows="15">'+o+"</textarea>",width:"60%",icon:"info"})}}},function(e,t){globalThis.backend={root_url:"development"==NODE_ENV?"https://localhost:5000":window.location.origin,login(){const e=window.location.href;window.location.replace(backend.root_url+"/login?redirect="+e)},status:async()=>await backend.get("status"),async logout(){await backend.get("logout"),backend.login()},checkLogin:async()=>(await backend.get("status")).login,showError(e,t){Swal.fire({title:e,text:t,icon:"error",footer:"See F12 log for detail."})},ajax:async(e,t="get",o={},n={})=>await axios({method:t,withCredentials:!0,url:backend.root_url+"/"+e,params:o,data:n}).then(e=>e.data).catch(e=>{if(e.response){const t=e.response.data,o=e.response.status;if(401===o)return console.log("[status 401] Not Login Yet. Redirect Login Now."),void backend.login();if(403===o)return console.log("[status 403] No Role Permission. Redirect Login Now."),void backend.login();throw console.log("[Client Error]",JSON.stringify(t,null,2)),backend.showError(t.msg,t.detail),"ClientError"}throw console.log("[Server Error] No Response From Server!"),backend.showError("Server Error!","No Response From Server!"),"ServerError"}),get:(e,t={})=>backend.ajax(e,"get",t),post:(e,t={},o={})=>backend.ajax(e,"post",t,o),put:(e,t={},o={})=>backend.ajax(e,"put",t,o),del:(e,t={},o={})=>backend.ajax(e,"delete",t,o)},backend.checkLogin().then(e=>{console.log("Initial Check of Login Check: "+e),e||backend.login()})},function(e,t){function o(e){return e.keys().map(t=>{let o=e(t);o=o.default||o;return{componentName:function(e){return e=e.split("/").pop().replace(/\.\w+$/,""),_.upperFirst(_.camelCase(e))}(t),component:o}})}globalThis.registerVueComponents=function(e,t){o(t).forEach(t=>{e.component(t.componentName,t.component)})},globalThis.registerVueRoutes=function(e){return o(e).map(e=>({path:"/"+e.componentName.toLowerCase(),name:e.componentName.toLowerCase(),component:e.component}))}}]);