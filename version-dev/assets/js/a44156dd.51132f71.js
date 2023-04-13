"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53666],{30876:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),p=r,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||i;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63483:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(2784),r=a(731);function i(e){var t,a,i,l,o,c,s,u;return n.createElement("div",{className:"row with--border"},n.createElement("div",{className:"col-sm-6"},n.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(a=e.attribute)||null==(i=a.tags)?void 0:i.filter((e=>"since"===e.type)).map((t=>{var a;return n.createElement(r.h,{message:t.message,key:`Tag_Since_${null==e||null==(a=e.attribute)?void 0:a.name}`})})),null==e||null==(l=e.attribute)||null==(o=l.tags)?void 0:o.filter((e=>"deprecated"===e.type)).map((t=>{var a;return n.createElement(r.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(a=e.attribute)?void 0:a.name}`})})))),n.createElement("div",{className:"col-sm-6"},n.createElement("div",{className:"ApiTable__Content"},n.createElement("span",{className:"Attribute__Description"},null==e||null==(c=e.attribute)?void 0:c.description),n.createElement("div",{className:"container-fluid"},null==e||null==(s=e.attribute)||null==(u=s.definition)?void 0:u.map((e=>n.createElement("div",{className:"row Attribute",key:e.name},n.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),n.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const l=function(e){var t;return n.createElement("div",{className:"container-fluid ApiTable"},n.createElement("div",{className:"row with--border"},n.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),n.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>n.createElement(i,{attribute:e,key:e.name}))))}},731:(e,t,a)=>{a.d(t,{Q:()=>r,h:()=>i});var n=a(2784);function r(e){return n.createElement("div",{className:"ApiTableTag"},n.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),n.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function i(e){return n.createElement("div",{className:"ApiTableTag"},n.createElement("div",{className:"Tag"},"Since ",e.message))}},3065:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(7896),r=(a(2784),a(30876)),i=a(63483);const l={},o=void 0,c={unversionedId:"auto-generated/ix-toggle/props",id:"auto-generated/ix-toggle/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-toggle/props.md",sourceDirName:"auto-generated/ix-toggle",slug:"/auto-generated/ix-toggle/props",permalink:"/version-dev/docs/auto-generated/ix-toggle/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-toggle/props.md",tags:[],version:"current",frontMatter:{}},s={},u=[],m={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{attributes:[{name:"checked",description:"Whether the slide-toggle element is checked or not.",definition:[{name:"Attribute",value:"checked"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"color",description:"Basic and status colors from color palette",definition:[{name:"Attribute",value:"color"},{name:"Type",value:"string"},{name:"Default",value:"'accent'"}],tags:[{type:"deprecated",message:"Will be removed in 2.0.0"}]},{name:"disabled",description:"Whether the slide-toggle element is disabled or not.",definition:[{name:"Attribute",value:"disabled"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"hideText",description:"Hide `on` and `off` text",definition:[{name:"Attribute",value:"hide-text"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"indeterminate",description:"If true the control is in indeterminate state",definition:[{name:"Attribute",value:"indeterminate"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"textIndeterminate",description:"Text for indeterminate state",definition:[{name:"Attribute",value:"text-indeterminate"},{name:"Type",value:"string"},{name:"Default",value:"'Mixed'"}],tags:[]},{name:"textOff",description:"Text for off state",definition:[{name:"Attribute",value:"text-off"},{name:"Type",value:"string"},{name:"Default",value:"'Off'"}],tags:[]},{name:"textOn",description:"Text for on state",definition:[{name:"Attribute",value:"text-on"},{name:"Type",value:"string"},{name:"Default",value:"'On'"}],tags:[]}],mdxType:"ApiTable"}))}d.isMDXComponent=!0}}]);