"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39935],{10161:(e,t,n)=>{n.d(t,{a:()=>ae});var r={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},a={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},i=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],o={CSS:{},springs:{}};function u(e,t,n){return Math.min(Math.max(e,t),n)}function s(e,t){return e.indexOf(t)>-1}function c(e,t){return e.apply(null,t)}var l={arr:function(e){return Array.isArray(e)},obj:function(e){return s(Object.prototype.toString.call(e),"Object")},pth:function(e){return l.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||l.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return l.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return l.hex(e)||l.rgb(e)||l.hsl(e)},key:function(e){return!r.hasOwnProperty(e)&&!a.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function d(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function f(e,t){var n=d(e),r=u(l.und(n[0])?1:n[0],.1,100),a=u(l.und(n[1])?100:n[1],.1,100),i=u(l.und(n[2])?10:n[2],.1,100),s=u(l.und(n[3])?0:n[3],.1,100),c=Math.sqrt(a/r),f=i/(2*Math.sqrt(a*r)),h=f<1?c*Math.sqrt(1-f*f):0,p=f<1?(f*c-s)/h:-s+c;function v(e){var n=t?t*e/1e3:e;return n=f<1?Math.exp(-n*f*c)*(1*Math.cos(h*n)+p*Math.sin(h*n)):(1+p*n)*Math.exp(-n*c),0===e||1===e?e:1-n}return t?v:function(){var t=o.springs[e];if(t)return t;for(var n=1/6,r=0,a=0;;)if(1===v(r+=n)){if(++a>=16)break}else a=0;var i=r*n*1e3;return o.springs[e]=i,i}}function h(e){return void 0===e&&(e=10),function(t){return Math.ceil(u(t,1e-6,1)*e)*(1/e)}}var p,v,g=function(){var e=.1;function t(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function r(e){return 3*e}function a(e,a,i){return((t(a,i)*e+n(a,i))*e+r(a))*e}function i(e,a,i){return 3*t(a,i)*e*e+2*n(a,i)*e+r(a)}return function(t,n,r,o){if(0<=t&&t<=1&&0<=r&&r<=1){var u=new Float32Array(11);if(t!==n||r!==o)for(var s=0;s<11;++s)u[s]=a(s*e,t,r);return function(e){return t===n&&r===o||0===e||1===e?e:a(c(e),n,o)}}function c(n){for(var o=0,s=1;10!==s&&u[s]<=n;++s)o+=e;--s;var c=o+(n-u[s])/(u[s+1]-u[s])*e,l=i(c,t,r);return l>=.001?function(e,t,n,r){for(var o=0;o<4;++o){var u=i(t,n,r);if(0===u)return t;t-=(a(t,n,r)-e)/u}return t}(n,c,t,r):0===l?c:function(e,t,n,r,i){var o,u,s=0;do{(o=a(u=t+(n-t)/2,r,i)-e)>0?n=u:t=u}while(Math.abs(o)>1e-7&&++s<10);return u}(n,o,o+e,t,r)}}}(),m=(p={linear:function(){return function(e){return e}}},v={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=u(e,1,10),r=u(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,t){v[e]=function(){return function(e){return Math.pow(e,t+2)}}})),Object.keys(v).forEach((function(e){var t=v[e];p["easeIn"+e]=t,p["easeOut"+e]=function(e,n){return function(r){return 1-t(e,n)(1-r)}},p["easeInOut"+e]=function(e,n){return function(r){return r<.5?t(e,n)(2*r)/2:1-t(e,n)(-2*r+2)/2}},p["easeOutIn"+e]=function(e,n){return function(r){return r<.5?(1-t(e,n)(1-2*r))/2:(t(e,n)(2*r-1)+1)/2}}})),p);function y(e,t){if(l.fnc(e))return e;var n=e.split("(")[0],r=m[n],a=d(e);switch(n){case"spring":return f(e,t);case"cubicBezier":return c(g,a);case"steps":return c(h,a);default:return c(r,a)}}function w(e){try{return document.querySelectorAll(e)}catch(t){return}}function b(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<n;i++)if(i in e){var o=e[i];t.call(r,o,i,e)&&a.push(o)}return a}function x(e){return e.reduce((function(e,t){return e.concat(l.arr(t)?x(t):t)}),[])}function M(e){return l.arr(e)?e:(l.str(e)&&(e=w(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function k(e,t){return e.some((function(e){return e===t}))}function C(e){var t={};for(var n in e)t[n]=e[n];return t}function O(e,t){var n=C(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function I(e,t){var n=C(e);for(var r in t)n[r]=l.und(e[r])?t[r]:e[r];return n}function P(e){return l.rgb(e)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=e))?"rgba("+n[1]+",1)":t:l.hex(e)?function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(e):l.hsl(e)?function(e){var t,n,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),i=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,s=a[4]||1;function c(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==o)t=n=r=u;else{var l=u<.5?u*(1+o):u+o-u*o,d=2*u-l;t=c(d,l,i+1/3),n=c(d,l,i),r=c(d,l,i-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+s+")"}(e):void 0;var t,n}function D(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function E(e,t){return l.fnc(e)?e(t.target,t.id,t.total):e}function B(e,t){return e.getAttribute(t)}function T(e,t,n){if(k([n,"deg","rad","turn"],D(t)))return t;var r=o.CSS[t+n];if(!l.und(r))return r;var a=document.createElement(e.tagName),i=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;i.appendChild(a),a.style.position="absolute",a.style.width=100+n;var u=100/a.offsetWidth;i.removeChild(a);var s=u*parseFloat(t);return o.CSS[t+n]=s,s}function S(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?T(e,a,n):a}}function L(e,t){return l.dom(e)&&!l.inp(e)&&(!l.nil(B(e,t))||l.svg(e)&&e[t])?"attribute":l.dom(e)&&k(i,t)?"transform":l.dom(e)&&"transform"!==t&&S(e,t)?"css":null!=e[t]?"object":void 0}function F(e){if(l.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;t=r.exec(n);)a.set(t[1],t[2]);return a}}function A(e,t,n,r){var a=s(t,"scale")?1:0+function(e){return s(e,"translate")||"perspective"===e?"px":s(e,"rotate")||s(e,"skew")?"deg":void 0}(t),i=F(e).get(t)||a;return n&&(n.transforms.list.set(t,i),n.transforms.last=t),r?T(e,i,r):i}function N(e,t,n,r){switch(L(e,t)){case"transform":return A(e,t,r,n);case"css":return S(e,t,n);case"attribute":return B(e,t);default:return e[t]||0}}function j(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=D(e)||0,a=parseFloat(t),i=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function W(e,t){if(l.col(e))return P(e);if(/\s/g.test(e))return e;var n=D(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function $(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function q(e){for(var t,n=e.points,r=0,a=0;a<n.numberOfItems;a++){var i=n.getItem(a);a>0&&(r+=$(t,i)),t=i}return r}function H(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*B(e,"r")}(e);case"rect":return function(e){return 2*B(e,"width")+2*B(e,"height")}(e);case"line":return function(e){return $({x:B(e,"x1"),y:B(e,"y1")},{x:B(e,"x2"),y:B(e,"y2")})}(e);case"polyline":return q(e);case"polygon":return function(e){var t=e.points;return q(e)+$(t.getItem(t.numberOfItems-1),t.getItem(0))}(e)}}function V(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;l.svg(t)&&l.svg(t.parentNode);)t=t.parentNode;return t}(e),a=r.getBoundingClientRect(),i=B(r,"viewBox"),o=a.width,u=a.height,s=n.viewBox||(i?i.split(" "):[0,0,o,u]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:o,h:u,vW:s[2],vH:s[3]}}function X(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var a=V(e.el,e.svg),i=r(),o=r(-1),u=r(1),s=n?1:a.w/a.vW,c=n?1:a.h/a.vH;switch(e.property){case"x":return(i.x-a.x)*s;case"y":return(i.y-a.y)*c;case"angle":return 180*Math.atan2(u.y-o.y,u.x-o.x)/Math.PI}}function R(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=W(l.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:l.str(e)||t?r.split(n):[]}}function z(e){return b(e?x(l.arr(e)?e.map(M):M(e)):[],(function(e,t,n){return n.indexOf(e)===t}))}function Y(e){var t=z(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:F(e)}}}))}function Z(e,t){var n=C(t);if(/^spring/.test(n.easing)&&(n.duration=f(n.easing)),l.arr(e)){var r=e.length;2===r&&!l.obj(e[0])?e={value:e}:l.fnc(t.duration)||(n.duration=t.duration/r)}var a=l.arr(e)?e:[e];return a.map((function(e,n){var r=l.obj(e)&&!l.pth(e)?e:{value:e};return l.und(r.delay)&&(r.delay=n?0:t.delay),l.und(r.endDelay)&&(r.endDelay=n===a.length-1?t.endDelay:0),r})).map((function(e){return I(e,n)}))}function G(e,t){var n=[],r=t.keyframes;for(var a in r&&(t=I(function(e){for(var t=b(x(e.map((function(e){return Object.keys(e)}))),(function(e){return l.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var a=t[r];n[a]=e.map((function(e){var t={};for(var n in e)l.key(n)?n==a&&(t.value=e[n]):t[n]=e[n];return t}))},a=0;a<t.length;a++)r(a);return n}(r),t)),t)l.key(a)&&n.push({name:a,tweens:Z(t[a],e)});return n}function Q(e,t){var n;return e.tweens.map((function(r){var a=function(e,t){var n={};for(var r in e){var a=E(e[r],t);l.arr(a)&&1===(a=a.map((function(e){return E(e,t)}))).length&&(a=a[0]),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,t),i=a.value,o=l.arr(i)?i[1]:i,u=D(o),s=N(t.target,e.name,u,t),c=n?n.to.original:s,d=l.arr(i)?i[0]:c,f=D(d)||D(s),h=u||f;return l.und(o)&&(o=c),a.from=R(d,h),a.to=R(j(o,d),h),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=y(a.easing,a.duration),a.isPath=l.pth(i),a.isPathTargetInsideSVG=a.isPath&&l.svg(t.target),a.isColor=l.col(a.from.original),a.isColor&&(a.round=1),n=a,a}))}var _={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,a){if(r.list.set(t,n),t===r.last||a){var i="";r.list.forEach((function(e,t){i+=t+"("+e+") "})),e.style.transform=i}}};function J(e,t){Y(e).forEach((function(e){for(var n in t){var r=E(t[n],e),a=e.target,i=D(r),o=N(a,n,i,e),u=j(W(r,i||D(o)),o),s=L(a,n);_[s](a,n,u,e.transforms,!0)}}))}function K(e,t){return b(x(e.map((function(e){return t.map((function(t){return function(e,t){var n=L(e.target,t.name);if(n){var r=Q(t,e),a=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(e,t)}))}))),(function(e){return!l.und(e)}))}function U(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,a.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,a.endDelay=n?a.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,a}var ee=0;var te=[],ne=function(){var e;function t(n){for(var r=te.length,a=0;a<r;){var i=te[a];i.paused?(te.splice(a,1),r--):(i.tick(n),a++)}e=a>0?requestAnimationFrame(t):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){ae.suspendWhenDocumentHidden&&(re()?e=cancelAnimationFrame(e):(te.forEach((function(e){return e._onDocumentVisibility()})),ne()))})),function(){e||re()&&ae.suspendWhenDocumentHidden||!(te.length>0)||(e=requestAnimationFrame(t))}}();function re(){return!!document&&document.hidden}function ae(e){void 0===e&&(e={});var t,n=0,i=0,o=0,s=0,c=null;function l(e){var t=window.Promise&&new Promise((function(e){return c=e}));return e.finished=t,t}var d=function(e){var t=O(r,e),n=O(a,e),i=G(n,e),o=Y(e.targets),u=K(o,i),s=U(u,n),c=ee;return ee++,I(t,{id:c,children:[],animatables:o,animations:u,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}(e);function f(){var e=d.direction;"alternate"!==e&&(d.direction="normal"!==e?"normal":"reverse"),d.reversed=!d.reversed,t.forEach((function(e){return e.reversed=d.reversed}))}function h(e){return d.reversed?d.duration-e:e}function p(){n=0,i=h(d.currentTime)*(1/ae.speed)}function v(e,t){t&&t.seek(e-t.timelineOffset)}function g(e){for(var t=0,n=d.animations,r=n.length;t<r;){var a=n[t],i=a.animatable,o=a.tweens,s=o.length-1,c=o[s];s&&(c=b(o,(function(t){return e<t.end}))[0]||c);for(var l=u(e-c.start-c.delay,0,c.duration)/c.duration,f=isNaN(l)?1:c.easing(l),h=c.to.strings,p=c.round,v=[],g=c.to.numbers.length,m=void 0,y=0;y<g;y++){var w=void 0,x=c.to.numbers[y],M=c.from.numbers[y]||0;w=c.isPath?X(c.value,f*x,c.isPathTargetInsideSVG):M+f*(x-M),p&&(c.isColor&&y>2||(w=Math.round(w*p)/p)),v.push(w)}var k=h.length;if(k){m=h[0];for(var C=0;C<k;C++){var O=h[C+1],I=v[C];isNaN(I)||(m+=O?I+O:I+" ")}}else m=v[0];_[a.type](i.target,a.property,m,i.transforms),a.currentValue=m,t++}}function m(e){d[e]&&!d.passThrough&&d[e](d)}function y(e){var r=d.duration,a=d.delay,p=r-d.endDelay,y=h(e);d.progress=u(y/r*100,0,100),d.reversePlayback=y<d.currentTime,t&&function(e){if(d.reversePlayback)for(var n=s;n--;)v(e,t[n]);else for(var r=0;r<s;r++)v(e,t[r])}(y),!d.began&&d.currentTime>0&&(d.began=!0,m("begin")),!d.loopBegan&&d.currentTime>0&&(d.loopBegan=!0,m("loopBegin")),y<=a&&0!==d.currentTime&&g(0),(y>=p&&d.currentTime!==r||!r)&&g(r),y>a&&y<p?(d.changeBegan||(d.changeBegan=!0,d.changeCompleted=!1,m("changeBegin")),m("change"),g(y)):d.changeBegan&&(d.changeCompleted=!0,d.changeBegan=!1,m("changeComplete")),d.currentTime=u(y,0,r),d.began&&m("update"),e>=r&&(i=0,d.remaining&&!0!==d.remaining&&d.remaining--,d.remaining?(n=o,m("loopComplete"),d.loopBegan=!1,"alternate"===d.direction&&f()):(d.paused=!0,d.completed||(d.completed=!0,m("loopComplete"),m("complete"),!d.passThrough&&"Promise"in window&&(c(),l(d)))))}return l(d),d.reset=function(){var e=d.direction;d.passThrough=!1,d.currentTime=0,d.progress=0,d.paused=!0,d.began=!1,d.loopBegan=!1,d.changeBegan=!1,d.completed=!1,d.changeCompleted=!1,d.reversePlayback=!1,d.reversed="reverse"===e,d.remaining=d.loop,t=d.children;for(var n=s=t.length;n--;)d.children[n].reset();(d.reversed&&!0!==d.loop||"alternate"===e&&1===d.loop)&&d.remaining++,g(d.reversed?d.duration:0)},d._onDocumentVisibility=p,d.set=function(e,t){return J(e,t),d},d.tick=function(e){o=e,n||(n=o),y((o+(i-n))*ae.speed)},d.seek=function(e){y(h(e))},d.pause=function(){d.paused=!0,p()},d.play=function(){d.paused&&(d.completed&&d.reset(),d.paused=!1,te.push(d),p(),ne())},d.reverse=function(){f(),d.completed=!d.reversed,p()},d.restart=function(){d.reset(),d.play()},d.remove=function(e){oe(z(e),d)},d.reset(),d.autoplay&&d.play(),d}function ie(e,t){for(var n=t.length;n--;)k(e,t[n].animatable.target)&&t.splice(n,1)}function oe(e,t){var n=t.animations,r=t.children;ie(e,n);for(var a=r.length;a--;){var i=r[a],o=i.animations;ie(e,o),o.length||i.children.length||r.splice(a,1)}n.length||r.length||t.pause()}ae.version="3.2.1",ae.speed=1,ae.suspendWhenDocumentHidden=!0,ae.running=te,ae.remove=function(e){for(var t=z(e),n=te.length;n--;){oe(t,te[n])}},ae.get=N,ae.set=J,ae.convertPx=T,ae.path=function(e,t){var n=l.str(e)?w(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:V(n),totalLength:H(n)*(r/100)}}},ae.setDashoffset=function(e){var t=H(e);return e.setAttribute("stroke-dasharray",t),t},ae.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?y(t.easing):null,a=t.grid,i=t.axis,o=t.from||0,u="first"===o,s="center"===o,c="last"===o,d=l.arr(e),f=d?parseFloat(e[0]):parseFloat(e),h=d?parseFloat(e[1]):0,p=D(d?e[1]:e)||0,v=t.start||0+(d?f:0),g=[],m=0;return function(e,t,l){if(u&&(o=0),s&&(o=(l-1)/2),c&&(o=l-1),!g.length){for(var y=0;y<l;y++){if(a){var w=s?(a[0]-1)/2:o%a[0],b=s?(a[1]-1)/2:Math.floor(o/a[0]),x=w-y%a[0],M=b-Math.floor(y/a[0]),k=Math.sqrt(x*x+M*M);"x"===i&&(k=-x),"y"===i&&(k=-M),g.push(k)}else g.push(Math.abs(o-y));m=Math.max.apply(Math,g)}r&&(g=g.map((function(e){return r(e/m)*m}))),"reverse"===n&&(g=g.map((function(e){return i?e<0?-1*e:-e:Math.abs(m-e)})))}return v+(d?(h-f)/m:f)*(Math.round(100*g[t])/100)+p}},ae.timeline=function(e){void 0===e&&(e={});var t=ae(e);return t.duration=0,t.add=function(n,r){var i=te.indexOf(t),o=t.children;function u(e){e.passThrough=!0}i>-1&&te.splice(i,1);for(var s=0;s<o.length;s++)u(o[s]);var c=I(n,O(a,e));c.targets=c.targets||e.targets;var d=t.duration;c.autoplay=!1,c.direction=t.direction,c.timelineOffset=l.und(r)?d:j(r,d),u(t),t.seek(c.timelineOffset);var f=ae(c);u(f),o.push(f);var h=U(o,e);return t.delay=h.delay,t.endDelay=h.endDelay,t.duration=h.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},ae.easing=y,ae.penner=m,ae.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},39935:(e,t,n)=>{n.r(t),n.d(t,{ix_drawer:()=>i});var r=n(30954),a=n(10161);const i=class{constructor(e){(0,r.r)(this,e),this.open=(0,r.c)(this,"open",7),this.drawerClose=(0,r.c)(this,"drawerClose",7),this.callback=this.clickedOutside.bind(this),this.show=!1,this.closeOnClickOutside=!0,this.fullHeight=!1,this.minWidth=16,this.maxWidth=28,this.width=this.minWidth}onShowChanged(e){this.show=void 0!==e?e:!this.show,this.toggleDrawer(this.show)}async toggleDrawer(e){return this.show=void 0!==e?e:!this.show,e?(this.open.emit(),this.slideInRight(this.divElement),setTimeout((()=>{window.addEventListener("mousedown",this.callback)}),300)):(this.drawerClose.emit(),this.slideOutRight(this.divElement),window.removeEventListener("mousedown",this.callback)),Promise.resolve()}onCloseClicked(){this.show=!1}clickedOutside(e){if(!this.closeOnClickOutside)return;const t=e.target,n=t.closest("#div-container"),r=t.closest("#drawer-btn");"button"!==e.target.type&&n!==this.divElement&&t!==r&&(this.show=!1)}slideOutRight(e){(0,a.a)({targets:e,duration:i.duration,translateX:[0,"16rem"],opacity:[1,0],easing:"easeInSine",complete:()=>{e.classList.add("d-none")}})}slideInRight(e){(0,a.a)({targets:e,duration:i.duration,translateX:["16rem",0],opacity:[0,1],easing:"easeOutSine",begin:()=>{e.classList.remove("d-none")}})}render(){return(0,r.h)("div",{class:{"drawer-container":!0,toggle:this.show,"full-height":this.fullHeight,"d-none":!0},style:{width:"auto"===this.width?this.width:`${this.width}rem`,"min-width":`${this.minWidth}rem`,"max-width":`${this.maxWidth}rem`},ref:e=>this.divElement=e,"data-testid":"container",id:"div-container"},(0,r.h)("div",{class:"header"},(0,r.h)("div",{class:"header-content"},(0,r.h)("slot",{name:"header"})),(0,r.h)("ix-icon-button",{icon:"close",size:"24",ghost:!0,onClick:()=>this.onCloseClicked(),"data-testid":"close-button"})),(0,r.h)("div",{class:"content"},(0,r.h)("slot",null)))}static get watchers(){return{show:["onShowChanged"]}}};i.duration=300,i.style=".drawer-container.sc-ix-drawer{top:0;right:0;box-shadow:var(--theme-box-shadow-level-3);visibility:hidden;display:flex;position:absolute;flex-flow:column nowrap;justify-content:flex-start;align-items:center;max-height:100vh;min-height:1.5rem;background-color:var(--theme-color-1);border-radius:0.25rem;transition:all 300ms ease-out}.toggle.sc-ix-drawer{z-index:100;visibility:visible}.drawer-container.full-height.sc-ix-drawer{min-height:100%}.header.sc-ix-drawer{display:flex;position:relative;align-items:center;justify-content:flex-end;height:3.5rem;padding:0.5rem 1rem;width:100%;order:1}.header.sc-ix-drawer .header-content.sc-ix-drawer{flex-grow:1;margin-right:1rem}.content.sc-ix-drawer{position:relative;flex:1;flex-grow:1;order:2;height:100%;width:100%;overflow-y:auto}"}}]);