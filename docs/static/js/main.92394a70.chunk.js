(this["webpackJsonp@material-appkit/pwa-starter"]=this["webpackJsonp@material-appkit/pwa-starter"]||[]).push([[1],{103:function(t,e,a){"use strict";e.a=a.p+"static/media/application-logo.024bc40a.svg"},152:function(t,e){},188:function(t){t.exports=JSON.parse('{"en-US":"English","AUTHENTICATING":"Authenticating","EMAIL":"Email","PASSWORD":"Password","SIGN_IN":"Sign in"}')},195:function(t,e,a){"use strict";a.r(e);var n=a(7),o=a(0),i=a.n(o),r=a(10),c=a.n(r),l=a(248),p=a(125),s=a(26),d=a(111),u=a(112),g=a(126),h=a(124),m=a(100),b=a.n(m),j=a(94),f=a.n(j),x=a(14),O=a(83),C=a(244),y=a(67),T=a.n(y),E=a(81),S=a(98);var _=function(t){return Object(n.jsx)(S.a,{})},R=a(63),A=a(47),k=a(120),v=a.n(k);var w=a(50),P=function(t){Object(g.a)(r,t);var e=Object(h.a)(r);function r(t){var o;return Object(d.a)(this,r),(o=e.call(this)).updateAppContext=function(t){var e=o.state.appContext,a=Object(E.filterByKeys)(e,Object.keys(t));if(!f()(a,t)){var n=Object(s.a)(Object(s.a)({},e),t);o.setState({appContext:n})}},o.layoutDidMount=function(t){o.setState({layoutConfig:t})},o.layoutWillUnmount=function(){o.setState({layoutConfig:null})},o.layoutRoutes=[{pathname:A.a.auth.index,Component:i.a.lazy((function(){return a.e(7).then(a.bind(null,299))})),placeholder:Object(n.jsx)(_,{})},{pathname:A.a.index,Component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(4),a.e(8)]).then(a.bind(null,298))})),placeholder:Object(n.jsx)(_,{})}],o.state={layoutConfig:null,appContext:{loadProgress:null,locale:v.a.localValue("locale")||window.navigator.userLanguage||window.navigator.language||"en-US",pageTitle:null,update:o.updateAppContext}},o}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var t={};w.b.forEach((function(e){t[e]=w.c[e].source}));var e=this.state.appContext.locale;w.b[e]||(e=w.a),b.a.init({currentLocale:e,locales:t,fallbackLocale:w.a})}},{key:"render",value:function(){var t=this,e=Object(s.a)(Object(s.a)({},this.state.appContext),{},{breakpoint:this.props.width});return Object(n.jsx)(R.a.Provider,{value:e,children:Object(n.jsx)(x.e,{basename:"/quickstart-create-react-app",history:T.a.history,children:Object(n.jsxs)(O.b,{children:[Object(n.jsxs)(O.a,{children:[Object(n.jsx)("link",{rel:"canonical",href:"https://material-appkit.com/"}),Object(n.jsx)("title",{children:this.pageTitle})]}),Object(n.jsx)(x.g,{children:this.layoutRoutes.map((function(e){return Object(n.jsx)(x.d,{path:e.pathname,render:function(a){return Object(n.jsx)(o.Suspense,{fallback:e.placeholder,children:Object(n.jsx)(e.Component,Object(s.a)(Object(s.a)({onMount:t.layoutDidMount,onUnmount:t.layoutWillUnmount},t.props),a))})}},e.pathname)}))})]})})})}},{key:"pageTitle",get:function(){var t=this.state.appContext.pageTitle,e=[];return t&&(e=Array.isArray(t)?Object(p.a)(t):[t]),e.push("My Application"),e.join(" | ")}}]),r}(i.a.PureComponent),I=Object(C.a)()(P),B=a(247),N=a(245),D=a(82),L=a(121),W=a.n(L),z=a(122),M=a.n(z),U=a(49),F=Object(U.a)(),H=Object(U.a)({overrides:{MuiCssBaseline:{"@global":{html:{width:"100%",height:"100%"},body:{height:"100%",width:"100%","& > #root":{height:"100%"},"-webkitOverflowScrolling":"touch"},".pac-container":{zIndex:F.zIndex.modal+1}}},MuiFormControl:{marginNormal:{marginTop:F.spacing(1)}}},palette:{background:{default:"#fff"},primary:{main:"#3C3B6E"},secondary:{main:"#B22234"},text:{disabled:"rgba(0, 0, 0, 0.55)"}},mixins:{layout:{split:{display:"grid",gridAutoFlow:"column",gridTemplateColumns:"1fr 1fr",gridGap:16},splitStack:{display:"grid",gridAutoFlow:"row",gridTemplateColumns:"1fr",gridGap:16,[F.breakpoints.up("md")]:{gridAutoFlow:"column",gridTemplateColumns:"1fr 1fr"}}},status:{successBgColor:{backgroundColor:F.palette.success.main},infoBgColor:{backgroundColor:F.palette.info.main},warningBgColor:{backgroundColor:F.palette.warning.main},errorBgColor:{backgroundColor:F.palette.error.main},cancelledBgColor:{backgroundColor:F.palette.common.black},successColor:{color:F.palette.success.main},infoColor:{color:F.palette.info.main},warningColor:{color:F.palette.warning.main},errorColor:{color:F.palette.error.main},cancelledColor:{color:F.palette.common.black}},buttons:{deleteButton:{color:F.palette.error.main},linkButton:{minWidth:"initial",padding:0,"&:hover":{backgroundColor:"initial"}}},fullScreenDialog:{dialogTitle:{alignItems:"center",display:"flex",padding:F.spacing(1,2),position:"relative"},heading:{flex:1},dialogContent:{padding:F.spacing(1,2)},dialogActions:{display:"flex",flexDirection:"column",padding:F.spacing(1),[F.breakpoints.up("md")]:{flexDirection:"row"}},commitButton:{[F.breakpoints.up("md")]:{order:1}}},toolbar:{[F.breakpoints.down("md")]:{minHeight:56}},pageTitle:{fontSize:F.typography.pxToRem(24),marginBottom:F.spacing(2)},metadataGrid:{borderBottom:"1px solid ".concat(F.palette.grey[400]),borderTop:"1px solid ".concat(F.palette.grey[400]),paddingBottom:F.spacing(2),paddingTop:F.spacing(2),marginBottom:F.spacing(3),marginTop:F.spacing(2),"& > div:first-child":{[F.breakpoints.down("sm")]:{paddingBottom:F.spacing(2)},[F.breakpoints.up("md")]:{paddingRight:F.spacing(1)}},"& > div:not(:first-child)":{[F.breakpoints.down("sm")]:{borderTop:"1px solid ".concat(F.palette.grey[400]),paddingTop:F.spacing(2)},[F.breakpoints.up("md")]:{borderLeft:"1px solid ".concat(F.palette.grey[400]),paddingLeft:F.spacing(2)}}}},typography:{button:{textTransform:"none"},h1:{fontSize:F.typography.pxToRem(48)},h2:{fontSize:F.typography.pxToRem(24),fontWeight:400},h3:{fontSize:F.typography.pxToRem(20),fontWeight:400},h4:{fontSize:F.typography.pxToRem(18)},h5:{fontSize:F.typography.pxToRem(16),fontWeight:500},h6:{fontSize:F.typography.pxToRem(14)}},topbar:{height:64},sidebar:{width:260},scrollView:{height:"100%",overflow:"auto",width:"100%"},sizes:{navigationController:{navbarHeight:56,toolbarHeight:48}},listDialog:{filterField:{backgroundColor:"#FFF",borderRadius:4,padding:"0 16px",marginBottom:16},paper:{minWidth:320,width:480},progressBar:{height:2}},listView:{list:{padding:0,width:"100%",height:"100%",overflow:"auto"},subheader:{backgroundColor:"#e7e7e7"}},propertyList:{root:{padding:0},listItem:{listItemRoot:{display:"flex",fontSize:F.typography.pxToRem(14),padding:F.spacing(.25,0)},listItemIconRoot:{marginRight:5,minWidth:20},listItemIcon:{height:18,width:18},listItemTextRoot:{margin:0,padding:0},label:{fontWeight:500,marginRight:F.spacing(.5),"&:after":{content:'":"'}},inlineNestedList:{display:"inline-flex","& > *:not(:last-child)":{marginRight:F.spacing(.5),"&:after":{content:'","'}}},nestedListItem:{padding:0,width:"initial"}}},propertyTable:{cell:{fontSize:F.typography.pxToRem(13),padding:"".concat(F.spacing(.5),"px ").concat(F.spacing(1),"px")},table:{tableLayout:"fixed"},labelCell:{fontWeight:500,width:150,[F.breakpoints.up("md")]:{width:300}},rowInteractive:{cursor:"pointer"},rowOdd:{backgroundColor:F.palette.grey[100]},selectionCell:{width:40}}});1===parseInt(Object({NODE_ENV:"production",PUBLIC_URL:"/quickstart-create-react-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_URL_BASENAME:"/quickstart-create-react-app",REACT_APP_SERVICE_WORKER_ENABLED:"1",REACT_APP_TITLE:"My Application"}).REACT_APP_SENTRY_ID)&&l.a({dsn:Object({NODE_ENV:"production",PUBLIC_URL:"/quickstart-create-react-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_URL_BASENAME:"/quickstart-create-react-app",REACT_APP_SERVICE_WORKER_ENABLED:"1",REACT_APP_TITLE:"My Application"}).REACT_APP_SENTRY_ID,environment:Object({NODE_ENV:"production",PUBLIC_URL:"/quickstart-create-react-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_URL_BASENAME:"/quickstart-create-react-app",REACT_APP_SERVICE_WORKER_ENABLED:"1",REACT_APP_TITLE:"My Application"}).REACT_APP_SENTRY_ENVIRONMENT||"production"}),T.a.initialize({}),c.a.render(Object(n.jsx)(N.a,{theme:H,children:Object(n.jsxs)(D.SnackbarProvider,{anchorOrigin:{horizontal:"center",vertical:"top"},autoHideDuration:3e3,children:[Object(n.jsx)(B.a,{}),Object(n.jsx)(M.a,{}),Object(n.jsx)(W.a,{}),Object(n.jsx)(I,{})]})}),document.getElementById("root"))},47:function(t,e,a){"use strict";var n=a(116),o={index:"/",auth:Object(n.include)("/auth",{index:"",login:"/sign-in",forgotPassword:"/forgot-password"})};e.a=o},50:function(t,e,a){"use strict";a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return p}));var n=a(26),o=a(3),i=a.n(o),r={location:i.a.object,match:i.a.object},c=(Object(n.a)(Object(n.a)({},r),{},{history:i.a.object,mountPath:i.a.string,onMount:i.a.func,onUnmount:i.a.func,onUpdate:i.a.func}),"en-US"),l=["en-US"],p={"en-US":{currencyFormat:{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:2},source:a(188)}}},63:function(t,e,a){"use strict";var n=a(0),o=a.n(n);e.a=o.a.createContext({breakpoint:null,loadProgress:null,locale:null,pageTitle:null,update:null})},98:function(t,e,a){"use strict";var n=a(7),o=a(0),i=a(210),r=a(238),c=a(212),l=a(211),p=a(52),s=a(104),d=a(119),u=a.n(d),g=a(117),h=a.n(g),m=a(118),b=a.n(m),j=a(115),f=a.n(j),x=a(26),O=a(92),C=a(76),y=a(239),T=a(241),E=a(242),S=a(209),_=a(243),R=a(103),A=Object(s.a)((function(t){return{drawerMenuButton:{color:t.palette.common.white},drawerModal:{zIndex:"".concat(t.zIndex.appBar+1," !important")},drawerPaper:{backgroundColor:t.palette.grey[50],paddingTop:t.topbar.height,width:t.sidebar.width,zIndex:t.zIndex.appBar},listItemIcon:{marginRight:t.spacing(1),minWidth:"unset"}}}));var k=function(t){var e=A(),a=Object(o.useState)(!1),i=Object(O.a)(a,2),c=i[0],l=i[1],p=t.navLinkArrangement;return Object(n.jsxs)(o.Fragment,{children:[Object(n.jsx)(r.a,{edge:"start",className:e.drawerMenuButton,onClick:function(){return l(!c)},children:Object(n.jsx)("img",{alt:"Application Logo",src:R.a,width:"40"})}),Object(n.jsx)(y.a,{anchor:"left",classes:{modal:e.drawerModal,paper:e.drawerPaper},ModalProps:{keepMounted:!0},open:c,onClose:function(){l(!1)},variant:"temporary",children:Object(n.jsx)(T.a,{disablePadding:!0,children:p.map((function(t){var a={};t.path&&(a.to=t.path,a.component=C.Link);return Object(n.jsxs)(E.a,Object(x.a)(Object(x.a)({button:!0,divider:!0,onClick:function(){l(!1),t.onClick&&t.onClick()}},a),{},{children:[Object(n.jsx)(S.a,{className:e.listItemIcon,children:Object(n.jsx)(t.Icon,{})}),Object(n.jsx)(_.a,{primary:t.title})]}),t.title)}))})})]})},v=a(63),w=a(47),P=Object(s.a)((function(t){return{appBar:{zIndex:t.zIndex.appBar+2,justifyContent:"center",position:"relative"},progressBar:{height:2,left:0,position:"absolute",right:0,top:62},titleContainer:{display:"flex",flexDirection:"column",flex:1},toolBar:{minHeight:t.topbar.height,padding:t.spacing(0,.5,0,2)},appTitle:{fontSize:t.typography.pxToRem(20)},navButton:{color:t.palette.common.white}}})),I=[{title:"Home",path:w.a.index,Icon:h.a},{title:"Sign In",path:w.a.auth.login,Icon:b.a}];function B(t){var e=P(),a=Object(o.useContext)(v.a).loadProgress;return Object(n.jsxs)(i.a,{className:e.appBar,color:"primary",elevation:2,position:"static",children:[Object(n.jsxs)(l.a,{className:e.toolBar,children:[Object(n.jsx)(k,{navLinkArrangement:I}),Object(n.jsx)(p.a,{className:e.appTitle,children:"My Application"}),Object(n.jsx)(f.a,{}),Object(n.jsx)(r.a,{alt:"GitHub Repository",className:e.navButton,href:"https://github.com/material-appkit/quickstart-create-react-app",children:Object(n.jsx)(u.a,{})})]}),null!==a&&Object(n.jsx)(c.a,{className:e.progressBar})]})}B.defaultProps={navLinkArrangement:[]};e.a=B}},[[195,2,3]]]);