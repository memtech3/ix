"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64470],{30876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>v});var i=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=c(t),v=r,u=m["".concat(p,".").concat(v)]||m[v]||s[v]||l;return t?i.createElement(u,o(o({ref:n},d),{},{components:t})):i.createElement(u,o({ref:n},d))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var c=2;c<l;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34833:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var i=t(7896),r=(t(2784),t(30876));const l={},o=void 0,a={unversionedId:"auto-generated/previews/vue/flip-tile",id:"auto-generated/previews/vue/flip-tile",title:"flip-tile",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/flip-tile.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/flip-tile",permalink:"/version-dev/docs/auto-generated/previews/vue/flip-tile",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/flip-tile.md",tags:[],version:"current",frontMatter:{}},p={},c=[],d={toc:c};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport { FlipTileState } from \'@siemens/ix\';\nimport { IxFlipTile, IxFlipTileContent, IxIcon } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <div className="example">\n    <IxFlipTile>\n      <div slot="header">Flip header</div>\n\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div className="d-flex align-items-center">\n          <IxIcon name="info" size="16"></IxIcon>2021-06-22\n        </div>\n      </div>\n\n      <IxFlipTileContent> Example 1 </IxFlipTileContent>\n      <IxFlipTileContent> Example 2 </IxFlipTileContent>\n    </IxFlipTile>\n\n    <IxFlipTile :state="FlipTileState.Primary">\n      <div slot="header">Flip header</div>\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div className="d-flex align-items-center">\n          <IxIcon name="info" size="16"></IxIcon>2021-06-22\n        </div>\n      </div>\n      <IxFlipTileContent> Example 1 </IxFlipTileContent>\n      <IxFlipTileContent> Example 2 </IxFlipTileContent>\n    </IxFlipTile>\n\n    <IxFlipTile :state="FlipTileState.Info">\n      <div slot="header">Flip header</div>\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div className="d-flex align-items-center">\n          <IxIcon name="info" size="16"></IxIcon>2021-06-22\n        </div>\n      </div>\n      <IxFlipTileContent> Example 1 </IxFlipTileContent>\n      <IxFlipTileContent> Example 2 </IxFlipTileContent>\n    </IxFlipTile>\n\n    <IxFlipTile :state="FlipTileState.Warning">\n      <div slot="header">Flip header</div>\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div className="d-flex align-items-center">\n          <IxIcon name="info" size="16"></IxIcon>2021-06-22\n        </div>\n      </div>\n      <IxFlipTileContent> Example 1 </IxFlipTileContent>\n      <IxFlipTileContent> Example 2 </IxFlipTileContent>\n    </IxFlipTile>\n\n    <IxFlipTile :state="FlipTileState.Alarm">\n      <div slot="header">Flip header</div>\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div className="d-flex align-items-center">\n          <IxIcon name="info" size="16"></IxIcon>2021-06-22\n        </div>\n      </div>\n      <IxFlipTileContent> Example 1 </IxFlipTileContent>\n      <IxFlipTileContent> Example 2 </IxFlipTileContent>\n    </IxFlipTile>\n  </div>\n</template>\n')))}s.isMDXComponent=!0}}]);