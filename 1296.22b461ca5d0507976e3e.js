(self.webpackChunknews_app=self.webpackChunknews_app||[]).push([[1296],{1296:(e,t,i)=>{"use strict";i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>s,copyVisualViewport:()=>D,keyboardDidClose:()=>f,keyboardDidOpen:()=>g,keyboardDidResize:()=>c,resetKeyboardAssist:()=>r,setKeyboardClose:()=>b,setKeyboardOpen:()=>w,startKeyboardAssist:()=>h,trackViewportChanges:()=>u});const s="ionKeyboardDidShow",o="ionKeyboardDidHide";let a={},d={},n=!1;const r=()=>{a={},d={},n=!1},h=e=>{p(e),e.visualViewport&&(d=D(e.visualViewport),e.visualViewport.onresize=()=>{u(e),g()||c(e)?w(e):f(e)&&b(e)})},p=e=>{e.addEventListener("keyboardDidShow",t=>w(e,t)),e.addEventListener("keyboardDidHide",()=>b(e))},w=(e,t)=>{l(e,t),n=!0},b=e=>{y(e),n=!1},g=()=>!n&&a.width===d.width&&(a.height-d.height)*d.scale>150,c=e=>n&&!f(e),f=e=>n&&d.height===e.innerHeight,l=(e,t)=>{const i=new CustomEvent(s,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-d.height}});e.dispatchEvent(i)},y=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},u=e=>{a=Object.assign({},d),d=D(e.visualViewport)},D=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);