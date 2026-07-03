(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function mv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Op={exports:{}},bl={},Dp={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var As=Symbol.for("react.element"),gv=Symbol.for("react.portal"),yv=Symbol.for("react.fragment"),_v=Symbol.for("react.strict_mode"),vv=Symbol.for("react.profiler"),wv=Symbol.for("react.provider"),xv=Symbol.for("react.context"),Ev=Symbol.for("react.forward_ref"),Cv=Symbol.for("react.suspense"),kv=Symbol.for("react.memo"),Sv=Symbol.for("react.lazy"),ah=Symbol.iterator;function Iv(t){return t===null||typeof t!="object"?null:(t=ah&&t[ah]||t["@@iterator"],typeof t=="function"?t:null)}var Lp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mp=Object.assign,jp={};function fi(t,e,n){this.props=t,this.context=e,this.refs=jp,this.updater=n||Lp}fi.prototype.isReactComponent={};fi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fp(){}Fp.prototype=fi.prototype;function gu(t,e,n){this.props=t,this.context=e,this.refs=jp,this.updater=n||Lp}var yu=gu.prototype=new Fp;yu.constructor=gu;Mp(yu,fi.prototype);yu.isPureReactComponent=!0;var ch=Array.isArray,zp=Object.prototype.hasOwnProperty,_u={current:null},Up={key:!0,ref:!0,__self:!0,__source:!0};function Wp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)zp.call(e,r)&&!Up.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:As,type:t,key:s,ref:o,props:i,_owner:_u.current}}function Tv(t,e){return{$$typeof:As,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vu(t){return typeof t=="object"&&t!==null&&t.$$typeof===As}function Nv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var uh=/\/+/g;function ca(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Nv(""+t.key):e.toString(36)}function _o(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case As:case gv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ca(o,0):r,ch(i)?(n="",t!=null&&(n=t.replace(uh,"$&/")+"/"),_o(i,e,n,"",function(c){return c})):i!=null&&(vu(i)&&(i=Tv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(uh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ch(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+ca(s,l);o+=_o(s,e,n,a,i)}else if(a=Iv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+ca(s,l++),o+=_o(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qs(t,e,n){if(t==null)return t;var r=[],i=0;return _o(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Rv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var He={current:null},vo={transition:null},bv={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:vo,ReactCurrentOwner:_u};function Bp(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:Qs,forEach:function(t,e,n){Qs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qs(t,function(){e++}),e},toArray:function(t){return Qs(t,function(e){return e})||[]},only:function(t){if(!vu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=fi;G.Fragment=yv;G.Profiler=vv;G.PureComponent=gu;G.StrictMode=_v;G.Suspense=Cv;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bv;G.act=Bp;G.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Mp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_u.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)zp.call(e,a)&&!Up.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:As,type:t.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(t){return t={$$typeof:xv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wv,_context:t},t.Consumer=t};G.createElement=Wp;G.createFactory=function(t){var e=Wp.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:Ev,render:t}};G.isValidElement=vu;G.lazy=function(t){return{$$typeof:Sv,_payload:{_status:-1,_result:t},_init:Rv}};G.memo=function(t,e){return{$$typeof:kv,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=vo.transition;vo.transition={};try{t()}finally{vo.transition=e}};G.unstable_act=Bp;G.useCallback=function(t,e){return He.current.useCallback(t,e)};G.useContext=function(t){return He.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return He.current.useDeferredValue(t)};G.useEffect=function(t,e){return He.current.useEffect(t,e)};G.useId=function(){return He.current.useId()};G.useImperativeHandle=function(t,e,n){return He.current.useImperativeHandle(t,e,n)};G.useInsertionEffect=function(t,e){return He.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return He.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return He.current.useMemo(t,e)};G.useReducer=function(t,e,n){return He.current.useReducer(t,e,n)};G.useRef=function(t){return He.current.useRef(t)};G.useState=function(t){return He.current.useState(t)};G.useSyncExternalStore=function(t,e,n){return He.current.useSyncExternalStore(t,e,n)};G.useTransition=function(){return He.current.useTransition()};G.version="18.3.1";Dp.exports=G;var D=Dp.exports;const Pv=mv(D);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av=D,Ov=Symbol.for("react.element"),Dv=Symbol.for("react.fragment"),Lv=Object.prototype.hasOwnProperty,Mv=Av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jv={key:!0,ref:!0,__self:!0,__source:!0};function Vp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Lv.call(e,r)&&!jv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ov,type:t,key:s,ref:o,props:i,_owner:Mv.current}}bl.Fragment=Dv;bl.jsx=Vp;bl.jsxs=Vp;Op.exports=bl;var u=Op.exports,Za={},Hp={exports:{}},it={},$p={exports:{}},Gp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,C){var S=L.length;L.push(C);e:for(;0<S;){var v=S-1>>>1,T=L[v];if(0<i(T,C))L[v]=C,L[S]=T,S=v;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var C=L[0],S=L.pop();if(S!==C){L[0]=S;e:for(var v=0,T=L.length,I=T>>>1;v<I;){var k=2*(v+1)-1,j=L[k],F=k+1,Y=L[F];if(0>i(j,S))F<T&&0>i(Y,j)?(L[v]=Y,L[F]=S,v=F):(L[v]=j,L[k]=S,v=k);else if(F<T&&0>i(Y,S))L[v]=Y,L[F]=S,v=F;else break e}}return C}function i(L,C){var S=L.sortIndex-C.sortIndex;return S!==0?S:L.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],c=[],f=1,p=null,h=3,_=!1,y=!1,x=!1,R=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(L){for(var C=n(c);C!==null;){if(C.callback===null)r(c);else if(C.startTime<=L)r(c),C.sortIndex=C.expirationTime,e(a,C);else break;C=n(c)}}function w(L){if(x=!1,d(L),!y)if(n(a)!==null)y=!0,pt(E);else{var C=n(c);C!==null&&mt(w,C.startTime-L)}}function E(L,C){y=!1,x&&(x=!1,g(O),O=-1),_=!0;var S=h;try{for(d(C),p=n(a);p!==null&&(!(p.expirationTime>C)||L&&!he());){var v=p.callback;if(typeof v=="function"){p.callback=null,h=p.priorityLevel;var T=v(p.expirationTime<=C);C=t.unstable_now(),typeof T=="function"?p.callback=T:p===n(a)&&r(a),d(C)}else r(a);p=n(a)}if(p!==null)var I=!0;else{var k=n(c);k!==null&&mt(w,k.startTime-C),I=!1}return I}finally{p=null,h=S,_=!1}}var N=!1,P=null,O=-1,H=5,z=-1;function he(){return!(t.unstable_now()-z<H)}function Ie(){if(P!==null){var L=t.unstable_now();z=L;var C=!0;try{C=P(!0,L)}finally{C?Ae():(N=!1,P=null)}}else N=!1}var Ae;if(typeof m=="function")Ae=function(){m(Ie)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,je=q.port2;q.port1.onmessage=Ie,Ae=function(){je.postMessage(null)}}else Ae=function(){R(Ie,0)};function pt(L){P=L,N||(N=!0,Ae())}function mt(L,C){O=R(function(){L(t.unstable_now())},C)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){y||_||(y=!0,pt(E))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var C=3;break;default:C=h}var S=h;h=C;try{return L()}finally{h=S}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,C){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var S=h;h=L;try{return C()}finally{h=S}},t.unstable_scheduleCallback=function(L,C,S){var v=t.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?v+S:v):S=v,L){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=S+T,L={id:f++,callback:C,priorityLevel:L,startTime:S,expirationTime:T,sortIndex:-1},S>v?(L.sortIndex=S,e(c,L),n(a)===null&&L===n(c)&&(x?(g(O),O=-1):x=!0,mt(w,S-v))):(L.sortIndex=T,e(a,L),y||_||(y=!0,pt(E))),L},t.unstable_shouldYield=he,t.unstable_wrapCallback=function(L){var C=h;return function(){var S=h;h=C;try{return L.apply(this,arguments)}finally{h=S}}}})(Gp);$p.exports=Gp;var Fv=$p.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv=D,rt=Fv;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yp=new Set,is={};function yr(t,e){Xr(t,e),Xr(t+"Capture",e)}function Xr(t,e){for(is[t]=e,t=0;t<e.length;t++)Yp.add(e[t])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ec=Object.prototype.hasOwnProperty,Uv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dh={},hh={};function Wv(t){return ec.call(hh,t)?!0:ec.call(dh,t)?!1:Uv.test(t)?hh[t]=!0:(dh[t]=!0,!1)}function Bv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Vv(t,e,n,r){if(e===null||typeof e>"u"||Bv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $e(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){be[t]=new $e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];be[e]=new $e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){be[t]=new $e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){be[t]=new $e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){be[t]=new $e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){be[t]=new $e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){be[t]=new $e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){be[t]=new $e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){be[t]=new $e(t,5,!1,t.toLowerCase(),null,!1,!1)});var wu=/[\-:]([a-z])/g;function xu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wu,xu);be[e]=new $e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wu,xu);be[e]=new $e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wu,xu);be[e]=new $e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){be[t]=new $e(t,1,!1,t.toLowerCase(),null,!1,!1)});be.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){be[t]=new $e(t,1,!1,t.toLowerCase(),null,!0,!0)});function Eu(t,e,n,r){var i=be.hasOwnProperty(e)?be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Vv(e,n,i,r)&&(n=null),r||i===null?Wv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var sn=zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Js=Symbol.for("react.element"),Cr=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),Cu=Symbol.for("react.strict_mode"),tc=Symbol.for("react.profiler"),Kp=Symbol.for("react.provider"),qp=Symbol.for("react.context"),ku=Symbol.for("react.forward_ref"),nc=Symbol.for("react.suspense"),rc=Symbol.for("react.suspense_list"),Su=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),Qp=Symbol.for("react.offscreen"),fh=Symbol.iterator;function Si(t){return t===null||typeof t!="object"?null:(t=fh&&t[fh]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,ua;function ji(t){if(ua===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ua=e&&e[1]||""}return`
`+ua+t}var da=!1;function ha(t,e){if(!t||da)return"";da=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{da=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ji(t):""}function Hv(t){switch(t.tag){case 5:return ji(t.type);case 16:return ji("Lazy");case 13:return ji("Suspense");case 19:return ji("SuspenseList");case 0:case 2:case 15:return t=ha(t.type,!1),t;case 11:return t=ha(t.type.render,!1),t;case 1:return t=ha(t.type,!0),t;default:return""}}function ic(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case kr:return"Fragment";case Cr:return"Portal";case tc:return"Profiler";case Cu:return"StrictMode";case nc:return"Suspense";case rc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qp:return(t.displayName||"Context")+".Consumer";case Kp:return(t._context.displayName||"Context")+".Provider";case ku:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Su:return e=t.displayName||null,e!==null?e:ic(t.type)||"Memo";case un:e=t._payload,t=t._init;try{return ic(t(e))}catch{}}return null}function $v(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ic(e);case 8:return e===Cu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Gv(t){var e=Jp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xs(t){t._valueTracker||(t._valueTracker=Gv(t))}function Xp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Jp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Do(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sc(t,e){var n=e.checked;return ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ph(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zp(t,e){e=e.checked,e!=null&&Eu(t,"checked",e,!1)}function oc(t,e){Zp(t,e);var n=Mn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lc(t,e.type,n):e.hasOwnProperty("defaultValue")&&lc(t,e.type,Mn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lc(t,e,n){(e!=="number"||Do(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fi=Array.isArray;function Fr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ac(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(Fi(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mn(n)}}function em(t,e){var n=Mn(e.value),r=Mn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function yh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function tm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?tm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zs,nm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zs=Zs||document.createElement("div"),Zs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ss(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yv=["Webkit","ms","Moz","O"];Object.keys(Vi).forEach(function(t){Yv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vi[e]=Vi[t]})});function rm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vi.hasOwnProperty(t)&&Vi[t]?(""+e).trim():e+"px"}function im(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=rm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Kv=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uc(t,e){if(e){if(Kv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function dc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hc=null;function Iu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fc=null,zr=null,Ur=null;function _h(t){if(t=Ls(t)){if(typeof fc!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Ll(e),fc(t.stateNode,t.type,e))}}function sm(t){zr?Ur?Ur.push(t):Ur=[t]:zr=t}function om(){if(zr){var t=zr,e=Ur;if(Ur=zr=null,_h(t),e)for(t=0;t<e.length;t++)_h(e[t])}}function lm(t,e){return t(e)}function am(){}var fa=!1;function cm(t,e,n){if(fa)return t(e,n);fa=!0;try{return lm(t,e,n)}finally{fa=!1,(zr!==null||Ur!==null)&&(am(),om())}}function os(t,e){var n=t.stateNode;if(n===null)return null;var r=Ll(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var pc=!1;if(Qt)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){pc=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{pc=!1}function qv(t,e,n,r,i,s,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Hi=!1,Lo=null,Mo=!1,mc=null,Qv={onError:function(t){Hi=!0,Lo=t}};function Jv(t,e,n,r,i,s,o,l,a){Hi=!1,Lo=null,qv.apply(Qv,arguments)}function Xv(t,e,n,r,i,s,o,l,a){if(Jv.apply(this,arguments),Hi){if(Hi){var c=Lo;Hi=!1,Lo=null}else throw Error(b(198));Mo||(Mo=!0,mc=c)}}function _r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function um(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vh(t){if(_r(t)!==t)throw Error(b(188))}function Zv(t){var e=t.alternate;if(!e){if(e=_r(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vh(i),t;if(s===r)return vh(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function dm(t){return t=Zv(t),t!==null?hm(t):null}function hm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hm(t);if(e!==null)return e;t=t.sibling}return null}var fm=rt.unstable_scheduleCallback,wh=rt.unstable_cancelCallback,e0=rt.unstable_shouldYield,t0=rt.unstable_requestPaint,ge=rt.unstable_now,n0=rt.unstable_getCurrentPriorityLevel,Tu=rt.unstable_ImmediatePriority,pm=rt.unstable_UserBlockingPriority,jo=rt.unstable_NormalPriority,r0=rt.unstable_LowPriority,mm=rt.unstable_IdlePriority,Pl=null,Pt=null;function i0(t){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Pl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:l0,s0=Math.log,o0=Math.LN2;function l0(t){return t>>>=0,t===0?32:31-(s0(t)/o0|0)|0}var eo=64,to=4194304;function zi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=zi(l):(s&=o,s!==0&&(r=zi(s)))}else o=n&~i,o!==0?r=zi(o):s!==0&&(r=zi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ct(e),i=1<<n,r|=t[n],e&=~i;return r}function a0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ct(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=a0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function gc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gm(){var t=eo;return eo<<=1,!(eo&4194240)&&(eo=64),t}function pa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Os(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ct(e),t[e]=n}function u0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ct(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Nu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ct(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var X=0;function ym(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _m,Ru,vm,wm,xm,yc=!1,no=[],xn=null,En=null,Cn=null,ls=new Map,as=new Map,hn=[],d0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xh(t,e){switch(t){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":ls.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":as.delete(e.pointerId)}}function Ti(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ls(e),e!==null&&Ru(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function h0(t,e,n,r,i){switch(e){case"focusin":return xn=Ti(xn,t,e,n,r,i),!0;case"dragenter":return En=Ti(En,t,e,n,r,i),!0;case"mouseover":return Cn=Ti(Cn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ls.set(s,Ti(ls.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,as.set(s,Ti(as.get(s)||null,t,e,n,r,i)),!0}return!1}function Em(t){var e=Xn(t.target);if(e!==null){var n=_r(e);if(n!==null){if(e=n.tag,e===13){if(e=um(n),e!==null){t.blockedOn=e,xm(t.priority,function(){vm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_c(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);hc=r,n.target.dispatchEvent(r),hc=null}else return e=Ls(n),e!==null&&Ru(e),t.blockedOn=n,!1;e.shift()}return!0}function Eh(t,e,n){wo(t)&&n.delete(e)}function f0(){yc=!1,xn!==null&&wo(xn)&&(xn=null),En!==null&&wo(En)&&(En=null),Cn!==null&&wo(Cn)&&(Cn=null),ls.forEach(Eh),as.forEach(Eh)}function Ni(t,e){t.blockedOn===e&&(t.blockedOn=null,yc||(yc=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,f0)))}function cs(t){function e(i){return Ni(i,t)}if(0<no.length){Ni(no[0],t);for(var n=1;n<no.length;n++){var r=no[n];r.blockedOn===t&&(r.blockedOn=null)}}for(xn!==null&&Ni(xn,t),En!==null&&Ni(En,t),Cn!==null&&Ni(Cn,t),ls.forEach(e),as.forEach(e),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)Em(n),n.blockedOn===null&&hn.shift()}var Wr=sn.ReactCurrentBatchConfig,zo=!0;function p0(t,e,n,r){var i=X,s=Wr.transition;Wr.transition=null;try{X=1,bu(t,e,n,r)}finally{X=i,Wr.transition=s}}function m0(t,e,n,r){var i=X,s=Wr.transition;Wr.transition=null;try{X=4,bu(t,e,n,r)}finally{X=i,Wr.transition=s}}function bu(t,e,n,r){if(zo){var i=_c(t,e,n,r);if(i===null)ka(t,e,r,Uo,n),xh(t,r);else if(h0(i,t,e,n,r))r.stopPropagation();else if(xh(t,r),e&4&&-1<d0.indexOf(t)){for(;i!==null;){var s=Ls(i);if(s!==null&&_m(s),s=_c(t,e,n,r),s===null&&ka(t,e,r,Uo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ka(t,e,r,null,n)}}var Uo=null;function _c(t,e,n,r){if(Uo=null,t=Iu(r),t=Xn(t),t!==null)if(e=_r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=um(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Uo=t,null}function Cm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(n0()){case Tu:return 1;case pm:return 4;case jo:case r0:return 16;case mm:return 536870912;default:return 16}default:return 16}}var _n=null,Pu=null,xo=null;function km(){if(xo)return xo;var t,e=Pu,n=e.length,r,i="value"in _n?_n.value:_n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return xo=i.slice(t,1<r?1-r:void 0)}function Eo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function Ch(){return!1}function st(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ro:Ch,this.isPropagationStopped=Ch,this}return ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),e}var pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Au=st(pi),Ds=ue({},pi,{view:0,detail:0}),g0=st(Ds),ma,ga,Ri,Al=ue({},Ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ri&&(Ri&&t.type==="mousemove"?(ma=t.screenX-Ri.screenX,ga=t.screenY-Ri.screenY):ga=ma=0,Ri=t),ma)},movementY:function(t){return"movementY"in t?t.movementY:ga}}),kh=st(Al),y0=ue({},Al,{dataTransfer:0}),_0=st(y0),v0=ue({},Ds,{relatedTarget:0}),ya=st(v0),w0=ue({},pi,{animationName:0,elapsedTime:0,pseudoElement:0}),x0=st(w0),E0=ue({},pi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),C0=st(E0),k0=ue({},pi,{data:0}),Sh=st(k0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=T0[t])?!!e[t]:!1}function Ou(){return N0}var R0=ue({},Ds,{key:function(t){if(t.key){var e=S0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Eo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(t){return t.type==="keypress"?Eo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Eo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),b0=st(R0),P0=ue({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ih=st(P0),A0=ue({},Ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),O0=st(A0),D0=ue({},pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),L0=st(D0),M0=ue({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j0=st(M0),F0=[9,13,27,32],Du=Qt&&"CompositionEvent"in window,$i=null;Qt&&"documentMode"in document&&($i=document.documentMode);var z0=Qt&&"TextEvent"in window&&!$i,Sm=Qt&&(!Du||$i&&8<$i&&11>=$i),Th=String.fromCharCode(32),Nh=!1;function Im(t,e){switch(t){case"keyup":return F0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Sr=!1;function U0(t,e){switch(t){case"compositionend":return Tm(e);case"keypress":return e.which!==32?null:(Nh=!0,Th);case"textInput":return t=e.data,t===Th&&Nh?null:t;default:return null}}function W0(t,e){if(Sr)return t==="compositionend"||!Du&&Im(t,e)?(t=km(),xo=Pu=_n=null,Sr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sm&&e.locale!=="ko"?null:e.data;default:return null}}var B0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!B0[t.type]:e==="textarea"}function Nm(t,e,n,r){sm(r),e=Wo(e,"onChange"),0<e.length&&(n=new Au("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Gi=null,us=null;function V0(t){zm(t,0)}function Ol(t){var e=Nr(t);if(Xp(e))return t}function H0(t,e){if(t==="change")return e}var Rm=!1;if(Qt){var _a;if(Qt){var va="oninput"in document;if(!va){var bh=document.createElement("div");bh.setAttribute("oninput","return;"),va=typeof bh.oninput=="function"}_a=va}else _a=!1;Rm=_a&&(!document.documentMode||9<document.documentMode)}function Ph(){Gi&&(Gi.detachEvent("onpropertychange",bm),us=Gi=null)}function bm(t){if(t.propertyName==="value"&&Ol(us)){var e=[];Nm(e,us,t,Iu(t)),cm(V0,e)}}function $0(t,e,n){t==="focusin"?(Ph(),Gi=e,us=n,Gi.attachEvent("onpropertychange",bm)):t==="focusout"&&Ph()}function G0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ol(us)}function Y0(t,e){if(t==="click")return Ol(e)}function K0(t,e){if(t==="input"||t==="change")return Ol(e)}function q0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var It=typeof Object.is=="function"?Object.is:q0;function ds(t,e){if(It(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ec.call(e,i)||!It(t[i],e[i]))return!1}return!0}function Ah(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Oh(t,e){var n=Ah(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ah(n)}}function Pm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Am(){for(var t=window,e=Do();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Do(t.document)}return e}function Lu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Q0(t){var e=Am(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Pm(n.ownerDocument.documentElement,n)){if(r!==null&&Lu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Oh(n,s);var o=Oh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var J0=Qt&&"documentMode"in document&&11>=document.documentMode,Ir=null,vc=null,Yi=null,wc=!1;function Dh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wc||Ir==null||Ir!==Do(r)||(r=Ir,"selectionStart"in r&&Lu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yi&&ds(Yi,r)||(Yi=r,r=Wo(vc,"onSelect"),0<r.length&&(e=new Au("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ir)))}function io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Tr={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},wa={},Om={};Qt&&(Om=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Dl(t){if(wa[t])return wa[t];if(!Tr[t])return t;var e=Tr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Om)return wa[t]=e[n];return t}var Dm=Dl("animationend"),Lm=Dl("animationiteration"),Mm=Dl("animationstart"),jm=Dl("transitionend"),Fm=new Map,Lh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wn(t,e){Fm.set(t,e),yr(e,[t])}for(var xa=0;xa<Lh.length;xa++){var Ea=Lh[xa],X0=Ea.toLowerCase(),Z0=Ea[0].toUpperCase()+Ea.slice(1);Wn(X0,"on"+Z0)}Wn(Dm,"onAnimationEnd");Wn(Lm,"onAnimationIteration");Wn(Mm,"onAnimationStart");Wn("dblclick","onDoubleClick");Wn("focusin","onFocus");Wn("focusout","onBlur");Wn(jm,"onTransitionEnd");Xr("onMouseEnter",["mouseout","mouseover"]);Xr("onMouseLeave",["mouseout","mouseover"]);Xr("onPointerEnter",["pointerout","pointerover"]);Xr("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ui));function Mh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Xv(r,e,void 0,t),t.currentTarget=null}function zm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Mh(i,l,c),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Mh(i,l,c),s=a}}}if(Mo)throw t=mc,Mo=!1,mc=null,t}function se(t,e){var n=e[Sc];n===void 0&&(n=e[Sc]=new Set);var r=t+"__bubble";n.has(r)||(Um(e,t,2,!1),n.add(r))}function Ca(t,e,n){var r=0;e&&(r|=4),Um(n,t,r,e)}var so="_reactListening"+Math.random().toString(36).slice(2);function hs(t){if(!t[so]){t[so]=!0,Yp.forEach(function(n){n!=="selectionchange"&&(e1.has(n)||Ca(n,!1,t),Ca(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[so]||(e[so]=!0,Ca("selectionchange",!1,e))}}function Um(t,e,n,r){switch(Cm(e)){case 1:var i=p0;break;case 4:i=m0;break;default:i=bu}n=i.bind(null,e,n,t),i=void 0,!pc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ka(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Xn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}cm(function(){var c=s,f=Iu(n),p=[];e:{var h=Fm.get(t);if(h!==void 0){var _=Au,y=t;switch(t){case"keypress":if(Eo(n)===0)break e;case"keydown":case"keyup":_=b0;break;case"focusin":y="focus",_=ya;break;case"focusout":y="blur",_=ya;break;case"beforeblur":case"afterblur":_=ya;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=_0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=O0;break;case Dm:case Lm:case Mm:_=x0;break;case jm:_=L0;break;case"scroll":_=g0;break;case"wheel":_=j0;break;case"copy":case"cut":case"paste":_=C0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ih}var x=(e&4)!==0,R=!x&&t==="scroll",g=x?h!==null?h+"Capture":null:h;x=[];for(var m=c,d;m!==null;){d=m;var w=d.stateNode;if(d.tag===5&&w!==null&&(d=w,g!==null&&(w=os(m,g),w!=null&&x.push(fs(m,w,d)))),R)break;m=m.return}0<x.length&&(h=new _(h,y,null,n,f),p.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==hc&&(y=n.relatedTarget||n.fromElement)&&(Xn(y)||y[Jt]))break e;if((_||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,_?(y=n.relatedTarget||n.toElement,_=c,y=y?Xn(y):null,y!==null&&(R=_r(y),y!==R||y.tag!==5&&y.tag!==6)&&(y=null)):(_=null,y=c),_!==y)){if(x=kh,w="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(x=Ih,w="onPointerLeave",g="onPointerEnter",m="pointer"),R=_==null?h:Nr(_),d=y==null?h:Nr(y),h=new x(w,m+"leave",_,n,f),h.target=R,h.relatedTarget=d,w=null,Xn(f)===c&&(x=new x(g,m+"enter",y,n,f),x.target=d,x.relatedTarget=R,w=x),R=w,_&&y)t:{for(x=_,g=y,m=0,d=x;d;d=xr(d))m++;for(d=0,w=g;w;w=xr(w))d++;for(;0<m-d;)x=xr(x),m--;for(;0<d-m;)g=xr(g),d--;for(;m--;){if(x===g||g!==null&&x===g.alternate)break t;x=xr(x),g=xr(g)}x=null}else x=null;_!==null&&jh(p,h,_,x,!1),y!==null&&R!==null&&jh(p,R,y,x,!0)}}e:{if(h=c?Nr(c):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var E=H0;else if(Rh(h))if(Rm)E=K0;else{E=G0;var N=$0}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=Y0);if(E&&(E=E(t,c))){Nm(p,E,n,f);break e}N&&N(t,h,c),t==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&lc(h,"number",h.value)}switch(N=c?Nr(c):window,t){case"focusin":(Rh(N)||N.contentEditable==="true")&&(Ir=N,vc=c,Yi=null);break;case"focusout":Yi=vc=Ir=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,Dh(p,n,f);break;case"selectionchange":if(J0)break;case"keydown":case"keyup":Dh(p,n,f)}var P;if(Du)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Sr?Im(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Sm&&n.locale!=="ko"&&(Sr||O!=="onCompositionStart"?O==="onCompositionEnd"&&Sr&&(P=km()):(_n=f,Pu="value"in _n?_n.value:_n.textContent,Sr=!0)),N=Wo(c,O),0<N.length&&(O=new Sh(O,t,null,n,f),p.push({event:O,listeners:N}),P?O.data=P:(P=Tm(n),P!==null&&(O.data=P)))),(P=z0?U0(t,n):W0(t,n))&&(c=Wo(c,"onBeforeInput"),0<c.length&&(f=new Sh("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=P))}zm(p,e)})}function fs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=os(t,n),s!=null&&r.unshift(fs(t,s,i)),s=os(t,e),s!=null&&r.push(fs(t,s,i))),t=t.return}return r}function xr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=os(n,s),a!=null&&o.unshift(fs(n,a,l))):i||(a=os(n,s),a!=null&&o.push(fs(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var t1=/\r\n?/g,n1=/\u0000|\uFFFD/g;function Fh(t){return(typeof t=="string"?t:""+t).replace(t1,`
`).replace(n1,"")}function oo(t,e,n){if(e=Fh(e),Fh(t)!==e&&n)throw Error(b(425))}function Bo(){}var xc=null,Ec=null;function Cc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kc=typeof setTimeout=="function"?setTimeout:void 0,r1=typeof clearTimeout=="function"?clearTimeout:void 0,zh=typeof Promise=="function"?Promise:void 0,i1=typeof queueMicrotask=="function"?queueMicrotask:typeof zh<"u"?function(t){return zh.resolve(null).then(t).catch(s1)}:kc;function s1(t){setTimeout(function(){throw t})}function Sa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),cs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);cs(e)}function kn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Uh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var mi=Math.random().toString(36).slice(2),bt="__reactFiber$"+mi,ps="__reactProps$"+mi,Jt="__reactContainer$"+mi,Sc="__reactEvents$"+mi,o1="__reactListeners$"+mi,l1="__reactHandles$"+mi;function Xn(t){var e=t[bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jt]||n[bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Uh(t);t!==null;){if(n=t[bt])return n;t=Uh(t)}return e}t=n,n=t.parentNode}return null}function Ls(t){return t=t[bt]||t[Jt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Nr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Ll(t){return t[ps]||null}var Ic=[],Rr=-1;function Bn(t){return{current:t}}function oe(t){0>Rr||(t.current=Ic[Rr],Ic[Rr]=null,Rr--)}function ie(t,e){Rr++,Ic[Rr]=t.current,t.current=e}var jn={},Me=Bn(jn),Qe=Bn(!1),lr=jn;function Zr(t,e){var n=t.type.contextTypes;if(!n)return jn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Je(t){return t=t.childContextTypes,t!=null}function Vo(){oe(Qe),oe(Me)}function Wh(t,e,n){if(Me.current!==jn)throw Error(b(168));ie(Me,e),ie(Qe,n)}function Wm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,$v(t)||"Unknown",i));return ue({},n,r)}function Ho(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jn,lr=Me.current,ie(Me,t),ie(Qe,Qe.current),!0}function Bh(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=Wm(t,e,lr),r.__reactInternalMemoizedMergedChildContext=t,oe(Qe),oe(Me),ie(Me,t)):oe(Qe),ie(Qe,n)}var Wt=null,Ml=!1,Ia=!1;function Bm(t){Wt===null?Wt=[t]:Wt.push(t)}function a1(t){Ml=!0,Bm(t)}function Vn(){if(!Ia&&Wt!==null){Ia=!0;var t=0,e=X;try{var n=Wt;for(X=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Wt=null,Ml=!1}catch(i){throw Wt!==null&&(Wt=Wt.slice(t+1)),fm(Tu,Vn),i}finally{X=e,Ia=!1}}return null}var br=[],Pr=0,$o=null,Go=0,ot=[],lt=0,ar=null,Bt=1,Vt="";function Kn(t,e){br[Pr++]=Go,br[Pr++]=$o,$o=t,Go=e}function Vm(t,e,n){ot[lt++]=Bt,ot[lt++]=Vt,ot[lt++]=ar,ar=t;var r=Bt;t=Vt;var i=32-Ct(r)-1;r&=~(1<<i),n+=1;var s=32-Ct(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Bt=1<<32-Ct(e)+i|n<<i|r,Vt=s+t}else Bt=1<<s|n<<i|r,Vt=t}function Mu(t){t.return!==null&&(Kn(t,1),Vm(t,1,0))}function ju(t){for(;t===$o;)$o=br[--Pr],br[Pr]=null,Go=br[--Pr],br[Pr]=null;for(;t===ar;)ar=ot[--lt],ot[lt]=null,Vt=ot[--lt],ot[lt]=null,Bt=ot[--lt],ot[lt]=null}var nt=null,tt=null,le=!1,vt=null;function Hm(t,e){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nt=t,tt=kn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nt=t,tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ar!==null?{id:Bt,overflow:Vt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nt=t,tt=null,!0):!1;default:return!1}}function Tc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nc(t){if(le){var e=tt;if(e){var n=e;if(!Vh(t,e)){if(Tc(t))throw Error(b(418));e=kn(n.nextSibling);var r=nt;e&&Vh(t,e)?Hm(r,n):(t.flags=t.flags&-4097|2,le=!1,nt=t)}}else{if(Tc(t))throw Error(b(418));t.flags=t.flags&-4097|2,le=!1,nt=t}}}function Hh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nt=t}function lo(t){if(t!==nt)return!1;if(!le)return Hh(t),le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cc(t.type,t.memoizedProps)),e&&(e=tt)){if(Tc(t))throw $m(),Error(b(418));for(;e;)Hm(t,e),e=kn(e.nextSibling)}if(Hh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tt=kn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tt=null}}else tt=nt?kn(t.stateNode.nextSibling):null;return!0}function $m(){for(var t=tt;t;)t=kn(t.nextSibling)}function ei(){tt=nt=null,le=!1}function Fu(t){vt===null?vt=[t]:vt.push(t)}var c1=sn.ReactCurrentBatchConfig;function bi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function ao(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $h(t){var e=t._init;return e(t._payload)}function Gm(t){function e(g,m){if(t){var d=g.deletions;d===null?(g.deletions=[m],g.flags|=16):d.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Nn(g,m),g.index=0,g.sibling=null,g}function s(g,m,d){return g.index=d,t?(d=g.alternate,d!==null?(d=d.index,d<m?(g.flags|=2,m):d):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,m,d,w){return m===null||m.tag!==6?(m=Oa(d,g.mode,w),m.return=g,m):(m=i(m,d),m.return=g,m)}function a(g,m,d,w){var E=d.type;return E===kr?f(g,m,d.props.children,w,d.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===un&&$h(E)===m.type)?(w=i(m,d.props),w.ref=bi(g,m,d),w.return=g,w):(w=Ro(d.type,d.key,d.props,null,g.mode,w),w.ref=bi(g,m,d),w.return=g,w)}function c(g,m,d,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==d.containerInfo||m.stateNode.implementation!==d.implementation?(m=Da(d,g.mode,w),m.return=g,m):(m=i(m,d.children||[]),m.return=g,m)}function f(g,m,d,w,E){return m===null||m.tag!==7?(m=ir(d,g.mode,w,E),m.return=g,m):(m=i(m,d),m.return=g,m)}function p(g,m,d){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Oa(""+m,g.mode,d),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Js:return d=Ro(m.type,m.key,m.props,null,g.mode,d),d.ref=bi(g,null,m),d.return=g,d;case Cr:return m=Da(m,g.mode,d),m.return=g,m;case un:var w=m._init;return p(g,w(m._payload),d)}if(Fi(m)||Si(m))return m=ir(m,g.mode,d,null),m.return=g,m;ao(g,m)}return null}function h(g,m,d,w){var E=m!==null?m.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:l(g,m,""+d,w);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Js:return d.key===E?a(g,m,d,w):null;case Cr:return d.key===E?c(g,m,d,w):null;case un:return E=d._init,h(g,m,E(d._payload),w)}if(Fi(d)||Si(d))return E!==null?null:f(g,m,d,w,null);ao(g,d)}return null}function _(g,m,d,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(d)||null,l(m,g,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Js:return g=g.get(w.key===null?d:w.key)||null,a(m,g,w,E);case Cr:return g=g.get(w.key===null?d:w.key)||null,c(m,g,w,E);case un:var N=w._init;return _(g,m,d,N(w._payload),E)}if(Fi(w)||Si(w))return g=g.get(d)||null,f(m,g,w,E,null);ao(m,w)}return null}function y(g,m,d,w){for(var E=null,N=null,P=m,O=m=0,H=null;P!==null&&O<d.length;O++){P.index>O?(H=P,P=null):H=P.sibling;var z=h(g,P,d[O],w);if(z===null){P===null&&(P=H);break}t&&P&&z.alternate===null&&e(g,P),m=s(z,m,O),N===null?E=z:N.sibling=z,N=z,P=H}if(O===d.length)return n(g,P),le&&Kn(g,O),E;if(P===null){for(;O<d.length;O++)P=p(g,d[O],w),P!==null&&(m=s(P,m,O),N===null?E=P:N.sibling=P,N=P);return le&&Kn(g,O),E}for(P=r(g,P);O<d.length;O++)H=_(P,g,O,d[O],w),H!==null&&(t&&H.alternate!==null&&P.delete(H.key===null?O:H.key),m=s(H,m,O),N===null?E=H:N.sibling=H,N=H);return t&&P.forEach(function(he){return e(g,he)}),le&&Kn(g,O),E}function x(g,m,d,w){var E=Si(d);if(typeof E!="function")throw Error(b(150));if(d=E.call(d),d==null)throw Error(b(151));for(var N=E=null,P=m,O=m=0,H=null,z=d.next();P!==null&&!z.done;O++,z=d.next()){P.index>O?(H=P,P=null):H=P.sibling;var he=h(g,P,z.value,w);if(he===null){P===null&&(P=H);break}t&&P&&he.alternate===null&&e(g,P),m=s(he,m,O),N===null?E=he:N.sibling=he,N=he,P=H}if(z.done)return n(g,P),le&&Kn(g,O),E;if(P===null){for(;!z.done;O++,z=d.next())z=p(g,z.value,w),z!==null&&(m=s(z,m,O),N===null?E=z:N.sibling=z,N=z);return le&&Kn(g,O),E}for(P=r(g,P);!z.done;O++,z=d.next())z=_(P,g,O,z.value,w),z!==null&&(t&&z.alternate!==null&&P.delete(z.key===null?O:z.key),m=s(z,m,O),N===null?E=z:N.sibling=z,N=z);return t&&P.forEach(function(Ie){return e(g,Ie)}),le&&Kn(g,O),E}function R(g,m,d,w){if(typeof d=="object"&&d!==null&&d.type===kr&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Js:e:{for(var E=d.key,N=m;N!==null;){if(N.key===E){if(E=d.type,E===kr){if(N.tag===7){n(g,N.sibling),m=i(N,d.props.children),m.return=g,g=m;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===un&&$h(E)===N.type){n(g,N.sibling),m=i(N,d.props),m.ref=bi(g,N,d),m.return=g,g=m;break e}n(g,N);break}else e(g,N);N=N.sibling}d.type===kr?(m=ir(d.props.children,g.mode,w,d.key),m.return=g,g=m):(w=Ro(d.type,d.key,d.props,null,g.mode,w),w.ref=bi(g,m,d),w.return=g,g=w)}return o(g);case Cr:e:{for(N=d.key;m!==null;){if(m.key===N)if(m.tag===4&&m.stateNode.containerInfo===d.containerInfo&&m.stateNode.implementation===d.implementation){n(g,m.sibling),m=i(m,d.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=Da(d,g.mode,w),m.return=g,g=m}return o(g);case un:return N=d._init,R(g,m,N(d._payload),w)}if(Fi(d))return y(g,m,d,w);if(Si(d))return x(g,m,d,w);ao(g,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,d),m.return=g,g=m):(n(g,m),m=Oa(d,g.mode,w),m.return=g,g=m),o(g)):n(g,m)}return R}var ti=Gm(!0),Ym=Gm(!1),Yo=Bn(null),Ko=null,Ar=null,zu=null;function Uu(){zu=Ar=Ko=null}function Wu(t){var e=Yo.current;oe(Yo),t._currentValue=e}function Rc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Br(t,e){Ko=t,zu=Ar=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ke=!0),t.firstContext=null)}function dt(t){var e=t._currentValue;if(zu!==t)if(t={context:t,memoizedValue:e,next:null},Ar===null){if(Ko===null)throw Error(b(308));Ar=t,Ko.dependencies={lanes:0,firstContext:t}}else Ar=Ar.next=t;return e}var Zn=null;function Bu(t){Zn===null?Zn=[t]:Zn.push(t)}function Km(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Xt(t,r)}function Xt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dn=!1;function Vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Xt(t,n)}return i=r.interleaved,i===null?(e.next=e,Bu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Xt(t,n)}function Co(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nu(t,n)}}function Gh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qo(t,e,n,r){var i=t.updateQueue;dn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?s=c:o.next=c,o=a;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=a))}if(s!==null){var p=i.baseState;o=0,f=c=a=null,l=s;do{var h=l.lane,_=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,x=l;switch(h=e,_=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){p=y.call(_,p,h);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,h=typeof y=="function"?y.call(_,p,h):y,h==null)break e;p=ue({},p,h);break e;case 2:dn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else _={eventTime:_,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=_,a=p):f=f.next=_,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(f===null&&(a=p),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ur|=o,t.lanes=o,t.memoizedState=p}}function Yh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var Ms={},At=Bn(Ms),ms=Bn(Ms),gs=Bn(Ms);function er(t){if(t===Ms)throw Error(b(174));return t}function Hu(t,e){switch(ie(gs,e),ie(ms,t),ie(At,Ms),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cc(e,t)}oe(At),ie(At,e)}function ni(){oe(At),oe(ms),oe(gs)}function Qm(t){er(gs.current);var e=er(At.current),n=cc(e,t.type);e!==n&&(ie(ms,t),ie(At,n))}function $u(t){ms.current===t&&(oe(At),oe(ms))}var ae=Bn(0);function Qo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ta=[];function Gu(){for(var t=0;t<Ta.length;t++)Ta[t]._workInProgressVersionPrimary=null;Ta.length=0}var ko=sn.ReactCurrentDispatcher,Na=sn.ReactCurrentBatchConfig,cr=0,ce=null,_e=null,Ce=null,Jo=!1,Ki=!1,ys=0,u1=0;function Oe(){throw Error(b(321))}function Yu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!It(t[n],e[n]))return!1;return!0}function Ku(t,e,n,r,i,s){if(cr=s,ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ko.current=t===null||t.memoizedState===null?p1:m1,t=n(r,i),Ki){s=0;do{if(Ki=!1,ys=0,25<=s)throw Error(b(301));s+=1,Ce=_e=null,e.updateQueue=null,ko.current=g1,t=n(r,i)}while(Ki)}if(ko.current=Xo,e=_e!==null&&_e.next!==null,cr=0,Ce=_e=ce=null,Jo=!1,e)throw Error(b(300));return t}function qu(){var t=ys!==0;return ys=0,t}function Rt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?ce.memoizedState=Ce=t:Ce=Ce.next=t,Ce}function ht(){if(_e===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=_e.next;var e=Ce===null?ce.memoizedState:Ce.next;if(e!==null)Ce=e,_e=t;else{if(t===null)throw Error(b(310));_e=t,t={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Ce===null?ce.memoizedState=Ce=t:Ce=Ce.next=t}return Ce}function _s(t,e){return typeof e=="function"?e(t):e}function Ra(t){var e=ht(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=_e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,c=s;do{var f=c.lane;if((cr&f)===f)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=p,o=r):a=a.next=p,ce.lanes|=f,ur|=f}c=c.next}while(c!==null&&c!==s);a===null?o=r:a.next=l,It(r,e.memoizedState)||(Ke=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ce.lanes|=s,ur|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ba(t){var e=ht(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);It(s,e.memoizedState)||(Ke=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Jm(){}function Xm(t,e){var n=ce,r=ht(),i=e(),s=!It(r.memoizedState,i);if(s&&(r.memoizedState=i,Ke=!0),r=r.queue,Qu(tg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,vs(9,eg.bind(null,n,r,i,e),void 0,null),Se===null)throw Error(b(349));cr&30||Zm(n,e,i)}return i}function Zm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function eg(t,e,n,r){e.value=n,e.getSnapshot=r,ng(e)&&rg(t)}function tg(t,e,n){return n(function(){ng(e)&&rg(t)})}function ng(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!It(t,n)}catch{return!0}}function rg(t){var e=Xt(t,1);e!==null&&kt(e,t,1,-1)}function Kh(t){var e=Rt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_s,lastRenderedState:t},e.queue=t,t=t.dispatch=f1.bind(null,ce,t),[e.memoizedState,t]}function vs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ig(){return ht().memoizedState}function So(t,e,n,r){var i=Rt();ce.flags|=t,i.memoizedState=vs(1|e,n,void 0,r===void 0?null:r)}function jl(t,e,n,r){var i=ht();r=r===void 0?null:r;var s=void 0;if(_e!==null){var o=_e.memoizedState;if(s=o.destroy,r!==null&&Yu(r,o.deps)){i.memoizedState=vs(e,n,s,r);return}}ce.flags|=t,i.memoizedState=vs(1|e,n,s,r)}function qh(t,e){return So(8390656,8,t,e)}function Qu(t,e){return jl(2048,8,t,e)}function sg(t,e){return jl(4,2,t,e)}function og(t,e){return jl(4,4,t,e)}function lg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ag(t,e,n){return n=n!=null?n.concat([t]):null,jl(4,4,lg.bind(null,e,t),n)}function Ju(){}function cg(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ug(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function dg(t,e,n){return cr&21?(It(n,e)||(n=gm(),ce.lanes|=n,ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ke=!0),t.memoizedState=n)}function d1(t,e){var n=X;X=n!==0&&4>n?n:4,t(!0);var r=Na.transition;Na.transition={};try{t(!1),e()}finally{X=n,Na.transition=r}}function hg(){return ht().memoizedState}function h1(t,e,n){var r=Tn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fg(t))pg(e,n);else if(n=Km(t,e,n,r),n!==null){var i=We();kt(n,t,r,i),mg(n,e,r)}}function f1(t,e,n){var r=Tn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fg(t))pg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,It(l,o)){var a=e.interleaved;a===null?(i.next=i,Bu(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Km(t,e,i,r),n!==null&&(i=We(),kt(n,t,r,i),mg(n,e,r))}}function fg(t){var e=t.alternate;return t===ce||e!==null&&e===ce}function pg(t,e){Ki=Jo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nu(t,n)}}var Xo={readContext:dt,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},p1={readContext:dt,useCallback:function(t,e){return Rt().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:qh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,So(4194308,4,lg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return So(4194308,4,t,e)},useInsertionEffect:function(t,e){return So(4,2,t,e)},useMemo:function(t,e){var n=Rt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Rt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=h1.bind(null,ce,t),[r.memoizedState,t]},useRef:function(t){var e=Rt();return t={current:t},e.memoizedState=t},useState:Kh,useDebugValue:Ju,useDeferredValue:function(t){return Rt().memoizedState=t},useTransition:function(){var t=Kh(!1),e=t[0];return t=d1.bind(null,t[1]),Rt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ce,i=Rt();if(le){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Se===null)throw Error(b(349));cr&30||Zm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,qh(tg.bind(null,r,s,t),[t]),r.flags|=2048,vs(9,eg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Rt(),e=Se.identifierPrefix;if(le){var n=Vt,r=Bt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ys++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=u1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},m1={readContext:dt,useCallback:cg,useContext:dt,useEffect:Qu,useImperativeHandle:ag,useInsertionEffect:sg,useLayoutEffect:og,useMemo:ug,useReducer:Ra,useRef:ig,useState:function(){return Ra(_s)},useDebugValue:Ju,useDeferredValue:function(t){var e=ht();return dg(e,_e.memoizedState,t)},useTransition:function(){var t=Ra(_s)[0],e=ht().memoizedState;return[t,e]},useMutableSource:Jm,useSyncExternalStore:Xm,useId:hg,unstable_isNewReconciler:!1},g1={readContext:dt,useCallback:cg,useContext:dt,useEffect:Qu,useImperativeHandle:ag,useInsertionEffect:sg,useLayoutEffect:og,useMemo:ug,useReducer:ba,useRef:ig,useState:function(){return ba(_s)},useDebugValue:Ju,useDeferredValue:function(t){var e=ht();return _e===null?e.memoizedState=t:dg(e,_e.memoizedState,t)},useTransition:function(){var t=ba(_s)[0],e=ht().memoizedState;return[t,e]},useMutableSource:Jm,useSyncExternalStore:Xm,useId:hg,unstable_isNewReconciler:!1};function yt(t,e){if(t&&t.defaultProps){e=ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fl={isMounted:function(t){return(t=t._reactInternals)?_r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=We(),i=Tn(t),s=Kt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Sn(t,s,i),e!==null&&(kt(e,t,i,r),Co(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=We(),i=Tn(t),s=Kt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sn(t,s,i),e!==null&&(kt(e,t,i,r),Co(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=We(),r=Tn(t),i=Kt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Sn(t,i,r),e!==null&&(kt(e,t,r,n),Co(e,t,r))}};function Qh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ds(n,r)||!ds(i,s):!0}function gg(t,e,n){var r=!1,i=jn,s=e.contextType;return typeof s=="object"&&s!==null?s=dt(s):(i=Je(e)?lr:Me.current,r=e.contextTypes,s=(r=r!=null)?Zr(t,i):jn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fl.enqueueReplaceState(e,e.state,null)}function Pc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Vu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=dt(s):(s=Je(e)?lr:Me.current,i.context=Zr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Fl.enqueueReplaceState(i,i.state,null),qo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ri(t,e){try{var n="",r=e;do n+=Hv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Pa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ac(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var y1=typeof WeakMap=="function"?WeakMap:Map;function yg(t,e,n){n=Kt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){el||(el=!0,Bc=r),Ac(t,e)},n}function _g(t,e,n){n=Kt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ac(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ac(t,e),typeof r!="function"&&(In===null?In=new Set([this]):In.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new y1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=P1.bind(null,t,e,n),e.then(t,t))}function Zh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ef(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Kt(-1,1),e.tag=2,Sn(n,e,1))),n.lanes|=1),t)}var _1=sn.ReactCurrentOwner,Ke=!1;function ze(t,e,n,r){e.child=t===null?Ym(e,null,n,r):ti(e,t.child,n,r)}function tf(t,e,n,r,i){n=n.render;var s=e.ref;return Br(e,i),r=Ku(t,e,n,r,s,i),n=qu(),t!==null&&!Ke?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(le&&n&&Mu(e),e.flags|=1,ze(t,e,r,i),e.child)}function nf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,vg(t,e,s,r,i)):(t=Ro(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ds,n(o,r)&&t.ref===e.ref)return Zt(t,e,i)}return e.flags|=1,t=Nn(s,r),t.ref=e.ref,t.return=e,e.child=t}function vg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ds(s,r)&&t.ref===e.ref)if(Ke=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ke=!0);else return e.lanes=t.lanes,Zt(t,e,i)}return Oc(t,e,n,r,i)}function wg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Dr,et),et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ie(Dr,et),et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ie(Dr,et),et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ie(Dr,et),et|=r;return ze(t,e,i,n),e.child}function xg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Oc(t,e,n,r,i){var s=Je(n)?lr:Me.current;return s=Zr(e,s),Br(e,i),n=Ku(t,e,n,r,s,i),r=qu(),t!==null&&!Ke?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(le&&r&&Mu(e),e.flags|=1,ze(t,e,n,i),e.child)}function rf(t,e,n,r,i){if(Je(n)){var s=!0;Ho(e)}else s=!1;if(Br(e,i),e.stateNode===null)Io(t,e),gg(e,n,r),Pc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=dt(c):(c=Je(n)?lr:Me.current,c=Zr(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==c)&&Jh(e,o,r,c),dn=!1;var h=e.memoizedState;o.state=h,qo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Qe.current||dn?(typeof f=="function"&&(bc(e,n,f,r),a=e.memoizedState),(l=dn||Qh(e,n,l,r,h,a,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,qm(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:yt(e.type,l),o.props=c,p=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=dt(a):(a=Je(n)?lr:Me.current,a=Zr(e,a));var _=n.getDerivedStateFromProps;(f=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||h!==a)&&Jh(e,o,r,a),dn=!1,h=e.memoizedState,o.state=h,qo(e,r,o,i);var y=e.memoizedState;l!==p||h!==y||Qe.current||dn?(typeof _=="function"&&(bc(e,n,_,r),y=e.memoizedState),(c=dn||Qh(e,n,c,r,h,y,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Dc(t,e,n,r,s,i)}function Dc(t,e,n,r,i,s){xg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Bh(e,n,!1),Zt(t,e,s);r=e.stateNode,_1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ti(e,t.child,null,s),e.child=ti(e,null,l,s)):ze(t,e,l,s),e.memoizedState=r.state,i&&Bh(e,n,!0),e.child}function Eg(t){var e=t.stateNode;e.pendingContext?Wh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wh(t,e.context,!1),Hu(t,e.containerInfo)}function sf(t,e,n,r,i){return ei(),Fu(i),e.flags|=256,ze(t,e,n,r),e.child}var Lc={dehydrated:null,treeContext:null,retryLane:0};function Mc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cg(t,e,n){var r=e.pendingProps,i=ae.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ie(ae,i&1),t===null)return Nc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wl(o,r,0,null),t=ir(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mc(n),e.memoizedState=Lc,t):Xu(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return v1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Nn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Nn(l,s):(s=ir(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Mc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lc,r}return s=t.child,t=s.sibling,r=Nn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xu(t,e){return e=Wl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function co(t,e,n,r){return r!==null&&Fu(r),ti(e,t.child,null,n),t=Xu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function v1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Pa(Error(b(422))),co(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Wl({mode:"visible",children:r.children},i,0,null),s=ir(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ti(e,t.child,null,o),e.child.memoizedState=Mc(o),e.memoizedState=Lc,s);if(!(e.mode&1))return co(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=Pa(s,r,void 0),co(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ke||l){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Xt(t,i),kt(r,t,i,-1))}return id(),r=Pa(Error(b(421))),co(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=A1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,tt=kn(i.nextSibling),nt=e,le=!0,vt=null,t!==null&&(ot[lt++]=Bt,ot[lt++]=Vt,ot[lt++]=ar,Bt=t.id,Vt=t.overflow,ar=e),e=Xu(e,r.children),e.flags|=4096,e)}function of(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Rc(t.return,e,n)}function Aa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function kg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ze(t,e,r.children,n),r=ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&of(t,n,e);else if(t.tag===19)of(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ie(ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Qo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Aa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Qo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Aa(e,!0,n,null,s);break;case"together":Aa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Io(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=Nn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function w1(t,e,n){switch(e.tag){case 3:Eg(e),ei();break;case 5:Qm(e);break;case 1:Je(e.type)&&Ho(e);break;case 4:Hu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ie(Yo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ie(ae,ae.current&1),e.flags|=128,null):n&e.child.childLanes?Cg(t,e,n):(ie(ae,ae.current&1),t=Zt(t,e,n),t!==null?t.sibling:null);ie(ae,ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(ae,ae.current),r)break;return null;case 22:case 23:return e.lanes=0,wg(t,e,n)}return Zt(t,e,n)}var Sg,jc,Ig,Tg;Sg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jc=function(){};Ig=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,er(At.current);var s=null;switch(n){case"input":i=sc(t,i),r=sc(t,r),s=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),s=[];break;case"textarea":i=ac(t,i),r=ac(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Bo)}uc(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(is.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(is.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&se("scroll",t),s||l===a||(s=[])):(s=s||[]).push(c,a))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Tg=function(t,e,n,r){n!==r&&(e.flags|=4)};function Pi(t,e){if(!le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function De(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function x1(t,e,n){var r=e.pendingProps;switch(ju(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(e),null;case 1:return Je(e.type)&&Vo(),De(e),null;case 3:return r=e.stateNode,ni(),oe(Qe),oe(Me),Gu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(lo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vt!==null&&($c(vt),vt=null))),jc(t,e),De(e),null;case 5:$u(e);var i=er(gs.current);if(n=e.type,t!==null&&e.stateNode!=null)Ig(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return De(e),null}if(t=er(At.current),lo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[bt]=e,r[ps]=s,t=(e.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<Ui.length;i++)se(Ui[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":ph(r,s),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},se("invalid",r);break;case"textarea":gh(r,s),se("invalid",r)}uc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&oo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&oo(r.textContent,l,t),i=["children",""+l]):is.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&se("scroll",r)}switch(n){case"input":Xs(r),mh(r,s,!0);break;case"textarea":Xs(r),yh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Bo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=tm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[bt]=e,t[ps]=r,Sg(t,e,!1,!1),e.stateNode=t;e:{switch(o=dc(n,r),n){case"dialog":se("cancel",t),se("close",t),i=r;break;case"iframe":case"object":case"embed":se("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ui.length;i++)se(Ui[i],t);i=r;break;case"source":se("error",t),i=r;break;case"img":case"image":case"link":se("error",t),se("load",t),i=r;break;case"details":se("toggle",t),i=r;break;case"input":ph(t,r),i=sc(t,r),se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),se("invalid",t);break;case"textarea":gh(t,r),i=ac(t,r),se("invalid",t);break;default:i=r}uc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?im(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&nm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ss(t,a):typeof a=="number"&&ss(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(is.hasOwnProperty(s)?a!=null&&s==="onScroll"&&se("scroll",t):a!=null&&Eu(t,s,a,o))}switch(n){case"input":Xs(t),mh(t,r,!1);break;case"textarea":Xs(t),yh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return De(e),null;case 6:if(t&&e.stateNode!=null)Tg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=er(gs.current),er(At.current),lo(e)){if(r=e.stateNode,n=e.memoizedProps,r[bt]=e,(s=r.nodeValue!==n)&&(t=nt,t!==null))switch(t.tag){case 3:oo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=e,e.stateNode=r}return De(e),null;case 13:if(oe(ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(le&&tt!==null&&e.mode&1&&!(e.flags&128))$m(),ei(),e.flags|=98560,s=!1;else if(s=lo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[bt]=e}else ei(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;De(e),s=!1}else vt!==null&&($c(vt),vt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ae.current&1?xe===0&&(xe=3):id())),e.updateQueue!==null&&(e.flags|=4),De(e),null);case 4:return ni(),jc(t,e),t===null&&hs(e.stateNode.containerInfo),De(e),null;case 10:return Wu(e.type._context),De(e),null;case 17:return Je(e.type)&&Vo(),De(e),null;case 19:if(oe(ae),s=e.memoizedState,s===null)return De(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Pi(s,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Qo(t),o!==null){for(e.flags|=128,Pi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ie(ae,ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&ge()>ii&&(e.flags|=128,r=!0,Pi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Qo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Pi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!le)return De(e),null}else 2*ge()-s.renderingStartTime>ii&&n!==1073741824&&(e.flags|=128,r=!0,Pi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ge(),e.sibling=null,n=ae.current,ie(ae,r?n&1|2:n&1),e):(De(e),null);case 22:case 23:return rd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?et&1073741824&&(De(e),e.subtreeFlags&6&&(e.flags|=8192)):De(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function E1(t,e){switch(ju(e),e.tag){case 1:return Je(e.type)&&Vo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ni(),oe(Qe),oe(Me),Gu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $u(e),null;case 13:if(oe(ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));ei()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return oe(ae),null;case 4:return ni(),null;case 10:return Wu(e.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var uo=!1,Le=!1,C1=typeof WeakSet=="function"?WeakSet:Set,M=null;function Or(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(t,e,r)}else n.current=null}function Fc(t,e,n){try{n()}catch(r){fe(t,e,r)}}var lf=!1;function k1(t,e){if(xc=zo,t=Am(),Lu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,f=0,p=t,h=null;t:for(;;){for(var _;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(a=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(_=p.firstChild)!==null;)h=p,p=_;for(;;){if(p===t)break t;if(h===n&&++c===i&&(l=o),h===s&&++f===r&&(a=o),(_=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ec={focusedElem:t,selectionRange:n},zo=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,R=y.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?x:yt(e.type,x),R);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var d=e.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(w){fe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return y=lf,lf=!1,y}function qi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Fc(e,n,s)}i=i.next}while(i!==r)}}function zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function zc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ng(t){var e=t.alternate;e!==null&&(t.alternate=null,Ng(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bt],delete e[ps],delete e[Sc],delete e[o1],delete e[l1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rg(t){return t.tag===5||t.tag===3||t.tag===4}function af(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bo));else if(r!==4&&(t=t.child,t!==null))for(Uc(t,e,n),t=t.sibling;t!==null;)Uc(t,e,n),t=t.sibling}function Wc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wc(t,e,n),t=t.sibling;t!==null;)Wc(t,e,n),t=t.sibling}var Te=null,_t=!1;function ln(t,e,n){for(n=n.child;n!==null;)bg(t,e,n),n=n.sibling}function bg(t,e,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Pl,n)}catch{}switch(n.tag){case 5:Le||Or(n,e);case 6:var r=Te,i=_t;Te=null,ln(t,e,n),Te=r,_t=i,Te!==null&&(_t?(t=Te,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(_t?(t=Te,n=n.stateNode,t.nodeType===8?Sa(t.parentNode,n):t.nodeType===1&&Sa(t,n),cs(t)):Sa(Te,n.stateNode));break;case 4:r=Te,i=_t,Te=n.stateNode.containerInfo,_t=!0,ln(t,e,n),Te=r,_t=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fc(n,e,o),i=i.next}while(i!==r)}ln(t,e,n);break;case 1:if(!Le&&(Or(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){fe(n,e,l)}ln(t,e,n);break;case 21:ln(t,e,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,ln(t,e,n),Le=r):ln(t,e,n);break;default:ln(t,e,n)}}function cf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new C1),e.forEach(function(r){var i=O1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Te=l.stateNode,_t=!1;break e;case 3:Te=l.stateNode.containerInfo,_t=!0;break e;case 4:Te=l.stateNode.containerInfo,_t=!0;break e}l=l.return}if(Te===null)throw Error(b(160));bg(s,o,i),Te=null,_t=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){fe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Pg(e,t),e=e.sibling}function Pg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gt(e,t),Nt(t),r&4){try{qi(3,t,t.return),zl(3,t)}catch(x){fe(t,t.return,x)}try{qi(5,t,t.return)}catch(x){fe(t,t.return,x)}}break;case 1:gt(e,t),Nt(t),r&512&&n!==null&&Or(n,n.return);break;case 5:if(gt(e,t),Nt(t),r&512&&n!==null&&Or(n,n.return),t.flags&32){var i=t.stateNode;try{ss(i,"")}catch(x){fe(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Zp(i,s),dc(l,o);var c=dc(l,s);for(o=0;o<a.length;o+=2){var f=a[o],p=a[o+1];f==="style"?im(i,p):f==="dangerouslySetInnerHTML"?nm(i,p):f==="children"?ss(i,p):Eu(i,f,p,c)}switch(l){case"input":oc(i,s);break;case"textarea":em(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Fr(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?Fr(i,!!s.multiple,s.defaultValue,!0):Fr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ps]=s}catch(x){fe(t,t.return,x)}}break;case 6:if(gt(e,t),Nt(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){fe(t,t.return,x)}}break;case 3:if(gt(e,t),Nt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{cs(e.containerInfo)}catch(x){fe(t,t.return,x)}break;case 4:gt(e,t),Nt(t);break;case 13:gt(e,t),Nt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(td=ge())),r&4&&cf(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Le=(c=Le)||f,gt(e,t),Le=c):gt(e,t),Nt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(M=t,f=t.child;f!==null;){for(p=M=f;M!==null;){switch(h=M,_=h.child,h.tag){case 0:case 11:case 14:case 15:qi(4,h,h.return);break;case 1:Or(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(x){fe(r,n,x)}}break;case 5:Or(h,h.return);break;case 22:if(h.memoizedState!==null){df(p);continue}}_!==null?(_.return=h,M=_):df(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,a=p.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=rm("display",o))}catch(x){fe(t,t.return,x)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){fe(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:gt(e,t),Nt(t),r&4&&cf(t);break;case 21:break;default:gt(e,t),Nt(t)}}function Nt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Rg(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ss(i,""),r.flags&=-33);var s=af(t);Wc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=af(t);Uc(t,l,o);break;default:throw Error(b(161))}}catch(a){fe(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function S1(t,e,n){M=t,Ag(t)}function Ag(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||uo;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Le;l=uo;var c=Le;if(uo=o,(Le=a)&&!c)for(M=i;M!==null;)o=M,a=o.child,o.tag===22&&o.memoizedState!==null?hf(i):a!==null?(a.return=o,M=a):hf(i);for(;s!==null;)M=s,Ag(s),s=s.sibling;M=i,uo=l,Le=c}uf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):uf(t)}}function uf(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Le||zl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Yh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Yh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&cs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Le||e.flags&512&&zc(e)}catch(h){fe(e,e.return,h)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function df(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function hf(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zl(4,e)}catch(a){fe(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){fe(e,i,a)}}var s=e.return;try{zc(e)}catch(a){fe(e,s,a)}break;case 5:var o=e.return;try{zc(e)}catch(a){fe(e,o,a)}}}catch(a){fe(e,e.return,a)}if(e===t){M=null;break}var l=e.sibling;if(l!==null){l.return=e.return,M=l;break}M=e.return}}var I1=Math.ceil,Zo=sn.ReactCurrentDispatcher,Zu=sn.ReactCurrentOwner,ut=sn.ReactCurrentBatchConfig,K=0,Se=null,ye=null,Re=0,et=0,Dr=Bn(0),xe=0,ws=null,ur=0,Ul=0,ed=0,Qi=null,Ye=null,td=0,ii=1/0,Ut=null,el=!1,Bc=null,In=null,ho=!1,vn=null,tl=0,Ji=0,Vc=null,To=-1,No=0;function We(){return K&6?ge():To!==-1?To:To=ge()}function Tn(t){return t.mode&1?K&2&&Re!==0?Re&-Re:c1.transition!==null?(No===0&&(No=gm()),No):(t=X,t!==0||(t=window.event,t=t===void 0?16:Cm(t.type)),t):1}function kt(t,e,n,r){if(50<Ji)throw Ji=0,Vc=null,Error(b(185));Os(t,n,r),(!(K&2)||t!==Se)&&(t===Se&&(!(K&2)&&(Ul|=n),xe===4&&fn(t,Re)),Xe(t,r),n===1&&K===0&&!(e.mode&1)&&(ii=ge()+500,Ml&&Vn()))}function Xe(t,e){var n=t.callbackNode;c0(t,e);var r=Fo(t,t===Se?Re:0);if(r===0)n!==null&&wh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wh(n),e===1)t.tag===0?a1(ff.bind(null,t)):Bm(ff.bind(null,t)),i1(function(){!(K&6)&&Vn()}),n=null;else{switch(ym(r)){case 1:n=Tu;break;case 4:n=pm;break;case 16:n=jo;break;case 536870912:n=mm;break;default:n=jo}n=Ug(n,Og.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Og(t,e){if(To=-1,No=0,K&6)throw Error(b(327));var n=t.callbackNode;if(Vr()&&t.callbackNode!==n)return null;var r=Fo(t,t===Se?Re:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nl(t,r);else{e=r;var i=K;K|=2;var s=Lg();(Se!==t||Re!==e)&&(Ut=null,ii=ge()+500,rr(t,e));do try{R1();break}catch(l){Dg(t,l)}while(1);Uu(),Zo.current=s,K=i,ye!==null?e=0:(Se=null,Re=0,e=xe)}if(e!==0){if(e===2&&(i=gc(t),i!==0&&(r=i,e=Hc(t,i))),e===1)throw n=ws,rr(t,0),fn(t,r),Xe(t,ge()),n;if(e===6)fn(t,r);else{if(i=t.current.alternate,!(r&30)&&!T1(i)&&(e=nl(t,r),e===2&&(s=gc(t),s!==0&&(r=s,e=Hc(t,s))),e===1))throw n=ws,rr(t,0),fn(t,r),Xe(t,ge()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:qn(t,Ye,Ut);break;case 3:if(fn(t,r),(r&130023424)===r&&(e=td+500-ge(),10<e)){if(Fo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){We(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=kc(qn.bind(null,t,Ye,Ut),e);break}qn(t,Ye,Ut);break;case 4:if(fn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ct(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*I1(r/1960))-r,10<r){t.timeoutHandle=kc(qn.bind(null,t,Ye,Ut),r);break}qn(t,Ye,Ut);break;case 5:qn(t,Ye,Ut);break;default:throw Error(b(329))}}}return Xe(t,ge()),t.callbackNode===n?Og.bind(null,t):null}function Hc(t,e){var n=Qi;return t.current.memoizedState.isDehydrated&&(rr(t,e).flags|=256),t=nl(t,e),t!==2&&(e=Ye,Ye=n,e!==null&&$c(e)),t}function $c(t){Ye===null?Ye=t:Ye.push.apply(Ye,t)}function T1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!It(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fn(t,e){for(e&=~ed,e&=~Ul,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ct(e),r=1<<n;t[n]=-1,e&=~r}}function ff(t){if(K&6)throw Error(b(327));Vr();var e=Fo(t,0);if(!(e&1))return Xe(t,ge()),null;var n=nl(t,e);if(t.tag!==0&&n===2){var r=gc(t);r!==0&&(e=r,n=Hc(t,r))}if(n===1)throw n=ws,rr(t,0),fn(t,e),Xe(t,ge()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qn(t,Ye,Ut),Xe(t,ge()),null}function nd(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(ii=ge()+500,Ml&&Vn())}}function dr(t){vn!==null&&vn.tag===0&&!(K&6)&&Vr();var e=K;K|=1;var n=ut.transition,r=X;try{if(ut.transition=null,X=1,t)return t()}finally{X=r,ut.transition=n,K=e,!(K&6)&&Vn()}}function rd(){et=Dr.current,oe(Dr)}function rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,r1(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(ju(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vo();break;case 3:ni(),oe(Qe),oe(Me),Gu();break;case 5:$u(r);break;case 4:ni();break;case 13:oe(ae);break;case 19:oe(ae);break;case 10:Wu(r.type._context);break;case 22:case 23:rd()}n=n.return}if(Se=t,ye=t=Nn(t.current,null),Re=et=e,xe=0,ws=null,ed=Ul=ur=0,Ye=Qi=null,Zn!==null){for(e=0;e<Zn.length;e++)if(n=Zn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zn=null}return t}function Dg(t,e){do{var n=ye;try{if(Uu(),ko.current=Xo,Jo){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Jo=!1}if(cr=0,Ce=_e=ce=null,Ki=!1,ys=0,Zu.current=null,n===null||n.return===null){xe=1,ws=e,ye=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Re,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=Zh(o);if(_!==null){_.flags&=-257,ef(_,o,l,s,e),_.mode&1&&Xh(s,c,e),e=_,a=c;var y=e.updateQueue;if(y===null){var x=new Set;x.add(a),e.updateQueue=x}else y.add(a);break e}else{if(!(e&1)){Xh(s,c,e),id();break e}a=Error(b(426))}}else if(le&&l.mode&1){var R=Zh(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),ef(R,o,l,s,e),Fu(ri(a,l));break e}}s=a=ri(a,l),xe!==4&&(xe=2),Qi===null?Qi=[s]:Qi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=yg(s,a,e);Gh(s,g);break e;case 1:l=a;var m=s.type,d=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(In===null||!In.has(d)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=_g(s,l,e);Gh(s,w);break e}}s=s.return}while(s!==null)}jg(n)}catch(E){e=E,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(1)}function Lg(){var t=Zo.current;return Zo.current=Xo,t===null?Xo:t}function id(){(xe===0||xe===3||xe===2)&&(xe=4),Se===null||!(ur&268435455)&&!(Ul&268435455)||fn(Se,Re)}function nl(t,e){var n=K;K|=2;var r=Lg();(Se!==t||Re!==e)&&(Ut=null,rr(t,e));do try{N1();break}catch(i){Dg(t,i)}while(1);if(Uu(),K=n,Zo.current=r,ye!==null)throw Error(b(261));return Se=null,Re=0,xe}function N1(){for(;ye!==null;)Mg(ye)}function R1(){for(;ye!==null&&!e0();)Mg(ye)}function Mg(t){var e=zg(t.alternate,t,et);t.memoizedProps=t.pendingProps,e===null?jg(t):ye=e,Zu.current=null}function jg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=E1(n,e),n!==null){n.flags&=32767,ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,ye=null;return}}else if(n=x1(n,e,et),n!==null){ye=n;return}if(e=e.sibling,e!==null){ye=e;return}ye=e=t}while(e!==null);xe===0&&(xe=5)}function qn(t,e,n){var r=X,i=ut.transition;try{ut.transition=null,X=1,b1(t,e,n,r)}finally{ut.transition=i,X=r}return null}function b1(t,e,n,r){do Vr();while(vn!==null);if(K&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(u0(t,s),t===Se&&(ye=Se=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ho||(ho=!0,Ug(jo,function(){return Vr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ut.transition,ut.transition=null;var o=X;X=1;var l=K;K|=4,Zu.current=null,k1(t,n),Pg(n,t),Q0(Ec),zo=!!xc,Ec=xc=null,t.current=n,S1(n),t0(),K=l,X=o,ut.transition=s}else t.current=n;if(ho&&(ho=!1,vn=t,tl=i),s=t.pendingLanes,s===0&&(In=null),i0(n.stateNode),Xe(t,ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(el)throw el=!1,t=Bc,Bc=null,t;return tl&1&&t.tag!==0&&Vr(),s=t.pendingLanes,s&1?t===Vc?Ji++:(Ji=0,Vc=t):Ji=0,Vn(),null}function Vr(){if(vn!==null){var t=ym(tl),e=ut.transition,n=X;try{if(ut.transition=null,X=16>t?16:t,vn===null)var r=!1;else{if(t=vn,vn=null,tl=0,K&6)throw Error(b(331));var i=K;for(K|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(M=c;M!==null;){var f=M;switch(f.tag){case 0:case 11:case 15:qi(8,f,s)}var p=f.child;if(p!==null)p.return=f,M=p;else for(;M!==null;){f=M;var h=f.sibling,_=f.return;if(Ng(f),f===c){M=null;break}if(h!==null){h.return=_,M=h;break}M=_}}}var y=s.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var R=x.sibling;x.sibling=null,x=R}while(x!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qi(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,M=g;break e}M=s.return}}var m=t.current;for(M=m;M!==null;){o=M;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,M=d;else e:for(o=m;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:zl(9,l)}}catch(E){fe(l,l.return,E)}if(l===o){M=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,M=w;break e}M=l.return}}if(K=i,Vn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Pl,t)}catch{}r=!0}return r}finally{X=n,ut.transition=e}}return!1}function pf(t,e,n){e=ri(n,e),e=yg(t,e,1),t=Sn(t,e,1),e=We(),t!==null&&(Os(t,1,e),Xe(t,e))}function fe(t,e,n){if(t.tag===3)pf(t,t,n);else for(;e!==null;){if(e.tag===3){pf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(In===null||!In.has(r))){t=ri(n,t),t=_g(e,t,1),e=Sn(e,t,1),t=We(),e!==null&&(Os(e,1,t),Xe(e,t));break}}e=e.return}}function P1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=We(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(Re&n)===n&&(xe===4||xe===3&&(Re&130023424)===Re&&500>ge()-td?rr(t,0):ed|=n),Xe(t,e)}function Fg(t,e){e===0&&(t.mode&1?(e=to,to<<=1,!(to&130023424)&&(to=4194304)):e=1);var n=We();t=Xt(t,e),t!==null&&(Os(t,e,n),Xe(t,n))}function A1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fg(t,n)}function O1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),Fg(t,n)}var zg;zg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qe.current)Ke=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ke=!1,w1(t,e,n);Ke=!!(t.flags&131072)}else Ke=!1,le&&e.flags&1048576&&Vm(e,Go,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Io(t,e),t=e.pendingProps;var i=Zr(e,Me.current);Br(e,n),i=Ku(null,e,r,t,i,n);var s=qu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Je(r)?(s=!0,Ho(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vu(e),i.updater=Fl,e.stateNode=i,i._reactInternals=e,Pc(e,r,t,n),e=Dc(null,e,r,!0,s,n)):(e.tag=0,le&&s&&Mu(e),ze(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Io(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=L1(r),t=yt(r,t),i){case 0:e=Oc(null,e,r,t,n);break e;case 1:e=rf(null,e,r,t,n);break e;case 11:e=tf(null,e,r,t,n);break e;case 14:e=nf(null,e,r,yt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),Oc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),rf(t,e,r,i,n);case 3:e:{if(Eg(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,qm(t,e),qo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ri(Error(b(423)),e),e=sf(t,e,r,n,i);break e}else if(r!==i){i=ri(Error(b(424)),e),e=sf(t,e,r,n,i);break e}else for(tt=kn(e.stateNode.containerInfo.firstChild),nt=e,le=!0,vt=null,n=Ym(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ei(),r===i){e=Zt(t,e,n);break e}ze(t,e,r,n)}e=e.child}return e;case 5:return Qm(e),t===null&&Nc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Cc(r,i)?o=null:s!==null&&Cc(r,s)&&(e.flags|=32),xg(t,e),ze(t,e,o,n),e.child;case 6:return t===null&&Nc(e),null;case 13:return Cg(t,e,n);case 4:return Hu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ti(e,null,r,n):ze(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),tf(t,e,r,i,n);case 7:return ze(t,e,e.pendingProps,n),e.child;case 8:return ze(t,e,e.pendingProps.children,n),e.child;case 12:return ze(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ie(Yo,r._currentValue),r._currentValue=o,s!==null)if(It(s.value,o)){if(s.children===i.children&&!Qe.current){e=Zt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Kt(-1,n&-n),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Rc(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Rc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ze(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Br(e,n),i=dt(i),r=r(i),e.flags|=1,ze(t,e,r,n),e.child;case 14:return r=e.type,i=yt(r,e.pendingProps),i=yt(r.type,i),nf(t,e,r,i,n);case 15:return vg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),Io(t,e),e.tag=1,Je(r)?(t=!0,Ho(e)):t=!1,Br(e,n),gg(e,r,i),Pc(e,r,i,n),Dc(null,e,r,!0,t,n);case 19:return kg(t,e,n);case 22:return wg(t,e,n)}throw Error(b(156,e.tag))};function Ug(t,e){return fm(t,e)}function D1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(t,e,n,r){return new D1(t,e,n,r)}function sd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function L1(t){if(typeof t=="function")return sd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ku)return 11;if(t===Su)return 14}return 2}function Nn(t,e){var n=t.alternate;return n===null?(n=at(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ro(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case kr:return ir(n.children,i,s,e);case Cu:o=8,i|=8;break;case tc:return t=at(12,n,e,i|2),t.elementType=tc,t.lanes=s,t;case nc:return t=at(13,n,e,i),t.elementType=nc,t.lanes=s,t;case rc:return t=at(19,n,e,i),t.elementType=rc,t.lanes=s,t;case Qp:return Wl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Kp:o=10;break e;case qp:o=9;break e;case ku:o=11;break e;case Su:o=14;break e;case un:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=at(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ir(t,e,n,r){return t=at(7,t,r,e),t.lanes=n,t}function Wl(t,e,n,r){return t=at(22,t,r,e),t.elementType=Qp,t.lanes=n,t.stateNode={isHidden:!1},t}function Oa(t,e,n){return t=at(6,t,null,e),t.lanes=n,t}function Da(t,e,n){return e=at(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function M1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pa(0),this.expirationTimes=pa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function od(t,e,n,r,i,s,o,l,a){return t=new M1(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=at(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vu(s),t}function j1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Wg(t){if(!t)return jn;t=t._reactInternals;e:{if(_r(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Je(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(Je(n))return Wm(t,n,e)}return e}function Bg(t,e,n,r,i,s,o,l,a){return t=od(n,r,!0,t,i,s,o,l,a),t.context=Wg(null),n=t.current,r=We(),i=Tn(n),s=Kt(r,i),s.callback=e??null,Sn(n,s,i),t.current.lanes=i,Os(t,i,r),Xe(t,r),t}function Bl(t,e,n,r){var i=e.current,s=We(),o=Tn(i);return n=Wg(n),e.context===null?e.context=n:e.pendingContext=n,e=Kt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Sn(i,e,o),t!==null&&(kt(t,i,o,s),Co(t,i,o)),o}function rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ld(t,e){mf(t,e),(t=t.alternate)&&mf(t,e)}function F1(){return null}var Vg=typeof reportError=="function"?reportError:function(t){console.error(t)};function ad(t){this._internalRoot=t}Vl.prototype.render=ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Bl(t,e,null,null)};Vl.prototype.unmount=ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;dr(function(){Bl(null,t,null,null)}),e[Jt]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var e=wm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hn.length&&e!==0&&e<hn[n].priority;n++);hn.splice(n,0,t),n===0&&Em(t)}};function cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gf(){}function z1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=rl(o);s.call(c)}}var o=Bg(e,r,t,0,null,!1,!1,"",gf);return t._reactRootContainer=o,t[Jt]=o.current,hs(t.nodeType===8?t.parentNode:t),dr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=rl(a);l.call(c)}}var a=od(t,0,!1,null,null,!1,!1,"",gf);return t._reactRootContainer=a,t[Jt]=a.current,hs(t.nodeType===8?t.parentNode:t),dr(function(){Bl(e,a,n,r)}),a}function $l(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=rl(o);l.call(a)}}Bl(e,o,t,i)}else o=z1(n,e,t,i,r);return rl(o)}_m=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zi(e.pendingLanes);n!==0&&(Nu(e,n|1),Xe(e,ge()),!(K&6)&&(ii=ge()+500,Vn()))}break;case 13:dr(function(){var r=Xt(t,1);if(r!==null){var i=We();kt(r,t,1,i)}}),ld(t,1)}};Ru=function(t){if(t.tag===13){var e=Xt(t,134217728);if(e!==null){var n=We();kt(e,t,134217728,n)}ld(t,134217728)}};vm=function(t){if(t.tag===13){var e=Tn(t),n=Xt(t,e);if(n!==null){var r=We();kt(n,t,e,r)}ld(t,e)}};wm=function(){return X};xm=function(t,e){var n=X;try{return X=t,e()}finally{X=n}};fc=function(t,e,n){switch(e){case"input":if(oc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ll(r);if(!i)throw Error(b(90));Xp(r),oc(r,i)}}}break;case"textarea":em(t,n);break;case"select":e=n.value,e!=null&&Fr(t,!!n.multiple,e,!1)}};lm=nd;am=dr;var U1={usingClientEntryPoint:!1,Events:[Ls,Nr,Ll,sm,om,nd]},Ai={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},W1={bundleType:Ai.bundleType,version:Ai.version,rendererPackageName:Ai.rendererPackageName,rendererConfig:Ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ai.findFiberByHostInstance||F1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{Pl=fo.inject(W1),Pt=fo}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U1;it.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cd(e))throw Error(b(200));return j1(t,e,null,n)};it.createRoot=function(t,e){if(!cd(t))throw Error(b(299));var n=!1,r="",i=Vg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=od(t,1,!1,null,null,n,!1,r,i),t[Jt]=e.current,hs(t.nodeType===8?t.parentNode:t),new ad(e)};it.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=dm(e),t=t===null?null:t.stateNode,t};it.flushSync=function(t){return dr(t)};it.hydrate=function(t,e,n){if(!Hl(e))throw Error(b(200));return $l(null,t,e,!0,n)};it.hydrateRoot=function(t,e,n){if(!cd(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Vg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Bg(e,null,t,1,n??null,i,!1,s,o),t[Jt]=e.current,hs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Vl(e)};it.render=function(t,e,n){if(!Hl(e))throw Error(b(200));return $l(null,t,e,!1,n)};it.unmountComponentAtNode=function(t){if(!Hl(t))throw Error(b(40));return t._reactRootContainer?(dr(function(){$l(null,null,t,!1,function(){t._reactRootContainer=null,t[Jt]=null})}),!0):!1};it.unstable_batchedUpdates=nd;it.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hl(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return $l(t,e,n,!1,r)};it.version="18.3.1-next-f1338f8080-20240426";function Hg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hg)}catch(t){console.error(t)}}Hg(),Hp.exports=it;var B1=Hp.exports,yf=B1;Za.createRoot=yf.createRoot,Za.hydrateRoot=yf.hydrateRoot;const ud=[{歌唱:"蓮ノ空女学院スクールアイドルクラブ",センター:"藤島 慈",作中時期:"102期",曲名:"On your mark(102期Ver.)",コスト:"9",効果1:`【ユニーク】
次の相手のターン、相手のボルテージが3になる`,"効果1 タイプ":"【ユニーク】",効果2:`【ユニゾン】
このターン中、センターが「乙宗 梢」「夕霧 綴理」「藤島 慈」いずれかのカードを使用する度にコストを2減らす`,"効果2 タイプ":"【ユニゾン】",パワー:"3",シールド:"3",ヒール:"3",ダメージ:""},{歌唱:"蓮ノ空女学院スクールアイドルクラブ",センター:"村野 さやか",作中時期:"103期",曲名:"Dream Believers",コスト:"3",効果1:`【アンコール】
ターン終了時、「Dream Believers」をドローする`,"効果1 タイプ":"【アンコール】",効果2:"","効果2 タイプ":"",パワー:"1",シールド:"2",ヒール:"",ダメージ:""},{歌唱:"蓮ノ空女学院スクールアイドルクラブ",センター:"大沢 瑠璃乃",作中時期:"103期",曲名:"On your mark",コスト:"2",効果1:`【ハンド】
カードを1枚引く`,"効果1 タイプ":"【ハンド】",効果2:"","効果2 タイプ":"",パワー:"1",シールド:"",ヒール:"",ダメージ:""},{歌唱:"蓮ノ空女学院スクールアイドルクラブ",センター:"乙宗 梢",作中時期:"103期",曲名:"永遠のEuphoria",コスト:"5",効果1:`【ユニーク】
付与されているシールドの分相手にダメージを与え、シールドを0にする`,"効果1 タイプ":"【ユニーク】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"",ヒール:"2",ダメージ:""},{歌唱:"蓮ノ空女学院スクールアイドルクラブ",センター:"乙宗 梢",作中時期:"103期",曲名:"DEEPNESS",コスト:"5",効果1:`【ユニーク】
次に使用するカードのコストを3下げる`,"効果1 タイプ":"【ユニーク】",効果2:"","効果2 タイプ":"",パワー:"5",シールド:"",ヒール:"",ダメージ:""},{歌唱:"蓮ノ空女学院スクールアイドルクラブ",センター:"藤島 慈",作中時期:"103期",曲名:"夏めきペイン",コスト:"4",効果1:`【ボルテージ】
ボルテージが7以上の時、相手に3ダメージ与える`,"効果1 タイプ":"【ボルテージ】",効果2:`【ユニーク】
このカードを使用した時、ターンエンドする`,"効果2 タイプ":"【ユニーク】",パワー:"2",シールド:"",ヒール:"3",ダメージ:""},{歌唱:"蓮ノ空女学院スクールアイドルクラブ",センター:"藤島 慈",作中時期:"103期",曲名:"Yup! Yup! Yup!",コスト:"4",効果1:`【ボルテージ】
ボルテージを2回復する`,"効果1 タイプ":"【ボルテージ】",効果2:`【ボルテージ】
ターン終了時、残りボルテージの数だけカードを引く`,"効果2 タイプ":"【ボルテージ】",パワー:"",シールド:"",ヒール:"2",ダメージ:""},{歌唱:"蓮ノ空女学院スクールアイドルクラブ",センター:"日野下 花帆",作中時期:"103期",曲名:"明日の空の僕たちへ",コスト:"3",効果1:`【ユニゾン】
このターン中、「Legato」を使用している場合、カードを2枚引く`,"効果1 タイプ":"【ユニゾン】",効果2:"","効果2 タイプ":"",パワー:"1",シールド:"3",ヒール:"",ダメージ:""},{歌唱:"蓮ノ空女学院スクールアイドルクラブ",センター:"藤島 慈",作中時期:"103期",曲名:"Legato",コスト:"5",効果1:`【ハンド】
カードを2枚引く`,"効果1 タイプ":"【ハンド】",効果2:`【ダメージ】
体力が5以下の時、相手に10ダメージ`,"効果2 タイプ":"【ダメージ】",パワー:"",シールド:"",ヒール:"2",ダメージ:"3"},{歌唱:"蓮ノ空女学院スクールアイドルクラブ",センター:"大沢 瑠璃乃",作中時期:"103期",曲名:"Trick & Cute",コスト:"3",効果1:`【ハンド】
手札が4枚以下の時、相手に2ダメージ与える`,"効果1 タイプ":"【ハンド】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"2",ヒール:"",ダメージ:""},{歌唱:"蓮ノ空女学院スクールアイドルクラブ",センター:"夕霧 綴理",作中時期:"103期",曲名:"ツバサ・ラ・リベルテ",コスト:"4",効果1:`【ダメージ】
このターン中、自分へのダメージが0になる`,"効果1 タイプ":"【ダメージ】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"",ヒール:"",ダメージ:""},{歌唱:"スリーズブーケ＆DOLLCHESTRA＆みらくらぱーく！",センター:"日野下 花帆",作中時期:"103期",曲名:"Link to the FUTURE",コスト:"6",効果1:`【ハンド】
このカードのコストは、ターン中に使用したカードの枚数分小さくなる
※2より小さくならない`,"効果1 タイプ":"【ハンド】",効果2:"","効果2 タイプ":"",パワー:"1",シールド:"2",ヒール:"2",ダメージ:""},{歌唱:"蓮ノ空女学院スクールアイドルクラブ",センター:"藤島 慈",作中時期:"103期",曲名:"抱きしめる花びら",コスト:"3",効果1:`【ユニーク】
このターン中、次に使用するシールドかヒール効果を2倍にする`,"効果1 タイプ":"【ユニーク】",効果2:`【ダメージ】
体力が10以下の時、「Legato」を引く`,"効果2 タイプ":"【ダメージ】",パワー:"",シールド:"",ヒール:"",ダメージ:"3"},{歌唱:"蓮ノ空女学院スクールアイドルクラブ",センター:"日野下 花帆",作中時期:"103期",曲名:"STEP UP!",コスト:"1",効果1:`【ハンド】
手札をランダムに1枚捨てる`,"効果1 タイプ":"【ハンド】",効果2:`【ユニーク】
SPを回復する`,"効果2 タイプ":"【ユニーク】",パワー:"",シールド:"",ヒール:"",ダメージ:"3"},{歌唱:"スリーズブーケ",センター:"日野下 花帆",作中時期:"103期",曲名:"水彩世界",コスト:"4",効果1:`【ハンド】
カードを1枚引く`,"効果1 タイプ":"【ハンド】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"",ヒール:"3",ダメージ:""},{歌唱:"スリーズブーケ",センター:"乙宗 梢",作中時期:"103期",曲名:"Reflection in the mirror",コスト:"3",効果1:`【ハンド】
手札をランダムに1枚捨てる`,"効果1 タイプ":"【ハンド】",効果2:"","効果2 タイプ":"",パワー:"2",シールド:"3",ヒール:"",ダメージ:""},{歌唱:"スリーズブーケ",センター:"日野下 花帆",作中時期:"103期",曲名:"フォーチュンムービー",コスト:"2",効果1:`【ユニゾン】
このターン中、センターが「乙宗 梢」のカードを使用する度にカードを1枚引く`,"効果1 タイプ":"【ユニゾン】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"",ヒール:"",ダメージ:"3"},{歌唱:"スリーズブーケ",センター:"乙宗 梢",作中時期:"103期",曲名:"Mix Shake!!",コスト:"6",効果1:`【ハンド】
手札が5枚以上の時、コストを3にする`,"効果1 タイプ":"【ハンド】",効果2:"","効果2 タイプ":"",パワー:"4",シールド:"1",ヒール:"",ダメージ:""},{歌唱:"スリーズブーケ",センター:"日野下 花帆",作中時期:"103期",曲名:"Holiday∞Holiday",コスト:"3",効果1:`【ハンド】
手札が6枚以上の時、シールドを3付与する`,"効果1 タイプ":"【ハンド】",効果2:"","効果2 タイプ":"",パワー:"1",シールド:"",ヒール:"1",ダメージ:""},{歌唱:"スリーズブーケ",センター:"乙宗 梢",作中時期:"103期",曲名:"謳歌爛漫",コスト:"6",効果1:`【ハンド】
カードを1枚引く`,"効果1 タイプ":"【ハンド】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"",ヒール:"6",ダメージ:""},{歌唱:"スリーズブーケ",センター:"乙宗 梢",作中時期:"103期",曲名:"眩耀夜行",コスト:"4",効果1:`【ハンド】
手札をランダムに1枚捨てる`,"効果1 タイプ":"【ハンド】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"4",ヒール:"",ダメージ:""},{歌唱:"スリーズブーケ",センター:"乙宗 梢",作中時期:"103期",曲名:"Kawaii no Susume",コスト:"4",効果1:`【ユニゾン】
このターン中、ユニットが「スリーズブーケ」のカードを使用している場合、コストを2にする`,"効果1 タイプ":"【ユニゾン】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"2",ヒール:"2",ダメージ:""},{歌唱:"スリーズブーケ",センター:"日野下 花帆",作中時期:"103期",曲名:"残陽",コスト:"2",効果1:`【ハンド】
手札が6枚以上の時、3ヒールする`,"効果1 タイプ":"【ハンド】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"3",ヒール:"",ダメージ:"4"},{歌唱:"スリーズブーケ",センター:"乙宗 梢",作中時期:"103期",曲名:"Dear my future",コスト:"3",効果1:`【ハンド】
捨札からコスト4以下のカードを使用する`,"効果1 タイプ":"【ハンド】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"",ヒール:"",ダメージ:"1"},{歌唱:"スリーズブーケ",センター:"乙宗 梢",作中時期:"103期",曲名:"素顔のピクセル",コスト:"5",効果1:`【ボルテージ】
ボルテージを3回復する`,"効果1 タイプ":"【ボルテージ】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"4",ヒール:"",ダメージ:""},{歌唱:"スリーズブーケ",センター:"乙宗 梢",作中時期:"103期",曲名:"シュガーメルト",コスト:"1",効果1:`【ハンド】
手札をランダムに1枚捨てる`,"効果1 タイプ":"【ハンド】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"2",ヒール:"",ダメージ:"2"},{歌唱:"スリーズブーケ",センター:"乙宗 梢",作中時期:"103期",曲名:"千変万華",コスト:"6",効果1:`【ハンド】
カードを2枚引く`,"効果1 タイプ":"【ハンド】",効果2:"","効果2 タイプ":"",パワー:"3",シールド:"",ヒール:"2",ダメージ:""},{歌唱:"スリーズブーケ",センター:"日野下 花帆",作中時期:"103期",曲名:"Special Thanks",コスト:"2",効果1:`【ハンド】
カードを1枚引く`,"効果1 タイプ":"【ハンド】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"",ヒール:"1",ダメージ:""},{歌唱:"DOLLCHESTRA",センター:"夕霧 綴理",作中時期:"103期",曲名:"AWOKE",コスト:"3",効果1:`【ダメージ】
体力が10以下の時、相手に1ダメージ与える`,"効果1 タイプ":"【ダメージ】",効果2:`【ダメージ】
体力が5以下の時、相手に2ダメージ与える`,"効果2 タイプ":"【ダメージ】",パワー:"1",シールド:"",ヒール:"",ダメージ:"1"},{歌唱:"DOLLCHESTRA",センター:"村野 さやか",作中時期:"103期",曲名:"Sparkly Spot",コスト:"2",効果1:`【ダメージ】
このターン中、既にダメージを受けている場合、シールドを3付与する`,"効果1 タイプ":"【ダメージ】",効果2:"","効果2 タイプ":"",パワー:"1",シールド:"",ヒール:"",ダメージ:"4"},{歌唱:"DOLLCHESTRA",センター:"夕霧 綴理",作中時期:"103期",曲名:"ツキマカセ",コスト:"4",効果1:`【ハンド】
手札をランダムに1枚捨てる`,"効果1 タイプ":"【ハンド】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"",ヒール:"6",ダメージ:""},{歌唱:"DOLLCHESTRA",センター:"村野 さやか",作中時期:"103期",曲名:"希望的プリズム",コスト:"2",効果1:`【ダメージ】
このターン中、ダメージを受けるたびに相手に1ダメージ`,"効果1 タイプ":"【ダメージ】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"",ヒール:"",ダメージ:""},{歌唱:"DOLLCHESTRA",センター:"夕霧 綴理",作中時期:"103期",曲名:"スケイプゴート",コスト:"3",効果1:`【ユニーク】
次に使用するカードのパワーが2倍になる`,"効果1 タイプ":"【ユニーク】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"2",ヒール:"",ダメージ:"5"},{歌唱:"DOLLCHESTRA",センター:"村野 さやか",作中時期:"103期",曲名:"Tragic Drops",コスト:"4",効果1:`【ダメージ】
このターン中、既にダメージを5以上受けている場合、2ヒールする`,"効果1 タイプ":"【ダメージ】",効果2:`【ダメージ】
このターン中、既にダメージを7以上受けている場合、相手は次のターンドローできない`,"効果2 タイプ":"【ダメージ】",パワー:"2",シールド:"",ヒール:"",ダメージ:"2"},{歌唱:"DOLLCHESTRA",センター:"夕霧 綴理",作中時期:"103期",曲名:"Mirage Voyage",コスト:"3",効果1:`【ダメージ】
このターン中、既にダメージを受けている場合、カードを1枚引く`,"効果1 タイプ":"【ダメージ】",効果2:"","効果2 タイプ":"",パワー:"1",シールド:"",ヒール:"",ダメージ:""},{歌唱:"DOLLCHESTRA",センター:"夕霧 綴理",作中時期:"103期",曲名:"ジブンダイアリー",コスト:"2",効果1:`【ハンド】
カードを1枚引く`,"効果1 タイプ":"【ハンド】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"1",ヒール:"",ダメージ:""},{歌唱:"DOLLCHESTRA",センター:"村野 さやか",作中時期:"103期",曲名:"青春の輪郭",コスト:"5",効果1:`【ダメージ】
このターン中、既にダメージを受けている場合、コストを2にする`,"効果1 タイプ":"【ダメージ】",効果2:"","効果2 タイプ":"",パワー:"3",シールド:"",ヒール:"",ダメージ:"1"},{歌唱:"DOLLCHESTRA",センター:"夕霧 綴理",作中時期:"103期",曲名:"パラレルダンサー",コスト:"4",効果1:`【ダメージ】
このターン中、既にダメージを受けている場合、相手のシールドを0にする`,"効果1 タイプ":"【ダメージ】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"1",ヒール:"",ダメージ:"3"},{歌唱:"DOLLCHESTRA",センター:"村野 さやか",作中時期:"103期",曲名:"Take It Over",コスト:"3",効果1:`【ユニゾン】
このターン中、ユニットが「DOLLCHESTRA」のカードを使用していた場合、相手に2ダメージ与える`,"効果1 タイプ":"【ユニゾン】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"",ヒール:"2",ダメージ:""},{歌唱:"DOLLCHESTRA",センター:"夕霧 綴理",作中時期:"103期",曲名:"飴色",コスト:"1",効果1:`【ダメージ】
このターン中、受けるダメージを2倍にする`,"効果1 タイプ":"【ダメージ】",効果2:`【オープニング】
このターンの最初に使用した場合、3ヒールする`,"効果2 タイプ":"【オープニング】",パワー:"",シールド:"",ヒール:"",ダメージ:""},{歌唱:"DOLLCHESTRA",センター:"夕霧 綴理",作中時期:"103期",曲名:"KNOT",コスト:"6",効果1:`【ダメージ】
このターン中、ダメージを受けた回数の分コストを減らす`,"効果1 タイプ":"【ダメージ】",効果2:"","効果2 タイプ":"",パワー:"5",シールド:"",ヒール:"",ダメージ:"2"},{歌唱:"DOLLCHESTRA",センター:"夕霧 綴理",作中時期:"103期",曲名:"青とシャボン",コスト:"2",効果1:`【ダメージ】
このターン中、ダメージを受けた回数の分ヒールする`,"効果1 タイプ":"【ダメージ】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"1",ヒール:"",ダメージ:""},{歌唱:"みらくらぱーく！",センター:"大沢 瑠璃乃",作中時期:"103期",曲名:"ド！ド！ド！",コスト:"2",効果1:`【ユニゾン】
手札からユニットが「みらくらぱーく！」のカードをランダムに1枚選び、コストを1下げる`,"効果1 タイプ":"【ユニゾン】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"1",ヒール:"",ダメージ:""},{歌唱:"みらくらぱーく！",センター:"大沢 瑠璃乃",作中時期:"103期",曲名:"ココン東西",コスト:"2",効果1:`【ダメージ】
このターン中、使用したカードの数だけ相手にダメージを与える`,"効果1 タイプ":"【ダメージ】",効果2:"","効果2 タイプ":"",パワー:"1",シールド:"",ヒール:"",ダメージ:""},{歌唱:"みらくらぱーく！",センター:"藤島 慈",作中時期:"103期",曲名:"ハクチューアラモード",コスト:"2",効果1:`【ボルテージ】
ボルテージが4以下の時、相手に1ダメージ与える`,"効果1 タイプ":"【ボルテージ】",効果2:`【ボルテージ】
ボルテージが3以下の時、カードを1枚引く`,"効果2 タイプ":"【ボルテージ】",パワー:"1",シールド:"",ヒール:"",ダメージ:"1"},{歌唱:"みらくらぱーく！",センター:"藤島 慈",作中時期:"103期",曲名:"アイデンティティ",コスト:"3",効果1:`【ボルテージ】
ボルテージが4以上の時、相手に2ダメージ与える`,"効果1 タイプ":"【ボルテージ】",効果2:`【ハンド】
カードを1枚引く`,"効果2 タイプ":"【ハンド】",パワー:"1",シールド:"",ヒール:"1",ダメージ:""},{歌唱:"みらくらぱーく！",センター:"藤島 慈",作中時期:"103期",曲名:"天才なのかもしれない",コスト:"2",効果1:`【ボルテージ】
ボルテージを1回復する`,"効果1 タイプ":"【ボルテージ】",効果2:"","効果2 タイプ":"",パワー:"1",シールド:"1",ヒール:"",ダメージ:""},{歌唱:"みらくらぱーく！",センター:"藤島 慈",作中時期:"103期",曲名:"ノンフィクションヒーローショー",コスト:"2",効果1:`【ボルテージ】
ボルテージが5以上の時、相手に2ダメージ与える`,"効果1 タイプ":"【ボルテージ】",効果2:"","効果2 タイプ":"",パワー:"1",シールド:"",ヒール:"",ダメージ:""},{歌唱:"みらくらぱーく！",センター:"大沢 瑠璃乃",作中時期:"103期",曲名:"ミルク",コスト:"3",効果1:`【オープニング】
このターンの最初に使用した時、2ヒールする`,"効果1 タイプ":"【オープニング】",効果2:"","効果2 タイプ":"",パワー:"",シールド:"2",ヒール:"",ダメージ:""},{歌唱:"みらくらぱーく！",センター:"藤島 慈",作中時期:"103期",曲名:"以心☆電信",コスト:"3",効果1:`【ボルテージ】
ボルテージが4以下の時、このカードの効果を2倍にする`,"効果1 タイプ":"【ボルテージ】",効果2:`【アンコール】
ターン終了時、「以心☆電信」をドローする`,"効果2 タイプ":"【アンコール】",パワー:"2",シールド:"1",ヒール:"",ダメージ:""},{歌唱:"みらくらぱーく！",センター:"大沢 瑠璃乃",作中時期:"103期",曲名:"BANG YOU グラビティ",コスト:"4",効果1:`【ユニゾン】
このターン中、センターが「藤島 慈」のカードを使用する度にボルテージを1回復する`,"効果1 タイプ":"【ユニゾン】",効果2:`【ハンド】
センターが「藤島 慈」のカードを1枚引く`,"効果2 タイプ":"【ハンド】",パワー:"",シールド:"2",ヒール:"",ダメージ:""},{歌唱:"みらくらぱーく！",センター:"大沢 瑠璃乃",作中時期:"103期",曲名:"マハラジャンボリー",コスト:"1",効果1:`【アンコール】
ターン終了時、「マハラジャンボリー」をドローする`,"効果1 タイプ":"【アンコール】",効果2:"","効果2 タイプ":"",パワー:"1",シールド:"",ヒール:"",ダメージ:"1"},{歌唱:"るりのとゆかいなつづりたち",センター:"大沢 瑠璃乃",作中時期:"103期",曲名:"Colorfulness",コスト:"4",効果1:`【ハンド】
このターン中、カードを使用する度にシールドを1付与する`,"効果1 タイプ":"【ハンド】",効果2:`【アンコール】
このターンの最後に使用した時、3ヒールする`,"効果2 タイプ":"【アンコール】",パワー:"",シールド:"3",ヒール:"",ダメージ:""},{歌唱:"かほめぐ♡じぇらーと",センター:"藤島 慈",作中時期:"103期",曲名:"ハッピー至上主義！",コスト:"3",効果1:`【ボルテージ】
ボルテージが5以上の時、相手に2ダメージ与える`,"効果1 タイプ":"【ボルテージ】",効果2:`【ハンド】
手札が6枚以上の時、相手に2ダメージ与える`,"効果2 タイプ":"【ハンド】",パワー:"1",シールド:"",ヒール:"",ダメージ:""},{歌唱:"蓮ノ休日",センター:"村野 さやか",作中時期:"103期",曲名:"Pleasure Feather",コスト:"5",効果1:`【ダメージ】
このターン中、既にダメージを受けている場合、カードを2枚引く`,"効果1 タイプ":"【ユニゾン】",効果2:`【ユニゾン】
このターン中、センターが「乙宗 梢」「村野 さやか」いずれかのカードを使用している場合、シールドを6付与する`,"効果2 タイプ":"【ユニゾン】",パワー:"",シールド:"1",ヒール:"",ダメージ:"1"},{歌唱:"村野 さやか",センター:"村野 さやか",作中時期:"103期",曲名:"Runway",コスト:"4",効果1:`【ハンド】
ユニットが「DOLLCHESTRA」のカードを2枚引く`,"効果1 タイプ":"【ハンド】",効果2:`【ユニゾン】
このターン中、センターが「村野さやか」のカードを使用したとき、相手に1ダメージ`,"効果2 タイプ":"【ユニゾン】",パワー:"",シールド:"",ヒール:"",ダメージ:"2"}],$g=ud;function V1(t){return $g.filter(e=>{const n=e.歌唱;return n==="蓮ノ空女学院スクールアイドルクラブ"||n==="スリーズブーケ＆DOLLCHESTRA＆みらくらぱーく！"||n==="るりのとゆかいなつづりたち"||n==="かほめぐ♡じぇらーと"||n==="蓮ノ休日"||n===t||e.曲名==="Runway"&&t==="DOLLCHESTRA"?!0:e.曲名==="Runway"&&t!=="DOLLCHESTRA"?!1:n==="村野 さやか"&&e.曲名!=="Runway"})}function Xi(t){const e=[];for(const n of t){const r=$g.find(i=>i.曲名===n);r&&e.push({...r,id:Math.random().toString(36).substring(2,11)})}return e.sort(()=>Math.random()-.5)}const Gg={スリーズブーケ:["On your mark","On your mark","On your mark","Dream Believers","Dream Believers","STEP UP!","STEP UP!","STEP UP!","Reflection in the mirror","Reflection in the mirror","Reflection in the mirror","フォーチュンムービー","フォーチュンムービー","フォーチュンムービー","Special Thanks","Special Thanks","Special Thanks","シュガーメルト","シュガーメルト","シュガーメルト","千変万華","千変万華","残陽","残陽","水彩世界","水彩世界","Holiday∞Holiday","Holiday∞Holiday","Dear my future","Dear my future"],DOLLCHESTRA:["On your mark","On your mark","On your mark","STEP UP!","STEP UP!","STEP UP!","Dream Believers","Dream Believers","AWOKE","AWOKE","AWOKE","Sparkly Spot","Sparkly Spot","Sparkly Spot","ジブンダイアリー","ジブンダイアリー","ジブンダイアリー","飴色","飴色","飴色","Mirage Voyage","Mirage Voyage","スケイプゴート","スケイプゴート","Take It Over","Take It Over","青とシャボン","青とシャボン","希望的プリズム","希望的プリズム"],"みらくらぱーく！":["On your mark","On your mark","On your mark","STEP UP!","STEP UP!","STEP UP!","Dream Believers","Dream Believers","ド！ド！ド！","ド！ド！ド！","ド！ド！ド！","ココン東西","ココン東西","ハクチューアラモード","ハクチューアラモード","ハクチューアラモード","アイデンティティ","アイデンティティ","アイデンティティ","天才なのかもしれない","天才なのかもしれない","天才なのかもしれない","ノンフィクションヒーローショー","ノンフィクションヒーローショー","マハラジャンボリー","マハラジャンボリー","マハラジャンボリー","以心☆電信","以心☆電信","以心☆電信"]};function il(){const t=["スリーズブーケ","DOLLCHESTRA","みらくらぱーく！"],e=t[Math.floor(Math.random()*t.length)],n=Gg[e];return{deck:Xi(n),unit:e}}function sl(t,e){return{name:"",baseUnit:t,originalDeckNames:e.map(n=>n.曲名),hp:30,maxHp:30,shield:0,maxVoltage:0,currentVoltage:0,specialUsed:!1,deck:e.slice(3),hand:e.slice(0,3),discard:[],buffs:{damageImmune:!1,nextCardCostDown:0,turnCardsPlayed:[],tookDamageCount:0}}}function Yg(t,e){const n=t||il(),r=e||il();return{turn:1,isPlayerTurn:!0,isCoinFlipPhase:!0,turnBanner:"COIN FLIP...",setlist:[],enemyPlayedCard:null,isAnimating:!1,battleResult:null,player:sl(n.unit,n.deck),enemy:sl(r.unit,r.deck),animations:{playerShake:!1,enemyShake:!1}}}function H1(t,e){return{turn:1,isPlayerTurn:!0,isCoinFlipPhase:!0,turnBanner:"COIN FLIP...",setlist:[],enemyPlayedCard:null,isAnimating:!1,battleResult:null,player:sl(t.unit,t.deck),enemy:sl(e.unit,e.deck),animations:{playerShake:!1,enemyShake:!1}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=function(t,e){if(!t)throw gi(e)},gi=function(t){return new Error("Firebase Database ("+Kg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},dd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let h=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(h=64)),r.push(n[f],n[p],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new G1;const h=s<<2|l>>4;if(r.push(h),c!==64){const _=l<<4&240|c>>2;if(r.push(_),p!==64){const y=c<<6&192|p;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class G1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qg=function(t){const e=qg(t);return dd.encodeByteArray(e,!0)},ol=function(t){return Qg(t).replace(/\./g,"")},ll=function(t){try{return dd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(t){return Jg(void 0,t)}function Jg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!K1(n)||(t[n]=Jg(t[n],e[n]));return t}function K1(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=()=>q1().__FIREBASE_DEFAULTS__,J1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},X1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ll(t[1]);return e&&JSON.parse(e)},hd=()=>{try{return Q1()||J1()||X1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xg=t=>{var e,n;return(n=(e=hd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Z1=t=>{const e=Xg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Zg=()=>{var t;return(t=hd())===null||t===void 0?void 0:t.config},ey=t=>{var e;return(e=hd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[ol(JSON.stringify(n)),ol(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function tw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ty(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rw(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ny(){return Kg.NODE_ADMIN===!0}function iw(){try{return typeof indexedDB=="object"}catch{return!1}}function sw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="FirebaseError";class Hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ow,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fs.prototype.create)}}class Fs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?lw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Hn(i,l,r)}}function lw(t,e){return t.replace(aw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const aw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(t){return JSON.parse(t)}function we(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=xs(ll(s[0])||""),n=xs(ll(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},cw=function(t){const e=ry(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},uw=function(t){const e=ry(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function si(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Gc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function al(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function cl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(_f(s)&&_f(o)){if(!cl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _f(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Bi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)r[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const h=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,f;for(let p=0;p<80;p++){p<40?p<20?(c=l^s&(o^l),f=1518500249):(c=s^o^l,f=1859775393):p<60?(c=s&o|l&(s|o),f=2400959708):(c=s^o^l,f=3395469782);const h=(i<<5|i>>>27)+c+a+f+r[p]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function hw(t,e){const n=new fw(t,e);return n.subscribe.bind(n)}class fw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=La),i.error===void 0&&(i.error=La),i.complete===void 0&&(i.complete=La);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function La(){}function Gl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,A(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Yl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t){return t&&t._delegate?t._delegate:t}class hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new js;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_w(e))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qn){return this.instances.has(e)}getOptions(e=Qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qn){return this.component?this.component.multipleInstances?e:Qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yw(t){return t===Qn?void 0:t}function _w(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const ww={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},xw=ee.INFO,Ew={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Cw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ew[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pd{constructor(e){this.name=e,this._logLevel=xw,this._logHandler=Cw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ww[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const kw=(t,e)=>e.some(n=>t instanceof n);let vf,wf;function Sw(){return vf||(vf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Iw(){return wf||(wf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iy=new WeakMap,Yc=new WeakMap,sy=new WeakMap,Ma=new WeakMap,md=new WeakMap;function Tw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&iy.set(n,t)}).catch(()=>{}),md.set(e,t),e}function Nw(t){if(Yc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Yc.set(t,e)}let Kc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rw(t){Kc=t(Kc)}function bw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ja(this),e,...n);return sy.set(r,e.sort?e.sort():[e]),Rn(r)}:Iw().includes(t)?function(...e){return t.apply(ja(this),e),Rn(iy.get(this))}:function(...e){return Rn(t.apply(ja(this),e))}}function Pw(t){return typeof t=="function"?bw(t):(t instanceof IDBTransaction&&Nw(t),kw(t,Sw())?new Proxy(t,Kc):t)}function Rn(t){if(t instanceof IDBRequest)return Tw(t);if(Ma.has(t))return Ma.get(t);const e=Pw(t);return e!==t&&(Ma.set(t,e),md.set(e,t)),e}const ja=t=>md.get(t);function Aw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Rn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Rn(o.result),a.oldVersion,a.newVersion,Rn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Ow=["get","getKey","getAll","getAllKeys","count"],Dw=["put","add","delete","clear"],Fa=new Map;function xf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fa.get(e))return Fa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Dw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ow.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Fa.set(e,s),s}Rw(t=>({...t,get:(e,n,r)=>xf(e,n)||t.get(e,n,r),has:(e,n)=>!!xf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Mw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qc="@firebase/app",Ef="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new pd("@firebase/app"),jw="@firebase/app-compat",Fw="@firebase/analytics-compat",zw="@firebase/analytics",Uw="@firebase/app-check-compat",Ww="@firebase/app-check",Bw="@firebase/auth",Vw="@firebase/auth-compat",Hw="@firebase/database",$w="@firebase/data-connect",Gw="@firebase/database-compat",Yw="@firebase/functions",Kw="@firebase/functions-compat",qw="@firebase/installations",Qw="@firebase/installations-compat",Jw="@firebase/messaging",Xw="@firebase/messaging-compat",Zw="@firebase/performance",ex="@firebase/performance-compat",tx="@firebase/remote-config",nx="@firebase/remote-config-compat",rx="@firebase/storage",ix="@firebase/storage-compat",sx="@firebase/firestore",ox="@firebase/vertexai-preview",lx="@firebase/firestore-compat",ax="firebase",cx="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="[DEFAULT]",ux={[qc]:"fire-core",[jw]:"fire-core-compat",[zw]:"fire-analytics",[Fw]:"fire-analytics-compat",[Ww]:"fire-app-check",[Uw]:"fire-app-check-compat",[Bw]:"fire-auth",[Vw]:"fire-auth-compat",[Hw]:"fire-rtdb",[$w]:"fire-data-connect",[Gw]:"fire-rtdb-compat",[Yw]:"fire-fn",[Kw]:"fire-fn-compat",[qw]:"fire-iid",[Qw]:"fire-iid-compat",[Jw]:"fire-fcm",[Xw]:"fire-fcm-compat",[Zw]:"fire-perf",[ex]:"fire-perf-compat",[tx]:"fire-rc",[nx]:"fire-rc-compat",[rx]:"fire-gcs",[ix]:"fire-gcs-compat",[sx]:"fire-fst",[lx]:"fire-fst-compat",[ox]:"fire-vertex","fire-js":"fire-js",[ax]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=new Map,dx=new Map,Jc=new Map;function Cf(t,e){try{t.container.addComponent(e)}catch(n){en.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function oi(t){const e=t.name;if(Jc.has(e))return en.debug(`There were multiple attempts to register component ${e}.`),!1;Jc.set(e,t);for(const n of ul.values())Cf(n,t);for(const n of dx.values())Cf(n,t);return!0}function gd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bn=new Fs("app","Firebase",hx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=cx;function oy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw bn.create("bad-app-name",{appName:String(i)});if(n||(n=Zg()),!n)throw bn.create("no-options");const s=ul.get(i);if(s){if(cl(n,s.options)&&cl(r,s.config))return s;throw bn.create("duplicate-app",{appName:i})}const o=new vw(i);for(const a of Jc.values())o.addComponent(a);const l=new fx(n,r,o);return ul.set(i,l),l}function ly(t=Qc){const e=ul.get(t);if(!e&&t===Qc&&Zg())return oy();if(!e)throw bn.create("no-app",{appName:t});return e}function Pn(t,e,n){var r;let i=(r=ux[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),en.warn(l.join(" "));return}oi(new hr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px="firebase-heartbeat-database",mx=1,Es="firebase-heartbeat-store";let za=null;function ay(){return za||(za=Aw(px,mx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Es)}catch(n){console.warn(n)}}}}).catch(t=>{throw bn.create("idb-open",{originalErrorMessage:t.message})})),za}async function gx(t){try{const n=(await ay()).transaction(Es),r=await n.objectStore(Es).get(cy(t));return await n.done,r}catch(e){if(e instanceof Hn)en.warn(e.message);else{const n=bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});en.warn(n.message)}}}async function kf(t,e){try{const r=(await ay()).transaction(Es,"readwrite");await r.objectStore(Es).put(e,cy(t)),await r.done}catch(n){if(n instanceof Hn)en.warn(n.message);else{const r=bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});en.warn(r.message)}}}function cy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx=1024,_x=30*24*60*60*1e3;class vx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=_x}),this._storage.overwrite(this._heartbeatsCache))}catch(r){en.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sf(),{heartbeatsToSend:r,unsentEntries:i}=wx(this._heartbeatsCache.heartbeats),s=ol(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return en.warn(n),""}}}function Sf(){return new Date().toISOString().substring(0,10)}function wx(t,e=yx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),If(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),If(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iw()?sw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function If(t){return ol(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(t){oi(new hr("platform-logger",e=>new Lw(e),"PRIVATE")),oi(new hr("heartbeat",e=>new vx(e),"PRIVATE")),Pn(qc,Ef,t),Pn(qc,Ef,"esm2017"),Pn("fire-js","")}Ex("");var Cx="firebase",kx="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn(Cx,kx,"app");const Tf="@firebase/database",Nf="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uy="";function Sx(t){uy=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:xs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Mt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ix(e)}}catch{}return new Tx},tr=dy("localStorage"),Xc=dy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new pd("@firebase/database"),Nx=function(){let t=1;return function(){return t++}}(),hy=function(t){const e=mw(t),n=new dw;n.update(e);const r=n.digest();return dd.encodeByteArray(r)},zs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=zs.apply(null,r):typeof r=="object"?e+=we(r):e+=r,e+=" "}return e};let sr=null,Rf=!0;const Rx=function(t,e){A(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Hr.logLevel=ee.VERBOSE,sr=Hr.log.bind(Hr),e&&Xc.set("logging_enabled",!0)):typeof t=="function"?sr=t:(sr=null,Xc.remove("logging_enabled"))},Ne=function(...t){if(Rf===!0&&(Rf=!1,sr===null&&Xc.get("logging_enabled")===!0&&Rx(!0)),sr){const e=zs.apply(null,t);sr(e)}},Us=function(t){return function(...e){Ne(t,...e)}},Zc=function(...t){const e="FIREBASE INTERNAL ERROR: "+zs(...t);Hr.error(e)},tn=function(...t){const e=`FIREBASE FATAL ERROR: ${zs(...t)}`;throw Hr.error(e),new Error(e)},Be=function(...t){const e="FIREBASE WARNING: "+zs(...t);Hr.warn(e)},bx=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Px=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},li="[MIN_NAME]",fr="[MAX_NAME]",vr=function(t,e){if(t===e)return 0;if(t===li||e===fr)return-1;if(e===li||t===fr)return 1;{const n=bf(t),r=bf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Ax=function(t,e){return t===e?0:t<e?-1:1},Oi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+we(e))},_d=function(t){if(typeof t!="object"||t===null)return we(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=we(e[r]),n+=":",n+=_d(t[e[r]]);return n+="}",n},fy=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Pe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const py=function(t){A(!yd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const f=c.join("");let p="";for(a=0;a<64;a+=8){let h=parseInt(f.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),p=p+h}return p.toLowerCase()},Ox=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Dx=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Lx(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Mx=new RegExp("^-?(0*)\\d{1,10}$"),jx=-2147483648,Fx=2147483647,bf=function(t){if(Mx.test(t)){const e=Number(t);if(e>=jx&&e<=Fx)return e}return null},vi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Be("Exception was thrown by user callback.",n),e},Math.floor(0))}},zx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Zi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Be(e)}}class $r{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}$r.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="5",my="v",gy="s",yy="r",_y="f",vy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wy="ls",xy="p",eu="ac",Ey="websocket",Cy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=tr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&tr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Bx(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Sy(t,e,n){A(typeof e=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let r;if(e===Ey)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Cy)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Bx(t)&&(n.ns=t.namespace);const i=[];return Pe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(){this.counters_={}}incrementCounter(e,n=1){Mt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Y1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua={},Wa={};function wd(t){const e=t.toString();return Ua[e]||(Ua[e]=new Vx),Ua[e]}function Hx(t,e){const n=t.toString();return Wa[n]||(Wa[n]=e()),Wa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&vi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="start",Gx="close",Yx="pLPCommand",Kx="pRTLPCB",Iy="id",Ty="pw",Ny="ser",qx="cb",Qx="seg",Jx="ts",Xx="d",Zx="dframe",Ry=1870,by=30,eE=Ry-by,tE=25e3,nE=3e4;class Lr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Us(e),this.stats_=wd(n),this.urlFn=a=>(this.appCheckToken&&(a[eu]=this.appCheckToken),Sy(n,Cy,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new $x(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(nE)),Px(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xd((...s)=>{const[o,l,a,c,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Pf)this.id=l,this.password=a;else if(o===Gx)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Pf]="t",r[Ny]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[qx]=this.scriptTagHolder.uniqueCallbackIdentifier),r[my]=vd,this.transportSessionId&&(r[gy]=this.transportSessionId),this.lastSessionId&&(r[wy]=this.lastSessionId),this.applicationId&&(r[xy]=this.applicationId),this.appCheckToken&&(r[eu]=this.appCheckToken),typeof location<"u"&&location.hostname&&vy.test(location.hostname)&&(r[yy]=_y);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Lr.forceAllow_=!0}static forceDisallow(){Lr.forceDisallow_=!0}static isAvailable(){return Lr.forceAllow_?!0:!Lr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ox()&&!Dx()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Qg(n),i=fy(r,eE);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Zx]="t",r[Iy]=e,r[Ty]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=we(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class xd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Nx(),window[Yx+this.uniqueCallbackIdentifier]=e,window[Kx+this.uniqueCallbackIdentifier]=n,this.myIFrame=xd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ne("frame writing exception"),l.stack&&Ne(l.stack),Ne(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Iy]=this.myID,e[Ty]=this.myPW,e[Ny]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+by+r.length<=Ry;){const o=this.pendingSegs.shift();r=r+"&"+Qx+i+"="+o.seg+"&"+Jx+i+"="+o.ts+"&"+Xx+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(tE)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=16384,iE=45e3;let dl=null;typeof MozWebSocket<"u"?dl=MozWebSocket:typeof WebSocket<"u"&&(dl=WebSocket);class wt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Us(this.connId),this.stats_=wd(n),this.connURL=wt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[my]=vd,typeof location<"u"&&location.hostname&&vy.test(location.hostname)&&(o[yy]=_y),n&&(o[gy]=n),r&&(o[wy]=r),i&&(o[eu]=i),s&&(o[xy]=s),Sy(e,Ey,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,tr.set("previous_websocket_failure",!0);try{let r;ny(),this.mySock=new dl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){wt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&dl!==null&&!wt.forceDisallow_}static previouslyFailed(){return tr.isInMemoryStorage||tr.get("previous_websocket_failure")===!0}markConnectionHealthy(){tr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=xs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=fy(n,rE);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(iE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}wt.responsesRequiredToBeHealthy=2;wt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Lr,wt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=wt&&wt.isAvailable();let r=n&&!wt.previouslyFailed();if(e.webSocketOnly&&(n||Be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[wt];else{const i=this.transports_=[];for(const s of Cs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Cs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Cs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=6e4,oE=5e3,lE=10*1024,aE=100*1024,Ba="t",Af="d",cE="s",Of="r",uE="e",Df="o",Lf="a",Mf="n",jf="p",dE="h";class hE{constructor(e,n,r,i,s,o,l,a,c,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Us("c:"+this.id+":"),this.transportManager_=new Cs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Zi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>aE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>lE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ba in e){const n=e[Ba];n===Lf?this.upgradeIfSecondaryHealthy_():n===Of?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Df&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Oi("t",e),r=Oi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:jf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Lf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Mf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Oi("t",e),r=Oi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Oi(Ba,e);if(Af in e){const r=e[Af];if(n===dE){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Mf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===cE?this.onConnectionShutdown_(r):n===Of?this.onReset_(r):n===uE?Zc("Server Error: "+r):n===Df?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),vd!==r&&Be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Zi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(sE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Zi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(oE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:jf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(tr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){A(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends Ay{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hl}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=32,zf=768;class te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new te("")}function B(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Fn(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new te(t.pieces_,e)}function Ed(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function fE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ks(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Oy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new te(e,0)}function pe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof te)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new te(n,0)}function $(t){return t.pieceNum_>=t.pieces_.length}function Ue(t,e){const n=B(t),r=B(e);if(n===null)return e;if(n===r)return Ue(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function pE(t,e){const n=ks(t,0),r=ks(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=vr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Cd(t,e){if(Fn(t)!==Fn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ct(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Fn(t)>Fn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class mE{constructor(e,n){this.errorPrefix_=n,this.parts_=ks(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Yl(this.parts_[r]);Dy(this)}}function gE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Yl(e),Dy(t)}function yE(t){const e=t.parts_.pop();t.byteLength_-=Yl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Dy(t){if(t.byteLength_>zf)throw new Error(t.errorPrefix_+"has a key path longer than "+zf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ff)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ff+") or object contains a cycle "+Jn(t))}function Jn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd extends Ay{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new kd}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=1e3,_E=60*5*1e3,Uf=30*1e3,vE=1.3,wE=3e4,xE="server_kill",Wf=3;class qt extends Py{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=qt.nextPersistentConnectionId_++,this.log_=Us("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Di,this.maxReconnectDelay_=_E,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ny())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");kd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(we(s)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new js,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,c=l.s;qt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Mt(e,"w")){const r=si(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||uw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Uf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=cw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Zc("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>wE&&(this.reconnectDelay_=Di),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*vE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+qt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},c=function(p){A(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:a,sendRequest:c};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,h]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=h&&h.token,l=new hE(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Be(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(xE)},s))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Be(p),a())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Gc(this.interruptReasons_)&&(this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>_d(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new te(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wf&&(this.reconnectDelay_=Uf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+uy.replace(/\./g,"-")]=1,fd()?e["framework.cordova"]=1:ty()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hl.getInstance().currentlyOnline();return Gc(this.interruptReasons_)&&e}}qt.nextPersistentConnectionId_=0;qt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new V(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new V(li,e),i=new V(li,n);return this.compare(r,i)!==0}minPost(){return V.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po;class Ly extends Kl{static get __EMPTY_NODE(){return po}static set __EMPTY_NODE(e){po=e}compare(e,n){return vr(e.name,n.name)}isDefinedOn(e){throw gi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return V.MIN}maxPost(){return new V(fr,po)}makePost(e,n){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new V(e,po)}toString(){return".key"}}const Gr=new Ly;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ke.RED,this.left=i??qe.EMPTY_NODE,this.right=s??qe.EMPTY_NODE}copy(e,n,r,i,s){return new ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return qe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ke.RED=!0;ke.BLACK=!1;class EE{copy(e,n,r,i,s){return this}insert(e,n,r){return new ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qe{constructor(e,n=qe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ke.BLACK,null,null))}remove(e){return new qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ke.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new mo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new mo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new mo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new mo(this.root_,null,this.comparator_,!0,e)}}qe.EMPTY_NODE=new EE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t,e){return vr(t.name,e.name)}function Sd(t,e){return vr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tu;function kE(t){tu=t}const My=function(t){return typeof t=="number"?"number:"+py(t):"string:"+t},jy=function(t){if(t.isLeafNode()){const e=t.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Mt(e,".sv"),"Priority must be a string or number.")}else A(t===tu||t.isEmpty(),"priority of unexpected type.");A(t===tu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bf;class Ee{constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jy(this.priorityNode_)}static set __childrenNodeConstructor(e){Bf=e}static get __childrenNodeConstructor(){return Bf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return $(e)?this:B(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=B(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(A(r!==".priority"||Fn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+My(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=py(this.value_):e+=this.value_,this.lazyHash_=hy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ee.VALUE_TYPE_ORDER.indexOf(n),s=Ee.VALUE_TYPE_ORDER.indexOf(r);return A(i>=0,"Unknown leaf type: "+n),A(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fy,zy;function SE(t){Fy=t}function IE(t){zy=t}class TE extends Kl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?vr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return V.MIN}maxPost(){return new V(fr,new Ee("[PRIORITY-POST]",zy))}makePost(e,n){const r=Fy(e);return new V(n,new Ee("[PRIORITY-POST]",r))}toString(){return".priority"}}const me=new TE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=Math.log(2);class RE{constructor(e){const n=s=>parseInt(Math.log(s)/NE,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fl=function(t,e,n,r){t.sort(e);const i=function(a,c){const f=c-a;let p,h;if(f===0)return null;if(f===1)return p=t[a],h=n?n(p):p,new ke(h,p.node,ke.BLACK,null,null);{const _=parseInt(f/2,10)+a,y=i(a,_),x=i(_+1,c);return p=t[_],h=n?n(p):p,new ke(h,p.node,ke.BLACK,y,x)}},s=function(a){let c=null,f=null,p=t.length;const h=function(y,x){const R=p-y,g=p;p-=y;const m=i(R+1,g),d=t[R],w=n?n(d):d;_(new ke(w,d.node,x,null,m))},_=function(y){c?(c.left=y,c=y):(f=y,c=y)};for(let y=0;y<a.count;++y){const x=a.nextBitIsOne(),R=Math.pow(2,a.count-(y+1));x?h(R,ke.BLACK):(h(R,ke.BLACK),h(R,ke.RED))}return f},o=new RE(t.length),l=s(o);return new qe(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Va;const Er={};class Ht{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return A(Er&&me,"ChildrenNode.ts has not been loaded"),Va=Va||new Ht({".priority":Er},{".priority":me}),Va}get(e){const n=si(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof qe?n:null}hasIndex(e){return Mt(this.indexSet_,e.toString())}addIndex(e,n){A(e!==Gr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(V.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=fl(r,e.getCompare()):l=Er;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const f=Object.assign({},this.indexes_);return f[a]=l,new Ht(f,c)}addToIndexes(e,n){const r=al(this.indexes_,(i,s)=>{const o=si(this.indexSet_,s);if(A(o,"Missing index implementation for "+s),i===Er)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(V.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),fl(l,o.getCompare())}else return Er;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new V(e.name,l))),a.insert(e,e.node)}});return new Ht(r,this.indexSet_)}removeFromIndexes(e,n){const r=al(this.indexes_,i=>{if(i===Er)return i;{const s=n.get(e.name);return s?i.remove(new V(e.name,s)):i}});return new Ht(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Li;class U{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&jy(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Li||(Li=new U(new qe(Sd),null,Ht.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Li}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Li:n}}getChild(e){const n=B(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(A(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new V(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Li:this.priorityNode_;return new U(i,o,s)}}updateChild(e,n){const r=B(e);if(r===null)return n;{A(B(e)!==".priority"||Fn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(re(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(me,(o,l)=>{n[o]=l.val(e),r++,s&&U.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+My(this.getPriority().val())+":"),this.forEachChild(me,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":hy(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new V(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new V(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new V(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,V.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,V.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ws?-1:0}withIndex(e){if(e===Gr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Gr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(me),i=n.getIterator(me);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Gr?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class bE extends U{constructor(){super(new qe(Sd),U.EMPTY_NODE,Ht.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const Ws=new bE;Object.defineProperties(V,{MIN:{value:new V(li,U.EMPTY_NODE)},MAX:{value:new V(fr,Ws)}});Ly.__EMPTY_NODE=U.EMPTY_NODE;Ee.__childrenNodeConstructor=U;kE(Ws);IE(Ws);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=!0;function ve(t,e=null){if(t===null)return U.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,ve(e))}if(!(t instanceof Array)&&PE){const n=[];let r=!1;if(Pe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ve(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new V(o,a)))}}),n.length===0)return U.EMPTY_NODE;const s=fl(n,CE,o=>o.name,Sd);if(r){const o=fl(n,me.getCompare());return new U(s,ve(e),new Ht({".priority":o},{".priority":me}))}else return new U(s,ve(e),Ht.Default)}else{let n=U.EMPTY_NODE;return Pe(t,(r,i)=>{if(Mt(t,r)&&r.substring(0,1)!=="."){const s=ve(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ve(e))}}SE(ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE extends Kl{constructor(e){super(),this.indexPath_=e,A(!$(e)&&B(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?vr(e.name,n.name):s}makePost(e,n){const r=ve(e),i=U.EMPTY_NODE.updateChild(this.indexPath_,r);return new V(n,i)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,Ws);return new V(fr,e)}toString(){return ks(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE extends Kl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?vr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(e,n){const r=ve(e);return new V(n,r)}toString(){return".value"}}const DE=new OE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t){return{type:"value",snapshotNode:t}}function ai(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ss(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Is(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function LE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){A(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ss(n,l)):A(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ai(n,r)):o.trackChildChange(Is(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(me,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ss(i,s))}),n.isLeafNode()||n.forEachChild(me,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Is(i,s,o))}else r.trackChildChange(ai(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?U.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.indexedFilter_=new Id(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ts.getStartPost_(e),this.endPost_=Ts.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new V(n,r))||(r=U.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=U.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(U.EMPTY_NODE);const s=this;return n.forEachChild(me,(o,l)=>{s.matches(new V(o,l))||(i=i.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ts(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new V(n,r))||(r=U.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=U.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(U.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const p=this.index_.getCompare();o=(h,_)=>p(_,h)}else o=this.index_.getCompare();const l=e;A(l.numChildren()===this.limit_,"");const a=new V(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(a);if(l.hasChild(n)){const p=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,a);if(f&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(Is(n,r,p)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ss(n,p));const x=l.updateImmediateChild(n,U.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(ai(h.name,h.node)),x.updateImmediateChild(h.name,h.node)):x}}else return r.isEmpty()?e:f&&o(c,a)>=0?(s!=null&&(s.trackChildChange(Ss(c.name,c.node)),s.trackChildChange(ai(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,U.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:li}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===me}copy(){const e=new Td;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jE(t){return t.loadsAllData()?new Id(t.getIndex()):t.hasLimit()?new ME(t):new Ts(t)}function Vf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===me?n="$priority":t.index_===DE?n="$value":t.index_===Gr?n="$key":(A(t.index_ instanceof AE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=we(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=we(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+we(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=we(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+we(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Hf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==me&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends Py{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Us("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=pl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Vf(e._queryParams);this.restRequest_(s+".json",a,(c,f)=>{let p=f;if(c===404&&(p=null,c=null),c===null&&this.onDataUpdate_(s,p,!1,r),si(this.listens_,o)===l){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=pl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Vf(e._queryParams),r=e._path.toString(),i=new js;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+yi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=xs(l.responseText)}catch{Be("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Be("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(){return{value:null,children:new Map}}function Wy(t,e,n){if($(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=B(e);t.children.has(r)||t.children.set(r,ml());const i=t.children.get(r);e=re(e),Wy(i,e,n)}}function nu(t,e,n){t.value!==null?n(e,t.value):zE(t,(r,i)=>{const s=new te(e.toString()+"/"+r);nu(i,s,n)})}function zE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Pe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=10*1e3,WE=30*1e3,BE=5*60*1e3;class VE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new UE(e);const r=$f+(WE-$f)*Math.random();Zi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Pe(e,(i,s)=>{s>0&&Mt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Zi(this.reportStats_.bind(this),Math.floor(Math.random()*2*BE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Et||(Et={}));function Nd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Rd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Et.ACK_USER_WRITE,this.source=Nd()}operationForChild(e){if($(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new te(e));return new gl(J(),n,this.revert)}}else return A(B(this.path)===e,"operationForChild called for unrelated child."),new gl(re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n){this.source=e,this.path=n,this.type=Et.LISTEN_COMPLETE}operationForChild(e){return $(this.path)?new Ns(this.source,J()):new Ns(this.source,re(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Et.OVERWRITE}operationForChild(e){return $(this.path)?new pr(this.source,J(),this.snap.getImmediateChild(e)):new pr(this.source,re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Et.MERGE}operationForChild(e){if($(this.path)){const n=this.children.subtree(new te(e));return n.isEmpty()?null:n.value?new pr(this.source,J(),n.value):new ci(this.source,J(),n)}else return A(B(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ci(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if($(e))return this.isFullyInitialized()&&!this.filtered_;const n=B(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $E(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(LE(o.childName,o.snapshotNode))}),Mi(t,i,"child_removed",e,r,n),Mi(t,i,"child_added",e,r,n),Mi(t,i,"child_moved",s,r,n),Mi(t,i,"child_changed",e,r,n),Mi(t,i,"value",e,r,n),i}function Mi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>YE(t,l,a)),o.forEach(l=>{const a=GE(t,l,s);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function GE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function YE(t,e,n){if(e.childName==null||n.childName==null)throw gi("Should only compare child_ events.");const r=new V(e.childName,e.snapshotNode),i=new V(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t,e){return{eventCache:t,serverCache:e}}function es(t,e,n,r){return ql(new zn(e,n,r),t.serverCache)}function By(t,e,n,r){return ql(t.eventCache,new zn(e,n,r))}function yl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function mr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ha;const KE=()=>(Ha||(Ha=new qe(Ax)),Ha);class ne{constructor(e,n=KE()){this.value=e,this.children=n}static fromObject(e){let n=new ne(null);return Pe(e,(r,i)=>{n=n.set(new te(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if($(e))return null;{const r=B(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(re(e),n);return s!=null?{path:pe(new te(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if($(e))return this;{const n=B(e),r=this.children.get(n);return r!==null?r.subtree(re(e)):new ne(null)}}set(e,n){if($(e))return new ne(n,this.children);{const r=B(e),s=(this.children.get(r)||new ne(null)).set(re(e),n),o=this.children.insert(r,s);return new ne(this.value,o)}}remove(e){if($(e))return this.children.isEmpty()?new ne(null):new ne(null,this.children);{const n=B(e),r=this.children.get(n);if(r){const i=r.remove(re(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ne(null):new ne(this.value,s)}else return this}}get(e){if($(e))return this.value;{const n=B(e),r=this.children.get(n);return r?r.get(re(e)):null}}setTree(e,n){if($(e))return n;{const r=B(e),s=(this.children.get(r)||new ne(null)).setTree(re(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ne(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(pe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if($(e))return null;{const s=B(e),o=this.children.get(s);return o?o.findOnPath_(re(e),pe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,r){if($(e))return this;{this.value&&r(n,this.value);const i=B(e),s=this.children.get(i);return s?s.foreachOnPath_(re(e),pe(n,i),r):new ne(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(pe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.writeTree_=e}static empty(){return new St(new ne(null))}}function ts(t,e,n){if($(e))return new St(new ne(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ue(i,e);return s=s.updateChild(o,n),new St(t.writeTree_.set(i,s))}else{const i=new ne(n),s=t.writeTree_.setTree(e,i);return new St(s)}}}function ru(t,e,n){let r=t;return Pe(n,(i,s)=>{r=ts(r,pe(e,i),s)}),r}function Gf(t,e){if($(e))return St.empty();{const n=t.writeTree_.setTree(e,new ne(null));return new St(n)}}function iu(t,e){return wr(t,e)!=null}function wr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ue(n.path,e)):null}function Yf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(me,(r,i)=>{e.push(new V(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new V(r,i.value))}),e}function An(t,e){if($(e))return t;{const n=wr(t,e);return n!=null?new St(new ne(n)):new St(t.writeTree_.subtree(e))}}function su(t){return t.writeTree_.isEmpty()}function ui(t,e){return Vy(J(),t.writeTree_,e)}function Vy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(A(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Vy(pe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(pe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t,e){return Yy(e,t)}function qE(t,e,n,r,i){A(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ts(t.visibleWrites,e,n)),t.lastWriteId=r}function QE(t,e,n,r){A(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ru(t.visibleWrites,e,n),t.lastWriteId=r}function JE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function XE(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);A(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&ZE(l,r.path)?i=!1:ct(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return eC(t),!0;if(r.snap)t.visibleWrites=Gf(t.visibleWrites,r.path);else{const l=r.children;Pe(l,a=>{t.visibleWrites=Gf(t.visibleWrites,pe(r.path,a))})}return!0}else return!1}function ZE(t,e){if(t.snap)return ct(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ct(pe(t.path,n),e))return!0;return!1}function eC(t){t.visibleWrites=Hy(t.allWrites,tC,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function tC(t){return t.visible}function Hy(t,e,n){let r=St.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ct(n,o)?(l=Ue(n,o),r=ts(r,l,s.snap)):ct(o,n)&&(l=Ue(o,n),r=ts(r,J(),s.snap.getChild(l)));else if(s.children){if(ct(n,o))l=Ue(n,o),r=ru(r,l,s.children);else if(ct(o,n))if(l=Ue(o,n),$(l))r=ru(r,J(),s.children);else{const a=si(s.children,B(l));if(a){const c=a.getChild(re(l));r=ts(r,J(),c)}}}else throw gi("WriteRecord should have .snap or .children")}}return r}function $y(t,e,n,r,i){if(!r&&!i){const s=wr(t.visibleWrites,e);if(s!=null)return s;{const o=An(t.visibleWrites,e);if(su(o))return n;if(n==null&&!iu(o,J()))return null;{const l=n||U.EMPTY_NODE;return ui(o,l)}}}else{const s=An(t.visibleWrites,e);if(!i&&su(s))return n;if(!i&&n==null&&!iu(s,J()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(ct(c.path,e)||ct(e,c.path))},l=Hy(t.allWrites,o,e),a=n||U.EMPTY_NODE;return ui(l,a)}}}function nC(t,e,n){let r=U.EMPTY_NODE;const i=wr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(me,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=An(t.visibleWrites,e);return n.forEachChild(me,(o,l)=>{const a=ui(An(s,new te(o)),l);r=r.updateImmediateChild(o,a)}),Yf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=An(t.visibleWrites,e);return Yf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function rC(t,e,n,r,i){A(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=pe(e,n);if(iu(t.visibleWrites,s))return null;{const o=An(t.visibleWrites,s);return su(o)?i.getChild(n):ui(o,i.getChild(n))}}function iC(t,e,n,r){const i=pe(e,n),s=wr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=An(t.visibleWrites,i);return ui(o,r.getNode().getImmediateChild(n))}else return null}function sC(t,e){return wr(t.visibleWrites,e)}function oC(t,e,n,r,i,s,o){let l;const a=An(t.visibleWrites,e),c=wr(a,J());if(c!=null)l=c;else if(n!=null)l=ui(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],p=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=h.getNext();for(;_&&f.length<i;)p(_,r)!==0&&f.push(_),_=h.getNext();return f}else return[]}function lC(){return{visibleWrites:St.empty(),allWrites:[],lastWriteId:-1}}function _l(t,e,n,r){return $y(t.writeTree,t.treePath,e,n,r)}function Pd(t,e){return nC(t.writeTree,t.treePath,e)}function Kf(t,e,n,r){return rC(t.writeTree,t.treePath,e,n,r)}function vl(t,e){return sC(t.writeTree,pe(t.treePath,e))}function aC(t,e,n,r,i,s){return oC(t.writeTree,t.treePath,e,n,r,i,s)}function Ad(t,e,n){return iC(t.writeTree,t.treePath,e,n)}function Gy(t,e){return Yy(pe(t.treePath,e),t.writeTree)}function Yy(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Is(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ss(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ai(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Is(r,e.snapshotNode,i.oldSnap));else throw gi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Ky=new uC;class Od{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new zn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ad(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:mr(this.viewCache_),s=aC(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(t){return{filter:t}}function hC(t,e){A(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function fC(t,e,n,r,i){const s=new cC;let o,l;if(n.type===Et.OVERWRITE){const c=n;c.source.fromUser?o=ou(t,e,c.path,c.snap,r,i,s):(A(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!$(c.path),o=wl(t,e,c.path,c.snap,r,i,l,s))}else if(n.type===Et.MERGE){const c=n;c.source.fromUser?o=mC(t,e,c.path,c.children,r,i,s):(A(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=lu(t,e,c.path,c.children,r,i,l,s))}else if(n.type===Et.ACK_USER_WRITE){const c=n;c.revert?o=_C(t,e,c.path,r,i,s):o=gC(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Et.LISTEN_COMPLETE)o=yC(t,e,n.path,r,s);else throw gi("Unknown operation type: "+n.type);const a=s.getChanges();return pC(e,o,a),{viewCache:o,changes:a}}function pC(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=yl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Uy(yl(e)))}}function qy(t,e,n,r,i,s){const o=e.eventCache;if(vl(r,n)!=null)return e;{let l,a;if($(n))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=mr(e),f=c instanceof U?c:U.EMPTY_NODE,p=Pd(r,f);l=t.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const c=_l(r,mr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=B(n);if(c===".priority"){A(Fn(n)===1,"Can't have a priority with additional path components");const f=o.getNode();a=e.serverCache.getNode();const p=Kf(r,n,f,a);p!=null?l=t.filter.updatePriority(f,p):l=o.getNode()}else{const f=re(n);let p;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const h=Kf(r,n,o.getNode(),a);h!=null?p=o.getNode().getImmediateChild(c).updateChild(f,h):p=o.getNode().getImmediateChild(c)}else p=Ad(r,c,e.serverCache);p!=null?l=t.filter.updateChild(o.getNode(),c,p,f,i,s):l=o.getNode()}}return es(e,l,o.isFullyInitialized()||$(n),t.filter.filtersNodes())}}function wl(t,e,n,r,i,s,o,l){const a=e.serverCache;let c;const f=o?t.filter:t.filter.getIndexedFilter();if($(n))c=f.updateFullNode(a.getNode(),r,null);else if(f.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);c=f.updateFullNode(a.getNode(),_,null)}else{const _=B(n);if(!a.isCompleteForPath(n)&&Fn(n)>1)return e;const y=re(n),R=a.getNode().getImmediateChild(_).updateChild(y,r);_===".priority"?c=f.updatePriority(a.getNode(),R):c=f.updateChild(a.getNode(),_,R,y,Ky,null)}const p=By(e,c,a.isFullyInitialized()||$(n),f.filtersNodes()),h=new Od(i,p,s);return qy(t,p,n,i,h,l)}function ou(t,e,n,r,i,s,o){const l=e.eventCache;let a,c;const f=new Od(i,e,s);if($(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=es(e,c,!0,t.filter.filtersNodes());else{const p=B(n);if(p===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),a=es(e,c,l.isFullyInitialized(),l.isFiltered());else{const h=re(n),_=l.getNode().getImmediateChild(p);let y;if($(h))y=r;else{const x=f.getCompleteChild(p);x!=null?Ed(h)===".priority"&&x.getChild(Oy(h)).isEmpty()?y=x:y=x.updateChild(h,r):y=U.EMPTY_NODE}if(_.equals(y))a=e;else{const x=t.filter.updateChild(l.getNode(),p,y,h,f,o);a=es(e,x,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function qf(t,e){return t.eventCache.isCompleteForChild(e)}function mC(t,e,n,r,i,s,o){let l=e;return r.foreach((a,c)=>{const f=pe(n,a);qf(e,B(f))&&(l=ou(t,l,f,c,i,s,o))}),r.foreach((a,c)=>{const f=pe(n,a);qf(e,B(f))||(l=ou(t,l,f,c,i,s,o))}),l}function Qf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function lu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;$(n)?c=r:c=new ne(null).setTree(n,r);const f=e.serverCache.getNode();return c.children.inorderTraversal((p,h)=>{if(f.hasChild(p)){const _=e.serverCache.getNode().getImmediateChild(p),y=Qf(t,_,h);a=wl(t,a,new te(p),y,i,s,o,l)}}),c.children.inorderTraversal((p,h)=>{const _=!e.serverCache.isCompleteForChild(p)&&h.value===null;if(!f.hasChild(p)&&!_){const y=e.serverCache.getNode().getImmediateChild(p),x=Qf(t,y,h);a=wl(t,a,new te(p),x,i,s,o,l)}}),a}function gC(t,e,n,r,i,s,o){if(vl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if($(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return wl(t,e,n,a.getNode().getChild(n),i,s,l,o);if($(n)){let c=new ne(null);return a.getNode().forEachChild(Gr,(f,p)=>{c=c.set(new te(f),p)}),lu(t,e,n,c,i,s,l,o)}else return e}else{let c=new ne(null);return r.foreach((f,p)=>{const h=pe(n,f);a.isCompleteForPath(h)&&(c=c.set(f,a.getNode().getChild(h)))}),lu(t,e,n,c,i,s,l,o)}}function yC(t,e,n,r,i){const s=e.serverCache,o=By(e,s.getNode(),s.isFullyInitialized()||$(n),s.isFiltered());return qy(t,o,n,r,Ky,i)}function _C(t,e,n,r,i,s){let o;if(vl(r,n)!=null)return e;{const l=new Od(r,e,i),a=e.eventCache.getNode();let c;if($(n)||B(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=_l(r,mr(e));else{const p=e.serverCache.getNode();A(p instanceof U,"serverChildren would be complete if leaf node"),f=Pd(r,p)}f=f,c=t.filter.updateFullNode(a,f,s)}else{const f=B(n);let p=Ad(r,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=a.getImmediateChild(f)),p!=null?c=t.filter.updateChild(a,f,p,re(n),l,s):e.eventCache.getNode().hasChild(f)?c=t.filter.updateChild(a,f,U.EMPTY_NODE,re(n),l,s):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=_l(r,mr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||vl(r,J())!=null,es(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Id(r.getIndex()),s=jE(r);this.processor_=dC(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(U.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(U.EMPTY_NODE,l.getNode(),null),f=new zn(a,o.isFullyInitialized(),i.filtersNodes()),p=new zn(c,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ql(p,f),this.eventGenerator_=new HE(this.query_)}get query(){return this.query_}}function wC(t){return t.viewCache_.serverCache.getNode()}function xC(t){return yl(t.viewCache_)}function EC(t,e){const n=mr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!$(e)&&!n.getImmediateChild(B(e)).isEmpty())?n.getChild(e):null}function Jf(t){return t.eventRegistrations_.length===0}function CC(t,e){t.eventRegistrations_.push(e)}function Xf(t,e,n){const r=[];if(n){A(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Zf(t,e,n,r){e.type===Et.MERGE&&e.source.queryId!==null&&(A(mr(t.viewCache_),"We should always have a full cache before handling merges"),A(yl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=fC(t.processor_,i,e,n,r);return hC(t.processor_,s.viewCache),A(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Qy(t,s.changes,s.viewCache.eventCache.getNode(),null)}function kC(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(me,(s,o)=>{r.push(ai(s,o))}),n.isFullyInitialized()&&r.push(Uy(n.getNode())),Qy(t,r,n.getNode(),e)}function Qy(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return $E(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xl;class Jy{constructor(){this.views=new Map}}function SC(t){A(!xl,"__referenceConstructor has already been defined"),xl=t}function IC(){return A(xl,"Reference.ts has not been loaded"),xl}function TC(t){return t.views.size===0}function Dd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return A(s!=null,"SyncTree gave us an op for an invalid query."),Zf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Zf(o,e,n,r));return s}}function Xy(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=_l(n,i?r:null),a=!1;l?a=!0:r instanceof U?(l=Pd(n,r),a=!1):(l=U.EMPTY_NODE,a=!1);const c=ql(new zn(l,a,!1),new zn(r,i,!1));return new vC(e,c)}return o}function NC(t,e,n,r,i,s){const o=Xy(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),CC(o,n),kC(o,n)}function RC(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Un(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Xf(c,n,r)),Jf(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||s.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Xf(a,n,r)),Jf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Un(t)&&s.push(new(IC())(e._repo,e._path)),{removed:s,events:o}}function Zy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function On(t,e){let n=null;for(const r of t.views.values())n=n||EC(r,e);return n}function e_(t,e){if(e._queryParams.loadsAllData())return Jl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function t_(t,e){return e_(t,e)!=null}function Un(t){return Jl(t)!=null}function Jl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El;function bC(t){A(!El,"__referenceConstructor has already been defined"),El=t}function PC(){return A(El,"Reference.ts has not been loaded"),El}let AC=1;class ep{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ne(null),this.pendingWriteTree_=lC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function n_(t,e,n,r,i){return qE(t.pendingWriteTree_,e,n,r,i),i?wi(t,new pr(Nd(),e,n)):[]}function OC(t,e,n,r){QE(t.pendingWriteTree_,e,n,r);const i=ne.fromObject(n);return wi(t,new ci(Nd(),e,i))}function wn(t,e,n=!1){const r=JE(t.pendingWriteTree_,e);if(XE(t.pendingWriteTree_,e)){let s=new ne(null);return r.snap!=null?s=s.set(J(),!0):Pe(r.children,o=>{s=s.set(new te(o),!0)}),wi(t,new gl(r.path,s,n))}else return[]}function Bs(t,e,n){return wi(t,new pr(Rd(),e,n))}function DC(t,e,n){const r=ne.fromObject(n);return wi(t,new ci(Rd(),e,r))}function LC(t,e){return wi(t,new Ns(Rd(),e))}function MC(t,e,n){const r=Md(t,n);if(r){const i=jd(r),s=i.path,o=i.queryId,l=Ue(s,e),a=new Ns(bd(o),l);return Fd(t,s,a)}else return[]}function Cl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||t_(o,e))){const a=RC(o,e,n,r);TC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=a.removed;if(l=a.events,!i){const f=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(s,(h,_)=>Un(_));if(f&&!p){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=zC(h);for(let y=0;y<_.length;++y){const x=_[y],R=x.query,g=o_(t,x);t.listenProvider_.startListening(ns(R),Rs(t,R),g.hashFn,g.onComplete)}}}!p&&c.length>0&&!r&&(f?t.listenProvider_.stopListening(ns(e),null):c.forEach(h=>{const _=t.queryToTagMap.get(Xl(h));t.listenProvider_.stopListening(ns(h),_)}))}UC(t,c)}return l}function r_(t,e,n,r){const i=Md(t,r);if(i!=null){const s=jd(i),o=s.path,l=s.queryId,a=Ue(o,e),c=new pr(bd(l),a,n);return Fd(t,o,c)}else return[]}function jC(t,e,n,r){const i=Md(t,r);if(i){const s=jd(i),o=s.path,l=s.queryId,a=Ue(o,e),c=ne.fromObject(n),f=new ci(bd(l),a,c);return Fd(t,o,f)}else return[]}function au(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const y=Ue(h,i);s=s||On(_,y),o=o||Un(_)});let l=t.syncPointTree_.get(i);l?(o=o||Un(l),s=s||On(l,J())):(l=new Jy,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=U.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,y)=>{const x=On(y,J());x&&(s=s.updateImmediateChild(_,x))}));const c=t_(l,e);if(!c&&!e._queryParams.loadsAllData()){const h=Xl(e);A(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=WC();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const f=Ql(t.pendingWriteTree_,i);let p=NC(l,e,n,f,s,a);if(!c&&!o&&!r){const h=e_(l,e);p=p.concat(BC(t,e,h))}return p}function Ld(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ue(o,e),c=On(l,a);if(c)return c});return $y(i,e,s,n,!0)}function FC(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,f)=>{const p=Ue(c,n);r=r||On(f,p)});let i=t.syncPointTree_.get(n);i?r=r||On(i,J()):(i=new Jy,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new zn(r,!0,!1):null,l=Ql(t.pendingWriteTree_,e._path),a=Xy(i,e,l,s?o.getNode():U.EMPTY_NODE,s);return xC(a)}function wi(t,e){return i_(e,t.syncPointTree_,null,Ql(t.pendingWriteTree_,J()))}function i_(t,e,n,r){if($(t.path))return s_(t,e,n,r);{const i=e.get(J());n==null&&i!=null&&(n=On(i,J()));let s=[];const o=B(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,f=Gy(r,o);s=s.concat(i_(l,a,c,f))}return i&&(s=s.concat(Dd(i,t,r,n))),s}}function s_(t,e,n,r){const i=e.get(J());n==null&&i!=null&&(n=On(i,J()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Gy(r,o),f=t.operationForChild(o);f&&(s=s.concat(s_(f,l,a,c)))}),i&&(s=s.concat(Dd(i,t,r,n))),s}function o_(t,e){const n=e.query,r=Rs(t,n);return{hashFn:()=>(wC(e)||U.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?MC(t,n._path,r):LC(t,n._path);{const s=Lx(i,n);return Cl(t,n,null,s)}}}}function Rs(t,e){const n=Xl(e);return t.queryToTagMap.get(n)}function Xl(t){return t._path.toString()+"$"+t._queryIdentifier}function Md(t,e){return t.tagToQueryMap.get(e)}function jd(t){const e=t.indexOf("$");return A(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new te(t.substr(0,e))}}function Fd(t,e,n){const r=t.syncPointTree_.get(e);A(r,"Missing sync point for query tag that we're tracking");const i=Ql(t.pendingWriteTree_,e);return Dd(r,n,i,null)}function zC(t){return t.fold((e,n,r)=>{if(n&&Un(n))return[Jl(n)];{let i=[];return n&&(i=Zy(n)),Pe(r,(s,o)=>{i=i.concat(o)}),i}})}function ns(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(PC())(t._repo,t._path):t}function UC(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Xl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function WC(){return AC++}function BC(t,e,n){const r=e._path,i=Rs(t,e),s=o_(t,n),o=t.listenProvider_.startListening(ns(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)A(!Un(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,f,p)=>{if(!$(c)&&f&&Un(f))return[Jl(f).query];{let h=[];return f&&(h=h.concat(Zy(f).map(_=>_.query))),Pe(p,(_,y)=>{h=h.concat(y)}),h}});for(let c=0;c<a.length;++c){const f=a[c];t.listenProvider_.stopListening(ns(f),Rs(t,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new zd(n)}node(){return this.node_}}class Ud{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pe(this.path_,e);return new Ud(this.syncTree_,n)}node(){return Ld(this.syncTree_,this.path_)}}const VC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},tp=function(t,e,n){if(!t||typeof t!="object")return t;if(A(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return HC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return $C(t[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},HC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+t)}},$C=function(t,e,n){t.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&A(!1,"Unexpected increment value: "+r);const i=e.node();if(A(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},l_=function(t,e,n,r){return Wd(e,new Ud(n,t),r)},a_=function(t,e,n){return Wd(t,new zd(e),n)};function Wd(t,e,n){const r=t.getPriority().val(),i=tp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=tp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ee(l,ve(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ee(i))),o.forEachChild(me,(l,a)=>{const c=Wd(a,e.getImmediateChild(l),n);c!==a&&(s=s.updateImmediateChild(l,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Vd(t,e){let n=e instanceof te?e:new te(e),r=t,i=B(n);for(;i!==null;){const s=si(r.node.children,i)||{children:{},childCount:0};r=new Bd(i,r,s),n=re(n),i=B(n)}return r}function xi(t){return t.node.value}function c_(t,e){t.node.value=e,cu(t)}function u_(t){return t.node.childCount>0}function GC(t){return xi(t)===void 0&&!u_(t)}function Zl(t,e){Pe(t.node.children,(n,r)=>{e(new Bd(n,t,r))})}function d_(t,e,n,r){n&&!r&&e(t),Zl(t,i=>{d_(i,e,!0,r)}),n&&r&&e(t)}function YC(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Vs(t){return new te(t.parent===null?t.name:Vs(t.parent)+"/"+t.name)}function cu(t){t.parent!==null&&KC(t.parent,t.name,t)}function KC(t,e,n){const r=GC(n),i=Mt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,cu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,cu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=/[\[\].#$\/\u0000-\u001F\u007F]/,QC=/[\[\].#$\u0000-\u001F\u007F]/,$a=10*1024*1024,Hd=function(t){return typeof t=="string"&&t.length!==0&&!qC.test(t)},h_=function(t){return typeof t=="string"&&t.length!==0&&!QC.test(t)},JC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),h_(t)},XC=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!yd(t)||t&&typeof t=="object"&&Mt(t,".sv")},ZC=function(t,e,n,r){r&&e===void 0||ea(Gl(t,"value"),e,n)},ea=function(t,e,n){const r=n instanceof te?new mE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Jn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Jn(r)+" with contents = "+e.toString());if(yd(e))throw new Error(t+"contains "+e.toString()+" "+Jn(r));if(typeof e=="string"&&e.length>$a/3&&Yl(e)>$a)throw new Error(t+"contains a string greater than "+$a+" utf8 bytes "+Jn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Pe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Hd(o)))throw new Error(t+" contains an invalid key ("+o+") "+Jn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);gE(r,o),ea(t,l,r),yE(r)}),i&&s)throw new Error(t+' contains ".value" child '+Jn(r)+" in addition to actual children.")}},ek=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ks(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Hd(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(pE);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&ct(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},tk=function(t,e,n,r){if(r&&e===void 0)return;const i=Gl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Pe(e,(o,l)=>{const a=new te(o);if(ea(i,l,pe(n,a)),Ed(a)===".priority"&&!XC(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),ek(i,s)},f_=function(t,e,n,r){if(!(r&&n===void 0)&&!h_(n))throw new Error(Gl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},nk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),f_(t,e,n,r)},p_=function(t,e){if(B(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},rk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Hd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!JC(n))throw new Error(Gl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ta(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Cd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function m_(t,e,n){ta(t,n),g_(t,r=>Cd(r,e))}function ft(t,e,n){ta(t,n),g_(t,r=>ct(r,e)||ct(e,r))}function g_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(sk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function sk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();sr&&Ne("event: "+n.toString()),vi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok="repo_interrupt",lk=25;class ak{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ik,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ml(),this.transactionQueueTree_=new Bd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ck(t,e,n){if(t.stats_=wd(t.repoInfo_),t.forceRestClient_||zx())t.server_=new pl(t.repoInfo_,(r,i,s,o)=>{np(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>rp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new qt(t.repoInfo_,e,(r,i,s,o)=>{np(t,r,i,s,o)},r=>{rp(t,r)},r=>{dk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Hx(t.repoInfo_,()=>new VE(t.stats_,t.server_)),t.infoData_=new FE,t.infoSyncTree_=new ep({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Bs(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),$d(t,"connected",!1),t.serverSyncTree_=new ep({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const c=o(l,a);ft(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function uk(t){const n=t.infoData_.getNode(new te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function na(t){return VC({timestamp:uk(t)})}function np(t,e,n,r,i){t.dataUpdateCount++;const s=new te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=al(n,c=>ve(c));o=jC(t.serverSyncTree_,s,a,i)}else{const a=ve(n);o=r_(t.serverSyncTree_,s,a,i)}else if(r){const a=al(n,c=>ve(c));o=DC(t.serverSyncTree_,s,a)}else{const a=ve(n);o=Bs(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=di(t,s)),ft(t.eventQueue_,l,o)}function rp(t,e){$d(t,"connected",e),e===!1&&mk(t)}function dk(t,e){Pe(e,(n,r)=>{$d(t,n,r)})}function $d(t,e,n){const r=new te("/.info/"+e),i=ve(n);t.infoData_.updateSnapshot(r,i);const s=Bs(t.infoSyncTree_,r,i);ft(t.eventQueue_,r,s)}function Gd(t){return t.nextWriteId_++}function hk(t,e,n){const r=FC(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ve(i).withIndex(e._queryParams.getIndex());au(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Bs(t.serverSyncTree_,e._path,s);else{const l=Rs(t.serverSyncTree_,e);o=r_(t.serverSyncTree_,e._path,s,l)}return ft(t.eventQueue_,e._path,o),Cl(t.serverSyncTree_,e,n,null,!0),s},i=>(Hs(t,"get for query "+we(e)+" failed: "+i),Promise.reject(new Error(i))))}function fk(t,e,n,r,i){Hs(t,"set",{path:e.toString(),value:n,priority:r});const s=na(t),o=ve(n,r),l=Ld(t.serverSyncTree_,e),a=a_(o,l,s),c=Gd(t),f=n_(t.serverSyncTree_,e,a,c,!0);ta(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const y=h==="ok";y||Be("set at "+e+" failed: "+h);const x=wn(t.serverSyncTree_,c,!y);ft(t.eventQueue_,e,x),uu(t,i,h,_)});const p=Kd(t,e);di(t,p),ft(t.eventQueue_,p,[])}function pk(t,e,n,r){Hs(t,"update",{path:e.toString(),value:n});let i=!0;const s=na(t),o={};if(Pe(n,(l,a)=>{i=!1,o[l]=l_(pe(e,l),ve(a),t.serverSyncTree_,s)}),i)Ne("update() called with empty data.  Don't do anything."),uu(t,r,"ok",void 0);else{const l=Gd(t),a=OC(t.serverSyncTree_,e,o,l);ta(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,f)=>{const p=c==="ok";p||Be("update at "+e+" failed: "+c);const h=wn(t.serverSyncTree_,l,!p),_=h.length>0?di(t,e):e;ft(t.eventQueue_,_,h),uu(t,r,c,f)}),Pe(n,c=>{const f=Kd(t,pe(e,c));di(t,f)}),ft(t.eventQueue_,e,[])}}function mk(t){Hs(t,"onDisconnectEvents");const e=na(t),n=ml();nu(t.onDisconnect_,J(),(i,s)=>{const o=l_(i,s,t.serverSyncTree_,e);Wy(n,i,o)});let r=[];nu(n,J(),(i,s)=>{r=r.concat(Bs(t.serverSyncTree_,i,s));const o=Kd(t,i);di(t,o)}),t.onDisconnect_=ml(),ft(t.eventQueue_,J(),r)}function gk(t,e,n){let r;B(e._path)===".info"?r=au(t.infoSyncTree_,e,n):r=au(t.serverSyncTree_,e,n),m_(t.eventQueue_,e._path,r)}function ip(t,e,n){let r;B(e._path)===".info"?r=Cl(t.infoSyncTree_,e,n):r=Cl(t.serverSyncTree_,e,n),m_(t.eventQueue_,e._path,r)}function yk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ok)}function Hs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function uu(t,e,n,r){e&&vi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function y_(t,e,n){return Ld(t.serverSyncTree_,e,n)||U.EMPTY_NODE}function Yd(t,e=t.transactionQueueTree_){if(e||ra(t,e),xi(e)){const n=v_(t,e);A(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&_k(t,Vs(e),n)}else u_(e)&&Zl(e,n=>{Yd(t,n)})}function _k(t,e,n){const r=n.map(c=>c.currentWriteId),i=y_(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const f=n[c];A(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=Ue(e,f.path);s=s.updateChild(p,f.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Hs(t,"transaction put response",{path:a.toString(),status:c});let f=[];if(c==="ok"){const p=[];for(let h=0;h<n.length;h++)n[h].status=2,f=f.concat(wn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&p.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ra(t,Vd(t.transactionQueueTree_,e)),Yd(t,t.transactionQueueTree_),ft(t.eventQueue_,e,f);for(let h=0;h<p.length;h++)vi(p[h])}else{if(c==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{Be("transaction at "+a.toString()+" failed: "+c);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=c}di(t,e)}},o)}function di(t,e){const n=__(t,e),r=Vs(n),i=v_(t,n);return vk(t,i,r),r}function vk(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Ue(n,a.path);let f=!1,p;if(A(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)f=!0,p=a.abortReason,i=i.concat(wn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=lk)f=!0,p="maxretry",i=i.concat(wn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=y_(t,a.path,o);a.currentInputSnapshot=h;const _=e[l].update(h.val());if(_!==void 0){ea("transaction failed: Data returned ",_,a.path);let y=ve(_);typeof _=="object"&&_!=null&&Mt(_,".priority")||(y=y.updatePriority(h.getPriority()));const R=a.currentWriteId,g=na(t),m=a_(y,h,g);a.currentOutputSnapshotRaw=y,a.currentOutputSnapshotResolved=m,a.currentWriteId=Gd(t),o.splice(o.indexOf(R),1),i=i.concat(n_(t.serverSyncTree_,a.path,m,a.currentWriteId,a.applyLocally)),i=i.concat(wn(t.serverSyncTree_,R,!0))}else f=!0,p="nodata",i=i.concat(wn(t.serverSyncTree_,a.currentWriteId,!0))}ft(t.eventQueue_,n,i),i=[],f&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(p),!1,null))))}ra(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)vi(r[l]);Yd(t,t.transactionQueueTree_)}function __(t,e){let n,r=t.transactionQueueTree_;for(n=B(e);n!==null&&xi(r)===void 0;)r=Vd(r,n),e=re(e),n=B(e);return r}function v_(t,e){const n=[];return w_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function w_(t,e,n){const r=xi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Zl(e,i=>{w_(t,i,n)})}function ra(t,e){const n=xi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,c_(e,n.length>0?n:void 0)}Zl(e,r=>{ra(t,r)})}function Kd(t,e){const n=Vs(__(t,e)),r=Vd(t.transactionQueueTree_,e);return YC(r,i=>{Ga(t,i)}),Ga(t,r),d_(r,i=>{Ga(t,i)}),n}function Ga(t,e){const n=xi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(A(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(A(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(wn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?c_(e,void 0):n.length=s+1,ft(t.eventQueue_,Vs(e),i);for(let o=0;o<r.length;o++)vi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function xk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Be(`Invalid query segment '${n}' in query '${t}'`)}return e}const sp=function(t,e){const n=Ek(t),r=n.namespace;n.domain==="firebase.com"&&tn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||bx();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ky(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new te(n.pathString)}},Ek=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let f=t.indexOf("/");f===-1&&(f=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(f,p)),f<p&&(i=wk(t.substring(f,p)));const h=xk(t.substring(Math.min(t.length,p)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+we(this.snapshot.exportVal())}}class E_{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return $(this._path)?null:Ed(this._path)}get ref(){return new jt(this._repo,this._path)}get _queryIdentifier(){const e=Hf(this._queryParams),n=_d(e);return n==="{}"?"default":n}get _queryObject(){return Hf(this._queryParams)}isEqual(e){if(e=Ge(e),!(e instanceof qd))return!1;const n=this._repo===e._repo,r=Cd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+fE(this._path)}}class jt extends qd{constructor(e,n){super(e,n,new Td,!1)}get parent(){const e=Oy(this._path);return e===null?null:new jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class hi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new te(e),r=kl(this.ref,e);return new hi(this._node.getChild(n),r,me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new hi(i,kl(this.ref,r),me)))}hasChild(e){const n=new te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ft(t,e){return t=Ge(t),t._checkNotDeleted("ref"),e!==void 0?kl(t._root,e):t._root}function kl(t,e){return t=Ge(t),B(t._path)===null?nk("child","path",e,!1):f_("child","path",e,!1),new jt(t._repo,pe(t._path,e))}function Ck(t){return p_("remove",t._path),Qd(t,null)}function Qd(t,e){t=Ge(t),p_("set",t._path),ZC("set",e,t._path,!1);const n=new js;return fk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ia(t,e){tk("update",e,t._path,!1);const n=new js;return pk(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function k_(t){t=Ge(t);const e=new C_(()=>{}),n=new sa(e);return hk(t._repo,t,n).then(r=>new hi(r,new jt(t._repo,t._path),t._queryParams.getIndex()))}class sa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new x_("value",this,new hi(e.snapshotNode,new jt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new E_(this,e,n):null}matches(e){return e instanceof sa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Jd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new E_(this,e,n):null}createEvent(e,n){A(e.childName!=null,"Child events should have a childName.");const r=kl(new jt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new x_(e.type,this,new hi(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Jd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function kk(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,c=(f,p)=>{ip(t._repo,t,l),a(f,p)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new C_(n,s||void 0),l=e==="value"?new sa(o):new Jd(e,o);return gk(t._repo,t,l),()=>ip(t._repo,t,l)}function S_(t,e,n,r){return kk(t,"value",e,n,r)}SC(jt);bC(jt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk="FIREBASE_DATABASE_EMULATOR_HOST",du={};let Ik=!1;function Tk(t,e,n,r){t.repoInfo_=new ky(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Nk(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=sp(s,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[Sk]),c?(a=!0,s=`http://${c}?ns=${l.namespace}`,o=sp(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const f=i&&a?new $r($r.OWNER):new Wx(t.name,t.options,e);rk("Invalid Firebase Database URL",o),$(o.path)||tn("Database URL must point to the root of a Firebase Database (not including a child path).");const p=bk(l,t,f,new Ux(t.name,n));return new Pk(p,t)}function Rk(t,e){const n=du[e];(!n||n[t.key]!==t)&&tn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),yk(t),delete n[t.key]}function bk(t,e,n,r){let i=du[e.name];i||(i={},du[e.name]=i);let s=i[t.toURLString()];return s&&tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ak(t,Ik,n,r),i[t.toURLString()]=s,s}class Pk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ck(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jt(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Rk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&tn("Cannot call "+e+" on a deleted database.")}}function Ak(t=ly(),e){const n=gd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Z1("database");r&&Ok(n,...r)}return n}function Ok(t,e,n,r={}){t=Ge(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&tn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&tn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new $r($r.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:ew(r.mockUserToken,t.app.options.projectId);s=new $r(o)}Tk(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(t){Sx(_i),oi(new hr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Nk(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Pn(Tf,Nf,t),Pn(Tf,Nf,"esm2017")}qt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};qt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Dk();function Xd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function I_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lk=I_,T_=new Fs("auth","Firebase",I_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=new pd("@firebase/auth");function Mk(t,...e){Sl.logLevel<=ee.WARN&&Sl.warn(`Auth (${_i}): ${t}`,...e)}function bo(t,...e){Sl.logLevel<=ee.ERROR&&Sl.error(`Auth (${_i}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,...e){throw Zd(t,...e)}function Ot(t,...e){return Zd(t,...e)}function N_(t,e,n){const r=Object.assign(Object.assign({},Lk()),{[e]:n});return new Fs("auth","Firebase",r).create(e,{appName:t.name})}function Dt(t){return N_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return T_.create(t,...e)}function W(t,e,...n){if(!t)throw Zd(e,...n)}function $t(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bo(e),new Error(e)}function nn(t,e){t||$t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jk(){return op()==="http:"||op()==="https:"}function op(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jk()||nw()||"connection"in navigator)?navigator.onLine:!0}function zk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n){this.shortDelay=e,this.longDelay=n,nn(n>e,"Short delay should be less than long delay!"),this.isMobile=fd()||ty()}get(){return Fk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t,e){nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=new $s(3e4,6e4);function $n(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gn(t,e,n,r,i={}){return b_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=yi(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:a},s);return tw()||(c.referrerPolicy="no-referrer"),R_.fetch()(P_(t,t.config.apiHost,n,l),c)})}async function b_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Uk),e);try{const i=new Vk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw go(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw go(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw go(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw go(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw N_(t,f,c);Tt(t,f)}}catch(i){if(i instanceof Hn)throw i;Tt(t,"network-request-failed",{message:String(i)})}}async function Gs(t,e,n,r,i={}){const s=await Gn(t,e,n,r,i);return"mfaPendingCredential"in s&&Tt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function P_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?eh(t.config,i):`${t.config.apiScheme}://${i}`}function Bk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Vk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"network-request-failed")),Wk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function go(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ot(t,e,r);return i.customData._tokenResponse=n,i}function lp(t){return t!==void 0&&t.enterprise!==void 0}class Hk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Bk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function $k(t,e){return Gn(t,"GET","/v2/recaptchaConfig",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gk(t,e){return Gn(t,"POST","/v1/accounts:delete",e)}async function A_(t,e){return Gn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yk(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),i=th(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:rs(Ya(i.auth_time)),issuedAtTime:rs(Ya(i.iat)),expirationTime:rs(Ya(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ya(t){return Number(t)*1e3}function th(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bo("JWT malformed, contained fewer than 3 sections"),null;try{const i=ll(n);return i?JSON.parse(i):(bo("Failed to decode base64 JWT payload"),null)}catch(i){return bo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ap(t){const e=th(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Hn&&Kk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Kk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=rs(this.lastLoginAt),this.creationTime=rs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Il(t){var e;const n=t.auth,r=await t.getIdToken(),i=await bs(t,A_(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?O_(s.providerUserInfo):[],l=Jk(t.providerData,o),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=a?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new fu(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function Qk(t){const e=Ge(t);await Il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function O_(t){return t.map(e=>{var{providerId:n}=e,r=Xd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xk(t,e){const n=await b_(t,{},async()=>{const r=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=P_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",R_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Zk(t,e){return Gn(t,"POST","/v2/accounts:revokeToken",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ap(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=ap(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Xk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Yr;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yr,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Xd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await bs(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Yk(this,e)}reload(){return Qk(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(Dt(this.auth));const e=await this.getIdToken();return await bs(this,Gk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,m=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:d,emailVerified:w,isAnonymous:E,providerData:N,stsTokenManager:P}=n;W(d&&P,e,"internal-error");const O=Yr.fromJSON(this.name,P);W(typeof d=="string",e,"internal-error"),an(p,e.name),an(h,e.name),W(typeof w=="boolean",e,"internal-error"),W(typeof E=="boolean",e,"internal-error"),an(_,e.name),an(y,e.name),an(x,e.name),an(R,e.name),an(g,e.name),an(m,e.name);const H=new Gt({uid:d,auth:e,email:h,emailVerified:w,displayName:p,isAnonymous:E,photoURL:y,phoneNumber:_,tenantId:x,stsTokenManager:O,createdAt:g,lastLoginAt:m});return N&&Array.isArray(N)&&(H.providerData=N.map(z=>Object.assign({},z))),R&&(H._redirectEventId=R),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new Yr;i.updateFromServerResponse(n);const s=new Gt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Il(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?O_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Yr;l.updateFromIdToken(r);const a=new Gt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new fu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,c),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=new Map;function Yt(t){nn(t instanceof Function,"Expected a class definition");let e=cp.get(t);return e?(nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}D_.type="NONE";const up=D_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t,e,n){return`firebase:${t}:${e}:${n}`}class Kr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Po(this.userKey,i.apiKey,s),this.fullPersistenceKey=Po("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Kr(Yt(up),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Yt(up);const o=Po(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const p=Gt._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const a=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Kr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Kr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(F_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(L_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(U_(e))return"Blackberry";if(W_(e))return"Webos";if(M_(e))return"Safari";if((e.includes("chrome/")||j_(e))&&!e.includes("edge/"))return"Chrome";if(z_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function L_(t=Ve()){return/firefox\//i.test(t)}function M_(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function j_(t=Ve()){return/crios\//i.test(t)}function F_(t=Ve()){return/iemobile/i.test(t)}function z_(t=Ve()){return/android/i.test(t)}function U_(t=Ve()){return/blackberry/i.test(t)}function W_(t=Ve()){return/webos/i.test(t)}function nh(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eS(t=Ve()){var e;return nh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tS(){return rw()&&document.documentMode===10}function B_(t=Ve()){return nh(t)||z_(t)||W_(t)||U_(t)||/windows phone/i.test(t)||F_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(t,e=[]){let n;switch(t){case"Browser":n=dp(Ve());break;case"Worker":n=`${dp(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_i}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(t,e={}){return Gn(t,"GET","/v2/passwordPolicy",$n(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=6;class sS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:iS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hp(this),this.idTokenSubscription=new hp(this),this.beforeStateQueue=new nS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=T_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Kr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await A_(this,{idToken:e}),r=await Gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Il(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xt(this.app))return Promise.reject(Dt(this));const n=e?Ge(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(Dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xt(this.app)?Promise.reject(Dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rS(this),n=new sS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Zk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Kr.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=V_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Mk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yn(t){return Ge(t)}class hp{constructor(e){this.auth=e,this.observer=null,this.addObserver=hw(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lS(t){oa=t}function H_(t){return oa.loadJS(t)}function aS(){return oa.recaptchaEnterpriseScript}function cS(){return oa.gapiScript}function uS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const dS="recaptcha-enterprise",hS="NO_RECAPTCHA";class fS{constructor(e){this.type=dS,this.auth=Yn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{$k(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Hk(a);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;lp(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(hS)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&lp(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=aS();a.length!==0&&(a+=l),H_(a).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function fp(t,e,n,r=!1){const i=new fS(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function pu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await fp(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await fp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t,e){const n=gd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(cl(s,e??{}))return i;Tt(i,"already-initialized")}return n.initialize({options:e})}function mS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gS(t,e,n){const r=Yn(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=$_(e),{host:o,port:l}=yS(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||_S()}function $_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yS(t){const e=$_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:pp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:pp(o)}}}function pp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _S(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,n){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}async function vS(t,e){return Gn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wS(t,e){return Gs(t,"POST","/v1/accounts:signInWithPassword",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(t,e){return Gs(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}async function ES(t,e){return Gs(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends rh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ps(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ps(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pu(e,n,"signInWithPassword",wS);case"emailLink":return xS(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pu(e,r,"signUpPassword",vS);case"emailLink":return ES(e,{idToken:n,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(t,e){return Gs(t,"POST","/v1/accounts:signInWithIdp",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="http://localhost";class gr extends rh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Xd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new gr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qr(e,n)}buildRequest(){const e={requestUri:CS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function SS(t){const e=Wi(Bi(t)).link,n=e?Wi(Bi(e)).deep_link_id:null,r=Wi(Bi(t)).deep_link_id;return(r?Wi(Bi(r)).link:null)||r||n||e||t}class ih{constructor(e){var n,r,i,s,o,l;const a=Wi(Bi(e)),c=(n=a.apiKey)!==null&&n!==void 0?n:null,f=(r=a.oobCode)!==null&&r!==void 0?r:null,p=kS((i=a.mode)!==null&&i!==void 0?i:null);W(c&&f&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=f,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=SS(e);try{return new ih(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.providerId=Ei.PROVIDER_ID}static credential(e,n){return Ps._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ih.parseLink(n);return W(r,"argument-error"),Ps._fromEmailAndCode(e,r.code,r.tenantId)}}Ei.PROVIDER_ID="password";Ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys extends G_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Ys{constructor(){super("facebook.com")}static credential(e){return gr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Ys{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Ys{constructor(){super("github.com")}static credential(e){return gr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Ys{constructor(){super("twitter.com")}static credential(e,n){return gr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(t,e){return Gs(t,"POST","/v1/accounts:signUp",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Gt._fromIdTokenResponse(e,r,i),o=mp(r);return new rn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=mp(r);return new rn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function mp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS(t){var e;if(xt(t.app))return Promise.reject(Dt(t));const n=Yn(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new rn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Y_(n,{returnSecureToken:!0}),i=await rn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends Hn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Tl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Tl(e,n,r,i)}}function K_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tl._fromErrorAndOperation(t,s,e,r):s})}async function TS(t,e,n=!1){const r=await bs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NS(t,e,n=!1){const{auth:r}=t;if(xt(r.app))return Promise.reject(Dt(r));const i="reauthenticate";try{const s=await bs(t,K_(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=th(s.idToken);W(o,r,"internal-error");const{sub:l}=o;return W(t.uid===l,r,"user-mismatch"),rn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q_(t,e,n=!1){if(xt(t.app))return Promise.reject(Dt(t));const r="signIn",i=await K_(t,r,e),s=await rn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function RS(t,e){return q_(Yn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q_(t){const e=Yn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bS(t,e,n){if(xt(t.app))return Promise.reject(Dt(t));const r=Yn(t),o=await pu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Y_).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Q_(t),a}),l=await rn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function PS(t,e,n){return xt(t.app)?Promise.reject(Dt(t)):RS(Ge(t),Ei.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Q_(t),r})}function AS(t,e,n,r){return Ge(t).onIdTokenChanged(e,n,r)}function OS(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function DS(t,e,n,r){return Ge(t).onAuthStateChanged(e,n,r)}function LS(t){return Ge(t).signOut()}const Nl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Nl,"1"),this.storage.removeItem(Nl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=1e3,jS=10;class X_ extends J_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=B_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,jS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},MS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}X_.type="LOCAL";const FS=X_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_ extends J_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Z_.type="SESSION";const ev=Z_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new la(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),a=await zS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}la.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const c=sh("",20);i.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const h=p;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(f),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return window}function WS(t){Lt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function BS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function HS(){return tv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv="firebaseLocalStorageDb",$S=1,Rl="firebaseLocalStorage",rv="fbase_key";class Ks{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function aa(t,e){return t.transaction([Rl],e?"readwrite":"readonly").objectStore(Rl)}function GS(){const t=indexedDB.deleteDatabase(nv);return new Ks(t).toPromise()}function mu(){const t=indexedDB.open(nv,$S);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rl,{keyPath:rv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rl)?e(r):(r.close(),await GS(),e(await mu()))})})}async function gp(t,e,n){const r=aa(t,!0).put({[rv]:e,value:n});return new Ks(r).toPromise()}async function YS(t,e){const n=aa(t,!1).get(e),r=await new Ks(n).toPromise();return r===void 0?null:r.value}function yp(t,e){const n=aa(t,!0).delete(e);return new Ks(n).toPromise()}const KS=800,qS=3;class iv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=la._getInstance(HS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await BS(),!this.activeServiceWorker)return;this.sender=new US(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mu();return await gp(e,Nl,"1"),await yp(e,Nl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>YS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=aa(i,!1).getAll();return new Ks(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iv.type="LOCAL";const QS=iv;new $s(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(t,e){return e?Yt(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh extends rh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function XS(t){return q_(t.auth,new oh(t),t.bypassAuthState)}function ZS(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),NS(n,new oh(t),t.bypassAuthState)}async function eI(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),TS(n,new oh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XS;case"linkViaPopup":case"linkViaRedirect":return eI;case"reauthViaPopup":case"reauthViaRedirect":return ZS;default:Tt(this.auth,"internal-error")}}resolve(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=new $s(2e3,1e4);class Mr extends sv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Mr.currentPopupAction&&Mr.currentPopupAction.cancel(),Mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){nn(this.filter.length===1,"Popup operations only handle one event");const e=sh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tI.get())};e()}}Mr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="pendingRedirect",Ao=new Map;class rI extends sv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ao.get(this.auth._key());if(!e){try{const r=await iI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ao.set(this.auth._key(),e)}return this.bypassAuthState||Ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iI(t,e){const n=lI(e),r=oI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function sI(t,e){Ao.set(t._key(),e)}function oI(t){return Yt(t._redirectPersistence)}function lI(t){return Po(nI,t.config.apiKey,t.name)}async function aI(t,e,n=!1){if(xt(t.app))return Promise.reject(Dt(t));const r=Yn(t),i=JS(r,e),o=await new rI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=10*60*1e3;class uI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ov(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cI&&this.cachedEventUids.clear(),this.cachedEventUids.has(_p(e))}saveEventToCache(e){this.cachedEventUids.add(_p(e)),this.lastProcessedEventTime=Date.now()}}function _p(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ov({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ov(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hI(t,e={}){return Gn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pI=/^https?/;async function mI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hI(t);for(const n of e)try{if(gI(n))return}catch{}Tt(t,"unauthorized-domain")}function gI(t){const e=hu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pI.test(n))return!1;if(fI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=new $s(3e4,6e4);function vp(){const t=Lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _I(t){return new Promise((e,n)=>{var r,i,s;function o(){vp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vp(),n(Ot(t,"network-request-failed"))},timeout:yI.get()})}if(!((i=(r=Lt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Lt().gapi)===null||s===void 0)&&s.load)o();else{const l=uS("iframefcb");return Lt()[l]=()=>{gapi.load?o():n(Ot(t,"network-request-failed"))},H_(`${cS()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Oo=null,e})}let Oo=null;function vI(t){return Oo=Oo||_I(t),Oo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=new $s(5e3,15e3),xI="__/auth/iframe",EI="emulator/auth/iframe",CI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SI(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?eh(e,EI):`https://${t.config.authDomain}/${xI}`,r={apiKey:e.apiKey,appName:t.name,v:_i},i=kI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${yi(r).slice(1)}`}async function II(t){const e=await vI(t),n=Lt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:SI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),l=Lt().setTimeout(()=>{s(o)},wI.get());function a(){Lt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NI=500,RI=600,bI="_blank",PI="http://localhost";class wp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AI(t,e,n,r=NI,i=RI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},TI),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ve().toLowerCase();n&&(l=j_(c)?bI:n),L_(c)&&(e=e||PI,a.scrollbars="yes");const f=Object.entries(a).reduce((h,[_,y])=>`${h}${_}=${y},`,"");if(eS(c)&&l!=="_self")return OI(e||"",l),new wp(null);const p=window.open(e||"",l,f);W(p,t,"popup-blocked");try{p.focus()}catch{}return new wp(p)}function OI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI="__/auth/handler",LI="emulator/auth/handler",MI=encodeURIComponent("fac");async function xp(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_i,eventId:i};if(e instanceof G_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(s||{}))o[f]=p}if(e instanceof Ys){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const a=await t._getAppCheckToken(),c=a?`#${MI}=${encodeURIComponent(a)}`:"";return`${jI(t)}?${yi(l).slice(1)}${c}`}function jI({config:t}){return t.emulator?eh(t,LI):`https://${t.authDomain}/${DI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="webStorageSupport";class FI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ev,this._completeRedirectFn=aI,this._overrideRedirectResult=sI}async _openPopup(e,n,r,i){var s;nn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await xp(e,n,r,hu(),i);return AI(e,o,sh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await xp(e,n,r,hu(),i);return WS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await II(e),r=new uI(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ka,{type:Ka},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ka];o!==void 0&&n(!!o),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return B_()||M_()||nh()}}const zI=FI;var Ep="@firebase/auth",Cp="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BI(t){oi(new hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:V_(t)},c=new oS(r,i,s,a);return mS(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),oi(new hr("auth-internal",e=>{const n=Yn(e.getProvider("auth").getImmediate());return(r=>new UI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(Ep,Cp,WI(t)),Pn(Ep,Cp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=5*60,HI=ey("authIdTokenMaxAge")||VI;let kp=null;const $I=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>HI)return;const i=n==null?void 0:n.token;kp!==i&&(kp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function GI(t=ly()){const e=gd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pS(t,{popupRedirectResolver:zI,persistence:[QS,FS,ev]}),r=ey("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=$I(s.toString());OS(n,o,()=>o(n.currentUser)),AS(n,l=>o(l))}}const i=Xg("auth");return i&&gS(n,`http://${i}`),n}function YI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}lS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ot("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",YI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BI("Browser");const KI={apiKey:"AIzaSyAb1mwHVwbxJbbf2WAFlqclFPGRUid4Oeg",authDomain:"link-like-battle.firebaseapp.com",databaseURL:"https://link-like-battle-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"link-like-battle",storageBucket:"link-like-battle.firebasestorage.app",messagingSenderId:"452412670826",appId:"1:452412670826:web:3bcee6fa21c456202a5b13"},lv=oy(KI),zt=Ak(lv),qs=GI(lv),qI=async(t,e)=>{const n=Math.random().toString(36).substring(2,6).toUpperCase(),r=Ft(zt,`rooms/${n}`),i={status:"waiting",hostName:e||"YOU",roomName:`${e||"名無し"}の部屋`,hostDeck:t,clientName:null,clientDeck:null,gameState:null};return await Qd(r,i),n},QI=t=>{const e=Ft(zt,"rooms");return S_(e,n=>{const r=n.val(),i=[];r&&Object.keys(r).forEach(s=>{r[s].status==="waiting"&&i.push({id:s,...r[s]})}),t(i)})},JI=async(t,e,n)=>{const r=Ft(zt,`rooms/${t}`),i=await k_(r);if(!i.exists())throw new Error("部屋が見つかりません");const s=i.val();if(s.status!=="waiting")throw new Error("募集を終了しています");if(s.clientName)throw new Error("すでに満員です");await ia(r,{clientName:n||"YOU",clientDeck:e})},XI=async t=>{await ia(Ft(zt,`rooms/${t}`),{status:"ready"})},ZI=async(t,e)=>{await ia(Ft(zt,`rooms/${t}`),{status:"playing",gameState:e})},eT=(t,e)=>S_(Ft(zt,`rooms/${t}`),n=>{e(n.val())}),yo=async(t,e)=>{await ia(Ft(zt,`rooms/${t}`),{gameState:e})},tT=async t=>{await Ck(Ft(zt,`rooms/${t}`))},nT=async(t,e)=>(await bS(qs,t,e)).user,rT=async(t,e)=>(await PS(qs,t,e)).user,iT=async()=>(await IS(qs)).user,sT=async()=>{await LS(qs)},oT=t=>DS(qs,t),Sp=async(t,e)=>{const n=Ft(zt,`users/${t}/decks`),r=JSON.parse(JSON.stringify(e,(i,s)=>s===void 0?null:s));await Qd(n,r)},lT=async t=>{const e=Ft(zt,`users/${t}/decks`),n=await k_(e);return n.exists()?n.val()||[]:[]};/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=t=>{const e=cT(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},dT=D.createContext({}),hT=()=>D.useContext(dT),fT=D.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},a)=>{const{size:c=24,strokeWidth:f=2,absoluteStrokeWidth:p=!1,color:h="currentColor",className:_=""}=hT()??{},y=r??p?Number(n??f)*24/Number(e??c):n??f;return D.createElement("svg",{ref:a,...qa,width:e??c??qa.width,height:e??c??qa.height,stroke:t??h,strokeWidth:y,className:av("lucide",_,i),...!s&&!uT(l)&&{"aria-hidden":"true"},...l},[...o.map(([x,R])=>D.createElement(x,R)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=(t,e)=>{const n=D.forwardRef(({className:r,...i},s)=>D.createElement(fT,{ref:s,iconNode:e,className:av(`lucide-${aT(Ip(t))}`,`lucide-${t}`,r),...i}));return n.displayName=Ip(t),n};/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],cv=de("book-open",pT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],gT=de("check",mT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]],_T=de("flag",yT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]],Qr=de("heart-pulse",vT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],xT=de("heart",wT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],uv=de("layers",ET);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=[["path",{d:"M5 12h14",key:"1ays0h"}]],Tp=de("minus",CT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Np=de("music",kT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],IT=de("pause",ST);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],dv=de("play",TT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Rp=de("plus",NT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],bp=de("save",RT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Dn=de("shield",bT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],AT=de("skip-forward",PT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],hv=de("smartphone",OT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Pp=de("square-pen",DT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],MT=de("star",LT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]],or=de("swords",jT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],zT=de("trash-2",FT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],WT=de("user",UT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],VT=de("volume-2",BT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],lh=de("x",HT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Ln=de("zap",$T),GT=({isOpen:t,onClose:e})=>{if(!t)return null;const n={marginBottom:"1.2rem",backgroundColor:"#f8fafc",padding:"16px",borderRadius:"8px",border:"1px solid #e2e8f0"},r={display:"flex",alignItems:"center",gap:"8px",fontSize:"1rem",color:"#1e293b",borderBottom:"2px solid #e2e8f0",paddingBottom:"8px",marginBottom:"12px",marginTop:0,fontWeight:"bold"},i={fontSize:"0.85rem",lineHeight:"1.6",color:"#475569",margin:"0 0 8px 0"},s={color:"#ef4444",fontWeight:"bold"};return u.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"16px"},onClick:e,children:u.jsxs("div",{style:{backgroundColor:"#ffffff",width:"100%",maxWidth:"850px",maxHeight:"90vh",borderRadius:"12px",border:"1px solid #cbd5e1",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.2)",display:"flex",flexDirection:"column",overflow:"hidden",position:"relative"},onClick:o=>o.stopPropagation(),children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 20px",backgroundColor:"#f1f5f9",borderBottom:"1px solid #e2e8f0"},children:[u.jsxs("h2",{style:{margin:0,fontSize:"1.1rem",color:"#0f172a",display:"flex",alignItems:"center",gap:"8px"},children:[u.jsx(cv,{size:20,color:"#6366f1"})," 遊び方ガイド"]}),u.jsx("button",{onClick:e,style:{background:"#e2e8f0",border:"none",color:"#475569",cursor:"pointer",padding:"6px",borderRadius:"50%",display:"flex",transition:"all 0.2s"},onMouseOver:o=>o.currentTarget.style.background="#cbd5e1",onMouseOut:o=>o.currentTarget.style.background="#e2e8f0",children:u.jsx(lh,{size:18})})]}),u.jsxs("div",{style:{padding:"20px",overflowY:"auto"},children:[u.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[u.jsxs("section",{style:{...n,flex:"1 1 300px"},children:[u.jsx("h3",{style:r,children:"1. バトルの目的と流れ"}),u.jsxs("p",{style:i,children:["30枚のデッキを使い、先に相手のメンタルを ",u.jsx("span",{style:s,children:"0"})," にした方の勝利です。",u.jsx("br",{}),"毎ターンカードを引き、準備ができたら",u.jsx("strong",{children:"「END TURN」"}),"を押して相手のターンへ移ります。"]})]}),u.jsxs("section",{style:{...n,flex:"1.5 1 350px"},children:[u.jsx("h3",{style:r,children:"2. デッキ作成とユニットの特長"}),u.jsxs("p",{style:i,children:["自分が使う",u.jsx("strong",{children:"「ユニット」"}),"を選び、",u.jsx("br",{}),u.jsx("strong",{children:"全体曲"}),"と",u.jsx("strong",{children:"指定したユニット曲"}),"のカードで",u.jsx("span",{style:s,children:"30枚"}),"のデッキを組みます。",u.jsx("br",{}),u.jsx("span",{style:{fontSize:"0.7rem",color:"#64748b"},children:"※同名カードは基本的に3枚まで編成可能です。"})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"6px"},children:[u.jsxs("div",{style:{background:"#fff",padding:"6px 10px",borderRadius:"4px",border:"1px solid #e2e8f0",borderLeft:"4px solid #d8289d"},children:[u.jsx("div",{style:{fontSize:"0.8rem",fontWeight:"bold",color:"#d8289d"},children:"スリーズブーケ"}),u.jsx("div",{style:{fontSize:"0.75rem",color:"#475569"},children:"手札コントロールや回復・シールドを駆使した戦いが得意"})]}),u.jsxs("div",{style:{background:"#fff",padding:"6px 10px",borderRadius:"4px",border:"1px solid #e2e8f0",borderLeft:"4px solid #3b82f6"},children:[u.jsx("div",{style:{fontSize:"0.8rem",fontWeight:"bold",color:"#1d4ed8"},children:"DOLLCHESTRA"}),u.jsx("div",{style:{fontSize:"0.75rem",color:"#475569"},children:"自傷ダメージによる大ダメージやコンボによるスリルのある戦いが得意"})]}),u.jsxs("div",{style:{background:"#fff",padding:"6px 10px",borderRadius:"4px",border:"1px solid #e2e8f0",borderLeft:"4px solid #eab308"},children:[u.jsx("div",{style:{fontSize:"0.8rem",fontWeight:"bold",color:"#a16207"},children:"みらくらぱーく！"}),u.jsx("div",{style:{fontSize:"0.75rem",color:"#475569"},children:"ボルテージ回復や連続ダメージによる楽しく激しい戦いが得意"})]})]})]})]}),u.jsxs("section",{style:n,children:[u.jsx("h3",{style:r,children:"3. バトルの重要システム"}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"flex-start"},children:[u.jsx(uv,{size:18,color:"#eab308",style:{marginTop:"2px"}}),u.jsxs("div",{children:[u.jsx("strong",{style:{fontSize:"0.9rem",color:"#1e293b"},children:"ボルテージ"}),u.jsx("p",{style:i,children:"毎ターン最大値が増加（最大10）。1ターンに使えるカードのコスト上限です。"})]})]}),u.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"flex-start"},children:[u.jsx(MT,{size:18,color:"#a855f7",style:{marginTop:"2px"}}),u.jsxs("div",{children:[u.jsx("strong",{style:{fontSize:"0.9rem",color:"#1e293b"},children:"SPスキル"}),u.jsx("p",{style:i,children:"バトル中1回だけ、ボルテージを4回復できます"})]})]})]})]}),u.jsxs("section",{style:n,children:[u.jsx("h3",{style:r,children:" 4. カードの見方と4つの基本効果"}),u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px",alignItems:"center"},children:[u.jsxs("div",{style:{width:"150px",height:"210px",background:"#fff",borderRadius:"8px",padding:"8px",position:"relative",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",border:"2px solid #cbd5e1"},children:[u.jsx("div",{style:{position:"absolute",top:"-8px",left:"-8px",background:"#3b82f6",color:"white",width:"32px",height:"32px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",fontSize:"1rem",border:"2px solid white"},children:"3"}),u.jsx("div",{style:{marginTop:"16px",fontSize:"0.7rem",color:"#881337",fontWeight:"bold"},children:"スリーズブーケ"}),u.jsx("div",{style:{marginTop:"4px",fontSize:"0.9rem",fontWeight:"bold",color:"#0f172a"},children:"カードの名前"}),u.jsx("div",{style:{position:"absolute",bottom:"8px",left:"8px",right:"8px",background:"#f1f5f9",padding:"8px",borderRadius:"6px",fontSize:"0.7rem",color:"#334155"},children:"左上が消費コストです。下部にカードの能力が書かれています。"})]}),u.jsxs("div",{style:{flex:1,minWidth:"250px"},children:[u.jsx("p",{style:i,children:"カードを使うことで、以下の4つの基本的な効果が発生します。"}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginTop:"8px"},children:[u.jsxs("div",{style:{background:"#fff",padding:"10px",borderRadius:"6px",border:"1px solid #e2e8f0"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:"bold",color:"#ef4444",fontSize:"0.9rem"},children:[u.jsx(or,{size:16})," 攻撃"]}),u.jsx("div",{style:{fontSize:"0.8rem",color:"#475569",marginTop:"4px"},children:"相手のメンタルにダメージを与えて減らします。"})]}),u.jsxs("div",{style:{background:"#fff",padding:"10px",borderRadius:"6px",border:"1px solid #e2e8f0"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:"bold",color:"#10b981",fontSize:"0.9rem"},children:[u.jsx(xT,{size:16})," 回復"]}),u.jsx("div",{style:{fontSize:"0.8rem",color:"#475569",marginTop:"4px"},children:"減ってしまった自分のメンタルを回復します。"})]}),u.jsxs("div",{style:{background:"#fff",padding:"10px",borderRadius:"6px",border:"1px solid #e2e8f0"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:"bold",color:"#3b82f6",fontSize:"0.9rem"},children:[u.jsx(Dn,{size:16})," シールド"]}),u.jsx("div",{style:{fontSize:"0.8rem",color:"#475569",marginTop:"4px"},children:"相手からの攻撃ダメージを代わりに受けて防ぐシールドを付与します。"})]}),u.jsxs("div",{style:{background:"#fff",padding:"10px",borderRadius:"6px",border:"1px solid #e2e8f0"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:"bold",color:"#9333ea",fontSize:"0.9rem"},children:[u.jsx(Ln,{size:16})," 自傷"]}),u.jsx("div",{style:{fontSize:"0.8rem",color:"#475569",marginTop:"4px"},children:"強力な効果の代償として、自身のメンタルが減ります。"})]})]})]})]})]}),u.jsxs("section",{style:n,children:[u.jsx("h3",{style:r,children:"5. 条件で発動する「トリガー効果」"}),u.jsx("p",{style:i,children:"特定の条件を満たした時だけ、通常よりも強力な追加効果を発揮するカードが存在します。"}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsxs("div",{style:{background:"#fff",padding:"12px",borderRadius:"6px",borderLeft:"4px solid #eab308",borderTop:"1px solid #e2e8f0",borderRight:"1px solid #e2e8f0",borderBottom:"1px solid #e2e8f0"},children:[u.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"bold",color:"#1e293b",marginBottom:"4px"},children:"ボルテージ数 トリガー"}),u.jsx("div",{style:{fontSize:"0.8rem",color:"#475569"},children:"現在のボルテージが指定の数値以上溜まっていると効果が発動します。"}),u.jsxs("div",{style:{fontSize:"0.8rem",color:"#64748b",marginTop:"4px",backgroundColor:"#f8fafc",padding:"4px 8px",borderRadius:"4px"},children:[u.jsx("strong",{children:"例："}),"「ボルテージが5以上の時、相手に2ダメージ与える」"]})]}),u.jsxs("div",{style:{background:"#fff",padding:"12px",borderRadius:"6px",borderLeft:"4px solid #0ea5e9",borderTop:"1px solid #e2e8f0",borderRight:"1px solid #e2e8f0",borderBottom:"1px solid #e2e8f0"},children:[u.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"bold",color:"#1e293b",marginBottom:"4px"},children:"行動回数 トリガー"}),u.jsx("div",{style:{fontSize:"0.8rem",color:"#475569"},children:"そのターンにカードを使った回数が指定の回数以上だと効果が発動します。"}),u.jsxs("div",{style:{fontSize:"0.8rem",color:"#64748b",marginTop:"4px",backgroundColor:"#f8fafc",padding:"4px 8px",borderRadius:"4px"},children:[u.jsx("strong",{children:"例："}),"「このカードのコストは、ターン中に使用したカードの枚数分小さくなる」"]})]}),u.jsxs("div",{style:{background:"#fff",padding:"12px",borderRadius:"6px",borderLeft:"4px solid #9333ea",borderTop:"1px solid #e2e8f0",borderRight:"1px solid #e2e8f0",borderBottom:"1px solid #e2e8f0"},children:[u.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"bold",color:"#1e293b",marginBottom:"4px"},children:"自傷ダメージ トリガー"}),u.jsx("div",{style:{fontSize:"0.8rem",color:"#475569"},children:"そのターン中に、自分のカードの効果でダメージ（自傷）を受けていると発動します。"}),u.jsxs("div",{style:{fontSize:"0.8rem",color:"#64748b",marginTop:"4px",backgroundColor:"#f8fafc",padding:"4px 8px",borderRadius:"4px"},children:[u.jsx("strong",{children:"例："}),"「このターン中、既にダメージを受けている場合、カードを1枚引く」"]})]})]})]}),u.jsx("div",{style:{textAlign:"center",marginTop:"24px",padding:"12px"},children:u.jsx("button",{onClick:e,style:{padding:"10px 32px",fontSize:"0.95rem",fontWeight:"bold",color:"#ffffff",background:"#6366f1",border:"none",borderRadius:"50px",cursor:"pointer",boxShadow:"0 4px 6px rgba(99, 102, 241, 0.3)",transition:"transform 0.2s"},onMouseOver:o=>o.currentTarget.style.transform="scale(1.05)",onMouseOut:o=>o.currentTarget.style.transform="scale(1)",children:"閉じてゲームに戻る"})})]})]})})},YT=({playerName:t,setPlayerName:e,setGameMode:n,setScreen:r,user:i})=>{const[s,o]=D.useState(!1);return u.jsxs("div",{className:"home-screen",style:{padding:0,overflow:"hidden",position:"relative",width:"100%",height:"100%"},children:[u.jsx(GT,{isOpen:s,onClose:()=>o(!1)}),u.jsxs("div",{style:{position:"absolute",top:"max(2vh, env(safe-area-inset-top))",left:"max(2vw, env(safe-area-inset-left))",color:"#ffffff",fontSize:"min(0.875rem, 3.5vh)",background:"rgba(0,0,0,0.5)",padding:"min(6px, 1.5vh) min(12px, 2vw)",borderRadius:"20px",border:"1px solid #374151",display:"flex",alignItems:"center",gap:"6px",zIndex:10},children:[u.jsx(WT,{size:14}),i!=null&&i.isAnonymous?"ゲストとしてプレイ中":i==null?void 0:i.email]}),u.jsx("button",{onClick:async()=>{window.confirm(`ログイン画面に戻りますか？
（※ゲストで作成したデータから離れます）`)&&await sT()},style:{position:"absolute",top:"max(2vh, env(safe-area-inset-top))",right:"max(2vw, env(safe-area-inset-right))",color:"#ffffff",fontSize:"min(0.875rem, 3.5vh)",background:"rgba(0,0,0,0.5)",padding:"min(6px, 1.5vh) min(12px, 2vw)",borderRadius:"20px",border:"1px solid #374151",display:"flex",alignItems:"center",cursor:"pointer",fontWeight:"bold",transition:"all 0.2s",zIndex:10},onMouseOver:l=>{l.currentTarget.style.background="rgba(255,255,255,0.1)",l.currentTarget.style.color="#ffffff"},onMouseOut:l=>{l.currentTarget.style.background="rgba(0,0,0,0.5)",l.currentTarget.style.color="#9ca3af"},children:"ログイン / アカウント切替"}),u.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"min(1.5rem, 3vh)",width:"100%",zIndex:5},children:[u.jsxs("div",{className:"title-logo",style:{textAlign:"center",marginBottom:0,lineHeight:"1.1"},children:[u.jsxs("div",{children:[u.jsx("span",{className:"title-link",style:{fontSize:"min(4rem, 14vh)"},children:"Link!"}),u.jsx("span",{className:"title-like",style:{fontSize:"min(4rem, 14vh)"},children:"Like!"})]}),u.jsx("div",{className:"title-battle",style:{fontSize:"min(5rem, 18vh)"},children:"Battle!"})]}),u.jsx("p",{className:"title-subtitle",style:{margin:0,fontSize:"min(1.2rem, 4.5vh)"},children:"究極のスクールアイドルバトル"}),u.jsx("input",{className:"name-input",maxLength:6,value:t,onChange:l=>e(l.target.value),placeholder:"プレイヤー名 (最大6文字)",style:{margin:0,padding:"min(15px, 2.5vh)",fontSize:"min(1.5rem, 5vh)",width:"min(250px, 40vw)",height:"min(60px, 9vh)",boxSizing:"border-box"}}),u.jsxs("div",{className:"mode-buttons",style:{display:"flex",gap:"min(1rem, 3vw)"},children:[u.jsx("button",{className:"title-start-btn",onClick:()=>{n("cpu"),r("deckBuilder")},style:{padding:"min(1rem, 1.5vh) min(2.5rem, 3vw)",fontSize:"min(1.5rem, 5.5vh)"},children:"CPU戦で遊ぶ"}),u.jsx("button",{className:"title-start-btn",style:{background:"var(--secondary)",padding:"min(1rem, 1.5vh) min(2.5rem, 3vw)",fontSize:"min(1.5rem, 5.5vh)"},onClick:()=>{n("online"),r("deckBuilder")},children:"通信対戦で遊ぶ"})]}),u.jsxs("button",{onClick:()=>o(!0),style:{marginTop:"min(0.5rem, 1vh)",padding:"min(10px, 1.8vh) min(32px, 4vw)",backgroundColor:"rgba(4, 169, 181, 0.16)",color:"#000000",border:"1px solid rgba(255, 255, 255, 0.3)",borderRadius:"50px",cursor:"pointer",fontSize:"min(1rem, 4vh)",fontWeight:"bold",display:"flex",alignItems:"center",gap:"8px",backdropFilter:"blur(4px)",transition:"all 0.2s",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"},onMouseOver:l=>{l.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.2)",l.currentTarget.style.transform="translateY(-2px)"},onMouseOut:l=>{l.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.1)",l.currentTarget.style.transform="translateY(0)"},children:[u.jsx(cv,{size:18})," 遊び方を見る"]})]})]})};function nr(t){return t?t.includes("スリーズブーケ")&&t.includes("DOLLCHESTRA")&&t.includes("みらくらぱーく")?"linear-gradient(135deg, #ffd6e0, #c5d8f0, #fff0b3)":t.includes("スリーズブーケ")?"#ffd6e0":t.includes("DOLLCHESTRA")?"#c5d8f0":t.includes("みらくらぱーく")?"#fff0b3":"#EEEEEE":"#c8c8c8"}const Jr=({card:t})=>t?u.jsxs("div",{className:"card",style:{background:nr(t.歌唱),margin:0},children:[u.jsx("div",{className:"card-cost",children:t.コスト}),u.jsx("div",{className:"card-title",children:t.曲名}),u.jsxs("div",{className:"card-tags",children:[u.jsx("span",{children:t.歌唱}),u.jsx("span",{children:t.センター})]}),u.jsxs("div",{className:"card-stats",children:[t.パワー&&u.jsxs("span",{className:"stat-item stat-power",children:[u.jsx(or,{size:12}),t.パワー]}),t.シールド&&u.jsxs("span",{className:"stat-item stat-shield",children:[u.jsx(Dn,{size:12}),t.シールド]}),t.ヒール&&u.jsxs("span",{className:"stat-item stat-heal",children:[u.jsx(Qr,{size:12}),t.ヒール]}),t.ダメージ&&u.jsxs("span",{className:"stat-item stat-damage",children:[u.jsx(Ln,{size:12}),t.ダメージ]})]}),u.jsxs("div",{className:"card-effect",children:[t.効果1&&u.jsx("div",{style:{marginBottom:"4px"},children:t.効果1}),t.効果2&&u.jsx("div",{children:t.効果2})]})]}):null,KT=({user:t,deckList:e,setDeckList:n,selectedUnit:r,setSelectedUnit:i,currentDeckName:s,setCurrentDeckName:o})=>{const[l,a]=D.useState([null,null,null,null,null]),[c,f]=D.useState(!1),[p,h]=D.useState(null),[_,y]=D.useState(null),[x,R]=D.useState("");D.useEffect(()=>{t&&lT(t.uid).then(w=>{const E=[...w];for(;E.length<5;)E.push(null);a(E.slice(0,5))})},[t]);const g=async w=>{if(!r||Object.keys(e).length===0){alert("デッキが空か、ユニットが選択されていません。");return}const E=s||`デッキ ${w+1}`,N=[...l];N[w]={name:E,unit:r,deckList:e},f(!0);try{await Sp(t.uid,N),a(N),o(E),h(null),alert("デッキを保存しました！")}catch{alert("保存に失敗しました。")}f(!1)},m=w=>{const E=l[w];E&&window.confirm(`「${E.name}」を読み込みますか？
（現在の編集内容は失われます）`)&&(i(E.unit),n(E.deckList),o(E.name),h(null))},d=async w=>{const E=l[w];if(!E)return;const N=x||`デッキ ${w+1}`,P=[...l];P[w]={...E,name:N},f(!0);try{await Sp(t.uid,P),a(P),y(null),s===E.name&&o(N)}catch{alert("名前の変更に失敗しました。")}f(!1)};return u.jsxs("div",{style:{display:"flex",gap:"0.4rem"},children:[u.jsxs("button",{onClick:()=>h("list"),style:{padding:"0.2rem 0.6rem",fontSize:"0.7rem",background:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center",gap:"4px"},children:[u.jsx(Pp,{size:14})," デッキ編集"]}),u.jsxs("button",{onClick:()=>h("save"),style:{padding:"0.2rem 0.6rem",fontSize:"0.7rem",background:"#10b981",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center",gap:"4px"},children:[u.jsx(bp,{size:14})," デッキ保存"]}),p&&u.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.8)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},children:u.jsxs("div",{style:{background:"#1f2937",padding:"24px",borderRadius:"12px",width:"420px",color:"white",border:"1px solid #374151"},children:[u.jsx("h3",{style:{marginTop:0,borderBottom:"1px solid #374151",paddingBottom:"12px",display:"flex",alignItems:"center",gap:"8px"},children:p==="save"?u.jsxs(u.Fragment,{children:[u.jsx(bp,{size:20})," 現在のデッキを保存 (最大5枠)"]}):u.jsxs(u.Fragment,{children:[u.jsx(Pp,{size:20})," デッキ一覧 / 編集"]})}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px",marginTop:"16px"},children:l.map((w,E)=>u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"#374151",padding:"10px 12px",borderRadius:"6px"},children:[u.jsxs("div",{style:{flex:1,display:"flex",alignItems:"center",gap:"8px",marginRight:"10px",overflow:"hidden"},children:[u.jsx("span",{style:{fontWeight:"bold",color:"#9ca3af",flexShrink:0},children:E+1}),_===E?u.jsx("input",{type:"text",value:x,onChange:N=>R(N.target.value),maxLength:15,style:{width:"100%",padding:"4px 8px",borderRadius:"4px",border:"1px solid #3b82f6",background:"#1f2937",color:"white",outline:"none"},autoFocus:!0}):u.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:w?"white":"#6b7280"},children:w?w.name:"空き枠"})]}),u.jsx("div",{style:{display:"flex",gap:"6px",flexShrink:0},children:p==="list"?_===E?u.jsxs(u.Fragment,{children:[u.jsx("button",{onClick:()=>d(E),disabled:c,style:{padding:"4px 8px",background:"#10b981",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",display:"flex",alignItems:"center"},children:u.jsx(gT,{size:14})}),u.jsx("button",{onClick:()=>y(null),disabled:c,style:{padding:"4px 8px",background:"#6b7280",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",display:"flex",alignItems:"center"},children:u.jsx(lh,{size:14})})]}):u.jsxs(u.Fragment,{children:[u.jsx("button",{onClick:()=>{y(E),R((w==null?void 0:w.name)||`デッキ ${E+1}`)},disabled:c||!w,style:{padding:"4px 8px",background:"#6b7280",color:"white",border:"none",borderRadius:"4px",cursor:w?"pointer":"not-allowed",opacity:w?1:.3},children:"編集"}),u.jsx("button",{onClick:()=>m(E),disabled:c||!w,style:{padding:"4px 8px",background:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:w?"pointer":"not-allowed",opacity:w?1:.3},children:"読込"})]}):u.jsx("button",{onClick:()=>g(E),disabled:c,style:{padding:"4px 12px",background:"#10b981",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:w?"上書き":"保存"})})]},E))}),u.jsx("div",{style:{marginTop:"20px",textAlign:"right"},children:u.jsx("button",{onClick:()=>{h(null),y(null)},style:{padding:"8px 16px",background:"transparent",color:"#9ca3af",border:"1px solid #4b5563",borderRadius:"6px",cursor:"pointer"},children:"閉じる"})})]})})]})},Qa=ud,qT=({gameMode:t,setScreen:e,deckTotal:n,selectedUnit:r,setSelectedUnit:i,manaCurve:s,maxManaCount:o,handleDeckComplete:l,loadStarterDeck:a,deckList:c,setDeckList:f,availableCards:p,selectedCard:h,setSelectedCard:_,removeCardFromDeck:y,addCardToDeck:x,user:R})=>{const[g,m]=D.useState("新規デッキ");return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"orientation-warning",children:[u.jsx(hv,{size:64}),u.jsx("h2",{style:{marginTop:"1rem"},children:"画面を横向きにしてください"}),u.jsx("p",{children:"このゲームは横画面専用です"})]}),u.jsxs("div",{className:"deck-builder-screen",children:[u.jsxs("div",{style:{flexShrink:0,background:"#fff",borderBottom:"1px solid #eee",paddingBottom:"4px",zIndex:10},children:[u.jsxs("div",{style:{padding:"0.2rem 1rem",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.8rem"},children:[u.jsx("button",{className:"back-btn",onClick:()=>e("home"),style:{padding:"0.1rem 0.4rem"},children:"← ホーム"}),u.jsx("h1",{className:"deck-builder-title",style:{fontSize:"0.9rem",margin:0},children:"デッキ作成"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",background:"#f1f5f9",padding:"0.2rem 0.5rem",borderRadius:"4px",border:"1px solid #cbd5e1"},children:[u.jsx("span",{style:{fontSize:"0.65rem",color:"#64748b",fontWeight:"bold"},children:"デッキ名:"}),u.jsx("input",{value:g,onChange:d=>m(d.target.value),maxLength:15,style:{border:"none",background:"transparent",fontSize:"0.8rem",fontWeight:"bold",width:"120px",padding:0,outline:"none",color:"#333"}})]}),u.jsxs("div",{className:"deck-counter",style:{padding:"0.1rem 0.6rem",fontSize:"0.8rem"},children:[n," / 30"]})]})]}),u.jsxs("div",{className:"unit-select-area",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.2rem 1rem",gap:"0.5rem"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.2rem",flexShrink:0},children:[u.jsx("span",{className:"unit-label",style:{fontSize:"0.75rem"},children:"基本ユニット:"}),["スリーズブーケ","DOLLCHESTRA","みらくらぱーく！"].map(d=>u.jsx("button",{className:`unit-btn ${r===d?"active":""}`,style:{background:d==="スリーズブーケ"?"#ffd6e0":d==="DOLLCHESTRA"?"#c5d8f0":"#fff0b3",padding:"0.2rem 0.4rem",fontSize:"0.65rem"},onClick:()=>{r!==d&&n>0&&!window.confirm("基本ユニットを変更するとデッキがリセットされます。よろしいですか？")||(i(d),f({}))},children:d},d))]}),u.jsx("div",{className:"mana-curve-wrapper",style:{flex:1,maxWidth:"180px",margin:"0"},children:u.jsx("div",{className:"mana-curve",style:{height:"30px",padding:0},children:s.map((d,w)=>u.jsxs("div",{className:"mana-bar-container",style:{width:"12%"},children:[u.jsxs("div",{className:"mana-bar-bg",style:{background:"#e2e8f0"},children:[d>0&&u.jsx("span",{className:"mana-bar-count",style:{fontSize:"0.5rem",bottom:"1px"},children:d}),u.jsx("div",{className:"mana-bar-fill",style:{height:`${o>0?d/o*100:0}%`}})]}),u.jsx("span",{className:"mana-label",style:{fontSize:"0.45rem",marginTop:"1px"},children:w===7?"7+":w})]},w))})}),u.jsx("div",{style:{flexShrink:0},children:u.jsx("button",{className:`battle-start-btn ${n===30?"ready":""}`,disabled:n!==30,onClick:l,style:{width:"auto",padding:"0.3rem 0.8rem",fontSize:"0.8rem"},children:t==="cpu"?"バトル開始":"ロビーへ進む"})})]}),r&&u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",padding:"0 1rem 0.2rem"},children:[u.jsx("button",{className:"starter-btn",onClick:a,style:{padding:"0.2rem 0.6rem",fontSize:"0.7rem"},children:"スターターデッキを読み込む"}),u.jsx("button",{className:"clear-btn",onClick:()=>f({}),style:{padding:"0.2rem 0.6rem",fontSize:"0.7rem"},children:"クリア"}),u.jsx(KT,{user:R,deckList:c,setDeckList:f,selectedUnit:r,setSelectedUnit:i,currentDeckName:g,setCurrentDeckName:m})]})]}),r&&u.jsxs("div",{className:"deck-builder-body",style:{flex:1,overflowY:"auto",paddingBottom:"20px"},children:[u.jsxs("div",{className:"card-pool",children:[u.jsx("h3",{className:"pool-title",children:"カードプール"}),u.jsx("div",{className:"pool-list",children:p.map((d,w)=>{const E=c[d.曲名]||0,N=E<3&&n<30;return u.jsxs("div",{className:"pool-card",style:{background:nr(d.歌唱)},onClick:()=>_(d),children:[u.jsxs("div",{className:"pool-card-info",children:[u.jsx("span",{className:"pool-card-cost",children:d.コスト}),u.jsx("span",{className:"pool-card-name",children:d.曲名})]}),u.jsxs("div",{className:"pool-card-tags",children:[u.jsx("span",{className:"pool-card-unit",children:d.歌唱==="蓮ノ空女学院スクールアイドルクラブ"?"蓮ノ空":d.歌唱}),u.jsx("span",{className:"pool-card-center",children:d.センター})]}),u.jsxs("div",{className:"pool-card-stats",children:[d.パワー&&u.jsxs("span",{className:"stat-power",children:[u.jsx(or,{size:10}),d.パワー]}),d.シールド&&u.jsxs("span",{className:"stat-shield",children:[u.jsx(Dn,{size:10}),d.シールド]}),d.ヒール&&u.jsxs("span",{className:"stat-heal",children:[u.jsx(Qr,{size:10}),d.ヒール]}),d.ダメージ&&u.jsxs("span",{className:"stat-damage",children:[u.jsx(Ln,{size:10}),d.ダメージ]})]}),u.jsxs("div",{className:"pool-card-controls",children:[u.jsx("button",{className:"pool-btn remove",onClick:P=>{P.stopPropagation(),y(d.曲名)},disabled:E===0,children:u.jsx(Tp,{size:14})}),u.jsx("span",{className:"pool-count",children:E}),u.jsx("button",{className:"pool-btn add",onClick:P=>{P.stopPropagation(),x(d.曲名)},disabled:!N,children:u.jsx(Rp,{size:14})})]})]},w)})})]}),u.jsxs("div",{className:"deck-preview",children:[u.jsxs("h3",{className:"pool-title",children:["デッキ内容 (",n,"/30)"]}),u.jsxs("div",{className:"deck-list",children:[Object.entries(c).sort((d,w)=>{const E=Qa.find(P=>P.曲名===d[0]),N=Qa.find(P=>P.曲名===w[0]);return(Number(E==null?void 0:E.コスト)||0)-(Number(N==null?void 0:N.コスト)||0)}).map(([d,w])=>{const E=Qa.find(N=>N.曲名===d);return u.jsxs("div",{className:"deck-item",style:{borderLeft:`4px solid ${E?nr(E.歌唱)==="#d0d0d0"?"#999":nr(E.歌唱).replace("linear-gradient(135deg, ","").split(",")[0]:"#999"}`},onClick:()=>_(E),children:[u.jsxs("div",{className:"deck-item-left",children:[u.jsx("span",{className:"deck-item-cost",children:E==null?void 0:E.コスト}),u.jsxs("div",{className:"deck-item-details",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[u.jsx("span",{className:"deck-item-name",children:d}),u.jsx("span",{style:{fontSize:"0.6rem",color:"#666"},children:E==null?void 0:E.センター})]}),u.jsxs("div",{className:"deck-item-stats",children:[(E==null?void 0:E.パワー)&&u.jsxs("span",{className:"stat-power",children:[u.jsx(or,{size:8}),E.パワー]}),(E==null?void 0:E.シールド)&&u.jsxs("span",{className:"stat-shield",children:[u.jsx(Dn,{size:8}),E.シールド]}),(E==null?void 0:E.ヒール)&&u.jsxs("span",{className:"stat-heal",children:[u.jsx(Qr,{size:8}),E.ヒール]}),(E==null?void 0:E.ダメージ)&&u.jsxs("span",{className:"stat-damage",children:[u.jsx(Ln,{size:8}),E.ダメージ]})]})]})]}),u.jsxs("div",{className:"deck-item-right",children:[u.jsxs("span",{className:"deck-item-count",children:["×",w]}),u.jsxs("div",{style:{display:"flex",gap:"4px"},children:[u.jsx("button",{className:"deck-item-remove",style:{background:"#38a169"},onClick:N=>{N.stopPropagation(),x(d)},disabled:w>=3||n>=30,children:u.jsx(Rp,{size:12})}),u.jsx("button",{className:"deck-item-remove",onClick:N=>{N.stopPropagation(),y(d)},children:u.jsx(Tp,{size:12})})]})]})]},d)}),n===0&&u.jsx("div",{className:"deck-empty",children:"カードを追加してください"})]})]})]}),h&&u.jsx("div",{className:"card-preview-overlay",style:{zIndex:3e3},onClick:()=>_(null),children:u.jsxs("div",{className:"card-preview",style:{background:nr(h.歌唱),cursor:"default"},onClick:d=>d.stopPropagation(),children:[u.jsx("div",{className:"card-cost",style:{top:"-12px",left:"-12px",width:"44px",height:"44px",fontSize:"1.4rem"},children:h.コスト}),u.jsx("div",{className:"card-title",style:{fontSize:"1.4rem"},children:h.曲名}),u.jsxs("div",{className:"card-tags",style:{fontSize:"0.85rem"},children:[u.jsx("span",{children:h.歌唱}),u.jsx("span",{children:h.センター})]}),u.jsxs("div",{className:"card-stats",style:{fontSize:"0.95rem",padding:"8px"},children:[h.パワー&&u.jsxs("span",{className:"stat-item stat-power",children:[u.jsx(or,{size:16})," ",h.パワー]}),h.シールド&&u.jsxs("span",{className:"stat-item stat-shield",children:[u.jsx(Dn,{size:16})," ",h.シールド]}),h.ヒール&&u.jsxs("span",{className:"stat-item stat-heal",children:[u.jsx(Qr,{size:16})," ",h.ヒール]}),h.ダメージ&&u.jsxs("span",{className:"stat-item stat-damage",children:[u.jsx(Ln,{size:16})," ",h.ダメージ]})]}),u.jsxs("div",{className:"card-effect",style:{fontSize:"1.15rem",padding:"12px"},children:[h.効果1&&u.jsx("div",{style:{marginBottom:"6px"},children:h.効果1}),h.効果2&&u.jsx("div",{children:h.効果2})]}),u.jsx("div",{style:{display:"flex",gap:"8px",marginTop:"10px"},children:u.jsx("button",{className:"preview-close-btn",style:{width:"100%"},onClick:()=>_(null),children:"閉じる"})})]})})]})]})},QT=({roomsList:t,handleCreateRoom:e,handleJoinRoom:n,setScreen:r})=>u.jsxs("div",{className:"lobby-screen",children:[u.jsx("h2",{style:{fontSize:"2rem",marginBottom:"1rem",color:"var(--secondary)",fontFamily:"Outfit"},children:"ROOMLIST"}),u.jsx("button",{className:"title-start-btn",style:{marginBottom:"1rem"},onClick:e,children:"部屋を作る"}),u.jsx("div",{className:"room-list",children:t.length===0?u.jsx("p",{style:{textAlign:"center",color:"#666"},children:"現在、待機中の部屋はありません。"}):t.map(i=>u.jsxs("div",{className:"room-item",children:[u.jsx("span",{children:i.roomName}),u.jsx("button",{className:"room-join-btn",onClick:()=>n(i.id),children:"入る"})]},i.id))}),u.jsx("button",{style:{marginTop:"2rem",padding:"10px",background:"none",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},onClick:()=>r("deckBuilder"),children:"戻る"})]}),JT=({isHost:t,playerName:e,roomData:n,roomId:r,handleHostStartGame:i})=>u.jsx("div",{className:"waiting-screen",children:u.jsxs("div",{className:"waiting-box",children:[u.jsx("h2",{style:{fontSize:"1.5rem",marginBottom:"1rem",color:"#333"},children:t?"あなたの部屋":"通信待機室"}),u.jsx("div",{className:"vs-text",children:t?e||"YOU":n==null?void 0:n.hostName}),u.jsx("div",{style:{fontWeight:"bold",color:"#666"},children:"VS"}),u.jsx("div",{className:"vs-text",children:t?(n==null?void 0:n.clientName)||"待機中...":e||"YOU"}),u.jsx("div",{style:{marginTop:"2rem"},children:t?(n==null?void 0:n.status)==="ready"?u.jsx("button",{className:"title-start-btn",onClick:i,children:"バトル開始"}):u.jsx("p",{style:{color:"#666"},children:"相手の準備を待っています..."}):(n==null?void 0:n.status)==="waiting"?u.jsx("button",{className:"title-start-btn",style:{background:"#10b981"},onClick:()=>XI(r),children:"準備OK"}):u.jsx("p",{style:{color:"#666"},children:"ホストの開始を待っています..."})})]})});function jr(t,e){var p,h;let n=Number(t.コスト)||0;const r=t.効果1||"",i=t.効果2||"",s=r+`
`+i;if(s.includes("ターン中に使用したカードの枚数分小さくなる")){const _=((p=e.buffs.turnCardsPlayed)==null?void 0:p.length)||0;n-=_}e.buffs.onyourmark102Active&&["乙宗 梢","夕霧 綴理","藤島 慈"].includes(t.センター)&&(n-=2),e.buffs.nextCardCostDown&&(n-=e.buffs.nextCardCostDown),t.costModifier&&(n+=t.costModifier);const o=s.match(/手札が(\d+)枚以上の時、コストを(\d+)にする/);o&&e.hand.length>=parseInt(o[1],10)&&(n=parseInt(o[2],10));const l=s.match(/ユニットが「(.+?)」のカードを使用している場合、コストを(\d+)にする/);if(l){const _=l[1];((h=e.buffs.turnCardsPlayedDetails)==null?void 0:h.some(x=>x.歌唱&&x.歌唱.includes(_)))&&(n=parseInt(l[2],10))}const a=s.match(/ボルテージが(\d+)以上の時、コストを(\d+)にする/);if(a){const _=parseInt(a[1],10);e.maxVoltage>=_&&(n=parseInt(a[2],10))}const c=s.match(/手札が(\d+)枚以下の時、コストを(\d+)にする/);c&&e.hand.length<=parseInt(c[1],10)&&(n=parseInt(c[2],10)),s.includes("ダメージを受けた回数の分コストを減らす")&&(n-=e.buffs.tookDamageCount||0);const f=s.match(/既にダメージを受けている場合、コストを(\d+)にする/);return f&&e.buffs.tookDamageThisTurn&&(n=parseInt(f[1],10)),Math.max(0,n)}function cn(t){if(t.deck.length===0)return t.hp=0,{success:!1,deckOut:!0};const e=t.deck.shift();return t.hand.length>=8?(t.discard.push(e),{success:!0,card:e,overdrawn:!0}):(t.hand.push(e),{success:!0,card:e,overdrawn:!1})}function XT(t){if(t.hand.length===0)return null;const e=Math.floor(Math.random()*t.hand.length),n=t.hand.splice(e,1)[0];return t.discard.push(n),n}function ZT(t,e,n){const r=JSON.parse(JSON.stringify(t)),i=n?r.player:r.enemy,s=n?r.enemy:r.player,o=[],l=(d,w)=>o.push({type:d,data:w,isPlayer:n}),a=i.buffs.kozueDrawActive,c=i.buffs.sayakaDmgActive,f=d=>{for(let w=0;w<d;w++){const E=cn(i);E.overdrawn&&E.card?l("overdraw",{card:E.card}):E.success&&l("draw",{count:1})}},p=d=>{var mt,L,C,S;if(!d)return;const w=d.match(/このターン中、(.+?)が「(.+?)」のカードを使用している場合、(.+)/);if(w){const v=w[1],T=w[2],I=w[3];((mt=i.buffs.turnCardsPlayedDetails)==null?void 0:mt.some(j=>j.uid===e.id?!1:v.includes("センター")||v.includes("キャラクター")?j.センター&&j.センター.includes(T):v.includes("ユニット")||v.includes("歌唱")?j.歌唱&&j.歌唱.includes(T):v.includes("カード名")||v.includes("名前")?j.曲名&&j.曲名.includes(T):!1))&&p(I)}const E=d.match(/このターン中、「(.+?)」のカードを使用している場合、(.+)/);if(!w&&E){const v=E[1],T=E[2];((L=i.buffs.turnCardsPlayedDetails)==null?void 0:L.some(k=>k.uid===e.id?!1:k.センター&&k.センター.includes(v)||k.歌唱&&k.歌唱.includes(v)||k.曲名&&k.曲名.includes(v)))&&p(T)}const N=d.match(/ボルテージが(\d+)以上の時/);if(N){const v=parseInt(N[1],10);if(i.maxVoltage<v)return}const P=d.match(/ボルテージが(\d+)以下の時/);if(P){const v=parseInt(P[1],10);if(i.maxVoltage>v)return}const O=d.match(/手札が(\d+)枚以下の時/);if(O){const v=parseInt(O[1],10);if(i.hand.length+1>v)return}const H=d.match(/手札が(\d+)枚以上の時/);if(H){const v=parseInt(H[1],10);if(i.hand.length+1<v)return}const z=d.match(/体力が(\d+)以下の時/);if(z){const v=parseInt(z[1],10);if(i.hp>v)return}if(d.includes("ターン終了時")||d.includes("このターンの最後に使用した時")){i.buffs.queuedEndTurnEffects||(i.buffs.queuedEndTurnEffects=[]);const v=d.includes("最後に使用した時");if(d.includes("残りボルテージの数だけカードを引く"))i.buffs.queuedEndTurnEffects.push({type:"draw_voltage",isLast:v});else if(d.includes("をドローする")){const T=d.match(/「(.+?)」をドローする/);i.buffs.queuedEndTurnEffects.push({type:"draw_specific",name:T?T[1]:null,isLast:v})}else d.includes("3ヒールする")&&i.buffs.queuedEndTurnEffects.push({type:"heal",value:3,isLast:v});return}if(d.includes("使用したカードの数だけ相手にダメージを与える")){const v=((C=i.buffs.turnCardsPlayed)==null?void 0:C.length)||0;v>0&&h(s,v,l,"kokon_tozai",n)}if(d.includes("次の相手のターン、相手のボルテージが3になる")&&(i.buffs.setEnemyVoltage3=!0),d.includes("センターが「乙宗 梢」「夕霧 綴理」「藤島 慈」いずれかのカードを使用する度にコストを2減らす")&&(i.buffs.onyourmark102Active=!0),d.includes("付与されているシールドの分相手にダメージを与え、シールドを0にする")){const v=i.shield;v>0&&(h(s,v,l,"shield_bash",n),i.shield=0)}const he=d.match(/相手に(\d+)ダメージ/);if(he){const v=parseInt(he[1],10);h(s,v,l,"direct",n)}d.includes("このカードを使用した時、ターンエンドする")&&(r.forceTurnEnd=!0);const Ie=d.match(/ボルテージを(\d+)回復/);if(Ie){const v=parseInt(Ie[1],10);i.currentVoltage=Math.min(i.maxVoltage,i.currentVoltage+v),l("voltage",{value:v})}if(d.includes("シールドを3付与する")&&(i.shield+=3,l("shield",{value:3})),d.includes("ダメージを受けた回数の分ヒールする")){const v=i.buffs.tookDamageCount||0;v>0&&(i.hp=Math.min(i.maxHp,i.hp+v),l("heal",{value:v}))}else d.includes("3ヒールする")&&!d.includes("最後に使用")?(i.hp=Math.min(i.maxHp,i.hp+3),l("heal",{value:3})):d.includes("2ヒールする")&&!d.includes("最初に使用")&&(i.hp=Math.min(i.maxHp,i.hp+2),l("heal",{value:2}));if(d.includes("捨札からコスト4以下のカードを使用する")||d.includes("捨札からコスト4以下のカードを")){const v=i.discard.filter(T=>(Number(T.コスト)||0)<=4&&T.id!==e.id);if(v.length>0)if(n)l("discard_select",{maxCost:4,reason:"dear_my_future",excludeId:e.id});else{const T=Math.floor(Math.random()*v.length),I=v[T],k=i.discard.indexOf(I);k!==-1&&(i.discard.splice(k,1),i.discard.push(I),l("draw",{name:I.曲名,reason:"dear_my_future_cpu"}))}}if(d.includes("ダメージを受けるたびに相手に1ダメージ")&&(i.buffs.damageReflectionActive=!0),d.includes("次に使用するカードのパワーが2倍になる")&&(i.buffs.doubleNextPower=!0),d.includes("既にダメージを7以上受けている場合、相手は次のターンドローできない")&&(i.buffs.tookDamageAmount||0)>=7&&(s.buffs.cannotDrawNextTurn=!0),d.includes("手札を全て捨て、カードを3枚引く")){for(;i.hand.length>0;){const v=i.hand.shift();i.discard.push(v),l("discard",{card:v})}f(3)}if(d.includes("みらくらぱーく！」のカードをランダムに1枚選び、コストを1下げる")){const v=i.hand.filter(T=>T.歌唱&&T.歌唱.includes("みらくらぱーく"));if(v.length>0){const T=v[Math.floor(Math.random()*v.length)];T.costModifier=(T.costModifier||0)-1,l("buff",{name:"cost_down",target:T.曲名})}}if(d.includes("ボルテージが4以下の時、このカードの効果を2倍にする")&&(i.buffs.doubleThisCard=!0),d.includes("カードを使用する度にシールドを1付与する")&&(i.buffs.shieldOnPlayActive=!0),d.includes("ユニットが「DOLLCHESTRA」のカードを2枚引く"))for(let v=0;v<2;v++){const T=i.deck.findIndex(I=>I.歌唱&&I.歌唱.includes("DOLLCHESTRA"));if(T!==-1){const[I]=i.deck.splice(T,1);i.hand.length>=8?(i.discard.push(I),l("overdraw",{card:I})):(i.hand.push(I),l("draw",{count:1}))}}d.includes("センターが「乙宗 梢」のカードを使用する度にカードを1枚引く")&&(i.buffs.kozueDrawActive=!0),(d.includes("センターが「村野 さやか」のカードを使用したとき、相手に3ダメージ")||d.includes("センターが「村野さやか」のカードを使用したとき、相手に3ダメージ"))&&(i.buffs.sayakaDmgActive=!0);const Ae=d.match(/次に使用するカードのコストを(\d+)下げる/);Ae&&(i.buffs.nextCardCostDown=(i.buffs.nextCardCostDown||0)+parseInt(Ae[1],10)),(d.includes("次に使用するシールドかダメージ効果を2倍にする")||d.includes("次に使用するシールドかヒール効果を2倍にする"))&&(i.buffs.doubleNextEffect=!0),d.includes("カードを2枚引く")&&!d.includes("ユニットが")?f(2):d.includes("カードを1枚引く")&&!d.includes("ユニットが")&&!d.includes("Junction")&&!d.includes("使用する度に")&&f(1);const q=d.match(/「(.+?)」をドローする/);let je=q?q[1]:null;if((d.includes("同名カードを")||d.includes("同名のカードを"))&&(je=e.曲名),je&&!d.includes("ターン終了時")&&!d.includes("最後に使用した時")){const v=i.deck.findIndex(T=>T.曲名&&T.曲名.includes(je));if(v!==-1){const[T]=i.deck.splice(v,1);i.hand.length>=8?(i.discard.push(T),l("overdraw",{card:T})):(i.hand.push(T),l("draw",{count:1}))}}else d.includes("をドローする")&&!je&&!d.includes("ターン終了時")&&!d.includes("最後に使用した時")&&f(1);if(d.includes("手札をランダムに1枚捨てる")||d.includes("手札から1枚選び捨てる")){const v=XT(i);v&&l("discard",{card:v})}d.includes("このターン中、自分へのダメージが0になる")&&(i.buffs.damageImmune=!0),d.includes("SPを回復する")&&(i.specialUsed=!1,l("sp_recover",{}));const pt=d.match(/このターンの最初に使用した(?:時|場合)、(\d+)ヒールする/);if(pt&&((S=i.buffs.turnCardsPlayed)==null?void 0:S.length)===1){const v=parseInt(pt[1],10);i.hp=Math.min(i.maxHp,i.hp+v),l("heal",{value:v,reason:"opening"})}d.includes("このターン中、受けるダメージを2倍にする")&&(i.buffs.doubleDamageTakenThisTurn=!0)};function h(d,w,E,N,P){let O=w;d.buffs.doubleDamageTakenThisTurn&&(O*=2);let H=O;if(d.shield>0){const z=Math.min(d.shield,O);d.shield-=z,O-=z}O>0&&(d.hp-=O,d.buffs.tookDamageThisTurn=!0,d.buffs.tookDamageAmount=(d.buffs.tookDamageAmount||0)+O),E("damage",{value:O,originalValue:H,target:P?"enemy":"player",type:N})}i.buffs.shieldOnPlayActive&&(i.shield+=1,l("shield",{value:1,reason:"colorfulness"}));const _=i.buffs.doubleNextEffect;let y=!1;const x=Number(e.ダメージ)||0;if(x>0&&!i.buffs.damageImmune){const d=_?x*2:x;_&&(y=!0),i.hp-=d,i.buffs.tookDamageThisTurn=!0,i.buffs.tookDamageAmount=(i.buffs.tookDamageAmount||0)+d,i.buffs.tookDamageCount=(i.buffs.tookDamageCount||0)+1,l("damage_self",{value:d}),i.buffs.damageReflectionActive&&h(s,1,l,"reflection",n)}let R=Number(e.ヒール)||0;i.buffs.doubleThisCard&&(R*=2),R>0&&(i.hp=Math.min(i.maxHp,i.hp+R),l("heal",{value:R})),p(e.効果1),p(e.効果2);let g=Number(e.パワー)||0;if(i.buffs.doubleThisCard&&(g*=2),g>0){let d=g;i.buffs.doubleNextPower&&(d*=2,i.buffs.doubleNextPower=!1),h(s,d,l,"attack",n)}let m=Number(e.シールド)||0;return i.buffs.doubleThisCard&&(m*=2),m>0&&(_&&!y&&(m*=2,y=!0),i.shield+=m,l("shield",{value:m})),y&&(i.buffs.doubleNextEffect=!1),i.buffs.doubleThisCard=!1,a&&e.センター.includes("乙宗 梢")&&f(1),c&&(e.センター.includes("村野さやか")||e.センター.includes("村野 さやか"))&&h(s,3,l,"sayaka",n),{newState:r,events:o}}const eN=[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],tN=[0,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],nN=t=>t%2===1?1:0,rN=t=>t%2===0?1:0;function Ja(t,e){const n=t?eN:tN;return e>=n.length?10:n[e]}function Xa(t,e){return t?nN(e):rN(e)}const iN=({gameState:t,setGameState:e,gameMode:n,isHost:r,syncDB:i})=>{var z,he,Ie,Ae,q,je,pt,mt,L;const[s,o]=D.useState([]),[l,a]=D.useState({show:!1,owner:null}),[c,f]=D.useState([]),[p,h]=D.useState(null),_=D.useRef(null);D.useEffect(()=>{if(!(!t||t.battleResult||t.isCoinFlipPhase)&&(t.player.hp<=0||t.enemy.hp<=0)){const C=setTimeout(()=>{e(S=>{if(S.battleResult)return S;let v=null;if(S.player.hp<=0&&S.enemy.hp<=0?v="DRAW":S.enemy.hp<=0?v="WIN":S.player.hp<=0&&(v="LOSE"),!v)return S;const T={...S,battleResult:v};return n==="online"&&i(T),T})},500);return()=>clearTimeout(C)}},[(z=t==null?void 0:t.player)==null?void 0:z.hp,(he=t==null?void 0:t.enemy)==null?void 0:he.hp,t==null?void 0:t.battleResult,t==null?void 0:t.isCoinFlipPhase,n,e]);const y=(C,S)=>{const v=Math.random();f(T=>[...T,{id:v,card:C,isPlayer:S}]),setTimeout(()=>{f(T=>T.filter(I=>I.id!==v))},1500)};D.useEffect(()=>{if(t&&t.isCoinFlipPhase){if(n==="online"&&!r)return;setTimeout(()=>{const C=Math.random()>.5,S=Ja(C,1),v=Ja(!C,1),T=Xa(C,1),I=Xa(!C,1);e(k=>{if(!k)return k;const j={...k.player,isFirstPlayer:C,maxVoltage:S,currentVoltage:S,deck:[...k.player.deck],hand:[...k.player.hand],discard:[...k.player.discard]},F={...k.enemy,isFirstPlayer:!C,maxVoltage:v,currentVoltage:v,deck:[...k.enemy.deck],hand:[...k.enemy.hand],discard:[...k.enemy.discard]};for(let Z=0;Z<T;Z++){const Fe=cn(j);Fe.overdrawn&&Fe.card&&setTimeout(()=>y(Fe.card,!0),Z*300)}for(let Z=0;Z<I;Z++){const Fe=cn(F);Fe.overdrawn&&Fe.card&&setTimeout(()=>y(Fe.card,!1),Z*300)}const Y={...k,turn:1,isCoinFlipPhase:!1,isPlayerTurn:C,turnBanner:C?"YOU FIRST!":n==="cpu"?"CPU FIRST!":"ENEMY FIRST!",player:j,enemy:F};return n==="online"&&r&&i(Y),Y})},2e3)}},[t==null?void 0:t.isCoinFlipPhase,n,r,e]),D.useEffect(()=>{t&&!t.isCoinFlipPhase&&t.turnBanner&&setTimeout(()=>{e(C=>C&&{...C,turnBanner:null})},2e3)},[t==null?void 0:t.turnBanner,t==null?void 0:t.isCoinFlipPhase,e]);const x=(C,S,v,T="#ef4444",I="damage-text")=>{const k=Math.random();o(j=>[...j,{id:k,x:C,y:S,text:v,color:T,cssClass:I}]),setTimeout(()=>{o(j=>j.filter(F=>F.id!==k))},1500)},R=(C,S,v)=>{x(C,S,v,"#3b82f6","draw-effect-text")},g=(C,S)=>{const v=`${C}${S}`;e(T=>({...T,animations:{...T.animations,[v]:!0}})),setTimeout(()=>{e(T=>({...T,animations:{...T.animations,[v]:!1}}))},800)},m=C=>{e(S=>{const v=S.turn+1,T=C?S.enemy:S.player,I={...T,buffs:{...T.buffs,damageImmune:!1,kozueDrawActive:!1,sayakaDmgActive:!1,doubleNextEffect:!1,onyourmark102Active:!1,yupYupYupActive:!1,damageReflectionActive:!1,tookDamageThisTurn:!1,tookDamageAmount:0,tookDamageCount:0,turnCardsPlayed:[],turnCardsPlayedDetails:[]}},k=C?S.player:S.enemy,j=k.isFirstPlayer===!0,F=Ja(j,v),Y=Xa(j,v);let Z={...k,maxVoltage:F,currentVoltage:F,deck:[...k.deck],hand:[...k.hand],discard:[...k.discard],buffs:{...k.buffs,damageImmune:!1,kozueDrawActive:!1,sayakaDmgActive:!1,doubleNextEffect:!1,onyourmark102Active:!1,yupYupYupActive:!1,damageReflectionActive:!1,tookDamageThisTurn:!1,tookDamageAmount:0,nextCardCostDown:0,turnCardsPlayed:[],turnCardsPlayedDetails:[]}};if(Z.buffs.cannotDrawNextTurn){Z.buffs.cannotDrawNextTurn=!1;const Q={...S,isPlayerTurn:C,turnBanner:C?"YOUR TURN (NO DRAW)":n==="cpu"?"CPU TURN (NO DRAW)":"ENEMY TURN (NO DRAW)",setlist:[],enemyPlayedCard:null,player:C?Z:I,enemy:C?I:Z,turn:v};return n==="online"&&i&&i(Q),Q}I.buffs.setEnemyVoltage3&&(Z.currentVoltage=3,I.buffs.setEnemyVoltage3=!1);for(let Q=0;Q<Y;Q++){const on=cn(Z);on.overdrawn&&on.card&&setTimeout(()=>y(on.card,C),Q*300)}const Fe={...S,isPlayerTurn:C,turnBanner:C?"YOUR TURN":n==="cpu"?"CPU TURN":"ENEMY TURN",setlist:[],enemyPlayedCard:null,player:C?Z:I,enemy:C?I:Z,turn:v};return n==="online"&&i&&i(Fe),Fe})},d=()=>{!t.isPlayerTurn||t.player.hp<=0||t.enemy.hp<=0||(t.player.buffs.yupYupYupActive&&e(C=>{const S={...C,player:{...C.player,hand:[...C.player.hand],deck:[...C.player.deck],discard:[...C.player.discard]}};for(let v=0;v<C.player.currentVoltage;v++){const T=cn(S.player);T.overdrawn&&T.card&&setTimeout(()=>y(T.card,!0),v*200)}return S}),e(C=>{const S=C.player.buffs.queuedEndTurnEffects;if(!S||S.length===0)return C;const v={...C.player,deck:[...C.player.deck],hand:[...C.player.hand],discard:[...C.player.discard],buffs:{...C.player.buffs,queuedEndTurnEffects:[]}};return S.forEach(T=>{if(T.type==="draw_voltage")for(let I=0;I<v.currentVoltage;I++){const k=cn(v);k.overdrawn&&k.card&&setTimeout(()=>y(k.card,!0),I*200)}else if(T.type==="draw_specific"&&T.name){const I=v.deck.findIndex(k=>k.曲名===T.name);if(I!==-1){const[k]=v.deck.splice(I,1);k&&(v.hand.length>=8?(v.discard.push(k),setTimeout(()=>y(k,!0),300)):v.hand.push(k))}else{const k=v.discard.findIndex(j=>j.曲名===T.name);if(k!==-1){const[j]=v.discard.splice(k,1);j&&(v.hand.length>=8?(v.discard.push(j),setTimeout(()=>y(j,!0),300)):v.hand.push(j))}}}else T.type==="heal"&&T.value&&(v.hp=Math.min(v.maxHp,v.hp+T.value))}),{...C,player:v}}),e(C=>{const S=C.setlist[C.setlist.length-1];if(S&&S.owner==="player"&&S.card.曲名==="Dream Believers"){const v=C.player.deck.findIndex(T=>T.曲名==="Dream Believers");if(v!==-1){const T={...C.player,deck:[...C.player.deck],hand:[...C.player.hand]},[I]=T.deck.splice(v,1);return T.hand.push(I),{...C,player:T}}}return C}),m(!1))};D.useEffect(()=>{if(t&&t.isPlayerTurn&&!t.isCoinFlipPhase&&!t.turnBanner&&t.player.hp>0&&t.enemy.hp>0&&!t.isAnimating&&!p){const C=t.player.hand.some(v=>t.player.currentVoltage>=jr(v,t.player)),S=!t.player.specialUsed;if(!C&&!S){const v=setTimeout(()=>d(),800);return()=>clearTimeout(v)}}},[t==null?void 0:t.isPlayerTurn,(Ie=t==null?void 0:t.player)==null?void 0:Ie.currentVoltage,(q=(Ae=t==null?void 0:t.player)==null?void 0:Ae.hand)==null?void 0:q.length,(je=t==null?void 0:t.player)==null?void 0:je.specialUsed,t==null?void 0:t.turnBanner,t==null?void 0:t.isCoinFlipPhase,t==null?void 0:t.isAnimating,p]),D.useEffect(()=>{if(!(!t||n!=="cpu")&&!t.isCoinFlipPhase&&!t.isPlayerTurn&&t.enemy.hp>0&&t.player.hp>0&&!t.turnBanner&&!t.isAnimating)return _.current=setTimeout(()=>{w()},1500),()=>clearTimeout(_.current)},[t==null?void 0:t.isPlayerTurn,(pt=t==null?void 0:t.enemy)==null?void 0:pt.currentVoltage,(L=(mt=t==null?void 0:t.enemy)==null?void 0:mt.hand)==null?void 0:L.length,t==null?void 0:t.turnBanner,t==null?void 0:t.isCoinFlipPhase,t==null?void 0:t.isAnimating,n]);const w=()=>{const{enemy:C}=t,S=C.hand.filter(v=>jr(v,C)<=C.currentVoltage);if(S.length>0){const v=S[Math.floor(Math.random()*S.length)];E(v,!1)}else C.buffs.yupYupYupActive&&e(v=>{const T={...v,enemy:{...v.enemy,hand:[...v.enemy.hand],deck:[...v.enemy.deck],discard:[...v.enemy.discard]}};for(let I=0;I<v.enemy.currentVoltage;I++){const k=cn(T.enemy);k.overdrawn&&k.card&&setTimeout(()=>y(k.card,!1),I*300)}return T}),e(v=>{const T=v.enemy.buffs.queuedEndTurnEffects;if(!T||T.length===0)return v;const I={...v.enemy,deck:[...v.enemy.deck],hand:[...v.enemy.hand],discard:[...v.enemy.discard],buffs:{...v.enemy.buffs,queuedEndTurnEffects:[]}};return T.forEach(k=>{if(k.type==="draw_voltage")for(let j=0;j<I.currentVoltage;j++){const F=cn(I);F.overdrawn&&F.card&&setTimeout(()=>y(F.card,!1),j*300)}else if(k.type==="draw_specific"&&k.name){const j=I.deck.findIndex(F=>F.曲名===k.name);if(j!==-1){const[F]=I.deck.splice(j,1);F&&(I.hand.length>=8?(I.discard.push(F),setTimeout(()=>y(F,!1),300)):I.hand.push(F))}else{const F=I.discard.findIndex(Y=>Y.曲名===k.name);if(F!==-1){const[Y]=I.discard.splice(F,1);Y&&(I.hand.length>=8?(I.discard.push(Y),setTimeout(()=>y(Y,!1),300)):I.hand.push(Y))}}}else k.type==="heal"&&k.value&&(I.hp=Math.min(I.maxHp,I.hp+k.value))}),{...v,enemy:I}}),m(!0)},E=(C,S,v=!1)=>{if(t.isAnimating)return;const T=S?t.player:t.enemy,I=jr(C,T);!v&&T.currentVoltage<I||(e(k=>{const j={...k,player:{...k.player,buffs:{...k.player.buffs,turnCardsPlayed:[...k.player.buffs.turnCardsPlayed]},hand:[...k.player.hand],discard:[...k.player.discard]},enemy:{...k.enemy,buffs:{...k.enemy.buffs,turnCardsPlayed:[...k.enemy.buffs.turnCardsPlayed]},hand:[...k.enemy.hand],discard:[...k.enemy.discard]},setlist:[...k.setlist]},F=S?j.player:j.enemy;let Y=jr(C,F);if(!v){if(F.currentVoltage<Y)return k;F.currentVoltage-=Y,F.buffs.nextCardCostDown>0&&(F.buffs.nextCardCostDown=0),F.hand=F.hand.filter(Z=>Z.id!==C.id)}return F.discard.push(C),j.setlist.push({card:C,owner:S?"player":"enemy"}),F.buffs.turnCardsPlayed.push(C.曲名),F.buffs.turnCardsPlayedDetails||(F.buffs.turnCardsPlayedDetails=[]),F.buffs.turnCardsPlayedDetails.push({曲名:C.曲名,歌唱:C.歌唱,センター:C.センター,uid:C.id}),j.enemyPlayedCard=S?null:C,j.isAnimating=!0,j}),setTimeout(()=>{e(k=>{if(!k.isAnimating)return k;const{newState:j,events:F}=ZT(k,C,S);let Y=0;F.forEach(Q=>{const on=Y*1e3,Ci=30+Y%3*60,ki=Y%3*40;Y++,setTimeout(()=>{if(Q.type==="damage"){const Ze=Q.data.target==="player",pv=Ze?window.innerHeight-200:200;x(Ci,pv-ki,`-${Q.data.value}`,"#ef4444","damage-text"),g(Ze?"player":"enemy","Shake"),g(Ze?"player":"enemy","Damage")}if(Q.type==="damage_self"){const Ze=S?window.innerHeight-200:200;x(Ci,Ze-ki,`-${Q.data.value}`,"#ff6b35","damage-text"),g(S?"player":"enemy","Shake"),g(S?"player":"enemy","Damage")}if(Q.type==="heal"){const Ze=S?window.innerHeight-200:200;x(Ci,Ze-ki,`+${Q.data.value}`,"#10b981","heal-text"),g(S?"player":"enemy","Heal")}if(Q.type==="voltage"){const Ze=S?window.innerHeight-200:200;x(Ci,Ze-ki,`+⚡${Q.data.value}`,"#f59e0b","voltage-text"),g(S?"player":"enemy","Voltage")}if(Q.type==="shield"){const Ze=S?window.innerHeight-200:200;x(Ci,Ze-ki,`+🛡${Q.data.value}`,"#3b82f6","shield-text"),g(S?"player":"enemy","Shield")}if(Q.type==="draw"){const Ze=S?window.innerHeight/2:window.innerHeight/2-60;R(window.innerWidth/2-60,Ze,`Draw ${Q.data.count||1}`)}(Q.type==="discard"||Q.type==="overdraw")&&Q.data.card&&y(Q.data.card,S),Q.type==="discard_select"&&S&&h({show:!0,maxCost:Q.data.maxCost,reason:Q.data.reason,excludeId:Q.data.excludeId})},on)});const Z=Math.max(Y*1e3,1e3),Fe=j.forceTurnEnd;return setTimeout(()=>{e(Q=>{if(!Q)return Q;const on={...Q,isAnimating:!1,enemyPlayedCard:null};return n==="online"&&S&&i(on),on}),Fe&&(S?d():m(!0))},Z),j.isAnimating=!0,S||(j.enemyPlayedCard=C),j})},300))};return{damageTexts:s,showDiscard:l,setShowDiscard:a,overdrawnCards:c,selectFromDiscard:p,setSelectFromDiscard:h,endTurnPlayer:d,playCard:E,playCardFromDiscard:C=>{h(null),e(S=>{const v={...S},T=v.player.discard.findIndex(I=>I.id===C.id);return T!==-1&&v.player.discard.splice(T,1),v}),E(C,!0,!0)},handleRematch:()=>{if(!t)return;const C=Xi(t.player.originalDeckNames||[]),S=il();e(Yg({deck:C,unit:t.player.baseUnit},S)),o([])},handleSpSkill:()=>{!t.player.specialUsed&&t.isPlayerTurn&&!t.turnBanner&&e(C=>{const S=Math.min(C.player.maxVoltage,C.player.currentVoltage+4),v={...C,player:{...C.player,currentVoltage:S,specialUsed:!0}};return n==="online"&&i(v),v})},handleSurrender:()=>{window.confirm("本当に降参しますか？")&&e(C=>{if(!C||C.battleResult)return C;const S={...C,battleResult:"LOSE"};return n==="online"&&i(S),S})}}},Ap=({data:t,isEnemy:e,isShaking:n,onDiscardClick:r})=>{var l,a,c,f,p;const i=e?"enemy-status":"self-status",s=e?"enemy":"player",o=t.name||(e?"相手":"YOU");return u.jsxs("div",{className:`player-status ${i} ${n?"shake":""}`,children:[u.jsxs("div",{className:"player-info",style:{alignItems:"flex-start",marginBottom:"4px"},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,minWidth:0,marginRight:"6px",lineHeight:1.2},children:[u.jsx("span",{className:"player-name",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:o}),t.baseUnit&&u.jsx("span",{style:{fontSize:"0.65rem",color:"#4a4a4a",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginTop:"2px"},children:t.baseUnit})]}),u.jsxs("span",{className:"hp-text",style:{flexShrink:0,lineHeight:1.2},children:[t.hp," / ",t.maxHp]})]}),u.jsx("div",{className:"hp-bar-container",children:u.jsx("div",{className:`hp-bar ${t.hp<=10?"danger":""}`,style:{width:`${Math.max(0,t.hp/t.maxHp*100)}%`}})}),u.jsxs("div",{className:"deck-info",style:{marginTop:"5px",display:"flex",flexDirection:"column",gap:"4px"},children:[u.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[u.jsxs("span",{className:"deck-stat",style:{display:"flex",alignItems:"center",gap:"2px"},children:[u.jsx(uv,{size:14})," ",((l=t.deck)==null?void 0:l.length)||0]}),u.jsxs("span",{className:"deck-stat",onClick:()=>r(s),style:{cursor:"pointer",display:"flex",alignItems:"center",gap:"2px"},children:[u.jsx(zT,{size:14})," ",((a=t.discard)==null?void 0:a.length)||0]}),t.shield>0&&u.jsxs("span",{className:"shield-badge",style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:"2px"},children:[u.jsx(Dn,{size:14})," ",t.shield]})]}),u.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[u.jsxs("span",{className:"deck-stat",title:"Played this turn",style:{display:"flex",alignItems:"center",gap:"2px"},children:[u.jsx(dv,{size:14})," ",((f=(c=t.buffs)==null?void 0:c.turnCardsPlayed)==null?void 0:f.length)||0]}),u.jsxs("span",{className:"deck-stat",title:"Took damage count",style:{display:"flex",alignItems:"center",gap:"2px"},children:[u.jsx(Ln,{size:14,color:"#a855f7"})," ",((p=t.buffs)==null?void 0:p.tookDamageCount)||0]})]})]})]})},sN=({gameState:t,setSelectedCard:e})=>{const{player:n,isPlayerTurn:r,turnBanner:i,isCoinFlipPhase:s,isAnimating:o}=t,l=n.hand.length,a=(l-1)/2;return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
        .hand-container {
          --hand-count: ${l};
        }
        .hand-container .card {
          /* PC版: 幅160px。基本-60pxで、枚数が多い場合は自動で圧縮して枠内に収める */
          margin-left: calc(min(-60px, (100% - 20px - (var(--hand-count) * 160px)) / max(1, var(--hand-count) - 1))) !important;
        }
        .hand-container .card:first-child {
          margin-left: 0 !important;
        }
        @media (max-width: 768px), (max-height: 480px) {
          .hand-container .card {
            /* スマホ版: 幅78px。基本-32pxで、枚数が多い場合は自動で圧縮して枠内に収める */
            margin-left: calc(min(-38px, (100% - 140px - (var(--hand-count) * 78px)) / max(1, var(--hand-count) - 1))) !important;
          }
        }
      `}),u.jsx("div",{className:"hand-container",children:n.hand.map((c,f)=>{const p=jr(c,n),h=r&&n.currentVoltage>=p&&!i&&!s&&!o,_=f-a,y=_*2.5,x=Math.pow(_,2)*1.2;return u.jsxs("div",{className:"card",style:{background:nr(c.歌唱),opacity:h?1:.4,cursor:"pointer",filter:h?"none":"grayscale(30%)",transform:`translateY(${x}px) rotate(${y}deg)`,zIndex:f},onClick:()=>e(c),children:[u.jsx("div",{className:"card-cost",children:p}),u.jsx("div",{className:"card-title",children:c.曲名}),u.jsxs("div",{className:"card-tags",children:[u.jsx("span",{children:c.歌唱}),u.jsx("span",{children:c.センター})]}),u.jsxs("div",{className:"card-stats",children:[c.パワー&&u.jsxs("span",{className:"stat-item stat-power",children:[u.jsx(or,{size:12}),c.パワー]}),c.シールド&&u.jsxs("span",{className:"stat-item stat-shield",children:[u.jsx(Dn,{size:12}),c.シールド]}),c.ヒール&&u.jsxs("span",{className:"stat-item stat-heal",children:[u.jsx(Qr,{size:12}),c.ヒール]}),c.ダメージ&&u.jsxs("span",{className:"stat-item stat-damage",children:[u.jsx(Ln,{size:12}),c.ダメージ]})]}),u.jsxs("div",{className:"card-effect",children:[c.効果1&&u.jsx("div",{style:{marginBottom:"4px"},children:c.効果1}),c.効果2&&u.jsx("div",{children:c.効果2})]})]},c.id||c.曲名+f)})})]})},oN=({selectedCard:t,gameState:e,playCard:n,setSelectedCard:r})=>{if(!t)return null;const i=jr(t,e.player),s=!t._isPreviewOnly&&e.isPlayerTurn&&e.player.currentVoltage>=i&&!e.turnBanner&&!e.isCoinFlipPhase&&!e.isAnimating;return u.jsx("div",{className:"card-preview-overlay",onClick:()=>r(null),children:u.jsxs("div",{className:"card-preview",style:{background:nr(t.歌唱)},onClick:o=>o.stopPropagation(),children:[u.jsx("div",{className:"card-cost",style:{top:"-12px",left:"-12px",width:"44px",height:"44px",fontSize:"1.4rem"},children:i}),u.jsx("div",{className:"card-title",style:{fontSize:"1.4rem"},children:t.曲名}),u.jsxs("div",{className:"card-tags",style:{fontSize:"0.85rem"},children:[u.jsx("span",{children:t.歌唱}),u.jsx("span",{children:t.センター})]}),u.jsxs("div",{className:"card-stats",style:{fontSize:"0.95rem",padding:"8px"},children:[t.パワー&&u.jsxs("span",{className:"stat-item stat-power",children:[u.jsx(or,{size:16})," ",t.パワー]}),t.シールド&&u.jsxs("span",{className:"stat-item stat-shield",children:[u.jsx(Dn,{size:16})," ",t.シールド]}),t.ヒール&&u.jsxs("span",{className:"stat-item stat-heal",children:[u.jsx(Qr,{size:16})," ",t.ヒール]}),t.ダメージ&&u.jsxs("span",{className:"stat-item stat-damage",children:[u.jsx(Ln,{size:16})," ",t.ダメージ]})]}),u.jsxs("div",{className:"card-effect",style:{fontSize:"1.15rem",padding:"12px"},children:[t.効果1&&u.jsx("div",{style:{marginBottom:"6px"},children:t.効果1}),t.効果2&&u.jsx("div",{children:t.効果2})]}),u.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"10px"},children:[s&&u.jsx("button",{className:"preview-play-btn",onClick:()=>{n(t,!0),r(null)},children:"使用する"}),u.jsx("button",{className:"preview-close-btn",onClick:()=>r(null),children:"閉じる"})]})]})})},lN=({showDiscard:t,setShowDiscard:e,gameState:n,setSelectedCard:r})=>{if(!t.show)return null;const i=t.owner==="player"?n.player.discard:n.enemy.discard;return u.jsx("div",{className:"modal-overlay",onClick:()=>e({show:!1,owner:null}),children:u.jsxs("div",{className:"modal-content",onClick:s=>s.stopPropagation(),children:[u.jsxs("div",{className:"modal-header",children:[u.jsxs("h2",{children:["捨て札 (",i.length,"枚)"]}),u.jsx("button",{className:"modal-close",onClick:()=>e({show:!1,owner:null}),children:"閉じる"})]}),u.jsx("div",{className:"modal-grid",children:i.map((s,o)=>u.jsx("div",{onClick:()=>{r&&r({...s,_isPreviewOnly:!0})},children:u.jsx(Jr,{card:s})},o))})]})})},aN=({gameState:t,gameMode:e,isHost:n,roomId:r,handleRematch:i,setScreen:s})=>t.battleResult?u.jsx("div",{className:"battle-end-overlay",children:u.jsxs("div",{className:"battle-end-content",children:[u.jsx("div",{className:"battle-result-text",style:{color:t.battleResult==="WIN"?"#FFD700":t.battleResult==="LOSE"?"#FF4500":"#FFFFFF"},children:t.battleResult==="WIN"?"Victory!":t.battleResult==="LOSE"?"Defeat...":"Draw"}),u.jsxs("div",{className:"battle-end-actions",children:[e==="cpu"&&u.jsx("button",{className:"end-action-btn btn-rematch",onClick:i,children:"もう一度戦う"}),u.jsx("button",{className:"end-action-btn btn-menu",onClick:()=>{e==="online"&&n&&r&&tT(r),s("home")},children:"ホームに戻る"})]})]})}):null,cN=({player:t,enemy:e})=>{const n=(r,i,s)=>{const o=[];for(let l=0;l<10;l++){const a=l<i,c=l<r;o.push(u.jsx("div",{style:{width:"4.2px",height:"12px",borderRadius:"1.5px",background:a?s:c?"rgba(0, 0, 0, 0.35)":"rgba(0, 0, 0, 0.12)",boxShadow:a?`0 0 4px ${s}`:"none",margin:"0 1px",opacity:1,transition:"all 0.2s"}},l))}return u.jsx("div",{style:{display:"flex",alignItems:"center"},children:o})};return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",alignItems:"flex-end",background:"rgba(255, 255, 255, 0.3)",padding:"8px 8px",borderRadius:"10px",backdropFilter:"blur(6px)",border:"1px solid rgba(0, 0, 0, 0.1)",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.08)",boxSizing:"border-box",width:"100%"},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"2px",width:"100%"},children:[u.jsx("span",{style:{margin:0,color:"#000000",fontSize:"0.7rem",fontWeight:"bold",whiteSpace:"nowrap",letterSpacing:"-0.5px"},children:"Enemy Voltage"}),u.jsxs("div",{style:{display:"flex",alignItems:"center",margin:0},children:[u.jsxs("span",{style:{fontSize:"0.70rem",marginRight:"4px",color:"#000000",fontWeight:"bold",whiteSpace:"nowrap"},children:[e.currentVoltage,"/",e.maxVoltage]}),n(e.maxVoltage,e.currentVoltage,"#ff77a9")]})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"2px",width:"100%"},children:[u.jsx("span",{style:{margin:0,color:"#000000",fontSize:"0.75rem",fontWeight:"bold",whiteSpace:"nowrap",letterSpacing:"-0.5px"},children:"Your Voltage"}),u.jsxs("div",{style:{display:"flex",alignItems:"center",margin:0},children:[u.jsxs("span",{style:{fontSize:"0.7rem",marginRight:"4px",color:"#000000",fontWeight:"bold",whiteSpace:"nowrap"},children:[t.currentVoltage,"/",t.maxVoltage]}),n(t.maxVoltage,t.currentVoltage,"#a78bfa")]})]})]})},uN=({gameState:t,setSelectedCard:e})=>{const{setlist:n}=t,[r,i]=D.useState(!1);if(!n||n.length===0)return null;const s=o=>{o.stopPropagation(),o.preventDefault(),i(!0)};return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translateY(-45px)",zIndex:40},children:n.map((o,l)=>{const a=o.card?o.card:o,c=Math.min(l*4,16),f=l===n.length-1;return u.jsx("div",{style:{position:"absolute",transform:`translate(calc(-50% + ${c}px), calc(-50% + ${c}px))`,zIndex:l,filter:f?"none":"brightness(0.85)",pointerEvents:f?"auto":"none",cursor:f?"pointer":"default"},onClick:f?s:void 0,children:u.jsx(Jr,{card:a})},l)})}),r&&u.jsx("div",{className:"modal-overlay",onClick:()=>i(!1),children:u.jsxs("div",{className:"modal-content",onClick:o=>o.stopPropagation(),children:[u.jsxs("div",{className:"modal-header",children:[u.jsxs("h2",{style:{margin:0},children:["使用したカード (",n.length,"枚)"]}),u.jsx("button",{className:"modal-close",onClick:()=>i(!1),children:"閉じる"})]}),u.jsx("div",{className:"modal-grid",children:[...n].reverse().map((o,l)=>{const a=o.card?o.card:o;return u.jsx("div",{onClick:()=>{e&&e({...a,_isPreviewOnly:!0})},children:u.jsx(Jr,{card:a})},l)})})]})})]})},dN=({gameState:t,gameMode:e,roomId:n,isHost:r,setScreen:i,selectedCard:s,setSelectedCard:o,damageTexts:l,showDiscard:a,setShowDiscard:c,overdrawnCards:f,selectFromDiscard:p,setSelectFromDiscard:h,endTurnPlayer:_,playCard:y,playCardFromDiscard:x,handleRematch:R,handleSpSkill:g,handleSurrender:m})=>{var w,E,N,P,O,H,z,he,Ie,Ae;const d=!(t.isPlayerTurn&&!t.turnBanner&&!t.isCoinFlipPhase&&!t.isAnimating);return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"orientation-warning",children:[u.jsx(hv,{size:64}),u.jsx("h2",{style:{marginTop:"1rem"},children:"画面を横向きにしてください"}),u.jsx("p",{children:"このゲームは横画面専用です"})]}),u.jsx("div",{className:"game-container",children:u.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",display:"flex",flexDirection:"column",overflow:"hidden"},children:[!t.battleResult&&u.jsxs("button",{onClick:m,style:{position:"absolute",top:"max(0.5rem, env(safe-area-inset-top))",right:"max(1.0rem, env(safe-area-inset-right))",display:"flex",alignItems:"center",gap:"4px",padding:"6px 14px",backgroundColor:"#ffffff",color:"#000000",fontSize:"0.85rem",fontWeight:"bold",borderRadius:"9999px",border:"1px solid #000000",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.2)",cursor:"pointer",zIndex:50,backdropFilter:"blur(4px)",transition:"all 0.2s ease-in-out"},children:[u.jsx(_T,{size:14}),u.jsx("span",{children:"降参"})]}),t.turnBanner&&u.jsx("div",{className:"turn-banner",children:t.turnBanner}),t.enemyPlayedCard&&!t.turnBanner&&u.jsx("div",{className:"enemy-played-popup card-play-effect",children:u.jsx(Jr,{card:t.enemyPlayedCard})}),f.map(q=>u.jsx("div",{className:`overdraw-container ${q.isPlayer?"player":"enemy"}`,children:u.jsx(Jr,{card:q.card})},q.id)),l.map(q=>u.jsx("div",{className:q.cssClass||"damage-text",style:{left:`${q.x}px`,top:`${q.y}px`,color:q.color},children:q.text},q.id)),u.jsx("div",{className:"enemy-hand-container",style:{top:"-40px"},children:t.enemy.hand.map((q,je)=>u.jsx("div",{className:"enemy-card-back"},je))}),u.jsxs("div",{className:"board-area",children:[u.jsx("div",{className:`status-effect-wrapper ${(w=t.animations)!=null&&w.enemyDamage?"glow-damage":(E=t.animations)!=null&&E.enemyHeal?"glow-heal":(N=t.animations)!=null&&N.enemyShield?"glow-shield":""}`,children:u.jsx(Ap,{data:t.enemy,isEnemy:!0,isShaking:(P=t.animations)==null?void 0:P.enemyShake,onDiscardClick:q=>c({show:!0,owner:q})})}),u.jsx(uN,{gameState:t,setSelectedCard:o}),u.jsx("div",{className:`status-effect-wrapper ${(O=t.animations)!=null&&O.playerDamage?"glow-damage":(H=t.animations)!=null&&H.playerHeal?"glow-heal":(z=t.animations)!=null&&z.playerShield?"glow-shield":""}`,children:u.jsx(Ap,{data:t.player,isEnemy:!1,isShaking:(he=t.animations)==null?void 0:he.playerShake,onDiscardClick:q=>c({show:!0,owner:q})})})]}),u.jsxs("div",{style:{position:"absolute",right:"max(0.1rem)",bottom:"4%",display:"flex",flexDirection:"column",alignItems:"flex-end",width:"13vw",minWidth:"100px",maxWidth:"120px",gap:"3.0vh",zIndex:100,pointerEvents:"none"},children:[u.jsx("div",{className:`voltage-effect-wrapper ${(Ie=t.animations)!=null&&Ie.playerVoltage||(Ae=t.animations)!=null&&Ae.enemyVoltage?"glow-voltage":""}`,style:{pointerEvents:"auto",width:"100%"},children:u.jsx(cN,{player:t.player,enemy:t.enemy})}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"2.0vh",pointerEvents:"none",width:"100%"},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",pointerEvents:"auto"},children:[u.jsx("button",{className:"btn-special",onClick:g,disabled:!(t.isPlayerTurn&&!t.turnBanner&&!t.isCoinFlipPhase&&!t.isAnimating&&!t.player.specialUsed),children:"SP"}),u.jsx("span",{style:{fontSize:"0.75rem",color:"#000000",fontWeight:"bold",textShadow:"0 1px 3px rgba(255, 255, 255, 0.9)",whiteSpace:"nowrap",letterSpacing:"-0.5px"},children:"ボルテージ＋４"})]}),u.jsx("div",{style:{pointerEvents:"auto",width:"100%"},children:u.jsx("button",{className:"end-turn-btn",onClick:_,disabled:d,style:{width:"100%",boxSizing:"border-box",fontSize:"0.9rem",whiteSpace:"nowrap",padding:"10px 0px",letterSpacing:"0px",backgroundColor:d?"#9ca3af":"#ef4444",color:d?"#f3f4f6":"#ffffff",cursor:d?"not-allowed":"pointer",opacity:d?.7:1,transition:"all 0.2s ease-in-out"},children:"END TURN"})})]})]}),u.jsx(sN,{gameState:t,setSelectedCard:o}),p&&u.jsx("div",{className:"modal-overlay",style:{zIndex:3e3},children:u.jsxs("div",{className:"modal-content discard-modal",children:[u.jsxs("h2",{className:"discard-title",children:["コスト",p.maxCost,"以下のカードを選んで使用"]}),u.jsx("button",{className:"close-btn",onClick:()=>h(null),children:"×"}),u.jsx("div",{className:"discard-grid",children:t.player.discard.filter(q=>(Number(q.コスト)||0)<=p.maxCost&&q.id!==p.excludeId).map((q,je)=>u.jsx("div",{onClick:()=>x(q),children:u.jsx(Jr,{card:q})},je))})]})}),u.jsx(oN,{selectedCard:s,gameState:t,playCard:y,setSelectedCard:o}),u.jsx(lN,{showDiscard:a,setShowDiscard:c,gameState:t,setSelectedCard:o}),u.jsx(aN,{gameState:t,gameMode:e,isHost:r,roomId:n,handleRematch:R,setScreen:i})]})})]})},hN=t=>{var c,f,p,h,_;const e=t.gameMode==="online"&&!t.isHost,[n,r]=D.useState(null),i=y=>{var x,R,g,m;return y&&{...y,player:y.enemy,enemy:y.player,isPlayerTurn:!y.isPlayerTurn,battleResult:y.battleResult==="WIN"?"LOSE":y.battleResult==="LOSE"?"WIN":y.battleResult,turnBanner:(x=y.turnBanner)!=null&&x.includes("YOU")?y.turnBanner.replace("YOU","ENEMY"):(R=y.turnBanner)!=null&&R.includes("YOUR")?y.turnBanner.replace("YOUR","ENEMY"):(g=y.turnBanner)!=null&&g.includes("ENEMY")&&y.turnBanner.includes("TURN")?y.turnBanner.replace("ENEMY","YOUR"):(m=y.turnBanner)!=null&&m.includes("ENEMY")?y.turnBanner.replace("ENEMY","YOU"):y.turnBanner}};D.useEffect(()=>{if(t.gameMode!=="online"||!t.roomId||!t.gameState||t.gameState.battleResult)return;(t.isHost?t.gameState.hostDisconnected:t.gameState.guestDisconnected)&&t.setGameState(x=>{if(!x||x.battleResult)return x;const R={...x,hostDisconnected:t.isHost?!1:x.hostDisconnected,guestDisconnected:t.isHost?x.guestDisconnected:!1};return yo(t.roomId,R),R})},[(c=t.gameState)==null?void 0:c.hostDisconnected,(f=t.gameState)==null?void 0:f.guestDisconnected,t.isHost,t.gameMode,t.roomId]),D.useEffect(()=>{var x;if(t.gameMode!=="online"||!t.roomId||(x=t.gameState)!=null&&x.battleResult)return;const y=()=>{t.setGameState(R=>{if(!R||R.battleResult)return R;const g={...R,hostDisconnected:t.isHost?!0:R.hostDisconnected||!1,guestDisconnected:t.isHost?R.guestDisconnected||!1:!0};return yo(t.roomId,g),g})};return window.addEventListener("beforeunload",y),()=>{window.removeEventListener("beforeunload",y)}},[t.gameMode,t.roomId,t.isHost,(p=t.gameState)==null?void 0:p.battleResult]),D.useEffect(()=>{if(t.gameMode!=="online"||!t.gameState||t.gameState.battleResult)return;if(t.isHost?t.gameState.guestDisconnected:t.gameState.hostDisconnected){r(60);const x=setInterval(()=>{r(R=>R===null?null:R<=1?(clearInterval(x),t.setGameState(g=>{if(!g||g.battleResult)return g;const m=t.isHost?"WIN":"LOSE",d={...g,battleResult:m};return yo(t.roomId,d),d}),0):R-1)},1e3);return()=>clearInterval(x)}else r(null)},[(h=t.gameState)==null?void 0:h.hostDisconnected,(_=t.gameState)==null?void 0:_.guestDisconnected,t.isHost,t.gameMode,t.roomId]);const s=e?i(t.gameState):t.gameState;s&&t.gameState&&(t.isHost?t.gameState.guestDisconnected:t.gameState.hostDisconnected)&&!t.gameState.battleResult&&n!==null&&(s.turnBanner=`相手の通信が切断されました。復帰を待っています... (残り${n}秒)`);const o=iN({...t,gameState:s,setGameState:y=>{t.setGameState(x=>{if(!e)return typeof y=="function"?y(x):y;const R=i(x),g=typeof y=="function"?y(R):y;return i(g)})},syncDB:y=>{const x=e?i(y):y,R=JSON.parse(JSON.stringify(x,(g,m)=>m===void 0?null:m));yo(t.roomId,R)}});if(!s)return null;const l=s.isPlayerTurn&&!s.turnBanner&&!s.isCoinFlipPhase&&!s.isAnimating&&n===null,a={...o,playCard:(y,x,R)=>{x&&!l&&!R||o.playCard(y,x,R)},endTurnPlayer:()=>{l&&o.endTurnPlayer()},handleSpSkill:()=>{l&&o.handleSpSkill()}};return u.jsx(dN,{...t,gameState:s,...a})},fN=()=>{const[t,e]=D.useState(""),[n,r]=D.useState(""),[i,s]=D.useState(!1),[o,l]=D.useState(""),[a,c]=D.useState(!1),f=async h=>{h.preventDefault(),l(""),c(!0);try{i?await nT(t,n):await rT(t,n)}catch(_){_.code==="auth/invalid-credential"?l("メールアドレスかパスワードが間違っています。"):_.code==="auth/email-already-in-use"?l("このメールアドレスは既に登録されています。"):l(_.message||"認証に失敗しました。")}finally{c(!1)}},p=async()=>{l(""),c(!0);try{await iT()}catch(h){l(h.message||"ゲストログインに失敗しました。")}finally{c(!1)}};return u.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--bg-dark, #111827)",color:"white",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"},children:u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"},children:[u.jsx("h1",{style:{fontSize:"min(2.5rem, 8vh)",marginBottom:"min(1rem, 2vh)",fontFamily:"Outfit",color:"var(--primary, #60a5fa)",textShadow:"0 0 10px rgba(96, 165, 250, 0.5)",textAlign:"center"},children:"LINK LIKE BATTLE"}),u.jsxs("div",{style:{backgroundColor:"rgba(31, 41, 55, 0.8)",padding:"min(2.5rem, 3vh) min(2.5rem, 5vw)",borderRadius:"12px",width:"min(320px, 85vw)",boxShadow:"0 8px 32px rgba(0,0,0,0.5)",backdropFilter:"blur(4px)",border:"1px solid rgba(255,255,255,0.1)",boxSizing:"border-box"},children:[u.jsx("h2",{style:{textAlign:"center",marginBottom:"min(1.5rem, 3vh)",fontSize:"min(1.5rem, 4.5vh)",marginTop:-3},children:i?"【新規アカウント登録】":"【ログイン】"}),u.jsxs("form",{onSubmit:f,style:{display:"flex",flexDirection:"column",gap:"min(1.25rem, 2vh)"},children:[u.jsx("input",{type:"email",placeholder:"メールアドレス",value:t,onChange:h=>e(h.target.value),required:!0,style:{padding:"min(0.75rem, 2vh)",borderRadius:"6px",border:"none",outline:"none",backgroundColor:"#374151",color:"white",fontSize:"min(1rem, 4vh)"}}),u.jsx("input",{type:"password",placeholder:"パスワード (6文字以上)",value:n,onChange:h=>r(h.target.value),required:!0,minLength:6,style:{padding:"min(0.75rem, 2vh)",borderRadius:"6px",border:"none",outline:"none",backgroundColor:"#374151",color:"white",fontSize:"min(1rem, 4vh)"}}),o&&u.jsx("p",{style:{color:"#ef4444",fontSize:"min(0.875rem, 3vh)",margin:"0",textAlign:"center"},children:o}),u.jsx("button",{type:"submit",disabled:a,style:{padding:"min(0.75rem, 2vh)",backgroundColor:"var(--primary, #3b82f6)",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"min(1.1rem, 4.5vh)",transition:"background-color 0.2s"},children:a?"通信中...":i?"登録してはじめる":"ログイン"})]}),u.jsx("div",{style:{marginTop:"min(1rem, 2vh)",textAlign:"center"},children:u.jsx("button",{type:"button",onClick:()=>{s(!i),l("")},style:{background:"none",border:"none",color:"#e6e6e6",textDecoration:"underline",cursor:"pointer",fontSize:"min(0.9rem, 3.5vh)"},children:i?"すでにアカウントをお持ちの方はこちら":"新しくアカウントを作る方はこちら"})}),u.jsxs("div",{style:{display:"flex",alignItems:"center",margin:"min(1.5rem, 1vh) 0"},children:[u.jsx("div",{style:{flex:1,height:"1px",backgroundColor:"#4b5563"}}),u.jsx("span",{style:{padding:"0 10px",color:"#9ca3af",fontSize:"min(0.875rem, 3vh)"},children:"または"}),u.jsx("div",{style:{flex:1,height:"1px",backgroundColor:"#4b5563"}})]}),u.jsx("button",{onClick:p,disabled:a,style:{width:"100%",padding:"min(0.75rem, 2vh)",backgroundColor:"transparent",color:"white",border:"1px solid #6b7280",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"min(1rem, 4vh)",transition:"background-color 0.2s"},children:"ログインせずに遊ぶ (ゲスト)"})]})]})})},fv=D.createContext(null),pN=()=>{const t=D.useContext(fv);if(!t)throw new Error("useBGM must be used within a BGMProvider");return t},mN=({children:t})=>{const[e,n]=D.useState(!1),[r,i]=D.useState(null),[s,o]=D.useState(.3);return u.jsx(fv.Provider,{value:{isPlaying:e,setIsPlaying:n,currentVideo:r,setCurrentVideo:i,volume:s,setVolume:o},children:t})},gN="https://nyanpre-hasu-song-quiz-api.hf.space/api/songs",yN=()=>{const{isPlaying:t,setIsPlaying:e,currentVideo:n,setCurrentVideo:r,volume:i,setVolume:s}=pN(),[o,l]=D.useState([]),[a,c]=D.useState(!1),[f,p]=D.useState(!1),h=D.useRef(null),_=D.useRef([]),y=D.useRef(null);D.useEffect(()=>{_.current=o},[o]),D.useEffect(()=>{y.current=n},[n]),D.useEffect(()=>{fetch(gN).then(m=>m.json()).then(m=>{Array.isArray(m)&&m.length>0?(l(m),n||r(m[0])):r({videoId:"",title:"プレイリスト読込失敗"})}).catch(m=>{console.error("API Error:",m),r({videoId:"",title:"サーバー通信エラー"})})},[]);const x=()=>{const m=_.current,d=y.current;if(m.length===0)return;const E=(m.findIndex(P=>P.videoId===(d==null?void 0:d.videoId))+1)%m.length,N=m[E];r(N),h.current&&(h.current.loadVideoById(N.videoId),h.current.playVideo(),e(!0))};D.useEffect(()=>{if(!n||!n.videoId||h.current)return;if(!document.getElementById("yt-iframe-script")){const d=document.createElement("script");d.id="yt-iframe-script",d.src="https://www.youtube.com/iframe_api";const w=document.getElementsByTagName("script")[0];w&&w.parentNode?w.parentNode.insertBefore(d,w):document.head.appendChild(d)}const m=()=>{h.current||(h.current=new window.YT.Player("bgm-yt-player",{height:"1",width:"1",videoId:n.videoId,playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,rel:0},events:{onReady:d=>{p(!0),d.target.setVolume(i*100)},onStateChange:d=>{d.data===1?e(!0):d.data===2?e(!1):d.data===0&&x()},onError:d=>{console.error("❌ 再生エラー発生！"),console.error(` ・曲名: ${n.title}`),console.error(` ・動画ID: ${n.videoId}`),console.error(` ・エラーコード: ${d.data} (150なら埋め込み禁止)`),x()}}}))};window.YT&&window.YT.Player?m():window.onYouTubeIframeAPIReady=m},[n]),D.useEffect(()=>{f&&h.current&&h.current.setVolume(i*100)},[i,f]);const R=()=>{!h.current||!f||(t?h.current.pauseVideo():h.current.playVideo())},g=m=>{r(m),h.current&&(h.current.loadVideoById(m.videoId),h.current.playVideo(),e(!0))};return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"absolute",width:"1px",height:"1px",left:"-9999px",overflow:"hidden"},children:u.jsx("div",{id:"bgm-yt-player"})}),u.jsxs("div",{style:{position:"fixed",bottom:"10px",left:"10px",zIndex:9999,display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[a&&u.jsxs("div",{style:{background:"rgba(17, 24, 39, 0.95)",backdropFilter:"blur(8px)",border:"1px solid #374151",borderRadius:"12px",padding:"16px",width:"280px",marginBottom:"12px",boxShadow:"0 10px 25px rgba(0,0,0,0.5)"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#60a5fa",fontWeight:"bold"},children:[u.jsx(Np,{size:18}),u.jsx("span",{style:{fontSize:"0.9rem"},children:"蓮ノ空 BGM Player"})]}),u.jsx("button",{onClick:()=>c(!1),style:{background:"none",border:"none",color:"#9ca3af",cursor:"pointer"},children:u.jsx(lh,{size:20})})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",background:"rgba(0,0,0,0.4)",padding:"10px",borderRadius:"8px",marginBottom:"12px"},children:[u.jsx("button",{onClick:R,disabled:!n||n.videoId===""||!f,style:{background:t?"#ef4444":"#3b82f6",border:"none",color:"#fff",cursor:!n||n.videoId===""||!f?"not-allowed":"pointer",borderRadius:"50%",width:"36px",height:"36px",opacity:!n||n.videoId===""||!f?.5:1,display:"flex",justifyContent:"center",alignItems:"center",transition:"background 0.2s",flexShrink:0},children:t?u.jsx(IT,{size:18}):u.jsx(dv,{size:18,style:{marginLeft:"2px"}})}),u.jsx("div",{style:{flex:1,overflow:"hidden"},children:u.jsx("div",{style:{color:"#fff",fontSize:"0.8rem",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:n?f?n.title:"Buffering...":"Loading..."})}),u.jsx("button",{onClick:x,disabled:!f||o.length<=1,style:{background:"transparent",border:"none",color:"#9ca3af",cursor:!f||o.length<=1?"not-allowed":"pointer",display:"flex",justifyContent:"center",alignItems:"center",padding:"4px"},title:"次の曲へ",children:u.jsx(AT,{size:18})})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"12px",padding:"0 4px"},children:[u.jsx(VT,{size:16,color:"#9ca3af"}),u.jsx("input",{type:"range",min:0,max:1,step:.05,value:i,onChange:m=>s(parseFloat(m.target.value)),style:{flex:1,cursor:"pointer"}})]}),u.jsxs("div",{style:{fontSize:"0.75rem",color:"#9ca3af",marginBottom:"6px"},children:["プレイリスト (",o.length,"曲)"]}),u.jsxs("div",{style:{maxHeight:"150px",overflowY:"auto",paddingRight:"4px"},children:[o.map(m=>u.jsxs("div",{onClick:()=>g(m),style:{fontSize:"0.8rem",padding:"8px",cursor:"pointer",borderRadius:"6px",marginBottom:"4px",color:(n==null?void 0:n.videoId)===m.videoId?"#60a5fa":"#d1d5db",background:(n==null?void 0:n.videoId)===m.videoId?"rgba(96, 165, 250, 0.15)":"transparent",borderLeft:(n==null?void 0:n.videoId)===m.videoId?"3px solid #60a5fa":"3px solid transparent",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},onMouseOver:d=>d.currentTarget.style.background="rgba(255,255,255,0.05)",onMouseOut:d=>d.currentTarget.style.background=(n==null?void 0:n.videoId)===m.videoId?"rgba(96, 165, 250, 0.15)":"transparent",children:[u.jsx("div",{style:{fontWeight:"bold"},children:m.title}),u.jsx("div",{style:{fontSize:"0.65rem",color:"#9ca3af",marginTop:"2px"},children:m.artist})]},m.videoId)),o.length===0&&u.jsx("div",{style:{fontSize:"0.8rem",color:"#ef4444",padding:"8px"},children:"動画が取得できませんでした"})]})]}),!a&&u.jsx("button",{onClick:()=>c(!0),style:{background:t?"#3b82f6":"#1f2937",border:t?"2px solid #60a5fa":"2px solid #4b5563",color:"#fff",cursor:"pointer",borderRadius:"50%",width:"36px",height:"36px",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 4px 12px rgba(0,0,0,0.5)",transition:"all 0.2s ease-in-out"},children:u.jsx(Np,{size:22,color:t?"#ffffff":"#9ca3af"})})]})]})},_N=t=>{var e,n,r,i,s,o,l,a,c,f,p,h,_,y,x,R,g,m,d,w;return t&&{...t,setlist:t.setlist||[],animations:t.animations||{},player:{...t.player,hand:((e=t.player)==null?void 0:e.hand)||[],deck:((n=t.player)==null?void 0:n.deck)||[],discard:((r=t.player)==null?void 0:r.discard)||[],buffs:{...(i=t.player)==null?void 0:i.buffs,turnCardsPlayed:((o=(s=t.player)==null?void 0:s.buffs)==null?void 0:o.turnCardsPlayed)||[],turnCardsPlayedDetails:((a=(l=t.player)==null?void 0:l.buffs)==null?void 0:a.turnCardsPlayedDetails)||[],queuedEndTurnEffects:((f=(c=t.player)==null?void 0:c.buffs)==null?void 0:f.queuedEndTurnEffects)||[]}},enemy:{...t.enemy,hand:((p=t.enemy)==null?void 0:p.hand)||[],deck:((h=t.enemy)==null?void 0:h.deck)||[],discard:((_=t.enemy)==null?void 0:_.discard)||[],buffs:{...(y=t.enemy)==null?void 0:y.buffs,turnCardsPlayed:((R=(x=t.enemy)==null?void 0:x.buffs)==null?void 0:R.turnCardsPlayed)||[],turnCardsPlayedDetails:((m=(g=t.enemy)==null?void 0:g.buffs)==null?void 0:m.turnCardsPlayedDetails)||[],queuedEndTurnEffects:((w=(d=t.enemy)==null?void 0:d.buffs)==null?void 0:w.queuedEndTurnEffects)||[]}}}};function vN(){const[t,e]=D.useState(null),[n,r]=D.useState(!0),[i,s]=D.useState("home"),[o,l]=D.useState(""),[a,c]=D.useState(null),[f,p]=D.useState(null),[h,_]=D.useState({}),[y,x]=D.useState(null),[R,g]=D.useState(null),[m,d]=D.useState(""),[w,E]=D.useState(!1),[N,P]=D.useState([]),[O,H]=D.useState(null),z=D.useRef(null);D.useEffect(()=>{const I=oT(k=>{e(k),r(!1)});return()=>I()},[]),D.useEffect(()=>{const I=localStorage.getItem("battleSession");if(I)try{const k=JSON.parse(I);k.roomId&&(d(k.roomId),E(k.isHost),k.playerName&&l(k.playerName),k.gameMode&&c(k.gameMode),s("waitingRoom"))}catch(k){console.error("Session parse error:",k)}},[]),D.useEffect(()=>{i==="home"&&(localStorage.removeItem("battleSession"),d(""),H(null),x(null),z.current&&(z.current(),z.current=null))},[i]),D.useEffect(()=>{if(i==="lobby"){const I=QI(k=>P(k));return()=>I()}},[i]),D.useEffect(()=>{if(!(!m||i!=="waitingRoom"&&i!=="battle"))return z.current=eT(m,I=>{if(!I){alert("対戦ルームが既に終了または解散されています。"),s("home");return}if(H(I),I.status==="playing"&&I.gameState){const k=_N(I.gameState);x(k),i!=="battle"&&s("battle")}}),()=>{z.current&&z.current()}},[m,i]);const he=f?V1(f):[],Ie=Object.values(h).reduce((I,k)=>I+k,0),Ae=I=>{if(Ie>=30)return;const k=h[I]||0;if(!(k>=3)){if(I==="On your mark(102期Ver.)"&&k>=2){alert("「On your mark(102期Ver.)」はデッキに2枚までしか入れられません。");return}_(j=>({...j,[I]:k+1}))}},q=I=>{const k=h[I]||0;k<=0||_(j=>{const F={...j};return F[I]=k-1,F[I]<=0&&delete F[I],F})},je=()=>{if(!f)return;const I=Gg[f],k={};I.forEach(j=>{k[j]=(k[j]||0)+1}),_(k)},pt=()=>{if(a==="cpu"){const I=[];Object.entries(h).forEach(([Y,Z])=>{for(let Fe=0;Fe<Z;Fe++)I.push(Y)});const k=Xi(I),j=il(),F=Yg({deck:k,unit:f||"スリーズブーケ"},j);F.player.name=o||"YOU",F.enemy.name="寮母さん",x(F),s("battle")}else s("lobby")},mt=async()=>{try{const I=[];Object.entries(h).forEach(([F,Y])=>{for(let Z=0;Z<Y;Z++)I.push(F)});const k=Xi(I),j=await qI({deck:k,unit:f||""},o);d(j),E(!0),s("waitingRoom"),localStorage.setItem("battleSession",JSON.stringify({roomId:j,isHost:!0,playerName:o,gameMode:"online"}))}catch(I){console.error("部屋作成エラーの詳細:",I),alert(`部屋の作成に失敗しました:
`+I.message)}},L=async I=>{try{const k=[];Object.entries(h).forEach(([F,Y])=>{for(let Z=0;Z<Y;Z++)k.push(F)});const j=Xi(k);await JI(I,{deck:j,unit:f||""},o),d(I),E(!1),s("waitingRoom"),localStorage.setItem("battleSession",JSON.stringify({roomId:I,isHost:!1,playerName:o,gameMode:"online"}))}catch(k){alert(k.message)}},C=async()=>{if(!O||!O.clientDeck)return;const I=H1(O.hostDeck,O.clientDeck);I.player.name=O.hostName||"YOU",I.enemy.name=O.clientName||"相手",await ZI(m,I)},S=[0,0,0,0,0,0,0,0];Object.entries(h).forEach(([I,k])=>{const j=ud.find(Y=>Y.曲名===I),F=Math.min(Number(j==null?void 0:j.コスト)||0,7);S[F]+=k});const v=Math.max(1,...S),T=()=>n?u.jsx("div",{style:{height:"100%",width:"100%",backgroundColor:"#111827",display:"flex",justifyContent:"center",alignItems:"center",color:"white"},children:"Loading..."}):t?i==="home"?u.jsx(YT,{playerName:o,setPlayerName:l,setGameMode:c,setScreen:s,user:t}):i==="lobby"?u.jsx(QT,{roomsList:N,handleCreateRoom:mt,handleJoinRoom:L,setScreen:s}):i==="waitingRoom"?u.jsx(JT,{isHost:w,playerName:o,roomData:O,roomId:m,handleHostStartGame:C}):i==="deckBuilder"?u.jsx(qT,{gameMode:a,setScreen:s,deckTotal:Ie,selectedUnit:f,setSelectedUnit:p,manaCurve:S,maxManaCount:v,handleDeckComplete:pt,loadStarterDeck:je,deckList:h,setDeckList:_,availableCards:he,selectedCard:R,setSelectedCard:g,removeCardFromDeck:q,addCardToDeck:Ae,user:t}):i==="battle"&&y?u.jsx(hN,{gameState:y,setGameState:x,gameMode:a,roomId:m,isHost:w,setScreen:s,selectedCard:R,setSelectedCard:g}):null:u.jsx(fN,{});return u.jsx("div",{className:"app-wrapper",children:!n&&t?u.jsxs(mN,{children:[u.jsx(yN,{}),T()]}):T()})}Za.createRoot(document.getElementById("root")).render(u.jsx(Pv.StrictMode,{children:u.jsx(vN,{})}));
