"use strict";(self.webpackChunkmy_social_network=self.webpackChunkmy_social_network||[]).push([[130],{5765:function(e,s,t){t.d(s,{Gr:function(){return h},II:function(){return f},gx:function(){return d}});var n=t(1413),r=t(5987),i=(t(2791),t(9513)),o=t(6139),a=t(184),l=["input","meta"],c=["input","meta"],u=function(e){var s=e.meta,t=s.touched,n=s.error,r=e.children,o=t&&n;return(0,a.jsxs)("div",{className:i.Z.formControl+" "+(o?i.Z.error:""),children:[(0,a.jsx)("div",{children:r}),o&&(0,a.jsx)("span",{children:n})]})},d=function(e){var s=e.input,t=e.meta,i=(0,r.Z)(e,l);return(0,a.jsxs)(u,{meta:t,children:[" ",(0,a.jsx)("textarea",(0,n.Z)((0,n.Z)({},s),i))," "]})},f=function(e){var s=e.input,t=e.meta,i=(0,r.Z)(e,c);return(0,a.jsxs)(u,{meta:t,children:[" ",(0,a.jsx)("input",(0,n.Z)((0,n.Z)({},s),i))," "]})},h=function(e,s,t,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return(0,a.jsxs)("div",{children:[(0,a.jsx)(o.Z,(0,n.Z)({placeholder:e,name:s,validate:t,component:r},i))," ",l]})}},3130:function(e,s,t){t.r(s),t.d(s,{default:function(){return ne}});var n=t(1413),r=t(5671),i=t(3144),o=t(136),a=t(8557),l=t(2791),c=t(9439),u="ProfileInfo_descriptionBlock__aij2N",d="ProfileInfo_camera_button__mTzzd",f="ProfileInfo_avatar__rNjSN",h="ProfileInfo_mainPhoto__wpuJQ",p="ProfileInfo_contact__MRxHV",m="ProfileInfo_title__etMu8",x=t(6214),v=t(5523),j="ProfileStatusWithHooks_status__3xubF",_=t(184),g=function(e){var s=(0,l.useState)(!1),t=(0,c.Z)(s,2),n=t[0],r=t[1],i=(0,l.useState)(e.status),o=(0,c.Z)(i,2),a=o[0],u=o[1];(0,l.useEffect)((function(){u(e.status)}),[e.status]);return(0,_.jsxs)("div",{className:j,children:[!n&&(0,_.jsxs)("div",{children:[(0,_.jsx)("span",{style:{color:"white"},children:"Status:"})," ",(0,_.jsxs)("span",{onDoubleClick:function(){r(!0)},children:[" ",e.status||"-----"]})]}),n&&(0,_.jsx)("div",{children:(0,_.jsx)(v.Z,{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(a)},value:a})})]})},P=t(1989),N=t(5765),Z=t(704),b=t(9513),k=t(435),y=(0,Z.Z)({form:"edit-profile"})((function(e){var s,t=e.handleSubmit,n=e.initialValues,r=e.error;return(0,_.jsxs)("form",{onSubmit:t,children:[(0,_.jsxs)("div",{children:[(0,_.jsx)(k.Z,{type:"default",shape:"round",onClick:t,children:"save"}),r&&(0,_.jsx)("div",{className:b.Z.formSummaryError,children:r})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("span",{className:b.Z.title,children:"Full name: "})," ",(0,N.Gr)("Full name","fullName",[],N.II)]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:b.Z.title,children:"Looking For A Job: "})," ",(0,N.Gr)("","lookingForAJob",[],N.II,{type:"checkbox"})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("span",{className:b.Z.title,children:"My professional skills: "})," ",(0,N.Gr)("My professional skills","lookingForAJobDescription",[],N.gx)]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("span",{className:b.Z.title,children:"About me: "})," ",(0,N.Gr)("About me","aboutMe",[],N.gx)]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("span",{className:b.Z.title,children:"Contacts: "})," ",Object.keys(null!==(s=n.contacts)&&void 0!==s?s:{}).map((function(e){return(0,_.jsx)("div",{className:p,children:(0,_.jsxs)("b",{children:[e,": ",(0,N.Gr)(e,"contacts."+e,[],N.II)]})},e)}))]})]})})),C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 248H728l-32.4-90.8a32.07 32.07 0 00-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"}}]},name:"camera",theme:"outlined"},S=t(4291),F=function(e,s){return l.createElement(S.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:s,icon:C}))};F.displayName="CameraOutlined";var w=l.forwardRef(F),I=function(e){var s=e.profile,t=e.isOwner,n=e.goToEditMode;return(0,_.jsxs)("div",{className:p,children:[t&&(0,_.jsx)("div",{children:(0,_.jsx)(k.Z,{type:"default",shape:"round",onClick:n,children:"edit"})}),(0,_.jsxs)("div",{children:[(0,_.jsx)("span",{className:m,children:"Full name: "})," ",s.fullName]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("span",{className:m,children:"Looking For A Job: "}),s.lookingForAJob?"yes":"no"]}),s.lookingForAJob&&(0,_.jsxs)("div",{children:[(0,_.jsx)("span",{className:m,children:"My professional skills: "})," ",s.lookingForAJobDescription]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("span",{className:m,children:"About Me: "})," ",s.aboutMe]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("span",{className:m,children:"Contacts: "})," ",s.contacts&&Object.keys(s.contacts).map((function(e){return(0,_.jsx)(A,{contactTitle:e,contactValue:s.contacts[e]},e)}))]})]})},A=function(e){var s=e.contactTitle,t=e.contactValue;return(0,_.jsxs)("div",{className:p,children:[(0,_.jsxs)("span",{className:m,children:[s,": "]})," ",t]})},M=function(e){var s,t=e.profile,n=e.status,r=e.updateStatus,i=e.isOwner,o=e.savePhoto,a=e.saveProfile,p=(0,l.useRef)(null),m=(0,l.useState)(!1),v=(0,c.Z)(m,2),j=v[0],N=v[1];if(!t)return(0,_.jsx)(x.p,{});return(0,_.jsx)("div",{children:(0,_.jsxs)("div",{className:u,children:[(0,_.jsxs)("div",{className:f,children:[(0,_.jsx)("img",{src:(null===(s=t.photos)||void 0===s?void 0:s.large)||P,className:h,alt:"large avatar"}),(0,_.jsx)("div",{className:d,children:(0,_.jsx)(k.Z,{type:"default",shape:"circle",icon:(0,_.jsx)(w,{}),onClick:function(){var e;return null===(e=p.current)||void 0===e?void 0:e.click()}})})]}),i&&(0,_.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])},ref:p,style:{display:"none"}}),(0,_.jsx)(g,{status:n,updateStatus:r}),j?(0,_.jsx)(y,{initialValues:t,onSubmit:function(e){a(e),N(!1)}}):(0,_.jsx)(I,{goToEditMode:function(){N(!0)},profile:t,isOwner:i})]})})},T=t(9722),E="MyPosts_postsBlock__1QT53",J="MyPosts_title_post__tFNFQ",O="MyPosts_posts__E-Bcs",z="MyPosts_post_box__di0pP",D="Post_item__b5JHE",H=t(3433),G=function(e){var s=(0,H.CG)((function(e){var s;return null===(s=e.profilePage.profile.photos)||void 0===s?void 0:s.small}));return(0,_.jsxs)("div",{className:D,children:[(0,_.jsx)("img",{src:s,alt:"ava"}),e.message,(0,_.jsx)("div",{children:(0,_.jsxs)("span",{children:["\u2764",e.likesCount,"\ufe0f"]})})]})},V=t(6139),B=t(5298),R={container:"AddNewPostForm_container__4mOth",btn:"AddNewPostForm_btn__1xGRM"},U=(0,B.D)(30),Q=(0,Z.Z)({form:"ProfileAddNewPostForm"})((function(e){return(0,_.jsx)("form",{onSubmit:e.handleSubmit,children:(0,_.jsxs)("div",{className:R.container,children:[(0,_.jsx)(V.Z,{component:N.gx,name:"newPostText",validate:[B.C,U],placeholder:"Post message",rows:3}),(0,_.jsx)("div",{children:(0,_.jsx)("button",{className:R.button,type:"submit",children:"Add post"})})]})})})),q=l.memo((function(e){var s=(0,T.Z)(e.posts).reverse().map((function(e){return(0,_.jsx)(G,{id:e.id,message:e.message,likesCount:e.likesCount},e.id)}));return(0,_.jsxs)("div",{className:E,children:[(0,_.jsx)("h3",{className:J,children:"My posts"}),(0,_.jsxs)("div",{className:z,children:[(0,_.jsx)(Q,{onSubmit:function(s){e.addPost(s.newPostText),s.newPostText=""}}),(0,_.jsx)("div",{className:O,children:s})]})]})})),L=t(8687),$=t(5197),W=(0,L.$j)((function(e){return{posts:e.profilePage.posts,messageForNewPost:e.profilePage.messageForNewPost}}),(function(e){return{addPost:function(s){e((0,$.q2)(s))}}}))(q),Y="Profile_container__k9HcY",K=function(e){return(0,_.jsxs)("div",{className:Y,children:[(0,_.jsx)(M,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),(0,_.jsx)(W,{})]})},X=t(1516),ee=t(2932),se=t(7781),te=function(e){(0,o.Z)(t,e);var s=(0,a.Z)(t);function t(){return(0,r.Z)(this,t),s.apply(this,arguments)}return(0,i.Z)(t,[{key:"refreshProfile",value:function(){var e,s=this.props.match.params.userId;if(!s&&!(s=null===(e=this.props.authorizedUserId)||void 0===e?void 0:e.toString()))return this.props.history.push("/login");this.props.getUserProfile(Number(s)),this.props.getStatus(s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,s,t){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,_.jsx)(K,(0,n.Z)((0,n.Z)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(l.Component),ne=(0,se.qC)((0,L.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:$.et,getStatus:$.lR,updateStatus:$.Nf,savePhoto:$.Ju,saveProfile:$.Ii}),X.EN,ee.D)(te)},2932:function(e,s,t){t.d(s,{D:function(){return u}});var n=t(1413),r=t(5987),i=(t(2791),t(1516)),o=t(8687),a=t(184),l=["isAuth"],c=function(e){return{isAuth:e.auth.isAuth}};function u(e){return(0,o.$j)(c)((function(s){var t=s.isAuth,o=(0,r.Z)(s,l);return t?(0,a.jsx)(e,(0,n.Z)({},o)):(0,a.jsx)(i.l_,{to:"/login"})}))}},5298:function(e,s,t){t.d(s,{C:function(){return n},D:function(){return r}});var n=function(e){if(!e)return"Field is required"},r=function(e){return function(s){if(s.length>e)return"Max length is ".concat(e," symbols")}}},9513:function(e,s){s.Z={formControl:"FormControls_formControl__nfj+-",error:"FormControls_error__uAfpp",formSummaryError:"FormControls_formSummaryError__nMr6e",title:"FormControls_title__QTzt1"}},1989:function(e,s,t){e.exports=t.p+"static/media/profile.a3a0d8fbaecf7a807864.png"}}]);
//# sourceMappingURL=130.b96b768c.chunk.js.map