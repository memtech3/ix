"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14441],{30876:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(t),m=o,I=l["".concat(s,".").concat(m)]||l[m]||d[m]||a;return t?r.createElement(I,c(c({ref:n},p),{},{components:t})):r.createElement(I,c({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=l;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},2676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(7896),o=(t(2784),t(30876));const a={},c=void 0,i={unversionedId:"auto-generated/previews/vue/tabs-rounded",id:"auto-generated/previews/vue/tabs-rounded",title:"tabs-rounded",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/tabs-rounded.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/tabs-rounded",permalink:"/version-dev/docs/auto-generated/previews/vue/tabs-rounded",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/tabs-rounded.md",tags:[],version:"current",frontMatter:{}},s={},u=[],p={toc:u};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport { IxIcon, IxTabItem, IxTabs } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxTabs rounded>\n    <IxTabItem>\n      <IxIcon name="success"></IxIcon>\n    </IxTabItem>\n    <IxTabItem :counter="200">\n      <IxIcon name="tree"></IxIcon>\n    </IxTabItem>\n    <IxTabItem>\n      <IxIcon name="maintenance"></IxIcon>\n    </IxTabItem>\n    <IxTabItem disabled :counter="24">\n      <IxIcon name="sound-loud"></IxIcon>\n    </IxTabItem>\n    <IxTabItem>\n      <IxIcon name="hierarchy"></IxIcon>\n    </IxTabItem>\n    <IxTabItem disabled>\n      <IxIcon name="calendar-settings"></IxIcon>\n    </IxTabItem>\n  </IxTabs>\n</template>\n')))}d.isMDXComponent=!0}}]);