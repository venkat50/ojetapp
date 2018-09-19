/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdatasource-common"],function(a,g){a.Dj=function(a,b){this.j5a=a;this.$d=b};o_("EmptyNodeSet",a.Dj,a);a.Dj.prototype.getParent=function(){return this.j5a};a.f.j("EmptyNodeSet.prototype.getParent",{getParent:a.Dj.prototype.getParent});a.Dj.prototype.getStart=function(){return this.$d};a.f.j("EmptyNodeSet.prototype.getStart",{getStart:a.Dj.prototype.getStart});a.Dj.prototype.getCount=function(){return 0};a.f.j("EmptyNodeSet.prototype.getCount",
{getCount:a.Dj.prototype.getCount});a.Dj.prototype.getData=function(){return null};a.f.j("EmptyNodeSet.prototype.getData",{getData:a.Dj.prototype.getData});a.Dj.prototype.getMetadata=function(){return null};a.f.j("EmptyNodeSet.prototype.getMetadata",{getMetadata:a.Dj.prototype.getMetadata});a.Qi=function(a,b){this.Zc=a;this.$d=b};o_("FlattenedNodeSet",a.Qi,a);a.Qi.prototype.getParent=function(){return this.Zc.getParent()};a.f.j("FlattenedNodeSet.prototype.getParent",{getParent:a.Qi.prototype.getParent});
a.Qi.prototype.getStart=function(){return void 0!=this.$d?this.$d:this.Zc.getStart()};a.f.j("FlattenedNodeSet.prototype.getStart",{getStart:a.Qi.prototype.getStart});a.Qi.prototype.getCount=function(){void 0===this.mX&&(this.mX=this.Fla(this.Zc,0),void 0!=this.$d&&(this.mX-=this.$d));return this.mX};a.f.j("FlattenedNodeSet.prototype.getCount",{getCount:a.Qi.prototype.getCount});a.Qi.prototype.Fla=function(a,b){var d,e,f,g;d=a.getStart();e=a.getCount();b+=e;if(a.pk)for(f=0;f<e;f++)g=a.pk(f+d),null!=
g&&(b=this.Fla(g,b));return b};a.Qi.prototype.getData=function(a){return this.r3(this.Zc,a,{index:this.Zc.getStart()},this.Oc)};a.f.j("FlattenedNodeSet.prototype.getData",{getData:a.Qi.prototype.getData});a.Qi.prototype.getMetadata=function(a){return this.r3(this.Zc,a,{index:this.Zc.getStart()},this.rS)};a.f.j("FlattenedNodeSet.prototype.getMetadata",{getMetadata:a.Qi.prototype.getMetadata});a.Qi.prototype.rS=function(a,b){return a.getMetadata(b)};a.Qi.prototype.Oc=function(a,b){return a.getData(b)};
a.Qi.prototype.r3=function(a,b,d,e){var f,g,k,l;f=a.getStart();g=a.getCount();for(k=0;k<g;k++){l=d.index;if(l===b)return e.call(this,a,k+f);d.index=l+1;if(a.pk&&(l=a.pk(k+f),null!=l&&(l=this.r3(l,b,d,e),null!=l)))return l}return null};a.Nk=function(a,b,d){this.vy=a;this.BX=b;this.Raa=this.lNa(d)};o_("MergedNodeSet",a.Nk,a);a.Nk.prototype.lNa=function(a){var b,d,e;b=this.vy.getStart();for(d=b+this.vy.getCount();b<d;b++)if(e=this.vy.getMetadata(b).key,a===e)return b;return d-1};a.Nk.prototype.getParent=
function(){return this.vy.getParent()};a.f.j("MergedNodeSet.prototype.getParent",{getParent:a.Nk.prototype.getParent});a.Nk.prototype.getStart=function(){return this.vy.getStart()};a.f.j("MergedNodeSet.prototype.getStart",{getStart:a.Nk.prototype.getStart});a.Nk.prototype.getCount=function(){return this.vy.getCount()+this.BX.getCount()};a.f.j("MergedNodeSet.prototype.getCount",{getCount:a.Nk.prototype.getCount});a.Nk.prototype.getData=function(a){a=this.jK(a);return a.set.getData(a.index)};a.f.j("MergedNodeSet.prototype.getData",
{getData:a.Nk.prototype.getData});a.Nk.prototype.getMetadata=function(a){a=this.jK(a);return a.set.getMetadata(a.index)};a.f.j("MergedNodeSet.prototype.getMetadata",{getMetadata:a.Nk.prototype.getMetadata});a.Nk.prototype.jK=function(a){if(a<=this.Raa)return{set:this.vy,index:a};var b=this.BX.getCount();return a>this.Raa+b?{set:this.vy,index:a-b}:{set:this.BX,index:a-this.Raa-1+this.BX.getStart()}};a.fh=function(a,b,d,e){this.Zc=a;this.Uo=b;this.iC=d;this.Vo=e};o_("NodeSetWrapper",a.fh,a);a.fh.prototype.getParent=
function(){return this.Zc.getParent()};a.f.j("NodeSetWrapper.prototype.getParent",{getParent:a.fh.prototype.getParent});a.fh.prototype.getStart=function(){return null!=this.iC?this.iC.start:this.Zc.getStart()};a.f.j("NodeSetWrapper.prototype.getStart",{getStart:a.fh.prototype.getStart});a.fh.prototype.getCount=function(){var a,b;a=this.Zc.getStart();b=this.Zc.getCount();null!=this.iC&&(b=Math.min(this.iC.count,b),this.iC.start<a&&(b=0));return b};a.f.j("NodeSetWrapper.prototype.getCount",{getCount:a.fh.prototype.getCount});
a.fh.prototype.getData=function(a){return this.Zc.getData(this.jK(a))};a.f.j("NodeSetWrapper.prototype.getData",{getData:a.fh.prototype.getData});a.fh.prototype.getMetadata=function(a){var b;b=this.Zc.getMetadata(this.jK(a));b.index=a;b.parentKey=this.getParent();this.Uo.call(null,b.key,b);return b};a.f.j("NodeSetWrapper.prototype.getMetadata",{getMetadata:a.fh.prototype.getMetadata});a.fh.prototype.pk=function(c){return null!=this.Vo&&-1!=this.Vo.indexOf(this.Zc.getMetadata(c).key)||!this.Zc.pk||
(c=this.Zc.pk(c),null==c)?null:new a.fh(c,this.Uo,null,this.Vo)};a.f.j("NodeSetWrapper.prototype.getChildNodeSet",{pk:a.fh.prototype.pk});a.fh.prototype.jK=function(a){return null==this.iC?a:a-this.iC.start+this.Zc.getStart()};a.Fa=function(c,b){this.xg=c;this.Ga=b||{};a.Fa.N.constructor.call(this)};o_("FlattenedTreeDataSource",a.Fa,a);a.f.ua(a.Fa,a.Wn,"oj.FlattenedTreeDataSource");a.Fa.prototype.Init=function(){var c;a.Fa.N.Init.call(this);this.xg.on("change",this.BRa.bind(this));this.xq=!1;this.Jaa=
parseInt(this.Ga.fetchSize,10);isNaN(this.Jaa)&&(this.Jaa=25);this.dC=parseInt(this.Ga.maxCount,10);isNaN(this.dC)&&(this.dC=500);c=this.Ga.expanded;Array.isArray(c)?this.tv=c:("all"===c&&(this.Vo=[]),this.tv=[]);this.pv=[]};a.f.j("FlattenedTreeDataSource.prototype.Init",{Init:a.Fa.prototype.Init});a.Fa.prototype.handleEvent=function(c,b){return a.Fa.N.handleEvent.call(this,c,b)};a.f.j("FlattenedTreeDataSource.prototype.handleEvent",{handleEvent:a.Fa.prototype.handleEvent});a.Fa.prototype.Pi=function(){delete this.pv;
delete this.tv;delete this.Vo;this.wv&&delete this.wv;this.xg.off("change");this.xg.Pi&&this.xg.Pi()};a.f.j("FlattenedTreeDataSource.prototype.Destroy",{Pi:a.Fa.prototype.Pi});a.Fa.prototype.Po=function(){return this.Jaa};a.Fa.prototype.pW=function(){return this.tv};a.f.j("FlattenedTreeDataSource.prototype.getExpandedKeys",{pW:a.Fa.prototype.pW});a.Fa.prototype.dN=function(a){return null!=this.Ga?this.Ga[a]:null};a.f.j("FlattenedTreeDataSource.prototype.getOption",{dN:a.Fa.prototype.dN});a.Fa.prototype.getWrappedDataSource=
function(){return this.xg};a.f.j("FlattenedTreeDataSource.prototype.getWrappedDataSource",{getWrappedDataSource:a.Fa.prototype.getWrappedDataSource});a.Fa.prototype.B3=function(a){var b,d;b=this.Po();d=this.dC;return-1===b?-1===a?d:a:-1===a?Math.min(b,d):b};a.Fa.prototype.fv=function(a,b){this.xq=!0;this.GE()?this.cNa(a,b):this.bNa(a,b)};a.Fa.prototype.bNa=function(c,b){var d,e,f,g,k,l,m,n;if(c.start>this.vi()){d=this.T3();if(0>this.vi()){m={};m.start=c.start;m.count=Math.min(d,c.count);this.xg.fetchChildren(null,
m,{success:function(a){this.Ww(a,null,0,c,m,0,b)}.bind(this),error:function(a){this.Nr(a,b)}.bind(this)});return}if(0<d){e=this.mma();f=e.parent;g=this.xg.getChildCount(f);k=e.index;l=e.depth;-1===g||k<g-1?(e=this.B3(g),m={},m.start=k+1,m.count=-1===g?Math.min(e,c.count):Math.min(d,Math.min(Math.min(e,c.count),g-m.start)),this.xg.fetchChildren(f,m,{success:function(a){this.Ww(a,f,l,c,m,g,b)}.bind(this),error:function(a){this.Nr(a,b)}.bind(this)})):(k=e.key,n=this.xg.getChildCount(k),d=this.hm(k)&&
(-1===n||0<n)?this.N2(e,l+1,c,b,d):this.N2(f,l,c,b,d),d||(d=new a.Dj(null,c.start),null!=b&&null!=b.success&&b.success.call(null,d),this.xq=!1));return}}this.W$(c,b);this.xq=!1};a.Fa.prototype.moveOK=function(a,b,d){return this.xg.moveOK(a,b,d)};a.f.j("FlattenedTreeDataSource.prototype.moveOK",{moveOK:a.Fa.prototype.moveOK});a.Fa.prototype.move=function(a,b,d,e){this.xg.move(a,b,d,e)};a.f.j("FlattenedTreeDataSource.prototype.move",{move:a.Fa.prototype.move});a.Fa.prototype.T3=function(){return this.dC-
(this.vi()+1)};a.Fa.prototype.Nr=function(a,b){null!=b&&null!=b.error&&b.error.call(null,a);this.xq=!1};a.Fa.prototype.Ww=function(c,b,d,e,f,g,k,l){f=[];this.ZVa(c,b,d,f);g={start:e.start,count:c.getCount()};c=new a.fh(c,this.UB.bind(this),g);0!==f.length?(g=[],g.push(f),f={},f.callbacks={success:function(a){this.ava(a,b,d,e,k,l)}.bind(this),error:function(b){this.Nr(b,k)}.bind(this)},f.nodeSet=c,f.keys=[],this.eua(g,f)):this.ava(c,b,d,e,k,l)};a.Fa.prototype.ava=function(c,b,d,e,f,g){var k,l;void 0!=
g&&(g=g.prevNodeSet,void 0!=g&&(k=g.getStart()+g.getCount()-1,k=g.getMetadata(k).key,k=new a.Nk(g,c,k)));c.getCount()<e.count&&null!=b&&0<d?(l={},l.start=e.start+c.getCount(),l.count=e.count-c.getCount(),e={},e.prevNodeSet=null==k?c:k,l=this.N2(b,d,l,f,void 0,e)):c.getCount()>e.count&&(b=c.getCount()-e.count,null!=k?(k=new a.fh(k,this.UB.bind(this),{start:k.getStart(),count:k.getCount()-b}),this.pU(k.getStart()+k.getCount(),b)):(c=new a.fh(c,this.UB.bind(this),{start:c.getStart(),count:c.getCount()-
b}),this.pU(c.getStart()+c.getCount(),b)));l||null!=f&&null!=f.success&&f.success.call(null,null==k?c:k);this.xq=!1};a.Fa.prototype.getChildCount=function(a){return this.xg.getChildCount(a)};a.f.j("FlattenedTreeDataSource.prototype.getChildCount",{getChildCount:a.Fa.prototype.getChildCount});a.Fa.prototype.N2=function(a,b,d,e,f,g){var k,l,m,n,t,s,p,q,r;r=!1;void 0===f&&(f=this.T3());this.pTa()&&(p={queueOnly:!0});s=this.B3(-1);for(k=this.vi();0<=k;k--)if(l=this.Zl(k),m=l.depth,m<b)if(a=l.parent,n=
this.xg.getChildCount(a),l=l.index,(t=-1===n)||l<n-1){q={};q.start=l+1;t?(q.count=Math.min(f,Math.max(0,s)),p=void 0):q.count=Math.min(f,Math.min(s,n-q.start));if(0==q.count)break;this.xg.fetchChildren(a,q,{success:function(b){this.Ww(b,a,m,d,q,n,e,g)}.bind(this),error:function(b){this.Nr(b,e)}.bind(this)},p);r=!0;break}else b-=1;null!=p&&(this.xg.fetchChildren(a,{start:d.count,count:0},{success:function(b){this.Ww(b,a,m,d,q,n,e,g)}.bind(this),error:function(b){this.Nr(b,e)}.bind(this)}),r=!0);return r};
a.Fa.prototype.ZVa=function(a,b,d,e){var f,g,k,l;f=a.getStart();g=a.getCount();for(k=0;k<g;k++)l=a.getMetadata(f+k),l=l.key,this.IQ(l,d,f+k,b),this.hm(l)&&e.push(l)};a.Fa.prototype.UB=function(a,b){this.hm(a)&&!b.leaf?b.state="expanded":b.state=b.leaf?"leaf":"collapsed"};a.Fa.prototype.cNa=function(a,b){var d={maxCount:this.dC};0<=this.vi()&&(d.start=this.Zl(this.vi()).key);this.xg.fetchDescendants(null,{success:function(d){this.SQa(d,a,b)}.bind(this),error:function(a){this.Nr(a,b)}.bind(this)},d)};
a.Fa.prototype.getSortCriteria=function(){return this.xg.getSortCriteria()};a.f.j("FlattenedTreeDataSource.prototype.getSortCriteria",{getSortCriteria:a.Fa.prototype.getSortCriteria});a.Fa.prototype.SQa=function(c,b,d){var e,f,g;b.start>this.vi()?(e=this.T3(),f=Math.min(e,b.count),c=new a.fh(c,this.UB.bind(this),null,this.Vo),0<=this.vi()?(g=this.mma(),e={index:0,found:!1,count:0},this.S6(c,null,0,g,f,e),f=e.index+1):(e={count:0},this.S6(c,null,0,null,f,e),f=0),null!=d&&null!=d.success&&(c=null!=
e?0===e.count?new a.Dj(null,b.start):new a.Qi(c,f):new a.Qi(c),d.success.call(null,c))):this.W$(b,d);this.xq=!1;this.dra()};a.Fa.prototype.S6=function(a,b,d,e,f,g){var k,l,m,n,t;k=a.getStart();l=a.getCount();for(m=0;m<l&&g.count!=f;m++){n=a.getMetadata(k+m);t=n.key;g.checkDepth&&e.depth===d&&(g.found=!0,g.checkDepth=!1);if(null==e||g.found)this.IQ(t,d,k+m,b),g.count+=1,n.state=n.leaf?"leaf":"expanded";null==e||g.found||(t===e.key?n.leaf||this.hm(t)?g.found=!0:g.checkDepth=!0:g.index+=1);a.pk&&this.hm(t)&&
(n=a.pk(m),null!=n&&this.S6(n,t,d+1,e,f,g))}};a.Fa.prototype.expand=function(a){this.ze(a)};a.f.j("FlattenedTreeDataSource.prototype.expand",{expand:a.Fa.prototype.expand});a.Fa.prototype.ze=function(c,b){var d,e,f,g;this.xq=!0;d=this.xg.getChildCount(c);e=this.B3(d);f=this.dC;if(this.vi()+1===f&&(g=this.Kn(c),g==f-1)){this.T$(c,new a.Dj(c,0),0,b);return}0==e?this.T$(c,new a.Dj(c,0),0,b):this.xg.fetchChildren(c,{start:0,count:e},{success:function(a){this.T$(c,a,d,b)}.bind(this),error:function(){this.O3a(c)}.bind(this)})};
a.Fa.prototype.dra=function(){var a,b;if(this.wv&&0<this.wv.length){for(a=this.wv.length-1;0<=a;a--)b=this.wv[a],this.collapse(b.key);this.wv.length=0}};a.Fa.prototype.mWa=function(a){null==this.wv&&(this.wv=[]);this.wv.push({op:"collapse",key:a})};a.Fa.prototype.collapse=function(a){var b,d,e,f,g;if(this.xq)this.mWa(a);else if(b=this.Kn(a)+1,d=this.Zl(b-1),null!=d){e=0;d=d.depth;f=this.vi();for(g=b;g<f+1;g++){var k=this.Zl(g).depth;if(k>d)e+=1;else if(k==d)break}if(0!=e){this.GE()?this.Vo.push(a):
this.XWa(a);f=[];for(d=0;d<e;d++)f.push({key:this.Zl(b+d).key,index:b+d});this.pU(b,e);this.ZX(f)}this.handleEvent("collapse",{rowKey:a})}};a.f.j("FlattenedTreeDataSource.prototype.collapse",{collapse:a.Fa.prototype.collapse});a.Fa.prototype.hm=function(a){return this.GE()?this.Vo&&0<this.Vo.length?-1===this.ula(a):!0:this.tv&&0<this.tv.length?-1<this.Rla(a):!1};a.Fa.prototype.ula=function(a){return this.jma(this.Vo,a)};a.Fa.prototype.Rla=function(a){return this.jma(this.tv,a)};a.Fa.prototype.jma=
function(a,b){var d,e;e=-1;for(d=0;d<a.length;d++)a[d]===b&&(e=d);return e};a.Fa.prototype.XWa=function(a){a=this.Rla(a);-1<a&&this.tv.splice(a,1)};a.Fa.prototype.RWa=function(a){a=this.ula(a);-1<a&&this.Vo.splice(a,1)};a.Fa.prototype.O3a=function(a){this.handleEvent("expand",{rowKey:a})};a.Fa.prototype.T$=function(c,b,d,e){var f,g,k,l,m,n,t,s,p,q,r;b=new a.fh(b,this.UB.bind(this));g=f=this.Kn(c)+1;k=b.getStart();l=b.getCount();m=this.Zl(f-1);n=m.depth+1;s=[];for(p=k;p<l;p++)k=b.getMetadata(p),t=
k.key,this.hm(t)&&s.push(t),this.Uoa(f,k,m.key,p,n),f++;this.GE()?this.RWa(c):-1===this.tv.indexOf(c)&&this.tv.push(c);void 0!=e&&(q=e.queue,r=e.prevNodeSetInfo);void 0!=r&&(b=new a.Nk(r.nodeSet,b,c));if(0!=s.length||void 0!==q&&0!=q.length)void 0===q&&(q=[]),0<s.length&&q.push(s),void 0===r&&(r={},r.firstIndex=g,r.firstKey=c,r.keys=[]),r.nodeSet=b,r.keys.push(c),this.eua(q,r);else{if(void 0!=r){e=r.callbacks;if(null!=e){e.success.call(null,b);this.xq=!1;return}this.YW(r.firstIndex,r.firstKey,b)}else this.YW(g,
c,b);b=this.dC;-1===d&&l===this.Po()||d>l||f==b?this.p2(f):this.vi()>=b&&this.p2(b);if(void 0!=r)for(d=0;d<r.keys.length;d++)this.handleEvent("expand",{rowKey:r.keys[d]});this.xq=!1;this.handleEvent("expand",{rowKey:c})}this.xq=!1;q&&0==q.length&&this.dra()};a.Fa.prototype.eua=function(a,b){var d,e;d=a[a.length-1];e=d.shift();0===d.length&&a.pop();this.ze(e,{prevNodeSetInfo:b,queue:a})};a.Fa.prototype.Uoa=function(a,b,d,e,f){b=b.key;a<=this.vi()?this.IQ(b,f,e,d,a):this.IQ(b,f,e,d)};a.Fa.prototype.p2=
function(a,b){var d;void 0==b&&(b=this.vi()+1-a);d=[];for(var e=0;e<b;e++)d.push({key:this.Zl(a+e).key,index:a+e});this.pU(a,b);this.ZX(d)};a.Fa.prototype.BRa=function(a){var b,d,e;b=a.operation;d=a.parent;d=Array.isArray(d)?d[d.length-1]:d;e=a.index;"insert"===b?this.jRa(d,e,a.data):"delete"===b?this.DQa(d,e):"refresh"===b&&this.ORa(d)};a.Fa.prototype.jRa=function(a,b,d){var e,f;e=this.Kn(a);f=this.Zl(e).depth+1;e=e+b+1;d=d.getMetadata(d.getStart());this.Uoa(e,d,a,b,f)};a.Fa.prototype.DQa=function(c,
b){var d,e,f,g,k;d=this.Kn(c);e=this.Zl(d);d+=b;f=this.Zl(d);a.C.assert(f.parent===e&&f.depth===e.depth+1);e=d+1;for(g=this.vi();e<=g;){k=this.Zl(e);if(k.depth!=f.depth)break;e++}this.p2(d,1)};a.Fa.prototype.ORa=function(a){null==a&&this.refresh()};a.Fa.prototype.GE=function(){var a=this.xg.getCapability("fetchDescendants");return void 0!=this.Vo&&null!=a&&"disable"!=a};a.Fa.prototype.pTa=function(){return"enable"===this.xg.getCapability("batchFetch")};a.Fa.prototype.refresh=function(){this.LJa()};
a.Fa.prototype.Kn=function(a){var b,d,e;b=this.vi();for(d=0;d<=b;d++)if(e=this.Zl(d),e.key==a)return d;return-1};a.Fa.prototype.getKey=function(a){return 0>a||a>this.vi()?null:this.Zl(a).key};a.Fa.prototype.I2a=function(){return{start:0,end:this.vi()+1}};a.Fa.prototype.s2a=function(a){var b;b=[];a=this.Kn(a);for(a=this.Pp(a);null!=a;)b.push(a),a=this.Kn(a),a=this.Pp(a);return b.reverse()};a.Fa.prototype.W$=function(a,b){null!=b&&null!=b.error&&b.error.call(null)};a.Fa.prototype.YW=function(){a.C.gf()};
a.Fa.prototype.ZX=function(){a.C.gf()};a.Fa.prototype.vi=function(){return this.pv.length-1};a.Fa.prototype.mma=function(){return this.pv[this.vi()]};a.Fa.prototype.Zl=function(a){return this.pv[a]};a.Fa.prototype.Pp=function(a){a=this.pv[a];return null!=a?a.parent:null};a.Fa.prototype.IQ=function(a,b,d,e,f){var g={};g.key=a;g.depth=b;g.index=d;g.parent=e;void 0===f?this.pv.push(g):this.pv.splice(f,0,g)};a.Fa.prototype.pU=function(a,b){this.pv.splice(a,b)};a.Fa.prototype.LJa=function(){this.pv.length=
0};a.Fa.prototype.getCapability=function(a){return this.xg.getCapability(a)};a.f.j("FlattenedTreeDataSource.prototype.getCapability",{getCapability:a.Fa.prototype.getCapability});a.ib("oj.ojRowExpander",g.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{context:null,expanded:null,expand:null,collapse:null},xs:{root:"oj-rowexpander",icon:"oj-component-icon",clickable:"oj-clickable-icon-nocontext",expand:"oj-rowexpander-expand-icon",collapse:"oj-rowexpander-collapse-icon",leaf:"oj-rowexpander-leaf-icon",
lazyload:"oj-rowexpander-lazyload-icon",toucharea:"oj-rowexpander-touch-area",indent:"oj-rowexpander-indent",iconspacer:"oj-rowexpander-icon-spacer",depth0:"oj-rowexpander-depth-0",depth1:"oj-rowexpander-depth-1",depth2:"oj-rowexpander-depth-2",depth3:"oj-rowexpander-depth-3",depth4:"oj-rowexpander-depth-4",depth5:"oj-rowexpander-depth-5",depth6:"oj-rowexpander-depth-6",depth7:"oj-rowexpander-depth-7"},UF:{GH:7,wZ:53},rc:function(){this._super();this.element.addClass(this.xs.root);this.Foa()},Foa:function(){var c=
this,b;b=this.options.context;if(null!=b.component)this.aa="function"===typeof b.component?b.component("instance"):b.component;else if(b.componentElement){var d=b.componentElement,d=g(d).hasClass("oj-component-initnode")?d:g(d).find(".oj-component-initnode")[0];this.aa=a.Components.qd(d)("instance")}this.Le=b.datasource;this.depth=b.depth;this.rk=b.state;this.Dv=b.key;this.index=b.index;this.OX=b.parentKey;this.UHa();this.SHa();this.PU();"expanded"===this.rk||"collapsed"===this.rk?(g(this.Xba).on("touchend",
function(b){b.preventDefault();c.Y2()}),g(this.Xba).on("click",function(b){b.preventDefault();c.Y2()}),g(this.element).on("keypress",function(b){var a=b.keyCode||b.which;if(a===g.ui.keyCode.ENTER||a===g.ui.keyCode.SPACE)c.Y2(),b.preventDefault(),b.target.focus()}),this.TW=this.Tna.bind(this),this.aa.element.get(0).addEventListener("keydown",this.TW,!0),this.Yxa=this.MQa.bind(this),this.Txa=this.pQa.bind(this),this.Le.on("expand",this.Yxa,this),this.Le.on("collapse",this.Txa,this),this.KSa()):"leaf"===
this.rk&&(this.TW=this.Tna.bind(this),this.aa.element.get(0).addEventListener("keydown",this.TW,!0),g(this.icon).attr("tabindex",-1));this.N$=this.fQa.bind(this);if(this.aa.$())g(this.aa.element).on("ojBeforeCurrentCell",this.N$);else g(this.aa.element).on("ojbeforecurrentcell",this.N$)},KSa:function(){var a=this.options.expanded;null!=a?a&&"collapsed"===this.rk?this.ze():a||"expanded"!==this.rk||this.qi():this.options.expanded="collapsed"===this.rk?!1:!0},refresh:function(){this.element.empty();
this.Foa()},_destroy:function(){this.aa.element.get(0).removeEventListener("ojkeydown",this.TW,!0);g(this.aa.element).off("ojbeforecurrentcell",this.N$);this.Le.off("expand",this.Yxa,this);this.Le.off("collapse",this.Txa,this);this.element.removeClass(this.xs.root);this.element.empty()},ze:function(){return"collapsed"===this.rk?(this.d6(),this.Le.expand(this.Dv),!0):!1},qi:function(){return"expanded"===this.rk?(this.d6(),this.Le.collapse(this.Dv),!0):!1},_setOption:function(a,b,d){"expanded"!=a||
null!=d._context&&!0==d._context.internalSet?(this._super(a,b,d),"context"==a&&null!=d._context&&!0!=d._context.internalSet&&this.refresh()):b?this.ze():this.qi()},UHa:function(){var a,b;b=this.depth-1;if(b<this.UF.GH)this.U0(b);else{for(a=1;a<=b/this.UF.GH;a++)this.U0(this.UF.GH);a=b%this.UF.GH;a<this.UF.GH&&this.U0(a)}},U0:function(a){a=g(document.createElement("span")).addClass(this.xs.indent).addClass(this.xs["depth"+a]);this.element.append(a)},SHa:function(){var a;a=g(document.createElement("div")).addClass(this.xs.iconspacer);
this.Xba=g(document.createElement("div")).addClass(this.xs.toucharea);this.icon=g(document.createElement("a")).attr("href","#").attr("aria-labelledby",this.kma()).addClass(this.xs.icon).addClass(this.xs.clickable);this.element.append(a.append(this.Xba.append(this.icon)));this._focusable({element:this.icon,applyHighlight:!0})},Pz:function(a){this.icon.addClass(this.xs[a])},dB:function(a){this.icon.removeClass(this.xs[a])},PU:function(){switch(this.rk){case "leaf":this.dB("icon");this.dB("clickable");
this.Pz("leaf");break;case "collapsed":this.Pz("expand");this.OQ(!1);break;case "expanded":this.Pz("collapse");this.OQ(!0);break;case "loading":this.dB("clickable"),this.Pz("lazyload")}},j7:function(){switch(this.rk){case "leaf":this.dB("leaf");this.Pz("icon");this.Pz("clickable");break;case "collapsed":this.dB("expand");break;case "expanded":this.dB("collapse");break;case "loading":this.dB("lazyload"),this.Pz("clickable")}},fQa:function(a,b){var d,e;null==b&&(b=a.detail);null!=b.currentCell&&(d=
"cell"==b.currentCell.type?b.currentCell.keys.row:b.currentCell.key,null!=b.previousValue&&(e="cell"==b.previousCurrentCell.type?b.previousCurrentCell.keys.row:b.previousCurrentCell.key),this.Dv===d&&e!=d&&this.aa.JU&&(d=this.T("accessibleRowDescription",{level:this.depth,num:this.index+1,total:this.Le.getWrappedDataSource().getChildCount(this.OX)}),e="collapsed"===this.rk?this.T("accessibleStateCollapsed"):"expanded"===this.rk?this.T("accessibleStateExpanded"):"",this.aa.JU({context:d,state:e})))},
Tna:function(c){var b,d,e=a.Components.qd(this.aa.element.get(0))("getContextByNode",c.target);if(null!=e&&(b=e.key,null==b&&(b=e.keys.row),this.Dv===b&&(b=c.keyCode||c.which,a.Q.Ks(c))))if(b==g.ui.keyCode.RIGHT)this.ze()&&c.preventDefault();else if(b==g.ui.keyCode.LEFT)this.qi()&&c.preventDefault();else if(c.altKey&&b==this.UF.wZ&&this.aa.JU){c=this.Le.s2a(this.Dv);if(null!=c&&0<c.length)for(d=[],b=0;b<c.length;b++)d.push({key:c[b],label:this.T("accessibleLevelDescription",{level:b+1})});c=this.T("accessibleRowDescription",
{level:this.depth,num:this.index+1,total:this.Le.getWrappedDataSource().getChildCount(this.OX)});this.aa.JU({context:c,state:"",ancestors:d})}},d6:function(){this.j7();this.rk="loading";this.PU()},MQa:function(a){a=a.rowKey;if(a===this.Dv){this.j7();this.rk="expanded";this.PU();this.OQ(!0);this.Mua("expanded");var b=this.options.expanded;if(null==b||null!=b&&!b)this._trigger("expand",null,{rowKey:a}),this.Nua(!0)}},pQa:function(a){a=a.rowKey;if(a===this.Dv){this.j7();this.rk="collapsed";this.PU();
this.OQ(!1);this.Mua("collapsed");var b=this.options.expanded;if(null==b||null!=b&&b)this._trigger("collapse",null,{rowKey:a}),this.Nua(!1)}},Nua:function(a){this.option("expanded",a,{changed:!0,_context:{internalSet:!0,writeback:!0}})},Mua:function(a){var b=this.options.context;b.state=a;this.option("context",b,{changed:!0,_context:{internalSet:!0}})},Y2:function(){var a=this.rk;this.d6();"collapsed"===a?this.Le.expand(this.Dv):"expanded"===a&&this.Le.collapse(this.Dv)},OQ:function(a){this.icon.attr("aria-expanded",
a)},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;return"oj-rowexpander-disclosure"!==a&&"oj-rowexpander-icon"!==a||null==this.icon?null:this.icon.get(0)},getSubIdByNode:function(a){return a===this.icon.get(0)?{subId:"oj-rowexpander-disclosure"}:null},io:function(){this._super();this.icon.attr("aria-labelledby",this.kma())},kma:function(){return this.element.parent().closest("[id]").attr("id")}});a.J.Ua("oj-row-expander","baseComponent",{properties:{context:{type:"object"},
expanded:{type:"boolean",writeback:!0}},events:{collapse:{},expand:{}},extension:{Ya:"ojRowExpander"}});a.J.register("oj-row-expander",{metadata:a.J.getMetadata("oj-row-expander")})});