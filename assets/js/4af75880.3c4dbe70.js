"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3953],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7896),o=(n(2784),n(30876));const i={},a=void 0,s={unversionedId:"auto-generated/previews/web-component/install",id:"auto-generated/previews/web-component/install",title:"install",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/install.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/install",permalink:"/docs/auto-generated/previews/web-component/install",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/install.md",tags:[],version:"current",frontMatter:{}},l={},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\nSPDX-FileCopyrightText: 2022 Siemens AG\n\nSPDX-License-Identifier: MIT\n--\x3e\n\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>Install example</title>\n    <link rel="stylesheet" href="lib/@siemens/ix-icons/dist/css/ix-icons.css" />\n    <link\n      rel="stylesheet"\n      href="lib/@siemens/ix/dist/siemens-ix/siemens-ix.css"\n    />\n    <link\n      rel="stylesheet"\n      href="lib/@siemens/ix-brand-theme/dist/ix-brand-theme/ix-brand-theme.css"\n    />\n    <script type="module">\n      import { defineCustomElements } from \'./lib/@siemens/ix/loader/index.js\';\n      defineCustomElements();\n    <\/script>\n  </head>\n  <body class="theme-brand-dark">\n    <ix-button onclick="alert(\'Button clicked!\')">Hello World!</ix-button>\n  </body>\n</html>\n')))}m.isMDXComponent=!0}}]);