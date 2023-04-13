"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18611,70407,83179,37851,10396,78015,82859],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63483:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(2784),i=n(731);function l(e){var t,n,l,r,o,s,c,p;return a.createElement("div",{className:"row with--border"},a.createElement("div",{className:"col-sm-6"},a.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(n=e.attribute)||null==(l=n.tags)?void 0:l.filter((e=>"since"===e.type)).map((t=>{var n;return a.createElement(i.h,{message:t.message,key:`Tag_Since_${null==e||null==(n=e.attribute)?void 0:n.name}`})})),null==e||null==(r=e.attribute)||null==(o=r.tags)?void 0:o.filter((e=>"deprecated"===e.type)).map((t=>{var n;return a.createElement(i.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(n=e.attribute)?void 0:n.name}`})})))),a.createElement("div",{className:"col-sm-6"},a.createElement("div",{className:"ApiTable__Content"},a.createElement("span",{className:"Attribute__Description"},null==e||null==(s=e.attribute)?void 0:s.description),a.createElement("div",{className:"container-fluid"},null==e||null==(c=e.attribute)||null==(p=c.definition)?void 0:p.map((e=>a.createElement("div",{className:"row Attribute",key:e.name},a.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),a.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const r=function(e){var t;return a.createElement("div",{className:"container-fluid ApiTable"},a.createElement("div",{className:"row with--border"},a.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),a.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>a.createElement(l,{attribute:e,key:e.name}))))}},731:(e,t,n)=>{n.d(t,{Q:()=>i,h:()=>l});var a=n(2784);function i(e){return a.createElement("div",{className:"ApiTableTag"},a.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),a.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function l(e){return a.createElement("div",{className:"ApiTableTag"},a.createElement("div",{className:"Tag"},"Since ",e.message))}},77942:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(37949),i=n(90077),l=n(37614),r=n(2784),o=n(90943);function s(e){const t=(0,l.Z)(),[n]=(0,r.useState)(!1),s=(0,i.Z)("/"),[c,p]=(0,r.useState)(""),[u,m]=(0,r.useState)((0,o.V)(t)),{preferredVersion:d}=(0,a.J)();return(0,r.useEffect)((()=>{const t=null==d?void 0:d.name;p(void 0===t||"current"===t?s+`webcomponent-examples/dist/preview-examples/${e.name}.html`:s+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[s,null==d?void 0:d.name,e.name]),(0,r.useLayoutEffect)((()=>{const e=()=>{let e=(0,o.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),r.createElement(r.Fragment,null,n?r.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==d?void 0:d.name):r.createElement("iframe",{src:`${c}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>M});var a,i=n(7267),l=n(90077),r=n(53849),o=n(2784);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}const c=e=>{let{title:t,titleId:n,...i}=e;return o.createElement("svg",s({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},i),t?o.createElement("title",{id:n},t):null,a||(a=o.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var p;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}const m=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",u({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,p||(p=o.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var d=n(77942);let f;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview"}(f||(f={}));var v=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],g={clickToLoad:function(e){return x("ctl",e)},devToolsHeight:function(e){return h("devtoolsheight",e)},forceEmbedLayout:function(e){return x("embed",e)},hideDevTools:function(e){return x("hidedevtools",e)},hideExplorer:function(e){return x("hideExplorer",e)},hideNavigation:function(e){return x("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return h("terminalHeight",e)},theme:function(e){return y("theme",["light","dark"],e)},view:function(e){return y("view",["preview","editor"],e)}};function b(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&g.hasOwnProperty(t)?g[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function x(e,t){return!0===t?e+"=1":""}function h(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function y(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function w(e,t){return""+E(t)+e+b(t)}function E(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function P(e){return e&&!1===e.newWindow?"_self":"_blank"}function k(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function I(e){if(!v.includes(e.template)){var t=v.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.appendChild(k("project[title]",e.title)),a.appendChild(k("project[description]",e.description)),a.appendChild(k("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a.appendChild(k("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&a.appendChild(k("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&a.appendChild(k("project[files]["+t+"]",e.files[t]))})),a}var L=function(e,t){!function(e,t){var n=I(e);n.action=w("/run",t),n.target=P(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const T="https://github.com/siemens/ix/tree/main/packages";function C(e){let{name:t,framework:n}=e;const a=function(e){let{name:t,framework:n}=e;return n===f.ANGULAR?`${T}/angular-test-app/src/preview-examples/${t}.ts`:n===f.JAVASCRIPT?`${T}/html-test-app/src/preview-examples/${t}.html`:n===f.REACT?`${T}/react-test-app/src/preview-examples/${t}.tsx`:n===f.VUE?`${T}/vue-test-app/src/preview-examples/${t}.vue`:void 0}({framework:n,name:t});window.open(a,"_blank")}async function N(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function A(e){let{name:t,framework:n,files:a,baseUrl:i}=e;const l=await async function(e,t,n){const a=[];return(await N(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{a.push({filename:n[t],sourceCode:e})})),a}(i,n,a);return n===f.REACT?async function(e,t){const[n,a,i,l,r]=await N([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[o]=t,s={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;s[`src/${t}`]=n})),L({template:"node",title:"iX React App",description:"iX react playground",files:{...s,"public/index.html":a,"src/index.tsx":i,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${o.filename.substring(0,o.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":l,"tsconfig.json":r,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${o.filename}`})}(i,l):n===f.ANGULAR?async function(e,t,n){const[a,i,l,r,o,s,c,p,u,m,d]=await N([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),f=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&f.push(t)}));const v=`\n    ${f.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${f.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,g={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;g[`src/app/${t}`]=n})),L({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":v,"src/app/app.component.css":a,"src/app/app.component.html":i,"src/app/app.component.ts":l,"src/app/app.module.ts":r,"src/index.html":o,"src/main.ts":s,"src/styles.css":c,"angular.json":p,"package.json":u,"tsconfig.app.json":m,"tsconfig.json":d,...g}},{openFile:`src/app/${t}.ts`})}(i,t,l):n===f.JAVASCRIPT?async function(e,t){const[n,a,i,l]=await N([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[r,...o]=t,s={};o.forEach((e=>{s[`src/${e.filename}`]=e.sourceCode})),L({template:"node",title:"iX html app",description:"iX html playground",files:{...s,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",r.sourceCode),"src/main.js":a,"package.json":i,"vite.config.ts":l}},{openFile:["src/index.html"]})}(i,l):n===f.VUE?async function(e,t){const[n,a,i,l,r,o,s]=await N([`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),[c]=t,p={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;p[`src/${t}`]=n})),L({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...p,"index.html":a,"src/main.ts":i,"src/App.vue":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${c.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":s,"package.json":l,"tsconfig.json":r,"vite.config.ts":o,".stackblitzrc":'{\n          "startCommand": "yarn run dev"\n        }'}},{openFile:`src/${c.filename}`})}(i,l):void 0}function O(e){let{name:t,framework:n}=e;return o.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>C({name:t,framework:n})},o.createElement(c,null))}function j(e){let{name:t,files:n,framework:a,baseUrl:i}=e;return o.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>A({name:t,files:n,framework:a,baseUrl:i})},o.createElement(m,null))}function $(e){const[t,n]=(0,o.useState)(e.files[0].filename);return o.createElement(o.Fragment,null,o.createElement(r.Vp,null,e.files.map((e=>{e.node;return o.createElement(r.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const a=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return a?o.createElement(a,null):null}())}function M(e){let{name:t,height:n,noMargin:a,theme:s,frameworks:c,availableFrameworks:p}=e;const{pathname:u}=(0,i.TH)(),m=(0,l.Z)("/"),[v,g]=(0,o.useState)(!0),[b,x]=(0,o.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||f.PREVIEW}(p)),[h,y]=(0,o.useState)();(0,o.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(u+t)),[t,u]);(0,o.useEffect)((()=>{const e={};c&&(Object.keys(c).forEach((n=>{if("function"==typeof c[n]){let a=t;n===f.REACT&&(a=a.concat(".tsx")),n===f.JAVASCRIPT&&(a=a.concat(".html")),n===f.ANGULAR&&(a=a.concat(".ts")),n===f.VUE&&(a=a.concat(".vue")),e[n]=[{filename:a,node:c[n]({})}]}"object"==typeof c[n]&&(e[n]||(e[n]=[]),Object.keys(c[n]).forEach((t=>{e[n].push({filename:t,node:c[n][t]})})))})),y(e))}),[c,y]);const w=e=>{x(e)};function E(e){return p?0===p.length||p.includes(e):Object.keys(c).some((t=>t===e))}return o.createElement("div",{className:"Playground"},v?o.createElement(o.Fragment,null,o.createElement("div",{className:"Playground__Toolbar Location__Bottom"},o.createElement(r.Vp,null,o.createElement(r.t3,{selected:b===f.PREVIEW,onClick:()=>w(f.PREVIEW)},"Preview"),E(f.ANGULAR)?o.createElement(r.t3,{selected:b===f.ANGULAR,onClick:()=>w(f.ANGULAR)},"Angular"):null,E(f.REACT)?o.createElement(r.t3,{selected:b===f.REACT,onClick:()=>w(f.REACT)},"React"):null,E(f.JAVASCRIPT)?o.createElement(r.t3,{selected:b===f.JAVASCRIPT,onClick:()=>w(f.JAVASCRIPT)},"JavaScript"):null,E(f.VUE)?o.createElement(r.t3,{selected:b===f.VUE,onClick:()=>w(f.VUE)},"Vue"):null),o.createElement("div",{className:"Playground__Toolbar__Actions"},b!==f.PREVIEW?o.createElement(o.Fragment,null,o.createElement(O,{name:t,framework:b}),o.createElement(j,{name:t,framework:b,baseUrl:m,files:h?b===f.PREVIEW?[]:h[b].map((e=>e.filename)):[]})):null)),function(){if(b===f.PREVIEW)return o.createElement(d.Z,{name:t,height:n,noMargin:a,theme:s});if(!h||!h[b])return null;if(1===h[b].length){const[{node:e}]=h[b];return e}return o.createElement($,{files:h[b]})}()):null)}},76924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7896),i=(n(2784),n(30876));const l={},r=void 0,o={unversionedId:"auto-generated/ix-pill/events",id:"auto-generated/ix-pill/events",title:"events",description:"No events available for this component.",source:"@site/docs/auto-generated/ix-pill/events.md",sourceDirName:"auto-generated/ix-pill",slug:"/auto-generated/ix-pill/events",permalink:"/version-dev/docs/auto-generated/ix-pill/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-pill/events.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No events available for this component."))}u.isMDXComponent=!0},1983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7896),i=(n(2784),n(30876)),l=n(63483);const r={},o=void 0,s={unversionedId:"auto-generated/ix-pill/props",id:"auto-generated/ix-pill/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-pill/props.md",sourceDirName:"auto-generated/ix-pill",slug:"/auto-generated/ix-pill/props",permalink:"/version-dev/docs/auto-generated/ix-pill/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-pill/props.md",tags:[],version:"current",frontMatter:{}},c={},p=[],u={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{attributes:[{name:"alignLeft",description:"Align pill content left",definition:[{name:"Attribute",value:"align-left"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"background",description:"Custom color for pill. Only working for `variant='custom'`",definition:[{name:"Attribute",value:"background"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"color",description:"Custom font color for pill. Only working for `variant='custom'`",definition:[{name:"Attribute",value:"color"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"icon",description:"Show icon",definition:[{name:"Attribute",value:"icon"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"outline",description:"Show pill as outline",definition:[{name:"Attribute",value:"outline"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"variant",description:"Pill variant",definition:[{name:"Attribute",value:"variant"},{name:"Type",value:'"alarm" \uff5c "critical" \uff5c "custom" \uff5c "info" \uff5c "neutral" \uff5c "primary" \uff5c "success" \uff5c "warning"'},{name:"Default",value:"'primary'"}],tags:[]}],mdxType:"ApiTable"}))}m.isMDXComponent=!0},87258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7896),i=(n(2784),n(30876));const l={},r=void 0,o={unversionedId:"auto-generated/previews/angular/pill.ts",id:"auto-generated/previews/angular/pill.ts",title:"pill.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/pill.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/pill.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/pill.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/pill.ts.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-pill variant="custom" color="white" background="purple">\n      Label\n    </ix-pill>\n\n    <ix-pill>Label</ix-pill>\n    <ix-pill outline>Label</ix-pill>\n    <ix-pill style="width: 8rem">Label</ix-pill>\n\n    <ix-pill icon="star">Label</ix-pill>\n    <ix-pill icon="star" style="width: 8rem"> Label </ix-pill>\n    <ix-pill outline alignLeft icon="star" style="width: 8rem"> Label </ix-pill>\n\n    <ix-pill variant="alarm">Label</ix-pill>\n    <ix-pill variant="alarm" outline> Label </ix-pill>\n    <ix-pill variant="alarm" style="width: 8rem"> Label </ix-pill>\n\n    <ix-pill variant="alarm" icon="star"> Label </ix-pill>\n    <ix-pill variant="alarm" icon="star" style="width: 8rem"> Label </ix-pill>\n    <ix-pill variant="alarm" outline alignLeft icon="star" style="width: 8rem">\n      Label\n    </ix-pill>\n  `,\n})\nexport default class Pill {}\n')))}u.isMDXComponent=!0},53447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7896),i=(n(2784),n(30876));const l={},r=void 0,o={unversionedId:"auto-generated/previews/react/pill",id:"auto-generated/previews/react/pill",title:"pill",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/pill.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/pill",permalink:"/version-dev/docs/auto-generated/previews/react/pill",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/pill.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxPill } from \'@siemens/ix-react\';\nimport React, { CSSProperties } from \'react\';\n\nexport default () => {\n  const styled: CSSProperties = {\n    width: \'8rem\',\n  };\n\n  return (\n    <>\n      <IxPill variant="custom" color="white" background="purple">\n        Label\n      </IxPill>\n\n      <IxPill>Label</IxPill>\n      <IxPill outline>Label</IxPill>\n      <IxPill style={styled}>Label</IxPill>\n\n      <IxPill icon="star">Label</IxPill>\n      <IxPill icon="star" style={styled}>\n        Label\n      </IxPill>\n      <IxPill outline alignLeft icon="star" style={styled}>\n        Label\n      </IxPill>\n\n      <IxPill variant="alarm">Label</IxPill>\n      <IxPill variant="alarm" outline>\n        Label\n      </IxPill>\n      <IxPill variant="alarm" style={styled}>\n        Label\n      </IxPill>\n\n      <IxPill variant="alarm" icon="star">\n        Label\n      </IxPill>\n      <IxPill variant="alarm" icon="star" style={styled}>\n        Label\n      </IxPill>\n      <IxPill variant="alarm" outline alignLeft icon="star" style={styled}>\n        Label\n      </IxPill>\n    </>\n  );\n};\n')))}u.isMDXComponent=!0},67091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7896),i=(n(2784),n(30876));const l={},r=void 0,o={unversionedId:"auto-generated/previews/vue/pill",id:"auto-generated/previews/vue/pill",title:"pill",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/pill.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/pill",permalink:"/version-dev/docs/auto-generated/previews/vue/pill",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/pill.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport { IxPill } from \'@siemens/ix-vue\';\n\nconst styled = {\n  width: \'8rem\',\n};\n<\/script>\n\n<template>\n  <IxPill variant="custom" color="white" background="purple"> Label </IxPill>\n\n  <IxPill>Label</IxPill>\n  <IxPill outline>Label</IxPill>\n  <IxPill :style="styled">Label</IxPill>\n\n  <IxPill icon="star">Label</IxPill>\n  <IxPill icon="star" :style="styled"> Label </IxPill>\n  <IxPill outline alignLeft icon="star" :style="styled"> Label </IxPill>\n\n  <IxPill variant="alarm">Label</IxPill>\n  <IxPill variant="alarm" outline> Label </IxPill>\n  <IxPill variant="alarm" :style="styled"> Label </IxPill>\n\n  <IxPill variant="alarm" icon="star"> Label </IxPill>\n  <IxPill variant="alarm" icon="star" :style="styled"> Label </IxPill>\n  <IxPill variant="alarm" outline alignLeft icon="star" :style="styled">\n    Label\n  </IxPill>\n</template>\n')))}u.isMDXComponent=!0},92665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7896),i=(n(2784),n(30876));const l={},r=void 0,o={unversionedId:"auto-generated/previews/web-component/pill",id:"auto-generated/previews/web-component/pill",title:"pill",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/pill.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/pill",permalink:"/version-dev/docs/auto-generated/previews/web-component/pill",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/pill.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ix-pill variant="custom" color="white" background="purple">\n  Label\n</ix-pill>\n\n<ix-pill>Label</ix-pill>\n<ix-pill outline>Label</ix-pill>\n<ix-pill style="width: 8rem">Label</ix-pill>\n\n<ix-pill icon="star">Label</ix-pill>\n<ix-pill icon="star" style="width: 8rem"> Label </ix-pill>\n<ix-pill outline alignLeft icon="star" style="width: 8rem"> Label </ix-pill>\n\n<ix-pill variant="alarm">Label</ix-pill>\n<ix-pill variant="alarm" outline> Label </ix-pill>\n<ix-pill variant="alarm" style="width: 8rem"> Label </ix-pill>\n\n<ix-pill variant="alarm" icon="star"> Label </ix-pill>\n<ix-pill variant="alarm" icon="star" style="width: 8rem"> Label </ix-pill>\n<ix-pill variant="alarm" outline alignLeft icon="star" style="width: 8rem">\n  Label\n</ix-pill>\n')))}u.isMDXComponent=!0},27859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>x,frontMatter:()=>m,metadata:()=>f,toc:()=>g});var a=n(7896),i=(n(2784),n(30876)),l=n(30024),r=n(1983),o=n(76924),s=n(92665),c=n(53447),p=n(87258),u=n(67091);const m={},d="Pill",f={unversionedId:"controls/pill",id:"controls/pill",title:"Pill",description:"Usage",source:"@site/docs/controls/pill.md",sourceDirName:"controls",slug:"/controls/pill",permalink:"/version-dev/docs/controls/pill",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/pill.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Pagination",permalink:"/version-dev/docs/controls/pagination"},next:{title:"Radio button",permalink:"/version-dev/docs/controls/radiobutton"}},v={},g=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],b={toc:g};function x(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pill"},"Pill"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(l.Z,{name:"pill",height:"24rem",frameworks:{react:c.default,angular:p.default,javascript:s.default,vue:u.default},mdxType:"Playground"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"props"},"Props"),(0,i.kt)(r.default,{mdxType:"Props"}),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)(o.default,{mdxType:"Events"}))}x.isMDXComponent=!0}}]);