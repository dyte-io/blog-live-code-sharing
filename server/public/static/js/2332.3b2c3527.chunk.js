"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[2332],{2332:function(t,n,e){e.r(n),e.d(n,{dyte_plugins_toggle:function(){return c}});var i=e(5671),r=e(3144),s=e(325),u=e(7239),o=e(859),a=e(5100),c=function(){function t(n){(0,i.Z)(this,t),(0,s.r)(this,n),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.variant="button",this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=u.d,this.t=(0,o.u)(),this.pluginsActive=!1}return(0,r.Z)(t,[{key:"connectedCallback",value:function(){var t=this;this.statesChanged(this.states),(0,a.o)("sidebar",(function(){return t.statesChanged()}))}},{key:"statesChanged",value:function(t){var n=t||a.s;null!=n&&(this.pluginsActive=!0===n.activeSidebar&&"plugins"===n.sidebar)}},{key:"togglePlugins",value:function(){var t=this.states||a.s;this.pluginsActive=!((null===t||void 0===t?void 0:t.activeSidebar)&&"plugins"===(null===t||void 0===t?void 0:t.sidebar)),this.stateUpdate.emit({activeSidebar:this.pluginsActive,sidebar:this.pluginsActive?"plugins":"none",activeMoreMenu:!1}),a.s.activeSidebar=this.pluginsActive,a.s.sidebar=this.pluginsActive?"plugins":"none",a.s.activeMoreMenu=!1}},{key:"render",value:function(){var t,n,e,i,r,u=this;if(!this.meeting||this.meeting.plugins){var o=this.t("plugins"),a=null===(t=this.meeting)||void 0===t?void 0:t.self.config;if((!a||(null===(e=null===(n=a.controlBar)||void 0===n?void 0:n.elements)||void 0===e?void 0:e.plugins))&&((null===(i=this.meeting)||void 0===i?void 0:i.self.permissions.plugins.canClose)||(null===(r=this.meeting)||void 0===r?void 0:r.self.permissions.plugins.canStart)))return(0,s.h)(s.H,{title:o},(0,s.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,class:{active:this.pluginsActive},onClick:function(){return u.togglePlugins()},icon:this.iconPack.rocket,label:o,variant:this.variant}))}}}],[{key:"watchers",get:function(){return{states:["statesChanged"]}}}]),t}();c.style=":host{display:block;font-family:var(--dyte-font-family, sans-serif)}"},859:function(t,n,e){e.d(n,{g:function(){return u},u:function(){return o}});var i=e(4165),r=e(5861),s=e(7239),u=function(){var t=(0,r.Z)((0,i.Z)().mark((function t(n){var e;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=n&&"en"!==n&&""!==n.trim()){t.next=2;break}return t.abrupt("return",s.a);case 2:return t.prev=2,t.next=5,fetch("".concat("http://localhost:5000","/").concat(n,".json"));case 5:if((e=t.sent).ok){t.next=8;break}return t.abrupt("return",s.a);case 8:return t.t0=Object,t.t1={},t.t2=s.a,t.next=13,e.json();case 13:return t.t3=t.sent,t.abrupt("return",t.t0.assign.call(t.t0,t.t1,t.t2,t.t3));case 17:return t.prev=17,t.t4=t.catch(2),t.abrupt("return",s.a);case 20:case"end":return t.stop()}}),t,null,[[2,17]])})));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.a;return function(n){var e;return null!==(e=t[n])&&void 0!==e?e:n}}},5100:function(t,n,e){e.d(n,{o:function(){return l},s:function(){return f}});var i=e(7762),r=e(325),s=function(t){return!("isConnected"in t)||t.isConnected},u=function(t,n){var e;return function(){for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];e&&clearTimeout(e),e=setTimeout((function(){e=0,t.apply(void 0,r)}),n)}}((function(t){var n,e=(0,i.Z)(t.keys());try{for(e.s();!(n=e.n()).done;){var r=n.value;t.set(r,t.get(r).filter(s))}}catch(u){e.e(u)}finally{e.f()}}),2e3),o=function(t){return"function"===typeof t?t():t},a=function(t,n){var e=t.indexOf(n);e>=0&&(t[e]=t[t.length-1],t.length--)},c=function(t,n){var e=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t,n){return t!==n},e=o(t),i=new Map(Object.entries(null!==e&&void 0!==e?e:{})),r={dispose:[],get:[],set:[],reset:[]},s=function(){var n;i=new Map(Object.entries(null!==(n=o(t))&&void 0!==n?n:{})),r.reset.forEach((function(t){return t()}))},u=function(t){return r.get.forEach((function(n){return n(t)})),i.get(t)},c=function(t,e){var s=i.get(t);n(e,s,t)&&(i.set(t,e),r.set.forEach((function(n){return n(t,e,s)})))},f="undefined"===typeof Proxy?{}:new Proxy(e,{get:function(t,n){return u(n)},ownKeys:function(t){return Array.from(i.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(t,n){return i.has(n)},set:function(t,n,e){return c(n,e),!0}}),l=function(t,n){return r[t].push(n),function(){a(r[t],n)}};return{state:f,get:u,set:c,on:l,onChange:function(n,e){var i=l("set",(function(t,i){t===n&&e(i)})),r=l("reset",(function(){return e(o(t)[n])}));return function(){i(),r()}},use:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];var i=n.reduce((function(t,n){return n.set&&t.push(l("set",n.set)),n.get&&t.push(l("get",n.get)),n.reset&&t.push(l("reset",n.reset)),n.dispose&&t.push(l("dispose",n.dispose)),t}),[]);return function(){return i.forEach((function(t){return t()}))}},dispose:function(){r.dispose.forEach((function(t){return t()})),s()},reset:s,forceUpdate:function(t){var n=i.get(t);r.set.forEach((function(e){return e(t,n,n)}))}}}(t,n);return e.use(function(){if("function"!==typeof r.a)return{};var t=new Map;return{dispose:function(){return t.clear()},get:function(n){var e=(0,r.a)();e&&function(t,n,e){var i=t.get(n);i?i.includes(e)||i.push(e):t.set(n,[e])}(t,n,e)},set:function(n){var e=t.get(n);e&&t.set(n,e.filter(r.f)),u(t)},reset:function(){t.forEach((function(t){return t.forEach(r.f)})),u(t)}}}()),e}({}),f=c.state,l=c.onChange}}]);
//# sourceMappingURL=2332.3b2c3527.chunk.js.map