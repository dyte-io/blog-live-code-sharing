"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[2946],{2946:function(t,e,n){n.r(e),n.d(e,{dyte_join_stage:function(){return p}});var r=n(4165),i=n(5861),o=n(5671),a=n(3144),s=n(325),c=n(1654),u=n(7239),l=n(859),d=n(222),f=n(5100),p=function(){function t(e){var n=this;(0,o.Z)(this,t),(0,s.r)(this,e),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.joinState=(0,i.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.meeting.self.joinStage();case 2:n.stateUpdate.emit({activeJoinStage:!1});case 3:case"end":return t.stop()}}),t)}))),this.leaveStage=function(){n.meeting.self.leaveStage(),n.stateUpdate.emit({activeJoinStage:!1})},this.meeting=void 0,this.config=c.d,this.states=void 0,this.size=void 0,this.iconPack=u.d,this.t=(0,l.u)()}return(0,a.Z)(t,[{key:"render",value:function(){var t,e,n={meeting:this.meeting,size:this.size,states:this.states||f.s,config:this.config,iconPack:this.iconPack,t:this.t};return(0,s.h)(s.H,null,(0,s.h)("header",null,(0,s.h)("h2",null,this.t("stage.join_title"))),(0,s.h)(d.R,{element:"dyte-participant-setup",defaults:n,props:{participant:null===(t=this.meeting)||void 0===t?void 0:t.self,size:"md"},childProps:{participant:null===(e=this.meeting)||void 0===e?void 0:e.self,size:"md"},deepProps:!0}),(0,s.h)("div",{class:"summary"},this.t("stage.join_summary")),(0,s.h)("div",{class:"container"},(0,s.h)("dyte-button",{variant:"danger",onClick:this.leaveStage,title:this.t("stage.join_cancel"),iconPack:this.iconPack,t:this.t},this.t("stage.join_cancel")),(0,s.h)("dyte-button",{onClick:this.joinState,title:this.t("stage.join_confirm"),iconPack:this.iconPack,t:this.t},this.t("stage.join_confirm"))))}}]),t}();p.style=".scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{box-sizing:border-box;display:block;width:512px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding:var(--dyte-space-6, 24px);-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:var(--dyte-border-radius-md, 8px);line-height:1.25}.deny-access{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}dyte-participant-setup{display:flex;flex:1 1 0%;align-items:center;justify-content:space-around;margin-left:auto;margin-right:auto}.container{width:100%;max-width:1080px;display:flex;flex:1 1 0%;align-items:center;justify-content:space-around}.container dyte-button{margin:var(--dyte-space-3, 12px);flex-grow:1;padding:var(--dyte-space-1, 4px);width:50%}header{display:flex;align-items:center;justify-content:space-between;padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}.summary{padding:var(--dyte-space-4, 16px)}"},222:function(t,e,n){n.d(e,{R:function(){return c}});var r=n(885),i=n(2982),o=n(7762),a=n(325),s=function(t){var e=t.elements,n=t.defaults,r=t.props,i=void 0===r?{}:r,o=t.deepProps,s=void 0!==o&&o,u=t.elementProps,l=void 0===u?{}:u;return Array.isArray(e)&&0!==e.length?e.map((function(t){return(0,a.h)(c,{element:t,defaults:n,props:i,childProps:s&&i,elementProps:l})})):null},c=function(t,e){var n,c,u=t.element,l=t.defaults,d=t.childProps,f=void 0===d?{}:d,p=t.props,h=void 0===p?{}:p,v=t.onlyChildren,g=void 0!==v&&v,y=t.asHost,b=void 0!==y&&y,m=t.deepProps,k=void 0!==m&&m,x=t.elementProps,j=void 0===x?{}:x,w=l.config,P=l.size,A=l.states,Z={};if(Array.isArray(u)){var O=(0,r.Z)(u,2);c=O[0],Z=O[1]}else c=u;var z=null===(n=null===w||void 0===w?void 0:w.root)||void 0===n?void 0:n[c];null!=z&&"props"in z&&(h=Object.assign(Object.assign({},z.props),h)),h=Object.assign(Object.assign({},h),Z),c in j&&(h=Object.assign(Object.assign({},h),j[c]));var C=function(t){var e=t.element,n=t.size,r=t.states,a=void 0===r?{}:r,s=t.config,c=void 0===s?{}:s,u=[],l=null===c||void 0===c?void 0:c.root[e],d=function(t){u.push(t),"string"===typeof n&&u.push("".concat(t,".").concat(n))};if(d(e),"object"===typeof l&&!Array.isArray(l)&&null!==l){var f=l.state,p=l.states,h=e,v=[];if(Array.isArray(p)){v=p.filter((function(t){return a[t]})),v.sort();var g,y=(0,o.Z)(v);try{for(y.s();!(g=y.n()).done;){var b=g.value;d("".concat(h,".").concat(b))}}catch(w){y.e(w)}finally{y.f()}v.length>1&&d([h].concat((0,i.Z)(v)).join("."))}if("string"===typeof f){var m="".concat(e,"[").concat(f,"=").concat(a[f],"]");d(m);var k,x=(0,o.Z)(v);try{for(x.s();!(k=x.n()).done;){var j=k.value;d("".concat(m,".").concat(j))}}catch(w){x.e(w)}finally{x.f()}v.length>1&&d([m].concat((0,i.Z)(v)).join("."))}}return u}({element:c,size:P,states:A,config:w}),S=function(t){var e=t.selectors,n=t.root;if(!Array.isArray(e)||null==n)return[];for(var r=e.length-1;r>=0;r--){var i=n[e[r]];if(Array.isArray(i))return i;if(Array.isArray(null===i||void 0===i?void 0:i.children))return i.children}return[]}({selectors:C,root:w.root});if(g)return(0,a.h)(s,{elements:S,defaults:l,props:f,deepProps:k,elementProps:j});var E=function(t){var e=t.selectors,n=t.styles;if(!Array.isArray(e)||null==n)return{};var r,i={},a=(0,o.Z)(e);try{for(a.s();!(r=a.n()).done;){var s=n[r.value];null!=s&&Object.assign(i,s)}}catch(c){a.e(c)}finally{a.f()}return i}({selectors:C,styles:w.styles});if(b)return(0,a.h)(a.H,Object.assign({},l,{style:E},h),(0,a.h)(s,{elements:S,defaults:l,props:f,deepProps:k,elementProps:j}),e);if(["dyte-header","dyte-controlbar"].includes(c)&&(h.disableRender=!0),c.startsWith("dyte-"))return(0,a.h)(c,Object.assign({},l,{style:E},h),(0,a.h)(s,{elements:S,defaults:l,props:f,deepProps:k,elementProps:j}),e);var _=c.split("#"),U=(0,r.Z)(_,2),H=U[0],M=U[1];return(0,a.h)(H,{id:M,style:E},(0,a.h)(s,{elements:S,defaults:l,props:f,deepProps:k,elementProps:j}),e)}},859:function(t,e,n){n.d(e,{g:function(){return a},u:function(){return s}});var r=n(4165),i=n(5861),o=n(7239),a=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=e&&"en"!==e&&""!==e.trim()){t.next=2;break}return t.abrupt("return",o.a);case 2:return t.prev=2,t.next=5,fetch("".concat("http://localhost:5000","/").concat(e,".json"));case 5:if((n=t.sent).ok){t.next=8;break}return t.abrupt("return",o.a);case 8:return t.t0=Object,t.t1={},t.t2=o.a,t.next=13,n.json();case 13:return t.t3=t.sent,t.abrupt("return",t.t0.assign.call(t.t0,t.t1,t.t2,t.t3));case 17:return t.prev=17,t.t4=t.catch(2),t.abrupt("return",o.a);case 20:case"end":return t.stop()}}),t,null,[[2,17]])})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.a;return function(e){var n;return null!==(n=t[e])&&void 0!==n?n:e}}},5100:function(t,e,n){n.d(e,{o:function(){return d},s:function(){return l}});var r=n(7762),i=n(325),o=function(t){return!("isConnected"in t)||t.isConnected},a=function(t,e){var n;return function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];n&&clearTimeout(n),n=setTimeout((function(){n=0,t.apply(void 0,i)}),e)}}((function(t){var e,n=(0,r.Z)(t.keys());try{for(n.s();!(e=n.n()).done;){var i=e.value;t.set(i,t.get(i).filter(o))}}catch(a){n.e(a)}finally{n.f()}}),2e3),s=function(t){return"function"===typeof t?t():t},c=function(t,e){var n=t.indexOf(e);n>=0&&(t[n]=t[t.length-1],t.length--)},u=function(t,e){var n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t,e){return t!==e},n=s(t),r=new Map(Object.entries(null!==n&&void 0!==n?n:{})),i={dispose:[],get:[],set:[],reset:[]},o=function(){var e;r=new Map(Object.entries(null!==(e=s(t))&&void 0!==e?e:{})),i.reset.forEach((function(t){return t()}))},a=function(t){return i.get.forEach((function(e){return e(t)})),r.get(t)},u=function(t,n){var o=r.get(t);e(n,o,t)&&(r.set(t,n),i.set.forEach((function(e){return e(t,n,o)})))},l="undefined"===typeof Proxy?{}:new Proxy(n,{get:function(t,e){return a(e)},ownKeys:function(t){return Array.from(r.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(t,e){return r.has(e)},set:function(t,e,n){return u(e,n),!0}}),d=function(t,e){return i[t].push(e),function(){c(i[t],e)}};return{state:l,get:a,set:u,on:d,onChange:function(e,n){var r=d("set",(function(t,r){t===e&&n(r)})),i=d("reset",(function(){return n(s(t)[e])}));return function(){r(),i()}},use:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.reduce((function(t,e){return e.set&&t.push(d("set",e.set)),e.get&&t.push(d("get",e.get)),e.reset&&t.push(d("reset",e.reset)),e.dispose&&t.push(d("dispose",e.dispose)),t}),[]);return function(){return r.forEach((function(t){return t()}))}},dispose:function(){i.dispose.forEach((function(t){return t()})),o()},reset:o,forceUpdate:function(t){var e=r.get(t);i.set.forEach((function(n){return n(t,e,e)}))}}}(t,e);return n.use(function(){if("function"!==typeof i.a)return{};var t=new Map;return{dispose:function(){return t.clear()},get:function(e){var n=(0,i.a)();n&&function(t,e,n){var r=t.get(e);r?r.includes(n)||r.push(n):t.set(e,[n])}(t,e,n)},set:function(e){var n=t.get(e);n&&t.set(e,n.filter(i.f)),a(t)},reset:function(){t.forEach((function(t){return t.forEach(i.f)})),a(t)}}}()),n}({}),l=u.state,d=u.onChange}}]);
//# sourceMappingURL=2946.52311bc8.chunk.js.map