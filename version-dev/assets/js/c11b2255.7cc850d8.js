"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34882],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=u(n),m=o,f=l["".concat(p,".").concat(m)]||l[m]||s[m]||c;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=l;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},46327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var r=n(7896),o=(n(2784),n(30876));const c={},a=void 0,i={unversionedId:"auto-generated/previews/react/dropdown-quick-actions",id:"auto-generated/previews/react/dropdown-quick-actions",title:"dropdown-quick-actions",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/dropdown-quick-actions.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/dropdown-quick-actions",permalink:"/version-dev/docs/auto-generated/previews/react/dropdown-quick-actions",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/dropdown-quick-actions.md",tags:[],version:"current",frontMatter:{}},p={},u=[],d={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  IxButton,\n  IxDivider,\n  IxDropdown,\n  IxDropdownItem,\n  IxDropdownQuickActions,\n  IxIconButton,\n} from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <>\n      <IxButton id="iconTriggerId">Open</IxButton>\n      <IxDropdown trigger="iconTriggerId">\n        <IxDropdownQuickActions>\n          <IxIconButton icon="cut" ghost></IxIconButton>\n          <IxIconButton icon="bulb" ghost></IxIconButton>\n          <IxIconButton icon="trashcan" ghost></IxIconButton>\n        </IxDropdownQuickActions>\n\n        <IxDivider></IxDivider>\n\n        <IxDropdownItem icon="star" label="Item 1"></IxDropdownItem>\n        <IxDropdownItem icon="document" label="Item 2"></IxDropdownItem>\n        <IxDropdownItem icon="bulb" label="Item 3"></IxDropdownItem>\n      </IxDropdown>\n    </>\n  );\n};\n')))}s.isMDXComponent=!0}}]);