"use strict";(()=>{var ay=Object.create;var Ic=Object.defineProperty;var iy=Object.getOwnPropertyDescriptor;var ly=Object.getOwnPropertyNames;var sy=Object.getPrototypeOf,uy=Object.prototype.hasOwnProperty;var Nt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var cy=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of ly(t))!uy.call(e,o)&&o!==n&&Ic(e,o,{get:()=>t[o],enumerable:!(r=iy(t,o))||r.enumerable});return e};var D=(e,t,n)=>(n=e!=null?ay(sy(e)):{},cy(t||!e||!e.__esModule?Ic(n,"default",{value:e,enumerable:!0}):n,e));var Uc=Nt(j=>{"use strict";var zr=Symbol.for("react.element"),dy=Symbol.for("react.portal"),py=Symbol.for("react.fragment"),my=Symbol.for("react.strict_mode"),fy=Symbol.for("react.profiler"),gy=Symbol.for("react.provider"),vy=Symbol.for("react.context"),yy=Symbol.for("react.forward_ref"),hy=Symbol.for("react.suspense"),by=Symbol.for("react.memo"),wy=Symbol.for("react.lazy"),Ac=Symbol.iterator;function xy(e){return e===null||typeof e!="object"?null:(e=Ac&&e[Ac]||e["@@iterator"],typeof e=="function"?e:null)}var $c={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bc=Object.assign,Oc={};function Xn(e,t,n){this.props=e,this.context=t,this.refs=Oc,this.updater=n||$c}Xn.prototype.isReactComponent={};Xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Dc(){}Dc.prototype=Xn.prototype;function tl(e,t,n){this.props=e,this.context=t,this.refs=Oc,this.updater=n||$c}var nl=tl.prototype=new Dc;nl.constructor=tl;Bc(nl,Xn.prototype);nl.isPureReactComponent=!0;var Rc=Array.isArray,zc=Object.prototype.hasOwnProperty,rl={current:null},Fc={key:!0,ref:!0,__self:!0,__source:!0};function qc(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)zc.call(t,r)&&!Fc.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:zr,type:e,key:a,ref:i,props:o,_owner:rl.current}}function Sy(e,t){return{$$typeof:zr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ol(e){return typeof e=="object"&&e!==null&&e.$$typeof===zr}function Ey(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jc=/\/+/g;function el(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ey(""+e.key):t.toString(36)}function ia(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case zr:case dy:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+el(i,0):r,Rc(o)?(n="",e!=null&&(n=e.replace(jc,"$&/")+"/"),ia(o,t,n,"",function(u){return u})):o!=null&&(ol(o)&&(o=Sy(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(jc,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Rc(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+el(a,l);i+=ia(a,t,n,s,o)}else if(s=xy(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+el(a,l++),i+=ia(a,t,n,s,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function aa(e,t,n){if(e==null)return e;var r=[],o=0;return ia(e,r,"","",function(a){return t.call(n,a,o++)}),r}function ky(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},la={transition:null},Ny={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:la,ReactCurrentOwner:rl};function Hc(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:aa,forEach:function(e,t,n){aa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return aa(e,function(){t++}),t},toArray:function(e){return aa(e,function(t){return t})||[]},only:function(e){if(!ol(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=Xn;j.Fragment=py;j.Profiler=fy;j.PureComponent=tl;j.StrictMode=my;j.Suspense=hy;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ny;j.act=Hc;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bc({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=rl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)zc.call(t,s)&&!Fc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:zr,type:e.type,key:o,ref:a,props:r,_owner:i}};j.createContext=function(e){return e={$$typeof:vy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gy,_context:e},e.Consumer=e};j.createElement=qc;j.createFactory=function(e){var t=qc.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:yy,render:e}};j.isValidElement=ol;j.lazy=function(e){return{$$typeof:wy,_payload:{_status:-1,_result:e},_init:ky}};j.memo=function(e,t){return{$$typeof:by,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=la.transition;la.transition={};try{e()}finally{la.transition=t}};j.unstable_act=Hc;j.useCallback=function(e,t){return Pe.current.useCallback(e,t)};j.useContext=function(e){return Pe.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};j.useEffect=function(e,t){return Pe.current.useEffect(e,t)};j.useId=function(){return Pe.current.useId()};j.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return Pe.current.useMemo(e,t)};j.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};j.useRef=function(e){return Pe.current.useRef(e)};j.useState=function(e){return Pe.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return Pe.current.useTransition()};j.version="18.3.1"});var ze=Nt((E1,Vc)=>{"use strict";Vc.exports=Uc()});var td=Nt(U=>{"use strict";function sl(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<sa(o,t))e[r]=t,e[n]=o,n=r;else break e}}function it(e){return e.length===0?null:e[0]}function ca(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var i=2*(r+1)-1,l=e[i],s=i+1,u=e[s];if(0>sa(l,n))s<o&&0>sa(u,l)?(e[r]=u,e[s]=n,r=s):(e[r]=l,e[i]=n,r=i);else if(s<o&&0>sa(u,n))e[r]=u,e[s]=n,r=s;else break e}}return t}function sa(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Wc=performance,U.unstable_now=function(){return Wc.now()}):(al=Date,Kc=al.now(),U.unstable_now=function(){return al.now()-Kc});var Wc,al,Kc,yt=[],qt=[],Cy=1,Ye=null,be=3,da=!1,Pn=!1,qr=!1,Xc=typeof setTimeout=="function"?setTimeout:null,Yc=typeof clearTimeout=="function"?clearTimeout:null,Qc=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ul(e){for(var t=it(qt);t!==null;){if(t.callback===null)ca(qt);else if(t.startTime<=e)ca(qt),t.sortIndex=t.expirationTime,sl(yt,t);else break;t=it(qt)}}function cl(e){if(qr=!1,ul(e),!Pn)if(it(yt)!==null)Pn=!0,pl(dl);else{var t=it(qt);t!==null&&ml(cl,t.startTime-e)}}function dl(e,t){Pn=!1,qr&&(qr=!1,Yc(Hr),Hr=-1),da=!0;var n=be;try{for(ul(t),Ye=it(yt);Ye!==null&&(!(Ye.expirationTime>t)||e&&!ed());){var r=Ye.callback;if(typeof r=="function"){Ye.callback=null,be=Ye.priorityLevel;var o=r(Ye.expirationTime<=t);t=U.unstable_now(),typeof o=="function"?Ye.callback=o:Ye===it(yt)&&ca(yt),ul(t)}else ca(yt);Ye=it(yt)}if(Ye!==null)var a=!0;else{var i=it(qt);i!==null&&ml(cl,i.startTime-t),a=!1}return a}finally{Ye=null,be=n,da=!1}}var pa=!1,ua=null,Hr=-1,Jc=5,Zc=-1;function ed(){return!(U.unstable_now()-Zc<Jc)}function il(){if(ua!==null){var e=U.unstable_now();Zc=e;var t=!0;try{t=ua(!0,e)}finally{t?Fr():(pa=!1,ua=null)}}else pa=!1}var Fr;typeof Qc=="function"?Fr=function(){Qc(il)}:typeof MessageChannel<"u"?(ll=new MessageChannel,Gc=ll.port2,ll.port1.onmessage=il,Fr=function(){Gc.postMessage(null)}):Fr=function(){Xc(il,0)};var ll,Gc;function pl(e){ua=e,pa||(pa=!0,Fr())}function ml(e,t){Hr=Xc(function(){e(U.unstable_now())},t)}U.unstable_IdlePriority=5;U.unstable_ImmediatePriority=1;U.unstable_LowPriority=4;U.unstable_NormalPriority=3;U.unstable_Profiling=null;U.unstable_UserBlockingPriority=2;U.unstable_cancelCallback=function(e){e.callback=null};U.unstable_continueExecution=function(){Pn||da||(Pn=!0,pl(dl))};U.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Jc=0<e?Math.floor(1e3/e):5};U.unstable_getCurrentPriorityLevel=function(){return be};U.unstable_getFirstCallbackNode=function(){return it(yt)};U.unstable_next=function(e){switch(be){case 1:case 2:case 3:var t=3;break;default:t=be}var n=be;be=t;try{return e()}finally{be=n}};U.unstable_pauseExecution=function(){};U.unstable_requestPaint=function(){};U.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=be;be=e;try{return t()}finally{be=n}};U.unstable_scheduleCallback=function(e,t,n){var r=U.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:Cy++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,sl(qt,e),it(yt)===null&&e===it(qt)&&(qr?(Yc(Hr),Hr=-1):qr=!0,ml(cl,n-r))):(e.sortIndex=o,sl(yt,e),Pn||da||(Pn=!0,pl(dl))),e};U.unstable_shouldYield=ed;U.unstable_wrapCallback=function(e){var t=be;return function(){var n=be;be=t;try{return e.apply(this,arguments)}finally{be=n}}}});var rd=Nt((N1,nd)=>{"use strict";nd.exports=td()});var sf=Nt(We=>{"use strict";var Py=ze(),Ue=rd();function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cp=new Set,po={};function zn(e,t){yr(e,t),yr(e+"Capture",t)}function yr(e,t){for(po[e]=t,e=0;e<t.length;e++)cp.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$l=Object.prototype.hasOwnProperty,_y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,od={},ad={};function My(e){return $l.call(ad,e)?!0:$l.call(od,e)?!1:_y.test(e)?ad[e]=!0:(od[e]=!0,!1)}function Ty(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ly(e,t,n,r){if(t===null||typeof t>"u"||Ty(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var _s=/[\-:]([a-z])/g;function Ms(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_s,Ms);ge[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_s,Ms);ge[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_s,Ms);ge[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ts(e,t,n,r){var o=ge.hasOwnProperty(t)?ge[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ly(t,n,o,r)&&(n=null),r||o===null?My(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jt=Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ma=Symbol.for("react.element"),Zn=Symbol.for("react.portal"),er=Symbol.for("react.fragment"),Ls=Symbol.for("react.strict_mode"),Bl=Symbol.for("react.profiler"),dp=Symbol.for("react.provider"),pp=Symbol.for("react.context"),Is=Symbol.for("react.forward_ref"),Ol=Symbol.for("react.suspense"),Dl=Symbol.for("react.suspense_list"),As=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var mp=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var id=Symbol.iterator;function Ur(e){return e===null||typeof e!="object"?null:(e=id&&e[id]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,fl;function Jr(e){if(fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fl=t&&t[1]||""}return`
`+fl+e}var gl=!1;function vl(e,t){if(!e||gl)return"";gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(i!==1||l!==1)do if(i--,l--,0>l||o[i]!==a[l]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=l);break}}}finally{gl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jr(e):""}function Iy(e){switch(e.tag){case 5:return Jr(e.type);case 16:return Jr("Lazy");case 13:return Jr("Suspense");case 19:return Jr("SuspenseList");case 0:case 2:case 15:return e=vl(e.type,!1),e;case 11:return e=vl(e.type.render,!1),e;case 1:return e=vl(e.type,!0),e;default:return""}}function zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case er:return"Fragment";case Zn:return"Portal";case Bl:return"Profiler";case Ls:return"StrictMode";case Ol:return"Suspense";case Dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pp:return(e.displayName||"Context")+".Consumer";case dp:return(e._context.displayName||"Context")+".Provider";case Is:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case As:return t=e.displayName||null,t!==null?t:zl(e.type)||"Memo";case Ut:t=e._payload,e=e._init;try{return zl(e(t))}catch{}}return null}function Ay(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zl(t);case 8:return t===Ls?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function on(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ry(e){var t=fp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fa(e){e._valueTracker||(e._valueTracker=Ry(e))}function gp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function qa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fl(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ld(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=on(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vp(e,t){t=t.checked,t!=null&&Ts(e,"checked",t,!1)}function ql(e,t){vp(e,t);var n=on(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hl(e,t.type,on(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hl(e,t,n){(t!=="number"||qa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zr=Array.isArray;function dr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ud(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Zr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:on(n)}}function yp(e,t){var n=on(t.value),r=on(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function cd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ga,bp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ga=ga||document.createElement("div"),ga.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ga.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var no={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jy=["Webkit","ms","Moz","O"];Object.keys(no).forEach(function(e){jy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),no[t]=no[e]})});function wp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||no.hasOwnProperty(e)&&no[e]?(""+t).trim():t+"px"}function xp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=wp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var $y=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wl(e,t){if(t){if($y[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ql=null;function Rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gl=null,pr=null,mr=null;function dd(e){if(e=Lo(e)){if(typeof Gl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=vi(t),Gl(e.stateNode,e.type,t))}}function Sp(e){pr?mr?mr.push(e):mr=[e]:pr=e}function Ep(){if(pr){var e=pr,t=mr;if(mr=pr=null,dd(e),t)for(e=0;e<t.length;e++)dd(t[e])}}function kp(e,t){return e(t)}function Np(){}var yl=!1;function Cp(e,t,n){if(yl)return e(t,n);yl=!0;try{return kp(e,t,n)}finally{yl=!1,(pr!==null||mr!==null)&&(Np(),Ep())}}function fo(e,t){var n=e.stateNode;if(n===null)return null;var r=vi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Xl=!1;if(Lt)try{Yn={},Object.defineProperty(Yn,"passive",{get:function(){Xl=!0}}),window.addEventListener("test",Yn,Yn),window.removeEventListener("test",Yn,Yn)}catch{Xl=!1}var Yn;function By(e,t,n,r,o,a,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ro=!1,Ha=null,Ua=!1,Yl=null,Oy={onError:function(e){ro=!0,Ha=e}};function Dy(e,t,n,r,o,a,i,l,s){ro=!1,Ha=null,By.apply(Oy,arguments)}function zy(e,t,n,r,o,a,i,l,s){if(Dy.apply(this,arguments),ro){if(ro){var u=Ha;ro=!1,Ha=null}else throw Error(k(198));Ua||(Ua=!0,Yl=u)}}function Fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pd(e){if(Fn(e)!==e)throw Error(k(188))}function Fy(e){var t=e.alternate;if(!t){if(t=Fn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return pd(o),e;if(a===r)return pd(o),t;a=a.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,l=o.child;l;){if(l===n){i=!0,n=o,r=a;break}if(l===r){i=!0,r=o,n=a;break}l=l.sibling}if(!i){for(l=a.child;l;){if(l===n){i=!0,n=a,r=o;break}if(l===r){i=!0,r=a,n=o;break}l=l.sibling}if(!i)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function _p(e){return e=Fy(e),e!==null?Mp(e):null}function Mp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mp(e);if(t!==null)return t;e=e.sibling}return null}var Tp=Ue.unstable_scheduleCallback,md=Ue.unstable_cancelCallback,qy=Ue.unstable_shouldYield,Hy=Ue.unstable_requestPaint,ne=Ue.unstable_now,Uy=Ue.unstable_getCurrentPriorityLevel,js=Ue.unstable_ImmediatePriority,Lp=Ue.unstable_UserBlockingPriority,Va=Ue.unstable_NormalPriority,Vy=Ue.unstable_LowPriority,Ip=Ue.unstable_IdlePriority,pi=null,xt=null;function Wy(e){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(pi,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Gy,Ky=Math.log,Qy=Math.LN2;function Gy(e){return e>>>=0,e===0?32:31-(Ky(e)/Qy|0)|0}var va=64,ya=4194304;function eo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~o;l!==0?r=eo(l):(a&=i,a!==0&&(r=eo(a)))}else i=n&~o,i!==0?r=eo(i):a!==0&&(r=eo(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),o=1<<n,r|=e[n],t&=~o;return r}function Xy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-dt(a),l=1<<i,s=o[i];s===-1?(!(l&n)||l&r)&&(o[i]=Xy(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function Jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ap(){var e=va;return va<<=1,!(va&4194240)&&(va=64),e}function hl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Mo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function Jy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-dt(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function $s(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var q=0;function Rp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var jp,Bs,$p,Bp,Op,Zl=!1,ha=[],Xt=null,Yt=null,Jt=null,go=new Map,vo=new Map,Wt=[],Zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fd(e,t){switch(e){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(t.pointerId)}}function Vr(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Lo(t),t!==null&&Bs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function eh(e,t,n,r,o){switch(t){case"focusin":return Xt=Vr(Xt,e,t,n,r,o),!0;case"dragenter":return Yt=Vr(Yt,e,t,n,r,o),!0;case"mouseover":return Jt=Vr(Jt,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return go.set(a,Vr(go.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,vo.set(a,Vr(vo.get(a)||null,e,t,n,r,o)),!0}return!1}function Dp(e){var t=Tn(e.target);if(t!==null){var n=Fn(t);if(n!==null){if(t=n.tag,t===13){if(t=Pp(n),t!==null){e.blockedOn=t,Op(e.priority,function(){$p(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ia(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=es(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ql=r,n.target.dispatchEvent(r),Ql=null}else return t=Lo(n),t!==null&&Bs(t),e.blockedOn=n,!1;t.shift()}return!0}function gd(e,t,n){Ia(e)&&n.delete(t)}function th(){Zl=!1,Xt!==null&&Ia(Xt)&&(Xt=null),Yt!==null&&Ia(Yt)&&(Yt=null),Jt!==null&&Ia(Jt)&&(Jt=null),go.forEach(gd),vo.forEach(gd)}function Wr(e,t){e.blockedOn===t&&(e.blockedOn=null,Zl||(Zl=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,th)))}function yo(e){function t(o){return Wr(o,e)}if(0<ha.length){Wr(ha[0],e);for(var n=1;n<ha.length;n++){var r=ha[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xt!==null&&Wr(Xt,e),Yt!==null&&Wr(Yt,e),Jt!==null&&Wr(Jt,e),go.forEach(t),vo.forEach(t),n=0;n<Wt.length;n++)r=Wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wt.length&&(n=Wt[0],n.blockedOn===null);)Dp(n),n.blockedOn===null&&Wt.shift()}var fr=jt.ReactCurrentBatchConfig,Ka=!0;function nh(e,t,n,r){var o=q,a=fr.transition;fr.transition=null;try{q=1,Os(e,t,n,r)}finally{q=o,fr.transition=a}}function rh(e,t,n,r){var o=q,a=fr.transition;fr.transition=null;try{q=4,Os(e,t,n,r)}finally{q=o,fr.transition=a}}function Os(e,t,n,r){if(Ka){var o=es(e,t,n,r);if(o===null)Nl(e,t,r,Qa,n),fd(e,r);else if(eh(o,e,t,n,r))r.stopPropagation();else if(fd(e,r),t&4&&-1<Zy.indexOf(e)){for(;o!==null;){var a=Lo(o);if(a!==null&&jp(a),a=es(e,t,n,r),a===null&&Nl(e,t,r,Qa,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else Nl(e,t,r,null,n)}}var Qa=null;function es(e,t,n,r){if(Qa=null,e=Rs(r),e=Tn(e),e!==null)if(t=Fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qa=e,null}function zp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uy()){case js:return 1;case Lp:return 4;case Va:case Vy:return 16;case Ip:return 536870912;default:return 16}default:return 16}}var Qt=null,Ds=null,Aa=null;function Fp(){if(Aa)return Aa;var e,t=Ds,n=t.length,r,o="value"in Qt?Qt.value:Qt.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return Aa=o.slice(e,1<r?1-r:void 0)}function Ra(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ba(){return!0}function vd(){return!1}function Ve(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ba:vd,this.isPropagationStopped=vd,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),t}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zs=Ve(kr),To=Z({},kr,{view:0,detail:0}),oh=Ve(To),bl,wl,Kr,mi=Z({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(bl=e.screenX-Kr.screenX,wl=e.screenY-Kr.screenY):wl=bl=0,Kr=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:wl}}),yd=Ve(mi),ah=Z({},mi,{dataTransfer:0}),ih=Ve(ah),lh=Z({},To,{relatedTarget:0}),xl=Ve(lh),sh=Z({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),uh=Ve(sh),ch=Z({},kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dh=Ve(ch),ph=Z({},kr,{data:0}),hd=Ve(ph),mh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gh[e])?!!t[e]:!1}function Fs(){return vh}var yh=Z({},To,{key:function(e){if(e.key){var t=mh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ra(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fs,charCode:function(e){return e.type==="keypress"?Ra(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ra(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hh=Ve(yh),bh=Z({},mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=Ve(bh),wh=Z({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fs}),xh=Ve(wh),Sh=Z({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eh=Ve(Sh),kh=Z({},mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nh=Ve(kh),Ch=[9,13,27,32],qs=Lt&&"CompositionEvent"in window,oo=null;Lt&&"documentMode"in document&&(oo=document.documentMode);var Ph=Lt&&"TextEvent"in window&&!oo,qp=Lt&&(!qs||oo&&8<oo&&11>=oo),wd=" ",xd=!1;function Hp(e,t){switch(e){case"keyup":return Ch.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Up(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function _h(e,t){switch(e){case"compositionend":return Up(t);case"keypress":return t.which!==32?null:(xd=!0,wd);case"textInput":return e=t.data,e===wd&&xd?null:e;default:return null}}function Mh(e,t){if(tr)return e==="compositionend"||!qs&&Hp(e,t)?(e=Fp(),Aa=Ds=Qt=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qp&&t.locale!=="ko"?null:t.data;default:return null}}var Th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Th[e.type]:t==="textarea"}function Vp(e,t,n,r){Sp(r),t=Ga(t,"onChange"),0<t.length&&(n=new zs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ao=null,ho=null;function Lh(e){nm(e,0)}function fi(e){var t=or(e);if(gp(t))return e}function Ih(e,t){if(e==="change")return t}var Wp=!1;Lt&&(Lt?(xa="oninput"in document,xa||(Sl=document.createElement("div"),Sl.setAttribute("oninput","return;"),xa=typeof Sl.oninput=="function"),wa=xa):wa=!1,Wp=wa&&(!document.documentMode||9<document.documentMode));var wa,xa,Sl;function Ed(){ao&&(ao.detachEvent("onpropertychange",Kp),ho=ao=null)}function Kp(e){if(e.propertyName==="value"&&fi(ho)){var t=[];Vp(t,ho,e,Rs(e)),Cp(Lh,t)}}function Ah(e,t,n){e==="focusin"?(Ed(),ao=t,ho=n,ao.attachEvent("onpropertychange",Kp)):e==="focusout"&&Ed()}function Rh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fi(ho)}function jh(e,t){if(e==="click")return fi(t)}function $h(e,t){if(e==="input"||e==="change")return fi(t)}function Bh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:Bh;function bo(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!$l.call(t,o)||!mt(e[o],t[o]))return!1}return!0}function kd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nd(e,t){var n=kd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kd(n)}}function Qp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gp(){for(var e=window,t=qa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qa(e.document)}return t}function Hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Oh(e){var t=Gp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qp(n.ownerDocument.documentElement,n)){if(r!==null&&Hs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Nd(n,a);var i=Nd(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Dh=Lt&&"documentMode"in document&&11>=document.documentMode,nr=null,ts=null,io=null,ns=!1;function Cd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ns||nr==null||nr!==qa(r)||(r=nr,"selectionStart"in r&&Hs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),io&&bo(io,r)||(io=r,r=Ga(ts,"onSelect"),0<r.length&&(t=new zs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nr)))}function Sa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rr={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},El={},Xp={};Lt&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function gi(e){if(El[e])return El[e];if(!rr[e])return e;var t=rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xp)return El[e]=t[n];return e}var Yp=gi("animationend"),Jp=gi("animationiteration"),Zp=gi("animationstart"),em=gi("transitionend"),tm=new Map,Pd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ln(e,t){tm.set(e,t),zn(t,[e])}for(Ea=0;Ea<Pd.length;Ea++)ka=Pd[Ea],_d=ka.toLowerCase(),Md=ka[0].toUpperCase()+ka.slice(1),ln(_d,"on"+Md);var ka,_d,Md,Ea;ln(Yp,"onAnimationEnd");ln(Jp,"onAnimationIteration");ln(Zp,"onAnimationStart");ln("dblclick","onDoubleClick");ln("focusin","onFocus");ln("focusout","onBlur");ln(em,"onTransitionEnd");yr("onMouseEnter",["mouseout","mouseover"]);yr("onMouseLeave",["mouseout","mouseover"]);yr("onPointerEnter",["pointerout","pointerover"]);yr("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zh=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function Td(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zy(r,t,void 0,e),e.currentTarget=null}function nm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;Td(o,l,u),a=s}else for(i=0;i<r.length;i++){if(l=r[i],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;Td(o,l,u),a=s}}}if(Ua)throw e=Yl,Ua=!1,Yl=null,e}function Q(e,t){var n=t[ls];n===void 0&&(n=t[ls]=new Set);var r=e+"__bubble";n.has(r)||(rm(t,e,2,!1),n.add(r))}function kl(e,t,n){var r=0;t&&(r|=4),rm(n,e,r,t)}var Na="_reactListening"+Math.random().toString(36).slice(2);function wo(e){if(!e[Na]){e[Na]=!0,cp.forEach(function(n){n!=="selectionchange"&&(zh.has(n)||kl(n,!1,e),kl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Na]||(t[Na]=!0,kl("selectionchange",!1,t))}}function rm(e,t,n,r){switch(zp(t)){case 1:var o=nh;break;case 4:o=rh;break;default:o=Os}n=o.bind(null,t,n,e),o=void 0,!Xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Nl(e,t,n,r,o){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;l!==null;){if(i=Tn(l),i===null)return;if(s=i.tag,s===5||s===6){r=a=i;continue e}l=l.parentNode}}r=r.return}Cp(function(){var u=a,c=Rs(n),f=[];e:{var g=tm.get(e);if(g!==void 0){var b=zs,p=e;switch(e){case"keypress":if(Ra(n)===0)break e;case"keydown":case"keyup":b=hh;break;case"focusin":p="focus",b=xl;break;case"focusout":p="blur",b=xl;break;case"beforeblur":case"afterblur":b=xl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=ih;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=xh;break;case Yp:case Jp:case Zp:b=uh;break;case em:b=Eh;break;case"scroll":b=oh;break;case"wheel":b=Nh;break;case"copy":case"cut":case"paste":b=dh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=bd}var y=(t&4)!==0,w=!y&&e==="scroll",m=y?g!==null?g+"Capture":null:g;y=[];for(var d=u,v;d!==null;){v=d;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,m!==null&&(S=fo(d,m),S!=null&&y.push(xo(d,S,v)))),w)break;d=d.return}0<y.length&&(g=new b(g,p,null,n,c),f.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",g&&n!==Ql&&(p=n.relatedTarget||n.fromElement)&&(Tn(p)||p[It]))break e;if((b||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,b?(p=n.relatedTarget||n.toElement,b=u,p=p?Tn(p):null,p!==null&&(w=Fn(p),p!==w||p.tag!==5&&p.tag!==6)&&(p=null)):(b=null,p=u),b!==p)){if(y=yd,S="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=bd,S="onPointerLeave",m="onPointerEnter",d="pointer"),w=b==null?g:or(b),v=p==null?g:or(p),g=new y(S,d+"leave",b,n,c),g.target=w,g.relatedTarget=v,S=null,Tn(c)===u&&(y=new y(m,d+"enter",p,n,c),y.target=v,y.relatedTarget=w,S=y),w=S,b&&p)t:{for(y=b,m=p,d=0,v=y;v;v=Jn(v))d++;for(v=0,S=m;S;S=Jn(S))v++;for(;0<d-v;)y=Jn(y),d--;for(;0<v-d;)m=Jn(m),v--;for(;d--;){if(y===m||m!==null&&y===m.alternate)break t;y=Jn(y),m=Jn(m)}y=null}else y=null;b!==null&&Ld(f,g,b,y,!1),p!==null&&w!==null&&Ld(f,w,p,y,!0)}}e:{if(g=u?or(u):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var x=Ih;else if(Sd(g))if(Wp)x=$h;else{x=Rh;var C=Ah}else(b=g.nodeName)&&b.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(x=jh);if(x&&(x=x(e,u))){Vp(f,x,n,c);break e}C&&C(e,g,u),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&Hl(g,"number",g.value)}switch(C=u?or(u):window,e){case"focusin":(Sd(C)||C.contentEditable==="true")&&(nr=C,ts=u,io=null);break;case"focusout":io=ts=nr=null;break;case"mousedown":ns=!0;break;case"contextmenu":case"mouseup":case"dragend":ns=!1,Cd(f,n,c);break;case"selectionchange":if(Dh)break;case"keydown":case"keyup":Cd(f,n,c)}var N;if(qs)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else tr?Hp(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(qp&&n.locale!=="ko"&&(tr||_!=="onCompositionStart"?_==="onCompositionEnd"&&tr&&(N=Fp()):(Qt=c,Ds="value"in Qt?Qt.value:Qt.textContent,tr=!0)),C=Ga(u,_),0<C.length&&(_=new hd(_,e,null,n,c),f.push({event:_,listeners:C}),N?_.data=N:(N=Up(n),N!==null&&(_.data=N)))),(N=Ph?_h(e,n):Mh(e,n))&&(u=Ga(u,"onBeforeInput"),0<u.length&&(c=new hd("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=N))}nm(f,t)})}function xo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ga(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=fo(e,n),a!=null&&r.unshift(xo(e,a,o)),a=fo(e,t),a!=null&&r.push(xo(e,a,o))),e=e.return}return r}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ld(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=fo(n,a),s!=null&&i.unshift(xo(n,s,l))):o||(s=fo(n,a),s!=null&&i.push(xo(n,s,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Fh=/\r\n?/g,qh=/\u0000|\uFFFD/g;function Id(e){return(typeof e=="string"?e:""+e).replace(Fh,`
`).replace(qh,"")}function Ca(e,t,n){if(t=Id(t),Id(e)!==t&&n)throw Error(k(425))}function Xa(){}var rs=null,os=null;function as(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var is=typeof setTimeout=="function"?setTimeout:void 0,Hh=typeof clearTimeout=="function"?clearTimeout:void 0,Ad=typeof Promise=="function"?Promise:void 0,Uh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ad<"u"?function(e){return Ad.resolve(null).then(e).catch(Vh)}:is;function Vh(e){setTimeout(function(){throw e})}function Cl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),yo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);yo(t)}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nr=Math.random().toString(36).slice(2),wt="__reactFiber$"+Nr,So="__reactProps$"+Nr,It="__reactContainer$"+Nr,ls="__reactEvents$"+Nr,Wh="__reactListeners$"+Nr,Kh="__reactHandles$"+Nr;function Tn(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[It]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rd(e);e!==null;){if(n=e[wt])return n;e=Rd(e)}return t}e=n,n=e.parentNode}return null}function Lo(e){return e=e[wt]||e[It],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function vi(e){return e[So]||null}var ss=[],ar=-1;function sn(e){return{current:e}}function G(e){0>ar||(e.current=ss[ar],ss[ar]=null,ar--)}function V(e,t){ar++,ss[ar]=e.current,e.current=t}var an={},Ee=sn(an),je=sn(!1),jn=an;function hr(e,t){var n=e.type.contextTypes;if(!n)return an;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function $e(e){return e=e.childContextTypes,e!=null}function Ya(){G(je),G(Ee)}function jd(e,t,n){if(Ee.current!==an)throw Error(k(168));V(Ee,t),V(je,n)}function om(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,Ay(e)||"Unknown",o));return Z({},n,r)}function Ja(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||an,jn=Ee.current,V(Ee,e),V(je,je.current),!0}function $d(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=om(e,t,jn),r.__reactInternalMemoizedMergedChildContext=e,G(je),G(Ee),V(Ee,e)):G(je),V(je,n)}var Pt=null,yi=!1,Pl=!1;function am(e){Pt===null?Pt=[e]:Pt.push(e)}function Qh(e){yi=!0,am(e)}function un(){if(!Pl&&Pt!==null){Pl=!0;var e=0,t=q;try{var n=Pt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,yi=!1}catch(o){throw Pt!==null&&(Pt=Pt.slice(e+1)),Tp(js,un),o}finally{q=t,Pl=!1}}return null}var ir=[],lr=0,Za=null,ei=0,Je=[],Ze=0,$n=null,_t=1,Mt="";function _n(e,t){ir[lr++]=ei,ir[lr++]=Za,Za=e,ei=t}function im(e,t,n){Je[Ze++]=_t,Je[Ze++]=Mt,Je[Ze++]=$n,$n=e;var r=_t;e=Mt;var o=32-dt(r)-1;r&=~(1<<o),n+=1;var a=32-dt(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,_t=1<<32-dt(t)+o|n<<o|r,Mt=a+e}else _t=1<<a|n<<o|r,Mt=e}function Us(e){e.return!==null&&(_n(e,1),im(e,1,0))}function Vs(e){for(;e===Za;)Za=ir[--lr],ir[lr]=null,ei=ir[--lr],ir[lr]=null;for(;e===$n;)$n=Je[--Ze],Je[Ze]=null,Mt=Je[--Ze],Je[Ze]=null,_t=Je[--Ze],Je[Ze]=null}var He=null,qe=null,X=!1,ct=null;function lm(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,qe=Zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$n!==null?{id:_t,overflow:Mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,qe=null,!0):!1;default:return!1}}function us(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cs(e){if(X){var t=qe;if(t){var n=t;if(!Bd(e,t)){if(us(e))throw Error(k(418));t=Zt(n.nextSibling);var r=He;t&&Bd(e,t)?lm(r,n):(e.flags=e.flags&-4097|2,X=!1,He=e)}}else{if(us(e))throw Error(k(418));e.flags=e.flags&-4097|2,X=!1,He=e}}}function Od(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function Pa(e){if(e!==He)return!1;if(!X)return Od(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!as(e.type,e.memoizedProps)),t&&(t=qe)){if(us(e))throw sm(),Error(k(418));for(;t;)lm(e,t),t=Zt(t.nextSibling)}if(Od(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=Zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=He?Zt(e.stateNode.nextSibling):null;return!0}function sm(){for(var e=qe;e;)e=Zt(e.nextSibling)}function br(){qe=He=null,X=!1}function Ws(e){ct===null?ct=[e]:ct.push(e)}var Gh=jt.ReactCurrentBatchConfig;function Qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var l=o.refs;i===null?delete l[a]:l[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function _a(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Dd(e){var t=e._init;return t(e._payload)}function um(e){function t(m,d){if(e){var v=m.deletions;v===null?(m.deletions=[d],m.flags|=16):v.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function o(m,d){return m=rn(m,d),m.index=0,m.sibling=null,m}function a(m,d,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<d?(m.flags|=2,d):v):(m.flags|=2,d)):(m.flags|=1048576,d)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,d,v,S){return d===null||d.tag!==6?(d=Rl(v,m.mode,S),d.return=m,d):(d=o(d,v),d.return=m,d)}function s(m,d,v,S){var x=v.type;return x===er?c(m,d,v.props.children,S,v.key):d!==null&&(d.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Ut&&Dd(x)===d.type)?(S=o(d,v.props),S.ref=Qr(m,d,v),S.return=m,S):(S=Fa(v.type,v.key,v.props,null,m.mode,S),S.ref=Qr(m,d,v),S.return=m,S)}function u(m,d,v,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==v.containerInfo||d.stateNode.implementation!==v.implementation?(d=jl(v,m.mode,S),d.return=m,d):(d=o(d,v.children||[]),d.return=m,d)}function c(m,d,v,S,x){return d===null||d.tag!==7?(d=Rn(v,m.mode,S,x),d.return=m,d):(d=o(d,v),d.return=m,d)}function f(m,d,v){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Rl(""+d,m.mode,v),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ma:return v=Fa(d.type,d.key,d.props,null,m.mode,v),v.ref=Qr(m,null,d),v.return=m,v;case Zn:return d=jl(d,m.mode,v),d.return=m,d;case Ut:var S=d._init;return f(m,S(d._payload),v)}if(Zr(d)||Ur(d))return d=Rn(d,m.mode,v,null),d.return=m,d;_a(m,d)}return null}function g(m,d,v,S){var x=d!==null?d.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return x!==null?null:l(m,d,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ma:return v.key===x?s(m,d,v,S):null;case Zn:return v.key===x?u(m,d,v,S):null;case Ut:return x=v._init,g(m,d,x(v._payload),S)}if(Zr(v)||Ur(v))return x!==null?null:c(m,d,v,S,null);_a(m,v)}return null}function b(m,d,v,S,x){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(v)||null,l(d,m,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ma:return m=m.get(S.key===null?v:S.key)||null,s(d,m,S,x);case Zn:return m=m.get(S.key===null?v:S.key)||null,u(d,m,S,x);case Ut:var C=S._init;return b(m,d,v,C(S._payload),x)}if(Zr(S)||Ur(S))return m=m.get(v)||null,c(d,m,S,x,null);_a(d,S)}return null}function p(m,d,v,S){for(var x=null,C=null,N=d,_=d=0,K=null;N!==null&&_<v.length;_++){N.index>_?(K=N,N=null):K=N.sibling;var I=g(m,N,v[_],S);if(I===null){N===null&&(N=K);break}e&&N&&I.alternate===null&&t(m,N),d=a(I,d,_),C===null?x=I:C.sibling=I,C=I,N=K}if(_===v.length)return n(m,N),X&&_n(m,_),x;if(N===null){for(;_<v.length;_++)N=f(m,v[_],S),N!==null&&(d=a(N,d,_),C===null?x=N:C.sibling=N,C=N);return X&&_n(m,_),x}for(N=r(m,N);_<v.length;_++)K=b(N,m,_,v[_],S),K!==null&&(e&&K.alternate!==null&&N.delete(K.key===null?_:K.key),d=a(K,d,_),C===null?x=K:C.sibling=K,C=K);return e&&N.forEach(function(ae){return t(m,ae)}),X&&_n(m,_),x}function y(m,d,v,S){var x=Ur(v);if(typeof x!="function")throw Error(k(150));if(v=x.call(v),v==null)throw Error(k(151));for(var C=x=null,N=d,_=d=0,K=null,I=v.next();N!==null&&!I.done;_++,I=v.next()){N.index>_?(K=N,N=null):K=N.sibling;var ae=g(m,N,I.value,S);if(ae===null){N===null&&(N=K);break}e&&N&&ae.alternate===null&&t(m,N),d=a(ae,d,_),C===null?x=ae:C.sibling=ae,C=ae,N=K}if(I.done)return n(m,N),X&&_n(m,_),x;if(N===null){for(;!I.done;_++,I=v.next())I=f(m,I.value,S),I!==null&&(d=a(I,d,_),C===null?x=I:C.sibling=I,C=I);return X&&_n(m,_),x}for(N=r(m,N);!I.done;_++,I=v.next())I=b(N,m,_,I.value,S),I!==null&&(e&&I.alternate!==null&&N.delete(I.key===null?_:I.key),d=a(I,d,_),C===null?x=I:C.sibling=I,C=I);return e&&N.forEach(function(Ge){return t(m,Ge)}),X&&_n(m,_),x}function w(m,d,v,S){if(typeof v=="object"&&v!==null&&v.type===er&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ma:e:{for(var x=v.key,C=d;C!==null;){if(C.key===x){if(x=v.type,x===er){if(C.tag===7){n(m,C.sibling),d=o(C,v.props.children),d.return=m,m=d;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Ut&&Dd(x)===C.type){n(m,C.sibling),d=o(C,v.props),d.ref=Qr(m,C,v),d.return=m,m=d;break e}n(m,C);break}else t(m,C);C=C.sibling}v.type===er?(d=Rn(v.props.children,m.mode,S,v.key),d.return=m,m=d):(S=Fa(v.type,v.key,v.props,null,m.mode,S),S.ref=Qr(m,d,v),S.return=m,m=S)}return i(m);case Zn:e:{for(C=v.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===v.containerInfo&&d.stateNode.implementation===v.implementation){n(m,d.sibling),d=o(d,v.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=jl(v,m.mode,S),d.return=m,m=d}return i(m);case Ut:return C=v._init,w(m,d,C(v._payload),S)}if(Zr(v))return p(m,d,v,S);if(Ur(v))return y(m,d,v,S);_a(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,d!==null&&d.tag===6?(n(m,d.sibling),d=o(d,v),d.return=m,m=d):(n(m,d),d=Rl(v,m.mode,S),d.return=m,m=d),i(m)):n(m,d)}return w}var wr=um(!0),cm=um(!1),ti=sn(null),ni=null,sr=null,Ks=null;function Qs(){Ks=sr=ni=null}function Gs(e){var t=ti.current;G(ti),e._currentValue=t}function ds(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gr(e,t){ni=e,Ks=sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(Ks!==e)if(e={context:e,memoizedValue:t,next:null},sr===null){if(ni===null)throw Error(k(308));sr=e,ni.dependencies={lanes:0,firstContext:e}}else sr=sr.next=e;return t}var Ln=null;function Xs(e){Ln===null?Ln=[e]:Ln.push(e)}function dm(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Xs(t)):(n.next=o.next,o.next=n),t.interleaved=n,At(e,r)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vt=!1;function Ys(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,At(e,n)}return o=r.interleaved,o===null?(t.next=t,Xs(r)):(t.next=o.next,o.next=t),r.interleaved=t,At(e,n)}function ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$s(e,n)}}function zd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ri(e,t,n,r){var o=e.updateQueue;Vt=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,i===null?a=u:i.next=u,i=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==i&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(a!==null){var f=o.baseState;i=0,c=u=s=null,l=a;do{var g=l.lane,b=l.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var p=e,y=l;switch(g=t,b=n,y.tag){case 1:if(p=y.payload,typeof p=="function"){f=p.call(b,f,g);break e}f=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=y.payload,g=typeof p=="function"?p.call(b,f,g):p,g==null)break e;f=Z({},f,g);break e;case 2:Vt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[l]:g.push(l))}else b={eventTime:b,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=b,s=f):c=c.next=b,i|=g;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;g=l,l=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(c===null&&(s=f),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);On|=i,e.lanes=i,e.memoizedState=f}}function Fd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var Io={},St=sn(Io),Eo=sn(Io),ko=sn(Io);function In(e){if(e===Io)throw Error(k(174));return e}function Js(e,t){switch(V(ko,t),V(Eo,e),V(St,Io),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vl(t,e)}G(St),V(St,t)}function xr(){G(St),G(Eo),G(ko)}function mm(e){In(ko.current);var t=In(St.current),n=Vl(t,e.type);t!==n&&(V(Eo,e),V(St,n))}function Zs(e){Eo.current===e&&(G(St),G(Eo))}var Y=sn(0);function oi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _l=[];function eu(){for(var e=0;e<_l.length;e++)_l[e]._workInProgressVersionPrimary=null;_l.length=0}var $a=jt.ReactCurrentDispatcher,Ml=jt.ReactCurrentBatchConfig,Bn=0,J=null,le=null,ce=null,ai=!1,lo=!1,No=0,Xh=0;function we(){throw Error(k(321))}function tu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function nu(e,t,n,r,o,a){if(Bn=a,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$a.current=e===null||e.memoizedState===null?eb:tb,e=n(r,o),lo){a=0;do{if(lo=!1,No=0,25<=a)throw Error(k(301));a+=1,ce=le=null,t.updateQueue=null,$a.current=nb,e=n(r,o)}while(lo)}if($a.current=ii,t=le!==null&&le.next!==null,Bn=0,ce=le=J=null,ai=!1,t)throw Error(k(300));return e}function ru(){var e=No!==0;return No=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?J.memoizedState=ce=e:ce=ce.next=e,ce}function rt(){if(le===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ce===null?J.memoizedState:ce.next;if(t!==null)ce=t,le=e;else{if(e===null)throw Error(k(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ce===null?J.memoizedState=ce=e:ce=ce.next=e}return ce}function Co(e,t){return typeof t=="function"?t(e):t}function Tl(e){var t=rt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=le,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var l=i=null,s=null,u=a;do{var c=u.lane;if((Bn&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=f,i=r):s=s.next=f,J.lanes|=c,On|=c}u=u.next}while(u!==null&&u!==a);s===null?i=r:s.next=l,mt(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,J.lanes|=a,On|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ll(e){var t=rt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);mt(a,t.memoizedState)||(Re=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function fm(){}function gm(e,t){var n=J,r=rt(),o=t(),a=!mt(r.memoizedState,o);if(a&&(r.memoizedState=o,Re=!0),r=r.queue,ou(hm.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,Po(9,ym.bind(null,n,r,o,t),void 0,null),de===null)throw Error(k(349));Bn&30||vm(n,t,o)}return o}function vm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ym(e,t,n,r){t.value=n,t.getSnapshot=r,bm(t)&&wm(e)}function hm(e,t,n){return n(function(){bm(t)&&wm(e)})}function bm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function wm(e){var t=At(e,1);t!==null&&pt(t,e,1,-1)}function qd(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:e},t.queue=e,e=e.dispatch=Zh.bind(null,J,e),[t.memoizedState,e]}function Po(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xm(){return rt().memoizedState}function Ba(e,t,n,r){var o=bt();J.flags|=e,o.memoizedState=Po(1|t,n,void 0,r===void 0?null:r)}function hi(e,t,n,r){var o=rt();r=r===void 0?null:r;var a=void 0;if(le!==null){var i=le.memoizedState;if(a=i.destroy,r!==null&&tu(r,i.deps)){o.memoizedState=Po(t,n,a,r);return}}J.flags|=e,o.memoizedState=Po(1|t,n,a,r)}function Hd(e,t){return Ba(8390656,8,e,t)}function ou(e,t){return hi(2048,8,e,t)}function Sm(e,t){return hi(4,2,e,t)}function Em(e,t){return hi(4,4,e,t)}function km(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nm(e,t,n){return n=n!=null?n.concat([e]):null,hi(4,4,km.bind(null,t,e),n)}function au(){}function Cm(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&tu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pm(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&tu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _m(e,t,n){return Bn&21?(mt(n,t)||(n=Ap(),J.lanes|=n,On|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function Yh(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=Ml.transition;Ml.transition={};try{e(!1),t()}finally{q=n,Ml.transition=r}}function Mm(){return rt().memoizedState}function Jh(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Tm(e))Lm(t,n);else if(n=dm(e,t,n,r),n!==null){var o=Me();pt(n,e,r,o),Im(n,t,r)}}function Zh(e,t,n){var r=nn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tm(e))Lm(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,mt(l,i)){var s=t.interleaved;s===null?(o.next=o,Xs(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=dm(e,t,o,r),n!==null&&(o=Me(),pt(n,e,r,o),Im(n,t,r))}}function Tm(e){var t=e.alternate;return e===J||t!==null&&t===J}function Lm(e,t){lo=ai=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Im(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$s(e,n)}}var ii={readContext:nt,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},eb={readContext:nt,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Hd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ba(4194308,4,km.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ba(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ba(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Jh.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:qd,useDebugValue:au,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=qd(!1),t=e[0];return e=Yh.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,o=bt();if(X){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),de===null)throw Error(k(349));Bn&30||vm(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Hd(hm.bind(null,r,a,e),[e]),r.flags|=2048,Po(9,ym.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=bt(),t=de.identifierPrefix;if(X){var n=Mt,r=_t;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=No++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tb={readContext:nt,useCallback:Cm,useContext:nt,useEffect:ou,useImperativeHandle:Nm,useInsertionEffect:Sm,useLayoutEffect:Em,useMemo:Pm,useReducer:Tl,useRef:xm,useState:function(){return Tl(Co)},useDebugValue:au,useDeferredValue:function(e){var t=rt();return _m(t,le.memoizedState,e)},useTransition:function(){var e=Tl(Co)[0],t=rt().memoizedState;return[e,t]},useMutableSource:fm,useSyncExternalStore:gm,useId:Mm,unstable_isNewReconciler:!1},nb={readContext:nt,useCallback:Cm,useContext:nt,useEffect:ou,useImperativeHandle:Nm,useInsertionEffect:Sm,useLayoutEffect:Em,useMemo:Pm,useReducer:Ll,useRef:xm,useState:function(){return Ll(Co)},useDebugValue:au,useDeferredValue:function(e){var t=rt();return le===null?t.memoizedState=e:_m(t,le.memoizedState,e)},useTransition:function(){var e=Ll(Co)[0],t=rt().memoizedState;return[e,t]},useMutableSource:fm,useSyncExternalStore:gm,useId:Mm,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ps(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bi={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),o=nn(e),a=Tt(r,o);a.payload=t,n!=null&&(a.callback=n),t=en(e,a,o),t!==null&&(pt(t,e,o,r),ja(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),o=nn(e),a=Tt(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=en(e,a,o),t!==null&&(pt(t,e,o,r),ja(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=nn(e),o=Tt(n,r);o.tag=2,t!=null&&(o.callback=t),t=en(e,o,r),t!==null&&(pt(t,e,r,n),ja(t,e,r))}};function Ud(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!bo(n,r)||!bo(o,a):!0}function Am(e,t,n){var r=!1,o=an,a=t.contextType;return typeof a=="object"&&a!==null?a=nt(a):(o=$e(t)?jn:Ee.current,r=t.contextTypes,a=(r=r!=null)?hr(e,o):an),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Vd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bi.enqueueReplaceState(t,t.state,null)}function ms(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ys(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=nt(a):(a=$e(t)?jn:Ee.current,o.context=hr(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ps(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&bi.enqueueReplaceState(o,o.state,null),ri(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Sr(e,t){try{var n="",r=t;do n+=Iy(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function Il(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rb=typeof WeakMap=="function"?WeakMap:Map;function Rm(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){si||(si=!0,ks=r),fs(e,t)},n}function jm(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){fs(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){fs(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Wd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rb;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=yb.bind(null,e,t,n),t.then(e,e))}function Kd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e)}var ob=jt.ReactCurrentOwner,Re=!1;function _e(e,t,n,r){t.child=e===null?cm(t,null,n,r):wr(t,e.child,n,r)}function Gd(e,t,n,r,o){n=n.render;var a=t.ref;return gr(t,o),r=nu(e,t,n,r,a,o),n=ru(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Rt(e,t,o)):(X&&n&&Us(t),t.flags|=1,_e(e,t,r,o),t.child)}function Xd(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!mu(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,$m(e,t,a,r,o)):(e=Fa(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:bo,n(i,r)&&e.ref===t.ref)return Rt(e,t,o)}return t.flags|=1,e=rn(a,r),e.ref=t.ref,e.return=t,t.child=e}function $m(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(bo(a,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=a,(e.lanes&o)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,Rt(e,t,o)}return gs(e,t,n,r,o)}function Bm(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(cr,Fe),Fe|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(cr,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,V(cr,Fe),Fe|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,V(cr,Fe),Fe|=r;return _e(e,t,o,n),t.child}function Om(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function gs(e,t,n,r,o){var a=$e(n)?jn:Ee.current;return a=hr(t,a),gr(t,o),n=nu(e,t,n,r,a,o),r=ru(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Rt(e,t,o)):(X&&r&&Us(t),t.flags|=1,_e(e,t,n,o),t.child)}function Yd(e,t,n,r,o){if($e(n)){var a=!0;Ja(t)}else a=!1;if(gr(t,o),t.stateNode===null)Oa(e,t),Am(t,n,r),ms(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=$e(n)?jn:Ee.current,u=hr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Vd(t,i,r,u),Vt=!1;var g=t.memoizedState;i.state=g,ri(t,r,i,o),s=t.memoizedState,l!==r||g!==s||je.current||Vt?(typeof c=="function"&&(ps(t,n,c,r),s=t.memoizedState),(l=Vt||Ud(t,n,l,r,g,s,u))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,pm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:st(t.type,l),i.props=u,f=t.pendingProps,g=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=nt(s):(s=$e(n)?jn:Ee.current,s=hr(t,s));var b=n.getDerivedStateFromProps;(c=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==f||g!==s)&&Vd(t,i,r,s),Vt=!1,g=t.memoizedState,i.state=g,ri(t,r,i,o);var p=t.memoizedState;l!==f||g!==p||je.current||Vt?(typeof b=="function"&&(ps(t,n,b,r),p=t.memoizedState),(u=Vt||Ud(t,n,u,r,g,p,s)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,p,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,p,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),i.props=r,i.state=p,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return vs(e,t,n,r,a,o)}function vs(e,t,n,r,o,a){Om(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&$d(t,n,!1),Rt(e,t,a);r=t.stateNode,ob.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=wr(t,e.child,null,a),t.child=wr(t,null,l,a)):_e(e,t,l,a),t.memoizedState=r.state,o&&$d(t,n,!0),t.child}function Dm(e){var t=e.stateNode;t.pendingContext?jd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jd(e,t.context,!1),Js(e,t.containerInfo)}function Jd(e,t,n,r,o){return br(),Ws(o),t.flags|=256,_e(e,t,n,r),t.child}var ys={dehydrated:null,treeContext:null,retryLane:0};function hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function zm(e,t,n){var r=t.pendingProps,o=Y.current,a=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(Y,o&1),e===null)return cs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=i):a=Si(i,r,0,null),e=Rn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=hs(n),t.memoizedState=ys,e):iu(t,i));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return ab(e,t,i,r,l,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=rn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?a=rn(l,a):(a=Rn(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?hs(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=ys,r}return a=e.child,e=a.sibling,r=rn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function iu(e,t){return t=Si({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ma(e,t,n,r){return r!==null&&Ws(r),wr(t,e.child,null,n),e=iu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ab(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=Il(Error(k(422))),Ma(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Si({mode:"visible",children:r.children},o,0,null),a=Rn(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&wr(t,e.child,null,i),t.child.memoizedState=hs(i),t.memoizedState=ys,a);if(!(t.mode&1))return Ma(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(k(419)),r=Il(a,r,void 0),Ma(e,t,i,r)}if(l=(i&e.childLanes)!==0,Re||l){if(r=de,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,At(e,o),pt(r,e,o,-1))}return pu(),r=Il(Error(k(421))),Ma(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=hb.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,qe=Zt(o.nextSibling),He=t,X=!0,ct=null,e!==null&&(Je[Ze++]=_t,Je[Ze++]=Mt,Je[Ze++]=$n,_t=e.id,Mt=e.overflow,$n=t),t=iu(t,r.children),t.flags|=4096,t)}function Zd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ds(e.return,t,n)}function Al(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function Fm(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(_e(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zd(e,n,t);else if(e.tag===19)Zd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Y,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&oi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Al(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&oi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Al(t,!0,n,null,a);break;case"together":Al(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ib(e,t,n){switch(t.tag){case 3:Dm(t),br();break;case 5:mm(t);break;case 1:$e(t.type)&&Ja(t);break;case 4:Js(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;V(ti,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?zm(e,t,n):(V(Y,Y.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);V(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fm(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,Bm(e,t,n)}return Rt(e,t,n)}var qm,bs,Hm,Um;qm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bs=function(){};Hm=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,In(St.current);var a=null;switch(n){case"input":o=Fl(e,o),r=Fl(e,r),a=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),a=[];break;case"textarea":o=Ul(e,o),r=Ul(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xa)}Wl(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(po.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=o?.[u],r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(po.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Q("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Um=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lb(e,t,n){var r=t.pendingProps;switch(Vs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return $e(t.type)&&Ya(),xe(t),null;case 3:return r=t.stateNode,xr(),G(je),G(Ee),eu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(Ps(ct),ct=null))),bs(e,t),xe(t),null;case 5:Zs(t);var o=In(ko.current);if(n=t.type,e!==null&&t.stateNode!=null)Hm(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return xe(t),null}if(e=In(St.current),Pa(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[wt]=t,r[So]=a,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<to.length;o++)Q(to[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":ld(r,a),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Q("invalid",r);break;case"textarea":ud(r,a),Q("invalid",r)}Wl(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Ca(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Ca(r.textContent,l,e),o=["children",""+l]):po.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&Q("scroll",r)}switch(n){case"input":fa(r),sd(r,a,!0);break;case"textarea":fa(r),cd(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Xa)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[wt]=t,e[So]=r,qm(e,t,!1,!1),t.stateNode=e;e:{switch(i=Kl(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<to.length;o++)Q(to[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":ld(e,r),o=Fl(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),Q("invalid",e);break;case"textarea":ud(e,r),o=Ul(e,r),Q("invalid",e);break;default:o=r}Wl(n,o),l=o;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?xp(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&bp(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&mo(e,s):typeof s=="number"&&mo(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(po.hasOwnProperty(a)?s!=null&&a==="onScroll"&&Q("scroll",e):s!=null&&Ts(e,a,s,i))}switch(n){case"input":fa(e),sd(e,r,!1);break;case"textarea":fa(e),cd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+on(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?dr(e,!!r.multiple,a,!1):r.defaultValue!=null&&dr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Xa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)Um(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=In(ko.current),In(St.current),Pa(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(a=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:Ca(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ca(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return xe(t),null;case 13:if(G(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&qe!==null&&t.mode&1&&!(t.flags&128))sm(),br(),t.flags|=98560,a=!1;else if(a=Pa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(k(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(k(317));a[wt]=t}else br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xe(t),a=!1}else ct!==null&&(Ps(ct),ct=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?se===0&&(se=3):pu())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return xr(),bs(e,t),e===null&&wo(t.stateNode.containerInfo),xe(t),null;case 10:return Gs(t.type._context),xe(t),null;case 17:return $e(t.type)&&Ya(),xe(t),null;case 19:if(G(Y),a=t.memoizedState,a===null)return xe(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)Gr(a,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=oi(e),i!==null){for(t.flags|=128,Gr(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Y,Y.current&1|2),t.child}e=e.sibling}a.tail!==null&&ne()>Er&&(t.flags|=128,r=!0,Gr(a,!1),t.lanes=4194304)}else{if(!r)if(e=oi(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!X)return xe(t),null}else 2*ne()-a.renderingStartTime>Er&&n!==1073741824&&(t.flags|=128,r=!0,Gr(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ne(),t.sibling=null,n=Y.current,V(Y,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return du(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Fe&1073741824&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function sb(e,t){switch(Vs(t),t.tag){case 1:return $e(t.type)&&Ya(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xr(),G(je),G(Ee),eu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Zs(t),null;case 13:if(G(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Y),null;case 4:return xr(),null;case 10:return Gs(t.type._context),null;case 22:case 23:return du(),null;case 24:return null;default:return null}}var Ta=!1,Se=!1,ub=typeof WeakSet=="function"?WeakSet:Set,T=null;function ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function ws(e,t,n){try{n()}catch(r){te(e,t,r)}}var ep=!1;function cb(e,t){if(rs=Ka,e=Gp(),Hs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,l=-1,s=-1,u=0,c=0,f=e,g=null;t:for(;;){for(var b;f!==n||o!==0&&f.nodeType!==3||(l=i+o),f!==a||r!==0&&f.nodeType!==3||(s=i+r),f.nodeType===3&&(i+=f.nodeValue.length),(b=f.firstChild)!==null;)g=f,f=b;for(;;){if(f===e)break t;if(g===n&&++u===o&&(l=i),g===a&&++c===r&&(s=i),(b=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=b}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(os={focusedElem:e,selectionRange:n},Ka=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var p=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var y=p.memoizedProps,w=p.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:st(t.type,y),w);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(S){te(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return p=ep,ep=!1,p}function so(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&ws(t,n,a)}o=o.next}while(o!==r)}}function wi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vm(e){var t=e.alternate;t!==null&&(e.alternate=null,Vm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[So],delete t[ls],delete t[Wh],delete t[Kh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wm(e){return e.tag===5||e.tag===3||e.tag===4}function tp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ss(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xa));else if(r!==4&&(e=e.child,e!==null))for(Ss(e,t,n),e=e.sibling;e!==null;)Ss(e,t,n),e=e.sibling}function Es(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Es(e,t,n),e=e.sibling;e!==null;)Es(e,t,n),e=e.sibling}var me=null,ut=!1;function Ht(e,t,n){for(n=n.child;n!==null;)Km(e,t,n),n=n.sibling}function Km(e,t,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(pi,n)}catch{}switch(n.tag){case 5:Se||ur(n,t);case 6:var r=me,o=ut;me=null,Ht(e,t,n),me=r,ut=o,me!==null&&(ut?(e=me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(ut?(e=me,n=n.stateNode,e.nodeType===8?Cl(e.parentNode,n):e.nodeType===1&&Cl(e,n),yo(e)):Cl(me,n.stateNode));break;case 4:r=me,o=ut,me=n.stateNode.containerInfo,ut=!0,Ht(e,t,n),me=r,ut=o;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&(a&2||a&4)&&ws(n,t,i),o=o.next}while(o!==r)}Ht(e,t,n);break;case 1:if(!Se&&(ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,t,l)}Ht(e,t,n);break;case 21:Ht(e,t,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Ht(e,t,n),Se=r):Ht(e,t,n);break;default:Ht(e,t,n)}}function np(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ub),t.forEach(function(r){var o=bb.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:me=l.stateNode,ut=!1;break e;case 3:me=l.stateNode.containerInfo,ut=!0;break e;case 4:me=l.stateNode.containerInfo,ut=!0;break e}l=l.return}if(me===null)throw Error(k(160));Km(a,i,o),me=null,ut=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){te(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qm(t,e),t=t.sibling}function Qm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),ht(e),r&4){try{so(3,e,e.return),wi(3,e)}catch(y){te(e,e.return,y)}try{so(5,e,e.return)}catch(y){te(e,e.return,y)}}break;case 1:lt(t,e),ht(e),r&512&&n!==null&&ur(n,n.return);break;case 5:if(lt(t,e),ht(e),r&512&&n!==null&&ur(n,n.return),e.flags&32){var o=e.stateNode;try{mo(o,"")}catch(y){te(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&vp(o,a),Kl(l,i);var u=Kl(l,a);for(i=0;i<s.length;i+=2){var c=s[i],f=s[i+1];c==="style"?xp(o,f):c==="dangerouslySetInnerHTML"?bp(o,f):c==="children"?mo(o,f):Ts(o,c,f,u)}switch(l){case"input":ql(o,a);break;case"textarea":yp(o,a);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?dr(o,!!a.multiple,b,!1):g!==!!a.multiple&&(a.defaultValue!=null?dr(o,!!a.multiple,a.defaultValue,!0):dr(o,!!a.multiple,a.multiple?[]:"",!1))}o[So]=a}catch(y){te(e,e.return,y)}}break;case 6:if(lt(t,e),ht(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(y){te(e,e.return,y)}}break;case 3:if(lt(t,e),ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yo(t.containerInfo)}catch(y){te(e,e.return,y)}break;case 4:lt(t,e),ht(e);break;case 13:lt(t,e),ht(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(uu=ne())),r&4&&np(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(u=Se)||c,lt(t,e),Se=u):lt(t,e),ht(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(T=e,c=e.child;c!==null;){for(f=T=c;T!==null;){switch(g=T,b=g.child,g.tag){case 0:case 11:case 14:case 15:so(4,g,g.return);break;case 1:ur(g,g.return);var p=g.stateNode;if(typeof p.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(y){te(r,n,y)}}break;case 5:ur(g,g.return);break;case 22:if(g.memoizedState!==null){op(f);continue}}b!==null?(b.return=g,T=b):op(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{o=f.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=f.stateNode,s=f.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=wp("display",i))}catch(y){te(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){te(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:lt(t,e),ht(e),r&4&&np(e);break;case 21:break;default:lt(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wm(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(mo(o,""),r.flags&=-33);var a=tp(e);Es(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,l=tp(e);Ss(e,l,i);break;default:throw Error(k(161))}}catch(s){te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function db(e,t,n){T=e,Gm(e,t,n)}function Gm(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Ta;if(!i){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Se;l=Ta;var u=Se;if(Ta=i,(Se=s)&&!u)for(T=o;T!==null;)i=T,s=i.child,i.tag===22&&i.memoizedState!==null?ap(o):s!==null?(s.return=i,T=s):ap(o);for(;a!==null;)T=a,Gm(a,t,n),a=a.sibling;T=o,Ta=l,Se=u}rp(e,t,n)}else o.subtreeFlags&8772&&a!==null?(a.return=o,T=a):rp(e,t,n)}}function rp(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||wi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Fd(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fd(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&yo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Se||t.flags&512&&xs(t)}catch(g){te(t,t.return,g)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function op(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function ap(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wi(4,t)}catch(s){te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){te(t,o,s)}}var a=t.return;try{xs(t)}catch(s){te(t,a,s)}break;case 5:var i=t.return;try{xs(t)}catch(s){te(t,i,s)}}}catch(s){te(t,t.return,s)}if(t===e){T=null;break}var l=t.sibling;if(l!==null){l.return=t.return,T=l;break}T=t.return}}var pb=Math.ceil,li=jt.ReactCurrentDispatcher,lu=jt.ReactCurrentOwner,tt=jt.ReactCurrentBatchConfig,O=0,de=null,oe=null,fe=0,Fe=0,cr=sn(0),se=0,_o=null,On=0,xi=0,su=0,uo=null,Ae=null,uu=0,Er=1/0,Ct=null,si=!1,ks=null,tn=null,La=!1,Gt=null,ui=0,co=0,Ns=null,Da=-1,za=0;function Me(){return O&6?ne():Da!==-1?Da:Da=ne()}function nn(e){return e.mode&1?O&2&&fe!==0?fe&-fe:Gh.transition!==null?(za===0&&(za=Ap()),za):(e=q,e!==0||(e=window.event,e=e===void 0?16:zp(e.type)),e):1}function pt(e,t,n,r){if(50<co)throw co=0,Ns=null,Error(k(185));Mo(e,n,r),(!(O&2)||e!==de)&&(e===de&&(!(O&2)&&(xi|=n),se===4&&Kt(e,fe)),Be(e,r),n===1&&O===0&&!(t.mode&1)&&(Er=ne()+500,yi&&un()))}function Be(e,t){var n=e.callbackNode;Yy(e,t);var r=Wa(e,e===de?fe:0);if(r===0)n!==null&&md(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&md(n),t===1)e.tag===0?Qh(ip.bind(null,e)):am(ip.bind(null,e)),Uh(function(){!(O&6)&&un()}),n=null;else{switch(Rp(r)){case 1:n=js;break;case 4:n=Lp;break;case 16:n=Va;break;case 536870912:n=Ip;break;default:n=Va}n=rf(n,Xm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xm(e,t){if(Da=-1,za=0,O&6)throw Error(k(327));var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var r=Wa(e,e===de?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ci(e,r);else{t=r;var o=O;O|=2;var a=Jm();(de!==e||fe!==t)&&(Ct=null,Er=ne()+500,An(e,t));do try{gb();break}catch(l){Ym(e,l)}while(!0);Qs(),li.current=a,O=o,oe!==null?t=0:(de=null,fe=0,t=se)}if(t!==0){if(t===2&&(o=Jl(e),o!==0&&(r=o,t=Cs(e,o))),t===1)throw n=_o,An(e,0),Kt(e,r),Be(e,ne()),n;if(t===6)Kt(e,r);else{if(o=e.current.alternate,!(r&30)&&!mb(o)&&(t=ci(e,r),t===2&&(a=Jl(e),a!==0&&(r=a,t=Cs(e,a))),t===1))throw n=_o,An(e,0),Kt(e,r),Be(e,ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Mn(e,Ae,Ct);break;case 3:if(Kt(e,r),(r&130023424)===r&&(t=uu+500-ne(),10<t)){if(Wa(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=is(Mn.bind(null,e,Ae,Ct),t);break}Mn(e,Ae,Ct);break;case 4:if(Kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-dt(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pb(r/1960))-r,10<r){e.timeoutHandle=is(Mn.bind(null,e,Ae,Ct),r);break}Mn(e,Ae,Ct);break;case 5:Mn(e,Ae,Ct);break;default:throw Error(k(329))}}}return Be(e,ne()),e.callbackNode===n?Xm.bind(null,e):null}function Cs(e,t){var n=uo;return e.current.memoizedState.isDehydrated&&(An(e,t).flags|=256),e=ci(e,t),e!==2&&(t=Ae,Ae=n,t!==null&&Ps(t)),e}function Ps(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function mb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!mt(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kt(e,t){for(t&=~su,t&=~xi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function ip(e){if(O&6)throw Error(k(327));vr();var t=Wa(e,0);if(!(t&1))return Be(e,ne()),null;var n=ci(e,t);if(e.tag!==0&&n===2){var r=Jl(e);r!==0&&(t=r,n=Cs(e,r))}if(n===1)throw n=_o,An(e,0),Kt(e,t),Be(e,ne()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,Ae,Ct),Be(e,ne()),null}function cu(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Er=ne()+500,yi&&un())}}function Dn(e){Gt!==null&&Gt.tag===0&&!(O&6)&&vr();var t=O;O|=1;var n=tt.transition,r=q;try{if(tt.transition=null,q=1,e)return e()}finally{q=r,tt.transition=n,O=t,!(O&6)&&un()}}function du(){Fe=cr.current,G(cr)}function An(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hh(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Vs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ya();break;case 3:xr(),G(je),G(Ee),eu();break;case 5:Zs(r);break;case 4:xr();break;case 13:G(Y);break;case 19:G(Y);break;case 10:Gs(r.type._context);break;case 22:case 23:du()}n=n.return}if(de=e,oe=e=rn(e.current,null),fe=Fe=t,se=0,_o=null,su=xi=On=0,Ae=uo=null,Ln!==null){for(t=0;t<Ln.length;t++)if(n=Ln[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}Ln=null}return e}function Ym(e,t){do{var n=oe;try{if(Qs(),$a.current=ii,ai){for(var r=J.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ai=!1}if(Bn=0,ce=le=J=null,lo=!1,No=0,lu.current=null,n===null||n.return===null){se=1,_o=t,oe=null;break}e:{var a=e,i=n.return,l=n,s=t;if(t=fe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var b=Kd(i);if(b!==null){b.flags&=-257,Qd(b,i,l,a,t),b.mode&1&&Wd(a,u,t),t=b,s=u;var p=t.updateQueue;if(p===null){var y=new Set;y.add(s),t.updateQueue=y}else p.add(s);break e}else{if(!(t&1)){Wd(a,u,t),pu();break e}s=Error(k(426))}}else if(X&&l.mode&1){var w=Kd(i);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Qd(w,i,l,a,t),Ws(Sr(s,l));break e}}a=s=Sr(s,l),se!==4&&(se=2),uo===null?uo=[a]:uo.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=Rm(a,s,t);zd(a,m);break e;case 1:l=s;var d=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(tn===null||!tn.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=jm(a,l,t);zd(a,S);break e}}a=a.return}while(a!==null)}ef(n)}catch(x){t=x,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Jm(){var e=li.current;return li.current=ii,e===null?ii:e}function pu(){(se===0||se===3||se===2)&&(se=4),de===null||!(On&268435455)&&!(xi&268435455)||Kt(de,fe)}function ci(e,t){var n=O;O|=2;var r=Jm();(de!==e||fe!==t)&&(Ct=null,An(e,t));do try{fb();break}catch(o){Ym(e,o)}while(!0);if(Qs(),O=n,li.current=r,oe!==null)throw Error(k(261));return de=null,fe=0,se}function fb(){for(;oe!==null;)Zm(oe)}function gb(){for(;oe!==null&&!qy();)Zm(oe)}function Zm(e){var t=nf(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?ef(e):oe=t,lu.current=null}function ef(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=sb(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,oe=null;return}}else if(n=lb(n,t,Fe),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);se===0&&(se=5)}function Mn(e,t,n){var r=q,o=tt.transition;try{tt.transition=null,q=1,vb(e,t,n,r)}finally{tt.transition=o,q=r}return null}function vb(e,t,n,r){do vr();while(Gt!==null);if(O&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Jy(e,a),e===de&&(oe=de=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||La||(La=!0,rf(Va,function(){return vr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=tt.transition,tt.transition=null;var i=q;q=1;var l=O;O|=4,lu.current=null,cb(e,n),Qm(n,e),Oh(os),Ka=!!rs,os=rs=null,e.current=n,db(n,e,o),Hy(),O=l,q=i,tt.transition=a}else e.current=n;if(La&&(La=!1,Gt=e,ui=o),a=e.pendingLanes,a===0&&(tn=null),Wy(n.stateNode,r),Be(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(si)throw si=!1,e=ks,ks=null,e;return ui&1&&e.tag!==0&&vr(),a=e.pendingLanes,a&1?e===Ns?co++:(co=0,Ns=e):co=0,un(),null}function vr(){if(Gt!==null){var e=Rp(ui),t=tt.transition,n=q;try{if(tt.transition=null,q=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,ui=0,O&6)throw Error(k(331));var o=O;for(O|=4,T=e.current;T!==null;){var a=T,i=a.child;if(T.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(T=u;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:so(8,c,a)}var f=c.child;if(f!==null)f.return=c,T=f;else for(;T!==null;){c=T;var g=c.sibling,b=c.return;if(Vm(c),c===u){T=null;break}if(g!==null){g.return=b,T=g;break}T=b}}}var p=a.alternate;if(p!==null){var y=p.child;if(y!==null){p.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}T=a}}if(a.subtreeFlags&2064&&i!==null)i.return=a,T=i;else e:for(;T!==null;){if(a=T,a.flags&2048)switch(a.tag){case 0:case 11:case 15:so(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,T=m;break e}T=a.return}}var d=e.current;for(T=d;T!==null;){i=T;var v=i.child;if(i.subtreeFlags&2064&&v!==null)v.return=i,T=v;else e:for(i=d;T!==null;){if(l=T,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:wi(9,l)}}catch(x){te(l,l.return,x)}if(l===i){T=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,T=S;break e}T=l.return}}if(O=o,un(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(pi,e)}catch{}r=!0}return r}finally{q=n,tt.transition=t}}return!1}function lp(e,t,n){t=Sr(n,t),t=Rm(e,t,1),e=en(e,t,1),t=Me(),e!==null&&(Mo(e,1,t),Be(e,t))}function te(e,t,n){if(e.tag===3)lp(e,e,n);else for(;t!==null;){if(t.tag===3){lp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=Sr(n,e),e=jm(t,e,1),t=en(t,e,1),e=Me(),t!==null&&(Mo(t,1,e),Be(t,e));break}}t=t.return}}function yb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(fe&n)===n&&(se===4||se===3&&(fe&130023424)===fe&&500>ne()-uu?An(e,0):su|=n),Be(e,t)}function tf(e,t){t===0&&(e.mode&1?(t=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):t=1);var n=Me();e=At(e,t),e!==null&&(Mo(e,t,n),Be(e,n))}function hb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tf(e,n)}function bb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),tf(e,n)}var nf;nf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,ib(e,t,n);Re=!!(e.flags&131072)}else Re=!1,X&&t.flags&1048576&&im(t,ei,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Oa(e,t),e=t.pendingProps;var o=hr(t,Ee.current);gr(t,n),o=nu(null,t,r,e,o,n);var a=ru();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(a=!0,Ja(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ys(t),o.updater=bi,t.stateNode=o,o._reactInternals=t,ms(t,r,e,n),t=vs(null,t,r,!0,a,n)):(t.tag=0,X&&a&&Us(t),_e(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Oa(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=xb(r),e=st(r,e),o){case 0:t=gs(null,t,r,e,n);break e;case 1:t=Yd(null,t,r,e,n);break e;case 11:t=Gd(null,t,r,e,n);break e;case 14:t=Xd(null,t,r,st(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),gs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Yd(e,t,r,o,n);case 3:e:{if(Dm(t),e===null)throw Error(k(387));r=t.pendingProps,a=t.memoizedState,o=a.element,pm(e,t),ri(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Sr(Error(k(423)),t),t=Jd(e,t,r,n,o);break e}else if(r!==o){o=Sr(Error(k(424)),t),t=Jd(e,t,r,n,o);break e}else for(qe=Zt(t.stateNode.containerInfo.firstChild),He=t,X=!0,ct=null,n=cm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),r===o){t=Rt(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return mm(t),e===null&&cs(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,as(r,o)?i=null:a!==null&&as(r,a)&&(t.flags|=32),Om(e,t),_e(e,t,i,n),t.child;case 6:return e===null&&cs(t),null;case 13:return zm(e,t,n);case 4:return Js(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wr(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Gd(e,t,r,o,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,V(ti,r._currentValue),r._currentValue=i,a!==null)if(mt(a.value,i)){if(a.children===o.children&&!je.current){t=Rt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){i=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Tt(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ds(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(k(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),ds(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}_e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,gr(t,n),o=nt(o),r=r(o),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,o=st(r,t.pendingProps),o=st(r.type,o),Xd(e,t,r,o,n);case 15:return $m(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Oa(e,t),t.tag=1,$e(r)?(e=!0,Ja(t)):e=!1,gr(t,n),Am(t,r,o),ms(t,r,o,n),vs(null,t,r,!0,e,n);case 19:return Fm(e,t,n);case 22:return Bm(e,t,n)}throw Error(k(156,t.tag))};function rf(e,t){return Tp(e,t)}function wb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new wb(e,t,n,r)}function mu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xb(e){if(typeof e=="function")return mu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Is)return 11;if(e===As)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fa(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")mu(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case er:return Rn(n.children,o,a,t);case Ls:i=8,o|=8;break;case Bl:return e=et(12,n,t,o|2),e.elementType=Bl,e.lanes=a,e;case Ol:return e=et(13,n,t,o),e.elementType=Ol,e.lanes=a,e;case Dl:return e=et(19,n,t,o),e.elementType=Dl,e.lanes=a,e;case mp:return Si(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case dp:i=10;break e;case pp:i=9;break e;case Is:i=11;break e;case As:i=14;break e;case Ut:i=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=et(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Rn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function Si(e,t,n,r){return e=et(22,e,r,t),e.elementType=mp,e.lanes=n,e.stateNode={isHidden:!1},e}function Rl(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function jl(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sb(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hl(0),this.expirationTimes=hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function fu(e,t,n,r,o,a,i,l,s){return e=new Sb(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=et(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ys(a),e}function Eb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function of(e){if(!e)return an;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if($e(n))return om(e,n,t)}return t}function af(e,t,n,r,o,a,i,l,s){return e=fu(n,r,!0,e,o,a,i,l,s),e.context=of(null),n=e.current,r=Me(),o=nn(n),a=Tt(r,o),a.callback=t??null,en(n,a,o),e.current.lanes=o,Mo(e,o,r),Be(e,r),e}function Ei(e,t,n,r){var o=t.current,a=Me(),i=nn(o);return n=of(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(o,t,i),e!==null&&(pt(e,o,i,a),ja(e,o,i)),i}function di(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gu(e,t){sp(e,t),(e=e.alternate)&&sp(e,t)}function kb(){return null}var lf=typeof reportError=="function"?reportError:function(e){console.error(e)};function vu(e){this._internalRoot=e}ki.prototype.render=vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Ei(e,t,null,null)};ki.prototype.unmount=vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dn(function(){Ei(null,e,null,null)}),t[It]=null}};function ki(e){this._internalRoot=e}ki.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&t!==0&&t<Wt[n].priority;n++);Wt.splice(n,0,e),n===0&&Dp(e)}};function yu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ni(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function up(){}function Nb(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=di(i);a.call(u)}}var i=af(t,r,e,0,null,!1,!1,"",up);return e._reactRootContainer=i,e[It]=i.current,wo(e.nodeType===8?e.parentNode:e),Dn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=di(s);l.call(u)}}var s=fu(e,0,!1,null,null,!1,!1,"",up);return e._reactRootContainer=s,e[It]=s.current,wo(e.nodeType===8?e.parentNode:e),Dn(function(){Ei(t,s,n,r)}),s}function Ci(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var l=o;o=function(){var s=di(i);l.call(s)}}Ei(t,i,e,o)}else i=Nb(n,t,e,o,r);return di(i)}jp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=eo(t.pendingLanes);n!==0&&($s(t,n|1),Be(t,ne()),!(O&6)&&(Er=ne()+500,un()))}break;case 13:Dn(function(){var r=At(e,1);if(r!==null){var o=Me();pt(r,e,1,o)}}),gu(e,1)}};Bs=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=Me();pt(t,e,134217728,n)}gu(e,134217728)}};$p=function(e){if(e.tag===13){var t=nn(e),n=At(e,t);if(n!==null){var r=Me();pt(n,e,t,r)}gu(e,t)}};Bp=function(){return q};Op=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Gl=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=vi(r);if(!o)throw Error(k(90));gp(r),ql(r,o)}}}break;case"textarea":yp(e,n);break;case"select":t=n.value,t!=null&&dr(e,!!n.multiple,t,!1)}};kp=cu;Np=Dn;var Cb={usingClientEntryPoint:!1,Events:[Lo,or,vi,Sp,Ep,cu]},Xr={findFiberByHostInstance:Tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pb={bundleType:Xr.bundleType,version:Xr.version,rendererPackageName:Xr.rendererPackageName,rendererConfig:Xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_p(e),e===null?null:e.stateNode},findFiberByHostInstance:Xr.findFiberByHostInstance||kb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Yr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Yr.isDisabled&&Yr.supportsFiber))try{pi=Yr.inject(Pb),xt=Yr}catch{}var Yr;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cb;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yu(t))throw Error(k(200));return Eb(e,t,null,n)};We.createRoot=function(e,t){if(!yu(e))throw Error(k(299));var n=!1,r="",o=lf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=fu(e,1,!1,null,null,n,!1,r,o),e[It]=t.current,wo(e.nodeType===8?e.parentNode:e),new vu(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=_p(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return Dn(e)};We.hydrate=function(e,t,n){if(!Ni(t))throw Error(k(200));return Ci(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!yu(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=lf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=af(t,null,e,1,n??null,o,!1,a,i),e[It]=t.current,wo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ki(t)};We.render=function(e,t,n){if(!Ni(t))throw Error(k(200));return Ci(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!Ni(e))throw Error(k(40));return e._reactRootContainer?(Dn(function(){Ci(null,null,e,!1,function(){e._reactRootContainer=null,e[It]=null})}),!0):!1};We.unstable_batchedUpdates=cu;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ni(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ci(e,t,n,!1,r)};We.version="18.3.1-next-f1338f8080-20240426"});var df=Nt((P1,cf)=>{"use strict";function uf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uf)}catch(e){console.error(e)}}uf(),cf.exports=sf()});var mf=Nt(hu=>{"use strict";var pf=df();hu.createRoot=pf.createRoot,hu.hydrateRoot=pf.hydrateRoot;var _1});var hg=Nt($i=>{"use strict";var Ob=ze(),Db=Symbol.for("react.element"),zb=Symbol.for("react.fragment"),Fb=Object.prototype.hasOwnProperty,qb=Ob.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hb={key:!0,ref:!0,__self:!0,__source:!0};function yg(e,t,n){var r,o={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Fb.call(t,r)&&!Hb.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Db,type:e,key:a,ref:i,props:o,_owner:qb.current}}$i.Fragment=zb;$i.jsx=yg;$i.jsxs=yg});var re=Nt((D1,bg)=>{"use strict";bg.exports=hg()});var Dv=D(mf(),1),Br=D(ze(),1);var Bi=D(ze(),1);var cn="https://biwtools.es";var Cr=null,ff=0;async function H(){if(Cr&&Date.now()-ff<9e5)return Cr;try{let e=await fetch(`${cn}/catalog.json`,{cache:"no-store"});if(!e.ok)throw new Error(`${e.status}`);let t=await e.json();Cr=new Map(t.map(n=>[n.id,n])),ff=Date.now(),Pr=null}catch(e){console.warn("[biwtools] Cat\xE1logo compartido no disponible, usando fallback por jugador:",e),Cr||(Cr=new Map)}return Cr}async function _r(e){return(await H()).get(String(e))}function gf(e){return e.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}var Pr=null;async function _i(e){let t=await H();if(!Pr){Pr=new Map;for(let n of t.values()){let r=gf(n.name);Pr.has(r)||Pr.set(r,n)}}return Pr.get(gf(e))}var Ao=null,vf=0;async function Mr(e){if(!Ao||Date.now()-vf>=9e5)try{let t=await fetch(`${cn}/price-history.json`,{cache:"no-store"});if(!t.ok)throw new Error(`${t.status}`);let n=await t.json();Ao=new Map(Object.entries(n)),vf=Date.now()}catch(t){console.warn("[biwtools] Hist\xF3rico de precios no disponible:",t),Ao||(Ao=new Map)}return Ao.get(String(e))}var Pi=new Map;async function ft(e){let t=String(e);if(Pi.has(t))return Pi.get(t);try{let n=await fetch(`https://cf.biwenger.com/api/v2/players/la-liga/${t}?lang=es&fields=reports`,{headers:{Accept:"application/json"}});if(!n.ok)throw new Error(`${n.status}`);let a=((await n.json())?.data?.reports??[]).filter(i=>i?.match?.competition?.slug==="la-liga"&&i?.points).map(i=>({date:new Date((i.match?.date??0)*1e3).toISOString(),roundShort:i.match?.round?.short??"",opponentName:(i.home?i.match?.away?.name:i.match?.home?.name)??"?",home:!!i.home,points:i.points,goals:Number(i.rawStats?.goals??0),assists:Number(i.rawStats?.assists??0),yellowCards:Number(i.rawStats?.yellowCard??0),redCards:Number(i.rawStats?.redCard??0),rawStats:i.rawStats??{}}));return Pi.set(t,a),a}catch(n){return console.warn("[biwtools] Informes de partidos no disponibles:",n),Pi.set(t,[]),[]}}var Ro=null,yf=0;async function Mi(){if(!Ro||Date.now()-yf>=9e5)try{let e=await fetch(`${cn}/lineups.json`,{cache:"no-store"});if(!e.ok)throw new Error(`${e.status}`);let t=await e.json();Ro={players:new Map(Object.entries(t.players??{})),extras:t.extras??[],alternatives:new Map(Object.entries(t.alternatives??{}))},yf=Date.now(),Bo=null}catch(e){console.warn("[biwtools] Onces probables no disponibles:",e),Ro||(Ro={players:new Map,extras:[],alternatives:new Map})}return Ro}async function Oo(){return(await Mi()).players}async function wf(){return(await Mi()).extras}async function Do(){return(await Mi()).alternatives}var Bo=null;async function Et(e){if(!Bo){let t=await Do();Bo=new Map;for(let n of t.values())for(let r of n)r.id&&Bo.set(r.id,r)}return Bo.get(String(e))}async function pe(e){return(await Oo()).get(String(e))}var jo=null,hf=0;async function xf(){if(!jo||Date.now()-hf>=9e5)try{let e=await fetch(`${cn}/injuries.json`,{cache:"no-store"});if(!e.ok)throw new Error(`${e.status}`);jo=(await e.json()).injuries??[],hf=Date.now()}catch(e){console.warn("[biwtools] Estado f\xEDsico (lesionados) no disponible:",e),jo||(jo=[])}return jo}var $o=null,bf=0;async function Sf(){if(!$o||Date.now()-bf>=9e5)try{let e=await fetch(`${cn}/fixtures.json`,{cache:"no-store"});if(!e.ok)throw new Error(`${e.status}`);let t=await e.json();$o=new Map(Object.entries(t)),bf=Date.now()}catch(e){console.warn("[biwtools] Calendario de LaLiga no disponible:",e),$o||($o=new Map)}return $o}async function kt(e){return(await Sf()).get(String(e))}function Ef(){H(),Mi(),Sf()}function wu(e){return new Promise((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)})}function _b(e,t){let n,r=()=>{if(n)return n;let o=indexedDB.open(e);return o.onupgradeneeded=()=>o.result.createObjectStore(t),n=wu(o),n.then(a=>{a.onclose=()=>n=void 0},()=>{n=void 0}),n};return(o,a)=>r().then(i=>a(i.transaction(t,o).objectStore(t)))}var bu;function kf(){return bu||(bu=_b("keyval-store","keyval")),bu}function dn(e,t=kf()){return t("readonly",n=>wu(n.get(e)))}function qn(e,t,n=kf()){return n("readwrite",r=>(r.put(t,e),wu(r.transaction)))}var Tr=class extends Error{};function xu(){let e=localStorage.getItem("satellizer_token");if(!e)throw new Tr("No se encontr\xF3 sesi\xF3n de Biwenger. Inicia sesi\xF3n en biwenger.as.com primero.");return e.replace(/^"|"$/g,"")}function ke(){let e=localStorage.getItem("league");if(!e)throw new Tr("No se encontr\xF3 ninguna liga activa seleccionada en Biwenger.");return e}var Ti=null;async function Li(e={}){if(Ti&&!e.fresh)return Ti;let t=xu(),n=ke(),r=await fetch("https://biwenger.as.com/api/v2/account",{headers:{Authorization:`Bearer ${t}`,"X-Lang":"es"}});if(!r.ok)throw new Tr(`No se pudo resolver la cuenta: ${r.status}`);let i=((await r.json())?.data?.leagues??[]).find(s=>String(s.id)===String(n)),l=i?.user?.id;if(l==null)throw new Tr("No se encontr\xF3 tu id de miembro para la liga activa en /account.");return Ti={id:String(l),balance:Number(i?.user?.balance??0),favorites:(i?.user?.favorites??[]).map(String)},Ti}async function pn(){return(await Li()).id}async function Nf(){return(await Li()).favorites}function Mb(){return{players:{},movements:[],syncState:{},positionBreakdown:{},teamValue:{},inactive:{},mySquad:[],ownedPlayerIds:[],bids:[],startingBalances:{},startingBalancesUnresolved:{}}}function Su(e){return`biwtools:league:${e}`}function _f(e){return`biwtools:lineup:${e}`}function Mf(e){return`biwtools:positions:${e}`}function Eu(e){return`biwtools:roundlineups:${e}`}function ku(e){return`biwtools:managericons:${e}`}var mn=null;function Nu(e){return`${e.player_id}|${e.type}|${e.amount}|${e.occurred_at}|${e.player_ref_id??""}`}function Tb(e){let t=new Set,n=[];for(let o of e.movements){let a=Nu(o);t.has(a)||(t.add(a),n.push(o))}let r=e.movements.length-n.length;return r>0&&(e.movements=n),r}async function z(){let e=ke();if(mn&&mn.leagueId===e)return mn;let t=await dn(Su(e))??Mb();t.mySquad??(t.mySquad=[]),t.ownedPlayerIds??(t.ownedPlayerIds=[]),t.bids??(t.bids=[]),t.startingBalances??(t.startingBalances={}),t.startingBalancesUnresolved??(t.startingBalancesUnresolved={});let n=Tb(t);return mn={leagueId:e,state:t,movementIds:new Set(t.movements.map(r=>r.id)),movementFingerprints:new Set(t.movements.map(Nu)),bidIds:new Set(t.bids.map(r=>r.id))},n>0&&await qn(Su(e),t),mn}async function Cu(){mn&&await qn(Su(mn.leagueId),mn.state)}async function zo(e){let{state:t}=await z();t.players[e.id]=e}async function Tf(e){let{state:t,movementIds:n,movementFingerprints:r}=await z(),o=Nu(e);r.has(o)||n.has(e.id)||(n.add(e.id),r.add(o),t.movements.push(e))}async function Lf(e){let{bidIds:t}=await z();return t.has(e)}async function If(e){let{state:t,bidIds:n}=await z();n.has(e.id)||(n.add(e.id),t.bids.push(e))}async function Af(){let{state:e}=await z();return e.movements}var Lb=["0-1M","1-5M","5-10M",">10M"];function Fo(e){return e<1e6?"0-1M":e<5e6?"1-5M":e<1e7?"5-10M":">10M"}function Cf(e){return{count:e.length,avgPct:e.reduce((t,n)=>t+n,0)/e.length,minPct:Math.min(...e),maxPct:Math.max(...e)}}function Pf(e){let t={};for(let n of Lb){let r=e.filter(o=>o.tier===n).map(o=>o.pct);r.length>0&&(t[n]=Cf(r))}return{...Cf(e.map(n=>n.pct)),byTier:t}}function Pu(e){var o;let t={},n=[];for(let a of e){let i={pct:a.pct,tier:Fo(a.marketPrice)};(t[o=a.managerId]??(t[o]=[])).push(i),n.push(i)}let r={};for(let[a,i]of Object.entries(t))r[a]=Pf(i);return{managers:r,league:n.length>0?Pf(n):null,observations:e}}async function Rf(){let{state:e}=await z(),{date:t}=await qo(),n=[];for(let r of e.bids)r.occurred_at<=t||!r.market_price||n.push({managerId:r.manager_id,marketPrice:r.market_price,pct:r.amount/r.market_price-1,occurredAt:r.occurred_at,trend7d:r.trend7d??null,titular:r.titular??null});return Pu(n)}async function jf(){let{state:e}=await z(),{date:t}=await qo();return e.bids.filter(n=>n.occurred_at>t)}async function $f(){let{state:e}=await z();return e.bids}async function fn(e){let{state:t}=await z();return t.syncState[e]}async function Le(e,t){let{state:n}=await z();n.syncState[e]=t}async function Bf(e){let{state:t}=await z();t.inactive[e]=!0}async function Of(e){let{state:t}=await z();delete t.inactive[e]}async function Df(){let{state:e}=await z();return Object.keys(e.players)}async function zf(e,t,n,r){let{state:o}=await z();o.teamValue[e]={teamValue:t,squadSize:n,changeToday:r}}async function Ff(e,t){let{state:n}=await z();n.positionBreakdown[e]=t}async function qf(e){let{state:t}=await z();t.mySquad=e}async function gn(){let{state:e}=await z();return e.mySquad}async function Hf(e){let{state:t}=await z();t.ownedPlayerIds=e}async function Lr(){let{state:e}=await z();return e.ownedPlayerIds}async function Uf(e){await qn(_f(ke()),e)}async function vn(){return await dn(_f(ke()))??[]}async function Vf(e){await qn(Mf(ke()),e)}async function Wf(){return await dn(Mf(ke()))??{}}async function Kf(e,t){let n=await dn(Eu(ke()))??{};n[e]=t,await qn(Eu(ke()),n)}async function Qf(){return await dn(Eu(ke()))??{}}async function Gf(e){let t=await dn(ku(ke()))??{};await qn(ku(ke()),{...t,...e})}async function Ii(){return await dn(ku(ke()))??{}}var Ib={balance:0,quarterTeam:.25,halfTeam:.5,team:1,doubleTeam:2};async function Xf(e){await Le("maximumBidSetting",e)}async function Yf(e){await Le("scoreID",e)}async function Oe(){return await fn("scoreID")??"1"}async function Jf(e){await Le("customScoreFormula",e)}async function yn(){return fn("customScoreFormula")}async function Zf(){let e=await fn("maximumBidSetting");return e!=null?Ib[e]??.25:.25}async function qo(){let{state:e}=await z();return{date:e.syncState.seasonAnchorDate??"1970-01-01T00:00:00.000Z",startingBalance:Number(e.syncState.seasonStartingBalance??0)}}async function eg(e,t){let{state:n}=await z();n.syncState.seasonAnchorDate=e,n.syncState.seasonStartingBalance=String(t)}async function tg(){let{state:e}=await z();e.startingBalances={},e.startingBalancesUnresolved={}}async function ng(){let e=await z();e.state.movements=[],e.state.bids=[],e.movementIds.clear(),e.movementFingerprints.clear(),e.bidIds.clear()}async function Ai(){let{state:e}=await z();return e.syncState.movementsHistoryCompleteV1==="1"}async function _u(e){let{state:t}=await z();return t.movements.filter(n=>n.player_id===e)}async function Ri(){let{state:e}=await z(),{date:t,startingBalance:n}=await qo();return Object.values(e.players).filter(r=>!e.inactive[r.id]).map(r=>{let o=e.movements.filter(l=>l.player_id===r.id&&l.occurred_at>t).reduce((l,s)=>l+s.amount,0),a=n+o,i=e.teamValue[r.id];return{id:r.id,name:r.name,icon:r.icon,team_value:i?.teamValue??null,squad_size:i?.squadSize??null,team_value_change_today:i?.changeToday??null,balance:a,balance_exact:!1}}).sort((r,o)=>o.balance-r.balance)}async function rg(e,t){let{state:n}=await z();return n.movements.filter(r=>r.player_id===e&&r.occurred_at>t).reduce((r,o)=>r+o.amount,0)}async function ji(e,t){let{state:n}=await z(),r=n.movements.filter(o=>o.player_ref_id===e&&o.player_id===t&&(o.type==="compra"||o.type==="clausula_compra")).sort((o,a)=>o.occurred_at<a.occurred_at?1:-1);return r.length>0?Math.abs(r[0].amount):null}async function og(){let e=await Ri(),t=await Zf();return e.map(n=>({id:n.id,name:n.name,maxBid:Math.round(n.balance+(n.team_value??0)*t)}))}async function ag(e){let{state:t}=await z(),{date:n,startingBalance:r}=await qo(),o=t.movements.filter(a=>a.occurred_at>n);return{anchor:n,startingBalance:r,totalMovements:t.movements.length,movementsAfterAnchor:o.length,myNet:e?o.filter(a=>a.player_id===e).reduce((a,i)=>a+i.amount,0):null,historyComplete:t.syncState.movementsHistoryCompleteV1==="1",rebuildDone:t.syncState.movementsStableIdsRebuildV2==="1",exactDisabled:t.syncState.exactStartingBalancesDisabledV2==="1"}}async function hn(){let{state:e}=await z(),t=await Ri(),n=await Zf();return t.map(r=>{let o=e.positionBreakdown[r.id]??{};return{id:r.id,name:r.name,balance:r.balance,maxBid:Math.round(r.balance+(r.team_value??0)*n),netWorth:Math.round(r.balance+(r.team_value??0)),netWorthChangeToday:r.team_value_change_today,byPosition:o}})}async function ig(e=60){let{state:t}=await z(),{date:n}=await qo();return t.movements.filter(r=>r.occurred_at>n).sort((r,o)=>o.occurred_at.localeCompare(r.occurred_at)).slice(0,e).map(r=>({...r,managerName:t.players[r.player_id]?.name??r.player_id}))}var Ab=3,Tu=5,sg=8,Rb=1.25;function Ho(e,t){let n=Date.parse(t),r=e.map(s=>({t:Date.parse(s.date),price:s.price})).filter(s=>s.t<=n+864e5).sort((s,u)=>s.t-u.t);if(r.length<2)return null;let o=r[r.length-1];if(n-o.t>5*864e5)return null;let a=o.t-7*864e5,i=r[0],l=1/0;for(let s of r){let u=Math.abs(s.t-a);u<l&&(l=u,i=s)}return l>4*864e5||i.t>=o.t?null:ug(o.price/i.price-1)}var ug=e=>Math.max(-.3,Math.min(.3,e)),cg=e=>e==null?0:ug(e),dg=e=>e==null?0:e?.5:-.5,pg=e=>Math.log(Math.max(1+e,.5)),Lu=[25e4,8e5,15e5,4e6,8e6,12e6],jb=Lu.length+1;function mg(e){let t=0;for(;t<Lu.length&&e>=Lu[t];)t++;return t}function Mu(e,t,n){let r=e.length,o=e.reduce((s,u)=>s+u,0)/r,a=t.reduce((s,u)=>s+u,0)/r,i=0,l=0;for(let s=0;s<r;s++)i+=(e[s]-o)**2,l+=(e[s]-o)*(t[s]-a);return{slope:i>=r*n?l/i:0,mx:o}}function $b(e){if(e.length<sg)return null;let t=e.length,n=e.map(d=>Math.log(d.marketPrice)),r=e.map(d=>pg(d.pct)),o=Mu(n,r,.16),a=Math.max(-1.5,Math.min(0,o.slope)),l=r.reduce((d,v)=>d+v,0)/t-a*o.mx,s=r.map((d,v)=>d-(l+a*n[v])),u=e.map(d=>cg(d.trend7d)),c=Mu(u,s,4e-4),f=Math.max(0,Math.min(4,c.slope));for(let d=0;d<t;d++)s[d]-=f*(u[d]-c.mx);l-=f*c.mx;let g=e.map(d=>dg(d.titular)),b=g.filter(d=>d>0).length,p=g.filter(d=>d<0).length,y=0;if(b>=3&&p>=3){let d=Mu(g,s,.02);y=Math.max(0,Math.min(.6,d.slope));for(let v=0;v<t;v++)s[v]-=y*(g[v]-d.mx);l-=y*d.mx}let w=Array.from({length:jb},()=>[]);e.forEach((d,v)=>w[mg(d.marketPrice)].push(s[v]));let m=w.map(d=>{if(d.length===0)return 0;let S=d.reduce((x,C)=>x+C,0)/d.length*(d.length/(d.length+3));return Math.max(Math.log(.75),Math.min(Math.log(1.25),S))});return{a:l,b:a,cTrend:f,cTitular:y,tierOffset:m,count:t}}function Iu(e,t,n){return e.a+e.b*Math.log(t)+e.cTrend*cg(n?.trend7d)+e.cTitular*dg(n?.titular)+e.tierOffset[mg(t)]}function Bb(e,t){let n=t.map(a=>pg(a.pct)-Iu(e,a.marketPrice,{trend7d:a.trend7d,titular:a.titular})),o=n.reduce((a,i)=>a+i,0)/n.length*(n.length/(n.length+3));return Math.max(Math.log(.75),Math.min(Math.log(1.25),o))}function Au(e){var l;let{managers:t,league:n,observations:r}=e,o=$b(r),a={};for(let s of r)(a[l=s.managerId]??(a[l]=[])).push(s);let i=r.reduce((s,u)=>Math.max(s,u.pct*u.marketPrice),0);return(s,u,c,f)=>{let g=t[c],b=Fo(s),p=g?.byTier[b],y=n?.byTier[b],w=a[c]??[],m,d,v;if(o&&w.length>0)m=Math.exp(Iu(o,s,f)+Bb(o,w))-1,d="model-adjusted",v=w.length;else if(o)m=Math.exp(Iu(o,s,f))-1,d="model",v=o.count;else if(p&&p.count>=Ab)m=p.avgPct,d="rival-tier",v=p.count;else if(g&&n&&y&&y.count>=Tu){let _=Math.max(.75,Math.min(1.25,(1+g.avgPct)/(1+n.avgPct)));m=(1+y.avgPct)*_-1,d="rival-adjusted",v=y.count}else if(y&&y.count>=Tu)m=y.avgPct,d="league-tier",v=y.count;else if(g)m=g.avgPct,d="rival-global",v=g.count;else return null;let S=s*(1+m),x=s+i*Rb,C=S>x;C&&(S=x,m=S/s-1);let N=u>=s?Math.max(s,Math.min(Math.round(S),u)):null;return{pct:m,amount:N,source:d,sampleCount:v,capped:C}}}function Ru(e,t){if(!t)return null;let n=e.filter(o=>Object.keys(o.byPosition).length>0);if(n.length===0)return null;let r=n.reduce((o,a)=>o+(a.byPosition[t]??0),0)/n.length;return Math.ceil(r)}function ju(e,t,n){return t==null||n==null||Object.keys(e.byPosition).length===0?!1:(e.byPosition[t]??0)>n}var lg=e=>Math.ceil((e+1)/1e4)*1e4;function fg(e){let{price:t,position:n,rivals:r,estimates:o}=e,a=r.map(p=>({rival:p,amount:o[p.id]?.amount})).filter(p=>p.amount!=null);if(a.length===0)return null;let i=Ru(r,n),l=a.filter(p=>!ju(p.rival,n,i)),s=p=>p.reduce((y,w)=>w.amount>y.amount?w:y,p[0]),u=l.length>0?s(l):null,c=s(a),f=u?Math.max(lg(u.amount),t):t,b=c.amount>(u?.amount??-1/0)?Math.max(lg(c.amount),t):null;return{amount:f,coveredRivalId:u?.rival.id??null,coveredRivalName:u?.rival.name??null,unlikelyCount:a.length-l.length,safeAmount:b!=null&&b!==f?b:null,safeRivalName:b!=null&&b!==f?c.rival.name:null}}function gg(e,t){let n=e.filter(a=>a.occurredAt<t.occurredAt);if(n.length===0)return null;let o=Au(Pu(n))(t.marketPrice,Number.POSITIVE_INFINITY,t.managerId,t.signals);return o?.amount==null?null:{estimated:o.amount,paid:t.paid,diffPct:t.paid/o.amount-1}}function vg(e,t,n){let r=Fo(e),o=t.observations.length,a=t.observations.filter(i=>Fo(i.marketPrice)===r).length;return o<sg?{level:"baja",detail:`Solo ${o} puja${o===1?"":"s"} observada${o===1?"":"s"} en la liga: a\xFAn no hay base suficiente para estimar`}:a===0?{level:"baja",detail:"Ninguna puja vista en la liga por jugadores de este rango de precio: la estimaci\xF3n extrapola desde pujas en otros rangos, con el m\xE1ximo sobreprecio en \u20AC como \xFAnico guardarra\xEDl"}:n?.source==="model-adjusted"&&n.sampleCount>=3&&a>=Tu?{level:"alta",detail:`La liga acumula ${a} pujas en este rango de precio y el rival que marca el list\xF3n tiene ${n.sampleCount} pujas propias con las que personalizar la curva`}:{level:"media",detail:`La liga acumula ${a} puja${a===1?"":"s"} en este rango de precio, pero el rival que marca el list\xF3n tiene poco historial propio con el que personalizar la curva`}}var ee=D(re(),1);function wg(e){return`${Math.abs(Math.round(e)).toLocaleString("es-ES")} \u20AC`}function Ub(e){return new Date(e).toLocaleDateString("es-ES",{day:"2-digit",month:"2-digit"})}function Vb(e){let t=Math.round(e*100);return`${t>=0?"+":""}${t}%`}function Wb(e){let t=Math.abs(e);return t<=.15?"var(--bwo-green)":t<=.4?"#d8a646":"var(--bwo-coral)"}function Kb(e){return`https://cdn.biwenger.com/i/t/${e}.png`}function Qb(e){return`https://cdn.biwenger.com/i/p/${e}.png`}function xg(e){e.currentTarget.style.visibility="hidden"}function $u({onClose:e,onOpenTeamLineup:t}){let[n,r]=(0,Bi.useState)(null);(0,Bi.useEffect)(()=>{let i=!0;return(async()=>{let[l,s,u]=await Promise.all([ig(60),H(),jf()]);if(!i)return;let c=u.filter(g=>g.market_price!=null).map(g=>({managerId:g.manager_id,marketPrice:g.market_price,pct:g.amount/g.market_price-1,occurredAt:g.occurred_at,trend7d:g.trend7d??null,titular:g.titular??null})),f=new Map(u.filter(g=>g.won).map(g=>[`${g.manager_id}:${g.player_ref_id}:${g.occurred_at}`,g]));r(l.map(g=>{let b=g.type==="compra"&&g.player_ref_id?f.get(`${g.player_id}:${g.player_ref_id}:${g.occurred_at}`):void 0,p=g.player_ref_id?s.get(g.player_ref_id):void 0;return{...g,playerName:p?.name,teamId:p?.team_id,backtest:b&&b.market_price!=null?gg(c,{managerId:b.manager_id,marketPrice:b.market_price,paid:b.amount,occurredAt:b.occurred_at,signals:{trend7d:b.trend7d??null,titular:b.titular??null}}):null}}))})(),()=>{i=!1}},[]);let o=(n??[]).map(i=>i.backtest).filter(i=>i!=null),a=o.length>=3?(()=>{let i=o.map(l=>Math.abs(l.diffPct)).sort((l,s)=>l-s);return i[Math.floor(i.length/2)]})():null;return(0,ee.jsxs)("div",{className:"bwo-comp",children:[(0,ee.jsxs)("div",{className:"bwo-comp-head",children:[(0,ee.jsx)("button",{className:"bwo-back",onClick:e,children:"\u2715 Cerrar"}),(0,ee.jsx)("strong",{className:"bwo-comp-name",children:"Actividad de la liga"}),(0,ee.jsxs)("span",{className:"bwo-comp-meta",children:["\xDAltimos movimientos del mercado",a!=null&&(0,ee.jsxs)("span",{title:"Desv\xEDo mediano (en valor absoluto) entre lo que el estimador habr\xEDa predicho antes de cada compra y lo que se pag\xF3. El estimador se recalibra solo con cada puja nueva cosechada.",children:[" ","\xB7 estimador: desv\xEDo mediano \xB1",Math.round(a*100),"% en ",o.length," compras"]})]})]}),n==null?(0,ee.jsx)("p",{className:"bwo-no-movements",children:"Cargando\u2026"}):n.length===0?(0,ee.jsx)("p",{className:"bwo-no-movements",children:"Sin movimientos todav\xEDa esta temporada."}):(0,ee.jsx)("div",{className:"bwo-act-grid",children:n.map(i=>(0,ee.jsxs)("div",{className:"bwo-act-card",children:[(0,ee.jsxs)("div",{className:"bwo-act-card-photo-wrap",children:[i.player_ref_id?(0,ee.jsx)("img",{src:Qb(i.player_ref_id),alt:"",className:"bwo-act-card-photo",onError:xg}):(0,ee.jsx)("span",{className:"bwo-act-card-photo bwo-act-card-icon",children:"\u{1F504}"}),i.teamId&&(0,ee.jsx)("button",{type:"button",className:"bwo-act-card-team-btn",onClick:()=>t(i.teamId),title:"Ver alineaci\xF3n probable de su equipo",children:(0,ee.jsx)("img",{src:Kb(i.teamId),alt:"",className:"bwo-act-card-team-badge",onError:xg})})]}),(0,ee.jsx)("span",{className:"bwo-act-card-name",children:i.playerName??i.description}),(0,ee.jsx)("span",{className:"bwo-act-card-manager",children:i.managerName}),(0,ee.jsxs)("span",{className:"bwo-act-card-meta",children:[Ub(i.occurred_at)," \xB7 ",i.description]}),(0,ee.jsxs)("span",{className:"bwo-act-card-amount","data-positive":i.amount>=0||void 0,children:[i.amount>=0?"+":"\u2212",wg(i.amount)]}),i.backtest&&(0,ee.jsxs)("span",{className:"bwo-act-card-backtest",children:["est. ",wg(i.backtest.estimated)," \xB7"," ",(0,ee.jsx)("span",{style:{color:Wb(i.backtest.diffPct)},children:Vb(i.backtest.diffPct)})]})]},i.id))})]})}var Ne=D(ze(),1);function Gb(e){let t=[],n=/\s*(?:([0-9]+(?:\.[0-9]+)?)|([a-zA-Z_][a-zA-Z0-9_]*)|([+\-*/()]))/g,r,o=0;for(;r=n.exec(e);){if(r.index!==o&&e.slice(o,r.index).trim()!=="")throw new Error(`car\xE1cter inesperado en la f\xF3rmula cerca de "${e.slice(o,r.index)}"`);o=n.lastIndex,r[1]!==void 0?t.push({type:"num",value:Number(r[1])}):r[2]!==void 0?t.push({type:"id",value:r[2]}):r[3]!==void 0&&t.push({type:"op",value:r[3]})}if(o!==e.length&&e.slice(o).trim()!=="")throw new Error(`car\xE1cter inesperado al final de la f\xF3rmula: "${e.slice(o)}"`);return t}function Xb(e,t){let n=0,r=()=>e[n],o=()=>e[n++];function a(){let u=r();if(!u)throw new Error("f\xF3rmula incompleta");if(u.type==="op"&&u.value==="-")return o(),-a();if(u.type==="op"&&u.value==="("){o();let c=l(),f=o();if(!f||f.type!=="op"||f.value!==")")throw new Error("falta un par\xE9ntesis de cierre");return c}if(u.type==="num")return o(),u.value;if(u.type==="id")return o(),t[u.value]??0;throw new Error(`token inesperado en la f\xF3rmula: "${u.value}"`)}function i(){let u=a();for(;r()?.type==="op"&&(r().value==="*"||r().value==="/");){let c=o(),f=a();u=c.value==="*"?u*f:u/f}return u}function l(){let u=i();for(;r()?.type==="op"&&(r().value==="+"||r().value==="-");){let c=o(),f=i();u=c.value==="+"?u+f:u-f}return u}let s=l();if(n!==e.length)throw new Error("sobran tokens al final de la f\xF3rmula");return s}function Sg(e,t){let n={};for(let[r,o]of Object.entries(t))n[r]=typeof o=="boolean"?o?1:0:Number(o);try{let r=e.replace(/\r?\n/g," ").trim();return r?Xb(Gb(r),n):null}catch{return null}}var Bu=null;function Eg(e,t){let n=e.last_season_points?.[t];return!n||n<=0?null:e.price/n}function bn(e,t,n,r){let o=e.last_season_points?.[t],a=e.last_season_games;if(o&&a)return o/a;if(!n||n.length===0)return null;let i=n.map(l=>l.points[t]!=null?l.points[t]:r?Sg(r,l.rawStats):null).filter(l=>l!=null);return i.length===0?null:i.reduce((l,s)=>l+s,0)/i.length}function $t(e,t){return!e.last_season_points?.[t]||!e.last_season_games}function Hn(e,t,n,r){let o=bn(e,t,n,r);return o==null?"":` \xB7 ${o.toFixed(1)} pts`}function Yb(e,t){let n=new Map;for(let o of e.values()){if(o.last_season_competition==="segunda-division")continue;let a=Eg(o,t);if(a==null)continue;let i=String(o.position);(n.get(i)??n.set(i,[]).get(i)).push(a)}let r=new Map;for(let[o,a]of n)a.sort((i,l)=>i-l),r.set(o,{p33:a[Math.floor(a.length/3)],p66:a[Math.floor(a.length*2/3)]});return r}async function kg(e,t){if(Bu?.scoreId===t)return Bu.thresholds;let n=Yb(e,t);return Bu={scoreId:t,thresholds:n},n}function Ng(e,t,n){let r=Eg(e,t),o=n.get(String(e.position));if(r==null||!o)return null;let a=r<=o.p33?"var(--bwo-green)":r<=o.p66?"#d8a646":"var(--bwo-coral)",i=c=>`${Math.round(c/1e3).toLocaleString("es-ES")}k`,l=e.last_season_points[t],s=e.last_season_competition==="segunda-division",u=`${i(r)}\u20AC por punto anotado ${e.last_season_is_current?"esta temporada":"la \xFAltima temporada"} (${l} pts en ${e.last_season_games} partidos${s?", en Segunda Divisi\xF3n":""}). Comparado con jugadores de su misma posici\xF3n: verde = m\xE1s rentable, coral = menos.`;return{label:`${i(r)}\u20AC/pt${s?" (2\xAA)":""}`,color:a,title:u}}var h=D(re(),1),Jb={1:"POR",2:"DEF",3:"MED",4:"DEL"};function ve(e){return`${e<0?"\u2212":""}${Math.abs(Math.round(e)).toLocaleString("es-ES")} \u20AC`}function Cg(e){let t=Math.round(e*100);return`${t>=0?"+":""}${t}%`}function Zb(e,t,n){let r=t.length;if(r<3||n==null)return null;let o=e*.3,a=Math.max(-o,Math.min(o,e*n)),i=(r-1)/2,l=t.reduce((p,y)=>p+y,0)/r,s=0,u=0;t.forEach((p,y)=>{s+=(y-i)*(p-l),u+=(y-i)**2});let c=u?s/u:0,f=l-c*i,g=0;for(let p=r;p<r+7;p++)g+=f+c*p;let b=Math.max(-o,Math.min(o,g));return Math.round((e+(a+b)/2)/1e4)*1e4}function ew(e){let t=Math.round(Math.abs(e)/1e3);return`${e<0?"\u2212":e>0?"+":""}${t.toLocaleString("es-ES")}k`}function Pg(e){return`https://cdn.biwenger.com/i/t/${e}.png`}function Ou({fx:e}){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{className:"bwo-opp-crest",src:Pg(e.opponentTeamId),alt:""}),(0,h.jsx)("span",{"aria-hidden":"true",children:e.home?"\u{1F3E0}":"\u2708\uFE0F"})]})}function tw(e){let t=e.sampleCount===1?"":"s",n=(()=>{switch(e.source){case"rival-tier":return`Basado en ${e.sampleCount} puja${t} suya${t} en jugadores de este rango de precio`;case"model-adjusted":return`Curva sobrepuja-precio de la liga ajustada al comportamiento de este rival (${e.sampleCount} puja${t} suya${t} vistas, de cualquier precio)`;case"model":return`Curva sobrepuja-precio ajustada con las ${e.sampleCount} puja${t} de toda la liga; sin pujas observadas de este rival`;case"rival-adjusted":return`Sin pujas suyas suficientes en este rango de precio: % t\xEDpico de la liga en el rango (${e.sampleCount} puja${t}) ajustado a lo agresivo que es este rival en general`;case"league-tier":return`Sin pujas observadas de este rival: % t\xEDpico de la liga en este rango de precio (${e.sampleCount} puja${t})`;case"rival-global":return`Su % medio global (${e.sampleCount} puja${t}); sin datos suficientes por rango de precio`}})();return e.capped?`${n} \xB7 Recortada al m\xE1ximo sobreprecio en \u20AC visto en la liga (nadie ha pagado tanto por encima de mercado)`:n}function nw(e,t,n){let r=e.map(s=>s.price),o=Math.min(...r),i=Math.max(...r)-o||1,l=r.length>1?t/(r.length-1):0;return r.map((s,u)=>`${(u*l).toFixed(1)},${(n-(s-o)/i*n).toFixed(1)}`).join(" ")}function Du({playerId:e,price:t,name:n,position:r,owned:o=!1,selfId:a,onClose:i,onOpenTeamLineup:l}){let[s,u]=(0,Ne.useState)(n||"Jugador"),[c,f]=(0,Ne.useState)(r??null),[g,b]=(0,Ne.useState)([]),[p,y]=(0,Ne.useState)(null),[w,m]=(0,Ne.useState)(null),[d,v]=(0,Ne.useState)(null),[S,x]=(0,Ne.useState)({managers:{},league:null,observations:[]}),[C,N]=(0,Ne.useState)(null),[_,K]=(0,Ne.useState)(null),[I,ae]=(0,Ne.useState)("1"),[Ge,Ie]=(0,Ne.useState)(null),[ie,zt]=(0,Ne.useState)(null),[gt,kn]=(0,Ne.useState)(null);(0,Ne.useEffect)(()=>{let E=!0;return(async()=>{let L=e?await _r(e):await _i(n??"");if(E&&L){y(L),n||u(L.name),r==null&&f(String(L.position));let Ce=await Mr(L.id);if(E&&m(Ce??null),L.team_id){let Zi=await kt(L.team_id);E&&v(Zi??null)}let[Dr,ty]=await Promise.all([Oe(),ft(L.id)]);E&&(ae(Dr),K(ty??null));let ny=await H(),ry=await kg(ny,Dr);E&&Ie(Ng(L,Dr,ry));let oy=await pe(L.id);if(E&&zt(oy??null),o&&a){let Zi=await ji(L.id,a);E&&kn(Zi)}else E&&kn(null)}let he=await hn(),ue=await Rf();E&&(x(ue),N(he.find(Ce=>Ce.id===a)?.maxBid??null),b(he.filter(Ce=>Ce.id!==a).sort((Ce,Dr)=>Dr.maxBid-Ce.maxBid)))})(),()=>{E=!1}},[e,n,r,a,o]);let at=c?Jb[c]??c:null,vt=g.filter(E=>E.maxBid>=t).length,Ec={trend7d:w&&w.length>=2?Ho(w,new Date().toISOString()):null,titular:ie?.titular??null},Uv=Au(S),Jo={};for(let E of g)Jo[E.id]=Uv(t,E.maxBid,E.id,Ec);let kc=Ru(g,c),ye=fg({price:t,position:c,rivals:g,estimates:Jo}),Wn=ye?vg(t,S,ye.coveredRivalId?Jo[ye.coveredRivalId]??null:null):null,Vv=Wn?.level==="alta"?"var(--bwo-green)":Wn?.level==="media"?"#d8a646":"var(--bwo-coral)",Nn=p&&p.price_min_year!=null&&p.price_max_year!=null&&p.price_max_year>p.price_min_year?(()=>{let E=Math.max(0,Math.min(1,(p.price-p.price_min_year)/(p.price_max_year-p.price_min_year)));return{pctInt:Math.round(E*100),color:E<=.33?"var(--bwo-green)":E<=.66?"#d8a646":"var(--bwo-coral)",min:p.price_min_year,max:p.price_max_year,value:p.price}})():null,Kn=w&&w.length>=2?w[w.length-1].price-w[w.length-2].price:null,Nc=w?w.slice(-8):[],Gi=Nc.slice(1).map((E,L)=>({date:E.date,delta:E.price-Nc[L].price})),Xi=Zb(t,Gi.map(E=>E.delta),Ec.trend7d),Wv=w&&w.length>=2?w[w.length-1].price>=w[0].price?"var(--bwo-green)":"var(--bwo-coral)":"var(--bwo-muted)",Ft=(_??[]).filter(E=>E.points[I]!=null),Zo=Ft.length>0?Ft.reduce((E,L)=>E+L.points[I],0)/Ft.length:null,Cc=Ft.slice(-5),ea=Ft.length>=5?(()=>{let E=Ft.reduce((ue,Ce)=>ue+(Ce.points[I]-Zo)**2,0)/Ft.length,L=Math.sqrt(E),he=L/Math.max(Math.abs(Zo),2);return he<=.85?{label:"Regular",color:"var(--bwo-green)",sd:L}:he<=1.05?{label:"Alterna",color:"#d8a646",sd:L}:{label:"A rachas",color:"var(--bwo-coral)",sd:L}})():null,Yi=(d??[]).map(E=>E.difficulty).filter(E=>E!=null),ta=Yi.length>0?Math.round(Yi.reduce((E,L)=>E+L,0)/Yi.length):null,Ji=ta==null?null:ta<=40?{label:"Calendario f\xE1cil",color:"var(--bwo-green)"}:ta<=60?{label:"Calendario medio",color:"#d8a646"}:{label:"Calendario exigente",color:"var(--bwo-coral)"},na=p?.last_season_points?.["1"]!=null&&p.last_season_games?p.last_season_points[1]/p.last_season_games:null,ra=p?.last_season_points?.["2"]!=null&&p.last_season_games?p.last_season_points[2]/p.last_season_games:null,Pc=na!=null&&ra!=null?(na+ra)/2:null,_c=[na!=null?{id:"1",label:"Diario AS",avg:na}:null,ra!=null?{id:"2",label:"SofaScore",avg:ra}:null,Pc!=null?{id:"as+sofa",label:"AS + SofaScore",avg:Pc}:null].filter(E=>E!=null),Qn=p?.last_season_games!=null&&p.last_season_games>0&&(_??[]).length>=p.last_season_games*.8?_??[]:[],oa=Qn.map(E=>E.points[I]).filter(E=>E!=null),Mc=oa.length>0?Math.round(oa.filter(E=>E>=6).length/oa.length*100):null,Kv=Qn.reduce((E,L)=>E+L.goals,0),Qv=Qn.reduce((E,L)=>E+L.assists,0),Gv=Qn.reduce((E,L)=>E+L.yellowCards,0),Xv=Qn.reduce((E,L)=>E+L.redCards,0),Cn=ie?.prob?parseInt(ie.prob,10):null,Tc=Cn==null?"var(--bwo-muted)":Cn>=60?"var(--bwo-green)":Cn>=30?"#d8a646":"var(--bwo-coral)",Yv=Cn==null?0:Math.round(Cn/10),Xe=d?.[0]??null,Lc=Xe?.difficulty==null?"var(--bwo-muted)":Xe.difficulty<=40?"var(--bwo-green)":Xe.difficulty<=60?"#d8a646":"var(--bwo-coral)",Gn=p?.price_increment??Kn,Jv=Gn==null?"\u2014":Gn>=0?`+${ve(Gn)}`:ve(Gn),Zv=Gn==null?"var(--bwo-muted)":Gn>=0?"var(--bwo-green)":"var(--bwo-coral)",ey=ye?[Wn?`Fiabilidad ${Wn.level}`:null,ye.coveredRivalName?`Supera la estimaci\xF3n de ${ye.coveredRivalName}`:"Sin competencia probable (los rivales que llegan tienen la posici\xF3n cubierta): el precio de salida deber\xEDa bastar",ye.unlikelyCount>0?`${ye.unlikelyCount} rival${ye.unlikelyCount===1?"":"es"} con la posici\xF3n ya cubierta, descartado${ye.unlikelyCount===1?"":"s"}`:null,ye.safeAmount!=null?`Para cubrir tambi\xE9n a los descartados: ${ve(ye.safeAmount)} (${ye.safeRivalName})`:null,C!=null&&ye.amount>C?`Por encima de tu puja m\xE1xima (${ve(C)})`:null].filter(E=>E!=null).join(" \xB7 "):"Estimaci\xF3n orientativa, no una garant\xEDa: supera la puja estimada m\xE1s alta entre los rivales que llegan al precio y no tienen la posici\xF3n m\xE1s cubierta que la media de la liga, redondeada al alza a 10.000 \u20AC. No sabe si un rival quiere realmente a este jugador.";return(0,h.jsx)("div",{className:"bwo-comp",children:(0,h.jsxs)("div",{className:"bwo-comp-head",children:[(0,h.jsxs)("div",{className:"bwo-pcard-topbar",children:[(0,h.jsx)("button",{className:"bwo-back",onClick:i,children:"\u2715 Cerrar"}),Xe&&!o&&(0,h.jsx)("span",{className:"bwo-pcard-next",style:{borderColor:Lc},title:`Pr\xF3ximo partido de su equipo: ${Xe.home?"en casa":"fuera"} contra ${Xe.opponentName}`,children:(0,h.jsx)(Ou,{fx:Xe})})]}),(0,h.jsxs)("div",{className:"bwo-pcard",children:[(0,h.jsx)("div",{className:"bwo-pcard-photo-ring",children:p?.id&&(0,h.jsx)("img",{className:"bwo-pcard-photo",src:`https://cdn.biwenger.com/i/p/${p.id}.png`,alt:"",onError:E=>{E.currentTarget.style.visibility="hidden"}})}),(0,h.jsxs)("div",{className:"bwo-pcard-title",children:[p?.team_id&&(0,h.jsx)("button",{type:"button",className:"bwo-pcard-team",onClick:()=>l(p.team_id),title:`Ver alineaci\xF3n probable de ${p.team_name??"su equipo"}`,children:(0,h.jsx)("img",{src:Pg(p.team_id),alt:""})}),(0,h.jsx)("span",{className:"bwo-pcard-name",children:s}),at&&(0,h.jsx)("span",{className:"bwo-pcard-pos",children:at})]}),Cn!=null&&(0,h.jsxs)("div",{className:"bwo-pcard-conf",title:`% de ser titular en el once tipo probable de su equipo${ie?.lesion!=null&&ie.lesion>=0?" \xB7 con parte m\xE9dico":""}`,children:[(0,h.jsxs)("div",{className:"bwo-pcard-conf-label",children:[(0,h.jsx)("span",{children:"% de ser titular"}),(0,h.jsxs)("span",{style:{color:Tc},children:[Cn,"%"]})]}),(0,h.jsx)("div",{className:"bwo-pcard-conf-bar",children:Array.from({length:10}).map((E,L)=>(0,h.jsx)("span",{className:"bwo-pcard-pip",style:L<Yv?{background:Tc}:void 0},L))})]}),(0,h.jsxs)("div",{className:"bwo-pcard-tiles",children:[(0,h.jsxs)("div",{className:"bwo-pcard-tile",children:[(0,h.jsx)("span",{className:"bwo-pcard-tile-label",children:"\u{1F4B0} Valor"}),(0,h.jsx)("span",{className:"bwo-pcard-tile-value",children:ve(t)})]}),(0,h.jsxs)("div",{className:"bwo-pcard-tile",children:[(0,h.jsx)("span",{className:"bwo-pcard-tile-label",children:"\u{1F4C8} Tendencia"}),(0,h.jsx)("span",{className:"bwo-pcard-tile-value",style:{color:Zv},children:Jv})]}),o?(0,h.jsxs)("div",{className:"bwo-pcard-tile",title:Xe?`Pr\xF3ximo partido de su equipo: ${Xe.home?"en casa":"fuera"} contra ${Xe.opponentName}`:void 0,children:[(0,h.jsx)("span",{className:"bwo-pcard-tile-label",children:"\u{1F4C5} Pr\xF3ximo"}),(0,h.jsx)("span",{className:"bwo-pcard-tile-value",style:{color:Lc},children:Xe?(0,h.jsx)(Ou,{fx:Xe}):"\u2014"})]}):(0,h.jsxs)("div",{className:"bwo-pcard-tile",title:ey,children:[(0,h.jsx)("span",{className:"bwo-pcard-tile-label",children:"\u{1F3AF} Puja sugerida"}),(0,h.jsx)("span",{className:"bwo-pcard-tile-value",children:ye?ve(ye.amount):"\u2014"}),Wn&&(0,h.jsxs)("span",{className:"bwo-pcard-tile-sub",style:{color:Vv},children:["fiabilidad ",Wn.level]})]})]}),!o&&(0,h.jsxs)("span",{className:"bwo-comp-meta",children:[vt,"/",g.length," pueden pujar"]})]}),(0,h.jsxs)("div",{className:"bwo-cards",children:[p&&p.status&&p.status!=="ok"&&(0,h.jsxs)("div",{className:"bwo-card bwo-card-wide",title:"Estado f\xEDsico oficial de Biwenger.",children:[(0,h.jsxs)("div",{className:"bwo-card-head",children:[(0,h.jsx)("span",{className:"bwo-card-icon",children:"\u{1F691}"}),(0,h.jsx)("span",{className:"bwo-card-label",children:"Estado f\xEDsico"}),ie?.prob&&(0,h.jsx)("span",{className:"bwo-card-pill",children:ie.prob})]}),(0,h.jsx)("span",{className:"bwo-card-desc",style:{color:"var(--bwo-coral)"},children:p.status_info||p.status}),ie&&(0,h.jsxs)("span",{className:"bwo-card-sub",children:[ie.titular?"Titular":"Suplente"," probable seg\xFAn FutbolFantasy"]})]}),Nn&&(0,h.jsxs)("div",{className:"bwo-card bwo-card-wide",title:"Posici\xF3n del valor actual en su rango del a\xF1o (0% = m\xEDnimo/chollo, 100% = m\xE1ximo/caro)",children:[(0,h.jsxs)("div",{className:"bwo-card-head",children:[(0,h.jsx)("span",{className:"bwo-card-icon",children:"\u{1F4CA}"}),(0,h.jsx)("span",{className:"bwo-card-label",children:"Valoraci\xF3n"})]}),(0,h.jsxs)("div",{className:"bwo-card-row",children:[(0,h.jsxs)("span",{className:"bwo-card-value",style:{color:Nn.color},children:[Nn.pctInt,"% del rango"]}),(0,h.jsxs)("span",{className:"bwo-card-sub",children:[ve(Nn.min),"\u2013",ve(Nn.max)]})]}),(0,h.jsx)("div",{className:"bwo-val-bar",children:(0,h.jsx)("div",{className:"bwo-val-fill",style:{width:`${Nn.pctInt}%`,background:Nn.color}})})]}),Ge&&(0,h.jsxs)("div",{className:"bwo-card bwo-card-compact",title:Ge.title,children:[(0,h.jsx)("div",{className:"bwo-card-head",children:(0,h.jsx)("span",{className:"bwo-card-label",children:"Rentabilidad"})}),(0,h.jsx)("span",{className:"bwo-card-value",style:{color:Ge.color},children:Ge.label})]}),(0,h.jsxs)("div",{className:"bwo-card bwo-card-compact",title:"Si en vez de subastarlo lo vendes directo a la banca (sin esperar ofertas de rivales), lo m\xE1ximo que paga es un 5% por encima del valor de mercado actual. \xDAtil como tope de referencia al valorar un fichaje como inversi\xF3n: aunque nadie puje por \xE9l, ese es el suelo de lo que recuperar\xEDas.",children:[(0,h.jsx)("div",{className:"bwo-card-head",children:(0,h.jsx)("span",{className:"bwo-card-label",children:"Venta banca m\xE1x"})}),(0,h.jsx)("span",{className:"bwo-card-value",children:ve(t*1.05)})]}),(()=>{let E=o?gt:t;if(E==null)return null;let L=t*1.05-E;return(0,h.jsxs)("div",{className:"bwo-card bwo-card-compact",title:o?`Venta banca (m\xE1x.) menos lo que pagaste por \xE9l (${ve(E)}): lo m\xE1ximo que ganar\xEDas vendi\xE9ndolo directo a la banca hoy.`:`Venta banca (m\xE1x.) menos su valor de mercado actual (${ve(E)}): lo que ganar\xEDas si lo ficharas justo a su valor y lo vendieras directo a la banca. Si pujas por encima de ese valor, tu margen baja en la diferencia.`,children:[(0,h.jsx)("div",{className:"bwo-card-head",children:(0,h.jsx)("span",{className:"bwo-card-label",children:"Beneficio m\xE1ximo"})}),(0,h.jsx)("span",{className:"bwo-card-value",style:{color:L>=0?"var(--bwo-green)":"var(--bwo-coral)"},children:ve(L)})]})})(),Cc.length>0&&Zo!=null&&(0,h.jsxs)("div",{className:"bwo-card bwo-card-wide",title:"Puntos por partido en LaLiga con el sistema de puntuaci\xF3n de tu liga. Sin jornadas jugadas esta temporada, se muestran los \xFAltimos partidos de la anterior.",children:[(0,h.jsxs)("div",{className:"bwo-card-head",children:[(0,h.jsx)("span",{className:"bwo-card-icon",children:"\u{1F525}"}),(0,h.jsx)("span",{className:"bwo-card-label",children:"Forma reciente"})]}),(0,h.jsxs)("div",{className:"bwo-card-row",children:[(0,h.jsxs)("span",{className:"bwo-card-value",children:[Zo.toLocaleString("es-ES",{maximumFractionDigits:1})," pts/partido"]}),(0,h.jsxs)("span",{className:"bwo-card-sub",children:[Ft.length," jugados"]}),ea&&(0,h.jsx)("span",{className:"bwo-card-pill",style:{color:ea.color},title:`Desviaci\xF3n t\xEDpica de sus puntos por partido esta temporada: ${ea.sd.toFixed(1)}. Dato descriptivo, no una predicci\xF3n del pr\xF3ximo partido: mismo promedio puede salir de partidos parecidos (regular) o de pocos partidazos entre muchos discretos (a rachas).`,children:ea.label})]}),(0,h.jsx)("div",{className:"bwo-form-chips",children:Cc.map((E,L)=>{let he=E.points[I],ue=he>=8?"var(--bwo-green)":he>=4?"#d8a646":"var(--bwo-coral)",Ce="\u26BD".repeat(E.goals)+"\u{1F170}\uFE0F".repeat(E.assists)+"\u{1F7E8}".repeat(E.yellowCards)+"\u{1F7E5}".repeat(E.redCards);return(0,h.jsxs)("span",{className:"bwo-chip",style:{color:ue},title:`${E.roundShort} \xB7 ${E.home?"\u{1F3E0}":"\u2708\uFE0F"} ${E.opponentName} \xB7 ${new Date(E.date).toLocaleDateString("es-ES",{day:"2-digit",month:"2-digit",year:"2-digit"})}`,children:[(0,h.jsx)("span",{className:"bwo-chip-round",children:E.roundShort}),he,Ce&&(0,h.jsx)("span",{className:"bwo-chip-events",children:Ce})]},L)})})]}),_c.length>0&&(0,h.jsxs)("div",{className:"bwo-card bwo-card-wide",title:`Media de puntos por partido en ${p.last_season_is_current?"la temporada en curso":"la \xFAltima temporada de LaLiga jugada"} (${p.last_season_games} partidos${p.last_season_competition==="segunda-division"?", en Segunda Divisi\xF3n":""}).`,children:[(0,h.jsxs)("div",{className:"bwo-card-head",children:[(0,h.jsx)("span",{className:"bwo-card-icon",children:"\u{1F4CA}"}),(0,h.jsxs)("span",{className:"bwo-card-label",children:[p.last_season_is_current?"Temporada actual":"Temporada pasada",p.last_season_competition==="segunda-division"?" (2\xAA)":""]}),(0,h.jsxs)("span",{className:"bwo-card-pill",children:[p.last_season_games," partidos"]})]}),(0,h.jsxs)("div",{className:"bwo-stat-grid",children:[_c.map(E=>(0,h.jsxs)("div",{className:"bwo-stat-cell",children:[(0,h.jsx)("span",{className:"bwo-stat-cell-label",children:E.label}),(0,h.jsx)("span",{className:"bwo-stat-cell-value",children:E.avg.toLocaleString("es-ES",{maximumFractionDigits:1})})]},E.id)),Mc!=null&&(0,h.jsxs)("div",{className:"bwo-stat-cell",title:`% de partidos con 6 o m\xE1s puntos sobre los ${oa.length} partidos de ${p.last_season_is_current?"la temporada en curso":"la temporada pasada"} con datos disponibles \u2014 puede ser menos que el total de la temporada si no hay informe de todos ellos.`,children:[(0,h.jsx)("span",{className:"bwo-stat-cell-label",children:"6+ puntos"}),(0,h.jsxs)("span",{className:"bwo-stat-cell-value",children:[Mc,"%"]})]}),Qn.length>0&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"bwo-stat-cell",children:[(0,h.jsx)("span",{className:"bwo-stat-cell-label",children:"\u26BD Goles"}),(0,h.jsx)("span",{className:"bwo-stat-cell-value",children:Kv})]}),(0,h.jsxs)("div",{className:"bwo-stat-cell",children:[(0,h.jsx)("span",{className:"bwo-stat-cell-label",children:"\u{1F170}\uFE0F Asist."}),(0,h.jsx)("span",{className:"bwo-stat-cell-value",children:Qv})]}),(0,h.jsxs)("div",{className:"bwo-stat-cell",title:`Tarjetas amarillas de ${p.last_season_is_current?"la temporada en curso":"la temporada pasada"}.`,children:[(0,h.jsx)("span",{className:"bwo-stat-cell-label",children:"\u{1F7E8} Tarjetas"}),(0,h.jsx)("span",{className:"bwo-stat-cell-value",children:Gv})]}),(0,h.jsxs)("div",{className:"bwo-stat-cell",title:`Tarjetas rojas de ${p.last_season_is_current?"la temporada en curso":"la temporada pasada"}.`,children:[(0,h.jsx)("span",{className:"bwo-stat-cell-label",children:"\u{1F7E5} Rojas"}),(0,h.jsx)("span",{className:"bwo-stat-cell-value",children:Xv})]})]})]})]}),w&&w.length>=2&&(0,h.jsxs)("div",{className:"bwo-card bwo-card-wide",title:"Hist\xF3rico real de precio de los \xFAltimos d\xEDas (dato del cat\xE1logo compartido, se actualiza una vez al d\xEDa). El desglose diario y el \xFAltimo cambio son hechos registrados; la estimaci\xF3n a 7 d\xEDas de abajo s\xED es una proyecci\xF3n, marcada aparte.",children:[(0,h.jsxs)("div",{className:"bwo-card-head",children:[(0,h.jsx)("span",{className:"bwo-card-icon",children:"\u{1F4C9}"}),(0,h.jsxs)("span",{className:"bwo-card-label",children:["Hist\xF3rico (",w.length,"d)"]})]}),(0,h.jsx)("svg",{className:"bwo-sparkline",viewBox:"0 0 260 40",preserveAspectRatio:"none",children:(0,h.jsx)("polyline",{points:nw(w,260,40),fill:"none",stroke:Wv,strokeWidth:"2"})}),Kn!=null&&Kn!==0?(0,h.jsxs)("span",{className:"bwo-card-sub",style:{color:Kn>=0?"var(--bwo-green)":"var(--bwo-coral)"},children:[Kn>=0?"\u25B2":"\u25BC"," ",ve(Math.abs(Kn))," \xFAltimo cambio registrado"]}):(0,h.jsx)("span",{className:"bwo-card-sub bwo-no-change",children:"Sin cambios recientes"}),Gi.length>0&&(0,h.jsx)("div",{className:"bwo-delta-chips",children:Gi.map((E,L)=>{let he=E.delta>0?"var(--bwo-green)":E.delta<0?"var(--bwo-coral)":"var(--bwo-muted)",ue=new Date(E.date).toLocaleDateString("es-ES",{day:"2-digit",month:"2-digit"});return(0,h.jsxs)("span",{className:"bwo-chip bwo-chip-auto",style:{color:he},title:`${ue}: ${E.delta>=0?"+":""}${ve(E.delta)}`,children:[(0,h.jsx)("span",{className:"bwo-chip-round",children:ue}),ew(E.delta)]},E.date)})}),Xi!=null&&(0,h.jsxs)("div",{className:"bwo-trend-row",title:"Media de dos modelos: la tendencia total de los \xFAltimos 7 d\xEDas, y si esa tendencia est\xE1 acelerando o frenando \u2014 verificado con datos reales que combinar los dos acierta m\xE1s que cualquiera de los dos solos. Tope de \xB130% \u2014 no una promesa: en cuanto haya jornadas jugadas, un partidazo, una lesi\xF3n o una sanci\xF3n pueden romperla de golpe.",children:[(0,h.jsx)("span",{children:"\u{1F52E} Estimaci\xF3n a 7 d\xEDas (tendencia)"}),(0,h.jsx)("span",{style:{color:Xi>=t?"var(--bwo-green)":"var(--bwo-coral)",fontWeight:700},children:ve(Xi)})]})]}),d&&d.length>0&&(0,h.jsxs)("div",{className:"bwo-card bwo-card-wide",title:"Pr\xF3ximos partidos de su equipo (fecha, rival y dificultad calculada por Biwenger seg\xFAn clasificaci\xF3n, forma y factor local/visitante). No cuenta si el jugador va a jugarlos, solo el calendario de su equipo. La media es una se\xF1al de riesgo, no una recomendaci\xF3n de fichaje.",children:[(0,h.jsxs)("div",{className:"bwo-card-head",children:[(0,h.jsx)("span",{className:"bwo-card-icon",children:"\u{1F4C5}"}),(0,h.jsx)("span",{className:"bwo-card-label",children:"Pr\xF3ximos partidos"}),Ji?(0,h.jsxs)("span",{className:"bwo-card-pill",style:{color:Ji.color},children:[Ji.label," \xB7 ",ta]}):(0,h.jsxs)("span",{className:"bwo-card-pill",children:[d.length," programados"]})]}),(0,h.jsx)("table",{className:"bwo-fixtures-table",children:(0,h.jsx)("tbody",{children:d.map((E,L)=>{let he=E.difficulty==null?"var(--bwo-muted)":E.difficulty<=40?"var(--bwo-green)":E.difficulty<=60?"#d8a646":"var(--bwo-coral)";return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{className:"bwo-date",children:new Date(E.date).toLocaleDateString("es-ES",{day:"2-digit",month:"2-digit"})}),(0,h.jsx)("td",{className:"bwo-desc",title:`${E.home?"Juega en casa":"Juega fuera"} contra ${E.opponentName}`,children:(0,h.jsx)(Ou,{fx:E})}),(0,h.jsx)("td",{className:"bwo-right",style:{color:he},children:E.difficulty!=null?`dificultad ${E.difficulty}`:"\u2014"})]},L)})})})]}),!o&&(0,h.jsxs)("div",{className:"bwo-card bwo-card-wide bwo-card-table",children:[(0,h.jsxs)("div",{className:"bwo-card-head",children:[(0,h.jsx)("span",{className:"bwo-card-icon",children:"\u{1F94A}"}),(0,h.jsx)("span",{className:"bwo-card-label",children:"Rivales"})]}),(0,h.jsx)("div",{className:"bwo-table-wrap",children:(0,h.jsxs)("table",{className:"bwo-table",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Rival"}),(0,h.jsx)("th",{className:"bwo-right",title:"% que se estima que pagar\xEDa sobre el valor de mercado para un jugador de este precio: sus propias pujas en el rango si hay suficientes; si no, la curva sobrepuja-precio de la liga ajustada a su comportamiento. \u2248 indica dato derivado (detalle en cada celda).",children:"Suele pagar"}),(0,h.jsx)("th",{className:"bwo-right",title:"Estimaci\xF3n orientativa, no una predicci\xF3n: curva sobrepuja-precio de la liga ajustada por la tendencia de precio (7 d\xEDas) y la titularidad del jugador, personalizada por rival y capada a su puja m\xE1xima. No tiene en cuenta si le interesa el jugador.",children:"Puja est."}),(0,h.jsx)("th",{className:"bwo-right",children:"En pos."})]})}),(0,h.jsx)("tbody",{children:g.map(E=>{let L=E.maxBid>=t,he=c?E.byPosition[c]??0:0,ue=Jo[E.id],Ce=ju(E,c,kc);return(0,h.jsxs)("tr",{className:"bwo-row","data-affords":L?"true":"false",title:L?void 0:`Su puja m\xE1xima (${ve(E.maxBid)}) no llega al precio de este jugador`,children:[(0,h.jsx)("td",{className:"bwo-name",children:E.name}),(0,h.jsx)("td",{className:"bwo-right bwo-bid-stat",title:ue?tw(ue):"Sin pujas observadas en la liga todav\xEDa",children:ue?ue.source==="rival-tier"?`${Cg(ue.pct)} \xB7 ${ue.sampleCount}`:`\u2248 ${Cg(ue.pct)}`:"\u2014"}),(0,h.jsx)("td",{className:"bwo-right bwo-bid-stat",children:ue?.amount!=null?ve(ue.amount):"\u2014"}),(0,h.jsx)("td",{className:"bwo-right",title:Ce?`M\xE1s jugadores que la media de la liga en esta posici\xF3n (${kc}): menos probable que puje`:void 0,children:c?Ce?`${he} \u2191`:he:"\u2014"})]},E.id)})})]})})]})]})]})})}var Bt=D(ze(),1);var R=D(re(),1);function Ig(e){return`https://cdn.biwenger.com/i/t/${e}.png`}var rw="https://cdn.biwenger.com/cdn-cgi/image/f=avif/img/sports/football/ground.png";function _g(e){return 5+e*.9}function Mg(e){return`https://cdn.biwenger.com/i/p/${e}.png`}function Oi(e){e.currentTarget.style.visibility="hidden"}function Tg(e){let t=e?parseInt(e,10):NaN;return isNaN(t)?"":t>=70?"bwo-prob-hi":t>=40?"bwo-prob-mid":t>=1?"bwo-prob-lo":"bwo-prob-zero"}function zu({onClose:e,initialTeamId:t=null,onBackToSource:n}){let[r,o]=(0,Bt.useState)(null),[a,i]=(0,Bt.useState)(null),l=(0,Bt.useRef)(!1),s=(0,Bt.useRef)(t!=null&&!!n);return(0,Bt.useEffect)(()=>{if(!r||!t||l.current)return;l.current=!0;let u=r.find(c=>c.teamId===t);u&&i(u)},[r,t]),(0,Bt.useEffect)(()=>{let u=!0;return(async()=>{let[c,f,g,b]=await Promise.all([H(),Oo(),wf(),Do()]),p=new Map,y=new Map;for(let w of c.values()){y.set(w.id,w.name);let m=f.get(w.id);if(!m?.titular||!w.team_id||!w.team_name||m.x==null||m.y==null)continue;let d=p.get(w.team_id);d||(d={teamId:w.team_id,teamName:w.team_name,players:[],alternatives:[]},p.set(w.team_id,d)),d.players.push({id:w.id,name:w.name,injured:m.lesion>=0,prob:m.prob,x:m.x,y:m.y})}for(let w of g){let m=p.get(w.team_id);m&&m.players.push({id:null,name:w.name,injured:w.lesion>=0,prob:w.prob,x:w.x,y:w.y})}for(let[w,m]of b){let d=p.get(w);d&&(d.alternatives=m.map(v=>({id:v.id,name:v.id?y.get(v.id)??v.name:v.name,injured:v.lesion>=0,prob:v.prob,posicion:v.posicion})))}u&&o([...p.values()].sort((w,m)=>w.teamName.localeCompare(m.teamName,"es")))})(),()=>{u=!1}},[]),a?s.current?(0,R.jsx)(Lg,{team:a,onBack:n,backLabel:"\u2190 Volver",onClose:e}):(0,R.jsx)(Lg,{team:a,onBack:()=>i(null),backLabel:"\u2190 Equipos",onClose:e}):(0,R.jsxs)("div",{className:"bwo-lineups",children:[(0,R.jsxs)("div",{className:"bwo-comp-head",children:[(0,R.jsx)("button",{className:"bwo-back",onClick:e,children:"\u2715 Cerrar"}),(0,R.jsx)("strong",{className:"bwo-comp-name",children:"Onces probables de LaLiga"}),(0,R.jsx)("span",{className:"bwo-comp-meta",children:"Toca un escudo para ver su once tipo sobre el campo, se actualiza a diario"})]}),r==null?(0,R.jsx)("div",{className:"bwo-no-movements",children:"Cargando onces probables..."}):r.length===0?(0,R.jsx)("div",{className:"bwo-no-movements",children:"Sin datos de onces probables todav\xEDa."}):(0,R.jsx)("div",{className:"bwo-lineup-grid",children:r.map(u=>(0,R.jsxs)("button",{className:"bwo-lineup-team-btn",onClick:()=>i(u),children:[(0,R.jsx)("img",{src:Ig(u.teamId),alt:"",className:"bwo-lineup-badge",onError:Oi}),(0,R.jsx)("span",{children:u.teamName})]},u.teamId))})]})}function Lg({team:e,onBack:t,backLabel:n,onClose:r}){return(0,R.jsxs)("div",{className:"bwo-lineups",children:[(0,R.jsxs)("div",{className:"bwo-comp-head",children:[(0,R.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,R.jsx)("button",{className:"bwo-back",onClick:t,children:n}),(0,R.jsx)("button",{className:"bwo-back",onClick:r,children:"\u2715 Cerrar"})]}),(0,R.jsxs)("strong",{className:"bwo-comp-name",style:{display:"flex",alignItems:"center",marginTop:"8px"},children:[(0,R.jsx)("img",{src:Ig(e.teamId),alt:"",className:"bwo-lineup-badge-sm",onError:Oi}),e.teamName]}),(0,R.jsx)("span",{className:"bwo-comp-meta",children:"Once tipo probable \xB7 % = probabilidad de ser titular \xB7 \u{1F691} = tocado/lesionado"})]}),(0,R.jsxs)("div",{className:"bwo-pitch",children:[(0,R.jsx)("img",{src:rw,alt:"",className:"bwo-pitch-bg"}),e.players.map(o=>(0,R.jsxs)("div",{className:"bwo-pitch-player",style:{left:`${_g(o.x)}%`,top:`${_g(o.y)}%`},title:`${o.name}${o.prob?` \xB7 Probabilidad ${o.prob}`:""}`,children:[(0,R.jsxs)("span",{className:"bwo-pitch-photo-wrap",children:[o.id?(0,R.jsx)("img",{src:Mg(o.id),alt:"",className:"bwo-pitch-photo",onError:Oi}):(0,R.jsx)("span",{className:"bwo-pitch-photo bwo-pitch-initial",children:o.name.charAt(0)}),o.prob&&(0,R.jsx)("span",{className:`bwo-pitch-prob ${Tg(o.prob)}`,children:o.prob})]}),(0,R.jsxs)("span",{className:"bwo-pitch-name",children:[o.name,o.injured?" \u{1F691}":""]})]},o.id??o.name))]}),e.alternatives.length>0&&(0,R.jsxs)("div",{className:"bwo-alts",children:[(0,R.jsx)("div",{className:"bwo-alts-title",children:"Alternativas al once"}),(0,R.jsx)("div",{className:"bwo-alts-grid",children:e.alternatives.map(o=>(0,R.jsxs)("div",{className:"bwo-alt",title:o.posicion??"",children:[o.id?(0,R.jsx)("img",{src:Mg(o.id),alt:"",className:"bwo-alt-photo",onError:Oi}):(0,R.jsx)("span",{className:"bwo-alt-photo bwo-alt-initial",children:o.name.charAt(0)}),(0,R.jsxs)("span",{className:"bwo-alt-name",children:[o.name,o.injured?" \u{1F691}":""]}),o.prob&&(0,R.jsx)("span",{className:`bwo-alt-prob ${Tg(o.prob)}`,children:o.prob})]},o.id??o.name))})]})]})}var Di=D(ze(),1);var W=D(re(),1);function Ag(e){return`https://cdn.biwenger.com/i/t/${e}.png`}function ow(e){return`https://cdn.biwenger.com/i/p/${e}.png`}function Fu(e){e.currentTarget.style.visibility="hidden"}function aw(e){return e===0?"bwo-grav-0":e===1?"bwo-grav-1":"bwo-grav-2"}function qu({onClose:e,onOpenTeamLineup:t}){let[n,r]=(0,Di.useState)(null);return(0,Di.useEffect)(()=>{let o=!0;return(async()=>{let[a,i]=await Promise.all([H(),xf()]),l=new Map;for(let c of a.values())c.team_id&&c.team_name&&l.set(c.team_id,c.team_name);let s=new Map;for(let c of i){let f=c.team_id??`ff:${c.team}`,g=s.get(f);g||(g={teamId:c.team_id,teamName:c.team_id&&l.get(c.team_id)||c.team,players:[]},s.set(f,g)),g.players.push(c)}let u=[...s.values()];for(let c of u)c.players.sort((f,g)=>f.gravedad-g.gravedad||(g.days??0)-(f.days??0));u.sort((c,f)=>c.teamName.localeCompare(f.teamName,"es")),o&&r(u)})(),()=>{o=!1}},[]),(0,W.jsxs)("div",{className:"bwo-lineups",children:[(0,W.jsxs)("div",{className:"bwo-comp-head",children:[(0,W.jsx)("button",{className:"bwo-back",onClick:e,children:"\u2715 Cerrar"}),(0,W.jsx)("strong",{className:"bwo-comp-name",children:"Estado f\xEDsico de LaLiga"}),(0,W.jsx)("span",{className:"bwo-comp-meta",children:"Lesionados, dudas y recuper\xE1ndose, se actualiza a diario \xB7 \u{1F534} baja \xB7 \u{1F7E1} duda \xB7 \u{1F7E2} recuper\xE1ndose"})]}),n==null?(0,W.jsx)("div",{className:"bwo-no-movements",children:"Cargando estado f\xEDsico..."}):n.length===0?(0,W.jsx)("div",{className:"bwo-no-movements",children:"Sin datos de lesionados todav\xEDa."}):(0,W.jsx)("div",{className:"bwo-inj-teams",children:n.map(o=>(0,W.jsxs)("div",{className:"bwo-inj-team",children:[(0,W.jsxs)("div",{className:"bwo-inj-team-head",children:[o.teamId&&(0,W.jsx)("img",{src:Ag(o.teamId),alt:"",className:"bwo-lineup-badge-sm",onError:Fu}),(0,W.jsx)("span",{children:o.teamName}),(0,W.jsx)("span",{className:"bwo-inj-count",children:o.players.length})]}),(0,W.jsx)("div",{className:"bwo-inj-grid",children:o.players.map(a=>(0,W.jsxs)("div",{className:`bwo-inj-card ${aw(a.gravedad)}`,title:a.description||void 0,children:[(0,W.jsxs)("div",{className:"bwo-inj-card-photo-wrap",children:[a.id?(0,W.jsx)("img",{src:ow(a.id),alt:"",className:"bwo-inj-card-photo",onError:Fu}):(0,W.jsx)("span",{className:"bwo-inj-card-photo bwo-inj-initial",children:a.name.charAt(0)}),o.teamId&&(0,W.jsx)("button",{type:"button",className:"bwo-inj-card-team-btn",onClick:()=>t(o.teamId),title:`Ver alineaci\xF3n probable de ${o.teamName}`,children:(0,W.jsx)("img",{src:Ag(o.teamId),alt:"",className:"bwo-inj-card-team-badge",onError:Fu})})]}),(0,W.jsx)("span",{className:"bwo-inj-card-name",children:a.name}),a.playProb&&(0,W.jsx)("span",{className:"bwo-inj-card-prob",children:a.playProb}),(0,W.jsxs)("span",{className:"bwo-inj-card-status",children:[a.availability,a.since?` \xB7 desde ${a.since}${a.days!=null?` (${a.days} d\xEDas)`:""}`:""]}),a.description&&(0,W.jsx)("span",{className:"bwo-inj-card-desc",children:a.description})]},(a.id??a.name)+a.description))})]},o.teamId??o.teamName))})]})}var zi=D(ze(),1);function iw(e,t,n){if(e.status&&e.status!=="ok"){let r=t?"Titular":n?"Suplente":null,o=t?.prob??n?.prob??null;return{text:`\u{1F691} ${e.status_info||e.status}${r?` \xB7 ${r}${o?` ${o}`:""}`:""}`,color:"#e2664b",prob:null,isTitular:!1}}return t?{text:`Titular${t.prob?` ${t.prob}`:""}`,color:"#5fcb72",prob:t.prob?parseInt(t.prob,10):null,isTitular:!0}:n?{text:`Suplente${n.prob?` ${n.prob}`:""}`,color:"#d8a646",prob:n.prob?parseInt(n.prob,10):null,isTitular:!1}:{text:"No titular",color:"#93908d",prob:null,isTitular:!1}}async function Ir(e){let[t,n,r,o]=await Promise.all([gn(),vn(),H(),hn()]),a=n.length>0,i=a?n:t,l=[];for(let p of i){let y=r.get(p);if(!y)continue;let[w,m]=await Promise.all([pe(p),Et(p)]),d=iw(y,w,m);d.isTitular||l.push({id:p,name:y.name,position:y.position,teamId:y.team_id,price:y.price,prob:d.prob,statusText:d.text,statusColor:d.color})}l.sort((p,y)=>(p.prob??-1)-(y.prob??-1));let s={};for(let p of l){let y=String(p.position);s[y]=(s[y]??0)+1}let u=o.find(p=>p.id===e),c=u?.balance??0,f=u?.maxBid??0,g=l.length>0?Math.max(0,Math.floor(c/l.length)):null,b=await sw(r,s,c);return{flagged:l,neededByPosition:s,suggestions:b,balance:c,maxBid:f,budgetPerReplacement:g,usingLineup:a,synced:u!=null}}var lw=3;async function sw(e,t,n){let r=Object.keys(t).filter(l=>t[l]>0);if(r.length===0)return[];let o=new Set(await Lr()),a=new Map;for(let[l,s]of e){if(o.has(l))continue;let u=String(s.position);if(!t[u]||s.price>n)continue;let c=await pe(l);if(!c)continue;let f=a.get(u)??[];f.push({id:l,name:s.name,position:s.position,teamId:s.team_id,price:s.price,prob:c.prob?parseInt(c.prob,10):null}),a.set(u,f)}let i=[];for(let l of r){let s=a.get(l)??[];s.sort((u,c)=>(c.prob??-1)-(u.prob??-1)||u.price-c.price),i.push(...s.slice(0,lw))}return i}var P=D(re(),1),Hu={1:"Portero",2:"Defensa",3:"Centrocampista",4:"Delantero"},uw=["1","2","3","4"];function Uo(e){return`${e<0?"\u2212":""}${Math.abs(Math.round(e)).toLocaleString("es-ES")} \u20AC`}function Rg(e){return`https://cdn.biwenger.com/i/t/${e}.png`}function Uu({onClose:e,selfId:t}){let[n,r]=(0,zi.useState)(null);(0,zi.useEffect)(()=>{let a=!0,i=0,l=8;async function s(){let u=await Ir(t);a&&(r(u),(!u.synced||!u.usingLineup)&&i<l&&(i++,setTimeout(s,1500)))}return s(),()=>{a=!1}},[t]);let o=n?uw.filter(a=>n.neededByPosition[a]>0).map(a=>`${n.neededByPosition[a]} ${Hu[a]}${n.neededByPosition[a]>1?"s":""}`):[];return(0,P.jsxs)("div",{className:"bwo-comp",children:[(0,P.jsxs)("div",{className:"bwo-comp-head",children:[(0,P.jsx)("button",{className:"bwo-back",onClick:e,children:"\u2715 Cerrar"}),(0,P.jsx)("strong",{className:"bwo-comp-name",children:"Recomendaciones"}),(0,P.jsx)("span",{className:"bwo-comp-meta",children:"Jugadores de tu alineaci\xF3n puesta que no son titulares en su equipo real"})]}),n==null?(0,P.jsx)("p",{className:"bwo-no-movements",children:"Cargando\u2026"}):(0,P.jsxs)("div",{className:"bwo-cards",children:[!n.usingLineup&&(0,P.jsxs)("div",{className:"bwo-card bwo-card-wide",title:"Todav\xEDa no se sabe qu\xE9 11 tienes puestos ahora mismo (ni en esta pesta\xF1a ni en otra), as\xED que se analiza toda la plantilla, banquillo incluido, como aproximaci\xF3n.",children:[(0,P.jsxs)("div",{className:"bwo-card-head",children:[(0,P.jsx)("span",{className:"bwo-card-icon",children:"\u2139\uFE0F"}),(0,P.jsx)("span",{className:"bwo-card-label",children:"Dato aproximado"})]}),(0,P.jsx)("span",{className:"bwo-card-sub",children:"Abre la pantalla Equipo (en esta pesta\xF1a o en otra) para que la recomendaci\xF3n se base en tu alineaci\xF3n puesta, no en toda tu plantilla."})]}),(0,P.jsxs)("div",{className:"bwo-card bwo-card-wide",title:"Saldo y puja m\xE1xima actuales, desde la clasificaci\xF3n de tu liga.",children:[(0,P.jsxs)("div",{className:"bwo-card-head",children:[(0,P.jsx)("span",{className:"bwo-card-icon",children:"\u{1F4B0}"}),(0,P.jsx)("span",{className:"bwo-card-label",children:"Tu saldo"})]}),n.synced?(0,P.jsxs)("div",{className:"bwo-card-row",children:[(0,P.jsx)("span",{className:"bwo-card-value",children:Uo(n.balance)}),(0,P.jsxs)("span",{className:"bwo-card-sub",children:["puja m\xE1x. ",Uo(n.maxBid)]})]}):(0,P.jsx)("span",{className:"bwo-card-sub",children:"Sincronizando tu saldo\u2026"})]}),n.flagged.length===0?(0,P.jsxs)("div",{className:"bwo-card bwo-card-wide",children:[(0,P.jsxs)("div",{className:"bwo-card-head",children:[(0,P.jsx)("span",{className:"bwo-card-icon",children:"\u2705"}),(0,P.jsx)("span",{className:"bwo-card-label",children:"Plantilla sin dudas"})]}),(0,P.jsx)("span",{className:"bwo-card-value",style:{color:"var(--bwo-green)"},children:"Todos son titulares en su equipo real \u2014 nada urgente que fichar."})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("div",{className:"bwo-card bwo-card-wide",title:"Cada jugador que no es titular en su equipo real cuenta como una sustituci\xF3n pendiente, agrupada por su posici\xF3n.",children:[(0,P.jsxs)("div",{className:"bwo-card-head",children:[(0,P.jsx)("span",{className:"bwo-card-icon",children:"\u{1F3AF}"}),(0,P.jsx)("span",{className:"bwo-card-label",children:"Necesitas fichar"}),(0,P.jsx)("span",{className:"bwo-card-pill",children:n.flagged.length})]}),(0,P.jsx)("span",{className:"bwo-card-value",style:{color:"var(--bwo-coral)"},children:o.join(" \xB7 ")}),n.synced&&n.budgetPerReplacement!=null&&(0,P.jsxs)("span",{className:"bwo-card-sub",children:["\u2248 ",Uo(n.budgetPerReplacement)," por fichaje, repartiendo tu saldo a partes iguales \u2014 orientativo, no un tope"]})]}),(0,P.jsxs)("div",{className:"bwo-card bwo-card-wide bwo-card-table",children:[(0,P.jsxs)("div",{className:"bwo-card-head",children:[(0,P.jsx)("span",{className:"bwo-card-icon",children:"\u26A0\uFE0F"}),(0,P.jsx)("span",{className:"bwo-card-label",children:"Jugadores con dudas"})]}),(0,P.jsx)("div",{className:"bwo-table-wrap",children:(0,P.jsxs)("table",{className:"bwo-table",children:[(0,P.jsx)("thead",{children:(0,P.jsxs)("tr",{children:[(0,P.jsx)("th",{children:"Jugador"}),(0,P.jsx)("th",{children:"Estado"}),(0,P.jsx)("th",{className:"bwo-right",children:"Valor"})]})}),(0,P.jsx)("tbody",{children:n.flagged.map(a=>(0,P.jsxs)("tr",{className:"bwo-row",children:[(0,P.jsxs)("td",{className:"bwo-name",children:[a.teamId&&(0,P.jsx)("img",{src:Rg(a.teamId),alt:"",style:{width:"14px",height:"14px",verticalAlign:"middle",marginRight:"4px"}}),a.name,(0,P.jsxs)("span",{className:"bwo-squad-size",children:[" \xB7 ",Hu[String(a.position)]??a.position]})]}),(0,P.jsx)("td",{style:{color:a.statusColor},children:a.statusText}),(0,P.jsx)("td",{className:"bwo-right",children:Uo(a.price)})]},a.id))})]})})]}),(0,P.jsxs)("div",{className:"bwo-card bwo-card-wide bwo-card-table",title:"Libres (de nadie de tu liga), titulares en su equipo real y dentro de tu saldo. Puede haber cambiado desde la \xFAltima sincronizaci\xF3n (hasta 15 min) \u2014 conf\xEDrmalo en Mercado antes de pujar.",children:[(0,P.jsxs)("div",{className:"bwo-card-head",children:[(0,P.jsx)("span",{className:"bwo-card-icon",children:"\u{1F504}"}),(0,P.jsx)("span",{className:"bwo-card-label",children:"D\xF3nde fichar"})]}),n.suggestions.length===0?(0,P.jsx)("span",{className:"bwo-card-sub",children:"Sin candidatos libres que encajen ahora mismo. Abre Mercado: los que vayan quedando libres y encajen aparecer\xE1n marcados con \u{1F3AF}."}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{className:"bwo-table-wrap",children:(0,P.jsxs)("table",{className:"bwo-table",children:[(0,P.jsx)("thead",{children:(0,P.jsxs)("tr",{children:[(0,P.jsx)("th",{children:"Jugador"}),(0,P.jsx)("th",{children:"Titular"}),(0,P.jsx)("th",{className:"bwo-right",children:"Precio"})]})}),(0,P.jsx)("tbody",{children:n.suggestions.map(a=>(0,P.jsxs)("tr",{className:"bwo-row",children:[(0,P.jsxs)("td",{className:"bwo-name",children:[a.teamId&&(0,P.jsx)("img",{src:Rg(a.teamId),alt:"",style:{width:"14px",height:"14px",verticalAlign:"middle",marginRight:"4px"}}),a.name,(0,P.jsxs)("span",{className:"bwo-squad-size",children:[" \xB7 ",Hu[String(a.position)]??a.position]})]}),(0,P.jsx)("td",{style:{color:"var(--bwo-green)"},children:a.prob!=null?`${a.prob}%`:"\u2014"}),(0,P.jsx)("td",{className:"bwo-right",children:Uo(a.price)})]},a.id))})]})}),(0,P.jsx)("span",{className:"bwo-card-sub",children:"Tambi\xE9n marcados con \u{1F3AF} en Mercado si los ves ah\xED. Confirma que siguen libres antes de pujar."})]})]})]})]})]})}var Ke=D(ze(),1);var F=D(re(),1),cw={1:"Portero",2:"Defensa",3:"Centrocampista",4:"Delantero"},dw={1:"PT",2:"DF",3:"MC",4:"DL"},pw=["1","2","3","4"],mw=[{key:"price",label:"M\xE1s caros"},{key:"up",label:"M\xE1s suben"},{key:"down",label:"M\xE1s bajan"}],Vu=[{key:"all",label:"Todos",min:-1/0,max:1/0},{key:"0-5",label:"0 - 5M",min:0,max:5e6},{key:"5-10",label:"5 - 10M",min:5e6,max:1e7},{key:"10-15",label:"10 - 15M",min:1e7,max:15e6},{key:"15+",label:"+15M",min:15e6,max:1/0}];function fw(e){return`${Math.round(e).toLocaleString("es-ES")} \u20AC`}function gw(e){return`${e<0?"\u2212":"+"}${Math.abs(Math.round(e)).toLocaleString("es-ES")} \u20AC`}function vw(e){return`https://cdn.biwenger.com/i/t/${e}.png`}function yw(e){return`https://cdn.biwenger.com/i/p/${e}.png`}function jg(e){e.currentTarget.style.visibility="hidden"}function hw(e,t,n){let r=t.get(e);if(r)return{text:`Titular${r.prob?` ${r.prob}`:""}`,color:"var(--bwo-green)"};let o=n.get(e);return o?{text:`Suplente${o.prob?` ${o.prob}`:""}`,color:"#d8a646"}:null}function Wu({onClose:e,selfId:t,onOpenTeamLineup:n}){let[r,o]=(0,Ke.useState)(null),[a,i]=(0,Ke.useState)(null),[l,s]=(0,Ke.useState)(new Map),[u,c]=(0,Ke.useState)("1"),[f,g]=(0,Ke.useState)("1"),[b,p]=(0,Ke.useState)("price"),[y,w]=(0,Ke.useState)("all"),[m,d]=(0,Ke.useState)(new Set);(0,Ke.useEffect)(()=>{let x=!0;return(async()=>{let[C,N,_,K,I,ae,Ge]=await Promise.all([H(),Lr(),Ir(t),Oo(),Do(),Oe(),Nf()]),Ie=new Set(N),ie=[...C.values()].filter(gt=>!Ie.has(gt.id)),zt=new Map;for(let gt of I.values())for(let kn of gt)kn.id&&zt.set(kn.id,kn);x&&(o(ie),s(zt),c(ae),d(new Set(Ge)),i({neededByPosition:_.neededByPosition,balance:_.balance,lineups:K}))})(),()=>{x=!1}},[t]);let v=(0,Ke.useMemo)(()=>{let x=Vu.find(N=>N.key===y)??Vu[0],C=(r??[]).filter(N=>String(N.position)===f&&N.price>=x.min&&N.price<x.max);return b==="up"?C.sort((N,_)=>_.price_increment-N.price_increment):b==="down"?C.sort((N,_)=>N.price_increment-_.price_increment):C.sort((N,_)=>_.price-N.price),C},[r,f,b,y]);function S(x){return a?(a.neededByPosition[String(x.position)]??0)>0&&x.price<=a.balance&&a.lineups.has(x.id):!1}return(0,F.jsxs)("div",{className:"bwo-comp",children:[(0,F.jsxs)("div",{className:"bwo-comp-head",children:[(0,F.jsx)("button",{className:"bwo-back",onClick:e,children:"\u2715 Cerrar"}),(0,F.jsx)("strong",{className:"bwo-comp-name",children:"Jugadores libres"}),(0,F.jsx)("span",{className:"bwo-comp-meta",children:"Libres de toda la liga (de nadie, ni tuyo ni rival) \u2014 se actualiza cada 15 min, conf\xEDrmalo en Mercado antes de pujar"})]}),(0,F.jsx)("div",{className:"bwo-pos-tabs",children:pw.map(x=>(0,F.jsxs)("button",{className:`bwo-pos-tab${f===x?" active":""}`,onClick:()=>g(x),title:cw[x],children:[dw[x],r!=null&&(0,F.jsx)("span",{className:"bwo-pos-tab-count",children:r.filter(C=>String(C.position)===x).length})]},x))}),(0,F.jsx)("div",{className:"bwo-pos-tabs",children:mw.map(x=>(0,F.jsx)("button",{className:`bwo-pos-tab${b===x.key?" active":""}`,onClick:()=>p(x.key),children:x.label},x.key))}),(0,F.jsx)("div",{className:"bwo-pos-tabs",children:Vu.map(x=>(0,F.jsx)("button",{className:`bwo-pos-tab${y===x.key?" active":""}`,onClick:()=>w(x.key),children:x.label},x.key))}),r==null?(0,F.jsx)("p",{className:"bwo-no-movements",children:"Cargando\u2026"}):v.length===0?(0,F.jsx)("p",{className:"bwo-no-movements",children:"No hay libres en esta posici\xF3n ahora mismo."}):(0,F.jsx)("div",{className:"bwo-free-grid",children:v.map(x=>{let C=m.has(x.id);return(0,F.jsxs)("div",{className:`bwo-free-card${C?" bwo-free-card-favorite":S(x)?" bwo-free-card-recommended":""}`,title:x.status&&x.status!=="ok"?x.status_info??x.status:C?"Marcado como favorito en Biwenger.":S(x)?"Recomendado: cubre una posici\xF3n que necesitas, titular en su equipo real y dentro de tu saldo.":void 0,children:[(0,F.jsxs)("div",{className:"bwo-free-card-photo-wrap",children:[(0,F.jsx)("img",{src:yw(x.id),alt:"",className:"bwo-free-card-photo",onError:jg}),x.team_id&&(0,F.jsx)("button",{type:"button",className:"bwo-free-card-team-btn",onClick:()=>n(x.team_id),title:`Ver alineaci\xF3n probable de ${x.team_name??"su equipo"}`,children:(0,F.jsx)("img",{src:vw(x.team_id),alt:"",className:"bwo-free-card-team-badge",onError:jg})}),x.status&&x.status!=="ok"&&(0,F.jsx)("span",{className:"bwo-free-card-status",children:"\u{1F691}"}),C&&(0,F.jsx)("span",{className:"bwo-free-card-fav-badge",children:"\u2B50"}),S(x)&&(0,F.jsx)("span",{className:"bwo-free-card-rec-badge",children:"\u{1F3AF}"})]}),(0,F.jsx)("span",{className:"bwo-free-card-name",children:x.name}),(()=>{let N=a?hw(x.id,a.lineups,l):null,_=bn(x,u);return!N&&_==null?null:(0,F.jsxs)("span",{className:"bwo-free-card-stats",children:[N&&(0,F.jsx)("span",{style:{color:N.color},children:N.text}),_!=null&&(0,F.jsxs)("span",{className:"bwo-free-card-avg",children:[_.toFixed(1)," pts"]})]})})(),(0,F.jsx)("span",{className:"bwo-free-card-price",children:fw(x.price)}),x.price_increment!==0&&(0,F.jsx)("span",{className:`bwo-free-card-delta ${x.price_increment>=0?"up":"down"}`,children:gw(x.price_increment)})]},x.id)})})]})}var Fi=D(ze(),1);var bw=12,ww=3;async function $g(){let[e,t,n,r,o]=await Promise.all([gn(),Lr(),H(),Oe(),yn()]),a=new Set(t),i=new Map;for(let[u,c]of n){if(a.has(u))continue;let f=String(c.position),g=i.get(f)??[];g.push(c),i.set(f,g)}for(let u of i.values())u.sort((c,f)=>f.price-c.price);let l=new Map;for(let[u,c]of i){let f=[];for(let b of c){if(f.length>=bw)break;await pe(b.id)&&f.push(b)}let g=await Promise.all(f.map(async b=>{let p=$t(b,r)?await ft(b.id):void 0,y=bn(b,r,p,o);return y!=null?{id:b.id,name:b.name,teamId:b.team_id,price:b.price,avg:y}:null}));l.set(u,g.filter(b=>b!=null))}let s=[];for(let u of e){let c=n.get(u);if(!c)continue;let f=$t(c,r)?await ft(c.id):void 0,g=bn(c,r,f,o),p=(l.get(String(c.position))??[]).filter(y=>y.id!==u&&(g==null||y.avg>g)).sort((y,w)=>w.avg-y.avg).slice(0,ww);p.length!==0&&s.push({id:u,name:c.name,position:c.position,teamId:c.team_id,price:c.price,avg:g,candidates:p})}return s.sort((u,c)=>{let f=u.avg!=null?u.candidates[0].avg-u.avg:-1;return(c.avg!=null?c.candidates[0].avg-c.avg:-1)-f}),s}var $=D(re(),1),xw={1:"Portero",2:"Defensa",3:"Centrocampista",4:"Delantero"};function Sw(e){return`${Math.round(e).toLocaleString("es-ES")} \u20AC`}function Bg(e){return`https://cdn.biwenger.com/i/t/${e}.png`}function Ku({onClose:e}){let[t,n]=(0,Fi.useState)(null);return(0,Fi.useEffect)(()=>{let r=!0;return(async()=>{let o=await $g();r&&n(o)})(),()=>{r=!1}},[]),(0,$.jsxs)("div",{className:"bwo-comp",children:[(0,$.jsxs)("div",{className:"bwo-comp-head",children:[(0,$.jsx)("button",{className:"bwo-back",onClick:e,children:"\u2715 Cerrar"}),(0,$.jsx)("strong",{className:"bwo-comp-name",children:"Comparador"}),(0,$.jsx)("span",{className:"bwo-comp-meta",children:"Tus jugadores con libres en su misma posici\xF3n, titulares en su equipo real, con mejor media de puntos"})]}),t==null?(0,$.jsx)("p",{className:"bwo-no-movements",children:"Cargando\u2026 (puede tardar unos segundos: consulta la media real de cada candidato)"}):t.length===0?(0,$.jsx)("div",{className:"bwo-cards",children:(0,$.jsxs)("div",{className:"bwo-card bwo-card-wide",children:[(0,$.jsxs)("div",{className:"bwo-card-head",children:[(0,$.jsx)("span",{className:"bwo-card-icon",children:"\u2705"}),(0,$.jsx)("span",{className:"bwo-card-label",children:"Sin mejoras claras"})]}),(0,$.jsx)("span",{className:"bwo-card-value",style:{color:"var(--bwo-green)"},children:"No hay libres titulares en su equipo real con mejor media que tus jugadores ahora mismo."})]})}):(0,$.jsx)("div",{className:"bwo-cards",children:t.map(r=>(0,$.jsxs)("div",{className:"bwo-card bwo-card-wide bwo-card-table",title:"Media de puntos por partido jugado esta temporada (o la pasada si a\xFAn no hay suficientes partidos).",children:[(0,$.jsxs)("div",{className:"bwo-card-head",children:[r.teamId&&(0,$.jsx)("img",{src:Bg(r.teamId),alt:"",style:{width:"18px",height:"18px",verticalAlign:"middle"}}),(0,$.jsx)("span",{className:"bwo-card-label",children:r.name}),(0,$.jsx)("span",{className:"bwo-squad-size",children:xw[String(r.position)]??r.position}),(0,$.jsx)("span",{className:"bwo-card-pill",children:r.avg!=null?`${r.avg.toFixed(1)} pts`:"sin datos"})]}),(0,$.jsx)("div",{className:"bwo-table-wrap",children:(0,$.jsxs)("table",{className:"bwo-table",children:[(0,$.jsx)("thead",{children:(0,$.jsxs)("tr",{children:[(0,$.jsx)("th",{children:"Candidato libre"}),(0,$.jsx)("th",{className:"bwo-right",children:"Media"}),(0,$.jsx)("th",{className:"bwo-right",children:"Precio"})]})}),(0,$.jsx)("tbody",{children:r.candidates.map(o=>(0,$.jsxs)("tr",{className:"bwo-row",children:[(0,$.jsxs)("td",{className:"bwo-name",children:[o.teamId&&(0,$.jsx)("img",{src:Bg(o.teamId),alt:"",style:{width:"14px",height:"14px",verticalAlign:"middle",marginRight:"4px"}}),o.name]}),(0,$.jsxs)("td",{className:"bwo-right",style:{color:"var(--bwo-green)"},children:[o.avg.toFixed(1)," pts"]}),(0,$.jsx)("td",{className:"bwo-right",children:Sw(o.price)})]},o.id))})]})})]},r.id))})]})}var Ot=D(ze(),1);var Og=new Set(["compra","clausula_compra"]),Ew=new Set(["venta","clausula_venta"]);async function Qu(e){let t=await _u(e),n=new Map;for(let a of t){if(!a.player_ref_id||!Og.has(a.type)&&!Ew.has(a.type))continue;let i=n.get(a.player_ref_id)??[];i.push(a),n.set(a.player_ref_id,i)}let r=[];for(let[a,i]of n){i.sort((s,u)=>s.occurred_at.localeCompare(u.occurred_at));let l=[];for(let s of i){if(Og.has(s.type)){l.push(s);continue}let u=l.pop(),c=u?Math.abs(u.amount):null,f=s.amount,g=c!=null?f-c:null;r.push({playerRefId:a,name:`Jugador ${a}`,teamId:null,position:null,photoUrl:null,buyAmount:c,sellAmount:f,profit:g,profitPct:c?g/c*100:null,soldAt:s.occurred_at,saleType:s.type})}}let o=await H();for(let a of r){let i=o.get(a.playerRefId);i&&(a.name=i.name,a.teamId=i.team_id,a.position=i.position,a.photoUrl=i.photo_url)}return r.sort((a,i)=>i.soldAt.localeCompare(a.soldAt)),{sales:r,totalProfit:r.reduce((a,i)=>a+(i.profit??0),0),totalSales:r.reduce((a,i)=>a+i.sellAmount,0),totalBuys:r.reduce((a,i)=>a+(i.buyAmount??0),0),unknownBuyCount:r.filter(a=>a.buyAmount==null).length}}async function Dg(){let[e,t]=await Promise.all([Ri(),Ii()]),n=[];for(let r of e){let{totalProfit:o}=await Qu(r.id);n.push({id:r.id,name:r.name,icon:t[r.id]??r.icon,net:o})}return n.sort((r,o)=>o.net-r.net),n}var M=D(re(),1),kw={1:"POR",2:"DEF",3:"MED",4:"DEL"};function Ar(e){return`${e<0?"\u2212":""}${Math.abs(Math.round(e)).toLocaleString("es-ES")} \u20AC`}function Nw(e){return`https://cdn.biwenger.com/i/t/${e}.png`}function Cw(e,t){return t==="recientes"?e:[...e].sort((n,r)=>n.profit==null&&r.profit==null?0:n.profit==null?1:r.profit==null?-1:t==="mayor"?r.profit-n.profit:n.profit-r.profit)}function Pw({summary:e,sortMode:t,setSortMode:n}){return(0,M.jsxs)("div",{className:"bwo-cards",children:[(0,M.jsxs)("div",{className:"bwo-card bwo-card-wide",title:"Suma de ganancia/p\xE9rdida de todas las ventas con compra conocida.",children:[(0,M.jsxs)("div",{className:"bwo-card-head",children:[(0,M.jsx)("span",{className:"bwo-card-icon",children:"\u{1F4B0}"}),(0,M.jsx)("span",{className:"bwo-card-label",children:"Balance total"})]}),(0,M.jsxs)("span",{className:"bwo-card-value",style:{color:e.totalProfit>=0?"var(--bwo-green)":"var(--bwo-coral)"},children:[e.totalProfit>=0?"+":"",Ar(e.totalProfit)]}),(0,M.jsxs)("span",{className:"bwo-card-sub",children:[Ar(e.totalSales)," vendido \xB7 ",Ar(e.totalBuys)," comprado",e.unknownBuyCount>0?` \xB7 ${e.unknownBuyCount} sin compra conocida (no cuentan en el balance)`:""]})]}),e.sales.length===0?(0,M.jsxs)("div",{className:"bwo-card bwo-card-wide",children:[(0,M.jsxs)("div",{className:"bwo-card-head",children:[(0,M.jsx)("span",{className:"bwo-card-icon",children:"\u{1F4B0}"}),(0,M.jsx)("span",{className:"bwo-card-label",children:"Sin ventas todav\xEDa"})]}),(0,M.jsx)("span",{className:"bwo-card-sub",children:"En cuanto vendas a un jugador (al mercado o porque le paguen la cl\xE1usula), aparecer\xE1 aqu\xED."})]}):(0,M.jsxs)("div",{className:"bwo-card bwo-card-wide",children:[(0,M.jsxs)("div",{className:"bwo-card-head",children:[(0,M.jsx)("span",{className:"bwo-card-label",children:"Ventas"}),(0,M.jsx)("span",{className:"bwo-card-pill",children:e.sales.length})]}),(0,M.jsxs)("div",{className:"bwo-formation-picker",children:[(0,M.jsx)("button",{className:`bwo-formation-btn${t==="recientes"?" active":""}`,onClick:()=>n("recientes"),children:"Recientes"}),(0,M.jsx)("button",{className:`bwo-formation-btn${t==="mayor"?" active":""}`,onClick:()=>n("mayor"),children:"\u2193 Mayor ganancia"}),(0,M.jsx)("button",{className:`bwo-formation-btn${t==="menor"?" active":""}`,onClick:()=>n("menor"),children:"\u2191 Menor ganancia"})]}),(0,M.jsx)("div",{children:Cw(e.sales,t).map(r=>(0,M.jsxs)("div",{className:"bwo-sale-row",children:[r.photoUrl&&(0,M.jsx)("img",{src:r.photoUrl,alt:"",className:"bwo-sale-photo"}),(0,M.jsxs)("div",{className:"bwo-sale-main",children:[(0,M.jsx)("span",{className:"bwo-sale-name",children:r.name}),(0,M.jsxs)("span",{className:"bwo-sale-sub",children:[r.teamId&&(0,M.jsx)("img",{src:Nw(r.teamId),alt:"",style:{width:"12px",height:"12px",verticalAlign:"middle"}}),kw[String(r.position)]??"?"]})]}),(0,M.jsx)("div",{className:"bwo-sale-result",children:r.profit==null?(0,M.jsx)("span",{className:"bwo-sale-amount",style:{color:"var(--bwo-muted)"},children:"sin dato"}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)("span",{className:"bwo-sale-amount",style:{color:r.profit>=0?"var(--bwo-green)":"var(--bwo-coral)"},children:[r.profit>=0?"+":"",Ar(r.profit)]}),r.profitPct!=null&&(0,M.jsxs)("span",{className:"bwo-sale-pct",style:{color:r.profit>=0?"var(--bwo-green)":"var(--bwo-coral)"},children:[r.profitPct>=0?"+":"",r.profitPct.toFixed(1),"%"]})]})})]},`${r.playerRefId}-${r.soldAt}`))}),(0,M.jsxs)("div",{className:"bwo-sale-row",style:{borderBottom:"none",marginTop:"4px"},children:[(0,M.jsx)("div",{className:"bwo-sale-main",children:(0,M.jsx)("span",{className:"bwo-sale-name",children:"Total"})}),(0,M.jsx)("div",{className:"bwo-sale-result",children:(0,M.jsxs)("span",{className:"bwo-sale-amount",style:{color:e.totalProfit>=0?"var(--bwo-green)":"var(--bwo-coral)"},children:[e.totalProfit>=0?"+":"",Ar(e.totalProfit)]})})]})]})]})}function _w({icon:e,name:t,failed:n,onFail:r}){return e&&!n?(0,M.jsx)("img",{src:e,alt:"",className:"bwo-sale-photo",style:{width:"32px",height:"32px"},onError:r}):(0,M.jsx)("span",{className:"bwo-sale-photo",style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:"14px",color:"var(--bwo-muted)"},children:t.trim().charAt(0).toUpperCase()||"?"})}function Mw({rivals:e}){let[t,n]=(0,Ot.useState)(new Set);return e==null?(0,M.jsx)("p",{className:"bwo-no-movements",children:"Cargando\u2026"}):(0,M.jsxs)("div",{className:"bwo-cards",children:[(0,M.jsxs)("div",{className:"bwo-card bwo-card-wide",children:[(0,M.jsxs)("div",{className:"bwo-card-head",children:[(0,M.jsx)("span",{className:"bwo-card-icon",children:"\u{1F3C6}"}),(0,M.jsx)("span",{className:"bwo-card-label",children:"Clasificaci\xF3n por beneficio"})]}),(0,M.jsx)("span",{className:"bwo-card-sub",children:'El mismo balance de "Ventas" (venta menos lo que cost\xF3 comprarlo), pero de cada manager de la liga.'})]}),(0,M.jsx)("div",{className:"bwo-card bwo-card-wide",children:(0,M.jsx)("div",{children:e.map((r,o)=>(0,M.jsxs)("div",{className:"bwo-sale-row",children:[(0,M.jsxs)("span",{className:"bwo-squad-size",style:{width:"20px",textAlign:"right",flexShrink:0},children:[o+1,"\xBA"]}),(0,M.jsx)(_w,{icon:r.icon,name:r.name,failed:t.has(r.id),onFail:()=>n(a=>new Set(a).add(r.id))}),(0,M.jsx)("div",{className:"bwo-sale-main",children:(0,M.jsx)("span",{className:"bwo-sale-name",children:r.name})}),(0,M.jsx)("div",{className:"bwo-sale-result",children:(0,M.jsxs)("span",{className:"bwo-sale-amount",style:{color:r.net>=0?"var(--bwo-green)":"var(--bwo-coral)"},children:[r.net>=0?"+":"",Ar(r.net)]})})]},r.id))})})]})}function Gu({onClose:e,selfId:t}){let[n,r]=(0,Ot.useState)("ventas"),[o,a]=(0,Ot.useState)(null),[i,l]=(0,Ot.useState)(null),[s,u]=(0,Ot.useState)("recientes");return(0,Ot.useEffect)(()=>{if(!t)return;let c=!0;return(async()=>{let f=await Qu(t);c&&a(f)})(),()=>{c=!1}},[t]),(0,Ot.useEffect)(()=>{if(n!=="rivales"||i!=null)return;let c=!0;return(async()=>{let f=await Dg();c&&l(f)})(),()=>{c=!1}},[n,i]),(0,M.jsxs)("div",{className:"bwo-comp",children:[(0,M.jsxs)("div",{className:"bwo-comp-head",children:[(0,M.jsx)("button",{className:"bwo-back",onClick:e,children:"\u2715 Cerrar"}),(0,M.jsx)("strong",{className:"bwo-comp-name",children:"Finanzas"}),(0,M.jsx)("span",{className:"bwo-comp-meta",children:"Cu\xE1nto has ganado o perdido con cada jugador que has vendido, y c\xF3mo comparas con el resto de la liga"}),(0,M.jsxs)("div",{className:"bwo-formation-picker",children:[(0,M.jsx)("button",{className:`bwo-formation-btn${n==="ventas"?" active":""}`,onClick:()=>r("ventas"),children:"Ventas"}),(0,M.jsx)("button",{className:`bwo-formation-btn${n==="rivales"?" active":""}`,onClick:()=>r("rivales"),children:"Rivales"})]})]}),n==="ventas"?!t||o==null?(0,M.jsx)("p",{className:"bwo-no-movements",children:"Cargando\u2026"}):(0,M.jsx)(Pw,{summary:o,sortMode:s,setSortMode:u}):(0,M.jsx)(Mw,{rivals:i})]})}var Wo=D(ze(),1);var qi="https://biwenger.as.com/api/v2";async function Hi(){let[e,t,n]=[xu(),ke(),await pn()];return{Authorization:`Bearer ${e}`,"X-League":t,"X-User":n,"X-Lang":"es","Content-Type":"application/json"}}async function zg(){let e=await fetch(`${qi}/league`,{headers:await Hi()});if(!e.ok)throw new Error(`getLeague failed: ${e.status} ${await e.text()}`);return e.json()}async function Fg(){let e=await fetch(`${qi}/league?fields=*,settings`,{headers:await Hi()});if(!e.ok)throw new Error(`getLeagueSettings failed: ${e.status} ${await e.text()}`);return(await e.json())?.data?.settings??{}}async function qg(e){let t=await fetch(`${qi}/user/${e}?fields=id,name,players`,{headers:await Hi()});if(!t.ok)throw new Error(`getUserSquad failed: ${t.status} ${await t.text()}`);return((await t.json())?.data?.players??[]).map(o=>o.id)}async function Ui(e={}){let t=new URLSearchParams;e.type&&t.set("type",e.type),t.set("offset",String(e.offset??0)),t.set("limit",String(e.limit??50));let n=ke(),r=await fetch(`${qi}/league/${n}/board?${t}`,{headers:await Hi()});if(!r.ok)throw new Error(`getBoard failed: ${r.status} ${await r.text()}`);return r.json()}async function Tw(e,t){let n=await Mr(e);if(n?.length){let r=Date.parse(t),o=null,a=1/0;for(let i of n){let l=Math.abs(Date.parse(i.date)-r);l<a&&(o=i,a=l)}if(o&&a<=7*864e5)return o.price}return(await _r(e))?.price??null}async function Hg(){let e=await Af(),t=new Set;for(let n of e){if(n.type!=="compra")continue;let r;try{r=JSON.parse(n.raw_json)}catch{continue}let o=`${r.type}:${r.date}`;if(t.has(o))continue;t.add(o);let a=new Date((r.date??0)*1e3).toISOString(),i=Array.isArray(r.content)?r.content:[r.content];for(let l of i){if(!l?.to?.id||l.player==null)continue;let s=String(l.player),u=[{user:l.to,amount:Number(l.amount??0),won:!0},...Array.isArray(l.bids)?l.bids.map(y=>({user:y?.user,amount:Number(y?.amount??0),won:!1})):[]].filter(y=>y.user?.id&&y.amount>0),c=[];for(let y of u){let w=`bid:${r.date}:${s}:${y.user.id}`;await Lf(w)||c.push({...y,id:w})}if(c.length===0)continue;let f=await Tw(s,a),g=await Mr(s),b=g?Ho(g,a):null,p=(await pe(s))?.titular??null;for(let y of c)await If({id:y.id,manager_id:String(y.user.id),player_ref_id:s,amount:y.amount,market_price:f,won:y.won,occurred_at:a,trend7d:b,titular:p})}}for(let n of await $f()){if(n.trend7d!==void 0)continue;let r=await Mr(n.player_ref_id);n.trend7d=r?Ho(r,n.occurred_at):null,n.titular??(n.titular=null)}}async function Lw(e){await zo({id:String(e.id),name:e.name,icon:e.icon??null})}async function Dt(e){if(!e.amount)return;await Lw(e.player);let t={id:e.movementId,player_id:String(e.player.id),type:e.type,description:e.description,amount:Math.round(e.amount),occurred_at:e.occurredAt,raw_json:JSON.stringify(e.raw),player_ref_id:e.footballPlayerId!=null?String(e.footballPlayerId):null};await Tf(t)}function Xu(e){return e?.player!=null?String(e.player):`${e?.from?.id??"x"}-${e?.to?.id??"x"}-${Number(e?.amount??0)}`}async function Ug(e){let t=new Date((e.date??Date.now()/1e3)*1e3).toISOString(),n=`${e.type}:${e.date}`,r=e.content;switch(e.type){case"market":{let o=Array.isArray(r)?r:[r];for(let a of o)a?.to&&await Dt({movementId:`${n}:${Xu(a)}:buyer`,player:a.to,type:"compra",description:"Compra en el mercado",amount:-Number(a.amount??0),occurredAt:t,raw:e,footballPlayerId:a.player});return}case"transfer":{let o=Array.isArray(r)?r:[r];for(let a of o){let i=Number(a.amount??0),l=Xu(a);a.to?(await Dt({movementId:`${n}:${l}:buyer`,player:a.to,type:"clausula_compra",description:"Pag\xF3 una cl\xE1usula",amount:-i,occurredAt:t,raw:e,footballPlayerId:a.player}),a.from&&await Dt({movementId:`${n}:${l}:seller`,player:a.from,type:"clausula_venta",description:"Cobr\xF3 su cl\xE1usula",amount:i,occurredAt:t,raw:e,footballPlayerId:a.player})):a.from&&await Dt({movementId:`${n}:${l}:seller`,player:a.from,type:"venta",description:"Venta al mercado",amount:i,occurredAt:t,raw:e,footballPlayerId:a.player})}return}case"loan":{let o=Array.isArray(r)?r:[r];for(let a of o){let i=Number(a.amount??0),l=Xu(a);a.from&&await Dt({movementId:`${n}:${l}:lender`,player:a.from,type:"cesion_cobro",description:"Cedi\xF3 un jugador",amount:i,occurredAt:t,raw:e,footballPlayerId:a.player}),a.to&&await Dt({movementId:`${n}:${l}:borrower`,player:a.to,type:"cesion_pago",description:"Recibi\xF3 un jugador cedido",amount:-i,occurredAt:t,raw:e,footballPlayerId:a.player})}return}case"exchange":{let o=Number(r.amount??0),a=Number(r.requestedAmount??0);r.from&&await Dt({movementId:`${n}:${r.from.id}:from`,player:r.from,type:"intercambio",description:"Intercambio de jugadores",amount:-o+a,occurredAt:t,raw:e}),r.to&&await Dt({movementId:`${n}:${r.to.id}:to`,player:r.to,type:"intercambio",description:"Intercambio de jugadores",amount:o-a,occurredAt:t,raw:e});return}case"roundFinished":{let o=r?.results??[],a=r?.round?.name??"";for(let i of o)i?.user&&await Dt({movementId:`${n}:${i.user.id}`,player:i.user,type:"jornada",description:a||"Cierre de jornada",amount:Number(i.bonus??0),occurredAt:t,raw:e});return}default:return}}var ec=["market","transfer","roundFinished","exchange","loan"];async function Iw(){if(await fn("exactStartingBalancesDisabledV2")!=="1"){for(let e of ec)await Le(`boardScanComplete:${e}`,""),await Le(`boardScanOffset:${e}`,""),await Le(`boardScanNewestDate:${e}`,"");await Le("startingBalancesAnchor",""),await Le("startingBalancesFullHistory",""),await tg(),await Le("exactStartingBalancesDisabledV2","1"),await Cu()}}async function Aw(){if(await fn("movementsStableIdsRebuildV2")!=="1"){await ng();for(let e of ec)await Le(`lastSeenDate:${e}`,"");await Le("movementsHistoryCompleteV1",""),await Le("movementsStableIdsRebuildV2","1")}}async function Rw(e){let t=await fetch(`https://cf.biwenger.com/api/v2/players/la-liga/${e}?lang=es`,{headers:{Accept:"application/json"}});if(!t.ok)return{price:0,position:0,price_increment:0};let r=(await t.json())?.data;return r?{price:Number(r.price??0),position:Number(r.position??0),price_increment:Number(r.priceIncrement??0)}:{price:0,position:0,price_increment:0}}var Yu=50,jw=300;async function $w(){let e=0;for(let t of ec){let n=`lastSeenDate:${t}`,r=Number(await fn(n)??0),o=0,a=!1,i=r,l=!0;for(;!a;){l||await new Promise(c=>setTimeout(c,jw)),l=!1;let s=await Ui({type:t,offset:o,limit:Yu}),u=s?.data??s??[];if(u.length===0)break;for(let c=0;c<u.length;c++){let f=u[c];if(f.date<=r){a=!0;break}await Ug(f),e++}if(o===0&&u[0]&&(i=Math.max(i,u[0].date)),o+=Yu,u.length<Yu)break}await Le(n,String(i))}return e}async function Bw(e,t){let n=new Set;for(let r of e){await zo({id:String(r.id),name:r.name,icon:r.icon??null});let o;try{o=await qg(r.id)}catch{continue}String(r.id)===t&&await qf(o.map(String));let a=0,i=0,l={1:0,2:0,3:0,4:0};for(let s of o){n.add(String(s));let u=await _r(s),{price:c,position:f,price_increment:g}=u??await Rw(s);a+=c,i+=g;let b=String(f);b in l&&(l[b]+=1)}await zf(String(r.id),a,o.length,i),await Ff(String(r.id),l)}await Hf([...n])}async function Ow(){for(let n=0;n<1500;n+=50){let r=await Ui({offset:n,limit:50}),o=r?.data??r??[];if(o.length===0)break;let a=o.find(i=>i.type==="seasonFinished");if(a)return new Date((a.date??0)*1e3).toISOString();if(o.length<50)break}return null}async function Dw(){let e=await fn("seasonAnchorDate"),t=await Ui({type:"seasonFinished",offset:0,limit:20}),r=(t?.data??t??[]).reduce((a,i)=>!a||(i.date??0)>(a.date??0)?i:a,null),o=r?new Date((r.date??0)*1e3).toISOString():null;return o&&(!e||o>e)?o:e||Ow()}async function zw(){await Iw(),await Aw();let e=await zg(),t=e?.data?.users??[];for(let s of t)s?.id&&s?.name&&await zo({id:String(s.id),name:s.name,icon:s.icon??null});let n=new Set(t.map(s=>String(s.id))),r=await Df();for(let s of r)n.has(s)?await Of(s):await Bf(s);let o=await Fg();o?.maximumBid&&await Xf(o.maximumBid),e?.data?.scoreID!=null&&await Yf(String(e.data.scoreID)),o?.customScore&&await Jf(String(o.customScore));let a=await $w();await Hg();let i=await Li({fresh:!0}),l=await Dw();if(l){let s=await rg(i.id,l);await eg(l,i.balance-s)}return await Bw(t,i.id),await Le("movementsHistoryCompleteV1","1"),await Cu(),{events:a,managers:t.length}}var Ju=0,Vi=!1,Vo=0,Fw=8*60*60*1e3;async function Vg(e=15*60*1e3){if(Vi)return;let t=Vo>0?Math.min(e*2**Vo,Fw):e;if(!(Date.now()-Ju<t)){Vi=!0,Ju=Date.now();try{await zw(),Vo=0,Zu=null}catch(n){Vo++,Zu=n instanceof Error?n.message:String(n)}finally{Vi=!1}}}var Zu=null;function Wg(){return{lastSyncAt:Ju,consecutiveFailures:Vo,lastSyncError:Zu,syncing:Vi}}var B=D(re(),1);function Kg(e){return`${e<0?"\u2212":""}${Math.abs(Math.round(e)).toLocaleString("es-ES")} \u20AC`}function qw(e){if(!e)return"nunca";let t=Math.round((Date.now()-e)/1e3);return t<60?`hace ${t}s`:`hace ${Math.round(t/60)} min`}function Qe({label:e,value:t,warn:n}){return(0,B.jsxs)("div",{className:"bwo-diag-row",children:[(0,B.jsx)("span",{className:"bwo-diag-label",children:e}),(0,B.jsx)("span",{className:"bwo-diag-value",style:n?{color:"var(--bwo-coral)"}:void 0,children:t})]})}function tc({onClose:e,selfId:t}){let[n,r]=(0,Wo.useState)(null),[o,a]=(0,Wo.useState)(null);return(0,Wo.useEffect)(()=>{let i=!0;async function l(){let u=await ag(t);i&&(r(u),a(Wg()))}l();let s=setInterval(l,2e3);return()=>{i=!1,clearInterval(s)}},[t]),(0,B.jsxs)("div",{className:"bwo-comp",children:[(0,B.jsxs)("div",{className:"bwo-comp-head",children:[(0,B.jsx)("button",{className:"bwo-back",onClick:e,children:"\u2715 Cerrar"}),(0,B.jsx)("strong",{className:"bwo-comp-name",children:"Diagn\xF3stico"}),(0,B.jsx)("span",{className:"bwo-comp-meta",children:"Piezas exactas del c\xE1lculo de saldos de este dispositivo"})]}),n==null||o==null?(0,B.jsx)("p",{className:"bwo-no-movements",children:"Cargando\u2026"}):(0,B.jsxs)("div",{className:"bwo-diag",children:[(0,B.jsxs)("div",{className:"bwo-diag-group",children:[(0,B.jsx)("div",{className:"bwo-diag-title",children:"Versi\xF3n"}),(0,B.jsx)(Qe,{label:"Biwtools",value:"v1.0.50"})]}),(0,B.jsxs)("div",{className:"bwo-diag-group",children:[(0,B.jsx)("div",{className:"bwo-diag-title",children:"Saldos"}),(0,B.jsx)(Qe,{label:"Saldo inicial usado",value:Kg(n.startingBalance)}),(0,B.jsx)(Qe,{label:"Mi neto desde el ancla",value:n.myNet!=null?Kg(n.myNet):"\u2014"}),(0,B.jsx)(Qe,{label:"Ancla de temporada",value:n.anchor.slice(0,10)}),(0,B.jsx)("span",{className:"bwo-diag-note",children:"El saldo inicial debe coincidir con el reparto que anunci\xF3 la liga al reiniciarse. Si no coincide, el error est\xE1 en mis movimientos, y desplaza el saldo de todos los rivales por igual."})]}),(0,B.jsxs)("div",{className:"bwo-diag-group",children:[(0,B.jsx)("div",{className:"bwo-diag-title",children:"Hist\xF3rico"}),(0,B.jsx)(Qe,{label:"Movimientos guardados",value:String(n.totalMovements)}),(0,B.jsx)(Qe,{label:"Posteriores al ancla",value:String(n.movementsAfterAnchor)}),(0,B.jsx)(Qe,{label:"Hist\xF3rico completo",value:n.historyComplete?"s\xED":"no",warn:!n.historyComplete}),(0,B.jsx)(Qe,{label:"Reconstrucci\xF3n hecha",value:n.rebuildDone?"s\xED":"no",warn:!n.rebuildDone}),(0,B.jsx)(Qe,{label:"Saldo exacto desactivado",value:n.exactDisabled?"s\xED":"no",warn:!n.exactDisabled})]}),(0,B.jsxs)("div",{className:"bwo-diag-group",children:[(0,B.jsx)("div",{className:"bwo-diag-title",children:"Sincronizaci\xF3n"}),(0,B.jsx)(Qe,{label:"\xDAltimo intento",value:qw(o.lastSyncAt)}),(0,B.jsx)(Qe,{label:"En curso",value:o.syncing?"s\xED":"no"}),(0,B.jsx)(Qe,{label:"Fallos seguidos",value:String(o.consecutiveFailures),warn:o.consecutiveFailures>0}),o.lastSyncError&&(0,B.jsx)(Qe,{label:"\xDAltimo error",value:o.lastSyncError,warn:!0})]})]})]})}function wn(e){let t=e;for(;t;){let n=getComputedStyle(t).backgroundColor;if(n&&n!=="rgba(0, 0, 0, 0)"&&n!=="transparent")return n;t=t.parentElement}return matchMedia("(prefers-color-scheme: light)").matches?"#fff":"#000"}function Rr(e){let t=e.match(/[\d.]+/g);if(!t||t.length<3)return!1;let[n,r,o]=t.map(Number);return(n*299+r*587+o*114)/1e3>150}function xn(e,t="#1a1a1a",n="#f0f0f0"){return Rr(wn(e))?t:n}var ot="bwo-team-badge",rc="bwo-team-float";function Hw(e){let t="";for(let n of e.childNodes)n.nodeType===Node.TEXT_NODE&&(t+=n.textContent??"");return t.trim()}function Uw(){let e=document.querySelector('.in-field-strategy, [title="Estrategia"]');if(!e)return null;let t=Hw(e).match(/^(\d)-(\d)-(\d)$/);if(!t)return null;let[n,r,o]=[Number(t[1]),Number(t[2]),Number(t[3])];return[n,r,o].every(a=>Number.isFinite(a)&&a>0)?{2:n,3:r,4:o}:null}function Vw(){let e={};return document.querySelectorAll("player-card").forEach(t=>{let o=(t.querySelector(".photo a")?.getAttribute("style")??"").match(/\/i\/p\/(\d+)\.png/);if(!o)return;let a=[];t.querySelectorAll("player-position").forEach(i=>{let l=i.className.match(/pos-(\d)/);l&&a.push(Number(l[1]))}),a.length>0&&(e[o[1]]=a)}),e}function Ww(e,t){let n={};if(e.length===0)return n;if(!t)return n.total={sum:e.reduce((s,u)=>s+(u.avg??0),0),count:e.length},n;let r=["4","3","2"],o=r.length+1,a=[...e].sort((s,u)=>s.y-u.y),i=[a];for(;i.length<Math.min(o,a.length);){let s=-1,u=-1,c=-1;if(i.forEach((g,b)=>{for(let p=1;p<g.length;p++){let y=g[p].y-g[p-1].y;y>c&&(c=y,u=p,s=b)}}),s===-1)break;let f=i[s];i.splice(s,1,f.slice(0,u),f.slice(u))}i.sort((s,u)=>s.reduce((c,f)=>c+f.y,0)/s.length-u.reduce((c,f)=>c+f.y,0)/u.length);let l=i.pop();for(let s=0;s<r.length&&s<i.length;s++){let u=r[s],c=i[s];n[u]={sum:c.reduce((f,g)=>f+(g.avg??0),0),count:t[u]}}return l&&(n[1]={sum:l.reduce((s,u)=>s+(u.avg??0),0),count:l.length}),n}function Jg(){return[...document.querySelectorAll("button")].some(e=>(e.textContent??"").trim().toLowerCase()==="guardar alineaci\xF3n")}function Kw(){return[...document.querySelectorAll("button")].find(e=>(e.textContent??"").trim().toLowerCase()==="guardar alineaci\xF3n")??null}function Zg(){return!!document.getElementById("biwtools-root")?.shadowRoot?.querySelector(".bwo-panel, .bwo-fab-menu")}function ev(){return!!document.querySelector("modal-dialog")}function Qw(e){let t=e.trim();if(!t)return[];let n=[];return document.querySelectorAll("div, span, a, td, li, h3, h4, p, strong").forEach(r=>{r.children.length>0||(r.textContent??"").trim()===t&&n.push(r)}),n}function Qg(e,t=4){let n=e;for(let r=0;r<t&&n;r++,n=n.parentElement)if(/€/.test(n.textContent??""))return!0;return!1}function Gw(e,t,n=6){let r=e;for(let o=0;o<n&&r;o++,r=r.parentElement)if(r.contains(t))return r;return null}function Xw(e,t=6){let n=e;for(let r=0;r<t&&n;r++,n=n.parentElement){let o=Array.from(n.querySelectorAll("button, a")).filter(a=>{let i=(a.textContent??"").trim();return i==="Vender"||i==="En venta"||/^\d+\s+ofertas?$/i.test(i)});if(o.length>0)return o[o.length-1]}return null}function Qo(e,t,n,r,o,a){if(e.status&&e.status!=="ok"){let l=Hn(e,r,o,a).replace(/^\s*·\s*/,"")||null,s=t?"Titular":n?"Suplente":null,u=t?.prob??n?.prob??null;return{text:`\u{1F691} ${e.status_info||e.status}${s?` \xB7 ${s}${u?` ${u}`:""}`:""}`,color:"#e2664b",title:`Estado oficial de Biwenger: ${e.status_info||e.status}.${s?` Once probable de FutbolFantasy: ${s}${u?` (probabilidad ${u})`:""}.`:""}${l?" Media de puntos de la \xFAltima temporada jugada.":""}`,prob:u,avg:l}}if(t){let l=Hn(e,r,o,a).replace(/^\s*·\s*/,"")||null;return{text:`Titular${t.prob?` ${t.prob}`:""}`,color:"#5fcb72",title:`En el once tipo probable de su equipo${t.prob?` (probabilidad ${t.prob})`:""}.${l?" Media de puntos de la \xFAltima temporada jugada.":""}`,prob:t.prob??null,avg:l}}if(n){let l=Hn(e,r,o,a).replace(/^\s*·\s*/,"")||null;return{text:`Suplente${n.prob?` ${n.prob}`:""}`,color:"#d8a646",title:`No est\xE1 en el once tipo, pero es alternativa al once${n.prob?` (probabilidad ${n.prob})`:""}.${l?" Media de puntos de la \xFAltima temporada jugada.":""}`,prob:n.prob??null,avg:l}}let i=Hn(e,r,o,a).replace(/^\s*·\s*/,"")||null;return{text:"No titular",color:"#93908d",title:`Sin dato de once probable para este jugador: no se puede confirmar que sea titular.${i?" Media de puntos de la \xFAltima temporada jugada.":""}`,prob:null,avg:i}}function Yw(e){return e?e.text.startsWith("\u{1F691}")?{...e,text:e.prob?`\u{1F691} ${e.prob}`:"\u{1F691}"}:e.prob?{...e,text:e.prob}:e.text.startsWith("Titular")?{...e,text:"T"}:{...e,text:"0%",color:"#e2664b"}:null}function oc(e){return!e||!e.text.startsWith("\u{1F691}")?e:{...e,text:e.prob?`\u{1F691} ${e.prob}`:"\u{1F691}"}}var Jw={"Rayo Vallecano":"R. Vallecano","Real Madrid":"R. Madrid"};function tv(e){return Jw[e]??e}function Sn(e){if(!e)return null;let t=e.difficulty==null?"":` \xB7 dificultad ${e.difficulty}`,n=e.difficulty==null?"#93908d":e.difficulty<=40?"#5fcb72":e.difficulty<=60?"#d8a646":"#e2664b";return{text:`vs ${tv(e.opponentName)} (${e.home?"C":"F"})`,color:n,title:`Pr\xF3ximo partido de su equipo: ${e.home?"en casa":"fuera"} contra ${e.opponentName}${t}.`,teamId:e.opponentTeamId,home:e.home}}function Zw(e){let t=Sn(e);return!t||!e?null:{...t,text:`${tv(e.opponentName)} ${e.home?"C":"F"}`}}function nv(e,t){let n=document.createElement("span");return n.textContent=e,n.title=t,Object.assign(n.style,{display:"inline-block",marginLeft:"5px",color:"#fff",background:"#14171c",border:`1.5px solid ${De}`,borderRadius:"8px",padding:"0 4px",font:"800 10px/1.5 -apple-system, sans-serif",whiteSpace:"nowrap"}),n}function e0(e){return`https://cdn.biwenger.com/i/t/${e}.png`}function ac(e,t){if(!t.teamId){e.textContent=t.text;return}let n=document.createElement("img");n.src=e0(t.teamId),n.alt="",Object.assign(n.style,{width:"1em",height:"1em",objectFit:"contain",verticalAlign:"middle",marginRight:"2px"}),e.appendChild(n);let r=document.createElement("span");r.textContent=t.home?"\u{1F3E0}":"\u2708\uFE0F",e.appendChild(r)}function jr(e,t=ot){let n=document.createElement("span");return n.className=t,Object.assign(n.style,{display:"inline-block",marginLeft:"4px",whiteSpace:"nowrap",font:"700 11px/1.3 -apple-system, sans-serif"}),e.forEach((r,o)=>{if(o>0){let i=document.createElement("span");i.textContent=" \xB7 ",i.style.color="#93908d",n.appendChild(i)}let a=document.createElement("span");a.title=r.title,Object.assign(a.style,{color:r.color}),ac(a,r),n.appendChild(a),r.avg&&n.appendChild(nv(r.avg,"Media de puntos de la \xFAltima temporada jugada."))}),n}function t0(e){let t=document.createElement("span");t.className=ot,Object.assign(t.style,{display:"block",font:"700 11px/1.4 -apple-system, sans-serif"});let n=e.find(r=>r.avg)?.avg;return e.forEach((r,o)=>{let a=document.createElement("span");a.title=r.title,Object.assign(a.style,{display:"block",color:r.color}),ac(a,r),n&&o===e.length-1&&a.appendChild(nv(n,"Media de puntos de la \xFAltima temporada jugada.")),t.appendChild(a)}),t}var n0={2:"DF",3:"MC",4:"DL"};function r0(e){let t=document.createElement("div");t.className=ot,Object.assign(t.style,{display:"flex",justifyContent:"space-around",gap:"8px",margin:"10px 0",padding:"8px 6px",background:"rgba(0,0,0,0.35)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"8px",fontFamily:"-apple-system, sans-serif"});let n=(a,i)=>{let l=document.createElement("span");Object.assign(l.style,{textAlign:"center",flex:"1"});let s=document.createElement("span");s.textContent=a,Object.assign(s.style,{display:"block",fontSize:"10px",fontWeight:"700",textTransform:"uppercase",letterSpacing:"0.03em",color:"#93908d"});let u=document.createElement("span");return u.textContent=i.toFixed(1),Object.assign(u.style,{display:"block",fontSize:"15px",fontWeight:"800",color:"#d8a646"}),l.appendChild(s),l.appendChild(u),l},r=Object.values(e).reduce((a,i)=>a+i.sum,0),o=Object.values(e).reduce((a,i)=>a+i.count,0);t.appendChild(n("Media total",r/o));for(let a of["2","3","4"]){let i=e[a];!i||i.count===0||t.appendChild(n(n0[a],i.sum/i.count))}return t}function Gg(e,t,n){let r={price:e.price,playerId:e.id,name:e.name,position:String(e.position),owned:!0},o=i=>{i.stopPropagation(),i.preventDefault(),window.dispatchEvent(new CustomEvent(En,{detail:r}))};if(t){let i=t.cloneNode(!0);return i.removeAttribute("id"),i.removeAttribute("disabled"),i.removeAttribute("aria-disabled"),i instanceof HTMLButtonElement&&(i.type="button",i.disabled=!1),i instanceof HTMLAnchorElement&&i.removeAttribute("href"),i.classList.add(ot,"bwo-card-info"),i.textContent="+ Info",i.title="Ver detalle: competencia, forma reciente, rentabilidad y calendario",Object.assign(i.style,{background:De,backgroundColor:De,borderColor:De,color:xn(n,"#1a1a1a","#fff"),fontWeight:"700"}),i.addEventListener("click",o),i}let a=document.createElement("button");return a.type="button",a.className=`${ot} bwo-card-info`,a.textContent="+ Info",a.title="Ver detalle: competencia, forma reciente, rentabilidad y calendario",Object.assign(a.style,{display:"inline-block",marginLeft:"6px",padding:"1px 7px",border:"none",borderRadius:"10px",background:De,backgroundColor:De,color:xn(n,"#1a1a1a","#fff"),fontSize:"10px",fontWeight:"700",lineHeight:"1.6",verticalAlign:"middle",cursor:"pointer"}),a.addEventListener("click",o),a}function o0(e,t,n,r){let o=document.createElement("div");o.className=`${ot} ${rc}`,Object.assign(o.style,{position:"fixed",left:`${t}px`,top:`${n}px`,transform:"translate(-50%, 0)",background:"rgba(0,0,0,0.65)",borderRadius:"6px",padding:"1px 4px",font:`700 ${r}/1.3 -apple-system, sans-serif`,whiteSpace:"nowrap",zIndex:"1",pointerEvents:"none"}),e.forEach((i,l)=>{let s=document.createElement("span");if(s.title=i.title,s.style.color=i.color,ac(s,i),l===0){o.appendChild(s);return}let u=document.createElement("span");u.className="bwo-float-drop";let c=document.createElement("span");c.textContent=" \xB7 ",c.style.color="#93908d",u.appendChild(c),u.appendChild(s),o.appendChild(u)});let a=e.find(i=>i.avg)?.avg;if(a){let i=document.createElement("span");i.className="bwo-float-drop";let l=document.createElement("span");l.textContent=" \xB7 ",l.style.color="#93908d",i.appendChild(l);let s=document.createElement("span");s.textContent=a,s.title="Media de puntos de la \xFAltima temporada jugada.",s.style.color="#fff",i.appendChild(s),o.appendChild(i)}return o}function a0(e,t,n){e.title=[t?.title,n?.title].filter(c=>!!c).join(" \xB7 ");let r=[t,n].filter(c=>c!=null);if(r.length===0)return;let o=e.getBoundingClientRect();if(o.width===0&&o.height===0)return;let a=e.closest(".lineup-player"),i=a?a.getBoundingClientRect():o,l=i.left+i.width/2,s=getComputedStyle(e).fontSize||"11px",u=o0(r,l,o.bottom+2,s);document.body.appendChild(u),Ko.push({el:u,nameNode:e})}var Ko=[];function ic(){for(let{el:e,nameNode:t}of Ko){if(!document.body.contains(t)){e.remove();continue}let n=t.getBoundingClientRect();if(n.width===0&&n.height===0)continue;let r=t.closest(".lineup-player"),o=r?r.getBoundingClientRect():n;e.style.left=`${o.left+o.width/2}px`,e.style.top=`${n.bottom+2}px`}}function nc(e,t){return e.left<t.right&&e.right>t.left&&e.top<t.bottom&&e.bottom>t.top}var Xg=16;function Yg(e,t){let n=parseFloat(e.dataset.bwoShift??"0"),r=Math.max(-Xg,Math.min(Xg,n+t));return r===n?!1:(e.dataset.bwoShift=String(r),e.style.marginLeft=`${r}px`,!0)}function i0(){let e=[...document.querySelectorAll(`.${rc}`)];for(let r=0;r<4;r++){let o=!1,a=[...e].sort((i,l)=>i.getBoundingClientRect().left-l.getBoundingClientRect().left);for(let i=0;i<a.length-1;i++){let l=a[i],s=a[i+1],u=l.getBoundingClientRect(),c=s.getBoundingClientRect();if(!nc(u,c))continue;let f=Math.min(u.right,c.right)-Math.max(u.left,c.left);if(f<=0)continue;let g=f/2+1,b=Yg(l,-g),p=Yg(s,g);(b||p)&&(o=!0)}if(!o)break}let t=r=>e.some(o=>o!==r&&o.style.display!=="none"&&nc(r.getBoundingClientRect(),o.getBoundingClientRect()));for(let r of e){let o=[...r.querySelectorAll(".bwo-float-drop")];for(;o.length>0&&t(r);)o.pop().remove(),o=[...r.querySelectorAll(".bwo-float-drop")]}let n=e.map(r=>r.getBoundingClientRect());for(let r=0;r<e.length;r++)if(e[r].style.display!=="none")for(let o=r+1;o<e.length;o++)e[o].style.display!=="none"&&nc(n[r],n[o])&&(e[o].style.display="none")}function rv(){Jg()&&!Zg()&&!ev()||(document.querySelectorAll(`.${ot}`).forEach(e=>e.remove()),Ko=[])}function l0(e){let t=[],n=e.parentElement;for(;n;)n.scrollHeight>n.clientHeight+1&&t.push({el:n,top:n.scrollTop}),n=n.parentElement;return t.push({el:window,top:window.scrollY}),t}function s0(e){for(let{el:t,top:n}of e)t instanceof Window?t.scrollTo(t.scrollX,n):t.scrollTop=n}function u0(e){return[...document.querySelectorAll(`.${ot}[data-bwo-owner="${e}"]`)]}async function ov(){let e=document.querySelector(`.${ot}`),t=e?l0(e):null;if(!Jg()||Zg()||ev()){document.querySelectorAll(`.${ot}`).forEach(w=>w.remove()),Ko=[];return}document.querySelectorAll(`.${rc}`).forEach(w=>w.remove()),Ko=[];let n=await gn();if(n.length===0)return;let r=await H(),o=await Oe(),a=await yn(),i=[],l=[];for(let w of n){let m=r.get(w);if(!m)continue;let d=Qw(m.name);if(d.length===0)continue;let[v,S,x]=await Promise.all([pe(w),m.team_id?kt(m.team_id):Promise.resolve(void 0),$t(m,o)?ft(w):Promise.resolve(void 0)]),C=v?void 0:await Et(w),N=Qo(m,v,C,o,x,a),_=Sn(S?.[0]),K=d.filter(Ie=>Qg(Ie)),I=d.filter(Ie=>!Qg(Ie)&&Ie.closest(".lineup-player")),ae=K[K.length-1];if(ae){let Ie=[oc(N),_].filter(at=>at!=null),ie=Xw(ae),zt=`${JSON.stringify(Ie)}|${ie?"btn":"nobtn"}`,gt=u0(w);if(!(gt.length>0&&gt[0].dataset.bwoCardSig===zt&&gt.every(at=>document.contains(at)))){if(gt.forEach(vt=>vt.remove()),Ie.length>0){let vt=t0(Ie);vt.dataset.bwoOwner=w,vt.dataset.bwoCardSig=zt,ae.insertAdjacentElement("afterend",vt)}let at=ie?Gg(m,ie,ie):Gg(m,null,ae);if(at.dataset.bwoOwner=w,at.dataset.bwoCardSig=zt,ie){ie.insertAdjacentElement("afterend",at);let vt=Gw(ae,ie);vt&&(vt.style.alignItems="center")}else ae.insertAdjacentElement("afterend",at)}}let Ge=I[I.length-1];if(Ge){i.push(w),a0(Ge,Yw(N),Zw(S?.[0]));let Ie=bn(m,o,x,a);l.push({y:Ge.getBoundingClientRect().top,avg:Ie})}}let s=Uw(),u=Ww(l,s),c=new Set(n);document.querySelectorAll(`.${ot}[data-bwo-owner]`).forEach(w=>{c.has(w.dataset.bwoOwner??"")||w.remove()});let f=JSON.stringify(u),g=document.querySelector(`.${ot}.bwo-avg-bar`);if(Object.keys(u).length===0)g?.remove();else if(g?.dataset.bwoAvgSig!==f){g?.remove();let w=Kw();if(w){let m=r0(u);m.classList.add("bwo-avg-bar"),m.dataset.bwoAvgSig=f,w.insertAdjacentElement("beforebegin",m)}}let b=await vn();(b.length!==i.length||b.some((w,m)=>w!==i[m]))&&await Uf(i);let y=Vw();if(Object.keys(y).length>0){let w=await Wf(),m={...w,...y};JSON.stringify(m)!==JSON.stringify(w)&&await Vf(m)}i0(),t&&s0(t)}var En="bwo:selectPlayer",lc="bwo-market-badge",sc="bwo-market-value",Un="bwo-market-info",uc="bwo-market-lineup",cc="bwo-market-fixture",av="bwo-market-avg",dc="bwo-market-recommended",c0="linear-gradient(rgba(245, 197, 24, 0.16), rgba(245, 197, 24, 0.16))",d0="inset 0 0 0 2px rgba(245, 197, 24, 0.6)";function p0(e){let{price:t,price_min_year:n,price_max_year:r}=e;if(n==null||r==null||r<=n)return null;let o=Math.max(0,Math.min(1,(t-n)/(r-n))),a=Math.round(o*100),i=o<=.33?"#5fcb72":o<=.66?"#d8a646":"#e2664b",l=u=>`${Math.round(u/1e3).toLocaleString("es-ES")}k`,s=`Valor ${l(t)} \xB7 rango del a\xF1o ${l(n)}\u2013${l(r)} \xB7 ${a}% de su rango (0% = m\xEDnimo/chollo, 100% = m\xE1ximo/caro)`;return{pctInt:a,label:`${a}%`,color:i,title:s}}function cv(e,t,n,r,o=!1){let a=document.createElement("span");return a.className=e,a.textContent=t,a.title=r,Object.assign(a.style,{display:"inline-block",verticalAlign:"middle",color:n,font:o?"700 11px/1.3 -apple-system, sans-serif":"700 12px/1.4 -apple-system, sans-serif",whiteSpace:"nowrap"}),a}function pc(e,t,n,r,o=!1){let a=document.createElement("span");return a.className=e,a.textContent=t,a.title=r,Object.assign(a.style,{display:"inline-block",verticalAlign:"middle",color:"#fff",background:"#14171c",border:`1.5px solid ${n}`,borderRadius:"8px",padding:o?"0 4px":"1px 5px",font:o?"800 10px/1.5 -apple-system, sans-serif":"800 11px/1.6 -apple-system, sans-serif",whiteSpace:"nowrap"}),a}function m0(e,t){let{markEl:n,valueAnchor:r}=e,o=t?p0(t):null,a=o?`v${o.pctInt}`:"v-";if(n.dataset.bwoVal===a||(n.dataset.bwoVal=a,r.querySelector(`.${sc}`)?.remove(),!o))return;let i=pc(sc,o.label,o.color,o.title,e.layout==="card");Object.assign(i.style,{marginLeft:"6px"}),r.appendChild(i)}async function f0(e,t,n,r){let{markEl:o,valueAnchor:a}=e,i=t?await pe(t.id):void 0,l=!i&&t?await Et(t.id):void 0,s=t&&$t(t,n)?await ft(t.id):void 0,u=t?Hn(t,n,s,r):"",c=i?`t${i.prob??""}${u}`:l?`s${l.prob??""}${u}`:"-";if(o.dataset.bwoLineup===c||(o.dataset.bwoLineup=c,a.querySelector(`.${uc}`)?.remove(),a.querySelector(`.${av}`)?.remove(),!i&&!l))return;let f=i?`Titular${i.prob?` ${i.prob}`:""}`:`Suplente${l.prob?` ${l.prob}`:""}`,g=i?"#5fcb72":"#d8a646",b=i?`En el once tipo probable de su equipo${i.prob?` (probabilidad ${i.prob})`:""}.`:`No est\xE1 en el once tipo, pero es alternativa al once${l.prob?` (probabilidad ${l.prob})`:""}.`,p=cv(uc,f,g,b,e.layout==="card");if(Object.assign(p.style,{marginLeft:"6px"}),a.appendChild(p),u){let y=u.replace(/^\s*·\s*/,""),w=pc(av,y,De,"Media de puntos de la \xFAltima temporada jugada.",e.layout==="card");Object.assign(w.style,{marginLeft:"6px"}),a.appendChild(w)}}async function g0(e,t){let{markEl:n,valueAnchor:r}=e,o=t?.team_id?await kt(t.team_id):void 0,a=Sn(o?.[0]),i=a?`${a.teamId??""}${a.home?"h":"a"}`:"-";if(n.dataset.bwoFixture===i||(n.dataset.bwoFixture=i,r.querySelector(`.${cc}`)?.remove(),!a))return;let l=jr([a],cc);Object.assign(l.style,{marginLeft:"6px"}),r.appendChild(l)}async function v0(e,t,n){let{markEl:r,anchor:o}=e,a=t?String(t.position):null,l=(a?n.neededByPosition[a]??0:0)>0&&e.detail.price<=n.balance,s=l&&t?await pe(t.id)!=null:!1,u=l&&s,c=u?"r1":"r0";if(r.dataset.bwoRec===c||(r.dataset.bwoRec=c,o.querySelector(`.${dc}`)?.remove(),!u))return;let f=pc(dc,"\u{1F3AF} Recomendado","#5fcb72","Titular en su equipo real y cubre una posici\xF3n que necesitas, dentro de tu saldo actual. Ver panel Recomendaciones.",e.layout==="card");e.layout==="card"?Object.assign(f.style,{display:"block",float:"right",clear:"right",marginTop:"4px"}):Object.assign(f.style,{marginLeft:"6px"}),o.appendChild(f)}var De="#c90800";function y0(e,t){let n=`${t.playerId??t.name}:${t.price}`,r=s=>!!s&&s.classList.contains(Un),o=e.parentElement,a=o?.tagName==="OFFER-TOOLS",i=e.tagName==="TD"?e.querySelector(`.${Un}`):a?e.previousElementSibling:e.nextElementSibling;if(r(i)){if(i.dataset.bwoKey===n)return;i.remove()}let l=e.cloneNode(!0);l.removeAttribute("id"),l.removeAttribute("disabled"),l.removeAttribute("aria-disabled"),l instanceof HTMLButtonElement&&(l.type="button",l.disabled=!1),l instanceof HTMLAnchorElement&&l.removeAttribute("href"),l.classList.add(Un),l.dataset.bwoKey=n,l.textContent="+ Info",l.title="Ver detalle: competencia, forma reciente, rentabilidad y calendario",Object.assign(l.style,{background:De,backgroundColor:De,color:xn(e,"#1a1a1a","#fff"),fontWeight:"700",height:`${e.getBoundingClientRect().height}px`,boxSizing:"border-box"}),l.addEventListener("click",s=>{s.stopPropagation(),s.preventDefault(),window.dispatchEvent(new CustomEvent(En,{detail:t}))}),e.tagName==="TD"?e.appendChild(l):a?(l.style.display="block",l.style.margin="0 auto 6px",e.insertAdjacentElement("beforebegin",l)):(e.insertAdjacentElement("afterend",l),o?.tagName==="MARKET-TOOLS"&&(o.style.alignItems="center"))}function h0(){return!1}function b0(e){let t=a=>!!a&&a.classList.contains(Un),r=e.parentElement?.tagName==="OFFER-TOOLS",o=e.tagName==="TD"?e.querySelector(`.${Un}`):r?e.previousElementSibling:e.nextElementSibling;t(o)&&o.remove()}function w0(e){if(!e)return null;let t=e.replace(/[^\d]/g,"");return t?Number(t):null}function iv(e,t){if(e.dataset.bwoPrice)return Number(e.dataset.bwoPrice);let n=w0(t?.textContent);return n!=null&&(e.dataset.bwoPrice=String(n)),n}function lv(e){let n=e.querySelector('[class*="pos-"]')?.className.match(/pos-(\d)/);return n?n[1]:null}function sv(e){let t=e.querySelector('a[href*="/la-liga/players/"]'),n=t?.textContent?.trim();return n||(t?.getAttribute("href")?.split("/").pop()??"").replace(/-/g," ").replace(/\b\w/g,o=>o.toUpperCase())}function uv(e){let t=e.outerHTML.match(/\/i\/p\/(\d+)\.png/);return t?t[1]:null}function x0(e){let t=e.querySelector(".tools");return t?t.querySelector(`button.btn:not(.${Un})`)??t:null}function S0(){let e=[];return document.querySelectorAll("player-list div.content").forEach(t=>{let n=t.querySelector("h4");if(!n)return;let r=iv(t,n);if(r==null)return;let o=x0(t),a=t.parentElement?.querySelector(".header");!o||!a||e.push({key:"card",layout:"card",anchor:a,valueAnchor:n,pujarEl:o,markEl:t,detail:{price:r,playerId:uv(t),name:sv(t),position:lv(t)}})}),document.querySelectorAll("tr").forEach(t=>{if(!t.querySelector('a[href*="/la-liga/players/"]'))return;let n=[...t.querySelectorAll("button, a")].find(i=>(i.textContent??"").trim()==="Pujar")??[...t.querySelectorAll("td")].find(i=>(i.textContent??"").trim()==="Pujar");if(!n)return;let r=[...t.querySelectorAll("td")].filter(i=>/€/.test(i.textContent??"")).pop(),o=iv(t,r);if(o==null)return;let a=t.querySelector("td:last-child")??t;e.push({key:"list",layout:"list",anchor:a,valueAnchor:a,pujarEl:n,markEl:t,detail:{price:o,playerId:uv(t),name:sv(t),position:lv(t)}})}),e}function E0(e){return e.layout==="card"?e.markEl.parentElement:e.markEl}function k0(e){let t=E0(e);if(!t)return;let n=!!e.markEl.closest("player-card, tr")?.querySelector(".favorite"),r=n?"1":"0";t.dataset.bwoFav!==r&&(t.dataset.bwoFav=r,t.style.backgroundImage=n?c0:"",t.style.boxShadow=n?d0:"")}function N0(e,t,n){let{markEl:r,anchor:o}=e,a=`${t}/${n}`;if(r.dataset.bwoState===a)return;r.dataset.bwoState=a,o.querySelector(`.${lc}`)?.remove();let i=t===0?"Ning\xFAn rival puede pujar a este precio.":`${t}/${n} rivales pueden pujar a este precio.`,l=cv(lc,`${t}/${n} pueden pujar`,xn(o),i,e.layout==="card");e.layout==="card"&&Object.assign(l.style,{float:"right"}),o.appendChild(l)}var Wi=null,$r=null,C0=6e4;async function P0(e){let t=Date.now(),n=(await vn()).join(",");if($r&&t-$r.at<C0&&$r.lineupKey===n&&$r.needs.synced)return $r.needs;let o=await Ir(e);return $r={at:t,lineupKey:n,needs:o},o}function _0(e,t){document.querySelectorAll(`.${lc}, .${dc}`).forEach(n=>{let r=n.closest("player-card")?.querySelector("div.content");if(r){e.has(r)||n.remove();return}let o=n.closest("tr");(!o||!t.has(o))&&n.remove()}),document.querySelectorAll(`.${sc}, .${uc}, .${cc}, .${Un}`).forEach(n=>{let r=n.closest("div.content");if(r){e.has(r)||n.remove();return}let o=n.closest("tr");(!o||!t.has(o))&&n.remove()}),document.querySelectorAll("player-card[data-bwo-fav]").forEach(n=>{let r=n.querySelector("div.content");r&&e.has(r)||(delete n.dataset.bwoFav,n.style.backgroundImage="",n.style.boxShadow="")}),document.querySelectorAll("tr[data-bwo-fav]").forEach(n=>{t.has(n)||(delete n.dataset.bwoFav,n.style.backgroundImage="",n.style.boxShadow="")})}async function dv(){let e=S0();if(_0(new Set(e.filter(s=>s.layout==="card").map(s=>s.markEl)),new Set(e.filter(s=>s.layout==="list").map(s=>s.markEl))),e.length===0)return;for(let s of e)k0(s);let t=await og();if(t.length===0)return;if(!Wi)try{Wi=await pn()}catch{return}let n=t.filter(s=>s.id!==Wi),r=await H(),o=await Oe(),a=await yn(),i=await P0(Wi),l=h0();for(let s of e){let u=n.filter(f=>f.maxBid>=s.detail.price).length;N0(s,u,n.length),l?b0(s.pujarEl):y0(s.pujarEl,s.detail);let c=s.detail.playerId?r.get(s.detail.playerId):await _i(s.detail.name);m0(s,c),await f0(s,c,o,a),await g0(s,c),await v0(s,c,i)}}var mc="bwo-league-h",Go="bwo-league-c",mv="bwo-league-arrow",bc="bwo-league-sticky",M0={balance:"Saldo",maxBid:"Puja m\xE1x",netWorth:"Patrimonio"},fc="cargando\u2026",gc="#93908d",vc="Biwtools est\xE1 sincronizando el hist\xF3rico de movimientos de la liga. Los saldos aparecer\xE1n en cuanto est\xE9n completos.",Vn=null;function Ki(e){return`${e<0?"\u2212":""}${Math.abs(Math.round(e)).toLocaleString("es-ES")} \u20AC`}var T0=String.fromCodePoint(65039);function pv(e){return e.trim().normalize("NFC").split(T0).join("")}function L0(){let e={};return document.querySelectorAll("user-list-table img.pic").forEach(t=>{let r=(t.closest("a")?.getAttribute("href")??"").match(/\/user\/.*-(\d+)$/)?.[1],o=t.getAttribute("src");r&&o&&(e[r]=o)}),e}function I0(){return[...document.querySelectorAll("tr")].find(e=>/Puntos/.test(e.textContent??"")&&/Equipo/.test(e.textContent??""))??null}function A0(e){for(let t of e.children){if(t.classList.contains(Go))break;let n=t.querySelectorAll("increment, [class*='crement']");for(let r of n){let o=r.getAttribute("aria-label")??r.textContent??"";if(/[\d.,]+\s*€/.test(o))return r}}return null}function R0(e){let t=A0(e);if(!t)return null;let r=(t.getAttribute("aria-label")??t.textContent??"").match(/(-)?\s*([\d.,]+)\s*€/);if(!r)return null;let o=Number(r[2].replace(/\./g,"").replace(",","."));return r[1]==="-"||/decrement|decrease|down|negative/i.test(t.className)?-o:o}function j0(){return Rr(wn(document.body))?"#2b2b2b":"#f0f0f0"}function Qi(e,t={}){Object.assign(e.style,{textAlign:"right",paddingLeft:"16px",whiteSpace:"nowrap",fontVariantNumeric:"tabular-nums",color:t.color??(t.header?"#93908d":j0()),fontSize:t.header?"11px":"13px",...t.header?{textTransform:"uppercase",letterSpacing:"0.06em"}:{}})}function $0(e,t){let n=e.querySelector(`.${mv}`);n&&(n.textContent=Vn?.key===t?Vn.dir===1?" \u25B2":" \u25BC":"")}function yc(e,t){Object.assign(e.style,{position:"relative",zIndex:"2",background:wn(t)}),e.classList.add(bc)}function B0(e,t){e.dataset.bwoBgWatched!=="1"&&(e.dataset.bwoBgWatched="1",new MutationObserver(()=>{let n=wn(e);t.forEach(r=>{r.style.background=n})}).observe(e,{attributes:!0,attributeFilter:["style","class"]}))}function O0(e){let t=e.parentElement;for(;t&&t!==document.body;){let n=getComputedStyle(t);if(/(auto|scroll)/.test(n.overflowX)&&t.scrollWidth>t.clientWidth)return t;t=t.parentElement}return null}function fv(e,t){let n=t.getBoundingClientRect().left,r=new Set;e.querySelectorAll(`.${bc}`).forEach(o=>{o.style.transform="",o.style.boxShadow="";let a=o.closest("tr");a&&r.add(a)}),r.forEach(o=>{let a=[...o.querySelectorAll(`.${bc}`)];if(a.length===0)return;let i=a[0].getBoundingClientRect().left-n;if(i<0){let l=-i;a.forEach((s,u)=>{s.style.transform=`translateX(${l}px)`,u===a.length-1&&(s.style.boxShadow="2px 0 4px rgba(0, 0, 0, 0.35)")})}})}var hc=!1;function D0(e,t){hc||(hc=!0,requestAnimationFrame(()=>{hc=!1,fv(e,t)}))}function z0(e){let t=O0(e);t&&(e.dataset.bwoScrollBound!=="1"&&(t.addEventListener("scroll",()=>D0(e,t),{passive:!0}),e.dataset.bwoScrollBound="1"),fv(e,t))}async function gv(){let e=I0();if(!e)return;let t=e.closest("table");if(!t)return;let n=await hn();if(n.length===0)return;let r=L0();if(Object.keys(r).length>0){let p=await Ii();Object.entries(r).some(([w,m])=>p[w]!==m)&&await Gf(r)}let o=await Ai(),a=new Map(n.map(p=>[pv(p.name),p]));e.querySelector(`.${mc}`)||Object.entries(M0).forEach(([p,y])=>{let w=document.createElement("th");w.className=mc,w.dataset.bwoSortKey=p,w.style.cursor="pointer",w.textContent=y;let m=document.createElement("span");m.className=mv,w.appendChild(m),w.addEventListener("click",()=>{Vn=Vn?.key===p?{key:p,dir:Vn.dir===1?-1:1}:{key:p,dir:-1}}),Qi(w,{header:!0}),e.appendChild(w)}),e.querySelectorAll(`.${mc}`).forEach(p=>{let y=p.dataset.bwoSortKey;y&&$0(p,y)});let i=[...t.querySelectorAll("tr")].filter(p=>p!==e&&p.children.length>0),l=new Map,s=[],u=null,c=null;function f(p){let y=p.previousElementSibling;return y&&y.querySelector("img, svg")?y:null}function g(p,y){let w=f(y),m=w?[w,y]:[y];m.forEach(d=>yc(d,p)),B0(p,m),u===null&&(u=[...p.children].indexOf(y)),w&&c===null&&(c=[...p.children].indexOf(w))}for(let p of i){let y,w=null;for(let v of p.children){let S=pv(v.textContent??"");if(a.has(S)){y=a.get(S),w=v;break}}l.set(p,y),w?g(p,w):s.push(p);let m=R0(p),d=o?y?`${y.balance}:${y.maxBid}:${y.netWorth}:${m}`:"none":"loading";if(p.dataset.bwoLeague!==d){p.dataset.bwoLeague=d,p.querySelectorAll(`.${Go}`).forEach(N=>N.remove());let v=document.createElement("td");v.className=Go,v.textContent=o?y?Ki(y.balance):"\u2014":fc,Qi(v,{color:o?y?y.balance>=0?"#5fcb72":"#e2664b":"#93908d":gc}),o||(v.title=vc);let S=document.createElement("td");S.className=Go,S.textContent=o?y?Ki(y.maxBid):"\u2014":fc,Qi(S,o?void 0:{color:gc}),o||(S.title=vc);let x=document.createElement("td");x.className=Go,x.title=o?"Saldo + valor de equipo: c\xF3mo va cada manager en conjunto, no solo su liquidez.":vc,Qi(x,o?void 0:{color:gc}),x.style.whiteSpace="normal";let C=document.createElement("div");if(C.textContent=o?y?Ki(y.netWorth):"\u2014":fc,x.appendChild(C),o&&m){let N=m,_=document.createElement("div");_.textContent=`${N>=0?"\u25B2":"\u25BC"}${Ki(Math.abs(N))}`,Object.assign(_.style,{color:N>=0?"#5fcb72":"#e2664b",fontSize:"11px",fontWeight:"700"}),x.appendChild(_)}p.appendChild(v),p.appendChild(S),p.appendChild(x)}}if(u!==null)for(let p of s){let y=p.children[u];y&&g(p,y)}if(c!==null){let p=e.children[c];p&&yc(p,e)}if(u!==null){let p=e.children[u];p&&yc(p,e)}z0(t);let b=i[0]?.parentElement;if(Vn&&b&&o){let{key:p,dir:y}=Vn,w=[...i].sort((m,d)=>{let v=l.get(m)?.[p]??-1/0,S=l.get(d)?.[p]??-1/0;return(v-S)*y});for(let m of w)b.appendChild(m)}}var vv="bwo-lcard-stats",F0="cargando\u2026",q0="#93908d",H0="Biwtools est\xE1 sincronizando el hist\xF3rico de movimientos de la liga. Los saldos aparecer\xE1n en cuanto est\xE9n completos.";function Yo(e){return`${e<0?"\u2212":""}${Math.abs(Math.round(e)).toLocaleString("es-ES")} \u20AC`}function U0(e){if(!e)return null;let t=e.match(/\/user\/.*-(\d+)$/);return t?t[1]:null}function V0(e){if(!e)return null;let t=e.match(/Valor de Equipo:\s*([\d.,]+)\s*€(?:\s*\(([+-])\s*([\d.,]+)\s*€\))?/);if(!t)return null;let n=Number(t[1].replace(/\./g,"").replace(",","."));if(!t[2])return{value:n,delta:null};let r=Number(t[3].replace(/\./g,"").replace(",","."));return{value:n,delta:t[2]==="-"?-r:r}}function Xo(e,t,n){let r=document.createElement("div");Object.assign(r.style,{display:"flex",flexDirection:"column",gap:"1px"}),n.lead&&Object.assign(r.style,{marginTop:"4px",paddingTop:"5px",borderTop:`1px solid ${n.lineColor}`});let o=document.createElement("div");o.textContent=e,Object.assign(o.style,{fontSize:"9.5px",textTransform:"uppercase",letterSpacing:"0.05em",color:"#93908d",whiteSpace:"nowrap"});let a=document.createElement("div");Object.assign(a.style,{display:"flex",flexWrap:"wrap",alignItems:"baseline",columnGap:"5px",rowGap:"0px"});let i=document.createElement("span");if(i.textContent=t,Object.assign(i.style,{fontSize:n.lead?"14px":"12.5px",fontWeight:n.lead?"700":"500",fontVariantNumeric:"tabular-nums",whiteSpace:"nowrap",color:n.color??n.textColor}),a.appendChild(i),n.delta){let l=document.createElement("span");l.textContent=`${n.delta>=0?"\u25B2":"\u25BC"}${Yo(Math.abs(n.delta))}`,Object.assign(l.style,{fontSize:"10.5px",fontWeight:"700",whiteSpace:"nowrap",color:n.delta>=0?"#5fcb72":"#e2664b"}),a.appendChild(l)}return r.appendChild(o),r.appendChild(a),r}async function yv(){let e=[...document.querySelectorAll("user-card")];if(e.length===0)return;let t=await hn();if(t.length===0)return;let n=new Map(t.map(o=>[o.id,o])),r=await Ai();for(let o of e){let a=o.querySelector("h3 a[href*='/user/']"),i=U0(a?.getAttribute("href")??null),l=i?n.get(i):void 0,s=o.querySelector("h4[title^='Valor de Equipo']"),u=V0(s?.getAttribute("title")??null),c=r?l?`${l.balance}:${l.maxBid}:${u?.value}:${u?.delta}`:"none":"loading";if(o.dataset.bwoLcard===c)continue;o.dataset.bwoLcard=c,o.querySelectorAll(`.${vv}`).forEach(y=>y.remove());let f=o.querySelector(".main");if(!f)continue;let g=Rr(wn(f))?"#2b2b2b":"#f0f0f0",b=Rr(wn(f))?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)",p=document.createElement("div");if(p.className=vv,Object.assign(p.style,{marginTop:"6px",paddingTop:"6px",borderTop:`1px solid ${b}`,display:"flex",flexDirection:"column",gap:"5px"}),r)if(l){let y=u?.value??l.netWorth-l.balance,w=l.balance+y;p.appendChild(Xo("Equipo",Yo(y),{delta:u?.delta,textColor:g,lineColor:b})),p.appendChild(Xo("Saldo",Yo(l.balance),{color:l.balance>=0?"#5fcb72":"#e2664b",textColor:g,lineColor:b})),p.appendChild(Xo("Puja m\xE1x",Yo(l.maxBid),{textColor:g,lineColor:b})),p.appendChild(Xo("Patrimonio",Yo(w),{delta:u?.delta,lead:!0,textColor:g,lineColor:b}))}else continue;else{let y=Xo("Cargando",F0,{color:q0,textColor:g,lineColor:b});y.title=H0,p.appendChild(y)}f.appendChild(p)}}var hv="bwo-bid-quick",W0=[3,5,8,12,20,25,30,50,100,150];function bv(e){return`${Math.round(e).toLocaleString("es-ES")} \u20AC`}function K0(e){let r=(e.querySelector("player-bottom-sheet-header h4[aria-label]")?.getAttribute("aria-label")??"").match(/Valor de Mercado:\s*([\d.,]+)\s*€/);if(!r)return null;let o=r[1].replace(/[^\d]/g,"");return o?Number(o):null}function Q0(e,t){Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value")?.set?.call(e,bv(t)),e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0}))}function wv(){let e=document.querySelector('modal-dialog[aria-label^="Pujar por"]');if(!e)return;let t=e.querySelector("purchase-offer-editor"),n=t?.querySelector('input-int[name="bid"] input');if(!t||!n||t.querySelector(`.${hv}`))return;let r=K0(e);if(r==null)return;let o=document.createElement("div");o.className=hv,Object.assign(o.style,{display:"flex",gap:"6px",justifyContent:"center",flexWrap:"wrap",marginTop:"10px"});for(let a of W0){let i=Math.round(r*(1+a/100)),l=document.createElement("button");l.type="button",l.textContent=`+${a}%`,l.title=`Rellenar con ${bv(i)} (valor de mercado +${a}%)`,Object.assign(l.style,{background:"#232323",color:"#f0f0f0",border:"1px solid #3a3a3a",borderRadius:"999px",padding:"5px 13px",font:"700 12px/1.3 -apple-system, sans-serif",cursor:"pointer"}),l.addEventListener("click",s=>{s.preventDefault(),s.stopPropagation(),Q0(n,i)}),o.appendChild(l)}t.appendChild(o)}var G0="Diferencia entre el Valor de Mercado del jugador y la cantidad ofrecida",Sv="bwo-offer-pct",Ev="bwo-offer-profit";function xv(e){return Number(e.replace(/[^\d,.-]/g,"").replace(/\./g,"").replace(",","."))}function X0(e){return`${e<0?"\u2212":"+"}${Math.abs(Math.round(e)).toLocaleString("es-ES")} \u20AC`}function Y0(e){let t=e.closest("offer-group")?.querySelector("player-card .price h4");return t||(e.closest("modal-dialog")?.querySelector("player-bottom-sheet-header h4")??null)}function J0(e){let n=e.closest("offer-group")?.outerHTML.match(/\/i\/p\/(\d+)\.png/);if(n)return n[1];let o=e.closest("modal-dialog")?.outerHTML.match(/\/i\/p\/(\d+)\.png/);return o?o[1]:null}function Z0(e){let t=e.closest("h4"),n=t?getComputedStyle(t):null;return{fontSize:n?.fontSize??"16px",fontWeight:n?.fontWeight??"400"}}function e1(e,t){let n=document.createElement("span");return n.className=Sv,n.textContent=`${e>=0?"+":""}${e.toFixed(1)}%`,n.title="Lo que la oferta representa sobre el valor de mercado del jugador. La venta a la banca tiene un tope del +5%; por debajo del -5% ya no compensa frente a esperar otra oferta.",Object.assign(n.style,{marginLeft:"6px",fontSize:t.fontSize,fontWeight:t.fontWeight,fontVariantNumeric:"tabular-nums",whiteSpace:"nowrap",color:e>=0?"#5fcb72":"#e2664b"}),n}function t1(e,t){let n=document.createElement("span");return n.className=Ev,n.textContent=`${X0(e)} vs. lo pagado`,n.title="Lo que ganar\xEDas o perder\xEDas aceptando esta oferta, comparado con lo que pagaste por el jugador.",Object.assign(n.style,{display:"block",marginTop:"2px",fontSize:t.fontSize,fontWeight:t.fontWeight,fontVariantNumeric:"tabular-nums",color:e>=0?"#5fcb72":"#e2664b"}),n}async function kv(){let e=document.querySelectorAll("offer-group-offer");if(e.length===0)return;let t=await pn().catch(()=>null);for(let n of e){let r=n.querySelector(`increment[title="${G0}"]`);if(!r)continue;let o=Y0(n);if(!o)continue;let a=xv(o.textContent??""),i=xv(r.getAttribute("aria-label")??r.textContent??"");if(!a||Number.isNaN(i))continue;let l=J0(n),s=l&&t?await ji(l,t):null,u=`${a}:${r.getAttribute("aria-label")}:${s}`;if(n.dataset.bwoOfferKey===u)continue;n.dataset.bwoOfferKey=u,n.querySelectorAll(`.${Sv}, .${Ev}`).forEach(w=>w.remove());let f=r.classList.contains("decrement")||r.classList.contains("icon-decrement")?-i:i,g=f/a*100,b=Z0(r),p=r,y=e1(g,b);if(p.insertAdjacentElement("afterend",y),p=y,s){let w=a+f,m=t1(w-s,b);p.insertAdjacentElement("afterend",m)}}}var wc="bwo-rival-badge",xc="bwo-rival-info";function n1(e){let t=e.outerHTML.match(/\/i\/p\/(\d+)\.png/);return t?t[1]:null}function Nv(e){let t=e.querySelector(".tools market-tools button");if(!t)return null;let n=(t.textContent??"").trim();return n==="Cesi\xF3n"||/€/.test(n)?t:null}function r1(e,t,n){let r={price:e.price,playerId:e.id,name:e.name,position:String(e.position),owned:!1},o=t.cloneNode(!0);return o.removeAttribute("id"),o.removeAttribute("disabled"),o.removeAttribute("aria-disabled"),o instanceof HTMLButtonElement&&(o.type="button",o.disabled=!1),o.classList.add(xc),o.textContent="+ Info",o.title="Ver detalle: competencia, forma reciente, rentabilidad y calendario",Object.assign(o.style,{background:De,backgroundColor:De,borderColor:De,color:xn(n,"#1a1a1a","#fff"),fontWeight:"700",marginTop:"4px",width:"fit-content",minWidth:"0",alignSelf:"flex-end"}),o.addEventListener("click",a=>{a.stopPropagation(),a.preventDefault(),window.dispatchEvent(new CustomEvent(En,{detail:r}))}),o}async function Cv(){let e=[...document.querySelectorAll("player-card")],t=e.filter(i=>Nv(i)),n=new Set(t);for(let i of e)n.has(i)||(i.querySelector(`.${wc}`)?.remove(),i.querySelectorAll(`.${xc}`).forEach(l=>l.remove()),delete i.dataset.bwoRival);if(t.length===0)return;let r=await H(),o=await Oe(),a=await yn();for(let i of t){let l=i.querySelector(".content"),s=l?.querySelector(".main"),u=Nv(i);if(!l||!s||!u)continue;let c=n1(l),f=c?r.get(c):void 0,[g,b,p,y]=await Promise.all([f?pe(f.id):Promise.resolve(void 0),f?Et(f.id):Promise.resolve(void 0),f?.team_id?kt(f.team_id):Promise.resolve(void 0),f&&$t(f,o)?ft(f.id):Promise.resolve(void 0)]),w=f?oc(Qo(f,g,b,o,y,a)):null,m=Sn(p?.[0]),d=[w,m].filter(x=>x!=null),v=f?`${w?.text??""}|${m?.teamId??""}${m?.home?"h":"a"}`:"-";if(i.dataset.bwoRival===v||(i.dataset.bwoRival=v,s.querySelector(`.${wc}`)?.remove(),u.parentElement?.querySelectorAll(`.${xc}`).forEach(x=>x.remove()),!f))continue;if(d.length>0){let x=jr(d,wc);Object.assign(x.style,{display:"block",marginTop:"2px"}),s.appendChild(x)}let S=r1(f,u,s);u.insertAdjacentElement("afterend",S)}}var Sc="bwo-round-badge";function o1(e){let t=[];for(let n of e.outerHTML.matchAll(/\/i\/t\/(\d+)\.png/g))if(t.includes(n[1])||t.push(n[1]),t.length===2)break;return t}function a1(e){let t=document.createElement("div");return t.className=Sc,t.textContent=`${e} alineado${e===1?"":"s"}`,t.title=`${e} de tus titulares juega${e===1?"":"n"} este partido.`,Object.assign(t.style,{fontSize:"10px",fontWeight:"700",color:e>0?"#fff":"#93908d",background:e>0?"#c90800":"transparent",borderRadius:"8px",padding:e>0?"1px 6px":"0",display:"block",width:"fit-content",margin:"2px auto 0",whiteSpace:"nowrap"}),t}function i1(e){return[...e.querySelectorAll(":scope > td")].find(n=>!n.querySelector(".team-icon"))??null}function l1(e){return[...e.querySelectorAll(":scope > span, :scope > game-status")].find(n=>!n.classList.contains("home")&&!n.classList.contains("away")&&!n.querySelector(".team-icon"))??null}function s1(){return[...document.querySelectorAll("button, div, span, a")].some(e=>e.children.length===0&&(e.textContent??"").trim()==="Propietarios")}function u1(){let e=[];return document.querySelectorAll("round-lineup lineup .lineup-player").forEach(t=>{let r=t.querySelector("img.player-icon")?.getAttribute("src")?.match(/\/i\/p\/(\d+)\.png/);r&&e.push(r[1])}),e}function Pv(e){return((e.tagName==="A"?e:e.querySelector("a[href]"))?.getAttribute("href")??"").match(/\/matches\/[^/]+\/jornada-(\d+)/)?.[1]??null}async function _v(){let e=[...document.querySelectorAll('[itemtype="https://schema.org/SportsEvent"]')];if(e.length===0)return;if(s1()){e.forEach(s=>{delete s.dataset.bwoAlineados,s.querySelectorAll(`.${Sc}`).forEach(u=>u.remove())});return}let[t,n,r]=await Promise.all([vn(),Qf(),H()]),o=e.map(Pv).find(s=>s!=null)??null,a=u1();if(o&&a.length>0&&JSON.stringify(n[o])!==JSON.stringify(a)&&(await Kf(o,a),n[o]=a),t.length===0&&Object.keys(n).length===0)return;let i=new Map;function l(s){let u=s??"",c=i.get(u);if(c)return c;let f=s&&n[s]||t,g=new Map;for(let b of f){let p=r.get(b)?.team_id;p&&g.set(p,(g.get(p)??0)+1)}return i.set(u,g),g}for(let s of e){let u=o1(s);if(u.length<2)continue;let c=l(Pv(s)),f=u.reduce((p,y)=>p+(c.get(y)??0),0),g=String(f);if(s.dataset.bwoAlineados===g)continue;s.dataset.bwoAlineados=g,s.querySelectorAll(`.${Sc}`).forEach(p=>p.remove());let b=s.tagName==="TR"?i1(s):l1(s);b&&b.appendChild(a1(f))}}var Mv="bwo-lineup-modal-badge";function c1(e,t){let n=t.trim();if(!n)return[];let r=[];return e.querySelectorAll("div, span, a, td, li, h3, h4, p, strong").forEach(o=>{o.children.length>0||(o.textContent??"").trim()===n&&r.push(o)}),r}function d1(){let e=document.querySelector('modal-dialog[aria-label^="Alinear "]');return e||([...document.querySelectorAll("modal-dialog")].find(t=>[...t.querySelectorAll("button")].some(n=>{let r=(n.textContent??"").trim().toLowerCase();return r==="alinear"||r==="alineado"||r==="dejar vac\xEDa la posici\xF3n"}))??null)}async function Tv(){let e=d1();if(!e)return;let t=await gn();if(t.length===0)return;let n=await H(),r=await Oe();for(let o of t){let a=n.get(o);if(!a)continue;let i=c1(e,a.name);if(i.length===0)continue;let l=i[i.length-1];if(l.nextElementSibling?.classList.contains(Mv))continue;let[s,u]=await Promise.all([pe(o),a.team_id?kt(a.team_id):Promise.resolve(void 0)]),c=s?void 0:await Et(o),f=Qo(a,s,c,r),g=Sn(u?.[0]),b=[f,g].filter(p=>p!=null);l.insertAdjacentElement("afterend",jr(b,Mv))}}function Iv(){if(document.getElementById("bwo-declutter"))return;let e=document.createElement("style");e.id="bwo-declutter",e.textContent=`
    ads, ads-sidebar, .ad.horizontal, .ad.vertical, ins.adsbygoogle { display: none !important; }
    main.container { max-width: none !important; width: min(1600px, 94vw) !important; }

    /* Acabado visual de los elementos que Biwtools inserta fuera de su Shadow DOM. */
    .bwo-market-info,
    .bwo-rival-info {
      border-radius: 999px !important;
      box-shadow: 0 5px 14px rgba(0, 0, 0, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.16) !important;
      transition: transform 160ms cubic-bezier(.22, 1, .36, 1), filter 160ms ease, box-shadow 160ms ease !important;
    }

    .bwo-market-info:hover,
    .bwo-rival-info:hover {
      transform: translateY(-1px);
      filter: brightness(1.08);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
    }

    .bwo-market-info:focus-visible,
    .bwo-rival-info:focus-visible,
    .bwo-bid-quick button:focus-visible,
    .bwo-team-float button:focus-visible {
      outline: 3px solid rgba(240, 45, 73, 0.42) !important;
      outline-offset: 2px !important;
    }

    .bwo-bid-quick button {
      min-height: 30px;
      box-shadow: 0 3px 9px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.06);
      transition: transform 150ms cubic-bezier(.22, 1, .36, 1), background 150ms ease, border-color 150ms ease, filter 150ms ease;
    }

    .bwo-bid-quick button:hover {
      transform: translateY(-1px);
      filter: brightness(1.12);
      border-color: rgba(240, 45, 73, 0.58) !important;
    }

    .bwo-market-badge,
    .bwo-rival-badge,
    .bwo-lineup-modal-badge,
    .bwo-team-float,
    .bwo-float-drop {
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.18));
    }

    .bwo-market-badge,
    .bwo-rival-badge,
    .bwo-lineup-modal-badge {
      animation: bwo-host-badge-in 180ms cubic-bezier(.22, 1, .36, 1) both;
    }

    .bwo-market-recommended {
      transition: box-shadow 180ms ease, filter 180ms ease;
    }

    .bwo-market-recommended:hover {
      filter: brightness(1.025);
    }

    .bwo-offer-pct,
    .bwo-offer-profit,
    .bwo-market-value,
    .bwo-market-avg {
      font-variant-numeric: tabular-nums;
      text-shadow: 0 1px 7px rgba(0, 0, 0, 0.14);
    }

    .bwo-round-badge {
      box-shadow: 0 3px 9px rgba(0, 0, 0, 0.22);
      letter-spacing: .01em;
    }

    /* Acceso nativo a las pujas rivales en la barra principal de Biwenger. */
    .bwo-nav-bids {
      cursor: pointer !important;
      user-select: none;
    }

    .bwo-nav-bids-trigger {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      min-height: 44px;
      color: inherit;
      font: inherit;
      text-decoration: none !important;
      white-space: nowrap;
      outline: none;
    }

    .bwo-nav-bids-trigger:focus-visible {
      box-shadow: inset 0 -3px #e0142c;
    }

    .bwo-nav-bids .bwo-nav-bids-icon {
      display: inline-grid;
      place-items: center;
      width: 21px;
      height: 21px;
      margin-right: 7px;
      border: 1px solid currentColor;
      border-radius: 7px;
      font-size: 12px;
      font-style: normal;
      line-height: 1;
      opacity: .92;
    }

    .bwo-nav-bids:hover .bwo-nav-bids-icon,
    .bwo-nav-bids:focus-visible .bwo-nav-bids-icon {
      color: #fff;
      border-color: #e0142c;
      background: rgba(224, 20, 44, .18);
    }

    @keyframes bwo-host-badge-in {
      from { opacity: 0; transform: translateY(3px) scale(.97); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    @media (hover: none) {
      .bwo-market-info:hover,
      .bwo-rival-info:hover,
      .bwo-bid-quick button:hover { transform: none; }
    }

    @media (prefers-reduced-motion: reduce) {
      .bwo-market-badge,
      .bwo-rival-badge,
      .bwo-lineup-modal-badge { animation: none; }
      .bwo-market-info,
      .bwo-rival-info,
      .bwo-bid-quick button { transition: none !important; }
    }
  `,(document.head??document.documentElement).appendChild(e)}var p1="anuncios mostrados a nuestros usuarios";function Av(){let e=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),t;for(;t=e.nextNode();){if(!t.textContent?.includes(p1))continue;let n=t.parentElement;if(n){for(;n.parentElement&&n.parentElement.textContent?.trim()===n.textContent?.trim();)n=n.parentElement;n.dataset.bwoHidden||(n.dataset.bwoHidden="1",n.style.display="none")}}}var m1=/sportium|bwin|bet365|codere|betfair|pokerstars|luckia|juega\s*con\s*responsabilidad/i;function Lv(e){let t=`${e.getAttribute("href")??""} ${e.getAttribute("src")??""} ${e.getAttribute("alt")??""} ${e.getAttribute("title")??""}`;if(!m1.test(t))return;let n=e.parentElement&&e.parentElement.children.length===1?e.parentElement:e;n.dataset.bwoHidden||(n.dataset.bwoHidden="1",n.style.display="none")}function Rv(){document.querySelectorAll("a[href]").forEach(Lv),document.querySelectorAll("img[src], img[alt]").forEach(Lv);let e=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),t;for(;t=e.nextNode();){if(!t.textContent||!/juega\s*con\s*responsabilidad/i.test(t.textContent))continue;let n=t.parentElement;if(n){for(;n.parentElement&&n.parentElement.textContent?.trim()===n.textContent?.trim();)n=n.parentElement;n.dataset.bwoHidden||(n.dataset.bwoHidden="1",n.style.display="none")}}}var jv="biwtools_device_id",$v="biwtools_last_ping",f1="https://biwtools.es/api/ping";function g1(){let e=localStorage.getItem(jv);return e||(e=crypto.randomUUID(),localStorage.setItem(jv,e)),e}async function Bv(){let e=Number(localStorage.getItem($v)??0);if(!(Date.now()-e<72e6))try{await fetch(f1,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:g1()})}),localStorage.setItem($v,String(Date.now()))}catch{}}var Ov=`/* Tokens tomados de src/app/globals.css del proyecto biwenger-balances original.
   Se inyectan dentro del Shadow DOM, as\xED que no chocan con los estilos de Biwenger. */
/* \`:host\` estiliza el propio elemento contenedor (#biwtools-root) visto DESDE FUERA, en el DOM
   normal \u2014 no solo lo de dentro del Shadow DOM. Verificado en directo (getComputedStyle real):
   sin esto, el host se queda \`position: static; z-index: auto\` (los valores iniciales/por
   defecto), y por especificaci\xF3n CSS el z-index NO TIENE NING\xDAN EFECTO en un elemento static \u2014
   da igual que .bwo-fab-wrap, ya dentro del Shadow DOM, use el z-index m\xE1ximo: el hueco donde ese
   sub\xE1rbol se "engancha" en el apilamiento del documento lo decide el PROPIO host, y al ser
   est\xE1tico pierde siempre contra cualquier hermano con position expl\xEDcita (reportado con captura
   real: nuestro panel quedaba invisible detr\xE1s de un modal de Angular CDK con
   position:fixed;z-index:1000 \u2014 a pesar de compartir su mismo contenedor y ser su \xFAltimo hijo).
   \`top/left:0\` fija su posici\xF3n est\xE1tica (sin afectar a nada, es una caja de 0\xD70 sin contenido
   propio) para que "position:fixed" no la deje flotando en un punto arbitrario de la p\xE1gina. */
:host {
  --bwo-bg: #141414;
  --bwo-surface: #1e1e1e;
  --bwo-surface-2: #272727;
  --bwo-line: #333333;
  --bwo-chalk: #f0f0f0;
  --bwo-muted: #93908d;
  --bwo-accent: #e0142c;
  --bwo-green: #5fcb72;
  --bwo-coral: #e2664b;
  --bwo-font-mono: "Courier New", monospace;
  /* Misma tipograf\xEDa que Biwenger (Open Sans, v\xEDa Google Fonts): la carga la propia p\xE1gina host
     y @font-face es global al documento, as\xED que el Shadow DOM la hereda gratis sin @import. */
  --bwo-font-body: "Open Sans", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
  all: initial;
  font-family: var(--bwo-font-body);
  color: var(--bwo-chalk);
  /* DESPU\xC9S de \`all: initial\` a prop\xF3sito: ese reset tambi\xE9n afecta a position/z-index, as\xED que
     puestas ANTES quedaban anuladas (probado y corregido en directo: segu\xEDa sin funcionar hasta
     mover estas 4 l\xEDneas aqu\xED abajo). */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2147483647;
}

.bwo-panel {
  position: fixed;
  top: 80px;
  right: 20px;
  /* Ancho suficiente para las 5 columnas, sin desbordar el viewport en pantallas peque\xF1as. */
  width: min(680px, calc(100vw - 40px));
  max-height: 80vh;
  overflow: auto;
  background: var(--bwo-bg);
  border: 1px solid var(--bwo-line);
  border-radius: 10px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  z-index: 2147483647;
  font-family: var(--bwo-font-body);
  color: var(--bwo-chalk);
}

/* Bot\xF3n flotante "Bt" (mismos colores que el favicon: B blanca, t roja de marca, fondo oscuro),
   arriba a la derecha, sobre la pesta\xF1a "Jornada" \u2014 a la misma altura y tama\xF1o que el icono de
   perfil que Biwenger pinta arriba de "Inicio" (en el otro extremo), para que ninguno de los dos
   moleste al otro. Antes viv\xEDa abajo, pero ah\xED quedaba apretado entre el buscador y el men\xFA \u22EE
   nativos de Biwenger (ambos flotantes en esa misma esquina).
   \`open\`, si est\xE1 presente, muestra el aspa en vez de "Bt" y despliega bwo-fab-menu debajo. */
.bwo-fab-wrap {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 2147483647;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
}

.bwo-fab {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--bwo-bg);
  border: 2px solid var(--bwo-line);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 800;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
}

.bwo-fab-icon { width: 26px; height: 26px; object-fit: contain; }
.bwo-fab .bwo-fab-x { color: var(--bwo-chalk); font-size: 22px; font-weight: 600; }

/* Backdrop a pantalla completa: oscurece TODO lo que hay debajo (incluidas nuestras propias
   etiquetas flotantes de la pantalla Equipo, que antes chocaban visualmente con las pastillas
   sueltas del men\xFA) y cierra el men\xFA al tocar fuera \u2014 mismo patr\xF3n que el men\xFA de perfil nativo
   de Biwenger. .bwo-fab-wrap (el ancestro com\xFAn) ya usa el z-index m\xE1ximo para ganar a CUALQUIER
   cosa externa (Biwenger, las etiquetas flotantes en document.body...) \u2014 backdrop y men\xFA solo
   necesitan ordenarse ENTRE ELLOS dentro de ese contexto, con n\xFAmeros peque\xF1os de sobra: darle al
   backdrop un z-index tambi\xE9n enorme (como antes) lo pintaba por ENCIMA del panel al no tener
   \xE9ste ninguno expl\xEDcito (quedaba en el nivel "auto/0", pintado antes que cualquier z-index
   positivo) \u2014 el backdrop capturaba los clics destinados a los botones del men\xFA, que dejaban de
   responder. */
.bwo-fab-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 0;
}

/* Panel s\xF3lido con cabecera (logo + "Biwtools") y lista de accesos \u2014 en vez de pastillas rojas
   flotantes sin fondo propio, que se solapaban con cualquier cosa que hubiera detr\xE1s. Fondo
   "surface" (m\xE1s claro que el bg base) para que destaque con contraste sobre el backdrop, en vez
   de fundirse con \xE9l en un gris apagado. z-index 1: por encima del backdrop (ver su comentario). */
.bwo-fab-menu {
  position: relative;
  z-index: 1;
  width: 220px;
  background: var(--bwo-surface);
  border: 1px solid var(--bwo-line);
  border-radius: 14px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.6);
  overflow: hidden;
}

.bwo-fab-menu-head {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 18px 16px;
  background: var(--bwo-surface-2);
  border-bottom: 1px solid var(--bwo-line);
}

/* Versi\xF3n en ejecuci\xF3n, junto al wordmark: discreta pero siempre visible. Sirve para saber si a
   un dispositivo le ha llegado ya una actualizaci\xF3n sin tener que abrir Tampermonkey ni la
   consola (ver __BIWTOOLS_VERSION__ en inject.tsx). */
.bwo-fab-menu-version {
  font-size: 10px;
  font-weight: 700;
  color: var(--bwo-muted);
  font-variant-numeric: tabular-nums;
}

/* Mismo wordmark que la landing (biwtools.es), sin icono \u2014 en vez del c\xEDrculo "Bt" (ya se ve en
   el propio bot\xF3n que abre el men\xFA, sobraba repetirlo dentro). */
.bwo-fab-menu-wordmark {
  height: 22px;
  width: auto;
}

.bwo-fab-item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
  background: none;
  border: none;
  border-bottom: 1px solid var(--bwo-line);
  color: #ffffff;
  padding: 13px 16px;
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
}
.bwo-fab-item:last-child { border-bottom: none; }
.bwo-fab-item:active { background: var(--bwo-surface-2); }

.bwo-fab-item-icon {
  font-size: 16px;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--bwo-bg);
  border: 1px solid var(--bwo-line);
}

@media (max-width: 700px) {
  .bwo-fab-wrap {
    top: 8px;
    right: 8px;
  }

  .bwo-panel {
    top: 60px;
    right: 8px;
    width: calc(100vw - 16px);
    max-height: calc(100vh - 68px);
  }
}

.bwo-table-wrap {
  border: 1px solid var(--bwo-line);
  border-radius: 10px;
  overflow-x: auto; /* respaldo: si aun as\xED no cabe, se hace scroll horizontal en vez de cortar */
  margin: 12px;
}

.bwo-table {
  width: 100%;
  font-size: 13px;
  border-collapse: collapse;
}

.bwo-table thead th {
  text-align: left;
  font-family: var(--bwo-font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--bwo-muted);
  padding: 10px 12px;
  background: var(--bwo-surface-2);
  border-bottom: 1px solid var(--bwo-line);
  user-select: none;
  white-space: nowrap;
}

.bwo-sortable {
  cursor: pointer;
}

.bwo-sortable:hover {
  color: var(--bwo-chalk);
}

.bwo-indicator {
  font-size: 9px;
  color: var(--bwo-accent);
}

.bwo-right {
  text-align: right;
}

.bwo-table thead th.bwo-right {
  text-align: right;
}

.bwo-row {
  cursor: pointer;
  border-bottom: 1px solid var(--bwo-line);
}

.bwo-row:hover {
  background: var(--bwo-surface);
}

.bwo-table td {
  padding: 10px 12px;
}

.bwo-name {
  font-weight: 600;
}

.bwo-table td[data-positive] {
  font-family: var(--bwo-font-mono);
  color: var(--bwo-green);
}

.bwo-table td.bwo-right:not([data-positive]) {
  font-family: var(--bwo-font-mono);
}

/* Biwenger pone en negrita sus cifras (puntos, precios) para que resalten sobre el texto
   normal; las celdas num\xE9ricas del panel siguen el mismo criterio. */
td.bwo-right {
  color: var(--bwo-coral);
  font-weight: 700;
}

.bwo-team-value,
.bwo-max-bid {
  color: var(--bwo-chalk) !important;
}

.bwo-squad-size {
  color: var(--bwo-muted);
  font-size: 11px;
}

.bwo-change {
  font-family: var(--bwo-font-mono);
  font-size: 12px;
  white-space: nowrap;
}

.bwo-change span[data-up="true"] {
  color: var(--bwo-green);
}

.bwo-change span[data-up="false"] {
  color: var(--bwo-coral);
}

.bwo-no-change {
  color: var(--bwo-muted) !important;
}

.bwo-detail-row td {
  background: var(--bwo-surface);
  padding: 0;
}

.bwo-no-movements {
  padding: 12px 16px;
  color: var(--bwo-muted);
  font-size: 12px;
}

.bwo-movements {
  width: 100%;
}

.bwo-movements tr {
  border-bottom: 1px solid var(--bwo-line);
}

.bwo-movements tr:last-child {
  border-bottom: none;
}

.bwo-movements td {
  padding: 8px 16px;
  font-size: 12px;
}

.bwo-date {
  font-family: var(--bwo-font-mono);
  color: var(--bwo-muted);
  white-space: nowrap;
}

.bwo-desc {
  color: var(--bwo-chalk);
}

.bwo-amount {
  font-family: var(--bwo-font-mono);
  text-align: right;
  color: var(--bwo-coral);
  white-space: nowrap;
  font-weight: 700;
}

.bwo-amount[data-positive] {
  color: var(--bwo-green);
}

/* Detalle de competencia por jugador (feature #2). En paneles cortos (ActivityFeed) esta cabecera
   es solo el bot\xF3n + un par de l\xEDneas, pero en otros (CompetitionDetail) lleva adem\xE1s valoraci\xF3n,
   rentabilidad, forma reciente... \u2014 fijar el BLOQUE ENTERO con sticky (como se prob\xF3 primero) deja
   fija media pantalla y apenas dejaba ver la tabla de debajo. Lo \xFAnico que debe quedarse fijo es el
   propio bot\xF3n "Cerrar" (ver \`.bwo-back\` more abajo): el resto de la cabecera hace scroll normal
   con el contenido. */
.bwo-comp-head {
  padding: 12px;
  border-bottom: 1px solid var(--bwo-line);
}

/* Sticky en el propio bot\xF3n (no en \`.bwo-comp-head\`, ver su comentario): su ancestro con scroll
   real es \`.bwo-panel\`, as\xED que se fija respecto a ESE, no a la cabecera que lo contiene \u2014 el
   resto de la cabecera pasa por debajo al hacer scroll mientras el bot\xF3n queda siempre visible.
   Fondo opaco + sombra: sin ellas se ver\xEDa el texto de detr\xE1s transparent\xE1ndose bajo el bot\xF3n. */
.bwo-back {
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--bwo-surface-2);
  color: var(--bwo-chalk);
  border: 1px solid var(--bwo-line);
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 12px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  flex-shrink: 0;
  /* Reportado con captura real: el t\xEDtulo quedaba pegado justo debajo del bot\xF3n. \`.bwo-comp-name\`
     no tiene margen propio (display:block sin m\xE1s), as\xED que el hueco tiene que venir de aqu\xED. */
  margin-bottom: 8px;
}

.bwo-back:hover {
  background: var(--bwo-surface);
}

.bwo-comp-name {
  display: block;
  font-size: 15px;
}

.bwo-comp-meta {
  display: block;
  color: var(--bwo-muted);
  font-size: 12px;
  margin-top: 2px;
}

/* Fila superior: Cerrar y el pill del pr\xF3ximo partido comparten altura (antes el pill viv\xEDa
   dentro de .bwo-pcard, en su propia fila m\xE1s abajo, descuadrado respecto al bot\xF3n). */
.bwo-pcard-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
}

/* Tarjeta de jugador (primera versi\xF3n, sujeta a iterar): foto + nombre + barra de confianza +
   tiles, inspirada en una captura de otra app que mand\xF3 el usuario, adaptada a la paleta oscura
   de Biwtools en vez de calcarla en claro. Vive dentro de .bwo-comp-head (hace scroll normal con
   el resto de la cabecera, igual que las filas de debajo). */
.bwo-pcard {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-bottom: 14px;
  margin-bottom: 8px;
  border-bottom: 1px solid var(--bwo-line);
}

.bwo-pcard-next {
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  background: var(--bwo-surface-2);
  border: 1px solid var(--bwo-line);
  color: var(--bwo-chalk);
  white-space: nowrap;
}

/* Escudo del rival (ver OpponentBadge en CompetitionDetail.tsx): sustituye el nombre completo
   escrito por su escudo + icono casa/fuera, mismo dato en mucho menos espacio. Reutilizado en la
   pastilla de arriba, el tile "Pr\xF3ximo" y cada fila de la tabla de pr\xF3ximos partidos. */
.bwo-opp-crest {
  width: 15px;
  height: 15px;
  object-fit: contain;
  vertical-align: middle;
  margin-right: 3px;
}

.bwo-pcard-photo-ring {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(135deg, var(--bwo-accent), var(--bwo-surface-2));
  flex-shrink: 0;
}

.bwo-pcard-photo {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background: var(--bwo-surface-2);
}

.bwo-pcard-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Escudo del equipo, a la izquierda del nombre (lado contrario a la posici\xF3n): abre su
   alineaci\xF3n probable en Onces (ver onOpenTeamLineup). Reset de <button> a un simple contenedor
   de icono clicable, sin fondo/borde propios. */
.bwo-pcard-team {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  flex-shrink: 0;
}

.bwo-pcard-team img {
  width: 22px;
  height: 22px;
  object-fit: contain;
}

.bwo-pcard-name {
  font-size: 19px;
  font-weight: 800;
  letter-spacing: -0.01em;
}

.bwo-pcard-pos {
  font-size: 11px;
  font-weight: 700;
  color: var(--bwo-bg);
  background: var(--bwo-chalk);
  padding: 2px 8px;
  border-radius: 999px;
}

.bwo-pcard-conf {
  width: 100%;
  max-width: 260px;
}

.bwo-pcard-conf-label {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--bwo-muted);
  margin-bottom: 5px;
}

.bwo-pcard-conf-bar {
  display: flex;
  gap: 3px;
}

.bwo-pcard-pip {
  flex: 1;
  height: 7px;
  border-radius: 3px;
  background: var(--bwo-surface-2);
}

.bwo-pcard-tiles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  width: 100%;
}

.bwo-pcard-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  background: var(--bwo-surface);
  border: 1px solid var(--bwo-line);
  border-radius: 10px;
  padding: 8px 4px;
}

.bwo-pcard-tile-label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--bwo-muted);
  white-space: nowrap;
}

.bwo-pcard-tile-value {
  font-size: 13px;
  font-weight: 800;
  color: var(--bwo-chalk);
  white-space: nowrap;
}

.bwo-pcard-tile-sub {
  display: block;
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin-top: 2px;
}

/* Resto de secciones (valoraci\xF3n, rentabilidad, forma reciente, hist\xF3rico, calendario, puja
   sugerida) en el mismo lenguaje visual que la tarjeta de cabecera (.bwo-pcard*), en vez de la
   lista de filas de texto de antes \u2014 a petici\xF3n del usuario: "las dejamos pero las adaptamos al
   nuevo dise\xF1o as\xED modo tarjetas". Grid de 3 columnas (mismo n\xBA que .bwo-pcard-tiles, pedido
   expl\xEDcitamente para que Rentabilidad/Venta banca/Beneficio m\xE1ximo \u2014 las 3 tarjetas cortas de un
   solo dato \u2014 quepan en una sola l\xEDnea, igual que Valor/Tendencia/Pr\xF3ximo): las tarjetas con m\xE1s
   contenido (bar, sparkline, chips, tabla) ocupan las tres (.bwo-card-wide). */
.bwo-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  /* Antes sin relleno arriba (0 ...): la primera tarjeta quedaba pegada a la l\xEDnea inferior de la
     cabecera \u2014 reportado con captura real. */
  padding: 12px;
}

.bwo-card {
  background: var(--bwo-surface);
  border: 1px solid var(--bwo-line);
  border-radius: 10px;
  padding: 10px 12px;
}

.bwo-card-wide {
  grid-column: 1 / -1;
}

/* Mismo tama\xF1o que .bwo-pcard-tile (pedido expl\xEDcitamente): columna centrada, padding y
   tipograf\xEDa reducidos, en vez de la cabecera icono+label en fila con el valor grande debajo. */
.bwo-card-compact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 8px 4px;
  text-align: center;
}

.bwo-card-compact .bwo-card-head {
  margin-bottom: 0;
  font-size: 10px;
  flex-wrap: nowrap;
  justify-content: center;
}

.bwo-card-compact .bwo-card-label {
  margin-right: 0;
}

.bwo-card-compact .bwo-card-value {
  font-size: 13px;
}

/* La tabla de rivales trae su propio marco (fondo de cabecera, bordes de fila): dentro de la
   tarjeta se le quita el suyo propio (antes viv\xEDa en su propio .bwo-table-wrap aparte, con doble
   borde/radio si se anidaba tal cual dentro de .bwo-card) para no dibujar una caja dentro de otra. */
.bwo-card-table {
  padding: 10px 12px 0;
}

.bwo-card-table .bwo-table-wrap {
  border: none;
  border-radius: 0;
  margin: 10px -12px 0;
}

.bwo-card-head {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--bwo-muted);
  margin-bottom: 6px;
}

.bwo-card-icon {
  font-size: 13px;
}

.bwo-card-label {
  margin-right: auto;
}

.bwo-card-row {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 4px;
}

.bwo-card-value {
  font-size: 15px;
  font-weight: 800;
  color: var(--bwo-chalk);
  font-variant-numeric: tabular-nums;
}

.bwo-card-sub {
  display: block;
  font-size: 11px;
  color: var(--bwo-muted);
  margin-top: 4px;
}

/* Texto largo (frase completa, no un valor corto tipo "40% del rango"): .bwo-card-value (15px/800)
   pensado para valores cortos quedaba desproporcionado para una descripci\xF3n de varias l\xEDneas
   (p.ej. el estado f\xEDsico oficial de Biwenger) \u2014 reportado con captura real. */
.bwo-card-desc {
  display: block;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
}

.bwo-card-pill {
  font-size: 10px;
  font-weight: 700;
  background: var(--bwo-surface-2);
  border: 1px solid var(--bwo-line);
  border-radius: 999px;
  padding: 2px 8px;
  white-space: nowrap;
}

/* Selector de formaci\xF3n del Optimizador de alineaci\xF3n: mismo look que .bwo-card-pill pero
   clickable, con un estado activo en verde para la formaci\xF3n elegida. */
.bwo-formation-picker {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}

.bwo-formation-btn {
  background: var(--bwo-surface-2);
  color: var(--bwo-chalk);
  border: 1px solid var(--bwo-line);
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 700;
  font-family: var(--bwo-font-mono);
  cursor: pointer;
}

.bwo-formation-btn:hover {
  background: var(--bwo-surface);
}

.bwo-formation-btn.active {
  background: var(--bwo-green);
  border-color: var(--bwo-green);
  color: #0d2b12;
}

/* Fila de venta de Finanzas: foto grande + nombre arriba/equipo+posici\xF3n abajo a la izquierda,
   importe arriba/% debajo a la derecha (pedido expl\xEDcitamente, con captura real de c\xF3mo quedaba
   mal en una sola l\xEDnea con nombres largos). No es una <table>: cada mitad necesita apilar dos
   l\xEDneas con tama\xF1os de letra distintos, que una celda de tabla no reparte bien. */
.bwo-sale-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid var(--bwo-line);
}

.bwo-sale-row:last-child {
  border-bottom: none;
}

.bwo-sale-photo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  background: var(--bwo-surface-2);
}

.bwo-sale-main {
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
}

.bwo-sale-name {
  font-weight: 700;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bwo-sale-sub {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: var(--bwo-muted);
}

.bwo-sale-result {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-shrink: 0;
  text-align: right;
}

.bwo-sale-amount {
  font-weight: 800;
  font-size: 14px;
  font-family: var(--bwo-font-mono);
  white-space: nowrap;
}

.bwo-sale-pct {
  font-size: 11px;
  font-family: var(--bwo-font-mono);
  opacity: 0.85;
}

/* Rejilla de medias de puntos por sistema de puntuaci\xF3n, dentro de la tarjeta "Temporada
   pasada" \u2014 mismo esp\xEDritu que los tiles de cabecera, pero tantas columnas como sistemas haya
   con dato (normalmente 3-5), no fijo a 3. */
.bwo-stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  gap: 8px;
}

.bwo-stat-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  background: var(--bwo-surface-2);
  border: 1px solid var(--bwo-line);
  border-radius: 8px;
  padding: 6px 4px;
}

.bwo-stat-cell-label {
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--bwo-muted);
  white-space: nowrap;
}

.bwo-stat-cell-value {
  font-size: 15px;
  font-weight: 800;
  color: var(--bwo-chalk);
  font-variant-numeric: tabular-nums;
}

.bwo-val-bar {
  height: 6px;
  background: var(--bwo-surface-2);
  border-radius: 999px;
  overflow: hidden;
}

.bwo-val-fill {
  height: 100%;
  border-radius: 999px;
}

/* Forma reciente: puntos por partido (punto 1 del an\xE1lisis de la API) */
.bwo-form {
  margin-top: 12px;
}

.bwo-form-chips {
  display: flex;
  gap: 6px;
  margin-top: 4px;
}

.bwo-chip {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  background: var(--bwo-surface-2);
  border: 1px solid var(--bwo-line);
  border-radius: 6px;
  padding: 4px 0;
  font-family: var(--bwo-font-mono);
  font-size: 14px;
  font-weight: 700;
  cursor: default;
}

.bwo-chip-round {
  font-size: 9px;
  font-weight: 400;
  color: var(--bwo-muted);
  letter-spacing: 0.06em;
}

.bwo-chip-events {
  font-size: 8px;
  line-height: 1;
}

/* Desglose diario de precio (hasta 7 chips): a diferencia de "Forma reciente" (siempre \u22645
   chips de 1-2 d\xEDgitos, .bwo-form-chips los reparte a ancho fijo con flex:1 y le sobra sitio
   siempre), aqu\xED el contenido es variable \u2014 "+80k" cabe, "+1.234k" no siempre cabe en una
   s\xE9ptima parte de la fila. flex-wrap baja los que no quepan a una fila nueva en vez de
   desbordar o comprimir el texto; bwo-chip-auto deja que cada chip mida lo que necesite en vez
   de repartirse el ancho a partes iguales, que es justo lo que forzaba el desbordamiento.
   Nota: el \`flex-wrap: wrap\` es cosm\xE9tico \u2014 el n\xFAmero EXACTO de cada d\xEDa siempre est\xE1 en el
   \`title\` del chip (formatMoney sin abreviar), as\xED que ning\xFAn dato deja de estar disponible. */
.bwo-delta-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}

.bwo-chip-auto {
  flex: 0 1 auto;
  min-width: 40px;
  padding: 4px 6px;
}

/* Tendencia y proyecci\xF3n de precio (feature #4) */
.bwo-trend {
  margin-top: 12px;
}

.bwo-sparkline {
  display: block;
  width: 100%;
  height: 32px;
}

.bwo-trend-row {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--bwo-muted);
  margin-top: 4px;
}

/* Pr\xF3ximos partidos del equipo (feature: calendario del mercado) */
.bwo-fixtures {
  margin-top: 12px;
}

.bwo-fixtures-table {
  width: 100%;
  margin-top: 4px;
  font-size: 12px;
}

.bwo-fixtures-table td {
  padding: 4px 0;
}

/* Perfil de pujas: columnas informativas, sin la sem\xE1ntica verde/coral de "llega o no" */
.bwo-comp td.bwo-bid-stat {
  color: var(--bwo-chalk) !important;
  font-family: var(--bwo-font-mono);
}


/* Onces probables de LaLiga (pesta\xF1a \u26BD Onces): rejilla de escudos -> campo con fotos */
.bwo-lineup-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
  gap: 8px;
  padding: 12px 16px;
}

.bwo-lineup-team-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: var(--bwo-surface);
  border: 1px solid var(--bwo-line);
  border-radius: 8px;
  padding: 10px 4px;
  cursor: pointer;
  color: var(--bwo-chalk);
  font: 600 11px/1.3 var(--bwo-font-body);
  text-align: center;
}

.bwo-lineup-team-btn:hover {
  background: var(--bwo-surface-2);
}

.bwo-lineup-badge {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.bwo-lineup-badge-sm {
  width: 20px;
  height: 20px;
  object-fit: contain;
  margin-right: 6px;
}

/* El mismo campo que usa Biwenger en su propio once (confirmado con su HTML real: <div class="field
   football" style="background-image: url(.../img/sports/football/ground.png)">, sin l\xEDneas propias
   dibujadas aparte \u2014 el rayado y el marcado ya vienen en la textura). Se pinta como <img> normal
   (ver bwo-pitch-bg) en vez de background-image: as\xED es la proporci\xF3n REAL de esa imagen la que fija
   la altura del recuadro, sin inventar un min-height que la recorte o la estire. Los jugadores se
   colocan con left/top en % \u2014 las MISMAS coordenadas x/y que usa FutbolFantasy en su propio once
   tipo (ver shared-data-service/src/lineups.ts) \u2014 relativas a este mismo recuadro, as\xED que encajan
   sobre el campo real sin desajustes. El ancho m\xE1ximo evita que en un panel ancho el campo salga
   gigante \u2014 igual de compacto que en la app nativa de Biwenger.
*/
.bwo-pitch {
  position: relative;
  margin: 4px auto 16px;
  max-width: 360px;
  border-radius: 10px;
  overflow: hidden;
}

.bwo-pitch-bg {
  display: block;
  width: 100%;
  height: auto;
}

.bwo-pitch-player {
  position: absolute;
  z-index: 1;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  text-align: center;
}

/* Sin recorte circular ni fondo propio: el PNG de Biwenger (cdn.biwenger.com/i/p/<id>.png) ya
   trae el recorte final con transparencia, igual que en su propio campo \u2014 un c\xEDrculo blanco o un
   relleno oscuro nuestros encima solo lo distorsionaban. Tama\xF1o y object-fit calcados de Biwenger
   (comprobado en su Computed real: campo 475px de ancho, foto 50px = 10.5% \u2014 aqu\xED 38px sobre un
   campo de 360px de ancho es la misma proporci\xF3n; object-fit: contain, no cover). */
.bwo-pitch-photo {
  width: 38px;
  height: 38px;
  object-fit: contain;
}

/* Titular sin ficha en Biwenger (extras): sin foto que mostrar, as\xED que aqu\xED s\xED hace falta un
   c\xEDrculo propio de fondo para que la inicial se lea sobre el c\xE9sped. */
.bwo-pitch-initial {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 50%;
  background: #1c1c1c;
  border: 2px solid #fff;
  font: 700 18px/1 var(--bwo-font-body);
  color: #fff;
}

.bwo-pitch-name {
  margin-top: 8px;
  font-size: 10px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  line-height: 1.2;
}

/* El % va como chapa superpuesta al borde inferior de la foto (estilo FutbolFantasy): fondo
   oscuro fijo + borde de color por tramo, para que se lea bien sobre el c\xE9sped (una chapa verde
   sobre campo verde no contrastaba). */
.bwo-pitch-photo-wrap {
  position: relative;
  display: inline-flex;
}
.bwo-pitch-prob {
  position: absolute;
  bottom: -7px;
  left: 50%;
  transform: translateX(-50%);
  font: 800 9px/1 var(--bwo-font-body);
  padding: 2px 5px;
  border-radius: 8px;
  color: #fff;
  background: #14171c;
  border: 2px solid #6b7078;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  white-space: nowrap;
}

/* Tramos de probabilidad (mismo criterio de color que FutbolFantasy): el color va en el BORDE,
   con fondo oscuro fijo. Se reutilizan en el campo (titulares) y en las alternativas. */
.bwo-prob-hi { border-color: #2fb344; }
.bwo-prob-mid { border-color: #f5a623; }
.bwo-prob-lo { border-color: #e8503a; }
.bwo-prob-zero { border-color: #6b7078; color: #c3c3c3; }

/* "Alternativas al once": rejilla de suplentes con su probabilidad, bajo el campo. */
.bwo-alts {
  margin-top: 18px;
}
.bwo-alts-title {
  font: 700 13px/1 var(--bwo-font-body);
  color: var(--bwo-chalk);
  margin-bottom: 10px;
}
.bwo-alts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
  gap: 12px;
}
.bwo-alt {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4px;
}
.bwo-alt-photo {
  width: 52px;
  height: 52px;
  object-fit: contain;
}
.bwo-alt-initial {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 50%;
  background: #1c1c1c;
  border: 2px solid var(--bwo-line);
  font: 700 16px/1 var(--bwo-font-body);
  color: #fff;
}
.bwo-alt-name {
  font-size: 10px;
  font-weight: 600;
  color: var(--bwo-chalk);
  line-height: 1.2;
}
.bwo-alt-prob {
  font: 800 9px/1 var(--bwo-font-body);
  padding: 2px 5px;
  border-radius: 8px;
  color: #fff;
  background: #14171c;
  border: 2px solid #6b7078;
}

/* Estado f\xEDsico / lesionados: lista por equipo, cada jugador con una franja izquierda de color
   por gravedad (rojo baja, \xE1mbar duda, verde recuper\xE1ndose). */
.bwo-inj-teams {
  display: flex;
  flex-direction: column;
  gap: 18px;
  /* Sin relleno propio (0 por defecto): el primer equipo quedaba pegado a la l\xEDnea inferior de
     la cabecera, y las tarjetas sin margen a los bordes del panel \u2014 reportado con captura real. */
  padding: 12px;
}
.bwo-inj-team-head {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 6px;
  margin-bottom: 8px;
  border-bottom: 1px solid var(--bwo-line);
  font: 700 13px/1 var(--bwo-font-body);
  color: var(--bwo-chalk);
}
.bwo-inj-count {
  margin-left: auto;
  font: 700 11px/1 var(--bwo-font-body);
  color: var(--bwo-muted);
  background: var(--bwo-surface);
  border: 1px solid var(--bwo-line);
  border-radius: 10px;
  padding: 3px 8px;
}
/* Rejilla de 2 columnas (pedido expl\xEDcitamente, mismo lenguaje visual que el resto de tarjetas
   de la app \u2014 fondo, borde, redondeado): antes cada jugador ocupaba una fila entera de ancho
   completo, as\xED que dos lesionados del mismo equipo quedaban muy separados verticalmente y
   costaba verlos juntos de un vistazo. */
.bwo-inj-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}
/* Tarjeta "estilo Jugadores libres" (probado a petici\xF3n expl\xEDcita en vez de la fila foto+texto
   de antes): foto centrada con escudo superpuesto, mismo patr\xF3n que .bwo-free-card. Gravedad
   como lavado transl\xFAcido + resplandor interior \u2014 mismo lenguaje que favoritos/recomendados, en
   vez de la franja izquierda de color que llevaba la fila anterior. */
.bwo-inj-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2px;
  background: var(--bwo-surface);
  border: 1px solid var(--bwo-line);
  border-radius: 10px;
  padding: 10px 8px;
  min-width: 0;
}
.bwo-grav-0 {
  background-image: linear-gradient(rgba(232, 80, 58, 0.16), rgba(232, 80, 58, 0.16));
  box-shadow: inset 0 0 0 2px rgba(232, 80, 58, 0.55);
}
.bwo-grav-1 {
  background-image: linear-gradient(rgba(245, 166, 35, 0.16), rgba(245, 166, 35, 0.16));
  box-shadow: inset 0 0 0 2px rgba(245, 166, 35, 0.55);
}
.bwo-grav-2 {
  background-image: linear-gradient(rgba(47, 179, 68, 0.16), rgba(47, 179, 68, 0.16));
  box-shadow: inset 0 0 0 2px rgba(47, 179, 68, 0.55);
}
.bwo-inj-card-photo-wrap {
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 4px;
}
.bwo-inj-card-photo {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--bwo-surface-2);
}
.bwo-inj-initial {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font: 700 18px/1 var(--bwo-font-body);
  color: #fff;
}
.bwo-inj-card-team-btn {
  position: absolute;
  right: -4px;
  bottom: -2px;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}
.bwo-inj-card-team-badge {
  width: 20px;
  height: 20px;
  object-fit: contain;
  background: var(--bwo-bg);
  border-radius: 50%;
  padding: 1px;
}
.bwo-inj-card-name {
  font-size: 12px;
  font-weight: 700;
  color: var(--bwo-chalk);
  line-height: 1.25;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.bwo-inj-card-prob {
  font: 800 9px/1 var(--bwo-font-body);
  color: var(--bwo-muted);
  border: 1px solid var(--bwo-line);
  border-radius: 6px;
  padding: 2px 4px;
  margin-top: 1px;
}
.bwo-inj-card-status {
  font-size: 10px;
  font-weight: 700;
  color: var(--bwo-chalk);
  margin-top: 3px;
}
.bwo-inj-card-desc {
  font-size: 10px;
  color: var(--bwo-muted);
  margin-top: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* Rivales que no llegan al precio: atenuados */
.bwo-comp .bwo-row[data-affords="false"] td {
  color: var(--bwo-muted);
}

.bwo-comp .bwo-right[data-affords="true"] {
  color: var(--bwo-green) !important;
  font-family: var(--bwo-font-mono);
}

.bwo-comp .bwo-right[data-affords="false"] {
  color: var(--bwo-coral) !important;
  font-family: var(--bwo-font-mono);
}

/* Jugadores libres (pesta\xF1a \u{1F193} del men\xFA Bt): pesta\xF1as de posici\xF3n + rejilla de tarjetas con foto,
   al estilo de las de Mercado \u2014 panel propio (Shadow DOM), no injertado en el DOM de Biwenger, as\xED
   que es un dise\xF1o propio inspirado en el suyo, no un clon literal de su marcado. */
.bwo-pos-tabs {
  display: flex;
  gap: 6px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--bwo-line);
  overflow-x: auto;
}

.bwo-pos-tab {
  display: flex;
  align-items: center;
  gap: 5px;
  background: var(--bwo-surface);
  border: 1px solid var(--bwo-line);
  border-radius: 999px;
  padding: 5px 10px;
  color: var(--bwo-muted);
  font: 700 12px/1.2 var(--bwo-font-body);
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
}

.bwo-pos-tab:hover {
  background: var(--bwo-surface-2);
}

.bwo-pos-tab.active {
  background: var(--bwo-accent);
  border-color: var(--bwo-accent);
  color: #fff;
}

.bwo-pos-tab-count {
  font-size: 10px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 999px;
  padding: 1px 6px;
}

.bwo-pos-tab:not(.active) .bwo-pos-tab-count {
  background: var(--bwo-surface-2);
  color: var(--bwo-chalk);
}

.bwo-free-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
  padding: 12px;
}

.bwo-free-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2px;
  background: var(--bwo-surface);
  border: 1px solid var(--bwo-line);
  border-radius: 10px;
  padding: 10px 8px;
}

.bwo-free-card-photo-wrap {
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 4px;
}

.bwo-free-card-photo {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--bwo-surface-2);
}

/* Bot\xF3n reset (mismo patr\xF3n que .bwo-pcard-team en CompetitionDetail.tsx): el escudo abre la
   alineaci\xF3n probable de ese equipo, y "atr\xE1s" vuelve aqu\xED mismo (ver openTeamLineup/view.from
   en inject.tsx, gen\xE9rico para cualquier panel que lo use). */
.bwo-free-card-team-btn {
  position: absolute;
  right: -4px;
  bottom: -2px;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}

.bwo-free-card-team-badge {
  width: 20px;
  height: 20px;
  object-fit: contain;
  background: var(--bwo-bg);
  border-radius: 50%;
  padding: 1px;
}

.bwo-free-card-status {
  position: absolute;
  left: -4px;
  bottom: -2px;
  font-size: 13px;
}

.bwo-free-card-name {
  font-size: 12px;
  font-weight: 700;
  color: var(--bwo-chalk);
  line-height: 1.25;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* Titularidad (Titular/Suplente, ver lineupInfo() en FreeAgentsPanel.tsx) y media de puntos de
   la \xFAltima temporada jugada, EN LA MISMA L\xCDNEA (pedido expl\xEDcitamente, para no alargar la
   tarjeta) \u2014 el nombre del equipo ya no se repite en texto, es redundante con el escudo. */
.bwo-free-card-stats {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 5px;
  font-size: 10px;
  font-weight: 700;
  margin-top: 1px;
  max-width: 100%;
  overflow: hidden;
}

.bwo-free-card-avg {
  color: var(--bwo-muted);
  white-space: nowrap;
}

.bwo-free-card-price {
  font-size: 13px;
  font-weight: 800;
  color: var(--bwo-chalk);
  font-variant-numeric: tabular-nums;
  margin-top: 3px;
}

.bwo-free-card-delta {
  font-size: 10px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.bwo-free-card-delta.up {
  color: var(--bwo-green);
}

.bwo-free-card-delta.down {
  color: var(--bwo-coral);
}

/* Recomendado (mismo criterio que el panel de Recomendaciones \u2014 ver computeSquadNeeds): mismo
   lavado transl\xFAcido + resplandor interior que el resaltado de favoritos en Mercado
   (market/marketOverlay.ts), pero en verde en vez de \xE1mbar, para que ambos resaltados convivan
   sin confundirse si en el futuro tambi\xE9n se pueden marcar favoritos aqu\xED. */
.bwo-free-card-recommended {
  background-image: linear-gradient(rgba(95, 203, 114, 0.16), rgba(95, 203, 114, 0.16));
  box-shadow: inset 0 0 0 2px rgba(95, 203, 114, 0.6);
}

.bwo-free-card-rec-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  font-size: 12px;
  background: var(--bwo-bg);
  border-radius: 50%;
  line-height: 1;
  padding: 1px;
}

/* Favorito (pedido expl\xEDcitamente: mismo resaltado \xE1mbar que Mercado \u2014 ver FAVORITE_BG/GLOW en
   market/marketOverlay.ts, mismos valores rgba(245, 197, 24, ...) para que sea el MISMO amarillo
   en toda la app). Aqu\xED es de nadie (jugador libre), as\xED que no puede coincidir con "owned"; s\xED
   puede coincidir con "recomendado" \u2014 en ese caso gana el \xE1mbar de favorito (se\xF1al expl\xEDcita del
   usuario) y el chip \u{1F3AF} se sigue mostrando igual, solo cambia el fondo de la tarjeta. */
.bwo-free-card-favorite {
  background-image: linear-gradient(rgba(245, 197, 24, 0.16), rgba(245, 197, 24, 0.16));
  box-shadow: inset 0 0 0 2px rgba(245, 197, 24, 0.6);
}

.bwo-free-card-fav-badge {
  position: absolute;
  top: -4px;
  left: -4px;
  font-size: 12px;
  background: var(--bwo-bg);
  border-radius: 50%;
  line-height: 1;
  padding: 1px;
}

/* Actividad de la liga (pedido expl\xEDcitamente: mismo formato de tarjeta que Jugadores libres/
   Lesionados en vez de la tabla que ten\xEDa antes). Rejilla de 2 columnas, foto centrada con
   escudo superpuesto \u2014 los movimientos sin jugador real (p.ej. "Cierre de jornada") usan el
   icono gen\xE9rico \u{1F504} en vez de foto. */
.bwo-act-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  /* Antes sin relleno arriba (0 ...): la primera tarjeta quedaba pegada a la l\xEDnea inferior de la
     cabecera \u2014 reportado con captura real. */
  padding: 12px;
}
.bwo-act-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2px;
  background: var(--bwo-surface);
  border: 1px solid var(--bwo-line);
  border-radius: 10px;
  padding: 10px 8px;
  min-width: 0;
}
.bwo-act-card-photo-wrap {
  position: relative;
  width: 56px;
  height: 56px;
  margin-bottom: 4px;
}
.bwo-act-card-photo {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--bwo-surface-2);
}
.bwo-act-card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 24px;
}
.bwo-act-card-team-btn {
  position: absolute;
  right: -4px;
  bottom: -2px;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}
.bwo-act-card-team-badge {
  width: 20px;
  height: 20px;
  object-fit: contain;
  background: var(--bwo-bg);
  border-radius: 50%;
  padding: 1px;
}
.bwo-act-card-name {
  font-size: 12px;
  font-weight: 700;
  color: var(--bwo-chalk);
  line-height: 1.25;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.bwo-act-card-manager {
  font-size: 10px;
  color: var(--bwo-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}
.bwo-act-card-meta {
  font-size: 10px;
  color: var(--bwo-muted);
  margin-top: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}
.bwo-act-card-amount {
  font-size: 13px;
  font-weight: 800;
  font-family: var(--bwo-font-mono);
  color: var(--bwo-coral);
  margin-top: 3px;
}
.bwo-act-card-amount[data-positive] {
  color: var(--bwo-green);
}
.bwo-act-card-backtest {
  font-size: 9px;
  color: var(--bwo-muted);
  margin-top: 2px;
}

/* Panel de diagn\xF3stico (\u{1FA7A} en el men\xFA Bt): filas etiqueta/valor agrupadas. Deliberadamente sobrio
   y denso \u2014 est\xE1 para leerse y mandarse en una captura desde un m\xF3vil, no para lucir. */
.bwo-diag {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 12px;
}

.bwo-diag-group {
  background: var(--bwo-surface);
  border: 1px solid var(--bwo-line);
  border-radius: 10px;
  padding: 10px 12px;
}

.bwo-diag-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--bwo-muted);
  margin-bottom: 6px;
}

.bwo-diag-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  padding: 3px 0;
}

.bwo-diag-label {
  font-size: 12px;
  color: var(--bwo-muted);
}

.bwo-diag-value {
  font-size: 12px;
  font-weight: 700;
  color: var(--bwo-chalk);
  font-variant-numeric: tabular-nums;
  text-align: right;
  word-break: break-word;
}

.bwo-diag-note {
  display: block;
  font-size: 10px;
  line-height: 1.4;
  color: var(--bwo-muted);
  margin-top: 6px;
}

/* --------------------------------------------------------------------------
   Pulido visual profesional
   Capa final de refinamiento: conserva el marcado y la lógica existentes y
   unifica profundidad, jerarquía, interacción, responsive y accesibilidad.
   -------------------------------------------------------------------------- */

:host {
  --bwo-bg: #0d1016;
  --bwo-surface: #151a23;
  --bwo-surface-2: #1d2430;
  --bwo-surface-3: #262e3d;
  --bwo-line: #30394a;
  --bwo-line-soft: rgba(255, 255, 255, 0.075);
  --bwo-chalk: #f7f8fb;
  --bwo-muted: #a6afbf;
  --bwo-accent: #f02d49;
  --bwo-accent-bright: #ff4962;
  --bwo-green: #65d47a;
  --bwo-coral: #ff806c;
  --bwo-amber: #f8c94f;
  --bwo-radius-sm: 8px;
  --bwo-radius-md: 12px;
  --bwo-radius-lg: 18px;
  --bwo-shadow-sm: 0 3px 10px rgba(0, 0, 0, 0.22);
  --bwo-shadow-md: 0 12px 32px rgba(0, 0, 0, 0.38);
  --bwo-shadow-lg: 0 24px 70px rgba(0, 0, 0, 0.58);
  --bwo-ease: cubic-bezier(0.22, 1, 0.36, 1);
  color-scheme: dark;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

*, *::before, *::after {
  box-sizing: border-box;
}

::selection {
  color: #fff;
  background: rgba(240, 45, 73, 0.72);
}

button,
[role="button"] {
  -webkit-tap-highlight-color: transparent;
}

button:focus-visible,
[role="button"]:focus-visible,
[tabindex]:focus-visible {
  outline: 3px solid rgba(255, 73, 98, 0.42);
  outline-offset: 2px;
}

.bwo-panel,
.bwo-fab-menu,
.bwo-table-wrap,
.bwo-pos-tabs {
  scrollbar-color: var(--bwo-surface-3) transparent;
  scrollbar-width: thin;
}

.bwo-panel::-webkit-scrollbar,
.bwo-table-wrap::-webkit-scrollbar,
.bwo-pos-tabs::-webkit-scrollbar {
  width: 9px;
  height: 9px;
}

.bwo-panel::-webkit-scrollbar-track,
.bwo-table-wrap::-webkit-scrollbar-track,
.bwo-pos-tabs::-webkit-scrollbar-track {
  background: transparent;
}

.bwo-panel::-webkit-scrollbar-thumb,
.bwo-table-wrap::-webkit-scrollbar-thumb,
.bwo-pos-tabs::-webkit-scrollbar-thumb {
  background: var(--bwo-surface-3);
  background-clip: padding-box;
  border: 2px solid transparent;
  border-radius: 999px;
}

.bwo-panel {
  top: 76px;
  right: 16px;
  width: min(720px, calc(100vw - 32px));
  max-height: min(84vh, calc(100dvh - 92px));
  overscroll-behavior: contain;
  scrollbar-gutter: stable;
  background:
    radial-gradient(circle at 90% -10%, rgba(240, 45, 73, 0.13), transparent 34%),
    linear-gradient(180deg, #121721 0%, var(--bwo-bg) 100%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--bwo-radius-lg);
  box-shadow: var(--bwo-shadow-lg), inset 0 1px 0 rgba(255, 255, 255, 0.055);
  animation: bwo-panel-in 260ms var(--bwo-ease) both;
  isolation: isolate;
}

.bwo-fab-wrap {
  top: 16px;
  right: 16px;
  gap: 12px;
}

.bwo-fab {
  position: relative;
  width: 48px;
  height: 48px;
  color: var(--bwo-chalk);
  background:
    linear-gradient(var(--bwo-bg), var(--bwo-bg)) padding-box,
    linear-gradient(145deg, var(--bwo-accent-bright), #8b2135 62%, var(--bwo-line)) border-box;
  border: 2px solid transparent;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.48), 0 0 0 1px rgba(255, 255, 255, 0.06);
  transition: transform 180ms var(--bwo-ease), box-shadow 180ms ease, filter 180ms ease;
}

.bwo-fab::after {
  content: "";
  position: absolute;
  inset: 5px;
  z-index: -1;
  border-radius: inherit;
  background: rgba(240, 45, 73, 0.18);
  filter: blur(11px);
}

.bwo-fab:hover {
  transform: translateY(-2px) scale(1.035);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.54), 0 0 22px rgba(240, 45, 73, 0.2);
  filter: brightness(1.08);
}

.bwo-fab:active {
  transform: translateY(0) scale(0.97);
}

.bwo-fab-icon {
  width: 28px;
  height: 28px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.35));
}

.bwo-fab-backdrop {
  background: rgba(4, 6, 10, 0.64);
  -webkit-backdrop-filter: blur(3px) saturate(0.8);
  backdrop-filter: blur(3px) saturate(0.8);
  animation: bwo-fade-in 180ms ease both;
}

.bwo-fab-menu {
  width: 250px;
  background:
    radial-gradient(circle at 100% 0, rgba(240, 45, 73, 0.13), transparent 42%),
    rgba(21, 26, 35, 0.98);
  border-color: rgba(255, 255, 255, 0.12);
  border-radius: var(--bwo-radius-lg);
  box-shadow: var(--bwo-shadow-lg), inset 0 1px 0 rgba(255, 255, 255, 0.06);
  animation: bwo-menu-in 220ms var(--bwo-ease) both;
  transform-origin: top right;
}

.bwo-fab-menu-head {
  justify-content: flex-start;
  padding: 18px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.065), rgba(255, 255, 255, 0.018));
  border-bottom-color: var(--bwo-line-soft);
}

.bwo-fab-menu-version {
  margin-left: auto;
  padding: 3px 7px;
  color: #c6cbd5;
  background: rgba(255, 255, 255, 0.065);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 999px;
  font-size: 0;
}

.bwo-fab-menu-version::after {
  content: "v1.0.55 ver pujas";
  font-size: 10px;
}

/* Visor de pujas rivales. Vive en el mismo Shadow DOM que el resto de Biwtools. */
.bwo-bids-backdrop {
  position: fixed;
  inset: 0;
  z-index: 2147483644;
  background: rgba(5, 6, 8, .68);
  backdrop-filter: blur(5px);
  animation: bwo-bids-fade 160ms ease both;
}

.bwo-bids-panel {
  position: fixed;
  top: 64px;
  left: 50%;
  z-index: 2147483645;
  width: min(940px, calc(100vw - 28px));
  max-height: calc(100vh - 82px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform: translateX(-50%);
  color: var(--bwo-chalk);
  background: linear-gradient(145deg, rgba(39, 39, 39, .98), rgba(20, 20, 20, .99));
  border: 1px solid rgba(255, 255, 255, .11);
  border-top: 2px solid var(--bwo-accent);
  border-radius: 18px;
  box-shadow: 0 28px 80px rgba(0, 0, 0, .62), inset 0 1px 0 rgba(255, 255, 255, .05);
  animation: bwo-bids-in 220ms cubic-bezier(.22, 1, .36, 1) both;
}

.bwo-bids-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
  padding: 20px 22px 16px;
  border-bottom: 1px solid var(--bwo-line);
  background: linear-gradient(90deg, rgba(224, 20, 44, .10), transparent 48%);
}

.bwo-bids-title { margin: 0; font-size: 22px; line-height: 1.15; }
.bwo-bids-subtitle { margin: 7px 0 0; max-width: 680px; color: var(--bwo-muted); font-size: 12px; line-height: 1.5; }
.bwo-bids-close { width: 36px; height: 36px; flex: 0 0 auto; border: 1px solid var(--bwo-line); border-radius: 10px; color: var(--bwo-chalk); background: rgba(255,255,255,.045); cursor: pointer; font: 700 19px/1 var(--bwo-font-body); }
.bwo-bids-close:hover { color: #fff; border-color: var(--bwo-accent); background: rgba(224,20,44,.15); }
.bwo-bids-body { min-height: 230px; overflow: auto; padding: 16px 22px 22px; scrollbar-color: #555 #202020; }
.bwo-bids-loading, .bwo-bids-empty { display: grid; min-height: 190px; place-items: center; color: var(--bwo-muted); text-align: center; }

.bwo-bids-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; margin-bottom: 14px; }
.bwo-bids-stat { padding: 12px 14px; border: 1px solid var(--bwo-line); border-radius: 12px; background: rgba(255,255,255,.035); }
.bwo-bids-stat-label { display: block; color: var(--bwo-muted); font-size: 10px; letter-spacing: .06em; text-transform: uppercase; }
.bwo-bids-stat-value { display: block; margin-top: 4px; color: #fff; font-size: 17px; font-weight: 800; font-variant-numeric: tabular-nums; }

.bwo-bids-filters { display: grid; grid-template-columns: minmax(180px, 1fr) minmax(150px, .55fr) minmax(190px, .75fr); gap: 10px; margin-bottom: 14px; }
.bwo-bids-filter { min-width: 0; height: 40px; padding: 0 12px; color: var(--bwo-chalk); background: #222; border: 1px solid var(--bwo-line); border-radius: 10px; font: 600 12px/1 var(--bwo-font-body); outline: none; }
.bwo-bids-filter:focus { border-color: var(--bwo-accent); box-shadow: 0 0 0 3px rgba(224,20,44,.12); }

.bwo-bids-table-wrap { overflow-x: auto; border: 1px solid var(--bwo-line); border-radius: 12px; background: rgba(0,0,0,.10); }
.bwo-bids-table { width: 100%; min-width: 760px; border-collapse: collapse; font-size: 12px; }
.bwo-bids-table th { position: sticky; top: 0; z-index: 1; padding: 10px 12px; color: var(--bwo-muted); background: #202020; border-bottom: 1px solid var(--bwo-line); text-align: left; font-size: 10px; letter-spacing: .055em; text-transform: uppercase; }
.bwo-bids-table td { padding: 11px 12px; border-bottom: 1px solid rgba(255,255,255,.06); vertical-align: middle; }
.bwo-bids-table tr:last-child td { border-bottom: 0; }
.bwo-bids-table tbody tr:hover { background: rgba(255,255,255,.035); }
.bwo-bids-manager, .bwo-bids-player { max-width: 190px; overflow: hidden; color: #fff; font-weight: 700; text-overflow: ellipsis; white-space: nowrap; }
.bwo-bids-money { font-weight: 700; font-variant-numeric: tabular-nums; white-space: nowrap; }
.bwo-bids-delta { font-weight: 800; font-variant-numeric: tabular-nums; white-space: nowrap; }
.bwo-bids-positive { color: var(--bwo-green); }
.bwo-bids-negative { color: var(--bwo-coral); }
.bwo-bids-neutral { color: var(--bwo-muted); }
.bwo-bids-result { display: inline-flex; align-items: center; min-width: 70px; justify-content: center; padding: 4px 8px; border-radius: 999px; font-size: 10px; font-weight: 800; }
.bwo-bids-result-won { color: #bff4c8; background: rgba(95,203,114,.14); border: 1px solid rgba(95,203,114,.28); }
.bwo-bids-result-lost { color: #b8bcc5; background: rgba(147,144,141,.10); border: 1px solid rgba(147,144,141,.22); }
.bwo-bids-date { color: var(--bwo-muted); white-space: nowrap; }
.bwo-bids-foot { margin: 12px 2px 0; color: var(--bwo-muted); font-size: 10px; line-height: 1.45; }

@keyframes bwo-bids-fade { from { opacity: 0; } to { opacity: 1; } }
@keyframes bwo-bids-in { from { opacity: 0; transform: translate(-50%, 12px) scale(.985); } to { opacity: 1; transform: translate(-50%, 0) scale(1); } }

@media (max-width: 680px) {
  .bwo-bids-panel { top: 10px; width: calc(100vw - 16px); max-height: calc(100vh - 20px); border-radius: 14px; }
  .bwo-bids-head { padding: 16px; }
  .bwo-bids-title { font-size: 19px; }
  .bwo-bids-body { padding: 12px; }
  .bwo-bids-stats { grid-template-columns: 1fr; }
  .bwo-bids-filters { grid-template-columns: 1fr; }
}

.bwo-fab-item {
  min-height: 52px;
  border-bottom-color: var(--bwo-line-soft);
  padding: 10px 15px;
  letter-spacing: 0.005em;
  transition: color 160ms ease, background 160ms ease, padding-left 180ms var(--bwo-ease);
}

.bwo-fab-item:hover {
  color: #fff;
  background: linear-gradient(90deg, rgba(240, 45, 73, 0.14), rgba(255, 255, 255, 0.025));
  padding-left: 18px;
}

.bwo-fab-item-icon {
  color: #fff;
  background: linear-gradient(145deg, var(--bwo-surface-3), var(--bwo-bg));
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: var(--bwo-shadow-sm), inset 0 1px 0 rgba(255, 255, 255, 0.06);
  transition: transform 180ms var(--bwo-ease), border-color 180ms ease;
}

.bwo-fab-item:hover .bwo-fab-item-icon {
  transform: scale(1.08) rotate(-3deg);
  border-color: rgba(255, 73, 98, 0.42);
}

.bwo-comp-head {
  padding: 16px;
  border-bottom-color: var(--bwo-line-soft);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.025), transparent);
}

.bwo-back {
  min-height: 34px;
  padding: 6px 12px;
  color: #fff;
  background: rgba(29, 36, 48, 0.96);
  border-color: rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  box-shadow: var(--bwo-shadow-sm);
  transition: background 160ms ease, border-color 160ms ease, transform 160ms var(--bwo-ease);
}

.bwo-back:hover {
  background: var(--bwo-surface-3);
  border-color: rgba(255, 73, 98, 0.45);
  transform: translateX(-2px);
}

.bwo-comp-name {
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.015em;
}

.bwo-comp-meta,
.bwo-card-sub,
.bwo-sale-sub,
.bwo-act-card-manager,
.bwo-act-card-meta,
.bwo-inj-card-desc,
.bwo-diag-label,
.bwo-diag-note {
  line-height: 1.45;
}

.bwo-table-wrap {
  border-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--bwo-radius-md);
  background: rgba(13, 16, 22, 0.34);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.025);
}

.bwo-table {
  font-variant-numeric: tabular-nums;
}

.bwo-table thead th {
  position: sticky;
  top: 0;
  z-index: 1;
  padding-top: 11px;
  padding-bottom: 11px;
  color: #b8c0ce;
  background: rgba(29, 36, 48, 0.96);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.bwo-row {
  border-bottom-color: var(--bwo-line-soft);
  transition: background 150ms ease, box-shadow 150ms ease;
}

.bwo-row:nth-child(even) {
  background: rgba(255, 255, 255, 0.012);
}

.bwo-row:hover {
  background: linear-gradient(90deg, rgba(240, 45, 73, 0.09), rgba(255, 255, 255, 0.025));
  box-shadow: inset 3px 0 0 var(--bwo-accent);
}

.bwo-table td {
  padding-top: 11px;
  padding-bottom: 11px;
}

.bwo-name {
  color: var(--bwo-chalk);
  font-weight: 700;
}

.bwo-pcard {
  gap: 12px;
  padding-bottom: 18px;
  border-bottom-color: var(--bwo-line-soft);
}

.bwo-pcard-photo-ring {
  width: 96px;
  height: 96px;
  padding: 4px;
  background: conic-gradient(from 210deg, var(--bwo-accent), #7b2638, var(--bwo-surface-3), var(--bwo-accent));
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.42), 0 0 22px rgba(240, 45, 73, 0.12);
}

.bwo-pcard-photo {
  border: 3px solid var(--bwo-bg);
}

.bwo-pcard-name {
  font-size: 21px;
  letter-spacing: -0.025em;
}

.bwo-pcard-pos,
.bwo-card-pill,
.bwo-pcard-next,
.bwo-inj-card-prob {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.bwo-pcard-team,
.bwo-free-card-team-btn,
.bwo-inj-card-team-btn,
.bwo-act-card-team-btn {
  transition: transform 170ms var(--bwo-ease), filter 170ms ease;
}

.bwo-pcard-team:hover,
.bwo-free-card-team-btn:hover,
.bwo-inj-card-team-btn:hover,
.bwo-act-card-team-btn:hover {
  transform: scale(1.12);
  filter: brightness(1.12) drop-shadow(0 3px 6px rgba(0, 0, 0, 0.35));
}

.bwo-pcard-pip {
  height: 8px;
  background: var(--bwo-surface-3);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.34);
}

.bwo-pcard-tile,
.bwo-card,
.bwo-stat-cell,
.bwo-chip,
.bwo-lineup-team-btn,
.bwo-inj-card,
.bwo-free-card,
.bwo-act-card,
.bwo-diag-group {
  border-color: rgba(255, 255, 255, 0.09);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.008)),
    var(--bwo-surface);
  box-shadow: var(--bwo-shadow-sm), inset 0 1px 0 rgba(255, 255, 255, 0.035);
}

.bwo-card,
.bwo-pcard-tile,
.bwo-lineup-team-btn,
.bwo-inj-card,
.bwo-free-card,
.bwo-act-card,
.bwo-diag-group {
  border-radius: var(--bwo-radius-md);
}

.bwo-lineup-team-btn,
.bwo-inj-card,
.bwo-free-card,
.bwo-act-card {
  transition: transform 190ms var(--bwo-ease), border-color 180ms ease, box-shadow 180ms ease, filter 180ms ease;
}

.bwo-lineup-team-btn:hover,
.bwo-inj-card:hover,
.bwo-free-card:hover,
.bwo-act-card:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.17);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.055);
}

.bwo-pcard-tile-label,
.bwo-card-head,
.bwo-stat-cell-label,
.bwo-diag-title {
  color: #b4bdcb;
  letter-spacing: 0.055em;
}

.bwo-pcard-tile-value,
.bwo-card-value,
.bwo-stat-cell-value,
.bwo-sale-amount,
.bwo-free-card-price,
.bwo-act-card-amount,
.bwo-diag-value {
  text-shadow: 0 1px 8px rgba(255, 255, 255, 0.035);
}

.bwo-cards,
.bwo-act-grid,
.bwo-inj-teams {
  gap: 10px;
  padding: 14px;
}

.bwo-lineup-grid,
.bwo-free-grid {
  gap: 10px;
  padding: 14px;
}

.bwo-formation-btn,
.bwo-pos-tab {
  min-height: 34px;
  border-color: rgba(255, 255, 255, 0.1);
  transition: background 150ms ease, color 150ms ease, border-color 150ms ease, transform 160ms var(--bwo-ease), box-shadow 160ms ease;
}

.bwo-formation-btn:hover,
.bwo-pos-tab:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 255, 255, 0.18);
}

.bwo-formation-btn.active,
.bwo-pos-tab.active {
  box-shadow: 0 5px 16px rgba(240, 45, 73, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.16);
}

.bwo-formation-btn.active {
  box-shadow: 0 5px 16px rgba(101, 212, 122, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.16);
}

.bwo-pos-tabs {
  gap: 8px;
  padding: 12px 14px;
  border-bottom-color: var(--bwo-line-soft);
  background: rgba(255, 255, 255, 0.012);
}

.bwo-sale-row {
  padding: 10px 2px;
  border-bottom-color: var(--bwo-line-soft);
  transition: background 150ms ease;
}

.bwo-sale-row:hover {
  background: rgba(255, 255, 255, 0.025);
}

.bwo-sale-photo,
.bwo-free-card-photo,
.bwo-inj-card-photo,
.bwo-act-card-photo {
  border: 2px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 7px 18px rgba(0, 0, 0, 0.3);
}

.bwo-val-bar {
  height: 7px;
  background: var(--bwo-surface-3);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.38);
}

.bwo-val-fill {
  box-shadow: 0 0 10px currentColor;
}

.bwo-chip {
  min-height: 42px;
  transition: border-color 150ms ease, background 150ms ease, transform 160ms var(--bwo-ease);
}

.bwo-chip:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 255, 255, 0.16);
  background: var(--bwo-surface-2);
}

.bwo-sparkline {
  height: 38px;
  filter: drop-shadow(0 3px 5px rgba(0, 0, 0, 0.25));
}

.bwo-pitch {
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 14px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.42), inset 0 0 30px rgba(0, 0, 0, 0.12);
}

.bwo-pitch-name {
  padding: 2px 5px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.36);
  text-shadow: 0 1px 3px #000;
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}

.bwo-pitch-prob,
.bwo-alt-prob {
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.58), inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.bwo-inj-team-head {
  padding: 0 2px 9px;
  border-bottom-color: var(--bwo-line-soft);
  font-size: 14px;
}

.bwo-inj-count {
  background: var(--bwo-surface-2);
  border-color: rgba(255, 255, 255, 0.1);
}

.bwo-free-card-recommended,
.bwo-free-card-favorite,
.bwo-grav-0,
.bwo-grav-1,
.bwo-grav-2 {
  background-blend-mode: screen, normal;
}

.bwo-free-card-recommended {
  background:
    linear-gradient(rgba(101, 212, 122, 0.15), rgba(101, 212, 122, 0.15)),
    linear-gradient(145deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.008)),
    var(--bwo-surface);
  box-shadow: var(--bwo-shadow-sm), inset 0 0 0 2px rgba(101, 212, 122, 0.58);
}

.bwo-free-card-favorite {
  background:
    linear-gradient(rgba(248, 201, 79, 0.15), rgba(248, 201, 79, 0.15)),
    linear-gradient(145deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.008)),
    var(--bwo-surface);
  box-shadow: var(--bwo-shadow-sm), inset 0 0 0 2px rgba(248, 201, 79, 0.58);
}

.bwo-grav-0 {
  background:
    linear-gradient(rgba(255, 92, 72, 0.14), rgba(255, 92, 72, 0.14)),
    linear-gradient(145deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.008)),
    var(--bwo-surface);
  box-shadow: var(--bwo-shadow-sm), inset 0 0 0 2px rgba(255, 92, 72, 0.52);
}

.bwo-grav-1 {
  background:
    linear-gradient(rgba(248, 201, 79, 0.14), rgba(248, 201, 79, 0.14)),
    linear-gradient(145deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.008)),
    var(--bwo-surface);
  box-shadow: var(--bwo-shadow-sm), inset 0 0 0 2px rgba(248, 201, 79, 0.52);
}

.bwo-grav-2 {
  background:
    linear-gradient(rgba(101, 212, 122, 0.14), rgba(101, 212, 122, 0.14)),
    linear-gradient(145deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.008)),
    var(--bwo-surface);
  box-shadow: var(--bwo-shadow-sm), inset 0 0 0 2px rgba(101, 212, 122, 0.52);
}

.bwo-free-card-rec-badge,
.bwo-free-card-fav-badge {
  display: grid;
  place-items: center;
  width: 23px;
  height: 23px;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: var(--bwo-shadow-sm);
}

.bwo-diag {
  gap: 12px;
  padding: 14px;
}

.bwo-diag-group {
  padding: 12px 14px;
}

.bwo-diag-row {
  padding: 5px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.045);
}

.bwo-diag-row:last-child {
  border-bottom: 0;
}

@keyframes bwo-panel-in {
  from { opacity: 0; transform: translateY(-10px) scale(0.985); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes bwo-menu-in {
  from { opacity: 0; transform: translateY(-8px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes bwo-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 700px) {
  .bwo-fab-wrap {
    top: max(8px, env(safe-area-inset-top));
    right: max(8px, env(safe-area-inset-right));
  }

  .bwo-fab {
    width: 46px;
    height: 46px;
  }

  .bwo-fab-menu {
    width: min(280px, calc(100vw - 16px));
    max-height: calc(100dvh - 70px);
    overflow-y: auto;
  }

  .bwo-panel {
    top: calc(max(8px, env(safe-area-inset-top)) + 54px);
    right: max(8px, env(safe-area-inset-right));
    bottom: max(8px, env(safe-area-inset-bottom));
    left: max(8px, env(safe-area-inset-left));
    width: auto;
    max-height: none;
    border-radius: 16px;
  }

  .bwo-cards,
  .bwo-act-grid,
  .bwo-inj-teams,
  .bwo-lineup-grid,
  .bwo-free-grid {
    padding: 12px;
  }

  .bwo-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .bwo-card-wide {
    grid-column: 1 / -1;
  }

  .bwo-pcard-photo-ring {
    width: 88px;
    height: 88px;
  }

  .bwo-table-wrap {
    margin: 10px;
  }

  .bwo-table thead th,
  .bwo-table td {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (max-width: 390px) {
  .bwo-panel {
    border-radius: 14px;
  }

  .bwo-comp-head,
  .bwo-cards,
  .bwo-act-grid,
  .bwo-inj-teams,
  .bwo-lineup-grid,
  .bwo-free-grid,
  .bwo-diag {
    padding-left: 10px;
    padding-right: 10px;
  }

  .bwo-pcard-tiles {
    gap: 5px;
  }

  .bwo-pcard-tile {
    padding-left: 3px;
    padding-right: 3px;
  }

  .bwo-pcard-tile-value,
  .bwo-card-compact .bwo-card-value {
    font-size: 12px;
  }

  .bwo-lineup-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (hover: none) {
  .bwo-fab:hover,
  .bwo-lineup-team-btn:hover,
  .bwo-inj-card:hover,
  .bwo-free-card:hover,
  .bwo-act-card:hover,
  .bwo-chip:hover,
  .bwo-formation-btn:hover,
  .bwo-pos-tab:hover {
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .bwo-panel,
  .bwo-fab-menu,
  .bwo-fab-backdrop {
    animation: none;
  }

  *, *::before, *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}

@media (prefers-contrast: more) {
  :host {
    --bwo-line: #566176;
    --bwo-muted: #c7ced9;
  }

  .bwo-panel,
  .bwo-card,
  .bwo-pcard-tile,
  .bwo-lineup-team-btn,
  .bwo-inj-card,
  .bwo-free-card,
  .bwo-act-card,
  .bwo-diag-group {
    border-color: var(--bwo-line);
  }
}
`;var A=D(re(),1),y1="biwtools-root";function h1(){let[e,t]=(0,Br.useState)(null),[n,r]=(0,Br.useState)(null),[o,a]=(0,Br.useState)(!1);(0,Br.useEffect)(()=>{function u(c){t({type:"competition",detail:c.detail})}return window.addEventListener(En,u),pn().then(r).catch(()=>{}),()=>window.removeEventListener(En,u)},[]);function i(u){t(c=>c?.type===u?null:{type:u}),a(!1)}function l(u){t(c=>({type:"lineups",teamId:u,from:c}))}function s(){e?(t(null),a(!0)):a(u=>!u)}return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)("div",{className:"bwo-fab-wrap",children:[(0,A.jsx)("button",{className:"bwo-fab",onClick:s,"aria-label":"Men\xFA de Biwtools",children:o?(0,A.jsx)("span",{className:"bwo-fab-x",children:"\u2715"}):(0,A.jsx)("img",{className:"bwo-fab-icon",src:`${cn}/assets/logo-icon.png`,alt:"Biwtools"})}),o&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("div",{className:"bwo-fab-backdrop",onClick:()=>a(!1)}),(0,A.jsxs)("div",{className:"bwo-fab-menu",children:[(0,A.jsxs)("div",{className:"bwo-fab-menu-head",children:[(0,A.jsx)("img",{className:"bwo-fab-menu-wordmark",src:`${cn}/assets/logo-wordmark.png`,alt:"Biwtools"}),(0,A.jsxs)("span",{className:"bwo-fab-menu-version",children:["v","1.0.50"]})]}),(0,A.jsxs)("button",{className:"bwo-fab-item",onClick:()=>i("activity"),children:[(0,A.jsx)("span",{className:"bwo-fab-item-icon",children:"\u{1F4CB}"})," Actividad"]}),(0,A.jsxs)("button",{className:"bwo-fab-item",onClick:()=>i("lineups"),children:[(0,A.jsx)("span",{className:"bwo-fab-item-icon",children:"\u26BD"})," Onces"]}),(0,A.jsxs)("button",{className:"bwo-fab-item",onClick:()=>i("injuries"),children:[(0,A.jsx)("span",{className:"bwo-fab-item-icon",children:"\u{1F691}"})," Lesionados"]}),(0,A.jsxs)("button",{className:"bwo-fab-item",onClick:()=>i("recommendations"),children:[(0,A.jsx)("span",{className:"bwo-fab-item-icon",children:"\u{1F3AF}"})," Recomendaciones"]}),(0,A.jsxs)("button",{className:"bwo-fab-item",onClick:()=>i("freeAgents"),children:[(0,A.jsx)("span",{className:"bwo-fab-item-icon",children:"\u{1F193}"})," Jugadores libres"]}),(0,A.jsxs)("button",{className:"bwo-fab-item",onClick:()=>i("upgrades"),children:[(0,A.jsx)("span",{className:"bwo-fab-item-icon",children:"\u{1F500}"})," Comparador"]}),(0,A.jsxs)("button",{className:"bwo-fab-item",onClick:()=>i("finances"),children:[(0,A.jsx)("span",{className:"bwo-fab-item-icon",children:"\u{1F4B0}"})," Finanzas"]}),(0,A.jsxs)("button",{className:"bwo-fab-item",onClick:()=>i("diagnostics"),children:[(0,A.jsx)("span",{className:"bwo-fab-item-icon",children:"\u{1FA7A}"})," Diagn\xF3stico"]})]})]})]}),e&&(0,A.jsx)("div",{className:"bwo-panel",children:e.type==="competition"?(0,A.jsx)(Du,{playerId:e.detail.playerId,price:e.detail.price,name:e.detail.name,position:e.detail.position,owned:e.detail.owned??!1,selfId:n,onClose:()=>t(null),onOpenTeamLineup:l}):e.type==="lineups"?(0,A.jsx)(zu,{onClose:()=>t(null),initialTeamId:e.teamId??null,onBackToSource:e.from?()=>t(e.from??null):void 0}):e.type==="injuries"?(0,A.jsx)(qu,{onClose:()=>t(null),onOpenTeamLineup:l}):e.type==="recommendations"?(0,A.jsx)(Uu,{onClose:()=>t(null),selfId:n}):e.type==="freeAgents"?(0,A.jsx)(Wu,{onClose:()=>t(null),selfId:n,onOpenTeamLineup:l}):e.type==="upgrades"?(0,A.jsx)(Ku,{onClose:()=>t(null)}):e.type==="finances"?(0,A.jsx)(Gu,{onClose:()=>t(null),selfId:n}):e.type==="diagnostics"?(0,A.jsx)(tc,{onClose:()=>t(null),selfId:n}):(0,A.jsx)($u,{onClose:()=>t(null),onOpenTeamLineup:l})})]})}/* Corrección de consistencia de saldos: ancla fija por temporada + ajuste exacto por usuario. */
/* Visor de pujas: usa exclusivamente pujas que Biwenger ya hizo públicas al resolver el mercado. */
var bwoBidsEscHandler=null;
function bwoBidsNode(e,t,n){let r=document.createElement(e);return t&&(r.className=t),n!=null&&(r.textContent=String(n)),r}
function bwoBidsMoney(e){let t=Number(e);return Number.isFinite(t)?`${Math.round(t).toLocaleString("es-ES")} €`:"—"}
function bwoBidsDate(e){let t=new Date(e);return Number.isNaN(t.getTime())?"—":new Intl.DateTimeFormat("es-ES",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(t)}
function bwoCloseBidsPanel(){zv?.querySelector(".bwo-bids-backdrop")?.remove(),zv?.querySelector(".bwo-bids-panel")?.remove(),document.querySelectorAll("[data-bwo-bids-nav]").forEach(e=>{e.classList.remove("active","is-active"),e.removeAttribute("aria-current"),e.setAttribute("aria-expanded","false")}),bwoBidsEscHandler&&(document.removeEventListener("keydown",bwoBidsEscHandler),bwoBidsEscHandler=null)}
function bwoCatalogPlayer(e,t){return e.get(t)??e.get(String(t))??e.get(Number(t))??null}
function bwoManagerName(e,t){let n=e?.[String(t)]??e?.[t];return n?.name??`Manager ${t}`}
function bwoBidRowData(e,t,n){let r=bwoCatalogPlayer(t,e.player_ref_id),o=Number(e.amount??0),a=Number(e.market_price??r?.price??0),i=o-a,l=a>0?i/a*100:null;return{raw:e,manager:bwoManagerName(n,e.manager_id),managerId:String(e.manager_id),player:r?.name??`Jugador ${e.player_ref_id}`,amount:o,market:a,delta:i,pct:l,won:e.won===!0,date:e.occurred_at??"",timestamp:new Date(e.occurred_at??0).getTime()||0}}
function bwoSetBidsNavActive(e){document.querySelectorAll("[data-bwo-bids-nav]").forEach(t=>{t.classList.toggle("active",e),t.classList.toggle("is-active",e),t.setAttribute("aria-expanded",String(e)),e?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}
async function bwoOpenBidsPanel(){if(zv?.querySelector(".bwo-bids-panel")){bwoCloseBidsPanel();return}let e=bwoBidsNode("div","bwo-bids-backdrop"),t=bwoBidsNode("section","bwo-bids-panel");t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-labelledby","bwo-bids-title");let n=bwoBidsNode("header","bwo-bids-head"),r=bwoBidsNode("div"),o=bwoBidsNode("h2","bwo-bids-title","Pujas de rivales");o.id="bwo-bids-title";let a=bwoBidsNode("p","bwo-bids-subtitle","Histórico de pujas reveladas cuando se resolvió el mercado. Biwenger mantiene privadas las pujas que todavía están activas.");r.append(o,a);let i=bwoBidsNode("button","bwo-bids-close","×");i.type="button",i.title="Cerrar",i.setAttribute("aria-label","Cerrar pujas rivales"),i.addEventListener("click",bwoCloseBidsPanel),n.append(r,i);let l=bwoBidsNode("div","bwo-bids-body"),s=bwoBidsNode("div","bwo-bids-loading","Actualizando y preparando las pujas…");l.appendChild(s),t.append(n,l),e.addEventListener("click",bwoCloseBidsPanel),zv.append(e,t),bwoSetBidsNavActive(!0),bwoBidsEscHandler=u=>{u.key==="Escape"&&bwoCloseBidsPanel()},document.addEventListener("keydown",bwoBidsEscHandler);try{await Vg().catch(()=>{});let[u,c,f,g]=await Promise.all([jf(),H(),z(),pn().catch(()=>null)]),b=(u??[]).filter(m=>g==null||String(m.manager_id)!==String(g)).map(m=>bwoBidRowData(m,c,f.state?.players??{})).sort((m,d)=>d.timestamp-m.timestamp);if(!t.isConnected)return;l.replaceChildren();if(b.length===0){let m=bwoBidsNode("div","bwo-bids-empty");m.append(bwoBidsNode("span",null,"Aún no hay pujas rivales reveladas en esta temporada. Se irán incorporando al resolverse nuevos mercados.")),l.appendChild(m);return}let p=bwoBidsNode("div","bwo-bids-stats"),y=bwoBidsNode("div","bwo-bids-filters"),w=bwoBidsNode("select","bwo-bids-filter"),m=bwoBidsNode("option",null,"Todos los rivales");m.value="",w.appendChild(m);let d=[...new Map(b.map(E=>[E.managerId,E.manager])).entries()].sort((E,P)=>E[1].localeCompare(P[1],"es"));for(let[E,P]of d){let T=bwoBidsNode("option",null,P);T.value=E,w.appendChild(T)}w.setAttribute("aria-label","Filtrar por rival");let v=bwoBidsNode("select","bwo-bids-filter");v.setAttribute("aria-label","Filtrar por resultado");for(let[E,P]of[["","Todos los resultados"],["won","Pujas ganadoras"],["lost","Pujas no ganadoras"]]){let T=bwoBidsNode("option",null,P);T.value=E,v.appendChild(T)}let S=bwoBidsNode("input","bwo-bids-filter");S.type="search",S.placeholder="Buscar jugador o rival…",S.setAttribute("aria-label","Buscar jugador o rival"),y.append(w,v,S);let x=bwoBidsNode("div","bwo-bids-table-wrap"),C=bwoBidsNode("table","bwo-bids-table"),N=bwoBidsNode("thead"),_=bwoBidsNode("tr");for(let E of["Rival","Jugador","Puja","Valor","Diferencia","Resultado","Fecha"])_.appendChild(bwoBidsNode("th",null,E));N.appendChild(_);let L=bwoBidsNode("tbody");C.append(N,L),x.appendChild(C);let I=bwoBidsNode("p","bwo-bids-foot","Los importes proceden del tablón público de la liga. “No ganó” indica que el rival pujó, pero otro usuario presentó una oferta superior.");l.append(p,y,x,I);function M(E,P){let T=bwoBidsNode("article","bwo-bids-stat");T.append(bwoBidsNode("span","bwo-bids-stat-label",E),bwoBidsNode("strong","bwo-bids-stat-value",P)),p.appendChild(T)}function B(){let E=w.value,P=v.value,T=S.value.trim().toLocaleLowerCase("es"),O=b.filter(k=>(!E||k.managerId===E)&&(!P||P==="won"&&k.won||P==="lost"&&!k.won)&&(!T||`${k.manager} ${k.player}`.toLocaleLowerCase("es").includes(T)));p.replaceChildren();let R=new Set(O.map(k=>k.managerId)).size,F=O.length?O.reduce((k,G)=>k+G.amount,0)/O.length:0,U=O.filter(k=>k.won).length;M("Pujas visibles",O.length.toLocaleString("es-ES")),M("Rivales",R.toLocaleString("es-ES")),M("Puja media",bwoBidsMoney(F));L.replaceChildren();for(let k of O.slice(0,300)){let G=bwoBidsNode("tr"),Q=bwoBidsNode("td","bwo-bids-manager",k.manager),Y=bwoBidsNode("td","bwo-bids-player",k.player),J=bwoBidsNode("td","bwo-bids-money",bwoBidsMoney(k.amount)),ee=bwoBidsNode("td","bwo-bids-money",k.market>0?bwoBidsMoney(k.market):"—"),te=k.market>0?`${k.delta>=0?"+":"−"}${bwoBidsMoney(Math.abs(k.delta))} · ${k.pct>=0?"+":""}${k.pct.toFixed(1)}%`:"—",ne=bwoBidsNode("td",`bwo-bids-delta ${k.market<=0?"bwo-bids-neutral":k.delta>=0?"bwo-bids-positive":"bwo-bids-negative"}`,te),re=bwoBidsNode("td"),oe=bwoBidsNode("span",`bwo-bids-result ${k.won?"bwo-bids-result-won":"bwo-bids-result-lost"}`,k.won?"Ganó":"No ganó"),ae=bwoBidsNode("td","bwo-bids-date",bwoBidsDate(k.date));re.appendChild(oe),G.append(Q,Y,J,ee,ne,re,ae),L.appendChild(G)}if(O.length===0){let k=bwoBidsNode("tr"),G=bwoBidsNode("td","bwo-bids-empty","No hay pujas que coincidan con los filtros.");G.colSpan=7,k.appendChild(G),L.appendChild(k)}I.textContent=`Mostrando ${Math.min(O.length,300).toLocaleString("es-ES")} de ${O.length.toLocaleString("es-ES")} pujas filtradas · ${U.toLocaleString("es-ES")} ganadoras. Datos del tablón público de la liga.`}w.addEventListener("change",B),v.addEventListener("change",B),S.addEventListener("input",B),B(),i.focus()}catch(u){if(!t.isConnected)return;l.replaceChildren();let c=bwoBidsNode("div","bwo-bids-empty","No se pudieron cargar las pujas ahora mismo. Abre de nuevo el panel después de que termine la sincronización.");l.appendChild(c),console.warn("[biwtools] Error al abrir las pujas rivales:",u)}}
function bwoNavText(e){return(e.textContent??"").replace(/\d+/g,"").replace(/\s+/g," ").trim().toLocaleLowerCase("es")}
function bwoNavUnit(e){let t=e;for(;t.parentElement&&t.parentElement!==document.body;){let n=t.parentElement,r=[...n.children],o=r.filter(a=>/^(inicio|liga|equipo|mercado|jornada|jugadores)$/.test(bwoNavText(a))).length;if(o>=3)return t;t=n}return e.closest("a, button, li, [role='menuitem']")??e.parentElement}
function bwoPrepareBidsNavItem(e){let t=e.cloneNode(!0),n=t.querySelector("a");if(!n)return null;t.classList.remove("active","is-active","selected","current"),t.setAttribute("aria-selected","false"),t.dataset.bwoBidsNav="1",t.classList.add("bwo-nav-bids"),n.dataset.bwoBidsNav="1",n.classList.add("bwo-nav-bids","bwo-nav-bids-trigger"),n.removeAttribute("aria-current"),n.setAttribute("href","#bwo-pujas"),n.setAttribute("title","Ver las pujas reveladas de tus rivales"),n.setAttribute("aria-label","Ver pujas de rivales"),n.setAttribute("aria-haspopup","dialog"),n.setAttribute("aria-expanded","false");let r=n.querySelector("i.icon")?.cloneNode(!1)??bwoBidsNode("i");r.className="icon icon-transfer bwo-nav-bids-native-icon",r.setAttribute("aria-hidden","true"),n.replaceChildren(r,document.createTextNode(" Ver pujas "));let o=a=>{a.preventDefault(),a.stopImmediatePropagation(),bwoOpenBidsPanel()};return n.addEventListener("click",o),n.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&o(a)}),t}
function bwoEnsureBidsNav(){let e=[...document.querySelectorAll("app-nav linear-tabs ul[role='navigation']")],t=!1;for(let n of e){if(n.querySelector(":scope > li[data-bwo-bids-nav='1']")){t=!0;continue}let r=n.querySelector(":scope > li > a[href='/players']")?.closest("li"),o=r?bwoPrepareBidsNavItem(r):null;o&&(r.insertAdjacentElement("afterend",o),t=!0)}if(t)return;let n=[],r=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);for(let o;o=r.nextNode();)if((o.textContent??"").replace(/\s+/g," ").trim().toLocaleLowerCase("es")==="jugadores"&&o.parentElement)n.push(o.parentElement);let o=n.find(a=>{let i=a.getBoundingClientRect();return a.getClientRects().length>0&&i.top>=0&&i.top<120})??n[0];if(!o)return;let a=bwoNavUnit(o);if(!a||a===document.body||a.parentElement?.querySelector(":scope > [data-bwo-bids-nav='1']"))return;let i=bwoPrepareBidsNavItem(a);i&&a.insertAdjacentElement("afterend",i)}
function bwoEnsureBidsFabItem(){let e=zv?.querySelector(".bwo-fab-menu");if(!e||e.querySelector("[data-bwo-bids-fab='1']"))return;let t=e.querySelector(".bwo-fab-item"),n=bwoBidsNode("button","bwo-fab-item");n.type="button",n.dataset.bwoBidsFab="1",n.setAttribute("aria-label","Ver pujas de rivales");let r=bwoBidsNode("span","bwo-fab-item-icon","👁️");r.setAttribute("aria-hidden","true"),n.append(r,document.createTextNode(" Ver pujas")),n.addEventListener("click",()=>{zv.querySelector(".bwo-fab")?.click(),setTimeout(bwoOpenBidsPanel,0)}),t?t.insertAdjacentElement("afterend",n):e.appendChild(n)}
globalThis.__BIWTOOLS_BALANCE_FIX__="v1.0.55-bids-menu";
var bwoOriginalZw=zw;
Ri=async function(){let{state:e}=await z(),{date:t,startingBalance:n}=await qo(),r=e.balanceCorrections??{};return Object.values(e.players).filter(o=>!e.inactive[o.id]).map(o=>{let a=e.movements.filter(i=>i.player_id===o.id&&i.occurred_at>t).reduce((i,l)=>i+l.amount,0),s=Number(r[o.id]??0),u=n+a+s,c=e.teamValue[o.id];return{id:o.id,name:o.name,icon:o.icon,team_value:c?.teamValue??null,squad_size:c?.squadSize??null,team_value_change_today:c?.changeToday??null,balance:u,balance_exact:Object.prototype.hasOwnProperty.call(r,o.id)}}).sort((o,a)=>a.balance-o.balance)};
zw=async function(){let e=await z(),t=e.state.syncState,n=t.seasonAnchorDate??null,r=t.seasonStartingBalance??null,o;try{o=await bwoOriginalZw()}catch(a){if(n!=null&&r!=null){t.seasonAnchorDate=n,t.seasonStartingBalance=r,await Cu()}throw a}let i=await z(),l=i.state.syncState,s=await Li(),u=(await qo()).date,c=await rg(s.id,u);i.state.balanceCorrections??={};if(n===u&&r!=null)l.seasonAnchorDate=n,l.seasonStartingBalance=r,l.seasonStartingBalanceLockedV3="1";else i.state.balanceCorrections={},l.seasonStartingBalanceLockedV3="1";let f=Number(l.seasonStartingBalance??0);return i.state.balanceCorrections[String(s.id)]=Math.round(s.balance-(f+c)),await Cu(),o};
/* La tabla se reconcilia por ID; el nombre queda solo como respaldo del render original. */
var bwoOriginalGv=gv;
async function bwoReconcileLeagueRowsById(){let e=I0();if(!e)return;let t=e.closest("table");if(!t||!await Ai())return;let n=new Map((await hn()).map(o=>[String(o.id),o]));for(let o of t.querySelectorAll("tr")){if(o===e)continue;let a=o.querySelector("a[href*='/user/']"),i=U0(a?.getAttribute("href")??null),l=i?n.get(i):null,s=[...o.querySelectorAll(`.${Go}`)];if(!l||s.length<3)continue;s[0].textContent=Ki(l.balance),Qi(s[0],{color:l.balance>=0?"#5fcb72":"#e2664b"}),s[1].textContent=Ki(l.maxBid),Qi(s[1]);let u=s[2].firstElementChild??s[2];u.textContent=Ki(l.netWorth)}}
gv=async function(){await bwoOriginalGv(),await bwoReconcileLeagueRowsById()};
var bwoBalanceCycleRunning=!1,bwoSessionKey=null;
function bwoReadSessionKey(){try{return ke()+"|"+xu()}catch{return null}}
async function bwoRefreshBalances(){if(bwoBalanceCycleRunning)return;bwoBalanceCycleRunning=!0;try{let e=bwoReadSessionKey();e&&e!==bwoSessionKey&&(bwoSessionKey=e,Ju=0,Ti=null,Wi=null,bwoCloseBidsPanel()),Av(),Rv(),bwoEnsureBidsNav(),bwoEnsureBidsFabItem(),await Vg();let t=location.pathname,n=[];t.includes("/market")?(dv(),wv()):t.includes("/league")&&n.push(gv(),yv()),ov(),n.push(Cv(),_v(),kv(),Tv()),await Promise.allSettled(n)}catch(e){console.warn("[biwtools] No se pudo completar el refresco coordinado:",e)}finally{bwoBalanceCycleRunning=!1}}
var Or=document.createElement("div");Or.id=y1;var zv=Or.attachShadow({mode:"open"}),Fv=document.createElement("style");Fv.textContent=Ov;zv.appendChild(Fv);var qv=document.createElement("div");zv.appendChild(qv);document.body.appendChild(Or);var b1=(0,Dv.createRoot)(qv);b1.render((0,A.jsx)(h1,{}));new MutationObserver(bwoEnsureBidsFabItem).observe(zv,{childList:!0,subtree:!0});Iv();Ef();bwoEnsureBidsNav();bwoEnsureBidsFabItem();Bv();bwoRefreshBalances();setInterval(bwoRefreshBalances,1500);setInterval(rv,250);window.addEventListener("scroll",ic,{capture:!0,passive:!0});setInterval(ic,250);Or.style.pointerEvents="auto";function Hv(){bwoEnsureBidsNav();let e=document.querySelectorAll(".cdk-overlay-pane"),t=e.length>0?e[e.length-1]:null,n=document.querySelector(".cdk-overlay-container"),r=t??n??document.body;r.lastElementChild!==Or&&r.appendChild(Or)}new MutationObserver(Hv).observe(document.body,{childList:!0,subtree:!0});setInterval(Hv,1e3);})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
