goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__73603){
var map__73604 = p__73603;
var map__73604__$1 = (((((!((map__73604 == null))))?(((((map__73604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73604):map__73604);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73604__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73604__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73604__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73604__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__73609_73661 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__73610_73662 = null;
var count__73611_73663 = (0);
var i__73612_73664 = (0);
while(true){
if((i__73612_73664 < count__73611_73663)){
var vec__73624_73665 = chunk__73610_73662.cljs$core$IIndexed$_nth$arity$2(null,i__73612_73664);
var k_73666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73624_73665,(0),null);
var cb_73667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73624_73665,(1),null);
try{var G__73628_73672 = cljs.core.deref(re_frame.trace.traces);
(cb_73667.cljs$core$IFn$_invoke$arity$1 ? cb_73667.cljs$core$IFn$_invoke$arity$1(G__73628_73672) : cb_73667.call(null,G__73628_73672));
}catch (e73627){var e_73676 = e73627;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_73666,"while storing",cljs.core.deref(re_frame.trace.traces),e_73676], 0));
}

var G__73678 = seq__73609_73661;
var G__73679 = chunk__73610_73662;
var G__73680 = count__73611_73663;
var G__73681 = (i__73612_73664 + (1));
seq__73609_73661 = G__73678;
chunk__73610_73662 = G__73679;
count__73611_73663 = G__73680;
i__73612_73664 = G__73681;
continue;
} else {
var temp__5753__auto___73683 = cljs.core.seq(seq__73609_73661);
if(temp__5753__auto___73683){
var seq__73609_73685__$1 = temp__5753__auto___73683;
if(cljs.core.chunked_seq_QMARK_(seq__73609_73685__$1)){
var c__4556__auto___73686 = cljs.core.chunk_first(seq__73609_73685__$1);
var G__73687 = cljs.core.chunk_rest(seq__73609_73685__$1);
var G__73688 = c__4556__auto___73686;
var G__73689 = cljs.core.count(c__4556__auto___73686);
var G__73690 = (0);
seq__73609_73661 = G__73687;
chunk__73610_73662 = G__73688;
count__73611_73663 = G__73689;
i__73612_73664 = G__73690;
continue;
} else {
var vec__73629_73697 = cljs.core.first(seq__73609_73685__$1);
var k_73698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73629_73697,(0),null);
var cb_73699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73629_73697,(1),null);
try{var G__73633_73700 = cljs.core.deref(re_frame.trace.traces);
(cb_73699.cljs$core$IFn$_invoke$arity$1 ? cb_73699.cljs$core$IFn$_invoke$arity$1(G__73633_73700) : cb_73699.call(null,G__73633_73700));
}catch (e73632){var e_73701 = e73632;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_73698,"while storing",cljs.core.deref(re_frame.trace.traces),e_73701], 0));
}

var G__73702 = cljs.core.next(seq__73609_73685__$1);
var G__73703 = null;
var G__73704 = (0);
var G__73705 = (0);
seq__73609_73661 = G__73702;
chunk__73610_73662 = G__73703;
count__73611_73663 = G__73704;
i__73612_73664 = G__73705;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
