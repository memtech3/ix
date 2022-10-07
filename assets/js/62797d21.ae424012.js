"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4432],{30876:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(a),p=r,g=m["".concat(s,".").concat(p)]||m[p]||c[p]||i;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},99304:(e,t,a)=>{a.d(t,{X:()=>l});var n=a(6277),r=a(2784);const i="Guideline_pZob",o="Icon_TTjR";function l(e){return r.createElement("div",{className:(0,n.Z)(i)},r.createElement("div",{className:(0,n.Z)(o)},e.do?r.createElement("ix-icon",{name:"single-check",size:"16",color:"color-success"}):r.createElement("ix-icon",{name:"close",size:"16",color:"color-alarm"})),r.createElement("div",null,e.label))}},34431:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7896),r=(a(2784),a(30876)),i=a(99304);const o={sidebar_position:8,sidebar_title:"Error, warning & notification messages",title:"Error, warning & notification messages"},l=void 0,s={unversionedId:"language/error-messages",id:"language/error-messages",title:"Error, warning & notification messages",description:"General rules for messaging",source:"@site/docs/language/error-messages.md",sourceDirName:"language",slug:"/language/error-messages",permalink:"/docs/language/error-messages",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/language/error-messages.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_title:"Error, warning & notification messages",title:"Error, warning & notification messages"},sidebar:"mySidebar",previous:{title:"Best practices",permalink:"/docs/language/best-practices"},next:{title:"Dialogs and buttons",permalink:"/docs/language/dialogs-and-buttons"}},u={},d=[{value:"General rules for messaging",id:"general-rules-for-messaging",level:3},{value:"Error messages",id:"error-messages",level:3},{value:"Warning messages",id:"warning-messages",level:3},{value:"Notifications",id:"notifications",level:3}],c={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"general-rules-for-messaging"},"General rules for messaging"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Three parts of a message: 1. title 2. explanation 3. action")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Title: Name which info/ problem exists/ may occur and where it comes from")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Explanation: Give a clear reason for the (potential) error and explain it\u2019s consequences if the user ignores it")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Action: Add clear instructions for user what to do next to resolve the error i.e. provide solution to the primary button")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Do not blame the user responsible")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Avoid using you and your only use passive voice as an exception")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Do not repeat your message in title and explanation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Do not over communicate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use \u2026 to show an action is required, i.e. fill this in\u2026")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Polite and encouraging tone of speech")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Keep it short")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If detailed information is required refer to progressive disclosure button")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Provide specific names, locations and values of the objects involved")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Show urgency through wording like immediatly only if serious consequences follow"))),(0,r.kt)("h3",{id:"error-messages"},"Error messages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An errror message alerts user of a problem that exists and must be addressed")),(0,r.kt)("div",{class:"d-flex flex-wrap"},(0,r.kt)("span",{class:"m-2"},(0,r.kt)(i.X,{do:!0,label:"System error: You\u2019re offline. Check your connection and try again.",mdxType:"Guideline"}),(0,r.kt)(i.X,{do:!0,label:"File error: We cannot upload this file. Try uploading again.",mdxType:"Guideline"}),(0,r.kt)(i.X,{do:!0,label:"Permission error: To carry out this task, you need more permissions. Contact admin to change permissions. ",mdxType:"Guideline"}),(0,r.kt)(i.X,{do:!1,label:"What did you do!?",mdxType:"Guideline"}),(0,r.kt)(i.X,{do:!1,label:"The email address you entered does not match the required format. Please enter your email address using the standard format.",mdxType:"Guideline"}),(0,r.kt)(i.X,{do:!1,label:"You have failed to delete the device.",mdxType:"Guideline"}),(0,r.kt)(i.X,{do:!1,label:"Error 404",mdxType:"Guideline"}),(0,r.kt)(i.X,{do:!1,label:"Value out of range.",mdxType:"Guideline"}),(0,r.kt)(i.X,{do:!1,label:"File not found.",mdxType:"Guideline"}),(0,r.kt)(i.X,{do:!1,label:"Title: Input error",mdxType:"Guideline"}),(0,r.kt)(i.X,{do:!1,label:"Explanation: Input error detected.",mdxType:"Guideline"}),(0,r.kt)(i.X,{do:!1,label:"Action: Try again.",mdxType:"Guideline"}))),(0,r.kt)("h3",{id:"warning-messages"},"Warning messages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A warning message alerts users of a condition that may cause a problem in the future")),(0,r.kt)("div",{class:"d-flex flex-wrap"},(0,r.kt)("span",{class:"m-2"},(0,r.kt)(i.X,{do:!1,label:"Title: You have not saved all documents",mdxType:"Guideline"}),(0,r.kt)(i.X,{do:!1,label:"Explanation: You have to save all documents",mdxType:"Guideline"}),(0,r.kt)(i.X,{do:!1,label:"Action: (Ok button)",mdxType:"Guideline"}))),(0,r.kt)("h3",{id:"notifications"},"Notifications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Notifications are informative and no actions are required from the user.")),(0,r.kt)("div",{class:"d-flex flex-wrap"},(0,r.kt)("span",{class:"m-2"},(0,r.kt)(i.X,{do:!0,label:"Access Point 2 is connected.",mdxType:"Guideline"}),(0,r.kt)(i.X,{do:!1,label:"Access Point connection failed. Try again.",mdxType:"Guideline"})),(0,r.kt)("span",{class:"m-2"},(0,r.kt)(i.X,{do:!0,label:"Changes are saved automatically.",mdxType:"Guideline"}),(0,r.kt)(i.X,{do:!1,label:"No rows to show.",mdxType:"Guideline"}))))}m.isMDXComponent=!0}}]);