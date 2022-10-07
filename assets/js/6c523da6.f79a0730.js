"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4466],{30876:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(2784);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),g=a,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49540:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(7896),a=(t(2784),t(30876));const o={},i=void 0,c={unversionedId:"auto-generated/previews/angular/aggrid",id:"auto-generated/previews/angular/aggrid",title:"aggrid",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/aggrid.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/aggrid",permalink:"/docs/auto-generated/previews/angular/aggrid",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/aggrid.md",tags:[],version:"current",frontMatter:{}},l={},s=[],u={toc:s};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from '@angular/core';\nimport { GridOptions } from 'ag-grid-community';\n\n@Component({\n  selector: 'app-aggrid',\n  template: `\n    <ag-grid-angular\n      style=\"height: 12rem; width: 100%\"\n      class=\"ag-theme-alpine-dark ag-theme-ix\"\n      [gridOptions]=\"gridOptions\"\n    ></ag-grid-angular>\n  `,\n})\nexport class AGGrid {\n  gridOptions = {\n    columnDefs: [\n      { field: 'make', resizable: true, checkboxSelection: true },\n      { field: 'model', resizable: true, sortable: true, filter: true },\n      { field: 'price', resizable: true },\n    ],\n    rowData: [\n      { make: 'Toyota', model: 'Celica', price: 35000, checked: false },\n      { make: 'Ford', model: 'Mondeo', price: 32000, checked: true },\n      { make: 'Porsche', model: 'Boxster', price: 72000, checked: false },\n    ],\n    rowSelection: 'multiple',\n    suppressCellFocus: true,\n  } as GridOptions;\n}\n")))}p.isMDXComponent=!0}}]);