"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9548],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(r),b=a,g=l["".concat(i,".").concat(b)]||l[b]||m[b]||o;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=l;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},79491:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7896),a=(r(2784),r(30876));const o={},s=void 0,c={unversionedId:"auto-generated/previews/web-component/message-bar",id:"auto-generated/previews/web-component/message-bar",title:"message-bar",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/message-bar.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/message-bar",permalink:"/docs/auto-generated/previews/web-component/message-bar",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/message-bar.md",tags:[],version:"current",frontMatter:{}},i={},p=[],u={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ix-message-bar>Message text</ix-message-bar>\n<ix-message-bar type="warning">Message text</ix-message-bar>\n<ix-message-bar type="danger">\n  <div class="d-flex align-items-center justify-content-between">\n    Message text <ix-button>Action</ix-button>\n  </div>\n</ix-message-bar>\n')))}m.isMDXComponent=!0}}]);