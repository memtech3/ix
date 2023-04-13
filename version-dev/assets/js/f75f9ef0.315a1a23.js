"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13306,14020,12926,5812,53300,63881,16323,97826,22267,98029,41877,48146],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63483:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(2784),i=n(731);function r(e){var t,n,r,o,s,c,l,d;return a.createElement("div",{className:"row with--border"},a.createElement("div",{className:"col-sm-6"},a.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(n=e.attribute)||null==(r=n.tags)?void 0:r.filter((e=>"since"===e.type)).map((t=>{var n;return a.createElement(i.h,{message:t.message,key:`Tag_Since_${null==e||null==(n=e.attribute)?void 0:n.name}`})})),null==e||null==(o=e.attribute)||null==(s=o.tags)?void 0:s.filter((e=>"deprecated"===e.type)).map((t=>{var n;return a.createElement(i.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(n=e.attribute)?void 0:n.name}`})})))),a.createElement("div",{className:"col-sm-6"},a.createElement("div",{className:"ApiTable__Content"},a.createElement("span",{className:"Attribute__Description"},null==e||null==(c=e.attribute)?void 0:c.description),a.createElement("div",{className:"container-fluid"},null==e||null==(l=e.attribute)||null==(d=l.definition)?void 0:d.map((e=>a.createElement("div",{className:"row Attribute",key:e.name},a.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),a.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const o=function(e){var t;return a.createElement("div",{className:"container-fluid ApiTable"},a.createElement("div",{className:"row with--border"},a.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),a.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>a.createElement(r,{attribute:e,key:e.name}))))}},731:(e,t,n)=>{n.d(t,{Q:()=>i,h:()=>r});var a=n(2784);function i(e){return a.createElement("div",{className:"ApiTableTag"},a.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),a.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function r(e){return a.createElement("div",{className:"ApiTableTag"},a.createElement("div",{className:"Tag"},"Since ",e.message))}},77942:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(37949),i=n(90077),r=n(37614),o=n(2784),s=n(90943);function c(e){const t=(0,r.Z)(),[n]=(0,o.useState)(!1),c=(0,i.Z)("/"),[l,d]=(0,o.useState)(""),[u,p]=(0,o.useState)((0,s.V)(t)),{preferredVersion:m}=(0,a.J)();return(0,o.useEffect)((()=>{const t=null==m?void 0:m.name;d(void 0===t||"current"===t?c+`webcomponent-examples/dist/preview-examples/${e.name}.html`:c+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[c,null==m?void 0:m.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,s.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),p(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),o.createElement(o.Fragment,null,n?o.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):o.createElement("iframe",{src:`${l}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>$});var a,i=n(7267),r=n(90077),o=n(53849),s=n(2784);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}const l=e=>{let{title:t,titleId:n,...i}=e;return s.createElement("svg",c({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},i),t?s.createElement("title",{id:n},t):null,a||(a=s.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var d;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}const p=e=>{let{title:t,titleId:n,...a}=e;return s.createElement("svg",u({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},a),t?s.createElement("title",{id:n},t):null,d||(d=s.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var m=n(77942);let g;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview"}(g||(g={}));var v=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],f={clickToLoad:function(e){return h("ctl",e)},devToolsHeight:function(e){return b("devtoolsheight",e)},forceEmbedLayout:function(e){return h("embed",e)},hideDevTools:function(e){return h("hidedevtools",e)},hideExplorer:function(e){return h("hideExplorer",e)},hideNavigation:function(e){return h("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return b("terminalHeight",e)},theme:function(e){return x("theme",["light","dark"],e)},view:function(e){return x("view",["preview","editor"],e)}};function w(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&f.hasOwnProperty(t)?f[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function h(e,t){return!0===t?e+"=1":""}function b(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function x(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function y(e,t){return""+E(t)+e+w(t)}function E(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function k(e){return e&&!1===e.newWindow?"_self":"_blank"}function T(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function N(e){if(!v.includes(e.template)){var t=v.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.appendChild(T("project[title]",e.title)),a.appendChild(T("project[description]",e.description)),a.appendChild(T("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a.appendChild(T("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&a.appendChild(T("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&a.appendChild(T("project[files]["+t+"]",e.files[t]))})),a}var C=function(e,t){!function(e,t){var n=N(e);n.action=y("/run",t),n.target=k(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const P="https://github.com/siemens/ix/tree/main/packages";function A(e){let{name:t,framework:n}=e;const a=function(e){let{name:t,framework:n}=e;return n===g.ANGULAR?`${P}/angular-test-app/src/preview-examples/${t}.ts`:n===g.JAVASCRIPT?`${P}/html-test-app/src/preview-examples/${t}.html`:n===g.REACT?`${P}/react-test-app/src/preview-examples/${t}.tsx`:n===g.VUE?`${P}/vue-test-app/src/preview-examples/${t}.vue`:void 0}({framework:n,name:t});window.open(a,"_blank")}async function M(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function D(e){let{name:t,framework:n,files:a,baseUrl:i}=e;const r=await async function(e,t,n){const a=[];return(await M(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{a.push({filename:n[t],sourceCode:e})})),a}(i,n,a);return n===g.REACT?async function(e,t){const[n,a,i,r,o]=await M([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[s]=t,c={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;c[`src/${t}`]=n})),C({template:"node",title:"iX React App",description:"iX react playground",files:{...c,"public/index.html":a,"src/index.tsx":i,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${s.filename.substring(0,s.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":r,"tsconfig.json":o,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${s.filename}`})}(i,r):n===g.ANGULAR?async function(e,t,n){const[a,i,r,o,s,c,l,d,u,p,m]=await M([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),g=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&g.push(t)}));const v=`\n    ${g.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${g.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,f={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;f[`src/app/${t}`]=n})),C({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":v,"src/app/app.component.css":a,"src/app/app.component.html":i,"src/app/app.component.ts":r,"src/app/app.module.ts":o,"src/index.html":s,"src/main.ts":c,"src/styles.css":l,"angular.json":d,"package.json":u,"tsconfig.app.json":p,"tsconfig.json":m,...f}},{openFile:`src/app/${t}.ts`})}(i,t,r):n===g.JAVASCRIPT?async function(e,t){const[n,a,i,r]=await M([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[o,...s]=t,c={};s.forEach((e=>{c[`src/${e.filename}`]=e.sourceCode})),C({template:"node",title:"iX html app",description:"iX html playground",files:{...c,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",o.sourceCode),"src/main.js":a,"package.json":i,"vite.config.ts":r}},{openFile:["src/index.html"]})}(i,r):n===g.VUE?async function(e,t){const[n,a,i,r,o,s,c]=await M([`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),[l]=t,d={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;d[`src/${t}`]=n})),C({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...d,"index.html":a,"src/main.ts":i,"src/App.vue":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${l.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":c,"package.json":r,"tsconfig.json":o,"vite.config.ts":s,".stackblitzrc":'{\n          "startCommand": "yarn run dev"\n        }'}},{openFile:`src/${l.filename}`})}(i,r):void 0}function O(e){let{name:t,framework:n}=e;return s.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>A({name:t,framework:n})},s.createElement(l,null))}function j(e){let{name:t,files:n,framework:a,baseUrl:i}=e;return s.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>D({name:t,files:n,framework:a,baseUrl:i})},s.createElement(p,null))}function I(e){const[t,n]=(0,s.useState)(e.files[0].filename);return s.createElement(s.Fragment,null,s.createElement(o.Vp,null,e.files.map((e=>{e.node;return s.createElement(o.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const a=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return a?s.createElement(a,null):null}())}function $(e){let{name:t,height:n,noMargin:a,theme:c,frameworks:l,availableFrameworks:d}=e;const{pathname:u}=(0,i.TH)(),p=(0,r.Z)("/"),[v,f]=(0,s.useState)(!0),[w,h]=(0,s.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||g.PREVIEW}(d)),[b,x]=(0,s.useState)();(0,s.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(u+t)),[t,u]);(0,s.useEffect)((()=>{const e={};l&&(Object.keys(l).forEach((n=>{if("function"==typeof l[n]){let a=t;n===g.REACT&&(a=a.concat(".tsx")),n===g.JAVASCRIPT&&(a=a.concat(".html")),n===g.ANGULAR&&(a=a.concat(".ts")),n===g.VUE&&(a=a.concat(".vue")),e[n]=[{filename:a,node:l[n]({})}]}"object"==typeof l[n]&&(e[n]||(e[n]=[]),Object.keys(l[n]).forEach((t=>{e[n].push({filename:t,node:l[n][t]})})))})),x(e))}),[l,x]);const y=e=>{h(e)};function E(e){return d?0===d.length||d.includes(e):Object.keys(l).some((t=>t===e))}return s.createElement("div",{className:"Playground"},v?s.createElement(s.Fragment,null,s.createElement("div",{className:"Playground__Toolbar Location__Bottom"},s.createElement(o.Vp,null,s.createElement(o.t3,{selected:w===g.PREVIEW,onClick:()=>y(g.PREVIEW)},"Preview"),E(g.ANGULAR)?s.createElement(o.t3,{selected:w===g.ANGULAR,onClick:()=>y(g.ANGULAR)},"Angular"):null,E(g.REACT)?s.createElement(o.t3,{selected:w===g.REACT,onClick:()=>y(g.REACT)},"React"):null,E(g.JAVASCRIPT)?s.createElement(o.t3,{selected:w===g.JAVASCRIPT,onClick:()=>y(g.JAVASCRIPT)},"JavaScript"):null,E(g.VUE)?s.createElement(o.t3,{selected:w===g.VUE,onClick:()=>y(g.VUE)},"Vue"):null),s.createElement("div",{className:"Playground__Toolbar__Actions"},w!==g.PREVIEW?s.createElement(s.Fragment,null,s.createElement(O,{name:t,framework:w}),s.createElement(j,{name:t,framework:w,baseUrl:p,files:b?w===g.PREVIEW?[]:b[w].map((e=>e.filename)):[]})):null)),function(){if(w===g.PREVIEW)return s.createElement(m.Z,{name:t,height:n,noMargin:a,theme:c});if(!b||!b[w])return null;if(1===b[w].length){const[{node:e}]=b[w];return e}return s.createElement(I,{files:b[w]})}()):null)}},24952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(7896),i=(n(2784),n(30876)),r=n(63483);const o={},s=void 0,c={unversionedId:"auto-generated/ix-pagination/events",id:"auto-generated/ix-pagination/events",title:"events",description:"",source:"@site/docs/auto-generated/ix-pagination/events.md",sourceDirName:"auto-generated/ix-pagination",slug:"/auto-generated/ix-pagination/events",permalink:"/version-dev/docs/auto-generated/ix-pagination/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-pagination/events.md",tags:[],version:"current",frontMatter:{}},l={},d=[],u={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{attributes:[{name:"itemCountChanged",description:"Item count change event",definition:[{name:"Detail",value:"number"}],tags:[]},{name:"pageSelected",description:"Page selection event",definition:[{name:"Detail",value:"number"}],tags:[]}],mdxType:"ApiTable"}))}p.isMDXComponent=!0},33102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(7896),i=(n(2784),n(30876)),r=n(63483);const o={},s=void 0,c={unversionedId:"auto-generated/ix-pagination/props",id:"auto-generated/ix-pagination/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-pagination/props.md",sourceDirName:"auto-generated/ix-pagination",slug:"/auto-generated/ix-pagination/props",permalink:"/version-dev/docs/auto-generated/ix-pagination/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-pagination/props.md",tags:[],version:"current",frontMatter:{}},l={},d=[],u={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{attributes:[{name:"advanced",description:"Advanced mode",definition:[{name:"Attribute",value:"advanced"},{name:"Type",value:"boolean"},{name:"Default"}],tags:[]},{name:"count",description:"Total number of pages",definition:[{name:"Attribute",value:"count"},{name:"Type",value:"number"},{name:"Default"}],tags:[]},{name:"i18nItems",description:"/**\n  i18n",definition:[{name:"Attribute",value:"i-1-8n-items"},{name:"Type",value:"string"},{name:"Default",value:"'Items'"}],tags:[]},{name:"i18nOf",description:"i18n",definition:[{name:"Attribute",value:"i-1-8n-of"},{name:"Type",value:"string"},{name:"Default",value:"'of'"}],tags:[]},{name:"i18nPage",description:"i18n",definition:[{name:"Attribute",value:"i-1-8n-page"},{name:"Type",value:"string"},{name:"Default",value:"'Page'"}],tags:[]},{name:"itemCount",description:"Number of items shown at once.\nCan only be changed in advaced mode.",definition:[{name:"Attribute",value:"item-count"},{name:"Type",value:"number"},{name:"Default",value:"15"}],tags:[]},{name:"selectedPage",description:"Zero based index of currently selected page",definition:[{name:"Attribute",value:"selected-page"},{name:"Type",value:"number"},{name:"Default",value:"0"}],tags:[]},{name:"showItemCount",description:"Show item count in advanced mode",definition:[{name:"Attribute",value:"show-item-count"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]}],mdxType:"ApiTable"}))}p.isMDXComponent=!0},87062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,s={unversionedId:"auto-generated/ix-pagination/tags",id:"auto-generated/ix-pagination/tags",title:"tags",description:"Since: 1.5.0",source:"@site/docs/auto-generated/ix-pagination/tags.md",sourceDirName:"auto-generated/ix-pagination",slug:"/auto-generated/ix-pagination/tags",permalink:"/version-dev/docs/auto-generated/ix-pagination/tags",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-pagination/tags.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("span",{className:"Api__Table Docs__Tag"},"Since: 1.5.0"))}u.isMDXComponent=!0},20723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,s={unversionedId:"auto-generated/previews/angular/pagination-advanced.ts",id:"auto-generated/previews/angular/pagination-advanced.ts",title:"pagination-advanced.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/pagination-advanced.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/pagination-advanced.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/pagination-advanced.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/pagination-advanced.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: `\n    <ix-pagination advanced showItemCount count=\"100\"></ix-pagination>\n  `,\n})\nexport default class Pagination {}\n")))}u.isMDXComponent=!0},713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,s={unversionedId:"auto-generated/previews/angular/pagination.ts",id:"auto-generated/previews/angular/pagination.ts",title:"pagination.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/pagination.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/pagination.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/pagination.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/pagination.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: ` <ix-pagination count=\"100\"></ix-pagination> `,\n})\nexport default class Pagination {}\n")))}u.isMDXComponent=!0},32036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,s={unversionedId:"auto-generated/previews/react/pagination-advanced",id:"auto-generated/previews/react/pagination-advanced",title:"pagination-advanced",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/pagination-advanced.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/pagination-advanced",permalink:"/version-dev/docs/auto-generated/previews/react/pagination-advanced",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/pagination-advanced.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxPagination } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  return (\n    <>\n      <IxPagination advanced showItemCount count={100}></IxPagination>\n    </>\n  );\n};\n")))}u.isMDXComponent=!0},86035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,s={unversionedId:"auto-generated/previews/react/pagination",id:"auto-generated/previews/react/pagination",title:"pagination",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/pagination.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/pagination",permalink:"/version-dev/docs/auto-generated/previews/react/pagination",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/pagination.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxPagination } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  return (\n    <>\n      <IxPagination count={100}></IxPagination>\n    </>\n  );\n};\n")))}u.isMDXComponent=!0},21791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,s={unversionedId:"auto-generated/previews/vue/pagination-advanced",id:"auto-generated/previews/vue/pagination-advanced",title:"pagination-advanced",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/pagination-advanced.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/pagination-advanced",permalink:"/version-dev/docs/auto-generated/previews/vue/pagination-advanced",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/pagination-advanced.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport {\n  IxPagination,\n} from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxPagination advanced show-item-count :count="100"></IxPagination>\n</template>\n')))}u.isMDXComponent=!0},99945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,s={unversionedId:"auto-generated/previews/vue/pagination",id:"auto-generated/previews/vue/pagination",title:"pagination",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/pagination.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/pagination",permalink:"/version-dev/docs/auto-generated/previews/vue/pagination",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/pagination.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport {\n  IxPagination,\n} from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxPagination :count="100"></IxPagination>\n</template>\n')))}u.isMDXComponent=!0},76679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,s={unversionedId:"auto-generated/previews/web-component/pagination-advanced",id:"auto-generated/previews/web-component/pagination-advanced",title:"pagination-advanced",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/pagination-advanced.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/pagination-advanced",permalink:"/version-dev/docs/auto-generated/previews/web-component/pagination-advanced",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/pagination-advanced.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ix-pagination advanced show-item-count count="100"></ix-pagination>\n')))}u.isMDXComponent=!0},12366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,s={unversionedId:"auto-generated/previews/web-component/pagination",id:"auto-generated/previews/web-component/pagination",title:"pagination",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/pagination.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/pagination",permalink:"/version-dev/docs/auto-generated/previews/web-component/pagination",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/pagination.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ix-pagination count="100"></ix-pagination>\n')))}u.isMDXComponent=!0},48721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>h,default:()=>k,frontMatter:()=>w,metadata:()=>b,toc:()=>y});var a=n(7896),i=(n(2784),n(30876)),r=n(30024),o=n(33102),s=n(87062),c=n(24952),l=n(12366),d=n(86035),u=n(713),p=n(99945),m=n(76679),g=n(32036),v=n(20723),f=n(21791);const w={},h="Pagination",b={unversionedId:"controls/pagination",id:"controls/pagination",title:"Pagination",description:"Usage",source:"@site/docs/controls/pagination.md",sourceDirName:"controls",slug:"/controls/pagination",permalink:"/version-dev/docs/controls/pagination",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/pagination.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Modal",permalink:"/version-dev/docs/controls/modal"},next:{title:"Pill",permalink:"/version-dev/docs/controls/pill"}},x={},y=[{value:"Usage",id:"usage",level:2},{value:"Advanced",id:"advanced",level:2},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],E={toc:y};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pagination"},"Pagination"),(0,i.kt)(s.default,{mdxType:"Tags"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(r.Z,{name:"pagination",height:"24rem",frameworks:{react:d.default,angular:u.default,javascript:l.default,vue:p.default},mdxType:"Playground"}),(0,i.kt)("h2",{id:"advanced"},"Advanced"),(0,i.kt)(r.Z,{name:"pagination-advanced",height:"24rem",frameworks:{react:g.default,angular:v.default,javascript:m.default,vue:f.default},mdxType:"Playground"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"props"},"Props"),(0,i.kt)(o.default,{mdxType:"Props"}),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)(c.default,{mdxType:"Events"}))}k.isMDXComponent=!0}}]);