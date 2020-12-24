(this["webpackJsonp@material-appkit/cra-quickstart"]=this["webpackJsonp@material-appkit/cra-quickstart"]||[]).push([[1],{272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=o(n(2));function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var i=function(e){function t(){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.mountPath,n=e.onMount;n&&n(this,t)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.mountPath,r=t.onUpdate;r&&r(this,n)}},{key:"componentWillUnmount",value:function(){this.props.onUnmount&&this.props.onUnmount(this,this.props.mountPath)}},{key:"render",value:function(){return this.props.children||null}}]),t}(o(n(0)).default.PureComponent);i.propTypes={children:a.default.any,contextMenuItems:a.default.array,mountPath:a.default.string,onMount:a.default.func,onUpdate:a.default.func,onUnmount:a.default.func,onViewDidMount:a.default.func,onViewDidAppear:a.default.func,onViewDidUpdate:a.default.func,rightBarItem:a.default.element,toolbarItems:a.default.object},t.default=i},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(340),l=(r=o)&&r.__esModule?r:{default:r};var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,null,[{key:"initialize",value:function(e){this.config=e||{},this.config.ServiceProxyClass&&(this.ServiceProxyClass=this.config.ServiceProxyClass)}},{key:"createProxy",value:function(){return new this.ServiceProxyClass}},{key:"request",value:function(e,t,n,r,a){return this.createProxy().request(e,t,n,r,a)}},{key:"get",value:function(e,t,n,r){return this.request("GET",e,t,n,r)}},{key:"post",value:function(e,t,n,r){return this.request("POST",e,t,n,r)}},{key:"put",value:function(e,t,n,r){return this.request("PUT",e,t,n,r)}},{key:"patch",value:function(e,t,n,r){return this.request("PATCH",e,t,n,r)}},{key:"delete",value:function(e,t,n,r){return this.request("DELETE",e,t,n,r)}},{key:"options",value:function(e,t,n,r){return this.request("OPTIONS",e,t,n,r)}},{key:"head",value:function(e,t,n,r){return this.request("HEAD",e,t,n,r)}},{key:"download",value:function(e,t,n,r){return this.createProxy().download(e,t,n,r)}},{key:"upload",value:function(e,t,n,r,a){return this.createProxy().upload(e,t,n,r,a)}}]),e}();u.ServiceProxyClass=l.default,t.default=u},289:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(i){a=!0,o=i}finally{try{!r&&u.return&&u.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=R(n(4)),l=R(n(280)),u=R(n(2)),i=n(0),c=R(i),f=n(387),s=R(n(336)),d=R(n(133)),p=R(n(392)),m=R(n(393)),y=R(n(225)),b=R(n(136)),h=R(n(134)),g=R(n(287)),v=R(n(297)),C=R(n(386)),O=(R(n(385)),R(n(389)),R(n(283))),P=R(n(43)),j=n(42),E=R(n(337)),k=R(n(163)),w=R(n(338)),S=R(n(339)),x=R(n(274)),_=n(137),M=n(82),T=n(342),I=R(n(344)),A=R(n(347)),D=R(n(348));function R(e){return e&&e.__esModule?e:{default:e}}function q(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var N=function(e,t){var n=e.jsonData,r=n.data?n.data:n;t&&(r=r.map(t));var a={items:r};return n.meta&&n.meta.pagination&&(a.pagination=n.meta.pagination),a};function L(e){var t=e.choices,n=e.onDismiss,r=e.selectedOrdering,o=(0,i.useState)(null),l=a(o,2),u=l[0],f=l[1],s="";t.forEach((function(e){e[0]===r&&(s=e[1])}));var d=function(e){f(null),n(e)};return c.default.createElement(i.Fragment,null,c.default.createElement(O.default,{title:"Ordered by: "+s},c.default.createElement(h.default,{color:"primary",onClick:function(e){return f(e.currentTarget)},style:{borderRadius:0}},c.default.createElement(S.default,null))),c.default.createElement(g.default,{anchorEl:u,getContentAnchorEl:null,id:"sort-menu",open:Boolean(u),onClose:function(){return d(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},(0,_.makeChoices)(t).map((function(e){return c.default.createElement(v.default,{key:e.value,onClick:function(){return d(e)},selected:e.value===r},e.label)}))))}L.propTypes={choices:u.default.array.isRequired,onDismiss:u.default.func.isRequired,selectedOrdering:u.default.string};var z=(0,j.makeStyles)((function(e){return{button:{padding:e.spacing(.5)+"px "+e.spacing(1)+"px"},menuButton:{borderColor:e.palette.grey[400]+" !important",minWidth:0,padding:0},disabled:{color:e.palette.text.secondary},enabled:{color:e.palette.primary.main}}}));function U(e){var t=(0,i.useState)(null),n=a(t,2),r=n[0],o=n[1],l=e.selectionDisabled,u=function(t){o(null),t&&e.onSelectionMenuItemClick(t)},f=z();return e.selectionMenu?c.default.createElement(i.Fragment,null,c.default.createElement(p.default,null,c.default.createElement(O.default,{title:"Selection mode is: "+(l?"Off":"On")},c.default.createElement(d.default,{classes:{root:f.button,outlined:l?f.disabled:f.enabled},onClick:e.onClick,variant:"outlined"},c.default.createElement(w.default,null))),c.default.createElement(d.default,{className:f.menuButton,disabled:l,onClick:function(e){o(e.currentTarget)},size:"small"},c.default.createElement(E.default,null))),c.default.createElement(g.default,{anchorEl:r,id:"selection-menu",open:Boolean(r),onClose:function(){u(null)}},c.default.createElement(v.default,{onClick:function(){u("all")}},"Select All"),c.default.createElement(v.default,{onClick:function(){u("none")}},"Deselect All"))):c.default.createElement(D.default,{control:c.default.createElement(h.default,{color:l?"default":"primary",onClick:e.onClick},c.default.createElement(w.default,null)),tooltip:"Selection mode is: "+(l?"Off":"On")})}U.propTypes={selectionDisabled:u.default.bool.isRequired,selectionMenu:u.default.bool.isRequired,onClick:u.default.func.isRequired,onSelectionMenuItemClick:u.default.func.isRequired};var B=(0,j.makeStyles)((function(e){return{centeredContentContainer:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",width:"100%"}}}));function F(e){var t=B(),n=e.classes,u=e.filterMetadata,d=e.filterParams,p=e.filterParamTransformer,h=e.items,g=e.itemContextMenuArrangement,v=e.listItemContextProvider,O=e.itemTransformer,j=e.listItemComponent,E=e.listItemComponentFunc,w=e.listItemProps,S=e.loadingVariant,_=e.onConfig,D=e.onLoad,R=e.onLoadComplete,z=e.onLoadError,F=e.onOrderingChange,V=e.onPageChange,G=e.onPageSizeChange,H=e.onToolbarChange,W=e.orderingParamName,K=e.paginated,J=e.paginationControlProps,Y=e.paginationListControlProps,Q=e.PlaceholderComponent,X=e.responseTransformer,Z=e.selectionMenu,$=e.selectionMode,ee=e.src,te=(e.subsetFilterArrangement,e.windowed),ne=(0,i.useState)(null),re=a(ne,2),ae=re[0],oe=re[1],le=(0,i.useState)(null),ue=a(le,2),ie=ue[0],ce=ue[1],fe=(0,i.useState)(null),se=a(fe,2),de=se[0],pe=se[1],me=(0,i.useState)(null),ye=a(me,2),be=ye[0],he=ye[1],ge=(0,i.useState)(null),ve=a(ge,2),Ce=(ve[0],ve[1],(0,i.useState)(new Set)),Oe=a(Ce,2),Pe=Oe[0],je=Oe[1],Ee=(0,i.useState)(e.selectionDisabled),ke=a(Ee,2),we=ke[0],Se=ke[1],xe=(0,i.useState)(null),_e=a(xe,2),Me=_e[0],Te=_e[1],Ie=(0,i.useState)(!1),Ae=a(Ie,2),De=Ae[0],Re=Ae[1],qe=(0,i.useRef)(null),Ne=(0,i.useRef)({}),Le=!!Me,ze=ae?ae[W]:null,Ue=e.selection||Pe,Be=function(t){je(t),e.onSelectionChange&&e.onSelectionChange(t)},Fe=function(e){var t=We(e),n=(0,T.find)(Ue,(function(e){return We(e)===t})),r=null;"single"===$?(r=new Set,n||r.add(e)):(r=new Set(Ue),n?r.delete(n):r.add(e)),Be(r)},Ve=(0,i.useCallback)((function(e){var t=[].concat(q(ie));t.unshift(e),ce(t),Fe(e)}),[Ue,ie]),Ge=function(e){V&&V(e)},He=function(e){G&&G(e)},We=function(t){var n=e.itemIdKey;return"function"===typeof n?n(t):t[n]},Ke=function(t){var n=e.itemLinkKey;return n?"function"===typeof n?n(t):t[n]:null},Je=function(e){var t=We(e),n=v?v(e):{},a=Boolean((0,T.find)(Ue,(function(e){return We(e)===t})));return r({contextMenuItemArrangement:g,item:e,onSelectionChange:function(e){return Fe(e)},selected:a,selectionMode:$,selectionDisabled:we},n,w)},Ye=function(e){var t=We(e);return ie.findIndex((function(e){if(We(e)===t)return!0}))},Qe=function(e){var t=r({},Ne.current,e);Ne.current=t,H&&H(t)};(0,i.useEffect)((function(){return function(){Me&&Me.abortController&&Me.abortController.abort()}}),[]),(0,i.useEffect)((function(){ce(h)}),[h]),(0,i.useEffect)((function(){if(d){var e=r({},d);p&&(e=p(e)),e=function(e){var t=r({},e);return Object.keys(t).forEach((function(e){Array.isArray(t[e])&&(t[e]=t[e].join(","))})),t}(e=(0,M.filterEmptyValues)(e)),(0,l.default)(e,ae)||oe(e)}}),[d]),(0,i.useEffect)((function(){ee&&ae&&(D&&D(ae),et(ee,ae).then((function(e){var t=(X||N)(e,O);t.pagination&&he(t.pagination),ce(t.items),pe(null),R&&R(t,e)})).catch((function(e){ce(null),pe(e),z&&z(e)})))}),[ae,ee]),(0,i.useEffect)((function(){var e={};if(e.selectionControl=c.default.createElement(U,{onClick:function(){Se(!we),Be(new Set)},onSelectionMenuItemClick:Xe,selectionDisabled:we,selectionMenu:Z}),K&&be){var t=null;we||"multiple"!==$||(t=Ue.size+" of "+be.total+" selected"),e.paginationControl=c.default.createElement(I.default,r({count:be.total,page:be.current_page-1,pageLabel:t,pageSize:be.per_page,onPageChange:function(e){return Ge(e+1)},onPageSizeChange:function(e){return He(e)}},J)),e.paginationListControl=c.default.createElement(C.default,r({count:be.total_pages,page:be.current_page,onChange:function(e,t){return Ge(t)}},Y))}Qe(e)}),[be,Ue,we]),(0,i.useEffect)((function(){if(u){var e=u.ordering_fields;e&&e.length&&Qe({sortControl:c.default.createElement(L,{choices:e,selectedOrdering:ze,onDismiss:Ze})})}}),[u,ze]),(0,i.useEffect)((function(){_&&_({extendSelection:Ve,updateItem:$e,selection:Ue,selectionDisabled:we})}),[ie,Ue,we]);var Xe=function(e){switch(e){case"all":var t=new Set(Ue);ie.forEach((function(e){t.add(e)})),Be(t);break;case"none":Be(new Set);break;default:throw new Error("Unsupported selection action: "+e)}},Ze=function(e){F&&F(e)},$e=function(e){e.old&&null===e.new?function(e){var t=Ye(e);if(Ue.has(e)){var n=new Set(Ue);n.delete(e),Be(n)}if(-1!==t){var a=[].concat(q(ie));if(a.splice(t,1),ce(a),be){var o=r({},be);o.total-=1,he(o)}}}(e.old):null===e.old&&e.new?function(e){var t=[].concat(q(ie));if(t.unshift(e),ce(t),be){var n=r({},be);n.total+=1,he(n)}}(e.new):function(e,t){var n=Ye(e);if(-1!==n){var r=[].concat(q(ie));r[n]=t,ce(r)}}(e.old,e.new)},et=function(e,t){return new Promise((function(n,r){Me&&Me.abortController&&Me.abortController.abort();var a={};Te(a),x.default.get(e,t,a).then((function(e){Te(null),null===e&&r(e),n(e)})).catch((function(e){Te(null),he(null),r(e)}))}))};(0,i.useEffect)((function(){te&&ie?ie.length?(qe.current=new Array(ie.length).fill(50),Re(!0)):qe.current=[]:qe.current=null}),[te,ie]);var tt=function(t,n,a,o){var l=E?E(t):j;return c.default.createElement(l,r({key:We(t),to:Ke(t),onMount:o,selectOnClick:e.selectOnClick,style:a},Je(t)))};if(de)return c.default.createElement("div",{className:t.centeredContentContainer},c.default.createElement(k.default,{fontSize:"large"}),c.default.createElement(P.default,null,"Failed to load data."));if(!ie)return function(){if("circular"===S)return c.default.createElement("div",{className:t.centeredContentContainer},c.default.createElement(m.default,{disableShrink:!0}));if("placeholder"===S&&Q){for(var e=new Array(10),n=0;n<10;++n)e[n]=c.default.createElement(Q,{key:n});return c.default.createElement(b.default,{disablePadding:!0},e)}return"linear"===S?c.default.createElement(y.default,null):null}();if(!ie.length)return void 0!==e.emptyListPlaceholder?e.emptyListPlaceholder:c.default.createElement("div",{className:t.centeredContentContainer},c.default.createElement(P.default,null,"No items to display"));var nt=null;if("list"===e.displayMode){var rt=[];Le&&rt.push(n.listViewLoading),nt=te?De?c.default.createElement(b.default,{disablePadding:!0,style:{visibility:"hidden"}},ie.map((function(e,t){return tt(e,0,null,(function(e){!function(e,t,n){var r=n.getBoundingClientRect();qe.current[t]=r.height,t===ie.length-1&&Re(!1)}(0,t,e)}))}))):c.default.createElement(s.default,null,(function(e){var t=e.width,n=e.height;return c.default.createElement(f.VariableSizeList,{className:(0,o.default)(rt),height:n,innerElementType:b.default,itemData:{renderedItems:ie},itemCount:ie.length,itemSize:function(e){return qe.current[e]},width:t},(function(e){var t=e.data,n=e.index,r=e.style;return tt(t.renderedItems[n],0,r)}))})):c.default.createElement(b.default,{className:(0,o.default)(rt),disablePadding:!0},ie.map((function(e,t){return tt(e)})))}else te?console.log("TODO: Implement windowed grid view!"):nt=c.default.createElement(A.default,r({selectionDisabled:we},e.tileListProps),ie.map((function(t){return c.default.createElement(e.tileItemComponent,r({key:We(t)},Je(t)))})));return nt}F.propTypes={classes:u.default.object,defaultSelection:u.default.object,displayMode:u.default.oneOf(["list","tile"]).isRequired,emptyListPlaceholder:u.default.element,filterParams:u.default.object,filterMetadata:u.default.object,filterParamTransformer:u.default.func,items:u.default.array,itemContextMenuArrangement:u.default.func,itemIdKey:u.default.oneOfType([u.default.string,u.default.func]),itemLinkKey:u.default.oneOfType([u.default.string,u.default.func]),itemTransformer:u.default.func,listItemContextProvider:u.default.func,listItemComponent:u.default.elementType,listItemComponentFunc:u.default.func,listItemProps:u.default.object,loadingVariant:u.default.oneOf(["circular","linear","placeholder"]),location:u.default.object,onConfig:u.default.func,onLoad:u.default.func,onLoadComplete:u.default.func,onLoadError:u.default.func,onOrderingChange:u.default.func,onPageChange:u.default.func,onPageSizeChange:u.default.func,onSelectionChange:u.default.func,onToolbarChange:u.default.func,orderingParamName:u.default.string,paginated:u.default.bool,paginationListControlProps:u.default.object,PlaceholderComponent:u.default.elementType,responseTransformer:u.default.func,selection:u.default.object,selectionDisabled:u.default.bool,selectionMode:u.default.oneOf(["single","multiple"]),selectionMenu:u.default.bool,selectOnClick:u.default.bool,src:u.default.string,subsetParamName:u.default.string,subsetFilterArrangement:u.default.array,tileItemComponent:u.default.func,tileListProps:u.default.object,urlUpdateFunc:u.default.func,windowed:u.default.bool},F.defaultProps={classes:{},filterParams:{},items:null,itemIdKey:"id",loadingVariant:"circular",orderingParamName:"order",paginated:!1,paginationControlProps:{pageSizeChoices:[10,20,50,100]},paginationListControlProps:{shape:"rounded",variant:"outlined"},selectionDisabled:!0,selectionMenu:!1,selectOnClick:!1,subsetParamName:"subset",tileListProps:{},windowed:!1},t.default=F},294:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.commonPropTypes=t.listItemProps=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=y(n(4)),o=y(n(2)),l=n(0),u=y(l),i=y(n(320)),c=y(n(139)),f=y(n(394)),s=y(n(319)),d=n(42),p=y(n(376)),m=n(270);function y(e){return e&&e.__esModule?e:{default:e}}function b(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var h=(0,d.makeStyles)((function(e){return{selectionControl:{marginRight:e.spacing(.5),padding:e.spacing(1)},secondaryAction:{paddingRight:36},listItemSecondaryAction:{right:6},listItemSecondaryActionTop:{top:0,transform:"translateY(50%)"}}}));t.listItemProps=function(e){e.onItemUpdate;var t=b(e,["onItemUpdate"]);return r({divider:!0},t)};t.commonPropTypes={item:o.default.object,onItemUpdate:o.default.func,onMount:o.default.func,onUnmount:o.default.func};function g(e){var t=h(),n=e.className,o=e.commitOnSelect,d=e.secondaryActionPlacement,y=e.contextMenuItemArrangement,g=e.item,v=e.onItemClick,C=e.onMount,O=e.onUnmount,P=e.onSelectionChange,j=e.selectionMode,E=e.selectionDisabled,k=e.selectOnClick,w=e.secondaryActionControl,S=b(e,["className","commitOnSelect","secondaryActionPlacement","contextMenuItemArrangement","item","onItemClick","onMount","onUnmount","onSelectionChange","selectionMode","selectionDisabled","selectOnClick","secondaryActionControl"]),x=(0,l.useRef)(null);(0,m.useInit)((function(){C&&C(x.current,g)}),(function(){O&&O(x.current,g)}));var _=r({classes:{root:n,secondaryAction:t.secondaryAction},ref:x},S);e.to&&(_.button=!0),k?(_.button=!0,_.onClick=function(e){P&&"Enter"!==e.key&&P(g),v&&v(g)}):v&&(_.button=!0,_.onClick=function(){v(g)});var M=null;E||o||("multiple"===j&&(M=i.default),"single"===j&&(M=s.default));var T=null;if(w||y){var I=null,A=[t.listItemSecondaryAction];"top"===d&&A.push(t.listItemSecondaryActionTop),I=w||u.default.createElement(p.default,{buttonProps:{size:"small"},representedObject:g,menuItemArrangement:y(g)}),T=u.default.createElement(f.default,{className:(0,a.default)(A)},I)}return u.default.createElement(c.default,_,null!==M&&u.default.createElement(M,{checked:e.selected,className:t.selectionControl,disableRipple:!0,edge:"start",onClick:function(e){e.preventDefault(),P&&P(g)}}),e.children,T)}g.propTypes={children:o.default.node,secondaryActionControl:o.default.element,secondaryActionPlacement:o.default.string,contextMenuItemArrangement:o.default.func,item:o.default.oneOfType([o.default.object,o.default.array]).isRequired,onItemClick:o.default.func,onSelectionChange:o.default.func,selected:o.default.bool,selectOnClick:o.default.bool,selectionMode:o.default.oneOf(["single","multiple"]),selectionDisabled:o.default.bool,to:o.default.string},t.default=g},318:function(e,t,n){},321:function(e,t,n){"use strict";var r=n(6),a=n(65),o=n(0),l=n(244),u=n(227),i=n(384),c=n.n(i),f=n(246),s=n(289),d=n.n(s),p=n(47),m=n.n(p),y=n(274),b=n.n(y),h=n(107),g=n.n(h),v=n(271),C=n.n(v),O=n(281),P=n(23),j=n(241),E=n(242),k=n(294),w=n.n(k),S=n(383),x=n.n(S),_=n(113),M=Object(_.a)((function(e){return{icon:{fontSize:"1em",display:"flex",flexDirection:"column",alignItems:"center",width:100,height:100,backgroundColor:"#fff",borderRadius:"0.6em",boxShadow:"0 1px 0 #bdbdbd, 0 2px 0 #fff, 0 3px 0 #bdbdbd, 0 4px 0 #fff, 0 5px 0 #bdbdbd, 0 0 0 1px #bdbdbd",overflow:"hidden",textAlign:"center"},strong:{padding:"0.4em 0",color:"#fff",backgroundColor:e.palette.primary.main,borderBottom:"1px dashed ".concat(e.palette.secondary.dark),boxShadow:"0 2px 0 ".concat(e.palette.secondary.dark),width:"100%"},span:{color:"#2f2f2f",fontSize:e.typography.pxToRem(28),fontWeight:500,letterSpacing:"-0.05em",lineHeight:1,margin:"12px 0 2px"},em:{color:e.palette.secondary.main,fontStyle:"normal",fontWeight:500}}}));var T=function(e){var t=M(),n=Object(o.useState)((function(){return x()(e.date)})),l=Object(a.a)(n,1)[0];return Object(r.jsxs)("time",{dateTime:e.date,className:t.icon,children:[Object(r.jsx)("strong",{className:t.strong,children:l.format("MMMM")}),Object(r.jsx)("span",{className:t.span,children:l.format("D")}),Object(r.jsx)("em",{className:t.em,children:l.format("dddd")})]})};var I=function(e){var t=e.item,n=t.date,a=t.rate;return Object(r.jsxs)(w.a,Object(P.a)(Object(P.a)({},Object(k.listItemProps)(e)),{},{children:[Object(r.jsx)(j.a,{style:{marginRight:16},children:Object(r.jsx)(T,{date:n})}),Object(r.jsx)(E.a,{primary:a,primaryTypographyProps:{variant:"h2",component:"p"}})]}))},A=n(36),D=n(50);n(318);t.a=function(e){var t=e.base,n=e.currency,i=e.standalone,s=Object(o.useState)(null),p=Object(a.a)(s,2),y=p[0],h=p[1];Object(o.useEffect)((function(){t&&n&&(h(null),b.a.get("".concat(D.b,"/history"),{start_at:"2020-01-01",end_at:"2020-12-31",base:t,symbols:n}).then((function(e){var t=e.jsonData.rates,r=Object.keys(t).sort();h(r.map((function(e){return{date:e,rate:t[e][n]}})))})).catch((function(){g.a.error("Failed to retrieve historical ForEx data")})))}),[t,n]);var v=Object(o.useCallback)((function(){if(t&&n)if(i){var e={base:n},r=Object(O.reverse)(A.a.forex.currency,{currency:t});m.a.setUrlParams(e,r)}else m.a.updateUrlParams({base:n,currency:t})}),[t,n,i]);return Object(r.jsx)(C.a,{bar:Object(r.jsx)(l.a,{position:"relative",color:"default",children:t&&n&&Object(r.jsxs)(f.a,{variant:"dense",children:[Object(r.jsx)("img",{alt:"",className:"flag flag-".concat(t)}),Object(r.jsx)(u.a,{onClick:v,children:Object(r.jsx)(c.a,{})}),Object(r.jsx)("img",{alt:"",className:"flag flag-".concat(n)})]})}),barSize:48,placement:"top",scrollContent:!0,children:Object(r.jsx)(d.a,{displayMode:"list",itemIdKey:"date",items:y,loadingVariant:"linear",listItemComponent:I,windowed:!0})})}},340:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=i(n(153)),u=i(n(341));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s={mode:"cors",credentials:"same-origin"},d=function(e){function t(){return c(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"handleJsonResponse",value:function(e,t,n){e.json().then((function(r){if(e.jsonData=r,e.ok)t(e);else{var a=new Error("Network response was not ok");a.response=e,n(a)}})).catch((function(t){t.response=e,n(t)}))}},{key:"handleBlobResponse",value:function(e,t,n){e.blob().then((function(r){if(e.blobData=r,e.ok)t(e);else{var a=new Error("Network response was not ok");a.response=e,n(a)}})).catch((function(t){t.response=e,n(t)}))}},{key:"handleResponse",value:function(e,t,n){"application/json"===e.headers.get("content-type")?this.handleJsonResponse(e,t,n):this.handleBlobResponse(e,t,n)}},{key:"requestInfo",value:function(e,t,n,o){var u=this.constructor.buildRequestUrl(t),i=a({},s,{method:e,headers:o}),c=null;if(window.AbortController&&(c=new AbortController,i.signal=c.signal),n){var f=n;"function"===("undefined"===typeof f?"undefined":r(f))&&(f=f()),"GET"===e?u=u+"?"+l.default.stringify(n):f instanceof FormData?i.body=f:i.body=JSON.stringify(f)}return{abortController:c,url:u,options:i}}},{key:"request",value:function(e,t,n,r,a){var o=this;return new Promise((function(l,u){var i=o.constructor.getRequestHeaders(a,n),c=o.requestInfo(e,t,n,i),f=c.abortController,s=c.options,d=c.url;r&&(r.abortController=f),fetch(d,s).then((function(e){o.handleResponse(e,l,u)})).catch((function(e){u(e)}))}))}},{key:"download",value:function(e,t,n,r){return this.get(e,t,n,r)}},{key:"upload",value:function(e,t,n,r,a){if(!Array.isArray(t))throw new Error('Expecting "files" to be an array');var o=new FormData;n&&Object.keys(n).forEach((function(e){o.append(e,n[e])}));var l=!0,u=!1,i=void 0;try{for(var c,f=t[Symbol.iterator]();!(l=(c=f.next()).done);l=!0){var s=c.value;o.append(s.name,s.file)}}catch(d){u=!0,i=d}finally{try{!l&&f.return&&f.return()}finally{if(u)throw i}}return this.request("POST",e,o,r,a)}}]),t}(u.default);t.default=d},341:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"request",value:function(e,t,n,r,a){throw new Error("Subclass Responsibility")}},{key:"get",value:function(e,t,n,r){return this.request("GET",e,t,n,r)}},{key:"post",value:function(e,t,n,r){return this.request("POST",e,t,n,r)}},{key:"put",value:function(e,t,n,r){return this.request("PUT",e,t,n,r)}},{key:"patch",value:function(e,t,n,r){return this.request("PATCH",e,t,n,r)}},{key:"delete",value:function(e,t,n,r){return this.request("DELETE",e,t,n,r)}},{key:"options",value:function(e,t,n,r){return this.request("OPTIONS",e,t,n,r)}},{key:"head",value:function(e,t,n,r){return this.request("HEAD",e,t,n,r)}}],[{key:"getRequestHeaders",value:function(e,t){var n={};return e&&Object.assign(n,e),n}},{key:"buildRequestUrl",value:function(e){var t=e;if("string"===typeof t){if(t.startsWith("http"))return t;t={url:this.getBaseURL(),path:t}}var n=t.url;return t.path.startsWith("/")||(n+=this.getBaseURLPrefix()),n+=t.path}}]),e}();t.default=a},342:function(e,t,n){"use strict";var r=n(58);Object.defineProperty(t,"isSuperset",{enumerable:!0,get:function(){return a.isSuperset}}),Object.defineProperty(t,"union",{enumerable:!0,get:function(){return a.union}}),Object.defineProperty(t,"intersection",{enumerable:!0,get:function(){return a.intersection}}),Object.defineProperty(t,"symmetricDifference",{enumerable:!0,get:function(){return a.symmetricDifference}}),Object.defineProperty(t,"difference",{enumerable:!0,get:function(){return a.difference}}),Object.defineProperty(t,"find",{enumerable:!0,get:function(){return a.find}});var a=r(n(343))},343:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSuperset=function(e,t){var n=!0,r=!1,a=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var u=o.value;if(!e.has(u))return!1}}catch(i){r=!0,a=i}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}return!0},t.union=function(e,t){var n=new Set(e),r=!0,a=!1,o=void 0;try{for(var l,u=t[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var i=l.value;n.add(i)}}catch(c){a=!0,o=c}finally{try{!r&&u.return&&u.return()}finally{if(a)throw o}}return n},t.intersection=function(e,t){var n=new Set,r=!0,a=!1,o=void 0;try{for(var l,u=t[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var i=l.value;e.has(i)&&n.add(i)}}catch(c){a=!0,o=c}finally{try{!r&&u.return&&u.return()}finally{if(a)throw o}}return n},t.symmetricDifference=function(e,t){var n=new Set(e),r=!0,a=!1,o=void 0;try{for(var l,u=t[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var i=l.value;n.has(i)?n.delete(i):n.add(i)}}catch(c){a=!0,o=c}finally{try{!r&&u.return&&u.return()}finally{if(a)throw o}}return n},t.difference=function(e,t){var n=new Set(e),r=!0,a=!1,o=void 0;try{for(var l,u=t[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var i=l.value;n.delete(i)}}catch(c){a=!0,o=c}finally{try{!r&&u.return&&u.return()}finally{if(a)throw o}}return n},t.find=function(e,t){var n=!0,r=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var u=o.value;if(t(u))return u}}catch(i){r=!0,a=i}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}return null}},344:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(i){a=!0,o=i}finally{try{!r&&u.return&&u.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=g(n(2)),l=n(0),u=g(l),i=g(n(226)),c=g(n(133)),f=g(n(134)),s=g(n(224)),d=g(n(287)),p=g(n(297)),m=g(n(43)),y=n(42),b=g(n(345)),h=g(n(346));function g(e){return e&&e.__esModule?e:{default:e}}var v=(0,y.makeStyles)((function(e){return{label:{fontWeight:400},paginationButton:{padding:e.spacing(.75)}}}));function C(e){var t=(0,l.useState)(null),n=a(t,2),o=n[0],y=n[1],g=e.count,C=e.onPageChange,O=e.onPageSizeChange,P=e.page,j=e.pageLabel,E=e.pageSize,k=e.pageSizeChoices,w=e.typographyProps,S=P*E,x=!1;S+E<g&&(x=!0);var _=function(){y(null)},M=v(),T=null;if(j)T=u.default.createElement(m.default,r({className:M.label},w),j);else{var I=g?S+1+" - "+Math.min(S+E,g)+" of "+g:"No Results";T=g&&k&&k.length>1?u.default.createElement(l.Fragment,null,u.default.createElement(s.default,r({"aria-controls":"page-size-menu","aria-haspopup":"true",onClick:function(e){y(e.currentTarget)},component:c.default},w),I),u.default.createElement(d.default,{id:"page-size-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:_},k.map((function(e){return u.default.createElement(p.default,{key:e,onClick:function(){!function(e){O(e),_()}(e)},selected:e===E},e)})))):u.default.createElement(m.default,r({className:M.label},w),I)}return u.default.createElement(i.default,{display:"flex",alignItems:"center"},u.default.createElement(f.default,{className:M.paginationButton,disabled:P<=0,onClick:function(){C(P-1)}},u.default.createElement(b.default,null)),T,u.default.createElement(f.default,{className:M.paginationButton,disabled:!x,onClick:function(){C(P+1)}},u.default.createElement(h.default,null)))}C.propTypes={count:o.default.number,page:o.default.number,pageLabel:o.default.string,pageSize:o.default.number,pageSizeChoices:o.default.array.isRequired,onPageChange:o.default.func,onPageSizeChange:o.default.func,totalPages:o.default.number,typographyProps:o.default.object},C.defaultProps={page:0,typographyProps:{color:"textSecondary",variant:"subtitle2"}},t.default=C},347:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(4)),a=u(n(2)),o=u(n(0)),l=u(n(226));function u(e){return e&&e.__esModule?e:{default:e}}var i=(0,n(42).makeStyles)({box:{display:"grid"},selectionEnabled:{cursor:"pointer"}});function c(e){var t=i(),n=Object.assign(e.styles||{},{gridGap:e.gridGap,gridTemplateColumns:"repeat("+e.columns+", 1fr)"}),a=[t.box];return e.selectionDisabled||a.push(t.selectionEnabled),o.default.createElement(l.default,{className:(0,r.default)(a),style:n},e.children)}c.propTypes={children:a.default.array.isRequired,columns:a.default.number,gridGap:a.default.number,selectionDisabled:a.default.bool},c.defaultProps={columns:3,gridGap:2},t.default=c},348:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(2)),a=l(n(0)),o=l(n(283));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return e.tooltip?a.default.createElement(o.default,{title:e.tooltip},e.control):e.control}u.propTypes={control:r.default.object.isRequired,tooltip:r.default.string},t.default=u},376:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(i){a=!0,o=i}finally{try{!r&&u.return&&u.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=s(n(2)),l=n(0),u=s(l),i=s(n(134)),c=s(n(377)),f=s(n(309));function s(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=(0,l.useRef)(null),n=(0,l.useState)(!1),o=a(n,2),c=o[0],s=o[1];return u.default.createElement(l.Fragment,null,u.default.createElement(i.default,r({"aria-owns":c?"context-menu":void 0,"aria-haspopup":"true",onClick:function(e){s(!0)},ref:t},e.buttonProps),u.default.createElement(e.icon,{className:e.iconClassName})),u.default.createElement(f.default,{anchorEl:t.current,dense:e.dense,menuItemArrangement:e.menuItemArrangement,id:"context-menu",onClose:function(e){t.current&&t.current.contains(e.target)||s(!1)},open:c}))}d.propTypes={buttonProps:o.default.object,dense:o.default.bool,icon:o.default.elementType,iconClassName:o.default.string,menuItemArrangement:o.default.array.isRequired},d.defaultProps={buttonProps:{},dense:!1,icon:c.default},t.default=d}}]);