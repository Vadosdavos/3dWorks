(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports={colorsContainer:"ControlGroup_colorsContainer__2SuZ4",texturesContainer:"ControlGroup_texturesContainer__P0PwU",openBtn:"ControlGroup_openBtn__36dGn",openBtnActive:"ControlGroup_openBtnActive__3zAKk",controlItem:"ControlGroup_controlItem__1cGR_",closedContainer:"ControlGroup_closedContainer__2J4EZ"}},20:function(e,t,a){e.exports={header:"App_header__J561a",mainTitle:"App_mainTitle__1vcce",mainContainer:"App_mainContainer__2FrEr",footer:"App_footer__2clAm",canvasContainer:"App_canvasContainer__V8FJK",tipBox:"App_tipBox__35Bh7"}},21:function(e,t,a){e.exports={loaderContainer:"CustomLoader_loaderContainer__3qbRF",loaderBody:"CustomLoader_loaderBody__1oJFh",pl:"CustomLoader_pl__7bQdw",pl__ring:"CustomLoader_pl__ring__3bg43",pl__worm1:"CustomLoader_pl__worm1__1RJbL",pl__worm2:"CustomLoader_pl__worm2__Z96TO",pl__worm3:"CustomLoader_pl__worm3__-CtKE",worm1:"CustomLoader_worm1__3fbIb",worm2:"CustomLoader_worm2__2jMin",worm3:"CustomLoader_worm3__MkDqc"}},33:function(e,t,a){e.exports={controlsContainer:"Controls_controlsContainer__3Ognb",bgColorContainer:"Controls_bgColorContainer__2M6OM",lastTitle:"Controls_lastTitle__ajwTw"}},46:function(e,t,a){e.exports=a.p+"static/media/tex1.20a3ea1c.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/tex2.b317e4bf.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/tex3.7a086e97.jpg"},49:function(e,t,a){e.exports=a.p+"static/media/tex4.5ac24cad.jpg"},50:function(e,t,a){e.exports=a.p+"static/media/tex5.aca09de5.jpg"},52:function(e,t,a){e.exports=a.p+"static/media/skate.72b3bd60.glb"},54:function(e,t,a){e.exports=a.p+"static/media/metalMap.e79c7632.png"},55:function(e,t,a){e.exports=a.p+"static/media/normalMap.293d327e.png"},56:function(e,t,a){e.exports=a(78)},76:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n,o=a(7),r=a.n(o),l=a(43),c=a.n(l),s=a(22),i=a(12),u=a(29),m=Object(u.b)({name:"color",initialState:{bgColor:"white",deckColor:"",wheelsColor:"",deckTexture:"",target:"deckColor"},reducers:{changeBgColor:function(e,t){e.bgColor=t.payload},changeDeckColor:function(e,t){e.deckColor=t.payload},changeWheelsColor:function(e,t){e.wheelsColor=t.payload},changeDeckTexture:function(e,t){e.deckTexture=t.payload},changeTarget:function(e,t){e.target=t.payload}}}),p=m.actions,d=p.changeBgColor,_=p.changeDeckColor,f=p.changeDeckTexture,C=p.changeTarget,g=p.changeWheelsColor,h=m.reducer,b=a(33),E=a.n(b),k=a(46),w=a.n(k),x=a(47),v=a.n(x),j=a(48),y=a.n(j),O=a(49),T=a.n(O),L=a(50),B=a.n(L),N=[w.a,v.a,y.a,T.a,B.a],M=["#808080","#c0c0c0","cornsilk","#ff00ff","#800080","#ff0000","#800000","#ffff00","#808000","#00ff00","#008000","#00ffff","#008080","#0000ff","#000080"];!function(e){e.deckColor="deckColor",e.texture="texture",e.bgColor="bgColor",e.wheelsColor="wheelsColor"}(n||(n={}));var D=a(19),F=a.n(D),A=function(e){var t=e.data,a=e.handleFunction,n=e.children,l=e.textures,c=void 0!==l&&l,s=Object(o.useState)(!1),u=Object(i.a)(s,2),m=u[0],p=u[1];return r.a.createElement("li",null,n,r.a.createElement("button",{className:"".concat(F.a.openBtn," ").concat(m?F.a.openBtnActive:""),onClick:function(){return p(function(e){return!e})}},">"),r.a.createElement("ul",{className:"".concat(c?F.a.texturesContainer:F.a.colorsContainer," ").concat(m?"":F.a.closedContainer)},t.map(function(e){return r.a.createElement("li",{key:e,style:c?{backgroundImage:"url(".concat(e,")")}:{backgroundColor:e},className:F.a.controlItem,onClick:a,id:c?e.slice(e.length-14,e.length-13):e})})))},S=function(){var e=Object(o.useState)("#ffffff"),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(s.b)(),u=Object(o.useCallback)(function(e){var t=e.target;c(_(t.id)),c(C(n.deckColor))},[_,C]),m=Object(o.useCallback)(function(e){var t=e.target;c(g(t.id)),c(C(n.wheelsColor))},[g,C]),p=Object(o.useCallback)(function(e){var t=e.target;c(f(t.id)),c(C(n.texture))},[f,C]);return r.a.createElement("ul",{className:E.a.controlsContainer},r.a.createElement("li",null,r.a.createElement("h5",null,"Background color"),r.a.createElement("div",{className:E.a.bgColorContainer},r.a.createElement("input",{type:"color",id:"bgColorInput",value:a,onInput:function(e){var t=e.target;c(d(t.value)),l(t.value),c(C(n.bgColor))}}))),r.a.createElement(A,{data:M,handleFunction:u},r.a.createElement("h5",null,"Deck color")),r.a.createElement(A,{data:M,handleFunction:m},r.a.createElement("h5",null,"Wheels color")),r.a.createElement(A,{data:N,handleFunction:p,textures:!0},r.a.createElement("h5",{className:E.a.lastTitle},"Deck print")))},I=a(24),G=a(20),R=a.n(G),W=a(3),J=a(0),P=a(51),V=a(52),K=a.n(V),Z=a(53),q=a(54),z=a.n(q),H=a(55),Q=a.n(H),U=.5*Math.PI,X=function(e){var t=e.state,a=t.deckColor,l=t.deckTexture,c=t.target,s=t.wheelsColor,i=Object(J.j)(Z.a,K.a),u=Object(o.useRef)(i.scene),m=Object(J.j)(W.TextureLoader,N),p=Object(J.j)(W.TextureLoader,Q.a),d=Object(J.j)(W.TextureLoader,z.a),_=i.nodes.Rear_Truck_HP_bushing2_Wood_0,f=i.nodes.Rear_Truck_HP_bushing2_Wheels_0,C=new W.MeshStandardMaterial({normalMap:p,metalnessMap:d,metalness:1,roughnessMap:d,roughness:1});return Object(o.useLayoutEffect)(function(){switch(c){case n.deckColor:C.color=new W.Color(a),_.material=C;break;case n.wheelsColor:var e=new W.MeshStandardMaterial({color:new W.Color(s)});f.material=e;break;case n.texture:var t=m[+l-1];t.wrapS=W.RepeatWrapping,t.wrapT=W.RepeatWrapping,t.repeat.set(10,10),C.map=t,_.material=C}},[a,l,c,s]),r.a.createElement("primitive",{ref:u,object:i.scene,scale:[1,1,1],rotation:[0,-U,0]})};Object(J.g)({OrbitControls:P.a});var Y=function(e){var t=e.state,a=t.bgColor,n=new W.Vector3(0,0,0),l=Object(J.i)(),c=l.scene,s=l.camera,i=l.gl.domElement;return Object(o.useEffect)(function(){s.position.y=-60,s.lookAt(n)},[]),Object(o.useEffect)(function(){c.background=new W.Color(a)},[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("orbitControls",{args:[s,i],target:n,maxDistance:100,minDistance:20}),r.a.createElement("ambientLight",{intensity:.3}),r.a.createElement("pointLight",{intensity:.7,position:[0,-30,0]}),r.a.createElement("directionalLight",{intensity:.5,position:[0,10,0]}),r.a.createElement(X,{state:t}))},$=a(21),ee=a.n($),te=function(){return r.a.createElement("div",{className:ee.a.loaderContainer},r.a.createElement("div",{className:ee.a.loaderBody},r.a.createElement("svg",{className:ee.a.pl,viewBox:"0 0 176 160",width:"176px",height:"160px",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"pl-grad",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"0%",stopColor:"hsl(33,90%,55%)"}),r.a.createElement("stop",{offset:"30%",stopColor:"hsl(33,90%,55%)"}),r.a.createElement("stop",{offset:"100%",stopColor:"hsl(3,90%,55%)"}))),r.a.createElement("g",{fill:"none",strokeWidth:"16",strokeLinecap:"round"},r.a.createElement("circle",{className:"pl__ring",r:"56",cx:"88",cy:"96",stroke:"hsla(0,10%,10%,0.1)"}),r.a.createElement("path",{className:ee.a.pl__worm1,d:"M144,96A56,56,0,0,1,32,96",stroke:"url(#pl-grad)",strokeDasharray:"43.98 307.87"}),r.a.createElement("path",{className:ee.a.pl__worm2,d:"M32,136V96s-.275-25.725,14-40",stroke:"hsl(33,90%,55%)",strokeDasharray:"0 40 0 44",strokeDashoffset:"0.001",visibility:"hidden"}),r.a.createElement("path",{className:ee.a.pl__worm3,d:"M144,136V96s.275-25.725-14-40",stroke:"hsl(33,90%,55%)",strokeDasharray:"0 40 0 44",strokeDashoffset:"0.001",visibility:"hidden"})))))},ae=function(){var e=Object(s.c)(function(e){return e});return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:R.a.header},r.a.createElement("h2",{className:R.a.mainTitle},"Skateboard 3d configurator")),r.a.createElement("main",{className:R.a.mainContainer},r.a.createElement(S,null),r.a.createElement("section",{className:R.a.canvasContainer},r.a.createElement(o.Suspense,{fallback:r.a.createElement(te,null)},r.a.createElement(I.a,null,r.a.createElement(Y,{state:e.settings})),r.a.createElement("div",{className:R.a.tipBox},r.a.createElement("span",null,"Scroll to zoom in"),r.a.createElement("span",null,"Click and drag to rotate"))))),r.a.createElement("footer",{className:R.a.footer},r.a.createElement("a",{href:"https://github.com/Vadosdavos"},"@Vadosdavos"),", 2022"))},ne=(a(76),function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,79)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),o(e),r(e),l(e)})}),oe=Object(u.a)({reducer:{settings:h}});c.a.createRoot(document.getElementById("root")).render(r.a.createElement(s.a,{store:oe},r.a.createElement(ae,null))),ne()}},[[56,3,2]]]);
//# sourceMappingURL=main.5b7e0844.chunk.js.map