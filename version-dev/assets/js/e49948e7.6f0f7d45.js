"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1312],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,v=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63483:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(2784),a=n(731);function i(e){var t,n,i,l,o,c,s,u;return r.createElement("div",{className:"row with--border"},r.createElement("div",{className:"col-sm-6"},r.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(n=e.attribute)||null==(i=n.tags)?void 0:i.filter((e=>"since"===e.type)).map((t=>{var n;return r.createElement(a.h,{message:t.message,key:`Tag_Since_${null==e||null==(n=e.attribute)?void 0:n.name}`})})),null==e||null==(l=e.attribute)||null==(o=l.tags)?void 0:o.filter((e=>"deprecated"===e.type)).map((t=>{var n;return r.createElement(a.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(n=e.attribute)?void 0:n.name}`})})))),r.createElement("div",{className:"col-sm-6"},r.createElement("div",{className:"ApiTable__Content"},r.createElement("span",{className:"Attribute__Description"},null==e||null==(c=e.attribute)?void 0:c.description),r.createElement("div",{className:"container-fluid"},null==e||null==(s=e.attribute)||null==(u=s.definition)?void 0:u.map((e=>r.createElement("div",{className:"row Attribute",key:e.name},r.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),r.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const l=function(e){var t;return r.createElement("div",{className:"container-fluid ApiTable"},r.createElement("div",{className:"row with--border"},r.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),r.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>r.createElement(i,{attribute:e,key:e.name}))))}},731:(e,t,n)=>{n.d(t,{Q:()=>a,h:()=>i});var r=n(2784);function a(e){return r.createElement("div",{className:"ApiTableTag"},r.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),r.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function i(e){return r.createElement("div",{className:"ApiTableTag"},r.createElement("div",{className:"Tag"},"Since ",e.message))}},75396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(7896),a=(n(2784),n(30876)),i=n(63483);const l={},o=void 0,c={unversionedId:"auto-generated/ix-spinner/props",id:"auto-generated/ix-spinner/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-spinner/props.md",sourceDirName:"auto-generated/ix-spinner",slug:"/auto-generated/ix-spinner/props",permalink:"/version-dev/docs/auto-generated/ix-spinner/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-spinner/props.md",tags:[],version:"current",frontMatter:{}},s={},u=[],m={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{attributes:[{name:"size",description:"Size of spinner",definition:[{name:"Attribute",value:"size"},{name:"Type",value:'"large" \uff5c "medium"'},{name:"Default",value:"'medium'"}],tags:[]},{name:"variant",description:"Variant of spinner",definition:[{name:"Attribute",value:"variant"},{name:"Type",value:'"primary" \uff5c "secondary" \uff5c "sencodary"'},{name:"Default",value:"'secondary'"}],tags:[]}],mdxType:"ApiTable"}))}p.isMDXComponent=!0}}]);