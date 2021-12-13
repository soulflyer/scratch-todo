goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__73887 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__73888 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__73888);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___73984 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___73984)){
var new_db_73985 = temp__5753__auto___73984;
var fexpr__73891_73986 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__73891_73986.cljs$core$IFn$_invoke$arity$1 ? fexpr__73891_73986.cljs$core$IFn$_invoke$arity$1(new_db_73985) : fexpr__73891_73986.call(null,new_db_73985));
} else {
}

var seq__73892 = cljs.core.seq(effects_without_db);
var chunk__73893 = null;
var count__73894 = (0);
var i__73895 = (0);
while(true){
if((i__73895 < count__73894)){
var vec__73903 = chunk__73893.cljs$core$IIndexed$_nth$arity$2(null,i__73895);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73903,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73903,(1),null);
var temp__5751__auto___73989 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___73989)){
var effect_fn_73990 = temp__5751__auto___73989;
(effect_fn_73990.cljs$core$IFn$_invoke$arity$1 ? effect_fn_73990.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_73990.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__73991 = seq__73892;
var G__73992 = chunk__73893;
var G__73993 = count__73894;
var G__73994 = (i__73895 + (1));
seq__73892 = G__73991;
chunk__73893 = G__73992;
count__73894 = G__73993;
i__73895 = G__73994;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__73892);
if(temp__5753__auto__){
var seq__73892__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73892__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__73892__$1);
var G__73999 = cljs.core.chunk_rest(seq__73892__$1);
var G__74000 = c__4556__auto__;
var G__74001 = cljs.core.count(c__4556__auto__);
var G__74002 = (0);
seq__73892 = G__73999;
chunk__73893 = G__74000;
count__73894 = G__74001;
i__73895 = G__74002;
continue;
} else {
var vec__73908 = cljs.core.first(seq__73892__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73908,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73908,(1),null);
var temp__5751__auto___74003 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___74003)){
var effect_fn_74005 = temp__5751__auto___74003;
(effect_fn_74005.cljs$core$IFn$_invoke$arity$1 ? effect_fn_74005.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_74005.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__74007 = cljs.core.next(seq__73892__$1);
var G__74008 = null;
var G__74009 = (0);
var G__74010 = (0);
seq__73892 = G__74007;
chunk__73893 = G__74008;
count__73894 = G__74009;
i__73895 = G__74010;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__73581__auto___74011 = re_frame.interop.now();
var duration__73582__auto___74012 = (end__73581__auto___74011 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__73582__auto___74012,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__73581__auto___74011);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__73887);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___74013 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___74013)){
var new_db_74014 = temp__5753__auto___74013;
var fexpr__73917_74017 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__73917_74017.cljs$core$IFn$_invoke$arity$1 ? fexpr__73917_74017.cljs$core$IFn$_invoke$arity$1(new_db_74014) : fexpr__73917_74017.call(null,new_db_74014));
} else {
}

