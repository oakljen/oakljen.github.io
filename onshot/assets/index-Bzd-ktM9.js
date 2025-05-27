(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();function $g(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var af={exports:{}},tl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function kS(){if(km)return tl;km=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(l,o,c){var h=null;if(c!==void 0&&(h=""+c),o.key!==void 0&&(h=""+o.key),"key"in o){c={};for(var _ in o)_!=="key"&&(c[_]=o[_])}else c=o;return o=c.ref,{$$typeof:a,type:l,key:h,ref:o!==void 0?o:null,props:c}}return tl.Fragment=t,tl.jsx=i,tl.jsxs=i,tl}var Lm;function LS(){return Lm||(Lm=1,af.exports=kS()),af.exports}var J=LS(),lf={exports:{}},W={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function zS(){if(zm)return W;zm=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function R(E){return E===null||typeof E!="object"?null:(E=b&&E[b]||E["@@iterator"],typeof E=="function"?E:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,Z={};function le(E,x,B){this.props=E,this.context=x,this.refs=Z,this.updater=B||k}le.prototype.isReactComponent={},le.prototype.setState=function(E,x){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,x,"setState")},le.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function Fe(){}Fe.prototype=le.prototype;function Xe(E,x,B){this.props=E,this.context=x,this.refs=Z,this.updater=B||k}var Ae=Xe.prototype=new Fe;Ae.constructor=Xe,L(Ae,le.prototype),Ae.isPureReactComponent=!0;var $e=Array.isArray,re={H:null,A:null,T:null,S:null,V:null},Ke=Object.prototype.hasOwnProperty;function et(E,x,B,z,V,ue){return B=ue.ref,{$$typeof:a,type:E,key:x,ref:B!==void 0?B:null,props:ue}}function rt(E,x){return et(E.type,x,void 0,void 0,void 0,E.props)}function ht(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function kn(E){var x={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(B){return x[B]})}var ln=/\/+/g;function tt(E,x){return typeof E=="object"&&E!==null&&E.key!=null?kn(""+E.key):x.toString(36)}function Ei(){}function Si(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(Ei,Ei):(E.status="pending",E.then(function(x){E.status==="pending"&&(E.status="fulfilled",E.value=x)},function(x){E.status==="pending"&&(E.status="rejected",E.reason=x)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function nt(E,x,B,z,V){var ue=typeof E;(ue==="undefined"||ue==="boolean")&&(E=null);var K=!1;if(E===null)K=!0;else switch(ue){case"bigint":case"string":case"number":K=!0;break;case"object":switch(E.$$typeof){case a:case t:K=!0;break;case y:return K=E._init,nt(K(E._payload),x,B,z,V)}}if(K)return V=V(E),K=z===""?"."+tt(E,0):z,$e(V)?(B="",K!=null&&(B=K.replace(ln,"$&/")+"/"),nt(V,x,B,"",function(Ln){return Ln})):V!=null&&(ht(V)&&(V=rt(V,B+(V.key==null||E&&E.key===V.key?"":(""+V.key).replace(ln,"$&/")+"/")+K)),x.push(V)),1;K=0;var bt=z===""?".":z+":";if($e(E))for(var Re=0;Re<E.length;Re++)z=E[Re],ue=bt+tt(z,Re),K+=nt(z,x,B,ue,V);else if(Re=R(E),typeof Re=="function")for(E=Re.call(E),Re=0;!(z=E.next()).done;)z=z.value,ue=bt+tt(z,Re++),K+=nt(z,x,B,ue,V);else if(ue==="object"){if(typeof E.then=="function")return nt(Si(E),x,B,z,V);throw x=String(E),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return K}function D(E,x,B){if(E==null)return E;var z=[],V=0;return nt(E,z,"","",function(ue){return x.call(B,ue,V++)}),z}function H(E){if(E._status===-1){var x=E._result;x=x(),x.then(function(B){(E._status===0||E._status===-1)&&(E._status=1,E._result=B)},function(B){(E._status===0||E._status===-1)&&(E._status=2,E._result=B)}),E._status===-1&&(E._status=0,E._result=x)}if(E._status===1)return E._result.default;throw E._result}var Y=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(x))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function ye(){}return W.Children={map:D,forEach:function(E,x,B){D(E,function(){x.apply(this,arguments)},B)},count:function(E){var x=0;return D(E,function(){x++}),x},toArray:function(E){return D(E,function(x){return x})||[]},only:function(E){if(!ht(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},W.Component=le,W.Fragment=i,W.Profiler=o,W.PureComponent=Xe,W.StrictMode=l,W.Suspense=p,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=re,W.__COMPILER_RUNTIME={__proto__:null,c:function(E){return re.H.useMemoCache(E)}},W.cache=function(E){return function(){return E.apply(null,arguments)}},W.cloneElement=function(E,x,B){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var z=L({},E.props),V=E.key,ue=void 0;if(x!=null)for(K in x.ref!==void 0&&(ue=void 0),x.key!==void 0&&(V=""+x.key),x)!Ke.call(x,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&x.ref===void 0||(z[K]=x[K]);var K=arguments.length-2;if(K===1)z.children=B;else if(1<K){for(var bt=Array(K),Re=0;Re<K;Re++)bt[Re]=arguments[Re+2];z.children=bt}return et(E.type,V,void 0,void 0,ue,z)},W.createContext=function(E){return E={$$typeof:h,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:c,_context:E},E},W.createElement=function(E,x,B){var z,V={},ue=null;if(x!=null)for(z in x.key!==void 0&&(ue=""+x.key),x)Ke.call(x,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&(V[z]=x[z]);var K=arguments.length-2;if(K===1)V.children=B;else if(1<K){for(var bt=Array(K),Re=0;Re<K;Re++)bt[Re]=arguments[Re+2];V.children=bt}if(E&&E.defaultProps)for(z in K=E.defaultProps,K)V[z]===void 0&&(V[z]=K[z]);return et(E,ue,void 0,void 0,null,V)},W.createRef=function(){return{current:null}},W.forwardRef=function(E){return{$$typeof:_,render:E}},W.isValidElement=ht,W.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:H}},W.memo=function(E,x){return{$$typeof:m,type:E,compare:x===void 0?null:x}},W.startTransition=function(E){var x=re.T,B={};re.T=B;try{var z=E(),V=re.S;V!==null&&V(B,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(ye,Y)}catch(ue){Y(ue)}finally{re.T=x}},W.unstable_useCacheRefresh=function(){return re.H.useCacheRefresh()},W.use=function(E){return re.H.use(E)},W.useActionState=function(E,x,B){return re.H.useActionState(E,x,B)},W.useCallback=function(E,x){return re.H.useCallback(E,x)},W.useContext=function(E){return re.H.useContext(E)},W.useDebugValue=function(){},W.useDeferredValue=function(E,x){return re.H.useDeferredValue(E,x)},W.useEffect=function(E,x,B){var z=re.H;if(typeof B=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return z.useEffect(E,x)},W.useId=function(){return re.H.useId()},W.useImperativeHandle=function(E,x,B){return re.H.useImperativeHandle(E,x,B)},W.useInsertionEffect=function(E,x){return re.H.useInsertionEffect(E,x)},W.useLayoutEffect=function(E,x){return re.H.useLayoutEffect(E,x)},W.useMemo=function(E,x){return re.H.useMemo(E,x)},W.useOptimistic=function(E,x){return re.H.useOptimistic(E,x)},W.useReducer=function(E,x,B){return re.H.useReducer(E,x,B)},W.useRef=function(E){return re.H.useRef(E)},W.useState=function(E){return re.H.useState(E)},W.useSyncExternalStore=function(E,x,B){return re.H.useSyncExternalStore(E,x,B)},W.useTransition=function(){return re.H.useTransition()},W.version="19.1.0",W}var Hm;function Qf(){return Hm||(Hm=1,lf.exports=zS()),lf.exports}var yt=Qf();const HS=$g(yt);var rf={exports:{}},nl={},of={exports:{}},uf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function BS(){return Bm||(Bm=1,function(a){function t(D,H){var Y=D.length;D.push(H);e:for(;0<Y;){var ye=Y-1>>>1,E=D[ye];if(0<o(E,H))D[ye]=H,D[Y]=E,Y=ye;else break e}}function i(D){return D.length===0?null:D[0]}function l(D){if(D.length===0)return null;var H=D[0],Y=D.pop();if(Y!==H){D[0]=Y;e:for(var ye=0,E=D.length,x=E>>>1;ye<x;){var B=2*(ye+1)-1,z=D[B],V=B+1,ue=D[V];if(0>o(z,Y))V<E&&0>o(ue,z)?(D[ye]=ue,D[V]=Y,ye=V):(D[ye]=z,D[B]=Y,ye=B);else if(V<E&&0>o(ue,Y))D[ye]=ue,D[V]=Y,ye=V;else break e}}return H}function o(D,H){var Y=D.sortIndex-H.sortIndex;return Y!==0?Y:D.id-H.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var h=Date,_=h.now();a.unstable_now=function(){return h.now()-_}}var p=[],m=[],y=1,b=null,R=3,k=!1,L=!1,Z=!1,le=!1,Fe=typeof setTimeout=="function"?setTimeout:null,Xe=typeof clearTimeout=="function"?clearTimeout:null,Ae=typeof setImmediate<"u"?setImmediate:null;function $e(D){for(var H=i(m);H!==null;){if(H.callback===null)l(m);else if(H.startTime<=D)l(m),H.sortIndex=H.expirationTime,t(p,H);else break;H=i(m)}}function re(D){if(Z=!1,$e(D),!L)if(i(p)!==null)L=!0,Ke||(Ke=!0,tt());else{var H=i(m);H!==null&&nt(re,H.startTime-D)}}var Ke=!1,et=-1,rt=5,ht=-1;function kn(){return le?!0:!(a.unstable_now()-ht<rt)}function ln(){if(le=!1,Ke){var D=a.unstable_now();ht=D;var H=!0;try{e:{L=!1,Z&&(Z=!1,Xe(et),et=-1),k=!0;var Y=R;try{t:{for($e(D),b=i(p);b!==null&&!(b.expirationTime>D&&kn());){var ye=b.callback;if(typeof ye=="function"){b.callback=null,R=b.priorityLevel;var E=ye(b.expirationTime<=D);if(D=a.unstable_now(),typeof E=="function"){b.callback=E,$e(D),H=!0;break t}b===i(p)&&l(p),$e(D)}else l(p);b=i(p)}if(b!==null)H=!0;else{var x=i(m);x!==null&&nt(re,x.startTime-D),H=!1}}break e}finally{b=null,R=Y,k=!1}H=void 0}}finally{H?tt():Ke=!1}}}var tt;if(typeof Ae=="function")tt=function(){Ae(ln)};else if(typeof MessageChannel<"u"){var Ei=new MessageChannel,Si=Ei.port2;Ei.port1.onmessage=ln,tt=function(){Si.postMessage(null)}}else tt=function(){Fe(ln,0)};function nt(D,H){et=Fe(function(){D(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(D){D.callback=null},a.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):rt=0<D?Math.floor(1e3/D):5},a.unstable_getCurrentPriorityLevel=function(){return R},a.unstable_next=function(D){switch(R){case 1:case 2:case 3:var H=3;break;default:H=R}var Y=R;R=H;try{return D()}finally{R=Y}},a.unstable_requestPaint=function(){le=!0},a.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Y=R;R=D;try{return H()}finally{R=Y}},a.unstable_scheduleCallback=function(D,H,Y){var ye=a.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ye+Y:ye):Y=ye,D){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=Y+E,D={id:y++,callback:H,priorityLevel:D,startTime:Y,expirationTime:E,sortIndex:-1},Y>ye?(D.sortIndex=Y,t(m,D),i(p)===null&&D===i(m)&&(Z?(Xe(et),et=-1):Z=!0,nt(re,Y-ye))):(D.sortIndex=E,t(p,D),L||k||(L=!0,Ke||(Ke=!0,tt()))),D},a.unstable_shouldYield=kn,a.unstable_wrapCallback=function(D){var H=R;return function(){var Y=R;R=H;try{return D.apply(this,arguments)}finally{R=Y}}}}(uf)),uf}var Pm;function PS(){return Pm||(Pm=1,of.exports=BS()),of.exports}var cf={exports:{}},at={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function qS(){if(qm)return at;qm=1;var a=Qf();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var l={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,m,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:p,containerInfo:m,implementation:y}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,at.createPortal=function(p,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,y)},at.flushSync=function(p){var m=h.T,y=l.p;try{if(h.T=null,l.p=2,p)return p()}finally{h.T=m,l.p=y,l.d.f()}},at.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,l.d.C(p,m))},at.prefetchDNS=function(p){typeof p=="string"&&l.d.D(p)},at.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var y=m.as,b=_(y,m.crossOrigin),R=typeof m.integrity=="string"?m.integrity:void 0,k=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?l.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:R,fetchPriority:k}):y==="script"&&l.d.X(p,{crossOrigin:b,integrity:R,fetchPriority:k,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},at.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=_(m.as,m.crossOrigin);l.d.M(p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&l.d.M(p)},at.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,b=_(y,m.crossOrigin);l.d.L(p,y,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},at.preloadModule=function(p,m){if(typeof p=="string")if(m){var y=_(m.as,m.crossOrigin);l.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else l.d.m(p)},at.requestFormReset=function(p){l.d.r(p)},at.unstable_batchedUpdates=function(p,m){return p(m)},at.useFormState=function(p,m,y){return h.H.useFormState(p,m,y)},at.useFormStatus=function(){return h.H.useHostTransitionStatus()},at.version="19.1.0",at}var Vm;function VS(){if(Vm)return cf.exports;Vm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),cf.exports=qS(),cf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function jS(){if(jm)return nl;jm=1;var a=PS(),t=Qf(),i=VS();function l(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function _(e){if(c(e)!==e)throw Error(l(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(l(188));return n!==e?null:e}for(var s=e,r=n;;){var u=s.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){s=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===s)return _(u),e;if(f===r)return _(u),n;f=f.sibling}throw Error(l(188))}if(s.return!==r.return)s=u,r=f;else{for(var d=!1,g=u.child;g;){if(g===s){d=!0,s=u,r=f;break}if(g===r){d=!0,r=u,s=f;break}g=g.sibling}if(!d){for(g=f.child;g;){if(g===s){d=!0,s=f,r=u;break}if(g===r){d=!0,r=f,s=u;break}g=g.sibling}if(!d)throw Error(l(189))}}if(s.alternate!==r)throw Error(l(190))}if(s.tag!==3)throw Error(l(188));return s.stateNode.current===s?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),le=Symbol.for("react.profiler"),Fe=Symbol.for("react.provider"),Xe=Symbol.for("react.consumer"),Ae=Symbol.for("react.context"),$e=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),et=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),ht=Symbol.for("react.activity"),kn=Symbol.for("react.memo_cache_sentinel"),ln=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=ln&&e[ln]||e["@@iterator"],typeof e=="function"?e:null)}var Ei=Symbol.for("react.client.reference");function Si(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ei?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case le:return"Profiler";case Z:return"StrictMode";case re:return"Suspense";case Ke:return"SuspenseList";case ht:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case Ae:return(e.displayName||"Context")+".Provider";case Xe:return(e._context.displayName||"Context")+".Consumer";case $e:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case et:return n=e.displayName||null,n!==null?n:Si(e.type)||"Memo";case rt:n=e._payload,e=e._init;try{return Si(e(n))}catch{}}return null}var nt=Array.isArray,D=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ye=[],E=-1;function x(e){return{current:e}}function B(e){0>E||(e.current=ye[E],ye[E]=null,E--)}function z(e,n){E++,ye[E]=e.current,e.current=n}var V=x(null),ue=x(null),K=x(null),bt=x(null);function Re(e,n){switch(z(K,n),z(ue,e),z(V,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?um(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=um(n),e=cm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(V),z(V,e)}function Ln(){B(V),B(ue),B(K)}function jo(e){e.memoizedState!==null&&z(bt,e);var n=V.current,s=cm(n,e.type);n!==s&&(z(ue,e),z(V,s))}function kl(e){ue.current===e&&(B(V),B(ue)),bt.current===e&&(B(bt),Za._currentValue=Y)}var Go=Object.prototype.hasOwnProperty,Yo=a.unstable_scheduleCallback,Qo=a.unstable_cancelCallback,d0=a.unstable_shouldYield,_0=a.unstable_requestPaint,Zt=a.unstable_now,p0=a.unstable_getCurrentPriorityLevel,jh=a.unstable_ImmediatePriority,Gh=a.unstable_UserBlockingPriority,Ll=a.unstable_NormalPriority,m0=a.unstable_LowPriority,Yh=a.unstable_IdlePriority,g0=a.log,v0=a.unstable_setDisableYieldValue,sa=null,Tt=null;function zn(e){if(typeof g0=="function"&&v0(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(sa,e)}catch{}}var Ct=Math.clz32?Math.clz32:S0,y0=Math.log,E0=Math.LN2;function S0(e){return e>>>=0,e===0?32:31-(y0(e)/E0|0)|0}var zl=256,Hl=4194304;function bi(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Bl(e,n,s){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var g=r&134217727;return g!==0?(r=g&~f,r!==0?u=bi(r):(d&=g,d!==0?u=bi(d):s||(s=g&~e,s!==0&&(u=bi(s))))):(g=r&~f,g!==0?u=bi(g):d!==0?u=bi(d):s||(s=r&~e,s!==0&&(u=bi(s)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,s=n&-n,f>=s||f===32&&(s&4194048)!==0)?n:u}function aa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function b0(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qh(){var e=zl;return zl<<=1,(zl&4194048)===0&&(zl=256),e}function Fh(){var e=Hl;return Hl<<=1,(Hl&62914560)===0&&(Hl=4194304),e}function Fo(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function la(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function T0(e,n,s,r,u,f){var d=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var g=e.entanglements,v=e.expirationTimes,A=e.hiddenUpdates;for(s=d&~s;0<s;){var O=31-Ct(s),I=1<<O;g[O]=0,v[O]=-1;var w=A[O];if(w!==null)for(A[O]=null,O=0;O<w.length;O++){var N=w[O];N!==null&&(N.lane&=-536870913)}s&=~I}r!==0&&Xh(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(d&~n))}function Xh(e,n,s){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ct(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|s&4194090}function Kh(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var r=31-Ct(s),u=1<<r;u&n|e[r]&n&&(e[r]|=n),s&=~u}}function Xo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ko(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zh(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Om(e.type))}function C0(e,n){var s=H.p;try{return H.p=e,n()}finally{H.p=s}}var Hn=Math.random().toString(36).slice(2),it="__reactFiber$"+Hn,dt="__reactProps$"+Hn,$i="__reactContainer$"+Hn,Zo="__reactEvents$"+Hn,A0="__reactListeners$"+Hn,R0="__reactHandles$"+Hn,Wh="__reactResources$"+Hn,ra="__reactMarker$"+Hn;function Wo(e){delete e[it],delete e[dt],delete e[Zo],delete e[A0],delete e[R0]}function es(e){var n=e[it];if(n)return n;for(var s=e.parentNode;s;){if(n=s[$i]||s[it]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=_m(e);e!==null;){if(s=e[it])return s;e=_m(e)}return n}e=s,s=e.parentNode}return null}function ts(e){if(e=e[it]||e[$i]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function oa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(l(33))}function ns(e){var n=e[Wh];return n||(n=e[Wh]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Pe(e){e[ra]=!0}var Jh=new Set,$h={};function Ti(e,n){is(e,n),is(e+"Capture",n)}function is(e,n){for($h[e]=n,e=0;e<n.length;e++)Jh.add(n[e])}var w0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ed={},td={};function N0(e){return Go.call(td,e)?!0:Go.call(ed,e)?!1:w0.test(e)?td[e]=!0:(ed[e]=!0,!1)}function Pl(e,n,s){if(N0(n))if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+s)}}function ql(e,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+s)}}function rn(e,n,s,r){if(r===null)e.removeAttribute(s);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(n,s,""+r)}}var Jo,nd;function ss(e){if(Jo===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Jo=n&&n[1]||"",nd=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jo+e+nd}var $o=!1;function eu(e,n){if(!e||$o)return"";$o=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch(N){var w=N}Reflect.construct(e,[],I)}else{try{I.call()}catch(N){w=N}e.call(I.prototype)}}else{try{throw Error()}catch(N){w=N}(I=e())&&typeof I.catch=="function"&&I.catch(function(){})}}catch(N){if(N&&w&&typeof N.stack=="string")return[N.stack,w.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),d=f[0],g=f[1];if(d&&g){var v=d.split(`
`),A=g.split(`
`);for(u=r=0;r<v.length&&!v[r].includes("DetermineComponentFrameRoot");)r++;for(;u<A.length&&!A[u].includes("DetermineComponentFrameRoot");)u++;if(r===v.length||u===A.length)for(r=v.length-1,u=A.length-1;1<=r&&0<=u&&v[r]!==A[u];)u--;for(;1<=r&&0<=u;r--,u--)if(v[r]!==A[u]){if(r!==1||u!==1)do if(r--,u--,0>u||v[r]!==A[u]){var O=`
`+v[r].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=r&&0<=u);break}}}finally{$o=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ss(s):""}function O0(e){switch(e.tag){case 26:case 27:case 5:return ss(e.type);case 16:return ss("Lazy");case 13:return ss("Suspense");case 19:return ss("SuspenseList");case 0:case 15:return eu(e.type,!1);case 11:return eu(e.type.render,!1);case 1:return eu(e.type,!0);case 31:return ss("Activity");default:return""}}function id(e){try{var n="";do n+=O0(e),e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function It(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function D0(e){var n=sd(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(d){r=""+d,f.call(this,d)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return r},setValue:function(d){r=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Vl(e){e._valueTracker||(e._valueTracker=D0(e))}function ad(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),r="";return e&&(r=sd(e)?e.checked?"true":"false":e.value),e=r,e!==s?(n.setValue(e),!0):!1}function jl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var M0=/[\n"\\]/g;function xt(e){return e.replace(M0,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function tu(e,n,s,r,u,f,d,g){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),n!=null?d==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+It(n)):e.value!==""+It(n)&&(e.value=""+It(n)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),n!=null?nu(e,d,It(n)):s!=null?nu(e,d,It(s)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+It(g):e.removeAttribute("name")}function ld(e,n,s,r,u,f,d,g){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;s=s!=null?""+It(s):"",n=n!=null?""+It(n):s,g||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=g?e.checked:!!r,e.defaultChecked=!!r,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function nu(e,n,s){n==="number"&&jl(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function as(e,n,s,r){if(e=e.options,n){n={};for(var u=0;u<s.length;u++)n["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=n.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&r&&(e[s].defaultSelected=!0)}else{for(s=""+It(s),n=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function rd(e,n,s){if(n!=null&&(n=""+It(n),n!==e.value&&(e.value=n),s==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=s!=null?""+It(s):""}function od(e,n,s,r){if(n==null){if(r!=null){if(s!=null)throw Error(l(92));if(nt(r)){if(1<r.length)throw Error(l(93));r=r[0]}s=r}s==null&&(s=""),n=s}s=It(n),e.defaultValue=s,r=e.textContent,r===s&&r!==""&&r!==null&&(e.value=r)}function ls(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var I0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ud(e,n,s){var r=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,s):typeof s!="number"||s===0||I0.has(n)?n==="float"?e.cssFloat=s:e[n]=(""+s).trim():e[n]=s+"px"}function cd(e,n,s){if(n!=null&&typeof n!="object")throw Error(l(62));if(e=e.style,s!=null){for(var r in s)!s.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&s[u]!==r&&ud(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&ud(e,f,n[f])}function iu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var x0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),U0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gl(e){return U0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var su=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rs=null,os=null;function fd(e){var n=ts(e);if(n&&(e=n.stateNode)){var s=e[dt]||null;e:switch(e=n.stateNode,n.type){case"input":if(tu(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+xt(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var r=s[n];if(r!==e&&r.form===e.form){var u=r[dt]||null;if(!u)throw Error(l(90));tu(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<s.length;n++)r=s[n],r.form===e.form&&ad(r)}break e;case"textarea":rd(e,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&as(e,!!s.multiple,n,!1)}}}var lu=!1;function hd(e,n,s){if(lu)return e(n,s);lu=!0;try{var r=e(n);return r}finally{if(lu=!1,(rs!==null||os!==null)&&(Or(),rs&&(n=rs,e=os,os=rs=null,fd(n),e)))for(n=0;n<e.length;n++)fd(e[n])}}function ua(e,n){var s=e.stateNode;if(s===null)return null;var r=s[dt]||null;if(r===null)return null;s=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(l(231,n,typeof s));return s}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(on)try{var ca={};Object.defineProperty(ca,"passive",{get:function(){ru=!0}}),window.addEventListener("test",ca,ca),window.removeEventListener("test",ca,ca)}catch{ru=!1}var Bn=null,ou=null,Yl=null;function dd(){if(Yl)return Yl;var e,n=ou,s=n.length,r,u="value"in Bn?Bn.value:Bn.textContent,f=u.length;for(e=0;e<s&&n[e]===u[e];e++);var d=s-e;for(r=1;r<=d&&n[s-r]===u[f-r];r++);return Yl=u.slice(e,1<r?1-r:void 0)}function Ql(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Fl(){return!0}function _d(){return!1}function _t(e){function n(s,r,u,f,d){this._reactName=s,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(s=e[g],this[g]=s?s(f):f[g]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Fl:_d,this.isPropagationStopped=_d,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Fl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Fl)},persist:function(){},isPersistent:Fl}),n}var Ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=_t(Ci),fa=y({},Ci,{view:0,detail:0}),k0=_t(fa),uu,cu,ha,Kl=y({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ha&&(ha&&e.type==="mousemove"?(uu=e.screenX-ha.screenX,cu=e.screenY-ha.screenY):cu=uu=0,ha=e),uu)},movementY:function(e){return"movementY"in e?e.movementY:cu}}),pd=_t(Kl),L0=y({},Kl,{dataTransfer:0}),z0=_t(L0),H0=y({},fa,{relatedTarget:0}),fu=_t(H0),B0=y({},Ci,{animationName:0,elapsedTime:0,pseudoElement:0}),P0=_t(B0),q0=y({},Ci,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),V0=_t(q0),j0=y({},Ci,{data:0}),md=_t(j0),G0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Q0[e])?!!n[e]:!1}function hu(){return F0}var X0=y({},fa,{key:function(e){if(e.key){var n=G0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ql(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Y0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(e){return e.type==="keypress"?Ql(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ql(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),K0=_t(X0),Z0=y({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gd=_t(Z0),W0=y({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),J0=_t(W0),$0=y({},Ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),eE=_t($0),tE=y({},Kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nE=_t(tE),iE=y({},Ci,{newState:0,oldState:0}),sE=_t(iE),aE=[9,13,27,32],du=on&&"CompositionEvent"in window,da=null;on&&"documentMode"in document&&(da=document.documentMode);var lE=on&&"TextEvent"in window&&!da,vd=on&&(!du||da&&8<da&&11>=da),yd=" ",Ed=!1;function Sd(e,n){switch(e){case"keyup":return aE.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var us=!1;function rE(e,n){switch(e){case"compositionend":return bd(n);case"keypress":return n.which!==32?null:(Ed=!0,yd);case"textInput":return e=n.data,e===yd&&Ed?null:e;default:return null}}function oE(e,n){if(us)return e==="compositionend"||!du&&Sd(e,n)?(e=dd(),Yl=ou=Bn=null,us=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vd&&n.locale!=="ko"?null:n.data;default:return null}}var uE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!uE[e.type]:n==="textarea"}function Cd(e,n,s,r){rs?os?os.push(r):os=[r]:rs=r,n=kr(n,"onChange"),0<n.length&&(s=new Xl("onChange","change",null,s,r),e.push({event:s,listeners:n}))}var _a=null,pa=null;function cE(e){sm(e,0)}function Zl(e){var n=oa(e);if(ad(n))return e}function Ad(e,n){if(e==="change")return n}var Rd=!1;if(on){var _u;if(on){var pu="oninput"in document;if(!pu){var wd=document.createElement("div");wd.setAttribute("oninput","return;"),pu=typeof wd.oninput=="function"}_u=pu}else _u=!1;Rd=_u&&(!document.documentMode||9<document.documentMode)}function Nd(){_a&&(_a.detachEvent("onpropertychange",Od),pa=_a=null)}function Od(e){if(e.propertyName==="value"&&Zl(pa)){var n=[];Cd(n,pa,e,au(e)),hd(cE,n)}}function fE(e,n,s){e==="focusin"?(Nd(),_a=n,pa=s,_a.attachEvent("onpropertychange",Od)):e==="focusout"&&Nd()}function hE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zl(pa)}function dE(e,n){if(e==="click")return Zl(n)}function _E(e,n){if(e==="input"||e==="change")return Zl(n)}function pE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var At=typeof Object.is=="function"?Object.is:pE;function ma(e,n){if(At(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),r=Object.keys(n);if(s.length!==r.length)return!1;for(r=0;r<s.length;r++){var u=s[r];if(!Go.call(n,u)||!At(e[u],n[u]))return!1}return!0}function Dd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Md(e,n){var s=Dd(e);e=0;for(var r;s;){if(s.nodeType===3){if(r=e+s.textContent.length,e<=n&&r>=n)return{node:s,offset:n-e};e=r}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Dd(s)}}function Id(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Id(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=jl(e.document);n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=jl(e.document)}return n}function mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var mE=on&&"documentMode"in document&&11>=document.documentMode,cs=null,gu=null,ga=null,vu=!1;function Ud(e,n,s){var r=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;vu||cs==null||cs!==jl(r)||(r=cs,"selectionStart"in r&&mu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ga&&ma(ga,r)||(ga=r,r=kr(gu,"onSelect"),0<r.length&&(n=new Xl("onSelect","select",null,n,s),e.push({event:n,listeners:r}),n.target=cs)))}function Ai(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var fs={animationend:Ai("Animation","AnimationEnd"),animationiteration:Ai("Animation","AnimationIteration"),animationstart:Ai("Animation","AnimationStart"),transitionrun:Ai("Transition","TransitionRun"),transitionstart:Ai("Transition","TransitionStart"),transitioncancel:Ai("Transition","TransitionCancel"),transitionend:Ai("Transition","TransitionEnd")},yu={},kd={};on&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Ri(e){if(yu[e])return yu[e];if(!fs[e])return e;var n=fs[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in kd)return yu[e]=n[s];return e}var Ld=Ri("animationend"),zd=Ri("animationiteration"),Hd=Ri("animationstart"),gE=Ri("transitionrun"),vE=Ri("transitionstart"),yE=Ri("transitioncancel"),Bd=Ri("transitionend"),Pd=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function qt(e,n){Pd.set(e,n),Ti(n,[e])}var qd=new WeakMap;function Ut(e,n){if(typeof e=="object"&&e!==null){var s=qd.get(e);return s!==void 0?s:(n={value:e,source:n,stack:id(n)},qd.set(e,n),n)}return{value:e,source:n,stack:id(n)}}var kt=[],hs=0,Su=0;function Wl(){for(var e=hs,n=Su=hs=0;n<e;){var s=kt[n];kt[n++]=null;var r=kt[n];kt[n++]=null;var u=kt[n];kt[n++]=null;var f=kt[n];if(kt[n++]=null,r!==null&&u!==null){var d=r.pending;d===null?u.next=u:(u.next=d.next,d.next=u),r.pending=u}f!==0&&Vd(s,u,f)}}function Jl(e,n,s,r){kt[hs++]=e,kt[hs++]=n,kt[hs++]=s,kt[hs++]=r,Su|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function bu(e,n,s,r){return Jl(e,n,s,r),$l(e)}function ds(e,n){return Jl(e,null,null,n),$l(e)}function Vd(e,n,s){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s);for(var u=!1,f=e.return;f!==null;)f.childLanes|=s,r=f.alternate,r!==null&&(r.childLanes|=s),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ct(s),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=s|536870912),f):null}function $l(e){if(50<Va)throw Va=0,Nc=null,Error(l(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var _s={};function EE(e,n,s,r){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,n,s,r){return new EE(e,n,s,r)}function Tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function un(e,n){var s=e.alternate;return s===null?(s=Rt(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function jd(e,n){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,n=s.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function er(e,n,s,r,u,f){var d=0;if(r=e,typeof e=="function")Tu(e)&&(d=1);else if(typeof e=="string")d=bS(e,s,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ht:return e=Rt(31,s,n,u),e.elementType=ht,e.lanes=f,e;case L:return wi(s.children,u,f,n);case Z:d=8,u|=24;break;case le:return e=Rt(12,s,n,u|2),e.elementType=le,e.lanes=f,e;case re:return e=Rt(13,s,n,u),e.elementType=re,e.lanes=f,e;case Ke:return e=Rt(19,s,n,u),e.elementType=Ke,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fe:case Ae:d=10;break e;case Xe:d=9;break e;case $e:d=11;break e;case et:d=14;break e;case rt:d=16,r=null;break e}d=29,s=Error(l(130,e===null?"null":typeof e,"")),r=null}return n=Rt(d,s,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function wi(e,n,s,r){return e=Rt(7,e,r,n),e.lanes=s,e}function Cu(e,n,s){return e=Rt(6,e,null,n),e.lanes=s,e}function Au(e,n,s){return n=Rt(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ps=[],ms=0,tr=null,nr=0,Lt=[],zt=0,Ni=null,cn=1,fn="";function Oi(e,n){ps[ms++]=nr,ps[ms++]=tr,tr=e,nr=n}function Gd(e,n,s){Lt[zt++]=cn,Lt[zt++]=fn,Lt[zt++]=Ni,Ni=e;var r=cn;e=fn;var u=32-Ct(r)-1;r&=~(1<<u),s+=1;var f=32-Ct(n)+u;if(30<f){var d=u-u%5;f=(r&(1<<d)-1).toString(32),r>>=d,u-=d,cn=1<<32-Ct(n)+u|s<<u|r,fn=f+e}else cn=1<<f|s<<u|r,fn=e}function Ru(e){e.return!==null&&(Oi(e,1),Gd(e,1,0))}function wu(e){for(;e===tr;)tr=ps[--ms],ps[ms]=null,nr=ps[--ms],ps[ms]=null;for(;e===Ni;)Ni=Lt[--zt],Lt[zt]=null,fn=Lt[--zt],Lt[zt]=null,cn=Lt[--zt],Lt[zt]=null}var ot=null,Oe=null,he=!1,Di=null,Wt=!1,Nu=Error(l(519));function Mi(e){var n=Error(l(418,""));throw Ea(Ut(n,e)),Nu}function Yd(e){var n=e.stateNode,s=e.type,r=e.memoizedProps;switch(n[it]=e,n[dt]=r,s){case"dialog":se("cancel",n),se("close",n);break;case"iframe":case"object":case"embed":se("load",n);break;case"video":case"audio":for(s=0;s<Ga.length;s++)se(Ga[s],n);break;case"source":se("error",n);break;case"img":case"image":case"link":se("error",n),se("load",n);break;case"details":se("toggle",n);break;case"input":se("invalid",n),ld(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),Vl(n);break;case"select":se("invalid",n);break;case"textarea":se("invalid",n),od(n,r.value,r.defaultValue,r.children),Vl(n)}s=r.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||r.suppressHydrationWarning===!0||om(n.textContent,s)?(r.popover!=null&&(se("beforetoggle",n),se("toggle",n)),r.onScroll!=null&&se("scroll",n),r.onScrollEnd!=null&&se("scrollend",n),r.onClick!=null&&(n.onclick=Lr),n=!0):n=!1,n||Mi(e)}function Qd(e){for(ot=e.return;ot;)switch(ot.tag){case 5:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:ot=ot.return}}function va(e){if(e!==ot)return!1;if(!he)return Qd(e),he=!0,!1;var n=e.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Gc(e.type,e.memoizedProps)),s=!s),s&&Oe&&Mi(e),Qd(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(n===0){Oe=jt(e.nextSibling);break e}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++;e=e.nextSibling}Oe=null}}else n===27?(n=Oe,ti(e.type)?(e=Xc,Xc=null,Oe=e):Oe=n):Oe=ot?jt(e.stateNode.nextSibling):null;return!0}function ya(){Oe=ot=null,he=!1}function Fd(){var e=Di;return e!==null&&(gt===null?gt=e:gt.push.apply(gt,e),Di=null),e}function Ea(e){Di===null?Di=[e]:Di.push(e)}var Ou=x(null),Ii=null,hn=null;function Pn(e,n,s){z(Ou,n._currentValue),n._currentValue=s}function dn(e){e._currentValue=Ou.current,B(Ou)}function Du(e,n,s){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===s)break;e=e.return}}function Mu(e,n,s,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var d=u.child;f=f.firstContext;e:for(;f!==null;){var g=f;f=u;for(var v=0;v<n.length;v++)if(g.context===n[v]){f.lanes|=s,g=f.alternate,g!==null&&(g.lanes|=s),Du(f.return,s,e),r||(d=null);break e}f=g.next}}else if(u.tag===18){if(d=u.return,d===null)throw Error(l(341));d.lanes|=s,f=d.alternate,f!==null&&(f.lanes|=s),Du(d,s,e),d=null}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===e){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}}function Sa(e,n,s,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var d=u.alternate;if(d===null)throw Error(l(387));if(d=d.memoizedProps,d!==null){var g=u.type;At(u.pendingProps.value,d.value)||(e!==null?e.push(g):e=[g])}}else if(u===bt.current){if(d=u.alternate,d===null)throw Error(l(387));d.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Za):e=[Za])}u=u.return}e!==null&&Mu(n,e,s,r),n.flags|=262144}function ir(e){for(e=e.firstContext;e!==null;){if(!At(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xi(e){Ii=e,hn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function st(e){return Xd(Ii,e)}function sr(e,n){return Ii===null&&xi(e),Xd(e,n)}function Xd(e,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},hn===null){if(e===null)throw Error(l(308));hn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else hn=hn.next=n;return s}var SE=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(s,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(s){return s()})}},bE=a.unstable_scheduleCallback,TE=a.unstable_NormalPriority,Le={$$typeof:Ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Iu(){return{controller:new SE,data:new Map,refCount:0}}function ba(e){e.refCount--,e.refCount===0&&bE(TE,function(){e.controller.abort()})}var Ta=null,xu=0,gs=0,vs=null;function CE(e,n){if(Ta===null){var s=Ta=[];xu=0,gs=kc(),vs={status:"pending",value:void 0,then:function(r){s.push(r)}}}return xu++,n.then(Kd,Kd),n}function Kd(){if(--xu===0&&Ta!==null){vs!==null&&(vs.status="fulfilled");var e=Ta;Ta=null,gs=0,vs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function AE(e,n){var s=[],r={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<s.length;u++)(0,s[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),r}var Zd=D.S;D.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&CE(e,n),Zd!==null&&Zd(e,n)};var Ui=x(null);function Uu(){var e=Ui.current;return e!==null?e:be.pooledCache}function ar(e,n){n===null?z(Ui,Ui.current):z(Ui,n.pool)}function Wd(){var e=Uu();return e===null?null:{parent:Le._currentValue,pool:e}}var Ca=Error(l(460)),Jd=Error(l(474)),lr=Error(l(542)),ku={then:function(){}};function $d(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rr(){}function e_(e,n,s){switch(s=e[s],s===void 0?e.push(n):s!==n&&(n.then(rr,rr),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,n_(e),e;default:if(typeof n.status=="string")n.then(rr,rr);else{if(e=be,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,n_(e),e}throw Aa=n,Ca}}var Aa=null;function t_(){if(Aa===null)throw Error(l(459));var e=Aa;return Aa=null,e}function n_(e){if(e===Ca||e===lr)throw Error(l(483))}var qn=!1;function Lu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Vn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function jn(e,n,s){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(de&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=$l(e),Vd(e,null,s),n}return Jl(e,r,n,s),$l(e)}function Ra(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,s|=r,n.lanes=s,Kh(e,s)}}function Hu(e,n){var s=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,s===r)){var u=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var d={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?u=f=d:f=f.next=d,s=s.next}while(s!==null);f===null?u=f=n:f=f.next=n}else u=f=n;s={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}var Bu=!1;function wa(){if(Bu){var e=vs;if(e!==null)throw e}}function Na(e,n,s,r){Bu=!1;var u=e.updateQueue;qn=!1;var f=u.firstBaseUpdate,d=u.lastBaseUpdate,g=u.shared.pending;if(g!==null){u.shared.pending=null;var v=g,A=v.next;v.next=null,d===null?f=A:d.next=A,d=v;var O=e.alternate;O!==null&&(O=O.updateQueue,g=O.lastBaseUpdate,g!==d&&(g===null?O.firstBaseUpdate=A:g.next=A,O.lastBaseUpdate=v))}if(f!==null){var I=u.baseState;d=0,O=A=v=null,g=f;do{var w=g.lane&-536870913,N=w!==g.lane;if(N?(oe&w)===w:(r&w)===w){w!==0&&w===gs&&(Bu=!0),O!==null&&(O=O.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var F=e,j=g;w=n;var ge=s;switch(j.tag){case 1:if(F=j.payload,typeof F=="function"){I=F.call(ge,I,w);break e}I=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=j.payload,w=typeof F=="function"?F.call(ge,I,w):F,w==null)break e;I=y({},I,w);break e;case 2:qn=!0}}w=g.callback,w!==null&&(e.flags|=64,N&&(e.flags|=8192),N=u.callbacks,N===null?u.callbacks=[w]:N.push(w))}else N={lane:w,tag:g.tag,payload:g.payload,callback:g.callback,next:null},O===null?(A=O=N,v=I):O=O.next=N,d|=w;if(g=g.next,g===null){if(g=u.shared.pending,g===null)break;N=g,g=N.next,N.next=null,u.lastBaseUpdate=N,u.shared.pending=null}}while(!0);O===null&&(v=I),u.baseState=v,u.firstBaseUpdate=A,u.lastBaseUpdate=O,f===null&&(u.shared.lanes=0),Wn|=d,e.lanes=d,e.memoizedState=I}}function i_(e,n){if(typeof e!="function")throw Error(l(191,e));e.call(n)}function s_(e,n){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)i_(s[e],n)}var ys=x(null),or=x(0);function a_(e,n){e=En,z(or,e),z(ys,n),En=e|n.baseLanes}function Pu(){z(or,En),z(ys,ys.current)}function qu(){En=or.current,B(ys),B(or)}var Gn=0,$=null,pe=null,Ue=null,ur=!1,Es=!1,ki=!1,cr=0,Oa=0,Ss=null,RE=0;function Ie(){throw Error(l(321))}function Vu(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!At(e[s],n[s]))return!1;return!0}function ju(e,n,s,r,u,f){return Gn=f,$=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=e===null||e.memoizedState===null?V_:j_,ki=!1,f=s(r,u),ki=!1,Es&&(f=r_(n,s,r,u)),l_(e),f}function l_(e){D.H=mr;var n=pe!==null&&pe.next!==null;if(Gn=0,Ue=pe=$=null,ur=!1,Oa=0,Ss=null,n)throw Error(l(300));e===null||qe||(e=e.dependencies,e!==null&&ir(e)&&(qe=!0))}function r_(e,n,s,r){$=e;var u=0;do{if(Es&&(Ss=null),Oa=0,Es=!1,25<=u)throw Error(l(301));if(u+=1,Ue=pe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}D.H=xE,f=n(s,r)}while(Es);return f}function wE(){var e=D.H,n=e.useState()[0];return n=typeof n.then=="function"?Da(n):n,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&($.flags|=1024),n}function Gu(){var e=cr!==0;return cr=0,e}function Yu(e,n,s){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s}function Qu(e){if(ur){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ur=!1}Gn=0,Ue=pe=$=null,Es=!1,Oa=cr=0,Ss=null}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?$.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function ke(){if(pe===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var n=Ue===null?$.memoizedState:Ue.next;if(n!==null)Ue=n,pe=e;else{if(e===null)throw $.alternate===null?Error(l(467)):Error(l(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Ue===null?$.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Fu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Da(e){var n=Oa;return Oa+=1,Ss===null&&(Ss=[]),e=e_(Ss,e,n),n=$,(Ue===null?n.memoizedState:Ue.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?V_:j_),e}function fr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Da(e);if(e.$$typeof===Ae)return st(e)}throw Error(l(438,String(e)))}function Xu(e){var n=null,s=$.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var r=$.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=Fu(),$.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(e),r=0;r<e;r++)s[r]=kn;return n.index++,s}function _n(e,n){return typeof n=="function"?n(e):n}function hr(e){var n=ke();return Ku(n,pe,e)}function Ku(e,n,s){var r=e.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=s;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var d=u.next;u.next=f.next,f.next=d}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var g=d=null,v=null,A=n,O=!1;do{var I=A.lane&-536870913;if(I!==A.lane?(oe&I)===I:(Gn&I)===I){var w=A.revertLane;if(w===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),I===gs&&(O=!0);else if((Gn&w)===w){A=A.next,w===gs&&(O=!0);continue}else I={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(g=v=I,d=f):v=v.next=I,$.lanes|=w,Wn|=w;I=A.action,ki&&s(f,I),f=A.hasEagerState?A.eagerState:s(f,I)}else w={lane:I,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(g=v=w,d=f):v=v.next=w,$.lanes|=I,Wn|=I;A=A.next}while(A!==null&&A!==n);if(v===null?d=f:v.next=g,!At(f,e.memoizedState)&&(qe=!0,O&&(s=vs,s!==null)))throw s;e.memoizedState=f,e.baseState=d,e.baseQueue=v,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Zu(e){var n=ke(),s=n.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=e;var r=s.dispatch,u=s.pending,f=n.memoizedState;if(u!==null){s.pending=null;var d=u=u.next;do f=e(f,d.action),d=d.next;while(d!==u);At(f,n.memoizedState)||(qe=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),s.lastRenderedState=f}return[f,r]}function o_(e,n,s){var r=$,u=ke(),f=he;if(f){if(s===void 0)throw Error(l(407));s=s()}else s=n();var d=!At((pe||u).memoizedState,s);d&&(u.memoizedState=s,qe=!0),u=u.queue;var g=f_.bind(null,r,u,e);if(Ma(2048,8,g,[e]),u.getSnapshot!==n||d||Ue!==null&&Ue.memoizedState.tag&1){if(r.flags|=2048,bs(9,dr(),c_.bind(null,r,u,s,n),null),be===null)throw Error(l(349));f||(Gn&124)!==0||u_(r,n,s)}return s}function u_(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=$.updateQueue,n===null?(n=Fu(),$.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function c_(e,n,s,r){n.value=s,n.getSnapshot=r,h_(n)&&d_(e)}function f_(e,n,s){return s(function(){h_(n)&&d_(e)})}function h_(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!At(e,s)}catch{return!0}}function d_(e){var n=ds(e,2);n!==null&&Mt(n,e,2)}function Wu(e){var n=pt();if(typeof e=="function"){var s=e;if(e=s(),ki){zn(!0);try{s()}finally{zn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:e},n}function __(e,n,s,r){return e.baseState=s,Ku(e,pe,typeof r=="function"?r:_n)}function NE(e,n,s,r,u){if(pr(e))throw Error(l(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){f.listeners.push(d)}};D.T!==null?s(!0):f.isTransition=!1,r(f),s=n.pending,s===null?(f.next=n.pending=f,p_(n,f)):(f.next=s.next,n.pending=s.next=f)}}function p_(e,n){var s=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=D.T,d={};D.T=d;try{var g=s(u,r),v=D.S;v!==null&&v(d,g),m_(e,n,g)}catch(A){Ju(e,n,A)}finally{D.T=f}}else try{f=s(u,r),m_(e,n,f)}catch(A){Ju(e,n,A)}}function m_(e,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(r){g_(e,n,r)},function(r){return Ju(e,n,r)}):g_(e,n,s)}function g_(e,n,s){n.status="fulfilled",n.value=s,v_(n),e.state=s,n=e.pending,n!==null&&(s=n.next,s===n?e.pending=null:(s=s.next,n.next=s,p_(e,s)))}function Ju(e,n,s){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=s,v_(n),n=n.next;while(n!==r)}e.action=null}function v_(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function y_(e,n){return n}function E_(e,n){if(he){var s=be.formState;if(s!==null){e:{var r=$;if(he){if(Oe){t:{for(var u=Oe,f=Wt;u.nodeType!==8;){if(!f){u=null;break t}if(u=jt(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Oe=jt(u.nextSibling),r=u.data==="F!";break e}}Mi(r)}r=!1}r&&(n=s[0])}}return s=pt(),s.memoizedState=s.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:y_,lastRenderedState:n},s.queue=r,s=B_.bind(null,$,r),r.dispatch=s,r=Wu(!1),f=ic.bind(null,$,!1,r.queue),r=pt(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,s=NE.bind(null,$,u,f,s),u.dispatch=s,r.memoizedState=e,[n,s,!1]}function S_(e){var n=ke();return b_(n,pe,e)}function b_(e,n,s){if(n=Ku(e,n,y_)[0],e=hr(_n)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Da(n)}catch(d){throw d===Ca?lr:d}else r=n;n=ke();var u=n.queue,f=u.dispatch;return s!==n.memoizedState&&($.flags|=2048,bs(9,dr(),OE.bind(null,u,s),null)),[r,f,e]}function OE(e,n){e.action=n}function T_(e){var n=ke(),s=pe;if(s!==null)return b_(n,s,e);ke(),n=n.memoizedState,s=ke();var r=s.queue.dispatch;return s.memoizedState=e,[n,r,!1]}function bs(e,n,s,r){return e={tag:e,create:s,deps:r,inst:n,next:null},n=$.updateQueue,n===null&&(n=Fu(),$.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=e.next=e:(r=s.next,s.next=e,e.next=r,n.lastEffect=e),e}function dr(){return{destroy:void 0,resource:void 0}}function C_(){return ke().memoizedState}function _r(e,n,s,r){var u=pt();r=r===void 0?null:r,$.flags|=e,u.memoizedState=bs(1|n,dr(),s,r)}function Ma(e,n,s,r){var u=ke();r=r===void 0?null:r;var f=u.memoizedState.inst;pe!==null&&r!==null&&Vu(r,pe.memoizedState.deps)?u.memoizedState=bs(n,f,s,r):($.flags|=e,u.memoizedState=bs(1|n,f,s,r))}function A_(e,n){_r(8390656,8,e,n)}function R_(e,n){Ma(2048,8,e,n)}function w_(e,n){return Ma(4,2,e,n)}function N_(e,n){return Ma(4,4,e,n)}function O_(e,n){if(typeof n=="function"){e=e();var s=n(e);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function D_(e,n,s){s=s!=null?s.concat([e]):null,Ma(4,4,O_.bind(null,n,e),s)}function $u(){}function M_(e,n){var s=ke();n=n===void 0?null:n;var r=s.memoizedState;return n!==null&&Vu(n,r[1])?r[0]:(s.memoizedState=[e,n],e)}function I_(e,n){var s=ke();n=n===void 0?null:n;var r=s.memoizedState;if(n!==null&&Vu(n,r[1]))return r[0];if(r=e(),ki){zn(!0);try{e()}finally{zn(!1)}}return s.memoizedState=[r,n],r}function ec(e,n,s){return s===void 0||(Gn&1073741824)!==0?e.memoizedState=n:(e.memoizedState=s,e=kp(),$.lanes|=e,Wn|=e,s)}function x_(e,n,s,r){return At(s,n)?s:ys.current!==null?(e=ec(e,s,r),At(e,n)||(qe=!0),e):(Gn&42)===0?(qe=!0,e.memoizedState=s):(e=kp(),$.lanes|=e,Wn|=e,n)}function U_(e,n,s,r,u){var f=H.p;H.p=f!==0&&8>f?f:8;var d=D.T,g={};D.T=g,ic(e,!1,n,s);try{var v=u(),A=D.S;if(A!==null&&A(g,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var O=AE(v,r);Ia(e,n,O,Dt(e))}else Ia(e,n,r,Dt(e))}catch(I){Ia(e,n,{then:function(){},status:"rejected",reason:I},Dt())}finally{H.p=f,D.T=d}}function DE(){}function tc(e,n,s,r){if(e.tag!==5)throw Error(l(476));var u=k_(e).queue;U_(e,u,n,Y,s===null?DE:function(){return L_(e),s(r)})}function k_(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:Y},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:s},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function L_(e){var n=k_(e).next.queue;Ia(e,n,{},Dt())}function nc(){return st(Za)}function z_(){return ke().memoizedState}function H_(){return ke().memoizedState}function ME(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var s=Dt();e=Vn(s);var r=jn(n,e,s);r!==null&&(Mt(r,n,s),Ra(r,n,s)),n={cache:Iu()},e.payload=n;return}n=n.return}}function IE(e,n,s){var r=Dt();s={lane:r,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},pr(e)?P_(n,s):(s=bu(e,n,s,r),s!==null&&(Mt(s,e,r),q_(s,n,r)))}function B_(e,n,s){var r=Dt();Ia(e,n,s,r)}function Ia(e,n,s,r){var u={lane:r,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(pr(e))P_(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var d=n.lastRenderedState,g=f(d,s);if(u.hasEagerState=!0,u.eagerState=g,At(g,d))return Jl(e,n,u,0),be===null&&Wl(),!1}catch{}finally{}if(s=bu(e,n,u,r),s!==null)return Mt(s,e,r),q_(s,n,r),!0}return!1}function ic(e,n,s,r){if(r={lane:2,revertLane:kc(),action:r,hasEagerState:!1,eagerState:null,next:null},pr(e)){if(n)throw Error(l(479))}else n=bu(e,s,r,2),n!==null&&Mt(n,e,2)}function pr(e){var n=e.alternate;return e===$||n!==null&&n===$}function P_(e,n){Es=ur=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function q_(e,n,s){if((s&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,s|=r,n.lanes=s,Kh(e,s)}}var mr={readContext:st,use:fr,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useLayoutEffect:Ie,useInsertionEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useSyncExternalStore:Ie,useId:Ie,useHostTransitionStatus:Ie,useFormState:Ie,useActionState:Ie,useOptimistic:Ie,useMemoCache:Ie,useCacheRefresh:Ie},V_={readContext:st,use:fr,useCallback:function(e,n){return pt().memoizedState=[e,n===void 0?null:n],e},useContext:st,useEffect:A_,useImperativeHandle:function(e,n,s){s=s!=null?s.concat([e]):null,_r(4194308,4,O_.bind(null,n,e),s)},useLayoutEffect:function(e,n){return _r(4194308,4,e,n)},useInsertionEffect:function(e,n){_r(4,2,e,n)},useMemo:function(e,n){var s=pt();n=n===void 0?null:n;var r=e();if(ki){zn(!0);try{e()}finally{zn(!1)}}return s.memoizedState=[r,n],r},useReducer:function(e,n,s){var r=pt();if(s!==void 0){var u=s(n);if(ki){zn(!0);try{s(n)}finally{zn(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=IE.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var n=pt();return e={current:e},n.memoizedState=e},useState:function(e){e=Wu(e);var n=e.queue,s=B_.bind(null,$,n);return n.dispatch=s,[e.memoizedState,s]},useDebugValue:$u,useDeferredValue:function(e,n){var s=pt();return ec(s,e,n)},useTransition:function(){var e=Wu(!1);return e=U_.bind(null,$,e.queue,!0,!1),pt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,s){var r=$,u=pt();if(he){if(s===void 0)throw Error(l(407));s=s()}else{if(s=n(),be===null)throw Error(l(349));(oe&124)!==0||u_(r,n,s)}u.memoizedState=s;var f={value:s,getSnapshot:n};return u.queue=f,A_(f_.bind(null,r,f,e),[e]),r.flags|=2048,bs(9,dr(),c_.bind(null,r,f,s,n),null),s},useId:function(){var e=pt(),n=be.identifierPrefix;if(he){var s=fn,r=cn;s=(r&~(1<<32-Ct(r)-1)).toString(32)+s,n="«"+n+"R"+s,s=cr++,0<s&&(n+="H"+s.toString(32)),n+="»"}else s=RE++,n="«"+n+"r"+s.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:nc,useFormState:E_,useActionState:E_,useOptimistic:function(e){var n=pt();n.memoizedState=n.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=ic.bind(null,$,!0,s),s.dispatch=n,[e,n]},useMemoCache:Xu,useCacheRefresh:function(){return pt().memoizedState=ME.bind(null,$)}},j_={readContext:st,use:fr,useCallback:M_,useContext:st,useEffect:R_,useImperativeHandle:D_,useInsertionEffect:w_,useLayoutEffect:N_,useMemo:I_,useReducer:hr,useRef:C_,useState:function(){return hr(_n)},useDebugValue:$u,useDeferredValue:function(e,n){var s=ke();return x_(s,pe.memoizedState,e,n)},useTransition:function(){var e=hr(_n)[0],n=ke().memoizedState;return[typeof e=="boolean"?e:Da(e),n]},useSyncExternalStore:o_,useId:z_,useHostTransitionStatus:nc,useFormState:S_,useActionState:S_,useOptimistic:function(e,n){var s=ke();return __(s,pe,e,n)},useMemoCache:Xu,useCacheRefresh:H_},xE={readContext:st,use:fr,useCallback:M_,useContext:st,useEffect:R_,useImperativeHandle:D_,useInsertionEffect:w_,useLayoutEffect:N_,useMemo:I_,useReducer:Zu,useRef:C_,useState:function(){return Zu(_n)},useDebugValue:$u,useDeferredValue:function(e,n){var s=ke();return pe===null?ec(s,e,n):x_(s,pe.memoizedState,e,n)},useTransition:function(){var e=Zu(_n)[0],n=ke().memoizedState;return[typeof e=="boolean"?e:Da(e),n]},useSyncExternalStore:o_,useId:z_,useHostTransitionStatus:nc,useFormState:T_,useActionState:T_,useOptimistic:function(e,n){var s=ke();return pe!==null?__(s,pe,e,n):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Xu,useCacheRefresh:H_},Ts=null,xa=0;function gr(e){var n=xa;return xa+=1,Ts===null&&(Ts=[]),e_(Ts,e,n)}function Ua(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function vr(e,n){throw n.$$typeof===b?Error(l(525)):(e=Object.prototype.toString.call(n),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function G_(e){var n=e._init;return n(e._payload)}function Y_(e){function n(T,S){if(e){var C=T.deletions;C===null?(T.deletions=[S],T.flags|=16):C.push(S)}}function s(T,S){if(!e)return null;for(;S!==null;)n(T,S),S=S.sibling;return null}function r(T){for(var S=new Map;T!==null;)T.key!==null?S.set(T.key,T):S.set(T.index,T),T=T.sibling;return S}function u(T,S){return T=un(T,S),T.index=0,T.sibling=null,T}function f(T,S,C){return T.index=C,e?(C=T.alternate,C!==null?(C=C.index,C<S?(T.flags|=67108866,S):C):(T.flags|=67108866,S)):(T.flags|=1048576,S)}function d(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function g(T,S,C,M){return S===null||S.tag!==6?(S=Cu(C,T.mode,M),S.return=T,S):(S=u(S,C),S.return=T,S)}function v(T,S,C,M){var P=C.type;return P===L?O(T,S,C.props.children,M,C.key):S!==null&&(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===rt&&G_(P)===S.type)?(S=u(S,C.props),Ua(S,C),S.return=T,S):(S=er(C.type,C.key,C.props,null,T.mode,M),Ua(S,C),S.return=T,S)}function A(T,S,C,M){return S===null||S.tag!==4||S.stateNode.containerInfo!==C.containerInfo||S.stateNode.implementation!==C.implementation?(S=Au(C,T.mode,M),S.return=T,S):(S=u(S,C.children||[]),S.return=T,S)}function O(T,S,C,M,P){return S===null||S.tag!==7?(S=wi(C,T.mode,M,P),S.return=T,S):(S=u(S,C),S.return=T,S)}function I(T,S,C){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Cu(""+S,T.mode,C),S.return=T,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case R:return C=er(S.type,S.key,S.props,null,T.mode,C),Ua(C,S),C.return=T,C;case k:return S=Au(S,T.mode,C),S.return=T,S;case rt:var M=S._init;return S=M(S._payload),I(T,S,C)}if(nt(S)||tt(S))return S=wi(S,T.mode,C,null),S.return=T,S;if(typeof S.then=="function")return I(T,gr(S),C);if(S.$$typeof===Ae)return I(T,sr(T,S),C);vr(T,S)}return null}function w(T,S,C,M){var P=S!==null?S.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return P!==null?null:g(T,S,""+C,M);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case R:return C.key===P?v(T,S,C,M):null;case k:return C.key===P?A(T,S,C,M):null;case rt:return P=C._init,C=P(C._payload),w(T,S,C,M)}if(nt(C)||tt(C))return P!==null?null:O(T,S,C,M,null);if(typeof C.then=="function")return w(T,S,gr(C),M);if(C.$$typeof===Ae)return w(T,S,sr(T,C),M);vr(T,C)}return null}function N(T,S,C,M,P){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return T=T.get(C)||null,g(S,T,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case R:return T=T.get(M.key===null?C:M.key)||null,v(S,T,M,P);case k:return T=T.get(M.key===null?C:M.key)||null,A(S,T,M,P);case rt:var ee=M._init;return M=ee(M._payload),N(T,S,C,M,P)}if(nt(M)||tt(M))return T=T.get(C)||null,O(S,T,M,P,null);if(typeof M.then=="function")return N(T,S,C,gr(M),P);if(M.$$typeof===Ae)return N(T,S,C,sr(S,M),P);vr(S,M)}return null}function F(T,S,C,M){for(var P=null,ee=null,q=S,G=S=0,je=null;q!==null&&G<C.length;G++){q.index>G?(je=q,q=null):je=q.sibling;var ce=w(T,q,C[G],M);if(ce===null){q===null&&(q=je);break}e&&q&&ce.alternate===null&&n(T,q),S=f(ce,S,G),ee===null?P=ce:ee.sibling=ce,ee=ce,q=je}if(G===C.length)return s(T,q),he&&Oi(T,G),P;if(q===null){for(;G<C.length;G++)q=I(T,C[G],M),q!==null&&(S=f(q,S,G),ee===null?P=q:ee.sibling=q,ee=q);return he&&Oi(T,G),P}for(q=r(q);G<C.length;G++)je=N(q,T,G,C[G],M),je!==null&&(e&&je.alternate!==null&&q.delete(je.key===null?G:je.key),S=f(je,S,G),ee===null?P=je:ee.sibling=je,ee=je);return e&&q.forEach(function(li){return n(T,li)}),he&&Oi(T,G),P}function j(T,S,C,M){if(C==null)throw Error(l(151));for(var P=null,ee=null,q=S,G=S=0,je=null,ce=C.next();q!==null&&!ce.done;G++,ce=C.next()){q.index>G?(je=q,q=null):je=q.sibling;var li=w(T,q,ce.value,M);if(li===null){q===null&&(q=je);break}e&&q&&li.alternate===null&&n(T,q),S=f(li,S,G),ee===null?P=li:ee.sibling=li,ee=li,q=je}if(ce.done)return s(T,q),he&&Oi(T,G),P;if(q===null){for(;!ce.done;G++,ce=C.next())ce=I(T,ce.value,M),ce!==null&&(S=f(ce,S,G),ee===null?P=ce:ee.sibling=ce,ee=ce);return he&&Oi(T,G),P}for(q=r(q);!ce.done;G++,ce=C.next())ce=N(q,T,G,ce.value,M),ce!==null&&(e&&ce.alternate!==null&&q.delete(ce.key===null?G:ce.key),S=f(ce,S,G),ee===null?P=ce:ee.sibling=ce,ee=ce);return e&&q.forEach(function(US){return n(T,US)}),he&&Oi(T,G),P}function ge(T,S,C,M){if(typeof C=="object"&&C!==null&&C.type===L&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case R:e:{for(var P=C.key;S!==null;){if(S.key===P){if(P=C.type,P===L){if(S.tag===7){s(T,S.sibling),M=u(S,C.props.children),M.return=T,T=M;break e}}else if(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===rt&&G_(P)===S.type){s(T,S.sibling),M=u(S,C.props),Ua(M,C),M.return=T,T=M;break e}s(T,S);break}else n(T,S);S=S.sibling}C.type===L?(M=wi(C.props.children,T.mode,M,C.key),M.return=T,T=M):(M=er(C.type,C.key,C.props,null,T.mode,M),Ua(M,C),M.return=T,T=M)}return d(T);case k:e:{for(P=C.key;S!==null;){if(S.key===P)if(S.tag===4&&S.stateNode.containerInfo===C.containerInfo&&S.stateNode.implementation===C.implementation){s(T,S.sibling),M=u(S,C.children||[]),M.return=T,T=M;break e}else{s(T,S);break}else n(T,S);S=S.sibling}M=Au(C,T.mode,M),M.return=T,T=M}return d(T);case rt:return P=C._init,C=P(C._payload),ge(T,S,C,M)}if(nt(C))return F(T,S,C,M);if(tt(C)){if(P=tt(C),typeof P!="function")throw Error(l(150));return C=P.call(C),j(T,S,C,M)}if(typeof C.then=="function")return ge(T,S,gr(C),M);if(C.$$typeof===Ae)return ge(T,S,sr(T,C),M);vr(T,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,S!==null&&S.tag===6?(s(T,S.sibling),M=u(S,C),M.return=T,T=M):(s(T,S),M=Cu(C,T.mode,M),M.return=T,T=M),d(T)):s(T,S)}return function(T,S,C,M){try{xa=0;var P=ge(T,S,C,M);return Ts=null,P}catch(q){if(q===Ca||q===lr)throw q;var ee=Rt(29,q,null,T.mode);return ee.lanes=M,ee.return=T,ee}finally{}}}var Cs=Y_(!0),Q_=Y_(!1),Ht=x(null),Jt=null;function Yn(e){var n=e.alternate;z(ze,ze.current&1),z(Ht,e),Jt===null&&(n===null||ys.current!==null||n.memoizedState!==null)&&(Jt=e)}function F_(e){if(e.tag===22){if(z(ze,ze.current),z(Ht,e),Jt===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Jt=e)}}else Qn()}function Qn(){z(ze,ze.current),z(Ht,Ht.current)}function pn(e){B(Ht),Jt===e&&(Jt=null),B(ze)}var ze=x(0);function yr(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Fc(s)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function sc(e,n,s,r){n=e.memoizedState,s=s(r,n),s=s==null?n:y({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var ac={enqueueSetState:function(e,n,s){e=e._reactInternals;var r=Dt(),u=Vn(r);u.payload=n,s!=null&&(u.callback=s),n=jn(e,u,r),n!==null&&(Mt(n,e,r),Ra(n,e,r))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var r=Dt(),u=Vn(r);u.tag=1,u.payload=n,s!=null&&(u.callback=s),n=jn(e,u,r),n!==null&&(Mt(n,e,r),Ra(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=Dt(),r=Vn(s);r.tag=2,n!=null&&(r.callback=n),n=jn(e,r,s),n!==null&&(Mt(n,e,s),Ra(n,e,s))}};function X_(e,n,s,r,u,f,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,d):n.prototype&&n.prototype.isPureReactComponent?!ma(s,r)||!ma(u,f):!0}function K_(e,n,s,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,r),n.state!==e&&ac.enqueueReplaceState(n,n.state,null)}function Li(e,n){var s=n;if("ref"in n){s={};for(var r in n)r!=="ref"&&(s[r]=n[r])}if(e=e.defaultProps){s===n&&(s=y({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}var Er=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Z_(e){Er(e)}function W_(e){console.error(e)}function J_(e){Er(e)}function Sr(e,n){try{var s=e.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function $_(e,n,s){try{var r=e.onCaughtError;r(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function lc(e,n,s){return s=Vn(s),s.tag=3,s.payload={element:null},s.callback=function(){Sr(e,n)},s}function ep(e){return e=Vn(e),e.tag=3,e}function tp(e,n,s,r){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){$_(n,s,r)}}var d=s.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){$_(n,s,r),typeof u!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var g=r.stack;this.componentDidCatch(r.value,{componentStack:g!==null?g:""})})}function UE(e,n,s,r,u){if(s.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=s.alternate,n!==null&&Sa(n,s,u,!0),s=Ht.current,s!==null){switch(s.tag){case 13:return Jt===null?Dc():s.alternate===null&&De===0&&(De=3),s.flags&=-257,s.flags|=65536,s.lanes=u,r===ku?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([r]):n.add(r),Ic(e,r,u)),!1;case 22:return s.flags|=65536,r===ku?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([r]):s.add(r)),Ic(e,r,u)),!1}throw Error(l(435,s.tag))}return Ic(e,r,u),Dc(),!1}if(he)return n=Ht.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Nu&&(e=Error(l(422),{cause:r}),Ea(Ut(e,s)))):(r!==Nu&&(n=Error(l(423),{cause:r}),Ea(Ut(n,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=Ut(r,s),u=lc(e.stateNode,r,u),Hu(e,u),De!==4&&(De=2)),!1;var f=Error(l(520),{cause:r});if(f=Ut(f,s),qa===null?qa=[f]:qa.push(f),De!==4&&(De=2),n===null)return!0;r=Ut(r,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=lc(s.stateNode,r,e),Hu(s,e),!1;case 1:if(n=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Jn===null||!Jn.has(f))))return s.flags|=65536,u&=-u,s.lanes|=u,u=ep(u),tp(u,e,s,r),Hu(s,u),!1}s=s.return}while(s!==null);return!1}var np=Error(l(461)),qe=!1;function Ze(e,n,s,r){n.child=e===null?Q_(n,null,s,r):Cs(n,e.child,s,r)}function ip(e,n,s,r,u){s=s.render;var f=n.ref;if("ref"in r){var d={};for(var g in r)g!=="ref"&&(d[g]=r[g])}else d=r;return xi(n),r=ju(e,n,s,d,f,u),g=Gu(),e!==null&&!qe?(Yu(e,n,u),mn(e,n,u)):(he&&g&&Ru(n),n.flags|=1,Ze(e,n,r,u),n.child)}function sp(e,n,s,r,u){if(e===null){var f=s.type;return typeof f=="function"&&!Tu(f)&&f.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=f,ap(e,n,f,r,u)):(e=er(s.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!_c(e,u)){var d=f.memoizedProps;if(s=s.compare,s=s!==null?s:ma,s(d,r)&&e.ref===n.ref)return mn(e,n,u)}return n.flags|=1,e=un(f,r),e.ref=n.ref,e.return=n,n.child=e}function ap(e,n,s,r,u){if(e!==null){var f=e.memoizedProps;if(ma(f,r)&&e.ref===n.ref)if(qe=!1,n.pendingProps=r=f,_c(e,u))(e.flags&131072)!==0&&(qe=!0);else return n.lanes=e.lanes,mn(e,n,u)}return rc(e,n,s,r,u)}function lp(e,n,s){var r=n.pendingProps,u=r.children,f=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((n.flags&128)!==0){if(r=f!==null?f.baseLanes|s:s,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~r}else n.childLanes=0,n.child=null;return rp(e,n,r,s)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ar(n,f!==null?f.cachePool:null),f!==null?a_(n,f):Pu(),F_(n);else return n.lanes=n.childLanes=536870912,rp(e,n,f!==null?f.baseLanes|s:s,s)}else f!==null?(ar(n,f.cachePool),a_(n,f),Qn(),n.memoizedState=null):(e!==null&&ar(n,null),Pu(),Qn());return Ze(e,n,u,s),n.child}function rp(e,n,s,r){var u=Uu();return u=u===null?null:{parent:Le._currentValue,pool:u},n.memoizedState={baseLanes:s,cachePool:u},e!==null&&ar(n,null),Pu(),F_(n),e!==null&&Sa(e,n,r,!0),null}function br(e,n){var s=n.ref;if(s===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(l(284));(e===null||e.ref!==s)&&(n.flags|=4194816)}}function rc(e,n,s,r,u){return xi(n),s=ju(e,n,s,r,void 0,u),r=Gu(),e!==null&&!qe?(Yu(e,n,u),mn(e,n,u)):(he&&r&&Ru(n),n.flags|=1,Ze(e,n,s,u),n.child)}function op(e,n,s,r,u,f){return xi(n),n.updateQueue=null,s=r_(n,r,s,u),l_(e),r=Gu(),e!==null&&!qe?(Yu(e,n,f),mn(e,n,f)):(he&&r&&Ru(n),n.flags|=1,Ze(e,n,s,f),n.child)}function up(e,n,s,r,u){if(xi(n),n.stateNode===null){var f=_s,d=s.contextType;typeof d=="object"&&d!==null&&(f=st(d)),f=new s(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ac,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Lu(n),d=s.contextType,f.context=typeof d=="object"&&d!==null?st(d):_s,f.state=n.memoizedState,d=s.getDerivedStateFromProps,typeof d=="function"&&(sc(n,s,d,r),f.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(d=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),d!==f.state&&ac.enqueueReplaceState(f,f.state,null),Na(n,r,f,u),wa(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var g=n.memoizedProps,v=Li(s,g);f.props=v;var A=f.context,O=s.contextType;d=_s,typeof O=="object"&&O!==null&&(d=st(O));var I=s.getDerivedStateFromProps;O=typeof I=="function"||typeof f.getSnapshotBeforeUpdate=="function",g=n.pendingProps!==g,O||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g||A!==d)&&K_(n,f,r,d),qn=!1;var w=n.memoizedState;f.state=w,Na(n,r,f,u),wa(),A=n.memoizedState,g||w!==A||qn?(typeof I=="function"&&(sc(n,s,I,r),A=n.memoizedState),(v=qn||X_(n,s,v,r,w,A,d))?(O||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=A),f.props=r,f.state=A,f.context=d,r=v):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,zu(e,n),d=n.memoizedProps,O=Li(s,d),f.props=O,I=n.pendingProps,w=f.context,A=s.contextType,v=_s,typeof A=="object"&&A!==null&&(v=st(A)),g=s.getDerivedStateFromProps,(A=typeof g=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(d!==I||w!==v)&&K_(n,f,r,v),qn=!1,w=n.memoizedState,f.state=w,Na(n,r,f,u),wa();var N=n.memoizedState;d!==I||w!==N||qn||e!==null&&e.dependencies!==null&&ir(e.dependencies)?(typeof g=="function"&&(sc(n,s,g,r),N=n.memoizedState),(O=qn||X_(n,s,O,r,w,N,v)||e!==null&&e.dependencies!==null&&ir(e.dependencies))?(A||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,N,v),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,N,v)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||d===e.memoizedProps&&w===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&w===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=N),f.props=r,f.state=N,f.context=v,r=O):(typeof f.componentDidUpdate!="function"||d===e.memoizedProps&&w===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&w===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,br(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,s=r&&typeof s.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Cs(n,e.child,null,u),n.child=Cs(n,null,s,u)):Ze(e,n,s,u),n.memoizedState=f.state,e=n.child):e=mn(e,n,u),e}function cp(e,n,s,r){return ya(),n.flags|=256,Ze(e,n,s,r),n.child}var oc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uc(e){return{baseLanes:e,cachePool:Wd()}}function cc(e,n,s){return e=e!==null?e.childLanes&~s:0,n&&(e|=Bt),e}function fp(e,n,s){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,d;if((d=f)||(d=e!==null&&e.memoizedState===null?!1:(ze.current&2)!==0),d&&(u=!0,n.flags&=-129),d=(n.flags&32)!==0,n.flags&=-33,e===null){if(he){if(u?Yn(n):Qn(),he){var g=Oe,v;if(v=g){e:{for(v=g,g=Wt;v.nodeType!==8;){if(!g){g=null;break e}if(v=jt(v.nextSibling),v===null){g=null;break e}}g=v}g!==null?(n.memoizedState={dehydrated:g,treeContext:Ni!==null?{id:cn,overflow:fn}:null,retryLane:536870912,hydrationErrors:null},v=Rt(18,null,null,0),v.stateNode=g,v.return=n,n.child=v,ot=n,Oe=null,v=!0):v=!1}v||Mi(n)}if(g=n.memoizedState,g!==null&&(g=g.dehydrated,g!==null))return Fc(g)?n.lanes=32:n.lanes=536870912,null;pn(n)}return g=r.children,r=r.fallback,u?(Qn(),u=n.mode,g=Tr({mode:"hidden",children:g},u),r=wi(r,u,s,null),g.return=n,r.return=n,g.sibling=r,n.child=g,u=n.child,u.memoizedState=uc(s),u.childLanes=cc(e,d,s),n.memoizedState=oc,r):(Yn(n),fc(n,g))}if(v=e.memoizedState,v!==null&&(g=v.dehydrated,g!==null)){if(f)n.flags&256?(Yn(n),n.flags&=-257,n=hc(e,n,s)):n.memoizedState!==null?(Qn(),n.child=e.child,n.flags|=128,n=null):(Qn(),u=r.fallback,g=n.mode,r=Tr({mode:"visible",children:r.children},g),u=wi(u,g,s,null),u.flags|=2,r.return=n,u.return=n,r.sibling=u,n.child=r,Cs(n,e.child,null,s),r=n.child,r.memoizedState=uc(s),r.childLanes=cc(e,d,s),n.memoizedState=oc,n=u);else if(Yn(n),Fc(g)){if(d=g.nextSibling&&g.nextSibling.dataset,d)var A=d.dgst;d=A,r=Error(l(419)),r.stack="",r.digest=d,Ea({value:r,source:null,stack:null}),n=hc(e,n,s)}else if(qe||Sa(e,n,s,!1),d=(s&e.childLanes)!==0,qe||d){if(d=be,d!==null&&(r=s&-s,r=(r&42)!==0?1:Xo(r),r=(r&(d.suspendedLanes|s))!==0?0:r,r!==0&&r!==v.retryLane))throw v.retryLane=r,ds(e,r),Mt(d,e,r),np;g.data==="$?"||Dc(),n=hc(e,n,s)}else g.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=v.treeContext,Oe=jt(g.nextSibling),ot=n,he=!0,Di=null,Wt=!1,e!==null&&(Lt[zt++]=cn,Lt[zt++]=fn,Lt[zt++]=Ni,cn=e.id,fn=e.overflow,Ni=n),n=fc(n,r.children),n.flags|=4096);return n}return u?(Qn(),u=r.fallback,g=n.mode,v=e.child,A=v.sibling,r=un(v,{mode:"hidden",children:r.children}),r.subtreeFlags=v.subtreeFlags&65011712,A!==null?u=un(A,u):(u=wi(u,g,s,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,r=u,u=n.child,g=e.child.memoizedState,g===null?g=uc(s):(v=g.cachePool,v!==null?(A=Le._currentValue,v=v.parent!==A?{parent:A,pool:A}:v):v=Wd(),g={baseLanes:g.baseLanes|s,cachePool:v}),u.memoizedState=g,u.childLanes=cc(e,d,s),n.memoizedState=oc,r):(Yn(n),s=e.child,e=s.sibling,s=un(s,{mode:"visible",children:r.children}),s.return=n,s.sibling=null,e!==null&&(d=n.deletions,d===null?(n.deletions=[e],n.flags|=16):d.push(e)),n.child=s,n.memoizedState=null,s)}function fc(e,n){return n=Tr({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Tr(e,n){return e=Rt(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function hc(e,n,s){return Cs(n,e.child,null,s),e=fc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function hp(e,n,s){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Du(e.return,n,s)}function dc(e,n,s,r,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:s,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=r,f.tail=s,f.tailMode=u)}function dp(e,n,s){var r=n.pendingProps,u=r.revealOrder,f=r.tail;if(Ze(e,n,r.children,s),r=ze.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hp(e,s,n);else if(e.tag===19)hp(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(z(ze,r),u){case"forwards":for(s=n.child,u=null;s!==null;)e=s.alternate,e!==null&&yr(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=n.child,n.child=null):(u=s.sibling,s.sibling=null),dc(n,!1,u,s,f);break;case"backwards":for(s=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&yr(e)===null){n.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}dc(n,!0,s,null,f);break;case"together":dc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function mn(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),Wn|=n.lanes,(s&n.childLanes)===0)if(e!==null){if(Sa(e,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(l(153));if(n.child!==null){for(e=n.child,s=un(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=un(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function _c(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ir(e)))}function kE(e,n,s){switch(n.tag){case 3:Re(n,n.stateNode.containerInfo),Pn(n,Le,e.memoizedState.cache),ya();break;case 27:case 5:jo(n);break;case 4:Re(n,n.stateNode.containerInfo);break;case 10:Pn(n,n.type,n.memoizedProps.value);break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Yn(n),n.flags|=128,null):(s&n.child.childLanes)!==0?fp(e,n,s):(Yn(n),e=mn(e,n,s),e!==null?e.sibling:null);Yn(n);break;case 19:var u=(e.flags&128)!==0;if(r=(s&n.childLanes)!==0,r||(Sa(e,n,s,!1),r=(s&n.childLanes)!==0),u){if(r)return dp(e,n,s);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),z(ze,ze.current),r)break;return null;case 22:case 23:return n.lanes=0,lp(e,n,s);case 24:Pn(n,Le,e.memoizedState.cache)}return mn(e,n,s)}function _p(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps)qe=!0;else{if(!_c(e,s)&&(n.flags&128)===0)return qe=!1,kE(e,n,s);qe=(e.flags&131072)!==0}else qe=!1,he&&(n.flags&1048576)!==0&&Gd(n,nr,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var r=n.elementType,u=r._init;if(r=u(r._payload),n.type=r,typeof r=="function")Tu(r)?(e=Li(r,e),n.tag=1,n=up(null,n,r,e,s)):(n.tag=0,n=rc(null,n,r,e,s));else{if(r!=null){if(u=r.$$typeof,u===$e){n.tag=11,n=ip(null,n,r,e,s);break e}else if(u===et){n.tag=14,n=sp(null,n,r,e,s);break e}}throw n=Si(r)||r,Error(l(306,n,""))}}return n;case 0:return rc(e,n,n.type,n.pendingProps,s);case 1:return r=n.type,u=Li(r,n.pendingProps),up(e,n,r,u,s);case 3:e:{if(Re(n,n.stateNode.containerInfo),e===null)throw Error(l(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,zu(e,n),Na(n,r,null,s);var d=n.memoizedState;if(r=d.cache,Pn(n,Le,r),r!==f.cache&&Mu(n,[Le],s,!0),wa(),r=d.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:d.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=cp(e,n,r,s);break e}else if(r!==u){u=Ut(Error(l(424)),n),Ea(u),n=cp(e,n,r,s);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Oe=jt(e.firstChild),ot=n,he=!0,Di=null,Wt=!0,s=Q_(n,null,r,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ya(),r===u){n=mn(e,n,s);break e}Ze(e,n,r,s)}n=n.child}return n;case 26:return br(e,n),e===null?(s=vm(n.type,null,n.pendingProps,null))?n.memoizedState=s:he||(s=n.type,e=n.pendingProps,r=zr(K.current).createElement(s),r[it]=n,r[dt]=e,Je(r,s,e),Pe(r),n.stateNode=r):n.memoizedState=vm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return jo(n),e===null&&he&&(r=n.stateNode=pm(n.type,n.pendingProps,K.current),ot=n,Wt=!0,u=Oe,ti(n.type)?(Xc=u,Oe=jt(r.firstChild)):Oe=u),Ze(e,n,n.pendingProps.children,s),br(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&he&&((u=r=Oe)&&(r=uS(r,n.type,n.pendingProps,Wt),r!==null?(n.stateNode=r,ot=n,Oe=jt(r.firstChild),Wt=!1,u=!0):u=!1),u||Mi(n)),jo(n),u=n.type,f=n.pendingProps,d=e!==null?e.memoizedProps:null,r=f.children,Gc(u,f)?r=null:d!==null&&Gc(u,d)&&(n.flags|=32),n.memoizedState!==null&&(u=ju(e,n,wE,null,null,s),Za._currentValue=u),br(e,n),Ze(e,n,r,s),n.child;case 6:return e===null&&he&&((e=s=Oe)&&(s=cS(s,n.pendingProps,Wt),s!==null?(n.stateNode=s,ot=n,Oe=null,e=!0):e=!1),e||Mi(n)),null;case 13:return fp(e,n,s);case 4:return Re(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Cs(n,null,r,s):Ze(e,n,r,s),n.child;case 11:return ip(e,n,n.type,n.pendingProps,s);case 7:return Ze(e,n,n.pendingProps,s),n.child;case 8:return Ze(e,n,n.pendingProps.children,s),n.child;case 12:return Ze(e,n,n.pendingProps.children,s),n.child;case 10:return r=n.pendingProps,Pn(n,n.type,r.value),Ze(e,n,r.children,s),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,xi(n),u=st(u),r=r(u),n.flags|=1,Ze(e,n,r,s),n.child;case 14:return sp(e,n,n.type,n.pendingProps,s);case 15:return ap(e,n,n.type,n.pendingProps,s);case 19:return dp(e,n,s);case 31:return r=n.pendingProps,s=n.mode,r={mode:r.mode,children:r.children},e===null?(s=Tr(r,s),s.ref=n.ref,n.child=s,s.return=n,n=s):(s=un(e.child,r),s.ref=n.ref,n.child=s,s.return=n,n=s),n;case 22:return lp(e,n,s);case 24:return xi(n),r=st(Le),e===null?(u=Uu(),u===null&&(u=be,f=Iu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=s),u=f),n.memoizedState={parent:r,cache:u},Lu(n),Pn(n,Le,u)):((e.lanes&s)!==0&&(zu(e,n),Na(n,null,null,s),wa()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Pn(n,Le,r)):(r=f.cache,Pn(n,Le,r),r!==u.cache&&Mu(n,[Le],s,!0))),Ze(e,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(l(156,n.tag))}function gn(e){e.flags|=4}function pp(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Tm(n)){if(n=Ht.current,n!==null&&((oe&4194048)===oe?Jt!==null:(oe&62914560)!==oe&&(oe&536870912)===0||n!==Jt))throw Aa=ku,Jd;e.flags|=8192}}function Cr(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Fh():536870912,e.lanes|=n,Ns|=n)}function ka(e,n){if(!he)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var r=null;s!==null;)s.alternate!==null&&(r=s),s=s.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,r=0;if(n)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=s,n}function LE(e,n,s){var r=n.pendingProps;switch(wu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(n),null;case 1:return Ne(n),null;case 3:return s=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),dn(Le),Ln(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(va(n)?gn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Fd())),Ne(n),null;case 26:return s=n.memoizedState,e===null?(gn(n),s!==null?(Ne(n),pp(n,s)):(Ne(n),n.flags&=-16777217)):s?s!==e.memoizedState?(gn(n),Ne(n),pp(n,s)):(Ne(n),n.flags&=-16777217):(e.memoizedProps!==r&&gn(n),Ne(n),n.flags&=-16777217),null;case 27:kl(n),s=K.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==r&&gn(n);else{if(!r){if(n.stateNode===null)throw Error(l(166));return Ne(n),null}e=V.current,va(n)?Yd(n):(e=pm(u,r,s),n.stateNode=e,gn(n))}return Ne(n),null;case 5:if(kl(n),s=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&gn(n);else{if(!r){if(n.stateNode===null)throw Error(l(166));return Ne(n),null}if(e=V.current,va(n))Yd(n);else{switch(u=zr(K.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?u.createElement("select",{is:r.is}):u.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?u.createElement(s,{is:r.is}):u.createElement(s)}}e[it]=n,e[dt]=r;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;e:switch(Je(e,s,r),s){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&gn(n)}}return Ne(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&gn(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(l(166));if(e=K.current,va(n)){if(e=n.stateNode,s=n.memoizedProps,r=null,u=ot,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[it]=n,e=!!(e.nodeValue===s||r!==null&&r.suppressHydrationWarning===!0||om(e.nodeValue,s)),e||Mi(n)}else e=zr(e).createTextNode(r),e[it]=n,n.stateNode=e}return Ne(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=va(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(l(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(l(317));u[it]=n}else ya(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ne(n),u=!1}else u=Fd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(pn(n),n):(pn(n),null)}if(pn(n),(n.flags&128)!==0)return n.lanes=s,n;if(s=r!==null,e=e!==null&&e.memoizedState!==null,s){r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool);var f=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)}return s!==e&&s&&(n.child.flags|=8192),Cr(n,n.updateQueue),Ne(n),null;case 4:return Ln(),e===null&&Bc(n.stateNode.containerInfo),Ne(n),null;case 10:return dn(n.type),Ne(n),null;case 19:if(B(ze),u=n.memoizedState,u===null)return Ne(n),null;if(r=(n.flags&128)!==0,f=u.rendering,f===null)if(r)ka(u,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=yr(e),f!==null){for(n.flags|=128,ka(u,!1),e=f.updateQueue,n.updateQueue=e,Cr(n,e),n.subtreeFlags=0,e=s,s=n.child;s!==null;)jd(s,e),s=s.sibling;return z(ze,ze.current&1|2),n.child}e=e.sibling}u.tail!==null&&Zt()>wr&&(n.flags|=128,r=!0,ka(u,!1),n.lanes=4194304)}else{if(!r)if(e=yr(f),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Cr(n,e),ka(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!he)return Ne(n),null}else 2*Zt()-u.renderingStartTime>wr&&s!==536870912&&(n.flags|=128,r=!0,ka(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Zt(),n.sibling=null,e=ze.current,z(ze,r?e&1|2:e&1),n):(Ne(n),null);case 22:case 23:return pn(n),qu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(s&536870912)!==0&&(n.flags&128)===0&&(Ne(n),n.subtreeFlags&6&&(n.flags|=8192)):Ne(n),s=n.updateQueue,s!==null&&Cr(n,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==s&&(n.flags|=2048),e!==null&&B(Ui),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),dn(Le),Ne(n),null;case 25:return null;case 30:return null}throw Error(l(156,n.tag))}function zE(e,n){switch(wu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return dn(Le),Ln(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return kl(n),null;case 13:if(pn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(l(340));ya()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(ze),null;case 4:return Ln(),null;case 10:return dn(n.type),null;case 22:case 23:return pn(n),qu(),e!==null&&B(Ui),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return dn(Le),null;case 25:return null;default:return null}}function mp(e,n){switch(wu(n),n.tag){case 3:dn(Le),Ln();break;case 26:case 27:case 5:kl(n);break;case 4:Ln();break;case 13:pn(n);break;case 19:B(ze);break;case 10:dn(n.type);break;case 22:case 23:pn(n),qu(),e!==null&&B(Ui);break;case 24:dn(Le)}}function La(e,n){try{var s=n.updateQueue,r=s!==null?s.lastEffect:null;if(r!==null){var u=r.next;s=u;do{if((s.tag&e)===e){r=void 0;var f=s.create,d=s.inst;r=f(),d.destroy=r}s=s.next}while(s!==u)}}catch(g){Ee(n,n.return,g)}}function Fn(e,n,s){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var d=r.inst,g=d.destroy;if(g!==void 0){d.destroy=void 0,u=n;var v=s,A=g;try{A()}catch(O){Ee(u,v,O)}}}r=r.next}while(r!==f)}}catch(O){Ee(n,n.return,O)}}function gp(e){var n=e.updateQueue;if(n!==null){var s=e.stateNode;try{s_(n,s)}catch(r){Ee(e,e.return,r)}}}function vp(e,n,s){s.props=Li(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(r){Ee(e,n,r)}}function za(e,n){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof s=="function"?e.refCleanup=s(r):s.current=r}}catch(u){Ee(e,n,u)}}function $t(e,n){var s=e.ref,r=e.refCleanup;if(s!==null)if(typeof r=="function")try{r()}catch(u){Ee(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Ee(e,n,u)}else s.current=null}function yp(e){var n=e.type,s=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&r.focus();break e;case"img":s.src?r.src=s.src:s.srcSet&&(r.srcset=s.srcSet)}}catch(u){Ee(e,e.return,u)}}function pc(e,n,s){try{var r=e.stateNode;sS(r,e.type,s,n),r[dt]=n}catch(u){Ee(e,e.return,u)}}function Ep(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ti(e.type)||e.tag===4}function mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ep(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ti(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gc(e,n,s){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(e),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=Lr));else if(r!==4&&(r===27&&ti(e.type)&&(s=e.stateNode,n=null),e=e.child,e!==null))for(gc(e,n,s),e=e.sibling;e!==null;)gc(e,n,s),e=e.sibling}function Ar(e,n,s){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(r!==4&&(r===27&&ti(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Ar(e,n,s),e=e.sibling;e!==null;)Ar(e,n,s),e=e.sibling}function Sp(e){var n=e.stateNode,s=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Je(n,r,s),n[it]=e,n[dt]=s}catch(f){Ee(e,e.return,f)}}var vn=!1,xe=!1,vc=!1,bp=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function HE(e,n){if(e=e.containerInfo,Vc=jr,e=xd(e),mu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var r=s.getSelection&&s.getSelection();if(r&&r.rangeCount!==0){s=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break e}var d=0,g=-1,v=-1,A=0,O=0,I=e,w=null;t:for(;;){for(var N;I!==s||u!==0&&I.nodeType!==3||(g=d+u),I!==f||r!==0&&I.nodeType!==3||(v=d+r),I.nodeType===3&&(d+=I.nodeValue.length),(N=I.firstChild)!==null;)w=I,I=N;for(;;){if(I===e)break t;if(w===s&&++A===u&&(g=d),w===f&&++O===r&&(v=d),(N=I.nextSibling)!==null)break;I=w,w=I.parentNode}I=N}s=g===-1||v===-1?null:{start:g,end:v}}else s=null}s=s||{start:0,end:0}}else s=null;for(jc={focusedElem:e,selectionRange:s},jr=!1,Ve=n;Ve!==null;)if(n=Ve,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Ve=e;else for(;Ve!==null;){switch(n=Ve,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,s=n,u=f.memoizedProps,f=f.memoizedState,r=s.stateNode;try{var F=Li(s.type,u,s.elementType===s.type);e=r.getSnapshotBeforeUpdate(F,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(j){Ee(s,s.return,j)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,s=e.nodeType,s===9)Qc(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Qc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=n.sibling,e!==null){e.return=n.return,Ve=e;break}Ve=n.return}}function Tp(e,n,s){var r=s.flags;switch(s.tag){case 0:case 11:case 15:Xn(e,s),r&4&&La(5,s);break;case 1:if(Xn(e,s),r&4)if(e=s.stateNode,n===null)try{e.componentDidMount()}catch(d){Ee(s,s.return,d)}else{var u=Li(s.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Ee(s,s.return,d)}}r&64&&gp(s),r&512&&za(s,s.return);break;case 3:if(Xn(e,s),r&64&&(e=s.updateQueue,e!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{s_(e,n)}catch(d){Ee(s,s.return,d)}}break;case 27:n===null&&r&4&&Sp(s);case 26:case 5:Xn(e,s),n===null&&r&4&&yp(s),r&512&&za(s,s.return);break;case 12:Xn(e,s);break;case 13:Xn(e,s),r&4&&Rp(e,s),r&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=FE.bind(null,s),fS(e,s))));break;case 22:if(r=s.memoizedState!==null||vn,!r){n=n!==null&&n.memoizedState!==null||xe,u=vn;var f=xe;vn=r,(xe=n)&&!f?Kn(e,s,(s.subtreeFlags&8772)!==0):Xn(e,s),vn=u,xe=f}break;case 30:break;default:Xn(e,s)}}function Cp(e){var n=e.alternate;n!==null&&(e.alternate=null,Cp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Wo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,mt=!1;function yn(e,n,s){for(s=s.child;s!==null;)Ap(e,n,s),s=s.sibling}function Ap(e,n,s){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(sa,s)}catch{}switch(s.tag){case 26:xe||$t(s,n),yn(e,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:xe||$t(s,n);var r=we,u=mt;ti(s.type)&&(we=s.stateNode,mt=!1),yn(e,n,s),Qa(s.stateNode),we=r,mt=u;break;case 5:xe||$t(s,n);case 6:if(r=we,u=mt,we=null,yn(e,n,s),we=r,mt=u,we!==null)if(mt)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(s.stateNode)}catch(f){Ee(s,n,f)}else try{we.removeChild(s.stateNode)}catch(f){Ee(s,n,f)}break;case 18:we!==null&&(mt?(e=we,dm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),el(e)):dm(we,s.stateNode));break;case 4:r=we,u=mt,we=s.stateNode.containerInfo,mt=!0,yn(e,n,s),we=r,mt=u;break;case 0:case 11:case 14:case 15:xe||Fn(2,s,n),xe||Fn(4,s,n),yn(e,n,s);break;case 1:xe||($t(s,n),r=s.stateNode,typeof r.componentWillUnmount=="function"&&vp(s,n,r)),yn(e,n,s);break;case 21:yn(e,n,s);break;case 22:xe=(r=xe)||s.memoizedState!==null,yn(e,n,s),xe=r;break;default:yn(e,n,s)}}function Rp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{el(e)}catch(s){Ee(n,n.return,s)}}function BE(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new bp),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new bp),n;default:throw Error(l(435,e.tag))}}function yc(e,n){var s=BE(e);n.forEach(function(r){var u=XE.bind(null,e,r);s.has(r)||(s.add(r),r.then(u,u))})}function wt(e,n){var s=n.deletions;if(s!==null)for(var r=0;r<s.length;r++){var u=s[r],f=e,d=n,g=d;e:for(;g!==null;){switch(g.tag){case 27:if(ti(g.type)){we=g.stateNode,mt=!1;break e}break;case 5:we=g.stateNode,mt=!1;break e;case 3:case 4:we=g.stateNode.containerInfo,mt=!0;break e}g=g.return}if(we===null)throw Error(l(160));Ap(f,d,u),we=null,mt=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)wp(n,e),n=n.sibling}var Vt=null;function wp(e,n){var s=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:wt(n,e),Nt(e),r&4&&(Fn(3,e,e.return),La(3,e),Fn(5,e,e.return));break;case 1:wt(n,e),Nt(e),r&512&&(xe||s===null||$t(s,s.return)),r&64&&vn&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?r:s.concat(r))));break;case 26:var u=Vt;if(wt(n,e),Nt(e),r&512&&(xe||s===null||$t(s,s.return)),r&4){var f=s!==null?s.memoizedState:null;if(r=e.memoizedState,s===null)if(r===null)if(e.stateNode===null){e:{r=e.type,s=e.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ra]||f[it]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Je(f,r,s),f[it]=e,Pe(f),r=f;break e;case"link":var d=Sm("link","href",u).get(r+(s.href||""));if(d){for(var g=0;g<d.length;g++)if(f=d[g],f.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){d.splice(g,1);break t}}f=u.createElement(r),Je(f,r,s),u.head.appendChild(f);break;case"meta":if(d=Sm("meta","content",u).get(r+(s.content||""))){for(g=0;g<d.length;g++)if(f=d[g],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){d.splice(g,1);break t}}f=u.createElement(r),Je(f,r,s),u.head.appendChild(f);break;default:throw Error(l(468,r))}f[it]=e,Pe(f),r=f}e.stateNode=r}else bm(u,e.type,e.stateNode);else e.stateNode=Em(u,r,e.memoizedProps);else f!==r?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,r===null?bm(u,e.type,e.stateNode):Em(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&pc(e,e.memoizedProps,s.memoizedProps)}break;case 27:wt(n,e),Nt(e),r&512&&(xe||s===null||$t(s,s.return)),s!==null&&r&4&&pc(e,e.memoizedProps,s.memoizedProps);break;case 5:if(wt(n,e),Nt(e),r&512&&(xe||s===null||$t(s,s.return)),e.flags&32){u=e.stateNode;try{ls(u,"")}catch(N){Ee(e,e.return,N)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,pc(e,u,s!==null?s.memoizedProps:u)),r&1024&&(vc=!0);break;case 6:if(wt(n,e),Nt(e),r&4){if(e.stateNode===null)throw Error(l(162));r=e.memoizedProps,s=e.stateNode;try{s.nodeValue=r}catch(N){Ee(e,e.return,N)}}break;case 3:if(Pr=null,u=Vt,Vt=Hr(n.containerInfo),wt(n,e),Vt=u,Nt(e),r&4&&s!==null&&s.memoizedState.isDehydrated)try{el(n.containerInfo)}catch(N){Ee(e,e.return,N)}vc&&(vc=!1,Np(e));break;case 4:r=Vt,Vt=Hr(e.stateNode.containerInfo),wt(n,e),Nt(e),Vt=r;break;case 12:wt(n,e),Nt(e);break;case 13:wt(n,e),Nt(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ac=Zt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,yc(e,r)));break;case 22:u=e.memoizedState!==null;var v=s!==null&&s.memoizedState!==null,A=vn,O=xe;if(vn=A||u,xe=O||v,wt(n,e),xe=O,vn=A,Nt(e),r&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(s===null||v||vn||xe||zi(e)),s=null,n=e;;){if(n.tag===5||n.tag===26){if(s===null){v=s=n;try{if(f=v.stateNode,u)d=f.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{g=v.stateNode;var I=v.memoizedProps.style,w=I!=null&&I.hasOwnProperty("display")?I.display:null;g.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(N){Ee(v,v.return,N)}}}else if(n.tag===6){if(s===null){v=n;try{v.stateNode.nodeValue=u?"":v.memoizedProps}catch(N){Ee(v,v.return,N)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(s=r.retryQueue,s!==null&&(r.retryQueue=null,yc(e,s))));break;case 19:wt(n,e),Nt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,yc(e,r)));break;case 30:break;case 21:break;default:wt(n,e),Nt(e)}}function Nt(e){var n=e.flags;if(n&2){try{for(var s,r=e.return;r!==null;){if(Ep(r)){s=r;break}r=r.return}if(s==null)throw Error(l(160));switch(s.tag){case 27:var u=s.stateNode,f=mc(e);Ar(e,f,u);break;case 5:var d=s.stateNode;s.flags&32&&(ls(d,""),s.flags&=-33);var g=mc(e);Ar(e,g,d);break;case 3:case 4:var v=s.stateNode.containerInfo,A=mc(e);gc(e,A,v);break;default:throw Error(l(161))}}catch(O){Ee(e,e.return,O)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Np(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Np(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Xn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Tp(e,n.alternate,n),n=n.sibling}function zi(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Fn(4,n,n.return),zi(n);break;case 1:$t(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&vp(n,n.return,s),zi(n);break;case 27:Qa(n.stateNode);case 26:case 5:$t(n,n.return),zi(n);break;case 22:n.memoizedState===null&&zi(n);break;case 30:zi(n);break;default:zi(n)}e=e.sibling}}function Kn(e,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,d=f.flags;switch(f.tag){case 0:case 11:case 15:Kn(u,f,s),La(4,f);break;case 1:if(Kn(u,f,s),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(A){Ee(r,r.return,A)}if(r=f,u=r.updateQueue,u!==null){var g=r.stateNode;try{var v=u.shared.hiddenCallbacks;if(v!==null)for(u.shared.hiddenCallbacks=null,u=0;u<v.length;u++)i_(v[u],g)}catch(A){Ee(r,r.return,A)}}s&&d&64&&gp(f),za(f,f.return);break;case 27:Sp(f);case 26:case 5:Kn(u,f,s),s&&r===null&&d&4&&yp(f),za(f,f.return);break;case 12:Kn(u,f,s);break;case 13:Kn(u,f,s),s&&d&4&&Rp(u,f);break;case 22:f.memoizedState===null&&Kn(u,f,s),za(f,f.return);break;case 30:break;default:Kn(u,f,s)}n=n.sibling}}function Ec(e,n){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&ba(s))}function Sc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ba(e))}function en(e,n,s,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Op(e,n,s,r),n=n.sibling}function Op(e,n,s,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:en(e,n,s,r),u&2048&&La(9,n);break;case 1:en(e,n,s,r);break;case 3:en(e,n,s,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ba(e)));break;case 12:if(u&2048){en(e,n,s,r),e=n.stateNode;try{var f=n.memoizedProps,d=f.id,g=f.onPostCommit;typeof g=="function"&&g(d,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Ee(n,n.return,v)}}else en(e,n,s,r);break;case 13:en(e,n,s,r);break;case 23:break;case 22:f=n.stateNode,d=n.alternate,n.memoizedState!==null?f._visibility&2?en(e,n,s,r):Ha(e,n):f._visibility&2?en(e,n,s,r):(f._visibility|=2,As(e,n,s,r,(n.subtreeFlags&10256)!==0)),u&2048&&Ec(d,n);break;case 24:en(e,n,s,r),u&2048&&Sc(n.alternate,n);break;default:en(e,n,s,r)}}function As(e,n,s,r,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,d=n,g=s,v=r,A=d.flags;switch(d.tag){case 0:case 11:case 15:As(f,d,g,v,u),La(8,d);break;case 23:break;case 22:var O=d.stateNode;d.memoizedState!==null?O._visibility&2?As(f,d,g,v,u):Ha(f,d):(O._visibility|=2,As(f,d,g,v,u)),u&&A&2048&&Ec(d.alternate,d);break;case 24:As(f,d,g,v,u),u&&A&2048&&Sc(d.alternate,d);break;default:As(f,d,g,v,u)}n=n.sibling}}function Ha(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=e,r=n,u=r.flags;switch(r.tag){case 22:Ha(s,r),u&2048&&Ec(r.alternate,r);break;case 24:Ha(s,r),u&2048&&Sc(r.alternate,r);break;default:Ha(s,r)}n=n.sibling}}var Ba=8192;function Rs(e){if(e.subtreeFlags&Ba)for(e=e.child;e!==null;)Dp(e),e=e.sibling}function Dp(e){switch(e.tag){case 26:Rs(e),e.flags&Ba&&e.memoizedState!==null&&CS(Vt,e.memoizedState,e.memoizedProps);break;case 5:Rs(e);break;case 3:case 4:var n=Vt;Vt=Hr(e.stateNode.containerInfo),Rs(e),Vt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ba,Ba=16777216,Rs(e),Ba=n):Rs(e));break;default:Rs(e)}}function Mp(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Pa(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var r=n[s];Ve=r,xp(r,e)}Mp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ip(e),e=e.sibling}function Ip(e){switch(e.tag){case 0:case 11:case 15:Pa(e),e.flags&2048&&Fn(9,e,e.return);break;case 3:Pa(e);break;case 12:Pa(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Rr(e)):Pa(e);break;default:Pa(e)}}function Rr(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var r=n[s];Ve=r,xp(r,e)}Mp(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Fn(8,n,n.return),Rr(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Rr(n));break;default:Rr(n)}e=e.sibling}}function xp(e,n){for(;Ve!==null;){var s=Ve;switch(s.tag){case 0:case 11:case 15:Fn(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var r=s.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ba(s.memoizedState.cache)}if(r=s.child,r!==null)r.return=s,Ve=r;else e:for(s=e;Ve!==null;){r=Ve;var u=r.sibling,f=r.return;if(Cp(r),r===s){Ve=null;break e}if(u!==null){u.return=f,Ve=u;break e}Ve=f}}}var PE={getCacheForType:function(e){var n=st(Le),s=n.data.get(e);return s===void 0&&(s=e(),n.data.set(e,s)),s}},qE=typeof WeakMap=="function"?WeakMap:Map,de=0,be=null,ie=null,oe=0,_e=0,Ot=null,Zn=!1,ws=!1,bc=!1,En=0,De=0,Wn=0,Hi=0,Tc=0,Bt=0,Ns=0,qa=null,gt=null,Cc=!1,Ac=0,wr=1/0,Nr=null,Jn=null,We=0,$n=null,Os=null,Ds=0,Rc=0,wc=null,Up=null,Va=0,Nc=null;function Dt(){if((de&2)!==0&&oe!==0)return oe&-oe;if(D.T!==null){var e=gs;return e!==0?e:kc()}return Zh()}function kp(){Bt===0&&(Bt=(oe&536870912)===0||he?Qh():536870912);var e=Ht.current;return e!==null&&(e.flags|=32),Bt}function Mt(e,n,s){(e===be&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(Ms(e,0),ei(e,oe,Bt,!1)),la(e,s),((de&2)===0||e!==be)&&(e===be&&((de&2)===0&&(Hi|=s),De===4&&ei(e,oe,Bt,!1)),tn(e))}function Lp(e,n,s){if((de&6)!==0)throw Error(l(327));var r=!s&&(n&124)===0&&(n&e.expiredLanes)===0||aa(e,n),u=r?GE(e,n):Mc(e,n,!0),f=r;do{if(u===0){ws&&!r&&ei(e,n,0,!1);break}else{if(s=e.current.alternate,f&&!VE(s)){u=Mc(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){n=d;e:{var g=e;u=qa;var v=g.current.memoizedState.isDehydrated;if(v&&(Ms(g,d).flags|=256),d=Mc(g,d,!1),d!==2){if(bc&&!v){g.errorRecoveryDisabledLanes|=f,Hi|=f,u=4;break e}f=gt,gt=u,f!==null&&(gt===null?gt=f:gt.push.apply(gt,f))}u=d}if(f=!1,u!==2)continue}}if(u===1){Ms(e,0),ei(e,n,0,!0);break}e:{switch(r=e,f=u,f){case 0:case 1:throw Error(l(345));case 4:if((n&4194048)!==n)break;case 6:ei(r,n,Bt,!Zn);break e;case 2:gt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((n&62914560)===n&&(u=Ac+300-Zt(),10<u)){if(ei(r,n,Bt,!Zn),Bl(r,0,!0)!==0)break e;r.timeoutHandle=fm(zp.bind(null,r,s,gt,Nr,Cc,n,Bt,Hi,Ns,Zn,f,2,-0,0),u);break e}zp(r,s,gt,Nr,Cc,n,Bt,Hi,Ns,Zn,f,0,-0,0)}}break}while(!0);tn(e)}function zp(e,n,s,r,u,f,d,g,v,A,O,I,w,N){if(e.timeoutHandle=-1,I=n.subtreeFlags,(I&8192||(I&16785408)===16785408)&&(Ka={stylesheets:null,count:0,unsuspend:TS},Dp(n),I=AS(),I!==null)){e.cancelPendingCommit=I(Gp.bind(null,e,n,f,s,r,u,d,g,v,O,1,w,N)),ei(e,f,d,!A);return}Gp(e,n,f,s,r,u,d,g,v)}function VE(e){for(var n=e;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var r=0;r<s.length;r++){var u=s[r],f=u.getSnapshot;u=u.value;try{if(!At(f(),u))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ei(e,n,s,r){n&=~Tc,n&=~Hi,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Ct(u),d=1<<f;r[f]=-1,u&=~d}s!==0&&Xh(e,s,n)}function Or(){return(de&6)===0?(ja(0),!1):!0}function Oc(){if(ie!==null){if(_e===0)var e=ie.return;else e=ie,hn=Ii=null,Qu(e),Ts=null,xa=0,e=ie;for(;e!==null;)mp(e.alternate,e),e=e.return;ie=null}}function Ms(e,n){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,lS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Oc(),be=e,ie=s=un(e.current,null),oe=n,_e=0,Ot=null,Zn=!1,ws=aa(e,n),bc=!1,Ns=Bt=Tc=Hi=Wn=De=0,gt=qa=null,Cc=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Ct(r),f=1<<u;n|=e[u],r&=~f}return En=n,Wl(),s}function Hp(e,n){$=null,D.H=mr,n===Ca||n===lr?(n=t_(),_e=3):n===Jd?(n=t_(),_e=4):_e=n===np?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ot=n,ie===null&&(De=1,Sr(e,Ut(n,e.current)))}function Bp(){var e=D.H;return D.H=mr,e===null?mr:e}function Pp(){var e=D.A;return D.A=PE,e}function Dc(){De=4,Zn||(oe&4194048)!==oe&&Ht.current!==null||(ws=!0),(Wn&134217727)===0&&(Hi&134217727)===0||be===null||ei(be,oe,Bt,!1)}function Mc(e,n,s){var r=de;de|=2;var u=Bp(),f=Pp();(be!==e||oe!==n)&&(Nr=null,Ms(e,n)),n=!1;var d=De;e:do try{if(_e!==0&&ie!==null){var g=ie,v=Ot;switch(_e){case 8:Oc(),d=6;break e;case 3:case 2:case 9:case 6:Ht.current===null&&(n=!0);var A=_e;if(_e=0,Ot=null,Is(e,g,v,A),s&&ws){d=0;break e}break;default:A=_e,_e=0,Ot=null,Is(e,g,v,A)}}jE(),d=De;break}catch(O){Hp(e,O)}while(!0);return n&&e.shellSuspendCounter++,hn=Ii=null,de=r,D.H=u,D.A=f,ie===null&&(be=null,oe=0,Wl()),d}function jE(){for(;ie!==null;)qp(ie)}function GE(e,n){var s=de;de|=2;var r=Bp(),u=Pp();be!==e||oe!==n?(Nr=null,wr=Zt()+500,Ms(e,n)):ws=aa(e,n);e:do try{if(_e!==0&&ie!==null){n=ie;var f=Ot;t:switch(_e){case 1:_e=0,Ot=null,Is(e,n,f,1);break;case 2:case 9:if($d(f)){_e=0,Ot=null,Vp(n);break}n=function(){_e!==2&&_e!==9||be!==e||(_e=7),tn(e)},f.then(n,n);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:$d(f)?(_e=0,Ot=null,Vp(n)):(_e=0,Ot=null,Is(e,n,f,7));break;case 5:var d=null;switch(ie.tag){case 26:d=ie.memoizedState;case 5:case 27:var g=ie;if(!d||Tm(d)){_e=0,Ot=null;var v=g.sibling;if(v!==null)ie=v;else{var A=g.return;A!==null?(ie=A,Dr(A)):ie=null}break t}}_e=0,Ot=null,Is(e,n,f,5);break;case 6:_e=0,Ot=null,Is(e,n,f,6);break;case 8:Oc(),De=6;break e;default:throw Error(l(462))}}YE();break}catch(O){Hp(e,O)}while(!0);return hn=Ii=null,D.H=r,D.A=u,de=s,ie!==null?0:(be=null,oe=0,Wl(),De)}function YE(){for(;ie!==null&&!d0();)qp(ie)}function qp(e){var n=_p(e.alternate,e,En);e.memoizedProps=e.pendingProps,n===null?Dr(e):ie=n}function Vp(e){var n=e,s=n.alternate;switch(n.tag){case 15:case 0:n=op(s,n,n.pendingProps,n.type,void 0,oe);break;case 11:n=op(s,n,n.pendingProps,n.type.render,n.ref,oe);break;case 5:Qu(n);default:mp(s,n),n=ie=jd(n,En),n=_p(s,n,En)}e.memoizedProps=e.pendingProps,n===null?Dr(e):ie=n}function Is(e,n,s,r){hn=Ii=null,Qu(n),Ts=null,xa=0;var u=n.return;try{if(UE(e,u,n,s,oe)){De=1,Sr(e,Ut(s,e.current)),ie=null;return}}catch(f){if(u!==null)throw ie=u,f;De=1,Sr(e,Ut(s,e.current)),ie=null;return}n.flags&32768?(he||r===1?e=!0:ws||(oe&536870912)!==0?e=!1:(Zn=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ht.current,r!==null&&r.tag===13&&(r.flags|=16384))),jp(n,e)):Dr(n)}function Dr(e){var n=e;do{if((n.flags&32768)!==0){jp(n,Zn);return}e=n.return;var s=LE(n.alternate,n,En);if(s!==null){ie=s;return}if(n=n.sibling,n!==null){ie=n;return}ie=n=e}while(n!==null);De===0&&(De=5)}function jp(e,n){do{var s=zE(e.alternate,e);if(s!==null){s.flags&=32767,ie=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(e=e.sibling,e!==null)){ie=e;return}ie=e=s}while(e!==null);De=6,ie=null}function Gp(e,n,s,r,u,f,d,g,v){e.cancelPendingCommit=null;do Mr();while(We!==0);if((de&6)!==0)throw Error(l(327));if(n!==null){if(n===e.current)throw Error(l(177));if(f=n.lanes|n.childLanes,f|=Su,T0(e,s,f,d,g,v),e===be&&(ie=be=null,oe=0),Os=n,$n=e,Ds=s,Rc=f,wc=u,Up=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,KE(Ll,function(){return Kp(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=D.T,D.T=null,u=H.p,H.p=2,d=de,de|=4;try{HE(e,n,s)}finally{de=d,H.p=u,D.T=r}}We=1,Yp(),Qp(),Fp()}}function Yp(){if(We===1){We=0;var e=$n,n=Os,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=D.T,D.T=null;var r=H.p;H.p=2;var u=de;de|=4;try{wp(n,e);var f=jc,d=xd(e.containerInfo),g=f.focusedElem,v=f.selectionRange;if(d!==g&&g&&g.ownerDocument&&Id(g.ownerDocument.documentElement,g)){if(v!==null&&mu(g)){var A=v.start,O=v.end;if(O===void 0&&(O=A),"selectionStart"in g)g.selectionStart=A,g.selectionEnd=Math.min(O,g.value.length);else{var I=g.ownerDocument||document,w=I&&I.defaultView||window;if(w.getSelection){var N=w.getSelection(),F=g.textContent.length,j=Math.min(v.start,F),ge=v.end===void 0?j:Math.min(v.end,F);!N.extend&&j>ge&&(d=ge,ge=j,j=d);var T=Md(g,j),S=Md(g,ge);if(T&&S&&(N.rangeCount!==1||N.anchorNode!==T.node||N.anchorOffset!==T.offset||N.focusNode!==S.node||N.focusOffset!==S.offset)){var C=I.createRange();C.setStart(T.node,T.offset),N.removeAllRanges(),j>ge?(N.addRange(C),N.extend(S.node,S.offset)):(C.setEnd(S.node,S.offset),N.addRange(C))}}}}for(I=[],N=g;N=N.parentNode;)N.nodeType===1&&I.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<I.length;g++){var M=I[g];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}jr=!!Vc,jc=Vc=null}finally{de=u,H.p=r,D.T=s}}e.current=n,We=2}}function Qp(){if(We===2){We=0;var e=$n,n=Os,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=D.T,D.T=null;var r=H.p;H.p=2;var u=de;de|=4;try{Tp(e,n.alternate,n)}finally{de=u,H.p=r,D.T=s}}We=3}}function Fp(){if(We===4||We===3){We=0,_0();var e=$n,n=Os,s=Ds,r=Up;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?We=5:(We=0,Os=$n=null,Xp(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Jn=null),Ko(s),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(sa,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=D.T,u=H.p,H.p=2,D.T=null;try{for(var f=e.onRecoverableError,d=0;d<r.length;d++){var g=r[d];f(g.value,{componentStack:g.stack})}}finally{D.T=n,H.p=u}}(Ds&3)!==0&&Mr(),tn(e),u=e.pendingLanes,(s&4194090)!==0&&(u&42)!==0?e===Nc?Va++:(Va=0,Nc=e):Va=0,ja(0)}}function Xp(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ba(n)))}function Mr(e){return Yp(),Qp(),Fp(),Kp()}function Kp(){if(We!==5)return!1;var e=$n,n=Rc;Rc=0;var s=Ko(Ds),r=D.T,u=H.p;try{H.p=32>s?32:s,D.T=null,s=wc,wc=null;var f=$n,d=Ds;if(We=0,Os=$n=null,Ds=0,(de&6)!==0)throw Error(l(331));var g=de;if(de|=4,Ip(f.current),Op(f,f.current,d,s),de=g,ja(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(sa,f)}catch{}return!0}finally{H.p=u,D.T=r,Xp(e,n)}}function Zp(e,n,s){n=Ut(s,n),n=lc(e.stateNode,n,2),e=jn(e,n,2),e!==null&&(la(e,2),tn(e))}function Ee(e,n,s){if(e.tag===3)Zp(e,e,s);else for(;n!==null;){if(n.tag===3){Zp(n,e,s);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jn===null||!Jn.has(r))){e=Ut(s,e),s=ep(2),r=jn(n,s,2),r!==null&&(tp(s,r,n,e),la(r,2),tn(r));break}}n=n.return}}function Ic(e,n,s){var r=e.pingCache;if(r===null){r=e.pingCache=new qE;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(s)||(bc=!0,u.add(s),e=QE.bind(null,e,n,s),n.then(e,e))}function QE(e,n,s){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,be===e&&(oe&s)===s&&(De===4||De===3&&(oe&62914560)===oe&&300>Zt()-Ac?(de&2)===0&&Ms(e,0):Tc|=s,Ns===oe&&(Ns=0)),tn(e)}function Wp(e,n){n===0&&(n=Fh()),e=ds(e,n),e!==null&&(la(e,n),tn(e))}function FE(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),Wp(e,s)}function XE(e,n){var s=0;switch(e.tag){case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(l(314))}r!==null&&r.delete(n),Wp(e,s)}function KE(e,n){return Yo(e,n)}var Ir=null,xs=null,xc=!1,xr=!1,Uc=!1,Bi=0;function tn(e){e!==xs&&e.next===null&&(xs===null?Ir=xs=e:xs=xs.next=e),xr=!0,xc||(xc=!0,WE())}function ja(e,n){if(!Uc&&xr){Uc=!0;do for(var s=!1,r=Ir;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var d=r.suspendedLanes,g=r.pingedLanes;f=(1<<31-Ct(42|e)+1)-1,f&=u&~(d&~g),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(s=!0,tm(r,f))}else f=oe,f=Bl(r,r===be?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||aa(r,f)||(s=!0,tm(r,f));r=r.next}while(s);Uc=!1}}function ZE(){Jp()}function Jp(){xr=xc=!1;var e=0;Bi!==0&&(aS()&&(e=Bi),Bi=0);for(var n=Zt(),s=null,r=Ir;r!==null;){var u=r.next,f=$p(r,n);f===0?(r.next=null,s===null?Ir=u:s.next=u,u===null&&(xs=s)):(s=r,(e!==0||(f&3)!==0)&&(xr=!0)),r=u}ja(e)}function $p(e,n){for(var s=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var d=31-Ct(f),g=1<<d,v=u[d];v===-1?((g&s)===0||(g&r)!==0)&&(u[d]=b0(g,n)):v<=n&&(e.expiredLanes|=g),f&=~g}if(n=be,s=oe,s=Bl(e,e===n?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,s===0||e===n&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Qo(r),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||aa(e,s)){if(n=s&-s,n===e.callbackPriority)return n;switch(r!==null&&Qo(r),Ko(s)){case 2:case 8:s=Gh;break;case 32:s=Ll;break;case 268435456:s=Yh;break;default:s=Ll}return r=em.bind(null,e),s=Yo(s,r),e.callbackPriority=n,e.callbackNode=s,n}return r!==null&&r!==null&&Qo(r),e.callbackPriority=2,e.callbackNode=null,2}function em(e,n){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Mr()&&e.callbackNode!==s)return null;var r=oe;return r=Bl(e,e===be?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Lp(e,r,n),$p(e,Zt()),e.callbackNode!=null&&e.callbackNode===s?em.bind(null,e):null)}function tm(e,n){if(Mr())return null;Lp(e,n,!0)}function WE(){rS(function(){(de&6)!==0?Yo(jh,ZE):Jp()})}function kc(){return Bi===0&&(Bi=Qh()),Bi}function nm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Gl(""+e)}function im(e,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,e.id&&s.setAttribute("form",e.id),n.parentNode.insertBefore(s,n),e=new FormData(e),s.parentNode.removeChild(s),e}function JE(e,n,s,r,u){if(n==="submit"&&s&&s.stateNode===u){var f=nm((u[dt]||null).action),d=r.submitter;d&&(n=(n=d[dt]||null)?nm(n.formAction):d.getAttribute("formAction"),n!==null&&(f=n,d=null));var g=new Xl("action","action",null,r,u);e.push({event:g,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Bi!==0){var v=d?im(u,d):new FormData(u);tc(s,{pending:!0,data:v,method:u.method,action:f},null,v)}}else typeof f=="function"&&(g.preventDefault(),v=d?im(u,d):new FormData(u),tc(s,{pending:!0,data:v,method:u.method,action:f},f,v))},currentTarget:u}]})}}for(var Lc=0;Lc<Eu.length;Lc++){var zc=Eu[Lc],$E=zc.toLowerCase(),eS=zc[0].toUpperCase()+zc.slice(1);qt($E,"on"+eS)}qt(Ld,"onAnimationEnd"),qt(zd,"onAnimationIteration"),qt(Hd,"onAnimationStart"),qt("dblclick","onDoubleClick"),qt("focusin","onFocus"),qt("focusout","onBlur"),qt(gE,"onTransitionRun"),qt(vE,"onTransitionStart"),qt(yE,"onTransitionCancel"),qt(Bd,"onTransitionEnd"),is("onMouseEnter",["mouseout","mouseover"]),is("onMouseLeave",["mouseout","mouseover"]),is("onPointerEnter",["pointerout","pointerover"]),is("onPointerLeave",["pointerout","pointerover"]),Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ga));function sm(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var r=e[s],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var d=r.length-1;0<=d;d--){var g=r[d],v=g.instance,A=g.currentTarget;if(g=g.listener,v!==f&&u.isPropagationStopped())break e;f=g,u.currentTarget=A;try{f(u)}catch(O){Er(O)}u.currentTarget=null,f=v}else for(d=0;d<r.length;d++){if(g=r[d],v=g.instance,A=g.currentTarget,g=g.listener,v!==f&&u.isPropagationStopped())break e;f=g,u.currentTarget=A;try{f(u)}catch(O){Er(O)}u.currentTarget=null,f=v}}}}function se(e,n){var s=n[Zo];s===void 0&&(s=n[Zo]=new Set);var r=e+"__bubble";s.has(r)||(am(n,e,2,!1),s.add(r))}function Hc(e,n,s){var r=0;n&&(r|=4),am(s,e,r,n)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Bc(e){if(!e[Ur]){e[Ur]=!0,Jh.forEach(function(s){s!=="selectionchange"&&(tS.has(s)||Hc(s,!1,e),Hc(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ur]||(n[Ur]=!0,Hc("selectionchange",!1,n))}}function am(e,n,s,r){switch(Om(n)){case 2:var u=NS;break;case 8:u=OS;break;default:u=$c}s=u.bind(null,n,s,e),u=void 0,!ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,s,{capture:!0,passive:u}):e.addEventListener(n,s,!0):u!==void 0?e.addEventListener(n,s,{passive:u}):e.addEventListener(n,s,!1)}function Pc(e,n,s,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var d=r.tag;if(d===3||d===4){var g=r.stateNode.containerInfo;if(g===u)break;if(d===4)for(d=r.return;d!==null;){var v=d.tag;if((v===3||v===4)&&d.stateNode.containerInfo===u)return;d=d.return}for(;g!==null;){if(d=es(g),d===null)return;if(v=d.tag,v===5||v===6||v===26||v===27){r=f=d;continue e}g=g.parentNode}}r=r.return}hd(function(){var A=f,O=au(s),I=[];e:{var w=Pd.get(e);if(w!==void 0){var N=Xl,F=e;switch(e){case"keypress":if(Ql(s)===0)break e;case"keydown":case"keyup":N=K0;break;case"focusin":F="focus",N=fu;break;case"focusout":F="blur",N=fu;break;case"beforeblur":case"afterblur":N=fu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=z0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=J0;break;case Ld:case zd:case Hd:N=P0;break;case Bd:N=eE;break;case"scroll":case"scrollend":N=k0;break;case"wheel":N=nE;break;case"copy":case"cut":case"paste":N=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=gd;break;case"toggle":case"beforetoggle":N=sE}var j=(n&4)!==0,ge=!j&&(e==="scroll"||e==="scrollend"),T=j?w!==null?w+"Capture":null:w;j=[];for(var S=A,C;S!==null;){var M=S;if(C=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||C===null||T===null||(M=ua(S,T),M!=null&&j.push(Ya(S,M,C))),ge)break;S=S.return}0<j.length&&(w=new N(w,F,null,s,O),I.push({event:w,listeners:j}))}}if((n&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",w&&s!==su&&(F=s.relatedTarget||s.fromElement)&&(es(F)||F[$i]))break e;if((N||w)&&(w=O.window===O?O:(w=O.ownerDocument)?w.defaultView||w.parentWindow:window,N?(F=s.relatedTarget||s.toElement,N=A,F=F?es(F):null,F!==null&&(ge=c(F),j=F.tag,F!==ge||j!==5&&j!==27&&j!==6)&&(F=null)):(N=null,F=A),N!==F)){if(j=pd,M="onMouseLeave",T="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(j=gd,M="onPointerLeave",T="onPointerEnter",S="pointer"),ge=N==null?w:oa(N),C=F==null?w:oa(F),w=new j(M,S+"leave",N,s,O),w.target=ge,w.relatedTarget=C,M=null,es(O)===A&&(j=new j(T,S+"enter",F,s,O),j.target=C,j.relatedTarget=ge,M=j),ge=M,N&&F)t:{for(j=N,T=F,S=0,C=j;C;C=Us(C))S++;for(C=0,M=T;M;M=Us(M))C++;for(;0<S-C;)j=Us(j),S--;for(;0<C-S;)T=Us(T),C--;for(;S--;){if(j===T||T!==null&&j===T.alternate)break t;j=Us(j),T=Us(T)}j=null}else j=null;N!==null&&lm(I,w,N,j,!1),F!==null&&ge!==null&&lm(I,ge,F,j,!0)}}e:{if(w=A?oa(A):window,N=w.nodeName&&w.nodeName.toLowerCase(),N==="select"||N==="input"&&w.type==="file")var P=Ad;else if(Td(w))if(Rd)P=_E;else{P=hE;var ee=fE}else N=w.nodeName,!N||N.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?A&&iu(A.elementType)&&(P=Ad):P=dE;if(P&&(P=P(e,A))){Cd(I,P,s,O);break e}ee&&ee(e,w,A),e==="focusout"&&A&&w.type==="number"&&A.memoizedProps.value!=null&&nu(w,"number",w.value)}switch(ee=A?oa(A):window,e){case"focusin":(Td(ee)||ee.contentEditable==="true")&&(cs=ee,gu=A,ga=null);break;case"focusout":ga=gu=cs=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,Ud(I,s,O);break;case"selectionchange":if(mE)break;case"keydown":case"keyup":Ud(I,s,O)}var q;if(du)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else us?Sd(e,s)&&(G="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(G="onCompositionStart");G&&(vd&&s.locale!=="ko"&&(us||G!=="onCompositionStart"?G==="onCompositionEnd"&&us&&(q=dd()):(Bn=O,ou="value"in Bn?Bn.value:Bn.textContent,us=!0)),ee=kr(A,G),0<ee.length&&(G=new md(G,e,null,s,O),I.push({event:G,listeners:ee}),q?G.data=q:(q=bd(s),q!==null&&(G.data=q)))),(q=lE?rE(e,s):oE(e,s))&&(G=kr(A,"onBeforeInput"),0<G.length&&(ee=new md("onBeforeInput","beforeinput",null,s,O),I.push({event:ee,listeners:G}),ee.data=q)),JE(I,e,A,s,O)}sm(I,n)})}function Ya(e,n,s){return{instance:e,listener:n,currentTarget:s}}function kr(e,n){for(var s=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ua(e,s),u!=null&&r.unshift(Ya(e,u,f)),u=ua(e,n),u!=null&&r.push(Ya(e,u,f))),e.tag===3)return r;e=e.return}return[]}function Us(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function lm(e,n,s,r,u){for(var f=n._reactName,d=[];s!==null&&s!==r;){var g=s,v=g.alternate,A=g.stateNode;if(g=g.tag,v!==null&&v===r)break;g!==5&&g!==26&&g!==27||A===null||(v=A,u?(A=ua(s,f),A!=null&&d.unshift(Ya(s,A,v))):u||(A=ua(s,f),A!=null&&d.push(Ya(s,A,v)))),s=s.return}d.length!==0&&e.push({event:n,listeners:d})}var nS=/\r\n?/g,iS=/\u0000|\uFFFD/g;function rm(e){return(typeof e=="string"?e:""+e).replace(nS,`
`).replace(iS,"")}function om(e,n){return n=rm(n),rm(e)===n}function Lr(){}function me(e,n,s,r,u,f){switch(s){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||ls(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&ls(e,""+r);break;case"className":ql(e,"class",r);break;case"tabIndex":ql(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ql(e,s,r);break;case"style":cd(e,r,f);break;case"data":if(n!=="object"){ql(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||s!=="href")){e.removeAttribute(s);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(s);break}r=Gl(""+r),e.setAttribute(s,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(n!=="input"&&me(e,n,"name",u.name,u,null),me(e,n,"formEncType",u.formEncType,u,null),me(e,n,"formMethod",u.formMethod,u,null),me(e,n,"formTarget",u.formTarget,u,null)):(me(e,n,"encType",u.encType,u,null),me(e,n,"method",u.method,u,null),me(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(s);break}r=Gl(""+r),e.setAttribute(s,r);break;case"onClick":r!=null&&(e.onclick=Lr);break;case"onScroll":r!=null&&se("scroll",e);break;case"onScrollEnd":r!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(s=r.__html,s!=null){if(u.children!=null)throw Error(l(60));e.innerHTML=s}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}s=Gl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(s,""+r):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":r===!0?e.setAttribute(s,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(s,r):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(s,r):e.removeAttribute(s);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(s):e.setAttribute(s,r);break;case"popover":se("beforetoggle",e),se("toggle",e),Pl(e,"popover",r);break;case"xlinkActuate":rn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Pl(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=x0.get(s)||s,Pl(e,s,r))}}function qc(e,n,s,r,u,f){switch(s){case"style":cd(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(s=r.__html,s!=null){if(u.children!=null)throw Error(l(60));e.innerHTML=s}}break;case"children":typeof r=="string"?ls(e,r):(typeof r=="number"||typeof r=="bigint")&&ls(e,""+r);break;case"onScroll":r!=null&&se("scroll",e);break;case"onScrollEnd":r!=null&&se("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Lr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$h.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),n=s.slice(2,u?s.length-7:void 0),f=e[dt]||null,f=f!=null?f[s]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(n,r,u);break e}s in e?e[s]=r:r===!0?e.setAttribute(s,""):Pl(e,s,r)}}}function Je(e,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var r=!1,u=!1,f;for(f in s)if(s.hasOwnProperty(f)){var d=s[f];if(d!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:me(e,n,f,d,s,null)}}u&&me(e,n,"srcSet",s.srcSet,s,null),r&&me(e,n,"src",s.src,s,null);return;case"input":se("invalid",e);var g=f=d=u=null,v=null,A=null;for(r in s)if(s.hasOwnProperty(r)){var O=s[r];if(O!=null)switch(r){case"name":u=O;break;case"type":d=O;break;case"checked":v=O;break;case"defaultChecked":A=O;break;case"value":f=O;break;case"defaultValue":g=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(l(137,n));break;default:me(e,n,r,O,s,null)}}ld(e,f,g,v,A,d,u,!1),Vl(e);return;case"select":se("invalid",e),r=d=f=null;for(u in s)if(s.hasOwnProperty(u)&&(g=s[u],g!=null))switch(u){case"value":f=g;break;case"defaultValue":d=g;break;case"multiple":r=g;default:me(e,n,u,g,s,null)}n=f,s=d,e.multiple=!!r,n!=null?as(e,!!r,n,!1):s!=null&&as(e,!!r,s,!0);return;case"textarea":se("invalid",e),f=u=r=null;for(d in s)if(s.hasOwnProperty(d)&&(g=s[d],g!=null))switch(d){case"value":r=g;break;case"defaultValue":u=g;break;case"children":f=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(l(91));break;default:me(e,n,d,g,s,null)}od(e,r,u,f),Vl(e);return;case"option":for(v in s)if(s.hasOwnProperty(v)&&(r=s[v],r!=null))switch(v){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:me(e,n,v,r,s,null)}return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(r=0;r<Ga.length;r++)se(Ga[r],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in s)if(s.hasOwnProperty(A)&&(r=s[A],r!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:me(e,n,A,r,s,null)}return;default:if(iu(n)){for(O in s)s.hasOwnProperty(O)&&(r=s[O],r!==void 0&&qc(e,n,O,r,s,void 0));return}}for(g in s)s.hasOwnProperty(g)&&(r=s[g],r!=null&&me(e,n,g,r,s,null))}function sS(e,n,s,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,d=null,g=null,v=null,A=null,O=null;for(N in s){var I=s[N];if(s.hasOwnProperty(N)&&I!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":v=I;default:r.hasOwnProperty(N)||me(e,n,N,null,r,I)}}for(var w in r){var N=r[w];if(I=s[w],r.hasOwnProperty(w)&&(N!=null||I!=null))switch(w){case"type":f=N;break;case"name":u=N;break;case"checked":A=N;break;case"defaultChecked":O=N;break;case"value":d=N;break;case"defaultValue":g=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(l(137,n));break;default:N!==I&&me(e,n,w,N,r,I)}}tu(e,d,g,v,A,O,f,u);return;case"select":N=d=g=w=null;for(f in s)if(v=s[f],s.hasOwnProperty(f)&&v!=null)switch(f){case"value":break;case"multiple":N=v;default:r.hasOwnProperty(f)||me(e,n,f,null,r,v)}for(u in r)if(f=r[u],v=s[u],r.hasOwnProperty(u)&&(f!=null||v!=null))switch(u){case"value":w=f;break;case"defaultValue":g=f;break;case"multiple":d=f;default:f!==v&&me(e,n,u,f,r,v)}n=g,s=d,r=N,w!=null?as(e,!!s,w,!1):!!r!=!!s&&(n!=null?as(e,!!s,n,!0):as(e,!!s,s?[]:"",!1));return;case"textarea":N=w=null;for(g in s)if(u=s[g],s.hasOwnProperty(g)&&u!=null&&!r.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:me(e,n,g,null,r,u)}for(d in r)if(u=r[d],f=s[d],r.hasOwnProperty(d)&&(u!=null||f!=null))switch(d){case"value":w=u;break;case"defaultValue":N=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(l(91));break;default:u!==f&&me(e,n,d,u,r,f)}rd(e,w,N);return;case"option":for(var F in s)if(w=s[F],s.hasOwnProperty(F)&&w!=null&&!r.hasOwnProperty(F))switch(F){case"selected":e.selected=!1;break;default:me(e,n,F,null,r,w)}for(v in r)if(w=r[v],N=s[v],r.hasOwnProperty(v)&&w!==N&&(w!=null||N!=null))switch(v){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:me(e,n,v,w,r,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var j in s)w=s[j],s.hasOwnProperty(j)&&w!=null&&!r.hasOwnProperty(j)&&me(e,n,j,null,r,w);for(A in r)if(w=r[A],N=s[A],r.hasOwnProperty(A)&&w!==N&&(w!=null||N!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(l(137,n));break;default:me(e,n,A,w,r,N)}return;default:if(iu(n)){for(var ge in s)w=s[ge],s.hasOwnProperty(ge)&&w!==void 0&&!r.hasOwnProperty(ge)&&qc(e,n,ge,void 0,r,w);for(O in r)w=r[O],N=s[O],!r.hasOwnProperty(O)||w===N||w===void 0&&N===void 0||qc(e,n,O,w,r,N);return}}for(var T in s)w=s[T],s.hasOwnProperty(T)&&w!=null&&!r.hasOwnProperty(T)&&me(e,n,T,null,r,w);for(I in r)w=r[I],N=s[I],!r.hasOwnProperty(I)||w===N||w==null&&N==null||me(e,n,I,w,r,N)}var Vc=null,jc=null;function zr(e){return e.nodeType===9?e:e.ownerDocument}function um(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Gc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yc=null;function aS(){var e=window.event;return e&&e.type==="popstate"?e===Yc?!1:(Yc=e,!0):(Yc=null,!1)}var fm=typeof setTimeout=="function"?setTimeout:void 0,lS=typeof clearTimeout=="function"?clearTimeout:void 0,hm=typeof Promise=="function"?Promise:void 0,rS=typeof queueMicrotask=="function"?queueMicrotask:typeof hm<"u"?function(e){return hm.resolve(null).then(e).catch(oS)}:fm;function oS(e){setTimeout(function(){throw e})}function ti(e){return e==="head"}function dm(e,n){var s=n,r=0,u=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(0<r&&8>r){s=r;var d=e.ownerDocument;if(s&1&&Qa(d.documentElement),s&2&&Qa(d.body),s&4)for(s=d.head,Qa(s),d=s.firstChild;d;){var g=d.nextSibling,v=d.nodeName;d[ra]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=g}}if(u===0){e.removeChild(f),el(n);return}u--}else s==="$"||s==="$?"||s==="$!"?u++:r=s.charCodeAt(0)-48;else r=0;s=f}while(s);el(n)}function Qc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Qc(s),Wo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function uS(e,n,s,r){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ra])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=jt(e.nextSibling),e===null)break}return null}function cS(e,n,s){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=jt(e.nextSibling),e===null))return null;return e}function Fc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function fS(e,n){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")n();else{var r=function(){n(),s.removeEventListener("DOMContentLoaded",r)};s.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function jt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Xc=null;function _m(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return e;n--}else s==="/$"&&n++}e=e.previousSibling}return null}function pm(e,n,s){switch(n=zr(s),e){case"html":if(e=n.documentElement,!e)throw Error(l(452));return e;case"head":if(e=n.head,!e)throw Error(l(453));return e;case"body":if(e=n.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Qa(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Wo(e)}var Pt=new Map,mm=new Set;function Hr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Sn=H.d;H.d={f:hS,r:dS,D:_S,C:pS,L:mS,m:gS,X:yS,S:vS,M:ES};function hS(){var e=Sn.f(),n=Or();return e||n}function dS(e){var n=ts(e);n!==null&&n.tag===5&&n.type==="form"?L_(n):Sn.r(e)}var ks=typeof document>"u"?null:document;function gm(e,n,s){var r=ks;if(r&&typeof n=="string"&&n){var u=xt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),mm.has(u)||(mm.add(u),e={rel:e,crossOrigin:s,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Je(n,"link",e),Pe(n),r.head.appendChild(n)))}}function _S(e){Sn.D(e),gm("dns-prefetch",e,null)}function pS(e,n){Sn.C(e,n),gm("preconnect",e,n)}function mS(e,n,s){Sn.L(e,n,s);var r=ks;if(r&&e&&n){var u='link[rel="preload"][as="'+xt(n)+'"]';n==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+xt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+xt(s.imageSizes)+'"]')):u+='[href="'+xt(e)+'"]';var f=u;switch(n){case"style":f=Ls(e);break;case"script":f=zs(e)}Pt.has(f)||(e=y({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:e,as:n},s),Pt.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Fa(f))||n==="script"&&r.querySelector(Xa(f))||(n=r.createElement("link"),Je(n,"link",e),Pe(n),r.head.appendChild(n)))}}function gS(e,n){Sn.m(e,n);var s=ks;if(s&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xt(r)+'"][href="'+xt(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=zs(e)}if(!Pt.has(f)&&(e=y({rel:"modulepreload",href:e},n),Pt.set(f,e),s.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Xa(f)))return}r=s.createElement("link"),Je(r,"link",e),Pe(r),s.head.appendChild(r)}}}function vS(e,n,s){Sn.S(e,n,s);var r=ks;if(r&&e){var u=ns(r).hoistableStyles,f=Ls(e);n=n||"default";var d=u.get(f);if(!d){var g={loading:0,preload:null};if(d=r.querySelector(Fa(f)))g.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},s),(s=Pt.get(f))&&Kc(e,s);var v=d=r.createElement("link");Pe(v),Je(v,"link",e),v._p=new Promise(function(A,O){v.onload=A,v.onerror=O}),v.addEventListener("load",function(){g.loading|=1}),v.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Br(d,n,r)}d={type:"stylesheet",instance:d,count:1,state:g},u.set(f,d)}}}function yS(e,n){Sn.X(e,n);var s=ks;if(s&&e){var r=ns(s).hoistableScripts,u=zs(e),f=r.get(u);f||(f=s.querySelector(Xa(u)),f||(e=y({src:e,async:!0},n),(n=Pt.get(u))&&Zc(e,n),f=s.createElement("script"),Pe(f),Je(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function ES(e,n){Sn.M(e,n);var s=ks;if(s&&e){var r=ns(s).hoistableScripts,u=zs(e),f=r.get(u);f||(f=s.querySelector(Xa(u)),f||(e=y({src:e,async:!0,type:"module"},n),(n=Pt.get(u))&&Zc(e,n),f=s.createElement("script"),Pe(f),Je(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function vm(e,n,s,r){var u=(u=K.current)?Hr(u):null;if(!u)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Ls(s.href),s=ns(u).hoistableStyles,r=s.get(n),r||(r={type:"style",instance:null,count:0,state:null},s.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Ls(s.href);var f=ns(u).hoistableStyles,d=f.get(e);if(d||(u=u.ownerDocument||u,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,d),(f=u.querySelector(Fa(e)))&&!f._p&&(d.instance=f,d.state.loading=5),Pt.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Pt.set(e,s),f||SS(u,e,s,d.state))),n&&r===null)throw Error(l(528,""));return d}if(n&&r!==null)throw Error(l(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=zs(s),s=ns(u).hoistableScripts,r=s.get(n),r||(r={type:"script",instance:null,count:0,state:null},s.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Ls(e){return'href="'+xt(e)+'"'}function Fa(e){return'link[rel="stylesheet"]['+e+"]"}function ym(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function SS(e,n,s,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Je(n,"link",s),Pe(n),e.head.appendChild(n))}function zs(e){return'[src="'+xt(e)+'"]'}function Xa(e){return"script[async]"+e}function Em(e,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+xt(s.href)+'"]');if(r)return n.instance=r,Pe(r),r;var u=y({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Pe(r),Je(r,"style",u),Br(r,s.precedence,e),n.instance=r;case"stylesheet":u=Ls(s.href);var f=e.querySelector(Fa(u));if(f)return n.state.loading|=4,n.instance=f,Pe(f),f;r=ym(s),(u=Pt.get(u))&&Kc(r,u),f=(e.ownerDocument||e).createElement("link"),Pe(f);var d=f;return d._p=new Promise(function(g,v){d.onload=g,d.onerror=v}),Je(f,"link",r),n.state.loading|=4,Br(f,s.precedence,e),n.instance=f;case"script":return f=zs(s.src),(u=e.querySelector(Xa(f)))?(n.instance=u,Pe(u),u):(r=s,(u=Pt.get(f))&&(r=y({},s),Zc(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),Pe(u),Je(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(l(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Br(r,s.precedence,e));return n.instance}function Br(e,n,s){for(var r=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,d=0;d<r.length;d++){var g=r[d];if(g.dataset.precedence===n)f=g;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(e,n.firstChild))}function Kc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Zc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Pr=null;function Sm(e,n,s){if(Pr===null){var r=new Map,u=Pr=new Map;u.set(s,r)}else u=Pr,r=u.get(s),r||(r=new Map,u.set(s,r));if(r.has(e))return r;for(r.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var f=s[u];if(!(f[ra]||f[it]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var d=f.getAttribute(n)||"";d=e+d;var g=r.get(d);g?g.push(f):r.set(d,[f])}}return r}function bm(e,n,s){e=e.ownerDocument||e,e.head.insertBefore(s,n==="title"?e.querySelector("head > title"):null)}function bS(e,n,s){if(s===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Tm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ka=null;function TS(){}function CS(e,n,s){if(Ka===null)throw Error(l(475));var r=Ka;if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Ls(s.href),f=e.querySelector(Fa(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=qr.bind(r),e.then(r,r)),n.state.loading|=4,n.instance=f,Pe(f);return}f=e.ownerDocument||e,s=ym(s),(u=Pt.get(u))&&Kc(s,u),f=f.createElement("link"),Pe(f);var d=f;d._p=new Promise(function(g,v){d.onload=g,d.onerror=v}),Je(f,"link",s),n.instance=f}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(r.count++,n=qr.bind(r),e.addEventListener("load",n),e.addEventListener("error",n))}}function AS(){if(Ka===null)throw Error(l(475));var e=Ka;return e.stylesheets&&e.count===0&&Wc(e,e.stylesheets),0<e.count?function(n){var s=setTimeout(function(){if(e.stylesheets&&Wc(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(s)}}:null}function qr(){if(this.count--,this.count===0){if(this.stylesheets)Wc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vr=null;function Wc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vr=new Map,n.forEach(RS,e),Vr=null,qr.call(e))}function RS(e,n){if(!(n.state.loading&4)){var s=Vr.get(e);if(s)var r=s.get(null);else{s=new Map,Vr.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var d=u[f];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(s.set(d.dataset.precedence,d),r=d)}r&&s.set(null,r)}u=n.instance,d=u.getAttribute("data-precedence"),f=s.get(d)||r,f===r&&s.set(null,u),s.set(d,u),this.count++,r=qr.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Za={$$typeof:Ae,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function wS(e,n,s,r,u,f,d,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fo(0),this.hiddenUpdates=Fo(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Cm(e,n,s,r,u,f,d,g,v,A,O,I){return e=new wS(e,n,s,d,g,v,A,I),n=1,f===!0&&(n|=24),f=Rt(3,null,null,n),e.current=f,f.stateNode=e,n=Iu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:s,cache:n},Lu(f),e}function Am(e){return e?(e=_s,e):_s}function Rm(e,n,s,r,u,f){u=Am(u),r.context===null?r.context=u:r.pendingContext=u,r=Vn(n),r.payload={element:s},f=f===void 0?null:f,f!==null&&(r.callback=f),s=jn(e,r,n),s!==null&&(Mt(s,e,n),Ra(s,e,n))}function wm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function Jc(e,n){wm(e,n),(e=e.alternate)&&wm(e,n)}function Nm(e){if(e.tag===13){var n=ds(e,67108864);n!==null&&Mt(n,e,67108864),Jc(e,67108864)}}var jr=!0;function NS(e,n,s,r){var u=D.T;D.T=null;var f=H.p;try{H.p=2,$c(e,n,s,r)}finally{H.p=f,D.T=u}}function OS(e,n,s,r){var u=D.T;D.T=null;var f=H.p;try{H.p=8,$c(e,n,s,r)}finally{H.p=f,D.T=u}}function $c(e,n,s,r){if(jr){var u=ef(r);if(u===null)Pc(e,n,r,Gr,s),Dm(e,r);else if(MS(u,e,n,s,r))r.stopPropagation();else if(Dm(e,r),n&4&&-1<DS.indexOf(e)){for(;u!==null;){var f=ts(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var d=bi(f.pendingLanes);if(d!==0){var g=f;for(g.pendingLanes|=2,g.entangledLanes|=2;d;){var v=1<<31-Ct(d);g.entanglements[1]|=v,d&=~v}tn(f),(de&6)===0&&(wr=Zt()+500,ja(0))}}break;case 13:g=ds(f,2),g!==null&&Mt(g,f,2),Or(),Jc(f,2)}if(f=ef(r),f===null&&Pc(e,n,r,Gr,s),f===u)break;u=f}u!==null&&r.stopPropagation()}else Pc(e,n,r,null,s)}}function ef(e){return e=au(e),tf(e)}var Gr=null;function tf(e){if(Gr=null,e=es(e),e!==null){var n=c(e);if(n===null)e=null;else{var s=n.tag;if(s===13){if(e=h(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Gr=e,null}function Om(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(p0()){case jh:return 2;case Gh:return 8;case Ll:case m0:return 32;case Yh:return 268435456;default:return 32}default:return 32}}var nf=!1,ni=null,ii=null,si=null,Wa=new Map,Ja=new Map,ai=[],DS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dm(e,n){switch(e){case"focusin":case"focusout":ni=null;break;case"dragenter":case"dragleave":ii=null;break;case"mouseover":case"mouseout":si=null;break;case"pointerover":case"pointerout":Wa.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ja.delete(n.pointerId)}}function $a(e,n,s,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:s,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ts(n),n!==null&&Nm(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function MS(e,n,s,r,u){switch(n){case"focusin":return ni=$a(ni,e,n,s,r,u),!0;case"dragenter":return ii=$a(ii,e,n,s,r,u),!0;case"mouseover":return si=$a(si,e,n,s,r,u),!0;case"pointerover":var f=u.pointerId;return Wa.set(f,$a(Wa.get(f)||null,e,n,s,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Ja.set(f,$a(Ja.get(f)||null,e,n,s,r,u)),!0}return!1}function Mm(e){var n=es(e.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=h(s),n!==null){e.blockedOn=n,C0(e.priority,function(){if(s.tag===13){var r=Dt();r=Xo(r);var u=ds(s,r);u!==null&&Mt(u,s,r),Jc(s,r)}});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=ef(e.nativeEvent);if(s===null){s=e.nativeEvent;var r=new s.constructor(s.type,s);su=r,s.target.dispatchEvent(r),su=null}else return n=ts(s),n!==null&&Nm(n),e.blockedOn=s,!1;n.shift()}return!0}function Im(e,n,s){Yr(e)&&s.delete(n)}function IS(){nf=!1,ni!==null&&Yr(ni)&&(ni=null),ii!==null&&Yr(ii)&&(ii=null),si!==null&&Yr(si)&&(si=null),Wa.forEach(Im),Ja.forEach(Im)}function Qr(e,n){e.blockedOn===n&&(e.blockedOn=null,nf||(nf=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,IS)))}var Fr=null;function xm(e){Fr!==e&&(Fr=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Fr===e&&(Fr=null);for(var n=0;n<e.length;n+=3){var s=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(tf(r||s)===null)continue;break}var f=ts(s);f!==null&&(e.splice(n,3),n-=3,tc(f,{pending:!0,data:u,method:s.method,action:r},r,u))}}))}function el(e){function n(v){return Qr(v,e)}ni!==null&&Qr(ni,e),ii!==null&&Qr(ii,e),si!==null&&Qr(si,e),Wa.forEach(n),Ja.forEach(n);for(var s=0;s<ai.length;s++){var r=ai[s];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ai.length&&(s=ai[0],s.blockedOn===null);)Mm(s),s.blockedOn===null&&ai.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(r=0;r<s.length;r+=3){var u=s[r],f=s[r+1],d=u[dt]||null;if(typeof f=="function")d||xm(s);else if(d){var g=null;if(f&&f.hasAttribute("formAction")){if(u=f,d=f[dt]||null)g=d.formAction;else if(tf(u)!==null)continue}else g=d.action;typeof g=="function"?s[r+1]=g:(s.splice(r,3),r-=3),xm(s)}}}function sf(e){this._internalRoot=e}Xr.prototype.render=sf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(l(409));var s=n.current,r=Dt();Rm(s,r,e,n,null,null)},Xr.prototype.unmount=sf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Rm(e.current,2,null,e,null,null),Or(),n[$i]=null}};function Xr(e){this._internalRoot=e}Xr.prototype.unstable_scheduleHydration=function(e){if(e){var n=Zh();e={blockedOn:null,target:e,priority:n};for(var s=0;s<ai.length&&n!==0&&n<ai[s].priority;s++);ai.splice(s,0,e),s===0&&Mm(e)}};var Um=t.version;if(Um!=="19.1.0")throw Error(l(527,Um,"19.1.0"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=p(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var xS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kr.isDisabled&&Kr.supportsFiber)try{sa=Kr.inject(xS),Tt=Kr}catch{}}return nl.createRoot=function(e,n){if(!o(e))throw Error(l(299));var s=!1,r="",u=Z_,f=W_,d=J_,g=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(g=n.unstable_transitionCallbacks)),n=Cm(e,1,!1,null,null,s,r,u,f,d,g,null),e[$i]=n.current,Bc(e),new sf(n)},nl.hydrateRoot=function(e,n,s){if(!o(e))throw Error(l(299));var r=!1,u="",f=Z_,d=W_,g=J_,v=null,A=null;return s!=null&&(s.unstable_strictMode===!0&&(r=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(d=s.onCaughtError),s.onRecoverableError!==void 0&&(g=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(v=s.unstable_transitionCallbacks),s.formState!==void 0&&(A=s.formState)),n=Cm(e,1,!0,n,s??null,r,u,f,d,g,v,A),n.context=Am(null),s=n.current,r=Dt(),r=Xo(r),u=Vn(r),u.callback=null,jn(s,u,r),s=r,n.current.lanes=s,la(n,s),tn(n),e[$i]=n.current,Bc(e),new Xr(n)},nl.version="19.1.0",nl}var Gm;function GS(){if(Gm)return rf.exports;Gm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),rf.exports=jS(),rf.exports}var YS=GS();const QS=$g(YS),FS=()=>{};var Ym={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(a,t){if(!a)throw Ws(t)},Ws=function(a){return new Error("Firebase Database ("+ev.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=function(a){const t=[];let i=0;for(let l=0;l<a.length;l++){let o=a.charCodeAt(l);o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):(o&64512)===55296&&l+1<a.length&&(a.charCodeAt(l+1)&64512)===56320?(o=65536+((o&1023)<<10)+(a.charCodeAt(++l)&1023),t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},XS=function(a){const t=[];let i=0,l=0;for(;i<a.length;){const o=a[i++];if(o<128)t[l++]=String.fromCharCode(o);else if(o>191&&o<224){const c=a[i++];t[l++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=a[i++],h=a[i++],_=a[i++],p=((o&7)<<18|(c&63)<<12|(h&63)<<6|_&63)-65536;t[l++]=String.fromCharCode(55296+(p>>10)),t[l++]=String.fromCharCode(56320+(p&1023))}else{const c=a[i++],h=a[i++];t[l++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return t.join("")},Ff={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,t){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,l=[];for(let o=0;o<a.length;o+=3){const c=a[o],h=o+1<a.length,_=h?a[o+1]:0,p=o+2<a.length,m=p?a[o+2]:0,y=c>>2,b=(c&3)<<4|_>>4;let R=(_&15)<<2|m>>6,k=m&63;p||(k=64,h||(R=64)),l.push(i[y],i[b],i[R],i[k])}return l.join("")},encodeString(a,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(a):this.encodeByteArray(tv(a),t)},decodeString(a,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(a):XS(this.decodeStringToByteArray(a,t))},decodeStringToByteArray(a,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,l=[];for(let o=0;o<a.length;){const c=i[a.charAt(o++)],_=o<a.length?i[a.charAt(o)]:0;++o;const m=o<a.length?i[a.charAt(o)]:64;++o;const b=o<a.length?i[a.charAt(o)]:64;if(++o,c==null||_==null||m==null||b==null)throw new KS;const R=c<<2|_>>4;if(l.push(R),m!==64){const k=_<<4&240|m>>2;if(l.push(k),b!==64){const L=m<<6&192|b;l.push(L)}}}return l},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}};class KS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nv=function(a){const t=tv(a);return Ff.encodeByteArray(t,!0)},ao=function(a){return nv(a).replace(/\./g,"")},lo=function(a){try{return Ff.decodeString(a,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(a){return iv(void 0,a)}function iv(a,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const i=t;return new Date(i.getTime());case Object:a===void 0&&(a={});break;case Array:a=[];break;default:return t}for(const i in t)!t.hasOwnProperty(i)||!WS(i)||(a[i]=iv(a[i],t[i]));return a}function WS(a){return a!=="__proto__"}/**
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
 */function JS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $S=()=>JS().__FIREBASE_DEFAULTS__,eb=()=>{if(typeof process>"u"||typeof Ym>"u")return;const a=Ym.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},tb=()=>{if(typeof document>"u")return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=a&&lo(a[1]);return t&&JSON.parse(t)},Xf=()=>{try{return FS()||$S()||eb()||tb()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}},sv=a=>{var t,i;return(i=(t=Xf())===null||t===void 0?void 0:t.emulatorHosts)===null||i===void 0?void 0:i[a]},nb=a=>{const t=sv(a);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const l=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),l]:[t.substring(0,i),l]},av=()=>{var a;return(a=Xf())===null||a===void 0?void 0:a.config},lv=a=>{var t;return(t=Xf())===null||t===void 0?void 0:t[`_${a}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,l)=>{i?this.reject(i):this.resolve(l),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,l))}}}/**
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
 */function ib(a,t){if(a.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},l=t||"demo-project",o=a.iat||0,c=a.sub||a.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${l}`,aud:l,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},a);return[ao(JSON.stringify(i)),ao(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function sb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ab(){const a=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof a=="object"&&a.id!==void 0}function rv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lb(){const a=ct();return a.indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0}function rb(){return ev.NODE_ADMIN===!0}function ob(){try{return typeof indexedDB=="object"}catch{return!1}}function ub(){return new Promise((a,t)=>{try{let i=!0;const l="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(l);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(l),a(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var c;t(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){t(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb="FirebaseError";class yi extends Error{constructor(t,i,l){super(i),this.code=t,this.customData=l,this.name=cb,Object.setPrototypeOf(this,yi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Al.prototype.create)}}class Al{constructor(t,i,l){this.service=t,this.serviceName=i,this.errors=l}create(t,...i){const l=i[0]||{},o=`${this.service}/${t}`,c=this.errors[t],h=c?fb(c,l):"Error",_=`${this.serviceName}: ${h} (${o}).`;return new yi(o,_,l)}}function fb(a,t){return a.replace(hb,(i,l)=>{const o=t[l];return o!=null?String(o):`<${l}?>`})}const hb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(a){return JSON.parse(a)}function He(a){return JSON.stringify(a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=function(a){let t={},i={},l={},o="";try{const c=a.split(".");t=dl(lo(c[0])||""),i=dl(lo(c[1])||""),o=c[2],l=i.d||{},delete i.d}catch{}return{header:t,claims:i,data:l,signature:o}},db=function(a){const t=ov(a),i=t.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},_b=function(a){const t=ov(a).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(a,t){return Object.prototype.hasOwnProperty.call(a,t)}function Ys(a,t){if(Object.prototype.hasOwnProperty.call(a,t))return a[t]}function Rf(a){for(const t in a)if(Object.prototype.hasOwnProperty.call(a,t))return!1;return!0}function ro(a,t,i){const l={};for(const o in a)Object.prototype.hasOwnProperty.call(a,o)&&(l[o]=t.call(i,a[o],o,a));return l}function Qi(a,t){if(a===t)return!0;const i=Object.keys(a),l=Object.keys(t);for(const o of i){if(!l.includes(o))return!1;const c=a[o],h=t[o];if(Qm(c)&&Qm(h)){if(!Qi(c,h))return!1}else if(c!==h)return!1}for(const o of l)if(!i.includes(o))return!1;return!0}function Qm(a){return a!==null&&typeof a=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(a){const t=[];for(const[i,l]of Object.entries(a))Array.isArray(l)?l.forEach(o=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(l));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,i){i||(i=0);const l=this.W_;if(typeof t=="string")for(let b=0;b<16;b++)l[b]=t.charCodeAt(i)<<24|t.charCodeAt(i+1)<<16|t.charCodeAt(i+2)<<8|t.charCodeAt(i+3),i+=4;else for(let b=0;b<16;b++)l[b]=t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3],i+=4;for(let b=16;b<80;b++){const R=l[b-3]^l[b-8]^l[b-14]^l[b-16];l[b]=(R<<1|R>>>31)&4294967295}let o=this.chain_[0],c=this.chain_[1],h=this.chain_[2],_=this.chain_[3],p=this.chain_[4],m,y;for(let b=0;b<80;b++){b<40?b<20?(m=_^c&(h^_),y=1518500249):(m=c^h^_,y=1859775393):b<60?(m=c&h|_&(c|h),y=2400959708):(m=c^h^_,y=3395469782);const R=(o<<5|o>>>27)+m+p+y+l[b]&4294967295;p=_,_=h,h=(c<<30|c>>>2)&4294967295,c=o,o=R}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+_&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(t,i){if(t==null)return;i===void 0&&(i=t.length);const l=i-this.blockSize;let o=0;const c=this.buf_;let h=this.inbuf_;for(;o<i;){if(h===0)for(;o<=l;)this.compress_(t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<i;)if(c[h]=t.charCodeAt(o),++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}else for(;o<i;)if(c[h]=t[o],++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}this.inbuf_=h,this.total_+=i}digest(){const t=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=i&255,i/=256;this.compress_(this.buf_);let l=0;for(let o=0;o<5;o++)for(let c=24;c>=0;c-=8)t[l]=this.chain_[o]>>c&255,++l;return t}}function mb(a,t){const i=new gb(a,t);return i.subscribe.bind(i)}class gb{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(l=>{this.error(l)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,l){let o;if(t===void 0&&i===void 0&&l===void 0)throw new Error("Missing Observer.");vb(t,["next","error","complete"])?o=t:o={next:t,error:i,complete:l},o.next===void 0&&(o.next=ff),o.error===void 0&&(o.error=ff),o.complete===void 0&&(o.complete=ff);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(l){typeof console<"u"&&console.error&&console.error(l)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vb(a,t){if(typeof a!="object"||a===null)return!1;for(const i of t)if(i in a&&typeof a[i]=="function")return!0;return!1}function ff(){}function Zf(a,t){return`${a} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=function(a){const t=[];let i=0;for(let l=0;l<a.length;l++){let o=a.charCodeAt(l);if(o>=55296&&o<=56319){const c=o-55296;l++,U(l<a.length,"Surrogate pair missing trail surrogate.");const h=a.charCodeAt(l)-56320;o=65536+(c<<10)+h}o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):o<65536?(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},Oo=function(a){let t=0;for(let i=0;i<a.length;i++){const l=a.charCodeAt(i);l<128?t++:l<2048?t+=2:l>=55296&&l<=56319?(t+=4,i++):t+=3}return t};/**
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
 */function ft(a){return a&&a._delegate?a._delegate:a}class Fi{constructor(t,i,l){this.name=t,this.instanceFactory=i,this.type=l,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Pi="[DEFAULT]";/**
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
 */class Eb{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const l=new No;if(this.instancesDeferred.set(i,l),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&l.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){var i;const l=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(i=t==null?void 0:t.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(l)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:l})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(bb(t))try{this.getOrInitializeService({instanceIdentifier:Pi})}catch{}for(const[i,l]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:o});l.resolve(c)}catch{}}}}clearInstance(t=Pi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Pi){return this.instances.has(t)}getOptions(t=Pi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,l=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(l))throw Error(`${this.name}(${l}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:l,options:i});for(const[c,h]of this.instancesDeferred.entries()){const _=this.normalizeInstanceIdentifier(c);l===_&&h.resolve(o)}return o}onInit(t,i){var l;const o=this.normalizeInstanceIdentifier(i),c=(l=this.onInitCallbacks.get(o))!==null&&l!==void 0?l:new Set;c.add(t),this.onInitCallbacks.set(o,c);const h=this.instances.get(o);return h&&t(h,o),()=>{c.delete(t)}}invokeOnInitCallbacks(t,i){const l=this.onInitCallbacks.get(i);if(l)for(const o of l)try{o(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let l=this.instances.get(t);if(!l&&this.component&&(l=this.component.instanceFactory(this.container,{instanceIdentifier:Sb(t),options:i}),this.instances.set(t,l),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(l,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,l)}catch{}return l||null}normalizeInstanceIdentifier(t=Pi){return this.component?this.component.multipleInstances?t:Pi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sb(a){return a===Pi?void 0:a}function bb(a){return a.instantiationMode==="EAGER"}/**
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
 */class Tb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new Eb(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(ve||(ve={}));const Cb={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},Ab=ve.INFO,Rb={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},wb=(a,t,...i)=>{if(t<a.logLevel)return;const l=new Date().toISOString(),o=Rb[t];if(o)console[o](`[${l}]  ${a.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Wf{constructor(t){this.name=t,this._logLevel=Ab,this._logHandler=wb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ve))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Cb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...t),this._logHandler(this,ve.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...t),this._logHandler(this,ve.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...t),this._logHandler(this,ve.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...t),this._logHandler(this,ve.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...t),this._logHandler(this,ve.ERROR,...t)}}const Nb=(a,t)=>t.some(i=>a instanceof i);let Fm,Xm;function Ob(){return Fm||(Fm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Db(){return Xm||(Xm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uv=new WeakMap,wf=new WeakMap,cv=new WeakMap,hf=new WeakMap,Jf=new WeakMap;function Mb(a){const t=new Promise((i,l)=>{const o=()=>{a.removeEventListener("success",c),a.removeEventListener("error",h)},c=()=>{i(fi(a.result)),o()},h=()=>{l(a.error),o()};a.addEventListener("success",c),a.addEventListener("error",h)});return t.then(i=>{i instanceof IDBCursor&&uv.set(i,a)}).catch(()=>{}),Jf.set(t,a),t}function Ib(a){if(wf.has(a))return;const t=new Promise((i,l)=>{const o=()=>{a.removeEventListener("complete",c),a.removeEventListener("error",h),a.removeEventListener("abort",h)},c=()=>{i(),o()},h=()=>{l(a.error||new DOMException("AbortError","AbortError")),o()};a.addEventListener("complete",c),a.addEventListener("error",h),a.addEventListener("abort",h)});wf.set(a,t)}let Nf={get(a,t,i){if(a instanceof IDBTransaction){if(t==="done")return wf.get(a);if(t==="objectStoreNames")return a.objectStoreNames||cv.get(a);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return fi(a[t])},set(a,t,i){return a[t]=i,!0},has(a,t){return a instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in a}};function xb(a){Nf=a(Nf)}function Ub(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const l=a.call(df(this),t,...i);return cv.set(l,t.sort?t.sort():[t]),fi(l)}:Db().includes(a)?function(...t){return a.apply(df(this),t),fi(uv.get(this))}:function(...t){return fi(a.apply(df(this),t))}}function kb(a){return typeof a=="function"?Ub(a):(a instanceof IDBTransaction&&Ib(a),Nb(a,Ob())?new Proxy(a,Nf):a)}function fi(a){if(a instanceof IDBRequest)return Mb(a);if(hf.has(a))return hf.get(a);const t=kb(a);return t!==a&&(hf.set(a,t),Jf.set(t,a)),t}const df=a=>Jf.get(a);function Lb(a,t,{blocked:i,upgrade:l,blocking:o,terminated:c}={}){const h=indexedDB.open(a,t),_=fi(h);return l&&h.addEventListener("upgradeneeded",p=>{l(fi(h.result),p.oldVersion,p.newVersion,fi(h.transaction),p)}),i&&h.addEventListener("blocked",p=>i(p.oldVersion,p.newVersion,p)),_.then(p=>{c&&p.addEventListener("close",()=>c()),o&&p.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),_}const zb=["get","getKey","getAll","getAllKeys","count"],Hb=["put","add","delete","clear"],_f=new Map;function Km(a,t){if(!(a instanceof IDBDatabase&&!(t in a)&&typeof t=="string"))return;if(_f.get(t))return _f.get(t);const i=t.replace(/FromIndex$/,""),l=t!==i,o=Hb.includes(i);if(!(i in(l?IDBIndex:IDBObjectStore).prototype)||!(o||zb.includes(i)))return;const c=async function(h,..._){const p=this.transaction(h,o?"readwrite":"readonly");let m=p.store;return l&&(m=m.index(_.shift())),(await Promise.all([m[i](..._),o&&p.done]))[0]};return _f.set(t,c),c}xb(a=>({...a,get:(t,i,l)=>Km(t,i)||a.get(t,i,l),has:(t,i)=>!!Km(t,i)||a.has(t,i)}));/**
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
 */class Bb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(Pb(i)){const l=i.getImmediate();return`${l.library}/${l.version}`}else return null}).filter(i=>i).join(" ")}}function Pb(a){const t=a.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Of="@firebase/app",Zm="0.11.3";/**
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
 */const Dn=new Wf("@firebase/app"),qb="@firebase/app-compat",Vb="@firebase/analytics-compat",jb="@firebase/analytics",Gb="@firebase/app-check-compat",Yb="@firebase/app-check",Qb="@firebase/auth",Fb="@firebase/auth-compat",Xb="@firebase/database",Kb="@firebase/data-connect",Zb="@firebase/database-compat",Wb="@firebase/functions",Jb="@firebase/functions-compat",$b="@firebase/installations",eT="@firebase/installations-compat",tT="@firebase/messaging",nT="@firebase/messaging-compat",iT="@firebase/performance",sT="@firebase/performance-compat",aT="@firebase/remote-config",lT="@firebase/remote-config-compat",rT="@firebase/storage",oT="@firebase/storage-compat",uT="@firebase/firestore",cT="@firebase/vertexai",fT="@firebase/firestore-compat",hT="firebase",dT="11.5.0";/**
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
 */const Df="[DEFAULT]",_T={[Of]:"fire-core",[qb]:"fire-core-compat",[jb]:"fire-analytics",[Vb]:"fire-analytics-compat",[Yb]:"fire-app-check",[Gb]:"fire-app-check-compat",[Qb]:"fire-auth",[Fb]:"fire-auth-compat",[Xb]:"fire-rtdb",[Kb]:"fire-data-connect",[Zb]:"fire-rtdb-compat",[Wb]:"fire-fn",[Jb]:"fire-fn-compat",[$b]:"fire-iid",[eT]:"fire-iid-compat",[tT]:"fire-fcm",[nT]:"fire-fcm-compat",[iT]:"fire-perf",[sT]:"fire-perf-compat",[aT]:"fire-rc",[lT]:"fire-rc-compat",[rT]:"fire-gcs",[oT]:"fire-gcs-compat",[uT]:"fire-fst",[fT]:"fire-fst-compat",[cT]:"fire-vertex","fire-js":"fire-js",[hT]:"fire-js-all"};/**
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
 */const oo=new Map,pT=new Map,Mf=new Map;function Wm(a,t){try{a.container.addComponent(t)}catch(i){Dn.debug(`Component ${t.name} failed to register with FirebaseApp ${a.name}`,i)}}function Qs(a){const t=a.name;if(Mf.has(t))return Dn.debug(`There were multiple attempts to register component ${t}.`),!1;Mf.set(t,a);for(const i of oo.values())Wm(i,a);for(const i of pT.values())Wm(i,a);return!0}function $f(a,t){const i=a.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),a.container.getProvider(t)}function Gt(a){return a==null?!1:a.settings!==void 0}/**
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
 */const mT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hi=new Al("app","Firebase",mT);/**
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
 */class gT{constructor(t,i,l){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=l,this.container.addComponent(new Fi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw hi.create("app-deleted",{appName:this._name})}}/**
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
 */const $s=dT;function fv(a,t={}){let i=a;typeof t!="object"&&(t={name:t});const l=Object.assign({name:Df,automaticDataCollectionEnabled:!1},t),o=l.name;if(typeof o!="string"||!o)throw hi.create("bad-app-name",{appName:String(o)});if(i||(i=av()),!i)throw hi.create("no-options");const c=oo.get(o);if(c){if(Qi(i,c.options)&&Qi(l,c.config))return c;throw hi.create("duplicate-app",{appName:o})}const h=new Tb(o);for(const p of Mf.values())h.addComponent(p);const _=new gT(i,l,h);return oo.set(o,_),_}function hv(a=Df){const t=oo.get(a);if(!t&&a===Df&&av())return fv();if(!t)throw hi.create("no-app",{appName:a});return t}function di(a,t,i){var l;let o=(l=_T[a])!==null&&l!==void 0?l:a;i&&(o+=`-${i}`);const c=o.match(/\s|\//),h=t.match(/\s|\//);if(c||h){const _=[`Unable to register library "${o}" with version "${t}":`];c&&_.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&h&&_.push("and"),h&&_.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Dn.warn(_.join(" "));return}Qs(new Fi(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const vT="firebase-heartbeat-database",yT=1,_l="firebase-heartbeat-store";let pf=null;function dv(){return pf||(pf=Lb(vT,yT,{upgrade:(a,t)=>{switch(t){case 0:try{a.createObjectStore(_l)}catch(i){console.warn(i)}}}}).catch(a=>{throw hi.create("idb-open",{originalErrorMessage:a.message})})),pf}async function ET(a){try{const i=(await dv()).transaction(_l),l=await i.objectStore(_l).get(_v(a));return await i.done,l}catch(t){if(t instanceof yi)Dn.warn(t.message);else{const i=hi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Dn.warn(i.message)}}}async function Jm(a,t){try{const l=(await dv()).transaction(_l,"readwrite");await l.objectStore(_l).put(t,_v(a)),await l.done}catch(i){if(i instanceof yi)Dn.warn(i.message);else{const l=hi.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});Dn.warn(l.message)}}}function _v(a){return`${a.name}!${a.options.appId}`}/**
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
 */const ST=1024,bT=30;class TT{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new AT(i),this._heartbeatsCachePromise=this._storage.read().then(l=>(this._heartbeatsCache=l,l))}async triggerHeartbeat(){var t,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=$m();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>bT){const h=RT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(l){Dn.warn(l)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=$m(),{heartbeatsToSend:l,unsentEntries:o}=CT(this._heartbeatsCache.heartbeats),c=ao(JSON.stringify({version:2,heartbeats:l}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return Dn.warn(i),""}}}function $m(){return new Date().toISOString().substring(0,10)}function CT(a,t=ST){const i=[];let l=a.slice();for(const o of a){const c=i.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),eg(i)>t){c.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),eg(i)>t){i.pop();break}l=l.slice(1)}return{heartbeatsToSend:i,unsentEntries:l}}class AT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ob()?ub().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await ET(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return Jm(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return Jm(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function eg(a){return ao(JSON.stringify({version:2,heartbeats:a})).length}function RT(a){if(a.length===0)return-1;let t=0,i=a[0].date;for(let l=1;l<a.length;l++)a[l].date<i&&(i=a[l].date,t=l);return t}/**
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
 */function wT(a){Qs(new Fi("platform-logger",t=>new Bb(t),"PRIVATE")),Qs(new Fi("heartbeat",t=>new TT(t),"PRIVATE")),di(Of,Zm,a),di(Of,Zm,"esm2017"),di("fire-js","")}wT("");var NT="firebase",OT="11.5.0";/**
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
 */di(NT,OT,"app");function eh(a,t){var i={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&t.indexOf(l)<0&&(i[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(a);o<l.length;o++)t.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(a,l[o])&&(i[l[o]]=a[l[o]]);return i}function pv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DT=pv,mv=new Al("auth","Firebase",pv());/**
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
 */const uo=new Wf("@firebase/auth");function MT(a,...t){uo.logLevel<=ve.WARN&&uo.warn(`Auth (${$s}): ${a}`,...t)}function $r(a,...t){uo.logLevel<=ve.ERROR&&uo.error(`Auth (${$s}): ${a}`,...t)}/**
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
 */function sn(a,...t){throw nh(a,...t)}function Xt(a,...t){return nh(a,...t)}function th(a,t,i){const l=Object.assign(Object.assign({},DT()),{[t]:i});return new Al("auth","Firebase",l).create(t,{appName:a.name})}function Yi(a){return th(a,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function IT(a,t,i){const l=i;if(!(t instanceof l))throw l.name!==t.constructor.name&&sn(a,"argument-error"),th(a,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nh(a,...t){if(typeof a!="string"){const i=t[0],l=[...t.slice(1)];return l[0]&&(l[0].appName=a.name),a._errorFactory.create(i,...l)}return mv.create(a,...t)}function X(a,t,...i){if(!a)throw nh(t,...i)}function An(a){const t="INTERNAL ASSERTION FAILED: "+a;throw $r(t),new Error(t)}function Mn(a,t){a||An(t)}/**
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
 */function If(){var a;return typeof self<"u"&&((a=self.location)===null||a===void 0?void 0:a.href)||""}function xT(){return tg()==="http:"||tg()==="https:"}function tg(){var a;return typeof self<"u"&&((a=self.location)===null||a===void 0?void 0:a.protocol)||null}/**
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
 */function UT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xT()||ab()||"connection"in navigator)?navigator.onLine:!0}function kT(){if(typeof navigator>"u")return null;const a=navigator;return a.languages&&a.languages[0]||a.language||null}/**
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
 */class Rl{constructor(t,i){this.shortDelay=t,this.longDelay=i,Mn(i>t,"Short delay should be less than long delay!"),this.isMobile=Kf()||rv()}get(){return UT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ih(a,t){Mn(a.emulator,"Emulator should always be set here");const{url:i}=a.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
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
 */class gv{static initialize(t,i,l){this.fetchImpl=t,i&&(this.headersImpl=i),l&&(this.responseImpl=l)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const LT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zT=new Rl(3e4,6e4);function sh(a,t){return a.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:a.tenantId}):t}async function ea(a,t,i,l,o={}){return vv(a,o,async()=>{let c={},h={};l&&(t==="GET"?h=l:c={body:JSON.stringify(l)});const _=Js(Object.assign({key:a.config.apiKey},h)).slice(1),p=await a._getAdditionalHeaders();p["Content-Type"]="application/json",a.languageCode&&(p["X-Firebase-Locale"]=a.languageCode);const m=Object.assign({method:t,headers:p},c);return sb()||(m.referrerPolicy="no-referrer"),gv.fetch()(yv(a,a.config.apiHost,i,_),m)})}async function vv(a,t,i){a._canInitEmulator=!1;const l=Object.assign(Object.assign({},LT),t);try{const o=new BT(a),c=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw Zr(a,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const _=c.ok?h.errorMessage:h.error.message,[p,m]=_.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zr(a,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw Zr(a,"email-already-in-use",h);if(p==="USER_DISABLED")throw Zr(a,"user-disabled",h);const y=l[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw th(a,y,m);sn(a,y)}}catch(o){if(o instanceof yi)throw o;sn(a,"network-request-failed",{message:String(o)})}}async function HT(a,t,i,l,o={}){const c=await ea(a,t,i,l,o);return"mfaPendingCredential"in c&&sn(a,"multi-factor-auth-required",{_serverResponse:c}),c}function yv(a,t,i,l){const o=`${t}${i}?${l}`;return a.config.emulator?ih(a.config,o):`${a.config.apiScheme}://${o}`}class BT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,l)=>{this.timer=setTimeout(()=>l(Xt(this.auth,"network-request-failed")),zT.get())})}}function Zr(a,t,i){const l={appName:a.name};i.email&&(l.email=i.email),i.phoneNumber&&(l.phoneNumber=i.phoneNumber);const o=Xt(a,t,l);return o.customData._tokenResponse=i,o}/**
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
 */async function PT(a,t){return ea(a,"POST","/v1/accounts:delete",t)}async function Ev(a,t){return ea(a,"POST","/v1/accounts:lookup",t)}/**
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
 */function rl(a){if(a)try{const t=new Date(Number(a));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function qT(a,t=!1){const i=ft(a),l=await i.getIdToken(t),o=ah(l);X(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c==null?void 0:c.sign_in_provider;return{claims:o,token:l,authTime:rl(mf(o.auth_time)),issuedAtTime:rl(mf(o.iat)),expirationTime:rl(mf(o.exp)),signInProvider:h||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function mf(a){return Number(a)*1e3}function ah(a){const[t,i,l]=a.split(".");if(t===void 0||i===void 0||l===void 0)return $r("JWT malformed, contained fewer than 3 sections"),null;try{const o=lo(i);return o?JSON.parse(o):($r("Failed to decode base64 JWT payload"),null)}catch(o){return $r("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ng(a){const t=ah(a);return X(t,"internal-error"),X(typeof t.exp<"u","internal-error"),X(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function pl(a,t,i=!1){if(i)return t;try{return await t}catch(l){throw l instanceof yi&&VT(l)&&a.auth.currentUser===a&&await a.auth.signOut(),l}}function VT({code:a}){return a==="auth/user-disabled"||a==="auth/user-token-expired"}/**
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
 */class jT{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var i;if(t){const l=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),l}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xf{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=rl(this.lastLoginAt),this.creationTime=rl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function co(a){var t;const i=a.auth,l=await a.getIdToken(),o=await pl(a,Ev(i,{idToken:l}));X(o==null?void 0:o.users.length,i,"internal-error");const c=o.users[0];a._notifyReloadListener(c);const h=!((t=c.providerUserInfo)===null||t===void 0)&&t.length?Sv(c.providerUserInfo):[],_=YT(a.providerData,h),p=a.isAnonymous,m=!(a.email&&c.passwordHash)&&!(_!=null&&_.length),y=p?m:!1,b={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:_,metadata:new xf(c.createdAt,c.lastLoginAt),isAnonymous:y};Object.assign(a,b)}async function GT(a){const t=ft(a);await co(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function YT(a,t){return[...a.filter(l=>!t.some(o=>o.providerId===l.providerId)),...t]}function Sv(a){return a.map(t=>{var{providerId:i}=t,l=eh(t,["providerId"]);return{providerId:i,uid:l.rawId||"",displayName:l.displayName||null,email:l.email||null,phoneNumber:l.phoneNumber||null,photoURL:l.photoUrl||null}})}/**
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
 */async function QT(a,t){const i=await vv(a,{},async()=>{const l=Js({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:c}=a.config,h=yv(a,o,"/v1/token",`key=${c}`),_=await a._getAdditionalHeaders();return _["Content-Type"]="application/x-www-form-urlencoded",gv.fetch()(h,{method:"POST",headers:_,body:l})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function FT(a,t){return ea(a,"POST","/v2/accounts:revokeToken",sh(a,t))}/**
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
 */class Ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){X(t.idToken,"internal-error"),X(typeof t.idToken<"u","internal-error"),X(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ng(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){X(t.length!==0,"internal-error");const i=ng(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:l,refreshToken:o,expiresIn:c}=await QT(t,i);this.updateTokensAndExpiration(l,o,Number(c))}updateTokensAndExpiration(t,i,l){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+l*1e3}static fromJSON(t,i){const{refreshToken:l,accessToken:o,expirationTime:c}=i,h=new Ps;return l&&(X(typeof l=="string","internal-error",{appName:t}),h.refreshToken=l),o&&(X(typeof o=="string","internal-error",{appName:t}),h.accessToken=o),c&&(X(typeof c=="number","internal-error",{appName:t}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ps,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
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
 */function ri(a,t){X(typeof a=="string"||typeof a>"u","internal-error",{appName:t})}class Rn{constructor(t){var{uid:i,auth:l,stsTokenManager:o}=t,c=eh(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=l,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new xf(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(t){const i=await pl(this,this.stsTokenManager.getToken(this.auth,t));return X(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return qT(this,t)}reload(){return GT(this)}_assign(t){this!==t&&(X(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>Object.assign({},i)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new Rn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(t){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let l=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),l=!0),i&&await co(this),await this.auth._persistUserIfCurrent(this),l&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject(Yi(this.auth));const t=await this.getIdToken();return await pl(this,PT(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){var l,o,c,h,_,p,m,y;const b=(l=i.displayName)!==null&&l!==void 0?l:void 0,R=(o=i.email)!==null&&o!==void 0?o:void 0,k=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,L=(h=i.photoURL)!==null&&h!==void 0?h:void 0,Z=(_=i.tenantId)!==null&&_!==void 0?_:void 0,le=(p=i._redirectEventId)!==null&&p!==void 0?p:void 0,Fe=(m=i.createdAt)!==null&&m!==void 0?m:void 0,Xe=(y=i.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:Ae,emailVerified:$e,isAnonymous:re,providerData:Ke,stsTokenManager:et}=i;X(Ae&&et,t,"internal-error");const rt=Ps.fromJSON(this.name,et);X(typeof Ae=="string",t,"internal-error"),ri(b,t.name),ri(R,t.name),X(typeof $e=="boolean",t,"internal-error"),X(typeof re=="boolean",t,"internal-error"),ri(k,t.name),ri(L,t.name),ri(Z,t.name),ri(le,t.name),ri(Fe,t.name),ri(Xe,t.name);const ht=new Rn({uid:Ae,auth:t,email:R,emailVerified:$e,displayName:b,isAnonymous:re,photoURL:L,phoneNumber:k,tenantId:Z,stsTokenManager:rt,createdAt:Fe,lastLoginAt:Xe});return Ke&&Array.isArray(Ke)&&(ht.providerData=Ke.map(kn=>Object.assign({},kn))),le&&(ht._redirectEventId=le),ht}static async _fromIdTokenResponse(t,i,l=!1){const o=new Ps;o.updateFromServerResponse(i);const c=new Rn({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:l});return await co(c),c}static async _fromGetAccountInfoResponse(t,i,l){const o=i.users[0];X(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Sv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),_=new Ps;_.updateFromIdToken(l);const p=new Rn({uid:o.localId,auth:t,stsTokenManager:_,isAnonymous:h}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new xf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(p,m),p}}/**
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
 */const ig=new Map;function wn(a){Mn(a instanceof Function,"Expected a class definition");let t=ig.get(a);return t?(Mn(t instanceof a,"Instance stored in cache mismatched with class"),t):(t=new a,ig.set(a,t),t)}/**
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
 */class bv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}bv.type="NONE";const sg=bv;/**
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
 */function eo(a,t,i){return`firebase:${a}:${t}:${i}`}class qs{constructor(t,i,l){this.persistence=t,this.auth=i,this.userKey=l;const{config:o,name:c}=this.auth;this.fullUserKey=eo(this.userKey,o.apiKey,c),this.fullPersistenceKey=eo("persistence",o.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Rn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,l="authUser"){if(!i.length)return new qs(wn(sg),t,l);const o=(await Promise.all(i.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let c=o[0]||wn(sg);const h=eo(l,t.config.apiKey,t.name);let _=null;for(const m of i)try{const y=await m._get(h);if(y){const b=Rn._fromJSON(t,y);m!==c&&(_=b),c=m;break}}catch{}const p=o.filter(m=>m._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new qs(c,t,l):(c=p[0],_&&await c._set(h,_.toJSON()),await Promise.all(i.map(async m=>{if(m!==c)try{await m._remove(h)}catch{}})),new qs(c,t,l))}}/**
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
 */function ag(a){const t=a.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Rv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Tv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Nv(t))return"Blackberry";if(Ov(t))return"Webos";if(Cv(t))return"Safari";if((t.includes("chrome/")||Av(t))&&!t.includes("edge/"))return"Chrome";if(wv(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,l=a.match(i);if((l==null?void 0:l.length)===2)return l[1]}return"Other"}function Tv(a=ct()){return/firefox\//i.test(a)}function Cv(a=ct()){const t=a.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Av(a=ct()){return/crios\//i.test(a)}function Rv(a=ct()){return/iemobile/i.test(a)}function wv(a=ct()){return/android/i.test(a)}function Nv(a=ct()){return/blackberry/i.test(a)}function Ov(a=ct()){return/webos/i.test(a)}function lh(a=ct()){return/iphone|ipad|ipod/i.test(a)||/macintosh/i.test(a)&&/mobile/i.test(a)}function XT(a=ct()){var t;return lh(a)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function KT(){return lb()&&document.documentMode===10}function Dv(a=ct()){return lh(a)||wv(a)||Ov(a)||Nv(a)||/windows phone/i.test(a)||Rv(a)}/**
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
 */function Mv(a,t=[]){let i;switch(a){case"Browser":i=ag(ct());break;case"Worker":i=`${ag(ct())}-${a}`;break;default:i=a}const l=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${$s}/${l}`}/**
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
 */class ZT{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const l=c=>new Promise((h,_)=>{try{const p=t(c);h(p)}catch(p){_(p)}});l.onAbort=i,this.queue.push(l);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const l of this.queue)await l(t),l.onAbort&&i.push(l.onAbort)}catch(l){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:l==null?void 0:l.message})}}}/**
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
 */async function WT(a,t={}){return ea(a,"GET","/v2/passwordPolicy",sh(a,t))}/**
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
 */const JT=6;class $T{constructor(t){var i,l,o,c;const h=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=h.minPasswordLength)!==null&&i!==void 0?i:JT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(l=t.allowedNonAlphanumericCharacters)===null||l===void 0?void 0:l.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=t.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var i,l,o,c,h,_;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,p),this.validatePasswordCharacterOptions(t,p),p.isValid&&(p.isValid=(i=p.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(l=p.meetsMaxPasswordLength)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(c=p.containsUppercaseLetter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(_=p.containsNonAlphanumericCharacter)!==null&&_!==void 0?_:!0),p}validatePasswordLengthOptions(t,i){const l=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;l&&(i.meetsMinPasswordLength=t.length>=l),o&&(i.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let l;for(let o=0;o<t.length;o++)l=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,l>="a"&&l<="z",l>="A"&&l<="Z",l>="0"&&l<="9",this.allowedNonAlphanumericCharacters.includes(l))}updatePasswordCharacterOptionsStatuses(t,i,l,o,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=l)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
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
 */class eC{constructor(t,i,l,o){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=l,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lg(this),this.idTokenSubscription=new lg(this),this.beforeStateQueue=new ZT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=wn(i)),this._initializationPromise=this.queue(async()=>{var l,o;if(!this._deleted&&(this.persistenceManager=await qs.create(this,t),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await Ev(this,{idToken:t}),l=await Rn._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(l)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var i;if(Gt(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(_=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(_,_))}):this.directlySetCurrentUser(null)}const l=await this.assertedPersistence.getCurrentUser();let o=l,c=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,_=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(t);(!h||h===_)&&(p!=null&&p.user)&&(o=p.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=l,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await co(t)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=kT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Gt(this.app))return Promise.reject(Yi(this));const i=t?ft(t):null;return i&&X(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&X(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject(Yi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Gt(this.app)?Promise.reject(Yi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await WT(this),i=new $T(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Al("auth","Firebase",t())}onAuthStateChanged(t,i,l){return this.registerStateListener(this.authStateSubscription,t,i,l)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,l){return this.registerStateListener(this.idTokenSubscription,t,i,l)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const l=this.onAuthStateChanged(()=>{l(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),l={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(l.tenantId=this.tenantId),await FT(this,l)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,i){const l=await this.getOrInitRedirectPersistenceManager(i);return t===null?l.removeCurrentUser():l.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&wn(t)||this._popupRedirectResolver;X(i,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[wn(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var i,l;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===t?this._currentUser:((l=this.redirectUser)===null||l===void 0?void 0:l._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const l=(i=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==l&&(this.lastNotifiedUid=l,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,l,o){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let h=!1;const _=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(_,this,"internal-error"),_.then(()=>{h||c(this.currentUser)}),typeof i=="function"){const p=t.addObserver(i,l,o);return()=>{h=!0,p()}}else{const p=t.addObserver(i);return()=>{h=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Mv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const l=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());l&&(i["X-Firebase-Client"]=l);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var t;if(Gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return i!=null&&i.error&&MT(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function Do(a){return ft(a)}class lg{constructor(t){this.auth=t,this.observer=null,this.addObserver=mb(i=>this.observer=i)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let rh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tC(a){rh=a}function nC(a){return rh.loadJS(a)}function iC(){return rh.gapiScript}function sC(a){return`__${a}${Math.floor(Math.random()*1e6)}`}/**
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
 */function aC(a,t){const i=$f(a,"auth");if(i.isInitialized()){const o=i.getImmediate(),c=i.getOptions();if(Qi(c,t??{}))return o;sn(o,"already-initialized")}return i.initialize({options:t})}function lC(a,t){const i=(t==null?void 0:t.persistence)||[],l=(Array.isArray(i)?i:[i]).map(wn);t!=null&&t.errorMap&&a._updateErrorMap(t.errorMap),a._initializeWithPersistence(l,t==null?void 0:t.popupRedirectResolver)}function rC(a,t,i){const l=Do(a);X(/^https?:\/\//.test(t),l,"invalid-emulator-scheme");const o=!1,c=Iv(t),{host:h,port:_}=oC(t),p=_===null?"":`:${_}`,m={url:`${c}//${h}${p}/`},y=Object.freeze({host:h,port:_,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!l._canInitEmulator){X(l.config.emulator&&l.emulatorConfig,l,"emulator-config-failed"),X(Qi(m,l.config.emulator)&&Qi(y,l.emulatorConfig),l,"emulator-config-failed");return}l.config.emulator=m,l.emulatorConfig=y,l.settings.appVerificationDisabledForTesting=!0,uC()}function Iv(a){const t=a.indexOf(":");return t<0?"":a.substr(0,t+1)}function oC(a){const t=Iv(a),i=/(\/\/)?([^?#/]+)/.exec(a.substr(t.length));if(!i)return{host:"",port:null};const l=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(l);if(o){const c=o[1];return{host:c,port:rg(l.substr(c.length+1))}}else{const[c,h]=l.split(":");return{host:c,port:rg(h)}}}function rg(a){if(!a)return null;const t=Number(a);return isNaN(t)?null:t}function uC(){function a(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",a):a())}/**
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
 */class xv{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return An("not implemented")}_getIdTokenResponse(t){return An("not implemented")}_linkToIdToken(t,i){return An("not implemented")}_getReauthenticationResolver(t){return An("not implemented")}}/**
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
 */async function Vs(a,t){return HT(a,"POST","/v1/accounts:signInWithIdp",sh(a,t))}/**
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
 */const cC="http://localhost";class Xi extends xv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new Xi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):sn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:l,signInMethod:o}=i,c=eh(i,["providerId","signInMethod"]);if(!l||!o)return null;const h=new Xi(l,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(t){const i=this.buildRequest();return Vs(t,i)}_linkToIdToken(t,i){const l=this.buildRequest();return l.idToken=i,Vs(t,l)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Vs(t,i)}buildRequest(){const t={requestUri:cC,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=Js(i)}return t}}/**
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
 */class oh{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wl extends oh{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class oi extends wl{constructor(){super("facebook.com")}static credential(t){return Xi._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return oi.credentialFromTaggedObject(t)}static credentialFromError(t){return oi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return oi.credential(t.oauthAccessToken)}catch{return null}}}oi.FACEBOOK_SIGN_IN_METHOD="facebook.com";oi.PROVIDER_ID="facebook.com";/**
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
 */class bn extends wl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return Xi._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return bn.credentialFromTaggedObject(t)}static credentialFromError(t){return bn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:l}=t;if(!i&&!l)return null;try{return bn.credential(i,l)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
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
 */class ui extends wl{constructor(){super("github.com")}static credential(t){return Xi._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ui.credentialFromTaggedObject(t)}static credentialFromError(t){return ui.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ui.credential(t.oauthAccessToken)}catch{return null}}}ui.GITHUB_SIGN_IN_METHOD="github.com";ui.PROVIDER_ID="github.com";/**
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
 */class ci extends wl{constructor(){super("twitter.com")}static credential(t,i){return Xi._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return ci.credentialFromTaggedObject(t)}static credentialFromError(t){return ci.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:l}=t;if(!i||!l)return null;try{return ci.credential(i,l)}catch{return null}}}ci.TWITTER_SIGN_IN_METHOD="twitter.com";ci.PROVIDER_ID="twitter.com";/**
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
 */class Fs{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,l,o=!1){const c=await Rn._fromIdTokenResponse(t,l,o),h=og(l);return new Fs({user:c,providerId:h,_tokenResponse:l,operationType:i})}static async _forOperation(t,i,l){await t._updateTokensIfNecessary(l,!0);const o=og(l);return new Fs({user:t,providerId:o,_tokenResponse:l,operationType:i})}}function og(a){return a.providerId?a.providerId:"phoneNumber"in a?"phone":null}/**
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
 */class fo extends yi{constructor(t,i,l,o){var c;super(i.code,i.message),this.operationType=l,this.user=o,Object.setPrototypeOf(this,fo.prototype),this.customData={appName:t.name,tenantId:(c=t.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:l}}static _fromErrorAndOperation(t,i,l,o){return new fo(t,i,l,o)}}function Uv(a,t,i,l){return(t==="reauthenticate"?i._getReauthenticationResolver(a):i._getIdTokenResponse(a)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?fo._fromErrorAndOperation(a,c,t,l):c})}async function fC(a,t,i=!1){const l=await pl(a,t._linkToIdToken(a.auth,await a.getIdToken()),i);return Fs._forOperation(a,"link",l)}/**
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
 */async function hC(a,t,i=!1){const{auth:l}=a;if(Gt(l.app))return Promise.reject(Yi(l));const o="reauthenticate";try{const c=await pl(a,Uv(l,o,t,a),i);X(c.idToken,l,"internal-error");const h=ah(c.idToken);X(h,l,"internal-error");const{sub:_}=h;return X(a.uid===_,l,"user-mismatch"),Fs._forOperation(a,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&sn(l,"user-mismatch"),c}}/**
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
 */async function dC(a,t,i=!1){if(Gt(a.app))return Promise.reject(Yi(a));const l="signIn",o=await Uv(a,l,t),c=await Fs._fromIdTokenResponse(a,l,o);return i||await a._updateCurrentUser(c.user),c}function _C(a,t,i,l){return ft(a).onIdTokenChanged(t,i,l)}function pC(a,t,i){return ft(a).beforeAuthStateChanged(t,i)}function mC(a,t,i,l){return ft(a).onAuthStateChanged(t,i,l)}function gC(a){return ft(a).signOut()}const ho="__sak";/**
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
 */class kv{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(ho,"1"),this.storage.removeItem(ho),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const vC=1e3,yC=10;class Lv extends kv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const l=this.storage.getItem(i),o=this.localCache[i];l!==o&&t(i,o,l)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((h,_,p)=>{this.notifyListeners(h,p)});return}const l=t.key;i?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(l);!i&&this.localCache[l]===h||this.notifyListeners(l,h)},c=this.storage.getItem(l);KT()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,yC):o()}notifyListeners(t,i){this.localCache[t]=i;const l=this.listeners[t];if(l)for(const o of Array.from(l))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,l)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:l}),!0)})},vC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}Lv.type="LOCAL";const EC=Lv;/**
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
 */class zv extends kv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}zv.type="SESSION";const Hv=zv;/**
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
 */function SC(a){return Promise.all(a.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class Mo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(o=>o.isListeningto(t));if(i)return i;const l=new Mo(t);return this.receivers.push(l),l}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:l,eventType:o,data:c}=i.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;i.ports[0].postMessage({status:"ack",eventId:l,eventType:o});const _=Array.from(h).map(async m=>m(i.origin,c)),p=await SC(_);i.ports[0].postMessage({status:"done",eventId:l,eventType:o,response:p})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mo.receivers=[];/**
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
 */function uh(a="",t=10){let i="";for(let l=0;l<t;l++)i+=Math.floor(Math.random()*10);return a+i}/**
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
 */class bC{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,l=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((_,p)=>{const m=uh("",20);o.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},l);h={messageChannel:o,onMessage(b){const R=b;if(R.data.eventId===m)switch(R.data.status){case"ack":clearTimeout(y),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),_(R.data.response);break;default:clearTimeout(y),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:m,data:i},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function nn(){return window}function TC(a){nn().location.href=a}/**
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
 */function Bv(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function CC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AC(){var a;return((a=navigator==null?void 0:navigator.serviceWorker)===null||a===void 0?void 0:a.controller)||null}function RC(){return Bv()?self:null}/**
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
 */const Pv="firebaseLocalStorageDb",wC=1,_o="firebaseLocalStorage",qv="fbase_key";class Nl{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Io(a,t){return a.transaction([_o],t?"readwrite":"readonly").objectStore(_o)}function NC(){const a=indexedDB.deleteDatabase(Pv);return new Nl(a).toPromise()}function Uf(){const a=indexedDB.open(Pv,wC);return new Promise((t,i)=>{a.addEventListener("error",()=>{i(a.error)}),a.addEventListener("upgradeneeded",()=>{const l=a.result;try{l.createObjectStore(_o,{keyPath:qv})}catch(o){i(o)}}),a.addEventListener("success",async()=>{const l=a.result;l.objectStoreNames.contains(_o)?t(l):(l.close(),await NC(),t(await Uf()))})})}async function ug(a,t,i){const l=Io(a,!0).put({[qv]:t,value:i});return new Nl(l).toPromise()}async function OC(a,t){const i=Io(a,!1).get(t),l=await new Nl(i).toPromise();return l===void 0?null:l.value}function cg(a,t){const i=Io(a,!0).delete(t);return new Nl(i).toPromise()}const DC=800,MC=3;class Vv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uf(),this.db)}async _withRetries(t){let i=0;for(;;)try{const l=await this._openDb();return await t(l)}catch(l){if(i++>MC)throw l;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mo._getInstance(RC()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await CC(),!this.activeServiceWorker)return;this.sender=new bC(this.activeServiceWorker);const l=await this.sender._send("ping",{},800);l&&!((t=l[0])===null||t===void 0)&&t.fulfilled&&!((i=l[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||AC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Uf();return await ug(t,ho,"1"),await cg(t,ho),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(l=>ug(l,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(l=>OC(l,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>cg(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const c=Io(o,!1).getAll();return new Nl(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],l=new Set;if(t.length!==0)for(const{fbase_key:o,value:c}of t)l.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!l.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(t,i){this.localCache[t]=i;const l=this.listeners[t];if(l)for(const o of Array.from(l))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vv.type="LOCAL";const IC=Vv;new Rl(3e4,6e4);/**
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
 */function jv(a,t){return t?wn(t):(X(a._popupRedirectResolver,a,"argument-error"),a._popupRedirectResolver)}/**
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
 */class ch extends xv{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Vs(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Vs(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Vs(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function xC(a){return dC(a.auth,new ch(a),a.bypassAuthState)}function UC(a){const{auth:t,user:i}=a;return X(i,t,"internal-error"),hC(i,new ch(a),a.bypassAuthState)}async function kC(a){const{auth:t,user:i}=a;return X(i,t,"internal-error"),fC(i,new ch(a),a.bypassAuthState)}/**
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
 */class Gv{constructor(t,i,l,o,c=!1){this.auth=t,this.resolver=l,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(l){this.reject(l)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:l,postBody:o,tenantId:c,error:h,type:_}=t;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:i,sessionId:l,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(_)(p))}catch(m){this.reject(m)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return xC;case"linkViaPopup":case"linkViaRedirect":return kC;case"reauthViaPopup":case"reauthViaRedirect":return UC;default:sn(this.auth,"internal-error")}}resolve(t){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const LC=new Rl(2e3,1e4);async function zC(a,t,i){if(Gt(a.app))return Promise.reject(Xt(a,"operation-not-supported-in-this-environment"));const l=Do(a);IT(a,t,oh);const o=jv(l,i);return new Vi(l,"signInViaPopup",t,o).executeNotNull()}class Vi extends Gv{constructor(t,i,l,o,c){super(t,i,o,c),this.provider=l,this.authWindow=null,this.pollId=null,Vi.currentPopupAction&&Vi.currentPopupAction.cancel(),Vi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return X(t,this.auth,"internal-error"),t}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const t=uh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var i,l;if(!((l=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||l===void 0)&&l.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,LC.get())};t()}}Vi.currentPopupAction=null;/**
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
 */const HC="pendingRedirect",to=new Map;class BC extends Gv{constructor(t,i,l=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,l),this.eventId=null}async execute(){let t=to.get(this.auth._key());if(!t){try{const l=await PC(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(l)}catch(i){t=()=>Promise.reject(i)}to.set(this.auth._key(),t)}return this.bypassAuthState||to.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PC(a,t){const i=jC(t),l=VC(a);if(!await l._isAvailable())return!1;const o=await l._get(i)==="true";return await l._remove(i),o}function qC(a,t){to.set(a._key(),t)}function VC(a){return wn(a._redirectPersistence)}function jC(a){return eo(HC,a.config.apiKey,a.name)}async function GC(a,t,i=!1){if(Gt(a.app))return Promise.reject(Yi(a));const l=Do(a),o=jv(l,t),h=await new BC(l,o,i).execute();return h&&!i&&(delete h.user._redirectEventId,await l._persistUserIfCurrent(h.user),await l._setRedirectUser(null,t)),h}/**
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
 */const YC=10*60*1e3;class QC{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(l=>{this.isEventForConsumer(t,l)&&(i=!0,this.sendToConsumer(t,l),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!FC(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){var l;if(t.error&&!Yv(t)){const o=((l=t.error.code)===null||l===void 0?void 0:l.split("auth/")[1])||"internal-error";i.onError(Xt(this.auth,o))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const l=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&l}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=YC&&this.cachedEventUids.clear(),this.cachedEventUids.has(fg(t))}saveEventToCache(t){this.cachedEventUids.add(fg(t)),this.lastProcessedEventTime=Date.now()}}function fg(a){return[a.type,a.eventId,a.sessionId,a.tenantId].filter(t=>t).join("-")}function Yv({type:a,error:t}){return a==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function FC(a){switch(a.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yv(a);default:return!1}}/**
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
 */async function XC(a,t={}){return ea(a,"GET","/v1/projects",t)}/**
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
 */const KC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZC=/^https?/;async function WC(a){if(a.config.emulator)return;const{authorizedDomains:t}=await XC(a);for(const i of t)try{if(JC(i))return}catch{}sn(a,"unauthorized-domain")}function JC(a){const t=If(),{protocol:i,hostname:l}=new URL(t);if(a.startsWith("chrome-extension://")){const h=new URL(a);return h.hostname===""&&l===""?i==="chrome-extension:"&&a.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===l}if(!ZC.test(i))return!1;if(KC.test(a))return l===a;const o=a.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(l)}/**
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
 */const $C=new Rl(3e4,6e4);function hg(){const a=nn().___jsl;if(a!=null&&a.H){for(const t of Object.keys(a.H))if(a.H[t].r=a.H[t].r||[],a.H[t].L=a.H[t].L||[],a.H[t].r=[...a.H[t].L],a.CP)for(let i=0;i<a.CP.length;i++)a.CP[i]=null}}function eA(a){return new Promise((t,i)=>{var l,o,c;function h(){hg(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{hg(),i(Xt(a,"network-request-failed"))},timeout:$C.get()})}if(!((o=(l=nn().gapi)===null||l===void 0?void 0:l.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((c=nn().gapi)===null||c===void 0)&&c.load)h();else{const _=sC("iframefcb");return nn()[_]=()=>{gapi.load?h():i(Xt(a,"network-request-failed"))},nC(`${iC()}?onload=${_}`).catch(p=>i(p))}}).catch(t=>{throw no=null,t})}let no=null;function tA(a){return no=no||eA(a),no}/**
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
 */const nA=new Rl(5e3,15e3),iA="__/auth/iframe",sA="emulator/auth/iframe",aA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rA(a){const t=a.config;X(t.authDomain,a,"auth-domain-config-required");const i=t.emulator?ih(t,sA):`https://${a.config.authDomain}/${iA}`,l={apiKey:t.apiKey,appName:a.name,v:$s},o=lA.get(a.config.apiHost);o&&(l.eid=o);const c=a._getFrameworks();return c.length&&(l.fw=c.join(",")),`${i}?${Js(l).slice(1)}`}async function oA(a){const t=await tA(a),i=nn().gapi;return X(i,a,"internal-error"),t.open({where:document.body,url:rA(a),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aA,dontclear:!0},l=>new Promise(async(o,c)=>{await l.restyle({setHideOnLeave:!1});const h=Xt(a,"network-request-failed"),_=nn().setTimeout(()=>{c(h)},nA.get());function p(){nn().clearTimeout(_),o(l)}l.ping(p).then(p,()=>{c(h)})}))}/**
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
 */const uA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cA=500,fA=600,hA="_blank",dA="http://localhost";class dg{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _A(a,t,i,l=cA,o=fA){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-l)/2,0).toString();let _="";const p=Object.assign(Object.assign({},uA),{width:l.toString(),height:o.toString(),top:c,left:h}),m=ct().toLowerCase();i&&(_=Av(m)?hA:i),Tv(m)&&(t=t||dA,p.scrollbars="yes");const y=Object.entries(p).reduce((R,[k,L])=>`${R}${k}=${L},`,"");if(XT(m)&&_!=="_self")return pA(t||"",_),new dg(null);const b=window.open(t||"",_,y);X(b,a,"popup-blocked");try{b.focus()}catch{}return new dg(b)}function pA(a,t){const i=document.createElement("a");i.href=a,i.target=t;const l=document.createEvent("MouseEvent");l.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(l)}/**
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
 */const mA="__/auth/handler",gA="emulator/auth/handler",vA=encodeURIComponent("fac");async function _g(a,t,i,l,o,c){X(a.config.authDomain,a,"auth-domain-config-required"),X(a.config.apiKey,a,"invalid-api-key");const h={apiKey:a.config.apiKey,appName:a.name,authType:i,redirectUrl:l,v:$s,eventId:o};if(t instanceof oh){t.setDefaultLanguage(a.languageCode),h.providerId=t.providerId||"",Rf(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[y,b]of Object.entries({}))h[y]=b}if(t instanceof wl){const y=t.getScopes().filter(b=>b!=="");y.length>0&&(h.scopes=y.join(","))}a.tenantId&&(h.tid=a.tenantId);const _=h;for(const y of Object.keys(_))_[y]===void 0&&delete _[y];const p=await a._getAppCheckToken(),m=p?`#${vA}=${encodeURIComponent(p)}`:"";return`${yA(a)}?${Js(_).slice(1)}${m}`}function yA({config:a}){return a.emulator?ih(a,gA):`https://${a.authDomain}/${mA}`}/**
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
 */const gf="webStorageSupport";class EA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hv,this._completeRedirectFn=GC,this._overrideRedirectResult=qC}async _openPopup(t,i,l,o){var c;Mn((c=this.eventManagers[t._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await _g(t,i,l,If(),o);return _A(t,h,uh())}async _openRedirect(t,i,l,o){await this._originValidation(t);const c=await _g(t,i,l,If(),o);return TC(c),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:o,promise:c}=this.eventManagers[i];return o?Promise.resolve(o):(Mn(c,"If manager is not set, promise should be"),c)}const l=this.initAndGetManager(t);return this.eventManagers[i]={promise:l},l.catch(()=>{delete this.eventManagers[i]}),l}async initAndGetManager(t){const i=await oA(t),l=new QC(t);return i.register("authEvent",o=>(X(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:l.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:l},this.iframes[t._key()]=i,l}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(gf,{type:gf},o=>{var c;const h=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[gf];h!==void 0&&i(!!h),sn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=WC(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return Dv()||Cv()||lh()}}const SA=EA;var pg="@firebase/auth",mg="1.9.1";/**
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
 */class bA{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(l=>{t((l==null?void 0:l.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function TA(a){switch(a){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CA(a){Qs(new Fi("auth",(t,{options:i})=>{const l=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:h,authDomain:_}=l.options;X(h&&!h.includes(":"),"invalid-api-key",{appName:l.name});const p={apiKey:h,authDomain:_,clientPlatform:a,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mv(a)},m=new eC(l,o,c,p);return lC(m,i),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,l)=>{t.getProvider("auth-internal").initialize()})),Qs(new Fi("auth-internal",t=>{const i=Do(t.getProvider("auth").getImmediate());return(l=>new bA(l))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),di(pg,mg,TA(a)),di(pg,mg,"esm2017")}/**
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
 */const AA=5*60,RA=lv("authIdTokenMaxAge")||AA;let gg=null;const wA=a=>async t=>{const i=t&&await t.getIdTokenResult(),l=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(l&&l>RA)return;const o=i==null?void 0:i.token;gg!==o&&(gg=o,await fetch(a,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function NA(a=hv()){const t=$f(a,"auth");if(t.isInitialized())return t.getImmediate();const i=aC(a,{popupRedirectResolver:SA,persistence:[IC,EC,Hv]}),l=lv("authTokenSyncURL");if(l&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(l,location.origin);if(location.origin===c.origin){const h=wA(c.toString());pC(i,h,()=>h(i.currentUser)),_C(i,_=>h(_))}}const o=sv("auth");return o&&rC(i,`http://${o}`),i}function OA(){var a,t;return(t=(a=document.getElementsByTagName("head"))===null||a===void 0?void 0:a[0])!==null&&t!==void 0?t:document}tC({loadJS(a){return new Promise((t,i)=>{const l=document.createElement("script");l.setAttribute("src",a),l.onload=t,l.onerror=o=>{const c=Xt("internal-error");c.customData=o,i(c)},l.type="text/javascript",l.charset="UTF-8",OA().appendChild(l)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CA("Browser");var vg={};const yg="@firebase/database",Eg="1.0.14";/**
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
 */let Qv="";function DA(a){Qv=a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,i){i==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),He(i))}get(t){const i=this.domStorage_.getItem(this.prefixedName_(t));return i==null?null:dl(i)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,i){i==null?delete this.cache_[t]:this.cache_[t]=i}get(t){return xn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=function(a){try{if(typeof window<"u"&&typeof window[a]<"u"){const t=window[a];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new MA(t)}}catch{}return new IA},ji=Fv("localStorage"),xA=Fv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new Wf("@firebase/database"),UA=function(){let a=1;return function(){return a++}}(),Xv=function(a){const t=yb(a),i=new pb;i.update(t);const l=i.digest();return Ff.encodeByteArray(l)},Ol=function(...a){let t="";for(let i=0;i<a.length;i++){const l=a[i];Array.isArray(l)||l&&typeof l=="object"&&typeof l.length=="number"?t+=Ol.apply(null,l):typeof l=="object"?t+=He(l):t+=l,t+=" "}return t};let ol=null,Sg=!0;const kA=function(a,t){U(!0,"Can't turn on custom loggers persistently."),js.logLevel=ve.VERBOSE,ol=js.log.bind(js)},lt=function(...a){if(Sg===!0&&(Sg=!1,ol===null&&xA.get("logging_enabled")===!0&&kA()),ol){const t=Ol.apply(null,a);ol(t)}},Dl=function(a){return function(...t){lt(a,...t)}},kf=function(...a){const t="FIREBASE INTERNAL ERROR: "+Ol(...a);js.error(t)},In=function(...a){const t=`FIREBASE FATAL ERROR: ${Ol(...a)}`;throw js.error(t),new Error(t)},Et=function(...a){const t="FIREBASE WARNING: "+Ol(...a);js.warn(t)},LA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Kv=function(a){return typeof a=="number"&&(a!==a||a===Number.POSITIVE_INFINITY||a===Number.NEGATIVE_INFINITY)},zA=function(a){if(document.readyState==="complete")a();else{let t=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}t||(t=!0,a())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},Xs="[MIN_NAME]",Ki="[MAX_NAME]",ta=function(a,t){if(a===t)return 0;if(a===Xs||t===Ki)return-1;if(t===Xs||a===Ki)return 1;{const i=bg(a),l=bg(t);return i!==null?l!==null?i-l===0?a.length-t.length:i-l:-1:l!==null?1:a<t?-1:1}},HA=function(a,t){return a===t?0:a<t?-1:1},il=function(a,t){if(t&&a in t)return t[a];throw new Error("Missing required key ("+a+") in object: "+He(t))},fh=function(a){if(typeof a!="object"||a===null)return He(a);const t=[];for(const l in a)t.push(l);t.sort();let i="{";for(let l=0;l<t.length;l++)l!==0&&(i+=","),i+=He(t[l]),i+=":",i+=fh(a[t[l]]);return i+="}",i},Zv=function(a,t){const i=a.length;if(i<=t)return[a];const l=[];for(let o=0;o<i;o+=t)o+t>i?l.push(a.substring(o,i)):l.push(a.substring(o,o+t));return l};function St(a,t){for(const i in a)a.hasOwnProperty(i)&&t(i,a[i])}const Wv=function(a){U(!Kv(a),"Invalid JSON number");const t=11,i=52,l=(1<<t-1)-1;let o,c,h,_,p;a===0?(c=0,h=0,o=1/a===-1/0?1:0):(o=a<0,a=Math.abs(a),a>=Math.pow(2,1-l)?(_=Math.min(Math.floor(Math.log(a)/Math.LN2),l),c=_+l,h=Math.round(a*Math.pow(2,i-_)-Math.pow(2,i))):(c=0,h=Math.round(a/Math.pow(2,1-l-i))));const m=[];for(p=i;p;p-=1)m.push(h%2?1:0),h=Math.floor(h/2);for(p=t;p;p-=1)m.push(c%2?1:0),c=Math.floor(c/2);m.push(o?1:0),m.reverse();const y=m.join("");let b="";for(p=0;p<64;p+=8){let R=parseInt(y.substr(p,8),2).toString(16);R.length===1&&(R="0"+R),b=b+R}return b.toLowerCase()},BA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},PA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function qA(a,t){let i="Unknown Error";a==="too_big"?i="The data requested exceeds the maximum size that can be accessed with a single request.":a==="permission_denied"?i="Client doesn't have permission to access the desired data.":a==="unavailable"&&(i="The service is unavailable");const l=new Error(a+" at "+t._path.toString()+": "+i);return l.code=a.toUpperCase(),l}const VA=new RegExp("^-?(0*)\\d{1,10}$"),jA=-2147483648,GA=2147483647,bg=function(a){if(VA.test(a)){const t=Number(a);if(t>=jA&&t<=GA)return t}return null},na=function(a){try{a()}catch(t){setTimeout(()=>{const i=t.stack||"";throw Et("Exception was thrown by user callback.",i),t},Math.floor(0))}},YA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ul=function(a,t){const i=setTimeout(a,t);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
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
 */class QA{constructor(t,i){this.appCheckProvider=i,this.appName=t.name,Gt(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=i==null?void 0:i.getImmediate({optional:!0}),this.appCheck||i==null||i.get().then(l=>this.appCheck=l)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((i,l)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(i,l):i(null)},0)})}addTokenChangeListener(t){var i;(i=this.appCheckProvider)===null||i===void 0||i.get().then(l=>l.addTokenListener(t))}notifyForInvalidToken(){Et(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(t,i,l){this.appName_=t,this.firebaseOptions_=i,this.authProvider_=l,this.auth_=null,this.auth_=l.getImmediate({optional:!0}),this.auth_||l.onInit(o=>this.auth_=o)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(i=>i&&i.code==="auth/token-not-initialized"?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,l)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(i,l):i(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(i=>i.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(i=>i.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Et(t)}}class io{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}io.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="5",Jv="v",$v="s",ey="r",ty="f",ny=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,iy="ls",sy="p",Lf="ac",ay="websocket",ly="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(t,i,l,o,c=!1,h="",_=!1,p=!1,m=null){this.secure=i,this.namespace=l,this.webSocketOnly=o,this.nodeAdmin=c,this.persistenceKey=h,this.includeNamespaceInQueryParams=_,this.isUsingEmulator=p,this.emulatorOptions=m,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ji.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&ji.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${i}`}}function XA(a){return a.host!==a.internalHost||a.isCustomHost()||a.includeNamespaceInQueryParams}function oy(a,t,i){U(typeof t=="string","typeof type must == string"),U(typeof i=="object","typeof params must == object");let l;if(t===ay)l=(a.secure?"wss://":"ws://")+a.internalHost+"/.ws?";else if(t===ly)l=(a.secure?"https://":"http://")+a.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);XA(a)&&(i.ns=a.namespace);const o=[];return St(i,(c,h)=>{o.push(c+"="+h)}),l+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(){this.counters_={}}incrementCounter(t,i=1){xn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=i}get(){return ZS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf={},yf={};function dh(a){const t=a.toString();return vf[t]||(vf[t]=new KA),vf[t]}function ZA(a,t){const i=a.toString();return yf[i]||(yf[i]=t()),yf[i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,i){this.closeAfterResponse=t,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,i){for(this.pendingResponses[t]=i;this.pendingResponses[this.currentResponseNum];){const l=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<l.length;++o)l[o]&&na(()=>{this.onMessage_(l[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="start",JA="close",$A="pLPCommand",eR="pRTLPCB",uy="id",cy="pw",fy="ser",tR="cb",nR="seg",iR="ts",sR="d",aR="dframe",hy=1870,dy=30,lR=hy-dy,rR=25e3,oR=3e4;class Bs{constructor(t,i,l,o,c,h,_){this.connId=t,this.repoInfo=i,this.applicationId=l,this.appCheckToken=o,this.authToken=c,this.transportSessionId=h,this.lastSessionId=_,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Dl(t),this.stats_=dh(i),this.urlFn=p=>(this.appCheckToken&&(p[Lf]=this.appCheckToken),oy(i,ly,p))}open(t,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new WA(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(oR)),zA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new _h((...c)=>{const[h,_,p,m,y]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===Tg)this.id=_,this.password=p;else if(h===JA)_?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(_,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...c)=>{const[h,_]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(h,_)},()=>{this.onClosed_()},this.urlFn);const l={};l[Tg]="t",l[fy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(l[tR]=this.scriptTagHolder.uniqueCallbackIdentifier),l[Jv]=hh,this.transportSessionId&&(l[$v]=this.transportSessionId),this.lastSessionId&&(l[iy]=this.lastSessionId),this.applicationId&&(l[sy]=this.applicationId),this.appCheckToken&&(l[Lf]=this.appCheckToken),typeof location<"u"&&location.hostname&&ny.test(location.hostname)&&(l[ey]=ty);const o=this.urlFn(l);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bs.forceAllow_=!0}static forceDisallow(){Bs.forceDisallow_=!0}static isAvailable(){return Bs.forceAllow_?!0:!Bs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!BA()&&!PA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const i=He(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const l=nv(i),o=Zv(l,lR);for(let c=0;c<o.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[c]),this.curSegmentNum++}addDisconnectPingFrame(t,i){this.myDisconnFrame=document.createElement("iframe");const l={};l[aR]="t",l[uy]=t,l[cy]=i,this.myDisconnFrame.src=this.urlFn(l),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const i=He(t).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class _h{constructor(t,i,l,o){this.onDisconnect=l,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=UA(),window[$A+this.uniqueCallbackIdentifier]=t,window[eR+this.uniqueCallbackIdentifier]=i,this.myIFrame=_h.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(_){lt("frame writing exception"),_.stack&&lt(_.stack),lt(_)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||lt("No IE domain setting required")}catch{const l=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+l+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,i){for(this.myID=t,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[uy]=this.myID,t[cy]=this.myPW,t[fy]=this.currentSerial;let i=this.urlFn(t),l="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+dy+l.length<=hy;){const h=this.pendingSegs.shift();l=l+"&"+nR+o+"="+h.seg+"&"+iR+o+"="+h.ts+"&"+sR+o+"="+h.d,o++}return i=i+l,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(t,i,l){this.pendingSegs.push({seg:t,ts:i,d:l}),this.alive&&this.newRequest_()}addLongPollTag_(t,i){this.outstandingRequests.add(i);const l=()=>{this.outstandingRequests.delete(i),this.newRequest_()},o=setTimeout(l,Math.floor(rR)),c=()=>{clearTimeout(o),l()};this.addTag(t,c)}addTag(t,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const l=this.myIFrame.doc.createElement("script");l.type="text/javascript",l.async=!0,l.src=t,l.onload=l.onreadystatechange=function(){const o=l.readyState;(!o||o==="loaded"||o==="complete")&&(l.onload=l.onreadystatechange=null,l.parentNode&&l.parentNode.removeChild(l),i())},l.onerror=()=>{lt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(l)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=16384,cR=45e3;let po=null;typeof MozWebSocket<"u"?po=MozWebSocket:typeof WebSocket<"u"&&(po=WebSocket);class Yt{constructor(t,i,l,o,c,h,_){this.connId=t,this.applicationId=l,this.appCheckToken=o,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Dl(this.connId),this.stats_=dh(i),this.connURL=Yt.connectionURL_(i,h,_,o,l),this.nodeAdmin=i.nodeAdmin}static connectionURL_(t,i,l,o,c){const h={};return h[Jv]=hh,typeof location<"u"&&location.hostname&&ny.test(location.hostname)&&(h[ey]=ty),i&&(h[$v]=i),l&&(h[iy]=l),o&&(h[Lf]=o),c&&(h[sy]=c),oy(t,ay,h)}open(t,i){this.onDisconnect=i,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ji.set("previous_websocket_failure",!0);try{let l;rb(),this.mySock=new po(this.connURL,[],l)}catch(l){this.log_("Error instantiating WebSocket.");const o=l.message||l.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=l=>{this.handleIncomingFrame(l)},this.mySock.onerror=l=>{this.log_("WebSocket error.  Closing connection.");const o=l.message||l.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){Yt.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,l=navigator.userAgent.match(i);l&&l.length>1&&parseFloat(l[1])<4.4&&(t=!0)}return!t&&po!==null&&!Yt.forceDisallow_}static previouslyFailed(){return ji.isInMemoryStorage||ji.get("previous_websocket_failure")===!0}markConnectionHealthy(){ji.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const l=dl(i);this.onMessage(l)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(U(this.frames===null,"We already have a frame buffer"),t.length<=6){const i=Number(t);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const i=t.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const l=this.extractFrameCount_(i);l!==null&&this.appendFrame_(l)}}send(t){this.resetKeepAlive();const i=He(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const l=Zv(i,uR);l.length>1&&this.sendString_(String(l.length));for(let o=0;o<l.length;o++)this.sendString_(l[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(cR))}sendString_(t){try{this.mySock.send(t)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Yt.responsesRequiredToBeHealthy=2;Yt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{static get ALL_TRANSPORTS(){return[Bs,Yt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const i=Yt&&Yt.isAvailable();let l=i&&!Yt.previouslyFailed();if(t.webSocketOnly&&(i||Et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),l=!0),l)this.transports_=[Yt];else{const o=this.transports_=[];for(const c of ml.ALL_TRANSPORTS)c&&c.isAvailable()&&o.push(c);ml.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ml.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=6e4,hR=5e3,dR=10*1024,_R=100*1024,Ef="t",Cg="d",pR="s",Ag="r",mR="e",Rg="o",wg="a",Ng="n",Og="p",gR="h";class vR{constructor(t,i,l,o,c,h,_,p,m,y){this.id=t,this.repoInfo_=i,this.applicationId_=l,this.appCheckToken_=o,this.authToken_=c,this.onMessage_=h,this.onReady_=_,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Dl("c:"+this.id+":"),this.transportManager_=new ml(i),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),l=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,l)},Math.floor(0));const o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=ul(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>_R?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>dR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return i=>{t===this.conn_?this.onConnectionLost_(i):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return i=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(i):t===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(t){const i={t:"d",d:t};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Ef in t){const i=t[Ef];i===wg?this.upgradeIfSecondaryHealthy_():i===Ag?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===Rg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const i=il("t",t),l=il("d",t);if(i==="c")this.onSecondaryControl_(l);else if(i==="d")this.pendingDataMessages.push(l);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Og,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ng,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const i=il("t",t),l=il("d",t);i==="c"?this.onControl_(l):i==="d"&&this.onDataMessage_(l)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const i=il(Ef,t);if(Cg in t){const l=t[Cg];if(i===gR){const o=Object.assign({},l);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(i===Ng){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===pR?this.onConnectionShutdown_(l):i===Ag?this.onReset_(l):i===mR?kf("Server Error: "+l):i===Rg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):kf("Unknown control packet command: "+i)}}onHandshake_(t){const i=t.ts,l=t.v,o=t.h;this.sessionId=t.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),hh!==l&&Et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),l=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,l),ul(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(fR))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,i){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ul(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(hR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Og,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ji.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{put(t,i,l,o){}merge(t,i,l,o){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,i,l){}onDisconnectMerge(t,i,l){}onDisconnectCancel(t,i){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(t){this.allowedEvents_=t,this.listeners_={},U(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...i){if(Array.isArray(this.listeners_[t])){const l=[...this.listeners_[t]];for(let o=0;o<l.length;o++)l[o].callback.apply(l[o].context,i)}}on(t,i,l){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:i,context:l});const o=this.getInitialEvent(t);o&&i.apply(l,o)}off(t,i,l){this.validateEventType_(t);const o=this.listeners_[t]||[];for(let c=0;c<o.length;c++)if(o[c].callback===i&&(!l||l===o[c].context)){o.splice(c,1);return}}validateEventType_(t){U(this.allowedEvents_.find(i=>i===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends py{static getInstance(){return new mo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Kf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return U(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=32,Mg=768;class Se{constructor(t,i){if(i===void 0){this.pieces_=t.split("/");let l=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[l]=this.pieces_[o],l++);this.pieces_.length=l,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=i}toString(){let t="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(t+="/"+this.pieces_[i]);return t||"/"}}function fe(){return new Se("")}function te(a){return a.pieceNum_>=a.pieces_.length?null:a.pieces_[a.pieceNum_]}function mi(a){return a.pieces_.length-a.pieceNum_}function Te(a){let t=a.pieceNum_;return t<a.pieces_.length&&t++,new Se(a.pieces_,t)}function my(a){return a.pieceNum_<a.pieces_.length?a.pieces_[a.pieces_.length-1]:null}function yR(a){let t="";for(let i=a.pieceNum_;i<a.pieces_.length;i++)a.pieces_[i]!==""&&(t+="/"+encodeURIComponent(String(a.pieces_[i])));return t||"/"}function gy(a,t=0){return a.pieces_.slice(a.pieceNum_+t)}function vy(a){if(a.pieceNum_>=a.pieces_.length)return null;const t=[];for(let i=a.pieceNum_;i<a.pieces_.length-1;i++)t.push(a.pieces_[i]);return new Se(t,0)}function Be(a,t){const i=[];for(let l=a.pieceNum_;l<a.pieces_.length;l++)i.push(a.pieces_[l]);if(t instanceof Se)for(let l=t.pieceNum_;l<t.pieces_.length;l++)i.push(t.pieces_[l]);else{const l=t.split("/");for(let o=0;o<l.length;o++)l[o].length>0&&i.push(l[o])}return new Se(i,0)}function ae(a){return a.pieceNum_>=a.pieces_.length}function ut(a,t){const i=te(a),l=te(t);if(i===null)return t;if(i===l)return ut(Te(a),Te(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+a+")")}function ph(a,t){if(mi(a)!==mi(t))return!1;for(let i=a.pieceNum_,l=t.pieceNum_;i<=a.pieces_.length;i++,l++)if(a.pieces_[i]!==t.pieces_[l])return!1;return!0}function Qt(a,t){let i=a.pieceNum_,l=t.pieceNum_;if(mi(a)>mi(t))return!1;for(;i<a.pieces_.length;){if(a.pieces_[i]!==t.pieces_[l])return!1;++i,++l}return!0}class ER{constructor(t,i){this.errorPrefix_=i,this.parts_=gy(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let l=0;l<this.parts_.length;l++)this.byteLength_+=Oo(this.parts_[l]);yy(this)}}function SR(a,t){a.parts_.length>0&&(a.byteLength_+=1),a.parts_.push(t),a.byteLength_+=Oo(t),yy(a)}function bR(a){const t=a.parts_.pop();a.byteLength_-=Oo(t),a.parts_.length>0&&(a.byteLength_-=1)}function yy(a){if(a.byteLength_>Mg)throw new Error(a.errorPrefix_+"has a key path longer than "+Mg+" bytes ("+a.byteLength_+").");if(a.parts_.length>Dg)throw new Error(a.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Dg+") or object contains a cycle "+qi(a))}function qi(a){return a.parts_.length===0?"":"in property '"+a.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh extends py{static getInstance(){return new mh}constructor(){super(["visible"]);let t,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const l=!document[t];l!==this.visible_&&(this.visible_=l,this.trigger("visible",l))},!1)}getInitialEvent(t){return U(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=1e3,TR=60*5*1e3,Ig=30*1e3,CR=1.3,AR=3e4,RR="server_kill",xg=3;class On extends _y{constructor(t,i,l,o,c,h,_,p){if(super(),this.repoInfo_=t,this.applicationId_=i,this.onDataUpdate_=l,this.onConnectStatus_=o,this.onServerInfoUpdate_=c,this.authTokenProvider_=h,this.appCheckTokenProvider_=_,this.authOverride_=p,this.id=On.nextPersistentConnectionId_++,this.log_=Dl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=sl,this.maxReconnectDelay_=TR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");mh.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&mo.getInstance().on("online",this.onOnline_,this)}sendRequest(t,i,l){const o=++this.requestNumber_,c={r:o,a:t,b:i};this.log_(He(c)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),l&&(this.requestCBHash_[o]=l)}get(t){this.initConnection_();const i=new No,o={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:h=>{const _=h.d;h.s==="ok"?i.resolve(_):i.reject(_)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),i.promise}listen(t,i,l,o){this.initConnection_();const c=t._queryIdentifier,h=t._path.toString();this.log_("Listen called for "+h+" "+c),this.listens.has(h)||this.listens.set(h,new Map),U(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(h).has(c),"listen() called twice for same path/queryId.");const _={onComplete:o,hashFn:i,query:t,tag:l};this.listens.get(h).set(c,_),this.connected_&&this.sendListen_(_)}sendGet_(t){const i=this.outstandingGets_[t];this.sendRequest("g",i.request,l=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(l)})}sendListen_(t){const i=t.query,l=i._path.toString(),o=i._queryIdentifier;this.log_("Listen on "+l+" for "+o);const c={p:l},h="q";t.tag&&(c.q=i._queryObject,c.t=t.tag),c.h=t.hashFn(),this.sendRequest(h,c,_=>{const p=_.d,m=_.s;On.warnOnListenWarnings_(p,i),(this.listens.get(l)&&this.listens.get(l).get(o))===t&&(this.log_("listen response",_),m!=="ok"&&this.removeListen_(l,o),t.onComplete&&t.onComplete(m,p))})}static warnOnListenWarnings_(t,i){if(t&&typeof t=="object"&&xn(t,"w")){const l=Ys(t,"w");if(Array.isArray(l)&&~l.indexOf("no_index")){const o='".indexOn": "'+i._queryParams.getIndex().toString()+'"',c=i._path.toString();Et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||_b(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ig)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,i=db(t)?"auth":"gauth",l={cred:t};this.authOverride_===null?l.noauth=!0:typeof this.authOverride_=="object"&&(l.authvar=this.authOverride_),this.sendRequest(i,l,o=>{const c=o.s,h=o.d||"error";this.authToken_===t&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const i=t.s,l=t.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,l)})}unlisten(t,i){const l=t._path.toString(),o=t._queryIdentifier;this.log_("Unlisten called for "+l+" "+o),U(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(l,o)&&this.connected_&&this.sendUnlisten_(l,o,t._queryObject,i)}sendUnlisten_(t,i,l,o){this.log_("Unlisten on "+t+" for "+i);const c={p:t},h="n";o&&(c.q=l,c.t=o),this.sendRequest(h,c)}onDisconnectPut(t,i,l){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,i,l):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:i,onComplete:l})}onDisconnectMerge(t,i,l){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,i,l):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:i,onComplete:l})}onDisconnectCancel(t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(t,i,l,o){const c={p:i,d:l};this.log_("onDisconnect "+t,c),this.sendRequest(t,c,h=>{o&&setTimeout(()=>{o(h.s,h.d)},Math.floor(0))})}put(t,i,l,o){this.putInternal("p",t,i,l,o)}merge(t,i,l,o){this.putInternal("m",t,i,l,o)}putInternal(t,i,l,o,c){this.initConnection_();const h={p:i,d:l};c!==void 0&&(h.h=c),this.outstandingPuts_.push({action:t,request:h,onComplete:o}),this.outstandingPutCount_++;const _=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(_):this.log_("Buffering put: "+i)}sendPut_(t){const i=this.outstandingPuts_[t].action,l=this.outstandingPuts_[t].request,o=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(i,l,c=>{this.log_(i+" response",c),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(c.s,c.d)})}reportStats(t){if(this.connected_){const i={c:t};this.log_("reportStats",i),this.sendRequest("s",i,l=>{if(l.s!=="ok"){const c=l.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+He(t));const i=t.r,l=this.requestCBHash_[i];l&&(delete this.requestCBHash_[i],l(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,i){this.log_("handleServerMessage",t,i),t==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):t==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):t==="c"?this.onListenRevoked_(i.p,i.q):t==="ac"?this.onAuthRevoked_(i.s,i.d):t==="apc"?this.onAppCheckRevoked_(i.s,i.d):t==="sd"?this.onSecurityDebugPacket_(i):kf("Unrecognized action received from server: "+He(t)+`
Are you using the latest client?`)}onReady_(t,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=sl,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=sl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>AR&&(this.reconnectDelay_=sl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let i=Math.max(0,this.reconnectDelay_-t);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*CR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),l=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+On.nextConnectionId_++,c=this.lastSessionId;let h=!1,_=null;const p=function(){_?_.close():(h=!0,l())},m=function(b){U(_,"sendRequest call when we're not connected not allowed."),_.sendRequest(b)};this.realtime_={close:p,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[b,R]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);h?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=b&&b.accessToken,this.appCheckToken_=R&&R.token,_=new vR(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,i,l,k=>{Et(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(RR)},c))}catch(b){this.log_("Failed to get token: "+b),h||(this.repoInfo_.nodeAdmin&&Et(b),p())}}}interrupt(t){lt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){lt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Rf(this.interruptReasons_)&&(this.reconnectDelay_=sl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const i=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const i=this.outstandingPuts_[t];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,i){let l;i?l=i.map(c=>fh(c)).join("$"):l="default";const o=this.removeListen_(t,l);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(t,i){const l=new Se(t).toString();let o;if(this.listens.has(l)){const c=this.listens.get(l);o=c.get(i),c.delete(i),c.size===0&&this.listens.delete(l)}else o=void 0;return o}onAuthRevoked_(t,i){lt("Auth token revoked: "+t+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xg&&(this.reconnectDelay_=Ig,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,i){lt("App check token revoked: "+t+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const i of t.values())this.sendListen_(i);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let i="js";t["sdk."+i+"."+Qv.replace(/\./g,"-")]=1,Kf()?t["framework.cordova"]=1:rv()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=mo.getInstance().currentlyOnline();return Rf(this.interruptReasons_)&&t}}On.nextPersistentConnectionId_=0;On.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,i){this.name=t,this.node=i}static Wrap(t,i){return new ne(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,i){const l=new ne(Xs,t),o=new ne(Xs,i);return this.compare(l,o)!==0}minPost(){return ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wr;class Ey extends xo{static get __EMPTY_NODE(){return Wr}static set __EMPTY_NODE(t){Wr=t}compare(t,i){return ta(t.name,i.name)}isDefinedOn(t){throw Ws("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,i){return!1}minPost(){return ne.MIN}maxPost(){return new ne(Ki,Wr)}makePost(t,i){return U(typeof t=="string","KeyIndex indexValue must always be a string."),new ne(t,Wr)}toString(){return".key"}}const Gs=new Ey;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t,i,l,o,c=null){this.isReverse_=o,this.resultGenerator_=c,this.nodeStack_=[];let h=1;for(;!t.isEmpty();)if(t=t,h=i?l(t.key,i):1,o&&(h*=-1),h<0)this.isReverse_?t=t.left:t=t.right;else if(h===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(t.key,t.value):i={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Ye{constructor(t,i,l,o,c){this.key=t,this.value=i,this.color=l??Ye.RED,this.left=o??vt.EMPTY_NODE,this.right=c??vt.EMPTY_NODE}copy(t,i,l,o,c){return new Ye(t??this.key,i??this.value,l??this.color,o??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,l){let o=this;const c=l(t,o.key);return c<0?o=o.copy(null,null,null,o.left.insert(t,i,l),null):c===0?o=o.copy(null,i,null,null,null):o=o.copy(null,null,null,null,o.right.insert(t,i,l)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return vt.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,i){let l,o;if(l=this,i(t,l.key)<0)!l.left.isEmpty()&&!l.left.isRed_()&&!l.left.left.isRed_()&&(l=l.moveRedLeft_()),l=l.copy(null,null,null,l.left.remove(t,i),null);else{if(l.left.isRed_()&&(l=l.rotateRight_()),!l.right.isEmpty()&&!l.right.isRed_()&&!l.right.left.isRed_()&&(l=l.moveRedRight_()),i(t,l.key)===0){if(l.right.isEmpty())return vt.EMPTY_NODE;o=l.right.min_(),l=l.copy(o.key,o.value,null,null,l.right.removeMin_())}l=l.copy(null,null,null,null,l.right.remove(t,i))}return l.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class wR{copy(t,i,l,o,c){return this}insert(t,i,l){return new Ye(t,i,null)}remove(t,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class vt{constructor(t,i=vt.EMPTY_NODE){this.comparator_=t,this.root_=i}insert(t,i){return new vt(this.comparator_,this.root_.insert(t,i,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(t){return new vt(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(t){let i,l=this.root_;for(;!l.isEmpty();){if(i=this.comparator_(t,l.key),i===0)return l.value;i<0?l=l.left:i>0&&(l=l.right)}return null}getPredecessorKey(t){let i,l=this.root_,o=null;for(;!l.isEmpty();)if(i=this.comparator_(t,l.key),i===0){if(l.left.isEmpty())return o?o.key:null;for(l=l.left;!l.right.isEmpty();)l=l.right;return l.key}else i<0?l=l.left:i>0&&(o=l,l=l.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Jr(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,i){return new Jr(this.root_,t,this.comparator_,!1,i)}getReverseIteratorFrom(t,i){return new Jr(this.root_,t,this.comparator_,!0,i)}getReverseIterator(t){return new Jr(this.root_,null,this.comparator_,!0,t)}}vt.EMPTY_NODE=new wR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(a,t){return ta(a.name,t.name)}function gh(a,t){return ta(a,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zf;function OR(a){zf=a}const Sy=function(a){return typeof a=="number"?"number:"+Wv(a):"string:"+a},by=function(a){if(a.isLeafNode()){const t=a.val();U(typeof t=="string"||typeof t=="number"||typeof t=="object"&&xn(t,".sv"),"Priority must be a string or number.")}else U(a===zf||a.isEmpty(),"priority of unexpected type.");U(a===zf||a.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ug;class Ge{static set __childrenNodeConstructor(t){Ug=t}static get __childrenNodeConstructor(){return Ug}constructor(t,i=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=i,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),by(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Ge(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return ae(t)?this:te(t)===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,i){return null}updateImmediateChild(t,i){return t===".priority"?this.updatePriority(i):i.isEmpty()&&t!==".priority"?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,i).updatePriority(this.priorityNode_)}updateChild(t,i){const l=te(t);return l===null?i:i.isEmpty()&&l!==".priority"?this:(U(l!==".priority"||mi(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(l,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(Te(t),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,i){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Sy(this.priorityNode_.val())+":");const i=typeof this.value_;t+=i+":",i==="number"?t+=Wv(this.value_):t+=this.value_,this.lazyHash_=Xv(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Ge.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Ge.__childrenNodeConstructor?-1:(U(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const i=typeof t.value_,l=typeof this.value_,o=Ge.VALUE_TYPE_ORDER.indexOf(i),c=Ge.VALUE_TYPE_ORDER.indexOf(l);return U(o>=0,"Unknown leaf type: "+i),U(c>=0,"Unknown leaf type: "+l),o===c?l==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:c-o}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const i=t;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ty,Cy;function DR(a){Ty=a}function MR(a){Cy=a}class IR extends xo{compare(t,i){const l=t.node.getPriority(),o=i.node.getPriority(),c=l.compareTo(o);return c===0?ta(t.name,i.name):c}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,i){return!t.getPriority().equals(i.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(Ki,new Ge("[PRIORITY-POST]",Cy))}makePost(t,i){const l=Ty(t);return new ne(i,new Ge("[PRIORITY-POST]",l))}toString(){return".priority"}}const Me=new IR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=Math.log(2);class UR{constructor(t){const i=c=>parseInt(Math.log(c)/xR,10),l=c=>parseInt(Array(c+1).join("1"),2);this.count=i(t+1),this.current_=this.count-1;const o=l(this.count);this.bits_=t+1&o}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const go=function(a,t,i,l){a.sort(t);const o=function(p,m){const y=m-p;let b,R;if(y===0)return null;if(y===1)return b=a[p],R=i?i(b):b,new Ye(R,b.node,Ye.BLACK,null,null);{const k=parseInt(y/2,10)+p,L=o(p,k),Z=o(k+1,m);return b=a[k],R=i?i(b):b,new Ye(R,b.node,Ye.BLACK,L,Z)}},c=function(p){let m=null,y=null,b=a.length;const R=function(L,Z){const le=b-L,Fe=b;b-=L;const Xe=o(le+1,Fe),Ae=a[le],$e=i?i(Ae):Ae;k(new Ye($e,Ae.node,Z,null,Xe))},k=function(L){m?(m.left=L,m=L):(y=L,m=L)};for(let L=0;L<p.count;++L){const Z=p.nextBitIsOne(),le=Math.pow(2,p.count-(L+1));Z?R(le,Ye.BLACK):(R(le,Ye.BLACK),R(le,Ye.RED))}return y},h=new UR(a.length),_=c(h);return new vt(l||t,_)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sf;const Hs={};class Nn{static get Default(){return U(Hs&&Me,"ChildrenNode.ts has not been loaded"),Sf=Sf||new Nn({".priority":Hs},{".priority":Me}),Sf}constructor(t,i){this.indexes_=t,this.indexSet_=i}get(t){const i=Ys(this.indexes_,t);if(!i)throw new Error("No index defined for "+t);return i instanceof vt?i:null}hasIndex(t){return xn(this.indexSet_,t.toString())}addIndex(t,i){U(t!==Gs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const l=[];let o=!1;const c=i.getIterator(ne.Wrap);let h=c.getNext();for(;h;)o=o||t.isDefinedOn(h.node),l.push(h),h=c.getNext();let _;o?_=go(l,t.getCompare()):_=Hs;const p=t.toString(),m=Object.assign({},this.indexSet_);m[p]=t;const y=Object.assign({},this.indexes_);return y[p]=_,new Nn(y,m)}addToIndexes(t,i){const l=ro(this.indexes_,(o,c)=>{const h=Ys(this.indexSet_,c);if(U(h,"Missing index implementation for "+c),o===Hs)if(h.isDefinedOn(t.node)){const _=[],p=i.getIterator(ne.Wrap);let m=p.getNext();for(;m;)m.name!==t.name&&_.push(m),m=p.getNext();return _.push(t),go(_,h.getCompare())}else return Hs;else{const _=i.get(t.name);let p=o;return _&&(p=p.remove(new ne(t.name,_))),p.insert(t,t.node)}});return new Nn(l,this.indexSet_)}removeFromIndexes(t,i){const l=ro(this.indexes_,o=>{if(o===Hs)return o;{const c=i.get(t.name);return c?o.remove(new ne(t.name,c)):o}});return new Nn(l,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let al;class Q{static get EMPTY_NODE(){return al||(al=new Q(new vt(gh),null,Nn.Default))}constructor(t,i,l){this.children_=t,this.priorityNode_=i,this.indexMap_=l,this.lazyHash_=null,this.priorityNode_&&by(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||al}updatePriority(t){return this.children_.isEmpty()?this:new Q(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const i=this.children_.get(t);return i===null?al:i}}getChild(t){const i=te(t);return i===null?this:this.getImmediateChild(i).getChild(Te(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,i){if(U(i,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(i);{const l=new ne(t,i);let o,c;i.isEmpty()?(o=this.children_.remove(t),c=this.indexMap_.removeFromIndexes(l,this.children_)):(o=this.children_.insert(t,i),c=this.indexMap_.addToIndexes(l,this.children_));const h=o.isEmpty()?al:this.priorityNode_;return new Q(o,h,c)}}updateChild(t,i){const l=te(t);if(l===null)return i;{U(te(t)!==".priority"||mi(t)===1,".priority must be the last token in a path");const o=this.getImmediateChild(l).updateChild(Te(t),i);return this.updateImmediateChild(l,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const i={};let l=0,o=0,c=!0;if(this.forEachChild(Me,(h,_)=>{i[h]=_.val(t),l++,c&&Q.INTEGER_REGEXP_.test(h)?o=Math.max(o,Number(h)):c=!1}),!t&&c&&o<2*l){const h=[];for(const _ in i)h[_]=i[_];return h}else return t&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+Sy(this.getPriority().val())+":"),this.forEachChild(Me,(i,l)=>{const o=l.hash();o!==""&&(t+=":"+i+":"+o)}),this.lazyHash_=t===""?"":Xv(t)}return this.lazyHash_}getPredecessorChildName(t,i,l){const o=this.resolveIndex_(l);if(o){const c=o.getPredecessorKey(new ne(t,i));return c?c.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const i=this.resolveIndex_(t);if(i){const l=i.minKey();return l&&l.name}else return this.children_.minKey()}getFirstChild(t){const i=this.getFirstChildName(t);return i?new ne(i,this.children_.get(i)):null}getLastChildName(t){const i=this.resolveIndex_(t);if(i){const l=i.maxKey();return l&&l.name}else return this.children_.maxKey()}getLastChild(t){const i=this.getLastChildName(t);return i?new ne(i,this.children_.get(i)):null}forEachChild(t,i){const l=this.resolveIndex_(t);return l?l.inorderTraversal(o=>i(o.name,o.node)):this.children_.inorderTraversal(i)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,i){const l=this.resolveIndex_(i);if(l)return l.getIteratorFrom(t,o=>o);{const o=this.children_.getIteratorFrom(t.name,ne.Wrap);let c=o.peek();for(;c!=null&&i.compare(c,t)<0;)o.getNext(),c=o.peek();return o}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,i){const l=this.resolveIndex_(i);if(l)return l.getReverseIteratorFrom(t,o=>o);{const o=this.children_.getReverseIteratorFrom(t.name,ne.Wrap);let c=o.peek();for(;c!=null&&i.compare(c,t)>0;)o.getNext(),c=o.peek();return o}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Ml?-1:0}withIndex(t){if(t===Gs||this.indexMap_.hasIndex(t))return this;{const i=this.indexMap_.addIndex(t,this.children_);return new Q(this.children_,this.priorityNode_,i)}}isIndexed(t){return t===Gs||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const i=t;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const l=this.getIterator(Me),o=i.getIterator(Me);let c=l.getNext(),h=o.getNext();for(;c&&h;){if(c.name!==h.name||!c.node.equals(h.node))return!1;c=l.getNext(),h=o.getNext()}return c===null&&h===null}else return!1;else return!1}}resolveIndex_(t){return t===Gs?null:this.indexMap_.get(t.toString())}}Q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class kR extends Q{constructor(){super(new vt(gh),Q.EMPTY_NODE,Nn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Q.EMPTY_NODE}isEmpty(){return!1}}const Ml=new kR;Object.defineProperties(ne,{MIN:{value:new ne(Xs,Q.EMPTY_NODE)},MAX:{value:new ne(Ki,Ml)}});Ey.__EMPTY_NODE=Q.EMPTY_NODE;Ge.__childrenNodeConstructor=Q;OR(Ml);MR(Ml);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=!0;function Qe(a,t=null){if(a===null)return Q.EMPTY_NODE;if(typeof a=="object"&&".priority"in a&&(t=a[".priority"]),U(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof a=="object"&&".value"in a&&a[".value"]!==null&&(a=a[".value"]),typeof a!="object"||".sv"in a){const i=a;return new Ge(i,Qe(t))}if(!(a instanceof Array)&&LR){const i=[];let l=!1;if(St(a,(h,_)=>{if(h.substring(0,1)!=="."){const p=Qe(_);p.isEmpty()||(l=l||!p.getPriority().isEmpty(),i.push(new ne(h,p)))}}),i.length===0)return Q.EMPTY_NODE;const c=go(i,NR,h=>h.name,gh);if(l){const h=go(i,Me.getCompare());return new Q(c,Qe(t),new Nn({".priority":h},{".priority":Me}))}else return new Q(c,Qe(t),Nn.Default)}else{let i=Q.EMPTY_NODE;return St(a,(l,o)=>{if(xn(a,l)&&l.substring(0,1)!=="."){const c=Qe(o);(c.isLeafNode()||!c.isEmpty())&&(i=i.updateImmediateChild(l,c))}}),i.updatePriority(Qe(t))}}DR(Qe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR extends xo{constructor(t){super(),this.indexPath_=t,U(!ae(t)&&te(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,i){const l=this.extractChild(t.node),o=this.extractChild(i.node),c=l.compareTo(o);return c===0?ta(t.name,i.name):c}makePost(t,i){const l=Qe(t),o=Q.EMPTY_NODE.updateChild(this.indexPath_,l);return new ne(i,o)}maxPost(){const t=Q.EMPTY_NODE.updateChild(this.indexPath_,Ml);return new ne(Ki,t)}toString(){return gy(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR extends xo{compare(t,i){const l=t.node.compareTo(i.node);return l===0?ta(t.name,i.name):l}isDefinedOn(t){return!0}indexedValueChanged(t,i){return!t.equals(i)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(t,i){const l=Qe(t);return new ne(i,l)}toString(){return".value"}}const BR=new HR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(a){return{type:"value",snapshotNode:a}}function Ks(a,t){return{type:"child_added",snapshotNode:t,childName:a}}function gl(a,t){return{type:"child_removed",snapshotNode:t,childName:a}}function vl(a,t,i){return{type:"child_changed",snapshotNode:t,childName:a,oldSnap:i}}function PR(a,t){return{type:"child_moved",snapshotNode:t,childName:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t){this.index_=t}updateChild(t,i,l,o,c,h){U(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const _=t.getImmediateChild(i);return _.getChild(o).equals(l.getChild(o))&&_.isEmpty()===l.isEmpty()||(h!=null&&(l.isEmpty()?t.hasChild(i)?h.trackChildChange(gl(i,_)):U(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):_.isEmpty()?h.trackChildChange(Ks(i,l)):h.trackChildChange(vl(i,l,_))),t.isLeafNode()&&l.isEmpty())?t:t.updateImmediateChild(i,l).withIndex(this.index_)}updateFullNode(t,i,l){return l!=null&&(t.isLeafNode()||t.forEachChild(Me,(o,c)=>{i.hasChild(o)||l.trackChildChange(gl(o,c))}),i.isLeafNode()||i.forEachChild(Me,(o,c)=>{if(t.hasChild(o)){const h=t.getImmediateChild(o);h.equals(c)||l.trackChildChange(vl(o,c,h))}else l.trackChildChange(Ks(o,c))})),i.withIndex(this.index_)}updatePriority(t,i){return t.isEmpty()?Q.EMPTY_NODE:t.updatePriority(i)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t){this.indexedFilter_=new vh(t.getIndex()),this.index_=t.getIndex(),this.startPost_=yl.getStartPost_(t),this.endPost_=yl.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const i=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,l=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return i&&l}updateChild(t,i,l,o,c,h){return this.matches(new ne(i,l))||(l=Q.EMPTY_NODE),this.indexedFilter_.updateChild(t,i,l,o,c,h)}updateFullNode(t,i,l){i.isLeafNode()&&(i=Q.EMPTY_NODE);let o=i.withIndex(this.index_);o=o.updatePriority(Q.EMPTY_NODE);const c=this;return i.forEachChild(Me,(h,_)=>{c.matches(new ne(h,_))||(o=o.updateImmediateChild(h,Q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,o,l)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const i=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),i)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const i=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),i)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(t){this.withinDirectionalStart=i=>this.reverse_?this.withinEndPost(i):this.withinStartPost(i),this.withinDirectionalEnd=i=>this.reverse_?this.withinStartPost(i):this.withinEndPost(i),this.withinStartPost=i=>{const l=this.index_.compare(this.rangedFilter_.getStartPost(),i);return this.startIsInclusive_?l<=0:l<0},this.withinEndPost=i=>{const l=this.index_.compare(i,this.rangedFilter_.getEndPost());return this.endIsInclusive_?l<=0:l<0},this.rangedFilter_=new yl(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,i,l,o,c,h){return this.rangedFilter_.matches(new ne(i,l))||(l=Q.EMPTY_NODE),t.getImmediateChild(i).equals(l)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,i,l,o,c,h):this.fullLimitUpdateChild_(t,i,l,c,h)}updateFullNode(t,i,l){let o;if(i.isLeafNode()||i.isEmpty())o=Q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<i.numChildren()&&i.isIndexed(this.index_)){o=Q.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=i.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=i.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;c.hasNext()&&h<this.limit_;){const _=c.getNext();if(this.withinDirectionalStart(_))if(this.withinDirectionalEnd(_))o=o.updateImmediateChild(_.name,_.node),h++;else break;else continue}}else{o=i.withIndex(this.index_),o=o.updatePriority(Q.EMPTY_NODE);let c;this.reverse_?c=o.getReverseIterator(this.index_):c=o.getIterator(this.index_);let h=0;for(;c.hasNext();){const _=c.getNext();h<this.limit_&&this.withinDirectionalStart(_)&&this.withinDirectionalEnd(_)?h++:o=o.updateImmediateChild(_.name,Q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,o,l)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,i,l,o,c){let h;if(this.reverse_){const b=this.index_.getCompare();h=(R,k)=>b(k,R)}else h=this.index_.getCompare();const _=t;U(_.numChildren()===this.limit_,"");const p=new ne(i,l),m=this.reverse_?_.getFirstChild(this.index_):_.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(_.hasChild(i)){const b=_.getImmediateChild(i);let R=o.getChildAfterChild(this.index_,m,this.reverse_);for(;R!=null&&(R.name===i||_.hasChild(R.name));)R=o.getChildAfterChild(this.index_,R,this.reverse_);const k=R==null?1:h(R,p);if(y&&!l.isEmpty()&&k>=0)return c!=null&&c.trackChildChange(vl(i,l,b)),_.updateImmediateChild(i,l);{c!=null&&c.trackChildChange(gl(i,b));const Z=_.updateImmediateChild(i,Q.EMPTY_NODE);return R!=null&&this.rangedFilter_.matches(R)?(c!=null&&c.trackChildChange(Ks(R.name,R.node)),Z.updateImmediateChild(R.name,R.node)):Z}}else return l.isEmpty()?t:y&&h(m,p)>=0?(c!=null&&(c.trackChildChange(gl(m.name,m.node)),c.trackChildChange(Ks(i,l))),_.updateImmediateChild(i,l).updateImmediateChild(m.name,Q.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Xs}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ki}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const t=new yh;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function VR(a){return a.loadsAllData()?new vh(a.getIndex()):a.hasLimit()?new qR(a):new yl(a)}function kg(a){const t={};if(a.isDefault())return t;let i;if(a.index_===Me?i="$priority":a.index_===BR?i="$value":a.index_===Gs?i="$key":(U(a.index_ instanceof zR,"Unrecognized index type!"),i=a.index_.toString()),t.orderBy=He(i),a.startSet_){const l=a.startAfterSet_?"startAfter":"startAt";t[l]=He(a.indexStartValue_),a.startNameSet_&&(t[l]+=","+He(a.indexStartName_))}if(a.endSet_){const l=a.endBeforeSet_?"endBefore":"endAt";t[l]=He(a.indexEndValue_),a.endNameSet_&&(t[l]+=","+He(a.indexEndName_))}return a.limitSet_&&(a.isViewFromLeft()?t.limitToFirst=a.limit_:t.limitToLast=a.limit_),t}function Lg(a){const t={};if(a.startSet_&&(t.sp=a.indexStartValue_,a.startNameSet_&&(t.sn=a.indexStartName_),t.sin=!a.startAfterSet_),a.endSet_&&(t.ep=a.indexEndValue_,a.endNameSet_&&(t.en=a.indexEndName_),t.ein=!a.endBeforeSet_),a.limitSet_){t.l=a.limit_;let i=a.viewFrom_;i===""&&(a.isViewFromLeft()?i="l":i="r"),t.vf=i}return a.index_!==Me&&(t.i=a.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends _y{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,i){return i!==void 0?"tag$"+i:(U(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,i,l,o){super(),this.repoInfo_=t,this.onDataUpdate_=i,this.authTokenProvider_=l,this.appCheckTokenProvider_=o,this.log_=Dl("p:rest:"),this.listens_={}}listen(t,i,l,o){const c=t._path.toString();this.log_("Listen called for "+c+" "+t._queryIdentifier);const h=vo.getListenId_(t,l),_={};this.listens_[h]=_;const p=kg(t._queryParams);this.restRequest_(c+".json",p,(m,y)=>{let b=y;if(m===404&&(b=null,m=null),m===null&&this.onDataUpdate_(c,b,!1,l),Ys(this.listens_,h)===_){let R;m?m===401?R="permission_denied":R="rest_error:"+m:R="ok",o(R,null)}})}unlisten(t,i){const l=vo.getListenId_(t,i);delete this.listens_[l]}get(t){const i=kg(t._queryParams),l=t._path.toString(),o=new No;return this.restRequest_(l+".json",i,(c,h)=>{let _=h;c===404&&(_=null,c=null),c===null?(this.onDataUpdate_(l,_,!1,null),o.resolve(_)):o.reject(new Error(_))}),o.promise}refreshAuthToken(t){}restRequest_(t,i={},l){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,c])=>{o&&o.accessToken&&(i.auth=o.accessToken),c&&c.token&&(i.ac=c.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Js(i);this.log_("Sending REST request for "+h);const _=new XMLHttpRequest;_.onreadystatechange=()=>{if(l&&_.readyState===4){this.log_("REST Response for "+h+" received. status:",_.status,"response:",_.responseText);let p=null;if(_.status>=200&&_.status<300){try{p=dl(_.responseText)}catch{Et("Failed to parse JSON response for "+h+": "+_.responseText)}l(null,p)}else _.status!==401&&_.status!==404&&Et("Got unsuccessful REST response for "+h+" Status: "+_.status),l(_.status);l=null}},_.open("GET",h,!0),_.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(){this.rootNode_=Q.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,i){this.rootNode_=this.rootNode_.updateChild(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(){return{value:null,children:new Map}}function Ry(a,t,i){if(ae(t))a.value=i,a.children.clear();else if(a.value!==null)a.value=a.value.updateChild(t,i);else{const l=te(t);a.children.has(l)||a.children.set(l,yo());const o=a.children.get(l);t=Te(t),Ry(o,t,i)}}function Hf(a,t,i){a.value!==null?i(t,a.value):GR(a,(l,o)=>{const c=new Se(t.toString()+"/"+l);Hf(o,c,i)})}function GR(a,t){a.children.forEach((i,l)=>{t(l,i)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),i=Object.assign({},t);return this.last_&&St(this.last_,(l,o)=>{i[l]=i[l]-o}),this.last_=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=10*1e3,QR=30*1e3,FR=5*60*1e3;class XR{constructor(t,i){this.server_=i,this.statsToReport_={},this.statsListener_=new YR(t);const l=zg+(QR-zg)*Math.random();ul(this.reportStats_.bind(this),Math.floor(l))}reportStats_(){const t=this.statsListener_.get(),i={};let l=!1;St(t,(o,c)=>{c>0&&xn(this.statsToReport_,o)&&(i[o]=c,l=!0)}),l&&this.server_.reportStats(i),ul(this.reportStats_.bind(this),Math.floor(Math.random()*2*FR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ft;(function(a){a[a.OVERWRITE=0]="OVERWRITE",a[a.MERGE=1]="MERGE",a[a.ACK_USER_WRITE=2]="ACK_USER_WRITE",a[a.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ft||(Ft={}));function wy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Eh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Sh(a){return{fromUser:!1,fromServer:!0,queryId:a,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(t,i,l){this.path=t,this.affectedTree=i,this.revert=l,this.type=Ft.ACK_USER_WRITE,this.source=wy()}operationForChild(t){if(ae(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new Se(t));return new Eo(fe(),i,this.revert)}}else return U(te(this.path)===t,"operationForChild called for unrelated child."),new Eo(Te(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t,i){this.source=t,this.path=i,this.type=Ft.LISTEN_COMPLETE}operationForChild(t){return ae(this.path)?new El(this.source,fe()):new El(this.source,Te(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(t,i,l){this.source=t,this.path=i,this.snap=l,this.type=Ft.OVERWRITE}operationForChild(t){return ae(this.path)?new Zi(this.source,fe(),this.snap.getImmediateChild(t)):new Zi(this.source,Te(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t,i,l){this.source=t,this.path=i,this.children=l,this.type=Ft.MERGE}operationForChild(t){if(ae(this.path)){const i=this.children.subtree(new Se(t));return i.isEmpty()?null:i.value?new Zi(this.source,fe(),i.value):new Sl(this.source,fe(),i)}else return U(te(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Sl(this.source,Te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,i,l){this.node_=t,this.fullyInitialized_=i,this.filtered_=l}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(ae(t))return this.isFullyInitialized()&&!this.filtered_;const i=te(t);return this.isCompleteForChild(i)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function ZR(a,t,i,l){const o=[],c=[];return t.forEach(h=>{h.type==="child_changed"&&a.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&c.push(PR(h.childName,h.snapshotNode))}),ll(a,o,"child_removed",t,l,i),ll(a,o,"child_added",t,l,i),ll(a,o,"child_moved",c,l,i),ll(a,o,"child_changed",t,l,i),ll(a,o,"value",t,l,i),o}function ll(a,t,i,l,o,c){const h=l.filter(_=>_.type===i);h.sort((_,p)=>JR(a,_,p)),h.forEach(_=>{const p=WR(a,_,c);o.forEach(m=>{m.respondsTo(_.type)&&t.push(m.createEvent(p,a.query_))})})}function WR(a,t,i){return t.type==="value"||t.type==="child_removed"||(t.prevName=i.getPredecessorChildName(t.childName,t.snapshotNode,a.index_)),t}function JR(a,t,i){if(t.childName==null||i.childName==null)throw Ws("Should only compare child_ events.");const l=new ne(t.childName,t.snapshotNode),o=new ne(i.childName,i.snapshotNode);return a.index_.compare(l,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(a,t){return{eventCache:a,serverCache:t}}function cl(a,t,i,l){return Uo(new gi(t,i,l),a.serverCache)}function Ny(a,t,i,l){return Uo(a.eventCache,new gi(t,i,l))}function So(a){return a.eventCache.isFullyInitialized()?a.eventCache.getNode():null}function Wi(a){return a.serverCache.isFullyInitialized()?a.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bf;const $R=()=>(bf||(bf=new vt(HA)),bf);class Ce{static fromObject(t){let i=new Ce(null);return St(t,(l,o)=>{i=i.set(new Se(l),o)}),i}constructor(t,i=$R()){this.value=t,this.children=i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,i){if(this.value!=null&&i(this.value))return{path:fe(),value:this.value};if(ae(t))return null;{const l=te(t),o=this.children.get(l);if(o!==null){const c=o.findRootMostMatchingPathAndValue(Te(t),i);return c!=null?{path:Be(new Se(l),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(ae(t))return this;{const i=te(t),l=this.children.get(i);return l!==null?l.subtree(Te(t)):new Ce(null)}}set(t,i){if(ae(t))return new Ce(i,this.children);{const l=te(t),c=(this.children.get(l)||new Ce(null)).set(Te(t),i),h=this.children.insert(l,c);return new Ce(this.value,h)}}remove(t){if(ae(t))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const i=te(t),l=this.children.get(i);if(l){const o=l.remove(Te(t));let c;return o.isEmpty()?c=this.children.remove(i):c=this.children.insert(i,o),this.value===null&&c.isEmpty()?new Ce(null):new Ce(this.value,c)}else return this}}get(t){if(ae(t))return this.value;{const i=te(t),l=this.children.get(i);return l?l.get(Te(t)):null}}setTree(t,i){if(ae(t))return i;{const l=te(t),c=(this.children.get(l)||new Ce(null)).setTree(Te(t),i);let h;return c.isEmpty()?h=this.children.remove(l):h=this.children.insert(l,c),new Ce(this.value,h)}}fold(t){return this.fold_(fe(),t)}fold_(t,i){const l={};return this.children.inorderTraversal((o,c)=>{l[o]=c.fold_(Be(t,o),i)}),i(t,this.value,l)}findOnPath(t,i){return this.findOnPath_(t,fe(),i)}findOnPath_(t,i,l){const o=this.value?l(i,this.value):!1;if(o)return o;if(ae(t))return null;{const c=te(t),h=this.children.get(c);return h?h.findOnPath_(Te(t),Be(i,c),l):null}}foreachOnPath(t,i){return this.foreachOnPath_(t,fe(),i)}foreachOnPath_(t,i,l){if(ae(t))return this;{this.value&&l(i,this.value);const o=te(t),c=this.children.get(o);return c?c.foreachOnPath_(Te(t),Be(i,o),l):new Ce(null)}}foreach(t){this.foreach_(fe(),t)}foreach_(t,i){this.children.inorderTraversal((l,o)=>{o.foreach_(Be(t,l),i)}),this.value&&i(t,this.value)}foreachChild(t){this.children.inorderTraversal((i,l)=>{l.value&&t(i,l.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.writeTree_=t}static empty(){return new Kt(new Ce(null))}}function fl(a,t,i){if(ae(t))return new Kt(new Ce(i));{const l=a.writeTree_.findRootMostValueAndPath(t);if(l!=null){const o=l.path;let c=l.value;const h=ut(o,t);return c=c.updateChild(h,i),new Kt(a.writeTree_.set(o,c))}else{const o=new Ce(i),c=a.writeTree_.setTree(t,o);return new Kt(c)}}}function Hg(a,t,i){let l=a;return St(i,(o,c)=>{l=fl(l,Be(t,o),c)}),l}function Bg(a,t){if(ae(t))return Kt.empty();{const i=a.writeTree_.setTree(t,new Ce(null));return new Kt(i)}}function Bf(a,t){return Ji(a,t)!=null}function Ji(a,t){const i=a.writeTree_.findRootMostValueAndPath(t);return i!=null?a.writeTree_.get(i.path).getChild(ut(i.path,t)):null}function Pg(a){const t=[],i=a.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(Me,(l,o)=>{t.push(new ne(l,o))}):a.writeTree_.children.inorderTraversal((l,o)=>{o.value!=null&&t.push(new ne(l,o.value))}),t}function _i(a,t){if(ae(t))return a;{const i=Ji(a,t);return i!=null?new Kt(new Ce(i)):new Kt(a.writeTree_.subtree(t))}}function Pf(a){return a.writeTree_.isEmpty()}function Zs(a,t){return Oy(fe(),a.writeTree_,t)}function Oy(a,t,i){if(t.value!=null)return i.updateChild(a,t.value);{let l=null;return t.children.inorderTraversal((o,c)=>{o===".priority"?(U(c.value!==null,"Priority writes must always be leaf nodes"),l=c.value):i=Oy(Be(a,o),c,i)}),!i.getChild(a).isEmpty()&&l!==null&&(i=i.updateChild(Be(a,".priority"),l)),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(a,t){return xy(t,a)}function e1(a,t,i,l,o){U(l>a.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),a.allWrites.push({path:t,snap:i,writeId:l,visible:o}),o&&(a.visibleWrites=fl(a.visibleWrites,t,i)),a.lastWriteId=l}function t1(a,t){for(let i=0;i<a.allWrites.length;i++){const l=a.allWrites[i];if(l.writeId===t)return l}return null}function n1(a,t){const i=a.allWrites.findIndex(_=>_.writeId===t);U(i>=0,"removeWrite called with nonexistent writeId.");const l=a.allWrites[i];a.allWrites.splice(i,1);let o=l.visible,c=!1,h=a.allWrites.length-1;for(;o&&h>=0;){const _=a.allWrites[h];_.visible&&(h>=i&&i1(_,l.path)?o=!1:Qt(l.path,_.path)&&(c=!0)),h--}if(o){if(c)return s1(a),!0;if(l.snap)a.visibleWrites=Bg(a.visibleWrites,l.path);else{const _=l.children;St(_,p=>{a.visibleWrites=Bg(a.visibleWrites,Be(l.path,p))})}return!0}else return!1}function i1(a,t){if(a.snap)return Qt(a.path,t);for(const i in a.children)if(a.children.hasOwnProperty(i)&&Qt(Be(a.path,i),t))return!0;return!1}function s1(a){a.visibleWrites=Dy(a.allWrites,a1,fe()),a.allWrites.length>0?a.lastWriteId=a.allWrites[a.allWrites.length-1].writeId:a.lastWriteId=-1}function a1(a){return a.visible}function Dy(a,t,i){let l=Kt.empty();for(let o=0;o<a.length;++o){const c=a[o];if(t(c)){const h=c.path;let _;if(c.snap)Qt(i,h)?(_=ut(i,h),l=fl(l,_,c.snap)):Qt(h,i)&&(_=ut(h,i),l=fl(l,fe(),c.snap.getChild(_)));else if(c.children){if(Qt(i,h))_=ut(i,h),l=Hg(l,_,c.children);else if(Qt(h,i))if(_=ut(h,i),ae(_))l=Hg(l,fe(),c.children);else{const p=Ys(c.children,te(_));if(p){const m=p.getChild(Te(_));l=fl(l,fe(),m)}}}else throw Ws("WriteRecord should have .snap or .children")}}return l}function My(a,t,i,l,o){if(!l&&!o){const c=Ji(a.visibleWrites,t);if(c!=null)return c;{const h=_i(a.visibleWrites,t);if(Pf(h))return i;if(i==null&&!Bf(h,fe()))return null;{const _=i||Q.EMPTY_NODE;return Zs(h,_)}}}else{const c=_i(a.visibleWrites,t);if(!o&&Pf(c))return i;if(!o&&i==null&&!Bf(c,fe()))return null;{const h=function(m){return(m.visible||o)&&(!l||!~l.indexOf(m.writeId))&&(Qt(m.path,t)||Qt(t,m.path))},_=Dy(a.allWrites,h,t),p=i||Q.EMPTY_NODE;return Zs(_,p)}}}function l1(a,t,i){let l=Q.EMPTY_NODE;const o=Ji(a.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(Me,(c,h)=>{l=l.updateImmediateChild(c,h)}),l;if(i){const c=_i(a.visibleWrites,t);return i.forEachChild(Me,(h,_)=>{const p=Zs(_i(c,new Se(h)),_);l=l.updateImmediateChild(h,p)}),Pg(c).forEach(h=>{l=l.updateImmediateChild(h.name,h.node)}),l}else{const c=_i(a.visibleWrites,t);return Pg(c).forEach(h=>{l=l.updateImmediateChild(h.name,h.node)}),l}}function r1(a,t,i,l,o){U(l||o,"Either existingEventSnap or existingServerSnap must exist");const c=Be(t,i);if(Bf(a.visibleWrites,c))return null;{const h=_i(a.visibleWrites,c);return Pf(h)?o.getChild(i):Zs(h,o.getChild(i))}}function o1(a,t,i,l){const o=Be(t,i),c=Ji(a.visibleWrites,o);if(c!=null)return c;if(l.isCompleteForChild(i)){const h=_i(a.visibleWrites,o);return Zs(h,l.getNode().getImmediateChild(i))}else return null}function u1(a,t){return Ji(a.visibleWrites,t)}function c1(a,t,i,l,o,c,h){let _;const p=_i(a.visibleWrites,t),m=Ji(p,fe());if(m!=null)_=m;else if(i!=null)_=Zs(p,i);else return[];if(_=_.withIndex(h),!_.isEmpty()&&!_.isLeafNode()){const y=[],b=h.getCompare(),R=c?_.getReverseIteratorFrom(l,h):_.getIteratorFrom(l,h);let k=R.getNext();for(;k&&y.length<o;)b(k,l)!==0&&y.push(k),k=R.getNext();return y}else return[]}function f1(){return{visibleWrites:Kt.empty(),allWrites:[],lastWriteId:-1}}function bo(a,t,i,l){return My(a.writeTree,a.treePath,t,i,l)}function bh(a,t){return l1(a.writeTree,a.treePath,t)}function qg(a,t,i,l){return r1(a.writeTree,a.treePath,t,i,l)}function To(a,t){return u1(a.writeTree,Be(a.treePath,t))}function h1(a,t,i,l,o,c){return c1(a.writeTree,a.treePath,t,i,l,o,c)}function Th(a,t,i){return o1(a.writeTree,a.treePath,t,i)}function Iy(a,t){return xy(Be(a.treePath,t),a.writeTree)}function xy(a,t){return{treePath:a,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(){this.changeMap=new Map}trackChildChange(t){const i=t.type,l=t.childName;U(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),U(l!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(l);if(o){const c=o.type;if(i==="child_added"&&c==="child_removed")this.changeMap.set(l,vl(l,t.snapshotNode,o.snapshotNode));else if(i==="child_removed"&&c==="child_added")this.changeMap.delete(l);else if(i==="child_removed"&&c==="child_changed")this.changeMap.set(l,gl(l,o.oldSnap));else if(i==="child_changed"&&c==="child_added")this.changeMap.set(l,Ks(l,t.snapshotNode));else if(i==="child_changed"&&c==="child_changed")this.changeMap.set(l,vl(l,t.snapshotNode,o.oldSnap));else throw Ws("Illegal combination of changes: "+t+" occurred after "+o)}else this.changeMap.set(l,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{getCompleteChild(t){return null}getChildAfterChild(t,i,l){return null}}const Uy=new _1;class Ch{constructor(t,i,l=null){this.writes_=t,this.viewCache_=i,this.optCompleteServerCache_=l}getCompleteChild(t){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(t))return i.getNode().getImmediateChild(t);{const l=this.optCompleteServerCache_!=null?new gi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Th(this.writes_,t,l)}}getChildAfterChild(t,i,l){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Wi(this.viewCache_),c=h1(this.writes_,o,i,1,l,t);return c.length===0?null:c[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(a){return{filter:a}}function m1(a,t){U(t.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),U(t.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed")}function g1(a,t,i,l,o){const c=new d1;let h,_;if(i.type===Ft.OVERWRITE){const m=i;m.source.fromUser?h=qf(a,t,m.path,m.snap,l,o,c):(U(m.source.fromServer,"Unknown source."),_=m.source.tagged||t.serverCache.isFiltered()&&!ae(m.path),h=Co(a,t,m.path,m.snap,l,o,_,c))}else if(i.type===Ft.MERGE){const m=i;m.source.fromUser?h=y1(a,t,m.path,m.children,l,o,c):(U(m.source.fromServer,"Unknown source."),_=m.source.tagged||t.serverCache.isFiltered(),h=Vf(a,t,m.path,m.children,l,o,_,c))}else if(i.type===Ft.ACK_USER_WRITE){const m=i;m.revert?h=b1(a,t,m.path,l,o,c):h=E1(a,t,m.path,m.affectedTree,l,o,c)}else if(i.type===Ft.LISTEN_COMPLETE)h=S1(a,t,i.path,l,c);else throw Ws("Unknown operation type: "+i.type);const p=c.getChanges();return v1(t,h,p),{viewCache:h,changes:p}}function v1(a,t,i){const l=t.eventCache;if(l.isFullyInitialized()){const o=l.getNode().isLeafNode()||l.getNode().isEmpty(),c=So(a);(i.length>0||!a.eventCache.isFullyInitialized()||o&&!l.getNode().equals(c)||!l.getNode().getPriority().equals(c.getPriority()))&&i.push(Ay(So(t)))}}function ky(a,t,i,l,o,c){const h=t.eventCache;if(To(l,i)!=null)return t;{let _,p;if(ae(i))if(U(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const m=Wi(t),y=m instanceof Q?m:Q.EMPTY_NODE,b=bh(l,y);_=a.filter.updateFullNode(t.eventCache.getNode(),b,c)}else{const m=bo(l,Wi(t));_=a.filter.updateFullNode(t.eventCache.getNode(),m,c)}else{const m=te(i);if(m===".priority"){U(mi(i)===1,"Can't have a priority with additional path components");const y=h.getNode();p=t.serverCache.getNode();const b=qg(l,i,y,p);b!=null?_=a.filter.updatePriority(y,b):_=h.getNode()}else{const y=Te(i);let b;if(h.isCompleteForChild(m)){p=t.serverCache.getNode();const R=qg(l,i,h.getNode(),p);R!=null?b=h.getNode().getImmediateChild(m).updateChild(y,R):b=h.getNode().getImmediateChild(m)}else b=Th(l,m,t.serverCache);b!=null?_=a.filter.updateChild(h.getNode(),m,b,y,o,c):_=h.getNode()}}return cl(t,_,h.isFullyInitialized()||ae(i),a.filter.filtersNodes())}}function Co(a,t,i,l,o,c,h,_){const p=t.serverCache;let m;const y=h?a.filter:a.filter.getIndexedFilter();if(ae(i))m=y.updateFullNode(p.getNode(),l,null);else if(y.filtersNodes()&&!p.isFiltered()){const k=p.getNode().updateChild(i,l);m=y.updateFullNode(p.getNode(),k,null)}else{const k=te(i);if(!p.isCompleteForPath(i)&&mi(i)>1)return t;const L=Te(i),le=p.getNode().getImmediateChild(k).updateChild(L,l);k===".priority"?m=y.updatePriority(p.getNode(),le):m=y.updateChild(p.getNode(),k,le,L,Uy,null)}const b=Ny(t,m,p.isFullyInitialized()||ae(i),y.filtersNodes()),R=new Ch(o,b,c);return ky(a,b,i,o,R,_)}function qf(a,t,i,l,o,c,h){const _=t.eventCache;let p,m;const y=new Ch(o,t,c);if(ae(i))m=a.filter.updateFullNode(t.eventCache.getNode(),l,h),p=cl(t,m,!0,a.filter.filtersNodes());else{const b=te(i);if(b===".priority")m=a.filter.updatePriority(t.eventCache.getNode(),l),p=cl(t,m,_.isFullyInitialized(),_.isFiltered());else{const R=Te(i),k=_.getNode().getImmediateChild(b);let L;if(ae(R))L=l;else{const Z=y.getCompleteChild(b);Z!=null?my(R)===".priority"&&Z.getChild(vy(R)).isEmpty()?L=Z:L=Z.updateChild(R,l):L=Q.EMPTY_NODE}if(k.equals(L))p=t;else{const Z=a.filter.updateChild(_.getNode(),b,L,R,y,h);p=cl(t,Z,_.isFullyInitialized(),a.filter.filtersNodes())}}}return p}function Vg(a,t){return a.eventCache.isCompleteForChild(t)}function y1(a,t,i,l,o,c,h){let _=t;return l.foreach((p,m)=>{const y=Be(i,p);Vg(t,te(y))&&(_=qf(a,_,y,m,o,c,h))}),l.foreach((p,m)=>{const y=Be(i,p);Vg(t,te(y))||(_=qf(a,_,y,m,o,c,h))}),_}function jg(a,t,i){return i.foreach((l,o)=>{t=t.updateChild(l,o)}),t}function Vf(a,t,i,l,o,c,h,_){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let p=t,m;ae(i)?m=l:m=new Ce(null).setTree(i,l);const y=t.serverCache.getNode();return m.children.inorderTraversal((b,R)=>{if(y.hasChild(b)){const k=t.serverCache.getNode().getImmediateChild(b),L=jg(a,k,R);p=Co(a,p,new Se(b),L,o,c,h,_)}}),m.children.inorderTraversal((b,R)=>{const k=!t.serverCache.isCompleteForChild(b)&&R.value===null;if(!y.hasChild(b)&&!k){const L=t.serverCache.getNode().getImmediateChild(b),Z=jg(a,L,R);p=Co(a,p,new Se(b),Z,o,c,h,_)}}),p}function E1(a,t,i,l,o,c,h){if(To(o,i)!=null)return t;const _=t.serverCache.isFiltered(),p=t.serverCache;if(l.value!=null){if(ae(i)&&p.isFullyInitialized()||p.isCompleteForPath(i))return Co(a,t,i,p.getNode().getChild(i),o,c,_,h);if(ae(i)){let m=new Ce(null);return p.getNode().forEachChild(Gs,(y,b)=>{m=m.set(new Se(y),b)}),Vf(a,t,i,m,o,c,_,h)}else return t}else{let m=new Ce(null);return l.foreach((y,b)=>{const R=Be(i,y);p.isCompleteForPath(R)&&(m=m.set(y,p.getNode().getChild(R)))}),Vf(a,t,i,m,o,c,_,h)}}function S1(a,t,i,l,o){const c=t.serverCache,h=Ny(t,c.getNode(),c.isFullyInitialized()||ae(i),c.isFiltered());return ky(a,h,i,l,Uy,o)}function b1(a,t,i,l,o,c){let h;if(To(l,i)!=null)return t;{const _=new Ch(l,t,o),p=t.eventCache.getNode();let m;if(ae(i)||te(i)===".priority"){let y;if(t.serverCache.isFullyInitialized())y=bo(l,Wi(t));else{const b=t.serverCache.getNode();U(b instanceof Q,"serverChildren would be complete if leaf node"),y=bh(l,b)}y=y,m=a.filter.updateFullNode(p,y,c)}else{const y=te(i);let b=Th(l,y,t.serverCache);b==null&&t.serverCache.isCompleteForChild(y)&&(b=p.getImmediateChild(y)),b!=null?m=a.filter.updateChild(p,y,b,Te(i),_,c):t.eventCache.getNode().hasChild(y)?m=a.filter.updateChild(p,y,Q.EMPTY_NODE,Te(i),_,c):m=p,m.isEmpty()&&t.serverCache.isFullyInitialized()&&(h=bo(l,Wi(t)),h.isLeafNode()&&(m=a.filter.updateFullNode(m,h,c)))}return h=t.serverCache.isFullyInitialized()||To(l,fe())!=null,cl(t,m,h,a.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(t,i){this.query_=t,this.eventRegistrations_=[];const l=this.query_._queryParams,o=new vh(l.getIndex()),c=VR(l);this.processor_=p1(c);const h=i.serverCache,_=i.eventCache,p=o.updateFullNode(Q.EMPTY_NODE,h.getNode(),null),m=c.updateFullNode(Q.EMPTY_NODE,_.getNode(),null),y=new gi(p,h.isFullyInitialized(),o.filtersNodes()),b=new gi(m,_.isFullyInitialized(),c.filtersNodes());this.viewCache_=Uo(b,y),this.eventGenerator_=new KR(this.query_)}get query(){return this.query_}}function C1(a){return a.viewCache_.serverCache.getNode()}function A1(a){return So(a.viewCache_)}function R1(a,t){const i=Wi(a.viewCache_);return i&&(a.query._queryParams.loadsAllData()||!ae(t)&&!i.getImmediateChild(te(t)).isEmpty())?i.getChild(t):null}function Gg(a){return a.eventRegistrations_.length===0}function w1(a,t){a.eventRegistrations_.push(t)}function Yg(a,t,i){const l=[];if(i){U(t==null,"A cancel should cancel all event registrations.");const o=a.query._path;a.eventRegistrations_.forEach(c=>{const h=c.createCancelEvent(i,o);h&&l.push(h)})}if(t){let o=[];for(let c=0;c<a.eventRegistrations_.length;++c){const h=a.eventRegistrations_[c];if(!h.matches(t))o.push(h);else if(t.hasAnyCallback()){o=o.concat(a.eventRegistrations_.slice(c+1));break}}a.eventRegistrations_=o}else a.eventRegistrations_=[];return l}function Qg(a,t,i,l){t.type===Ft.MERGE&&t.source.queryId!==null&&(U(Wi(a.viewCache_),"We should always have a full cache before handling merges"),U(So(a.viewCache_),"Missing event cache, even though we have a server cache"));const o=a.viewCache_,c=g1(a.processor_,o,t,i,l);return m1(a.processor_,c.viewCache),U(c.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),a.viewCache_=c.viewCache,Ly(a,c.changes,c.viewCache.eventCache.getNode(),null)}function N1(a,t){const i=a.viewCache_.eventCache,l=[];return i.getNode().isLeafNode()||i.getNode().forEachChild(Me,(c,h)=>{l.push(Ks(c,h))}),i.isFullyInitialized()&&l.push(Ay(i.getNode())),Ly(a,l,i.getNode(),t)}function Ly(a,t,i,l){const o=l?[l]:a.eventRegistrations_;return ZR(a.eventGenerator_,t,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao;class zy{constructor(){this.views=new Map}}function O1(a){U(!Ao,"__referenceConstructor has already been defined"),Ao=a}function D1(){return U(Ao,"Reference.ts has not been loaded"),Ao}function M1(a){return a.views.size===0}function Ah(a,t,i,l){const o=t.source.queryId;if(o!==null){const c=a.views.get(o);return U(c!=null,"SyncTree gave us an op for an invalid query."),Qg(c,t,i,l)}else{let c=[];for(const h of a.views.values())c=c.concat(Qg(h,t,i,l));return c}}function Hy(a,t,i,l,o){const c=t._queryIdentifier,h=a.views.get(c);if(!h){let _=bo(i,o?l:null),p=!1;_?p=!0:l instanceof Q?(_=bh(i,l),p=!1):(_=Q.EMPTY_NODE,p=!1);const m=Uo(new gi(_,p,!1),new gi(l,o,!1));return new T1(t,m)}return h}function I1(a,t,i,l,o,c){const h=Hy(a,t,l,o,c);return a.views.has(t._queryIdentifier)||a.views.set(t._queryIdentifier,h),w1(h,i),N1(h,i)}function x1(a,t,i,l){const o=t._queryIdentifier,c=[];let h=[];const _=vi(a);if(o==="default")for(const[p,m]of a.views.entries())h=h.concat(Yg(m,i,l)),Gg(m)&&(a.views.delete(p),m.query._queryParams.loadsAllData()||c.push(m.query));else{const p=a.views.get(o);p&&(h=h.concat(Yg(p,i,l)),Gg(p)&&(a.views.delete(o),p.query._queryParams.loadsAllData()||c.push(p.query)))}return _&&!vi(a)&&c.push(new(D1())(t._repo,t._path)),{removed:c,events:h}}function By(a){const t=[];for(const i of a.views.values())i.query._queryParams.loadsAllData()||t.push(i);return t}function pi(a,t){let i=null;for(const l of a.views.values())i=i||R1(l,t);return i}function Py(a,t){if(t._queryParams.loadsAllData())return Lo(a);{const l=t._queryIdentifier;return a.views.get(l)}}function qy(a,t){return Py(a,t)!=null}function vi(a){return Lo(a)!=null}function Lo(a){for(const t of a.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro;function U1(a){U(!Ro,"__referenceConstructor has already been defined"),Ro=a}function k1(){return U(Ro,"Reference.ts has not been loaded"),Ro}let L1=1;class Fg{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=f1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vy(a,t,i,l,o){return e1(a.pendingWriteTree_,t,i,l,o),o?xl(a,new Zi(wy(),t,i)):[]}function Gi(a,t,i=!1){const l=t1(a.pendingWriteTree_,t);if(n1(a.pendingWriteTree_,t)){let c=new Ce(null);return l.snap!=null?c=c.set(fe(),!0):St(l.children,h=>{c=c.set(new Se(h),!0)}),xl(a,new Eo(l.path,c,i))}else return[]}function Il(a,t,i){return xl(a,new Zi(Eh(),t,i))}function z1(a,t,i){const l=Ce.fromObject(i);return xl(a,new Sl(Eh(),t,l))}function H1(a,t){return xl(a,new El(Eh(),t))}function B1(a,t,i){const l=wh(a,i);if(l){const o=Nh(l),c=o.path,h=o.queryId,_=ut(c,t),p=new El(Sh(h),_);return Oh(a,c,p)}else return[]}function wo(a,t,i,l,o=!1){const c=t._path,h=a.syncPointTree_.get(c);let _=[];if(h&&(t._queryIdentifier==="default"||qy(h,t))){const p=x1(h,t,i,l);M1(h)&&(a.syncPointTree_=a.syncPointTree_.remove(c));const m=p.removed;if(_=p.events,!o){const y=m.findIndex(R=>R._queryParams.loadsAllData())!==-1,b=a.syncPointTree_.findOnPath(c,(R,k)=>vi(k));if(y&&!b){const R=a.syncPointTree_.subtree(c);if(!R.isEmpty()){const k=V1(R);for(let L=0;L<k.length;++L){const Z=k[L],le=Z.query,Fe=Qy(a,Z);a.listenProvider_.startListening(hl(le),bl(a,le),Fe.hashFn,Fe.onComplete)}}}!b&&m.length>0&&!l&&(y?a.listenProvider_.stopListening(hl(t),null):m.forEach(R=>{const k=a.queryToTagMap.get(zo(R));a.listenProvider_.stopListening(hl(R),k)}))}j1(a,m)}return _}function jy(a,t,i,l){const o=wh(a,l);if(o!=null){const c=Nh(o),h=c.path,_=c.queryId,p=ut(h,t),m=new Zi(Sh(_),p,i);return Oh(a,h,m)}else return[]}function P1(a,t,i,l){const o=wh(a,l);if(o){const c=Nh(o),h=c.path,_=c.queryId,p=ut(h,t),m=Ce.fromObject(i),y=new Sl(Sh(_),p,m);return Oh(a,h,y)}else return[]}function jf(a,t,i,l=!1){const o=t._path;let c=null,h=!1;a.syncPointTree_.foreachOnPath(o,(R,k)=>{const L=ut(R,o);c=c||pi(k,L),h=h||vi(k)});let _=a.syncPointTree_.get(o);_?(h=h||vi(_),c=c||pi(_,fe())):(_=new zy,a.syncPointTree_=a.syncPointTree_.set(o,_));let p;c!=null?p=!0:(p=!1,c=Q.EMPTY_NODE,a.syncPointTree_.subtree(o).foreachChild((k,L)=>{const Z=pi(L,fe());Z&&(c=c.updateImmediateChild(k,Z))}));const m=qy(_,t);if(!m&&!t._queryParams.loadsAllData()){const R=zo(t);U(!a.queryToTagMap.has(R),"View does not exist, but we have a tag");const k=G1();a.queryToTagMap.set(R,k),a.tagToQueryMap.set(k,R)}const y=ko(a.pendingWriteTree_,o);let b=I1(_,t,i,y,c,p);if(!m&&!h&&!l){const R=Py(_,t);b=b.concat(Y1(a,t,R))}return b}function Rh(a,t,i){const o=a.pendingWriteTree_,c=a.syncPointTree_.findOnPath(t,(h,_)=>{const p=ut(h,t),m=pi(_,p);if(m)return m});return My(o,t,c,i,!0)}function q1(a,t){const i=t._path;let l=null;a.syncPointTree_.foreachOnPath(i,(m,y)=>{const b=ut(m,i);l=l||pi(y,b)});let o=a.syncPointTree_.get(i);o?l=l||pi(o,fe()):(o=new zy,a.syncPointTree_=a.syncPointTree_.set(i,o));const c=l!=null,h=c?new gi(l,!0,!1):null,_=ko(a.pendingWriteTree_,t._path),p=Hy(o,t,_,c?h.getNode():Q.EMPTY_NODE,c);return A1(p)}function xl(a,t){return Gy(t,a.syncPointTree_,null,ko(a.pendingWriteTree_,fe()))}function Gy(a,t,i,l){if(ae(a.path))return Yy(a,t,i,l);{const o=t.get(fe());i==null&&o!=null&&(i=pi(o,fe()));let c=[];const h=te(a.path),_=a.operationForChild(h),p=t.children.get(h);if(p&&_){const m=i?i.getImmediateChild(h):null,y=Iy(l,h);c=c.concat(Gy(_,p,m,y))}return o&&(c=c.concat(Ah(o,a,l,i))),c}}function Yy(a,t,i,l){const o=t.get(fe());i==null&&o!=null&&(i=pi(o,fe()));let c=[];return t.children.inorderTraversal((h,_)=>{const p=i?i.getImmediateChild(h):null,m=Iy(l,h),y=a.operationForChild(h);y&&(c=c.concat(Yy(y,_,p,m)))}),o&&(c=c.concat(Ah(o,a,l,i))),c}function Qy(a,t){const i=t.query,l=bl(a,i);return{hashFn:()=>(C1(t)||Q.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return l?B1(a,i._path,l):H1(a,i._path);{const c=qA(o,i);return wo(a,i,null,c)}}}}function bl(a,t){const i=zo(t);return a.queryToTagMap.get(i)}function zo(a){return a._path.toString()+"$"+a._queryIdentifier}function wh(a,t){return a.tagToQueryMap.get(t)}function Nh(a){const t=a.indexOf("$");return U(t!==-1&&t<a.length-1,"Bad queryKey."),{queryId:a.substr(t+1),path:new Se(a.substr(0,t))}}function Oh(a,t,i){const l=a.syncPointTree_.get(t);U(l,"Missing sync point for query tag that we're tracking");const o=ko(a.pendingWriteTree_,t);return Ah(l,i,o,null)}function V1(a){return a.fold((t,i,l)=>{if(i&&vi(i))return[Lo(i)];{let o=[];return i&&(o=By(i)),St(l,(c,h)=>{o=o.concat(h)}),o}})}function hl(a){return a._queryParams.loadsAllData()&&!a._queryParams.isDefault()?new(k1())(a._repo,a._path):a}function j1(a,t){for(let i=0;i<t.length;++i){const l=t[i];if(!l._queryParams.loadsAllData()){const o=zo(l),c=a.queryToTagMap.get(o);a.queryToTagMap.delete(o),a.tagToQueryMap.delete(c)}}}function G1(){return L1++}function Y1(a,t,i){const l=t._path,o=bl(a,t),c=Qy(a,i),h=a.listenProvider_.startListening(hl(t),o,c.hashFn,c.onComplete),_=a.syncPointTree_.subtree(l);if(o)U(!vi(_.value),"If we're adding a query, it shouldn't be shadowed");else{const p=_.fold((m,y,b)=>{if(!ae(m)&&y&&vi(y))return[Lo(y).query];{let R=[];return y&&(R=R.concat(By(y).map(k=>k.query))),St(b,(k,L)=>{R=R.concat(L)}),R}});for(let m=0;m<p.length;++m){const y=p[m];a.listenProvider_.stopListening(hl(y),bl(a,y))}}return h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t){this.node_=t}getImmediateChild(t){const i=this.node_.getImmediateChild(t);return new Dh(i)}node(){return this.node_}}class Mh{constructor(t,i){this.syncTree_=t,this.path_=i}getImmediateChild(t){const i=Be(this.path_,t);return new Mh(this.syncTree_,i)}node(){return Rh(this.syncTree_,this.path_)}}const Q1=function(a){return a=a||{},a.timestamp=a.timestamp||new Date().getTime(),a},Xg=function(a,t,i){if(!a||typeof a!="object")return a;if(U(".sv"in a,"Unexpected leaf node or priority contents"),typeof a[".sv"]=="string")return F1(a[".sv"],t,i);if(typeof a[".sv"]=="object")return X1(a[".sv"],t);U(!1,"Unexpected server value: "+JSON.stringify(a,null,2))},F1=function(a,t,i){switch(a){case"timestamp":return i.timestamp;default:U(!1,"Unexpected server value: "+a)}},X1=function(a,t,i){a.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(a,null,2));const l=a.increment;typeof l!="number"&&U(!1,"Unexpected increment value: "+l);const o=t.node();if(U(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return l;const h=o.getValue();return typeof h!="number"?l:h+l},K1=function(a,t,i,l){return Ih(t,new Mh(i,a),l)},Fy=function(a,t,i){return Ih(a,new Dh(t),i)};function Ih(a,t,i){const l=a.getPriority().val(),o=Xg(l,t.getImmediateChild(".priority"),i);let c;if(a.isLeafNode()){const h=a,_=Xg(h.getValue(),t,i);return _!==h.getValue()||o!==h.getPriority().val()?new Ge(_,Qe(o)):a}else{const h=a;return c=h,o!==h.getPriority().val()&&(c=c.updatePriority(new Ge(o))),h.forEachChild(Me,(_,p)=>{const m=Ih(p,t.getImmediateChild(_),i);m!==p&&(c=c.updateImmediateChild(_,m))}),c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t="",i=null,l={children:{},childCount:0}){this.name=t,this.parent=i,this.node=l}}function Uh(a,t){let i=t instanceof Se?t:new Se(t),l=a,o=te(i);for(;o!==null;){const c=Ys(l.node.children,o)||{children:{},childCount:0};l=new xh(o,l,c),i=Te(i),o=te(i)}return l}function ia(a){return a.node.value}function Xy(a,t){a.node.value=t,Gf(a)}function Ky(a){return a.node.childCount>0}function Z1(a){return ia(a)===void 0&&!Ky(a)}function Ho(a,t){St(a.node.children,(i,l)=>{t(new xh(i,a,l))})}function Zy(a,t,i,l){i&&t(a),Ho(a,o=>{Zy(o,t,!0)})}function W1(a,t,i){let l=a.parent;for(;l!==null;){if(t(l))return!0;l=l.parent}return!1}function Ul(a){return new Se(a.parent===null?a.name:Ul(a.parent)+"/"+a.name)}function Gf(a){a.parent!==null&&J1(a.parent,a.name,a)}function J1(a,t,i){const l=Z1(i),o=xn(a.node.children,t);l&&o?(delete a.node.children[t],a.node.childCount--,Gf(a)):!l&&!o&&(a.node.children[t]=i.node,a.node.childCount++,Gf(a))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=/[\[\].#$\/\u0000-\u001F\u007F]/,ew=/[\[\].#$\u0000-\u001F\u007F]/,Tf=10*1024*1024,Wy=function(a){return typeof a=="string"&&a.length!==0&&!$1.test(a)},Jy=function(a){return typeof a=="string"&&a.length!==0&&!ew.test(a)},tw=function(a){return a&&(a=a.replace(/^\/*\.info(\/|$)/,"/")),Jy(a)},$y=function(a,t,i,l){l&&t===void 0||kh(Zf(a,"value"),t,i)},kh=function(a,t,i){const l=i instanceof Se?new ER(i,a):i;if(t===void 0)throw new Error(a+"contains undefined "+qi(l));if(typeof t=="function")throw new Error(a+"contains a function "+qi(l)+" with contents = "+t.toString());if(Kv(t))throw new Error(a+"contains "+t.toString()+" "+qi(l));if(typeof t=="string"&&t.length>Tf/3&&Oo(t)>Tf)throw new Error(a+"contains a string greater than "+Tf+" utf8 bytes "+qi(l)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let o=!1,c=!1;if(St(t,(h,_)=>{if(h===".value")o=!0;else if(h!==".priority"&&h!==".sv"&&(c=!0,!Wy(h)))throw new Error(a+" contains an invalid key ("+h+") "+qi(l)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);SR(l,h),kh(a,_,l),bR(l)}),o&&c)throw new Error(a+' contains ".value" child '+qi(l)+" in addition to actual children.")}},e0=function(a,t,i,l){if(!Jy(i))throw new Error(Zf(a,t)+'was an invalid path = "'+i+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},nw=function(a,t,i,l){i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),e0(a,t,i)},t0=function(a,t){if(te(t)===".info")throw new Error(a+" failed = Can't modify data under /.info/")},iw=function(a,t){const i=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Wy(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!tw(i))throw new Error(Zf(a,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Lh(a,t){let i=null;for(let l=0;l<t.length;l++){const o=t[l],c=o.getPath();i!==null&&!ph(c,i.path)&&(a.eventLists_.push(i),i=null),i===null&&(i={events:[],path:c}),i.events.push(o)}i&&a.eventLists_.push(i)}function n0(a,t,i){Lh(a,i),i0(a,l=>ph(l,t))}function an(a,t,i){Lh(a,i),i0(a,l=>Qt(l,t)||Qt(t,l))}function i0(a,t){a.recursionDepth_++;let i=!0;for(let l=0;l<a.eventLists_.length;l++){const o=a.eventLists_[l];if(o){const c=o.path;t(c)?(aw(a.eventLists_[l]),a.eventLists_[l]=null):i=!1}}i&&(a.eventLists_=[]),a.recursionDepth_--}function aw(a){for(let t=0;t<a.events.length;t++){const i=a.events[t];if(i!==null){a.events[t]=null;const l=i.getEventRunner();ol&&lt("event: "+i.toString()),na(l)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="repo_interrupt",rw=25;class ow{constructor(t,i,l,o){this.repoInfo_=t,this.forceRestClient_=i,this.authTokenProvider_=l,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sw,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yo(),this.transactionQueueTree_=new xh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function uw(a,t,i){if(a.stats_=dh(a.repoInfo_),a.forceRestClient_||YA())a.server_=new vo(a.repoInfo_,(l,o,c,h)=>{Kg(a,l,o,c,h)},a.authTokenProvider_,a.appCheckProvider_),setTimeout(()=>Zg(a,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{He(i)}catch(l){throw new Error("Invalid authOverride provided: "+l)}}a.persistentConnection_=new On(a.repoInfo_,t,(l,o,c,h)=>{Kg(a,l,o,c,h)},l=>{Zg(a,l)},l=>{cw(a,l)},a.authTokenProvider_,a.appCheckProvider_,i),a.server_=a.persistentConnection_}a.authTokenProvider_.addTokenChangeListener(l=>{a.server_.refreshAuthToken(l)}),a.appCheckProvider_.addTokenChangeListener(l=>{a.server_.refreshAppCheckToken(l.token)}),a.statsReporter_=ZA(a.repoInfo_,()=>new XR(a.stats_,a.server_)),a.infoData_=new jR,a.infoSyncTree_=new Fg({startListening:(l,o,c,h)=>{let _=[];const p=a.infoData_.getNode(l._path);return p.isEmpty()||(_=Il(a.infoSyncTree_,l._path,p),setTimeout(()=>{h("ok")},0)),_},stopListening:()=>{}}),Hh(a,"connected",!1),a.serverSyncTree_=new Fg({startListening:(l,o,c,h)=>(a.server_.listen(l,c,o,(_,p)=>{const m=h(_,p);an(a.eventQueue_,l._path,m)}),[]),stopListening:(l,o)=>{a.server_.unlisten(l,o)}})}function s0(a){const i=a.infoData_.getNode(new Se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function zh(a){return Q1({timestamp:s0(a)})}function Kg(a,t,i,l,o){a.dataUpdateCount++;const c=new Se(t);i=a.interceptServerDataCallback_?a.interceptServerDataCallback_(t,i):i;let h=[];if(o)if(l){const p=ro(i,m=>Qe(m));h=P1(a.serverSyncTree_,c,p,o)}else{const p=Qe(i);h=jy(a.serverSyncTree_,c,p,o)}else if(l){const p=ro(i,m=>Qe(m));h=z1(a.serverSyncTree_,c,p)}else{const p=Qe(i);h=Il(a.serverSyncTree_,c,p)}let _=c;h.length>0&&(_=Po(a,c)),an(a.eventQueue_,_,h)}function Zg(a,t){Hh(a,"connected",t),t===!1&&dw(a)}function cw(a,t){St(t,(i,l)=>{Hh(a,i,l)})}function Hh(a,t,i){const l=new Se("/.info/"+t),o=Qe(i);a.infoData_.updateSnapshot(l,o);const c=Il(a.infoSyncTree_,l,o);an(a.eventQueue_,l,c)}function a0(a){return a.nextWriteId_++}function fw(a,t,i){const l=q1(a.serverSyncTree_,t);return l!=null?Promise.resolve(l):a.server_.get(t).then(o=>{const c=Qe(o).withIndex(t._queryParams.getIndex());jf(a.serverSyncTree_,t,i,!0);let h;if(t._queryParams.loadsAllData())h=Il(a.serverSyncTree_,t._path,c);else{const _=bl(a.serverSyncTree_,t);h=jy(a.serverSyncTree_,t._path,c,_)}return an(a.eventQueue_,t._path,h),wo(a.serverSyncTree_,t,i,null,!0),c},o=>(Bo(a,"get for query "+He(t)+" failed: "+o),Promise.reject(new Error(o))))}function hw(a,t,i,l,o){Bo(a,"set",{path:t.toString(),value:i,priority:l});const c=zh(a),h=Qe(i,l),_=Rh(a.serverSyncTree_,t),p=Fy(h,_,c),m=a0(a),y=Vy(a.serverSyncTree_,t,p,m,!0);Lh(a.eventQueue_,y),a.server_.put(t.toString(),h.val(!0),(R,k)=>{const L=R==="ok";L||Et("set at "+t+" failed: "+R);const Z=Gi(a.serverSyncTree_,m,!L);an(a.eventQueue_,t,Z),gw(a,o,R,k)});const b=c0(a,t);Po(a,b),an(a.eventQueue_,b,[])}function dw(a){Bo(a,"onDisconnectEvents");const t=zh(a),i=yo();Hf(a.onDisconnect_,fe(),(o,c)=>{const h=K1(o,c,a.serverSyncTree_,t);Ry(i,o,h)});let l=[];Hf(i,fe(),(o,c)=>{l=l.concat(Il(a.serverSyncTree_,o,c));const h=c0(a,o);Po(a,h)}),a.onDisconnect_=yo(),an(a.eventQueue_,fe(),l)}function _w(a,t,i){let l;te(t._path)===".info"?l=jf(a.infoSyncTree_,t,i):l=jf(a.serverSyncTree_,t,i),n0(a.eventQueue_,t._path,l)}function pw(a,t,i){let l;te(t._path)===".info"?l=wo(a.infoSyncTree_,t,i):l=wo(a.serverSyncTree_,t,i),n0(a.eventQueue_,t._path,l)}function mw(a){a.persistentConnection_&&a.persistentConnection_.interrupt(lw)}function Bo(a,...t){let i="";a.persistentConnection_&&(i=a.persistentConnection_.id+":"),lt(i,...t)}function gw(a,t,i,l){t&&na(()=>{if(i==="ok")t(null);else{const o=(i||"error").toUpperCase();let c=o;l&&(c+=": "+l);const h=new Error(c);h.code=o,t(h)}})}function l0(a,t,i){return Rh(a.serverSyncTree_,t,i)||Q.EMPTY_NODE}function Bh(a,t=a.transactionQueueTree_){if(t||qo(a,t),ia(t)){const i=o0(a,t);U(i.length>0,"Sending zero length transaction queue"),i.every(o=>o.status===0)&&vw(a,Ul(t),i)}else Ky(t)&&Ho(t,i=>{Bh(a,i)})}function vw(a,t,i){const l=i.map(m=>m.currentWriteId),o=l0(a,t,l);let c=o;const h=o.hash();for(let m=0;m<i.length;m++){const y=i[m];U(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const b=ut(t,y.path);c=c.updateChild(b,y.currentOutputSnapshotRaw)}const _=c.val(!0),p=t;a.server_.put(p.toString(),_,m=>{Bo(a,"transaction put response",{path:p.toString(),status:m});let y=[];if(m==="ok"){const b=[];for(let R=0;R<i.length;R++)i[R].status=2,y=y.concat(Gi(a.serverSyncTree_,i[R].currentWriteId)),i[R].onComplete&&b.push(()=>i[R].onComplete(null,!0,i[R].currentOutputSnapshotResolved)),i[R].unwatcher();qo(a,Uh(a.transactionQueueTree_,t)),Bh(a,a.transactionQueueTree_),an(a.eventQueue_,t,y);for(let R=0;R<b.length;R++)na(b[R])}else{if(m==="datastale")for(let b=0;b<i.length;b++)i[b].status===3?i[b].status=4:i[b].status=0;else{Et("transaction at "+p.toString()+" failed: "+m);for(let b=0;b<i.length;b++)i[b].status=4,i[b].abortReason=m}Po(a,t)}},h)}function Po(a,t){const i=r0(a,t),l=Ul(i),o=o0(a,i);return yw(a,o,l),l}function yw(a,t,i){if(t.length===0)return;const l=[];let o=[];const h=t.filter(_=>_.status===0).map(_=>_.currentWriteId);for(let _=0;_<t.length;_++){const p=t[_],m=ut(i,p.path);let y=!1,b;if(U(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,b=p.abortReason,o=o.concat(Gi(a.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=rw)y=!0,b="maxretry",o=o.concat(Gi(a.serverSyncTree_,p.currentWriteId,!0));else{const R=l0(a,p.path,h);p.currentInputSnapshot=R;const k=t[_].update(R.val());if(k!==void 0){kh("transaction failed: Data returned ",k,p.path);let L=Qe(k);typeof k=="object"&&k!=null&&xn(k,".priority")||(L=L.updatePriority(R.getPriority()));const le=p.currentWriteId,Fe=zh(a),Xe=Fy(L,R,Fe);p.currentOutputSnapshotRaw=L,p.currentOutputSnapshotResolved=Xe,p.currentWriteId=a0(a),h.splice(h.indexOf(le),1),o=o.concat(Vy(a.serverSyncTree_,p.path,Xe,p.currentWriteId,p.applyLocally)),o=o.concat(Gi(a.serverSyncTree_,le,!0))}else y=!0,b="nodata",o=o.concat(Gi(a.serverSyncTree_,p.currentWriteId,!0))}an(a.eventQueue_,i,o),o=[],y&&(t[_].status=2,function(R){setTimeout(R,Math.floor(0))}(t[_].unwatcher),t[_].onComplete&&(b==="nodata"?l.push(()=>t[_].onComplete(null,!1,t[_].currentInputSnapshot)):l.push(()=>t[_].onComplete(new Error(b),!1,null))))}qo(a,a.transactionQueueTree_);for(let _=0;_<l.length;_++)na(l[_]);Bh(a,a.transactionQueueTree_)}function r0(a,t){let i,l=a.transactionQueueTree_;for(i=te(t);i!==null&&ia(l)===void 0;)l=Uh(l,i),t=Te(t),i=te(t);return l}function o0(a,t){const i=[];return u0(a,t,i),i.sort((l,o)=>l.order-o.order),i}function u0(a,t,i){const l=ia(t);if(l)for(let o=0;o<l.length;o++)i.push(l[o]);Ho(t,o=>{u0(a,o,i)})}function qo(a,t){const i=ia(t);if(i){let l=0;for(let o=0;o<i.length;o++)i[o].status!==2&&(i[l]=i[o],l++);i.length=l,Xy(t,i.length>0?i:void 0)}Ho(t,l=>{qo(a,l)})}function c0(a,t){const i=Ul(r0(a,t)),l=Uh(a.transactionQueueTree_,t);return W1(l,o=>{Cf(a,o)}),Cf(a,l),Zy(l,o=>{Cf(a,o)}),i}function Cf(a,t){const i=ia(t);if(i){const l=[];let o=[],c=-1;for(let h=0;h<i.length;h++)i[h].status===3||(i[h].status===1?(U(c===h-1,"All SENT items should be at beginning of queue."),c=h,i[h].status=3,i[h].abortReason="set"):(U(i[h].status===0,"Unexpected transaction status in abort"),i[h].unwatcher(),o=o.concat(Gi(a.serverSyncTree_,i[h].currentWriteId,!0)),i[h].onComplete&&l.push(i[h].onComplete.bind(null,new Error("set"),!1,null))));c===-1?Xy(t,void 0):i.length=c+1,an(a.eventQueue_,Ul(t),o);for(let h=0;h<l.length;h++)na(l[h])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(a){let t="";const i=a.split("/");for(let l=0;l<i.length;l++)if(i[l].length>0){let o=i[l];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}t+="/"+o}return t}function Sw(a){const t={};a.charAt(0)==="?"&&(a=a.substring(1));for(const i of a.split("&")){if(i.length===0)continue;const l=i.split("=");l.length===2?t[decodeURIComponent(l[0])]=decodeURIComponent(l[1]):Et(`Invalid query segment '${i}' in query '${a}'`)}return t}const Wg=function(a,t){const i=bw(a),l=i.namespace;i.domain==="firebase.com"&&In(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!l||l==="undefined")&&i.domain!=="localhost"&&In("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||LA();const o=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new ry(i.host,i.secure,l,o,t,"",l!==i.subdomain),path:new Se(i.pathString)}},bw=function(a){let t="",i="",l="",o="",c="",h=!0,_="https",p=443;if(typeof a=="string"){let m=a.indexOf("//");m>=0&&(_=a.substring(0,m-1),a=a.substring(m+2));let y=a.indexOf("/");y===-1&&(y=a.length);let b=a.indexOf("?");b===-1&&(b=a.length),t=a.substring(0,Math.min(y,b)),y<b&&(o=Ew(a.substring(y,b)));const R=Sw(a.substring(Math.min(a.length,b)));m=t.indexOf(":"),m>=0?(h=_==="https"||_==="wss",p=parseInt(t.substring(m+1),10)):m=t.length;const k=t.slice(0,m);if(k.toLowerCase()==="localhost")i="localhost";else if(k.split(".").length<=2)i=k;else{const L=t.indexOf(".");l=t.substring(0,L).toLowerCase(),i=t.substring(L+1),c=l}"ns"in R&&(c=R.ns)}return{host:t,port:p,domain:i,subdomain:l,secure:h,scheme:_,pathString:o,namespace:c}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Tw=function(){let a=0;const t=[];return function(i){const l=i===a;a=i;let o;const c=new Array(8);for(o=7;o>=0;o--)c[o]=Jg.charAt(i%64),i=Math.floor(i/64);U(i===0,"Cannot push at time == 0");let h=c.join("");if(l){for(o=11;o>=0&&t[o]===63;o--)t[o]=0;t[o]++}else for(o=0;o<12;o++)t[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)h+=Jg.charAt(t[o]);return U(h.length===20,"nextPushId: Length should be 20."),h}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(t,i,l,o){this.eventType=t,this.eventRegistration=i,this.snapshot=l,this.prevName=o}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+He(this.snapshot.exportVal())}}class Aw{constructor(t,i,l){this.eventRegistration=t,this.error=i,this.path=l}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(t,i){this.snapshotCallback=t,this.cancelCallback=i}onValue(t,i){this.snapshotCallback.call(null,t,i)}onCancel(t){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
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
 */class Ph{constructor(t,i,l,o){this._repo=t,this._path=i,this._queryParams=l,this._orderByCalled=o}get key(){return ae(this._path)?null:my(this._path)}get ref(){return new Un(this._repo,this._path)}get _queryIdentifier(){const t=Lg(this._queryParams),i=fh(t);return i==="{}"?"default":i}get _queryObject(){return Lg(this._queryParams)}isEqual(t){if(t=ft(t),!(t instanceof Ph))return!1;const i=this._repo===t._repo,l=ph(this._path,t._path),o=this._queryIdentifier===t._queryIdentifier;return i&&l&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+yR(this._path)}}class Un extends Ph{constructor(t,i){super(t,i,new yh,!1)}get parent(){const t=vy(this._path);return t===null?null:new Un(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class Tl{constructor(t,i,l){this._node=t,this.ref=i,this._index=l}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const i=new Se(t),l=Cl(this.ref,t);return new Tl(this._node.getChild(i),l,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(l,o)=>t(new Tl(o,Cl(this.ref,l),Me)))}hasChild(t){const i=new Se(t);return!this._node.getChild(i).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Tn(a,t){return a=ft(a),a._checkNotDeleted("ref"),t!==void 0?Cl(a._root,t):a._root}function Cl(a,t){return a=ft(a),te(a._path)===null?nw("child","path",t):e0("child","path",t),new Un(a._repo,Be(a._path,t))}function Rw(a,t){a=ft(a),t0("push",a._path),$y("push",t,a._path,!0);const i=s0(a._repo),l=Tw(i),o=Cl(a,l),c=Cl(a,l);let h;return h=Promise.resolve(c),o.then=h.then.bind(h),o.catch=h.then.bind(h,void 0),o}function so(a,t){a=ft(a),t0("set",a._path),$y("set",t,a._path,!1);const i=new No;return hw(a._repo,a._path,t,null,i.wrapCallback(()=>{})),i.promise}function Af(a){a=ft(a);const t=new f0(()=>{}),i=new Vo(t);return fw(a._repo,a,i).then(l=>new Tl(l,new Un(a._repo,a._path),a._queryParams.getIndex()))}class Vo{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,i){const l=i._queryParams.getIndex();return new Cw("value",this,new Tl(t.snapshotNode,new Un(i._repo,i._path),l))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,i){return this.callbackContext.hasCancelCallback?new Aw(this,t,i):null}matches(t){return t instanceof Vo?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function ww(a,t,i,l,o){const c=new f0(i,void 0),h=new Vo(c);return _w(a._repo,a,h),()=>pw(a._repo,a,h)}function qh(a,t,i,l){return ww(a,"value",t)}O1(Un);U1(Un);/**
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
 */const Nw="FIREBASE_DATABASE_EMULATOR_HOST",Yf={};let Ow=!1;function Dw(a,t,i,l){a.repoInfo_=new ry(t,!1,a.repoInfo_.namespace,a.repoInfo_.webSocketOnly,a.repoInfo_.nodeAdmin,a.repoInfo_.persistenceKey,a.repoInfo_.includeNamespaceInQueryParams,!0,i),l&&(a.authTokenProvider_=l)}function Mw(a,t,i,l,o){let c=l||a.options.databaseURL;c===void 0&&(a.options.projectId||In("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",a.options.projectId),c=`${a.options.projectId}-default-rtdb.firebaseio.com`);let h=Wg(c,o),_=h.repoInfo,p;typeof process<"u"&&vg&&(p=vg[Nw]),p?(c=`http://${p}?ns=${_.namespace}`,h=Wg(c,o),_=h.repoInfo):h.repoInfo.secure;const m=new FA(a.name,a.options,t);iw("Invalid Firebase Database URL",h),ae(h.path)||In("Database URL must point to the root of a Firebase Database (not including a child path).");const y=xw(_,a,m,new QA(a,i));return new Uw(y,a)}function Iw(a,t){const i=Yf[t];(!i||i[a.key]!==a)&&In(`Database ${t}(${a.repoInfo_}) has already been deleted.`),mw(a),delete i[a.key]}function xw(a,t,i,l){let o=Yf[t.name];o||(o={},Yf[t.name]=o);let c=o[a.toURLString()];return c&&In("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new ow(a,Ow,i,l),o[a.toURLString()]=c,c}class Uw{constructor(t,i){this._repoInternal=t,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(uw(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Un(this._repo,fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Iw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&In("Cannot call "+t+" on a deleted database.")}}function kw(a=hv(),t){const i=$f(a,"database").getImmediate({identifier:t});if(!i._instanceStarted){const l=nb("database");l&&Lw(i,...l)}return i}function Lw(a,t,i,l={}){a=ft(a),a._checkNotDeleted("useEmulator");const o=`${t}:${i}`,c=a._repoInternal;if(a._instanceStarted){if(o===a._repoInternal.repoInfo_.host&&Qi(l,c.repoInfo_.emulatorOptions))return;In("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(c.repoInfo_.nodeAdmin)l.mockUserToken&&In('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new io(io.OWNER);else if(l.mockUserToken){const _=typeof l.mockUserToken=="string"?l.mockUserToken:ib(l.mockUserToken,a.app.options.projectId);h=new io(_)}Dw(c,o,l,h)}/**
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
 */function zw(a){DA($s),Qs(new Fi("database",(t,{instanceIdentifier:i})=>{const l=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),c=t.getProvider("app-check-internal");return Mw(l,o,c,i)},"PUBLIC").setMultipleInstances(!0)),di(yg,Eg,a),di(yg,Eg,"esm2017")}On.prototype.simpleListen=function(a,t){this.sendRequest("q",{p:a},t)};On.prototype.echo=function(a,t){this.sendRequest("echo",{d:a},t)};zw();const Hw={apiKey:"AIzaSyARRtV-At76wg0lCIvyxmoyEn-Z04qBajM",authDomain:"auth-si36.firebaseapp.com",databaseURL:"https://auth-si36-default-rtdb.firebaseio.com/",projectId:"auth-si36",messagingSenderId:"617887457990",appId:"1:617887457990:web:dbc5c63917344f71b6edc7"},h0=fv(Hw),Vh=NA(h0),Bw=new bn,Cn=kw(h0),Pw=()=>zC(Vh,Bw),qw=()=>gC(Vh),Vw=a=>mC(Vh,a);function jw(){return J.jsx("div",{className:"flex items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-pink-500",children:J.jsx("button",{onClick:Pw,className:"px-6 py-3 bg-white text-gray-800 rounded-lg shadow hover:bg-gray-100 transition",children:"Sign in with Google"})})}function Gw({challengeId:a,user:t}){const[i,l]=yt.useState(!1);yt.useEffect(()=>{const c=`votes/${a}/${t.uid}`;Af(Tn(Cn,c)).then(h=>{h.exists()&&l(!0)})},[a,t.uid]);const o=async()=>{if(i)return;const c=Tn(Cn,`votes/${a}/${t.uid}`);Tn(Cn,`challenges/${a}`),await so(c,{voter:t.uid,timestamp:Date.now()});const h=Tn(Cn,`challenges/${a}/voteCount`),_=await Af(h),p=(_.exists()?_.val():0)+1;await so(h,p);const m=Tn(Cn,`users/${t.uid}/voteReceived`),y=await Af(m),b=(y.exists()?y.val():0)+1;await so(m,b),l(!0)};return J.jsx("button",{onClick:o,disabled:i,className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition disabled:bg-gray-400",children:i?"Voted":"Vote"})}function Yw({card:a,user:t}){const[i,l]=yt.useState(0);return yt.useEffect(()=>{const o=Tn(Cn,`challenges/${a.id}/voteCount`);return qh(o,c=>{l(c.exists()?c.val():0)})},[a.id]),J.jsxs("div",{className:"bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden",children:[J.jsx("img",{src:a.imageData,alt:a.challengeText,className:"w-full h-48 object-cover"}),J.jsxs("div",{className:"p-4",children:[J.jsx("h3",{className:"font-semibold text-gray-800",children:a.challengeText}),J.jsxs("div",{className:"flex items-center justify-between mt-3",children:[J.jsxs("span",{className:"text-gray-600",children:[i," vote",i!==1&&"s"]}),J.jsx(Gw,{challengeId:a.id,user:t})]})]})]})}function Qw({user:a}){const[t,i]=yt.useState(""),[l,o]=yt.useState(null),[c,h]=yt.useState(!1),_=async p=>{if(p.preventDefault(),!t||!l)return;h(!0);const m=new FileReader;m.onloadend=async()=>{const y=m.result,b=Rw(Tn(Cn,"challenges"));await so(b,{challengeText:t,imageData:y,createdAt:Date.now(),createdBy:{uid:a.uid,name:a.displayName,photo:a.photoURL}}),i(""),o(null),h(!1)},m.readAsDataURL(l)};return J.jsxs("form",{onSubmit:_,className:"bg-white p-6 rounded-xl shadow space-y-4",children:[J.jsx("input",{type:"text",value:t,onChange:p=>i(p.target.value),placeholder:"Describe the challenge…",className:"w-full border px-3 py-2 rounded focus:outline-none focus:ring"}),J.jsx("input",{type:"file",accept:"image/*",onChange:p=>o(p.target.files[0]),className:"w-full"}),J.jsx("button",{type:"submit",disabled:c,className:"px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition disabled:opacity-50",children:c?"Posting…":"Post Challenge"})]})}function Fw({user:a}){const[t,i]=yt.useState([]);return yt.useEffect(()=>{const l=Tn(Cn,"challenges"),o=qh(l,c=>{const h=c.val();if(!h)return i([]);const _=Object.entries(h).map(([p,m])=>({id:p,...m}));_.sort((p,m)=>m.createdAt-p.createdAt),i(_)});return()=>o()},[]),J.jsxs("div",{className:"space-y-6",children:[J.jsx(Qw,{user:a}),J.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map(l=>J.jsx(Yw,{card:l,user:a},l.id))})]})}function Xw({user:a,onSignOut:t}){return J.jsxs("nav",{className:"bg-blue-600 text-white p-4 rounded mb-6 flex justify-between items-center",children:[J.jsx("h1",{className:"text-xl font-bold",children:"Card Challenge"}),J.jsxs("div",{className:"flex items-center space-x-3",children:[a.photoURL&&J.jsx("img",{src:a.photoURL,alt:a.displayName,className:"w-8 h-8 rounded-full"}),J.jsx("button",{onClick:t,className:"px-3 py-1 bg-white text-blue-600 rounded hover:bg-gray-200 transition",children:"Sign Out"})]})]})}function Kw(){const[a,t]=yt.useState([]);return yt.useEffect(()=>{const i=new Date().toISOString().split("T")[0],l=Tn(Cn,"users"),o=qh(l,c=>{const h=c.val();if(!h)return;const _=Object.values(h).filter(p=>p.uploads&&p.uploads[i]);t(_)});return()=>o()},[]),J.jsxs("aside",{className:"w-full sm:w-64 bg-white p-4 rounded-xl shadow mb-6",children:[J.jsx("h2",{className:"text-lg font-bold mb-4",children:"Today's Uploaders"}),J.jsxs("ul",{className:"space-y-3",children:[a.map((i,l)=>J.jsxs("li",{className:"flex items-center space-x-3",children:[J.jsx("img",{src:i.photoURL,alt:i.displayName,className:"w-8 h-8 rounded-full"}),J.jsx("span",{className:"text-gray-800",children:i.displayName})]},l)),a.length===0&&J.jsx("li",{className:"text-gray-500 italic text-sm",children:"No uploads yet today"})]})]})}function Zw(){const[a,t]=yt.useState(null);return yt.useEffect(()=>Vw(t),[]),a?J.jsxs(J.Fragment,{children:[J.jsx(Xw,{user:a,onSignOut:qw}),J.jsxs("div",{className:"flex flex-col lg:flex-row max-w-6xl mx-auto px-4 gap-6",children:[J.jsx("div",{className:"flex-1",children:J.jsx(Fw,{user:a})}),J.jsx("div",{className:"w-full lg:w-72",children:J.jsx(Kw,{})})]})]}):J.jsx(jw,{})}QS.createRoot(document.getElementById("root")).render(J.jsx(HS.StrictMode,{children:J.jsx(Zw,{})}));
