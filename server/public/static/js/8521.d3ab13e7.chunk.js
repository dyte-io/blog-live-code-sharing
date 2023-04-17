"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[8521],{8521:function(e,t,n){n.r(t),n.d(t,{dyte_leave_meeting:function(){return u}});var r=n(5671),i=n(3144),a=n(325),o=n(859),c=n(7239),s=n(5100),u=function(){function e(t){var n=this;(0,r.Z)(this,e),(0,a.r)(this,t),this.stateUpdate=(0,a.c)(this,"dyteStateUpdate",7),this.keyPressListener=function(e){"Escape"===e.key&&n.close()},this.close=function(){n.stateUpdate.emit({activeLeaveConfirmation:!1}),s.s.activeLeaveConfirmation=!1},this.handleLeave=function(){var e;null===(e=n.meeting)||void 0===e||e.leaveRoom(),n.close()},this.handleEndMeeting=function(){var e;null===(e=n.meeting)||void 0===e||e.participants.kickAll(),n.close()},this.meeting=void 0,this.states=void 0,this.iconPack=c.d,this.t=(0,o.u)(),this.canEndMeeting=!1}return(0,i.Z)(e,[{key:"connectedCallback",value:function(){this.meetingChanged(this.meeting),document.addEventListener("keydown",this.keyPressListener)}},{key:"componentDidLoad",value:function(){}},{key:"disconnectedCallback",value:function(){document.removeEventListener("keydown",this.keyPressListener)}},{key:"meetingChanged",value:function(e){null!=e&&(this.canEndMeeting=e.self.permissions.kickParticipant)}},{key:"render",value:function(){return(0,a.h)(a.H,null,(0,a.h)("div",{class:"leave-modal"},(0,a.h)("div",{class:"header"},(0,a.h)("h2",{class:"title"},this.t("leave"))),(0,a.h)("p",{class:"message"},this.t("leave_confirmation")),(0,a.h)("div",{class:"content"},(0,a.h)("div",{class:"leave-meeting"},(0,a.h)("dyte-button",{variant:"secondary",title:this.t("Close"),onClick:this.close,iconPack:this.iconPack,t:this.t},this.t("cancel")),(0,a.h)("dyte-button",{variant:"danger",title:this.t("leave"),onClick:this.handleLeave,iconPack:this.iconPack,t:this.t},this.t("leave"))),this.canEndMeeting&&(0,a.h)("div",{class:"end-meeting"},(0,a.h)("dyte-button",{variant:"danger",kind:"wide",onClick:this.handleEndMeeting,iconPack:this.iconPack,t:this.t},this.t("end_meeting_for_all"))))))}}],[{key:"watchers",get:function(){return{meeting:["meetingChanged"]}}}]),e}();u.style=".leave-modal{position:relative;display:flex;flex-direction:column;border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));padding:var(--dyte-space-4, 16px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.leave-modal .header h2{margin:var(--dyte-space-0, 0px)}.leave-modal .content{font-size:14px}.leave-message p{margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-3, 12px)}.leave-meeting{display:flex;flex-direction:row;justify-content:space-between;gap:var(--dyte-space-2, 8px)}.leave-meeting dyte-button{flex:1 1 0%}.end-meeting{margin-top:var(--dyte-space-2, 8px)}"},859:function(e,t,n){n.d(t,{g:function(){return o},u:function(){return c}});var r=n(4165),i=n(5861),a=n(7239),o=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t&&"en"!==t&&""!==t.trim()){e.next=2;break}return e.abrupt("return",a.a);case 2:return e.prev=2,e.next=5,fetch("".concat("http://localhost:5000","/").concat(t,".json"));case 5:if((n=e.sent).ok){e.next=8;break}return e.abrupt("return",a.a);case 8:return e.t0=Object,e.t1={},e.t2=a.a,e.next=13,n.json();case 13:return e.t3=e.sent,e.abrupt("return",e.t0.assign.call(e.t0,e.t1,e.t2,e.t3));case 17:return e.prev=17,e.t4=e.catch(2),e.abrupt("return",a.a);case 20:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.a;return function(t){var n;return null!==(n=e[t])&&void 0!==n?n:t}}},5100:function(e,t,n){n.d(t,{o:function(){return l},s:function(){return f}});var r=n(7762),i=n(325),a=function(e){return!("isConnected"in e)||e.isConnected},o=function(e,t){var n;return function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];n&&clearTimeout(n),n=setTimeout((function(){n=0,e.apply(void 0,i)}),t)}}((function(e){var t,n=(0,r.Z)(e.keys());try{for(n.s();!(t=n.n()).done;){var i=t.value;e.set(i,e.get(i).filter(a))}}catch(o){n.e(o)}finally{n.f()}}),2e3),c=function(e){return"function"===typeof e?e():e},s=function(e,t){var n=e.indexOf(t);n>=0&&(e[n]=e[e.length-1],e.length--)},u=function(e,t){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e,t){return e!==t},n=c(e),r=new Map(Object.entries(null!==n&&void 0!==n?n:{})),i={dispose:[],get:[],set:[],reset:[]},a=function(){var t;r=new Map(Object.entries(null!==(t=c(e))&&void 0!==t?t:{})),i.reset.forEach((function(e){return e()}))},o=function(e){return i.get.forEach((function(t){return t(e)})),r.get(e)},u=function(e,n){var a=r.get(e);t(n,a,e)&&(r.set(e,n),i.set.forEach((function(t){return t(e,n,a)})))},f="undefined"===typeof Proxy?{}:new Proxy(n,{get:function(e,t){return o(t)},ownKeys:function(e){return Array.from(r.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(e,t){return r.has(t)},set:function(e,t,n){return u(t,n),!0}}),l=function(e,t){return i[e].push(t),function(){s(i[e],t)}};return{state:f,get:o,set:u,on:l,onChange:function(t,n){var r=l("set",(function(e,r){e===t&&n(r)})),i=l("reset",(function(){return n(c(e)[t])}));return function(){r(),i()}},use:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.reduce((function(e,t){return t.set&&e.push(l("set",t.set)),t.get&&e.push(l("get",t.get)),t.reset&&e.push(l("reset",t.reset)),t.dispose&&e.push(l("dispose",t.dispose)),e}),[]);return function(){return r.forEach((function(e){return e()}))}},dispose:function(){i.dispose.forEach((function(e){return e()})),a()},reset:a,forceUpdate:function(e){var t=r.get(e);i.set.forEach((function(n){return n(e,t,t)}))}}}(e,t);return n.use(function(){if("function"!==typeof i.a)return{};var e=new Map;return{dispose:function(){return e.clear()},get:function(t){var n=(0,i.a)();n&&function(e,t,n){var r=e.get(t);r?r.includes(n)||r.push(n):e.set(t,[n])}(e,t,n)},set:function(t){var n=e.get(t);n&&e.set(t,n.filter(i.f)),o(e)},reset:function(){e.forEach((function(e){return e.forEach(i.f)})),o(e)}}}()),n}({}),f=u.state,l=u.onChange}}]);
//# sourceMappingURL=8521.d3ab13e7.chunk.js.map