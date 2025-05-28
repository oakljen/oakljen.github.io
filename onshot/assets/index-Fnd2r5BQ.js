(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();function gv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ef={exports:{}},ur={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function nS(){if(Wg)return ur;Wg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,o,c){var h=null;if(c!==void 0&&(h=""+c),o.key!==void 0&&(h=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:s,type:r,key:h,ref:o!==void 0?o:null,props:c}}return ur.Fragment=t,ur.jsx=i,ur.jsxs=i,ur}var Jg;function iS(){return Jg||(Jg=1,Ef.exports=nS()),Ef.exports}var j=iS(),bf={exports:{}},J={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function sS(){if($g)return J;$g=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function C(b){return b===null||typeof b!="object"?null:(b=E&&b[E]||b["@@iterator"],typeof b=="function"?b:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,W={};function le(b,x,B){this.props=b,this.context=x,this.refs=W,this.updater=B||k}le.prototype.isReactComponent={},le.prototype.setState=function(b,x){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,x,"setState")},le.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function Xe(){}Xe.prototype=le.prototype;function Ke(b,x,B){this.props=b,this.context=x,this.refs=W,this.updater=B||k}var we=Ke.prototype=new Xe;we.constructor=Ke,L(we,le.prototype),we.isPureReactComponent=!0;var et=Array.isArray,oe={H:null,A:null,T:null,S:null,V:null},Ze=Object.prototype.hasOwnProperty;function tt(b,x,B,z,V,ce){return B=ce.ref,{$$typeof:s,type:b,key:x,ref:B!==void 0?B:null,props:ce}}function ot(b,x){return tt(b.type,x,void 0,void 0,void 0,b.props)}function pt(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function Bn(b){var x={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(B){return x[B]})}var on=/\/+/g;function nt(b,x){return typeof b=="object"&&b!==null&&b.key!=null?Bn(""+b.key):x.toString(36)}function wi(){}function Ri(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(wi,wi):(b.status="pending",b.then(function(x){b.status==="pending"&&(b.status="fulfilled",b.value=x)},function(x){b.status==="pending"&&(b.status="rejected",b.reason=x)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function it(b,x,B,z,V){var ce=typeof b;(ce==="undefined"||ce==="boolean")&&(b=null);var Z=!1;if(b===null)Z=!0;else switch(ce){case"bigint":case"string":case"number":Z=!0;break;case"object":switch(b.$$typeof){case s:case t:Z=!0;break;case v:return Z=b._init,it(Z(b._payload),x,B,z,V)}}if(Z)return V=V(b),Z=z===""?"."+nt(b,0):z,et(V)?(B="",Z!=null&&(B=Z.replace(on,"$&/")+"/"),it(V,x,B,"",function(Pn){return Pn})):V!=null&&(pt(V)&&(V=ot(V,B+(V.key==null||b&&b.key===V.key?"":(""+V.key).replace(on,"$&/")+"/")+Z)),x.push(V)),1;Z=0;var Tt=z===""?".":z+":";if(et(b))for(var Re=0;Re<b.length;Re++)z=b[Re],ce=Tt+nt(z,Re),Z+=it(z,x,B,ce,V);else if(Re=C(b),typeof Re=="function")for(b=Re.call(b),Re=0;!(z=b.next()).done;)z=z.value,ce=Tt+nt(z,Re++),Z+=it(z,x,B,ce,V);else if(ce==="object"){if(typeof b.then=="function")return it(Ri(b),x,B,z,V);throw x=String(b),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return Z}function D(b,x,B){if(b==null)return b;var z=[],V=0;return it(b,z,"","",function(ce){return x.call(B,ce,V++)}),z}function H(b){if(b._status===-1){var x=b._result;x=x(),x.then(function(B){(b._status===0||b._status===-1)&&(b._status=1,b._result=B)},function(B){(b._status===0||b._status===-1)&&(b._status=2,b._result=B)}),b._status===-1&&(b._status=0,b._result=x)}if(b._status===1)return b._result.default;throw b._result}var Q=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(x))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function Ee(){}return J.Children={map:D,forEach:function(b,x,B){D(b,function(){x.apply(this,arguments)},B)},count:function(b){var x=0;return D(b,function(){x++}),x},toArray:function(b){return D(b,function(x){return x})||[]},only:function(b){if(!pt(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},J.Component=le,J.Fragment=i,J.Profiler=o,J.PureComponent=Ke,J.StrictMode=r,J.Suspense=m,J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=oe,J.__COMPILER_RUNTIME={__proto__:null,c:function(b){return oe.H.useMemoCache(b)}},J.cache=function(b){return function(){return b.apply(null,arguments)}},J.cloneElement=function(b,x,B){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var z=L({},b.props),V=b.key,ce=void 0;if(x!=null)for(Z in x.ref!==void 0&&(ce=void 0),x.key!==void 0&&(V=""+x.key),x)!Ze.call(x,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&x.ref===void 0||(z[Z]=x[Z]);var Z=arguments.length-2;if(Z===1)z.children=B;else if(1<Z){for(var Tt=Array(Z),Re=0;Re<Z;Re++)Tt[Re]=arguments[Re+2];z.children=Tt}return tt(b.type,V,void 0,void 0,ce,z)},J.createContext=function(b){return b={$$typeof:h,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:c,_context:b},b},J.createElement=function(b,x,B){var z,V={},ce=null;if(x!=null)for(z in x.key!==void 0&&(ce=""+x.key),x)Ze.call(x,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&(V[z]=x[z]);var Z=arguments.length-2;if(Z===1)V.children=B;else if(1<Z){for(var Tt=Array(Z),Re=0;Re<Z;Re++)Tt[Re]=arguments[Re+2];V.children=Tt}if(b&&b.defaultProps)for(z in Z=b.defaultProps,Z)V[z]===void 0&&(V[z]=Z[z]);return tt(b,ce,void 0,void 0,null,V)},J.createRef=function(){return{current:null}},J.forwardRef=function(b){return{$$typeof:d,render:b}},J.isValidElement=pt,J.lazy=function(b){return{$$typeof:v,_payload:{_status:-1,_result:b},_init:H}},J.memo=function(b,x){return{$$typeof:g,type:b,compare:x===void 0?null:x}},J.startTransition=function(b){var x=oe.T,B={};oe.T=B;try{var z=b(),V=oe.S;V!==null&&V(B,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(Ee,Q)}catch(ce){Q(ce)}finally{oe.T=x}},J.unstable_useCacheRefresh=function(){return oe.H.useCacheRefresh()},J.use=function(b){return oe.H.use(b)},J.useActionState=function(b,x,B){return oe.H.useActionState(b,x,B)},J.useCallback=function(b,x){return oe.H.useCallback(b,x)},J.useContext=function(b){return oe.H.useContext(b)},J.useDebugValue=function(){},J.useDeferredValue=function(b,x){return oe.H.useDeferredValue(b,x)},J.useEffect=function(b,x,B){var z=oe.H;if(typeof B=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return z.useEffect(b,x)},J.useId=function(){return oe.H.useId()},J.useImperativeHandle=function(b,x,B){return oe.H.useImperativeHandle(b,x,B)},J.useInsertionEffect=function(b,x){return oe.H.useInsertionEffect(b,x)},J.useLayoutEffect=function(b,x){return oe.H.useLayoutEffect(b,x)},J.useMemo=function(b,x){return oe.H.useMemo(b,x)},J.useOptimistic=function(b,x){return oe.H.useOptimistic(b,x)},J.useReducer=function(b,x,B){return oe.H.useReducer(b,x,B)},J.useRef=function(b){return oe.H.useRef(b)},J.useState=function(b){return oe.H.useState(b)},J.useSyncExternalStore=function(b,x,B){return oe.H.useSyncExternalStore(b,x,B)},J.useTransition=function(){return oe.H.useTransition()},J.version="19.1.0",J}var e_;function oh(){return e_||(e_=1,bf.exports=sS()),bf.exports}var $=oh();const aS=gv($);var Sf={exports:{}},cr={},Tf={exports:{}},Cf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function rS(){return t_||(t_=1,function(s){function t(D,H){var Q=D.length;D.push(H);e:for(;0<Q;){var Ee=Q-1>>>1,b=D[Ee];if(0<o(b,H))D[Ee]=H,D[Q]=b,Q=Ee;else break e}}function i(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var H=D[0],Q=D.pop();if(Q!==H){D[0]=Q;e:for(var Ee=0,b=D.length,x=b>>>1;Ee<x;){var B=2*(Ee+1)-1,z=D[B],V=B+1,ce=D[V];if(0>o(z,Q))V<b&&0>o(ce,z)?(D[Ee]=ce,D[V]=Q,Ee=V):(D[Ee]=z,D[B]=Q,Ee=B);else if(V<b&&0>o(ce,Q))D[Ee]=ce,D[V]=Q,Ee=V;else break e}}return H}function o(D,H){var Q=D.sortIndex-H.sortIndex;return Q!==0?Q:D.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],g=[],v=1,E=null,C=3,k=!1,L=!1,W=!1,le=!1,Xe=typeof setTimeout=="function"?setTimeout:null,Ke=typeof clearTimeout=="function"?clearTimeout:null,we=typeof setImmediate<"u"?setImmediate:null;function et(D){for(var H=i(g);H!==null;){if(H.callback===null)r(g);else if(H.startTime<=D)r(g),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(g)}}function oe(D){if(W=!1,et(D),!L)if(i(m)!==null)L=!0,Ze||(Ze=!0,nt());else{var H=i(g);H!==null&&it(oe,H.startTime-D)}}var Ze=!1,tt=-1,ot=5,pt=-1;function Bn(){return le?!0:!(s.unstable_now()-pt<ot)}function on(){if(le=!1,Ze){var D=s.unstable_now();pt=D;var H=!0;try{e:{L=!1,W&&(W=!1,Ke(tt),tt=-1),k=!0;var Q=C;try{t:{for(et(D),E=i(m);E!==null&&!(E.expirationTime>D&&Bn());){var Ee=E.callback;if(typeof Ee=="function"){E.callback=null,C=E.priorityLevel;var b=Ee(E.expirationTime<=D);if(D=s.unstable_now(),typeof b=="function"){E.callback=b,et(D),H=!0;break t}E===i(m)&&r(m),et(D)}else r(m);E=i(m)}if(E!==null)H=!0;else{var x=i(g);x!==null&&it(oe,x.startTime-D),H=!1}}break e}finally{E=null,C=Q,k=!1}H=void 0}}finally{H?nt():Ze=!1}}}var nt;if(typeof we=="function")nt=function(){we(on)};else if(typeof MessageChannel<"u"){var wi=new MessageChannel,Ri=wi.port2;wi.port1.onmessage=on,nt=function(){Ri.postMessage(null)}}else nt=function(){Xe(on,0)};function it(D,H){tt=Xe(function(){D(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ot=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return C},s.unstable_next=function(D){switch(C){case 1:case 2:case 3:var H=3;break;default:H=C}var Q=C;C=H;try{return D()}finally{C=Q}},s.unstable_requestPaint=function(){le=!0},s.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=C;C=D;try{return H()}finally{C=Q}},s.unstable_scheduleCallback=function(D,H,Q){var Ee=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Ee+Q:Ee):Q=Ee,D){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=Q+b,D={id:v++,callback:H,priorityLevel:D,startTime:Q,expirationTime:b,sortIndex:-1},Q>Ee?(D.sortIndex=Q,t(g,D),i(m)===null&&D===i(g)&&(W?(Ke(tt),tt=-1):W=!0,it(oe,Q-Ee))):(D.sortIndex=b,t(m,D),L||k||(L=!0,Ze||(Ze=!0,nt()))),D},s.unstable_shouldYield=Bn,s.unstable_wrapCallback=function(D){var H=C;return function(){var Q=C;C=H;try{return D.apply(this,arguments)}finally{C=Q}}}}(Cf)),Cf}var n_;function lS(){return n_||(n_=1,Tf.exports=rS()),Tf.exports}var Af={exports:{}},rt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function oS(){if(i_)return rt;i_=1;var s=oh();function t(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,g,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:E==null?null:""+E,children:m,containerInfo:g,implementation:v}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,rt.createPortal=function(m,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return c(m,g,null,v)},rt.flushSync=function(m){var g=h.T,v=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=g,r.p=v,r.d.f()}},rt.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(m,g))},rt.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},rt.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var v=g.as,E=d(v,g.crossOrigin),C=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?r.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:C,fetchPriority:k}):v==="script"&&r.d.X(m,{crossOrigin:E,integrity:C,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},rt.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=d(g.as,g.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(m)},rt.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,E=d(v,g.crossOrigin);r.d.L(m,v,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},rt.preloadModule=function(m,g){if(typeof m=="string")if(g){var v=d(g.as,g.crossOrigin);r.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(m)},rt.requestFormReset=function(m){r.d.r(m)},rt.unstable_batchedUpdates=function(m,g){return m(g)},rt.useFormState=function(m,g,v){return h.H.useFormState(m,g,v)},rt.useFormStatus=function(){return h.H.useHostTransitionStatus()},rt.version="19.1.0",rt}var s_;function uS(){if(s_)return Af.exports;s_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Af.exports=oS(),Af.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function cS(){if(a_)return cr;a_=1;var s=lS(),t=oh(),i=uS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,l=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===l)return d(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==l.return)a=u,l=f;else{for(var p=!1,_=u.child;_;){if(_===a){p=!0,a=u,l=f;break}if(_===l){p=!0,l=u,a=f;break}_=_.sibling}if(!p){for(_=f.child;_;){if(_===a){p=!0,a=f,l=u;break}if(_===l){p=!0,l=f,a=u;break}_=_.sibling}if(!p)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),le=Symbol.for("react.profiler"),Xe=Symbol.for("react.provider"),Ke=Symbol.for("react.consumer"),we=Symbol.for("react.context"),et=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),tt=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),pt=Symbol.for("react.activity"),Bn=Symbol.for("react.memo_cache_sentinel"),on=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=on&&e[on]||e["@@iterator"],typeof e=="function"?e:null)}var wi=Symbol.for("react.client.reference");function Ri(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===wi?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case le:return"Profiler";case W:return"StrictMode";case oe:return"Suspense";case Ze:return"SuspenseList";case pt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case we:return(e.displayName||"Context")+".Provider";case Ke:return(e._context.displayName||"Context")+".Consumer";case et:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tt:return n=e.displayName||null,n!==null?n:Ri(e.type)||"Memo";case ot:n=e._payload,e=e._init;try{return Ri(e(n))}catch{}}return null}var it=Array.isArray,D=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},Ee=[],b=-1;function x(e){return{current:e}}function B(e){0>b||(e.current=Ee[b],Ee[b]=null,b--)}function z(e,n){b++,Ee[b]=e.current,e.current=n}var V=x(null),ce=x(null),Z=x(null),Tt=x(null);function Re(e,n){switch(z(Z,n),z(ce,e),z(V,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Ag(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Ag(n),e=wg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(V),z(V,e)}function Pn(){B(V),B(ce),B(Z)}function su(e){e.memoizedState!==null&&z(Tt,e);var n=V.current,a=wg(n,e.type);n!==a&&(z(ce,e),z(V,a))}function Qr(e){ce.current===e&&(B(V),B(ce)),Tt.current===e&&(B(Tt),sr._currentValue=Q)}var au=Object.prototype.hasOwnProperty,ru=s.unstable_scheduleCallback,lu=s.unstable_cancelCallback,k0=s.unstable_shouldYield,U0=s.unstable_requestPaint,Wt=s.unstable_now,L0=s.unstable_getCurrentPriorityLevel,ad=s.unstable_ImmediatePriority,rd=s.unstable_UserBlockingPriority,Fr=s.unstable_NormalPriority,z0=s.unstable_LowPriority,ld=s.unstable_IdlePriority,H0=s.log,B0=s.unstable_setDisableYieldValue,ha=null,Ct=null;function jn(e){if(typeof H0=="function"&&B0(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(ha,e)}catch{}}var At=Math.clz32?Math.clz32:q0,P0=Math.log,j0=Math.LN2;function q0(e){return e>>>=0,e===0?32:31-(P0(e)/j0|0)|0}var Xr=256,Kr=4194304;function Ni(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zr(e,n,a){var l=e.pendingLanes;if(l===0)return 0;var u=0,f=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var _=l&134217727;return _!==0?(l=_&~f,l!==0?u=Ni(l):(p&=_,p!==0?u=Ni(p):a||(a=_&~e,a!==0&&(u=Ni(a))))):(_=l&~f,_!==0?u=Ni(_):p!==0?u=Ni(p):a||(a=l&~e,a!==0&&(u=Ni(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function da(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function V0(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function od(){var e=Xr;return Xr<<=1,(Xr&4194048)===0&&(Xr=256),e}function ud(){var e=Kr;return Kr<<=1,(Kr&62914560)===0&&(Kr=4194304),e}function ou(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function pa(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function G0(e,n,a,l,u,f){var p=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var _=e.entanglements,y=e.expirationTimes,w=e.hiddenUpdates;for(a=p&~a;0<a;){var O=31-At(a),I=1<<O;_[O]=0,y[O]=-1;var R=w[O];if(R!==null)for(w[O]=null,O=0;O<R.length;O++){var N=R[O];N!==null&&(N.lane&=-536870913)}a&=~I}l!==0&&cd(e,l,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(p&~n))}function cd(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-At(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function fd(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var l=31-At(a),u=1<<l;u&n|e[l]&n&&(e[l]|=n),a&=~u}}function uu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function cu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hd(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Yg(e.type))}function Y0(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var qn=Math.random().toString(36).slice(2),st="__reactFiber$"+qn,mt="__reactProps$"+qn,ls="__reactContainer$"+qn,fu="__reactEvents$"+qn,Q0="__reactListeners$"+qn,F0="__reactHandles$"+qn,dd="__reactResources$"+qn,ma="__reactMarker$"+qn;function hu(e){delete e[st],delete e[mt],delete e[fu],delete e[Q0],delete e[F0]}function os(e){var n=e[st];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ls]||a[st]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Dg(e);e!==null;){if(a=e[st])return a;e=Dg(e)}return n}e=a,a=e.parentNode}return null}function us(e){if(e=e[st]||e[ls]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ga(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function cs(e){var n=e[dd];return n||(n=e[dd]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function je(e){e[ma]=!0}var pd=new Set,md={};function Oi(e,n){fs(e,n),fs(e+"Capture",n)}function fs(e,n){for(md[e]=n,e=0;e<n.length;e++)pd.add(n[e])}var X0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gd={},_d={};function K0(e){return au.call(_d,e)?!0:au.call(gd,e)?!1:X0.test(e)?_d[e]=!0:(gd[e]=!0,!1)}function Wr(e,n,a){if(K0(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Jr(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function un(e,n,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+l)}}var du,vd;function hs(e){if(du===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);du=n&&n[1]||"",vd=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+du+e+vd}var pu=!1;function mu(e,n){if(!e||pu)return"";pu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch(N){var R=N}Reflect.construct(e,[],I)}else{try{I.call()}catch(N){R=N}e.call(I.prototype)}}else{try{throw Error()}catch(N){R=N}(I=e())&&typeof I.catch=="function"&&I.catch(function(){})}}catch(N){if(N&&R&&typeof N.stack=="string")return[N.stack,R.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),p=f[0],_=f[1];if(p&&_){var y=p.split(`
`),w=_.split(`
`);for(u=l=0;l<y.length&&!y[l].includes("DetermineComponentFrameRoot");)l++;for(;u<w.length&&!w[u].includes("DetermineComponentFrameRoot");)u++;if(l===y.length||u===w.length)for(l=y.length-1,u=w.length-1;1<=l&&0<=u&&y[l]!==w[u];)u--;for(;1<=l&&0<=u;l--,u--)if(y[l]!==w[u]){if(l!==1||u!==1)do if(l--,u--,0>u||y[l]!==w[u]){var O=`
`+y[l].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=l&&0<=u);break}}}finally{pu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?hs(a):""}function Z0(e){switch(e.tag){case 26:case 27:case 5:return hs(e.type);case 16:return hs("Lazy");case 13:return hs("Suspense");case 19:return hs("SuspenseList");case 0:case 15:return mu(e.type,!1);case 11:return mu(e.type.render,!1);case 1:return mu(e.type,!0);case 31:return hs("Activity");default:return""}}function yd(e){try{var n="";do n+=Z0(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ed(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function W0(e){var n=Ed(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(p){l=""+p,f.call(this,p)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(p){l=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $r(e){e._valueTracker||(e._valueTracker=W0(e))}function bd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return e&&(l=Ed(e)?e.checked?"true":"false":e.value),e=l,e!==a?(n.setValue(e),!0):!1}function el(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var J0=/[\n"\\]/g;function kt(e){return e.replace(J0,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function gu(e,n,a,l,u,f,p,_){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+xt(n)):e.value!==""+xt(n)&&(e.value=""+xt(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?_u(e,p,xt(n)):a!=null?_u(e,p,xt(a)):l!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.name=""+xt(_):e.removeAttribute("name")}function Sd(e,n,a,l,u,f,p,_){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+xt(a):"",n=n!=null?""+xt(n):a,_||n===e.value||(e.value=n),e.defaultValue=n}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=_?e.checked:!!l,e.defaultChecked=!!l,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p)}function _u(e,n,a){n==="number"&&el(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ds(e,n,a,l){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&l&&(e[a].defaultSelected=!0)}else{for(a=""+xt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Td(e,n,a){if(n!=null&&(n=""+xt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+xt(a):""}function Cd(e,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(r(92));if(it(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=xt(n),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function ps(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var $0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ad(e,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,a):typeof a!="number"||a===0||$0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function wd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in n)l=n[u],n.hasOwnProperty(u)&&a[u]!==l&&Ad(e,u,l)}else for(var f in n)n.hasOwnProperty(f)&&Ad(e,f,n[f])}function vu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(e){return tE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var yu=null;function Eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ms=null,gs=null;function Rd(e){var n=us(e);if(n&&(e=n.stateNode)){var a=e[mt]||null;e:switch(e=n.stateNode,n.type){case"input":if(gu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==e&&l.form===e.form){var u=l[mt]||null;if(!u)throw Error(r(90));gu(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===e.form&&bd(l)}break e;case"textarea":Td(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ds(e,!!a.multiple,n,!1)}}}var bu=!1;function Nd(e,n,a){if(bu)return e(n,a);bu=!0;try{var l=e(n);return l}finally{if(bu=!1,(ms!==null||gs!==null)&&(Pl(),ms&&(n=ms,e=gs,gs=ms=null,Rd(n),e)))for(n=0;n<e.length;n++)Rd(e[n])}}function _a(e,n){var a=e.stateNode;if(a===null)return null;var l=a[mt]||null;if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(cn)try{var va={};Object.defineProperty(va,"passive",{get:function(){Su=!0}}),window.addEventListener("test",va,va),window.removeEventListener("test",va,va)}catch{Su=!1}var Vn=null,Tu=null,nl=null;function Od(){if(nl)return nl;var e,n=Tu,a=n.length,l,u="value"in Vn?Vn.value:Vn.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var p=a-e;for(l=1;l<=p&&n[a-l]===u[f-l];l++);return nl=u.slice(e,1<l?1-l:void 0)}function il(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sl(){return!0}function Dd(){return!1}function gt(e){function n(a,l,u,f,p){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=p,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(a=e[_],this[_]=a?a(f):f[_]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?sl:Dd,this.isPropagationStopped=Dd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var Di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=gt(Di),ya=v({},Di,{view:0,detail:0}),nE=gt(ya),Cu,Au,Ea,rl=v({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ea&&(Ea&&e.type==="mousemove"?(Cu=e.screenX-Ea.screenX,Au=e.screenY-Ea.screenY):Au=Cu=0,Ea=e),Cu)},movementY:function(e){return"movementY"in e?e.movementY:Au}}),Md=gt(rl),iE=v({},rl,{dataTransfer:0}),sE=gt(iE),aE=v({},ya,{relatedTarget:0}),wu=gt(aE),rE=v({},Di,{animationName:0,elapsedTime:0,pseudoElement:0}),lE=gt(rE),oE=v({},Di,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uE=gt(oE),cE=v({},Di,{data:0}),Id=gt(cE),fE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pE(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=dE[e])?!!n[e]:!1}function Ru(){return pE}var mE=v({},ya,{key:function(e){if(e.key){var n=fE[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gE=gt(mE),_E=v({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xd=gt(_E),vE=v({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),yE=gt(vE),EE=v({},Di,{propertyName:0,elapsedTime:0,pseudoElement:0}),bE=gt(EE),SE=v({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),TE=gt(SE),CE=v({},Di,{newState:0,oldState:0}),AE=gt(CE),wE=[9,13,27,32],Nu=cn&&"CompositionEvent"in window,ba=null;cn&&"documentMode"in document&&(ba=document.documentMode);var RE=cn&&"TextEvent"in window&&!ba,kd=cn&&(!Nu||ba&&8<ba&&11>=ba),Ud=" ",Ld=!1;function zd(e,n){switch(e){case"keyup":return wE.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _s=!1;function NE(e,n){switch(e){case"compositionend":return Hd(n);case"keypress":return n.which!==32?null:(Ld=!0,Ud);case"textInput":return e=n.data,e===Ud&&Ld?null:e;default:return null}}function OE(e,n){if(_s)return e==="compositionend"||!Nu&&zd(e,n)?(e=Od(),nl=Tu=Vn=null,_s=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kd&&n.locale!=="ko"?null:n.data;default:return null}}var DE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!DE[e.type]:n==="textarea"}function Pd(e,n,a,l){ms?gs?gs.push(l):gs=[l]:ms=l,n=Ql(n,"onChange"),0<n.length&&(a=new al("onChange","change",null,a,l),e.push({event:a,listeners:n}))}var Sa=null,Ta=null;function ME(e){Eg(e,0)}function ll(e){var n=ga(e);if(bd(n))return e}function jd(e,n){if(e==="change")return n}var qd=!1;if(cn){var Ou;if(cn){var Du="oninput"in document;if(!Du){var Vd=document.createElement("div");Vd.setAttribute("oninput","return;"),Du=typeof Vd.oninput=="function"}Ou=Du}else Ou=!1;qd=Ou&&(!document.documentMode||9<document.documentMode)}function Gd(){Sa&&(Sa.detachEvent("onpropertychange",Yd),Ta=Sa=null)}function Yd(e){if(e.propertyName==="value"&&ll(Ta)){var n=[];Pd(n,Ta,e,Eu(e)),Nd(ME,n)}}function IE(e,n,a){e==="focusin"?(Gd(),Sa=n,Ta=a,Sa.attachEvent("onpropertychange",Yd)):e==="focusout"&&Gd()}function xE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Ta)}function kE(e,n){if(e==="click")return ll(n)}function UE(e,n){if(e==="input"||e==="change")return ll(n)}function LE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var wt=typeof Object.is=="function"?Object.is:LE;function Ca(e,n){if(wt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!au.call(n,u)||!wt(e[u],n[u]))return!1}return!0}function Qd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fd(e,n){var a=Qd(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=n&&l>=n)return{node:a,offset:n-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Qd(a)}}function Xd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Xd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Kd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=el(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=el(e.document)}return n}function Mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var zE=cn&&"documentMode"in document&&11>=document.documentMode,vs=null,Iu=null,Aa=null,xu=!1;function Zd(e,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xu||vs==null||vs!==el(l)||(l=vs,"selectionStart"in l&&Mu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Aa&&Ca(Aa,l)||(Aa=l,l=Ql(Iu,"onSelect"),0<l.length&&(n=new al("onSelect","select",null,n,a),e.push({event:n,listeners:l}),n.target=vs)))}function Mi(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ys={animationend:Mi("Animation","AnimationEnd"),animationiteration:Mi("Animation","AnimationIteration"),animationstart:Mi("Animation","AnimationStart"),transitionrun:Mi("Transition","TransitionRun"),transitionstart:Mi("Transition","TransitionStart"),transitioncancel:Mi("Transition","TransitionCancel"),transitionend:Mi("Transition","TransitionEnd")},ku={},Wd={};cn&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function Ii(e){if(ku[e])return ku[e];if(!ys[e])return e;var n=ys[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Wd)return ku[e]=n[a];return e}var Jd=Ii("animationend"),$d=Ii("animationiteration"),ep=Ii("animationstart"),HE=Ii("transitionrun"),BE=Ii("transitionstart"),PE=Ii("transitioncancel"),tp=Ii("transitionend"),np=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function qt(e,n){np.set(e,n),Oi(n,[e])}var ip=new WeakMap;function Ut(e,n){if(typeof e=="object"&&e!==null){var a=ip.get(e);return a!==void 0?a:(n={value:e,source:n,stack:yd(n)},ip.set(e,n),n)}return{value:e,source:n,stack:yd(n)}}var Lt=[],Es=0,Lu=0;function ol(){for(var e=Es,n=Lu=Es=0;n<e;){var a=Lt[n];Lt[n++]=null;var l=Lt[n];Lt[n++]=null;var u=Lt[n];Lt[n++]=null;var f=Lt[n];if(Lt[n++]=null,l!==null&&u!==null){var p=l.pending;p===null?u.next=u:(u.next=p.next,p.next=u),l.pending=u}f!==0&&sp(a,u,f)}}function ul(e,n,a,l){Lt[Es++]=e,Lt[Es++]=n,Lt[Es++]=a,Lt[Es++]=l,Lu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function zu(e,n,a,l){return ul(e,n,a,l),cl(e)}function bs(e,n){return ul(e,null,null,n),cl(e)}function sp(e,n,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,l=f.alternate,l!==null&&(l.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-At(a),e=f.hiddenUpdates,l=e[u],l===null?e[u]=[n]:l.push(n),n.lane=a|536870912),f):null}function cl(e){if(50<Za)throw Za=0,Vc=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ss={};function jE(e,n,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,n,a,l){return new jE(e,n,a,l)}function Hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fn(e,n){var a=e.alternate;return a===null?(a=Rt(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ap(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function fl(e,n,a,l,u,f){var p=0;if(l=e,typeof e=="function")Hu(e)&&(p=1);else if(typeof e=="string")p=Vb(e,a,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case pt:return e=Rt(31,a,n,u),e.elementType=pt,e.lanes=f,e;case L:return xi(a.children,u,f,n);case W:p=8,u|=24;break;case le:return e=Rt(12,a,n,u|2),e.elementType=le,e.lanes=f,e;case oe:return e=Rt(13,a,n,u),e.elementType=oe,e.lanes=f,e;case Ze:return e=Rt(19,a,n,u),e.elementType=Ze,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xe:case we:p=10;break e;case Ke:p=9;break e;case et:p=11;break e;case tt:p=14;break e;case ot:p=16,l=null;break e}p=29,a=Error(r(130,e===null?"null":typeof e,"")),l=null}return n=Rt(p,a,n,u),n.elementType=e,n.type=l,n.lanes=f,n}function xi(e,n,a,l){return e=Rt(7,e,l,n),e.lanes=a,e}function Bu(e,n,a){return e=Rt(6,e,null,n),e.lanes=a,e}function Pu(e,n,a){return n=Rt(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ts=[],Cs=0,hl=null,dl=0,zt=[],Ht=0,ki=null,hn=1,dn="";function Ui(e,n){Ts[Cs++]=dl,Ts[Cs++]=hl,hl=e,dl=n}function rp(e,n,a){zt[Ht++]=hn,zt[Ht++]=dn,zt[Ht++]=ki,ki=e;var l=hn;e=dn;var u=32-At(l)-1;l&=~(1<<u),a+=1;var f=32-At(n)+u;if(30<f){var p=u-u%5;f=(l&(1<<p)-1).toString(32),l>>=p,u-=p,hn=1<<32-At(n)+u|a<<u|l,dn=f+e}else hn=1<<f|a<<u|l,dn=e}function ju(e){e.return!==null&&(Ui(e,1),rp(e,1,0))}function qu(e){for(;e===hl;)hl=Ts[--Cs],Ts[Cs]=null,dl=Ts[--Cs],Ts[Cs]=null;for(;e===ki;)ki=zt[--Ht],zt[Ht]=null,dn=zt[--Ht],zt[Ht]=null,hn=zt[--Ht],zt[Ht]=null}var ut=null,De=null,de=!1,Li=null,Jt=!1,Vu=Error(r(519));function zi(e){var n=Error(r(418,""));throw Na(Ut(n,e)),Vu}function lp(e){var n=e.stateNode,a=e.type,l=e.memoizedProps;switch(n[st]=e,n[mt]=l,a){case"dialog":ae("cancel",n),ae("close",n);break;case"iframe":case"object":case"embed":ae("load",n);break;case"video":case"audio":for(a=0;a<Ja.length;a++)ae(Ja[a],n);break;case"source":ae("error",n);break;case"img":case"image":case"link":ae("error",n),ae("load",n);break;case"details":ae("toggle",n);break;case"input":ae("invalid",n),Sd(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),$r(n);break;case"select":ae("invalid",n);break;case"textarea":ae("invalid",n),Cd(n,l.value,l.defaultValue,l.children),$r(n)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||Cg(n.textContent,a)?(l.popover!=null&&(ae("beforetoggle",n),ae("toggle",n)),l.onScroll!=null&&ae("scroll",n),l.onScrollEnd!=null&&ae("scrollend",n),l.onClick!=null&&(n.onclick=Fl),n=!0):n=!1,n||zi(e)}function op(e){for(ut=e.return;ut;)switch(ut.tag){case 5:case 13:Jt=!1;return;case 27:case 3:Jt=!0;return;default:ut=ut.return}}function wa(e){if(e!==ut)return!1;if(!de)return op(e),de=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||rf(e.type,e.memoizedProps)),a=!a),a&&De&&zi(e),op(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){De=Gt(e.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}De=null}}else n===27?(n=De,ai(e.type)?(e=cf,cf=null,De=e):De=n):De=ut?Gt(e.stateNode.nextSibling):null;return!0}function Ra(){De=ut=null,de=!1}function up(){var e=Li;return e!==null&&(yt===null?yt=e:yt.push.apply(yt,e),Li=null),e}function Na(e){Li===null?Li=[e]:Li.push(e)}var Gu=x(null),Hi=null,pn=null;function Gn(e,n,a){z(Gu,n._currentValue),n._currentValue=a}function mn(e){e._currentValue=Gu.current,B(Gu)}function Yu(e,n,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===a)break;e=e.return}}function Qu(e,n,a,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var p=u.child;f=f.firstContext;e:for(;f!==null;){var _=f;f=u;for(var y=0;y<n.length;y++)if(_.context===n[y]){f.lanes|=a,_=f.alternate,_!==null&&(_.lanes|=a),Yu(f.return,a,e),l||(p=null);break e}f=_.next}}else if(u.tag===18){if(p=u.return,p===null)throw Error(r(341));p.lanes|=a,f=p.alternate,f!==null&&(f.lanes|=a),Yu(p,a,e),p=null}else p=u.child;if(p!==null)p.return=u;else for(p=u;p!==null;){if(p===e){p=null;break}if(u=p.sibling,u!==null){u.return=p.return,p=u;break}p=p.return}u=p}}function Oa(e,n,a,l){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var p=u.alternate;if(p===null)throw Error(r(387));if(p=p.memoizedProps,p!==null){var _=u.type;wt(u.pendingProps.value,p.value)||(e!==null?e.push(_):e=[_])}}else if(u===Tt.current){if(p=u.alternate,p===null)throw Error(r(387));p.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(sr):e=[sr])}u=u.return}e!==null&&Qu(n,e,a,l),n.flags|=262144}function pl(e){for(e=e.firstContext;e!==null;){if(!wt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Bi(e){Hi=e,pn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return cp(Hi,e)}function ml(e,n){return Hi===null&&Bi(e),cp(e,n)}function cp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},pn===null){if(e===null)throw Error(r(308));pn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else pn=pn.next=n;return a}var qE=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},VE=s.unstable_scheduleCallback,GE=s.unstable_NormalPriority,ze={$$typeof:we,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fu(){return{controller:new qE,data:new Map,refCount:0}}function Da(e){e.refCount--,e.refCount===0&&VE(GE,function(){e.controller.abort()})}var Ma=null,Xu=0,As=0,ws=null;function YE(e,n){if(Ma===null){var a=Ma=[];Xu=0,As=Zc(),ws={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Xu++,n.then(fp,fp),n}function fp(){if(--Xu===0&&Ma!==null){ws!==null&&(ws.status="fulfilled");var e=Ma;Ma=null,As=0,ws=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function QE(e,n){var a=[],l={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(l.status="rejected",l.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),l}var hp=D.S;D.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&YE(e,n),hp!==null&&hp(e,n)};var Pi=x(null);function Ku(){var e=Pi.current;return e!==null?e:Te.pooledCache}function gl(e,n){n===null?z(Pi,Pi.current):z(Pi,n.pool)}function dp(){var e=Ku();return e===null?null:{parent:ze._currentValue,pool:e}}var Ia=Error(r(460)),pp=Error(r(474)),_l=Error(r(542)),Zu={then:function(){}};function mp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vl(){}function gp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(vl,vl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,vp(e),e;default:if(typeof n.status=="string")n.then(vl,vl);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=l}},function(l){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,vp(e),e}throw xa=n,Ia}}var xa=null;function _p(){if(xa===null)throw Error(r(459));var e=xa;return xa=null,e}function vp(e){if(e===Ia||e===_l)throw Error(r(483))}var Yn=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ju(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fn(e,n,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(pe&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,n=cl(e),sp(e,null,a),n}return ul(e,l,n,a),cl(e)}function ka(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,fd(e,a)}}function $u(e,n){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=p:f=f.next=p,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ec=!1;function Ua(){if(ec){var e=ws;if(e!==null)throw e}}function La(e,n,a,l){ec=!1;var u=e.updateQueue;Yn=!1;var f=u.firstBaseUpdate,p=u.lastBaseUpdate,_=u.shared.pending;if(_!==null){u.shared.pending=null;var y=_,w=y.next;y.next=null,p===null?f=w:p.next=w,p=y;var O=e.alternate;O!==null&&(O=O.updateQueue,_=O.lastBaseUpdate,_!==p&&(_===null?O.firstBaseUpdate=w:_.next=w,O.lastBaseUpdate=y))}if(f!==null){var I=u.baseState;p=0,O=w=y=null,_=f;do{var R=_.lane&-536870913,N=R!==_.lane;if(N?(ue&R)===R:(l&R)===R){R!==0&&R===As&&(ec=!0),O!==null&&(O=O.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var X=e,G=_;R=n;var ve=a;switch(G.tag){case 1:if(X=G.payload,typeof X=="function"){I=X.call(ve,I,R);break e}I=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=G.payload,R=typeof X=="function"?X.call(ve,I,R):X,R==null)break e;I=v({},I,R);break e;case 2:Yn=!0}}R=_.callback,R!==null&&(e.flags|=64,N&&(e.flags|=8192),N=u.callbacks,N===null?u.callbacks=[R]:N.push(R))}else N={lane:R,tag:_.tag,payload:_.payload,callback:_.callback,next:null},O===null?(w=O=N,y=I):O=O.next=N,p|=R;if(_=_.next,_===null){if(_=u.shared.pending,_===null)break;N=_,_=N.next,N.next=null,u.lastBaseUpdate=N,u.shared.pending=null}}while(!0);O===null&&(y=I),u.baseState=y,u.firstBaseUpdate=w,u.lastBaseUpdate=O,f===null&&(u.shared.lanes=0),ti|=p,e.lanes=p,e.memoizedState=I}}function yp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Ep(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)yp(a[e],n)}var Rs=x(null),yl=x(0);function bp(e,n){e=Sn,z(yl,e),z(Rs,n),Sn=e|n.baseLanes}function tc(){z(yl,Sn),z(Rs,Rs.current)}function nc(){Sn=yl.current,B(Rs),B(yl)}var Xn=0,ee=null,ge=null,Ue=null,El=!1,Ns=!1,ji=!1,bl=0,za=0,Os=null,FE=0;function xe(){throw Error(r(321))}function ic(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!wt(e[a],n[a]))return!1;return!0}function sc(e,n,a,l,u,f){return Xn=f,ee=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=e===null||e.memoizedState===null?sm:am,ji=!1,f=a(l,u),ji=!1,Ns&&(f=Tp(n,a,l,u)),Sp(e),f}function Sp(e){D.H=Rl;var n=ge!==null&&ge.next!==null;if(Xn=0,Ue=ge=ee=null,El=!1,za=0,Os=null,n)throw Error(r(300));e===null||qe||(e=e.dependencies,e!==null&&pl(e)&&(qe=!0))}function Tp(e,n,a,l){ee=e;var u=0;do{if(Ns&&(Os=null),za=0,Ns=!1,25<=u)throw Error(r(301));if(u+=1,Ue=ge=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}D.H=eb,f=n(a,l)}while(Ns);return f}function XE(){var e=D.H,n=e.useState()[0];return n=typeof n.then=="function"?Ha(n):n,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(ee.flags|=1024),n}function ac(){var e=bl!==0;return bl=0,e}function rc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function lc(e){if(El){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}El=!1}Xn=0,Ue=ge=ee=null,Ns=!1,za=bl=0,Os=null}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ee.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Le(){if(ge===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var n=Ue===null?ee.memoizedState:Ue.next;if(n!==null)Ue=n,ge=e;else{if(e===null)throw ee.alternate===null?Error(r(467)):Error(r(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Ue===null?ee.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function oc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ha(e){var n=za;return za+=1,Os===null&&(Os=[]),e=gp(Os,e,n),n=ee,(Ue===null?n.memoizedState:Ue.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?sm:am),e}function Sl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ha(e);if(e.$$typeof===we)return at(e)}throw Error(r(438,String(e)))}function uc(e){var n=null,a=ee.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=ee.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=oc(),ee.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),l=0;l<e;l++)a[l]=Bn;return n.index++,a}function gn(e,n){return typeof n=="function"?n(e):n}function Tl(e){var n=Le();return cc(n,ge,e)}function cc(e,n,a){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var u=e.baseQueue,f=l.pending;if(f!==null){if(u!==null){var p=u.next;u.next=f.next,f.next=p}n.baseQueue=u=f,l.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var _=p=null,y=null,w=n,O=!1;do{var I=w.lane&-536870913;if(I!==w.lane?(ue&I)===I:(Xn&I)===I){var R=w.revertLane;if(R===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),I===As&&(O=!0);else if((Xn&R)===R){w=w.next,R===As&&(O=!0);continue}else I={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},y===null?(_=y=I,p=f):y=y.next=I,ee.lanes|=R,ti|=R;I=w.action,ji&&a(f,I),f=w.hasEagerState?w.eagerState:a(f,I)}else R={lane:I,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},y===null?(_=y=R,p=f):y=y.next=R,ee.lanes|=I,ti|=I;w=w.next}while(w!==null&&w!==n);if(y===null?p=f:y.next=_,!wt(f,e.memoizedState)&&(qe=!0,O&&(a=ws,a!==null)))throw a;e.memoizedState=f,e.baseState=p,e.baseQueue=y,l.lastRenderedState=f}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function fc(e){var n=Le(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var l=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var p=u=u.next;do f=e(f,p.action),p=p.next;while(p!==u);wt(f,n.memoizedState)||(qe=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,l]}function Cp(e,n,a){var l=ee,u=Le(),f=de;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var p=!wt((ge||u).memoizedState,a);p&&(u.memoizedState=a,qe=!0),u=u.queue;var _=Rp.bind(null,l,u,e);if(Ba(2048,8,_,[e]),u.getSnapshot!==n||p||Ue!==null&&Ue.memoizedState.tag&1){if(l.flags|=2048,Ds(9,Cl(),wp.bind(null,l,u,a,n),null),Te===null)throw Error(r(349));f||(Xn&124)!==0||Ap(l,n,a)}return a}function Ap(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ee.updateQueue,n===null?(n=oc(),ee.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function wp(e,n,a,l){n.value=a,n.getSnapshot=l,Np(n)&&Op(e)}function Rp(e,n,a){return a(function(){Np(n)&&Op(e)})}function Np(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!wt(e,a)}catch{return!0}}function Op(e){var n=bs(e,2);n!==null&&It(n,e,2)}function hc(e){var n=_t();if(typeof e=="function"){var a=e;if(e=a(),ji){jn(!0);try{a()}finally{jn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:e},n}function Dp(e,n,a,l){return e.baseState=a,cc(e,ge,typeof l=="function"?l:gn)}function KE(e,n,a,l,u){if(wl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){f.listeners.push(p)}};D.T!==null?a(!0):f.isTransition=!1,l(f),a=n.pending,a===null?(f.next=n.pending=f,Mp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Mp(e,n){var a=n.action,l=n.payload,u=e.state;if(n.isTransition){var f=D.T,p={};D.T=p;try{var _=a(u,l),y=D.S;y!==null&&y(p,_),Ip(e,n,_)}catch(w){dc(e,n,w)}finally{D.T=f}}else try{f=a(u,l),Ip(e,n,f)}catch(w){dc(e,n,w)}}function Ip(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){xp(e,n,l)},function(l){return dc(e,n,l)}):xp(e,n,a)}function xp(e,n,a){n.status="fulfilled",n.value=a,kp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Mp(e,a)))}function dc(e,n,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,kp(n),n=n.next;while(n!==l)}e.action=null}function kp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Up(e,n){return n}function Lp(e,n){if(de){var a=Te.formState;if(a!==null){e:{var l=ee;if(de){if(De){t:{for(var u=De,f=Jt;u.nodeType!==8;){if(!f){u=null;break t}if(u=Gt(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){De=Gt(u.nextSibling),l=u.data==="F!";break e}}zi(l)}l=!1}l&&(n=a[0])}}return a=_t(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Up,lastRenderedState:n},a.queue=l,a=tm.bind(null,ee,l),l.dispatch=a,l=hc(!1),f=vc.bind(null,ee,!1,l.queue),l=_t(),u={state:n,dispatch:null,action:e,pending:null},l.queue=u,a=KE.bind(null,ee,u,f,a),u.dispatch=a,l.memoizedState=e,[n,a,!1]}function zp(e){var n=Le();return Hp(n,ge,e)}function Hp(e,n,a){if(n=cc(e,n,Up)[0],e=Tl(gn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Ha(n)}catch(p){throw p===Ia?_l:p}else l=n;n=Le();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ee.flags|=2048,Ds(9,Cl(),ZE.bind(null,u,a),null)),[l,f,e]}function ZE(e,n){e.action=n}function Bp(e){var n=Le(),a=ge;if(a!==null)return Hp(n,a,e);Le(),n=n.memoizedState,a=Le();var l=a.queue.dispatch;return a.memoizedState=e,[n,l,!1]}function Ds(e,n,a,l){return e={tag:e,create:a,deps:l,inst:n,next:null},n=ee.updateQueue,n===null&&(n=oc(),ee.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,n.lastEffect=e),e}function Cl(){return{destroy:void 0,resource:void 0}}function Pp(){return Le().memoizedState}function Al(e,n,a,l){var u=_t();l=l===void 0?null:l,ee.flags|=e,u.memoizedState=Ds(1|n,Cl(),a,l)}function Ba(e,n,a,l){var u=Le();l=l===void 0?null:l;var f=u.memoizedState.inst;ge!==null&&l!==null&&ic(l,ge.memoizedState.deps)?u.memoizedState=Ds(n,f,a,l):(ee.flags|=e,u.memoizedState=Ds(1|n,f,a,l))}function jp(e,n){Al(8390656,8,e,n)}function qp(e,n){Ba(2048,8,e,n)}function Vp(e,n){return Ba(4,2,e,n)}function Gp(e,n){return Ba(4,4,e,n)}function Yp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Qp(e,n,a){a=a!=null?a.concat([e]):null,Ba(4,4,Yp.bind(null,n,e),a)}function pc(){}function Fp(e,n){var a=Le();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&ic(n,l[1])?l[0]:(a.memoizedState=[e,n],e)}function Xp(e,n){var a=Le();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&ic(n,l[1]))return l[0];if(l=e(),ji){jn(!0);try{e()}finally{jn(!1)}}return a.memoizedState=[l,n],l}function mc(e,n,a){return a===void 0||(Xn&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Wm(),ee.lanes|=e,ti|=e,a)}function Kp(e,n,a,l){return wt(a,n)?a:Rs.current!==null?(e=mc(e,a,l),wt(e,n)||(qe=!0),e):(Xn&42)===0?(qe=!0,e.memoizedState=a):(e=Wm(),ee.lanes|=e,ti|=e,n)}function Zp(e,n,a,l,u){var f=H.p;H.p=f!==0&&8>f?f:8;var p=D.T,_={};D.T=_,vc(e,!1,n,a);try{var y=u(),w=D.S;if(w!==null&&w(_,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var O=QE(y,l);Pa(e,n,O,Mt(e))}else Pa(e,n,l,Mt(e))}catch(I){Pa(e,n,{then:function(){},status:"rejected",reason:I},Mt())}finally{H.p=f,D.T=p}}function WE(){}function gc(e,n,a,l){if(e.tag!==5)throw Error(r(476));var u=Wp(e).queue;Zp(e,u,n,Q,a===null?WE:function(){return Jp(e),a(l)})}function Wp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:Q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Jp(e){var n=Wp(e).next.queue;Pa(e,n,{},Mt())}function _c(){return at(sr)}function $p(){return Le().memoizedState}function em(){return Le().memoizedState}function JE(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Mt();e=Qn(a);var l=Fn(n,e,a);l!==null&&(It(l,n,a),ka(l,n,a)),n={cache:Fu()},e.payload=n;return}n=n.return}}function $E(e,n,a){var l=Mt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},wl(e)?nm(n,a):(a=zu(e,n,a,l),a!==null&&(It(a,e,l),im(a,n,l)))}function tm(e,n,a){var l=Mt();Pa(e,n,a,l)}function Pa(e,n,a,l){var u={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(wl(e))nm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var p=n.lastRenderedState,_=f(p,a);if(u.hasEagerState=!0,u.eagerState=_,wt(_,p))return ul(e,n,u,0),Te===null&&ol(),!1}catch{}finally{}if(a=zu(e,n,u,l),a!==null)return It(a,e,l),im(a,n,l),!0}return!1}function vc(e,n,a,l){if(l={lane:2,revertLane:Zc(),action:l,hasEagerState:!1,eagerState:null,next:null},wl(e)){if(n)throw Error(r(479))}else n=zu(e,a,l,2),n!==null&&It(n,e,2)}function wl(e){var n=e.alternate;return e===ee||n!==null&&n===ee}function nm(e,n){Ns=El=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function im(e,n,a){if((a&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,fd(e,a)}}var Rl={readContext:at,use:Sl,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useLayoutEffect:xe,useInsertionEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useSyncExternalStore:xe,useId:xe,useHostTransitionStatus:xe,useFormState:xe,useActionState:xe,useOptimistic:xe,useMemoCache:xe,useCacheRefresh:xe},sm={readContext:at,use:Sl,useCallback:function(e,n){return _t().memoizedState=[e,n===void 0?null:n],e},useContext:at,useEffect:jp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Al(4194308,4,Yp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Al(4194308,4,e,n)},useInsertionEffect:function(e,n){Al(4,2,e,n)},useMemo:function(e,n){var a=_t();n=n===void 0?null:n;var l=e();if(ji){jn(!0);try{e()}finally{jn(!1)}}return a.memoizedState=[l,n],l},useReducer:function(e,n,a){var l=_t();if(a!==void 0){var u=a(n);if(ji){jn(!0);try{a(n)}finally{jn(!1)}}}else u=n;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=$E.bind(null,ee,e),[l.memoizedState,e]},useRef:function(e){var n=_t();return e={current:e},n.memoizedState=e},useState:function(e){e=hc(e);var n=e.queue,a=tm.bind(null,ee,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:pc,useDeferredValue:function(e,n){var a=_t();return mc(a,e,n)},useTransition:function(){var e=hc(!1);return e=Zp.bind(null,ee,e.queue,!0,!1),_t().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var l=ee,u=_t();if(de){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Te===null)throw Error(r(349));(ue&124)!==0||Ap(l,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,jp(Rp.bind(null,l,f,e),[e]),l.flags|=2048,Ds(9,Cl(),wp.bind(null,l,f,a,n),null),a},useId:function(){var e=_t(),n=Te.identifierPrefix;if(de){var a=dn,l=hn;a=(l&~(1<<32-At(l)-1)).toString(32)+a,n="«"+n+"R"+a,a=bl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=FE++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:_c,useFormState:Lp,useActionState:Lp,useOptimistic:function(e){var n=_t();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=vc.bind(null,ee,!0,a),a.dispatch=n,[e,n]},useMemoCache:uc,useCacheRefresh:function(){return _t().memoizedState=JE.bind(null,ee)}},am={readContext:at,use:Sl,useCallback:Fp,useContext:at,useEffect:qp,useImperativeHandle:Qp,useInsertionEffect:Vp,useLayoutEffect:Gp,useMemo:Xp,useReducer:Tl,useRef:Pp,useState:function(){return Tl(gn)},useDebugValue:pc,useDeferredValue:function(e,n){var a=Le();return Kp(a,ge.memoizedState,e,n)},useTransition:function(){var e=Tl(gn)[0],n=Le().memoizedState;return[typeof e=="boolean"?e:Ha(e),n]},useSyncExternalStore:Cp,useId:$p,useHostTransitionStatus:_c,useFormState:zp,useActionState:zp,useOptimistic:function(e,n){var a=Le();return Dp(a,ge,e,n)},useMemoCache:uc,useCacheRefresh:em},eb={readContext:at,use:Sl,useCallback:Fp,useContext:at,useEffect:qp,useImperativeHandle:Qp,useInsertionEffect:Vp,useLayoutEffect:Gp,useMemo:Xp,useReducer:fc,useRef:Pp,useState:function(){return fc(gn)},useDebugValue:pc,useDeferredValue:function(e,n){var a=Le();return ge===null?mc(a,e,n):Kp(a,ge.memoizedState,e,n)},useTransition:function(){var e=fc(gn)[0],n=Le().memoizedState;return[typeof e=="boolean"?e:Ha(e),n]},useSyncExternalStore:Cp,useId:$p,useHostTransitionStatus:_c,useFormState:Bp,useActionState:Bp,useOptimistic:function(e,n){var a=Le();return ge!==null?Dp(a,ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:uc,useCacheRefresh:em},Ms=null,ja=0;function Nl(e){var n=ja;return ja+=1,Ms===null&&(Ms=[]),gp(Ms,e,n)}function qa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ol(e,n){throw n.$$typeof===E?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function rm(e){var n=e._init;return n(e._payload)}function lm(e){function n(T,S){if(e){var A=T.deletions;A===null?(T.deletions=[S],T.flags|=16):A.push(S)}}function a(T,S){if(!e)return null;for(;S!==null;)n(T,S),S=S.sibling;return null}function l(T){for(var S=new Map;T!==null;)T.key!==null?S.set(T.key,T):S.set(T.index,T),T=T.sibling;return S}function u(T,S){return T=fn(T,S),T.index=0,T.sibling=null,T}function f(T,S,A){return T.index=A,e?(A=T.alternate,A!==null?(A=A.index,A<S?(T.flags|=67108866,S):A):(T.flags|=67108866,S)):(T.flags|=1048576,S)}function p(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function _(T,S,A,M){return S===null||S.tag!==6?(S=Bu(A,T.mode,M),S.return=T,S):(S=u(S,A),S.return=T,S)}function y(T,S,A,M){var P=A.type;return P===L?O(T,S,A.props.children,M,A.key):S!==null&&(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ot&&rm(P)===S.type)?(S=u(S,A.props),qa(S,A),S.return=T,S):(S=fl(A.type,A.key,A.props,null,T.mode,M),qa(S,A),S.return=T,S)}function w(T,S,A,M){return S===null||S.tag!==4||S.stateNode.containerInfo!==A.containerInfo||S.stateNode.implementation!==A.implementation?(S=Pu(A,T.mode,M),S.return=T,S):(S=u(S,A.children||[]),S.return=T,S)}function O(T,S,A,M,P){return S===null||S.tag!==7?(S=xi(A,T.mode,M,P),S.return=T,S):(S=u(S,A),S.return=T,S)}function I(T,S,A){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Bu(""+S,T.mode,A),S.return=T,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case C:return A=fl(S.type,S.key,S.props,null,T.mode,A),qa(A,S),A.return=T,A;case k:return S=Pu(S,T.mode,A),S.return=T,S;case ot:var M=S._init;return S=M(S._payload),I(T,S,A)}if(it(S)||nt(S))return S=xi(S,T.mode,A,null),S.return=T,S;if(typeof S.then=="function")return I(T,Nl(S),A);if(S.$$typeof===we)return I(T,ml(T,S),A);Ol(T,S)}return null}function R(T,S,A,M){var P=S!==null?S.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return P!==null?null:_(T,S,""+A,M);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case C:return A.key===P?y(T,S,A,M):null;case k:return A.key===P?w(T,S,A,M):null;case ot:return P=A._init,A=P(A._payload),R(T,S,A,M)}if(it(A)||nt(A))return P!==null?null:O(T,S,A,M,null);if(typeof A.then=="function")return R(T,S,Nl(A),M);if(A.$$typeof===we)return R(T,S,ml(T,A),M);Ol(T,A)}return null}function N(T,S,A,M,P){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return T=T.get(A)||null,_(S,T,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case C:return T=T.get(M.key===null?A:M.key)||null,y(S,T,M,P);case k:return T=T.get(M.key===null?A:M.key)||null,w(S,T,M,P);case ot:var te=M._init;return M=te(M._payload),N(T,S,A,M,P)}if(it(M)||nt(M))return T=T.get(A)||null,O(S,T,M,P,null);if(typeof M.then=="function")return N(T,S,A,Nl(M),P);if(M.$$typeof===we)return N(T,S,A,ml(S,M),P);Ol(S,M)}return null}function X(T,S,A,M){for(var P=null,te=null,q=S,Y=S=0,Ge=null;q!==null&&Y<A.length;Y++){q.index>Y?(Ge=q,q=null):Ge=q.sibling;var fe=R(T,q,A[Y],M);if(fe===null){q===null&&(q=Ge);break}e&&q&&fe.alternate===null&&n(T,q),S=f(fe,S,Y),te===null?P=fe:te.sibling=fe,te=fe,q=Ge}if(Y===A.length)return a(T,q),de&&Ui(T,Y),P;if(q===null){for(;Y<A.length;Y++)q=I(T,A[Y],M),q!==null&&(S=f(q,S,Y),te===null?P=q:te.sibling=q,te=q);return de&&Ui(T,Y),P}for(q=l(q);Y<A.length;Y++)Ge=N(q,T,Y,A[Y],M),Ge!==null&&(e&&Ge.alternate!==null&&q.delete(Ge.key===null?Y:Ge.key),S=f(Ge,S,Y),te===null?P=Ge:te.sibling=Ge,te=Ge);return e&&q.forEach(function(ci){return n(T,ci)}),de&&Ui(T,Y),P}function G(T,S,A,M){if(A==null)throw Error(r(151));for(var P=null,te=null,q=S,Y=S=0,Ge=null,fe=A.next();q!==null&&!fe.done;Y++,fe=A.next()){q.index>Y?(Ge=q,q=null):Ge=q.sibling;var ci=R(T,q,fe.value,M);if(ci===null){q===null&&(q=Ge);break}e&&q&&ci.alternate===null&&n(T,q),S=f(ci,S,Y),te===null?P=ci:te.sibling=ci,te=ci,q=Ge}if(fe.done)return a(T,q),de&&Ui(T,Y),P;if(q===null){for(;!fe.done;Y++,fe=A.next())fe=I(T,fe.value,M),fe!==null&&(S=f(fe,S,Y),te===null?P=fe:te.sibling=fe,te=fe);return de&&Ui(T,Y),P}for(q=l(q);!fe.done;Y++,fe=A.next())fe=N(q,T,Y,fe.value,M),fe!==null&&(e&&fe.alternate!==null&&q.delete(fe.key===null?Y:fe.key),S=f(fe,S,Y),te===null?P=fe:te.sibling=fe,te=fe);return e&&q.forEach(function(tS){return n(T,tS)}),de&&Ui(T,Y),P}function ve(T,S,A,M){if(typeof A=="object"&&A!==null&&A.type===L&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case C:e:{for(var P=A.key;S!==null;){if(S.key===P){if(P=A.type,P===L){if(S.tag===7){a(T,S.sibling),M=u(S,A.props.children),M.return=T,T=M;break e}}else if(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ot&&rm(P)===S.type){a(T,S.sibling),M=u(S,A.props),qa(M,A),M.return=T,T=M;break e}a(T,S);break}else n(T,S);S=S.sibling}A.type===L?(M=xi(A.props.children,T.mode,M,A.key),M.return=T,T=M):(M=fl(A.type,A.key,A.props,null,T.mode,M),qa(M,A),M.return=T,T=M)}return p(T);case k:e:{for(P=A.key;S!==null;){if(S.key===P)if(S.tag===4&&S.stateNode.containerInfo===A.containerInfo&&S.stateNode.implementation===A.implementation){a(T,S.sibling),M=u(S,A.children||[]),M.return=T,T=M;break e}else{a(T,S);break}else n(T,S);S=S.sibling}M=Pu(A,T.mode,M),M.return=T,T=M}return p(T);case ot:return P=A._init,A=P(A._payload),ve(T,S,A,M)}if(it(A))return X(T,S,A,M);if(nt(A)){if(P=nt(A),typeof P!="function")throw Error(r(150));return A=P.call(A),G(T,S,A,M)}if(typeof A.then=="function")return ve(T,S,Nl(A),M);if(A.$$typeof===we)return ve(T,S,ml(T,A),M);Ol(T,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,S!==null&&S.tag===6?(a(T,S.sibling),M=u(S,A),M.return=T,T=M):(a(T,S),M=Bu(A,T.mode,M),M.return=T,T=M),p(T)):a(T,S)}return function(T,S,A,M){try{ja=0;var P=ve(T,S,A,M);return Ms=null,P}catch(q){if(q===Ia||q===_l)throw q;var te=Rt(29,q,null,T.mode);return te.lanes=M,te.return=T,te}finally{}}}var Is=lm(!0),om=lm(!1),Bt=x(null),$t=null;function Kn(e){var n=e.alternate;z(He,He.current&1),z(Bt,e),$t===null&&(n===null||Rs.current!==null||n.memoizedState!==null)&&($t=e)}function um(e){if(e.tag===22){if(z(He,He.current),z(Bt,e),$t===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&($t=e)}}else Zn()}function Zn(){z(He,He.current),z(Bt,Bt.current)}function _n(e){B(Bt),$t===e&&($t=null),B(He)}var He=x(0);function Dl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||uf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function yc(e,n,a,l){n=e.memoizedState,a=a(l,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ec={enqueueSetState:function(e,n,a){e=e._reactInternals;var l=Mt(),u=Qn(l);u.payload=n,a!=null&&(u.callback=a),n=Fn(e,u,l),n!==null&&(It(n,e,l),ka(n,e,l))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var l=Mt(),u=Qn(l);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Fn(e,u,l),n!==null&&(It(n,e,l),ka(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Mt(),l=Qn(a);l.tag=2,n!=null&&(l.callback=n),n=Fn(e,l,a),n!==null&&(It(n,e,a),ka(n,e,a))}};function cm(e,n,a,l,u,f,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,p):n.prototype&&n.prototype.isPureReactComponent?!Ca(a,l)||!Ca(u,f):!0}function fm(e,n,a,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==e&&Ec.enqueueReplaceState(n,n.state,null)}function qi(e,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function hm(e){Ml(e)}function dm(e){console.error(e)}function pm(e){Ml(e)}function Il(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function mm(e,n,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function bc(e,n,a){return a=Qn(a),a.tag=3,a.payload={element:null},a.callback=function(){Il(e,n)},a}function gm(e){return e=Qn(e),e.tag=3,e}function _m(e,n,a,l){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=l.value;e.payload=function(){return u(f)},e.callback=function(){mm(n,a,l)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){mm(n,a,l),typeof u!="function"&&(ni===null?ni=new Set([this]):ni.add(this));var _=l.stack;this.componentDidCatch(l.value,{componentStack:_!==null?_:""})})}function tb(e,n,a,l,u){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&Oa(n,a,u,!0),a=Bt.current,a!==null){switch(a.tag){case 13:return $t===null?Yc():a.alternate===null&&Me===0&&(Me=3),a.flags&=-257,a.flags|=65536,a.lanes=u,l===Zu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),Fc(e,l,u)),!1;case 22:return a.flags|=65536,l===Zu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),Fc(e,l,u)),!1}throw Error(r(435,a.tag))}return Fc(e,l,u),Yc(),!1}if(de)return n=Bt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,l!==Vu&&(e=Error(r(422),{cause:l}),Na(Ut(e,a)))):(l!==Vu&&(n=Error(r(423),{cause:l}),Na(Ut(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=Ut(l,a),u=bc(e.stateNode,l,u),$u(e,u),Me!==4&&(Me=2)),!1;var f=Error(r(520),{cause:l});if(f=Ut(f,a),Ka===null?Ka=[f]:Ka.push(f),Me!==4&&(Me=2),n===null)return!0;l=Ut(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=bc(a.stateNode,l,e),$u(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ni===null||!ni.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=gm(u),_m(u,e,a,l),$u(a,u),!1}a=a.return}while(a!==null);return!1}var vm=Error(r(461)),qe=!1;function We(e,n,a,l){n.child=e===null?om(n,null,a,l):Is(n,e.child,a,l)}function ym(e,n,a,l,u){a=a.render;var f=n.ref;if("ref"in l){var p={};for(var _ in l)_!=="ref"&&(p[_]=l[_])}else p=l;return Bi(n),l=sc(e,n,a,p,f,u),_=ac(),e!==null&&!qe?(rc(e,n,u),vn(e,n,u)):(de&&_&&ju(n),n.flags|=1,We(e,n,l,u),n.child)}function Em(e,n,a,l,u){if(e===null){var f=a.type;return typeof f=="function"&&!Hu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,bm(e,n,f,l,u)):(e=fl(a.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Oc(e,u)){var p=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ca,a(p,l)&&e.ref===n.ref)return vn(e,n,u)}return n.flags|=1,e=fn(f,l),e.ref=n.ref,e.return=n,n.child=e}function bm(e,n,a,l,u){if(e!==null){var f=e.memoizedProps;if(Ca(f,l)&&e.ref===n.ref)if(qe=!1,n.pendingProps=l=f,Oc(e,u))(e.flags&131072)!==0&&(qe=!0);else return n.lanes=e.lanes,vn(e,n,u)}return Sc(e,n,a,l,u)}function Sm(e,n,a){var l=n.pendingProps,u=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((n.flags&128)!==0){if(l=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~l}else n.childLanes=0,n.child=null;return Tm(e,n,l,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&gl(n,f!==null?f.cachePool:null),f!==null?bp(n,f):tc(),um(n);else return n.lanes=n.childLanes=536870912,Tm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(gl(n,f.cachePool),bp(n,f),Zn(),n.memoizedState=null):(e!==null&&gl(n,null),tc(),Zn());return We(e,n,u,a),n.child}function Tm(e,n,a,l){var u=Ku();return u=u===null?null:{parent:ze._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&gl(n,null),tc(),um(n),e!==null&&Oa(e,n,l,!0),null}function xl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Sc(e,n,a,l,u){return Bi(n),a=sc(e,n,a,l,void 0,u),l=ac(),e!==null&&!qe?(rc(e,n,u),vn(e,n,u)):(de&&l&&ju(n),n.flags|=1,We(e,n,a,u),n.child)}function Cm(e,n,a,l,u,f){return Bi(n),n.updateQueue=null,a=Tp(n,l,a,u),Sp(e),l=ac(),e!==null&&!qe?(rc(e,n,f),vn(e,n,f)):(de&&l&&ju(n),n.flags|=1,We(e,n,a,f),n.child)}function Am(e,n,a,l,u){if(Bi(n),n.stateNode===null){var f=Ss,p=a.contextType;typeof p=="object"&&p!==null&&(f=at(p)),f=new a(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ec,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},Wu(n),p=a.contextType,f.context=typeof p=="object"&&p!==null?at(p):Ss,f.state=n.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(yc(n,a,p,l),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(p=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),p!==f.state&&Ec.enqueueReplaceState(f,f.state,null),La(n,l,f,u),Ua(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){f=n.stateNode;var _=n.memoizedProps,y=qi(a,_);f.props=y;var w=f.context,O=a.contextType;p=Ss,typeof O=="object"&&O!==null&&(p=at(O));var I=a.getDerivedStateFromProps;O=typeof I=="function"||typeof f.getSnapshotBeforeUpdate=="function",_=n.pendingProps!==_,O||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_||w!==p)&&fm(n,f,l,p),Yn=!1;var R=n.memoizedState;f.state=R,La(n,l,f,u),Ua(),w=n.memoizedState,_||R!==w||Yn?(typeof I=="function"&&(yc(n,a,I,l),w=n.memoizedState),(y=Yn||cm(n,a,y,l,R,w,p))?(O||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=w),f.props=l,f.state=w,f.context=p,l=y):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,Ju(e,n),p=n.memoizedProps,O=qi(a,p),f.props=O,I=n.pendingProps,R=f.context,w=a.contextType,y=Ss,typeof w=="object"&&w!==null&&(y=at(w)),_=a.getDerivedStateFromProps,(w=typeof _=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(p!==I||R!==y)&&fm(n,f,l,y),Yn=!1,R=n.memoizedState,f.state=R,La(n,l,f,u),Ua();var N=n.memoizedState;p!==I||R!==N||Yn||e!==null&&e.dependencies!==null&&pl(e.dependencies)?(typeof _=="function"&&(yc(n,a,_,l),N=n.memoizedState),(O=Yn||cm(n,a,O,l,R,N,y)||e!==null&&e.dependencies!==null&&pl(e.dependencies))?(w||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,N,y),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,N,y)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=N),f.props=l,f.state=N,f.context=y,l=O):(typeof f.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),l=!1)}return f=l,xl(e,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&l?(n.child=Is(n,e.child,null,u),n.child=Is(n,null,a,u)):We(e,n,a,u),n.memoizedState=f.state,e=n.child):e=vn(e,n,u),e}function wm(e,n,a,l){return Ra(),n.flags|=256,We(e,n,a,l),n.child}var Tc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:dp()}}function Ac(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Pt),e}function Rm(e,n,a){var l=n.pendingProps,u=!1,f=(n.flags&128)!==0,p;if((p=f)||(p=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),p&&(u=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(de){if(u?Kn(n):Zn(),de){var _=De,y;if(y=_){e:{for(y=_,_=Jt;y.nodeType!==8;){if(!_){_=null;break e}if(y=Gt(y.nextSibling),y===null){_=null;break e}}_=y}_!==null?(n.memoizedState={dehydrated:_,treeContext:ki!==null?{id:hn,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},y=Rt(18,null,null,0),y.stateNode=_,y.return=n,n.child=y,ut=n,De=null,y=!0):y=!1}y||zi(n)}if(_=n.memoizedState,_!==null&&(_=_.dehydrated,_!==null))return uf(_)?n.lanes=32:n.lanes=536870912,null;_n(n)}return _=l.children,l=l.fallback,u?(Zn(),u=n.mode,_=kl({mode:"hidden",children:_},u),l=xi(l,u,a,null),_.return=n,l.return=n,_.sibling=l,n.child=_,u=n.child,u.memoizedState=Cc(a),u.childLanes=Ac(e,p,a),n.memoizedState=Tc,l):(Kn(n),wc(n,_))}if(y=e.memoizedState,y!==null&&(_=y.dehydrated,_!==null)){if(f)n.flags&256?(Kn(n),n.flags&=-257,n=Rc(e,n,a)):n.memoizedState!==null?(Zn(),n.child=e.child,n.flags|=128,n=null):(Zn(),u=l.fallback,_=n.mode,l=kl({mode:"visible",children:l.children},_),u=xi(u,_,a,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,Is(n,e.child,null,a),l=n.child,l.memoizedState=Cc(a),l.childLanes=Ac(e,p,a),n.memoizedState=Tc,n=u);else if(Kn(n),uf(_)){if(p=_.nextSibling&&_.nextSibling.dataset,p)var w=p.dgst;p=w,l=Error(r(419)),l.stack="",l.digest=p,Na({value:l,source:null,stack:null}),n=Rc(e,n,a)}else if(qe||Oa(e,n,a,!1),p=(a&e.childLanes)!==0,qe||p){if(p=Te,p!==null&&(l=a&-a,l=(l&42)!==0?1:uu(l),l=(l&(p.suspendedLanes|a))!==0?0:l,l!==0&&l!==y.retryLane))throw y.retryLane=l,bs(e,l),It(p,e,l),vm;_.data==="$?"||Yc(),n=Rc(e,n,a)}else _.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=y.treeContext,De=Gt(_.nextSibling),ut=n,de=!0,Li=null,Jt=!1,e!==null&&(zt[Ht++]=hn,zt[Ht++]=dn,zt[Ht++]=ki,hn=e.id,dn=e.overflow,ki=n),n=wc(n,l.children),n.flags|=4096);return n}return u?(Zn(),u=l.fallback,_=n.mode,y=e.child,w=y.sibling,l=fn(y,{mode:"hidden",children:l.children}),l.subtreeFlags=y.subtreeFlags&65011712,w!==null?u=fn(w,u):(u=xi(u,_,a,null),u.flags|=2),u.return=n,l.return=n,l.sibling=u,n.child=l,l=u,u=n.child,_=e.child.memoizedState,_===null?_=Cc(a):(y=_.cachePool,y!==null?(w=ze._currentValue,y=y.parent!==w?{parent:w,pool:w}:y):y=dp(),_={baseLanes:_.baseLanes|a,cachePool:y}),u.memoizedState=_,u.childLanes=Ac(e,p,a),n.memoizedState=Tc,l):(Kn(n),a=e.child,e=a.sibling,a=fn(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=a,n.memoizedState=null,a)}function wc(e,n){return n=kl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function kl(e,n){return e=Rt(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Rc(e,n,a){return Is(n,e.child,null,a),e=wc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Nm(e,n,a){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Yu(e.return,n,a)}function Nc(e,n,a,l,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=a,f.tailMode=u)}function Om(e,n,a){var l=n.pendingProps,u=l.revealOrder,f=l.tail;if(We(e,n,l.children,a),l=He.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nm(e,a,n);else if(e.tag===19)Nm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(z(He,l),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Dl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Nc(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Dl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Nc(n,!0,a,null,f);break;case"together":Nc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function vn(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ti|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Oa(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=fn(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=fn(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Oc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&pl(e)))}function nb(e,n,a){switch(n.tag){case 3:Re(n,n.stateNode.containerInfo),Gn(n,ze,e.memoizedState.cache),Ra();break;case 27:case 5:su(n);break;case 4:Re(n,n.stateNode.containerInfo);break;case 10:Gn(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Kn(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Rm(e,n,a):(Kn(n),e=vn(e,n,a),e!==null?e.sibling:null);Kn(n);break;case 19:var u=(e.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||(Oa(e,n,a,!1),l=(a&n.childLanes)!==0),u){if(l)return Om(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),z(He,He.current),l)break;return null;case 22:case 23:return n.lanes=0,Sm(e,n,a);case 24:Gn(n,ze,e.memoizedState.cache)}return vn(e,n,a)}function Dm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)qe=!0;else{if(!Oc(e,a)&&(n.flags&128)===0)return qe=!1,nb(e,n,a);qe=(e.flags&131072)!==0}else qe=!1,de&&(n.flags&1048576)!==0&&rp(n,dl,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var l=n.elementType,u=l._init;if(l=u(l._payload),n.type=l,typeof l=="function")Hu(l)?(e=qi(l,e),n.tag=1,n=Am(null,n,l,e,a)):(n.tag=0,n=Sc(null,n,l,e,a));else{if(l!=null){if(u=l.$$typeof,u===et){n.tag=11,n=ym(null,n,l,e,a);break e}else if(u===tt){n.tag=14,n=Em(null,n,l,e,a);break e}}throw n=Ri(l)||l,Error(r(306,n,""))}}return n;case 0:return Sc(e,n,n.type,n.pendingProps,a);case 1:return l=n.type,u=qi(l,n.pendingProps),Am(e,n,l,u,a);case 3:e:{if(Re(n,n.stateNode.containerInfo),e===null)throw Error(r(387));l=n.pendingProps;var f=n.memoizedState;u=f.element,Ju(e,n),La(n,l,null,a);var p=n.memoizedState;if(l=p.cache,Gn(n,ze,l),l!==f.cache&&Qu(n,[ze],a,!0),Ua(),l=p.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=wm(e,n,l,a);break e}else if(l!==u){u=Ut(Error(r(424)),n),Na(u),n=wm(e,n,l,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(De=Gt(e.firstChild),ut=n,de=!0,Li=null,Jt=!0,a=om(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ra(),l===u){n=vn(e,n,a);break e}We(e,n,l,a)}n=n.child}return n;case 26:return xl(e,n),e===null?(a=kg(n.type,null,n.pendingProps,null))?n.memoizedState=a:de||(a=n.type,e=n.pendingProps,l=Xl(Z.current).createElement(a),l[st]=n,l[mt]=e,$e(l,a,e),je(l),n.stateNode=l):n.memoizedState=kg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return su(n),e===null&&de&&(l=n.stateNode=Mg(n.type,n.pendingProps,Z.current),ut=n,Jt=!0,u=De,ai(n.type)?(cf=u,De=Gt(l.firstChild)):De=u),We(e,n,n.pendingProps.children,a),xl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&de&&((u=l=De)&&(l=Db(l,n.type,n.pendingProps,Jt),l!==null?(n.stateNode=l,ut=n,De=Gt(l.firstChild),Jt=!1,u=!0):u=!1),u||zi(n)),su(n),u=n.type,f=n.pendingProps,p=e!==null?e.memoizedProps:null,l=f.children,rf(u,f)?l=null:p!==null&&rf(u,p)&&(n.flags|=32),n.memoizedState!==null&&(u=sc(e,n,XE,null,null,a),sr._currentValue=u),xl(e,n),We(e,n,l,a),n.child;case 6:return e===null&&de&&((e=a=De)&&(a=Mb(a,n.pendingProps,Jt),a!==null?(n.stateNode=a,ut=n,De=null,e=!0):e=!1),e||zi(n)),null;case 13:return Rm(e,n,a);case 4:return Re(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Is(n,null,l,a):We(e,n,l,a),n.child;case 11:return ym(e,n,n.type,n.pendingProps,a);case 7:return We(e,n,n.pendingProps,a),n.child;case 8:return We(e,n,n.pendingProps.children,a),n.child;case 12:return We(e,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,Gn(n,n.type,l.value),We(e,n,l.children,a),n.child;case 9:return u=n.type._context,l=n.pendingProps.children,Bi(n),u=at(u),l=l(u),n.flags|=1,We(e,n,l,a),n.child;case 14:return Em(e,n,n.type,n.pendingProps,a);case 15:return bm(e,n,n.type,n.pendingProps,a);case 19:return Om(e,n,a);case 31:return l=n.pendingProps,a=n.mode,l={mode:l.mode,children:l.children},e===null?(a=kl(l,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=fn(e.child,l),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Sm(e,n,a);case 24:return Bi(n),l=at(ze),e===null?(u=Ku(),u===null&&(u=Te,f=Fu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:l,cache:u},Wu(n),Gn(n,ze,u)):((e.lanes&a)!==0&&(Ju(e,n),La(n,null,null,a),Ua()),u=e.memoizedState,f=n.memoizedState,u.parent!==l?(u={parent:l,cache:l},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Gn(n,ze,l)):(l=f.cache,Gn(n,ze,l),l!==u.cache&&Qu(n,[ze],a,!0))),We(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function yn(e){e.flags|=4}function Mm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Bg(n)){if(n=Bt.current,n!==null&&((ue&4194048)===ue?$t!==null:(ue&62914560)!==ue&&(ue&536870912)===0||n!==$t))throw xa=Zu,pp;e.flags|=8192}}function Ul(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ud():536870912,e.lanes|=n,Ls|=n)}function Va(e,n){if(!de)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Oe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=a,n}function ib(e,n,a){var l=n.pendingProps;switch(qu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(n),null;case 1:return Oe(n),null;case 3:return a=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),mn(ze),Pn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(wa(n)?yn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,up())),Oe(n),null;case 26:return a=n.memoizedState,e===null?(yn(n),a!==null?(Oe(n),Mm(n,a)):(Oe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(yn(n),Oe(n),Mm(n,a)):(Oe(n),n.flags&=-16777217):(e.memoizedProps!==l&&yn(n),Oe(n),n.flags&=-16777217),null;case 27:Qr(n),a=Z.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==l&&yn(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return Oe(n),null}e=V.current,wa(n)?lp(n):(e=Mg(u,l,a),n.stateNode=e,yn(n))}return Oe(n),null;case 5:if(Qr(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&yn(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return Oe(n),null}if(e=V.current,wa(n))lp(n);else{switch(u=Xl(Z.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?u.createElement(a,{is:l.is}):u.createElement(a)}}e[st]=n,e[mt]=l;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;e:switch($e(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&yn(n)}}return Oe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&yn(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(e=Z.current,wa(n)){if(e=n.stateNode,a=n.memoizedProps,l=null,u=ut,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[st]=n,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Cg(e.nodeValue,a)),e||zi(n)}else e=Xl(e).createTextNode(l),e[st]=n,n.stateNode=e}return Oe(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=wa(n),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[st]=n}else Ra(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Oe(n),u=!1}else u=up(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(_n(n),n):(_n(n),null)}if(_n(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=n.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==u&&(l.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ul(n,n.updateQueue),Oe(n),null;case 4:return Pn(),e===null&&ef(n.stateNode.containerInfo),Oe(n),null;case 10:return mn(n.type),Oe(n),null;case 19:if(B(He),u=n.memoizedState,u===null)return Oe(n),null;if(l=(n.flags&128)!==0,f=u.rendering,f===null)if(l)Va(u,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Dl(e),f!==null){for(n.flags|=128,Va(u,!1),e=f.updateQueue,n.updateQueue=e,Ul(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)ap(a,e),a=a.sibling;return z(He,He.current&1|2),n.child}e=e.sibling}u.tail!==null&&Wt()>Hl&&(n.flags|=128,l=!0,Va(u,!1),n.lanes=4194304)}else{if(!l)if(e=Dl(f),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,Ul(n,e),Va(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!de)return Oe(n),null}else 2*Wt()-u.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,l=!0,Va(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Wt(),n.sibling=null,e=He.current,z(He,l?e&1|2:e&1),n):(Oe(n),null);case 22:case 23:return _n(n),nc(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&(Oe(n),n.subtreeFlags&6&&(n.flags|=8192)):Oe(n),a=n.updateQueue,a!==null&&Ul(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),e!==null&&B(Pi),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),mn(ze),Oe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function sb(e,n){switch(qu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return mn(ze),Pn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Qr(n),null;case 13:if(_n(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ra()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(He),null;case 4:return Pn(),null;case 10:return mn(n.type),null;case 22:case 23:return _n(n),nc(),e!==null&&B(Pi),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return mn(ze),null;case 25:return null;default:return null}}function Im(e,n){switch(qu(n),n.tag){case 3:mn(ze),Pn();break;case 26:case 27:case 5:Qr(n);break;case 4:Pn();break;case 13:_n(n);break;case 19:B(He);break;case 10:mn(n.type);break;case 22:case 23:_n(n),nc(),e!==null&&B(Pi);break;case 24:mn(ze)}}function Ga(e,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var u=l.next;a=u;do{if((a.tag&e)===e){l=void 0;var f=a.create,p=a.inst;l=f(),p.destroy=l}a=a.next}while(a!==u)}}catch(_){be(n,n.return,_)}}function Wn(e,n,a){try{var l=n.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var f=u.next;l=f;do{if((l.tag&e)===e){var p=l.inst,_=p.destroy;if(_!==void 0){p.destroy=void 0,u=n;var y=a,w=_;try{w()}catch(O){be(u,y,O)}}}l=l.next}while(l!==f)}}catch(O){be(n,n.return,O)}}function xm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Ep(n,a)}catch(l){be(e,e.return,l)}}}function km(e,n,a){a.props=qi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){be(e,n,l)}}function Ya(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(u){be(e,n,u)}}function en(e,n){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(u){be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){be(e,n,u)}else a.current=null}function Um(e){var n=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(u){be(e,e.return,u)}}function Dc(e,n,a){try{var l=e.stateNode;Ab(l,e.type,a,n),l[mt]=n}catch(u){be(e,e.return,u)}}function Lm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ai(e.type)||e.tag===4}function Mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ai(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ic(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Fl));else if(l!==4&&(l===27&&ai(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Ic(e,n,a),e=e.sibling;e!==null;)Ic(e,n,a),e=e.sibling}function Ll(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(l!==4&&(l===27&&ai(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ll(e,n,a),e=e.sibling;e!==null;)Ll(e,n,a),e=e.sibling}function zm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);$e(n,l,a),n[st]=e,n[mt]=a}catch(f){be(e,e.return,f)}}var En=!1,ke=!1,xc=!1,Hm=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function ab(e,n){if(e=e.containerInfo,sf=eo,e=Kd(e),Mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var p=0,_=-1,y=-1,w=0,O=0,I=e,R=null;t:for(;;){for(var N;I!==a||u!==0&&I.nodeType!==3||(_=p+u),I!==f||l!==0&&I.nodeType!==3||(y=p+l),I.nodeType===3&&(p+=I.nodeValue.length),(N=I.firstChild)!==null;)R=I,I=N;for(;;){if(I===e)break t;if(R===a&&++w===u&&(_=p),R===f&&++O===l&&(y=p),(N=I.nextSibling)!==null)break;I=R,R=I.parentNode}I=N}a=_===-1||y===-1?null:{start:_,end:y}}else a=null}a=a||{start:0,end:0}}else a=null;for(af={focusedElem:e,selectionRange:a},eo=!1,Ve=n;Ve!==null;)if(n=Ve,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Ve=e;else for(;Ve!==null;){switch(n=Ve,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,l=a.stateNode;try{var X=qi(a.type,u,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(X,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(G){be(a,a.return,G)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)of(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":of(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Ve=e;break}Ve=n.return}}function Bm(e,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Jn(e,a),l&4&&Ga(5,a);break;case 1:if(Jn(e,a),l&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(p){be(a,a.return,p)}else{var u=qi(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){be(a,a.return,p)}}l&64&&xm(a),l&512&&Ya(a,a.return);break;case 3:if(Jn(e,a),l&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ep(e,n)}catch(p){be(a,a.return,p)}}break;case 27:n===null&&l&4&&zm(a);case 26:case 5:Jn(e,a),n===null&&l&4&&Um(a),l&512&&Ya(a,a.return);break;case 12:Jn(e,a);break;case 13:Jn(e,a),l&4&&qm(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=pb.bind(null,a),Ib(e,a))));break;case 22:if(l=a.memoizedState!==null||En,!l){n=n!==null&&n.memoizedState!==null||ke,u=En;var f=ke;En=l,(ke=n)&&!f?$n(e,a,(a.subtreeFlags&8772)!==0):Jn(e,a),En=u,ke=f}break;case 30:break;default:Jn(e,a)}}function Pm(e){var n=e.alternate;n!==null&&(e.alternate=null,Pm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&hu(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,vt=!1;function bn(e,n,a){for(a=a.child;a!==null;)jm(e,n,a),a=a.sibling}function jm(e,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(ha,a)}catch{}switch(a.tag){case 26:ke||en(a,n),bn(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ke||en(a,n);var l=Ne,u=vt;ai(a.type)&&(Ne=a.stateNode,vt=!1),bn(e,n,a),er(a.stateNode),Ne=l,vt=u;break;case 5:ke||en(a,n);case 6:if(l=Ne,u=vt,Ne=null,bn(e,n,a),Ne=l,vt=u,Ne!==null)if(vt)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(a.stateNode)}catch(f){be(a,n,f)}else try{Ne.removeChild(a.stateNode)}catch(f){be(a,n,f)}break;case 18:Ne!==null&&(vt?(e=Ne,Og(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),or(e)):Og(Ne,a.stateNode));break;case 4:l=Ne,u=vt,Ne=a.stateNode.containerInfo,vt=!0,bn(e,n,a),Ne=l,vt=u;break;case 0:case 11:case 14:case 15:ke||Wn(2,a,n),ke||Wn(4,a,n),bn(e,n,a);break;case 1:ke||(en(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&km(a,n,l)),bn(e,n,a);break;case 21:bn(e,n,a);break;case 22:ke=(l=ke)||a.memoizedState!==null,bn(e,n,a),ke=l;break;default:bn(e,n,a)}}function qm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{or(e)}catch(a){be(n,n.return,a)}}function rb(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Hm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Hm),n;default:throw Error(r(435,e.tag))}}function kc(e,n){var a=rb(e);n.forEach(function(l){var u=mb.bind(null,e,l);a.has(l)||(a.add(l),l.then(u,u))})}function Nt(e,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l],f=e,p=n,_=p;e:for(;_!==null;){switch(_.tag){case 27:if(ai(_.type)){Ne=_.stateNode,vt=!1;break e}break;case 5:Ne=_.stateNode,vt=!1;break e;case 3:case 4:Ne=_.stateNode.containerInfo,vt=!0;break e}_=_.return}if(Ne===null)throw Error(r(160));jm(f,p,u),Ne=null,vt=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Vm(n,e),n=n.sibling}var Vt=null;function Vm(e,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Nt(n,e),Ot(e),l&4&&(Wn(3,e,e.return),Ga(3,e),Wn(5,e,e.return));break;case 1:Nt(n,e),Ot(e),l&512&&(ke||a===null||en(a,a.return)),l&64&&En&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var u=Vt;if(Nt(n,e),Ot(e),l&512&&(ke||a===null||en(a,a.return)),l&4){var f=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ma]||f[st]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(l),u.head.insertBefore(f,u.querySelector("head > title"))),$e(f,l,a),f[st]=e,je(f),l=f;break e;case"link":var p=zg("link","href",u).get(l+(a.href||""));if(p){for(var _=0;_<p.length;_++)if(f=p[_],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){p.splice(_,1);break t}}f=u.createElement(l),$e(f,l,a),u.head.appendChild(f);break;case"meta":if(p=zg("meta","content",u).get(l+(a.content||""))){for(_=0;_<p.length;_++)if(f=p[_],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){p.splice(_,1);break t}}f=u.createElement(l),$e(f,l,a),u.head.appendChild(f);break;default:throw Error(r(468,l))}f[st]=e,je(f),l=f}e.stateNode=l}else Hg(u,e.type,e.stateNode);else e.stateNode=Lg(u,l,e.memoizedProps);else f!==l?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,l===null?Hg(u,e.type,e.stateNode):Lg(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Dc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Nt(n,e),Ot(e),l&512&&(ke||a===null||en(a,a.return)),a!==null&&l&4&&Dc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Nt(n,e),Ot(e),l&512&&(ke||a===null||en(a,a.return)),e.flags&32){u=e.stateNode;try{ps(u,"")}catch(N){be(e,e.return,N)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,Dc(e,u,a!==null?a.memoizedProps:u)),l&1024&&(xc=!0);break;case 6:if(Nt(n,e),Ot(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(N){be(e,e.return,N)}}break;case 3:if(Wl=null,u=Vt,Vt=Kl(n.containerInfo),Nt(n,e),Vt=u,Ot(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{or(n.containerInfo)}catch(N){be(e,e.return,N)}xc&&(xc=!1,Gm(e));break;case 4:l=Vt,Vt=Kl(e.stateNode.containerInfo),Nt(n,e),Ot(e),Vt=l;break;case 12:Nt(n,e),Ot(e);break;case 13:Nt(n,e),Ot(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pc=Wt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,kc(e,l)));break;case 22:u=e.memoizedState!==null;var y=a!==null&&a.memoizedState!==null,w=En,O=ke;if(En=w||u,ke=O||y,Nt(n,e),ke=O,En=w,Ot(e),l&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||y||En||ke||Vi(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){y=a=n;try{if(f=y.stateNode,u)p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{_=y.stateNode;var I=y.memoizedProps.style,R=I!=null&&I.hasOwnProperty("display")?I.display:null;_.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(N){be(y,y.return,N)}}}else if(n.tag===6){if(a===null){y=n;try{y.stateNode.nodeValue=u?"":y.memoizedProps}catch(N){be(y,y.return,N)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,kc(e,a))));break;case 19:Nt(n,e),Ot(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,kc(e,l)));break;case 30:break;case 21:break;default:Nt(n,e),Ot(e)}}function Ot(e){var n=e.flags;if(n&2){try{for(var a,l=e.return;l!==null;){if(Lm(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Mc(e);Ll(e,f,u);break;case 5:var p=a.stateNode;a.flags&32&&(ps(p,""),a.flags&=-33);var _=Mc(e);Ll(e,_,p);break;case 3:case 4:var y=a.stateNode.containerInfo,w=Mc(e);Ic(e,w,y);break;default:throw Error(r(161))}}catch(O){be(e,e.return,O)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Gm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Jn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Bm(e,n.alternate,n),n=n.sibling}function Vi(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Wn(4,n,n.return),Vi(n);break;case 1:en(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&km(n,n.return,a),Vi(n);break;case 27:er(n.stateNode);case 26:case 5:en(n,n.return),Vi(n);break;case 22:n.memoizedState===null&&Vi(n);break;case 30:Vi(n);break;default:Vi(n)}e=e.sibling}}function $n(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,u=e,f=n,p=f.flags;switch(f.tag){case 0:case 11:case 15:$n(u,f,a),Ga(4,f);break;case 1:if($n(u,f,a),l=f,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(w){be(l,l.return,w)}if(l=f,u=l.updateQueue,u!==null){var _=l.stateNode;try{var y=u.shared.hiddenCallbacks;if(y!==null)for(u.shared.hiddenCallbacks=null,u=0;u<y.length;u++)yp(y[u],_)}catch(w){be(l,l.return,w)}}a&&p&64&&xm(f),Ya(f,f.return);break;case 27:zm(f);case 26:case 5:$n(u,f,a),a&&l===null&&p&4&&Um(f),Ya(f,f.return);break;case 12:$n(u,f,a);break;case 13:$n(u,f,a),a&&p&4&&qm(u,f);break;case 22:f.memoizedState===null&&$n(u,f,a),Ya(f,f.return);break;case 30:break;default:$n(u,f,a)}n=n.sibling}}function Uc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Da(a))}function Lc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Da(e))}function tn(e,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ym(e,n,a,l),n=n.sibling}function Ym(e,n,a,l){var u=n.flags;switch(n.tag){case 0:case 11:case 15:tn(e,n,a,l),u&2048&&Ga(9,n);break;case 1:tn(e,n,a,l);break;case 3:tn(e,n,a,l),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Da(e)));break;case 12:if(u&2048){tn(e,n,a,l),e=n.stateNode;try{var f=n.memoizedProps,p=f.id,_=f.onPostCommit;typeof _=="function"&&_(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){be(n,n.return,y)}}else tn(e,n,a,l);break;case 13:tn(e,n,a,l);break;case 23:break;case 22:f=n.stateNode,p=n.alternate,n.memoizedState!==null?f._visibility&2?tn(e,n,a,l):Qa(e,n):f._visibility&2?tn(e,n,a,l):(f._visibility|=2,xs(e,n,a,l,(n.subtreeFlags&10256)!==0)),u&2048&&Uc(p,n);break;case 24:tn(e,n,a,l),u&2048&&Lc(n.alternate,n);break;default:tn(e,n,a,l)}}function xs(e,n,a,l,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,p=n,_=a,y=l,w=p.flags;switch(p.tag){case 0:case 11:case 15:xs(f,p,_,y,u),Ga(8,p);break;case 23:break;case 22:var O=p.stateNode;p.memoizedState!==null?O._visibility&2?xs(f,p,_,y,u):Qa(f,p):(O._visibility|=2,xs(f,p,_,y,u)),u&&w&2048&&Uc(p.alternate,p);break;case 24:xs(f,p,_,y,u),u&&w&2048&&Lc(p.alternate,p);break;default:xs(f,p,_,y,u)}n=n.sibling}}function Qa(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,l=n,u=l.flags;switch(l.tag){case 22:Qa(a,l),u&2048&&Uc(l.alternate,l);break;case 24:Qa(a,l),u&2048&&Lc(l.alternate,l);break;default:Qa(a,l)}n=n.sibling}}var Fa=8192;function ks(e){if(e.subtreeFlags&Fa)for(e=e.child;e!==null;)Qm(e),e=e.sibling}function Qm(e){switch(e.tag){case 26:ks(e),e.flags&Fa&&e.memoizedState!==null&&Yb(Vt,e.memoizedState,e.memoizedProps);break;case 5:ks(e);break;case 3:case 4:var n=Vt;Vt=Kl(e.stateNode.containerInfo),ks(e),Vt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Fa,Fa=16777216,ks(e),Fa=n):ks(e));break;default:ks(e)}}function Fm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Xa(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];Ve=l,Km(l,e)}Fm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xm(e),e=e.sibling}function Xm(e){switch(e.tag){case 0:case 11:case 15:Xa(e),e.flags&2048&&Wn(9,e,e.return);break;case 3:Xa(e);break;case 12:Xa(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,zl(e)):Xa(e);break;default:Xa(e)}}function zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];Ve=l,Km(l,e)}Fm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Wn(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}e=e.sibling}}function Km(e,n){for(;Ve!==null;){var a=Ve;switch(a.tag){case 0:case 11:case 15:Wn(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Da(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ve=l;else e:for(a=e;Ve!==null;){l=Ve;var u=l.sibling,f=l.return;if(Pm(l),l===a){Ve=null;break e}if(u!==null){u.return=f,Ve=u;break e}Ve=f}}}var lb={getCacheForType:function(e){var n=at(ze),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},ob=typeof WeakMap=="function"?WeakMap:Map,pe=0,Te=null,se=null,ue=0,me=0,Dt=null,ei=!1,Us=!1,zc=!1,Sn=0,Me=0,ti=0,Gi=0,Hc=0,Pt=0,Ls=0,Ka=null,yt=null,Bc=!1,Pc=0,Hl=1/0,Bl=null,ni=null,Je=0,ii=null,zs=null,Hs=0,jc=0,qc=null,Zm=null,Za=0,Vc=null;function Mt(){if((pe&2)!==0&&ue!==0)return ue&-ue;if(D.T!==null){var e=As;return e!==0?e:Zc()}return hd()}function Wm(){Pt===0&&(Pt=(ue&536870912)===0||de?od():536870912);var e=Bt.current;return e!==null&&(e.flags|=32),Pt}function It(e,n,a){(e===Te&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(Bs(e,0),si(e,ue,Pt,!1)),pa(e,a),((pe&2)===0||e!==Te)&&(e===Te&&((pe&2)===0&&(Gi|=a),Me===4&&si(e,ue,Pt,!1)),nn(e))}function Jm(e,n,a){if((pe&6)!==0)throw Error(r(327));var l=!a&&(n&124)===0&&(n&e.expiredLanes)===0||da(e,n),u=l?fb(e,n):Qc(e,n,!0),f=l;do{if(u===0){Us&&!l&&si(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!ub(a)){u=Qc(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var _=e;u=Ka;var y=_.current.memoizedState.isDehydrated;if(y&&(Bs(_,p).flags|=256),p=Qc(_,p,!1),p!==2){if(zc&&!y){_.errorRecoveryDisabledLanes|=f,Gi|=f,u=4;break e}f=yt,yt=u,f!==null&&(yt===null?yt=f:yt.push.apply(yt,f))}u=p}if(f=!1,u!==2)continue}}if(u===1){Bs(e,0),si(e,n,0,!0);break}e:{switch(l=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:si(l,n,Pt,!ei);break e;case 2:yt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Pc+300-Wt(),10<u)){if(si(l,n,Pt,!ei),Zr(l,0,!0)!==0)break e;l.timeoutHandle=Rg($m.bind(null,l,a,yt,Bl,Bc,n,Pt,Gi,Ls,ei,f,2,-0,0),u);break e}$m(l,a,yt,Bl,Bc,n,Pt,Gi,Ls,ei,f,0,-0,0)}}break}while(!0);nn(e)}function $m(e,n,a,l,u,f,p,_,y,w,O,I,R,N){if(e.timeoutHandle=-1,I=n.subtreeFlags,(I&8192||(I&16785408)===16785408)&&(ir={stylesheets:null,count:0,unsuspend:Gb},Qm(n),I=Qb(),I!==null)){e.cancelPendingCommit=I(rg.bind(null,e,n,f,a,l,u,p,_,y,O,1,R,N)),si(e,f,p,!w);return}rg(e,n,f,a,l,u,p,_,y)}function ub(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var u=a[l],f=u.getSnapshot;u=u.value;try{if(!wt(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function si(e,n,a,l){n&=~Hc,n&=~Gi,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var u=n;0<u;){var f=31-At(u),p=1<<f;l[f]=-1,u&=~p}a!==0&&cd(e,a,n)}function Pl(){return(pe&6)===0?(Wa(0),!1):!0}function Gc(){if(se!==null){if(me===0)var e=se.return;else e=se,pn=Hi=null,lc(e),Ms=null,ja=0,e=se;for(;e!==null;)Im(e.alternate,e),e=e.return;se=null}}function Bs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Rb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Gc(),Te=e,se=a=fn(e.current,null),ue=n,me=0,Dt=null,ei=!1,Us=da(e,n),zc=!1,Ls=Pt=Hc=Gi=ti=Me=0,yt=Ka=null,Bc=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var u=31-At(l),f=1<<u;n|=e[u],l&=~f}return Sn=n,ol(),a}function eg(e,n){ee=null,D.H=Rl,n===Ia||n===_l?(n=_p(),me=3):n===pp?(n=_p(),me=4):me=n===vm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Dt=n,se===null&&(Me=1,Il(e,Ut(n,e.current)))}function tg(){var e=D.H;return D.H=Rl,e===null?Rl:e}function ng(){var e=D.A;return D.A=lb,e}function Yc(){Me=4,ei||(ue&4194048)!==ue&&Bt.current!==null||(Us=!0),(ti&134217727)===0&&(Gi&134217727)===0||Te===null||si(Te,ue,Pt,!1)}function Qc(e,n,a){var l=pe;pe|=2;var u=tg(),f=ng();(Te!==e||ue!==n)&&(Bl=null,Bs(e,n)),n=!1;var p=Me;e:do try{if(me!==0&&se!==null){var _=se,y=Dt;switch(me){case 8:Gc(),p=6;break e;case 3:case 2:case 9:case 6:Bt.current===null&&(n=!0);var w=me;if(me=0,Dt=null,Ps(e,_,y,w),a&&Us){p=0;break e}break;default:w=me,me=0,Dt=null,Ps(e,_,y,w)}}cb(),p=Me;break}catch(O){eg(e,O)}while(!0);return n&&e.shellSuspendCounter++,pn=Hi=null,pe=l,D.H=u,D.A=f,se===null&&(Te=null,ue=0,ol()),p}function cb(){for(;se!==null;)ig(se)}function fb(e,n){var a=pe;pe|=2;var l=tg(),u=ng();Te!==e||ue!==n?(Bl=null,Hl=Wt()+500,Bs(e,n)):Us=da(e,n);e:do try{if(me!==0&&se!==null){n=se;var f=Dt;t:switch(me){case 1:me=0,Dt=null,Ps(e,n,f,1);break;case 2:case 9:if(mp(f)){me=0,Dt=null,sg(n);break}n=function(){me!==2&&me!==9||Te!==e||(me=7),nn(e)},f.then(n,n);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:mp(f)?(me=0,Dt=null,sg(n)):(me=0,Dt=null,Ps(e,n,f,7));break;case 5:var p=null;switch(se.tag){case 26:p=se.memoizedState;case 5:case 27:var _=se;if(!p||Bg(p)){me=0,Dt=null;var y=_.sibling;if(y!==null)se=y;else{var w=_.return;w!==null?(se=w,jl(w)):se=null}break t}}me=0,Dt=null,Ps(e,n,f,5);break;case 6:me=0,Dt=null,Ps(e,n,f,6);break;case 8:Gc(),Me=6;break e;default:throw Error(r(462))}}hb();break}catch(O){eg(e,O)}while(!0);return pn=Hi=null,D.H=l,D.A=u,pe=a,se!==null?0:(Te=null,ue=0,ol(),Me)}function hb(){for(;se!==null&&!k0();)ig(se)}function ig(e){var n=Dm(e.alternate,e,Sn);e.memoizedProps=e.pendingProps,n===null?jl(e):se=n}function sg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Cm(a,n,n.pendingProps,n.type,void 0,ue);break;case 11:n=Cm(a,n,n.pendingProps,n.type.render,n.ref,ue);break;case 5:lc(n);default:Im(a,n),n=se=ap(n,Sn),n=Dm(a,n,Sn)}e.memoizedProps=e.pendingProps,n===null?jl(e):se=n}function Ps(e,n,a,l){pn=Hi=null,lc(n),Ms=null,ja=0;var u=n.return;try{if(tb(e,u,n,a,ue)){Me=1,Il(e,Ut(a,e.current)),se=null;return}}catch(f){if(u!==null)throw se=u,f;Me=1,Il(e,Ut(a,e.current)),se=null;return}n.flags&32768?(de||l===1?e=!0:Us||(ue&536870912)!==0?e=!1:(ei=e=!0,(l===2||l===9||l===3||l===6)&&(l=Bt.current,l!==null&&l.tag===13&&(l.flags|=16384))),ag(n,e)):jl(n)}function jl(e){var n=e;do{if((n.flags&32768)!==0){ag(n,ei);return}e=n.return;var a=ib(n.alternate,n,Sn);if(a!==null){se=a;return}if(n=n.sibling,n!==null){se=n;return}se=n=e}while(n!==null);Me===0&&(Me=5)}function ag(e,n){do{var a=sb(e.alternate,e);if(a!==null){a.flags&=32767,se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){se=e;return}se=e=a}while(e!==null);Me=6,se=null}function rg(e,n,a,l,u,f,p,_,y){e.cancelPendingCommit=null;do ql();while(Je!==0);if((pe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Lu,G0(e,a,f,p,_,y),e===Te&&(se=Te=null,ue=0),zs=n,ii=e,Hs=a,jc=f,qc=u,Zm=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,gb(Fr,function(){return fg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,u=H.p,H.p=2,p=pe,pe|=4;try{ab(e,n,a)}finally{pe=p,H.p=u,D.T=l}}Je=1,lg(),og(),ug()}}function lg(){if(Je===1){Je=0;var e=ii,n=zs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var l=H.p;H.p=2;var u=pe;pe|=4;try{Vm(n,e);var f=af,p=Kd(e.containerInfo),_=f.focusedElem,y=f.selectionRange;if(p!==_&&_&&_.ownerDocument&&Xd(_.ownerDocument.documentElement,_)){if(y!==null&&Mu(_)){var w=y.start,O=y.end;if(O===void 0&&(O=w),"selectionStart"in _)_.selectionStart=w,_.selectionEnd=Math.min(O,_.value.length);else{var I=_.ownerDocument||document,R=I&&I.defaultView||window;if(R.getSelection){var N=R.getSelection(),X=_.textContent.length,G=Math.min(y.start,X),ve=y.end===void 0?G:Math.min(y.end,X);!N.extend&&G>ve&&(p=ve,ve=G,G=p);var T=Fd(_,G),S=Fd(_,ve);if(T&&S&&(N.rangeCount!==1||N.anchorNode!==T.node||N.anchorOffset!==T.offset||N.focusNode!==S.node||N.focusOffset!==S.offset)){var A=I.createRange();A.setStart(T.node,T.offset),N.removeAllRanges(),G>ve?(N.addRange(A),N.extend(S.node,S.offset)):(A.setEnd(S.node,S.offset),N.addRange(A))}}}}for(I=[],N=_;N=N.parentNode;)N.nodeType===1&&I.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<I.length;_++){var M=I[_];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}eo=!!sf,af=sf=null}finally{pe=u,H.p=l,D.T=a}}e.current=n,Je=2}}function og(){if(Je===2){Je=0;var e=ii,n=zs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var l=H.p;H.p=2;var u=pe;pe|=4;try{Bm(e,n.alternate,n)}finally{pe=u,H.p=l,D.T=a}}Je=3}}function ug(){if(Je===4||Je===3){Je=0,U0();var e=ii,n=zs,a=Hs,l=Zm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Je=5:(Je=0,zs=ii=null,cg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ni=null),cu(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(ha,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=D.T,u=H.p,H.p=2,D.T=null;try{for(var f=e.onRecoverableError,p=0;p<l.length;p++){var _=l[p];f(_.value,{componentStack:_.stack})}}finally{D.T=n,H.p=u}}(Hs&3)!==0&&ql(),nn(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Vc?Za++:(Za=0,Vc=e):Za=0,Wa(0)}}function cg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Da(n)))}function ql(e){return lg(),og(),ug(),fg()}function fg(){if(Je!==5)return!1;var e=ii,n=jc;jc=0;var a=cu(Hs),l=D.T,u=H.p;try{H.p=32>a?32:a,D.T=null,a=qc,qc=null;var f=ii,p=Hs;if(Je=0,zs=ii=null,Hs=0,(pe&6)!==0)throw Error(r(331));var _=pe;if(pe|=4,Xm(f.current),Ym(f,f.current,p,a),pe=_,Wa(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(ha,f)}catch{}return!0}finally{H.p=u,D.T=l,cg(e,n)}}function hg(e,n,a){n=Ut(a,n),n=bc(e.stateNode,n,2),e=Fn(e,n,2),e!==null&&(pa(e,2),nn(e))}function be(e,n,a){if(e.tag===3)hg(e,e,a);else for(;n!==null;){if(n.tag===3){hg(n,e,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ni===null||!ni.has(l))){e=Ut(a,e),a=gm(2),l=Fn(n,a,2),l!==null&&(_m(a,l,n,e),pa(l,2),nn(l));break}}n=n.return}}function Fc(e,n,a){var l=e.pingCache;if(l===null){l=e.pingCache=new ob;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(a)||(zc=!0,u.add(a),e=db.bind(null,e,n,a),n.then(e,e))}function db(e,n,a){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Te===e&&(ue&a)===a&&(Me===4||Me===3&&(ue&62914560)===ue&&300>Wt()-Pc?(pe&2)===0&&Bs(e,0):Hc|=a,Ls===ue&&(Ls=0)),nn(e)}function dg(e,n){n===0&&(n=ud()),e=bs(e,n),e!==null&&(pa(e,n),nn(e))}function pb(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),dg(e,a)}function mb(e,n){var a=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),dg(e,a)}function gb(e,n){return ru(e,n)}var Vl=null,js=null,Xc=!1,Gl=!1,Kc=!1,Yi=0;function nn(e){e!==js&&e.next===null&&(js===null?Vl=js=e:js=js.next=e),Gl=!0,Xc||(Xc=!0,vb())}function Wa(e,n){if(!Kc&&Gl){Kc=!0;do for(var a=!1,l=Vl;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var f=0;else{var p=l.suspendedLanes,_=l.pingedLanes;f=(1<<31-At(42|e)+1)-1,f&=u&~(p&~_),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,_g(l,f))}else f=ue,f=Zr(l,l===Te?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||da(l,f)||(a=!0,_g(l,f));l=l.next}while(a);Kc=!1}}function _b(){pg()}function pg(){Gl=Xc=!1;var e=0;Yi!==0&&(wb()&&(e=Yi),Yi=0);for(var n=Wt(),a=null,l=Vl;l!==null;){var u=l.next,f=mg(l,n);f===0?(l.next=null,a===null?Vl=u:a.next=u,u===null&&(js=a)):(a=l,(e!==0||(f&3)!==0)&&(Gl=!0)),l=u}Wa(e)}function mg(e,n){for(var a=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var p=31-At(f),_=1<<p,y=u[p];y===-1?((_&a)===0||(_&l)!==0)&&(u[p]=V0(_,n)):y<=n&&(e.expiredLanes|=_),f&=~_}if(n=Te,a=ue,a=Zr(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===n&&(me===2||me===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&lu(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||da(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(l!==null&&lu(l),cu(a)){case 2:case 8:a=rd;break;case 32:a=Fr;break;case 268435456:a=ld;break;default:a=Fr}return l=gg.bind(null,e),a=ru(a,l),e.callbackPriority=n,e.callbackNode=a,n}return l!==null&&l!==null&&lu(l),e.callbackPriority=2,e.callbackNode=null,2}function gg(e,n){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ql()&&e.callbackNode!==a)return null;var l=ue;return l=Zr(e,e===Te?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Jm(e,l,n),mg(e,Wt()),e.callbackNode!=null&&e.callbackNode===a?gg.bind(null,e):null)}function _g(e,n){if(ql())return null;Jm(e,n,!0)}function vb(){Nb(function(){(pe&6)!==0?ru(ad,_b):pg()})}function Zc(){return Yi===0&&(Yi=od()),Yi}function vg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tl(""+e)}function yg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function yb(e,n,a,l,u){if(n==="submit"&&a&&a.stateNode===u){var f=vg((u[mt]||null).action),p=l.submitter;p&&(n=(n=p[mt]||null)?vg(n.formAction):p.getAttribute("formAction"),n!==null&&(f=n,p=null));var _=new al("action","action",null,l,u);e.push({event:_,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Yi!==0){var y=p?yg(u,p):new FormData(u);gc(a,{pending:!0,data:y,method:u.method,action:f},null,y)}}else typeof f=="function"&&(_.preventDefault(),y=p?yg(u,p):new FormData(u),gc(a,{pending:!0,data:y,method:u.method,action:f},f,y))},currentTarget:u}]})}}for(var Wc=0;Wc<Uu.length;Wc++){var Jc=Uu[Wc],Eb=Jc.toLowerCase(),bb=Jc[0].toUpperCase()+Jc.slice(1);qt(Eb,"on"+bb)}qt(Jd,"onAnimationEnd"),qt($d,"onAnimationIteration"),qt(ep,"onAnimationStart"),qt("dblclick","onDoubleClick"),qt("focusin","onFocus"),qt("focusout","onBlur"),qt(HE,"onTransitionRun"),qt(BE,"onTransitionStart"),qt(PE,"onTransitionCancel"),qt(tp,"onTransitionEnd"),fs("onMouseEnter",["mouseout","mouseover"]),fs("onMouseLeave",["mouseout","mouseover"]),fs("onPointerEnter",["pointerout","pointerover"]),fs("onPointerLeave",["pointerout","pointerover"]),Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ja));function Eg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],u=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var p=l.length-1;0<=p;p--){var _=l[p],y=_.instance,w=_.currentTarget;if(_=_.listener,y!==f&&u.isPropagationStopped())break e;f=_,u.currentTarget=w;try{f(u)}catch(O){Ml(O)}u.currentTarget=null,f=y}else for(p=0;p<l.length;p++){if(_=l[p],y=_.instance,w=_.currentTarget,_=_.listener,y!==f&&u.isPropagationStopped())break e;f=_,u.currentTarget=w;try{f(u)}catch(O){Ml(O)}u.currentTarget=null,f=y}}}}function ae(e,n){var a=n[fu];a===void 0&&(a=n[fu]=new Set);var l=e+"__bubble";a.has(l)||(bg(n,e,2,!1),a.add(l))}function $c(e,n,a){var l=0;n&&(l|=4),bg(a,e,l,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function ef(e){if(!e[Yl]){e[Yl]=!0,pd.forEach(function(a){a!=="selectionchange"&&(Sb.has(a)||$c(a,!1,e),$c(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,$c("selectionchange",!1,n))}}function bg(e,n,a,l){switch(Yg(n)){case 2:var u=Kb;break;case 8:u=Zb;break;default:u=mf}a=u.bind(null,n,a,e),u=void 0,!Su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function tf(e,n,a,l,u){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var p=l.tag;if(p===3||p===4){var _=l.stateNode.containerInfo;if(_===u)break;if(p===4)for(p=l.return;p!==null;){var y=p.tag;if((y===3||y===4)&&p.stateNode.containerInfo===u)return;p=p.return}for(;_!==null;){if(p=os(_),p===null)return;if(y=p.tag,y===5||y===6||y===26||y===27){l=f=p;continue e}_=_.parentNode}}l=l.return}Nd(function(){var w=f,O=Eu(a),I=[];e:{var R=np.get(e);if(R!==void 0){var N=al,X=e;switch(e){case"keypress":if(il(a)===0)break e;case"keydown":case"keyup":N=gE;break;case"focusin":X="focus",N=wu;break;case"focusout":X="blur",N=wu;break;case"beforeblur":case"afterblur":N=wu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=sE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=yE;break;case Jd:case $d:case ep:N=lE;break;case tp:N=bE;break;case"scroll":case"scrollend":N=nE;break;case"wheel":N=TE;break;case"copy":case"cut":case"paste":N=uE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=xd;break;case"toggle":case"beforetoggle":N=AE}var G=(n&4)!==0,ve=!G&&(e==="scroll"||e==="scrollend"),T=G?R!==null?R+"Capture":null:R;G=[];for(var S=w,A;S!==null;){var M=S;if(A=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||A===null||T===null||(M=_a(S,T),M!=null&&G.push($a(S,M,A))),ve)break;S=S.return}0<G.length&&(R=new N(R,X,null,a,O),I.push({event:R,listeners:G}))}}if((n&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",R&&a!==yu&&(X=a.relatedTarget||a.fromElement)&&(os(X)||X[ls]))break e;if((N||R)&&(R=O.window===O?O:(R=O.ownerDocument)?R.defaultView||R.parentWindow:window,N?(X=a.relatedTarget||a.toElement,N=w,X=X?os(X):null,X!==null&&(ve=c(X),G=X.tag,X!==ve||G!==5&&G!==27&&G!==6)&&(X=null)):(N=null,X=w),N!==X)){if(G=Md,M="onMouseLeave",T="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(G=xd,M="onPointerLeave",T="onPointerEnter",S="pointer"),ve=N==null?R:ga(N),A=X==null?R:ga(X),R=new G(M,S+"leave",N,a,O),R.target=ve,R.relatedTarget=A,M=null,os(O)===w&&(G=new G(T,S+"enter",X,a,O),G.target=A,G.relatedTarget=ve,M=G),ve=M,N&&X)t:{for(G=N,T=X,S=0,A=G;A;A=qs(A))S++;for(A=0,M=T;M;M=qs(M))A++;for(;0<S-A;)G=qs(G),S--;for(;0<A-S;)T=qs(T),A--;for(;S--;){if(G===T||T!==null&&G===T.alternate)break t;G=qs(G),T=qs(T)}G=null}else G=null;N!==null&&Sg(I,R,N,G,!1),X!==null&&ve!==null&&Sg(I,ve,X,G,!0)}}e:{if(R=w?ga(w):window,N=R.nodeName&&R.nodeName.toLowerCase(),N==="select"||N==="input"&&R.type==="file")var P=jd;else if(Bd(R))if(qd)P=UE;else{P=xE;var te=IE}else N=R.nodeName,!N||N.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?w&&vu(w.elementType)&&(P=jd):P=kE;if(P&&(P=P(e,w))){Pd(I,P,a,O);break e}te&&te(e,R,w),e==="focusout"&&w&&R.type==="number"&&w.memoizedProps.value!=null&&_u(R,"number",R.value)}switch(te=w?ga(w):window,e){case"focusin":(Bd(te)||te.contentEditable==="true")&&(vs=te,Iu=w,Aa=null);break;case"focusout":Aa=Iu=vs=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,Zd(I,a,O);break;case"selectionchange":if(zE)break;case"keydown":case"keyup":Zd(I,a,O)}var q;if(Nu)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else _s?zd(e,a)&&(Y="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Y="onCompositionStart");Y&&(kd&&a.locale!=="ko"&&(_s||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&_s&&(q=Od()):(Vn=O,Tu="value"in Vn?Vn.value:Vn.textContent,_s=!0)),te=Ql(w,Y),0<te.length&&(Y=new Id(Y,e,null,a,O),I.push({event:Y,listeners:te}),q?Y.data=q:(q=Hd(a),q!==null&&(Y.data=q)))),(q=RE?NE(e,a):OE(e,a))&&(Y=Ql(w,"onBeforeInput"),0<Y.length&&(te=new Id("onBeforeInput","beforeinput",null,a,O),I.push({event:te,listeners:Y}),te.data=q)),yb(I,e,w,a,O)}Eg(I,n)})}function $a(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ql(e,n){for(var a=n+"Capture",l=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=_a(e,a),u!=null&&l.unshift($a(e,u,f)),u=_a(e,n),u!=null&&l.push($a(e,u,f))),e.tag===3)return l;e=e.return}return[]}function qs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Sg(e,n,a,l,u){for(var f=n._reactName,p=[];a!==null&&a!==l;){var _=a,y=_.alternate,w=_.stateNode;if(_=_.tag,y!==null&&y===l)break;_!==5&&_!==26&&_!==27||w===null||(y=w,u?(w=_a(a,f),w!=null&&p.unshift($a(a,w,y))):u||(w=_a(a,f),w!=null&&p.push($a(a,w,y)))),a=a.return}p.length!==0&&e.push({event:n,listeners:p})}var Tb=/\r\n?/g,Cb=/\u0000|\uFFFD/g;function Tg(e){return(typeof e=="string"?e:""+e).replace(Tb,`
`).replace(Cb,"")}function Cg(e,n){return n=Tg(n),Tg(e)===n}function Fl(){}function _e(e,n,a,l,u,f){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||ps(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&ps(e,""+l);break;case"className":Jr(e,"class",l);break;case"tabIndex":Jr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Jr(e,a,l);break;case"style":wd(e,l,f);break;case"data":if(n!=="object"){Jr(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=tl(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&_e(e,n,"name",u.name,u,null),_e(e,n,"formEncType",u.formEncType,u,null),_e(e,n,"formMethod",u.formMethod,u,null),_e(e,n,"formTarget",u.formTarget,u,null)):(_e(e,n,"encType",u.encType,u,null),_e(e,n,"method",u.method,u,null),_e(e,n,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=tl(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Fl);break;case"onScroll":l!=null&&ae("scroll",e);break;case"onScrollEnd":l!=null&&ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=tl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ae("beforetoggle",e),ae("toggle",e),Wr(e,"popover",l);break;case"xlinkActuate":un(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":un(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":un(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":un(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":un(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":un(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":un(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":un(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":un(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Wr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=eE.get(a)||a,Wr(e,a,l))}}function nf(e,n,a,l,u,f){switch(a){case"style":wd(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ps(e,l):(typeof l=="number"||typeof l=="bigint")&&ps(e,""+l);break;case"onScroll":l!=null&&ae("scroll",e);break;case"onScrollEnd":l!=null&&ae("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Fl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!md.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[mt]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof l=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,l,u);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Wr(e,a,l)}}}function $e(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ae("error",e),ae("load",e);var l=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var p=a[f];if(p!=null)switch(f){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:_e(e,n,f,p,a,null)}}u&&_e(e,n,"srcSet",a.srcSet,a,null),l&&_e(e,n,"src",a.src,a,null);return;case"input":ae("invalid",e);var _=f=p=u=null,y=null,w=null;for(l in a)if(a.hasOwnProperty(l)){var O=a[l];if(O!=null)switch(l){case"name":u=O;break;case"type":p=O;break;case"checked":y=O;break;case"defaultChecked":w=O;break;case"value":f=O;break;case"defaultValue":_=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,n));break;default:_e(e,n,l,O,a,null)}}Sd(e,f,_,y,w,p,u,!1),$r(e);return;case"select":ae("invalid",e),l=p=f=null;for(u in a)if(a.hasOwnProperty(u)&&(_=a[u],_!=null))switch(u){case"value":f=_;break;case"defaultValue":p=_;break;case"multiple":l=_;default:_e(e,n,u,_,a,null)}n=f,a=p,e.multiple=!!l,n!=null?ds(e,!!l,n,!1):a!=null&&ds(e,!!l,a,!0);return;case"textarea":ae("invalid",e),f=u=l=null;for(p in a)if(a.hasOwnProperty(p)&&(_=a[p],_!=null))switch(p){case"value":l=_;break;case"defaultValue":u=_;break;case"children":f=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(91));break;default:_e(e,n,p,_,a,null)}Cd(e,l,u,f),$r(e);return;case"option":for(y in a)if(a.hasOwnProperty(y)&&(l=a[y],l!=null))switch(y){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:_e(e,n,y,l,a,null)}return;case"dialog":ae("beforetoggle",e),ae("toggle",e),ae("cancel",e),ae("close",e);break;case"iframe":case"object":ae("load",e);break;case"video":case"audio":for(l=0;l<Ja.length;l++)ae(Ja[l],e);break;case"image":ae("error",e),ae("load",e);break;case"details":ae("toggle",e);break;case"embed":case"source":case"link":ae("error",e),ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:_e(e,n,w,l,a,null)}return;default:if(vu(n)){for(O in a)a.hasOwnProperty(O)&&(l=a[O],l!==void 0&&nf(e,n,O,l,a,void 0));return}}for(_ in a)a.hasOwnProperty(_)&&(l=a[_],l!=null&&_e(e,n,_,l,a,null))}function Ab(e,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,p=null,_=null,y=null,w=null,O=null;for(N in a){var I=a[N];if(a.hasOwnProperty(N)&&I!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":y=I;default:l.hasOwnProperty(N)||_e(e,n,N,null,l,I)}}for(var R in l){var N=l[R];if(I=a[R],l.hasOwnProperty(R)&&(N!=null||I!=null))switch(R){case"type":f=N;break;case"name":u=N;break;case"checked":w=N;break;case"defaultChecked":O=N;break;case"value":p=N;break;case"defaultValue":_=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(137,n));break;default:N!==I&&_e(e,n,R,N,l,I)}}gu(e,p,_,y,w,O,f,u);return;case"select":N=p=_=R=null;for(f in a)if(y=a[f],a.hasOwnProperty(f)&&y!=null)switch(f){case"value":break;case"multiple":N=y;default:l.hasOwnProperty(f)||_e(e,n,f,null,l,y)}for(u in l)if(f=l[u],y=a[u],l.hasOwnProperty(u)&&(f!=null||y!=null))switch(u){case"value":R=f;break;case"defaultValue":_=f;break;case"multiple":p=f;default:f!==y&&_e(e,n,u,f,l,y)}n=_,a=p,l=N,R!=null?ds(e,!!a,R,!1):!!l!=!!a&&(n!=null?ds(e,!!a,n,!0):ds(e,!!a,a?[]:"",!1));return;case"textarea":N=R=null;for(_ in a)if(u=a[_],a.hasOwnProperty(_)&&u!=null&&!l.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:_e(e,n,_,null,l,u)}for(p in l)if(u=l[p],f=a[p],l.hasOwnProperty(p)&&(u!=null||f!=null))switch(p){case"value":R=u;break;case"defaultValue":N=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&_e(e,n,p,u,l,f)}Td(e,R,N);return;case"option":for(var X in a)if(R=a[X],a.hasOwnProperty(X)&&R!=null&&!l.hasOwnProperty(X))switch(X){case"selected":e.selected=!1;break;default:_e(e,n,X,null,l,R)}for(y in l)if(R=l[y],N=a[y],l.hasOwnProperty(y)&&R!==N&&(R!=null||N!=null))switch(y){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:_e(e,n,y,R,l,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var G in a)R=a[G],a.hasOwnProperty(G)&&R!=null&&!l.hasOwnProperty(G)&&_e(e,n,G,null,l,R);for(w in l)if(R=l[w],N=a[w],l.hasOwnProperty(w)&&R!==N&&(R!=null||N!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,n));break;default:_e(e,n,w,R,l,N)}return;default:if(vu(n)){for(var ve in a)R=a[ve],a.hasOwnProperty(ve)&&R!==void 0&&!l.hasOwnProperty(ve)&&nf(e,n,ve,void 0,l,R);for(O in l)R=l[O],N=a[O],!l.hasOwnProperty(O)||R===N||R===void 0&&N===void 0||nf(e,n,O,R,l,N);return}}for(var T in a)R=a[T],a.hasOwnProperty(T)&&R!=null&&!l.hasOwnProperty(T)&&_e(e,n,T,null,l,R);for(I in l)R=l[I],N=a[I],!l.hasOwnProperty(I)||R===N||R==null&&N==null||_e(e,n,I,R,l,N)}var sf=null,af=null;function Xl(e){return e.nodeType===9?e:e.ownerDocument}function Ag(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function rf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var lf=null;function wb(){var e=window.event;return e&&e.type==="popstate"?e===lf?!1:(lf=e,!0):(lf=null,!1)}var Rg=typeof setTimeout=="function"?setTimeout:void 0,Rb=typeof clearTimeout=="function"?clearTimeout:void 0,Ng=typeof Promise=="function"?Promise:void 0,Nb=typeof queueMicrotask=="function"?queueMicrotask:typeof Ng<"u"?function(e){return Ng.resolve(null).then(e).catch(Ob)}:Rg;function Ob(e){setTimeout(function(){throw e})}function ai(e){return e==="head"}function Og(e,n){var a=n,l=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<l&&8>l){a=l;var p=e.ownerDocument;if(a&1&&er(p.documentElement),a&2&&er(p.body),a&4)for(a=p.head,er(a),p=a.firstChild;p;){var _=p.nextSibling,y=p.nodeName;p[ma]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&p.rel.toLowerCase()==="stylesheet"||a.removeChild(p),p=_}}if(u===0){e.removeChild(f),or(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:l=a.charCodeAt(0)-48;else l=0;a=f}while(a);or(n)}function of(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":of(a),hu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Db(e,n,a,l){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ma])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Gt(e.nextSibling),e===null)break}return null}function Mb(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Gt(e.nextSibling),e===null))return null;return e}function uf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Ib(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var l=function(){n(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Gt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var cf=null;function Dg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Mg(e,n,a){switch(n=Xl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function er(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);hu(e)}var jt=new Map,Ig=new Set;function Kl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Tn=H.d;H.d={f:xb,r:kb,D:Ub,C:Lb,L:zb,m:Hb,X:Pb,S:Bb,M:jb};function xb(){var e=Tn.f(),n=Pl();return e||n}function kb(e){var n=us(e);n!==null&&n.tag===5&&n.type==="form"?Jp(n):Tn.r(e)}var Vs=typeof document>"u"?null:document;function xg(e,n,a){var l=Vs;if(l&&typeof n=="string"&&n){var u=kt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ig.has(u)||(Ig.add(u),e={rel:e,crossOrigin:a,href:n},l.querySelector(u)===null&&(n=l.createElement("link"),$e(n,"link",e),je(n),l.head.appendChild(n)))}}function Ub(e){Tn.D(e),xg("dns-prefetch",e,null)}function Lb(e,n){Tn.C(e,n),xg("preconnect",e,n)}function zb(e,n,a){Tn.L(e,n,a);var l=Vs;if(l&&e&&n){var u='link[rel="preload"][as="'+kt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+kt(a.imageSizes)+'"]')):u+='[href="'+kt(e)+'"]';var f=u;switch(n){case"style":f=Gs(e);break;case"script":f=Ys(e)}jt.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),jt.set(f,e),l.querySelector(u)!==null||n==="style"&&l.querySelector(tr(f))||n==="script"&&l.querySelector(nr(f))||(n=l.createElement("link"),$e(n,"link",e),je(n),l.head.appendChild(n)))}}function Hb(e,n){Tn.m(e,n);var a=Vs;if(a&&e){var l=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+kt(l)+'"][href="'+kt(e)+'"]',f=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ys(e)}if(!jt.has(f)&&(e=v({rel:"modulepreload",href:e},n),jt.set(f,e),a.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(nr(f)))return}l=a.createElement("link"),$e(l,"link",e),je(l),a.head.appendChild(l)}}}function Bb(e,n,a){Tn.S(e,n,a);var l=Vs;if(l&&e){var u=cs(l).hoistableStyles,f=Gs(e);n=n||"default";var p=u.get(f);if(!p){var _={loading:0,preload:null};if(p=l.querySelector(tr(f)))_.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=jt.get(f))&&ff(e,a);var y=p=l.createElement("link");je(y),$e(y,"link",e),y._p=new Promise(function(w,O){y.onload=w,y.onerror=O}),y.addEventListener("load",function(){_.loading|=1}),y.addEventListener("error",function(){_.loading|=2}),_.loading|=4,Zl(p,n,l)}p={type:"stylesheet",instance:p,count:1,state:_},u.set(f,p)}}}function Pb(e,n){Tn.X(e,n);var a=Vs;if(a&&e){var l=cs(a).hoistableScripts,u=Ys(e),f=l.get(u);f||(f=a.querySelector(nr(u)),f||(e=v({src:e,async:!0},n),(n=jt.get(u))&&hf(e,n),f=a.createElement("script"),je(f),$e(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function jb(e,n){Tn.M(e,n);var a=Vs;if(a&&e){var l=cs(a).hoistableScripts,u=Ys(e),f=l.get(u);f||(f=a.querySelector(nr(u)),f||(e=v({src:e,async:!0,type:"module"},n),(n=jt.get(u))&&hf(e,n),f=a.createElement("script"),je(f),$e(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function kg(e,n,a,l){var u=(u=Z.current)?Kl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Gs(a.href),a=cs(u).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Gs(a.href);var f=cs(u).hoistableStyles,p=f.get(e);if(p||(u=u.ownerDocument||u,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,p),(f=u.querySelector(tr(e)))&&!f._p&&(p.instance=f,p.state.loading=5),jt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},jt.set(e,a),f||qb(u,e,a,p.state))),n&&l===null)throw Error(r(528,""));return p}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ys(a),a=cs(u).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Gs(e){return'href="'+kt(e)+'"'}function tr(e){return'link[rel="stylesheet"]['+e+"]"}function Ug(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function qb(e,n,a,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),$e(n,"link",a),je(n),e.head.appendChild(n))}function Ys(e){return'[src="'+kt(e)+'"]'}function nr(e){return"script[async]"+e}function Lg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+kt(a.href)+'"]');if(l)return n.instance=l,je(l),l;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),je(l),$e(l,"style",u),Zl(l,a.precedence,e),n.instance=l;case"stylesheet":u=Gs(a.href);var f=e.querySelector(tr(u));if(f)return n.state.loading|=4,n.instance=f,je(f),f;l=Ug(a),(u=jt.get(u))&&ff(l,u),f=(e.ownerDocument||e).createElement("link"),je(f);var p=f;return p._p=new Promise(function(_,y){p.onload=_,p.onerror=y}),$e(f,"link",l),n.state.loading|=4,Zl(f,a.precedence,e),n.instance=f;case"script":return f=Ys(a.src),(u=e.querySelector(nr(f)))?(n.instance=u,je(u),u):(l=a,(u=jt.get(f))&&(l=v({},a),hf(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),je(u),$e(u,"link",l),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Zl(l,a.precedence,e));return n.instance}function Zl(e,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,f=u,p=0;p<l.length;p++){var _=l[p];if(_.dataset.precedence===n)f=_;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ff(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function hf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Wl=null;function zg(e,n,a){if(Wl===null){var l=new Map,u=Wl=new Map;u.set(a,l)}else u=Wl,l=u.get(a),l||(l=new Map,u.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ma]||f[st]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var p=f.getAttribute(n)||"";p=e+p;var _=l.get(p);_?_.push(f):l.set(p,[f])}}return l}function Hg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Vb(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Bg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ir=null;function Gb(){}function Yb(e,n,a){if(ir===null)throw Error(r(475));var l=ir;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Gs(a.href),f=e.querySelector(tr(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Jl.bind(l),e.then(l,l)),n.state.loading|=4,n.instance=f,je(f);return}f=e.ownerDocument||e,a=Ug(a),(u=jt.get(u))&&ff(a,u),f=f.createElement("link"),je(f);var p=f;p._p=new Promise(function(_,y){p.onload=_,p.onerror=y}),$e(f,"link",a),n.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=Jl.bind(l),e.addEventListener("load",n),e.addEventListener("error",n))}}function Qb(){if(ir===null)throw Error(r(475));var e=ir;return e.stylesheets&&e.count===0&&df(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&df(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Jl(){if(this.count--,this.count===0){if(this.stylesheets)df(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $l=null;function df(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$l=new Map,n.forEach(Fb,e),$l=null,Jl.call(e))}function Fb(e,n){if(!(n.state.loading&4)){var a=$l.get(e);if(a)var l=a.get(null);else{a=new Map,$l.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var p=u[f];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),l=p)}l&&a.set(null,l)}u=n.instance,p=u.getAttribute("data-precedence"),f=a.get(p)||l,f===l&&a.set(null,u),a.set(p,u),this.count++,l=Jl.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var sr={$$typeof:we,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function Xb(e,n,a,l,u,f,p,_){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ou(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ou(0),this.hiddenUpdates=ou(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=_,this.incompleteTransitions=new Map}function Pg(e,n,a,l,u,f,p,_,y,w,O,I){return e=new Xb(e,n,a,p,_,y,w,I),n=1,f===!0&&(n|=24),f=Rt(3,null,null,n),e.current=f,f.stateNode=e,n=Fu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:a,cache:n},Wu(f),e}function jg(e){return e?(e=Ss,e):Ss}function qg(e,n,a,l,u,f){u=jg(u),l.context===null?l.context=u:l.pendingContext=u,l=Qn(n),l.payload={element:a},f=f===void 0?null:f,f!==null&&(l.callback=f),a=Fn(e,l,n),a!==null&&(It(a,e,n),ka(a,e,n))}function Vg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function pf(e,n){Vg(e,n),(e=e.alternate)&&Vg(e,n)}function Gg(e){if(e.tag===13){var n=bs(e,67108864);n!==null&&It(n,e,67108864),pf(e,67108864)}}var eo=!0;function Kb(e,n,a,l){var u=D.T;D.T=null;var f=H.p;try{H.p=2,mf(e,n,a,l)}finally{H.p=f,D.T=u}}function Zb(e,n,a,l){var u=D.T;D.T=null;var f=H.p;try{H.p=8,mf(e,n,a,l)}finally{H.p=f,D.T=u}}function mf(e,n,a,l){if(eo){var u=gf(l);if(u===null)tf(e,n,l,to,a),Qg(e,l);else if(Jb(u,e,n,a,l))l.stopPropagation();else if(Qg(e,l),n&4&&-1<Wb.indexOf(e)){for(;u!==null;){var f=us(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var p=Ni(f.pendingLanes);if(p!==0){var _=f;for(_.pendingLanes|=2,_.entangledLanes|=2;p;){var y=1<<31-At(p);_.entanglements[1]|=y,p&=~y}nn(f),(pe&6)===0&&(Hl=Wt()+500,Wa(0))}}break;case 13:_=bs(f,2),_!==null&&It(_,f,2),Pl(),pf(f,2)}if(f=gf(l),f===null&&tf(e,n,l,to,a),f===u)break;u=f}u!==null&&l.stopPropagation()}else tf(e,n,l,null,a)}}function gf(e){return e=Eu(e),_f(e)}var to=null;function _f(e){if(to=null,e=os(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return to=e,null}function Yg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(L0()){case ad:return 2;case rd:return 8;case Fr:case z0:return 32;case ld:return 268435456;default:return 32}default:return 32}}var vf=!1,ri=null,li=null,oi=null,ar=new Map,rr=new Map,ui=[],Wb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qg(e,n){switch(e){case"focusin":case"focusout":ri=null;break;case"dragenter":case"dragleave":li=null;break;case"mouseover":case"mouseout":oi=null;break;case"pointerover":case"pointerout":ar.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(n.pointerId)}}function lr(e,n,a,l,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},n!==null&&(n=us(n),n!==null&&Gg(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Jb(e,n,a,l,u){switch(n){case"focusin":return ri=lr(ri,e,n,a,l,u),!0;case"dragenter":return li=lr(li,e,n,a,l,u),!0;case"mouseover":return oi=lr(oi,e,n,a,l,u),!0;case"pointerover":var f=u.pointerId;return ar.set(f,lr(ar.get(f)||null,e,n,a,l,u)),!0;case"gotpointercapture":return f=u.pointerId,rr.set(f,lr(rr.get(f)||null,e,n,a,l,u)),!0}return!1}function Fg(e){var n=os(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Y0(e.priority,function(){if(a.tag===13){var l=Mt();l=uu(l);var u=bs(a,l);u!==null&&It(u,a,l),pf(a,l)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function no(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=gf(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);yu=l,a.target.dispatchEvent(l),yu=null}else return n=us(a),n!==null&&Gg(n),e.blockedOn=a,!1;n.shift()}return!0}function Xg(e,n,a){no(e)&&a.delete(n)}function $b(){vf=!1,ri!==null&&no(ri)&&(ri=null),li!==null&&no(li)&&(li=null),oi!==null&&no(oi)&&(oi=null),ar.forEach(Xg),rr.forEach(Xg)}function io(e,n){e.blockedOn===n&&(e.blockedOn=null,vf||(vf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,$b)))}var so=null;function Kg(e){so!==e&&(so=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){so===e&&(so=null);for(var n=0;n<e.length;n+=3){var a=e[n],l=e[n+1],u=e[n+2];if(typeof l!="function"){if(_f(l||a)===null)continue;break}var f=us(a);f!==null&&(e.splice(n,3),n-=3,gc(f,{pending:!0,data:u,method:a.method,action:l},l,u))}}))}function or(e){function n(y){return io(y,e)}ri!==null&&io(ri,e),li!==null&&io(li,e),oi!==null&&io(oi,e),ar.forEach(n),rr.forEach(n);for(var a=0;a<ui.length;a++){var l=ui[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ui.length&&(a=ui[0],a.blockedOn===null);)Fg(a),a.blockedOn===null&&ui.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var u=a[l],f=a[l+1],p=u[mt]||null;if(typeof f=="function")p||Kg(a);else if(p){var _=null;if(f&&f.hasAttribute("formAction")){if(u=f,p=f[mt]||null)_=p.formAction;else if(_f(u)!==null)continue}else _=p.action;typeof _=="function"?a[l+1]=_:(a.splice(l,3),l-=3),Kg(a)}}}function yf(e){this._internalRoot=e}ao.prototype.render=yf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,l=Mt();qg(a,l,e,n,null,null)},ao.prototype.unmount=yf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;qg(e.current,2,null,e,null,null),Pl(),n[ls]=null}};function ao(e){this._internalRoot=e}ao.prototype.unstable_scheduleHydration=function(e){if(e){var n=hd();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ui.length&&n!==0&&n<ui[a].priority;a++);ui.splice(a,0,e),a===0&&Fg(e)}};var Zg=t.version;if(Zg!=="19.1.0")throw Error(r(527,Zg,"19.1.0"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var eS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{ha=ro.inject(eS),Ct=ro}catch{}}return cr.createRoot=function(e,n){if(!o(e))throw Error(r(299));var a=!1,l="",u=hm,f=dm,p=pm,_=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(_=n.unstable_transitionCallbacks)),n=Pg(e,1,!1,null,null,a,l,u,f,p,_,null),e[ls]=n.current,ef(e),new yf(n)},cr.hydrateRoot=function(e,n,a){if(!o(e))throw Error(r(299));var l=!1,u="",f=hm,p=dm,_=pm,y=null,w=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(_=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(y=a.unstable_transitionCallbacks),a.formState!==void 0&&(w=a.formState)),n=Pg(e,1,!0,n,a??null,l,u,f,p,_,y,w),n.context=jg(null),a=n.current,l=Mt(),l=uu(l),u=Qn(l),u.callback=null,Fn(a,u,l),a=l,n.current.lanes=a,pa(n,a),nn(n),e[ls]=n.current,ef(e),new ao(n)},cr.version="19.1.0",cr}var r_;function fS(){if(r_)return Sf.exports;r_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Sf.exports=cS(),Sf.exports}var hS=fS();const dS=gv(hS),pS=()=>{};var l_={};/**
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
 */const _v={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const U=function(s,t){if(!s)throw aa(t)},aa=function(s){return new Error("Firebase Database ("+_v.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
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
 */const vv=function(s){const t=[];let i=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):(o&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++r)&1023),t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},mS=function(s){const t=[];let i=0,r=0;for(;i<s.length;){const o=s[i++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=s[i++];t[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=s[i++],h=s[i++],d=s[i++],m=((o&7)<<18|(c&63)<<12|(h&63)<<6|d&63)-65536;t[r++]=String.fromCharCode(55296+(m>>10)),t[r++]=String.fromCharCode(56320+(m&1023))}else{const c=s[i++],h=s[i++];t[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return t.join("")},uh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,t){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<s.length;o+=3){const c=s[o],h=o+1<s.length,d=h?s[o+1]:0,m=o+2<s.length,g=m?s[o+2]:0,v=c>>2,E=(c&3)<<4|d>>4;let C=(d&15)<<2|g>>6,k=g&63;m||(k=64,h||(C=64)),r.push(i[v],i[E],i[C],i[k])}return r.join("")},encodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(s):this.encodeByteArray(vv(s),t)},decodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(s):mS(this.decodeStringToByteArray(s,t))},decodeStringToByteArray(s,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<s.length;){const c=i[s.charAt(o++)],d=o<s.length?i[s.charAt(o)]:0;++o;const g=o<s.length?i[s.charAt(o)]:64;++o;const E=o<s.length?i[s.charAt(o)]:64;if(++o,c==null||d==null||g==null||E==null)throw new gS;const C=c<<2|d>>4;if(r.push(C),g!==64){const k=d<<4&240|g>>2;if(r.push(k),E!==64){const L=g<<6&192|E;r.push(L)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class gS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yv=function(s){const t=vv(s);return uh.encodeByteArray(t,!0)},vo=function(s){return yv(s).replace(/\./g,"")},yo=function(s){try{return uh.decodeString(s,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function _S(s){return Ev(void 0,s)}function Ev(s,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const i=t;return new Date(i.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return t}for(const i in t)!t.hasOwnProperty(i)||!vS(i)||(s[i]=Ev(s[i],t[i]));return s}function vS(s){return s!=="__proto__"}/**
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
 */function yS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ES=()=>yS().__FIREBASE_DEFAULTS__,bS=()=>{if(typeof process>"u"||typeof l_>"u")return;const s=l_.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},SS=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=s&&yo(s[1]);return t&&JSON.parse(t)},ch=()=>{try{return pS()||ES()||bS()||SS()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},bv=s=>{var t,i;return(i=(t=ch())===null||t===void 0?void 0:t.emulatorHosts)===null||i===void 0?void 0:i[s]},TS=s=>{const t=bv(s);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),r]:[t.substring(0,i),r]},Sv=()=>{var s;return(s=ch())===null||s===void 0?void 0:s.config},Tv=s=>{var t;return(t=ch())===null||t===void 0?void 0:t[`_${s}`]};/**
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
 */class jo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,r))}}}/**
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
 */function CS(s,t){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=t||"demo-project",o=s.iat||0,c=s.sub||s.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},s);return[vo(JSON.stringify(i)),vo(JSON.stringify(h)),""].join(".")}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function AS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wS(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Cv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RS(){const s=ht();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function NS(){return _v.NODE_ADMIN===!0}function OS(){try{return typeof indexedDB=="object"}catch{return!1}}function DS(){return new Promise((s,t)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(r),s(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var c;t(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){t(i)}})}/**
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
 */const MS="FirebaseError";class Ci extends Error{constructor(t,i,r){super(i),this.code=t,this.customData=r,this.name=MS,Object.setPrototypeOf(this,Ci.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ur.prototype.create)}}class Ur{constructor(t,i,r){this.service=t,this.serviceName=i,this.errors=r}create(t,...i){const r=i[0]||{},o=`${this.service}/${t}`,c=this.errors[t],h=c?IS(c,r):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new Ci(o,d,r)}}function IS(s,t){return s.replace(xS,(i,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const xS=/\{\$([^}]+)}/g;/**
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
 */function Sr(s){return JSON.parse(s)}function Be(s){return JSON.stringify(s)}/**
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
 */const Av=function(s){let t={},i={},r={},o="";try{const c=s.split(".");t=Sr(yo(c[0])||""),i=Sr(yo(c[1])||""),o=c[2],r=i.d||{},delete i.d}catch{}return{header:t,claims:i,data:r,signature:o}},kS=function(s){const t=Av(s),i=t.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},US=function(s){const t=Av(s).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function zn(s,t){return Object.prototype.hasOwnProperty.call(s,t)}function $s(s,t){if(Object.prototype.hasOwnProperty.call(s,t))return s[t]}function Pf(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}function Eo(s,t,i){const r={};for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&(r[o]=t.call(i,s[o],o,s));return r}function $i(s,t){if(s===t)return!0;const i=Object.keys(s),r=Object.keys(t);for(const o of i){if(!r.includes(o))return!1;const c=s[o],h=t[o];if(o_(c)&&o_(h)){if(!$i(c,h))return!1}else if(c!==h)return!1}for(const o of r)if(!i.includes(o))return!1;return!0}function o_(s){return s!==null&&typeof s=="object"}/**
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
 */function ra(s){const t=[];for(const[i,r]of Object.entries(s))Array.isArray(r)?r.forEach(o=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
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
 */class LS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,i){i||(i=0);const r=this.W_;if(typeof t=="string")for(let E=0;E<16;E++)r[E]=t.charCodeAt(i)<<24|t.charCodeAt(i+1)<<16|t.charCodeAt(i+2)<<8|t.charCodeAt(i+3),i+=4;else for(let E=0;E<16;E++)r[E]=t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3],i+=4;for(let E=16;E<80;E++){const C=r[E-3]^r[E-8]^r[E-14]^r[E-16];r[E]=(C<<1|C>>>31)&4294967295}let o=this.chain_[0],c=this.chain_[1],h=this.chain_[2],d=this.chain_[3],m=this.chain_[4],g,v;for(let E=0;E<80;E++){E<40?E<20?(g=d^c&(h^d),v=1518500249):(g=c^h^d,v=1859775393):E<60?(g=c&h|d&(c|h),v=2400959708):(g=c^h^d,v=3395469782);const C=(o<<5|o>>>27)+g+m+v+r[E]&4294967295;m=d,d=h,h=(c<<30|c>>>2)&4294967295,c=o,o=C}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(t,i){if(t==null)return;i===void 0&&(i=t.length);const r=i-this.blockSize;let o=0;const c=this.buf_;let h=this.inbuf_;for(;o<i;){if(h===0)for(;o<=r;)this.compress_(t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<i;)if(c[h]=t.charCodeAt(o),++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}else for(;o<i;)if(c[h]=t[o],++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}this.inbuf_=h,this.total_+=i}digest(){const t=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=i&255,i/=256;this.compress_(this.buf_);let r=0;for(let o=0;o<5;o++)for(let c=24;c>=0;c-=8)t[r]=this.chain_[o]>>c&255,++r;return t}}function zS(s,t){const i=new HS(s,t);return i.subscribe.bind(i)}class HS{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,r){let o;if(t===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");BS(t,["next","error","complete"])?o=t:o={next:t,error:i,complete:r},o.next===void 0&&(o.next=wf),o.error===void 0&&(o.error=wf),o.complete===void 0&&(o.complete=wf);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BS(s,t){if(typeof s!="object"||s===null)return!1;for(const i of t)if(i in s&&typeof s[i]=="function")return!0;return!1}function wf(){}function hh(s,t){return`${s} failed: ${t} argument `}/**
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
 */const PS=function(s){const t=[];let i=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);if(o>=55296&&o<=56319){const c=o-55296;r++,U(r<s.length,"Surrogate pair missing trail surrogate.");const h=s.charCodeAt(r)-56320;o=65536+(c<<10)+h}o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):o<65536?(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},qo=function(s){let t=0;for(let i=0;i<s.length;i++){const r=s.charCodeAt(i);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,i++):t+=3}return t};/**
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
 */function dt(s){return s&&s._delegate?s._delegate:s}class es{constructor(t,i,r){this.name=t,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Qi="[DEFAULT]";/**
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
 */class jS{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const r=new jo;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){var i;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(i=t==null?void 0:t.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(VS(t))try{this.getOrInitializeService({instanceIdentifier:Qi})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(t=Qi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qi){return this.instances.has(t)}getOptions(t=Qi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[c,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(c);r===d&&h.resolve(o)}return o}onInit(t,i){var r;const o=this.normalizeInstanceIdentifier(i),c=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;c.add(t),this.onInitCallbacks.set(o,c);const h=this.instances.get(o);return h&&t(h,o),()=>{c.delete(t)}}invokeOnInitCallbacks(t,i){const r=this.onInitCallbacks.get(i);if(r)for(const o of r)try{o(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qS(t),options:i}),this.instances.set(t,r),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qi){return this.component?this.component.multipleInstances?t:Qi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qS(s){return s===Qi?void 0:s}function VS(s){return s.instantiationMode==="EAGER"}/**
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
 */class GS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new jS(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(ye||(ye={}));const YS={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},QS=ye.INFO,FS={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},XS=(s,t,...i)=>{if(t<s.logLevel)return;const r=new Date().toISOString(),o=FS[t];if(o)console[o](`[${r}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class dh{constructor(t){this.name=t,this._logLevel=QS,this._logHandler=XS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ye))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?YS[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...t),this._logHandler(this,ye.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...t),this._logHandler(this,ye.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...t),this._logHandler(this,ye.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...t),this._logHandler(this,ye.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...t),this._logHandler(this,ye.ERROR,...t)}}const KS=(s,t)=>t.some(i=>s instanceof i);let u_,c_;function ZS(){return u_||(u_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WS(){return c_||(c_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wv=new WeakMap,jf=new WeakMap,Rv=new WeakMap,Rf=new WeakMap,ph=new WeakMap;function JS(s){const t=new Promise((i,r)=>{const o=()=>{s.removeEventListener("success",c),s.removeEventListener("error",h)},c=()=>{i(gi(s.result)),o()},h=()=>{r(s.error),o()};s.addEventListener("success",c),s.addEventListener("error",h)});return t.then(i=>{i instanceof IDBCursor&&wv.set(i,s)}).catch(()=>{}),ph.set(t,s),t}function $S(s){if(jf.has(s))return;const t=new Promise((i,r)=>{const o=()=>{s.removeEventListener("complete",c),s.removeEventListener("error",h),s.removeEventListener("abort",h)},c=()=>{i(),o()},h=()=>{r(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",c),s.addEventListener("error",h),s.addEventListener("abort",h)});jf.set(s,t)}let qf={get(s,t,i){if(s instanceof IDBTransaction){if(t==="done")return jf.get(s);if(t==="objectStoreNames")return s.objectStoreNames||Rv.get(s);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return gi(s[t])},set(s,t,i){return s[t]=i,!0},has(s,t){return s instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in s}};function eT(s){qf=s(qf)}function tT(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const r=s.call(Nf(this),t,...i);return Rv.set(r,t.sort?t.sort():[t]),gi(r)}:WS().includes(s)?function(...t){return s.apply(Nf(this),t),gi(wv.get(this))}:function(...t){return gi(s.apply(Nf(this),t))}}function nT(s){return typeof s=="function"?tT(s):(s instanceof IDBTransaction&&$S(s),KS(s,ZS())?new Proxy(s,qf):s)}function gi(s){if(s instanceof IDBRequest)return JS(s);if(Rf.has(s))return Rf.get(s);const t=nT(s);return t!==s&&(Rf.set(s,t),ph.set(t,s)),t}const Nf=s=>ph.get(s);function iT(s,t,{blocked:i,upgrade:r,blocking:o,terminated:c}={}){const h=indexedDB.open(s,t),d=gi(h);return r&&h.addEventListener("upgradeneeded",m=>{r(gi(h.result),m.oldVersion,m.newVersion,gi(h.transaction),m)}),i&&h.addEventListener("blocked",m=>i(m.oldVersion,m.newVersion,m)),d.then(m=>{c&&m.addEventListener("close",()=>c()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const sT=["get","getKey","getAll","getAllKeys","count"],aT=["put","add","delete","clear"],Of=new Map;function f_(s,t){if(!(s instanceof IDBDatabase&&!(t in s)&&typeof t=="string"))return;if(Of.get(t))return Of.get(t);const i=t.replace(/FromIndex$/,""),r=t!==i,o=aT.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(o||sT.includes(i)))return;const c=async function(h,...d){const m=this.transaction(h,o?"readwrite":"readonly");let g=m.store;return r&&(g=g.index(d.shift())),(await Promise.all([g[i](...d),o&&m.done]))[0]};return Of.set(t,c),c}eT(s=>({...s,get:(t,i,r)=>f_(t,i)||s.get(t,i,r),has:(t,i)=>!!f_(t,i)||s.has(t,i)}));/**
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
 */class rT{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(lT(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function lT(s){const t=s.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Vf="@firebase/app",h_="0.11.3";/**
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
 */const Mn=new dh("@firebase/app"),oT="@firebase/app-compat",uT="@firebase/analytics-compat",cT="@firebase/analytics",fT="@firebase/app-check-compat",hT="@firebase/app-check",dT="@firebase/auth",pT="@firebase/auth-compat",mT="@firebase/database",gT="@firebase/data-connect",_T="@firebase/database-compat",vT="@firebase/functions",yT="@firebase/functions-compat",ET="@firebase/installations",bT="@firebase/installations-compat",ST="@firebase/messaging",TT="@firebase/messaging-compat",CT="@firebase/performance",AT="@firebase/performance-compat",wT="@firebase/remote-config",RT="@firebase/remote-config-compat",NT="@firebase/storage",OT="@firebase/storage-compat",DT="@firebase/firestore",MT="@firebase/vertexai",IT="@firebase/firestore-compat",xT="firebase",kT="11.5.0";/**
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
 */const Gf="[DEFAULT]",UT={[Vf]:"fire-core",[oT]:"fire-core-compat",[cT]:"fire-analytics",[uT]:"fire-analytics-compat",[hT]:"fire-app-check",[fT]:"fire-app-check-compat",[dT]:"fire-auth",[pT]:"fire-auth-compat",[mT]:"fire-rtdb",[gT]:"fire-data-connect",[_T]:"fire-rtdb-compat",[vT]:"fire-fn",[yT]:"fire-fn-compat",[ET]:"fire-iid",[bT]:"fire-iid-compat",[ST]:"fire-fcm",[TT]:"fire-fcm-compat",[CT]:"fire-perf",[AT]:"fire-perf-compat",[wT]:"fire-rc",[RT]:"fire-rc-compat",[NT]:"fire-gcs",[OT]:"fire-gcs-compat",[DT]:"fire-fst",[IT]:"fire-fst-compat",[MT]:"fire-vertex","fire-js":"fire-js",[xT]:"fire-js-all"};/**
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
 */const bo=new Map,LT=new Map,Yf=new Map;function d_(s,t){try{s.container.addComponent(t)}catch(i){Mn.debug(`Component ${t.name} failed to register with FirebaseApp ${s.name}`,i)}}function ea(s){const t=s.name;if(Yf.has(t))return Mn.debug(`There were multiple attempts to register component ${t}.`),!1;Yf.set(t,s);for(const i of bo.values())d_(i,s);for(const i of LT.values())d_(i,s);return!0}function mh(s,t){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(t)}function Yt(s){return s==null?!1:s.settings!==void 0}/**
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
 */const zT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_i=new Ur("app","Firebase",zT);/**
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
 */class HT{constructor(t,i,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw _i.create("app-deleted",{appName:this._name})}}/**
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
 */const la=kT;function Nv(s,t={}){let i=s;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Gf,automaticDataCollectionEnabled:!1},t),o=r.name;if(typeof o!="string"||!o)throw _i.create("bad-app-name",{appName:String(o)});if(i||(i=Sv()),!i)throw _i.create("no-options");const c=bo.get(o);if(c){if($i(i,c.options)&&$i(r,c.config))return c;throw _i.create("duplicate-app",{appName:o})}const h=new GS(o);for(const m of Yf.values())h.addComponent(m);const d=new HT(i,r,h);return bo.set(o,d),d}function Ov(s=Gf){const t=bo.get(s);if(!t&&s===Gf&&Sv())return Nv();if(!t)throw _i.create("no-app",{appName:s});return t}function vi(s,t,i){var r;let o=(r=UT[s])!==null&&r!==void 0?r:s;i&&(o+=`-${i}`);const c=o.match(/\s|\//),h=t.match(/\s|\//);if(c||h){const d=[`Unable to register library "${o}" with version "${t}":`];c&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&h&&d.push("and"),h&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Mn.warn(d.join(" "));return}ea(new es(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const BT="firebase-heartbeat-database",PT=1,Tr="firebase-heartbeat-store";let Df=null;function Dv(){return Df||(Df=iT(BT,PT,{upgrade:(s,t)=>{switch(t){case 0:try{s.createObjectStore(Tr)}catch(i){console.warn(i)}}}}).catch(s=>{throw _i.create("idb-open",{originalErrorMessage:s.message})})),Df}async function jT(s){try{const i=(await Dv()).transaction(Tr),r=await i.objectStore(Tr).get(Mv(s));return await i.done,r}catch(t){if(t instanceof Ci)Mn.warn(t.message);else{const i=_i.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Mn.warn(i.message)}}}async function p_(s,t){try{const r=(await Dv()).transaction(Tr,"readwrite");await r.objectStore(Tr).put(t,Mv(s)),await r.done}catch(i){if(i instanceof Ci)Mn.warn(i.message);else{const r=_i.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});Mn.warn(r.message)}}}function Mv(s){return`${s.name}!${s.options.appId}`}/**
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
 */const qT=1024,VT=30;class GT{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new QT(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=m_();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>VT){const h=FT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Mn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=m_(),{heartbeatsToSend:r,unsentEntries:o}=YT(this._heartbeatsCache.heartbeats),c=vo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return Mn.warn(i),""}}}function m_(){return new Date().toISOString().substring(0,10)}function YT(s,t=qT){const i=[];let r=s.slice();for(const o of s){const c=i.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),g_(i)>t){c.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),g_(i)>t){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class QT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return OS()?DS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await jT(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return p_(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return p_(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function g_(s){return vo(JSON.stringify({version:2,heartbeats:s})).length}function FT(s){if(s.length===0)return-1;let t=0,i=s[0].date;for(let r=1;r<s.length;r++)s[r].date<i&&(i=s[r].date,t=r);return t}/**
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
 */function XT(s){ea(new es("platform-logger",t=>new rT(t),"PRIVATE")),ea(new es("heartbeat",t=>new GT(t),"PRIVATE")),vi(Vf,h_,s),vi(Vf,h_,"esm2017"),vi("fire-js","")}XT("");var KT="firebase",ZT="11.5.0";/**
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
 */vi(KT,ZT,"app");function gh(s,t){var i={};for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&t.indexOf(r)<0&&(i[r]=s[r]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(s);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(s,r[o])&&(i[r[o]]=s[r[o]]);return i}function Iv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WT=Iv,xv=new Ur("auth","Firebase",Iv());/**
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
 */const So=new dh("@firebase/auth");function JT(s,...t){So.logLevel<=ye.WARN&&So.warn(`Auth (${la}): ${s}`,...t)}function fo(s,...t){So.logLevel<=ye.ERROR&&So.error(`Auth (${la}): ${s}`,...t)}/**
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
 */function rn(s,...t){throw vh(s,...t)}function Kt(s,...t){return vh(s,...t)}function _h(s,t,i){const r=Object.assign(Object.assign({},WT()),{[t]:i});return new Ur("auth","Firebase",r).create(t,{appName:s.name})}function Ji(s){return _h(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $T(s,t,i){const r=i;if(!(t instanceof r))throw r.name!==t.constructor.name&&rn(s,"argument-error"),_h(s,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vh(s,...t){if(typeof s!="string"){const i=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=s.name),s._errorFactory.create(i,...r)}return xv.create(s,...t)}function K(s,t,...i){if(!s)throw vh(t,...i)}function wn(s){const t="INTERNAL ASSERTION FAILED: "+s;throw fo(t),new Error(t)}function In(s,t){s||wn(t)}/**
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
 */function Qf(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.href)||""}function eC(){return __()==="http:"||__()==="https:"}function __(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.protocol)||null}/**
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
 */function tC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eC()||wS()||"connection"in navigator)?navigator.onLine:!0}function nC(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
 */class Lr{constructor(t,i){this.shortDelay=t,this.longDelay=i,In(i>t,"Short delay should be less than long delay!"),this.isMobile=fh()||Cv()}get(){return tC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yh(s,t){In(s.emulator,"Emulator should always be set here");const{url:i}=s.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
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
 */class kv{static initialize(t,i,r){this.fetchImpl=t,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sC=new Lr(3e4,6e4);function Eh(s,t){return s.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:s.tenantId}):t}async function oa(s,t,i,r,o={}){return Uv(s,o,async()=>{let c={},h={};r&&(t==="GET"?h=r:c={body:JSON.stringify(r)});const d=ra(Object.assign({key:s.config.apiKey},h)).slice(1),m=await s._getAdditionalHeaders();m["Content-Type"]="application/json",s.languageCode&&(m["X-Firebase-Locale"]=s.languageCode);const g=Object.assign({method:t,headers:m},c);return AS()||(g.referrerPolicy="no-referrer"),kv.fetch()(Lv(s,s.config.apiHost,i,d),g)})}async function Uv(s,t,i){s._canInitEmulator=!1;const r=Object.assign(Object.assign({},iC),t);try{const o=new rC(s),c=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw lo(s,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const d=c.ok?h.errorMessage:h.error.message,[m,g]=d.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw lo(s,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw lo(s,"email-already-in-use",h);if(m==="USER_DISABLED")throw lo(s,"user-disabled",h);const v=r[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw _h(s,v,g);rn(s,v)}}catch(o){if(o instanceof Ci)throw o;rn(s,"network-request-failed",{message:String(o)})}}async function aC(s,t,i,r,o={}){const c=await oa(s,t,i,r,o);return"mfaPendingCredential"in c&&rn(s,"multi-factor-auth-required",{_serverResponse:c}),c}function Lv(s,t,i,r){const o=`${t}${i}?${r}`;return s.config.emulator?yh(s.config,o):`${s.config.apiScheme}://${o}`}class rC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(Kt(this.auth,"network-request-failed")),sC.get())})}}function lo(s,t,i){const r={appName:s.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const o=Kt(s,t,r);return o.customData._tokenResponse=i,o}/**
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
 */async function lC(s,t){return oa(s,"POST","/v1/accounts:delete",t)}async function zv(s,t){return oa(s,"POST","/v1/accounts:lookup",t)}/**
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
 */function mr(s){if(s)try{const t=new Date(Number(s));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function oC(s,t=!1){const i=dt(s),r=await i.getIdToken(t),o=bh(r);K(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:mr(Mf(o.auth_time)),issuedAtTime:mr(Mf(o.iat)),expirationTime:mr(Mf(o.exp)),signInProvider:h||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Mf(s){return Number(s)*1e3}function bh(s){const[t,i,r]=s.split(".");if(t===void 0||i===void 0||r===void 0)return fo("JWT malformed, contained fewer than 3 sections"),null;try{const o=yo(i);return o?JSON.parse(o):(fo("Failed to decode base64 JWT payload"),null)}catch(o){return fo("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function v_(s){const t=bh(s);return K(t,"internal-error"),K(typeof t.exp<"u","internal-error"),K(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Cr(s,t,i=!1){if(i)return t;try{return await t}catch(r){throw r instanceof Ci&&uC(r)&&s.auth.currentUser===s&&await s.auth.signOut(),r}}function uC({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
 */class cC{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var i;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ff{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=mr(this.lastLoginAt),this.creationTime=mr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function To(s){var t;const i=s.auth,r=await s.getIdToken(),o=await Cr(s,zv(i,{idToken:r}));K(o==null?void 0:o.users.length,i,"internal-error");const c=o.users[0];s._notifyReloadListener(c);const h=!((t=c.providerUserInfo)===null||t===void 0)&&t.length?Hv(c.providerUserInfo):[],d=hC(s.providerData,h),m=s.isAnonymous,g=!(s.email&&c.passwordHash)&&!(d!=null&&d.length),v=m?g:!1,E={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:d,metadata:new Ff(c.createdAt,c.lastLoginAt),isAnonymous:v};Object.assign(s,E)}async function fC(s){const t=dt(s);await To(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function hC(s,t){return[...s.filter(r=>!t.some(o=>o.providerId===r.providerId)),...t]}function Hv(s){return s.map(t=>{var{providerId:i}=t,r=gh(t,["providerId"]);return{providerId:i,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function dC(s,t){const i=await Uv(s,{},async()=>{const r=ra({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:c}=s.config,h=Lv(s,o,"/v1/token",`key=${c}`),d=await s._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",kv.fetch()(h,{method:"POST",headers:d,body:r})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function pC(s,t){return oa(s,"POST","/v2/accounts:revokeToken",Eh(s,t))}/**
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
 */class Xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){K(t.idToken,"internal-error"),K(typeof t.idToken<"u","internal-error"),K(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):v_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){K(t.length!==0,"internal-error");const i=v_(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:r,refreshToken:o,expiresIn:c}=await dC(t,i);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(t,i,r){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,i){const{refreshToken:r,accessToken:o,expirationTime:c}=i,h=new Xs;return r&&(K(typeof r=="string","internal-error",{appName:t}),h.refreshToken=r),o&&(K(typeof o=="string","internal-error",{appName:t}),h.accessToken=o),c&&(K(typeof c=="number","internal-error",{appName:t}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Xs,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
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
 */function fi(s,t){K(typeof s=="string"||typeof s>"u","internal-error",{appName:t})}class Rn{constructor(t){var{uid:i,auth:r,stsTokenManager:o}=t,c=gh(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Ff(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(t){const i=await Cr(this,this.stsTokenManager.getToken(this.auth,t));return K(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return oC(this,t)}reload(){return fC(this)}_assign(t){this!==t&&(K(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>Object.assign({},i)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new Rn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(t){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),i&&await To(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yt(this.auth.app))return Promise.reject(Ji(this.auth));const t=await this.getIdToken();return await Cr(this,lC(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){var r,o,c,h,d,m,g,v;const E=(r=i.displayName)!==null&&r!==void 0?r:void 0,C=(o=i.email)!==null&&o!==void 0?o:void 0,k=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,L=(h=i.photoURL)!==null&&h!==void 0?h:void 0,W=(d=i.tenantId)!==null&&d!==void 0?d:void 0,le=(m=i._redirectEventId)!==null&&m!==void 0?m:void 0,Xe=(g=i.createdAt)!==null&&g!==void 0?g:void 0,Ke=(v=i.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:we,emailVerified:et,isAnonymous:oe,providerData:Ze,stsTokenManager:tt}=i;K(we&&tt,t,"internal-error");const ot=Xs.fromJSON(this.name,tt);K(typeof we=="string",t,"internal-error"),fi(E,t.name),fi(C,t.name),K(typeof et=="boolean",t,"internal-error"),K(typeof oe=="boolean",t,"internal-error"),fi(k,t.name),fi(L,t.name),fi(W,t.name),fi(le,t.name),fi(Xe,t.name),fi(Ke,t.name);const pt=new Rn({uid:we,auth:t,email:C,emailVerified:et,displayName:E,isAnonymous:oe,photoURL:L,phoneNumber:k,tenantId:W,stsTokenManager:ot,createdAt:Xe,lastLoginAt:Ke});return Ze&&Array.isArray(Ze)&&(pt.providerData=Ze.map(Bn=>Object.assign({},Bn))),le&&(pt._redirectEventId=le),pt}static async _fromIdTokenResponse(t,i,r=!1){const o=new Xs;o.updateFromServerResponse(i);const c=new Rn({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:r});return await To(c),c}static async _fromGetAccountInfoResponse(t,i,r){const o=i.users[0];K(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Hv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),d=new Xs;d.updateFromIdToken(r);const m=new Rn({uid:o.localId,auth:t,stsTokenManager:d,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Ff(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(m,g),m}}/**
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
 */const y_=new Map;function Nn(s){In(s instanceof Function,"Expected a class definition");let t=y_.get(s);return t?(In(t instanceof s,"Instance stored in cache mismatched with class"),t):(t=new s,y_.set(s,t),t)}/**
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
 */class Bv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}Bv.type="NONE";const E_=Bv;/**
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
 */function ho(s,t,i){return`firebase:${s}:${t}:${i}`}class Ks{constructor(t,i,r){this.persistence=t,this.auth=i,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=ho(this.userKey,o.apiKey,c),this.fullPersistenceKey=ho("persistence",o.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Rn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,r="authUser"){if(!i.length)return new Ks(Nn(E_),t,r);const o=(await Promise.all(i.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let c=o[0]||Nn(E_);const h=ho(r,t.config.apiKey,t.name);let d=null;for(const g of i)try{const v=await g._get(h);if(v){const E=Rn._fromJSON(t,v);g!==c&&(d=E),c=g;break}}catch{}const m=o.filter(g=>g._shouldAllowMigration);return!c._shouldAllowMigration||!m.length?new Ks(c,t,r):(c=m[0],d&&await c._set(h,d.toJSON()),await Promise.all(i.map(async g=>{if(g!==c)try{await g._remove(h)}catch{}})),new Ks(c,t,r))}}/**
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
 */function b_(s){const t=s.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Vv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Pv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Yv(t))return"Blackberry";if(Qv(t))return"Webos";if(jv(t))return"Safari";if((t.includes("chrome/")||qv(t))&&!t.includes("edge/"))return"Chrome";if(Gv(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=s.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pv(s=ht()){return/firefox\//i.test(s)}function jv(s=ht()){const t=s.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function qv(s=ht()){return/crios\//i.test(s)}function Vv(s=ht()){return/iemobile/i.test(s)}function Gv(s=ht()){return/android/i.test(s)}function Yv(s=ht()){return/blackberry/i.test(s)}function Qv(s=ht()){return/webos/i.test(s)}function Sh(s=ht()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function mC(s=ht()){var t;return Sh(s)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function gC(){return RS()&&document.documentMode===10}function Fv(s=ht()){return Sh(s)||Gv(s)||Qv(s)||Yv(s)||/windows phone/i.test(s)||Vv(s)}/**
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
 */function Xv(s,t=[]){let i;switch(s){case"Browser":i=b_(ht());break;case"Worker":i=`${b_(ht())}-${s}`;break;default:i=s}const r=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${la}/${r}`}/**
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
 */class _C{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const r=c=>new Promise((h,d)=>{try{const m=t(c);h(m)}catch(m){d(m)}});r.onAbort=i,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const r of this.queue)await r(t),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vC(s,t={}){return oa(s,"GET","/v2/passwordPolicy",Eh(s,t))}/**
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
 */const yC=6;class EC{constructor(t){var i,r,o,c;const h=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=h.minPasswordLength)!==null&&i!==void 0?i:yC,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=t.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var i,r,o,c,h,d;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,m),this.validatePasswordCharacterOptions(t,m),m.isValid&&(m.isValid=(i=m.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),m.isValid&&(m.isValid=(r=m.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),m.isValid&&(m.isValid=(o=m.containsLowercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(c=m.containsUppercaseLetter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(h=m.containsNumericCharacter)!==null&&h!==void 0?h:!0),m.isValid&&(m.isValid=(d=m.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),m}validatePasswordLengthOptions(t,i){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=t.length>=r),o&&(i.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let o=0;o<t.length;o++)r=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,i,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
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
 */class bC{constructor(t,i,r,o){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new S_(this),this.idTokenSubscription=new S_(this),this.beforeStateQueue=new _C(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=Nn(i)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await Ks.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await zv(this,{idToken:t}),r=await Rn._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var i;if(Yt(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,c=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,d=o==null?void 0:o._redirectEventId,m=await this.tryRedirectSignIn(t);(!h||h===d)&&(m!=null&&m.user)&&(o=m.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await To(t)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=nC()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Yt(this.app))return Promise.reject(Ji(this));const i=t?dt(t):null;return i&&K(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&K(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Yt(this.app)?Promise.reject(Ji(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Yt(this.app)?Promise.reject(Ji(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await vC(this),i=new EC(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ur("auth","Firebase",t())}onAuthStateChanged(t,i,r){return this.registerStateListener(this.authStateSubscription,t,i,r)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,r){return this.registerStateListener(this.idTokenSubscription,t,i,r)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await pC(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,i){const r=await this.getOrInitRedirectPersistenceManager(i);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&Nn(t)||this._popupRedirectResolver;K(i,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[Nn(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(i=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,r,o){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(d,this,"internal-error"),d.then(()=>{h||c(this.currentUser)}),typeof i=="function"){const m=t.addObserver(i,r,o);return()=>{h=!0,m()}}else{const m=t.addObserver(i);return()=>{h=!0,m()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Xv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(i["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var t;if(Yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return i!=null&&i.error&&JT(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function Vo(s){return dt(s)}class S_{constructor(t){this.auth=t,this.observer=null,this.addObserver=zS(i=>this.observer=i)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Th={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SC(s){Th=s}function TC(s){return Th.loadJS(s)}function CC(){return Th.gapiScript}function AC(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
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
 */function wC(s,t){const i=mh(s,"auth");if(i.isInitialized()){const o=i.getImmediate(),c=i.getOptions();if($i(c,t??{}))return o;rn(o,"already-initialized")}return i.initialize({options:t})}function RC(s,t){const i=(t==null?void 0:t.persistence)||[],r=(Array.isArray(i)?i:[i]).map(Nn);t!=null&&t.errorMap&&s._updateErrorMap(t.errorMap),s._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function NC(s,t,i){const r=Vo(s);K(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!1,c=Kv(t),{host:h,port:d}=OC(t),m=d===null?"":`:${d}`,g={url:`${c}//${h}${m}/`},v=Object.freeze({host:h,port:d,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K($i(g,r.config.emulator)&&$i(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,DC()}function Kv(s){const t=s.indexOf(":");return t<0?"":s.substr(0,t+1)}function OC(s){const t=Kv(s),i=/(\/\/)?([^?#/]+)/.exec(s.substr(t.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:T_(r.substr(c.length+1))}}else{const[c,h]=r.split(":");return{host:c,port:T_(h)}}}function T_(s){if(!s)return null;const t=Number(s);return isNaN(t)?null:t}function DC(){function s(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
 */class Zv{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return wn("not implemented")}_getIdTokenResponse(t){return wn("not implemented")}_linkToIdToken(t,i){return wn("not implemented")}_getReauthenticationResolver(t){return wn("not implemented")}}/**
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
 */async function Zs(s,t){return aC(s,"POST","/v1/accounts:signInWithIdp",Eh(s,t))}/**
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
 */const MC="http://localhost";class ts extends Zv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new ts(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):rn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:o}=i,c=gh(i,["providerId","signInMethod"]);if(!r||!o)return null;const h=new ts(r,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(t){const i=this.buildRequest();return Zs(t,i)}_linkToIdToken(t,i){const r=this.buildRequest();return r.idToken=i,Zs(t,r)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Zs(t,i)}buildRequest(){const t={requestUri:MC,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=ra(i)}return t}}/**
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
 */class Ch{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zr extends Ch{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class hi extends zr{constructor(){super("facebook.com")}static credential(t){return ts._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return hi.credentialFromTaggedObject(t)}static credentialFromError(t){return hi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return hi.credential(t.oauthAccessToken)}catch{return null}}}hi.FACEBOOK_SIGN_IN_METHOD="facebook.com";hi.PROVIDER_ID="facebook.com";/**
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
 */class An extends zr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return ts._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return An.credentialFromTaggedObject(t)}static credentialFromError(t){return An.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:r}=t;if(!i&&!r)return null;try{return An.credential(i,r)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
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
 */class di extends zr{constructor(){super("github.com")}static credential(t){return ts._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return di.credentialFromTaggedObject(t)}static credentialFromError(t){return di.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return di.credential(t.oauthAccessToken)}catch{return null}}}di.GITHUB_SIGN_IN_METHOD="github.com";di.PROVIDER_ID="github.com";/**
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
 */class pi extends zr{constructor(){super("twitter.com")}static credential(t,i){return ts._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return pi.credentialFromTaggedObject(t)}static credentialFromError(t){return pi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=t;if(!i||!r)return null;try{return pi.credential(i,r)}catch{return null}}}pi.TWITTER_SIGN_IN_METHOD="twitter.com";pi.PROVIDER_ID="twitter.com";/**
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
 */class ta{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,r,o=!1){const c=await Rn._fromIdTokenResponse(t,r,o),h=C_(r);return new ta({user:c,providerId:h,_tokenResponse:r,operationType:i})}static async _forOperation(t,i,r){await t._updateTokensIfNecessary(r,!0);const o=C_(r);return new ta({user:t,providerId:o,_tokenResponse:r,operationType:i})}}function C_(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
 */class Co extends Ci{constructor(t,i,r,o){var c;super(i.code,i.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,Co.prototype),this.customData={appName:t.name,tenantId:(c=t.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,i,r,o){return new Co(t,i,r,o)}}function Wv(s,t,i,r){return(t==="reauthenticate"?i._getReauthenticationResolver(s):i._getIdTokenResponse(s)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Co._fromErrorAndOperation(s,c,t,r):c})}async function IC(s,t,i=!1){const r=await Cr(s,t._linkToIdToken(s.auth,await s.getIdToken()),i);return ta._forOperation(s,"link",r)}/**
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
 */async function xC(s,t,i=!1){const{auth:r}=s;if(Yt(r.app))return Promise.reject(Ji(r));const o="reauthenticate";try{const c=await Cr(s,Wv(r,o,t,s),i);K(c.idToken,r,"internal-error");const h=bh(c.idToken);K(h,r,"internal-error");const{sub:d}=h;return K(s.uid===d,r,"user-mismatch"),ta._forOperation(s,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&rn(r,"user-mismatch"),c}}/**
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
 */async function kC(s,t,i=!1){if(Yt(s.app))return Promise.reject(Ji(s));const r="signIn",o=await Wv(s,r,t),c=await ta._fromIdTokenResponse(s,r,o);return i||await s._updateCurrentUser(c.user),c}function UC(s,t,i,r){return dt(s).onIdTokenChanged(t,i,r)}function LC(s,t,i){return dt(s).beforeAuthStateChanged(t,i)}function zC(s,t,i,r){return dt(s).onAuthStateChanged(t,i,r)}function HC(s){return dt(s).signOut()}const Ao="__sak";/**
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
 */class Jv{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Ao,"1"),this.storage.removeItem(Ao),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const BC=1e3,PC=10;class $v extends Jv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),o=this.localCache[i];r!==o&&t(i,o,r)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((h,d,m)=>{this.notifyListeners(h,m)});return}const r=t.key;i?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(r);!i&&this.localCache[r]===h||this.notifyListeners(r,h)},c=this.storage.getItem(r);gC()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,PC):o()}notifyListeners(t,i){this.localCache[t]=i;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:r}),!0)})},BC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}$v.type="LOCAL";const jC=$v;/**
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
 */class ey extends Jv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}ey.type="SESSION";const ty=ey;/**
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
 */function qC(s){return Promise.all(s.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class Go{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(o=>o.isListeningto(t));if(i)return i;const r=new Go(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:r,eventType:o,data:c}=i.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const d=Array.from(h).map(async g=>g(i.origin,c)),m=await qC(d);i.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:m})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Go.receivers=[];/**
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
 */function Ah(s="",t=10){let i="";for(let r=0;r<t;r++)i+=Math.floor(Math.random()*10);return s+i}/**
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
 */class VC{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((d,m)=>{const g=Ah("",20);o.port1.start();const v=setTimeout(()=>{m(new Error("unsupported_event"))},r);h={messageChannel:o,onMessage(E){const C=E;if(C.data.eventId===g)switch(C.data.status){case"ack":clearTimeout(v),c=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),d(C.data.response);break;default:clearTimeout(v),clearTimeout(c),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:g,data:i},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function an(){return window}function GC(s){an().location.href=s}/**
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
 */function ny(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function YC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QC(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)===null||s===void 0?void 0:s.controller)||null}function FC(){return ny()?self:null}/**
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
 */const iy="firebaseLocalStorageDb",XC=1,wo="firebaseLocalStorage",sy="fbase_key";class Hr{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Yo(s,t){return s.transaction([wo],t?"readwrite":"readonly").objectStore(wo)}function KC(){const s=indexedDB.deleteDatabase(iy);return new Hr(s).toPromise()}function Xf(){const s=indexedDB.open(iy,XC);return new Promise((t,i)=>{s.addEventListener("error",()=>{i(s.error)}),s.addEventListener("upgradeneeded",()=>{const r=s.result;try{r.createObjectStore(wo,{keyPath:sy})}catch(o){i(o)}}),s.addEventListener("success",async()=>{const r=s.result;r.objectStoreNames.contains(wo)?t(r):(r.close(),await KC(),t(await Xf()))})})}async function A_(s,t,i){const r=Yo(s,!0).put({[sy]:t,value:i});return new Hr(r).toPromise()}async function ZC(s,t){const i=Yo(s,!1).get(t),r=await new Hr(i).toPromise();return r===void 0?null:r.value}function w_(s,t){const i=Yo(s,!0).delete(t);return new Hr(i).toPromise()}const WC=800,JC=3;class ay{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xf(),this.db)}async _withRetries(t){let i=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(i++>JC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ny()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Go._getInstance(FC()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await YC(),!this.activeServiceWorker)return;this.sender=new VC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((i=r[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||QC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Xf();return await A_(t,Ao,"1"),await w_(t,Ao),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>A_(r,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(r=>ZC(r,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>w_(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const c=Yo(o,!1).getAll();return new Hr(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;if(t.length!==0)for(const{fbase_key:o,value:c}of t)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(t,i){this.localCache[t]=i;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ay.type="LOCAL";const $C=ay;new Lr(3e4,6e4);/**
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
 */function ry(s,t){return t?Nn(t):(K(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class wh extends Zv{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Zs(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Zs(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Zs(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function e1(s){return kC(s.auth,new wh(s),s.bypassAuthState)}function t1(s){const{auth:t,user:i}=s;return K(i,t,"internal-error"),xC(i,new wh(s),s.bypassAuthState)}async function n1(s){const{auth:t,user:i}=s;return K(i,t,"internal-error"),IC(i,new wh(s),s.bypassAuthState)}/**
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
 */class ly{constructor(t,i,r,o,c=!1){this.auth=t,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:r,postBody:o,tenantId:c,error:h,type:d}=t;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:i,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(m))}catch(g){this.reject(g)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return e1;case"linkViaPopup":case"linkViaRedirect":return n1;case"reauthViaPopup":case"reauthViaRedirect":return t1;default:rn(this.auth,"internal-error")}}resolve(t){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const i1=new Lr(2e3,1e4);async function s1(s,t,i){if(Yt(s.app))return Promise.reject(Kt(s,"operation-not-supported-in-this-environment"));const r=Vo(s);$T(s,t,Ch);const o=ry(r,i);return new Xi(r,"signInViaPopup",t,o).executeNotNull()}class Xi extends ly{constructor(t,i,r,o,c){super(t,i,o,c),this.provider=r,this.authWindow=null,this.pollId=null,Xi.currentPopupAction&&Xi.currentPopupAction.cancel(),Xi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return K(t,this.auth,"internal-error"),t}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const t=Ah();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var i,r;if(!((r=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,i1.get())};t()}}Xi.currentPopupAction=null;/**
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
 */const a1="pendingRedirect",po=new Map;class r1 extends ly{constructor(t,i,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let t=po.get(this.auth._key());if(!t){try{const r=await l1(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(i){t=()=>Promise.reject(i)}po.set(this.auth._key(),t)}return this.bypassAuthState||po.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function l1(s,t){const i=c1(t),r=u1(s);if(!await r._isAvailable())return!1;const o=await r._get(i)==="true";return await r._remove(i),o}function o1(s,t){po.set(s._key(),t)}function u1(s){return Nn(s._redirectPersistence)}function c1(s){return ho(a1,s.config.apiKey,s.name)}async function f1(s,t,i=!1){if(Yt(s.app))return Promise.reject(Ji(s));const r=Vo(s),o=ry(r,t),h=await new r1(r,o,i).execute();return h&&!i&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,t)),h}/**
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
 */const h1=10*60*1e3;class d1{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(i=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!p1(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){var r;if(t.error&&!oy(t)){const o=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";i.onError(Kt(this.auth,o))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const r=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=h1&&this.cachedEventUids.clear(),this.cachedEventUids.has(R_(t))}saveEventToCache(t){this.cachedEventUids.add(R_(t)),this.lastProcessedEventTime=Date.now()}}function R_(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(t=>t).join("-")}function oy({type:s,error:t}){return s==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function p1(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oy(s);default:return!1}}/**
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
 */async function m1(s,t={}){return oa(s,"GET","/v1/projects",t)}/**
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
 */const g1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_1=/^https?/;async function v1(s){if(s.config.emulator)return;const{authorizedDomains:t}=await m1(s);for(const i of t)try{if(y1(i))return}catch{}rn(s,"unauthorized-domain")}function y1(s){const t=Qf(),{protocol:i,hostname:r}=new URL(t);if(s.startsWith("chrome-extension://")){const h=new URL(s);return h.hostname===""&&r===""?i==="chrome-extension:"&&s.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===r}if(!_1.test(i))return!1;if(g1.test(s))return r===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const E1=new Lr(3e4,6e4);function N_(){const s=an().___jsl;if(s!=null&&s.H){for(const t of Object.keys(s.H))if(s.H[t].r=s.H[t].r||[],s.H[t].L=s.H[t].L||[],s.H[t].r=[...s.H[t].L],s.CP)for(let i=0;i<s.CP.length;i++)s.CP[i]=null}}function b1(s){return new Promise((t,i)=>{var r,o,c;function h(){N_(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{N_(),i(Kt(s,"network-request-failed"))},timeout:E1.get()})}if(!((o=(r=an().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((c=an().gapi)===null||c===void 0)&&c.load)h();else{const d=AC("iframefcb");return an()[d]=()=>{gapi.load?h():i(Kt(s,"network-request-failed"))},TC(`${CC()}?onload=${d}`).catch(m=>i(m))}}).catch(t=>{throw mo=null,t})}let mo=null;function S1(s){return mo=mo||b1(s),mo}/**
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
 */const T1=new Lr(5e3,15e3),C1="__/auth/iframe",A1="emulator/auth/iframe",w1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},R1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function N1(s){const t=s.config;K(t.authDomain,s,"auth-domain-config-required");const i=t.emulator?yh(t,A1):`https://${s.config.authDomain}/${C1}`,r={apiKey:t.apiKey,appName:s.name,v:la},o=R1.get(s.config.apiHost);o&&(r.eid=o);const c=s._getFrameworks();return c.length&&(r.fw=c.join(",")),`${i}?${ra(r).slice(1)}`}async function O1(s){const t=await S1(s),i=an().gapi;return K(i,s,"internal-error"),t.open({where:document.body,url:N1(s),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:w1,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const h=Kt(s,"network-request-failed"),d=an().setTimeout(()=>{c(h)},T1.get());function m(){an().clearTimeout(d),o(r)}r.ping(m).then(m,()=>{c(h)})}))}/**
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
 */const D1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},M1=500,I1=600,x1="_blank",k1="http://localhost";class O_{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function U1(s,t,i,r=M1,o=I1){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const m=Object.assign(Object.assign({},D1),{width:r.toString(),height:o.toString(),top:c,left:h}),g=ht().toLowerCase();i&&(d=qv(g)?x1:i),Pv(g)&&(t=t||k1,m.scrollbars="yes");const v=Object.entries(m).reduce((C,[k,L])=>`${C}${k}=${L},`,"");if(mC(g)&&d!=="_self")return L1(t||"",d),new O_(null);const E=window.open(t||"",d,v);K(E,s,"popup-blocked");try{E.focus()}catch{}return new O_(E)}function L1(s,t){const i=document.createElement("a");i.href=s,i.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
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
 */const z1="__/auth/handler",H1="emulator/auth/handler",B1=encodeURIComponent("fac");async function D_(s,t,i,r,o,c){K(s.config.authDomain,s,"auth-domain-config-required"),K(s.config.apiKey,s,"invalid-api-key");const h={apiKey:s.config.apiKey,appName:s.name,authType:i,redirectUrl:r,v:la,eventId:o};if(t instanceof Ch){t.setDefaultLanguage(s.languageCode),h.providerId=t.providerId||"",Pf(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[v,E]of Object.entries({}))h[v]=E}if(t instanceof zr){const v=t.getScopes().filter(E=>E!=="");v.length>0&&(h.scopes=v.join(","))}s.tenantId&&(h.tid=s.tenantId);const d=h;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const m=await s._getAppCheckToken(),g=m?`#${B1}=${encodeURIComponent(m)}`:"";return`${P1(s)}?${ra(d).slice(1)}${g}`}function P1({config:s}){return s.emulator?yh(s,H1):`https://${s.authDomain}/${z1}`}/**
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
 */const If="webStorageSupport";class j1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ty,this._completeRedirectFn=f1,this._overrideRedirectResult=o1}async _openPopup(t,i,r,o){var c;In((c=this.eventManagers[t._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await D_(t,i,r,Qf(),o);return U1(t,h,Ah())}async _openRedirect(t,i,r,o){await this._originValidation(t);const c=await D_(t,i,r,Qf(),o);return GC(c),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:o,promise:c}=this.eventManagers[i];return o?Promise.resolve(o):(In(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(t);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(t){const i=await O1(t),r=new d1(t);return i.register("authEvent",o=>(K(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=i,r}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(If,{type:If},o=>{var c;const h=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[If];h!==void 0&&i(!!h),rn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=v1(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return Fv()||jv()||Sh()}}const q1=j1;var M_="@firebase/auth",I_="1.9.1";/**
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
 */class V1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function G1(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Y1(s){ea(new es("auth",(t,{options:i})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=r.options;K(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const m={apiKey:h,authDomain:d,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xv(s)},g=new bC(r,o,c,m);return RC(g,i),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,r)=>{t.getProvider("auth-internal").initialize()})),ea(new es("auth-internal",t=>{const i=Vo(t.getProvider("auth").getImmediate());return(r=>new V1(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),vi(M_,I_,G1(s)),vi(M_,I_,"esm2017")}/**
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
 */const Q1=5*60,F1=Tv("authIdTokenMaxAge")||Q1;let x_=null;const X1=s=>async t=>{const i=t&&await t.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>F1)return;const o=i==null?void 0:i.token;x_!==o&&(x_=o,await fetch(s,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function K1(s=Ov()){const t=mh(s,"auth");if(t.isInitialized())return t.getImmediate();const i=wC(s,{popupRedirectResolver:q1,persistence:[$C,jC,ty]}),r=Tv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const h=X1(c.toString());LC(i,h,()=>h(i.currentUser)),UC(i,d=>h(d))}}const o=bv("auth");return o&&NC(i,`http://${o}`),i}function Z1(){var s,t;return(t=(s=document.getElementsByTagName("head"))===null||s===void 0?void 0:s[0])!==null&&t!==void 0?t:document}SC({loadJS(s){return new Promise((t,i)=>{const r=document.createElement("script");r.setAttribute("src",s),r.onload=t,r.onerror=o=>{const c=Kt("internal-error");c.customData=o,i(c)},r.type="text/javascript",r.charset="UTF-8",Z1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Y1("Browser");var k_={};const U_="@firebase/database",L_="1.0.14";/**
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
 */let uy="";function W1(s){uy=s}/**
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
 */class J1{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,i){i==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Be(i))}get(t){const i=this.domStorage_.getItem(this.prefixedName_(t));return i==null?null:Sr(i)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */class $1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,i){i==null?delete this.cache_[t]:this.cache_[t]=i}get(t){return zn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
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
 */const cy=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const t=window[s];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new J1(t)}}catch{}return new $1},Ki=cy("localStorage"),eA=cy("sessionStorage");/**
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
 */const Ws=new dh("@firebase/database"),tA=function(){let s=1;return function(){return s++}}(),fy=function(s){const t=PS(s),i=new LS;i.update(t);const r=i.digest();return uh.encodeByteArray(r)},Br=function(...s){let t="";for(let i=0;i<s.length;i++){const r=s[i];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=Br.apply(null,r):typeof r=="object"?t+=Be(r):t+=r,t+=" "}return t};let gr=null,z_=!0;const nA=function(s,t){U(!0,"Can't turn on custom loggers persistently."),Ws.logLevel=ye.VERBOSE,gr=Ws.log.bind(Ws)},lt=function(...s){if(z_===!0&&(z_=!1,gr===null&&eA.get("logging_enabled")===!0&&nA()),gr){const t=Br.apply(null,s);gr(t)}},Pr=function(s){return function(...t){lt(s,...t)}},Kf=function(...s){const t="FIREBASE INTERNAL ERROR: "+Br(...s);Ws.error(t)},xn=function(...s){const t=`FIREBASE FATAL ERROR: ${Br(...s)}`;throw Ws.error(t),new Error(t)},bt=function(...s){const t="FIREBASE WARNING: "+Br(...s);Ws.warn(t)},iA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},hy=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},sA=function(s){if(document.readyState==="complete")s();else{let t=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}t||(t=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},na="[MIN_NAME]",ns="[MAX_NAME]",ua=function(s,t){if(s===t)return 0;if(s===na||t===ns)return-1;if(t===na||s===ns)return 1;{const i=H_(s),r=H_(t);return i!==null?r!==null?i-r===0?s.length-t.length:i-r:-1:r!==null?1:s<t?-1:1}},aA=function(s,t){return s===t?0:s<t?-1:1},fr=function(s,t){if(t&&s in t)return t[s];throw new Error("Missing required key ("+s+") in object: "+Be(t))},Rh=function(s){if(typeof s!="object"||s===null)return Be(s);const t=[];for(const r in s)t.push(r);t.sort();let i="{";for(let r=0;r<t.length;r++)r!==0&&(i+=","),i+=Be(t[r]),i+=":",i+=Rh(s[t[r]]);return i+="}",i},dy=function(s,t){const i=s.length;if(i<=t)return[s];const r=[];for(let o=0;o<i;o+=t)o+t>i?r.push(s.substring(o,i)):r.push(s.substring(o,o+t));return r};function St(s,t){for(const i in s)s.hasOwnProperty(i)&&t(i,s[i])}const py=function(s){U(!hy(s),"Invalid JSON number");const t=11,i=52,r=(1<<t-1)-1;let o,c,h,d,m;s===0?(c=0,h=0,o=1/s===-1/0?1:0):(o=s<0,s=Math.abs(s),s>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(s)/Math.LN2),r),c=d+r,h=Math.round(s*Math.pow(2,i-d)-Math.pow(2,i))):(c=0,h=Math.round(s/Math.pow(2,1-r-i))));const g=[];for(m=i;m;m-=1)g.push(h%2?1:0),h=Math.floor(h/2);for(m=t;m;m-=1)g.push(c%2?1:0),c=Math.floor(c/2);g.push(o?1:0),g.reverse();const v=g.join("");let E="";for(m=0;m<64;m+=8){let C=parseInt(v.substr(m,8),2).toString(16);C.length===1&&(C="0"+C),E=E+C}return E.toLowerCase()},rA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},lA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function oA(s,t){let i="Unknown Error";s==="too_big"?i="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?i="Client doesn't have permission to access the desired data.":s==="unavailable"&&(i="The service is unavailable");const r=new Error(s+" at "+t._path.toString()+": "+i);return r.code=s.toUpperCase(),r}const uA=new RegExp("^-?(0*)\\d{1,10}$"),cA=-2147483648,fA=2147483647,H_=function(s){if(uA.test(s)){const t=Number(s);if(t>=cA&&t<=fA)return t}return null},ca=function(s){try{s()}catch(t){setTimeout(()=>{const i=t.stack||"";throw bt("Exception was thrown by user callback.",i),t},Math.floor(0))}},hA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_r=function(s,t){const i=setTimeout(s,t);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
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
 */class dA{constructor(t,i){this.appCheckProvider=i,this.appName=t.name,Yt(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=i==null?void 0:i.getImmediate({optional:!0}),this.appCheck||i==null||i.get().then(r=>this.appCheck=r)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((i,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(i,r):i(null)},0)})}addTokenChangeListener(t){var i;(i=this.appCheckProvider)===null||i===void 0||i.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){bt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class pA{constructor(t,i,r){this.appName_=t,this.firebaseOptions_=i,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(o=>this.auth_=o)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(i=>i&&i.code==="auth/token-not-initialized"?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(i,r):i(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(i=>i.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(i=>i.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',bt(t)}}class go{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}go.OWNER="owner";/**
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
 */const Nh="5",my="v",gy="s",_y="r",vy="f",yy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ey="ls",by="p",Zf="ac",Sy="websocket",Ty="long_polling";/**
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
 */class Cy{constructor(t,i,r,o,c=!1,h="",d=!1,m=!1,g=null){this.secure=i,this.namespace=r,this.webSocketOnly=o,this.nodeAdmin=c,this.persistenceKey=h,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ki.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Ki.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${i}`}}function mA(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function Ay(s,t,i){U(typeof t=="string","typeof type must == string"),U(typeof i=="object","typeof params must == object");let r;if(t===Sy)r=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(t===Ty)r=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);mA(s)&&(i.ns=s.namespace);const o=[];return St(i,(c,h)=>{o.push(c+"="+h)}),r+o.join("&")}/**
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
 */class gA{constructor(){this.counters_={}}incrementCounter(t,i=1){zn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=i}get(){return _S(this.counters_)}}/**
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
 */const xf={},kf={};function Oh(s){const t=s.toString();return xf[t]||(xf[t]=new gA),xf[t]}function _A(s,t){const i=s.toString();return kf[i]||(kf[i]=t()),kf[i]}/**
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
 */class vA{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,i){this.closeAfterResponse=t,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,i){for(this.pendingResponses[t]=i;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<r.length;++o)r[o]&&ca(()=>{this.onMessage_(r[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const B_="start",yA="close",EA="pLPCommand",bA="pRTLPCB",wy="id",Ry="pw",Ny="ser",SA="cb",TA="seg",CA="ts",AA="d",wA="dframe",Oy=1870,Dy=30,RA=Oy-Dy,NA=25e3,OA=3e4;class Fs{constructor(t,i,r,o,c,h,d){this.connId=t,this.repoInfo=i,this.applicationId=r,this.appCheckToken=o,this.authToken=c,this.transportSessionId=h,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Pr(t),this.stats_=Oh(i),this.urlFn=m=>(this.appCheckToken&&(m[Zf]=this.appCheckToken),Ay(i,Ty,m))}open(t,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new vA(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(OA)),sA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Dh((...c)=>{const[h,d,m,g,v]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===B_)this.id=d,this.password=m;else if(h===yA)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...c)=>{const[h,d]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(h,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[B_]="t",r[Ny]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[SA]=this.scriptTagHolder.uniqueCallbackIdentifier),r[my]=Nh,this.transportSessionId&&(r[gy]=this.transportSessionId),this.lastSessionId&&(r[Ey]=this.lastSessionId),this.applicationId&&(r[by]=this.applicationId),this.appCheckToken&&(r[Zf]=this.appCheckToken),typeof location<"u"&&location.hostname&&yy.test(location.hostname)&&(r[_y]=vy);const o=this.urlFn(r);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fs.forceAllow_=!0}static forceDisallow(){Fs.forceDisallow_=!0}static isAvailable(){return Fs.forceAllow_?!0:!Fs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rA()&&!lA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const i=Be(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const r=yv(i),o=dy(r,RA);for(let c=0;c<o.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[c]),this.curSegmentNum++}addDisconnectPingFrame(t,i){this.myDisconnFrame=document.createElement("iframe");const r={};r[wA]="t",r[wy]=t,r[Ry]=i,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const i=Be(t).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class Dh{constructor(t,i,r,o){this.onDisconnect=r,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=tA(),window[EA+this.uniqueCallbackIdentifier]=t,window[bA+this.uniqueCallbackIdentifier]=i,this.myIFrame=Dh.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(d){lt("frame writing exception"),d.stack&&lt(d.stack),lt(d)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||lt("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,i){for(this.myID=t,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[wy]=this.myID,t[Ry]=this.myPW,t[Ny]=this.currentSerial;let i=this.urlFn(t),r="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Dy+r.length<=Oy;){const h=this.pendingSegs.shift();r=r+"&"+TA+o+"="+h.seg+"&"+CA+o+"="+h.ts+"&"+AA+o+"="+h.d,o++}return i=i+r,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(t,i,r){this.pendingSegs.push({seg:t,ts:i,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,i){this.outstandingRequests.add(i);const r=()=>{this.outstandingRequests.delete(i),this.newRequest_()},o=setTimeout(r,Math.floor(NA)),c=()=>{clearTimeout(o),r()};this.addTag(t,c)}addTag(t,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const o=r.readyState;(!o||o==="loaded"||o==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),i())},r.onerror=()=>{lt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const DA=16384,MA=45e3;let Ro=null;typeof MozWebSocket<"u"?Ro=MozWebSocket:typeof WebSocket<"u"&&(Ro=WebSocket);class Qt{constructor(t,i,r,o,c,h,d){this.connId=t,this.applicationId=r,this.appCheckToken=o,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Pr(this.connId),this.stats_=Oh(i),this.connURL=Qt.connectionURL_(i,h,d,o,r),this.nodeAdmin=i.nodeAdmin}static connectionURL_(t,i,r,o,c){const h={};return h[my]=Nh,typeof location<"u"&&location.hostname&&yy.test(location.hostname)&&(h[_y]=vy),i&&(h[gy]=i),r&&(h[Ey]=r),o&&(h[Zf]=o),c&&(h[by]=c),Ay(t,Sy,h)}open(t,i){this.onDisconnect=i,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ki.set("previous_websocket_failure",!0);try{let r;NS(),this.mySock=new Ro(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){Qt.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(i);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&Ro!==null&&!Qt.forceDisallow_}static previouslyFailed(){return Ki.isInMemoryStorage||Ki.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ki.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const r=Sr(i);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(U(this.frames===null,"We already have a frame buffer"),t.length<=6){const i=Number(t);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const i=t.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const r=this.extractFrameCount_(i);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const i=Be(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const r=dy(i,DA);r.length>1&&this.sendString_(String(r.length));for(let o=0;o<r.length;o++)this.sendString_(r[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(MA))}sendString_(t){try{this.mySock.send(t)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qt.responsesRequiredToBeHealthy=2;Qt.healthyTimeout=3e4;/**
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
 */class Ar{static get ALL_TRANSPORTS(){return[Fs,Qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const i=Qt&&Qt.isAvailable();let r=i&&!Qt.previouslyFailed();if(t.webSocketOnly&&(i||bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Qt];else{const o=this.transports_=[];for(const c of Ar.ALL_TRANSPORTS)c&&c.isAvailable()&&o.push(c);Ar.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ar.globalTransportInitialized_=!1;/**
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
 */const IA=6e4,xA=5e3,kA=10*1024,UA=100*1024,Uf="t",P_="d",LA="s",j_="r",zA="e",q_="o",V_="a",G_="n",Y_="p",HA="h";class BA{constructor(t,i,r,o,c,h,d,m,g,v){this.id=t,this.repoInfo_=i,this.applicationId_=r,this.appCheckToken_=o,this.authToken_=c,this.onMessage_=h,this.onReady_=d,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Pr("c:"+this.id+":"),this.transportManager_=new Ar(i),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,r)},Math.floor(0));const o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=_r(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>UA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>kA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return i=>{t===this.conn_?this.onConnectionLost_(i):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return i=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(i):t===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(t){const i={t:"d",d:t};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Uf in t){const i=t[Uf];i===V_?this.upgradeIfSecondaryHealthy_():i===j_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===q_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const i=fr("t",t),r=fr("d",t);if(i==="c")this.onSecondaryControl_(r);else if(i==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Y_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:V_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:G_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const i=fr("t",t),r=fr("d",t);i==="c"?this.onControl_(r):i==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const i=fr(Uf,t);if(P_ in t){const r=t[P_];if(i===HA){const o=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(i===G_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===LA?this.onConnectionShutdown_(r):i===j_?this.onReset_(r):i===zA?Kf("Server Error: "+r):i===q_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Kf("Unknown control packet command: "+i)}}onHandshake_(t){const i=t.ts,r=t.v,o=t.h;this.sessionId=t.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),Nh!==r&&bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,r),_r(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(IA))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,i){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_r(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(xA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Y_,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ki.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class My{put(t,i,r,o){}merge(t,i,r,o){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,i,r){}onDisconnectMerge(t,i,r){}onDisconnectCancel(t,i){}reportStats(t){}}/**
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
 */class Iy{constructor(t){this.allowedEvents_=t,this.listeners_={},U(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...i){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let o=0;o<r.length;o++)r[o].callback.apply(r[o].context,i)}}on(t,i,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:i,context:r});const o=this.getInitialEvent(t);o&&i.apply(r,o)}off(t,i,r){this.validateEventType_(t);const o=this.listeners_[t]||[];for(let c=0;c<o.length;c++)if(o[c].callback===i&&(!r||r===o[c].context)){o.splice(c,1);return}}validateEventType_(t){U(this.allowedEvents_.find(i=>i===t),"Unknown event: "+t)}}/**
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
 */class No extends Iy{static getInstance(){return new No}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return U(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Q_=32,F_=768;class Se{constructor(t,i){if(i===void 0){this.pieces_=t.split("/");let r=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[r]=this.pieces_[o],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=i}toString(){let t="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(t+="/"+this.pieces_[i]);return t||"/"}}function he(){return new Se("")}function ne(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function bi(s){return s.pieces_.length-s.pieceNum_}function Ce(s){let t=s.pieceNum_;return t<s.pieces_.length&&t++,new Se(s.pieces_,t)}function xy(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function PA(s){let t="";for(let i=s.pieceNum_;i<s.pieces_.length;i++)s.pieces_[i]!==""&&(t+="/"+encodeURIComponent(String(s.pieces_[i])));return t||"/"}function ky(s,t=0){return s.pieces_.slice(s.pieceNum_+t)}function Uy(s){if(s.pieceNum_>=s.pieces_.length)return null;const t=[];for(let i=s.pieceNum_;i<s.pieces_.length-1;i++)t.push(s.pieces_[i]);return new Se(t,0)}function Pe(s,t){const i=[];for(let r=s.pieceNum_;r<s.pieces_.length;r++)i.push(s.pieces_[r]);if(t instanceof Se)for(let r=t.pieceNum_;r<t.pieces_.length;r++)i.push(t.pieces_[r]);else{const r=t.split("/");for(let o=0;o<r.length;o++)r[o].length>0&&i.push(r[o])}return new Se(i,0)}function re(s){return s.pieceNum_>=s.pieces_.length}function ft(s,t){const i=ne(s),r=ne(t);if(i===null)return t;if(i===r)return ft(Ce(s),Ce(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+s+")")}function Mh(s,t){if(bi(s)!==bi(t))return!1;for(let i=s.pieceNum_,r=t.pieceNum_;i<=s.pieces_.length;i++,r++)if(s.pieces_[i]!==t.pieces_[r])return!1;return!0}function Ft(s,t){let i=s.pieceNum_,r=t.pieceNum_;if(bi(s)>bi(t))return!1;for(;i<s.pieces_.length;){if(s.pieces_[i]!==t.pieces_[r])return!1;++i,++r}return!0}class jA{constructor(t,i){this.errorPrefix_=i,this.parts_=ky(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=qo(this.parts_[r]);Ly(this)}}function qA(s,t){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(t),s.byteLength_+=qo(t),Ly(s)}function VA(s){const t=s.parts_.pop();s.byteLength_-=qo(t),s.parts_.length>0&&(s.byteLength_-=1)}function Ly(s){if(s.byteLength_>F_)throw new Error(s.errorPrefix_+"has a key path longer than "+F_+" bytes ("+s.byteLength_+").");if(s.parts_.length>Q_)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Q_+") or object contains a cycle "+Fi(s))}function Fi(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
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
 */class Ih extends Iy{static getInstance(){return new Ih}constructor(){super(["visible"]);let t,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(t){return U(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const hr=1e3,GA=60*5*1e3,X_=30*1e3,YA=1.3,QA=3e4,FA="server_kill",K_=3;class Dn extends My{constructor(t,i,r,o,c,h,d,m){if(super(),this.repoInfo_=t,this.applicationId_=i,this.onDataUpdate_=r,this.onConnectStatus_=o,this.onServerInfoUpdate_=c,this.authTokenProvider_=h,this.appCheckTokenProvider_=d,this.authOverride_=m,this.id=Dn.nextPersistentConnectionId_++,this.log_=Pr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=hr,this.maxReconnectDelay_=GA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ih.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&No.getInstance().on("online",this.onOnline_,this)}sendRequest(t,i,r){const o=++this.requestNumber_,c={r:o,a:t,b:i};this.log_(Be(c)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),r&&(this.requestCBHash_[o]=r)}get(t){this.initConnection_();const i=new jo,o={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:h=>{const d=h.d;h.s==="ok"?i.resolve(d):i.reject(d)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),i.promise}listen(t,i,r,o){this.initConnection_();const c=t._queryIdentifier,h=t._path.toString();this.log_("Listen called for "+h+" "+c),this.listens.has(h)||this.listens.set(h,new Map),U(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(h).has(c),"listen() called twice for same path/queryId.");const d={onComplete:o,hashFn:i,query:t,tag:r};this.listens.get(h).set(c,d),this.connected_&&this.sendListen_(d)}sendGet_(t){const i=this.outstandingGets_[t];this.sendRequest("g",i.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(r)})}sendListen_(t){const i=t.query,r=i._path.toString(),o=i._queryIdentifier;this.log_("Listen on "+r+" for "+o);const c={p:r},h="q";t.tag&&(c.q=i._queryObject,c.t=t.tag),c.h=t.hashFn(),this.sendRequest(h,c,d=>{const m=d.d,g=d.s;Dn.warnOnListenWarnings_(m,i),(this.listens.get(r)&&this.listens.get(r).get(o))===t&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(r,o),t.onComplete&&t.onComplete(g,m))})}static warnOnListenWarnings_(t,i){if(t&&typeof t=="object"&&zn(t,"w")){const r=$s(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const o='".indexOn": "'+i._queryParams.getIndex().toString()+'"',c=i._path.toString();bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||US(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=X_)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,i=kS(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(i,r,o=>{const c=o.s,h=o.d||"error";this.authToken_===t&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const i=t.s,r=t.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,r)})}unlisten(t,i){const r=t._path.toString(),o=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+o),U(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,o)&&this.connected_&&this.sendUnlisten_(r,o,t._queryObject,i)}sendUnlisten_(t,i,r,o){this.log_("Unlisten on "+t+" for "+i);const c={p:t},h="n";o&&(c.q=r,c.t=o),this.sendRequest(h,c)}onDisconnectPut(t,i,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,i,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:i,onComplete:r})}onDisconnectMerge(t,i,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,i,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:i,onComplete:r})}onDisconnectCancel(t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(t,i,r,o){const c={p:i,d:r};this.log_("onDisconnect "+t,c),this.sendRequest(t,c,h=>{o&&setTimeout(()=>{o(h.s,h.d)},Math.floor(0))})}put(t,i,r,o){this.putInternal("p",t,i,r,o)}merge(t,i,r,o){this.putInternal("m",t,i,r,o)}putInternal(t,i,r,o,c){this.initConnection_();const h={p:i,d:r};c!==void 0&&(h.h=c),this.outstandingPuts_.push({action:t,request:h,onComplete:o}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+i)}sendPut_(t){const i=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,o=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(i,r,c=>{this.log_(i+" response",c),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(c.s,c.d)})}reportStats(t){if(this.connected_){const i={c:t};this.log_("reportStats",i),this.sendRequest("s",i,r=>{if(r.s!=="ok"){const c=r.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Be(t));const i=t.r,r=this.requestCBHash_[i];r&&(delete this.requestCBHash_[i],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,i){this.log_("handleServerMessage",t,i),t==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):t==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):t==="c"?this.onListenRevoked_(i.p,i.q):t==="ac"?this.onAuthRevoked_(i.s,i.d):t==="apc"?this.onAppCheckRevoked_(i.s,i.d):t==="sd"?this.onSecurityDebugPacket_(i):Kf("Unrecognized action received from server: "+Be(t)+`
Are you using the latest client?`)}onReady_(t,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=hr,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=hr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>QA&&(this.reconnectDelay_=hr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let i=Math.max(0,this.reconnectDelay_-t);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*YA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Dn.nextConnectionId_++,c=this.lastSessionId;let h=!1,d=null;const m=function(){d?d.close():(h=!0,r())},g=function(E){U(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(E)};this.realtime_={close:m,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,C]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);h?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=C&&C.token,d=new BA(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,i,r,k=>{bt(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(FA)},c))}catch(E){this.log_("Failed to get token: "+E),h||(this.repoInfo_.nodeAdmin&&bt(E),m())}}}interrupt(t){lt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){lt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Pf(this.interruptReasons_)&&(this.reconnectDelay_=hr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const i=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const i=this.outstandingPuts_[t];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,i){let r;i?r=i.map(c=>Rh(c)).join("$"):r="default";const o=this.removeListen_(t,r);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(t,i){const r=new Se(t).toString();let o;if(this.listens.has(r)){const c=this.listens.get(r);o=c.get(i),c.delete(i),c.size===0&&this.listens.delete(r)}else o=void 0;return o}onAuthRevoked_(t,i){lt("Auth token revoked: "+t+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=K_&&(this.reconnectDelay_=X_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,i){lt("App check token revoked: "+t+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=K_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const i of t.values())this.sendListen_(i);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let i="js";t["sdk."+i+"."+uy.replace(/\./g,"-")]=1,fh()?t["framework.cordova"]=1:Cv()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=No.getInstance().currentlyOnline();return Pf(this.interruptReasons_)&&t}}Dn.nextPersistentConnectionId_=0;Dn.nextConnectionId_=0;/**
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
 */class ie{constructor(t,i){this.name=t,this.node=i}static Wrap(t,i){return new ie(t,i)}}/**
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
 */class Qo{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,i){const r=new ie(na,t),o=new ie(na,i);return this.compare(r,o)!==0}minPost(){return ie.MIN}}/**
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
 */let oo;class zy extends Qo{static get __EMPTY_NODE(){return oo}static set __EMPTY_NODE(t){oo=t}compare(t,i){return ua(t.name,i.name)}isDefinedOn(t){throw aa("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,i){return!1}minPost(){return ie.MIN}maxPost(){return new ie(ns,oo)}makePost(t,i){return U(typeof t=="string","KeyIndex indexValue must always be a string."),new ie(t,oo)}toString(){return".key"}}const Js=new zy;/**
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
 */class uo{constructor(t,i,r,o,c=null){this.isReverse_=o,this.resultGenerator_=c,this.nodeStack_=[];let h=1;for(;!t.isEmpty();)if(t=t,h=i?r(t.key,i):1,o&&(h*=-1),h<0)this.isReverse_?t=t.left:t=t.right;else if(h===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(t.key,t.value):i={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Qe{constructor(t,i,r,o,c){this.key=t,this.value=i,this.color=r??Qe.RED,this.left=o??Et.EMPTY_NODE,this.right=c??Et.EMPTY_NODE}copy(t,i,r,o,c){return new Qe(t??this.key,i??this.value,r??this.color,o??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,r){let o=this;const c=r(t,o.key);return c<0?o=o.copy(null,null,null,o.left.insert(t,i,r),null):c===0?o=o.copy(null,i,null,null,null):o=o.copy(null,null,null,null,o.right.insert(t,i,r)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Et.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,i){let r,o;if(r=this,i(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,i),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),i(t,r.key)===0){if(r.right.isEmpty())return Et.EMPTY_NODE;o=r.right.min_(),r=r.copy(o.key,o.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,i))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Qe.RED=!0;Qe.BLACK=!1;class XA{copy(t,i,r,o,c){return this}insert(t,i,r){return new Qe(t,i,null)}remove(t,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Et{constructor(t,i=Et.EMPTY_NODE){this.comparator_=t,this.root_=i}insert(t,i){return new Et(this.comparator_,this.root_.insert(t,i,this.comparator_).copy(null,null,Qe.BLACK,null,null))}remove(t){return new Et(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Qe.BLACK,null,null))}get(t){let i,r=this.root_;for(;!r.isEmpty();){if(i=this.comparator_(t,r.key),i===0)return r.value;i<0?r=r.left:i>0&&(r=r.right)}return null}getPredecessorKey(t){let i,r=this.root_,o=null;for(;!r.isEmpty();)if(i=this.comparator_(t,r.key),i===0){if(r.left.isEmpty())return o?o.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else i<0?r=r.left:i>0&&(o=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new uo(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,i){return new uo(this.root_,t,this.comparator_,!1,i)}getReverseIteratorFrom(t,i){return new uo(this.root_,t,this.comparator_,!0,i)}getReverseIterator(t){return new uo(this.root_,null,this.comparator_,!0,t)}}Et.EMPTY_NODE=new XA;/**
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
 */function KA(s,t){return ua(s.name,t.name)}function xh(s,t){return ua(s,t)}/**
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
 */let Wf;function ZA(s){Wf=s}const Hy=function(s){return typeof s=="number"?"number:"+py(s):"string:"+s},By=function(s){if(s.isLeafNode()){const t=s.val();U(typeof t=="string"||typeof t=="number"||typeof t=="object"&&zn(t,".sv"),"Priority must be a string or number.")}else U(s===Wf||s.isEmpty(),"priority of unexpected type.");U(s===Wf||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Z_;class Ye{static set __childrenNodeConstructor(t){Z_=t}static get __childrenNodeConstructor(){return Z_}constructor(t,i=Ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=i,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),By(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Ye(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return re(t)?this:ne(t)===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,i){return null}updateImmediateChild(t,i){return t===".priority"?this.updatePriority(i):i.isEmpty()&&t!==".priority"?this:Ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,i).updatePriority(this.priorityNode_)}updateChild(t,i){const r=ne(t);return r===null?i:i.isEmpty()&&r!==".priority"?this:(U(r!==".priority"||bi(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(t),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,i){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Hy(this.priorityNode_.val())+":");const i=typeof this.value_;t+=i+":",i==="number"?t+=py(this.value_):t+=this.value_,this.lazyHash_=fy(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Ye.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Ye.__childrenNodeConstructor?-1:(U(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const i=typeof t.value_,r=typeof this.value_,o=Ye.VALUE_TYPE_ORDER.indexOf(i),c=Ye.VALUE_TYPE_ORDER.indexOf(r);return U(o>=0,"Unknown leaf type: "+i),U(c>=0,"Unknown leaf type: "+r),o===c?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:c-o}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const i=t;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}Ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Py,jy;function WA(s){Py=s}function JA(s){jy=s}class $A extends Qo{compare(t,i){const r=t.node.getPriority(),o=i.node.getPriority(),c=r.compareTo(o);return c===0?ua(t.name,i.name):c}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,i){return!t.getPriority().equals(i.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(ns,new Ye("[PRIORITY-POST]",jy))}makePost(t,i){const r=Py(t);return new ie(i,new Ye("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ie=new $A;/**
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
 */const ew=Math.log(2);class tw{constructor(t){const i=c=>parseInt(Math.log(c)/ew,10),r=c=>parseInt(Array(c+1).join("1"),2);this.count=i(t+1),this.current_=this.count-1;const o=r(this.count);this.bits_=t+1&o}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Oo=function(s,t,i,r){s.sort(t);const o=function(m,g){const v=g-m;let E,C;if(v===0)return null;if(v===1)return E=s[m],C=i?i(E):E,new Qe(C,E.node,Qe.BLACK,null,null);{const k=parseInt(v/2,10)+m,L=o(m,k),W=o(k+1,g);return E=s[k],C=i?i(E):E,new Qe(C,E.node,Qe.BLACK,L,W)}},c=function(m){let g=null,v=null,E=s.length;const C=function(L,W){const le=E-L,Xe=E;E-=L;const Ke=o(le+1,Xe),we=s[le],et=i?i(we):we;k(new Qe(et,we.node,W,null,Ke))},k=function(L){g?(g.left=L,g=L):(v=L,g=L)};for(let L=0;L<m.count;++L){const W=m.nextBitIsOne(),le=Math.pow(2,m.count-(L+1));W?C(le,Qe.BLACK):(C(le,Qe.BLACK),C(le,Qe.RED))}return v},h=new tw(s.length),d=c(h);return new Et(r||t,d)};/**
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
 */let Lf;const Qs={};class On{static get Default(){return U(Qs&&Ie,"ChildrenNode.ts has not been loaded"),Lf=Lf||new On({".priority":Qs},{".priority":Ie}),Lf}constructor(t,i){this.indexes_=t,this.indexSet_=i}get(t){const i=$s(this.indexes_,t);if(!i)throw new Error("No index defined for "+t);return i instanceof Et?i:null}hasIndex(t){return zn(this.indexSet_,t.toString())}addIndex(t,i){U(t!==Js,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let o=!1;const c=i.getIterator(ie.Wrap);let h=c.getNext();for(;h;)o=o||t.isDefinedOn(h.node),r.push(h),h=c.getNext();let d;o?d=Oo(r,t.getCompare()):d=Qs;const m=t.toString(),g=Object.assign({},this.indexSet_);g[m]=t;const v=Object.assign({},this.indexes_);return v[m]=d,new On(v,g)}addToIndexes(t,i){const r=Eo(this.indexes_,(o,c)=>{const h=$s(this.indexSet_,c);if(U(h,"Missing index implementation for "+c),o===Qs)if(h.isDefinedOn(t.node)){const d=[],m=i.getIterator(ie.Wrap);let g=m.getNext();for(;g;)g.name!==t.name&&d.push(g),g=m.getNext();return d.push(t),Oo(d,h.getCompare())}else return Qs;else{const d=i.get(t.name);let m=o;return d&&(m=m.remove(new ie(t.name,d))),m.insert(t,t.node)}});return new On(r,this.indexSet_)}removeFromIndexes(t,i){const r=Eo(this.indexes_,o=>{if(o===Qs)return o;{const c=i.get(t.name);return c?o.remove(new ie(t.name,c)):o}});return new On(r,this.indexSet_)}}/**
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
 */let dr;class F{static get EMPTY_NODE(){return dr||(dr=new F(new Et(xh),null,On.Default))}constructor(t,i,r){this.children_=t,this.priorityNode_=i,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&By(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||dr}updatePriority(t){return this.children_.isEmpty()?this:new F(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const i=this.children_.get(t);return i===null?dr:i}}getChild(t){const i=ne(t);return i===null?this:this.getImmediateChild(i).getChild(Ce(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,i){if(U(i,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(i);{const r=new ie(t,i);let o,c;i.isEmpty()?(o=this.children_.remove(t),c=this.indexMap_.removeFromIndexes(r,this.children_)):(o=this.children_.insert(t,i),c=this.indexMap_.addToIndexes(r,this.children_));const h=o.isEmpty()?dr:this.priorityNode_;return new F(o,h,c)}}updateChild(t,i){const r=ne(t);if(r===null)return i;{U(ne(t)!==".priority"||bi(t)===1,".priority must be the last token in a path");const o=this.getImmediateChild(r).updateChild(Ce(t),i);return this.updateImmediateChild(r,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const i={};let r=0,o=0,c=!0;if(this.forEachChild(Ie,(h,d)=>{i[h]=d.val(t),r++,c&&F.INTEGER_REGEXP_.test(h)?o=Math.max(o,Number(h)):c=!1}),!t&&c&&o<2*r){const h=[];for(const d in i)h[d]=i[d];return h}else return t&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+Hy(this.getPriority().val())+":"),this.forEachChild(Ie,(i,r)=>{const o=r.hash();o!==""&&(t+=":"+i+":"+o)}),this.lazyHash_=t===""?"":fy(t)}return this.lazyHash_}getPredecessorChildName(t,i,r){const o=this.resolveIndex_(r);if(o){const c=o.getPredecessorKey(new ie(t,i));return c?c.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const i=this.resolveIndex_(t);if(i){const r=i.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const i=this.getFirstChildName(t);return i?new ie(i,this.children_.get(i)):null}getLastChildName(t){const i=this.resolveIndex_(t);if(i){const r=i.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const i=this.getLastChildName(t);return i?new ie(i,this.children_.get(i)):null}forEachChild(t,i){const r=this.resolveIndex_(t);return r?r.inorderTraversal(o=>i(o.name,o.node)):this.children_.inorderTraversal(i)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,i){const r=this.resolveIndex_(i);if(r)return r.getIteratorFrom(t,o=>o);{const o=this.children_.getIteratorFrom(t.name,ie.Wrap);let c=o.peek();for(;c!=null&&i.compare(c,t)<0;)o.getNext(),c=o.peek();return o}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,i){const r=this.resolveIndex_(i);if(r)return r.getReverseIteratorFrom(t,o=>o);{const o=this.children_.getReverseIteratorFrom(t.name,ie.Wrap);let c=o.peek();for(;c!=null&&i.compare(c,t)>0;)o.getNext(),c=o.peek();return o}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===jr?-1:0}withIndex(t){if(t===Js||this.indexMap_.hasIndex(t))return this;{const i=this.indexMap_.addIndex(t,this.children_);return new F(this.children_,this.priorityNode_,i)}}isIndexed(t){return t===Js||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const i=t;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const r=this.getIterator(Ie),o=i.getIterator(Ie);let c=r.getNext(),h=o.getNext();for(;c&&h;){if(c.name!==h.name||!c.node.equals(h.node))return!1;c=r.getNext(),h=o.getNext()}return c===null&&h===null}else return!1;else return!1}}resolveIndex_(t){return t===Js?null:this.indexMap_.get(t.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class nw extends F{constructor(){super(new Et(xh),F.EMPTY_NODE,On.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return F.EMPTY_NODE}isEmpty(){return!1}}const jr=new nw;Object.defineProperties(ie,{MIN:{value:new ie(na,F.EMPTY_NODE)},MAX:{value:new ie(ns,jr)}});zy.__EMPTY_NODE=F.EMPTY_NODE;Ye.__childrenNodeConstructor=F;ZA(jr);JA(jr);/**
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
 */const iw=!0;function Fe(s,t=null){if(s===null)return F.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(t=s[".priority"]),U(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const i=s;return new Ye(i,Fe(t))}if(!(s instanceof Array)&&iw){const i=[];let r=!1;if(St(s,(h,d)=>{if(h.substring(0,1)!=="."){const m=Fe(d);m.isEmpty()||(r=r||!m.getPriority().isEmpty(),i.push(new ie(h,m)))}}),i.length===0)return F.EMPTY_NODE;const c=Oo(i,KA,h=>h.name,xh);if(r){const h=Oo(i,Ie.getCompare());return new F(c,Fe(t),new On({".priority":h},{".priority":Ie}))}else return new F(c,Fe(t),On.Default)}else{let i=F.EMPTY_NODE;return St(s,(r,o)=>{if(zn(s,r)&&r.substring(0,1)!=="."){const c=Fe(o);(c.isLeafNode()||!c.isEmpty())&&(i=i.updateImmediateChild(r,c))}}),i.updatePriority(Fe(t))}}WA(Fe);/**
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
 */class sw extends Qo{constructor(t){super(),this.indexPath_=t,U(!re(t)&&ne(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,i){const r=this.extractChild(t.node),o=this.extractChild(i.node),c=r.compareTo(o);return c===0?ua(t.name,i.name):c}makePost(t,i){const r=Fe(t),o=F.EMPTY_NODE.updateChild(this.indexPath_,r);return new ie(i,o)}maxPost(){const t=F.EMPTY_NODE.updateChild(this.indexPath_,jr);return new ie(ns,t)}toString(){return ky(this.indexPath_,0).join("/")}}/**
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
 */class aw extends Qo{compare(t,i){const r=t.node.compareTo(i.node);return r===0?ua(t.name,i.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,i){return!t.equals(i)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(t,i){const r=Fe(t);return new ie(i,r)}toString(){return".value"}}const rw=new aw;/**
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
 */function qy(s){return{type:"value",snapshotNode:s}}function ia(s,t){return{type:"child_added",snapshotNode:t,childName:s}}function wr(s,t){return{type:"child_removed",snapshotNode:t,childName:s}}function Rr(s,t,i){return{type:"child_changed",snapshotNode:t,childName:s,oldSnap:i}}function lw(s,t){return{type:"child_moved",snapshotNode:t,childName:s}}/**
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
 */class kh{constructor(t){this.index_=t}updateChild(t,i,r,o,c,h){U(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=t.getImmediateChild(i);return d.getChild(o).equals(r.getChild(o))&&d.isEmpty()===r.isEmpty()||(h!=null&&(r.isEmpty()?t.hasChild(i)?h.trackChildChange(wr(i,d)):U(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?h.trackChildChange(ia(i,r)):h.trackChildChange(Rr(i,r,d))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(i,r).withIndex(this.index_)}updateFullNode(t,i,r){return r!=null&&(t.isLeafNode()||t.forEachChild(Ie,(o,c)=>{i.hasChild(o)||r.trackChildChange(wr(o,c))}),i.isLeafNode()||i.forEachChild(Ie,(o,c)=>{if(t.hasChild(o)){const h=t.getImmediateChild(o);h.equals(c)||r.trackChildChange(Rr(o,c,h))}else r.trackChildChange(ia(o,c))})),i.withIndex(this.index_)}updatePriority(t,i){return t.isEmpty()?F.EMPTY_NODE:t.updatePriority(i)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Nr{constructor(t){this.indexedFilter_=new kh(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Nr.getStartPost_(t),this.endPost_=Nr.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const i=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return i&&r}updateChild(t,i,r,o,c,h){return this.matches(new ie(i,r))||(r=F.EMPTY_NODE),this.indexedFilter_.updateChild(t,i,r,o,c,h)}updateFullNode(t,i,r){i.isLeafNode()&&(i=F.EMPTY_NODE);let o=i.withIndex(this.index_);o=o.updatePriority(F.EMPTY_NODE);const c=this;return i.forEachChild(Ie,(h,d)=>{c.matches(new ie(h,d))||(o=o.updateImmediateChild(h,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,o,r)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const i=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),i)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const i=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),i)}else return t.getIndex().maxPost()}}/**
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
 */class ow{constructor(t){this.withinDirectionalStart=i=>this.reverse_?this.withinEndPost(i):this.withinStartPost(i),this.withinDirectionalEnd=i=>this.reverse_?this.withinStartPost(i):this.withinEndPost(i),this.withinStartPost=i=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),i);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=i=>{const r=this.index_.compare(i,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Nr(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,i,r,o,c,h){return this.rangedFilter_.matches(new ie(i,r))||(r=F.EMPTY_NODE),t.getImmediateChild(i).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,i,r,o,c,h):this.fullLimitUpdateChild_(t,i,r,c,h)}updateFullNode(t,i,r){let o;if(i.isLeafNode()||i.isEmpty())o=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<i.numChildren()&&i.isIndexed(this.index_)){o=F.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=i.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=i.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;c.hasNext()&&h<this.limit_;){const d=c.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))o=o.updateImmediateChild(d.name,d.node),h++;else break;else continue}}else{o=i.withIndex(this.index_),o=o.updatePriority(F.EMPTY_NODE);let c;this.reverse_?c=o.getReverseIterator(this.index_):c=o.getIterator(this.index_);let h=0;for(;c.hasNext();){const d=c.getNext();h<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?h++:o=o.updateImmediateChild(d.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,o,r)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,i,r,o,c){let h;if(this.reverse_){const E=this.index_.getCompare();h=(C,k)=>E(k,C)}else h=this.index_.getCompare();const d=t;U(d.numChildren()===this.limit_,"");const m=new ie(i,r),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),v=this.rangedFilter_.matches(m);if(d.hasChild(i)){const E=d.getImmediateChild(i);let C=o.getChildAfterChild(this.index_,g,this.reverse_);for(;C!=null&&(C.name===i||d.hasChild(C.name));)C=o.getChildAfterChild(this.index_,C,this.reverse_);const k=C==null?1:h(C,m);if(v&&!r.isEmpty()&&k>=0)return c!=null&&c.trackChildChange(Rr(i,r,E)),d.updateImmediateChild(i,r);{c!=null&&c.trackChildChange(wr(i,E));const W=d.updateImmediateChild(i,F.EMPTY_NODE);return C!=null&&this.rangedFilter_.matches(C)?(c!=null&&c.trackChildChange(ia(C.name,C.node)),W.updateImmediateChild(C.name,C.node)):W}}else return r.isEmpty()?t:v&&h(g,m)>=0?(c!=null&&(c.trackChildChange(wr(g.name,g.node)),c.trackChildChange(ia(i,r))),d.updateImmediateChild(i,r).updateImmediateChild(g.name,F.EMPTY_NODE)):t}}/**
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
 */class Uh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:na}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ns}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ie}copy(){const t=new Uh;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function uw(s){return s.loadsAllData()?new kh(s.getIndex()):s.hasLimit()?new ow(s):new Nr(s)}function W_(s){const t={};if(s.isDefault())return t;let i;if(s.index_===Ie?i="$priority":s.index_===rw?i="$value":s.index_===Js?i="$key":(U(s.index_ instanceof sw,"Unrecognized index type!"),i=s.index_.toString()),t.orderBy=Be(i),s.startSet_){const r=s.startAfterSet_?"startAfter":"startAt";t[r]=Be(s.indexStartValue_),s.startNameSet_&&(t[r]+=","+Be(s.indexStartName_))}if(s.endSet_){const r=s.endBeforeSet_?"endBefore":"endAt";t[r]=Be(s.indexEndValue_),s.endNameSet_&&(t[r]+=","+Be(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?t.limitToFirst=s.limit_:t.limitToLast=s.limit_),t}function J_(s){const t={};if(s.startSet_&&(t.sp=s.indexStartValue_,s.startNameSet_&&(t.sn=s.indexStartName_),t.sin=!s.startAfterSet_),s.endSet_&&(t.ep=s.indexEndValue_,s.endNameSet_&&(t.en=s.indexEndName_),t.ein=!s.endBeforeSet_),s.limitSet_){t.l=s.limit_;let i=s.viewFrom_;i===""&&(s.isViewFromLeft()?i="l":i="r"),t.vf=i}return s.index_!==Ie&&(t.i=s.index_.toString()),t}/**
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
 */class Do extends My{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,i){return i!==void 0?"tag$"+i:(U(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,i,r,o){super(),this.repoInfo_=t,this.onDataUpdate_=i,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.log_=Pr("p:rest:"),this.listens_={}}listen(t,i,r,o){const c=t._path.toString();this.log_("Listen called for "+c+" "+t._queryIdentifier);const h=Do.getListenId_(t,r),d={};this.listens_[h]=d;const m=W_(t._queryParams);this.restRequest_(c+".json",m,(g,v)=>{let E=v;if(g===404&&(E=null,g=null),g===null&&this.onDataUpdate_(c,E,!1,r),$s(this.listens_,h)===d){let C;g?g===401?C="permission_denied":C="rest_error:"+g:C="ok",o(C,null)}})}unlisten(t,i){const r=Do.getListenId_(t,i);delete this.listens_[r]}get(t){const i=W_(t._queryParams),r=t._path.toString(),o=new jo;return this.restRequest_(r+".json",i,(c,h)=>{let d=h;c===404&&(d=null,c=null),c===null?(this.onDataUpdate_(r,d,!1,null),o.resolve(d)):o.reject(new Error(d))}),o.promise}refreshAuthToken(t){}restRequest_(t,i={},r){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,c])=>{o&&o.accessToken&&(i.auth=o.accessToken),c&&c.token&&(i.ac=c.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+ra(i);this.log_("Sending REST request for "+h);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+h+" received. status:",d.status,"response:",d.responseText);let m=null;if(d.status>=200&&d.status<300){try{m=Sr(d.responseText)}catch{bt("Failed to parse JSON response for "+h+": "+d.responseText)}r(null,m)}else d.status!==401&&d.status!==404&&bt("Got unsuccessful REST response for "+h+" Status: "+d.status),r(d.status);r=null}},d.open("GET",h,!0),d.send()})}}/**
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
 */class cw{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,i){this.rootNode_=this.rootNode_.updateChild(t,i)}}/**
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
 */function Mo(){return{value:null,children:new Map}}function Vy(s,t,i){if(re(t))s.value=i,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(t,i);else{const r=ne(t);s.children.has(r)||s.children.set(r,Mo());const o=s.children.get(r);t=Ce(t),Vy(o,t,i)}}function Jf(s,t,i){s.value!==null?i(t,s.value):fw(s,(r,o)=>{const c=new Se(t.toString()+"/"+r);Jf(o,c,i)})}function fw(s,t){s.children.forEach((i,r)=>{t(r,i)})}/**
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
 */class hw{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),i=Object.assign({},t);return this.last_&&St(this.last_,(r,o)=>{i[r]=i[r]-o}),this.last_=t,i}}/**
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
 */const $_=10*1e3,dw=30*1e3,pw=5*60*1e3;class mw{constructor(t,i){this.server_=i,this.statsToReport_={},this.statsListener_=new hw(t);const r=$_+(dw-$_)*Math.random();_r(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),i={};let r=!1;St(t,(o,c)=>{c>0&&zn(this.statsToReport_,o)&&(i[o]=c,r=!0)}),r&&this.server_.reportStats(i),_r(this.reportStats_.bind(this),Math.floor(Math.random()*2*pw))}}/**
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
 */var Xt;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xt||(Xt={}));function Gy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Lh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zh(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
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
 */class Io{constructor(t,i,r){this.path=t,this.affectedTree=i,this.revert=r,this.type=Xt.ACK_USER_WRITE,this.source=Gy()}operationForChild(t){if(re(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new Se(t));return new Io(he(),i,this.revert)}}else return U(ne(this.path)===t,"operationForChild called for unrelated child."),new Io(Ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class Or{constructor(t,i){this.source=t,this.path=i,this.type=Xt.LISTEN_COMPLETE}operationForChild(t){return re(this.path)?new Or(this.source,he()):new Or(this.source,Ce(this.path))}}/**
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
 */class is{constructor(t,i,r){this.source=t,this.path=i,this.snap=r,this.type=Xt.OVERWRITE}operationForChild(t){return re(this.path)?new is(this.source,he(),this.snap.getImmediateChild(t)):new is(this.source,Ce(this.path),this.snap)}}/**
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
 */class Dr{constructor(t,i,r){this.source=t,this.path=i,this.children=r,this.type=Xt.MERGE}operationForChild(t){if(re(this.path)){const i=this.children.subtree(new Se(t));return i.isEmpty()?null:i.value?new is(this.source,he(),i.value):new Dr(this.source,he(),i)}else return U(ne(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Dr(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Si{constructor(t,i,r){this.node_=t,this.fullyInitialized_=i,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(re(t))return this.isFullyInitialized()&&!this.filtered_;const i=ne(t);return this.isCompleteForChild(i)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
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
 */class gw{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function _w(s,t,i,r){const o=[],c=[];return t.forEach(h=>{h.type==="child_changed"&&s.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&c.push(lw(h.childName,h.snapshotNode))}),pr(s,o,"child_removed",t,r,i),pr(s,o,"child_added",t,r,i),pr(s,o,"child_moved",c,r,i),pr(s,o,"child_changed",t,r,i),pr(s,o,"value",t,r,i),o}function pr(s,t,i,r,o,c){const h=r.filter(d=>d.type===i);h.sort((d,m)=>yw(s,d,m)),h.forEach(d=>{const m=vw(s,d,c);o.forEach(g=>{g.respondsTo(d.type)&&t.push(g.createEvent(m,s.query_))})})}function vw(s,t,i){return t.type==="value"||t.type==="child_removed"||(t.prevName=i.getPredecessorChildName(t.childName,t.snapshotNode,s.index_)),t}function yw(s,t,i){if(t.childName==null||i.childName==null)throw aa("Should only compare child_ events.");const r=new ie(t.childName,t.snapshotNode),o=new ie(i.childName,i.snapshotNode);return s.index_.compare(r,o)}/**
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
 */function Fo(s,t){return{eventCache:s,serverCache:t}}function vr(s,t,i,r){return Fo(new Si(t,i,r),s.serverCache)}function Yy(s,t,i,r){return Fo(s.eventCache,new Si(t,i,r))}function xo(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function ss(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
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
 */let zf;const Ew=()=>(zf||(zf=new Et(aA)),zf);class Ae{static fromObject(t){let i=new Ae(null);return St(t,(r,o)=>{i=i.set(new Se(r),o)}),i}constructor(t,i=Ew()){this.value=t,this.children=i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,i){if(this.value!=null&&i(this.value))return{path:he(),value:this.value};if(re(t))return null;{const r=ne(t),o=this.children.get(r);if(o!==null){const c=o.findRootMostMatchingPathAndValue(Ce(t),i);return c!=null?{path:Pe(new Se(r),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(re(t))return this;{const i=ne(t),r=this.children.get(i);return r!==null?r.subtree(Ce(t)):new Ae(null)}}set(t,i){if(re(t))return new Ae(i,this.children);{const r=ne(t),c=(this.children.get(r)||new Ae(null)).set(Ce(t),i),h=this.children.insert(r,c);return new Ae(this.value,h)}}remove(t){if(re(t))return this.children.isEmpty()?new Ae(null):new Ae(null,this.children);{const i=ne(t),r=this.children.get(i);if(r){const o=r.remove(Ce(t));let c;return o.isEmpty()?c=this.children.remove(i):c=this.children.insert(i,o),this.value===null&&c.isEmpty()?new Ae(null):new Ae(this.value,c)}else return this}}get(t){if(re(t))return this.value;{const i=ne(t),r=this.children.get(i);return r?r.get(Ce(t)):null}}setTree(t,i){if(re(t))return i;{const r=ne(t),c=(this.children.get(r)||new Ae(null)).setTree(Ce(t),i);let h;return c.isEmpty()?h=this.children.remove(r):h=this.children.insert(r,c),new Ae(this.value,h)}}fold(t){return this.fold_(he(),t)}fold_(t,i){const r={};return this.children.inorderTraversal((o,c)=>{r[o]=c.fold_(Pe(t,o),i)}),i(t,this.value,r)}findOnPath(t,i){return this.findOnPath_(t,he(),i)}findOnPath_(t,i,r){const o=this.value?r(i,this.value):!1;if(o)return o;if(re(t))return null;{const c=ne(t),h=this.children.get(c);return h?h.findOnPath_(Ce(t),Pe(i,c),r):null}}foreachOnPath(t,i){return this.foreachOnPath_(t,he(),i)}foreachOnPath_(t,i,r){if(re(t))return this;{this.value&&r(i,this.value);const o=ne(t),c=this.children.get(o);return c?c.foreachOnPath_(Ce(t),Pe(i,o),r):new Ae(null)}}foreach(t){this.foreach_(he(),t)}foreach_(t,i){this.children.inorderTraversal((r,o)=>{o.foreach_(Pe(t,r),i)}),this.value&&i(t,this.value)}foreachChild(t){this.children.inorderTraversal((i,r)=>{r.value&&t(i,r.value)})}}/**
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
 */class Zt{constructor(t){this.writeTree_=t}static empty(){return new Zt(new Ae(null))}}function yr(s,t,i){if(re(t))return new Zt(new Ae(i));{const r=s.writeTree_.findRootMostValueAndPath(t);if(r!=null){const o=r.path;let c=r.value;const h=ft(o,t);return c=c.updateChild(h,i),new Zt(s.writeTree_.set(o,c))}else{const o=new Ae(i),c=s.writeTree_.setTree(t,o);return new Zt(c)}}}function ev(s,t,i){let r=s;return St(i,(o,c)=>{r=yr(r,Pe(t,o),c)}),r}function tv(s,t){if(re(t))return Zt.empty();{const i=s.writeTree_.setTree(t,new Ae(null));return new Zt(i)}}function $f(s,t){return as(s,t)!=null}function as(s,t){const i=s.writeTree_.findRootMostValueAndPath(t);return i!=null?s.writeTree_.get(i.path).getChild(ft(i.path,t)):null}function nv(s){const t=[],i=s.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(Ie,(r,o)=>{t.push(new ie(r,o))}):s.writeTree_.children.inorderTraversal((r,o)=>{o.value!=null&&t.push(new ie(r,o.value))}),t}function yi(s,t){if(re(t))return s;{const i=as(s,t);return i!=null?new Zt(new Ae(i)):new Zt(s.writeTree_.subtree(t))}}function eh(s){return s.writeTree_.isEmpty()}function sa(s,t){return Qy(he(),s.writeTree_,t)}function Qy(s,t,i){if(t.value!=null)return i.updateChild(s,t.value);{let r=null;return t.children.inorderTraversal((o,c)=>{o===".priority"?(U(c.value!==null,"Priority writes must always be leaf nodes"),r=c.value):i=Qy(Pe(s,o),c,i)}),!i.getChild(s).isEmpty()&&r!==null&&(i=i.updateChild(Pe(s,".priority"),r)),i}}/**
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
 */function Xo(s,t){return Zy(t,s)}function bw(s,t,i,r,o){U(r>s.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),s.allWrites.push({path:t,snap:i,writeId:r,visible:o}),o&&(s.visibleWrites=yr(s.visibleWrites,t,i)),s.lastWriteId=r}function Sw(s,t){for(let i=0;i<s.allWrites.length;i++){const r=s.allWrites[i];if(r.writeId===t)return r}return null}function Tw(s,t){const i=s.allWrites.findIndex(d=>d.writeId===t);U(i>=0,"removeWrite called with nonexistent writeId.");const r=s.allWrites[i];s.allWrites.splice(i,1);let o=r.visible,c=!1,h=s.allWrites.length-1;for(;o&&h>=0;){const d=s.allWrites[h];d.visible&&(h>=i&&Cw(d,r.path)?o=!1:Ft(r.path,d.path)&&(c=!0)),h--}if(o){if(c)return Aw(s),!0;if(r.snap)s.visibleWrites=tv(s.visibleWrites,r.path);else{const d=r.children;St(d,m=>{s.visibleWrites=tv(s.visibleWrites,Pe(r.path,m))})}return!0}else return!1}function Cw(s,t){if(s.snap)return Ft(s.path,t);for(const i in s.children)if(s.children.hasOwnProperty(i)&&Ft(Pe(s.path,i),t))return!0;return!1}function Aw(s){s.visibleWrites=Fy(s.allWrites,ww,he()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function ww(s){return s.visible}function Fy(s,t,i){let r=Zt.empty();for(let o=0;o<s.length;++o){const c=s[o];if(t(c)){const h=c.path;let d;if(c.snap)Ft(i,h)?(d=ft(i,h),r=yr(r,d,c.snap)):Ft(h,i)&&(d=ft(h,i),r=yr(r,he(),c.snap.getChild(d)));else if(c.children){if(Ft(i,h))d=ft(i,h),r=ev(r,d,c.children);else if(Ft(h,i))if(d=ft(h,i),re(d))r=ev(r,he(),c.children);else{const m=$s(c.children,ne(d));if(m){const g=m.getChild(Ce(d));r=yr(r,he(),g)}}}else throw aa("WriteRecord should have .snap or .children")}}return r}function Xy(s,t,i,r,o){if(!r&&!o){const c=as(s.visibleWrites,t);if(c!=null)return c;{const h=yi(s.visibleWrites,t);if(eh(h))return i;if(i==null&&!$f(h,he()))return null;{const d=i||F.EMPTY_NODE;return sa(h,d)}}}else{const c=yi(s.visibleWrites,t);if(!o&&eh(c))return i;if(!o&&i==null&&!$f(c,he()))return null;{const h=function(g){return(g.visible||o)&&(!r||!~r.indexOf(g.writeId))&&(Ft(g.path,t)||Ft(t,g.path))},d=Fy(s.allWrites,h,t),m=i||F.EMPTY_NODE;return sa(d,m)}}}function Rw(s,t,i){let r=F.EMPTY_NODE;const o=as(s.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(Ie,(c,h)=>{r=r.updateImmediateChild(c,h)}),r;if(i){const c=yi(s.visibleWrites,t);return i.forEachChild(Ie,(h,d)=>{const m=sa(yi(c,new Se(h)),d);r=r.updateImmediateChild(h,m)}),nv(c).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}else{const c=yi(s.visibleWrites,t);return nv(c).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}}function Nw(s,t,i,r,o){U(r||o,"Either existingEventSnap or existingServerSnap must exist");const c=Pe(t,i);if($f(s.visibleWrites,c))return null;{const h=yi(s.visibleWrites,c);return eh(h)?o.getChild(i):sa(h,o.getChild(i))}}function Ow(s,t,i,r){const o=Pe(t,i),c=as(s.visibleWrites,o);if(c!=null)return c;if(r.isCompleteForChild(i)){const h=yi(s.visibleWrites,o);return sa(h,r.getNode().getImmediateChild(i))}else return null}function Dw(s,t){return as(s.visibleWrites,t)}function Mw(s,t,i,r,o,c,h){let d;const m=yi(s.visibleWrites,t),g=as(m,he());if(g!=null)d=g;else if(i!=null)d=sa(m,i);else return[];if(d=d.withIndex(h),!d.isEmpty()&&!d.isLeafNode()){const v=[],E=h.getCompare(),C=c?d.getReverseIteratorFrom(r,h):d.getIteratorFrom(r,h);let k=C.getNext();for(;k&&v.length<o;)E(k,r)!==0&&v.push(k),k=C.getNext();return v}else return[]}function Iw(){return{visibleWrites:Zt.empty(),allWrites:[],lastWriteId:-1}}function ko(s,t,i,r){return Xy(s.writeTree,s.treePath,t,i,r)}function Hh(s,t){return Rw(s.writeTree,s.treePath,t)}function iv(s,t,i,r){return Nw(s.writeTree,s.treePath,t,i,r)}function Uo(s,t){return Dw(s.writeTree,Pe(s.treePath,t))}function xw(s,t,i,r,o,c){return Mw(s.writeTree,s.treePath,t,i,r,o,c)}function Bh(s,t,i){return Ow(s.writeTree,s.treePath,t,i)}function Ky(s,t){return Zy(Pe(s.treePath,t),s.writeTree)}function Zy(s,t){return{treePath:s,writeTree:t}}/**
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
 */class kw{constructor(){this.changeMap=new Map}trackChildChange(t){const i=t.type,r=t.childName;U(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),U(r!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(r);if(o){const c=o.type;if(i==="child_added"&&c==="child_removed")this.changeMap.set(r,Rr(r,t.snapshotNode,o.snapshotNode));else if(i==="child_removed"&&c==="child_added")this.changeMap.delete(r);else if(i==="child_removed"&&c==="child_changed")this.changeMap.set(r,wr(r,o.oldSnap));else if(i==="child_changed"&&c==="child_added")this.changeMap.set(r,ia(r,t.snapshotNode));else if(i==="child_changed"&&c==="child_changed")this.changeMap.set(r,Rr(r,t.snapshotNode,o.oldSnap));else throw aa("Illegal combination of changes: "+t+" occurred after "+o)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Uw{getCompleteChild(t){return null}getChildAfterChild(t,i,r){return null}}const Wy=new Uw;class Ph{constructor(t,i,r=null){this.writes_=t,this.viewCache_=i,this.optCompleteServerCache_=r}getCompleteChild(t){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(t))return i.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new Si(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bh(this.writes_,t,r)}}getChildAfterChild(t,i,r){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ss(this.viewCache_),c=xw(this.writes_,o,i,1,r,t);return c.length===0?null:c[0]}}/**
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
 */function Lw(s){return{filter:s}}function zw(s,t){U(t.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),U(t.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function Hw(s,t,i,r,o){const c=new kw;let h,d;if(i.type===Xt.OVERWRITE){const g=i;g.source.fromUser?h=th(s,t,g.path,g.snap,r,o,c):(U(g.source.fromServer,"Unknown source."),d=g.source.tagged||t.serverCache.isFiltered()&&!re(g.path),h=Lo(s,t,g.path,g.snap,r,o,d,c))}else if(i.type===Xt.MERGE){const g=i;g.source.fromUser?h=Pw(s,t,g.path,g.children,r,o,c):(U(g.source.fromServer,"Unknown source."),d=g.source.tagged||t.serverCache.isFiltered(),h=nh(s,t,g.path,g.children,r,o,d,c))}else if(i.type===Xt.ACK_USER_WRITE){const g=i;g.revert?h=Vw(s,t,g.path,r,o,c):h=jw(s,t,g.path,g.affectedTree,r,o,c)}else if(i.type===Xt.LISTEN_COMPLETE)h=qw(s,t,i.path,r,c);else throw aa("Unknown operation type: "+i.type);const m=c.getChanges();return Bw(t,h,m),{viewCache:h,changes:m}}function Bw(s,t,i){const r=t.eventCache;if(r.isFullyInitialized()){const o=r.getNode().isLeafNode()||r.getNode().isEmpty(),c=xo(s);(i.length>0||!s.eventCache.isFullyInitialized()||o&&!r.getNode().equals(c)||!r.getNode().getPriority().equals(c.getPriority()))&&i.push(qy(xo(t)))}}function Jy(s,t,i,r,o,c){const h=t.eventCache;if(Uo(r,i)!=null)return t;{let d,m;if(re(i))if(U(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const g=ss(t),v=g instanceof F?g:F.EMPTY_NODE,E=Hh(r,v);d=s.filter.updateFullNode(t.eventCache.getNode(),E,c)}else{const g=ko(r,ss(t));d=s.filter.updateFullNode(t.eventCache.getNode(),g,c)}else{const g=ne(i);if(g===".priority"){U(bi(i)===1,"Can't have a priority with additional path components");const v=h.getNode();m=t.serverCache.getNode();const E=iv(r,i,v,m);E!=null?d=s.filter.updatePriority(v,E):d=h.getNode()}else{const v=Ce(i);let E;if(h.isCompleteForChild(g)){m=t.serverCache.getNode();const C=iv(r,i,h.getNode(),m);C!=null?E=h.getNode().getImmediateChild(g).updateChild(v,C):E=h.getNode().getImmediateChild(g)}else E=Bh(r,g,t.serverCache);E!=null?d=s.filter.updateChild(h.getNode(),g,E,v,o,c):d=h.getNode()}}return vr(t,d,h.isFullyInitialized()||re(i),s.filter.filtersNodes())}}function Lo(s,t,i,r,o,c,h,d){const m=t.serverCache;let g;const v=h?s.filter:s.filter.getIndexedFilter();if(re(i))g=v.updateFullNode(m.getNode(),r,null);else if(v.filtersNodes()&&!m.isFiltered()){const k=m.getNode().updateChild(i,r);g=v.updateFullNode(m.getNode(),k,null)}else{const k=ne(i);if(!m.isCompleteForPath(i)&&bi(i)>1)return t;const L=Ce(i),le=m.getNode().getImmediateChild(k).updateChild(L,r);k===".priority"?g=v.updatePriority(m.getNode(),le):g=v.updateChild(m.getNode(),k,le,L,Wy,null)}const E=Yy(t,g,m.isFullyInitialized()||re(i),v.filtersNodes()),C=new Ph(o,E,c);return Jy(s,E,i,o,C,d)}function th(s,t,i,r,o,c,h){const d=t.eventCache;let m,g;const v=new Ph(o,t,c);if(re(i))g=s.filter.updateFullNode(t.eventCache.getNode(),r,h),m=vr(t,g,!0,s.filter.filtersNodes());else{const E=ne(i);if(E===".priority")g=s.filter.updatePriority(t.eventCache.getNode(),r),m=vr(t,g,d.isFullyInitialized(),d.isFiltered());else{const C=Ce(i),k=d.getNode().getImmediateChild(E);let L;if(re(C))L=r;else{const W=v.getCompleteChild(E);W!=null?xy(C)===".priority"&&W.getChild(Uy(C)).isEmpty()?L=W:L=W.updateChild(C,r):L=F.EMPTY_NODE}if(k.equals(L))m=t;else{const W=s.filter.updateChild(d.getNode(),E,L,C,v,h);m=vr(t,W,d.isFullyInitialized(),s.filter.filtersNodes())}}}return m}function sv(s,t){return s.eventCache.isCompleteForChild(t)}function Pw(s,t,i,r,o,c,h){let d=t;return r.foreach((m,g)=>{const v=Pe(i,m);sv(t,ne(v))&&(d=th(s,d,v,g,o,c,h))}),r.foreach((m,g)=>{const v=Pe(i,m);sv(t,ne(v))||(d=th(s,d,v,g,o,c,h))}),d}function av(s,t,i){return i.foreach((r,o)=>{t=t.updateChild(r,o)}),t}function nh(s,t,i,r,o,c,h,d){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let m=t,g;re(i)?g=r:g=new Ae(null).setTree(i,r);const v=t.serverCache.getNode();return g.children.inorderTraversal((E,C)=>{if(v.hasChild(E)){const k=t.serverCache.getNode().getImmediateChild(E),L=av(s,k,C);m=Lo(s,m,new Se(E),L,o,c,h,d)}}),g.children.inorderTraversal((E,C)=>{const k=!t.serverCache.isCompleteForChild(E)&&C.value===null;if(!v.hasChild(E)&&!k){const L=t.serverCache.getNode().getImmediateChild(E),W=av(s,L,C);m=Lo(s,m,new Se(E),W,o,c,h,d)}}),m}function jw(s,t,i,r,o,c,h){if(Uo(o,i)!=null)return t;const d=t.serverCache.isFiltered(),m=t.serverCache;if(r.value!=null){if(re(i)&&m.isFullyInitialized()||m.isCompleteForPath(i))return Lo(s,t,i,m.getNode().getChild(i),o,c,d,h);if(re(i)){let g=new Ae(null);return m.getNode().forEachChild(Js,(v,E)=>{g=g.set(new Se(v),E)}),nh(s,t,i,g,o,c,d,h)}else return t}else{let g=new Ae(null);return r.foreach((v,E)=>{const C=Pe(i,v);m.isCompleteForPath(C)&&(g=g.set(v,m.getNode().getChild(C)))}),nh(s,t,i,g,o,c,d,h)}}function qw(s,t,i,r,o){const c=t.serverCache,h=Yy(t,c.getNode(),c.isFullyInitialized()||re(i),c.isFiltered());return Jy(s,h,i,r,Wy,o)}function Vw(s,t,i,r,o,c){let h;if(Uo(r,i)!=null)return t;{const d=new Ph(r,t,o),m=t.eventCache.getNode();let g;if(re(i)||ne(i)===".priority"){let v;if(t.serverCache.isFullyInitialized())v=ko(r,ss(t));else{const E=t.serverCache.getNode();U(E instanceof F,"serverChildren would be complete if leaf node"),v=Hh(r,E)}v=v,g=s.filter.updateFullNode(m,v,c)}else{const v=ne(i);let E=Bh(r,v,t.serverCache);E==null&&t.serverCache.isCompleteForChild(v)&&(E=m.getImmediateChild(v)),E!=null?g=s.filter.updateChild(m,v,E,Ce(i),d,c):t.eventCache.getNode().hasChild(v)?g=s.filter.updateChild(m,v,F.EMPTY_NODE,Ce(i),d,c):g=m,g.isEmpty()&&t.serverCache.isFullyInitialized()&&(h=ko(r,ss(t)),h.isLeafNode()&&(g=s.filter.updateFullNode(g,h,c)))}return h=t.serverCache.isFullyInitialized()||Uo(r,he())!=null,vr(t,g,h,s.filter.filtersNodes())}}/**
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
 */class Gw{constructor(t,i){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,o=new kh(r.getIndex()),c=uw(r);this.processor_=Lw(c);const h=i.serverCache,d=i.eventCache,m=o.updateFullNode(F.EMPTY_NODE,h.getNode(),null),g=c.updateFullNode(F.EMPTY_NODE,d.getNode(),null),v=new Si(m,h.isFullyInitialized(),o.filtersNodes()),E=new Si(g,d.isFullyInitialized(),c.filtersNodes());this.viewCache_=Fo(E,v),this.eventGenerator_=new gw(this.query_)}get query(){return this.query_}}function Yw(s){return s.viewCache_.serverCache.getNode()}function Qw(s){return xo(s.viewCache_)}function Fw(s,t){const i=ss(s.viewCache_);return i&&(s.query._queryParams.loadsAllData()||!re(t)&&!i.getImmediateChild(ne(t)).isEmpty())?i.getChild(t):null}function rv(s){return s.eventRegistrations_.length===0}function Xw(s,t){s.eventRegistrations_.push(t)}function lv(s,t,i){const r=[];if(i){U(t==null,"A cancel should cancel all event registrations.");const o=s.query._path;s.eventRegistrations_.forEach(c=>{const h=c.createCancelEvent(i,o);h&&r.push(h)})}if(t){let o=[];for(let c=0;c<s.eventRegistrations_.length;++c){const h=s.eventRegistrations_[c];if(!h.matches(t))o.push(h);else if(t.hasAnyCallback()){o=o.concat(s.eventRegistrations_.slice(c+1));break}}s.eventRegistrations_=o}else s.eventRegistrations_=[];return r}function ov(s,t,i,r){t.type===Xt.MERGE&&t.source.queryId!==null&&(U(ss(s.viewCache_),"We should always have a full cache before handling merges"),U(xo(s.viewCache_),"Missing event cache, even though we have a server cache"));const o=s.viewCache_,c=Hw(s.processor_,o,t,i,r);return zw(s.processor_,c.viewCache),U(c.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=c.viewCache,$y(s,c.changes,c.viewCache.eventCache.getNode(),null)}function Kw(s,t){const i=s.viewCache_.eventCache,r=[];return i.getNode().isLeafNode()||i.getNode().forEachChild(Ie,(c,h)=>{r.push(ia(c,h))}),i.isFullyInitialized()&&r.push(qy(i.getNode())),$y(s,r,i.getNode(),t)}function $y(s,t,i,r){const o=r?[r]:s.eventRegistrations_;return _w(s.eventGenerator_,t,i,o)}/**
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
 */let zo;class e0{constructor(){this.views=new Map}}function Zw(s){U(!zo,"__referenceConstructor has already been defined"),zo=s}function Ww(){return U(zo,"Reference.ts has not been loaded"),zo}function Jw(s){return s.views.size===0}function jh(s,t,i,r){const o=t.source.queryId;if(o!==null){const c=s.views.get(o);return U(c!=null,"SyncTree gave us an op for an invalid query."),ov(c,t,i,r)}else{let c=[];for(const h of s.views.values())c=c.concat(ov(h,t,i,r));return c}}function t0(s,t,i,r,o){const c=t._queryIdentifier,h=s.views.get(c);if(!h){let d=ko(i,o?r:null),m=!1;d?m=!0:r instanceof F?(d=Hh(i,r),m=!1):(d=F.EMPTY_NODE,m=!1);const g=Fo(new Si(d,m,!1),new Si(r,o,!1));return new Gw(t,g)}return h}function $w(s,t,i,r,o,c){const h=t0(s,t,r,o,c);return s.views.has(t._queryIdentifier)||s.views.set(t._queryIdentifier,h),Xw(h,i),Kw(h,i)}function eR(s,t,i,r){const o=t._queryIdentifier,c=[];let h=[];const d=Ti(s);if(o==="default")for(const[m,g]of s.views.entries())h=h.concat(lv(g,i,r)),rv(g)&&(s.views.delete(m),g.query._queryParams.loadsAllData()||c.push(g.query));else{const m=s.views.get(o);m&&(h=h.concat(lv(m,i,r)),rv(m)&&(s.views.delete(o),m.query._queryParams.loadsAllData()||c.push(m.query)))}return d&&!Ti(s)&&c.push(new(Ww())(t._repo,t._path)),{removed:c,events:h}}function n0(s){const t=[];for(const i of s.views.values())i.query._queryParams.loadsAllData()||t.push(i);return t}function Ei(s,t){let i=null;for(const r of s.views.values())i=i||Fw(r,t);return i}function i0(s,t){if(t._queryParams.loadsAllData())return Ko(s);{const r=t._queryIdentifier;return s.views.get(r)}}function s0(s,t){return i0(s,t)!=null}function Ti(s){return Ko(s)!=null}function Ko(s){for(const t of s.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
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
 */let Ho;function tR(s){U(!Ho,"__referenceConstructor has already been defined"),Ho=s}function nR(){return U(Ho,"Reference.ts has not been loaded"),Ho}let iR=1;class uv{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Ae(null),this.pendingWriteTree_=Iw(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function a0(s,t,i,r,o){return bw(s.pendingWriteTree_,t,i,r,o),o?Vr(s,new is(Gy(),t,i)):[]}function Zi(s,t,i=!1){const r=Sw(s.pendingWriteTree_,t);if(Tw(s.pendingWriteTree_,t)){let c=new Ae(null);return r.snap!=null?c=c.set(he(),!0):St(r.children,h=>{c=c.set(new Se(h),!0)}),Vr(s,new Io(r.path,c,i))}else return[]}function qr(s,t,i){return Vr(s,new is(Lh(),t,i))}function sR(s,t,i){const r=Ae.fromObject(i);return Vr(s,new Dr(Lh(),t,r))}function aR(s,t){return Vr(s,new Or(Lh(),t))}function rR(s,t,i){const r=Vh(s,i);if(r){const o=Gh(r),c=o.path,h=o.queryId,d=ft(c,t),m=new Or(zh(h),d);return Yh(s,c,m)}else return[]}function Bo(s,t,i,r,o=!1){const c=t._path,h=s.syncPointTree_.get(c);let d=[];if(h&&(t._queryIdentifier==="default"||s0(h,t))){const m=eR(h,t,i,r);Jw(h)&&(s.syncPointTree_=s.syncPointTree_.remove(c));const g=m.removed;if(d=m.events,!o){const v=g.findIndex(C=>C._queryParams.loadsAllData())!==-1,E=s.syncPointTree_.findOnPath(c,(C,k)=>Ti(k));if(v&&!E){const C=s.syncPointTree_.subtree(c);if(!C.isEmpty()){const k=uR(C);for(let L=0;L<k.length;++L){const W=k[L],le=W.query,Xe=u0(s,W);s.listenProvider_.startListening(Er(le),Mr(s,le),Xe.hashFn,Xe.onComplete)}}}!E&&g.length>0&&!r&&(v?s.listenProvider_.stopListening(Er(t),null):g.forEach(C=>{const k=s.queryToTagMap.get(Zo(C));s.listenProvider_.stopListening(Er(C),k)}))}cR(s,g)}return d}function r0(s,t,i,r){const o=Vh(s,r);if(o!=null){const c=Gh(o),h=c.path,d=c.queryId,m=ft(h,t),g=new is(zh(d),m,i);return Yh(s,h,g)}else return[]}function lR(s,t,i,r){const o=Vh(s,r);if(o){const c=Gh(o),h=c.path,d=c.queryId,m=ft(h,t),g=Ae.fromObject(i),v=new Dr(zh(d),m,g);return Yh(s,h,v)}else return[]}function ih(s,t,i,r=!1){const o=t._path;let c=null,h=!1;s.syncPointTree_.foreachOnPath(o,(C,k)=>{const L=ft(C,o);c=c||Ei(k,L),h=h||Ti(k)});let d=s.syncPointTree_.get(o);d?(h=h||Ti(d),c=c||Ei(d,he())):(d=new e0,s.syncPointTree_=s.syncPointTree_.set(o,d));let m;c!=null?m=!0:(m=!1,c=F.EMPTY_NODE,s.syncPointTree_.subtree(o).foreachChild((k,L)=>{const W=Ei(L,he());W&&(c=c.updateImmediateChild(k,W))}));const g=s0(d,t);if(!g&&!t._queryParams.loadsAllData()){const C=Zo(t);U(!s.queryToTagMap.has(C),"View does not exist, but we have a tag");const k=fR();s.queryToTagMap.set(C,k),s.tagToQueryMap.set(k,C)}const v=Xo(s.pendingWriteTree_,o);let E=$w(d,t,i,v,c,m);if(!g&&!h&&!r){const C=i0(d,t);E=E.concat(hR(s,t,C))}return E}function qh(s,t,i){const o=s.pendingWriteTree_,c=s.syncPointTree_.findOnPath(t,(h,d)=>{const m=ft(h,t),g=Ei(d,m);if(g)return g});return Xy(o,t,c,i,!0)}function oR(s,t){const i=t._path;let r=null;s.syncPointTree_.foreachOnPath(i,(g,v)=>{const E=ft(g,i);r=r||Ei(v,E)});let o=s.syncPointTree_.get(i);o?r=r||Ei(o,he()):(o=new e0,s.syncPointTree_=s.syncPointTree_.set(i,o));const c=r!=null,h=c?new Si(r,!0,!1):null,d=Xo(s.pendingWriteTree_,t._path),m=t0(o,t,d,c?h.getNode():F.EMPTY_NODE,c);return Qw(m)}function Vr(s,t){return l0(t,s.syncPointTree_,null,Xo(s.pendingWriteTree_,he()))}function l0(s,t,i,r){if(re(s.path))return o0(s,t,i,r);{const o=t.get(he());i==null&&o!=null&&(i=Ei(o,he()));let c=[];const h=ne(s.path),d=s.operationForChild(h),m=t.children.get(h);if(m&&d){const g=i?i.getImmediateChild(h):null,v=Ky(r,h);c=c.concat(l0(d,m,g,v))}return o&&(c=c.concat(jh(o,s,r,i))),c}}function o0(s,t,i,r){const o=t.get(he());i==null&&o!=null&&(i=Ei(o,he()));let c=[];return t.children.inorderTraversal((h,d)=>{const m=i?i.getImmediateChild(h):null,g=Ky(r,h),v=s.operationForChild(h);v&&(c=c.concat(o0(v,d,m,g)))}),o&&(c=c.concat(jh(o,s,r,i))),c}function u0(s,t){const i=t.query,r=Mr(s,i);return{hashFn:()=>(Yw(t)||F.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return r?rR(s,i._path,r):aR(s,i._path);{const c=oA(o,i);return Bo(s,i,null,c)}}}}function Mr(s,t){const i=Zo(t);return s.queryToTagMap.get(i)}function Zo(s){return s._path.toString()+"$"+s._queryIdentifier}function Vh(s,t){return s.tagToQueryMap.get(t)}function Gh(s){const t=s.indexOf("$");return U(t!==-1&&t<s.length-1,"Bad queryKey."),{queryId:s.substr(t+1),path:new Se(s.substr(0,t))}}function Yh(s,t,i){const r=s.syncPointTree_.get(t);U(r,"Missing sync point for query tag that we're tracking");const o=Xo(s.pendingWriteTree_,t);return jh(r,i,o,null)}function uR(s){return s.fold((t,i,r)=>{if(i&&Ti(i))return[Ko(i)];{let o=[];return i&&(o=n0(i)),St(r,(c,h)=>{o=o.concat(h)}),o}})}function Er(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new(nR())(s._repo,s._path):s}function cR(s,t){for(let i=0;i<t.length;++i){const r=t[i];if(!r._queryParams.loadsAllData()){const o=Zo(r),c=s.queryToTagMap.get(o);s.queryToTagMap.delete(o),s.tagToQueryMap.delete(c)}}}function fR(){return iR++}function hR(s,t,i){const r=t._path,o=Mr(s,t),c=u0(s,i),h=s.listenProvider_.startListening(Er(t),o,c.hashFn,c.onComplete),d=s.syncPointTree_.subtree(r);if(o)U(!Ti(d.value),"If we're adding a query, it shouldn't be shadowed");else{const m=d.fold((g,v,E)=>{if(!re(g)&&v&&Ti(v))return[Ko(v).query];{let C=[];return v&&(C=C.concat(n0(v).map(k=>k.query))),St(E,(k,L)=>{C=C.concat(L)}),C}});for(let g=0;g<m.length;++g){const v=m[g];s.listenProvider_.stopListening(Er(v),Mr(s,v))}}return h}/**
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
 */class Qh{constructor(t){this.node_=t}getImmediateChild(t){const i=this.node_.getImmediateChild(t);return new Qh(i)}node(){return this.node_}}class Fh{constructor(t,i){this.syncTree_=t,this.path_=i}getImmediateChild(t){const i=Pe(this.path_,t);return new Fh(this.syncTree_,i)}node(){return qh(this.syncTree_,this.path_)}}const dR=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},cv=function(s,t,i){if(!s||typeof s!="object")return s;if(U(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return pR(s[".sv"],t,i);if(typeof s[".sv"]=="object")return mR(s[".sv"],t);U(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},pR=function(s,t,i){switch(s){case"timestamp":return i.timestamp;default:U(!1,"Unexpected server value: "+s)}},mR=function(s,t,i){s.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const r=s.increment;typeof r!="number"&&U(!1,"Unexpected increment value: "+r);const o=t.node();if(U(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return r;const h=o.getValue();return typeof h!="number"?r:h+r},gR=function(s,t,i,r){return Xh(t,new Fh(i,s),r)},c0=function(s,t,i){return Xh(s,new Qh(t),i)};function Xh(s,t,i){const r=s.getPriority().val(),o=cv(r,t.getImmediateChild(".priority"),i);let c;if(s.isLeafNode()){const h=s,d=cv(h.getValue(),t,i);return d!==h.getValue()||o!==h.getPriority().val()?new Ye(d,Fe(o)):s}else{const h=s;return c=h,o!==h.getPriority().val()&&(c=c.updatePriority(new Ye(o))),h.forEachChild(Ie,(d,m)=>{const g=Xh(m,t.getImmediateChild(d),i);g!==m&&(c=c.updateImmediateChild(d,g))}),c}}/**
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
 */class Kh{constructor(t="",i=null,r={children:{},childCount:0}){this.name=t,this.parent=i,this.node=r}}function Zh(s,t){let i=t instanceof Se?t:new Se(t),r=s,o=ne(i);for(;o!==null;){const c=$s(r.node.children,o)||{children:{},childCount:0};r=new Kh(o,r,c),i=Ce(i),o=ne(i)}return r}function fa(s){return s.node.value}function f0(s,t){s.node.value=t,sh(s)}function h0(s){return s.node.childCount>0}function _R(s){return fa(s)===void 0&&!h0(s)}function Wo(s,t){St(s.node.children,(i,r)=>{t(new Kh(i,s,r))})}function d0(s,t,i,r){i&&t(s),Wo(s,o=>{d0(o,t,!0)})}function vR(s,t,i){let r=s.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function Gr(s){return new Se(s.parent===null?s.name:Gr(s.parent)+"/"+s.name)}function sh(s){s.parent!==null&&yR(s.parent,s.name,s)}function yR(s,t,i){const r=_R(i),o=zn(s.node.children,t);r&&o?(delete s.node.children[t],s.node.childCount--,sh(s)):!r&&!o&&(s.node.children[t]=i.node,s.node.childCount++,sh(s))}/**
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
 */const ER=/[\[\].#$\/\u0000-\u001F\u007F]/,bR=/[\[\].#$\u0000-\u001F\u007F]/,Hf=10*1024*1024,p0=function(s){return typeof s=="string"&&s.length!==0&&!ER.test(s)},m0=function(s){return typeof s=="string"&&s.length!==0&&!bR.test(s)},SR=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),m0(s)},g0=function(s,t,i,r){r&&t===void 0||Wh(hh(s,"value"),t,i)},Wh=function(s,t,i){const r=i instanceof Se?new jA(i,s):i;if(t===void 0)throw new Error(s+"contains undefined "+Fi(r));if(typeof t=="function")throw new Error(s+"contains a function "+Fi(r)+" with contents = "+t.toString());if(hy(t))throw new Error(s+"contains "+t.toString()+" "+Fi(r));if(typeof t=="string"&&t.length>Hf/3&&qo(t)>Hf)throw new Error(s+"contains a string greater than "+Hf+" utf8 bytes "+Fi(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let o=!1,c=!1;if(St(t,(h,d)=>{if(h===".value")o=!0;else if(h!==".priority"&&h!==".sv"&&(c=!0,!p0(h)))throw new Error(s+" contains an invalid key ("+h+") "+Fi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);qA(r,h),Wh(s,d,r),VA(r)}),o&&c)throw new Error(s+' contains ".value" child '+Fi(r)+" in addition to actual children.")}},_0=function(s,t,i,r){if(!m0(i))throw new Error(hh(s,t)+'was an invalid path = "'+i+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},TR=function(s,t,i,r){i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),_0(s,t,i)},Jh=function(s,t){if(ne(t)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},CR=function(s,t){const i=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!p0(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!SR(i))throw new Error(hh(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class AR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $h(s,t){let i=null;for(let r=0;r<t.length;r++){const o=t[r],c=o.getPath();i!==null&&!Mh(c,i.path)&&(s.eventLists_.push(i),i=null),i===null&&(i={events:[],path:c}),i.events.push(o)}i&&s.eventLists_.push(i)}function v0(s,t,i){$h(s,i),y0(s,r=>Mh(r,t))}function ln(s,t,i){$h(s,i),y0(s,r=>Ft(r,t)||Ft(t,r))}function y0(s,t){s.recursionDepth_++;let i=!0;for(let r=0;r<s.eventLists_.length;r++){const o=s.eventLists_[r];if(o){const c=o.path;t(c)?(wR(s.eventLists_[r]),s.eventLists_[r]=null):i=!1}}i&&(s.eventLists_=[]),s.recursionDepth_--}function wR(s){for(let t=0;t<s.events.length;t++){const i=s.events[t];if(i!==null){s.events[t]=null;const r=i.getEventRunner();gr&&lt("event: "+i.toString()),ca(r)}}}/**
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
 */const RR="repo_interrupt",NR=25;class OR{constructor(t,i,r,o){this.repoInfo_=t,this.forceRestClient_=i,this.authTokenProvider_=r,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new AR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mo(),this.transactionQueueTree_=new Kh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function DR(s,t,i){if(s.stats_=Oh(s.repoInfo_),s.forceRestClient_||hA())s.server_=new Do(s.repoInfo_,(r,o,c,h)=>{fv(s,r,o,c,h)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>hv(s,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Be(i)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}s.persistentConnection_=new Dn(s.repoInfo_,t,(r,o,c,h)=>{fv(s,r,o,c,h)},r=>{hv(s,r)},r=>{MR(s,r)},s.authTokenProvider_,s.appCheckProvider_,i),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(r=>{s.server_.refreshAuthToken(r)}),s.appCheckProvider_.addTokenChangeListener(r=>{s.server_.refreshAppCheckToken(r.token)}),s.statsReporter_=_A(s.repoInfo_,()=>new mw(s.stats_,s.server_)),s.infoData_=new cw,s.infoSyncTree_=new uv({startListening:(r,o,c,h)=>{let d=[];const m=s.infoData_.getNode(r._path);return m.isEmpty()||(d=qr(s.infoSyncTree_,r._path,m),setTimeout(()=>{h("ok")},0)),d},stopListening:()=>{}}),td(s,"connected",!1),s.serverSyncTree_=new uv({startListening:(r,o,c,h)=>(s.server_.listen(r,c,o,(d,m)=>{const g=h(d,m);ln(s.eventQueue_,r._path,g)}),[]),stopListening:(r,o)=>{s.server_.unlisten(r,o)}})}function E0(s){const i=s.infoData_.getNode(new Se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function ed(s){return dR({timestamp:E0(s)})}function fv(s,t,i,r,o){s.dataUpdateCount++;const c=new Se(t);i=s.interceptServerDataCallback_?s.interceptServerDataCallback_(t,i):i;let h=[];if(o)if(r){const m=Eo(i,g=>Fe(g));h=lR(s.serverSyncTree_,c,m,o)}else{const m=Fe(i);h=r0(s.serverSyncTree_,c,m,o)}else if(r){const m=Eo(i,g=>Fe(g));h=sR(s.serverSyncTree_,c,m)}else{const m=Fe(i);h=qr(s.serverSyncTree_,c,m)}let d=c;h.length>0&&(d=$o(s,c)),ln(s.eventQueue_,d,h)}function hv(s,t){td(s,"connected",t),t===!1&&kR(s)}function MR(s,t){St(t,(i,r)=>{td(s,i,r)})}function td(s,t,i){const r=new Se("/.info/"+t),o=Fe(i);s.infoData_.updateSnapshot(r,o);const c=qr(s.infoSyncTree_,r,o);ln(s.eventQueue_,r,c)}function b0(s){return s.nextWriteId_++}function IR(s,t,i){const r=oR(s.serverSyncTree_,t);return r!=null?Promise.resolve(r):s.server_.get(t).then(o=>{const c=Fe(o).withIndex(t._queryParams.getIndex());ih(s.serverSyncTree_,t,i,!0);let h;if(t._queryParams.loadsAllData())h=qr(s.serverSyncTree_,t._path,c);else{const d=Mr(s.serverSyncTree_,t);h=r0(s.serverSyncTree_,t._path,c,d)}return ln(s.eventQueue_,t._path,h),Bo(s.serverSyncTree_,t,i,null,!0),c},o=>(Jo(s,"get for query "+Be(t)+" failed: "+o),Promise.reject(new Error(o))))}function xR(s,t,i,r,o){Jo(s,"set",{path:t.toString(),value:i,priority:r});const c=ed(s),h=Fe(i,r),d=qh(s.serverSyncTree_,t),m=c0(h,d,c),g=b0(s),v=a0(s.serverSyncTree_,t,m,g,!0);$h(s.eventQueue_,v),s.server_.put(t.toString(),h.val(!0),(C,k)=>{const L=C==="ok";L||bt("set at "+t+" failed: "+C);const W=Zi(s.serverSyncTree_,g,!L);ln(s.eventQueue_,t,W),HR(s,o,C,k)});const E=w0(s,t);$o(s,E),ln(s.eventQueue_,E,[])}function kR(s){Jo(s,"onDisconnectEvents");const t=ed(s),i=Mo();Jf(s.onDisconnect_,he(),(o,c)=>{const h=gR(o,c,s.serverSyncTree_,t);Vy(i,o,h)});let r=[];Jf(i,he(),(o,c)=>{r=r.concat(qr(s.serverSyncTree_,o,c));const h=w0(s,o);$o(s,h)}),s.onDisconnect_=Mo(),ln(s.eventQueue_,he(),r)}function UR(s,t,i){let r;ne(t._path)===".info"?r=ih(s.infoSyncTree_,t,i):r=ih(s.serverSyncTree_,t,i),v0(s.eventQueue_,t._path,r)}function LR(s,t,i){let r;ne(t._path)===".info"?r=Bo(s.infoSyncTree_,t,i):r=Bo(s.serverSyncTree_,t,i),v0(s.eventQueue_,t._path,r)}function zR(s){s.persistentConnection_&&s.persistentConnection_.interrupt(RR)}function Jo(s,...t){let i="";s.persistentConnection_&&(i=s.persistentConnection_.id+":"),lt(i,...t)}function HR(s,t,i,r){t&&ca(()=>{if(i==="ok")t(null);else{const o=(i||"error").toUpperCase();let c=o;r&&(c+=": "+r);const h=new Error(c);h.code=o,t(h)}})}function S0(s,t,i){return qh(s.serverSyncTree_,t,i)||F.EMPTY_NODE}function nd(s,t=s.transactionQueueTree_){if(t||eu(s,t),fa(t)){const i=C0(s,t);U(i.length>0,"Sending zero length transaction queue"),i.every(o=>o.status===0)&&BR(s,Gr(t),i)}else h0(t)&&Wo(t,i=>{nd(s,i)})}function BR(s,t,i){const r=i.map(g=>g.currentWriteId),o=S0(s,t,r);let c=o;const h=o.hash();for(let g=0;g<i.length;g++){const v=i[g];U(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const E=ft(t,v.path);c=c.updateChild(E,v.currentOutputSnapshotRaw)}const d=c.val(!0),m=t;s.server_.put(m.toString(),d,g=>{Jo(s,"transaction put response",{path:m.toString(),status:g});let v=[];if(g==="ok"){const E=[];for(let C=0;C<i.length;C++)i[C].status=2,v=v.concat(Zi(s.serverSyncTree_,i[C].currentWriteId)),i[C].onComplete&&E.push(()=>i[C].onComplete(null,!0,i[C].currentOutputSnapshotResolved)),i[C].unwatcher();eu(s,Zh(s.transactionQueueTree_,t)),nd(s,s.transactionQueueTree_),ln(s.eventQueue_,t,v);for(let C=0;C<E.length;C++)ca(E[C])}else{if(g==="datastale")for(let E=0;E<i.length;E++)i[E].status===3?i[E].status=4:i[E].status=0;else{bt("transaction at "+m.toString()+" failed: "+g);for(let E=0;E<i.length;E++)i[E].status=4,i[E].abortReason=g}$o(s,t)}},h)}function $o(s,t){const i=T0(s,t),r=Gr(i),o=C0(s,i);return PR(s,o,r),r}function PR(s,t,i){if(t.length===0)return;const r=[];let o=[];const h=t.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<t.length;d++){const m=t[d],g=ft(i,m.path);let v=!1,E;if(U(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)v=!0,E=m.abortReason,o=o.concat(Zi(s.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=NR)v=!0,E="maxretry",o=o.concat(Zi(s.serverSyncTree_,m.currentWriteId,!0));else{const C=S0(s,m.path,h);m.currentInputSnapshot=C;const k=t[d].update(C.val());if(k!==void 0){Wh("transaction failed: Data returned ",k,m.path);let L=Fe(k);typeof k=="object"&&k!=null&&zn(k,".priority")||(L=L.updatePriority(C.getPriority()));const le=m.currentWriteId,Xe=ed(s),Ke=c0(L,C,Xe);m.currentOutputSnapshotRaw=L,m.currentOutputSnapshotResolved=Ke,m.currentWriteId=b0(s),h.splice(h.indexOf(le),1),o=o.concat(a0(s.serverSyncTree_,m.path,Ke,m.currentWriteId,m.applyLocally)),o=o.concat(Zi(s.serverSyncTree_,le,!0))}else v=!0,E="nodata",o=o.concat(Zi(s.serverSyncTree_,m.currentWriteId,!0))}ln(s.eventQueue_,i,o),o=[],v&&(t[d].status=2,function(C){setTimeout(C,Math.floor(0))}(t[d].unwatcher),t[d].onComplete&&(E==="nodata"?r.push(()=>t[d].onComplete(null,!1,t[d].currentInputSnapshot)):r.push(()=>t[d].onComplete(new Error(E),!1,null))))}eu(s,s.transactionQueueTree_);for(let d=0;d<r.length;d++)ca(r[d]);nd(s,s.transactionQueueTree_)}function T0(s,t){let i,r=s.transactionQueueTree_;for(i=ne(t);i!==null&&fa(r)===void 0;)r=Zh(r,i),t=Ce(t),i=ne(t);return r}function C0(s,t){const i=[];return A0(s,t,i),i.sort((r,o)=>r.order-o.order),i}function A0(s,t,i){const r=fa(t);if(r)for(let o=0;o<r.length;o++)i.push(r[o]);Wo(t,o=>{A0(s,o,i)})}function eu(s,t){const i=fa(t);if(i){let r=0;for(let o=0;o<i.length;o++)i[o].status!==2&&(i[r]=i[o],r++);i.length=r,f0(t,i.length>0?i:void 0)}Wo(t,r=>{eu(s,r)})}function w0(s,t){const i=Gr(T0(s,t)),r=Zh(s.transactionQueueTree_,t);return vR(r,o=>{Bf(s,o)}),Bf(s,r),d0(r,o=>{Bf(s,o)}),i}function Bf(s,t){const i=fa(t);if(i){const r=[];let o=[],c=-1;for(let h=0;h<i.length;h++)i[h].status===3||(i[h].status===1?(U(c===h-1,"All SENT items should be at beginning of queue."),c=h,i[h].status=3,i[h].abortReason="set"):(U(i[h].status===0,"Unexpected transaction status in abort"),i[h].unwatcher(),o=o.concat(Zi(s.serverSyncTree_,i[h].currentWriteId,!0)),i[h].onComplete&&r.push(i[h].onComplete.bind(null,new Error("set"),!1,null))));c===-1?f0(t,void 0):i.length=c+1,ln(s.eventQueue_,Gr(t),o);for(let h=0;h<r.length;h++)ca(r[h])}}/**
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
 */function jR(s){let t="";const i=s.split("/");for(let r=0;r<i.length;r++)if(i[r].length>0){let o=i[r];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}t+="/"+o}return t}function qR(s){const t={};s.charAt(0)==="?"&&(s=s.substring(1));for(const i of s.split("&")){if(i.length===0)continue;const r=i.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):bt(`Invalid query segment '${i}' in query '${s}'`)}return t}const dv=function(s,t){const i=VR(s),r=i.namespace;i.domain==="firebase.com"&&xn(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&i.domain!=="localhost"&&xn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||iA();const o=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new Cy(i.host,i.secure,r,o,t,"",r!==i.subdomain),path:new Se(i.pathString)}},VR=function(s){let t="",i="",r="",o="",c="",h=!0,d="https",m=443;if(typeof s=="string"){let g=s.indexOf("//");g>=0&&(d=s.substring(0,g-1),s=s.substring(g+2));let v=s.indexOf("/");v===-1&&(v=s.length);let E=s.indexOf("?");E===-1&&(E=s.length),t=s.substring(0,Math.min(v,E)),v<E&&(o=jR(s.substring(v,E)));const C=qR(s.substring(Math.min(s.length,E)));g=t.indexOf(":"),g>=0?(h=d==="https"||d==="wss",m=parseInt(t.substring(g+1),10)):g=t.length;const k=t.slice(0,g);if(k.toLowerCase()==="localhost")i="localhost";else if(k.split(".").length<=2)i=k;else{const L=t.indexOf(".");r=t.substring(0,L).toLowerCase(),i=t.substring(L+1),c=r}"ns"in C&&(c=C.ns)}return{host:t,port:m,domain:i,subdomain:r,secure:h,scheme:d,pathString:o,namespace:c}};/**
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
 */const pv="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",GR=function(){let s=0;const t=[];return function(i){const r=i===s;s=i;let o;const c=new Array(8);for(o=7;o>=0;o--)c[o]=pv.charAt(i%64),i=Math.floor(i/64);U(i===0,"Cannot push at time == 0");let h=c.join("");if(r){for(o=11;o>=0&&t[o]===63;o--)t[o]=0;t[o]++}else for(o=0;o<12;o++)t[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)h+=pv.charAt(t[o]);return U(h.length===20,"nextPushId: Length should be 20."),h}}();/**
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
 */class YR{constructor(t,i,r,o){this.eventType=t,this.eventRegistration=i,this.snapshot=r,this.prevName=o}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Be(this.snapshot.exportVal())}}class QR{constructor(t,i,r){this.eventRegistration=t,this.error=i,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class R0{constructor(t,i){this.snapshotCallback=t,this.cancelCallback=i}onValue(t,i){this.snapshotCallback.call(null,t,i)}onCancel(t){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
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
 */class id{constructor(t,i,r,o){this._repo=t,this._path=i,this._queryParams=r,this._orderByCalled=o}get key(){return re(this._path)?null:xy(this._path)}get ref(){return new Hn(this._repo,this._path)}get _queryIdentifier(){const t=J_(this._queryParams),i=Rh(t);return i==="{}"?"default":i}get _queryObject(){return J_(this._queryParams)}isEqual(t){if(t=dt(t),!(t instanceof id))return!1;const i=this._repo===t._repo,r=Mh(this._path,t._path),o=this._queryIdentifier===t._queryIdentifier;return i&&r&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+PA(this._path)}}class Hn extends id{constructor(t,i){super(t,i,new Uh,!1)}get parent(){const t=Uy(this._path);return t===null?null:new Hn(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class Ir{constructor(t,i,r){this._node=t,this.ref=i,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const i=new Se(t),r=xr(this.ref,t);return new Ir(this._node.getChild(i),r,Ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,o)=>t(new Ir(o,xr(this.ref,r),Ie)))}hasChild(t){const i=new Se(t);return!this._node.getChild(i).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function kn(s,t){return s=dt(s),s._checkNotDeleted("ref"),t!==void 0?xr(s._root,t):s._root}function xr(s,t){return s=dt(s),ne(s._path)===null?TR("child","path",t):_0("child","path",t),new Hn(s._repo,Pe(s._path,t))}function FR(s,t){s=dt(s),Jh("push",s._path),g0("push",t,s._path,!0);const i=E0(s._repo),r=GR(i),o=xr(s,r),c=xr(s,r);let h;return h=Promise.resolve(c),o.then=h.then.bind(h),o.catch=h.then.bind(h,void 0),o}function XR(s){return Jh("remove",s._path),tu(s,null)}function tu(s,t){s=dt(s),Jh("set",s._path),g0("set",t,s._path,!1);const i=new jo;return xR(s._repo,s._path,t,null,i.wrapCallback(()=>{})),i.promise}function kr(s){s=dt(s);const t=new R0(()=>{}),i=new nu(t);return IR(s._repo,s,i).then(r=>new Ir(r,new Hn(s._repo,s._path),s._queryParams.getIndex()))}class nu{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,i){const r=i._queryParams.getIndex();return new YR("value",this,new Ir(t.snapshotNode,new Hn(i._repo,i._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,i){return this.callbackContext.hasCancelCallback?new QR(this,t,i):null}matches(t){return t instanceof nu?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function KR(s,t,i,r,o){const c=new R0(i,void 0),h=new nu(c);return UR(s._repo,s,h),()=>LR(s._repo,s,h)}function N0(s,t,i,r){return KR(s,"value",t)}Zw(Hn);tR(Hn);/**
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
 */const ZR="FIREBASE_DATABASE_EMULATOR_HOST",ah={};let WR=!1;function JR(s,t,i,r){s.repoInfo_=new Cy(t,!1,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,i),r&&(s.authTokenProvider_=r)}function $R(s,t,i,r,o){let c=r||s.options.databaseURL;c===void 0&&(s.options.projectId||xn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",s.options.projectId),c=`${s.options.projectId}-default-rtdb.firebaseio.com`);let h=dv(c,o),d=h.repoInfo,m;typeof process<"u"&&k_&&(m=k_[ZR]),m?(c=`http://${m}?ns=${d.namespace}`,h=dv(c,o),d=h.repoInfo):h.repoInfo.secure;const g=new pA(s.name,s.options,t);CR("Invalid Firebase Database URL",h),re(h.path)||xn("Database URL must point to the root of a Firebase Database (not including a child path).");const v=tN(d,s,g,new dA(s,i));return new nN(v,s)}function eN(s,t){const i=ah[t];(!i||i[s.key]!==s)&&xn(`Database ${t}(${s.repoInfo_}) has already been deleted.`),zR(s),delete i[s.key]}function tN(s,t,i,r){let o=ah[t.name];o||(o={},ah[t.name]=o);let c=o[s.toURLString()];return c&&xn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new OR(s,WR,i,r),o[s.toURLString()]=c,c}class nN{constructor(t,i){this._repoInternal=t,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(DR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Hn(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(eN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&xn("Cannot call "+t+" on a deleted database.")}}function iN(s=Ov(),t){const i=mh(s,"database").getImmediate({identifier:t});if(!i._instanceStarted){const r=TS("database");r&&sN(i,...r)}return i}function sN(s,t,i,r={}){s=dt(s),s._checkNotDeleted("useEmulator");const o=`${t}:${i}`,c=s._repoInternal;if(s._instanceStarted){if(o===s._repoInternal.repoInfo_.host&&$i(r,c.repoInfo_.emulatorOptions))return;xn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(c.repoInfo_.nodeAdmin)r.mockUserToken&&xn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new go(go.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:CS(r.mockUserToken,s.app.options.projectId);h=new go(d)}JR(c,o,r,h)}/**
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
 */function aN(s){W1(la),ea(new es("database",(t,{instanceIdentifier:i})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),c=t.getProvider("app-check-internal");return $R(r,o,c,i)},"PUBLIC").setMultipleInstances(!0)),vi(U_,L_,s),vi(U_,L_,"esm2017")}Dn.prototype.simpleListen=function(s,t){this.sendRequest("q",{p:s},t)};Dn.prototype.echo=function(s,t){this.sendRequest("echo",{d:s},t)};aN();const rN={apiKey:"AIzaSyARRtV-At76wg0lCIvyxmoyEn-Z04qBajM",authDomain:"auth-si36.firebaseapp.com",databaseURL:"https://auth-si36-default-rtdb.firebaseio.com/",projectId:"auth-si36",messagingSenderId:"617887457990",appId:"1:617887457990:web:dbc5c63917344f71b6edc7"},O0=Nv(rN),sd=K1(O0),lN=new An,Un=iN(O0),oN=()=>s1(sd,lN),uN=()=>HC(sd),cN=s=>zC(sd,s);function fN(){return new Date().toISOString().split("T")[0]}const hN=async s=>{const t=fN(),i=kn(Un,`users/${s}/dailyChallenges/${t}`),r=await kr(i);if(r.exists())return r.val();const c=(await kr(kn(Un,"photoChallengePool"))).val();if(!c)return null;const h=Object.keys(c),d=h[Math.floor(Math.random()*h.length)],m=c[d];return await tu(i,m),m},dN=s=>{const t=kn(Un,"challenges");N0(t,i=>{const r=i.val(),o=r?Object.entries(r).map(([c,h])=>({id:c,...h})):[];s(o)})};function pN(){return j.jsx("div",{className:"flex items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-pink-500",children:j.jsx("button",{onClick:oN,className:"px-6 py-3 bg-white text-gray-800 rounded-lg shadow hover:bg-gray-100 transition",children:"Sign in with Google"})})}let mN={data:""},gN=s=>typeof window=="object"?((s?s.querySelector("#_goober"):window._goober)||Object.assign((s||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:s||mN,_N=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,vN=/\/\*[^]*?\*\/|  +/g,mv=/\n+/g,mi=(s,t)=>{let i="",r="",o="";for(let c in s){let h=s[c];c[0]=="@"?c[1]=="i"?i=c+" "+h+";":r+=c[1]=="f"?mi(h,c):c+"{"+mi(h,c[1]=="k"?"":t)+"}":typeof h=="object"?r+=mi(h,t?t.replace(/([^,])+/g,d=>c.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,m=>/&/.test(m)?m.replace(/&/g,d):d?d+" "+m:m)):c):h!=null&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=mi.p?mi.p(c,h):c+":"+h+";")}return i+(t&&o?t+"{"+o+"}":o)+r},Cn={},D0=s=>{if(typeof s=="object"){let t="";for(let i in s)t+=i+D0(s[i]);return t}return s},yN=(s,t,i,r,o)=>{let c=D0(s),h=Cn[c]||(Cn[c]=(m=>{let g=0,v=11;for(;g<m.length;)v=101*v+m.charCodeAt(g++)>>>0;return"go"+v})(c));if(!Cn[h]){let m=c!==s?s:(g=>{let v,E,C=[{}];for(;v=_N.exec(g.replace(vN,""));)v[4]?C.shift():v[3]?(E=v[3].replace(mv," ").trim(),C.unshift(C[0][E]=C[0][E]||{})):C[0][v[1]]=v[2].replace(mv," ").trim();return C[0]})(s);Cn[h]=mi(o?{["@keyframes "+h]:m}:m,i?"":"."+h)}let d=i&&Cn.g?Cn.g:null;return i&&(Cn.g=Cn[h]),((m,g,v,E)=>{E?g.data=g.data.replace(E,m):g.data.indexOf(m)===-1&&(g.data=v?m+g.data:g.data+m)})(Cn[h],t,r,d),h},EN=(s,t,i)=>s.reduce((r,o,c)=>{let h=t[c];if(h&&h.call){let d=h(i),m=d&&d.props&&d.props.className||/^go/.test(d)&&d;h=m?"."+m:d&&typeof d=="object"?d.props?"":mi(d,""):d===!1?"":d}return r+o+(h??"")},"");function iu(s){let t=this||{},i=s.call?s(t.p):s;return yN(i.unshift?i.raw?EN(i,[].slice.call(arguments,1),t.p):i.reduce((r,o)=>Object.assign(r,o&&o.call?o(t.p):o),{}):i,gN(t.target),t.g,t.o,t.k)}let M0,rh,lh;iu.bind({g:1});let Ln=iu.bind({k:1});function bN(s,t,i,r){mi.p=t,M0=s,rh=i,lh=r}function Ai(s,t){let i=this||{};return function(){let r=arguments;function o(c,h){let d=Object.assign({},c),m=d.className||o.className;i.p=Object.assign({theme:rh&&rh()},d),i.o=/ *go\d+/.test(m),d.className=iu.apply(i,r)+(m?" "+m:"");let g=s;return s[0]&&(g=d.as||s,delete d.as),lh&&g[0]&&lh(d),M0(g,d)}return o}}var SN=s=>typeof s=="function",Po=(s,t)=>SN(s)?s(t):s,TN=(()=>{let s=0;return()=>(++s).toString()})(),I0=(()=>{let s;return()=>{if(s===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");s=!t||t.matches}return s}})(),CN=20,x0=(s,t)=>{switch(t.type){case 0:return{...s,toasts:[t.toast,...s.toasts].slice(0,CN)};case 1:return{...s,toasts:s.toasts.map(c=>c.id===t.toast.id?{...c,...t.toast}:c)};case 2:let{toast:i}=t;return x0(s,{type:s.toasts.find(c=>c.id===i.id)?1:0,toast:i});case 3:let{toastId:r}=t;return{...s,toasts:s.toasts.map(c=>c.id===r||r===void 0?{...c,dismissed:!0,visible:!1}:c)};case 4:return t.toastId===void 0?{...s,toasts:[]}:{...s,toasts:s.toasts.filter(c=>c.id!==t.toastId)};case 5:return{...s,pausedAt:t.time};case 6:let o=t.time-(s.pausedAt||0);return{...s,pausedAt:void 0,toasts:s.toasts.map(c=>({...c,pauseDuration:c.pauseDuration+o}))}}},_o=[],Wi={toasts:[],pausedAt:void 0},rs=s=>{Wi=x0(Wi,s),_o.forEach(t=>{t(Wi)})},AN={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},wN=(s={})=>{let[t,i]=$.useState(Wi),r=$.useRef(Wi);$.useEffect(()=>(r.current!==Wi&&i(Wi),_o.push(i),()=>{let c=_o.indexOf(i);c>-1&&_o.splice(c,1)}),[]);let o=t.toasts.map(c=>{var h,d,m;return{...s,...s[c.type],...c,removeDelay:c.removeDelay||((h=s[c.type])==null?void 0:h.removeDelay)||(s==null?void 0:s.removeDelay),duration:c.duration||((d=s[c.type])==null?void 0:d.duration)||(s==null?void 0:s.duration)||AN[c.type],style:{...s.style,...(m=s[c.type])==null?void 0:m.style,...c.style}}});return{...t,toasts:o}},RN=(s,t="blank",i)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:s,pauseDuration:0,...i,id:(i==null?void 0:i.id)||TN()}),Yr=s=>(t,i)=>{let r=RN(t,s,i);return rs({type:2,toast:r}),r.id},ct=(s,t)=>Yr("blank")(s,t);ct.error=Yr("error");ct.success=Yr("success");ct.loading=Yr("loading");ct.custom=Yr("custom");ct.dismiss=s=>{rs({type:3,toastId:s})};ct.remove=s=>rs({type:4,toastId:s});ct.promise=(s,t,i)=>{let r=ct.loading(t.loading,{...i,...i==null?void 0:i.loading});return typeof s=="function"&&(s=s()),s.then(o=>{let c=t.success?Po(t.success,o):void 0;return c?ct.success(c,{id:r,...i,...i==null?void 0:i.success}):ct.dismiss(r),o}).catch(o=>{let c=t.error?Po(t.error,o):void 0;c?ct.error(c,{id:r,...i,...i==null?void 0:i.error}):ct.dismiss(r)}),s};var NN=(s,t)=>{rs({type:1,toast:{id:s,height:t}})},ON=()=>{rs({type:5,time:Date.now()})},br=new Map,DN=1e3,MN=(s,t=DN)=>{if(br.has(s))return;let i=setTimeout(()=>{br.delete(s),rs({type:4,toastId:s})},t);br.set(s,i)},IN=s=>{let{toasts:t,pausedAt:i}=wN(s);$.useEffect(()=>{if(i)return;let c=Date.now(),h=t.map(d=>{if(d.duration===1/0)return;let m=(d.duration||0)+d.pauseDuration-(c-d.createdAt);if(m<0){d.visible&&ct.dismiss(d.id);return}return setTimeout(()=>ct.dismiss(d.id),m)});return()=>{h.forEach(d=>d&&clearTimeout(d))}},[t,i]);let r=$.useCallback(()=>{i&&rs({type:6,time:Date.now()})},[i]),o=$.useCallback((c,h)=>{let{reverseOrder:d=!1,gutter:m=8,defaultPosition:g}=h||{},v=t.filter(k=>(k.position||g)===(c.position||g)&&k.height),E=v.findIndex(k=>k.id===c.id),C=v.filter((k,L)=>L<E&&k.visible).length;return v.filter(k=>k.visible).slice(...d?[C+1]:[0,C]).reduce((k,L)=>k+(L.height||0)+m,0)},[t]);return $.useEffect(()=>{t.forEach(c=>{if(c.dismissed)MN(c.id,c.removeDelay);else{let h=br.get(c.id);h&&(clearTimeout(h),br.delete(c.id))}})},[t]),{toasts:t,handlers:{updateHeight:NN,startPause:ON,endPause:r,calculateOffset:o}}},xN=Ln`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,kN=Ln`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,UN=Ln`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,LN=Ai("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${s=>s.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${xN} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${kN} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${s=>s.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${UN} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,zN=Ln`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,HN=Ai("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${s=>s.secondary||"#e0e0e0"};
  border-right-color: ${s=>s.primary||"#616161"};
  animation: ${zN} 1s linear infinite;
`,BN=Ln`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,PN=Ln`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,jN=Ai("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${s=>s.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${BN} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${PN} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${s=>s.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,qN=Ai("div")`
  position: absolute;
`,VN=Ai("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,GN=Ln`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,YN=Ai("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${GN} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,QN=({toast:s})=>{let{icon:t,type:i,iconTheme:r}=s;return t!==void 0?typeof t=="string"?$.createElement(YN,null,t):t:i==="blank"?null:$.createElement(VN,null,$.createElement(HN,{...r}),i!=="loading"&&$.createElement(qN,null,i==="error"?$.createElement(LN,{...r}):$.createElement(jN,{...r})))},FN=s=>`
0% {transform: translate3d(0,${s*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,XN=s=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${s*-150}%,-1px) scale(.6); opacity:0;}
`,KN="0%{opacity:0;} 100%{opacity:1;}",ZN="0%{opacity:1;} 100%{opacity:0;}",WN=Ai("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,JN=Ai("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,$N=(s,t)=>{let i=s.includes("top")?1:-1,[r,o]=I0()?[KN,ZN]:[FN(i),XN(i)];return{animation:t?`${Ln(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ln(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},eO=$.memo(({toast:s,position:t,style:i,children:r})=>{let o=s.height?$N(s.position||t||"top-center",s.visible):{opacity:0},c=$.createElement(QN,{toast:s}),h=$.createElement(JN,{...s.ariaProps},Po(s.message,s));return $.createElement(WN,{className:s.className,style:{...o,...i,...s.style}},typeof r=="function"?r({icon:c,message:h}):$.createElement($.Fragment,null,c,h))});bN($.createElement);var tO=({id:s,className:t,style:i,onHeightUpdate:r,children:o})=>{let c=$.useCallback(h=>{if(h){let d=()=>{let m=h.getBoundingClientRect().height;r(s,m)};d(),new MutationObserver(d).observe(h,{subtree:!0,childList:!0,characterData:!0})}},[s,r]);return $.createElement("div",{ref:c,className:t,style:i},o)},nO=(s,t)=>{let i=s.includes("top"),r=i?{top:0}:{bottom:0},o=s.includes("center")?{justifyContent:"center"}:s.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:I0()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(i?1:-1)}px)`,...r,...o}},iO=iu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,co=16,sO=({reverseOrder:s,position:t="top-center",toastOptions:i,gutter:r,children:o,containerStyle:c,containerClassName:h})=>{let{toasts:d,handlers:m}=IN(i);return $.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:co,left:co,right:co,bottom:co,pointerEvents:"none",...c},className:h,onMouseEnter:m.startPause,onMouseLeave:m.endPause},d.map(g=>{let v=g.position||t,E=m.calculateOffset(g,{reverseOrder:s,gutter:r,defaultPosition:t}),C=nO(v,E);return $.createElement(tO,{id:g.id,key:g.id,onHeightUpdate:m.updateHeight,className:g.visible?iO:"",style:C},g.type==="custom"?Po(g.message,g):o?o(g):$.createElement(eO,{toast:g,position:v}))}))},sn=ct;function aO({challenge:s,user:t,onClose:i}){const[r,o]=$.useState(5),[c,h]=$.useState(!1),d=async()=>{var g;if(!s||!t)return;if(((g=s.createdBy)==null?void 0:g.uid)===t.uid){sn.error("You can't vote on your own challenge.");return}h(!0);const m=kn(Un,`votes/${s.id}/${t.uid}`);try{if((await kr(m)).exists()){sn.error("You’ve already voted!"),h(!1);return}await tu(m,{value:r,timestamp:Date.now(),voter:t.uid}),sn.success("Vote submitted!"),i()}catch(v){console.error("Vote failed:",v),sn.error("Something went wrong. Please try again.")}h(!1)};return j.jsx("div",{className:"fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center",children:j.jsxs("div",{className:"bg-white rounded-lg p-6 w-full max-w-md space-y-4 shadow-xl",children:[j.jsx("h2",{className:"text-xl font-bold text-center",children:"Rate this challenge"}),j.jsx("img",{src:s.imageURL,alt:"Challenge",className:"rounded-lg max-h-64 mx-auto"}),j.jsx("input",{type:"range",min:"1",max:"10",value:r,onChange:m=>o(Number(m.target.value)),className:"w-full"}),j.jsxs("div",{className:"text-center font-mono text-lg",children:["You chose: ",r]}),j.jsxs("div",{className:"flex justify-between mt-4",children:[j.jsx("button",{onClick:i,className:"px-4 py-2 rounded bg-gray-300 hover:bg-gray-400",children:"Cancel"}),j.jsx("button",{disabled:c,onClick:d,className:"px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50",children:c?"Voting...":"Submit Vote"})]})]})})}function rO({card:s,user:t}){var g;const i=(t==null?void 0:t.uid)===((g=s.createdBy)==null?void 0:g.uid),[r,o]=$.useState(!1),[c,h]=$.useState(null);$.useEffect(()=>{(async()=>{if(t!=null&&t.uid&&(s!=null&&s.id)){const E=await kr(kn(Un,`votes/${s.id}/${t.uid}`));E.exists()&&h(E.val().value)}})()},[t,s]);const d=async()=>{if(window.confirm("Are you sure you want to delete this challenge?"))try{await XR(kn(Un,`challenges/${s.id}`)),sn.success("Challenge deleted")}catch(E){console.error("Failed to delete:",E),sn.error("Failed to delete challenge")}},m=()=>{t&&!i&&c===null&&o(!0)};return j.jsxs(j.Fragment,{children:[j.jsxs("div",{className:`bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer ${c?"opacity-100":"hover:scale-105"}`,onClick:m,children:[j.jsx("img",{src:s.imageURL,alt:s.challengeText,className:"w-full h-48 object-cover"}),j.jsxs("div",{className:"p-4 space-y-2",children:[j.jsx("h3",{className:"font-semibold text-gray-800",children:s.challengeName||"Challenge"}),j.jsx("p",{className:"text-sm text-gray-600",children:s.challengeText}),j.jsxs("div",{className:"flex items-center justify-between",children:[c!==null?j.jsxs("span",{className:"text-xs text-green-700 font-semibold",children:["You voted: ",c,"/10"]}):i?j.jsx("span",{className:"text-xs text-gray-400",children:"You created this"}):j.jsx("span",{className:"text-xs text-gray-400",children:"Click photo to vote"}),i&&j.jsx("button",{onClick:v=>{v.stopPropagation(),d()},className:"text-red-600 hover:underline text-sm",children:"Delete"})]})]})]}),r&&j.jsx(aO,{challenge:s,user:t,onClose:()=>o(!1)})]})}function lO({text:s,type:t,name:i}){return j.jsx("div",{className:"relative p-1 rounded-2xl bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 animate-gradient-x shadow-xl",children:j.jsxs("div",{className:"rounded-2xl bg-white p-6 sm:p-10 text-center",children:[j.jsx("h2",{className:"text-2xl sm:text-3xl font-bold tracking-wide font-mono uppercase text-black mb-2",children:i||(t==="power"?"Power Card":"Daily Challenge")}),j.jsx("p",{className:"text-lg sm:text-xl text-gray-800",children:s})]})})}const oO="onshot_unsigned",uO="dhsgvtewc",cO=(s,t=1024)=>new Promise(i=>{const r=new FileReader;r.onload=o=>{const c=new Image;c.onload=()=>{let h=c.width,d=c.height;h>d&&h>t?(d=d*(t/h),h=t):d>t&&(h=h*(t/d),d=t);const m=document.createElement("canvas");m.width=h,m.height=d,m.getContext("2d").drawImage(c,0,0,h,d),m.toBlob(g=>i(g),"image/jpeg",.85)},c.src=o.target.result},r.readAsDataURL(s)}),fO=async s=>{var o;const t=new FormData;t.append("file",s),t.append("upload_preset",oO);const i=await fetch(`https://api.cloudinary.com/v1_1/${uO}/image/upload`,{method:"POST",body:t}),r=await i.json();if(!i.ok||!r.secure_url)throw new Error(((o=r.error)==null?void 0:o.message)||"Cloudinary upload failed");return r.secure_url},hO=async s=>{const t=new Date().toISOString().split("T")[0],i=await kr(kn(Un,"challenges"));if(!i.exists())return!1;const r=i.val();return Object.values(r).some(o=>{var h;const c=new Date(o.createdAt).toISOString().split("T")[0];return((h=o.createdBy)==null?void 0:h.uid)===s&&c===t})};function dO({user:s,challenge:t}){const[i,r]=$.useState(null),[o,c]=$.useState(!1),h=async d=>{if(d.preventDefault(),!t||!i)return sn.error("Challenge and file required");if(await hO(s.uid)){sn.error("You’ve already uploaded today!");return}c(!0);try{const g=await cO(i),v=await fO(g),E=FR(kn(Un,"challenges"));await tu(E,{challengeText:t.text,challengeName:t.name||null,imageURL:v,createdAt:Date.now(),createdBy:{uid:s.uid,name:s.displayName,photo:s.photoURL}}),sn.success("Challenge posted!"),r(null)}catch(g){console.error("Error uploading challenge:",g),sn.error("Upload failed. See console.")}c(!1)};return j.jsxs("form",{onSubmit:h,className:"bg-white p-6 rounded-xl shadow space-y-4 max-w-xl mx-auto",children:[t&&j.jsx(lO,{text:t.text,type:"daily",name:t.name}),j.jsx("input",{type:"file",accept:"image/*",onChange:d=>r(d.target.files[0]),className:"w-full"}),j.jsx("button",{type:"submit",disabled:o,className:"px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition disabled:opacity-50",children:o?"Posting…":"Post Challenge"})]})}function pO({user:s}){const[t,i]=$.useState([]),[r,o]=$.useState(null);return $.useEffect(()=>{s!=null&&s.uid&&(dN(i),hN(s.uid).then(o))},[s==null?void 0:s.uid]),j.jsxs("div",{className:"space-y-6",children:[j.jsx(dO,{user:s,challenge:r}),j.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map(c=>j.jsx(rO,{card:c,user:s},c.id))})]})}function mO({user:s,onSignOut:t}){return j.jsxs("nav",{className:"bg-blue-600 text-white p-4 rounded mb-6 flex justify-between items-center",children:[j.jsx("h1",{className:"text-xl font-bold",children:"Card Challenge"}),j.jsxs("div",{className:"flex items-center space-x-3",children:[s.photoURL&&j.jsx("img",{src:s.photoURL,alt:s.displayName,className:"w-8 h-8 rounded-full"}),j.jsx("button",{onClick:t,className:"px-3 py-1 bg-white text-blue-600 rounded hover:bg-gray-200 transition",children:"Sign Out"})]})]})}function gO(){const[s,t]=$.useState([]);return $.useEffect(()=>{const i=new Date().toISOString().split("T")[0],r=kn(Un,"challenges"),o=N0(r,c=>{const h=c.val(),d={};h&&Object.values(h).forEach(m=>{var v;new Date(m.createdAt).toISOString().split("T")[0]===i&&m.createdBy&&(d[m.createdBy.uid]={name:((v=m.createdBy.name)==null?void 0:v.split(" ")[0])??"Anon",photo:m.createdBy.photo??""})}),t(Object.values(d))});return()=>o()},[]),j.jsxs("aside",{className:"w-full sm:w-64 bg-white p-4 rounded-xl shadow mb-6",children:[j.jsx("h2",{className:"text-lg font-bold mb-4",children:"Today's Uploaders"}),j.jsxs("ul",{className:"space-y-3",children:[s.map((i,r)=>j.jsxs("li",{className:"flex items-center space-x-3",children:[j.jsx("img",{src:i.photo,alt:i.name,className:"w-8 h-8 rounded-full border shadow"}),j.jsx("span",{className:"text-gray-800 font-medium",children:i.name})]},r)),s.length===0&&j.jsx("li",{className:"text-gray-500 italic text-sm",children:"No uploads yet today"})]})]})}function _O(){const[s,t]=$.useState(null);return $.useEffect(()=>cN(t),[]),s?j.jsxs(j.Fragment,{children:[j.jsx(sO,{position:"top-center"}),j.jsx(mO,{user:s,onSignOut:uN}),j.jsxs("div",{className:"flex flex-col lg:flex-row max-w-6xl mx-auto px-4 gap-6",children:[j.jsx("div",{className:"flex-1",children:j.jsx(pO,{user:s})}),j.jsx("div",{className:"w-full lg:w-72",children:j.jsx(gO,{})})]})]}):j.jsx(pN,{})}dS.createRoot(document.getElementById("root")).render(j.jsx(aS.StrictMode,{children:j.jsx(_O,{})}));
