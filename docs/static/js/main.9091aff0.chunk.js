(this["webpackJsonp@material-appkit/pwa-starter"]=this["webpackJsonp@material-appkit/pwa-starter"]||[]).push([[2],{102:function(e,t,n){"use strict";t.a=n.p+"static/media/application-logo.024bc40a.svg"},111:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(){return a.default.createElement("div",{style:{flexGrow:1}})}},114:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=j(n(4)),i=j(n(2)),u=j(n(0)),c=j(n(123)),l=j(n(188)),s=j(n(185)),f=j(n(184)),p=j(n(186)),d=j(n(187)),y=j(n(45)),g=n(39),b=j(n(132)),m=j(n(179)),h=j(n(180)),v=j(n(181));function j(e){return e&&e.__esModule?e:{default:e}}var O={confirm:m.default,error:b.default,info:h.default,warn:v.default},x=(0,g.makeStyles)((function(e){return{dialogContent:{display:"flex",padding:e.spacing(1,2)},dialogTitleHeading:{fontSize:e.typography.pxToRem(18)},dialogContentText:{fontSize:e.typography.pxToRem(16),marginTop:e.spacing(1)},titleIcon:{fontSize:e.typography.pxToRem(40),marginRight:e.spacing(1),"&.info":e.mixins.status.infoColor,"&.warn":e.mixins.status.warningColor,"&.error":e.mixins.status.errorColor}}}));function k(e){var t=e.alertInfo,n=e.onDismiss,r=x(),o=function(){n(!1,t)},i=function(){n(!0,t)},g=O[t.type];return u.default.createElement(l.default,{disableBackdropClick:!0,fullWidth:!0,maxWidth:"sm",open:!0,onKeyPress:function(e){"Enter"===e.key&&i()},onEscapeKeyDown:function(){"confirm"===t.type&&o()}},t.title&&u.default.createElement(d.default,{disableTypography:!0},u.default.createElement(y.default,{component:"h2",className:r.dialogTitleHeading},t.title)),u.default.createElement(f.default,{className:r.dialogContent},u.default.createElement(g,{className:(0,a.default)([r.titleIcon,t.type])}),t.description&&u.default.createElement(p.default,{className:r.dialogContentText},t.description)),u.default.createElement(s.default,null,"confirm"===t.type&&u.default.createElement(c.default,{onClick:function(){return o()}},t.cancelButtonTitle||"Cancel"),u.default.createElement(c.default,{color:"primary",onClick:function(){return i()}},t.confirmButtonTitle||"OK")))}k.propTypes={alertInfo:i.default.object.isRequired,onDismiss:i.default.func.isRequired};var w=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.__enqueueAlert=function(e){var t=new Map(n.state.queue);t.set(e.key,e),n.setState({queue:t})},n.handleAlertDialogDismiss=function(e,t){"function"===typeof t.onDismiss&&t.onDismiss(e);var r=new Map(n.state.queue);r.delete(t.key),n.setState({queue:r})},n.state={queue:new Map},t.__instance=n,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this,t=[];return this.state.queue.forEach((function(n){t.push(u.default.createElement(k,{alertInfo:n,key:n.key,onDismiss:e.handleAlertDialogDismiss}))})),t}}],[{key:"enqueueAlert",value:function(e,n){t.__instance.__enqueueAlert(r({},e,{type:n,key:(new Date).getTime()}))}},{key:"info",value:function(e){this.enqueueAlert(e,"info")}},{key:"warn",value:function(e){this.enqueueAlert(e,"warn")}},{key:"error",value:function(e){this.enqueueAlert(e,"error")}},{key:"confirm",value:function(e){this.enqueueAlert(e,"confirm")}}]),t}(u.default.PureComponent);t.default=w},130:function(e,t,n){"use strict";var r=n(48);Object.defineProperty(t,"arrayToObject",{enumerable:!0,get:function(){return o.arrayToObject}}),Object.defineProperty(t,"chunk",{enumerable:!0,get:function(){return o.chunk}}),Object.defineProperty(t,"findObject",{enumerable:!0,get:function(){return o.findObject}}),Object.defineProperty(t,"makeChoices",{enumerable:!0,get:function(){return o.makeChoices}}),Object.defineProperty(t,"removeObject",{enumerable:!0,get:function(){return o.removeObject}}),Object.defineProperty(t,"replaceObject",{enumerable:!0,get:function(){return o.replaceObject}}),Object.defineProperty(t,"shuffle",{enumerable:!0,get:function(){return o.shuffle}}),Object.defineProperty(t,"valueForKeyPath",{enumerable:!0,get:function(){return o.valueForKeyPath}});var o=r(n(168))},147:function(e,t){},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isValue=function(e){return void 0!==e&&null!==e&&""!==e&&!Number.isNaN(e)},t.isSet=function(e){return void 0!==e&&null!==e}},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterByKeys=function(e,t){var n={};return Object.keys(e).forEach((function(r){-1!==t.indexOf(r)&&(n[r]=e[r])})),n},t.filterExcludeKeys=function(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n},t.filterEmptyValues=function(e){var t={};for(var n in e)(0,r.isValue)(e[n])&&(t[n]=e[n]);return t},t.objectToArray=function(e){return Object.keys(e).reduce((function(t,n){return t.push({key:n,value:e[n]}),t}),[])},t.valueForKeyPath=function(e,t){var n=t.split("."),r=e;for(;n.length;){var a=n.shift();if(null===r||void 0===r||!1===r.hasOwnProperty(a))return null;if(Array.isArray(r[a]))return(0,o.valueForKeyPath)(r[a],n.join("."));r=r[a]}return r},t.setValueForKeyPath=function(e,t,n){var r=e,o=t.split("."),a=void 0;for(;void 0!==(a=o.shift());)r[a]||(r[a]={}),o.length?r=r[a]:r[a]=n};var r=n(93),o=n(130)},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.arrayToObject=function(e,t){return e.reduce((function(e,n){return e[n[t]]=n,e}),{})},t.chunk=function(e,t){for(var n=[],r=0,o=e.length;r<o;r+=t)n.push(e.slice(r,r+t));return n},t.findObject=function(e,t,n){return e.find((function(e){return e[t]===n}))},t.makeChoices=function(e,t,n){return e.map((function(e){var r;return o(r={},t||"value",e[0]),o(r,n||"label",e[1]),r}))},t.removeObject=function(e,t,n){for(var r=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e)),o=r.length-1;o>=0;--o)r[o][t]===n&&r.splice(o,1);return r},t.replaceObject=function(e,t,n){var r=e.findIndex((function(e){return e[t]===n[t]}));-1!==r&&(e[r]=n)},t.shuffle=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*t),r=e[t];e[t]=e[n],e[n]=r}},t.valueForKeyPath=function(e,t){return e.map((function(e){return(0,r.valueForKeyPath)(e,t)}))};var r=n(72);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.include=function e(t,n){var r={toString:function(){return t}};return Object.keys(n).forEach((function(a){var i=n[a];"function"===typeof i&&"toString"===a?r.toString=function(){return t+n.toString()}:"object"===("undefined"===typeof i?"undefined":o(i))?r[a]=e(t,i):r[a]=[t,i].filter((function(e){return e})).join("/").replace("//","/")})),r},t.lastPathComponent=function(e){var t=e.split("/"),n=t.length;if(!n)return null;return t[n-1]};var o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return"undefined"===typeof e?"undefined":r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":"undefined"===typeof e?"undefined":r(e)}},176:function(e,t,n){"use strict";var r=n(48);Object.defineProperty(t,"storageOfType",{enumerable:!0,get:function(){return o.storageOfType}}),Object.defineProperty(t,"storageAvailable",{enumerable:!0,get:function(){return o.storageAvailable}});var o=r(n(177))},177:function(e,t,n){"use strict";function r(e){try{return window[e]}catch(t){return null}}Object.defineProperty(t,"__esModule",{value:!0}),t.storageOfType=r,t.storageAvailable=function(e){var t=r(e);if(null===t)return!1;try{var n="__storage_test__";return t.setItem(n,n),t.removeItem(n),!0}catch(o){return o instanceof DOMException&&(22===o.code||1014===o.code||"QuotaExceededError"===o.name||"NS_ERROR_DOM_QUOTA_REACHED"===o.name)&&t&&0!==t.length}}},178:function(e){e.exports=JSON.parse('{"en-US":"English","AUTHENTICATING":"Authenticating","EMAIL":"Email","EMAIL_ADDRESS":"E-mail Address","FORGOT_PASSWORD":"Forgot Password","PASSWORD":"Password","REQUEST_PASSWORD_RESET":"Request Password Reset","REQUESTING_PASSWORD_RESET":"Requesting Password Reset...","SIGN_IN":"Sign in"}')},183:function(e,t,n){"use strict";n.r(t);var r=n(6),o=n(0),a=n.n(o),i=n(9),u=n.n(i),c=n(116),l=n(21),s=n(107),f=n(108),p=n(117),d=n(115),y=n(91),g=n.n(y),b=n(100),m=n.n(b),h=n(11),v=n(75),j=n(196),O=n(55),x=n.n(O),k=n(72),w=n(99);var P=function(e){return Object(r.jsx)(w.a,{})},C=n(54),_=n(37),S=n(98),T=n.n(S);var E=n(40),R=function(e){Object(p.a)(i,e);var t=Object(d.a)(i);function i(e){var o;return Object(s.a)(this,i),(o=t.call(this)).updateAppContext=function(e){var t=o.state.appContext,n=Object(k.filterByKeys)(t,Object.keys(e));if(!m()(n,e)){var r=Object(l.a)(Object(l.a)({},t),e);o.setState({appContext:r})}},o.layoutDidMount=function(e){o.setState({layoutConfig:e})},o.layoutWillUnmount=function(){o.setState({layoutConfig:null})},o.layoutRoutes=[{pathname:_.a.auth.index,Component:a.a.lazy((function(){return n.e(12).then(n.bind(null,328))})),placeholder:Object(r.jsx)(P,{})},{pathname:_.a.index,Component:a.a.lazy((function(){return Promise.all([n.e(1),n.e(7),n.e(8)]).then(n.bind(null,339))})),placeholder:Object(r.jsx)(P,{})}],o.state={layoutConfig:null,appContext:{loadProgress:null,locale:T.a.localValue("locale")||window.navigator.userLanguage||window.navigator.language||"en-US",pageTitle:null,update:o.updateAppContext}},o}return Object(f.a)(i,[{key:"componentDidMount",value:function(){var e={};E.c.forEach((function(t){e[t]=E.d[t].source}));var t=this.state.appContext.locale;E.c[t]||(t=E.a),g.a.init({currentLocale:t,locales:e,fallbackLocale:E.a})}},{key:"render",value:function(){var e=this,t=Object(l.a)(Object(l.a)({},this.state.appContext),{},{breakpoint:this.props.width});return Object(r.jsx)(C.a.Provider,{value:t,children:Object(r.jsx)(h.e,{basename:"/quickstart-create-react-app",history:x.a.history,children:Object(r.jsxs)(v.b,{children:[Object(r.jsxs)(v.a,{children:[Object(r.jsx)("link",{rel:"canonical",href:"https://material-appkit.com/"}),Object(r.jsx)("title",{children:this.pageTitle})]}),Object(r.jsx)(h.g,{children:this.layoutRoutes.map((function(t){return Object(r.jsx)(h.d,{path:t.pathname,render:function(n){return Object(r.jsx)(o.Suspense,{fallback:t.placeholder,children:Object(r.jsx)(t.Component,Object(l.a)(Object(l.a)({onMount:e.layoutDidMount,onUnmount:e.layoutWillUnmount},e.props),n))})}},t.pathname)}))})]})})})}},{key:"pageTitle",get:function(){var e=this.state.appContext.pageTitle,t=[];return e&&(t=Array.isArray(e)?Object(c.a)(e):[e]),t.push("My Application"),t.join(" | ")}}]),i}(a.a.PureComponent),A=Object(j.a)()(R),I=n(233),B=n(232),M=n(74),D=n(114),z=n.n(D),F=n(85),q=n.n(F),N=n(42),U=Object(N.a)(),L=Object(N.a)({overrides:{MuiCssBaseline:{"@global":{html:{width:"100%",height:"100%"},body:{height:"100%",width:"100%","& > #root":{height:"100%"},"-webkitOverflowScrolling":"touch"},".pac-container":{zIndex:U.zIndex.modal+1}}},MuiFormControl:{marginNormal:{marginTop:U.spacing(1)}}},palette:{background:{default:"#fff"},primary:{main:"#3C3B6E"},secondary:{main:"#B22234"},text:{disabled:"rgba(0, 0, 0, 0.55)"}},mixins:{layout:{split:{display:"grid",gridAutoFlow:"column",gridTemplateColumns:"1fr 1fr",gridGap:16},splitStack:{display:"grid",gridAutoFlow:"row",gridTemplateColumns:"1fr",gridGap:16,[U.breakpoints.up("md")]:{gridAutoFlow:"column",gridTemplateColumns:"1fr 1fr"}}},status:{successBgColor:{backgroundColor:U.palette.success.main},infoBgColor:{backgroundColor:U.palette.info.main},warningBgColor:{backgroundColor:U.palette.warning.main},errorBgColor:{backgroundColor:U.palette.error.main},cancelledBgColor:{backgroundColor:U.palette.common.black},successColor:{color:U.palette.success.main},infoColor:{color:U.palette.info.main},warningColor:{color:U.palette.warning.main},errorColor:{color:U.palette.error.main},cancelledColor:{color:U.palette.common.black}},buttons:{deleteButton:{color:U.palette.error.main},linkButton:{minWidth:"initial",padding:0,"&:hover":{backgroundColor:"initial"}}},fullScreenDialog:{dialogTitle:{alignItems:"center",display:"flex",padding:U.spacing(1,2),position:"relative"},heading:{flex:1},dialogContent:{padding:U.spacing(1,2)},dialogActions:{display:"flex",flexDirection:"column",padding:U.spacing(1),[U.breakpoints.up("md")]:{flexDirection:"row"}},commitButton:{[U.breakpoints.up("md")]:{order:1}}},toolbar:{[U.breakpoints.down("md")]:{minHeight:56}},pageTitle:{fontSize:U.typography.pxToRem(24),marginBottom:U.spacing(2)},metadataGrid:{borderBottom:"1px solid ".concat(U.palette.grey[400]),borderTop:"1px solid ".concat(U.palette.grey[400]),paddingBottom:U.spacing(2),paddingTop:U.spacing(2),marginBottom:U.spacing(3),marginTop:U.spacing(2),"& > div:first-child":{[U.breakpoints.down("sm")]:{paddingBottom:U.spacing(2)},[U.breakpoints.up("md")]:{paddingRight:U.spacing(1)}},"& > div:not(:first-child)":{[U.breakpoints.down("sm")]:{borderTop:"1px solid ".concat(U.palette.grey[400]),paddingTop:U.spacing(2)},[U.breakpoints.up("md")]:{borderLeft:"1px solid ".concat(U.palette.grey[400]),paddingLeft:U.spacing(2)}}}},typography:{button:{textTransform:"none"},h1:{fontSize:U.typography.pxToRem(48)},h2:{fontSize:U.typography.pxToRem(24),fontWeight:400},h3:{fontSize:U.typography.pxToRem(20),fontWeight:400},h4:{fontSize:U.typography.pxToRem(18)},h5:{fontSize:U.typography.pxToRem(16),fontWeight:500},h6:{fontSize:U.typography.pxToRem(14)}},topbar:{height:64},sidebar:{width:260},scrollView:{height:"100%",overflow:"auto",width:"100%"},sizes:{navigationController:{navbarHeight:56,toolbarHeight:48}},listDialog:{filterField:{backgroundColor:"#FFF",borderRadius:4,padding:"0 16px",marginBottom:16},paper:{minWidth:320,width:480},progressBar:{height:2}},listView:{list:{padding:0,width:"100%",height:"100%",overflow:"auto"},subheader:{backgroundColor:"#e7e7e7"}},propertyList:{root:{padding:0},listItem:{listItemRoot:{display:"flex",fontSize:U.typography.pxToRem(14),padding:U.spacing(.25,0)},listItemIconRoot:{marginRight:5,minWidth:20},listItemIcon:{height:18,width:18},listItemTextRoot:{margin:0,padding:0},label:{fontWeight:500,marginRight:U.spacing(.5),"&:after":{content:'":"'}},inlineNestedList:{display:"inline-flex","& > *:not(:last-child)":{marginRight:U.spacing(.5),"&:after":{content:'","'}}},nestedListItem:{padding:0,width:"initial"}}},propertyTable:{cell:{fontSize:U.typography.pxToRem(13),padding:"".concat(U.spacing(.5),"px ").concat(U.spacing(1),"px")},table:{tableLayout:"fixed"},labelCell:{fontWeight:500,width:150,[U.breakpoints.up("md")]:{width:300}},rowInteractive:{cursor:"pointer"},rowOdd:{backgroundColor:U.palette.grey[100]},selectionCell:{width:40}}});x.a.initialize({}),u.a.render(Object(r.jsx)(B.a,{theme:L,children:Object(r.jsxs)(M.SnackbarProvider,{anchorOrigin:{horizontal:"center",vertical:"top"},autoHideDuration:3e3,children:[Object(r.jsx)(I.a,{}),Object(r.jsx)(q.a,{}),Object(r.jsx)(z.a,{}),Object(r.jsx)(A,{})]})}),document.getElementById("root"))},37:function(e,t,n){"use strict";var r=n(78),o={index:"",dashboard:"/dashboard",auth:Object(r.include)("/auth",{index:"",login:"/sign-in",forgotPassword:"forgot-password",passwordResetMailSent:"forgot-password/mail-sent"}),forex:Object(r.include)("/forex",{index:"",currency:"/:currency"})};t.a=o},40:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return s}));var r=n(21),o=n(2),a=n.n(o),i={location:a.a.object,match:a.a.object},u="https://api.exchangeratesapi.io",c=(Object(r.a)(Object(r.a)({},i),{},{history:a.a.object,mountPath:a.a.string,onMount:a.a.func,onUnmount:a.a.func,onUpdate:a.a.func}),"en-US"),l=["en-US"],s={"en-US":{currencyFormat:{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:2},source:n(178)}}},54:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=o.a.createContext({breakpoint:null,loadProgress:null,locale:null,pageTitle:null,update:null})},55:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(125),u=(r=i)&&r.__esModule?r:{default:r},c=n(23),l=n(93);var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,null,[{key:"initialize",value:function(e){var t=e.basename||"/quickstart-create-react-app";this.history=(0,c.createBrowserHistory)({basename:t})}},{key:"reloadWindow",value:function(){window.location.reload()}},{key:"setUrlParams",value:function(e,t,n,r){var o=this.currentLocation,a=e||u.default.parse(o.search),i={};Object.keys(a).forEach((function(e){var t=a[e];(0,l.isSet)(t)&&(i[e]=t)}));var c=o.pathname,s=(t||c)+"?"+u.default.stringify(i);n?this.history.replace(s,r):this.history.push(s,r)}},{key:"updateUrlParams",value:function(e,t){var n=o({},this.qsParams,e);this.setUrlParams(n,null,t)}},{key:"updateUrlParam",value:function(e,t,n){this.updateUrlParams(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,t),n)}},{key:"clearUrlParams",value:function(e,t){var n=o({},this.qsParams);e.forEach((function(e){n[e]=null})),this.setUrlParams(n,null,t)}},{key:"navigate",value:function(e,t,n,r){this.setUrlParams(t||{},e,n,r)}},{key:"goBack",value:function(){this.history.goBack()}},{key:"currentLocation",get:function(){return this.history.location}},{key:"qsParams",get:function(){return u.default.parse(this.currentLocation.search)}}]),e}();s.history=null,t.default=s},72:function(e,t,n){"use strict";var r=n(48);Object.defineProperty(t,"filterByKeys",{enumerable:!0,get:function(){return o.filterByKeys}}),Object.defineProperty(t,"filterExcludeKeys",{enumerable:!0,get:function(){return o.filterExcludeKeys}}),Object.defineProperty(t,"filterEmptyValues",{enumerable:!0,get:function(){return o.filterEmptyValues}}),Object.defineProperty(t,"objectToArray",{enumerable:!0,get:function(){return o.objectToArray}}),Object.defineProperty(t,"valueForKeyPath",{enumerable:!0,get:function(){return o.valueForKeyPath}}),Object.defineProperty(t,"setValueForKeyPath",{enumerable:!0,get:function(){return o.setValueForKeyPath}});var o=r(n(167))},78:function(e,t,n){"use strict";var r=n(48);Object.defineProperty(t,"include",{enumerable:!0,get:function(){return o.include}}),Object.defineProperty(t,"lastPathComponent",{enumerable:!0,get:function(){return o.lastPathComponent}});var o=r(n(174))},85:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=(r=a)&&r.__esModule?r:{default:r},u=n(74);var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.__notify=function(e){n.props.enqueueSnackbar(e.message,{variant:e.variant})},t.__instance=n,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){return null}}],[{key:"notify",value:function(e){t.__instance.__notify(e)}},{key:"success",value:function(e){this.notify({message:e,variant:"success"})}},{key:"info",value:function(e){this.notify({message:e,variant:"info"})}},{key:"warning",value:function(e){this.notify({message:e,variant:"warning"})}},{key:"error",value:function(e,t){var n=t;"string"===typeof e&&(n=e),this.notify({message:n,variant:"error"})}}]),t}(i.default.PureComponent);t.default=(0,u.withSnackbar)(c)},93:function(e,t,n){"use strict";var r=n(48);Object.defineProperty(t,"isValue",{enumerable:!0,get:function(){return o.isValue}}),Object.defineProperty(t,"isSet",{enumerable:!0,get:function(){return o.isSet}});var o=r(n(166))},98:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(176);var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"localValue",value:function(e){var t=(0,o.storageOfType)("localStorage");return t?t.getItem(e):null}},{key:"setLocalValue",value:function(e,t){var n=(0,o.storageOfType)("localStorage");n&&n.setItem(e,t)}},{key:"removeLocalValue",value:function(e,t){var n=(0,o.storageOfType)("localStorage");n&&n.removeItem(e,t)}}]),e}();t.default=a},99:function(e,t,n){"use strict";var r=n(6),o=n(0),a=n(46),i=n(208),u=n(204),c=n(210),l=n(209),s=n(44),f=n(103),p=n(112),d=n.n(p),y=n(113),g=n.n(y),b=n(79),m=n.n(b),h=n(111),v=n.n(h),j=n(21),O=n(83),x=n(229),k=n(205),w=n(206),P=n(207),C=n(231),_=n(102),S=Object(f.a)((function(e){return{drawerMenuButton:{color:e.palette.common.white},drawerModal:{zIndex:"".concat(e.zIndex.appBar+1," !important")},drawerPaper:{backgroundColor:e.palette.grey[50],paddingTop:e.topbar.height,width:e.sidebar.width,zIndex:e.zIndex.appBar},listItemIcon:{marginRight:e.spacing(1),minWidth:"unset"}}}));var T=function(e){var t=S(),n=Object(o.useState)(!1),i=Object(O.a)(n,2),c=i[0],l=i[1],s=e.navLinkArrangement;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(u.a,{edge:"start",className:t.drawerMenuButton,onClick:function(){return l(!c)},children:Object(r.jsx)("img",{alt:"Application Logo",src:_.a,width:"40"})}),Object(r.jsx)(x.a,{anchor:"left",classes:{modal:t.drawerModal,paper:t.drawerPaper},ModalProps:{keepMounted:!0},open:c,onClose:function(){return l(!c)},variant:"temporary",children:Object(r.jsx)(k.a,{disablePadding:!0,children:s.map((function(e){var n={};e.path?(n.to=e.path,n.component=a.Link):e.href&&(n.component="a",n.href=e.href);return Object(r.jsxs)(w.a,Object(j.a)(Object(j.a)({button:!0,divider:!0,onClick:function(){l(!1),e.onClick&&e.onClick()}},n),{},{children:[Object(r.jsx)(P.a,{className:t.listItemIcon,children:Object(r.jsx)(e.Icon,{})}),Object(r.jsx)(C.a,{primary:e.title})]}),e.title)}))})})]})},E=n(54),R=n(37),A=Object(f.a)((function(e){return{appBar:{zIndex:e.zIndex.appBar+2,justifyContent:"center",position:"relative"},progressBar:{height:2,left:0,position:"absolute",right:0,top:62},titleContainer:{display:"flex",flexDirection:"column",flex:1},toolBar:{minHeight:e.topbar.height,padding:e.spacing(0,.5,0,2)},appTitle:{fontSize:e.typography.pxToRem(20)},navButton:{color:e.palette.common.white}}})),I=[{Icon:d.a,path:R.a.dashboard,title:"Dashboard"},{Icon:m.a,path:R.a.forex.index,title:"Foreign Exchange"},{Icon:g.a,href:"https://github.com/material-appkit/quickstart-create-react-app",title:"GitHub Repository"}];function B(e){var t=A(),n=Object(o.useContext)(E.a).loadProgress;return Object(r.jsxs)(i.a,{className:t.appBar,color:"primary",elevation:2,position:"static",children:[Object(r.jsxs)(l.a,{className:t.toolBar,children:[Object(r.jsx)(T,{navLinkArrangement:I}),Object(r.jsx)(s.a,{className:t.appTitle,children:"My Application"}),Object(r.jsx)(v.a,{}),Object(r.jsx)(u.a,{className:t.navButton,component:a.Link,to:R.a.auth.login,children:Object(r.jsx)(m.a,{})})]}),null!==n&&Object(r.jsx)(c.a,{className:t.progressBar})]})}B.defaultProps={navLinkArrangement:[]};t.a=B}},[[183,3,4]]]);