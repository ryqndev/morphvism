(this.webpackJsonptreehacks2020=this.webpackJsonptreehacks2020||[]).push([[0],{39:function(e,t,a){e.exports=a(72)},44:function(e,t,a){},61:function(e,t,a){},64:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n,r=a(1),c=a.n(r),o=a(23),i=a.n(o),l=(a(44),a(12)),s=a(4),u=a.n(s),m=(a(29),a(45),function(e){var t={name:e.displayName,email:e.email,emailverified:e.emailVerified,anon:e.isAnonymous,id:e.uid};return localStorage.setItem("user",JSON.stringify(t)),t}),d=function(){(n=s.firestore()).enablePersistence().catch((function(e){"failed-precondition"===e.code||e.code}))},p={check:function(e){s.auth().onAuthStateChanged((function(t){t&&m(t),e(t)}))}},f=function(e){console.log(e),n.collection("users").doc(JSON.parse(localStorage.getItem("user")).id).set(e).then((function(){console.log("Document successfully written!")})).catch((function(e){console.error("Error writing document: ",e)}))},h=function(){s.auth().signOut().then((function(){localStorage.clear(),window.location.reload()}))},E=a(19),v=a.n(E),b=a(24),g=(a(60),a(61),function(){return Object(r.useEffect)((function(){(b.a.AuthUI.getInstance()||new b.a.AuthUI(v.a.auth())).start("#auth-container",{signInOptions:[v.a.auth.GoogleAuthProvider.PROVIDER_ID,v.a.auth.FacebookAuthProvider.PROVIDER_ID,v.a.auth.EmailAuthProvider.PROVIDER_ID]})})),c.a.createElement("div",{className:"login-wrapper"},c.a.createElement("div",{id:"auth-container"}))}),O=a(14),w=a(20),j=a(9),S=a(25),N=a.n(S),I=(a(63),a(64),function(e){var t=e.domain,a=e.setDomain,n=function(e){var n=e.target.name,r=Object(w.a)(t);r[n]=Number(e.target.value),a(r)};return c.a.createElement("p",null,"Domain: [",c.a.createElement("input",{type:"text",name:"0",value:t[0],onChange:n}),",",c.a.createElement("input",{type:"text",name:"1",value:t[1],onChange:n}),"]")}),x=Object(l.g)((function(e){var t=e.history,a=Object(r.useState)(""),n=Object(j.a)(a,2),o=n[0],i=n[1],l=Object(r.useState)(new Set),s=Object(j.a)(l,2),u=s[0],m=s[1],d=Object(r.useState)(""),p=Object(j.a)(d,2),h=p[0],E=p[1],v=Object(r.useState)(""),b=Object(j.a)(v,2),g=b[0],O=b[1],S=Object(r.useState)([-10,10]),x=Object(j.a)(S,2),k=x[0],y=x[1],C=Object(r.useState)([-10,10]),A=Object(j.a)(C,2),D=A[0],R=A[1],V=Object(r.useState)(null),z=Object(j.a)(V,2),J=z[0],P=z[1],L=Object(r.useState)(!1),F=Object(j.a)(L,2),B=F[0],W=F[1];Object(r.useEffect)((function(){for(var e=new Set,t=0;t<o.length;t++){var a=o.charAt(t);a.toLowerCase()!==a.toUpperCase()&&"i"!==a&&"e"!==a&&e.add(a)}m(e)}),[o]),Object(r.useEffect)((function(){if(""!==h&&""!==g){var e=Object(w.a)(u),t={},a=e.indexOf(h);e.splice(a,1),a=e.indexOf(g),e.splice(a,1),e.forEach((function(e){t[e]=0})),P(t)}}),[h,g,u]);return c.a.createElement("div",{className:"form"},c.a.createElement("h3",null,"Create a visual"),c.a.createElement("p",null,"Expression:"),c.a.createElement("input",{type:"text",value:o,onChange:function(e){i(e.target.value)},placeholder:"Ex.) x + y + z"}),c.a.createElement("div",{className:"free-vars"},c.a.createElement("h3",null,"Free Variables"),c.a.createElement("div",{className:"dropdown-wrapper"},c.a.createElement("label",null,"Var 1:"),c.a.createElement(N.a,{options:Object(w.a)(u),onChange:function(e){E(e.value)},value:h,placeholder:"Select an option"}),c.a.createElement("span",null,"\u2514\u2500"),c.a.createElement(I,{domain:k,setDomain:y})),c.a.createElement("div",{className:"dropdown-wrapper"},c.a.createElement("label",null,"Var 2:"),c.a.createElement(N.a,{options:Object(w.a)(u),onChange:function(e){O(e.value)},value:g,placeholder:"Select an option"}),c.a.createElement("span",null,"\u2514\u2500"),c.a.createElement(I,{domain:D,setDomain:R}))),c.a.createElement("div",{className:"free-vars"},c.a.createElement("h3",null,"Fixed Variables"),null!==J&&c.a.createElement("div",null,JSON.stringify(J))),c.a.createElement("button",{onClick:function(){f({eq:o,var1:h,var2:g,v1dom:k,v2dom:D,fixed:J}),W(!0)}},"submit"),B&&c.a.createElement("button",{onClick:function(){t.push("./view/"+JSON.parse(localStorage.getItem("user")).id)}},"join room"),c.a.createElement("br",null),B&&c.a.createElement("div",{className:"confirmed"},"Room Link: ",JSON.parse(localStorage.getItem("user")).id))})),k=a(3),y=a(37),C=a(38),A=(a(69),Object(l.g)((function(e){var t=e.history,a=Object(r.useState)(""),n=Object(j.a)(a,2),o=n[0],i=n[1],l=Object(r.useRef)(null),s=Object(r.useState)(!0),u=Object(j.a)(s,2);u[0],u[1];return Object(r.useEffect)((function(){var e,t=l.current.clientWidth,a=l.current.clientHeight,n=new k.Scene,r=new k.PerspectiveCamera(75,t/a,.1,1e3),c=new k.WebGLRenderer({antialias:!0}),o=new k.BoxGeometry(1,1,1),i=new k.MeshBasicMaterial({color:16711935}),s=new C.a(r,c.domElement);r.position.z=4,c.setClearColor("#000000");var u=new k.AmbientLight(16777215,1.2);n.add(u),c.setSize(t,a),(new y.OBJLoader).load("https://hidden-eyrie-79468.herokuapp.com/output.obj",(function(e){e.traverse((function(e){e instanceof k.Mesh&&e.material.color.setHex(16777215)})),e.position.y=0,e.position.x=0,n.add(e)}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.log("An error happened"+e)}));var m=function(){c.render(n,r)},d=function(){t=l.current.clientWidth,a=l.current.clientHeight,c.setSize(t,a),r.aspect=t/a,r.updateProjectionMatrix(),m()},p=function t(){m(),e=window.requestAnimationFrame(t)},f=function(){e||(e=requestAnimationFrame(p))},h=function(){cancelAnimationFrame(e),e=null};return l.current.appendChild(c.domElement),window.addEventListener("resize",d),f(),s.current={start:f,stop:h},function(){h(),window.removeEventListener("resize",d),l.current.removeChild(c.domElement),o.dispose(),i.dispose()}}),[]),Object(r.useEffect)((function(){void 0===t.entries[2]||i(t.entries[2].pathname.split("/")[2])}),[t]),Object(r.useEffect)((function(){}),[o]),c.a.createElement("div",{className:"view",ref:l})}))),D=(a(70),function(){return c.a.createElement(l.a,{initialEntries:["/start","/form","/view"],initialIndex:0},c.a.createElement(l.d,null,c.a.createElement(l.b,{exact:!0,path:"/start"},c.a.createElement("div",{className:"start-header"},c.a.createElement("div",{className:"greeting"},"Hello, ",JSON.parse(localStorage.getItem("user")).name),c.a.createElement("div",{className:"logout",onClick:function(){h()}},"logout")),c.a.createElement("div",{className:"start-wrapper"},"Welcome to ",c.a.createElement("span",null,"Morphvism"),"!",c.a.createElement("div",{className:"box-holder"},c.a.createElement(O.a,{to:"/form"},c.a.createElement("div",{className:"box"},c.a.createElement("p",null,"Start a new room"),c.a.createElement("h3",null,"Create New"))),c.a.createElement(O.a,{to:"/view"},c.a.createElement("div",{className:"box"},c.a.createElement("p",null,"Visualize a current room"),c.a.createElement("h3",null,"Join Room")))))),c.a.createElement(l.b,{exact:!0,path:"/form",component:x}),c.a.createElement(l.b,{path:"/view"},c.a.createElement(A,null))))});a(71);var R=Object(l.g)((function(e){var t=e.history;return Object(r.useEffect)((function(){d(),p.check((function(e){t.push(e?"/app":"/login")}))}),[t]),c.a.createElement(l.d,null,c.a.createElement(l.b,{exact:!0,path:"/"}),c.a.createElement(l.b,{path:"/login"},c.a.createElement(g,null)),c.a.createElement(l.b,{path:"/app"},c.a.createElement(D,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.initializeApp({apiKey:"AIzaSyA8zmIV78Prur4OFUNXklEgCrV3TkI38Q8",authDomain:"treehacks-d9130.firebaseapp.com",databaseURL:"https://treehacks-d9130.firebaseio.com",projectId:"treehacks-d9130",storageBucket:"treehacks-d9130.appspot.com",messagingSenderId:"959568977585",appId:"1:959568977585:web:f409050a81fc1756018c90"}),i.a.render(c.a.createElement(l.a,{initialEntries:["/","/login","/app"],initialIndex:0},c.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.e992bc43.chunk.js.map