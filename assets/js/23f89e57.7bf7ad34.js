"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1017],{30876:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},w={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(p,".").concat(f)]||u[f]||w[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},17669:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>w,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7896),o=(r(2784),r(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/web-component/workflow-vertical",id:"auto-generated/previews/web-component/workflow-vertical",title:"workflow-vertical",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/workflow-vertical.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/workflow-vertical",permalink:"/docs/auto-generated/previews/web-component/workflow-vertical",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/workflow-vertical.md",tags:[],version:"current",frontMatter:{}},p={},l=[],s={toc:l};function w(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ix-workflow-steps vertical>\n  <ix-workflow-step status="done">Step 1</ix-workflow-step>\n  <ix-workflow-step status="success">Step 2</ix-workflow-step>\n  <ix-workflow-step status="open">Step 3</ix-workflow-step>\n  <ix-workflow-step status="warning">Step 4</ix-workflow-step>\n  <ix-workflow-step status="error">Step 5</ix-workflow-step>\n  <ix-workflow-step disabled>Step 6</ix-workflow-step>\n</ix-workflow-steps>\n')))}w.isMDXComponent=!0}}]);