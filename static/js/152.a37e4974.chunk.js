"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[152],{5765:function(n,e,s){s.d(e,{Gr:function(){return g},II:function(){return m},gx:function(){return c}});var r=s(1413),a=s(5987),t=(s(2791),s(9513)),i=s(6139),o=s(184),u=["input","meta"],d=["input","meta"],l=function(n){var e=n.meta,s=e.touched,r=e.error,a=n.children,i=s&&r;return(0,o.jsxs)("div",{className:t.Z.formControl+" "+(i?t.Z.error:""),children:[(0,o.jsx)("div",{children:a}),i&&(0,o.jsx)("span",{children:r})]})},c=function(n){var e=n.input,s=n.meta,t=(0,a.Z)(n,u);return(0,o.jsxs)(l,{meta:s,children:[" ",(0,o.jsx)("textarea",(0,r.Z)((0,r.Z)({},e),t))," "]})},m=function(n){var e=n.input,s=n.meta,t=(0,a.Z)(n,d);return(0,o.jsxs)(l,{meta:s,children:[" ",(0,o.jsx)("input",(0,r.Z)((0,r.Z)({},e),t))," "]})},g=function(n,e,s,a){var t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return(0,o.jsxs)("div",{children:[(0,o.jsx)(i.Z,(0,r.Z)({placeholder:n,name:e,validate:s,component:a},t))," ",u]})}},9152:function(n,e,s){s.r(e),s.d(e,{default:function(){return D}});var r=s(1373),a=(s(2791),{dialogs:"Dialogs_dialogs__ODBx3",dialogsItems:"Dialogs_dialogsItems__BGH7H",active:"Dialogs_active__wd+SJ",messages:"Dialogs_messages__DV45A",message:"Dialogs_message__+F7SU",avatar:"Dialogs_avatar__Omn3l"}),t=s(2426),i=s(184),o=function(n){var e="/dialogs/"+n.id;return(0,i.jsxs)("div",{className:a.dialog+" "+a.active,children:[(0,i.jsx)("img",{className:a.avatar,src:n.avatar,alt:"avatar"}),(0,i.jsx)(t.OL,{to:e,children:n.name})]})},u=function(n){return(0,i.jsx)("div",{className:a.message,children:n.message})},d=s(1516),l=s(5298),c=s(6139),m=s(704),g=s(5765),f=s(435),h={},v=(0,l.D)(50),x=(0,m.Z)({form:"dialogAddMessageForm"})((function(n){return(0,i.jsx)("form",{onSubmit:n.handleSubmit,children:(0,i.jsxs)("div",{className:h.container,children:[(0,i.jsx)(c.Z,{component:g.gx,name:"newMessageBody",validate:[l.C,v],placeholder:"Enter your message",row:3}),(0,i.jsx)("div",{children:(0,i.jsx)(f.Z,{type:"default",shape:"round",htmlType:"submit",children:"Send"})})]})})})),j=function(n){var e=n.dialogs.map((function(n){return(0,i.jsx)(o,{name:n.name,id:n.id,avatar:n.avatar},n.id)})),s=n.messages.map((function(n){return(0,i.jsx)(u,{id:n.id,message:n.message},n.id)}));return n.isAuth?(0,i.jsxs)("div",{className:a.dialogs,children:[(0,i.jsx)("div",{className:a.dialogsItems,children:e}),(0,i.jsxs)("div",{className:a.messages,children:[(0,i.jsx)("div",{children:s}),(0,i.jsx)(x,{onSubmit:function(e){n.sendMessage(e.newMessageBody),e.newMessageBody=""}})]})]}):(0,i.jsx)(d.l_,{to:"/login"})},_=s(8687),p=s(7781),Z=s(2932),D=(0,p.qC)(Z.D,(0,_.$j)((function(n){return{dialogs:n.dialogsPage.dialogs,messages:n.dialogsPage.messages,isAuth:n.auth.isAuth}}),(function(n){return{sendMessage:function(e){n((0,r.d)(e))}}})))(j)},2932:function(n,e,s){s.d(e,{D:function(){return l}});var r=s(1413),a=s(5987),t=(s(2791),s(1516)),i=s(8687),o=s(184),u=["isAuth"],d=function(n){return{isAuth:n.auth.isAuth}};function l(n){return(0,i.$j)(d)((function(e){var s=e.isAuth,i=(0,a.Z)(e,u);return s?(0,o.jsx)(n,(0,r.Z)({},i)):(0,o.jsx)(t.l_,{to:"/login"})}))}},5298:function(n,e,s){s.d(e,{C:function(){return r},D:function(){return a}});var r=function(n){if(!n)return"Field is required"},a=function(n){return function(e){if(e.length>n)return"Max length is ".concat(n," symbols")}}},9513:function(n,e){e.Z={formControl:"FormControls_formControl__nfj+-",error:"FormControls_error__uAfpp",formSummaryError:"FormControls_formSummaryError__nMr6e"}}}]);
//# sourceMappingURL=152.a37e4974.chunk.js.map