"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[8212],{8212:function(t,e,n){n.r(e),n.d(e,{dyte_overlay_modal:function(){return s}});var r=n(5671),i=n(3144),u=n(325),o=n(859),a=n(7239),c=n(5100),s=function(){function t(e){(0,r.Z)(this,t),(0,u.r)(this,e),this.stateUpdate=(0,u.c)(this,"dyteStateUpdate",7),this.meeting=void 0,this.states=void 0,this.iconPack=a.d,this.t=(0,o.u)()}return(0,i.Z)(t,[{key:"connectedCallback",value:function(){var t=this;this.states.activeOverlayModal.timeout&&setTimeout((function(){t.stateUpdate.emit({activeOverlayModal:{active:!1}}),c.s.activeOverlayModal={active:!1}}),this.states.activeOverlayModal.timeout)}},{key:"componentDidLoad",value:function(){}},{key:"disconnectedCallback",value:function(){}},{key:"render",value:function(){return(0,u.h)(u.H,null,(0,u.h)("dyte-icon",{icon:this.states.activeOverlayModal.icon,iconPack:this.iconPack,t:this.t}),(0,u.h)("h2",null,this.states.activeOverlayModal.title),(0,u.h)("p",null,this.states.activeOverlayModal.description))}}]),t}();s.style=":host{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / 0.6);position:fixed;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);z-index:50}dyte-icon{height:var(--dyte-space-20, 80px)}h2{margin:var(--dyte-space-2, 8px);font-weight:500}p{margin:var(--dyte-space-0, 0px);font-size:16px}"},859:function(t,e,n){n.d(e,{g:function(){return o},u:function(){return a}});var r=n(4165),i=n(5861),u=n(7239),o=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=e&&"en"!==e&&""!==e.trim()){t.next=2;break}return t.abrupt("return",u.a);case 2:return t.prev=2,t.next=5,fetch("".concat("http://localhost:5000","/").concat(e,".json"));case 5:if((n=t.sent).ok){t.next=8;break}return t.abrupt("return",u.a);case 8:return t.t0=Object,t.t1={},t.t2=u.a,t.next=13,n.json();case 13:return t.t3=t.sent,t.abrupt("return",t.t0.assign.call(t.t0,t.t1,t.t2,t.t3));case 17:return t.prev=17,t.t4=t.catch(2),t.abrupt("return",u.a);case 20:case"end":return t.stop()}}),t,null,[[2,17]])})));return function(e){return t.apply(this,arguments)}}(),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.a;return function(e){var n;return null!==(n=t[e])&&void 0!==n?n:e}}},5100:function(t,e,n){n.d(e,{o:function(){return l},s:function(){return f}});var r=n(7762),i=n(325),u=function(t){return!("isConnected"in t)||t.isConnected},o=function(t,e){var n;return function(){for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];n&&clearTimeout(n),n=setTimeout((function(){n=0,t.apply(void 0,i)}),e)}}((function(t){var e,n=(0,r.Z)(t.keys());try{for(n.s();!(e=n.n()).done;){var i=e.value;t.set(i,t.get(i).filter(u))}}catch(o){n.e(o)}finally{n.f()}}),2e3),a=function(t){return"function"===typeof t?t():t},c=function(t,e){var n=t.indexOf(e);n>=0&&(t[n]=t[t.length-1],t.length--)},s=function(t,e){var n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t,e){return t!==e},n=a(t),r=new Map(Object.entries(null!==n&&void 0!==n?n:{})),i={dispose:[],get:[],set:[],reset:[]},u=function(){var e;r=new Map(Object.entries(null!==(e=a(t))&&void 0!==e?e:{})),i.reset.forEach((function(t){return t()}))},o=function(t){return i.get.forEach((function(e){return e(t)})),r.get(t)},s=function(t,n){var u=r.get(t);e(n,u,t)&&(r.set(t,n),i.set.forEach((function(e){return e(t,n,u)})))},f="undefined"===typeof Proxy?{}:new Proxy(n,{get:function(t,e){return o(e)},ownKeys:function(t){return Array.from(r.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(t,e){return r.has(e)},set:function(t,e,n){return s(e,n),!0}}),l=function(t,e){return i[t].push(e),function(){c(i[t],e)}};return{state:f,get:o,set:s,on:l,onChange:function(e,n){var r=l("set",(function(t,r){t===e&&n(r)})),i=l("reset",(function(){return n(a(t)[e])}));return function(){r(),i()}},use:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.reduce((function(t,e){return e.set&&t.push(l("set",e.set)),e.get&&t.push(l("get",e.get)),e.reset&&t.push(l("reset",e.reset)),e.dispose&&t.push(l("dispose",e.dispose)),t}),[]);return function(){return r.forEach((function(t){return t()}))}},dispose:function(){i.dispose.forEach((function(t){return t()})),u()},reset:u,forceUpdate:function(t){var e=r.get(t);i.set.forEach((function(n){return n(t,e,e)}))}}}(t,e);return n.use(function(){if("function"!==typeof i.a)return{};var t=new Map;return{dispose:function(){return t.clear()},get:function(e){var n=(0,i.a)();n&&function(t,e,n){var r=t.get(e);r?r.includes(n)||r.push(n):t.set(e,[n])}(t,e,n)},set:function(e){var n=t.get(e);n&&t.set(e,n.filter(i.f)),o(t)},reset:function(){t.forEach((function(t){return t.forEach(i.f)})),o(t)}}}()),n}({}),f=s.state,l=s.onChange}}]);
//# sourceMappingURL=8212.0c5de9b3.chunk.js.map