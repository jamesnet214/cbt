(this.webpackJsonpsource=this.webpackJsonpsource||[]).push([[0],{139:function(t,e,n){},147:function(t,e,n){},148:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(38),i=n.n(a),o=(n(139),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,224)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))}),s=n(17),d=n(10),l=n(15),j=n(27),u=n(6),b=n(125),x=n(204),h=n(207),f=n(209),p=n(206),O=n(121),m=n.n(O),g=n(120),v=n.n(g),y=n(222),C=n(1);function k(t){var e=t.open,n=t.menuClick;return Object(C.jsx)(y.a,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},onClick:n,children:e?Object(C.jsx)(v.a,{}):Object(C.jsx)(m.a,{})})}var S=n(213);function I(){return Object(C.jsxs)(p.a,{sx:{width:"100%"},children:[Object(C.jsx)(S.a,{variant:"raised",size:"small",color:"link",children:"\uc790\uaca9\uc99d",style:{backgroundColor:"transparent"}}),Object(C.jsx)(S.a,{variant:"raised",size:"small",color:"link",children:"\ud504\ub85c\uadf8\ub798\ubc0d",style:{backgroundColor:"transparent"}})]})}function w(t){var e=t.open,n=t.openChanged;return Object(C.jsx)(h.a,{position:"relative",elevation:1,sx:{zIndex:1e4},children:Object(C.jsxs)(f.a,{variant:"dense",children:[Object(C.jsx)(k,{menuClick:function(){n(!e)}}),Object(C.jsx)(I,{}),Object(C.jsx)(p.a,{sx:{flexGrow:1}}),Object(C.jsx)(p.a,{sx:{display:{xs:"none",md:"flex"}}})]})})}var L=n(194),T=n(211),z=n(5),N=n(129),q=n(191),B=n(215),R=n(202),E=n(40),M=n(214),H=n(101);function V(t){return Object(C.jsx)(N.a,Object(s.a)(Object(s.a)({fontSize:"inherit",style:{width:14,height:14,color:"#333333"}},t),{},{children:Object(C.jsx)("path",{d:"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"})}))}function W(t){return Object(C.jsx)(N.a,Object(s.a)(Object(s.a)({fontSize:"inherit",style:{width:14,height:14,color:"#333333"}},t),{},{children:Object(C.jsx)("path",{d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"})}))}function A(t){return Object(C.jsx)(N.a,Object(s.a)(Object(s.a)({fontSize:"inherit",style:{width:14,height:14,color:"#34568B"}},t),{},{children:Object(C.jsx)("path",{d:"M20 5L20 19L4 19L4 5H20M20 3H4C2.89 3 2 3.89 2 5V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V5C22 3.89 21.11 3 20 3M18 15H6V17H18V15M10 7H6V13H10V7M12 9H18V7H12V9M18 11H12V13H18V11Z"})}))}function F(t){var e=Object(H.useSpring)({from:{opacity:0,transform:"translate3d(20px,0,0)"},to:{opacity:t.in?1:0,transform:"translate3d(".concat(t.in?0:20,"px,0,0)")}});return Object(C.jsx)(H.animated.div,{style:e,children:Object(C.jsx)(M.a,Object(s.a)({},t))})}var P=Object(u.a)((function(t){return Object(C.jsx)(R.a,Object(s.a)(Object(s.a)({},t),{},{TransitionComponent:F}))}))((function(t){var e,n=t.theme;return e={},Object(z.a)(e,"& .".concat(E.a.iconContainer),{"& .close":{opacity:.3}}),Object(z.a)(e,"& .".concat(E.a.group),{marginLeft:15,paddingLeft:0,borderLeft:"1px dashed ".concat(Object(q.a)(n.palette.text.primary,.2))}),Object(z.a)(e,"& .".concat(E.a.content),{"& .MuiTreeItem-label":{paddingTop:"4px",paddingBottom:"4px",paddingLeft:"0px",fontSize:"12px",marginLeft:0,fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),e}));function D(t){var e=c.useState([]),n=Object(d.a)(e,2),r=n[0],a=n[1];c.useEffect((function(){fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/menus.yaml").then((function(t){return t.blob()})).then((function(t){return t.text()})).then((function(t){a(Object(j.a)(t))}))}),[]);var i=Object(l.e)();return Object(C.jsx)(B.a,{defaultExpanded:["1","2","3","4","5"],defaultCollapseIcon:Object(C.jsx)(V,{}),defaultExpandIcon:Object(C.jsx)(W,{}),defaultEndIcon:Object(C.jsx)(A,{}),sx:{height:264,flexGrow:1,maxWidth:400,margin:"0px",overflowY:"auto"},children:function t(e){return r.filter((function(t){return t.parentId===e})).map((function(e){return Object(C.jsx)(P,{onClick:function(t){return function(t,e){"W"===e.type&&i.push("/cbt/id=".concat(e.pageId))}(0,e)},nodeId:e.nodeId.toString(),label:e.label,children:t(e.nodeId.toString())},e.nodeId.toString())}))}("-1")})}var G=n(216),U=n(217),Z=n(218),J=n(219),Y=n(123),K=n.n(Y),Q=Object(u.a)(G.a)({"& .MuiListItemButton-root":{paddingLeft:10,paddingRight:10,backgroundColor:"#fcfcfc"},"& .MuiListItemIcon-root":{minWidth:0,marginRight:5},"& .MuiSvgIcon-root":{fontSize:0}});function X(t){return Object(C.jsx)(Q,{component:"nav",disablePadding:!0,children:Object(C.jsxs)(U.a,{component:"a",href:"#customized-list",children:[Object(C.jsx)(Z.a,{sx:{fontSize:20},children:Object(C.jsx)(K.a,{})}),Object(C.jsx)(J.a,{sx:{my:0},primary:"\ud544\uae30\uc2dc\ud5d8 \uae30\ucd9c\ubb38\uc81c \ubaa9\ub85d",primaryTypographyProps:{fontSize:14,fontWeight:"medium",letterSpacing:0}})]})})}function $(t){var e=t.open;return Object(C.jsxs)(L.a,{sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box",position:"absolute"}},variant:"persistent",anchor:"left",open:e,children:[Object(C.jsx)(X,{}),Object(C.jsx)(T.a,{}),Object(C.jsx)(D,{})]})}n(147);var _=n(198),tt=n(212),et=n(201),nt=n(208),ct=n(210);function rt(t){var e=t.children,n=void 0===e?"Next":e;return Object(C.jsx)(S.a,Object(s.a)(Object(s.a)({},t),{},{children:n,variant:"contained",sx:{mt:1,mr:1}}))}var at=n(220),it=n(193),ot=n(203),st=n(221),dt=n(196),lt=n(200);function jt(t){return Object(C.jsx)(S.a,Object(s.a)(Object(s.a)({},t),{},{children:"Back",sx:{mt:1,mr:1}}))}function ut(t){t.cbtId;var e=t.innings;return t.required(e.filter((function(t){return t.isChecked})).length>0),Object(C.jsx)("div",{style:{backgroundColor:"#ffffff",borderTop:"1px solid #dddddd",borderLeft:"1px solid #dddddd",borderRight:"1px solid #dddddd",borderRadius:0,marginTop:20,marginBottom:20,padding:"0px 0px 0px 0px"},children:e.map((function(n,c){return Object(C.jsx)("div",{style:{borderBottom:"1px solid #eeeeee"},children:Object(C.jsx)(tt.a,{label:Object(C.jsx)(ct.a,{children:n.year+"\ub144 - "+n.inning+"\ud68c",variant:"subtitle2"}),control:Object(C.jsx)(_.a,{defaultChecked:n.isChecked,style:{marginLeft:"20px"},onChange:function(c){return function(n,c){console.log("id: ",n.target.checked),e.filter((function(t){return t.id==c}))[0].isChecked=n.target.checked,console.log("checked:",e.filter((function(t){return t.isChecked})).length),t.required(e.filter((function(t){return t.isChecked})).length>0)}(c,n.id)}})})},n.id)}))})}function bt(t){var e=t.cbtId,n=t.subjects;return t.required(n.filter((function(t){return t.isChecked})).length>0),Object(C.jsx)("div",{style:{backgroundColor:"#ffffff",borderTop:"1px solid #dddddd",borderLeft:"1px solid #dddddd",borderRight:"1px solid #dddddd",borderRadius:0,marginTop:20,marginBottom:20,padding:"0px 0px 0px 0px"},children:n.filter((function(t){return t.testId==e})).map((function(e,c){return Object(C.jsx)("div",{style:{borderBottom:"1px solid #eeeeee"},children:Object(C.jsx)(tt.a,{label:Object(C.jsx)(ct.a,{children:e.subjectName,variant:"subtitle2"}),control:Object(C.jsx)(_.a,{style:{marginLeft:"20px"},defaultChecked:e.isChecked,onChange:function(c){return function(e,c){n.find((function(t){return t.id==c})).isChecked=e.target.checked,t.required(n.filter((function(t){return t.isChecked})).length>0)}(c,e.id)}})})},e.id)}))})}var xt=n(197),ht=n(205);function ft(t){t.cbtId;var e=t.testTypes,n=e.find((function(t){return t.isChecked})).count;return Object(C.jsx)("div",{style:{backgroundColor:"#ffffff",borderTop:"1px solid #dddddd",borderLeft:"1px solid #dddddd",borderRight:"1px solid #dddddd",borderRadius:0,marginTop:20,marginBottom:20,padding:"0px 0px 0px 0px"},children:Object(C.jsx)(ht.a,{"aria-label":"gender",name:"radio-buttons-group",defaultValue:n,onChange:function(t){return function(t){e.map((function(t){return t.isChecked=!1})),e.find((function(e){return e.id==t.target.id})).isChecked=t.target.checked}(t)},children:e.map((function(t,e){return Object(C.jsx)("div",{style:{borderBottom:"1px solid #eeeeee"},children:Object(C.jsx)(tt.a,{label:Object(C.jsx)(ct.a,{children:"(".concat(t.count,") ").concat(t.comment),variant:"subtitle2"}),control:Object(C.jsx)(xt.a,{id:t.id,value:t.count,style:{marginLeft:"20px"}})})},t.id)}))})})}function pt(t){Object(l.f)().search;var e=t.cbtId,n=r.a.useState(0),c=Object(d.a)(n,2),a=c[0],i=c[1],o=r.a.useState(!1),s=Object(d.a)(o,2),j=s[0],u=s[1],b=r.a.useState(!1),x=Object(d.a)(b,2),h=x[0],f=x[1];r.a.useEffect((function(){console.log("cbtstepper useEffect loaded")}));var O=function(){i((function(t){return t+1}))},m=function(){i((function(t){return t-1}))};return Object(C.jsxs)(p.a,{sx:{maxWidth:538},children:[Object(C.jsxs)(lt.a,{activeStep:a,orientation:"vertical",children:[Object(C.jsxs)(at.a,{children:[Object(C.jsx)(dt.a,{children:"\ud68c\ucc28 \uc120\ud0dd"}),Object(C.jsxs)(st.a,{children:[Object(C.jsxs)(p.a,{style:{marginTop:"4px",marginBottom:"14px"},children:[Object(C.jsx)(ct.a,{children:"\ud68c\ucc28\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",variant:"h6"}),Object(C.jsx)(ct.a,{children:"\uc5ec\ub7ec \ud68c\ucc28\ub97c \uc120\ud0dd\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",variant:"caption"})]}),Object(C.jsx)(ut,{cbtId:e,innings:t.innings,required:function(t){u(t),console.log("firstRequired",t)}}),Object(C.jsxs)(p.a,{sx:{mb:2},children:[Object(C.jsx)(rt,{disabled:!j,onClick:function(){O()}}),Object(C.jsx)(jt,{disabled:!0,onClick:m})]})]})]},"1"),Object(C.jsxs)(at.a,{children:[Object(C.jsx)(dt.a,{children:"\uacfc\ubaa9 \uc120\ud0dd"}),Object(C.jsxs)(st.a,{children:[Object(C.jsxs)(p.a,{style:{marginTop:"4px",marginBottom:"14px"},children:[Object(C.jsx)(ct.a,{children:"\uacfc\ubaa9\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",variant:"h6"}),Object(C.jsx)(ct.a,{children:"\uc6d0\ud558\ub294 \uacfc\ubaa9\ub9cc \uc120\ud0dd\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",variant:"caption"})]}),Object(C.jsx)(bt,{cbtId:e,subjects:t.subjects,required:function(t){f(t),console.log("secondRequired",t)}}),Object(C.jsxs)(p.a,{sx:{mb:2},children:[Object(C.jsx)(rt,{disabled:!h,onClick:O}),Object(C.jsx)(jt,{onClick:m})]})]})]},"2"),Object(C.jsxs)(at.a,{children:[Object(C.jsx)(dt.a,{children:"\ubb38\uc81c \ucd9c\uc81c"}),Object(C.jsxs)(st.a,{children:[Object(C.jsxs)(p.a,{style:{marginTop:"4px",marginBottom:"14px"},children:[Object(C.jsx)(ct.a,{children:"\ucd9c\uc81c \ubb38\uc81c \uc720\ud615\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",variant:"h6"}),Object(C.jsx)(ct.a,{children:"\uba87 \ubb38\uc81c\ub97c \ub9cc\ub4e4\uc5b4 \ud14c\uc2a4\ud2b8 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",variant:"caption"})]}),Object(C.jsx)(ft,{cbtId:e,testTypes:t.testTypes}),Object(C.jsxs)(p.a,{sx:{mb:2},children:[Object(C.jsx)(rt,{onClick:O,children:"Finish"}),Object(C.jsx)(jt,{onClick:m})]})]})]},"3")]}),3===a&&Object(C.jsxs)("div",{style:{backgroundColor:"#ffffff",borderTop:"1px solid #dddddd",borderLeft:"1px solid #dddddd",borderRight:"1px solid #dddddd",borderRadius:0,marginTop:20,marginBottom:20,padding:"20px 20px 20px 20px"},children:[function(){var e=t.innings.find((function(t){return t.isChecked})),n=t.innings.filter((function(t){return t.isChecked})).length;return Object(C.jsxs)(it.a,{direction:"row",spacing:1,children:[Object(C.jsx)(ot.a,{size:"small",label:"\ud68c\ucc28",color:"success",variant:"outlined"}),Object(C.jsx)(ct.a,{variant:"body1",children:"".concat(e.year,"\ub144 ").concat(e.inning,"\ud68c")}),Object(C.jsx)(ct.a,{variant:"caption",style:{marginTop:"2px"},children:n>1?" \ud3ec\ud568 ".concat(n,"\ud68c\ucc28"):"\ub2e8\uc77c \ud68c\ucc28"})]})}(),function(){var e=t.subjects.find((function(t){return t.isChecked})),n=t.subjects.filter((function(t){return t.isChecked})).length;return Object(C.jsxs)(it.a,{direction:"row",spacing:1,style:{marginTop:"15px"},children:[Object(C.jsx)(ot.a,{size:"small",label:"\uacfc\ubaa9",color:"success",variant:"outlined"}),Object(C.jsx)(ct.a,{variant:"body1",children:"".concat(e.subjectName)}),Object(C.jsx)(ct.a,{variant:"caption",style:{marginTop:"2px"},children:n>1?" \ud3ec\ud568 ".concat(n,"\uacfc\ubaa9"):"\ub2e8\uc77c \uacfc\ubaa9"})]})}(),function(){var e=t.testTypes.find((function(t){return t.isChecked}));return Object(C.jsxs)(it.a,{direction:"row",spacing:1,style:{marginTop:"15px"},children:[Object(C.jsx)(ot.a,{size:"small",label:"\ucd9c\uc81c",color:"success",variant:"outlined"}),Object(C.jsx)(ct.a,{variant:"body1",children:"\ucd1d ".concat(e.count,"\ubb38\uc81c")}),Object(C.jsx)(ct.a,{variant:"caption",style:{marginTop:"2px"},children:e.comment})]})}(),Object(C.jsx)("br",{}),Object(C.jsx)(S.a,{variant:"contained",size:"small",onClick:t.start,sx:{mt:1,mr:1},children:"\uc2dc\uc791"}),Object(C.jsx)(S.a,{onClick:function(){i(0)},size:"small",sx:{mt:1,mr:1},children:"\ub2e4\uc2dc \uc124\uc815"})]})]})}var Ot=n(124),mt=n.n(Ot);function gt(t){var e=Object(C.jsx)(mt.a,{});return Object(C.jsx)(S.a,Object(s.a)(Object(s.a)({},t),{},{size:"small",variant:"contained",children:"\ub2e4\uc2dc \uc124\uc815",startIcon:e}))}Object(u.a)(nt.a)((function(t){var e=t.theme;return Object(s.a)(Object(s.a)({},e.typography.body2),{},{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary})}));function vt(t){var e=Object(l.e)(),n=r.a.useState(null),c=Object(d.a)(n,2),a=c[0],i=c[1],o=r.a.useState(-1),s=Object(d.a)(o,2),u=(s[0],s[1],r.a.useState([])),b=Object(d.a)(u,2),x=b[0],h=b[1],f=r.a.useState([]),O=Object(d.a)(f,2),m=O[0],g=O[1],v=r.a.useState([]),y=Object(d.a)(v,2),k=y[0],S=y[1],I=r.a.useState(!1),w=Object(d.a)(I,2),L=w[0],T=w[1],z=t.cbtId,N="";function q(t){var e=-1;return t.map((function(t,n){"y"===t.isAnswer&&(e=n+1)})),e}return r.a.useEffect((function(){console.log("cbt useEffect loaded"),fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/0/202101.yaml").then((function(t){return t.blob()})).then((function(t){return t.text()})).then((function(t){i(Object(j.a)(t))})),fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/innings.yaml").then((function(t){return t.blob()})).then((function(t){return t.text()})).then((function(t){console.log("inning loaded",z);var e=Object(j.a)(t).filter((function(t){return t.testId==z}));h(e)})),fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/subjects.yaml").then((function(t){return t.blob()})).then((function(t){return t.text()})).then((function(t){var e=Object(j.a)(t).filter((function(t){return t.testId==z}));g(e)})),fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/testTypes.yaml").then((function(t){return t.blob()})).then((function(t){return t.text()})).then((function(t){var e=Object(j.a)(t).filter((function(t){return t.testId==z}));S(e)}))}),[]),Object(C.jsxs)(p.a,{style:{minWidth:"200px",maxWidth:"600px",borderRight:"1px solid #dddddd",backgroundColor:"#f7f7f7"},children:[Object(C.jsx)("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",borderBottom:"1px solid #dddddd",padding:"14px 24px 14px 24px",position:"sticky",top:0,zIndex:9999},children:Object(C.jsxs)(et.a,{container:!0,children:[Object(C.jsx)(et.a,{xs:!0,children:Object(C.jsx)(ct.a,{variant:"h6",children:t.title})}),Object(C.jsx)(et.a,{children:L?Object(C.jsx)(gt,{onClick:function(){T(!1),e.push("cbt/test/id=".concat(z))}}):null})]})}),L?null:Object(C.jsx)(p.a,{margin:3,children:Object(C.jsx)(pt,{cbtId:z,innings:x,subjects:m,testTypes:k,start:function(){e.push("/cbt/test/id=".concat(z))}})}),L?Object(C.jsx)(p.a,{margin:0,children:null==a?null:a.map((function(t,e){return Object(C.jsxs)(p.a,{children:[N!=t.subjectName?Object(C.jsx)(p.a,{style:{margin:"10px 25px 0px 0px",textAlign:"right"},children:Object(C.jsx)(ct.a,{children:"\uacfc\ubaa9: ".concat((c=t.subjectName,N=c,c)),variant:"caption"})}):null,Object(C.jsxs)("div",{className:"paper-question",variant:"outlined",children:[Object(C.jsx)(p.a,{className:"papar-question-content",children:Object(C.jsx)(ct.a,{variant:"body1",children:"".concat(e+1,". ").concat(t.question)})}),Object(C.jsx)(p.a,{children:null!=t.infos?t.infos.map((function(t,e){return Object(C.jsx)(p.a,{children:Object(C.jsx)(p.a,{className:"papar-question-content",children:Object(C.jsx)("img",{src:t.src,style:{maxWidth:"400px"}})})},e)})):null}),Object(C.jsx)(p.a,{children:(n=t.answers,n.map((function(t,e){return Object(C.jsx)(p.a,{children:Object(C.jsx)(p.a,{className:"papar-answer-content",style:{margin:"0px 15px 0px 15px"},children:Object(C.jsx)(tt.a,{label:Object(C.jsx)(ct.a,{variant:"body2",style:{margin:"2px 0px 0px 0px"},children:"".concat(t.example)},e.toString()),control:Object(C.jsx)(_.a,{defaultChecked:t.isChecked,style:{marginLeft:"0px"},onChange:function(e){t.id}})})})},e)})))}),Object(C.jsx)(p.a,{style:{height:"10px"}}),Object(C.jsx)(p.a,{className:"papar-question-content",style:{display:"none"},children:Object(C.jsxs)(ct.a,{children:["\uc815\ub2f5 ",Object(C.jsx)("span",{style:{color:"#ffffff"},children:q(t.answers)})]})})]})]},t.seq);var n,c}))}):null]})}Object(u.a)(nt.a)((function(t){var e=t.theme;return Object(s.a)(Object(s.a)({},e.typography.body2),{},{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary})}));function yt(t){var e=r.a.useState(null),n=Object(d.a)(e,2),c=n[0],a=n[1],i=r.a.useState(-1),o=Object(d.a)(i,2),s=(o[0],o[1],r.a.useState([])),l=Object(d.a)(s,2),u=(l[0],l[1]),b=r.a.useState([]),x=Object(d.a)(b,2),h=(x[0],x[1]),f=r.a.useState([]),O=Object(d.a)(f,2),m=(O[0],O[1]),g=r.a.useState(!1),v=Object(d.a)(g,2),y=(v[0],v[1]),k=t.cbtId,S="";function I(t){var e=-1;return t.map((function(t,n){"y"===t.isAnswer&&(e=n+1)})),e}return r.a.useEffect((function(){console.log("cbt useEffect loaded"),fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/0/202101.yaml").then((function(t){return t.blob()})).then((function(t){return t.text()})).then((function(t){a(Object(j.a)(t))})),fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/innings.yaml").then((function(t){return t.blob()})).then((function(t){return t.text()})).then((function(t){console.log("inning loaded",k);var e=Object(j.a)(t).filter((function(t){return t.testId==k}));u(e)})),fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/subjects.yaml").then((function(t){return t.blob()})).then((function(t){return t.text()})).then((function(t){var e=Object(j.a)(t).filter((function(t){return t.testId==k}));h(e)})),fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/testTypes.yaml").then((function(t){return t.blob()})).then((function(t){return t.text()})).then((function(t){var e=Object(j.a)(t).filter((function(t){return t.testId==k}));m(e)}))}),[]),Object(C.jsxs)(p.a,{style:{minWidth:"200px",maxWidth:"600px",borderRight:"1px solid #dddddd",backgroundColor:"#f7f7f7"},children:[Object(C.jsx)("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.95)",borderBottom:"1px solid #dddddd",padding:"14px 24px 14px 24px",position:"sticky",top:0,zIndex:9999},children:Object(C.jsxs)(et.a,{container:!0,children:[Object(C.jsx)(et.a,{xs:!0,children:Object(C.jsx)(ct.a,{variant:"h6",children:t.title})}),Object(C.jsx)(et.a,{children:Object(C.jsx)(gt,{onClick:function(){y(!1)}})})]})}),Object(C.jsx)(p.a,{margin:0,children:null==c?null:c.map((function(t,e){return Object(C.jsxs)(p.a,{children:[S!=t.subjectName?Object(C.jsx)(p.a,{style:{margin:"10px 25px 0px 0px",textAlign:"right"},children:Object(C.jsx)(ct.a,{children:"\uacfc\ubaa9: ".concat((c=t.subjectName,S=c,c)),variant:"caption"})}):null,Object(C.jsxs)("div",{className:"paper-question",variant:"outlined",children:[Object(C.jsx)(p.a,{className:"papar-question-content",children:Object(C.jsx)(ct.a,{variant:"body1",children:"".concat(e+1,". ").concat(t.question)})}),Object(C.jsx)(p.a,{children:null!=t.infos?t.infos.map((function(t,e){return Object(C.jsx)(p.a,{children:Object(C.jsx)(p.a,{className:"papar-question-content",children:Object(C.jsx)("img",{src:t.src,style:{maxWidth:"400px"}})})},e)})):null}),Object(C.jsx)(p.a,{children:(n=t.answers,n.map((function(t,e){return Object(C.jsx)(p.a,{children:Object(C.jsx)(p.a,{className:"papar-answer-content",style:{margin:"0px 15px 0px 15px"},children:Object(C.jsx)(tt.a,{label:Object(C.jsx)(ct.a,{variant:"body2",style:{margin:"2px 0px 0px 0px"},children:"".concat(t.example)},e.toString()),control:Object(C.jsx)(_.a,{defaultChecked:t.isChecked,style:{marginLeft:"0px"},onChange:function(e){t.id}})})})},e)})))}),Object(C.jsx)(p.a,{style:{height:"10px"}}),Object(C.jsx)(p.a,{className:"papar-question-content",style:{display:"none"},children:Object(C.jsxs)(ct.a,{children:["\uc815\ub2f5 ",Object(C.jsx)("span",{style:{color:"#ffffff"},children:I(t.answers)})]})})]})]},t.seq);var n,c}))})]})}function Ct(t){return Object(C.jsx)("div",{children:"Dashboard"})}var kt=Object(b.a)({palette:{primary:{main:"#56dbc5"},secondary:{main:"#f5d142"}}});function St(t){var e=c.useState(!1),n=Object(d.a)(e,2),r=n[0],a=n[1],i=c.useState(null),o=Object(d.a)(i,2),b=o[0],h=o[1];c.useEffect((function(){null==b&&fetch("https://raw.githubusercontent.com/devncore/cbt/main/data/titles.yaml").then((function(t){return t.blob()})).then((function(t){return t.text()})).then((function(t){h(Object(j.a)(t)),console.log("load titles")}))}));function f(t){return null!=b?(console.log("getName: ",t),b.filter((function(e){return e.id.toString()==t.toString()}))[0].title):"..."}var p=Object(u.a)("main",{shouldForwardProp:function(t){return"open"!==t}})((function(t){var e=t.theme,n=t.open;return Object(s.a)({overflowY:"scroll",flexGrow:1,padding:e.spacing(0),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:"-".concat(240,"px")},n&&{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0})})),O=function(t){return Object(C.jsx)(vt,{cbtId:t,title:f(t)})};return Object(C.jsx)(x.a,{theme:kt,children:Object(C.jsx)("div",{className:"root",children:Object(C.jsxs)("div",{className:"drawerDiv",children:[Object(C.jsx)(w,{open:r,openChanged:function(t){a(t)},style:{zIndex:9999}}),Object(C.jsxs)("div",{className:"frame",children:[Object(C.jsx)($,{open:r}),Object(C.jsxs)(p,{open:r,children:[Object(C.jsx)(l.a,{path:"/cbt/id=0",render:function(){return O("0")}}),Object(C.jsx)(l.a,{path:"/cbt/id=1",render:function(){return O("1")}}),Object(C.jsx)(l.a,{path:"/cbt/id=2",render:function(){return O("2")}}),Object(C.jsx)(l.a,{path:"/cbt/id=3",render:function(){return O("3")}}),Object(C.jsx)(l.a,{path:"/cbt/id=4",render:function(){return O("4")}}),Object(C.jsx)(l.a,{path:"/cbt/id=5",render:function(){return O("5")}}),Object(C.jsx)(l.a,{path:"/cbt/id=6",render:function(){return O("6")}}),Object(C.jsx)(l.a,{path:"/cbt/id=7",render:function(){return O("7")}}),Object(C.jsx)(l.a,{path:"/cbt/test/id=0",render:function(){return t="0",console.log("getCbtTest"),Object(C.jsx)(yt,{cbtId:t,title:f(t)});var t}}),Object(C.jsx)(l.a,{path:"/dashboard",component:Ct})]})]})]})})})}var It=n(47);i.a.render(Object(C.jsx)(It.a,{basename:"/cbt",children:Object(C.jsx)(St,{})}),document.getElementById("root")),o()}},[[148,1,2]]]);
//# sourceMappingURL=main.e2a07b1a.chunk.js.map