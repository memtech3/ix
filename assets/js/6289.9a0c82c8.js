"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6289],{19932:(t,i,e)=>{e.d(i,{g:()=>o});const s=t=>t.toUpperCase()==="Primary".toUpperCase(),n=t=>t.toUpperCase()==="Secondary".toUpperCase(),o=function(t,i,e,o,r,a,l){return void 0===o&&(o=!1),void 0===r&&(r=!1),{btn:!0,"btn-primary":s(t)&&!i&&!e,"btn-outline-primary":s(t)&&i&&!e,"btn-invisible-primary":s(t)&&!i&&e,"btn-secondary":n(t)&&!i&&!e,"btn-outline-secondary":n(t)&&i&&!e,"btn-invisible-secondary":n(t)&&!i&&e,"btn-icon":o,"btn-oval":r,selected:n(t)&&(i||e)&&a,disabled:l}}},36289:(t,i,e)=>{e.r(i),e.d(i,{ix_button:()=>o});var s=e(98139),n=e(19932);const o=class{constructor(t){(0,s.r)(this,t),this.variant="Primary",this.outline=!1,this.invisible=!1,this.ghost=!1,this.selected=!1,this.disabled=!1,this.type="button"}render(){return(0,s.h)("button",{type:this.type,class:(0,n.g)(this.variant,this.outline,this.ghost||this.invisible,!1,!1,this.selected,this.disabled)},(0,s.h)("slot",null))}};o.style=".sc-ix-button-h{display:inline-block;height:2rem}"}}]);