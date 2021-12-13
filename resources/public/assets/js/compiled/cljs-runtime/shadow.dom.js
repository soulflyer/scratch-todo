goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_70569 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_70569(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_70571 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_70571(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__69785 = coll;
var G__69786 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__69785,G__69786) : shadow.dom.lazy_native_coll_seq.call(null,G__69785,G__69786));
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
var G__69798 = arguments.length;
switch (G__69798) {
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
var G__69800 = arguments.length;
switch (G__69800) {
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
var G__69811 = arguments.length;
switch (G__69811) {
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
var G__69816 = arguments.length;
switch (G__69816) {
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
var G__69819 = arguments.length;
switch (G__69819) {
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
var G__69825 = arguments.length;
switch (G__69825) {
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
}catch (e69826){if((e69826 instanceof Object)){
var e = e69826;
return console.log("didnt support attachEvent",el,e);
} else {
throw e69826;

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
var seq__69828 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__69829 = null;
var count__69830 = (0);
var i__69831 = (0);
while(true){
if((i__69831 < count__69830)){
var el = chunk__69829.cljs$core$IIndexed$_nth$arity$2(null,i__69831);
var handler_70618__$1 = ((function (seq__69828,chunk__69829,count__69830,i__69831,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__69828,chunk__69829,count__69830,i__69831,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_70618__$1);


var G__70621 = seq__69828;
var G__70622 = chunk__69829;
var G__70623 = count__69830;
var G__70624 = (i__69831 + (1));
seq__69828 = G__70621;
chunk__69829 = G__70622;
count__69830 = G__70623;
i__69831 = G__70624;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__69828);
if(temp__5753__auto__){
var seq__69828__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69828__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__69828__$1);
var G__70627 = cljs.core.chunk_rest(seq__69828__$1);
var G__70628 = c__4556__auto__;
var G__70629 = cljs.core.count(c__4556__auto__);
var G__70630 = (0);
seq__69828 = G__70627;
chunk__69829 = G__70628;
count__69830 = G__70629;
i__69831 = G__70630;
continue;
} else {
var el = cljs.core.first(seq__69828__$1);
var handler_70634__$1 = ((function (seq__69828,chunk__69829,count__69830,i__69831,el,seq__69828__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__69828,chunk__69829,count__69830,i__69831,el,seq__69828__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_70634__$1);


var G__70636 = cljs.core.next(seq__69828__$1);
var G__70637 = null;
var G__70638 = (0);
var G__70639 = (0);
seq__69828 = G__70636;
chunk__69829 = G__70637;
count__69830 = G__70638;
i__69831 = G__70639;
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
var G__69839 = arguments.length;
switch (G__69839) {
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
var seq__69844 = cljs.core.seq(events);
var chunk__69845 = null;
var count__69846 = (0);
var i__69847 = (0);
while(true){
if((i__69847 < count__69846)){
var vec__69861 = chunk__69845.cljs$core$IIndexed$_nth$arity$2(null,i__69847);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69861,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69861,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__70664 = seq__69844;
var G__70665 = chunk__69845;
var G__70666 = count__69846;
var G__70667 = (i__69847 + (1));
seq__69844 = G__70664;
chunk__69845 = G__70665;
count__69846 = G__70666;
i__69847 = G__70667;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__69844);
if(temp__5753__auto__){
var seq__69844__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69844__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__69844__$1);
var G__70669 = cljs.core.chunk_rest(seq__69844__$1);
var G__70670 = c__4556__auto__;
var G__70671 = cljs.core.count(c__4556__auto__);
var G__70672 = (0);
seq__69844 = G__70669;
chunk__69845 = G__70670;
count__69846 = G__70671;
i__69847 = G__70672;
continue;
} else {
var vec__69865 = cljs.core.first(seq__69844__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69865,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69865,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__70674 = cljs.core.next(seq__69844__$1);
var G__70675 = null;
var G__70676 = (0);
var G__70677 = (0);
seq__69844 = G__70674;
chunk__69845 = G__70675;
count__69846 = G__70676;
i__69847 = G__70677;
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
var seq__69872 = cljs.core.seq(styles);
var chunk__69873 = null;
var count__69874 = (0);
var i__69875 = (0);
while(true){
if((i__69875 < count__69874)){
var vec__69888 = chunk__69873.cljs$core$IIndexed$_nth$arity$2(null,i__69875);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69888,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69888,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__70679 = seq__69872;
var G__70680 = chunk__69873;
var G__70681 = count__69874;
var G__70682 = (i__69875 + (1));
seq__69872 = G__70679;
chunk__69873 = G__70680;
count__69874 = G__70681;
i__69875 = G__70682;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__69872);
if(temp__5753__auto__){
var seq__69872__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69872__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__69872__$1);
var G__70689 = cljs.core.chunk_rest(seq__69872__$1);
var G__70690 = c__4556__auto__;
var G__70691 = cljs.core.count(c__4556__auto__);
var G__70692 = (0);
seq__69872 = G__70689;
chunk__69873 = G__70690;
count__69874 = G__70691;
i__69875 = G__70692;
continue;
} else {
var vec__69893 = cljs.core.first(seq__69872__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69893,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69893,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__70695 = cljs.core.next(seq__69872__$1);
var G__70696 = null;
var G__70697 = (0);
var G__70698 = (0);
seq__69872 = G__70695;
chunk__69873 = G__70696;
count__69874 = G__70697;
i__69875 = G__70698;
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
var G__69896_70700 = key;
var G__69896_70701__$1 = (((G__69896_70700 instanceof cljs.core.Keyword))?G__69896_70700.fqn:null);
switch (G__69896_70701__$1) {
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
var ks_70711 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_70711,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_70711,"aria-");
}
})())){
el.setAttribute(ks_70711,value);
} else {
(el[ks_70711] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__69936){
var map__69937 = p__69936;
var map__69937__$1 = (((((!((map__69937 == null))))?(((((map__69937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69937):map__69937);
var props = map__69937__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69937__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__69953 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69953,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69953,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69953,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__69956 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__69956,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__69956;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__69959 = arguments.length;
switch (G__69959) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__69970){
var vec__69972 = p__69970;
var seq__69973 = cljs.core.seq(vec__69972);
var first__69974 = cljs.core.first(seq__69973);
var seq__69973__$1 = cljs.core.next(seq__69973);
var nn = first__69974;
var first__69974__$1 = cljs.core.first(seq__69973__$1);
var seq__69973__$2 = cljs.core.next(seq__69973__$1);
var np = first__69974__$1;
var nc = seq__69973__$2;
var node = vec__69972;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__69975 = nn;
var G__69976 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__69975,G__69976) : create_fn.call(null,G__69975,G__69976));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__69978 = nn;
var G__69979 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__69978,G__69979) : create_fn.call(null,G__69978,G__69979));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__69981 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69981,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69981,(1),null);
var seq__69984_70755 = cljs.core.seq(node_children);
var chunk__69985_70756 = null;
var count__69986_70757 = (0);
var i__69987_70758 = (0);
while(true){
if((i__69987_70758 < count__69986_70757)){
var child_struct_70760 = chunk__69985_70756.cljs$core$IIndexed$_nth$arity$2(null,i__69987_70758);
var children_70761 = shadow.dom.dom_node(child_struct_70760);
if(cljs.core.seq_QMARK_(children_70761)){
var seq__70012_70762 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_70761));
var chunk__70014_70763 = null;
var count__70015_70764 = (0);
var i__70016_70765 = (0);
while(true){
if((i__70016_70765 < count__70015_70764)){
var child_70767 = chunk__70014_70763.cljs$core$IIndexed$_nth$arity$2(null,i__70016_70765);
if(cljs.core.truth_(child_70767)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_70767);


var G__70768 = seq__70012_70762;
var G__70769 = chunk__70014_70763;
var G__70770 = count__70015_70764;
var G__70771 = (i__70016_70765 + (1));
seq__70012_70762 = G__70768;
chunk__70014_70763 = G__70769;
count__70015_70764 = G__70770;
i__70016_70765 = G__70771;
continue;
} else {
var G__70775 = seq__70012_70762;
var G__70776 = chunk__70014_70763;
var G__70777 = count__70015_70764;
var G__70778 = (i__70016_70765 + (1));
seq__70012_70762 = G__70775;
chunk__70014_70763 = G__70776;
count__70015_70764 = G__70777;
i__70016_70765 = G__70778;
continue;
}
} else {
var temp__5753__auto___70779 = cljs.core.seq(seq__70012_70762);
if(temp__5753__auto___70779){
var seq__70012_70780__$1 = temp__5753__auto___70779;
if(cljs.core.chunked_seq_QMARK_(seq__70012_70780__$1)){
var c__4556__auto___70781 = cljs.core.chunk_first(seq__70012_70780__$1);
var G__70782 = cljs.core.chunk_rest(seq__70012_70780__$1);
var G__70783 = c__4556__auto___70781;
var G__70784 = cljs.core.count(c__4556__auto___70781);
var G__70785 = (0);
seq__70012_70762 = G__70782;
chunk__70014_70763 = G__70783;
count__70015_70764 = G__70784;
i__70016_70765 = G__70785;
continue;
} else {
var child_70786 = cljs.core.first(seq__70012_70780__$1);
if(cljs.core.truth_(child_70786)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_70786);


var G__70787 = cljs.core.next(seq__70012_70780__$1);
var G__70788 = null;
var G__70789 = (0);
var G__70790 = (0);
seq__70012_70762 = G__70787;
chunk__70014_70763 = G__70788;
count__70015_70764 = G__70789;
i__70016_70765 = G__70790;
continue;
} else {
var G__70792 = cljs.core.next(seq__70012_70780__$1);
var G__70793 = null;
var G__70794 = (0);
var G__70795 = (0);
seq__70012_70762 = G__70792;
chunk__70014_70763 = G__70793;
count__70015_70764 = G__70794;
i__70016_70765 = G__70795;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_70761);
}


var G__70799 = seq__69984_70755;
var G__70800 = chunk__69985_70756;
var G__70801 = count__69986_70757;
var G__70802 = (i__69987_70758 + (1));
seq__69984_70755 = G__70799;
chunk__69985_70756 = G__70800;
count__69986_70757 = G__70801;
i__69987_70758 = G__70802;
continue;
} else {
var temp__5753__auto___70803 = cljs.core.seq(seq__69984_70755);
if(temp__5753__auto___70803){
var seq__69984_70804__$1 = temp__5753__auto___70803;
if(cljs.core.chunked_seq_QMARK_(seq__69984_70804__$1)){
var c__4556__auto___70805 = cljs.core.chunk_first(seq__69984_70804__$1);
var G__70806 = cljs.core.chunk_rest(seq__69984_70804__$1);
var G__70807 = c__4556__auto___70805;
var G__70808 = cljs.core.count(c__4556__auto___70805);
var G__70809 = (0);
seq__69984_70755 = G__70806;
chunk__69985_70756 = G__70807;
count__69986_70757 = G__70808;
i__69987_70758 = G__70809;
continue;
} else {
var child_struct_70811 = cljs.core.first(seq__69984_70804__$1);
var children_70812 = shadow.dom.dom_node(child_struct_70811);
if(cljs.core.seq_QMARK_(children_70812)){
var seq__70033_70813 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_70812));
var chunk__70035_70814 = null;
var count__70036_70815 = (0);
var i__70037_70816 = (0);
while(true){
if((i__70037_70816 < count__70036_70815)){
var child_70817 = chunk__70035_70814.cljs$core$IIndexed$_nth$arity$2(null,i__70037_70816);
if(cljs.core.truth_(child_70817)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_70817);


var G__70821 = seq__70033_70813;
var G__70822 = chunk__70035_70814;
var G__70823 = count__70036_70815;
var G__70824 = (i__70037_70816 + (1));
seq__70033_70813 = G__70821;
chunk__70035_70814 = G__70822;
count__70036_70815 = G__70823;
i__70037_70816 = G__70824;
continue;
} else {
var G__70825 = seq__70033_70813;
var G__70826 = chunk__70035_70814;
var G__70827 = count__70036_70815;
var G__70828 = (i__70037_70816 + (1));
seq__70033_70813 = G__70825;
chunk__70035_70814 = G__70826;
count__70036_70815 = G__70827;
i__70037_70816 = G__70828;
continue;
}
} else {
var temp__5753__auto___70829__$1 = cljs.core.seq(seq__70033_70813);
if(temp__5753__auto___70829__$1){
var seq__70033_70830__$1 = temp__5753__auto___70829__$1;
if(cljs.core.chunked_seq_QMARK_(seq__70033_70830__$1)){
var c__4556__auto___70831 = cljs.core.chunk_first(seq__70033_70830__$1);
var G__70832 = cljs.core.chunk_rest(seq__70033_70830__$1);
var G__70833 = c__4556__auto___70831;
var G__70834 = cljs.core.count(c__4556__auto___70831);
var G__70835 = (0);
seq__70033_70813 = G__70832;
chunk__70035_70814 = G__70833;
count__70036_70815 = G__70834;
i__70037_70816 = G__70835;
continue;
} else {
var child_70837 = cljs.core.first(seq__70033_70830__$1);
if(cljs.core.truth_(child_70837)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_70837);


var G__70841 = cljs.core.next(seq__70033_70830__$1);
var G__70842 = null;
var G__70843 = (0);
var G__70844 = (0);
seq__70033_70813 = G__70841;
chunk__70035_70814 = G__70842;
count__70036_70815 = G__70843;
i__70037_70816 = G__70844;
continue;
} else {
var G__70845 = cljs.core.next(seq__70033_70830__$1);
var G__70846 = null;
var G__70847 = (0);
var G__70848 = (0);
seq__70033_70813 = G__70845;
chunk__70035_70814 = G__70846;
count__70036_70815 = G__70847;
i__70037_70816 = G__70848;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_70812);
}


var G__70850 = cljs.core.next(seq__69984_70804__$1);
var G__70851 = null;
var G__70852 = (0);
var G__70853 = (0);
seq__69984_70755 = G__70850;
chunk__69985_70756 = G__70851;
count__69986_70757 = G__70852;
i__69987_70758 = G__70853;
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
var seq__70053 = cljs.core.seq(node);
var chunk__70054 = null;
var count__70055 = (0);
var i__70056 = (0);
while(true){
if((i__70056 < count__70055)){
var n = chunk__70054.cljs$core$IIndexed$_nth$arity$2(null,i__70056);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__70860 = seq__70053;
var G__70861 = chunk__70054;
var G__70862 = count__70055;
var G__70863 = (i__70056 + (1));
seq__70053 = G__70860;
chunk__70054 = G__70861;
count__70055 = G__70862;
i__70056 = G__70863;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__70053);
if(temp__5753__auto__){
var seq__70053__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70053__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__70053__$1);
var G__70864 = cljs.core.chunk_rest(seq__70053__$1);
var G__70865 = c__4556__auto__;
var G__70866 = cljs.core.count(c__4556__auto__);
var G__70867 = (0);
seq__70053 = G__70864;
chunk__70054 = G__70865;
count__70055 = G__70866;
i__70056 = G__70867;
continue;
} else {
var n = cljs.core.first(seq__70053__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__70868 = cljs.core.next(seq__70053__$1);
var G__70869 = null;
var G__70870 = (0);
var G__70871 = (0);
seq__70053 = G__70868;
chunk__70054 = G__70869;
count__70055 = G__70870;
i__70056 = G__70871;
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
var G__70071 = arguments.length;
switch (G__70071) {
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
var G__70079 = arguments.length;
switch (G__70079) {
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
var G__70085 = arguments.length;
switch (G__70085) {
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
var len__4736__auto___70895 = arguments.length;
var i__4737__auto___70898 = (0);
while(true){
if((i__4737__auto___70898 < len__4736__auto___70895)){
args__4742__auto__.push((arguments[i__4737__auto___70898]));

var G__70900 = (i__4737__auto___70898 + (1));
i__4737__auto___70898 = G__70900;
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
var seq__70093_70907 = cljs.core.seq(nodes);
var chunk__70094_70908 = null;
var count__70095_70909 = (0);
var i__70096_70910 = (0);
while(true){
if((i__70096_70910 < count__70095_70909)){
var node_70911 = chunk__70094_70908.cljs$core$IIndexed$_nth$arity$2(null,i__70096_70910);
fragment.appendChild(shadow.dom._to_dom(node_70911));


var G__70913 = seq__70093_70907;
var G__70914 = chunk__70094_70908;
var G__70915 = count__70095_70909;
var G__70916 = (i__70096_70910 + (1));
seq__70093_70907 = G__70913;
chunk__70094_70908 = G__70914;
count__70095_70909 = G__70915;
i__70096_70910 = G__70916;
continue;
} else {
var temp__5753__auto___70921 = cljs.core.seq(seq__70093_70907);
if(temp__5753__auto___70921){
var seq__70093_70922__$1 = temp__5753__auto___70921;
if(cljs.core.chunked_seq_QMARK_(seq__70093_70922__$1)){
var c__4556__auto___70924 = cljs.core.chunk_first(seq__70093_70922__$1);
var G__70925 = cljs.core.chunk_rest(seq__70093_70922__$1);
var G__70926 = c__4556__auto___70924;
var G__70927 = cljs.core.count(c__4556__auto___70924);
var G__70928 = (0);
seq__70093_70907 = G__70925;
chunk__70094_70908 = G__70926;
count__70095_70909 = G__70927;
i__70096_70910 = G__70928;
continue;
} else {
var node_70931 = cljs.core.first(seq__70093_70922__$1);
fragment.appendChild(shadow.dom._to_dom(node_70931));


var G__70932 = cljs.core.next(seq__70093_70922__$1);
var G__70933 = null;
var G__70934 = (0);
var G__70935 = (0);
seq__70093_70907 = G__70932;
chunk__70094_70908 = G__70933;
count__70095_70909 = G__70934;
i__70096_70910 = G__70935;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq70091){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70091));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__70117_70940 = cljs.core.seq(scripts);
var chunk__70118_70941 = null;
var count__70119_70942 = (0);
var i__70120_70943 = (0);
while(true){
if((i__70120_70943 < count__70119_70942)){
var vec__70142_70944 = chunk__70118_70941.cljs$core$IIndexed$_nth$arity$2(null,i__70120_70943);
var script_tag_70945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70142_70944,(0),null);
var script_body_70946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70142_70944,(1),null);
eval(script_body_70946);


var G__70947 = seq__70117_70940;
var G__70948 = chunk__70118_70941;
var G__70949 = count__70119_70942;
var G__70950 = (i__70120_70943 + (1));
seq__70117_70940 = G__70947;
chunk__70118_70941 = G__70948;
count__70119_70942 = G__70949;
i__70120_70943 = G__70950;
continue;
} else {
var temp__5753__auto___70951 = cljs.core.seq(seq__70117_70940);
if(temp__5753__auto___70951){
var seq__70117_70958__$1 = temp__5753__auto___70951;
if(cljs.core.chunked_seq_QMARK_(seq__70117_70958__$1)){
var c__4556__auto___70962 = cljs.core.chunk_first(seq__70117_70958__$1);
var G__70964 = cljs.core.chunk_rest(seq__70117_70958__$1);
var G__70965 = c__4556__auto___70962;
var G__70966 = cljs.core.count(c__4556__auto___70962);
var G__70967 = (0);
seq__70117_70940 = G__70964;
chunk__70118_70941 = G__70965;
count__70119_70942 = G__70966;
i__70120_70943 = G__70967;
continue;
} else {
var vec__70156_70969 = cljs.core.first(seq__70117_70958__$1);
var script_tag_70970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70156_70969,(0),null);
var script_body_70971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70156_70969,(1),null);
eval(script_body_70971);


var G__70978 = cljs.core.next(seq__70117_70958__$1);
var G__70979 = null;
var G__70980 = (0);
var G__70981 = (0);
seq__70117_70940 = G__70978;
chunk__70118_70941 = G__70979;
count__70119_70942 = G__70980;
i__70120_70943 = G__70981;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__70165){
var vec__70167 = p__70165;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70167,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70167,(1),null);
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
var G__70176 = arguments.length;
switch (G__70176) {
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
var seq__70184 = cljs.core.seq(style_keys);
var chunk__70185 = null;
var count__70186 = (0);
var i__70187 = (0);
while(true){
if((i__70187 < count__70186)){
var it = chunk__70185.cljs$core$IIndexed$_nth$arity$2(null,i__70187);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__71012 = seq__70184;
var G__71013 = chunk__70185;
var G__71014 = count__70186;
var G__71015 = (i__70187 + (1));
seq__70184 = G__71012;
chunk__70185 = G__71013;
count__70186 = G__71014;
i__70187 = G__71015;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__70184);
if(temp__5753__auto__){
var seq__70184__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70184__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__70184__$1);
var G__71021 = cljs.core.chunk_rest(seq__70184__$1);
var G__71022 = c__4556__auto__;
var G__71023 = cljs.core.count(c__4556__auto__);
var G__71024 = (0);
seq__70184 = G__71021;
chunk__70185 = G__71022;
count__70186 = G__71023;
i__70187 = G__71024;
continue;
} else {
var it = cljs.core.first(seq__70184__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__71026 = cljs.core.next(seq__70184__$1);
var G__71027 = null;
var G__71028 = (0);
var G__71029 = (0);
seq__70184 = G__71026;
chunk__70185 = G__71027;
count__70186 = G__71028;
i__70187 = G__71029;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k70193,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__70202 = k70193;
var G__70202__$1 = (((G__70202 instanceof cljs.core.Keyword))?G__70202.fqn:null);
switch (G__70202__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k70193,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__70204){
var vec__70205 = p__70204;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70205,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70205,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70192){
var self__ = this;
var G__70192__$1 = this;
return (new cljs.core.RecordIter((0),G__70192__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this70194,other70195){
var self__ = this;
var this70194__$1 = this;
return (((!((other70195 == null)))) && ((this70194__$1.constructor === other70195.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70194__$1.x,other70195.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70194__$1.y,other70195.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70194__$1.__extmap,other70195.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__70192){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__70226 = cljs.core.keyword_identical_QMARK_;
var expr__70227 = k__4388__auto__;
if(cljs.core.truth_((pred__70226.cljs$core$IFn$_invoke$arity$2 ? pred__70226.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__70227) : pred__70226.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__70227)))){
return (new shadow.dom.Coordinate(G__70192,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__70226.cljs$core$IFn$_invoke$arity$2 ? pred__70226.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__70227) : pred__70226.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__70227)))){
return (new shadow.dom.Coordinate(self__.x,G__70192,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__70192),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__70192){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__70192,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__70197){
var extmap__4419__auto__ = (function (){var G__70235 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__70197,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__70197)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__70235);
} else {
return G__70235;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__70197),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__70197),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k70245,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__70252 = k70245;
var G__70252__$1 = (((G__70252 instanceof cljs.core.Keyword))?G__70252.fqn:null);
switch (G__70252__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k70245,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__70255){
var vec__70257 = p__70255;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70257,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70257,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70244){
var self__ = this;
var G__70244__$1 = this;
return (new cljs.core.RecordIter((0),G__70244__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this70246,other70247){
var self__ = this;
var this70246__$1 = this;
return (((!((other70247 == null)))) && ((this70246__$1.constructor === other70247.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70246__$1.w,other70247.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70246__$1.h,other70247.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70246__$1.__extmap,other70247.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__70244){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__70274 = cljs.core.keyword_identical_QMARK_;
var expr__70275 = k__4388__auto__;
if(cljs.core.truth_((pred__70274.cljs$core$IFn$_invoke$arity$2 ? pred__70274.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__70275) : pred__70274.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__70275)))){
return (new shadow.dom.Size(G__70244,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__70274.cljs$core$IFn$_invoke$arity$2 ? pred__70274.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__70275) : pred__70274.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__70275)))){
return (new shadow.dom.Size(self__.w,G__70244,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__70244),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__70244){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__70244,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__70249){
var extmap__4419__auto__ = (function (){var G__70296 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__70249,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__70249)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__70296);
} else {
return G__70296;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__70249),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__70249),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__71195 = (i + (1));
var G__71196 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__71195;
ret = G__71196;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__70317){
var vec__70318 = p__70317;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70318,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70318,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__70334 = arguments.length;
switch (G__70334) {
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
var G__71269 = ps;
var G__71270 = (i + (1));
el__$1 = G__71269;
i = G__71270;
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
var vec__70369 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70369,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70369,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70369,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__70373_71302 = cljs.core.seq(props);
var chunk__70374_71303 = null;
var count__70375_71304 = (0);
var i__70376_71305 = (0);
while(true){
if((i__70376_71305 < count__70375_71304)){
var vec__70396_71318 = chunk__70374_71303.cljs$core$IIndexed$_nth$arity$2(null,i__70376_71305);
var k_71319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70396_71318,(0),null);
var v_71320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70396_71318,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_71319);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_71319),v_71320);


var G__71339 = seq__70373_71302;
var G__71340 = chunk__70374_71303;
var G__71341 = count__70375_71304;
var G__71342 = (i__70376_71305 + (1));
seq__70373_71302 = G__71339;
chunk__70374_71303 = G__71340;
count__70375_71304 = G__71341;
i__70376_71305 = G__71342;
continue;
} else {
var temp__5753__auto___71356 = cljs.core.seq(seq__70373_71302);
if(temp__5753__auto___71356){
var seq__70373_71357__$1 = temp__5753__auto___71356;
if(cljs.core.chunked_seq_QMARK_(seq__70373_71357__$1)){
var c__4556__auto___71361 = cljs.core.chunk_first(seq__70373_71357__$1);
var G__71362 = cljs.core.chunk_rest(seq__70373_71357__$1);
var G__71363 = c__4556__auto___71361;
var G__71364 = cljs.core.count(c__4556__auto___71361);
var G__71365 = (0);
seq__70373_71302 = G__71362;
chunk__70374_71303 = G__71363;
count__70375_71304 = G__71364;
i__70376_71305 = G__71365;
continue;
} else {
var vec__70401_71366 = cljs.core.first(seq__70373_71357__$1);
var k_71367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70401_71366,(0),null);
var v_71368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70401_71366,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_71367);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_71367),v_71368);


var G__71389 = cljs.core.next(seq__70373_71357__$1);
var G__71390 = null;
var G__71391 = (0);
var G__71392 = (0);
seq__70373_71302 = G__71389;
chunk__70374_71303 = G__71390;
count__70375_71304 = G__71391;
i__70376_71305 = G__71392;
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
var vec__70413 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70413,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70413,(1),null);
var seq__70416_71411 = cljs.core.seq(node_children);
var chunk__70418_71412 = null;
var count__70419_71413 = (0);
var i__70420_71414 = (0);
while(true){
if((i__70420_71414 < count__70419_71413)){
var child_struct_71415 = chunk__70418_71412.cljs$core$IIndexed$_nth$arity$2(null,i__70420_71414);
if((!((child_struct_71415 == null)))){
if(typeof child_struct_71415 === 'string'){
var text_71417 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_71417),child_struct_71415].join(''));
} else {
var children_71419 = shadow.dom.svg_node(child_struct_71415);
if(cljs.core.seq_QMARK_(children_71419)){
var seq__70453_71420 = cljs.core.seq(children_71419);
var chunk__70455_71421 = null;
var count__70456_71422 = (0);
var i__70457_71423 = (0);
while(true){
if((i__70457_71423 < count__70456_71422)){
var child_71425 = chunk__70455_71421.cljs$core$IIndexed$_nth$arity$2(null,i__70457_71423);
if(cljs.core.truth_(child_71425)){
node.appendChild(child_71425);


var G__71430 = seq__70453_71420;
var G__71431 = chunk__70455_71421;
var G__71432 = count__70456_71422;
var G__71433 = (i__70457_71423 + (1));
seq__70453_71420 = G__71430;
chunk__70455_71421 = G__71431;
count__70456_71422 = G__71432;
i__70457_71423 = G__71433;
continue;
} else {
var G__71434 = seq__70453_71420;
var G__71435 = chunk__70455_71421;
var G__71436 = count__70456_71422;
var G__71437 = (i__70457_71423 + (1));
seq__70453_71420 = G__71434;
chunk__70455_71421 = G__71435;
count__70456_71422 = G__71436;
i__70457_71423 = G__71437;
continue;
}
} else {
var temp__5753__auto___71438 = cljs.core.seq(seq__70453_71420);
if(temp__5753__auto___71438){
var seq__70453_71439__$1 = temp__5753__auto___71438;
if(cljs.core.chunked_seq_QMARK_(seq__70453_71439__$1)){
var c__4556__auto___71440 = cljs.core.chunk_first(seq__70453_71439__$1);
var G__71445 = cljs.core.chunk_rest(seq__70453_71439__$1);
var G__71446 = c__4556__auto___71440;
var G__71447 = cljs.core.count(c__4556__auto___71440);
var G__71448 = (0);
seq__70453_71420 = G__71445;
chunk__70455_71421 = G__71446;
count__70456_71422 = G__71447;
i__70457_71423 = G__71448;
continue;
} else {
var child_71450 = cljs.core.first(seq__70453_71439__$1);
if(cljs.core.truth_(child_71450)){
node.appendChild(child_71450);


var G__71452 = cljs.core.next(seq__70453_71439__$1);
var G__71453 = null;
var G__71454 = (0);
var G__71455 = (0);
seq__70453_71420 = G__71452;
chunk__70455_71421 = G__71453;
count__70456_71422 = G__71454;
i__70457_71423 = G__71455;
continue;
} else {
var G__71462 = cljs.core.next(seq__70453_71439__$1);
var G__71463 = null;
var G__71464 = (0);
var G__71465 = (0);
seq__70453_71420 = G__71462;
chunk__70455_71421 = G__71463;
count__70456_71422 = G__71464;
i__70457_71423 = G__71465;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_71419);
}
}


var G__71466 = seq__70416_71411;
var G__71467 = chunk__70418_71412;
var G__71468 = count__70419_71413;
var G__71469 = (i__70420_71414 + (1));
seq__70416_71411 = G__71466;
chunk__70418_71412 = G__71467;
count__70419_71413 = G__71468;
i__70420_71414 = G__71469;
continue;
} else {
var G__71471 = seq__70416_71411;
var G__71472 = chunk__70418_71412;
var G__71473 = count__70419_71413;
var G__71474 = (i__70420_71414 + (1));
seq__70416_71411 = G__71471;
chunk__70418_71412 = G__71472;
count__70419_71413 = G__71473;
i__70420_71414 = G__71474;
continue;
}
} else {
var temp__5753__auto___71480 = cljs.core.seq(seq__70416_71411);
if(temp__5753__auto___71480){
var seq__70416_71481__$1 = temp__5753__auto___71480;
if(cljs.core.chunked_seq_QMARK_(seq__70416_71481__$1)){
var c__4556__auto___71482 = cljs.core.chunk_first(seq__70416_71481__$1);
var G__71483 = cljs.core.chunk_rest(seq__70416_71481__$1);
var G__71484 = c__4556__auto___71482;
var G__71485 = cljs.core.count(c__4556__auto___71482);
var G__71486 = (0);
seq__70416_71411 = G__71483;
chunk__70418_71412 = G__71484;
count__70419_71413 = G__71485;
i__70420_71414 = G__71486;
continue;
} else {
var child_struct_71487 = cljs.core.first(seq__70416_71481__$1);
if((!((child_struct_71487 == null)))){
if(typeof child_struct_71487 === 'string'){
var text_71489 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_71489),child_struct_71487].join(''));
} else {
var children_71492 = shadow.dom.svg_node(child_struct_71487);
if(cljs.core.seq_QMARK_(children_71492)){
var seq__70483_71494 = cljs.core.seq(children_71492);
var chunk__70485_71495 = null;
var count__70486_71496 = (0);
var i__70487_71497 = (0);
while(true){
if((i__70487_71497 < count__70486_71496)){
var child_71499 = chunk__70485_71495.cljs$core$IIndexed$_nth$arity$2(null,i__70487_71497);
if(cljs.core.truth_(child_71499)){
node.appendChild(child_71499);


var G__71500 = seq__70483_71494;
var G__71501 = chunk__70485_71495;
var G__71502 = count__70486_71496;
var G__71503 = (i__70487_71497 + (1));
seq__70483_71494 = G__71500;
chunk__70485_71495 = G__71501;
count__70486_71496 = G__71502;
i__70487_71497 = G__71503;
continue;
} else {
var G__71505 = seq__70483_71494;
var G__71506 = chunk__70485_71495;
var G__71507 = count__70486_71496;
var G__71508 = (i__70487_71497 + (1));
seq__70483_71494 = G__71505;
chunk__70485_71495 = G__71506;
count__70486_71496 = G__71507;
i__70487_71497 = G__71508;
continue;
}
} else {
var temp__5753__auto___71512__$1 = cljs.core.seq(seq__70483_71494);
if(temp__5753__auto___71512__$1){
var seq__70483_71513__$1 = temp__5753__auto___71512__$1;
if(cljs.core.chunked_seq_QMARK_(seq__70483_71513__$1)){
var c__4556__auto___71515 = cljs.core.chunk_first(seq__70483_71513__$1);
var G__71516 = cljs.core.chunk_rest(seq__70483_71513__$1);
var G__71517 = c__4556__auto___71515;
var G__71518 = cljs.core.count(c__4556__auto___71515);
var G__71519 = (0);
seq__70483_71494 = G__71516;
chunk__70485_71495 = G__71517;
count__70486_71496 = G__71518;
i__70487_71497 = G__71519;
continue;
} else {
var child_71521 = cljs.core.first(seq__70483_71513__$1);
if(cljs.core.truth_(child_71521)){
node.appendChild(child_71521);


var G__71523 = cljs.core.next(seq__70483_71513__$1);
var G__71524 = null;
var G__71525 = (0);
var G__71526 = (0);
seq__70483_71494 = G__71523;
chunk__70485_71495 = G__71524;
count__70486_71496 = G__71525;
i__70487_71497 = G__71526;
continue;
} else {
var G__71531 = cljs.core.next(seq__70483_71513__$1);
var G__71532 = null;
var G__71533 = (0);
var G__71534 = (0);
seq__70483_71494 = G__71531;
chunk__70485_71495 = G__71532;
count__70486_71496 = G__71533;
i__70487_71497 = G__71534;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_71492);
}
}


var G__71536 = cljs.core.next(seq__70416_71481__$1);
var G__71537 = null;
var G__71538 = (0);
var G__71539 = (0);
seq__70416_71411 = G__71536;
chunk__70418_71412 = G__71537;
count__70419_71413 = G__71538;
i__70420_71414 = G__71539;
continue;
} else {
var G__71540 = cljs.core.next(seq__70416_71481__$1);
var G__71541 = null;
var G__71542 = (0);
var G__71543 = (0);
seq__70416_71411 = G__71540;
chunk__70418_71412 = G__71541;
count__70419_71413 = G__71542;
i__70420_71414 = G__71543;
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
var len__4736__auto___71552 = arguments.length;
var i__4737__auto___71553 = (0);
while(true){
if((i__4737__auto___71553 < len__4736__auto___71552)){
args__4742__auto__.push((arguments[i__4737__auto___71553]));

var G__71555 = (i__4737__auto___71553 + (1));
i__4737__auto___71553 = G__71555;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq70514){
var G__70515 = cljs.core.first(seq70514);
var seq70514__$1 = cljs.core.next(seq70514);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70515,seq70514__$1);
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
var G__70527 = arguments.length;
switch (G__70527) {
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
var c__67107__auto___71581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = (function (state_70543){
var state_val_70544 = (state_70543[(1)]);
if((state_val_70544 === (1))){
var state_70543__$1 = state_70543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70543__$1,(2),once_or_cleanup);
} else {
if((state_val_70544 === (2))){
var inst_70540 = (state_70543[(2)]);
var inst_70541 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_70543__$1 = (function (){var statearr_70546 = state_70543;
(statearr_70546[(7)] = inst_70540);

return statearr_70546;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_70543__$1,inst_70541);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__66939__auto__ = null;
var shadow$dom$state_machine__66939__auto____0 = (function (){
var statearr_70547 = [null,null,null,null,null,null,null,null];
(statearr_70547[(0)] = shadow$dom$state_machine__66939__auto__);

(statearr_70547[(1)] = (1));

return statearr_70547;
});
var shadow$dom$state_machine__66939__auto____1 = (function (state_70543){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_70543);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e70548){var ex__66942__auto__ = e70548;
var statearr_70549_71587 = state_70543;
(statearr_70549_71587[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_70543[(4)]))){
var statearr_70551_71588 = state_70543;
(statearr_70551_71588[(1)] = cljs.core.first((state_70543[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71597 = state_70543;
state_70543 = G__71597;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
shadow$dom$state_machine__66939__auto__ = function(state_70543){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__66939__auto____0.call(this);
case 1:
return shadow$dom$state_machine__66939__auto____1.call(this,state_70543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__66939__auto____0;
shadow$dom$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__66939__auto____1;
return shadow$dom$state_machine__66939__auto__;
})()
})();
var state__67109__auto__ = (function (){var statearr_70556 = f__67108__auto__();
(statearr_70556[(6)] = c__67107__auto___71581);

return statearr_70556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
