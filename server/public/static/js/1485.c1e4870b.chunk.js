"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[1485],{1485:function(e,t,n){n.r(t),n.d(t,{dyte_grid:function(){return l}});var i=n(2982),r=n(5671),a=n(3144),s=n(325),o=n(1654),c=n(7239),d=n(859),u=n(222),h=n(5100),p=n(3491),l=function(){function e(t){var n=this;(0,r.Z)(this,e),(0,s.r)(this,t),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.hideSelf=!1,this.networkUpdateListener=function(e){var t=e.event;n.connected="connected"===t},this.meetingDisconnectedListener=function(){n.networkUpdateListener({event:"disconnected"})},this.meetingConnectedListener=function(){n.networkUpdateListener({event:"connected"})},this.eventCallback=function(e){var t=n.meeting.self;e===p.P.CAMERA&&(t.videoEnabled?t.disableVideo():t.enableVideo()),e===p.P.MIC&&(t.audioEnabled?t.disableAudio():t.enableAudio()),e===p.P.END&&(p.s.cleanup(),n.stateUpdate.emit({activePipMode:!1}),n.meeting.leaveRoom())},this.onSelfVideoUpdateListener=function(e){var t=e.videoEnabled;p.s.updateMediaSession(p.P.CAMERA,t)},this.onSelfAudioUpdateListener=function(e){var t=e.audioEnabled;p.s.updateMediaSession(p.P.MIC,t)},this.onViewModeChanged=function(){null!=n.meeting&&n.updateActiveParticipants()},this.onParticipantJoined=function(e){null!=n.meeting&&(n.participants.some((function(t){return t.id===e.id}))||(n.participants=[e].concat((0,i.Z)(n.participants))),e.isPinned&&!n.pinnedParticipants.some((function(t){return t.id===e.id}))&&(n.pinnedParticipants=n.pinnedParticipants.concat([e])),n.updateWebinarStage())},this.onParticipantLeft=function(e){n.participants=n.participants.filter((function(t){return t.id!==e.id})),n.participants=n.participants.concat(n.meeting.participants.active.toArray().filter((function(e){return!n.participants.find((function(t){return t.id===e.id}))}))),n.pinnedParticipants=n.pinnedParticipants.filter((function(t){return t.id!==e.id})),e.screenShareEnabled&&n.removeScreenShare(e),n.updateWebinarStage()},this.selfStageJoinListener=function(){n.updateActiveParticipants()},this.selfStageLeaveListener=function(){n.removeScreenShare(n.meeting.self),n.updateActiveParticipants()},this.onPresentationStart=function(){null!=n.meeting&&n.updateActiveParticipants()},this.onPresentationEnd=function(e){null!=n.meeting&&(n.removePinned(e),n.removeScreenShare(e),n.updateActiveParticipants())},this.onScreenShareUpdate=function(e){e.screenShareEnabled?n.addScreenShare(e):n.removeScreenShare(e)},this.onSelfScreenShareUpdate=function(e){e.screenShareEnabled?n.addScreenShare(n.meeting.self):n.removeScreenShare(n.meeting.self)},this.onPluginStateUpdate=function(e,t){t.active?n.plugins.some((function(t){return t.id===e.id}))||(n.plugins=[].concat((0,i.Z)(n.plugins),[e])):n.plugins=n.plugins.filter((function(t){return t.id!==e.id}))},this.onParticipantPinned=function(){n.updateActiveParticipants()},this.onParticipantUnpinned=function(){n.updateActiveParticipants()},this.participants=[],this.pinnedParticipants=[],this.screenShareParticipants=[],this.plugins=[],this.showWebinarStage=!1,this.canCurrentPeerHost=!1,this.connected=!0,this.pipSupported=!1,this.layout="row",this.aspectRatio="16:9",this.meeting=void 0,this.gap=8,this.size=void 0,this.states=void 0,this.config=o.d,this.iconPack=c.d,this.t=(0,d.u)()}return(0,a.Z)(e,[{key:"connectedCallback",value:function(){this.meetingChanged(this.meeting)}},{key:"disconnectMeeting",value:function(e){if(null!=e){this.participants=[],this.plugins=[];var t=e.self,n=e.participants,i=e.plugins,r=e.meta;n.active.removeListener("participantJoined",this.onParticipantJoined),n.active.removeListener("participantLeft",this.onParticipantLeft),n.joined.removeListener("screenShareUpdate",this.onScreenShareUpdate),n.joined.removeListener("peerStartedPresenting",this.onPresentationStart),n.joined.removeListener("peerStoppedPresenting",this.onPresentationEnd),t.removeListener("screenShareUpdate",this.onSelfScreenShareUpdate),null===i||void 0===i||i.all.removeListener("stateUpdate",this.onPluginStateUpdate),n.pinned.removeListener("participantJoined",this.onParticipantPinned),n.pinned.removeListener("participantLeft",this.onParticipantUnpinned),t.removeListener("pinned",this.onParticipantPinned),t.removeListener("unpinned",this.onParticipantUnpinned),n.removeListener("viewModeChanged",this.onViewModeChanged),t.removeListener("stageJoined",this.selfStageJoinListener),t.removeListener("stageLeft",this.selfStageLeaveListener),t.removeListener("removedFromStage",this.selfStageLeaveListener),t.removeListener("videoUpdate",this.onSelfVideoUpdateListener),t.removeListener("audioUpdate",this.onSelfAudioUpdateListener),r.removeListener("disconnected",this.meetingDisconnectedListener),r.removeListener("connected",this.meetingConnectedListener)}}},{key:"disconnectedCallback",value:function(){this.disconnectMeeting(this.meeting)}},{key:"screenShareParticipantsChanged",value:function(e){var t=e.length>0;this.stateUpdate.emit({activeScreenShare:t}),h.s.activeScreenShare=t}},{key:"pluginsChanged",value:function(e){var t=e.length>0;this.stateUpdate.emit({activePlugin:t}),h.s.activePlugin=t}},{key:"pinnedParticipantsChanged",value:function(e){var t=e.length>0;this.stateUpdate.emit({activeSpotlight:t}),h.s.activeSpotlight=t}},{key:"updateActiveParticipants",value:function(){var e,t,n=this.meeting,r=n.self,a=n.participants,s="WEBINAR"===(null===(e=r.config)||void 0===e?void 0:e.viewType)&&"ON_STAGE"!==r.webinarStageStatus,o=null===(t=r.permissions)||void 0===t?void 0:t.isRecorder;this.hideSelf=s||o||r.permissions.hiddenParticipant,this.participants=[].concat((0,i.Z)(a.active.toArray().filter((function(e){return e.id!==r.id}))),(0,i.Z)("ACTIVE_GRID"!==a.viewMode||r.isPinned||this.hideSelf?[]:[r])),this.pinnedParticipants=[].concat((0,i.Z)(a.pinned.toArray().filter((function(e){return e.id!==r.id}))),(0,i.Z)(r.isPinned&&!this.hideSelf?[r]:[])),this.screenShareParticipants=a.joined.toArray().filter((function(e){return e.screenShareEnabled})),r.screenShareEnabled&&(this.screenShareParticipants=this.screenShareParticipants.concat([r])),this.updateWebinarStage()}},{key:"updateWebinarStage",value:function(){this.meeting&&"WEBINAR"===this.meeting.meta.viewType?this.showWebinarStage=0===this.participants.length&&0===this.pinnedParticipants.length:this.showWebinarStage=!1}},{key:"meetingChanged",value:function(e,t){var n,r=this;if(null!==t&&this.disconnectMeeting(t),null!=e){var a=e.self,s=e.participants,o=e.plugins,c=e.meta,d=a.config,u=a.permissions,l="WEBINAR"===(null===d||void 0===d?void 0:d.viewType)&&"ON_STAGE"!==this.meeting.self.webinarStageStatus,f=null===u||void 0===u?void 0:u.isRecorder;if(this.hideSelf=l||f||u.hiddenParticipant,this.participants=[].concat((0,i.Z)(s.active.toArray()),(0,i.Z)(a.isPinned||this.hideSelf?[]:[a])),this.pinnedParticipants=[].concat((0,i.Z)(s.pinned.toArray()),(0,i.Z)(a.isPinned&&!this.hideSelf?[a]:[])),this.screenShareParticipants=s.joined.toArray().filter((function(e){return e.screenShareEnabled})),this.plugins=(null===o||void 0===o?void 0:o.active.toArray())||[],"WEBINAR"===(null===d||void 0===d?void 0:d.viewType)&&(this.canCurrentPeerHost=u.acceptPresentRequests||u.canPresent,this.updateWebinarStage()),this.pipSupported=p.s.isSupported()&&(null===(n=e.self.config)||void 0===n?void 0:n.pipMode),this.pipSupported){p.s.create((function(){}),(function(){r.stateUpdate.emit({activePipMode:!1})}),this.eventCallback)}var v=null!==document.pictureInPictureElement,g=this.states||h.s;p.s.isSupported()&&g.activePipMode!==v&&this.stateUpdate.emit({activePipMode:v}),s.active.addListener("participantJoined",this.onParticipantJoined),s.active.addListener("participantLeft",this.onParticipantLeft),s.joined.addListener("screenShareUpdate",this.onScreenShareUpdate),s.joined.addListener("peerStartedPresenting",this.onPresentationStart),s.joined.addListener("peerStoppedPresenting",this.onPresentationEnd),a.addListener("screenShareUpdate",this.onSelfScreenShareUpdate),null===o||void 0===o||o.all.addListener("stateUpdate",this.onPluginStateUpdate),s.pinned.addListener("participantJoined",this.onParticipantPinned),s.pinned.addListener("participantLeft",this.onParticipantUnpinned),a.addListener("pinned",this.onParticipantPinned),a.addListener("videoUpdate",this.onSelfVideoUpdateListener),a.addListener("audioUpdate",this.onSelfAudioUpdateListener),a.addListener("unpinned",this.onParticipantUnpinned),a.addListener("stageJoined",this.selfStageJoinListener),a.addListener("stageLeft",this.selfStageLeaveListener),a.addListener("removedFromStage",this.selfStageLeaveListener),c.addListener("disconnected",this.meetingDisconnectedListener),c.addListener("connected",this.meetingConnectedListener),s.addListener("viewModeChanged",this.onViewModeChanged)}}},{key:"addScreenShare",value:function(e){this.screenShareParticipants.some((function(t){return t.id===e.id}))||(this.screenShareParticipants=[].concat((0,i.Z)(this.screenShareParticipants),[e]))}},{key:"removeScreenShare",value:function(e){this.screenShareParticipants=this.screenShareParticipants.filter((function(t){return t.id!==e.id}))}},{key:"removePinned",value:function(e){this.pinnedParticipants=this.pinnedParticipants.filter((function(t){return t.id!==e.id}))}},{key:"render",value:function(){var e={meeting:this.meeting,size:this.size,states:this.states||h.s,config:this.config,iconPack:this.iconPack,t:this.t};return!this.connected&&this.hideSelf?(0,s.h)("div",{class:"webinar-stage"},(0,s.h)("div",{class:"center"},(0,s.h)("h2",null,this.t("stage.reconnecting")))):(0,s.h)(s.H,null,this.showWebinarStage&&(0,s.h)("div",{class:"webinar-stage"},(0,s.h)("div",{class:"center"},this.canCurrentPeerHost&&(0,s.h)("div",null,(0,s.h)("h2",null,this.t("stage.empty_host")),(0,s.h)("p",null,this.t("stage.empty_host_summary"))),!this.canCurrentPeerHost&&(0,s.h)("h2",null,this.t("stage.empty_viewer")))),!this.showWebinarStage&&(0,s.h)(u.R,{element:"dyte-grid",defaults:e,childProps:{participants:this.participants,screenShareParticipants:this.screenShareParticipants,plugins:this.plugins,pinnedParticipants:this.pinnedParticipants,aspectRatio:this.aspectRatio,gap:this.gap,layout:this.layout},onlyChildren:!0}))}},{key:"host",get:function(){return(0,s.g)(this)}}],[{key:"watchers",get:function(){return{screenShareParticipants:["screenShareParticipantsChanged"],plugins:["pluginsChanged"],pinnedParticipants:["pinnedParticipantsChanged"],meeting:["meetingChanged"]}}}]),e}();l.style=":host{display:flex;height:100%;width:100%;overflow:hidden;font-family:var(--dyte-font-family, sans-serif);flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;color:rgb(var(--dyte-colors-text-1000, 255 255 255));transition:0.4s}dyte-participant-tile{aspect-ratio:initial;box-sizing:border-box}.webinar-stage{box-sizing:border-box;display:flex;align-content:center;align-items:center;justify-content:center;text-align:center}.webinar-stage h2{margin:var(--dyte-space-0, 0px);font-weight:normal}"},222:function(e,t,n){n.d(t,{R:function(){return c}});var i=n(885),r=n(2982),a=n(7762),s=n(325),o=function(e){var t=e.elements,n=e.defaults,i=e.props,r=void 0===i?{}:i,a=e.deepProps,o=void 0!==a&&a,d=e.elementProps,u=void 0===d?{}:d;return Array.isArray(t)&&0!==t.length?t.map((function(e){return(0,s.h)(c,{element:e,defaults:n,props:r,childProps:o&&r,elementProps:u})})):null},c=function(e,t){var n,c,d=e.element,u=e.defaults,h=e.childProps,p=void 0===h?{}:h,l=e.props,f=void 0===l?{}:l,v=e.onlyChildren,g=void 0!==v&&v,m=e.asHost,S=void 0!==m&&m,P=e.deepProps,y=void 0!==P&&P,b=e.elementProps,L=void 0===b?{}:b,A=u.config,k=u.size,C=u.states,w={};if(Array.isArray(d)){var E=(0,i.Z)(d,2);c=E[0],w=E[1]}else c=d;var M=null===(n=null===A||void 0===A?void 0:A.root)||void 0===n?void 0:n[c];null!=M&&"props"in M&&(f=Object.assign(Object.assign({},M.props),f)),f=Object.assign(Object.assign({},f),w),c in L&&(f=Object.assign(Object.assign({},f),L[c]));var U=function(e){var t=e.element,n=e.size,i=e.states,s=void 0===i?{}:i,o=e.config,c=void 0===o?{}:o,d=[],u=null===c||void 0===c?void 0:c.root[t],h=function(e){d.push(e),"string"===typeof n&&d.push("".concat(e,".").concat(n))};if(h(t),"object"===typeof u&&!Array.isArray(u)&&null!==u){var p=u.state,l=u.states,f=t,v=[];if(Array.isArray(l)){v=l.filter((function(e){return s[e]})),v.sort();var g,m=(0,a.Z)(v);try{for(m.s();!(g=m.n()).done;){var S=g.value;h("".concat(f,".").concat(S))}}catch(A){m.e(A)}finally{m.f()}v.length>1&&h([f].concat((0,r.Z)(v)).join("."))}if("string"===typeof p){var P="".concat(t,"[").concat(p,"=").concat(s[p],"]");h(P);var y,b=(0,a.Z)(v);try{for(b.s();!(y=b.n()).done;){var L=y.value;h("".concat(P,".").concat(L))}}catch(A){b.e(A)}finally{b.f()}v.length>1&&h([P].concat((0,r.Z)(v)).join("."))}}return d}({element:c,size:k,states:C,config:A}),j=function(e){var t=e.selectors,n=e.root;if(!Array.isArray(t)||null==n)return[];for(var i=t.length-1;i>=0;i--){var r=n[t[i]];if(Array.isArray(r))return r;if(Array.isArray(null===r||void 0===r?void 0:r.children))return r.children}return[]}({selectors:U,root:A.root});if(g)return(0,s.h)(o,{elements:j,defaults:u,props:p,deepProps:y,elementProps:L});var Z=function(e){var t=e.selectors,n=e.styles;if(!Array.isArray(t)||null==n)return{};var i,r={},s=(0,a.Z)(t);try{for(s.s();!(i=s.n()).done;){var o=n[i.value];null!=o&&Object.assign(r,o)}}catch(c){s.e(c)}finally{s.f()}return r}({selectors:U,styles:A.styles});if(S)return(0,s.h)(s.H,Object.assign({},u,{style:Z},f),(0,s.h)(o,{elements:j,defaults:u,props:p,deepProps:y,elementProps:L}),t);if(["dyte-header","dyte-controlbar"].includes(c)&&(f.disableRender=!0),c.startsWith("dyte-"))return(0,s.h)(c,Object.assign({},u,{style:Z},f),(0,s.h)(o,{elements:j,defaults:u,props:p,deepProps:y,elementProps:L}),t);var x=c.split("#"),R=(0,i.Z)(x,2),I=R[0],O=R[1];return(0,s.h)(I,{id:O,style:Z},(0,s.h)(o,{elements:j,defaults:u,props:p,deepProps:y,elementProps:L}),t)}},859:function(e,t,n){n.d(t,{g:function(){return s},u:function(){return o}});var i=n(4165),r=n(5861),a=n(7239),s=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t&&"en"!==t&&""!==t.trim()){e.next=2;break}return e.abrupt("return",a.a);case 2:return e.prev=2,e.next=5,fetch("".concat("http://localhost:5000","/").concat(t,".json"));case 5:if((n=e.sent).ok){e.next=8;break}return e.abrupt("return",a.a);case 8:return e.t0=Object,e.t1={},e.t2=a.a,e.next=13,n.json();case 13:return e.t3=e.sent,e.abrupt("return",e.t0.assign.call(e.t0,e.t1,e.t2,e.t3));case 17:return e.prev=17,e.t4=e.catch(2),e.abrupt("return",a.a);case 20:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.a;return function(t){var n;return null!==(n=e[t])&&void 0!==n?n:t}}},3491:function(e,t,n){n.d(t,{P:function(){return i},s:function(){return u}});var i,r=n(885),a=n(5671),s=n(3144),o=720,c=1280,d=function(e,t,n,i,r,a){var s,o,c,d,u=r,h=a,p=Math.min(n/u,i/h),l=u*p,f=h*p,v=1;return l<n&&(v=n/l),Math.abs(v-1)<1e-14&&f<i&&(v=i/f),(s=.5*(u-(c=u/((l*=v)/n))))<0&&(s=0),(o=.5*(h-(d=h/((f*=v)/i))))<0&&(o=0),c>u&&(c=u),d>h&&(d=h),[s,o,c,d,e,t,n,i]};!function(e){e.CAMERA="CAMERA",e.MIC="MIC",e.END="END"}(i||(i={}));var u=new(function(){function e(){(0,a.Z)(this,e),this.tracks=[],this.sources=[],this.enabled=!1}return(0,s.Z)(e,[{key:"isSupported",value:function(){return!!window.chrome&&document.pictureInPictureEnabled}},{key:"cleanup",value:function(){this.isSupported()&&void 0!==document.exitPictureInPicture&&null!==document.pictureInPictureElement&&document.exitPictureInPicture(),this.canvas=void 0,this.video=void 0,this.tracks=[],this.request=void 0}},{key:"createCanvas",value:function(){var e=document.createElement("canvas");e.height=o,e.width=c,this.canvas=e}},{key:"setupEvents",value:function(e){void 0!==navigator.mediaSession&&void 0!==navigator.mediaSession.setCameraActive&&(navigator.mediaSession.setActionHandler("togglemicrophone",(function(){e(i.MIC)})),navigator.mediaSession.setActionHandler("togglecamera",(function(){e(i.CAMERA)})),navigator.mediaSession.setActionHandler("hangup",(function(){e(i.END)})))}},{key:"drawGrid",value:function(e,t,n){if(void 0!==this.canvas){var i=this.canvas.getContext("2d");i.fillStyle="#000000",i.fillRect(0,0,c,o);for(var a=0,s=0;a<715;){for(var u=0;u<1275&&s<n;){var h=this.tracks[s],p=d(u,a,e,t,h.videoWidth,h.videoHeight),l=(0,r.Z)(p,8),f=l[0],v=l[1],g=l[2],m=l[3],S=l[4],P=l[5],y=l[6],b=l[7];i.drawImage(h,f,v,g,m,S,P,y,b),s+=1,u+=e}a+=t}}}},{key:"paintCanvas",value:function(){var e=this.tracks.length,t=function(e){switch(e){case 0:case 1:return[c,o];case 2:return[Math.floor(640),o];case 3:case 4:return[Math.floor(640),Math.floor(360)];default:return[Math.floor(426.6666666666667),Math.floor(360)]}}(e),n=(0,r.Z)(t,2),i=n[0],a=n[1];this.drawGrid(i,a,e)}},{key:"animate",value:function(){var e=this;void 0!==this.tracks&&this.paintCanvas(),void 0!==this.request&&(this.request=requestAnimationFrame((function(){return e.animate()})))}},{key:"create",value:function(e,t,n){var i=this;this.cleanup(),this.createCanvas(),this.setupEvents(n);var r=document.createElement("video");r.height=o,r.width=c,r.autoplay=!0,r.srcObject=this.canvas.captureStream(24),this.video=r,this.video.onloadedmetadata=function(){try{e(),i.video.onleavepictureinpicture=function(){t()}}catch(n){t(n.getMessage())}},this.paintCanvas()}},{key:"updateMediaSession",value:function(e,t){void 0!==navigator.mediaSession&&(e===i.CAMERA&&void 0!==navigator.mediaSession.setCameraActive&&navigator.mediaSession.setCameraActive(t),e===i.MIC&&void 0!==navigator.mediaSession.setMicrophoneActive&&navigator.mediaSession.setMicrophoneActive(t))}},{key:"updateVideoSources",value:function(){var e=Object.values(this.sources).filter((function(e){return e.enabled})),t=[];e.map((function(e){t.push(e.element)})),this.tracks=t}},{key:"enableSource",value:function(e){void 0!==this.sources[e]&&(this.sources[e].enabled=!0),this.updateVideoSources()}},{key:"disableSource",value:function(e){void 0!==this.sources[e]&&(this.sources[e].enabled=!1),this.updateVideoSources()}},{key:"addSource",value:function(e,t,n){this.sources[e]={element:t,enabled:n}}},{key:"removeSource",value:function(e){delete this.sources[e]}},{key:"removeAllSource",value:function(){this.sources=[]}},{key:"enable",value:function(){var e=this;this.enabled=!0,this.request=requestAnimationFrame((function(){return e.animate()})),this.video.requestPictureInPicture()}},{key:"disable",value:function(){this.enabled=!1,cancelAnimationFrame(this.request),this.request=void 0,document.exitPictureInPicture()}}]),e}())},5100:function(e,t,n){n.d(t,{o:function(){return h},s:function(){return u}});var i=n(7762),r=n(325),a=function(e){return!("isConnected"in e)||e.isConnected},s=function(e,t){var n;return function(){for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];n&&clearTimeout(n),n=setTimeout((function(){n=0,e.apply(void 0,r)}),t)}}((function(e){var t,n=(0,i.Z)(e.keys());try{for(n.s();!(t=n.n()).done;){var r=t.value;e.set(r,e.get(r).filter(a))}}catch(s){n.e(s)}finally{n.f()}}),2e3),o=function(e){return"function"===typeof e?e():e},c=function(e,t){var n=e.indexOf(t);n>=0&&(e[n]=e[e.length-1],e.length--)},d=function(e,t){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e,t){return e!==t},n=o(e),i=new Map(Object.entries(null!==n&&void 0!==n?n:{})),r={dispose:[],get:[],set:[],reset:[]},a=function(){var t;i=new Map(Object.entries(null!==(t=o(e))&&void 0!==t?t:{})),r.reset.forEach((function(e){return e()}))},s=function(e){return r.get.forEach((function(t){return t(e)})),i.get(e)},d=function(e,n){var a=i.get(e);t(n,a,e)&&(i.set(e,n),r.set.forEach((function(t){return t(e,n,a)})))},u="undefined"===typeof Proxy?{}:new Proxy(n,{get:function(e,t){return s(t)},ownKeys:function(e){return Array.from(i.keys())},getOwnPropertyDescriptor:function(){return{enumerable:!0,configurable:!0}},has:function(e,t){return i.has(t)},set:function(e,t,n){return d(t,n),!0}}),h=function(e,t){return r[e].push(t),function(){c(r[e],t)}};return{state:u,get:s,set:d,on:h,onChange:function(t,n){var i=h("set",(function(e,i){e===t&&n(i)})),r=h("reset",(function(){return n(o(e)[t])}));return function(){i(),r()}},use:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=t.reduce((function(e,t){return t.set&&e.push(h("set",t.set)),t.get&&e.push(h("get",t.get)),t.reset&&e.push(h("reset",t.reset)),t.dispose&&e.push(h("dispose",t.dispose)),e}),[]);return function(){return i.forEach((function(e){return e()}))}},dispose:function(){r.dispose.forEach((function(e){return e()})),a()},reset:a,forceUpdate:function(e){var t=i.get(e);r.set.forEach((function(n){return n(e,t,t)}))}}}(e,t);return n.use(function(){if("function"!==typeof r.a)return{};var e=new Map;return{dispose:function(){return e.clear()},get:function(t){var n=(0,r.a)();n&&function(e,t,n){var i=e.get(t);i?i.includes(n)||i.push(n):e.set(t,[n])}(e,t,n)},set:function(t){var n=e.get(t);n&&e.set(t,n.filter(r.f)),s(e)},reset:function(){e.forEach((function(e){return e.forEach(r.f)})),s(e)}}}()),n}({}),u=d.state,h=d.onChange}}]);
//# sourceMappingURL=1485.c1e4870b.chunk.js.map