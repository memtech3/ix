"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6801],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>l});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),l=o,b=d["".concat(u,".").concat(l)]||d[l]||m[l]||i;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function l(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7896),o=(n(2784),n(30876));const i={},a=void 0,c={unversionedId:"auto-generated/previews/web-component/tabs-rounded",id:"auto-generated/previews/web-component/tabs-rounded",title:"tabs-rounded",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/tabs-rounded.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/tabs-rounded",permalink:"/docs/auto-generated/previews/web-component/tabs-rounded",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/tabs-rounded.md",tags:[],version:"current",frontMatter:{}},u={},s=[],p={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ix-tabs rounded>\n  <ix-tab-item><ix-icon name="success"></ix-icon></ix-tab-item>\n  <ix-tab-item counter="{200}"><ix-icon name="tree"></ix-icon></ix-tab-item>\n  <ix-tab-item><ix-icon name="maintenance"></ix-icon></ix-tab-item>\n  <ix-tab-item disabled counter="{24}"\n    ><ix-icon name="sound-loud"></ix-icon\n  ></ix-tab-item>\n  <ix-tab-item><ix-icon name="hierarchy"></ix-icon></ix-tab-item>\n  <ix-tab-item disabled\n    ><ix-icon name="calendar-settings"></ix-icon\n  ></ix-tab-item>\n</ix-tabs>\n')))}m.isMDXComponent=!0}}]);