var seq__73918 = cljs.core.seq(effects_without_db);
var chunk__73919 = null;
var count__73920 = (0);
var i__73921 = (0);
while(true){
if((i__73921 < count__73920)){
var vec__73933 = chunk__73919.cljs$core$IIndexed$_nth$arity$2(null,i__73921);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73933,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73933,(1),null);
var temp__5751__auto___74020 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___74020)){
var effect_fn_74021 = temp__5751__auto___74020;
(effect_fn_74021.cljs$core$IFn$_invoke$arity$1 ? effect_fn_74021.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_74021.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__74023 = seq__73918;
var G__74024 = chunk__73919;
var G__74025 = count__73920;
var G__74026 = (i__73921 + (1));
seq__73918 = G__74023;
chunk__73919 = G__74024;
count__73920 = G__74025;
i__73921 = G__74026;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__73918);
if(temp__5753__auto__){
var seq__73918__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73918__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__73918__$1);
var G__74029 = cljs.core.chunk_rest(seq__73918__$1);
var G__74030 = c__4556__auto__;
var G__74031 = cljs.core.count(c__4556__auto__);
var G__74032 = (0);
seq__73918 = G__74029;
chunk__73919 = G__74030;
count__73920 = G__74031;
i__73921 = G__74032;
continue;
} else {
var vec__73937 = cljs.core.first(seq__73918__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73937,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73937,(1),null);
var temp__5751__auto___74033 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___74033)){
var effect_fn_74034 = temp__5751__auto___74033;
(effect_fn_74034.cljs$core$IFn$_invoke$arity$1 ? effect_fn_74034.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_74034.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__74035 = cljs.core.next(seq__73918__$1);
var G__74036 = null;
var G__74037 = (0);
var G__74038 = (0);
seq__73918 = G__74035;
chunk__73919 = G__74036;
count__73920 = G__74037;
i__73921 = G__74038;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__73941){
var map__73942 = p__73941;
var map__73942__$1 = (((((!((map__73942 == null))))?(((((map__73942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73942):map__73942);
var effect = map__73942__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73942__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73942__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__73945 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__73946 = null;
var count__73947 = (0);
var i__73948 = (0);
while(true){
if((i__73948 < count__73947)){
var effect = chunk__73946.cljs$core$IIndexed$_nth$arity$2(null,i__73948);
re_frame.fx.dispatch_later(effect);


var G__74042 = seq__73945;
var G__74043 = chunk__73946;
var G__74044 = count__73947;
var G__74045 = (i__73948 + (1));
seq__73945 = G__74042;
chunk__73946 = G__74043;
count__73947 = G__74044;
i__73948 = G__74045;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__73945);
if(temp__5753__auto__){
var seq__73945__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73945__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__73945__$1);
var G__74055 = cljs.core.chunk_rest(seq__73945__$1);
var G__74056 = c__4556__auto__;
var G__74057 = cljs.core.count(c__4556__auto__);
var G__74058 = (0);
seq__73945 = G__74055;
chunk__73946 = G__74056;
count__73947 = G__74057;
i__73948 = G__74058;
continue;
} else {
var effect = cljs.core.first(seq__73945__$1);
re_frame.fx.dispatch_later(effect);


var G__74060 = cljs.core.next(seq__73945__$1);
var G__74061 = null;
var G__74062 = (0);
var G__74063 = (0);
seq__73945 = G__74060;
chunk__73946 = G__74061;
count__73947 = G__74062;
i__73948 = G__74063;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__73954 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__73955 = null;
var count__73956 = (0);
var i__73957 = (0);
while(true){
if((i__73957 < count__73956)){
var vec__73966 = chunk__73955.cljs$core$IIndexed$_nth$arity$2(null,i__73957);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73966,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73966,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___74070 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___74070)){
var effect_fn_74071 = temp__5751__auto___74070;
(effect_fn_74071.cljs$core$IFn$_invoke$arity$1 ? effect_fn_74071.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_74071.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__74072 = seq__73954;
var G__74073 = chunk__73955;
var G__74074 = count__73956;
var G__74075 = (i__73957 + (1));
seq__73954 = G__74072;
chunk__73955 = G__74073;
count__73956 = G__74074;
i__73957 = G__74075;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__73954);
if(temp__5753__auto__){
var seq__73954__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73954__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__73954__$1);
var G__74076 = cljs.core.chunk_rest(seq__73954__$1);
var G__74077 = c__4556__auto__;
var G__74078 = cljs.core.count(c__4556__auto__);
var G__74079 = (0);
seq__73954 = G__74076;
chunk__73955 = G__74077;
count__73956 = G__74078;
i__73957 = G__74079;
continue;
} else {
var vec__73969 = cljs.core.first(seq__73954__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73969,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73969,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___74080 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___74080)){
var effect_fn_74084 = temp__5751__auto___74080;
(effect_fn_74084.cljs$core$IFn$_invoke$arity$1 ? effect_fn_74084.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_74084.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__74085 = cljs.core.next(seq__73954__$1);
var G__74086 = null;
var G__74087 = (0);
var G__74088 = (0);
seq__73954 = G__74085;
chunk__73955 = G__74086;
count__73956 = G__74087;
i__73957 = G__74088;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__73973 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__73974 = null;
var count__73975 = (0);
var i__73976 = (0);
while(true){
if((i__73976 < count__73975)){
var event = chunk__73974.cljs$core$IIndexed$_nth$arity$2(null,i__73976);
re_frame.router.dispatch(event);


var G__74089 = seq__73973;
var G__74090 = chunk__73974;
var G__74091 = count__73975;
var G__74092 = (i__73976 + (1));
seq__73973 = G__74089;
chunk__73974 = G__74090;
count__73975 = G__74091;
i__73976 = G__74092;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__73973);
if(temp__5753__auto__){
var seq__73973__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73973__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__73973__$1);
var G__74095 = cljs.core.chunk_rest(seq__73973__$1);
var G__74096 = c__4556__auto__;
var G__74097 = cljs.core.count(c__4556__auto__);
var G__74098 = (0);
seq__73973 = G__74095;
chunk__73974 = G__74096;
count__73975 = G__74097;
i__73976 = G__74098;
continue;
} else {
var event = cljs.core.first(seq__73973__$1);
re_frame.router.dispatch(event);


var G__74099 = cljs.core.next(seq__73973__$1);
var G__74100 = null;
var G__74101 = (0);
var G__74102 = (0);
seq__73973 = G__74099;
chunk__73974 = G__74100;
count__73975 = G__74101;
i__73976 = G__74102;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__73977 = cljs.core.seq(value);
var chunk__73978 = null;
var count__73979 = (0);
var i__73980 = (0);
while(true){
if((i__73980 < count__73979)){
var event = chunk__73978.cljs$core$IIndexed$_nth$arity$2(null,i__73980);
clear_event(event);


var G__74107 = seq__73977;
var G__74108 = chunk__73978;
var G__74109 = count__73979;
var G__74110 = (i__73980 + (1));
seq__73977 = G__74107;
chunk__73978 = G__74108;
count__73979 = G__74109;
i__73980 = G__74110;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__73977);
if(temp__5753__auto__){
var seq__73977__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73977__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__73977__$1);
var G__74111 = cljs.core.chunk_rest(seq__73977__$1);
var G__74112 = c__4556__auto__;
var G__74113 = cljs.core.count(c__4556__auto__);
var G__74114 = (0);
seq__73977 = G__74111;
chunk__73978 = G__74112;
count__73979 = G__74113;
i__73980 = G__74114;
continue;
} else {
var event = cljs.core.first(seq__73977__$1);
clear_event(event);


var G__74115 = cljs.core.next(seq__73977__$1);
var G__74116 = null;
var G__74117 = (0);
var G__74118 = (0);
seq__73977 = G__74115;
chunk__73978 = G__74116;
count__73979 = G__74117;
i__73980 = G__74118;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
