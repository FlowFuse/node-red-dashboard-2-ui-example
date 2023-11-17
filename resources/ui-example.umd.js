(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(".ui-example-wrapper[data-v-32a85b1a]{padding:10px;margin:10px;border:1px solid black}h1[data-v-32a85b1a]{margin-bottom:10px}p[data-v-32a85b1a]{margin-bottom:5px}ul li[data-v-32a85b1a]{list-style-type:circle;list-style-position:inside;margin-left:15px}input[data-v-32a85b1a]{border:1px solid black}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
(function(r,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(r=typeof globalThis<"u"?globalThis:r||self,t(r["ui-example"]={},r.Vue))})(this,function(r,t){"use strict";function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var p=m,u=/\s/,d=/(_|-|\.|:)/,f=/([a-z][A-Z]|[A-Z][a-z])/;function m(e){return u.test(e)?e.toLowerCase():d.test(e)?(y(e)||e).toLowerCase():f.test(e)?C(e).toLowerCase():e.toLowerCase()}var h=/[\W_]+(.|$)/g;function y(e){return e.replace(h,function(o,n){return n?" "+n:""})}var w=/(.)([A-Z]+)/g;function C(e){return e.replace(w,function(o,n,a){return n+" "+a.toLowerCase().split("").join(" ")})}var g=p,_=E;function E(e){return g(e).replace(/[a-z]/i,function(o){return o.toUpperCase()}).trim()}var S=function(e){return String(e).replace(/([.*+?=^!:${}()|[\]\/\\])/g,"\\$1")},b=["a","an","and","as","at","but","by","en","for","from","how","if","in","neither","nor","of","on","only","onto","out","or","per","so","than","that","the","to","until","up","upon","v","v.","versus","vs","vs.","via","when","with","without","yet"],N=_,V=S,T=b,k=v,x=T.map(V),I=new RegExp("[^^]\\b("+x.join("|")+")\\b","ig"),j=/:\s*(\w)/g;function v(e){return N(e).replace(/(^|\s)(\w)/g,function(o,n,a){return n+a.toUpperCase()}).replace(I,function(o){return o.toLowerCase()}).replace(j,function(o){return o.toUpperCase()})}const D=c(k),U=(e,o)=>{const n=e.__vccOpts||e;for(const[a,l]of o)n[a]=l;return n},L={name:"UIExample",inject:["$socket"],props:{id:{type:String,required:!0},props:{type:Object,default:()=>({})},state:{type:Object,default:()=>({enabled:!1,visible:!1})}},setup(e){console.info("UIExample setup with:",e),console.debug("Vue function loaded correctly",t.markRaw)},onMounted(){console.info("This widget has mounted")},onInput(e){console.info("Custom onInput handler:"),console.debug(e)},test(){console.info("custom event handler:"),console.debug(this.$socket.emit("my-custom-event",this.id,{payload:"Test"}))},data(){return{input:{title:"this is lower case..."}}},computed:{title(){return D(this.input.title)}}},M=e=>(t.pushScopeId("data-v-32a85b1a"),e=e(),t.popScopeId(),e),B={className:"ui-example-wrapper"},O=M(()=>t.createElementVNode("p",null,[t.createTextVNode(" It supports using packages from npm, such as "),t.createElementVNode("code",null,"to-title-case"),t.createTextVNode(": ")],-1));function $(e,o,n,a,l,A){return t.openBlock(),t.createElementBlock("div",B,[t.createElementVNode("h1",null,"Widget ID: "+t.toDisplayString(n.id),1),t.createElementVNode("p",{onClick:o[0]||(o[0]=s=>e.test({hello:"world"}))},"This is a 3rd Party Widget"),t.createElementVNode("ul",null,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(n.props,(s,i,P)=>(t.openBlock(),t.createElementBlock("li",{key:i},[t.createElementVNode("label",null,"#"+t.toDisplayString(P)+" "+t.toDisplayString(i)+": "+t.toDisplayString(s),1)]))),128))]),O,t.createElementVNode("p",null,[t.withDirectives(t.createElementVNode("input",{"onUpdate:modelValue":o[1]||(o[1]=s=>l.input.title=s),type:"text"},null,512),[[t.vModelText,l.input.title]]),t.createTextVNode(" => "),t.createElementVNode("span",null,t.toDisplayString(A.title),1)])])}const z=U(L,[["render",$],["__scopeId","data-v-32a85b1a"]]);r.UIExample=z,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});