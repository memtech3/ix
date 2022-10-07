"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6166,650,1618,9291,1617,1916,2162,1211,4972,4886,2352],{30876:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(2784);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,l(l({ref:e},u),{},{components:n})):a.createElement(g,l({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82009:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(2784),r=n(6277);const i="tabItem_OMyP";function l(t){let{children:e,hidden:n,className:l}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},e)}},1112:(t,e,n)=>{n.d(e,{Z:()=>m});var a=n(7896),r=n(2784),i=n(6277),l=n(89741),o=n(42244),s=n(78963),p=n(24126);const u="tabList_M0Dn",d="tabItem_ysIP";function c(t){var e;const{lazy:n,block:l,defaultValue:c,values:m,groupId:g,className:b}=t,k=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??k.map((t=>{let{props:{value:e,label:n,attributes:a}}=t;return{value:e,label:n,attributes:a}})),N=(0,o.l)(v,((t,e)=>t.value===e.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===c?c:c??(null==(e=k.find((t=>t.props.default)))?void 0:e.props.value)??k[0].props.value;if(null!==f&&!v.some((t=>t.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:x}=(0,s.U)(),[w,y]=(0,r.useState)(f),I=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=g){const t=h[g];null!=t&&t!==w&&v.some((e=>e.value===t))&&y(t)}const C=t=>{const e=t.currentTarget,n=I.indexOf(e),a=v[n].value;a!==w&&(T(e),y(a),null!=g&&x(g,String(a)))},S=t=>{var e;let n=null;switch(t.key){case"ArrowRight":{const e=I.indexOf(t.currentTarget)+1;n=I[e]??I[0];break}case"ArrowLeft":{const e=I.indexOf(t.currentTarget)-1;n=I[e]??I[I.length-1];break}}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},b)},v.map((t=>{let{value:e,label:n,attributes:l}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:t=>I.push(t),onKeyDown:S,onFocus:C,onClick:C},l,{className:(0,i.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":w===e})}),n??e)}))),n?(0,r.cloneElement)(k.filter((t=>t.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==w})))))}function m(t){const e=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(e)},t))}},77942:(t,e,n)=>{n.d(e,{Z:()=>s});var a=n(37949),r=n(90077),i=n(37614),l=n(2784),o=n(90943);function s(t){const e=(0,i.Z)(),[n]=(0,l.useState)(!1),s=(0,r.Z)("/"),[p,u]=(0,l.useState)(""),[d,c]=(0,l.useState)((0,o.V)(e)),{preferredVersion:m}=(0,a.J)();return(0,l.useEffect)((()=>{const e=null==m?void 0:m.name;u(void 0===e||"current"===e?s+`webcomponent-examples/${t.name}.html`:s+`versioned_examples/version-${e}/webcomponent-examples/${t.name}.html`)}),[s,null==m?void 0:m.name,t.name]),(0,l.useLayoutEffect)((()=>{const t=()=>{let t=(0,o.V)(e);document.body.classList.forEach((e=>{e.includes("theme-")&&(t=e)})),c(t)},n=new MutationObserver((()=>t()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),t(),()=>{n.disconnect()}}),[]),l.createElement(l.Fragment,null,n?l.createElement("span",null,"No component preview found for ",t.name," in version"," ",null==m?void 0:m.name):l.createElement("iframe",{src:`${p}?theme=${t.theme?t.theme:d}${t.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${t.height}`}}))}},64176:(t,e,n)=>{n.d(e,{Z:()=>s});var a=n(82009),r=n(1112),i=n(2784),l=n(77942);const o={angular:1,react:2,javascript:3,preview:4};function s(t){const e=t.children??[],n=Array.isArray(e)?e:[e];return i.createElement(r.Z,{groupId:t.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Components"}].filter((t=>n.map((t=>t.props.value)).includes(t.value)))],defaultValue:"preview"},[i.createElement(a.Z,{value:"preview",key:"preview"},i.createElement(l.Z,{name:t.name,height:t.height,noMargin:t.noMargin})),...n].sort(((t,e)=>o[t.props.value]-o[e.props.value])))}},43804:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},l=void 0,o={unversionedId:"auto-generated/ix-select-item/events",id:"auto-generated/ix-select-item/events",title:"events",description:"| Name       | Description                   | Attribute        | Detail |",source:"@site/docs/auto-generated/ix-select-item/events.md",sourceDirName:"auto-generated/ix-select-item",slug:"/auto-generated/ix-select-item/events",permalink:"/docs/auto-generated/ix-select-item/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-select-item/events.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Detail"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"itemClick"),(0,r.kt)("td",{parentName:"tr",align:null},"Item clicked"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0},52276:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},l=void 0,o={unversionedId:"auto-generated/ix-select-item/props",id:"auto-generated/ix-select-item/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-select-item/props.md",sourceDirName:"auto-generated/ix-select-item",slug:"/auto-generated/ix-select-item/props",permalink:"/docs/auto-generated/ix-select-item/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-select-item/props.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hover"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"Internal"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hover")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},"Displayed name of the item"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selected"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the item is selected."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"selected")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"Item value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))))}d.isMDXComponent=!0},61423:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},l=void 0,o={unversionedId:"auto-generated/ix-select/events",id:"auto-generated/ix-select/events",title:"events",description:"| Name       | Description                   | Attribute        | Detail |",source:"@site/docs/auto-generated/ix-select/events.md",sourceDirName:"auto-generated/ix-select",slug:"/auto-generated/ix-select/events",permalink:"/docs/auto-generated/ix-select/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-select/events.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Detail"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"addItem"),(0,r.kt)("td",{parentName:"tr",align:null},"Item added to selection"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"itemSelectionChange"),(0,r.kt)("td",{parentName:"tr",align:null},"Item selection changed"),(0,r.kt)("td",{parentName:"tr",align:null},"`string"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]`")))))}d.isMDXComponent=!0},68086:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},l=void 0,o={unversionedId:"auto-generated/ix-select/props",id:"auto-generated/ix-select/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-select/props.md",sourceDirName:"auto-generated/ix-select",slug:"/auto-generated/ix-select/props",permalink:"/docs/auto-generated/ix-select/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-select/props.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowClear"),(0,r.kt)("td",{parentName:"tr",align:null},"Show clear button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"allow-clear")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"If true the select will be in disabled state"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"editable"),(0,r.kt)("td",{parentName:"tr",align:null},"Select is extendable"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"editable")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"i18nPlaceholder"),(0,r.kt)("td",{parentName:"tr",align:null},"Input field placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i-1-8n-placeholder")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'Select an option'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"i18nPlaceholderEditable"),(0,r.kt)("td",{parentName:"tr",align:null},"Input field placeholder for editable select"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i-1-8n-placeholder-editable")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'Type of select option'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"i18nSelectListHeader"),(0,r.kt)("td",{parentName:"tr",align:null},"Select list header"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i-1-8n-select-list-header")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'Please select an option'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Selection mode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"multiple" \uff5c "single"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'single'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readonly"),(0,r.kt)("td",{parentName:"tr",align:null},"If true the select will be in readonly mode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"readonly")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selectedIndices"),(0,r.kt)("td",{parentName:"tr",align:null},"Indices of selected items"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"selected-indices")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \uff5c string[]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))))))}d.isMDXComponent=!0},35740:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},l=void 0,o={unversionedId:"auto-generated/previews/angular/split-button-icons",id:"auto-generated/previews/angular/split-button-icons",title:"split-button-icons",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/split-button-icons.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/split-button-icons",permalink:"/docs/auto-generated/previews/angular/split-button-icons",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/split-button-icons.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-split-button-icons\',\n  template: ` <ix-split-button icon="document">\n    <ix-split-button-item icon="cut"></ix-split-button-item>\n    <ix-split-button-item icon="bulb"></ix-split-button-item>\n  </ix-split-button>`,\n})\nexport class SplitButtonIcons {}\n')))}d.isMDXComponent=!0},12422:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},l=void 0,o={unversionedId:"auto-generated/previews/angular/split-button",id:"auto-generated/previews/angular/split-button",title:"split-button",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/split-button.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/split-button",permalink:"/docs/auto-generated/previews/angular/split-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/split-button.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-split-button\',\n  template: `\n    <ix-split-button label="Action text">\n      <ix-split-button-item label="Item 1"></ix-split-button-item>\n      <ix-split-button-item label="Item 2"></ix-split-button-item>\n    </ix-split-button>\n  `,\n})\nexport class SplitButton {}\n')))}d.isMDXComponent=!0},1398:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},l=void 0,o={unversionedId:"auto-generated/previews/react/split-button-icons",id:"auto-generated/previews/react/split-button-icons",title:"split-button-icons",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/split-button-icons.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/split-button-icons",permalink:"/docs/auto-generated/previews/react/split-button-icons",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/split-button-icons.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxSplitButton, IxSplitButtonItem } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const SplitbuttonIcons: React.FC = () => {\n  return (\n    <IxSplitButton label="Action text">\n      <IxSplitButtonItem label="Item 1" icon="cut"></IxSplitButtonItem>\n      <IxSplitButtonItem label="Item 2" icon="bulb"></IxSplitButtonItem>\n    </IxSplitButton>\n  );\n};\n')))}d.isMDXComponent=!0},8102:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},l=void 0,o={unversionedId:"auto-generated/previews/react/split-button",id:"auto-generated/previews/react/split-button",title:"split-button",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/split-button.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/split-button",permalink:"/docs/auto-generated/previews/react/split-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/split-button.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxSplitButton, IxSplitButtonItem } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const Splitbutton: React.FC = () => {\n  return (\n    <IxSplitButton label="Action text">\n      <IxSplitButtonItem label="Item 1"></IxSplitButtonItem>\n      <IxSplitButtonItem label="Item 2"></IxSplitButtonItem>\n    </IxSplitButton>\n  );\n};\n')))}d.isMDXComponent=!0},34905:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},l=void 0,o={unversionedId:"auto-generated/previews/web-component/split-button-icons",id:"auto-generated/previews/web-component/split-button-icons",title:"split-button-icons",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/split-button-icons.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/split-button-icons",permalink:"/docs/auto-generated/previews/web-component/split-button-icons",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/split-button-icons.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ix-split-button icon="document">\n  <ix-split-button-item icon="cut"></ix-split-button-item>\n  <ix-split-button-item icon="bulb"></ix-split-button-item>\n</ix-split-button>\n')))}d.isMDXComponent=!0},68945:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},l=void 0,o={unversionedId:"auto-generated/previews/web-component/split-button",id:"auto-generated/previews/web-component/split-button",title:"split-button",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/split-button.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/split-button",permalink:"/docs/auto-generated/previews/web-component/split-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/split-button.md",tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ix-split-button label="Action text">\n  <ix-split-button-item label="Item 1"></ix-split-button-item>\n  <ix-split-button-item label="Item 2"></ix-split-button-item>\n</ix-split-button>\n')))}d.isMDXComponent=!0},72103:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>N,default:()=>y,frontMatter:()=>v,metadata:()=>f,toc:()=>x});var a=n(7896),r=(n(2784),n(30876)),i=n(82009),l=n(64176),o=n(68086),s=n(61423),p=n(52276),u=n(43804),d=n(68945),c=n(34905),m=n(8102),g=n(1398),b=n(12422),k=n(35740);const v={},N="Split Button",f={unversionedId:"controls/split-button",id:"controls/split-button",title:"Split Button",description:"Usage",source:"@site/docs/controls/split-button.md",sourceDirName:"controls",slug:"/controls/split-button",permalink:"/docs/controls/split-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/split-button.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Spinner",permalink:"/docs/controls/spinner"},next:{title:"Tabs",permalink:"/docs/controls/tabs"}},h={},x=[{value:"Usage",id:"usage",level:2},{value:"With icon only",id:"with-icon-only",level:3},{value:"Properties (ix-split-button)",id:"properties-ix-split-button",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3},{value:"Properties (ix-split-button-item)",id:"properties-ix-split-button-item",level:2},{value:"Props",id:"props-1",level:3},{value:"Events",id:"events-1",level:3}],w={toc:x};function y(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},w,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"split-button"},"Split Button"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(l.Z,{name:"split-button",height:"16rem",mdxType:"Preview"},(0,r.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)(d.default,{mdxType:"SourceSplitButton"})),(0,r.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)(m.default,{mdxType:"SourceReactSplitButton"})),(0,r.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)(b.default,{mdxType:"SourceAngularSplitButton"}))),(0,r.kt)("h3",{id:"with-icon-only"},"With icon only"),(0,r.kt)(l.Z,{name:"split-button-icons",height:"16rem",mdxType:"Preview"},(0,r.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)(c.default,{mdxType:"SourceSplitButtonIcons"})),(0,r.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)(g.default,{mdxType:"SourceReactSplitButtonIcons"})),(0,r.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)(k.default,{mdxType:"SourceAngularSplitButtonIcons"}))),(0,r.kt)("h2",{id:"properties-ix-split-button"},"Properties (ix-split-button)"),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(o.default,{mdxType:"Props"}),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)(s.default,{mdxType:"Events"}),(0,r.kt)("h2",{id:"properties-ix-split-button-item"},"Properties (ix-split-button-item)"),(0,r.kt)("h3",{id:"props-1"},"Props"),(0,r.kt)(p.default,{mdxType:"ItemProps"}),(0,r.kt)("h3",{id:"events-1"},"Events"),(0,r.kt)(u.default,{mdxType:"ItemEvents"}))}y.isMDXComponent=!0}}]);