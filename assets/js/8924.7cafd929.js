"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8924],{68924:(e,i,n)=>{n.r(i),n.d(i,{ix_expanding_search:()=>a});var s=n(98139);const a=class{constructor(e){(0,s.r)(this,e),this.valueChange=(0,s.c)(this,"valueChange",7),this.icon="search",this.placeholder="Enter text here",this.value="",this.isFieldChanged=!1,this.expanded=!1,this.hasFocus=!1,this.focusTextInput=this.focusTextInput.bind(this)}expandInput(){setTimeout(this.focusTextInput,300),this.expanded=!0}collapseInput(){!this.isFieldChanged&&this.expanded&&(this.expanded=!1)}clearInput(){this.value="",this.isFieldChanged=!1}onChange(e){this.value=e.target.value,this.isFieldChanged&&""===this.value?this.isFieldChanged=!1:this.isFieldChanged=!0,this.valueChange.emit(this.value)}focusTextInput(){var e;null===(e=this.textInput)||void 0===e||e.focus()}clearClicked(){var e;this.clearInput(),null===(e=this.textInput)||void 0===e||e.focus(),this.valueChange.emit(this.value)}render(){return(0,s.h)(s.H,{class:{expanded:this.expanded}},(0,s.h)("button",{class:{btn:!0,"btn-invisible-primary":!0,"btn-icon":!0,"btn-search":!0,"disable-pointer":this.expanded},"data-testid":"button",onClick:()=>this.expandInput(),tabindex:this.expanded?-1:0},(0,s.h)("ix-icon",{class:"btn-search-icon",name:this.icon,size:this.expanded?"16":"24",color:this.hasFocus?"input-search-icon--color--focus":void 0})),(0,s.h)("div",{class:{expanded:this.expanded,collapsed:!this.expanded,"disable-pointer":!this.expanded,"input-container":!0},"data-testid":"input-wrapper"},(0,s.h)("input",{class:{"form-control":!0,input:this.expanded,"disable-pointer":!this.expanded,"opacity-before":!this.expanded,"opacity-after":this.expanded},ref:e=>this.textInput=e,"data-testid":"input",placeholder:this.placeholder,type:"text",value:this.value,onBlur:()=>{this.collapseInput(),this.hasFocus=!1},onFocus:()=>this.hasFocus=!0,onInput:e=>this.onChange(e),tabindex:this.expanded?0:-1}),this.isFieldChanged?(0,s.h)("ix-icon-button",{class:"btn-clear",icon:"clear",ghost:!0,size:"24","data-testid":"clear-button",onClick:()=>this.clearClicked()}):null))}};a.style=".sc-ix-expanding-search-h{display:flex;width:11.5625rem;height:2rem;align-items:center;justify-content:space-between}.sc-ix-expanding-search-h .input-container.sc-ix-expanding-search{transition:all 0.3s ease-in-out}.sc-ix-expanding-search-h .disable-pointer.sc-ix-expanding-search{pointer-events:none}.sc-ix-expanding-search-h input.sc-ix-expanding-search{box-shadow:var(--theme-input--box-shadow)}.sc-ix-expanding-search-h .expanded.sc-ix-expanding-search{width:11.5625rem}.sc-ix-expanding-search-h .collapsed.sc-ix-expanding-search{width:1.5rem;border:none}.sc-ix-expanding-search-h .btn-search-icon.sc-ix-expanding-search{align-self:center;margin:auto;position:relative}.sc-ix-expanding-search-h .btn-search.sc-ix-expanding-search{display:flex;max-width:2rem;max-height:2rem;border-radius:var(--theme-input--border-radius);transition:all 0.15s ease-in-out;z-index:1;align-items:center;position:relative;border:none}.sc-ix-expanding-search-h .btn-search.sc-ix-expanding-search:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-expanding-search-h .btn-search.sc-ix-expanding-search:not(.disabled):not(:disabled):hover{border-color:transparent}.sc-ix-expanding-search-h .btn-search.sc-ix-expanding-search:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-expanding-search-h .btn-search.sc-ix-expanding-search:not(.disabled):not(:disabled):active{border-color:transparent}.sc-ix-expanding-search-h .btn-search.sc-ix-expanding-search:not(.disabled):not(:disabled):focus,.sc-ix-expanding-search-h .btn-search.sc-ix-expanding-search:not(.disabled):not(:disabled):focus-visible{outline:none}.sc-ix-expanding-search-h .btn-search.sc-ix-expanding-search:not(.disabled):not(:disabled):focus-visible{outline:var(--focus--border-color);outline-width:1px;outline-style:solid}.sc-ix-expanding-search-h .btn-search.sc-ix-expanding-search:active{width:2rem;height:2rem;border-radius:var(--theme-input--border-radius);border:var(--theme-std-bdr-1) !important}.sc-ix-expanding-search-h .input-container.sc-ix-expanding-search{display:flex;position:absolute;align-items:center;flex-wrap:nowrap}.sc-ix-expanding-search-h .btn-clear.sc-ix-expanding-search{position:absolute;border-radius:var(--theme-input--border-radius);right:0px}.sc-ix-expanding-search-h .input.sc-ix-expanding-search{padding-left:2rem !important;padding-right:2.5rem !important}.sc-ix-expanding-search-h .opacity-before.sc-ix-expanding-search{opacity:0}.sc-ix-expanding-search-h .opacity-after.sc-ix-expanding-search{opacity:1}"}}]);