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
var _STAR_current_trace_STAR__orig_val__76278 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__76279 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__76279);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___76412 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___76412)){
var new_db_76413 = temp__5753__auto___76412;
var fexpr__76282_76414 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__76282_76414.cljs$core$IFn$_invoke$arity$1 ? fexpr__76282_76414.cljs$core$IFn$_invoke$arity$1(new_db_76413) : fexpr__76282_76414.call(null,new_db_76413));
} else {
}

var seq__76283 = cljs.core.seq(effects_without_db);
var chunk__76284 = null;
var count__76285 = (0);
var i__76286 = (0);
while(true){
if((i__76286 < count__76285)){
var vec__76300 = chunk__76284.cljs$core$IIndexed$_nth$arity$2(null,i__76286);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76300,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76300,(1),null);
var temp__5751__auto___76416 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___76416)){
var effect_fn_76417 = temp__5751__auto___76416;
(effect_fn_76417.cljs$core$IFn$_invoke$arity$1 ? effect_fn_76417.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_76417.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__76421 = seq__76283;
var G__76422 = chunk__76284;
var G__76423 = count__76285;
var G__76424 = (i__76286 + (1));
seq__76283 = G__76421;
chunk__76284 = G__76422;
count__76285 = G__76423;
i__76286 = G__76424;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__76283);
if(temp__5753__auto__){
var seq__76283__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76283__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__76283__$1);
var G__76428 = cljs.core.chunk_rest(seq__76283__$1);
var G__76429 = c__4556__auto__;
var G__76430 = cljs.core.count(c__4556__auto__);
var G__76431 = (0);
seq__76283 = G__76428;
chunk__76284 = G__76429;
count__76285 = G__76430;
i__76286 = G__76431;
continue;
} else {
var vec__76305 = cljs.core.first(seq__76283__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76305,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76305,(1),null);
var temp__5751__auto___76436 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___76436)){
var effect_fn_76437 = temp__5751__auto___76436;
(effect_fn_76437.cljs$core$IFn$_invoke$arity$1 ? effect_fn_76437.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_76437.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__76439 = cljs.core.next(seq__76283__$1);
var G__76440 = null;
var G__76441 = (0);
var G__76442 = (0);
seq__76283 = G__76439;
chunk__76284 = G__76440;
count__76285 = G__76441;
i__76286 = G__76442;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__75841__auto___76443 = re_frame.interop.now();
var duration__75842__auto___76444 = (end__75841__auto___76443 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__75842__auto___76444,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__75841__auto___76443);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__76278);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___76448 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___76448)){
var new_db_76449 = temp__5753__auto___76448;
var fexpr__76315_76450 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__76315_76450.cljs$core$IFn$_invoke$arity$1 ? fexpr__76315_76450.cljs$core$IFn$_invoke$arity$1(new_db_76449) : fexpr__76315_76450.call(null,new_db_76449));
} else {
}

