(this["webpackJsonpndn-portal"]=this["webpackJsonpndn-portal"]||[]).push([[0],{212:function(e,t,n){},449:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(47),s=n.n(c),r=n(10),i=n(27),l=n.n(i),d=n(15),u=n(452),j=n(453),b=n(168),h=n(458),x=n(454),p=n(1),O=function(e){var t=e.setAuthorized;Object(a.useEffect)((function(){document.title="Login"}),[]);var n=Object(d.g)(),o=Object(a.useState)({username:"",password:""}),c=Object(r.a)(o,2),s=c[0],i=c[1];return Object(p.jsx)("div",{style:{display:"flex",alignItems:"center",width:"100%",height:"100vh"},children:Object(p.jsx)(u.a,{children:Object(p.jsxs)("div",{style:{border:"2px solid black",padding:"5px"},children:[Object(p.jsx)(j.a,{className:"justify-content-center",children:Object(p.jsx)("h1",{style:{fontFamily:"Roboto"},children:"Login"})}),Object(p.jsx)(j.a,{className:"justify-content-center",children:Object(p.jsx)(b.a,{xs:"auto",children:Object(p.jsxs)(h.a,{className:"justify-content-center",children:[Object(p.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(h.a.Label,{children:"Username"}),Object(p.jsx)(h.a.Control,{"data-testid":"login-form-username",type:"text",value:s.username,onChange:function(e){e.target.value.length<=10?i({username:e.target.value,password:s.password}):window.alert("Username cannot be longer than 10 characters!")}}),Object(p.jsx)(h.a.Text,{className:"text-muted",children:"Never share your username or password with anyone else."})]}),Object(p.jsxs)(h.a.Group,{controlId:"formBasicPassword",children:[Object(p.jsx)(h.a.Label,{children:"Password"}),Object(p.jsx)(h.a.Control,{"data-testid":"login-form-password",type:"password",value:s.password,onChange:function(e){e.target.value.length<=10?i({username:s.username,password:e.target.value}):window.alert("Password cannot be longer than 10 characters!")}})]}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(x.a,{variant:"primary",onClick:function(){!function(e){l.a.post("http://localhost:3001/persons",s).then((function(n){if(200===n.status)t(!0),e.push("/build");else if(204===n.status)throw Error("User name or Password incorrect!")})).catch((function(e){window.alert(e)}))}(n)},children:"Submit"})})]})})})]})})})},g=n(28),m=n(32),f=n(17),y=n.n(f),v=n(44),w=n(457),k=n(455),C=n(169),N=function(e){var t=e.name,n=e.title,a=e.placeHolder,o=e.inputValue,c=e.changeHandler,s=e.maxLength;return Object(p.jsxs)(k.a,{className:"mb-3",children:[Object(p.jsx)(k.a.Text,{style:{borderBottomRightRadius:"0",borderTopRightRadius:"0",width:"80px",justifyContent:"center"},children:n}),Object(p.jsx)(C.a,{name:t,placeholder:a,value:o,onChange:c,maxLength:s})]})},S=function(e){var t=e.title,n=e.config,a=e.fields,o=e.showModal,c=e.setShowModal,s=e.submitHandler,r=a.map((function(e,t){return Object(p.jsx)(N,{name:e.name,title:e.title,placeHolder:e.placeHolder,inputValue:e.inputValue,changeHandler:e.changeHandler,maxLength:e.maxLength},t)}));return Object(p.jsxs)(w.a,{show:o,onHide:function(){return c(!1)},backdrop:"static",keyboard:!1,children:[Object(p.jsx)(w.a.Header,{closeButton:!0,children:Object(p.jsx)(w.a.Title,{children:t})}),Object(p.jsx)(w.a.Body,{children:r}),Object(p.jsxs)(w.a.Footer,{children:[Object(p.jsx)(x.a,{variant:"secondary",onClick:function(){return c(!1)},children:"Close"}),Object(p.jsx)(x.a,{variant:"primary",onClick:function(){s(),console.log(n),c(!1)},children:t})]})]})},T=n(67),H=n(89),D=function(e){var t=e.addNode,n=e.setNodeConfig,a=e.setShowNodeModal,o=e.createSdnTopology,c={"SDN Controller":5,"Simple Node":1,"Intermediate Node":2,"Advanced Node":4,"Custom Node":1};return Object(p.jsx)("div",{style:{border:"2px solid white",paddingTop:"15px",paddingBottom:"5px",justifyContent:"space-around",borderRadius:"0px 0px 5px 5px"},className:"d-flex",children:function(){var e=[],s=function(s){e.push(Object(p.jsxs)("div",{className:"text-center",children:[Object(p.jsx)(x.a,{variant:"secondary",onClick:function(){"Custom Node"===s?(n({memory:"",cache:"",radius:"",angle:"",cpu:""}),a(!0)):"SDN Controller"===s?o():t(c[s],s)},children:Object(p.jsx)(H.a,{icon:"SDN Controller"==s?T.a:T.c})})," ",Object(p.jsx)("br",{}),s]},s))};for(var r in c)s(r);return e}()})},L=n(461),M=n(460),B=function(e){var t=e.title,n=e.message,a=e.show,o=e.setShow;return Object(p.jsx)("div",{children:Object(p.jsxs)(M.a,{show:a,onClose:function(){return o(!1)},children:[Object(p.jsx)(M.a.Header,{children:Object(p.jsx)("strong",{className:"me-auto block",children:t})}),Object(p.jsx)(M.a.Body,{className:"text-left text-white bg-dark",children:n})]})})},R=n(170),A=function(e){var t,n=e.setNodeOptions,o=e.setNodeClicked,c=e.setShowOption,s=e.topoData,i=e.graphConfig,l=e.onClickLink,d=e.onClickNode,u=Object(a.useState)(100),j=Object(r.a)(u,2),b=j[0],h=j[1];return Object(p.jsxs)("div",{style:{width:"100%"},children:[Object(p.jsx)(R.Graph,(t={id:"graph-id",data:s,onClickNode:d,config:i},Object(g.a)(t,"onClickNode",d),Object(g.a)(t,"onDoubleClickNode",(function(e,t){n(!0),o(e)})),Object(g.a)(t,"onRightClickNode",(function(e,t){e.preventDefault(),c(!0),o(t)})),Object(g.a)(t,"onClickLink",l),Object(g.a)(t,"onNodePositionChange",(function(e,t,n){console.log("Node ".concat(e," moved to new position x= ").concat(t," y= ").concat(n))})),Object(g.a)(t,"onZoomChange",(function(e,t){console.log("Zoomed : ".concat(e,", ").concat(t)),h(Math.floor(100*t))})),t)),Object(p.jsxs)("h5",{style:{color:"black"},children:["Current Zoom: ",b,"%"]})]})},I=[{nodes:[{id:"node1",x:112,y:172},{id:"node2",x:145,y:292},{id:"node3",x:328,y:296},{id:"node4",x:374,y:117},{id:"node5",x:105,y:179}],links:[{source:"node1",target:"node2"},{source:"node2",target:"node3"},{source:"node3",target:"node4"},{source:"node5",target:"node1"}]}],P=n(459),U=function(e){var t=e.message,n=e.variant;return e.showAlert?Object(p.jsx)(P.a,{className:"text-center",variant:n,children:t+". "}):null},_=function(e){var t=e.topoData,n=e.setTopoData,o=e.graphConfig,c=e.createTopology,s=Object(a.useState)(""),i=Object(r.a)(s,2),h=i[0],O=i[1],f=Object(a.useState)("Choose File"),k=Object(r.a)(f,2),C=k[0],N=k[1],R=Object(a.useState)("success"),P=Object(r.a)(R,2),_=P[0],F=P[1],E=Object(a.useState)(""),z=Object(r.a)(E,2),V=z[0],G=z[1],K=Object(a.useState)(!1),Z=Object(r.a)(K,2),J=Z[0],W=Z[1],Y=Object(a.useState)(" "),$=Object(r.a)(Y,2),Q=$[0],X=$[1];Object(a.useEffect)((function(){document.title="Topology Builder"}),[V]);var q=Object(d.g)(),ee=Object(a.useState)(!1),te=Object(r.a)(ee,2),ne=te[0],ae=te[1],oe=Object(a.useState)({memory:"",cache:"",radius:"",angle:"",cpu:"",name:""}),ce=Object(r.a)(oe,2),se=ce[0],re=ce[1],ie=Object(a.useState)(t.nodes.length+2),le=Object(r.a)(ie,2),de=(le[0],le[1]),ue=Object(a.useState)({x:200*Math.random(),y:200*Math.random()}),je=Object(r.a)(ue,2),be=je[0],he=je[1],xe=Object(a.useState)(0),pe=Object(r.a)(xe,2),Oe=pe[0],ge=pe[1],me=Object(a.useState)(!1),fe=Object(r.a)(me,2),ye=fe[0],ve=fe[1],we=function(){var e=Object(v.a)(y.a.mark((function e(t){var n,a,o,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),ve(!0),(n=new FormData).append("file",h),F("success"),e.prev=5,e.next=8,l.a.post("http://localhost:3001/upload",n,{headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"true"}});case 8:a=e.sent,o=a.data,c=o.fileName,o.filePath,console.log(c,C),G("File Uploaded"),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(5),F("danger"),console.log(e.t0),500===e.t0.response.status?(console.log("There was a problem with the server"),G(e.t0.response.data.msg)):(G(e.t0.response.data.msg),console.log(e.t0.response.data.msg));case 19:setTimeout((function(){ve(!1)}),3e3);case 20:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){ge(1)}),[]),Object(a.useEffect)((function(){Oe>0&&(console.log(I[0].nodes),n({nodes:I[0].nodes,links:I[0].links}),de(t.nodes.length+2),W(!0),setTimeout((function(){W(!1)}),3e3),ot(!1),ve(!1))}),[I]);var ke=function(e){var n=e.target.name,a=e.target.value,o=!1;switch(n){case"memory":(o=a>0&&a<=1048576)||X((function(){return""}));break;case"radius":(o=a>=0&&a<=1)||X((function(){return""}));break;case"cache":(o=a>0&&a<=102400)||X((function(){return""}));break;case"angle":(o=a>=0&&a<=360)||X((function(){return""}));break;case"cpu":(o=a>0&&a<=100)||X((function(){return""}));break;case"name":var c=t.nodes.filter((function(e){return e.id==a}));console.log(c),0==c.length?o=!0:(console.log(c.length),X((function(){return"Node with that name already exists"}))),(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(a)||/^[0-9]/.test(a))&&(o=!1,X((function(){return"Invalid node name"}))),a.indexOf(" ")>=0&&(X((function(){return"Node name cannot contain spaces"})),console.log("Contain Spaces"),o=!1)}o?re(Object(m.a)(Object(m.a)({},se),{},Object(g.a)({},e.target.name,e.target.value))):(window.alert("Invalid ".concat(n," value, please enter correct value.\n").concat(Q)),re(Object(m.a)(Object(m.a)({},se),{},Object(g.a)({},n,""))))};console.log();var Ce=[{name:"name",title:"Name",placeHolder:"Enter Custom Node Name",inputValue:se.name,changeHandler:ke,maxLength:10},{name:"memory",title:"Memory",placeHolder:"in KB's",inputValue:se.memory,changeHandler:ke},{name:"cache",title:"Cache",placeHolder:"in KB's",inputValue:se.cache,changeHandler:ke},{name:"radius",title:"Radius",placeHolder:"<0.0-1.0>",inputValue:se.radius,changeHandler:ke},{name:"angle",title:"Angle",placeHolder:"<0-360>",inputValue:se.angle,changeHandler:ke},{name:"cpu",title:"CPU",placeHolder:"<0-100%>",inputValue:se.cpu,changeHandler:ke}],Ne=Object(a.useState)({source:"",target:""}),Se=Object(r.a)(Ne,2),Te=Se[0],He=Se[1];Object(a.useEffect)((function(){if(""===Te.source&&""!==Te.target)Ye({message:"Set Source Node"}),Ke(!0);else if(""===Te.target&&""!==Te.source)Ye({message:"Set Target Node"}),Ke(!0);else if(Te.source===Te.target&&""!==Te.source&&""!==Te.target)Ye({message:"Source and Target Node cannot be same"}),Ke(!0);else if(""!==Te.source&&""!==Te.target&&Te.source!==Te.target){Ye({message:"Adding Link"});var e=t.links;e.push(Te),n(Object(m.a)(Object(m.a)({},t),{},{links:e})),He({source:"",target:""}),Ke(!1)}}),[Te]);var De=Object(a.useState)(""),Le=Object(r.a)(De,2),Me=Le[0],Be=Le[1],Re=Object(a.useState)(!1),Ae=Object(r.a)(Re,2),Ie=Ae[0],Pe=Ae[1],Ue=Object(a.useState)(!0),_e=Object(r.a)(Ue,2),Fe=_e[0],Ee=_e[1],ze=Object(a.useState)(!1),Ve=Object(r.a)(ze,2),Ge=Ve[0],Ke=Ve[1],Ze=Object(a.useState)({duration:0,message:""}),Je=Object(r.a)(Ze,2),We=Je[0],Ye=Je[1],$e=["(1) Right click on node to add Link.","(2) Double Click on Node to delete it.","(3) Zoom in & out using mouse scroll.","(4) Left Click for node properties."].map((function(e,t){return Object(p.jsx)("p",{children:e},t)})),Qe=Object(a.useState)(!1),Xe=Object(r.a)(Qe,2),qe=Xe[0],et=Xe[1],tt=Object(a.useState)(!1),nt=Object(r.a)(tt,2),at=nt[0],ot=nt[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(w.a,{show:ye,onHide:function(){return ve(!1)},backdrop:"static",keyboard:!1,children:[Object(p.jsx)(w.a.Body,{children:"Performing operation, please wait awhile..."}),Object(p.jsx)(L.a,{animated:!0,now:100}),Object(p.jsx)(w.a.Footer,{})]}),Object(p.jsx)(U,{message:V,variant:_,showAlert:J}),Object(p.jsxs)(u.a,{className:"text-center",style:{minHeight:"100vh",backgroundColor:"black"},children:[Object(p.jsxs)("h1",{style:{fontFamily:"Roboto"},children:[Object(p.jsxs)("span",{children:[Object(p.jsx)(H.a,{icon:T.b})," "]}),"Build Topology"]}),Object(p.jsx)(j.a,{children:Object(p.jsx)(b.a,{style:{backgroundColor:"white"},children:Object(p.jsx)(A,{setNodeOptions:et,setNodeClicked:Be,topoData:t,graphConfig:o,setShowOption:Pe,onClickNode:function(e,t){console.log(e,t);var n="Node Configurations: \n \n                CPU: ".concat(t.cpu?100*t.cpu+"%":"20%","\n\n                Memory: ").concat(t.memory?t.memory+"Kb":"1024Kb","\n\n                Cache: ").concat(t.cache?t.cache+"Kb":"512Kb","\n\n                Radius: ").concat(t.radius?t.radius:"0.1","\n\n                Angle: ").concat(t.angle?t.angle+"degree":"0 degree","\n");Ye({message:n}),Ke(!0)}})})}),Object(p.jsx)(j.a,{children:Object(p.jsx)(b.a,{style:{padding:"0px"},children:Object(p.jsx)(D,{addNode:function(e,a){console.log(a),"Custom Node"!==a&&re({memory:1024*e,cache:512*e,angle:0,radius:0,cpu:10*e}),de(t.nodes.length+2);var o=t.nodes.concat({id:"node".concat(t.nodes.length+1),x:be.x,y:be.y,memory:se.memory,radius:se.radius,cache:se.cache,angle:se.angle,cpu:se.cpu/100});n({nodes:o,links:t.links}),he({x:200*Math.random(),y:200*Math.random()})},setNodeConfig:re,setShowNodeModal:ae,createSdnTopology:function(){var e={nodes:[{id:"node1",x:358,y:190},{id:"node2",x:314,y:346},{id:"node3",x:397,y:493},{id:"node4",x:178,y:304},{id:"s",x:211,y:449}],links:[{source:"s",target:"node1"},{source:"s",target:"node2"},{source:"s",target:"node3"},{source:"s",target:"node4"}]};n({nodes:e.nodes,links:e.links}),he({x:200*Math.random(),y:200*Math.random()})}})})}),Object(p.jsxs)(j.a,{style:{marginTop:"30px",display:"flex",alignContent:"center"},children:[Object(p.jsx)(b.a,{children:Object(p.jsx)(x.a,{variant:"light",className:"btn-lg btn-block",onClick:function(){return function(){var e={nodes:[{id:"node1",x:358,y:190},{id:"node2",x:314,y:346},{id:"node3",x:397,y:493},{id:"node4",x:178,y:304},{id:"node5",x:211,y:449}],links:[{source:"node5",target:"node1"},{source:"node5",target:"node2"},{source:"node5",target:"node3"},{source:"node5",target:"node4"}]};n({nodes:e.nodes,links:e.links}),he({x:200*Math.random(),y:200*Math.random()})}()},children:"Star Topology"})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(x.a,{variant:"light",className:"btn-lg btn-block",onClick:function(){return function(){var e={nodes:[{id:"node1",x:133,y:192},{id:"node2",x:224,y:131},{id:"node3",x:478,y:359},{id:"node4",x:323,y:463},{id:"node5",x:151,y:104}],links:[{source:"node1",target:"node2"},{source:"node2",target:"node3"},{source:"node3",target:"node4"},{source:"node4",target:"node5"}]};n({nodes:e.nodes,links:e.links}),he({x:200*Math.random(),y:200*Math.random()})}()},children:"Bus Topology"})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(x.a,{variant:"light",className:"btn-lg btn-block",onClick:function(){return function(){var e={nodes:[{id:"node3",x:163,y:341},{id:"node4",x:924,y:363},{id:"node2",x:207,y:125},{id:"node1",x:893,y:105}],links:[{source:"node1",target:"node4"},{source:"node1",target:"node2"},{source:"node2",target:"node1"},{source:"node2",target:"node3"},{source:"node3",target:"node4"},{source:"node3",target:"node2"},{source:"node4",target:"node1"},{source:"node4",target:"node3"}]};n({nodes:e.nodes,links:e.links}),he({x:200*Math.random(),y:200*Math.random()})}()},children:"Ring Topology"})}),Object(p.jsx)(b.a,{style:{flexGrow:"1.5",borderRight:"3px solid white",marginRight:"30px",marginLeft:"-30px"},children:Object(p.jsx)(x.a,{variant:"light",className:"btn-lg",onClick:function(){return ot(!0)},children:"Upload Topology"})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(x.a,{variant:"secondary",className:"btn-lg btn-block",onClick:function(){return Ee(!0)},children:"Instructions"})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(x.a,{variant:"primary",className:"btn-lg btn-block",onClick:function(){return c(q)},children:"Submit"})})]}),Object(p.jsx)(S,{title:"Add Node",config:se,fields:Ce,showModal:ne,setShowModal:ae,submitHandler:function(e,a){var o=t.nodes.concat({id:se.name,x:be.x,y:be.y,memory:se.memory,radius:se.radius,cache:se.cache,angle:se.angle,cpu:se.cpu/100});n({nodes:o,links:t.links}),he({x:200*Math.random(),y:200*Math.random()})}}),Object(p.jsxs)("div",{style:{position:"fixed",top:"0px",right:"14px"},children:[Object(p.jsx)(B,{title:"Instructions",show:Fe,setShow:Ee,message:$e}),Object(p.jsx)(B,{title:"Notification",show:Ge,setShow:Ke,message:We.message}),Object(p.jsxs)(M.a,{show:Ie,onClose:function(){return Pe(!1)},children:[Object(p.jsx)(M.a.Header,{children:Object(p.jsx)("strong",{className:"me-auto block",children:"Link Options"})}),Object(p.jsxs)(M.a.Body,{className:"text-left text-white bg-dark",children:["Select the node as link source or destination",Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"d-flex",style:{justifyContent:"space-around"},children:[Object(p.jsx)(x.a,{variant:"secondary",onClick:function(){He(Object(m.a)(Object(m.a)({},Te),{},{source:Me})),Pe(!1)},children:"Source"}),Object(p.jsx)(x.a,{variant:"secondary",onClick:function(){He(Object(m.a)(Object(m.a)({},Te),{},{target:Me})),Pe(!1)},children:"Destination"})]})]})]}),Object(p.jsxs)(M.a,{show:qe,onClose:function(){return et(!1)},children:[Object(p.jsx)(M.a.Header,{children:Object(p.jsx)("strong",{className:"me-auto block",children:"Node Options"})}),Object(p.jsx)(M.a.Body,{className:"text-left text-white bg-dark",children:Object(p.jsx)("div",{className:"d-flex",style:{justifyContent:"space-around"},children:Object(p.jsx)(x.a,{variant:"secondary",onClick:function(){var e=t.links,a=t.nodes;e=e.filter((function(e){return e.source!==Me&&e.target!==Me})),a=a.filter((function(e){return e.id!==Me})),n({nodes:a,links:e}),et(!1),console.log("Deleted Node!")},children:"Delete Node"})})})]}),Object(p.jsx)(B,{title:"Upload Topology",show:at,setShow:ot,message:Object(p.jsxs)("form",{onSubmit:we,children:[Object(p.jsx)("input",{type:"file",id:"uploadfile",onChange:function(e){O(e.target.files[0]),console.log(h),N(e.target.files[0].name)}}),Object(p.jsx)("input",{type:"submit",value:"Upload",className:"btn btn-primary btn-block mt-4"})]})})]})]})]})},F=n(62),E=function(e){var t=e.onClickCmd,n=Object(a.useState)([{type:F.b.Output,value:"Write commands here!\nTo see really long outputs toggle terminal off..."},,]),o=Object(r.a)(n,2),c=o[0],s=o[1],i=function(){var e=Object(v.a)(y.a.mark((function e(n){var a,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=[]).push({type:F.b.Input,value:n}),"clear"!==n.toLocaleLowerCase()){e.next=6;break}a=[],e.next=11;break;case 6:if(!n){e.next=11;break}return e.next=9,t(n);case 9:o=e.sent,a.push({type:F.b.Output,value:o});case 11:s(a);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"container",children:Object(p.jsx)(F.c,{name:"Terminal",colorMode:F.a.Dark,lineData:c,onInput:function(e){i(e)}})})},z=function(e){var t=e.topoData,n=e.graphConfig,o=e.onClickLink;Object(a.useEffect)((function(){document.title="Topology Viewer"}),[]);var c=Object(a.useState)(0),s=Object(r.a)(c,2),i=s[0],d=s[1],O=Object(a.useState)("Quick command output appears here..."),g=Object(r.a)(O,2),m=g[0],f=g[1],k=Object(a.useState)(!1),C=Object(r.a)(k,2),N=C[0],S=C[1],T=Object(a.useState)(""),H=Object(r.a)(T,2),D=H[0],M=(H[1],Object(a.useState)(!1)),B=Object(r.a)(M,2),R=B[0],I=B[1],P=Object(a.useState)(""),U=Object(r.a)(P,2),_=U[0],F=U[1],z=Object(a.useState)(!1),V=Object(r.a)(z,2),G=V[0],K=V[1],Z=function(){var e=Object(v.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 0,setTimeout((function(e){if(0===e)return $(!1),f("No output received!"),"No Output received!"}),5e3),K(!1),$(!0),e.next=6,l.a.post("http://localhost:3001/command",{command:t});case 6:return n=e.sent,1,e.next=10,f(n.data);case 10:return $(!1),e.abrupt("return",n.data);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=Object(a.useState)(!0),W=Object(r.a)(J,2),Y=W[0],$=W[1];return 0===i&&setTimeout((function(){$(!1),d(1)}),3e4),Object(p.jsxs)(u.a,{style:{minHeight:"100vh"},children:[Object(p.jsxs)(w.a,{show:Y,onHide:function(){return $(!1)},backdrop:"static",keyboard:!1,children:[Object(p.jsx)(w.a.Body,{children:"Performing operation, please wait awhile..."}),Object(p.jsx)(L.a,{animated:!0,now:100}),Object(p.jsx)(w.a.Footer,{})]}),Object(p.jsxs)(w.a,{show:G,onHide:function(){return K(!1)},children:[Object(p.jsx)(w.a.Header,{closeButton:!0,children:Object(p.jsx)(w.a.Title,{children:_})}),Object(p.jsx)(w.a.Body,{children:Object(p.jsxs)(u.a,{style:{display:"flex",justifyContent:"space-between"},children:[Object(p.jsx)(x.a,{variant:"primary",onClick:function(){return Z("".concat(_," nfdc status report"))},children:"NFD Status"}),Object(p.jsx)(x.a,{variant:"primary",onClick:function(){return Z("net run")},children:"Network Status"}),Object(p.jsx)(x.a,{variant:"primary",onClick:function(){return Z("".concat(_," nlsrc status"))},children:"NLSR Status"})]})}),Object(p.jsx)(w.a.Footer,{children:Object(p.jsx)(x.a,{variant:"secondary",onClick:function(){K(!1)},children:"Close"})})]}),Object(p.jsx)("h1",{style:{fontFamily:"Roboto"},children:"Topology Viewer"}),Object(p.jsx)("div",{style:{border:"2px solid white",width:"100%",height:"51vh",backgroundColor:"white"},children:Object(p.jsx)(j.a,{children:Object(p.jsx)(b.a,{children:Object(p.jsx)("div",{style:{border:"2px solid black",width:"100%",height:"50vh",backgroundColor:"white"},children:Object(p.jsx)(A,{topoData:t,graphConfig:n,onClickNode:function(e){F(e.toString()),console.log(e),K(!0)},onClickLink:o})})})})}),Object(p.jsxs)(u.a,{style:{margin:"10px 0px 10px 0px"},children:[Object(p.jsxs)(j.a,{className:"mt-1",class:"text-center",style:{justifyContent:"center",alignContent:"center"},children:[Object(p.jsxs)(b.a,{className:"border-right border-3 border-white",style:{flexGrow:"2"},children:[Object(p.jsx)(x.a,{variant:"secondary",onClick:function(){S(!N),I(!1)},block:!0,children:"Terminal"})," "]}),Object(p.jsxs)(b.a,{className:"border-right border-3 border-white",style:{flexGrow:"2"},children:[Object(p.jsx)(x.a,{variant:"secondary",onClick:function(){$(!0),l.a.get("http://localhost:3001/start"),setTimeout((function(){$(!1)}),2e4)},block:!0,children:"Start NDN Stack"})," "]}),Object(p.jsxs)(b.a,{style:{flexGrow:"2"},children:[Object(p.jsx)(x.a,{variant:"secondary",onClick:function(){$(!0),l.a.get("http://localhost:3001/stop"),setTimeout((function(){$(!1)}),2e3)},block:!0,children:"Stop NDN Stack"})," "]})]}),R?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(j.a,{className:"pt-3",children:[Object(p.jsx)(b.a,{style:{border:"3px solid white"},children:Object(p.jsxs)("strong",{children:[D," Entry"]})}),Object(p.jsx)(b.a,{style:{border:"3px solid white"},children:Object(p.jsxs)("strong",{children:[D," Data"]})})]}),Object(p.jsxs)(j.a,{children:[Object(p.jsx)(b.a,{style:{border:"3px solid white",height:"150px"},children:"/switch1/video1/v1"}),Object(p.jsx)(b.a,{style:{border:"3px solid white",height:"150px"},children:"Cached content at Node 1"})]})]}):null]}),N?Object(p.jsx)(E,{onClickCmd:Z}):Object(p.jsx)(h.a,{style:{marginTop:"5px",position:"relative"},children:Object(p.jsx)(h.a.Control,{as:"textarea",rows:7,disabled:!0,value:m})})]})},V=n(43),G=(n(212),function(){return Object(a.useEffect)((function(){document.title="Itillah Portal"}),[]),Object(p.jsxs)("div",{className:"TitlePage",children:[Object(p.jsx)("div",{id:"particles-js"}),Object(p.jsx)("div",{class:"bg",children:Object(p.jsx)("h4",{"data-testid":"portal-name",children:"ITTILAH PORTAL"})}),Object(p.jsxs)(u.a,{children:[Object(p.jsx)(j.a,{style:{marginRight:"15px",borderRight:"3px solid grey"},children:Object(p.jsx)(b.a,{children:Object(p.jsx)(V.b,{class:"btn",to:"/login",style:{textDecoration:"none"},children:"Login"})})}),Object(p.jsx)(j.a,{children:Object(p.jsx)(b.a,{children:Object(p.jsx)(V.b,{class:"btn",to:"/signup",style:{textDecoration:"none"},children:"Sign Up"})})})]})]})}),K=function(e){var t=e.setAuthorized;Object(a.useEffect)((function(){document.title="Sign Up"}),[]);var n=Object(a.useState)({username:"",password:""}),o=Object(r.a)(n,2),c=o[0],s=o[1],i=Object(d.g)(),O=function(){var e=Object(v.a)(y.a.mark((function e(){var n,a,o,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,a=/^[A-Za-z][A-Za-z_0-9]/,!(""!==c.username&&c.username.length<=10&&!n.test(c.username)&&a.test(c.username))){e.next=13;break}return console.log(c.username,c.password),o={username:c.username,password:c.password},console.log(o),e.next=8,l.a.post("http://localhost:3001/signup",o);case 8:s=e.sent,console.log(s.status),204!==s.status?(t(!0),i.push("/build"),alert("New User Added!")):window.alert("Duplicate usernames are not allowed!"),e.next=14;break;case 13:alert("Username or Password is not appropriate!");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{style:{display:"flex",alignItems:"center",width:"100%",height:"100vh"},children:Object(p.jsx)(u.a,{children:Object(p.jsxs)("div",{style:{border:"2px solid black",padding:"5px"},children:[Object(p.jsx)(j.a,{className:"justify-content-center",children:Object(p.jsx)("h1",{style:{fontFamily:"Roboto"},children:"Sign Up"})}),Object(p.jsx)(j.a,{className:"justify-content-center",children:Object(p.jsx)(b.a,{xs:"auto",children:Object(p.jsxs)(h.a,{className:"justify-content-center",children:[Object(p.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(h.a.Label,{children:"New Username"}),Object(p.jsx)(h.a.Control,{value:c.username,onChange:function(e){e.target.value.length<=10?s({username:e.target.value,password:c.password}):window.alert("Username cannot be longer than 10 characters!")},"data-testid":"login-form-username",type:"text"}),Object(p.jsx)(h.a.Text,{className:"text-muted",children:"Never share your username or password with anyone else."})]}),Object(p.jsxs)(h.a.Group,{controlId:"formBasicPassword",children:[Object(p.jsx)(h.a.Label,{children:"New Password"}),Object(p.jsx)(h.a.Control,{value:c.password,onChange:function(e){e.target.value.length<=10?s({username:c.username,password:e.target.value}):window.alert("Password cannot be longer than 10 characters!")},"data-testid":"login-form-password",type:"password"})]}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(x.a,{variant:"primary",onClick:function(){O()},children:"Sign Up"})})]})})})]})})})},Z=n.p+"static/media/router.ebf4888b.svg",J=n(172),W=n.n(J),Y=function(){return Object(p.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},children:Object(p.jsx)(W.a,{params:{particles:{number:{value:50,density:{enable:!0,value_area:1e3}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:1,color:"#03bcf4"},polygon:{nb_sides:4},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:.5},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"attract"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:100,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{background_color:"#000"}}})})};var $=function(){var e=Object(a.useState)({nodes:[{id:"node1",x:150,y:150},{id:"node2",x:200,y:200}],links:[{source:"node1",target:"node2"}]}),t=Object(r.a)(e,2),n=t[0],o=t[1],c={nodeHighlightBehavior:!0,width:window.innerWidth,node:{color:"lightgreen",size:700,fontSize:12,highlightFontSize:15,highlightStrokeColor:"blue",svg:Z},link:{highlightColor:"lightblue",color:"blue"}},s=Object(a.useState)(!1),i=Object(r.a)(s,2),u=i[0],j=i[1];return Object(p.jsxs)("div",{style:{backgroundColor:"#000",color:"white",overflowY:"scroll"},children:[Object(p.jsx)(Y,{}),Object(p.jsx)(V.a,{children:Object(p.jsxs)(d.d,{children:[Object(p.jsxs)(d.b,{path:"/view",children:[u?Object(p.jsx)(z,{topoData:n,graphConfig:c}):Object(p.jsx)(d.a,{to:"/login"}),";"]}),Object(p.jsx)(d.b,{path:"/build",children:u?Object(p.jsx)(_,{topoData:n,setTopoData:o,createTopology:function(e){l.a.post("http://localhost:3001/topology",n).then((function(){console.log("Data send to backend"),e.push("/view")})).catch((function(e){window.alert(e)}))},graphConfig:c}):Object(p.jsx)(d.a,{to:"/login"})}),Object(p.jsx)(d.b,{path:"/login",children:Object(p.jsx)(O,{setAuthorized:j})}),Object(p.jsx)(d.b,{path:"/signup",children:Object(p.jsx)(K,{setAuthorized:j})}),Object(p.jsx)(d.b,{path:"/",children:Object(p.jsx)(G,{})})]})})]})};n(447);s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)($,{})}),document.getElementById("root"))}},[[449,1,2]]]);
//# sourceMappingURL=main.a743d52a.chunk.js.map