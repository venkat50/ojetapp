/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","knockout","signals","promise"],function(a,g,c){(function(){function b(b){var a={};if(b=b.split("?")[1])b=b.split("\x26"),b.forEach(function(b){var c=b.split(/\=(.+)?/);b=c[0];b.length&&(c=c[1]&&decodeURIComponent(c[1]),a[b]=c)});return a}function d(b){return b?b.split("/"):[]}function e(b){return d(b)[0]}function f(b,c){var d=document.createElement("a");d.href=Q.href;void 0!==b.search&&(d.search=b.search);void 0!==b.pathname&&(d.pathname=b.pathname);var e=d.search,f="",g;g=e.indexOf("oj_Router");
if(-1!==g){var h=e.indexOf("\x26",g);-1===h&&(h=e.length);g=e.substring(0,g);e=e.substr(h)}else g=e+(-1===e.indexOf("?")?"?":"\x26"),e="";if(c&&0<Object.getOwnPropertyNames(c).length){var h=JSON.stringify(c),f=encodeURIComponent(h),h=a.jda.i1a(h),k=!1,r="oj_Router\x3d";h.length<=f.length&&(k=!0);r=k?r+("1"+h):r+("0"+f);if(1024<r.length)throw Error("Size of bookmarkable data is too big.");f=r}else g=g.substring(0,g.length-1);d.search=g+f+e;return d.href.replace(/\?$/,"")}function h(b,c){var d;c&&b.Bx&&
(a.C.Vu(c),b.Bx.every(function(b){return b.wn===c?(d=b,!1):!0}));return d}function k(b){return b.Du?k(b.Du)+"."+b.Qg:b.Qg}function l(b){var a;if(b){if(a=l(b.Du))a=(b=b.nj())?a+(b+"/"):void 0}else a="/";return a}function m(b,a){var c;b.Rj.every(function(b){if(!b.Eu)c=b;else if(b.Eu===a)return c=b,!1;return!0});return c}function n(b){b=b.filter(function(b){return b.value!==b.te.nj()});a.D.option("level")===a.D.QC&&(a.D.info("Potential changes are: "),b.forEach(function(b){a.D.info("   { router: %s, value: %s }",
b.te&&k(b.te),b.value)}));return b}function t(b){var a=this[b.te.Qg];void 0!==a&&(b.te.so=a)}function s(){return ea[0]&&ea[0].cancel}function p(b){var c=b.charAt(0);b=b.slice(1);if("0"===c)b=decodeURIComponent(b);else if("1"===c)b=a.jda.P1a(b);else throw Error("Error retrieving bookmarkable data. Format is invalid");b=JSON.parse(b);if(a.D.option("level")===a.D.QC){var d;a.D.info("Bookmarkable data: ");for(d in b)a.D.info("   { router: %s, value: %s }",d,b[d])}return b}function q(b,a,c){var d;b.Rj.every(function(b){return b.Eu&&
b.Eu!==c||!b.Iv(a)?!0:(d=b,!1)});return d}function r(b){var a=[];b.uJ()&&(a.push(new w(b)),b.Rj.forEach(function(b){a=a.concat(r(b))}));return a}function u(b){if(!b)return{title:"",cH:""};var a=u(m(b,b.nj()));if(""===a.title&&(b=b.uJ())){var c=b.qB;void 0!==c?("function"===typeof c&&(c=c()),a.title=String(c)):(c=b.Z5,void 0!==c&&(c=String(c),""!==a.cH&&(c+=" | "+a.cH),a.cH=c))}return a}function w(b,a){this.te=b;this.value=a}function v(b){var a=b[b.length-1],c;a?(c=a.te,a=e(a.value)):(c=ca,(a=ca.rn)&&
b.push(new w(c,a)));for(;c=m(c,a);)(a=c.rn)&&b.push(new w(c,a));var d=[];r(ca).forEach(function(a,c){var e=b[c];e&&a.te===e.te||d.unshift(a)});return b=d.concat(b)}function x(b,a){var c=[],e=[],f=b,g=d(a),h,k,r,l,m,u=0;for(g.splice(0,1);f;)e.unshift(f),f=f.Du;for(;h=g.shift();){if(l)if(f=l.mL[u]){m.s9(h);u++;continue}else u=0;f=e.shift();if(!f&&(f=q(k,h,r),!f)){Y=a;break}m=new w(f,h);l=m.by();if(!l)throw Error('Invalid path "'+a+'". State id "'+h+'" does not exist on router "'+f.Qg+'".');c.push(m);
k=f;r=h}return c}function y(b,c,d){(b=b())||a.D.info("%s is false for state: %s",c,d);return b}function z(b,a,c,d){"function"===typeof b&&(a=a?a.then(function(a){a&&(a=y(b,c,d));return a}):new Promise(function(a){a(y(b,c,d))}));return a}function A(b,a){var c=b.uJ(),d;if(c){for(d=0;d<b.Rj.length;d++)a=A(b.Rj[d],a);d=c.et&&c.et.canExit?c.et.canExit:c.dJ;a=z(d,a,"canExit",c.wn)}return a}function B(b){if(s())return Promise.resolve(!1);a.D.info("Start _canExit.");b?(b=A(b,null),b=null===b?Promise.resolve(!0):
b.then(function(b){return b&&!s()})):b=Promise.resolve(!0);return b}function G(b,c){if(s())return Promise.resolve();a.D.info("Start _canEnter.");var d=null;b.forEach(function(b){(b=b.by())&&(d=z(b.cJ,d,"canEnter",b.wn))});return d=null===d?Promise.resolve({u9:b,origin:c}):d.then(function(a){var d;a&&!s()&&(d={u9:b,origin:c});return d})}function C(b,c){var f=b.te.Iv(e(b.te.nj())),g=b.by();return Promise.resolve().then(function(){a.D.option("level")===a.D.QC&&a.D.info("Updating state of %s to %s.",
k(b.te),b.value)}).then(f?f.HJ:void 0).then(function(){var a=b.te,f,h,k;if("popState"===c){h=a.SE.length;for(f=h-1;0<=f;f--)if(a.SE[f]===b.value){k=!0;a.SE.splice(f,h-f);break}1===h-f&&(a.TE="back")}k||(delete a.TE,a.SE.push(e(a.nj())));if(b.value&&g){var r=d(b.value);g.mL.forEach(function(b,a){var c=r[a+1];c!==g.YT[b]&&(g.YT[b]=c)})}a.nj(b.value)}).then(g?g.FJ:void 0)}function H(b){if(!b)return Promise.resolve(T);var c=Promise.resolve().then(function(){a.D.info("Entering _updateAll.");a.ac.vV=!0});
b.u9.forEach(function(a){c=c.then(function(){if(!s())return C(a,b.origin)})});return c.then(function(){var c=0<b.u9.length&&!s();a.ac.vV=!1;a.D.info("_updateAll returns %s.",String(c));return{hasChanged:c}},function(b){a.ac.vV=!1;return Promise.reject(b)})}function M(b){var a;try{a=L.parse(),a=n(a)}catch(c){return Promise.reject(c)}return G(a,b).then(H)}function F(b,c){a.D.option("level")===a.D.QC&&a.D.info("\x3e\x3e %s: origin\x3d%s router\x3d%s %s %s",b,c.origin,c.te?k(c.te):"null",c.path?"path\x3d"+
c.path:"",c.R9?"deferredHandling\x3dtrue":"")}function D(b){F("Executing",b);if(!b.R9){if("sync"===b.origin)return M();if("popState"===b.origin)return B(b.te).then(function(a){return a?M(b.origin):Promise.resolve(T)})}return b.te.$Pa(b)}function E(){var b=ea[0];F("Resolving",b);b.cancel?(F("Cancelled",b),b=Promise.resolve(T)):b=D(b);return b.then(function(b){var c=ea.shift();F("Done with",c);if(!0===b.hasChanged){var c=u(ca),d;""!==c.title?d=c.title:R&&0<R.length?(d=R,""!==c.cH&&(d+=" | "+c.cH)):
d=c.cH;d!==window.document.title&&(window.document.title=d)}a.ac.HF.dispatch(b);return b},function(b){ea=[];a.D.error("Error when executing transition: %o",b||"Unknown");a.ac.HF.dispatch(T);return Promise.reject(b)})}function O(b){F("Queuing  ",b);a.Context.BW().Dc();b=ea.push(b);1===b?la=E():(b=ea[b-2],b.R9||(F("Cancelling",b),b.cancel=!0),la=la.then(E));return la}function P(){var b,c,d=e(ca.nj()),f=null;a.D.info("Handling popState event with URL: %s",Q.href);if(d)for(b=0;b<ca.Rj.length;b++)if(c=
ca.Rj[b],d===c.Eu){f=c;break}O({te:f,origin:"popState"})}function J(){V||(L||(L=new a.ac.cca),L.Ro(N),R=window.document.title,window.addEventListener("popstate",P,!1),a.D.info("Initializing rootInstance."),a.D.info("Base URL is %s",N),a.D.info("Current URL is %s",Q.href),V=!0)}var N="/",R,L,T={hasChanged:!1},V=!1,Y,ea=[],la,Q=window.location,ca;w.prototype.by=function(){!this.state&&this.value&&(this.state=this.te.Iv(e(this.value)));return this.state};w.prototype.s9=function(b){b&&(this.value+="/"+
b)};a.ac=function(b,a,c){function d(b,a){var c={};c.name=a.moduleConfig.name;if(b){var e={};c.params=e;e=e.ojRouter={};e.parentRouter=a;Object.defineProperty(e,"direction",{get:function(){return a.TE},enumerable:!0});var f=e.parameters={},h=b.parameters,k;Object.keys(h).forEach(function(b){k=h[b];f[b]=g.observable(k)});c.lifecycleListener=function(b){var c=a.K9a();c&&(c.et=b.viewModel)}}return c}var f=this;this.Qg=b;this.Eu=c||(a?e(a.nj()):void 0);this.Du=a;this.Rj=[];this.so=void 0;this.nj=g.observable();
this.RZa=g.pureComputed({read:function(){return e(this.nj())},write:function(b){this.go(b).then(null,function(b){throw b;})},owner:f});this.Bx=null;this.rn=void 0;this.uJ=g.pureComputed(function(){var b=e(f.nj());return g.ignoreDependencies(f.Iv,f,[b])});this.HLa=g.pureComputed(function(){var b=e(f.nj()),a;(b=g.ignoreDependencies(f.Iv,f,[b]))&&(a=b.value);return a});this.TE=void 0;this.SE=[];this.NUa=Object.create(null,{name:{value:g.pureComputed(function(){var b,a=e(this.nj())||this.rn||this.Bx[0];
if(a=this.Iv(a))b=a.value,b&&"string"===typeof b||(b=a.wn);return b},f),enumerable:!0},params:{value:Object.create(null,{ojRouter:{value:new function(){Object.defineProperties(this,{parentRouter:{value:f,enumerable:!0},direction:{get:function(){return f.TE},enumerable:!0}})},enumerable:!0}}),enumerable:!0},lifecycleListener:{value:Object.create(null,{attached:{value:function(b){var a=g.unwrap(b.valueAccessor()).params.ojRouter.parentRouter.uJ();a&&(a.et=b.viewModel)},writable:!0,enumerable:!0}}),
enumerable:!0}});this.aPa=function(){if(!this.Aqa){var b=f.currentState,a=b.peek(),c=g.observable(d(a,f));b.subscribe(function(b){var a=c.peek(),e;e="oj-blank";b?(e=b.value,e&&"string"===typeof e||(e=b.wn)):e=void 0;if(a.name!=e)c(d(b,f));else{var a=a.params.ojRouter.parameters,g;for(g in a)e=b.parameters[g],a[g](e)}});this.Aqa=c}return this.Aqa};Object.defineProperties(this,{parent:{value:this.Du,enumerable:!0}})};o_("Router",a.ac,a);Object.defineProperties(a.ac.prototype,{name:{get:function(){return this.Qg},
enumerable:!0},states:{get:function(){return this.Bx},enumerable:!0},stateId:{get:function(){return this.RZa},enumerable:!0},currentState:{get:function(){return this.uJ},enumerable:!0},currentValue:{get:function(){return this.HLa},enumerable:!0},defaultStateId:{get:function(){return this.rn},set:function(b){this.rn=b},enumerable:!0},moduleConfig:{get:function(){return this.NUa},enumerable:!0},observableModuleConfig:{get:function(){return this.aPa()},enumerable:!0}});ca=new a.ac("root",void 0,void 0);
a.ac.prototype.Jwa=function(b){var a;b&&"string"===typeof b&&(b=b.trim(),0<b.length&&this.Rj.every(function(c){return c.Qg===b?(a=c,!1):!0}));return a};a.f.j("Router.prototype.getChildRouter",{Jwa:a.ac.prototype.Jwa});a.ac.prototype.Nwa=function(){var b=e(this.nj()||this.rn);return m(this,b)};a.f.j("Router.prototype.getCurrentChildRouter",{Nwa:a.ac.prototype.Nwa});a.ac.prototype.Tva=function(b,c){var d,f;a.C.Vu(b);c=c||e(this.nj());b=encodeURIComponent(b.trim());for(d=0;d<this.Rj.length;d++){f=this.Rj[d];
if(f.Qg===b)throw Error('Invalid router name "'+b+'", it already exists.');if(f.Eu===c)throw Error('Cannot create more than one child router for parent state id "'+f.Eu+'".');}d=new a.ac(b,this,c);this.Rj.push(d);return d};a.f.j("Router.prototype.createChildRouter",{Tva:a.ac.prototype.Tva});a.ac.prototype.Iv=function(b){return h(this,b)};a.ac.prototype.Kva=function(b){this.nj(void 0);delete this.rn;this.TE=void 0;this.SE=[];"function"===typeof b?(this.Bx=null,this.Iv=b):(this.Bx=[],delete this.Iv,
Object.keys(b).forEach(function(c){var d=b[c];this.Bx.push(new a.XC(c,d,this));"boolean"===typeof d.isDefault&&d.isDefault&&(this.rn=c)},this));return this};a.f.j("Router.prototype.configure",{Kva:a.ac.prototype.Kva});a.ac.prototype.by=function(b){return this.Iv(b)};a.f.j("Router.prototype.getState",{by:a.ac.prototype.by});a.ac.prototype.go=function(b,a){J();a=a||[];return O({te:this,path:b,origin:"go",qya:a.historyUpdate})};a.f.j("Router.prototype.go",{go:a.ac.prototype.go});a.ac.prototype.$Pa=function(b){var c,
d=!0,e=b.path,f=!1,g=!1;switch(b.qya){case "skip":g=!0;break;case "replace":f=!0}if(e)if("string"===typeof e)d=!1;else return Promise.reject(Error("Invalid object type for state id."));if(d&&(e=this.rn,!e))return a.D.info(function(){return"Undefined state id with no default id on router "+k(this)}),Promise.resolve(T);if("/"===e.charAt(0))b=e;else{b=l(this.Du);if(!b)return Promise.reject(Error('Invalid path "'+e+'". The parent router does not have a current state.'));b+=e}a.D.info("Destination path: %s",
b);try{c=x(this,b),c=v(c)}catch(h){return Promise.reject(h)}var r=n(c);return f||0<r.length?(a.D.info("Deferred mode or new state is different."),B(this).then(function(b){return b?G(r).then(H).then(function(b){if(b.hasChanged)if(g)a.D.info("Skip history update.");else{var d=L.vva(c);a.D.info("%s URL to %s",f?"Replacing":"Pushing",d);window.history[f?"replaceState":"pushState"](null,"",d)}return b}):Promise.resolve(T)})):Promise.resolve(T)};a.ac.prototype.jBa=function(b){this.so=b;b={};for(var a=this;a;)void 0!==
a.so&&(b[a.Qg]=a.so),a=a.Du;for(var a=this,c,d,g,h;a;){for(d=0;d<a.Rj.length;d++)if(g=a.Rj[d],(h=e(a.nj()))&&h===g.Eu){void 0!==g.so&&(b[g.Qg]=g.so);c=g;break}a=c;c=void 0}window.history.replaceState(null,"",f({},b))};a.f.j("Router.prototype.store",{jBa:a.ac.prototype.jBa});a.ac.prototype.IAa=function(){return this.so};a.f.j("Router.prototype.retrieve",{IAa:a.ac.prototype.IAa});a.ac.prototype.bv=function(){for(var b,c;0<this.Rj.length;)this.Rj[0].bv();if(this.Du){b=this.Du.Rj;for(c=0;c<b.length;c++)if(b[c].Qg===
this.Qg){b.splice(c,1);break}delete this.Eu}else N="/",L=null,this.Qg="root",window.document.title=R,window.removeEventListener("popstate",P),a.ac.HF.removeAll(),V=!1;delete this.TE;this.SE=[];this.Bx=null;delete this.rn;delete this.so};a.f.j("Router.prototype.dispose",{bv:a.ac.prototype.bv});a.ac.HF=new c.Signal;a.ac.vV=!1;Object.defineProperties(a.ac,{rootInstance:{value:ca,enumerable:!0},transitionedToState:{value:a.ac.HF,enumerable:!0}});a.ac.Nd={};o_("Router.defaults",a.ac.Nd,a);Object.defineProperties(a.ac.Nd,
{urlAdapter:{get:function(){L||(L=new a.ac.cca);return L},set:function(b){if(V)throw Error("Incorrect operation. Cannot change URL adapter after calling sync() or go().");L=b},enumerable:!0,UX:!1},baseUrl:{get:function(){return N},set:function(b){if(V)throw Error("Incorrect operation. Cannot change base URL after calling sync() or go().");N=b?b.match(/[^?#]+/)[0]:"/"},enumerable:!0,UX:!1},rootInstanceName:{get:function(){return ca.Qg},set:function(b){if(V)throw Error("Incorrect operation. Cannot change the name of the root instance after calling sync() or go().");
a.C.Vu(b);ca.Qg=encodeURIComponent(b.trim())},enumerable:!0,UX:!1}});a.ac.Jv=function(){var b={te:ca,origin:"sync"};J();a.D.info("Entering sync with URL: %s",Q.href);return Y?(b.path=Y,b.R9=!0,b.qya="replace",Y=void 0,O(b)):a.ac.vV?(a.D.info("Sync called while updating, waiting for updates to end."),new Promise(function(b){a.ac.HF.addOnce(function(c){a.D.info("Sync updates done.");b(c)})})):O(b)};o_("Router.sync",a.ac.Jv,a);a.ac.cca=function(){var b="";this.Ro=function(a){var c=document.createElement("a");
c.href=a;a=c.pathname;a=a.replace(/^([^\/])/,"/$1");"/"!==a.slice(-1)&&(a+="/");b=a};this.parse=function(){var c=ca,e=Q.pathname.replace(b,""),f=d(decodeURIComponent(e)),g=[],h,k;for(a.D.info("Parsing: %s",e);c&&(h=f.shift());)k=new w(c,h),(e=k.by())&&e.mL.forEach(function(){k.s9(f.shift())}),g.push(k),c=m(c,h);g=v(g);(c=Q.search.split("oj_Router\x3d")[1])&&(c=c.split("\x26")[0])&&g.forEach(t,p(c));return g};this.vva=function(a){for(var c,d=!1,e="",g={};c=a.pop();)c.value&&(d||c.value!==c.te.rn)&&
(e=e?c.value+"/"+e:c.value,d=!0),void 0!==c.te.so&&(g[c.te.Qg]=c.te.so);return f({pathname:b+e},g)}};o_("Router.urlPathAdapter",a.ac.cca,a);a.ac.D7a=function(){this.Ro=function(){};this.parse=function(){var c=Q.search,e=b(c),f=ca,g=[],h,k,r;for(a.D.info("Parsing: %s",c);f;)c=e[f.Qg]||f.rn,h=d(c),c=h.shift(),r=new w(f,c),c&&((k=r.by())&&k.mL.forEach(function(){r.s9(h.shift())}),g.push(r)),f=m(f,c);g=v(g);(e=e.oj_Router)&&g.forEach(t,p(e));return g};this.vva=function(b){for(var a,c=!1,d="",e,g={};a=
b.pop();)a.value&&(c||a.value!==a.te.rn)&&(c="\x26"+a.te.Qg+"\x3d",e=a.value,d=c+encodeURIComponent(e)+d,c=!0),void 0!==a.te.so&&(g[a.te.Qg]=a.te.so);d&&(d="?"+d.substr(1));return f({search:d},g)}};o_("Router.urlParamAdapter",a.ac.D7a,a);return ca})();(function(){a.XC=function(b,c,e){c=c||{};a.C.Vu(b);b=b.trim();b=b.split("/");this.wn=encodeURIComponent(b[0]);b.shift();this.YT={};this.mL=Array(b.length);b.forEach(function(b,a){var c=b.match(/^{(\w+)}$/);c&&(b=c[1],this.YT[b]=null,this.mL[a]=b)}.bind(this));
(this.cJ=c.canEnter)&&a.C.QF(this.cJ);(this.FJ=c.enter)&&a.C.QF(this.FJ);(this.dJ=c.canExit)&&a.C.QF(this.dJ);(this.HJ=c.exit)&&a.C.QF(this.HJ);this.$f=c.value;this.Z5=c.label;this.qB=c.title;this.DU=e;this.et=void 0;Object.defineProperties(this,{id:{value:this.wn,enumerable:!0},value:{get:function(){return this.$f},set:function(b){this.$f=b},enumerable:!0},label:{get:function(){return this.Z5},set:function(b){this.Z5=b},enumerable:!0},title:{get:function(){return this.qB},set:function(b){this.qB=
b},enumerable:!0},canEnter:{get:function(){return this.cJ},set:function(b){this.cJ=b},enumerable:!0},enter:{get:function(){return this.FJ},set:function(b){this.FJ=b},enumerable:!0},canExit:{get:function(){return this.dJ},set:function(b){this.dJ=b},enumerable:!0},exit:{get:function(){return this.HJ},set:function(b){this.HJ=b},enumerable:!0},parameters:{get:function(){return this.YT},enumerable:!0}})};o_("RouterState",a.XC,a);a.XC.prototype.go=function(){return this.DU?this.DU.go(this.wn):(a.ac.HF.dispatch({hasChanged:!1}),
Promise.reject(Error("Router is not defined for this RouterState object.")))};a.f.j("RouterState.prototype.go",{go:a.XC.prototype.go});a.XC.prototype.Cya=function(){if(!this.DU)throw Error("Router is not defined for this RouterState object.");return this.DU.nj()===this.wn};a.f.j("RouterState.prototype.isCurrent",{Cya:a.XC.prototype.Cya})})();(function(){function b(b,a){if(null===b)return"";var c,d,e={},f={},g="",h=2,r=3,u=2,w="",v=0,x=0,y,z,A,B=b.length;for(A=0;A<B;A++)if(y=b[A],Object.prototype.hasOwnProperty.call(e,
y)||(e[y]=r++,f[y]=!0),z=g+y,Object.prototype.hasOwnProperty.call(e,z))g=z;else{if(Object.prototype.hasOwnProperty.call(f,g)){if(256>g.charCodeAt(0)){for(c=u;c--;)v<<=1,5==x?(x=0,w+=a(v),v=0):x++;d=g.charCodeAt(0);c=8}else{d=1;for(c=u;c--;)v=v<<1|d,5==x?(x=0,w+=a(v),v=0):x++,d=0;d=g.charCodeAt(0);c=16}for(;c--;)v=v<<1|d&1,5==x?(x=0,w+=a(v),v=0):x++,d>>=1;h--;0==h&&(h=Math.pow(2,u),u++);delete f[g]}else for(d=e[g],c=u;c--;)v=v<<1|d&1,5==x?(x=0,w+=a(v),v=0):x++,d>>=1;h--;0==h&&(h=Math.pow(2,u),u++);
e[z]=r++;g=String(y)}if(""!==g){if(Object.prototype.hasOwnProperty.call(f,g)){if(256>g.charCodeAt(0)){for(c=u;c--;)v<<=1,5==x?(x=0,w+=a(v),v=0):x++;d=g.charCodeAt(0);c=8}else{d=1;for(c=u;c--;)v=v<<1|d,5==x?(x=0,w+=a(v),v=0):x++,d=0;d=g.charCodeAt(0);c=16}for(;c--;)v=v<<1|d&1,5==x?(x=0,w+=a(v),v=0):x++,d>>=1;h--;0==h&&(h=Math.pow(2,u),u++);delete f[g]}else for(d=e[g],c=u;c--;)v=v<<1|d&1,5==x?(x=0,w+=a(v),v=0):x++,d>>=1;h--;0==h&&u++}d=2;for(c=u;c--;)v=v<<1|d&1,5==x?(x=0,w+=a(v),v=0):x++,d>>=1;for(;;)if(v<<=
1,5==x){w+=a(v);break}else x++;return w}function c(b,a){for(var d=[],f=4,g=4,h=3,p="",q="",r,u,w,v,x,y={val:a(0),position:32,index:1},q=0;3>q;q+=1)d[q]=q;p=0;w=Math.pow(2,2);for(v=1;v!=w;)u=y.val&y.position,y.position>>=1,0==y.position&&(y.position=32,y.val=a(y.index++)),p|=(0<u?1:0)*v,v<<=1;switch(p){case 0:p=0;w=Math.pow(2,8);for(v=1;v!=w;)u=y.val&y.position,y.position>>=1,0==y.position&&(y.position=32,y.val=a(y.index++)),p|=(0<u?1:0)*v,v<<=1;x=e(p);break;case 1:p=0;w=Math.pow(2,16);for(v=1;v!=
w;)u=y.val&y.position,y.position>>=1,0==y.position&&(y.position=32,y.val=a(y.index++)),p|=(0<u?1:0)*v,v<<=1;x=e(p);break;case 2:return""}for(r=q=d[3]=x;;){if(y.index>b)return"";p=0;w=Math.pow(2,h);for(v=1;v!=w;)u=y.val&y.position,y.position>>=1,0==y.position&&(y.position=32,y.val=a(y.index++)),p|=(0<u?1:0)*v,v<<=1;switch(x=p){case 0:p=0;w=Math.pow(2,8);for(v=1;v!=w;)u=y.val&y.position,y.position>>=1,0==y.position&&(y.position=32,y.val=a(y.index++)),p|=(0<u?1:0)*v,v<<=1;d[g++]=e(p);x=g-1;f--;break;
case 1:p=0;w=Math.pow(2,16);for(v=1;v!=w;)u=y.val&y.position,y.position>>=1,0==y.position&&(y.position=32,y.val=a(y.index++)),p|=(0<u?1:0)*v,v<<=1;d[g++]=e(p);x=g-1;f--;break;case 2:return q}0==f&&(f=Math.pow(2,h),h++);if(d[x])p=d[x];else if(x===g)p=r+r[0];else return null;q+=p;d[g++]=r+p[0];f--;r=p;0==f&&(f=Math.pow(2,h),h++)}}a.jda={i1a:function(a){return null===a?"":b(a,function(b){return f.charAt(b)})},P1a:function(b){return null===b?"":""===b?null:c(b.length,function(a){var c=f;a=b.charAt(a);
var d;g||(g={});if(!g[c])for(g[c]={},d=0;d<c.length;d++)g[c][c[d]]=d;return g[c][a]})}};var e=String.fromCharCode,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",g})()});