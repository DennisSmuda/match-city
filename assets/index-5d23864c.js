(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=r(o);fetch(o.href,c)}})();var _={},Q={get exports(){return _},set exports(e){_=e}},a={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=Symbol.for("react.element"),Z=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),te=Symbol.for("react.strict_mode"),re=Symbol.for("react.profiler"),ne=Symbol.for("react.provider"),oe=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),le=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),P=Symbol.iterator;function ie(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,z={};function p(e,t,r){this.props=e,this.context=t,this.refs=z,this.updater=r||B}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function H(){}H.prototype=p.prototype;function $(e,t,r){this.props=e,this.context=t,this.refs=z,this.updater=r||B}var k=$.prototype=new H;k.constructor=$;q(k,p.prototype);k.isPureReactComponent=!0;var O=Array.isArray,D=Object.prototype.hasOwnProperty,I={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function F(e,t,r){var n,o={},c=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(c=""+t.key),t)D.call(t,n)&&!N.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(i===1)o.children=r;else if(1<i){for(var s=Array(i),f=0;f<i;f++)s[f]=arguments[f+2];o.children=s}if(e&&e.defaultProps)for(n in i=e.defaultProps,i)o[n]===void 0&&(o[n]=i[n]);return{$$typeof:y,type:e,key:c,ref:l,props:o,_owner:I.current}}function ue(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function T(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function de(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var L=/\/+/g;function w(e,t){return typeof e=="object"&&e!==null&&e.key!=null?de(""+e.key):t.toString(36)}function v(e,t,r,n,o){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case y:case Z:l=!0}}if(l)return l=e,o=o(l),e=n===""?"."+w(l,0):n,O(o)?(r="",e!=null&&(r=e.replace(L,"$&/")+"/"),v(o,t,r,"",function(f){return f})):o!=null&&(T(o)&&(o=ue(o,r+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(L,"$&/")+"/")+e)),t.push(o)),1;if(l=0,n=n===""?".":n+":",O(e))for(var i=0;i<e.length;i++){c=e[i];var s=n+w(c,i);l+=v(c,t,r,s,o)}else if(s=ie(e),typeof s=="function")for(e=s.call(e),i=0;!(c=e.next()).done;)c=c.value,s=n+w(c,i++),l+=v(c,t,r,s,o);else if(c==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function b(e,t,r){if(e==null)return e;var n=[],o=0;return v(e,n,"","",function(c){return t.call(r,c,o++)}),n}function fe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var m={current:null},S={transition:null},me={ReactCurrentDispatcher:m,ReactCurrentBatchConfig:S,ReactCurrentOwner:I};a.Children={map:b,forEach:function(e,t,r){b(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return b(e,function(){t++}),t},toArray:function(e){return b(e,function(t){return t})||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};a.Component=p;a.Fragment=ee;a.Profiler=re;a.PureComponent=$;a.StrictMode=te;a.Suspense=se;a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me;a.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=q({},e.props),o=e.key,c=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(c=t.ref,l=I.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)D.call(t,s)&&!N.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&i!==void 0?i[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){i=Array(s);for(var f=0;f<s;f++)i[f]=arguments[f+2];n.children=i}return{$$typeof:y,type:e.type,key:o,ref:c,props:n,_owner:l}};a.createContext=function(e){return e={$$typeof:oe,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ne,_context:e},e.Consumer=e};a.createElement=F;a.createFactory=function(e){var t=F.bind(null,e);return t.type=e,t};a.createRef=function(){return{current:null}};a.forwardRef=function(e){return{$$typeof:ce,render:e}};a.isValidElement=T;a.lazy=function(e){return{$$typeof:ae,_payload:{_status:-1,_result:e},_init:fe}};a.memo=function(e,t){return{$$typeof:le,type:e,compare:t===void 0?null:t}};a.startTransition=function(e){var t=S.transition;S.transition={};try{e()}finally{S.transition=t}};a.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};a.useCallback=function(e,t){return m.current.useCallback(e,t)};a.useContext=function(e){return m.current.useContext(e)};a.useDebugValue=function(){};a.useDeferredValue=function(e){return m.current.useDeferredValue(e)};a.useEffect=function(e,t){return m.current.useEffect(e,t)};a.useId=function(){return m.current.useId()};a.useImperativeHandle=function(e,t,r){return m.current.useImperativeHandle(e,t,r)};a.useInsertionEffect=function(e,t){return m.current.useInsertionEffect(e,t)};a.useLayoutEffect=function(e,t){return m.current.useLayoutEffect(e,t)};a.useMemo=function(e,t){return m.current.useMemo(e,t)};a.useReducer=function(e,t,r){return m.current.useReducer(e,t,r)};a.useRef=function(e){return m.current.useRef(e)};a.useState=function(e){return m.current.useState(e)};a.useSyncExternalStore=function(e,t,r){return m.current.useSyncExternalStore(e,t,r)};a.useTransition=function(){return m.current.useTransition()};a.version="18.2.0";(function(e){e.exports=a})(Q);function x(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function pe(e,t){if(e){if(typeof e=="string")return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,t)}}function ye(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=pe(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(s){throw s},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c=!0,l=!1,i;return{s:function(){r=r.call(e)},n:function(){var s=r.next();return c=s.done,s},e:function(s){l=!0,i=s},f:function(){try{!c&&r.return!=null&&r.return()}finally{if(l)throw i}}}}function ge(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?M(Object(r),!0).forEach(function(n){ge(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var he=function(t){var r=t,n=new Set,o=function(l){return Object.keys(l).reduce(function(i,s){return l[s]!==r[s]&&(i[s]=l[s]),i},{})};return{get state(){return r},set:function(l){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.forceNotify,f=s===void 0?!1:s,g=l instanceof Function?l(r):l,E=f?g:o(g);if(Object.keys(E).length>0){var K=r;r=j(j({},r),E);var h=ye(n),C;try{for(h.s();!(C=h.n()).done;){var X=C.value;X(E,K)}}catch(J){h.e(J)}finally{h.f()}}return r},subscribe:function(l){n.add(l)},unsubscribe:function(l){n.delete(l)}}};const u=he({score:0,grid:{},matches:{},mouse:{x:0,y:0},currentTheme:"black"}),be=e=>{u.set(()=>({mouse:{x:e.pageX,y:e.pageY}}))},ve=(e,t)=>{for(let r=0;r<5;r++)document.querySelector(`[data-grid-pos="${r}:${t}"]`).classList.add("active");for(let r=0;r<5;r++)document.querySelector(`[data-grid-pos="${e}:${r}"]`).classList.add("active")},Se=(e,t)=>{for(let r=0;r<5;r++)document.querySelector(`[data-grid-pos="${r}:${t}"]`).classList.remove("active");for(let r=0;r<5;r++)document.querySelector(`[data-grid-pos="${e}:${r}"]`).classList.remove("active")},Ee=async e=>{const t=document.getElementById("score"),r=document.createElement("div");r.classList.add("floating-text","score"),r.innerHTML=`+${e.toString()}`,t==null||t.appendChild(r),await r.animate([{transform:"translateY(0)"},{transform:"translateY(-1rem)",opacity:0}],1e3).finished,r.remove()},V=async(e,t="white")=>{const r=document.createElement("div");r.classList.add("floating-text",t),r.innerHTML=e,r.style.left=`${u.state.mouse.x}px`,r.style.top=`calc(${u.state.mouse.y}px - 2rem)`,r.style.textAlign="center",document.body.appendChild(r),await r.animate([{transform:"translateY(0)"},{transform:"translateY(-2rem)",opacity:0}],1250).finished,r.remove()},d={keyframesIn:[{scale:.8},{scale:1.1},{scale:1}],keyframesSpawn:[{scale:.8,transform:"translateY(-4rem)"},{scale:1.1},{scale:1,transform:"translateY(-0rem)"}],keyframesOut:[{scale:1},{scale:1.1},{scale:.2}],keyframesDisappear:[{scale:1,opacity:1},{scale:.2,opacity:0}],timing:{easing:"cubic-bezier(0.42, 0, 0.58, 1)",duration:130},timingShort:{easing:"cubic-bezier(0.42, 0, 0.58, 1)",duration:80},timingLong:{easing:"cubic-bezier(0.42, 0, 0.58, 1)",duration:240}},A=["primary","secondary","tertiary"],Y=()=>A[Math.floor(Math.random()*A.length)],we=()=>{let e=null;for(;!e;){let t=Math.floor(Math.random()*5),r=Math.floor(Math.random()*5);u.state.grid[`${t}:${r}`]||(e={x:t,y:r})}return{x:e.x,y:e.y}},$e=e=>{switch(e){case 2:return"double";case 3:return"triple";case 4:return"quadruple";case 5:return"quintuple";default:return""}},ke=async()=>{const e=document.getElementById("next-tile-container"),t=document.createElement("div");t.classList.add("tile","next"),t.setAttribute("data-type",Y()),t.innerHTML="1",e==null||e.appendChild(t),await t.animate(d.keyframesSpawn,d.timing).finished},Ie=async()=>{const e=document.createElement("div");e.classList.add("tile"),e.setAttribute("data-type",Y()),e.innerHTML="1";const{x:t,y:r}=we(),n=document.querySelector(`[data-grid-pos="${t}:${r}"]`);return u.state.grid[`${t}:${r}`]=e.getAttribute("data-type"),n==null||n.appendChild(e),await e.animate(d.keyframesIn,d.timing).finished,{x:t,y:r}},Te=async(e,t,r)=>{const n=document.querySelectorAll(".tile.next")[0];n.animate(d.keyframesOut,d.timing).finished,e.appendChild(n),u.state.grid[`${t}:${r}`]=n.getAttribute("data-type"),n.classList.remove("next"),await n.animate(d.keyframesIn,d.timing).finished},U=async()=>{var r;_e();const e=document.getElementById("game-over"),t=document.getElementById("final-score");t.innerHTML=u.state.score.toString(),e.style.visibility="visible",e.style.pointerEvents="auto",e.style.opacity="1",await(e==null?void 0:e.animate(d.keyframesIn,d.timingShort).finished),(r=document.getElementById("restart-game-button"))==null||r.addEventListener("click",Ce)},Ce=async()=>{const e=document.getElementById("game-over");document.querySelectorAll(".tile:not(.next)").forEach(async n=>{n.innerHTML="",await(n==null?void 0:n.animate(d.keyframesDisappear,{duration:0}).finished),n==null||n.remove()}),await(e==null?void 0:e.animate(d.keyframesDisappear,d.timingShort).finished),e.style.opacity="0",e.style.pointerEvents="none",u.set(()=>({score:0,grid:{}}));const r=document.getElementById("score");r.innerHTML=u.state.score.toString()},_e=()=>{const e=parseInt(localStorage.getItem("pb-score")||"0"),t=u.state.score,r=document.querySelector("#new-best-score"),n=document.querySelector("#old-best-score"),o=document.querySelector("#old-best-score .score");t>e?(console.log("New Personal Best!"),r.style.display="inline-block",n.style.display="none",localStorage.setItem("pb-score",`${t}`)):(console.log("You were better before",e,t),n.style.display="inline-block",r.style.display="none",o.innerHTML=`${e}`)},R=async(e,t)=>{const r=u.state.grid[`${e}:${t}`],n=document.querySelector(`[data-grid-pos="${e}:${t}"] > .tile`);let o=0;for(let c=e-1;c>=e-4&&u.state.grid[`${c}:${t}`]===r;c--)u.state.matches[`${c}:${t}`]=!0,o++;for(let c=e+1;c<=e+4&&u.state.grid[`${c}:${t}`]===r;c++)u.state.matches[`${c}:${t}`]=!0,o++;for(let c=t+1;c<=t+4&&u.state.grid[`${e}:${c}`]===r;c++)u.state.matches[`${e}:${c}`]=!0,o++;for(let c=t-1;c>=t-4&&u.state.grid[`${e}:${c}`]===r;c--)u.state.matches[`${e}:${c}`]=!0,o++;if(o>=2){const c=document.getElementById("score");u.set(i=>({score:i.score+parseInt(n.innerHTML)}));let l=1;for(const i in u.state.matches)if(Object.prototype.hasOwnProperty.call(u.state.matches,i)){const s=document.querySelector(`[data-grid-pos="${i}"] > .tile`);l+=parseInt(s.innerHTML);const f=parseInt(s.innerHTML)+parseInt(n.innerHTML);n.innerHTML=f.toString(),u.set(g=>({score:g.score+parseInt(s.innerHTML)})),c.innerHTML=u.state.score.toString(),s==null||s.animate(d.keyframesOut,d.timingShort).finished,await(n==null?void 0:n.animate(d.keyframesIn,d.timingShort).finished),s==null||s.remove(),delete u.state.matches[i],delete u.state.grid[i]}V(`${$e(o)} match`),c.innerHTML=u.state.score.toString(),Ee(l)}u.set(()=>({matches:{}}))},G={black:{"--bg-color":"#181818","--cell-bg-color":"#22222288","--text-color":"#ffffff","--score-color":"#fbbf24","--primary-color":"#e11d48","--primary-border-color":"#881337","--secondary-color":"#2563eb","--secondary-border-color":"#1e3a8a","--tertiary-color":"#16a34a","--tertiary-border-color":"#14532d"},white:{"--bg-color":"#ffffff","--cell-bg-color":"#DFDFDF88","--text-color":"#181818","--score-color":"#fbbf24","--primary-color":"#F87171","--primary-border-color":"#B91C1C","--secondary-color":"#38BDF8","--secondary-border-color":"#0369A1","--tertiary-color":"#4ADE80","--tertiary-border-color":"#16A34A"},fancade:{"--bg-color":"#1c1c28","--cell-bg-color":"#3d3d5244","--text-color":"#ffeaea","--score-color":"yellow","--primary-color":"#ff4a68","--primary-border-color":"#bb3049","--secondary-color":"#008fff","--secondary-border-color":"#0066db","--tertiary-color":"#3bbf46","--tertiary-border-color":"#008648"},bubblegum:{"--bg-color":"#ff80a4","--cell-bg-color":"#ff267444","--text-color":"#fafdff","--score-color":"#ffd100","--primary-color":"#ff2674","--primary-border-color":"#94216a","--secondary-color":"#68aed4","--secondary-border-color":"#007899","--tertiary-color":"#10d275","--tertiary-border-color":"#0a8f4e"}},W=e=>{localStorage.setItem("color-theme",e);for(const[t,r]of Object.entries(G[e]))document.documentElement.style.setProperty(t,r)},Pe=()=>{je(),Me(),xe(),Oe(),Le(),Ae()},Oe=()=>{const e=document.getElementById("toggle-settings-button"),t=document.getElementById("theme-settings");e==null||e.addEventListener("click",()=>{t==null||t.classList.toggle("active")})},Le=()=>{const e=document.getElementById("toggle-gap-size-button");e==null||e.addEventListener("click",()=>{const t=getComputedStyle(document.documentElement).getPropertyValue("--cell-gap").trim();t==="0.5rem"?(document.documentElement.style.setProperty("--cell-gap","0.125rem"),localStorage.setItem("--cell-gap","0.125rem")):t==="0.125rem"?(document.documentElement.style.setProperty("--cell-gap","0.25rem"),localStorage.setItem("--cell-gap","0.25rem")):(document.documentElement.style.setProperty("--cell-gap","0.5rem"),localStorage.setItem("--cell-gap","0.5rem"))})},xe=()=>{const e=document.getElementById("toggle-tile-size-button");e==null||e.addEventListener("click",()=>{getComputedStyle(document.documentElement).getPropertyValue("--tile-size").trim()==="4rem"?(document.documentElement.style.setProperty("--tile-size","3rem"),localStorage.setItem("--tile-size","3rem")):(document.documentElement.style.setProperty("--tile-size","4rem"),localStorage.setItem("--tile-size","4rem"))})},Me=()=>{const e=document.getElementById("toggle-border-radius-button");e==null||e.addEventListener("click",()=>{const t=getComputedStyle(document.documentElement).getPropertyValue("--cell-border-radius").trim();t==="0.75rem"?(document.documentElement.style.setProperty("--cell-border-radius","0px"),document.documentElement.style.setProperty("--tile-border-radius","0px"),localStorage.setItem("--cell-border-radius","0px")):t==="0px"?(localStorage.setItem("--cell-border-radius","100%"),document.documentElement.style.setProperty("--cell-border-radius","100%"),document.documentElement.style.setProperty("--tile-border-radius","100%")):(localStorage.setItem("--cell-border-radius","0.75rem"),document.documentElement.style.setProperty("--cell-border-radius","0.75rem"),document.documentElement.style.setProperty("--tile-border-radius","0.5rem"))})},je=()=>{const e=document.getElementById("toggle-borders-button");e==null||e.addEventListener("click",()=>{getComputedStyle(document.documentElement).getPropertyValue("--cell-border-width").trim()==="4px"?(document.documentElement.style.setProperty("--cell-border-width","0px"),localStorage.setItem("--cell-border-width","0px")):(document.documentElement.style.setProperty("--cell-border-width","4px"),localStorage.setItem("--cell-border-width","4px"))})},Ae=()=>{const e=document.getElementById("theme-switcher");for(const[t,r]of Object.entries(G)){const n=document.createElement("button");n.classList.add("theme-button"),n.innerHTML=`<span class="sr-only">${t}</span>`,e==null||e.appendChild(n),n.style.backgroundColor=r["--bg-color"],n.style.borderColor=r["--text-color"],n.addEventListener("click",()=>{W(t)})}},Re=()=>{const e=localStorage.getItem("color-theme")||"black";W(e);const t=localStorage.getItem("--cell-gap")||"0.5rem";document.documentElement.style.setProperty("--cell-gap",t);const r=localStorage.getItem("--cell-border-width")||"4px ";document.documentElement.style.setProperty("--cell-border-width",r);const n=localStorage.getItem("--cell-border-radius")||"0.5rem";document.documentElement.style.setProperty("--cell-border-radius",n);const o=localStorage.getItem("--tile-size")||"3rem";document.documentElement.style.setProperty("--tile-size",o)},Be=()=>{document.querySelectorAll(".cell").forEach(t=>{const r=t.getAttribute("data-grid-pos")||"0:0",[n,o]=r.split(":");t.addEventListener("click",qe.bind(null,t,parseInt(n),parseInt(o))),t.addEventListener("mouseenter",ve.bind(null,parseInt(n),parseInt(o))),t.addEventListener("mouseleave",Se.bind(null,parseInt(n),parseInt(o)))})},qe=async(e,t,r)=>{if(!u.state.grid[`${t}:${r}`]){if(await Te(e,t,r),await R(t,r),Object.keys(u.state.grid).length<=23){const{x:n,y:o}=await Ie();await R(n,o)}await ke(),Object.keys(u.state.grid).length>=25&&U()}};document.onmousemove=be;document.body.onkeyup=function(e){(e.key=="z"||e.code=="z")&&V("hadsjklf"),(e.key=="r"||e.code=="r")&&U()};Re();Be();Pe();
