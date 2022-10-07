"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9794],{30876:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>m});var t=r(2784);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),d=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=d(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(r),m=o,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return r?t.createElement(f,i(i({ref:n},l),{},{components:r})):t.createElement(f,i({ref:n},l))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var d=2;d<a;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},92591:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var t=r(7896),o=(r(2784),r(30876));const a={},i=void 0,p={unversionedId:"auto-generated/previews/angular/dropdown",id:"auto-generated/previews/angular/dropdown",title:"dropdown",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/dropdown.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/dropdown",permalink:"/docs/auto-generated/previews/angular/dropdown",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/dropdown.md",tags:[],version:"current",frontMatter:{}},c={},d=[],l={toc:d};function u(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-dropdown\',\n  template: `\n    <ix-button id="triggerId">Open</ix-button>\n    <ix-dropdown trigger="triggerId">\n      <ix-dropdown-item label="Item 1"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 2"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 3"></ix-dropdown-item>\n    </ix-dropdown>\n  `,\n})\nexport class Dropdown {}\n')))}u.isMDXComponent=!0}}]);