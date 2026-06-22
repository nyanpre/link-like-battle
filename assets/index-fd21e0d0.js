(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function hv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Pp={exports:{}},bl={},Ap={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var As=Symbol.for("react.element"),fv=Symbol.for("react.portal"),pv=Symbol.for("react.fragment"),mv=Symbol.for("react.strict_mode"),gv=Symbol.for("react.profiler"),yv=Symbol.for("react.provider"),_v=Symbol.for("react.context"),vv=Symbol.for("react.forward_ref"),wv=Symbol.for("react.suspense"),Ev=Symbol.for("react.memo"),xv=Symbol.for("react.lazy"),lh=Symbol.iterator;function Cv(t){return t===null||typeof t!="object"?null:(t=lh&&t[lh]||t["@@iterator"],typeof t=="function"?t:null)}var Op={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dp=Object.assign,Lp={};function fi(t,e,n){this.props=t,this.context=e,this.refs=Lp,this.updater=n||Op}fi.prototype.isReactComponent={};fi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mp(){}Mp.prototype=fi.prototype;function gc(t,e,n){this.props=t,this.context=e,this.refs=Lp,this.updater=n||Op}var yc=gc.prototype=new Mp;yc.constructor=gc;Dp(yc,fi.prototype);yc.isPureReactComponent=!0;var ah=Array.isArray,jp=Object.prototype.hasOwnProperty,_c={current:null},Fp={key:!0,ref:!0,__self:!0,__source:!0};function Up(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jp.call(e,r)&&!Fp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:As,type:t,key:s,ref:o,props:i,_owner:_c.current}}function kv(t,e){return{$$typeof:As,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vc(t){return typeof t=="object"&&t!==null&&t.$$typeof===As}function Sv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var uh=/\/+/g;function ua(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Sv(""+t.key):e.toString(36)}function _o(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case As:case fv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ua(o,0):r,ah(i)?(n="",t!=null&&(n=t.replace(uh,"$&/")+"/"),_o(i,e,n,"",function(u){return u})):i!=null&&(vc(i)&&(i=kv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(uh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ah(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+ua(s,l);o+=_o(s,e,n,a,i)}else if(a=Cv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+ua(s,l++),o+=_o(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qs(t,e,n){if(t==null)return t;var r=[],i=0;return _o(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Iv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ze={current:null},vo={transition:null},Tv={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:vo,ReactCurrentOwner:_c};function zp(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:Qs,forEach:function(t,e,n){Qs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qs(t,function(){e++}),e},toArray:function(t){return Qs(t,function(e){return e})||[]},only:function(t){if(!vc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$.Component=fi;$.Fragment=pv;$.Profiler=gv;$.PureComponent=gc;$.StrictMode=mv;$.Suspense=wv;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tv;$.act=zp;$.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Dp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_c.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)jp.call(e,a)&&!Fp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:As,type:t.type,key:i,ref:s,props:r,_owner:o}};$.createContext=function(t){return t={$$typeof:_v,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:yv,_context:t},t.Consumer=t};$.createElement=Up;$.createFactory=function(t){var e=Up.bind(null,t);return e.type=t,e};$.createRef=function(){return{current:null}};$.forwardRef=function(t){return{$$typeof:vv,render:t}};$.isValidElement=vc;$.lazy=function(t){return{$$typeof:xv,_payload:{_status:-1,_result:t},_init:Iv}};$.memo=function(t,e){return{$$typeof:Ev,type:t,compare:e===void 0?null:e}};$.startTransition=function(t){var e=vo.transition;vo.transition={};try{t()}finally{vo.transition=e}};$.unstable_act=zp;$.useCallback=function(t,e){return ze.current.useCallback(t,e)};$.useContext=function(t){return ze.current.useContext(t)};$.useDebugValue=function(){};$.useDeferredValue=function(t){return ze.current.useDeferredValue(t)};$.useEffect=function(t,e){return ze.current.useEffect(t,e)};$.useId=function(){return ze.current.useId()};$.useImperativeHandle=function(t,e,n){return ze.current.useImperativeHandle(t,e,n)};$.useInsertionEffect=function(t,e){return ze.current.useInsertionEffect(t,e)};$.useLayoutEffect=function(t,e){return ze.current.useLayoutEffect(t,e)};$.useMemo=function(t,e){return ze.current.useMemo(t,e)};$.useReducer=function(t,e,n){return ze.current.useReducer(t,e,n)};$.useRef=function(t){return ze.current.useRef(t)};$.useState=function(t){return ze.current.useState(t)};$.useSyncExternalStore=function(t,e,n){return ze.current.useSyncExternalStore(t,e,n)};$.useTransition=function(){return ze.current.useTransition()};$.version="18.3.1";Ap.exports=$;var F=Ap.exports;const Nv=hv(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv=F,bv=Symbol.for("react.element"),Pv=Symbol.for("react.fragment"),Av=Object.prototype.hasOwnProperty,Ov=Rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dv={key:!0,ref:!0,__self:!0,__source:!0};function Wp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Av.call(e,r)&&!Dv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:bv,type:t,key:s,ref:o,props:i,_owner:Ov.current}}bl.Fragment=Pv;bl.jsx=Wp;bl.jsxs=Wp;Pp.exports=bl;var c=Pp.exports,Za={},Bp={exports:{}},tt={},Vp={exports:{}},Hp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,C){var S=D.length;D.push(C);e:for(;0<S;){var w=S-1>>>1,T=D[w];if(0<i(T,C))D[w]=C,D[S]=T,S=w;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var C=D[0],S=D.pop();if(S!==C){D[0]=S;e:for(var w=0,T=D.length,I=T>>>1;w<I;){var k=2*(w+1)-1,M=D[k],j=k+1,K=D[j];if(0>i(M,S))j<T&&0>i(K,M)?(D[w]=K,D[j]=S,w=j):(D[w]=M,D[k]=S,w=k);else if(j<T&&0>i(K,S))D[w]=K,D[j]=S,w=j;else break e}}return C}function i(D,C){var S=D.sortIndex-C.sortIndex;return S!==0?S:D.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,h=null,f=3,_=!1,y=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(D){for(var C=n(u);C!==null;){if(C.callback===null)r(u);else if(C.startTime<=D)r(u),C.sortIndex=C.expirationTime,e(a,C);else break;C=n(u)}}function E(D){if(x=!1,p(D),!y)if(n(a)!==null)y=!0,ft(v);else{var C=n(u);C!==null&&pt(E,C.startTime-D)}}function v(D,C){y=!1,x&&(x=!1,g(O),O=-1),_=!0;var S=f;try{for(p(C),h=n(a);h!==null&&(!(h.expirationTime>C)||D&&!me());){var w=h.callback;if(typeof w=="function"){h.callback=null,f=h.priorityLevel;var T=w(h.expirationTime<=C);C=t.unstable_now(),typeof T=="function"?h.callback=T:h===n(a)&&r(a),p(C)}else r(a);h=n(a)}if(h!==null)var I=!0;else{var k=n(u);k!==null&&pt(E,k.startTime-C),I=!1}return I}finally{h=null,f=S,_=!1}}var N=!1,A=null,O=-1,G=5,U=-1;function me(){return!(t.unstable_now()-U<G)}function Ve(){if(A!==null){var D=t.unstable_now();U=D;var C=!0;try{C=A(!0,D)}finally{C?Qe():(N=!1,A=null)}}else N=!1}var Qe;if(typeof m=="function")Qe=function(){m(Ve)};else if(typeof MessageChannel<"u"){var Tt=new MessageChannel,ht=Tt.port2;Tt.port1.onmessage=Ve,Qe=function(){ht.postMessage(null)}}else Qe=function(){b(Ve,0)};function ft(D){A=D,N||(N=!0,Qe())}function pt(D,C){O=b(function(){D(t.unstable_now())},C)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||_||(y=!0,ft(v))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var C=3;break;default:C=f}var S=f;f=C;try{return D()}finally{f=S}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,C){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var S=f;f=D;try{return C()}finally{f=S}},t.unstable_scheduleCallback=function(D,C,S){var w=t.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?w+S:w):S=w,D){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=S+T,D={id:d++,callback:C,priorityLevel:D,startTime:S,expirationTime:T,sortIndex:-1},S>w?(D.sortIndex=S,e(u,D),n(a)===null&&D===n(u)&&(x?(g(O),O=-1):x=!0,pt(E,S-w))):(D.sortIndex=T,e(a,D),y||_||(y=!0,ft(v))),D},t.unstable_shouldYield=me,t.unstable_wrapCallback=function(D){var C=f;return function(){var S=f;f=C;try{return D.apply(this,arguments)}finally{f=S}}}})(Hp);Vp.exports=Hp;var Lv=Vp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv=F,et=Lv;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $p=new Set,is={};function yr(t,e){Xr(t,e),Xr(t+"Capture",e)}function Xr(t,e){for(is[t]=e,t=0;t<e.length;t++)$p.add(e[t])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eu=Object.prototype.hasOwnProperty,jv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ch={},dh={};function Fv(t){return eu.call(dh,t)?!0:eu.call(ch,t)?!1:jv.test(t)?dh[t]=!0:(ch[t]=!0,!1)}function Uv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zv(t,e,n,r){if(e===null||typeof e>"u"||Uv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function We(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ne[t]=new We(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ne[e]=new We(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ne[t]=new We(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ne[t]=new We(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ne[t]=new We(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ne[t]=new We(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ne[t]=new We(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ne[t]=new We(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ne[t]=new We(t,5,!1,t.toLowerCase(),null,!1,!1)});var wc=/[\-:]([a-z])/g;function Ec(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wc,Ec);Ne[e]=new We(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wc,Ec);Ne[e]=new We(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wc,Ec);Ne[e]=new We(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ne[t]=new We(t,1,!1,t.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ne[t]=new We(t,1,!1,t.toLowerCase(),null,!0,!0)});function xc(t,e,n,r){var i=Ne.hasOwnProperty(e)?Ne[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zv(e,n,i,r)&&(n=null),r||i===null?Fv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var sn=Mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Js=Symbol.for("react.element"),Cr=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),Cc=Symbol.for("react.strict_mode"),tu=Symbol.for("react.profiler"),Gp=Symbol.for("react.provider"),Kp=Symbol.for("react.context"),kc=Symbol.for("react.forward_ref"),nu=Symbol.for("react.suspense"),ru=Symbol.for("react.suspense_list"),Sc=Symbol.for("react.memo"),cn=Symbol.for("react.lazy"),Yp=Symbol.for("react.offscreen"),hh=Symbol.iterator;function Si(t){return t===null||typeof t!="object"?null:(t=hh&&t[hh]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,ca;function ji(t){if(ca===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ca=e&&e[1]||""}return`
`+ca+t}var da=!1;function ha(t,e){if(!t||da)return"";da=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{da=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ji(t):""}function Wv(t){switch(t.tag){case 5:return ji(t.type);case 16:return ji("Lazy");case 13:return ji("Suspense");case 19:return ji("SuspenseList");case 0:case 2:case 15:return t=ha(t.type,!1),t;case 11:return t=ha(t.type.render,!1),t;case 1:return t=ha(t.type,!0),t;default:return""}}function iu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case kr:return"Fragment";case Cr:return"Portal";case tu:return"Profiler";case Cc:return"StrictMode";case nu:return"Suspense";case ru:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Kp:return(t.displayName||"Context")+".Consumer";case Gp:return(t._context.displayName||"Context")+".Provider";case kc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sc:return e=t.displayName||null,e!==null?e:iu(t.type)||"Memo";case cn:e=t._payload,t=t._init;try{return iu(t(e))}catch{}}return null}function Bv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return iu(e);case 8:return e===Cc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vv(t){var e=qp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xs(t){t._valueTracker||(t._valueTracker=Vv(t))}function Qp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Do(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function su(t,e){var n=e.checked;return ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jp(t,e){e=e.checked,e!=null&&xc(t,"checked",e,!1)}function ou(t,e){Jp(t,e);var n=Mn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lu(t,e.type,n):e.hasOwnProperty("defaultValue")&&lu(t,e.type,Mn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ph(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lu(t,e,n){(e!=="number"||Do(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fi=Array.isArray;function Fr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function au(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(Fi(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mn(n)}}function Xp(t,e){var n=Mn(e.value),r=Mn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function gh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zs,em=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zs=Zs||document.createElement("div"),Zs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ss(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hv=["Webkit","ms","Moz","O"];Object.keys(Vi).forEach(function(t){Hv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vi[e]=Vi[t]})});function tm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vi.hasOwnProperty(t)&&Vi[t]?(""+e).trim():e+"px"}function nm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var $v=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cu(t,e){if(e){if($v[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function du(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hu=null;function Ic(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fu=null,Ur=null,zr=null;function yh(t){if(t=Ls(t)){if(typeof fu!="function")throw Error(R(280));var e=t.stateNode;e&&(e=Ll(e),fu(t.stateNode,t.type,e))}}function rm(t){Ur?zr?zr.push(t):zr=[t]:Ur=t}function im(){if(Ur){var t=Ur,e=zr;if(zr=Ur=null,yh(t),e)for(t=0;t<e.length;t++)yh(e[t])}}function sm(t,e){return t(e)}function om(){}var fa=!1;function lm(t,e,n){if(fa)return t(e,n);fa=!0;try{return sm(t,e,n)}finally{fa=!1,(Ur!==null||zr!==null)&&(om(),im())}}function os(t,e){var n=t.stateNode;if(n===null)return null;var r=Ll(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var pu=!1;if(Qt)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){pu=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{pu=!1}function Gv(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Hi=!1,Lo=null,Mo=!1,mu=null,Kv={onError:function(t){Hi=!0,Lo=t}};function Yv(t,e,n,r,i,s,o,l,a){Hi=!1,Lo=null,Gv.apply(Kv,arguments)}function qv(t,e,n,r,i,s,o,l,a){if(Yv.apply(this,arguments),Hi){if(Hi){var u=Lo;Hi=!1,Lo=null}else throw Error(R(198));Mo||(Mo=!0,mu=u)}}function _r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function am(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _h(t){if(_r(t)!==t)throw Error(R(188))}function Qv(t){var e=t.alternate;if(!e){if(e=_r(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _h(i),t;if(s===r)return _h(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function um(t){return t=Qv(t),t!==null?cm(t):null}function cm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=cm(t);if(e!==null)return e;t=t.sibling}return null}var dm=et.unstable_scheduleCallback,vh=et.unstable_cancelCallback,Jv=et.unstable_shouldYield,Xv=et.unstable_requestPaint,fe=et.unstable_now,Zv=et.unstable_getCurrentPriorityLevel,Tc=et.unstable_ImmediatePriority,hm=et.unstable_UserBlockingPriority,jo=et.unstable_NormalPriority,e0=et.unstable_LowPriority,fm=et.unstable_IdlePriority,Pl=null,Pt=null;function t0(t){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Pl,t,void 0,(t.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:i0,n0=Math.log,r0=Math.LN2;function i0(t){return t>>>=0,t===0?32:31-(n0(t)/r0|0)|0}var eo=64,to=4194304;function Ui(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ui(l):(s&=o,s!==0&&(r=Ui(s)))}else o=n&~i,o!==0?r=Ui(o):s!==0&&(r=Ui(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-xt(e),i=1<<n,r|=t[n],e&=~i;return r}function s0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function o0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-xt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=s0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function gu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pm(){var t=eo;return eo<<=1,!(eo&4194240)&&(eo=64),t}function pa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Os(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xt(e),t[e]=n}function l0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-xt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Nc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-xt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function mm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gm,Rc,ym,_m,vm,yu=!1,no=[],En=null,xn=null,Cn=null,ls=new Map,as=new Map,hn=[],a0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wh(t,e){switch(t){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":ls.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":as.delete(e.pointerId)}}function Ti(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ls(e),e!==null&&Rc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function u0(t,e,n,r,i){switch(e){case"focusin":return En=Ti(En,t,e,n,r,i),!0;case"dragenter":return xn=Ti(xn,t,e,n,r,i),!0;case"mouseover":return Cn=Ti(Cn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ls.set(s,Ti(ls.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,as.set(s,Ti(as.get(s)||null,t,e,n,r,i)),!0}return!1}function wm(t){var e=Xn(t.target);if(e!==null){var n=_r(e);if(n!==null){if(e=n.tag,e===13){if(e=am(n),e!==null){t.blockedOn=e,vm(t.priority,function(){ym(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_u(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);hu=r,n.target.dispatchEvent(r),hu=null}else return e=Ls(n),e!==null&&Rc(e),t.blockedOn=n,!1;e.shift()}return!0}function Eh(t,e,n){wo(t)&&n.delete(e)}function c0(){yu=!1,En!==null&&wo(En)&&(En=null),xn!==null&&wo(xn)&&(xn=null),Cn!==null&&wo(Cn)&&(Cn=null),ls.forEach(Eh),as.forEach(Eh)}function Ni(t,e){t.blockedOn===e&&(t.blockedOn=null,yu||(yu=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,c0)))}function us(t){function e(i){return Ni(i,t)}if(0<no.length){Ni(no[0],t);for(var n=1;n<no.length;n++){var r=no[n];r.blockedOn===t&&(r.blockedOn=null)}}for(En!==null&&Ni(En,t),xn!==null&&Ni(xn,t),Cn!==null&&Ni(Cn,t),ls.forEach(e),as.forEach(e),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)wm(n),n.blockedOn===null&&hn.shift()}var Wr=sn.ReactCurrentBatchConfig,Uo=!0;function d0(t,e,n,r){var i=J,s=Wr.transition;Wr.transition=null;try{J=1,bc(t,e,n,r)}finally{J=i,Wr.transition=s}}function h0(t,e,n,r){var i=J,s=Wr.transition;Wr.transition=null;try{J=4,bc(t,e,n,r)}finally{J=i,Wr.transition=s}}function bc(t,e,n,r){if(Uo){var i=_u(t,e,n,r);if(i===null)ka(t,e,r,zo,n),wh(t,r);else if(u0(i,t,e,n,r))r.stopPropagation();else if(wh(t,r),e&4&&-1<a0.indexOf(t)){for(;i!==null;){var s=Ls(i);if(s!==null&&gm(s),s=_u(t,e,n,r),s===null&&ka(t,e,r,zo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ka(t,e,r,null,n)}}var zo=null;function _u(t,e,n,r){if(zo=null,t=Ic(r),t=Xn(t),t!==null)if(e=_r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=am(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zo=t,null}function Em(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zv()){case Tc:return 1;case hm:return 4;case jo:case e0:return 16;case fm:return 536870912;default:return 16}default:return 16}}var _n=null,Pc=null,Eo=null;function xm(){if(Eo)return Eo;var t,e=Pc,n=e.length,r,i="value"in _n?_n.value:_n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Eo=i.slice(t,1<r?1-r:void 0)}function xo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function xh(){return!1}function nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ro:xh,this.isPropagationStopped=xh,this}return ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),e}var pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ac=nt(pi),Ds=ue({},pi,{view:0,detail:0}),f0=nt(Ds),ma,ga,Ri,Al=ue({},Ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ri&&(Ri&&t.type==="mousemove"?(ma=t.screenX-Ri.screenX,ga=t.screenY-Ri.screenY):ga=ma=0,Ri=t),ma)},movementY:function(t){return"movementY"in t?t.movementY:ga}}),Ch=nt(Al),p0=ue({},Al,{dataTransfer:0}),m0=nt(p0),g0=ue({},Ds,{relatedTarget:0}),ya=nt(g0),y0=ue({},pi,{animationName:0,elapsedTime:0,pseudoElement:0}),_0=nt(y0),v0=ue({},pi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),w0=nt(v0),E0=ue({},pi,{data:0}),kh=nt(E0),x0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=k0[t])?!!e[t]:!1}function Oc(){return S0}var I0=ue({},Ds,{key:function(t){if(t.key){var e=x0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?C0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oc,charCode:function(t){return t.type==="keypress"?xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),T0=nt(I0),N0=ue({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sh=nt(N0),R0=ue({},Ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oc}),b0=nt(R0),P0=ue({},pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),A0=nt(P0),O0=ue({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),D0=nt(O0),L0=[9,13,27,32],Dc=Qt&&"CompositionEvent"in window,$i=null;Qt&&"documentMode"in document&&($i=document.documentMode);var M0=Qt&&"TextEvent"in window&&!$i,Cm=Qt&&(!Dc||$i&&8<$i&&11>=$i),Ih=String.fromCharCode(32),Th=!1;function km(t,e){switch(t){case"keyup":return L0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Sr=!1;function j0(t,e){switch(t){case"compositionend":return Sm(e);case"keypress":return e.which!==32?null:(Th=!0,Ih);case"textInput":return t=e.data,t===Ih&&Th?null:t;default:return null}}function F0(t,e){if(Sr)return t==="compositionend"||!Dc&&km(t,e)?(t=xm(),Eo=Pc=_n=null,Sr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cm&&e.locale!=="ko"?null:e.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!U0[t.type]:e==="textarea"}function Im(t,e,n,r){rm(r),e=Wo(e,"onChange"),0<e.length&&(n=new Ac("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Gi=null,cs=null;function z0(t){jm(t,0)}function Ol(t){var e=Nr(t);if(Qp(e))return t}function W0(t,e){if(t==="change")return e}var Tm=!1;if(Qt){var _a;if(Qt){var va="oninput"in document;if(!va){var Rh=document.createElement("div");Rh.setAttribute("oninput","return;"),va=typeof Rh.oninput=="function"}_a=va}else _a=!1;Tm=_a&&(!document.documentMode||9<document.documentMode)}function bh(){Gi&&(Gi.detachEvent("onpropertychange",Nm),cs=Gi=null)}function Nm(t){if(t.propertyName==="value"&&Ol(cs)){var e=[];Im(e,cs,t,Ic(t)),lm(z0,e)}}function B0(t,e,n){t==="focusin"?(bh(),Gi=e,cs=n,Gi.attachEvent("onpropertychange",Nm)):t==="focusout"&&bh()}function V0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ol(cs)}function H0(t,e){if(t==="click")return Ol(e)}function $0(t,e){if(t==="input"||t==="change")return Ol(e)}function G0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var St=typeof Object.is=="function"?Object.is:G0;function ds(t,e){if(St(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!eu.call(e,i)||!St(t[i],e[i]))return!1}return!0}function Ph(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ah(t,e){var n=Ph(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ph(n)}}function Rm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function bm(){for(var t=window,e=Do();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Do(t.document)}return e}function Lc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function K0(t){var e=bm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Rm(n.ownerDocument.documentElement,n)){if(r!==null&&Lc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ah(n,s);var o=Ah(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Y0=Qt&&"documentMode"in document&&11>=document.documentMode,Ir=null,vu=null,Ki=null,wu=!1;function Oh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wu||Ir==null||Ir!==Do(r)||(r=Ir,"selectionStart"in r&&Lc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ki&&ds(Ki,r)||(Ki=r,r=Wo(vu,"onSelect"),0<r.length&&(e=new Ac("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ir)))}function io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Tr={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},wa={},Pm={};Qt&&(Pm=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Dl(t){if(wa[t])return wa[t];if(!Tr[t])return t;var e=Tr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Pm)return wa[t]=e[n];return t}var Am=Dl("animationend"),Om=Dl("animationiteration"),Dm=Dl("animationstart"),Lm=Dl("transitionend"),Mm=new Map,Dh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wn(t,e){Mm.set(t,e),yr(e,[t])}for(var Ea=0;Ea<Dh.length;Ea++){var xa=Dh[Ea],q0=xa.toLowerCase(),Q0=xa[0].toUpperCase()+xa.slice(1);Wn(q0,"on"+Q0)}Wn(Am,"onAnimationEnd");Wn(Om,"onAnimationIteration");Wn(Dm,"onAnimationStart");Wn("dblclick","onDoubleClick");Wn("focusin","onFocus");Wn("focusout","onBlur");Wn(Lm,"onTransitionEnd");Xr("onMouseEnter",["mouseout","mouseover"]);Xr("onMouseLeave",["mouseout","mouseover"]);Xr("onPointerEnter",["pointerout","pointerover"]);Xr("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J0=new Set("cancel close invalid load scroll toggle".split(" ").concat(zi));function Lh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,qv(r,e,void 0,t),t.currentTarget=null}function jm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Lh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Lh(i,l,u),s=a}}}if(Mo)throw t=mu,Mo=!1,mu=null,t}function ie(t,e){var n=e[Su];n===void 0&&(n=e[Su]=new Set);var r=t+"__bubble";n.has(r)||(Fm(e,t,2,!1),n.add(r))}function Ca(t,e,n){var r=0;e&&(r|=4),Fm(n,t,r,e)}var so="_reactListening"+Math.random().toString(36).slice(2);function hs(t){if(!t[so]){t[so]=!0,$p.forEach(function(n){n!=="selectionchange"&&(J0.has(n)||Ca(n,!1,t),Ca(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[so]||(e[so]=!0,Ca("selectionchange",!1,e))}}function Fm(t,e,n,r){switch(Em(e)){case 1:var i=d0;break;case 4:i=h0;break;default:i=bc}n=i.bind(null,e,n,t),i=void 0,!pu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ka(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Xn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}lm(function(){var u=s,d=Ic(n),h=[];e:{var f=Mm.get(t);if(f!==void 0){var _=Ac,y=t;switch(t){case"keypress":if(xo(n)===0)break e;case"keydown":case"keyup":_=T0;break;case"focusin":y="focus",_=ya;break;case"focusout":y="blur",_=ya;break;case"beforeblur":case"afterblur":_=ya;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=m0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=b0;break;case Am:case Om:case Dm:_=_0;break;case Lm:_=A0;break;case"scroll":_=f0;break;case"wheel":_=D0;break;case"copy":case"cut":case"paste":_=w0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Sh}var x=(e&4)!==0,b=!x&&t==="scroll",g=x?f!==null?f+"Capture":null:f;x=[];for(var m=u,p;m!==null;){p=m;var E=p.stateNode;if(p.tag===5&&E!==null&&(p=E,g!==null&&(E=os(m,g),E!=null&&x.push(fs(m,E,p)))),b)break;m=m.return}0<x.length&&(f=new _(f,y,null,n,d),h.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",f&&n!==hu&&(y=n.relatedTarget||n.fromElement)&&(Xn(y)||y[Jt]))break e;if((_||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,_?(y=n.relatedTarget||n.toElement,_=u,y=y?Xn(y):null,y!==null&&(b=_r(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(_=null,y=u),_!==y)){if(x=Ch,E="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(x=Sh,E="onPointerLeave",g="onPointerEnter",m="pointer"),b=_==null?f:Nr(_),p=y==null?f:Nr(y),f=new x(E,m+"leave",_,n,d),f.target=b,f.relatedTarget=p,E=null,Xn(d)===u&&(x=new x(g,m+"enter",y,n,d),x.target=p,x.relatedTarget=b,E=x),b=E,_&&y)t:{for(x=_,g=y,m=0,p=x;p;p=Er(p))m++;for(p=0,E=g;E;E=Er(E))p++;for(;0<m-p;)x=Er(x),m--;for(;0<p-m;)g=Er(g),p--;for(;m--;){if(x===g||g!==null&&x===g.alternate)break t;x=Er(x),g=Er(g)}x=null}else x=null;_!==null&&Mh(h,f,_,x,!1),y!==null&&b!==null&&Mh(h,b,y,x,!0)}}e:{if(f=u?Nr(u):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var v=W0;else if(Nh(f))if(Tm)v=$0;else{v=V0;var N=B0}else(_=f.nodeName)&&_.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(v=H0);if(v&&(v=v(t,u))){Im(h,v,n,d);break e}N&&N(t,f,u),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&lu(f,"number",f.value)}switch(N=u?Nr(u):window,t){case"focusin":(Nh(N)||N.contentEditable==="true")&&(Ir=N,vu=u,Ki=null);break;case"focusout":Ki=vu=Ir=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,Oh(h,n,d);break;case"selectionchange":if(Y0)break;case"keydown":case"keyup":Oh(h,n,d)}var A;if(Dc)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Sr?km(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Cm&&n.locale!=="ko"&&(Sr||O!=="onCompositionStart"?O==="onCompositionEnd"&&Sr&&(A=xm()):(_n=d,Pc="value"in _n?_n.value:_n.textContent,Sr=!0)),N=Wo(u,O),0<N.length&&(O=new kh(O,t,null,n,d),h.push({event:O,listeners:N}),A?O.data=A:(A=Sm(n),A!==null&&(O.data=A)))),(A=M0?j0(t,n):F0(t,n))&&(u=Wo(u,"onBeforeInput"),0<u.length&&(d=new kh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=A))}jm(h,e)})}function fs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=os(t,n),s!=null&&r.unshift(fs(t,s,i)),s=os(t,e),s!=null&&r.push(fs(t,s,i))),t=t.return}return r}function Er(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=os(n,s),a!=null&&o.unshift(fs(n,a,l))):i||(a=os(n,s),a!=null&&o.push(fs(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var X0=/\r\n?/g,Z0=/\u0000|\uFFFD/g;function jh(t){return(typeof t=="string"?t:""+t).replace(X0,`
`).replace(Z0,"")}function oo(t,e,n){if(e=jh(e),jh(t)!==e&&n)throw Error(R(425))}function Bo(){}var Eu=null,xu=null;function Cu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ku=typeof setTimeout=="function"?setTimeout:void 0,e1=typeof clearTimeout=="function"?clearTimeout:void 0,Fh=typeof Promise=="function"?Promise:void 0,t1=typeof queueMicrotask=="function"?queueMicrotask:typeof Fh<"u"?function(t){return Fh.resolve(null).then(t).catch(n1)}:ku;function n1(t){setTimeout(function(){throw t})}function Sa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),us(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);us(e)}function kn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Uh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var mi=Math.random().toString(36).slice(2),bt="__reactFiber$"+mi,ps="__reactProps$"+mi,Jt="__reactContainer$"+mi,Su="__reactEvents$"+mi,r1="__reactListeners$"+mi,i1="__reactHandles$"+mi;function Xn(t){var e=t[bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jt]||n[bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Uh(t);t!==null;){if(n=t[bt])return n;t=Uh(t)}return e}t=n,n=t.parentNode}return null}function Ls(t){return t=t[bt]||t[Jt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Nr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function Ll(t){return t[ps]||null}var Iu=[],Rr=-1;function Bn(t){return{current:t}}function se(t){0>Rr||(t.current=Iu[Rr],Iu[Rr]=null,Rr--)}function re(t,e){Rr++,Iu[Rr]=t.current,t.current=e}var jn={},Oe=Bn(jn),Ke=Bn(!1),lr=jn;function Zr(t,e){var n=t.type.contextTypes;if(!n)return jn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ye(t){return t=t.childContextTypes,t!=null}function Vo(){se(Ke),se(Oe)}function zh(t,e,n){if(Oe.current!==jn)throw Error(R(168));re(Oe,e),re(Ke,n)}function Um(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,Bv(t)||"Unknown",i));return ue({},n,r)}function Ho(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jn,lr=Oe.current,re(Oe,t),re(Ke,Ke.current),!0}function Wh(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=Um(t,e,lr),r.__reactInternalMemoizedMergedChildContext=t,se(Ke),se(Oe),re(Oe,t)):se(Ke),re(Ke,n)}var Wt=null,Ml=!1,Ia=!1;function zm(t){Wt===null?Wt=[t]:Wt.push(t)}function s1(t){Ml=!0,zm(t)}function Vn(){if(!Ia&&Wt!==null){Ia=!0;var t=0,e=J;try{var n=Wt;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Wt=null,Ml=!1}catch(i){throw Wt!==null&&(Wt=Wt.slice(t+1)),dm(Tc,Vn),i}finally{J=e,Ia=!1}}return null}var br=[],Pr=0,$o=null,Go=0,it=[],st=0,ar=null,Bt=1,Vt="";function Yn(t,e){br[Pr++]=Go,br[Pr++]=$o,$o=t,Go=e}function Wm(t,e,n){it[st++]=Bt,it[st++]=Vt,it[st++]=ar,ar=t;var r=Bt;t=Vt;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var s=32-xt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Bt=1<<32-xt(e)+i|n<<i|r,Vt=s+t}else Bt=1<<s|n<<i|r,Vt=t}function Mc(t){t.return!==null&&(Yn(t,1),Wm(t,1,0))}function jc(t){for(;t===$o;)$o=br[--Pr],br[Pr]=null,Go=br[--Pr],br[Pr]=null;for(;t===ar;)ar=it[--st],it[st]=null,Vt=it[--st],it[st]=null,Bt=it[--st],it[st]=null}var Ze=null,Xe=null,oe=!1,_t=null;function Bm(t,e){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ze=t,Xe=kn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ze=t,Xe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ar!==null?{id:Bt,overflow:Vt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ze=t,Xe=null,!0):!1;default:return!1}}function Tu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nu(t){if(oe){var e=Xe;if(e){var n=e;if(!Bh(t,e)){if(Tu(t))throw Error(R(418));e=kn(n.nextSibling);var r=Ze;e&&Bh(t,e)?Bm(r,n):(t.flags=t.flags&-4097|2,oe=!1,Ze=t)}}else{if(Tu(t))throw Error(R(418));t.flags=t.flags&-4097|2,oe=!1,Ze=t}}}function Vh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ze=t}function lo(t){if(t!==Ze)return!1;if(!oe)return Vh(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cu(t.type,t.memoizedProps)),e&&(e=Xe)){if(Tu(t))throw Vm(),Error(R(418));for(;e;)Bm(t,e),e=kn(e.nextSibling)}if(Vh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xe=kn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xe=null}}else Xe=Ze?kn(t.stateNode.nextSibling):null;return!0}function Vm(){for(var t=Xe;t;)t=kn(t.nextSibling)}function ei(){Xe=Ze=null,oe=!1}function Fc(t){_t===null?_t=[t]:_t.push(t)}var o1=sn.ReactCurrentBatchConfig;function bi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function ao(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hh(t){var e=t._init;return e(t._payload)}function Hm(t){function e(g,m){if(t){var p=g.deletions;p===null?(g.deletions=[m],g.flags|=16):p.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Nn(g,m),g.index=0,g.sibling=null,g}function s(g,m,p){return g.index=p,t?(p=g.alternate,p!==null?(p=p.index,p<m?(g.flags|=2,m):p):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,m,p,E){return m===null||m.tag!==6?(m=Oa(p,g.mode,E),m.return=g,m):(m=i(m,p),m.return=g,m)}function a(g,m,p,E){var v=p.type;return v===kr?d(g,m,p.props.children,E,p.key):m!==null&&(m.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===cn&&Hh(v)===m.type)?(E=i(m,p.props),E.ref=bi(g,m,p),E.return=g,E):(E=Ro(p.type,p.key,p.props,null,g.mode,E),E.ref=bi(g,m,p),E.return=g,E)}function u(g,m,p,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=Da(p,g.mode,E),m.return=g,m):(m=i(m,p.children||[]),m.return=g,m)}function d(g,m,p,E,v){return m===null||m.tag!==7?(m=ir(p,g.mode,E,v),m.return=g,m):(m=i(m,p),m.return=g,m)}function h(g,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Oa(""+m,g.mode,p),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Js:return p=Ro(m.type,m.key,m.props,null,g.mode,p),p.ref=bi(g,null,m),p.return=g,p;case Cr:return m=Da(m,g.mode,p),m.return=g,m;case cn:var E=m._init;return h(g,E(m._payload),p)}if(Fi(m)||Si(m))return m=ir(m,g.mode,p,null),m.return=g,m;ao(g,m)}return null}function f(g,m,p,E){var v=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return v!==null?null:l(g,m,""+p,E);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Js:return p.key===v?a(g,m,p,E):null;case Cr:return p.key===v?u(g,m,p,E):null;case cn:return v=p._init,f(g,m,v(p._payload),E)}if(Fi(p)||Si(p))return v!==null?null:d(g,m,p,E,null);ao(g,p)}return null}function _(g,m,p,E,v){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(p)||null,l(m,g,""+E,v);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Js:return g=g.get(E.key===null?p:E.key)||null,a(m,g,E,v);case Cr:return g=g.get(E.key===null?p:E.key)||null,u(m,g,E,v);case cn:var N=E._init;return _(g,m,p,N(E._payload),v)}if(Fi(E)||Si(E))return g=g.get(p)||null,d(m,g,E,v,null);ao(m,E)}return null}function y(g,m,p,E){for(var v=null,N=null,A=m,O=m=0,G=null;A!==null&&O<p.length;O++){A.index>O?(G=A,A=null):G=A.sibling;var U=f(g,A,p[O],E);if(U===null){A===null&&(A=G);break}t&&A&&U.alternate===null&&e(g,A),m=s(U,m,O),N===null?v=U:N.sibling=U,N=U,A=G}if(O===p.length)return n(g,A),oe&&Yn(g,O),v;if(A===null){for(;O<p.length;O++)A=h(g,p[O],E),A!==null&&(m=s(A,m,O),N===null?v=A:N.sibling=A,N=A);return oe&&Yn(g,O),v}for(A=r(g,A);O<p.length;O++)G=_(A,g,O,p[O],E),G!==null&&(t&&G.alternate!==null&&A.delete(G.key===null?O:G.key),m=s(G,m,O),N===null?v=G:N.sibling=G,N=G);return t&&A.forEach(function(me){return e(g,me)}),oe&&Yn(g,O),v}function x(g,m,p,E){var v=Si(p);if(typeof v!="function")throw Error(R(150));if(p=v.call(p),p==null)throw Error(R(151));for(var N=v=null,A=m,O=m=0,G=null,U=p.next();A!==null&&!U.done;O++,U=p.next()){A.index>O?(G=A,A=null):G=A.sibling;var me=f(g,A,U.value,E);if(me===null){A===null&&(A=G);break}t&&A&&me.alternate===null&&e(g,A),m=s(me,m,O),N===null?v=me:N.sibling=me,N=me,A=G}if(U.done)return n(g,A),oe&&Yn(g,O),v;if(A===null){for(;!U.done;O++,U=p.next())U=h(g,U.value,E),U!==null&&(m=s(U,m,O),N===null?v=U:N.sibling=U,N=U);return oe&&Yn(g,O),v}for(A=r(g,A);!U.done;O++,U=p.next())U=_(A,g,O,U.value,E),U!==null&&(t&&U.alternate!==null&&A.delete(U.key===null?O:U.key),m=s(U,m,O),N===null?v=U:N.sibling=U,N=U);return t&&A.forEach(function(Ve){return e(g,Ve)}),oe&&Yn(g,O),v}function b(g,m,p,E){if(typeof p=="object"&&p!==null&&p.type===kr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Js:e:{for(var v=p.key,N=m;N!==null;){if(N.key===v){if(v=p.type,v===kr){if(N.tag===7){n(g,N.sibling),m=i(N,p.props.children),m.return=g,g=m;break e}}else if(N.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===cn&&Hh(v)===N.type){n(g,N.sibling),m=i(N,p.props),m.ref=bi(g,N,p),m.return=g,g=m;break e}n(g,N);break}else e(g,N);N=N.sibling}p.type===kr?(m=ir(p.props.children,g.mode,E,p.key),m.return=g,g=m):(E=Ro(p.type,p.key,p.props,null,g.mode,E),E.ref=bi(g,m,p),E.return=g,g=E)}return o(g);case Cr:e:{for(N=p.key;m!==null;){if(m.key===N)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(g,m.sibling),m=i(m,p.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=Da(p,g.mode,E),m.return=g,g=m}return o(g);case cn:return N=p._init,b(g,m,N(p._payload),E)}if(Fi(p))return y(g,m,p,E);if(Si(p))return x(g,m,p,E);ao(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,p),m.return=g,g=m):(n(g,m),m=Oa(p,g.mode,E),m.return=g,g=m),o(g)):n(g,m)}return b}var ti=Hm(!0),$m=Hm(!1),Ko=Bn(null),Yo=null,Ar=null,Uc=null;function zc(){Uc=Ar=Yo=null}function Wc(t){var e=Ko.current;se(Ko),t._currentValue=e}function Ru(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Br(t,e){Yo=t,Uc=Ar=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($e=!0),t.firstContext=null)}function ut(t){var e=t._currentValue;if(Uc!==t)if(t={context:t,memoizedValue:e,next:null},Ar===null){if(Yo===null)throw Error(R(308));Ar=t,Yo.dependencies={lanes:0,firstContext:t}}else Ar=Ar.next=t;return e}var Zn=null;function Bc(t){Zn===null?Zn=[t]:Zn.push(t)}function Gm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Xt(t,r)}function Xt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dn=!1;function Vc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Km(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Xt(t,n)}return i=r.interleaved,i===null?(e.next=e,Bc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Xt(t,n)}function Co(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nc(t,n)}}function $h(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qo(t,e,n,r){var i=t.updateQueue;dn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var h=i.baseState;o=0,d=u=a=null,l=s;do{var f=l.lane,_=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,x=l;switch(f=e,_=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){h=y.call(_,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,f=typeof y=="function"?y.call(_,h,f):y,f==null)break e;h=ue({},h,f);break e;case 2:dn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else _={eventTime:_,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=_,a=h):d=d.next=_,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(a=h),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);cr|=o,t.lanes=o,t.memoizedState=h}}function Gh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var Ms={},At=Bn(Ms),ms=Bn(Ms),gs=Bn(Ms);function er(t){if(t===Ms)throw Error(R(174));return t}function Hc(t,e){switch(re(gs,e),re(ms,t),re(At,Ms),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uu(e,t)}se(At),re(At,e)}function ni(){se(At),se(ms),se(gs)}function Ym(t){er(gs.current);var e=er(At.current),n=uu(e,t.type);e!==n&&(re(ms,t),re(At,n))}function $c(t){ms.current===t&&(se(At),se(ms))}var le=Bn(0);function Qo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ta=[];function Gc(){for(var t=0;t<Ta.length;t++)Ta[t]._workInProgressVersionPrimary=null;Ta.length=0}var ko=sn.ReactCurrentDispatcher,Na=sn.ReactCurrentBatchConfig,ur=0,ae=null,ge=null,xe=null,Jo=!1,Yi=!1,ys=0,l1=0;function be(){throw Error(R(321))}function Kc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!St(t[n],e[n]))return!1;return!0}function Yc(t,e,n,r,i,s){if(ur=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ko.current=t===null||t.memoizedState===null?d1:h1,t=n(r,i),Yi){s=0;do{if(Yi=!1,ys=0,25<=s)throw Error(R(301));s+=1,xe=ge=null,e.updateQueue=null,ko.current=f1,t=n(r,i)}while(Yi)}if(ko.current=Xo,e=ge!==null&&ge.next!==null,ur=0,xe=ge=ae=null,Jo=!1,e)throw Error(R(300));return t}function qc(){var t=ys!==0;return ys=0,t}function Rt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ae.memoizedState=xe=t:xe=xe.next=t,xe}function ct(){if(ge===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=ge.next;var e=xe===null?ae.memoizedState:xe.next;if(e!==null)xe=e,ge=t;else{if(t===null)throw Error(R(310));ge=t,t={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},xe===null?ae.memoizedState=xe=t:xe=xe.next=t}return xe}function _s(t,e){return typeof e=="function"?e(t):e}function Ra(t){var e=ct(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((ur&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=h,o=r):a=a.next=h,ae.lanes|=d,cr|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,St(r,e.memoizedState)||($e=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,cr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ba(t){var e=ct(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);St(s,e.memoizedState)||($e=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function qm(){}function Qm(t,e){var n=ae,r=ct(),i=e(),s=!St(r.memoizedState,i);if(s&&(r.memoizedState=i,$e=!0),r=r.queue,Qc(Zm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,vs(9,Xm.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(R(349));ur&30||Jm(n,e,i)}return i}function Jm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Xm(t,e,n,r){e.value=n,e.getSnapshot=r,eg(e)&&tg(t)}function Zm(t,e,n){return n(function(){eg(e)&&tg(t)})}function eg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!St(t,n)}catch{return!0}}function tg(t){var e=Xt(t,1);e!==null&&Ct(e,t,1,-1)}function Kh(t){var e=Rt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_s,lastRenderedState:t},e.queue=t,t=t.dispatch=c1.bind(null,ae,t),[e.memoizedState,t]}function vs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ng(){return ct().memoizedState}function So(t,e,n,r){var i=Rt();ae.flags|=t,i.memoizedState=vs(1|e,n,void 0,r===void 0?null:r)}function jl(t,e,n,r){var i=ct();r=r===void 0?null:r;var s=void 0;if(ge!==null){var o=ge.memoizedState;if(s=o.destroy,r!==null&&Kc(r,o.deps)){i.memoizedState=vs(e,n,s,r);return}}ae.flags|=t,i.memoizedState=vs(1|e,n,s,r)}function Yh(t,e){return So(8390656,8,t,e)}function Qc(t,e){return jl(2048,8,t,e)}function rg(t,e){return jl(4,2,t,e)}function ig(t,e){return jl(4,4,t,e)}function sg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function og(t,e,n){return n=n!=null?n.concat([t]):null,jl(4,4,sg.bind(null,e,t),n)}function Jc(){}function lg(t,e){var n=ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ag(t,e){var n=ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ug(t,e,n){return ur&21?(St(n,e)||(n=pm(),ae.lanes|=n,cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$e=!0),t.memoizedState=n)}function a1(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=Na.transition;Na.transition={};try{t(!1),e()}finally{J=n,Na.transition=r}}function cg(){return ct().memoizedState}function u1(t,e,n){var r=Tn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dg(t))hg(e,n);else if(n=Gm(t,e,n,r),n!==null){var i=je();Ct(n,t,r,i),fg(n,e,r)}}function c1(t,e,n){var r=Tn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dg(t))hg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,St(l,o)){var a=e.interleaved;a===null?(i.next=i,Bc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Gm(t,e,i,r),n!==null&&(i=je(),Ct(n,t,r,i),fg(n,e,r))}}function dg(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function hg(t,e){Yi=Jo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function fg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nc(t,n)}}var Xo={readContext:ut,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},d1={readContext:ut,useCallback:function(t,e){return Rt().memoizedState=[t,e===void 0?null:e],t},useContext:ut,useEffect:Yh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,So(4194308,4,sg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return So(4194308,4,t,e)},useInsertionEffect:function(t,e){return So(4,2,t,e)},useMemo:function(t,e){var n=Rt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Rt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=u1.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=Rt();return t={current:t},e.memoizedState=t},useState:Kh,useDebugValue:Jc,useDeferredValue:function(t){return Rt().memoizedState=t},useTransition:function(){var t=Kh(!1),e=t[0];return t=a1.bind(null,t[1]),Rt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=Rt();if(oe){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),ke===null)throw Error(R(349));ur&30||Jm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Yh(Zm.bind(null,r,s,t),[t]),r.flags|=2048,vs(9,Xm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Rt(),e=ke.identifierPrefix;if(oe){var n=Vt,r=Bt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ys++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=l1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},h1={readContext:ut,useCallback:lg,useContext:ut,useEffect:Qc,useImperativeHandle:og,useInsertionEffect:rg,useLayoutEffect:ig,useMemo:ag,useReducer:Ra,useRef:ng,useState:function(){return Ra(_s)},useDebugValue:Jc,useDeferredValue:function(t){var e=ct();return ug(e,ge.memoizedState,t)},useTransition:function(){var t=Ra(_s)[0],e=ct().memoizedState;return[t,e]},useMutableSource:qm,useSyncExternalStore:Qm,useId:cg,unstable_isNewReconciler:!1},f1={readContext:ut,useCallback:lg,useContext:ut,useEffect:Qc,useImperativeHandle:og,useInsertionEffect:rg,useLayoutEffect:ig,useMemo:ag,useReducer:ba,useRef:ng,useState:function(){return ba(_s)},useDebugValue:Jc,useDeferredValue:function(t){var e=ct();return ge===null?e.memoizedState=t:ug(e,ge.memoizedState,t)},useTransition:function(){var t=ba(_s)[0],e=ct().memoizedState;return[t,e]},useMutableSource:qm,useSyncExternalStore:Qm,useId:cg,unstable_isNewReconciler:!1};function gt(t,e){if(t&&t.defaultProps){e=ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fl={isMounted:function(t){return(t=t._reactInternals)?_r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=je(),i=Tn(t),s=Yt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Sn(t,s,i),e!==null&&(Ct(e,t,i,r),Co(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=je(),i=Tn(t),s=Yt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sn(t,s,i),e!==null&&(Ct(e,t,i,r),Co(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=je(),r=Tn(t),i=Yt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Sn(t,i,r),e!==null&&(Ct(e,t,r,n),Co(e,t,r))}};function qh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ds(n,r)||!ds(i,s):!0}function pg(t,e,n){var r=!1,i=jn,s=e.contextType;return typeof s=="object"&&s!==null?s=ut(s):(i=Ye(e)?lr:Oe.current,r=e.contextTypes,s=(r=r!=null)?Zr(t,i):jn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fl.enqueueReplaceState(e,e.state,null)}function Pu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Vc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ut(s):(s=Ye(e)?lr:Oe.current,i.context=Zr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Fl.enqueueReplaceState(i,i.state,null),qo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ri(t,e){try{var n="",r=e;do n+=Wv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Pa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Au(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var p1=typeof WeakMap=="function"?WeakMap:Map;function mg(t,e,n){n=Yt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){el||(el=!0,Bu=r),Au(t,e)},n}function gg(t,e,n){n=Yt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Au(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Au(t,e),typeof r!="function"&&(In===null?In=new Set([this]):In.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new p1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=N1.bind(null,t,e,n),e.then(t,t))}function Xh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yt(-1,1),e.tag=2,Sn(n,e,1))),n.lanes|=1),t)}var m1=sn.ReactCurrentOwner,$e=!1;function Le(t,e,n,r){e.child=t===null?$m(e,null,n,r):ti(e,t.child,n,r)}function ef(t,e,n,r,i){n=n.render;var s=e.ref;return Br(e,i),r=Yc(t,e,n,r,s,i),n=qc(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(oe&&n&&Mc(e),e.flags|=1,Le(t,e,r,i),e.child)}function tf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,yg(t,e,s,r,i)):(t=Ro(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ds,n(o,r)&&t.ref===e.ref)return Zt(t,e,i)}return e.flags|=1,t=Nn(s,r),t.ref=e.ref,t.return=e,e.child=t}function yg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ds(s,r)&&t.ref===e.ref)if($e=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&($e=!0);else return e.lanes=t.lanes,Zt(t,e,i)}return Ou(t,e,n,r,i)}function _g(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Dr,Je),Je|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,re(Dr,Je),Je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,re(Dr,Je),Je|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,re(Dr,Je),Je|=r;return Le(t,e,i,n),e.child}function vg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ou(t,e,n,r,i){var s=Ye(n)?lr:Oe.current;return s=Zr(e,s),Br(e,i),n=Yc(t,e,n,r,s,i),r=qc(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(oe&&r&&Mc(e),e.flags|=1,Le(t,e,n,i),e.child)}function nf(t,e,n,r,i){if(Ye(n)){var s=!0;Ho(e)}else s=!1;if(Br(e,i),e.stateNode===null)Io(t,e),pg(e,n,r),Pu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=Ye(n)?lr:Oe.current,u=Zr(e,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Qh(e,o,r,u),dn=!1;var f=e.memoizedState;o.state=f,qo(e,r,o,i),a=e.memoizedState,l!==r||f!==a||Ke.current||dn?(typeof d=="function"&&(bu(e,n,d,r),a=e.memoizedState),(l=dn||qh(e,n,l,r,f,a,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Km(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:gt(e.type,l),o.props=u,h=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=ut(a):(a=Ye(n)?lr:Oe.current,a=Zr(e,a));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||f!==a)&&Qh(e,o,r,a),dn=!1,f=e.memoizedState,o.state=f,qo(e,r,o,i);var y=e.memoizedState;l!==h||f!==y||Ke.current||dn?(typeof _=="function"&&(bu(e,n,_,r),y=e.memoizedState),(u=dn||qh(e,n,u,r,f,y,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Du(t,e,n,r,s,i)}function Du(t,e,n,r,i,s){vg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Wh(e,n,!1),Zt(t,e,s);r=e.stateNode,m1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ti(e,t.child,null,s),e.child=ti(e,null,l,s)):Le(t,e,l,s),e.memoizedState=r.state,i&&Wh(e,n,!0),e.child}function wg(t){var e=t.stateNode;e.pendingContext?zh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zh(t,e.context,!1),Hc(t,e.containerInfo)}function rf(t,e,n,r,i){return ei(),Fc(i),e.flags|=256,Le(t,e,n,r),e.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Mu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Eg(t,e,n){var r=e.pendingProps,i=le.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),re(le,i&1),t===null)return Nu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wl(o,r,0,null),t=ir(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mu(n),e.memoizedState=Lu,t):Xc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return g1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Nn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Nn(l,s):(s=ir(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Mu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lu,r}return s=t.child,t=s.sibling,r=Nn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xc(t,e){return e=Wl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function uo(t,e,n,r){return r!==null&&Fc(r),ti(e,t.child,null,n),t=Xc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function g1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Pa(Error(R(422))),uo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Wl({mode:"visible",children:r.children},i,0,null),s=ir(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ti(e,t.child,null,o),e.child.memoizedState=Mu(o),e.memoizedState=Lu,s);if(!(e.mode&1))return uo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(R(419)),r=Pa(s,r,void 0),uo(t,e,o,r)}if(l=(o&t.childLanes)!==0,$e||l){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Xt(t,i),Ct(r,t,i,-1))}return id(),r=Pa(Error(R(421))),uo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=R1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Xe=kn(i.nextSibling),Ze=e,oe=!0,_t=null,t!==null&&(it[st++]=Bt,it[st++]=Vt,it[st++]=ar,Bt=t.id,Vt=t.overflow,ar=e),e=Xc(e,r.children),e.flags|=4096,e)}function sf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ru(t.return,e,n)}function Aa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function xg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Le(t,e,r.children,n),r=le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sf(t,n,e);else if(t.tag===19)sf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(re(le,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Qo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Aa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Qo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Aa(e,!0,n,null,s);break;case"together":Aa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Io(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=Nn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function y1(t,e,n){switch(e.tag){case 3:wg(e),ei();break;case 5:Ym(e);break;case 1:Ye(e.type)&&Ho(e);break;case 4:Hc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;re(Ko,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(re(le,le.current&1),e.flags|=128,null):n&e.child.childLanes?Eg(t,e,n):(re(le,le.current&1),t=Zt(t,e,n),t!==null?t.sibling:null);re(le,le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return xg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(le,le.current),r)break;return null;case 22:case 23:return e.lanes=0,_g(t,e,n)}return Zt(t,e,n)}var Cg,ju,kg,Sg;Cg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ju=function(){};kg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,er(At.current);var s=null;switch(n){case"input":i=su(t,i),r=su(t,r),s=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),s=[];break;case"textarea":i=au(t,i),r=au(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Bo)}cu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(is.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(is.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ie("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Sg=function(t,e,n,r){n!==r&&(e.flags|=4)};function Pi(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function _1(t,e,n){var r=e.pendingProps;switch(jc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(e),null;case 1:return Ye(e.type)&&Vo(),Pe(e),null;case 3:return r=e.stateNode,ni(),se(Ke),se(Oe),Gc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(lo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_t!==null&&($u(_t),_t=null))),ju(t,e),Pe(e),null;case 5:$c(e);var i=er(gs.current);if(n=e.type,t!==null&&e.stateNode!=null)kg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return Pe(e),null}if(t=er(At.current),lo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[bt]=e,r[ps]=s,t=(e.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<zi.length;i++)ie(zi[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":fh(r,s),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ie("invalid",r);break;case"textarea":mh(r,s),ie("invalid",r)}cu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&oo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&oo(r.textContent,l,t),i=["children",""+l]):is.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ie("scroll",r)}switch(n){case"input":Xs(r),ph(r,s,!0);break;case"textarea":Xs(r),gh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Bo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[bt]=e,t[ps]=r,Cg(t,e,!1,!1),e.stateNode=t;e:{switch(o=du(n,r),n){case"dialog":ie("cancel",t),ie("close",t),i=r;break;case"iframe":case"object":case"embed":ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<zi.length;i++)ie(zi[i],t);i=r;break;case"source":ie("error",t),i=r;break;case"img":case"image":case"link":ie("error",t),ie("load",t),i=r;break;case"details":ie("toggle",t),i=r;break;case"input":fh(t,r),i=su(t,r),ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),ie("invalid",t);break;case"textarea":mh(t,r),i=au(t,r),ie("invalid",t);break;default:i=r}cu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?nm(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&em(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ss(t,a):typeof a=="number"&&ss(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(is.hasOwnProperty(s)?a!=null&&s==="onScroll"&&ie("scroll",t):a!=null&&xc(t,s,a,o))}switch(n){case"input":Xs(t),ph(t,r,!1);break;case"textarea":Xs(t),gh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pe(e),null;case 6:if(t&&e.stateNode!=null)Sg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=er(gs.current),er(At.current),lo(e)){if(r=e.stateNode,n=e.memoizedProps,r[bt]=e,(s=r.nodeValue!==n)&&(t=Ze,t!==null))switch(t.tag){case 3:oo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=e,e.stateNode=r}return Pe(e),null;case 13:if(se(le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&Xe!==null&&e.mode&1&&!(e.flags&128))Vm(),ei(),e.flags|=98560,s=!1;else if(s=lo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[bt]=e}else ei(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pe(e),s=!1}else _t!==null&&($u(_t),_t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||le.current&1?ve===0&&(ve=3):id())),e.updateQueue!==null&&(e.flags|=4),Pe(e),null);case 4:return ni(),ju(t,e),t===null&&hs(e.stateNode.containerInfo),Pe(e),null;case 10:return Wc(e.type._context),Pe(e),null;case 17:return Ye(e.type)&&Vo(),Pe(e),null;case 19:if(se(le),s=e.memoizedState,s===null)return Pe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Pi(s,!1);else{if(ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Qo(t),o!==null){for(e.flags|=128,Pi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return re(le,le.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>ii&&(e.flags|=128,r=!0,Pi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Qo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Pi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!oe)return Pe(e),null}else 2*fe()-s.renderingStartTime>ii&&n!==1073741824&&(e.flags|=128,r=!0,Pi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=le.current,re(le,r?n&1|2:n&1),e):(Pe(e),null);case 22:case 23:return rd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Je&1073741824&&(Pe(e),e.subtreeFlags&6&&(e.flags|=8192)):Pe(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function v1(t,e){switch(jc(e),e.tag){case 1:return Ye(e.type)&&Vo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ni(),se(Ke),se(Oe),Gc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $c(e),null;case 13:if(se(le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));ei()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return se(le),null;case 4:return ni(),null;case 10:return Wc(e.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var co=!1,Ae=!1,w1=typeof WeakSet=="function"?WeakSet:Set,L=null;function Or(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function Fu(t,e,n){try{n()}catch(r){ce(t,e,r)}}var of=!1;function E1(t,e){if(Eu=Uo,t=bm(),Lc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,h=t,f=null;t:for(;;){for(var _;h!==n||i!==0&&h.nodeType!==3||(l=o+i),h!==s||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(_=h.firstChild)!==null;)f=h,h=_;for(;;){if(h===t)break t;if(f===n&&++u===i&&(l=o),f===s&&++d===r&&(a=o),(_=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(xu={focusedElem:t,selectionRange:n},Uo=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,b=y.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?x:gt(e.type,x),b);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(E){ce(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return y=of,of=!1,y}function qi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Fu(e,n,s)}i=i.next}while(i!==r)}}function Ul(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Uu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ig(t){var e=t.alternate;e!==null&&(t.alternate=null,Ig(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bt],delete e[ps],delete e[Su],delete e[r1],delete e[i1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tg(t){return t.tag===5||t.tag===3||t.tag===4}function lf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bo));else if(r!==4&&(t=t.child,t!==null))for(zu(t,e,n),t=t.sibling;t!==null;)zu(t,e,n),t=t.sibling}function Wu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wu(t,e,n),t=t.sibling;t!==null;)Wu(t,e,n),t=t.sibling}var Se=null,yt=!1;function ln(t,e,n){for(n=n.child;n!==null;)Ng(t,e,n),n=n.sibling}function Ng(t,e,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Pl,n)}catch{}switch(n.tag){case 5:Ae||Or(n,e);case 6:var r=Se,i=yt;Se=null,ln(t,e,n),Se=r,yt=i,Se!==null&&(yt?(t=Se,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(yt?(t=Se,n=n.stateNode,t.nodeType===8?Sa(t.parentNode,n):t.nodeType===1&&Sa(t,n),us(t)):Sa(Se,n.stateNode));break;case 4:r=Se,i=yt,Se=n.stateNode.containerInfo,yt=!0,ln(t,e,n),Se=r,yt=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fu(n,e,o),i=i.next}while(i!==r)}ln(t,e,n);break;case 1:if(!Ae&&(Or(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ce(n,e,l)}ln(t,e,n);break;case 21:ln(t,e,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,ln(t,e,n),Ae=r):ln(t,e,n);break;default:ln(t,e,n)}}function af(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new w1),e.forEach(function(r){var i=b1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Se=l.stateNode,yt=!1;break e;case 3:Se=l.stateNode.containerInfo,yt=!0;break e;case 4:Se=l.stateNode.containerInfo,yt=!0;break e}l=l.return}if(Se===null)throw Error(R(160));Ng(s,o,i),Se=null,yt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rg(e,t),e=e.sibling}function Rg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mt(e,t),Nt(t),r&4){try{qi(3,t,t.return),Ul(3,t)}catch(x){ce(t,t.return,x)}try{qi(5,t,t.return)}catch(x){ce(t,t.return,x)}}break;case 1:mt(e,t),Nt(t),r&512&&n!==null&&Or(n,n.return);break;case 5:if(mt(e,t),Nt(t),r&512&&n!==null&&Or(n,n.return),t.flags&32){var i=t.stateNode;try{ss(i,"")}catch(x){ce(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Jp(i,s),du(l,o);var u=du(l,s);for(o=0;o<a.length;o+=2){var d=a[o],h=a[o+1];d==="style"?nm(i,h):d==="dangerouslySetInnerHTML"?em(i,h):d==="children"?ss(i,h):xc(i,d,h,u)}switch(l){case"input":ou(i,s);break;case"textarea":Xp(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Fr(i,!!s.multiple,_,!1):f!==!!s.multiple&&(s.defaultValue!=null?Fr(i,!!s.multiple,s.defaultValue,!0):Fr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ps]=s}catch(x){ce(t,t.return,x)}}break;case 6:if(mt(e,t),Nt(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){ce(t,t.return,x)}}break;case 3:if(mt(e,t),Nt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{us(e.containerInfo)}catch(x){ce(t,t.return,x)}break;case 4:mt(e,t),Nt(t);break;case 13:mt(e,t),Nt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(td=fe())),r&4&&af(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ae=(u=Ae)||d,mt(e,t),Ae=u):mt(e,t),Nt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(L=t,d=t.child;d!==null;){for(h=L=d;L!==null;){switch(f=L,_=f.child,f.tag){case 0:case 11:case 14:case 15:qi(4,f,f.return);break;case 1:Or(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(x){ce(r,n,x)}}break;case 5:Or(f,f.return);break;case 22:if(f.memoizedState!==null){cf(h);continue}}_!==null?(_.return=f,L=_):cf(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=tm("display",o))}catch(x){ce(t,t.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){ce(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:mt(e,t),Nt(t),r&4&&af(t);break;case 21:break;default:mt(e,t),Nt(t)}}function Nt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Tg(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ss(i,""),r.flags&=-33);var s=lf(t);Wu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=lf(t);zu(t,l,o);break;default:throw Error(R(161))}}catch(a){ce(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function x1(t,e,n){L=t,bg(t)}function bg(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||co;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ae;l=co;var u=Ae;if(co=o,(Ae=a)&&!u)for(L=i;L!==null;)o=L,a=o.child,o.tag===22&&o.memoizedState!==null?df(i):a!==null?(a.return=o,L=a):df(i);for(;s!==null;)L=s,bg(s),s=s.sibling;L=i,co=l,Ae=u}uf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):uf(t)}}function uf(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ae||Ul(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:gt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&us(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Ae||e.flags&512&&Uu(e)}catch(f){ce(e,e.return,f)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function cf(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function df(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ul(4,e)}catch(a){ce(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ce(e,i,a)}}var s=e.return;try{Uu(e)}catch(a){ce(e,s,a)}break;case 5:var o=e.return;try{Uu(e)}catch(a){ce(e,o,a)}}}catch(a){ce(e,e.return,a)}if(e===t){L=null;break}var l=e.sibling;if(l!==null){l.return=e.return,L=l;break}L=e.return}}var C1=Math.ceil,Zo=sn.ReactCurrentDispatcher,Zc=sn.ReactCurrentOwner,at=sn.ReactCurrentBatchConfig,Y=0,ke=null,pe=null,Te=0,Je=0,Dr=Bn(0),ve=0,ws=null,cr=0,zl=0,ed=0,Qi=null,He=null,td=0,ii=1/0,zt=null,el=!1,Bu=null,In=null,ho=!1,vn=null,tl=0,Ji=0,Vu=null,To=-1,No=0;function je(){return Y&6?fe():To!==-1?To:To=fe()}function Tn(t){return t.mode&1?Y&2&&Te!==0?Te&-Te:o1.transition!==null?(No===0&&(No=pm()),No):(t=J,t!==0||(t=window.event,t=t===void 0?16:Em(t.type)),t):1}function Ct(t,e,n,r){if(50<Ji)throw Ji=0,Vu=null,Error(R(185));Os(t,n,r),(!(Y&2)||t!==ke)&&(t===ke&&(!(Y&2)&&(zl|=n),ve===4&&fn(t,Te)),qe(t,r),n===1&&Y===0&&!(e.mode&1)&&(ii=fe()+500,Ml&&Vn()))}function qe(t,e){var n=t.callbackNode;o0(t,e);var r=Fo(t,t===ke?Te:0);if(r===0)n!==null&&vh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vh(n),e===1)t.tag===0?s1(hf.bind(null,t)):zm(hf.bind(null,t)),t1(function(){!(Y&6)&&Vn()}),n=null;else{switch(mm(r)){case 1:n=Tc;break;case 4:n=hm;break;case 16:n=jo;break;case 536870912:n=fm;break;default:n=jo}n=Fg(n,Pg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Pg(t,e){if(To=-1,No=0,Y&6)throw Error(R(327));var n=t.callbackNode;if(Vr()&&t.callbackNode!==n)return null;var r=Fo(t,t===ke?Te:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nl(t,r);else{e=r;var i=Y;Y|=2;var s=Og();(ke!==t||Te!==e)&&(zt=null,ii=fe()+500,rr(t,e));do try{I1();break}catch(l){Ag(t,l)}while(1);zc(),Zo.current=s,Y=i,pe!==null?e=0:(ke=null,Te=0,e=ve)}if(e!==0){if(e===2&&(i=gu(t),i!==0&&(r=i,e=Hu(t,i))),e===1)throw n=ws,rr(t,0),fn(t,r),qe(t,fe()),n;if(e===6)fn(t,r);else{if(i=t.current.alternate,!(r&30)&&!k1(i)&&(e=nl(t,r),e===2&&(s=gu(t),s!==0&&(r=s,e=Hu(t,s))),e===1))throw n=ws,rr(t,0),fn(t,r),qe(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:qn(t,He,zt);break;case 3:if(fn(t,r),(r&130023424)===r&&(e=td+500-fe(),10<e)){if(Fo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){je(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ku(qn.bind(null,t,He,zt),e);break}qn(t,He,zt);break;case 4:if(fn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-xt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*C1(r/1960))-r,10<r){t.timeoutHandle=ku(qn.bind(null,t,He,zt),r);break}qn(t,He,zt);break;case 5:qn(t,He,zt);break;default:throw Error(R(329))}}}return qe(t,fe()),t.callbackNode===n?Pg.bind(null,t):null}function Hu(t,e){var n=Qi;return t.current.memoizedState.isDehydrated&&(rr(t,e).flags|=256),t=nl(t,e),t!==2&&(e=He,He=n,e!==null&&$u(e)),t}function $u(t){He===null?He=t:He.push.apply(He,t)}function k1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!St(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fn(t,e){for(e&=~ed,e&=~zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-xt(e),r=1<<n;t[n]=-1,e&=~r}}function hf(t){if(Y&6)throw Error(R(327));Vr();var e=Fo(t,0);if(!(e&1))return qe(t,fe()),null;var n=nl(t,e);if(t.tag!==0&&n===2){var r=gu(t);r!==0&&(e=r,n=Hu(t,r))}if(n===1)throw n=ws,rr(t,0),fn(t,e),qe(t,fe()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qn(t,He,zt),qe(t,fe()),null}function nd(t,e){var n=Y;Y|=1;try{return t(e)}finally{Y=n,Y===0&&(ii=fe()+500,Ml&&Vn())}}function dr(t){vn!==null&&vn.tag===0&&!(Y&6)&&Vr();var e=Y;Y|=1;var n=at.transition,r=J;try{if(at.transition=null,J=1,t)return t()}finally{J=r,at.transition=n,Y=e,!(Y&6)&&Vn()}}function rd(){Je=Dr.current,se(Dr)}function rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,e1(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(jc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vo();break;case 3:ni(),se(Ke),se(Oe),Gc();break;case 5:$c(r);break;case 4:ni();break;case 13:se(le);break;case 19:se(le);break;case 10:Wc(r.type._context);break;case 22:case 23:rd()}n=n.return}if(ke=t,pe=t=Nn(t.current,null),Te=Je=e,ve=0,ws=null,ed=zl=cr=0,He=Qi=null,Zn!==null){for(e=0;e<Zn.length;e++)if(n=Zn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zn=null}return t}function Ag(t,e){do{var n=pe;try{if(zc(),ko.current=Xo,Jo){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Jo=!1}if(ur=0,xe=ge=ae=null,Yi=!1,ys=0,Zc.current=null,n===null||n.return===null){ve=1,ws=e,pe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Te,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Xh(o);if(_!==null){_.flags&=-257,Zh(_,o,l,s,e),_.mode&1&&Jh(s,u,e),e=_,a=u;var y=e.updateQueue;if(y===null){var x=new Set;x.add(a),e.updateQueue=x}else y.add(a);break e}else{if(!(e&1)){Jh(s,u,e),id();break e}a=Error(R(426))}}else if(oe&&l.mode&1){var b=Xh(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Zh(b,o,l,s,e),Fc(ri(a,l));break e}}s=a=ri(a,l),ve!==4&&(ve=2),Qi===null?Qi=[s]:Qi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=mg(s,a,e);$h(s,g);break e;case 1:l=a;var m=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(In===null||!In.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=gg(s,l,e);$h(s,E);break e}}s=s.return}while(s!==null)}Lg(n)}catch(v){e=v,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(1)}function Og(){var t=Zo.current;return Zo.current=Xo,t===null?Xo:t}function id(){(ve===0||ve===3||ve===2)&&(ve=4),ke===null||!(cr&268435455)&&!(zl&268435455)||fn(ke,Te)}function nl(t,e){var n=Y;Y|=2;var r=Og();(ke!==t||Te!==e)&&(zt=null,rr(t,e));do try{S1();break}catch(i){Ag(t,i)}while(1);if(zc(),Y=n,Zo.current=r,pe!==null)throw Error(R(261));return ke=null,Te=0,ve}function S1(){for(;pe!==null;)Dg(pe)}function I1(){for(;pe!==null&&!Jv();)Dg(pe)}function Dg(t){var e=jg(t.alternate,t,Je);t.memoizedProps=t.pendingProps,e===null?Lg(t):pe=e,Zc.current=null}function Lg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=v1(n,e),n!==null){n.flags&=32767,pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ve=6,pe=null;return}}else if(n=_1(n,e,Je),n!==null){pe=n;return}if(e=e.sibling,e!==null){pe=e;return}pe=e=t}while(e!==null);ve===0&&(ve=5)}function qn(t,e,n){var r=J,i=at.transition;try{at.transition=null,J=1,T1(t,e,n,r)}finally{at.transition=i,J=r}return null}function T1(t,e,n,r){do Vr();while(vn!==null);if(Y&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(l0(t,s),t===ke&&(pe=ke=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ho||(ho=!0,Fg(jo,function(){return Vr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=at.transition,at.transition=null;var o=J;J=1;var l=Y;Y|=4,Zc.current=null,E1(t,n),Rg(n,t),K0(xu),Uo=!!Eu,xu=Eu=null,t.current=n,x1(n),Xv(),Y=l,J=o,at.transition=s}else t.current=n;if(ho&&(ho=!1,vn=t,tl=i),s=t.pendingLanes,s===0&&(In=null),t0(n.stateNode),qe(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(el)throw el=!1,t=Bu,Bu=null,t;return tl&1&&t.tag!==0&&Vr(),s=t.pendingLanes,s&1?t===Vu?Ji++:(Ji=0,Vu=t):Ji=0,Vn(),null}function Vr(){if(vn!==null){var t=mm(tl),e=at.transition,n=J;try{if(at.transition=null,J=16>t?16:t,vn===null)var r=!1;else{if(t=vn,vn=null,tl=0,Y&6)throw Error(R(331));var i=Y;for(Y|=4,L=t.current;L!==null;){var s=L,o=s.child;if(L.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(L=u;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:qi(8,d,s)}var h=d.child;if(h!==null)h.return=d,L=h;else for(;L!==null;){d=L;var f=d.sibling,_=d.return;if(Ig(d),d===u){L=null;break}if(f!==null){f.return=_,L=f;break}L=_}}}var y=s.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}L=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qi(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,L=g;break e}L=s.return}}var m=t.current;for(L=m;L!==null;){o=L;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,L=p;else e:for(o=m;L!==null;){if(l=L,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ul(9,l)}}catch(v){ce(l,l.return,v)}if(l===o){L=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,L=E;break e}L=l.return}}if(Y=i,Vn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Pl,t)}catch{}r=!0}return r}finally{J=n,at.transition=e}}return!1}function ff(t,e,n){e=ri(n,e),e=mg(t,e,1),t=Sn(t,e,1),e=je(),t!==null&&(Os(t,1,e),qe(t,e))}function ce(t,e,n){if(t.tag===3)ff(t,t,n);else for(;e!==null;){if(e.tag===3){ff(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(In===null||!In.has(r))){t=ri(n,t),t=gg(e,t,1),e=Sn(e,t,1),t=je(),e!==null&&(Os(e,1,t),qe(e,t));break}}e=e.return}}function N1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=je(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(Te&n)===n&&(ve===4||ve===3&&(Te&130023424)===Te&&500>fe()-td?rr(t,0):ed|=n),qe(t,e)}function Mg(t,e){e===0&&(t.mode&1?(e=to,to<<=1,!(to&130023424)&&(to=4194304)):e=1);var n=je();t=Xt(t,e),t!==null&&(Os(t,e,n),qe(t,n))}function R1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Mg(t,n)}function b1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),Mg(t,n)}var jg;jg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ke.current)$e=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $e=!1,y1(t,e,n);$e=!!(t.flags&131072)}else $e=!1,oe&&e.flags&1048576&&Wm(e,Go,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Io(t,e),t=e.pendingProps;var i=Zr(e,Oe.current);Br(e,n),i=Yc(null,e,r,t,i,n);var s=qc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ye(r)?(s=!0,Ho(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vc(e),i.updater=Fl,e.stateNode=i,i._reactInternals=e,Pu(e,r,t,n),e=Du(null,e,r,!0,s,n)):(e.tag=0,oe&&s&&Mc(e),Le(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Io(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=A1(r),t=gt(r,t),i){case 0:e=Ou(null,e,r,t,n);break e;case 1:e=nf(null,e,r,t,n);break e;case 11:e=ef(null,e,r,t,n);break e;case 14:e=tf(null,e,r,gt(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),Ou(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),nf(t,e,r,i,n);case 3:e:{if(wg(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Km(t,e),qo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ri(Error(R(423)),e),e=rf(t,e,r,n,i);break e}else if(r!==i){i=ri(Error(R(424)),e),e=rf(t,e,r,n,i);break e}else for(Xe=kn(e.stateNode.containerInfo.firstChild),Ze=e,oe=!0,_t=null,n=$m(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ei(),r===i){e=Zt(t,e,n);break e}Le(t,e,r,n)}e=e.child}return e;case 5:return Ym(e),t===null&&Nu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Cu(r,i)?o=null:s!==null&&Cu(r,s)&&(e.flags|=32),vg(t,e),Le(t,e,o,n),e.child;case 6:return t===null&&Nu(e),null;case 13:return Eg(t,e,n);case 4:return Hc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ti(e,null,r,n):Le(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),ef(t,e,r,i,n);case 7:return Le(t,e,e.pendingProps,n),e.child;case 8:return Le(t,e,e.pendingProps.children,n),e.child;case 12:return Le(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,re(Ko,r._currentValue),r._currentValue=o,s!==null)if(St(s.value,o)){if(s.children===i.children&&!Ke.current){e=Zt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Yt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ru(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ru(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Le(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Br(e,n),i=ut(i),r=r(i),e.flags|=1,Le(t,e,r,n),e.child;case 14:return r=e.type,i=gt(r,e.pendingProps),i=gt(r.type,i),tf(t,e,r,i,n);case 15:return yg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),Io(t,e),e.tag=1,Ye(r)?(t=!0,Ho(e)):t=!1,Br(e,n),pg(e,r,i),Pu(e,r,i,n),Du(null,e,r,!0,t,n);case 19:return xg(t,e,n);case 22:return _g(t,e,n)}throw Error(R(156,e.tag))};function Fg(t,e){return dm(t,e)}function P1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(t,e,n,r){return new P1(t,e,n,r)}function sd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function A1(t){if(typeof t=="function")return sd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kc)return 11;if(t===Sc)return 14}return 2}function Nn(t,e){var n=t.alternate;return n===null?(n=ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ro(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case kr:return ir(n.children,i,s,e);case Cc:o=8,i|=8;break;case tu:return t=ot(12,n,e,i|2),t.elementType=tu,t.lanes=s,t;case nu:return t=ot(13,n,e,i),t.elementType=nu,t.lanes=s,t;case ru:return t=ot(19,n,e,i),t.elementType=ru,t.lanes=s,t;case Yp:return Wl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gp:o=10;break e;case Kp:o=9;break e;case kc:o=11;break e;case Sc:o=14;break e;case cn:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=ot(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ir(t,e,n,r){return t=ot(7,t,r,e),t.lanes=n,t}function Wl(t,e,n,r){return t=ot(22,t,r,e),t.elementType=Yp,t.lanes=n,t.stateNode={isHidden:!1},t}function Oa(t,e,n){return t=ot(6,t,null,e),t.lanes=n,t}function Da(t,e,n){return e=ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function O1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pa(0),this.expirationTimes=pa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function od(t,e,n,r,i,s,o,l,a){return t=new O1(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vc(s),t}function D1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ug(t){if(!t)return jn;t=t._reactInternals;e:{if(_r(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ye(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(Ye(n))return Um(t,n,e)}return e}function zg(t,e,n,r,i,s,o,l,a){return t=od(n,r,!0,t,i,s,o,l,a),t.context=Ug(null),n=t.current,r=je(),i=Tn(n),s=Yt(r,i),s.callback=e??null,Sn(n,s,i),t.current.lanes=i,Os(t,i,r),qe(t,r),t}function Bl(t,e,n,r){var i=e.current,s=je(),o=Tn(i);return n=Ug(n),e.context===null?e.context=n:e.pendingContext=n,e=Yt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Sn(i,e,o),t!==null&&(Ct(t,i,o,s),Co(t,i,o)),o}function rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ld(t,e){pf(t,e),(t=t.alternate)&&pf(t,e)}function L1(){return null}var Wg=typeof reportError=="function"?reportError:function(t){console.error(t)};function ad(t){this._internalRoot=t}Vl.prototype.render=ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));Bl(t,e,null,null)};Vl.prototype.unmount=ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;dr(function(){Bl(null,t,null,null)}),e[Jt]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var e=_m();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hn.length&&e!==0&&e<hn[n].priority;n++);hn.splice(n,0,t),n===0&&wm(t)}};function ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mf(){}function M1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=rl(o);s.call(u)}}var o=zg(e,r,t,0,null,!1,!1,"",mf);return t._reactRootContainer=o,t[Jt]=o.current,hs(t.nodeType===8?t.parentNode:t),dr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=rl(a);l.call(u)}}var a=od(t,0,!1,null,null,!1,!1,"",mf);return t._reactRootContainer=a,t[Jt]=a.current,hs(t.nodeType===8?t.parentNode:t),dr(function(){Bl(e,a,n,r)}),a}function $l(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=rl(o);l.call(a)}}Bl(e,o,t,i)}else o=M1(n,e,t,i,r);return rl(o)}gm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ui(e.pendingLanes);n!==0&&(Nc(e,n|1),qe(e,fe()),!(Y&6)&&(ii=fe()+500,Vn()))}break;case 13:dr(function(){var r=Xt(t,1);if(r!==null){var i=je();Ct(r,t,1,i)}}),ld(t,1)}};Rc=function(t){if(t.tag===13){var e=Xt(t,134217728);if(e!==null){var n=je();Ct(e,t,134217728,n)}ld(t,134217728)}};ym=function(t){if(t.tag===13){var e=Tn(t),n=Xt(t,e);if(n!==null){var r=je();Ct(n,t,e,r)}ld(t,e)}};_m=function(){return J};vm=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};fu=function(t,e,n){switch(e){case"input":if(ou(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ll(r);if(!i)throw Error(R(90));Qp(r),ou(r,i)}}}break;case"textarea":Xp(t,n);break;case"select":e=n.value,e!=null&&Fr(t,!!n.multiple,e,!1)}};sm=nd;om=dr;var j1={usingClientEntryPoint:!1,Events:[Ls,Nr,Ll,rm,im,nd]},Ai={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},F1={bundleType:Ai.bundleType,version:Ai.version,rendererPackageName:Ai.rendererPackageName,rendererConfig:Ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=um(t),t===null?null:t.stateNode},findFiberByHostInstance:Ai.findFiberByHostInstance||L1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{Pl=fo.inject(F1),Pt=fo}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j1;tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ud(e))throw Error(R(200));return D1(t,e,null,n)};tt.createRoot=function(t,e){if(!ud(t))throw Error(R(299));var n=!1,r="",i=Wg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=od(t,1,!1,null,null,n,!1,r,i),t[Jt]=e.current,hs(t.nodeType===8?t.parentNode:t),new ad(e)};tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=um(e),t=t===null?null:t.stateNode,t};tt.flushSync=function(t){return dr(t)};tt.hydrate=function(t,e,n){if(!Hl(e))throw Error(R(200));return $l(null,t,e,!0,n)};tt.hydrateRoot=function(t,e,n){if(!ud(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Wg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zg(e,null,t,1,n??null,i,!1,s,o),t[Jt]=e.current,hs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Vl(e)};tt.render=function(t,e,n){if(!Hl(e))throw Error(R(200));return $l(null,t,e,!1,n)};tt.unmountComponentAtNode=function(t){if(!Hl(t))throw Error(R(40));return t._reactRootContainer?(dr(function(){$l(null,null,t,!1,function(){t._reactRootContainer=null,t[Jt]=null})}),!0):!1};tt.unstable_batchedUpdates=nd;tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hl(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return $l(t,e,n,!1,r)};tt.version="18.3.1-next-f1338f8080-20240426";function Bg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bg)}catch(t){console.error(t)}}Bg(),Bp.exports=tt;var U1=Bp.exports,gf=U1;Za.createRoot=gf.createRoot,Za.hydrateRoot=gf.hydrateRoot;const cd=[{歌唱:"蓮ノ空女学院スクールアイドルクラブ",センター:"藤島 慈",作中時期:"102期",曲名:"On your mark(102期Ver.)",コスト:"9",効果1:`【ユニーク】
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
このターン中、センターが「村野さやか」のカードを使用したとき、相手に1ダメージ`,"効果2 タイプ":"【ユニゾン】",パワー:"",シールド:"",ヒール:"",ダメージ:"2"}],Vg=cd;function z1(t){return Vg.filter(e=>{const n=e.歌唱;return n==="蓮ノ空女学院スクールアイドルクラブ"||n==="スリーズブーケ＆DOLLCHESTRA＆みらくらぱーく！"||n==="るりのとゆかいなつづりたち"||n==="かほめぐ♡じぇらーと"||n==="蓮ノ休日"||n===t||e.曲名==="Runway"&&t==="DOLLCHESTRA"?!0:e.曲名==="Runway"&&t!=="DOLLCHESTRA"?!1:n==="村野 さやか"&&e.曲名!=="Runway"})}function Xi(t){const e=[];for(const n of t){const r=Vg.find(i=>i.曲名===n);r&&e.push({...r,id:Math.random().toString(36).substring(2,11)})}return e.sort(()=>Math.random()-.5)}const Hg={スリーズブーケ:["On your mark","On your mark","On your mark","Dream Believers","Dream Believers","STEP UP!","STEP UP!","STEP UP!","Reflection in the mirror","Reflection in the mirror","Reflection in the mirror","フォーチュンムービー","フォーチュンムービー","フォーチュンムービー","Special Thanks","Special Thanks","Special Thanks","シュガーメルト","シュガーメルト","シュガーメルト","千変万華","千変万華","残陽","残陽","水彩世界","水彩世界","Holiday∞Holiday","Holiday∞Holiday","Dear my future","Dear my future"],DOLLCHESTRA:["On your mark","On your mark","On your mark","STEP UP!","STEP UP!","STEP UP!","Dream Believers","Dream Believers","AWOKE","AWOKE","AWOKE","Sparkly Spot","Sparkly Spot","Sparkly Spot","ジブンダイアリー","ジブンダイアリー","ジブンダイアリー","飴色","飴色","飴色","Mirage Voyage","Mirage Voyage","スケイプゴート","スケイプゴート","Take It Over","Take It Over","青とシャボン","青とシャボン","希望的プリズム","希望的プリズム"],"みらくらぱーく！":["On your mark","On your mark","On your mark","STEP UP!","STEP UP!","STEP UP!","Dream Believers","Dream Believers","ド！ド！ド！","ド！ド！ド！","ド！ド！ド！","ココン東西","ココン東西","ハクチューアラモード","ハクチューアラモード","ハクチューアラモード","アイデンティティ","アイデンティティ","アイデンティティ","天才なのかもしれない","天才なのかもしれない","天才なのかもしれない","ノンフィクションヒーローショー","ノンフィクションヒーローショー","マハラジャンボリー","マハラジャンボリー","マハラジャンボリー","以心☆電信","以心☆電信","以心☆電信"]};function il(){const t=["スリーズブーケ","DOLLCHESTRA","みらくらぱーく！"],e=t[Math.floor(Math.random()*t.length)],n=Hg[e];return{deck:Xi(n),unit:e}}function sl(t,e){return{name:"",baseUnit:t,originalDeckNames:e.map(n=>n.曲名),hp:30,maxHp:30,shield:0,maxVoltage:0,currentVoltage:0,specialUsed:!1,deck:e.slice(3),hand:e.slice(0,3),discard:[],buffs:{damageImmune:!1,nextCardCostDown:0,turnCardsPlayed:[],tookDamageCount:0}}}function $g(t,e){const n=t||il(),r=e||il();return{turn:1,isPlayerTurn:!0,isCoinFlipPhase:!0,turnBanner:"COIN FLIP...",setlist:[],enemyPlayedCard:null,isAnimating:!1,battleResult:null,player:sl(n.unit,n.deck),enemy:sl(r.unit,r.deck),animations:{playerShake:!1,enemyShake:!1}}}function W1(t,e){return{turn:1,isPlayerTurn:!0,isCoinFlipPhase:!0,turnBanner:"COIN FLIP...",setlist:[],enemyPlayedCard:null,isAnimating:!1,battleResult:null,player:sl(t.unit,t.deck),enemy:sl(e.unit,e.deck),animations:{playerShake:!1,enemyShake:!1}}}/**
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
 */const Gg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const P=function(t,e){if(!t)throw gi(e)},gi=function(t){return new Error("Firebase Database ("+Gg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Kg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},B1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},dd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,h=(s&3)<<4|l>>4;let f=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(f=64)),r.push(n[d],n[h],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):B1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||h==null)throw new V1;const f=s<<2|l>>4;if(r.push(f),u!==64){const _=l<<4&240|u>>2;if(r.push(_),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class V1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yg=function(t){const e=Kg(t);return dd.encodeByteArray(e,!0)},ol=function(t){return Yg(t).replace(/\./g,"")},ll=function(t){try{return dd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function H1(t){return qg(void 0,t)}function qg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!$1(n)||(t[n]=qg(t[n],e[n]));return t}function $1(t){return t!=="__proto__"}/**
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
 */function G1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const K1=()=>G1().__FIREBASE_DEFAULTS__,Y1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},q1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ll(t[1]);return e&&JSON.parse(e)},hd=()=>{try{return K1()||Y1()||q1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qg=t=>{var e,n;return(n=(e=hd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Q1=t=>{const e=Qg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Jg=()=>{var t;return(t=hd())===null||t===void 0?void 0:t.config},Xg=t=>{var e;return(e=hd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function J1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[ol(JSON.stringify(n)),ol(JSON.stringify(o)),l].join(".")}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function X1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Z1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ew(){const t=Ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ey(){return Gg.NODE_ADMIN===!0}function tw(){try{return typeof indexedDB=="object"}catch{return!1}}function nw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const rw="FirebaseError";class Hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rw,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fs.prototype.create)}}class Fs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?iw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Hn(i,l,r)}}function iw(t,e){return t.replace(sw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const sw=/\{\$([^}]+)}/g;/**
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
 */function Es(t){return JSON.parse(t)}function _e(t){return JSON.stringify(t)}/**
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
 */const ty=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Es(ll(s[0])||""),n=Es(ll(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},ow=function(t){const e=ty(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},lw=function(t){const e=ty(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Mt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function si(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Gu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function al(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ul(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(yf(s)&&yf(o)){if(!ul(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yf(t){return t!==null&&typeof t=="object"}/**
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
 */class aw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let h=0;h<80;h++){h<40?h<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):h<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const f=(i<<5|i>>>27)+u+a+d+r[h]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function uw(t,e){const n=new cw(t,e);return n.subscribe.bind(n)}class cw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=La),i.error===void 0&&(i.error=La),i.complete===void 0&&(i.complete=La);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function La(){}function Gl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const hw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,P(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Kl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Be(t){return t&&t._delegate?t._delegate:t}class hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class fw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new js;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mw(e))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qn){return this.instances.has(e)}getOptions(e=Qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qn){return this.component?this.component.multipleInstances?e:Qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pw(t){return t===Qn?void 0:t}function mw(t){return t.instantiationMode==="EAGER"}/**
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
 */class gw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const yw={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},_w=Z.INFO,vw={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},ww=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=vw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pd{constructor(e){this.name=e,this._logLevel=_w,this._logHandler=ww,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Ew=(t,e)=>e.some(n=>t instanceof n);let _f,vf;function xw(){return _f||(_f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cw(){return vf||(vf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ny=new WeakMap,Ku=new WeakMap,ry=new WeakMap,Ma=new WeakMap,md=new WeakMap;function kw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ny.set(n,t)}).catch(()=>{}),md.set(e,t),e}function Sw(t){if(Ku.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ku.set(t,e)}let Yu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ku.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ry.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Iw(t){Yu=t(Yu)}function Tw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ja(this),e,...n);return ry.set(r,e.sort?e.sort():[e]),Rn(r)}:Cw().includes(t)?function(...e){return t.apply(ja(this),e),Rn(ny.get(this))}:function(...e){return Rn(t.apply(ja(this),e))}}function Nw(t){return typeof t=="function"?Tw(t):(t instanceof IDBTransaction&&Sw(t),Ew(t,xw())?new Proxy(t,Yu):t)}function Rn(t){if(t instanceof IDBRequest)return kw(t);if(Ma.has(t))return Ma.get(t);const e=Nw(t);return e!==t&&(Ma.set(t,e),md.set(e,t)),e}const ja=t=>md.get(t);function Rw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Rn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Rn(o.result),a.oldVersion,a.newVersion,Rn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const bw=["get","getKey","getAll","getAllKeys","count"],Pw=["put","add","delete","clear"],Fa=new Map;function wf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fa.get(e))return Fa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Pw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bw.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Fa.set(e,s),s}Iw(t=>({...t,get:(e,n,r)=>wf(e,n)||t.get(e,n,r),has:(e,n)=>!!wf(e,n)||t.has(e,n)}));/**
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
 */class Aw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ow(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ow(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qu="@firebase/app",Ef="0.10.13";/**
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
 */const en=new pd("@firebase/app"),Dw="@firebase/app-compat",Lw="@firebase/analytics-compat",Mw="@firebase/analytics",jw="@firebase/app-check-compat",Fw="@firebase/app-check",Uw="@firebase/auth",zw="@firebase/auth-compat",Ww="@firebase/database",Bw="@firebase/data-connect",Vw="@firebase/database-compat",Hw="@firebase/functions",$w="@firebase/functions-compat",Gw="@firebase/installations",Kw="@firebase/installations-compat",Yw="@firebase/messaging",qw="@firebase/messaging-compat",Qw="@firebase/performance",Jw="@firebase/performance-compat",Xw="@firebase/remote-config",Zw="@firebase/remote-config-compat",eE="@firebase/storage",tE="@firebase/storage-compat",nE="@firebase/firestore",rE="@firebase/vertexai-preview",iE="@firebase/firestore-compat",sE="firebase",oE="10.14.1";/**
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
 */const Qu="[DEFAULT]",lE={[qu]:"fire-core",[Dw]:"fire-core-compat",[Mw]:"fire-analytics",[Lw]:"fire-analytics-compat",[Fw]:"fire-app-check",[jw]:"fire-app-check-compat",[Uw]:"fire-auth",[zw]:"fire-auth-compat",[Ww]:"fire-rtdb",[Bw]:"fire-data-connect",[Vw]:"fire-rtdb-compat",[Hw]:"fire-fn",[$w]:"fire-fn-compat",[Gw]:"fire-iid",[Kw]:"fire-iid-compat",[Yw]:"fire-fcm",[qw]:"fire-fcm-compat",[Qw]:"fire-perf",[Jw]:"fire-perf-compat",[Xw]:"fire-rc",[Zw]:"fire-rc-compat",[eE]:"fire-gcs",[tE]:"fire-gcs-compat",[nE]:"fire-fst",[iE]:"fire-fst-compat",[rE]:"fire-vertex","fire-js":"fire-js",[sE]:"fire-js-all"};/**
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
 */const cl=new Map,aE=new Map,Ju=new Map;function xf(t,e){try{t.container.addComponent(e)}catch(n){en.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function oi(t){const e=t.name;if(Ju.has(e))return en.debug(`There were multiple attempts to register component ${e}.`),!1;Ju.set(e,t);for(const n of cl.values())xf(n,t);for(const n of aE.values())xf(n,t);return!0}function gd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function wt(t){return t.settings!==void 0}/**
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
 */const uE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bn=new Fs("app","Firebase",uE);/**
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
 */class cE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
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
 */const _i=oE;function iy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw bn.create("bad-app-name",{appName:String(i)});if(n||(n=Jg()),!n)throw bn.create("no-options");const s=cl.get(i);if(s){if(ul(n,s.options)&&ul(r,s.config))return s;throw bn.create("duplicate-app",{appName:i})}const o=new gw(i);for(const a of Ju.values())o.addComponent(a);const l=new cE(n,r,o);return cl.set(i,l),l}function sy(t=Qu){const e=cl.get(t);if(!e&&t===Qu&&Jg())return iy();if(!e)throw bn.create("no-app",{appName:t});return e}function Pn(t,e,n){var r;let i=(r=lE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),en.warn(l.join(" "));return}oi(new hr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const dE="firebase-heartbeat-database",hE=1,xs="firebase-heartbeat-store";let Ua=null;function oy(){return Ua||(Ua=Rw(dE,hE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xs)}catch(n){console.warn(n)}}}}).catch(t=>{throw bn.create("idb-open",{originalErrorMessage:t.message})})),Ua}async function fE(t){try{const n=(await oy()).transaction(xs),r=await n.objectStore(xs).get(ly(t));return await n.done,r}catch(e){if(e instanceof Hn)en.warn(e.message);else{const n=bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});en.warn(n.message)}}}async function Cf(t,e){try{const r=(await oy()).transaction(xs,"readwrite");await r.objectStore(xs).put(e,ly(t)),await r.done}catch(n){if(n instanceof Hn)en.warn(n.message);else{const r=bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});en.warn(r.message)}}}function ly(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pE=1024,mE=30*24*60*60*1e3;class gE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _E(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=kf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=mE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){en.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kf(),{heartbeatsToSend:r,unsentEntries:i}=yE(this._heartbeatsCache.heartbeats),s=ol(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return en.warn(n),""}}}function kf(){return new Date().toISOString().substring(0,10)}function yE(t,e=pE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Sf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _E{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tw()?nw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sf(t){return ol(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vE(t){oi(new hr("platform-logger",e=>new Aw(e),"PRIVATE")),oi(new hr("heartbeat",e=>new gE(e),"PRIVATE")),Pn(qu,Ef,t),Pn(qu,Ef,"esm2017"),Pn("fire-js","")}vE("");var wE="firebase",EE="10.14.1";/**
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
 */Pn(wE,EE,"app");const If="@firebase/database",Tf="1.0.8";/**
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
 */let ay="";function xE(t){ay=t}/**
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
 */class CE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),_e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Es(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class kE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Mt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const uy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new CE(e)}}catch{}return new kE},tr=uy("localStorage"),Xu=uy("sessionStorage");/**
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
 */const Hr=new pd("@firebase/database"),SE=function(){let t=1;return function(){return t++}}(),cy=function(t){const e=hw(t),n=new aw;n.update(e);const r=n.digest();return dd.encodeByteArray(r)},Us=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Us.apply(null,r):typeof r=="object"?e+=_e(r):e+=r,e+=" "}return e};let sr=null,Nf=!0;const IE=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Hr.logLevel=Z.VERBOSE,sr=Hr.log.bind(Hr),e&&Xu.set("logging_enabled",!0)):typeof t=="function"?sr=t:(sr=null,Xu.remove("logging_enabled"))},Ie=function(...t){if(Nf===!0&&(Nf=!1,sr===null&&Xu.get("logging_enabled")===!0&&IE(!0)),sr){const e=Us.apply(null,t);sr(e)}},zs=function(t){return function(...e){Ie(t,...e)}},Zu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Us(...t);Hr.error(e)},tn=function(...t){const e=`FIREBASE FATAL ERROR: ${Us(...t)}`;throw Hr.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+Us(...t);Hr.warn(e)},TE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},NE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},li="[MIN_NAME]",fr="[MAX_NAME]",vr=function(t,e){if(t===e)return 0;if(t===li||e===fr)return-1;if(e===li||t===fr)return 1;{const n=Rf(t),r=Rf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},RE=function(t,e){return t===e?0:t<e?-1:1},Oi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+_e(e))},_d=function(t){if(typeof t!="object"||t===null)return _e(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=_e(e[r]),n+=":",n+=_d(t[e[r]]);return n+="}",n},dy=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Re(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const hy=function(t){P(!yd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(d.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},bE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},PE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function AE(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const OE=new RegExp("^-?(0*)\\d{1,10}$"),DE=-2147483648,LE=2147483647,Rf=function(t){if(OE.test(t)){const e=Number(t);if(e>=DE&&e<=LE)return e}return null},vi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},ME=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Zi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class jE{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class FE{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class $r{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}$r.OWNER="owner";/**
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
 */const vd="5",fy="v",py="s",my="r",gy="f",yy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,_y="ls",vy="p",ec="ac",wy="websocket",Ey="long_polling";/**
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
 */class xy{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=tr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&tr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function UE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Cy(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let r;if(e===wy)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ey)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);UE(t)&&(n.ns=t.namespace);const i=[];return Re(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class zE{constructor(){this.counters_={}}incrementCounter(e,n=1){Mt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return H1(this.counters_)}}/**
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
 */const za={},Wa={};function wd(t){const e=t.toString();return za[e]||(za[e]=new zE),za[e]}function WE(t,e){const n=t.toString();return Wa[n]||(Wa[n]=e()),Wa[n]}/**
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
 */class BE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&vi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const bf="start",VE="close",HE="pLPCommand",$E="pRTLPCB",ky="id",Sy="pw",Iy="ser",GE="cb",KE="seg",YE="ts",qE="d",QE="dframe",Ty=1870,Ny=30,JE=Ty-Ny,XE=25e3,ZE=3e4;class Lr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zs(e),this.stats_=wd(n),this.urlFn=a=>(this.appCheckToken&&(a[ec]=this.appCheckToken),Cy(n,Ey,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new BE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ZE)),NE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ed((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===bf)this.id=l,this.password=a;else if(o===VE)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[bf]="t",r[Iy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[GE]=this.scriptTagHolder.uniqueCallbackIdentifier),r[fy]=vd,this.transportSessionId&&(r[py]=this.transportSessionId),this.lastSessionId&&(r[_y]=this.lastSessionId),this.applicationId&&(r[vy]=this.applicationId),this.appCheckToken&&(r[ec]=this.appCheckToken),typeof location<"u"&&location.hostname&&yy.test(location.hostname)&&(r[my]=gy);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Lr.forceAllow_=!0}static forceDisallow(){Lr.forceDisallow_=!0}static isAvailable(){return Lr.forceAllow_?!0:!Lr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bE()&&!PE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Yg(n),i=dy(r,JE);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[QE]="t",r[ky]=e,r[Sy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=_e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ed{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=SE(),window[HE+this.uniqueCallbackIdentifier]=e,window[$E+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ed.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ie("frame writing exception"),l.stack&&Ie(l.stack),Ie(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ie("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ky]=this.myID,e[Sy]=this.myPW,e[Iy]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ny+r.length<=Ty;){const o=this.pendingSegs.shift();r=r+"&"+KE+i+"="+o.seg+"&"+YE+i+"="+o.ts+"&"+qE+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(XE)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const ex=16384,tx=45e3;let dl=null;typeof MozWebSocket<"u"?dl=MozWebSocket:typeof WebSocket<"u"&&(dl=WebSocket);class vt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zs(this.connId),this.stats_=wd(n),this.connURL=vt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[fy]=vd,typeof location<"u"&&location.hostname&&yy.test(location.hostname)&&(o[my]=gy),n&&(o[py]=n),r&&(o[_y]=r),i&&(o[ec]=i),s&&(o[vy]=s),Cy(e,wy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,tr.set("previous_websocket_failure",!0);try{let r;ey(),this.mySock=new dl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&dl!==null&&!vt.forceDisallow_}static previouslyFailed(){return tr.isInMemoryStorage||tr.get("previous_websocket_failure")===!0}markConnectionHealthy(){tr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Es(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=dy(n,ex);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tx))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vt.responsesRequiredToBeHealthy=2;vt.healthyTimeout=3e4;/**
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
 */class Cs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Lr,vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=vt&&vt.isAvailable();let r=n&&!vt.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[vt];else{const i=this.transports_=[];for(const s of Cs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Cs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Cs.globalTransportInitialized_=!1;/**
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
 */const nx=6e4,rx=5e3,ix=10*1024,sx=100*1024,Ba="t",Pf="d",ox="s",Af="r",lx="e",Of="o",Df="a",Lf="n",Mf="p",ax="h";class ux{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zs("c:"+this.id+":"),this.transportManager_=new Cs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Zi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>sx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ix?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ba in e){const n=e[Ba];n===Df?this.upgradeIfSecondaryHealthy_():n===Af?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Of&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Oi("t",e),r=Oi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Mf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Df,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Oi("t",e),r=Oi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Oi(Ba,e);if(Pf in e){const r=e[Pf];if(n===ax){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Lf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ox?this.onConnectionShutdown_(r):n===Af?this.onReset_(r):n===lx?Zu("Server Error: "+r):n===Of?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),vd!==r&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Zi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(nx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Zi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(rx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Mf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(tr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ry{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class by{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class hl extends by{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hl}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const jf=32,Ff=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new ee("")}function B(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Fn(t){return t.pieces_.length-t.pieceNum_}function ne(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function xd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function cx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ks(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Py(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function de(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ee(n,0)}function H(t){return t.pieceNum_>=t.pieces_.length}function Me(t,e){const n=B(t),r=B(e);if(n===null)return e;if(n===r)return Me(ne(t),ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function dx(t,e){const n=ks(t,0),r=ks(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=vr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Cd(t,e){if(Fn(t)!==Fn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function lt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Fn(t)>Fn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class hx{constructor(e,n){this.errorPrefix_=n,this.parts_=ks(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Kl(this.parts_[r]);Ay(this)}}function fx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Kl(e),Ay(t)}function px(t){const e=t.parts_.pop();t.byteLength_-=Kl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ay(t){if(t.byteLength_>Ff)throw new Error(t.errorPrefix_+"has a key path longer than "+Ff+" bytes ("+t.byteLength_+").");if(t.parts_.length>jf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jf+") or object contains a cycle "+Jn(t))}function Jn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class kd extends by{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new kd}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Di=1e3,mx=60*5*1e3,Uf=30*1e3,gx=1.3,yx=3e4,_x="server_kill",zf=3;class qt extends Ry{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=qt.nextPersistentConnectionId_++,this.log_=zs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Di,this.maxReconnectDelay_=mx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ey())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");kd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(_e(s)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new js,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;qt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Mt(e,"w")){const r=si(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Uf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ow(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+_e(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Zu("Unrecognized action received from server: "+_e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yx&&(this.reconnectDelay_=Di),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+qt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(h){P(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ie("getToken() completed but was canceled"):(Ie("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new ux(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Fe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(_x)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Fe(h),a())}}}interrupt(e){Ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Gu(this.interruptReasons_)&&(this.reconnectDelay_=Di,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>_d(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ie("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zf&&(this.reconnectDelay_=Uf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ie("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ay.replace(/\./g,"-")]=1,fd()?e["framework.cordova"]=1:Zg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hl.getInstance().currentlyOnline();return Gu(this.interruptReasons_)&&e}}qt.nextPersistentConnectionId_=0;qt.nextConnectionId_=0;/**
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
 */class Yl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new V(li,e),i=new V(li,n);return this.compare(r,i)!==0}minPost(){return V.MIN}}/**
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
 */let po;class Oy extends Yl{static get __EMPTY_NODE(){return po}static set __EMPTY_NODE(e){po=e}compare(e,n){return vr(e.name,n.name)}isDefinedOn(e){throw gi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return V.MIN}maxPost(){return new V(fr,po)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new V(e,po)}toString(){return".key"}}const Gr=new Oy;/**
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
 */class mo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ce.RED,this.left=i??Ge.EMPTY_NODE,this.right=s??Ge.EMPTY_NODE}copy(e,n,r,i,s){return new Ce(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class vx{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,n=Ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new mo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new mo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new mo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new mo(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new vx;/**
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
 */function wx(t,e){return vr(t.name,e.name)}function Sd(t,e){return vr(t,e)}/**
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
 */let tc;function Ex(t){tc=t}const Dy=function(t){return typeof t=="number"?"number:"+hy(t):"string:"+t},Ly=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Mt(e,".sv"),"Priority must be a string or number.")}else P(t===tc||t.isEmpty(),"priority of unexpected type.");P(t===tc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Wf;class Ee{constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ly(this.priorityNode_)}static set __childrenNodeConstructor(e){Wf=e}static get __childrenNodeConstructor(){return Wf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return H(e)?this:B(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=B(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(P(r!==".priority"||Fn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Dy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=hy(this.value_):e+=this.value_,this.lazyHash_=cy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ee.VALUE_TYPE_ORDER.indexOf(n),s=Ee.VALUE_TYPE_ORDER.indexOf(r);return P(i>=0,"Unknown leaf type: "+n),P(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let My,jy;function xx(t){My=t}function Cx(t){jy=t}class kx extends Yl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?vr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return V.MIN}maxPost(){return new V(fr,new Ee("[PRIORITY-POST]",jy))}makePost(e,n){const r=My(e);return new V(n,new Ee("[PRIORITY-POST]",r))}toString(){return".priority"}}const he=new kx;/**
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
 */const Sx=Math.log(2);class Ix{constructor(e){const n=s=>parseInt(Math.log(s)/Sx,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fl=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let h,f;if(d===0)return null;if(d===1)return h=t[a],f=n?n(h):h,new Ce(f,h.node,Ce.BLACK,null,null);{const _=parseInt(d/2,10)+a,y=i(a,_),x=i(_+1,u);return h=t[_],f=n?n(h):h,new Ce(f,h.node,Ce.BLACK,y,x)}},s=function(a){let u=null,d=null,h=t.length;const f=function(y,x){const b=h-y,g=h;h-=y;const m=i(b+1,g),p=t[b],E=n?n(p):p;_(new Ce(E,p.node,x,null,m))},_=function(y){u?(u.left=y,u=y):(d=y,u=y)};for(let y=0;y<a.count;++y){const x=a.nextBitIsOne(),b=Math.pow(2,a.count-(y+1));x?f(b,Ce.BLACK):(f(b,Ce.BLACK),f(b,Ce.RED))}return d},o=new Ix(t.length),l=s(o);return new Ge(r||e,l)};/**
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
 */let Va;const xr={};class Ht{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(xr&&he,"ChildrenNode.ts has not been loaded"),Va=Va||new Ht({".priority":xr},{".priority":he}),Va}get(e){const n=si(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ge?n:null}hasIndex(e){return Mt(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Gr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(V.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=fl(r,e.getCompare()):l=xr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Ht(d,u)}addToIndexes(e,n){const r=al(this.indexes_,(i,s)=>{const o=si(this.indexSet_,s);if(P(o,"Missing index implementation for "+s),i===xr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(V.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),fl(l,o.getCompare())}else return xr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new V(e.name,l))),a.insert(e,e.node)}});return new Ht(r,this.indexSet_)}removeFromIndexes(e,n){const r=al(this.indexes_,i=>{if(i===xr)return i;{const s=n.get(e.name);return s?i.remove(new V(e.name,s)):i}});return new Ht(r,this.indexSet_)}}/**
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
 */let Li;class z{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Ly(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Li||(Li=new z(new Ge(Sd),null,Ht.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Li}updatePriority(e){return this.children_.isEmpty()?this:new z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Li:n}}getChild(e){const n=B(e);return n===null?this:this.getImmediateChild(n).getChild(ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new V(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Li:this.priorityNode_;return new z(i,o,s)}}updateChild(e,n){const r=B(e);if(r===null)return n;{P(B(e)!==".priority"||Fn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ne(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(he,(o,l)=>{n[o]=l.val(e),r++,s&&z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Dy(this.getPriority().val())+":"),this.forEachChild(he,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":cy(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new V(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new V(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new V(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,V.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,V.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ws?-1:0}withIndex(e){if(e===Gr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Gr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(he),i=n.getIterator(he);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Gr?null:this.indexMap_.get(e.toString())}}z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Tx extends z{constructor(){super(new Ge(Sd),z.EMPTY_NODE,Ht.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return z.EMPTY_NODE}isEmpty(){return!1}}const Ws=new Tx;Object.defineProperties(V,{MIN:{value:new V(li,z.EMPTY_NODE)},MAX:{value:new V(fr,Ws)}});Oy.__EMPTY_NODE=z.EMPTY_NODE;Ee.__childrenNodeConstructor=z;Ex(Ws);Cx(Ws);/**
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
 */const Nx=!0;function ye(t,e=null){if(t===null)return z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,ye(e))}if(!(t instanceof Array)&&Nx){const n=[];let r=!1;if(Re(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ye(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new V(o,a)))}}),n.length===0)return z.EMPTY_NODE;const s=fl(n,wx,o=>o.name,Sd);if(r){const o=fl(n,he.getCompare());return new z(s,ye(e),new Ht({".priority":o},{".priority":he}))}else return new z(s,ye(e),Ht.Default)}else{let n=z.EMPTY_NODE;return Re(t,(r,i)=>{if(Mt(t,r)&&r.substring(0,1)!=="."){const s=ye(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ye(e))}}xx(ye);/**
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
 */class Rx extends Yl{constructor(e){super(),this.indexPath_=e,P(!H(e)&&B(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?vr(e.name,n.name):s}makePost(e,n){const r=ye(e),i=z.EMPTY_NODE.updateChild(this.indexPath_,r);return new V(n,i)}maxPost(){const e=z.EMPTY_NODE.updateChild(this.indexPath_,Ws);return new V(fr,e)}toString(){return ks(this.indexPath_,0).join("/")}}/**
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
 */class bx extends Yl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?vr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(e,n){const r=ye(e);return new V(n,r)}toString(){return".value"}}const Px=new bx;/**
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
 */function Fy(t){return{type:"value",snapshotNode:t}}function ai(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ss(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Is(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ax(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Id{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ss(n,l)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ai(n,r)):o.trackChildChange(Is(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(he,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ss(i,s))}),n.isLeafNode()||n.forEachChild(he,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Is(i,s,o))}else r.trackChildChange(ai(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ts{constructor(e){this.indexedFilter_=new Id(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ts.getStartPost_(e),this.endPost_=Ts.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new V(n,r))||(r=z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=z.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(z.EMPTY_NODE);const s=this;return n.forEachChild(he,(o,l)=>{s.matches(new V(o,l))||(i=i.updateImmediateChild(o,z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Ox{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ts(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new V(n,r))||(r=z.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=z.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(z.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;P(l.numChildren()===this.limit_,"");const a=new V(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(d&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(Is(n,r,h)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ss(n,h));const x=l.updateImmediateChild(n,z.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(ai(f.name,f.node)),x.updateImmediateChild(f.name,f.node)):x}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Ss(u.name,u.node)),s.trackChildChange(ai(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,z.EMPTY_NODE)):e}}/**
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
 */class Td{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=he}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:li}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===he}copy(){const e=new Td;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Dx(t){return t.loadsAllData()?new Id(t.getIndex()):t.hasLimit()?new Ox(t):new Ts(t)}function Bf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===he?n="$priority":t.index_===Px?n="$value":t.index_===Gr?n="$key":(P(t.index_ instanceof Rx,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=_e(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=_e(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+_e(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=_e(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+_e(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Vf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==he&&(e.i=t.index_.toString()),e}/**
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
 */class pl extends Ry{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=zs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=pl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Bf(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let h=d;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),si(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=pl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Bf(e._queryParams),r=e._path.toString(),i=new js;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+yi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Es(l.responseText)}catch{Fe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Fe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class Lx{constructor(){this.rootNode_=z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ml(){return{value:null,children:new Map}}function Uy(t,e,n){if(H(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=B(e);t.children.has(r)||t.children.set(r,ml());const i=t.children.get(r);e=ne(e),Uy(i,e,n)}}function nc(t,e,n){t.value!==null?n(e,t.value):Mx(t,(r,i)=>{const s=new ee(e.toString()+"/"+r);nc(i,s,n)})}function Mx(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class jx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Re(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Hf=10*1e3,Fx=30*1e3,Ux=5*60*1e3;class zx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new jx(e);const r=Hf+(Fx-Hf)*Math.random();Zi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Re(e,(i,s)=>{s>0&&Mt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Zi(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ux))}}/**
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
 */class gl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Et.ACK_USER_WRITE,this.source=Nd()}operationForChild(e){if(H(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new gl(Q(),n,this.revert)}}else return P(B(this.path)===e,"operationForChild called for unrelated child."),new gl(ne(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ns{constructor(e,n){this.source=e,this.path=n,this.type=Et.LISTEN_COMPLETE}operationForChild(e){return H(this.path)?new Ns(this.source,Q()):new Ns(this.source,ne(this.path))}}/**
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
 */class pr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Et.OVERWRITE}operationForChild(e){return H(this.path)?new pr(this.source,Q(),this.snap.getImmediateChild(e)):new pr(this.source,ne(this.path),this.snap)}}/**
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
 */class ui{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Et.MERGE}operationForChild(e){if(H(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new pr(this.source,Q(),n.value):new ui(this.source,Q(),n)}else return P(B(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ui(this.source,ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Un{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(H(e))return this.isFullyInitialized()&&!this.filtered_;const n=B(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Wx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Bx(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Ax(o.childName,o.snapshotNode))}),Mi(t,i,"child_removed",e,r,n),Mi(t,i,"child_added",e,r,n),Mi(t,i,"child_moved",s,r,n),Mi(t,i,"child_changed",e,r,n),Mi(t,i,"value",e,r,n),i}function Mi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>Hx(t,l,a)),o.forEach(l=>{const a=Vx(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function Vx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Hx(t,e,n){if(e.childName==null||n.childName==null)throw gi("Should only compare child_ events.");const r=new V(e.childName,e.snapshotNode),i=new V(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function ql(t,e){return{eventCache:t,serverCache:e}}function es(t,e,n,r){return ql(new Un(e,n,r),t.serverCache)}function zy(t,e,n,r){return ql(t.eventCache,new Un(e,n,r))}function yl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function mr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ha;const $x=()=>(Ha||(Ha=new Ge(RE)),Ha);class te{constructor(e,n=$x()){this.value=e,this.children=n}static fromObject(e){let n=new te(null);return Re(e,(r,i)=>{n=n.set(new ee(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(H(e))return null;{const r=B(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ne(e),n);return s!=null?{path:de(new ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(H(e))return this;{const n=B(e),r=this.children.get(n);return r!==null?r.subtree(ne(e)):new te(null)}}set(e,n){if(H(e))return new te(n,this.children);{const r=B(e),s=(this.children.get(r)||new te(null)).set(ne(e),n),o=this.children.insert(r,s);return new te(this.value,o)}}remove(e){if(H(e))return this.children.isEmpty()?new te(null):new te(null,this.children);{const n=B(e),r=this.children.get(n);if(r){const i=r.remove(ne(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new te(null):new te(this.value,s)}else return this}}get(e){if(H(e))return this.value;{const n=B(e),r=this.children.get(n);return r?r.get(ne(e)):null}}setTree(e,n){if(H(e))return n;{const r=B(e),s=(this.children.get(r)||new te(null)).setTree(ne(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new te(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(de(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(H(e))return null;{const s=B(e),o=this.children.get(s);return o?o.findOnPath_(ne(e),de(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,r){if(H(e))return this;{this.value&&r(n,this.value);const i=B(e),s=this.children.get(i);return s?s.foreachOnPath_(ne(e),de(n,i),r):new te(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(de(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class kt{constructor(e){this.writeTree_=e}static empty(){return new kt(new te(null))}}function ts(t,e,n){if(H(e))return new kt(new te(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Me(i,e);return s=s.updateChild(o,n),new kt(t.writeTree_.set(i,s))}else{const i=new te(n),s=t.writeTree_.setTree(e,i);return new kt(s)}}}function rc(t,e,n){let r=t;return Re(n,(i,s)=>{r=ts(r,de(e,i),s)}),r}function $f(t,e){if(H(e))return kt.empty();{const n=t.writeTree_.setTree(e,new te(null));return new kt(n)}}function ic(t,e){return wr(t,e)!=null}function wr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Me(n.path,e)):null}function Gf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(he,(r,i)=>{e.push(new V(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new V(r,i.value))}),e}function An(t,e){if(H(e))return t;{const n=wr(t,e);return n!=null?new kt(new te(n)):new kt(t.writeTree_.subtree(e))}}function sc(t){return t.writeTree_.isEmpty()}function ci(t,e){return Wy(Q(),t.writeTree_,e)}function Wy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(P(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Wy(de(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(de(t,".priority"),r)),n}}/**
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
 */function Ql(t,e){return $y(e,t)}function Gx(t,e,n,r,i){P(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ts(t.visibleWrites,e,n)),t.lastWriteId=r}function Kx(t,e,n,r){P(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=rc(t.visibleWrites,e,n),t.lastWriteId=r}function Yx(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function qx(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Qx(l,r.path)?i=!1:lt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return Jx(t),!0;if(r.snap)t.visibleWrites=$f(t.visibleWrites,r.path);else{const l=r.children;Re(l,a=>{t.visibleWrites=$f(t.visibleWrites,de(r.path,a))})}return!0}else return!1}function Qx(t,e){if(t.snap)return lt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&lt(de(t.path,n),e))return!0;return!1}function Jx(t){t.visibleWrites=By(t.allWrites,Xx,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Xx(t){return t.visible}function By(t,e,n){let r=kt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)lt(n,o)?(l=Me(n,o),r=ts(r,l,s.snap)):lt(o,n)&&(l=Me(o,n),r=ts(r,Q(),s.snap.getChild(l)));else if(s.children){if(lt(n,o))l=Me(n,o),r=rc(r,l,s.children);else if(lt(o,n))if(l=Me(o,n),H(l))r=rc(r,Q(),s.children);else{const a=si(s.children,B(l));if(a){const u=a.getChild(ne(l));r=ts(r,Q(),u)}}}else throw gi("WriteRecord should have .snap or .children")}}return r}function Vy(t,e,n,r,i){if(!r&&!i){const s=wr(t.visibleWrites,e);if(s!=null)return s;{const o=An(t.visibleWrites,e);if(sc(o))return n;if(n==null&&!ic(o,Q()))return null;{const l=n||z.EMPTY_NODE;return ci(o,l)}}}else{const s=An(t.visibleWrites,e);if(!i&&sc(s))return n;if(!i&&n==null&&!ic(s,Q()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(lt(u.path,e)||lt(e,u.path))},l=By(t.allWrites,o,e),a=n||z.EMPTY_NODE;return ci(l,a)}}}function Zx(t,e,n){let r=z.EMPTY_NODE;const i=wr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(he,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=An(t.visibleWrites,e);return n.forEachChild(he,(o,l)=>{const a=ci(An(s,new ee(o)),l);r=r.updateImmediateChild(o,a)}),Gf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=An(t.visibleWrites,e);return Gf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function eC(t,e,n,r,i){P(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=de(e,n);if(ic(t.visibleWrites,s))return null;{const o=An(t.visibleWrites,s);return sc(o)?i.getChild(n):ci(o,i.getChild(n))}}function tC(t,e,n,r){const i=de(e,n),s=wr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=An(t.visibleWrites,i);return ci(o,r.getNode().getImmediateChild(n))}else return null}function nC(t,e){return wr(t.visibleWrites,e)}function rC(t,e,n,r,i,s,o){let l;const a=An(t.visibleWrites,e),u=wr(a,Q());if(u!=null)l=u;else if(n!=null)l=ci(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],h=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=f.getNext();for(;_&&d.length<i;)h(_,r)!==0&&d.push(_),_=f.getNext();return d}else return[]}function iC(){return{visibleWrites:kt.empty(),allWrites:[],lastWriteId:-1}}function _l(t,e,n,r){return Vy(t.writeTree,t.treePath,e,n,r)}function Pd(t,e){return Zx(t.writeTree,t.treePath,e)}function Kf(t,e,n,r){return eC(t.writeTree,t.treePath,e,n,r)}function vl(t,e){return nC(t.writeTree,de(t.treePath,e))}function sC(t,e,n,r,i,s){return rC(t.writeTree,t.treePath,e,n,r,i,s)}function Ad(t,e,n){return tC(t.writeTree,t.treePath,e,n)}function Hy(t,e){return $y(de(t.treePath,e),t.writeTree)}function $y(t,e){return{treePath:t,writeTree:e}}/**
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
 */class oC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Is(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ss(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ai(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Is(r,e.snapshotNode,i.oldSnap));else throw gi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class lC{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Gy=new lC;class Od{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Un(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ad(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:mr(this.viewCache_),s=sC(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function aC(t){return{filter:t}}function uC(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function cC(t,e,n,r,i){const s=new oC;let o,l;if(n.type===Et.OVERWRITE){const u=n;u.source.fromUser?o=oc(t,e,u.path,u.snap,r,i,s):(P(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!H(u.path),o=wl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===Et.MERGE){const u=n;u.source.fromUser?o=hC(t,e,u.path,u.children,r,i,s):(P(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=lc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===Et.ACK_USER_WRITE){const u=n;u.revert?o=mC(t,e,u.path,r,i,s):o=fC(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Et.LISTEN_COMPLETE)o=pC(t,e,n.path,r,s);else throw gi("Unknown operation type: "+n.type);const a=s.getChanges();return dC(e,o,a),{viewCache:o,changes:a}}function dC(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=yl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Fy(yl(e)))}}function Ky(t,e,n,r,i,s){const o=e.eventCache;if(vl(r,n)!=null)return e;{let l,a;if(H(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=mr(e),d=u instanceof z?u:z.EMPTY_NODE,h=Pd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=_l(r,mr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=B(n);if(u===".priority"){P(Fn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const h=Kf(r,n,d,a);h!=null?l=t.filter.updatePriority(d,h):l=o.getNode()}else{const d=ne(n);let h;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=Kf(r,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(u).updateChild(d,f):h=o.getNode().getImmediateChild(u)}else h=Ad(r,u,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),u,h,d,i,s):l=o.getNode()}}return es(e,l,o.isFullyInitialized()||H(n),t.filter.filtersNodes())}}function wl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(H(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),_,null)}else{const _=B(n);if(!a.isCompleteForPath(n)&&Fn(n)>1)return e;const y=ne(n),b=a.getNode().getImmediateChild(_).updateChild(y,r);_===".priority"?u=d.updatePriority(a.getNode(),b):u=d.updateChild(a.getNode(),_,b,y,Gy,null)}const h=zy(e,u,a.isFullyInitialized()||H(n),d.filtersNodes()),f=new Od(i,h,s);return Ky(t,h,n,i,f,l)}function oc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new Od(i,e,s);if(H(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=es(e,u,!0,t.filter.filtersNodes());else{const h=B(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=es(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=ne(n),_=l.getNode().getImmediateChild(h);let y;if(H(f))y=r;else{const x=d.getCompleteChild(h);x!=null?xd(f)===".priority"&&x.getChild(Py(f)).isEmpty()?y=x:y=x.updateChild(f,r):y=z.EMPTY_NODE}if(_.equals(y))a=e;else{const x=t.filter.updateChild(l.getNode(),h,y,f,d,o);a=es(e,x,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Yf(t,e){return t.eventCache.isCompleteForChild(e)}function hC(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=de(n,a);Yf(e,B(d))&&(l=oc(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=de(n,a);Yf(e,B(d))||(l=oc(t,l,d,u,i,s,o))}),l}function qf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function lc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;H(n)?u=r:u=new te(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((h,f)=>{if(d.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),y=qf(t,_,f);a=wl(t,a,new ee(h),y,i,s,o,l)}}),u.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!d.hasChild(h)&&!_){const y=e.serverCache.getNode().getImmediateChild(h),x=qf(t,y,f);a=wl(t,a,new ee(h),x,i,s,o,l)}}),a}function fC(t,e,n,r,i,s,o){if(vl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(H(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return wl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(H(n)){let u=new te(null);return a.getNode().forEachChild(Gr,(d,h)=>{u=u.set(new ee(d),h)}),lc(t,e,n,u,i,s,l,o)}else return e}else{let u=new te(null);return r.foreach((d,h)=>{const f=de(n,d);a.isCompleteForPath(f)&&(u=u.set(d,a.getNode().getChild(f)))}),lc(t,e,n,u,i,s,l,o)}}function pC(t,e,n,r,i){const s=e.serverCache,o=zy(e,s.getNode(),s.isFullyInitialized()||H(n),s.isFiltered());return Ky(t,o,n,r,Gy,i)}function mC(t,e,n,r,i,s){let o;if(vl(r,n)!=null)return e;{const l=new Od(r,e,i),a=e.eventCache.getNode();let u;if(H(n)||B(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=_l(r,mr(e));else{const h=e.serverCache.getNode();P(h instanceof z,"serverChildren would be complete if leaf node"),d=Pd(r,h)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=B(n);let h=Ad(r,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=a.getImmediateChild(d)),h!=null?u=t.filter.updateChild(a,d,h,ne(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,z.EMPTY_NODE,ne(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=_l(r,mr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||vl(r,Q())!=null,es(e,u,o,t.filter.filtersNodes())}}/**
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
 */class gC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Id(r.getIndex()),s=Dx(r);this.processor_=aC(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(z.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(z.EMPTY_NODE,l.getNode(),null),d=new Un(a,o.isFullyInitialized(),i.filtersNodes()),h=new Un(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ql(h,d),this.eventGenerator_=new Wx(this.query_)}get query(){return this.query_}}function yC(t){return t.viewCache_.serverCache.getNode()}function _C(t){return yl(t.viewCache_)}function vC(t,e){const n=mr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!H(e)&&!n.getImmediateChild(B(e)).isEmpty())?n.getChild(e):null}function Qf(t){return t.eventRegistrations_.length===0}function wC(t,e){t.eventRegistrations_.push(e)}function Jf(t,e,n){const r=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Xf(t,e,n,r){e.type===Et.MERGE&&e.source.queryId!==null&&(P(mr(t.viewCache_),"We should always have a full cache before handling merges"),P(yl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=cC(t.processor_,i,e,n,r);return uC(t.processor_,s.viewCache),P(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Yy(t,s.changes,s.viewCache.eventCache.getNode(),null)}function EC(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(he,(s,o)=>{r.push(ai(s,o))}),n.isFullyInitialized()&&r.push(Fy(n.getNode())),Yy(t,r,n.getNode(),e)}function Yy(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Bx(t.eventGenerator_,e,n,i)}/**
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
 */let El;class qy{constructor(){this.views=new Map}}function xC(t){P(!El,"__referenceConstructor has already been defined"),El=t}function CC(){return P(El,"Reference.ts has not been loaded"),El}function kC(t){return t.views.size===0}function Dd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return P(s!=null,"SyncTree gave us an op for an invalid query."),Xf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Xf(o,e,n,r));return s}}function Qy(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=_l(n,i?r:null),a=!1;l?a=!0:r instanceof z?(l=Pd(n,r),a=!1):(l=z.EMPTY_NODE,a=!1);const u=ql(new Un(l,a,!1),new Un(r,i,!1));return new gC(e,u)}return o}function SC(t,e,n,r,i,s){const o=Qy(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),wC(o,n),EC(o,n)}function IC(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=zn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Jf(u,n,r)),Qf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Jf(a,n,r)),Qf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!zn(t)&&s.push(new(CC())(e._repo,e._path)),{removed:s,events:o}}function Jy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function On(t,e){let n=null;for(const r of t.views.values())n=n||vC(r,e);return n}function Xy(t,e){if(e._queryParams.loadsAllData())return Jl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Zy(t,e){return Xy(t,e)!=null}function zn(t){return Jl(t)!=null}function Jl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let xl;function TC(t){P(!xl,"__referenceConstructor has already been defined"),xl=t}function NC(){return P(xl,"Reference.ts has not been loaded"),xl}let RC=1;class Zf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new te(null),this.pendingWriteTree_=iC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function e_(t,e,n,r,i){return Gx(t.pendingWriteTree_,e,n,r,i),i?wi(t,new pr(Nd(),e,n)):[]}function bC(t,e,n,r){Kx(t.pendingWriteTree_,e,n,r);const i=te.fromObject(n);return wi(t,new ui(Nd(),e,i))}function wn(t,e,n=!1){const r=Yx(t.pendingWriteTree_,e);if(qx(t.pendingWriteTree_,e)){let s=new te(null);return r.snap!=null?s=s.set(Q(),!0):Re(r.children,o=>{s=s.set(new ee(o),!0)}),wi(t,new gl(r.path,s,n))}else return[]}function Bs(t,e,n){return wi(t,new pr(Rd(),e,n))}function PC(t,e,n){const r=te.fromObject(n);return wi(t,new ui(Rd(),e,r))}function AC(t,e){return wi(t,new Ns(Rd(),e))}function OC(t,e,n){const r=Md(t,n);if(r){const i=jd(r),s=i.path,o=i.queryId,l=Me(s,e),a=new Ns(bd(o),l);return Fd(t,s,a)}else return[]}function Cl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Zy(o,e))){const a=IC(o,e,n,r);kC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(f,_)=>zn(_));if(d&&!h){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const _=MC(f);for(let y=0;y<_.length;++y){const x=_[y],b=x.query,g=i_(t,x);t.listenProvider_.startListening(ns(b),Rs(t,b),g.hashFn,g.onComplete)}}}!h&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(ns(e),null):u.forEach(f=>{const _=t.queryToTagMap.get(Xl(f));t.listenProvider_.stopListening(ns(f),_)}))}jC(t,u)}return l}function t_(t,e,n,r){const i=Md(t,r);if(i!=null){const s=jd(i),o=s.path,l=s.queryId,a=Me(o,e),u=new pr(bd(l),a,n);return Fd(t,o,u)}else return[]}function DC(t,e,n,r){const i=Md(t,r);if(i){const s=jd(i),o=s.path,l=s.queryId,a=Me(o,e),u=te.fromObject(n),d=new ui(bd(l),a,u);return Fd(t,o,d)}else return[]}function ac(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const y=Me(f,i);s=s||On(_,y),o=o||zn(_)});let l=t.syncPointTree_.get(i);l?(o=o||zn(l),s=s||On(l,Q())):(l=new qy,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=z.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,y)=>{const x=On(y,Q());x&&(s=s.updateImmediateChild(_,x))}));const u=Zy(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=Xl(e);P(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=FC();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const d=Ql(t.pendingWriteTree_,i);let h=SC(l,e,n,d,s,a);if(!u&&!o&&!r){const f=Xy(l,e);h=h.concat(UC(t,e,f))}return h}function Ld(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Me(o,e),u=On(l,a);if(u)return u});return Vy(i,e,s,n,!0)}function LC(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const h=Me(u,n);r=r||On(d,h)});let i=t.syncPointTree_.get(n);i?r=r||On(i,Q()):(i=new qy,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Un(r,!0,!1):null,l=Ql(t.pendingWriteTree_,e._path),a=Qy(i,e,l,s?o.getNode():z.EMPTY_NODE,s);return _C(a)}function wi(t,e){return n_(e,t.syncPointTree_,null,Ql(t.pendingWriteTree_,Q()))}function n_(t,e,n,r){if(H(t.path))return r_(t,e,n,r);{const i=e.get(Q());n==null&&i!=null&&(n=On(i,Q()));let s=[];const o=B(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=Hy(r,o);s=s.concat(n_(l,a,u,d))}return i&&(s=s.concat(Dd(i,t,r,n))),s}}function r_(t,e,n,r){const i=e.get(Q());n==null&&i!=null&&(n=On(i,Q()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Hy(r,o),d=t.operationForChild(o);d&&(s=s.concat(r_(d,l,a,u)))}),i&&(s=s.concat(Dd(i,t,r,n))),s}function i_(t,e){const n=e.query,r=Rs(t,n);return{hashFn:()=>(yC(e)||z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?OC(t,n._path,r):AC(t,n._path);{const s=AE(i,n);return Cl(t,n,null,s)}}}}function Rs(t,e){const n=Xl(e);return t.queryToTagMap.get(n)}function Xl(t){return t._path.toString()+"$"+t._queryIdentifier}function Md(t,e){return t.tagToQueryMap.get(e)}function jd(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function Fd(t,e,n){const r=t.syncPointTree_.get(e);P(r,"Missing sync point for query tag that we're tracking");const i=Ql(t.pendingWriteTree_,e);return Dd(r,n,i,null)}function MC(t){return t.fold((e,n,r)=>{if(n&&zn(n))return[Jl(n)];{let i=[];return n&&(i=Jy(n)),Re(r,(s,o)=>{i=i.concat(o)}),i}})}function ns(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(NC())(t._repo,t._path):t}function jC(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Xl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function FC(){return RC++}function UC(t,e,n){const r=e._path,i=Rs(t,e),s=i_(t,n),o=t.listenProvider_.startListening(ns(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)P(!zn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,h)=>{if(!H(u)&&d&&zn(d))return[Jl(d).query];{let f=[];return d&&(f=f.concat(Jy(d).map(_=>_.query))),Re(h,(_,y)=>{f=f.concat(y)}),f}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(ns(d),Rs(t,d))}}return o}/**
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
 */class Ud{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ud(n)}node(){return this.node_}}class zd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new zd(this.syncTree_,n)}node(){return Ld(this.syncTree_,this.path_)}}const zC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ep=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return WC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return BC(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},WC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},BC=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&P(!1,"Unexpected increment value: "+r);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},s_=function(t,e,n,r){return Wd(e,new zd(n,t),r)},o_=function(t,e,n){return Wd(t,new Ud(e),n)};function Wd(t,e,n){const r=t.getPriority().val(),i=ep(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=ep(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ee(l,ye(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ee(i))),o.forEachChild(he,(l,a)=>{const u=Wd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class Bd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Vd(t,e){let n=e instanceof ee?e:new ee(e),r=t,i=B(n);for(;i!==null;){const s=si(r.node.children,i)||{children:{},childCount:0};r=new Bd(i,r,s),n=ne(n),i=B(n)}return r}function Ei(t){return t.node.value}function l_(t,e){t.node.value=e,uc(t)}function a_(t){return t.node.childCount>0}function VC(t){return Ei(t)===void 0&&!a_(t)}function Zl(t,e){Re(t.node.children,(n,r)=>{e(new Bd(n,t,r))})}function u_(t,e,n,r){n&&!r&&e(t),Zl(t,i=>{u_(i,e,!0,r)}),n&&r&&e(t)}function HC(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Vs(t){return new ee(t.parent===null?t.name:Vs(t.parent)+"/"+t.name)}function uc(t){t.parent!==null&&$C(t.parent,t.name,t)}function $C(t,e,n){const r=VC(n),i=Mt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,uc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,uc(t))}/**
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
 */const GC=/[\[\].#$\/\u0000-\u001F\u007F]/,KC=/[\[\].#$\u0000-\u001F\u007F]/,$a=10*1024*1024,Hd=function(t){return typeof t=="string"&&t.length!==0&&!GC.test(t)},c_=function(t){return typeof t=="string"&&t.length!==0&&!KC.test(t)},YC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),c_(t)},qC=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!yd(t)||t&&typeof t=="object"&&Mt(t,".sv")},QC=function(t,e,n,r){r&&e===void 0||ea(Gl(t,"value"),e,n)},ea=function(t,e,n){const r=n instanceof ee?new hx(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Jn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Jn(r)+" with contents = "+e.toString());if(yd(e))throw new Error(t+"contains "+e.toString()+" "+Jn(r));if(typeof e=="string"&&e.length>$a/3&&Kl(e)>$a)throw new Error(t+"contains a string greater than "+$a+" utf8 bytes "+Jn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Re(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Hd(o)))throw new Error(t+" contains an invalid key ("+o+") "+Jn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fx(r,o),ea(t,l,r),px(r)}),i&&s)throw new Error(t+' contains ".value" child '+Jn(r)+" in addition to actual children.")}},JC=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ks(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Hd(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(dx);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&lt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},XC=function(t,e,n,r){if(r&&e===void 0)return;const i=Gl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Re(e,(o,l)=>{const a=new ee(o);if(ea(i,l,de(n,a)),xd(a)===".priority"&&!qC(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),JC(i,s)},d_=function(t,e,n,r){if(!(r&&n===void 0)&&!c_(n))throw new Error(Gl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ZC=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),d_(t,e,n,r)},h_=function(t,e){if(B(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ek=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Hd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!YC(n))throw new Error(Gl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class tk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ta(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Cd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function f_(t,e,n){ta(t,n),p_(t,r=>Cd(r,e))}function dt(t,e,n){ta(t,n),p_(t,r=>lt(r,e)||lt(e,r))}function p_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(nk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function nk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();sr&&Ie("event: "+n.toString()),vi(r)}}}/**
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
 */const rk="repo_interrupt",ik=25;class sk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new tk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ml(),this.transactionQueueTree_=new Bd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ok(t,e,n){if(t.stats_=wd(t.repoInfo_),t.forceRestClient_||ME())t.server_=new pl(t.repoInfo_,(r,i,s,o)=>{tp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>np(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{_e(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new qt(t.repoInfo_,e,(r,i,s,o)=>{tp(t,r,i,s,o)},r=>{np(t,r)},r=>{ak(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=WE(t.repoInfo_,()=>new zx(t.stats_,t.server_)),t.infoData_=new Lx,t.infoSyncTree_=new Zf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Bs(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),$d(t,"connected",!1),t.serverSyncTree_=new Zf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);dt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function lk(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function na(t){return zC({timestamp:lk(t)})}function tp(t,e,n,r,i){t.dataUpdateCount++;const s=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=al(n,u=>ye(u));o=DC(t.serverSyncTree_,s,a,i)}else{const a=ye(n);o=t_(t.serverSyncTree_,s,a,i)}else if(r){const a=al(n,u=>ye(u));o=PC(t.serverSyncTree_,s,a)}else{const a=ye(n);o=Bs(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=di(t,s)),dt(t.eventQueue_,l,o)}function np(t,e){$d(t,"connected",e),e===!1&&hk(t)}function ak(t,e){Re(e,(n,r)=>{$d(t,n,r)})}function $d(t,e,n){const r=new ee("/.info/"+e),i=ye(n);t.infoData_.updateSnapshot(r,i);const s=Bs(t.infoSyncTree_,r,i);dt(t.eventQueue_,r,s)}function Gd(t){return t.nextWriteId_++}function uk(t,e,n){const r=LC(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ye(i).withIndex(e._queryParams.getIndex());ac(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Bs(t.serverSyncTree_,e._path,s);else{const l=Rs(t.serverSyncTree_,e);o=t_(t.serverSyncTree_,e._path,s,l)}return dt(t.eventQueue_,e._path,o),Cl(t.serverSyncTree_,e,n,null,!0),s},i=>(Hs(t,"get for query "+_e(e)+" failed: "+i),Promise.reject(new Error(i))))}function ck(t,e,n,r,i){Hs(t,"set",{path:e.toString(),value:n,priority:r});const s=na(t),o=ye(n,r),l=Ld(t.serverSyncTree_,e),a=o_(o,l,s),u=Gd(t),d=e_(t.serverSyncTree_,e,a,u,!0);ta(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const y=f==="ok";y||Fe("set at "+e+" failed: "+f);const x=wn(t.serverSyncTree_,u,!y);dt(t.eventQueue_,e,x),cc(t,i,f,_)});const h=Yd(t,e);di(t,h),dt(t.eventQueue_,h,[])}function dk(t,e,n,r){Hs(t,"update",{path:e.toString(),value:n});let i=!0;const s=na(t),o={};if(Re(n,(l,a)=>{i=!1,o[l]=s_(de(e,l),ye(a),t.serverSyncTree_,s)}),i)Ie("update() called with empty data.  Don't do anything."),cc(t,r,"ok",void 0);else{const l=Gd(t),a=bC(t.serverSyncTree_,e,o,l);ta(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,d)=>{const h=u==="ok";h||Fe("update at "+e+" failed: "+u);const f=wn(t.serverSyncTree_,l,!h),_=f.length>0?di(t,e):e;dt(t.eventQueue_,_,f),cc(t,r,u,d)}),Re(n,u=>{const d=Yd(t,de(e,u));di(t,d)}),dt(t.eventQueue_,e,[])}}function hk(t){Hs(t,"onDisconnectEvents");const e=na(t),n=ml();nc(t.onDisconnect_,Q(),(i,s)=>{const o=s_(i,s,t.serverSyncTree_,e);Uy(n,i,o)});let r=[];nc(n,Q(),(i,s)=>{r=r.concat(Bs(t.serverSyncTree_,i,s));const o=Yd(t,i);di(t,o)}),t.onDisconnect_=ml(),dt(t.eventQueue_,Q(),r)}function fk(t,e,n){let r;B(e._path)===".info"?r=ac(t.infoSyncTree_,e,n):r=ac(t.serverSyncTree_,e,n),f_(t.eventQueue_,e._path,r)}function rp(t,e,n){let r;B(e._path)===".info"?r=Cl(t.infoSyncTree_,e,n):r=Cl(t.serverSyncTree_,e,n),f_(t.eventQueue_,e._path,r)}function pk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(rk)}function Hs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ie(n,...e)}function cc(t,e,n,r){e&&vi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function m_(t,e,n){return Ld(t.serverSyncTree_,e,n)||z.EMPTY_NODE}function Kd(t,e=t.transactionQueueTree_){if(e||ra(t,e),Ei(e)){const n=y_(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&mk(t,Vs(e),n)}else a_(e)&&Zl(e,n=>{Kd(t,n)})}function mk(t,e,n){const r=n.map(u=>u.currentWriteId),i=m_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];P(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=Me(e,d.path);s=s.updateChild(h,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Hs(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(wn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ra(t,Vd(t.transactionQueueTree_,e)),Kd(t,t.transactionQueueTree_),dt(t.eventQueue_,e,d);for(let f=0;f<h.length;f++)vi(h[f])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Fe("transaction at "+a.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}di(t,e)}},o)}function di(t,e){const n=g_(t,e),r=Vs(n),i=y_(t,n);return gk(t,i,r),r}function gk(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Me(n,a.path);let d=!1,h;if(P(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,h=a.abortReason,i=i.concat(wn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=ik)d=!0,h="maxretry",i=i.concat(wn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=m_(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){ea("transaction failed: Data returned ",_,a.path);let y=ye(_);typeof _=="object"&&_!=null&&Mt(_,".priority")||(y=y.updatePriority(f.getPriority()));const b=a.currentWriteId,g=na(t),m=o_(y,f,g);a.currentOutputSnapshotRaw=y,a.currentOutputSnapshotResolved=m,a.currentWriteId=Gd(t),o.splice(o.indexOf(b),1),i=i.concat(e_(t.serverSyncTree_,a.path,m,a.currentWriteId,a.applyLocally)),i=i.concat(wn(t.serverSyncTree_,b,!0))}else d=!0,h="nodata",i=i.concat(wn(t.serverSyncTree_,a.currentWriteId,!0))}dt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(h),!1,null))))}ra(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)vi(r[l]);Kd(t,t.transactionQueueTree_)}function g_(t,e){let n,r=t.transactionQueueTree_;for(n=B(e);n!==null&&Ei(r)===void 0;)r=Vd(r,n),e=ne(e),n=B(e);return r}function y_(t,e){const n=[];return __(t,e,n),n.sort((r,i)=>r.order-i.order),n}function __(t,e,n){const r=Ei(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Zl(e,i=>{__(t,i,n)})}function ra(t,e){const n=Ei(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,l_(e,n.length>0?n:void 0)}Zl(e,r=>{ra(t,r)})}function Yd(t,e){const n=Vs(g_(t,e)),r=Vd(t.transactionQueueTree_,e);return HC(r,i=>{Ga(t,i)}),Ga(t,r),u_(r,i=>{Ga(t,i)}),n}function Ga(t,e){const n=Ei(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(wn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?l_(e,void 0):n.length=s+1,dt(t.eventQueue_,Vs(e),i);for(let o=0;o<r.length;o++)vi(r[o])}}/**
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
 */function yk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _k(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const ip=function(t,e){const n=vk(t),r=n.namespace;n.domain==="firebase.com"&&tn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||TE();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new xy(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ee(n.pathString)}},vk=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(d,h)),d<h&&(i=yk(t.substring(d,h)));const f=_k(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class v_{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+_e(this.snapshot.exportVal())}}class w_{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class E_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class qd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return H(this._path)?null:xd(this._path)}get ref(){return new jt(this._repo,this._path)}get _queryIdentifier(){const e=Vf(this._queryParams),n=_d(e);return n==="{}"?"default":n}get _queryObject(){return Vf(this._queryParams)}isEqual(e){if(e=Be(e),!(e instanceof qd))return!1;const n=this._repo===e._repo,r=Cd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+cx(this._path)}}class jt extends qd{constructor(e,n){super(e,n,new Td,!1)}get parent(){const e=Py(this._path);return e===null?null:new jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class hi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),r=kl(this.ref,e);return new hi(this._node.getChild(n),r,he)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new hi(i,kl(this.ref,r),he)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ft(t,e){return t=Be(t),t._checkNotDeleted("ref"),e!==void 0?kl(t._root,e):t._root}function kl(t,e){return t=Be(t),B(t._path)===null?ZC("child","path",e,!1):d_("child","path",e,!1),new jt(t._repo,de(t._path,e))}function wk(t){return h_("remove",t._path),Qd(t,null)}function Qd(t,e){t=Be(t),h_("set",t._path),QC("set",e,t._path,!1);const n=new js;return ck(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ia(t,e){XC("update",e,t._path,!1);const n=new js;return dk(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function x_(t){t=Be(t);const e=new E_(()=>{}),n=new sa(e);return uk(t._repo,t,n).then(r=>new hi(r,new jt(t._repo,t._path),t._queryParams.getIndex()))}class sa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new v_("value",this,new hi(e.snapshotNode,new jt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new w_(this,e,n):null}matches(e){return e instanceof sa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Jd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new w_(this,e,n):null}createEvent(e,n){P(e.childName!=null,"Child events should have a childName.");const r=kl(new jt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new v_(e.type,this,new hi(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Jd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ek(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,h)=>{rp(t._repo,t,l),a(d,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new E_(n,s||void 0),l=e==="value"?new sa(o):new Jd(e,o);return fk(t._repo,t,l),()=>rp(t._repo,t,l)}function C_(t,e,n,r){return Ek(t,"value",e,n,r)}xC(jt);TC(jt);/**
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
 */const xk="FIREBASE_DATABASE_EMULATOR_HOST",dc={};let Ck=!1;function kk(t,e,n,r){t.repoInfo_=new xy(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Sk(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ie("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ip(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[xk]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=ip(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new $r($r.OWNER):new FE(t.name,t.options,e);ek("Invalid Firebase Database URL",o),H(o.path)||tn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Tk(l,t,d,new jE(t.name,n));return new Nk(h,t)}function Ik(t,e){const n=dc[e];(!n||n[t.key]!==t)&&tn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),pk(t),delete n[t.key]}function Tk(t,e,n,r){let i=dc[e.name];i||(i={},dc[e.name]=i);let s=i[t.toURLString()];return s&&tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new sk(t,Ck,n,r),i[t.toURLString()]=s,s}class Nk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ok(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jt(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ik(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&tn("Cannot call "+e+" on a deleted database.")}}function Rk(t=sy(),e){const n=gd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Q1("database");r&&bk(n,...r)}return n}function bk(t,e,n,r={}){t=Be(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&tn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&tn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new $r($r.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:J1(r.mockUserToken,t.app.options.projectId);s=new $r(o)}kk(i,e,n,s)}/**
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
 */function Pk(t){xE(_i),oi(new hr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Sk(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Pn(If,Tf,t),Pn(If,Tf,"esm2017")}qt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};qt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Pk();function Xd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function k_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ak=k_,S_=new Fs("auth","Firebase",k_());/**
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
 */const Sl=new pd("@firebase/auth");function Ok(t,...e){Sl.logLevel<=Z.WARN&&Sl.warn(`Auth (${_i}): ${t}`,...e)}function bo(t,...e){Sl.logLevel<=Z.ERROR&&Sl.error(`Auth (${_i}): ${t}`,...e)}/**
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
 */function It(t,...e){throw Zd(t,...e)}function Ot(t,...e){return Zd(t,...e)}function I_(t,e,n){const r=Object.assign(Object.assign({},Ak()),{[e]:n});return new Fs("auth","Firebase",r).create(e,{appName:t.name})}function Dt(t){return I_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return S_.create(t,...e)}function W(t,e,...n){if(!t)throw Zd(e,...n)}function $t(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bo(e),new Error(e)}function nn(t,e){t||$t(e)}/**
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
 */function hc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dk(){return sp()==="http:"||sp()==="https:"}function sp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Lk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dk()||Z1()||"connection"in navigator)?navigator.onLine:!0}function Mk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $s{constructor(e,n){this.shortDelay=e,this.longDelay=n,nn(n>e,"Short delay should be less than long delay!"),this.isMobile=fd()||Zg()}get(){return Lk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class T_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Fk=new $s(3e4,6e4);function $n(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gn(t,e,n,r,i={}){return N_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=yi(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},s);return X1()||(u.referrerPolicy="no-referrer"),T_.fetch()(R_(t,t.config.apiHost,n,l),u)})}async function N_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jk),e);try{const i=new zk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw go(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw go(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw go(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw go(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw I_(t,d,u);It(t,d)}}catch(i){if(i instanceof Hn)throw i;It(t,"network-request-failed",{message:String(i)})}}async function Gs(t,e,n,r,i={}){const s=await Gn(t,e,n,r,i);return"mfaPendingCredential"in s&&It(t,"multi-factor-auth-required",{_serverResponse:s}),s}function R_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?eh(t.config,i):`${t.config.apiScheme}://${i}`}function Uk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"network-request-failed")),Fk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function go(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ot(t,e,r);return i.customData._tokenResponse=n,i}function op(t){return t!==void 0&&t.enterprise!==void 0}class Wk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Uk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Bk(t,e){return Gn(t,"GET","/v2/recaptchaConfig",$n(t,e))}/**
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
 */async function Vk(t,e){return Gn(t,"POST","/v1/accounts:delete",e)}async function b_(t,e){return Gn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function rs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hk(t,e=!1){const n=Be(t),r=await n.getIdToken(e),i=th(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:rs(Ka(i.auth_time)),issuedAtTime:rs(Ka(i.iat)),expirationTime:rs(Ka(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ka(t){return Number(t)*1e3}function th(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bo("JWT malformed, contained fewer than 3 sections"),null;try{const i=ll(n);return i?JSON.parse(i):(bo("Failed to decode base64 JWT payload"),null)}catch(i){return bo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function lp(t){const e=th(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function bs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Hn&&$k(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $k({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Gk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=rs(this.lastLoginAt),this.creationTime=rs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Il(t){var e;const n=t.auth,r=await t.getIdToken(),i=await bs(t,b_(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?P_(s.providerUserInfo):[],l=Yk(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new fc(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function Kk(t){const e=Be(t);await Il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function P_(t){return t.map(e=>{var{providerId:n}=e,r=Xd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function qk(t,e){const n=await N_(t,{},async()=>{const r=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=R_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",T_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Qk(t,e){return Gn(t,"POST","/v2/accounts:revokeToken",$n(t,e))}/**
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
 */class Kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=lp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await qk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Kr;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kr,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
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
 */function an(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Xd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await bs(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hk(this,e)}reload(){return Kk(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(Dt(this.auth));const e=await this.getIdToken();return await bs(this,Vk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:E,isAnonymous:v,providerData:N,stsTokenManager:A}=n;W(p&&A,e,"internal-error");const O=Kr.fromJSON(this.name,A);W(typeof p=="string",e,"internal-error"),an(h,e.name),an(f,e.name),W(typeof E=="boolean",e,"internal-error"),W(typeof v=="boolean",e,"internal-error"),an(_,e.name),an(y,e.name),an(x,e.name),an(b,e.name),an(g,e.name),an(m,e.name);const G=new Gt({uid:p,auth:e,email:f,emailVerified:E,displayName:h,isAnonymous:v,photoURL:y,phoneNumber:_,tenantId:x,stsTokenManager:O,createdAt:g,lastLoginAt:m});return N&&Array.isArray(N)&&(G.providerData=N.map(U=>Object.assign({},U))),b&&(G._redirectEventId=b),G}static async _fromIdTokenResponse(e,n,r=!1){const i=new Kr;i.updateFromServerResponse(n);const s=new Gt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Il(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?P_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Kr;l.updateFromIdToken(r);const a=new Gt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new fc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
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
 */const ap=new Map;function Kt(t){nn(t instanceof Function,"Expected a class definition");let e=ap.get(t);return e?(nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ap.set(t,e),e)}/**
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
 */class A_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}A_.type="NONE";const up=A_;/**
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
 */function Po(t,e,n){return`firebase:${t}:${e}:${n}`}class Yr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Po(this.userKey,i.apiKey,s),this.fullPersistenceKey=Po("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yr(Kt(up),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Kt(up);const o=Po(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const h=Gt._fromJSON(e,d);u!==s&&(l=h),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Yr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Yr(s,e,r))}}/**
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
 */function cp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(M_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(O_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(F_(e))return"Blackberry";if(U_(e))return"Webos";if(D_(e))return"Safari";if((e.includes("chrome/")||L_(e))&&!e.includes("edge/"))return"Chrome";if(j_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function O_(t=Ue()){return/firefox\//i.test(t)}function D_(t=Ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function L_(t=Ue()){return/crios\//i.test(t)}function M_(t=Ue()){return/iemobile/i.test(t)}function j_(t=Ue()){return/android/i.test(t)}function F_(t=Ue()){return/blackberry/i.test(t)}function U_(t=Ue()){return/webos/i.test(t)}function nh(t=Ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Jk(t=Ue()){var e;return nh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xk(){return ew()&&document.documentMode===10}function z_(t=Ue()){return nh(t)||j_(t)||U_(t)||F_(t)||/windows phone/i.test(t)||M_(t)}/**
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
 */function W_(t,e=[]){let n;switch(t){case"Browser":n=cp(Ue());break;case"Worker":n=`${cp(Ue())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_i}/${r}`}/**
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
 */class Zk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function eS(t,e={}){return Gn(t,"GET","/v2/passwordPolicy",$n(t,e))}/**
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
 */const tS=6;class nS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class rS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dp(this),this.idTokenSubscription=new dp(this),this.beforeStateQueue=new Zk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=S_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Yr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await b_(this,{idToken:e}),r=await Gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(wt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Il(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(Dt(this));const n=e?Be(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(Dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(Dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eS(this),n=new nS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Qk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kt(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Yr.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=W_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ok(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Kn(t){return Be(t)}class dp{constructor(e){this.auth=e,this.observer=null,this.addObserver=uw(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let oa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iS(t){oa=t}function B_(t){return oa.loadJS(t)}function sS(){return oa.recaptchaEnterpriseScript}function oS(){return oa.gapiScript}function lS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const aS="recaptcha-enterprise",uS="NO_RECAPTCHA";class cS{constructor(e){this.type=aS,this.auth=Kn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Bk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new Wk(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;op(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(uS)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&op(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=sS();a.length!==0&&(a+=l),B_(a).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function hp(t,e,n,r=!1){const i=new cS(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function pc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await hp(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await hp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function dS(t,e){const n=gd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ul(s,e??{}))return i;It(i,"already-initialized")}return n.initialize({options:e})}function hS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fS(t,e,n){const r=Kn(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=V_(e),{host:o,port:l}=pS(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||mS()}function V_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pS(t){const e=V_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:fp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:fp(o)}}}function fp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class rh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,n){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}async function gS(t,e){return Gn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function yS(t,e){return Gs(t,"POST","/v1/accounts:signInWithPassword",$n(t,e))}/**
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
 */async function _S(t,e){return Gs(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}async function vS(t,e){return Gs(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}/**
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
 */class Ps extends rh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ps(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ps(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pc(e,n,"signInWithPassword",yS);case"emailLink":return _S(e,{email:this._email,oobCode:this._password});default:It(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pc(e,r,"signUpPassword",gS);case"emailLink":return vS(e,{idToken:n,email:this._email,oobCode:this._password});default:It(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */const wS="http://localhost";class gr extends rh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):It("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Xd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new gr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qr(e,n)}buildRequest(){const e={requestUri:wS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yi(n)}return e}}/**
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
 */function ES(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xS(t){const e=Wi(Bi(t)).link,n=e?Wi(Bi(e)).deep_link_id:null,r=Wi(Bi(t)).deep_link_id;return(r?Wi(Bi(r)).link:null)||r||n||e||t}class ih{constructor(e){var n,r,i,s,o,l;const a=Wi(Bi(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,h=ES((i=a.mode)!==null&&i!==void 0?i:null);W(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=xS(e);try{return new ih(n)}catch{return null}}}/**
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
 */class xi{constructor(){this.providerId=xi.PROVIDER_ID}static credential(e,n){return Ps._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ih.parseLink(n);return W(r,"argument-error"),Ps._fromEmailAndCode(e,r.code,r.tenantId)}}xi.PROVIDER_ID="password";xi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class H_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ks extends H_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pn extends Ks{constructor(){super("facebook.com")}static credential(e){return gr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
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
 */class mn extends Ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
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
 */class gn extends Ks{constructor(){super("github.com")}static credential(e){return gr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
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
 */class yn extends Ks{constructor(){super("twitter.com")}static credential(e,n){return gr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
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
 */async function $_(t,e){return Gs(t,"POST","/v1/accounts:signUp",$n(t,e))}/**
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
 */class rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Gt._fromIdTokenResponse(e,r,i),o=pp(r);return new rn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=pp(r);return new rn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function pp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function CS(t){var e;if(wt(t.app))return Promise.reject(Dt(t));const n=Kn(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new rn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await $_(n,{returnSecureToken:!0}),i=await rn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Tl extends Hn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Tl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Tl(e,n,r,i)}}function G_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tl._fromErrorAndOperation(t,s,e,r):s})}async function kS(t,e,n=!1){const r=await bs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rn._forOperation(t,"link",r)}/**
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
 */async function SS(t,e,n=!1){const{auth:r}=t;if(wt(r.app))return Promise.reject(Dt(r));const i="reauthenticate";try{const s=await bs(t,G_(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=th(s.idToken);W(o,r,"internal-error");const{sub:l}=o;return W(t.uid===l,r,"user-mismatch"),rn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&It(r,"user-mismatch"),s}}/**
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
 */async function K_(t,e,n=!1){if(wt(t.app))return Promise.reject(Dt(t));const r="signIn",i=await G_(t,r,e),s=await rn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function IS(t,e){return K_(Kn(t),e)}/**
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
 */async function Y_(t){const e=Kn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function TS(t,e,n){if(wt(t.app))return Promise.reject(Dt(t));const r=Kn(t),o=await pc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$_).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Y_(t),a}),l=await rn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function NS(t,e,n){return wt(t.app)?Promise.reject(Dt(t)):IS(Be(t),xi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Y_(t),r})}function RS(t,e,n,r){return Be(t).onIdTokenChanged(e,n,r)}function bS(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}function PS(t,e,n,r){return Be(t).onAuthStateChanged(e,n,r)}function AS(t){return Be(t).signOut()}const Nl="__sak";/**
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
 */class q_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Nl,"1"),this.storage.removeItem(Nl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const OS=1e3,DS=10;class Q_ extends q_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=z_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Xk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,DS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Q_.type="LOCAL";const LS=Q_;/**
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
 */class J_ extends q_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}J_.type="SESSION";const X_=J_;/**
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
 */function MS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class la{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new la(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await MS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}la.receivers=[];/**
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
 */class jS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=sh("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(f.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Lt(){return window}function FS(t){Lt().location.href=t}/**
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
 */function Z_(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function US(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function WS(){return Z_()?self:null}/**
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
 */const ev="firebaseLocalStorageDb",BS=1,Rl="firebaseLocalStorage",tv="fbase_key";class Ys{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function aa(t,e){return t.transaction([Rl],e?"readwrite":"readonly").objectStore(Rl)}function VS(){const t=indexedDB.deleteDatabase(ev);return new Ys(t).toPromise()}function mc(){const t=indexedDB.open(ev,BS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rl,{keyPath:tv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rl)?e(r):(r.close(),await VS(),e(await mc()))})})}async function mp(t,e,n){const r=aa(t,!0).put({[tv]:e,value:n});return new Ys(r).toPromise()}async function HS(t,e){const n=aa(t,!1).get(e),r=await new Ys(n).toPromise();return r===void 0?null:r.value}function gp(t,e){const n=aa(t,!0).delete(e);return new Ys(n).toPromise()}const $S=800,GS=3;class nv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Z_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=la._getInstance(WS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await US(),!this.activeServiceWorker)return;this.sender=new jS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mc();return await mp(e,Nl,"1"),await gp(e,Nl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>HS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=aa(i,!1).getAll();return new Ys(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$S)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nv.type="LOCAL";const KS=nv;new $s(3e4,6e4);/**
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
 */function YS(t,e){return e?Kt(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class oh extends rh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qS(t){return K_(t.auth,new oh(t),t.bypassAuthState)}function QS(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),SS(n,new oh(t),t.bypassAuthState)}async function JS(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),kS(n,new oh(t),t.bypassAuthState)}/**
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
 */class rv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qS;case"linkViaPopup":case"linkViaRedirect":return JS;case"reauthViaPopup":case"reauthViaRedirect":return QS;default:It(this.auth,"internal-error")}}resolve(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const XS=new $s(2e3,1e4);class Mr extends rv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Mr.currentPopupAction&&Mr.currentPopupAction.cancel(),Mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){nn(this.filter.length===1,"Popup operations only handle one event");const e=sh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,XS.get())};e()}}Mr.currentPopupAction=null;/**
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
 */const ZS="pendingRedirect",Ao=new Map;class eI extends rv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ao.get(this.auth._key());if(!e){try{const r=await tI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ao.set(this.auth._key(),e)}return this.bypassAuthState||Ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tI(t,e){const n=iI(e),r=rI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nI(t,e){Ao.set(t._key(),e)}function rI(t){return Kt(t._redirectPersistence)}function iI(t){return Po(ZS,t.config.apiKey,t.name)}async function sI(t,e,n=!1){if(wt(t.app))return Promise.reject(Dt(t));const r=Kn(t),i=YS(r,e),o=await new eI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const oI=10*60*1e3;class lI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!iv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oI&&this.cachedEventUids.clear(),this.cachedEventUids.has(yp(e))}saveEventToCache(e){this.cachedEventUids.add(yp(e)),this.lastProcessedEventTime=Date.now()}}function yp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iv(t);default:return!1}}/**
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
 */async function uI(t,e={}){return Gn(t,"GET","/v1/projects",e)}/**
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
 */const cI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dI=/^https?/;async function hI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uI(t);for(const n of e)try{if(fI(n))return}catch{}It(t,"unauthorized-domain")}function fI(t){const e=hc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dI.test(n))return!1;if(cI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const pI=new $s(3e4,6e4);function _p(){const t=Lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mI(t){return new Promise((e,n)=>{var r,i,s;function o(){_p(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_p(),n(Ot(t,"network-request-failed"))},timeout:pI.get()})}if(!((i=(r=Lt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Lt().gapi)===null||s===void 0)&&s.load)o();else{const l=lS("iframefcb");return Lt()[l]=()=>{gapi.load?o():n(Ot(t,"network-request-failed"))},B_(`${oS()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Oo=null,e})}let Oo=null;function gI(t){return Oo=Oo||mI(t),Oo}/**
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
 */const yI=new $s(5e3,15e3),_I="__/auth/iframe",vI="emulator/auth/iframe",wI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xI(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?eh(e,vI):`https://${t.config.authDomain}/${_I}`,r={apiKey:e.apiKey,appName:t.name,v:_i},i=EI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${yi(r).slice(1)}`}async function CI(t){const e=await gI(t),n=Lt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:xI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),l=Lt().setTimeout(()=>{s(o)},yI.get());function a(){Lt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const kI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SI=500,II=600,TI="_blank",NI="http://localhost";class vp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RI(t,e,n,r=SI,i=II){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},kI),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ue().toLowerCase();n&&(l=L_(u)?TI:n),O_(u)&&(e=e||NI,a.scrollbars="yes");const d=Object.entries(a).reduce((f,[_,y])=>`${f}${_}=${y},`,"");if(Jk(u)&&l!=="_self")return bI(e||"",l),new vp(null);const h=window.open(e||"",l,d);W(h,t,"popup-blocked");try{h.focus()}catch{}return new vp(h)}function bI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const PI="__/auth/handler",AI="emulator/auth/handler",OI=encodeURIComponent("fac");async function wp(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_i,eventId:i};if(e instanceof H_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries(s||{}))o[d]=h}if(e instanceof Ks){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${OI}=${encodeURIComponent(a)}`:"";return`${DI(t)}?${yi(l).slice(1)}${u}`}function DI({config:t}){return t.emulator?eh(t,AI):`https://${t.authDomain}/${PI}`}/**
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
 */const Ya="webStorageSupport";class LI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=X_,this._completeRedirectFn=sI,this._overrideRedirectResult=nI}async _openPopup(e,n,r,i){var s;nn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await wp(e,n,r,hc(),i);return RI(e,o,sh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await wp(e,n,r,hc(),i);return FS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await CI(e),r=new lI(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ya,{type:Ya},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ya];o!==void 0&&n(!!o),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return z_()||D_()||nh()}}const MI=LI;var Ep="@firebase/auth",xp="1.7.9";/**
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
 */class jI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function FI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UI(t){oi(new hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:W_(t)},u=new rS(r,i,s,a);return hS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),oi(new hr("auth-internal",e=>{const n=Kn(e.getProvider("auth").getImmediate());return(r=>new jI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(Ep,xp,FI(t)),Pn(Ep,xp,"esm2017")}/**
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
 */const zI=5*60,WI=Xg("authIdTokenMaxAge")||zI;let Cp=null;const BI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>WI)return;const i=n==null?void 0:n.token;Cp!==i&&(Cp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function VI(t=sy()){const e=gd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dS(t,{popupRedirectResolver:MI,persistence:[KS,LS,X_]}),r=Xg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=BI(s.toString());bS(n,o,()=>o(n.currentUser)),RS(n,l=>o(l))}}const i=Qg("auth");return i&&fS(n,`http://${i}`),n}function HI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}iS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ot("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",HI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UI("Browser");const $I={apiKey:"AIzaSyAb1mwHVwbxJbbf2WAFlqclFPGRUid4Oeg",authDomain:"link-like-battle.firebaseapp.com",databaseURL:"https://link-like-battle-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"link-like-battle",storageBucket:"link-like-battle.firebasestorage.app",messagingSenderId:"452412670826",appId:"1:452412670826:web:3bcee6fa21c456202a5b13"},sv=iy($I),Ut=Rk(sv),qs=VI(sv),GI=async(t,e)=>{const n=Math.random().toString(36).substring(2,6).toUpperCase(),r=Ft(Ut,`rooms/${n}`),i={status:"waiting",hostName:e||"YOU",roomName:`${e||"名無し"}の部屋`,hostDeck:t,clientName:null,clientDeck:null,gameState:null};return await Qd(r,i),n},KI=t=>{const e=Ft(Ut,"rooms");return C_(e,n=>{const r=n.val(),i=[];r&&Object.keys(r).forEach(s=>{r[s].status==="waiting"&&i.push({id:s,...r[s]})}),t(i)})},YI=async(t,e,n)=>{const r=Ft(Ut,`rooms/${t}`),i=await x_(r);if(!i.exists())throw new Error("部屋が見つかりません");const s=i.val();if(s.status!=="waiting")throw new Error("募集を終了しています");if(s.clientName)throw new Error("すでに満員です");await ia(r,{clientName:n||"YOU",clientDeck:e})},qI=async t=>{await ia(Ft(Ut,`rooms/${t}`),{status:"ready"})},QI=async(t,e)=>{await ia(Ft(Ut,`rooms/${t}`),{status:"playing",gameState:e})},JI=(t,e)=>C_(Ft(Ut,`rooms/${t}`),n=>{e(n.val())}),yo=async(t,e)=>{await ia(Ft(Ut,`rooms/${t}`),{gameState:e})},XI=async t=>{await wk(Ft(Ut,`rooms/${t}`))},ZI=async(t,e)=>(await TS(qs,t,e)).user,eT=async(t,e)=>(await NS(qs,t,e)).user,tT=async()=>(await CS(qs)).user,nT=async()=>{await AS(qs)},rT=t=>PS(qs,t),kp=async(t,e)=>{const n=Ft(Ut,`users/${t}/decks`),r=JSON.parse(JSON.stringify(e,(i,s)=>s===void 0?null:s));await Qd(n,r)},iT=async t=>{const e=Ft(Ut,`users/${t}/decks`),n=await x_(e);return n.exists()?n.val()||[]:[]};/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=t=>{const e=oT(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},aT=F.createContext({}),uT=()=>F.useContext(aT),cT=F.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},a)=>{const{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:h=!1,color:f="currentColor",className:_=""}=uT()??{},y=r??h?Number(n??d)*24/Number(e??u):n??d;return F.createElement("svg",{ref:a,...qa,width:e??u??qa.width,height:e??u??qa.height,stroke:t??f,strokeWidth:y,className:ov("lucide",_,i),...!s&&!lT(l)&&{"aria-hidden":"true"},...l},[...o.map(([x,b])=>F.createElement(x,b)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=(t,e)=>{const n=F.forwardRef(({className:r,...i},s)=>F.createElement(cT,{ref:s,iconNode:e,className:ov(`lucide-${sT(Sp(t))}`,`lucide-${t}`,r),...i}));return n.displayName=Sp(t),n};/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],lv=we("book-open",dT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],fT=we("check",hT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]],mT=we("flag",pT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]],Qr=we("heart-pulse",gT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],_T=we("heart",yT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],av=we("layers",vT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["path",{d:"M5 12h14",key:"1ays0h"}]],Ip=we("minus",wT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],xT=we("play",ET);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Tp=we("plus",CT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Np=we("save",kT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Dn=we("shield",ST);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],uv=we("smartphone",IT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Rp=we("square-pen",TT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],RT=we("star",NT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]],or=we("swords",bT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],AT=we("trash-2",PT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],DT=we("user",OT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],cv=we("x",LT);/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Ln=we("zap",MT),jT=({isOpen:t,onClose:e})=>{if(!t)return null;const n={marginBottom:"1.2rem",backgroundColor:"#f8fafc",padding:"16px",borderRadius:"8px",border:"1px solid #e2e8f0"},r={display:"flex",alignItems:"center",gap:"8px",fontSize:"1rem",color:"#1e293b",borderBottom:"2px solid #e2e8f0",paddingBottom:"8px",marginBottom:"12px",marginTop:0,fontWeight:"bold"},i={fontSize:"0.85rem",lineHeight:"1.6",color:"#475569",margin:"0 0 8px 0"},s={color:"#ef4444",fontWeight:"bold"};return c.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"16px"},onClick:e,children:c.jsxs("div",{style:{backgroundColor:"#ffffff",width:"100%",maxWidth:"850px",maxHeight:"90vh",borderRadius:"12px",border:"1px solid #cbd5e1",boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.2)",display:"flex",flexDirection:"column",overflow:"hidden",position:"relative"},onClick:o=>o.stopPropagation(),children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 20px",backgroundColor:"#f1f5f9",borderBottom:"1px solid #e2e8f0"},children:[c.jsxs("h2",{style:{margin:0,fontSize:"1.1rem",color:"#0f172a",display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx(lv,{size:20,color:"#6366f1"})," 遊び方ガイド"]}),c.jsx("button",{onClick:e,style:{background:"#e2e8f0",border:"none",color:"#475569",cursor:"pointer",padding:"6px",borderRadius:"50%",display:"flex",transition:"all 0.2s"},onMouseOver:o=>o.currentTarget.style.background="#cbd5e1",onMouseOut:o=>o.currentTarget.style.background="#e2e8f0",children:c.jsx(cv,{size:18})})]}),c.jsxs("div",{style:{padding:"20px",overflowY:"auto"},children:[c.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[c.jsxs("section",{style:{...n,flex:"1 1 300px"},children:[c.jsx("h3",{style:r,children:"1. バトルの目的と流れ"}),c.jsxs("p",{style:i,children:["30枚のデッキを使い、先に相手のメンタルを ",c.jsx("span",{style:s,children:"0"})," にした方の勝利です。",c.jsx("br",{}),"毎ターンカードを引き、準備ができたら",c.jsx("strong",{children:"「END TURN」"}),"を押して相手のターンへ移ります。"]})]}),c.jsxs("section",{style:{...n,flex:"1.5 1 350px"},children:[c.jsx("h3",{style:r,children:"2. デッキ作成とユニットの特長"}),c.jsxs("p",{style:i,children:["自分が使う",c.jsx("strong",{children:"「ユニット」"}),"を選び、",c.jsx("br",{}),c.jsx("strong",{children:"全体曲"}),"と",c.jsx("strong",{children:"指定したユニット曲"}),"のカードで",c.jsx("span",{style:s,children:"30枚"}),"のデッキを組みます。",c.jsx("br",{}),c.jsx("span",{style:{fontSize:"0.7rem",color:"#64748b"},children:"※同名カードは基本的に3枚まで編成可能です。"})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"6px"},children:[c.jsxs("div",{style:{background:"#fff",padding:"6px 10px",borderRadius:"4px",border:"1px solid #e2e8f0",borderLeft:"4px solid #d8289d"},children:[c.jsx("div",{style:{fontSize:"0.8rem",fontWeight:"bold",color:"#d8289d"},children:"スリーズブーケ"}),c.jsx("div",{style:{fontSize:"0.75rem",color:"#475569"},children:"手札コントロールや回復・シールドを駆使した戦いが得意"})]}),c.jsxs("div",{style:{background:"#fff",padding:"6px 10px",borderRadius:"4px",border:"1px solid #e2e8f0",borderLeft:"4px solid #3b82f6"},children:[c.jsx("div",{style:{fontSize:"0.8rem",fontWeight:"bold",color:"#1d4ed8"},children:"DOLLCHESTRA"}),c.jsx("div",{style:{fontSize:"0.75rem",color:"#475569"},children:"自傷ダメージによる大ダメージやコンボによるスリルのある戦いが得意"})]}),c.jsxs("div",{style:{background:"#fff",padding:"6px 10px",borderRadius:"4px",border:"1px solid #e2e8f0",borderLeft:"4px solid #eab308"},children:[c.jsx("div",{style:{fontSize:"0.8rem",fontWeight:"bold",color:"#a16207"},children:"みらくらぱーく！"}),c.jsx("div",{style:{fontSize:"0.75rem",color:"#475569"},children:"ボルテージ回復や連続ダメージによる楽しく激しい戦いが得意"})]})]})]})]}),c.jsxs("section",{style:n,children:[c.jsx("h3",{style:r,children:"3. バトルの重要システム"}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"flex-start"},children:[c.jsx(av,{size:18,color:"#eab308",style:{marginTop:"2px"}}),c.jsxs("div",{children:[c.jsx("strong",{style:{fontSize:"0.9rem",color:"#1e293b"},children:"ボルテージ"}),c.jsx("p",{style:i,children:"毎ターン最大値が増加（最大10）。1ターンに使えるカードのコスト上限です。"})]})]}),c.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"flex-start"},children:[c.jsx(RT,{size:18,color:"#a855f7",style:{marginTop:"2px"}}),c.jsxs("div",{children:[c.jsx("strong",{style:{fontSize:"0.9rem",color:"#1e293b"},children:"SPスキル"}),c.jsx("p",{style:i,children:"バトル中1回だけ、ボルテージを4回復できます"})]})]})]})]}),c.jsxs("section",{style:n,children:[c.jsx("h3",{style:r,children:" 4. カードの見方と4つの基本効果"}),c.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px",alignItems:"center"},children:[c.jsxs("div",{style:{width:"150px",height:"210px",background:"#fff",borderRadius:"8px",padding:"8px",position:"relative",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",border:"2px solid #cbd5e1"},children:[c.jsx("div",{style:{position:"absolute",top:"-8px",left:"-8px",background:"#3b82f6",color:"white",width:"32px",height:"32px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",fontSize:"1rem",border:"2px solid white"},children:"3"}),c.jsx("div",{style:{marginTop:"16px",fontSize:"0.7rem",color:"#881337",fontWeight:"bold"},children:"スリーズブーケ"}),c.jsx("div",{style:{marginTop:"4px",fontSize:"0.9rem",fontWeight:"bold",color:"#0f172a"},children:"カードの名前"}),c.jsx("div",{style:{position:"absolute",bottom:"8px",left:"8px",right:"8px",background:"#f1f5f9",padding:"8px",borderRadius:"6px",fontSize:"0.7rem",color:"#334155"},children:"左上が消費コストです。下部にカードの能力が書かれています。"})]}),c.jsxs("div",{style:{flex:1,minWidth:"250px"},children:[c.jsx("p",{style:i,children:"カードを使うことで、以下の4つの基本的な効果が発生します。"}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginTop:"8px"},children:[c.jsxs("div",{style:{background:"#fff",padding:"10px",borderRadius:"6px",border:"1px solid #e2e8f0"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:"bold",color:"#ef4444",fontSize:"0.9rem"},children:[c.jsx(or,{size:16})," 攻撃"]}),c.jsx("div",{style:{fontSize:"0.8rem",color:"#475569",marginTop:"4px"},children:"相手のメンタルにダメージを与えて減らします。"})]}),c.jsxs("div",{style:{background:"#fff",padding:"10px",borderRadius:"6px",border:"1px solid #e2e8f0"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:"bold",color:"#10b981",fontSize:"0.9rem"},children:[c.jsx(_T,{size:16})," 回復"]}),c.jsx("div",{style:{fontSize:"0.8rem",color:"#475569",marginTop:"4px"},children:"減ってしまった自分のメンタルを回復します。"})]}),c.jsxs("div",{style:{background:"#fff",padding:"10px",borderRadius:"6px",border:"1px solid #e2e8f0"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:"bold",color:"#3b82f6",fontSize:"0.9rem"},children:[c.jsx(Dn,{size:16})," シールド"]}),c.jsx("div",{style:{fontSize:"0.8rem",color:"#475569",marginTop:"4px"},children:"相手からの攻撃ダメージを代わりに受けて防ぐシールドを付与します。"})]}),c.jsxs("div",{style:{background:"#fff",padding:"10px",borderRadius:"6px",border:"1px solid #e2e8f0"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontWeight:"bold",color:"#9333ea",fontSize:"0.9rem"},children:[c.jsx(Ln,{size:16})," 自傷"]}),c.jsx("div",{style:{fontSize:"0.8rem",color:"#475569",marginTop:"4px"},children:"強力な効果の代償として、自身のメンタルが減ります。"})]})]})]})]})]}),c.jsxs("section",{style:n,children:[c.jsx("h3",{style:r,children:"5. 条件で発動する「トリガー効果」"}),c.jsx("p",{style:i,children:"特定の条件を満たした時だけ、通常よりも強力な追加効果を発揮するカードが存在します。"}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsxs("div",{style:{background:"#fff",padding:"12px",borderRadius:"6px",borderLeft:"4px solid #eab308",borderTop:"1px solid #e2e8f0",borderRight:"1px solid #e2e8f0",borderBottom:"1px solid #e2e8f0"},children:[c.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"bold",color:"#1e293b",marginBottom:"4px"},children:"ボルテージ数 トリガー"}),c.jsx("div",{style:{fontSize:"0.8rem",color:"#475569"},children:"現在のボルテージが指定の数値以上溜まっていると効果が発動します。"}),c.jsxs("div",{style:{fontSize:"0.8rem",color:"#64748b",marginTop:"4px",backgroundColor:"#f8fafc",padding:"4px 8px",borderRadius:"4px"},children:[c.jsx("strong",{children:"例："}),"「ボルテージが5以上の時、相手に2ダメージ与える」"]})]}),c.jsxs("div",{style:{background:"#fff",padding:"12px",borderRadius:"6px",borderLeft:"4px solid #0ea5e9",borderTop:"1px solid #e2e8f0",borderRight:"1px solid #e2e8f0",borderBottom:"1px solid #e2e8f0"},children:[c.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"bold",color:"#1e293b",marginBottom:"4px"},children:"行動回数 トリガー"}),c.jsx("div",{style:{fontSize:"0.8rem",color:"#475569"},children:"そのターンにカードを使った回数が指定の回数以上だと効果が発動します。"}),c.jsxs("div",{style:{fontSize:"0.8rem",color:"#64748b",marginTop:"4px",backgroundColor:"#f8fafc",padding:"4px 8px",borderRadius:"4px"},children:[c.jsx("strong",{children:"例："}),"「このカードのコストは、ターン中に使用したカードの枚数分小さくなる」"]})]}),c.jsxs("div",{style:{background:"#fff",padding:"12px",borderRadius:"6px",borderLeft:"4px solid #9333ea",borderTop:"1px solid #e2e8f0",borderRight:"1px solid #e2e8f0",borderBottom:"1px solid #e2e8f0"},children:[c.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"bold",color:"#1e293b",marginBottom:"4px"},children:"自傷ダメージ トリガー"}),c.jsx("div",{style:{fontSize:"0.8rem",color:"#475569"},children:"そのターン中に、自分のカードの効果でダメージ（自傷）を受けていると発動します。"}),c.jsxs("div",{style:{fontSize:"0.8rem",color:"#64748b",marginTop:"4px",backgroundColor:"#f8fafc",padding:"4px 8px",borderRadius:"4px"},children:[c.jsx("strong",{children:"例："}),"「このターン中、既にダメージを受けている場合、カードを1枚引く」"]})]})]})]}),c.jsx("div",{style:{textAlign:"center",marginTop:"24px",padding:"12px"},children:c.jsx("button",{onClick:e,style:{padding:"10px 32px",fontSize:"0.95rem",fontWeight:"bold",color:"#ffffff",background:"#6366f1",border:"none",borderRadius:"50px",cursor:"pointer",boxShadow:"0 4px 6px rgba(99, 102, 241, 0.3)",transition:"transform 0.2s"},onMouseOver:o=>o.currentTarget.style.transform="scale(1.05)",onMouseOut:o=>o.currentTarget.style.transform="scale(1)",children:"閉じてゲームに戻る"})})]})]})})},FT=({playerName:t,setPlayerName:e,setGameMode:n,setScreen:r,user:i})=>{const[s,o]=F.useState(!1);return c.jsxs("div",{className:"home-screen",style:{padding:0,overflow:"hidden",position:"relative",width:"100%",height:"100%"},children:[c.jsx(jT,{isOpen:s,onClose:()=>o(!1)}),c.jsxs("div",{style:{position:"absolute",top:"max(2vh, env(safe-area-inset-top))",left:"max(2vw, env(safe-area-inset-left))",color:"#ffffff",fontSize:"min(0.875rem, 3.5vh)",background:"rgba(0,0,0,0.5)",padding:"min(6px, 1.5vh) min(12px, 2vw)",borderRadius:"20px",border:"1px solid #374151",display:"flex",alignItems:"center",gap:"6px",zIndex:10},children:[c.jsx(DT,{size:14}),i!=null&&i.isAnonymous?"ゲストとしてプレイ中":i==null?void 0:i.email]}),c.jsx("button",{onClick:async()=>{window.confirm(`ログイン画面に戻りますか？
（※ゲストで作成したデータから離れます）`)&&await nT()},style:{position:"absolute",top:"max(2vh, env(safe-area-inset-top))",right:"max(2vw, env(safe-area-inset-right))",color:"#ffffff",fontSize:"min(0.875rem, 3.5vh)",background:"rgba(0,0,0,0.5)",padding:"min(6px, 1.5vh) min(12px, 2vw)",borderRadius:"20px",border:"1px solid #374151",display:"flex",alignItems:"center",cursor:"pointer",fontWeight:"bold",transition:"all 0.2s",zIndex:10},onMouseOver:l=>{l.currentTarget.style.background="rgba(255,255,255,0.1)",l.currentTarget.style.color="#ffffff"},onMouseOut:l=>{l.currentTarget.style.background="rgba(0,0,0,0.5)",l.currentTarget.style.color="#9ca3af"},children:"ログイン / アカウント切替"}),c.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"min(1.5rem, 3vh)",width:"100%",zIndex:5},children:[c.jsxs("div",{className:"title-logo",style:{textAlign:"center",marginBottom:0,lineHeight:"1.1"},children:[c.jsxs("div",{children:[c.jsx("span",{className:"title-link",style:{fontSize:"min(4rem, 14vh)"},children:"Link!"}),c.jsx("span",{className:"title-like",style:{fontSize:"min(4rem, 14vh)"},children:"Like!"})]}),c.jsx("div",{className:"title-battle",style:{fontSize:"min(5rem, 18vh)"},children:"Battle!"})]}),c.jsx("p",{className:"title-subtitle",style:{margin:0,fontSize:"min(1.2rem, 4.5vh)"},children:"究極のスクールアイドルバトル"}),c.jsx("input",{className:"name-input",maxLength:6,value:t,onChange:l=>e(l.target.value),placeholder:"プレイヤー名 (最大6文字)",style:{margin:0,padding:"min(15px, 2.5vh)",fontSize:"min(1.5rem, 5vh)",width:"min(250px, 40vw)",height:"min(60px, 9vh)",boxSizing:"border-box"}}),c.jsxs("div",{className:"mode-buttons",style:{display:"flex",gap:"min(1rem, 3vw)"},children:[c.jsx("button",{className:"title-start-btn",onClick:()=>{n("cpu"),r("deckBuilder")},style:{padding:"min(1rem, 1.5vh) min(2.5rem, 3vw)",fontSize:"min(1.5rem, 5.5vh)"},children:"CPU戦で遊ぶ"}),c.jsx("button",{className:"title-start-btn",style:{background:"var(--secondary)",padding:"min(1rem, 1.5vh) min(2.5rem, 3vw)",fontSize:"min(1.5rem, 5.5vh)"},onClick:()=>{n("online"),r("deckBuilder")},children:"通信対戦で遊ぶ"})]}),c.jsxs("button",{onClick:()=>o(!0),style:{marginTop:"min(0.5rem, 1vh)",padding:"min(10px, 1.8vh) min(32px, 4vw)",backgroundColor:"rgba(4, 169, 181, 0.16)",color:"#000000",border:"1px solid rgba(255, 255, 255, 0.3)",borderRadius:"50px",cursor:"pointer",fontSize:"min(1rem, 4vh)",fontWeight:"bold",display:"flex",alignItems:"center",gap:"8px",backdropFilter:"blur(4px)",transition:"all 0.2s",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"},onMouseOver:l=>{l.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.2)",l.currentTarget.style.transform="translateY(-2px)"},onMouseOut:l=>{l.currentTarget.style.backgroundColor="rgba(255, 255, 255, 0.1)",l.currentTarget.style.transform="translateY(0)"},children:[c.jsx(lv,{size:18})," 遊び方を見る"]})]})]})};function nr(t){return t?t.includes("スリーズブーケ")&&t.includes("DOLLCHESTRA")&&t.includes("みらくらぱーく")?"linear-gradient(135deg, #ffd6e0, #c5d8f0, #fff0b3)":t.includes("スリーズブーケ")?"#ffd6e0":t.includes("DOLLCHESTRA")?"#c5d8f0":t.includes("みらくらぱーく")?"#fff0b3":"#EEEEEE":"#c8c8c8"}const Jr=({card:t})=>t?c.jsxs("div",{className:"card",style:{background:nr(t.歌唱),margin:0},children:[c.jsx("div",{className:"card-cost",children:t.コスト}),c.jsx("div",{className:"card-title",children:t.曲名}),c.jsxs("div",{className:"card-tags",children:[c.jsx("span",{children:t.歌唱}),c.jsx("span",{children:t.センター})]}),c.jsxs("div",{className:"card-stats",children:[t.パワー&&c.jsxs("span",{className:"stat-item stat-power",children:[c.jsx(or,{size:12}),t.パワー]}),t.シールド&&c.jsxs("span",{className:"stat-item stat-shield",children:[c.jsx(Dn,{size:12}),t.シールド]}),t.ヒール&&c.jsxs("span",{className:"stat-item stat-heal",children:[c.jsx(Qr,{size:12}),t.ヒール]}),t.ダメージ&&c.jsxs("span",{className:"stat-item stat-damage",children:[c.jsx(Ln,{size:12}),t.ダメージ]})]}),c.jsxs("div",{className:"card-effect",children:[t.効果1&&c.jsx("div",{style:{marginBottom:"4px"},children:t.効果1}),t.効果2&&c.jsx("div",{children:t.効果2})]})]}):null,UT=({user:t,deckList:e,setDeckList:n,selectedUnit:r,setSelectedUnit:i,currentDeckName:s,setCurrentDeckName:o})=>{const[l,a]=F.useState([null,null,null,null,null]),[u,d]=F.useState(!1),[h,f]=F.useState(null),[_,y]=F.useState(null),[x,b]=F.useState("");F.useEffect(()=>{t&&iT(t.uid).then(E=>{const v=[...E];for(;v.length<5;)v.push(null);a(v.slice(0,5))})},[t]);const g=async E=>{if(!r||Object.keys(e).length===0){alert("デッキが空か、ユニットが選択されていません。");return}const v=s||`デッキ ${E+1}`,N=[...l];N[E]={name:v,unit:r,deckList:e},d(!0);try{await kp(t.uid,N),a(N),o(v),f(null),alert("デッキを保存しました！")}catch{alert("保存に失敗しました。")}d(!1)},m=E=>{const v=l[E];v&&window.confirm(`「${v.name}」を読み込みますか？
（現在の編集内容は失われます）`)&&(i(v.unit),n(v.deckList),o(v.name),f(null))},p=async E=>{const v=l[E];if(!v)return;const N=x||`デッキ ${E+1}`,A=[...l];A[E]={...v,name:N},d(!0);try{await kp(t.uid,A),a(A),y(null),s===v.name&&o(N)}catch{alert("名前の変更に失敗しました。")}d(!1)};return c.jsxs("div",{style:{display:"flex",gap:"0.4rem"},children:[c.jsxs("button",{onClick:()=>f("list"),style:{padding:"0.2rem 0.6rem",fontSize:"0.7rem",background:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center",gap:"4px"},children:[c.jsx(Rp,{size:14})," デッキ編集"]}),c.jsxs("button",{onClick:()=>f("save"),style:{padding:"0.2rem 0.6rem",fontSize:"0.7rem",background:"#10b981",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center",gap:"4px"},children:[c.jsx(Np,{size:14})," デッキ保存"]}),h&&c.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.8)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},children:c.jsxs("div",{style:{background:"#1f2937",padding:"24px",borderRadius:"12px",width:"420px",color:"white",border:"1px solid #374151"},children:[c.jsx("h3",{style:{marginTop:0,borderBottom:"1px solid #374151",paddingBottom:"12px",display:"flex",alignItems:"center",gap:"8px"},children:h==="save"?c.jsxs(c.Fragment,{children:[c.jsx(Np,{size:20})," 現在のデッキを保存 (最大5枠)"]}):c.jsxs(c.Fragment,{children:[c.jsx(Rp,{size:20})," デッキ一覧 / 編集"]})}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px",marginTop:"16px"},children:l.map((E,v)=>c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"#374151",padding:"10px 12px",borderRadius:"6px"},children:[c.jsxs("div",{style:{flex:1,display:"flex",alignItems:"center",gap:"8px",marginRight:"10px",overflow:"hidden"},children:[c.jsx("span",{style:{fontWeight:"bold",color:"#9ca3af",flexShrink:0},children:v+1}),_===v?c.jsx("input",{type:"text",value:x,onChange:N=>b(N.target.value),maxLength:15,style:{width:"100%",padding:"4px 8px",borderRadius:"4px",border:"1px solid #3b82f6",background:"#1f2937",color:"white",outline:"none"},autoFocus:!0}):c.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:E?"white":"#6b7280"},children:E?E.name:"空き枠"})]}),c.jsx("div",{style:{display:"flex",gap:"6px",flexShrink:0},children:h==="list"?_===v?c.jsxs(c.Fragment,{children:[c.jsx("button",{onClick:()=>p(v),disabled:u,style:{padding:"4px 8px",background:"#10b981",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",display:"flex",alignItems:"center"},children:c.jsx(fT,{size:14})}),c.jsx("button",{onClick:()=>y(null),disabled:u,style:{padding:"4px 8px",background:"#6b7280",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",display:"flex",alignItems:"center"},children:c.jsx(cv,{size:14})})]}):c.jsxs(c.Fragment,{children:[c.jsx("button",{onClick:()=>{y(v),b((E==null?void 0:E.name)||`デッキ ${v+1}`)},disabled:u||!E,style:{padding:"4px 8px",background:"#6b7280",color:"white",border:"none",borderRadius:"4px",cursor:E?"pointer":"not-allowed",opacity:E?1:.3},children:"編集"}),c.jsx("button",{onClick:()=>m(v),disabled:u||!E,style:{padding:"4px 8px",background:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:E?"pointer":"not-allowed",opacity:E?1:.3},children:"読込"})]}):c.jsx("button",{onClick:()=>g(v),disabled:u,style:{padding:"4px 12px",background:"#10b981",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:E?"上書き":"保存"})})]},v))}),c.jsx("div",{style:{marginTop:"20px",textAlign:"right"},children:c.jsx("button",{onClick:()=>{f(null),y(null)},style:{padding:"8px 16px",background:"transparent",color:"#9ca3af",border:"1px solid #4b5563",borderRadius:"6px",cursor:"pointer"},children:"閉じる"})})]})})]})},Qa=cd,zT=({gameMode:t,setScreen:e,deckTotal:n,selectedUnit:r,setSelectedUnit:i,manaCurve:s,maxManaCount:o,handleDeckComplete:l,loadStarterDeck:a,deckList:u,setDeckList:d,availableCards:h,selectedCard:f,setSelectedCard:_,removeCardFromDeck:y,addCardToDeck:x,user:b})=>{const[g,m]=F.useState("新規デッキ");return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"orientation-warning",children:[c.jsx(uv,{size:64}),c.jsx("h2",{style:{marginTop:"1rem"},children:"画面を横向きにしてください"}),c.jsx("p",{children:"このゲームは横画面専用です"})]}),c.jsxs("div",{className:"deck-builder-screen",children:[c.jsxs("div",{style:{flexShrink:0,background:"#fff",borderBottom:"1px solid #eee",paddingBottom:"4px",zIndex:10},children:[c.jsxs("div",{style:{padding:"0.2rem 1rem",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.8rem"},children:[c.jsx("button",{className:"back-btn",onClick:()=>e("home"),style:{padding:"0.1rem 0.4rem"},children:"← ホーム"}),c.jsx("h1",{className:"deck-builder-title",style:{fontSize:"0.9rem",margin:0},children:"デッキ作成"})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem",background:"#f1f5f9",padding:"0.2rem 0.5rem",borderRadius:"4px",border:"1px solid #cbd5e1"},children:[c.jsx("span",{style:{fontSize:"0.65rem",color:"#64748b",fontWeight:"bold"},children:"デッキ名:"}),c.jsx("input",{value:g,onChange:p=>m(p.target.value),maxLength:15,style:{border:"none",background:"transparent",fontSize:"0.8rem",fontWeight:"bold",width:"120px",padding:0,outline:"none",color:"#333"}})]}),c.jsxs("div",{className:"deck-counter",style:{padding:"0.1rem 0.6rem",fontSize:"0.8rem"},children:[n," / 30"]})]})]}),c.jsxs("div",{className:"unit-select-area",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.2rem 1rem",gap:"0.5rem"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.2rem",flexShrink:0},children:[c.jsx("span",{className:"unit-label",style:{fontSize:"0.75rem"},children:"基本ユニット:"}),["スリーズブーケ","DOLLCHESTRA","みらくらぱーく！"].map(p=>c.jsx("button",{className:`unit-btn ${r===p?"active":""}`,style:{background:p==="スリーズブーケ"?"#ffd6e0":p==="DOLLCHESTRA"?"#c5d8f0":"#fff0b3",padding:"0.2rem 0.4rem",fontSize:"0.65rem"},onClick:()=>{r!==p&&n>0&&!window.confirm("基本ユニットを変更するとデッキがリセットされます。よろしいですか？")||(i(p),d({}))},children:p},p))]}),c.jsx("div",{className:"mana-curve-wrapper",style:{flex:1,maxWidth:"180px",margin:"0"},children:c.jsx("div",{className:"mana-curve",style:{height:"30px",padding:0},children:s.map((p,E)=>c.jsxs("div",{className:"mana-bar-container",style:{width:"12%"},children:[c.jsxs("div",{className:"mana-bar-bg",style:{background:"#e2e8f0"},children:[p>0&&c.jsx("span",{className:"mana-bar-count",style:{fontSize:"0.5rem",bottom:"1px"},children:p}),c.jsx("div",{className:"mana-bar-fill",style:{height:`${o>0?p/o*100:0}%`}})]}),c.jsx("span",{className:"mana-label",style:{fontSize:"0.45rem",marginTop:"1px"},children:E===7?"7+":E})]},E))})}),c.jsx("div",{style:{flexShrink:0},children:c.jsx("button",{className:`battle-start-btn ${n===30?"ready":""}`,disabled:n!==30,onClick:l,style:{width:"auto",padding:"0.3rem 0.8rem",fontSize:"0.8rem"},children:t==="cpu"?"バトル開始":"ロビーへ進む"})})]}),r&&c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",padding:"0 1rem 0.2rem"},children:[c.jsx("button",{className:"starter-btn",onClick:a,style:{padding:"0.2rem 0.6rem",fontSize:"0.7rem"},children:"スターターデッキを読み込む"}),c.jsx("button",{className:"clear-btn",onClick:()=>d({}),style:{padding:"0.2rem 0.6rem",fontSize:"0.7rem"},children:"クリア"}),c.jsx(UT,{user:b,deckList:u,setDeckList:d,selectedUnit:r,setSelectedUnit:i,currentDeckName:g,setCurrentDeckName:m})]})]}),r&&c.jsxs("div",{className:"deck-builder-body",style:{flex:1,overflowY:"auto",paddingBottom:"20px"},children:[c.jsxs("div",{className:"card-pool",children:[c.jsx("h3",{className:"pool-title",children:"カードプール"}),c.jsx("div",{className:"pool-list",children:h.map((p,E)=>{const v=u[p.曲名]||0,N=v<3&&n<30;return c.jsxs("div",{className:"pool-card",style:{background:nr(p.歌唱)},onClick:()=>_(p),children:[c.jsxs("div",{className:"pool-card-info",children:[c.jsx("span",{className:"pool-card-cost",children:p.コスト}),c.jsx("span",{className:"pool-card-name",children:p.曲名})]}),c.jsxs("div",{className:"pool-card-tags",children:[c.jsx("span",{className:"pool-card-unit",children:p.歌唱==="蓮ノ空女学院スクールアイドルクラブ"?"蓮ノ空":p.歌唱}),c.jsx("span",{className:"pool-card-center",children:p.センター})]}),c.jsxs("div",{className:"pool-card-stats",children:[p.パワー&&c.jsxs("span",{className:"stat-power",children:[c.jsx(or,{size:10}),p.パワー]}),p.シールド&&c.jsxs("span",{className:"stat-shield",children:[c.jsx(Dn,{size:10}),p.シールド]}),p.ヒール&&c.jsxs("span",{className:"stat-heal",children:[c.jsx(Qr,{size:10}),p.ヒール]}),p.ダメージ&&c.jsxs("span",{className:"stat-damage",children:[c.jsx(Ln,{size:10}),p.ダメージ]})]}),c.jsxs("div",{className:"pool-card-controls",children:[c.jsx("button",{className:"pool-btn remove",onClick:A=>{A.stopPropagation(),y(p.曲名)},disabled:v===0,children:c.jsx(Ip,{size:14})}),c.jsx("span",{className:"pool-count",children:v}),c.jsx("button",{className:"pool-btn add",onClick:A=>{A.stopPropagation(),x(p.曲名)},disabled:!N,children:c.jsx(Tp,{size:14})})]})]},E)})})]}),c.jsxs("div",{className:"deck-preview",children:[c.jsxs("h3",{className:"pool-title",children:["デッキ内容 (",n,"/30)"]}),c.jsxs("div",{className:"deck-list",children:[Object.entries(u).sort((p,E)=>{const v=Qa.find(A=>A.曲名===p[0]),N=Qa.find(A=>A.曲名===E[0]);return(Number(v==null?void 0:v.コスト)||0)-(Number(N==null?void 0:N.コスト)||0)}).map(([p,E])=>{const v=Qa.find(N=>N.曲名===p);return c.jsxs("div",{className:"deck-item",style:{borderLeft:`4px solid ${v?nr(v.歌唱)==="#d0d0d0"?"#999":nr(v.歌唱).replace("linear-gradient(135deg, ","").split(",")[0]:"#999"}`},onClick:()=>_(v),children:[c.jsxs("div",{className:"deck-item-left",children:[c.jsx("span",{className:"deck-item-cost",children:v==null?void 0:v.コスト}),c.jsxs("div",{className:"deck-item-details",children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[c.jsx("span",{className:"deck-item-name",children:p}),c.jsx("span",{style:{fontSize:"0.6rem",color:"#666"},children:v==null?void 0:v.センター})]}),c.jsxs("div",{className:"deck-item-stats",children:[(v==null?void 0:v.パワー)&&c.jsxs("span",{className:"stat-power",children:[c.jsx(or,{size:8}),v.パワー]}),(v==null?void 0:v.シールド)&&c.jsxs("span",{className:"stat-shield",children:[c.jsx(Dn,{size:8}),v.シールド]}),(v==null?void 0:v.ヒール)&&c.jsxs("span",{className:"stat-heal",children:[c.jsx(Qr,{size:8}),v.ヒール]}),(v==null?void 0:v.ダメージ)&&c.jsxs("span",{className:"stat-damage",children:[c.jsx(Ln,{size:8}),v.ダメージ]})]})]})]}),c.jsxs("div",{className:"deck-item-right",children:[c.jsxs("span",{className:"deck-item-count",children:["×",E]}),c.jsxs("div",{style:{display:"flex",gap:"4px"},children:[c.jsx("button",{className:"deck-item-remove",style:{background:"#38a169"},onClick:N=>{N.stopPropagation(),x(p)},disabled:E>=3||n>=30,children:c.jsx(Tp,{size:12})}),c.jsx("button",{className:"deck-item-remove",onClick:N=>{N.stopPropagation(),y(p)},children:c.jsx(Ip,{size:12})})]})]})]},p)}),n===0&&c.jsx("div",{className:"deck-empty",children:"カードを追加してください"})]})]})]}),f&&c.jsx("div",{className:"card-preview-overlay",style:{zIndex:3e3},onClick:()=>_(null),children:c.jsxs("div",{className:"card-preview",style:{background:nr(f.歌唱),cursor:"default"},onClick:p=>p.stopPropagation(),children:[c.jsx("div",{className:"card-cost",style:{top:"-12px",left:"-12px",width:"44px",height:"44px",fontSize:"1.4rem"},children:f.コスト}),c.jsx("div",{className:"card-title",style:{fontSize:"1.4rem"},children:f.曲名}),c.jsxs("div",{className:"card-tags",style:{fontSize:"0.85rem"},children:[c.jsx("span",{children:f.歌唱}),c.jsx("span",{children:f.センター})]}),c.jsxs("div",{className:"card-stats",style:{fontSize:"0.95rem",padding:"8px"},children:[f.パワー&&c.jsxs("span",{className:"stat-item stat-power",children:[c.jsx(or,{size:16})," ",f.パワー]}),f.シールド&&c.jsxs("span",{className:"stat-item stat-shield",children:[c.jsx(Dn,{size:16})," ",f.シールド]}),f.ヒール&&c.jsxs("span",{className:"stat-item stat-heal",children:[c.jsx(Qr,{size:16})," ",f.ヒール]}),f.ダメージ&&c.jsxs("span",{className:"stat-item stat-damage",children:[c.jsx(Ln,{size:16})," ",f.ダメージ]})]}),c.jsxs("div",{className:"card-effect",style:{fontSize:"1.15rem",padding:"12px"},children:[f.効果1&&c.jsx("div",{style:{marginBottom:"6px"},children:f.効果1}),f.効果2&&c.jsx("div",{children:f.効果2})]}),c.jsx("div",{style:{display:"flex",gap:"8px",marginTop:"10px"},children:c.jsx("button",{className:"preview-close-btn",style:{width:"100%"},onClick:()=>_(null),children:"閉じる"})})]})})]})]})},WT=({roomsList:t,handleCreateRoom:e,handleJoinRoom:n,setScreen:r})=>c.jsxs("div",{className:"lobby-screen",children:[c.jsx("h2",{style:{fontSize:"2rem",marginBottom:"1rem",color:"var(--secondary)",fontFamily:"Outfit"},children:"ROOMLIST"}),c.jsx("button",{className:"title-start-btn",style:{marginBottom:"1rem"},onClick:e,children:"部屋を作る"}),c.jsx("div",{className:"room-list",children:t.length===0?c.jsx("p",{style:{textAlign:"center",color:"#666"},children:"現在、待機中の部屋はありません。"}):t.map(i=>c.jsxs("div",{className:"room-item",children:[c.jsx("span",{children:i.roomName}),c.jsx("button",{className:"room-join-btn",onClick:()=>n(i.id),children:"入る"})]},i.id))}),c.jsx("button",{style:{marginTop:"2rem",padding:"10px",background:"none",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},onClick:()=>r("deckBuilder"),children:"戻る"})]}),BT=({isHost:t,playerName:e,roomData:n,roomId:r,handleHostStartGame:i})=>c.jsx("div",{className:"waiting-screen",children:c.jsxs("div",{className:"waiting-box",children:[c.jsx("h2",{style:{fontSize:"1.5rem",marginBottom:"1rem",color:"#333"},children:t?"あなたの部屋":"通信待機室"}),c.jsx("div",{className:"vs-text",children:t?e||"YOU":n==null?void 0:n.hostName}),c.jsx("div",{style:{fontWeight:"bold",color:"#666"},children:"VS"}),c.jsx("div",{className:"vs-text",children:t?(n==null?void 0:n.clientName)||"待機中...":e||"YOU"}),c.jsx("div",{style:{marginTop:"2rem"},children:t?(n==null?void 0:n.status)==="ready"?c.jsx("button",{className:"title-start-btn",onClick:i,children:"バトル開始"}):c.jsx("p",{style:{color:"#666"},children:"相手の準備を待っています..."}):(n==null?void 0:n.status)==="waiting"?c.jsx("button",{className:"title-start-btn",style:{background:"#10b981"},onClick:()=>qI(r),children:"準備OK"}):c.jsx("p",{style:{color:"#666"},children:"ホストの開始を待っています..."})})]})});function jr(t,e){var h,f;let n=Number(t.コスト)||0;const r=t.効果1||"",i=t.効果2||"",s=r+`
`+i;if(s.includes("ターン中に使用したカードの枚数分小さくなる")){const _=((h=e.buffs.turnCardsPlayed)==null?void 0:h.length)||0;n-=_}e.buffs.onyourmark102Active&&["乙宗 梢","夕霧 綴理","藤島 慈"].includes(t.センター)&&(n-=2),e.buffs.nextCardCostDown&&(n-=e.buffs.nextCardCostDown),t.costModifier&&(n+=t.costModifier);const o=s.match(/手札が(\d+)枚以上の時、コストを(\d+)にする/);o&&e.hand.length>=parseInt(o[1],10)&&(n=parseInt(o[2],10));const l=s.match(/ユニットが「(.+?)」のカードを使用している場合、コストを(\d+)にする/);if(l){const _=l[1];((f=e.buffs.turnCardsPlayedDetails)==null?void 0:f.some(x=>x.歌唱&&x.歌唱.includes(_)))&&(n=parseInt(l[2],10))}const a=s.match(/ボルテージが(\d+)以上の時、コストを(\d+)にする/);if(a){const _=parseInt(a[1],10);e.maxVoltage>=_&&(n=parseInt(a[2],10))}const u=s.match(/手札が(\d+)枚以下の時、コストを(\d+)にする/);u&&e.hand.length<=parseInt(u[1],10)&&(n=parseInt(u[2],10)),s.includes("ダメージを受けた回数の分コストを減らす")&&(n-=e.buffs.tookDamageCount||0);const d=s.match(/既にダメージを受けている場合、コストを(\d+)にする/);return d&&e.buffs.tookDamageThisTurn&&(n=parseInt(d[1],10)),Math.max(0,n)}function un(t){if(t.deck.length===0)return t.hp=0,{success:!1,deckOut:!0};const e=t.deck.shift();return t.hand.length>=8?(t.discard.push(e),{success:!0,card:e,overdrawn:!0}):(t.hand.push(e),{success:!0,card:e,overdrawn:!1})}function VT(t){if(t.hand.length===0)return null;const e=Math.floor(Math.random()*t.hand.length),n=t.hand.splice(e,1)[0];return t.discard.push(n),n}function HT(t,e,n){const r=JSON.parse(JSON.stringify(t)),i=n?r.player:r.enemy,s=n?r.enemy:r.player,o=[],l=(p,E)=>o.push({type:p,data:E,isPlayer:n}),a=i.buffs.kozueDrawActive,u=i.buffs.sayakaDmgActive,d=p=>{for(let E=0;E<p;E++){const v=un(i);v.overdrawn&&v.card?l("overdraw",{card:v.card}):v.success&&l("draw",{count:1})}},h=p=>{var pt,D,C,S;if(!p)return;const E=p.match(/このターン中、(.+?)が「(.+?)」のカードを使用している場合、(.+)/);if(E){const w=E[1],T=E[2],I=E[3];((pt=i.buffs.turnCardsPlayedDetails)==null?void 0:pt.some(M=>M.uid===e.id?!1:w.includes("センター")||w.includes("キャラクター")?M.センター&&M.センター.includes(T):w.includes("ユニット")||w.includes("歌唱")?M.歌唱&&M.歌唱.includes(T):w.includes("カード名")||w.includes("名前")?M.曲名&&M.曲名.includes(T):!1))&&h(I)}const v=p.match(/このターン中、「(.+?)」のカードを使用している場合、(.+)/);if(!E&&v){const w=v[1],T=v[2];((D=i.buffs.turnCardsPlayedDetails)==null?void 0:D.some(k=>k.uid===e.id?!1:k.センター&&k.センター.includes(w)||k.歌唱&&k.歌唱.includes(w)||k.曲名&&k.曲名.includes(w)))&&h(T)}const N=p.match(/ボルテージが(\d+)以上の時/);if(N){const w=parseInt(N[1],10);if(i.maxVoltage<w)return}const A=p.match(/ボルテージが(\d+)以下の時/);if(A){const w=parseInt(A[1],10);if(i.maxVoltage>w)return}const O=p.match(/手札が(\d+)枚以下の時/);if(O){const w=parseInt(O[1],10);if(i.hand.length+1>w)return}const G=p.match(/手札が(\d+)枚以上の時/);if(G){const w=parseInt(G[1],10);if(i.hand.length+1<w)return}const U=p.match(/体力が(\d+)以下の時/);if(U){const w=parseInt(U[1],10);if(i.hp>w)return}if(p.includes("ターン終了時")||p.includes("このターンの最後に使用した時")){i.buffs.queuedEndTurnEffects||(i.buffs.queuedEndTurnEffects=[]);const w=p.includes("最後に使用した時");if(p.includes("残りボルテージの数だけカードを引く"))i.buffs.queuedEndTurnEffects.push({type:"draw_voltage",isLast:w});else if(p.includes("をドローする")){const T=p.match(/「(.+?)」をドローする/);i.buffs.queuedEndTurnEffects.push({type:"draw_specific",name:T?T[1]:null,isLast:w})}else p.includes("3ヒールする")&&i.buffs.queuedEndTurnEffects.push({type:"heal",value:3,isLast:w});return}if(p.includes("使用したカードの数だけ相手にダメージを与える")){const w=((C=i.buffs.turnCardsPlayed)==null?void 0:C.length)||0;w>0&&f(s,w,l,"kokon_tozai",n)}if(p.includes("次の相手のターン、相手のボルテージが3になる")&&(i.buffs.setEnemyVoltage3=!0),p.includes("センターが「乙宗 梢」「夕霧 綴理」「藤島 慈」いずれかのカードを使用する度にコストを2減らす")&&(i.buffs.onyourmark102Active=!0),p.includes("付与されているシールドの分相手にダメージを与え、シールドを0にする")){const w=i.shield;w>0&&(f(s,w,l,"shield_bash",n),i.shield=0)}const me=p.match(/相手に(\d+)ダメージ/);if(me){const w=parseInt(me[1],10);f(s,w,l,"direct",n)}p.includes("このカードを使用した時、ターンエンドする")&&(r.forceTurnEnd=!0);const Ve=p.match(/ボルテージを(\d+)回復/);if(Ve){const w=parseInt(Ve[1],10);i.currentVoltage=Math.min(i.maxVoltage,i.currentVoltage+w),l("voltage",{value:w})}if(p.includes("シールドを3付与する")&&(i.shield+=3,l("shield",{value:3})),p.includes("ダメージを受けた回数の分ヒールする")){const w=i.buffs.tookDamageCount||0;w>0&&(i.hp=Math.min(i.maxHp,i.hp+w),l("heal",{value:w}))}else p.includes("3ヒールする")&&!p.includes("最後に使用")?(i.hp=Math.min(i.maxHp,i.hp+3),l("heal",{value:3})):p.includes("2ヒールする")&&!p.includes("最初に使用")&&(i.hp=Math.min(i.maxHp,i.hp+2),l("heal",{value:2}));if(p.includes("捨札からコスト4以下のカードを使用する")||p.includes("捨札からコスト4以下のカードを")){const w=i.discard.filter(T=>(Number(T.コスト)||0)<=4&&T.id!==e.id);if(w.length>0)if(n)l("discard_select",{maxCost:4,reason:"dear_my_future",excludeId:e.id});else{const T=Math.floor(Math.random()*w.length),I=w[T],k=i.discard.indexOf(I);k!==-1&&(i.discard.splice(k,1),i.discard.push(I),l("draw",{name:I.曲名,reason:"dear_my_future_cpu"}))}}if(p.includes("ダメージを受けるたびに相手に1ダメージ")&&(i.buffs.damageReflectionActive=!0),p.includes("次に使用するカードのパワーが2倍になる")&&(i.buffs.doubleNextPower=!0),p.includes("既にダメージを7以上受けている場合、相手は次のターンドローできない")&&(i.buffs.tookDamageAmount||0)>=7&&(s.buffs.cannotDrawNextTurn=!0),p.includes("手札を全て捨て、カードを3枚引く")){for(;i.hand.length>0;){const w=i.hand.shift();i.discard.push(w),l("discard",{card:w})}d(3)}if(p.includes("みらくらぱーく！」のカードをランダムに1枚選び、コストを1下げる")){const w=i.hand.filter(T=>T.歌唱&&T.歌唱.includes("みらくらぱーく"));if(w.length>0){const T=w[Math.floor(Math.random()*w.length)];T.costModifier=(T.costModifier||0)-1,l("buff",{name:"cost_down",target:T.曲名})}}if(p.includes("ボルテージが4以下の時、このカードの効果を2倍にする")&&(i.buffs.doubleThisCard=!0),p.includes("カードを使用する度にシールドを1付与する")&&(i.buffs.shieldOnPlayActive=!0),p.includes("ユニットが「DOLLCHESTRA」のカードを2枚引く"))for(let w=0;w<2;w++){const T=i.deck.findIndex(I=>I.歌唱&&I.歌唱.includes("DOLLCHESTRA"));if(T!==-1){const[I]=i.deck.splice(T,1);i.hand.length>=8?(i.discard.push(I),l("overdraw",{card:I})):(i.hand.push(I),l("draw",{count:1}))}}p.includes("センターが「乙宗 梢」のカードを使用する度にカードを1枚引く")&&(i.buffs.kozueDrawActive=!0),(p.includes("センターが「村野 さやか」のカードを使用したとき、相手に3ダメージ")||p.includes("センターが「村野さやか」のカードを使用したとき、相手に3ダメージ"))&&(i.buffs.sayakaDmgActive=!0);const Qe=p.match(/次に使用するカードのコストを(\d+)下げる/);Qe&&(i.buffs.nextCardCostDown=(i.buffs.nextCardCostDown||0)+parseInt(Qe[1],10)),(p.includes("次に使用するシールドかダメージ効果を2倍にする")||p.includes("次に使用するシールドかヒール効果を2倍にする"))&&(i.buffs.doubleNextEffect=!0),p.includes("カードを2枚引く")&&!p.includes("ユニットが")?d(2):p.includes("カードを1枚引く")&&!p.includes("ユニットが")&&!p.includes("Junction")&&!p.includes("使用する度に")&&d(1);const Tt=p.match(/「(.+?)」をドローする/);let ht=Tt?Tt[1]:null;if((p.includes("同名カードを")||p.includes("同名のカードを"))&&(ht=e.曲名),ht&&!p.includes("ターン終了時")&&!p.includes("最後に使用した時")){const w=i.deck.findIndex(T=>T.曲名&&T.曲名.includes(ht));if(w!==-1){const[T]=i.deck.splice(w,1);i.hand.length>=8?(i.discard.push(T),l("overdraw",{card:T})):(i.hand.push(T),l("draw",{count:1}))}}else p.includes("をドローする")&&!ht&&!p.includes("ターン終了時")&&!p.includes("最後に使用した時")&&d(1);if(p.includes("手札をランダムに1枚捨てる")||p.includes("手札から1枚選び捨てる")){const w=VT(i);w&&l("discard",{card:w})}p.includes("このターン中、自分へのダメージが0になる")&&(i.buffs.damageImmune=!0),p.includes("SPを回復する")&&(i.specialUsed=!1,l("sp_recover",{}));const ft=p.match(/このターンの最初に使用した(?:時|場合)、(\d+)ヒールする/);if(ft&&((S=i.buffs.turnCardsPlayed)==null?void 0:S.length)===1){const w=parseInt(ft[1],10);i.hp=Math.min(i.maxHp,i.hp+w),l("heal",{value:w,reason:"opening"})}p.includes("このターン中、受けるダメージを2倍にする")&&(i.buffs.doubleDamageTakenThisTurn=!0)};function f(p,E,v,N,A){let O=E;p.buffs.doubleDamageTakenThisTurn&&(O*=2);let G=O;if(p.shield>0){const U=Math.min(p.shield,O);p.shield-=U,O-=U}O>0&&(p.hp-=O,p.buffs.tookDamageThisTurn=!0,p.buffs.tookDamageAmount=(p.buffs.tookDamageAmount||0)+O),v("damage",{value:O,originalValue:G,target:A?"enemy":"player",type:N})}i.buffs.shieldOnPlayActive&&(i.shield+=1,l("shield",{value:1,reason:"colorfulness"}));const _=i.buffs.doubleNextEffect;let y=!1;const x=Number(e.ダメージ)||0;if(x>0&&!i.buffs.damageImmune){const p=_?x*2:x;_&&(y=!0),i.hp-=p,i.buffs.tookDamageThisTurn=!0,i.buffs.tookDamageAmount=(i.buffs.tookDamageAmount||0)+p,i.buffs.tookDamageCount=(i.buffs.tookDamageCount||0)+1,l("damage_self",{value:p}),i.buffs.damageReflectionActive&&f(s,1,l,"reflection",n)}let b=Number(e.ヒール)||0;i.buffs.doubleThisCard&&(b*=2),b>0&&(i.hp=Math.min(i.maxHp,i.hp+b),l("heal",{value:b})),h(e.効果1),h(e.効果2);let g=Number(e.パワー)||0;if(i.buffs.doubleThisCard&&(g*=2),g>0){let p=g;i.buffs.doubleNextPower&&(p*=2,i.buffs.doubleNextPower=!1),f(s,p,l,"attack",n)}let m=Number(e.シールド)||0;return i.buffs.doubleThisCard&&(m*=2),m>0&&(_&&!y&&(m*=2,y=!0),i.shield+=m,l("shield",{value:m})),y&&(i.buffs.doubleNextEffect=!1),i.buffs.doubleThisCard=!1,a&&e.センター.includes("乙宗 梢")&&d(1),u&&(e.センター.includes("村野さやか")||e.センター.includes("村野 さやか"))&&f(s,3,l,"sayaka",n),{newState:r,events:o}}const $T=[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],GT=[0,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],KT=t=>t%2===1?1:0,YT=t=>t%2===0?1:0;function Ja(t,e){const n=t?$T:GT;return e>=n.length?10:n[e]}function Xa(t,e){return t?KT(e):YT(e)}const qT=({gameState:t,setGameState:e,gameMode:n,isHost:r,syncDB:i})=>{var U,me,Ve,Qe,Tt,ht,ft,pt,D;const[s,o]=F.useState([]),[l,a]=F.useState({show:!1,owner:null}),[u,d]=F.useState([]),[h,f]=F.useState(null),_=F.useRef(null);F.useEffect(()=>{if(!(!t||t.battleResult||t.isCoinFlipPhase)&&(t.player.hp<=0||t.enemy.hp<=0)){const C=setTimeout(()=>{e(S=>{if(S.battleResult)return S;let w=null;if(S.player.hp<=0&&S.enemy.hp<=0?w="DRAW":S.enemy.hp<=0?w="WIN":S.player.hp<=0&&(w="LOSE"),!w)return S;const T={...S,battleResult:w};return n==="online"&&i(T),T})},500);return()=>clearTimeout(C)}},[(U=t==null?void 0:t.player)==null?void 0:U.hp,(me=t==null?void 0:t.enemy)==null?void 0:me.hp,t==null?void 0:t.battleResult,t==null?void 0:t.isCoinFlipPhase,n,e]);const y=(C,S)=>{const w=Math.random();d(T=>[...T,{id:w,card:C,isPlayer:S}]),setTimeout(()=>{d(T=>T.filter(I=>I.id!==w))},1500)};F.useEffect(()=>{if(t&&t.isCoinFlipPhase){if(n==="online"&&!r)return;setTimeout(()=>{const C=Math.random()>.5,S=Ja(C,1),w=Ja(!C,1),T=Xa(C,1),I=Xa(!C,1);e(k=>{if(!k)return k;const M={...k.player,isFirstPlayer:C,maxVoltage:S,currentVoltage:S,deck:[...k.player.deck],hand:[...k.player.hand],discard:[...k.player.discard]},j={...k.enemy,isFirstPlayer:!C,maxVoltage:w,currentVoltage:w,deck:[...k.enemy.deck],hand:[...k.enemy.hand],discard:[...k.enemy.discard]};for(let X=0;X<T;X++){const De=un(M);De.overdrawn&&De.card&&setTimeout(()=>y(De.card,!0),X*300)}for(let X=0;X<I;X++){const De=un(j);De.overdrawn&&De.card&&setTimeout(()=>y(De.card,!1),X*300)}const K={...k,turn:1,isCoinFlipPhase:!1,isPlayerTurn:C,turnBanner:C?"YOU FIRST!":n==="cpu"?"CPU FIRST!":"ENEMY FIRST!",player:M,enemy:j};return n==="online"&&r&&i(K),K})},2e3)}},[t==null?void 0:t.isCoinFlipPhase,n,r,e]),F.useEffect(()=>{t&&!t.isCoinFlipPhase&&t.turnBanner&&setTimeout(()=>{e(C=>C&&{...C,turnBanner:null})},2e3)},[t==null?void 0:t.turnBanner,t==null?void 0:t.isCoinFlipPhase,e]);const x=(C,S,w,T="#ef4444",I="damage-text")=>{const k=Math.random();o(M=>[...M,{id:k,x:C,y:S,text:w,color:T,cssClass:I}]),setTimeout(()=>{o(M=>M.filter(j=>j.id!==k))},1200)},b=(C,S,w)=>{x(C,S,w,"#3b82f6","draw-effect-text")},g=C=>{e(S=>({...S,animations:{...S.animations,[`${C}Shake`]:!0}})),setTimeout(()=>{e(S=>({...S,animations:{...S.animations,[`${C}Shake`]:!1}}))},500)},m=C=>{e(S=>{const w=S.turn+1,T=C?S.enemy:S.player,I={...T,buffs:{...T.buffs,damageImmune:!1,kozueDrawActive:!1,sayakaDmgActive:!1,doubleNextEffect:!1,onyourmark102Active:!1,yupYupYupActive:!1,damageReflectionActive:!1,tookDamageThisTurn:!1,tookDamageAmount:0,tookDamageCount:0,turnCardsPlayed:[],turnCardsPlayedDetails:[]}},k=C?S.player:S.enemy,M=k.isFirstPlayer===!0,j=Ja(M,w),K=Xa(M,w);let X={...k,maxVoltage:j,currentVoltage:j,deck:[...k.deck],hand:[...k.hand],discard:[...k.discard],buffs:{...k.buffs,damageImmune:!1,kozueDrawActive:!1,sayakaDmgActive:!1,doubleNextEffect:!1,onyourmark102Active:!1,yupYupYupActive:!1,damageReflectionActive:!1,tookDamageThisTurn:!1,tookDamageAmount:0,nextCardCostDown:0,turnCardsPlayed:[],turnCardsPlayedDetails:[]}};if(X.buffs.cannotDrawNextTurn){X.buffs.cannotDrawNextTurn=!1;const q={...S,isPlayerTurn:C,turnBanner:C?"YOUR TURN (NO DRAW)":n==="cpu"?"CPU TURN (NO DRAW)":"ENEMY TURN (NO DRAW)",setlist:[],enemyPlayedCard:null,player:C?X:I,enemy:C?I:X,turn:w};return n==="online"&&i&&i(q),q}I.buffs.setEnemyVoltage3&&(X.currentVoltage=3,I.buffs.setEnemyVoltage3=!1);for(let q=0;q<K;q++){const on=un(X);on.overdrawn&&on.card&&setTimeout(()=>y(on.card,C),q*300)}const De={...S,isPlayerTurn:C,turnBanner:C?"YOUR TURN":n==="cpu"?"CPU TURN":"ENEMY TURN",setlist:[],enemyPlayedCard:null,player:C?X:I,enemy:C?I:X,turn:w};return n==="online"&&i&&i(De),De})},p=()=>{!t.isPlayerTurn||t.player.hp<=0||t.enemy.hp<=0||(t.player.buffs.yupYupYupActive&&e(C=>{const S={...C,player:{...C.player,hand:[...C.player.hand],deck:[...C.player.deck],discard:[...C.player.discard]}};for(let w=0;w<C.player.currentVoltage;w++){const T=un(S.player);T.overdrawn&&T.card&&setTimeout(()=>y(T.card,!0),w*200)}return S}),e(C=>{const S=C.player.buffs.queuedEndTurnEffects;if(!S||S.length===0)return C;const w={...C.player,deck:[...C.player.deck],hand:[...C.player.hand],discard:[...C.player.discard],buffs:{...C.player.buffs,queuedEndTurnEffects:[]}};return S.forEach(T=>{if(T.type==="draw_voltage")for(let I=0;I<w.currentVoltage;I++){const k=un(w);k.overdrawn&&k.card&&setTimeout(()=>y(k.card,!0),I*200)}else if(T.type==="draw_specific"&&T.name){const I=w.deck.findIndex(k=>k.曲名===T.name);if(I!==-1){const[k]=w.deck.splice(I,1);k&&(w.hand.length>=8?(w.discard.push(k),setTimeout(()=>y(k,!0),300)):w.hand.push(k))}else{const k=w.discard.findIndex(M=>M.曲名===T.name);if(k!==-1){const[M]=w.discard.splice(k,1);M&&(w.hand.length>=8?(w.discard.push(M),setTimeout(()=>y(M,!0),300)):w.hand.push(M))}}}else T.type==="heal"&&T.value&&(w.hp=Math.min(w.maxHp,w.hp+T.value))}),{...C,player:w}}),e(C=>{const S=C.setlist[C.setlist.length-1];if(S&&S.owner==="player"&&S.card.曲名==="Dream Believers"){const w=C.player.deck.findIndex(T=>T.曲名==="Dream Believers");if(w!==-1){const T={...C.player,deck:[...C.player.deck],hand:[...C.player.hand]},[I]=T.deck.splice(w,1);return T.hand.push(I),{...C,player:T}}}return C}),m(!1))};F.useEffect(()=>{if(t&&t.isPlayerTurn&&!t.isCoinFlipPhase&&!t.turnBanner&&t.player.hp>0&&t.enemy.hp>0&&!t.isAnimating&&!h){const C=t.player.hand.some(w=>t.player.currentVoltage>=jr(w,t.player)),S=!t.player.specialUsed;if(!C&&!S){const w=setTimeout(()=>p(),800);return()=>clearTimeout(w)}}},[t==null?void 0:t.isPlayerTurn,(Ve=t==null?void 0:t.player)==null?void 0:Ve.currentVoltage,(Tt=(Qe=t==null?void 0:t.player)==null?void 0:Qe.hand)==null?void 0:Tt.length,(ht=t==null?void 0:t.player)==null?void 0:ht.specialUsed,t==null?void 0:t.turnBanner,t==null?void 0:t.isCoinFlipPhase,t==null?void 0:t.isAnimating,h]),F.useEffect(()=>{if(!(!t||n!=="cpu")&&!t.isCoinFlipPhase&&!t.isPlayerTurn&&t.enemy.hp>0&&t.player.hp>0&&!t.turnBanner&&!t.isAnimating)return _.current=setTimeout(()=>{E()},1500),()=>clearTimeout(_.current)},[t==null?void 0:t.isPlayerTurn,(ft=t==null?void 0:t.enemy)==null?void 0:ft.currentVoltage,(D=(pt=t==null?void 0:t.enemy)==null?void 0:pt.hand)==null?void 0:D.length,t==null?void 0:t.turnBanner,t==null?void 0:t.isCoinFlipPhase,t==null?void 0:t.isAnimating,n]);const E=()=>{const{enemy:C}=t,S=C.hand.filter(w=>jr(w,C)<=C.currentVoltage);if(S.length>0){const w=S[Math.floor(Math.random()*S.length)];v(w,!1)}else C.buffs.yupYupYupActive&&e(w=>{const T={...w,enemy:{...w.enemy,hand:[...w.enemy.hand],deck:[...w.enemy.deck],discard:[...w.enemy.discard]}};for(let I=0;I<w.enemy.currentVoltage;I++){const k=un(T.enemy);k.overdrawn&&k.card&&setTimeout(()=>y(k.card,!1),I*300)}return T}),e(w=>{const T=w.enemy.buffs.queuedEndTurnEffects;if(!T||T.length===0)return w;const I={...w.enemy,deck:[...w.enemy.deck],hand:[...w.enemy.hand],discard:[...w.enemy.discard],buffs:{...w.enemy.buffs,queuedEndTurnEffects:[]}};return T.forEach(k=>{if(k.type==="draw_voltage")for(let M=0;M<I.currentVoltage;M++){const j=un(I);j.overdrawn&&j.card&&setTimeout(()=>y(j.card,!1),M*300)}else if(k.type==="draw_specific"&&k.name){const M=I.deck.findIndex(j=>j.曲名===k.name);if(M!==-1){const[j]=I.deck.splice(M,1);j&&(I.hand.length>=8?(I.discard.push(j),setTimeout(()=>y(j,!1),300)):I.hand.push(j))}else{const j=I.discard.findIndex(K=>K.曲名===k.name);if(j!==-1){const[K]=I.discard.splice(j,1);K&&(I.hand.length>=8?(I.discard.push(K),setTimeout(()=>y(K,!1),300)):I.hand.push(K))}}}else k.type==="heal"&&k.value&&(I.hp=Math.min(I.maxHp,I.hp+k.value))}),{...w,enemy:I}}),m(!0)},v=(C,S,w=!1)=>{if(t.isAnimating)return;const T=S?t.player:t.enemy,I=jr(C,T);!w&&T.currentVoltage<I||(e(k=>{const M={...k,player:{...k.player,buffs:{...k.player.buffs,turnCardsPlayed:[...k.player.buffs.turnCardsPlayed]},hand:[...k.player.hand],discard:[...k.player.discard]},enemy:{...k.enemy,buffs:{...k.enemy.buffs,turnCardsPlayed:[...k.enemy.buffs.turnCardsPlayed]},hand:[...k.enemy.hand],discard:[...k.enemy.discard]},setlist:[...k.setlist]},j=S?M.player:M.enemy;let K=jr(C,j);if(!w){if(j.currentVoltage<K)return k;j.currentVoltage-=K,j.buffs.nextCardCostDown>0&&(j.buffs.nextCardCostDown=0),j.hand=j.hand.filter(X=>X.id!==C.id)}return j.discard.push(C),M.setlist.push({card:C,owner:S?"player":"enemy"}),j.buffs.turnCardsPlayed.push(C.曲名),j.buffs.turnCardsPlayedDetails||(j.buffs.turnCardsPlayedDetails=[]),j.buffs.turnCardsPlayedDetails.push({曲名:C.曲名,歌唱:C.歌唱,センター:C.センター,uid:C.id}),M.enemyPlayedCard=S?null:C,M.isAnimating=!0,M}),setTimeout(()=>{e(k=>{if(!k.isAnimating)return k;const{newState:M,events:j}=HT(k,C,S);let K=0;j.forEach(q=>{const on=K*600,Ci=30+K%3*60,ki=K%3*40;K++,setTimeout(()=>{if(q.type==="damage"){const rt=q.data.target==="player",dv=rt?window.innerHeight-200:200;x(Ci,dv-ki,`-${q.data.value}`),g(rt?"player":"enemy")}if(q.type==="damage_self"){const rt=S?window.innerHeight-200:200;x(Ci,rt-ki,`-${q.data.value}`,"#ff6b35"),g(S?"player":"enemy")}if(q.type==="heal"){const rt=S?window.innerHeight-200:200;x(Ci,rt-ki,`+${q.data.value}`,"#10b981")}if(q.type==="voltage"){const rt=S?window.innerHeight-200:200;x(Ci,rt-ki,`+⚡${q.data.value}`,"#f59e0b")}if(q.type==="shield"){const rt=S?window.innerHeight-200:200;x(Ci,rt-ki,`+🛡${q.data.value}`,"#3b82f6")}if(q.type==="draw"){const rt=S?window.innerHeight/2:window.innerHeight/2-60;b(window.innerWidth/2-60,rt,`Draw ${q.data.count||1}`)}(q.type==="discard"||q.type==="overdraw")&&q.data.card&&y(q.data.card,S),q.type==="discard_select"&&S&&f({show:!0,maxCost:q.data.maxCost,reason:q.data.reason,excludeId:q.data.excludeId})},on)});const X=Math.max(K*600,1e3),De=M.forceTurnEnd;return setTimeout(()=>{e(q=>{if(!q)return q;const on={...q,isAnimating:!1,enemyPlayedCard:null};return n==="online"&&S&&i(on),on}),De&&(S?p():m(!0))},X),M.isAnimating=!0,S||(M.enemyPlayedCard=C),M})},300))};return{damageTexts:s,showDiscard:l,setShowDiscard:a,overdrawnCards:u,selectFromDiscard:h,setSelectFromDiscard:f,endTurnPlayer:p,playCard:v,playCardFromDiscard:C=>{f(null),e(S=>{const w={...S},T=w.player.discard.findIndex(I=>I.id===C.id);return T!==-1&&w.player.discard.splice(T,1),w}),v(C,!0,!0)},handleRematch:()=>{if(!t)return;const C=Xi(t.player.originalDeckNames||[]),S=il();e($g({deck:C,unit:t.player.baseUnit},S)),o([])},handleSpSkill:()=>{!t.player.specialUsed&&t.isPlayerTurn&&!t.turnBanner&&e(C=>{const S=Math.min(C.player.maxVoltage,C.player.currentVoltage+4),w={...C,player:{...C.player,currentVoltage:S,specialUsed:!0}};return n==="online"&&i(w),w})},handleSurrender:()=>{window.confirm("本当に降参しますか？")&&e(C=>{if(!C||C.battleResult)return C;const S={...C,battleResult:"LOSE"};return n==="online"&&i(S),S})}}},bp=({data:t,isEnemy:e,isShaking:n,onDiscardClick:r})=>{var l,a,u,d,h;const i=e?"enemy-status":"self-status",s=e?"enemy":"player",o=t.name||(e?"相手":"YOU");return c.jsxs("div",{className:`player-status ${i} ${n?"shake":""}`,children:[c.jsxs("div",{className:"player-info",style:{alignItems:"flex-start",marginBottom:"4px"},children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,minWidth:0,marginRight:"6px",lineHeight:1.2},children:[c.jsx("span",{className:"player-name",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:o}),t.baseUnit&&c.jsx("span",{style:{fontSize:"0.65rem",color:"#4a4a4a",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginTop:"2px"},children:t.baseUnit})]}),c.jsxs("span",{className:"hp-text",style:{flexShrink:0,lineHeight:1.2},children:[t.hp," / ",t.maxHp]})]}),c.jsx("div",{className:"hp-bar-container",children:c.jsx("div",{className:`hp-bar ${t.hp<=10?"danger":""}`,style:{width:`${Math.max(0,t.hp/t.maxHp*100)}%`}})}),c.jsxs("div",{className:"deck-info",style:{marginTop:"5px",display:"flex",flexDirection:"column",gap:"4px"},children:[c.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[c.jsxs("span",{className:"deck-stat",style:{display:"flex",alignItems:"center",gap:"2px"},children:[c.jsx(av,{size:14})," ",((l=t.deck)==null?void 0:l.length)||0]}),c.jsxs("span",{className:"deck-stat",onClick:()=>r(s),style:{cursor:"pointer",display:"flex",alignItems:"center",gap:"2px"},children:[c.jsx(AT,{size:14})," ",((a=t.discard)==null?void 0:a.length)||0]}),t.shield>0&&c.jsxs("span",{className:"shield-badge",style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:"2px"},children:[c.jsx(Dn,{size:14})," ",t.shield]})]}),c.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[c.jsxs("span",{className:"deck-stat",title:"Played this turn",style:{display:"flex",alignItems:"center",gap:"2px"},children:[c.jsx(xT,{size:14})," ",((d=(u=t.buffs)==null?void 0:u.turnCardsPlayed)==null?void 0:d.length)||0]}),c.jsxs("span",{className:"deck-stat",title:"Took damage count",style:{display:"flex",alignItems:"center",gap:"2px"},children:[c.jsx(Ln,{size:14,color:"#a855f7"})," ",((h=t.buffs)==null?void 0:h.tookDamageCount)||0]})]})]})]})},QT=({gameState:t,setSelectedCard:e})=>{const{player:n,isPlayerTurn:r,turnBanner:i,isCoinFlipPhase:s,isAnimating:o}=t,l=n.hand.length,a=(l-1)/2;return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:`
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
      `}),c.jsx("div",{className:"hand-container",children:n.hand.map((u,d)=>{const h=jr(u,n),f=r&&n.currentVoltage>=h&&!i&&!s&&!o,_=d-a,y=_*2.5,x=Math.pow(_,2)*1.2;return c.jsxs("div",{className:"card",style:{background:nr(u.歌唱),opacity:f?1:.4,cursor:"pointer",filter:f?"none":"grayscale(30%)",transform:`translateY(${x}px) rotate(${y}deg)`,zIndex:d},onClick:()=>e(u),children:[c.jsx("div",{className:"card-cost",children:h}),c.jsx("div",{className:"card-title",children:u.曲名}),c.jsxs("div",{className:"card-tags",children:[c.jsx("span",{children:u.歌唱}),c.jsx("span",{children:u.センター})]}),c.jsxs("div",{className:"card-stats",children:[u.パワー&&c.jsxs("span",{className:"stat-item stat-power",children:[c.jsx(or,{size:12}),u.パワー]}),u.シールド&&c.jsxs("span",{className:"stat-item stat-shield",children:[c.jsx(Dn,{size:12}),u.シールド]}),u.ヒール&&c.jsxs("span",{className:"stat-item stat-heal",children:[c.jsx(Qr,{size:12}),u.ヒール]}),u.ダメージ&&c.jsxs("span",{className:"stat-item stat-damage",children:[c.jsx(Ln,{size:12}),u.ダメージ]})]}),c.jsxs("div",{className:"card-effect",children:[u.効果1&&c.jsx("div",{style:{marginBottom:"4px"},children:u.効果1}),u.効果2&&c.jsx("div",{children:u.効果2})]})]},u.id||u.曲名+d)})})]})},JT=({selectedCard:t,gameState:e,playCard:n,setSelectedCard:r})=>{if(!t)return null;const i=jr(t,e.player),s=!t._isPreviewOnly&&e.isPlayerTurn&&e.player.currentVoltage>=i&&!e.turnBanner&&!e.isCoinFlipPhase&&!e.isAnimating;return c.jsx("div",{className:"card-preview-overlay",onClick:()=>r(null),children:c.jsxs("div",{className:"card-preview",style:{background:nr(t.歌唱)},onClick:o=>o.stopPropagation(),children:[c.jsx("div",{className:"card-cost",style:{top:"-12px",left:"-12px",width:"44px",height:"44px",fontSize:"1.4rem"},children:i}),c.jsx("div",{className:"card-title",style:{fontSize:"1.4rem"},children:t.曲名}),c.jsxs("div",{className:"card-tags",style:{fontSize:"0.85rem"},children:[c.jsx("span",{children:t.歌唱}),c.jsx("span",{children:t.センター})]}),c.jsxs("div",{className:"card-stats",style:{fontSize:"0.95rem",padding:"8px"},children:[t.パワー&&c.jsxs("span",{className:"stat-item stat-power",children:[c.jsx(or,{size:16})," ",t.パワー]}),t.シールド&&c.jsxs("span",{className:"stat-item stat-shield",children:[c.jsx(Dn,{size:16})," ",t.シールド]}),t.ヒール&&c.jsxs("span",{className:"stat-item stat-heal",children:[c.jsx(Qr,{size:16})," ",t.ヒール]}),t.ダメージ&&c.jsxs("span",{className:"stat-item stat-damage",children:[c.jsx(Ln,{size:16})," ",t.ダメージ]})]}),c.jsxs("div",{className:"card-effect",style:{fontSize:"1.15rem",padding:"12px"},children:[t.効果1&&c.jsx("div",{style:{marginBottom:"6px"},children:t.効果1}),t.効果2&&c.jsx("div",{children:t.効果2})]}),c.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"10px"},children:[s&&c.jsx("button",{className:"preview-play-btn",onClick:()=>{n(t,!0),r(null)},children:"使用する"}),c.jsx("button",{className:"preview-close-btn",onClick:()=>r(null),children:"閉じる"})]})]})})},XT=({showDiscard:t,setShowDiscard:e,gameState:n,setSelectedCard:r})=>{if(!t.show)return null;const i=t.owner==="player"?n.player.discard:n.enemy.discard;return c.jsx("div",{className:"modal-overlay",onClick:()=>e({show:!1,owner:null}),children:c.jsxs("div",{className:"modal-content",onClick:s=>s.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsxs("h2",{children:["捨て札 (",i.length,"枚)"]}),c.jsx("button",{className:"modal-close",onClick:()=>e({show:!1,owner:null}),children:"閉じる"})]}),c.jsx("div",{className:"modal-grid",children:i.map((s,o)=>c.jsx("div",{onClick:()=>{r&&r({...s,_isPreviewOnly:!0})},children:c.jsx(Jr,{card:s})},o))})]})})},ZT=({gameState:t,gameMode:e,isHost:n,roomId:r,handleRematch:i,setScreen:s})=>t.battleResult?c.jsx("div",{className:"battle-end-overlay",children:c.jsxs("div",{className:"battle-end-content",children:[c.jsx("div",{className:"battle-result-text",style:{color:t.battleResult==="WIN"?"#FFD700":t.battleResult==="LOSE"?"#FF4500":"#FFFFFF"},children:t.battleResult==="WIN"?"Victory!":t.battleResult==="LOSE"?"Defeat...":"Draw"}),c.jsxs("div",{className:"battle-end-actions",children:[e==="cpu"&&c.jsx("button",{className:"end-action-btn btn-rematch",onClick:i,children:"もう一度戦う"}),c.jsx("button",{className:"end-action-btn btn-menu",onClick:()=>{e==="online"&&n&&r&&XI(r),s("home")},children:"ホームに戻る"})]})]})}):null,eN=({player:t,enemy:e})=>{const n=(r,i,s)=>{const o=[];for(let l=0;l<10;l++){const a=l<i,u=l<r;o.push(c.jsx("div",{style:{width:"4.2px",height:"12px",borderRadius:"1.5px",background:a?s:u?"rgba(0, 0, 0, 0.35)":"rgba(0, 0, 0, 0.12)",boxShadow:a?`0 0 4px ${s}`:"none",margin:"0 1px",opacity:1,transition:"all 0.2s"}},l))}return c.jsx("div",{style:{display:"flex",alignItems:"center"},children:o})};return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",alignItems:"flex-end",background:"rgba(255, 255, 255, 0.3)",padding:"8px 8px",borderRadius:"10px",backdropFilter:"blur(6px)",border:"1px solid rgba(0, 0, 0, 0.1)",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.08)",boxSizing:"border-box",width:"100%"},children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"2px",width:"100%"},children:[c.jsx("span",{style:{margin:0,color:"#000000",fontSize:"0.7rem",fontWeight:"bold",whiteSpace:"nowrap",letterSpacing:"-0.5px"},children:"Enemy Voltage"}),c.jsxs("div",{style:{display:"flex",alignItems:"center",margin:0},children:[c.jsxs("span",{style:{fontSize:"0.70rem",marginRight:"4px",color:"#000000",fontWeight:"bold",whiteSpace:"nowrap"},children:[e.currentVoltage,"/",e.maxVoltage]}),n(e.maxVoltage,e.currentVoltage,"#ff77a9")]})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"2px",width:"100%"},children:[c.jsx("span",{style:{margin:0,color:"#000000",fontSize:"0.75rem",fontWeight:"bold",whiteSpace:"nowrap",letterSpacing:"-0.5px"},children:"Your Voltage"}),c.jsxs("div",{style:{display:"flex",alignItems:"center",margin:0},children:[c.jsxs("span",{style:{fontSize:"0.7rem",marginRight:"4px",color:"#000000",fontWeight:"bold",whiteSpace:"nowrap"},children:[t.currentVoltage,"/",t.maxVoltage]}),n(t.maxVoltage,t.currentVoltage,"#a78bfa")]})]})]})},tN=({gameState:t,setSelectedCard:e})=>{const{setlist:n}=t,[r,i]=F.useState(!1);if(!n||n.length===0)return null;const s=o=>{o.stopPropagation(),o.preventDefault(),i(!0)};return c.jsxs(c.Fragment,{children:[c.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translateY(-45px)",zIndex:40},children:n.map((o,l)=>{const a=o.card?o.card:o,u=Math.min(l*4,16),d=l===n.length-1;return c.jsx("div",{style:{position:"absolute",transform:`translate(calc(-50% + ${u}px), calc(-50% + ${u}px))`,zIndex:l,filter:d?"none":"brightness(0.85)",pointerEvents:d?"auto":"none",cursor:d?"pointer":"default"},onClick:d?s:void 0,children:c.jsx(Jr,{card:a})},l)})}),r&&c.jsx("div",{className:"modal-overlay",onClick:()=>i(!1),children:c.jsxs("div",{className:"modal-content",onClick:o=>o.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsxs("h2",{style:{margin:0},children:["使用したカード (",n.length,"枚)"]}),c.jsx("button",{className:"modal-close",onClick:()=>i(!1),children:"閉じる"})]}),c.jsx("div",{className:"modal-grid",children:[...n].reverse().map((o,l)=>{const a=o.card?o.card:o;return c.jsx("div",{onClick:()=>{e&&e({...a,_isPreviewOnly:!0})},children:c.jsx(Jr,{card:a})},l)})})]})})]})},nN=({gameState:t,gameMode:e,roomId:n,isHost:r,setScreen:i,selectedCard:s,setSelectedCard:o,damageTexts:l,showDiscard:a,setShowDiscard:u,overdrawnCards:d,selectFromDiscard:h,setSelectFromDiscard:f,endTurnPlayer:_,playCard:y,playCardFromDiscard:x,handleRematch:b,handleSpSkill:g,handleSurrender:m})=>{var p,E;return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"orientation-warning",children:[c.jsx(uv,{size:64}),c.jsx("h2",{style:{marginTop:"1rem"},children:"画面を横向きにしてください"}),c.jsx("p",{children:"このゲームは横画面専用です"})]}),c.jsx("div",{className:"game-container",children:c.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",display:"flex",flexDirection:"column",overflow:"hidden"},children:[!t.battleResult&&c.jsxs("button",{onClick:m,style:{position:"absolute",top:"max(0.5rem, env(safe-area-inset-top))",right:"max(1.0rem, env(safe-area-inset-right))",display:"flex",alignItems:"center",gap:"4px",padding:"6px 14px",backgroundColor:"#ffffff",color:"#000000",fontSize:"0.85rem",fontWeight:"bold",borderRadius:"9999px",border:"1px solid #000000",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.2)",cursor:"pointer",zIndex:50,backdropFilter:"blur(4px)",transition:"all 0.2s ease-in-out"},onMouseOver:v=>v.currentTarget.style.backgroundColor="#f3f4f6",onMouseOut:v=>v.currentTarget.style.backgroundColor="#ffffff",children:[c.jsx(mT,{size:14}),c.jsx("span",{children:"降参"})]}),t.turnBanner&&c.jsx("div",{className:"turn-banner",children:t.turnBanner}),t.enemyPlayedCard&&!t.turnBanner&&c.jsx("div",{className:"enemy-played-popup",children:c.jsx(Jr,{card:t.enemyPlayedCard})}),d.map(v=>c.jsx("div",{className:`overdraw-container ${v.isPlayer?"player":"enemy"}`,children:c.jsx(Jr,{card:v.card})},v.id)),l.map(v=>c.jsx("div",{className:v.cssClass||"damage-text",style:{left:`${v.x}px`,top:`${v.y}px`,color:v.color},children:v.text},v.id)),c.jsx("div",{className:"enemy-hand-container",style:{top:"-40px"},children:t.enemy.hand.map((v,N)=>c.jsx("div",{className:"enemy-card-back"},N))}),c.jsxs("div",{className:"board-area",children:[c.jsx(bp,{data:t.enemy,isEnemy:!0,isShaking:(p=t.animations)==null?void 0:p.enemyShake,onDiscardClick:v=>u({show:!0,owner:v})}),c.jsx(tN,{gameState:t,setSelectedCard:o}),c.jsx(bp,{data:t.player,isEnemy:!1,isShaking:(E=t.animations)==null?void 0:E.playerShake,onDiscardClick:v=>u({show:!0,owner:v})})]}),c.jsxs("div",{style:{position:"absolute",right:"max(0.1rem)",bottom:"4%",display:"flex",flexDirection:"column",alignItems:"flex-end",width:"13vw",minWidth:"100px",maxWidth:"120px",gap:"3.0vh",zIndex:100,pointerEvents:"none"},children:[c.jsx("div",{style:{pointerEvents:"auto",width:"100%"},children:c.jsx(eN,{player:t.player,enemy:t.enemy})}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"2.0vh",pointerEvents:"none",width:"100%"},children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",pointerEvents:"auto"},children:[c.jsx("button",{className:"btn-special",onClick:g,disabled:!(t.isPlayerTurn&&!t.turnBanner&&!t.isCoinFlipPhase&&!t.isAnimating&&!t.player.specialUsed),children:"SP"}),c.jsx("span",{style:{fontSize:"0.75rem",color:"#000000",fontWeight:"bold",textShadow:"0 1px 3px rgba(255, 255, 255, 0.9)",whiteSpace:"nowrap",letterSpacing:"-0.5px"},children:"ボルテージ＋４"})]}),c.jsx("div",{style:{pointerEvents:"auto",width:"100%"},children:c.jsx("button",{className:"end-turn-btn",onClick:_,disabled:!(t.isPlayerTurn&&!t.turnBanner&&!t.isCoinFlipPhase&&!t.isAnimating),style:{width:"100%",boxSizing:"border-box",fontSize:"0.9rem",whiteSpace:"nowrap",padding:"10px 0px",letterSpacing:"0px"},children:"END TURN"})})]})]}),c.jsx(QT,{gameState:t,setSelectedCard:o}),h&&c.jsx("div",{className:"modal-overlay",style:{zIndex:3e3},children:c.jsxs("div",{className:"modal-content discard-modal",children:[c.jsxs("h2",{className:"discard-title",children:["コスト",h.maxCost,"以下のカードを選んで使用"]}),c.jsx("button",{className:"close-btn",onClick:()=>f(null),children:"×"}),c.jsx("div",{className:"discard-grid",children:t.player.discard.filter(v=>(Number(v.コスト)||0)<=h.maxCost&&v.id!==h.excludeId).map((v,N)=>c.jsx("div",{onClick:()=>x(v),children:c.jsx(Jr,{card:v})},N))})]})}),c.jsx(JT,{selectedCard:s,gameState:t,playCard:y,setSelectedCard:o}),c.jsx(XT,{showDiscard:a,setShowDiscard:u,gameState:t,setSelectedCard:o}),c.jsx(ZT,{gameState:t,gameMode:e,isHost:r,roomId:n,handleRematch:b,setScreen:i})]})})]})},rN=t=>{var u,d,h,f,_;const e=t.gameMode==="online"&&!t.isHost,[n,r]=F.useState(null),i=y=>{var x,b,g,m;return y&&{...y,player:y.enemy,enemy:y.player,isPlayerTurn:!y.isPlayerTurn,battleResult:y.battleResult==="WIN"?"LOSE":y.battleResult==="LOSE"?"WIN":y.battleResult,turnBanner:(x=y.turnBanner)!=null&&x.includes("YOU")?y.turnBanner.replace("YOU","ENEMY"):(b=y.turnBanner)!=null&&b.includes("YOUR")?y.turnBanner.replace("YOUR","ENEMY"):(g=y.turnBanner)!=null&&g.includes("ENEMY")&&y.turnBanner.includes("TURN")?y.turnBanner.replace("ENEMY","YOUR"):(m=y.turnBanner)!=null&&m.includes("ENEMY")?y.turnBanner.replace("ENEMY","YOU"):y.turnBanner}};F.useEffect(()=>{if(t.gameMode!=="online"||!t.roomId||!t.gameState||t.gameState.battleResult)return;(t.isHost?t.gameState.hostDisconnected:t.gameState.guestDisconnected)&&t.setGameState(x=>{if(!x||x.battleResult)return x;const b={...x,hostDisconnected:t.isHost?!1:x.hostDisconnected,guestDisconnected:t.isHost?x.guestDisconnected:!1};return yo(t.roomId,b),b})},[(u=t.gameState)==null?void 0:u.hostDisconnected,(d=t.gameState)==null?void 0:d.guestDisconnected,t.isHost,t.gameMode,t.roomId]),F.useEffect(()=>{var x;if(t.gameMode!=="online"||!t.roomId||(x=t.gameState)!=null&&x.battleResult)return;const y=()=>{t.setGameState(b=>{if(!b||b.battleResult)return b;const g={...b,hostDisconnected:t.isHost?!0:b.hostDisconnected||!1,guestDisconnected:t.isHost?b.guestDisconnected||!1:!0};return yo(t.roomId,g),g})};return window.addEventListener("beforeunload",y),()=>{window.removeEventListener("beforeunload",y)}},[t.gameMode,t.roomId,t.isHost,(h=t.gameState)==null?void 0:h.battleResult]),F.useEffect(()=>{if(t.gameMode!=="online"||!t.gameState||t.gameState.battleResult)return;if(t.isHost?t.gameState.guestDisconnected:t.gameState.hostDisconnected){r(60);const x=setInterval(()=>{r(b=>b===null?null:b<=1?(clearInterval(x),t.setGameState(g=>{if(!g||g.battleResult)return g;const m=t.isHost?"WIN":"LOSE",p={...g,battleResult:m};return yo(t.roomId,p),p}),0):b-1)},1e3);return()=>clearInterval(x)}else r(null)},[(f=t.gameState)==null?void 0:f.hostDisconnected,(_=t.gameState)==null?void 0:_.guestDisconnected,t.isHost,t.gameMode,t.roomId]);const s=e?i(t.gameState):t.gameState;s&&t.gameState&&(t.isHost?t.gameState.guestDisconnected:t.gameState.hostDisconnected)&&!t.gameState.battleResult&&n!==null&&(s.turnBanner=`相手の通信が切断されました。復帰を待っています... (残り${n}秒)`);const o=qT({...t,gameState:s,setGameState:y=>{t.setGameState(x=>{if(!e)return typeof y=="function"?y(x):y;const b=i(x),g=typeof y=="function"?y(b):y;return i(g)})},syncDB:y=>{const x=e?i(y):y,b=JSON.parse(JSON.stringify(x,(g,m)=>m===void 0?null:m));yo(t.roomId,b)}});if(!s)return null;const l=s.isPlayerTurn&&!s.turnBanner&&!s.isCoinFlipPhase&&!s.isAnimating&&n===null,a={...o,playCard:(y,x,b)=>{x&&!l&&!b||o.playCard(y,x,b)},endTurnPlayer:()=>{l&&o.endTurnPlayer()},handleSpSkill:()=>{l&&o.handleSpSkill()}};return c.jsx(nN,{...t,gameState:s,...a})},iN=()=>{const[t,e]=F.useState(""),[n,r]=F.useState(""),[i,s]=F.useState(!1),[o,l]=F.useState(""),[a,u]=F.useState(!1),d=async f=>{f.preventDefault(),l(""),u(!0);try{i?await ZI(t,n):await eT(t,n)}catch(_){_.code==="auth/invalid-credential"?l("メールアドレスかパスワードが間違っています。"):_.code==="auth/email-already-in-use"?l("このメールアドレスは既に登録されています。"):l(_.message||"認証に失敗しました。")}finally{u(!1)}},h=async()=>{l(""),u(!0);try{await tT()}catch(f){l(f.message||"ゲストログインに失敗しました。")}finally{u(!1)}};return c.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"var(--bg-dark, #111827)",color:"white",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"},children:c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"},children:[c.jsx("h1",{style:{fontSize:"min(2.5rem, 8vh)",marginBottom:"min(1rem, 2vh)",fontFamily:"Outfit",color:"var(--primary, #60a5fa)",textShadow:"0 0 10px rgba(96, 165, 250, 0.5)",textAlign:"center"},children:"LINK LIKE BATTLE"}),c.jsxs("div",{style:{backgroundColor:"rgba(31, 41, 55, 0.8)",padding:"min(2.5rem, 3vh) min(2.5rem, 5vw)",borderRadius:"12px",width:"min(320px, 85vw)",boxShadow:"0 8px 32px rgba(0,0,0,0.5)",backdropFilter:"blur(4px)",border:"1px solid rgba(255,255,255,0.1)",boxSizing:"border-box"},children:[c.jsx("h2",{style:{textAlign:"center",marginBottom:"min(1.5rem, 3vh)",fontSize:"min(1.5rem, 4.5vh)",marginTop:-3},children:i?"【新規アカウント登録】":"【ログイン】"}),c.jsxs("form",{onSubmit:d,style:{display:"flex",flexDirection:"column",gap:"min(1.25rem, 2vh)"},children:[c.jsx("input",{type:"email",placeholder:"メールアドレス",value:t,onChange:f=>e(f.target.value),required:!0,style:{padding:"min(0.75rem, 2vh)",borderRadius:"6px",border:"none",outline:"none",backgroundColor:"#374151",color:"white",fontSize:"min(1rem, 4vh)"}}),c.jsx("input",{type:"password",placeholder:"パスワード (6文字以上)",value:n,onChange:f=>r(f.target.value),required:!0,minLength:6,style:{padding:"min(0.75rem, 2vh)",borderRadius:"6px",border:"none",outline:"none",backgroundColor:"#374151",color:"white",fontSize:"min(1rem, 4vh)"}}),o&&c.jsx("p",{style:{color:"#ef4444",fontSize:"min(0.875rem, 3vh)",margin:"0",textAlign:"center"},children:o}),c.jsx("button",{type:"submit",disabled:a,style:{padding:"min(0.75rem, 2vh)",backgroundColor:"var(--primary, #3b82f6)",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"min(1.1rem, 4.5vh)",transition:"background-color 0.2s"},children:a?"通信中...":i?"登録してはじめる":"ログイン"})]}),c.jsx("div",{style:{marginTop:"min(1rem, 2vh)",textAlign:"center"},children:c.jsx("button",{type:"button",onClick:()=>{s(!i),l("")},style:{background:"none",border:"none",color:"#e6e6e6",textDecoration:"underline",cursor:"pointer",fontSize:"min(0.9rem, 3.5vh)"},children:i?"すでにアカウントをお持ちの方はこちら":"新しくアカウントを作る方はこちら"})}),c.jsxs("div",{style:{display:"flex",alignItems:"center",margin:"min(1.5rem, 1vh) 0"},children:[c.jsx("div",{style:{flex:1,height:"1px",backgroundColor:"#4b5563"}}),c.jsx("span",{style:{padding:"0 10px",color:"#9ca3af",fontSize:"min(0.875rem, 3vh)"},children:"または"}),c.jsx("div",{style:{flex:1,height:"1px",backgroundColor:"#4b5563"}})]}),c.jsx("button",{onClick:h,disabled:a,style:{width:"100%",padding:"min(0.75rem, 2vh)",backgroundColor:"transparent",color:"white",border:"1px solid #6b7280",borderRadius:"6px",cursor:"pointer",fontWeight:"bold",fontSize:"min(1rem, 4vh)",transition:"background-color 0.2s"},children:"ログインせずに遊ぶ (ゲスト)"})]})]})})},sN=t=>{var e,n,r,i,s,o,l,a,u,d,h,f,_,y,x,b,g,m,p,E;return t&&{...t,setlist:t.setlist||[],animations:t.animations||{},player:{...t.player,hand:((e=t.player)==null?void 0:e.hand)||[],deck:((n=t.player)==null?void 0:n.deck)||[],discard:((r=t.player)==null?void 0:r.discard)||[],buffs:{...(i=t.player)==null?void 0:i.buffs,turnCardsPlayed:((o=(s=t.player)==null?void 0:s.buffs)==null?void 0:o.turnCardsPlayed)||[],turnCardsPlayedDetails:((a=(l=t.player)==null?void 0:l.buffs)==null?void 0:a.turnCardsPlayedDetails)||[],queuedEndTurnEffects:((d=(u=t.player)==null?void 0:u.buffs)==null?void 0:d.queuedEndTurnEffects)||[]}},enemy:{...t.enemy,hand:((h=t.enemy)==null?void 0:h.hand)||[],deck:((f=t.enemy)==null?void 0:f.deck)||[],discard:((_=t.enemy)==null?void 0:_.discard)||[],buffs:{...(y=t.enemy)==null?void 0:y.buffs,turnCardsPlayed:((b=(x=t.enemy)==null?void 0:x.buffs)==null?void 0:b.turnCardsPlayed)||[],turnCardsPlayedDetails:((m=(g=t.enemy)==null?void 0:g.buffs)==null?void 0:m.turnCardsPlayedDetails)||[],queuedEndTurnEffects:((E=(p=t.enemy)==null?void 0:p.buffs)==null?void 0:E.queuedEndTurnEffects)||[]}}}};function oN(){const[t,e]=F.useState(null),[n,r]=F.useState(!0),[i,s]=F.useState("home"),[o,l]=F.useState(""),[a,u]=F.useState(null),[d,h]=F.useState(null),[f,_]=F.useState({}),[y,x]=F.useState(null),[b,g]=F.useState(null),[m,p]=F.useState(""),[E,v]=F.useState(!1),[N,A]=F.useState([]),[O,G]=F.useState(null),U=F.useRef(null);F.useEffect(()=>{const I=rT(k=>{e(k),r(!1)});return()=>I()},[]),F.useEffect(()=>{const I=localStorage.getItem("battleSession");if(I)try{const k=JSON.parse(I);k.roomId&&(p(k.roomId),v(k.isHost),k.playerName&&l(k.playerName),k.gameMode&&u(k.gameMode),s("waitingRoom"))}catch(k){console.error("Session parse error:",k)}},[]),F.useEffect(()=>{i==="home"&&(localStorage.removeItem("battleSession"),p(""),G(null),x(null),U.current&&(U.current(),U.current=null))},[i]),F.useEffect(()=>{if(i==="lobby"){const I=KI(k=>A(k));return()=>I()}},[i]),F.useEffect(()=>{if(!(!m||i!=="waitingRoom"&&i!=="battle"))return U.current=JI(m,I=>{if(!I){alert("対戦ルームが既に終了または解散されています。"),s("home");return}if(G(I),I.status==="playing"&&I.gameState){const k=sN(I.gameState);x(k),i!=="battle"&&s("battle")}}),()=>{U.current&&U.current()}},[m,i]);const me=d?z1(d):[],Ve=Object.values(f).reduce((I,k)=>I+k,0),Qe=I=>{if(Ve>=30)return;const k=f[I]||0;if(!(k>=3)){if(I==="On your mark(102期Ver.)"&&k>=2){alert("「On your mark(102期Ver.)」はデッキに2枚までしか入れられません。");return}_(M=>({...M,[I]:k+1}))}},Tt=I=>{const k=f[I]||0;k<=0||_(M=>{const j={...M};return j[I]=k-1,j[I]<=0&&delete j[I],j})},ht=()=>{if(!d)return;const I=Hg[d],k={};I.forEach(M=>{k[M]=(k[M]||0)+1}),_(k)},ft=()=>{if(a==="cpu"){const I=[];Object.entries(f).forEach(([K,X])=>{for(let De=0;De<X;De++)I.push(K)});const k=Xi(I),M=il(),j=$g({deck:k,unit:d||"スリーズブーケ"},M);j.player.name=o||"YOU",j.enemy.name="寮母さん",x(j),s("battle")}else s("lobby")},pt=async()=>{try{const I=[];Object.entries(f).forEach(([j,K])=>{for(let X=0;X<K;X++)I.push(j)});const k=Xi(I),M=await GI({deck:k,unit:d||""},o);p(M),v(!0),s("waitingRoom"),localStorage.setItem("battleSession",JSON.stringify({roomId:M,isHost:!0,playerName:o,gameMode:"online"}))}catch(I){console.error("部屋作成エラーの詳細:",I),alert(`部屋の作成に失敗しました:
`+I.message)}},D=async I=>{try{const k=[];Object.entries(f).forEach(([j,K])=>{for(let X=0;X<K;X++)k.push(j)});const M=Xi(k);await YI(I,{deck:M,unit:d||""},o),p(I),v(!1),s("waitingRoom"),localStorage.setItem("battleSession",JSON.stringify({roomId:I,isHost:!1,playerName:o,gameMode:"online"}))}catch(k){alert(k.message)}},C=async()=>{if(!O||!O.clientDeck)return;const I=W1(O.hostDeck,O.clientDeck);I.player.name=O.hostName||"YOU",I.enemy.name=O.clientName||"相手",await QI(m,I)},S=[0,0,0,0,0,0,0,0];Object.entries(f).forEach(([I,k])=>{const M=cd.find(K=>K.曲名===I),j=Math.min(Number(M==null?void 0:M.コスト)||0,7);S[j]+=k});const w=Math.max(1,...S),T=()=>n?c.jsx("div",{style:{height:"100%",width:"100%",backgroundColor:"#111827",display:"flex",justifyContent:"center",alignItems:"center",color:"white"},children:"Loading..."}):t?i==="home"?c.jsx(FT,{playerName:o,setPlayerName:l,setGameMode:u,setScreen:s,user:t}):i==="lobby"?c.jsx(WT,{roomsList:N,handleCreateRoom:pt,handleJoinRoom:D,setScreen:s}):i==="waitingRoom"?c.jsx(BT,{isHost:E,playerName:o,roomData:O,roomId:m,handleHostStartGame:C}):i==="deckBuilder"?c.jsx(zT,{gameMode:a,setScreen:s,deckTotal:Ve,selectedUnit:d,setSelectedUnit:h,manaCurve:S,maxManaCount:w,handleDeckComplete:ft,loadStarterDeck:ht,deckList:f,setDeckList:_,availableCards:me,selectedCard:b,setSelectedCard:g,removeCardFromDeck:Tt,addCardToDeck:Qe,user:t}):i==="battle"&&y?c.jsx(rN,{gameState:y,setGameState:x,gameMode:a,roomId:m,isHost:E,setScreen:s,selectedCard:b,setSelectedCard:g}):null:c.jsx(iN,{});return c.jsx("div",{className:"app-wrapper",children:T()})}Za.createRoot(document.getElementById("root")).render(c.jsx(Nv.StrictMode,{children:c.jsx(oN,{})}));
