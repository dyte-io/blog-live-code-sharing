"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[6275],{6275:function(t,n,e){e.r(n),e.d(n,{dyte_logo:function(){return c}});var r=e(5671),i=e(3144),o=e(325),l=e(859),u=e(7239),a=e(1654),c=(e(4130),function(){function t(n){(0,r.Z)(this,t),(0,o.r)(this,n),this.logoUrl=void 0,this.config=a.d,this.meeting=void 0,this.iconPack=u.d,this.t=(0,l.u)()}return(0,i.Z)(t,[{key:"connectedCallback",value:function(){this.configChanged(this.config),this.meetingChanged(this.meeting)}},{key:"configChanged",value:function(t){var n;if(null!=t){var e=null===(n=null===t||void 0===t?void 0:t.designTokens)||void 0===n?void 0:n.logo;null!=e&&null==this.logoUrl&&(this.logoUrl=e)}}},{key:"meetingChanged",value:function(t){var n,e,r,i;if(null!=t){var o=null===(i=null===(r=null===(e=null===(n=t.self)||void 0===n?void 0:n.config)||void 0===e?void 0:e.header)||void 0===r?void 0:r.elements)||void 0===i?void 0:i.logo;null!=o&&null==this.logoUrl&&(this.logoUrl=o)}}},{key:"render",value:function(){if(""===this.logoUrl)return null;var t=this.logoUrl,n=this.t("Logo");return(0,o.h)(o.H,null,"string"===typeof t&&(0,o.h)("img",{src:t,alt:n}))}}],[{key:"watchers",get:function(){return{config:["configChanged"],meeting:["meetingChanged"]}}}]),t}());c.style=":host{display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-1000, 255 255 255));height:100%;width:auto}svg,img{height:100%;width:auto}.brand-color{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}"},859:function(t,n,e){e.d(n,{g:function(){return l},u:function(){return u}});var r=e(4165),i=e(5861),o=e(7239),l=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=n&&"en"!==n&&""!==n.trim()){t.next=2;break}return t.abrupt("return",o.a);case 2:return t.prev=2,t.next=5,fetch("".concat("http://localhost:5000","/").concat(n,".json"));case 5:if((e=t.sent).ok){t.next=8;break}return t.abrupt("return",o.a);case 8:return t.t0=Object,t.t1={},t.t2=o.a,t.next=13,e.json();case 13:return t.t3=t.sent,t.abrupt("return",t.t0.assign.call(t.t0,t.t1,t.t2,t.t3));case 17:return t.prev=17,t.t4=t.catch(2),t.abrupt("return",o.a);case 20:case"end":return t.stop()}}),t,null,[[2,17]])})));return function(n){return t.apply(this,arguments)}}(),u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.a;return function(n){var e;return null!==(e=t[n])&&void 0!==e?e:n}}}}]);
//# sourceMappingURL=6275.4151690f.chunk.js.map