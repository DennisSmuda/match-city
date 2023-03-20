(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=r(o);fetch(o.href,c)}})();var M={},se={get exports(){return M},set exports(e){M=e}},l={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=Symbol.for("react.element"),ae=Symbol.for("react.portal"),ie=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),ue=Symbol.for("react.profiler"),de=Symbol.for("react.provider"),fe=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),ye=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),x=Symbol.iterator;function he(e){return e===null||typeof e!="object"?null:(e=x&&e[x]||e["@@iterator"],typeof e=="function"?e:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,Y={};function g(e,t,r){this.props=e,this.context=t,this.refs=Y,this.updater=r||V}g.prototype.isReactComponent={};g.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function G(){}G.prototype=g.prototype;function I(e,t,r){this.props=e,this.context=t,this.refs=Y,this.updater=r||V}var L=I.prototype=new G;L.constructor=I;U(L,g.prototype);L.isPureReactComponent=!0;var j=Array.isArray,W=Object.prototype.hasOwnProperty,C={current:null},K={key:!0,ref:!0,__self:!0,__source:!0};function X(e,t,r){var n,o={},c=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(c=""+t.key),t)W.call(t,n)&&!K.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(u===1)o.children=r;else if(1<u){for(var s=Array(u),f=0;f<u;f++)s[f]=arguments[f+2];o.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps,u)o[n]===void 0&&(o[n]=u[n]);return{$$typeof:h,type:e,key:c,ref:a,props:o,_owner:C.current}}function be(e,t){return{$$typeof:h,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function P(e){return typeof e=="object"&&e!==null&&e.$$typeof===h}function Se(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var A=/\/+/g;function k(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Se(""+e.key):t.toString(36)}function E(e,t,r,n,o){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case h:case ae:a=!0}}if(a)return a=e,o=o(a),e=n===""?"."+k(a,0):n,j(o)?(r="",e!=null&&(r=e.replace(A,"$&/")+"/"),E(o,t,r,"",function(f){return f})):o!=null&&(P(o)&&(o=be(o,r+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(A,"$&/")+"/")+e)),t.push(o)),1;if(a=0,n=n===""?".":n+":",j(e))for(var u=0;u<e.length;u++){c=e[u];var s=n+k(c,u);a+=E(c,t,r,s,o)}else if(s=he(e),typeof s=="function")for(e=s.call(e),u=0;!(c=e.next()).done;)c=c.value,s=n+k(c,u++),a+=E(c,t,r,s,o);else if(c==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function v(e,t,r){if(e==null)return e;var n=[],o=0;return E(e,n,"","",function(c){return t.call(r,c,o++)}),n}function ve(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var m={current:null},w={transition:null},Ee={ReactCurrentDispatcher:m,ReactCurrentBatchConfig:w,ReactCurrentOwner:C};l.Children={map:v,forEach:function(e,t,r){v(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return v(e,function(){t++}),t},toArray:function(e){return v(e,function(t){return t})||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};l.Component=g;l.Fragment=ie;l.Profiler=ue;l.PureComponent=I;l.StrictMode=le;l.Suspense=pe;l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ee;l.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=U({},e.props),o=e.key,c=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(c=t.ref,a=C.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)W.call(t,s)&&!K.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&u!==void 0?u[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){u=Array(s);for(var f=0;f<s;f++)u[f]=arguments[f+2];n.children=u}return{$$typeof:h,type:e.type,key:o,ref:c,props:n,_owner:a}};l.createContext=function(e){return e={$$typeof:fe,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:de,_context:e},e.Consumer=e};l.createElement=X;l.createFactory=function(e){var t=X.bind(null,e);return t.type=e,t};l.createRef=function(){return{current:null}};l.forwardRef=function(e){return{$$typeof:me,render:e}};l.isValidElement=P;l.lazy=function(e){return{$$typeof:ge,_payload:{_status:-1,_result:e},_init:ve}};l.memo=function(e,t){return{$$typeof:ye,type:e,compare:t===void 0?null:t}};l.startTransition=function(e){var t=w.transition;w.transition={};try{e()}finally{w.transition=t}};l.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};l.useCallback=function(e,t){return m.current.useCallback(e,t)};l.useContext=function(e){return m.current.useContext(e)};l.useDebugValue=function(){};l.useDeferredValue=function(e){return m.current.useDeferredValue(e)};l.useEffect=function(e,t){return m.current.useEffect(e,t)};l.useId=function(){return m.current.useId()};l.useImperativeHandle=function(e,t,r){return m.current.useImperativeHandle(e,t,r)};l.useInsertionEffect=function(e,t){return m.current.useInsertionEffect(e,t)};l.useLayoutEffect=function(e,t){return m.current.useLayoutEffect(e,t)};l.useMemo=function(e,t){return m.current.useMemo(e,t)};l.useReducer=function(e,t,r){return m.current.useReducer(e,t,r)};l.useRef=function(e){return m.current.useRef(e)};l.useState=function(e){return m.current.useState(e)};l.useSyncExternalStore=function(e,t,r){return m.current.useSyncExternalStore(e,t,r)};l.useTransition=function(){return m.current.useTransition()};l.version="18.2.0";(function(e){e.exports=l})(se);function H(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function we(e,t){if(e){if(typeof e=="string")return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return H(e,t)}}function $e(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=we(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(s){throw s},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c=!0,a=!1,u;return{s:function(){r=r.call(e)},n:function(){var s=r.next();return c=s.done,s},e:function(s){a=!0,u=s},f:function(){try{!c&&r.return!=null&&r.return()}finally{if(a)throw u}}}}function Te(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?R(Object(r),!0).forEach(function(n){Te(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var ke=function(t){var r=t,n=new Set,o=function(a){return Object.keys(a).reduce(function(u,s){return a[s]!==r[s]&&(u[s]=a[s]),u},{})};return{get state(){return r},set:function(a){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=u.forceNotify,f=s===void 0?!1:s,b=a instanceof Function?a(r):a,T=f?b:o(b);if(Object.keys(T).length>0){var ne=r;r=q(q({},r),T);var S=$e(n),O;try{for(S.s();!(O=S.n()).done;){var oe=O.value;oe(T,ne)}}catch(ce){S.e(ce)}finally{S.f()}}return r},subscribe:function(a){n.add(a)},unsubscribe:function(a){n.delete(a)}}};const i=ke({score:0,grid:{},matches:{},mouse:{x:0,y:0},currentTheme:"black",tutorialStep:0,isAudioEnabled:!0}),B=["primary","secondary","tertiary"],J=()=>B[Math.floor(Math.random()*B.length)],Ie=()=>{let e=null;for(;!e;){let t=Math.floor(Math.random()*5),r=Math.floor(Math.random()*5);i.state.grid[`${t}:${r}`]||(e={x:t,y:r})}return{x:e.x,y:e.y}},Le=e=>{switch(e){case 2:return"double";case 3:return"triple";case 4:return"quadruple";case 5:return"quintuple";default:return""}},$=async e=>{await new Promise(t=>setTimeout(t,e))},Ce=e=>{i.set(()=>({mouse:{x:e.pageX,y:e.pageY}}))},Q=async(e,t)=>{for(let r=0;r<5;r++)document.querySelector(`[data-grid-pos="${r}:${t}"]`).classList.add("active");for(let r=0;r<5;r++)document.querySelector(`[data-grid-pos="${e}:${r}"]`).classList.add("active");await $(300);for(let r=0;r<5;r++)document.querySelector(`[data-grid-pos="${r}:${t}"]`).classList.remove("active");for(let r=0;r<5;r++)document.querySelector(`[data-grid-pos="${e}:${r}"]`).classList.remove("active")},Pe=async e=>{const t=document.getElementById("score"),r=document.createElement("div");r.classList.add("floating-text","score"),r.innerHTML=`+${e.toString()}`,t==null||t.appendChild(r),await r.animate([{transform:"translateY(0)"},{transform:"translateY(-1rem)",opacity:0}],1e3).finished,r.remove()},_=async(e,t="white")=>{const r=document.createElement("div");r.classList.add("floating-text",t),r.innerHTML=e,r.style.left=`${i.state.mouse.x}px`,r.style.top=`calc(${i.state.mouse.y}px - 2rem)`,r.style.textAlign="center",document.body.appendChild(r),await r.animate([{transform:"translateY(0)"},{transform:"translateY(-2rem)",opacity:0}],1250).finished,r.remove()},d={keyframesIn:[{scale:.8},{scale:1.1},{scale:1}],keyframesSpawn:[{scale:.8,transform:"translateY(-4rem)"},{scale:1.1},{scale:1,transform:"translateY(-0rem)"}],keyframesOut:[{scale:1},{scale:1.1},{scale:.2}],keyframesDisappear:[{scale:1,opacity:1},{scale:.2,opacity:0}],timing:{easing:"cubic-bezier(0.42, 0, 0.58, 1)",duration:130},timingShort:{easing:"cubic-bezier(0.42, 0, 0.58, 1)",duration:80},timingLong:{easing:"cubic-bezier(0.42, 0, 0.58, 1)",duration:240}},_e=async()=>{const e=document.getElementById("next-tile-container"),t=document.createElement("div");t.classList.add("tile","next");let r=J();i.state.tutorialStep<=2?r="primary":i.state.tutorialStep===3&&(r="secondary"),t.setAttribute("data-type",r),t.innerHTML="1",e==null||e.appendChild(t),await t.animate(d.keyframesSpawn,d.timing).finished},Oe=async()=>{const e=document.createElement("div");e.classList.add("tile"),e.setAttribute("data-type",J()),e.innerHTML="1";const{x:t,y:r}=Ie();await Q(t,r);const n=document.querySelector(`[data-grid-pos="${t}:${r}"]`);return i.state.grid[`${t}:${r}`]=e.getAttribute("data-type"),n==null||n.appendChild(e),await e.animate(d.keyframesIn,d.timing).finished,{x:t,y:r}},y=async(e,t,r)=>{const n=document.createElement("div");n.classList.add("tile"),n.setAttribute("data-type",e),n.innerHTML="1";const o=document.querySelector(`[data-grid-pos="${t}:${r}"]`);i.state.grid[`${t}:${r}`]=n.getAttribute("data-type"),o==null||o.appendChild(n),await n.animate(d.keyframesIn,d.timing).finished},Me=async(e,t,r)=>{const n=document.querySelectorAll(".tile.next")[0];n.animate(d.keyframesOut,d.timing).finished,e.appendChild(n),i.state.grid[`${t}:${r}`]=n.getAttribute("data-type"),n.classList.remove("next"),await n.animate(d.keyframesIn,d.timing).finished},Z=async()=>{var r;je();const e=document.getElementById("game-over"),t=document.getElementById("final-score");t.innerHTML=i.state.score.toString(),e.style.visibility="visible",e.style.pointerEvents="auto",e.style.opacity="1",await(e==null?void 0:e.animate(d.keyframesIn,d.timingShort).finished),(r=document.getElementById("restart-game-button"))==null||r.addEventListener("click",xe)},xe=async()=>{const e=document.getElementById("game-over");document.querySelectorAll(".tile:not(.next)").forEach(async n=>{n.innerHTML="",await(n==null?void 0:n.animate(d.keyframesDisappear,{duration:0}).finished),n==null||n.remove()}),await(e==null?void 0:e.animate(d.keyframesDisappear,d.timingShort).finished),e.style.opacity="0",e.style.pointerEvents="none",i.set(()=>({score:0,grid:{}}));const r=document.getElementById("score");r.innerHTML=i.state.score.toString()},je=()=>{const e=parseInt(localStorage.getItem("pb-score")||"0"),t=i.state.score,r=document.querySelector("#new-best-score"),n=document.querySelector("#old-best-score");if(t>e){const o=document.querySelector("#new-best-score span");r.style.display="inline-block",n.style.display="none",localStorage.setItem("pb-score",`${t}`),o.innerHTML=` (previously ${e})`}else{const o=document.querySelector("#old-best-score .score");n.style.display="inline-block",r.style.display="none",o.innerHTML=`${e}`}},z=async(e,t)=>{const r=i.state.grid[`${e}:${t}`],n=document.querySelector(`[data-grid-pos="${e}:${t}"] > .tile`);let o=0;for(let c=e-1;c>=e-4&&i.state.grid[`${c}:${t}`]===r;c--)i.state.matches[`${c}:${t}`]=!0,o++;for(let c=e+1;c<=e+4&&i.state.grid[`${c}:${t}`]===r;c++)i.state.matches[`${c}:${t}`]=!0,o++;for(let c=t+1;c<=t+4&&i.state.grid[`${e}:${c}`]===r;c++)i.state.matches[`${e}:${c}`]=!0,o++;for(let c=t-1;c>=t-4&&i.state.grid[`${e}:${c}`]===r;c--)i.state.matches[`${e}:${c}`]=!0,o++;if(o>=2){const c=document.getElementById("score");i.set(u=>({score:u.score+parseInt(n.innerHTML)}));let a=1;for(const u in i.state.matches)if(Object.prototype.hasOwnProperty.call(i.state.matches,u)){const s=document.querySelector(`[data-grid-pos="${u}"] > .tile`);a+=parseInt(s.innerHTML);const f=parseInt(s.innerHTML)+parseInt(n.innerHTML);n.innerHTML=f.toString(),i.set(b=>({score:b.score+parseInt(s.innerHTML)})),c.innerHTML=i.state.score.toString(),s==null||s.animate(d.keyframesOut,d.timingShort).finished,await(n==null?void 0:n.animate(d.keyframesIn,d.timingShort).finished),s==null||s.remove(),delete i.state.matches[u],delete i.state.grid[u]}_(`${Le(o)} match`),c.innerHTML=i.state.score.toString(),Pe(a)}i.set(()=>({matches:{}}))},ee={black:{"--bg-color":"#181818","--cell-bg-color":"#222222","--text-color":"#ffffff","--score-color":"#fbbf24","--primary-color":"#e11d48","--primary-border-color":"#881337","--secondary-color":"#2563eb","--secondary-border-color":"#1e3a8a","--tertiary-color":"#16a34a","--tertiary-border-color":"#14532d"},white:{"--bg-color":"#ffffff","--cell-bg-color":"#DFDFDF88","--text-color":"#181818","--score-color":"#fbbf24","--primary-color":"#F87171","--primary-border-color":"#B91C1C","--secondary-color":"#38BDF8","--secondary-border-color":"#0369A1","--tertiary-color":"#4ADE80","--tertiary-border-color":"#16A34A"},fancade:{"--bg-color":"#1c1c28","--cell-bg-color":"#3d3d5244","--text-color":"#ffeaea","--score-color":"yellow","--primary-color":"#ff4a68","--primary-border-color":"#bb3049","--secondary-color":"#008fff","--secondary-border-color":"#0066db","--tertiary-color":"#3bbf46","--tertiary-border-color":"#008648"},bubblegum:{"--bg-color":"#ff80a4","--cell-bg-color":"#ff267444","--text-color":"#fafdff","--score-color":"#ffd100","--primary-color":"#ff2674","--primary-border-color":"#94216a","--secondary-color":"#68aed4","--secondary-border-color":"#007899","--tertiary-color":"#10d275","--tertiary-border-color":"#0a8f4e"}},te=e=>{localStorage.setItem("color-theme",e);for(const[t,r]of Object.entries(ee[e]))document.documentElement.style.setProperty(t,r)},Ae=()=>{ze(),Be(),qe(),He(),Re(),De()},He=()=>{const e=document.getElementById("toggle-settings-button"),t=document.getElementById("settings");e==null||e.addEventListener("click",()=>{t==null||t.classList.toggle("active")})},Re=()=>{const e=document.getElementById("toggle-gap-size-button");e==null||e.addEventListener("click",()=>{const t=getComputedStyle(document.documentElement).getPropertyValue("--cell-gap").trim();t==="0.5rem"?(document.documentElement.style.setProperty("--cell-gap","0.125rem"),localStorage.setItem("--cell-gap","0.125rem")):t==="0.125rem"?(document.documentElement.style.setProperty("--cell-gap","0.25rem"),localStorage.setItem("--cell-gap","0.25rem")):(document.documentElement.style.setProperty("--cell-gap","0.5rem"),localStorage.setItem("--cell-gap","0.5rem"))})},qe=()=>{const e=document.getElementById("toggle-tile-size-button");e==null||e.addEventListener("click",()=>{getComputedStyle(document.documentElement).getPropertyValue("--tile-size").trim()==="4rem"?(document.documentElement.style.setProperty("--tile-size","3rem"),localStorage.setItem("--tile-size","3rem")):(document.documentElement.style.setProperty("--tile-size","4rem"),localStorage.setItem("--tile-size","4rem"))})},Be=()=>{const e=document.getElementById("toggle-border-radius-button");e==null||e.addEventListener("click",()=>{const t=getComputedStyle(document.documentElement).getPropertyValue("--cell-border-radius").trim();t==="0.75rem"?(document.documentElement.style.setProperty("--cell-border-radius","0px"),document.documentElement.style.setProperty("--tile-border-radius","0px"),localStorage.setItem("--cell-border-radius","0px")):t==="0px"?(localStorage.setItem("--cell-border-radius","100%"),document.documentElement.style.setProperty("--cell-border-radius","100%"),document.documentElement.style.setProperty("--tile-border-radius","100%")):(localStorage.setItem("--cell-border-radius","0.75rem"),document.documentElement.style.setProperty("--cell-border-radius","0.75rem"),document.documentElement.style.setProperty("--tile-border-radius","0.5rem"))})},ze=()=>{const e=document.getElementById("toggle-borders-button");e==null||e.addEventListener("click",()=>{getComputedStyle(document.documentElement).getPropertyValue("--cell-border-width").trim()==="4px"?(document.documentElement.style.setProperty("--cell-border-width","0px"),localStorage.setItem("--cell-border-width","0px")):(document.documentElement.style.setProperty("--cell-border-width","4px"),localStorage.setItem("--cell-border-width","4px"))})},De=()=>{const e=document.getElementById("theme-switcher");for(const[t,r]of Object.entries(ee)){const n=document.createElement("button");n.classList.add("theme-button"),n.innerHTML=`<span class="sr-only">${t}</span>`,e==null||e.appendChild(n),n.style.backgroundColor=r["--bg-color"],n.style.borderColor=r["--text-color"],n.addEventListener("click",()=>{te(t)})}},Fe=()=>{const e=localStorage.getItem("color-theme")||"black";te(e);const t=localStorage.getItem("--cell-gap")||"0.5rem";document.documentElement.style.setProperty("--cell-gap",t);const r=localStorage.getItem("--cell-border-width")||"4px ";document.documentElement.style.setProperty("--cell-border-width",r);const n=localStorage.getItem("--cell-border-radius")||"0.5rem";document.documentElement.style.setProperty("--cell-border-radius",n),n==="0.75rem"?document.documentElement.style.setProperty("--tile-border-radius","0.5rem"):document.documentElement.style.setProperty("--tile-border-radius",n);const o=localStorage.getItem("--tile-size")||"3rem";document.documentElement.style.setProperty("--tile-size",o)},re=5,D=document.querySelector('[data-grid-pos="2:2"]'),F=document.querySelector('[data-grid-pos="2:1"]'),p=document.getElementById("game-message"),Ne=async()=>{p.innerHTML="Welcome to Match City!",await $(2500),i.state.tutorialStep===0&&(p.innerHTML="Click to advance")},N=async()=>{D.classList.remove("highlight");const e=i.state.tutorialStep;e===1?(y("primary",2,1),y("primary",2,3),y("primary",1,1),p.innerHTML="Place your first tile on the highlighted area!",D.classList.add("highlight")):e===2?(p.innerHTML="Nice! Try another one!",y("primary",2,0),y("primary",2,3),y("primary",2,4),F.classList.add("highlight")):e===3?(F.classList.remove("highlight"),p.innerHTML="There are more colors now?!"):e===4?p.innerHTML="Also, after each turn, a random tile gets placed":e===5&&(p.innerHTML="Good luck, have fun!",localStorage.setItem("has-finished-tutorial","true"),await $(2500),p.style.opacity="0"),i.set(t=>({tutorialStep:t.tutorialStep+1}))},Ve=()=>{document.querySelectorAll(".cell:not(.demo)").forEach(t=>{const r=t.getAttribute("data-grid-pos")||"0:0",[n,o]=r.split(":");t.addEventListener("click",Ue.bind(null,t,parseInt(n),parseInt(o)))})},Ue=async(e,t,r)=>{if(!i.state.grid[`${t}:${r}`]){if(Q(t,r),i.state.tutorialStep===0){i.set(()=>({tutorialStep:1})),N();return}else if(i.state.tutorialStep===2||i.state.tutorialStep===3){const n=document.querySelector(`[data-grid-pos="${t}:${r}"]`);if(!(n!=null&&n.classList.contains("highlight"))){_("place on highlighted tile!","yellow");return}}if(await Me(e,t,r),await z(t,r),await $(350),Object.keys(i.state.grid).length<=23&&!(i.state.tutorialStep<=3)){const{x:n,y:o}=await Oe();await z(n,o)}await _e(),i.state.tutorialStep<=re&&N(),Object.keys(i.state.grid).length>=25&&Z()}};document.onmousemove=Ce;document.body.onkeyup=function(e){(e.key=="z"||e.code=="z")&&_("hadsjklf"),(e.key=="r"||e.code=="r")&&Z()};Fe();Ve();Ae();const Ye=localStorage.getItem("has-finished-tutorial");Ye?i.set(()=>({tutorialStep:re+1})):Ne();
