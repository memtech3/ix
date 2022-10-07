"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7003],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7896),o=(n(2784),n(30876));const i={},a=void 0,c={unversionedId:"auto-generated/previews/react/tile",id:"auto-generated/previews/react/tile",title:"tile",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/tile.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/tile",permalink:"/docs/auto-generated/previews/react/tile",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/tile.md",tags:[],version:"current",frontMatter:{}},l={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxButton, IxIcon, IxIconButton, IxTile } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const Tile: React.FC = () => {\n  return (\n    <div className="example">\n      <IxTile size="small">92.8 \xb0C</IxTile>\n\n      <IxTile size="medium" className="mr-1">\n        <div slot="header">Tile header</div>\n        <div className="text-l">92.8 \xb0C</div>\n      </IxTile>\n\n      <IxTile size="big">\n        <div\n          className="d-flex flex-grow-1 align-items-center justify-content-between"\n          slot="header"\n        >\n          Tile header\n          <IxIconButton ghost icon="context-menu"></IxIconButton>\n        </div>\n        <div slot="subheader">Temperature</div>\n        <div\n          style={{\n            display: \'flex\',\n            flexDirection: \'column\',\n            height: \'100%\',\n            alignItems: \'flex-end\',\n            justifyContent: \'space-between\',\n          }}\n        >\n          <span>92.8 \xb0C</span>\n        </div>\n        <div\n          className="d-flex h-100 align-items-center justify-content-end"\n          slot="footer"\n        >\n          <IxButton ghost slot="footer">\n            <IxIcon name="chevron-right-small"></IxIcon>Details\n          </IxButton>\n        </div>\n      </IxTile>\n    </div>\n  );\n};\n')))}p.isMDXComponent=!0}}]);