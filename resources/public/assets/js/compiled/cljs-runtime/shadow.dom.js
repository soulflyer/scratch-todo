goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_73269 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_73269(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_73274 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_73274(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__72220 = coll;
var G__72221 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__72220,G__72221) : shadow.dom.lazy_native_coll_seq.call(null,G__72220,G__72221));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__72245 = arguments.length;
switch (G__72245) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__72251 = arguments.length;
switch (G__72251) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__72254 = arguments.length;
switch (G__72254) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__72268 = arguments.length;
switch (G__72268) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__72290 = arguments.length;
switch (G__72290) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__72308 = arguments.length;
switch (G__72308) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e72320){if((e72320 instanceof Object)){
var e = e72320;
return console.log("didnt support attachEvent",el,e);
} else {
throw e72320;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__72328 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__72329 = null;
var count__72330 = (0);
var i__72331 = (0);
while(true){
if((i__72331 < count__72330)){
var el = chunk__72329.cljs$core$IIndexed$_nth$arity$2(null,i__72331);
var handler_73329__$1 = ((function (seq__72328,chunk__72329,count__72330,i__72331,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__72328,chunk__72329,count__72330,i__72331,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_73329__$1);


var G__73332 = seq__72328;
var G__73333 = chunk__72329;
var G__73334 = count__72330;
var G__73335 = (i__72331 + (1));
seq__72328 = G__73332;
chunk__72329 = G__73333;
count__72330 = G__73334;
i__72331 = G__73335;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__72328);
if(temp__5753__auto__){
var seq__72328__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72328__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__72328__$1);
var G__73339 = cljs.core.chunk_rest(seq__72328__$1);
var G__73340 = c__4556__auto__;
var G__73341 = cljs.core.count(c__4556__auto__);
var G__73342 = (0);
seq__72328 = G__73339;
chunk__72329 = G__73340;
count__72330 = G__73341;
i__72331 = G__73342;
continue;
} else {
var el = cljs.core.first(seq__72328__$1);
var handler_73344__$1 = ((function (seq__72328,chunk__72329,count__72330,i__72331,el,seq__72328__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__72328,chunk__72329,count__72330,i__72331,el,seq__72328__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_73344__$1);


var G__73348 = cljs.core.next(seq__72328__$1);
var G__73349 = null;
var G__73350 = (0);
var G__73351 = (0);
seq__72328 = G__73348;
chunk__72329 = G__73349;
count__72330 = G__73350;
i__72331 = G__73351;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__72359 = arguments.length;
switch (G__72359) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__72369 = cljs.core.seq(events);
var chunk__72370 = null;
var count__72371 = (0);
var i__72372 = (0);
while(true){
if((i__72372 < count__72371)){
var vec__72383 = chunk__72370.cljs$core$IIndexed$_nth$arity$2(null,i__72372);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72383,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72383,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__73362 = seq__72369;
var G__73363 = chunk__72370;
var G__73364 = count__72371;
var G__73365 = (i__72372 + (1));
seq__72369 = G__73362;
chunk__72370 = G__73363;
count__72371 = G__73364;
i__72372 = G__73365;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__72369);
if(temp__5753__auto__){
var seq__72369__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72369__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__72369__$1);
var G__73367 = cljs.core.chunk_rest(seq__72369__$1);
var G__73368 = c__4556__auto__;
var G__73369 = cljs.core.count(c__4556__auto__);
var G__73370 = (0);
seq__72369 = G__73367;
chunk__72370 = G__73368;
count__72371 = G__73369;
i__72372 = G__73370;
continue;
} else {
var vec__72388 = cljs.core.first(seq__72369__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72388,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72388,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__73375 = cljs.core.next(seq__72369__$1);
var G__73376 = null;
var G__73377 = (0);
var G__73378 = (0);
seq__72369 = G__73375;
chunk__72370 = G__73376;
count__72371 = G__73377;
i__72372 = G__73378;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__72394 = cljs.core.seq(styles);
var chunk__72395 = null;
var count__72396 = (0);
var i__72397 = (0);
while(true){
if((i__72397 < count__72396)){
var vec__72413 = chunk__72395.cljs$core$IIndexed$_nth$arity$2(null,i__72397);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72413,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72413,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__73386 = seq__72394;
var G__73387 = chunk__72395;
var G__73388 = count__72396;
var G__73389 = (i__72397 + (1));
seq__72394 = G__73386;
chunk__72395 = G__73387;
count__72396 = G__73388;
i__72397 = G__73389;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__72394);
if(temp__5753__auto__){
var seq__72394__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72394__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__72394__$1);
var G__73392 = cljs.core.chunk_rest(seq__72394__$1);
var G__73393 = c__4556__auto__;
var G__73394 = cljs.core.count(c__4556__auto__);
var G__73395 = (0);
seq__72394 = G__73392;
chunk__72395 = G__73393;
count__72396 = G__73394;
i__72397 = G__73395;
continue;
} else {
var vec__72418 = cljs.core.first(seq__72394__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72418,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72418,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__73399 = cljs.core.next(seq__72394__$1);
var G__73400 = null;
var G__73401 = (0);
var G__73402 = (0);
seq__72394 = G__73399;
chunk__72395 = G__73400;
count__72396 = G__73401;
i__72397 = G__73402;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__72432_73404 = key;
var G__72432_73405__$1 = (((G__72432_73404 instanceof cljs.core.Keyword))?G__72432_73404.fqn:null);
switch (G__72432_73405__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_73421 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_73421,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_73421,"aria-");
}
})())){
el.setAttribute(ks_73421,value);
} else {
(el[ks_73421] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__72468){
var map__72470 = p__72468;
var map__72470__$1 = (((((!((map__72470 == null))))?(((((map__72470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72470):map__72470);
var props = map__72470__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72470__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__72480 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72480,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72480,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72480,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__72489 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__72489,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__72489;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__72492 = arguments.length;
switch (G__72492) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__72499){
var vec__72501 = p__72499;
var seq__72502 = cljs.core.seq(vec__72501);
var first__72503 = cljs.core.first(seq__72502);
var seq__72502__$1 = cljs.core.next(seq__72502);
var nn = first__72503;
var first__72503__$1 = cljs.core.first(seq__72502__$1);
var seq__72502__$2 = cljs.core.next(seq__72502__$1);
var np = first__72503__$1;
var nc = seq__72502__$2;
var node = vec__72501;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__72505 = nn;
var G__72506 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__72505,G__72506) : create_fn.call(null,G__72505,G__72506));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__72507 = nn;
var G__72508 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__72507,G__72508) : create_fn.call(null,G__72507,G__72508));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__72515 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72515,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72515,(1),null);
var seq__72518_73463 = cljs.core.seq(node_children);
var chunk__72519_73464 = null;
var count__72520_73465 = (0);
var i__72521_73466 = (0);
while(true){
if((i__72521_73466 < count__72520_73465)){
var child_struct_73468 = chunk__72519_73464.cljs$core$IIndexed$_nth$arity$2(null,i__72521_73466);
var children_73469 = shadow.dom.dom_node(child_struct_73468);
if(cljs.core.seq_QMARK_(children_73469)){
var seq__72564_73470 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_73469));
var chunk__72566_73471 = null;
var count__72567_73472 = (0);
var i__72568_73473 = (0);
while(true){
if((i__72568_73473 < count__72567_73472)){
var child_73475 = chunk__72566_73471.cljs$core$IIndexed$_nth$arity$2(null,i__72568_73473);
if(cljs.core.truth_(child_73475)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_73475);


var G__73477 = seq__72564_73470;
var G__73478 = chunk__72566_73471;
var G__73479 = count__72567_73472;
var G__73480 = (i__72568_73473 + (1));
seq__72564_73470 = G__73477;
chunk__72566_73471 = G__73478;
count__72567_73472 = G__73479;
i__72568_73473 = G__73480;
continue;
} else {
var G__73485 = seq__72564_73470;
var G__73486 = chunk__72566_73471;
var G__73487 = count__72567_73472;
var G__73488 = (i__72568_73473 + (1));
seq__72564_73470 = G__73485;
chunk__72566_73471 = G__73486;
count__72567_73472 = G__73487;
i__72568_73473 = G__73488;
continue;
}
} else {
var temp__5753__auto___73489 = cljs.core.seq(seq__72564_73470);
if(temp__5753__auto___73489){
var seq__72564_73490__$1 = temp__5753__auto___73489;
if(cljs.core.chunked_seq_QMARK_(seq__72564_73490__$1)){
var c__4556__auto___73492 = cljs.core.chunk_first(seq__72564_73490__$1);
var G__73493 = cljs.core.chunk_rest(seq__72564_73490__$1);
var G__73494 = c__4556__auto___73492;
var G__73495 = cljs.core.count(c__4556__auto___73492);
var G__73496 = (0);
seq__72564_73470 = G__73493;
chunk__72566_73471 = G__73494;
count__72567_73472 = G__73495;
i__72568_73473 = G__73496;
continue;
} else {
var child_73499 = cljs.core.first(seq__72564_73490__$1);
if(cljs.core.truth_(child_73499)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_73499);


var G__73501 = cljs.core.next(seq__72564_73490__$1);
var G__73502 = null;
var G__73503 = (0);
var G__73504 = (0);
seq__72564_73470 = G__73501;
chunk__72566_73471 = G__73502;
count__72567_73472 = G__73503;
i__72568_73473 = G__73504;
continue;
} else {
var G__73505 = cljs.core.next(seq__72564_73490__$1);
var G__73506 = null;
var G__73507 = (0);
var G__73508 = (0);
seq__72564_73470 = G__73505;
chunk__72566_73471 = G__73506;
count__72567_73472 = G__73507;
i__72568_73473 = G__73508;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_73469);
}


var G__73514 = seq__72518_73463;
var G__73515 = chunk__72519_73464;
var G__73516 = count__72520_73465;
var G__73517 = (i__72521_73466 + (1));
seq__72518_73463 = G__73514;
chunk__72519_73464 = G__73515;
count__72520_73465 = G__73516;
i__72521_73466 = G__73517;
continue;
} else {
var temp__5753__auto___73521 = cljs.core.seq(seq__72518_73463);
if(temp__5753__auto___73521){
var seq__72518_73525__$1 = temp__5753__auto___73521;
if(cljs.core.chunked_seq_QMARK_(seq__72518_73525__$1)){
var c__4556__auto___73526 = cljs.core.chunk_first(seq__72518_73525__$1);
var G__73527 = cljs.core.chunk_rest(seq__72518_73525__$1);
var G__73528 = c__4556__auto___73526;
var G__73529 = cljs.core.count(c__4556__auto___73526);
var G__73530 = (0);
seq__72518_73463 = G__73527;
chunk__72519_73464 = G__73528;
count__72520_73465 = G__73529;
i__72521_73466 = G__73530;
continue;
} else {
var child_struct_73532 = cljs.core.first(seq__72518_73525__$1);
var children_73534 = shadow.dom.dom_node(child_struct_73532);
if(cljs.core.seq_QMARK_(children_73534)){
var seq__72579_73535 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_73534));
var chunk__72581_73536 = null;
var count__72582_73537 = (0);
var i__72583_73538 = (0);
while(true){
if((i__72583_73538 < count__72582_73537)){
var child_73539 = chunk__72581_73536.cljs$core$IIndexed$_nth$arity$2(null,i__72583_73538);
if(cljs.core.truth_(child_73539)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_73539);


var G__73542 = seq__72579_73535;
var G__73543 = chunk__72581_73536;
var G__73544 = count__72582_73537;
var G__73545 = (i__72583_73538 + (1));
seq__72579_73535 = G__73542;
chunk__72581_73536 = G__73543;
count__72582_73537 = G__73544;
i__72583_73538 = G__73545;
continue;
} else {
var G__73546 = seq__72579_73535;
var G__73547 = chunk__72581_73536;
var G__73548 = count__72582_73537;
var G__73549 = (i__72583_73538 + (1));
seq__72579_73535 = G__73546;
chunk__72581_73536 = G__73547;
count__72582_73537 = G__73548;
i__72583_73538 = G__73549;
continue;
}
} else {
var temp__5753__auto___73551__$1 = cljs.core.seq(seq__72579_73535);
if(temp__5753__auto___73551__$1){
var seq__72579_73552__$1 = temp__5753__auto___73551__$1;
if(cljs.core.chunked_seq_QMARK_(seq__72579_73552__$1)){
var c__4556__auto___73554 = cljs.core.chunk_first(seq__72579_73552__$1);
var G__73555 = cljs.core.chunk_rest(seq__72579_73552__$1);
var G__73556 = c__4556__auto___73554;
var G__73557 = cljs.core.count(c__4556__auto___73554);
var G__73558 = (0);
seq__72579_73535 = G__73555;
chunk__72581_73536 = G__73556;
count__72582_73537 = G__73557;
i__72583_73538 = G__73558;
continue;
} else {
var child_73559 = cljs.core.first(seq__72579_73552__$1);
if(cljs.core.truth_(child_73559)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_73559);


var G__73560 = cljs.core.next(seq__72579_73552__$1);
var G__73561 = null;
var G__73562 = (0);
var G__73563 = (0);
seq__72579_73535 = G__73560;
chunk__72581_73536 = G__73561;
count__72582_73537 = G__73562;
i__72583_73538 = G__73563;
continue;
} else {
var G__73564 = cljs.core.next(seq__72579_73552__$1);
var G__73565 = null;
var G__73566 = (0);
var G__73567 = (0);
seq__72579_73535 = G__73564;
chunk__72581_73536 = G__73565;
count__72582_73537 = G__73566;
i__72583_73538 = G__73567;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_73534);
}


var G__73569 = cljs.core.next(seq__72518_73525__$1);
var G__73570 = null;
var G__73571 = (0);
var G__73572 = (0);
seq__72518_73463 = G__73569;
chunk__72519_73464 = G__73570;
count__72520_73465 = G__73571;
i__72521_73466 = G__73572;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__72599 = cljs.core.seq(node);
var chunk__72600 = null;
var count__72601 = (0);
var i__72602 = (0);
while(true){
if((i__72602 < count__72601)){
var n = chunk__72600.cljs$core$IIndexed$_nth$arity$2(null,i__72602);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__73579 = seq__72599;
var G__73580 = chunk__72600;
var G__73581 = count__72601;
var G__73582 = (i__72602 + (1));
seq__72599 = G__73579;
chunk__72600 = G__73580;
count__72601 = G__73581;
i__72602 = G__73582;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__72599);
if(temp__5753__auto__){
var seq__72599__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72599__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__72599__$1);
var G__73587 = cljs.core.chunk_rest(seq__72599__$1);
var G__73588 = c__4556__auto__;
var G__73589 = cljs.core.count(c__4556__auto__);
var G__73590 = (0);
seq__72599 = G__73587;
chunk__72600 = G__73588;
count__72601 = G__73589;
i__72602 = G__73590;
continue;
} else {
var n = cljs.core.first(seq__72599__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__73594 = cljs.core.next(seq__72599__$1);
var G__73595 = null;
var G__73596 = (0);
var G__73597 = (0);
seq__72599 = G__73594;
chunk__72600 = G__73595;
count__72601 = G__73596;
i__72602 = G__73597;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__72617 = arguments.length;
switch (G__72617) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__72625 = arguments.length;
switch (G__72625) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__72633 = arguments.length;
switch (G__72633) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73615 = arguments.length;
var i__4737__auto___73616 = (0);
while(true){
if((i__4737__auto___73616 < len__4736__auto___73615)){
args__4742__auto__.push((arguments[i__4737__auto___73616]));

var G__73617 = (i__4737__auto___73616 + (1));
i__4737__auto___73616 = G__73617;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__72650_73623 = cljs.core.seq(nodes);
var chunk__72651_73624 = null;
var count__72652_73625 = (0);
var i__72653_73626 = (0);
while(true){
if((i__72653_73626 < count__72652_73625)){
var node_73627 = chunk__72651_73624.cljs$core$IIndexed$_nth$arity$2(null,i__72653_73626);
fragment.appendChild(shadow.dom._to_dom(node_73627));


var G__73629 = seq__72650_73623;
var G__73630 = chunk__72651_73624;
var G__73631 = count__72652_73625;
var G__73632 = (i__72653_73626 + (1));
seq__72650_73623 = G__73629;
chunk__72651_73624 = G__73630;
count__72652_73625 = G__73631;
i__72653_73626 = G__73632;
continue;
} else {
var temp__5753__auto___73633 = cljs.core.seq(seq__72650_73623);
if(temp__5753__auto___73633){
var seq__72650_73634__$1 = temp__5753__auto___73633;
if(cljs.core.chunked_seq_QMARK_(seq__72650_73634__$1)){
var c__4556__auto___73635 = cljs.core.chunk_first(seq__72650_73634__$1);
var G__73639 = cljs.core.chunk_rest(seq__72650_73634__$1);
var G__73640 = c__4556__auto___73635;
var G__73641 = cljs.core.count(c__4556__auto___73635);
var G__73642 = (0);
seq__72650_73623 = G__73639;
chunk__72651_73624 = G__73640;
count__72652_73625 = G__73641;
i__72653_73626 = G__73642;
continue;
} else {
var node_73643 = cljs.core.first(seq__72650_73634__$1);
fragment.appendChild(shadow.dom._to_dom(node_73643));


var G__73644 = cljs.core.next(seq__72650_73634__$1);
var G__73645 = null;
var G__73646 = (0);
var G__73647 = (0);
seq__72650_73623 = G__73644;
chunk__72651_73624 = G__73645;
count__72652_73625 = G__73646;
i__72653_73626 = G__73647;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq72646){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72646));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__72655_73651 = cljs.core.seq(scripts);
var chunk__72656_73652 = null;
var count__72657_73653 = (0);
var i__72658_73654 = (0);
while(true){
if((i__72658_73654 < count__72657_73653)){
var vec__72672_73655 = chunk__72656_73652.cljs$core$IIndexed$_nth$arity$2(null,i__72658_73654);
var script_tag_73656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72672_73655,(0),null);
var script_body_73657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72672_73655,(1),null);
eval(script_body_73657);


var G__73658 = seq__72655_73651;
var G__73659 = chunk__72656_73652;
var G__73660 = count__72657_73653;
var G__73661 = (i__72658_73654 + (1));
seq__72655_73651 = G__73658;
chunk__72656_73652 = G__73659;
count__72657_73653 = G__73660;
i__72658_73654 = G__73661;
continue;
} else {
var temp__5753__auto___73662 = cljs.core.seq(seq__72655_73651);
if(temp__5753__auto___73662){
var seq__72655_73663__$1 = temp__5753__auto___73662;
if(cljs.core.chunked_seq_QMARK_(seq__72655_73663__$1)){
var c__4556__auto___73664 = cljs.core.chunk_first(seq__72655_73663__$1);
var G__73667 = cljs.core.chunk_rest(seq__72655_73663__$1);
var G__73668 = c__4556__auto___73664;
var G__73669 = cljs.core.count(c__4556__auto___73664);
var G__73670 = (0);
seq__72655_73651 = G__73667;
chunk__72656_73652 = G__73668;
count__72657_73653 = G__73669;
i__72658_73654 = G__73670;
continue;
} else {
var vec__72678_73677 = cljs.core.first(seq__72655_73663__$1);
var script_tag_73678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72678_73677,(0),null);
var script_body_73679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72678_73677,(1),null);
eval(script_body_73679);


var G__73680 = cljs.core.next(seq__72655_73663__$1);
var G__73681 = null;
var G__73682 = (0);
var G__73683 = (0);
seq__72655_73651 = G__73680;
chunk__72656_73652 = G__73681;
count__72657_73653 = G__73682;
i__72658_73654 = G__73683;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__72684){
var vec__72685 = p__72684;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72685,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72685,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__72694 = arguments.length;
switch (G__72694) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__72708 = cljs.core.seq(style_keys);
var chunk__72709 = null;
var count__72710 = (0);
var i__72711 = (0);
while(true){
if((i__72711 < count__72710)){
var it = chunk__72709.cljs$core$IIndexed$_nth$arity$2(null,i__72711);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__73698 = seq__72708;
var G__73699 = chunk__72709;
var G__73700 = count__72710;
var G__73701 = (i__72711 + (1));
seq__72708 = G__73698;
chunk__72709 = G__73699;
count__72710 = G__73700;
i__72711 = G__73701;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__72708);
if(temp__5753__auto__){
var seq__72708__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72708__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__72708__$1);
var G__73704 = cljs.core.chunk_rest(seq__72708__$1);
var G__73705 = c__4556__auto__;
var G__73706 = cljs.core.count(c__4556__auto__);
var G__73707 = (0);
seq__72708 = G__73704;
chunk__72709 = G__73705;
count__72710 = G__73706;
i__72711 = G__73707;
continue;
} else {
var it = cljs.core.first(seq__72708__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__73710 = cljs.core.next(seq__72708__$1);
var G__73711 = null;
var G__73712 = (0);
var G__73713 = (0);
seq__72708 = G__73710;
chunk__72709 = G__73711;
count__72710 = G__73712;
i__72711 = G__73713;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k72717,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__72724 = k72717;
var G__72724__$1 = (((G__72724 instanceof cljs.core.Keyword))?G__72724.fqn:null);
switch (G__72724__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72717,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__72728){
var vec__72730 = p__72728;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72730,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72730,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72716){
var self__ = this;
var G__72716__$1 = this;
return (new cljs.core.RecordIter((0),G__72716__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72718,other72719){
var self__ = this;
var this72718__$1 = this;
return (((!((other72719 == null)))) && ((this72718__$1.constructor === other72719.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72718__$1.x,other72719.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72718__$1.y,other72719.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72718__$1.__extmap,other72719.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__72716){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__72748 = cljs.core.keyword_identical_QMARK_;
var expr__72749 = k__4388__auto__;
if(cljs.core.truth_((pred__72748.cljs$core$IFn$_invoke$arity$2 ? pred__72748.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__72749) : pred__72748.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__72749)))){
return (new shadow.dom.Coordinate(G__72716,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72748.cljs$core$IFn$_invoke$arity$2 ? pred__72748.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__72749) : pred__72748.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__72749)))){
return (new shadow.dom.Coordinate(self__.x,G__72716,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__72716),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__72716){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__72716,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__72720){
var extmap__4419__auto__ = (function (){var G__72758 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72720,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__72720)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72758);
} else {
return G__72758;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__72720),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__72720),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k72774,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__72780 = k72774;
var G__72780__$1 = (((G__72780 instanceof cljs.core.Keyword))?G__72780.fqn:null);
switch (G__72780__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72774,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__72782){
var vec__72783 = p__72782;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72783,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72783,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72773){
var self__ = this;
var G__72773__$1 = this;
return (new cljs.core.RecordIter((0),G__72773__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72775,other72776){
var self__ = this;
var this72775__$1 = this;
return (((!((other72776 == null)))) && ((this72775__$1.constructor === other72776.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72775__$1.w,other72776.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72775__$1.h,other72776.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72775__$1.__extmap,other72776.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__72773){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__72807 = cljs.core.keyword_identical_QMARK_;
var expr__72808 = k__4388__auto__;
if(cljs.core.truth_((pred__72807.cljs$core$IFn$_invoke$arity$2 ? pred__72807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__72808) : pred__72807.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__72808)))){
return (new shadow.dom.Size(G__72773,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72807.cljs$core$IFn$_invoke$arity$2 ? pred__72807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__72808) : pred__72807.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__72808)))){
return (new shadow.dom.Size(self__.w,G__72773,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__72773),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__72773){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__72773,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__72778){
var extmap__4419__auto__ = (function (){var G__72826 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72778,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__72778)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72826);
} else {
return G__72826;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__72778),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__72778),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__73842 = (i + (1));
var G__73843 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__73842;
ret = G__73843;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__72848){
var vec__72849 = p__72848;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72849,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72849,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__72855 = arguments.length;
switch (G__72855) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__73877 = ps;
var G__73878 = (i + (1));
el__$1 = G__73877;
i = G__73878;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__72890 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72890,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72890,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72890,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__72900_73903 = cljs.core.seq(props);
var chunk__72902_73904 = null;
var count__72904_73905 = (0);
var i__72905_73906 = (0);
while(true){
if((i__72905_73906 < count__72904_73905)){
var vec__72945_73909 = chunk__72902_73904.cljs$core$IIndexed$_nth$arity$2(null,i__72905_73906);
var k_73910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72945_73909,(0),null);
var v_73911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72945_73909,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_73910);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_73910),v_73911);


var G__73917 = seq__72900_73903;
var G__73918 = chunk__72902_73904;
var G__73919 = count__72904_73905;
var G__73920 = (i__72905_73906 + (1));
seq__72900_73903 = G__73917;
chunk__72902_73904 = G__73918;
count__72904_73905 = G__73919;
i__72905_73906 = G__73920;
continue;
} else {
var temp__5753__auto___73921 = cljs.core.seq(seq__72900_73903);
if(temp__5753__auto___73921){
var seq__72900_73922__$1 = temp__5753__auto___73921;
if(cljs.core.chunked_seq_QMARK_(seq__72900_73922__$1)){
var c__4556__auto___73923 = cljs.core.chunk_first(seq__72900_73922__$1);
var G__73924 = cljs.core.chunk_rest(seq__72900_73922__$1);
var G__73925 = c__4556__auto___73923;
var G__73926 = cljs.core.count(c__4556__auto___73923);
var G__73927 = (0);
seq__72900_73903 = G__73924;
chunk__72902_73904 = G__73925;
count__72904_73905 = G__73926;
i__72905_73906 = G__73927;
continue;
} else {
var vec__72960_73928 = cljs.core.first(seq__72900_73922__$1);
var k_73929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72960_73928,(0),null);
var v_73930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72960_73928,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_73929);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_73929),v_73930);


var G__73937 = cljs.core.next(seq__72900_73922__$1);
var G__73938 = null;
var G__73939 = (0);
var G__73940 = (0);
seq__72900_73903 = G__73937;
chunk__72902_73904 = G__73938;
count__72904_73905 = G__73939;
i__72905_73906 = G__73940;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__73008 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73008,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73008,(1),null);
var seq__73012_73944 = cljs.core.seq(node_children);
var chunk__73014_73945 = null;
var count__73015_73946 = (0);
var i__73016_73947 = (0);
while(true){
if((i__73016_73947 < count__73015_73946)){
var child_struct_73949 = chunk__73014_73945.cljs$core$IIndexed$_nth$arity$2(null,i__73016_73947);
if((!((child_struct_73949 == null)))){
if(typeof child_struct_73949 === 'string'){
var text_73951 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_73951),child_struct_73949].join(''));
} else {
var children_73952 = shadow.dom.svg_node(child_struct_73949);
if(cljs.core.seq_QMARK_(children_73952)){
var seq__73114_73953 = cljs.core.seq(children_73952);
var chunk__73116_73954 = null;
var count__73117_73955 = (0);
var i__73118_73956 = (0);
while(true){
if((i__73118_73956 < count__73117_73955)){
var child_73957 = chunk__73116_73954.cljs$core$IIndexed$_nth$arity$2(null,i__73118_73956);
if(cljs.core.truth_(child_73957)){
node.appendChild(child_73957);


var G__73959 = seq__73114_73953;
var G__73960 = chunk__73116_73954;
var G__73961 = count__73117_73955;
var G__73962 = (i__73118_73956 + (1));
seq__73114_73953 = G__73959;
chunk__73116_73954 = G__73960;
count__73117_73955 = G__73961;
i__73118_73956 = G__73962;
continue;
} else {
var G__73963 = seq__73114_73953;
var G__73964 = chunk__73116_73954;
var G__73965 = count__73117_73955;
var G__73966 = (i__73118_73956 + (1));
seq__73114_73953 = G__73963;
chunk__73116_73954 = G__73964;
count__73117_73955 = G__73965;
i__73118_73956 = G__73966;
continue;
}
} else {
var temp__5753__auto___73967 = cljs.core.seq(seq__73114_73953);
if(temp__5753__auto___73967){
var seq__73114_73968__$1 = temp__5753__auto___73967;
if(cljs.core.chunked_seq_QMARK_(seq__73114_73968__$1)){
var c__4556__auto___73970 = cljs.core.chunk_first(seq__73114_73968__$1);
var G__73971 = cljs.core.chunk_rest(seq__73114_73968__$1);
var G__73972 = c__4556__auto___73970;
var G__73973 = cljs.core.count(c__4556__auto___73970);
var G__73974 = (0);
seq__73114_73953 = G__73971;
chunk__73116_73954 = G__73972;
count__73117_73955 = G__73973;
i__73118_73956 = G__73974;
continue;
} else {
var child_73975 = cljs.core.first(seq__73114_73968__$1);
if(cljs.core.truth_(child_73975)){
node.appendChild(child_73975);


var G__73977 = cljs.core.next(seq__73114_73968__$1);
var G__73978 = null;
var G__73979 = (0);
var G__73980 = (0);
seq__73114_73953 = G__73977;
chunk__73116_73954 = G__73978;
count__73117_73955 = G__73979;
i__73118_73956 = G__73980;
continue;
} else {
var G__73981 = cljs.core.next(seq__73114_73968__$1);
var G__73982 = null;
var G__73983 = (0);
var G__73984 = (0);
seq__73114_73953 = G__73981;
chunk__73116_73954 = G__73982;
count__73117_73955 = G__73983;
i__73118_73956 = G__73984;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_73952);
}
}


var G__73985 = seq__73012_73944;
var G__73986 = chunk__73014_73945;
var G__73987 = count__73015_73946;
var G__73988 = (i__73016_73947 + (1));
seq__73012_73944 = G__73985;
chunk__73014_73945 = G__73986;
count__73015_73946 = G__73987;
i__73016_73947 = G__73988;
continue;
} else {
var G__73993 = seq__73012_73944;
var G__73994 = chunk__73014_73945;
var G__73995 = count__73015_73946;
var G__73996 = (i__73016_73947 + (1));
seq__73012_73944 = G__73993;
chunk__73014_73945 = G__73994;
count__73015_73946 = G__73995;
i__73016_73947 = G__73996;
continue;
}
} else {
var temp__5753__auto___73997 = cljs.core.seq(seq__73012_73944);
if(temp__5753__auto___73997){
var seq__73012_73998__$1 = temp__5753__auto___73997;
if(cljs.core.chunked_seq_QMARK_(seq__73012_73998__$1)){
var c__4556__auto___73999 = cljs.core.chunk_first(seq__73012_73998__$1);
var G__74001 = cljs.core.chunk_rest(seq__73012_73998__$1);
var G__74002 = c__4556__auto___73999;
var G__74003 = cljs.core.count(c__4556__auto___73999);
var G__74004 = (0);
seq__73012_73944 = G__74001;
chunk__73014_73945 = G__74002;
count__73015_73946 = G__74003;
i__73016_73947 = G__74004;
continue;
} else {
var child_struct_74007 = cljs.core.first(seq__73012_73998__$1);
if((!((child_struct_74007 == null)))){
if(typeof child_struct_74007 === 'string'){
var text_74008 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_74008),child_struct_74007].join(''));
} else {
var children_74010 = shadow.dom.svg_node(child_struct_74007);
if(cljs.core.seq_QMARK_(children_74010)){
var seq__73147_74011 = cljs.core.seq(children_74010);
var chunk__73149_74012 = null;
var count__73150_74013 = (0);
var i__73151_74014 = (0);
while(true){
if((i__73151_74014 < count__73150_74013)){
var child_74016 = chunk__73149_74012.cljs$core$IIndexed$_nth$arity$2(null,i__73151_74014);
if(cljs.core.truth_(child_74016)){
node.appendChild(child_74016);


var G__74018 = seq__73147_74011;
var G__74019 = chunk__73149_74012;
var G__74020 = count__73150_74013;
var G__74021 = (i__73151_74014 + (1));
seq__73147_74011 = G__74018;
chunk__73149_74012 = G__74019;
count__73150_74013 = G__74020;
i__73151_74014 = G__74021;
continue;
} else {
var G__74022 = seq__73147_74011;
var G__74023 = chunk__73149_74012;
var G__74024 = count__73150_74013;
var G__74025 = (i__73151_74014 + (1));
seq__73147_74011 = G__74022;
chunk__73149_74012 = G__74023;
count__73150_74013 = G__74024;
i__73151_74014 = G__74025;
continue;
}
} else {
var temp__5753__auto___74026__$1 = cljs.core.seq(seq__73147_74011);
if(temp__5753__auto___74026__$1){
var seq__73147_74027__$1 = temp__5753__auto___74026__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73147_74027__$1)){
var c__4556__auto___74028 = cljs.core.chunk_first(seq__73147_74027__$1);
var G__74029 = cljs.core.chunk_rest(seq__73147_74027__$1);
var G__74030 = c__4556__auto___74028;
var G__74031 = cljs.core.count(c__4556__auto___74028);
var G__74032 = (0);
seq__73147_74011 = G__74029;
chunk__73149_74012 = G__74030;
count__73150_74013 = G__74031;
i__73151_74014 = G__74032;
continue;
} else {
var child_74033 = cljs.core.first(seq__73147_74027__$1);
if(cljs.core.truth_(child_74033)){
node.appendChild(child_74033);


var G__74034 = cljs.core.next(seq__73147_74027__$1);
var G__74035 = null;
var G__74036 = (0);
var G__74037 = (0);
seq__73147_74011 = G__74034;
chunk__73149_74012 = G__74035;
count__73150_74013 = G__74036;
i__73151_74014 = G__74037;
continue;
} else {
var G__74040 = cljs.core.next(seq__73147_74027__$1);
var G__74041 = null;
var G__74042 = (0);
var G__74043 = (0);
seq__73147_74011 = G__74040;
chunk__73149_74012 = G__74041;
count__73150_74013 = G__74042;
i__73151_74014 = G__74043;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_74010);
}
}


var G__74044 = cljs.core.next(seq__73012_73998__$1);
var G__74045 = null;
var G__74046 = (0);
var G__74047 = (0);
seq__73012_73944 = G__74044;
chunk__73014_73945 = G__74045;
count__73015_73946 = G__74046;
i__73016_73947 = G__74047;
continue;
} else {
var G__74048 = cljs.core.next(seq__73012_73998__$1);
var G__74049 = null;
var G__74050 = (0);
var G__74051 = (0);
seq__73012_73944 = G__74048;
chunk__73014_73945 = G__74049;
count__73015_73946 = G__74050;
i__73016_73947 = G__74051;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___74066 = arguments.length;
var i__4737__auto___74068 = (0);
while(true){
if((i__4737__auto___74068 < len__4736__auto___74066)){
args__4742__auto__.push((arguments[i__4737__auto___74068]));

var G__74070 = (i__4737__auto___74068 + (1));
i__4737__auto___74068 = G__74070;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq73199){
var G__73200 = cljs.core.first(seq73199);
var seq73199__$1 = cljs.core.next(seq73199);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73200,seq73199__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__73223 = arguments.length;
switch (G__73223) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__69613__auto___74083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = (function (state_73237){
var state_val_73238 = (state_73237[(1)]);
if((state_val_73238 === (1))){
var state_73237__$1 = state_73237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73237__$1,(2),once_or_cleanup);
} else {
if((state_val_73238 === (2))){
var inst_73233 = (state_73237[(2)]);
var inst_73234 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_73237__$1 = (function (){var statearr_73244 = state_73237;
(statearr_73244[(7)] = inst_73233);

return statearr_73244;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_73237__$1,inst_73234);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__69361__auto__ = null;
var shadow$dom$state_machine__69361__auto____0 = (function (){
var statearr_73245 = [null,null,null,null,null,null,null,null];
(statearr_73245[(0)] = shadow$dom$state_machine__69361__auto__);

(statearr_73245[(1)] = (1));

return statearr_73245;
});
var shadow$dom$state_machine__69361__auto____1 = (function (state_73237){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_73237);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e73246){var ex__69364__auto__ = e73246;
var statearr_73248_74087 = state_73237;
(statearr_73248_74087[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_73237[(4)]))){
var statearr_73250_74088 = state_73237;
(statearr_73250_74088[(1)] = cljs.core.first((state_73237[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74089 = state_73237;
state_73237 = G__74089;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
shadow$dom$state_machine__69361__auto__ = function(state_73237){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__69361__auto____0.call(this);
case 1:
return shadow$dom$state_machine__69361__auto____1.call(this,state_73237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__69361__auto____0;
shadow$dom$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__69361__auto____1;
return shadow$dom$state_machine__69361__auto__;
})()
})();
var state__69615__auto__ = (function (){var statearr_73253 = f__69614__auto__();
(statearr_73253[(6)] = c__69613__auto___74083);

return statearr_73253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
