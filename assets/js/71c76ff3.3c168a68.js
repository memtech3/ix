"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1476],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(b,c(c({ref:t},s),{},{components:n})):r.createElement(b,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7896),o=(n(2784),n(30876));const a={},c=void 0,p={unversionedId:"auto-generated/previews/web-component/html-table-striped",id:"auto-generated/previews/web-component/html-table-striped",title:"html-table-striped",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/html-table-striped.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/html-table-striped",permalink:"/docs/auto-generated/previews/web-component/html-table-striped",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/html-table-striped.md",tags:[],version:"current",frontMatter:{}},i={},l=[],s={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<table class="table table-striped">\n  <thead>\n    <tr>\n      <th scope="col">#</th>\n      <th scope="col">First</th>\n      <th scope="col">Last</th>\n      <th scope="col">Handle</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <th scope="row">2</th>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <th scope="row">3</th>\n      <td colspan="2">Larry the Bird</td>\n      <td>@twitter</td>\n    </tr>\n  </tbody>\n</table>\n')))}d.isMDXComponent=!0}}]);