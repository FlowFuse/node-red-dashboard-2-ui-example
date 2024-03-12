(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ui-example-wrapper[data-v-782e5933]{padding:10px;margin:10px;border:1px solid black}.ui-example-class[data-v-782e5933]{color:green;font-weight:700}h1[data-v-782e5933]{margin-bottom:10px}h2[data-v-782e5933]{margin-top:1.5rem;margin-bottom:.75rem}h3[data-v-782e5933]{margin-top:1rem}p[data-v-782e5933]{margin-bottom:5px}ul li[data-v-782e5933]{list-style-type:circle;list-style-position:inside;margin-left:15px}pre[data-v-782e5933]{padding:12px;margin:12px;background-color:#eee}code[data-v-782e5933]{font-size:.825rem;color:#ae0000}")),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
(function(a,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("vuex")):typeof define=="function"&&define.amd?define(["exports","vue","vuex"],e):(a=typeof globalThis<"u"?globalThis:a||self,e(a["ui-example"]={},a.Vue,a.vuex))})(this,function(a,e,h){"use strict";function p(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var m=f,u=/\s/,V=/(_|-|\.|:)/,N=/([a-z][A-Z]|[A-Z][a-z])/;function f(t){return u.test(t)?t.toLowerCase():V.test(t)?(E(t)||t).toLowerCase():N.test(t)?w(t).toLowerCase():t.toLowerCase()}var _=/[\W_]+(.|$)/g;function E(t){return t.replace(_,function(n,l){return l?" "+l:""})}var y=/(.)([A-Z]+)/g;function w(t){return t.replace(y,function(n,l,i){return l+" "+i.toLowerCase().split("").join(" ")})}var b=m,g=x;function x(t){return b(t).replace(/[a-z]/i,function(n){return n.toUpperCase()}).trim()}var S=function(t){return String(t).replace(/([.*+?=^!:${}()|[\]\/\\])/g,"\\$1")},C=["a","an","and","as","at","but","by","en","for","from","how","if","in","neither","nor","of","on","only","onto","out","or","per","so","than","that","the","to","until","up","upon","v","v.","versus","vs","vs.","via","when","with","without","yet"],T=g,k=S,D=C,j=O,I=D.map(k),R=new RegExp("[^^]\\b("+I.join("|")+")\\b","ig"),W=/:\s*(\w)/g;function O(t){return T(t).replace(/(^|\s)(\w)/g,function(n,l,i){return l+i.toUpperCase()}).replace(R,function(n){return n.toLowerCase()}).replace(W,function(n){return n.toUpperCase()})}const U=p(j),$=(t,n)=>{const l=t.__vccOpts||t;for(const[i,r]of n)l[i]=r;return l},H={name:"UIExample",inject:["$socket"],props:{id:{type:String,required:!0},props:{type:Object,default:()=>({})},state:{type:Object,default:()=>({enabled:!1,visible:!1})}},setup(t){console.info("UIExample setup with:",t),console.debug("Vue function loaded correctly",e.markRaw)},data(){return{input:{title:"some text here will base turned into title case."},vuetifyStyles:[{label:"Responsive Displays",url:"https://vuetifyjs.com/en/styles/display/#display"},{label:"Flex",url:"https://vuetifyjs.com/en/styles/flex/"},{label:"Spacing",url:"https://vuetifyjs.com/en/styles/spacing/#how-it-works"},{label:"Text & Typography",url:"https://vuetifyjs.com/en/styles/text-and-typography/#typography"}]}},computed:{titleCase(){return U(this.input.title)},...h.mapState("data",["messages"])},mounted(){this.$socket.on("widget-load:"+this.id,t=>{this.$store.commit("data/bind",{widgetId:this.id,msg:t})}),this.$socket.on("msg-input:"+this.id,t=>{this.$store.commit("data/bind",{widgetId:this.id,msg:t})}),this.$socket.emit("widget-load",this.id)},unmounted(){var t,n;(t=this.$socket)==null||t.off("widget-load"+this.id),(n=this.$socket)==null||n.off("msg-input:"+this.id)},methods:{send(t){this.$socket.emit("widget-action",this.id,t)},alert(t){alert(t)},test(){console.info("custom event handler:"),this.$socket.emit("my-custom-event",this.id,{payload:"Custom Event"})}}},o=t=>(e.pushScopeId("data-v-782e5933"),t=t(),e.popScopeId(),t),A={className:"ui-example-wrapper"},L=o(()=>e.createElementVNode("h2",null,"Using Vuetify Components",-1)),M=o(()=>e.createElementVNode("p",null,[e.createElementVNode("a",{href:"https://vuetifyjs.com/en/components/all/#containment",target:"_blank"},"Vuetify"),e.createTextVNode(' is included by default, so we can include any of their components. Here we have a button that will open a "Hello World" alert: ')],-1)),B=o(()=>e.createElementVNode("pre",null,`<v-btn @click="alert('Hello World')">Alert "Hello World"</v-btn>`,-1)),q=o(()=>e.createElementVNode("h2",null,"Accessing Properties",-1)),z=o(()=>e.createElementVNode("p",null," Your Vue component will be rendered and passed a few built-in properties. ",-1)),P=o(()=>e.createElementVNode("h3",null,[e.createElementVNode("code",null,"this.id")],-1)),F=o(()=>e.createElementVNode("p",null,[e.createTextVNode("Each widget has a unique ID, which can be used when sending messages to Node-RED via "),e.createElementVNode("code",null,"this.$socket.emit()"),e.createTextVNode(".")],-1)),Y=o(()=>e.createElementVNode("h3",null,[e.createElementVNode("code",null,"this.props")],-1)),Z=o(()=>e.createElementVNode("p",null,[e.createTextVNode("The "),e.createElementVNode("code",null,"props"),e.createTextVNode(" object contains the properties defined in the widget's configuration in Node-RED.")],-1)),J=o(()=>e.createElementVNode("h3",null,[e.createElementVNode("code",null,"this.state")],-1)),X=o(()=>e.createElementVNode("p",null,[e.createTextVNode(" The "),e.createElementVNode("code",null,"state"),e.createTextVNode(" object contains the current visibility & behavioural state of the widget, including whether it is enabled and visible. This is not yet fully functionality in Dashboard 2.0, but will be expanded in future. ")],-1)),G=o(()=>e.createElementVNode("h2",null,"Communications with Node-RED",-1)),K=o(()=>e.createElementVNode("p",null,"Events are sent back and forth between Node-RED and Dashboard 2.0 with SocketIO",-1)),Q=o(()=>e.createElementVNode("h3",null,"Sending Node-RED Messages",-1)),v=o(()=>e.createElementVNode("p",null,"You can send and receive the built-in events, as well as defining your own:",-1)),ee=o(()=>e.createElementVNode("h3",null,"Sending Custom SocketIO Events",-1)),te=o(()=>e.createElementVNode("p",null,[e.createTextVNode(" You can also send custom events, which can be handled by a custom event handler in Node-RED. The Node-RED-side's handler should have "),e.createElementVNode("code",null,"(conn, id, msg)"),e.createTextVNode(" as the input variables. ")],-1)),oe=o(()=>e.createElementVNode("h2",null,"Data Retention & VueX Stores",-1)),ne=o(()=>e.createElementVNode("p",null,"Dashboard 2.0 has a built-in VueX datastore. This can be used to store (and retrieve) the latest received messages.",-1)),le=o(()=>e.createElementVNode("p",null,"Note: the vuex store is cleared on refresh of a screen, at which point, data will be loaded from the Node-RED datastore, should it be present.",-1)),ae=o(()=>e.createElementVNode("p",null,"Send a message to this node in order to see the value here:",-1)),se=o(()=>e.createElementVNode("p",null,[e.createTextVNode("Note that it persists, even after refresh. This is because, in our "),e.createElementVNode("code",null,"onInput"),e.createTextVNode(" event handler in our "),e.createElementVNode("code",null,"ui-example.js"),e.createTextVNode(" file, we store the message in the Node-RED datastore.")],-1)),ie=o(()=>e.createElementVNode("h2",null,"Styling with Vuetify & CSS",-1)),re=o(()=>e.createElementVNode("p",null,[e.createTextVNode(" We can define our own CSS within the widget's repository, and expose classes like "),e.createElementVNode("code",{class:"ui-example-class"},"ui-example-class")],-1)),de=["href"],ce=o(()=>e.createElementVNode("h2",null,"External Dependencies",-1)),he=o(()=>e.createElementVNode("p",null,[e.createTextVNode(" Any additional libraries you require can be installed as in any other package. When the "),e.createElementVNode("code",null,"npm run build"),e.createTextVNode(" command is run, Vite will package everything up into the single "),e.createElementVNode("code",null,".umd.js"),e.createTextVNode(" file. ")],-1)),pe=o(()=>e.createElementVNode("p",null,[e.createTextVNode(" Here, we include the NPM package "),e.createElementVNode("code",null,"to-title-case"),e.createTextVNode(", and bind it's functionality to a VueJS Computed Variable, which automatically re-calculates. ")],-1));function me(t,n,l,i,r,d){const c=e.resolveComponent("v-btn"),Ve=e.resolveComponent("v-text-field");return e.openBlock(),e.createElementBlock("div",A,[e.createElementVNode("h1",null,"Example Integrated Widget: "+e.toDisplayString(l.id),1),L,M,B,e.createVNode(c,{onClick:n[0]||(n[0]=s=>d.alert("Hello World"))},{default:e.withCtx(()=>[e.createTextVNode('Alert "Hello World"')]),_:1}),q,z,P,F,e.createElementVNode("pre",null,e.toDisplayString(l.id),1),Y,Z,e.createElementVNode("pre",null,e.toDisplayString(l.props),1),J,X,e.createElementVNode("pre",null,e.toDisplayString(l.state),1),G,K,Q,v,e.createVNode(c,{onClick:n[1]||(n[1]=s=>d.send({payload:"Hello World"}))},{default:e.withCtx(()=>[e.createTextVNode("Send msg")]),_:1}),ee,te,e.createVNode(c,{onClick:n[2]||(n[2]=s=>d.test())},{default:e.withCtx(()=>[e.createTextVNode("Send 'my-custom-event'")]),_:1}),oe,ne,le,ae,e.createElementVNode("pre",null,e.toDisplayString(t.messages&&t.messages[l.id]?t.messages[l.id]:"No Data"),1),se,ie,re,e.createElementVNode("p",null,[e.createTextVNode(" Vuetify also comes with a handful of utility classes to assist with styling: "),e.createElementVNode("ul",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(r.vuetifyStyles,s=>(e.openBlock(),e.createElementBlock("li",{key:s.label},[e.createElementVNode("a",{href:s.url,target:"_blank"},e.toDisplayString(s.label),9,de)]))),128))])]),ce,he,pe,e.createElementVNode("p",null,[e.createVNode(Ve,{modelValue:r.input.title,"onUpdate:modelValue":n[3]||(n[3]=s=>r.input.title=s),type:"text"},null,8,["modelValue"]),e.createTextVNode(" VueJS Computed Variable Output: "),e.createElementVNode("i",null,e.toDisplayString(d.titleCase),1)])])}const ue=$(H,[["render",me],["__scopeId","data-v-782e5933"]]);a.UIExample=ue,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
