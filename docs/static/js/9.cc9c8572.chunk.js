(this["webpackJsonp@material-appkit/pwa-starter"]=this["webpackJsonp@material-appkit/pwa-starter"]||[]).push([[9],{235:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),r=o(n(2));function o(t){return t&&t.__esModule?t:{default:t}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}var u=function(t){function e(){return c(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.mountPath,n=t.onMount;n&&n(this,e)}},{key:"componentDidUpdate",value:function(t){var e=this.props,n=e.mountPath,a=e.onUpdate;a&&a(this,n)}},{key:"componentWillUnmount",value:function(){this.props.onUnmount&&this.props.onUnmount(this,this.props.mountPath)}},{key:"render",value:function(){return this.props.children}}]),e}(o(n(0)).default.PureComponent);u.propTypes={children:r.default.any,contextMenuItems:r.default.array,mountPath:r.default.string,onMount:r.default.func,onUpdate:r.default.func,onUnmount:r.default.func,onViewDidMount:r.default.func,onViewDidAppear:r.default.func,onViewDidUpdate:r.default.func,rightBarItem:r.default.element,toolbarItems:r.default.object},e.default=u},241:function(t,e,n){},249:function(t,e,n){"use strict";var a=n(6),r=n(83),o=n(260),c=n.n(o),i=n(0),u=n(330),s=n(334),l=n(333),f=n(331),p=n(332),d=n(103),b=n(85),h=n.n(b),j=(n(241),n(54)),m=n(40),y=Object(d.a)((function(t){return{table:{}}}));e.a=function(t){var e=y(),n=t.base,o=t.currency,d=Object(i.useContext)(j.a).update,b=Object(i.useState)(null),O=Object(r.a)(b,2),v=O[0],g=O[1];return Object(i.useEffect)((function(){if(n&&o){g(null);var t=c.a.stringify({start_at:"2020-01-01",end_at:"2020-12-31",base:n,symbols:o});d({loadProgress:void 0}),fetch("".concat(m.b,"/history?").concat(t)).then((function(t){200===t.status?t.json().then((function(t){var e=Object.keys(t.rates).sort();g(e.map((function(e){return{date:e,value:t.rates[e][o]}})))})):h.a.error("Failed to retrieve historical ForEx data")})).catch((function(){h.a.error("Failed to retrieve historical ForEx data")})).finally((function(){d({loadProgress:null})}))}}),[n,o,d]),n&&o&&v?Object(a.jsxs)(u.a,{className:e.table,"aria-label":"simple table",children:[Object(a.jsx)(f.a,{children:Object(a.jsxs)(p.a,{children:[Object(a.jsxs)(l.a,{children:[Object(a.jsx)("img",{alt:"",className:"flag flag-".concat(n.toLowerCase())}),Object(a.jsx)("img",{alt:"",className:"flag flag-".concat(o.toLowerCase())})]}),Object(a.jsx)(l.a,{align:"right",children:"Exchange Rate"})]})}),Object(a.jsx)(s.a,{children:v.map((function(t){return Object(a.jsxs)(p.a,{children:[Object(a.jsx)(l.a,{component:"th",scope:"row",children:t.date}),Object(a.jsx)(l.a,{align:"right",children:t.value})]},t.date)}))})]}):null}},335:function(t,e,n){"use strict";n.r(e);var a=n(21),r=n(6),o=(n(0),n(55)),c=n.n(o),i=n(235),u=n.n(i),s=n(249);n(40);e.default=function(t){var e=c.a.qsParams.base,n=t.match.params.currency.toUpperCase();return Object(r.jsx)(u.a,Object(a.a)(Object(a.a)({title:"".concat(e," to ").concat(n)},t),{},{children:Object(r.jsx)(s.a,{base:e,currency:n})}))}}}]);