"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2013],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||l[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/react/popover-news",id:"auto-generated/previews/react/popover-news",title:"popover-news",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/popover-news.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/popover-news",permalink:"/docs/auto-generated/previews/react/popover-news",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/popover-news.md",tags:[],version:"current",frontMatter:{}},u={},p=[],s={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport {\n    IxBasicNavigation,\n    IxMenu,\n    IxMenuAbout,\n    IxMenuAboutItem,\n    IxMenuAboutNews\n} from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const PopoverNews: React.FC = () => {\n  return (\n    <IxBasicNavigation>\n      <IxMenu>\n        <IxMenuAbout>\n          <IxMenuAboutItem label="Example"> </IxMenuAboutItem>\n        </IxMenuAbout>\n        <IxMenuAboutNews label="Test" show about-item-label="Example">\n          Test\n        </IxMenuAboutNews>\n      </IxMenu>\n    </IxBasicNavigation>\n  );\n};\n')))}l.isMDXComponent=!0}}]);