"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[8053],{8053:function(t,n,e){e.r(n),e.d(n,{dyte_leave_button:function(){return s}});var r=e(5671),u=e(3144),i=e(325),o=e(7239),a=e(859),c=e(5100),s=function(){function t(n){var e=this;(0,r.Z)(this,t),(0,i.r)(this,n),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.leave=function(){e.stateUpdate.emit({activeLeaveConfirmation:!0}),c.s.activeLeaveConfirmation=!0},this.variant="button",this.size=void 0,this.iconPack=o.d,this.t=(0,a.u)()}return(0,u.Z)(t,[{key:"render",value:function(){var t=this.t("leave");return(0,i.h)(i.H,{label:t},(0,i.h)("dyte-controlbar-button",{size:this.size,iconPack:this.iconPack,t:this.t,class:"leave",onClick:this.leave,icon:this.iconPack.call_end,label:t,variant:this.variant}))}}]),t}();s.style=":host{display:block;font-family:var(--dyte-font-family, sans-serif)}"},859:function(t,n,e){e.d(n,{g:function(){return o},u:function(){return a}});var r=e(4165),u=e(5861),i=e(7239),o=function(){var t=(0,u.Z)((0,r.Z)().mark((function t(n){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=n&&"en"!==n&&""!==n.trim()){t.next=2;break}return t.abrupt("return",i.a);case 2:return t.prev=2,t.next=5,fetch("".concat("http://localhost:5000","/").concat(n,".json"));case 5:if((e=t.sent).ok){t.next=8;break}return t.abrupt("return",i.a);case 8:return t.t0=Object,t.t1={},t.t2=i.a,t.next=13,e.json();case 13:return t.t3=t.sent,t.abrupt("return",t.t0.assign.call(t.t0,t.t1,t.t2,t.t3));case 17:return t.prev=17,t.t4=t.catch(2),t.abrupt("return",i.a);case 20:case"end":return t.stop()}}),t,null,[[2,17]])})));return function(n){return t.apply(this,arguments)}}(),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.a;return function(n){var e;return null!==(e=t[n])&&void 0!==e?e:n}}},5100:function(t,n,e){e.d(n,{o:function(){return l},s:function(){return f}});var r=e(7762),u=e(325),i=function(t){return!("isConnected"in t)||t.isConnected},o=function(t,n){var e;return function(){for(var r=arguments.length,u=new Array(r),i=0;i<r;i++)u[i]=arguments[i];e&&clearTimeout(e),e=setTimeout((function(){e=0,t.apply(void 0,u)}),n)}}((function(t){var n,e=(0,r.Z)(t.keys());try{for(e.s();!(n=e.n()).done;){var u=n.value;t.set(u,t.get(u).filter(i))}}catch(o){e.e(o)}finally{e.f()}}),2e3),a=function(t){return"function"===typeof t?t():t},c=function(t,n){var e=t.indexOf(n);e>=0&&(t[e]=t[t.length-1],t.length--)},s=function(t,n){var e=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t,n){return t!==n},e=a(t),r=new Map(Object.entries(null!==e&&void 0!==e?e:{})),u={dispose:[],get:[],set:[],reset:[]},i=function(){var n;r=new Map(Object.entries(null!==(n=a(t))&&void 0!==n?n:{})),u.reset.forEach((function(t){return t()}))},o=function(t){return u.get.forEach((function(n){return n(t)})),r.get(t)},s=function(t,e){var i=r.get(t);n(e,i,t)&&(r.set(t,e),u.set.forEach((function(n){return n(t,e,i)})))},f="undefined"===typeof Proxy?{}:new Proxy(e,{get:function(t,n){return o(n)},ownKeys:function(t){return Array.from(r.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(t,n){return r.has(n)},set:function(t,n,e){return s(n,e),!0}}),l=function(t,n){return u[t].push(n),function(){c(u[t],n)}};return{state:f,get:o,set:s,on:l,onChange:function(n,e){var r=l("set",(function(t,r){t===n&&e(r)})),u=l("reset",(function(){return e(a(t)[n])}));return function(){r(),u()}},use:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];var r=n.reduce((function(t,n){return n.set&&t.push(l("set",n.set)),n.get&&t.push(l("get",n.get)),n.reset&&t.push(l("reset",n.reset)),n.dispose&&t.push(l("dispose",n.dispose)),t}),[]);return function(){return r.forEach((function(t){return t()}))}},dispose:function(){u.dispose.forEach((function(t){return t()})),i()},reset:i,forceUpdate:function(t){var n=r.get(t);u.set.forEach((function(e){return e(t,n,n)}))}}}(t,n);return e.use(function(){if("function"!==typeof u.a)return{};var t=new Map;return{dispose:function(){return t.clear()},get:function(n){var e=(0,u.a)();e&&function(t,n,e){var r=t.get(n);r?r.includes(e)||r.push(e):t.set(n,[e])}(t,n,e)},set:function(n){var e=t.get(n);e&&t.set(n,e.filter(u.f)),o(t)},reset:function(){t.forEach((function(t){return t.forEach(u.f)})),o(t)}}}()),e}({}),f=s.state,l=s.onChange}}]);
//# sourceMappingURL=8053.c7f52d15.chunk.js.map