var seq__76317 = cljs.core.seq(effects_without_db);
var chunk__76318 = null;
var count__76319 = (0);
var i__76320 = (0);
while(true){
if((i__76320 < count__76319)){
var vec__76332 = chunk__76318.cljs$core$IIndexed$_nth$arity$2(null,i__76320);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76332,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76332,(1),null);
var temp__5751__auto___76452 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___76452)){
var effect_fn_76453 = temp__5751__auto___76452;
(effect_fn_76453.cljs$core$IFn$_invoke$arity$1 ? effect_fn_76453.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_76453.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__76460 = seq__76317;
var G__76461 = chunk__76318;
var G__76462 = count__76319;
var G__76463 = (i__76320 + (1));
seq__76317 = G__76460;
chunk__76318 = G__76461;
count__76319 = G__76462;
i__76320 = G__76463;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__76317);
if(temp__5753__auto__){
var seq__76317__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76317__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__76317__$1);
var G__76467 = cljs.core.chunk_rest(seq__76317__$1);
var G__76468 = c__4556__auto__;
var G__76469 = cljs.core.count(c__4556__auto__);
var G__76470 = (0);
seq__76317 = G__76467;
chunk__76318 = G__76468;
count__76319 = G__76469;
i__76320 = G__76470;
continue;
} else {
var vec__76336 = cljs.core.first(seq__76317__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76336,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76336,(1),null);
var temp__5751__auto___76472 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___76472)){
var effect_fn_76474 = temp__5751__auto___76472;
(effect_fn_76474.cljs$core$IFn$_invoke$arity$1 ? effect_fn_76474.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_76474.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__76477 = cljs.core.next(seq__76317__$1);
var G__76478 = null;
var G__76479 = (0);
var G__76480 = (0);
seq__76317 = G__76477;
chunk__76318 = G__76478;
count__76319 = G__76479;
i__76320 = G__76480;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__76340){
var map__76341 = p__76340;
var map__76341__$1 = (((((!((map__76341 == null))))?(((((map__76341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76341):map__76341);
var effect = map__76341__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76341__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76341__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__76347 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__76348 = null;
var count__76349 = (0);
var i__76350 = (0);
while(true){
if((i__76350 < count__76349)){
var effect = chunk__76348.cljs$core$IIndexed$_nth$arity$2(null,i__76350);
re_frame.fx.dispatch_later(effect);


var G__76488 = seq__76347;
var G__76489 = chunk__76348;
var G__76490 = count__76349;
var G__76491 = (i__76350 + (1));
seq__76347 = G__76488;
chunk__76348 = G__76489;
count__76349 = G__76490;
i__76350 = G__76491;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__76347);
if(temp__5753__auto__){
var seq__76347__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76347__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__76347__$1);
var G__76497 = cljs.core.chunk_rest(seq__76347__$1);
var G__76498 = c__4556__auto__;
var G__76499 = cljs.core.count(c__4556__auto__);
var G__76500 = (0);
seq__76347 = G__76497;
chunk__76348 = G__76498;
count__76349 = G__76499;
i__76350 = G__76500;
continue;
} else {
var effect = cljs.core.first(seq__76347__$1);
re_frame.fx.dispatch_later(effect);


var G__76502 = cljs.core.next(seq__76347__$1);
var G__76503 = null;
var G__76504 = (0);
var G__76505 = (0);
seq__76347 = G__76502;
chunk__76348 = G__76503;
count__76349 = G__76504;
i__76350 = G__76505;
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
var seq__76352 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__76353 = null;
var count__76354 = (0);
var i__76355 = (0);
while(true){
if((i__76355 < count__76354)){
var vec__76370 = chunk__76353.cljs$core$IIndexed$_nth$arity$2(null,i__76355);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76370,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76370,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___76511 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___76511)){
var effect_fn_76512 = temp__5751__auto___76511;
(effect_fn_76512.cljs$core$IFn$_invoke$arity$1 ? effect_fn_76512.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_76512.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__76516 = seq__76352;
var G__76517 = chunk__76353;
var G__76518 = count__76354;
var G__76519 = (i__76355 + (1));
seq__76352 = G__76516;
chunk__76353 = G__76517;
count__76354 = G__76518;
i__76355 = G__76519;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__76352);
if(temp__5753__auto__){
var seq__76352__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76352__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__76352__$1);
var G__76522 = cljs.core.chunk_rest(seq__76352__$1);
var G__76523 = c__4556__auto__;
var G__76524 = cljs.core.count(c__4556__auto__);
var G__76525 = (0);
seq__76352 = G__76522;
chunk__76353 = G__76523;
count__76354 = G__76524;
i__76355 = G__76525;
continue;
} else {
var vec__76376 = cljs.core.first(seq__76352__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76376,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76376,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___76531 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___76531)){
var effect_fn_76536 = temp__5751__auto___76531;
(effect_fn_76536.cljs$core$IFn$_invoke$arity$1 ? effect_fn_76536.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_76536.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__76537 = cljs.core.next(seq__76352__$1);
var G__76538 = null;
var G__76539 = (0);
var G__76540 = (0);
seq__76352 = G__76537;
chunk__76353 = G__76538;
count__76354 = G__76539;
i__76355 = G__76540;
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
var seq__76386 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__76387 = null;
var count__76388 = (0);
var i__76389 = (0);
while(true){
if((i__76389 < count__76388)){
var event = chunk__76387.cljs$core$IIndexed$_nth$arity$2(null,i__76389);
re_frame.router.dispatch(event);


var G__76543 = seq__76386;
var G__76544 = chunk__76387;
var G__76545 = count__76388;
var G__76546 = (i__76389 + (1));
seq__76386 = G__76543;
chunk__76387 = G__76544;
count__76388 = G__76545;
i__76389 = G__76546;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__76386);
if(temp__5753__auto__){
var seq__76386__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76386__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__76386__$1);
var G__76547 = cljs.core.chunk_rest(seq__76386__$1);
var G__76548 = c__4556__auto__;
var G__76549 = cljs.core.count(c__4556__auto__);
var G__76550 = (0);
seq__76386 = G__76547;
chunk__76387 = G__76548;
count__76388 = G__76549;
i__76389 = G__76550;
continue;
} else {
var event = cljs.core.first(seq__76386__$1);
re_frame.router.dispatch(event);


var G__76551 = cljs.core.next(seq__76386__$1);
var G__76552 = null;
var G__76553 = (0);
var G__76554 = (0);
seq__76386 = G__76551;
chunk__76387 = G__76552;
count__76388 = G__76553;
i__76389 = G__76554;
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
var seq__76393 = cljs.core.seq(value);
var chunk__76394 = null;
var count__76395 = (0);
var i__76396 = (0);
while(true){
if((i__76396 < count__76395)){
var event = chunk__76394.cljs$core$IIndexed$_nth$arity$2(null,i__76396);
clear_event(event);


var G__76557 = seq__76393;
var G__76558 = chunk__76394;
var G__76559 = count__76395;
var G__76560 = (i__76396 + (1));
seq__76393 = G__76557;
chunk__76394 = G__76558;
count__76395 = G__76559;
i__76396 = G__76560;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__76393);
if(temp__5753__auto__){
var seq__76393__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76393__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__76393__$1);
var G__76562 = cljs.core.chunk_rest(seq__76393__$1);
var G__76563 = c__4556__auto__;
var G__76564 = cljs.core.count(c__4556__auto__);
var G__76565 = (0);
seq__76393 = G__76562;
chunk__76394 = G__76563;
count__76395 = G__76564;
i__76396 = G__76565;
continue;
} else {
var event = cljs.core.first(seq__76393__$1);
clear_event(event);


var G__76568 = cljs.core.next(seq__76393__$1);
var G__76569 = null;
var G__76570 = (0);
var G__76571 = (0);
seq__76393 = G__76568;
chunk__76394 = G__76569;
count__76395 = G__76570;
i__76396 = G__76571;
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
