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

    li.bwo-nav-bids.active {
      box-shadow: inset 0 -4px #e0142c;
    }

    li.bwo-nav-bids.active > a {
      color: #fff !important;
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

    /* Página integrada de Herramientas, al mismo nivel visual que Liga/Equipo/Jugadores. */
    [data-bwo-tools-hidden="1"] {
      display: none !important;
    }

    .bwo-tools-page-host {
      box-sizing: border-box;
      width: min(1400px, 100%);
      min-height: calc(100vh - 92px);
      margin: 0 auto;
      padding: 24px 18px 42px;
      color: #f0f0f0;
      font-family: "Open Sans", system-ui, -apple-system, sans-serif;
      animation: bwo-tools-page-in 180ms ease both;
    }

    .bwo-tools-page-head {
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 24px;
      margin-bottom: 16px;
      padding: 24px 26px;
      border: 1px solid rgba(255,255,255,.10);
      border-radius: 16px;
      background: linear-gradient(125deg, #242428 0%, #17171a 62%, #260b11 100%);
      box-shadow: 0 16px 38px rgba(0,0,0,.28), inset 0 1px rgba(255,255,255,.04);
    }

    .bwo-tools-page-head::after {
      content: "";
      position: absolute;
      right: -52px;
      bottom: -92px;
      width: 260px;
      height: 260px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(224,20,44,.22), transparent 68%);
      pointer-events: none;
    }

    .bwo-tools-page-kicker {
      display: block;
      margin-bottom: 7px;
      color: #e0142c;
      font-size: 10px;
      font-weight: 800;
      letter-spacing: .13em;
      text-transform: uppercase;
    }

    .bwo-tools-page-title {
      margin: 0;
      color: #fff;
      font-size: clamp(25px, 3vw, 36px);
      line-height: 1.05;
      letter-spacing: -.025em;
    }

    .bwo-tools-page-subtitle {
      max-width: 720px;
      margin: 9px 0 0;
      color: #aaa7a5;
      font-size: 13px;
      line-height: 1.55;
    }

    .bwo-tools-page-count {
      position: relative;
      z-index: 1;
      flex: 0 0 auto;
      padding: 8px 12px;
      border: 1px solid rgba(224,20,44,.30);
      border-radius: 999px;
      color: #fff;
      background: rgba(224,20,44,.12);
      font-size: 11px;
      font-weight: 800;
      white-space: nowrap;
    }

    .bwo-tools-overview {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 10px;
      margin-bottom: 16px;
    }

    .bwo-tools-overview-card {
      padding: 13px 15px;
      border: 1px solid rgba(255,255,255,.09);
      border-radius: 12px;
      background: linear-gradient(145deg, #1d1f24, #151619);
      box-shadow: inset 0 1px rgba(255,255,255,.035);
    }

    .bwo-tools-overview-label {
      display: block;
      color: #8f8c89;
      font-size: 9px;
      font-weight: 800;
      letter-spacing: .07em;
      text-transform: uppercase;
    }

    .bwo-tools-overview-value {
      display: block;
      margin-top: 4px;
      color: #fff;
      font-size: 18px;
      font-weight: 800;
      font-variant-numeric: tabular-nums;
    }

    .bwo-tools-table-wrap {
      overflow: hidden;
      border: 1px solid rgba(255,255,255,.10);
      border-radius: 16px;
      background: #111214;
      box-shadow: 0 16px 42px rgba(0,0,0,.26);
    }

    .bwo-tools-table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
    }

    .bwo-tools-table th {
      padding: 13px 16px;
      border-bottom: 1px solid rgba(255,255,255,.10);
      color: #8f8c89;
      background: #1d1e21;
      font-size: 10px;
      font-weight: 800;
      letter-spacing: .07em;
      text-align: left;
      text-transform: uppercase;
    }

    .bwo-tools-table th:first-child { width: 54px; }
    .bwo-tools-table th:nth-child(2) { width: 190px; }
    .bwo-tools-table th:nth-child(4) { width: 104px; }
    .bwo-tools-table th:last-child { width: 102px; text-align: right; }

    .bwo-tools-table td {
      box-sizing: border-box;
      padding: 13px 16px;
      border-bottom: 1px solid rgba(255,255,255,.07);
      color: #c5c3c1;
      font-size: 12px;
      line-height: 1.45;
      vertical-align: middle;
    }

    .bwo-tools-table tbody tr:last-child td { border-bottom: 0; }
    .bwo-tools-table tbody tr { transition: background 150ms ease, box-shadow 150ms ease; }
    .bwo-tools-table tbody tr:hover { background: rgba(255,255,255,.038); box-shadow: inset 3px 0 #e0142c; }

    .bwo-tools-page-icon {
      display: grid;
      width: 34px;
      height: 34px;
      place-items: center;
      border: 1px solid #34363c;
      border-radius: 50%;
      background: linear-gradient(145deg, #252831, #15171b);
      box-shadow: inset 0 1px rgba(255,255,255,.06);
      font-size: 15px;
    }

    .bwo-tools-table th:nth-child(2),
    .bwo-tools-table th:nth-child(3),
    .bwo-tools-table td:nth-child(2),
    .bwo-tools-table td:nth-child(3) {
      text-align: left !important;
    }

    .bwo-tools-page-name { color: #fff !important; font-size: 13px !important; font-weight: 800; text-align: left !important; }
    .bwo-tools-page-status { color: #6ee086 !important; font-weight: 800; white-space: nowrap; }

    .bwo-tools-page-open {
      min-width: 76px;
      padding: 7px 13px;
      border: 1px solid rgba(224,20,44,.42);
      border-radius: 9px;
      color: #fff;
      background: rgba(224,20,44,.14);
      cursor: pointer;
      font: 800 11px/1.2 "Open Sans", system-ui, sans-serif;
      transition: transform 140ms ease, background 140ms ease, border-color 140ms ease;
    }

    .bwo-tools-page-open:hover {
      transform: translateY(-1px);
      border-color: #e0142c;
      background: #c81228;
    }

    .bwo-tools-page-action { text-align: right; }

    /* Catálogo de Herramientas v1.4: tarjetas informativas. */
    .bwo-tools-page-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 13px; }
    .bwo-tools-page-chips span { padding: 5px 8px; border: 1px solid rgba(255,255,255,.09); border-radius: 999px; color: #b8bec8; background: rgba(255,255,255,.035); font-size: 9px; font-weight: 700; }
    .bwo-tools-overview-card { display: flex; align-items: center; gap: 12px; min-width: 0; padding: 14px 15px; }
    .bwo-tools-overview-icon { display: grid; place-items: center; flex: 0 0 36px; width: 36px; height: 36px; border: 1px solid rgba(255,255,255,.09); border-radius: 10px; background: rgba(255,255,255,.035); font-size: 16px; }
    .bwo-tools-overview-card > div { min-width: 0; }
    .bwo-tools-overview-value { margin-top: 3px; font-size: 20px; line-height: 1.05; }
    .bwo-tools-overview-note { display: block; overflow: hidden; margin-top: 4px; color: #858e9c; font-size: 8px; line-height: 1.3; text-overflow: ellipsis; white-space: nowrap; }
    .bwo-tools-overview-updated { grid-column: 1 / -1; justify-self: end; margin-top: -3px; color: #777f8b; font-size: 8px; }
    .bwo-tools-card-wrap { overflow: visible; padding: 0; border: 0; background: transparent; box-shadow: none; }
    .bwo-tools-catalog-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; margin-bottom: 12px; padding: 2px 2px 0; }
    .bwo-tools-catalog-head h2 { margin: 0; color: #fff; font-size: 18px; line-height: 1.25; }
    .bwo-tools-catalog-head p { margin: 4px 0 0; color: #9199a5; font-size: 10px; line-height: 1.45; }
    .bwo-tools-search { box-sizing: border-box; width: min(340px, 100%); padding: 10px 12px; border: 1px solid rgba(255,255,255,.12); border-radius: 10px; outline: 0; color: #fff; background: #181a1f; font: 600 11px/1.3 "Open Sans",system-ui,sans-serif; transition: border-color 140ms ease, box-shadow 140ms ease; }
    .bwo-tools-search::placeholder { color: #747c88; }
    .bwo-tools-search:focus { border-color: rgba(224,20,44,.65); box-shadow: 0 0 0 3px rgba(224,20,44,.10); }
    .bwo-tools-card-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 12px; }
    .bwo-tool-card { --bwo-tool-accent:#7b8798; position: relative; overflow: hidden; display: flex; min-width: 0; min-height: 272px; flex-direction: column; padding: 16px; border: 1px solid rgba(255,255,255,.095); border-radius: 14px; background: radial-gradient(circle at 100% 0,color-mix(in srgb,var(--bwo-tool-accent) 13%,transparent),transparent 38%),linear-gradient(145deg,#1d2026,#14161a); box-shadow: 0 12px 30px rgba(0,0,0,.18),inset 0 1px rgba(255,255,255,.035); transition: transform 160ms ease,border-color 160ms ease,box-shadow 160ms ease; }
    .bwo-tool-card::before { position: absolute; inset: 0 auto 0 0; width: 3px; background: var(--bwo-tool-accent); content: ""; opacity: .8; }
    .bwo-tool-card:hover { transform: translateY(-3px); border-color: color-mix(in srgb,var(--bwo-tool-accent) 56%,#444); box-shadow: 0 18px 38px rgba(0,0,0,.28),inset 0 1px rgba(255,255,255,.045); }
    .bwo-tool-card.featured { border-color: color-mix(in srgb,var(--bwo-tool-accent) 38%,rgba(255,255,255,.1)); }
    .bwo-tool-card.tone-red { --bwo-tool-accent:#ee3b52; }.bwo-tool-card.tone-green { --bwo-tool-accent:#5fcb72; }.bwo-tool-card.tone-blue { --bwo-tool-accent:#5d8ff0; }.bwo-tool-card.tone-cyan { --bwo-tool-accent:#40b9cf; }.bwo-tool-card.tone-orange { --bwo-tool-accent:#d8a646; }.bwo-tool-card.tone-violet { --bwo-tool-accent:#8c6ee8; }
    .bwo-tool-card-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
    .bwo-tool-card-icon { display: grid; place-items: center; flex: 0 0 42px; width: 42px; height: 42px; border: 1px solid color-mix(in srgb,var(--bwo-tool-accent) 35%,#313640); border-radius: 12px; background: color-mix(in srgb,var(--bwo-tool-accent) 12%,#1b1e24); font-size: 19px; box-shadow: inset 0 1px rgba(255,255,255,.055); }
    .bwo-tool-card-meta { display: flex; align-items: flex-end; flex-direction: column; gap: 4px; min-width: 0; }
    .bwo-tool-card-category { color: var(--bwo-tool-accent); font-size: 8px; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; }
    .bwo-tool-card-status { overflow: hidden; max-width: 150px; padding: 3px 6px; border: 1px solid rgba(255,255,255,.08); border-radius: 999px; color: #c7ccd4; background: rgba(255,255,255,.035); font-size: 8px; font-weight: 700; text-overflow: ellipsis; white-space: nowrap; }
    .bwo-tool-card h3 { margin: 14px 0 0; color: #fff; font-size: 17px; line-height: 1.2; letter-spacing: -.01em; }
    .bwo-tool-card-description { min-height: 57px; margin: 7px 0 0; color: #adb5c1; font-size: 10px; line-height: 1.55; }
    .bwo-tool-card-features { display: flex; flex-wrap: wrap; gap: 5px; margin: 12px 0 15px; padding: 0; list-style: none; }
    .bwo-tool-card-features li { padding: 4px 6px; border-radius: 6px; color: #bec5cf; background: rgba(255,255,255,.045); font-size: 8px; font-weight: 700; line-height: 1.25; }
    .bwo-tool-card-features li::before { margin-right: 4px; color: var(--bwo-tool-accent); content: "✓"; }
    .bwo-tool-card-footer { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: auto; padding-top: 12px; border-top: 1px solid rgba(255,255,255,.065); }
    .bwo-tool-card-source { overflow: hidden; color: #7f8895; font-size: 8px; line-height: 1.3; text-overflow: ellipsis; white-space: nowrap; }
    .bwo-tool-card-open { flex: 0 0 auto; padding: 7px 9px; border: 1px solid color-mix(in srgb,var(--bwo-tool-accent) 48%,#353a43); border-radius: 8px; color: #fff; background: color-mix(in srgb,var(--bwo-tool-accent) 14%,#1c1f25); cursor: pointer; font: 800 9px/1.2 "Open Sans",system-ui,sans-serif; transition: background 140ms ease,border-color 140ms ease; }
    .bwo-tool-card-open:hover { border-color: var(--bwo-tool-accent); background: color-mix(in srgb,var(--bwo-tool-accent) 26%,#1c1f25); }
    .bwo-tools-empty { padding: 36px 20px; border: 1px dashed rgba(255,255,255,.13); border-radius: 13px; color: #929aa6; background: rgba(255,255,255,.018); font-size: 12px; text-align: center; }

    .bwo-tools-page-head[hidden],
    .bwo-tools-table-wrap[hidden],
    .bwo-tools-overview[hidden] {
      display: none !important;
    }

    .bwo-tools-detail {
      overflow: hidden;
      border: 1px solid rgba(255,255,255,.10);
      border-radius: 16px;
      background: #0d1016;
      box-shadow: 0 18px 48px rgba(0,0,0,.30);
      animation: bwo-tools-page-in 180ms ease both;
    }

    .bwo-tools-detail-head {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 18px;
      border-bottom: 1px solid rgba(255,255,255,.09);
      background: linear-gradient(90deg, #202228, #17181c);
    }

    .bwo-tools-detail-back {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 7px 11px;
      border: 1px solid #3a3d46;
      border-radius: 9px;
      color: #fff;
      background: #25272d;
      cursor: pointer;
      font: 800 11px/1.2 "Open Sans", system-ui, sans-serif;
    }

    .bwo-tools-detail-back:hover { border-color: #e0142c; background: rgba(224,20,44,.16); }
    .bwo-tools-detail-title { margin: 0; color: #fff; font-size: 18px; line-height: 1.2; }
    .bwo-tools-detail-slot { min-height: 260px; }

    .bwo-tools-detail-loading {
      display: grid;
      min-height: 260px;
      place-items: center;
      color: #aaa7a5;
      font-size: 12px;
      text-align: center;
    }

    @keyframes bwo-tools-page-in {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 760px) {
      .bwo-tools-page-host { padding: 14px 10px 28px; }
      .bwo-tools-page-head { align-items: flex-start; flex-direction: column; padding: 19px; }
      .bwo-tools-overview { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .bwo-tools-table-wrap { overflow: visible; border: 0; background: transparent; box-shadow: none; }
      .bwo-tools-table, .bwo-tools-table tbody { display: block; }
      .bwo-tools-table thead { display: none; }
      .bwo-tools-table tr { display: grid; grid-template-columns: 48px minmax(0, 1fr) auto; margin-bottom: 9px; padding: 12px; border: 1px solid rgba(255,255,255,.10); border-radius: 12px; background: #17181b; }
      .bwo-tools-table td { display: block; padding: 2px 5px; border: 0; }
      .bwo-tools-table td:nth-child(1) { grid-row: 1 / span 3; }
      .bwo-tools-table td:nth-child(2) { grid-column: 2; }
      .bwo-tools-table td:nth-child(3) { grid-column: 2 / 4; }
      .bwo-tools-table td:nth-child(4) { display: none; }
      .bwo-tools-table td:nth-child(5) { grid-column: 3; grid-row: 1; }
      .bwo-tools-card-wrap { overflow: visible; border: 0; background: transparent; box-shadow: none; }
      .bwo-tools-catalog-head { align-items: stretch; flex-direction: column; }
      .bwo-tools-search { width: 100%; }
      .bwo-tools-card-grid { grid-template-columns: 1fr; }
      .bwo-tool-card { min-height: 0; }
      .bwo-tool-card-description { min-height: 0; }
      .bwo-tools-overview-note { white-space: normal; }
    }

    @media (min-width: 761px) and (max-width: 1080px) {
      .bwo-tools-card-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
      .bwo-tools-overview { grid-template-columns: repeat(2,minmax(0,1fr)); }
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
  content: "v1.5.4 móvil optimizado";
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

.bwo-market-radar {
  margin-bottom: 16px;
  padding: 15px;
  border: 1px solid rgba(240,45,73,.24);
  border-radius: 13px;
  background: linear-gradient(135deg, rgba(240,45,73,.09), rgba(255,255,255,.025));
}

.bwo-market-radar-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 14px; margin-bottom: 12px; }
.bwo-market-radar-title { margin: 0; color: #fff; font-size: 16px; }
.bwo-market-radar-copy { margin: 5px 0 0; max-width: 680px; color: var(--bwo-muted); font-size: 11px; line-height: 1.5; }
.bwo-market-radar-badge { flex: 0 0 auto; padding: 5px 9px; border: 1px solid rgba(101,212,122,.28); border-radius: 999px; color: var(--bwo-green); background: rgba(101,212,122,.09); font-size: 9px; font-weight: 800; white-space: nowrap; }
.bwo-market-radar-note { margin: 10px 0 0; padding: 9px 11px; border-left: 3px solid #d8a646; color: #c8c1ad; background: rgba(216,166,70,.07); font-size: 10px; line-height: 1.5; }
.bwo-market-radar-empty { padding: 18px; border: 1px dashed var(--bwo-line); border-radius: 10px; color: var(--bwo-muted); text-align: center; font-size: 11px; }
.bwo-market-radar-go { display: block; margin: 11px auto 0; padding: 7px 12px; border: 1px solid rgba(240,45,73,.4); border-radius: 8px; color: #fff; background: rgba(240,45,73,.14); cursor: pointer; font: 800 10px/1.2 var(--bwo-font-body); }
.bwo-market-radar-table { width: 100%; min-width: 720px; border-collapse: collapse; font-size: 11px; }
.bwo-market-radar-table th { padding: 8px 9px; color: var(--bwo-muted); border-bottom: 1px solid var(--bwo-line); text-align: left; font-size: 9px; letter-spacing: .05em; text-transform: uppercase; }
.bwo-market-radar-table td { padding: 9px; border-bottom: 1px solid rgba(255,255,255,.06); vertical-align: middle; }
.bwo-market-radar-table tbody tr:last-child td { border-bottom: 0; }
.bwo-market-radar-player { color: #fff; font-weight: 800; }
.bwo-market-radar-rec { color: var(--bwo-green); font-weight: 800; font-variant-numeric: tabular-nums; white-space: nowrap; }
.bwo-market-radar-safe { color: #d8a646; font-weight: 800; font-variant-numeric: tabular-nums; white-space: nowrap; }
.bwo-market-confidence { display: inline-block; padding: 3px 7px; border-radius: 999px; font-size: 9px; font-weight: 800; text-transform: capitalize; }
.bwo-market-confidence-alta { color: #baf3c5; background: rgba(101,212,122,.13); }
.bwo-market-confidence-media { color: #f3d99a; background: rgba(216,166,70,.13); }
.bwo-market-confidence-baja { color: #ffc0b7; background: rgba(255,128,108,.13); }

.bwo-market-live-actions { display: flex; align-items: center; gap: 8px; flex: 0 0 auto; }
.bwo-market-live-refresh { padding: 6px 10px; border: 1px solid rgba(255,255,255,.14); border-radius: 8px; color: #fff; background: rgba(255,255,255,.055); cursor: pointer; font: 800 9px/1.2 var(--bwo-font-body); }
.bwo-market-live-refresh:hover { border-color: rgba(240,45,73,.48); background: rgba(240,45,73,.13); }
.bwo-market-live-refresh:disabled { opacity: .5; cursor: wait; }
.bwo-market-live-summary { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; margin: 0 0 12px; }
.bwo-market-live-stat { padding: 10px 12px; border: 1px solid rgba(255,255,255,.075); border-radius: 9px; background: rgba(0,0,0,.18); }
.bwo-market-live-stat span { display: block; margin-bottom: 3px; color: var(--bwo-muted); font-size: 8px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
.bwo-market-live-stat strong { color: #fff; font-size: 15px; font-variant-numeric: tabular-nums; }
.bwo-market-live-amount { color: var(--bwo-green); font-weight: 900; font-variant-numeric: tabular-nums; white-space: nowrap; }
.bwo-market-live-status { display: inline-flex; padding: 3px 7px; border: 1px solid rgba(101,212,122,.25); border-radius: 999px; color: #baf3c5; background: rgba(101,212,122,.11); font-size: 9px; font-weight: 800; }
.bwo-market-model { margin-top: 14px; padding-top: 13px; border-top: 1px solid rgba(255,255,255,.08); }
.bwo-market-model-title { margin: 0 0 4px; color: #fff; font-size: 13px; }
.bwo-market-model-copy { margin: 0 0 10px; color: var(--bwo-muted); font-size: 10px; line-height: 1.45; }
.bwo-bids-history { margin-top: 14px; border: 1px solid rgba(255,255,255,.08); border-radius: 11px; background: rgba(0,0,0,.14); }
.bwo-bids-history > summary { padding: 12px 14px; color: #d7dbe3; cursor: pointer; font-size: 11px; font-weight: 800; list-style-position: inside; }
.bwo-bids-history[open] > summary { border-bottom: 1px solid rgba(255,255,255,.08); }
.bwo-bids-history-body { padding: 13px; }
.bwo-market-api-note { margin: 10px 0 0; padding: 9px 11px; border-left: 3px solid var(--bwo-green); color: #bfc8c1; background: rgba(101,212,122,.055); font-size: 10px; line-height: 1.5; }

@keyframes bwo-bids-fade { from { opacity: 0; } to { opacity: 1; } }
@keyframes bwo-bids-in { from { opacity: 0; transform: translate(-50%, 12px) scale(.985); } to { opacity: 1; transform: translate(-50%, 0) scale(1); } }

@media (max-width: 680px) {
  .bwo-bids-panel { top: 10px; width: calc(100vw - 16px); max-height: calc(100vh - 20px); border-radius: 14px; }
  .bwo-bids-head { padding: 16px; }
  .bwo-bids-title { font-size: 19px; }
  .bwo-bids-body { padding: 12px; }
  .bwo-bids-stats { grid-template-columns: 1fr; }
  .bwo-bids-filters { grid-template-columns: 1fr; }
  .bwo-market-radar-head { flex-direction: column; }
  .bwo-market-live-summary { grid-template-columns: 1fr; }
}

/* En escritorio el menú se abre desde la navbar; la X flotante solo aparece mientras está abierto. */
@media (min-width: 769px) {
  .bwo-fab-wrap:not(:has(.bwo-fab-menu)) > .bwo-fab {
    display: none;
  }
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

/* Lanzador compacto sincronizado con el centro de herramientas. */
.bwo-fab-menu[data-bwo-modern-version] {
  width: 320px;
  max-width: calc(100vw - 24px);
  max-height: calc(100vh - 24px);
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-color: #4d5563 #151820;
  scrollbar-width: thin;
  border-radius: 17px;
  background:
    radial-gradient(circle at 100% 0, rgba(240, 45, 73, .17), transparent 34%),
    linear-gradient(160deg, rgba(28, 33, 43, .995), rgba(14, 17, 23, .995));
}

.bwo-fab-menu[data-bwo-modern-version] .bwo-fab-menu-head {
  position: sticky;
  top: 0;
  z-index: 2;
  justify-content: space-between;
  min-height: 69px;
  padding: 14px 15px;
  background: linear-gradient(135deg, rgba(255, 255, 255, .07), rgba(240, 45, 73, .025));
}

.bwo-fab-menu-brand {
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.bwo-fab-menu-brand .bwo-fab-menu-wordmark { height: 20px; }
.bwo-fab-menu-brand small {
  color: #8f98a8;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.bwo-fab-menu[data-bwo-modern-version] .bwo-fab-menu-version {
  margin-left: 10px;
  padding: 5px 8px;
  color: #f1f3f7;
  background: rgba(240, 45, 73, .12);
  border-color: rgba(240, 45, 73, .28);
  font-size: 9px;
  font-weight: 850;
}

.bwo-fab-menu[data-bwo-modern-version] .bwo-fab-menu-version::after { content: none; }

.bwo-fab-menu-section {
  padding: 9px 15px 6px;
  color: #788293;
  background: rgba(0, 0, 0, .11);
  font-size: 8px;
  font-weight: 850;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.bwo-fab-menu[data-bwo-modern-version] .bwo-fab-item {
  min-height: 63px;
  gap: 11px;
  padding: 9px 14px;
}

.bwo-fab-menu[data-bwo-modern-version] .bwo-fab-item:hover { padding-left: 17px; }
.bwo-fab-item-copy {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
  text-align: left;
}

.bwo-fab-item-copy strong {
  overflow: hidden;
  max-width: 100%;
  color: #f7f8fb;
  font-size: 12px;
  font-weight: 850;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bwo-fab-item-copy small {
  overflow: hidden;
  max-width: 100%;
  color: #8d96a6;
  font-size: 8.5px;
  font-weight: 650;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bwo-fab-item-arrow {
  margin-left: auto;
  color: #697383;
  font-size: 21px;
  font-weight: 400;
  line-height: 1;
  transition: color 160ms ease, transform 160ms ease;
}

.bwo-fab-item:hover .bwo-fab-item-arrow {
  color: #ff4962;
  transform: translateX(2px);
}

.bwo-fab-center-open {
  display: flex;
  width: 100%;
  min-height: 59px;
  padding: 11px 15px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3px;
  color: #fff;
  background: linear-gradient(90deg, rgba(240, 45, 73, .18), rgba(240, 45, 73, .07));
  border: 0;
  border-top: 1px solid rgba(240, 45, 73, .24);
  cursor: pointer;
  font: 850 11px/1.2 var(--bwo-font-body);
  text-align: left;
  transition: background 160ms ease;
}

.bwo-fab-center-open:hover { background: linear-gradient(90deg, rgba(240, 45, 73, .29), rgba(240, 45, 73, .11)); }
.bwo-fab-center-open small { color: #aeb5c1; font-size: 8.5px; font-weight: 600; }

/* En móvil el acceso vive en la navegación nativa; nunca se muestra un lanzador flotante. */
@media (max-width: 768px) {
  .bwo-fab-wrap {
    display: none !important;
  }
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

/* Diagnóstico profesional v1.3.0 */
.bwo-diag-professional { min-width: min(1180px, calc(100vw - 32px)); }
:host(.bwo-tools-embedded) .bwo-diag-professional > .bwo-comp-head { display: none; }
.bwo-diag-pro { display: flex; flex-direction: column; gap: 14px; padding: 16px; color: var(--bwo-chalk); }
.bwo-diag-hero { display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; padding: 20px 22px; border: 1px solid rgba(224,20,44,.28); border-radius: 14px; background: radial-gradient(circle at 100% 0,rgba(224,20,44,.17),transparent 38%),linear-gradient(135deg,#1d2026,#15171c); box-shadow: 0 12px 32px rgba(0,0,0,.18); }
.bwo-diag-eyebrow { display: block; margin-bottom: 7px; color: #ff5368; font-size: 9px; font-weight: 900; letter-spacing: .12em; }
.bwo-diag-hero h2 { margin: 0; color: #fff; font-size: 24px; line-height: 1.15; }
.bwo-diag-hero p { max-width: 790px; margin: 8px 0 0; color: #b7bfcc; font-size: 12px; line-height: 1.55; }
.bwo-diag-hero-actions { display: flex; flex: 0 0 auto; align-items: flex-end; flex-direction: column; gap: 10px; }
.bwo-diag-hero-actions button,.bwo-diag-footer button { padding: 8px 12px; border: 1px solid rgba(255,255,255,.15); border-radius: 8px; color: #fff; background: #292d35; cursor: pointer; font: 800 10px/1.2 var(--bwo-font-body); }
.bwo-diag-hero-actions button:hover,.bwo-diag-footer button:hover { border-color: rgba(224,20,44,.65); background: #343944; }
.bwo-diag-hero-actions button:disabled { opacity: .6; cursor: wait; }
.bwo-diag-status { display: inline-flex; align-items: center; gap: 6px; padding: 6px 10px; border: 1px solid currentColor; border-radius: 999px; font-size: 10px; font-weight: 900; white-space: nowrap; }
.bwo-diag-status::before { width: 7px; height: 7px; border-radius: 50%; background: currentColor; content: ""; box-shadow: 0 0 9px currentColor; }
.bwo-diag-status.good { color: #67dd7f; background: rgba(95,203,114,.1); }.bwo-diag-status.warn { color: #efc66d; background: rgba(216,166,70,.1); }.bwo-diag-status.bad { color: #ff806c; background: rgba(226,102,75,.1); }.bwo-diag-status.info { color: #79b9ff; background: rgba(74,144,226,.1); }
.bwo-diag-kpis { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 10px; }
.bwo-diag-kpi { min-width: 0; padding: 13px 14px; border: 1px solid rgba(255,255,255,.085); border-radius: 11px; background: linear-gradient(145deg,rgba(30,34,41,.96),rgba(22,25,30,.96)); }
.bwo-diag-kpi span { display: block; color: #99a3b2; font-size: 8px; font-weight: 900; letter-spacing: .07em; text-transform: uppercase; }
.bwo-diag-kpi strong { display: block; overflow: hidden; margin-top: 6px; color: #fff; font-size: 17px; line-height: 1.15; text-overflow: ellipsis; white-space: nowrap; }
.bwo-diag-kpi small { display: block; margin-top: 5px; color: #909aa9; font-size: 9px; line-height: 1.35; }
.bwo-diag-kpi.good strong { color: #67dd7f; }.bwo-diag-kpi.warn strong { color: #efc66d; }.bwo-diag-kpi.bad strong { color: #ff806c; }
.bwo-diag-pro-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 12px; }
.bwo-diag-pro-block { overflow: hidden; border: 1px solid rgba(255,255,255,.085); border-radius: 12px; background: #191c21; }
.bwo-diag-pro-block.wide { width: 100%; }
.bwo-diag-pro-block > header { padding: 13px 15px 11px; border-bottom: 1px solid rgba(255,255,255,.075); background: rgba(255,255,255,.018); }
.bwo-diag-pro-block h3 { margin: 0; color: #fff; font-size: 13px; line-height: 1.3; }
.bwo-diag-pro-block header p { margin: 4px 0 0; color: #939dab; font-size: 9px; line-height: 1.4; }
.bwo-diag-pro-block > div { padding: 6px 15px 10px; }
.bwo-diag-pro-row { display: flex; align-items: baseline; justify-content: space-between; gap: 18px; min-height: 30px; padding: 7px 0; border-bottom: 1px solid rgba(255,255,255,.05); }
.bwo-diag-pro-row:last-child { border-bottom: 0; }
.bwo-diag-pro-row > span { color: #aeb6c2; font-size: 11px; line-height: 1.35; }
.bwo-diag-pro-row > strong { max-width: 58%; color: #f4f6f8; font-size: 11px; line-height: 1.35; text-align: right; word-break: break-word; font-variant-numeric: tabular-nums; }
.bwo-diag-pro-row > strong.good { color: #67dd7f; }.bwo-diag-pro-row > strong.warn { color: #efc66d; }.bwo-diag-pro-row > strong.bad { color: #ff806c; }.bwo-diag-pro-row > strong.info { color: #79b9ff; }.bwo-diag-pro-row > strong.emphasis { color: #fff; font-size: 13px; }
.bwo-diag-checks { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 9px; margin: 0; padding: 13px 15px 15px; list-style: none; }
.bwo-diag-check { display: flex; align-items: flex-start; gap: 10px; min-height: 48px; padding: 10px 11px; border: 1px solid rgba(255,255,255,.07); border-radius: 9px; background: rgba(0,0,0,.14); }
.bwo-diag-check-icon { display: grid; place-items: center; flex: 0 0 22px; width: 22px; height: 22px; border-radius: 50%; font-size: 11px; font-weight: 900; }
.bwo-diag-check.good .bwo-diag-check-icon { color: #67dd7f; background: rgba(95,203,114,.14); }.bwo-diag-check.warn .bwo-diag-check-icon { color: #efc66d; background: rgba(216,166,70,.14); }.bwo-diag-check.bad .bwo-diag-check-icon { color: #ff806c; background: rgba(226,102,75,.14); }
.bwo-diag-check strong { display: block; color: #fff; font-size: 11px; }.bwo-diag-check p { margin: 3px 0 0; color: #9ca5b3; font-size: 9px; line-height: 1.45; }
.bwo-diag-footer { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 2px 2px 0; color: #8e98a7; font-size: 9px; line-height: 1.4; }
@media(max-width:900px){.bwo-diag-professional{min-width:0}.bwo-diag-hero{flex-direction:column}.bwo-diag-hero-actions{align-items:flex-start}.bwo-diag-kpis,.bwo-diag-pro-grid,.bwo-diag-checks{grid-template-columns:1fr 1fr}}
@media(max-width:620px){.bwo-diag-pro{padding:10px}.bwo-diag-kpis,.bwo-diag-pro-grid,.bwo-diag-checks{grid-template-columns:1fr}.bwo-diag-hero{padding:16px}.bwo-diag-hero h2{font-size:20px}.bwo-diag-footer{align-items:flex-start;flex-direction:column}.bwo-diag-pro-row>strong{max-width:52%}}

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

/* Los paneles React existentes pasan a formar parte del flujo de la página Herramientas. */
:host(.bwo-tools-embedded) {
  position: relative;
  inset: auto;
  display: block;
  width: 100%;
  z-index: auto;
}

:host(.bwo-tools-embedded) .bwo-panel,
:host(.bwo-tools-embedded) .bwo-bids-panel {
  position: relative;
  inset: auto;
  width: 100%;
  max-width: none;
  max-height: none;
  margin: 0;
  overflow: visible;
  transform: none;
  border: 0;
  border-radius: 0 0 15px 15px;
  box-shadow: none;
  animation: bwo-panel-enter 180ms ease both;
}

:host(.bwo-tools-embedded) .bwo-bids-backdrop,
:host(.bwo-tools-embedded) .bwo-fab-backdrop,
:host(.bwo-tools-embedded) .bwo-fab-wrap:not(:has(.bwo-panel)) {
  display: none !important;
}

:host(.bwo-tools-embedded) .bwo-back,
:host(.bwo-tools-embedded) .bwo-bids-close {
  display: none !important;
}

:host(.bwo-tools-embedded) .bwo-bids-body {
  max-height: none;
  overflow: visible;
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
async function bwoAppendCurrentMarketRadar(){/* Sustituida más abajo por el lector directo de /api/v2/market. */}

var bwoLiveMarketCache=null,bwoLiveMarketAt=0;
async function bwoFetchLiveMarket(e=!1){
  if(!e&&bwoLiveMarketCache&&Date.now()-bwoLiveMarketAt<1e4)return bwoLiveMarketCache;
  let t=await fetch(`${qi}/market`,{headers:await Hi(),cache:"no-store"});
  if(!t.ok)throw new Error(`getMarket failed: ${t.status} ${await t.text()}`);
  return bwoLiveMarketCache=await t.json(),bwoLiveMarketAt=Date.now(),bwoLiveMarketCache
}
function bwoLiveId(e){
  if(e==null)return null;
  if(typeof e==="string"||typeof e==="number")return String(e);
  for(let t of["id","userID","userId","user_id","fromID","fromId","from_id","playerID","playerId","player_id"])
    if(e[t]!=null&&typeof e[t]!=="object")return String(e[t]);
  return null
}
function bwoLiveName(e){return e&&typeof e==="object"?(e.name??e.username??e.teamName??e.title??null):null}
function bwoLiveNumber(e,t){
  for(let n of t){let r=e?.[n];if(r!=null&&r!==""&&typeof r!=="object"&&Number.isFinite(Number(r)))return Number(r)}
  return null
}
function bwoLivePlayerRefs(e){
  if(!e||typeof e!=="object")return[];
  let t=[];
  for(let n of["requestedPlayers","requested_players","players","player","playerID","playerId","player_id","footballPlayer","footballPlayerId"]){
    let r=e[n];if(r==null)continue;
    for(let o of(Array.isArray(r)?r:[r])){let a=bwoLiveId(o);a!=null&&t.push({id:a,name:bwoLiveName(o),raw:o})}
  }
  return[...new Map(t.map(n=>[n.id,n])).values()]
}
function bwoLiveEpoch(e){let t=Number(e);return Number.isFinite(t)&&t>0?t<1e12?t*1e3:t:null}
function bwoLiveDate(e){let t=bwoLiveEpoch(e);return t?bwoBidsDate(t):"—"}
function bwoMarketListings(e,t,n=S0()){
  let r=e?.data??e??{},o=[],a=[];
  for(let i of["sales","market","listings","players"]){let l=r?.[i];Array.isArray(l)&&a.push(...l)}
  for(let i of a){
    let l=bwoLivePlayerRefs(i);if(!l.length&&i?.id!=null&&/player/i.test(String(i?.type??"")))l=[{id:String(i.id),name:i.name??null,raw:i}];
    for(let s of l){let u=bwoCatalogPlayer(t,s.id),c=bwoLiveNumber(i,["price","amount","marketPrice","market_price","value"])??Number(u?.price??0),f=i?.position??u?.position??null;o.push({id:s.id,name:s.name??u?.name??`Jugador ${s.id}`,price:Number(c)||0,position:f})}
  }
  for(let i of n){let l=String(i.detail?.playerId??""),s=l?bwoCatalogPlayer(t,l):null,u=i.detail?.name??s?.name??"Jugador del mercado",c=Number(i.detail?.price??s?.price??0),f=i.detail?.position??s?.position??null;o.push({id:l||`dom:${u}:${c}`,name:u,price:Number.isFinite(c)?c:0,position:f})}
  return[...new Map(o.map(i=>[i.id,i])).values()]
}
function bwoExtractLiveMarketOffers(e,t,n,r,o){
  let a=[],i=new Map(t.map(m=>[String(m.id),m])),l=new Map((n??[]).map(m=>[String(m.id),m.name??`Manager ${m.id}`])),s=new Set,u=/bid|offer|puja/i,c=/cancel|reject|expire|accept|complete|finish|closed|withdraw|declin/i;
  function f(m,d,v){
    if(!m||typeof m!=="object")return;
    let S=String(m.status??m.state??"").toLocaleLowerCase("es");if(c.test(S))return;
    let x=bwoLiveNumber(m,["amount","bidAmount","bid_amount","offerAmount","offer_amount","bid","value"]);if(!(x>0)&&u.test(d))x=bwoLiveNumber(m,["price"]);if(!(x>0))return;
    let C=m.from??m.bidder??m.manager??m.buyer??m.user??null,N=bwoLiveId(C)??bwoLiveId({id:m.fromID??m.fromId??m.from_id??m.bidderID??m.bidderId??m.bidder_id??m.userID??m.userId??m.user_id}),_=bwoLiveName(C)??(N!=null?l.get(String(N)):null);if(N==null&&!_)return;
    let L=bwoLivePlayerRefs(m);L.length||(L=v?.players??[]);if(!L.length)return;
    for(let I of L){let M=i.get(String(I.id));if(i.size&&!M)continue;let B=bwoCatalogPlayer(o,I.id),E=I.name??M?.name??B?.name??`Jugador ${I.id}`,P=Number(M?.price??B?.price??0),T=N!=null&&r!=null&&String(N)===String(r),O=`${N??_}|${I.id}|${Math.round(x)}|${d}`;if(s.has(O))continue;s.add(O),a.push({managerId:N,manager:_??`Manager ${N}`,playerId:String(I.id),player:E,amount:x,market:P,status:S||"activa",until:m.until??m.expires??m.expiration??m.deadline??null,isSelf:T,source:d})}
  }
  function g(m,d="data",v={players:[]}){
    if(m==null)return;
    if(Array.isArray(m)){for(let[S,x]of m.entries())g(x,`${d}[${S}]`,v);return}
    if(typeof m!=="object")return;
    let S=bwoLivePlayerRefs(m),x={players:S.length?S:v.players};
    for(let[C,N]of Object.entries(m)){
      let _=`${d}.${C}`;
      if(u.test(C)&&Array.isArray(N))for(let L of N)f(L,_,x);
      g(N,_,x)
    }
  }
  g(e);
  return a.sort((m,d)=>d.amount-m.amount)
}
function bwoWrapHistoricalBids(e){
  let t=e.querySelector(":scope > .bwo-bids-history");if(t)return t;
  t=bwoBidsNode("details","bwo-bids-history");let n=bwoBidsNode("summary",null,"Histórico de pujas ya resueltas (abrir)"),r=bwoBidsNode("div","bwo-bids-history-body");
  for(let o of[...e.children])r.appendChild(o);
  return t.append(n,r),e.appendChild(t),t
}
function bwoMarketStat(e,t){let n=bwoBidsNode("article","bwo-market-live-stat");return n.append(bwoBidsNode("span",null,e),bwoBidsNode("strong",null,t)),n}
function bwoMarketTable(e,t){
  let n=bwoBidsNode("div","bwo-bids-table-wrap"),r=bwoBidsNode("table","bwo-market-radar-table"),o=bwoBidsNode("thead"),a=bwoBidsNode("tr");for(let l of e)a.appendChild(bwoBidsNode("th",null,l));o.appendChild(a);let i=bwoBidsNode("tbody");return r.append(o,i),n.appendChild(r),t.appendChild(n),i
}
async function bwoRenderLiveMarketModel(e,t,n,r,o){
  if(!t.length)return;
  let a=bwoBidsNode("section","bwo-market-model"),i=bwoBidsNode("h4","bwo-market-model-title","Estimación competitiva (separada de las pujas reales)"),l=bwoBidsNode("p","bwo-market-model-copy","Sirve como apoyo cuando la API no revela una puja rival. Se calcula con capacidad económica e histórico resuelto; no se presenta como una puja actual.");a.append(i,l);let s=bwoMarketTable(["Jugador","Valor","Rivales con capacidad","Puja competitiva","Puja segura"],a),u=Au(n);
  for(let c of t){let f={};for(let y of r)f[y.id]=u(c.price,y.maxBid,y.id,{});let g=fg({price:c.price,position:c.position,rivals:r,estimates:f}),b=bwoBidsNode("tr");b.append(bwoBidsNode("td","bwo-market-radar-player",c.name),bwoBidsNode("td","bwo-bids-money",bwoBidsMoney(c.price)),bwoBidsNode("td",null,`${r.filter(y=>y.maxBid>=c.price).length}/${r.length}`),bwoBidsNode("td","bwo-market-radar-rec",g?.amount!=null?bwoBidsMoney(g.amount):"Sin datos"),bwoBidsNode("td","bwo-market-radar-safe",g?.safeAmount!=null?bwoBidsMoney(g.safeAmount):"—")),s.appendChild(b)
  }
  e.appendChild(a)
}
bwoAppendCurrentMarketRadar=async function(e=!1){
  let t=zv?.querySelector(".bwo-bids-panel"),n=t?.querySelector(".bwo-bids-body");if(!t||!n)return;
  let r=n.querySelector(":scope > .bwo-market-radar");if(r&&!e)return;r?.remove();
  t.querySelector(".bwo-bids-title")&&(t.querySelector(".bwo-bids-title").textContent="Pujas del mercado actual");
  t.querySelector(".bwo-bids-subtitle")&&(t.querySelector(".bwo-bids-subtitle").textContent="Pujas activas visibles para tu sesión, obtenidas directamente del mercado actual. El histórico queda separado y plegado.");
  let o=bwoWrapHistoricalBids(n),a=bwoBidsNode("section","bwo-market-radar"),i=bwoBidsNode("div","bwo-market-radar-head"),l=bwoBidsNode("div"),s=bwoBidsNode("h3","bwo-market-radar-title","Actividad real del mercado"),u=bwoBidsNode("p","bwo-market-radar-copy","Muestra únicamente registros activos que la respuesta de Biwenger relaciona de forma explícita con un rival, un jugador actualmente en venta y una cantidad."),c=bwoBidsNode("div","bwo-market-live-actions"),f=bwoBidsNode("span","bwo-market-radar-badge","API en directo"),g=bwoBidsNode("button","bwo-market-live-refresh","Actualizar");g.type="button",g.addEventListener("click",async()=>{g.disabled=!0;try{await bwoAppendCurrentMarketRadar(!0)}finally{g.disabled=!1}}),l.append(s,u),c.append(f,g),i.append(l,c),a.appendChild(i),a.appendChild(bwoBidsNode("div","bwo-bids-loading","Consultando el mercado actual…")),n.insertBefore(a,o);
  try{
    let[b,p,y,w,m]=await Promise.all([bwoFetchLiveMarket(e),H(),og().catch(()=>[]),pn().catch(()=>null),Rf().catch(()=>({observations:[],byManager:new Map,byManagerPosition:new Map}))]),d=bwoMarketListings(b,p),v=bwoExtractLiveMarketOffers(b,d,y,w,p),S=v.filter(C=>!C.isSelf),x=v.filter(C=>C.isSelf);if(!a.isConnected)return;a.querySelector(".bwo-bids-loading")?.remove();
    let C=bwoBidsNode("div","bwo-market-live-summary");C.append(bwoMarketStat("Pujas rivales activas",S.length.toLocaleString("es-ES")),bwoMarketStat("Jugadores pujados",new Set(S.map(N=>N.playerId)).size.toLocaleString("es-ES")),bwoMarketStat("Jugadores en mercado",d.length.toLocaleString("es-ES"))),a.appendChild(C);
    if(S.length){let N=bwoMarketTable(["Rival","Jugador","Puja actual","Valor","Sobrepuja","Estado","Hasta"],a);for(let _ of S){let L=_.market>0?_.amount-_.market:null,I=bwoBidsNode("tr"),M=bwoBidsNode("td","bwo-bids-manager",_.manager),B=bwoBidsNode("td","bwo-market-radar-player",_.player),E=bwoBidsNode("td","bwo-market-live-amount",bwoBidsMoney(_.amount)),P=bwoBidsNode("td","bwo-bids-money",_.market>0?bwoBidsMoney(_.market):"—"),T=bwoBidsNode("td",L==null?"bwo-bids-neutral":L>=0?"bwo-bids-positive":"bwo-bids-negative",L==null?"—":`${L>=0?"+":"−"}${bwoBidsMoney(Math.abs(L))}`),O=bwoBidsNode("td"),R=bwoBidsNode("span","bwo-market-live-status","Activa"),F=bwoBidsNode("td","bwo-bids-date",bwoLiveDate(_.until));O.appendChild(R),I.append(M,B,E,P,T,O,F),N.appendChild(I)}a.appendChild(bwoBidsNode("p","bwo-market-api-note","Estas filas proceden de /api/v2/market y siguen activas en la respuesta actual. No se completan con ganadores pasados ni con cantidades estimadas."))}
    else{let N=x.length?`La API devolvió ${x.length.toLocaleString("es-ES")} oferta${x.length===1?"":"s"}, pero corresponde${x.length===1?"":"n"} a tu propio usuario; no se presenta${x.length===1?"":"n"} como puja rival.`:"La respuesta actual de /api/v2/market no contiene ninguna puja rival activa visible para esta cuenta. Puede no haber pujas sobre tus ventas actuales o Biwenger puede estar ocultándolas a tu sesión.";a.appendChild(bwoBidsNode("div","bwo-market-radar-empty",N))}
    let N=y.filter(_=>w==null||String(_.id)!==String(w));await bwoRenderLiveMarketModel(a,d,m,N,p)
  }catch(b){if(!a.isConnected)return;a.querySelector(".bwo-bids-loading")?.remove(),a.appendChild(bwoBidsNode("div","bwo-market-radar-empty","No se pudo leer /api/v2/market con la sesión actual. Recarga Biwenger, ejecuta de nuevo el bookmark y vuelve a abrir Herramientas → Ver pujas.")),console.warn("[biwtools] Error al leer el mercado activo:",b)}
};
var bwoOriginalOpenBidsPanel=bwoOpenBidsPanel;
bwoOpenBidsPanel=async function(){await bwoOriginalOpenBidsPanel();zv?.querySelector(".bwo-bids-panel")&&await bwoAppendCurrentMarketRadar().catch(e=>console.warn("[biwtools] No se pudo construir el radar actual:",e))};
function bwoNavText(e){return(e.textContent??"").replace(/\d+/g,"").replace(/\s+/g," ").trim().toLocaleLowerCase("es")}
function bwoNavUnit(e){let t=e;for(;t.parentElement&&t.parentElement!==document.body;){let n=t.parentElement,r=[...n.children],o=r.filter(a=>/^(inicio|liga|equipo|mercado|jornada|jugadores)$/.test(bwoNavText(a))).length;if(o>=3)return t;t=n}return e.closest("a, button, li, [role='menuitem']")??e.parentElement}
var bwoToolsPageWanted=!1,bwoToolsPagePath=null,bwoToolsExitBound=!1,bwoToolsActiveTool=null,bwoToolsEmbedBusy=!1,bwoToolsRows=[
  {icon:"📋",name:"Actividad",description:"Histórico del mercado, fichajes, ventas y movimientos recientes de la liga."},
  {icon:"👁️",name:"Ver pujas",description:"Pujas rivales activas visibles en el mercado actual, con importe real, actualización directa y estimación competitiva separada."},
  {icon:"⚽",name:"Onces",description:"Revisa alineaciones, formaciones y jugadores utilizados por cada equipo."},
  {icon:"🚑",name:"Lesionados",description:"Control de lesionados, sancionados, dudas y disponibilidad de la plantilla."},
  {icon:"🎯",name:"Recomendaciones",description:"Mejoras del mercado comparadas con tu once por Media AS + SofaScore, forma, titularidad, calendario y capacidad real de puja."},
  {icon:"🆓",name:"Jugadores libres",description:"Encuentra oportunidades disponibles que todavía no pertenecen a ningún rival."},
  {icon:"🔀",name:"Comparador",description:"Compara jugadores y alternativas para mejorar posiciones concretas del equipo."},
  {icon:"💰",name:"Finanzas",description:"Analiza saldos, patrimonio, capacidad de puja y evolución económica."},
  {icon:"🩺",name:"Diagnóstico",description:"Comprueba sincronización, datos disponibles y posibles incidencias del bundle."}
];
function bwoOpenToolFromPage(e){bwoEnterEmbeddedTool(e)}
function bwoBuildToolsPage(){let e=bwoBidsNode("section","bwo-tools-page-host");e.dataset.bwoToolsPage="1",e.dataset.bwoRuntime=bwoRuntimeToken,e.setAttribute("aria-labelledby","bwo-tools-page-title");let t=bwoBidsNode("header","bwo-tools-page-head"),n=bwoBidsNode("div"),r=bwoBidsNode("span","bwo-tools-page-kicker","Biwtools · Centro de control"),o=bwoBidsNode("h1","bwo-tools-page-title","Herramientas");o.id="bwo-tools-page-title";let a=bwoBidsNode("p","bwo-tools-page-subtitle","Todas las funciones de análisis reunidas en una sección integrada. Elige una herramienta para abrir su información sin abandonar Biwenger."),i=bwoBidsNode("span","bwo-tools-page-count",`${bwoToolsRows.length} herramientas disponibles`);n.append(r,o,a),t.append(n,i);let l=bwoBidsNode("div","bwo-tools-table-wrap"),s=bwoBidsNode("table","bwo-tools-table"),u=bwoBidsNode("thead"),c=bwoBidsNode("tr");for(let E of["","Herramienta","Descripción","Estado",""])c.appendChild(bwoBidsNode("th",null,E));u.appendChild(c);let f=bwoBidsNode("tbody");for(let E of bwoToolsRows){let P=bwoBidsNode("tr"),T=bwoBidsNode("td"),O=bwoBidsNode("span","bwo-tools-page-icon",E.icon);O.setAttribute("aria-hidden","true"),T.appendChild(O);let R=bwoBidsNode("td","bwo-tools-page-name",E.name),F=bwoBidsNode("td",null,E.description),U=bwoBidsNode("td","bwo-tools-page-status","Disponible"),k=bwoBidsNode("td","bwo-tools-page-action"),G=bwoBidsNode("button","bwo-tools-page-open","Abrir");G.type="button",G.setAttribute("aria-label",`Abrir ${E.name}`),G.addEventListener("click",()=>bwoOpenToolFromPage(E.name)),k.appendChild(G),P.append(T,R,F,U,k),f.appendChild(P)}return s.append(u,f),l.appendChild(s),e.append(t,l),e}
function bwoBuildEmbeddedShell(e){let t=document.querySelector(".bwo-tools-page-host");if(!t)return null;t.querySelector(".bwo-tools-page-head")?.setAttribute("hidden",""),t.querySelector(".bwo-tools-table-wrap")?.setAttribute("hidden",""),t.querySelector(".bwo-tools-detail")?.remove();let n=bwoBidsNode("section","bwo-tools-detail"),r=bwoBidsNode("header","bwo-tools-detail-head"),o=bwoBidsNode("button","bwo-tools-detail-back","← Volver a herramientas");o.type="button",o.addEventListener("click",()=>bwoLeaveEmbeddedTool(!0));let a=bwoBidsNode("h2","bwo-tools-detail-title",e),i=bwoBidsNode("div","bwo-tools-detail-slot"),l=bwoBidsNode("div","bwo-tools-detail-loading",`Cargando ${e}…`);return r.append(o,a),i.appendChild(l),n.append(r,i),t.appendChild(n),Or.classList.add("bwo-tools-embedded"),i.appendChild(Or),n.scrollIntoView({block:"start",behavior:"smooth"}),i}
function bwoLaunchEmbeddedPanel(e){if(e==="Ver pujas"){bwoOpenBidsPanel();return}let t=zv?.querySelector(".bwo-fab");if(!t)return;zv.querySelector(".bwo-fab-menu")||t.click();let n=0,r=()=>{bwoEnsureBidsFabItem();let o=e.toLocaleLowerCase("es"),a=[...zv.querySelectorAll(".bwo-fab-item")].find(i=>i.dataset.bwoToolName?.toLocaleLowerCase("es")===o||(i.textContent??"").trim().toLocaleLowerCase("es").endsWith(o));if(a){a.click();return}if(++n<40){setTimeout(r,25);return}let i=document.querySelector(".bwo-tools-detail-loading");i&&(i.textContent=`No se pudo abrir ${e}. Vuelve al centro de herramientas e inténtalo de nuevo.`),console.warn(`[biwtools] No se encontró la herramienta ${e} tras esperar su renderizado`)};setTimeout(r,20)}
function bwoEnterEmbeddedTool(e){if(!bwoToolsPageWanted)return;bwoToolsActiveTool&&bwoLeaveEmbeddedTool(!0),bwoToolsActiveTool=e,bwoToolsEmbedBusy=!0;let t=bwoBuildEmbeddedShell(e);if(!t){bwoToolsActiveTool=null,bwoToolsEmbedBusy=!1;return}document.querySelector(".bwo-tools-overview")?.setAttribute("hidden",""),bwoLaunchEmbeddedPanel(e),setTimeout(()=>{bwoToolsEmbedBusy=!1,bwoWatchEmbeddedTool()},120)}
function bwoLeaveEmbeddedTool(e=!0){if(!bwoToolsActiveTool&&!Or?.classList.contains("bwo-tools-embedded"))return;bwoToolsEmbedBusy=!0;let t=bwoToolsActiveTool;bwoToolsActiveTool=null;if(e)if(t==="Ver pujas")bwoCloseBidsPanel();else if(zv?.querySelector(".bwo-panel")){let n=zv.querySelector(".bwo-fab");n?.click(),setTimeout(()=>{zv.querySelector(".bwo-fab-menu")&&n?.click()},0)}Or.classList.remove("bwo-tools-embedded"),document.body.appendChild(Or);let n=document.querySelector(".bwo-tools-page-host");n?.querySelector(".bwo-tools-detail")?.remove(),n?.querySelector(".bwo-tools-page-head")?.removeAttribute("hidden"),n?.querySelector(".bwo-tools-table-wrap")?.removeAttribute("hidden"),n?.querySelector(".bwo-tools-overview")?.removeAttribute("hidden"),setTimeout(()=>{bwoToolsEmbedBusy=!1,bwoSyncToolsNavState()},80)}
function bwoWatchEmbeddedTool(){if(!bwoToolsActiveTool||bwoToolsEmbedBusy)return;let e=!!zv?.querySelector(".bwo-panel, .bwo-bids-panel"),t=!!zv?.querySelector(".bwo-fab-menu");if(e){document.querySelector(".bwo-tools-detail-loading")?.remove();return}!e&&!t&&setTimeout(()=>{bwoToolsActiveTool&&!bwoToolsEmbedBusy&&!zv?.querySelector(".bwo-panel, .bwo-bids-panel, .bwo-fab-menu")&&bwoLeaveEmbeddedTool(!1)},0)}
function bwoEnsureToolsOverview(e){if(e.querySelector(".bwo-tools-overview"))return;let t=bwoBidsNode("section","bwo-tools-overview");for(let[n,r]of[["rivals","Rivales sincronizados"],["bids","Pujas observadas"],["wins","Pujas ganadoras"],["market","Jugadores en mercado"]]){let o=bwoBidsNode("article","bwo-tools-overview-card"),a=bwoBidsNode("span","bwo-tools-overview-label",r),i=bwoBidsNode("strong","bwo-tools-overview-value","…");i.dataset.bwoOverview=n,o.append(a,i),t.appendChild(o)}e.querySelector(".bwo-tools-table-wrap")?.insertAdjacentElement("beforebegin",t),bwoPopulateToolsOverview(e)}
async function bwoPopulateToolsOverview(e){if(e.dataset.bwoOverviewLoading==="1")return;e.dataset.bwoOverviewLoading="1";try{let[t,n]=await Promise.all([og().catch(()=>[]),jf().catch(()=>[])]),r={rivals:Math.max(0,t.length-1),bids:n.length,wins:n.filter(o=>o.won).length,market:S0().length};for(let[o,a]of Object.entries(r)){let i=e.querySelector(`[data-bwo-overview="${o}"]`);i&&(i.textContent=Number(a).toLocaleString("es-ES"))}}finally{delete e.dataset.bwoOverviewLoading}}
function bwoRestoreToolsContent(){document.querySelectorAll("[data-bwo-tools-hidden='1']").forEach(e=>e.removeAttribute("data-bwo-tools-hidden"))}
function bwoMaintainToolsPage(){if(!bwoToolsPageWanted)return;let e=document.querySelector("main.container")??document.querySelector("main");if(!e)return;let t=e.querySelector(":scope > .bwo-tools-page-host");t||(document.querySelectorAll(".bwo-tools-page-host").forEach(r=>r.remove()),t=bwoBuildToolsPage());for(let n of[...e.children])n!==t&&n.setAttribute("data-bwo-tools-hidden","1");t.parentElement===e||e.appendChild(t),bwoEnsureToolsOverview(t),bwoSyncToolsNavState()}
function bwoOpenToolsPage(){bwoCloseBidsPanel(),bwoToolsPageWanted=!0,bwoToolsPagePath=location.pathname;let e=zv?.querySelector(".bwo-fab-menu");e&&zv.querySelector(".bwo-fab")?.click();try{history.replaceState(history.state,"",`${location.pathname}${location.search}#bwo-herramientas`)}catch{}bwoMaintainToolsPage(),bwoSyncToolsNavState()}
function bwoCloseToolsPage(){if(!bwoToolsPageWanted&&!document.querySelector(".bwo-tools-page-host"))return;bwoToolsActiveTool&&bwoLeaveEmbeddedTool(!0),bwoToolsPageWanted=!1,bwoToolsPagePath=null,document.querySelectorAll(".bwo-tools-page-host").forEach(e=>e.remove()),bwoRestoreToolsContent();try{location.hash==="#bwo-herramientas"&&history.replaceState(history.state,"",`${location.pathname}${location.search}`)}catch{}bwoSyncToolsNavState()}
function bwoBindToolsExit(){if(bwoToolsExitBound)return;bwoToolsExitBound=!0,document.addEventListener("click",e=>{let t=e.target instanceof Element?e.target.closest("app-nav a[href]"):null;t&&!t.closest("[data-bwo-tools-nav='1']")&&bwoCloseToolsPage()},!0)}
function bwoSyncToolsNavState(){let e=bwoToolsPageWanted&&!!document.querySelector(".bwo-tools-page-host");document.querySelectorAll("[data-bwo-tools-nav='1']").forEach(t=>{let n=t.parentElement;e&&n&&[...n.children].forEach(r=>{if(r===t)return;r.classList.contains("active")&&(r.dataset.bwoToolsWasActive="1"),r.classList.remove("active"),r.setAttribute("aria-selected","false")}),!e&&n&&[...n.children].forEach(r=>{r.dataset.bwoToolsWasActive==="1"&&(r.classList.add("active"),r.setAttribute("aria-selected","true"),delete r.dataset.bwoToolsWasActive)}),t.classList.toggle("active",e),t.setAttribute("aria-selected",String(e));let r=t.matches("a")?t:t.querySelector("a");r&&(r.setAttribute("aria-expanded",String(e)),e?r.setAttribute("aria-current","page"):r.removeAttribute("aria-current"))})}
function bwoToggleToolsMenu(){bwoOpenToolsPage()}
function bwoPrepareBidsNavItem(e){let t=e.cloneNode(!0),n=t.matches("a")?t:t.querySelector("a");if(!n)return null;t.classList.remove("active","is-active","selected","current"),t.setAttribute("aria-selected","false"),t.dataset.bwoToolsNav="1",t.dataset.bwoRuntime=bwoRuntimeToken,t.classList.add("bwo-nav-bids"),n.classList.add("bwo-nav-bids","bwo-nav-bids-trigger"),n.removeAttribute("aria-current"),n.setAttribute("href","#bwo-herramientas"),n.setAttribute("title","Abrir las herramientas de Biwtools"),n.setAttribute("aria-label","Abrir herramientas de Biwtools"),n.setAttribute("aria-haspopup","dialog"),n.setAttribute("aria-expanded","false");let r=n.querySelector("i.icon")?.cloneNode(!1)??bwoBidsNode("i");r.className="icon icon-hamburger bwo-nav-bids-native-icon",r.setAttribute("aria-hidden","true"),n.replaceChildren(r,document.createTextNode(" Herramientas "));let o=a=>{a.preventDefault(),a.stopImmediatePropagation(),bwoToggleToolsMenu()};return n.addEventListener("click",o),n.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&o(a)}),t}
function bwoEnsureBidsNav(){let e=[...document.querySelectorAll("app-nav linear-tabs ul[role='navigation']")],t=!1;for(let n of e){if(n.querySelector(":scope > li[data-bwo-tools-nav='1']")){t=!0;continue}let r=n.querySelector(":scope > li > a[href='/players']")?.closest("li"),o=r?bwoPrepareBidsNavItem(r):null;o&&(r.insertAdjacentElement("afterend",o),t=!0)}if(t)return;let n=[],r=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);for(let o;o=r.nextNode();)if((o.textContent??"").replace(/\s+/g," ").trim().toLocaleLowerCase("es")==="jugadores"&&o.parentElement)n.push(o.parentElement);let o=n.find(a=>{let i=a.getBoundingClientRect();return a.getClientRects().length>0&&i.top>=0&&i.top<120})??n[0];if(!o)return;let a=bwoNavUnit(o);if(!a||a===document.body||a.parentElement?.querySelector(":scope > [data-bwo-tools-nav='1']"))return;let i=bwoPrepareBidsNavItem(a);i&&a.insertAdjacentElement("afterend",i)}
function bwoEnsureBidsFabItem(){let e=zv?.querySelector(".bwo-fab-menu");if(!e){bwoSyncToolsNavState(),bwoWatchEmbeddedTool();return}if(!e.querySelector("[data-bwo-bids-fab='1']")){let t=e.querySelector(".bwo-fab-item"),n=bwoBidsNode("button","bwo-fab-item");n.type="button",n.dataset.bwoBidsFab="1",n.setAttribute("aria-label","Ver pujas de rivales");let r=bwoBidsNode("span","bwo-fab-item-icon","👁️");r.setAttribute("aria-hidden","true"),n.append(r,document.createTextNode(" Ver pujas")),n.addEventListener("click",()=>{zv.querySelector(".bwo-fab")?.click(),setTimeout(bwoOpenBidsPanel,0)}),t?t.insertAdjacentElement("afterend",n):e.appendChild(n)}bwoSyncToolsNavState(),bwoWatchEmbeddedTool()}
/* Una tarjeta reconocida por S0 ya recibe .bwo-market-info; se excluye del inyector rival para que nunca tenga dos botones equivalentes. */
var bwoOriginalCvWithoutMarketDuplicates=Cv;
Cv=async function(){let e=new Set(S0().filter(t=>t.layout==="card").map(t=>t.markEl.closest("player-card")).filter(Boolean)),t=Nv,n=()=>e.forEach(r=>{r.querySelectorAll(`.${xc}`).forEach(o=>o.remove()),r.querySelector(`.${wc}`)?.remove(),delete r.dataset.bwoRival});n(),Nv=r=>e.has(r)?null:t(r);try{await bwoOriginalCvWithoutMarketDuplicates()}finally{Nv=t,n()}};

/* Las recomendaciones principales se calculan sobre anuncios pujables del mercado actual. */
var bwoOriginalSuggestionSearch=sw;
sw=async function(e,t,n){let r=Object.keys(t).filter(u=>t[u]>0);if(r.length===0)return[];let o;try{o=bwoMarketListings(await bwoFetchLiveMarket(),e,[])}catch{return bwoOriginalSuggestionSearch(e,t,n)}if(o.length===0)return[];let a=new Set((await Lr()).map(String)),i=new Map;for(let u of o){let c=String(u.id),f=bwoCatalogPlayer(e,c);if(!f||a.has(c))continue;let g=String(u.position??f.position),b=Number(u.price??f.price??0);if(!t[g]||b>n)continue;let p=await pe(c);if(!p)continue;let y=i.get(g)??[];y.push({id:c,name:f.name,position:f.position,teamId:f.team_id,price:b,prob:p.prob?parseInt(p.prob,10):null,inMarket:!0}),i.set(g,y)}let l=[];for(let u of r){let c=i.get(u)??[];c.sort((f,g)=>(g.prob??-1)-(f.prob??-1)||f.price-g.price),l.push(...c.slice(0,lw))}return l};

/* Recomendaciones accionables: distingue mercado actual y abre la puja nativa de Biwenger. */
var bwoRecommendationsBusy=!1,bwoRecommendationsAt=0,bwoRecommendationMarketTarget=null;
function bwoRecommendationNorm(e){return String(e??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/gi," ").trim().toLocaleLowerCase("es")}
function bwoRecommendationEnsureStyles(){if(zv?.querySelector("#bwo-recommendations-action-styles"))return;let e=document.createElement("style");e.id="bwo-recommendations-action-styles",e.textContent=`
  .bwo-rec-live-summary{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:8px 0 10px;padding:8px 10px;border:1px solid rgba(255,255,255,.09);border-radius:8px;color:var(--bwo-muted);background:rgba(255,255,255,.025);font-size:10px}
  .bwo-rec-live-summary strong{color:var(--bwo-green);font-size:11px}
  .bwo-rec-action{display:inline-flex;align-items:center;justify-content:center;min-width:92px;padding:6px 9px;border:1px solid rgba(255,255,255,.14);border-radius:7px;color:#fff;background:#252830;cursor:pointer;font:800 10px/1.2 var(--bwo-font-body);white-space:nowrap}
  .bwo-rec-action.market{border-color:rgba(95,203,114,.5);background:rgba(95,203,114,.15);color:#8ce39b}
  .bwo-rec-action:hover{filter:brightness(1.16);transform:translateY(-1px)}
  .bwo-rec-market-state{display:block;margin-top:3px;color:var(--bwo-muted);font-size:8px;white-space:nowrap}
  .bwo-rec-market-state.live{color:var(--bwo-green)}
  .bwo-rec-name-action{cursor:pointer;text-decoration:underline;text-decoration-color:rgba(255,255,255,.22);text-underline-offset:3px}
  .bwo-rec-row-live{background:rgba(95,203,114,.045)}
  .bwo-rec-action-head,.bwo-rec-action-cell{text-align:right!important}
`;zv?.appendChild(e)}
function bwoRecommendationCatalogByName(e){let t=new Map;for(let n of e.values()){let r=bwoRecommendationNorm(n.name);r&&!t.has(r)&&t.set(r,n)}return t}
function bwoRecommendationNameFromCell(e){let t=[...e.childNodes].filter(n=>n.nodeType===Node.TEXT_NODE).map(n=>n.textContent??"").join(" ").trim();return t||((e.textContent??"").split("·")[0].trim())}
function bwoRecommendationOpenDetail(e,t=null){window.dispatchEvent(new CustomEvent(En,{detail:{price:Number(t?.price??e.price??0),playerId:String(e.id),name:e.name,position:String(e.position),owned:!1}}))}
function bwoRecommendationToast(e,t="info"){document.querySelector(".bwo-recommendation-toast")?.remove();let n=bwoBidsNode("div","bwo-recommendation-toast",e);Object.assign(n.style,{position:"fixed",zIndex:"2147483647",left:"50%",bottom:"22px",transform:"translateX(-50%)",maxWidth:"min(520px,calc(100vw - 24px))",padding:"11px 15px",border:`1px solid ${t==="ok"?"rgba(95,203,114,.55)":"rgba(224,20,44,.5)"}`,borderRadius:"10px",color:"#fff",background:"rgba(18,19,23,.97)",boxShadow:"0 14px 36px rgba(0,0,0,.55)",font:"700 12px/1.4 Open Sans,system-ui,sans-serif",textAlign:"center"}),document.body.appendChild(n),setTimeout(()=>n.remove(),5e3)}
function bwoRecommendationListingMatch(e,t){return e.find(n=>{let r=n.detail?.playerId??n.id;return t.id!=null&&r!=null&&String(r)===String(t.id)})??e.find(n=>bwoRecommendationNorm(n.detail?.name??n.name)===bwoRecommendationNorm(t.name))??null}
function bwoRecommendationOpenNativeBid(e){bwoRecommendationMarketTarget=e,bwoCloseToolsPage();let t=Date.now(),n=()=>{if(Date.now()-t>12e3){bwoRecommendationToast(`${e.name} figura en el mercado, pero su tarjeta no se ha podido localizar. Restablece los filtros del Mercado y vuelve a intentarlo.`);return}if(!location.pathname.includes("/market")){setTimeout(n,180);return}let r=bwoRecommendationListingMatch(S0(),e);if(!r){setTimeout(n,180);return}let o=E0(r)??r.markEl;o&&(o.classList.add("bwo-recommendation-target"),Object.assign(o.style,{outline:"3px solid rgba(95,203,114,.85)",outlineOffset:"3px",boxShadow:"0 0 0 7px rgba(95,203,114,.14)"}),o.scrollIntoView({behavior:"smooth",block:"center"})),setTimeout(()=>{let a=r.pujarEl instanceof Element?r.pujarEl:null;if(a){a.click(),bwoRecommendationToast(`Abierta la puja de ${e.name}. Revisa el importe antes de confirmarla.`,"ok")}else bwoRecommendationToast(`Se encontró ${e.name}, pero Biwenger no muestra ahora el botón Pujar.`)},450),bwoRecommendationMarketTarget=null};setTimeout(()=>{let r=document.querySelector("app-nav a[href='/market']")??document.querySelector("a[href='/market']");r?r.click():bwoRecommendationToast("No se encontró el acceso nativo a Mercado; ábrelo desde la barra superior."),setTimeout(n,180)},120)}
async function bwoEnhanceRecommendations(e=!1){let t=[...zv.querySelectorAll(".bwo-comp")].find(o=>(o.querySelector(".bwo-comp-name")?.textContent??"").trim()==="Recomendaciones");if(!t)return;let n=[...t.querySelectorAll(".bwo-card")].find(o=>(o.querySelector(".bwo-card-label")?.textContent??"").trim()==="Dónde fichar"),r=n?.querySelector("tbody");if(!n||!r||r.children.length===0)return;if(bwoRecommendationsBusy||!e&&Date.now()-bwoRecommendationsAt<8e3&&n.dataset.bwoRecommendationsReady==="1")return;bwoRecommendationsBusy=!0,bwoRecommendationEnsureStyles();try{let[o,a]=await Promise.all([H(),bwoFetchLiveMarket(e).catch(()=>null)]),i=bwoRecommendationCatalogByName(o),l=a?bwoMarketListings(a,o,[]):[],s=[],u=[];n.querySelector(".bwo-rec-live-summary")?.remove();let c=n.querySelector("thead tr");c&&!c.querySelector(".bwo-rec-action-head")&&c.appendChild(bwoBidsNode("th","bwo-rec-action-head","Acción"));for(let f of [...r.querySelectorAll("tr.bwo-row")]){let g=f.querySelector("td.bwo-name");if(!g)continue;let b=bwoRecommendationNameFromCell(g),p=i.get(bwoRecommendationNorm(b))??[...o.values()].find(v=>bwoRecommendationNorm(v.name)===bwoRecommendationNorm(b));if(!p)continue;let y=bwoRecommendationListingMatch(l,p),w=f.querySelector(".bwo-rec-action-cell");w?.remove(),w=bwoBidsNode("td","bwo-rec-action-cell");let m=bwoBidsNode("button",`bwo-rec-action${y?" market":""}`,y?"Ver y pujar":"Ver ficha"),d=bwoBidsNode("span",`bwo-rec-market-state${y?" live":""}`,y?`En mercado · ${bwoBidsMoney(y.price)}`:"Libre, pero no anunciado");m.type="button",m.setAttribute("aria-label",y?`Ir al mercado y pujar por ${p.name}`:`Ver análisis de ${p.name}`),m.addEventListener("click",v=>{v.stopPropagation(),y?bwoRecommendationOpenNativeBid({id:String(p.id),name:p.name,price:y.price,position:String(p.position)}):bwoRecommendationOpenDetail(p)}),w.append(m,d),f.appendChild(w),f.classList.toggle("bwo-rec-row-live",!!y),g.classList.add("bwo-rec-name-action"),g.setAttribute("role","button"),g.setAttribute("tabindex","0"),g.onclick=()=>bwoRecommendationOpenDetail(p,y),g.onkeydown=v=>{(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),bwoRecommendationOpenDetail(p,y))},(y?s:u).push(f)}for(let f of [...s,...u])r.appendChild(f);let f=bwoBidsNode("div","bwo-rec-live-summary"),g=bwoBidsNode("span",null,`${s.length} recomendación${s.length===1?"":"es"} disponible${s.length===1?"":"s"} para pujar ahora`),b=bwoBidsNode("strong",null,`${s.length}/${s.length+u.length} en mercado`);f.append(g,b),n.querySelector(".bwo-card-head")?.insertAdjacentElement("afterend",f),n.dataset.bwoRecommendationsReady="1",bwoRecommendationsAt=Date.now()}catch(o){console.warn("[biwtools] No se pudieron activar las recomendaciones:",o)}finally{bwoRecommendationsBusy=!1}}

var bwoEnhanceRecommendationsActions=bwoEnhanceRecommendations;
bwoEnhanceRecommendations=async function(e=!1){let t=[...zv.querySelectorAll(".bwo-comp")].find(r=>(r.querySelector(".bwo-comp-name")?.textContent??"").trim()==="Recomendaciones");if(t){let n=t.querySelector(".bwo-comp-meta");n&&(n.textContent="Necesidades de tu once y mejores opciones que puedes pujar en el mercado actual");let r=[...t.querySelectorAll(".bwo-card")].find(o=>(o.querySelector(".bwo-card-label")?.textContent??"").trim()==="Dónde fichar");if(r){r.title="Jugadores anunciados ahora en el mercado, ajustados a las posiciones que necesitas y a tu capacidad económica.";let o=[...r.querySelectorAll(".bwo-card-sub")].at(-1);o&&(o.textContent=r.querySelector("tbody tr.bwo-row")?"Pulsa Ver y pujar para ir a la tarjeta real del Mercado y abrir la puja nativa de Biwenger.":"No hay ahora mismo un jugador del mercado que encaje con tus posiciones necesarias, titularidad probable y presupuesto.")}}return bwoEnhanceRecommendationsActions(e)};

/* Motor de mejora continua: compara todo el mercado con el jugador más débil de la misma posición,
   incluso con saldo negativo o cuando todo el once es titular. */
var bwoRecommendationUpgradeBusy=!1,bwoRecommendationUpgradeCache=null,bwoRecommendationUpgradeAt=0,bwoRecommendationUpgradeJPAt=0;
function bwoRecMean(e){let t=e.filter(Number.isFinite);return t.length?t.reduce((n,r)=>n+r,0)/t.length:null}
function bwoRecStd(e){let t=bwoRecMean(e);return t==null?null:Math.sqrt(e.reduce((n,r)=>n+(r-t)**2,0)/e.length)}
function bwoRecReportPoints(e,t,n){let r=e?.points?.[t];return r!=null&&Number.isFinite(Number(r))?Number(r):n?Sg(n,e?.rawStats??{}):null}
function bwoRecMoneyShort(e){let t=Math.abs(Number(e)||0);return`${e<0?"−":""}${t>=1e6?`${(t/1e6).toFixed(t>=1e7?1:2)} M€`:`${Math.round(t/1e3).toLocaleString("es-ES")} k€`}`}
function bwoRecConsensus(e,t){let n=e?.prob??50;return t?.probability!=null?Math.round(n*.58+t.probability*.42):Math.round(n)}
function bwoRecJPBonus(e){if(!e)return 0;let t=0;return e.form==="racha alta"&&(t+=.65),e.form==="racha baja"&&(t-=.75),/capitan|ariete/.test(e.pick??"")&&(t+=.45),/riesgo|pufo/.test(e.pick??"")&&(t-=.65),/lesion|sancion/.test(bwoRoundNativeText(e.status))&&(t-=4),t}
function bwoRecScore(e,t){let n=bwoRecConsensus(e.probability,t),r=e.recentAverage??e.seasonAverage??0,o=e.seasonAverage??e.recentAverage??0,a=e.recentAverage==null?o:e.seasonAverage==null?r:r*.62+o*.38,i=e.match?.difficulty==null?1:e.match.difficulty<=40?1.09:e.match.difficulty<=60?1:e.match.difficulty<=75?.92:.85,l=e.match?.home?1.035:.985,s=e.physical.unavailable?0:e.physical.key==="risk"?.82:1,u=(.32+.68*Math.max(0,Math.min(100,n))/100)*i*l*s,c=Math.max(0,a*u+bwoRecJPBonus(t)),f=e.recentPoints.length>=2?bwoRecStd(e.recentPoints):null;return{...e,jp:t??null,probabilityConsensus:n,baseAverage:a,projected:c,consistency:f==null?null:Math.max(0,10-f),rating:c+(e.priceChange>0?.12:e.priceChange<0?-.08:0)}}
async function bwoRecProfile(e,t,n,r,o,a){let i=bwoCatalogPlayer(t,e);if(!i)return null;let[l,s,u]=await Promise.all([pe(e).catch(()=>null),Et(e).catch(()=>null),ft(e).catch(()=>[])]),c=[...u].sort((w,m)=>Date.parse(m.date)-Date.parse(w.date)),f=c.map(w=>bwoRecReportPoints(w,n,r)).filter(Number.isFinite),g=f.slice(0,5),b=bwoRecMean(g),p=bn(i,n,c,r),y=bwoRoundPhysical(i,o.get(String(e)),l);return{id:String(e),catalog:i,name:i.name,position:String(i.position),teamId:String(i.team_id??""),teamName:i.team_name??"",price:Number(i.price??0),priceChange:Number(i.price_increment??0),physical:y,probability:bwoRoundProbability(l,s),match:a.get(String(i.team_id))??{opponentName:"Rival por confirmar",home:!1,date:null,state:"upcoming",stateLabel:"Pendiente",difficulty:null},recentPoints:g,recentAverage:b,seasonAverage:p,games:f.length}}
async function bwoRecBuildData(e=!1){if(!e&&bwoRecommendationUpgradeCache&&Date.now()-bwoRecommendationUpgradeAt<3e4)return bwoRecommendationUpgradeCache;let[t,n,r,o,a,i,l,s,u,c]=await Promise.all([H(),bwoFetchLiveMarket(e).catch(()=>null),gn().catch(()=>[]),vn().catch(()=>[]),Lr().catch(()=>[]),hn().catch(()=>[]),pn().catch(()=>null),Oe().catch(()=>null),yn().catch(()=>null),xf().catch(()=>[])]),f=bwoMarketListings(n,t,[]),g=new Set((a??[]).map(String)),b=f.filter(I=>!g.has(String(I.id))&&bwoCatalogPlayer(t,String(I.id))),p=((r?.length?r:o)??[]).map(String),y=new Set([...p,...b.map(I=>String(I.id))]),w=bwoRoundInjuries(c),m=[...new Set([...y].map(I=>bwoCatalogPlayer(t,I)?.team_id).filter(Boolean).map(String))],d=await bwoRoundMatches(t,m).catch(()=>new Map),v=await bwoRoundMapLimit([...y],4,I=>bwoRecProfile(String(I),t,s,u,w,d)),S=new Map(v.filter(Boolean).map(I=>[I.id,I])),x=p.map(I=>S.get(I)).filter(Boolean),C=b.map(I=>{let M=S.get(String(I.id));return M?{...M,price:Number(I.price??M.price)}:null}).filter(Boolean),N=(i??[]).find(I=>String(I.id)===String(l))??{balance:0,maxBid:0},_={catalog:t,scoreId:s,formula:u,balance:Number(N.balance??0),maxBid:Number(N.maxBid??0),own:x,candidates:C,listings:b,jp:new Map};bwoRecommendationUpgradeCache=_,bwoRecommendationUpgradeAt=Date.now();return _}
function bwoRecRows(e,t){let n=e.own.map(a=>bwoRecScore(a,t.get(a.id))),r=e.candidates.map(a=>bwoRecScore(a,t.get(a.id))),o=r.map(a=>{let i=n.filter(l=>l.position===a.position).sort((l,s)=>l.rating-s.rating)[0]??null,u=i?a.rating-i.rating:null,c=a.price<=e.maxBid,f=c?e.balance<0?"Pujable por puja máx.":"Pujable ahora":`Faltan ${bwoRecMoneyShort(a.price-e.maxBid)}`,g=u==null?"Refuerzo":u>=1.5?"Mejora clara":u>=.35?"Mejora posible":"Seguimiento";return{...a,out:i,gain:u,affordable:c,economy:f,verdict:g}});return o.sort((a,i)=>(i.gain??-99)-(a.gain??-99)||i.rating-a.rating||a.price-i.price)}
function bwoRecSources(){let e=bwoBidsNode("div","bwo-rec-sources"),t=bwoBidsNode("span",null,"Datos y contraste:");e.appendChild(t);for(let[n,r]of[["Biwenger · Media AS + SofaScore","https://biwenger.as.com/blog/guias/sistemas-de-puntuacion/"],["SofaScore","https://www.sofascore.com/football/tournament/spain/laliga/8"],["FutbolFantasy","https://www.futbolfantasy.com/"],["Comuniate","https://www.comuniate.com/estadisticas/jugadores"],["Jornada Perfecta","https://www.jornadaperfecta.com/onces-posibles/"],["Analítica Fantasy","https://www.analiticafantasy.com/la-liga/alineaciones-probables"]]){let o=bwoBidsNode("a",null,n);o.href=r,o.target="_blank",o.rel="noopener noreferrer",e.appendChild(o)}return e}
function bwoRecEnsureUpgradeStyles(){if(zv.querySelector("#bwo-rec-upgrade-styles"))return;let e=document.createElement("style");e.id="bwo-rec-upgrade-styles",e.textContent=`
 .bwo-rec-upgrade{grid-column:1/-1;padding:16px!important;border-color:rgba(95,203,114,.25)!important;background:linear-gradient(145deg,rgba(25,29,34,.98),rgba(14,16,20,.98))!important}.bwo-rec-upgrade-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.bwo-rec-upgrade-head h3{margin:0;color:#fff;font-size:18px;line-height:1.25}.bwo-rec-upgrade-head p{max-width:920px;margin:6px 0 0;color:var(--bwo-muted);font-size:12px;line-height:1.55}.bwo-rec-refresh{padding:8px 12px;border:1px solid rgba(255,255,255,.14);border-radius:8px;color:#fff;background:#252830;cursor:pointer;font:800 11px/1.2 var(--bwo-font-body)}
 .bwo-rec-kpis{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:9px;margin:14px 0}.bwo-rec-kpi{padding:11px 12px;border:1px solid rgba(255,255,255,.075);border-radius:9px;background:rgba(0,0,0,.18)}.bwo-rec-kpi span{display:block;color:var(--bwo-muted);font-size:9px;font-weight:900;letter-spacing:.06em;text-transform:uppercase}.bwo-rec-kpi strong{display:block;margin-top:4px;color:#fff;font-size:15px;line-height:1.2}.bwo-rec-kpi.good strong{color:var(--bwo-green)}.bwo-rec-kpi.bad strong{color:var(--bwo-coral)}
 .bwo-rec-sources{display:flex;align-items:center;flex-wrap:wrap;gap:7px;margin:0 0 13px;color:var(--bwo-muted);font-size:10px}.bwo-rec-sources span{font-weight:800}.bwo-rec-sources a{padding:4px 8px;border:1px solid rgba(255,255,255,.09);border-radius:999px;color:#b9c6df;text-decoration:none}.bwo-rec-sources a:hover{border-color:rgba(224,20,44,.55);color:#fff}.bwo-rec-upgrade-wrap{overflow-x:auto;overflow-y:hidden;border:1px solid rgba(255,255,255,.08);border-radius:10px}.bwo-rec-upgrade-table{width:100%;min-width:1280px;border-collapse:collapse;table-layout:fixed}.bwo-rec-upgrade-table th{padding:10px 11px;background:#1d2025;color:#aeb5c2;font-size:9px;line-height:1.25;letter-spacing:.055em;text-align:left;text-transform:uppercase;white-space:normal}.bwo-rec-upgrade-table td{padding:11px;border-top:1px solid rgba(255,255,255,.065);color:#e1e4e9;font-size:12px;line-height:1.35;vertical-align:middle}.bwo-rec-upgrade-table tbody tr{min-height:58px}.bwo-rec-upgrade-table tr:hover{background:rgba(255,255,255,.035)}.bwo-rec-upgrade-table th:nth-child(1),.bwo-rec-upgrade-table td:nth-child(1){width:18%}.bwo-rec-upgrade-table th:nth-child(2),.bwo-rec-upgrade-table td:nth-child(2){width:13%}.bwo-rec-upgrade-table th:nth-child(3),.bwo-rec-upgrade-table td:nth-child(3){width:15%}.bwo-rec-upgrade-table th:nth-child(4),.bwo-rec-upgrade-table td:nth-child(4){width:6%}.bwo-rec-upgrade-table th:nth-child(5),.bwo-rec-upgrade-table td:nth-child(5){width:12%}.bwo-rec-upgrade-table th:nth-child(6),.bwo-rec-upgrade-table td:nth-child(6){width:7%}.bwo-rec-upgrade-table th:nth-child(7),.bwo-rec-upgrade-table td:nth-child(7){width:7%}.bwo-rec-upgrade-table th:nth-child(8),.bwo-rec-upgrade-table td:nth-child(8){width:12%}.bwo-rec-upgrade-table th:nth-child(9),.bwo-rec-upgrade-table td:nth-child(9){width:10%}
 .bwo-rec-player{display:flex;align-items:center;gap:10px;min-width:0;cursor:pointer}.bwo-rec-player img{flex:0 0 auto;width:38px;height:38px;border-radius:50%;object-fit:cover;background:#202227}.bwo-rec-player strong{display:block;color:#fff;font-size:13px;line-height:1.25}.bwo-rec-player small,.bwo-rec-cell-sub{display:block;margin-top:3px;color:#aeb5c2;font-size:9px;line-height:1.35}.bwo-rec-verdict,.bwo-rec-economy{display:inline-flex;padding:4px 7px;border-radius:999px;font-size:9px;line-height:1.25;font-weight:900;white-space:nowrap}.bwo-rec-verdict.clear,.bwo-rec-economy.ok{color:#9beaab;background:rgba(95,203,114,.13)}.bwo-rec-verdict.maybe{color:#f0cf82;background:rgba(216,166,70,.14)}.bwo-rec-verdict.watch,.bwo-rec-economy.no{color:#ff9b8b;background:rgba(226,102,75,.13)}.bwo-rec-gain{color:var(--bwo-green);font-weight:900}.bwo-rec-form{font-variant-numeric:tabular-nums;white-space:nowrap}.bwo-rec-form b{display:inline-block;min-width:22px;margin-right:3px;padding:3px 4px;border-radius:5px;background:#292e38;color:#fff;text-align:center}.bwo-rec-upgrade-action{padding:8px 10px;border:1px solid rgba(95,203,114,.45);border-radius:8px;color:#9beaab;background:rgba(95,203,114,.12);cursor:pointer;font:900 10px/1.2 var(--bwo-font-body);white-space:nowrap}.bwo-rec-upgrade-foot{margin:12px 2px 0;color:var(--bwo-muted);font-size:10px;line-height:1.55}
 @media(max-width:900px){.bwo-rec-upgrade{padding:12px!important}.bwo-rec-kpis{grid-template-columns:repeat(2,minmax(0,1fr))}.bwo-rec-upgrade-head{flex-direction:column}.bwo-rec-upgrade-table{min-width:1180px}.bwo-rec-upgrade-table td{font-size:11px}}
`;zv.appendChild(e)}
function bwoRecKpi(e,t,n=""){let r=bwoBidsNode("article",`bwo-rec-kpi ${n}`.trim());return r.append(bwoBidsNode("span",null,e),bwoBidsNode("strong",null,t)),r}
function bwoRecRenderCard(e,t){bwoRecEnsureUpgradeStyles();let n=[...zv.querySelectorAll(".bwo-comp")].find(a=>(a.querySelector(".bwo-comp-name")?.textContent??"").trim()==="Recomendaciones"),r=n?.querySelector(".bwo-cards");if(!n||!r)return;let o=r.querySelector(".bwo-rec-upgrade")??bwoBidsNode("section","bwo-card bwo-card-wide bwo-rec-upgrade");o.replaceChildren();let a=bwoBidsNode("div","bwo-rec-upgrade-head"),i=bwoBidsNode("div"),l=bwoBidsNode("h3",null,"Mejoras reales del mercado"),s=bwoBidsNode("p",null,"Comparación por posición aunque todo tu once sea titular. El saldo negativo no oculta oportunidades: manda la puja máxima y se avisa si hace falta vender."),u=bwoBidsNode("button","bwo-rec-refresh","Actualizar análisis");u.type="button",u.addEventListener("click",()=>bwoRecommendationRenderUpgrade(!0)),i.append(l,s),a.append(i,u),o.appendChild(a);let c=bwoRecRows(e,t),f=c.filter(I=>(I.gain??-99)>=1.5).length,g=bwoBidsNode("div","bwo-rec-kpis");g.append(bwoRecKpi("En el mercado",String(c.length),"good"),bwoRecKpi("Mejoras claras",String(f),f?"good":""),bwoRecKpi("Saldo",bwoRecMoneyShort(e.balance),e.balance<0?"bad":"good"),bwoRecKpi("Puja máxima",bwoRecMoneyShort(e.maxBid),e.maxBid>0?"good":"bad")),o.append(g,bwoRecSources());if(c.length===0)o.appendChild(bwoBidsNode("div","bwo-no-movements","El mercado actual no contiene jugadores comparables. Pulsa Actualizar análisis después de que cambie el mercado."));else{let b=bwoBidsNode("div","bwo-rec-upgrade-wrap"),p=bwoBidsNode("table","bwo-rec-upgrade-table"),y=bwoBidsNode("thead"),w=bwoBidsNode("tr");for(let I of["Objetivo","Comparación","Forma Media AS + SofaScore","Media","Titularidad","Previsión","Precio","Economía","Acción"])w.appendChild(bwoBidsNode("th",null,I));y.appendChild(w);let m=bwoBidsNode("tbody");for(let I of c.slice(0,12)){let M=bwoBidsNode("tr"),B=bwoBidsNode("td"),E=bwoBidsNode("div","bwo-rec-player"),P=document.createElement("img");P.src=`https://cdn.biwenger.com/i/p/${I.id}.png`,P.alt="",P.addEventListener("error",()=>P.style.visibility="hidden");let T=bwoBidsNode("div"),O=bwoBidsNode("strong",null,I.name),R=bwoBidsNode("small",null,`${({1:"PT",2:"DF",3:"MC",4:"DL"})[I.position]??I.position}${I.teamName?` · ${I.teamName}`:""}`);T.append(O,R),E.append(P,T),E.addEventListener("click",()=>bwoRecommendationOpenDetail(I.catalog,I)),B.appendChild(E);let F=bwoBidsNode("td"),U=bwoBidsNode("span",`bwo-rec-verdict ${I.gain!=null&&I.gain>=1.5?"clear":I.gain!=null&&I.gain>=.35?"maybe":"watch"}`,I.verdict),k=bwoBidsNode("small","bwo-rec-cell-sub",I.out?`por ${I.out.name}${I.gain!=null?` · ${I.gain>=0?"+":""}${I.gain.toFixed(1)} pts`:""}`:"Sin rival posicional");F.append(U,k);let G=bwoBidsNode("td","bwo-rec-form");if(I.recentPoints.length)for(let Q of I.recentPoints)G.appendChild(bwoBidsNode("b",null,String(Math.round(Q))));else G.textContent="Sin jornadas";let Q=bwoBidsNode("td",null,I.baseAverage?`${I.baseAverage.toFixed(1)} pts`:"—"),Y=bwoBidsNode("td",null,`${I.probabilityConsensus}%`),J=bwoBidsNode("small","bwo-rec-cell-sub",`${I.probability.kind==="starter"?"FF titular":"FF estimado"}${I.jp?" · JP contrastado":" · JP pendiente"}`);Y.appendChild(J);let ee=bwoBidsNode("td",I.gain!=null&&I.gain>0?"bwo-rec-gain":"",`${I.projected.toFixed(1)} pts`),te=bwoBidsNode("td",null,bwoRecMoneyShort(I.price)),ne=bwoBidsNode("small","bwo-rec-cell-sub",`${I.priceChange>=0?"▲":"▼"}${bwoRecMoneyShort(Math.abs(I.priceChange))}`);te.appendChild(ne);let re=bwoBidsNode("td"),oe=bwoBidsNode("span",`bwo-rec-economy ${I.affordable?"ok":"no"}`,I.economy);re.appendChild(oe);let ae=bwoBidsNode("td"),ie=bwoBidsNode("button","bwo-rec-upgrade-action",I.affordable?"Ver y pujar":"Ver mercado");ie.type="button",ie.addEventListener("click",()=>bwoRecommendationOpenNativeBid({id:I.id,name:I.name,price:I.price,position:I.position})),ae.appendChild(ie),M.append(B,F,G,Q,Y,ee,te,re,ae),m.appendChild(M)}p.append(y,m),b.appendChild(p),o.appendChild(b)}o.appendChild(bwoBidsNode("p","bwo-rec-upgrade-foot","La forma usa hasta las 5 últimas puntuaciones del sistema activo de tu liga. La previsión pondera Media AS + SofaScore, forma reciente, titularidad FutbolFantasy, contraste Jornada Perfecta, estado y rival. Es una estimación, no garantiza puntos ni confirma una puja.")),o.parentElement||r.appendChild(o);for(let a0 of [...r.querySelectorAll(".bwo-card")]){let i0=(a0.querySelector(".bwo-card-label")?.textContent??"").trim();i0==="Dónde fichar"&&(a0.hidden=!0),i0==="Plantilla sin dudas"&&(a0.querySelector(".bwo-card-label").textContent="Titularidad cubierta",a0.querySelector(".bwo-card-value")&&(a0.querySelector(".bwo-card-value").textContent="Tu once parte como titular; aun así se analizan mejoras por forma, puntos, regularidad y calendario."))}}
async function bwoRecommendationRenderUpgrade(e=!1){let t=[...zv.querySelectorAll(".bwo-comp")].find(r=>(r.querySelector(".bwo-comp-name")?.textContent??"").trim()==="Recomendaciones");if(!t||bwoRecommendationUpgradeBusy)return;bwoRecommendationUpgradeBusy=!0;let n=t.querySelector(".bwo-rec-upgrade");n||(n=bwoBidsNode("section","bwo-card bwo-card-wide bwo-rec-upgrade"),n.appendChild(bwoBidsNode("div","bwo-no-movements","Analizando tu once y el mercado actual…")),t.querySelector(".bwo-cards")?.appendChild(n));try{let r=await bwoRecBuildData(e),o={players:[...r.own,...r.candidates]},a=bwoRoundJpData(o,e||bwoRecommendationUpgradeJPAt===0).then(i=>(bwoRecommendationUpgradeJPAt=Date.now(),i)).catch(()=>new Map),i=await Promise.race([a,new Promise(l=>setTimeout(()=>l(null),1200))]);i&&(r.jp=i),bwoRecRenderCard(r,r.jp),i||a.then(l=>{r.jp=l,bwoRecRenderCard(r,l)})}catch(r){n.replaceChildren(bwoBidsNode("div","bwo-no-movements","No se pudo completar el análisis del mercado. Recarga Biwenger y pulsa Actualizar análisis.")),console.warn("[biwtools] Error en recomendaciones avanzadas:",r)}finally{bwoRecommendationUpgradeBusy=!1}}
var bwoRecommendationRenderUpgradeCycle=bwoRecommendationRenderUpgrade;
bwoRecommendationRenderUpgrade=async function(e=!1){let t=[...zv.querySelectorAll(".bwo-comp")].find(r=>(r.querySelector(".bwo-comp-name")?.textContent??"").trim()==="Recomendaciones"),n=t?.querySelector(".bwo-rec-upgrade"),r=t?.querySelector(".bwo-comp-meta");r&&(r.textContent="Mejoras del mercado frente a tu once por puntos, forma, titularidad, calendario y economía");if(!e&&n?.dataset.bwoUpgradeReady==="1"&&Date.now()-bwoRecommendationUpgradeAt<3e4)return;await bwoRecommendationRenderUpgradeCycle(e),t?.querySelector(".bwo-rec-upgrade")?.setAttribute("data-bwo-upgrade-ready","1")};
var bwoEnhanceRecommendationsUpgradeBase=bwoEnhanceRecommendations;
bwoEnhanceRecommendations=async function(e=!1){await bwoEnhanceRecommendationsUpgradeBase(e);let t=[...zv.querySelectorAll(".bwo-comp")].find(n=>(n.querySelector(".bwo-comp-name")?.textContent??"").trim()==="Recomendaciones");if(t){let n=t.querySelector(".bwo-comp-meta");n&&(n.textContent="Comparativa completa de tu plantilla contra el mercado actual por forma, puntos Media AS + SofaScore, titularidad, calendario y precio, incluso con saldo negativo."),t.dataset.bwoSmartRecommendations="v1.5.4"}await bwoRecommendationRenderUpgrade(e)};

/* Planificador integrado de Jornada: datos oficiales + previsiones claramente identificadas. */
var bwoRoundPlannerBusy=!1,bwoRoundPlannerAt=0,bwoRoundPlannerKey="";
function bwoRoundEnsureStyles(){if(document.getElementById("bwo-round-planner-style"))return;let e=document.createElement("style");e.id="bwo-round-planner-style",e.textContent=`
  .bwo-round-planner{grid-column:1/-1;order:999;width:100%;box-sizing:border-box;margin:18px 0;padding:18px;border:1px solid rgba(255,255,255,.11);border-top:2px solid #e0142c;border-radius:16px;color:#f5f5f5;background:linear-gradient(145deg,#202227,#121315);box-shadow:0 18px 48px rgba(0,0,0,.34);font-family:"Open Sans",system-ui,sans-serif}
  .bwo-round-head{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;margin-bottom:15px}.bwo-round-kicker{display:block;margin-bottom:4px;color:#f02d49;font-size:9px;font-weight:900;letter-spacing:.12em;text-transform:uppercase}.bwo-round-title{margin:0;color:#fff;font-size:22px;line-height:1.15}.bwo-round-subtitle{margin:6px 0 0;max-width:820px;color:#a9adb6;font-size:11px;line-height:1.5}.bwo-round-head-actions{display:flex;align-items:center;gap:8px;flex:0 0 auto}.bwo-round-state,.bwo-round-refresh{padding:7px 11px;border-radius:999px;font-size:10px;font-weight:900;white-space:nowrap}.bwo-round-state.open{color:#baf3c5;border:1px solid rgba(101,212,122,.3);background:rgba(101,212,122,.1)}.bwo-round-state.partial{color:#f4d897;border:1px solid rgba(216,166,70,.32);background:rgba(216,166,70,.1)}.bwo-round-state.closed{color:#ffc0b7;border:1px solid rgba(255,128,108,.3);background:rgba(255,128,108,.1)}.bwo-round-refresh{border:1px solid rgba(255,255,255,.15);color:#fff;background:rgba(255,255,255,.055);cursor:pointer}.bwo-round-refresh:hover{border-color:#e0142c;background:rgba(224,20,44,.14)}
  .bwo-round-summary{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:9px;margin-bottom:13px}.bwo-round-summary-card{padding:11px 12px;border:1px solid rgba(255,255,255,.075);border-radius:11px;background:rgba(0,0,0,.2)}.bwo-round-summary-card span{display:block;margin-bottom:3px;color:#8f949e;font-size:8px;font-weight:900;letter-spacing:.07em;text-transform:uppercase}.bwo-round-summary-card strong{color:#fff;font-size:18px;font-variant-numeric:tabular-nums}.bwo-round-summary-card.warn strong{color:#f1c76d}.bwo-round-summary-card.bad strong{color:#ff806c}.bwo-round-summary-card.good strong{color:#65d47a}
  .bwo-round-grid{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(280px,.65fr);gap:10px;margin-bottom:13px}.bwo-round-box{padding:12px 13px;border:1px solid rgba(255,255,255,.075);border-radius:11px;background:rgba(0,0,0,.17)}.bwo-round-box-title{margin:0 0 9px;color:#fff;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.05em}.bwo-round-alerts{display:flex;flex-direction:column;gap:6px}.bwo-round-alert{display:flex;gap:8px;align-items:flex-start;padding:7px 9px;border-radius:8px;color:#d9dbe0;background:rgba(255,255,255,.035);font-size:10px;line-height:1.4}.bwo-round-alert.warn{border-left:3px solid #d8a646}.bwo-round-alert.bad{border-left:3px solid #ff806c}.bwo-round-alert.good{border-left:3px solid #65d47a}.bwo-round-coverage{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}.bwo-round-pos{padding:8px 9px;border:1px solid rgba(255,255,255,.07);border-radius:8px;background:rgba(255,255,255,.025)}.bwo-round-pos span{display:block;color:#8f949e;font-size:8px;font-weight:900;text-transform:uppercase}.bwo-round-pos strong{display:block;margin-top:2px;color:#fff;font-size:13px}.bwo-round-pos.missing{border-color:rgba(255,128,108,.25)}.bwo-round-pos.missing strong{color:#ff806c}.bwo-round-formation{grid-column:1/-1;padding-top:7px;color:#b9bdc6;font-size:10px;text-align:center}
  .bwo-round-recs{margin-bottom:13px;padding:12px 13px;border:1px solid rgba(101,212,122,.16);border-radius:11px;background:linear-gradient(135deg,rgba(101,212,122,.065),rgba(255,255,255,.018))}.bwo-round-recs-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:8px}.bwo-round-recs-title{margin:0;color:#fff;font-size:12px}.bwo-round-recs-note{color:#8f949e;font-size:9px}.bwo-round-rec-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}.bwo-round-rec{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:4px 10px;padding:9px 10px;border:1px solid rgba(255,255,255,.07);border-radius:9px;background:rgba(0,0,0,.18)}.bwo-round-rec strong{color:#fff;font-size:10px}.bwo-round-rec span{grid-column:1;color:#aeb2ba;font-size:9px;line-height:1.4}.bwo-round-rec-gain{grid-column:2;grid-row:1/span 2;align-self:center;color:#65d47a!important;font-size:11px!important;font-weight:900;white-space:nowrap}.bwo-round-rec-empty{color:#aeb2ba;font-size:10px}
  .bwo-round-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:9px}.bwo-round-filters{display:flex;gap:6px;flex-wrap:wrap}.bwo-round-filter{padding:6px 10px;border:1px solid rgba(255,255,255,.1);border-radius:999px;color:#b7bac2;background:#181a1e;cursor:pointer;font-size:9px;font-weight:800}.bwo-round-filter.active{border-color:#e0142c;color:#fff;background:#c81228}.bwo-round-search{width:min(260px,100%);padding:7px 10px;border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#fff;background:#111216;outline:none;font:600 10px/1.2 "Open Sans",system-ui,sans-serif}.bwo-round-search:focus{border-color:#e0142c}
  .bwo-round-table-wrap{overflow:auto;border:1px solid rgba(255,255,255,.08);border-radius:11px;background:#111214}.bwo-round-table{width:100%;min-width:1040px;border-collapse:collapse;table-layout:auto}.bwo-round-table th{padding:9px 10px;border-bottom:1px solid rgba(255,255,255,.1);color:#8f949e;background:#1b1d20;font-size:8px;font-weight:900;letter-spacing:.06em;text-align:left;text-transform:uppercase}.bwo-round-table td{padding:9px 10px;border-bottom:1px solid rgba(255,255,255,.06);color:#c9ccd2;font-size:10px;vertical-align:middle}.bwo-round-table tbody tr:last-child td{border-bottom:0}.bwo-round-table tbody tr:hover{background:rgba(255,255,255,.03)}.bwo-round-table tr.risk{box-shadow:inset 3px 0 #d8a646}.bwo-round-table tr.unavailable{box-shadow:inset 3px 0 #ff806c}.bwo-round-player{display:flex;align-items:center;gap:8px;min-width:150px}.bwo-round-player img{width:32px;height:32px;border-radius:50%;object-fit:cover;background:#202227}.bwo-round-player strong{display:block;color:#fff;font-size:10px}.bwo-round-player small{display:block;margin-top:2px;color:#858a94;font-size:8px}.bwo-round-position{display:inline-flex;min-width:25px;justify-content:center;padding:4px 6px;border-radius:999px;color:#fff;background:#24272d;font-size:8px;font-weight:900}.bwo-round-pill{display:inline-flex;padding:4px 7px;border-radius:999px;font-size:8px;font-weight:900;white-space:nowrap}.bwo-round-pill.ok{color:#baf3c5;background:rgba(101,212,122,.11)}.bwo-round-pill.warn{color:#f4d897;background:rgba(216,166,70,.12)}.bwo-round-pill.bad{color:#ffc0b7;background:rgba(255,128,108,.12)}.bwo-round-pill.neutral{color:#c0c4cc;background:rgba(147,144,141,.12)}.bwo-round-match{min-width:140px}.bwo-round-match strong{display:block;color:#fff;font-size:9px}.bwo-round-match small{display:block;margin-top:2px;color:#8f949e;font-size:8px}.bwo-round-points{font-weight:900;font-variant-numeric:tabular-nums;white-space:nowrap}.bwo-round-points.projected{color:#65d47a}.bwo-round-action{padding:5px 9px;border:1px solid rgba(224,20,44,.35);border-radius:7px;color:#fff;background:rgba(224,20,44,.12);cursor:pointer;font-size:8px;font-weight:900}.bwo-round-empty{padding:18px;color:#9ca1aa;text-align:center;font-size:10px}.bwo-round-foot{margin:9px 2px 0;color:#858a94;font-size:9px;line-height:1.45}
  @media(max-width:980px){.bwo-round-summary{grid-template-columns:repeat(2,minmax(0,1fr))}.bwo-round-grid{grid-template-columns:1fr}.bwo-round-rec-list{grid-template-columns:1fr}}
  @media(max-width:680px){.bwo-round-planner{padding:13px;border-radius:13px}.bwo-round-head,.bwo-round-toolbar{align-items:stretch;flex-direction:column}.bwo-round-head-actions{justify-content:space-between}.bwo-round-summary{grid-template-columns:1fr 1fr}.bwo-round-search{width:100%;box-sizing:border-box}}
`;document.head.appendChild(e)}
function bwoRoundTs(e){if(e==null||e==="")return null;let t=Number(e);if(Number.isFinite(t)&&t>0)return t<1e12?t*1e3:t;let n=Date.parse(String(e));return Number.isNaN(n)?null:n}
function bwoRoundMatchState(e,t){let n=String(e??"").toLocaleLowerCase("es");if(/final|terminad|acabado/.test(n))return"finished";if(/directo|en juego|descanso|1ª|2ª|live/.test(n))return"live";if(/aplaz|suspend/.test(n))return"postponed";if(t!=null){let r=Date.now()-t;if(r<0)return"upcoming";if(r<150*6e4)return"live";return"finished"}return"upcoming"}
function bwoRoundStateLabel(e){return e==="live"?"En juego":e==="finished"?"Finalizado":e==="postponed"?"Aplazado":"Pendiente"}
function bwoRoundTime(e){return e==null?"Horario pendiente":new Intl.DateTimeFormat("es-ES",{weekday:"short",day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(e))}
function bwoRoundCountdown(e){if(e==null)return"";let t=e-Date.now();if(t<=0)return"";let n=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5),o=Math.floor(t%36e5/6e4);return n>0?`Comienza en ${n} d ${r} h`:r>0?`Comienza en ${r} h ${o} min`:`Comienza en ${Math.max(1,o)} min`}
function bwoRoundDomMatches(e){let t=new Map,n=new Map;for(let r of e.values())r.team_id&&r.team_name&&!n.has(String(r.team_id))&&n.set(String(r.team_id),r.team_name);for(let r of document.querySelectorAll('[itemtype="https://schema.org/SportsEvent"]')){let o=o1(r);if(o.length<2)continue;let a=r.querySelector('[itemprop="startDate"]'),i=bwoRoundTs(a?.getAttribute("content")??a?.getAttribute("datetime")??r.getAttribute("startDate")??r.querySelector("time")?.getAttribute("datetime")),l=r.textContent??"",s=bwoRoundMatchState(l,i);for(let u=0;u<2;u++){let c=String(o[u]),f=String(o[1-u]);t.set(c,{opponentId:f,opponentName:n.get(f)??"Rival por confirmar",home:u===0,date:i,state:s,stateLabel:bwoRoundStateLabel(s),rawText:l})}}return t}
async function bwoRoundMatches(e,t){let n=bwoRoundDomMatches(e),r=await Sf().catch(()=>new Map),o=new Map;for(let a of t){let i=String(a),l=n.get(i),s=(r.get(i)??r.get(Number(i))??[])[0]??null,u=l?.date??bwoRoundTs(s?.date??s?.timestamp??s?.startDate??s?.start),c=l?.state??bwoRoundMatchState(s?.status,u),f={opponentId:l?.opponentId??s?.opponentTeamId??s?.opponent_id??null,opponentName:l?.opponentName??s?.opponentName??s?.opponent??"Rival por confirmar",home:l?.home??!!s?.home,date:u,state:c,stateLabel:bwoRoundStateLabel(c),difficulty:s?.difficulty??null};o.set(i,f)}return o}
function bwoRoundInjuries(e){let t=new Map;function n(r){if(!r||typeof r!=="object")return;if(Array.isArray(r)){r.forEach(n);return}let o=bwoLiveId(r),a=r.description??r.statusInfo??r.status_info??r.injury??null;(o!=null&&a)&&t.set(String(o),String(a));Object.values(r).forEach(n)}return n(e),t}
function bwoRoundPhysical(e,t,n){let r=[e?.status_info,e?.status,t,n?.lesion>=0?"parte médico":null].filter(Boolean).join(" · "),o=r.toLocaleLowerCase("es");return/sanci[oó]n|suspend/.test(o)?{key:"unavailable",label:"Sancionado",detail:r||"Sancionado",tone:"bad",unavailable:!0}:/no convoc|not called|descart/.test(o)?{key:"unavailable",label:"No convocado",detail:r||"No convocado",tone:"bad",unavailable:!0}:/lesi[oó]n|injur|baja|\bout\b|operad|fractur|rotura/.test(o)?{key:"unavailable",label:"Lesionado",detail:r||"Lesionado",tone:"bad",unavailable:!0}:/duda|doubt|molest|tocado|parte m[eé]dico/.test(o)?{key:"risk",label:"En duda",detail:r||"En duda",tone:"warn",unavailable:!1}:e?.status&&e.status!=="ok"?{key:"risk",label:e.status_info??e.status,detail:r,tone:"warn",unavailable:!1}:{key:"available",label:"Disponible",detail:"Sin incidencias oficiales",tone:"ok",unavailable:!1}}
function bwoRoundProbability(e,t){let n=e?.prob??t?.prob??null,r=n==null?null:Number(String(n).replace(/[^\d]/g,""));return Number.isFinite(r)||(r=null),e?.titular?{kind:"starter",label:`Titular${r!=null?` ${r}%`:" probable"}`,prob:r??75,tone:(r??75)>=60?"ok":"warn"}:t?{kind:"bench",label:`Suplente${r!=null?` ${r}%`:" probable"}`,prob:r??30,tone:"warn"}:{kind:"unknown",label:"Sin dato",prob:50,tone:"neutral"}}
async function bwoRoundMapLimit(e,t,n){let r=new Array(e.length),o=0;await Promise.all(Array.from({length:Math.min(t,e.length)},async()=>{for(;;){let a=o++;if(a>=e.length)return;r[a]=await n(e[a],a)}}));return r}
function bwoRoundProjected(e,t,n,r){if(e==null)return null;if(t.unavailable)return 0;let o=Math.max(.15,Math.min(1,n.prob/100)),a=r?.difficulty==null?1:r.difficulty<=40?1.1:r.difficulty<=60?1:r.difficulty<=75 ? .91 : .84,i=r?.home?1.04:.98;return Math.max(0,e*o*a*i)}
async function bwoRoundData(){let[e,t,n,r,o,a]=await Promise.all([gn(),vn(),H(),Oe(),yn(),xf().catch(()=>[])]),i=[...new Set((e.length?e:t).map(String))],l=new Set(t.map(String)),s=bwoRoundInjuries(a),u=[...new Set(i.map(c=>bwoCatalogPlayer(n,c)?.team_id).filter(Boolean).map(String))],c=await bwoRoundMatches(n,u),f=await bwoRoundMapLimit(i,4,async g=>{let b=bwoCatalogPlayer(n,g);if(!b)return null;let[p,y]=await Promise.all([pe(g).catch(()=>null),Et(g).catch(()=>null)]),w=bn(b,r,null,o);if(w==null&&$t(b,r)){let C=await ft(g).catch(()=>[]);w=bn(b,r,C,o)}let m=bwoRoundPhysical(b,s.get(String(g)),p),d=bwoRoundProbability(p,y),v=c.get(String(b.team_id))??{opponentName:"Rival por confirmar",home:!1,date:null,state:"upcoming",stateLabel:"Pendiente",difficulty:null},S=bwoRoundProjected(w,m,d,v),x=l.has(String(g));return{id:String(g),catalog:b,name:b.name,position:String(b.position),teamId:String(b.team_id??""),teamName:b.team_name??"",lineup:x,physical:m,probability:d,average:w,projected:S,match:v,risk:x&&(m.key!=="available"||d.prob<50),locked:v.state!=="upcoming"}});f=f.filter(Boolean);let g=f.filter(b=>b.lineup),b=f.filter(p=>!p.lineup),p={"1":1,"2":3,"3":3,"4":1},y={"1":0,"2":0,"3":0,"4":0};g.forEach(w=>y[w.position]=(y[w.position]??0)+1);let w=[],m=new Set;for(let d of g.filter(v=>!v.locked).sort((v,S)=>(v.physical.unavailable?0:v.probability.prob)-(S.physical.unavailable?0:S.probability.prob))){let v=b.filter(S=>!m.has(S.id)&&S.position===d.position&&!S.physical.unavailable&&!S.locked).sort((S,x)=>(x.projected??-1)-(S.projected??-1))[0],S=(v?.projected??-1)-(d.projected??-1),x=d.physical.unavailable||d.probability.prob<50;if(v&&(x||S>=1)){m.add(v.id);let C=d.physical.unavailable?`${d.name} figura como ${d.physical.label.toLocaleLowerCase("es")}.`:d.probability.prob<50?`${d.name} solo tiene ${d.probability.prob}% de titularidad probable.`:`${v.name} mejora la previsión.`;w.push({out:d,in:v,reason:C,gain:S})}}if(g.length<11){for(let d of b.filter(v=>!m.has(v.id)&&!v.physical.unavailable&&!v.locked).sort((v,S)=>(S.projected??-1)-(v.projected??-1)).slice(0,11-g.length)){m.add(d.id),w.push({out:null,in:d,reason:"El once detectado está incompleto.",gain:d.projected??null})}}let d=[...new Map(f.map(v=>[v.teamId,v.match])).values()],v=d.filter(S=>S.state==="upcoming"),S=d.filter(x=>x.state!=="upcoming"),x=S.length===0?"open":v.length>0?"partial":"closed",C=x==="open"?"Jornada abierta":x==="partial"?"Bloqueo parcial":"Jornada bloqueada",N=v.map(_=>_.date).filter(_=>_!=null&&_>Date.now()).sort((_,L)=>_-L)[0]??null;return{players:f,lineup:g,bench:b,lineupKnown:t.length>0,coverage:y,minimum:p,recommendations:w.slice(0,6),matches:d,pendingMatches:v.length,lockedMatches:S.length,state:x,stateLabel:C,nextStart:N,predicted:g.reduce((_,L)=>_+(L.projected??0),0),risks:g.filter(_=>_.risk).length,unavailable:g.filter(_=>_.physical.unavailable).length}}
function bwoRoundSummaryCard(e,t,n=""){let r=bwoBidsNode("article",`bwo-round-summary-card ${n}`.trim());return r.append(bwoBidsNode("span",null,e),bwoBidsNode("strong",null,t)),r}
function bwoRoundAlert(e,t){let n=bwoBidsNode("div",`bwo-round-alert ${e}`);return n.append(bwoBidsNode("span",null,e==="good"?"✓":e==="bad"?"!":"⚠"),bwoBidsNode("span",null,t)),n}
function bwoRoundOpenPlayer(e){window.dispatchEvent(new CustomEvent(En,{detail:{price:e.catalog.price,playerId:e.id,name:e.name,position:e.position,owned:!0}}))}
function bwoRoundRender(e,t){e.replaceChildren();let n=bwoBidsNode("div","bwo-round-head"),r=bwoBidsNode("div"),o=bwoBidsNode("span","bwo-round-kicker","Biwtools · Jornada"),a=bwoBidsNode("h2","bwo-round-title","Planificador de jornada"),i=bwoBidsNode("p","bwo-round-subtitle",`${t.lineupKnown?"Once sincronizado":"Once pendiente de sincronizar"} · ${bwoRoundCountdown(t.nextStart)||"Horarios y estado de los partidos actualizados"}`),l=bwoBidsNode("div","bwo-round-head-actions"),s=bwoBidsNode("span",`bwo-round-state ${t.state}`,t.stateLabel),u=bwoBidsNode("button","bwo-round-refresh","Actualizar");u.type="button",u.addEventListener("click",()=>bwoEnhanceRoundPlanner(!0)),r.append(o,a,i),l.append(s,u),n.append(r,l),e.appendChild(n);let c=bwoBidsNode("div","bwo-round-summary");c.append(bwoRoundSummaryCard("Alineados",`${t.lineup.length}/11`,t.lineup.length===11?"good":"warn"),bwoRoundSummaryCard("En riesgo",String(t.risks),t.risks?"warn":"good"),bwoRoundSummaryCard("Bajas",String(t.unavailable),t.unavailable?"bad":"good"),bwoRoundSummaryCard("Puntos previstos",t.lineup.length?`${t.predicted.toFixed(1)} pts`:"—","good"),bwoRoundSummaryCard("Partidos pendientes",String(t.pendingMatches),t.pendingMatches?"":"warn")),e.appendChild(c);let f=bwoBidsNode("div","bwo-round-grid"),g=bwoBidsNode("section","bwo-round-box"),b=bwoBidsNode("h3","bwo-round-box-title","Avisos del once"),p=bwoBidsNode("div","bwo-round-alerts");g.append(b,p);if(!t.lineupKnown)p.appendChild(bwoRoundAlert("warn","Abre una vez Equipo para que Biwtools sincronice tu once actual."));if(t.lineup.length!==11)p.appendChild(bwoRoundAlert("bad",`Se han detectado ${t.lineup.length} jugadores alineados; revisa que el once esté completo.`));for(let y of t.lineup.filter(w=>w.physical.key!=="available").slice(0,4))p.appendChild(bwoRoundAlert(y.physical.unavailable?"bad":"warn",`${y.name}: ${y.physical.detail||y.physical.label}.`));let y=t.lineup.filter(w=>w.locked);y.length&&p.appendChild(bwoRoundAlert("warn",`${y.length} jugador${y.length===1?" tiene":"es tienen"} el partido iniciado o finalizado y puede${y.length===1?"":"n"} estar bloqueado${y.length===1?"":"s"}.`));p.children.length===0&&p.appendChild(bwoRoundAlert("good","No se detectan incidencias importantes en el once actual."));let w=bwoBidsNode("section","bwo-round-box"),m=bwoBidsNode("h3","bwo-round-box-title","Cobertura y formación"),d=bwoBidsNode("div","bwo-round-coverage"),v={"1":"Porteros","2":"Defensas","3":"Centrocampistas","4":"Delanteros"};for(let S of["1","2","3","4"]){let x=t.coverage[S]??0,C=bwoBidsNode("div",`bwo-round-pos${x<t.minimum[S]?" missing":""}`);C.append(bwoBidsNode("span",null,v[S]),bwoBidsNode("strong",null,`${x} · mínimo ${t.minimum[S]}`)),d.appendChild(C)}d.appendChild(bwoBidsNode("div","bwo-round-formation",`Formación detectada: ${t.coverage["1"]}-${t.coverage["2"]}-${t.coverage["3"]}-${t.coverage["4"]}`)),w.append(m,d),f.append(g,w),e.appendChild(f);let S=bwoBidsNode("section","bwo-round-recs"),x=bwoBidsNode("div","bwo-round-recs-head"),C=bwoBidsNode("h3","bwo-round-recs-title","Cambios recomendados"),N=bwoBidsNode("span","bwo-round-recs-note","Estimación: media, titularidad, estado y dificultad"),_=bwoBidsNode("div","bwo-round-rec-list");x.append(C,N),S.append(x,_);if(t.recommendations.length)for(let L of t.recommendations){let I=bwoBidsNode("article","bwo-round-rec"),M=L.out?`${L.out.name} → ${L.in.name}`:`Añadir a ${L.in.name}`,B=bwoBidsNode("strong",null,M),E=bwoBidsNode("span",null,L.reason),P=bwoBidsNode("span","bwo-round-rec-gain",L.gain!=null&&L.gain>0?`+${L.gain.toFixed(1)} pts`:"Mejora seguridad");I.append(B,E,P),I.addEventListener("click",()=>bwoRoundOpenPlayer(L.in)),I.style.cursor="pointer",_.appendChild(I)}else _.appendChild(bwoBidsNode("div","bwo-round-rec-empty",t.lineupKnown?"No se detecta ahora mismo un cambio claramente superior entre tus suplentes disponibles.":"Sincroniza el once para calcular sustituciones concretas."));e.appendChild(S);let L=bwoBidsNode("div","bwo-round-toolbar"),I=bwoBidsNode("div","bwo-round-filters"),M=[["all","Todos"],["lineup","Mi once"],["available","Disponibles"],["risk","En riesgo"],["pending","Partidos pendientes"]],B="all";for(let[te,ne]of M){let re=bwoBidsNode("button",`bwo-round-filter${te==="all"?" active":""}`,ne);re.type="button",re.dataset.filter=te,re.addEventListener("click",()=>{B=te,I.querySelectorAll("button").forEach(oe=>oe.classList.toggle("active",oe===re)),Z()}),I.appendChild(re)}let E=bwoBidsNode("input","bwo-round-search");E.type="search",E.placeholder="Buscar jugador, equipo o rival…",E.setAttribute("aria-label","Buscar en el planificador de jornada"),E.addEventListener("input",()=>Z()),L.append(I,E),e.appendChild(L);let P=bwoBidsNode("div","bwo-round-table-wrap"),T=bwoBidsNode("table","bwo-round-table"),O=bwoBidsNode("thead"),R=bwoBidsNode("tr");for(let te of["Jugador","Pos.","Partido","Hora","Estado","Titularidad","Media","Previsión","Acción"])R.appendChild(bwoBidsNode("th",null,te));O.appendChild(R);let F=bwoBidsNode("tbody");for(let te of [...t.players].sort((ne,re)=>Number(re.lineup)-Number(ne.lineup)||Number(ne.position)-Number(re.position)||(re.projected??-1)-(ne.projected??-1))){let ne=bwoBidsNode("tr",te.physical.unavailable?"unavailable":te.risk?"risk":"");ne.dataset.lineup=String(te.lineup),ne.dataset.available=String(!te.physical.unavailable),ne.dataset.risk=String(te.risk),ne.dataset.pending=String(te.match.state==="upcoming"),ne.dataset.search=`${te.name} ${te.teamName} ${te.match.opponentName}`.toLocaleLowerCase("es");let re=bwoBidsNode("td"),oe=bwoBidsNode("div","bwo-round-player"),ae=document.createElement("img");ae.src=`https://cdn.biwenger.com/i/p/${te.id}.png`,ae.alt="",ae.addEventListener("error",()=>ae.style.visibility="hidden");let ie=bwoBidsNode("div"),zt=bwoBidsNode("strong",null,te.name),gt=bwoBidsNode("small",null,`${te.lineup?"Mi once":"Banquillo"}${te.teamName?` · ${te.teamName}`:""}`);ie.append(zt,gt),oe.append(ae,ie),re.appendChild(oe);let kn=bwoBidsNode("td"),Ce=bwoBidsNode("span","bwo-round-position",({"1":"PT","2":"DF","3":"MC","4":"DL"})[te.position]??te.position);kn.appendChild(Ce);let Dr=bwoBidsNode("td"),ty=bwoBidsNode("div","bwo-round-match"),ny=bwoBidsNode("strong",null,`${te.match.home?"vs":"@"} ${te.match.opponentName}`),ry=bwoBidsNode("small",null,te.match.stateLabel);ty.append(ny,ry),Dr.appendChild(ty);let oy=bwoBidsNode("td","bwo-bids-date",bwoRoundTime(te.match.date)),he=bwoBidsNode("td"),ue=bwoBidsNode("span",`bwo-round-pill ${te.physical.tone}`,te.physical.label);ue.title=te.physical.detail,he.appendChild(ue);let at=bwoBidsNode("td"),vt=bwoBidsNode("span",`bwo-round-pill ${te.probability.tone}`,te.probability.label);at.appendChild(vt);let Ec=bwoBidsNode("td","bwo-round-points",te.average==null?"—":`${te.average.toFixed(1)} pts`),Uv=bwoBidsNode("td","bwo-round-points projected",te.projected==null?"—":`${te.projected.toFixed(1)} pts`),Jo=bwoBidsNode("td"),kc=bwoBidsNode("button","bwo-round-action","Ver");kc.type="button",kc.addEventListener("click",()=>bwoRoundOpenPlayer(te)),Jo.appendChild(kc),ne.append(re,kn,Dr,oy,he,at,Ec,Uv,Jo),F.appendChild(ne)}T.append(O,F),P.appendChild(T),e.appendChild(P);let U=bwoBidsNode("div","bwo-round-empty","No hay jugadores que coincidan con este filtro.");U.hidden=!0,e.appendChild(U),e.appendChild(bwoBidsNode("p","bwo-round-foot","Los horarios, estados físicos y partidos son datos informativos disponibles en Biwenger/Biwtools. Media y previsión son estimaciones: la previsión pondera media histórica, probabilidad de titularidad, estado físico, localía y dificultad; no garantiza puntos."));function Z(){let te=E.value.trim().toLocaleLowerCase("es"),ne=0;for(let re of F.children){let oe=B==="all"||B==="lineup"&&re.dataset.lineup==="true"||B==="available"&&re.dataset.available==="true"||B==="risk"&&re.dataset.risk==="true"||B==="pending"&&re.dataset.pending==="true",ae=!te||re.dataset.search.includes(te);re.hidden=!(oe&&ae),re.hidden||ne++}U.hidden=ne>0,P.hidden=ne===0}}
async function bwoEnhanceRoundPlanner(e=!1){if(!location.pathname.includes("/round")){document.querySelectorAll(".bwo-round-planner").forEach(n=>n.remove());return}if(bwoToolsPageWanted)return;let t=document.querySelector("main.container")??document.querySelector("main");if(!t)return;let n=t.querySelector(":scope > .bwo-round-planner"),r=`${ke()}|${location.pathname}`;if(!e&&n&&r===bwoRoundPlannerKey&&Date.now()-bwoRoundPlannerAt<45e3)return;if(bwoRoundPlannerBusy)return;bwoRoundPlannerBusy=!0,bwoRoundEnsureStyles(),n||(n=bwoBidsNode("section","bwo-round-planner"),n.setAttribute("aria-label","Planificador de jornada de Biwtools"),t.prepend(n)),n.replaceChildren(bwoBidsNode("div","bwo-round-empty","Preparando plantilla, partidos y previsiones…"));try{let o=await bwoRoundData();if(n.isConnected)bwoRoundRender(n,o),bwoRoundPlannerKey=r,bwoRoundPlannerAt=Date.now()}catch(o){n.isConnected&&(n.replaceChildren(bwoBidsNode("div","bwo-round-empty","No se pudo preparar el planificador. Visita primero Equipo para sincronizar tu plantilla y vuelve a Jornada.")),console.warn("[biwtools] Error en el planificador de jornada:",o))}finally{bwoRoundPlannerBusy=!1}}
/* Jornada nativa: enriquece los jugadores y la cabecera existentes sin crear paneles propios. */
var bwoRoundNativeDataCache=null,bwoRoundNativeDataAt=0,bwoRoundNativeDataKey="",bwoRoundNativeBusy=!1,bwoRoundJpMemory=null,bwoRoundJpAt=0;
function bwoRoundNativeEnsureStyles(){if(document.getElementById("bwo-round-native-styles"))return;let e=document.createElement("style");e.id="bwo-round-native-styles",e.textContent=`
  .bwo-round-planner{display:none!important}
  .bwo-round-native-badge{display:inline-flex;align-items:center;justify-content:center;margin-left:4px;padding:1px 5px;border:1px solid rgba(255,255,255,.3);border-radius:999px;color:#fff;background:#26292f;box-shadow:0 2px 6px rgba(0,0,0,.38);font:800 9px/1.35 "Open Sans",system-ui,sans-serif;vertical-align:middle;white-space:nowrap;pointer-events:none}
  .bwo-round-native-badge.good{border-color:rgba(101,212,122,.65);color:#8bea9d;background:#12331d}
  .bwo-round-native-badge.warn{border-color:rgba(241,185,55,.78);color:#ffd66f;background:#3b2c0e}
  .bwo-round-native-badge.bad{border-color:rgba(255,78,68,.8);color:#ff9a91;background:#421514}
  .bwo-round-native-badge.recommended{border-color:rgba(73,168,255,.75);color:#9ed4ff;background:#102c44}
  .bwo-round-native-badge.jp{border-color:rgba(171,119,255,.7);color:#dfc7ff;background:#281943}
  .bwo-round-native-badge.neutral{border-color:rgba(160,170,188,.52);color:#d5dae3;background:#252932}
  .bwo-round-native-info{pointer-events:auto;cursor:help}
  .bwo-round-native-summary{display:block;margin:3px auto 0;color:#aeb4be;font:700 9px/1.35 "Open Sans",system-ui,sans-serif;text-align:center;white-space:normal}
  .bwo-round-native-summary strong{color:#65d47a;font-weight:900}
  .bwo-round-native-summary a{margin-left:4px;color:#c9a7ff;text-decoration:none}
  .bwo-round-native-summary a:hover{text-decoration:underline}
  .bwo-round-native-risk{filter:drop-shadow(0 0 5px rgba(241,185,55,.38))}
  .bwo-round-native-unavailable{filter:drop-shadow(0 0 6px rgba(255,68,58,.48))}
  .bwo-round-native-player{position:relative}
  .bwo-round-native-player:hover::after{content:attr(data-bwo-round-tip);position:absolute;z-index:2147483000;left:50%;bottom:calc(100% + 8px);width:270px;max-width:70vw;box-sizing:border-box;transform:translateX(-50%);padding:8px 10px;border:1px solid rgba(255,255,255,.17);border-radius:8px;color:#f5f5f5;background:rgba(14,15,18,.97);box-shadow:0 10px 26px rgba(0,0,0,.58);font:600 10px/1.45 "Open Sans",system-ui,sans-serif;text-align:left;white-space:normal;pointer-events:none}
  .bwo-round-native-player:hover::after{display:none!important}
  .bwo-round-native-popover{position:fixed;z-index:2147483646;width:350px;max-width:calc(100vw - 16px);box-sizing:border-box;padding:13px;border:1px solid rgba(255,255,255,.16);border-top:2px solid #e0142c;border-radius:12px;color:#f5f5f5;background:linear-gradient(145deg,#22242a,#111216);box-shadow:0 18px 48px rgba(0,0,0,.68);font-family:"Open Sans",system-ui,sans-serif}
  .bwo-round-native-popover[hidden]{display:none}
  .bwo-round-pop-head{display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:10px}
  .bwo-round-pop-head h3{margin:0;color:#fff;font-size:15px;line-height:1.2}
  .bwo-round-pop-head small{display:block;margin-top:2px;color:#939aa6;font-size:9px}
  .bwo-round-pop-close{width:25px;height:25px;padding:0;border:1px solid rgba(255,255,255,.14);border-radius:50%;color:#fff;background:#252830;cursor:pointer;font-size:13px}
  .bwo-round-pop-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px}
  .bwo-round-pop-cell{min-width:0;padding:7px 8px;border:1px solid rgba(255,255,255,.08);border-radius:7px;background:rgba(255,255,255,.035)}
  .bwo-round-pop-cell span{display:block;color:#8f96a3;font-size:8px;font-weight:800;letter-spacing:.04em;text-transform:uppercase}
  .bwo-round-pop-cell strong{display:block;margin-top:2px;color:#fff;font-size:10px;line-height:1.3;overflow-wrap:anywhere}
  .bwo-round-pop-cell.good strong{color:#76df8b}.bwo-round-pop-cell.warn strong{color:#ffd36a}.bwo-round-pop-cell.bad strong{color:#ff9188}.bwo-round-pop-cell.jp strong{color:#d7b9ff}
  .bwo-round-pop-rec{margin-top:8px;padding:8px 9px;border-left:2px solid #e0142c;border-radius:5px;color:#dfe3ea;background:rgba(224,20,44,.08);font-size:9px;line-height:1.45}
  .bwo-round-pop-foot{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:9px;color:#858c98;font-size:8px}
  .bwo-round-pop-foot a{color:#c9a7ff;text-decoration:none}.bwo-round-pop-foot a:hover{text-decoration:underline}
  @media(max-width:680px){.bwo-round-native-badge{margin-left:2px;padding:1px 4px;font-size:8px}.bwo-round-native-summary{font-size:8px}}
`;document.head.appendChild(e)}
function bwoRoundNativeText(e){return String(e??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim().toLocaleLowerCase("es")}
function bwoRoundNativeCleanup(){document.querySelectorAll(".bwo-round-planner,.bwo-round-native-badge,.bwo-round-native-summary,.bwo-round-native-popover").forEach(e=>e.remove());document.querySelectorAll(".bwo-round-native-risk,.bwo-round-native-unavailable,.bwo-round-native-player").forEach(e=>{e.classList.remove("bwo-round-native-risk","bwo-round-native-unavailable","bwo-round-native-player"),e.removeAttribute("data-bwo-round-tip"),delete e.__bwoRoundNativeInfo})}
function bwoRoundNativeNameNodes(e,t){let n=bwoRoundNativeText(t),r=[],o=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode:a=>{let i=a.parentElement;if(!i||i.closest(".bwo-round-native-badge,.bwo-round-native-summary,.bwo-tools-page-host")||bwoRoundNativeText(a.nodeValue)!==n)return NodeFilter.FILTER_REJECT;let l=i.getBoundingClientRect();return l.width>0&&l.height>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});for(let a;a=o.nextNode();)r.push(a.parentElement);return[...new Set(r)]}
function bwoRoundNativeHost(e){let t=e.closest("lineup-player,[class*='lineup-player'],[class*='football-player'],[class*='player-slot'],player-card,button,a");if(t){let n=t.getBoundingClientRect();if(n.width<=220&&n.height<=180)return t}return e.parentElement??e}
function bwoRoundJpProxy(e){return`https://r.jina.ai/http://${String(e).replace(/^https?:\/\//,"")}`}
async function bwoRoundJpText(e){let t=new AbortController,n=setTimeout(()=>t.abort(),18e3);try{let r=await fetch(bwoRoundJpProxy(e),{headers:{Accept:"text/plain"},credentials:"omit",cache:"no-store",signal:t.signal});if(!r.ok)throw new Error(`Jornada Perfecta ${r.status}`);return await r.text()}finally{clearTimeout(n)}}
function bwoRoundJpParseMatch(e,t,n){let r=new Map,o=(e.match(/^Title:\s*(.+?)\s*\|/m)?.[1]??"Partido").trim();for(let a of t){let i=`/i/p/${a}.png`,l=0,s={id:String(a),source:n,match:o,expected:!1,probability:null,status:null,pick:null,form:null};for(;;){let u=e.indexOf(i,l);if(u<0)break;l=u+i.length;let c0=Math.max(0,e.lastIndexOf("[![Image",u)),c1=e.indexOf("](https://www.jornadaperfecta.com/jugador/",u),c=e.slice(c0,c1>u?e.indexOf(")",c1)+1:Math.min(e.length,u+i.length+160)),f=e.indexOf(" Titular  Suplente",u),g=f>u&&f-u<4800&&!e.slice(u,f).includes("picks jornada perfecta")&&!e.slice(u,f).includes("no disponibles");g&&(s.expected=!0);let b=e.slice(u+i.length,Math.min(e.length,u+i.length+35)).match(/^\)\s*(\d{1,3})(?:\]|\s)/);b&&(s.probability=Math.max(0,Math.min(100,Number(b[1]))));let p=c.match(/\b(Lesionado|Sancionado|Duda(?:\s+próximo partido)?|Apercibido|Disponible en observación)\b/i);p&&(s.status=p[1]);let y=c.match(/\b(capitan|ariete|joker|riesgo|pufo)\b/i);y&&(s.pick=y[1].toLocaleLowerCase("es"));c.includes("🔥")?s.form="racha alta":c.includes("⛈️")&&(s.form="racha baja")}if(s.expected||s.status||s.pick||s.form)r.set(String(a),s)}return r}
async function bwoRoundJpData(e,t=!1){let n=Date.now(),r="bwo-round-jp-v1";if(!t&&bwoRoundJpMemory&&n-bwoRoundJpAt<9e5)return bwoRoundJpMemory;if(!t)try{let o=JSON.parse(localStorage.getItem(r)??"null");if(o&&n-o.at<9e5&&o.players){bwoRoundJpMemory=new Map(Object.entries(o.players)),bwoRoundJpAt=o.at;return bwoRoundJpMemory}}catch{}let o=await bwoRoundJpText("https://www.jornadaperfecta.com/onces-posibles/"),a=[...new Set([...o.matchAll(/https?:\/\/(?:www\.)?jornadaperfecta\.com\/partido\/\d+\/[a-z0-9-]+/gi)].map(i=>i[0].replace(/^http:/,"https:")))].slice(0,12),i=new Set(e.players.map(l=>String(l.id))),l=await bwoRoundMapLimit(a,3,async s=>{try{return{url:s,text:await bwoRoundJpText(s)}}catch{return null}}),s=new Map;for(let u of l.filter(Boolean))for(let[c,f]of bwoRoundJpParseMatch(u.text,i,u.url)){let g=s.get(c);(!g||f.status||f.expected&&!g.expected)&&s.set(c,f)}bwoRoundJpMemory=s,bwoRoundJpAt=n;try{localStorage.setItem(r,JSON.stringify({at:n,players:Object.fromEntries(s)}))}catch{}return s}
function bwoRoundJpLabel(e){if(!e)return null;let t=bwoRoundNativeText(e.status),n=/lesion|sancion/.test(t)?"bad":/duda/.test(t)||e.pick==="riesgo"||e.pick==="pufo"||e.form==="racha baja"?"warn":"jp",r=/lesion|sancion/.test(t)?"JP baja":/duda/.test(t)?"JP duda":e.probability!=null?`JP ${e.probability}%`:e.pick?`JP ${e.pick}`:e.expected?"JP ✓":e.form==="racha alta"?"JP 🔥":"JP";return{tone:n,label:r}}
function bwoRoundNativeTip(e,t,n){let r=n?[`Jornada Perfecta: ${n.status??(n.expected?"alineación probable":"jugador analizado")}`,n.probability!=null?`${n.probability}% en la alternativa mostrada`:null,n.pick?`pick: ${n.pick}`:null,n.form?`forma: ${n.form}`:null,n.match]:[],o=[`Previsión Biwtools ${e.projected==null?"sin datos":`${e.projected.toFixed(1)} pts`}`,e.average==null?null:`Media ${e.average.toFixed(1)} pts`,e.probability?.label,e.physical?.detail||e.physical?.label,`${e.match?.home?"vs":"@"} ${e.match?.opponentName??"Rival por confirmar"}`,bwoRoundTime(e.match?.date),e.match?.stateLabel,...r,t].filter(Boolean);return o.join(" · ")}
function bwoRoundNativeRender(e){bwoRoundNativeCleanup(),bwoRoundNativeEnsureStyles();let t=document.querySelector("main.container")??document.querySelector("main");if(!t)return;let n=new Map,r=new Map;for(let o of e.recommendations){o.out&&n.set(String(o.out.id),o),r.set(String(o.in.id),o)}for(let o of e.players){let a=n.get(String(o.id)),i=r.get(String(o.id)),l=e.jp?.get(String(o.id))??null,s=bwoRoundJpLabel(l),u=o.physical.unavailable||/lesion|sancion/.test(bwoRoundNativeText(l?.status)),c=u?"bad":o.risk||s?.tone==="warn"?"warn":i?"recommended":"good",f=u?"!":o.risk?"⚠":i?"↑":"",g=o.projected==null?"—":`${o.projected.toFixed(1)}p`,b=a?`Cambio sugerido: ${a.out.name} → ${a.in.name}${a.gain!=null&&a.gain>0?` (+${a.gain.toFixed(1)} pts)`:""}. ${a.reason}`:i?`Entrada recomendada${i.out?` por ${i.out.name}`:""}. ${i.reason}`:null,p=bwoRoundNativeTip(o,b,l);for(let y of bwoRoundNativeNameNodes(t,o.name)){if(y.querySelector(":scope > .bwo-round-native-badge"))continue;let w=bwoBidsNode("span",`bwo-round-native-badge ${c}`,`${f}${f?" ":""}${g}`);w.title=p,w.setAttribute("aria-label",p),y.appendChild(w);if(s){let m=bwoBidsNode("span",`bwo-round-native-badge ${s.tone}`,s.label);m.title=`Fuente: Jornada Perfecta · ${p}`,m.setAttribute("aria-label",m.title),y.appendChild(m)}else{let m=o.probability?.prob,d=bwoBidsNode("span",`bwo-round-native-badge ${o.probability?.tone??"jp"}`,`${o.probability?.kind==="bench"?"S":"T"}${m!=null?`${m}%`:"?"}`);d.title=p,y.appendChild(d)}let m=bwoRoundNativeHost(y);m.classList.add("bwo-round-native-player"),m.dataset.bwoRoundTip=p,u?m.classList.add("bwo-round-native-unavailable"):(o.risk||s?.tone==="warn")&&m.classList.add("bwo-round-native-risk"),m.title||(m.title=p)}}let o=[...t.querySelectorAll("h1,h2,h3,h4,button,span,div")].find(a=>/^jornada\s+\d+$/i.test((a.textContent??"").replace(/\s+/g," ").trim())&&a.getBoundingClientRect().width>0);if(o&&!o.parentElement?.querySelector(":scope > .bwo-round-native-summary")){let a=bwoBidsNode("small","bwo-round-native-summary"),i=`${e.lineup.length}/11 alineados · `,l=document.createElement("strong");l.textContent=`${e.predicted.toFixed(1)} pts previstos`,a.append(document.createTextNode(i),l,document.createTextNode(` · ${e.risks} en riesgo · ${e.pendingMatches} partidos pendientes`));if(e.jp){let s=bwoBidsNode("a",null,`JP ${e.jp.size}/${e.players.length}`);s.href="https://www.jornadaperfecta.com/onces-posibles/",s.target="_blank",s.rel="noopener noreferrer",s.title="Abrir las alineaciones probables de Jornada Perfecta",a.append(document.createTextNode(" · "),s)}o.insertAdjacentElement("afterend",a)}}
var bwoRoundPopoverTimer=null,bwoRoundPopoverBound=!1;
function bwoRoundOpponentShort(e){let t=bwoRoundNativeText(e).replace(/[^a-z0-9 ]/g," ").split(/\s+/).filter(Boolean);return t.length===0?"RIVAL":t.length===1?t[0].slice(0,3).toUpperCase():(t[0][0]+t[1].slice(0,2)).toUpperCase()}
function bwoRoundPopCell(e,t,n=""){let r=bwoBidsNode("div",`bwo-round-pop-cell ${n}`.trim());return r.append(bwoBidsNode("span",null,e),bwoBidsNode("strong",null,t??"—")),r}
function bwoRoundNativePopover(){let e=document.querySelector(".bwo-round-native-popover");return e||(e=bwoBidsNode("aside","bwo-round-native-popover"),e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-label","Información de jornada del jugador"),e.addEventListener("mouseenter",()=>clearTimeout(bwoRoundPopoverTimer)),e.addEventListener("mouseleave",()=>bwoRoundHidePopover()),document.body.appendChild(e)),e}
function bwoRoundHidePopover(e=!1){clearTimeout(bwoRoundPopoverTimer);let t=()=>{let n=document.querySelector(".bwo-round-native-popover");n&&(n.hidden=!0)};e?t():bwoRoundPopoverTimer=setTimeout(t,180)}
function bwoRoundShowPopover(e){clearTimeout(bwoRoundPopoverTimer);let t=e?.__bwoRoundNativeInfo;if(!t)return;let n=t.player,r=t.jp,o=bwoRoundNativePopover();o.replaceChildren();let a=bwoBidsNode("header","bwo-round-pop-head"),i=bwoBidsNode("div"),l=bwoBidsNode("h3",null,n.name),s=bwoBidsNode("small",null,`${n.lineup?"Mi once":"Suplente"}${n.teamName?` · ${n.teamName}`:""}`),u=bwoBidsNode("button","bwo-round-pop-close","×");u.type="button",u.setAttribute("aria-label","Cerrar información"),u.addEventListener("click",()=>bwoRoundHidePopover(!0)),i.append(l,s),a.append(i,u);let c=bwoBidsNode("div","bwo-round-pop-grid"),f=r?.status??(r?.expected?r.probability!=null?`Probable ${r.probability}%`:"Alineación probable":"Sin coincidencia pública"),g=/lesion|sancion/.test(bwoRoundNativeText(f))?"bad":/duda|riesgo|pufo|racha baja/.test(bwoRoundNativeText(`${f} ${r?.pick} ${r?.form}`))?"warn":r?"jp":"",b=`${n.match?.home?"vs":"@"} ${n.match?.opponentName??"Rival por confirmar"}`,p=n.physical?.detail||n.physical?.label||"Sin incidencias";c.append(bwoRoundPopCell("Previsión",n.projected==null?"Sin datos":`${n.projected.toFixed(1)} pts`,"good"),bwoRoundPopCell("Media",n.average==null?"Sin datos":`${n.average.toFixed(1)} pts`),bwoRoundPopCell("Titularidad Biwenger",n.probability?.label??"Sin dato",n.probability?.tone??""),bwoRoundPopCell("Jornada Perfecta",f,g),bwoRoundPopCell("Partido",b),bwoRoundPopCell("Horario",bwoRoundTime(n.match?.date)),bwoRoundPopCell("Estado físico",p,n.physical?.tone??""),bwoRoundPopCell("Estado del partido",n.match?.stateLabel??"Pendiente"),bwoRoundPopCell("Pick JP",r?.pick??"—",r?.pick?"jp":""),bwoRoundPopCell("Forma JP",r?.form??"—",r?.form==="racha alta"?"good":r?.form==="racha baja"?"warn":""));o.append(a,c);t.recommendation&&o.appendChild(bwoBidsNode("div","bwo-round-pop-rec",t.recommendation));let y=bwoBidsNode("footer","bwo-round-pop-foot"),w=bwoBidsNode("span",null,"Previsión orientativa; no garantiza puntuación."),m=bwoBidsNode("a",null,r?"Ver fuente en Jornada Perfecta":"Consultar Jornada Perfecta");m.href=r?.source??"https://www.jornadaperfecta.com/onces-posibles/",m.target="_blank",m.rel="noopener noreferrer",y.append(w,m),o.appendChild(y),o.hidden=!1;let d=e.getBoundingClientRect(),v=o.getBoundingClientRect(),S=Math.max(8,Math.min(innerWidth-v.width-8,d.left+d.width/2-v.width/2)),x=d.top-v.height-10;x<8&&(x=Math.min(innerHeight-v.height-8,d.bottom+10)),o.style.left=`${S}px`,o.style.top=`${Math.max(8,x)}px`}
function bwoRoundBindPopover(){if(bwoRoundPopoverBound)return;bwoRoundPopoverBound=!0,document.addEventListener("mouseover",e=>{let t=e.target instanceof Element?e.target.closest(".bwo-round-native-player"):null;t&&!t.contains(e.relatedTarget)&&bwoRoundShowPopover(t)}),document.addEventListener("mouseout",e=>{let t=e.target instanceof Element?e.target.closest(".bwo-round-native-player"):null;t&&!t.contains(e.relatedTarget)&&bwoRoundHidePopover()}),document.addEventListener("click",e=>{let t=e.target instanceof Element?e.target.closest(".bwo-round-native-info"):null;if(t){e.preventDefault(),e.stopPropagation(),bwoRoundShowPopover(t.closest(".bwo-round-native-player"));return}e.target instanceof Element&&!e.target.closest(".bwo-round-native-popover")&&bwoRoundHidePopover(!0)},!0),document.addEventListener("keydown",e=>{e.key==="Escape"&&bwoRoundHidePopover(!0)})}
var bwoRoundNativeRenderBase=bwoRoundNativeRender;
bwoRoundNativeRender=function(e){bwoRoundNativeRenderBase(e),bwoRoundBindPopover();let t=document.querySelector("main.container")??document.querySelector("main");if(!t)return;let n=new Map,r=new Map;for(let o of e.recommendations){o.out&&n.set(String(o.out.id),o),r.set(String(o.in.id),o)}for(let o of e.players){let a=n.get(String(o.id)),i=r.get(String(o.id)),l=a?`Cambio sugerido: ${a.out.name} → ${a.in.name}${a.gain!=null&&a.gain>0?` (+${a.gain.toFixed(1)} pts)`:""}. ${a.reason}`:i?`Entrada recomendada${i.out?` por ${i.out.name}`:""}. ${i.reason}`:null,s=e.jp?.get(String(o.id))??null;for(let u of bwoRoundNativeNameNodes(t,o.name)){let c=bwoRoundNativeHost(u);c.__bwoRoundNativeInfo={player:o,jp:s,recommendation:l};if(!u.querySelector(":scope > .bwo-round-native-info")){let f=`${o.match?.home?"vs":"@"}${bwoRoundOpponentShort(o.match?.opponentName)}`,g=bwoBidsNode("span","bwo-round-native-badge neutral bwo-round-native-info",`${f} ⓘ`);g.title="Ver toda la información de jornada",g.setAttribute("role","button"),g.setAttribute("aria-label",`Ver información completa de ${o.name}`),u.appendChild(g)}}}};
async function bwoEnhanceRoundPlanner(e=!1){if(!location.pathname.includes("/round")||bwoToolsPageWanted){bwoRoundNativeCleanup();return}let t=`${ke()}|${location.pathname}`;if(!e&&bwoRoundNativeDataCache&&t===bwoRoundNativeDataKey&&Date.now()-bwoRoundNativeDataAt<45e3){document.querySelector(".bwo-round-native-badge")||bwoRoundNativeRender(bwoRoundNativeDataCache);return}if(bwoRoundNativeBusy)return;bwoRoundNativeBusy=!0;try{let n=await bwoRoundData();bwoRoundNativeDataCache=n,bwoRoundNativeDataKey=t,bwoRoundNativeDataAt=Date.now(),bwoRoundNativeRender(n);try{n.jp=await bwoRoundJpData(n,e),bwoRoundNativeRender(n)}catch(r){console.warn("[biwtools] Jornada Perfecta no está disponible; se mantienen los datos de Biwenger:",r)}}catch(n){bwoRoundNativeCleanup(),console.warn("[biwtools] No se pudo integrar la información de Jornada:",n)}finally{bwoRoundNativeBusy=!1}}

/* Jornada móvil: resumen nativo compacto, navegación rápida y campo plegable. */
var bwoRoundMobileLineupCollapsed=!1;
function bwoRoundMobileEnsureStyles(){if(document.getElementById("bwo-round-mobile-styles"))return;let e=document.createElement("style");e.id="bwo-round-mobile-styles",e.textContent=`
 .bwo-round-mobile-overview{display:none}
 @media(max-width:680px){
  html,body{max-width:100%;overflow-x:hidden}
  body:has(.bwo-round-mobile-overview) main.container{width:100%!important;max-width:100%!important;box-sizing:border-box!important;padding-left:8px!important;padding-right:8px!important;overflow:visible!important}
  .bwo-round-mobile-overview{display:block;box-sizing:border-box;width:calc(100% - 4px);margin:10px 2px 13px;padding:12px;border:1px solid rgba(255,255,255,.11);border-top:2px solid #e0142c;border-radius:14px;color:#f5f6f8;background:linear-gradient(145deg,#202329,#121418);box-shadow:0 12px 30px rgba(0,0,0,.28);font-family:"Open Sans",system-ui,sans-serif}
  .bwo-rm-head{display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:10px}.bwo-rm-kicker{display:block;margin-bottom:3px;color:#f02d49;font-size:7px;font-weight:900;letter-spacing:.12em;text-transform:uppercase}.bwo-rm-title{margin:0;color:#fff;font-size:16px;line-height:1.2}.bwo-rm-subtitle{margin:4px 0 0;color:#99a2b0;font-size:8px;line-height:1.35}.bwo-rm-status{flex:0 0 auto;padding:5px 7px;border:1px solid rgba(101,212,122,.3);border-radius:999px;color:#a9efb6;background:rgba(101,212,122,.09);font-size:7px;font-weight:900;white-space:nowrap}
  .bwo-rm-kpis{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px}.bwo-rm-kpi{min-width:0;padding:8px 6px;border:1px solid rgba(255,255,255,.075);border-radius:9px;background:rgba(0,0,0,.2);text-align:center}.bwo-rm-kpi span{display:block;overflow:hidden;color:#828c9a;font-size:6.5px;font-weight:900;letter-spacing:.05em;text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap}.bwo-rm-kpi strong{display:block;margin-top:3px;color:#fff;font-size:13px;line-height:1.15;font-variant-numeric:tabular-nums}.bwo-rm-kpi.good strong{color:#65d47a}.bwo-rm-kpi.warn strong{color:#f1c76d}.bwo-rm-kpi.bad strong{color:#ff806c}
  .bwo-rm-actions{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:9px}.bwo-rm-action{min-height:34px;padding:7px 9px;border:1px solid rgba(255,255,255,.11);border-radius:8px;color:#fff;background:#242831;cursor:pointer;font:850 8px/1.2 "Open Sans",system-ui,sans-serif}.bwo-rm-action.primary{border-color:rgba(224,20,44,.34);background:rgba(224,20,44,.12)}
  .bwo-rm-alerts{display:flex;flex-direction:column;gap:5px;margin-top:9px}.bwo-rm-alert{display:grid;grid-template-columns:18px minmax(0,1fr) auto;gap:6px;align-items:center;padding:7px 8px;border-left:3px solid #d8a646;border-radius:7px;color:#cdd2da;background:rgba(216,166,70,.065);font-size:7.5px;line-height:1.35}.bwo-rm-alert.good{border-left-color:#65d47a;background:rgba(101,212,122,.055)}.bwo-rm-alert b{color:#fff}.bwo-rm-alert em{color:#65d47a;font-style:normal;font-weight:900;white-space:nowrap}
  round-lineup{display:block!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;margin-left:auto!important;margin-right:auto!important;overflow:visible!important}
  round-lineup[data-bwo-mobile-collapsed="1"]{display:none!important}
  round-lineup lineup{display:block!important;max-width:100%!important;margin-left:auto!important;margin-right:auto!important;transform-origin:top center}
  round-lineup .lineup-player{max-width:31vw}
  .bwo-round-native-summary{display:block!important;box-sizing:border-box;margin:7px 6px 9px!important;padding:7px 8px;border:1px solid rgba(255,255,255,.09);border-radius:8px;color:#adb5c1!important;background:#181b20;font-size:7.5px!important;line-height:1.45!important}
  .bwo-round-native-badge:not(.bwo-round-native-info){display:none!important}
  .bwo-round-native-info{width:17px;height:17px;box-sizing:border-box;margin-left:3px!important;padding:0!important;border-color:rgba(255,255,255,.42)!important;color:#fff!important;background:#272b33!important;font-size:0!important;line-height:17px!important;vertical-align:middle}
  .bwo-round-native-info::before{content:"ⓘ";font-size:10px;line-height:15px}
  .bwo-round-native-risk,.bwo-round-native-unavailable{filter:none!important}.bwo-round-native-risk{outline:2px solid rgba(241,185,55,.44);outline-offset:1px;border-radius:8px}.bwo-round-native-unavailable{outline:2px solid rgba(255,68,58,.5);outline-offset:1px;border-radius:8px}
  .bwo-round-native-popover{left:8px!important;right:8px!important;top:auto!important;bottom:8px!important;width:auto!important;max-width:none!important;max-height:68vh;overflow:auto;padding:12px!important;border-radius:13px!important}
  .bwo-round-native-pop-head{position:sticky;top:-12px;z-index:1;margin:-12px -12px 9px!important;padding:12px;background:#1d2026}
  .bwo-fab-wrap{right:10px!important;bottom:10px!important}.bwo-fab{width:48px!important;height:48px!important}.bwo-fab-icon{width:24px!important;height:24px!important}
 }
 @media(max-width:390px){.bwo-rm-kpis{grid-template-columns:1fr 1fr}.bwo-rm-title{font-size:15px}.bwo-round-mobile-overview{padding:10px}.bwo-rm-kpi{padding:7px 5px}}
`;document.head.appendChild(e)}
function bwoRoundMobileKpi(e,t,n=""){let r=bwoBidsNode("article",`bwo-rm-kpi ${n}`.trim());return r.append(bwoBidsNode("span",null,e),bwoBidsNode("strong",null,t)),r}
function bwoRoundMobileFindScoreHeading(){return[...document.querySelectorAll("h1,h2,h3,h4,button,div")].find(e=>/^puntuaciones$/i.test((e.textContent??"").trim())&&e.getBoundingClientRect().height>0)??null}
function bwoRoundMobileRender(e){document.querySelectorAll(".bwo-round-mobile-overview").forEach(t=>t.remove());if(!matchMedia("(max-width: 680px)").matches||!location.pathname.includes("/round"))return;bwoRoundMobileEnsureStyles();let t=document.querySelector("main.container")??document.querySelector("main"),n=t?.querySelector("round-lineup");if(!t||!n)return;n.dataset.bwoMobileCollapsed=bwoRoundMobileLineupCollapsed?"1":"0";let r=bwoBidsNode("section","bwo-round-mobile-overview");r.setAttribute("aria-label","Resumen móvil de jornada");let o=bwoBidsNode("header","bwo-rm-head"),a=bwoBidsNode("div"),i=bwoBidsNode("span","bwo-rm-kicker","BIWTOOLS · JORNADA"),l=bwoBidsNode("h2","bwo-rm-title","Resumen de tu once"),s=bwoBidsNode("p","bwo-rm-subtitle","Lo importante de la jornada antes de revisar el campo y la clasificación."),u=bwoBidsNode("span","bwo-rm-status",e.risks?`${e.risks} en revisión`:"Once controlado");a.append(i,l,s),o.append(a,u);let c=bwoBidsNode("div","bwo-rm-kpis");c.append(bwoRoundMobileKpi("Alineados",`${e.lineup.length}/11`,e.lineup.length===11?"good":"warn"),bwoRoundMobileKpi("Previsión",`${e.predicted.toFixed(1)} pts`,"good"),bwoRoundMobileKpi("En riesgo",String(e.risks),e.risks?"warn":"good"),bwoRoundMobileKpi("Pendientes",String(e.pendingMatches)));let f=bwoBidsNode("div","bwo-rm-actions"),g=bwoBidsNode("button","bwo-rm-action primary",bwoRoundMobileLineupCollapsed?"Mostrar alineación":"Ocultar alineación"),b=bwoBidsNode("button","bwo-rm-action","Ir a puntuaciones");g.type=b.type="button",g.addEventListener("click",()=>{bwoRoundMobileLineupCollapsed=!bwoRoundMobileLineupCollapsed,n.dataset.bwoMobileCollapsed=bwoRoundMobileLineupCollapsed?"1":"0",g.textContent=bwoRoundMobileLineupCollapsed?"Mostrar alineación":"Ocultar alineación",bwoRoundMobileLineupCollapsed||setTimeout(()=>n.scrollIntoView({behavior:"smooth",block:"start"}),30)}),b.addEventListener("click",()=>bwoRoundMobileFindScoreHeading()?.scrollIntoView({behavior:"smooth",block:"start"})),f.append(g,b),r.append(o,c,f);let p=bwoBidsNode("div","bwo-rm-alerts"),y=e.recommendations.slice(0,2);if(y.length)for(let w of y){let m=bwoBidsNode("div","bwo-rm-alert"),d=bwoBidsNode("span",null,"↗"),v=bwoBidsNode("b",null,`${w.out?.name??"Cambio"} → ${w.in.name}`),S=bwoBidsNode("em",null,w.gain!=null&&w.gain>0?`+${w.gain.toFixed(1)} pts`:"Revisar");m.append(d,v,S),p.appendChild(m)}else{let w=bwoBidsNode("div","bwo-rm-alert good");w.append(bwoBidsNode("span",null,"✓"),bwoBidsNode("b",null,e.risks?"Revisa los jugadores marcados en ámbar.":"No hay un cambio claramente superior en tu banquillo."),bwoBidsNode("em",null,e.risks?`${e.risks} aviso${e.risks===1?"":"s"}`:"Correcto")),p.appendChild(w)}r.appendChild(p),n.insertAdjacentElement("beforebegin",r)}
var bwoRoundNativeRenderResponsiveBase=bwoRoundNativeRender;
bwoRoundNativeRender=function(e){bwoRoundNativeRenderResponsiveBase(e),bwoRoundMobileRender(e)};
var bwoRoundNativeCleanupResponsiveBase=bwoRoundNativeCleanup;
bwoRoundNativeCleanup=function(){bwoRoundNativeCleanupResponsiveBase(),document.querySelectorAll(".bwo-round-mobile-overview").forEach(e=>e.remove())};

/* Catálogo visual de Herramientas: tarjetas informativas y métricas actualizadas. */
var bwoToolsCatalog=[
 {icon:"📋",name:"Actividad",category:"Liga",status:"Auditoría actualizada",tone:"blue",featured:!0,description:"Explora hasta 250 compras, ventas, cláusulas y abonos con contexto económico, filtros, rankings y control de cobertura.",features:["Histórico ampliado","Filtros avanzados","Ranking de managers"],source:"Tablón + API de Biwenger"},
 {icon:"👁",name:"Ver pujas",category:"Mercado",status:"Datos públicos",tone:"red",featured:!0,description:"Analiza las pujas rivales que Biwenger ya ha revelado y contrástalas con los jugadores disponibles hoy.",features:["Importe y sobrepuja","Rival y resultado","Radar de mercado"],source:"Mercado + pujas resueltas"},
 {icon:"⚽",name:"Onces",category:"Rendimiento",status:"Análisis táctico",tone:"cyan",description:"Compara alineaciones, formaciones y futbolistas utilizados por cada equipo para detectar patrones reales.",features:["Formaciones","Jugadores usados","Comparación de equipos"],source:"Alineaciones oficiales"},
 {icon:"🚑",name:"Lesionados",category:"Plantilla",status:"Seguimiento",tone:"orange",description:"Centraliza lesiones, sanciones, dudas y disponibilidad para anticipar riesgos antes de cerrar tu once.",features:["Estado físico","Bajas y sanciones","Impacto en el once"],source:"Biwenger + contraste externo"},
 {icon:"🎯",name:"Recomendaciones",category:"Decisiones",status:"Análisis avanzado",tone:"green",featured:!0,description:"Compara tu plantilla con el mercado por posición, forma, regularidad, titularidad, calendario y capacidad real de puja.",features:["Media AS + SofaScore","Mejora posicional","Acceso directo a pujar"],source:"Biwenger + fuentes fantasy"},
 {icon:"🆓",name:"Jugadores libres",category:"Mercado",status:"Oportunidades",tone:"violet",description:"Localiza futbolistas sin propietario y prioriza oportunidades que todavía no pertenecen a ningún rival.",features:["Agentes libres","Valor y tendencia","Encaje por posición"],source:"Plantillas de la liga"},
 {icon:"🔀",name:"Comparador",category:"Plantilla",status:"Análisis profesional",tone:"cyan",featured:!0,description:"Enfrenta cualquier jugador de tu plantilla con alternativas del mercado actual por rendimiento, forma, titularidad, rival y economía.",features:["Media AS + SofaScore","Mercado en directo","Acceso a ficha y puja"],source:"Plantilla + mercado + jornada"},
 {icon:"💰",name:"Finanzas",category:"Economía",status:"Control financiero",tone:"orange",description:"Supervisa saldos, patrimonio, rentabilidad de ventas, capacidad de puja y evolución económica de cada manager.",features:["Beneficio por jugador","Ranking económico","Puja máxima"],source:"Movimientos + plantillas"},
 {icon:"🩺",name:"Diagnóstico",category:"Sistema",status:"Informe técnico",tone:"blue",description:"Verifica integridad del histórico, conciliación de saldos, cobertura de datos, versión activa y sincronización.",features:["Conciliación exacta","Alertas accionables","Estado del sistema"],source:"Auditoría local + API"}
];
function bwoModernizeFabMenu(){let e=zv?.querySelector(".bwo-fab-menu");if(!e)return;let t=e.querySelector(".bwo-fab-menu-version");t&&(t.textContent="v1.5.4",t.setAttribute("aria-label","Biwtools versión 1.5.4"));let n=e.querySelector(".bwo-fab-menu-head");if(n&&!n.querySelector(".bwo-fab-menu-brand")){let p=bwoBidsNode("div","bwo-fab-menu-brand"),y=n.querySelector(".bwo-fab-menu-wordmark"),w=bwoBidsNode("small",null,"Centro de análisis");y&&p.appendChild(y),p.appendChild(w),n.insertBefore(p,t??n.firstChild)}if(!e.querySelector(".bwo-fab-menu-section")){let p=bwoBidsNode("div","bwo-fab-menu-section","Accesos rápidos");n?.insertAdjacentElement("afterend",p)}for(let p of e.querySelectorAll(".bwo-fab-item")){if(p.dataset.bwoFabModern==="1")continue;let y=(p.textContent??"").trim().toLocaleLowerCase("es"),w=bwoToolsCatalog.find(v=>y.includes(v.name.toLocaleLowerCase("es")));if(!w)continue;let m=p.querySelector(".bwo-fab-item-icon")??bwoBidsNode("span","bwo-fab-item-icon",w.icon),d=bwoBidsNode("span","bwo-fab-item-copy"),v=bwoBidsNode("strong",null,w.name),S=bwoBidsNode("small",null,`${w.category} · ${w.status}`),x=bwoBidsNode("span","bwo-fab-item-arrow","›");d.append(v,S),p.replaceChildren(m,d,x),p.dataset.bwoFabModern="1",p.dataset.bwoToolName=w.name,p.title=w.description,p.setAttribute("aria-label",`${w.name}. ${w.description}`)}if(!e.querySelector(".bwo-fab-center-open")){let p=bwoBidsNode("button","bwo-fab-center-open"),y=bwoBidsNode("span",null,"Abrir centro completo"),w=bwoBidsNode("small",null,"Tarjetas, métricas y buscador");p.type="button",p.append(y,w),p.addEventListener("click",()=>{zv.querySelector(".bwo-fab")?.click(),setTimeout(bwoOpenToolsPage,0)}),e.appendChild(p)}e.dataset.bwoModernVersion="1.5.4"}
var bwoModernizeFabMenuRender=bwoModernizeFabMenu;
bwoModernizeFabMenu=function(){let e=zv?.querySelector(".bwo-fab-menu");if(!e||e.dataset.bwoModernVersion==="1.5.4")return;return bwoModernizeFabMenuRender()};
var bwoEnsureBidsFabItemLegacy=bwoEnsureBidsFabItem;
bwoEnsureBidsFabItem=function(){let e=bwoEnsureBidsFabItemLegacy();return bwoModernizeFabMenu(),e};
function bwoToolCatalogCard(e){let t=bwoBidsNode("article",`bwo-tool-card tone-${e.tone}${e.featured?" featured":""}`),n=bwoBidsNode("header","bwo-tool-card-head"),r=bwoBidsNode("span","bwo-tool-card-icon",e.icon),o=bwoBidsNode("div","bwo-tool-card-meta"),a=bwoBidsNode("span","bwo-tool-card-category",e.category),i=bwoBidsNode("span","bwo-tool-card-status",e.status);o.append(a,i),n.append(r,o);let l=bwoBidsNode("h3",null,e.name),s=bwoBidsNode("p","bwo-tool-card-description",e.description),u=bwoBidsNode("ul","bwo-tool-card-features");for(let m of e.features)u.appendChild(bwoBidsNode("li",null,m));let c=bwoBidsNode("footer","bwo-tool-card-footer"),f=bwoBidsNode("span","bwo-tool-card-source",e.source),g=bwoBidsNode("button","bwo-tool-card-open","Abrir herramienta →");g.type="button",g.setAttribute("aria-label",`Abrir ${e.name}`),g.addEventListener("click",()=>bwoOpenToolFromPage(e.name)),c.append(f,g),t.append(n,l,s,u,c),t.dataset.bwoToolSearch=`${e.name} ${e.category} ${e.status} ${e.description} ${e.features.join(" ")}`.toLocaleLowerCase("es"),t.dataset.bwoToolCategory=e.category;return t}
bwoBuildToolsPage=function(){let e=bwoBidsNode("section","bwo-tools-page-host");e.dataset.bwoToolsPage="1",e.dataset.bwoRuntime=bwoRuntimeToken,e.setAttribute("aria-labelledby","bwo-tools-page-title");let t=bwoBidsNode("header","bwo-tools-page-head"),n=bwoBidsNode("div"),r=bwoBidsNode("span","bwo-tools-page-kicker","Biwtools 1.5.4 · Espacio de análisis"),o=bwoBidsNode("h1","bwo-tools-page-title","Centro de herramientas");o.id="bwo-tools-page-title";let a=bwoBidsNode("p","bwo-tools-page-subtitle","Nueve módulos conectados con tu liga para analizar mercado, rendimiento, plantilla, economía y calidad de datos sin abandonar Biwenger."),i=bwoBidsNode("div","bwo-tools-page-chips");for(let E of["Datos sincronizados","Análisis integrado","Acciones directas"])i.appendChild(bwoBidsNode("span",null,E));n.append(r,o,a,i);let l=bwoBidsNode("span","bwo-tools-page-count",`${bwoToolsCatalog.length} módulos activos`);t.append(n,l);let s=bwoBidsNode("div","bwo-tools-table-wrap bwo-tools-card-wrap"),u=bwoBidsNode("div","bwo-tools-catalog-head"),c=bwoBidsNode("div"),f=bwoBidsNode("h2",null,"Módulos de análisis"),g=bwoBidsNode("p",null,"Selecciona una tarjeta para abrir el informe completo dentro de la aplicación."),b=bwoBidsNode("input","bwo-tools-search");b.type="search",b.placeholder="Buscar herramienta, categoría o función…",b.setAttribute("aria-label","Buscar herramientas"),c.append(f,g),u.append(c,b);let p=bwoBidsNode("div","bwo-tools-card-grid");for(let E of bwoToolsCatalog)p.appendChild(bwoToolCatalogCard(E));let y=bwoBidsNode("p","bwo-tools-empty","No hay herramientas que coincidan con la búsqueda.");y.hidden=!0;s.append(u,p,y),e.append(t,s);function w(){let E=b.value.trim().toLocaleLowerCase("es"),P=0;for(let T of p.children){let O=!E||T.dataset.bwoToolSearch.includes(E);T.hidden=!O,O&&P++}y.hidden=P>0,l.textContent=E?`${P} resultado${P===1?"":"s"}`:`${bwoToolsCatalog.length} módulos activos`}return b.addEventListener("input",w),e};
bwoEnsureToolsOverview=function(e){if(e.querySelector(".bwo-tools-overview"))return;let t=bwoBidsNode("section","bwo-tools-overview");t.setAttribute("aria-label","Resumen actualizado de la liga");for(let[n,r,o,a]of[["rivals","👥","Rivales sincronizados","Managers disponibles para los análisis"],["bids","⚖","Pujas observadas","Registros públicos incorporados"],["wins","🏆","Pujas ganadoras","Ofertas rivales que obtuvieron jugador"],["market","↔","Mercado actual","Jugadores anunciados ahora"]]){let i=bwoBidsNode("article","bwo-tools-overview-card"),l=bwoBidsNode("span","bwo-tools-overview-icon",r),s=bwoBidsNode("div"),u=bwoBidsNode("span","bwo-tools-overview-label",o),c=bwoBidsNode("strong","bwo-tools-overview-value","…");c.dataset.bwoOverview=n;let f=bwoBidsNode("small","bwo-tools-overview-note",a);s.append(u,c,f),i.append(l,s),t.appendChild(i)}e.querySelector(".bwo-tools-table-wrap")?.insertAdjacentElement("beforebegin",t),bwoPopulateToolsOverview(e)};
bwoPopulateToolsOverview=async function(e){if(e.dataset.bwoOverviewLoading==="1")return;e.dataset.bwoOverviewLoading="1";try{let[t,n,r,o]=await Promise.all([og().catch(()=>[]),jf().catch(()=>[]),bwoFetchLiveMarket(!1).catch(()=>null),H().catch(()=>new Map)]),a=null;try{r&&(a=bwoMarketListings(r,o,[]).length)}catch{}a==null&&(a=S0().length||null);let i={rivals:Math.max(0,t.length-1),bids:n.length,wins:n.filter(l=>l.won).length,market:a};for(let[l,s]of Object.entries(i)){let u=e.querySelector(`[data-bwo-overview="${l}"]`);u&&(u.textContent=s==null?"Sin dato":Number(s).toLocaleString("es-ES"))}e.querySelector(".bwo-tools-overview-updated")?.remove();let c=bwoBidsNode("span","bwo-tools-overview-updated",`Actualizado ${new Intl.DateTimeFormat("es-ES",{hour:"2-digit",minute:"2-digit"}).format(new Date)}`);e.querySelector(".bwo-tools-overview")?.appendChild(c)}finally{delete e.dataset.bwoOverviewLoading}};

/* Diagnóstico profesional: conciliación, cobertura, calidad de datos e incidencias accionables. */
function bwoDiagDate(e){if(!e)return"Sin datos";let t=new Date(e);return Number.isNaN(t.getTime())?"Sin datos":new Intl.DateTimeFormat("es-ES",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(t)}
function bwoDiagElapsed(e){if(!e)return"Nunca";let t=Math.max(0,Date.now()-Number(e)),n=Math.floor(t/1e3);return n<60?`Hace ${n} s`:n<3600?`Hace ${Math.floor(n/60)} min`:n<86400?`Hace ${Math.floor(n/3600)} h`:`Hace ${Math.floor(n/86400)} d`}
async function bwoDiagCollect(e){let[{state:t},{date:n,startingBalance:r},o]=await Promise.all([z(),qo(),hn().catch(()=>[])]),a=(t.movements??[]),i=a.filter(m=>String(m.occurred_at??"")>String(n)),l=e?i.filter(m=>String(m.player_id)===String(e)):[],s=l.reduce((m,d)=>m+(Number(d.amount)||0),0),u=l.filter(m=>Number(m.amount)>0).reduce((m,d)=>m+Number(d.amount),0),c=Math.abs(l.filter(m=>Number(m.amount)<0).reduce((m,d)=>m+Number(d.amount),0)),f=[...i].sort((m,d)=>String(m.occurred_at??"").localeCompare(String(d.occurred_at??""))),g=o.find(m=>String(m.id)===String(e))??null,b=Number(t.balanceCorrections?.[String(e)]??0),p=e?Number(r)+s+b:null,y=g&&p!=null?Math.round(Number(g.balance)-p):null,w=i.filter(m=>!m.occurred_at||!Number.isFinite(Number(m.amount))).length;return{anchor:n,startingBalance:Number(r),totalMovements:a.length,movementsAfterAnchor:i.length,myMovements:l.length,myNet:e?s:null,income:e?u:null,expenses:e?c:null,balanceCorrection:b,calculatedBalance:p,currentManager:g,balanceDifference:y,firstMovementAt:f[0]?.occurred_at??null,lastMovementAt:f.at(-1)?.occurred_at??null,managersCovered:new Set(i.map(m=>String(m.player_id)).filter(Boolean)).size,managerCount:o.length,invalidMovements:w,historyComplete:t.syncState.movementsHistoryCompleteV1==="1",rebuildDone:t.syncState.movementsStableIdsRebuildV2==="1",exactDisabled:t.syncState.exactStartingBalancesDisabledV2==="1"}}
function bwoDiagState(e,t){let n=[];return t.consecutiveFailures>0&&n.push("error"),!e.historyComplete&&n.push("warn"),!e.rebuildDone&&n.push("warn"),e.invalidMovements>0&&n.push("warn"),e.balanceDifference!=null&&Math.abs(e.balanceDifference)>1&&n.push("warn"),{tone:n.includes("error")?"bad":n.includes("warn")?"warn":t.syncing?"info":"good",label:n.includes("error")?"Error de sincronización":n.includes("warn")?"Requiere revisión":t.syncing?"Sincronizando":"Sistema operativo"}}
function bwoDiagKpi(e,t,n,r=""){return(0,B.jsxs)("article",{className:`bwo-diag-kpi ${r}`.trim(),children:[(0,B.jsx)("span",{children:e}),(0,B.jsx)("strong",{children:t}),(0,B.jsx)("small",{children:n})]})}
function bwoDiagLine(e,t,n=""){return(0,B.jsxs)("div",{className:"bwo-diag-pro-row",children:[(0,B.jsx)("span",{children:e}),(0,B.jsx)("strong",{className:n,children:t})]})}
function bwoDiagBlock(e,t,n,r=""){return(0,B.jsxs)("section",{className:`bwo-diag-pro-block ${r}`.trim(),children:[(0,B.jsxs)("header",{children:[(0,B.jsx)("h3",{children:e}),(0,B.jsx)("p",{children:t})]}),n]})}
function bwoDiagCheck(e,t,n){return(0,B.jsxs)("li",{className:`bwo-diag-check ${e}`,children:[(0,B.jsx)("span",{className:"bwo-diag-check-icon",children:e==="good"?"✓":e==="bad"?"!":"i"}),(0,B.jsxs)("div",{children:[(0,B.jsx)("strong",{children:t}),(0,B.jsx)("p",{children:n})]})]})}
function bwoProfessionalDiagnostics({onClose:e,selfId:t}){let[n,r]=(0,Wo.useState)(null),[o,a]=(0,Wo.useState)(null),[i,l]=(0,Wo.useState)(0),[s,u]=(0,Wo.useState)(!1);(0,Wo.useEffect)(()=>{let c=!0;async function f(){try{let[g,b]=await Promise.all([bwoDiagCollect(t),Promise.resolve(Wg())]);c&&(r(g),a(b))}catch(g){console.warn("[biwtools] No se pudo construir el diagnóstico profesional:",g)}}f();let m=setInterval(f,3e3);return()=>{c=!1,clearInterval(m)}},[t,i]);async function c(){u(!0);try{await Vg(0)}catch{}finally{l(f=>f+1),u(!1)}}if(n==null||o==null)return(0,B.jsxs)("div",{className:"bwo-comp",children:[(0,B.jsxs)("div",{className:"bwo-comp-head",children:[(0,B.jsx)("button",{className:"bwo-back",onClick:e,children:"✕ Cerrar"}),(0,B.jsx)("strong",{className:"bwo-comp-name",children:"Diagnóstico"}),(0,B.jsx)("span",{className:"bwo-comp-meta",children:"Auditando datos económicos, histórico y sincronización…"})]}),(0,B.jsx)("p",{className:"bwo-no-movements",children:"Preparando informe técnico…"})]});let f=bwoDiagState(n,o),g=n.currentManager?.balance??null,b=n.currentManager?.maxBid??null,p=n.currentManager?.netWorth??null,y=n.totalMovements?Math.round(n.movementsAfterAnchor/n.totalMovements*100):0,w=[];o.consecutiveFailures>0&&w.push(bwoDiagCheck("bad","Sincronización con errores",`${o.consecutiveFailures} fallo${o.consecutiveFailures===1?"":"s"} consecutivo${o.consecutiveFailures===1?"":"s"}. ${o.lastSyncError??"Reintenta la actualización para recuperar los datos."}`)),!n.historyComplete&&w.push(bwoDiagCheck("warn","Histórico incompleto","Todavía faltan páginas del tablón por incorporar; los saldos rivales pueden ser provisionales.")),!n.rebuildDone&&w.push(bwoDiagCheck("warn","Índices pendientes","La reconstrucción de identificadores estables no ha terminado.")),n.invalidMovements>0&&w.push(bwoDiagCheck("warn","Registros no válidos",`${n.invalidMovements} movimiento${n.invalidMovements===1?"":"s"} sin fecha o importe válido.`)),n.balanceDifference!=null&&Math.abs(n.balanceDifference)>1&&w.push(bwoDiagCheck("warn","Conciliación con diferencia",`El saldo reconstruido difiere ${Kg(Math.abs(n.balanceDifference))} del saldo actual. Actualiza para recalcular la corrección individual.`)),w.length===0&&w.push(bwoDiagCheck("good","Todas las comprobaciones superadas","Histórico, conciliación económica, identificadores y sincronización están en estado correcto."));return(0,B.jsxs)("div",{className:"bwo-comp bwo-diag-professional",children:[(0,B.jsxs)("div",{className:"bwo-comp-head",children:[(0,B.jsx)("button",{className:"bwo-back",onClick:e,children:"✕ Cerrar"}),(0,B.jsx)("strong",{className:"bwo-comp-name",children:"Diagnóstico"}),(0,B.jsx)("span",{className:"bwo-comp-meta",children:"Informe técnico de integridad, conciliación económica y calidad de datos"})]}),(0,B.jsxs)("div",{className:"bwo-diag-pro",children:[(0,B.jsxs)("section",{className:"bwo-diag-hero",children:[(0,B.jsxs)("div",{children:[(0,B.jsx)("span",{className:"bwo-diag-eyebrow",children:"BIWTOOLS · SYSTEM HEALTH"}),(0,B.jsx)("h2",{children:"Centro de diagnóstico"}),(0,B.jsx)("p",{children:"Comprueba de forma transparente qué datos están disponibles, cómo se reconstruye tu saldo y si existe alguna incidencia que pueda afectar a los cálculos."})]}),(0,B.jsxs)("div",{className:"bwo-diag-hero-actions",children:[(0,B.jsx)("span",{className:`bwo-diag-status ${f.tone}`,children:f.label}),(0,B.jsx)("button",{type:"button",onClick:c,disabled:s,children:s?"Actualizando…":"Actualizar y conciliar"})]})]}),(0,B.jsxs)("div",{className:"bwo-diag-kpis",children:[bwoDiagKpi("Versión","v1.3.0","Diagnóstico profesional","good"),bwoDiagKpi("Conciliación",n.balanceDifference==null?"Sin dato":n.balanceDifference===0?"Exacta":Kg(n.balanceDifference),n.balanceDifference===0?"0 € de diferencia":"Saldo real frente al reconstruido",n.balanceDifference===0?"good":"warn"),bwoDiagKpi("Movimientos útiles",String(n.movementsAfterAnchor),`${y}% del histórico almacenado`),bwoDiagKpi("Última sincronización",bwoDiagElapsed(o.lastSyncAt),o.syncing?"Proceso en curso":`${o.consecutiveFailures} fallos consecutivos`,o.consecutiveFailures?"bad":"good")]}),(0,B.jsxs)("div",{className:"bwo-diag-pro-grid",children:[bwoDiagBlock("Conciliación económica","Desglose reproducible del saldo actual.",(0,B.jsxs)("div",{children:[bwoDiagLine("Saldo inicial",Kg(n.startingBalance)),bwoDiagLine("Ingresos desde el ancla",n.income==null?"—":Kg(n.income),"good"),bwoDiagLine("Gastos desde el ancla",n.expenses==null?"—":`−${Kg(n.expenses)}`,"bad"),bwoDiagLine("Neto de movimientos",n.myNet==null?"—":Kg(n.myNet),n.myNet>=0?"good":"bad"),bwoDiagLine("Corrección individual",Kg(n.balanceCorrection),n.balanceCorrection===0?"":"warn"),bwoDiagLine("Saldo reconstruido",n.calculatedBalance==null?"—":Kg(n.calculatedBalance),"emphasis"),bwoDiagLine("Saldo actual Biwenger",g==null?"—":Kg(g),"emphasis")] })),bwoDiagBlock("Capacidad financiera","Situación económica utilizada por mercado y recomendaciones.",(0,B.jsxs)("div",{children:[bwoDiagLine("Saldo disponible",g==null?"—":Kg(g),g!=null&&g<0?"bad":"good"),bwoDiagLine("Puja máxima",b==null?"—":Kg(b),"good"),bwoDiagLine("Patrimonio",p==null?"—":Kg(p)),bwoDiagLine("Movimientos propios",String(n.myMovements)),bwoDiagLine("Método de cálculo",n.exactDisabled?"Ancla común + corrección":"Saldos iniciales individuales"),bwoDiagLine("Fecha de anclaje",bwoDiagDate(n.anchor))]})),bwoDiagBlock("Cobertura del histórico","Alcance y calidad del registro local sincronizado.",(0,B.jsxs)("div",{children:[bwoDiagLine("Movimientos almacenados",String(n.totalMovements)),bwoDiagLine("Posteriores al ancla",String(n.movementsAfterAnchor)),bwoDiagLine("Managers cubiertos",`${n.managersCovered}/${n.managerCount}`),bwoDiagLine("Primer movimiento útil",bwoDiagDate(n.firstMovementAt)),bwoDiagLine("Último movimiento útil",bwoDiagDate(n.lastMovementAt)),bwoDiagLine("Registros inválidos",String(n.invalidMovements),n.invalidMovements?"bad":"good"),bwoDiagLine("Histórico completo",n.historyComplete?"Sí":"Pendiente",n.historyComplete?"good":"warn")]})),bwoDiagBlock("Motor de sincronización","Estado de actualización y preparación interna.",(0,B.jsxs)("div",{children:[bwoDiagLine("Estado",o.syncing?"Sincronizando":"En reposo",o.syncing?"info":"good"),bwoDiagLine("Último intento",bwoDiagElapsed(o.lastSyncAt)),bwoDiagLine("Fallos consecutivos",String(o.consecutiveFailures),o.consecutiveFailures?"bad":"good"),bwoDiagLine("IDs estables",n.rebuildDone?"Reconstruidos":"Pendientes",n.rebuildDone?"good":"warn"),bwoDiagLine("Instancia del bundle",globalThis.__BIWTOOLS_ACTIVE_RUNTIME__?.startsWith("v1.3.0")?"Única y activa":"En verificación",globalThis.__BIWTOOLS_ACTIVE_RUNTIME__?.startsWith("v1.3.0")?"good":"warn"),bwoDiagLine("Ruta actual",location.pathname)]}))]}),bwoDiagBlock("Incidencias y recomendaciones","Solo se muestran problemas que pueden afectar a la fiabilidad de los datos.",(0,B.jsx)("ul",{className:"bwo-diag-checks",children:w}),"wide"),(0,B.jsxs)("footer",{className:"bwo-diag-footer",children:[(0,B.jsx)("span",{children:"Fuente primaria: API y tablón oficial de Biwenger. El diagnóstico no modifica saldos manualmente."}),(0,B.jsx)("button",{type:"button",onClick:()=>l(m=>m+1),children:"Recalcular informe"})]})]})]})}
tc=bwoProfessionalDiagnostics;
var bwoDiagKpiVersionBase=bwoDiagKpi,bwoDiagLineRuntimeBase=bwoDiagLine;
bwoDiagKpi=function(e,t,n,r=""){return bwoDiagKpiVersionBase(e,e==="Versión"?"v1.5.4":t,n,r)};
bwoDiagLine=function(e,t,n=""){return e==="Instancia del bundle"?bwoDiagLineRuntimeBase(e,"Única y activa","good"):bwoDiagLineRuntimeBase(e,t,n)};

/* Actividad 2.0 y Comparador 2.0: informes accionables con datos actuales de liga y mercado. */
function bwoProToolsEnsureStyles(){if(zv?.querySelector("#bwo-pro-activity-comparator-styles"))return;let e=document.createElement("style");e.id="bwo-pro-activity-comparator-styles",e.textContent=`
 .bwo-pro-tool{min-height:100%;color:#eef1f6;background:#111318}.bwo-pro-head{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;padding:20px 22px 17px;border-bottom:1px solid rgba(255,255,255,.09);background:linear-gradient(110deg,rgba(31,37,48,.98),rgba(35,18,25,.96))}.bwo-pro-head-main{display:flex;align-items:flex-start;gap:12px}.bwo-pro-back{min-height:34px;padding:7px 11px;border:1px solid rgba(255,255,255,.13);border-radius:9px;color:#fff;background:#252a34;cursor:pointer;font:800 10px/1.2 var(--bwo-font-body)}.bwo-pro-eyebrow{display:block;margin-bottom:4px;color:#f02d49;font-size:8px;font-weight:900;letter-spacing:.13em;text-transform:uppercase}.bwo-pro-title{margin:0;color:#fff;font-size:22px;line-height:1.15}.bwo-pro-subtitle{max-width:850px;margin:6px 0 0;color:#adb4c0;font-size:11px;line-height:1.5}.bwo-pro-refresh{flex:0 0 auto;padding:8px 12px;border:1px solid rgba(240,45,73,.35);border-radius:9px;color:#fff;background:rgba(240,45,73,.12);cursor:pointer;font:850 10px/1.2 var(--bwo-font-body)}.bwo-pro-refresh:disabled{opacity:.55;cursor:wait}.bwo-pro-body{padding:16px 20px 22px}.bwo-pro-loading,.bwo-pro-error{display:grid;min-height:260px;place-items:center;padding:25px;color:#aeb5c1;text-align:center}.bwo-pro-kpis{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:9px;margin-bottom:13px}.bwo-pro-kpi{padding:11px 12px;border:1px solid rgba(255,255,255,.08);border-radius:10px;background:linear-gradient(145deg,#1d2129,#17191f)}.bwo-pro-kpi span{display:block;color:#8d96a5;font-size:8px;font-weight:900;letter-spacing:.07em;text-transform:uppercase}.bwo-pro-kpi strong{display:block;margin-top:5px;color:#fff;font-size:16px;line-height:1.2;font-variant-numeric:tabular-nums}.bwo-pro-kpi small{display:block;margin-top:3px;color:#858d9a;font-size:8px}.bwo-pro-kpi.good strong{color:#65d47a}.bwo-pro-kpi.bad strong{color:#ff806c}.bwo-pro-toolbar{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:12px;padding:11px;border:1px solid rgba(255,255,255,.075);border-radius:11px;background:#181b21}.bwo-pro-control{height:36px;min-width:150px;padding:0 10px;border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#e8ebf0;background:#101217;outline:none;font:700 10px/1.2 var(--bwo-font-body)}.bwo-pro-control.search{min-width:230px;flex:1}.bwo-pro-control:focus{border-color:#e52b46;box-shadow:0 0 0 3px rgba(229,43,70,.1)}.bwo-activity-layout{display:grid;grid-template-columns:minmax(0,1fr) 255px;gap:12px}.bwo-pro-table-wrap{overflow:auto;border:1px solid rgba(255,255,255,.08);border-radius:11px;background:#101216}.bwo-pro-table{width:100%;min-width:900px;border-collapse:collapse}.bwo-pro-table th{position:sticky;top:0;z-index:1;padding:10px 11px;border-bottom:1px solid rgba(255,255,255,.1);color:#929baa;background:#1c1f25;font-size:8px;font-weight:900;letter-spacing:.06em;text-align:left;text-transform:uppercase}.bwo-pro-table td{padding:10px 11px;border-bottom:1px solid rgba(255,255,255,.06);color:#d7dbe2;font-size:10px;vertical-align:middle}.bwo-pro-table tbody tr:hover{background:rgba(255,255,255,.035)}.bwo-pro-table tbody tr:last-child td{border-bottom:0}.bwo-activity-player{display:flex;align-items:center;gap:8px;min-width:165px}.bwo-activity-player img{width:34px;height:34px;flex:0 0 auto;border-radius:50%;object-fit:cover;background:#262a32}.bwo-activity-player button{overflow:hidden;padding:0;border:0;color:#fff;background:none;cursor:pointer;font:850 10px/1.25 var(--bwo-font-body);text-align:left;text-overflow:ellipsis;white-space:nowrap}.bwo-activity-player small{display:block;margin-top:2px;color:#7f8998;font-size:8px}.bwo-act-type{display:inline-flex;padding:4px 7px;border-radius:999px;font-size:8px;font-weight:900;white-space:nowrap}.bwo-act-type.buy{color:#ffc1b8;background:rgba(255,128,108,.12)}.bwo-act-type.sell{color:#a9efb6;background:rgba(101,212,122,.12)}.bwo-act-type.clause{color:#f3d68e;background:rgba(216,166,70,.14)}.bwo-act-type.other{color:#bdc5d2;background:rgba(147,157,173,.12)}.bwo-act-money{font-weight:900;font-variant-numeric:tabular-nums;white-space:nowrap}.bwo-act-money.good{color:#65d47a}.bwo-act-money.bad{color:#ff806c}.bwo-act-context{display:block;margin-top:3px;color:#818a98;font-size:8px}.bwo-activity-side{display:flex;flex-direction:column;gap:10px}.bwo-pro-side-card{padding:13px;border:1px solid rgba(255,255,255,.08);border-radius:11px;background:linear-gradient(145deg,#1b1f26,#14161b)}.bwo-pro-side-card h3{margin:0 0 9px;color:#fff;font-size:11px}.bwo-manager-rank{display:grid;grid-template-columns:22px minmax(0,1fr) auto;gap:7px;align-items:center;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.06)}.bwo-manager-rank:last-child{border-bottom:0}.bwo-manager-rank b{color:#8e98a8;font-size:9px}.bwo-manager-rank strong{overflow:hidden;color:#fff;font-size:9px;text-overflow:ellipsis;white-space:nowrap}.bwo-manager-rank span{color:#aeb5c1;font-size:8px;font-variant-numeric:tabular-nums}.bwo-data-note{margin:10px 0 0;padding:9px 11px;border-left:3px solid #65d47a;color:#939ca9;background:rgba(101,212,122,.055);font-size:8.5px;line-height:1.5}.bwo-empty-row{padding:24px!important;color:#939ba8!important;text-align:center}.bwo-compare-pickers{display:grid;grid-template-columns:1fr auto 1fr;gap:12px;align-items:end;margin-bottom:13px;padding:14px;border:1px solid rgba(255,255,255,.08);border-radius:12px;background:#181b21}.bwo-compare-picker label{display:block;margin-bottom:6px;color:#8f98a7;font-size:8px;font-weight:900;letter-spacing:.07em;text-transform:uppercase}.bwo-compare-picker select{width:100%;height:40px;padding:0 11px;border:1px solid rgba(255,255,255,.13);border-radius:9px;color:#fff;background:#101217;font:750 10px var(--bwo-font-body)}.bwo-compare-vs{display:grid;width:38px;height:38px;place-items:center;border:1px solid rgba(240,45,73,.3);border-radius:50%;color:#ff4962;background:rgba(240,45,73,.1);font-size:10px;font-weight:950}.bwo-compare-options{display:flex;align-items:center;gap:8px;margin:8px 0 0;color:#a6aeba;font-size:9px}.bwo-compare-options input{accent-color:#e52b46}.bwo-compare-best{margin-left:auto;padding:6px 9px;border:1px solid rgba(101,212,122,.28);border-radius:7px;color:#a9efb6;background:rgba(101,212,122,.08);cursor:pointer;font:850 8px var(--bwo-font-body)}.bwo-compare-stage{display:grid;grid-template-columns:minmax(250px,.7fr) minmax(420px,1.3fr) minmax(250px,.7fr);gap:12px}.bwo-player-report{padding:15px;border:1px solid rgba(255,255,255,.09);border-radius:13px;background:linear-gradient(155deg,#20242d,#14161b)}.bwo-player-report.winner{border-color:rgba(101,212,122,.38);box-shadow:inset 0 2px #65d47a}.bwo-player-report-head{display:flex;align-items:center;gap:11px}.bwo-player-report-head img{width:54px;height:54px;border-radius:50%;object-fit:cover;background:#272b34}.bwo-player-report-head h3{margin:0;color:#fff;font-size:15px;line-height:1.2}.bwo-player-report-head p{margin:4px 0 0;color:#929ba9;font-size:9px}.bwo-source-pill{display:inline-flex;margin-bottom:7px;padding:3px 6px;border-radius:999px;color:#b7c3d7;background:rgba(76,117,180,.13);font-size:7px;font-weight:900;text-transform:uppercase}.bwo-source-pill.market{color:#a9efb6;background:rgba(101,212,122,.12)}.bwo-player-big{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin:13px 0}.bwo-player-big div{padding:8px;border-radius:8px;background:rgba(0,0,0,.18)}.bwo-player-big span{display:block;color:#838c99;font-size:7px;font-weight:900;text-transform:uppercase}.bwo-player-big strong{display:block;margin-top:3px;color:#fff;font-size:12px}.bwo-player-form{display:flex;gap:4px;margin:10px 0}.bwo-player-form b{display:grid;width:25px;height:25px;place-items:center;border-radius:6px;color:#fff;background:#292e38;font-size:9px}.bwo-player-detail{margin-top:8px;color:#9aa3b0;font-size:8.5px;line-height:1.5}.bwo-player-actions{display:flex;gap:7px;margin-top:12px}.bwo-player-actions button{flex:1;padding:7px 8px;border:1px solid rgba(255,255,255,.13);border-radius:8px;color:#fff;background:#252a33;cursor:pointer;font:850 8px var(--bwo-font-body)}.bwo-player-actions button.primary{border-color:rgba(101,212,122,.35);color:#a9efb6;background:rgba(101,212,122,.1)}.bwo-compare-metrics{padding:14px;border:1px solid rgba(255,255,255,.08);border-radius:13px;background:#101216}.bwo-compare-verdict{margin-bottom:13px;padding:11px;border:1px solid rgba(101,212,122,.18);border-radius:9px;background:rgba(101,212,122,.055);text-align:center}.bwo-compare-verdict strong{display:block;color:#fff;font-size:12px}.bwo-compare-verdict span{display:block;margin-top:4px;color:#9fa8b5;font-size:8.5px;line-height:1.4}.bwo-metric-row{display:grid;grid-template-columns:65px minmax(0,1fr) 110px minmax(0,1fr) 65px;gap:8px;align-items:center;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.055)}.bwo-metric-row:last-child{border-bottom:0}.bwo-metric-value{color:#fff;font-size:9px;font-weight:900;font-variant-numeric:tabular-nums}.bwo-metric-value.left{text-align:right}.bwo-metric-label{color:#8f98a6;font-size:8px;font-weight:850;text-align:center}.bwo-metric-track{height:6px;overflow:hidden;border-radius:999px;background:#242831}.bwo-metric-fill{height:100%;border-radius:999px;background:#697384}.bwo-metric-track.left .bwo-metric-fill{margin-left:auto;background:#58a8db}.bwo-metric-track.right .bwo-metric-fill{background:#65d47a}.bwo-compare-foot{margin:12px 2px 0;color:#858e9b;font-size:8.5px;line-height:1.5}
 @media(max-width:1050px){.bwo-pro-kpis{grid-template-columns:repeat(2,minmax(0,1fr))}.bwo-activity-layout{grid-template-columns:1fr}.bwo-activity-side{display:grid;grid-template-columns:1fr 1fr}.bwo-compare-stage{grid-template-columns:1fr}.bwo-compare-metrics{order:3}.bwo-player-report{order:1}.bwo-player-report+.bwo-compare-metrics+.bwo-player-report{order:2}}
 @media(max-width:680px){.bwo-pro-head{align-items:stretch;flex-direction:column;padding:15px}.bwo-pro-body{padding:12px}.bwo-pro-kpis{grid-template-columns:1fr 1fr}.bwo-pro-control,.bwo-pro-control.search{width:100%;min-width:0}.bwo-activity-side{grid-template-columns:1fr}.bwo-compare-pickers{grid-template-columns:1fr}.bwo-compare-vs{display:none}.bwo-compare-options{align-items:flex-start;flex-wrap:wrap}.bwo-compare-best{margin-left:0}.bwo-metric-row{grid-template-columns:50px minmax(0,1fr) 85px minmax(0,1fr) 50px}}
`;zv.appendChild(e)}
function bwoProMoney(e){let t=Number(e)||0;return`${t<0?"−":""}${Math.abs(Math.round(t)).toLocaleString("es-ES")} €`}
function bwoProDate(e){let t=new Date(e);return Number.isNaN(t.getTime())?"Sin fecha":new Intl.DateTimeFormat("es-ES",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(t)}
function bwoActivityKind(e){let t=String(e??"").toLowerCase();return t.includes("clausula")?{key:"clause",label:t.includes("venta")?"Cláusula vendida":"Cláusula pagada"}:t.includes("compra")?{key:"buy",label:"Compra"}:t.includes("venta")?{key:"sell",label:"Venta"}:t.includes("abono")||t.includes("premio")?{key:"sell",label:"Abono"}:{key:"other",label:"Movimiento"}}
async function bwoActivityLoad(){let[e,t,n,r]=await Promise.all([ig(250),H(),jf().catch(()=>[]),Ai().catch(()=>!1)]),o=new Map((n??[]).filter(a=>a.won).map(a=>[`${a.manager_id}:${a.player_ref_id}:${a.occurred_at}`,a]));return{complete:r,loadedAt:Date.now(),rows:e.map(a=>{let i=a.player_ref_id?t.get(String(a.player_ref_id))??t.get(a.player_ref_id):null,l=o.get(`${a.player_id}:${a.player_ref_id}:${a.occurred_at}`),s=bwoActivityKind(a.type);return{...a,kind:s,player:i,playerName:i?.name??a.description??"Movimiento de liga",teamName:i?.team_name??"",market:Number(l?.market_price??0),paid:Number(l?.amount??0)}})}}
function bwoActivityKpi(e,t,n,r=""){return Wo.createElement("article",{className:`bwo-pro-kpi ${r}`.trim(),key:e},Wo.createElement("span",null,e),Wo.createElement("strong",null,t),Wo.createElement("small",null,n))}
function bwoProfessionalActivity({onClose:e,onOpenTeamLineup:t}){
  bwoProToolsEnsureStyles();
  let[n,r]=Wo.useState(null),[o,a]=Wo.useState(null),[i,l]=Wo.useState(""),[s,u]=Wo.useState("all"),[c,f]=Wo.useState("all"),[g,b]=Wo.useState("season"),[p,y]=Wo.useState("new"),[w,m]=Wo.useState(!1);
  async function d(v=!1){m(!0);a(null);try{v&&await Vg(0).catch(()=>{});r(await bwoActivityLoad())}catch(S){a(S?.message??"No se pudo cargar la actividad.")}finally{m(!1)}}
  Wo.useEffect(()=>{d(!1)},[]);
  let v=Wo.useMemo(()=>{
    if(!n)return[];
    let S=Date.now(),x=g==="7"?7:g==="30"?30:null,C=i.trim().toLocaleLowerCase("es");
    let N=n.rows.filter(_=>(s==="all"||_.kind.key===s)&&(c==="all"||String(_.player_id)===c)&&(!x||S-Date.parse(_.occurred_at)<=x*864e5)&&(!C||`${_.playerName} ${_.managerName} ${_.description} ${_.kind.label}`.toLocaleLowerCase("es").includes(C)));
    p==="amount"&&N.sort((_,L)=>Math.abs(Number(L.amount))-Math.abs(Number(_.amount)));
    return N
  },[n,i,s,c,g,p]);
  let S=Wo.useMemo(()=>{
    let x=new Map;
    for(let C of n?.rows??[]){let N=x.get(String(C.player_id))??{name:C.managerName,count:0,volume:0,net:0};N.count++;N.volume+=Math.abs(Number(C.amount)||0);N.net+=Number(C.amount)||0;x.set(String(C.player_id),N)}
    return[...x.values()].sort((C,N)=>N.count-C.count||N.volume-C.volume)
  },[n]);
  let x=v.reduce((C,N)=>C+Math.abs(Number(N.amount)||0),0),C=v.filter(N=>N.kind.key==="buy"||N.kind.key==="clause"&&Number(N.amount)<0).length,N=v.filter(N=>N.kind.key==="sell"||N.kind.key==="clause"&&Number(N.amount)>0).length,_=v.reduce((L,I)=>L+(Number(I.amount)||0),0),L=[...new Map((n?.rows??[]).map(I=>[String(I.player_id),I.managerName])).entries()].sort((I,M)=>I[1].localeCompare(M[1],"es"));
  let I=Wo.createElement("header",{className:"bwo-pro-head"},
    Wo.createElement("div",{className:"bwo-pro-head-main"},
      Wo.createElement("button",{className:"bwo-pro-back",onClick:e},"← Volver"),
      Wo.createElement("div",null,
        Wo.createElement("span",{className:"bwo-pro-eyebrow"},"BIWTOOLS · AUDITORÍA DE LIGA"),
        Wo.createElement("h2",{className:"bwo-pro-title"},"Actividad de la liga"),
        Wo.createElement("p",{className:"bwo-pro-subtitle"},"Histórico sincronizado de compras, ventas, cláusulas, abonos y movimientos económicos. Filtra por rival, periodo o tipo y consulta el contexto de cada operación.")
      )
    ),
    Wo.createElement("button",{className:"bwo-pro-refresh",disabled:w,onClick:()=>d(!0)},w?"Actualizando…":"Actualizar datos")
  );
  if(o)return Wo.createElement("div",{className:"bwo-pro-tool bwo-activity-pro"},I,Wo.createElement("div",{className:"bwo-pro-error"},o));
  if(!n)return Wo.createElement("div",{className:"bwo-pro-tool bwo-activity-pro"},I,Wo.createElement("div",{className:"bwo-pro-loading"},"Sincronizando el histórico completo de la temporada…"));
  let M=Wo.createElement("section",{className:"bwo-pro-kpis"},[
    bwoActivityKpi("Movimientos",v.length.toLocaleString("es-ES"),`${n.rows.length} registros cargados`),
    bwoActivityKpi("Volumen operado",bwoProMoney(x),"Suma absoluta del filtro"),
    bwoActivityKpi("Compras",String(C),"Incluye cláusulas pagadas","bad"),
    bwoActivityKpi("Ventas e ingresos",String(N),"Operaciones con entrada de saldo","good"),
    bwoActivityKpi("Flujo neto",`${_>=0?"+":"−"}${bwoProMoney(Math.abs(_))}`,"Balance del filtro",_>=0?"good":"bad")
  ]);
  let B=Wo.createElement("div",{className:"bwo-pro-toolbar"},
    Wo.createElement("input",{className:"bwo-pro-control search",type:"search",value:i,placeholder:"Buscar jugador, manager o movimiento…",onChange:R=>l(R.target.value)}),
    Wo.createElement("select",{className:"bwo-pro-control",value:s,onChange:R=>u(R.target.value)},[
      Wo.createElement("option",{value:"all",key:"all"},"Todos los movimientos"),
      Wo.createElement("option",{value:"buy",key:"buy"},"Compras"),
      Wo.createElement("option",{value:"sell",key:"sell"},"Ventas y abonos"),
      Wo.createElement("option",{value:"clause",key:"clause"},"Cláusulas"),
      Wo.createElement("option",{value:"other",key:"other"},"Otros")
    ]),
    Wo.createElement("select",{className:"bwo-pro-control",value:c,onChange:R=>f(R.target.value)},[
      Wo.createElement("option",{value:"all",key:"all"},"Todos los managers"),
      ...L.map(([R,F])=>Wo.createElement("option",{value:R,key:R},F))
    ]),
    Wo.createElement("select",{className:"bwo-pro-control",value:g,onChange:R=>b(R.target.value)},[
      Wo.createElement("option",{value:"season",key:"season"},"Toda la temporada"),
      Wo.createElement("option",{value:"30",key:"30"},"Últimos 30 días"),
      Wo.createElement("option",{value:"7",key:"7"},"Últimos 7 días")
    ]),
    Wo.createElement("select",{className:"bwo-pro-control",value:p,onChange:R=>y(R.target.value)},[
      Wo.createElement("option",{value:"new",key:"new"},"Más recientes"),
      Wo.createElement("option",{value:"amount",key:"amount"},"Mayor importe")
    ])
  );
  let E=v.length?v.slice(0,200).map(R=>Wo.createElement("tr",{key:R.id},
    Wo.createElement("td",null,bwoProDate(R.occurred_at)),
    Wo.createElement("td",null,Wo.createElement("span",{className:`bwo-act-type ${R.kind.key}`},R.kind.label)),
    Wo.createElement("td",null,Wo.createElement("div",{className:"bwo-activity-player"},
      R.player_ref_id?Wo.createElement("img",{src:Qb(R.player_ref_id),alt:"",onError:xg}):Wo.createElement("span",null,"↔"),
      Wo.createElement("div",null,
        Wo.createElement("button",{type:"button",onClick:()=>R.player&&bwoRecommendationOpenDetail(R.player)},R.playerName),
        Wo.createElement("small",null,R.teamName||R.description)
      )
    )),
    Wo.createElement("td",null,R.managerName),
    Wo.createElement("td",{className:`bwo-act-money ${Number(R.amount)>=0?"good":"bad"}`},`${Number(R.amount)>=0?"+":"−"}${bwoProMoney(Math.abs(Number(R.amount)))}`),
    Wo.createElement("td",null,R.market>0?Wo.createElement(Wo.Fragment,null,`Valor ${bwoProMoney(R.market)}`,Wo.createElement("span",{className:"bwo-act-context"},`Puja ${bwoProMoney(R.paid)} · ${R.paid>=R.market?"+":"−"}${bwoProMoney(Math.abs(R.paid-R.market))}`)):Wo.createElement("span",{className:"bwo-act-context"},R.description))
  )):[Wo.createElement("tr",{key:"empty"},Wo.createElement("td",{className:"bwo-empty-row",colSpan:6},"No hay movimientos que coincidan con los filtros."))];
  let P=Wo.createElement("div",{className:"bwo-pro-table-wrap"},Wo.createElement("table",{className:"bwo-pro-table"},
    Wo.createElement("thead",null,Wo.createElement("tr",null,["Fecha","Operación","Jugador / concepto","Manager","Importe","Contexto"].map(R=>Wo.createElement("th",{key:R},R)))),
    Wo.createElement("tbody",null,E)
  ));
  let T=Wo.createElement("aside",{className:"bwo-activity-side"},
    Wo.createElement("section",{className:"bwo-pro-side-card"},
      Wo.createElement("h3",null,"Managers más activos"),
      S.slice(0,6).map((R,F)=>Wo.createElement("div",{className:"bwo-manager-rank",key:R.name},
        Wo.createElement("b",null,`${F+1}º`),
        Wo.createElement("strong",null,R.name),
        Wo.createElement("span",null,`${R.count} mov. · ${bwoProMoney(R.volume)}`)
      ))
    ),
    Wo.createElement("section",{className:"bwo-pro-side-card"},
      Wo.createElement("h3",null,"Calidad y actualización"),
      Wo.createElement("div",{className:"bwo-manager-rank"},Wo.createElement("b",null,n.complete?"✓":"!"),Wo.createElement("strong",null,"Histórico"),Wo.createElement("span",null,n.complete?"Completo":"En proceso")),
      Wo.createElement("div",{className:"bwo-manager-rank"},Wo.createElement("b",null,"↻"),Wo.createElement("strong",null,"Última lectura"),Wo.createElement("span",null,bwoProDate(n.loadedAt))),
      Wo.createElement("p",{className:"bwo-data-note"},"Fuente primaria: tablón y API oficial de Biwenger. Los importes mostrados son movimientos registrados; no son estimaciones.")
    )
  );
  return Wo.createElement("div",{className:"bwo-pro-tool bwo-activity-pro"},I,Wo.createElement("main",{className:"bwo-pro-body"},M,B,Wo.createElement("div",{className:"bwo-activity-layout"},P,T)))
}
function bwoComparePosition(e){return({1:"Portero",2:"Defensa",3:"Centrocampista",4:"Delantero"})[String(e)]??"Sin posición"}
async function bwoComparatorLoad(e=!1){let t=await bwoRecBuildData(e),n=t.jp instanceof Map?t.jp:new Map,r=t.own.map(o=>({...bwoRecScore(o,n.get(String(o.id))),pool:"squad",key:`squad:${o.id}`})),a=t.candidates.map(o=>({...bwoRecScore(o,n.get(String(o.id))),pool:"market",key:`market:${o.id}`}));return{own:r,market:a,all:[...r,...a],balance:t.balance,maxBid:t.maxBid,loadedAt:Date.now()}}
function bwoCompareFmt(e,t){return e==null||!Number.isFinite(Number(e))?"—":t==="money"?bwoRecMoneyShort(Number(e)):t==="pct"?`${Math.round(Number(e))}%`:t==="plain"?Number(e).toFixed(1):`${Number(e).toFixed(1)} pts`}
function bwoComparePlayerCard(e,t,n){let r=e.pool==="market",o=e.physical?.label??(e.physical?.unavailable?"No disponible":"Disponible"),a=e.match?.opponentName??"Rival por confirmar";return Wo.createElement("article",{className:`bwo-player-report${t?" winner":""}`},Wo.createElement("span",{className:`bwo-source-pill${r?" market":""}`},r?"Mercado actual":"Tu plantilla"),Wo.createElement("div",{className:"bwo-player-report-head"},Wo.createElement("img",{src:`https://cdn.biwenger.com/i/p/${e.id}.png`,alt:"",onError:xg}),Wo.createElement("div",null,Wo.createElement("h3",null,e.name),Wo.createElement("p",null,`${bwoComparePosition(e.position)} · ${e.teamName||"Equipo sin dato"}`))),Wo.createElement("div",{className:"bwo-player-big"},Wo.createElement("div",null,Wo.createElement("span",null,"Previsión"),Wo.createElement("strong",null,bwoCompareFmt(e.projected))),Wo.createElement("div",null,Wo.createElement("span",null,"Valor"),Wo.createElement("strong",null,bwoCompareFmt(e.price,"money"))),Wo.createElement("div",null,Wo.createElement("span",null,"Titularidad"),Wo.createElement("strong",null,bwoCompareFmt(e.probabilityConsensus,"pct"))),Wo.createElement("div",null,Wo.createElement("span",null,"Media"),Wo.createElement("strong",null,bwoCompareFmt(e.baseAverage)))),Wo.createElement("div",{className:"bwo-player-form"},e.recentPoints?.length?e.recentPoints.slice(0,5).map((i,l)=>Wo.createElement("b",{key:l},Math.round(i))):Wo.createElement("span",{className:"bwo-player-detail"},"Sin jornadas recientes")),Wo.createElement("p",{className:"bwo-player-detail"},`${o} · ${e.match?.home?"Local":"Visitante"} ante ${a}${e.match?.difficulty!=null?` · dificultad ${Math.round(e.match.difficulty)}/100`:""}`),Wo.createElement("p",{className:"bwo-player-detail"},`Tendencia ${e.priceChange>=0?"▲":"▼"} ${bwoRecMoneyShort(Math.abs(e.priceChange||0))} · regularidad ${e.consistency==null?"sin muestra":e.consistency.toFixed(1)+"/10"}`),Wo.createElement("div",{className:"bwo-player-actions"},Wo.createElement("button",{type:"button",onClick:()=>bwoRecommendationOpenDetail(e.catalog,e)},"Ver ficha"),r&&Wo.createElement("button",{type:"button",className:"primary",onClick:()=>bwoRecommendationOpenNativeBid({id:e.id,name:e.name,price:e.price,position:e.position})},"Ver y pujar")))}
function bwoProfessionalComparator({onClose:e}){bwoProToolsEnsureStyles();let[t,n]=Wo.useState(null),[r,o]=Wo.useState(null),[a,i]=Wo.useState(""),[l,s]=Wo.useState(""),[u,c]=Wo.useState(!0),[f,g]=Wo.useState(!1);async function b(p=!1){g(!0),o(null);try{let y=await bwoComparatorLoad(p);n(y);let w=[...y.own].sort((m,d)=>m.rating-d.rating)[0]??y.own[0],m=y.market.filter(d=>!w||String(d.position)===String(w.position)).sort((d,v)=>v.rating-d.rating)[0]??y.market[0]??y.own.find(d=>d.key!==w?.key);i(w?.key??""),s(m?.key??"")}catch(y){o(y?.message??"No se pudo preparar el comparador.")}finally{g(!1)}}Wo.useEffect(()=>{b(!1)},[]);let p=t?.all.find(y=>y.key===a)??null,y=t?.all.find(w=>w.key===l)??null,w=t?(u&&p?t.all.filter(m=>m.key!==p.key&&String(m.position)===String(p.position)):t.all.filter(m=>m.key!==p?.key)):[];Wo.useEffect(()=>{if(!t||!p)return;let m=t.all.find(d=>d.key===l);if(!m||u&&String(m.position)!==String(p.position)){let d=t.market.filter(v=>v.key!==p.key&&(!u||String(v.position)===String(p.position))).sort((v,S)=>S.rating-v.rating)[0]??t.own.find(v=>v.key!==p.key&&(!u||String(v.position)===String(p.position)));s(d?.key??"")}},[a,u,t]);let m=p&&y?y.rating-p.rating:null,d=m==null?null:Math.abs(m)<.2?null:m>0?y:p,v=p&&y?[{label:"Previsión",a:p.projected,b:y.projected,type:"pts"},{label:"Media",a:p.baseAverage,b:y.baseAverage,type:"pts"},{label:"Titularidad",a:p.probabilityConsensus,b:y.probabilityConsensus,type:"pct"},{label:"Regularidad",a:p.consistency,b:y.consistency,type:"plain"},{label:"Valor",a:p.price,b:y.price,type:"money"},{label:"Tendencia",a:p.priceChange,b:y.priceChange,type:"money"}]:[];function S(){if(!t||!p)return;let x=t.market.filter(C=>String(C.position)===String(p.position)).sort((C,N)=>N.rating-C.rating)[0];x&&s(x.key)}return Wo.createElement("div",{className:"bwo-pro-tool bwo-comparator-pro"},Wo.createElement("header",{className:"bwo-pro-head"},Wo.createElement("div",{className:"bwo-pro-head-main"},Wo.createElement("button",{className:"bwo-pro-back",onClick:e},"← Volver"),Wo.createElement("div",null,Wo.createElement("span",{className:"bwo-pro-eyebrow"},"BIWTOOLS · DECISIÓN DE PLANTILLA"),Wo.createElement("h2",{className:"bwo-pro-title"},"Comparador profesional"),Wo.createElement("p",{className:"bwo-pro-subtitle"},"Compara tu plantilla con el mercado actual usando Media AS + SofaScore, forma reciente, titularidad, previsión, regularidad, precio y próximo rival."))),Wo.createElement("button",{className:"bwo-pro-refresh",disabled:f,onClick:()=>b(!0)},f?"Analizando…":"Actualizar mercado")),Wo.createElement("main",{className:"bwo-pro-body"},r?Wo.createElement("div",{className:"bwo-pro-error"},r):!t?Wo.createElement("div",{className:"bwo-pro-loading"},"Calculando rendimiento, forma y alternativas del mercado actual…"):Wo.createElement(Wo.Fragment,null,Wo.createElement("section",{className:"bwo-pro-kpis"},[bwoActivityKpi("Tu plantilla",String(t.own.length),"Jugadores analizados"),bwoActivityKpi("Mercado actual",String(t.market.length),"Candidatos comparables","good"),bwoActivityKpi("Puja máxima",bwoRecMoneyShort(t.maxBid),"Capacidad económica real",t.maxBid>0?"good":"bad"),bwoActivityKpi("Saldo",bwoRecMoneyShort(t.balance),"No limita el análisis",t.balance>=0?"good":"bad"),bwoActivityKpi("Sistema","AS + SofaScore","Puntuación activa")]),Wo.createElement("section",{className:"bwo-compare-pickers"},Wo.createElement("div",{className:"bwo-compare-picker"},Wo.createElement("label",null,"Jugador de referencia"),Wo.createElement("select",{value:a,onChange:x=>i(x.target.value)},t.own.map(x=>Wo.createElement("option",{value:x.key,key:x.key},`${x.name} · ${bwoComparePosition(x.position)} · ${bwoCompareFmt(x.projected)}`))),Wo.createElement("div",{className:"bwo-compare-options"},Wo.createElement("label",null,Wo.createElement("input",{type:"checkbox",checked:u,onChange:x=>c(x.target.checked)})," Comparar misma posición"))),Wo.createElement("div",{className:"bwo-compare-vs"},"VS"),Wo.createElement("div",{className:"bwo-compare-picker"},Wo.createElement("label",null,"Alternativa"),Wo.createElement("select",{value:l,onChange:x=>s(x.target.value)},Wo.createElement("optgroup",{label:"Mercado actual"},w.filter(x=>x.pool==="market").map(x=>Wo.createElement("option",{value:x.key,key:x.key},`${x.name} · ${bwoCompareFmt(x.projected)} · ${bwoCompareFmt(x.price,"money")}`))),Wo.createElement("optgroup",{label:"Tu plantilla"},w.filter(x=>x.pool==="squad").map(x=>Wo.createElement("option",{value:x.key,key:x.key},`${x.name} · ${bwoCompareFmt(x.projected)}`)))),Wo.createElement("div",{className:"bwo-compare-options"},Wo.createElement("span",null,`${w.filter(x=>x.pool==="market").length} alternativas disponibles`),Wo.createElement("button",{type:"button",className:"bwo-compare-best",onClick:S},"Elegir mejor del mercado")))),p&&y?Wo.createElement(Wo.Fragment,null,Wo.createElement("section",{className:"bwo-compare-stage"},bwoComparePlayerCard(p,d?.key===p.key),Wo.createElement("div",{className:"bwo-compare-metrics"},Wo.createElement("div",{className:"bwo-compare-verdict"},Wo.createElement("strong",null,d?`${d.name} obtiene la mejor valoración global`:"Comparación muy igualada"),Wo.createElement("span",null,m==null?"No hay datos suficientes.":`${m>=0?"La alternativa":"El jugador de referencia"} presenta ${Math.abs(m).toFixed(1)} puntos de índice de ventaja, ponderando rendimiento, disponibilidad y tendencia.`)),v.map(x=>{let C=Math.max(Math.abs(Number(x.a)||0),Math.abs(Number(x.b)||0),1),N=Math.max(4,Math.round(Math.abs(Number(x.a)||0)/C*100)),_=Math.max(4,Math.round(Math.abs(Number(x.b)||0)/C*100));return Wo.createElement("div",{className:"bwo-metric-row",key:x.label},Wo.createElement("span",{className:"bwo-metric-value left"},bwoCompareFmt(x.a,x.type)),Wo.createElement("div",{className:"bwo-metric-track left"},Wo.createElement("div",{className:"bwo-metric-fill",style:{width:`${N}%`}})),Wo.createElement("span",{className:"bwo-metric-label"},x.label),Wo.createElement("div",{className:"bwo-metric-track right"},Wo.createElement("div",{className:"bwo-metric-fill",style:{width:`${_}%`}})),Wo.createElement("span",{className:"bwo-metric-value"},bwoCompareFmt(x.b,x.type)))})),bwoComparePlayerCard(y,d?.key===y.key)),Wo.createElement("p",{className:"bwo-compare-foot"},"La valoración combina forma reciente, media de temporada, probabilidad de titularidad, estado físico, localía, dificultad del rival y tendencia de mercado. Es una ayuda comparativa: revisa la alineación oficial y el importe antes de confirmar una puja.")):Wo.createElement("div",{className:"bwo-pro-error"},"No hay una segunda alternativa compatible con los filtros actuales."))))}
$u=bwoProfessionalActivity;
Ku=bwoProfessionalComparator;

/* Navegación móvil integrada: misma entrada Herramientas que en escritorio, sin FAB. */
function bwoMobileToolsNavEnsureStyles(){let e=document.getElementById("bwo-mobile-tools-nav-styles");if(e?.dataset.bwoVersion==="1.5.4")return;e||(e=document.createElement("style"),e.id="bwo-mobile-tools-nav-styles"),e.dataset.bwoVersion="1.5.4",e.textContent=`
 @media(max-width:768px){
  app-nav linear-tabs{display:block!important;width:100%!important;max-width:100vw!important;min-width:0!important;overflow:hidden!important}
  app-nav linear-tabs>ul[role="navigation"]{display:flex!important;width:100%!important;max-width:100vw!important;min-width:0!important;margin:0!important;padding:0!important;overflow:hidden!important}
  app-nav linear-tabs>ul[role="navigation"]>li{flex:1 1 0!important;min-width:0!important;width:0!important;max-width:none!important;margin:0!important}
  app-nav linear-tabs>ul[role="navigation"]>li[data-bwo-tools-nav="1"]{display:block!important}
  app-nav linear-tabs>ul[role="navigation"]>li>a{display:flex!important;min-width:0!important;width:100%!important;height:58px!important;box-sizing:border-box!important;padding:6px 1px 5px!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:3px!important;overflow:hidden!important;font-size:8px!important;font-weight:650!important;line-height:1.05!important;text-align:center!important;text-overflow:ellipsis!important;white-space:nowrap!important}
  app-nav linear-tabs>ul[role="navigation"]>li>a>i{margin:0!important;font-size:20px!important;line-height:22px!important}
  app-nav linear-tabs>ul[role="navigation"]>li[data-bwo-tools-nav="1"]>a{color:#d4d7dd!important}
  app-nav linear-tabs>ul[role="navigation"]>li[data-bwo-tools-nav="1"].active>a{color:#fff!important;border-bottom:3px solid #e0142c!important;background:linear-gradient(180deg,transparent,rgba(224,20,44,.08))!important}
  app-nav linear-tabs .ink-bar{display:none!important}
  app-nav .bwo-nav-bids-native-icon::before{content:"⚙"!important;font-family:Arial,sans-serif!important;font-size:20px!important}
  app-nav .bwo-nav-bids-native-icon{font-size:0!important}
 }
 @media(max-width:370px){app-nav linear-tabs>ul[role="navigation"]>li>a{font-size:7px!important;letter-spacing:-.02em!important}}
`;document.head.appendChild(e)}
function bwoVisibleMobileNav(e){if(!e)return!1;let t=e.getBoundingClientRect(),n=getComputedStyle(e);return t.width>0&&t.height>0&&n.display!=="none"&&n.visibility!=="hidden"}
function bwoEnsureMobileToolsNav(){if(!matchMedia("(max-width: 768px)").matches)return;bwoMobileToolsNavEnsureStyles();let e=[...document.querySelectorAll("app-nav")].filter(bwoVisibleMobileNav);for(let t of e){let n=t.querySelector("linear-tabs ul[role='navigation']"),r=t.querySelector("a[href='/round']");if(!n||!r)continue;let o=r.closest("li")??bwoNavUnit(r),a=n.querySelector(":scope > [data-bwo-tools-nav='1']");if(!a){a=bwoPrepareBidsNavItem(o);if(!a)continue}a.classList.add("bwo-mobile-tools-nav"),a.dataset.bwoMobileToolsNav="1",o.nextElementSibling===a||o.insertAdjacentElement("afterend",a)}bwoSyncToolsNavState()}
var bwoEnsureBidsNavResponsiveBase=bwoEnsureBidsNav;
bwoEnsureBidsNav=function(){matchMedia("(max-width: 768px)").matches?bwoEnsureMobileToolsNav():bwoEnsureBidsNavResponsiveBase()};

globalThis.__BIWTOOLS_BALANCE_FIX__="v1.5.4-mobile-native-nav";
var bwoOriginalZw=zw;
Ri=async function(){let{state:e}=await z(),{date:t,startingBalance:n}=await qo(),r=e.balanceCorrections??{};return Object.values(e.players).filter(o=>!e.inactive[o.id]).map(o=>{let a=e.movements.filter(i=>i.player_id===o.id&&i.occurred_at>t).reduce((i,l)=>i+l.amount,0),s=Number(r[o.id]??0),u=n+a+s,c=e.teamValue[o.id];return{id:o.id,name:o.name,icon:o.icon,team_value:c?.teamValue??null,squad_size:c?.squadSize??null,team_value_change_today:c?.changeToday??null,balance:u,balance_exact:Object.prototype.hasOwnProperty.call(r,o.id)}}).sort((o,a)=>a.balance-o.balance)};
zw=async function(){let e=await z(),t=e.state.syncState,n=t.seasonAnchorDate??null,r=t.seasonStartingBalance??null,o;try{o=await bwoOriginalZw()}catch(a){if(n!=null&&r!=null){t.seasonAnchorDate=n,t.seasonStartingBalance=r,await Cu()}throw a}let i=await z(),l=i.state.syncState,s=await Li(),u=(await qo()).date,c=await rg(s.id,u);i.state.balanceCorrections??={};if(n===u&&r!=null)l.seasonAnchorDate=n,l.seasonStartingBalance=r,l.seasonStartingBalanceLockedV3="1";else i.state.balanceCorrections={},l.seasonStartingBalanceLockedV3="1";let f=Number(l.seasonStartingBalance??0);return i.state.balanceCorrections[String(s.id)]=Math.round(s.balance-(f+c)),await Cu(),o};
/* La tabla se reconcilia por ID; el nombre queda solo como respaldo del render original. */
var bwoOriginalGv=gv;
async function bwoReconcileLeagueRowsById(){let e=I0();if(!e)return;let t=e.closest("table");if(!t||!await Ai())return;let n=new Map((await hn()).map(o=>[String(o.id),o]));for(let o of t.querySelectorAll("tr")){if(o===e)continue;let a=o.querySelector("a[href*='/user/']"),i=U0(a?.getAttribute("href")??null),l=i?n.get(i):null,s=[...o.querySelectorAll(`.${Go}`)];if(!l||s.length<3)continue;s[0].textContent=Ki(l.balance),Qi(s[0],{color:l.balance>=0?"#5fcb72":"#e2664b"}),s[1].textContent=Ki(l.maxBid),Qi(s[1]);let u=s[2].firstElementChild??s[2];u.textContent=Ki(l.netWorth)}}
gv=async function(){await bwoOriginalGv(),await bwoReconcileLeagueRowsById()};
var bwoBalanceCycleRunning=!1,bwoSessionKey=null;
function bwoReadSessionKey(){try{return ke()+"|"+xu()}catch{return null}}
async function bwoRefreshBalances(){if(bwoBalanceCycleRunning)return;bwoBalanceCycleRunning=!0;try{let e=bwoReadSessionKey();e&&e!==bwoSessionKey&&(bwoSessionKey=e,Ju=0,Ti=null,Wi=null,bwoCloseBidsPanel()),Av(),Rv(),bwoEnsureBidsNav(),bwoEnsureBidsFabItem(),bwoMaintainToolsPage(),await Vg();let t=location.pathname,n=[];t.includes("/market")?(dv(),wv()):t.includes("/league")&&n.push(gv(),yv()),ov(),n.push(Cv(),_v(),kv(),Tv()),await Promise.allSettled(n)}catch(e){console.warn("[biwtools] No se pudo completar el refresco coordinado:",e)}finally{bwoBalanceCycleRunning=!1}}
var bwoOriginalRefreshWithRoundPlanner=bwoRefreshBalances;
bwoRefreshBalances=async function(){await bwoOriginalRefreshWithRoundPlanner(),await bwoEnhanceRoundPlanner().catch(e=>console.warn("[biwtools] No se pudo actualizar Jornada:",e)),await bwoEnhanceRecommendations().catch(e=>console.warn("[biwtools] No se pudieron actualizar Recomendaciones:",e))};
var bwoRuntimeToken=`v1.5.4-${Date.now()}-${Math.random().toString(36).slice(2)}`;
globalThis.__BIWTOOLS_ACTIVE_RUNTIME__=bwoRuntimeToken;
function bwoRuntimeActive(){return globalThis.__BIWTOOLS_ACTIVE_RUNTIME__===bwoRuntimeToken}
function bwoRemoveLegacyRuntime(e=!1){if(!bwoRuntimeActive())return;if(e&&document.querySelector(".bwo-tools-page-host")){let t=[...document.querySelectorAll("[data-bwo-tools-nav='1']")].find(n=>n.dataset.bwoRuntime!==bwoRuntimeToken),n=t?.matches("a")?t:t?.querySelector("a");try{n?.click()}catch{}}document.querySelectorAll("#biwtools-root").forEach(t=>{if(typeof Or!="undefined"&&t===Or)return;t.classList.add("bwo-tools-embedded"),t.setAttribute("aria-hidden","true"),t.remove()}),document.querySelectorAll("[data-bwo-tools-nav='1']").forEach(t=>{t.dataset.bwoRuntime===bwoRuntimeToken||t.remove()}),document.querySelectorAll(".bwo-tools-page-host").forEach(t=>{t.dataset.bwoRuntime===bwoRuntimeToken||t.remove()});let t=document.querySelector(`.bwo-tools-page-host[data-bwo-runtime="${bwoRuntimeToken}"]`);(e||!t)&&document.querySelectorAll("[data-bwo-tools-hidden='1']").forEach(n=>n.removeAttribute("data-bwo-tools-hidden"))}
bwoRemoveLegacyRuntime(!0);
var Or=document.createElement("div");Or.id=y1,Or.dataset.bwoRuntime=bwoRuntimeToken;var zv=Or.attachShadow({mode:"open"}),Fv=document.createElement("style");Fv.textContent=Ov;zv.appendChild(Fv);var qv=document.createElement("div");zv.appendChild(qv);document.body.appendChild(Or);var b1=(0,Dv.createRoot)(qv);b1.render((0,A.jsx)(h1,{}));new MutationObserver(()=>bwoRuntimeActive()&&bwoEnsureBidsFabItem()).observe(zv,{childList:!0,subtree:!0});Iv();Ef();bwoBindToolsExit();bwoEnsureBidsNav();bwoEnsureBidsFabItem();Bv();bwoRefreshBalances();setInterval(()=>bwoRuntimeActive()&&bwoRefreshBalances(),matchMedia("(max-width: 768px)").matches?10000:4000);setInterval(()=>bwoRuntimeActive()&&rv(),matchMedia("(max-width: 768px)").matches?800:350);window.addEventListener("scroll",()=>bwoRuntimeActive()&&ic(),{capture:!0,passive:!0});setInterval(()=>bwoRuntimeActive()&&ic(),matchMedia("(max-width: 768px)").matches?800:350);Or.style.pointerEvents="auto";function Hv(){if(!bwoRuntimeActive())return;bwoRemoveLegacyRuntime(),bwoEnsureBidsNav(),bwoEnsureBidsFabItem(),bwoMaintainToolsPage();if(Or.classList.contains("bwo-tools-embedded"))return;let e=document.querySelectorAll(".cdk-overlay-pane"),t=e.length>0?e[e.length-1]:null,n=document.querySelector(".cdk-overlay-container"),r=t??n??document.body;r.lastElementChild!==Or&&r.appendChild(Or)}new MutationObserver(Hv).observe(document.body,{childList:!0,subtree:!0});setInterval(Hv,matchMedia("(max-width: 768px)").matches?1200:500);})();
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
