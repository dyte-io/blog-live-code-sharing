"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[7770],{7770:function(t,e,r){r.r(e),r.d(e,{dyte_spotlight_grid:function(){return u}});var n=r(5671),i=r(3144),s=r(325),a=r(1654),o=r(7239),c=r(859),l=r(222),u=function(){function t(e){(0,n.Z)(this,t),(0,s.r)(this,e),this.layout="row",this.participants=[],this.pinnedParticipants=[],this.aspectRatio="16:9",this.gap=8,this.size=void 0,this.meeting=void 0,this.states=void 0,this.config=a.d,this.iconPack=o.d,this.t=(0,c.u)()}return(0,i.Z)(t,[{key:"render",value:function(){var t=this,e={meeting:this.meeting,config:this.config,states:this.states,size:this.size,iconPack:this.iconPack,t:this.t},r=this.participants.filter((function(e){return t.pinnedParticipants.some((function(t){return t.id!=e.id}))}));return(0,s.h)(s.H,null,(0,s.h)("main",{part:"main"},(0,s.h)(l.R,{element:"dyte-simple-grid",defaults:e,props:{part:"main-grid",participants:this.pinnedParticipants,aspectRatio:this.aspectRatio,gap:this.gap,size:this.size}})),r.length>0&&(0,s.h)("aside",{part:"aside"},(0,s.h)(l.R,{element:"dyte-simple-grid",defaults:e,props:{part:"aside-grid",participants:r,aspectRatio:this.aspectRatio,gap:this.gap,size:this.size}})))}},{key:"host",get:function(){return(0,s.g)(this)}}]),t}();u.style=":host{display:flex;height:100%;width:100%}main{flex:1 1 0%}aside{width:50%}:host([size='sm']),:host([size='md']){flex-direction:column}:host([size='sm']) aside,:host([size='md']) aside{height:50%;max-height:var(--dyte-space-96, 384px);width:100%;max-width:100%}:host([layout='column']){flex-direction:column}:host([layout='column']) main{flex:4}:host([layout='column']) aside{flex:2;max-width:100%;width:100%}"},222:function(t,e,r){r.d(e,{R:function(){return c}});var n=r(885),i=r(2982),s=r(7762),a=r(325),o=function(t){var e=t.elements,r=t.defaults,n=t.props,i=void 0===n?{}:n,s=t.deepProps,o=void 0!==s&&s,l=t.elementProps,u=void 0===l?{}:l;return Array.isArray(e)&&0!==e.length?e.map((function(t){return(0,a.h)(c,{element:t,defaults:r,props:i,childProps:o&&i,elementProps:u})})):null},c=function(t,e){var r,c,l=t.element,u=t.defaults,p=t.childProps,d=void 0===p?{}:p,h=t.props,f=void 0===h?{}:h,v=t.onlyChildren,y=void 0!==v&&v,g=t.asHost,m=void 0!==g&&g,b=t.deepProps,P=void 0!==b&&b,A=t.elementProps,j=void 0===A?{}:A,x=u.config,z=u.size,k=u.states,Z={};if(Array.isArray(l)){var w=(0,n.Z)(l,2);c=w[0],Z=w[1]}else c=l;var O=null===(r=null===x||void 0===x?void 0:x.root)||void 0===r?void 0:r[c];null!=O&&"props"in O&&(f=Object.assign(Object.assign({},O.props),f)),f=Object.assign(Object.assign({},f),Z),c in j&&(f=Object.assign(Object.assign({},f),j[c]));var R=function(t){var e=t.element,r=t.size,n=t.states,a=void 0===n?{}:n,o=t.config,c=void 0===o?{}:o,l=[],u=null===c||void 0===c?void 0:c.root[e],p=function(t){l.push(t),"string"===typeof r&&l.push("".concat(t,".").concat(r))};if(p(e),"object"===typeof u&&!Array.isArray(u)&&null!==u){var d=u.state,h=u.states,f=e,v=[];if(Array.isArray(h)){v=h.filter((function(t){return a[t]})),v.sort();var y,g=(0,s.Z)(v);try{for(g.s();!(y=g.n()).done;){var m=y.value;p("".concat(f,".").concat(m))}}catch(x){g.e(x)}finally{g.f()}v.length>1&&p([f].concat((0,i.Z)(v)).join("."))}if("string"===typeof d){var b="".concat(e,"[").concat(d,"=").concat(a[d],"]");p(b);var P,A=(0,s.Z)(v);try{for(A.s();!(P=A.n()).done;){var j=P.value;p("".concat(b,".").concat(j))}}catch(x){A.e(x)}finally{A.f()}v.length>1&&p([b].concat((0,i.Z)(v)).join("."))}}return l}({element:c,size:z,states:k,config:x}),C=function(t){var e=t.selectors,r=t.root;if(!Array.isArray(e)||null==r)return[];for(var n=e.length-1;n>=0;n--){var i=r[e[n]];if(Array.isArray(i))return i;if(Array.isArray(null===i||void 0===i?void 0:i.children))return i.children}return[]}({selectors:R,root:x.root});if(y)return(0,a.h)(o,{elements:C,defaults:u,props:d,deepProps:P,elementProps:j});var H=function(t){var e=t.selectors,r=t.styles;if(!Array.isArray(e)||null==r)return{};var n,i={},a=(0,s.Z)(e);try{for(a.s();!(n=a.n()).done;){var o=r[n.value];null!=o&&Object.assign(i,o)}}catch(c){a.e(c)}finally{a.f()}return i}({selectors:R,styles:x.styles});if(m)return(0,a.h)(a.H,Object.assign({},u,{style:H},f),(0,a.h)(o,{elements:C,defaults:u,props:d,deepProps:P,elementProps:j}),e);if(["dyte-header","dyte-controlbar"].includes(c)&&(f.disableRender=!0),c.startsWith("dyte-"))return(0,a.h)(c,Object.assign({},u,{style:H},f),(0,a.h)(o,{elements:C,defaults:u,props:d,deepProps:P,elementProps:j}),e);var _=c.split("#"),W=(0,n.Z)(_,2),q=W[0],B=W[1];return(0,a.h)(q,{id:B,style:H},(0,a.h)(o,{elements:C,defaults:u,props:d,deepProps:P,elementProps:j}),e)}},859:function(t,e,r){r.d(e,{g:function(){return a},u:function(){return o}});var n=r(4165),i=r(5861),s=r(7239),a=function(){var t=(0,i.Z)((0,n.Z)().mark((function t(e){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=e&&"en"!==e&&""!==e.trim()){t.next=2;break}return t.abrupt("return",s.a);case 2:return t.prev=2,t.next=5,fetch("".concat("http://localhost:5000","/").concat(e,".json"));case 5:if((r=t.sent).ok){t.next=8;break}return t.abrupt("return",s.a);case 8:return t.t0=Object,t.t1={},t.t2=s.a,t.next=13,r.json();case 13:return t.t3=t.sent,t.abrupt("return",t.t0.assign.call(t.t0,t.t1,t.t2,t.t3));case 17:return t.prev=17,t.t4=t.catch(2),t.abrupt("return",s.a);case 20:case"end":return t.stop()}}),t,null,[[2,17]])})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.a;return function(e){var r;return null!==(r=t[e])&&void 0!==r?r:e}}}}]);
//# sourceMappingURL=7770.8027177e.chunk.js.map