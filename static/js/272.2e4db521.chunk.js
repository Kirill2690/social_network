"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[272],{5765:function(e,t,s){s.d(t,{Gr:function(){return f},II:function(){return h},gx:function(){return d}});var r=s(1413),n=s(5987),i=(s(2791),s(9513)),o=s(6139),a=s(184),u=["input","meta"],l=["input","meta"],c=function(e){var t=e.meta,s=t.touched,r=t.error,n=e.children,o=s&&r;return(0,a.jsxs)("div",{className:i.Z.formControl+" "+(o?i.Z.error:""),children:[(0,a.jsx)("div",{children:n}),o&&(0,a.jsx)("span",{children:r})]})},d=function(e){var t=e.input,s=e.meta,i=(0,n.Z)(e,u);return(0,a.jsxs)(c,{meta:s,children:[" ",(0,a.jsx)("textarea",(0,r.Z)((0,r.Z)({},t),i))," "]})},h=function(e){var t=e.input,s=e.meta,i=(0,n.Z)(e,l);return(0,a.jsxs)(c,{meta:s,children:[" ",(0,a.jsx)("input",(0,r.Z)((0,r.Z)({},t),i))," "]})},f=function(e,t,s,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return(0,a.jsxs)("div",{children:[(0,a.jsx)(o.Z,(0,r.Z)({placeholder:e,name:t,validate:s,component:n},i))," ",u]})}},2272:function(e,t,s){s.r(t),s.d(t,{default:function(){return K}});var r=s(1413),n=s(5671),i=s(3144),o=s(136),a=s(8557),u=s(2791),l=s(9439),c="ProfileInfo_descriptionBlock__aij2N",d="ProfileInfo_avatar__rNjSN",h="ProfileInfo_mainPhoto__wpuJQ",f="ProfileInfo_contact__MRxHV",p=s(6214),m=s(5523),x="ProfileStatusWithHooks_status__3xubF",v=s(184),j=function(e){var t=(0,u.useState)(!1),s=(0,l.Z)(t,2),r=s[0],n=s[1],i=(0,u.useState)(e.status),o=(0,l.Z)(i,2),a=o[0],c=o[1];(0,u.useEffect)((function(){c(e.status)}),[e.status]);return(0,v.jsxs)("div",{className:x,children:[!r&&(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Status:"})," ",(0,v.jsxs)("span",{onDoubleClick:function(){n(!0)},children:[" ",e.status||"-----"]})]}),r&&(0,v.jsx)("div",{children:(0,v.jsx)(m.Z,{onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),e.updateStatus(a)},value:a})})]})},b=s(4353),g=s(5765),_=s(704),P=s(9513),Z=s(435),k=(0,_.Z)({form:"edit-profile"})((function(e){var t,s=e.handleSubmit,r=e.initialValues,n=e.error;return(0,v.jsxs)("form",{onSubmit:s,children:[(0,v.jsxs)("div",{children:[(0,v.jsx)(Z.Z,{type:"default",shape:"round",onClick:s,children:"save"}),n&&(0,v.jsx)("div",{className:P.Z.formSummaryError,children:n})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Full name: "})," ",(0,g.Gr)("Full name","fullName",[],g.II)]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Looking For A Job: "})," ",(0,g.Gr)("","lookingForAJob",[],g.II,{type:"checkbox"})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"My professional skills: "})," ",(0,g.Gr)("My professional skills","lookingForAJobDescription",[],g.gx)]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"About me: "})," ",(0,g.Gr)("About me","aboutMe",[],g.gx)]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Contacts: "})," ",Object.keys(null!==(t=r.contacts)&&void 0!==t?t:{}).map((function(e){return(0,v.jsx)("div",{className:f,children:(0,v.jsxs)("b",{children:[e,": ",(0,g.Gr)(e,"contacts."+e,[],g.II)]})},e)}))]})]})})),y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"},w=s(4291),N=function(e,t){return u.createElement(w.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:y}))};N.displayName="DownloadOutlined";var S=u.forwardRef(N),C=function(e){var t=e.profile,s=e.isOwner,r=e.goToEditMode;return(0,v.jsxs)("div",{children:[s&&(0,v.jsx)("div",{children:(0,v.jsx)(Z.Z,{type:"default",shape:"round",onClick:r,children:"edit"})}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Full name: "})," ",t.fullName]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Looking For A Job: "}),t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"My professional skills: "})," ",t.lookingForAJobDescription]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"About Me: "})," ",t.aboutMe]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Contacts: "})," ",t.contacts&&Object.keys(t.contacts).map((function(e){return(0,v.jsx)(A,{contactTitle:e,contactValue:t.contacts[e]},e)}))]})]})},A=function(e){var t=e.contactTitle,s=e.contactValue;return(0,v.jsxs)("div",{className:f,children:[(0,v.jsxs)("b",{children:[t,": "]})," ",s]})},F=function(e){var t,s=e.profile,r=e.status,n=e.updateStatus,i=e.isOwner,o=e.savePhoto,a=e.saveProfile,f=(0,u.useRef)(null),m=(0,u.useState)(!1),x=(0,l.Z)(m,2),g=x[0],_=x[1];if(!s)return(0,v.jsx)(p.p,{});return(0,v.jsx)("div",{children:(0,v.jsxs)("div",{className:c,children:[(0,v.jsx)("div",{className:d,children:(0,v.jsx)("img",{src:(null===(t=s.photos)||void 0===t?void 0:t.large)||b,className:h,alt:"large avatar"})}),(0,v.jsx)("div",{children:(0,v.jsx)(Z.Z,{type:"default",shape:"circle",icon:(0,v.jsx)(S,{}),onClick:function(){var e;return null===(e=f.current)||void 0===e?void 0:e.click()}})}),i&&(0,v.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])},ref:f,style:{display:"none"}}),(0,v.jsx)(j,{status:r,updateStatus:n}),g?(0,v.jsx)(k,{initialValues:s,onSubmit:function(e){a(e),_(!1)}}):(0,v.jsx)(C,{goToEditMode:function(){_(!0)},profile:s,isOwner:i})]})})},I=s(3433),M="MyPosts_postsBlock__1QT53",D="MyPosts_posts__E-Bcs",E="Post_item__b5JHE",J=function(e){return(0,v.jsxs)("div",{className:E,children:[(0,v.jsx)("img",{src:"https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg",alt:"ava"}),e.message,(0,v.jsxs)("div",{children:[(0,v.jsx)("span",{children:"like"})," ",e.likesCount]})]})},O=s(6139),T=s(5298),V="AddNewPostForm_container__4mOth",G=(0,T.D)(30),H=(0,_.Z)({form:"ProfileAddNewPostForm"})((function(e){return(0,v.jsx)("form",{onSubmit:e.handleSubmit,children:(0,v.jsxs)("div",{className:V,children:[(0,v.jsx)(O.Z,{component:g.gx,name:"newPostText",validate:[T.C,G],placeholder:"Post message",rows:3}),(0,v.jsx)("div",{children:(0,v.jsx)(Z.Z,{htmlType:"submit",type:"default",shape:"round",children:"Add post"})})]})})})),B=u.memo((function(e){var t=(0,I.Z)(e.posts).reverse().map((function(e){return(0,v.jsx)(J,{id:e.id,message:e.message,likesCount:e.likesCount},e.id)}));return(0,v.jsxs)("div",{className:M,children:[(0,v.jsx)("h3",{children:"My posts"}),(0,v.jsx)(H,{onSubmit:function(t){e.addPost(t.newPostText),t.newPostText=""}}),(0,v.jsx)("div",{className:D,children:t})]})})),U=s(8687),z=s(5197),R=(0,U.$j)((function(e){return{posts:e.profilePage.posts,messageForNewPost:e.profilePage.messageForNewPost}}),(function(e){return{addPost:function(t){e((0,z.q2)(t))}}}))(B),q="Profile_container__k9HcY",$=function(e){return(0,v.jsxs)("div",{className:q,children:[(0,v.jsx)(F,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),(0,v.jsx)(R,{})]})},L=s(1516),Q=s(2932),W=s(7781),Y=function(e){(0,o.Z)(s,e);var t=(0,a.Z)(s);function s(){return(0,n.Z)(this,s),t.apply(this,arguments)}return(0,i.Z)(s,[{key:"refreshProfile",value:function(){var e,t=this.props.match.params.userId;if(!t&&!(t=null===(e=this.props.authorizedUserId)||void 0===e?void 0:e.toString()))return this.props.history.push("/login");this.props.getUserProfile(Number(t)),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,v.jsx)($,(0,r.Z)((0,r.Z)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),s}(u.Component),K=(0,W.qC)((0,U.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:z.et,getStatus:z.lR,updateStatus:z.Nf,savePhoto:z.Ju,saveProfile:z.Ii}),L.EN,Q.D)(Y)},2932:function(e,t,s){s.d(t,{D:function(){return c}});var r=s(1413),n=s(5987),i=(s(2791),s(1516)),o=s(8687),a=s(184),u=["isAuth"],l=function(e){return{isAuth:e.auth.isAuth}};function c(e){return(0,o.$j)(l)((function(t){var s=t.isAuth,o=(0,n.Z)(t,u);return s?(0,a.jsx)(e,(0,r.Z)({},o)):(0,a.jsx)(i.l_,{to:"/login"})}))}},5298:function(e,t,s){s.d(t,{C:function(){return r},D:function(){return n}});var r=function(e){if(!e)return"Field is required"},n=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},9513:function(e,t){t.Z={formControl:"FormControls_formControl__nfj+-",error:"FormControls_error__uAfpp",formSummaryError:"FormControls_formSummaryError__nMr6e"}}}]);
//# sourceMappingURL=272.2e4db521.chunk.js.map