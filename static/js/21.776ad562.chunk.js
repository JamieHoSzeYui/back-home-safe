(this["webpackJsonpback-home-safe"]=this["webpackJsonpback-home-safe"]||[]).push([[21],{484:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var a,c,i=t(3),r=(t(0),t(56)),o=t(4),l=t.p+"static/media/back.7bf7a56f.svg",s=t(1),b=function(e){var n=e.name,t=e.backPath;return Object(s.jsxs)(j,{children:[t&&Object(s.jsx)(r.b,{to:t,children:Object(s.jsx)(d,{src:l})}),n]})},d=o.b.img(a||(a=Object(i.a)(["\n  height: 20px;\n  top: 14px;\n  left: 16px;\n  position: absolute;\n"]))),j=o.b.div(c||(c=Object(i.a)(["\n  color: #ffffff;\n  background-color: #12b188;\n  text-align: center;\n  line-height: 48px;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);\n  flex-shrink: 0;\n"])))},659:function(e,n,t){"use strict";t.r(n);var a,c,i,r,o,l,s,b,d,j,u,h,g,f,O,x,m,p,v=t(3),y=t(6),C=t(561),E=t(623),w=t(562),k=t(519),Z=t(624),I=t(563),R=t.n(I),S=t(514),z=t(560),D=t(0),L=t.n(D),P=t(446),_=t(622),q=t(4),F=t.p+"static/media/realIcon.2230efc1.png",M=t(484),W=t(100),A=t(84),H=t(175),J=t(152),T=t(1),U=function(e){var n=e.data,t=e.onLeave,a=Object(D.useRef)(null);return Object(D.useEffect)((function(){if(a.current){var e=Object(W.c)(n);new S.a({image:a.current,content:e,width:380,logo:{src:n.customImg||F,logoRadius:8,borderSize:0}}).toImage()}}),[n]),n?Object(T.jsxs)(B,{children:[Object(T.jsx)(K,{children:Object(T.jsx)(Q,{src:J.a,onClick:t})}),Object(T.jsx)(N,{children:Object(T.jsxs)(G,{children:[n.nameEn&&!Object(A.a)(n.nameZh)&&Object(T.jsx)(Y,{value:n.nameZh||"",readOnly:!0}),n.nameEn&&!Object(A.a)(n.nameEn)&&Object(T.jsx)(Y,{value:n.nameEn||"",readOnly:!0})]})}),Object(T.jsx)(V,{children:Object(T.jsx)(X,{children:Object(T.jsx)($,{ref:a,alt:"qrCode"})})}),Object(T.jsxs)(ee,{children:[n.addressZh&&!Object(A.a)(n.addressZh)&&Object(T.jsx)("div",{children:n.addressZh}),n.addressEn&&!Object(A.a)(n.addressEn)&&Object(T.jsx)("div",{children:n.addressEn})]})]}):Object(T.jsx)(T.Fragment,{})},B=q.b.div(a||(a=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n  background-color: #12b188;\n  position: absolute;\n"]))),K=q.b.div(c||(c=Object(v.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-shrink: 0;\n"]))),Q=q.b.img(i||(i=Object(v.a)(["\n  height: 20px;\n  margin: 24px;\n"]))),Y=Object(q.b)(H.a)(r||(r=Object(v.a)(["\n  font-size: 20px;\n  line-height: 20px;\n  text-shadow: none;\n"]))),G=q.b.div(o||(o=Object(v.a)(["\n  padding: 0 32px;\n"]))),N=q.b.div(l||(l=Object(v.a)(["\n  width: 100%;\n  height: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),V=q.b.div(s||(s=Object(v.a)(["\n  height: 100%;\n  width: 100%;\n  text-align: center;\n"]))),X=q.b.div(b||(b=Object(v.a)(["\n  height: 100%;\n  max-height: 280px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),$=q.b.img(d||(d=Object(v.a)(["\n  display: inline-block;\n  height: 100%;\n  max-height: 300px;\n  margin: 0 auto;\n"]))),ee=q.b.div(j||(j=Object(v.a)(["\n  width: 100%;\n  height: 50%;\n  text-align: center;\n"]))),ne=(n.default=function(){var e=Object(P.a)("qr_generator").t,n=Object(D.useRef)(null),t=L.a.useRef(null),a=Object(D.useState)(!1),c=Object(y.a)(a,2),i=c[0],r=c[1],o=Object(D.useState)(null),l=Object(y.a)(o,2),s=l[0],b=l[1],d=Object(_.a)({typeEn:"Stores/Shopping Malls",typeZh:"\u5546\u5e97/\u5546\u5834",nameEn:"CityWalk",nameZh:"\u8343\u65b0\u5929\u5730",type:"IMPORT",venueCode:"0",venueID:"WHBvLDSa",addressEn:"1 & 18 Yeung Uk Rd, Tsuen Wan, Hong Kong",addressZh:"\u8343\u7063\u694a\u5c4b\u90531\u865f",customImg:null}),j=Object(y.a)(d,2),u=j[0],h=j[1],g=1===u.venueCode.length,f=8===u.venueID.length,O=g&&f;Object(D.useEffect)((function(){if(n.current&&O){var e=Object(W.c)(u),t=new S.a({image:n.current,content:e,width:380,logo:{src:u.customImg||F,logoRadius:8,borderSize:0}});t.toImage(),b(t)}}),[u,O]);return Object(T.jsxs)(ne,{children:[Object(T.jsx)(M.a,{backPath:"/",name:e("name")}),Object(T.jsxs)(te,{id:"scroll",children:[Object(T.jsxs)(ae,{children:[Object(T.jsx)(ce,{label:e("form.typeZh"),value:u.typeZh,onChange:function(e){h({typeZh:e.target.value})}}),Object(T.jsx)(ce,{label:e("form.typeEn"),value:u.typeEn,onChange:function(e){h({typeEn:e.target.value})}}),Object(T.jsx)(ce,{label:e("form.nameZh"),value:u.nameZh,onChange:function(e){h({nameZh:e.target.value})}}),Object(T.jsx)(ce,{label:e("form.nameEn"),value:u.nameEn,onChange:function(e){h({nameEn:e.target.value})}}),Object(T.jsx)(ce,{label:e("form.addressZh"),value:u.addressZh,onChange:function(e){h({addressZh:e.target.value})}}),Object(T.jsx)(ce,{label:e("form.addressEn"),value:u.addressEn,onChange:function(e){h({addressEn:e.target.value})}}),Object(T.jsx)(ce,{label:e("form.type"),value:u.type,onChange:function(e){h({type:e.target.value})}}),Object(T.jsx)(ce,{label:e("form.venue_code"),value:u.venueCode,onChange:function(e){h({venueCode:e.target.value})},error:!g,inputProps:{maxLength:1}}),Object(T.jsx)(ce,{label:e("form.venue_id"),value:u.venueID,onChange:function(e){h({venueID:e.target.value})},error:!f,inputProps:{maxLength:8}}),Object(T.jsxs)(ie,{children:[Object(T.jsx)("div",{children:e("form.custom_icon")}),Object(T.jsx)(re,{type:"file",name:"avatar",accept:"image/png, image/jpeg",ref:t,onChange:function(e){var n=Array.from(e.target.files||[]),t=Object(z.a)(n);if(t){var a=new FileReader;a.readAsDataURL(t),a.onload=function(){return h({customImg:String(a.result)})}}else h({customImg:null})}})]})]}),Object(T.jsx)(C.a,{}),Object(T.jsx)(le,{children:Object(T.jsxs)(E.a,{"aria-label":"outlined primary button group",children:[Object(T.jsx)(w.a,{variant:"contained",size:"small",startIcon:Object(T.jsx)(R.a,{}),onClick:function(){s&&s.downloadImage("QR Code")},disabled:!O,children:e("global:button.save")}),Object(T.jsx)(w.a,{variant:"contained",size:"small",startIcon:Object(T.jsx)(R.a,{}),onClick:function(){r(!0)},disabled:!O,children:e("global:button.preview")})]})}),Object(T.jsx)(oe,{ref:n,alt:"qrCode"})]}),i&&Object(T.jsx)(U,{data:u,onLeave:function(){r(!1)}})]})},q.b.div(u||(u=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n"])))),te=q.b.div(h||(h=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n"]))),ae=Object(q.b)(k.a)(g||(g=Object(v.a)(["\n  padding: 8px 16px;\n"]))),ce=Object(q.b)(Z.a)(f||(f=Object(v.a)(["\n  &.MuiFormControl-root {\n    margin-top: 8px;\n  }\n"]))),ie=q.b.div(O||(O=Object(v.a)(["\n  font-size: 12px;\n  padding: 4px 0;\n  color: rgba(0, 0, 0, 0.54);\n"]))),re=q.b.input(x||(x=Object(v.a)(["\n  padding: 4px 0;\n"]))),oe=q.b.img(m||(m=Object(v.a)(["\n  width: 100%;\n"]))),le=q.b.div(p||(p=Object(v.a)(["\n  margin-top: 16px;\n  display: flex;\n  justify-content: center;\n"])))}}]);
//# sourceMappingURL=21.776ad562.chunk.js.map