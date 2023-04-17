"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[5677],{5677:function(t,e,n){n.r(e),n.d(e,{dyte_broadcast_message_modal:function(){return u}});var r=n(5671),o=n(3144),a=n(325),s=n(7239),i=n(5100),c=n(859),u=function(){function t(e){(0,r.Z)(this,t),(0,a.r)(this,e),this.stateUpdate=(0,a.c)(this,"dyteStateUpdate",7),this.meeting=void 0,this.states=void 0,this.iconPack=s.d,this.t=(0,c.u)(),this.messagePayload={to:"Everyone",message:""},this.successMessage=!1}return(0,o.Z)(t,[{key:"close",value:function(){var t;null===(t=this.stateUpdate)||void 0===t||t.emit({activeBroadcastMessageModal:!1}),i.s.activeBroadcastMessageModal=!1}},{key:"sendMessage",value:function(){var t=this;this.successMessage=!0,setTimeout((function(){t.close()}),2e3)}},{key:"render",value:function(){var t=this;return(0,a.h)(a.H,null,(0,a.h)("div",{class:"content-col"},(0,a.h)("h2",null,"Broadcast message to"),(0,a.h)("select",{onChange:function(e){t.messagePayload=Object.assign(Object.assign({},t.messagePayload),{to:e.target.value})}},(0,a.h)("option",null,"Everyone"),(0,a.h)("option",null,"List of rooms")),(0,a.h)("textarea",{placeholder:"Type message here...",onInput:function(e){t.messagePayload=Object.assign(Object.assign({},t.messagePayload),{message:e.target.value})}}),this.successMessage?(0,a.h)("p",null,"Message sent to ",this.messagePayload.to,(0,a.h)("dyte-icon",{icon:this.iconPack.checkmark,iconPack:this.iconPack,t:this.t})):(0,a.h)("div",{class:"content-row"},(0,a.h)("dyte-button",{onClick:function(){return t.close()},variant:"secondary",iconPack:this.iconPack,t:this.t},"Cancel"),"\u2002",(0,a.h)("dyte-button",{variant:"primary",onClick:function(){return t.sendMessage()},iconPack:this.iconPack,t:this.t},"Send"))))}}]),t}();u.style=":host{position:relative;display:flex;flex-direction:column;overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px);padding:var(--dyte-space-4, 16px);width:100%;font-family:var(--dyte-font-family, sans-serif);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));width:400px;max-width:80%}.content-col{display:flex;width:100%;flex-direction:column}h2{margin:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-2, 8px)}.content-row{display:flex;width:100%;flex-direction:row}.content-row dyte-button{margin-top:var(--dyte-space-4, 16px);width:100%}textarea{margin-top:var(--dyte-space-3, 12px);resize:none;border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;outline:2px solid transparent;outline-offset:2px;height:var(--dyte-space-16, 64px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));padding:var(--dyte-space-2, 8px);color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76));font-family:var(--dyte-font-family, sans-serif)}textarea::-moz-placeholder{color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}textarea::placeholder{color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}select{border-radius:var(--dyte-border-radius-sm, 4px);border-width:var(--dyte-border-width-none, 0);border-style:none;padding-top:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-3, 12px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);outline:2px solid transparent;outline-offset:2px;border-right-width:var(--dyte-border-width-md, 2px);border-style:solid;border-color:transparent;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}p{margin:var(--dyte-space-0, 0px);margin-top:var(--dyte-space-2, 8px);width:100%;text-align:center;font-size:14px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity));display:flex;flex-direction:row;align-items:center;justify-content:center}p dyte-icon{margin-left:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px)}"},859:function(t,e,n){n.d(e,{g:function(){return s},u:function(){return i}});var r=n(4165),o=n(5861),a=n(7239),s=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=e&&"en"!==e&&""!==e.trim()){t.next=2;break}return t.abrupt("return",a.a);case 2:return t.prev=2,t.next=5,fetch("".concat("http://localhost:5000","/").concat(e,".json"));case 5:if((n=t.sent).ok){t.next=8;break}return t.abrupt("return",a.a);case 8:return t.t0=Object,t.t1={},t.t2=a.a,t.next=13,n.json();case 13:return t.t3=t.sent,t.abrupt("return",t.t0.assign.call(t.t0,t.t1,t.t2,t.t3));case 17:return t.prev=17,t.t4=t.catch(2),t.abrupt("return",a.a);case 20:case"end":return t.stop()}}),t,null,[[2,17]])})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.a;return function(e){var n;return null!==(n=t[e])&&void 0!==n?n:e}}},5100:function(t,e,n){n.d(e,{o:function(){return l},s:function(){return d}});var r=n(7762),o=n(325),a=function(t){return!("isConnected"in t)||t.isConnected},s=function(t,e){var n;return function(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];n&&clearTimeout(n),n=setTimeout((function(){n=0,t.apply(void 0,o)}),e)}}((function(t){var e,n=(0,r.Z)(t.keys());try{for(n.s();!(e=n.n()).done;){var o=e.value;t.set(o,t.get(o).filter(a))}}catch(s){n.e(s)}finally{n.f()}}),2e3),i=function(t){return"function"===typeof t?t():t},c=function(t,e){var n=t.indexOf(e);n>=0&&(t[n]=t[t.length-1],t.length--)},u=function(t,e){var n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t,e){return t!==e},n=i(t),r=new Map(Object.entries(null!==n&&void 0!==n?n:{})),o={dispose:[],get:[],set:[],reset:[]},a=function(){var e;r=new Map(Object.entries(null!==(e=i(t))&&void 0!==e?e:{})),o.reset.forEach((function(t){return t()}))},s=function(t){return o.get.forEach((function(e){return e(t)})),r.get(t)},u=function(t,n){var a=r.get(t);e(n,a,t)&&(r.set(t,n),o.set.forEach((function(e){return e(t,n,a)})))},d="undefined"===typeof Proxy?{}:new Proxy(n,{get:function(t,e){return s(e)},ownKeys:function(t){return Array.from(r.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(t,e){return r.has(e)},set:function(t,e,n){return u(e,n),!0}}),l=function(t,e){return o[t].push(e),function(){c(o[t],e)}};return{state:d,get:s,set:u,on:l,onChange:function(e,n){var r=l("set",(function(t,r){t===e&&n(r)})),o=l("reset",(function(){return n(i(t)[e])}));return function(){r(),o()}},use:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.reduce((function(t,e){return e.set&&t.push(l("set",e.set)),e.get&&t.push(l("get",e.get)),e.reset&&t.push(l("reset",e.reset)),e.dispose&&t.push(l("dispose",e.dispose)),t}),[]);return function(){return r.forEach((function(t){return t()}))}},dispose:function(){o.dispose.forEach((function(t){return t()})),a()},reset:a,forceUpdate:function(t){var e=r.get(t);o.set.forEach((function(n){return n(t,e,e)}))}}}(t,e);return n.use(function(){if("function"!==typeof o.a)return{};var t=new Map;return{dispose:function(){return t.clear()},get:function(e){var n=(0,o.a)();n&&function(t,e,n){var r=t.get(e);r?r.includes(n)||r.push(n):t.set(e,[n])}(t,e,n)},set:function(e){var n=t.get(e);n&&t.set(e,n.filter(o.f)),s(t)},reset:function(){t.forEach((function(t){return t.forEach(o.f)})),s(t)}}}()),n}({}),d=u.state,l=u.onChange}}]);
//# sourceMappingURL=5677.a5a100e2.chunk.js.map