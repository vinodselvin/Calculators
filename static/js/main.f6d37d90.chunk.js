(this["webpackJsonpcalculators-react"]=this["webpackJsonpcalculators-react"]||[]).push([[0],{60:function(e,t,a){e.exports=a.p+"static/media/logo.37e139b7.svg"},78:function(e,t,a){e.exports=a(88)},83:function(e,t,a){},84:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(9),r=a.n(o),i=(a(83),a(84),a(50)),c=a(55),s=a(56),u=a(62),m=a(61),d=a(138),h=a(139),v=a(141),p=a(91),f=a(51),g=a(3),b=a(123),w=a(90),E=a(127),k=a(131),y=a(130),O=a(126),C=a(128),j=a(140),I=a(129),S=Object(b.a)({root:{width:"100%"},container:{maxHeight:440}});function N(e){var t,a,n,o,r,i=S(),c=l.a.useState(0),s=Object(f.a)(c,2),u=s[0],m=s[1],d=l.a.useState(10),h=Object(f.a)(d,2),v=h[0],p=h[1];return l.a.createElement(w.a,{className:Object(g.a)(i.root,null===e||void 0===e?void 0:e.root)},l.a.createElement(O.a,{className:i.container},l.a.createElement(E.a,{stickyHeader:!0,"aria-label":"sticky table"},l.a.createElement(C.a,null,l.a.createElement(I.a,null,null===e||void 0===e||null===(t=e.columns)||void 0===t?void 0:t.map((function(e){return l.a.createElement(y.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),l.a.createElement(k.a,null,(null===e||void 0===e||null===(a=e.rows)||void 0===a?void 0:a.length)>0?null===e||void 0===e||null===(n=e.rows.slice(u*v,u*v+v))||void 0===n?void 0:n.map((function(t){var a;return l.a.createElement(I.a,{hover:!0,role:"checkbox",tabIndex:-1,key:t.id},null===e||void 0===e||null===(a=e.columns)||void 0===a?void 0:a.map((function(e){var a=t[e.id];return l.a.createElement(y.a,{key:e.id,align:e.align},e.format&&"number"===typeof a?e.format(a):a)})))})):l.a.createElement(I.a,null,l.a.createElement(y.a,{colSpan:null===e||void 0===e||null===(o=e.columns)||void 0===o?void 0:o.length,key:"no-results-table",align:"center"},"No records found"))))),l.a.createElement(j.a,{rowsPerPageOptions:[10,25,100],component:"div",count:null===e||void 0===e||null===(r=e.rows)||void 0===r?void 0:r.length,rowsPerPage:v,page:u,onChangePage:function(e,t){m(t)},onChangeRowsPerPage:function(e){p(+e.target.value),m(0)}}))}var R=a(31),P=a(10),x=a(144),B=a(134),T=Object(b.a)((function(e){return{search:Object(R.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(P.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(P.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(R.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));var L=function(e){var t=T();return l.a.createElement("div",{className:t.search},l.a.createElement("div",{className:t.searchIcon},l.a.createElement(B.a,null)),l.a.createElement(x.a,{placeholder:"Search\u2026",value:null===e||void 0===e?void 0:e.value,classes:{root:t.inputRoot,input:t.inputInput},onChange:function(t){e.change(t.target.value)},inputProps:{"aria-label":"search"}}))},A=a(135),W=a(143),H=a(136),M=a(133),_=a(132),D=a(137),J=Object(b.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),z=l.a.forwardRef((function(e,t){return l.a.createElement(A.a,Object.assign({direction:"up",ref:t},e))}));function F(e){var t=e.open,a=e.close,n=e.title,o=e.link,r=J();return l.a.createElement("div",null,l.a.createElement(W.a,{fullScreen:!0,open:t,onClose:a,TransitionComponent:z},l.a.createElement(H.a,{className:r.appBar},l.a.createElement(M.a,null,l.a.createElement(_.a,{edge:"start",color:"inherit",onClick:a,"aria-label":"close"},l.a.createElement(D.a,null)),l.a.createElement(p.a,{variant:"h6",className:r.title},n))),l.a.createElement("iframe",{style:{width:"100%",height:"100%"},title:"Cake",src:o})))}var V=a(60),$=a.n(V),q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={open:!1,selectedItem:null,columns:[{id:"id",label:"#",align:"right",format:function(e){return e}},{id:"name",label:"Name",align:"left",format:function(e){return e}},{id:"page_link",label:"Page",align:"left",format:function(e){return e}},{id:"action",label:"Action",align:"left",format:function(e){return e}}],rows:[{name:"Dummy Calculator (for Reference)",link:"https://www.google.com"},{name:"BMI Calculator",link:"https://www.calculator.net/bmi-calculator.html"}],searchTerm:"",filteredResults:[]},e.handleSearchInput=function(t){e.setState({searchTerm:t},(function(){e.filterBy("search")}))},e.filterBy=function(t){var a;switch(t){case"search":e.setState({filteredResults:null===(a=e.state.rows)||void 0===a?void 0:a.filter((function(t){var a,n,l;return null===(a=t.name)||void 0===a||null===(n=a.toLowerCase())||void 0===n?void 0:n.includes(null===(l=e.state.searchTerm)||void 0===l?void 0:l.toLowerCase())}))});break;default:console.log("Invalid Action!")}},e.handleOpen=function(){e.setState({open:!0})},e.handleClose=function(){console.log("Called close"),e.setState({open:!1})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.generateRows()}},{key:"generateRows",value:function(){var e=this;this.setState({rows:this.state.rows.map((function(t,a){return Object(i.a)(Object(i.a)({},t),{},{id:a+1,page_link:l.a.createElement(d.a,{className:"action-link",href:null===t||void 0===t?void 0:t.link,target:"_blank"},"View Page"),action:l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{size:"small",variant:"outlined",color:"primary",onClick:function(){e.setState({selectedItem:t},(function(){e.handleOpen()}))}},"Open"))})}))})}},{key:"render",value:function(){var e,t;return l.a.createElement("div",null,l.a.createElement("img",{src:$.a,width:"84",height:"84"}),l.a.createElement(v.a,{id:"header-section",my:2},l.a.createElement(p.a,{variant:"h4"},"Calculator Hub"),l.a.createElement(p.a,{variant:"body1"},"List the calculators name with the links below")),l.a.createElement(v.a,{id:"search-section",my:2},l.a.createElement(L,{value:this.state.searchTerm,change:this.handleSearchInput})),l.a.createElement(F,{title:null===(e=this.state.selectedItem)||void 0===e?void 0:e.name,open:this.state.open,link:null===(t=this.state.selectedItem)||void 0===t?void 0:t.link,close:this.handleClose}),l.a.createElement(N,{rows:(this.state.searchTerm?this.state.filteredResults:this.state.rows)||[],columns:this.state.columns}),l.a.createElement(p.a,{variant:"caption"},"NOTE: If the open option above doesn't work click on view page"))}}]),a}(n.Component);var G=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(q,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[78,1,2]]]);
//# sourceMappingURL=main.f6d37d90.chunk.js.map