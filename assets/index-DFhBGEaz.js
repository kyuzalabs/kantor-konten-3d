(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();var nh={exports:{}},sl={};var tv;function TM(){if(tv)return sl;tv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,f){var d=null;if(f!==void 0&&(d=""+f),l.key!==void 0&&(d=""+l.key),"key"in l){f={};for(var h in l)h!=="key"&&(f[h]=l[h])}else f=l;return l=f.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:f}}return sl.Fragment=e,sl.jsx=i,sl.jsxs=i,sl}var ev;function bM(){return ev||(ev=1,nh.exports=TM()),nh.exports}var zt=bM(),ih={exports:{}},de={};var nv;function AM(){if(nv)return de;nv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(H){return H===null||typeof H!="object"?null:(H=M&&H[M]||H["@@iterator"],typeof H=="function"?H:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,v={};function N(H,ht,et){this.props=H,this.context=ht,this.refs=v,this.updater=et||C}N.prototype.isReactComponent={},N.prototype.setState=function(H,ht){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,ht,"setState")},N.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function z(){}z.prototype=N.prototype;function D(H,ht,et){this.props=H,this.context=ht,this.refs=v,this.updater=et||C}var F=D.prototype=new z;F.constructor=D,y(F,N.prototype),F.isPureReactComponent=!0;var L=Array.isArray;function P(){}var k={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function R(H,ht,et){var st=et.ref;return{$$typeof:o,type:H,key:ht,ref:st!==void 0?st:null,props:et}}function V(H,ht){return R(H.type,ht,H.props)}function Q(H){return typeof H=="object"&&H!==null&&H.$$typeof===o}function lt(H){var ht={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(et){return ht[et]})}var pt=/\/+/g;function ct(H,ht){return typeof H=="object"&&H!==null&&H.key!=null?lt(""+H.key):ht.toString(36)}function Y(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(P,P):(H.status="pending",H.then(function(ht){H.status==="pending"&&(H.status="fulfilled",H.value=ht)},function(ht){H.status==="pending"&&(H.status="rejected",H.reason=ht)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function G(H,ht,et,st,Et){var Pt=typeof H;(Pt==="undefined"||Pt==="boolean")&&(H=null);var wt=!1;if(H===null)wt=!0;else switch(Pt){case"bigint":case"string":case"number":wt=!0;break;case"object":switch(H.$$typeof){case o:case e:wt=!0;break;case S:return wt=H._init,G(wt(H._payload),ht,et,st,Et)}}if(wt)return Et=Et(H),wt=st===""?"."+ct(H,0):st,L(Et)?(et="",wt!=null&&(et=wt.replace(pt,"$&/")+"/"),G(Et,ht,et,"",function(I){return I})):Et!=null&&(Q(Et)&&(Et=V(Et,et+(Et.key==null||H&&H.key===Et.key?"":(""+Et.key).replace(pt,"$&/")+"/")+wt)),ht.push(Et)),1;wt=0;var Tt=st===""?".":st+":";if(L(H))for(var jt=0;jt<H.length;jt++)st=H[jt],Pt=Tt+ct(st,jt),wt+=G(st,ht,et,Pt,Et);else if(jt=b(H),typeof jt=="function")for(H=jt.call(H),jt=0;!(st=H.next()).done;)st=st.value,Pt=Tt+ct(st,jt++),wt+=G(st,ht,et,Pt,Et);else if(Pt==="object"){if(typeof H.then=="function")return G(Y(H),ht,et,st,Et);throw ht=String(H),Error("Objects are not valid as a React child (found: "+(ht==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":ht)+"). If you meant to render a collection of children, use an array instead.")}return wt}function W(H,ht,et){if(H==null)return H;var st=[],Et=0;return G(H,st,"","",function(Pt){return ht.call(et,Pt,Et++)}),st}function mt(H){if(H._status===-1){var ht=H._result,et=ht();et.then(function(st){(H._status===0||H._status===-1)&&(H._status=1,H._result=st,et.status===void 0&&(et.status="fulfilled",et.value=st))},function(st){(H._status===0||H._status===-1)&&(H._status=2,H._result=st,et.status===void 0&&(et.status="rejected",et.reason=st))}),H._status===-1&&(H._status=0,H._result=et)}if(H._status===1)return H._result.default;throw H._result}var xt=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ht=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(ht))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function Vt(H){var ht=k.T,et={};et.types=ht!==null?ht.types:null,k.T=et;try{var st=H(),Et=k.S;Et!==null&&Et(et,st),typeof st=="object"&&st!==null&&typeof st.then=="function"&&st.then(P,xt)}catch(Pt){xt(Pt)}finally{ht!==null&&et.types!==null&&(ht.types=et.types),k.T=ht}}function ce(H){var ht=k.T;if(ht!==null){var et=ht.types;et===null?ht.types=[H]:et.indexOf(H)===-1&&et.push(H)}else Vt(ce.bind(null,H))}var Ee={map:W,forEach:function(H,ht,et){W(H,function(){ht.apply(this,arguments)},et)},count:function(H){var ht=0;return W(H,function(){ht++}),ht},toArray:function(H){return W(H,function(ht){return ht})||[]},only:function(H){if(!Q(H))throw Error("React.Children.only expected to receive a single React element child.");return H}};return de.Activity=p,de.Children=Ee,de.Component=N,de.Fragment=i,de.Profiler=l,de.PureComponent=D,de.StrictMode=s,de.Suspense=_,de.ViewTransition=x,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,de.__COMPILER_RUNTIME={__proto__:null,c:function(H){return k.H.useMemoCache(H)}},de.addTransitionType=ce,de.cache=function(H){return function(){return H.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(H,ht,et){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var st=y({},H.props),Et=H.key;if(ht!=null)for(Pt in ht.key!==void 0&&(Et=""+ht.key),ht)!w.call(ht,Pt)||Pt==="key"||Pt==="__self"||Pt==="__source"||Pt==="ref"&&ht.ref===void 0||(st[Pt]=ht[Pt]);var Pt=arguments.length-2;if(Pt===1)st.children=et;else if(1<Pt){for(var wt=Array(Pt),Tt=0;Tt<Pt;Tt++)wt[Tt]=arguments[Tt+2];st.children=wt}return R(H.type,Et,st)},de.createContext=function(H){return H={$$typeof:d,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:f,_context:H},H},de.createElement=function(H,ht,et){var st,Et={},Pt=null;if(ht!=null)for(st in ht.key!==void 0&&(Pt=""+ht.key),ht)w.call(ht,st)&&st!=="key"&&st!=="__self"&&st!=="__source"&&(Et[st]=ht[st]);var wt=arguments.length-2;if(wt===1)Et.children=et;else if(1<wt){for(var Tt=Array(wt),jt=0;jt<wt;jt++)Tt[jt]=arguments[jt+2];Et.children=Tt}if(H&&H.defaultProps)for(st in wt=H.defaultProps,wt)Et[st]===void 0&&(Et[st]=wt[st]);return R(H,Pt,Et)},de.createRef=function(){return{current:null}},de.forwardRef=function(H){return{$$typeof:h,render:H}},de.isValidElement=Q,de.lazy=function(H){return{$$typeof:S,_payload:{_status:-1,_result:H},_init:mt}},de.memo=function(H,ht){return{$$typeof:g,type:H,compare:ht===void 0?null:ht}},de.startTransition=Vt,de.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},de.use=function(H){return k.H.use(H)},de.useActionState=function(H,ht,et){return k.H.useActionState(H,ht,et)},de.useCallback=function(H,ht){return k.H.useCallback(H,ht)},de.useContext=function(H){return k.H.useContext(H)},de.useDebugValue=function(){},de.useDeferredValue=function(H,ht){return k.H.useDeferredValue(H,ht)},de.useEffect=function(H,ht){return k.H.useEffect(H,ht)},de.useEffectEvent=function(H){return k.H.useEffectEvent(H)},de.useId=function(){return k.H.useId()},de.useImperativeHandle=function(H,ht,et){return k.H.useImperativeHandle(H,ht,et)},de.useInsertionEffect=function(H,ht){return k.H.useInsertionEffect(H,ht)},de.useLayoutEffect=function(H,ht){return k.H.useLayoutEffect(H,ht)},de.useMemo=function(H,ht){return k.H.useMemo(H,ht)},de.useOptimistic=function(H,ht){return k.H.useOptimistic(H,ht)},de.useReducer=function(H,ht,et){return k.H.useReducer(H,ht,et)},de.useRef=function(H){return k.H.useRef(H)},de.useState=function(H){return k.H.useState(H)},de.useSyncExternalStore=function(H,ht,et){return k.H.useSyncExternalStore(H,ht,et)},de.useTransition=function(){return k.H.useTransition()},de.version="19.3.1",de}var iv;function Np(){return iv||(iv=1,ih.exports=AM()),ih.exports}var cn=Np(),ah={exports:{}},ol={},rh={exports:{}},sh={};var av;function RM(){return av||(av=1,(function(o){function e(Y,G){var W=Y.length;Y.push(G);t:for(;0<W;){var mt=W-1>>>1,xt=Y[mt];if(0<l(xt,G))Y[mt]=G,Y[W]=xt,W=mt;else break t}}function i(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var G=Y[0],W=Y.pop();if(W!==G){Y[0]=W;t:for(var mt=0,xt=Y.length,Vt=xt>>>1;mt<Vt;){var ce=2*(mt+1)-1,Ee=Y[ce],H=ce+1,ht=Y[H];if(0>l(Ee,W))H<xt&&0>l(ht,Ee)?(Y[mt]=ht,Y[H]=W,mt=H):(Y[mt]=Ee,Y[ce]=W,mt=ce);else if(H<xt&&0>l(ht,W))Y[mt]=ht,Y[H]=W,mt=H;else break t}}return G}function l(Y,G){var W=Y.sortIndex-G.sortIndex;return W!==0?W:Y.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var _=[],g=[],S=1,p=null,x=3,M=!1,b=!1,C=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function D(Y){for(var G=i(g);G!==null;){if(G.callback===null)s(g);else if(G.startTime<=Y)s(g),G.sortIndex=G.expirationTime,e(_,G);else break;G=i(g)}}function F(Y){if(C=!1,D(Y),!b)if(i(_)!==null)b=!0,L||(L=!0,Q());else{var G=i(g);G!==null&&ct(F,G.startTime-Y)}}var L=!1,P=-1,k=5,w=-1;function R(){return y?!0:!(o.unstable_now()-w<k)}function V(){if(y=!1,L){var Y=o.unstable_now();w=Y;var G=!0;try{t:{b=!1,C&&(C=!1,N(P),P=-1),M=!0;var W=x;try{e:{for(D(Y),p=i(_);p!==null&&!(p.expirationTime>Y&&R());){var mt=p.callback;if(typeof mt=="function"){p.callback=null,x=p.priorityLevel;var xt=mt(p.expirationTime<=Y);if(Y=o.unstable_now(),typeof xt=="function"){p.callback=xt,D(Y),G=!0;break e}p===i(_)&&s(_),D(Y)}else s(_);p=i(_)}if(p!==null)G=!0;else{var Vt=i(g);Vt!==null&&ct(F,Vt.startTime-Y),G=!1}}break t}finally{p=null,x=W,M=!1}G=void 0}}finally{G?Q():L=!1}}}var Q;if(typeof z=="function")Q=function(){z(V)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,pt=lt.port2;lt.port1.onmessage=V,Q=function(){pt.postMessage(null)}}else Q=function(){v(V,0)};function ct(Y,G){P=v(function(){Y(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Y){Y.callback=null},o.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<Y?Math.floor(1e3/Y):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(Y){switch(x){case 1:case 2:case 3:var G=3;break;default:G=x}var W=x;x=G;try{return Y()}finally{x=W}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(Y,G){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var W=x;x=Y;try{return G()}finally{x=W}},o.unstable_scheduleCallback=function(Y,G,W){var mt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?mt+W:mt):W=mt,Y){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=W+xt,Y={id:S++,callback:G,priorityLevel:Y,startTime:W,expirationTime:xt,sortIndex:-1},W>mt?(Y.sortIndex=W,e(g,Y),i(_)===null&&Y===i(g)&&(C?(N(P),P=-1):C=!0,ct(F,W-mt))):(Y.sortIndex=xt,e(_,Y),b||M||(b=!0,L||(L=!0,Q()))),Y},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(Y){var G=x;return function(){var W=x;x=G;try{return Y.apply(this,arguments)}finally{x=W}}}})(sh)),sh}var rv;function CM(){return rv||(rv=1,rh.exports=RM()),rh.exports}var oh={exports:{}},Pn={};var sv;function wM(){if(sv)return Pn;sv=1;var o=Np();function e(S){var p="https://react.dev/errors/"+S;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+S+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(S,p,x){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:M==null?null:M===d?d:""+M,children:S,containerInfo:p,implementation:x}}var _=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(S,p){if(S==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.browser=function(S){return{$$typeof:f,_reason:S}},Pn.createPortal=function(S,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return h(S,p,null,x)},Pn.flushSync=function(S){var p=_.T,x=s.p;try{if(_.T=null,s.p=2,S)return S()}finally{_.T=p,s.p=x,s.d.f()}},Pn.preconnect=function(S,p){typeof S=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(S,p))},Pn.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},Pn.preinit=function(S,p){if(typeof S=="string"&&p&&typeof p.as=="string"){var x=p.as,M=g(x,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,C=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(S,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:C}):x==="script"&&s.d.X(S,{crossOrigin:M,integrity:b,fetchPriority:C,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(S,p){if(typeof S=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=g(p.as,p.crossOrigin);s.d.M(S,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&s.d.M(S)},Pn.preload=function(S,p){if(typeof S=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,M=g(x,p.crossOrigin);s.d.L(S,x,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(S,p){if(typeof S=="string")if(p){var x=g(p.as,p.crossOrigin);s.d.m(S,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else s.d.m(S)},Pn.requestFormReset=function(S){s.d.r(S)},Pn.unstable_batchedUpdates=function(S,p){return S(p)},Pn.useFormState=function(S,p,x){return _.H.useFormState(S,p,x)},Pn.useFormStatus=function(){return _.H.useHostTransitionStatus()},Pn.version="19.3.1",Pn}var ov;function uS(){if(ov)return oh.exports;ov=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),oh.exports=wM(),oh.exports}var lv;function DM(){if(lv)return ol;lv=1;var o=CM(),e=Np(),i=uS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function _(t){if(f(t)!==t)throw Error(s(188))}function g(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var c=u.alternate;if(c===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===a)return _(u),t;if(c===r)return _(u),n;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=c;else{for(var m=!1,E=u.child;E;){if(E===a){m=!0,a=u,r=c;break}if(E===r){m=!0,r=u,a=c;break}E=E.sibling}if(!m){for(E=c.child;E;){if(E===a){m=!0,a=c,r=u;break}if(E===r){m=!0,r=c,a=u;break}E=E.sibling}if(!m)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}function p(t,n,a,r,u,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,u,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&p(t.child,n,a,r,u,c))return!0;t=t.sibling}return!1}function x(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],a=x(t);return a===null||C(n,t,a.child,{foundSelf:!1}),n}function C(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&C(t,n,a.child,r))return!0;a=a.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var v=null,N=null;function z(t,n,a){return t===a?!0:t===n?(v=t,!0):!1}function D(t,n,a){return t===a?(N=t,!1):t===n?(N!==null&&(v=t),!0):!1}function F(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function L(t,n,a){for(var r=0,u=t;u;u=a(u))r++;u=0;for(var c=n;c;c=a(c))u++;for(;0<r-u;)t=a(t),r--;for(;0<u-r;)n=a(n),u--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var P=Object.assign,k=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),lt=Symbol.for("react.profiler"),pt=Symbol.for("react.consumer"),ct=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),mt=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Vt=Symbol.for("react.activity"),ce=Symbol.for("react.legacy_hidden"),Ee=Symbol.for("react.memo_cache_sentinel"),H=Symbol.for("react.view_transition"),ht=Symbol.for("react.recoverable"),et=Symbol.iterator;function st(t){return t===null||typeof t!="object"?null:(t=et&&t[et]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Symbol.for("react.client.reference");function Pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Et?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case lt:return"Profiler";case Q:return"StrictMode";case G:return"Suspense";case W:return"SuspenseList";case Vt:return"Activity";case H:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case ct:return t.displayName||"Context";case pt:return(t._context.displayName||"Context")+".Consumer";case Y:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mt:return n=t.displayName||null,n!==null?n:Pt(t.type)||"Memo";case xt:n=t._payload,t=t._init;try{return Pt(t(n))}catch{}}return null}var wt=Array.isArray,Tt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,jt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},we=[],ue=-1;function $t(t){return{current:t}}function It(t){0>ue||(t.current=we[ue],we[ue]=null,ue--)}function se(t,n){ue++,we[ue]=t.current,t.current=n}var Ht=$t(null),le=$t(null),Pe=$t(null),Ye=$t(null);function U(t,n){switch(se(Pe,n),se(le,t),se(Ht,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?u_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=u_(n),t=c_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}It(Ht),se(Ht,t)}function T(){It(Ht),It(le),It(Pe)}function it(t){var n=t.memoizedState;n!==null&&(Hs._currentValue=n.memoizedState,se(Ye,t)),n=Ht.current;var a=c_(n,t.type);n!==a&&(se(le,t),se(Ht,a))}function B(t){le.current===t&&(It(Ht),It(le)),Ye.current===t&&(It(Ye),Hs._currentValue=I)}var ut,tt;function Rt(t){if(ut===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ut=n&&n[1]||"",tt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ut+t+tt}var yt=!1;function Ft(t,n){if(!t||yt)return"";yt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(Bt){var j=Bt}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(Bt){j=Bt}_t=!1;try{var at=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),_t=!0,new t}finally{_t&&(at!==void 0?Object.defineProperty(t.prototype,"props",at):delete t.prototype.props)}}}else{try{throw Error()}catch(Bt){j=Bt}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(Bt){if(Bt&&j&&typeof Bt.stack=="string")return[Bt.stack,j.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),m=c[0],E=c[1];if(m&&E){var O=m.split(`
`),K=E.split(`
`);for(u=r=0;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;for(;u<K.length&&!K[u].includes("DetermineComponentFrameRoot");)u++;if(r===O.length||u===K.length)for(r=O.length-1,u=K.length-1;1<=r&&0<=u&&O[r]!==K[u];)u--;for(;1<=r&&0<=u;r--,u--)if(O[r]!==K[u]){if(r!==1||u!==1)do if(r--,u--,0>u||O[r]!==K[u]){var ot=`
`+O[r].replace(" at new "," at ");return t.displayName&&ot.includes("<anonymous>")&&(ot=ot.replace("<anonymous>",t.displayName)),ot}while(1<=r&&0<=u);break}}}finally{yt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Rt(a):""}function Gt(t,n){switch(t.tag){case 26:case 27:case 5:return Rt(t.type);case 16:return Rt("Lazy");case 13:return t.child!==n&&n!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return Ft(t.type,!1);case 11:return Ft(t.type.render,!1);case 1:return Ft(t.type,!0);case 31:return Rt("Activity");case 30:return Rt("ViewTransition");default:return""}}function St(t){try{var n="",a=null;do n+=Gt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ut=Object.prototype.hasOwnProperty,te=o.unstable_scheduleCallback,qt=o.unstable_cancelCallback,Dt=o.unstable_shouldYield,ie=o.unstable_requestPaint,X=o.unstable_now,At=o.unstable_getCurrentPriorityLevel,Nt=o.unstable_ImmediatePriority,Zt=o.unstable_UserBlockingPriority,bt=o.unstable_NormalPriority,vt=o.unstable_LowPriority,Jt=o.unstable_IdlePriority,he=o.log,We=o.unstable_setDisableYieldValue,Te=null,an=null;function xn(t){if(typeof he=="function"&&We(t),an&&typeof an.setStrictMode=="function")try{an.setStrictMode(Te,t)}catch{}}var Bn=Math.clz32?Math.clz32:bl,la=Math.log,go=Math.LN2;function bl(t){return t>>>=0,t===0?32:31-(la(t)/go|0)|0}var vr=256,ua=262144,Sr=4194304;function mi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xr(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,c=t.suspendedLanes,m=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~c,r!==0?u=mi(r):(m&=E,m!==0?u=mi(m):a||(a=E&~t,a!==0&&(u=mi(a))))):(E=r&~c,E!==0?u=mi(E):m!==0?u=mi(m):a||(a=r&~t,a!==0&&(u=mi(a)))),u===0?0:n!==0&&n!==u&&(n&c)===0&&(c=u&-u,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:u}function La(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Al(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-Bn(a),u=1<<r;n|=t[r],a&=~u}return n}function wc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rl(){var t=Sr;return Sr<<=1,(Sr&62914560)===0&&(Sr=4194304),t}function _o(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function yr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Dc(t,n,a,r,u,c){var m=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,O=t.expirationTimes,K=t.hiddenUpdates;for(a=m&~a;0<a;){var ot=31-Bn(a),_t=1<<ot;E[ot]=0,O[ot]=-1;var j=K[ot];if(j!==null)for(K[ot]=null,ot=0;ot<j.length;ot++){var at=j[ot];at!==null&&(at.lane&=-536870913)}a&=~_t}r!==0&&A(t,r,0),c!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=c&~(m&~n))}function A(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Bn(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function J(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Bn(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function ft(t,n){var a=n&-n;return a=(a&42)!==0?1:dt(a),(a&(t.suspendedLanes|n))!==0?0:a}function dt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ct(){var t=jt.p;return t!==0?t:(t=window.event,t===void 0?32:W_(t.type))}function kt(t,n){var a=jt.p;try{return jt.p=t,n()}finally{jt.p=a}}var Yt=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Yt,Kt="__reactProps$"+Yt,oe="__reactContainer$"+Yt,ae="__reactEvents$"+Yt,xe="__reactListeners$"+Yt,He="__reactHandles$"+Yt,en="__reactResources$"+Yt,Ie="__reactMarker$"+Yt,De="__reactLoad$"+Yt;function re(t){delete t[Ot],delete t[Kt],delete t[xe],delete t[He]}function Be(t){var n;if(n=t[Ot])return n;for(var a=t.parentNode;a;){if(n=a[oe]||a[Ot]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=R_(t);t!==null;){if(a=t[Ot])return a;t=R_(t)}return n}t=a,a=t.parentNode}return null}function ve(t){if(t=t[Ot]||t[oe]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function yn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function ai(t){var n=t[en];return n||(n=t[en]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ue(t){t[Ie]=!0}function Oa(t){t[De]=void 0}var Qe=new Set,kn={};function pn(t,n){on(t,n),on(t+"Capture",n)}function on(t,n){for(kn[t]=n,t=0;t<n.length;t++)Qe.add(n[t])}var Fn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),is={},Xi={};function kS(t){return Ut.call(Xi,t)?!0:Ut.call(is,t)?!1:Fn.test(t)?Xi[t]=!0:(is[t]=!0,!1)}var Ne=!1;function Zp(){var t=Ne;return Ne=!1,t}function Cl(t,n,a){if(kS(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function wl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ca(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function ri(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kp(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function XS(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(m){a=""+m,c.call(this,m)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Uc(t){if(!t._valueTracker){var n=Kp(t)?"checked":"value";t._valueTracker=XS(t,n,""+t[n])}}function Qp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Kp(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var qS=/[\n"\\]/g;function gi(t){return t.replace(qS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Nc(t,n,a,r,u,c,m,E){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),n!=null?m==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ri(n)):t.value!==""+ri(n)&&(t.value=""+ri(n)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),n!=null?m==="number"&&t.value==n?Lc(t,ri(t.value)):Lc(t,ri(n)):a!=null?Lc(t,ri(a)):r!=null&&t.removeAttribute("value"),u==null&&c!=null&&(t.defaultChecked=!!c),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ri(E):t.removeAttribute("name")}function Jp(t,n,a,r,u,c,m,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Uc(t);return}a=a!=null?""+ri(a):"",n=n!=null?""+ri(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m),Uc(t)}function Lc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function as(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ri(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function $p(t,n,a){if(n!=null&&(n=""+ri(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ri(a):""}function tm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(wt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ri(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Uc(t)}function rs(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var YS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function em(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||YS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function nm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Ne=!0);for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&(em(t,u,r),Ne=!0)}else for(var c in n)n.hasOwnProperty(c)&&em(t,c,n[c])}function Oc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var WS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dl(t){return jS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qi(){}var zc=null;function Pc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ss=null,os=null;function im(t){var n=ve(t);if(n&&(t=n.stateNode)){var a=t[Kt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Nc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[Kt]||null;if(!u)throw Error(s(90));Nc(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Qp(r)}break t;case"textarea":$p(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&as(t,!!a.multiple,n,!1)}}}var Ic=!1;function am(t,n,a){if(Ic)return t(n,a);Ic=!0;try{var r=t(n);return r}finally{if(Ic=!1,(ss!==null||os!==null)&&(Du(),ss&&(n=ss,t=os,os=ss=null,im(n),t)))for(n=0;n<t.length;n++)im(t[n])}}function vo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Kt]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=!1;if(fa)try{var So={};Object.defineProperty(So,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{Bc=!1}var za=null,Fc=null,Ul=null;function rm(){if(Ul)return Ul;var t,n=Fc,a=n.length,r,u="value"in za?za.value:za.textContent,c=u.length;for(t=0;t<a&&n[t]===u[t];t++);var m=a-t;for(r=1;r<=m&&n[a-r]===u[c-r];r++);return Ul=u.slice(t,1<r?1-r:void 0)}function Nl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ll(){return!0}function sm(){return!1}function Xn(t){function n(a,r,u,c,m){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ll:sm,this.isPropagationStopped=sm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),n}var Pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Xn(Pa),xo=P({},Pa,{view:0,detail:0}),ZS=Xn(xo),Hc,Gc,yo,zl=P({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(Hc=t.screenX-yo.screenX,Gc=t.screenY-yo.screenY):Gc=Hc=0,yo=t),Hc)},movementY:function(t){return"movementY"in t?t.movementY:Gc}}),om=Xn(zl),KS=P({},zl,{dataTransfer:0}),QS=Xn(KS),JS=P({},xo,{relatedTarget:0}),Vc=Xn(JS),$S=P({},Pa,{animationName:0,elapsedTime:0,pseudoElement:0}),tx=Xn($S),ex=P({},Pa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nx=Xn(ex),ix=P({},Pa,{data:0}),lm=Xn(ix),ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ox(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=sx[t])?!!n[t]:!1}function kc(){return ox}var lx=P({},xo,{key:function(t){if(t.key){var n=ax[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(t){return t.type==="keypress"?Nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ux=Xn(lx),cx=P({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),um=Xn(cx),fx=P({},Pa,{submitter:0}),dx=Xn(fx),hx=P({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),px=Xn(hx),mx=P({},Pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),gx=Xn(mx),_x=P({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vx=Xn(_x),Sx=P({},Pa,{newState:0,oldState:0,source:0}),xx=Xn(Sx),yx=[9,13,27,32],Xc=fa&&"CompositionEvent"in window,Mo=null;fa&&"documentMode"in document&&(Mo=document.documentMode);var Mx=fa&&"TextEvent"in window&&!Mo,cm=fa&&(!Xc||Mo&&8<Mo&&11>=Mo),fm=" ",dm=!1;function hm(t,n){switch(t){case"keyup":return yx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function Ex(t,n){switch(t){case"compositionend":return pm(n);case"keypress":return n.which!==32?null:(dm=!0,fm);case"textInput":return t=n.data,t===fm&&dm?null:t;default:return null}}function Tx(t,n){if(ls)return t==="compositionend"||!Xc&&hm(t,n)?(t=rm(),Ul=Fc=za=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cm&&n.locale!=="ko"?null:n.data;default:return null}}var bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!bx[t.type]:n==="textarea"}function gm(t,n,a,r){ss?os?os.push(r):os=[r]:ss=r,n=Pu(n,"onChange"),0<n.length&&(a=new Ol("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Eo=null,To=null;function Ax(t){i_(t,0)}function Pl(t){var n=yn(t);if(Qp(n))return t}function _m(t,n){if(t==="change")return n}var vm=!1;if(fa){var qc;if(fa){var Yc="oninput"in document;if(!Yc){var Sm=document.createElement("div");Sm.setAttribute("oninput","return;"),Yc=typeof Sm.oninput=="function"}qc=Yc}else qc=!1;vm=qc&&(!document.documentMode||9<document.documentMode)}function xm(){Eo&&(Eo.detachEvent("onpropertychange",ym),To=Eo=null)}function ym(t){if(t.propertyName==="value"&&Pl(To)){var n=[];gm(n,To,t,Pc(t)),am(Ax,n)}}function Rx(t,n,a){t==="focusin"?(xm(),Eo=n,To=a,Eo.attachEvent("onpropertychange",ym)):t==="focusout"&&xm()}function Cx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pl(To)}function wx(t,n){if(t==="click")return Pl(n)}function Dx(t,n){if(t==="input"||t==="change")return Pl(n)}function Ux(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var si=typeof Object.is=="function"?Object.is:Ux;function bo(t,n){if(si(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Ut.call(n,u)||!si(t[u],n[u]))return!1}return!0}function Wc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Em(t,n){var a=Mm(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Mm(a)}}function Tm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Tm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function bm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Wc(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Wc(t.document)}return n}function jc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Nx=fa&&"documentMode"in document&&11>=document.documentMode,us=null,Zc=null,Ao=null,Kc=!1;function Am(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||us==null||us!==Wc(r)||(r=us,"selectionStart"in r&&jc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ao&&bo(Ao,r)||(Ao=r,r=Pu(Zc,"onSelect"),0<r.length&&(n=new Ol("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=us)))}function Mr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var cs={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionrun:Mr("Transition","TransitionRun"),transitionstart:Mr("Transition","TransitionStart"),transitioncancel:Mr("Transition","TransitionCancel"),transitionend:Mr("Transition","TransitionEnd")},Qc={},Rm={};fa&&(Rm=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function Er(t){if(Qc[t])return Qc[t];if(!cs[t])return t;var n=cs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Rm)return Qc[t]=n[a];return t}var Cm=Er("animationend"),wm=Er("animationiteration"),Dm=Er("animationstart"),Lx=Er("transitionrun"),Ox=Er("transitionstart"),zx=Er("transitioncancel"),Um=Er("transitionend"),Nm=new Map,Jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jc.push("scrollEnd");function wi(t,n){Nm.set(t,n),pn(n,[t])}var Px=0;function da(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Li.identifierPrefix;var a=Px++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Lm(t){if(t==null||typeof t=="string")return t;var n=null,a=Ds;if(a!==null)for(var r=0;r<a.length;r++){var u=t[a[r]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function ha(t,n){return t=Lm(t),n=Lm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],fs=0,$c=0;function Bl(){for(var t=fs,n=$c=fs=0;n<t;){var a=_i[n];_i[n++]=null;var r=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var c=_i[n];if(_i[n++]=null,r!==null&&u!==null){var m=r.pending;m===null?u.next=u:(u.next=m.next,m.next=u),r.pending=u}c!==0&&Om(a,u,c)}}function Fl(t,n,a,r){_i[fs++]=t,_i[fs++]=n,_i[fs++]=a,_i[fs++]=r,$c|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function tf(t,n,a,r){return Fl(t,n,a,r),Hl(t)}function Tr(t,n){return Fl(t,null,null,n),Hl(t)}function Om(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(u=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,u&&n!==null&&(u=31-Bn(a),t=c.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),c):null}function Hl(t){if(50<jo)throw jo=0,wu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ds={};function Ix(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,r){return new Ix(t,n,a,r)}function ef(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pa(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function zm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Gl(t,n,a,r,u,c){var m=0;if(r=t,typeof r=="function")ef(r)&&(m=1);else if(typeof r=="string")m=fM(t,a,Ht.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Vt:return t=Kn(31,a,n,u),t.elementType=Vt,t.lanes=c,t;case V:return br(a.children,u,c,n);case Q:m=8,u|=24;break;case lt:return t=Kn(12,a,n,u|2),t.elementType=lt,t.lanes=c,t;case G:return t=Kn(13,a,n,u),t.elementType=G,t.lanes=c,t;case W:return t=Kn(19,a,n,u),t.elementType=W,t.lanes=c,t;case ce:case H:return t=u|32,t=Kn(30,a,n,t),t.elementType=H,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ct:m=10;break t;case pt:m=9;break t;case Y:m=11;break t;case mt:m=14;break t;case xt:m=16,r=null;break t}m=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Kn(m,a,n,u),n.elementType=t,n.type=r,n.lanes=c,n}function br(t,n,a,r){return t=Kn(7,t,r,n),t.lanes=a,t}function nf(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function Pm(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function af(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Im=new WeakMap;function vi(t,n){if(typeof t=="object"&&t!==null){var a=Im.get(t);return a!==void 0?a:(n={value:t,source:n,stack:St(n)},Im.set(t,n),n)}return{value:t,source:n,stack:St(n)}}var hs=[],ps=0,Vl=null,Ro=0,Si=[],xi=0,Ia=null,Yi=1,Wi="";function ma(t,n){hs[ps++]=Ro,hs[ps++]=Vl,Vl=t,Ro=n}function Bm(t,n,a){Si[xi++]=Yi,Si[xi++]=Wi,Si[xi++]=Ia,Ia=t;var r=Yi;t=Wi;var u=32-Bn(r)-1;r&=~(1<<u),a+=1;var c=32-Bn(n)+u;if(30<c){var m=u-u%5;c=(r&(1<<m)-1).toString(32),r>>=m,u-=m,Yi=1<<32-Bn(n)+u|a<<u|r,Wi=c+t}else Yi=1<<c|a<<u|r,Wi=t}function kl(t){t.return!==null&&(ma(t,1),Bm(t,1,0))}function rf(t){for(;t===Vl;)Vl=hs[--ps],hs[ps]=null,Ro=hs[--ps],hs[ps]=null;for(;t===Ia;)Ia=Si[--xi],Si[xi]=null,Wi=Si[--xi],Si[xi]=null,Yi=Si[--xi],Si[xi]=null}function Fm(t,n){Si[xi++]=Yi,Si[xi++]=Wi,Si[xi++]=Ia,Yi=n.id,Wi=n.overflow,Ia=t}var An=null,Je=null,Se=!1,Ba=null,yi=!1,sf=Error(s(519));function Fa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Co(vi(n,t)),sf}function Hm(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Ot]=t,n[Kt]=r,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<Ko.length;a++)Me(Ko[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),Jp(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),tm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||o_(n.textContent,a)?(r.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),r.onScroll!=null&&Me("scroll",n),r.onScrollEnd!=null&&Me("scrollend",n),r.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||Fa(t,!0)}function Xl(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:An=An.return}}function ms(t){if(t!==An)return!1;if(!Se)return Xl(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Pd(t.type,t.memoizedProps)),a=!a),a&&Je&&Fa(t),Xl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Je=A_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Je=A_(t)}else n===27?(n=Je,er(t.type)?(t=qd,qd=null,Je=t):Je=n):Je=An?Ei(t.stateNode.nextSibling):null;return!0}function Ar(){Je=An=null,Se=!1}function of(){var t=Ba;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),Ba=null),t}function Co(t){Ba===null?Ba=[t]:Ba.push(t)}var lf=$t(null),Rr=null,ga=null;function Ha(t,n,a){se(lf,n._currentValue),n._currentValue=a}function _a(t){t._currentValue=lf.current,It(lf)}function ql(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function uf(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var c=u.dependencies;if(c!==null){var m=u.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=u;for(var O=0;O<n.length;O++)if(E.context===n[O]){c.lanes|=a,E=c.alternate,E!==null&&(E.lanes|=a),ql(c.return,a,t),r||(m=null);break t}c=E.next}}else if(u.tag===18){if(m=u.return,m===null)throw Error(s(341));m.lanes|=a,c=m.alternate,c!==null&&(c.lanes|=a),ql(m,a,t),m=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,m=u.alternate,m!==null&&(m.lanes|=a),ql(u.return,a,t),m=u.child,m=m!==null?m.sibling:null):m=u.child;if(m!==null)m.return=u;else for(m=u;m!==null;){if(m===t){m=null;break}if(u=m.sibling,u!==null){u.return=m.return,m=u;break}m=m.return}u=m}}function Cr(t,n,a,r){t=null;for(var u=n,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var m=u.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var E=u.type;si(u.pendingProps.value,m.value)||(t!==null?t.push(E):t=[E])}}else if(u===Ye.current){if(m=u.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Hs):t=[Hs])}u=u.return}return t!==null&&uf(n,t,a,r),n.flags|=262144,t!==null}function Yl(t){for(t=t.firstContext;t!==null;){if(!si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function wr(t){Rr=t,ga=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Un(t){return Gm(Rr,t)}function Wl(t,n){return Rr===null&&wr(t),Gm(t,n)}function Gm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ga===null){if(t===null)throw Error(s(308));ga=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ga=ga.next=n;return a}var Bx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Fx=o.unstable_scheduleCallback,Hx=o.unstable_NormalPriority,mn={$$typeof:ct,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cf(){return{controller:new Bx,data:new Map,refCount:0}}function wo(t){t.refCount--,t.refCount===0&&Fx(Hx,function(){t.controller.abort()})}function Vm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Do=null;function Gx(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Uo=null,ff=0,Dr=0,gs=null;function Vx(t,n){if(Uo===null){var a=Uo=[];ff=0,Dr=Rd(),gs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return ff++,n.then(km,km),n}function km(){if(--ff===0&&(Do=null,Uo!==null)){gs!==null&&(gs.status="fulfilled");var t=Uo;Uo=null,Dr=0,gs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function kx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Xm=Tt.S;Tt.S=function(t,n){if(Pg=X(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Vx(t,n),Do!==null)for(var a=Os;a!==null;)Vm(a,Do),a=a.next;if(a=t.types,a!==null){for(var r=Os;r!==null;)Vm(r,a),r=r.next;if(Dr!==0){r=Do,r===null&&(r=Do=[]);for(var u=0;u<a.length;u++){var c=a[u];r.indexOf(c)===-1&&r.push(c)}}}Xm!==null&&Xm(t,n)};var Ur=$t(null);function df(){var t=Ur.current;return t!==null?t:Ke.pooledCache}function jl(t,n){n===null?se(Ur,Ur.current):se(Ur,n.pool)}function qm(){var t=df();return t===null?null:{parent:mn._currentValue,pool:t}}var _s=Error(s(460)),hf=Error(s(474)),Zl=Error(s(542)),Kl={then:function(){}};function Ym(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Wm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Zm(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(qi,qi);else{if(t=Ke,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Zm(t),t}throw Lr=n,_s}}function Nr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Lr=a,_s):a}}var Lr=null;function jm(){if(Lr===null)throw Error(s(459));var t=Lr;return Lr=null,t}function Zm(t){if(t===_s||t===Zl)throw Error(s(483))}var vs=null,No=0;function Ql(t){var n=No;return No+=1,vs===null&&(vs=[]),Wm(vs,t,n)}function Ga(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Jl(t,n){throw n.$$typeof===k?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Km(t){function n(Z,q){if(t){var nt=Z.deletions;nt===null?(Z.deletions=[q],Z.flags|=16):nt.push(q)}}function a(Z,q){if(!t)return null;for(;q!==null;)n(Z,q),q=q.sibling;return null}function r(Z){for(var q=new Map;Z!==null;)Z.key===null?q.set(Z.index,Z):q.set(Z.key,Z),Z=Z.sibling;return q}function u(Z,q){return Z=pa(Z,q),Z.index=0,Z.sibling=null,Z}function c(Z,q,nt){return Z.index=nt,t?(nt=Z.alternate,nt!==null?(nt=nt.index,nt<q?(Z.flags|=2,q):nt):(Z.flags|=134217730,q)):(Z.flags|=1048576,q)}function m(Z){return t&&Z.alternate===null&&(Z.flags|=134217730),Z}function E(Z,q,nt,gt){return q===null||q.tag!==6?(q=nf(nt,Z.mode,gt),q.return=Z,q):(q=u(q,nt),q.return=Z,q)}function O(Z,q,nt,gt){var Wt=nt.type;return Wt===V?(Z=ot(Z,q,nt.props.children,gt,nt.key),Ga(Z,nt),Z):q!==null&&(q.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===xt&&Nr(Wt)===q.type)?(q=u(q,nt.props),Ga(q,nt),q.return=Z,q):(q=Gl(nt.type,nt.key,nt.props,null,Z.mode,gt),Ga(q,nt),q.return=Z,q)}function K(Z,q,nt,gt){return q===null||q.tag!==4||q.stateNode.containerInfo!==nt.containerInfo||q.stateNode.implementation!==nt.implementation?(q=af(nt,Z.mode,gt),q.return=Z,q):(q=u(q,nt.children||[]),q.return=Z,q)}function ot(Z,q,nt,gt,Wt){return q===null||q.tag!==7?(q=br(nt,Z.mode,gt,Wt),q.return=Z,q):(q=u(q,nt),q.return=Z,q)}function _t(Z,q,nt){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=nf(""+q,Z.mode,nt),q.return=Z,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case w:return nt=Gl(q.type,q.key,q.props,null,Z.mode,nt),Ga(nt,q),nt.return=Z,nt;case R:return q=af(q,Z.mode,nt),q.return=Z,q;case xt:return q=Nr(q),_t(Z,q,nt)}if(wt(q)||st(q))return q=br(q,Z.mode,nt,null),q.return=Z,q;if(typeof q.then=="function")return _t(Z,Ql(q),nt);if(q.$$typeof===ct)return _t(Z,Wl(Z,q),nt);Jl(Z,q)}return null}function j(Z,q,nt,gt){var Wt=q!==null?q.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return Wt!==null?null:E(Z,q,""+nt,gt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case w:return nt.key===Wt?O(Z,q,nt,gt):null;case R:return nt.key===Wt?K(Z,q,nt,gt):null;case xt:return nt=Nr(nt),j(Z,q,nt,gt)}if(wt(nt)||st(nt))return Wt!==null?null:ot(Z,q,nt,gt,null);if(typeof nt.then=="function")return j(Z,q,Ql(nt),gt);if(nt.$$typeof===ct)return j(Z,q,Wl(Z,nt),gt);Jl(Z,nt)}return null}function at(Z,q,nt,gt,Wt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Z=Z.get(nt)||null,E(q,Z,""+gt,Wt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case w:return Z=Z.get(gt.key===null?nt:gt.key)||null,O(q,Z,gt,Wt);case R:return Z=Z.get(gt.key===null?nt:gt.key)||null,K(q,Z,gt,Wt);case xt:return gt=Nr(gt),at(Z,q,nt,gt,Wt)}if(wt(gt)||st(gt))return Z=Z.get(nt)||null,ot(q,Z,gt,Wt,null);if(typeof gt.then=="function")return at(Z,q,nt,Ql(gt),Wt);if(gt.$$typeof===ct)return at(Z,q,nt,Wl(q,gt),Wt);Jl(q,gt)}return null}function Bt(Z,q,nt,gt){for(var Wt=null,Ae=null,ee=q,fe=q=0,vn=null;ee!==null&&fe<nt.length;fe++){ee.index>fe?(vn=ee,ee=null):vn=ee.sibling;var Ce=j(Z,ee,nt[fe],gt);if(Ce===null){ee===null&&(ee=vn);break}t&&ee&&Ce.alternate===null&&n(Z,ee),q=c(Ce,q,fe),Ae===null?Wt=Ce:Ae.sibling=Ce,Ae=Ce,ee=vn}if(fe===nt.length)return a(Z,ee),Se&&ma(Z,fe),Wt;if(ee===null){for(;fe<nt.length;fe++)ee=_t(Z,nt[fe],gt),ee!==null&&(q=c(ee,q,fe),Ae===null?Wt=ee:Ae.sibling=ee,Ae=ee);return Se&&ma(Z,fe),Wt}for(ee=r(ee);fe<nt.length;fe++)vn=at(ee,Z,fe,nt[fe],gt),vn!==null&&(t&&(Ce=vn.alternate,Ce!==null&&ee.delete(Ce.key===null?fe:Ce.key)),q=c(vn,q,fe),Ae===null?Wt=vn:Ae.sibling=vn,Ae=vn);return t&&ee.forEach(function(sr){return n(Z,sr)}),Se&&ma(Z,fe),Wt}function Qt(Z,q,nt,gt){if(nt==null)throw Error(s(151));for(var Wt=null,Ae=null,ee=q,fe=q=0,vn=null,Ce=nt.next();ee!==null&&!Ce.done;fe++,Ce=nt.next()){ee.index>fe?(vn=ee,ee=null):vn=ee.sibling;var sr=j(Z,ee,Ce.value,gt);if(sr===null){ee===null&&(ee=vn);break}t&&ee&&sr.alternate===null&&n(Z,ee),q=c(sr,q,fe),Ae===null?Wt=sr:Ae.sibling=sr,Ae=sr,ee=vn}if(Ce.done)return a(Z,ee),Se&&ma(Z,fe),Wt;if(ee===null){for(;!Ce.done;fe++,Ce=nt.next())Ce=_t(Z,Ce.value,gt),Ce!==null&&(q=c(Ce,q,fe),Ae===null?Wt=Ce:Ae.sibling=Ce,Ae=Ce);return Se&&ma(Z,fe),Wt}for(ee=r(ee);!Ce.done;fe++,Ce=nt.next())Ce=at(ee,Z,fe,Ce.value,gt),Ce!==null&&(t&&(vn=Ce.alternate,vn!==null&&ee.delete(vn.key===null?fe:vn.key)),q=c(Ce,q,fe),Ae===null?Wt=Ce:Ae.sibling=Ce,Ae=Ce);return t&&ee.forEach(function(EM){return n(Z,EM)}),Se&&ma(Z,fe),Wt}function me(Z,q,nt,gt){if(typeof nt=="object"&&nt!==null&&nt.type===V&&nt.key===null&&nt.props.ref===void 0&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case w:t:{for(var Wt=nt.key;q!==null;){if(q.key===Wt){if(Wt=nt.type,Wt===V){if(q.tag===7){a(Z,q.sibling),gt=u(q,nt.props.children),Ga(gt,nt),gt.return=Z,Z=gt;break t}}else if(q.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===xt&&Nr(Wt)===q.type){a(Z,q.sibling),gt=u(q,nt.props),Ga(gt,nt),gt.return=Z,Z=gt;break t}a(Z,q);break}else n(Z,q);q=q.sibling}nt.type===V?(gt=br(nt.props.children,Z.mode,gt,nt.key),Ga(gt,nt),gt.return=Z,Z=gt):(gt=Gl(nt.type,nt.key,nt.props,null,Z.mode,gt),Ga(gt,nt),gt.return=Z,Z=gt)}return m(Z);case R:t:{for(Wt=nt.key;q!==null;){if(q.key===Wt)if(q.tag===4&&q.stateNode.containerInfo===nt.containerInfo&&q.stateNode.implementation===nt.implementation){a(Z,q.sibling),gt=u(q,nt.children||[]),gt.return=Z,Z=gt;break t}else{a(Z,q);break}else n(Z,q);q=q.sibling}gt=af(nt,Z.mode,gt),gt.return=Z,Z=gt}return m(Z);case xt:return nt=Nr(nt),me(Z,q,nt,gt)}if(wt(nt))return Bt(Z,q,nt,gt);if(st(nt)){if(Wt=st(nt),typeof Wt!="function")throw Error(s(150));return nt=Wt.call(nt),Qt(Z,q,nt,gt)}if(typeof nt.then=="function")return me(Z,q,Ql(nt),gt);if(nt.$$typeof===ct)return me(Z,q,Wl(Z,nt),gt);Jl(Z,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,q!==null&&q.tag===6?(a(Z,q.sibling),gt=u(q,nt),gt.return=Z,Z=gt):(a(Z,q),gt=nf(nt,Z.mode,gt),gt.return=Z,Z=gt),m(Z)):a(Z,q)}return function(Z,q,nt,gt){try{No=0;var Wt=me(Z,q,nt,gt);return vs=null,Wt}catch(ee){if(ee===_s||ee===Zl)throw ee;var Ae=Kn(29,ee,null,Z.mode);return Ae.lanes=gt,Ae.return=Z,Ae}}}var Or=Km(!0),Qm=Km(!1),Va=!1;function pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xa(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Fe&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=Hl(t),Om(t,null,a),n}return Fl(t,r,n,a),Hl(t)}function Lo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,J(t,a)}}function gf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?u=c=m:c=c.next=m,a=a.next}while(a!==null);c===null?u=c=n:c=c.next=n}else u=c=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var _f=!1;function Oo(){if(_f){var t=gs;if(t!==null)throw t}}function zo(t,n,a,r){_f=!1;var u=t.updateQueue;Va=!1;var c=u.firstBaseUpdate,m=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var O=E,K=O.next;O.next=null,m===null?c=K:m.next=K,m=O;var ot=t.alternate;ot!==null&&(ot=ot.updateQueue,E=ot.lastBaseUpdate,E!==m&&(E===null?ot.firstBaseUpdate=K:E.next=K,ot.lastBaseUpdate=O))}if(c!==null){var _t=u.baseState;m=0,ot=K=O=null,E=c;do{var j=E.lane&-536870913,at=j!==E.lane;if(at?(be&j)===j:(r&j)===j){j!==0&&j===Dr&&(_f=!0),ot!==null&&(ot=ot.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Bt=t,Qt=E;j=n;var me=a;switch(Qt.tag){case 1:if(Bt=Qt.payload,typeof Bt=="function"){_t=Bt.call(me,_t,j);break t}_t=Bt;break t;case 3:Bt.flags=Bt.flags&-65537|128;case 0:if(Bt=Qt.payload,j=typeof Bt=="function"?Bt.call(me,_t,j):Bt,j==null)break t;_t=P({},_t,j);break t;case 2:Va=!0}}j=E.callback,j!==null&&(t.flags|=64,at&&(t.flags|=8192),at=u.callbacks,at===null?u.callbacks=[j]:at.push(j))}else at={lane:j,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ot===null?(K=ot=at,O=_t):ot=ot.next=at,m|=j;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;at=E,E=at.next,at.next=null,u.lastBaseUpdate=at,u.shared.pending=null}}while(!0);ot===null&&(O=_t),u.baseState=O,u.firstBaseUpdate=K,u.lastBaseUpdate=ot,c===null&&(u.shared.lanes=0),Qa|=m,t.lanes=m,t.memoizedState=_t}}function Jm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function $m(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Jm(a[t],n)}var qa=$t(null),$l=$t(0);function t0(t,n){t=Ma,se($l,t),se(qa,n),Ma=t|n.baseLanes}function vf(){se($l,Ma),se(qa,qa.current)}function Sf(){Ma=$l.current,It(qa),It($l)}var Nn=$t(null),Hn=null;function Ya(t){var n=t.alternate;se(Ln,Ln.current&1),se(Nn,t),Hn===null&&(n===null||qa.current!==null||n.memoizedState!==null)&&(Hn=t)}function xf(t){se(Ln,Ln.current),se(Nn,t),Hn===null&&(Hn=t)}function e0(t){t.tag===22?(se(Ln,Ln.current),se(Nn,t),Hn===null&&(Hn=t)):Wa()}function Wa(){se(Ln,Ln.current),se(Nn,Nn.current)}function oi(t){It(Nn),Hn===t&&(Hn=null),It(Ln)}var Ln=$t(0);function Po(t,n){se(Nn,Nn.current),se(Ln,n)}function yf(t){It(Ln),It(Nn),Hn===t&&(Hn=null)}function tu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kd(a)||Xd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var va=0,pe=null,je=null,gn=null,eu=!1,Ss=!1,zr=!1,nu=0,Io=0,xs=null,Xx=0;function ln(){throw Error(s(321))}function Mf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!si(t[a],n[a]))return!1;return!0}function Ef(t,n,a,r,u,c){return va=c,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Tt.H=t===null||t.memoizedState===null?B0:F0,zr=!1,c=a(r,u),zr=!1,Ss&&(c=i0(n,a,r,u)),n0(t),c}function n0(t){Tt.H=uu;var n=je!==null&&je.next!==null;if(va=0,gn=je=pe=null,eu=!1,Io=0,xs=null,n)throw Error(s(300));t===null||_n||(t=t.dependencies,t!==null&&Yl(t)&&(_n=!0))}function i0(t,n,a,r){pe=t;var u=0;do{if(Ss&&(xs=null),Io=0,Ss=!1,25<=u)throw Error(s(301));if(u+=1,gn=je=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Tt.H=Jx,c=n(a,r)}while(Ss);return c}function qx(){var t=Tt.H,n=t.useState()[0];return n=typeof n.then=="function"?Bo(n):n,t=t.useState()[0],(je!==null?je.memoizedState:null)!==t&&(pe.flags|=1024),n}function Tf(){var t=nu!==0;return nu=0,t}function bf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Af(t){if(eu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}eu=!1}va=0,gn=je=pe=null,Ss=!1,Io=nu=0,xs=null}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?pe.memoizedState=gn=t:gn=gn.next=t,gn}function hn(){if(je===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var n=gn===null?pe.memoizedState:gn.next;if(n!==null)gn=n,je=t;else{if(t===null)throw pe.alternate===null?Error(s(467)):Error(s(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},gn===null?pe.memoizedState=gn=t:gn=gn.next=t}return gn}function iu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bo(t){var n=Io;return Io+=1,xs===null&&(xs=[]),t=Wm(xs,t,n),n=pe,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,Tt.H=n===null||n.memoizedState===null?B0:F0),t}function au(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Bo(t);if(t.$$typeof===ht)return;if(t.$$typeof===ct)return Un(t)}throw Error(s(438,String(t)))}function Rf(t){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=pe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=iu(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=Ee;return n.index++,a}function Sa(t,n){return typeof n=="function"?n(t):n}function ru(t){var n=hn();return Cf(n,je,t)}function Cf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,c=r.pending;if(c!==null){if(u!==null){var m=u.next;u.next=c.next,c.next=m}n.baseQueue=u=c,r.pending=null}if(c=t.baseState,u===null)t.memoizedState=c;else{n=u.next;var E=m=null,O=null,K=n,ot=!1;do{var _t=K.lane&-536870913;if(_t!==K.lane?(be&_t)===_t:(va&_t)===_t){var j=K.revertLane;if(j===0)O!==null&&(O=O.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),_t===Dr&&(ot=!0);else if((va&j)===j){K=K.next,j===Dr&&(ot=!0);continue}else _t={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},O===null?(E=O=_t,m=c):O=O.next=_t,pe.lanes|=j,Qa|=j;_t=K.action,zr&&a(c,_t),c=K.hasEagerState?K.eagerState:a(c,_t)}else j={lane:_t,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},O===null?(E=O=j,m=c):O=O.next=j,pe.lanes|=_t,Qa|=_t;K=K.next}while(K!==null&&K!==n);if(O===null?m=c:O.next=E,!si(c,t.memoizedState)&&(_n=!0,ot&&(a=gs,a!==null)))throw a;t.memoizedState=c,t.baseState=m,t.baseQueue=O,r.lastRenderedState=c}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function wf(t){var n=hn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,c=n.memoizedState;if(u!==null){a.pending=null;var m=u=u.next;do c=t(c,m.action),m=m.next;while(m!==u);si(c,n.memoizedState)||(_n=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,r]}function a0(t,n,a){var r=pe,u=hn(),c=Se;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=n();var m=!si((je||u).memoizedState,a);if(m&&(u.memoizedState=a,_n=!0),u=u.queue,Nf(o0.bind(null,r,u,t),[t]),t=u.getSnapshot!==n||m||gn!==null&&(gn.memoizedState.tag&1)!==0,ys(t?9:8,{destroy:void 0},s0.bind(null,r,u,a,n),null),t){if(r.flags|=2048,Ke===null)throw Error(s(349));c||(va&127)!==0||r0(r,n,a)}return a}function r0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=iu(),pe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function s0(t,n,a,r){n.value=a,n.getSnapshot=r,l0(n)&&u0(t)}function o0(t,n,a){return a(function(){l0(n)&&u0(t)})}function l0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!si(t,a)}catch{return!0}}function u0(t){var n=Tr(t,2);n!==null&&ti(n,t,2)}function Df(t){var n=qn();if(typeof t=="function"){var a=t;if(t=a(),zr){xn(!0);try{a()}finally{xn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},n}function c0(t,n,a,r){return t.baseState=a,Cf(t,je,typeof r=="function"?r:Sa)}function Yx(t,n,a,r,u){if(lu(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){c.listeners.push(m)}};Tt.T!==null?a(!0):c.isTransition=!1,r(c),a=n.pending,a===null?(c.next=n.pending=c,f0(n,c)):(c.next=a.next,n.pending=a.next=c)}}function f0(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var c=Tt.T,m={};m.types=c!==null?c.types:null,Tt.T=m;try{var E=a(u,r),O=Tt.S;O!==null&&O(m,E),d0(t,n,E)}catch(K){Uf(t,n,K)}finally{c!==null&&m.types!==null&&(c.types=m.types),Tt.T=c}}else try{c=a(u,r),d0(t,n,c)}catch(K){Uf(t,n,K)}}function d0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){h0(t,n,r)},function(r){return Uf(t,n,r)}):h0(t,n,a)}function h0(t,n,a){n.status="fulfilled",n.value=a,p0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,f0(t,a)))}function Uf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,p0(n),n=n.next;while(n!==r)}t.action=null}function p0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function m0(t,n){return n}function g0(t,n){if(Se){var a=Ke.formState;if(a!==null){t:{var r=pe;if(Se){if(Je){e:{for(var u=Je,c=yi;u.nodeType!==8;){if(!c){u=null;break e}if(u=Ei(u.nextSibling),u===null){u=null;break e}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){Je=Ei(u.nextSibling),r=u.data==="F!";break t}}Fa(r)}r=!1}r&&(n=a[0])}}return a=qn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:m0,lastRenderedState:n},a.queue=r,a=z0.bind(null,pe,r),r.dispatch=a,r=Df(!1),c=If.bind(null,pe,!1,r.queue),r=qn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=Yx.bind(null,pe,u,c,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function _0(t){var n=hn();return v0(n,je,t)}function v0(t,n,a){if(n=Cf(t,n,m0)[0],t=ru(Sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Bo(n)}catch(m){throw m===_s?Zl:m}else r=n;n=hn();var u=n.queue,c=u.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,ys(9,{destroy:void 0},Wx.bind(null,u,a),null)),[r,c,t]}function Wx(t,n){t.action=n}function S0(t){var n=hn(),a=je;if(a!==null)return v0(n,a,t);hn(),n=n.memoizedState,a=hn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function ys(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=pe.updateQueue,n===null&&(n=iu(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function x0(){return hn().memoizedState}function su(t,n,a,r){var u=qn();pe.flags|=t,u.memoizedState=ys(1|n,{destroy:void 0},a,r===void 0?null:r)}function ou(t,n,a,r){var u=hn();r=r===void 0?null:r;var c=u.memoizedState.inst;je!==null&&r!==null&&Mf(r,je.memoizedState.deps)?u.memoizedState=ys(n,c,a,r):(pe.flags|=t,u.memoizedState=ys(1|n,c,a,r))}function y0(t,n){su(8390656,8,t,n)}function Nf(t,n){ou(2048,8,t,n)}function jx(t){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=iu(),pe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function M0(t){var n=hn().memoizedState;return jx({ref:n,nextImpl:t}),function(){if((Fe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function E0(t,n){return ou(4,2,t,n)}function T0(t,n){return ou(4,4,t,n)}function b0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function A0(t,n,a){a=a!=null?a.concat([t]):null,ou(4,4,b0.bind(null,n,t),a)}function Lf(){}function R0(t,n){var a=hn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Mf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function C0(t,n){var a=hn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Mf(n,r[1]))return r[0];if(r=t(),zr){xn(!0);try{t()}finally{xn(!1)}}return a.memoizedState=[r,n],r}function Of(t,n,a){return a===void 0||(va&1073741824)!==0&&(be&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Bg(),pe.lanes|=t,Qa|=t,a)}function w0(t,n,a,r){return si(a,n)?a:qa.current!==null?(t=Of(t,a,r),si(t,n)||(_n=!0),t):(va&106)===0||(va&1073741824)!==0&&(be&261930)===0?(_n=!0,t.memoizedState=a):(t=Bg(),pe.lanes|=t,Qa|=t,n)}function D0(t,n,a,r,u){var c=jt.p;jt.p=c!==0&&8>c?c:8;var m=Tt.T,E={};E.types=m!==null?m.types:null,Tt.T=E,If(t,!1,n,a);try{var O=u(),K=Tt.S;if(K!==null&&K(E,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ot=kx(O,r);Fo(t,n,ot,fi(t))}else Fo(t,n,r,fi(t))}catch(_t){Fo(t,n,{then:function(){},status:"rejected",reason:_t},fi())}finally{jt.p=c,m!==null&&E.types!==null&&(m.types=E.types),Tt.T=m}}function Zx(){}function zf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=U0(t).queue;D0(t,u,n,I,a===null?Zx:function(){return N0(t),a(r)})}function U0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:I},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function N0(t){var n=U0(t);n.next===null&&(n=t.alternate.memoizedState),Fo(t,n.next.queue,{},fi())}function Pf(){return Un(Hs)}function L0(){return hn().memoizedState}function O0(){return hn().memoizedState}function Kx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=fi();t=ka(a);var r=Xa(n,t,a);r!==null&&(ti(r,n,a),Lo(r,n,a)),n={cache:cf()},t.payload=n;return}n=n.return}}function Qx(t,n,a){var r=fi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},lu(t)?P0(n,a):(a=tf(t,n,a,r),a!==null&&(ti(a,t,r),I0(a,n,r)))}function z0(t,n,a){var r=fi();Fo(t,n,a,r)}function Fo(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(lu(t))P0(n,u);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var m=n.lastRenderedState,E=c(m,a);if(u.hasEagerState=!0,u.eagerState=E,si(E,m))return Fl(t,n,u,0),Ke===null&&Bl(),!1}catch{}if(a=tf(t,n,u,r),a!==null)return ti(a,t,r),I0(a,n,r),!0}return!1}function If(t,n,a,r){if(r={lane:2,revertLane:Rd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},lu(t)){if(n)throw Error(s(479))}else n=tf(t,a,r,2),n!==null&&ti(n,t,2)}function lu(t){var n=t.alternate;return t===pe||n!==null&&n===pe}function P0(t,n){Ss=eu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function I0(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,J(t,a)}}var uu={readContext:Un,use:au,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln,useEffectEvent:ln},B0={readContext:Un,use:au,useCallback:function(t,n){return qn().memoizedState=[t,n===void 0?null:n],t},useContext:Un,useEffect:y0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,su(4194308,4,b0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return su(4194308,4,t,n)},useInsertionEffect:function(t,n){su(4,2,t,n)},useMemo:function(t,n){var a=qn();n=n===void 0?null:n;var r=t();if(zr){xn(!0);try{t()}finally{xn(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=qn();if(a!==void 0){var u=a(n);if(zr){xn(!0);try{a(n)}finally{xn(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=Qx.bind(null,pe,t),[r.memoizedState,t]},useRef:function(t){var n=qn();return t={current:t},n.memoizedState=t},useState:function(t){t=Df(t);var n=t.queue,a=z0.bind(null,pe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Lf,useDeferredValue:function(t,n){var a=qn();return Of(a,t,n)},useTransition:function(){var t=Df(!1);return t=D0.bind(null,pe,t.queue,!0,!1),qn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=pe,u=qn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ke===null)throw Error(s(349));(be&127)!==0||r0(r,n,a)}u.memoizedState=a;var c={value:a,getSnapshot:n};return u.queue=c,y0(o0.bind(null,r,c,t),[t]),r.flags|=2048,ys(9,{destroy:void 0},s0.bind(null,r,c,a,n),null),a},useId:function(){var t=qn(),n=Ke.identifierPrefix;if(Se){var a=Wi,r=Yi;a=(r&~(1<<32-Bn(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=nu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Xx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Pf,useFormState:g0,useActionState:g0,useOptimistic:function(t){var n=qn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=If.bind(null,pe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Rf,useCacheRefresh:function(){return qn().memoizedState=Kx.bind(null,pe)},useEffectEvent:function(t){var n=qn(),a={impl:t};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},F0={readContext:Un,use:au,useCallback:R0,useContext:Un,useEffect:Nf,useImperativeHandle:A0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:C0,useReducer:ru,useRef:x0,useState:function(){return ru(Sa)},useDebugValue:Lf,useDeferredValue:function(t,n){var a=hn();return w0(a,je.memoizedState,t,n)},useTransition:function(){var t=ru(Sa)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:Bo(t),n]},useSyncExternalStore:a0,useId:L0,useHostTransitionStatus:Pf,useFormState:_0,useActionState:_0,useOptimistic:function(t,n){var a=hn();return c0(a,je,t,n)},useMemoCache:Rf,useCacheRefresh:O0,useEffectEvent:M0},Jx={readContext:Un,use:au,useCallback:R0,useContext:Un,useEffect:Nf,useImperativeHandle:A0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:C0,useReducer:wf,useRef:x0,useState:function(){return wf(Sa)},useDebugValue:Lf,useDeferredValue:function(t,n){var a=hn();return je===null?Of(a,t,n):w0(a,je.memoizedState,t,n)},useTransition:function(){var t=wf(Sa)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:Bo(t),n]},useSyncExternalStore:a0,useId:L0,useHostTransitionStatus:Pf,useFormState:S0,useActionState:S0,useOptimistic:function(t,n){var a=hn();return je!==null?c0(a,je,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Rf,useCacheRefresh:O0,useEffectEvent:M0};function Bf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ff={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=fi(),u=ka(r);u.payload=n,a!=null&&(u.callback=a),n=Xa(t,u,r),n!==null&&(ti(n,t,r),Lo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=fi(),u=ka(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Xa(t,u,r),n!==null&&(ti(n,t,r),Lo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=fi(),r=ka(a);r.tag=2,n!=null&&(r.callback=n),n=Xa(t,r,a),n!==null&&(ti(n,t,a),Lo(n,t,a))}};function H0(t,n,a,r,u,c,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,m):n.prototype&&n.prototype.isPureReactComponent?!bo(a,r)||!bo(u,c):!0}function G0(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Ff.enqueueReplaceState(n,n.state,null)}function Pr(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=P({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function V0(t){Il(t)}function k0(t){console.error(t)}function X0(t){Il(t)}function cu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function q0(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Hf(t,n,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){cu(t,n)},a}function Y0(t){return t=ka(t),t.tag=3,t}function W0(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var c=r.value;t.payload=function(){return u(c)},t.callback=function(){q0(n,a,r)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){q0(n,a,r),typeof u!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function $x(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Cr(n,a,u,!0),a=Nn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Hn===null?Uu():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===Kl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Td(t,r,u)),!1;case 22:return a.flags|=65536,r===Kl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Td(t,r,u)),!1}throw Error(s(435,a.tag))}return Td(t,r,u),Uu(),!1}if(Se)return n=Nn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==sf&&(t=Error(s(422),{cause:r}),Co(vi(t,a)))):(r!==sf&&(n=Error(s(423),{cause:r}),Co(vi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=vi(r,a),u=Hf(t.stateNode,r,u),gf(t,u),un!==4&&(un=2)),!1;var c=Error(s(520),{cause:r});if(c=vi(c,a),Wo===null?Wo=[c]:Wo.push(c),un!==4&&(un=2),n===null)return!0;r=vi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Hf(a.stateNode,r,t),gf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ja===null||!Ja.has(c))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Y0(u),W0(u,t,a,r),gf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Gf=Error(s(461)),_n=!1;function Mn(t,n,a,r){n.child=t===null?Qm(n,null,a,r):Or(n,t.child,a,r)}function j0(t,n,a,r,u){a=a.render;var c=n.ref;if("ref"in r){var m={};for(var E in r)E!=="ref"&&(m[E]=r[E])}else m=r;return wr(n),r=Ef(t,n,a,m,c,u),E=Tf(),t!==null&&!_n?(bf(t,n,u),xa(t,n,u)):(Se&&E&&kl(n),n.flags|=1,Mn(t,n,r,u),n.child)}function Z0(t,n,a,r,u){if(t===null){var c=a.type;return typeof c=="function"&&!ef(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,K0(t,n,c,r,u)):(t=Gl(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!Zf(t,u)){var m=c.memoizedProps;if(a=a.compare,a=a!==null?a:bo,a(m,r)&&t.ref===n.ref)return xa(t,n,u)}return n.flags|=1,t=pa(c,r),t.ref=n.ref,t.return=n,n.child=t}function K0(t,n,a,r,u){if(t!==null){var c=t.memoizedProps;if(bo(c,r)&&t.ref===n.ref)if(_n=!1,n.pendingProps=r=c,Zf(t,u))(t.flags&131072)!==0&&(_n=!0);else return n.lanes=t.lanes,xa(t,n,u)}return Vf(t,n,a,r,u)}function Q0(t,n,a,r){var u=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~c}else r=0,n.child=null;return J0(t,n,c,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&jl(n,c!==null?c.cachePool:null),c!==null?t0(n,c):vf(),e0(n);else return r=n.lanes=536870912,J0(t,n,c!==null?c.baseLanes|a:a,a,r)}else c!==null?(jl(n,c.cachePool),t0(n,c),Wa(),n.memoizedState=null):(t!==null&&jl(n,null),vf(),Wa());return Mn(t,n,u,a),n.child}function Ho(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function J0(t,n,a,r,u){var c=df();return c=c===null?null:{parent:mn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&jl(n,null),vf(),e0(n),t!==null&&Cr(t,n,r,!0),n.childLanes=u,null}function fu(t,n){return n=du({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function $0(t,n,a){return Or(n,t.child,null,a),t=fu(n,n.pendingProps),t.flags|=2,oi(n),n.memoizedState=null,t}function ty(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=fu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Ho(null,t);if(xf(n),(t=Je)?(t=b_(t,yi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Yi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=Pm(t),a.return=n,n.child=a,An=n,Je=null)):t=null,t===null)throw Fa(n);return n.lanes=536870912,null}return fu(n,r)}var c=t.memoizedState;if(c!==null){var m=c.dehydrated;if(xf(n),u)if(n.flags&256)n.flags&=-257,n=$0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(_n||Cr(t,n,a,!1),u=(a&t.childLanes)!==0,_n||u){if(qa.current===null){if(r=Ke,r!==null&&(m=ft(r,a),m!==0&&m!==c.retryLane))throw c.retryLane=m,Tr(t,m),ti(r,t,m),Gf;Uu()}n=$0(t,n,a)}else t=c.treeContext,Je=Ei(m.nextSibling),An=n,Se=!0,Ba=null,yi=!1,t!==null&&Fm(n,t),n=fu(n,r),n.flags|=134221824;return n}return t=pa(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ms(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Vf(t,n,a,r,u){return wr(n),a=Ef(t,n,a,r,void 0,u),r=Tf(),t!==null&&!_n?(bf(t,n,u),xa(t,n,u)):(Se&&r&&kl(n),n.flags|=1,Mn(t,n,a,u),n.child)}function tg(t,n,a,r,u,c){return wr(n),n.updateQueue=null,a=i0(n,r,a,u),n0(t),r=Tf(),t!==null&&!_n?(bf(t,n,c),xa(t,n,c)):(Se&&r&&kl(n),n.flags|=1,Mn(t,n,a,c),n.child)}function eg(t,n,a,r,u){if(wr(n),n.stateNode===null){var c=ds,m=a.contextType;typeof m=="object"&&m!==null&&(c=Un(m)),c=new a(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Ff,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},pf(n),m=a.contextType,c.context=typeof m=="object"&&m!==null?Un(m):ds,c.state=n.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(Bf(n,a,m,r),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(m=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),m!==c.state&&Ff.enqueueReplaceState(c,c.state,null),zo(n,r,c,u),Oo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,O=Pr(a,E);c.props=O;var K=c.context,ot=a.contextType;m=ds,typeof ot=="object"&&ot!==null&&(m=Un(ot));var _t=a.getDerivedStateFromProps;ot=typeof _t=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ot||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||K!==m)&&G0(n,c,r,m),Va=!1;var j=n.memoizedState;c.state=j,zo(n,r,c,u),Oo(),K=n.memoizedState,E||j!==K||Va?(typeof _t=="function"&&(Bf(n,a,_t,r),K=n.memoizedState),(O=Va||H0(n,a,O,r,j,K,m))?(ot||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=K),c.props=r,c.state=K,c.context=m,r=O):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,mf(t,n),m=n.memoizedProps,ot=Pr(a,m),c.props=ot,_t=n.pendingProps,j=c.context,K=a.contextType,O=ds,typeof K=="object"&&K!==null&&(O=Un(K)),E=a.getDerivedStateFromProps,(K=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==_t||j!==O)&&G0(n,c,r,O),Va=!1,j=n.memoizedState,c.state=j,zo(n,r,c,u),Oo();var at=n.memoizedState;m!==_t||j!==at||Va||t!==null&&t.dependencies!==null&&Yl(t.dependencies)?(typeof E=="function"&&(Bf(n,a,E,r),at=n.memoizedState),(ot=Va||H0(n,a,ot,r,j,at,O)||t!==null&&t.dependencies!==null&&Yl(t.dependencies))?(K||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,at,O),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,at,O)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=at),c.props=r,c.state=at,c.context=O,r=ot):(typeof c.componentDidUpdate!="function"||m===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,Ms(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=Or(n,t.child,null,u),n.child=Or(n,null,a,u)):Mn(t,n,a,u),n.memoizedState=c.state,t=n.child):t=xa(t,n,u),t}function ng(t,n,a,r){return Ar(),n.flags|=256,Mn(t,n,a,r),n.child}var kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xf(t){return{baseLanes:t,cachePool:qm()}}function qf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ci),t}function ig(t,n,a){var r=n.pendingProps,u=!1,c=(n.flags&128)!==0,m;if((m=c)||(m=t!==null&&t.memoizedState===null?!1:(Ln.current&2)!==0),m&&(u=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(u?Ya(n):Wa(),(t=Je)?(t=b_(t,yi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Yi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=Pm(t),a.return=n,n.child=a,An=n,Je=null)):t=null,t===null)throw Fa(n);return Xd(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,u?(Wa(),u=n.mode,c=du({mode:"hidden",children:c},u),r=br(r,u,a,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=Xf(a),r.childLanes=qf(t,m,a),n.memoizedState=kf,Ho(null,r)):(Ya(n),Yf(n,c))}var E=t.memoizedState;if(E!==null){var O=E.dehydrated;if(O!==null)return ey(t,n,c,m,r,O,E,a)}return u?(Wa(),u=r.fallback,c=n.mode,E=t.child,O=E.sibling,r=pa(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,O!==null?u=pa(O,u):(u=br(u,c,a,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,Ho(null,r),r=n.child,u=t.child.memoizedState,u===null?u=Xf(a):(c=u.cachePool,c!==null?(E=mn._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=qm(),u={baseLanes:u.baseLanes|a,cachePool:c}),r.memoizedState=u,r.childLanes=qf(t,m,a),n.memoizedState=kf,Ho(t.child,r)):(Ya(n),a=t.child,t=a.sibling,a=pa(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(m=n.deletions,m===null?(n.deletions=[t],n.flags|=16):m.push(t)),n.child=a,n.memoizedState=null,a)}function Yf(t,n){return n=du({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function du(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function hu(t,n,a){return Or(n,t.child,null,a),t=Yf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function ey(t,n,a,r,u,c,m,E){if(a)return n.flags&256?(Ya(n),n.flags&=-257,hu(t,n,E)):n.memoizedState!==null?(Wa(),n.child=t.child,n.flags|=128,null):(Wa(),c=u.fallback,m=n.mode,u=du({mode:"visible",children:u.children},m),c=br(c,m,E,null),c.flags|=2,u.return=n,c.return=n,u.sibling=c,n.child=u,Or(n,t.child,null,E),u=n.child,u.memoizedState=Xf(E),u.childLanes=qf(t,r,E),n.memoizedState=kf,Ho(null,u));if(Ya(n),Xd(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var O=r.dgst;return r=O,r!==""&&(u=Error(s(419)),u.stack="",u.digest=r,Co({value:u,source:null,stack:null})),hu(t,n,E)}if(_n||Cr(t,n,E,!1),r=(E&t.childLanes)!==0,_n||r){if(qa.current!==null)return hu(t,n,E);if(r=Ke,r!==null&&(u=ft(r,E),u!==0&&u!==m.retryLane))throw m.retryLane=u,Tr(t,u),ti(r,t,u),Gf;return kd(c)||Uu(),hu(t,n,E)}return kd(c)?(n.flags|=192,n.child=t.child,null):(t=m.treeContext,Je=Ei(c.nextSibling),An=n,Se=!0,Ba=null,yi=!1,t!==null&&Fm(n,t),n=Yf(n,u.children),n.flags|=134221824,n)}function ag(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),ql(t.return,n,a)}function rg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&tu(a)===null&&(n=t),t=t.sibling}return n}function pu(t,n,a,r,u,c){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:c}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=a,m.tailMode=u,m.treeForkCount=c)}function Wf(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function jf(t,n,a){var r=n.pendingProps,u=r.revealOrder,c=r.tail;r=r.children;var m=Ln.current;if(n.flags&128)return Po(n,m),null;var E=(m&2)!==0;if(E?(m=m&1|2,n.flags|=128):m&=1,Po(n,m),u==="backwards"&&t!==null?(Wf(t),Mn(t,n,r,a),Wf(t)):Mn(t,n,r,a),r=Se?Ro:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ag(t,a,n);else if(t.tag===19)ag(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=rg(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,Wf(n)),pu(n,!0,u,null,c,r);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&tu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}pu(n,!0,a,null,c,r);break;case"together":pu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=rg(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),pu(n,!1,u,a,c,r)}return n.child}function sg(t,n,a){var r=n.pendingProps;return Ha(n,n.type,r.value),Mn(t,n,r.children,a),n.child}function xa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Qa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Cr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=pa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=pa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Zf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Yl(t)))}function ny(t,n,a){switch(n.tag){case 3:U(n,n.stateNode.containerInfo),Ha(n,mn,t.memoizedState.cache),Ar();break;case 27:case 5:it(n);break;case 4:U(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,xf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ya(n),n.flags|=128,null;r=Cr(t,n,a,!1);var u=n.child.childLanes;return r||(a&u)!==0?ig(t,n,a):(Ya(n),t=xa(t,n,a),t!==null?t.sibling:null)}Ya(n);break;case 19:if(n.flags&128)return jf(t,n,a);if(u=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Cr(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return jf(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Po(n,Ln.current),r)break;return null;case 22:return n.lanes=0,Q0(t,n,a,n.pendingProps);case 24:Ha(n,mn,t.memoizedState.cache)}return xa(t,n,a)}function og(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)_n=!0;else{if(!Zf(t,a)&&(n.flags&128)===0)return _n=!1,ny(t,n,a);_n=(t.flags&131072)!==0}else _n=!1,Se&&(n.flags&1048576)!==0&&Bm(n,Ro,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Nr(n.elementType),n.type=t,typeof t=="function")ef(t)?(r=Pr(t,r),n.tag=1,n=eg(null,n,t,r,a)):(n.tag=0,n=Vf(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===Y){n.tag=11,n=j0(null,n,t,r,a);break t}else if(u===mt){n.tag=14,n=Z0(null,n,t,r,a);break t}else if(u===ct){n.tag=10,n.type=t,n=sg(null,n,a);break t}}throw n=Pt(t)||t,Error(s(306,n,""))}}return n;case 0:return Vf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Pr(r,n.pendingProps),eg(t,n,r,u,a);case 3:t:{if(U(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;u=c.element,mf(t,n),zo(n,r,null,a);var m=n.memoizedState;if(r=m.cache,Ha(n,mn,r),r!==c.cache&&uf(n,[mn],a,!0),Oo(),r=m.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=ng(t,n,r,a);break t}else if(r!==u){u=vi(Error(s(424)),n),Co(u),n=ng(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Je=Ei(t.firstChild),An=n,Se=!0,Ba=null,yi=!0,a=Qm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Ar(),r===u){n=xa(t,n,a);break t}Mn(t,n,r,a)}n=n.child}return n;case 26:return Ms(t,n),t===null?(a=N_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(n.stateNode=f_(n.type,n.pendingProps,Pe.current,n)):n.memoizedState=N_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return it(n),t===null&&Se&&(r=n.stateNode=C_(n.type,n.pendingProps,Pe.current),An=n,yi=!0,u=Je,er(n.type)?(qd=u,Je=Ei(r.firstChild)):Je=u),Mn(t,n,n.pendingProps.children,a),Ms(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((u=r=Je)&&(r=Ky(r,n.type,n.pendingProps,yi),r!==null?(n.stateNode=r,An=n,Je=Ei(r.firstChild),yi=!1,u=!0):u=!1),u||Fa(n)),it(n),u=n.type,c=n.pendingProps,m=t!==null?t.memoizedProps:null,r=c.children,Pd(u,c)?r=null:m!==null&&Pd(u,m)&&(n.flags|=32),n.memoizedState!==null&&(u=Ef(t,n,qx,null,null,a),Hs._currentValue=u),Ms(t,n),Mn(t,n,r,a),n.child;case 6:return t===null&&Se&&((t=a=Je)&&(a=Qy(a,n.pendingProps,yi),a!==null?(n.stateNode=a,An=n,Je=null,t=!0):t=!1),t||Fa(n)),null;case 13:return ig(t,n,a);case 4:return U(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Or(n,null,r,a):Mn(t,n,r,a),n.child;case 11:return j0(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Ms(t,n),Mn(t,n,r,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return sg(t,n,a);case 9:return u=n.type._context,r=n.pendingProps.children,wr(n),u=Un(u),r=r(u),n.flags|=1,Mn(t,n,r,a),n.child;case 14:return Z0(t,n,n.type,n.pendingProps,a);case 15:return K0(t,n,n.type,n.pendingProps,a);case 19:return jf(t,n,a);case 31:return ty(t,n,a);case 22:return Q0(t,n,a,n.pendingProps);case 24:return wr(n),r=Un(mn),t===null?(u=df(),u===null&&(u=Ke,c=cf(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=a),u=c),n.memoizedState={parent:r,cache:u},pf(n),Ha(n,mn,u)):((t.lanes&a)!==0&&(mf(t,n),zo(n,null,null,a),Oo()),u=t.memoizedState,c=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ha(n,mn,r)):(r=c.cache,Ha(n,mn,r),r!==u.cache&&uf(n,[mn],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:Se&&kl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:Ms(t,n),Mn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ya(t){t.flags|=4}function Kf(t,n,a,r,u){var c;if((c=(t.mode&32)!==0)&&(c=a===null?P_(n,r):P_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Vg())t.flags|=8192;else throw Lr=Kl,hf}else t.flags&=-16777217}function lg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!I_(n))if(Vg())t.flags|=8192;else throw Lr=Kl,hf}function mu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Rl():536870912,t.lanes|=n,Rs|=n)}function Go(t,n){if(!Se)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function $e(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&1206910976,r|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function iy(t,n,a){var r=n.pendingProps;switch(rf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),_a(mn),T(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ms(n)?ya(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,of())),$e(n),null;case 26:var u=n.type,c=n.memoizedState;return t===null?(ya(n),c!==null?($e(n),lg(n,c)):($e(n),Kf(n,u,null,r,a))):c?c!==t.memoizedState?(ya(n),$e(n),lg(n,c)):($e(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ya(n),$e(n),Kf(n,u,t,r,a)),null;case 27:if(B(n),a=Pe.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}t=Ht.current,ms(n)?Hm(n):(t=C_(u,r,a),n.stateNode=t,ya(n))}return $e(n),n.subtreeFlags&=-33554433,null;case 5:if(B(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}if(c=Ht.current,ms(n))Hm(n);else{var m=Jo(Pe.current);switch(c){case 1:c=m.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=m.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=m.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=m.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=m.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?m.createElement(u,{is:r.is}):m.createElement(u)}}c[Ot]=n,c[Kt]=r;t:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)c.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break t;for(;m.sibling===null;){if(m.return===null||m.return===n)break t;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=c;t:switch(zn(c,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ya(n)}}return $e(n),n.subtreeFlags&=-33554433,Kf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Pe.current,ms(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=An,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[Ot]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||o_(t.nodeValue,a)),t||Fa(n,!0)}else t=Jo(t).createTextNode(r),t[Ot]=n,n.stateNode=t}return $e(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=ms(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ot]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),t=!1}else a=of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(oi(n),n):(oi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $e(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ms(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Ot]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),u=!1}else u=of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(oi(n),n):(oi(n),null)}return oi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),mu(n,n.updateQueue),$e(n),null);case 4:return T(),t===null&&Ud(n.stateNode.containerInfo),n.flags|=67108864,$e(n),null;case 10:return _a(n.type),$e(n),null;case 19:if(yf(n),r=n.memoizedState,r===null)return $e(n),null;if(u=(n.flags&128)!==0,c=r.rendering,c===null)if(u)Go(r,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=tu(t),c!==null){for(n.flags|=128,Go(r,!1),t=c.updateQueue,n.updateQueue=t,mu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)zm(a,t),a=a.sibling;return Po(n,Ln.current&1|2),Se&&ma(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&X()>Ru&&(n.flags|=128,u=!0,Go(r,!1),n.lanes=4194304)}else{if(!u)if(t=tu(c),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,mu(n,t),Go(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!Se)return $e(n),null}else 2*X()-r.renderingStartTime>Ru&&a!==536870912&&(n.flags|=128,u=!0,Go(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=X(),t.sibling=null,c=Ln.current,c=u?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Se?Po(n,c):(a=c,se(Nn,n),se(Ln,a),Hn===null&&(Hn=n)),Se&&ma(n,r.treeForkCount),t}return $e(n),null;case 22:case 23:return oi(n),Sf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&mu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&It(Ur),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),_a(mn),$e(n),null;case 25:return null;case 30:return n.flags|=33554432,$e(n),null}throw Error(s(156,n.tag))}function ay(t,n){switch(rf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return _a(mn),T(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return B(n),null;case 31:if(n.memoizedState!==null){if(oi(n),n.alternate===null)throw Error(s(340));Ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(oi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return yf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return T(),null;case 10:return _a(n.type),null;case 22:case 23:return oi(n),Sf(),t!==null&&It(Ur),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return _a(mn),null;case 25:return null;default:return null}}function ug(t,n){switch(rf(n),n.tag){case 3:_a(mn),T();break;case 26:case 27:case 5:B(n);break;case 4:T();break;case 31:n.memoizedState!==null&&oi(n);break;case 13:oi(n);break;case 19:yf(n);break;case 10:_a(n.type);break;case 22:case 23:oi(n),Sf(),t!==null&&It(Ur);break;case 24:_a(mn)}}function Vo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var c=a.create,m=a.inst;r=c(),m.destroy=r}a=a.next}while(a!==u)}}catch(E){Xe(n,n.return,E)}}function ja(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var c=u.next;r=c;do{if((r.tag&t)===t){var m=r.inst,E=m.destroy;if(E!==void 0){m.destroy=void 0,u=n;var O=a,K=E;try{K()}catch(ot){Xe(u,O,ot)}}}r=r.next}while(r!==c)}}catch(ot){Xe(n,n.return,ot)}}function cg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{$m(n,a)}catch(r){Xe(t,t.return,r)}}}function fg(t,n,a){a.props=Pr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Xe(t,n,r)}}function ji(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var u=t.stateNode,c=da(t.memoizedProps,u);(u.ref===null||u.ref.name!==c)&&(u.ref=v_(c)),r=u.ref;break;case 7:if(t.stateNode===null){var m=new di(t);p(t.child,!1,jy,m,void 0,void 0),t.stateNode=m}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(E){Xe(t,n,E)}}function On(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Xe(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Xe(t,n,u)}else a.current=null}function gu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)T_(t.stateNode,n[a])}function dg(t){for(var n=t.return;n!==null&&(Jf(n)&&T_(t.stateNode,n.stateNode),!Qf(n));)n=n.return}function ko(t){for(var n=t.return;n!==null&&(Jf(n)&&Zy(t.stateNode,n.stateNode),!Qf(n));)n=n.return}function Qf(t){return t.tag===5||t.tag===3||t.tag===27}function Jf(t){return t&&t.tag===7&&t.stateNode!==null}function $f(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Xe(t,t.return,u)}}function td(t,n,a){try{var r=t.stateNode;Dy(r,t.type,a,n),r[Kt]=n}catch(u){Xe(t,t.return,u)}}function hg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&er(t.type)||t.tag===4}function ed(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||hg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&er(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nd(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi)),gu(t,r),Ne=!0;else if(u!==4&&(u===27&&(gu(t,r),r=null,er(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(nd(t,n,a,r),t=t.sibling;t!==null;)nd(t,n,a,r),t=t.sibling}function _u(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),gu(t,r),Ne=!0;else if(u!==4&&(u===27&&(gu(t,r),r=null,er(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(_u(t,n,a,r),t=t.sibling;t!==null;)_u(t,n,a,r),t=t.sibling}function pg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);zn(n,r,a),n[Ot]=t,n[Kt]=a}catch(c){Xe(t,t.return,c)}}var vu=!1,li=null;function mg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(vu=!0)}var Zi=null;function gg(){var t=Zi;return Zi=null,t}var Qn=0;function Es(t,n,a,r,u){return Qn=0,_g(t.child,n,a,r,u)}function _g(t,n,a,r,u){for(var c=!1;t!==null;){if(t.tag===5){var m=t.stateNode;if(r!==null){var E=Fd(m);r.push(E),E.view&&(c=!0)}else c||Fd(m).view&&(c=!0);vu=!0,g_(m,Qn===0?n:n+"_"+Qn,a),Qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||_g(t.child,n,a,r,u)&&(c=!0));t=t.sibling}return c}function Ki(t,n){for(;t!==null;)t.tag===5?__(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Ki(t.child,n)),t=t.sibling}function Su(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Su(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ha(n.default,n.share),n!=="none"&&(Es(t,a,n,null,!1)||Ki(t.child,!1))}t=t.sibling}}function id(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,u=da(r,a),c=ha(r.default,a.paired?r.share:r.enter);c!=="none"?Es(t,u,c,null,!1)?(Su(t),a.paired||n||Us(t,r.onEnter)):Ki(t.child,!1):Su(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)id(t,n),t=t.sibling;else Su(t)}function ad(t){if(li!==null&&li.size!==0){var n=li;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var u=n.get(r);if(u!==void 0){var c=ha(a.default,a.share);if(c!=="none"&&(Es(t,r,c,null,!1)?(c=t.stateNode,u.paired=c,c.paired=u,Us(t,a.onShare)):Ki(t.child,!1)),n.delete(r),n.size===0)break}}}ad(t)}t=t.sibling}}}function rd(t){if(t.tag===30){var n=t.memoizedProps,a=da(n,t.stateNode),r=li!==null?li.get(a):void 0,u=ha(n.default,r!==void 0?n.share:n.exit);u!=="none"&&(Es(t,a,u,null,!1)?r!==void 0?(u=t.stateNode,r.paired=u,u.paired=r,li.delete(a),Us(t,n.onShare)):Us(t,n.onExit):Ki(t.child,!1)),li!==null&&ad(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)rd(t),t=t.sibling;else li!==null&&ad(t)}function vg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=da(n,t.stateNode);n=ha(n.default,n.update),t.flags&=-5,n!=="none"&&Es(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&vg(t);t=t.sibling}}function sd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Ki(t.child,!1))}sd(t)}t=t.sibling}}function xu(t){if(t.tag===30)t.stateNode.paired=null,Ki(t.child,!1),sd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)xu(t),t=t.sibling;else sd(t)}function Sg(t){for(t=t.child;t!==null;)t.tag===30?Ki(t.child,!1):(t.subtreeFlags&33554432)!==0&&Sg(t),t=t.sibling}function od(t,n,a,r,u,c,m){for(var E=!1;n!==null;){if(n.tag===5){var O=n.stateNode;if(c!==null&&Qn<c.length){var K=c[Qn],ot=Fd(O);(K.view||ot.view)&&(E=!0);var _t;if(_t=(t.flags&4)===0)if(ot.clip)_t=!0;else{_t=K.rect;var j=ot.rect;_t=_t.y!==j.y||_t.x!==j.x||_t.height!==j.height||_t.width!==j.width}_t&&(t.flags|=4),ot.abs?ot=!K.abs:(K=K.rect,ot=ot.rect,ot=K.height!==ot.height||K.width!==ot.width),ot&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&g_(O,Qn===0?a:a+"_"+Qn,u),E&&(t.flags&4)!==0||(Zi===null&&(Zi=[]),Zi.push(O,Qn===0?r:r+"_"+Qn,n.memoizedProps)),Qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&m?t.flags|=n.flags&32:od(t,n.child,a,r,u,c,m)&&(E=!0));n=n.sibling}return E}function xg(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,u=da(a,r),c=ha(a.default,a.update),m;m=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;Qn=0,u=od(r,E,u,u,c,m,!1),(t.flags&4)!==0&&u&&Us(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&xg(t);t=t.sibling}}var Rn=!1,Ge=!1,Qi=!1,ld=!1,yg=typeof WeakSet=="function"?WeakSet:Set,Cn=null,Ji=!1,Xo=!1,yu=!1,ud=!1;function ry(t,n,a){if(t=t.containerInfo,Od=Gs,t=bm(t),jc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var c=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var E=0,O=-1,K=-1,ot=0,_t=0,j=t,at=null;e:for(;;){for(var Bt;j!==r||c!==0&&j.nodeType!==3||(O=E+c),j!==m||u!==0&&j.nodeType!==3||(K=E+u),j.nodeType===3&&(E+=j.nodeValue.length),(Bt=j.firstChild)!==null;)at=j,j=Bt;for(;;){if(j===t)break e;if(at===r&&++ot===c&&(O=E),at===m&&++_t===u&&(K=E),(Bt=j.nextSibling)!==null)break;j=at,at=j.parentNode}j=Bt}r=O===-1||K===-1?null:{start:O,end:K}}else r=null}r=r||{start:0,end:0}}else r=null;for(zd={focusedElem:t,selectionRange:r},Gs=!1,a=(a&335544064)===a,Cn=n,n=a?9270:1024;Cn!==null;){if(t=Cn,a&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)a&&rd(r[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&mg(t),Mu(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&rd(r),Mu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&mg(t),Mu(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,Cn=r):(a&&vg(t),Mu(a))}}li=null}function Mu(t){for(;Cn!==null;){var n=Cn,a=t,r=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&r!==null){a=void 0,u=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var m=Pr(n.type,u);a=c.getSnapshotBeforeUpdate(m,r),c.__reactInternalSnapshotBeforeUpdate=a}catch(E){Xe(n,n.return,E)}}break;case 3:if((u&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Vd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Vd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=da(r.memoizedProps,r.stateNode),u=n.memoizedProps,u=ha(u.default,u.update),u!=="none"&&Es(r,a,u,r.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Cn=r;break}Cn=n.return}}function Mg(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:$i(t,a),r&4&&Vo(5,a);break;case 1:if($i(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(m){Xe(a,a.return,m)}else{var u=Pr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(m){Xe(a,a.return,m)}}r&64&&cg(a),r&512&&ji(a,a.return);break;case 3:if($i(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{$m(t,n)}catch(m){Xe(a,a.return,m)}}break;case 27:n===null&&r&4&&pg(a);case 26:case 5:$i(t,a),n===null&&r&4&&$f(a),r&512&&ji(a,a.return);break;case 12:$i(t,a);break;case 31:$i(t,a),r&4&&Ag(t,a);break;case 13:$i(t,a),r&4&&Rg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=_y.bind(null,a),Jy(t,a))));break;case 22:if(r=a.memoizedState!==null||Rn,!r){var c=n!==null&&n.memoizedState!==null||Ge;n=Rn,u=Ge,Rn=r,(Ge=c)&&!u?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ni(t,a,r)):$i(t,a),Rn=n,Ge=u}break;case 30:$i(t,a),r&512&&ji(a,a.return);break;case 7:r&512&&ji(a,a.return);default:$i(t,a)}}function cd(t,n){for(t=t.child;t!==null;)Eg(t,n),t=t.sibling}function Eg(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var u=t.stateNode,c=t.memoizedProps.style,m=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(O){Xe(t,t.return,O)}fd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ne=!0}catch(O){Xe(t,t.return,O)}break;case 18:try{var E=t.stateNode;n?m_(E,!0):m_(t.stateNode,!1)}catch(O){Xe(t,t.return,O)}break;case 22:case 23:t.memoizedState===null&&cd(t,n);break;default:cd(t,n)}}function fd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:Eg(a,r);break t;case 22:a.memoizedState===null&&fd(a,r);break t;default:fd(a,r)}}t=t.sibling}}function Tg(t){var n=t.alternate;n!==null&&(t.alternate=null,Tg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&re(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nn=null,Jn=!1;function Di(t,n,a){for(a=a.child;a!==null;)bg(t,n,a),a=a.sibling}function bg(t,n,a){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Te,a)}catch{}switch(a.tag){case 26:Ge||On(a,n),Di(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ge&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||On(a,n),ko(a);var r=nn,u=Jn;er(a.type)&&(nn=a.stateNode,Jn=!1),Di(t,n,a),w_(a.stateNode,a.type,a.memoizedProps),nn=r,Jn=u;break;case 5:Ge||On(a,n),ko(a);case 6:if(a.tag===6&&ko(a),r=nn,u=Jn,nn=null,Di(t,n,a),nn=r,Jn=u,nn!==null)if(Jn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode),Ne=!0}catch(c){Xe(a,n,c)}else try{nn.removeChild(a.stateNode),Ne=!0}catch(c){Xe(a,n,c)}break;case 18:nn!==null&&(Jn?(t=nn,p_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Vs(t)):p_(nn,a.stateNode));break;case 4:r=nn,u=Jn,nn=a.stateNode.containerInfo,Jn=!0,Di(t,n,a),nn=r,Jn=u;break;case 0:case 11:case 14:case 15:ja(2,a,n),Ge||ja(4,a,n),Di(t,n,a);break;case 1:Ge||(On(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&fg(a,n,r)),Di(t,n,a);break;case 21:Di(t,n,a);break;case 22:Ge=(r=Ge)||a.memoizedState!==null,Di(t,n,a),Ge=r;break;case 30:On(a,n),Di(t,n,a);break;case 7:Ge||On(a,n),Di(t,n,a);break;default:Di(t,n,a)}}function Ag(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Vs(t)}catch(a){Xe(n,n.return,a)}}}function Rg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Vs(t)}catch(a){Xe(n,n.return,a)}}function sy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new yg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new yg),n;default:throw Error(s(435,t.tag))}}function Eu(t,n){var a=sy(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=vy.bind(null,t,r);r.then(u,u)}})}function Yn(t,n,a){var r=n.deletions;if(r!==null)for(var u=0;u<r.length;u++){var c=r[u],m=t,E=n,O=E;t:for(;O!==null;){switch(O.tag){case 27:if(er(O.type)){nn=O.stateNode,Jn=!1;break t}break;case 5:nn=O.stateNode,Jn=!1;break t;case 3:case 4:nn=O.stateNode.containerInfo,Jn=!0;break t}O=O.return}if(nn===null)throw Error(s(160));bg(m,E,c),nn=null,Jn=!1,m=c.alternate,m!==null&&(m.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Cg(n,t,a),n=n.sibling}var Ui=null;function Cg(t,n,a){var r=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var m=r[c];m.ref.impl=m.nextImpl}Yn(n,t,a),Wn(t),u&4&&(ja(3,t,t.return),Vo(3,t),ja(5,t,t.return));break;case 1:Yn(n,t,a),Wn(t),u&512&&(Ge||r===null||On(r,r.return)),u&64&&Rn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Ui,Yn(n,t,a),Wn(t),u&512&&(Ge||r===null||On(r,r.return)),u&4)if(u=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(Rn)t.stateNode=f_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=c.ownerDocument||c;e:switch(n){case"title":r=u.getElementsByTagName("title")[0],(!r||r[Ie]||r[Ot]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(n),u.head.insertBefore(r,u.querySelector("head > title"))),zn(r,n,a),r[Ot]=t,Ue(r),n=r;break t;case"link":if(c=z_("link","href",u).get(n+(a.href||""))){for(m=0;m<c.length;m++)if(r=c[m],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(m,1);break e}}r=u.createElement(n),zn(r,n,a),u.head.appendChild(r);break;case"meta":if(c=z_("meta","content",u).get(n+(a.content||""))){for(m=0;m<c.length;m++)if(r=c[m],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(m,1);break e}}r=u.createElement(n),zn(r,n,a),u.head.appendChild(r);break;default:throw Error(s(468,n))}r[Ot]=t,Ue(r),n=r}t.stateNode=n}else Rn||Zd(c,t.type,t.stateNode);else t.stateNode=O_(c,a,t.memoizedProps);else u!==a?(u===null?(n=r.stateNode,n===null||Ge||n.parentNode.removeChild(n)):u.count--,a===null?Rn||Zd(c,t.type,t.stateNode):O_(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&td(t,t.memoizedProps,r.memoizedProps);break;case 27:Yn(n,t,a),Wn(t),u&512&&(Ge||r===null||On(r,r.return)),r!==null&&u&4&&td(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Qi,Qi=!1,Yn(n,t,a),Qi=c,Wn(t),u&512&&(Ge||r===null||On(r,r.return)),t.flags&32){n=t.stateNode;try{rs(n,""),Ne=!0}catch(ot){Xe(t,t.return,ot)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,td(t,n,r!==null?r.memoizedProps:n)),u&1024&&(ld=!0);break;case 6:if(Yn(n,t,a),Wn(t),u&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Ne=!0}catch(ot){Xe(t,t.return,ot)}}break;case 3:if(Ne=!1,Bu=null,c=Ui,Ui=$o(n.containerInfo),Yn(n,t,a),Ui=c,Wn(t),u&4&&r!==null&&r.memoizedState.isDehydrated)try{Vs(n.containerInfo)}catch(ot){Xe(t,t.return,ot)}ld&&(ld=!1,wg(t)),Ne=!1;break;case 4:u=Qi,Qi=Rn,r=Zp(),c=Ui,Ui=$o(t.stateNode.containerInfo),Yn(n,t,a),Wn(t),Ui=c,Ne&&Xo&&(yu=!0),Ne=r,Qi=u;break;case 12:Yn(n,t,a),Wn(t);break;case 31:Yn(n,t,a),Wn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Eu(t,n)));break;case 13:Yn(n,t,a),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Au=X()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Eu(t,n)));break;case 22:c=t.memoizedState!==null,m=r!==null&&r.memoizedState!==null;var E=Rn,O=Ge,K=Qi;Rn=E||c,Qi=K||c,Ge=O||m,Yn(n,t,a),Ge=O,Qi=K,Rn=E,Wn(t),u&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||m||Rn||Ge||(n=m||Ge,a=Rn,r=Ge,Rn=c||Rn,Ge=n,Za(t,2),Rn=a,Ge=r),!c&&Qi||cd(t,c)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Eu(t,a))));break;case 19:Yn(n,t,a),Wn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Eu(t,n)));break;case 30:u&512&&(Ge||r===null||On(r,r.return)),u=Zp(),c=Xo,m=(a&335544064)===a,E=t.memoizedProps,Xo=m&&ha(E.default,E.update)!=="none",Yn(n,t,a),Wn(t),m&&r!==null&&Ne&&(t.flags|=4),Xo=c,Ne=u;break;case 21:break;case 7:u&512&&(Ge||r===null||On(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Yn(n,t,a),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(hg(r)){a=r;break}r=r.return}r=null;for(var u=t.return;u!==null;){if(Jf(u)){var c=u.stateNode;r===null?r=[c]:r.push(c)}if(Qf(u))break;u=u.return}var m=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var E=a.stateNode,O=ed(t);_u(t,O,E,m);break;case 5:var K=a.stateNode;a.flags&32&&(rs(K,""),a.flags&=-33);var ot=ed(t);_u(t,ot,K,m);break;case 3:case 4:var _t=a.stateNode.containerInfo,j=ed(t);nd(t,j,_t,m);break;default:throw Error(s(161))}}catch(at){Xe(t,t.return,at)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function wg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;wg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Gs=!0,n.reset(),Gs=!1),t=t.sibling}}function Ts(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Dg(n,t),n=n.sibling;else xg(n)}function Dg(t,n){var a=t.alternate;if(a===null)id(t,!1);else switch(t.tag){case 3:if(ud=Ji=!1,gg(),Ts(n,t),!Ji&&!yu){if(t=Zi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var u=t[r+1];__(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ud=!0}Zi=null;break;case 5:Ts(n,t);break;case 4:r=Ji,Ji=!1,Ts(n,t),Ji&&(yu=!0),Ji=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?id(t,!1):Ts(n,t));break;case 30:r=Ji,u=gg(),Ji=!1,Ts(n,t),Ji&&(t.flags|=4);var c=t.memoizedProps,m=t.stateNode;n=da(c,m),m=da(a.memoizedProps,m);var E=ha(c.default,c.update);E==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,Qn=0,n=od(t,a,n,m,E,c,!0),Qn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Us(t,t.memoizedProps.onUpdate),Zi=u):u!==null&&(u.push.apply(u,Zi),Zi=u),Ji=(t.flags&32)!==0?!0:r;break;default:Ts(n,t)}}function $i(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Mg(t,n.alternate,n),n=n.sibling}function Za(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:ja(4,a,a.return),Za(a,r);break;case 1:On(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&fg(a,a.return,u),Za(a,r);break;case 27:(r&2)!==0&&w_(a.stateNode,a.type,a.memoizedProps);case 5:On(a,a.return),a.tag!==5&&a.tag!==27||ko(a),Za(a,r);break;case 6:ko(a);break;case 26:On(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Ge||u.parentNode.removeChild(u),Za(a,r);break;case 22:a.memoizedState===null&&Za(a,r);break;case 30:On(a,a.return),Za(a,r);break;case 7:On(a,a.return);default:Za(a,r)}t=t.sibling}}function Ni(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,u=t,c=n,m=c.flags,E=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Ni(u,c,a),Vo(4,c);break;case 1:if(Ni(u,c,a),r=c,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ot){Xe(r,r.return,ot)}if(r=c,u=r.updateQueue,u!==null){var O=r.stateNode;try{var K=u.shared.hiddenCallbacks;if(K!==null)for(u.shared.hiddenCallbacks=null,u=0;u<K.length;u++)Jm(K[u],O)}catch(ot){Xe(r,r.return,ot)}}E&&m&64&&cg(c),ji(c,c.return);break;case 27:(a&2)!==0&&pg(c);case 5:c.tag!==5&&c.tag!==27||dg(c),Ni(u,c,a),E&&r===null&&m&4&&$f(c),ji(c,c.return);break;case 6:dg(c);break;case 26:O=c.stateNode,c.memoizedState!==null||O===null||Rn||Zd($o(O.ownerDocument),c.type,O),Ni(u,c,a),E&&r===null&&m&4&&$f(c),ji(c,c.return);break;case 12:Ni(u,c,a);break;case 31:Ni(u,c,a),E&&m&4&&Ag(u,c);break;case 13:Ni(u,c,a),E&&m&4&&Rg(u,c);break;case 22:c.memoizedState===null&&Ni(u,c,a),ji(c,c.return);break;case 30:Ni(u,c,a),ji(c,c.return);break;case 7:ji(c,c.return);default:Ni(u,c,a)}n=n.sibling}}function dd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&wo(a))}function hd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&wo(t))}function Mi(t,n,a,r){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)Ug(t,n,a,r),n=n.sibling;else u&&Sg(n)}function Ug(t,n,a,r){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&xu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,r),c&2048&&Vo(9,n);break;case 1:Mi(t,n,a,r);break;case 3:Mi(t,n,a,r),u&&ud&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&wo(c)));break;case 12:if(c&2048){Mi(t,n,a,r),c=n.stateNode;try{var m=n.memoizedProps,E=m.id,O=m.onPostCommit;typeof O=="function"&&O(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(K){Xe(n,n.return,K)}}else Mi(t,n,a,r);break;case 31:Mi(t,n,a,r);break;case 13:Mi(t,n,a,r);break;case 23:break;case 22:m=n.stateNode,E=n.alternate,n.memoizedState!==null?(u&&E!==null&&E.memoizedState===null&&xu(E),m._visibility&2?Mi(t,n,a,r):qo(t,n)):(u&&E!==null&&E.memoizedState!==null&&xu(n),m._visibility&2?Mi(t,n,a,r):(m._visibility|=2,bs(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&dd(E,n);break;case 24:Mi(t,n,a,r),c&2048&&hd(n.alternate,n);break;case 30:u&&(c=n.alternate,c!==null&&(Ki(c.child,!0),Ki(n.child,!0))),Mi(t,n,a,r);break;default:Mi(t,n,a,r)}}function bs(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,m=n,E=a,O=r,K=m.flags;switch(m.tag){case 0:case 11:case 15:bs(c,m,E,O,u),Vo(8,m);break;case 23:break;case 22:var ot=m.stateNode;m.memoizedState!==null?ot._visibility&2?bs(c,m,E,O,u):qo(c,m):(ot._visibility|=2,bs(c,m,E,O,u)),u&&K&2048&&dd(m.alternate,m);break;case 24:bs(c,m,E,O,u),u&&K&2048&&hd(m.alternate,m);break;default:bs(c,m,E,O,u)}n=n.sibling}}function qo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:qo(a,r),u&2048&&dd(r.alternate,r);break;case 24:qo(a,r),u&2048&&hd(r.alternate,r);break;default:qo(a,r)}n=n.sibling}}var Ir=8192;function Br(t,n,a){if(t.subtreeFlags&Ir)for(t=t.child;t!==null;)Ng(t,n,a),t=t.sibling}function Ng(t,n,a){switch(t.tag){case 26:Br(t,n,a),t.flags&Ir&&(t.memoizedState!==null?dM(a,Ui,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&F_(a,t)));break;case 5:Br(t,n,a),t.flags&Ir&&(t=t.stateNode,(n&335544128)===n&&F_(a,t));break;case 3:case 4:var r=Ui;Ui=$o(t.stateNode.containerInfo),Br(t,n,a),Ui=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Ir,Ir=16777216,Br(t,n,a),Ir=r):Br(t,n,a));break;case 30:if((t.flags&Ir)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var u=t.stateNode;u.paired=null,li===null&&(li=new Map),li.set(r,u)}Br(t,n,a);break;default:Br(t,n,a)}}function Lg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Yo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Cn=r,zg(r,t)}Lg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Og(t),t=t.sibling}function Og(t){switch(t.tag){case 0:case 11:case 15:Yo(t),t.flags&2048&&ja(9,t,t.return);break;case 3:Yo(t);break;case 12:Yo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Tu(t)):Yo(t);break;default:Yo(t)}}function Tu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Cn=r,zg(r,t)}Lg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ja(8,n,n.return),Tu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Tu(n));break;default:Tu(n)}t=t.sibling}}function zg(t,n){for(;Cn!==null;){var a=Cn;switch(a.tag){case 0:case 11:case 15:ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:wo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Cn=r;else t:for(a=t;Cn!==null;){r=Cn;var u=r.sibling,c=r.return;if(Tg(r),r===a){Cn=null;break t}if(u!==null){u.return=c,Cn=u;break t}Cn=c}}}var oy={getCacheForType:function(t){var n=Un(mn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Un(mn).controller.signal}},ly=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Ke=null,ye=null,be=0,ke=0,ui=null,Ka=!1,As=!1,pd=!1,Ma=0,un=0,Qa=0,Fr=0,bu=0,ci=0,Rs=0,Wo=null,$n=null,md=!1,Au=0,Pg=0,Ru=1/0,Cu=null,Ja=null,rn=0,Li=null,Hr=null,ta=0,gd=0,_d=null,Ig=null,Cs=null,ws=null,Ds=null,jo=0,wu=null;function fi(){return(Fe&2)!==0&&be!==0?be&-be:Tt.T!==null?Rd():Ct()}function Bg(){if(ci===0)if((be&536870912)===0||Se){var t=ua;ua<<=1,(ua&3932160)===0&&(ua=262144),ci=t}else ci=536870912;return t=Nn.current,t!==null&&(t.flags|=32),ci}function Us(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=v_(da(t.memoizedProps,a))),ws===null&&(ws=[]),ws.push(n.bind(null,r))}}function ti(t,n,a){(t===Ke&&(ke===2||ke===9)||t.cancelPendingCommit!==null)&&(Ns(t,0),$a(t,be,ci,!1)),yr(t,a),((Fe&2)===0||t!==Ke)&&(t===Ke&&((Fe&2)===0&&(Fr|=a),un===4&&$a(t,be,ci,!1)),ea(t))}function Fg(t,n,a){if((Fe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||La(t,n),u=r?fy(t,n):Sd(t,n,!0),c=r;do{if(u===0){As&&!r&&$a(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!uy(a)){u=Sd(t,n,!1),c=!1;continue}if(u===2){if(c=n,t.errorRecoveryDisabledLanes&c)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;t:{var E=t;u=Wo;var O=E.current.memoizedState.isDehydrated;if(O&&(Ns(E,m).flags|=256),m=Sd(E,m,!1),m!==2&&m!==6){if(pd&&!O){E.errorRecoveryDisabledLanes|=c,Fr|=c,u=4;break t}c=$n,$n=u,c!==null&&($n===null?$n=c:$n.push.apply($n,c))}u=m}if(c=!1,u!==2)continue}}if(u===1){Ns(t,0),$a(t,n,0,!0);break}t:{switch(r=t,c=u,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:$a(r,n,ci,!Ka);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Au+300-X(),10<u)){if($a(r,n,ci,!Ka),xr(r,0,!0)!==0)break t;ta=n,r.timeoutHandle=Bd(Hg.bind(null,r,a,$n,Cu,md,n,ci,Fr,Rs,Ka,c,"Throttled",-0,0),u);break t}Hg(r,a,$n,Cu,md,n,ci,Fr,Rs,Ka,c,null,-0,0)}}break}while(!0);ea(t)}function Hg(t,n,a,r,u,c,m,E,O,K,ot,_t,j,at){t.timeoutHandle=-1;var Bt=n.subtreeFlags,Qt=(c&335544064)===c;if(_t=null,(Qt||Bt&8192||(Bt&16785408)===16785408)&&(_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},li=null,Ng(n,c,_t),Qt&&(Bt=_t,Qt=t.containerInfo,Qt=(Qt.nodeType===9?Qt:Qt.ownerDocument).__reactViewTransition,Qt!=null&&(Bt.count++,Bt.waitingForViewTransition=!0,Bt=nl.bind(Bt),Qt.finished.then(Bt,Bt))),Bt=(c&62914560)===c?Au-X():(c&4194048)===c?Pg-X():0,Bt=hM(_t,Bt),Bt!==null)){ta=c,t.cancelPendingCommit=Bt(jg.bind(null,t,n,c,a,r,u,m,E,O,K,ot,_t,null,j,at)),$a(t,c,m,!K);return}jg(t,n,c,a,r,u,m,E,O,K,ot,_t)}function uy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],c=u.getSnapshot;u=u.value;try{if(!si(c(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function $a(t,n,a,r){n=Al(t,n),n&=~bu,n&=~Fr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var c=31-Bn(u),m=1<<c;r[c]=-1,u&=~m}a!==0&&A(t,a,n)}function Du(){return(Fe&6)===0?(Zo(0),!1):!0}function vd(){if(ye!==null){if(ke===0)var t=ye.return;else t=ye,ga=Rr=null,Af(t),vs=null,No=0,t=ye;for(;t!==null;)ug(t.alternate,t),t=t.return;ye=null}}function Ns(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,Ly(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ta=0,vd(),Ke=t,ye=a=pa(t.current,null),be=n,ke=0,ui=null,Ka=!1,As=La(t,n),pd=!1,Rs=ci=bu=Fr=Qa=un=0,$n=Wo=null,md=!1,Ma=Al(t,n),Bl(),a}function Gg(t,n){pe=null,Tt.H=uu,n===_s||n===Zl?(n=jm(),ke=3):n===hf?(n=jm(),ke=4):ke=n===Gf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ui=n,ye===null&&(un=1,cu(t,vi(n,t.current)))}function Vg(){var t=Nn.current;return t===null?!0:(be&4194048)===be?Hn===null:(be&62914560)===be||(be&536870912)!==0?t===Hn:!1}function kg(){var t=Tt.H;return Tt.H=uu,t===null?uu:t}function Xg(){var t=Tt.A;return Tt.A=oy,t}function Uu(){un=4,Ka||(be&4194048)!==be&&Nn.current!==null||(As=!0),(Qa&134217727)===0&&(Fr&134217727)===0||Ke===null||$a(Ke,be,ci,!1)}function Sd(t,n,a){var r=Fe;Fe|=2;var u=kg(),c=Xg();(Ke!==t||be!==n)&&(Cu=null,Ns(t,n)),n=!1;var m=un;t:do try{if(ke!==0&&ye!==null){var E=ye,O=ui;switch(ke){case 8:vd(),m=6;break t;case 3:case 2:case 9:case 6:Nn.current===null&&(n=!0);var K=ke;if(ke=0,ui=null,Ls(t,E,O,K),a&&As){m=0;break t}break;default:K=ke,ke=0,ui=null,Ls(t,E,O,K)}}cy(),m=un;break}catch(ot){Gg(t,ot)}while(!0);return n&&t.shellSuspendCounter++,ga=Rr=null,Fe=r,Tt.H=u,Tt.A=c,ye===null&&(Ke=null,be=0,Bl()),m}function cy(){for(;ye!==null;)qg(ye)}function fy(t,n){var a=Fe;Fe|=2;var r=kg(),u=Xg();Ke!==t||be!==n?(Cu=null,Ru=X()+500,Ns(t,n)):As=La(t,n);t:do try{if(ke!==0&&ye!==null){n=ye;var c=ui;e:switch(ke){case 1:ke=0,ui=null,Ls(t,n,c,1);break;case 2:case 9:if(Ym(c)){ke=0,ui=null,Yg(n);break}n=function(){ke!==2&&ke!==9||Ke!==t||(ke=7),ea(t)},c.then(n,n);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:Ym(c)?(ke=0,ui=null,Yg(n)):(ke=0,ui=null,Ls(t,n,c,7));break;case 5:var m=null;switch(ye.tag){case 26:m=ye.memoizedState;case 5:case 27:var E=ye;if(m?I_(m):E.stateNode.complete){ke=0,ui=null;var O=E.sibling;if(O!==null)ye=O;else{var K=E.return;K!==null?(ye=K,Nu(K)):ye=null}break e}}ke=0,ui=null,Ls(t,n,c,5);break;case 6:ke=0,ui=null,Ls(t,n,c,6);break;case 8:vd(),un=6;break t;default:throw Error(s(462))}}dy();break}catch(ot){Gg(t,ot)}while(!0);return ga=Rr=null,Tt.H=r,Tt.A=u,Fe=a,ye!==null?0:(Ke=null,be=0,Bl(),un)}function dy(){for(;ye!==null&&!Dt();)qg(ye)}function qg(t){var n=og(t.alternate,t,Ma);t.memoizedProps=t.pendingProps,n===null?Nu(t):ye=n}function Yg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=tg(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=tg(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:Af(n);var r=n;r===An&&(Se?(Xl(r),r.tag===5&&r.stateNode!=null&&(Je=r.stateNode)):(Xl(r),Se=!0));default:ug(a,n),n=ye=zm(n,Ma),n=og(a,n,Ma)}t.memoizedProps=t.pendingProps,n===null?Nu(t):ye=n}function Ls(t,n,a,r){ga=Rr=null,Af(n),vs=null,No=0;var u=n.return;try{if($x(t,u,n,a,be)){un=1,cu(t,vi(a,t.current)),ye=null;return}}catch(c){if(u!==null)throw ye=u,c;un=1,cu(t,vi(a,t.current)),ye=null;return}n.flags&32768?(Se||r===1?t=!0:As||(be&536870912)!==0?t=!1:(Ka=t=!0,(r===2||r===9||r===3||r===6)&&(r=Nn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Wg(n,t)):Nu(n)}function Nu(t){var n=t;do{if((n.flags&32768)!==0){Wg(n,Ka);return}t=n.return;var a=iy(n.alternate,n,Ma);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);un===0&&(un=5)}function Wg(t,n){do{var a=ay(t.alternate,t);if(a!==null){a.flags&=32767,ye=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=a}while(t!==null);un=6,ye=null}function jg(t,n,a,r,u,c,m,E,O,K,ot,_t){t.cancelPendingCommit=null;do Lu();while(rn!==0);if((Fe&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Ke&&(ye=Ke=null,be=0),Hr=n,Li=t,ta=a,_d=u,Ig=r,hy(t,n,a,m,E,O,_t)}}function hy(t,n,a,r,u,c,m){var E=n.lanes|n.childLanes;if(gd=E,E|=$c,Dc(t,a,E,r,u,c),ws=null,(a&335544064)===a?(Ds=Gx(t),r=10262):(Ds=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,Sy(bt,function(){return Ed(),null})):(t.callbackNode=null,t.callbackPriority=0),vu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null,u=jt.p,jt.p=2,c=Fe,Fe|=4;try{ry(t,n,a)}finally{Fe=c,jt.p=u,Tt.T=r}}rn=1,vu?Cs=Fy(m,t.containerInfo,Ds,xd,yd,my,Md,Ed,py):(xd(),yd(),Md())}function py(t){if(rn!==0){var n=Li.onRecoverableError;n(t,{componentStack:null})}}function my(){rn===3&&(rn=0,Dg(Hr,Li),rn=4)}function xd(){if(rn===1){rn=0;var t=Li,n=Hr,a=ta,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null;var u=jt.p;jt.p=2;var c=Fe;Fe|=4;try{Xo=yu=!1,Cg(n,t,a),a=zd;var m=bm(t.containerInfo),E=a.focusedElem,O=a.selectionRange;if(m!==E&&E&&E.ownerDocument&&Tm(E.ownerDocument.documentElement,E)){if(O!==null&&jc(E)){var K=O.start,ot=O.end;if(ot===void 0&&(ot=K),"selectionStart"in E)E.selectionStart=K,E.selectionEnd=Math.min(ot,E.value.length);else{var _t=E.ownerDocument||document,j=_t&&_t.defaultView||window;if(j.getSelection){var at=j.getSelection(),Bt=E.textContent.length,Qt=Math.min(O.start,Bt),me=O.end===void 0?Qt:Math.min(O.end,Bt);!at.extend&&Qt>me&&(m=me,me=Qt,Qt=m);var Z=Em(E,Qt),q=Em(E,me);if(Z&&q&&(at.rangeCount!==1||at.anchorNode!==Z.node||at.anchorOffset!==Z.offset||at.focusNode!==q.node||at.focusOffset!==q.offset)){var nt=_t.createRange();nt.setStart(Z.node,Z.offset),at.removeAllRanges(),Qt>me?(at.addRange(nt),at.extend(q.node,q.offset)):(nt.setEnd(q.node,q.offset),at.addRange(nt))}}}}for(_t=[],at=E;at=at.parentNode;)at.nodeType===1&&_t.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<_t.length;E++){var gt=_t[E];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Gs=!!Od,zd=Od=null}finally{Fe=c,jt.p=u,Tt.T=r}}t.current=n,rn=2}}function yd(){if(rn===2){rn=0;var t=Li,n=Hr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Tt.T,Tt.T=null;var r=jt.p;jt.p=2;var u=Fe;Fe|=4;try{Mg(t,n.alternate,n)}finally{Fe=u,jt.p=r,Tt.T=a}}rn=3}}function Md(){if(rn===4||rn===3){rn=0;var t=Cs;Cs=null,ie();var n=Li,a=Hr,r=ta,u=Ig,c=(r&335544064)===r?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?rn=5:(rn=0,Hr=Li=null,Zg(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(Ja=null),$(r),a=a.stateNode,an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Te,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=Tt.T,c=jt.p,jt.p=2,Tt.T=null;try{for(var m=n.onRecoverableError,E=0;E<u.length;E++){var O=u[E];m(O.value,{componentStack:O.stack})}}finally{Tt.T=a,jt.p=c}}if(u=ws,m=Ds,Ds=null,u!==null&&(ws=null,m===null&&(m=[]),t!==null))for(O=0;O<u.length;O++)a=(0,u[O])(m),a!==void 0&&t.finished.finally(a);(ta&3)!==0&&Lu(),ea(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===wu?jo++:(jo=0,wu=n):(jo=0,wu=null),Zo(0)}}function Zg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,wo(n)))}function Lu(){return Cs!==null&&(Cs.skipTransition(),Cs=null),xd(),yd(),Md(),Ed()}function Ed(){if(rn!==5)return!1;var t=Li,n=gd;gd=0;var a=$(ta),r=Tt.T,u=jt.p;try{jt.p=32>a?32:a,Tt.T=null,a=_d,_d=null;var c=Li,m=ta;if(rn=0,Hr=Li=null,ta=0,(Fe&6)!==0)throw Error(s(331));var E=Fe;if(Fe|=4,Og(c.current),Ug(c,c.current,m,a),Fe=E,Zo(0,!1),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Te,c)}catch{}return!0}finally{jt.p=u,Tt.T=r,Zg(t,n)}}function Kg(t,n,a){n=vi(a,n),n=Hf(t.stateNode,n,2),t=Xa(t,n,2),t!==null&&(yr(t,2),ea(t))}function Xe(t,n,a){if(t.tag===3)Kg(t,t,a);else for(;n!==null;){if(n.tag===3){Kg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ja===null||!Ja.has(r))){t=vi(a,t),a=Y0(2),r=Xa(n,a,2),r!==null&&(W0(a,r,n,t),yr(r,2),ea(r));break}}n=n.return}}function Td(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new ly;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(pd=!0,u.add(a),t=gy.bind(null,t,n,a),n.then(t,t))}function gy(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ke===t&&(be&a)===a&&((un===4||un===3&&(be&62914560)===be&&300>X()-Au)&&(Fe&2)===0?Ns(t,0):bu|=a,Rs===be&&(Rs=0)),ea(t)}function Qg(t,n){n===0&&(n=Rl()),t=Tr(t,n),t!==null&&(yr(t,n),ea(t))}function _y(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Qg(t,a)}function vy(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Qg(t,a)}function Sy(t,n){return te(t,n)}var Os=null,zs=null,bd=!1,Ou=!1,Ad=!1,tr=0;function ea(t){t!==zs&&t.next===null&&(zs===null?Os=zs=t:zs=zs.next=t),Ou=!0,bd||(bd=!0,yy())}function Zo(t,n){if(!Ad&&Ou){Ad=!0;do for(var a=!1,r=Os;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var c=0;else{var m=r.suspendedLanes,E=r.pingedLanes;c=(1<<31-Bn(42|t)+1)-1,c&=u&~(m&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,e_(r,c))}else c=be,c=xr(r,r===Ke?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||La(r,c)||(a=!0,e_(r,c));r=r.next}while(a);Ad=!1}}function xy(){Jg()}function Jg(){Ou=bd=!1;var t=0;tr!==0&&Ny()&&(t=tr);for(var n=X(),a=null,r=Os;r!==null;){var u=r.next,c=$g(r,n);c===0?(r.next=null,a===null?Os=u:a.next=u,u===null&&(zs=a)):(a=r,(t!==0||(c&3)!==0)&&(Ou=!0)),r=u}rn!==0&&rn!==5||Zo(t),tr!==0&&(tr=0)}function $g(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var m=31-Bn(c),E=1<<m,O=u[m];O===-1?((E&a)===0||(E&r)!==0)&&(u[m]=wc(E,n)):O<=n&&(t.expiredLanes|=E),c&=~E}if(n=Ke,a=be,a=xr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(ke===2||ke===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&qt(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||La(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&qt(r),$(a)){case 2:case 8:a=Zt;break;case 32:a=bt;break;case 268435456:a=Jt;break;default:a=bt}return r=t_.bind(null,t),a=te(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&qt(r),t.callbackPriority=2,t.callbackNode=null,2}function t_(t,n){if(rn!==0&&rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Lu()&&t.callbackNode!==a)return null;var r=be;return r=xr(t,t===Ke?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Fg(t,r,n),$g(t,X()),t.callbackNode!=null&&t.callbackNode===a?t_.bind(null,t):null)}function e_(t,n){if(Lu())return null;Fg(t,n,!0)}function yy(){Oy(function(){(Fe&6)!==0?te(Nt,xy):Jg()})}function Rd(){if(tr===0){var t=Dr;t===0&&(t=vr,vr<<=1,(vr&261888)===0&&(vr=256)),tr=t}return tr}function n_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Dl(t)}function My(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var c=n_((u[Kt]||null).action),m=r.submitter;m&&(n=(n=m[Kt]||null)?n_(n.formAction):m.getAttribute("formAction"),n!==null&&(c=n,m=null));var E=new Ol("action","action",null,r,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(tr!==0){var O=new FormData(u,m);zf(a,{pending:!0,data:O,method:u.method,action:c},null,O)}}else typeof c=="function"&&(E.preventDefault(),O=new FormData(u,m),zf(a,{pending:!0,data:O,method:u.method,action:c},c,O))},currentTarget:u}]})}}for(var Cd=0;Cd<Jc.length;Cd++){var wd=Jc[Cd],Ey=wd.toLowerCase(),Ty=wd[0].toUpperCase()+wd.slice(1);wi(Ey,"on"+Ty)}wi(Cm,"onAnimationEnd"),wi(wm,"onAnimationIteration"),wi(Dm,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(Lx,"onTransitionRun"),wi(Ox,"onTransitionStart"),wi(zx,"onTransitionCancel"),wi(Um,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),by=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ko));function i_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var m=r.length-1;0<=m;m--){var E=r[m],O=E.instance,K=E.currentTarget;if(E=E.listener,O!==c&&u.isPropagationStopped())break t;c=E,u.currentTarget=K;try{c(u)}catch(ot){Il(ot)}u.currentTarget=null,c=O}else for(m=0;m<r.length;m++){if(E=r[m],O=E.instance,K=E.currentTarget,E=E.listener,O!==c&&u.isPropagationStopped())break t;c=E,u.currentTarget=K;try{c(u)}catch(ot){Il(ot)}u.currentTarget=null,c=O}}}}function Me(t,n){var a=n[ae];a===void 0&&(a=n[ae]=new Set);var r=t+"__bubble";a.has(r)||(a_(n,t,2,!1),a.add(r))}function Dd(t,n,a){var r=0;n&&(r|=4),a_(a,t,r,n)}var zu="_reactListening"+Math.random().toString(36).slice(2);function Ud(t){if(!t[zu]){t[zu]=!0,Qe.forEach(function(a){a!=="selectionchange"&&(by.has(a)||Dd(a,!1,t),Dd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[zu]||(n[zu]=!0,Dd("selectionchange",!1,n))}}function a_(t,n,a,r){switch(W_(n)){case 2:var u=_M;break;case 8:u=vM;break;default:u=Qd}a=u.bind(null,n,a,t),u=void 0,!Bc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Nd(t,n,a,r,u){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var E=r.stateNode.containerInfo;if(E===u)break;if(m===4)for(m=r.return;m!==null;){var O=m.tag;if((O===3||O===4)&&m.stateNode.containerInfo===u)return;m=m.return}for(;E!==null;){if(m=Be(E),m===null)return;if(O=m.tag,O===5||O===6||O===26||O===27){r=c=m;continue t}E=E.parentNode}}r=r.return}am(function(){var K=c,ot=Pc(a),_t=[];t:{var j=Nm.get(t);if(j!==void 0){var at=Ol,Bt=t;switch(t){case"keypress":if(Nl(a)===0)break t;case"keydown":case"keyup":at=ux;break;case"focusin":Bt="focus",at=Vc;break;case"focusout":Bt="blur",at=Vc;break;case"beforeblur":case"afterblur":at=Vc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=QS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=px;break;case Cm:case wm:case Dm:at=tx;break;case Um:at=gx;break;case"scroll":case"scrollend":at=ZS;break;case"wheel":at=vx;break;case"copy":case"cut":case"paste":at=nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=um;break;case"submit":at=dx;break;case"toggle":case"beforetoggle":at=xx}var Qt=(n&4)!==0,me=!Qt&&(t==="scroll"||t==="scrollend"),Z=Qt?j!==null?j+"Capture":null:j;Qt=[];for(var q=K,nt;q!==null;){var gt=q;if(nt=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||nt===null||Z===null||(gt=vo(q,Z),gt!=null&&Qt.push(Qo(q,gt,nt))),me)break;q=q.return}0<Qt.length&&(j=new at(j,Bt,null,a,ot),_t.push({event:j,listeners:Qt}))}}if((n&7)===0){t:{if(at=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",at&&a!==zc&&(Bt=a.relatedTarget||a.fromElement)&&(Be(Bt)||Bt[oe]))break t;(j||at)&&(Bt=ot.window===ot?ot:(at=ot.ownerDocument)?at.defaultView||at.parentWindow:window,j?(at=a.relatedTarget||a.toElement,j=K,at=at?Be(at):null,at!==null&&(me=f(at),Qt=at.tag,at!==me||Qt!==5&&Qt!==27&&Qt!==6)&&(at=null)):(j=null,at=K),j!==at&&(Qt=om,gt="onMouseLeave",Z="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=um,gt="onPointerLeave",Z="onPointerEnter",q="pointer"),me=j==null?Bt:yn(j),nt=at==null?Bt:yn(at),Bt=new Qt(gt,q+"leave",j,a,ot),Bt.target=me,Bt.relatedTarget=nt,gt=null,Be(ot)===K&&(Qt=new Qt(Z,q+"enter",at,a,ot),Qt.target=nt,Qt.relatedTarget=me,gt=Qt),me=gt,Qt=j&&at?L(j,at,Ay):null,j!==null&&r_(_t,Bt,j,Qt,!1),at!==null&&me!==null&&r_(_t,me,at,Qt,!0)))}t:{if(j=K?yn(K):window,at=j.nodeName&&j.nodeName.toLowerCase(),at==="select"||at==="input"&&j.type==="file")var Wt=_m;else if(mm(j))if(vm)Wt=Dx;else{Wt=Cx;var Ae=Rx}else at=j.nodeName,!at||at.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?K&&Oc(K.elementType)&&(Wt=_m):Wt=wx;if(Wt&&(Wt=Wt(t,K))){gm(_t,Wt,a,ot);break t}Ae&&Ae(t,j,K)}switch(Ae=K?yn(K):window,t){case"focusin":(mm(Ae)||Ae.contentEditable==="true")&&(us=Ae,Zc=K,Ao=null);break;case"focusout":Ao=Zc=us=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,Am(_t,a,ot);break;case"selectionchange":if(Nx)break;case"keydown":case"keyup":Am(_t,a,ot)}var ee;if(Xc)t:{switch(t){case"compositionstart":var fe="onCompositionStart";break t;case"compositionend":fe="onCompositionEnd";break t;case"compositionupdate":fe="onCompositionUpdate";break t}fe=void 0}else ls?hm(t,a)&&(fe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(fe="onCompositionStart");fe&&(cm&&a.locale!=="ko"&&(ls||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&ls&&(ee=rm()):(za=ot,Fc="value"in za?za.value:za.textContent,ls=!0)),Ae=Pu(K,fe),0<Ae.length&&(fe=new lm(fe,t,null,a,ot),_t.push({event:fe,listeners:Ae}),ee?fe.data=ee:(ee=pm(a),ee!==null&&(fe.data=ee)))),(ee=Mx?Ex(t,a):Tx(t,a))&&(fe=Pu(K,"onBeforeInput"),0<fe.length&&(Ae=new lm("onBeforeInput","beforeinput",null,a,ot),_t.push({event:Ae,listeners:fe}),Ae.data=ee)),My(_t,t,K,a,ot)}i_(_t,n)})}function Qo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Pu(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=vo(t,a),u!=null&&r.unshift(Qo(t,u,c)),u=vo(t,n),u!=null&&r.push(Qo(t,u,c))),t.tag===3)return r;t=t.return}return[]}function Ay(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function r_(t,n,a,r,u){for(var c=n._reactName,m=[];a!==null&&a!==r;){var E=a,O=E.alternate,K=E.stateNode;if(E=E.tag,O!==null&&O===r)break;E!==5&&E!==26&&E!==27||K===null||(O=K,u?(K=vo(a,c),K!=null&&m.unshift(Qo(a,K,O))):u||(K=vo(a,c),K!=null&&m.push(Qo(a,K,O)))),a=a.return}m.length!==0&&t.push({event:n,listeners:m})}var Ry=/\r\n?/g,Cy=/\u0000|\uFFFD/g;function s_(t){return(typeof t=="string"?t:""+t).replace(Ry,`
`).replace(Cy,"")}function o_(t,n){return n=s_(n),s_(t)===n}function qe(t,n,a,r,u,c){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||rs(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&rs(t,""+r);else return;break;case"className":wl(t,"class",r);break;case"tabIndex":wl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":wl(t,a,r);break;case"style":nm(t,r,c);return;case"data":if(n!=="object"){wl(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Dl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&qe(t,n,"name",u.name,u,null),qe(t,n,"formEncType",u.formEncType,u,null),qe(t,n,"formMethod",u.formMethod,u,null),qe(t,n,"formTarget",u.formTarget,u,null)):(qe(t,n,"encType",u.encType,u,null),qe(t,n,"method",u.method,u,null),qe(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Dl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=qi);return;case"onScroll":r!=null&&Me("scroll",t);return;case"onScrollEnd":r!=null&&Me("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Dl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Me("beforetoggle",t),Me("toggle",t),Cl(t,"popover",r);break;case"xlinkActuate":ca(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ca(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ca(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ca(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ca(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ca(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ca(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ca(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ca(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Cl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=WS.get(a)||a,Cl(t,a,r);else return}Ne=!0}function Ld(t,n,a,r,u,c){switch(a){case"style":nm(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")rs(t,r);else if(typeof r=="number"||typeof r=="bigint")rs(t,""+r);else return;break;case"onScroll":r!=null&&Me("scroll",t);return;case"onScrollEnd":r!=null&&Me("scrollend",t);return;case"onClick":r!=null&&(t.onclick=qi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!kn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),c=a.slice(2,u?a.length-7:void 0),n=t[Kt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,u),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,r,u);break t}Ne=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):Cl(t,a,r)}return}Ne=!0}function zn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",t),Me("load",t);var r=!1,u=!1,c;for(c in a)if(a.hasOwnProperty(c)){var m=a[c];if(m!=null)switch(c){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(t,n,c,m,a,null)}}u&&qe(t,n,"srcSet",a.srcSet,a,null),r&&qe(t,n,"src",a.src,a,null);return;case"input":Me("invalid",t);var E=c=m=u=null,O=null,K=null;for(r in a)if(a.hasOwnProperty(r)){var ot=a[r];if(ot!=null)switch(r){case"name":u=ot;break;case"type":m=ot;break;case"checked":O=ot;break;case"defaultChecked":K=ot;break;case"value":c=ot;break;case"defaultValue":E=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:qe(t,n,r,ot,a,null)}}Jp(t,c,E,O,K,m,u,!1);return;case"select":Me("invalid",t),r=m=c=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":c=E;break;case"defaultValue":m=E;break;case"multiple":r=E;default:qe(t,n,u,E,a,null)}n=c,a=m,t.multiple=!!r,n!=null?as(t,!!r,n,!1):a!=null&&as(t,!!r,a,!0);return;case"textarea":Me("invalid",t),c=u=r=null;for(m in a)if(a.hasOwnProperty(m)&&(E=a[m],E!=null))switch(m){case"value":r=E;break;case"defaultValue":u=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:qe(t,n,m,E,a,null)}tm(t,r,u,c);return;case"option":for(O in a)a.hasOwnProperty(O)&&(r=a[O],r!=null)&&(O==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":qe(t,n,O,r,a,null));return;case"dialog":Me("beforetoggle",t),Me("toggle",t),Me("cancel",t),Me("close",t);break;case"iframe":case"object":Me("load",t);break;case"video":case"audio":for(r=0;r<Ko.length;r++)Me(Ko[r],t);break;case"image":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"embed":case"source":case"link":Me("error",t),Me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in a)if(a.hasOwnProperty(K)&&(r=a[K],r!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(t,n,K,r,a,null)}return;default:if(Oc(n)){for(ot in a)a.hasOwnProperty(ot)&&(r=a[ot],r!==void 0&&Ld(t,n,ot,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&qe(t,n,E,r,a,null))}var wy={};function Dy(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,m=null,E=null,O=null,K=null,ot=null;for(at in a){var _t=a[at];if(a.hasOwnProperty(at)&&_t!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":O=_t;default:r.hasOwnProperty(at)||qe(t,n,at,null,r,_t)}}for(var j in r){var at=r[j];if(_t=a[j],r.hasOwnProperty(j)&&(at!=null||_t!=null))switch(j){case"type":at!==_t&&(Ne=!0),c=at;break;case"name":at!==_t&&(Ne=!0),u=at;break;case"checked":at!==_t&&(Ne=!0),K=at;break;case"defaultChecked":at!==_t&&(Ne=!0),ot=at;break;case"value":at!==_t&&(Ne=!0),m=at;break;case"defaultValue":at!==_t&&(Ne=!0),E=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:at!==_t&&qe(t,n,j,at,r,_t)}}Nc(t,m,E,O,K,ot,c,u);return;case"select":at=m=E=j=null;for(c in a)if(O=a[c],a.hasOwnProperty(c)&&O!=null)switch(c){case"value":break;case"multiple":at=O;default:r.hasOwnProperty(c)||qe(t,n,c,null,r,O)}for(u in r)if(c=r[u],O=a[u],r.hasOwnProperty(u)&&(c!=null||O!=null))switch(u){case"value":c!==O&&(Ne=!0),j=c;break;case"defaultValue":c!==O&&(Ne=!0),E=c;break;case"multiple":c!==O&&(Ne=!0),m=c;default:c!==O&&qe(t,n,u,c,r,O)}n=E,a=m,r=at,j!=null?as(t,!!a,j,!1):!!r!=!!a&&(n!=null?as(t,!!a,n,!0):as(t,!!a,a?[]:"",!1));return;case"textarea":at=j=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:qe(t,n,E,null,r,u)}for(m in r)if(u=r[m],c=a[m],r.hasOwnProperty(m)&&(u!=null||c!=null))switch(m){case"value":u!==c&&(Ne=!0),j=u;break;case"defaultValue":u!==c&&(Ne=!0),at=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==c&&qe(t,n,m,u,r,c)}$p(t,j,at);return;case"option":for(var Bt in a)j=a[Bt],a.hasOwnProperty(Bt)&&j!=null&&!r.hasOwnProperty(Bt)&&(Bt==="selected"?t.selected=!1:qe(t,n,Bt,null,r,j));for(O in r)j=r[O],at=a[O],r.hasOwnProperty(O)&&j!==at&&(j!=null||at!=null)&&(O==="selected"?(j!==at&&(Ne=!0),t.selected=j&&typeof j!="function"&&typeof j!="symbol"):qe(t,n,O,j,r,at));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)j=a[Qt],a.hasOwnProperty(Qt)&&j!=null&&!r.hasOwnProperty(Qt)&&qe(t,n,Qt,null,r,j);for(K in r)if(j=r[K],at=a[K],r.hasOwnProperty(K)&&j!==at&&(j!=null||at!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,n));break;default:qe(t,n,K,j,r,at)}return;default:if(Oc(n)){for(var me in a)j=a[me],a.hasOwnProperty(me)&&j!==void 0&&!r.hasOwnProperty(me)&&Ld(t,n,me,void 0,r,j);for(ot in r)j=r[ot],at=a[ot],!r.hasOwnProperty(ot)||j===at||j===void 0&&at===void 0||Ld(t,n,ot,j,r,at);return}}for(var Z in a)j=a[Z],a.hasOwnProperty(Z)&&j!=null&&!r.hasOwnProperty(Z)&&qe(t,n,Z,null,r,j);for(_t in r)j=r[_t],at=a[_t],!r.hasOwnProperty(_t)||j===at||j==null&&at==null||qe(t,n,_t,j,r,at)}function l_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Uy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],c=u.transferSize,m=u.initiatorType,E=u.duration;if(c&&E&&l_(m)){for(m=0,E=u.responseEnd,r+=1;r<a.length;r++){var O=a[r],K=O.startTime;if(K>E)break;var ot=O.transferSize,_t=O.initiatorType;ot&&l_(_t)&&(O=O.responseEnd,m+=ot*(O<E?1:(E-K)/(O-K)))}if(--r,n+=8*(c+m)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Od=null,zd=null;function Jo(t){return t.nodeType===9?t:t.ownerDocument}function u_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function f_(t,n,a,r){return a=Jo(a).createElement(t),a[Ot]=r,a[Kt]=n,zn(a,t,n),Ue(a),a}function Pd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Id=null;function Ny(){var t=window.event;return t&&t.type==="popstate"?t===Id?!1:(Id=t,!0):(Id=null,!1)}var Bd=typeof setTimeout=="function"?setTimeout:void 0,Ly=typeof clearTimeout=="function"?clearTimeout:void 0,d_=typeof Promise=="function"?Promise:void 0,h_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Bd,Oy=typeof queueMicrotask=="function"?queueMicrotask:typeof d_<"u"?function(t){return d_.resolve(null).then(t).catch(zy)}:Bd;function zy(t){setTimeout(function(){throw t})}function er(t){return t==="head"}function p_(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),Vs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Yd(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Yd(a);for(var c=a.firstChild;c;){var m=c.nextSibling,E=c.nodeName;c[Ie]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=m}}else a==="body"&&Yd(t.ownerDocument.body);a=u}while(a);Vs(n)}function m_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function g_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var u=r=0;u<n.length;u++){var c=n[u];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function __(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Py(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Fd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return Py(n,a,t)}function Iy(t){return t.documentElement.clientHeight}function By(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Fy(t,n,a,r,u,c,m,E,O){var K=n.nodeType===9?n:n.ownerDocument;try{var ot=K.startViewTransition({update:function(){var j=K.defaultView,at=j.navigation&&j.navigation.transition,Bt=K.fonts.status;r();var Qt=[];if(Bt==="loaded"&&(Iy(K),K.fonts.status==="loading"&&Qt.push(K.fonts.ready)),Bt=Qt.length,t!==null)for(var me=t.suspenseyImages,Z=0,q=0;q<me.length;q++){var nt=me[q];if(!nt.complete){var gt=nt.getBoundingClientRect();if(0<gt.bottom&&0<gt.right&&gt.top<j.innerHeight&&gt.left<j.innerWidth){if(Z+=B_(nt),Z>Fu){Qt.length=Bt;break}nt=new Promise(By.bind(nt)),Qt.push(nt)}}}if(0<Qt.length)return j=Promise.race([Promise.all(Qt),new Promise(function(Wt){return setTimeout(Wt,500)})]).then(u,u),(at?Promise.allSettled([at.finished,j]):j).then(c,c);if(u(),at)return at.finished.then(c,c);c()},types:a});K.__reactViewTransition=ot;var _t=[];return ot.ready.then(function(){for(var j=K.documentElement.getAnimations({subtree:!0}),at=0;at<j.length;at++){var Bt=j[at],Qt=Bt.effect,me=Qt.pseudoElement;if(me!=null&&me.startsWith("::view-transition")){_t.push(Bt),Bt=Qt.getKeyframes();for(var Z=me=void 0,q=!0,nt=0;nt<Bt.length;nt++){var gt=Bt[nt],Wt=gt.width;if(me===void 0)me=Wt;else if(me!==Wt){q=!1;break}if(Wt=gt.height,Z===void 0)Z=Wt;else if(Z!==Wt){q=!1;break}delete gt.width,delete gt.height,gt.transform==="none"&&delete gt.transform}q&&me!==void 0&&Z!==void 0&&(Qt.setKeyframes(Bt),q=getComputedStyle(Qt.target,Qt.pseudoElement),q.width!==me||q.height!==Z)&&(q=Bt[0],q.width=me,q.height=Z,q=Bt[Bt.length-1],q.width=me,q.height=Z,Qt.setKeyframes(Bt))}}m()},function(j){K.__reactViewTransition===ot&&(K.__reactViewTransition=null);try{typeof j=="object"&&j!==null&&j.name==="InvalidStateError"&&(j.message==="View transition was skipped because document visibility state is hidden."||j.message==="Skipping view transition because document visibility state has become hidden."||j.message==="Skipping view transition because viewport size changed."||j.message==="Transition was aborted because of invalid state")&&(j=null),j!==null&&O(j)}finally{r(),u(),m()}}),ot.finished.finally(function(){for(var j=0;j<_t.length;j++)_t[j].cancel();K.__reactViewTransition===ot&&(K.__reactViewTransition=null),E()}),ot}catch{return r(),u(),m(),null}}function Gr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Gr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Gr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],u=0;u<a.length;u++){var c=a[u].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(a[u])}return r},Gr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function v_(t){return{name:t,group:new Gr("group",t),imagePair:new Gr("image-pair",t),old:new Gr("old",t),new:new Gr("new",t)}}function di(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}di.prototype.addEventListener=function(t,n,a){var r=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(x_(c,t,n,a)===-1){var m=this,E=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(E=function(O){m.removeEventListener(t,n,a),typeof n=="function"?n.call(this,O):n.handleEvent(O)}),r!==null&&(u=m.removeEventListener.bind(m,t,n,a),r.addEventListener("abort",u,{once:!0}),u=r.removeEventListener.bind(r,"abort",u)),r=Ps(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:E,cleanup:u}),p(this._fragmentFiber.child,!1,Hy,t,E,r)}this._eventListeners=c}};function Hy(t,n,a,r){return y(t).addEventListener(n,a,r),!1}di.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=x_(r,t,n,a),n!==-1)){var u=r[n];a=u.attachedListener;var c=u.cleanup;u=Ps(u.optionsOrUseCapture),p(this._fragmentFiber.child,!1,Gy,t,a,u),r.splice(n,1),c!==null&&c()}};function Gy(t,n,a,r){return y(t).removeEventListener(n,a,r),!1}function Ps(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function S_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function x_(t,n,a,r){if(t.length===0)return-1;r=S_(r);for(var u=0;u<t.length;u++){var c=t[u];if(c.type===n&&c.listener===a&&S_(c.optionsOrUseCapture)===r)return u}return-1}di.prototype.dispatchEvent=function(t){var n=x(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var c=a[u];r.addEventListener(c.type,c.attachedListener,Ps(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(u=0;u<a.length;u++)c=a[u],r.removeEventListener(c.type,c.attachedListener,Ps(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},di.prototype.focus=function(t){p(this._fragmentFiber.child,!0,y_,t,void 0,void 0)};function y_(t,n){return t.tag===6?!1:(t=y(t),$y(t,n))}di.prototype.focusLast=function(t){var n=[];p(this._fragmentFiber.child,!0,Hd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!y_(n[a],t);a--);};function Hd(t,n){return n.push(t),!1}di.prototype.blur=function(){var t=x(this._fragmentFiber);t!==null&&(t=y(t),t=Jo(t).activeElement,t!==null&&p(this._fragmentFiber.child,!1,Vy,t,void 0,void 0))};function Vy(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}di.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),p(this._fragmentFiber.child,!1,ky,t,void 0,void 0)};function ky(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}di.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),p(this._fragmentFiber.child,!1,Xy,t,void 0,void 0);for(var a=n=0;a<Oi.length;a++){var r=Oi[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Oi[n++]=r}Oi.length=n}};function Xy(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var Oi=[],Gd=!1;function qy(t,n,a){Oi.push({fragmentInstance:t,observer:n,instance:a}),Gd||(Gd=!0,tM(function(){Gd=!1;var r=Oi;Oi=[];for(var u=0;u<r.length;u++){var c=r[u];c.observer.unobserve(c.instance)}}))}di.prototype.getClientRects=function(){var t=[];return p(this._fragmentFiber.child,!1,Yy,t,void 0,void 0),t};function Yy(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}di.prototype.getRootNode=function(t){var n=x(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},di.prototype.compareDocumentPosition=function(t){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];p(this._fragmentFiber.child,!1,Hd,a,void 0,void 0);var r=y(n);if(a.length===0){if(a=r,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=r=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=b(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=y(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),u=y(a[a.length-1]);var c=M(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var m=n.compareDocumentPosition(t),E=u.compareDocumentPosition(t),O=m&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&c&&m&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&u===t||O||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:m,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Wy(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Wy(t,n,a,r,u){var c=Be(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=u.ownerDocument,u===c||u===c.documentElement||u===c.body;t:{for(c=n,n=x(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=L(a,c,F),n===null?n=!1:(p(n,!0,z,c,a),c=v,v=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=L(r,c,F),n===null?n=!1:(p(n,!0,D,c,r),c=v,N=v=null,n=c!==null)),n):!1}function M_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}di.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];p(this._fragmentFiber.child,!1,Hd,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=b(this._fragmentFiber);if(r=a?r[1]||r[0]||x(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=y(r),M_(t,a);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var u=n[r];u.tag===6?(u=y(u),M_(u,a)):y(u).scrollIntoView(t),r+=a?-1:1}};function jy(t,n){return t=y(t),E_(t,n),!1}function E_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function T_(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.addEventListener(u.type,u.attachedListener,Ps(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var m=0,E=0;E<Oi.length;E++){var O=Oi[E];(O.fragmentInstance!==n||O.observer!==c||O.instance!==t)&&(Oi[m++]=O)}Oi.length=m,c.observe(t)}),E_(t,n))}function Zy(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.removeEventListener(u.type,u.attachedListener,Ps(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?qy(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Vd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vd(a),re(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Ky(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ie])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function Qy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ei(t.nextSibling),t===null))return null;return t}function b_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ei(t.nextSibling),t===null))return null;return t}function kd(t){return t.data==="$?"||t.data==="$~"}function Xd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Jy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var qd=null;function A_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function R_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function $y(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function tM(t){h_(function(){h_(function(n){return t(n)})})}function C_(t,n,a){switch(n=Jo(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function w_(t,n,a){for(var r in a){var u=a[r];a.hasOwnProperty(r)&&u!=null&&qe(t,n,r,null,wy,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===qi&&(t.onclick=null),re(t)}function Yd(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);re(t)}var Ti=new Map,D_=new Set;function $o(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ea=jt.d;jt.d={f:eM,r:nM,D:iM,C:aM,L:rM,m:sM,X:lM,S:oM,M:uM};function eM(){var t=Ea.f(),n=Du();return t||n}function nM(t){var n=ve(t);n!==null&&n.tag===5&&n.type==="form"?N0(n):Ea.r(t)}var Is=typeof document>"u"?null:document;function U_(t,n,a){var r=Is;if(r&&typeof n=="string"&&n){var u=gi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),D_.has(u)||(D_.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),zn(n,"link",t),Ue(n),r.head.appendChild(n)))}}function iM(t){Ea.D(t),U_("dns-prefetch",t,null)}function aM(t,n){Ea.C(t,n),U_("preconnect",t,n)}function rM(t,n,a){Ea.L(t,n,a);var r=Is;if(r&&t&&n){var u='link[rel="preload"][as="'+gi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+gi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+gi(a.imageSizes)+'"]')):u+='[href="'+gi(t)+'"]';var c=u;switch(n){case"style":c=Bs(t);break;case"script":c=Fs(t)}if(!(Ti.has(c)||(t=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ti.set(c,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(tl(c))||n==="script"&&r.querySelector(el(c))))){var m=r.createElement("link");zn(m,"link",t),n==="style"&&(m[De]=!0,m.onload=m.onerror=function(){Oa(m)}),Ue(m),r.head.appendChild(m)}}}function sM(t,n){Ea.m(t,n);var a=Is;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+gi(r)+'"][href="'+gi(t)+'"]',c=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Fs(t)}if(!Ti.has(c)&&(t=P({rel:"modulepreload",href:t},n),Ti.set(c,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(el(c)))return}r=a.createElement("link"),zn(r,"link",t),Ue(r),a.head.appendChild(r)}}}function oM(t,n,a){Ea.S(t,n,a);var r=Is;if(r&&t){var u=ai(r).hoistableStyles,c=Bs(t);n=n||"default";var m=u.get(c);if(!m){var E={loading:0,preload:null};if(m=r.querySelector(tl(c)))E.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ti.get(c))&&Wd(t,a);var O=m=r.createElement("link");Ue(O),zn(O,"link",t),O._p=new Promise(function(K,ot){O.onload=K,O.onerror=ot}),O.addEventListener("load",function(){E.loading|=1}),O.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Iu(m,n,r)}m={type:"stylesheet",instance:m,count:1,state:E},u.set(c,m)}}}function lM(t,n){Ea.X(t,n);var a=Is;if(a&&t){var r=ai(a).hoistableScripts,u=Fs(t),c=r.get(u);c||(c=a.querySelector(el(u)),c||(t=P({src:t,async:!0},n),(n=Ti.get(u))&&jd(t,n),c=a.createElement("script"),Ue(c),zn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(u,c))}}function uM(t,n){Ea.M(t,n);var a=Is;if(a&&t){var r=ai(a).hoistableScripts,u=Fs(t),c=r.get(u);c||(c=a.querySelector(el(u)),c||(t=P({src:t,async:!0,type:"module"},n),(n=Ti.get(u))&&jd(t,n),c=a.createElement("script"),Ue(c),zn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(u,c))}}function N_(t,n,a,r){var u=(u=Pe.current)?$o(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Bs(a.href),n=ai(u).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Bs(a.href);var c=ai(u).hoistableStyles,m=c.get(t);if(m||(u=u.ownerDocument||u,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,m),(c=u.querySelector(tl(t)))?c._p||(m.instance=c,m.state.loading=5):(c=Ti.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ti.set(t,c)),cM(u,t,c,m.state))),n&&r===null)throw Error(s(528,""));return m}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Fs(a),n=ai(u).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Bs(t){return'href="'+gi(t)+'"'}function tl(t){return'link[rel="stylesheet"]['+t+"]"}function L_(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function cM(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[De]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[De]=!0,n.onload=n.onerror=Oa.bind(null,n),zn(n,"link",a),Ue(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Fs(t){return'[src="'+gi(t)+'"]'}function el(t){return"script[async]"+t}function O_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+gi(a.href)+'"]');if(r)return n.instance=r,Ue(r),r;var u=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Ue(r),zn(r,"style",u),Iu(r,a.precedence,t),n.instance=r;case"stylesheet":u=Bs(a.href);var c=t.querySelector(tl(u));if(c)return n.state.loading|=4,n.instance=c,Ue(c),c;r=L_(a),(u=Ti.get(u))&&Wd(r,u),c=(t.ownerDocument||t).createElement("link"),Ue(c);var m=c;return m._p=new Promise(function(E,O){m.onload=E,m.onerror=O}),zn(c,"link",r),n.state.loading|=4,Iu(c,a.precedence,t),n.instance=c;case"script":return c=Fs(a.src),(u=t.querySelector(el(c)))?(n.instance=u,Ue(u),u):(r=a,(u=Ti.get(c))&&(r=P({},a),jd(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),Ue(u),zn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Iu(r,a.precedence,t));return n.instance}function Iu(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,c=u,m=0;m<r.length;m++){var E=r[m];if(E.dataset.precedence===n)c=E;else if(c!==u)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Wd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function jd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Bu=null;function z_(t,n,a){if(Bu===null){var r=new Map,u=Bu=new Map;u.set(a,r)}else u=Bu,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var c=a[u];if(!(c[Ie]||c[Ot]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var m=c.getAttribute(n)||"";m=t+m;var E=r.get(m);E?E.push(c):r.set(m,[c])}}return r}function Zd(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function fM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function P_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function I_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function B_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function F_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=B_(n),t.suspenseyImages.push(n)),t=pM.bind(t),n.decode().then(t,t))}function dM(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Bs(r.href),c=n.querySelector(tl(u));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=nl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,Ue(c);return}c=n.ownerDocument||n,r=L_(r),(u=Ti.get(u))&&Wd(r,u),c=c.createElement("link"),Ue(c);var m=c;m._p=new Promise(function(E,O){m.onload=E,m.onerror=O}),zn(c,"link",r),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=nl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Fu=0;function hM(t,n){return t.stylesheets&&t.count===0&&Gu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Gu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Fu===0&&(Fu=62500*Uy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Gu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Fu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function H_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Gu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function nl(){this.count--,H_(this)}function pM(){this.imgCount--,H_(this)}var Hu=null;function Gu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hu=new Map,n.forEach(mM,t),Hu=null,nl.call(t))}function mM(t,n){if(!(n.state.loading&4)){var a=Hu.get(t);if(a)var r=a.get(null);else{a=new Map,Hu.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var m=u[c];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),r=m)}r&&a.set(null,r)}u=n.instance,m=u.getAttribute("data-precedence"),c=a.get(m)||r,c===r&&a.set(null,u),a.set(m,u),this.count++,r=nl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),c?c.parentNode.insertBefore(u,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Hs={$$typeof:ct,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function gM(t,n,a,r,u,c,m,E,O){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_o(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_o(0),this.hiddenUpdates=_o(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.transitionTypes=null,this.incompleteTransitions=new Map}function G_(t,n,a,r,u,c,m,E,O,K,ot,_t){return t=new gM(t,n,a,m,O,K,ot,_t,E),n=1,c===!0&&(n|=24),c=Kn(3,null,null,n),t.current=c,c.stateNode=t,n=cf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:n},pf(c),t}function V_(t){return t?(t=ds,t):ds}function k_(t,n,a,r,u,c){u=V_(u),r.context===null?r.context=u:r.pendingContext=u,r=ka(n),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Xa(t,r,n),a!==null&&(ti(a,t,n),Lo(a,t,n))}function X_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Kd(t,n){X_(t,n),(t=t.alternate)&&X_(t,n)}function q_(t){if(t.tag===13||t.tag===31){var n=Tr(t,67108864);n!==null&&ti(n,t,67108864),Kd(t,67108864)}}function Y_(t){if(t.tag===13||t.tag===31){var n=fi();n=dt(n);var a=Tr(t,n);a!==null&&ti(a,t,n),Kd(t,n)}}var Gs=!0;function _M(t,n,a,r){var u=Tt.T;Tt.T=null;var c=jt.p;try{jt.p=2,Qd(t,n,a,r)}finally{jt.p=c,Tt.T=u}}function vM(t,n,a,r){var u=Tt.T;Tt.T=null;var c=jt.p;try{jt.p=8,Qd(t,n,a,r)}finally{jt.p=c,Tt.T=u}}function Qd(t,n,a,r){if(Gs){var u=Jd(r);if(u===null)Nd(t,n,r,Vu,a),j_(t,r);else if(xM(u,t,n,a,r))r.stopPropagation();else if(j_(t,r),n&4&&-1<SM.indexOf(t)){for(;u!==null;){var c=ve(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var m=mi(c.pendingLanes);if(m!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;m;){var O=1<<31-Bn(m);E.entanglements[1]|=O,m&=~O}ea(c),(Fe&6)===0&&(Ru=X()+500,Zo(0))}}break;case 31:case 13:E=Tr(c,2),E!==null&&ti(E,c,2),Du(),Kd(c,2)}if(c=Jd(r),c===null&&Nd(t,n,r,Vu,a),c===u)break;u=c}u!==null&&r.stopPropagation()}else Nd(t,n,r,null,a)}}function Jd(t){return t=Pc(t),$d(t)}var Vu=null;function $d(t){if(Vu=null,t=Be(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Vu=t,null}function W_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(At()){case Nt:return 2;case Zt:return 8;case bt:case vt:return 32;case Jt:return 268435456;default:return 32}default:return 32}}var th=!1,nr=null,ir=null,ar=null,il=new Map,al=new Map,rr=[],SM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function j_(t,n){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":il.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(n.pointerId)}}function rl(t,n,a,r,u,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[u]},n!==null&&(n=ve(n),n!==null&&q_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function xM(t,n,a,r,u){switch(n){case"focusin":return nr=rl(nr,t,n,a,r,u),!0;case"dragenter":return ir=rl(ir,t,n,a,r,u),!0;case"mouseover":return ar=rl(ar,t,n,a,r,u),!0;case"pointerover":var c=u.pointerId;return il.set(c,rl(il.get(c)||null,t,n,a,r,u)),!0;case"gotpointercapture":return c=u.pointerId,al.set(c,rl(al.get(c)||null,t,n,a,r,u)),!0}return!1}function Z_(t){var n=Be(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,kt(t.priority,function(){Y_(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,kt(t.priority,function(){Y_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ku(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Jd(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);zc=r,a.target.dispatchEvent(r),zc=null}else return n=ve(a),n!==null&&q_(n),t.blockedOn=a,!1;n.shift()}return!0}function K_(t,n,a){ku(t)&&a.delete(n)}function yM(){th=!1,nr!==null&&ku(nr)&&(nr=null),ir!==null&&ku(ir)&&(ir=null),ar!==null&&ku(ar)&&(ar=null),il.forEach(K_),al.forEach(K_)}function Xu(t,n){t.blockedOn===n&&(t.blockedOn=null,th||(th=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yM)))}var qu=null;function Q_(t){qu!==t&&(qu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){qu===t&&(qu=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if($d(r||a)===null)continue;break}var c=ve(a);c!==null&&(t.splice(n,3),n-=3,zf(c,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function Vs(t){function n(O){return Xu(O,t)}nr!==null&&Xu(nr,t),ir!==null&&Xu(ir,t),ar!==null&&Xu(ar,t),il.forEach(n),al.forEach(n);for(var a=0;a<rr.length;a++){var r=rr[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<rr.length&&(a=rr[0],a.blockedOn===null);)Z_(a),a.blockedOn===null&&rr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],c=a[r+1],m=u[Kt]||null;if(typeof c=="function")m||Q_(a);else if(m){var E=null;if(c&&c.hasAttribute("formAction")){if(u=c,m=c[Kt]||null)E=m.formAction;else if($d(u)!==null)continue}else E=m.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),Q_(a)}}}function J_(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(m){return u=m})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function eh(t){this._internalRoot=t}Yu.prototype.render=eh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=fi();k_(a,r,t,n,null,null)},Yu.prototype.unmount=eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;k_(t.current,2,null,t,null,null),Du(),n[oe]=null}};function Yu(t){this._internalRoot=t}Yu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ct();t={blockedOn:null,target:t,priority:n};for(var a=0;a<rr.length&&n!==0&&n<rr[a].priority;a++);rr.splice(a,0,t),a===0&&Z_(t)}};var $_=e.version;if($_!=="19.3.1")throw Error(s(527,$_,"19.3.1"));jt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var MM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Tt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wu.isDisabled&&Wu.supportsFiber)try{Te=Wu.inject(MM),an=Wu}catch{}}return ol.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=V0,c=k0,m=X0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=G_(t,1,!1,null,null,a,r,null,u,c,m,J_),t[oe]=n.current,Ud(t),new eh(n)},ol.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",c=V0,m=k0,E=X0,O=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(O=a.formState)),n=G_(t,1,!0,n,a??null,r,u,O,c,m,E,J_),n.context=V_(null),a=n.current,r=fi(),r=dt(r),u=ka(r),u.callback=null,Xa(a,u,r),a=r,n.current.lanes=a,yr(n,a),ea(n),t[oe]=n.current,Ud(t),new Yu(n)},ol.version="19.3.1",ol}var uv;function UM(){if(uv)return ah.exports;uv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ah.exports=DM(),ah.exports}var NM=UM(),LM=uS();const OM={nama:"Kantor Konten"},zM=[{key:"riset",label:"Riset & Tren",x0:-7,x1:-2.2,lantai:"#d9c3a5",karpet:"#c85a3c"},{key:"studio",label:"Studio Produksi",x0:-2.2,x1:2.4,lantai:"#e2cfb2",karpet:"#6b5bb5"},{key:"analitik",label:"Analitik & Tayang",x0:2.4,x1:7,lantai:"#d5c0a2",karpet:"#2f8f7f"}],Ci=[{key:"arka",nama:"Arka",tugas:"Riset topik",ruang:"riset",warna:"#d4573a",kulit:"#e8b48c",rambut:"#2b1d16",x:-4.7,z:.3,hadap:.18,contoh:"Cari 5 topik naik di TikTok"},{key:"nadya",nama:"Nadya",tugas:"Nulis naskah",ruang:"studio",warna:"#3a72d4",kulit:"#f0c9a8",rambut:"#3d2418",x:-1,z:-1.1,hadap:-.14,contoh:"Naskah 30 detik soal kopi"},{key:"bima",nama:"Bima",tugas:"Animator",ruang:"studio",warna:"#7d5bc6",kulit:"#c9905f",rambut:"#1d1410",x:1.2,z:1,hadap:.24,contoh:"Render video 9:16"},{key:"sekar",nama:"Sekar",tugas:"Analis algoritma",ruang:"analitik",warna:"#2f9e86",kulit:"#eec39c",rambut:"#4a2a1a",x:4.9,z:.2,hadap:-.2,contoh:"Analisa video yang rame"}],cS=4e4,PM={arka:["riset","topik","tren","trend","komentar","ide","cari","referensi","kompetitor","niche","audiens"],nadya:["naskah","hook","tulis","tulisan","caption","copy","skrip","script","cerita","judul","brief"],bima:["video","render","animasi","edit","reels","motion","visual","desain","gambar","suara","musik"],sekar:["algoritma","metrik","analisa","analisis","data","jadwal","tayang","posting","upload","laporan","performa","statistik","engagement"]},IM=o=>o.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu," ").split(/\s+/).filter(Boolean);function BM(o,e){return e.includes(" ")?o.join(" ").includes(e):o.some(i=>i===e||i.startsWith(e)||e.length>=6&&i.includes(e))}function FM(o,e={}){const i=IM(o);let s=null;for(const l of Ci){const f=PM[l.key]??[];let d=0;for(const h of f)BM(i,h)&&(d+=h.length>=6?2:1);d>0&&(!s||d>s.skor)&&(s={key:l.key,skor:d})}return s?s.key:[...Ci].sort((l,f)=>(e[l.key]??0)-(e[f.key]??0))[0].key}let cv=0;function HM(o,e,i,s=cS,l={}){const f=o.trim().slice(0,240);return cv+=1,{id:`${i.toString(36)}-${cv.toString(36)}`,teks:f,agen:e??FM(f,l),dibuat:i,selesaiPada:i+s,status:"kerja"}}function GM(o,e){return o.status==="kerja"&&e>=o.selesaiPada?{...o,status:"review"}:o}function VM(o,e){return o.status!=="review"?o:{...o,status:"selesai",beresPada:e}}function kM(o,e){let i=!1;const s=o.map(l=>{const f=GM(l,e);return f!==l&&(i=!0),f});return i?s:o}function kh(o,e){if(o.status==="review"||o.status==="selesai")return 1;const i=Math.max(1,o.selesaiPada-o.dibuat);return Math.min(1,Math.max(0,(e-o.dibuat)/i))}function XM(o){const e=o.filter(l=>l.status==="kerja").length,i=o.filter(l=>l.status==="review").length,s=o.filter(l=>l.status==="selesai");return{kerja:e,review:i,selesai:s.length,menunggu:Ci.filter(l=>!o.some(f=>f.status!=="selesai"&&f.agen===l.key)).length}}const fS=(o,e)=>o.filter(i=>i.agen===e&&i.status!=="selesai").sort((i,s)=>s.dibuat-i.dibuat),Lp="kantor-tugas-v1";function qM(o){try{const e=o.filter(s=>s.status!=="selesai"),i=o.filter(s=>s.status==="selesai").slice(-40);localStorage.setItem(Lp,JSON.stringify([...e,...i]))}catch{}}function lh(){try{const o=localStorage.getItem(Lp);if(!o)return[];const e=JSON.parse(o);if(!Array.isArray(e))return[];const i=new Set(Ci.map(s=>s.key));return e.filter(s=>!!s&&typeof s=="object"&&typeof s.id=="string"&&typeof s.teks=="string"&&typeof s.agen=="string"&&i.has(s.agen)&&typeof s.dibuat=="number"&&typeof s.selesaiPada=="number"&&["kerja","review","selesai"].includes(s.status))}catch{return[]}}function uh(o,e){const i={kerja:0,review:1,selesai:2},s=new Map;for(const l of[...o,...e]){const f=s.get(l.id);(!f||i[l.status]>i[f.status])&&s.set(l.id,l)}return[...s.values()].sort((l,f)=>l.dibuat-f.dibuat)}const YM="menunggu perintah";function WM(o,e){return Ci.map(i=>{const s=fS(o,i.key),l=s[0],f=l?l.status==="review"?"review":"kerja":"siaga";return{desk:{key:i.key,room:i.ruang,color:i.warna,x:i.x,z:i.z},agen:i,doing:{activity:f,label:l?l.status==="review"?"nunggu kamu":l.teks:YM},bubble:l&&l.status!=="review"?l.teks:null,aktif:s.length,review:s.filter(d=>d.status==="review").length,progres:l?kh(l,e):0}})}function jM(o){const e=d=>Ci.find(h=>h.key===d)?.nama??d,i=d=>Ci.find(h=>h.key===d)?.warna??"#fff",s=d=>({...d,nama:e(d.agen),warna:i(d.agen)}),l=o.filter(d=>d.status==="review").map(s),f=o.filter(d=>d.status==="kerja").map(s);return{review:l,kerja:f,total:l.length+f.length}}const ZM=o=>{const e=o.getHours()+o.getMinutes()/60;return e>=18.5||e<6};function KM(o){return{rec:o.get("rekam")==="1",cepat:o.get("cepat")==="1"}}const Op="180",QM=0,fv=1,JM=2,dS=1,hS=2,wa=3,gr=0,ii=1,Fi=2,pr=0,ao=1,dv=2,hv=3,pv=4,$M=5,Qr=100,tE=101,eE=102,nE=103,iE=104,aE=200,rE=201,sE=202,oE=203,Xh=204,qh=205,lE=206,uE=207,cE=208,fE=209,dE=210,hE=211,pE=212,mE=213,gE=214,Yh=0,Wh=1,jh=2,so=3,Zh=4,Kh=5,Qh=6,Jh=7,pS=0,_E=1,vE=2,mr=0,SE=1,xE=2,yE=3,mS=4,ME=5,EE=6,TE=7,gS=300,oo=301,lo=302,$h=303,tp=304,Tc=306,pl=1e3,$r=1001,ep=1002,Vi=1003,bE=1004,ju=1005,ia=1006,ch=1007,ts=1008,sa=1009,_S=1010,vS=1011,ml=1012,zp=1013,es=1014,Da=1015,xl=1016,Pp=1017,Ip=1018,gl=1020,SS=35902,xS=35899,yS=1021,MS=1022,Gi=1023,_l=1026,vl=1027,ES=1028,Bp=1029,TS=1030,Fp=1031,Hp=1033,gc=33776,_c=33777,vc=33778,Sc=33779,np=35840,ip=35841,ap=35842,rp=35843,sp=36196,op=37492,lp=37496,up=37808,cp=37809,fp=37810,dp=37811,hp=37812,pp=37813,mp=37814,gp=37815,_p=37816,vp=37817,Sp=37818,xp=37819,yp=37820,Mp=37821,Ep=36492,Tp=36494,bp=36495,Ap=36283,Rp=36284,Cp=36285,wp=36286,AE=3200,RE=3201,bS=0,CE=1,hr="",ni="srgb",uo="srgb-linear",yc="linear",Ze="srgb",ks=7680,mv=519,wE=512,DE=513,UE=514,AS=515,NE=516,LE=517,OE=518,zE=519,gv=35044,_v="300 es",aa=2e3,Mc=2001;class ho{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let f=0,d=l.length;f<d;f++)l[f].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fh=Math.PI/180,Dp=180/Math.PI;function yl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Gn[o&255]+Gn[o>>8&255]+Gn[o>>16&255]+Gn[o>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[i&63|128]+Gn[i>>8&255]+"-"+Gn[i>>16&255]+Gn[i>>24&255]+Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]).toLowerCase()}function Re(o,e,i){return Math.max(e,Math.min(i,o))}function PE(o,e){return(o%e+e)%e}function dh(o,e,i){return(1-i)*o+i*e}function ll(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ei(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,i=0){ze.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Re(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*s-d*l+e.x,this.y=f*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ml{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,f,d,h){let _=s[l+0],g=s[l+1],S=s[l+2],p=s[l+3];const x=f[d+0],M=f[d+1],b=f[d+2],C=f[d+3];if(h===0){e[i+0]=_,e[i+1]=g,e[i+2]=S,e[i+3]=p;return}if(h===1){e[i+0]=x,e[i+1]=M,e[i+2]=b,e[i+3]=C;return}if(p!==C||_!==x||g!==M||S!==b){let y=1-h;const v=_*x+g*M+S*b+p*C,N=v>=0?1:-1,z=1-v*v;if(z>Number.EPSILON){const F=Math.sqrt(z),L=Math.atan2(F,v*N);y=Math.sin(y*L)/F,h=Math.sin(h*L)/F}const D=h*N;if(_=_*y+x*D,g=g*y+M*D,S=S*y+b*D,p=p*y+C*D,y===1-h){const F=1/Math.sqrt(_*_+g*g+S*S+p*p);_*=F,g*=F,S*=F,p*=F}}e[i]=_,e[i+1]=g,e[i+2]=S,e[i+3]=p}static multiplyQuaternionsFlat(e,i,s,l,f,d){const h=s[l],_=s[l+1],g=s[l+2],S=s[l+3],p=f[d],x=f[d+1],M=f[d+2],b=f[d+3];return e[i]=h*b+S*p+_*M-g*x,e[i+1]=_*b+S*x+g*p-h*M,e[i+2]=g*b+S*M+h*x-_*p,e[i+3]=S*b-h*p-_*x-g*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,f=e._z,d=e._order,h=Math.cos,_=Math.sin,g=h(s/2),S=h(l/2),p=h(f/2),x=_(s/2),M=_(l/2),b=_(f/2);switch(d){case"XYZ":this._x=x*S*p+g*M*b,this._y=g*M*p-x*S*b,this._z=g*S*b+x*M*p,this._w=g*S*p-x*M*b;break;case"YXZ":this._x=x*S*p+g*M*b,this._y=g*M*p-x*S*b,this._z=g*S*b-x*M*p,this._w=g*S*p+x*M*b;break;case"ZXY":this._x=x*S*p-g*M*b,this._y=g*M*p+x*S*b,this._z=g*S*b+x*M*p,this._w=g*S*p-x*M*b;break;case"ZYX":this._x=x*S*p-g*M*b,this._y=g*M*p+x*S*b,this._z=g*S*b-x*M*p,this._w=g*S*p+x*M*b;break;case"YZX":this._x=x*S*p+g*M*b,this._y=g*M*p+x*S*b,this._z=g*S*b-x*M*p,this._w=g*S*p-x*M*b;break;case"XZY":this._x=x*S*p-g*M*b,this._y=g*M*p-x*S*b,this._z=g*S*b+x*M*p,this._w=g*S*p+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],f=i[8],d=i[1],h=i[5],_=i[9],g=i[2],S=i[6],p=i[10],x=s+h+p;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(S-_)*M,this._y=(f-g)*M,this._z=(d-l)*M}else if(s>h&&s>p){const M=2*Math.sqrt(1+s-h-p);this._w=(S-_)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(f+g)/M}else if(h>p){const M=2*Math.sqrt(1+h-s-p);this._w=(f-g)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(_+S)/M}else{const M=2*Math.sqrt(1+p-s-h);this._w=(d-l)/M,this._x=(f+g)/M,this._y=(_+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Re(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,f=e._z,d=e._w,h=i._x,_=i._y,g=i._z,S=i._w;return this._x=s*S+d*h+l*g-f*_,this._y=l*S+d*_+f*h-s*g,this._z=f*S+d*g+s*_-l*h,this._w=d*S-s*h-l*_-f*g,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,f=this._z,d=this._w;let h=d*e._w+s*e._x+l*e._y+f*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=s,this._y=l,this._z=f,this;const _=1-h*h;if(_<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*f+i*this._z,this.normalize(),this}const g=Math.sqrt(_),S=Math.atan2(g,h),p=Math.sin((1-i)*S)/g,x=Math.sin(i*S)/g;return this._w=d*p+this._w*x,this._x=s*p+this._x*x,this._y=l*p+this._y*x,this._z=f*p+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,s=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(vv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(vv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*l,this.y=f[1]*i+f[4]*s+f[7]*l,this.z=f[2]*i+f[5]*s+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,f=e.elements,d=1/(f[3]*i+f[7]*s+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*l+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*l+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*l+f[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,f=e.x,d=e.y,h=e.z,_=e.w,g=2*(d*l-h*s),S=2*(h*i-f*l),p=2*(f*s-d*i);return this.x=i+_*g+d*p-h*S,this.y=s+_*S+h*g-f*p,this.z=l+_*p+f*S-d*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l,this.y=f[1]*i+f[5]*s+f[9]*l,this.z=f[2]*i+f[6]*s+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this.z=Re(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this.z=Re(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,f=e.z,d=i.x,h=i.y,_=i.z;return this.x=l*_-f*h,this.y=f*d-s*_,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return hh.copy(this).projectOnVector(e),this.sub(hh)}reflect(e){return this.sub(hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Re(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hh=new rt,vv=new Ml;class ge{constructor(e,i,s,l,f,d,h,_,g){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,f,d,h,_,g)}set(e,i,s,l,f,d,h,_,g){const S=this.elements;return S[0]=e,S[1]=l,S[2]=h,S[3]=i,S[4]=f,S[5]=_,S[6]=s,S[7]=d,S[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,f=this.elements,d=s[0],h=s[3],_=s[6],g=s[1],S=s[4],p=s[7],x=s[2],M=s[5],b=s[8],C=l[0],y=l[3],v=l[6],N=l[1],z=l[4],D=l[7],F=l[2],L=l[5],P=l[8];return f[0]=d*C+h*N+_*F,f[3]=d*y+h*z+_*L,f[6]=d*v+h*D+_*P,f[1]=g*C+S*N+p*F,f[4]=g*y+S*z+p*L,f[7]=g*v+S*D+p*P,f[2]=x*C+M*N+b*F,f[5]=x*y+M*z+b*L,f[8]=x*v+M*D+b*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],d=e[4],h=e[5],_=e[6],g=e[7],S=e[8];return i*d*S-i*h*g-s*f*S+s*h*_+l*f*g-l*d*_}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],d=e[4],h=e[5],_=e[6],g=e[7],S=e[8],p=S*d-h*g,x=h*_-S*f,M=g*f-d*_,b=i*p+s*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=p*C,e[1]=(l*g-S*s)*C,e[2]=(h*s-l*d)*C,e[3]=x*C,e[4]=(S*i-l*_)*C,e[5]=(l*f-h*i)*C,e[6]=M*C,e[7]=(s*_-g*i)*C,e[8]=(d*i-s*f)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,f,d,h){const _=Math.cos(f),g=Math.sin(f);return this.set(s*_,s*g,-s*(_*d+g*h)+d+e,-l*g,l*_,-l*(-g*d+_*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(ph.makeScale(e,i)),this}rotate(e){return this.premultiply(ph.makeRotation(-e)),this}translate(e,i){return this.premultiply(ph.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ph=new ge;function RS(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ec(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function IE(){const o=Ec("canvas");return o.style.display="block",o}const Sv={};function Sl(o){o in Sv||(Sv[o]=!0,console.warn(o))}function BE(o,e,i){return new Promise(function(s,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const xv=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yv=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FE(){const o={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(l,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Ze&&(l.r=Ua(l.r),l.g=Ua(l.g),l.b=Ua(l.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ze&&(l.r=ro(l.r),l.g=ro(l.g),l.b=ro(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===hr?yc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,d){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return Sl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return Sl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[uo]:{primaries:e,whitePoint:s,transfer:yc,toXYZ:xv,fromXYZ:yv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:s,transfer:Ze,toXYZ:xv,fromXYZ:yv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),o}const Le=FE();function Ua(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ro(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Xs;class HE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Xs===void 0&&(Xs=Ec("canvas")),Xs.width=e.width,Xs.height=e.height;const l=Xs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Xs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ec("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),f=l.data;for(let d=0;d<f.length;d++)f[d]=Ua(f[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ua(i[s]/255)*255):i[s]=Ua(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let GE=0;class Gp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=yl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?f.push(mh(l[d].image)):f.push(mh(l[d]))}else f=mh(l);s.url=f}return i||(e.images[this.uuid]=s),s}}function mh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?HE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VE=0;const gh=new rt;class Zn extends ho{constructor(e=Zn.DEFAULT_IMAGE,i=Zn.DEFAULT_MAPPING,s=$r,l=$r,f=ia,d=ts,h=Gi,_=sa,g=Zn.DEFAULT_ANISOTROPY,S=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=yl(),this.name="",this.source=new Gp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=f,this.minFilter=d,this.anisotropy=g,this.format=h,this.internalFormat=null,this.type=_,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gh).x}get height(){return this.source.getSize(gh).y}get depth(){return this.source.getSize(gh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pl:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case ep:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pl:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case ep:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=gS;Zn.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,i=0,s=0,l=1){fn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,f;const _=e.elements,g=_[0],S=_[4],p=_[8],x=_[1],M=_[5],b=_[9],C=_[2],y=_[6],v=_[10];if(Math.abs(S-x)<.01&&Math.abs(p-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(S+x)<.1&&Math.abs(p+C)<.1&&Math.abs(b+y)<.1&&Math.abs(g+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(g+1)/2,D=(M+1)/2,F=(v+1)/2,L=(S+x)/4,P=(p+C)/4,k=(b+y)/4;return z>D&&z>F?z<.01?(s=0,l=.707106781,f=.707106781):(s=Math.sqrt(z),l=L/s,f=P/s):D>F?D<.01?(s=.707106781,l=0,f=.707106781):(l=Math.sqrt(D),s=L/l,f=k/l):F<.01?(s=.707106781,l=.707106781,f=0):(f=Math.sqrt(F),s=P/f,l=k/f),this.set(s,l,f,i),this}let N=Math.sqrt((y-b)*(y-b)+(p-C)*(p-C)+(x-S)*(x-S));return Math.abs(N)<.001&&(N=1),this.x=(y-b)/N,this.y=(p-C)/N,this.z=(x-S)/N,this.w=Math.acos((g+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this.z=Re(this.z,e.z,i.z),this.w=Re(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this.z=Re(this.z,e,i),this.w=Re(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kE extends ho{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ia,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new fn(0,0,e,i),this.scissorTest=!1,this.viewport=new fn(0,0,e,i);const l={width:e,height:i,depth:s.depth},f=new Zn(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:ia,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Gp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends kE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class CS extends Zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Vi,this.minFilter=Vi,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class XE extends Zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Vi,this.minFilter=Vi,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class po{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(zi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(zi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=zi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,zi):zi.fromBufferAttribute(f,d),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Zu.copy(s.boundingBox)),Zu.applyMatrix4(e.matrixWorld),this.union(Zu)}const l=e.children;for(let f=0,d=l.length;f<d;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ul),Ku.subVectors(this.max,ul),qs.subVectors(e.a,ul),Ys.subVectors(e.b,ul),Ws.subVectors(e.c,ul),or.subVectors(Ys,qs),lr.subVectors(Ws,Ys),Vr.subVectors(qs,Ws);let i=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Vr.z,Vr.y,or.z,0,-or.x,lr.z,0,-lr.x,Vr.z,0,-Vr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Vr.y,Vr.x,0];return!_h(i,qs,Ys,Ws,Ku)||(i=[1,0,0,0,1,0,0,0,1],!_h(i,qs,Ys,Ws,Ku))?!1:(Qu.crossVectors(or,lr),i=[Qu.x,Qu.y,Qu.z],_h(i,qs,Ys,Ws,Ku))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ta),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ta=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],zi=new rt,Zu=new po,qs=new rt,Ys=new rt,Ws=new rt,or=new rt,lr=new rt,Vr=new rt,ul=new rt,Ku=new rt,Qu=new rt,kr=new rt;function _h(o,e,i,s,l){for(let f=0,d=o.length-3;f<=d;f+=3){kr.fromArray(o,f);const h=l.x*Math.abs(kr.x)+l.y*Math.abs(kr.y)+l.z*Math.abs(kr.z),_=e.dot(kr),g=i.dot(kr),S=s.dot(kr);if(Math.max(-Math.max(_,g,S),Math.min(_,g,S))>h)return!1}return!0}const qE=new po,cl=new rt,vh=new rt;class Vp{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):qE.setFromPoints(e).getCenter(s);let l=0;for(let f=0,d=e.length;f<d;f++)l=Math.max(l,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cl.subVectors(e,this.center);const i=cl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(cl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cl.copy(e.center).add(vh)),this.expandByPoint(cl.copy(e.center).sub(vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ba=new rt,Sh=new rt,Ju=new rt,ur=new rt,xh=new rt,$u=new rt,yh=new rt;class YE{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ba)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ba.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ba.copy(this.origin).addScaledVector(this.direction,i),ba.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Sh.copy(e).add(i).multiplyScalar(.5),Ju.copy(i).sub(e).normalize(),ur.copy(this.origin).sub(Sh);const f=e.distanceTo(i)*.5,d=-this.direction.dot(Ju),h=ur.dot(this.direction),_=-ur.dot(Ju),g=ur.lengthSq(),S=Math.abs(1-d*d);let p,x,M,b;if(S>0)if(p=d*_-h,x=d*h-_,b=f*S,p>=0)if(x>=-b)if(x<=b){const C=1/S;p*=C,x*=C,M=p*(p+d*x+2*h)+x*(d*p+x+2*_)+g}else x=f,p=Math.max(0,-(d*x+h)),M=-p*p+x*(x+2*_)+g;else x=-f,p=Math.max(0,-(d*x+h)),M=-p*p+x*(x+2*_)+g;else x<=-b?(p=Math.max(0,-(-d*f+h)),x=p>0?-f:Math.min(Math.max(-f,-_),f),M=-p*p+x*(x+2*_)+g):x<=b?(p=0,x=Math.min(Math.max(-f,-_),f),M=x*(x+2*_)+g):(p=Math.max(0,-(d*f+h)),x=p>0?f:Math.min(Math.max(-f,-_),f),M=-p*p+x*(x+2*_)+g);else x=d>0?-f:f,p=Math.max(0,-(d*x+h)),M=-p*p+x*(x+2*_)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,p),l&&l.copy(Sh).addScaledVector(Ju,x),M}intersectSphere(e,i){ba.subVectors(e.center,this.origin);const s=ba.dot(this.direction),l=ba.dot(ba)-s*s,f=e.radius*e.radius;if(l>f)return null;const d=Math.sqrt(f-l),h=s-d,_=s+d;return _<0?null:h<0?this.at(_,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,f,d,h,_;const g=1/this.direction.x,S=1/this.direction.y,p=1/this.direction.z,x=this.origin;return g>=0?(s=(e.min.x-x.x)*g,l=(e.max.x-x.x)*g):(s=(e.max.x-x.x)*g,l=(e.min.x-x.x)*g),S>=0?(f=(e.min.y-x.y)*S,d=(e.max.y-x.y)*S):(f=(e.max.y-x.y)*S,d=(e.min.y-x.y)*S),s>d||f>l||((f>s||isNaN(s))&&(s=f),(d<l||isNaN(l))&&(l=d),p>=0?(h=(e.min.z-x.z)*p,_=(e.max.z-x.z)*p):(h=(e.max.z-x.z)*p,_=(e.min.z-x.z)*p),s>_||h>l)||((h>s||s!==s)&&(s=h),(_<l||l!==l)&&(l=_),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ba)!==null}intersectTriangle(e,i,s,l,f){xh.subVectors(i,e),$u.subVectors(s,e),yh.crossVectors(xh,$u);let d=this.direction.dot(yh),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ur.subVectors(this.origin,e);const _=h*this.direction.dot($u.crossVectors(ur,$u));if(_<0)return null;const g=h*this.direction.dot(xh.cross(ur));if(g<0||_+g>d)return null;const S=-h*ur.dot(yh);return S<0?null:this.at(S/d,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(e,i,s,l,f,d,h,_,g,S,p,x,M,b,C,y){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,f,d,h,_,g,S,p,x,M,b,C,y)}set(e,i,s,l,f,d,h,_,g,S,p,x,M,b,C,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=f,v[5]=d,v[9]=h,v[13]=_,v[2]=g,v[6]=S,v[10]=p,v[14]=x,v[3]=M,v[7]=b,v[11]=C,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/js.setFromMatrixColumn(e,0).length(),f=1/js.setFromMatrixColumn(e,1).length(),d=1/js.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,f=e.z,d=Math.cos(s),h=Math.sin(s),_=Math.cos(l),g=Math.sin(l),S=Math.cos(f),p=Math.sin(f);if(e.order==="XYZ"){const x=d*S,M=d*p,b=h*S,C=h*p;i[0]=_*S,i[4]=-_*p,i[8]=g,i[1]=M+b*g,i[5]=x-C*g,i[9]=-h*_,i[2]=C-x*g,i[6]=b+M*g,i[10]=d*_}else if(e.order==="YXZ"){const x=_*S,M=_*p,b=g*S,C=g*p;i[0]=x+C*h,i[4]=b*h-M,i[8]=d*g,i[1]=d*p,i[5]=d*S,i[9]=-h,i[2]=M*h-b,i[6]=C+x*h,i[10]=d*_}else if(e.order==="ZXY"){const x=_*S,M=_*p,b=g*S,C=g*p;i[0]=x-C*h,i[4]=-d*p,i[8]=b+M*h,i[1]=M+b*h,i[5]=d*S,i[9]=C-x*h,i[2]=-d*g,i[6]=h,i[10]=d*_}else if(e.order==="ZYX"){const x=d*S,M=d*p,b=h*S,C=h*p;i[0]=_*S,i[4]=b*g-M,i[8]=x*g+C,i[1]=_*p,i[5]=C*g+x,i[9]=M*g-b,i[2]=-g,i[6]=h*_,i[10]=d*_}else if(e.order==="YZX"){const x=d*_,M=d*g,b=h*_,C=h*g;i[0]=_*S,i[4]=C-x*p,i[8]=b*p+M,i[1]=p,i[5]=d*S,i[9]=-h*S,i[2]=-g*S,i[6]=M*p+b,i[10]=x-C*p}else if(e.order==="XZY"){const x=d*_,M=d*g,b=h*_,C=h*g;i[0]=_*S,i[4]=-p,i[8]=g*S,i[1]=x*p+C,i[5]=d*S,i[9]=M*p-b,i[2]=b*p-M,i[6]=h*S,i[10]=C*p+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WE,e,jE)}lookAt(e,i,s){const l=this.elements;return hi.subVectors(e,i),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),cr.crossVectors(s,hi),cr.lengthSq()===0&&(Math.abs(s.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),cr.crossVectors(s,hi)),cr.normalize(),tc.crossVectors(hi,cr),l[0]=cr.x,l[4]=tc.x,l[8]=hi.x,l[1]=cr.y,l[5]=tc.y,l[9]=hi.y,l[2]=cr.z,l[6]=tc.z,l[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,f=this.elements,d=s[0],h=s[4],_=s[8],g=s[12],S=s[1],p=s[5],x=s[9],M=s[13],b=s[2],C=s[6],y=s[10],v=s[14],N=s[3],z=s[7],D=s[11],F=s[15],L=l[0],P=l[4],k=l[8],w=l[12],R=l[1],V=l[5],Q=l[9],lt=l[13],pt=l[2],ct=l[6],Y=l[10],G=l[14],W=l[3],mt=l[7],xt=l[11],Vt=l[15];return f[0]=d*L+h*R+_*pt+g*W,f[4]=d*P+h*V+_*ct+g*mt,f[8]=d*k+h*Q+_*Y+g*xt,f[12]=d*w+h*lt+_*G+g*Vt,f[1]=S*L+p*R+x*pt+M*W,f[5]=S*P+p*V+x*ct+M*mt,f[9]=S*k+p*Q+x*Y+M*xt,f[13]=S*w+p*lt+x*G+M*Vt,f[2]=b*L+C*R+y*pt+v*W,f[6]=b*P+C*V+y*ct+v*mt,f[10]=b*k+C*Q+y*Y+v*xt,f[14]=b*w+C*lt+y*G+v*Vt,f[3]=N*L+z*R+D*pt+F*W,f[7]=N*P+z*V+D*ct+F*mt,f[11]=N*k+z*Q+D*Y+F*xt,f[15]=N*w+z*lt+D*G+F*Vt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],f=e[12],d=e[1],h=e[5],_=e[9],g=e[13],S=e[2],p=e[6],x=e[10],M=e[14],b=e[3],C=e[7],y=e[11],v=e[15];return b*(+f*_*p-l*g*p-f*h*x+s*g*x+l*h*M-s*_*M)+C*(+i*_*M-i*g*x+f*d*x-l*d*M+l*g*S-f*_*S)+y*(+i*g*p-i*h*M-f*d*p+s*d*M+f*h*S-s*g*S)+v*(-l*h*S-i*_*p+i*h*x+l*d*p-s*d*x+s*_*S)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],d=e[4],h=e[5],_=e[6],g=e[7],S=e[8],p=e[9],x=e[10],M=e[11],b=e[12],C=e[13],y=e[14],v=e[15],N=p*y*g-C*x*g+C*_*M-h*y*M-p*_*v+h*x*v,z=b*x*g-S*y*g-b*_*M+d*y*M+S*_*v-d*x*v,D=S*C*g-b*p*g+b*h*M-d*C*M-S*h*v+d*p*v,F=b*p*_-S*C*_-b*h*x+d*C*x+S*h*y-d*p*y,L=i*N+s*z+l*D+f*F;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=N*P,e[1]=(C*x*f-p*y*f-C*l*M+s*y*M+p*l*v-s*x*v)*P,e[2]=(h*y*f-C*_*f+C*l*g-s*y*g-h*l*v+s*_*v)*P,e[3]=(p*_*f-h*x*f-p*l*g+s*x*g+h*l*M-s*_*M)*P,e[4]=z*P,e[5]=(S*y*f-b*x*f+b*l*M-i*y*M-S*l*v+i*x*v)*P,e[6]=(b*_*f-d*y*f-b*l*g+i*y*g+d*l*v-i*_*v)*P,e[7]=(d*x*f-S*_*f+S*l*g-i*x*g-d*l*M+i*_*M)*P,e[8]=D*P,e[9]=(b*p*f-S*C*f-b*s*M+i*C*M+S*s*v-i*p*v)*P,e[10]=(d*C*f-b*h*f+b*s*g-i*C*g-d*s*v+i*h*v)*P,e[11]=(S*h*f-d*p*f-S*s*g+i*p*g+d*s*M-i*h*M)*P,e[12]=F*P,e[13]=(S*C*l-b*p*l+b*s*x-i*C*x-S*s*y+i*p*y)*P,e[14]=(b*h*l-d*C*l-b*s*_+i*C*_+d*s*y-i*h*y)*P,e[15]=(d*p*l-S*h*l+S*s*_-i*p*_-d*s*x+i*h*x)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,f=e.z;return i[0]*=s,i[4]*=l,i[8]*=f,i[1]*=s,i[5]*=l,i[9]*=f,i[2]*=s,i[6]*=l,i[10]*=f,i[3]*=s,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),f=1-s,d=e.x,h=e.y,_=e.z,g=f*d,S=f*h;return this.set(g*d+s,g*h-l*_,g*_+l*h,0,g*h+l*_,S*h+s,S*_-l*d,0,g*_-l*h,S*_+l*d,f*_*_+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,f,d){return this.set(1,s,f,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,f=i._x,d=i._y,h=i._z,_=i._w,g=f+f,S=d+d,p=h+h,x=f*g,M=f*S,b=f*p,C=d*S,y=d*p,v=h*p,N=_*g,z=_*S,D=_*p,F=s.x,L=s.y,P=s.z;return l[0]=(1-(C+v))*F,l[1]=(M+D)*F,l[2]=(b-z)*F,l[3]=0,l[4]=(M-D)*L,l[5]=(1-(x+v))*L,l[6]=(y+N)*L,l[7]=0,l[8]=(b+z)*P,l[9]=(y-N)*P,l[10]=(1-(x+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let f=js.set(l[0],l[1],l[2]).length();const d=js.set(l[4],l[5],l[6]).length(),h=js.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],Pi.copy(this);const g=1/f,S=1/d,p=1/h;return Pi.elements[0]*=g,Pi.elements[1]*=g,Pi.elements[2]*=g,Pi.elements[4]*=S,Pi.elements[5]*=S,Pi.elements[6]*=S,Pi.elements[8]*=p,Pi.elements[9]*=p,Pi.elements[10]*=p,i.setFromRotationMatrix(Pi),s.x=f,s.y=d,s.z=h,this}makePerspective(e,i,s,l,f,d,h=aa,_=!1){const g=this.elements,S=2*f/(i-e),p=2*f/(s-l),x=(i+e)/(i-e),M=(s+l)/(s-l);let b,C;if(_)b=f/(d-f),C=d*f/(d-f);else if(h===aa)b=-(d+f)/(d-f),C=-2*d*f/(d-f);else if(h===Mc)b=-d/(d-f),C=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return g[0]=S,g[4]=0,g[8]=x,g[12]=0,g[1]=0,g[5]=p,g[9]=M,g[13]=0,g[2]=0,g[6]=0,g[10]=b,g[14]=C,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,i,s,l,f,d,h=aa,_=!1){const g=this.elements,S=2/(i-e),p=2/(s-l),x=-(i+e)/(i-e),M=-(s+l)/(s-l);let b,C;if(_)b=1/(d-f),C=d/(d-f);else if(h===aa)b=-2/(d-f),C=-(d+f)/(d-f);else if(h===Mc)b=-1/(d-f),C=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return g[0]=S,g[4]=0,g[8]=0,g[12]=x,g[1]=0,g[5]=p,g[9]=0,g[13]=M,g[2]=0,g[6]=0,g[10]=b,g[14]=C,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const js=new rt,Pi=new dn,WE=new rt(0,0,0),jE=new rt(1,1,1),cr=new rt,tc=new rt,hi=new rt,Mv=new dn,Ev=new Ml;class oa{constructor(e=0,i=0,s=0,l=oa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,f=l[0],d=l[4],h=l[8],_=l[1],g=l[5],S=l[9],p=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(x,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(_,g)):(this._y=Math.atan2(-p,f),this._z=0);break;case"ZXY":this._x=Math.asin(Re(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-p,M),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(_,f));break;case"ZYX":this._y=Math.asin(-Re(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(_,f)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(Re(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(-S,g),this._y=Math.atan2(-p,f)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,g),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-S,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Mv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Ev.setFromEuler(this),this.setFromQuaternion(Ev,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oa.DEFAULT_ORDER="XYZ";class wS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ZE=0;const Tv=new rt,Zs=new Ml,Aa=new dn,ec=new rt,fl=new rt,KE=new rt,QE=new Ml,bv=new rt(1,0,0),Av=new rt(0,1,0),Rv=new rt(0,0,1),Cv={type:"added"},JE={type:"removed"},Ks={type:"childadded",child:null},Mh={type:"childremoved",child:null};class In extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=yl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new rt,i=new oa,s=new Ml,l=new rt(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new ge}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Zs.setFromAxisAngle(e,i),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,i){return Zs.setFromAxisAngle(e,i),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(bv,e)}rotateY(e){return this.rotateOnAxis(Av,e)}rotateZ(e){return this.rotateOnAxis(Rv,e)}translateOnAxis(e,i){return Tv.copy(e).applyQuaternion(this.quaternion),this.position.add(Tv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(bv,e)}translateY(e){return this.translateOnAxis(Av,e)}translateZ(e){return this.translateOnAxis(Rv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?ec.copy(e):ec.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),fl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(fl,ec,this.up):Aa.lookAt(ec,fl,this.up),this.quaternion.setFromRotationMatrix(Aa),l&&(Aa.extractRotation(l.matrixWorld),Zs.setFromRotationMatrix(Aa),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cv),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(JE),Mh.child=e,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cv),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let f=0,d=l.length;f<d;f++)l[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,e,KE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,QE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,d=l.length;f<d;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(h,_){return h[_.uuid]===void 0&&(h[_.uuid]=_.toJSON(e)),_.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const _=h.shapes;if(Array.isArray(_))for(let g=0,S=_.length;g<S;g++){const p=_[g];f(e.shapes,p)}else f(e.shapes,_)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let _=0,g=this.material.length;_<g;_++)h.push(f(e.materials,this.material[_]));l.material=h}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const _=this.animations[h];l.animations.push(f(e.animations,_))}}if(i){const h=d(e.geometries),_=d(e.materials),g=d(e.textures),S=d(e.images),p=d(e.shapes),x=d(e.skeletons),M=d(e.animations),b=d(e.nodes);h.length>0&&(s.geometries=h),_.length>0&&(s.materials=_),g.length>0&&(s.textures=g),S.length>0&&(s.images=S),p.length>0&&(s.shapes=p),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(h){const _=[];for(const g in h){const S=h[g];delete S.metadata,_.push(S)}return _}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}In.DEFAULT_UP=new rt(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ii=new rt,Ra=new rt,Eh=new rt,Ca=new rt,Qs=new rt,Js=new rt,wv=new rt,Th=new rt,bh=new rt,Ah=new rt,Rh=new fn,Ch=new fn,wh=new fn;class Hi{constructor(e=new rt,i=new rt,s=new rt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ii.subVectors(e,i),l.cross(Ii);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,s,l,f){Ii.subVectors(l,i),Ra.subVectors(s,i),Eh.subVectors(e,i);const d=Ii.dot(Ii),h=Ii.dot(Ra),_=Ii.dot(Eh),g=Ra.dot(Ra),S=Ra.dot(Eh),p=d*g-h*h;if(p===0)return f.set(0,0,0),null;const x=1/p,M=(g*_-h*S)*x,b=(d*S-h*_)*x;return f.set(1-M-b,b,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(e,i,s,l,f,d,h,_){return this.getBarycoord(e,i,s,l,Ca)===null?(_.x=0,_.y=0,"z"in _&&(_.z=0),"w"in _&&(_.w=0),null):(_.setScalar(0),_.addScaledVector(f,Ca.x),_.addScaledVector(d,Ca.y),_.addScaledVector(h,Ca.z),_)}static getInterpolatedAttribute(e,i,s,l,f,d){return Rh.setScalar(0),Ch.setScalar(0),wh.setScalar(0),Rh.fromBufferAttribute(e,i),Ch.fromBufferAttribute(e,s),wh.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Rh,f.x),d.addScaledVector(Ch,f.y),d.addScaledVector(wh,f.z),d}static isFrontFacing(e,i,s,l){return Ii.subVectors(s,i),Ra.subVectors(e,i),Ii.cross(Ra).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Ii.cross(Ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Hi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,f){return Hi.getInterpolation(e,this.a,this.b,this.c,i,s,l,f)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,f=this.c;let d,h;Qs.subVectors(l,s),Js.subVectors(f,s),Th.subVectors(e,s);const _=Qs.dot(Th),g=Js.dot(Th);if(_<=0&&g<=0)return i.copy(s);bh.subVectors(e,l);const S=Qs.dot(bh),p=Js.dot(bh);if(S>=0&&p<=S)return i.copy(l);const x=_*p-S*g;if(x<=0&&_>=0&&S<=0)return d=_/(_-S),i.copy(s).addScaledVector(Qs,d);Ah.subVectors(e,f);const M=Qs.dot(Ah),b=Js.dot(Ah);if(b>=0&&M<=b)return i.copy(f);const C=M*g-_*b;if(C<=0&&g>=0&&b<=0)return h=g/(g-b),i.copy(s).addScaledVector(Js,h);const y=S*b-M*p;if(y<=0&&p-S>=0&&M-b>=0)return wv.subVectors(f,l),h=(p-S)/(p-S+(M-b)),i.copy(l).addScaledVector(wv,h);const v=1/(y+C+x);return d=C*v,h=x*v,i.copy(s).addScaledVector(Qs,d).addScaledVector(Js,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const DS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},nc={h:0,s:0,l:0};function Dh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ne{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Le.workingColorSpace){return this.r=e,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Le.workingColorSpace){if(e=PE(e,1),i=Re(i,0,1),s=Re(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=Dh(d,f,e+1/3),this.g=Dh(d,f,e),this.b=Dh(d,f,e-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(e,i=ni){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ni){const s=DS[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Le.workingToColorSpace(Vn.copy(this),e),Math.round(Re(Vn.r*255,0,255))*65536+Math.round(Re(Vn.g*255,0,255))*256+Math.round(Re(Vn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Le.workingColorSpace){Le.workingToColorSpace(Vn.copy(this),i);const s=Vn.r,l=Vn.g,f=Vn.b,d=Math.max(s,l,f),h=Math.min(s,l,f);let _,g;const S=(h+d)/2;if(h===d)_=0,g=0;else{const p=d-h;switch(g=S<=.5?p/(d+h):p/(2-d-h),d){case s:_=(l-f)/p+(l<f?6:0);break;case l:_=(f-s)/p+2;break;case f:_=(s-l)/p+4;break}_/=6}return e.h=_,e.s=g,e.l=S,e}getRGB(e,i=Le.workingColorSpace){return Le.workingToColorSpace(Vn.copy(this),i),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=ni){Le.workingToColorSpace(Vn.copy(this),e);const i=Vn.r,s=Vn.g,l=Vn.b;return e!==ni?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+i,fr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(fr),e.getHSL(nc);const s=dh(fr.h,nc.h,i),l=dh(fr.s,nc.s,i),f=dh(fr.l,nc.l,i);return this.setHSL(s,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*l,this.g=f[1]*i+f[4]*s+f[7]*l,this.b=f[2]*i+f[5]*s+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new ne;ne.NAMES=DS;let $E=0;class El extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=yl(),this.name="",this.type="Material",this.blending=ao,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=qh,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(s.blending=this.blending),this.side!==gr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Xh&&(s.blendSrc=this.blendSrc),this.blendDst!==qh&&(s.blendDst=this.blendDst),this.blendEquation!==Qr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(f){const d=[];for(const h in f){const _=f[h];delete _.metadata,d.push(_)}return d}if(i){const f=l(e.textures),d=l(e.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let f=0;f!==l;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bc extends El{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=pS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sn=new rt,ic=new ze;let tT=0;class ra{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=gv,this.updateRanges=[],this.gpuType=Da,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)ic.fromBufferAttribute(this,i),ic.applyMatrix3(e),this.setXY(i,ic.x,ic.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix3(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix4(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyNormalMatrix(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.transformDirection(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=ll(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ei(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ll(i,this.array)),i}setX(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ll(i,this.array)),i}setY(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ll(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ll(i,this.array)),i}setW(e,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),s=ei(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),s=ei(s,this.array),l=ei(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,f){return e*=this.itemSize,this.normalized&&(i=ei(i,this.array),s=ei(s,this.array),l=ei(l,this.array),f=ei(f,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gv&&(e.usage=this.usage),e}}class US extends ra{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class NS extends ra{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class En extends ra{constructor(e,i,s){super(new Float32Array(e),i,s)}}let eT=0;const bi=new dn,Uh=new In,$s=new rt,pi=new po,dl=new po,wn=new rt;class ki extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eT++}),this.uuid=yl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(RS(e)?NS:US)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new ge().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,i,s){return bi.makeTranslation(e,i,s),this.applyMatrix4(bi),this}scale(e,i,s){return bi.makeScale(e,i,s),this.applyMatrix4(bi),this}lookAt(e){return Uh.lookAt(e),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,f=e.length;l<f;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new En(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new po);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const f=i[s];pi.setFromBufferAttribute(f),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const s=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];dl.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(pi.min,dl.min),pi.expandByPoint(wn),wn.addVectors(pi.max,dl.max),pi.expandByPoint(wn)):(pi.expandByPoint(dl.min),pi.expandByPoint(dl.max))}pi.getCenter(s);let l=0;for(let f=0,d=e.count;f<d;f++)wn.fromBufferAttribute(e,f),l=Math.max(l,s.distanceToSquared(wn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],_=this.morphTargetsRelative;for(let g=0,S=h.count;g<S;g++)wn.fromBufferAttribute(h,g),_&&($s.fromBufferAttribute(e,g),wn.add($s)),l=Math.max(l,s.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ra(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],_=[];for(let k=0;k<s.count;k++)h[k]=new rt,_[k]=new rt;const g=new rt,S=new rt,p=new rt,x=new ze,M=new ze,b=new ze,C=new rt,y=new rt;function v(k,w,R){g.fromBufferAttribute(s,k),S.fromBufferAttribute(s,w),p.fromBufferAttribute(s,R),x.fromBufferAttribute(f,k),M.fromBufferAttribute(f,w),b.fromBufferAttribute(f,R),S.sub(g),p.sub(g),M.sub(x),b.sub(x);const V=1/(M.x*b.y-b.x*M.y);isFinite(V)&&(C.copy(S).multiplyScalar(b.y).addScaledVector(p,-M.y).multiplyScalar(V),y.copy(p).multiplyScalar(M.x).addScaledVector(S,-b.x).multiplyScalar(V),h[k].add(C),h[w].add(C),h[R].add(C),_[k].add(y),_[w].add(y),_[R].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let k=0,w=N.length;k<w;++k){const R=N[k],V=R.start,Q=R.count;for(let lt=V,pt=V+Q;lt<pt;lt+=3)v(e.getX(lt+0),e.getX(lt+1),e.getX(lt+2))}const z=new rt,D=new rt,F=new rt,L=new rt;function P(k){F.fromBufferAttribute(l,k),L.copy(F);const w=h[k];z.copy(w),z.sub(F.multiplyScalar(F.dot(w))).normalize(),D.crossVectors(L,w);const V=D.dot(_[k])<0?-1:1;d.setXYZW(k,z.x,z.y,z.z,V)}for(let k=0,w=N.length;k<w;++k){const R=N[k],V=R.start,Q=R.count;for(let lt=V,pt=V+Q;lt<pt;lt+=3)P(e.getX(lt+0)),P(e.getX(lt+1)),P(e.getX(lt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ra(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new rt,f=new rt,d=new rt,h=new rt,_=new rt,g=new rt,S=new rt,p=new rt;if(e)for(let x=0,M=e.count;x<M;x+=3){const b=e.getX(x+0),C=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,b),f.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),S.subVectors(d,f),p.subVectors(l,f),S.cross(p),h.fromBufferAttribute(s,b),_.fromBufferAttribute(s,C),g.fromBufferAttribute(s,y),h.add(S),_.add(S),g.add(S),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(C,_.x,_.y,_.z),s.setXYZ(y,g.x,g.y,g.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),f.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),S.subVectors(d,f),p.subVectors(l,f),S.cross(p),s.setXYZ(x+0,S.x,S.y,S.z),s.setXYZ(x+1,S.x,S.y,S.z),s.setXYZ(x+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)wn.fromBufferAttribute(e,i),wn.normalize(),e.setXYZ(i,wn.x,wn.y,wn.z)}toNonIndexed(){function e(h,_){const g=h.array,S=h.itemSize,p=h.normalized,x=new g.constructor(_.length*S);let M=0,b=0;for(let C=0,y=_.length;C<y;C++){h.isInterleavedBufferAttribute?M=_[C]*h.data.stride+h.offset:M=_[C]*S;for(let v=0;v<S;v++)x[b++]=g[M++]}return new ra(x,S,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ki,s=this.index.array,l=this.attributes;for(const h in l){const _=l[h],g=e(_,s);i.setAttribute(h,g)}const f=this.morphAttributes;for(const h in f){const _=[],g=f[h];for(let S=0,p=g.length;S<p;S++){const x=g[S],M=e(x,s);_.push(M)}i.morphAttributes[h]=_}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,_=d.length;h<_;h++){const g=d[h];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const _=this.parameters;for(const g in _)_[g]!==void 0&&(e[g]=_[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const _ in s){const g=s[_];e.data.attributes[_]=g.toJSON(e.data)}const l={};let f=!1;for(const _ in this.morphAttributes){const g=this.morphAttributes[_],S=[];for(let p=0,x=g.length;p<x;p++){const M=g[p];S.push(M.toJSON(e.data))}S.length>0&&(l[_]=S,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const g in l){const S=l[g];this.setAttribute(g,S.clone(i))}const f=e.morphAttributes;for(const g in f){const S=[],p=f[g];for(let x=0,M=p.length;x<M;x++)S.push(p[x].clone(i));this.morphAttributes[g]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let g=0,S=d.length;g<S;g++){const p=d[g];this.addGroup(p.start,p.count,p.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const _=e.boundingSphere;return _!==null&&(this.boundingSphere=_.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dv=new dn,Xr=new YE,ac=new Vp,Uv=new rt,rc=new rt,sc=new rt,oc=new rt,Nh=new rt,lc=new rt,Nv=new rt,uc=new rt;class Ve extends In{constructor(e=new ki,i=new bc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=l.length;f<d;f++){const h=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(f&&h){lc.set(0,0,0);for(let _=0,g=f.length;_<g;_++){const S=h[_],p=f[_];S!==0&&(Nh.fromBufferAttribute(p,e),d?lc.addScaledVector(Nh,S):lc.addScaledVector(Nh.sub(i),S))}i.add(lc)}return i}raycast(e,i){const s=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ac.copy(s.boundingSphere),ac.applyMatrix4(f),Xr.copy(e.ray).recast(e.near),!(ac.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(ac,Uv)===null||Xr.origin.distanceToSquared(Uv)>(e.far-e.near)**2))&&(Dv.copy(f).invert(),Xr.copy(e.ray).applyMatrix4(Dv),!(s.boundingBox!==null&&Xr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Xr)))}_computeIntersections(e,i,s){let l;const f=this.geometry,d=this.material,h=f.index,_=f.attributes.position,g=f.attributes.uv,S=f.attributes.uv1,p=f.attributes.normal,x=f.groups,M=f.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,C=x.length;b<C;b++){const y=x[b],v=d[y.materialIndex],N=Math.max(y.start,M.start),z=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let D=N,F=z;D<F;D+=3){const L=h.getX(D),P=h.getX(D+1),k=h.getX(D+2);l=cc(this,v,e,s,g,S,p,L,P,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let y=b,v=C;y<v;y+=3){const N=h.getX(y),z=h.getX(y+1),D=h.getX(y+2);l=cc(this,d,e,s,g,S,p,N,z,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(_!==void 0)if(Array.isArray(d))for(let b=0,C=x.length;b<C;b++){const y=x[b],v=d[y.materialIndex],N=Math.max(y.start,M.start),z=Math.min(_.count,Math.min(y.start+y.count,M.start+M.count));for(let D=N,F=z;D<F;D+=3){const L=D,P=D+1,k=D+2;l=cc(this,v,e,s,g,S,p,L,P,k),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(_.count,M.start+M.count);for(let y=b,v=C;y<v;y+=3){const N=y,z=y+1,D=y+2;l=cc(this,d,e,s,g,S,p,N,z,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function nT(o,e,i,s,l,f,d,h){let _;if(e.side===ii?_=s.intersectTriangle(d,f,l,!0,h):_=s.intersectTriangle(l,f,d,e.side===gr,h),_===null)return null;uc.copy(h),uc.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(uc);return g<i.near||g>i.far?null:{distance:g,point:uc.clone(),object:o}}function cc(o,e,i,s,l,f,d,h,_,g){o.getVertexPosition(h,rc),o.getVertexPosition(_,sc),o.getVertexPosition(g,oc);const S=nT(o,e,i,s,rc,sc,oc,Nv);if(S){const p=new rt;Hi.getBarycoord(Nv,rc,sc,oc,p),l&&(S.uv=Hi.getInterpolatedAttribute(l,h,_,g,p,new ze)),f&&(S.uv1=Hi.getInterpolatedAttribute(f,h,_,g,p,new ze)),d&&(S.normal=Hi.getInterpolatedAttribute(d,h,_,g,p,new rt),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const x={a:h,b:_,c:g,normal:new rt,materialIndex:0};Hi.getNormal(rc,sc,oc,x.normal),S.face=x,S.barycoord=p}return S}class Ai extends ki{constructor(e=1,i=1,s=1,l=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:f,depthSegments:d};const h=this;l=Math.floor(l),f=Math.floor(f),d=Math.floor(d);const _=[],g=[],S=[],p=[];let x=0,M=0;b("z","y","x",-1,-1,s,i,e,d,f,0),b("z","y","x",1,-1,s,i,-e,d,f,1),b("x","z","y",1,1,e,s,i,l,d,2),b("x","z","y",1,-1,e,s,-i,l,d,3),b("x","y","z",1,-1,e,i,s,l,f,4),b("x","y","z",-1,-1,e,i,-s,l,f,5),this.setIndex(_),this.setAttribute("position",new En(g,3)),this.setAttribute("normal",new En(S,3)),this.setAttribute("uv",new En(p,2));function b(C,y,v,N,z,D,F,L,P,k,w){const R=D/P,V=F/k,Q=D/2,lt=F/2,pt=L/2,ct=P+1,Y=k+1;let G=0,W=0;const mt=new rt;for(let xt=0;xt<Y;xt++){const Vt=xt*V-lt;for(let ce=0;ce<ct;ce++){const Ee=ce*R-Q;mt[C]=Ee*N,mt[y]=Vt*z,mt[v]=pt,g.push(mt.x,mt.y,mt.z),mt[C]=0,mt[y]=0,mt[v]=L>0?1:-1,S.push(mt.x,mt.y,mt.z),p.push(ce/P),p.push(1-xt/k),G+=1}}for(let xt=0;xt<k;xt++)for(let Vt=0;Vt<P;Vt++){const ce=x+Vt+ct*xt,Ee=x+Vt+ct*(xt+1),H=x+(Vt+1)+ct*(xt+1),ht=x+(Vt+1)+ct*xt;_.push(ce,Ee,ht),_.push(Ee,H,ht),W+=6}h.addGroup(M,W,w),M+=W,x+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function co(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function jn(o){const e={};for(let i=0;i<o.length;i++){const s=co(o[i]);for(const l in s)e[l]=s[l]}return e}function iT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function LS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Le.workingColorSpace}const aT={clone:co,merge:jn};var rT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends El{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rT,this.fragmentShader=sT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=iT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class OS extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=aa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new rt,Lv=new ze,Ov=new ze;class Bi extends OS{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Dp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dp*2*Math.atan(Math.tan(fh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,i){return this.getViewBounds(e,Lv,Ov),i.subVectors(Ov,Lv)}setViewOffset(e,i,s,l,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(fh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,f=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const _=d.fullWidth,g=d.fullHeight;f+=d.offsetX*l/_,i-=d.offsetY*s/g,l*=d.width/_,s*=d.height/g}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const to=-90,eo=1;class oT extends In{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Bi(to,eo,e,i);l.layers=this.layers,this.add(l);const f=new Bi(to,eo,e,i);f.layers=this.layers,this.add(f);const d=new Bi(to,eo,e,i);d.layers=this.layers,this.add(d);const h=new Bi(to,eo,e,i);h.layers=this.layers,this.add(h);const _=new Bi(to,eo,e,i);_.layers=this.layers,this.add(_);const g=new Bi(to,eo,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,f,d,h,_]=i;for(const g of i)this.remove(g);if(e===aa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),_.up.set(0,1,0),_.lookAt(0,0,-1);else if(e===Mc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),_.up.set(0,-1,0),_.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,_,g,S]=this.children,p=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,f),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,_),e.setRenderTarget(s,4,l),e.render(i,g),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,S),e.setRenderTarget(p,x,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class zS extends Zn{constructor(e=[],i=oo,s,l,f,d,h,_,g,S){super(e,i,s,l,f,d,h,_,g,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lT extends ns{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new zS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ai(5,5,5),f=new _r({name:"CubemapFromEquirect",uniforms:co(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ii,blending:pr});f.uniforms.tEquirect.value=i;const d=new Ve(l,f),h=i.minFilter;return i.minFilter===ts&&(i.minFilter=ia),new oT(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(f)}}class sn extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uT={type:"move"};class Lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,f=null,d=null;const h=this._targetRay,_=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){d=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,s),v=this._getHandJoint(g,C);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const S=g.joints["index-finger-tip"],p=g.joints["thumb-tip"],x=S.position.distanceTo(p.position),M=.02,b=.005;g.inputState.pinching&&x>M+b?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&x<=M-b&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else _!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,f.linearVelocity?(_.hasLinearVelocity=!0,_.linearVelocity.copy(f.linearVelocity)):_.hasLinearVelocity=!1,f.angularVelocity?(_.hasAngularVelocity=!0,_.angularVelocity.copy(f.angularVelocity)):_.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&f!==null&&(l=f),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(uT)))}return h!==null&&(h.visible=l!==null),_!==null&&(_.visible=f!==null),g!==null&&(g.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new sn;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class cT extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Oh=new rt,fT=new rt,dT=new ge;class Zr{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Oh.subVectors(s,i).cross(fT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Oh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(s,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||dT.getNormalMatrix(e),l=this.coplanarPoint(Oh).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new Vp,hT=new ze(.5,.5),fc=new rt;class kp{constructor(e=new Zr,i=new Zr,s=new Zr,l=new Zr,f=new Zr,d=new Zr){this.planes=[e,i,s,l,f,d]}set(e,i,s,l,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=aa,s=!1){const l=this.planes,f=e.elements,d=f[0],h=f[1],_=f[2],g=f[3],S=f[4],p=f[5],x=f[6],M=f[7],b=f[8],C=f[9],y=f[10],v=f[11],N=f[12],z=f[13],D=f[14],F=f[15];if(l[0].setComponents(g-d,M-S,v-b,F-N).normalize(),l[1].setComponents(g+d,M+S,v+b,F+N).normalize(),l[2].setComponents(g+h,M+p,v+C,F+z).normalize(),l[3].setComponents(g-h,M-p,v-C,F-z).normalize(),s)l[4].setComponents(_,x,y,D).normalize(),l[5].setComponents(g-_,M-x,v-y,F-D).normalize();else if(l[4].setComponents(g-_,M-x,v-y,F-D).normalize(),i===aa)l[5].setComponents(g+_,M+x,v+y,F+D).normalize();else if(i===Mc)l[5].setComponents(_,x,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);const i=hT.distanceTo(e.center);return qr.radius=.7071067811865476+i,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(fc.x=l.normal.x>0?e.max.x:e.min.x,fc.y=l.normal.y>0?e.max.y:e.min.y,fc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(fc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pT extends Zn{constructor(e,i,s,l,f,d,h,_,g){super(e,i,s,l,f,d,h,_,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class PS extends Zn{constructor(e,i,s=es,l,f,d,h=Vi,_=Vi,g,S=_l,p=1){if(S!==_l&&S!==vl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:p};super(x,l,f,d,h,_,S,s,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class IS extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xp extends ki{constructor(e=1,i=1,s=4,l=8,f=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:i,capSegments:s,radialSegments:l,heightSegments:f},i=Math.max(0,i),s=Math.max(1,Math.floor(s)),l=Math.max(3,Math.floor(l)),f=Math.max(1,Math.floor(f));const d=[],h=[],_=[],g=[],S=i/2,p=Math.PI/2*e,x=i,M=2*p+x,b=s*2+f,C=l+1,y=new rt,v=new rt;for(let N=0;N<=b;N++){let z=0,D=0,F=0,L=0;if(N<=s){const w=N/s,R=w*Math.PI/2;D=-S-e*Math.cos(R),F=e*Math.sin(R),L=-e*Math.cos(R),z=w*p}else if(N<=s+f){const w=(N-s)/f;D=-S+w*i,F=e,L=0,z=p+w*x}else{const w=(N-s-f)/s,R=w*Math.PI/2;D=S+e*Math.sin(R),F=e*Math.cos(R),L=e*Math.sin(R),z=p+x+w*p}const P=Math.max(0,Math.min(1,z/M));let k=0;N===0?k=.5/l:N===b&&(k=-.5/l);for(let w=0;w<=l;w++){const R=w/l,V=R*Math.PI*2,Q=Math.sin(V),lt=Math.cos(V);v.x=-F*lt,v.y=D,v.z=F*Q,h.push(v.x,v.y,v.z),y.set(-F*lt,L,F*Q),y.normalize(),_.push(y.x,y.y,y.z),g.push(R+k,P)}if(N>0){const w=(N-1)*C;for(let R=0;R<l;R++){const V=w+R,Q=w+R+1,lt=N*C+R,pt=N*C+R+1;d.push(V,Q,lt),d.push(Q,pt,lt)}}}this.setIndex(d),this.setAttribute("position",new En(h,3)),this.setAttribute("normal",new En(_,3)),this.setAttribute("uv",new En(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xp(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ac extends ki{constructor(e=1,i=1,s=1,l=32,f=1,d=!1,h=0,_=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:f,openEnded:d,thetaStart:h,thetaLength:_};const g=this;l=Math.floor(l),f=Math.floor(f);const S=[],p=[],x=[],M=[];let b=0;const C=[],y=s/2;let v=0;N(),d===!1&&(e>0&&z(!0),i>0&&z(!1)),this.setIndex(S),this.setAttribute("position",new En(p,3)),this.setAttribute("normal",new En(x,3)),this.setAttribute("uv",new En(M,2));function N(){const D=new rt,F=new rt;let L=0;const P=(i-e)/s;for(let k=0;k<=f;k++){const w=[],R=k/f,V=R*(i-e)+e;for(let Q=0;Q<=l;Q++){const lt=Q/l,pt=lt*_+h,ct=Math.sin(pt),Y=Math.cos(pt);F.x=V*ct,F.y=-R*s+y,F.z=V*Y,p.push(F.x,F.y,F.z),D.set(ct,P,Y).normalize(),x.push(D.x,D.y,D.z),M.push(lt,1-R),w.push(b++)}C.push(w)}for(let k=0;k<l;k++)for(let w=0;w<f;w++){const R=C[w][k],V=C[w+1][k],Q=C[w+1][k+1],lt=C[w][k+1];(e>0||w!==0)&&(S.push(R,V,lt),L+=3),(i>0||w!==f-1)&&(S.push(V,Q,lt),L+=3)}g.addGroup(v,L,0),v+=L}function z(D){const F=b,L=new ze,P=new rt;let k=0;const w=D===!0?e:i,R=D===!0?1:-1;for(let Q=1;Q<=l;Q++)p.push(0,y*R,0),x.push(0,R,0),M.push(.5,.5),b++;const V=b;for(let Q=0;Q<=l;Q++){const pt=Q/l*_+h,ct=Math.cos(pt),Y=Math.sin(pt);P.x=w*Y,P.y=y*R,P.z=w*ct,p.push(P.x,P.y,P.z),x.push(0,R,0),L.x=ct*.5+.5,L.y=Y*.5*R+.5,M.push(L.x,L.y),b++}for(let Q=0;Q<l;Q++){const lt=F+Q,pt=V+Q;D===!0?S.push(pt,pt+1,lt):S.push(pt+1,pt,lt),k+=3}g.addGroup(v,k,D===!0?1:2),v+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fo extends Ac{constructor(e=1,i=1,s=32,l=1,f=!1,d=0,h=Math.PI*2){super(0,e,i,s,l,f,d,h),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:f,thetaStart:d,thetaLength:h}}static fromJSON(e){return new fo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Na extends ki{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const f=e/2,d=i/2,h=Math.floor(s),_=Math.floor(l),g=h+1,S=_+1,p=e/h,x=i/_,M=[],b=[],C=[],y=[];for(let v=0;v<S;v++){const N=v*x-d;for(let z=0;z<g;z++){const D=z*p-f;b.push(D,-N,0),C.push(0,0,1),y.push(z/h),y.push(1-v/_)}}for(let v=0;v<_;v++)for(let N=0;N<h;N++){const z=N+g*v,D=N+g*(v+1),F=N+1+g*(v+1),L=N+1+g*v;M.push(z,D,L),M.push(D,F,L)}this.setIndex(M),this.setAttribute("position",new En(b,3)),this.setAttribute("normal",new En(C,3)),this.setAttribute("uv",new En(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.widthSegments,e.heightSegments)}}class qp extends ki{constructor(e=1,i=32,s=16,l=0,f=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:f,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const _=Math.min(d+h,Math.PI);let g=0;const S=[],p=new rt,x=new rt,M=[],b=[],C=[],y=[];for(let v=0;v<=s;v++){const N=[],z=v/s;let D=0;v===0&&d===0?D=.5/i:v===s&&_===Math.PI&&(D=-.5/i);for(let F=0;F<=i;F++){const L=F/i;p.x=-e*Math.cos(l+L*f)*Math.sin(d+z*h),p.y=e*Math.cos(d+z*h),p.z=e*Math.sin(l+L*f)*Math.sin(d+z*h),b.push(p.x,p.y,p.z),x.copy(p).normalize(),C.push(x.x,x.y,x.z),y.push(L+D,1-z),N.push(g++)}S.push(N)}for(let v=0;v<s;v++)for(let N=0;N<i;N++){const z=S[v][N+1],D=S[v][N],F=S[v+1][N],L=S[v+1][N+1];(v!==0||d>0)&&M.push(z,D,L),(v!==s-1||_<Math.PI)&&M.push(D,F,L)}this.setIndex(M),this.setAttribute("position",new En(b,3)),this.setAttribute("normal",new En(C,3)),this.setAttribute("uv",new En(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rc extends ki{constructor(e=1,i=.4,s=12,l=48,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:f},s=Math.floor(s),l=Math.floor(l);const d=[],h=[],_=[],g=[],S=new rt,p=new rt,x=new rt;for(let M=0;M<=s;M++)for(let b=0;b<=l;b++){const C=b/l*f,y=M/s*Math.PI*2;p.x=(e+i*Math.cos(y))*Math.cos(C),p.y=(e+i*Math.cos(y))*Math.sin(C),p.z=i*Math.sin(y),h.push(p.x,p.y,p.z),S.x=e*Math.cos(C),S.y=e*Math.sin(C),x.subVectors(p,S).normalize(),_.push(x.x,x.y,x.z),g.push(b/l),g.push(M/s)}for(let M=1;M<=s;M++)for(let b=1;b<=l;b++){const C=(l+1)*M+b-1,y=(l+1)*(M-1)+b-1,v=(l+1)*(M-1)+b,N=(l+1)*M+b;d.push(C,y,N),d.push(y,v,N)}this.setIndex(d),this.setAttribute("position",new En(h,3)),this.setAttribute("normal",new En(_,3)),this.setAttribute("uv",new En(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ri extends El{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bS,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mT extends El{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gT extends El{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Yp extends In{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class _T extends Yp{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const zh=new dn,zv=new rt,Pv=new rt;class vT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=sa,this.map=null,this.mapPass=null,this.matrix=new dn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kp,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;zv.setFromMatrixPosition(e.matrixWorld),i.position.copy(zv),Pv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Pv),i.updateMatrixWorld(),zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(zh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wp extends OS{constructor(e=-1,i=1,s=1,l=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=s-e,d=s+e,h=l+i,_=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=g*this.view.offsetX,d=f+g*this.view.width,h-=S*this.view.offsetY,_=h-S*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,_,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ST extends vT{constructor(){super(new Wp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ph extends Yp{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new ST}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xT extends Yp{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class yT extends Bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Iv(o,e,i,s){const l=MT(s);switch(i){case yS:return o*e;case ES:return o*e/l.components*l.byteLength;case Bp:return o*e/l.components*l.byteLength;case TS:return o*e*2/l.components*l.byteLength;case Fp:return o*e*2/l.components*l.byteLength;case MS:return o*e*3/l.components*l.byteLength;case Gi:return o*e*4/l.components*l.byteLength;case Hp:return o*e*4/l.components*l.byteLength;case gc:case _c:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case vc:case Sc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ip:case rp:return Math.max(o,16)*Math.max(e,8)/4;case np:case ap:return Math.max(o,8)*Math.max(e,8)/2;case sp:case op:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case lp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case up:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case cp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case fp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case dp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case hp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case pp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case mp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case gp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case _p:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case vp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case xp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case yp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Mp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Ep:case Tp:case bp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ap:case Rp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Cp:case wp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function MT(o){switch(o){case sa:case _S:return{byteLength:1,components:1};case ml:case vS:case xl:return{byteLength:2,components:1};case Pp:case Ip:return{byteLength:2,components:4};case es:case zp:case Da:return{byteLength:4,components:1};case SS:case xS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Op}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Op);function BS(){let o=null,e=!1,i=null,s=null;function l(f,d){i(f,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function ET(o){const e=new WeakMap;function i(h,_){const g=h.array,S=h.usage,p=g.byteLength,x=o.createBuffer();o.bindBuffer(_,x),o.bufferData(_,g,S),h.onUploadCallback();let M;if(g instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)M=o.HALF_FLOAT;else if(g instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=o.SHORT;else if(g instanceof Uint32Array)M=o.UNSIGNED_INT;else if(g instanceof Int32Array)M=o.INT;else if(g instanceof Int8Array)M=o.BYTE;else if(g instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:x,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version,size:p}}function s(h,_,g){const S=_.array,p=_.updateRanges;if(o.bindBuffer(g,h),p.length===0)o.bufferSubData(g,0,S);else{p.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<p.length;M++){const b=p[x],C=p[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++x,p[x]=C)}p.length=x+1;for(let M=0,b=p.length;M<b;M++){const C=p[M];o.bufferSubData(g,C.start*S.BYTES_PER_ELEMENT,S,C.start,C.count)}_.clearUpdateRanges()}_.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const _=e.get(h);_&&(o.deleteBuffer(_.buffer),e.delete(h))}function d(h,_){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=e.get(h);(!S||S.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const g=e.get(h);if(g===void 0)e.set(h,i(h,_));else if(g.version<h.version){if(g.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,h,_),g.version=h.version}}return{get:l,remove:f,update:d}}var TT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,AT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,UT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,LT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,BT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,WT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ZT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,KT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$T=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t1="gl_FragColor = linearToOutputTexel( gl_FragColor );",e1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,i1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,a1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,o1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,d1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,g1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,M1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,E1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,T1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,b1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,L1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,H1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,V1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,k1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,W1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ib=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ub=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,db=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_b=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ab=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Db=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ub=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ob=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ib=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$b=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,eA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_e={alphahash_fragment:TT,alphahash_pars_fragment:bT,alphamap_fragment:AT,alphamap_pars_fragment:RT,alphatest_fragment:CT,alphatest_pars_fragment:wT,aomap_fragment:DT,aomap_pars_fragment:UT,batching_pars_vertex:NT,batching_vertex:LT,begin_vertex:OT,beginnormal_vertex:zT,bsdfs:PT,iridescence_fragment:IT,bumpmap_pars_fragment:BT,clipping_planes_fragment:FT,clipping_planes_pars_fragment:HT,clipping_planes_pars_vertex:GT,clipping_planes_vertex:VT,color_fragment:kT,color_pars_fragment:XT,color_pars_vertex:qT,color_vertex:YT,common:WT,cube_uv_reflection_fragment:jT,defaultnormal_vertex:ZT,displacementmap_pars_vertex:KT,displacementmap_vertex:QT,emissivemap_fragment:JT,emissivemap_pars_fragment:$T,colorspace_fragment:t1,colorspace_pars_fragment:e1,envmap_fragment:n1,envmap_common_pars_fragment:i1,envmap_pars_fragment:a1,envmap_pars_vertex:r1,envmap_physical_pars_fragment:g1,envmap_vertex:s1,fog_vertex:o1,fog_pars_vertex:l1,fog_fragment:u1,fog_pars_fragment:c1,gradientmap_pars_fragment:f1,lightmap_pars_fragment:d1,lights_lambert_fragment:h1,lights_lambert_pars_fragment:p1,lights_pars_begin:m1,lights_toon_fragment:_1,lights_toon_pars_fragment:v1,lights_phong_fragment:S1,lights_phong_pars_fragment:x1,lights_physical_fragment:y1,lights_physical_pars_fragment:M1,lights_fragment_begin:E1,lights_fragment_maps:T1,lights_fragment_end:b1,logdepthbuf_fragment:A1,logdepthbuf_pars_fragment:R1,logdepthbuf_pars_vertex:C1,logdepthbuf_vertex:w1,map_fragment:D1,map_pars_fragment:U1,map_particle_fragment:N1,map_particle_pars_fragment:L1,metalnessmap_fragment:O1,metalnessmap_pars_fragment:z1,morphinstance_vertex:P1,morphcolor_vertex:I1,morphnormal_vertex:B1,morphtarget_pars_vertex:F1,morphtarget_vertex:H1,normal_fragment_begin:G1,normal_fragment_maps:V1,normal_pars_fragment:k1,normal_pars_vertex:X1,normal_vertex:q1,normalmap_pars_fragment:Y1,clearcoat_normal_fragment_begin:W1,clearcoat_normal_fragment_maps:j1,clearcoat_pars_fragment:Z1,iridescence_pars_fragment:K1,opaque_fragment:Q1,packing:J1,premultiplied_alpha_fragment:$1,project_vertex:tb,dithering_fragment:eb,dithering_pars_fragment:nb,roughnessmap_fragment:ib,roughnessmap_pars_fragment:ab,shadowmap_pars_fragment:rb,shadowmap_pars_vertex:sb,shadowmap_vertex:ob,shadowmask_pars_fragment:lb,skinbase_vertex:ub,skinning_pars_vertex:cb,skinning_vertex:fb,skinnormal_vertex:db,specularmap_fragment:hb,specularmap_pars_fragment:pb,tonemapping_fragment:mb,tonemapping_pars_fragment:gb,transmission_fragment:_b,transmission_pars_fragment:vb,uv_pars_fragment:Sb,uv_pars_vertex:xb,uv_vertex:yb,worldpos_vertex:Mb,background_vert:Eb,background_frag:Tb,backgroundCube_vert:bb,backgroundCube_frag:Ab,cube_vert:Rb,cube_frag:Cb,depth_vert:wb,depth_frag:Db,distanceRGBA_vert:Ub,distanceRGBA_frag:Nb,equirect_vert:Lb,equirect_frag:Ob,linedashed_vert:zb,linedashed_frag:Pb,meshbasic_vert:Ib,meshbasic_frag:Bb,meshlambert_vert:Fb,meshlambert_frag:Hb,meshmatcap_vert:Gb,meshmatcap_frag:Vb,meshnormal_vert:kb,meshnormal_frag:Xb,meshphong_vert:qb,meshphong_frag:Yb,meshphysical_vert:Wb,meshphysical_frag:jb,meshtoon_vert:Zb,meshtoon_frag:Kb,points_vert:Qb,points_frag:Jb,shadow_vert:$b,shadow_frag:tA,sprite_vert:eA,sprite_frag:nA},Xt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},na={basic:{uniforms:jn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:jn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new ne(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:jn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:jn([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:jn([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new ne(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:jn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:jn([Xt.points,Xt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:jn([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:jn([Xt.common,Xt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:jn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:jn([Xt.sprite,Xt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:jn([Xt.common,Xt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:jn([Xt.lights,Xt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};na.physical={uniforms:jn([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const dc={r:0,b:0,g:0},Yr=new oa,iA=new dn;function aA(o,e,i,s,l,f,d){const h=new ne(0);let _=f===!0?0:1,g,S,p=null,x=0,M=null;function b(z){let D=z.isScene===!0?z.background:null;return D&&D.isTexture&&(D=(z.backgroundBlurriness>0?i:e).get(D)),D}function C(z){let D=!1;const F=b(z);F===null?v(h,_):F&&F.isColor&&(v(F,1),D=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?s.buffers.color.setClear(0,0,0,1,d):L==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(z,D){const F=b(D);F&&(F.isCubeTexture||F.mapping===Tc)?(S===void 0&&(S=new Ve(new Ai(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:co(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(L,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(S)),Yr.copy(D.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),S.material.uniforms.envMap.value=F,S.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(iA.makeRotationFromEuler(Yr)),S.material.toneMapped=Le.getTransfer(F.colorSpace)!==Ze,(p!==F||x!==F.version||M!==o.toneMapping)&&(S.material.needsUpdate=!0,p=F,x=F.version,M=o.toneMapping),S.layers.enableAll(),z.unshift(S,S.geometry,S.material,0,0,null)):F&&F.isTexture&&(g===void 0&&(g=new Ve(new Na(2,2),new _r({name:"BackgroundMaterial",uniforms:co(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=F,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.toneMapped=Le.getTransfer(F.colorSpace)!==Ze,F.matrixAutoUpdate===!0&&F.updateMatrix(),g.material.uniforms.uvTransform.value.copy(F.matrix),(p!==F||x!==F.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,p=F,x=F.version,M=o.toneMapping),g.layers.enableAll(),z.unshift(g,g.geometry,g.material,0,0,null))}function v(z,D){z.getRGB(dc,LS(o)),s.buffers.color.setClear(dc.r,dc.g,dc.b,D,d)}function N(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return h},setClearColor:function(z,D=1){h.set(z),_=D,v(h,_)},getClearAlpha:function(){return _},setClearAlpha:function(z){_=z,v(h,_)},render:C,addToRenderList:y,dispose:N}}function rA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let f=l,d=!1;function h(R,V,Q,lt,pt){let ct=!1;const Y=p(lt,Q,V);f!==Y&&(f=Y,g(f.object)),ct=M(R,lt,Q,pt),ct&&b(R,lt,Q,pt),pt!==null&&e.update(pt,o.ELEMENT_ARRAY_BUFFER),(ct||d)&&(d=!1,D(R,V,Q,lt),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(pt).buffer))}function _(){return o.createVertexArray()}function g(R){return o.bindVertexArray(R)}function S(R){return o.deleteVertexArray(R)}function p(R,V,Q){const lt=Q.wireframe===!0;let pt=s[R.id];pt===void 0&&(pt={},s[R.id]=pt);let ct=pt[V.id];ct===void 0&&(ct={},pt[V.id]=ct);let Y=ct[lt];return Y===void 0&&(Y=x(_()),ct[lt]=Y),Y}function x(R){const V=[],Q=[],lt=[];for(let pt=0;pt<i;pt++)V[pt]=0,Q[pt]=0,lt[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Q,attributeDivisors:lt,object:R,attributes:{},index:null}}function M(R,V,Q,lt){const pt=f.attributes,ct=V.attributes;let Y=0;const G=Q.getAttributes();for(const W in G)if(G[W].location>=0){const xt=pt[W];let Vt=ct[W];if(Vt===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(Vt=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(Vt=R.instanceColor)),xt===void 0||xt.attribute!==Vt||Vt&&xt.data!==Vt.data)return!0;Y++}return f.attributesNum!==Y||f.index!==lt}function b(R,V,Q,lt){const pt={},ct=V.attributes;let Y=0;const G=Q.getAttributes();for(const W in G)if(G[W].location>=0){let xt=ct[W];xt===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor));const Vt={};Vt.attribute=xt,xt&&xt.data&&(Vt.data=xt.data),pt[W]=Vt,Y++}f.attributes=pt,f.attributesNum=Y,f.index=lt}function C(){const R=f.newAttributes;for(let V=0,Q=R.length;V<Q;V++)R[V]=0}function y(R){v(R,0)}function v(R,V){const Q=f.newAttributes,lt=f.enabledAttributes,pt=f.attributeDivisors;Q[R]=1,lt[R]===0&&(o.enableVertexAttribArray(R),lt[R]=1),pt[R]!==V&&(o.vertexAttribDivisor(R,V),pt[R]=V)}function N(){const R=f.newAttributes,V=f.enabledAttributes;for(let Q=0,lt=V.length;Q<lt;Q++)V[Q]!==R[Q]&&(o.disableVertexAttribArray(Q),V[Q]=0)}function z(R,V,Q,lt,pt,ct,Y){Y===!0?o.vertexAttribIPointer(R,V,Q,pt,ct):o.vertexAttribPointer(R,V,Q,lt,pt,ct)}function D(R,V,Q,lt){C();const pt=lt.attributes,ct=Q.getAttributes(),Y=V.defaultAttributeValues;for(const G in ct){const W=ct[G];if(W.location>=0){let mt=pt[G];if(mt===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(mt=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(mt=R.instanceColor)),mt!==void 0){const xt=mt.normalized,Vt=mt.itemSize,ce=e.get(mt);if(ce===void 0)continue;const Ee=ce.buffer,H=ce.type,ht=ce.bytesPerElement,et=H===o.INT||H===o.UNSIGNED_INT||mt.gpuType===zp;if(mt.isInterleavedBufferAttribute){const st=mt.data,Et=st.stride,Pt=mt.offset;if(st.isInstancedInterleavedBuffer){for(let wt=0;wt<W.locationSize;wt++)v(W.location+wt,st.meshPerAttribute);R.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let wt=0;wt<W.locationSize;wt++)y(W.location+wt);o.bindBuffer(o.ARRAY_BUFFER,Ee);for(let wt=0;wt<W.locationSize;wt++)z(W.location+wt,Vt/W.locationSize,H,xt,Et*ht,(Pt+Vt/W.locationSize*wt)*ht,et)}else{if(mt.isInstancedBufferAttribute){for(let st=0;st<W.locationSize;st++)v(W.location+st,mt.meshPerAttribute);R.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let st=0;st<W.locationSize;st++)y(W.location+st);o.bindBuffer(o.ARRAY_BUFFER,Ee);for(let st=0;st<W.locationSize;st++)z(W.location+st,Vt/W.locationSize,H,xt,Vt*ht,Vt/W.locationSize*st*ht,et)}}else if(Y!==void 0){const xt=Y[G];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(W.location,xt);break;case 3:o.vertexAttrib3fv(W.location,xt);break;case 4:o.vertexAttrib4fv(W.location,xt);break;default:o.vertexAttrib1fv(W.location,xt)}}}}N()}function F(){k();for(const R in s){const V=s[R];for(const Q in V){const lt=V[Q];for(const pt in lt)S(lt[pt].object),delete lt[pt];delete V[Q]}delete s[R]}}function L(R){if(s[R.id]===void 0)return;const V=s[R.id];for(const Q in V){const lt=V[Q];for(const pt in lt)S(lt[pt].object),delete lt[pt];delete V[Q]}delete s[R.id]}function P(R){for(const V in s){const Q=s[V];if(Q[R.id]===void 0)continue;const lt=Q[R.id];for(const pt in lt)S(lt[pt].object),delete lt[pt];delete Q[R.id]}}function k(){w(),d=!0,f!==l&&(f=l,g(f.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:w,dispose:F,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:y,disableUnusedAttributes:N}}function sA(o,e,i){let s;function l(g){s=g}function f(g,S){o.drawArrays(s,g,S),i.update(S,s,1)}function d(g,S,p){p!==0&&(o.drawArraysInstanced(s,g,S,p),i.update(S,s,p))}function h(g,S,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,S,0,p);let M=0;for(let b=0;b<p;b++)M+=S[b];i.update(M,s,1)}function _(g,S,p,x){if(p===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<g.length;b++)d(g[b],S[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(s,g,0,S,0,x,0,p);let b=0;for(let C=0;C<p;C++)b+=S[C]*x[C];i.update(b,s,1)}}this.setMode=l,this.render=f,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=_}function oA(o,e,i,s){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==Gi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const k=P===xl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==sa&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Da&&!k)}function _(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const S=_(g);S!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",S,"instead."),g=S);const p=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=b>0,L=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:_,textureFormatReadable:d,textureTypeReadable:h,precision:g,logarithmicDepthBuffer:p,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:N,maxVaryings:z,maxFragmentUniforms:D,vertexTextures:F,maxSamples:L}}function lA(o){const e=this;let i=null,s=0,l=!1,f=!1;const d=new Zr,h=new ge,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(p,x){const M=p.length!==0||x||s!==0||l;return l=x,s=p.length,M},this.beginShadows=function(){f=!0,S(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(p,x){i=S(p,x,0)},this.setState=function(p,x,M){const b=p.clippingPlanes,C=p.clipIntersection,y=p.clipShadows,v=o.get(p);if(!l||b===null||b.length===0||f&&!y)f?S(null):g();else{const N=f?0:s,z=N*4;let D=v.clippingState||null;_.value=D,D=S(b,x,z,M);for(let F=0;F!==z;++F)D[F]=i[F];v.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function g(){_.value!==i&&(_.value=i,_.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(p,x,M,b){const C=p!==null?p.length:0;let y=null;if(C!==0){if(y=_.value,b!==!0||y===null){const v=M+C*4,N=x.matrixWorldInverse;h.getNormalMatrix(N),(y===null||y.length<v)&&(y=new Float32Array(v));for(let z=0,D=M;z!==C;++z,D+=4)d.copy(p[z]).applyMatrix4(N,h),d.normal.toArray(y,D),y[D+3]=d.constant}_.value=y,_.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function uA(o){let e=new WeakMap;function i(d,h){return h===$h?d.mapping=oo:h===tp&&(d.mapping=lo),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===$h||h===tp)if(e.has(d)){const _=e.get(d).texture;return i(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const g=new lT(_.height);return g.fromEquirectangularTexture(o,d),e.set(d,g),d.addEventListener("dispose",l),i(g.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function f(){e=new WeakMap}return{get:s,dispose:f}}const io=4,Bv=[.125,.215,.35,.446,.526,.582],Jr=20,Ih=new Wp,Fv=new ne;let Bh=null,Fh=0,Hh=0,Gh=!1;const Kr=(1+Math.sqrt(5))/2,no=1/Kr,Hv=[new rt(-Kr,no,0),new rt(Kr,no,0),new rt(-no,0,Kr),new rt(no,0,Kr),new rt(0,Kr,-no),new rt(0,Kr,no),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],cA=new rt;class Gv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,f={}){const{size:d=256,position:h=cA}=f;Bh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(e,s,l,_,h),i>0&&this._blur(_,0,0,i),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bh,Fh,Hh),this._renderer.xr.enabled=Gh,e.scissorTest=!1,hc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===oo||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ia,minFilter:ia,generateMipmaps:!1,type:xl,format:Gi,colorSpace:uo,depthBuffer:!1},l=Vv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vv(e,i,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fA(f)),this._blurMaterial=dA(f,e,i)}return l}_compileMaterial(e){const i=new Ve(this._lodPlanes[0],e);this._renderer.compile(i,Ih)}_sceneToCubeUV(e,i,s,l,f){const _=new Bi(90,1,i,s),g=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],p=this._renderer,x=p.autoClear,M=p.toneMapping;p.getClearColor(Fv),p.toneMapping=mr,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(l),p.clearDepth(),p.setRenderTarget(null));const C=new bc({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1}),y=new Ve(new Ai,C);let v=!1;const N=e.background;N?N.isColor&&(C.color.copy(N),e.background=null,v=!0):(C.color.copy(Fv),v=!0);for(let z=0;z<6;z++){const D=z%3;D===0?(_.up.set(0,g[z],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x+S[z],f.y,f.z)):D===1?(_.up.set(0,0,g[z]),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y+S[z],f.z)):(_.up.set(0,g[z],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y,f.z+S[z]));const F=this._cubeSize;hc(l,D*F,z>2?F:0,F,F),p.setRenderTarget(l),v&&p.render(y,_),p.render(e,_)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=M,p.autoClear=x,e.background=N}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===oo||e.mapping===lo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kv());const f=l?this._cubemapMaterial:this._equirectMaterial,d=new Ve(this._lodPlanes[0],f),h=f.uniforms;h.envMap.value=e;const _=this._cubeSize;hc(i,0,0,3*_,2*_),s.setRenderTarget(i),s.render(d,Ih)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let f=1;f<l;f++){const d=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),h=Hv[(l-f-1)%Hv.length];this._blur(e,f-1,f,d,h)}i.autoClear=s}_blur(e,i,s,l,f){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",f),this._halfBlur(d,e,s,s,l,"longitudinal",f)}_halfBlur(e,i,s,l,f,d,h){const _=this._renderer,g=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,p=new Ve(this._lodPlanes[l],g),x=g.uniforms,M=this._sizeLods[s]-1,b=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Jr-1),C=f/b,y=isFinite(f)?1+Math.floor(S*C):Jr;y>Jr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Jr}`);const v=[];let N=0;for(let P=0;P<Jr;++P){const k=P/C,w=Math.exp(-k*k/2);v.push(w),P===0?N+=w:P<y&&(N+=2*w)}for(let P=0;P<v.length;P++)v[P]=v[P]/N;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:z}=this;x.dTheta.value=b,x.mipInt.value=z-s;const D=this._sizeLods[l],F=3*D*(l>z-io?l-z+io:0),L=4*(this._cubeSize-D);hc(i,F,L,3*D,2*D),_.setRenderTarget(i),_.render(p,Ih)}}function fA(o){const e=[],i=[],s=[];let l=o;const f=o-io+1+Bv.length;for(let d=0;d<f;d++){const h=Math.pow(2,l);i.push(h);let _=1/h;d>o-io?_=Bv[d-o+io-1]:d===0&&(_=0),s.push(_);const g=1/(h-2),S=-g,p=1+g,x=[S,S,p,S,p,p,S,S,p,p,S,p],M=6,b=6,C=3,y=2,v=1,N=new Float32Array(C*b*M),z=new Float32Array(y*b*M),D=new Float32Array(v*b*M);for(let L=0;L<M;L++){const P=L%3*2/3-1,k=L>2?0:-1,w=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];N.set(w,C*b*L),z.set(x,y*b*L);const R=[L,L,L,L,L,L];D.set(R,v*b*L)}const F=new ki;F.setAttribute("position",new ra(N,C)),F.setAttribute("uv",new ra(z,y)),F.setAttribute("faceIndex",new ra(D,v)),e.push(F),l>io&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function Vv(o,e,i){const s=new ns(o,e,i);return s.texture.mapping=Tc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function hc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function dA(o,e,i){const s=new Float32Array(Jr),l=new rt(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:jp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function kv(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Xv(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function jp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hA(o){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const _=h.mapping,g=_===$h||_===tp,S=_===oo||_===lo;if(g||S){let p=e.get(h);const x=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new Gv(o)),p=g?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{const M=h.image;return g&&M&&M.height>0||S&&M&&l(M)?(i===null&&(i=new Gv(o)),p=g?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",f),p.texture):null}}}return h}function l(h){let _=0;const g=6;for(let S=0;S<g;S++)h[S]!==void 0&&_++;return _===g}function f(h){const _=h.target;_.removeEventListener("dispose",f);const g=e.get(_);g!==void 0&&(e.delete(_),g.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function pA(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Sl("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function mA(o,e,i,s){const l={},f=new WeakMap;function d(p){const x=p.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",d),delete l[x.id];const M=f.get(x);M&&(e.remove(M),f.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(p,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function _(p){const x=p.attributes;for(const M in x)e.update(x[M],o.ARRAY_BUFFER)}function g(p){const x=[],M=p.index,b=p.attributes.position;let C=0;if(M!==null){const N=M.array;C=M.version;for(let z=0,D=N.length;z<D;z+=3){const F=N[z+0],L=N[z+1],P=N[z+2];x.push(F,L,L,P,P,F)}}else if(b!==void 0){const N=b.array;C=b.version;for(let z=0,D=N.length/3-1;z<D;z+=3){const F=z+0,L=z+1,P=z+2;x.push(F,L,L,P,P,F)}}else return;const y=new(RS(x)?NS:US)(x,1);y.version=C;const v=f.get(p);v&&e.remove(v),f.set(p,y)}function S(p){const x=f.get(p);if(x){const M=p.index;M!==null&&x.version<M.version&&g(p)}else g(p);return f.get(p)}return{get:h,update:_,getWireframeAttribute:S}}function gA(o,e,i){let s;function l(x){s=x}let f,d;function h(x){f=x.type,d=x.bytesPerElement}function _(x,M){o.drawElements(s,M,f,x*d),i.update(M,s,1)}function g(x,M,b){b!==0&&(o.drawElementsInstanced(s,M,f,x*d,b),i.update(M,s,b))}function S(x,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,x,0,b);let y=0;for(let v=0;v<b;v++)y+=M[v];i.update(y,s,1)}function p(x,M,b,C){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)g(x[v]/d,M[v],C[v]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,f,x,0,C,0,b);let v=0;for(let N=0;N<b;N++)v+=M[N]*C[N];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=_,this.renderInstances=g,this.renderMultiDraw=S,this.renderMultiDrawInstances=p}function _A(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function vA(o,e,i){const s=new WeakMap,l=new fn;function f(d,h,_){const g=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=S!==void 0?S.length:0;let x=s.get(h);if(x===void 0||x.count!==p){let R=function(){k.dispose(),s.delete(h),h.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let D=0;b===!0&&(D=1),C===!0&&(D=2),y===!0&&(D=3);let F=h.attributes.position.count*D,L=1;F>e.maxTextureSize&&(L=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const P=new Float32Array(F*L*4*p),k=new CS(P,F,L,p);k.type=Da,k.needsUpdate=!0;const w=D*4;for(let V=0;V<p;V++){const Q=v[V],lt=N[V],pt=z[V],ct=F*L*4*V;for(let Y=0;Y<Q.count;Y++){const G=Y*w;b===!0&&(l.fromBufferAttribute(Q,Y),P[ct+G+0]=l.x,P[ct+G+1]=l.y,P[ct+G+2]=l.z,P[ct+G+3]=0),C===!0&&(l.fromBufferAttribute(lt,Y),P[ct+G+4]=l.x,P[ct+G+5]=l.y,P[ct+G+6]=l.z,P[ct+G+7]=0),y===!0&&(l.fromBufferAttribute(pt,Y),P[ct+G+8]=l.x,P[ct+G+9]=l.y,P[ct+G+10]=l.z,P[ct+G+11]=pt.itemSize===4?l.w:1)}}x={count:p,texture:k,size:new ze(F,L)},s.set(h,x),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)_.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let b=0;for(let y=0;y<g.length;y++)b+=g[y];const C=h.morphTargetsRelative?1:1-b;_.getUniforms().setValue(o,"morphTargetBaseInfluence",C),_.getUniforms().setValue(o,"morphTargetInfluences",g)}_.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),_.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:f}}function SA(o,e,i,s){let l=new WeakMap;function f(_){const g=s.render.frame,S=_.geometry,p=e.get(_,S);if(l.get(p)!==g&&(e.update(p),l.set(p,g)),_.isInstancedMesh&&(_.hasEventListener("dispose",h)===!1&&_.addEventListener("dispose",h),l.get(_)!==g&&(i.update(_.instanceMatrix,o.ARRAY_BUFFER),_.instanceColor!==null&&i.update(_.instanceColor,o.ARRAY_BUFFER),l.set(_,g))),_.isSkinnedMesh){const x=_.skeleton;l.get(x)!==g&&(x.update(),l.set(x,g))}return p}function d(){l=new WeakMap}function h(_){const g=_.target;g.removeEventListener("dispose",h),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:d}}const FS=new Zn,qv=new PS(1,1),HS=new CS,GS=new XE,VS=new zS,Yv=[],Wv=[],jv=new Float32Array(16),Zv=new Float32Array(9),Kv=new Float32Array(4);function mo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let f=Yv[l];if(f===void 0&&(f=new Float32Array(l),Yv[l]=f),e!==0){s.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function Tn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function bn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Cc(o,e){let i=Wv[e];i===void 0&&(i=new Int32Array(e),Wv[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function xA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function yA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;o.uniform2fv(this.addr,e),bn(i,e)}}function MA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Tn(i,e))return;o.uniform3fv(this.addr,e),bn(i,e)}}function EA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;o.uniform4fv(this.addr,e),bn(i,e)}}function TA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),bn(i,e)}else{if(Tn(i,s))return;Kv.set(s),o.uniformMatrix2fv(this.addr,!1,Kv),bn(i,s)}}function bA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),bn(i,e)}else{if(Tn(i,s))return;Zv.set(s),o.uniformMatrix3fv(this.addr,!1,Zv),bn(i,s)}}function AA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),bn(i,e)}else{if(Tn(i,s))return;jv.set(s),o.uniformMatrix4fv(this.addr,!1,jv),bn(i,s)}}function RA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function CA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;o.uniform2iv(this.addr,e),bn(i,e)}}function wA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;o.uniform3iv(this.addr,e),bn(i,e)}}function DA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;o.uniform4iv(this.addr,e),bn(i,e)}}function UA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function NA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;o.uniform2uiv(this.addr,e),bn(i,e)}}function LA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;o.uniform3uiv(this.addr,e),bn(i,e)}}function OA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;o.uniform4uiv(this.addr,e),bn(i,e)}}function zA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(qv.compareFunction=AS,f=qv):f=FS,i.setTexture2D(e||f,l)}function PA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||GS,l)}function IA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||VS,l)}function BA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||HS,l)}function FA(o){switch(o){case 5126:return xA;case 35664:return yA;case 35665:return MA;case 35666:return EA;case 35674:return TA;case 35675:return bA;case 35676:return AA;case 5124:case 35670:return RA;case 35667:case 35671:return CA;case 35668:case 35672:return wA;case 35669:case 35673:return DA;case 5125:return UA;case 36294:return NA;case 36295:return LA;case 36296:return OA;case 35678:case 36198:case 36298:case 36306:case 35682:return zA;case 35679:case 36299:case 36307:return PA;case 35680:case 36300:case 36308:case 36293:return IA;case 36289:case 36303:case 36311:case 36292:return BA}}function HA(o,e){o.uniform1fv(this.addr,e)}function GA(o,e){const i=mo(e,this.size,2);o.uniform2fv(this.addr,i)}function VA(o,e){const i=mo(e,this.size,3);o.uniform3fv(this.addr,i)}function kA(o,e){const i=mo(e,this.size,4);o.uniform4fv(this.addr,i)}function XA(o,e){const i=mo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function qA(o,e){const i=mo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function YA(o,e){const i=mo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function WA(o,e){o.uniform1iv(this.addr,e)}function jA(o,e){o.uniform2iv(this.addr,e)}function ZA(o,e){o.uniform3iv(this.addr,e)}function KA(o,e){o.uniform4iv(this.addr,e)}function QA(o,e){o.uniform1uiv(this.addr,e)}function JA(o,e){o.uniform2uiv(this.addr,e)}function $A(o,e){o.uniform3uiv(this.addr,e)}function t2(o,e){o.uniform4uiv(this.addr,e)}function e2(o,e,i){const s=this.cache,l=e.length,f=Cc(i,l);Tn(s,f)||(o.uniform1iv(this.addr,f),bn(s,f));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||FS,f[d])}function n2(o,e,i){const s=this.cache,l=e.length,f=Cc(i,l);Tn(s,f)||(o.uniform1iv(this.addr,f),bn(s,f));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||GS,f[d])}function i2(o,e,i){const s=this.cache,l=e.length,f=Cc(i,l);Tn(s,f)||(o.uniform1iv(this.addr,f),bn(s,f));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||VS,f[d])}function a2(o,e,i){const s=this.cache,l=e.length,f=Cc(i,l);Tn(s,f)||(o.uniform1iv(this.addr,f),bn(s,f));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||HS,f[d])}function r2(o){switch(o){case 5126:return HA;case 35664:return GA;case 35665:return VA;case 35666:return kA;case 35674:return XA;case 35675:return qA;case 35676:return YA;case 5124:case 35670:return WA;case 35667:case 35671:return jA;case 35668:case 35672:return ZA;case 35669:case 35673:return KA;case 5125:return QA;case 36294:return JA;case 36295:return $A;case 36296:return t2;case 35678:case 36198:case 36298:case 36306:case 35682:return e2;case 35679:case 36299:case 36307:return n2;case 35680:case 36300:case 36308:case 36293:return i2;case 36289:case 36303:case 36311:case 36292:return a2}}class s2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=FA(i.type)}}class o2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=r2(i.type)}}class l2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let f=0,d=l.length;f!==d;++f){const h=l[f];h.setValue(e,i[h.id],s)}}}const Vh=/(\w+)(\])?(\[|\.)?/g;function Qv(o,e){o.seq.push(e),o.map[e.id]=e}function u2(o,e,i){const s=o.name,l=s.length;for(Vh.lastIndex=0;;){const f=Vh.exec(s),d=Vh.lastIndex;let h=f[1];const _=f[2]==="]",g=f[3];if(_&&(h=h|0),g===void 0||g==="["&&d+2===l){Qv(i,g===void 0?new s2(h,o,e):new o2(h,o,e));break}else{let p=i.map[h];p===void 0&&(p=new l2(h),Qv(i,p)),i=p}}}class xc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const f=e.getActiveUniform(i,l),d=e.getUniformLocation(i,f.name);u2(f,d,this)}}setValue(e,i,s,l){const f=this.map[i];f!==void 0&&f.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let f=0,d=i.length;f!==d;++f){const h=i[f],_=s[h.id];_.needsUpdate!==!1&&h.setValue(e,_.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,f=e.length;l!==f;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function Jv(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const c2=37297;let f2=0;function d2(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=l;d<f;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const $v=new ge;function h2(o){Le._getMatrix($v,Le.workingColorSpace,o);const e=`mat3( ${$v.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case yc:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function tS(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+d2(o.getShaderSource(e),h)}else return f}function p2(o,e){const i=h2(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function m2(o,e){let i;switch(e){case SE:i="Linear";break;case xE:i="Reinhard";break;case yE:i="Cineon";break;case mS:i="ACESFilmic";break;case EE:i="AgX";break;case TE:i="Neutral";break;case ME:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const pc=new rt;function g2(){Le.getLuminanceCoefficients(pc);const o=pc.x.toFixed(4),e=pc.y.toFixed(4),i=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _2(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function v2(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function S2(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const f=o.getActiveAttrib(e,l),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function hl(o){return o!==""}function eS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const x2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Up(o){return o.replace(x2,M2)}const y2=new Map;function M2(o,e){let i=_e[e];if(i===void 0){const s=y2.get(e);if(s!==void 0)i=_e[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Up(i)}const E2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iS(o){return o.replace(E2,T2)}function T2(o,e,i,s){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function aS(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function b2(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===dS?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===hS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===wa&&(e="SHADOWMAP_TYPE_VSM"),e}function A2(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case oo:case lo:e="ENVMAP_TYPE_CUBE";break;case Tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function R2(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===lo&&(e="ENVMAP_MODE_REFRACTION"),e}function C2(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case pS:e="ENVMAP_BLENDING_MULTIPLY";break;case _E:e="ENVMAP_BLENDING_MIX";break;case vE:e="ENVMAP_BLENDING_ADD";break}return e}function w2(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function D2(o,e,i,s){const l=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const _=b2(i),g=A2(i),S=R2(i),p=C2(i),x=w2(i),M=_2(i),b=v2(f),C=l.createProgram();let y,v,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(hl).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(hl).join(`
`),v.length>0&&(v+=`
`)):(y=[aS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),v=[aS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+S:"",i.envMap?"#define "+p:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==mr?"#define TONE_MAPPING":"",i.toneMapping!==mr?_e.tonemapping_pars_fragment:"",i.toneMapping!==mr?m2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,p2("linearToOutputTexel",i.outputColorSpace),g2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(hl).join(`
`)),d=Up(d),d=eS(d,i),d=nS(d,i),h=Up(h),h=eS(h,i),h=nS(h,i),d=iS(d),h=iS(h),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===_v?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===_v?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const z=N+y+d,D=N+v+h,F=Jv(l,l.VERTEX_SHADER,z),L=Jv(l,l.FRAGMENT_SHADER,D);l.attachShader(C,F),l.attachShader(C,L),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(V){if(o.debug.checkShaderErrors){const Q=l.getProgramInfoLog(C)||"",lt=l.getShaderInfoLog(F)||"",pt=l.getShaderInfoLog(L)||"",ct=Q.trim(),Y=lt.trim(),G=pt.trim();let W=!0,mt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,F,L);else{const xt=tS(l,F,"vertex"),Vt=tS(l,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ct+`
`+xt+`
`+Vt)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(Y===""||G==="")&&(mt=!1);mt&&(V.diagnostics={runnable:W,programLog:ct,vertexShader:{log:Y,prefix:y},fragmentShader:{log:G,prefix:v}})}l.deleteShader(F),l.deleteShader(L),k=new xc(l,C),w=S2(l,C)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,c2)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=f2++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=L,this}let U2=0;class N2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(f)===!1&&(d.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new L2(e),i.set(e,s)),s}}class L2{constructor(e){this.id=U2++,this.code=e,this.usedTimes=0}}function O2(o,e,i,s,l,f,d){const h=new wS,_=new N2,g=new Set,S=[],p=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return g.add(w),w===0?"uv":`uv${w}`}function y(w,R,V,Q,lt){const pt=Q.fog,ct=lt.geometry,Y=w.isMeshStandardMaterial?Q.environment:null,G=(w.isMeshStandardMaterial?i:e).get(w.envMap||Y),W=G&&G.mapping===Tc?G.image.height:null,mt=b[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const xt=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Vt=xt!==void 0?xt.length:0;let ce=0;ct.morphAttributes.position!==void 0&&(ce=1),ct.morphAttributes.normal!==void 0&&(ce=2),ct.morphAttributes.color!==void 0&&(ce=3);let Ee,H,ht,et;if(mt){const Te=na[mt];Ee=Te.vertexShader,H=Te.fragmentShader}else Ee=w.vertexShader,H=w.fragmentShader,_.update(w),ht=_.getVertexShaderID(w),et=_.getFragmentShaderID(w);const st=o.getRenderTarget(),Et=o.state.buffers.depth.getReversed(),Pt=lt.isInstancedMesh===!0,wt=lt.isBatchedMesh===!0,Tt=!!w.map,jt=!!w.matcap,I=!!G,we=!!w.aoMap,ue=!!w.lightMap,$t=!!w.bumpMap,It=!!w.normalMap,se=!!w.displacementMap,Ht=!!w.emissiveMap,le=!!w.metalnessMap,Pe=!!w.roughnessMap,Ye=w.anisotropy>0,U=w.clearcoat>0,T=w.dispersion>0,it=w.iridescence>0,B=w.sheen>0,ut=w.transmission>0,tt=Ye&&!!w.anisotropyMap,Rt=U&&!!w.clearcoatMap,yt=U&&!!w.clearcoatNormalMap,Ft=U&&!!w.clearcoatRoughnessMap,Gt=it&&!!w.iridescenceMap,St=it&&!!w.iridescenceThicknessMap,Ut=B&&!!w.sheenColorMap,te=B&&!!w.sheenRoughnessMap,qt=!!w.specularMap,Dt=!!w.specularColorMap,ie=!!w.specularIntensityMap,X=ut&&!!w.transmissionMap,At=ut&&!!w.thicknessMap,Nt=!!w.gradientMap,Zt=!!w.alphaMap,bt=w.alphaTest>0,vt=!!w.alphaHash,Jt=!!w.extensions;let he=mr;w.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(he=o.toneMapping);const We={shaderID:mt,shaderType:w.type,shaderName:w.name,vertexShader:Ee,fragmentShader:H,defines:w.defines,customVertexShaderID:ht,customFragmentShaderID:et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:wt,batchingColor:wt&&lt._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&lt.instanceColor!==null,instancingMorph:Pt&&lt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:st===null?o.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:uo,alphaToCoverage:!!w.alphaToCoverage,map:Tt,matcap:jt,envMap:I,envMapMode:I&&G.mapping,envMapCubeUVHeight:W,aoMap:we,lightMap:ue,bumpMap:$t,normalMap:It,displacementMap:x&&se,emissiveMap:Ht,normalMapObjectSpace:It&&w.normalMapType===CE,normalMapTangentSpace:It&&w.normalMapType===bS,metalnessMap:le,roughnessMap:Pe,anisotropy:Ye,anisotropyMap:tt,clearcoat:U,clearcoatMap:Rt,clearcoatNormalMap:yt,clearcoatRoughnessMap:Ft,dispersion:T,iridescence:it,iridescenceMap:Gt,iridescenceThicknessMap:St,sheen:B,sheenColorMap:Ut,sheenRoughnessMap:te,specularMap:qt,specularColorMap:Dt,specularIntensityMap:ie,transmission:ut,transmissionMap:X,thicknessMap:At,gradientMap:Nt,opaque:w.transparent===!1&&w.blending===ao&&w.alphaToCoverage===!1,alphaMap:Zt,alphaTest:bt,alphaHash:vt,combine:w.combine,mapUv:Tt&&C(w.map.channel),aoMapUv:we&&C(w.aoMap.channel),lightMapUv:ue&&C(w.lightMap.channel),bumpMapUv:$t&&C(w.bumpMap.channel),normalMapUv:It&&C(w.normalMap.channel),displacementMapUv:se&&C(w.displacementMap.channel),emissiveMapUv:Ht&&C(w.emissiveMap.channel),metalnessMapUv:le&&C(w.metalnessMap.channel),roughnessMapUv:Pe&&C(w.roughnessMap.channel),anisotropyMapUv:tt&&C(w.anisotropyMap.channel),clearcoatMapUv:Rt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:yt&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:St&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:te&&C(w.sheenRoughnessMap.channel),specularMapUv:qt&&C(w.specularMap.channel),specularColorMapUv:Dt&&C(w.specularColorMap.channel),specularIntensityMapUv:ie&&C(w.specularIntensityMap.channel),transmissionMapUv:X&&C(w.transmissionMap.channel),thicknessMapUv:At&&C(w.thicknessMap.channel),alphaMapUv:Zt&&C(w.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(It||Ye),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ct.attributes.uv&&(Tt||Zt),fog:!!pt,useFog:w.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Et,skinning:lt.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:ce,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:he,decodeVideoTexture:Tt&&w.map.isVideoTexture===!0&&Le.getTransfer(w.map.colorSpace)===Ze,decodeVideoTextureEmissive:Ht&&w.emissiveMap.isVideoTexture===!0&&Le.getTransfer(w.emissiveMap.colorSpace)===Ze,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Fi,flipSided:w.side===ii,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Jt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&w.extensions.multiDraw===!0||wt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return We.vertexUv1s=g.has(1),We.vertexUv2s=g.has(2),We.vertexUv3s=g.has(3),g.clear(),We}function v(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)R.push(V),R.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(N(R,w),z(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function N(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function z(w,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),w.push(h.mask)}function D(w){const R=b[w.type];let V;if(R){const Q=na[R];V=aT.clone(Q.uniforms)}else V=w.uniforms;return V}function F(w,R){let V;for(let Q=0,lt=S.length;Q<lt;Q++){const pt=S[Q];if(pt.cacheKey===R){V=pt,++V.usedTimes;break}}return V===void 0&&(V=new D2(o,R,w,f),S.push(V)),V}function L(w){if(--w.usedTimes===0){const R=S.indexOf(w);S[R]=S[S.length-1],S.pop(),w.destroy()}}function P(w){_.remove(w)}function k(){_.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:D,acquireProgram:F,releaseProgram:L,releaseShaderCache:P,programs:S,dispose:k}}function z2(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,_){o.get(d)[h]=_}function f(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:f}}function P2(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function rS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function sS(){const o=[];let e=0;const i=[],s=[],l=[];function f(){e=0,i.length=0,s.length=0,l.length=0}function d(p,x,M,b,C,y){let v=o[e];return v===void 0?(v={id:p.id,object:p,geometry:x,material:M,groupOrder:b,renderOrder:p.renderOrder,z:C,group:y},o[e]=v):(v.id=p.id,v.object=p,v.geometry=x,v.material=M,v.groupOrder=b,v.renderOrder=p.renderOrder,v.z=C,v.group=y),e++,v}function h(p,x,M,b,C,y){const v=d(p,x,M,b,C,y);M.transmission>0?s.push(v):M.transparent===!0?l.push(v):i.push(v)}function _(p,x,M,b,C,y){const v=d(p,x,M,b,C,y);M.transmission>0?s.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function g(p,x){i.length>1&&i.sort(p||P2),s.length>1&&s.sort(x||rS),l.length>1&&l.sort(x||rS)}function S(){for(let p=e,x=o.length;p<x;p++){const M=o[p];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:f,push:h,unshift:_,finish:S,sort:g}}function I2(){let o=new WeakMap;function e(s,l){const f=o.get(s);let d;return f===void 0?(d=new sS,o.set(s,[d])):l>=f.length?(d=new sS,f.push(d)):d=f[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function B2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new ne};break;case"SpotLight":i={position:new rt,direction:new rt,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new ne,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":i={color:new ne,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[e.id]=i,i}}}function F2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let H2=0;function G2(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function V2(o){const e=new B2,i=F2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new rt);const l=new rt,f=new dn,d=new dn;function h(g){let S=0,p=0,x=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,b=0,C=0,y=0,v=0,N=0,z=0,D=0,F=0,L=0,P=0;g.sort(G2);for(let w=0,R=g.length;w<R;w++){const V=g[w],Q=V.color,lt=V.intensity,pt=V.distance,ct=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)S+=Q.r*lt,p+=Q.g*lt,x+=Q.b*lt;else if(V.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(V.sh.coefficients[Y],lt);P++}else if(V.isDirectionalLight){const Y=e.get(V);if(Y.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,W=i.get(V);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,s.directionalShadow[M]=W,s.directionalShadowMap[M]=ct,s.directionalShadowMatrix[M]=V.shadow.matrix,N++}s.directional[M]=Y,M++}else if(V.isSpotLight){const Y=e.get(V);Y.position.setFromMatrixPosition(V.matrixWorld),Y.color.copy(Q).multiplyScalar(lt),Y.distance=pt,Y.coneCos=Math.cos(V.angle),Y.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),Y.decay=V.decay,s.spot[C]=Y;const G=V.shadow;if(V.map&&(s.spotLightMap[F]=V.map,F++,G.updateMatrices(V),V.castShadow&&L++),s.spotLightMatrix[C]=G.matrix,V.castShadow){const W=i.get(V);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,s.spotShadow[C]=W,s.spotShadowMap[C]=ct,D++}C++}else if(V.isRectAreaLight){const Y=e.get(V);Y.color.copy(Q).multiplyScalar(lt),Y.halfWidth.set(V.width*.5,0,0),Y.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=Y,y++}else if(V.isPointLight){const Y=e.get(V);if(Y.color.copy(V.color).multiplyScalar(V.intensity),Y.distance=V.distance,Y.decay=V.decay,V.castShadow){const G=V.shadow,W=i.get(V);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,W.shadowCameraNear=G.camera.near,W.shadowCameraFar=G.camera.far,s.pointShadow[b]=W,s.pointShadowMap[b]=ct,s.pointShadowMatrix[b]=V.shadow.matrix,z++}s.point[b]=Y,b++}else if(V.isHemisphereLight){const Y=e.get(V);Y.skyColor.copy(V.color).multiplyScalar(lt),Y.groundColor.copy(V.groundColor).multiplyScalar(lt),s.hemi[v]=Y,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Xt.LTC_FLOAT_1,s.rectAreaLTC2=Xt.LTC_FLOAT_2):(s.rectAreaLTC1=Xt.LTC_HALF_1,s.rectAreaLTC2=Xt.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=p,s.ambient[2]=x;const k=s.hash;(k.directionalLength!==M||k.pointLength!==b||k.spotLength!==C||k.rectAreaLength!==y||k.hemiLength!==v||k.numDirectionalShadows!==N||k.numPointShadows!==z||k.numSpotShadows!==D||k.numSpotMaps!==F||k.numLightProbes!==P)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=D+F-L,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=P,k.directionalLength=M,k.pointLength=b,k.spotLength=C,k.rectAreaLength=y,k.hemiLength=v,k.numDirectionalShadows=N,k.numPointShadows=z,k.numSpotShadows=D,k.numSpotMaps=F,k.numLightProbes=P,s.version=H2++)}function _(g,S){let p=0,x=0,M=0,b=0,C=0;const y=S.matrixWorldInverse;for(let v=0,N=g.length;v<N;v++){const z=g[v];if(z.isDirectionalLight){const D=s.directional[p];D.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),p++}else if(z.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(z.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(y),d.identity(),f.copy(z.matrixWorld),f.premultiply(y),d.extractRotation(f),D.halfWidth.set(z.width*.5,0,0),D.halfHeight.set(0,z.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),b++}else if(z.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(y),x++}else if(z.isHemisphereLight){const D=s.hemi[C];D.direction.setFromMatrixPosition(z.matrixWorld),D.direction.transformDirection(y),C++}}}return{setup:h,setupView:_,state:s}}function oS(o){const e=new V2(o),i=[],s=[];function l(S){g.camera=S,i.length=0,s.length=0}function f(S){i.push(S)}function d(S){s.push(S)}function h(){e.setup(i)}function _(S){e.setupView(i,S)}const g={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:h,setupLightsView:_,pushLight:f,pushShadow:d}}function k2(o){let e=new WeakMap;function i(l,f=0){const d=e.get(l);let h;return d===void 0?(h=new oS(o),e.set(l,[h])):f>=d.length?(h=new oS(o),d.push(h)):h=d[f],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const X2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Y2(o,e,i){let s=new kp;const l=new ze,f=new ze,d=new fn,h=new mT({depthPacking:RE}),_=new gT,g={},S=i.maxTextureSize,p={[gr]:ii,[ii]:gr,[Fi]:Fi},x=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:X2,fragmentShader:q2}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new ki;b.setAttribute("position",new ra(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ve(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dS;let v=this.type;this.render=function(L,P,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(pr),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const lt=v!==wa&&this.type===wa,pt=v===wa&&this.type!==wa;for(let ct=0,Y=L.length;ct<Y;ct++){const G=L[ct],W=G.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const mt=W.getFrameExtents();if(l.multiply(mt),f.copy(W.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(f.x=Math.floor(S/mt.x),l.x=f.x*mt.x,W.mapSize.x=f.x),l.y>S&&(f.y=Math.floor(S/mt.y),l.y=f.y*mt.y,W.mapSize.y=f.y)),W.map===null||lt===!0||pt===!0){const Vt=this.type!==wa?{minFilter:Vi,magFilter:Vi}:{};W.map!==null&&W.map.dispose(),W.map=new ns(l.x,l.y,Vt),W.map.texture.name=G.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const xt=W.getViewportCount();for(let Vt=0;Vt<xt;Vt++){const ce=W.getViewport(Vt);d.set(f.x*ce.x,f.y*ce.y,f.x*ce.z,f.y*ce.w),Q.viewport(d),W.updateMatrices(G,Vt),s=W.getFrustum(),D(P,k,W.camera,G,this.type)}W.isPointLightShadow!==!0&&this.type===wa&&N(W,k),W.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(w,R,V)};function N(L,P){const k=e.update(C);x.defines.VSM_SAMPLES!==L.blurSamples&&(x.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ns(l.x,l.y)),x.uniforms.shadow_pass.value=L.map.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(P,null,k,x,C,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(P,null,k,M,C,null)}function z(L,P,k,w){let R=null;const V=k.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)R=V;else if(R=k.isPointLight===!0?_:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Q=R.uuid,lt=P.uuid;let pt=g[Q];pt===void 0&&(pt={},g[Q]=pt);let ct=pt[lt];ct===void 0&&(ct=R.clone(),pt[lt]=ct,P.addEventListener("dispose",F)),R=ct}if(R.visible=P.visible,R.wireframe=P.wireframe,w===wa?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:p[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,k.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Q=o.properties.get(R);Q.light=k}return R}function D(L,P,k,w,R){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===wa)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,L.matrixWorld);const lt=e.update(L),pt=L.material;if(Array.isArray(pt)){const ct=lt.groups;for(let Y=0,G=ct.length;Y<G;Y++){const W=ct[Y],mt=pt[W.materialIndex];if(mt&&mt.visible){const xt=z(L,mt,w,R);L.onBeforeShadow(o,L,P,k,lt,xt,W),o.renderBufferDirect(k,null,lt,xt,L,W),L.onAfterShadow(o,L,P,k,lt,xt,W)}}}else if(pt.visible){const ct=z(L,pt,w,R);L.onBeforeShadow(o,L,P,k,lt,ct,null),o.renderBufferDirect(k,null,lt,ct,L,null),L.onAfterShadow(o,L,P,k,lt,ct,null)}}const Q=L.children;for(let lt=0,pt=Q.length;lt<pt;lt++)D(Q[lt],P,k,w,R)}function F(L){L.target.removeEventListener("dispose",F);for(const k in g){const w=g[k],R=L.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const W2={[Yh]:Wh,[jh]:Qh,[Zh]:Jh,[so]:Kh,[Wh]:Yh,[Qh]:jh,[Jh]:Zh,[Kh]:so};function j2(o,e){function i(){let X=!1;const At=new fn;let Nt=null;const Zt=new fn(0,0,0,0);return{setMask:function(bt){Nt!==bt&&!X&&(o.colorMask(bt,bt,bt,bt),Nt=bt)},setLocked:function(bt){X=bt},setClear:function(bt,vt,Jt,he,We){We===!0&&(bt*=he,vt*=he,Jt*=he),At.set(bt,vt,Jt,he),Zt.equals(At)===!1&&(o.clearColor(bt,vt,Jt,he),Zt.copy(At))},reset:function(){X=!1,Nt=null,Zt.set(-1,0,0,0)}}}function s(){let X=!1,At=!1,Nt=null,Zt=null,bt=null;return{setReversed:function(vt){if(At!==vt){const Jt=e.get("EXT_clip_control");vt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),At=vt;const he=bt;bt=null,this.setClear(he)}},getReversed:function(){return At},setTest:function(vt){vt?st(o.DEPTH_TEST):Et(o.DEPTH_TEST)},setMask:function(vt){Nt!==vt&&!X&&(o.depthMask(vt),Nt=vt)},setFunc:function(vt){if(At&&(vt=W2[vt]),Zt!==vt){switch(vt){case Yh:o.depthFunc(o.NEVER);break;case Wh:o.depthFunc(o.ALWAYS);break;case jh:o.depthFunc(o.LESS);break;case so:o.depthFunc(o.LEQUAL);break;case Zh:o.depthFunc(o.EQUAL);break;case Kh:o.depthFunc(o.GEQUAL);break;case Qh:o.depthFunc(o.GREATER);break;case Jh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Zt=vt}},setLocked:function(vt){X=vt},setClear:function(vt){bt!==vt&&(At&&(vt=1-vt),o.clearDepth(vt),bt=vt)},reset:function(){X=!1,Nt=null,Zt=null,bt=null,At=!1}}}function l(){let X=!1,At=null,Nt=null,Zt=null,bt=null,vt=null,Jt=null,he=null,We=null;return{setTest:function(Te){X||(Te?st(o.STENCIL_TEST):Et(o.STENCIL_TEST))},setMask:function(Te){At!==Te&&!X&&(o.stencilMask(Te),At=Te)},setFunc:function(Te,an,xn){(Nt!==Te||Zt!==an||bt!==xn)&&(o.stencilFunc(Te,an,xn),Nt=Te,Zt=an,bt=xn)},setOp:function(Te,an,xn){(vt!==Te||Jt!==an||he!==xn)&&(o.stencilOp(Te,an,xn),vt=Te,Jt=an,he=xn)},setLocked:function(Te){X=Te},setClear:function(Te){We!==Te&&(o.clearStencil(Te),We=Te)},reset:function(){X=!1,At=null,Nt=null,Zt=null,bt=null,vt=null,Jt=null,he=null,We=null}}}const f=new i,d=new s,h=new l,_=new WeakMap,g=new WeakMap;let S={},p={},x=new WeakMap,M=[],b=null,C=!1,y=null,v=null,N=null,z=null,D=null,F=null,L=null,P=new ne(0,0,0),k=0,w=!1,R=null,V=null,Q=null,lt=null,pt=null;const ct=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,G=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=G>=1):W.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=G>=2);let mt=null,xt={};const Vt=o.getParameter(o.SCISSOR_BOX),ce=o.getParameter(o.VIEWPORT),Ee=new fn().fromArray(Vt),H=new fn().fromArray(ce);function ht(X,At,Nt,Zt){const bt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(X,vt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<Nt;Jt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,Zt,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(At+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return vt}const et={};et[o.TEXTURE_2D]=ht(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=ht(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=ht(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=ht(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),st(o.DEPTH_TEST),d.setFunc(so),$t(!1),It(fv),st(o.CULL_FACE),we(pr);function st(X){S[X]!==!0&&(o.enable(X),S[X]=!0)}function Et(X){S[X]!==!1&&(o.disable(X),S[X]=!1)}function Pt(X,At){return p[X]!==At?(o.bindFramebuffer(X,At),p[X]=At,X===o.DRAW_FRAMEBUFFER&&(p[o.FRAMEBUFFER]=At),X===o.FRAMEBUFFER&&(p[o.DRAW_FRAMEBUFFER]=At),!0):!1}function wt(X,At){let Nt=M,Zt=!1;if(X){Nt=x.get(At),Nt===void 0&&(Nt=[],x.set(At,Nt));const bt=X.textures;if(Nt.length!==bt.length||Nt[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,Jt=bt.length;vt<Jt;vt++)Nt[vt]=o.COLOR_ATTACHMENT0+vt;Nt.length=bt.length,Zt=!0}}else Nt[0]!==o.BACK&&(Nt[0]=o.BACK,Zt=!0);Zt&&o.drawBuffers(Nt)}function Tt(X){return b!==X?(o.useProgram(X),b=X,!0):!1}const jt={[Qr]:o.FUNC_ADD,[tE]:o.FUNC_SUBTRACT,[eE]:o.FUNC_REVERSE_SUBTRACT};jt[nE]=o.MIN,jt[iE]=o.MAX;const I={[aE]:o.ZERO,[rE]:o.ONE,[sE]:o.SRC_COLOR,[Xh]:o.SRC_ALPHA,[dE]:o.SRC_ALPHA_SATURATE,[cE]:o.DST_COLOR,[lE]:o.DST_ALPHA,[oE]:o.ONE_MINUS_SRC_COLOR,[qh]:o.ONE_MINUS_SRC_ALPHA,[fE]:o.ONE_MINUS_DST_COLOR,[uE]:o.ONE_MINUS_DST_ALPHA,[hE]:o.CONSTANT_COLOR,[pE]:o.ONE_MINUS_CONSTANT_COLOR,[mE]:o.CONSTANT_ALPHA,[gE]:o.ONE_MINUS_CONSTANT_ALPHA};function we(X,At,Nt,Zt,bt,vt,Jt,he,We,Te){if(X===pr){C===!0&&(Et(o.BLEND),C=!1);return}if(C===!1&&(st(o.BLEND),C=!0),X!==$M){if(X!==y||Te!==w){if((v!==Qr||D!==Qr)&&(o.blendEquation(o.FUNC_ADD),v=Qr,D=Qr),Te)switch(X){case ao:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case dv:o.blendFunc(o.ONE,o.ONE);break;case hv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case pv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ao:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case dv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case hv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}N=null,z=null,F=null,L=null,P.set(0,0,0),k=0,y=X,w=Te}return}bt=bt||At,vt=vt||Nt,Jt=Jt||Zt,(At!==v||bt!==D)&&(o.blendEquationSeparate(jt[At],jt[bt]),v=At,D=bt),(Nt!==N||Zt!==z||vt!==F||Jt!==L)&&(o.blendFuncSeparate(I[Nt],I[Zt],I[vt],I[Jt]),N=Nt,z=Zt,F=vt,L=Jt),(he.equals(P)===!1||We!==k)&&(o.blendColor(he.r,he.g,he.b,We),P.copy(he),k=We),y=X,w=!1}function ue(X,At){X.side===Fi?Et(o.CULL_FACE):st(o.CULL_FACE);let Nt=X.side===ii;At&&(Nt=!Nt),$t(Nt),X.blending===ao&&X.transparent===!1?we(pr):we(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),f.setMask(X.colorWrite);const Zt=X.stencilWrite;h.setTest(Zt),Zt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ht(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?st(o.SAMPLE_ALPHA_TO_COVERAGE):Et(o.SAMPLE_ALPHA_TO_COVERAGE)}function $t(X){R!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),R=X)}function It(X){X!==QM?(st(o.CULL_FACE),X!==V&&(X===fv?o.cullFace(o.BACK):X===JM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Et(o.CULL_FACE),V=X}function se(X){X!==Q&&(Y&&o.lineWidth(X),Q=X)}function Ht(X,At,Nt){X?(st(o.POLYGON_OFFSET_FILL),(lt!==At||pt!==Nt)&&(o.polygonOffset(At,Nt),lt=At,pt=Nt)):Et(o.POLYGON_OFFSET_FILL)}function le(X){X?st(o.SCISSOR_TEST):Et(o.SCISSOR_TEST)}function Pe(X){X===void 0&&(X=o.TEXTURE0+ct-1),mt!==X&&(o.activeTexture(X),mt=X)}function Ye(X,At,Nt){Nt===void 0&&(mt===null?Nt=o.TEXTURE0+ct-1:Nt=mt);let Zt=xt[Nt];Zt===void 0&&(Zt={type:void 0,texture:void 0},xt[Nt]=Zt),(Zt.type!==X||Zt.texture!==At)&&(mt!==Nt&&(o.activeTexture(Nt),mt=Nt),o.bindTexture(X,At||et[X]),Zt.type=X,Zt.texture=At)}function U(){const X=xt[mt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function it(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function B(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function yt(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ft(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Gt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function St(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(X){Ee.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),Ee.copy(X))}function te(X){H.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),H.copy(X))}function qt(X,At){let Nt=g.get(At);Nt===void 0&&(Nt=new WeakMap,g.set(At,Nt));let Zt=Nt.get(X);Zt===void 0&&(Zt=o.getUniformBlockIndex(At,X.name),Nt.set(X,Zt))}function Dt(X,At){const Zt=g.get(At).get(X);_.get(At)!==Zt&&(o.uniformBlockBinding(At,Zt,X.__bindingPointIndex),_.set(At,Zt))}function ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},mt=null,xt={},p={},x=new WeakMap,M=[],b=null,C=!1,y=null,v=null,N=null,z=null,D=null,F=null,L=null,P=new ne(0,0,0),k=0,w=!1,R=null,V=null,Q=null,lt=null,pt=null,Ee.set(0,0,o.canvas.width,o.canvas.height),H.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:st,disable:Et,bindFramebuffer:Pt,drawBuffers:wt,useProgram:Tt,setBlending:we,setMaterial:ue,setFlipSided:$t,setCullFace:It,setLineWidth:se,setPolygonOffset:Ht,setScissorTest:le,activeTexture:Pe,bindTexture:Ye,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:it,texImage2D:Gt,texImage3D:St,updateUBOMapping:qt,uniformBlockBinding:Dt,texStorage2D:yt,texStorage3D:Ft,texSubImage2D:B,texSubImage3D:ut,compressedTexSubImage2D:tt,compressedTexSubImage3D:Rt,scissor:Ut,viewport:te,reset:ie}}function Z2(o,e,i,s,l,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new ze,S=new WeakMap;let p;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,T){return M?new OffscreenCanvas(U,T):Ec("canvas")}function C(U,T,it){let B=1;const ut=Ye(U);if((ut.width>it||ut.height>it)&&(B=it/Math.max(ut.width,ut.height)),B<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const tt=Math.floor(B*ut.width),Rt=Math.floor(B*ut.height);p===void 0&&(p=b(tt,Rt));const yt=T?b(tt,Rt):p;return yt.width=tt,yt.height=Rt,yt.getContext("2d").drawImage(U,0,0,tt,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+tt+"x"+Rt+")."),yt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),U;return U}function y(U){return U.generateMipmaps}function v(U){o.generateMipmap(U)}function N(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(U,T,it,B,ut=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let tt=T;if(T===o.RED&&(it===o.FLOAT&&(tt=o.R32F),it===o.HALF_FLOAT&&(tt=o.R16F),it===o.UNSIGNED_BYTE&&(tt=o.R8)),T===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(tt=o.R8UI),it===o.UNSIGNED_SHORT&&(tt=o.R16UI),it===o.UNSIGNED_INT&&(tt=o.R32UI),it===o.BYTE&&(tt=o.R8I),it===o.SHORT&&(tt=o.R16I),it===o.INT&&(tt=o.R32I)),T===o.RG&&(it===o.FLOAT&&(tt=o.RG32F),it===o.HALF_FLOAT&&(tt=o.RG16F),it===o.UNSIGNED_BYTE&&(tt=o.RG8)),T===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(tt=o.RG8UI),it===o.UNSIGNED_SHORT&&(tt=o.RG16UI),it===o.UNSIGNED_INT&&(tt=o.RG32UI),it===o.BYTE&&(tt=o.RG8I),it===o.SHORT&&(tt=o.RG16I),it===o.INT&&(tt=o.RG32I)),T===o.RGB_INTEGER&&(it===o.UNSIGNED_BYTE&&(tt=o.RGB8UI),it===o.UNSIGNED_SHORT&&(tt=o.RGB16UI),it===o.UNSIGNED_INT&&(tt=o.RGB32UI),it===o.BYTE&&(tt=o.RGB8I),it===o.SHORT&&(tt=o.RGB16I),it===o.INT&&(tt=o.RGB32I)),T===o.RGBA_INTEGER&&(it===o.UNSIGNED_BYTE&&(tt=o.RGBA8UI),it===o.UNSIGNED_SHORT&&(tt=o.RGBA16UI),it===o.UNSIGNED_INT&&(tt=o.RGBA32UI),it===o.BYTE&&(tt=o.RGBA8I),it===o.SHORT&&(tt=o.RGBA16I),it===o.INT&&(tt=o.RGBA32I)),T===o.RGB&&(it===o.UNSIGNED_INT_5_9_9_9_REV&&(tt=o.RGB9_E5),it===o.UNSIGNED_INT_10F_11F_11F_REV&&(tt=o.R11F_G11F_B10F)),T===o.RGBA){const Rt=ut?yc:Le.getTransfer(B);it===o.FLOAT&&(tt=o.RGBA32F),it===o.HALF_FLOAT&&(tt=o.RGBA16F),it===o.UNSIGNED_BYTE&&(tt=Rt===Ze?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT_4_4_4_4&&(tt=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(tt=o.RGB5_A1)}return(tt===o.R16F||tt===o.R32F||tt===o.RG16F||tt===o.RG32F||tt===o.RGBA16F||tt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),tt}function D(U,T){let it;return U?T===null||T===es||T===gl?it=o.DEPTH24_STENCIL8:T===Da?it=o.DEPTH32F_STENCIL8:T===ml&&(it=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===es||T===gl?it=o.DEPTH_COMPONENT24:T===Da?it=o.DEPTH_COMPONENT32F:T===ml&&(it=o.DEPTH_COMPONENT16),it}function F(U,T){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Vi&&U.minFilter!==ia?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function L(U){const T=U.target;T.removeEventListener("dispose",L),k(T),T.isVideoTexture&&S.delete(T)}function P(U){const T=U.target;T.removeEventListener("dispose",P),R(T)}function k(U){const T=s.get(U);if(T.__webglInit===void 0)return;const it=U.source,B=x.get(it);if(B){const ut=B[T.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&w(U),Object.keys(B).length===0&&x.delete(it)}s.remove(U)}function w(U){const T=s.get(U);o.deleteTexture(T.__webglTexture);const it=U.source,B=x.get(it);delete B[T.__cacheKey],d.memory.textures--}function R(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(T.__webglFramebuffer[B]))for(let ut=0;ut<T.__webglFramebuffer[B].length;ut++)o.deleteFramebuffer(T.__webglFramebuffer[B][ut]);else o.deleteFramebuffer(T.__webglFramebuffer[B]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[B])}else{if(Array.isArray(T.__webglFramebuffer))for(let B=0;B<T.__webglFramebuffer.length;B++)o.deleteFramebuffer(T.__webglFramebuffer[B]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let B=0;B<T.__webglColorRenderbuffer.length;B++)T.__webglColorRenderbuffer[B]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[B]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const it=U.textures;for(let B=0,ut=it.length;B<ut;B++){const tt=s.get(it[B]);tt.__webglTexture&&(o.deleteTexture(tt.__webglTexture),d.memory.textures--),s.remove(it[B])}s.remove(U)}let V=0;function Q(){V=0}function lt(){const U=V;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function pt(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function ct(U,T){const it=s.get(U);if(U.isVideoTexture&&le(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&it.__version!==U.version){const B=U.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(it,U,T);return}}else U.isExternalTexture&&(it.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+T)}function Y(U,T){const it=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&it.__version!==U.version){et(it,U,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+T)}function G(U,T){const it=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&it.__version!==U.version){et(it,U,T);return}i.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+T)}function W(U,T){const it=s.get(U);if(U.version>0&&it.__version!==U.version){st(it,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+T)}const mt={[pl]:o.REPEAT,[$r]:o.CLAMP_TO_EDGE,[ep]:o.MIRRORED_REPEAT},xt={[Vi]:o.NEAREST,[bE]:o.NEAREST_MIPMAP_NEAREST,[ju]:o.NEAREST_MIPMAP_LINEAR,[ia]:o.LINEAR,[ch]:o.LINEAR_MIPMAP_NEAREST,[ts]:o.LINEAR_MIPMAP_LINEAR},Vt={[wE]:o.NEVER,[zE]:o.ALWAYS,[DE]:o.LESS,[AS]:o.LEQUAL,[UE]:o.EQUAL,[OE]:o.GEQUAL,[NE]:o.GREATER,[LE]:o.NOTEQUAL};function ce(U,T){if(T.type===Da&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ia||T.magFilter===ch||T.magFilter===ju||T.magFilter===ts||T.minFilter===ia||T.minFilter===ch||T.minFilter===ju||T.minFilter===ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,mt[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,mt[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,mt[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,xt[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,xt[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Vt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Vi||T.minFilter!==ju&&T.minFilter!==ts||T.type===Da&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const it=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Ee(U,T){let it=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",L));const B=T.source;let ut=x.get(B);ut===void 0&&(ut={},x.set(B,ut));const tt=pt(T);if(tt!==U.__cacheKey){ut[tt]===void 0&&(ut[tt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,it=!0),ut[tt].usedTimes++;const Rt=ut[U.__cacheKey];Rt!==void 0&&(ut[U.__cacheKey].usedTimes--,Rt.usedTimes===0&&w(T)),U.__cacheKey=tt,U.__webglTexture=ut[tt].texture}return it}function H(U,T,it){return Math.floor(Math.floor(U/it)/T)}function ht(U,T,it,B){const tt=U.updateRanges;if(tt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,it,B,T.data);else{tt.sort((St,Ut)=>St.start-Ut.start);let Rt=0;for(let St=1;St<tt.length;St++){const Ut=tt[Rt],te=tt[St],qt=Ut.start+Ut.count,Dt=H(te.start,T.width,4),ie=H(Ut.start,T.width,4);te.start<=qt+1&&Dt===ie&&H(te.start+te.count-1,T.width,4)===Dt?Ut.count=Math.max(Ut.count,te.start+te.count-Ut.start):(++Rt,tt[Rt]=te)}tt.length=Rt+1;const yt=o.getParameter(o.UNPACK_ROW_LENGTH),Ft=o.getParameter(o.UNPACK_SKIP_PIXELS),Gt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let St=0,Ut=tt.length;St<Ut;St++){const te=tt[St],qt=Math.floor(te.start/4),Dt=Math.ceil(te.count/4),ie=qt%T.width,X=Math.floor(qt/T.width),At=Dt,Nt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ie),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,ie,X,At,Nt,it,B,T.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,yt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ft),o.pixelStorei(o.UNPACK_SKIP_ROWS,Gt)}}function et(U,T,it){let B=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(B=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(B=o.TEXTURE_3D);const ut=Ee(U,T),tt=T.source;i.bindTexture(B,U.__webglTexture,o.TEXTURE0+it);const Rt=s.get(tt);if(tt.version!==Rt.__version||ut===!0){i.activeTexture(o.TEXTURE0+it);const yt=Le.getPrimaries(Le.workingColorSpace),Ft=T.colorSpace===hr?null:Le.getPrimaries(T.colorSpace),Gt=T.colorSpace===hr||yt===Ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let St=C(T.image,!1,l.maxTextureSize);St=Pe(T,St);const Ut=f.convert(T.format,T.colorSpace),te=f.convert(T.type);let qt=z(T.internalFormat,Ut,te,T.colorSpace,T.isVideoTexture);ce(B,T);let Dt;const ie=T.mipmaps,X=T.isVideoTexture!==!0,At=Rt.__version===void 0||ut===!0,Nt=tt.dataReady,Zt=F(T,St);if(T.isDepthTexture)qt=D(T.format===vl,T.type),At&&(X?i.texStorage2D(o.TEXTURE_2D,1,qt,St.width,St.height):i.texImage2D(o.TEXTURE_2D,0,qt,St.width,St.height,0,Ut,te,null));else if(T.isDataTexture)if(ie.length>0){X&&At&&i.texStorage2D(o.TEXTURE_2D,Zt,qt,ie[0].width,ie[0].height);for(let bt=0,vt=ie.length;bt<vt;bt++)Dt=ie[bt],X?Nt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Dt.width,Dt.height,Ut,te,Dt.data):i.texImage2D(o.TEXTURE_2D,bt,qt,Dt.width,Dt.height,0,Ut,te,Dt.data);T.generateMipmaps=!1}else X?(At&&i.texStorage2D(o.TEXTURE_2D,Zt,qt,St.width,St.height),Nt&&ht(T,St,Ut,te)):i.texImage2D(o.TEXTURE_2D,0,qt,St.width,St.height,0,Ut,te,St.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Zt,qt,ie[0].width,ie[0].height,St.depth);for(let bt=0,vt=ie.length;bt<vt;bt++)if(Dt=ie[bt],T.format!==Gi)if(Ut!==null)if(X){if(Nt)if(T.layerUpdates.size>0){const Jt=Iv(Dt.width,Dt.height,T.format,T.type);for(const he of T.layerUpdates){const We=Dt.data.subarray(he*Jt/Dt.data.BYTES_PER_ELEMENT,(he+1)*Jt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,he,Dt.width,Dt.height,1,Ut,We)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Dt.width,Dt.height,St.depth,Ut,Dt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,qt,Dt.width,Dt.height,St.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Nt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Dt.width,Dt.height,St.depth,Ut,te,Dt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,qt,Dt.width,Dt.height,St.depth,0,Ut,te,Dt.data)}else{X&&At&&i.texStorage2D(o.TEXTURE_2D,Zt,qt,ie[0].width,ie[0].height);for(let bt=0,vt=ie.length;bt<vt;bt++)Dt=ie[bt],T.format!==Gi?Ut!==null?X?Nt&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Dt.width,Dt.height,Ut,Dt.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,qt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Nt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Dt.width,Dt.height,Ut,te,Dt.data):i.texImage2D(o.TEXTURE_2D,bt,qt,Dt.width,Dt.height,0,Ut,te,Dt.data)}else if(T.isDataArrayTexture)if(X){if(At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Zt,qt,St.width,St.height,St.depth),Nt)if(T.layerUpdates.size>0){const bt=Iv(St.width,St.height,T.format,T.type);for(const vt of T.layerUpdates){const Jt=St.data.subarray(vt*bt/St.data.BYTES_PER_ELEMENT,(vt+1)*bt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,St.width,St.height,1,Ut,te,Jt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Ut,te,St.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,qt,St.width,St.height,St.depth,0,Ut,te,St.data);else if(T.isData3DTexture)X?(At&&i.texStorage3D(o.TEXTURE_3D,Zt,qt,St.width,St.height,St.depth),Nt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Ut,te,St.data)):i.texImage3D(o.TEXTURE_3D,0,qt,St.width,St.height,St.depth,0,Ut,te,St.data);else if(T.isFramebufferTexture){if(At)if(X)i.texStorage2D(o.TEXTURE_2D,Zt,qt,St.width,St.height);else{let bt=St.width,vt=St.height;for(let Jt=0;Jt<Zt;Jt++)i.texImage2D(o.TEXTURE_2D,Jt,qt,bt,vt,0,Ut,te,null),bt>>=1,vt>>=1}}else if(ie.length>0){if(X&&At){const bt=Ye(ie[0]);i.texStorage2D(o.TEXTURE_2D,Zt,qt,bt.width,bt.height)}for(let bt=0,vt=ie.length;bt<vt;bt++)Dt=ie[bt],X?Nt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ut,te,Dt):i.texImage2D(o.TEXTURE_2D,bt,qt,Ut,te,Dt);T.generateMipmaps=!1}else if(X){if(At){const bt=Ye(St);i.texStorage2D(o.TEXTURE_2D,Zt,qt,bt.width,bt.height)}Nt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ut,te,St)}else i.texImage2D(o.TEXTURE_2D,0,qt,Ut,te,St);y(T)&&v(B),Rt.__version=tt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function st(U,T,it){if(T.image.length!==6)return;const B=Ee(U,T),ut=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+it);const tt=s.get(ut);if(ut.version!==tt.__version||B===!0){i.activeTexture(o.TEXTURE0+it);const Rt=Le.getPrimaries(Le.workingColorSpace),yt=T.colorSpace===hr?null:Le.getPrimaries(T.colorSpace),Ft=T.colorSpace===hr||Rt===yt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const Gt=T.isCompressedTexture||T.image[0].isCompressedTexture,St=T.image[0]&&T.image[0].isDataTexture,Ut=[];for(let vt=0;vt<6;vt++)!Gt&&!St?Ut[vt]=C(T.image[vt],!0,l.maxCubemapSize):Ut[vt]=St?T.image[vt].image:T.image[vt],Ut[vt]=Pe(T,Ut[vt]);const te=Ut[0],qt=f.convert(T.format,T.colorSpace),Dt=f.convert(T.type),ie=z(T.internalFormat,qt,Dt,T.colorSpace),X=T.isVideoTexture!==!0,At=tt.__version===void 0||B===!0,Nt=ut.dataReady;let Zt=F(T,te);ce(o.TEXTURE_CUBE_MAP,T);let bt;if(Gt){X&&At&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Zt,ie,te.width,te.height);for(let vt=0;vt<6;vt++){bt=Ut[vt].mipmaps;for(let Jt=0;Jt<bt.length;Jt++){const he=bt[Jt];T.format!==Gi?qt!==null?X?Nt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Jt,0,0,he.width,he.height,qt,he.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Jt,ie,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Jt,0,0,he.width,he.height,qt,Dt,he.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Jt,ie,he.width,he.height,0,qt,Dt,he.data)}}}else{if(bt=T.mipmaps,X&&At){bt.length>0&&Zt++;const vt=Ye(Ut[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Zt,ie,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(St){X?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ut[vt].width,Ut[vt].height,qt,Dt,Ut[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ie,Ut[vt].width,Ut[vt].height,0,qt,Dt,Ut[vt].data);for(let Jt=0;Jt<bt.length;Jt++){const We=bt[Jt].image[vt].image;X?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Jt+1,0,0,We.width,We.height,qt,Dt,We.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Jt+1,ie,We.width,We.height,0,qt,Dt,We.data)}}else{X?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,qt,Dt,Ut[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ie,qt,Dt,Ut[vt]);for(let Jt=0;Jt<bt.length;Jt++){const he=bt[Jt];X?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Jt+1,0,0,qt,Dt,he.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Jt+1,ie,qt,Dt,he.image[vt])}}}y(T)&&v(o.TEXTURE_CUBE_MAP),tt.__version=ut.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Et(U,T,it,B,ut,tt){const Rt=f.convert(it.format,it.colorSpace),yt=f.convert(it.type),Ft=z(it.internalFormat,Rt,yt,it.colorSpace),Gt=s.get(T),St=s.get(it);if(St.__renderTarget=T,!Gt.__hasExternalTextures){const Ut=Math.max(1,T.width>>tt),te=Math.max(1,T.height>>tt);ut===o.TEXTURE_3D||ut===o.TEXTURE_2D_ARRAY?i.texImage3D(ut,tt,Ft,Ut,te,T.depth,0,Rt,yt,null):i.texImage2D(ut,tt,Ft,Ut,te,0,Rt,yt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Ht(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,B,ut,St.__webglTexture,0,se(T)):(ut===o.TEXTURE_2D||ut>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,B,ut,St.__webglTexture,tt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(U,T,it){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const B=T.depthTexture,ut=B&&B.isDepthTexture?B.type:null,tt=D(T.stencilBuffer,ut),Rt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,yt=se(T);Ht(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,yt,tt,T.width,T.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,yt,tt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,tt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Rt,o.RENDERBUFFER,U)}else{const B=T.textures;for(let ut=0;ut<B.length;ut++){const tt=B[ut],Rt=f.convert(tt.format,tt.colorSpace),yt=f.convert(tt.type),Ft=z(tt.internalFormat,Rt,yt,tt.colorSpace),Gt=se(T);it&&Ht(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Gt,Ft,T.width,T.height):Ht(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Gt,Ft,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ft,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function wt(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=s.get(T.depthTexture);B.__renderTarget=T,(!B.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ct(T.depthTexture,0);const ut=B.__webglTexture,tt=se(T);if(T.depthTexture.format===_l)Ht(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ut,0,tt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ut,0);else if(T.depthTexture.format===vl)Ht(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ut,0,tt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function Tt(U){const T=s.get(U),it=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const B=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),B){const ut=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,B.removeEventListener("dispose",ut)};B.addEventListener("dispose",ut),T.__depthDisposeCallback=ut}T.__boundDepthTexture=B}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");const B=U.texture.mipmaps;B&&B.length>0?wt(T.__webglFramebuffer[0],U):wt(T.__webglFramebuffer,U)}else if(it){T.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[B]),T.__webglDepthbuffer[B]===void 0)T.__webglDepthbuffer[B]=o.createRenderbuffer(),Pt(T.__webglDepthbuffer[B],U,!1);else{const ut=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,tt=T.__webglDepthbuffer[B];o.bindRenderbuffer(o.RENDERBUFFER,tt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ut,o.RENDERBUFFER,tt)}}else{const B=U.texture.mipmaps;if(B&&B.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Pt(T.__webglDepthbuffer,U,!1);else{const ut=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,tt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,tt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ut,o.RENDERBUFFER,tt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function jt(U,T,it){const B=s.get(U);T!==void 0&&Et(B.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&Tt(U)}function I(U){const T=U.texture,it=s.get(U),B=s.get(T);U.addEventListener("dispose",P);const ut=U.textures,tt=U.isWebGLCubeRenderTarget===!0,Rt=ut.length>1;if(Rt||(B.__webglTexture===void 0&&(B.__webglTexture=o.createTexture()),B.__version=T.version,d.memory.textures++),tt){it.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer[yt]=[];for(let Ft=0;Ft<T.mipmaps.length;Ft++)it.__webglFramebuffer[yt][Ft]=o.createFramebuffer()}else it.__webglFramebuffer[yt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer=[];for(let yt=0;yt<T.mipmaps.length;yt++)it.__webglFramebuffer[yt]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(Rt)for(let yt=0,Ft=ut.length;yt<Ft;yt++){const Gt=s.get(ut[yt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&Ht(U)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let yt=0;yt<ut.length;yt++){const Ft=ut[yt];it.__webglColorRenderbuffer[yt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[yt]);const Gt=f.convert(Ft.format,Ft.colorSpace),St=f.convert(Ft.type),Ut=z(Ft.internalFormat,Gt,St,Ft.colorSpace,U.isXRRenderTarget===!0),te=se(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,te,Ut,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+yt,o.RENDERBUFFER,it.__webglColorRenderbuffer[yt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),Pt(it.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(tt){i.bindTexture(o.TEXTURE_CUBE_MAP,B.__webglTexture),ce(o.TEXTURE_CUBE_MAP,T);for(let yt=0;yt<6;yt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ft=0;Ft<T.mipmaps.length;Ft++)Et(it.__webglFramebuffer[yt][Ft],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft);else Et(it.__webglFramebuffer[yt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);y(T)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Rt){for(let yt=0,Ft=ut.length;yt<Ft;yt++){const Gt=ut[yt],St=s.get(Gt);let Ut=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ut=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,St.__webglTexture),ce(Ut,Gt),Et(it.__webglFramebuffer,U,Gt,o.COLOR_ATTACHMENT0+yt,Ut,0),y(Gt)&&v(Ut)}i.unbindTexture()}else{let yt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(yt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(yt,B.__webglTexture),ce(yt,T),T.mipmaps&&T.mipmaps.length>0)for(let Ft=0;Ft<T.mipmaps.length;Ft++)Et(it.__webglFramebuffer[Ft],U,T,o.COLOR_ATTACHMENT0,yt,Ft);else Et(it.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,yt,0);y(T)&&v(yt),i.unbindTexture()}U.depthBuffer&&Tt(U)}function we(U){const T=U.textures;for(let it=0,B=T.length;it<B;it++){const ut=T[it];if(y(ut)){const tt=N(U),Rt=s.get(ut).__webglTexture;i.bindTexture(tt,Rt),v(tt),i.unbindTexture()}}}const ue=[],$t=[];function It(U){if(U.samples>0){if(Ht(U)===!1){const T=U.textures,it=U.width,B=U.height;let ut=o.COLOR_BUFFER_BIT;const tt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=s.get(U),yt=T.length>1;if(yt)for(let Gt=0;Gt<T.length;Gt++)i.bindFramebuffer(o.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Gt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Rt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Gt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const Ft=U.texture.mipmaps;Ft&&Ft.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Gt=0;Gt<T.length;Gt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ut|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ut|=o.STENCIL_BUFFER_BIT)),yt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Rt.__webglColorRenderbuffer[Gt]);const St=s.get(T[Gt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,St,0)}o.blitFramebuffer(0,0,it,B,0,0,it,B,ut,o.NEAREST),_===!0&&(ue.length=0,$t.length=0,ue.push(o.COLOR_ATTACHMENT0+Gt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ue.push(tt),$t.push(tt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,$t)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ue))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),yt)for(let Gt=0;Gt<T.length;Gt++){i.bindFramebuffer(o.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Gt,o.RENDERBUFFER,Rt.__webglColorRenderbuffer[Gt]);const St=s.get(T[Gt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Rt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Gt,o.TEXTURE_2D,St,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&_){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function se(U){return Math.min(l.maxSamples,U.samples)}function Ht(U){const T=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function le(U){const T=d.render.frame;S.get(U)!==T&&(S.set(U,T),U.update())}function Pe(U,T){const it=U.colorSpace,B=U.format,ut=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||it!==uo&&it!==hr&&(Le.getTransfer(it)===Ze?(B!==Gi||ut!==sa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),T}function Ye(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(g.width=U.naturalWidth||U.width,g.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(g.width=U.displayWidth,g.height=U.displayHeight):(g.width=U.width,g.height=U.height),g}this.allocateTextureUnit=lt,this.resetTextureUnits=Q,this.setTexture2D=ct,this.setTexture2DArray=Y,this.setTexture3D=G,this.setTextureCube=W,this.rebindTextures=jt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Ht}function K2(o,e){function i(s,l=hr){let f;const d=Le.getTransfer(l);if(s===sa)return o.UNSIGNED_BYTE;if(s===Pp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Ip)return o.UNSIGNED_SHORT_5_5_5_1;if(s===SS)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===xS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===_S)return o.BYTE;if(s===vS)return o.SHORT;if(s===ml)return o.UNSIGNED_SHORT;if(s===zp)return o.INT;if(s===es)return o.UNSIGNED_INT;if(s===Da)return o.FLOAT;if(s===xl)return o.HALF_FLOAT;if(s===yS)return o.ALPHA;if(s===MS)return o.RGB;if(s===Gi)return o.RGBA;if(s===_l)return o.DEPTH_COMPONENT;if(s===vl)return o.DEPTH_STENCIL;if(s===ES)return o.RED;if(s===Bp)return o.RED_INTEGER;if(s===TS)return o.RG;if(s===Fp)return o.RG_INTEGER;if(s===Hp)return o.RGBA_INTEGER;if(s===gc||s===_c||s===vc||s===Sc)if(d===Ze)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===gc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===_c)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===vc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Sc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===gc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===_c)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===vc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Sc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===np||s===ip||s===ap||s===rp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===np)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ip)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ap)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sp||s===op||s===lp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===sp||s===op)return d===Ze?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===lp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===up||s===cp||s===fp||s===dp||s===hp||s===pp||s===mp||s===gp||s===_p||s===vp||s===Sp||s===xp||s===yp||s===Mp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===up)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_p)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mp)return d===Ze?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ep||s===Tp||s===bp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===Ep)return d===Ze?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Tp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===bp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ap||s===Rp||s===Cp||s===wp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===Ap)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Rp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Cp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===gl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const Q2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new IS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new _r({vertexShader:Q2,fragmentShader:J2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ve(new Na(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tR extends ho{constructor(e,i){super();const s=this;let l=null,f=1,d=null,h="local-floor",_=1,g=null,S=null,p=null,x=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",y=new $2,v={},N=i.getContextAttributes();let z=null,D=null;const F=[],L=[],P=new ze;let k=null;const w=new Bi;w.viewport=new fn;const R=new Bi;R.viewport=new fn;const V=[w,R],Q=new yT;let lt=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let st=F[et];return st===void 0&&(st=new Lh,F[et]=st),st.getTargetRaySpace()},this.getControllerGrip=function(et){let st=F[et];return st===void 0&&(st=new Lh,F[et]=st),st.getGripSpace()},this.getHand=function(et){let st=F[et];return st===void 0&&(st=new Lh,F[et]=st),st.getHandSpace()};function ct(et){const st=L.indexOf(et.inputSource);if(st===-1)return;const Et=F[st];Et!==void 0&&(Et.update(et.inputSource,et.frame,g||d),Et.dispatchEvent({type:et.type,data:et.inputSource}))}function Y(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",Y),l.removeEventListener("inputsourceschange",G);for(let et=0;et<F.length;et++){const st=L[et];st!==null&&(L[et]=null,F[et].disconnect(st))}lt=null,pt=null,y.reset();for(const et in v)delete v[et];e.setRenderTarget(z),M=null,x=null,p=null,l=null,D=null,ht.stop(),s.isPresenting=!1,e.setPixelRatio(k),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){f=et,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){h=et,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(et){g=et},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return p===null&&C&&(p=new XRWebGLBinding(l,i)),p},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(z=e.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",Y),l.addEventListener("inputsourceschange",G),N.xrCompatible!==!0&&await i.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Pt=null,wt=null;N.depth&&(wt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=N.stencil?vl:_l,Pt=N.stencil?gl:es);const Tt={colorFormat:i.RGBA8,depthFormat:wt,scaleFactor:f};p=this.getBinding(),x=p.createProjectionLayer(Tt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new ns(x.textureWidth,x.textureHeight,{format:Gi,type:sa,depthTexture:new PS(x.textureWidth,x.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Et={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new ns(M.framebufferWidth,M.framebufferHeight,{format:Gi,type:sa,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(_),g=null,d=await l.requestReferenceSpace(h),ht.setContext(l),ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(et){for(let st=0;st<et.removed.length;st++){const Et=et.removed[st],Pt=L.indexOf(Et);Pt>=0&&(L[Pt]=null,F[Pt].disconnect(Et))}for(let st=0;st<et.added.length;st++){const Et=et.added[st];let Pt=L.indexOf(Et);if(Pt===-1){for(let Tt=0;Tt<F.length;Tt++)if(Tt>=L.length){L.push(Et),Pt=Tt;break}else if(L[Tt]===null){L[Tt]=Et,Pt=Tt;break}if(Pt===-1)break}const wt=F[Pt];wt&&wt.connect(Et)}}const W=new rt,mt=new rt;function xt(et,st,Et){W.setFromMatrixPosition(st.matrixWorld),mt.setFromMatrixPosition(Et.matrixWorld);const Pt=W.distanceTo(mt),wt=st.projectionMatrix.elements,Tt=Et.projectionMatrix.elements,jt=wt[14]/(wt[10]-1),I=wt[14]/(wt[10]+1),we=(wt[9]+1)/wt[5],ue=(wt[9]-1)/wt[5],$t=(wt[8]-1)/wt[0],It=(Tt[8]+1)/Tt[0],se=jt*$t,Ht=jt*It,le=Pt/(-$t+It),Pe=le*-$t;if(st.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Pe),et.translateZ(le),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),wt[10]===-1)et.projectionMatrix.copy(st.projectionMatrix),et.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Ye=jt+le,U=I+le,T=se-Pe,it=Ht+(Pt-Pe),B=we*I/U*Ye,ut=ue*I/U*Ye;et.projectionMatrix.makePerspective(T,it,B,ut,Ye,U),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Vt(et,st){st===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(st.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let st=et.near,Et=et.far;y.texture!==null&&(y.depthNear>0&&(st=y.depthNear),y.depthFar>0&&(Et=y.depthFar)),Q.near=R.near=w.near=st,Q.far=R.far=w.far=Et,(lt!==Q.near||pt!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),lt=Q.near,pt=Q.far),Q.layers.mask=et.layers.mask|6,w.layers.mask=Q.layers.mask&3,R.layers.mask=Q.layers.mask&5;const Pt=et.parent,wt=Q.cameras;Vt(Q,Pt);for(let Tt=0;Tt<wt.length;Tt++)Vt(wt[Tt],Pt);wt.length===2?xt(Q,w,R):Q.projectionMatrix.copy(w.projectionMatrix),ce(et,Q,Pt)};function ce(et,st,Et){Et===null?et.matrix.copy(st.matrixWorld):(et.matrix.copy(Et.matrixWorld),et.matrix.invert(),et.matrix.multiply(st.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(st.projectionMatrix),et.projectionMatrixInverse.copy(st.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Dp*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(x===null&&M===null))return _},this.setFoveation=function(et){_=et,x!==null&&(x.fixedFoveation=et),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=et)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(et){return v[et]};let Ee=null;function H(et,st){if(S=st.getViewerPose(g||d),b=st,S!==null){const Et=S.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let Pt=!1;Et.length!==Q.cameras.length&&(Q.cameras.length=0,Pt=!0);for(let I=0;I<Et.length;I++){const we=Et[I];let ue=null;if(M!==null)ue=M.getViewport(we);else{const It=p.getViewSubImage(x,we);ue=It.viewport,I===0&&(e.setRenderTargetTextures(D,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(D))}let $t=V[I];$t===void 0&&($t=new Bi,$t.layers.enable(I),$t.viewport=new fn,V[I]=$t),$t.matrix.fromArray(we.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(we.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ue.x,ue.y,ue.width,ue.height),I===0&&(Q.matrix.copy($t.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Pt===!0&&Q.cameras.push($t)}const wt=l.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){p=s.getBinding();const I=p.getDepthInformation(Et[0]);I&&I.isValid&&I.texture&&y.init(I,l.renderState)}if(wt&&wt.includes("camera-access")&&C){e.state.unbindTexture(),p=s.getBinding();for(let I=0;I<Et.length;I++){const we=Et[I].camera;if(we){let ue=v[we];ue||(ue=new IS,v[we]=ue);const $t=p.getCameraImage(we);ue.sourceTexture=$t}}}}for(let Et=0;Et<F.length;Et++){const Pt=L[Et],wt=F[Et];Pt!==null&&wt!==void 0&&wt.update(Pt,st,g||d)}Ee&&Ee(et,st),st.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:st}),b=null}const ht=new BS;ht.setAnimationLoop(H),this.setAnimationLoop=function(et){Ee=et},this.dispose=function(){}}}const Wr=new oa,eR=new dn;function nR(o,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,LS(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,N,z,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?f(y,v):v.isMeshToonMaterial?(f(y,v),p(y,v)):v.isMeshPhongMaterial?(f(y,v),S(y,v)):v.isMeshStandardMaterial?(f(y,v),x(y,v),v.isMeshPhysicalMaterial&&M(y,v,D)):v.isMeshMatcapMaterial?(f(y,v),b(y,v)):v.isMeshDepthMaterial?f(y,v):v.isMeshDistanceMaterial?(f(y,v),C(y,v)):v.isMeshNormalMaterial?f(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?_(y,v,N,z):v.isSpriteMaterial?g(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function f(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===ii&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===ii&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const N=e.get(v),z=N.envMap,D=N.envMapRotation;z&&(y.envMap.value=z,Wr.copy(D),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),y.envMapRotation.value.setFromMatrix4(eR.makeRotationFromEuler(Wr)),y.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function _(y,v,N,z){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*N,y.scale.value=z*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function S(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function p(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,N){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ii&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function C(y,v){const N=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function iR(o,e,i,s){let l={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function _(N,z){const D=z.program;s.uniformBlockBinding(N,D)}function g(N,z){let D=l[N.id];D===void 0&&(b(N),D=S(N),l[N.id]=D,N.addEventListener("dispose",y));const F=z.program;s.updateUBOMapping(N,F);const L=e.render.frame;f[N.id]!==L&&(x(N),f[N.id]=L)}function S(N){const z=p();N.__bindingPointIndex=z;const D=o.createBuffer(),F=N.__size,L=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,F,L),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,D),D}function p(){for(let N=0;N<h;N++)if(d.indexOf(N)===-1)return d.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const z=l[N.id],D=N.uniforms,F=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let L=0,P=D.length;L<P;L++){const k=Array.isArray(D[L])?D[L]:[D[L]];for(let w=0,R=k.length;w<R;w++){const V=k[w];if(M(V,L,w,F)===!0){const Q=V.__offset,lt=Array.isArray(V.value)?V.value:[V.value];let pt=0;for(let ct=0;ct<lt.length;ct++){const Y=lt[ct],G=C(Y);typeof Y=="number"||typeof Y=="boolean"?(V.__data[0]=Y,o.bufferSubData(o.UNIFORM_BUFFER,Q+pt,V.__data)):Y.isMatrix3?(V.__data[0]=Y.elements[0],V.__data[1]=Y.elements[1],V.__data[2]=Y.elements[2],V.__data[3]=0,V.__data[4]=Y.elements[3],V.__data[5]=Y.elements[4],V.__data[6]=Y.elements[5],V.__data[7]=0,V.__data[8]=Y.elements[6],V.__data[9]=Y.elements[7],V.__data[10]=Y.elements[8],V.__data[11]=0):(Y.toArray(V.__data,pt),pt+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Q,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(N,z,D,F){const L=N.value,P=z+"_"+D;if(F[P]===void 0)return typeof L=="number"||typeof L=="boolean"?F[P]=L:F[P]=L.clone(),!0;{const k=F[P];if(typeof L=="number"||typeof L=="boolean"){if(k!==L)return F[P]=L,!0}else if(k.equals(L)===!1)return k.copy(L),!0}return!1}function b(N){const z=N.uniforms;let D=0;const F=16;for(let P=0,k=z.length;P<k;P++){const w=Array.isArray(z[P])?z[P]:[z[P]];for(let R=0,V=w.length;R<V;R++){const Q=w[R],lt=Array.isArray(Q.value)?Q.value:[Q.value];for(let pt=0,ct=lt.length;pt<ct;pt++){const Y=lt[pt],G=C(Y),W=D%F,mt=W%G.boundary,xt=W+mt;D+=mt,xt!==0&&F-xt<G.storage&&(D+=F-xt),Q.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=D,D+=G.storage}}}const L=D%F;return L>0&&(D+=F-L),N.__size=D,N.__cache={},this}function C(N){const z={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(z.boundary=4,z.storage=4):N.isVector2?(z.boundary=8,z.storage=8):N.isVector3||N.isColor?(z.boundary=16,z.storage=12):N.isVector4?(z.boundary=16,z.storage=16):N.isMatrix3?(z.boundary=48,z.storage=48):N.isMatrix4?(z.boundary=64,z.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),z}function y(N){const z=N.target;z.removeEventListener("dispose",y);const D=d.indexOf(z.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(l[z.id]),delete l[z.id],delete f[z.id]}function v(){for(const N in l)o.deleteBuffer(l[N]);d=[],l={},f={}}return{bind:_,update:g,dispose:v}}class aR{constructor(e={}){const{canvas:i=IE(),context:s=null,depth:l=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:g=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=d;const b=new Uint32Array(4),C=new Int32Array(4);let y=null,v=null;const N=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let F=!1;this._outputColorSpace=ni;let L=0,P=0,k=null,w=-1,R=null;const V=new fn,Q=new fn;let lt=null;const pt=new ne(0);let ct=0,Y=i.width,G=i.height,W=1,mt=null,xt=null;const Vt=new fn(0,0,Y,G),ce=new fn(0,0,Y,G);let Ee=!1;const H=new kp;let ht=!1,et=!1;const st=new dn,Et=new rt,Pt=new fn,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function jt(){return k===null?W:1}let I=s;function we(A,J){return i.getContext(A,J)}try{const A={alpha:!0,depth:l,stencil:f,antialias:h,premultipliedAlpha:_,preserveDrawingBuffer:g,powerPreference:S,failIfMajorPerformanceCaveat:p};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Op}`),i.addEventListener("webglcontextlost",Nt,!1),i.addEventListener("webglcontextrestored",Zt,!1),i.addEventListener("webglcontextcreationerror",bt,!1),I===null){const J="webgl2";if(I=we(J,A),I===null)throw we(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ue,$t,It,se,Ht,le,Pe,Ye,U,T,it,B,ut,tt,Rt,yt,Ft,Gt,St,Ut,te,qt,Dt,ie;function X(){ue=new pA(I),ue.init(),qt=new K2(I,ue),$t=new oA(I,ue,e,qt),It=new j2(I,ue),$t.reversedDepthBuffer&&x&&It.buffers.depth.setReversed(!0),se=new _A(I),Ht=new z2,le=new Z2(I,ue,It,Ht,$t,qt,se),Pe=new uA(D),Ye=new hA(D),U=new ET(I),Dt=new rA(I,U),T=new mA(I,U,se,Dt),it=new SA(I,T,U,se),St=new vA(I,$t,le),yt=new lA(Ht),B=new O2(D,Pe,Ye,ue,$t,Dt,yt),ut=new nR(D,Ht),tt=new I2,Rt=new k2(ue),Gt=new aA(D,Pe,Ye,It,it,M,_),Ft=new Y2(D,it,$t),ie=new iR(I,se,$t,It),Ut=new sA(I,ue,se),te=new gA(I,ue,se),se.programs=B.programs,D.capabilities=$t,D.extensions=ue,D.properties=Ht,D.renderLists=tt,D.shadowMap=Ft,D.state=It,D.info=se}X();const At=new tR(D,I);this.xr=At,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ue.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ue.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(Y,G,!1))},this.getSize=function(A){return A.set(Y,G)},this.setSize=function(A,J,ft=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,G=J,i.width=Math.floor(A*W),i.height=Math.floor(J*W),ft===!0&&(i.style.width=A+"px",i.style.height=J+"px"),this.setViewport(0,0,A,J)},this.getDrawingBufferSize=function(A){return A.set(Y*W,G*W).floor()},this.setDrawingBufferSize=function(A,J,ft){Y=A,G=J,W=ft,i.width=Math.floor(A*ft),i.height=Math.floor(J*ft),this.setViewport(0,0,A,J)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(Vt)},this.setViewport=function(A,J,ft,dt){A.isVector4?Vt.set(A.x,A.y,A.z,A.w):Vt.set(A,J,ft,dt),It.viewport(V.copy(Vt).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(ce)},this.setScissor=function(A,J,ft,dt){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,J,ft,dt),It.scissor(Q.copy(ce).multiplyScalar(W).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(A){It.setScissorTest(Ee=A)},this.setOpaqueSort=function(A){mt=A},this.setTransparentSort=function(A){xt=A},this.getClearColor=function(A){return A.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor(...arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha(...arguments)},this.clear=function(A=!0,J=!0,ft=!0){let dt=0;if(A){let $=!1;if(k!==null){const Ct=k.texture.format;$=Ct===Hp||Ct===Fp||Ct===Bp}if($){const Ct=k.texture.type,kt=Ct===sa||Ct===es||Ct===ml||Ct===gl||Ct===Pp||Ct===Ip,Yt=Gt.getClearColor(),Ot=Gt.getClearAlpha(),Kt=Yt.r,oe=Yt.g,ae=Yt.b;kt?(b[0]=Kt,b[1]=oe,b[2]=ae,b[3]=Ot,I.clearBufferuiv(I.COLOR,0,b)):(C[0]=Kt,C[1]=oe,C[2]=ae,C[3]=Ot,I.clearBufferiv(I.COLOR,0,C))}else dt|=I.COLOR_BUFFER_BIT}J&&(dt|=I.DEPTH_BUFFER_BIT),ft&&(dt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Nt,!1),i.removeEventListener("webglcontextrestored",Zt,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),Gt.dispose(),tt.dispose(),Rt.dispose(),Ht.dispose(),Pe.dispose(),Ye.dispose(),it.dispose(),Dt.dispose(),ie.dispose(),B.dispose(),At.dispose(),At.removeEventListener("sessionstart",xn),At.removeEventListener("sessionend",Bn),la.stop()};function Nt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Zt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const A=se.autoReset,J=Ft.enabled,ft=Ft.autoUpdate,dt=Ft.needsUpdate,$=Ft.type;X(),se.autoReset=A,Ft.enabled=J,Ft.autoUpdate=ft,Ft.needsUpdate=dt,Ft.type=$}function bt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function vt(A){const J=A.target;J.removeEventListener("dispose",vt),Jt(J)}function Jt(A){he(A),Ht.remove(A)}function he(A){const J=Ht.get(A).programs;J!==void 0&&(J.forEach(function(ft){B.releaseProgram(ft)}),A.isShaderMaterial&&B.releaseShaderCache(A))}this.renderBufferDirect=function(A,J,ft,dt,$,Ct){J===null&&(J=wt);const kt=$.isMesh&&$.matrixWorld.determinant()<0,Yt=Al(A,J,ft,dt,$);It.setMaterial(dt,kt);let Ot=ft.index,Kt=1;if(dt.wireframe===!0){if(Ot=T.getWireframeAttribute(ft),Ot===void 0)return;Kt=2}const oe=ft.drawRange,ae=ft.attributes.position;let xe=oe.start*Kt,He=(oe.start+oe.count)*Kt;Ct!==null&&(xe=Math.max(xe,Ct.start*Kt),He=Math.min(He,(Ct.start+Ct.count)*Kt)),Ot!==null?(xe=Math.max(xe,0),He=Math.min(He,Ot.count)):ae!=null&&(xe=Math.max(xe,0),He=Math.min(He,ae.count));const en=He-xe;if(en<0||en===1/0)return;Dt.setup($,dt,Yt,ft,Ot);let Ie,De=Ut;if(Ot!==null&&(Ie=U.get(Ot),De=te,De.setIndex(Ie)),$.isMesh)dt.wireframe===!0?(It.setLineWidth(dt.wireframeLinewidth*jt()),De.setMode(I.LINES)):De.setMode(I.TRIANGLES);else if($.isLine){let re=dt.linewidth;re===void 0&&(re=1),It.setLineWidth(re*jt()),$.isLineSegments?De.setMode(I.LINES):$.isLineLoop?De.setMode(I.LINE_LOOP):De.setMode(I.LINE_STRIP)}else $.isPoints?De.setMode(I.POINTS):$.isSprite&&De.setMode(I.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Sl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),De.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))De.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const re=$._multiDrawStarts,Be=$._multiDrawCounts,ve=$._multiDrawCount,yn=Ot?U.get(Ot).bytesPerElement:1,ai=Ht.get(dt).currentProgram.getUniforms();for(let Ue=0;Ue<ve;Ue++)ai.setValue(I,"_gl_DrawID",Ue),De.render(re[Ue]/yn,Be[Ue])}else if($.isInstancedMesh)De.renderInstances(xe,en,$.count);else if(ft.isInstancedBufferGeometry){const re=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Be=Math.min(ft.instanceCount,re);De.renderInstances(xe,en,Be)}else De.render(xe,en)};function We(A,J,ft){A.transparent===!0&&A.side===Fi&&A.forceSinglePass===!1?(A.side=ii,A.needsUpdate=!0,mi(A,J,ft),A.side=gr,A.needsUpdate=!0,mi(A,J,ft),A.side=Fi):mi(A,J,ft)}this.compile=function(A,J,ft=null){ft===null&&(ft=A),v=Rt.get(ft),v.init(J),z.push(v),ft.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),A!==ft&&A.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),v.setupLights();const dt=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ct=$.material;if(Ct)if(Array.isArray(Ct))for(let kt=0;kt<Ct.length;kt++){const Yt=Ct[kt];We(Yt,ft,$),dt.add(Yt)}else We(Ct,ft,$),dt.add(Ct)}),v=z.pop(),dt},this.compileAsync=function(A,J,ft=null){const dt=this.compile(A,J,ft);return new Promise($=>{function Ct(){if(dt.forEach(function(kt){Ht.get(kt).currentProgram.isReady()&&dt.delete(kt)}),dt.size===0){$(A);return}setTimeout(Ct,10)}ue.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Te=null;function an(A){Te&&Te(A)}function xn(){la.stop()}function Bn(){la.start()}const la=new BS;la.setAnimationLoop(an),typeof self<"u"&&la.setContext(self),this.setAnimationLoop=function(A){Te=A,At.setAnimationLoop(A),A===null?la.stop():la.start()},At.addEventListener("sessionstart",xn),At.addEventListener("sessionend",Bn),this.render=function(A,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(J),J=At.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,J,k),v=Rt.get(A,z.length),v.init(J),z.push(v),st.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),H.setFromProjectionMatrix(st,aa,J.reversedDepth),et=this.localClippingEnabled,ht=yt.init(this.clippingPlanes,et),y=tt.get(A,N.length),y.init(),N.push(y),At.enabled===!0&&At.isPresenting===!0){const Ct=D.xr.getDepthSensingMesh();Ct!==null&&go(Ct,J,-1/0,D.sortObjects)}go(A,J,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(mt,xt),Tt=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Tt&&Gt.addToRenderList(y,A),this.info.render.frame++,ht===!0&&yt.beginShadows();const ft=v.state.shadowsArray;Ft.render(ft,A,J),ht===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const dt=y.opaque,$=y.transmissive;if(v.setupLights(),J.isArrayCamera){const Ct=J.cameras;if($.length>0)for(let kt=0,Yt=Ct.length;kt<Yt;kt++){const Ot=Ct[kt];vr(dt,$,A,Ot)}Tt&&Gt.render(A);for(let kt=0,Yt=Ct.length;kt<Yt;kt++){const Ot=Ct[kt];bl(y,A,Ot,Ot.viewport)}}else $.length>0&&vr(dt,$,A,J),Tt&&Gt.render(A),bl(y,A,J);k!==null&&P===0&&(le.updateMultisampleRenderTarget(k),le.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(D,A,J),Dt.resetDefaultState(),w=-1,R=null,z.pop(),z.length>0?(v=z[z.length-1],ht===!0&&yt.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function go(A,J,ft,dt){if(A.visible===!1)return;if(A.layers.test(J.layers)){if(A.isGroup)ft=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(J);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||H.intersectsSprite(A)){dt&&Pt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(st);const kt=it.update(A),Yt=A.material;Yt.visible&&y.push(A,kt,Yt,ft,Pt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||H.intersectsObject(A))){const kt=it.update(A),Yt=A.material;if(dt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pt.copy(A.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),Pt.copy(kt.boundingSphere.center)),Pt.applyMatrix4(A.matrixWorld).applyMatrix4(st)),Array.isArray(Yt)){const Ot=kt.groups;for(let Kt=0,oe=Ot.length;Kt<oe;Kt++){const ae=Ot[Kt],xe=Yt[ae.materialIndex];xe&&xe.visible&&y.push(A,kt,xe,ft,Pt.z,ae)}}else Yt.visible&&y.push(A,kt,Yt,ft,Pt.z,null)}}const Ct=A.children;for(let kt=0,Yt=Ct.length;kt<Yt;kt++)go(Ct[kt],J,ft,dt)}function bl(A,J,ft,dt){const $=A.opaque,Ct=A.transmissive,kt=A.transparent;v.setupLightsView(ft),ht===!0&&yt.setGlobalState(D.clippingPlanes,ft),dt&&It.viewport(V.copy(dt)),$.length>0&&ua($,J,ft),Ct.length>0&&ua(Ct,J,ft),kt.length>0&&ua(kt,J,ft),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function vr(A,J,ft,dt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[dt.id]===void 0&&(v.state.transmissionRenderTarget[dt.id]=new ns(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?xl:sa,minFilter:ts,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Ct=v.state.transmissionRenderTarget[dt.id],kt=dt.viewport||V;Ct.setSize(kt.z*D.transmissionResolutionScale,kt.w*D.transmissionResolutionScale);const Yt=D.getRenderTarget(),Ot=D.getActiveCubeFace(),Kt=D.getActiveMipmapLevel();D.setRenderTarget(Ct),D.getClearColor(pt),ct=D.getClearAlpha(),ct<1&&D.setClearColor(16777215,.5),D.clear(),Tt&&Gt.render(ft);const oe=D.toneMapping;D.toneMapping=mr;const ae=dt.viewport;if(dt.viewport!==void 0&&(dt.viewport=void 0),v.setupLightsView(dt),ht===!0&&yt.setGlobalState(D.clippingPlanes,dt),ua(A,ft,dt),le.updateMultisampleRenderTarget(Ct),le.updateRenderTargetMipmap(Ct),ue.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let He=0,en=J.length;He<en;He++){const Ie=J[He],De=Ie.object,re=Ie.geometry,Be=Ie.material,ve=Ie.group;if(Be.side===Fi&&De.layers.test(dt.layers)){const yn=Be.side;Be.side=ii,Be.needsUpdate=!0,Sr(De,ft,dt,re,Be,ve),Be.side=yn,Be.needsUpdate=!0,xe=!0}}xe===!0&&(le.updateMultisampleRenderTarget(Ct),le.updateRenderTargetMipmap(Ct))}D.setRenderTarget(Yt,Ot,Kt),D.setClearColor(pt,ct),ae!==void 0&&(dt.viewport=ae),D.toneMapping=oe}function ua(A,J,ft){const dt=J.isScene===!0?J.overrideMaterial:null;for(let $=0,Ct=A.length;$<Ct;$++){const kt=A[$],Yt=kt.object,Ot=kt.geometry,Kt=kt.group;let oe=kt.material;oe.allowOverride===!0&&dt!==null&&(oe=dt),Yt.layers.test(ft.layers)&&Sr(Yt,J,ft,Ot,oe,Kt)}}function Sr(A,J,ft,dt,$,Ct){A.onBeforeRender(D,J,ft,dt,$,Ct),A.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(D,J,ft,dt,A,Ct),$.transparent===!0&&$.side===Fi&&$.forceSinglePass===!1?($.side=ii,$.needsUpdate=!0,D.renderBufferDirect(ft,J,dt,$,A,Ct),$.side=gr,$.needsUpdate=!0,D.renderBufferDirect(ft,J,dt,$,A,Ct),$.side=Fi):D.renderBufferDirect(ft,J,dt,$,A,Ct),A.onAfterRender(D,J,ft,dt,$,Ct)}function mi(A,J,ft){J.isScene!==!0&&(J=wt);const dt=Ht.get(A),$=v.state.lights,Ct=v.state.shadowsArray,kt=$.state.version,Yt=B.getParameters(A,$.state,Ct,J,ft),Ot=B.getProgramCacheKey(Yt);let Kt=dt.programs;dt.environment=A.isMeshStandardMaterial?J.environment:null,dt.fog=J.fog,dt.envMap=(A.isMeshStandardMaterial?Ye:Pe).get(A.envMap||dt.environment),dt.envMapRotation=dt.environment!==null&&A.envMap===null?J.environmentRotation:A.envMapRotation,Kt===void 0&&(A.addEventListener("dispose",vt),Kt=new Map,dt.programs=Kt);let oe=Kt.get(Ot);if(oe!==void 0){if(dt.currentProgram===oe&&dt.lightsStateVersion===kt)return La(A,Yt),oe}else Yt.uniforms=B.getUniforms(A),A.onBeforeCompile(Yt,D),oe=B.acquireProgram(Yt,Ot),Kt.set(Ot,oe),dt.uniforms=Yt.uniforms;const ae=dt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ae.clippingPlanes=yt.uniform),La(A,Yt),dt.needsLights=Rl(A),dt.lightsStateVersion=kt,dt.needsLights&&(ae.ambientLightColor.value=$.state.ambient,ae.lightProbe.value=$.state.probe,ae.directionalLights.value=$.state.directional,ae.directionalLightShadows.value=$.state.directionalShadow,ae.spotLights.value=$.state.spot,ae.spotLightShadows.value=$.state.spotShadow,ae.rectAreaLights.value=$.state.rectArea,ae.ltc_1.value=$.state.rectAreaLTC1,ae.ltc_2.value=$.state.rectAreaLTC2,ae.pointLights.value=$.state.point,ae.pointLightShadows.value=$.state.pointShadow,ae.hemisphereLights.value=$.state.hemi,ae.directionalShadowMap.value=$.state.directionalShadowMap,ae.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ae.spotShadowMap.value=$.state.spotShadowMap,ae.spotLightMatrix.value=$.state.spotLightMatrix,ae.spotLightMap.value=$.state.spotLightMap,ae.pointShadowMap.value=$.state.pointShadowMap,ae.pointShadowMatrix.value=$.state.pointShadowMatrix),dt.currentProgram=oe,dt.uniformsList=null,oe}function xr(A){if(A.uniformsList===null){const J=A.currentProgram.getUniforms();A.uniformsList=xc.seqWithValue(J.seq,A.uniforms)}return A.uniformsList}function La(A,J){const ft=Ht.get(A);ft.outputColorSpace=J.outputColorSpace,ft.batching=J.batching,ft.batchingColor=J.batchingColor,ft.instancing=J.instancing,ft.instancingColor=J.instancingColor,ft.instancingMorph=J.instancingMorph,ft.skinning=J.skinning,ft.morphTargets=J.morphTargets,ft.morphNormals=J.morphNormals,ft.morphColors=J.morphColors,ft.morphTargetsCount=J.morphTargetsCount,ft.numClippingPlanes=J.numClippingPlanes,ft.numIntersection=J.numClipIntersection,ft.vertexAlphas=J.vertexAlphas,ft.vertexTangents=J.vertexTangents,ft.toneMapping=J.toneMapping}function Al(A,J,ft,dt,$){J.isScene!==!0&&(J=wt),le.resetTextureUnits();const Ct=J.fog,kt=dt.isMeshStandardMaterial?J.environment:null,Yt=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:uo,Ot=(dt.isMeshStandardMaterial?Ye:Pe).get(dt.envMap||kt),Kt=dt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,oe=!!ft.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),ae=!!ft.morphAttributes.position,xe=!!ft.morphAttributes.normal,He=!!ft.morphAttributes.color;let en=mr;dt.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(en=D.toneMapping);const Ie=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,De=Ie!==void 0?Ie.length:0,re=Ht.get(dt),Be=v.state.lights;if(ht===!0&&(et===!0||A!==R)){const on=A===R&&dt.id===w;yt.setState(dt,A,on)}let ve=!1;dt.version===re.__version?(re.needsLights&&re.lightsStateVersion!==Be.state.version||re.outputColorSpace!==Yt||$.isBatchedMesh&&re.batching===!1||!$.isBatchedMesh&&re.batching===!0||$.isBatchedMesh&&re.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&re.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&re.instancing===!1||!$.isInstancedMesh&&re.instancing===!0||$.isSkinnedMesh&&re.skinning===!1||!$.isSkinnedMesh&&re.skinning===!0||$.isInstancedMesh&&re.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&re.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&re.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&re.instancingMorph===!1&&$.morphTexture!==null||re.envMap!==Ot||dt.fog===!0&&re.fog!==Ct||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==yt.numPlanes||re.numIntersection!==yt.numIntersection)||re.vertexAlphas!==Kt||re.vertexTangents!==oe||re.morphTargets!==ae||re.morphNormals!==xe||re.morphColors!==He||re.toneMapping!==en||re.morphTargetsCount!==De)&&(ve=!0):(ve=!0,re.__version=dt.version);let yn=re.currentProgram;ve===!0&&(yn=mi(dt,J,$));let ai=!1,Ue=!1,Oa=!1;const Qe=yn.getUniforms(),kn=re.uniforms;if(It.useProgram(yn.program)&&(ai=!0,Ue=!0,Oa=!0),dt.id!==w&&(w=dt.id,Ue=!0),ai||R!==A){It.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Qe.setValue(I,"projectionMatrix",A.projectionMatrix),Qe.setValue(I,"viewMatrix",A.matrixWorldInverse);const Fn=Qe.map.cameraPosition;Fn!==void 0&&Fn.setValue(I,Et.setFromMatrixPosition(A.matrixWorld)),$t.logarithmicDepthBuffer&&Qe.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&Qe.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Ue=!0,Oa=!0)}if($.isSkinnedMesh){Qe.setOptional(I,$,"bindMatrix"),Qe.setOptional(I,$,"bindMatrixInverse");const on=$.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Qe.setValue(I,"boneTexture",on.boneTexture,le))}$.isBatchedMesh&&(Qe.setOptional(I,$,"batchingTexture"),Qe.setValue(I,"batchingTexture",$._matricesTexture,le),Qe.setOptional(I,$,"batchingIdTexture"),Qe.setValue(I,"batchingIdTexture",$._indirectTexture,le),Qe.setOptional(I,$,"batchingColorTexture"),$._colorsTexture!==null&&Qe.setValue(I,"batchingColorTexture",$._colorsTexture,le));const pn=ft.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&St.update($,ft,yn),(Ue||re.receiveShadow!==$.receiveShadow)&&(re.receiveShadow=$.receiveShadow,Qe.setValue(I,"receiveShadow",$.receiveShadow)),dt.isMeshGouraudMaterial&&dt.envMap!==null&&(kn.envMap.value=Ot,kn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),dt.isMeshStandardMaterial&&dt.envMap===null&&J.environment!==null&&(kn.envMapIntensity.value=J.environmentIntensity),Ue&&(Qe.setValue(I,"toneMappingExposure",D.toneMappingExposure),re.needsLights&&wc(kn,Oa),Ct&&dt.fog===!0&&ut.refreshFogUniforms(kn,Ct),ut.refreshMaterialUniforms(kn,dt,W,G,v.state.transmissionRenderTarget[A.id]),xc.upload(I,xr(re),kn,le)),dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(xc.upload(I,xr(re),kn,le),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&Qe.setValue(I,"center",$.center),Qe.setValue(I,"modelViewMatrix",$.modelViewMatrix),Qe.setValue(I,"normalMatrix",$.normalMatrix),Qe.setValue(I,"modelMatrix",$.matrixWorld),dt.isShaderMaterial||dt.isRawShaderMaterial){const on=dt.uniformsGroups;for(let Fn=0,is=on.length;Fn<is;Fn++){const Xi=on[Fn];ie.update(Xi,yn),ie.bind(Xi,yn)}}return yn}function wc(A,J){A.ambientLightColor.needsUpdate=J,A.lightProbe.needsUpdate=J,A.directionalLights.needsUpdate=J,A.directionalLightShadows.needsUpdate=J,A.pointLights.needsUpdate=J,A.pointLightShadows.needsUpdate=J,A.spotLights.needsUpdate=J,A.spotLightShadows.needsUpdate=J,A.rectAreaLights.needsUpdate=J,A.hemisphereLights.needsUpdate=J}function Rl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,J,ft){const dt=Ht.get(A);dt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,dt.__autoAllocateDepthBuffer===!1&&(dt.__useRenderToTexture=!1),Ht.get(A.texture).__webglTexture=J,Ht.get(A.depthTexture).__webglTexture=dt.__autoAllocateDepthBuffer?void 0:ft,dt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,J){const ft=Ht.get(A);ft.__webglFramebuffer=J,ft.__useDefaultFramebuffer=J===void 0};const _o=I.createFramebuffer();this.setRenderTarget=function(A,J=0,ft=0){k=A,L=J,P=ft;let dt=!0,$=null,Ct=!1,kt=!1;if(A){const Ot=Ht.get(A);if(Ot.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(I.FRAMEBUFFER,null),dt=!1;else if(Ot.__webglFramebuffer===void 0)le.setupRenderTarget(A);else if(Ot.__hasExternalTextures)le.rebindTextures(A,Ht.get(A.texture).__webglTexture,Ht.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ae=A.depthTexture;if(Ot.__boundDepthTexture!==ae){if(ae!==null&&Ht.has(ae)&&(A.width!==ae.image.width||A.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(A)}}const Kt=A.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(kt=!0);const oe=Ht.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(oe[J])?$=oe[J][ft]:$=oe[J],Ct=!0):A.samples>0&&le.useMultisampledRTT(A)===!1?$=Ht.get(A).__webglMultisampledFramebuffer:Array.isArray(oe)?$=oe[ft]:$=oe,V.copy(A.viewport),Q.copy(A.scissor),lt=A.scissorTest}else V.copy(Vt).multiplyScalar(W).floor(),Q.copy(ce).multiplyScalar(W).floor(),lt=Ee;if(ft!==0&&($=_o),It.bindFramebuffer(I.FRAMEBUFFER,$)&&dt&&It.drawBuffers(A,$),It.viewport(V),It.scissor(Q),It.setScissorTest(lt),Ct){const Ot=Ht.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ot.__webglTexture,ft)}else if(kt){const Ot=J;for(let Kt=0;Kt<A.textures.length;Kt++){const oe=Ht.get(A.textures[Kt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Kt,oe.__webglTexture,ft,Ot)}}else if(A!==null&&ft!==0){const Ot=Ht.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ot.__webglTexture,ft)}w=-1},this.readRenderTargetPixels=function(A,J,ft,dt,$,Ct,kt,Yt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&kt!==void 0&&(Ot=Ot[kt]),Ot){It.bindFramebuffer(I.FRAMEBUFFER,Ot);try{const Kt=A.textures[Yt],oe=Kt.format,ae=Kt.type;if(!$t.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=A.width-dt&&ft>=0&&ft<=A.height-$&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Yt),I.readPixels(J,ft,dt,$,qt.convert(oe),qt.convert(ae),Ct))}finally{const Kt=k!==null?Ht.get(k).__webglFramebuffer:null;It.bindFramebuffer(I.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(A,J,ft,dt,$,Ct,kt,Yt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&kt!==void 0&&(Ot=Ot[kt]),Ot)if(J>=0&&J<=A.width-dt&&ft>=0&&ft<=A.height-$){It.bindFramebuffer(I.FRAMEBUFFER,Ot);const Kt=A.textures[Yt],oe=Kt.format,ae=Kt.type;if(!$t.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,xe),I.bufferData(I.PIXEL_PACK_BUFFER,Ct.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Yt),I.readPixels(J,ft,dt,$,qt.convert(oe),qt.convert(ae),0);const He=k!==null?Ht.get(k).__webglFramebuffer:null;It.bindFramebuffer(I.FRAMEBUFFER,He);const en=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await BE(I,en,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,xe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ct),I.deleteBuffer(xe),I.deleteSync(en),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,J=null,ft=0){const dt=Math.pow(2,-ft),$=Math.floor(A.image.width*dt),Ct=Math.floor(A.image.height*dt),kt=J!==null?J.x:0,Yt=J!==null?J.y:0;le.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,ft,0,0,kt,Yt,$,Ct),It.unbindTexture()};const yr=I.createFramebuffer(),Dc=I.createFramebuffer();this.copyTextureToTexture=function(A,J,ft=null,dt=null,$=0,Ct=null){Ct===null&&($!==0?(Sl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ct=$,$=0):Ct=0);let kt,Yt,Ot,Kt,oe,ae,xe,He,en;const Ie=A.isCompressedTexture?A.mipmaps[Ct]:A.image;if(ft!==null)kt=ft.max.x-ft.min.x,Yt=ft.max.y-ft.min.y,Ot=ft.isBox3?ft.max.z-ft.min.z:1,Kt=ft.min.x,oe=ft.min.y,ae=ft.isBox3?ft.min.z:0;else{const pn=Math.pow(2,-$);kt=Math.floor(Ie.width*pn),Yt=Math.floor(Ie.height*pn),A.isDataArrayTexture?Ot=Ie.depth:A.isData3DTexture?Ot=Math.floor(Ie.depth*pn):Ot=1,Kt=0,oe=0,ae=0}dt!==null?(xe=dt.x,He=dt.y,en=dt.z):(xe=0,He=0,en=0);const De=qt.convert(J.format),re=qt.convert(J.type);let Be;J.isData3DTexture?(le.setTexture3D(J,0),Be=I.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(le.setTexture2DArray(J,0),Be=I.TEXTURE_2D_ARRAY):(le.setTexture2D(J,0),Be=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,J.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,J.unpackAlignment);const ve=I.getParameter(I.UNPACK_ROW_LENGTH),yn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ai=I.getParameter(I.UNPACK_SKIP_PIXELS),Ue=I.getParameter(I.UNPACK_SKIP_ROWS),Oa=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ie.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ie.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Kt),I.pixelStorei(I.UNPACK_SKIP_ROWS,oe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ae);const Qe=A.isDataArrayTexture||A.isData3DTexture,kn=J.isDataArrayTexture||J.isData3DTexture;if(A.isDepthTexture){const pn=Ht.get(A),on=Ht.get(J),Fn=Ht.get(pn.__renderTarget),is=Ht.get(on.__renderTarget);It.bindFramebuffer(I.READ_FRAMEBUFFER,Fn.__webglFramebuffer),It.bindFramebuffer(I.DRAW_FRAMEBUFFER,is.__webglFramebuffer);for(let Xi=0;Xi<Ot;Xi++)Qe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ht.get(A).__webglTexture,$,ae+Xi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ht.get(J).__webglTexture,Ct,en+Xi)),I.blitFramebuffer(Kt,oe,kt,Yt,xe,He,kt,Yt,I.DEPTH_BUFFER_BIT,I.NEAREST);It.bindFramebuffer(I.READ_FRAMEBUFFER,null),It.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||Ht.has(A)){const pn=Ht.get(A),on=Ht.get(J);It.bindFramebuffer(I.READ_FRAMEBUFFER,yr),It.bindFramebuffer(I.DRAW_FRAMEBUFFER,Dc);for(let Fn=0;Fn<Ot;Fn++)Qe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pn.__webglTexture,$,ae+Fn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pn.__webglTexture,$),kn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,on.__webglTexture,Ct,en+Fn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,on.__webglTexture,Ct),$!==0?I.blitFramebuffer(Kt,oe,kt,Yt,xe,He,kt,Yt,I.COLOR_BUFFER_BIT,I.NEAREST):kn?I.copyTexSubImage3D(Be,Ct,xe,He,en+Fn,Kt,oe,kt,Yt):I.copyTexSubImage2D(Be,Ct,xe,He,Kt,oe,kt,Yt);It.bindFramebuffer(I.READ_FRAMEBUFFER,null),It.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else kn?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Be,Ct,xe,He,en,kt,Yt,Ot,De,re,Ie.data):J.isCompressedArrayTexture?I.compressedTexSubImage3D(Be,Ct,xe,He,en,kt,Yt,Ot,De,Ie.data):I.texSubImage3D(Be,Ct,xe,He,en,kt,Yt,Ot,De,re,Ie):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ct,xe,He,kt,Yt,De,re,Ie.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ct,xe,He,Ie.width,Ie.height,De,Ie.data):I.texSubImage2D(I.TEXTURE_2D,Ct,xe,He,kt,Yt,De,re,Ie);I.pixelStorei(I.UNPACK_ROW_LENGTH,ve),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ai),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ue),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Oa),Ct===0&&J.generateMipmaps&&I.generateMipmap(Be),It.unbindTexture()},this.initRenderTarget=function(A){Ht.get(A).__webglFramebuffer===void 0&&le.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?le.setTextureCube(A,0):A.isData3DTexture?le.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?le.setTexture2DArray(A,0):le.setTexture2D(A,0),It.unbindTexture()},this.resetState=function(){L=0,P=0,k=null,It.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(e),i.unpackColorSpace=Le._getUnpackColorSpace()}}const Oe={dinding:"#f7eddc",kayu:"#c08b57",kayuMuda:"#dbaa76",tanah:"#3a2a5c",rumput:"#5aa03a",batang:"#8a5f3a",daun:"#3f8b34",daunMuda:"#63ad4a",kertas:"#fbf6ea",kusen:"#ffffff",trim:"#2b3a5c",aksen:"#f4713a"};function Tl(o,e,i){const s=document.createElement("canvas");s.width=o,s.height=e,i(s.getContext("2d"));const l=new pT(s);return l.wrapS=pl,l.wrapT=pl,l.colorSpace=ni,l.anisotropy=4,l}function lS(o=2,e=4){const i=Tl(256,256,s=>{for(let f=0;f<8;f++){const d=200+Math.random()*55;s.fillStyle=`rgb(${d},${d},${d})`,s.fillRect(0,f*32,256,30);for(let h=0;h<9;h++){s.strokeStyle=`rgba(0,0,0,${.05+Math.random()*.09})`,s.lineWidth=1.2,s.beginPath();const _=f*32+Math.random()*32;s.moveTo(0,_),s.bezierCurveTo(80,_+(Math.random()-.5)*7,170,_+(Math.random()-.5)*7,256,_),s.stroke()}s.fillStyle="rgba(0,0,0,0.30)",s.fillRect(0,f*32+32-2,256,2),s.fillStyle="rgba(0,0,0,0.20)",s.fillRect(f*97%256,f*32,2,30)}});return i.repeat.set(o,e),i}function rR(o=8){const e=Tl(128,128,i=>{i.fillStyle="#ffffff",i.fillRect(0,0,128,128);for(let s=0;s<128;s+=5)i.fillStyle=s%10===0?"rgba(0,0,0,0.26)":"rgba(0,0,0,0.13)",i.fillRect(0,s,128,3),i.fillRect(s,0,3,128);for(let s=0;s<2200;s++){const l=195+Math.random()*60;i.fillStyle=`rgba(${l},${l},${l},0.65)`,i.fillRect(Math.random()*128,Math.random()*128,2,2)}});return e.repeat.set(o,o),e}function sR(o=14){const e=Tl(128,128,i=>{i.fillStyle="#ffffff",i.fillRect(0,0,128,128);for(let s=0;s<1800;s++){const l=200+Math.random()*55;i.fillStyle=`rgba(${l},${l},${l},0.55)`;const f=1+Math.random()*2;i.fillRect(Math.random()*128,Math.random()*128,f,f*2)}});return e.repeat.set(o,o),e}function oR(){return Tl(128,128,o=>{const e=o.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(0,0,0,0.5)"),e.addColorStop(.5,"rgba(0,0,0,0.2)"),e.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=e,o.fillRect(0,0,128,128)})}function Mt(o,e={}){return new Ri({color:new ne(o),roughness:.85,metalness:.03,...e})}function Lt(o,e,i,s,l=0,f=0,d=0){const h=new Ve(new Ai(o,e,i),s);return h.position.set(l,f,d),h.castShadow=!0,h.receiveShadow=!0,h}function tn(o,e,i,s,l=0,f=0,d=0,h=16){const _=new Ve(new Ac(o,e,i,h),s);return _.position.set(l,f,d),_.castShadow=!0,_.receiveShadow=!0,_}function Dn(o,e,i=0,s=0,l=0,f=18){const d=new Ve(new qp(o,f,Math.max(8,f-6)),e);return d.position.set(i,s,l),d.castShadow=!0,d.receiveShadow=!0,d}function jr(o,e,i,s=0,l=0,f=0){const d=new Ve(new Xp(o,e,6,14),i);return d.position.set(s,l,f),d.castShadow=!0,d.receiveShadow=!0,d}function lR(o="#7c8492"){const e=new sn,i=Mt(o,{roughness:.95}),s=Mt("#4e5563",{roughness:.95}),l=Mt("#3d434c",{roughness:.45,metalness:.45});e.add(Lt(.64,.11,.58,i,0,.47,0));const f=Lt(.62,.82,.11,i,0,.94,-.28);f.rotation.x=-.08,e.add(f),e.add(Lt(.56,.16,.06,s,0,.62,-.25)),e.add(Lt(.5,.06,.07,s,0,1.3,-.26));for(const d of[-1,1])e.add(Lt(.07,.05,.42,s,d*.35,.66,-.02)),e.add(Lt(.06,.2,.06,l,d*.35,.56,.17));e.add(tn(.045,.045,.4,l,0,.23,0,10)),e.add(tn(.26,.28,.05,l,0,.03,0,14));for(let d=0;d<5;d++){const h=d/5*Math.PI*2+.4,_=Lt(.3,.04,.07,l,Math.cos(h)*.14,.05,Math.sin(h)*.14);_.rotation.y=-h,e.add(_)}return e}function uR(o,e="riset"){const i=new sn,s=new Ri({color:new ne(Oe.kayu),map:o,roughness:.68,metalness:.02}),l=new Ri({color:new ne(Oe.kayuMuda),map:o,roughness:.7,metalness:.02});i.add(Lt(1.56,.08,.88,l,0,.78,0)),i.add(Lt(1.58,.022,.9,s,0,.822,0)),i.add(Lt(.06,.74,.84,s,-.73,.37,0)),i.add(Lt(.06,.74,.84,s,.73,.37,0)),i.add(Lt(1.4,.44,.05,s,0,.52,-.4));const f=Mt("#333941",{roughness:.48,metalness:.35}),d=new sn;d.position.set(-.18,.83,-.16),d.rotation.y=-.4,d.add(Lt(.7,.46,.038,f,0,.3,0));const h=new Ve(new Na(.64,.4),new Ri({color:new ne("#3f6ea6"),emissive:new ne("#5c9ade"),emissiveIntensity:.85,roughness:.3}));h.position.set(0,.3,.021),d.add(h);const _=new Ve(new Na(.64,.13),new bc({color:new ne("#cfe6ff"),transparent:!0,opacity:.16}));_.position.set(0,.44,.023),d.add(_),d.add(tn(.024,.024,.18,f,0,.1,-.012,8)),d.add(Lt(.26,.022,.15,f,0,.012,-.012)),i.add(d),i.add(Lt(.48,.024,.16,Mt("#eee9dd",{roughness:.9}),-.18,.84,.26)),i.add(tn(.057,.047,.14,Mt("#f4f1e9",{roughness:.55}),.48,.89,.18,12)),i.add(tn(.052,.052,.014,Mt("#8a5a3a"),.48,.958,.18,12));const g=Lt(.28,.014,.2,Mt(Oe.kertas,{roughness:.96}),.38,.836,-.16);g.rotation.y=.16,i.add(g),i.add(tn(.064,.052,.11,Mt("#bf6a4d",{roughness:.9}),-.6,.88,.22,10)),i.add(Dn(.088,Mt("#4f8b46",{roughness:.95}),-.6,.99,.22,12));const S=new sn;S.position.set(.56,.83,-.3),S.add(tn(.07,.08,.02,Mt("#3d434c"),0,.01,0,10)),S.add(tn(.012,.012,.36,Mt("#3d434c"),0,.19,0,8));const p=new Ve(new fo(.11,.13,14,1,!0),Mt("#e8dcc6",{roughness:.8,side:Fi}));if(p.position.set(.03,.38,.03),p.rotation.z=-.5,p.castShadow=!0,S.add(p),i.add(S),e==="riset"){const x=new sn;for(let M=0;M<4;M++){const b=Lt(.36,.008,.26,Mt(M%2?"#f6f0e3":"#ded5c2",{roughness:.96}),.36+M%2*.014,.828+M*.01,.1+M%2*.012);b.rotation.y=.1*(M%3),x.add(b)}i.add(x);for(let M=0;M<3;M++){const b=Lt(.08,.002,.08,Mt(["#f2d15c","#8fd18a","#f0a0a8"][M],{roughness:.98}),.62,.824,.3-M*.05);b.rotation.y=.3*M,i.add(b)}}else if(e==="naskah"){const x=Lt(.42,.014,.3,Mt("#fbf6ea",{roughness:.96}),.34,.832,.14);x.rotation.y=-.18,i.add(x),i.add(Lt(.4,.006,.006,Mt("#c9bda6"),.34,.841,.14));const M=tn(.008,.008,.15,Mt("#2f6fb5"),.46,.845,.05,8);M.rotation.set(Math.PI/2,0,-.4),i.add(M),i.add(tn(.05,.045,.09,Mt("#d9d2c2",{roughness:.8}),-.62,.86,.3,10))}else if(e==="animasi"){const x=new sn;x.position.set(.44,.83,-.18),x.rotation.y=-.55,x.add(Lt(.28,.5,.034,Mt("#333941",{roughness:.5,metalness:.35}),0,.26,0));const M=new Ve(new Na(.25,.46),new Ri({color:new ne("#4a7fbf"),emissive:new ne("#6aa8ea"),emissiveIntensity:.8,roughness:.3}));M.position.set(0,.26,.018),x.add(M),x.add(tn(.02,.02,.14,Mt("#333941"),0,.08,0,8)),x.add(Lt(.2,.018,.12,Mt("#333941"),0,.008,0)),i.add(x);const b=new Ve(new Rc(.09,.022,8,18,Math.PI),Mt("#2b3038",{roughness:.6}));b.position.set(.5,.9,.24),b.rotation.y=.4,i.add(b),i.add(tn(.038,.038,.03,Mt("#2b3038"),.42,.87,.24,10)),i.add(tn(.038,.038,.03,Mt("#2b3038"),.58,.87,.24,10))}else{const x=Lt(.38,.008,.3,Mt("#fdfcf7",{roughness:.96}),.38,.83,.16);x.rotation.y=.12,i.add(x),[.06,.11,.085,.15].forEach((b,C)=>{i.add(Lt(.05,b*1.5,.025,Mt(C===3?"#2f9e86":"#7fb8a8",{roughness:.7}),.26+C*.07,.834+b*.75,.1))}),i.add(Lt(.15,.03,.11,Mt("#4a4f58",{roughness:.7}),-.62,.845,.14)),i.add(Lt(.11,.008,.07,Mt("#9fb4a8",{emissive:new ne("#6f8f80"),emissiveIntensity:.35}),-.62,.862,.14))}return i}function mc(o,e,i=1){const s=new sn;return s.position.set(o,0,e),s.scale.setScalar(i),s.add(tn(.21,.16,.36,Mt("#bf6a4d",{roughness:.9}),0,.18,0,14)),s.add(tn(.036,.048,.58,Mt(Oe.batang),0,.62,0,8)),s.add(Dn(.31,Mt(Oe.daun,{roughness:.95}),0,1.02,0,14)),s.add(Dn(.23,Mt(Oe.daunMuda,{roughness:.95}),.19,1.2,.1,12)),s.add(Dn(.19,Mt(Oe.daun,{roughness:.95}),-.18,1.22,-.09,12)),s.add(Dn(.15,Mt(Oe.daunMuda,{roughness:.95}),.02,1.36,.05,10)),s}function cR(o,e,i,s,l){const f=new sn;if(f.position.set(o,0,e),f.scale.setScalar(i),f.rotation.y=s,f.add(tn(.085,.13,.95,Mt(Oe.batang,{roughness:.96}),0,.47,0,8)),l===0)f.add(Dn(.44,Mt(Oe.daun,{roughness:.96}),0,1.2,0,12)),f.add(Dn(.3,Mt(Oe.daunMuda,{roughness:.96}),.24,1.44,.1,10)),f.add(Dn(.24,Mt(Oe.daun,{roughness:.96}),-.2,1.5,-.12,10));else{const d=new Ve(new fo(.46,1.15,9),Mt(Oe.daun,{roughness:.96}));d.position.y=1.45,d.castShadow=!0,d.receiveShadow=!0,f.add(d);const h=new Ve(new fo(.34,.85,9),Mt(Oe.daunMuda,{roughness:.96}));h.position.y=1.95,h.castShadow=!0,f.add(h)}return f}function fR(o,e,i){const s=new sn;return s.position.set(o,0,e),s.scale.setScalar(i),s.add(Dn(.26,Mt(Oe.daunMuda,{roughness:.96}),0,.2,0,10)),s.add(Dn(.19,Mt(Oe.daun,{roughness:.96}),.22,.16,.08,9)),s.add(Dn(.15,Mt(Oe.daunMuda,{roughness:.96}),-.18,.14,-.06,9)),s}function dR(o,e){const i=new sn;i.position.set(o,0,e);const s=Mt(Oe.kayu,{roughness:.76});i.add(Lt(1.2,.05,.36,s,0,1.62,0)),i.add(Lt(1.2,.05,.36,s,0,1.16,0)),i.add(Lt(1.2,.05,.36,s,0,.7,0)),i.add(Lt(.05,1.7,.36,s,-.58,.85,0)),i.add(Lt(.05,1.7,.36,s,.58,.85,0));const l=["#b8503f","#3f68b8","#4f9464","#c39a3a","#8455ad","#c2703f"];for(let f=0;f<6;f++)i.add(Lt(.085,.28,.24,Mt(l[f%l.length],{roughness:.92}),-.46+f*.11,1.3,0));for(let f=0;f<4;f++)i.add(Lt(.1,.24,.24,Mt(l[(f+2)%l.length],{roughness:.92}),-.3+f*.12,.85,0));return i.add(Dn(.14,Mt("#4f8b46",{roughness:.95}),.36,1.78,0,10)),i}function hR(o,e="#2b3a5c",i="#ffffff"){return Tl(512,128,s=>{s.fillStyle=e,s.fillRect(0,0,512,128),s.fillStyle=i,s.font="bold 52px system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.letterSpacing="6px",s.fillText(o,256,68,470)})}function pR(){const o=new sn;o.position.set(.5,1.82,-3.2),o.add(Lt(2,1.12,.07,Mt("#8a6a48",{roughness:.86}),0,0,0)),o.add(Lt(1.84,.96,.025,Mt("#cbaa7c",{roughness:.96}),0,0,.045));const e=["#f2d15c","#8fd18a","#f0a0a8","#9fc4f0","#f2d15c","#8fd18a","#f0c88a"];[[-.66,.28],[-.2,.3],[.28,.26],[.66,.3],[-.48,-.1],[.04,-.13],[.5,-.08]].forEach(([l,f],d)=>{const h=Lt(.3,.3,.014,Mt(e[d%e.length],{roughness:.96}),l,f,.07);h.rotation.z=(d%3-1)*.07,o.add(h),o.add(tn(.014,.014,.02,Mt("#c0453c"),l,f+.13,.085,8))});const s=new Ve(new Na(1.7,.42),new Ri({map:hR("PAPAN TUGAS"),roughness:.6}));return s.position.set(0,.76,.07),o.add(s),o}function mR(){const o=new sn;o.position.set(-4.4,2.35,-3.2),o.add(tn(.28,.28,.06,Mt("#fdfaf3",{roughness:.6}),0,0,0,22));const e=new Ve(new Rc(.28,.025,8,26),Mt("#3d434c",{metalness:.5,roughness:.4}));o.add(e);const i=Lt(.02,.17,.01,Mt("#3d434c"),0,.07,.04),s=Lt(.02,.12,.01,Mt("#3d434c"),.05,0,.04);s.rotation.z=-1.1,o.add(i),o.add(s),o.rotation.x=Math.PI/2;const l=new sn;return l.add(o),l}function gR(o){const e=new sn,i=Mt(o.warna,{roughness:.88}),s=Mt(o.kulit,{roughness:.72}),l=Mt(o.rambut,{roughness:.86}),f=Mt("#3b4250",{roughness:.92});e.add(jr(.175,.28,i,0,.9,0)),e.add(tn(.098,.112,.07,i,0,1.16,0,12));const d=Dn(.152,s,0,1.335,.006,20);e.add(d);const h=Dn(.163,l,0,1.372,-.02,18);h.scale.set(1.02,.9,1.06),e.add(h);const _=Lt(.27,.1,.17,l,0,1.44,.085);_.rotation.x=.2,e.add(_),e.add(jr(.075,.26,f,-.1,.5,.16)),e.add(jr(.075,.26,f,.1,.5,.16)),e.children[e.children.length-2].rotation.x=Math.PI/2,e.children[e.children.length-1].rotation.x=Math.PI/2,e.add(jr(.062,.3,f,-.1,.24,.32)),e.add(jr(.062,.3,f,.1,.24,.32)),e.add(Lt(.14,.07,.2,Mt("#2b3038",{roughness:.8}),-.1,.04,.38)),e.add(Lt(.14,.07,.2,Mt("#2b3038",{roughness:.8}),.1,.04,.38));const g=jr(.05,.22,i,-.185,.9,.1);g.rotation.set(-.9,0,.2),e.add(g);const S=jr(.05,.22,i,.185,.9,.1);return S.rotation.set(-.9,0,-.2),e.add(S),e.add(Dn(.052,s,-.2,.83,.26,10)),e.add(Dn(.052,s,.2,.83,.26,10)),{grup:e,lenganKiri:g,lenganKanan:S,kepala:d}}const _R={arka:"riset",nadya:"naskah",bima:"animasi",sekar:"analitik"};function vR(o,e){const i=new sn;i.position.set(o,0,e);const s=Mt(Oe.kayu,{roughness:.78}),l=Mt(Oe.kayuMuda,{roughness:.78});i.add(Lt(1.8,.06,.44,l,0,.82,0)),i.add(Lt(1.72,.72,.4,s,0,.44,0));for(const d of[-.44,.44])i.add(Lt(.78,.3,.02,l,d,.6,.21)),i.add(tn(.016,.016,.1,Mt("#c9a13c",{metalness:.6,roughness:.35}),d,.6,.23,8));i.add(tn(.075,.062,.13,Mt("#bf6a4d",{roughness:.9}),-.62,.91,.02,10)),i.add(Dn(.11,Mt("#4f8b46",{roughness:.95}),-.62,1.03,.02,12));const f=["#c0503f","#3f6fc0","#4f9e6a","#c9a13c"];for(let d=0;d<4;d++){const h=Lt(.06,.28,.3,Mt(f[d],{roughness:.92}),.16+d*.075,.99,.02);h.rotation.z=.02*d,i.add(h)}return i}function SR(o,e){const i=new sn;i.position.set(o,0,e),i.rotation.y=Math.PI/2,i.add(Lt(2.2,1.35,.07,Mt("#e9e4d8",{roughness:.8}),0,1.75,0)),i.add(Lt(2.06,1.22,.03,Mt("#fbfcfd",{roughness:.5}),0,1.75,.045));const s=Mt("#3a72d4",{roughness:.7});return[.18,.34,.26,.46,.38].forEach((f,d)=>{i.add(Lt(.12,f,.012,s,-.78+d*.19,1.28+f/2,.06))}),i.add(Lt(.9,.03,.014,Mt("#d4573a",{roughness:.7}),.42,1.72,.062)),i.add(Lt(2.2,.05,.12,Mt("#cbc2b0",{roughness:.85}),0,1.06,.03)),i}function xR(o,e){const i=new sn;i.position.set(o,0,e);const s=Mt("#7d8fa0",{roughness:.96}),l=Mt("#c58a6a",{roughness:.96}),f=Mt(Oe.kayu,{roughness:.75});i.add(Lt(.86,.06,.56,f,0,.36,0));for(const d of[-.36,.36])for(const h of[-.2,.2])i.add(Lt(.05,.34,.05,f,d,.17,h));i.add(tn(.05,.045,.08,Mt("#f2f0e8"),.22,.43,.08,10)),i.add(Lt(.24,.03,.18,Mt("#e8dcc4",{roughness:.95}),-.2,.405,-.06));for(const[d,h,_,g]of[[-.95,.12,.5,s],[.95,.12,-.5,l]]){const S=new sn;S.position.set(d,0,h),S.rotation.y=_,S.add(Lt(.62,.16,.58,g,0,.4,0));const p=Lt(.62,.5,.14,g,0,.66,-.24);p.rotation.x=-.16,S.add(p);for(const x of[-.24,.24])for(const M of[-.2,.2])S.add(tn(.03,.03,.32,Mt(Oe.kayu),x,.16,M,8));i.add(S)}return i}function yR(o,e){const i=new sn;i.position.set(o,0,e),i.add(tn(.19,.21,.04,Mt("#3d434c",{metalness:.4,roughness:.5}),0,.02,0,14)),i.add(tn(.022,.022,1.5,Mt("#3d434c",{metalness:.4,roughness:.5}),0,.77,0,8));const s=new Ve(new fo(.2,.24,16,1,!0),Mt("#e8dcc6",{roughness:.85,side:Fi}));return s.position.set(0,1.56,0),s.rotation.x=Math.PI,s.castShadow=!0,i.add(s),i.add(Dn(.075,new Ri({color:new ne("#fff3c9"),emissive:new ne("#ffd98a"),emissiveIntensity:1.2}),0,1.48,0,10)),i}function MR(o,e={}){const i=!!e.manual,s=new aR({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});s.setPixelRatio(Math.min(window.devicePixelRatio||1,i?1.5:2)),s.shadowMap.enabled=!0,s.shadowMap.type=hS,s.toneMapping=mS,s.toneMappingExposure=1.05,s.outputColorSpace=ni,s.domElement.setAttribute("aria-hidden","true"),o.appendChild(s.domElement);const l=new cT;l.background=null;const f=new Wp(-10,10,10,-10,.1,140);f.position.set(12.2,13.2,12.2),f.lookAt(0,.95,0),l.add(new _T(new ne("#eef6ff"),new ne("#a8875f"),.82)),l.add(new xT(new ne("#ffffff"),.2));const d=new Ph(new ne("#fff4e2"),2.7);d.position.set(9,15,11),d.castShadow=!0,d.shadow.mapSize.set(2048,2048),d.shadow.camera.left=-13,d.shadow.camera.right=13,d.shadow.camera.top=13,d.shadow.camera.bottom=-13,d.shadow.camera.near=1,d.shadow.camera.far=48,d.shadow.bias=-9e-4,d.shadow.normalBias=.02,l.add(d);const h=new Ph(new ne("#cfe0ff"),.42);h.position.set(-9,7,-7),l.add(h);const _=new Ph(new ne("#ffd9a8"),.6);_.position.set(-6,4.5,9),l.add(_);const g=lS(2,4),S=lS(1,1),p=rR(3),x=sR(16),M=oR(),b=new Ve(new Ai(18.6,1.15,11.4),Mt(Oe.tanah,{roughness:.98}));b.position.set(0,-.6,0),b.receiveShadow=!0,b.castShadow=!0,l.add(b),l.add(Lt(18.7,.05,11.5,Mt("#4b3a72",{roughness:.95}),0,-.06,0));const C=new Ri({color:new ne(Oe.rumput),map:x,roughness:.97}),y=new Ve(new Ai(18.4,.07,11.2),C);y.position.set(0,-.015,0),y.receiveShadow=!0,l.add(y);const v=.26;for(const B of zM){const ut=B.x1-B.x0,tt=new Ri({color:new ne(B.lantai),map:g,roughness:.82,metalness:.02}),Rt=new Ve(new Ai(ut,v,6.8),tt);Rt.position.set((B.x0+B.x1)/2,v/2,0),Rt.receiveShadow=!0,Rt.castShadow=!0,l.add(Rt),B.x1<7&&l.add(Lt(.05,.02,6.8,Mt("#b09b7e",{roughness:.9}),B.x1,v+.012,0))}const N=.2,z=3.05,D=Mt(Oe.dinding,{roughness:.94});l.add(Lt(14.5,z,N,D,0,v+z/2,-3.4)),l.add(Lt(N,z,7,D,-7.15,v+z/2,0));const F=Mt("#dcc9ac",{roughness:.9});l.add(Lt(14.5,.14,.05,F,0,v+.07,-3.29)),l.add(Lt(.05,.14,7,F,-7.04,v+.07,0)),l.add(Lt(14.5,.05,.045,Mt("#e6d7bd",{roughness:.9}),0,v+1.05,-3.29)),l.add(Lt(.045,.05,7,Mt("#e6d7bd",{roughness:.9}),-7.04,v+1.05,0));const L=v+z-.12;l.add(Lt(14.72,.22,N+.08,Mt(Oe.trim,{roughness:.72}),0,L,-3.4)),l.add(Lt(N+.08,.22,7.22,Mt(Oe.trim,{roughness:.72}),-7.15,L,0)),l.add(Lt(14.74,.07,N+.1,Mt(Oe.aksen,{roughness:.6}),0,L+.14,-3.4)),l.add(Lt(N+.1,.07,7.24,Mt(Oe.aksen,{roughness:.6}),-7.15,L+.14,0));const P=new Ri({color:new ne("#d3ecf8"),emissive:new ne("#d8f0fb"),emissiveIntensity:.62,roughness:.1,metalness:.05,transparent:!0,opacity:.88}),k=Mt(Oe.kusen,{roughness:.62}),w=[-5.3,-2.5,3.3,5.7];for(const B of w)l.add(Lt(1.62,1.38,.09,k,B,2.1,-3.3)),l.add(Lt(1.46,1.22,.07,P,B,2.1,-3.26)),l.add(Lt(.05,1.22,.1,k,B,2.1,-3.25)),l.add(Lt(1.46,.05,.1,k,B,2.1,-3.25)),l.add(Lt(1.72,.07,.2,k,B,1.4,-3.24));for(const B of[-1.95,1.45])l.add(Lt(.09,1.38,1.62,k,-7.06,2.1,B)),l.add(Lt(.07,1.22,1.46,P,-7.02,2.1,B)),l.add(Lt(.1,1.22,.05,k,-7.01,2.1,B)),l.add(Lt(.1,.05,1.46,k,-7.01,2.1,B)),l.add(Lt(.2,.07,1.72,k,-7,1.4,B));const R=Mt("#efe3cf",{roughness:.92}),V=Mt(Oe.trim,{roughness:.7});for(const B of[-2.2,2.4])l.add(Lt(.12,1.35,1.5,R,B,v+.675,-1.15)),l.add(Lt(.16,.09,1.56,V,B,v+1.37,-1.15)),l.add(Lt(.12,1.35,1.7,R,B,v+.675,2.3)),l.add(Lt(.16,.09,1.76,V,B,v+1.37,2.3));{const B=Mt(Oe.kayu,{roughness:.8});l.add(Lt(1.5,.08,.62,B,-3.55,v+.86,-3));for(const ut of[-.6,.6])l.add(Lt(.07,.86,.5,B,-3.55+ut,v+.43,-3));l.add(Lt(.42,.5,.34,Mt("#3a3f4a",{roughness:.6,metalness:.3}),-3.85,v+1.15,-3)),l.add(Lt(.3,.06,.24,Mt("#8c939f",{roughness:.5,metalness:.4}),-3.85,v+.93,-2.92));for(let ut=0;ut<3;ut++)l.add(tn(.05,.045,.1,Mt(["#f4f1e8","#e9dcc4","#dfd3bb"][ut],{roughness:.9}),-3.2+ut*.16,v+.95,-3,10))}l.add(pR()),l.add(mR()),l.add(dR(6.3,-3));const Q=new Map,lt=new Map,pt=.8;for(const B of Ci){const ut=new ne(B.warna).lerp(new ne("#ffffff"),.22),tt=new Ri({color:ut,map:p,roughness:.99}),Rt=new Ve(new Ai(3.02,.03,2.55),Mt("#000000",{roughness:1,transparent:!0,opacity:.12}));Rt.position.set(B.x,v+.016,B.z-.34),l.add(Rt);const yt=new Ve(new Ai(2.9,.035,2.42),tt);yt.position.set(B.x,v+.034,B.z-.34),yt.receiveShadow=!0,l.add(yt);const Ft=uR(S,_R[B.key]??"riset");Ft.position.set(B.x,v,B.z),l.add(Ft);const Gt=lR(B.warna);Gt.position.set(B.x,v,B.z-pt),Gt.rotation.y=Math.PI,l.add(Gt);const St=gR(B);St.grup.position.set(B.x,v,B.z-pt),St.grup.rotation.y=Math.PI+B.hadap,l.add(St.grup),Q.set(B.key,St);const Ut=new Ve(new Na(2.5,2),new bc({map:M,transparent:!0,opacity:.55,depthWrite:!1}));Ut.rotation.x=-Math.PI/2,Ut.position.set(B.x,v+.062,B.z-.3),l.add(Ut),lt.set(B.key,new rt(B.x,v+1.9,B.z-pt))}l.add(vR(-1,-3.02)),l.add(SR(-7.03,2.3));const ct=new Ri({color:new ne("#b3855f").lerp(new ne("#f3ecdd"),.12),map:p,roughness:.99}),Y=new Ve(new Ai(3,.035,2.1),ct);Y.position.set(.55,v+.034,2.5),Y.receiveShadow=!0,l.add(Y),l.add(xR(.55,2.5)),l.add(yR(-1.75,2.85)),l.add(mc(-6.5,2.6,1.15)),l.add(mc(6.6,2.7,1.1)),l.add(mc(-2.55,-2.85,.9)),l.add(mc(2.1,-2.9,.85));const G=[[-8.3,-4.6,1.35,.4,0],[-8.6,4.3,1.15,1.2,1],[-5.6,-4.9,.95,2.1,1],[8.5,-4.5,1.3,.9,0],[8.6,4.4,1.1,2.6,1],[5.6,4.8,.92,.2,0],[-2.2,-5,.86,1.7,1],[2.6,-4.95,.94,3,0]];for(const[B,ut,tt,Rt,yt]of G)l.add(cR(B,ut,tt,Rt,yt));const W=[[-7.9,2.2,1],[-8.1,-1.6,.82],[8,2.3,.95],[8.1,-1.5,.85],[-4.2,-4.35,.72],[4.2,-4.4,.78],[.2,4.5,.7]];for(const[B,ut,tt]of W)l.add(fR(B,ut,tt));const mt=new po(new rt(-8.2,-1.1,-4.8),new rt(8.2,3.8,4.8)),xt=[];for(const B of[mt.min.x,mt.max.x])for(const ut of[mt.min.y,mt.max.y])for(const tt of[mt.min.z,mt.max.z])xt.push(new rt(B,ut,tt));const Vt=new rt(-.2,1.1,0),ce=12.2,Ee=13.2,H=3.2;function ht(B,ut,tt){const Rt=Math.PI/4+.05*Math.sin(tt*.21);f.position.set(B.x+ce*Math.sin(Rt),B.y+Ee,B.z+ce*Math.cos(Rt)),f.lookAt(B),Math.abs(f.zoom-ut)>.001&&(f.zoom=ut,f.updateProjectionMatrix())}const et=new rt,st=new rt,Et=new rt,Pt=()=>[...Q.values()];function wt(B,ut){const tt=Pt();if(B<0||B%3===0||tt.length===0)return ut.copy(Vt),1;const Rt=tt[(B*2+Math.floor(B/3))%tt.length];return ut.set(Rt.grup.position.x,1.15,Rt.grup.position.z),1.5}function Tt(B){const ut=Math.floor(B/H),tt=wt(ut-1,et),Rt=wt(ut,st),yt=Math.min(1,(B-ut*H)/1.1),Ft=yt*yt*(3-2*yt);Et.copy(et).lerp(st,Ft),ht(Et,tt+(Rt-tt)*Ft,B)}function jt(){const B=o.clientWidth||1,ut=o.clientHeight||1;s.setSize(B,ut,!1),f.zoom=1,f.updateProjectionMatrix(),ht(Vt,1,0),f.updateMatrixWorld();const tt=new dn().copy(f.matrixWorld).invert();let Rt=1/0,yt=-1/0,Ft=1/0,Gt=-1/0;const St=new rt;for(const X of xt)St.copy(X).applyMatrix4(tt),Rt=Math.min(Rt,St.x),yt=Math.max(yt,St.x),Ft=Math.min(Ft,St.y),Gt=Math.max(Gt,St.y);const Ut=(Rt+yt)/2;let te=(Ft+Gt)/2,qt=(yt-Rt)/2*1,Dt=(Gt-Ft)/2*1;Dt*=.9,qt*=.88;const ie=B/ut;qt/Dt<ie?qt=Dt*ie:Dt=qt/ie,te-=Dt*.035,f.left=Ut-qt,f.right=Ut+qt,f.top=te+Dt,f.bottom=te-Dt,f.updateProjectionMatrix()}jt();let I=new Map;const we=new rt;function ue(){const B=[];for(const ut of[".kk-hud",".kk-mini",".kk-dock"]){const tt=document.querySelector(ut);tt&&B.push(tt.getBoundingClientRect())}return B}function $t(){const B=o.clientWidth||1,ut=o.clientHeight||1,tt=ue();for(const[Rt,yt]of I){const Ft=lt.get(Rt);if(!Ft)continue;we.copy(Ft).project(f);const Gt=(we.x*.5+.5)*B,St=(-we.y*.5+.5)*ut,Ut=yt.offsetWidth||110,te=yt.offsetHeight||30,qt=Gt-Ut/2,Dt=Gt+Ut/2,ie=St-te,X=St;let At=we.z>1||qt<6||Dt>B-6||ie<6||X>ut-6;if(!At){for(const Nt of tt)if(Dt>Nt.left&&qt<Nt.right&&X>Nt.top&&ie<Nt.bottom){At=!0;break}}yt.style.visibility=At?"hidden":"",!At&&(yt.style.transform=`translate3d(${Gt.toFixed(1)}px, ${St.toFixed(1)}px, 0)`)}}let It=[],se=0,Ht=0,le=!1,Pe=0;function Ye(B){for(const[ut,tt]of Q){const Ft=It.find(ie=>ie.agen.key===ut)?.doing.activity==="kerja",Gt=Ci.find(ie=>ie.key===ut),St=Gt?.x??tt.grup.position.x,Ut=(Gt?.z??0)-pt,te=Math.PI+(Gt?.hadap??0);tt.grup.position.x=St,tt.grup.position.z=Ut,tt.grup.rotation.y=te;const qt=Math.max(0,Ci.findIndex(ie=>ie.key===ut));tt.grup.rotation.z=Ft?0:Math.sin(B*1.4+qt*1.7)*.012;const Dt=lt.get(ut);Dt&&(Dt.x=tt.grup.position.x,Dt.z=tt.grup.position.z),tt.grup.position.y=.26+Math.sin(B*1.5+ut.length)*.007,Ft?(tt.lenganKiri.rotation.x=-.9+Math.sin(B*7.4+1)*.12,tt.lenganKanan.rotation.x=-.9+Math.sin(B*7.4)*.12,tt.kepala.rotation.x=.08,tt.kepala.rotation.y=0):(tt.lenganKiri.rotation.x=-.55+Math.sin(B*.9)*.05,tt.lenganKanan.rotation.x=-.55+Math.sin(B*.9+2)*.05,tt.kepala.rotation.y=Math.sin(B*.5+ut.length)*.3)}}function U(B){Ht=B,Ye(B),Tt(B),$t(),s.render(l,f)}function T(B){if(!le)return;const ut=Math.min(.06,(B-Pe)/1e3||.016);Pe=B,Ht+=ut,U(Ht),se=requestAnimationFrame(T)}U(0);const it=()=>{jt(),U(Ht)};return window.addEventListener("resize",it),{setStates(B){It=B,le||U(Ht)},attachLabels(B){I=B,U(Ht)},renderAt(B){U(B)},start(){le||(le=!0,Pe=performance.now(),se=requestAnimationFrame(T))},stop(){le=!1,cancelAnimationFrame(se)},resize:it,dispose(){this.stop(),window.removeEventListener("resize",it),l.traverse(B=>{const ut=B;ut.geometry&&ut.geometry.dispose();const tt=ut.material;Array.isArray(tt)?tt.forEach(Rt=>Rt.dispose()):tt?.dispose()}),g.dispose(),S.dispose(),p.dispose(),x.dispose(),M.dispose(),s.dispose(),s.domElement.remove()}}}const ER=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],TR=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],bR=o=>`${String(o.getHours()).padStart(2,"0")}.${String(o.getMinutes()).padStart(2,"0")}`;function AR(){const o=cn.useMemo(()=>KM(new URLSearchParams(location.search)),[]),e=o.cepat?4e3:cS,[i,s]=cn.useState(()=>new Date),l=cn.useMemo(()=>o.rec?[]:lh(),[o.rec]),[f,d]=cn.useState(l),[h,_]=cn.useState(""),[g,S]=cn.useState("auto"),[p,x]=cn.useState(null),[M,b]=cn.useState(()=>typeof window>"u"||window.innerWidth>=1024||l.length===0),C=cn.useRef(null),y=cn.useRef(null),v=cn.useRef(null),N=cn.useRef(null);cn.useEffect(()=>{if(o.rec)return;const G=window.setInterval(()=>{const W=new Date;s(W),d(mt=>kM(mt,W.getTime()))},500);return()=>window.clearInterval(G)},[o.rec]),cn.useEffect(()=>{o.rec||qM(f)},[f,o.rec]);const z=i.getTime(),D=cn.useMemo(()=>WM(f,z),[f,z]),F=jM(f),L=XM(f),P=ZM(i),k=D.filter(G=>G.bubble),w=Math.floor(z/3e3),R=k.length?k[w%k.length].agen.key:null;cn.useEffect(()=>{if(!C.current||!y.current)return;const G=MR(C.current,{manual:o.rec});v.current=G;const W=new Map;if(y.current.querySelectorAll("[data-key]").forEach(mt=>{const xt=mt.dataset.key;xt&&W.set(xt,mt)}),G.attachLabels(W),o.rec){const mt=window;mt.__kf=xt=>{LM.flushSync(()=>s(new Date)),G.renderAt(xt)}}else G.start();return()=>{G.dispose(),v.current=null,delete window.__kf}},[o.rec]),cn.useEffect(()=>{v.current?.setStates(D)},[D]);function V(G){G.preventDefault();const W=h.trim();if(!W)return;const mt={};for(const Vt of f)Vt.status!=="selesai"&&(mt[Vt.agen]=(mt[Vt.agen]??0)+1);const xt=g==="auto"?null:g;d(Vt=>uh(uh(Vt,lh()),[HM(W,xt,Date.now(),e,mt)])),_(""),window.innerWidth<1024&&b(!1),N.current?.focus()}cn.useEffect(()=>{const G=W=>{W.key===Lp&&d(mt=>uh(mt,lh()))};return window.addEventListener("storage",G),()=>window.removeEventListener("storage",G)},[]),cn.useEffect(()=>{L.review>0&&window.innerWidth<1024&&b(!0)},[L.review]);const Q=G=>d(W=>W.map(mt=>mt.id===G?VM(mt,Date.now()):mt)),lt=G=>d(W=>W.filter(mt=>mt.id!==G)),pt=cn.useRef(null);cn.useEffect(()=>{if(!p)return;const G=document.activeElement;pt.current?.querySelector(".kk-tutup")?.focus();const W=mt=>{mt.key==="Escape"&&x(null)};return window.addEventListener("keydown",W),()=>{window.removeEventListener("keydown",W),G?.focus?.()}},[p]);const ct=p?D.find(G=>G.agen.key===p)??null:null,Y=p?fS(f,p):[];return zt.jsxs("div",{className:"kk","data-night":P||void 0,children:[zt.jsx("div",{className:"kk-stage",ref:C}),zt.jsx("p",{className:"sr-only","aria-live":"polite",children:L.review>0?`${L.review} tugas nunggu kamu cek.`:L.kerja>0?`${L.kerja} tugas lagi jalan.`:"Belum ada yang jalan."}),zt.jsxs("form",{className:"kk-dock",onSubmit:V,children:[zt.jsxs("div",{className:"kk-dock-agen",children:[zt.jsx("label",{className:"sr-only",htmlFor:"kk-agen",children:"Agen yang mengerjakan"}),zt.jsxs("select",{id:"kk-agen",value:g,onChange:G=>S(G.target.value),children:[zt.jsx("option",{value:"auto",children:"Otomatis"}),Ci.map(G=>zt.jsxs("option",{value:G.key,children:[G.nama," · ",G.tugas]},G.key))]})]}),zt.jsx("input",{ref:N,value:h,onChange:G=>_(G.target.value),placeholder:"Tulis perintah…","aria-label":"Perintah untuk agen",maxLength:240}),zt.jsx("button",{type:"submit",disabled:!h.trim(),"aria-label":"Kirim perintah",children:"Kirim"})]}),zt.jsx("div",{className:"kk-layer",ref:y,children:D.map(G=>zt.jsx(RR,{d:G,spot:R===G.agen.key,onOpen:()=>x(G.agen.key)},G.agen.key))}),zt.jsxs("header",{className:"kk-hud",children:[zt.jsxs("div",{className:"kk-brand",children:[zt.jsx("span",{className:"kk-live","aria-hidden":"true"}),zt.jsxs("div",{children:[zt.jsx("b",{children:OM.nama}),zt.jsx("small",{children:L.kerja+L.review===0?L.selesai?`belum ada yang jalan · ${L.selesai} beres`:"belum ada yang jalan":`${L.kerja} lagi jalan${L.review?` · ${L.review} nunggu kamu`:""}`})]})]}),zt.jsxs("div",{className:"kk-clock",children:[zt.jsx("b",{children:bR(i)}),zt.jsxs("small",{children:[ER[i.getDay()],", ",i.getDate()," ",TR[i.getMonth()]," ",i.getFullYear()]})]})]}),zt.jsxs("aside",{className:"kk-mini","data-buka":M||void 0,children:[zt.jsxs("button",{type:"button",className:"kk-mini-head",onClick:()=>b(G=>!G),"aria-expanded":M,children:[zt.jsx("span",{children:"Papan tugas"}),zt.jsx("b",{children:F.total===0?L.selesai?`${L.selesai} beres`:"kosong":`${F.total} aktif`}),zt.jsx("i",{"aria-hidden":"true",children:"▾"})]}),zt.jsxs("div",{className:"kk-mini-body",children:[F.total===0?zt.jsxs("div",{className:"kk-kosong",children:[zt.jsx("p",{children:zt.jsx("b",{children:L.selesai>0?"Tidak ada yang jalan sekarang.":"Belum ada yang jalan."})}),zt.jsx("p",{className:"kk-kosong-hint",children:"Tulis perintah di kolom bawah, lalu tekan Kirim. Perintah masuk papan sebagai tugas."}),zt.jsx("div",{className:"kk-saran",children:Ci.map(G=>zt.jsxs("button",{type:"button",onClick:()=>{_(G.contoh),S(G.key),N.current?.focus()},children:[zt.jsx("span",{style:{color:G.warna},"aria-hidden":"true",children:"●"})," ",G.contoh]},G.key))})]}):zt.jsxs("ul",{className:"kk-daftar",children:[F.review.map(G=>zt.jsxs("li",{"data-status":"review",children:[zt.jsx("b",{style:{"--agen":G.warna},children:G.nama}),zt.jsx("span",{className:"kk-daftar-teks",children:G.teks}),zt.jsx("button",{type:"button",className:"kk-cek",onClick:()=>Q(G.id),"aria-label":`Tandai beres: ${G.teks}`,children:"Beres"})]},G.id)),F.kerja.map(G=>zt.jsxs("li",{"data-status":"kerja",children:[zt.jsx("b",{style:{"--agen":G.warna},children:G.nama}),zt.jsx("span",{className:"kk-daftar-teks",children:G.teks}),zt.jsx("span",{className:"kk-daftar-bar",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(kh(G,z)*100),"aria-label":`Kemajuan ${G.teks}`,children:zt.jsx("span",{style:{width:`${Math.max(8,Math.round(kh(G,z)*100))}%`}})})]},G.id))]}),L.kerja+L.review+L.selesai>0&&zt.jsxs("dl",{className:"kk-angka",children:[zt.jsxs("div",{children:[zt.jsx("dd",{children:L.kerja}),zt.jsx("dt",{children:"lagi jalan"})]}),zt.jsxs("div",{children:[zt.jsx("dd",{children:L.review}),zt.jsx("dt",{children:"nunggu kamu"})]}),zt.jsxs("div",{children:[zt.jsx("dd",{children:L.selesai}),zt.jsx("dt",{children:"beres"})]})]})]})]}),ct&&zt.jsx("div",{className:"kk-sheet",role:"dialog","aria-modal":"true","aria-labelledby":"kk-sheet-judul",onClick:()=>x(null),children:zt.jsxs("div",{className:"kk-sheet-in",ref:pt,onClick:G=>G.stopPropagation(),children:[zt.jsxs("h3",{id:"kk-sheet-judul",style:{"--agen":ct.agen.warna},children:[ct.agen.nama," ",zt.jsx("small",{children:ct.agen.tugas})]}),zt.jsxs("p",{className:"kk-sheet-now",children:["Sekarang: ",zt.jsx("b",{children:ct.doing.label})]}),Y.length===0?zt.jsxs("p",{className:"kk-sheet-sum",children:["Belum ada tugas untuk ",ct.agen.nama,". Tulis perintah di kolom bawah — contoh: “",ct.agen.contoh,"”."]}):zt.jsx("ul",{className:"kk-sheet-list",children:Y.map(G=>zt.jsxs("li",{children:[zt.jsx("span",{className:"kk-sheet-teks",children:G.teks}),G.status==="review"?zt.jsx("button",{type:"button",className:"kk-cek",onClick:()=>Q(G.id),"aria-label":`Tandai beres: ${G.teks}`,children:"Beres"}):zt.jsx("button",{type:"button",className:"kk-batal",onClick:()=>lt(G.id),"aria-label":`Hapus tugas: ${G.teks}`,children:"Hapus"})]},G.id))}),zt.jsxs("button",{type:"button",className:"kk-ke",onClick:()=>{S(ct.agen.key),x(null),N.current?.focus()},children:["Beri perintah ke ",ct.agen.nama]}),zt.jsx("button",{type:"button",className:"kk-tutup",onClick:()=>x(null),children:"Tutup"})]})})]})}function RR({d:o,spot:e,onOpen:i}){const s=o.doing.activity;return zt.jsx("div",{className:"kk-tag","data-key":o.agen.key,"data-act":s,style:{"--agen":o.agen.warna},children:zt.jsxs("div",{className:"kk-tag-in",children:[o.bubble&&e&&zt.jsx("p",{className:"kk-bubble",children:o.bubble}),zt.jsxs("div",{className:"kk-tag-row",children:[zt.jsxs("button",{type:"button",className:"kk-name",onClick:i,children:[zt.jsx("span",{className:"kk-dot"}),o.agen.nama,zt.jsx("span",{className:"kk-name-act",children:o.doing.label})]}),o.review>0?zt.jsx("button",{type:"button",className:"kk-bang","data-urgent":!0,onClick:i,"aria-label":`${o.review} tugas perlu dicek`,children:"!"}):o.aktif>0&&zt.jsx("button",{type:"button",className:"kk-bang",onClick:i,"aria-label":`${o.aktif} tugas berjalan`,children:o.aktif})]}),s==="kerja"&&zt.jsx("span",{className:"kk-bar","aria-hidden":"true",children:zt.jsx("span",{style:{width:`${Math.max(8,Math.round(o.progres*100))}%`}})})]})})}NM.createRoot(document.getElementById("root")).render(zt.jsx(cn.StrictMode,{children:zt.jsx(AR,{})}));
