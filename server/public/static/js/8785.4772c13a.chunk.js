"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[8785],{8785:function(e,t,n){n.r(t),n.d(t,{dyte_webinar_stage_toggle:function(){return h}});var s=n(4165),r=n(5861),i=n(5671),a=n(3144),u=n(325),o=n(7239),c=n(859),f=n(5100),h=function(){function e(t){var n=this;(0,i.Z)(this,e),(0,u.r)(this,t),this.requestToJoinAcceptedListener=function(){n.stageStatus="ACCEPTED"},this.requestToJoinRejectedListener=function(){n.stageStatus="DENIED"},this.stageJoinedListener=function(){n.stageStatus="ACCEPTED"},this.removeFromStageListener=function(){n.stageStatus="NOT_REQUESTED"},this.selfStageLeftListener=function(){n.stageStatus="NOT_REQUESTED"},this.activeJoinStageChanged=function(e){e||(n.stageStatus="NOT_REQUESTED")},this.stageCallback=(0,r.Z)((0,s.Z)().mark((function e(){var t,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(r=null===(t=n.meeting)||void 0===t?void 0:t.self)&&(n.requestProduce||n.canPresent)){e.next=3;break}return e.abrupt("return");case 3:if("ACCEPTED"!==n.stageStatus){e.next=8;break}return e.next=6,r.leaveStage();case 6:return n.stageStatus="NOT_REQUESTED",e.abrupt("return");case 8:if(!n.canPresent){e.next=14;break}return e.next=11,r.joinStage();case 11:n.stageStatus="ACCEPTED",e.next=17;break;case 14:return e.next=16,r.requestToJoinStage();case 16:n.stageStatus="PENDING";case 17:case"end":return e.stop()}}),e)}))),this.variant="button",this.meeting=void 0,this.size=void 0,this.iconPack=o.d,this.t=(0,c.u)(),this.stageStatus="NOT_REQUESTED",this.canPresent=!1,this.requestProduce=!1}return(0,a.Z)(e,[{key:"connectedCallback",value:function(){var e=this;this.meetingChanged(this.meeting),this.meeting.self.addListener("joinStageRequestAccepted",this.requestToJoinAcceptedListener),this.meeting.self.addListener("joinStageRequestRejected",this.requestToJoinRejectedListener),this.meeting.self.addListener("stageJoined",this.stageJoinedListener),this.meeting.self.addListener("removedFromStage",this.removeFromStageListener),this.meeting.self.addListener("stageLeft",this.selfStageLeftListener),(0,f.o)("activeJoinStage",(function(t){return e.activeJoinStageChanged(t)}))}},{key:"disconnectedCallback",value:function(){this.meeting.self.removeListener("joinStageRequestAccepted",this.requestToJoinAcceptedListener),this.meeting.self.removeListener("joinStageRequestRejected",this.requestToJoinRejectedListener),this.meeting.self.removeListener("removedFromStage",this.removeFromStageListener),this.meeting.self.removeListener("stageJoined",this.stageJoinedListener),this.meeting.self.removeListener("stageLeft",this.selfStageLeftListener)}},{key:"meetingChanged",value:function(e){null!=e&&(this.requestProduce=e.self.permissions.requestProduce,this.canPresent=e.self.permissions.canPresent,(this.canPresent||"ON_STAGE"===e.self.webinarStageStatus)&&(this.stageStatus="ACCEPTED"))}},{key:"getState",value:function(){var e="",t="",n="",s={},r=!1;return"PENDING"===this.stageStatus?(t=this.t("stage_request.approval_pending"),e=this.t("stage_request.pending_tip"),n=this.iconPack.join_stage,s["red-icon"]=!1,r=!0):"ACCEPTED"===this.stageStatus?(t=this.t("stage_request.leave_stage"),e=this.t("stage_request.leave_tip"),n=this.iconPack.leave_stage,s["red-icon"]=!1,r=!1):"DENIED"===this.stageStatus?(t=this.t("stage_request.denied"),e=this.t("stage_request.denied_tip"),n=this.iconPack.join_stage,s["red-icon"]=!1,r=!0):(t=this.t("stage_request.request"),e=this.canPresent?this.t("stage_request.request"):this.t("stage_request.request_tip"),n=this.iconPack.join_stage,r=!1),{tooltipLabel:e,label:t,icon:n,classList:s,disabled:r}}},{key:"render",value:function(){if(!this.requestProduce&&!this.canPresent)return null;if("WEBINAR"!==this.meeting.self.config.viewType)return null;var e=this.getState(),t=e.tooltipLabel,n=e.label,s=e.icon,r=e.classList,i=e.disabled;return(0,u.h)(u.H,{title:n},(0,u.h)("dyte-tooltip",{placement:"top",kind:"block",label:t,delay:600,part:"tooltip",iconPack:this.iconPack,t:this.t},(0,u.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,variant:this.variant,label:n,icon:s,class:r,onClick:this.stageCallback,disabled:i,showWarning:!1})))}}],[{key:"watchers",get:function(){return{meeting:["meetingChanged"]}}}]),e}();h.style=":host{display:block;font-family:var(--dyte-font-family, sans-serif)}"},859:function(e,t,n){n.d(t,{g:function(){return a},u:function(){return u}});var s=n(4165),r=n(5861),i=n(7239),a=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t&&"en"!==t&&""!==t.trim()){e.next=2;break}return e.abrupt("return",i.a);case 2:return e.prev=2,e.next=5,fetch("".concat("http://localhost:5000","/").concat(t,".json"));case 5:if((n=e.sent).ok){e.next=8;break}return e.abrupt("return",i.a);case 8:return e.t0=Object,e.t1={},e.t2=i.a,e.next=13,n.json();case 13:return e.t3=e.sent,e.abrupt("return",e.t0.assign.call(e.t0,e.t1,e.t2,e.t3));case 17:return e.prev=17,e.t4=e.catch(2),e.abrupt("return",i.a);case 20:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.a;return function(t){var n;return null!==(n=e[t])&&void 0!==n?n:t}}},5100:function(e,t,n){n.d(t,{o:function(){return h},s:function(){return f}});var s=n(7762),r=n(325),i=function(e){return!("isConnected"in e)||e.isConnected},a=function(e,t){var n;return function(){for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];n&&clearTimeout(n),n=setTimeout((function(){n=0,e.apply(void 0,r)}),t)}}((function(e){var t,n=(0,s.Z)(e.keys());try{for(n.s();!(t=n.n()).done;){var r=t.value;e.set(r,e.get(r).filter(i))}}catch(a){n.e(a)}finally{n.f()}}),2e3),u=function(e){return"function"===typeof e?e():e},o=function(e,t){var n=e.indexOf(t);n>=0&&(e[n]=e[e.length-1],e.length--)},c=function(e,t){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e,t){return e!==t},n=u(e),s=new Map(Object.entries(null!==n&&void 0!==n?n:{})),r={dispose:[],get:[],set:[],reset:[]},i=function(){var t;s=new Map(Object.entries(null!==(t=u(e))&&void 0!==t?t:{})),r.reset.forEach((function(e){return e()}))},a=function(e){return r.get.forEach((function(t){return t(e)})),s.get(e)},c=function(e,n){var i=s.get(e);t(n,i,e)&&(s.set(e,n),r.set.forEach((function(t){return t(e,n,i)})))},f="undefined"===typeof Proxy?{}:new Proxy(n,{get:function(e,t){return a(t)},ownKeys:function(e){return Array.from(s.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(e,t){return s.has(t)},set:function(e,t,n){return c(t,n),!0}}),h=function(e,t){return r[e].push(t),function(){o(r[e],t)}};return{state:f,get:a,set:c,on:h,onChange:function(t,n){var s=h("set",(function(e,s){e===t&&n(s)})),r=h("reset",(function(){return n(u(e)[t])}));return function(){s(),r()}},use:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var s=t.reduce((function(e,t){return t.set&&e.push(h("set",t.set)),t.get&&e.push(h("get",t.get)),t.reset&&e.push(h("reset",t.reset)),t.dispose&&e.push(h("dispose",t.dispose)),e}),[]);return function(){return s.forEach((function(e){return e()}))}},dispose:function(){r.dispose.forEach((function(e){return e()})),i()},reset:i,forceUpdate:function(e){var t=s.get(e);r.set.forEach((function(n){return n(e,t,t)}))}}}(e,t);return n.use(function(){if("function"!==typeof r.a)return{};var e=new Map;return{dispose:function(){return e.clear()},get:function(t){var n=(0,r.a)();n&&function(e,t,n){var s=e.get(t);s?s.includes(n)||s.push(n):e.set(t,[n])}(e,t,n)},set:function(t){var n=e.get(t);n&&e.set(t,n.filter(r.f)),a(e)},reset:function(){e.forEach((function(e){return e.forEach(r.f)})),a(e)}}}()),n}({}),f=c.state,h=c.onChange}}]);
//# sourceMappingURL=8785.4772c13a.chunk.js.map