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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__75863){
var map__75864 = p__75863;
var map__75864__$1 = (((((!((map__75864 == null))))?(((((map__75864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75864):map__75864);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75864__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75864__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75864__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75864__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__75868_75897 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__75869_75898 = null;
var count__75870_75899 = (0);
var i__75871_75900 = (0);
while(true){
if((i__75871_75900 < count__75870_75899)){
var vec__75883_75901 = chunk__75869_75898.cljs$core$IIndexed$_nth$arity$2(null,i__75871_75900);
var k_75902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75883_75901,(0),null);
var cb_75903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75883_75901,(1),null);
try{var G__75887_75904 = cljs.core.deref(re_frame.trace.traces);
(cb_75903.cljs$core$IFn$_invoke$arity$1 ? cb_75903.cljs$core$IFn$_invoke$arity$1(G__75887_75904) : cb_75903.call(null,G__75887_75904));
}catch (e75886){var e_75905 = e75886;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_75902,"while storing",cljs.core.deref(re_frame.trace.traces),e_75905], 0));
}

var G__75906 = seq__75868_75897;
var G__75907 = chunk__75869_75898;
var G__75908 = count__75870_75899;
var G__75909 = (i__75871_75900 + (1));
seq__75868_75897 = G__75906;
chunk__75869_75898 = G__75907;
count__75870_75899 = G__75908;
i__75871_75900 = G__75909;
continue;
} else {
var temp__5753__auto___75914 = cljs.core.seq(seq__75868_75897);
if(temp__5753__auto___75914){
var seq__75868_75915__$1 = temp__5753__auto___75914;
if(cljs.core.chunked_seq_QMARK_(seq__75868_75915__$1)){
var c__4556__auto___75916 = cljs.core.chunk_first(seq__75868_75915__$1);
var G__75917 = cljs.core.chunk_rest(seq__75868_75915__$1);
var G__75918 = c__4556__auto___75916;
var G__75919 = cljs.core.count(c__4556__auto___75916);
var G__75920 = (0);
seq__75868_75897 = G__75917;
chunk__75869_75898 = G__75918;
count__75870_75899 = G__75919;
i__75871_75900 = G__75920;
continue;
} else {
var vec__75889_75929 = cljs.core.first(seq__75868_75915__$1);
var k_75930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75889_75929,(0),null);
var cb_75931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75889_75929,(1),null);
try{var G__75893_75933 = cljs.core.deref(re_frame.trace.traces);
(cb_75931.cljs$core$IFn$_invoke$arity$1 ? cb_75931.cljs$core$IFn$_invoke$arity$1(G__75893_75933) : cb_75931.call(null,G__75893_75933));
}catch (e75892){var e_75934 = e75892;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_75930,"while storing",cljs.core.deref(re_frame.trace.traces),e_75934], 0));
}

var G__75935 = cljs.core.next(seq__75868_75915__$1);
var G__75936 = null;
var G__75937 = (0);
var G__75938 = (0);
seq__75868_75897 = G__75935;
chunk__75869_75898 = G__75936;
count__75870_75899 = G__75937;
i__75871_75900 = G__75938;
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
