"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[1771],{1771:function(t,e,n){n.r(e),n.d(e,{dyte_recording_indicator:function(){return o}});var i=n(5671),r=n(3144),a=n(325),c=n(7239),s=n(859),o=function(){function t(e){var n=this;(0,i.Z)(this,t),(0,a.r)(this,e),this.setIsRecording=function(t){n.isRecording="RECORDING"===t},this.meeting=void 0,this.size=void 0,this.t=(0,s.u)(),this.iconPack=c.d,this.isRecording=void 0}return(0,r.Z)(t,[{key:"connectedCallback",value:function(){this.meetingChanged(this.meeting)}},{key:"disconnectedCallback",value:function(){var t;null===(t=this.meeting)||void 0===t||t.recording.removeListener("recordingUpdate",this.updateRecordingStatus)}},{key:"meetingChanged",value:function(t){var e=this;null!=t&&(this.setIsRecording(t.recording.recordingState),this.updateRecordingStatus=function(t){e.setIsRecording(t)},t.recording.addListener("recordingUpdate",this.updateRecordingStatus))}},{key:"render",value:function(){return(0,a.h)(a.H,null,this.isRecording&&(0,a.h)("div",{class:"indicator","aria-label":this.t("This meeting is being recorded"),part:"indicator"},(0,a.h)("dyte-icon",{icon:this.iconPack.recording,"aria-hidden":!0,tabIndex:-1,part:"icon",iconPack:this.iconPack,t:this.t}),(0,a.h)("span",null,this.t("REC"))))}}],[{key:"watchers",get:function(){return{meeting:["meetingChanged"]}}}]),t}();o.style=":host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:block;font-family:var(--dyte-font-family, sans-serif)}:host[size='sm']{margin-left:var(--dyte-space-1, 4px);margin-right:var(--dyte-space-1, 4px)}.indicator{display:flex;flex-direction:row;align-items:center;font-size:14px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}dyte-icon{margin-right:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);-webkit-animation:blink 4s linear infinite;animation:blink 4s linear infinite}:host([size='sm']) dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}:host([size='sm']) .indicator span{display:none}@-webkit-keyframes blink{0%,10%{opacity:0}11%,100%{opacity:1}}@keyframes blink{0%,10%{opacity:0}11%,100%{opacity:1}}"},859:function(t,e,n){n.d(e,{g:function(){return c},u:function(){return s}});var i=n(4165),r=n(5861),a=n(7239),c=function(){var t=(0,r.Z)((0,i.Z)().mark((function t(e){var n;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=e&&"en"!==e&&""!==e.trim()){t.next=2;break}return t.abrupt("return",a.a);case 2:return t.prev=2,t.next=5,fetch("".concat("http://localhost:5000","/").concat(e,".json"));case 5:if((n=t.sent).ok){t.next=8;break}return t.abrupt("return",a.a);case 8:return t.t0=Object,t.t1={},t.t2=a.a,t.next=13,n.json();case 13:return t.t3=t.sent,t.abrupt("return",t.t0.assign.call(t.t0,t.t1,t.t2,t.t3));case 17:return t.prev=17,t.t4=t.catch(2),t.abrupt("return",a.a);case 20:case"end":return t.stop()}}),t,null,[[2,17]])})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.a;return function(e){var n;return null!==(n=t[e])&&void 0!==n?n:e}}}}]);
//# sourceMappingURL=1771.31f89ce3.chunk.js.map