"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65664],{30876:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),p=o,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26943:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(7896),o=(t(2784),t(30876));const a={},i=void 0,s={unversionedId:"auto-generated/previews/vue/modal",id:"auto-generated/previews/vue/modal",title:"modal",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/modal.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/modal",permalink:"/version-dev/docs/auto-generated/previews/vue/modal",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/modal.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport {\n  HTMLRefElement,\n  IxButton,\n  IxIconButton,\n  IxModal,\n} from \'@siemens/ix-vue\';\nimport { ref } from \'vue\';\n\nconst modalRef = ref<HTMLRefElement<HTMLIxModalElement>>();\nconst close = () => {\n  modalRef.value?.$el.close(\'close payload!\');\n  show.value = false;\n};\nconst dismiss = () => {\n  modalRef.value?.$el.dismiss(\'dismiss payload\');\n  show.value = false;\n};\n\nconst show = ref(false);\n<\/script>\n\n<template>\n  <IxButton @click="show = true">Show modal</IxButton>\n  <IxModal ref="modalRef" v-if="show">\n    <div className="modal-header">\n      Message headline\n      <IxIconButton\n        data-button-close\n        ghost\n        icon="close"\n        @click="dismiss()"\n      ></IxIconButton>\n    </div>\n    <div className="modal-body">Message text lorem ipsum</div>\n    <div className="modal-footer">\n      <IxButton outline @click="dismiss()"> Cancel </IxButton>\n      <IxButton @click="close()">OK</IxButton>\n    </div>\n  </IxModal>\n</template>\n')))}d.isMDXComponent=!0}}]);