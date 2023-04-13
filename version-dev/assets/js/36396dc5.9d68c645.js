"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39291],{30876:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||l;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63483:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(2784),r=a(731);function l(e){var t,a,l,i,o,s,c,u;return n.createElement("div",{className:"row with--border"},n.createElement("div",{className:"col-sm-6"},n.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(a=e.attribute)||null==(l=a.tags)?void 0:l.filter((e=>"since"===e.type)).map((t=>{var a;return n.createElement(r.h,{message:t.message,key:`Tag_Since_${null==e||null==(a=e.attribute)?void 0:a.name}`})})),null==e||null==(i=e.attribute)||null==(o=i.tags)?void 0:o.filter((e=>"deprecated"===e.type)).map((t=>{var a;return n.createElement(r.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(a=e.attribute)?void 0:a.name}`})})))),n.createElement("div",{className:"col-sm-6"},n.createElement("div",{className:"ApiTable__Content"},n.createElement("span",{className:"Attribute__Description"},null==e||null==(s=e.attribute)?void 0:s.description),n.createElement("div",{className:"container-fluid"},null==e||null==(c=e.attribute)||null==(u=c.definition)?void 0:u.map((e=>n.createElement("div",{className:"row Attribute",key:e.name},n.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),n.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const i=function(e){var t;return n.createElement("div",{className:"container-fluid ApiTable"},n.createElement("div",{className:"row with--border"},n.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),n.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>n.createElement(l,{attribute:e,key:e.name}))))}},731:(e,t,a)=>{a.d(t,{Q:()=>r,h:()=>l});var n=a(2784);function r(e){return n.createElement("div",{className:"ApiTableTag"},n.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),n.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function l(e){return n.createElement("div",{className:"ApiTableTag"},n.createElement("div",{className:"Tag"},"Since ",e.message))}},68086:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(7896),r=(a(2784),a(30876)),l=a(63483);const i={},o=void 0,s={unversionedId:"auto-generated/ix-select/props",id:"auto-generated/ix-select/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-select/props.md",sourceDirName:"auto-generated/ix-select",slug:"/auto-generated/ix-select/props",permalink:"/version-dev/docs/auto-generated/ix-select/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-select/props.md",tags:[],version:"current",frontMatter:{}},c={},u=[],m={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{attributes:[{name:"allowClear",description:"Show clear button",definition:[{name:"Attribute",value:"allow-clear"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"disabled",description:"If true the select will be in disabled state",definition:[{name:"Attribute",value:"disabled"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"editable",description:"Select is extendable",definition:[{name:"Attribute",value:"editable"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"hideListHeader",description:"Hide list header",definition:[{name:"Attribute",value:"hide-list-header"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[{type:"since",message:"1.5.0"}]},{name:"i18nPlaceholder",description:"Input field placeholder",definition:[{name:"Attribute",value:"i-1-8n-placeholder"},{name:"Type",value:"string"},{name:"Default",value:"'Select an option'"}],tags:[]},{name:"i18nPlaceholderEditable",description:"Input field placeholder for editable select",definition:[{name:"Attribute",value:"i-1-8n-placeholder-editable"},{name:"Type",value:"string"},{name:"Default",value:"'Type of select option'"}],tags:[]},{name:"i18nSelectListHeader",description:"Select list header",definition:[{name:"Attribute",value:"i-1-8n-select-list-header"},{name:"Type",value:"string"},{name:"Default",value:"'Please select an option'"}],tags:[]},{name:"mode",description:"Selection mode",definition:[{name:"Attribute",value:"mode"},{name:"Type",value:'"multiple" \uff5c "single"'},{name:"Default",value:"'single'"}],tags:[]},{name:"readonly",description:"If true the select will be in readonly mode",definition:[{name:"Attribute",value:"readonly"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"selectedIndices",description:"Indices of selected items",definition:[{name:"Attribute",value:"selected-indices"},{name:"Type",value:"string \uff5c string[]"},{name:"Default",value:"[]"}],tags:[]}],mdxType:"ApiTable"}))}d.isMDXComponent=!0}}]);