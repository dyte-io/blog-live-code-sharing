"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[3642],{3642:function(t,r,e){e.r(r),e.d(r,{dyte_text_field:function(){return s}});var n=e(5671),o=e(3144),i=e(325),c=e(5100),u=e(7239),a=e(859),s=function(){function t(r){(0,n.Z)(this,t),(0,i.r)(this,r),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.type="text",this.placeholder="",this.disabled=!1,this.iconPack=u.d,this.t=(0,a.u)()}return(0,o.Z)(t,[{key:"connectedCallback",value:function(){this.stateUpdate.emit({abc:!1}),c.s.abc=!1}},{key:"value",get:function(){return this.input.value}},{key:"render",value:function(){var t=this;return(0,i.h)(i.H,null,(0,i.h)("input",{ref:function(r){return t.input=r},type:this.type,placeholder:this.placeholder,disabled:this.disabled}))}}]),t}();s.style="input{display:block;height:var(--dyte-space-10, 40px);padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);font-family:var(--dyte-font-family, sans-serif);font-size:14px;border-width:var(--dyte-border-width-md, 2px);border-style:solid;border-color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}input::-moz-placeholder{color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}input::placeholder{color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}input:focus{color:rgb(var(--dyte-colors-text-1000, 255 255 255))}input{border-radius:var(--dyte-border-radius-sm, 4px);outline:2px solid transparent;outline-offset:2px;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}input:focus{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-border-opacity))}input:disabled{cursor:not-allowed}"},859:function(t,r,e){e.d(r,{g:function(){return c},u:function(){return u}});var n=e(4165),o=e(5861),i=e(7239),c=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=r&&"en"!==r&&""!==r.trim()){t.next=2;break}return t.abrupt("return",i.a);case 2:return t.prev=2,t.next=5,fetch("".concat("http://localhost:5000","/").concat(r,".json"));case 5:if((e=t.sent).ok){t.next=8;break}return t.abrupt("return",i.a);case 8:return t.t0=Object,t.t1={},t.t2=i.a,t.next=13,e.json();case 13:return t.t3=t.sent,t.abrupt("return",t.t0.assign.call(t.t0,t.t1,t.t2,t.t3));case 17:return t.prev=17,t.t4=t.catch(2),t.abrupt("return",i.a);case 20:case"end":return t.stop()}}),t,null,[[2,17]])})));return function(r){return t.apply(this,arguments)}}(),u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.a;return function(r){var e;return null!==(e=t[r])&&void 0!==e?e:r}}},5100:function(t,r,e){e.d(r,{o:function(){return l},s:function(){return f}});var n=e(7762),o=e(325),i=function(t){return!("isConnected"in t)||t.isConnected},c=function(t,r){var e;return function(){for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];e&&clearTimeout(e),e=setTimeout((function(){e=0,t.apply(void 0,o)}),r)}}((function(t){var r,e=(0,n.Z)(t.keys());try{for(e.s();!(r=e.n()).done;){var o=r.value;t.set(o,t.get(o).filter(i))}}catch(c){e.e(c)}finally{e.f()}}),2e3),u=function(t){return"function"===typeof t?t():t},a=function(t,r){var e=t.indexOf(r);e>=0&&(t[e]=t[t.length-1],t.length--)},s=function(t,r){var e=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t,r){return t!==r},e=u(t),n=new Map(Object.entries(null!==e&&void 0!==e?e:{})),o={dispose:[],get:[],set:[],reset:[]},i=function(){var r;n=new Map(Object.entries(null!==(r=u(t))&&void 0!==r?r:{})),o.reset.forEach((function(t){return t()}))},c=function(t){return o.get.forEach((function(r){return r(t)})),n.get(t)},s=function(t,e){var i=n.get(t);r(e,i,t)&&(n.set(t,e),o.set.forEach((function(r){return r(t,e,i)})))},f="undefined"===typeof Proxy?{}:new Proxy(e,{get:function(t,r){return c(r)},ownKeys:function(t){return Array.from(n.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(t,r){return n.has(r)},set:function(t,r,e){return s(r,e),!0}}),l=function(t,r){return o[t].push(r),function(){a(o[t],r)}};return{state:f,get:c,set:s,on:l,onChange:function(r,e){var n=l("set",(function(t,n){t===r&&e(n)})),o=l("reset",(function(){return e(u(t)[r])}));return function(){n(),o()}},use:function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];var n=r.reduce((function(t,r){return r.set&&t.push(l("set",r.set)),r.get&&t.push(l("get",r.get)),r.reset&&t.push(l("reset",r.reset)),r.dispose&&t.push(l("dispose",r.dispose)),t}),[]);return function(){return n.forEach((function(t){return t()}))}},dispose:function(){o.dispose.forEach((function(t){return t()})),i()},reset:i,forceUpdate:function(t){var r=n.get(t);o.set.forEach((function(e){return e(t,r,r)}))}}}(t,r);return e.use(function(){if("function"!==typeof o.a)return{};var t=new Map;return{dispose:function(){return t.clear()},get:function(r){var e=(0,o.a)();e&&function(t,r,e){var n=t.get(r);n?n.includes(e)||n.push(e):t.set(r,[e])}(t,r,e)},set:function(r){var e=t.get(r);e&&t.set(r,e.filter(o.f)),c(t)},reset:function(){t.forEach((function(t){return t.forEach(o.f)})),c(t)}}}()),e}({}),f=s.state,l=s.onChange}}]);
//# sourceMappingURL=3642.6e240fe9.chunk.js.map