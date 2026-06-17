(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ov(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Np={exports:{}},Pl={},xp={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Os=Symbol.for("react.element"),lv=Symbol.for("react.portal"),av=Symbol.for("react.fragment"),uv=Symbol.for("react.strict_mode"),cv=Symbol.for("react.profiler"),dv=Symbol.for("react.provider"),hv=Symbol.for("react.context"),fv=Symbol.for("react.forward_ref"),pv=Symbol.for("react.suspense"),mv=Symbol.for("react.memo"),gv=Symbol.for("react.lazy"),oh=Symbol.iterator;function _v(t){return t===null||typeof t!="object"?null:(t=oh&&t[oh]||t["@@iterator"],typeof t=="function"?t:null)}var Rp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pp=Object.assign,Ap={};function ci(t,e,n){this.props=t,this.context=e,this.refs=Ap,this.updater=n||Rp}ci.prototype.isReactComponent={};ci.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ci.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Op(){}Op.prototype=ci.prototype;function gc(t,e,n){this.props=t,this.context=e,this.refs=Ap,this.updater=n||Rp}var _c=gc.prototype=new Op;_c.constructor=gc;Pp(_c,ci.prototype);_c.isPureReactComponent=!0;var lh=Array.isArray,Dp=Object.prototype.hasOwnProperty,yc={current:null},bp={key:!0,ref:!0,__self:!0,__source:!0};function Lp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Dp.call(e,r)&&!bp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Os,type:t,key:s,ref:o,props:i,_owner:yc.current}}function yv(t,e){return{$$typeof:Os,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Os}function vv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ah=/\/+/g;function ua(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vv(""+t.key):e.toString(36)}function yo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Os:case lv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ua(o,0):r,lh(i)?(n="",t!=null&&(n=t.replace(ah,"$&/")+"/"),yo(i,e,n,"",function(u){return u})):i!=null&&(vc(i)&&(i=yv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ah,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",lh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+ua(s,l);o+=yo(s,e,n,a,i)}else if(a=_v(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+ua(s,l++),o+=yo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qs(t,e,n){if(t==null)return t;var r=[],i=0;return yo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function wv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ue={current:null},vo={transition:null},Ev={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:vo,ReactCurrentOwner:yc};function Mp(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:Qs,forEach:function(t,e,n){Qs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qs(t,function(){e++}),e},toArray:function(t){return Qs(t,function(e){return e})||[]},only:function(t){if(!vc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=ci;K.Fragment=av;K.Profiler=cv;K.PureComponent=gc;K.StrictMode=uv;K.Suspense=pv;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ev;K.act=Mp;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Pp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Dp.call(e,a)&&!bp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Os,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:hv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dv,_context:t},t.Consumer=t};K.createElement=Lp;K.createFactory=function(t){var e=Lp.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:fv,render:t}};K.isValidElement=vc;K.lazy=function(t){return{$$typeof:gv,_payload:{_status:-1,_result:t},_init:wv}};K.memo=function(t,e){return{$$typeof:mv,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=vo.transition;vo.transition={};try{t()}finally{vo.transition=e}};K.unstable_act=Mp;K.useCallback=function(t,e){return Ue.current.useCallback(t,e)};K.useContext=function(t){return Ue.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return Ue.current.useDeferredValue(t)};K.useEffect=function(t,e){return Ue.current.useEffect(t,e)};K.useId=function(){return Ue.current.useId()};K.useImperativeHandle=function(t,e,n){return Ue.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return Ue.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return Ue.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return Ue.current.useMemo(t,e)};K.useReducer=function(t,e,n){return Ue.current.useReducer(t,e,n)};K.useRef=function(t){return Ue.current.useRef(t)};K.useState=function(t){return Ue.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return Ue.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return Ue.current.useTransition()};K.version="18.3.1";xp.exports=K;var z=xp.exports;const Cv=ov(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv=z,Sv=Symbol.for("react.element"),Iv=Symbol.for("react.fragment"),Tv=Object.prototype.hasOwnProperty,Nv=kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xv={key:!0,ref:!0,__self:!0,__source:!0};function Fp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Tv.call(e,r)&&!xv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Sv,type:t,key:s,ref:o,props:i,_owner:Nv.current}}Pl.Fragment=Iv;Pl.jsx=Fp;Pl.jsxs=Fp;Np.exports=Pl;var f=Np.exports,Za={},jp={exports:{}},et={},Up={exports:{}},zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,v){var k=N.length;N.push(v);e:for(;0<k;){var S=k-1>>>1,I=N[S];if(0<i(I,v))N[S]=v,N[k]=I,k=S;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var v=N[0],k=N.pop();if(k!==v){N[0]=k;e:for(var S=0,I=N.length,P=I>>>1;S<P;){var R=2*(S+1)-1,j=N[R],U=R+1,Y=N[U];if(0>i(j,k))U<I&&0>i(Y,j)?(N[S]=Y,N[U]=k,S=U):(N[S]=j,N[R]=k,S=R);else if(U<I&&0>i(Y,k))N[S]=Y,N[U]=k,S=U;else break e}}return v}function i(N,v){var k=N.sortIndex-v.sortIndex;return k!==0?k:N.id-v.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,y=!1,_=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var v=n(u);v!==null;){if(v.callback===null)r(u);else if(v.startTime<=N)r(u),v.sortIndex=v.expirationTime,e(a,v);else break;v=n(u)}}function E(N){if(w=!1,p(N),!_)if(n(a)!==null)_=!0,ht(A);else{var v=n(u);v!==null&&L(E,v.startTime-N)}}function A(N,v){_=!1,w&&(w=!1,g(D),D=-1),y=!0;var k=h;try{for(p(v),c=n(a);c!==null&&(!(c.expirationTime>v)||N&&!ge());){var S=c.callback;if(typeof S=="function"){c.callback=null,h=c.priorityLevel;var I=S(c.expirationTime<=v);v=t.unstable_now(),typeof I=="function"?c.callback=I:c===n(a)&&r(a),p(v)}else r(a);c=n(a)}if(c!==null)var P=!0;else{var R=n(u);R!==null&&L(E,R.startTime-v),P=!1}return P}finally{c=null,h=k,y=!1}}var b=!1,T=null,D=-1,$=5,F=-1;function ge(){return!(t.unstable_now()-F<$)}function Ve(){if(T!==null){var N=t.unstable_now();F=N;var v=!0;try{v=T(!0,N)}finally{v?qe():(b=!1,T=null)}}else b=!1}var qe;if(typeof m=="function")qe=function(){m(Ve)};else if(typeof MessageChannel<"u"){var Tt=new MessageChannel,Ft=Tt.port2;Tt.port1.onmessage=Ve,qe=function(){Ft.postMessage(null)}}else qe=function(){C(Ve,0)};function ht(N){T=N,b||(b=!0,qe())}function L(N,v){D=C(function(){N(t.unstable_now())},v)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||y||(_=!0,ht(A))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var v=3;break;default:v=h}var k=h;h=v;try{return N()}finally{h=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,v){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var k=h;h=N;try{return v()}finally{h=k}},t.unstable_scheduleCallback=function(N,v,k){var S=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?S+k:S):k=S,N){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=k+I,N={id:d++,callback:v,priorityLevel:N,startTime:k,expirationTime:I,sortIndex:-1},k>S?(N.sortIndex=k,e(u,N),n(a)===null&&N===n(u)&&(w?(g(D),D=-1):w=!0,L(E,k-S))):(N.sortIndex=I,e(a,N),_||y||(_=!0,ht(A))),N},t.unstable_shouldYield=ge,t.unstable_wrapCallback=function(N){var v=h;return function(){var k=h;h=v;try{return N.apply(this,arguments)}finally{h=k}}}})(zp);Up.exports=zp;var Rv=Up.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv=z,Ze=Rv;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wp=new Set,ns={};function pr(t,e){Kr(t,e),Kr(t+"Capture",e)}function Kr(t,e){for(ns[t]=e,t=0;t<e.length;t++)Wp.add(e[t])}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eu=Object.prototype.hasOwnProperty,Av=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uh={},ch={};function Ov(t){return eu.call(ch,t)?!0:eu.call(uh,t)?!1:Av.test(t)?ch[t]=!0:(uh[t]=!0,!1)}function Dv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function bv(t,e,n,r){if(e===null||typeof e>"u"||Dv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ze(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xe[t]=new ze(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xe[e]=new ze(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xe[t]=new ze(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xe[t]=new ze(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xe[t]=new ze(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xe[t]=new ze(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xe[t]=new ze(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xe[t]=new ze(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xe[t]=new ze(t,5,!1,t.toLowerCase(),null,!1,!1)});var wc=/[\-:]([a-z])/g;function Ec(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wc,Ec);xe[e]=new ze(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wc,Ec);xe[e]=new ze(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wc,Ec);xe[e]=new ze(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xe[t]=new ze(t,1,!1,t.toLowerCase(),null,!1,!1)});xe.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xe[t]=new ze(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cc(t,e,n,r){var i=xe.hasOwnProperty(e)?xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(bv(e,n,i,r)&&(n=null),r||i===null?Ov(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nn=Pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Js=Symbol.for("react.element"),wr=Symbol.for("react.portal"),Er=Symbol.for("react.fragment"),kc=Symbol.for("react.strict_mode"),tu=Symbol.for("react.profiler"),Vp=Symbol.for("react.provider"),Hp=Symbol.for("react.context"),Sc=Symbol.for("react.forward_ref"),nu=Symbol.for("react.suspense"),ru=Symbol.for("react.suspense_list"),Ic=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),Bp=Symbol.for("react.offscreen"),dh=Symbol.iterator;function Ci(t){return t===null||typeof t!="object"?null:(t=dh&&t[dh]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Object.assign,ca;function bi(t){if(ca===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ca=e&&e[1]||""}return`
`+ca+t}var da=!1;function ha(t,e){if(!t||da)return"";da=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{da=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bi(t):""}function Lv(t){switch(t.tag){case 5:return bi(t.type);case 16:return bi("Lazy");case 13:return bi("Suspense");case 19:return bi("SuspenseList");case 0:case 2:case 15:return t=ha(t.type,!1),t;case 11:return t=ha(t.type.render,!1),t;case 1:return t=ha(t.type,!0),t;default:return""}}function iu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Er:return"Fragment";case wr:return"Portal";case tu:return"Profiler";case kc:return"StrictMode";case nu:return"Suspense";case ru:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hp:return(t.displayName||"Context")+".Consumer";case Vp:return(t._context.displayName||"Context")+".Provider";case Sc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ic:return e=t.displayName||null,e!==null?e:iu(t.type)||"Memo";case an:e=t._payload,t=t._init;try{return iu(t(e))}catch{}}return null}function Mv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return iu(e);case 8:return e===kc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function On(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $p(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Fv(t){var e=$p(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xs(t){t._valueTracker||(t._valueTracker=Fv(t))}function Gp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$p(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function bo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function su(t,e){var n=e.checked;return ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=On(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Kp(t,e){e=e.checked,e!=null&&Cc(t,"checked",e,!1)}function ou(t,e){Kp(t,e);var n=On(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lu(t,e.type,n):e.hasOwnProperty("defaultValue")&&lu(t,e.type,On(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lu(t,e,n){(e!=="number"||bo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Li=Array.isArray;function Lr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+On(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function au(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ph(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Li(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:On(n)}}function Yp(t,e){var n=On(e.value),r=On(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zs,Qp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zs=Zs||document.createElement("div"),Zs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function rs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jv=["Webkit","ms","Moz","O"];Object.keys(zi).forEach(function(t){jv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zi[e]=zi[t]})});function Jp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zi.hasOwnProperty(t)&&zi[t]?(""+e).trim():e+"px"}function Xp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Uv=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cu(t,e){if(e){if(Uv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function du(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hu=null;function Tc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fu=null,Mr=null,Fr=null;function gh(t){if(t=Ls(t)){if(typeof fu!="function")throw Error(x(280));var e=t.stateNode;e&&(e=Ll(e),fu(t.stateNode,t.type,e))}}function Zp(t){Mr?Fr?Fr.push(t):Fr=[t]:Mr=t}function em(){if(Mr){var t=Mr,e=Fr;if(Fr=Mr=null,gh(t),e)for(t=0;t<e.length;t++)gh(e[t])}}function tm(t,e){return t(e)}function nm(){}var fa=!1;function rm(t,e,n){if(fa)return t(e,n);fa=!0;try{return tm(t,e,n)}finally{fa=!1,(Mr!==null||Fr!==null)&&(nm(),em())}}function is(t,e){var n=t.stateNode;if(n===null)return null;var r=Ll(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var pu=!1;if(Yt)try{var ki={};Object.defineProperty(ki,"passive",{get:function(){pu=!0}}),window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{pu=!1}function zv(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Wi=!1,Lo=null,Mo=!1,mu=null,Wv={onError:function(t){Wi=!0,Lo=t}};function Vv(t,e,n,r,i,s,o,l,a){Wi=!1,Lo=null,zv.apply(Wv,arguments)}function Hv(t,e,n,r,i,s,o,l,a){if(Vv.apply(this,arguments),Wi){if(Wi){var u=Lo;Wi=!1,Lo=null}else throw Error(x(198));Mo||(Mo=!0,mu=u)}}function mr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function im(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _h(t){if(mr(t)!==t)throw Error(x(188))}function Bv(t){var e=t.alternate;if(!e){if(e=mr(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _h(i),t;if(s===r)return _h(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function sm(t){return t=Bv(t),t!==null?om(t):null}function om(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=om(t);if(e!==null)return e;t=t.sibling}return null}var lm=Ze.unstable_scheduleCallback,yh=Ze.unstable_cancelCallback,$v=Ze.unstable_shouldYield,Gv=Ze.unstable_requestPaint,pe=Ze.unstable_now,Kv=Ze.unstable_getCurrentPriorityLevel,Nc=Ze.unstable_ImmediatePriority,am=Ze.unstable_UserBlockingPriority,Fo=Ze.unstable_NormalPriority,Yv=Ze.unstable_LowPriority,um=Ze.unstable_IdlePriority,Al=null,Pt=null;function qv(t){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Al,t,void 0,(t.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:Xv,Qv=Math.log,Jv=Math.LN2;function Xv(t){return t>>>=0,t===0?32:31-(Qv(t)/Jv|0)|0}var eo=64,to=4194304;function Mi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Mi(l):(s&=o,s!==0&&(r=Mi(s)))}else o=n&~i,o!==0?r=Mi(o):s!==0&&(r=Mi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wt(e),i=1<<n,r|=t[n],e&=~i;return r}function Zv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function e0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Zv(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function gu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cm(){var t=eo;return eo<<=1,!(eo&4194240)&&(eo=64),t}function pa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ds(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wt(e),t[e]=n}function t0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function xc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var X=0;function dm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hm,Rc,fm,pm,mm,_u=!1,no=[],vn=null,wn=null,En=null,ss=new Map,os=new Map,cn=[],n0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vh(t,e){switch(t){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":ss.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":os.delete(e.pointerId)}}function Si(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ls(e),e!==null&&Rc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function r0(t,e,n,r,i){switch(e){case"focusin":return vn=Si(vn,t,e,n,r,i),!0;case"dragenter":return wn=Si(wn,t,e,n,r,i),!0;case"mouseover":return En=Si(En,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ss.set(s,Si(ss.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,os.set(s,Si(os.get(s)||null,t,e,n,r,i)),!0}return!1}function gm(t){var e=Qn(t.target);if(e!==null){var n=mr(e);if(n!==null){if(e=n.tag,e===13){if(e=im(n),e!==null){t.blockedOn=e,mm(t.priority,function(){fm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);hu=r,n.target.dispatchEvent(r),hu=null}else return e=Ls(n),e!==null&&Rc(e),t.blockedOn=n,!1;e.shift()}return!0}function wh(t,e,n){wo(t)&&n.delete(e)}function i0(){_u=!1,vn!==null&&wo(vn)&&(vn=null),wn!==null&&wo(wn)&&(wn=null),En!==null&&wo(En)&&(En=null),ss.forEach(wh),os.forEach(wh)}function Ii(t,e){t.blockedOn===e&&(t.blockedOn=null,_u||(_u=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,i0)))}function ls(t){function e(i){return Ii(i,t)}if(0<no.length){Ii(no[0],t);for(var n=1;n<no.length;n++){var r=no[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vn!==null&&Ii(vn,t),wn!==null&&Ii(wn,t),En!==null&&Ii(En,t),ss.forEach(e),os.forEach(e),n=0;n<cn.length;n++)r=cn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<cn.length&&(n=cn[0],n.blockedOn===null);)gm(n),n.blockedOn===null&&cn.shift()}var jr=nn.ReactCurrentBatchConfig,Uo=!0;function s0(t,e,n,r){var i=X,s=jr.transition;jr.transition=null;try{X=1,Pc(t,e,n,r)}finally{X=i,jr.transition=s}}function o0(t,e,n,r){var i=X,s=jr.transition;jr.transition=null;try{X=4,Pc(t,e,n,r)}finally{X=i,jr.transition=s}}function Pc(t,e,n,r){if(Uo){var i=yu(t,e,n,r);if(i===null)Sa(t,e,r,zo,n),vh(t,r);else if(r0(i,t,e,n,r))r.stopPropagation();else if(vh(t,r),e&4&&-1<n0.indexOf(t)){for(;i!==null;){var s=Ls(i);if(s!==null&&hm(s),s=yu(t,e,n,r),s===null&&Sa(t,e,r,zo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Sa(t,e,r,null,n)}}var zo=null;function yu(t,e,n,r){if(zo=null,t=Tc(r),t=Qn(t),t!==null)if(e=mr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=im(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zo=t,null}function _m(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kv()){case Nc:return 1;case am:return 4;case Fo:case Yv:return 16;case um:return 536870912;default:return 16}default:return 16}}var gn=null,Ac=null,Eo=null;function ym(){if(Eo)return Eo;var t,e=Ac,n=e.length,r,i="value"in gn?gn.value:gn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Eo=i.slice(t,1<r?1-r:void 0)}function Co(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function Eh(){return!1}function tt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ro:Eh,this.isPropagationStopped=Eh,this}return ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),e}var di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oc=tt(di),bs=ce({},di,{view:0,detail:0}),l0=tt(bs),ma,ga,Ti,Ol=ce({},bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ti&&(Ti&&t.type==="mousemove"?(ma=t.screenX-Ti.screenX,ga=t.screenY-Ti.screenY):ga=ma=0,Ti=t),ma)},movementY:function(t){return"movementY"in t?t.movementY:ga}}),Ch=tt(Ol),a0=ce({},Ol,{dataTransfer:0}),u0=tt(a0),c0=ce({},bs,{relatedTarget:0}),_a=tt(c0),d0=ce({},di,{animationName:0,elapsedTime:0,pseudoElement:0}),h0=tt(d0),f0=ce({},di,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),p0=tt(f0),m0=ce({},di,{data:0}),kh=tt(m0),g0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=y0[t])?!!e[t]:!1}function Dc(){return v0}var w0=ce({},bs,{key:function(t){if(t.key){var e=g0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Co(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dc,charCode:function(t){return t.type==="keypress"?Co(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Co(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),E0=tt(w0),C0=ce({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sh=tt(C0),k0=ce({},bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dc}),S0=tt(k0),I0=ce({},di,{propertyName:0,elapsedTime:0,pseudoElement:0}),T0=tt(I0),N0=ce({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),x0=tt(N0),R0=[9,13,27,32],bc=Yt&&"CompositionEvent"in window,Vi=null;Yt&&"documentMode"in document&&(Vi=document.documentMode);var P0=Yt&&"TextEvent"in window&&!Vi,vm=Yt&&(!bc||Vi&&8<Vi&&11>=Vi),Ih=String.fromCharCode(32),Th=!1;function wm(t,e){switch(t){case"keyup":return R0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Em(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cr=!1;function A0(t,e){switch(t){case"compositionend":return Em(e);case"keypress":return e.which!==32?null:(Th=!0,Ih);case"textInput":return t=e.data,t===Ih&&Th?null:t;default:return null}}function O0(t,e){if(Cr)return t==="compositionend"||!bc&&wm(t,e)?(t=ym(),Eo=Ac=gn=null,Cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vm&&e.locale!=="ko"?null:e.data;default:return null}}var D0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!D0[t.type]:e==="textarea"}function Cm(t,e,n,r){Zp(r),e=Wo(e,"onChange"),0<e.length&&(n=new Oc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hi=null,as=null;function b0(t){Dm(t,0)}function Dl(t){var e=Ir(t);if(Gp(e))return t}function L0(t,e){if(t==="change")return e}var km=!1;if(Yt){var ya;if(Yt){var va="oninput"in document;if(!va){var xh=document.createElement("div");xh.setAttribute("oninput","return;"),va=typeof xh.oninput=="function"}ya=va}else ya=!1;km=ya&&(!document.documentMode||9<document.documentMode)}function Rh(){Hi&&(Hi.detachEvent("onpropertychange",Sm),as=Hi=null)}function Sm(t){if(t.propertyName==="value"&&Dl(as)){var e=[];Cm(e,as,t,Tc(t)),rm(b0,e)}}function M0(t,e,n){t==="focusin"?(Rh(),Hi=e,as=n,Hi.attachEvent("onpropertychange",Sm)):t==="focusout"&&Rh()}function F0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(as)}function j0(t,e){if(t==="click")return Dl(e)}function U0(t,e){if(t==="input"||t==="change")return Dl(e)}function z0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kt=typeof Object.is=="function"?Object.is:z0;function us(t,e){if(kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!eu.call(e,i)||!kt(t[i],e[i]))return!1}return!0}function Ph(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ah(t,e){var n=Ph(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ph(n)}}function Im(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Im(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tm(){for(var t=window,e=bo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=bo(t.document)}return e}function Lc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function W0(t){var e=Tm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Im(n.ownerDocument.documentElement,n)){if(r!==null&&Lc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ah(n,s);var o=Ah(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var V0=Yt&&"documentMode"in document&&11>=document.documentMode,kr=null,vu=null,Bi=null,wu=!1;function Oh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wu||kr==null||kr!==bo(r)||(r=kr,"selectionStart"in r&&Lc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bi&&us(Bi,r)||(Bi=r,r=Wo(vu,"onSelect"),0<r.length&&(e=new Oc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=kr)))}function io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Sr={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},wa={},Nm={};Yt&&(Nm=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function bl(t){if(wa[t])return wa[t];if(!Sr[t])return t;var e=Sr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Nm)return wa[t]=e[n];return t}var xm=bl("animationend"),Rm=bl("animationiteration"),Pm=bl("animationstart"),Am=bl("transitionend"),Om=new Map,Dh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(t,e){Om.set(t,e),pr(e,[t])}for(var Ea=0;Ea<Dh.length;Ea++){var Ca=Dh[Ea],H0=Ca.toLowerCase(),B0=Ca[0].toUpperCase()+Ca.slice(1);Fn(H0,"on"+B0)}Fn(xm,"onAnimationEnd");Fn(Rm,"onAnimationIteration");Fn(Pm,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn(Am,"onTransitionEnd");Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fi));function bh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Hv(r,e,void 0,t),t.currentTarget=null}function Dm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;bh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;bh(i,l,u),s=a}}}if(Mo)throw t=mu,Mo=!1,mu=null,t}function ie(t,e){var n=e[Iu];n===void 0&&(n=e[Iu]=new Set);var r=t+"__bubble";n.has(r)||(bm(e,t,2,!1),n.add(r))}function ka(t,e,n){var r=0;e&&(r|=4),bm(n,t,r,e)}var so="_reactListening"+Math.random().toString(36).slice(2);function cs(t){if(!t[so]){t[so]=!0,Wp.forEach(function(n){n!=="selectionchange"&&($0.has(n)||ka(n,!1,t),ka(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[so]||(e[so]=!0,ka("selectionchange",!1,e))}}function bm(t,e,n,r){switch(_m(e)){case 1:var i=s0;break;case 4:i=o0;break;default:i=Pc}n=i.bind(null,e,n,t),i=void 0,!pu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Sa(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Qn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}rm(function(){var u=s,d=Tc(n),c=[];e:{var h=Om.get(t);if(h!==void 0){var y=Oc,_=t;switch(t){case"keypress":if(Co(n)===0)break e;case"keydown":case"keyup":y=E0;break;case"focusin":_="focus",y=_a;break;case"focusout":_="blur",y=_a;break;case"beforeblur":case"afterblur":y=_a;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=u0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=S0;break;case xm:case Rm:case Pm:y=h0;break;case Am:y=T0;break;case"scroll":y=l0;break;case"wheel":y=x0;break;case"copy":case"cut":case"paste":y=p0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Sh}var w=(e&4)!==0,C=!w&&t==="scroll",g=w?h!==null?h+"Capture":null:h;w=[];for(var m=u,p;m!==null;){p=m;var E=p.stateNode;if(p.tag===5&&E!==null&&(p=E,g!==null&&(E=is(m,g),E!=null&&w.push(ds(m,E,p)))),C)break;m=m.return}0<w.length&&(h=new y(h,_,null,n,d),c.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",h&&n!==hu&&(_=n.relatedTarget||n.fromElement)&&(Qn(_)||_[qt]))break e;if((y||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,y?(_=n.relatedTarget||n.toElement,y=u,_=_?Qn(_):null,_!==null&&(C=mr(_),_!==C||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=u),y!==_)){if(w=Ch,E="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(w=Sh,E="onPointerLeave",g="onPointerEnter",m="pointer"),C=y==null?h:Ir(y),p=_==null?h:Ir(_),h=new w(E,m+"leave",y,n,d),h.target=C,h.relatedTarget=p,E=null,Qn(d)===u&&(w=new w(g,m+"enter",_,n,d),w.target=p,w.relatedTarget=C,E=w),C=E,y&&_)t:{for(w=y,g=_,m=0,p=w;p;p=yr(p))m++;for(p=0,E=g;E;E=yr(E))p++;for(;0<m-p;)w=yr(w),m--;for(;0<p-m;)g=yr(g),p--;for(;m--;){if(w===g||g!==null&&w===g.alternate)break t;w=yr(w),g=yr(g)}w=null}else w=null;y!==null&&Lh(c,h,y,w,!1),_!==null&&C!==null&&Lh(c,C,_,w,!0)}}e:{if(h=u?Ir(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var A=L0;else if(Nh(h))if(km)A=U0;else{A=F0;var b=M0}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=j0);if(A&&(A=A(t,u))){Cm(c,A,n,d);break e}b&&b(t,h,u),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&lu(h,"number",h.value)}switch(b=u?Ir(u):window,t){case"focusin":(Nh(b)||b.contentEditable==="true")&&(kr=b,vu=u,Bi=null);break;case"focusout":Bi=vu=kr=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,Oh(c,n,d);break;case"selectionchange":if(V0)break;case"keydown":case"keyup":Oh(c,n,d)}var T;if(bc)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Cr?wm(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(vm&&n.locale!=="ko"&&(Cr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Cr&&(T=ym()):(gn=d,Ac="value"in gn?gn.value:gn.textContent,Cr=!0)),b=Wo(u,D),0<b.length&&(D=new kh(D,t,null,n,d),c.push({event:D,listeners:b}),T?D.data=T:(T=Em(n),T!==null&&(D.data=T)))),(T=P0?A0(t,n):O0(t,n))&&(u=Wo(u,"onBeforeInput"),0<u.length&&(d=new kh("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=T))}Dm(c,e)})}function ds(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=is(t,n),s!=null&&r.unshift(ds(t,s,i)),s=is(t,e),s!=null&&r.push(ds(t,s,i))),t=t.return}return r}function yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=is(n,s),a!=null&&o.unshift(ds(n,a,l))):i||(a=is(n,s),a!=null&&o.push(ds(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var G0=/\r\n?/g,K0=/\u0000|\uFFFD/g;function Mh(t){return(typeof t=="string"?t:""+t).replace(G0,`
`).replace(K0,"")}function oo(t,e,n){if(e=Mh(e),Mh(t)!==e&&n)throw Error(x(425))}function Vo(){}var Eu=null,Cu=null;function ku(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Su=typeof setTimeout=="function"?setTimeout:void 0,Y0=typeof clearTimeout=="function"?clearTimeout:void 0,Fh=typeof Promise=="function"?Promise:void 0,q0=typeof queueMicrotask=="function"?queueMicrotask:typeof Fh<"u"?function(t){return Fh.resolve(null).then(t).catch(Q0)}:Su;function Q0(t){setTimeout(function(){throw t})}function Ia(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ls(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ls(e)}function Cn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var hi=Math.random().toString(36).slice(2),Rt="__reactFiber$"+hi,hs="__reactProps$"+hi,qt="__reactContainer$"+hi,Iu="__reactEvents$"+hi,J0="__reactListeners$"+hi,X0="__reactHandles$"+hi;function Qn(t){var e=t[Rt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qt]||n[Rt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jh(t);t!==null;){if(n=t[Rt])return n;t=jh(t)}return e}t=n,n=t.parentNode}return null}function Ls(t){return t=t[Rt]||t[qt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ir(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function Ll(t){return t[hs]||null}var Tu=[],Tr=-1;function jn(t){return{current:t}}function se(t){0>Tr||(t.current=Tu[Tr],Tu[Tr]=null,Tr--)}function re(t,e){Tr++,Tu[Tr]=t.current,t.current=e}var Dn={},De=jn(Dn),Ge=jn(!1),ir=Dn;function Yr(t,e){var n=t.type.contextTypes;if(!n)return Dn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(t){return t=t.childContextTypes,t!=null}function Ho(){se(Ge),se(De)}function Uh(t,e,n){if(De.current!==Dn)throw Error(x(168));re(De,e),re(Ge,n)}function Lm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,Mv(t)||"Unknown",i));return ce({},n,r)}function Bo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dn,ir=De.current,re(De,t),re(Ge,Ge.current),!0}function zh(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=Lm(t,e,ir),r.__reactInternalMemoizedMergedChildContext=t,se(Ge),se(De),re(De,t)):se(Ge),re(Ge,n)}var Ut=null,Ml=!1,Ta=!1;function Mm(t){Ut===null?Ut=[t]:Ut.push(t)}function Z0(t){Ml=!0,Mm(t)}function Un(){if(!Ta&&Ut!==null){Ta=!0;var t=0,e=X;try{var n=Ut;for(X=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ut=null,Ml=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(t+1)),lm(Nc,Un),i}finally{X=e,Ta=!1}}return null}var Nr=[],xr=0,$o=null,Go=0,it=[],st=0,sr=null,zt=1,Wt="";function Gn(t,e){Nr[xr++]=Go,Nr[xr++]=$o,$o=t,Go=e}function Fm(t,e,n){it[st++]=zt,it[st++]=Wt,it[st++]=sr,sr=t;var r=zt;t=Wt;var i=32-wt(r)-1;r&=~(1<<i),n+=1;var s=32-wt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,zt=1<<32-wt(e)+i|n<<i|r,Wt=s+t}else zt=1<<s|n<<i|r,Wt=t}function Mc(t){t.return!==null&&(Gn(t,1),Fm(t,1,0))}function Fc(t){for(;t===$o;)$o=Nr[--xr],Nr[xr]=null,Go=Nr[--xr],Nr[xr]=null;for(;t===sr;)sr=it[--st],it[st]=null,Wt=it[--st],it[st]=null,zt=it[--st],it[st]=null}var Xe=null,Je=null,oe=!1,gt=null;function jm(t,e){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xe=t,Je=Cn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xe=t,Je=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=sr!==null?{id:zt,overflow:Wt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Xe=t,Je=null,!0):!1;default:return!1}}function Nu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xu(t){if(oe){var e=Je;if(e){var n=e;if(!Wh(t,e)){if(Nu(t))throw Error(x(418));e=Cn(n.nextSibling);var r=Xe;e&&Wh(t,e)?jm(r,n):(t.flags=t.flags&-4097|2,oe=!1,Xe=t)}}else{if(Nu(t))throw Error(x(418));t.flags=t.flags&-4097|2,oe=!1,Xe=t}}}function Vh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xe=t}function lo(t){if(t!==Xe)return!1;if(!oe)return Vh(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ku(t.type,t.memoizedProps)),e&&(e=Je)){if(Nu(t))throw Um(),Error(x(418));for(;e;)jm(t,e),e=Cn(e.nextSibling)}if(Vh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Je=Cn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Je=null}}else Je=Xe?Cn(t.stateNode.nextSibling):null;return!0}function Um(){for(var t=Je;t;)t=Cn(t.nextSibling)}function qr(){Je=Xe=null,oe=!1}function jc(t){gt===null?gt=[t]:gt.push(t)}var ew=nn.ReactCurrentBatchConfig;function Ni(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function ao(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hh(t){var e=t._init;return e(t._payload)}function zm(t){function e(g,m){if(t){var p=g.deletions;p===null?(g.deletions=[m],g.flags|=16):p.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Tn(g,m),g.index=0,g.sibling=null,g}function s(g,m,p){return g.index=p,t?(p=g.alternate,p!==null?(p=p.index,p<m?(g.flags|=2,m):p):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,m,p,E){return m===null||m.tag!==6?(m=Da(p,g.mode,E),m.return=g,m):(m=i(m,p),m.return=g,m)}function a(g,m,p,E){var A=p.type;return A===Er?d(g,m,p.props.children,E,p.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===an&&Hh(A)===m.type)?(E=i(m,p.props),E.ref=Ni(g,m,p),E.return=g,E):(E=Ro(p.type,p.key,p.props,null,g.mode,E),E.ref=Ni(g,m,p),E.return=g,E)}function u(g,m,p,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=ba(p,g.mode,E),m.return=g,m):(m=i(m,p.children||[]),m.return=g,m)}function d(g,m,p,E,A){return m===null||m.tag!==7?(m=tr(p,g.mode,E,A),m.return=g,m):(m=i(m,p),m.return=g,m)}function c(g,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Da(""+m,g.mode,p),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Js:return p=Ro(m.type,m.key,m.props,null,g.mode,p),p.ref=Ni(g,null,m),p.return=g,p;case wr:return m=ba(m,g.mode,p),m.return=g,m;case an:var E=m._init;return c(g,E(m._payload),p)}if(Li(m)||Ci(m))return m=tr(m,g.mode,p,null),m.return=g,m;ao(g,m)}return null}function h(g,m,p,E){var A=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return A!==null?null:l(g,m,""+p,E);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Js:return p.key===A?a(g,m,p,E):null;case wr:return p.key===A?u(g,m,p,E):null;case an:return A=p._init,h(g,m,A(p._payload),E)}if(Li(p)||Ci(p))return A!==null?null:d(g,m,p,E,null);ao(g,p)}return null}function y(g,m,p,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(p)||null,l(m,g,""+E,A);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Js:return g=g.get(E.key===null?p:E.key)||null,a(m,g,E,A);case wr:return g=g.get(E.key===null?p:E.key)||null,u(m,g,E,A);case an:var b=E._init;return y(g,m,p,b(E._payload),A)}if(Li(E)||Ci(E))return g=g.get(p)||null,d(m,g,E,A,null);ao(m,E)}return null}function _(g,m,p,E){for(var A=null,b=null,T=m,D=m=0,$=null;T!==null&&D<p.length;D++){T.index>D?($=T,T=null):$=T.sibling;var F=h(g,T,p[D],E);if(F===null){T===null&&(T=$);break}t&&T&&F.alternate===null&&e(g,T),m=s(F,m,D),b===null?A=F:b.sibling=F,b=F,T=$}if(D===p.length)return n(g,T),oe&&Gn(g,D),A;if(T===null){for(;D<p.length;D++)T=c(g,p[D],E),T!==null&&(m=s(T,m,D),b===null?A=T:b.sibling=T,b=T);return oe&&Gn(g,D),A}for(T=r(g,T);D<p.length;D++)$=y(T,g,D,p[D],E),$!==null&&(t&&$.alternate!==null&&T.delete($.key===null?D:$.key),m=s($,m,D),b===null?A=$:b.sibling=$,b=$);return t&&T.forEach(function(ge){return e(g,ge)}),oe&&Gn(g,D),A}function w(g,m,p,E){var A=Ci(p);if(typeof A!="function")throw Error(x(150));if(p=A.call(p),p==null)throw Error(x(151));for(var b=A=null,T=m,D=m=0,$=null,F=p.next();T!==null&&!F.done;D++,F=p.next()){T.index>D?($=T,T=null):$=T.sibling;var ge=h(g,T,F.value,E);if(ge===null){T===null&&(T=$);break}t&&T&&ge.alternate===null&&e(g,T),m=s(ge,m,D),b===null?A=ge:b.sibling=ge,b=ge,T=$}if(F.done)return n(g,T),oe&&Gn(g,D),A;if(T===null){for(;!F.done;D++,F=p.next())F=c(g,F.value,E),F!==null&&(m=s(F,m,D),b===null?A=F:b.sibling=F,b=F);return oe&&Gn(g,D),A}for(T=r(g,T);!F.done;D++,F=p.next())F=y(T,g,D,F.value,E),F!==null&&(t&&F.alternate!==null&&T.delete(F.key===null?D:F.key),m=s(F,m,D),b===null?A=F:b.sibling=F,b=F);return t&&T.forEach(function(Ve){return e(g,Ve)}),oe&&Gn(g,D),A}function C(g,m,p,E){if(typeof p=="object"&&p!==null&&p.type===Er&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Js:e:{for(var A=p.key,b=m;b!==null;){if(b.key===A){if(A=p.type,A===Er){if(b.tag===7){n(g,b.sibling),m=i(b,p.props.children),m.return=g,g=m;break e}}else if(b.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===an&&Hh(A)===b.type){n(g,b.sibling),m=i(b,p.props),m.ref=Ni(g,b,p),m.return=g,g=m;break e}n(g,b);break}else e(g,b);b=b.sibling}p.type===Er?(m=tr(p.props.children,g.mode,E,p.key),m.return=g,g=m):(E=Ro(p.type,p.key,p.props,null,g.mode,E),E.ref=Ni(g,m,p),E.return=g,g=E)}return o(g);case wr:e:{for(b=p.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(g,m.sibling),m=i(m,p.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=ba(p,g.mode,E),m.return=g,g=m}return o(g);case an:return b=p._init,C(g,m,b(p._payload),E)}if(Li(p))return _(g,m,p,E);if(Ci(p))return w(g,m,p,E);ao(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,p),m.return=g,g=m):(n(g,m),m=Da(p,g.mode,E),m.return=g,g=m),o(g)):n(g,m)}return C}var Qr=zm(!0),Wm=zm(!1),Ko=jn(null),Yo=null,Rr=null,Uc=null;function zc(){Uc=Rr=Yo=null}function Wc(t){var e=Ko.current;se(Ko),t._currentValue=e}function Ru(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ur(t,e){Yo=t,Uc=Rr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Be=!0),t.firstContext=null)}function ut(t){var e=t._currentValue;if(Uc!==t)if(t={context:t,memoizedValue:e,next:null},Rr===null){if(Yo===null)throw Error(x(308));Rr=t,Yo.dependencies={lanes:0,firstContext:t}}else Rr=Rr.next=t;return e}var Jn=null;function Vc(t){Jn===null?Jn=[t]:Jn.push(t)}function Vm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Vc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Qt(t,r)}function Qt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var un=!1;function Hc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Qt(t,n)}return i=r.interleaved,i===null?(e.next=e,Vc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Qt(t,n)}function ko(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xc(t,n)}}function Bh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qo(t,e,n,r){var i=t.updateQueue;un=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,y=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,w=l;switch(h=e,y=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){c=_.call(y,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,h=typeof _=="function"?_.call(y,c,h):_,h==null)break e;c=ce({},c,h);break e;case 2:un=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=y,a=c):d=d.next=y,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);lr|=o,t.lanes=o,t.memoizedState=c}}function $h(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var Ms={},At=jn(Ms),fs=jn(Ms),ps=jn(Ms);function Xn(t){if(t===Ms)throw Error(x(174));return t}function Bc(t,e){switch(re(ps,e),re(fs,t),re(At,Ms),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uu(e,t)}se(At),re(At,e)}function Jr(){se(At),se(fs),se(ps)}function Bm(t){Xn(ps.current);var e=Xn(At.current),n=uu(e,t.type);e!==n&&(re(fs,t),re(At,n))}function $c(t){fs.current===t&&(se(At),se(fs))}var ae=jn(0);function Qo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Na=[];function Gc(){for(var t=0;t<Na.length;t++)Na[t]._workInProgressVersionPrimary=null;Na.length=0}var So=nn.ReactCurrentDispatcher,xa=nn.ReactCurrentBatchConfig,or=0,ue=null,_e=null,Ce=null,Jo=!1,$i=!1,ms=0,tw=0;function Pe(){throw Error(x(321))}function Kc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kt(t[n],e[n]))return!1;return!0}function Yc(t,e,n,r,i,s){if(or=s,ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,So.current=t===null||t.memoizedState===null?sw:ow,t=n(r,i),$i){s=0;do{if($i=!1,ms=0,25<=s)throw Error(x(301));s+=1,Ce=_e=null,e.updateQueue=null,So.current=lw,t=n(r,i)}while($i)}if(So.current=Xo,e=_e!==null&&_e.next!==null,or=0,Ce=_e=ue=null,Jo=!1,e)throw Error(x(300));return t}function qc(){var t=ms!==0;return ms=0,t}function xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?ue.memoizedState=Ce=t:Ce=Ce.next=t,Ce}function ct(){if(_e===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=_e.next;var e=Ce===null?ue.memoizedState:Ce.next;if(e!==null)Ce=e,_e=t;else{if(t===null)throw Error(x(310));_e=t,t={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Ce===null?ue.memoizedState=Ce=t:Ce=Ce.next=t}return Ce}function gs(t,e){return typeof e=="function"?e(t):e}function Ra(t){var e=ct(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=_e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((or&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,ue.lanes|=d,lr|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,kt(r,e.memoizedState)||(Be=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ue.lanes|=s,lr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pa(t){var e=ct(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);kt(s,e.memoizedState)||(Be=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $m(){}function Gm(t,e){var n=ue,r=ct(),i=e(),s=!kt(r.memoizedState,i);if(s&&(r.memoizedState=i,Be=!0),r=r.queue,Qc(qm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,_s(9,Ym.bind(null,n,r,i,e),void 0,null),Se===null)throw Error(x(349));or&30||Km(n,e,i)}return i}function Km(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ym(t,e,n,r){e.value=n,e.getSnapshot=r,Qm(e)&&Jm(t)}function qm(t,e,n){return n(function(){Qm(e)&&Jm(t)})}function Qm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kt(t,n)}catch{return!0}}function Jm(t){var e=Qt(t,1);e!==null&&Et(e,t,1,-1)}function Gh(t){var e=xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:t},e.queue=t,t=t.dispatch=iw.bind(null,ue,t),[e.memoizedState,t]}function _s(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Xm(){return ct().memoizedState}function Io(t,e,n,r){var i=xt();ue.flags|=t,i.memoizedState=_s(1|e,n,void 0,r===void 0?null:r)}function Fl(t,e,n,r){var i=ct();r=r===void 0?null:r;var s=void 0;if(_e!==null){var o=_e.memoizedState;if(s=o.destroy,r!==null&&Kc(r,o.deps)){i.memoizedState=_s(e,n,s,r);return}}ue.flags|=t,i.memoizedState=_s(1|e,n,s,r)}function Kh(t,e){return Io(8390656,8,t,e)}function Qc(t,e){return Fl(2048,8,t,e)}function Zm(t,e){return Fl(4,2,t,e)}function eg(t,e){return Fl(4,4,t,e)}function tg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ng(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4,4,tg.bind(null,e,t),n)}function Jc(){}function rg(t,e){var n=ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ig(t,e){var n=ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function sg(t,e,n){return or&21?(kt(n,e)||(n=cm(),ue.lanes|=n,lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Be=!0),t.memoizedState=n)}function nw(t,e){var n=X;X=n!==0&&4>n?n:4,t(!0);var r=xa.transition;xa.transition={};try{t(!1),e()}finally{X=n,xa.transition=r}}function og(){return ct().memoizedState}function rw(t,e,n){var r=In(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lg(t))ag(e,n);else if(n=Vm(t,e,n,r),n!==null){var i=Me();Et(n,t,r,i),ug(n,e,r)}}function iw(t,e,n){var r=In(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lg(t))ag(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,kt(l,o)){var a=e.interleaved;a===null?(i.next=i,Vc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Vm(t,e,i,r),n!==null&&(i=Me(),Et(n,t,r,i),ug(n,e,r))}}function lg(t){var e=t.alternate;return t===ue||e!==null&&e===ue}function ag(t,e){$i=Jo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ug(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xc(t,n)}}var Xo={readContext:ut,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},sw={readContext:ut,useCallback:function(t,e){return xt().memoizedState=[t,e===void 0?null:e],t},useContext:ut,useEffect:Kh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Io(4194308,4,tg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Io(4194308,4,t,e)},useInsertionEffect:function(t,e){return Io(4,2,t,e)},useMemo:function(t,e){var n=xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=rw.bind(null,ue,t),[r.memoizedState,t]},useRef:function(t){var e=xt();return t={current:t},e.memoizedState=t},useState:Gh,useDebugValue:Jc,useDeferredValue:function(t){return xt().memoizedState=t},useTransition:function(){var t=Gh(!1),e=t[0];return t=nw.bind(null,t[1]),xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ue,i=xt();if(oe){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),Se===null)throw Error(x(349));or&30||Km(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Kh(qm.bind(null,r,s,t),[t]),r.flags|=2048,_s(9,Ym.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=xt(),e=Se.identifierPrefix;if(oe){var n=Wt,r=zt;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ms++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=tw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ow={readContext:ut,useCallback:rg,useContext:ut,useEffect:Qc,useImperativeHandle:ng,useInsertionEffect:Zm,useLayoutEffect:eg,useMemo:ig,useReducer:Ra,useRef:Xm,useState:function(){return Ra(gs)},useDebugValue:Jc,useDeferredValue:function(t){var e=ct();return sg(e,_e.memoizedState,t)},useTransition:function(){var t=Ra(gs)[0],e=ct().memoizedState;return[t,e]},useMutableSource:$m,useSyncExternalStore:Gm,useId:og,unstable_isNewReconciler:!1},lw={readContext:ut,useCallback:rg,useContext:ut,useEffect:Qc,useImperativeHandle:ng,useInsertionEffect:Zm,useLayoutEffect:eg,useMemo:ig,useReducer:Pa,useRef:Xm,useState:function(){return Pa(gs)},useDebugValue:Jc,useDeferredValue:function(t){var e=ct();return _e===null?e.memoizedState=t:sg(e,_e.memoizedState,t)},useTransition:function(){var t=Pa(gs)[0],e=ct().memoizedState;return[t,e]},useMutableSource:$m,useSyncExternalStore:Gm,useId:og,unstable_isNewReconciler:!1};function pt(t,e){if(t&&t.defaultProps){e=ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Pu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jl={isMounted:function(t){return(t=t._reactInternals)?mr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Me(),i=In(t),s=Gt(r,i);s.payload=e,n!=null&&(s.callback=n),e=kn(t,s,i),e!==null&&(Et(e,t,i,r),ko(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Me(),i=In(t),s=Gt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=kn(t,s,i),e!==null&&(Et(e,t,i,r),ko(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Me(),r=In(t),i=Gt(n,r);i.tag=2,e!=null&&(i.callback=e),e=kn(t,i,r),e!==null&&(Et(e,t,r,n),ko(e,t,r))}};function Yh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!us(n,r)||!us(i,s):!0}function cg(t,e,n){var r=!1,i=Dn,s=e.contextType;return typeof s=="object"&&s!==null?s=ut(s):(i=Ke(e)?ir:De.current,r=e.contextTypes,s=(r=r!=null)?Yr(t,i):Dn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function qh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&jl.enqueueReplaceState(e,e.state,null)}function Au(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Hc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ut(s):(s=Ke(e)?ir:De.current,i.context=Yr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Pu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&jl.enqueueReplaceState(i,i.state,null),qo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xr(t,e){try{var n="",r=e;do n+=Lv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Aa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ou(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aw=typeof WeakMap=="function"?WeakMap:Map;function dg(t,e,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){el||(el=!0,Vu=r),Ou(t,e)},n}function hg(t,e,n){n=Gt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ou(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ou(t,e),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Cw.bind(null,t,e,n),e.then(t,t))}function Jh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gt(-1,1),e.tag=2,kn(n,e,1))),n.lanes|=1),t)}var uw=nn.ReactCurrentOwner,Be=!1;function be(t,e,n,r){e.child=t===null?Wm(e,null,n,r):Qr(e,t.child,n,r)}function Zh(t,e,n,r,i){n=n.render;var s=e.ref;return Ur(e,i),r=Yc(t,e,n,r,s,i),n=qc(),t!==null&&!Be?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jt(t,e,i)):(oe&&n&&Mc(e),e.flags|=1,be(t,e,r,i),e.child)}function ef(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fg(t,e,s,r,i)):(t=Ro(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:us,n(o,r)&&t.ref===e.ref)return Jt(t,e,i)}return e.flags|=1,t=Tn(s,r),t.ref=e.ref,t.return=e,e.child=t}function fg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(us(s,r)&&t.ref===e.ref)if(Be=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Be=!0);else return e.lanes=t.lanes,Jt(t,e,i)}return Du(t,e,n,r,i)}function pg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Ar,Qe),Qe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,re(Ar,Qe),Qe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,re(Ar,Qe),Qe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,re(Ar,Qe),Qe|=r;return be(t,e,i,n),e.child}function mg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Du(t,e,n,r,i){var s=Ke(n)?ir:De.current;return s=Yr(e,s),Ur(e,i),n=Yc(t,e,n,r,s,i),r=qc(),t!==null&&!Be?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jt(t,e,i)):(oe&&r&&Mc(e),e.flags|=1,be(t,e,n,i),e.child)}function tf(t,e,n,r,i){if(Ke(n)){var s=!0;Bo(e)}else s=!1;if(Ur(e,i),e.stateNode===null)To(t,e),cg(e,n,r),Au(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=Ke(n)?ir:De.current,u=Yr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&qh(e,o,r,u),un=!1;var h=e.memoizedState;o.state=h,qo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Ge.current||un?(typeof d=="function"&&(Pu(e,n,d,r),a=e.memoizedState),(l=un||Yh(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Hm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:pt(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=ut(a):(a=Ke(n)?ir:De.current,a=Yr(e,a));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&qh(e,o,r,a),un=!1,h=e.memoizedState,o.state=h,qo(e,r,o,i);var _=e.memoizedState;l!==c||h!==_||Ge.current||un?(typeof y=="function"&&(Pu(e,n,y,r),_=e.memoizedState),(u=un||Yh(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return bu(t,e,n,r,s,i)}function bu(t,e,n,r,i,s){mg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zh(e,n,!1),Jt(t,e,s);r=e.stateNode,uw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qr(e,t.child,null,s),e.child=Qr(e,null,l,s)):be(t,e,l,s),e.memoizedState=r.state,i&&zh(e,n,!0),e.child}function gg(t){var e=t.stateNode;e.pendingContext?Uh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Uh(t,e.context,!1),Bc(t,e.containerInfo)}function nf(t,e,n,r,i){return qr(),jc(i),e.flags|=256,be(t,e,n,r),e.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Mu(t){return{baseLanes:t,cachePool:null,transitions:null}}function _g(t,e,n){var r=e.pendingProps,i=ae.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),re(ae,i&1),t===null)return xu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wl(o,r,0,null),t=tr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mu(n),e.memoizedState=Lu,t):Xc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return cw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Tn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Tn(l,s):(s=tr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Mu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lu,r}return s=t.child,t=s.sibling,r=Tn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xc(t,e){return e=Wl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function uo(t,e,n,r){return r!==null&&jc(r),Qr(e,t.child,null,n),t=Xc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Aa(Error(x(422))),uo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Wl({mode:"visible",children:r.children},i,0,null),s=tr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Qr(e,t.child,null,o),e.child.memoizedState=Mu(o),e.memoizedState=Lu,s);if(!(e.mode&1))return uo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(x(419)),r=Aa(s,r,void 0),uo(t,e,o,r)}if(l=(o&t.childLanes)!==0,Be||l){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Qt(t,i),Et(r,t,i,-1))}return id(),r=Aa(Error(x(421))),uo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=kw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Je=Cn(i.nextSibling),Xe=e,oe=!0,gt=null,t!==null&&(it[st++]=zt,it[st++]=Wt,it[st++]=sr,zt=t.id,Wt=t.overflow,sr=e),e=Xc(e,r.children),e.flags|=4096,e)}function rf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ru(t.return,e,n)}function Oa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function yg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(be(t,e,r.children,n),r=ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rf(t,n,e);else if(t.tag===19)rf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(re(ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Qo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Oa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Qo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Oa(e,!0,n,null,s);break;case"together":Oa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function To(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=Tn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dw(t,e,n){switch(e.tag){case 3:gg(e),qr();break;case 5:Bm(e);break;case 1:Ke(e.type)&&Bo(e);break;case 4:Bc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;re(Ko,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(re(ae,ae.current&1),e.flags|=128,null):n&e.child.childLanes?_g(t,e,n):(re(ae,ae.current&1),t=Jt(t,e,n),t!==null?t.sibling:null);re(ae,ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return yg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(ae,ae.current),r)break;return null;case 22:case 23:return e.lanes=0,pg(t,e,n)}return Jt(t,e,n)}var vg,Fu,wg,Eg;vg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fu=function(){};wg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Xn(At.current);var s=null;switch(n){case"input":i=su(t,i),r=su(t,r),s=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),s=[];break;case"textarea":i=au(t,i),r=au(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Vo)}cu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ns.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ns.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ie("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Eg=function(t,e,n,r){n!==r&&(e.flags|=4)};function xi(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hw(t,e,n){var r=e.pendingProps;switch(Fc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(e),null;case 1:return Ke(e.type)&&Ho(),Ae(e),null;case 3:return r=e.stateNode,Jr(),se(Ge),se(De),Gc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(lo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gt!==null&&($u(gt),gt=null))),Fu(t,e),Ae(e),null;case 5:$c(e);var i=Xn(ps.current);if(n=e.type,t!==null&&e.stateNode!=null)wg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return Ae(e),null}if(t=Xn(At.current),lo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Rt]=e,r[hs]=s,t=(e.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<Fi.length;i++)ie(Fi[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":hh(r,s),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ie("invalid",r);break;case"textarea":ph(r,s),ie("invalid",r)}cu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&oo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&oo(r.textContent,l,t),i=["children",""+l]):ns.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ie("scroll",r)}switch(n){case"input":Xs(r),fh(r,s,!0);break;case"textarea":Xs(r),mh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Vo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rt]=e,t[hs]=r,vg(t,e,!1,!1),e.stateNode=t;e:{switch(o=du(n,r),n){case"dialog":ie("cancel",t),ie("close",t),i=r;break;case"iframe":case"object":case"embed":ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<Fi.length;i++)ie(Fi[i],t);i=r;break;case"source":ie("error",t),i=r;break;case"img":case"image":case"link":ie("error",t),ie("load",t),i=r;break;case"details":ie("toggle",t),i=r;break;case"input":hh(t,r),i=su(t,r),ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),ie("invalid",t);break;case"textarea":ph(t,r),i=au(t,r),ie("invalid",t);break;default:i=r}cu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Xp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Qp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&rs(t,a):typeof a=="number"&&rs(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ns.hasOwnProperty(s)?a!=null&&s==="onScroll"&&ie("scroll",t):a!=null&&Cc(t,s,a,o))}switch(n){case"input":Xs(t),fh(t,r,!1);break;case"textarea":Xs(t),mh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+On(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Lr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Lr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Vo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ae(e),null;case 6:if(t&&e.stateNode!=null)Eg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Xn(ps.current),Xn(At.current),lo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rt]=e,(s=r.nodeValue!==n)&&(t=Xe,t!==null))switch(t.tag){case 3:oo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=e,e.stateNode=r}return Ae(e),null;case 13:if(se(ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&Je!==null&&e.mode&1&&!(e.flags&128))Um(),qr(),e.flags|=98560,s=!1;else if(s=lo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[Rt]=e}else qr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ae(e),s=!1}else gt!==null&&($u(gt),gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ae.current&1?we===0&&(we=3):id())),e.updateQueue!==null&&(e.flags|=4),Ae(e),null);case 4:return Jr(),Fu(t,e),t===null&&cs(e.stateNode.containerInfo),Ae(e),null;case 10:return Wc(e.type._context),Ae(e),null;case 17:return Ke(e.type)&&Ho(),Ae(e),null;case 19:if(se(ae),s=e.memoizedState,s===null)return Ae(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)xi(s,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Qo(t),o!==null){for(e.flags|=128,xi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return re(ae,ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&pe()>Zr&&(e.flags|=128,r=!0,xi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Qo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!oe)return Ae(e),null}else 2*pe()-s.renderingStartTime>Zr&&n!==1073741824&&(e.flags|=128,r=!0,xi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pe(),e.sibling=null,n=ae.current,re(ae,r?n&1|2:n&1),e):(Ae(e),null);case 22:case 23:return rd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Qe&1073741824&&(Ae(e),e.subtreeFlags&6&&(e.flags|=8192)):Ae(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function fw(t,e){switch(Fc(e),e.tag){case 1:return Ke(e.type)&&Ho(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Jr(),se(Ge),se(De),Gc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $c(e),null;case 13:if(se(ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));qr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return se(ae),null;case 4:return Jr(),null;case 10:return Wc(e.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var co=!1,Oe=!1,pw=typeof WeakSet=="function"?WeakSet:Set,M=null;function Pr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(t,e,r)}else n.current=null}function ju(t,e,n){try{n()}catch(r){de(t,e,r)}}var sf=!1;function mw(t,e){if(Eu=Uo,t=Tm(),Lc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var y;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(y=c.firstChild)!==null;)h=c,c=y;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(y=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=y}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cu={focusedElem:t,selectionRange:n},Uo=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,C=_.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:pt(e.type,w),C);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(E){de(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return _=sf,sf=!1,_}function Gi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ju(e,n,s)}i=i.next}while(i!==r)}}function Ul(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Uu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cg(t){var e=t.alternate;e!==null&&(t.alternate=null,Cg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rt],delete e[hs],delete e[Iu],delete e[J0],delete e[X0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kg(t){return t.tag===5||t.tag===3||t.tag===4}function of(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vo));else if(r!==4&&(t=t.child,t!==null))for(zu(t,e,n),t=t.sibling;t!==null;)zu(t,e,n),t=t.sibling}function Wu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wu(t,e,n),t=t.sibling;t!==null;)Wu(t,e,n),t=t.sibling}var Ie=null,mt=!1;function sn(t,e,n){for(n=n.child;n!==null;)Sg(t,e,n),n=n.sibling}function Sg(t,e,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Al,n)}catch{}switch(n.tag){case 5:Oe||Pr(n,e);case 6:var r=Ie,i=mt;Ie=null,sn(t,e,n),Ie=r,mt=i,Ie!==null&&(mt?(t=Ie,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(mt?(t=Ie,n=n.stateNode,t.nodeType===8?Ia(t.parentNode,n):t.nodeType===1&&Ia(t,n),ls(t)):Ia(Ie,n.stateNode));break;case 4:r=Ie,i=mt,Ie=n.stateNode.containerInfo,mt=!0,sn(t,e,n),Ie=r,mt=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ju(n,e,o),i=i.next}while(i!==r)}sn(t,e,n);break;case 1:if(!Oe&&(Pr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){de(n,e,l)}sn(t,e,n);break;case 21:sn(t,e,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,sn(t,e,n),Oe=r):sn(t,e,n);break;default:sn(t,e,n)}}function lf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new pw),e.forEach(function(r){var i=Sw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ie=l.stateNode,mt=!1;break e;case 3:Ie=l.stateNode.containerInfo,mt=!0;break e;case 4:Ie=l.stateNode.containerInfo,mt=!0;break e}l=l.return}if(Ie===null)throw Error(x(160));Sg(s,o,i),Ie=null,mt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){de(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ig(e,t),e=e.sibling}function Ig(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ft(e,t),Nt(t),r&4){try{Gi(3,t,t.return),Ul(3,t)}catch(w){de(t,t.return,w)}try{Gi(5,t,t.return)}catch(w){de(t,t.return,w)}}break;case 1:ft(e,t),Nt(t),r&512&&n!==null&&Pr(n,n.return);break;case 5:if(ft(e,t),Nt(t),r&512&&n!==null&&Pr(n,n.return),t.flags&32){var i=t.stateNode;try{rs(i,"")}catch(w){de(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Kp(i,s),du(l,o);var u=du(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Xp(i,c):d==="dangerouslySetInnerHTML"?Qp(i,c):d==="children"?rs(i,c):Cc(i,d,c,u)}switch(l){case"input":ou(i,s);break;case"textarea":Yp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Lr(i,!!s.multiple,y,!1):h!==!!s.multiple&&(s.defaultValue!=null?Lr(i,!!s.multiple,s.defaultValue,!0):Lr(i,!!s.multiple,s.multiple?[]:"",!1))}i[hs]=s}catch(w){de(t,t.return,w)}}break;case 6:if(ft(e,t),Nt(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){de(t,t.return,w)}}break;case 3:if(ft(e,t),Nt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ls(e.containerInfo)}catch(w){de(t,t.return,w)}break;case 4:ft(e,t),Nt(t);break;case 13:ft(e,t),Nt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(td=pe())),r&4&&lf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Oe=(u=Oe)||d,ft(e,t),Oe=u):ft(e,t),Nt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(M=t,d=t.child;d!==null;){for(c=M=d;M!==null;){switch(h=M,y=h.child,h.tag){case 0:case 11:case 14:case 15:Gi(4,h,h.return);break;case 1:Pr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(w){de(r,n,w)}}break;case 5:Pr(h,h.return);break;case 22:if(h.memoizedState!==null){uf(c);continue}}y!==null?(y.return=h,M=y):uf(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Jp("display",o))}catch(w){de(t,t.return,w)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){de(t,t.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:ft(e,t),Nt(t),r&4&&lf(t);break;case 21:break;default:ft(e,t),Nt(t)}}function Nt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kg(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(rs(i,""),r.flags&=-33);var s=of(t);Wu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=of(t);zu(t,l,o);break;default:throw Error(x(161))}}catch(a){de(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gw(t,e,n){M=t,Tg(t)}function Tg(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||co;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Oe;l=co;var u=Oe;if(co=o,(Oe=a)&&!u)for(M=i;M!==null;)o=M,a=o.child,o.tag===22&&o.memoizedState!==null?cf(i):a!==null?(a.return=o,M=a):cf(i);for(;s!==null;)M=s,Tg(s),s=s.sibling;M=i,co=l,Oe=u}af(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):af(t)}}function af(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Oe||Ul(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$h(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$h(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&ls(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Oe||e.flags&512&&Uu(e)}catch(h){de(e,e.return,h)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function uf(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function cf(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ul(4,e)}catch(a){de(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){de(e,i,a)}}var s=e.return;try{Uu(e)}catch(a){de(e,s,a)}break;case 5:var o=e.return;try{Uu(e)}catch(a){de(e,o,a)}}}catch(a){de(e,e.return,a)}if(e===t){M=null;break}var l=e.sibling;if(l!==null){l.return=e.return,M=l;break}M=e.return}}var _w=Math.ceil,Zo=nn.ReactCurrentDispatcher,Zc=nn.ReactCurrentOwner,at=nn.ReactCurrentBatchConfig,q=0,Se=null,me=null,Ne=0,Qe=0,Ar=jn(0),we=0,ys=null,lr=0,zl=0,ed=0,Ki=null,He=null,td=0,Zr=1/0,jt=null,el=!1,Vu=null,Sn=null,ho=!1,_n=null,tl=0,Yi=0,Hu=null,No=-1,xo=0;function Me(){return q&6?pe():No!==-1?No:No=pe()}function In(t){return t.mode&1?q&2&&Ne!==0?Ne&-Ne:ew.transition!==null?(xo===0&&(xo=cm()),xo):(t=X,t!==0||(t=window.event,t=t===void 0?16:_m(t.type)),t):1}function Et(t,e,n,r){if(50<Yi)throw Yi=0,Hu=null,Error(x(185));Ds(t,n,r),(!(q&2)||t!==Se)&&(t===Se&&(!(q&2)&&(zl|=n),we===4&&dn(t,Ne)),Ye(t,r),n===1&&q===0&&!(e.mode&1)&&(Zr=pe()+500,Ml&&Un()))}function Ye(t,e){var n=t.callbackNode;e0(t,e);var r=jo(t,t===Se?Ne:0);if(r===0)n!==null&&yh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&yh(n),e===1)t.tag===0?Z0(df.bind(null,t)):Mm(df.bind(null,t)),q0(function(){!(q&6)&&Un()}),n=null;else{switch(dm(r)){case 1:n=Nc;break;case 4:n=am;break;case 16:n=Fo;break;case 536870912:n=um;break;default:n=Fo}n=bg(n,Ng.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ng(t,e){if(No=-1,xo=0,q&6)throw Error(x(327));var n=t.callbackNode;if(zr()&&t.callbackNode!==n)return null;var r=jo(t,t===Se?Ne:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nl(t,r);else{e=r;var i=q;q|=2;var s=Rg();(Se!==t||Ne!==e)&&(jt=null,Zr=pe()+500,er(t,e));do try{ww();break}catch(l){xg(t,l)}while(1);zc(),Zo.current=s,q=i,me!==null?e=0:(Se=null,Ne=0,e=we)}if(e!==0){if(e===2&&(i=gu(t),i!==0&&(r=i,e=Bu(t,i))),e===1)throw n=ys,er(t,0),dn(t,r),Ye(t,pe()),n;if(e===6)dn(t,r);else{if(i=t.current.alternate,!(r&30)&&!yw(i)&&(e=nl(t,r),e===2&&(s=gu(t),s!==0&&(r=s,e=Bu(t,s))),e===1))throw n=ys,er(t,0),dn(t,r),Ye(t,pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:Kn(t,He,jt);break;case 3:if(dn(t,r),(r&130023424)===r&&(e=td+500-pe(),10<e)){if(jo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Me(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Su(Kn.bind(null,t,He,jt),e);break}Kn(t,He,jt);break;case 4:if(dn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_w(r/1960))-r,10<r){t.timeoutHandle=Su(Kn.bind(null,t,He,jt),r);break}Kn(t,He,jt);break;case 5:Kn(t,He,jt);break;default:throw Error(x(329))}}}return Ye(t,pe()),t.callbackNode===n?Ng.bind(null,t):null}function Bu(t,e){var n=Ki;return t.current.memoizedState.isDehydrated&&(er(t,e).flags|=256),t=nl(t,e),t!==2&&(e=He,He=n,e!==null&&$u(e)),t}function $u(t){He===null?He=t:He.push.apply(He,t)}function yw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dn(t,e){for(e&=~ed,e&=~zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wt(e),r=1<<n;t[n]=-1,e&=~r}}function df(t){if(q&6)throw Error(x(327));zr();var e=jo(t,0);if(!(e&1))return Ye(t,pe()),null;var n=nl(t,e);if(t.tag!==0&&n===2){var r=gu(t);r!==0&&(e=r,n=Bu(t,r))}if(n===1)throw n=ys,er(t,0),dn(t,e),Ye(t,pe()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kn(t,He,jt),Ye(t,pe()),null}function nd(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(Zr=pe()+500,Ml&&Un())}}function ar(t){_n!==null&&_n.tag===0&&!(q&6)&&zr();var e=q;q|=1;var n=at.transition,r=X;try{if(at.transition=null,X=1,t)return t()}finally{X=r,at.transition=n,q=e,!(q&6)&&Un()}}function rd(){Qe=Ar.current,se(Ar)}function er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Y0(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Fc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ho();break;case 3:Jr(),se(Ge),se(De),Gc();break;case 5:$c(r);break;case 4:Jr();break;case 13:se(ae);break;case 19:se(ae);break;case 10:Wc(r.type._context);break;case 22:case 23:rd()}n=n.return}if(Se=t,me=t=Tn(t.current,null),Ne=Qe=e,we=0,ys=null,ed=zl=lr=0,He=Ki=null,Jn!==null){for(e=0;e<Jn.length;e++)if(n=Jn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Jn=null}return t}function xg(t,e){do{var n=me;try{if(zc(),So.current=Xo,Jo){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Jo=!1}if(or=0,Ce=_e=ue=null,$i=!1,ms=0,Zc.current=null,n===null||n.return===null){we=1,ys=e,me=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ne,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Jh(o);if(y!==null){y.flags&=-257,Xh(y,o,l,s,e),y.mode&1&&Qh(s,u,e),e=y,a=u;var _=e.updateQueue;if(_===null){var w=new Set;w.add(a),e.updateQueue=w}else _.add(a);break e}else{if(!(e&1)){Qh(s,u,e),id();break e}a=Error(x(426))}}else if(oe&&l.mode&1){var C=Jh(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Xh(C,o,l,s,e),jc(Xr(a,l));break e}}s=a=Xr(a,l),we!==4&&(we=2),Ki===null?Ki=[s]:Ki.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=dg(s,a,e);Bh(s,g);break e;case 1:l=a;var m=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Sn===null||!Sn.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=hg(s,l,e);Bh(s,E);break e}}s=s.return}while(s!==null)}Ag(n)}catch(A){e=A,me===n&&n!==null&&(me=n=n.return);continue}break}while(1)}function Rg(){var t=Zo.current;return Zo.current=Xo,t===null?Xo:t}function id(){(we===0||we===3||we===2)&&(we=4),Se===null||!(lr&268435455)&&!(zl&268435455)||dn(Se,Ne)}function nl(t,e){var n=q;q|=2;var r=Rg();(Se!==t||Ne!==e)&&(jt=null,er(t,e));do try{vw();break}catch(i){xg(t,i)}while(1);if(zc(),q=n,Zo.current=r,me!==null)throw Error(x(261));return Se=null,Ne=0,we}function vw(){for(;me!==null;)Pg(me)}function ww(){for(;me!==null&&!$v();)Pg(me)}function Pg(t){var e=Dg(t.alternate,t,Qe);t.memoizedProps=t.pendingProps,e===null?Ag(t):me=e,Zc.current=null}function Ag(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fw(n,e),n!==null){n.flags&=32767,me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,me=null;return}}else if(n=hw(n,e,Qe),n!==null){me=n;return}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);we===0&&(we=5)}function Kn(t,e,n){var r=X,i=at.transition;try{at.transition=null,X=1,Ew(t,e,n,r)}finally{at.transition=i,X=r}return null}function Ew(t,e,n,r){do zr();while(_n!==null);if(q&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(t0(t,s),t===Se&&(me=Se=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ho||(ho=!0,bg(Fo,function(){return zr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=at.transition,at.transition=null;var o=X;X=1;var l=q;q|=4,Zc.current=null,mw(t,n),Ig(n,t),W0(Cu),Uo=!!Eu,Cu=Eu=null,t.current=n,gw(n),Gv(),q=l,X=o,at.transition=s}else t.current=n;if(ho&&(ho=!1,_n=t,tl=i),s=t.pendingLanes,s===0&&(Sn=null),qv(n.stateNode),Ye(t,pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(el)throw el=!1,t=Vu,Vu=null,t;return tl&1&&t.tag!==0&&zr(),s=t.pendingLanes,s&1?t===Hu?Yi++:(Yi=0,Hu=t):Yi=0,Un(),null}function zr(){if(_n!==null){var t=dm(tl),e=at.transition,n=X;try{if(at.transition=null,X=16>t?16:t,_n===null)var r=!1;else{if(t=_n,_n=null,tl=0,q&6)throw Error(x(331));var i=q;for(q|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(M=u;M!==null;){var d=M;switch(d.tag){case 0:case 11:case 15:Gi(8,d,s)}var c=d.child;if(c!==null)c.return=d,M=c;else for(;M!==null;){d=M;var h=d.sibling,y=d.return;if(Cg(d),d===u){M=null;break}if(h!==null){h.return=y,M=h;break}M=y}}}var _=s.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Gi(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,M=g;break e}M=s.return}}var m=t.current;for(M=m;M!==null;){o=M;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,M=p;else e:for(o=m;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ul(9,l)}}catch(A){de(l,l.return,A)}if(l===o){M=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,M=E;break e}M=l.return}}if(q=i,Un(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Al,t)}catch{}r=!0}return r}finally{X=n,at.transition=e}}return!1}function hf(t,e,n){e=Xr(n,e),e=dg(t,e,1),t=kn(t,e,1),e=Me(),t!==null&&(Ds(t,1,e),Ye(t,e))}function de(t,e,n){if(t.tag===3)hf(t,t,n);else for(;e!==null;){if(e.tag===3){hf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){t=Xr(n,t),t=hg(e,t,1),e=kn(e,t,1),t=Me(),e!==null&&(Ds(e,1,t),Ye(e,t));break}}e=e.return}}function Cw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Me(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(Ne&n)===n&&(we===4||we===3&&(Ne&130023424)===Ne&&500>pe()-td?er(t,0):ed|=n),Ye(t,e)}function Og(t,e){e===0&&(t.mode&1?(e=to,to<<=1,!(to&130023424)&&(to=4194304)):e=1);var n=Me();t=Qt(t,e),t!==null&&(Ds(t,e,n),Ye(t,n))}function kw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Og(t,n)}function Sw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),Og(t,n)}var Dg;Dg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ge.current)Be=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Be=!1,dw(t,e,n);Be=!!(t.flags&131072)}else Be=!1,oe&&e.flags&1048576&&Fm(e,Go,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;To(t,e),t=e.pendingProps;var i=Yr(e,De.current);Ur(e,n),i=Yc(null,e,r,t,i,n);var s=qc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ke(r)?(s=!0,Bo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hc(e),i.updater=jl,e.stateNode=i,i._reactInternals=e,Au(e,r,t,n),e=bu(null,e,r,!0,s,n)):(e.tag=0,oe&&s&&Mc(e),be(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(To(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Tw(r),t=pt(r,t),i){case 0:e=Du(null,e,r,t,n);break e;case 1:e=tf(null,e,r,t,n);break e;case 11:e=Zh(null,e,r,t,n);break e;case 14:e=ef(null,e,r,pt(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Du(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),tf(t,e,r,i,n);case 3:e:{if(gg(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Hm(t,e),qo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Xr(Error(x(423)),e),e=nf(t,e,r,n,i);break e}else if(r!==i){i=Xr(Error(x(424)),e),e=nf(t,e,r,n,i);break e}else for(Je=Cn(e.stateNode.containerInfo.firstChild),Xe=e,oe=!0,gt=null,n=Wm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qr(),r===i){e=Jt(t,e,n);break e}be(t,e,r,n)}e=e.child}return e;case 5:return Bm(e),t===null&&xu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ku(r,i)?o=null:s!==null&&ku(r,s)&&(e.flags|=32),mg(t,e),be(t,e,o,n),e.child;case 6:return t===null&&xu(e),null;case 13:return _g(t,e,n);case 4:return Bc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qr(e,null,r,n):be(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Zh(t,e,r,i,n);case 7:return be(t,e,e.pendingProps,n),e.child;case 8:return be(t,e,e.pendingProps.children,n),e.child;case 12:return be(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,re(Ko,r._currentValue),r._currentValue=o,s!==null)if(kt(s.value,o)){if(s.children===i.children&&!Ge.current){e=Jt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Gt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ru(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ru(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}be(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ur(e,n),i=ut(i),r=r(i),e.flags|=1,be(t,e,r,n),e.child;case 14:return r=e.type,i=pt(r,e.pendingProps),i=pt(r.type,i),ef(t,e,r,i,n);case 15:return fg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),To(t,e),e.tag=1,Ke(r)?(t=!0,Bo(e)):t=!1,Ur(e,n),cg(e,r,i),Au(e,r,i,n),bu(null,e,r,!0,t,n);case 19:return yg(t,e,n);case 22:return pg(t,e,n)}throw Error(x(156,e.tag))};function bg(t,e){return lm(t,e)}function Iw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(t,e,n,r){return new Iw(t,e,n,r)}function sd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Tw(t){if(typeof t=="function")return sd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sc)return 11;if(t===Ic)return 14}return 2}function Tn(t,e){var n=t.alternate;return n===null?(n=ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ro(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Er:return tr(n.children,i,s,e);case kc:o=8,i|=8;break;case tu:return t=ot(12,n,e,i|2),t.elementType=tu,t.lanes=s,t;case nu:return t=ot(13,n,e,i),t.elementType=nu,t.lanes=s,t;case ru:return t=ot(19,n,e,i),t.elementType=ru,t.lanes=s,t;case Bp:return Wl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vp:o=10;break e;case Hp:o=9;break e;case Sc:o=11;break e;case Ic:o=14;break e;case an:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=ot(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function tr(t,e,n,r){return t=ot(7,t,r,e),t.lanes=n,t}function Wl(t,e,n,r){return t=ot(22,t,r,e),t.elementType=Bp,t.lanes=n,t.stateNode={isHidden:!1},t}function Da(t,e,n){return t=ot(6,t,null,e),t.lanes=n,t}function ba(t,e,n){return e=ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Nw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pa(0),this.expirationTimes=pa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function od(t,e,n,r,i,s,o,l,a){return t=new Nw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hc(s),t}function xw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Lg(t){if(!t)return Dn;t=t._reactInternals;e:{if(mr(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ke(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Ke(n))return Lm(t,n,e)}return e}function Mg(t,e,n,r,i,s,o,l,a){return t=od(n,r,!0,t,i,s,o,l,a),t.context=Lg(null),n=t.current,r=Me(),i=In(n),s=Gt(r,i),s.callback=e??null,kn(n,s,i),t.current.lanes=i,Ds(t,i,r),Ye(t,r),t}function Vl(t,e,n,r){var i=e.current,s=Me(),o=In(i);return n=Lg(n),e.context===null?e.context=n:e.pendingContext=n,e=Gt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kn(i,e,o),t!==null&&(Et(t,i,o,s),ko(t,i,o)),o}function rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ff(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ld(t,e){ff(t,e),(t=t.alternate)&&ff(t,e)}function Rw(){return null}var Fg=typeof reportError=="function"?reportError:function(t){console.error(t)};function ad(t){this._internalRoot=t}Hl.prototype.render=ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Vl(t,e,null,null)};Hl.prototype.unmount=ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ar(function(){Vl(null,t,null,null)}),e[qt]=null}};function Hl(t){this._internalRoot=t}Hl.prototype.unstable_scheduleHydration=function(t){if(t){var e=pm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cn.length&&e!==0&&e<cn[n].priority;n++);cn.splice(n,0,t),n===0&&gm(t)}};function ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pf(){}function Pw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=rl(o);s.call(u)}}var o=Mg(e,r,t,0,null,!1,!1,"",pf);return t._reactRootContainer=o,t[qt]=o.current,cs(t.nodeType===8?t.parentNode:t),ar(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=rl(a);l.call(u)}}var a=od(t,0,!1,null,null,!1,!1,"",pf);return t._reactRootContainer=a,t[qt]=a.current,cs(t.nodeType===8?t.parentNode:t),ar(function(){Vl(e,a,n,r)}),a}function $l(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=rl(o);l.call(a)}}Vl(e,o,t,i)}else o=Pw(n,e,t,i,r);return rl(o)}hm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mi(e.pendingLanes);n!==0&&(xc(e,n|1),Ye(e,pe()),!(q&6)&&(Zr=pe()+500,Un()))}break;case 13:ar(function(){var r=Qt(t,1);if(r!==null){var i=Me();Et(r,t,1,i)}}),ld(t,1)}};Rc=function(t){if(t.tag===13){var e=Qt(t,134217728);if(e!==null){var n=Me();Et(e,t,134217728,n)}ld(t,134217728)}};fm=function(t){if(t.tag===13){var e=In(t),n=Qt(t,e);if(n!==null){var r=Me();Et(n,t,e,r)}ld(t,e)}};pm=function(){return X};mm=function(t,e){var n=X;try{return X=t,e()}finally{X=n}};fu=function(t,e,n){switch(e){case"input":if(ou(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ll(r);if(!i)throw Error(x(90));Gp(r),ou(r,i)}}}break;case"textarea":Yp(t,n);break;case"select":e=n.value,e!=null&&Lr(t,!!n.multiple,e,!1)}};tm=nd;nm=ar;var Aw={usingClientEntryPoint:!1,Events:[Ls,Ir,Ll,Zp,em,nd]},Ri={findFiberByHostInstance:Qn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ow={bundleType:Ri.bundleType,version:Ri.version,rendererPackageName:Ri.rendererPackageName,rendererConfig:Ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ri.findFiberByHostInstance||Rw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{Al=fo.inject(Ow),Pt=fo}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Aw;et.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ud(e))throw Error(x(200));return xw(t,e,null,n)};et.createRoot=function(t,e){if(!ud(t))throw Error(x(299));var n=!1,r="",i=Fg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=od(t,1,!1,null,null,n,!1,r,i),t[qt]=e.current,cs(t.nodeType===8?t.parentNode:t),new ad(e)};et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=sm(e),t=t===null?null:t.stateNode,t};et.flushSync=function(t){return ar(t)};et.hydrate=function(t,e,n){if(!Bl(e))throw Error(x(200));return $l(null,t,e,!0,n)};et.hydrateRoot=function(t,e,n){if(!ud(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Fg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Mg(e,null,t,1,n??null,i,!1,s,o),t[qt]=e.current,cs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Hl(e)};et.render=function(t,e,n){if(!Bl(e))throw Error(x(200));return $l(null,t,e,!1,n)};et.unmountComponentAtNode=function(t){if(!Bl(t))throw Error(x(40));return t._reactRootContainer?(ar(function(){$l(null,null,t,!1,function(){t._reactRootContainer=null,t[qt]=null})}),!0):!1};et.unstable_batchedUpdates=nd;et.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Bl(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return $l(t,e,n,!1,r)};et.version="18.3.1-next-f1338f8080-20240426";function jg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jg)}catch(t){console.error(t)}}jg(),jp.exports=et;var Dw=jp.exports,mf=Dw;Za.createRoot=mf.createRoot,Za.hydrateRoot=mf.hydrateRoot;const cd=[{歌唱:"蓮ノ空女学院スクールアイドルクラブ",センター:"藤島 慈",作中時期:"102期",曲名:"On your mark(102期Ver.)",コスト:"9",効果1:`【ユニーク】
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
このターン中、センターが「村野さやか」のカードを使用したとき、相手に1ダメージ`,"効果2 タイプ":"【ユニゾン】",パワー:"",シールド:"",ヒール:"",ダメージ:"2"}],Ug=cd;function bw(t){return Ug.filter(e=>{const n=e.歌唱;return n==="蓮ノ空女学院スクールアイドルクラブ"||n==="スリーズブーケ＆DOLLCHESTRA＆みらくらぱーく！"||n==="るりのとゆかいなつづりたち"||n==="かほめぐ♡じぇらーと"||n==="蓮ノ休日"||n===t||e.曲名==="Runway"&&t==="DOLLCHESTRA"?!0:e.曲名==="Runway"&&t!=="DOLLCHESTRA"?!1:n==="村野 さやか"&&e.曲名!=="Runway"})}function qi(t){const e=[];for(const n of t){const r=Ug.find(i=>i.曲名===n);r&&e.push({...r,id:Math.random().toString(36).substring(2,11)})}return e.sort(()=>Math.random()-.5)}const zg={スリーズブーケ:["On your mark","On your mark","On your mark","Dream Believers","Dream Believers","STEP UP!","STEP UP!","STEP UP!","Reflection in the mirror","Reflection in the mirror","Reflection in the mirror","フォーチュンムービー","フォーチュンムービー","フォーチュンムービー","Special Thanks","Special Thanks","Special Thanks","シュガーメルト","シュガーメルト","シュガーメルト","千変万華","千変万華","残陽","残陽","水彩世界","水彩世界","Holiday∞Holiday","Holiday∞Holiday","Dear my future","Dear my future"],DOLLCHESTRA:["On your mark","On your mark","On your mark","STEP UP!","STEP UP!","STEP UP!","Dream Believers","Dream Believers","AWOKE","AWOKE","AWOKE","Sparkly Spot","Sparkly Spot","Sparkly Spot","ジブンダイアリー","ジブンダイアリー","ジブンダイアリー","飴色","飴色","飴色","Mirage Voyage","Mirage Voyage","スケイプゴート","スケイプゴート","Take It Over","Take It Over","青とシャボン","青とシャボン","希望的プリズム","希望的プリズム"],"みらくらぱーく！":["On your mark","On your mark","On your mark","STEP UP!","STEP UP!","STEP UP!","Dream Believers","Dream Believers","ド！ド！ド！","ド！ド！ド！","ド！ド！ド！","ココン東西","ココン東西","ハクチューアラモード","ハクチューアラモード","ハクチューアラモード","アイデンティティ","アイデンティティ","アイデンティティ","天才なのかもしれない","天才なのかもしれない","天才なのかもしれない","ノンフィクションヒーローショー","ノンフィクションヒーローショー","マハラジャンボリー","マハラジャンボリー","マハラジャンボリー","以心☆電信","以心☆電信","以心☆電信"]};function il(){const t=["スリーズブーケ","DOLLCHESTRA","みらくらぱーく！"],e=t[Math.floor(Math.random()*t.length)],n=zg[e];return{deck:qi(n),unit:e}}function sl(t,e){return{name:"",baseUnit:t,originalDeckNames:e.map(n=>n.曲名),hp:30,maxHp:30,shield:0,maxVoltage:0,currentVoltage:0,specialUsed:!1,deck:e.slice(3),hand:e.slice(0,3),discard:[],buffs:{damageImmune:!1,nextCardCostDown:0,turnCardsPlayed:[],tookDamageCount:0}}}function Wg(t,e){const n=t||il(),r=e||il();return{turn:1,isPlayerTurn:!0,isCoinFlipPhase:!0,turnBanner:"COIN FLIP...",setlist:[],enemyPlayedCard:null,isAnimating:!1,battleResult:null,player:sl(n.unit,n.deck),enemy:sl(r.unit,r.deck),animations:{playerShake:!1,enemyShake:!1}}}function Lw(t,e){return{turn:1,isPlayerTurn:!0,isCoinFlipPhase:!0,turnBanner:"COIN FLIP...",setlist:[],enemyPlayedCard:null,isAnimating:!1,battleResult:null,player:sl(t.unit,t.deck),enemy:sl(e.unit,e.deck),animations:{playerShake:!1,enemyShake:!1}}}/**
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
 */const Vg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const O=function(t,e){if(!t)throw fi(e)},fi=function(t){return new Error("Firebase Database ("+Vg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Hg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Mw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},dd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,y=u&63;a||(y=64,o||(h=64)),r.push(n[d],n[c],n[h],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Mw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new Fw;const h=s<<2|l>>4;if(r.push(h),u!==64){const y=l<<4&240|u>>2;if(r.push(y),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Fw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bg=function(t){const e=Hg(t);return dd.encodeByteArray(e,!0)},ol=function(t){return Bg(t).replace(/\./g,"")},ll=function(t){try{return dd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jw(t){return $g(void 0,t)}function $g(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Uw(n)||(t[n]=$g(t[n],e[n]));return t}function Uw(t){return t!=="__proto__"}/**
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
 */function zw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ww=()=>zw().__FIREBASE_DEFAULTS__,Vw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Hw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ll(t[1]);return e&&JSON.parse(e)},hd=()=>{try{return Ww()||Vw()||Hw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gg=t=>{var e,n;return(n=(e=hd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Bw=t=>{const e=Gg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kg=()=>{var t;return(t=hd())===null||t===void 0?void 0:t.config},Yg=t=>{var e;return(e=hd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Fs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function $w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[ol(JSON.stringify(n)),ol(JSON.stringify(o)),l].join(".")}/**
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
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function Gw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Kw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yw(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Qg(){return Vg.NODE_ADMIN===!0}function qw(){try{return typeof indexedDB=="object"}catch{return!1}}function Qw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Jw="FirebaseError";class zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Jw,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,js.prototype.create)}}class js{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Xw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new zn(i,l,r)}}function Xw(t,e){return t.replace(Zw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Zw=/\{\$([^}]+)}/g;/**
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
 */function vs(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
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
 */const Jg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=vs(ll(s[0])||""),n=vs(ll(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},e1=function(t){const e=Jg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},t1=function(t){const e=Jg(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Lt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ei(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Gu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function al(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ul(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(gf(s)&&gf(o)){if(!ul(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gf(t){return t!==null&&typeof t=="object"}/**
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
 */function pi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ji(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ui(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class n1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function r1(t,e){const n=new i1(t,e);return n.subscribe.bind(n)}class i1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");s1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=La),i.error===void 0&&(i.error=La),i.complete===void 0&&(i.complete=La);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function s1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function La(){}function Gl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const o1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,O(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Kl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yn="[DEFAULT]";/**
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
 */class l1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Fs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(u1(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:a1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function a1(t){return t===Yn?void 0:t}function u1(t){return t.instantiationMode==="EAGER"}/**
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
 */class c1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new l1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const d1={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},h1=Z.INFO,f1={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},p1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=f1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pd{constructor(e){this.name=e,this._logLevel=h1,this._logHandler=p1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?d1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const m1=(t,e)=>e.some(n=>t instanceof n);let _f,yf;function g1(){return _f||(_f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _1(){return yf||(yf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xg=new WeakMap,Ku=new WeakMap,Zg=new WeakMap,Ma=new WeakMap,md=new WeakMap;function y1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Nn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xg.set(n,t)}).catch(()=>{}),md.set(e,t),e}function v1(t){if(Ku.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ku.set(t,e)}let Yu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ku.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function w1(t){Yu=t(Yu)}function E1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fa(this),e,...n);return Zg.set(r,e.sort?e.sort():[e]),Nn(r)}:_1().includes(t)?function(...e){return t.apply(Fa(this),e),Nn(Xg.get(this))}:function(...e){return Nn(t.apply(Fa(this),e))}}function C1(t){return typeof t=="function"?E1(t):(t instanceof IDBTransaction&&v1(t),m1(t,g1())?new Proxy(t,Yu):t)}function Nn(t){if(t instanceof IDBRequest)return y1(t);if(Ma.has(t))return Ma.get(t);const e=C1(t);return e!==t&&(Ma.set(t,e),md.set(e,t)),e}const Fa=t=>md.get(t);function k1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Nn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Nn(o.result),a.oldVersion,a.newVersion,Nn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const S1=["get","getKey","getAll","getAllKeys","count"],I1=["put","add","delete","clear"],ja=new Map;function vf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ja.get(e))return ja.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=I1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||S1.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ja.set(e,s),s}w1(t=>({...t,get:(e,n,r)=>vf(e,n)||t.get(e,n,r),has:(e,n)=>!!vf(e,n)||t.has(e,n)}));/**
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
 */class T1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(N1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function N1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qu="@firebase/app",wf="0.10.13";/**
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
 */const Xt=new pd("@firebase/app"),x1="@firebase/app-compat",R1="@firebase/analytics-compat",P1="@firebase/analytics",A1="@firebase/app-check-compat",O1="@firebase/app-check",D1="@firebase/auth",b1="@firebase/auth-compat",L1="@firebase/database",M1="@firebase/data-connect",F1="@firebase/database-compat",j1="@firebase/functions",U1="@firebase/functions-compat",z1="@firebase/installations",W1="@firebase/installations-compat",V1="@firebase/messaging",H1="@firebase/messaging-compat",B1="@firebase/performance",$1="@firebase/performance-compat",G1="@firebase/remote-config",K1="@firebase/remote-config-compat",Y1="@firebase/storage",q1="@firebase/storage-compat",Q1="@firebase/firestore",J1="@firebase/vertexai-preview",X1="@firebase/firestore-compat",Z1="firebase",eE="10.14.1";/**
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
 */const Qu="[DEFAULT]",tE={[qu]:"fire-core",[x1]:"fire-core-compat",[P1]:"fire-analytics",[R1]:"fire-analytics-compat",[O1]:"fire-app-check",[A1]:"fire-app-check-compat",[D1]:"fire-auth",[b1]:"fire-auth-compat",[L1]:"fire-rtdb",[M1]:"fire-data-connect",[F1]:"fire-rtdb-compat",[j1]:"fire-fn",[U1]:"fire-fn-compat",[z1]:"fire-iid",[W1]:"fire-iid-compat",[V1]:"fire-fcm",[H1]:"fire-fcm-compat",[B1]:"fire-perf",[$1]:"fire-perf-compat",[G1]:"fire-rc",[K1]:"fire-rc-compat",[Y1]:"fire-gcs",[q1]:"fire-gcs-compat",[Q1]:"fire-fst",[X1]:"fire-fst-compat",[J1]:"fire-vertex","fire-js":"fire-js",[Z1]:"fire-js-all"};/**
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
 */const cl=new Map,nE=new Map,Ju=new Map;function Ef(t,e){try{t.container.addComponent(e)}catch(n){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ti(t){const e=t.name;if(Ju.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;Ju.set(e,t);for(const n of cl.values())Ef(n,t);for(const n of nE.values())Ef(n,t);return!0}function gd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yt(t){return t.settings!==void 0}/**
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
 */const rE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xn=new js("app","Firebase",rE);/**
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
 */class iE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xn.create("app-deleted",{appName:this._name})}}/**
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
 */const mi=eE;function e_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw xn.create("bad-app-name",{appName:String(i)});if(n||(n=Kg()),!n)throw xn.create("no-options");const s=cl.get(i);if(s){if(ul(n,s.options)&&ul(r,s.config))return s;throw xn.create("duplicate-app",{appName:i})}const o=new c1(i);for(const a of Ju.values())o.addComponent(a);const l=new iE(n,r,o);return cl.set(i,l),l}function t_(t=Qu){const e=cl.get(t);if(!e&&t===Qu&&Kg())return e_();if(!e)throw xn.create("no-app",{appName:t});return e}function Rn(t,e,n){var r;let i=(r=tE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(l.join(" "));return}ti(new ur(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const sE="firebase-heartbeat-database",oE=1,ws="firebase-heartbeat-store";let Ua=null;function n_(){return Ua||(Ua=k1(sE,oE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ws)}catch(n){console.warn(n)}}}}).catch(t=>{throw xn.create("idb-open",{originalErrorMessage:t.message})})),Ua}async function lE(t){try{const n=(await n_()).transaction(ws),r=await n.objectStore(ws).get(r_(t));return await n.done,r}catch(e){if(e instanceof zn)Xt.warn(e.message);else{const n=xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(n.message)}}}async function Cf(t,e){try{const r=(await n_()).transaction(ws,"readwrite");await r.objectStore(ws).put(e,r_(t)),await r.done}catch(n){if(n instanceof zn)Xt.warn(n.message);else{const r=xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xt.warn(r.message)}}}function r_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const aE=1024,uE=30*24*60*60*1e3;class cE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=kf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=uE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Xt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kf(),{heartbeatsToSend:r,unsentEntries:i}=dE(this._heartbeatsCache.heartbeats),s=ol(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Xt.warn(n),""}}}function kf(){return new Date().toISOString().substring(0,10)}function dE(t,e=aE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Sf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qw()?Qw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sf(t){return ol(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function fE(t){ti(new ur("platform-logger",e=>new T1(e),"PRIVATE")),ti(new ur("heartbeat",e=>new cE(e),"PRIVATE")),Rn(qu,wf,t),Rn(qu,wf,"esm2017"),Rn("fire-js","")}fE("");var pE="firebase",mE="10.14.1";/**
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
 */Rn(pE,mE,"app");const If="@firebase/database",Tf="1.0.8";/**
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
 */let i_="";function gE(t){i_=t}/**
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
 */class _E{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:vs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class yE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Lt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const s_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _E(e)}}catch{}return new yE},Zn=s_("localStorage"),Xu=s_("sessionStorage");/**
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
 */const Wr=new pd("@firebase/database"),vE=function(){let t=1;return function(){return t++}}(),o_=function(t){const e=o1(t),n=new n1;n.update(e);const r=n.digest();return dd.encodeByteArray(r)},Us=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Us.apply(null,r):typeof r=="object"?e+=ve(r):e+=r,e+=" "}return e};let nr=null,Nf=!0;const wE=function(t,e){O(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Wr.logLevel=Z.VERBOSE,nr=Wr.log.bind(Wr),e&&Xu.set("logging_enabled",!0)):typeof t=="function"?nr=t:(nr=null,Xu.remove("logging_enabled"))},Te=function(...t){if(Nf===!0&&(Nf=!1,nr===null&&Xu.get("logging_enabled")===!0&&wE(!0)),nr){const e=Us.apply(null,t);nr(e)}},zs=function(t){return function(...e){Te(t,...e)}},Zu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Us(...t);Wr.error(e)},Zt=function(...t){const e=`FIREBASE FATAL ERROR: ${Us(...t)}`;throw Wr.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+Us(...t);Wr.warn(e)},EE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},_d=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},CE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ni="[MIN_NAME]",cr="[MAX_NAME]",gr=function(t,e){if(t===e)return 0;if(t===ni||e===cr)return-1;if(e===ni||t===cr)return 1;{const n=xf(t),r=xf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},kE=function(t,e){return t===e?0:t<e?-1:1},Pi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},yd=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ve(e[r]),n+=":",n+=yd(t[e[r]]);return n+="}",n},l_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Re(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const a_=function(t){O(!_d(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},SE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},IE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function TE(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const NE=new RegExp("^-?(0*)\\d{1,10}$"),xE=-2147483648,RE=2147483647,xf=function(t){if(NE.test(t)){const e=Number(t);if(e>=xE&&e<=RE)return e}return null},gi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},PE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class AE{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class OE{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class Vr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Vr.OWNER="owner";/**
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
 */const vd="5",u_="v",c_="s",d_="r",h_="f",f_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,p_="ls",m_="p",ec="ac",g_="websocket",__="long_polling";/**
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
 */class y_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Zn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function DE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function v_(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let r;if(e===g_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===__)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);DE(t)&&(n.ns=t.namespace);const i=[];return Re(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class bE{constructor(){this.counters_={}}incrementCounter(e,n=1){Lt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return jw(this.counters_)}}/**
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
 */const za={},Wa={};function wd(t){const e=t.toString();return za[e]||(za[e]=new bE),za[e]}function LE(t,e){const n=t.toString();return Wa[n]||(Wa[n]=e()),Wa[n]}/**
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
 */class ME{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&gi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Rf="start",FE="close",jE="pLPCommand",UE="pRTLPCB",w_="id",E_="pw",C_="ser",zE="cb",WE="seg",VE="ts",HE="d",BE="dframe",k_=1870,S_=30,$E=k_-S_,GE=25e3,KE=3e4;class Or{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zs(e),this.stats_=wd(n),this.urlFn=a=>(this.appCheckToken&&(a[ec]=this.appCheckToken),v_(n,__,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ME(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(KE)),CE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ed((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Rf)this.id=l,this.password=a;else if(o===FE)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Rf]="t",r[C_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[zE]=this.scriptTagHolder.uniqueCallbackIdentifier),r[u_]=vd,this.transportSessionId&&(r[c_]=this.transportSessionId),this.lastSessionId&&(r[p_]=this.lastSessionId),this.applicationId&&(r[m_]=this.applicationId),this.appCheckToken&&(r[ec]=this.appCheckToken),typeof location<"u"&&location.hostname&&f_.test(location.hostname)&&(r[d_]=h_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Or.forceAllow_=!0}static forceDisallow(){Or.forceDisallow_=!0}static isAvailable(){return Or.forceAllow_?!0:!Or.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!SE()&&!IE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Bg(n),i=l_(r,$E);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[BE]="t",r[w_]=e,r[E_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ed{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=vE(),window[jE+this.uniqueCallbackIdentifier]=e,window[UE+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ed.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Te("frame writing exception"),l.stack&&Te(l.stack),Te(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[w_]=this.myID,e[E_]=this.myPW,e[C_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+S_+r.length<=k_;){const o=this.pendingSegs.shift();r=r+"&"+WE+i+"="+o.seg+"&"+VE+i+"="+o.ts+"&"+HE+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(GE)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const YE=16384,qE=45e3;let dl=null;typeof MozWebSocket<"u"?dl=MozWebSocket:typeof WebSocket<"u"&&(dl=WebSocket);class _t{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zs(this.connId),this.stats_=wd(n),this.connURL=_t.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[u_]=vd,typeof location<"u"&&location.hostname&&f_.test(location.hostname)&&(o[d_]=h_),n&&(o[c_]=n),r&&(o[p_]=r),i&&(o[ec]=i),s&&(o[m_]=s),v_(e,g_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zn.set("previous_websocket_failure",!0);try{let r;Qg(),this.mySock=new dl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&dl!==null&&!_t.forceDisallow_}static previouslyFailed(){return Zn.isInMemoryStorage||Zn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Zn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=vs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=l_(n,YE);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_t.responsesRequiredToBeHealthy=2;_t.healthyTimeout=3e4;/**
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
 */class Es{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Or,_t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=_t&&_t.isAvailable();let r=n&&!_t.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[_t];else{const i=this.transports_=[];for(const s of Es.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Es.globalTransportInitialized_=!1;/**
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
 */const QE=6e4,JE=5e3,XE=10*1024,ZE=100*1024,Va="t",Pf="d",eC="s",Af="r",tC="e",Of="o",Df="a",bf="n",Lf="p",nC="h";class rC{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zs("c:"+this.id+":"),this.transportManager_=new Es(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ZE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>XE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Va in e){const n=e[Va];n===Df?this.upgradeIfSecondaryHealthy_():n===Af?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Of&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Pi("t",e),r=Pi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Lf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Df,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:bf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Pi("t",e),r=Pi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Pi(Va,e);if(Pf in e){const r=e[Pf];if(n===nC){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===bf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===eC?this.onConnectionShutdown_(r):n===Af?this.onReset_(r):n===tC?Zu("Server Error: "+r):n===Of?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),vd!==r&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Qi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(QE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(JE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Lf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class I_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class T_{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class hl extends T_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hl}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Mf=32,Ff=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new ee("")}function H(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function bn(t){return t.pieces_.length-t.pieceNum_}function ne(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function Cd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function iC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Cs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function N_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function he(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ee(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function Le(t,e){const n=H(t),r=H(e);if(n===null)return e;if(n===r)return Le(ne(t),ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function sC(t,e){const n=Cs(t,0),r=Cs(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=gr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function kd(t,e){if(bn(t)!==bn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function lt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(bn(t)>bn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class oC{constructor(e,n){this.errorPrefix_=n,this.parts_=Cs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Kl(this.parts_[r]);x_(this)}}function lC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Kl(e),x_(t)}function aC(t){const e=t.parts_.pop();t.byteLength_-=Kl(e),t.parts_.length>0&&(t.byteLength_-=1)}function x_(t){if(t.byteLength_>Ff)throw new Error(t.errorPrefix_+"has a key path longer than "+Ff+" bytes ("+t.byteLength_+").");if(t.parts_.length>Mf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Mf+") or object contains a cycle "+qn(t))}function qn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Sd extends T_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Sd}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ai=1e3,uC=60*5*1e3,jf=30*1e3,cC=1.3,dC=3e4,hC="server_kill",Uf=3;class Kt extends I_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Kt.nextPersistentConnectionId_++,this.log_=zs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ai,this.maxReconnectDelay_=uC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Qg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ve(s)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Fs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Kt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Lt(e,"w")){const r=ei(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||t1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=jf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=e1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Zu("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ai,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ai,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>dC&&(this.reconnectDelay_=Ai),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Kt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){O(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new rC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{Fe(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(hC)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Fe(c),a())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Gu(this.interruptReasons_)&&(this.reconnectDelay_=Ai,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>yd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Te("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Uf&&(this.reconnectDelay_=jf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Te("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Uf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+i_.replace(/\./g,"-")]=1,fd()?e["framework.cordova"]=1:qg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hl.getInstance().currentlyOnline();return Gu(this.interruptReasons_)&&e}}Kt.nextPersistentConnectionId_=0;Kt.nextConnectionId_=0;/**
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
 */class B{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new B(e,n)}}/**
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
 */class Yl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new B(ni,e),i=new B(ni,n);return this.compare(r,i)!==0}minPost(){return B.MIN}}/**
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
 */let po;class R_ extends Yl{static get __EMPTY_NODE(){return po}static set __EMPTY_NODE(e){po=e}compare(e,n){return gr(e.name,n.name)}isDefinedOn(e){throw fi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return B.MIN}maxPost(){return new B(cr,po)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new B(e,po)}toString(){return".key"}}const Hr=new R_;/**
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
 */class mo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ke.RED,this.left=i??$e.EMPTY_NODE,this.right=s??$e.EMPTY_NODE}copy(e,n,r,i,s){return new ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $e.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return $e.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ke.RED=!0;ke.BLACK=!1;class fC{copy(e,n,r,i,s){return this}insert(e,n,r){return new ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $e{constructor(e,n=$e.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $e(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ke.BLACK,null,null))}remove(e){return new $e(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ke.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new mo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new mo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new mo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new mo(this.root_,null,this.comparator_,!0,e)}}$e.EMPTY_NODE=new fC;/**
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
 */function pC(t,e){return gr(t.name,e.name)}function Id(t,e){return gr(t,e)}/**
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
 */let tc;function mC(t){tc=t}const P_=function(t){return typeof t=="number"?"number:"+a_(t):"string:"+t},A_=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Lt(e,".sv"),"Priority must be a string or number.")}else O(t===tc||t.isEmpty(),"priority of unexpected type.");O(t===tc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let zf;class Ee{constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),A_(this.priorityNode_)}static set __childrenNodeConstructor(e){zf=e}static get __childrenNodeConstructor(){return zf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:H(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=H(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(O(r!==".priority"||bn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+P_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=a_(this.value_):e+=this.value_,this.lazyHash_=o_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ee.VALUE_TYPE_ORDER.indexOf(n),s=Ee.VALUE_TYPE_ORDER.indexOf(r);return O(i>=0,"Unknown leaf type: "+n),O(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let O_,D_;function gC(t){O_=t}function _C(t){D_=t}class yC extends Yl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?gr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return B.MIN}maxPost(){return new B(cr,new Ee("[PRIORITY-POST]",D_))}makePost(e,n){const r=O_(e);return new B(n,new Ee("[PRIORITY-POST]",r))}toString(){return".priority"}}const fe=new yC;/**
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
 */const vC=Math.log(2);class wC{constructor(e){const n=s=>parseInt(Math.log(s)/vC,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fl=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new ke(h,c.node,ke.BLACK,null,null);{const y=parseInt(d/2,10)+a,_=i(a,y),w=i(y+1,u);return c=t[y],h=n?n(c):c,new ke(h,c.node,ke.BLACK,_,w)}},s=function(a){let u=null,d=null,c=t.length;const h=function(_,w){const C=c-_,g=c;c-=_;const m=i(C+1,g),p=t[C],E=n?n(p):p;y(new ke(E,p.node,w,null,m))},y=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const w=a.nextBitIsOne(),C=Math.pow(2,a.count-(_+1));w?h(C,ke.BLACK):(h(C,ke.BLACK),h(C,ke.RED))}return d},o=new wC(t.length),l=s(o);return new $e(r||e,l)};/**
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
 */let Ha;const vr={};class Vt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return O(vr&&fe,"ChildrenNode.ts has not been loaded"),Ha=Ha||new Vt({".priority":vr},{".priority":fe}),Ha}get(e){const n=ei(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof $e?n:null}hasIndex(e){return Lt(this.indexSet_,e.toString())}addIndex(e,n){O(e!==Hr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(B.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=fl(r,e.getCompare()):l=vr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Vt(d,u)}addToIndexes(e,n){const r=al(this.indexes_,(i,s)=>{const o=ei(this.indexSet_,s);if(O(o,"Missing index implementation for "+s),i===vr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(B.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),fl(l,o.getCompare())}else return vr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new B(e.name,l))),a.insert(e,e.node)}});return new Vt(r,this.indexSet_)}removeFromIndexes(e,n){const r=al(this.indexes_,i=>{if(i===vr)return i;{const s=n.get(e.name);return s?i.remove(new B(e.name,s)):i}});return new Vt(r,this.indexSet_)}}/**
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
 */let Oi;class W{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&A_(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Oi||(Oi=new W(new $e(Id),null,Vt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Oi}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Oi:n}}getChild(e){const n=H(e);return n===null?this:this.getImmediateChild(n).getChild(ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new B(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Oi:this.priorityNode_;return new W(i,o,s)}}updateChild(e,n){const r=H(e);if(r===null)return n;{O(H(e)!==".priority"||bn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ne(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(fe,(o,l)=>{n[o]=l.val(e),r++,s&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+P_(this.getPriority().val())+":"),this.forEachChild(fe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":o_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new B(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new B(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new B(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,B.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,B.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ws?-1:0}withIndex(e){if(e===Hr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Hr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(fe),i=n.getIterator(fe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Hr?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class EC extends W{constructor(){super(new $e(Id),W.EMPTY_NODE,Vt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const Ws=new EC;Object.defineProperties(B,{MIN:{value:new B(ni,W.EMPTY_NODE)},MAX:{value:new B(cr,Ws)}});R_.__EMPTY_NODE=W.EMPTY_NODE;Ee.__childrenNodeConstructor=W;mC(Ws);_C(Ws);/**
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
 */const CC=!0;function ye(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,ye(e))}if(!(t instanceof Array)&&CC){const n=[];let r=!1;if(Re(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ye(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new B(o,a)))}}),n.length===0)return W.EMPTY_NODE;const s=fl(n,pC,o=>o.name,Id);if(r){const o=fl(n,fe.getCompare());return new W(s,ye(e),new Vt({".priority":o},{".priority":fe}))}else return new W(s,ye(e),Vt.Default)}else{let n=W.EMPTY_NODE;return Re(t,(r,i)=>{if(Lt(t,r)&&r.substring(0,1)!=="."){const s=ye(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ye(e))}}gC(ye);/**
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
 */class kC extends Yl{constructor(e){super(),this.indexPath_=e,O(!G(e)&&H(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?gr(e.name,n.name):s}makePost(e,n){const r=ye(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,r);return new B(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,Ws);return new B(cr,e)}toString(){return Cs(this.indexPath_,0).join("/")}}/**
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
 */class SC extends Yl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?gr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return B.MIN}maxPost(){return B.MAX}makePost(e,n){const r=ye(e);return new B(n,r)}toString(){return".value"}}const IC=new SC;/**
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
 */function b_(t){return{type:"value",snapshotNode:t}}function ri(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ks(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ss(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function TC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Td{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ks(n,l)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ri(n,r)):o.trackChildChange(Ss(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,s)=>{n.hasChild(i)||r.trackChildChange(ks(i,s))}),n.isLeafNode()||n.forEachChild(fe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ss(i,s,o))}else r.trackChildChange(ri(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Is{constructor(e){this.indexedFilter_=new Td(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Is.getStartPost_(e),this.endPost_=Is.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new B(n,r))||(r=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=W.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(W.EMPTY_NODE);const s=this;return n.forEachChild(fe,(o,l)=>{s.matches(new B(o,l))||(i=i.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class NC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Is(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new B(n,r))||(r=W.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=W.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(W.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,y)=>c(y,h)}else o=this.index_.getCompare();const l=e;O(l.numChildren()===this.limit_,"");const a=new B(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const y=h==null?1:o(h,a);if(d&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(Ss(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ks(n,c));const w=l.updateImmediateChild(n,W.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(ri(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(ks(u.name,u.node)),s.trackChildChange(ri(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,W.EMPTY_NODE)):e}}/**
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
 */class Nd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ni}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new Nd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xC(t){return t.loadsAllData()?new Td(t.getIndex()):t.hasLimit()?new NC(t):new Is(t)}function Wf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===fe?n="$priority":t.index_===IC?n="$value":t.index_===Hr?n="$key":(O(t.index_ instanceof kC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ve(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ve(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ve(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Vf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
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
 */class pl extends I_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=zs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=pl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Wf(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),ei(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=pl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Wf(e._queryParams),r=e._path.toString(),i=new Fs;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+pi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=vs(l.responseText)}catch{Fe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Fe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class RC{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ml(){return{value:null,children:new Map}}function L_(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=H(e);t.children.has(r)||t.children.set(r,ml());const i=t.children.get(r);e=ne(e),L_(i,e,n)}}function nc(t,e,n){t.value!==null?n(e,t.value):PC(t,(r,i)=>{const s=new ee(e.toString()+"/"+r);nc(i,s,n)})}function PC(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class AC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Re(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Hf=10*1e3,OC=30*1e3,DC=5*60*1e3;class bC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new AC(e);const r=Hf+(OC-Hf)*Math.random();Qi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Re(e,(i,s)=>{s>0&&Lt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Qi(this.reportStats_.bind(this),Math.floor(Math.random()*2*DC))}}/**
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
 */var vt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(vt||(vt={}));function xd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Rd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Pd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class gl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=vt.ACK_USER_WRITE,this.source=xd()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new gl(J(),n,this.revert)}}else return O(H(this.path)===e,"operationForChild called for unrelated child."),new gl(ne(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ts{constructor(e,n){this.source=e,this.path=n,this.type=vt.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new Ts(this.source,J()):new Ts(this.source,ne(this.path))}}/**
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
 */class dr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=vt.OVERWRITE}operationForChild(e){return G(this.path)?new dr(this.source,J(),this.snap.getImmediateChild(e)):new dr(this.source,ne(this.path),this.snap)}}/**
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
 */class ii{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=vt.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new dr(this.source,J(),n.value):new ii(this.source,J(),n)}else return O(H(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ii(this.source,ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ln{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=H(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class LC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function MC(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(TC(o.childName,o.snapshotNode))}),Di(t,i,"child_removed",e,r,n),Di(t,i,"child_added",e,r,n),Di(t,i,"child_moved",s,r,n),Di(t,i,"child_changed",e,r,n),Di(t,i,"value",e,r,n),i}function Di(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>jC(t,l,a)),o.forEach(l=>{const a=FC(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function FC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function jC(t,e,n){if(e.childName==null||n.childName==null)throw fi("Should only compare child_ events.");const r=new B(e.childName,e.snapshotNode),i=new B(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function ql(t,e){return{eventCache:t,serverCache:e}}function Ji(t,e,n,r){return ql(new Ln(e,n,r),t.serverCache)}function M_(t,e,n,r){return ql(t.eventCache,new Ln(e,n,r))}function _l(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ba;const UC=()=>(Ba||(Ba=new $e(kE)),Ba);class te{constructor(e,n=UC()){this.value=e,this.children=n}static fromObject(e){let n=new te(null);return Re(e,(r,i)=>{n=n.set(new ee(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(G(e))return null;{const r=H(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ne(e),n);return s!=null?{path:he(new ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=H(e),r=this.children.get(n);return r!==null?r.subtree(ne(e)):new te(null)}}set(e,n){if(G(e))return new te(n,this.children);{const r=H(e),s=(this.children.get(r)||new te(null)).set(ne(e),n),o=this.children.insert(r,s);return new te(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new te(null):new te(null,this.children);{const n=H(e),r=this.children.get(n);if(r){const i=r.remove(ne(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new te(null):new te(this.value,s)}else return this}}get(e){if(G(e))return this.value;{const n=H(e),r=this.children.get(n);return r?r.get(ne(e)):null}}setTree(e,n){if(G(e))return n;{const r=H(e),s=(this.children.get(r)||new te(null)).setTree(ne(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new te(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(he(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(e))return null;{const s=H(e),o=this.children.get(s);return o?o.findOnPath_(ne(e),he(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,r){if(G(e))return this;{this.value&&r(n,this.value);const i=H(e),s=this.children.get(i);return s?s.foreachOnPath_(ne(e),he(n,i),r):new te(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(he(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Ct{constructor(e){this.writeTree_=e}static empty(){return new Ct(new te(null))}}function Xi(t,e,n){if(G(e))return new Ct(new te(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Le(i,e);return s=s.updateChild(o,n),new Ct(t.writeTree_.set(i,s))}else{const i=new te(n),s=t.writeTree_.setTree(e,i);return new Ct(s)}}}function rc(t,e,n){let r=t;return Re(n,(i,s)=>{r=Xi(r,he(e,i),s)}),r}function Bf(t,e){if(G(e))return Ct.empty();{const n=t.writeTree_.setTree(e,new te(null));return new Ct(n)}}function ic(t,e){return _r(t,e)!=null}function _r(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Le(n.path,e)):null}function $f(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(r,i)=>{e.push(new B(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new B(r,i.value))}),e}function Pn(t,e){if(G(e))return t;{const n=_r(t,e);return n!=null?new Ct(new te(n)):new Ct(t.writeTree_.subtree(e))}}function sc(t){return t.writeTree_.isEmpty()}function si(t,e){return F_(J(),t.writeTree_,e)}function F_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(O(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=F_(he(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(he(t,".priority"),r)),n}}/**
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
 */function Ql(t,e){return W_(e,t)}function zC(t,e,n,r,i){O(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Xi(t.visibleWrites,e,n)),t.lastWriteId=r}function WC(t,e,n,r){O(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=rc(t.visibleWrites,e,n),t.lastWriteId=r}function VC(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function HC(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&BC(l,r.path)?i=!1:lt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return $C(t),!0;if(r.snap)t.visibleWrites=Bf(t.visibleWrites,r.path);else{const l=r.children;Re(l,a=>{t.visibleWrites=Bf(t.visibleWrites,he(r.path,a))})}return!0}else return!1}function BC(t,e){if(t.snap)return lt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&lt(he(t.path,n),e))return!0;return!1}function $C(t){t.visibleWrites=j_(t.allWrites,GC,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function GC(t){return t.visible}function j_(t,e,n){let r=Ct.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)lt(n,o)?(l=Le(n,o),r=Xi(r,l,s.snap)):lt(o,n)&&(l=Le(o,n),r=Xi(r,J(),s.snap.getChild(l)));else if(s.children){if(lt(n,o))l=Le(n,o),r=rc(r,l,s.children);else if(lt(o,n))if(l=Le(o,n),G(l))r=rc(r,J(),s.children);else{const a=ei(s.children,H(l));if(a){const u=a.getChild(ne(l));r=Xi(r,J(),u)}}}else throw fi("WriteRecord should have .snap or .children")}}return r}function U_(t,e,n,r,i){if(!r&&!i){const s=_r(t.visibleWrites,e);if(s!=null)return s;{const o=Pn(t.visibleWrites,e);if(sc(o))return n;if(n==null&&!ic(o,J()))return null;{const l=n||W.EMPTY_NODE;return si(o,l)}}}else{const s=Pn(t.visibleWrites,e);if(!i&&sc(s))return n;if(!i&&n==null&&!ic(s,J()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(lt(u.path,e)||lt(e,u.path))},l=j_(t.allWrites,o,e),a=n||W.EMPTY_NODE;return si(l,a)}}}function KC(t,e,n){let r=W.EMPTY_NODE;const i=_r(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Pn(t.visibleWrites,e);return n.forEachChild(fe,(o,l)=>{const a=si(Pn(s,new ee(o)),l);r=r.updateImmediateChild(o,a)}),$f(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Pn(t.visibleWrites,e);return $f(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function YC(t,e,n,r,i){O(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=he(e,n);if(ic(t.visibleWrites,s))return null;{const o=Pn(t.visibleWrites,s);return sc(o)?i.getChild(n):si(o,i.getChild(n))}}function qC(t,e,n,r){const i=he(e,n),s=_r(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Pn(t.visibleWrites,i);return si(o,r.getNode().getImmediateChild(n))}else return null}function QC(t,e){return _r(t.visibleWrites,e)}function JC(t,e,n,r,i,s,o){let l;const a=Pn(t.visibleWrites,e),u=_r(a,J());if(u!=null)l=u;else if(n!=null)l=si(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let y=h.getNext();for(;y&&d.length<i;)c(y,r)!==0&&d.push(y),y=h.getNext();return d}else return[]}function XC(){return{visibleWrites:Ct.empty(),allWrites:[],lastWriteId:-1}}function yl(t,e,n,r){return U_(t.writeTree,t.treePath,e,n,r)}function Ad(t,e){return KC(t.writeTree,t.treePath,e)}function Gf(t,e,n,r){return YC(t.writeTree,t.treePath,e,n,r)}function vl(t,e){return QC(t.writeTree,he(t.treePath,e))}function ZC(t,e,n,r,i,s){return JC(t.writeTree,t.treePath,e,n,r,i,s)}function Od(t,e,n){return qC(t.writeTree,t.treePath,e,n)}function z_(t,e){return W_(he(t.treePath,e),t.writeTree)}function W_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class ek{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ss(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ks(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ri(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ss(r,e.snapshotNode,i.oldSnap));else throw fi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class tk{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const V_=new tk;class Dd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ln(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Od(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hr(this.viewCache_),s=ZC(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function nk(t){return{filter:t}}function rk(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ik(t,e,n,r,i){const s=new ek;let o,l;if(n.type===vt.OVERWRITE){const u=n;u.source.fromUser?o=oc(t,e,u.path,u.snap,r,i,s):(O(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!G(u.path),o=wl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===vt.MERGE){const u=n;u.source.fromUser?o=ok(t,e,u.path,u.children,r,i,s):(O(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=lc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===vt.ACK_USER_WRITE){const u=n;u.revert?o=uk(t,e,u.path,r,i,s):o=lk(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===vt.LISTEN_COMPLETE)o=ak(t,e,n.path,r,s);else throw fi("Unknown operation type: "+n.type);const a=s.getChanges();return sk(e,o,a),{viewCache:o,changes:a}}function sk(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=_l(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(b_(_l(e)))}}function H_(t,e,n,r,i,s){const o=e.eventCache;if(vl(r,n)!=null)return e;{let l,a;if(G(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=hr(e),d=u instanceof W?u:W.EMPTY_NODE,c=Ad(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=yl(r,hr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=H(n);if(u===".priority"){O(bn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=Gf(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=ne(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Gf(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=Od(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Ji(e,l,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function wl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(G(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const y=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),y,null)}else{const y=H(n);if(!a.isCompleteForPath(n)&&bn(n)>1)return e;const _=ne(n),C=a.getNode().getImmediateChild(y).updateChild(_,r);y===".priority"?u=d.updatePriority(a.getNode(),C):u=d.updateChild(a.getNode(),y,C,_,V_,null)}const c=M_(e,u,a.isFullyInitialized()||G(n),d.filtersNodes()),h=new Dd(i,c,s);return H_(t,c,n,i,h,l)}function oc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new Dd(i,e,s);if(G(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ji(e,u,!0,t.filter.filtersNodes());else{const c=H(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ji(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=ne(n),y=l.getNode().getImmediateChild(c);let _;if(G(h))_=r;else{const w=d.getCompleteChild(c);w!=null?Cd(h)===".priority"&&w.getChild(N_(h)).isEmpty()?_=w:_=w.updateChild(h,r):_=W.EMPTY_NODE}if(y.equals(_))a=e;else{const w=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=Ji(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Kf(t,e){return t.eventCache.isCompleteForChild(e)}function ok(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=he(n,a);Kf(e,H(d))&&(l=oc(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=he(n,a);Kf(e,H(d))||(l=oc(t,l,d,u,i,s,o))}),l}function Yf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function lc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;G(n)?u=r:u=new te(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const y=e.serverCache.getNode().getImmediateChild(c),_=Yf(t,y,h);a=wl(t,a,new ee(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const y=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!y){const _=e.serverCache.getNode().getImmediateChild(c),w=Yf(t,_,h);a=wl(t,a,new ee(c),w,i,s,o,l)}}),a}function lk(t,e,n,r,i,s,o){if(vl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(G(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return wl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(G(n)){let u=new te(null);return a.getNode().forEachChild(Hr,(d,c)=>{u=u.set(new ee(d),c)}),lc(t,e,n,u,i,s,l,o)}else return e}else{let u=new te(null);return r.foreach((d,c)=>{const h=he(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),lc(t,e,n,u,i,s,l,o)}}function ak(t,e,n,r,i){const s=e.serverCache,o=M_(e,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return H_(t,o,n,r,V_,i)}function uk(t,e,n,r,i,s){let o;if(vl(r,n)!=null)return e;{const l=new Dd(r,e,i),a=e.eventCache.getNode();let u;if(G(n)||H(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=yl(r,hr(e));else{const c=e.serverCache.getNode();O(c instanceof W,"serverChildren would be complete if leaf node"),d=Ad(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=H(n);let c=Od(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,ne(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,W.EMPTY_NODE,ne(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=yl(r,hr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||vl(r,J())!=null,Ji(e,u,o,t.filter.filtersNodes())}}/**
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
 */class ck{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Td(r.getIndex()),s=xC(r);this.processor_=nk(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(W.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(W.EMPTY_NODE,l.getNode(),null),d=new Ln(a,o.isFullyInitialized(),i.filtersNodes()),c=new Ln(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ql(c,d),this.eventGenerator_=new LC(this.query_)}get query(){return this.query_}}function dk(t){return t.viewCache_.serverCache.getNode()}function hk(t){return _l(t.viewCache_)}function fk(t,e){const n=hr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(H(e)).isEmpty())?n.getChild(e):null}function qf(t){return t.eventRegistrations_.length===0}function pk(t,e){t.eventRegistrations_.push(e)}function Qf(t,e,n){const r=[];if(n){O(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Jf(t,e,n,r){e.type===vt.MERGE&&e.source.queryId!==null&&(O(hr(t.viewCache_),"We should always have a full cache before handling merges"),O(_l(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=ik(t.processor_,i,e,n,r);return rk(t.processor_,s.viewCache),O(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,B_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function mk(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(s,o)=>{r.push(ri(s,o))}),n.isFullyInitialized()&&r.push(b_(n.getNode())),B_(t,r,n.getNode(),e)}function B_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return MC(t.eventGenerator_,e,n,i)}/**
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
 */let El;class $_{constructor(){this.views=new Map}}function gk(t){O(!El,"__referenceConstructor has already been defined"),El=t}function _k(){return O(El,"Reference.ts has not been loaded"),El}function yk(t){return t.views.size===0}function bd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return O(s!=null,"SyncTree gave us an op for an invalid query."),Jf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Jf(o,e,n,r));return s}}function G_(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=yl(n,i?r:null),a=!1;l?a=!0:r instanceof W?(l=Ad(n,r),a=!1):(l=W.EMPTY_NODE,a=!1);const u=ql(new Ln(l,a,!1),new Ln(r,i,!1));return new ck(e,u)}return o}function vk(t,e,n,r,i,s){const o=G_(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),pk(o,n),mk(o,n)}function wk(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Mn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Qf(u,n,r)),qf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Qf(a,n,r)),qf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Mn(t)&&s.push(new(_k())(e._repo,e._path)),{removed:s,events:o}}function K_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function An(t,e){let n=null;for(const r of t.views.values())n=n||fk(r,e);return n}function Y_(t,e){if(e._queryParams.loadsAllData())return Jl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function q_(t,e){return Y_(t,e)!=null}function Mn(t){return Jl(t)!=null}function Jl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Cl;function Ek(t){O(!Cl,"__referenceConstructor has already been defined"),Cl=t}function Ck(){return O(Cl,"Reference.ts has not been loaded"),Cl}let kk=1;class Xf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new te(null),this.pendingWriteTree_=XC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Q_(t,e,n,r,i){return zC(t.pendingWriteTree_,e,n,r,i),i?_i(t,new dr(xd(),e,n)):[]}function Sk(t,e,n,r){WC(t.pendingWriteTree_,e,n,r);const i=te.fromObject(n);return _i(t,new ii(xd(),e,i))}function yn(t,e,n=!1){const r=VC(t.pendingWriteTree_,e);if(HC(t.pendingWriteTree_,e)){let s=new te(null);return r.snap!=null?s=s.set(J(),!0):Re(r.children,o=>{s=s.set(new ee(o),!0)}),_i(t,new gl(r.path,s,n))}else return[]}function Vs(t,e,n){return _i(t,new dr(Rd(),e,n))}function Ik(t,e,n){const r=te.fromObject(n);return _i(t,new ii(Rd(),e,r))}function Tk(t,e){return _i(t,new Ts(Rd(),e))}function Nk(t,e,n){const r=Md(t,n);if(r){const i=Fd(r),s=i.path,o=i.queryId,l=Le(s,e),a=new Ts(Pd(o),l);return jd(t,s,a)}else return[]}function kl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||q_(o,e))){const a=wk(o,e,n,r);yk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,y)=>Mn(y));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const y=Pk(h);for(let _=0;_<y.length;++_){const w=y[_],C=w.query,g=ey(t,w);t.listenProvider_.startListening(Zi(C),Ns(t,C),g.hashFn,g.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Zi(e),null):u.forEach(h=>{const y=t.queryToTagMap.get(Xl(h));t.listenProvider_.stopListening(Zi(h),y)}))}Ak(t,u)}return l}function J_(t,e,n,r){const i=Md(t,r);if(i!=null){const s=Fd(i),o=s.path,l=s.queryId,a=Le(o,e),u=new dr(Pd(l),a,n);return jd(t,o,u)}else return[]}function xk(t,e,n,r){const i=Md(t,r);if(i){const s=Fd(i),o=s.path,l=s.queryId,a=Le(o,e),u=te.fromObject(n),d=new ii(Pd(l),a,u);return jd(t,o,d)}else return[]}function ac(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,y)=>{const _=Le(h,i);s=s||An(y,_),o=o||Mn(y)});let l=t.syncPointTree_.get(i);l?(o=o||Mn(l),s=s||An(l,J())):(l=new $_,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=W.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,_)=>{const w=An(_,J());w&&(s=s.updateImmediateChild(y,w))}));const u=q_(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Xl(e);O(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const y=Ok();t.queryToTagMap.set(h,y),t.tagToQueryMap.set(y,h)}const d=Ql(t.pendingWriteTree_,i);let c=vk(l,e,n,d,s,a);if(!u&&!o&&!r){const h=Y_(l,e);c=c.concat(Dk(t,e,h))}return c}function Ld(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Le(o,e),u=An(l,a);if(u)return u});return U_(i,e,s,n,!0)}function Rk(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Le(u,n);r=r||An(d,c)});let i=t.syncPointTree_.get(n);i?r=r||An(i,J()):(i=new $_,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Ln(r,!0,!1):null,l=Ql(t.pendingWriteTree_,e._path),a=G_(i,e,l,s?o.getNode():W.EMPTY_NODE,s);return hk(a)}function _i(t,e){return X_(e,t.syncPointTree_,null,Ql(t.pendingWriteTree_,J()))}function X_(t,e,n,r){if(G(t.path))return Z_(t,e,n,r);{const i=e.get(J());n==null&&i!=null&&(n=An(i,J()));let s=[];const o=H(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=z_(r,o);s=s.concat(X_(l,a,u,d))}return i&&(s=s.concat(bd(i,t,r,n))),s}}function Z_(t,e,n,r){const i=e.get(J());n==null&&i!=null&&(n=An(i,J()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=z_(r,o),d=t.operationForChild(o);d&&(s=s.concat(Z_(d,l,a,u)))}),i&&(s=s.concat(bd(i,t,r,n))),s}function ey(t,e){const n=e.query,r=Ns(t,n);return{hashFn:()=>(dk(e)||W.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Nk(t,n._path,r):Tk(t,n._path);{const s=TE(i,n);return kl(t,n,null,s)}}}}function Ns(t,e){const n=Xl(e);return t.queryToTagMap.get(n)}function Xl(t){return t._path.toString()+"$"+t._queryIdentifier}function Md(t,e){return t.tagToQueryMap.get(e)}function Fd(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function jd(t,e,n){const r=t.syncPointTree_.get(e);O(r,"Missing sync point for query tag that we're tracking");const i=Ql(t.pendingWriteTree_,e);return bd(r,n,i,null)}function Pk(t){return t.fold((e,n,r)=>{if(n&&Mn(n))return[Jl(n)];{let i=[];return n&&(i=K_(n)),Re(r,(s,o)=>{i=i.concat(o)}),i}})}function Zi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Ck())(t._repo,t._path):t}function Ak(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Xl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Ok(){return kk++}function Dk(t,e,n){const r=e._path,i=Ns(t,e),s=ey(t,n),o=t.listenProvider_.startListening(Zi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)O(!Mn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!G(u)&&d&&Mn(d))return[Jl(d).query];{let h=[];return d&&(h=h.concat(K_(d).map(y=>y.query))),Re(c,(y,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Zi(d),Ns(t,d))}}return o}/**
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
 */class Ud{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ud(n)}node(){return this.node_}}class zd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=he(this.path_,e);return new zd(this.syncTree_,n)}node(){return Ld(this.syncTree_,this.path_)}}const bk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Zf=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Lk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Mk(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Lk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},Mk=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&O(!1,"Unexpected increment value: "+r);const i=e.node();if(O(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},ty=function(t,e,n,r){return Wd(e,new zd(n,t),r)},ny=function(t,e,n){return Wd(t,new Ud(e),n)};function Wd(t,e,n){const r=t.getPriority().val(),i=Zf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Zf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ee(l,ye(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ee(i))),o.forEachChild(fe,(l,a)=>{const u=Wd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class Vd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Hd(t,e){let n=e instanceof ee?e:new ee(e),r=t,i=H(n);for(;i!==null;){const s=ei(r.node.children,i)||{children:{},childCount:0};r=new Vd(i,r,s),n=ne(n),i=H(n)}return r}function yi(t){return t.node.value}function ry(t,e){t.node.value=e,uc(t)}function iy(t){return t.node.childCount>0}function Fk(t){return yi(t)===void 0&&!iy(t)}function Zl(t,e){Re(t.node.children,(n,r)=>{e(new Vd(n,t,r))})}function sy(t,e,n,r){n&&!r&&e(t),Zl(t,i=>{sy(i,e,!0,r)}),n&&r&&e(t)}function jk(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Hs(t){return new ee(t.parent===null?t.name:Hs(t.parent)+"/"+t.name)}function uc(t){t.parent!==null&&Uk(t.parent,t.name,t)}function Uk(t,e,n){const r=Fk(n),i=Lt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,uc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,uc(t))}/**
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
 */const zk=/[\[\].#$\/\u0000-\u001F\u007F]/,Wk=/[\[\].#$\u0000-\u001F\u007F]/,$a=10*1024*1024,Bd=function(t){return typeof t=="string"&&t.length!==0&&!zk.test(t)},oy=function(t){return typeof t=="string"&&t.length!==0&&!Wk.test(t)},Vk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),oy(t)},Hk=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!_d(t)||t&&typeof t=="object"&&Lt(t,".sv")},Bk=function(t,e,n,r){r&&e===void 0||ea(Gl(t,"value"),e,n)},ea=function(t,e,n){const r=n instanceof ee?new oC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+qn(r));if(typeof e=="function")throw new Error(t+"contains a function "+qn(r)+" with contents = "+e.toString());if(_d(e))throw new Error(t+"contains "+e.toString()+" "+qn(r));if(typeof e=="string"&&e.length>$a/3&&Kl(e)>$a)throw new Error(t+"contains a string greater than "+$a+" utf8 bytes "+qn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Re(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Bd(o)))throw new Error(t+" contains an invalid key ("+o+") "+qn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);lC(r,o),ea(t,l,r),aC(r)}),i&&s)throw new Error(t+' contains ".value" child '+qn(r)+" in addition to actual children.")}},$k=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Cs(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Bd(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(sC);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&lt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Gk=function(t,e,n,r){if(r&&e===void 0)return;const i=Gl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Re(e,(o,l)=>{const a=new ee(o);if(ea(i,l,he(n,a)),Cd(a)===".priority"&&!Hk(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),$k(i,s)},ly=function(t,e,n,r){if(!(r&&n===void 0)&&!oy(n))throw new Error(Gl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Kk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ly(t,e,n,r)},ay=function(t,e){if(H(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Yk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Bd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Vk(n))throw new Error(Gl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class qk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ta(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!kd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function uy(t,e,n){ta(t,n),cy(t,r=>kd(r,e))}function dt(t,e,n){ta(t,n),cy(t,r=>lt(r,e)||lt(e,r))}function cy(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Qk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Qk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();nr&&Te("event: "+n.toString()),gi(r)}}}/**
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
 */const Jk="repo_interrupt",Xk=25;class Zk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ml(),this.transactionQueueTree_=new Vd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function eS(t,e,n){if(t.stats_=wd(t.repoInfo_),t.forceRestClient_||PE())t.server_=new pl(t.repoInfo_,(r,i,s,o)=>{ep(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>tp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Kt(t.repoInfo_,e,(r,i,s,o)=>{ep(t,r,i,s,o)},r=>{tp(t,r)},r=>{nS(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=LE(t.repoInfo_,()=>new bC(t.stats_,t.server_)),t.infoData_=new RC,t.infoSyncTree_=new Xf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Vs(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),$d(t,"connected",!1),t.serverSyncTree_=new Xf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);dt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function tS(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function na(t){return bk({timestamp:tS(t)})}function ep(t,e,n,r,i){t.dataUpdateCount++;const s=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=al(n,u=>ye(u));o=xk(t.serverSyncTree_,s,a,i)}else{const a=ye(n);o=J_(t.serverSyncTree_,s,a,i)}else if(r){const a=al(n,u=>ye(u));o=Ik(t.serverSyncTree_,s,a)}else{const a=ye(n);o=Vs(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=oi(t,s)),dt(t.eventQueue_,l,o)}function tp(t,e){$d(t,"connected",e),e===!1&&oS(t)}function nS(t,e){Re(e,(n,r)=>{$d(t,n,r)})}function $d(t,e,n){const r=new ee("/.info/"+e),i=ye(n);t.infoData_.updateSnapshot(r,i);const s=Vs(t.infoSyncTree_,r,i);dt(t.eventQueue_,r,s)}function Gd(t){return t.nextWriteId_++}function rS(t,e,n){const r=Rk(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ye(i).withIndex(e._queryParams.getIndex());ac(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Vs(t.serverSyncTree_,e._path,s);else{const l=Ns(t.serverSyncTree_,e);o=J_(t.serverSyncTree_,e._path,s,l)}return dt(t.eventQueue_,e._path,o),kl(t.serverSyncTree_,e,n,null,!0),s},i=>(Bs(t,"get for query "+ve(e)+" failed: "+i),Promise.reject(new Error(i))))}function iS(t,e,n,r,i){Bs(t,"set",{path:e.toString(),value:n,priority:r});const s=na(t),o=ye(n,r),l=Ld(t.serverSyncTree_,e),a=ny(o,l,s),u=Gd(t),d=Q_(t.serverSyncTree_,e,a,u,!0);ta(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,y)=>{const _=h==="ok";_||Fe("set at "+e+" failed: "+h);const w=yn(t.serverSyncTree_,u,!_);dt(t.eventQueue_,e,w),cc(t,i,h,y)});const c=Yd(t,e);oi(t,c),dt(t.eventQueue_,c,[])}function sS(t,e,n,r){Bs(t,"update",{path:e.toString(),value:n});let i=!0;const s=na(t),o={};if(Re(n,(l,a)=>{i=!1,o[l]=ty(he(e,l),ye(a),t.serverSyncTree_,s)}),i)Te("update() called with empty data.  Don't do anything."),cc(t,r,"ok",void 0);else{const l=Gd(t),a=Sk(t.serverSyncTree_,e,o,l);ta(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||Fe("update at "+e+" failed: "+u);const h=yn(t.serverSyncTree_,l,!c),y=h.length>0?oi(t,e):e;dt(t.eventQueue_,y,h),cc(t,r,u,d)}),Re(n,u=>{const d=Yd(t,he(e,u));oi(t,d)}),dt(t.eventQueue_,e,[])}}function oS(t){Bs(t,"onDisconnectEvents");const e=na(t),n=ml();nc(t.onDisconnect_,J(),(i,s)=>{const o=ty(i,s,t.serverSyncTree_,e);L_(n,i,o)});let r=[];nc(n,J(),(i,s)=>{r=r.concat(Vs(t.serverSyncTree_,i,s));const o=Yd(t,i);oi(t,o)}),t.onDisconnect_=ml(),dt(t.eventQueue_,J(),r)}function lS(t,e,n){let r;H(e._path)===".info"?r=ac(t.infoSyncTree_,e,n):r=ac(t.serverSyncTree_,e,n),uy(t.eventQueue_,e._path,r)}function np(t,e,n){let r;H(e._path)===".info"?r=kl(t.infoSyncTree_,e,n):r=kl(t.serverSyncTree_,e,n),uy(t.eventQueue_,e._path,r)}function aS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Jk)}function Bs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Te(n,...e)}function cc(t,e,n,r){e&&gi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function dy(t,e,n){return Ld(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function Kd(t,e=t.transactionQueueTree_){if(e||ra(t,e),yi(e)){const n=fy(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&uS(t,Hs(e),n)}else iy(e)&&Zl(e,n=>{Kd(t,n)})}function uS(t,e,n){const r=n.map(u=>u.currentWriteId),i=dy(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];O(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Le(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Bs(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(yn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ra(t,Hd(t.transactionQueueTree_,e)),Kd(t,t.transactionQueueTree_),dt(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)gi(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Fe("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}oi(t,e)}},o)}function oi(t,e){const n=hy(t,e),r=Hs(n),i=fy(t,n);return cS(t,i,r),r}function cS(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Le(n,a.path);let d=!1,c;if(O(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(yn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Xk)d=!0,c="maxretry",i=i.concat(yn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=dy(t,a.path,o);a.currentInputSnapshot=h;const y=e[l].update(h.val());if(y!==void 0){ea("transaction failed: Data returned ",y,a.path);let _=ye(y);typeof y=="object"&&y!=null&&Lt(y,".priority")||(_=_.updatePriority(h.getPriority()));const C=a.currentWriteId,g=na(t),m=ny(_,h,g);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=m,a.currentWriteId=Gd(t),o.splice(o.indexOf(C),1),i=i.concat(Q_(t.serverSyncTree_,a.path,m,a.currentWriteId,a.applyLocally)),i=i.concat(yn(t.serverSyncTree_,C,!0))}else d=!0,c="nodata",i=i.concat(yn(t.serverSyncTree_,a.currentWriteId,!0))}dt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}ra(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)gi(r[l]);Kd(t,t.transactionQueueTree_)}function hy(t,e){let n,r=t.transactionQueueTree_;for(n=H(e);n!==null&&yi(r)===void 0;)r=Hd(r,n),e=ne(e),n=H(e);return r}function fy(t,e){const n=[];return py(t,e,n),n.sort((r,i)=>r.order-i.order),n}function py(t,e,n){const r=yi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Zl(e,i=>{py(t,i,n)})}function ra(t,e){const n=yi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ry(e,n.length>0?n:void 0)}Zl(e,r=>{ra(t,r)})}function Yd(t,e){const n=Hs(hy(t,e)),r=Hd(t.transactionQueueTree_,e);return jk(r,i=>{Ga(t,i)}),Ga(t,r),sy(r,i=>{Ga(t,i)}),n}function Ga(t,e){const n=yi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(yn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ry(e,void 0):n.length=s+1,dt(t.eventQueue_,Hs(e),i);for(let o=0;o<r.length;o++)gi(r[o])}}/**
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
 */function dS(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function hS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const rp=function(t,e){const n=fS(t),r=n.namespace;n.domain==="firebase.com"&&Zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||EE();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new y_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ee(n.pathString)}},fS=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=dS(t.substring(d,c)));const h=hS(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class my{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class gy{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class _y{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class qd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:Cd(this._path)}get ref(){return new Mt(this._repo,this._path)}get _queryIdentifier(){const e=Vf(this._queryParams),n=yd(e);return n==="{}"?"default":n}get _queryObject(){return Vf(this._queryParams)}isEqual(e){if(e=We(e),!(e instanceof qd))return!1;const n=this._repo===e._repo,r=kd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+iC(this._path)}}class Mt extends qd{constructor(e,n){super(e,n,new Nd,!1)}get parent(){const e=N_(this._path);return e===null?null:new Mt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class li{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),r=Sl(this.ref,e);return new li(this._node.getChild(n),r,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new li(i,Sl(this.ref,r),fe)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Wn(t,e){return t=We(t),t._checkNotDeleted("ref"),e!==void 0?Sl(t._root,e):t._root}function Sl(t,e){return t=We(t),H(t._path)===null?Kk("child","path",e,!1):ly("child","path",e,!1),new Mt(t._repo,he(t._path,e))}function pS(t){return ay("remove",t._path),yy(t,null)}function yy(t,e){t=We(t),ay("set",t._path),Bk("set",e,t._path,!1);const n=new Fs;return iS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ia(t,e){Gk("update",e,t._path,!1);const n=new Fs;return sS(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function mS(t){t=We(t);const e=new _y(()=>{}),n=new sa(e);return rS(t._repo,t,n).then(r=>new li(r,new Mt(t._repo,t._path),t._queryParams.getIndex()))}class sa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new my("value",this,new li(e.snapshotNode,new Mt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new gy(this,e,n):null}matches(e){return e instanceof sa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Qd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new gy(this,e,n):null}createEvent(e,n){O(e.childName!=null,"Child events should have a childName.");const r=Sl(new Mt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new my(e.type,this,new li(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Qd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function gS(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{np(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new _y(n,s||void 0),l=e==="value"?new sa(o):new Qd(e,o);return lS(t._repo,t,l),()=>np(t._repo,t,l)}function vy(t,e,n,r){return gS(t,"value",e,n,r)}gk(Mt);Ek(Mt);/**
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
 */const _S="FIREBASE_DATABASE_EMULATOR_HOST",dc={};let yS=!1;function vS(t,e,n,r){t.repoInfo_=new y_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function wS(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=rp(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[_S]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=rp(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new Vr(Vr.OWNER):new OE(t.name,t.options,e);Yk("Invalid Firebase Database URL",o),G(o.path)||Zt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=CS(l,t,d,new AE(t.name,n));return new kS(c,t)}function ES(t,e){const n=dc[e];(!n||n[t.key]!==t)&&Zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),aS(t),delete n[t.key]}function CS(t,e,n,r){let i=dc[e.name];i||(i={},dc[e.name]=i);let s=i[t.toURLString()];return s&&Zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Zk(t,yS,n,r),i[t.toURLString()]=s,s}class kS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(eS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mt(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ES(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Zt("Cannot call "+e+" on a deleted database.")}}function SS(t=t_(),e){const n=gd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Bw("database");r&&IS(n,...r)}return n}function IS(t,e,n,r={}){t=We(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Zt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Vr(Vr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:$w(r.mockUserToken,t.app.options.projectId);s=new Vr(o)}vS(i,e,n,s)}/**
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
 */function TS(t){gE(mi),ti(new ur("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return wS(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Rn(If,Tf,t),Rn(If,Tf,"esm2017")}Kt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Kt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};TS();function Jd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function wy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NS=wy,Ey=new js("auth","Firebase",wy());/**
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
 */const Il=new pd("@firebase/auth");function xS(t,...e){Il.logLevel<=Z.WARN&&Il.warn(`Auth (${mi}): ${t}`,...e)}function Po(t,...e){Il.logLevel<=Z.ERROR&&Il.error(`Auth (${mi}): ${t}`,...e)}/**
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
 */function St(t,...e){throw Xd(t,...e)}function Ot(t,...e){return Xd(t,...e)}function Cy(t,e,n){const r=Object.assign(Object.assign({},NS()),{[e]:n});return new js("auth","Firebase",r).create(e,{appName:t.name})}function Dt(t){return Cy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ey.create(t,...e)}function V(t,e,...n){if(!t)throw Xd(e,...n)}function Ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Po(e),new Error(e)}function en(t,e){t||Ht(e)}/**
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
 */function hc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function RS(){return ip()==="http:"||ip()==="https:"}function ip(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function PS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RS()||Kw()||"connection"in navigator)?navigator.onLine:!0}function AS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $s{constructor(e,n){this.shortDelay=e,this.longDelay=n,en(n>e,"Short delay should be less than long delay!"),this.isMobile=fd()||qg()}get(){return PS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zd(t,e){en(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ky{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const OS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const DS=new $s(3e4,6e4);function Vn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hn(t,e,n,r,i={}){return Sy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=pi(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},s);return Gw()||(u.referrerPolicy="no-referrer"),ky.fetch()(Iy(t,t.config.apiHost,n,l),u)})}async function Sy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},OS),e);try{const i=new LS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw go(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw go(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw go(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw go(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Cy(t,d,u);St(t,d)}}catch(i){if(i instanceof zn)throw i;St(t,"network-request-failed",{message:String(i)})}}async function Gs(t,e,n,r,i={}){const s=await Hn(t,e,n,r,i);return"mfaPendingCredential"in s&&St(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Iy(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Zd(t.config,i):`${t.config.apiScheme}://${i}`}function bS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"network-request-failed")),DS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function go(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ot(t,e,r);return i.customData._tokenResponse=n,i}function sp(t){return t!==void 0&&t.enterprise!==void 0}class MS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return bS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function FS(t,e){return Hn(t,"GET","/v2/recaptchaConfig",Vn(t,e))}/**
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
 */async function jS(t,e){return Hn(t,"POST","/v1/accounts:delete",e)}async function Ty(t,e){return Hn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function es(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function US(t,e=!1){const n=We(t),r=await n.getIdToken(e),i=eh(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:es(Ka(i.auth_time)),issuedAtTime:es(Ka(i.iat)),expirationTime:es(Ka(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ka(t){return Number(t)*1e3}function eh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Po("JWT malformed, contained fewer than 3 sections"),null;try{const i=ll(n);return i?JSON.parse(i):(Po("Failed to decode base64 JWT payload"),null)}catch(i){return Po("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function op(t){const e=eh(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zn&&zS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class WS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=es(this.lastLoginAt),this.creationTime=es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Tl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await xs(t,Ty(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ny(s.providerUserInfo):[],l=HS(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new fc(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function VS(t){const e=We(t);await Tl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ny(t){return t.map(e=>{var{providerId:n}=e,r=Jd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function BS(t,e){const n=await Sy(t,{},async()=>{const r=pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Iy(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ky.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $S(t,e){return Hn(t,"POST","/v2/accounts:revokeToken",Vn(t,e))}/**
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
 */class Br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):op(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){V(e.length!==0,"internal-error");const n=op(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await BS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Br;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Br,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
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
 */function on(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Jd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new WS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await xs(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return US(this,e)}reload(){return VS(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yt(this.auth.app))return Promise.reject(Dt(this.auth));const e=await this.getIdToken();return await xs(this,jS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:E,isAnonymous:A,providerData:b,stsTokenManager:T}=n;V(p&&T,e,"internal-error");const D=Br.fromJSON(this.name,T);V(typeof p=="string",e,"internal-error"),on(c,e.name),on(h,e.name),V(typeof E=="boolean",e,"internal-error"),V(typeof A=="boolean",e,"internal-error"),on(y,e.name),on(_,e.name),on(w,e.name),on(C,e.name),on(g,e.name),on(m,e.name);const $=new Bt({uid:p,auth:e,email:h,emailVerified:E,displayName:c,isAnonymous:A,photoURL:_,phoneNumber:y,tenantId:w,stsTokenManager:D,createdAt:g,lastLoginAt:m});return b&&Array.isArray(b)&&($.providerData=b.map(F=>Object.assign({},F))),C&&($._redirectEventId=C),$}static async _fromIdTokenResponse(e,n,r=!1){const i=new Br;i.updateFromServerResponse(n);const s=new Bt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Tl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];V(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Ny(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Br;l.updateFromIdToken(r);const a=new Bt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new fc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
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
 */const lp=new Map;function $t(t){en(t instanceof Function,"Expected a class definition");let e=lp.get(t);return e?(en(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lp.set(t,e),e)}/**
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
 */class xy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xy.type="NONE";const ap=xy;/**
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
 */function Ao(t,e,n){return`firebase:${t}:${e}:${n}`}class $r{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ao(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ao("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $r($t(ap),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||$t(ap);const o=Ao(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Bt._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new $r(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new $r(s,e,r))}}/**
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
 */function up(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Oy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ry(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(by(e))return"Blackberry";if(Ly(e))return"Webos";if(Py(e))return"Safari";if((e.includes("chrome/")||Ay(e))&&!e.includes("edge/"))return"Chrome";if(Dy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ry(t=je()){return/firefox\//i.test(t)}function Py(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ay(t=je()){return/crios\//i.test(t)}function Oy(t=je()){return/iemobile/i.test(t)}function Dy(t=je()){return/android/i.test(t)}function by(t=je()){return/blackberry/i.test(t)}function Ly(t=je()){return/webos/i.test(t)}function th(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function GS(t=je()){var e;return th(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KS(){return Yw()&&document.documentMode===10}function My(t=je()){return th(t)||Dy(t)||Ly(t)||by(t)||/windows phone/i.test(t)||Oy(t)}/**
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
 */function Fy(t,e=[]){let n;switch(t){case"Browser":n=up(je());break;case"Worker":n=`${up(je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mi}/${r}`}/**
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
 */class YS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function qS(t,e={}){return Hn(t,"GET","/v2/passwordPolicy",Vn(t,e))}/**
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
 */const QS=6;class JS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:QS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class XS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cp(this),this.idTokenSubscription=new cp(this),this.beforeStateQueue=new YS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ey,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$t(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $r.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ty(this,{idToken:e}),r=await Bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yt(this.app))return Promise.reject(Dt(this));const n=e?We(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yt(this.app)?Promise.reject(Dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yt(this.app)?Promise.reject(Dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qS(this),n=new JS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new js("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $S(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$t(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await $r.create(this,[$t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&xS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Bn(t){return We(t)}class cp{constructor(e){this.auth=e,this.observer=null,this.addObserver=r1(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let oa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ZS(t){oa=t}function jy(t){return oa.loadJS(t)}function eI(){return oa.recaptchaEnterpriseScript}function tI(){return oa.gapiScript}function nI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const rI="recaptcha-enterprise",iI="NO_RECAPTCHA";class sI{constructor(e){this.type=rI,this.auth=Bn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{FS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new MS(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;sp(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(iI)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&sp(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=eI();a.length!==0&&(a+=l),jy(a).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function dp(t,e,n,r=!1){const i=new sI(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function pc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await dp(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await dp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function oI(t,e){const n=gd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ul(s,e??{}))return i;St(i,"already-initialized")}return n.initialize({options:e})}function lI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($t);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function aI(t,e,n){const r=Bn(t);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Uy(e),{host:o,port:l}=uI(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||cI()}function Uy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uI(t){const e=Uy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:hp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:hp(o)}}}function hp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class nh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,n){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}}async function dI(t,e){return Hn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function hI(t,e){return Gs(t,"POST","/v1/accounts:signInWithPassword",Vn(t,e))}/**
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
 */async function fI(t,e){return Gs(t,"POST","/v1/accounts:signInWithEmailLink",Vn(t,e))}async function pI(t,e){return Gs(t,"POST","/v1/accounts:signInWithEmailLink",Vn(t,e))}/**
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
 */class Rs extends nh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Rs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Rs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pc(e,n,"signInWithPassword",hI);case"emailLink":return fI(e,{email:this._email,oobCode:this._password});default:St(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pc(e,r,"signUpPassword",dI);case"emailLink":return pI(e,{idToken:n,email:this._email,oobCode:this._password});default:St(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Gr(t,e){return Gs(t,"POST","/v1/accounts:signInWithIdp",Vn(t,e))}/**
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
 */const mI="http://localhost";class fr extends nh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):St("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Jd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gr(e,n)}buildRequest(){const e={requestUri:mI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pi(n)}return e}}/**
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
 */function gI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _I(t){const e=ji(Ui(t)).link,n=e?ji(Ui(e)).deep_link_id:null,r=ji(Ui(t)).deep_link_id;return(r?ji(Ui(r)).link:null)||r||n||e||t}class rh{constructor(e){var n,r,i,s,o,l;const a=ji(Ui(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,c=gI((i=a.mode)!==null&&i!==void 0?i:null);V(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=_I(e);try{return new rh(n)}catch{return null}}}/**
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
 */class vi{constructor(){this.providerId=vi.PROVIDER_ID}static credential(e,n){return Rs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=rh.parseLink(n);return V(r,"argument-error"),Rs._fromEmailAndCode(e,r.code,r.tenantId)}}vi.PROVIDER_ID="password";vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class zy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ks extends zy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hn extends Ks{constructor(){super("facebook.com")}static credential(e){return fr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
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
 */class fn extends Ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
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
 */class pn extends Ks{constructor(){super("github.com")}static credential(e){return fr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
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
 */class mn extends Ks{constructor(){super("twitter.com")}static credential(e,n){return fr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.TWITTER_SIGN_IN_METHOD="twitter.com";mn.PROVIDER_ID="twitter.com";/**
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
 */async function Wy(t,e){return Gs(t,"POST","/v1/accounts:signUp",Vn(t,e))}/**
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
 */class tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Bt._fromIdTokenResponse(e,r,i),o=fp(r);return new tn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=fp(r);return new tn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function fp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function yI(t){var e;if(yt(t.app))return Promise.reject(Dt(t));const n=Bn(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new tn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Wy(n,{returnSecureToken:!0}),i=await tn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Nl extends zn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Nl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Nl(e,n,r,i)}}function Vy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Nl._fromErrorAndOperation(t,s,e,r):s})}async function vI(t,e,n=!1){const r=await xs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tn._forOperation(t,"link",r)}/**
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
 */async function wI(t,e,n=!1){const{auth:r}=t;if(yt(r.app))return Promise.reject(Dt(r));const i="reauthenticate";try{const s=await xs(t,Vy(r,i,e,t),n);V(s.idToken,r,"internal-error");const o=eh(s.idToken);V(o,r,"internal-error");const{sub:l}=o;return V(t.uid===l,r,"user-mismatch"),tn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&St(r,"user-mismatch"),s}}/**
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
 */async function Hy(t,e,n=!1){if(yt(t.app))return Promise.reject(Dt(t));const r="signIn",i=await Vy(t,r,e),s=await tn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function EI(t,e){return Hy(Bn(t),e)}/**
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
 */async function By(t){const e=Bn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function CI(t,e,n){if(yt(t.app))return Promise.reject(Dt(t));const r=Bn(t),o=await pc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Wy).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&By(t),a}),l=await tn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function kI(t,e,n){return yt(t.app)?Promise.reject(Dt(t)):EI(We(t),vi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&By(t),r})}function SI(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function II(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function TI(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function NI(t){return We(t).signOut()}const xl="__sak";/**
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
 */class $y{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xl,"1"),this.storage.removeItem(xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const xI=1e3,RI=10;class Gy extends $y{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=My(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);KS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gy.type="LOCAL";const PI=Gy;/**
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
 */class Ky extends $y{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ky.type="SESSION";const Yy=Ky;/**
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
 */function AI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class la{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new la(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await AI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}la.receivers=[];/**
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
 */function ih(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class OI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=ih("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function bt(){return window}function DI(t){bt().location.href=t}/**
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
 */function qy(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function bI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function MI(){return qy()?self:null}/**
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
 */const Qy="firebaseLocalStorageDb",FI=1,Rl="firebaseLocalStorage",Jy="fbase_key";class Ys{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function aa(t,e){return t.transaction([Rl],e?"readwrite":"readonly").objectStore(Rl)}function jI(){const t=indexedDB.deleteDatabase(Qy);return new Ys(t).toPromise()}function mc(){const t=indexedDB.open(Qy,FI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rl,{keyPath:Jy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rl)?e(r):(r.close(),await jI(),e(await mc()))})})}async function pp(t,e,n){const r=aa(t,!0).put({[Jy]:e,value:n});return new Ys(r).toPromise()}async function UI(t,e){const n=aa(t,!1).get(e),r=await new Ys(n).toPromise();return r===void 0?null:r.value}function mp(t,e){const n=aa(t,!0).delete(e);return new Ys(n).toPromise()}const zI=800,WI=3;class Xy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=la._getInstance(MI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bI(),!this.activeServiceWorker)return;this.sender=new OI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mc();return await pp(e,xl,"1"),await mp(e,xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=aa(i,!1).getAll();return new Ys(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xy.type="LOCAL";const VI=Xy;new $s(3e4,6e4);/**
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
 */function HI(t,e){return e?$t(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class sh extends nh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BI(t){return Hy(t.auth,new sh(t),t.bypassAuthState)}function $I(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),wI(n,new sh(t),t.bypassAuthState)}async function GI(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),vI(n,new sh(t),t.bypassAuthState)}/**
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
 */class Zy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BI;case"linkViaPopup":case"linkViaRedirect":return GI;case"reauthViaPopup":case"reauthViaRedirect":return $I;default:St(this.auth,"internal-error")}}resolve(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const KI=new $s(2e3,1e4);class Dr extends Zy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Dr.currentPopupAction&&Dr.currentPopupAction.cancel(),Dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const e=ih();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KI.get())};e()}}Dr.currentPopupAction=null;/**
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
 */const YI="pendingRedirect",Oo=new Map;class qI extends Zy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oo.get(this.auth._key());if(!e){try{const r=await QI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oo.set(this.auth._key(),e)}return this.bypassAuthState||Oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QI(t,e){const n=ZI(e),r=XI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function JI(t,e){Oo.set(t._key(),e)}function XI(t){return $t(t._redirectPersistence)}function ZI(t){return Ao(YI,t.config.apiKey,t.name)}async function eT(t,e,n=!1){if(yt(t.app))return Promise.reject(Dt(t));const r=Bn(t),i=HI(r,e),o=await new qI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const tT=10*60*1e3;class nT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ev(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tT&&this.cachedEventUids.clear(),this.cachedEventUids.has(gp(e))}saveEventToCache(e){this.cachedEventUids.add(gp(e)),this.lastProcessedEventTime=Date.now()}}function gp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ev({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ev(t);default:return!1}}/**
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
 */async function iT(t,e={}){return Hn(t,"GET","/v1/projects",e)}/**
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
 */const sT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oT=/^https?/;async function lT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iT(t);for(const n of e)try{if(aT(n))return}catch{}St(t,"unauthorized-domain")}function aT(t){const e=hc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!oT.test(n))return!1;if(sT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const uT=new $s(3e4,6e4);function _p(){const t=bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cT(t){return new Promise((e,n)=>{var r,i,s;function o(){_p(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_p(),n(Ot(t,"network-request-failed"))},timeout:uT.get()})}if(!((i=(r=bt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=bt().gapi)===null||s===void 0)&&s.load)o();else{const l=nI("iframefcb");return bt()[l]=()=>{gapi.load?o():n(Ot(t,"network-request-failed"))},jy(`${tI()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Do=null,e})}let Do=null;function dT(t){return Do=Do||cT(t),Do}/**
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
 */const hT=new $s(5e3,15e3),fT="__/auth/iframe",pT="emulator/auth/iframe",mT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _T(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zd(e,pT):`https://${t.config.authDomain}/${fT}`,r={apiKey:e.apiKey,appName:t.name,v:mi},i=gT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${pi(r).slice(1)}`}async function yT(t){const e=await dT(t),n=bt().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:_T(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),l=bt().setTimeout(()=>{s(o)},hT.get());function a(){bt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const vT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wT=500,ET=600,CT="_blank",kT="http://localhost";class yp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ST(t,e,n,r=wT,i=ET){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},vT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=je().toLowerCase();n&&(l=Ay(u)?CT:n),Ry(u)&&(e=e||kT,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[y,_])=>`${h}${y}=${_},`,"");if(GS(u)&&l!=="_self")return IT(e||"",l),new yp(null);const c=window.open(e||"",l,d);V(c,t,"popup-blocked");try{c.focus()}catch{}return new yp(c)}function IT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const TT="__/auth/handler",NT="emulator/auth/handler",xT=encodeURIComponent("fac");async function vp(t,e,n,r,i,s){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:mi,eventId:i};if(e instanceof zy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof Ks){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${xT}=${encodeURIComponent(a)}`:"";return`${RT(t)}?${pi(l).slice(1)}${u}`}function RT({config:t}){return t.emulator?Zd(t,NT):`https://${t.authDomain}/${TT}`}/**
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
 */const Ya="webStorageSupport";class PT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yy,this._completeRedirectFn=eT,this._overrideRedirectResult=JI}async _openPopup(e,n,r,i){var s;en((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await vp(e,n,r,hc(),i);return ST(e,o,ih())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await vp(e,n,r,hc(),i);return DI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(en(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yT(e),r=new nT(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ya,{type:Ya},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ya];o!==void 0&&n(!!o),St(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return My()||Py()||th()}}const AT=PT;var wp="@firebase/auth",Ep="1.7.9";/**
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
 */class OT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function DT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bT(t){ti(new ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fy(t)},u=new XS(r,i,s,a);return lI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ti(new ur("auth-internal",e=>{const n=Bn(e.getProvider("auth").getImmediate());return(r=>new OT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(wp,Ep,DT(t)),Rn(wp,Ep,"esm2017")}/**
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
 */const LT=5*60,MT=Yg("authIdTokenMaxAge")||LT;let Cp=null;const FT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>MT)return;const i=n==null?void 0:n.token;Cp!==i&&(Cp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function jT(t=t_()){const e=gd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=oI(t,{popupRedirectResolver:AT,persistence:[VI,PI,Yy]}),r=Yg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=FT(s.toString());II(n,o,()=>o(n.currentUser)),SI(n,l=>o(l))}}const i=Gg("auth");return i&&aI(n,`http://${i}`),n}function UT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ZS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ot("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",UT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bT("Browser");const zT={apiKey:"AIzaSyAb1mwHVwbxJbbf2WAFlqclFPGRUid4Oeg",authDomain:"link-like-battle.firebaseapp.com",databaseURL:"https://link-like-battle-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"link-like-battle",storageBucket:"link-like-battle.firebasestorage.app",messagingSenderId:"452412670826",appId:"1:452412670826:web:3bcee6fa21c456202a5b13"},tv=e_(zT),$n=SS(tv),qs=jT(tv),WT=async(t,e)=>{const n=Math.random().toString(36).substring(2,6).toUpperCase(),r=Wn($n,`rooms/${n}`),i={status:"waiting",hostName:e||"YOU",roomName:`${e||"名無し"}の部屋`,hostDeck:t,clientName:null,clientDeck:null,gameState:null};return await yy(r,i),n},VT=t=>{const e=Wn($n,"rooms");return vy(e,n=>{const r=n.val(),i=[];r&&Object.keys(r).forEach(s=>{r[s].status==="waiting"&&i.push({id:s,...r[s]})}),t(i)})},HT=async(t,e,n)=>{const r=Wn($n,`rooms/${t}`),i=await mS(r);if(!i.exists())throw new Error("部屋が見つかりません");const s=i.val();if(s.status!=="waiting")throw new Error("募集を終了しています");if(s.clientName)throw new Error("すでに満員です");await ia(r,{clientName:n||"YOU",clientDeck:e})},BT=async t=>{await ia(Wn($n,`rooms/${t}`),{status:"ready"})},$T=async(t,e)=>{await ia(Wn($n,`rooms/${t}`),{status:"playing",gameState:e})},GT=(t,e)=>vy(Wn($n,`rooms/${t}`),n=>{e(n.val())}),_o=async(t,e)=>{await ia(Wn($n,`rooms/${t}`),{gameState:e})},KT=async t=>{await pS(Wn($n,`rooms/${t}`))},YT=async(t,e)=>(await CI(qs,t,e)).user,qT=async(t,e)=>(await kI(qs,t,e)).user,QT=async()=>(await yI(qs)).user,JT=async()=>{await NI(qs)},XT=t=>TI(qs,t),ZT=({playerName:t,setPlayerName:e,setGameMode:n,setScreen:r})=>f.jsxs("div",{className:"home-screen",children:[f.jsxs("div",{className:"title-logo",style:{marginBottom:"2rem",textAlign:"center"},children:[f.jsx("span",{className:"title-link",children:"Link!"}),f.jsx("span",{className:"title-like",children:"Like!"}),f.jsx("span",{className:"title-battle",children:"Battle!"})]}),f.jsx("p",{className:"title-subtitle",children:"究極のスクールアイドルバトル"}),f.jsx("input",{className:"name-input",maxLength:6,value:t,onChange:i=>e(i.target.value),placeholder:"プレイヤー名 (最大6文字)"}),f.jsxs("div",{className:"mode-buttons",children:[f.jsx("button",{className:"title-start-btn",onClick:()=>{n("cpu"),r("deckBuilder")},children:"CPU戦で遊ぶ"}),f.jsx("button",{className:"title-start-btn",style:{background:"var(--secondary)"},onClick:()=>{n("online"),r("deckBuilder")},children:"通信対戦で遊ぶ"})]}),f.jsx("button",{onClick:async()=>{window.confirm(`ログイン画面に戻りますか？
（※ゲストで作成したデータから離れます）`)&&await JT()},style:{position:"absolute",bottom:"16px",right:"16px",padding:"8px 16px",backgroundColor:"transparent",color:"#9ca3af",border:"1px solid #4b5563",borderRadius:"4px",cursor:"pointer",fontSize:"0.875rem"},children:"ログイン / アカウント切替"})]});/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=t=>{const e=tN(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},rN=z.createContext({}),iN=()=>z.useContext(rN),sN=z.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},a)=>{const{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:c=!1,color:h="currentColor",className:y=""}=iN()??{},_=r??c?Number(n??d)*24/Number(e??u):n??d;return z.createElement("svg",{ref:a,...qa,width:e??u??qa.width,height:e??u??qa.height,stroke:t??h,strokeWidth:_,className:nv("lucide",y,i),...!s&&!nN(l)&&{"aria-hidden":"true"},...l},[...o.map(([w,C])=>z.createElement(w,C)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=(t,e)=>{const n=z.forwardRef(({className:r,...i},s)=>z.createElement(sN,{ref:s,iconNode:e,className:nv(`lucide-${eN(kp(t))}`,`lucide-${t}`,r),...i}));return n.displayName=kp(t),n};/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]],lN=It("flag",oN);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]],Ps=It("heart-pulse",aN);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],cN=It("layers",uN);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dN=[["path",{d:"M5 12h14",key:"1ays0h"}]],Sp=It("minus",dN);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],fN=It("play",hN);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ip=It("plus",pN);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],ai=It("shield",mN);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],rv=It("smartphone",gN);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]],As=It("swords",_N);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yN=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],iv=It("trash-2",yN);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ui=It("zap",vN);function rr(t){return t?t.includes("スリーズブーケ")&&t.includes("DOLLCHESTRA")&&t.includes("みらくらぱーく")?"linear-gradient(135deg, #ffd6e0, #c5d8f0, #fff0b3)":t.includes("スリーズブーケ")&&!t.includes("DOLLCHESTRA")&&!t.includes("みらくらぱーく")?"#ffd6e0":t.includes("DOLLCHESTRA")?"#c5d8f0":t.includes("みらくらぱーく")?"#fff0b3":"#EEEEEE":"#c8c8c8"}const ts=({card:t})=>f.jsxs("div",{className:"card-standard",style:{background:rr(t==null?void 0:t.歌唱)},children:[f.jsx("div",{className:"card-cost",children:t==null?void 0:t.コスト}),f.jsx("div",{className:"card-title",children:t==null?void 0:t.曲名}),f.jsxs("div",{className:"card-stats",children:[(t==null?void 0:t.パワー)&&f.jsxs("span",{className:"stat-power",children:[f.jsx(As,{size:12}),t.パワー]}),(t==null?void 0:t.シールド)&&f.jsxs("span",{className:"stat-shield",children:[f.jsx(ai,{size:12}),t.シールド]}),(t==null?void 0:t.ヒール)&&f.jsxs("span",{className:"stat-heal",children:[f.jsx(Ps,{size:12}),t.ヒール]}),(t==null?void 0:t.ダメージ)&&f.jsxs("span",{className:"stat-damage",children:[f.jsx(ui,{size:12}),t.ダメージ]})]}),f.jsx("div",{className:"card-effect",children:t==null?void 0:t.効果1})]}),wN=({card:t,owner:e})=>f.jsxs("div",{className:"card-mini",style:{background:rr(t==null?void 0:t.歌唱),border:`1px solid ${e==="player"?"#0099aa":"#cc3333"}`},children:[f.jsx("div",{className:"card-mini-title",children:t==null?void 0:t.曲名}),f.jsx("div",{className:"card-mini-center",children:t==null?void 0:t.センター}),f.jsxs("div",{className:"card-mini-footer",children:["Cost: ",t==null?void 0:t.コスト]}),f.jsx("div",{className:"card-mini-effect",children:t==null?void 0:t.効果1})]}),Qa=cd,EN=({gameMode:t,setScreen:e,deckTotal:n,selectedUnit:r,setSelectedUnit:i,manaCurve:s,maxManaCount:o,handleDeckComplete:l,loadStarterDeck:a,deckList:u,setDeckList:d,availableCards:c,selectedCard:h,setSelectedCard:y,removeCardFromDeck:_,addCardToDeck:w})=>f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"orientation-warning",children:[f.jsx(rv,{size:64}),f.jsx("h2",{style:{marginTop:"1rem"},children:"画面を横向きにしてください"}),f.jsx("p",{children:"このゲームは横画面専用です"})]}),f.jsxs("div",{className:"deck-builder-screen",children:[f.jsxs("div",{className:"deck-builder-sticky-header",style:{position:"sticky",top:0,background:"#fff",zIndex:1e3,paddingBottom:"4px",borderBottom:"1px solid #eee"},children:[f.jsxs("div",{className:"deck-builder-header",style:{padding:"0.2rem 1rem"},children:[f.jsx("button",{className:"back-btn",onClick:()=>e("home"),style:{padding:"0.1rem 0.4rem"},children:"← ホーム"}),f.jsxs("h1",{className:"deck-builder-title",style:{fontSize:"0.9rem"},children:["デッキ作成 (",t==="cpu"?"CPU戦":"通信対戦",")"]}),f.jsxs("div",{className:"deck-counter",style:{padding:"0.1rem 0.6rem",fontSize:"0.8rem"},children:[n," / 30"]})]}),f.jsxs("div",{className:"unit-select-area",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.2rem 1rem",gap:"0.5rem"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.2rem",flexShrink:0},children:[f.jsx("span",{className:"unit-label",style:{fontSize:"0.75rem"},children:"基本ユニット:"}),["スリーズブーケ","DOLLCHESTRA","みらくらぱーく！"].map(C=>f.jsx("button",{className:`unit-btn ${r===C?"active":""}`,style:{background:C==="スリーズブーケ"?"#ffd6e0":C==="DOLLCHESTRA"?"#c5d8f0":"#fff0b3",padding:"0.2rem 0.4rem",fontSize:"0.65rem"},onClick:()=>{r!==C&&n>0&&!window.confirm("基本ユニットを変更するとデッキがリセットされます。よろしいですか？")||(i(C),d({}))},children:C},C))]}),f.jsx("div",{className:"mana-curve-wrapper",style:{flex:1,maxWidth:"180px",margin:"0"},children:f.jsx("div",{className:"mana-curve",style:{height:"30px",padding:0},children:s.map((C,g)=>f.jsxs("div",{className:"mana-bar-container",style:{width:"12%"},children:[f.jsxs("div",{className:"mana-bar-bg",style:{background:"#e2e8f0"},children:[C>0&&f.jsx("span",{className:"mana-bar-count",style:{fontSize:"0.5rem",bottom:"1px"},children:C}),f.jsx("div",{className:"mana-bar-fill",style:{height:`${o>0?C/o*100:0}%`}})]}),f.jsx("span",{className:"mana-label",style:{fontSize:"0.45rem",marginTop:"1px"},children:g===7?"7+":g})]},g))})}),f.jsx("div",{style:{flexShrink:0},children:f.jsx("button",{className:`battle-start-btn ${n===30?"ready":""}`,disabled:n!==30,onClick:l,style:{width:"auto",padding:"0.3rem 0.8rem",fontSize:"0.8rem"},children:t==="cpu"?"バトル開始":"ロビーへ進む"})})]}),r&&f.jsxs("div",{className:"starter-deck-area",style:{padding:"0 1rem 0.2rem",gap:"0.4rem",justifyContent:"flex-start"},children:[f.jsx("button",{className:"starter-btn",onClick:a,style:{padding:"0.2rem 0.6rem",fontSize:"0.7rem"},children:"スターターデッキを読み込む"}),f.jsx("button",{className:"clear-btn",onClick:()=>d({}),style:{padding:"0.2rem 0.6rem",fontSize:"0.7rem"},children:"クリア"})]})]}),r&&f.jsxs("div",{className:"deck-builder-body",children:[f.jsxs("div",{className:"card-pool",children:[f.jsx("h3",{className:"pool-title",children:"カードプール"}),f.jsx("div",{className:"pool-list",children:c.map((C,g)=>{const m=u[C.曲名]||0,p=m<3&&n<30;return f.jsxs("div",{className:"pool-card",style:{background:rr(C.歌唱)},onClick:()=>y(C),children:[f.jsxs("div",{className:"pool-card-info",children:[f.jsx("span",{className:"pool-card-cost",children:C.コスト}),f.jsx("span",{className:"pool-card-name",children:C.曲名})]}),f.jsxs("div",{className:"pool-card-tags",children:[f.jsx("span",{className:"pool-card-unit",children:C.歌唱==="蓮ノ空女学院スクールアイドルクラブ"?"蓮ノ空":C.歌唱}),f.jsx("span",{className:"pool-card-center",children:C.センター})]}),f.jsxs("div",{className:"pool-card-stats",children:[C.パワー&&f.jsxs("span",{className:"stat-power",children:[f.jsx(As,{size:10}),C.パワー]}),C.シールド&&f.jsxs("span",{className:"stat-shield",children:[f.jsx(ai,{size:10}),C.シールド]}),C.ヒール&&f.jsxs("span",{className:"stat-heal",children:[f.jsx(Ps,{size:10}),C.ヒール]}),C.ダメージ&&f.jsxs("span",{className:"stat-damage",children:[f.jsx(ui,{size:10}),C.ダメージ]})]}),f.jsxs("div",{className:"pool-card-controls",children:[f.jsx("button",{className:"pool-btn remove",onClick:E=>{E.stopPropagation(),_(C.曲名)},disabled:m===0,children:f.jsx(Sp,{size:14})}),f.jsx("span",{className:"pool-count",children:m}),f.jsx("button",{className:"pool-btn add",onClick:E=>{E.stopPropagation(),w(C.曲名)},disabled:!p,children:f.jsx(Ip,{size:14})})]})]},g)})})]}),f.jsxs("div",{className:"deck-preview",children:[f.jsxs("h3",{className:"pool-title",children:["デッキ内容 (",n,"/30)"]}),f.jsxs("div",{className:"deck-list",children:[Object.entries(u).sort((C,g)=>{const m=Qa.find(E=>E.曲名===C[0]),p=Qa.find(E=>E.曲名===g[0]);return(Number(m==null?void 0:m.コスト)||0)-(Number(p==null?void 0:p.コスト)||0)}).map(([C,g])=>{const m=Qa.find(p=>p.曲名===C);return f.jsxs("div",{className:"deck-item",style:{borderLeft:`4px solid ${m?rr(m.歌唱)==="#d0d0d0"?"#999":rr(m.歌唱).replace("linear-gradient(135deg, ","").split(",")[0]:"#999"}`},onClick:()=>y(m),children:[f.jsxs("div",{className:"deck-item-left",children:[f.jsx("span",{className:"deck-item-cost",children:m==null?void 0:m.コスト}),f.jsxs("div",{className:"deck-item-details",children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[f.jsx("span",{className:"deck-item-name",children:C}),f.jsx("span",{style:{fontSize:"0.6rem",color:"#666"},children:m==null?void 0:m.センター})]}),f.jsxs("div",{className:"deck-item-stats",children:[(m==null?void 0:m.パワー)&&f.jsxs("span",{className:"stat-power",children:[f.jsx(As,{size:8}),m.パワー]}),(m==null?void 0:m.シールド)&&f.jsxs("span",{className:"stat-shield",children:[f.jsx(ai,{size:8}),m.シールド]}),(m==null?void 0:m.ヒール)&&f.jsxs("span",{className:"stat-heal",children:[f.jsx(Ps,{size:8}),m.ヒール]}),(m==null?void 0:m.ダメージ)&&f.jsxs("span",{className:"stat-damage",children:[f.jsx(ui,{size:8}),m.ダメージ]})]})]})]}),f.jsxs("div",{className:"deck-item-right",children:[f.jsxs("span",{className:"deck-item-count",children:["×",g]}),f.jsxs("div",{style:{display:"flex",gap:"4px"},children:[f.jsx("button",{className:"deck-item-remove",style:{background:"#38a169"},onClick:p=>{p.stopPropagation(),w(C)},disabled:g>=3||n>=30,children:f.jsx(Ip,{size:12})}),f.jsx("button",{className:"deck-item-remove",onClick:p=>{p.stopPropagation(),_(C)},children:f.jsx(Sp,{size:12})})]})]})]},C)}),n===0&&f.jsx("div",{className:"deck-empty",children:"カードを追加してください"})]})]})]}),h&&f.jsx("div",{className:"modal-overlay",onClick:()=>y(null),children:f.jsx("div",{className:"modal-content",style:{maxWidth:"350px",transform:"scale(1.4)",display:"flex",justifyContent:"center",alignItems:"center",background:"transparent",border:"none",boxShadow:"none"},children:f.jsx(ts,{card:h})})})]})]}),CN=({roomsList:t,handleCreateRoom:e,handleJoinRoom:n,setScreen:r})=>f.jsxs("div",{className:"lobby-screen",children:[f.jsx("h2",{style:{fontSize:"2rem",marginBottom:"1rem",color:"var(--secondary)",fontFamily:"Outfit"},children:"ROOMLIST"}),f.jsx("button",{className:"title-start-btn",style:{marginBottom:"1rem"},onClick:e,children:"部屋を作る"}),f.jsx("div",{className:"room-list",children:t.length===0?f.jsx("p",{style:{textAlign:"center",color:"#666"},children:"現在、待機中の部屋はありません。"}):t.map(i=>f.jsxs("div",{className:"room-item",children:[f.jsx("span",{children:i.roomName}),f.jsx("button",{className:"room-join-btn",onClick:()=>n(i.id),children:"入る"})]},i.id))}),f.jsx("button",{style:{marginTop:"2rem",padding:"10px",background:"none",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},onClick:()=>r("deckBuilder"),children:"戻る"})]}),kN=({isHost:t,playerName:e,roomData:n,roomId:r,handleHostStartGame:i})=>f.jsx("div",{className:"waiting-screen",children:f.jsxs("div",{className:"waiting-box",children:[f.jsx("h2",{style:{fontSize:"1.5rem",marginBottom:"1rem",color:"#333"},children:t?"あなたの部屋":"通信待機室"}),f.jsx("div",{className:"vs-text",children:t?e||"YOU":n==null?void 0:n.hostName}),f.jsx("div",{style:{fontWeight:"bold",color:"#666"},children:"VS"}),f.jsx("div",{className:"vs-text",children:t?(n==null?void 0:n.clientName)||"待機中...":e||"YOU"}),f.jsx("div",{style:{marginTop:"2rem"},children:t?(n==null?void 0:n.status)==="ready"?f.jsx("button",{className:"title-start-btn",onClick:i,children:"バトル開始"}):f.jsx("p",{style:{color:"#666"},children:"相手の準備を待っています..."}):(n==null?void 0:n.status)==="waiting"?f.jsx("button",{className:"title-start-btn",style:{background:"#10b981"},onClick:()=>BT(r),children:"準備OK"}):f.jsx("p",{style:{color:"#666"},children:"ホストの開始を待っています..."})})]})});function br(t,e){var c;let n=Number(t.コスト)||0;const r=t.効果1||"",i=t.効果2||"",s=r+`
`+i;if(s.includes("ターン中に使用したカードの枚数分小さくなる")){const h=e.buffs.turnCardsPlayed.length;n-=h}e.buffs.onyourmark102Active&&["乙宗 梢","夕霧 綴理","藤島 慈"].includes(t.センター)&&(n-=2),e.buffs.nextCardCostDown&&(n-=e.buffs.nextCardCostDown),t.costModifier&&(n+=t.costModifier);const o=s.match(/手札が(\d+)枚以上の時、コストを(\d+)にする/);o&&e.hand.length>=parseInt(o[1],10)&&(n=parseInt(o[2],10));const l=s.match(/ユニットが「(.+?)」のカードを使用している場合、コストを(\d+)にする/);if(l){const h=l[1];((c=e.buffs.turnCardsPlayedDetails)==null?void 0:c.some(_=>_.歌唱&&_.歌唱.includes(h)))&&(n=parseInt(l[2],10))}const a=s.match(/ボルテージが(\d+)以上の時、コストを(\d+)にする/);if(a){const h=parseInt(a[1],10);e.maxVoltage>=h&&(n=parseInt(a[2],10))}const u=s.match(/手札が(\d+)枚以下の時、コストを(\d+)にする/);u&&e.hand.length<=parseInt(u[1],10)&&(n=parseInt(u[2],10)),s.includes("ダメージを受けた回数の分コストを減らす")&&(n-=e.buffs.tookDamageCount||0);const d=s.match(/既にダメージを受けている場合、コストを(\d+)にする/);return d&&e.buffs.tookDamageThisTurn&&(n=parseInt(d[1],10)),Math.max(0,n)}function ln(t){if(t.deck.length===0)return t.hp=0,{success:!1,deckOut:!0};const e=t.deck.shift();return t.hand.length>=8?(t.discard.push(e),{success:!0,card:e,overdrawn:!0}):(t.hand.push(e),{success:!0,card:e,overdrawn:!1})}function SN(t){if(t.hand.length===0)return null;const e=Math.floor(Math.random()*t.hand.length),n=t.hand.splice(e,1)[0];return t.discard.push(n),n}function IN(t,e,n){const r=JSON.parse(JSON.stringify(t)),i=n?r.player:r.enemy,s=n?r.enemy:r.player,o=[],l=(p,E)=>o.push({type:p,data:E,isPlayer:n}),a=i.buffs.kozueDrawActive,u=i.buffs.sayakaDmgActive,d=p=>{for(let E=0;E<p;E++){const A=ln(i);A.overdrawn&&A.card?l("overdraw",{card:A.card}):A.success&&l("draw",{count:1})}},c=p=>{var Ft,ht;if(!p)return;const E=p.match(/このターン中、(.+?)が「(.+?)」のカードを使用している場合、(.+)/);if(E){const L=E[1],N=E[2],v=E[3];((Ft=i.buffs.turnCardsPlayedDetails)==null?void 0:Ft.some(S=>S.uid===e.id?!1:L.includes("センター")||L.includes("キャラクター")?S.センター&&S.センター.includes(N):L.includes("ユニット")||L.includes("歌唱")?S.歌唱&&S.歌唱.includes(N):L.includes("カード名")||L.includes("名前")?S.曲名&&S.曲名.includes(N):!1))&&c(v)}const A=p.match(/このターン中、「(.+?)」のカードを使用している場合、(.+)/);if(!E&&A){const L=A[1],N=A[2];((ht=i.buffs.turnCardsPlayedDetails)==null?void 0:ht.some(k=>k.uid===e.id?!1:k.センター&&k.センター.includes(L)||k.歌唱&&k.歌唱.includes(L)||k.曲名&&k.曲名.includes(L)))&&c(N)}const b=p.match(/ボルテージが(\d+)以上の時/);if(b){const L=parseInt(b[1],10);if(i.maxVoltage<L)return}const T=p.match(/ボルテージが(\d+)以下の時/);if(T){const L=parseInt(T[1],10);if(i.maxVoltage>L)return}const D=p.match(/手札が(\d+)枚以下の時/);if(D){const L=parseInt(D[1],10);if(i.hand.length+1>L)return}const $=p.match(/手札が(\d+)枚以上の時/);if($){const L=parseInt($[1],10);if(i.hand.length+1<L)return}const F=p.match(/体力が(\d+)以下の時/);if(F){const L=parseInt(F[1],10);if(i.hp>L)return}if(p.includes("ターン終了時")||p.includes("このターンの最後に使用した時")){i.buffs.queuedEndTurnEffects||(i.buffs.queuedEndTurnEffects=[]);const L=p.includes("最後に使用した時");if(p.includes("残りボルテージの数だけカードを引く"))i.buffs.queuedEndTurnEffects.push({type:"draw_voltage",isLast:L});else if(p.includes("をドローする")){const N=p.match(/「(.+?)」をドローする/);i.buffs.queuedEndTurnEffects.push({type:"draw_specific",name:N?N[1]:null,isLast:L})}else p.includes("3ヒールする")&&i.buffs.queuedEndTurnEffects.push({type:"heal",value:3,isLast:L});return}if(p.includes("使用したカードの数だけ相手にダメージを与える")){const L=i.buffs.turnCardsPlayed.length;L>0&&h(s,L,l,"kokon_tozai",n)}if(p.includes("次の相手のターン、相手のボルテージが3になる")&&(i.buffs.setEnemyVoltage3=!0),p.includes("センターが「乙宗 梢」「夕霧 綴理」「藤島 慈」いずれかのカードを使用する度にコストを2減らす")&&(i.buffs.onyourmark102Active=!0),p.includes("付与されているシールドの分相手にダメージを与え、シールドを0にする")){const L=i.shield;L>0&&(h(s,L,l,"shield_bash",n),i.shield=0)}const ge=p.match(/相手に(\d+)ダメージ/);if(ge){const L=parseInt(ge[1],10);h(s,L,l,"direct",n)}p.includes("このカードを使用した時、ターンエンドする")&&(r.forceTurnEnd=!0);const Ve=p.match(/ボルテージを(\d+)回復/);if(Ve){const L=parseInt(Ve[1],10);i.currentVoltage=Math.min(i.maxVoltage,i.currentVoltage+L),l("voltage",{value:L})}if(p.includes("シールドを3付与する")&&(i.shield+=3,l("shield",{value:3})),p.includes("ダメージを受けた回数の分ヒールする")){const L=i.buffs.tookDamageCount||0;L>0&&(i.hp=Math.min(i.maxHp,i.hp+L),l("heal",{value:L}))}else p.includes("3ヒールする")&&!p.includes("最後に使用")?(i.hp=Math.min(i.maxHp,i.hp+3),l("heal",{value:3})):p.includes("2ヒールする")&&!p.includes("最初に使用")&&(i.hp=Math.min(i.maxHp,i.hp+2),l("heal",{value:2}));if(p.includes("捨札からコスト4以下のカードを使用する")||p.includes("捨札からコスト4以下のカードを")){const L=i.discard.filter(N=>(Number(N.コスト)||0)<=4&&N.id!==e.id);if(L.length>0)if(n)l("discard_select",{maxCost:4,reason:"dear_my_future",excludeId:e.id});else{const N=Math.floor(Math.random()*L.length),v=L[N],k=i.discard.indexOf(v);k!==-1&&(i.discard.splice(k,1),i.discard.push(v),l("draw",{name:v.曲名,reason:"dear_my_future_cpu"}))}}if(p.includes("ダメージを受けるたびに相手に1ダメージ")&&(i.buffs.damageReflectionActive=!0),p.includes("次に使用するカードのパワーが2倍になる")&&(i.buffs.doubleNextPower=!0),p.includes("既にダメージを7以上受けている場合、相手は次のターンドローできない")&&(i.buffs.tookDamageAmount||0)>=7&&(s.buffs.cannotDrawNextTurn=!0),p.includes("手札を全て捨て、カードを3枚引く")){for(;i.hand.length>0;){const L=i.hand.shift();i.discard.push(L),l("discard",{card:L})}d(3)}if(p.includes("みらくらぱーく！」のカードをランダムに1枚選び、コストを1下げる")){const L=i.hand.filter(N=>N.歌唱&&N.歌唱.includes("みらくらぱーく"));if(L.length>0){const N=L[Math.floor(Math.random()*L.length)];N.costModifier=(N.costModifier||0)-1,l("buff",{name:"cost_down",target:N.曲名})}}if(p.includes("ボルテージが4以下の時、このカードの効果を2倍にする")&&(i.buffs.doubleThisCard=!0),p.includes("カードを使用する度にシールドを1付与する")&&(i.buffs.shieldOnPlayActive=!0),p.includes("ユニットが「DOLLCHESTRA」のカードを2枚引く"))for(let L=0;L<2;L++){const N=i.deck.findIndex(v=>v.歌唱&&v.歌唱.includes("DOLLCHESTRA"));if(N!==-1){const[v]=i.deck.splice(N,1);i.hand.length>=8?(i.discard.push(v),l("overdraw",{card:v})):(i.hand.push(v),l("draw",{count:1}))}}p.includes("センターが「乙宗 梢」のカードを使用する度にカードを1枚引く")&&(i.buffs.kozueDrawActive=!0),(p.includes("センターが「村野 さやか」のカードを使用したとき、相手に3ダメージ")||p.includes("センターが「村野さやか」のカードを使用したとき、相手に3ダメージ"))&&(i.buffs.sayakaDmgActive=!0);const qe=p.match(/次に使用するカードのコストを(\d+)下げる/);if(qe&&(i.buffs.nextCardCostDown=(i.buffs.nextCardCostDown||0)+parseInt(qe[1],10)),(p.includes("次に使用するシールドかダメージ効果を2倍にする")||p.includes("次に使用するシールドかヒール効果を2倍にする"))&&(i.buffs.doubleNextEffect=!0),p.includes("カードを2枚引く")&&!p.includes("ユニットが")?d(2):p.includes("カードを1枚引く")&&!p.includes("ユニットが")&&!p.includes("Junction")&&!p.includes("使用する度に")&&d(1),p.includes("をドローする")&&!p.includes("ターン終了時")&&!p.includes("最後に使用した時")&&d(1),p.includes("手札をランダムに1枚捨てる")||p.includes("手札から1枚選び捨てる")){const L=SN(i);L&&l("discard",{card:L})}p.includes("このターン中、自分へのダメージが0になる")&&(i.buffs.damageImmune=!0),p.includes("SPを回復する")&&(i.specialUsed=!1,l("sp_recover",{}));const Tt=p.match(/このターンの最初に使用した(?:時|場合)、(\d+)ヒールする/);if(Tt&&i.buffs.turnCardsPlayed.length===1){const L=parseInt(Tt[1],10);i.hp=Math.min(i.maxHp,i.hp+L),l("heal",{value:L,reason:"opening"})}p.includes("このターン中、受けるダメージを2倍にする")&&(i.buffs.doubleDamageTakenThisTurn=!0)};function h(p,E,A,b,T){let D=E;p.buffs.doubleDamageTakenThisTurn&&(D*=2);let $=D;if(p.shield>0){const F=Math.min(p.shield,D);p.shield-=F,D-=F}D>0&&(p.hp-=D,p.buffs.tookDamageThisTurn=!0,p.buffs.tookDamageAmount=(p.buffs.tookDamageAmount||0)+D),A("damage",{value:D,originalValue:$,target:T?"enemy":"player",type:b})}i.buffs.shieldOnPlayActive&&(i.shield+=1,l("shield",{value:1,reason:"colorfulness"}));const y=i.buffs.doubleNextEffect;let _=!1;const w=Number(e.ダメージ)||0;if(w>0&&!i.buffs.damageImmune){const p=y?w*2:w;y&&(_=!0),i.hp-=p,i.buffs.tookDamageThisTurn=!0,i.buffs.tookDamageAmount=(i.buffs.tookDamageAmount||0)+p,i.buffs.tookDamageCount=(i.buffs.tookDamageCount||0)+1,l("damage_self",{value:p}),i.buffs.damageReflectionActive&&h(s,1,l,"reflection",n)}let C=Number(e.ヒール)||0;i.buffs.doubleThisCard&&(C*=2),C>0&&(i.hp=Math.min(i.maxHp,i.hp+C),l("heal",{value:C})),c(e.効果1),c(e.効果2);let g=Number(e.パワー)||0;if(i.buffs.doubleThisCard&&(g*=2),g>0){let p=g;i.buffs.doubleNextPower&&(p*=2,i.buffs.doubleNextPower=!1),h(s,p,l,"attack",n)}let m=Number(e.シールド)||0;return i.buffs.doubleThisCard&&(m*=2),m>0&&(y&&!_&&(m*=2,_=!0),i.shield+=m,l("shield",{value:m})),_&&(i.buffs.doubleNextEffect=!1),i.buffs.doubleThisCard=!1,a&&e.センター.includes("乙宗 梢")&&d(1),u&&(e.センター.includes("村野さやか")||e.センター.includes("村野 さやか"))&&h(s,3,l,"sayaka",n),{newState:r,events:o}}const TN=[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],NN=[0,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],xN=t=>t%2===1?1:0,RN=t=>t%2===0?1:0;function Ja(t,e){const n=t?TN:NN;return e>=n.length?10:n[e]}function Xa(t,e){return t?xN(e):RN(e)}const PN=({gameState:t,setGameState:e,gameMode:n,isHost:r,syncDB:i})=>{var F,ge,Ve,qe,Tt,Ft,ht,L,N;const[s,o]=z.useState([]),[l,a]=z.useState({show:!1,owner:null}),[u,d]=z.useState([]),[c,h]=z.useState(null),y=z.useRef(null);z.useEffect(()=>{if(!(!t||t.battleResult||t.isCoinFlipPhase)&&(t.player.hp<=0||t.enemy.hp<=0)){const v=setTimeout(()=>{e(k=>{if(k.battleResult)return k;let S=null;if(k.player.hp<=0&&k.enemy.hp<=0?S="DRAW":k.enemy.hp<=0?S="WIN":k.player.hp<=0&&(S="LOSE"),!S)return k;const I={...k,battleResult:S};return n==="online"&&i(I),I})},500);return()=>clearTimeout(v)}},[(F=t==null?void 0:t.player)==null?void 0:F.hp,(ge=t==null?void 0:t.enemy)==null?void 0:ge.hp,t==null?void 0:t.battleResult,t==null?void 0:t.isCoinFlipPhase,n,e]);const _=(v,k)=>{const S=Math.random();d(I=>[...I,{id:S,card:v,isPlayer:k}]),setTimeout(()=>{d(I=>I.filter(P=>P.id!==S))},1500)};z.useEffect(()=>{if(t&&t.isCoinFlipPhase){if(n==="online"&&!r)return;setTimeout(()=>{const v=Math.random()>.5,k=Ja(v,1),S=Ja(!v,1),I=Xa(v,1),P=Xa(!v,1);e(R=>{if(!R)return R;const j={...R.player,isFirstPlayer:v,maxVoltage:k,currentVoltage:k,deck:[...R.player.deck],hand:[...R.player.hand],discard:[...R.player.discard]},U={...R.enemy,isFirstPlayer:!v,maxVoltage:S,currentVoltage:S,deck:[...R.enemy.deck],hand:[...R.enemy.hand],discard:[...R.enemy.discard]};for(let le=0;le<I;le++){const nt=ln(j);nt.overdrawn&&nt.card&&setTimeout(()=>_(nt.card,!0),le*300)}for(let le=0;le<P;le++){const nt=ln(U);nt.overdrawn&&nt.card&&setTimeout(()=>_(nt.card,!1),le*300)}const Y={...R,turn:1,isCoinFlipPhase:!1,isPlayerTurn:v,turnBanner:v?"YOU FIRST!":n==="cpu"?"CPU FIRST!":"ENEMY FIRST!",player:j,enemy:U};return n==="online"&&r&&i(Y),Y})},2e3)}},[t==null?void 0:t.isCoinFlipPhase,n,r,e]),z.useEffect(()=>{t&&!t.isCoinFlipPhase&&t.turnBanner&&setTimeout(()=>{e(v=>v&&{...v,turnBanner:null})},2e3)},[t==null?void 0:t.turnBanner,t==null?void 0:t.isCoinFlipPhase,e]);const w=(v,k,S,I="#ef4444",P="damage-text")=>{const R=Math.random();o(j=>[...j,{id:R,x:v,y:k,text:S,color:I,cssClass:P}]),setTimeout(()=>{o(j=>j.filter(U=>U.id!==R))},1200)},C=(v,k,S)=>{w(v,k,S,"#3b82f6","draw-effect-text")},g=v=>{e(k=>({...k,animations:{...k.animations,[`${v}Shake`]:!0}})),setTimeout(()=>{e(k=>({...k,animations:{...k.animations,[`${v}Shake`]:!1}}))},500)},m=v=>{e(k=>{const S=k.turn+1,I=v?k.enemy:k.player,P={...I,buffs:{...I.buffs,damageImmune:!1,kozueDrawActive:!1,sayakaDmgActive:!1,doubleNextEffect:!1,onyourmark102Active:!1,yupYupYupActive:!1,damageReflectionActive:!1,tookDamageThisTurn:!1,tookDamageAmount:0,tookDamageCount:0,turnCardsPlayed:[],turnCardsPlayedDetails:[]}},R=v?k.player:k.enemy,j=R.isFirstPlayer===!0,U=Ja(j,S),Y=Xa(j,S);let le={...R,maxVoltage:U,currentVoltage:U,deck:[...R.deck],hand:[...R.hand],discard:[...R.discard],buffs:{...R.buffs,damageImmune:!1,kozueDrawActive:!1,sayakaDmgActive:!1,doubleNextEffect:!1,onyourmark102Active:!1,yupYupYupActive:!1,damageReflectionActive:!1,tookDamageThisTurn:!1,tookDamageAmount:0,nextCardCostDown:0,turnCardsPlayed:[],turnCardsPlayedDetails:[]}};if(le.buffs.cannotDrawNextTurn){le.buffs.cannotDrawNextTurn=!1;const Q={...k,isPlayerTurn:v,turnBanner:v?"YOUR TURN (NO DRAW)":n==="cpu"?"CPU TURN (NO DRAW)":"ENEMY TURN (NO DRAW)",setlist:[],enemyPlayedCard:null,player:v?le:P,enemy:v?P:le,turn:S};return n==="online"&&i&&i(Q),Q}P.buffs.setEnemyVoltage3&&(le.currentVoltage=3,P.buffs.setEnemyVoltage3=!1);for(let Q=0;Q<Y;Q++){const rn=ln(le);rn.overdrawn&&rn.card&&setTimeout(()=>_(rn.card,v),Q*300)}const nt={...k,isPlayerTurn:v,turnBanner:v?"YOUR TURN":n==="cpu"?"CPU TURN":"ENEMY TURN",setlist:[],enemyPlayedCard:null,player:v?le:P,enemy:v?P:le,turn:S};return n==="online"&&i&&i(nt),nt})},p=()=>{!t.isPlayerTurn||t.player.hp<=0||t.enemy.hp<=0||(t.player.buffs.yupYupYupActive&&e(v=>{const k={...v,player:{...v.player,hand:[...v.player.hand],deck:[...v.player.deck],discard:[...v.player.discard]}};for(let S=0;S<v.player.currentVoltage;S++){const I=ln(k.player);I.overdrawn&&I.card&&setTimeout(()=>_(I.card,!0),S*200)}return k}),e(v=>{const k=v.player.buffs.queuedEndTurnEffects;if(!k||k.length===0)return v;const S={...v.player,deck:[...v.player.deck],hand:[...v.player.hand],discard:[...v.player.discard],buffs:{...v.player.buffs,queuedEndTurnEffects:[]}};return k.forEach(I=>{if(I.type==="draw_voltage")for(let P=0;P<S.currentVoltage;P++){const R=ln(S);R.overdrawn&&R.card&&setTimeout(()=>_(R.card,!0),P*200)}else if(I.type==="draw_specific"&&I.name){const P=S.deck.findIndex(R=>R.曲名===I.name);if(P!==-1){const[R]=S.deck.splice(P,1);R&&(S.hand.length>=8?(S.discard.push(R),setTimeout(()=>_(R,!0),300)):S.hand.push(R))}else{const R=S.discard.findIndex(j=>j.曲名===I.name);if(R!==-1){const[j]=S.discard.splice(R,1);j&&(S.hand.length>=8?(S.discard.push(j),setTimeout(()=>_(j,!0),300)):S.hand.push(j))}}}else I.type==="heal"&&I.value&&(S.hp=Math.min(S.maxHp,S.hp+I.value))}),{...v,player:S}}),e(v=>{const k=v.setlist[v.setlist.length-1];if(k&&k.owner==="player"&&k.card.曲名==="Dream Believers"){const S=v.player.deck.findIndex(I=>I.曲名==="Dream Believers");if(S!==-1){const I={...v.player,deck:[...v.player.deck],hand:[...v.player.hand]},[P]=I.deck.splice(S,1);return I.hand.push(P),{...v,player:I}}}return v}),m(!1))};z.useEffect(()=>{if(t&&t.isPlayerTurn&&!t.isCoinFlipPhase&&!t.turnBanner&&t.player.hp>0&&t.enemy.hp>0&&!t.isAnimating&&!c){const v=t.player.hand.some(S=>t.player.currentVoltage>=br(S,t.player)),k=!t.player.specialUsed;if(!v&&!k){const S=setTimeout(()=>p(),800);return()=>clearTimeout(S)}}},[t==null?void 0:t.isPlayerTurn,(Ve=t==null?void 0:t.player)==null?void 0:Ve.currentVoltage,(Tt=(qe=t==null?void 0:t.player)==null?void 0:qe.hand)==null?void 0:Tt.length,(Ft=t==null?void 0:t.player)==null?void 0:Ft.specialUsed,t==null?void 0:t.turnBanner,t==null?void 0:t.isCoinFlipPhase,t==null?void 0:t.isAnimating,c]),z.useEffect(()=>{if(!(!t||n!=="cpu")&&!t.isCoinFlipPhase&&!t.isPlayerTurn&&t.enemy.hp>0&&t.player.hp>0&&!t.turnBanner&&!t.isAnimating)return y.current=setTimeout(()=>{E()},1500),()=>clearTimeout(y.current)},[t==null?void 0:t.isPlayerTurn,(ht=t==null?void 0:t.enemy)==null?void 0:ht.currentVoltage,(N=(L=t==null?void 0:t.enemy)==null?void 0:L.hand)==null?void 0:N.length,t==null?void 0:t.turnBanner,t==null?void 0:t.isCoinFlipPhase,t==null?void 0:t.isAnimating,n]);const E=()=>{const{enemy:v}=t,k=v.hand.filter(S=>br(S,v)<=v.currentVoltage);if(k.length>0){const S=k[Math.floor(Math.random()*k.length)];A(S,!1)}else v.buffs.yupYupYupActive&&e(S=>{const I={...S,enemy:{...S.enemy,hand:[...S.enemy.hand],deck:[...S.enemy.deck],discard:[...S.enemy.discard]}};for(let P=0;P<S.enemy.currentVoltage;P++){const R=ln(I.enemy);R.overdrawn&&R.card&&setTimeout(()=>_(R.card,!1),P*300)}return I}),e(S=>{const I=S.enemy.buffs.queuedEndTurnEffects;if(!I||I.length===0)return S;const P={...S.enemy,deck:[...S.enemy.deck],hand:[...S.enemy.hand],discard:[...S.enemy.discard],buffs:{...S.enemy.buffs,queuedEndTurnEffects:[]}};return I.forEach(R=>{if(R.type==="draw_voltage")for(let j=0;j<P.currentVoltage;j++){const U=ln(P);U.overdrawn&&U.card&&setTimeout(()=>_(U.card,!1),j*300)}else if(R.type==="draw_specific"&&R.name){const j=P.deck.findIndex(U=>U.曲名===R.name);if(j!==-1){const[U]=P.deck.splice(j,1);U&&(P.hand.length>=8?(P.discard.push(U),setTimeout(()=>_(U,!1),300)):P.hand.push(U))}else{const U=P.discard.findIndex(Y=>Y.曲名===R.name);if(U!==-1){const[Y]=P.discard.splice(U,1);Y&&(P.hand.length>=8?(P.discard.push(Y),setTimeout(()=>_(Y,!1),300)):P.hand.push(Y))}}}else R.type==="heal"&&R.value&&(P.hp=Math.min(P.maxHp,P.hp+R.value))}),{...S,enemy:P}}),m(!0)},A=(v,k,S=!1)=>{if(t.isAnimating)return;const I=k?t.player:t.enemy,P=br(v,I);!S&&I.currentVoltage<P||(e(R=>{const j={...R,player:{...R.player,buffs:{...R.player.buffs,turnCardsPlayed:[...R.player.buffs.turnCardsPlayed]},hand:[...R.player.hand],discard:[...R.player.discard]},enemy:{...R.enemy,buffs:{...R.enemy.buffs,turnCardsPlayed:[...R.enemy.buffs.turnCardsPlayed]},hand:[...R.enemy.hand],discard:[...R.enemy.discard]},setlist:[...R.setlist]},U=k?j.player:j.enemy;let Y=br(v,U);if(!S){if(U.currentVoltage<Y)return R;U.currentVoltage-=Y,U.buffs.nextCardCostDown>0&&(U.buffs.nextCardCostDown=0),U.hand=U.hand.filter(le=>le.id!==v.id)}return U.discard.push(v),j.setlist.push({card:v,owner:k?"player":"enemy"}),U.buffs.turnCardsPlayed.push(v.曲名),U.buffs.turnCardsPlayedDetails||(U.buffs.turnCardsPlayedDetails=[]),U.buffs.turnCardsPlayedDetails.push({曲名:v.曲名,歌唱:v.歌唱,センター:v.センター,uid:v.id}),j.enemyPlayedCard=k?null:v,j.isAnimating=!0,j}),setTimeout(()=>{e(R=>{if(!R.isAnimating)return R;const{newState:j,events:U}=IN(R,v,k);let Y=0;U.forEach(Q=>{const rn=Y*600,wi=30+Y%3*60,Ei=Y%3*40;Y++,setTimeout(()=>{if(Q.type==="damage"){const rt=Q.data.target==="player",sv=rt?window.innerHeight-200:200;w(wi,sv-Ei,`-${Q.data.value}`),g(rt?"player":"enemy")}if(Q.type==="damage_self"){const rt=k?window.innerHeight-200:200;w(wi,rt-Ei,`-${Q.data.value}`,"#ff6b35"),g(k?"player":"enemy")}if(Q.type==="heal"){const rt=k?window.innerHeight-200:200;w(wi,rt-Ei,`+${Q.data.value}`,"#10b981")}if(Q.type==="voltage"){const rt=k?window.innerHeight-200:200;w(wi,rt-Ei,`+⚡${Q.data.value}`,"#f59e0b")}if(Q.type==="shield"){const rt=k?window.innerHeight-200:200;w(wi,rt-Ei,`+🛡${Q.data.value}`,"#3b82f6")}if(Q.type==="draw"){const rt=k?window.innerHeight/2:window.innerHeight/2-60;C(window.innerWidth/2-60,rt,`Draw ${Q.data.count||1}`)}(Q.type==="discard"||Q.type==="overdraw")&&Q.data.card&&_(Q.data.card,k),Q.type==="discard_select"&&k&&h({show:!0,maxCost:Q.data.maxCost,reason:Q.data.reason,excludeId:Q.data.excludeId})},rn)});const le=Math.max(Y*600,1e3),nt=j.forceTurnEnd;return setTimeout(()=>{e(Q=>{if(!Q)return Q;const rn={...Q,isAnimating:!1,enemyPlayedCard:null};return n==="online"&&k&&i(rn),rn}),nt&&(k?p():m(!0))},le),j.isAnimating=!0,k||(j.enemyPlayedCard=v),j})},300))};return{damageTexts:s,showDiscard:l,setShowDiscard:a,overdrawnCards:u,selectFromDiscard:c,setSelectFromDiscard:h,endTurnPlayer:p,playCard:A,playCardFromDiscard:v=>{h(null),e(k=>{const S={...k},I=S.player.discard.findIndex(P=>P.id===v.id);return I!==-1&&S.player.discard.splice(I,1),S}),A(v,!0,!0)},handleRematch:()=>{if(!t)return;const v=qi(t.player.originalDeckNames||[]),k=il();e(Wg({deck:v,unit:t.player.baseUnit},k)),o([])},handleSpSkill:()=>{!t.player.specialUsed&&t.isPlayerTurn&&!t.turnBanner&&e(v=>{const k=Math.min(v.player.maxVoltage,v.player.currentVoltage+4),S={...v,player:{...v.player,currentVoltage:k,specialUsed:!0}};return n==="online"&&i(S),S})},handleSurrender:()=>{window.confirm("本当に降参しますか？")&&e(v=>{if(!v||v.battleResult)return v;const k={...v,battleResult:"LOSE"};return n==="online"&&i(k),k})}}},Tp=({data:t,isEnemy:e,isShaking:n,onDiscardClick:r})=>{const i=e?"enemy-status":"self-status",s=e?"enemy":"player",o=t.name||(e?"相手":"YOU");return f.jsxs("div",{className:`player-status ${i} ${n?"shake":""}`,children:[f.jsxs("div",{className:"player-info",children:[f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("span",{className:"player-name",children:o}),f.jsx("span",{style:{fontSize:"0.6rem",color:"#666"},children:t.baseUnit})]}),f.jsxs("span",{className:"hp-text",children:[t.hp," / ",t.maxHp]})]}),f.jsx("div",{className:"hp-bar-container",children:f.jsx("div",{className:`hp-bar ${t.hp<=10?"danger":""}`,style:{width:`${Math.max(0,t.hp/t.maxHp*100)}%`}})}),f.jsxs("div",{className:"deck-info",style:{marginTop:"2px",display:"flex",flexDirection:"column",gap:"4px"},children:[f.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[f.jsxs("span",{className:"deck-stat",children:[f.jsx(cN,{size:14})," ",t.deck.length]}),f.jsxs("span",{className:"deck-stat",onClick:()=>r(s),style:{cursor:"pointer"},children:[f.jsx(iv,{size:14})," ",t.discard.length]}),t.shield>0&&f.jsxs("span",{className:"shield-badge",style:{marginLeft:"auto"},children:[f.jsx(ai,{size:14})," ",t.shield]})]}),f.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[f.jsxs("span",{className:"deck-stat",title:"Played this turn",children:[f.jsx(fN,{size:14})," ",t.buffs.turnCardsPlayed.length]}),f.jsxs("span",{className:"deck-stat",title:"Took damage count",children:[f.jsx(ui,{size:14,color:"#a855f7"})," ",t.buffs.tookDamageCount||0]})]})]})]})},AN=({gameState:t,setSelectedCard:e})=>{const{player:n,isPlayerTurn:r,turnBanner:i,isCoinFlipPhase:s,isAnimating:o}=t;return f.jsx("div",{className:"hand-container",style:{maxWidth:`${Math.max(200,window.innerWidth-(window.innerHeight<=480?160:220))}px`},children:n.hand.map((l,a,u)=>{const d=br(l,n),c=r&&n.currentVoltage>=d&&!i&&!s&&!o,h=window.innerHeight<=480,y=h?85:130,_=Math.max(200,window.innerWidth-(h?160:220)),w=y*.35;let C;if(a===0)C=0;else if(u.length>1){const m=(_-y)/(u.length-1),p=Math.min(m,y*.7),E=Math.max(p,w);C=`${-(y-E)}px`}return f.jsxs("div",{className:"card",style:{background:rr(l.歌唱),opacity:c?1:.4,cursor:"pointer",filter:c?"none":"grayscale(30%)",marginLeft:C},onClick:()=>e(l),children:[f.jsx("div",{className:"card-cost",children:d}),f.jsx("div",{className:"card-title",children:l.曲名}),f.jsxs("div",{className:"card-tags",children:[f.jsx("span",{children:l.歌唱}),f.jsx("span",{children:l.センター})]}),f.jsxs("div",{className:"card-stats",children:[l.パワー&&f.jsxs("span",{className:"stat-item stat-power",children:[f.jsx(As,{size:12}),l.パワー]}),l.シールド&&f.jsxs("span",{className:"stat-item stat-shield",children:[f.jsx(ai,{size:12}),l.シールド]}),l.ヒール&&f.jsxs("span",{className:"stat-item stat-heal",children:[f.jsx(Ps,{size:12}),l.ヒール]}),l.ダメージ&&f.jsxs("span",{className:"stat-item stat-damage",children:[f.jsx(ui,{size:12}),l.ダメージ]})]}),f.jsxs("div",{className:"card-effect",children:[l.効果1&&f.jsx("div",{style:{marginBottom:"4px"},children:l.効果1}),l.効果2&&f.jsx("div",{children:l.効果2})]})]},l.id||l.曲名+a)})})},ON=({selectedCard:t,gameState:e,playCard:n,setSelectedCard:r})=>{if(!t)return null;const i=br(t,e.player),s=e.isPlayerTurn&&e.player.currentVoltage>=i&&!e.turnBanner&&!e.isCoinFlipPhase&&!e.isAnimating;return f.jsx("div",{className:"card-preview-overlay",onClick:()=>r(null),children:f.jsxs("div",{className:"card-preview",style:{background:rr(t.歌唱)},onClick:o=>o.stopPropagation(),children:[f.jsx("div",{className:"card-cost",style:{top:"-12px",left:"-12px",width:"44px",height:"44px",fontSize:"1.4rem"},children:i}),f.jsx("div",{className:"card-title",style:{fontSize:"1.4rem"},children:t.曲名}),f.jsxs("div",{className:"card-tags",style:{fontSize:"0.85rem"},children:[f.jsx("span",{children:t.歌唱}),f.jsx("span",{children:t.センター})]}),f.jsxs("div",{className:"card-stats",style:{fontSize:"0.95rem",padding:"8px"},children:[t.パワー&&f.jsxs("span",{className:"stat-item stat-power",children:[f.jsx(As,{size:16})," ",t.パワー]}),t.シールド&&f.jsxs("span",{className:"stat-item stat-shield",children:[f.jsx(ai,{size:16})," ",t.シールド]}),t.ヒール&&f.jsxs("span",{className:"stat-item stat-heal",children:[f.jsx(Ps,{size:16})," ",t.ヒール]}),t.ダメージ&&f.jsxs("span",{className:"stat-item stat-damage",children:[f.jsx(ui,{size:16})," ",t.ダメージ]})]}),f.jsxs("div",{className:"card-effect",style:{fontSize:"1.15rem",padding:"12px"},children:[t.効果1&&f.jsx("div",{style:{marginBottom:"6px"},children:t.効果1}),t.効果2&&f.jsx("div",{children:t.効果2})]}),f.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"10px"},children:[s&&f.jsx("button",{className:"preview-play-btn",onClick:()=>{n(t,!0),r(null)},children:"使用する"}),f.jsx("button",{className:"preview-close-btn",onClick:()=>r(null),children:"閉じる"})]})]})})},DN=({showDiscard:t,setShowDiscard:e,gameState:n})=>{if(!t.show||!t.owner)return null;const r=t.owner==="player"?n.player.discard:n.enemy.discard;return f.jsx("div",{className:"modal-overlay",onClick:()=>e({show:!1,owner:null}),children:f.jsxs("div",{className:"modal-content",onClick:i=>i.stopPropagation(),children:[f.jsxs("div",{className:"modal-header",children:[f.jsxs("h2",{style:{fontFamily:"Outfit",margin:0},children:[t.owner==="player"?"YOUR":"ENEMY"," DISCARD PILE"]}),f.jsx("button",{className:"modal-close",onClick:()=>e({show:!1,owner:null}),children:f.jsx(iv,{size:20})})]}),f.jsxs("div",{className:"modal-grid",children:[r.map((i,s)=>f.jsx(ts,{card:i},s)),r.length===0&&f.jsx("div",{style:{color:"#666"},children:"No cards in discard pile."})]})]})})},bN=({gameState:t,gameMode:e,isHost:n,roomId:r,handleRematch:i,setScreen:s})=>t.battleResult?f.jsx("div",{className:"battle-end-overlay",children:f.jsxs("div",{className:"battle-end-content",children:[f.jsx("div",{className:"battle-result-text",style:{color:t.battleResult==="WIN"?"#FFD700":t.battleResult==="LOSE"?"#FF4500":"#FFFFFF"},children:t.battleResult==="WIN"?"Victory!":t.battleResult==="LOSE"?"Defeat...":"Draw"}),f.jsxs("div",{className:"battle-end-actions",children:[e==="cpu"&&f.jsx("button",{className:"end-action-btn btn-rematch",onClick:i,children:"もう一度戦う"}),f.jsx("button",{className:"end-action-btn btn-menu",onClick:()=>{e==="online"&&n&&r&&KT(r),s("home")},children:"ホームに戻る"})]})]})}):null,LN=({player:t,enemy:e})=>{const n=(r,i)=>{const s=[];for(let o=0;o<10;o++)s.push(f.jsx("div",{className:`voltage-point ${o<i?"active":""}`,style:o>=r?{opacity:.1}:{}},o));return s};return f.jsxs("div",{className:"voltage-sidebar",children:[f.jsxs("div",{className:"voltage-group",children:[f.jsx("span",{className:"voltage-label",children:"Enemy Voltage"}),f.jsxs("div",{className:"voltage-container",style:{margin:0},children:[f.jsxs("span",{style:{fontSize:"0.8rem",marginRight:"5px"},children:[e.currentVoltage,"/",e.maxVoltage]}),n(e.maxVoltage,e.currentVoltage)]})]}),f.jsxs("div",{className:"voltage-group",children:[f.jsx("span",{className:"voltage-label",children:"Your Voltage"}),f.jsxs("div",{className:"voltage-container",style:{margin:0,justifyContent:"flex-end"},children:[n(t.maxVoltage,t.currentVoltage),f.jsxs("span",{style:{fontSize:"0.8rem",marginLeft:"5px"},children:[t.currentVoltage,"/",t.maxVoltage]})]})]})]})},MN=({gameState:t})=>t.enemyPlayedCard?null:f.jsx("div",{className:"setlist-container",children:t.setlist.slice(-5).map((e,n,r)=>f.jsx("div",{className:`setlist-card ${n===r.length-1?"latest":""}`,style:{transform:`translate(${(n-r.length+1)*30}px, 0) scale(${n===r.length-1?1.2:.8+n*.05})`,zIndex:n},children:f.jsx(wN,{card:e.card,owner:e.owner})},n))}),FN=({gameState:t,handleSpSkill:e,endTurnPlayer:n})=>{const{player:r,isPlayerTurn:i,turnBanner:s,isCoinFlipPhase:o}=t,l=r.specialUsed||!i||!!s||o,a=i&&!s&&!o;return f.jsxs("div",{className:"action-container",children:[f.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[f.jsx("button",{className:"btn-special",onClick:e,disabled:l,children:"SP"}),f.jsxs("span",{style:{fontSize:"0.6rem",color:"#666",textAlign:"center",lineHeight:1.1,maxWidth:"65px",fontWeight:"700"},children:["SPスキル",f.jsx("br",{}),"ボルテージ+4"]})]}),a&&f.jsx("button",{className:"end-turn-btn",onClick:n,children:"END TURN"})]})},jN=({gameState:t,gameMode:e,roomId:n,isHost:r,setScreen:i,selectedCard:s,setSelectedCard:o,damageTexts:l,showDiscard:a,setShowDiscard:u,overdrawnCards:d,selectFromDiscard:c,setSelectFromDiscard:h,endTurnPlayer:y,playCard:_,playCardFromDiscard:w,handleRematch:C,handleSpSkill:g,handleSurrender:m})=>{var A,b;const[p,E]=z.useState(0);return z.useEffect(()=>{if(!(window.matchMedia("(display-mode: standalone)").matches||"standalone"in window.navigator&&window.navigator.standalone===!0)){const D=navigator.userAgent.toLowerCase(),$=D.indexOf("chrome")!==-1||D.indexOf("crios")!==-1;D.indexOf("safari")!==-1&&!$?E(10):$&&E(5)}},[]),f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"orientation-warning",children:[f.jsx(rv,{size:64}),f.jsx("h2",{style:{marginTop:"1rem"},children:"画面を横向きにしてください"}),f.jsx("p",{children:"このゲームは横画面専用です"})]}),f.jsxs("div",{className:"game-container",children:[p>0&&f.jsx("div",{style:{height:`${p}px`,width:"100%",flexShrink:0}}),!t.battleResult&&f.jsxs("button",{onClick:m,style:{position:"absolute",top:`${12+p}px`,right:"12px",display:"flex",alignItems:"center",gap:"4px",padding:"6px 14px",backgroundColor:"rgba(220, 38, 38, 0.85)",color:"white",fontSize:"0.85rem",fontWeight:"bold",borderRadius:"9999px",border:"none",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.2)",cursor:"pointer",zIndex:50,backdropFilter:"blur(4px)",transition:"all 0.2s ease-in-out"},onMouseOver:T=>T.currentTarget.style.backgroundColor="rgba(220, 38, 38, 1)",onMouseOut:T=>T.currentTarget.style.backgroundColor="rgba(220, 38, 38, 0.85)",children:[f.jsx(lN,{size:14}),f.jsx("span",{children:"降参"})]}),t.turnBanner&&f.jsx("div",{className:"turn-banner",children:t.turnBanner}),t.enemyPlayedCard&&!t.turnBanner&&f.jsx("div",{className:"enemy-played-popup",children:f.jsx(ts,{card:t.enemyPlayedCard})}),d.map(T=>f.jsx("div",{className:`overdraw-container ${T.isPlayer?"player":"enemy"}`,children:f.jsx(ts,{card:T.card})},T.id)),l.map(T=>f.jsx("div",{className:T.cssClass||"damage-text",style:{left:`${T.x}px`,top:`${T.y}px`,color:T.color},children:T.text},T.id)),f.jsx("div",{className:"enemy-hand-container",style:{top:`calc(-40px + ${p}px)`},children:t.enemy.hand.map((T,D)=>f.jsx("div",{className:"enemy-card-back"},D))}),f.jsx(LN,{player:t.player,enemy:t.enemy}),f.jsxs("div",{className:"board-area",children:[f.jsx(Tp,{data:t.enemy,isEnemy:!0,isShaking:(A=t.animations)==null?void 0:A.enemyShake,onDiscardClick:T=>u({show:!0,owner:T})}),f.jsx(MN,{gameState:t}),f.jsx(Tp,{data:t.player,isEnemy:!1,isShaking:(b=t.animations)==null?void 0:b.playerShake,onDiscardClick:T=>u({show:!0,owner:T})})]}),f.jsx(FN,{gameState:t,handleSpSkill:g,endTurnPlayer:y}),f.jsx(AN,{gameState:t,setSelectedCard:o}),c&&f.jsx("div",{className:"modal-overlay",style:{zIndex:3e3},children:f.jsxs("div",{className:"modal-content discard-modal",children:[f.jsxs("h2",{className:"discard-title",children:["コスト",c.maxCost,"以下のカードを選んで使用"]}),f.jsx("button",{className:"close-btn",onClick:()=>h(null),children:"×"}),f.jsx("div",{className:"discard-grid",children:t.player.discard.filter(T=>(Number(T.コスト)||0)<=c.maxCost&&T.id!==c.excludeId).map((T,D)=>f.jsx("div",{onClick:()=>w(T),children:f.jsx(ts,{card:T})},D))})]})}),f.jsx(ON,{selectedCard:s,gameState:t,playCard:_,setSelectedCard:o}),f.jsx(DN,{showDiscard:a,setShowDiscard:u,gameState:t}),f.jsx(bN,{gameState:t,gameMode:e,isHost:r,roomId:n,handleRematch:C,setScreen:i})]})]})},UN=t=>{var u,d,c,h,y;const e=t.gameMode==="online"&&!t.isHost,[n,r]=z.useState(null),i=_=>{var w,C,g,m;return _&&{..._,player:_.enemy,enemy:_.player,isPlayerTurn:!_.isPlayerTurn,battleResult:_.battleResult==="WIN"?"LOSE":_.battleResult==="LOSE"?"WIN":_.battleResult,turnBanner:(w=_.turnBanner)!=null&&w.includes("YOU")?_.turnBanner.replace("YOU","ENEMY"):(C=_.turnBanner)!=null&&C.includes("YOUR")?_.turnBanner.replace("YOUR","ENEMY"):(g=_.turnBanner)!=null&&g.includes("ENEMY")&&_.turnBanner.includes("TURN")?_.turnBanner.replace("ENEMY","YOUR"):(m=_.turnBanner)!=null&&m.includes("ENEMY")?_.turnBanner.replace("ENEMY","YOU"):_.turnBanner}};z.useEffect(()=>{if(t.gameMode!=="online"||!t.roomId||!t.gameState||t.gameState.battleResult)return;(t.isHost?t.gameState.hostDisconnected:t.gameState.guestDisconnected)&&t.setGameState(w=>{if(!w||w.battleResult)return w;const C={...w,hostDisconnected:t.isHost?!1:w.hostDisconnected,guestDisconnected:t.isHost?w.guestDisconnected:!1};return _o(t.roomId,C),C})},[(u=t.gameState)==null?void 0:u.hostDisconnected,(d=t.gameState)==null?void 0:d.guestDisconnected,t.isHost,t.gameMode,t.roomId]),z.useEffect(()=>{var w;if(t.gameMode!=="online"||!t.roomId||(w=t.gameState)!=null&&w.battleResult)return;const _=()=>{t.setGameState(C=>{if(!C||C.battleResult)return C;const g={...C,hostDisconnected:t.isHost?!0:C.hostDisconnected||!1,guestDisconnected:t.isHost?C.guestDisconnected||!1:!0};return _o(t.roomId,g),g})};return window.addEventListener("beforeunload",_),()=>{window.removeEventListener("beforeunload",_)}},[t.gameMode,t.roomId,t.isHost,(c=t.gameState)==null?void 0:c.battleResult]),z.useEffect(()=>{if(t.gameMode!=="online"||!t.gameState||t.gameState.battleResult)return;if(t.isHost?t.gameState.guestDisconnected:t.gameState.hostDisconnected){r(60);const w=setInterval(()=>{r(C=>C===null?null:C<=1?(clearInterval(w),t.setGameState(g=>{if(!g||g.battleResult)return g;const m=t.isHost?"WIN":"LOSE",p={...g,battleResult:m};return _o(t.roomId,p),p}),0):C-1)},1e3);return()=>clearInterval(w)}else r(null)},[(h=t.gameState)==null?void 0:h.hostDisconnected,(y=t.gameState)==null?void 0:y.guestDisconnected,t.isHost,t.gameMode,t.roomId]);const s=e?i(t.gameState):t.gameState;s&&t.gameState&&(t.isHost?t.gameState.guestDisconnected:t.gameState.hostDisconnected)&&!t.gameState.battleResult&&n!==null&&(s.turnBanner=`相手の通信が切断されました。復帰を待っています... (残り${n}秒)`);const o=PN({...t,gameState:s,setGameState:_=>{t.setGameState(w=>{if(!e)return typeof _=="function"?_(w):_;const C=i(w),g=typeof _=="function"?_(C):_;return i(g)})},syncDB:_=>{const w=e?i(_):_,C=JSON.parse(JSON.stringify(w,(g,m)=>m===void 0?null:m));_o(t.roomId,C)}});if(!s)return null;const l=s.isPlayerTurn&&!s.turnBanner&&!s.isCoinFlipPhase&&!s.isAnimating&&n===null,a={...o,playCard:(_,w,C)=>{w&&!l&&!C||o.playCard(_,w,C)},endTurnPlayer:()=>{l&&o.endTurnPlayer()},handleSpSkill:()=>{l&&o.handleSpSkill()}};return f.jsx(jN,{...t,gameState:s,...a})},zN=()=>{const[t,e]=z.useState(""),[n,r]=z.useState(""),[i,s]=z.useState(!1),[o,l]=z.useState(""),[a,u]=z.useState(!1),d=async h=>{h.preventDefault(),l(""),u(!0);try{i?await YT(t,n):await qT(t,n)}catch(y){y.code==="auth/invalid-credential"?l("メールアドレスかパスワードが間違っています。"):y.code==="auth/email-already-in-use"?l("このメールアドレスは既に登録されています。"):l(y.message||"認証に失敗しました。")}finally{u(!1)}},c=async()=>{l(""),u(!0);try{await QT()}catch(h){l(h.message||"ゲストログインに失敗しました。")}finally{u(!1)}};return f.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",backgroundColor:"var(--bg-dark, #111827)",color:"white"},children:[f.jsx("h1",{style:{fontSize:"3rem",marginBottom:"2rem",fontFamily:"Outfit",color:"var(--primary, #60a5fa)",textShadow:"0 0 10px rgba(96, 165, 250, 0.5)"},children:"LINK LIKE BATTLE"}),f.jsxs("div",{style:{backgroundColor:"rgba(31, 41, 55, 0.8)",padding:"2.5rem",borderRadius:"12px",width:"320px",boxShadow:"0 8px 32px rgba(0,0,0,0.5)",backdropFilter:"blur(4px)",border:"1px solid rgba(255,255,255,0.1)"},children:[f.jsx("h2",{style:{textAlign:"center",marginBottom:"1.5rem",fontSize:"1.5rem"},children:i?"新規アカウント登録":"ログイン"}),f.jsxs("form",{onSubmit:d,style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[f.jsx("input",{type:"email",placeholder:"メールアドレス",value:t,onChange:h=>e(h.target.value),required:!0,style:{padding:"0.75rem",borderRadius:"6px",border:"none",outline:"none",backgroundColor:"#374151",color:"white",fontSize:"1rem"}}),f.jsx("input",{type:"password",placeholder:"パスワード (6文字以上)",value:n,onChange:h=>r(h.target.value),required:!0,minLength:6,style:{padding:"0.75rem",borderRadius:"6px",border:"none",outline:"none",backgroundColor:"#374151",color:"white",fontSize:"1rem"}}),o&&f.jsx("p",{style:{color:"#ef4444",fontSize:"0.875rem",margin:"0",textAlign:"center"},children:o}),f.jsx("button",{type:"submit",disabled:a,style:{padding:"0.75rem",backgroundColor:"var(--primary, #3b82f6)",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"1.1rem",transition:"background-color 0.2s"},children:a?"通信中...":i?"登録してはじめる":"ログイン"})]}),f.jsx("div",{style:{marginTop:"1rem",textAlign:"center"},children:f.jsx("button",{type:"button",onClick:()=>{s(!i),l("")},style:{background:"none",border:"none",color:"#9ca3af",textDecoration:"underline",cursor:"pointer",fontSize:"0.9rem"},children:i?"すでにアカウントをお持ちの方はこちら":"新しくアカウントを作る方はこちら"})}),f.jsxs("div",{style:{display:"flex",alignItems:"center",margin:"1.5rem 0"},children:[f.jsx("div",{style:{flex:1,height:"1px",backgroundColor:"#4b5563"}}),f.jsx("span",{style:{padding:"0 10px",color:"#9ca3af",fontSize:"0.875rem"},children:"または"}),f.jsx("div",{style:{flex:1,height:"1px",backgroundColor:"#4b5563"}})]}),f.jsx("button",{onClick:c,disabled:a,style:{width:"100%",padding:"0.75rem",backgroundColor:"transparent",color:"white",border:"1px solid #6b7280",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"1rem",transition:"background-color 0.2s"},children:"ログインせずに遊ぶ (ゲスト)"})]})]})},WN=t=>{var e,n,r,i,s,o,l,a,u,d,c,h,y,_,w,C,g,m,p,E;return t&&{...t,setlist:t.setlist||[],animations:t.animations||{},player:{...t.player,hand:((e=t.player)==null?void 0:e.hand)||[],deck:((n=t.player)==null?void 0:n.deck)||[],discard:((r=t.player)==null?void 0:r.discard)||[],buffs:{...(i=t.player)==null?void 0:i.buffs,turnCardsPlayed:((o=(s=t.player)==null?void 0:s.buffs)==null?void 0:o.turnCardsPlayed)||[],turnCardsPlayedDetails:((a=(l=t.player)==null?void 0:l.buffs)==null?void 0:a.turnCardsPlayedDetails)||[],queuedEndTurnEffects:((d=(u=t.player)==null?void 0:u.buffs)==null?void 0:d.queuedEndTurnEffects)||[]}},enemy:{...t.enemy,hand:((c=t.enemy)==null?void 0:c.hand)||[],deck:((h=t.enemy)==null?void 0:h.deck)||[],discard:((y=t.enemy)==null?void 0:y.discard)||[],buffs:{...(_=t.enemy)==null?void 0:_.buffs,turnCardsPlayed:((C=(w=t.enemy)==null?void 0:w.buffs)==null?void 0:C.turnCardsPlayed)||[],turnCardsPlayedDetails:((m=(g=t.enemy)==null?void 0:g.buffs)==null?void 0:m.turnCardsPlayedDetails)||[],queuedEndTurnEffects:((E=(p=t.enemy)==null?void 0:p.buffs)==null?void 0:E.queuedEndTurnEffects)||[]}}}};function VN(){const[t,e]=z.useState(null),[n,r]=z.useState(!0),[i,s]=z.useState("home"),[o,l]=z.useState(""),[a,u]=z.useState(null),[d,c]=z.useState(null),[h,y]=z.useState({}),[_,w]=z.useState(null),[C,g]=z.useState(null),[m,p]=z.useState(""),[E,A]=z.useState(!1),[b,T]=z.useState([]),[D,$]=z.useState(null),F=z.useRef(null);z.useEffect(()=>{const I=XT(P=>{e(P),r(!1)});return()=>I()},[]),z.useEffect(()=>{const I=localStorage.getItem("battleSession");if(I)try{const P=JSON.parse(I);P.roomId&&(p(P.roomId),A(P.isHost),P.playerName&&l(P.playerName),P.gameMode&&u(P.gameMode),s("waitingRoom"))}catch(P){console.error("Session parse error:",P)}},[]),z.useEffect(()=>{i==="home"&&(localStorage.removeItem("battleSession"),p(""),$(null),w(null),F.current&&(F.current(),F.current=null))},[i]),z.useEffect(()=>{if(i==="lobby"){const I=VT(P=>T(P));return()=>I()}},[i]),z.useEffect(()=>{if(!(!m||i!=="waitingRoom"&&i!=="battle"))return F.current=GT(m,I=>{if(!I){alert("対戦ルームが既に終了または解散されています。"),s("home");return}if($(I),I.status==="playing"&&I.gameState){const P=WN(I.gameState);w(P),i!=="battle"&&s("battle")}}),()=>{F.current&&F.current()}},[m,i]);const ge=d?bw(d):[],Ve=Object.values(h).reduce((I,P)=>I+P,0),qe=I=>{if(Ve>=30)return;const P=h[I]||0;if(!(P>=3)){if(I==="On your mark(102期Ver.)"&&P>=2){alert("「On your mark(102期Ver.)」はデッキに2枚までしか入れられません。");return}y(R=>({...R,[I]:P+1}))}},Tt=I=>{const P=h[I]||0;P<=0||y(R=>{const j={...R};return j[I]=P-1,j[I]<=0&&delete j[I],j})},Ft=()=>{if(!d)return;const I=zg[d],P={};I.forEach(R=>{P[R]=(P[R]||0)+1}),y(P)},ht=()=>{if(a==="cpu"){const I=[];Object.entries(h).forEach(([U,Y])=>{for(let le=0;le<Y;le++)I.push(U)});const P=qi(I),R=il(),j=Wg({deck:P,unit:d||"スリーズブーケ"},R);j.player.name=o||"YOU",j.enemy.name="寮母さん",w(j),s("battle")}else s("lobby")},L=async()=>{try{const I=[];Object.entries(h).forEach(([j,U])=>{for(let Y=0;Y<U;Y++)I.push(j)});const P=qi(I),R=await WT({deck:P,unit:d||""},o);p(R),A(!0),s("waitingRoom"),localStorage.setItem("battleSession",JSON.stringify({roomId:R,isHost:!0,playerName:o,gameMode:"online"}))}catch(I){console.error("部屋作成エラーの詳細:",I),alert(`部屋の作成に失敗しました:
`+I.message)}},N=async I=>{try{const P=[];Object.entries(h).forEach(([j,U])=>{for(let Y=0;Y<U;Y++)P.push(j)});const R=qi(P);await HT(I,{deck:R,unit:d||""},o),p(I),A(!1),s("waitingRoom"),localStorage.setItem("battleSession",JSON.stringify({roomId:I,isHost:!1,playerName:o,gameMode:"online"}))}catch(P){alert(P.message)}},v=async()=>{if(!D||!D.clientDeck)return;const I=Lw(D.hostDeck,D.clientDeck);I.player.name=D.hostName||"YOU",I.enemy.name=D.clientName||"相手",await $T(m,I)},k=[0,0,0,0,0,0,0,0];Object.entries(h).forEach(([I,P])=>{const R=cd.find(U=>U.曲名===I),j=Math.min(Number(R==null?void 0:R.コスト)||0,7);k[j]+=P});const S=Math.max(1,...k);return n?f.jsx("div",{style:{height:"100vh",backgroundColor:"#111827",display:"flex",justifyContent:"center",alignItems:"center",color:"white"},children:"Loading..."}):t?i==="home"?f.jsx(ZT,{playerName:o,setPlayerName:l,setGameMode:u,setScreen:s}):i==="lobby"?f.jsx(CN,{roomsList:b,handleCreateRoom:L,handleJoinRoom:N,setScreen:s}):i==="waitingRoom"?f.jsx(kN,{isHost:E,playerName:o,roomData:D,roomId:m,handleHostStartGame:v}):i==="deckBuilder"?f.jsx(EN,{gameMode:a,setScreen:s,deckTotal:Ve,selectedUnit:d,setSelectedUnit:c,manaCurve:k,maxManaCount:S,handleDeckComplete:ht,loadStarterDeck:Ft,deckList:h,setDeckList:y,availableCards:ge,selectedCard:C,setSelectedCard:g,removeCardFromDeck:Tt,addCardToDeck:qe}):i==="battle"&&_?f.jsx(UN,{gameState:_,setGameState:w,gameMode:a,roomId:m,isHost:E,setScreen:s,selectedCard:C,setSelectedCard:g}):null:f.jsx(zN,{})}Za.createRoot(document.getElementById("root")).render(f.jsx(Cv.StrictMode,{children:f.jsx(VN,{})}));
