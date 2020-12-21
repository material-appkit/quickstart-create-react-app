(this["webpackJsonp@material-appkit/pwa-starter"]=this["webpackJsonp@material-appkit/pwa-starter"]||[]).push([[7],{250:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(a(3)),o=s(a(0));function s(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=t.bar,a=t.barSize,i=t.children,s=t.layout,r=t.placement,n=t.scrollContent,l={height:"100%"},c={},d={};switch(s){case"grid":switch(l.display="grid",c.overflow="auto",r){case"top":l.gridTemplateRows=a+"px auto";break;case"bottom":l.gridTemplateRows="auto "+a+"px",c.order=0,d.order=1;break;case"left":l.gridTemplateColumns=a+"px auto";break;case"right":l.gridTemplateColumns="auto "+a+"px",c.order=0,d.order=1}break;case"position":switch(l.position="relative",c.overflow=n?"auto":"visible",r){case"top":Object.assign(d,{top:0,right:0,left:0,height:a,position:"absolute"}),Object.assign(c,{top:a,right:0,bottom:0,left:0,position:"absolute"});break;case"bottom":Object.assign(d,{bottom:0,right:0,left:0,height:a,position:"absolute"}),Object.assign(c,{top:0,right:0,left:0,position:"absolute"});break;case"left":Object.assign(d,{top:0,left:0,bottom:0,width:a,position:"absolute"}),Object.assign(c,{top:0,right:0,left:a,bottom:0,position:"absolute"});break;case"right":Object.assign(d,{position:"absolute",top:0,width:a,bottom:0,right:0}),Object.assign(c,{position:"absolute",top:0,left:0,right:a,bottom:0})}break;default:throw new Error("Unexpected layout property: "+s)}return o.default.createElement("div",{style:l},o.default.createElement("div",{className:t.barClassName,style:d},e),o.default.createElement("div",{className:t.contentClassName,style:c},i))}r.propTypes={bar:i.default.object.isRequired,barSize:i.default.number.isRequired,barClassName:i.default.string,children:i.default.object,classes:i.default.object,contentClassName:i.default.string,layout:i.default.oneOf(["grid","position"]),placement:i.default.oneOf(["top","right","bottom","left"]),scrollContent:i.default.bool},r.defaultProps={layout:"position",scrollContent:!1},e.default=r},299:function(t,e,a){"use strict";a.r(e);var i=a(7),o=a(0),s=a(14),r=a(1),n=a(4),l=a(19),c=(a(3),a(5)),d=a(6),p=a(8),u=o.forwardRef((function(t,e){var a=t.classes,i=t.className,s=t.component,l=void 0===s?"div":s,d=t.disableGutters,u=void 0!==d&&d,b=t.fixed,m=void 0!==b&&b,h=t.maxWidth,f=void 0===h?"lg":h,g=Object(n.a)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(l,Object(r.a)({className:Object(c.default)(a.root,i,m&&a.fixed,u&&a.disableGutters,!1!==f&&a["maxWidth".concat(Object(p.a)(String(f)))]),ref:e},g))})),b=Object(d.a)((function(t){return{root:Object(l.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2),display:"block"},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(e,a){var i=t.breakpoints.values[a];return 0!==i&&(e[t.breakpoints.up(a)]={maxWidth:i}),e}),{}),maxWidthXs:Object(l.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:Object(l.a)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:Object(l.a)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:Object(l.a)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:Object(l.a)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(u),m=a(23),h=a(250),f=a.n(h),g=a(95),x=a(98),j=a(63),O=a(47),k=[{exact:!1,path:O.a.auth.index,component:Object(o.lazy)((function(){return Promise.all([a.e(0),a.e(6),a.e(9)]).then(a.bind(null,297))}))}];function v(t){var e=Object(o.useContext)(j.a),a=Object(m.a)(),r=function(t){e.update({pageTitle:t.props.title})};return Object(i.jsx)(f.a,{bar:Object(i.jsx)(x.a,{}),barSize:a.topbar.height,placement:"top",children:Object(i.jsx)(b,{disableGutters:!0,maxWidth:t.maxWidth,children:Object(i.jsxs)(s.g,{children:[k.map((function(e){var a=!0;return Object(g.isValue)(e.exact)&&(a=e.exact),Object(i.jsx)(s.d,{exact:a,path:e.path,render:function(a){return Object(i.jsx)(e.component,{location:t.location,match:a.match,onMount:r})}},e.path)})),Object(i.jsx)(s.c,{to:O.a.auth.login})]})})})}v.defaultProps={maxWidth:"md"};e.default=v}}]);