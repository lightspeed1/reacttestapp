(this.webpackJsonpreacttestapp=this.webpackJsonpreacttestapp||[]).push([[0],{73:function(e,t,a){e.exports=a(74)},74:function(e,t,a){"use strict";a.r(t);var n,r=a(52),l=a(53),o=a(63),c=a(62),i=a(44),s=a(34),u=a(0),m=a.n(u),p=a(5),d=a.n(p),h=(a(79),a(28)),f=a(35),g=a(65),w=a(59),E=a.n(w),y=a(60),b=a.n(y),v=a(61),x=a.n(v),O=a(88),j=a(58),k=a.n(j),F=a(57),T=a.n(F),C=a(48),N=a(45),S=a(87),I=a(49),L=Object(C.a)({breakpoints:{values:{xs:300,sm:640,md:1024,lg:1280,xl:1e3}}}),z=Object(N.a)({awesome:{color:"#FFFFFF"}}),D=(Object(N.a)({awesome:{color:"#000000"}}),Object(N.a)({drawerPaper:(n={},Object(s.a)(n,L.breakpoints.down("md"),{width:"100%",height:300}),Object(s.a)(n,L.breakpoints.up("md"),{width:200,height:"100%"}),n)})),R=Object(N.a)({yo:Object(s.a)({},L.breakpoints.up("md"),{display:"none"})});function M(e){var t=m.a.useState(null),a=Object(i.a)(t,2),n=a[0],r=a[1],l=function(){r(null)};return m.a.createElement(m.a.Fragment,null,m.a.createElement(h.a,{className:e.className,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)}},m.a.createElement("img",{src:"smiley.jpg",className:"avatarThingy"})),m.a.createElement(S.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:l},m.a.createElement(I.a,{onClick:l},"Profile"),m.a.createElement(I.a,{onClick:l},"My account"),m.a.createElement(I.a,{onClick:l},"Logout")))}function B(e){var t=e.this,a=z();return m.a.createElement(m.a.Fragment,null,m.a.createElement(f.a,{position:"fixed",top:"0",left:"0"},m.a.createElement(g.a,{classes:{root:a.awesome},onClick:function(){return t.toggleDrawer()}},m.a.createElement(T.a,null))))}function W(e){var t=function(){var e=Object(u.useState)([0,0]),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(u.useLayoutEffect)((function(){function e(){n([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}(),a=Object(i.a)(t,2),n=a[0],r=(a[1],e.this);n<1024?(r.drawerType="persistent",r.drawerLocation="top"):(r.drawerType="permanent",r.drawerLocation="left");var l=D(),o=R();return m.a.createElement(m.a.Fragment,null,m.a.createElement(O.a,{classes:{paper:l.drawerPaper},open:r.state.drawerOpen,variant:r.drawerType,anchor:r.drawerLocation},m.a.createElement(g.a,{classes:{root:o.yo},onClick:function(){return r.toggleDrawer()}},m.a.createElement(k.a,null)),m.a.createElement(h.a,{startIcon:m.a.createElement(E.a,null),size:"large",variant:"contained",color:"primary",className:"unstyled-button"},"HOME"),m.a.createElement(h.a,{startIcon:m.a.createElement(b.a,null),size:"large",variant:"contained",color:"primary",className:"cool-button"},"STUFF"),m.a.createElement(h.a,{startIcon:m.a.createElement(x.a,null),size:"large",variant:"contained",color:"primary",className:"cool-button"},"HI"),m.a.createElement(h.a,{size:"large",variant:"contained",color:"primary",className:"cool-button"},"ME")))}var H=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={count:0,allText:[],messageText:"",drawerOpen:!1},e.drawerType="persistent",e.drawerLocation="left",e.style=function(){return 1},e.inputRef=m.a.createRef(),e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;this.state.count;return m.a.createElement(m.a.Fragment,null,m.a.createElement(f.a,{className:"topbar",display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",flexWrap:"wrap"},m.a.createElement("img",{src:"smiley.jpg",className:"centered",alt:"smile"}),m.a.createElement(M,null)),m.a.createElement(B,{this:this}),m.a.createElement(W,{this:this}),m.a.createElement(f.a,{padding:"5px",className:"input chatContainer"},m.a.createElement(m.a.Fragment,null,this.state.allText)),m.a.createElement(f.a,{className:"hi hi2",display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"flex-start",alignItems:"center"},m.a.createElement("input",{className:"myInput",name:"messageText",onChange:function(t){return e.onChangeValue(t)},value:this.state.messageText,ref:this.inputRef,type:"text",placeholder:"Your Message here"}),m.a.createElement(h.a,{variant:"contained",color:"primary",className:"sendButton",onClick:function(){return e.myFunction()}},"SEND")))}},{key:"toggleDrawer",value:function(){console.log(window.innerWidth),console.log("wow"),this.setState({drawerOpen:!this.state.drawerOpen})}},{key:"onChangeValue",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"myFunction",value:function(){for(var e,t=this.state.messageText,a=!0,n=0;n<t.length;n++)if(" "!==t[n]){a=!1;break}!1===a&&""!==t&&(this.setState({count:this.state.count+1}),this.setState({allText:this.state.allText.concat(m.a.createElement(f.a,{fontFamily:"Roboto",bgcolor:"primary.main",padding:"10px",boxShadow:2,borderRadius:16,color:"secondary.main",className:"chatBubble"},"\n"+(null===(e=this.inputRef.current)||void 0===e?void 0:e.value)))}));this.setState({messageText:""})}}]),a}(u.Component);d.a.render(m.a.createElement(H,null),document.getElementById("root"))},79:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.b609e450.chunk.js.map