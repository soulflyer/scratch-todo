goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__73782,p__73783){
var map__73785 = p__73782;
var map__73785__$1 = (((((!((map__73785 == null))))?(((((map__73785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73785):map__73785);
var svc = map__73785__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73785__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73785__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73785__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__73786 = p__73783;
var map__73786__$1 = (((((!((map__73786 == null))))?(((((map__73786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73786):map__73786);
var msg = map__73786__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73786__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73786__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73786__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73786__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__73811,p__73812){
var map__73813 = p__73811;
var map__73813__$1 = (((((!((map__73813 == null))))?(((((map__73813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73813):map__73813);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73813__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__73815 = p__73812;
var map__73815__$1 = (((((!((map__73815 == null))))?(((((map__73815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73815):map__73815);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73815__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__73825,p__73826){
var map__73827 = p__73825;
var map__73827__$1 = (((((!((map__73827 == null))))?(((((map__73827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73827):map__73827);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73827__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73827__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__73828 = p__73826;
var map__73828__$1 = (((((!((map__73828 == null))))?(((((map__73828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73828):map__73828);
var msg = map__73828__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73828__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__73840,tid){
var map__73841 = p__73840;
var map__73841__$1 = (((((!((map__73841 == null))))?(((((map__73841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73841):map__73841);
var svc = map__73841__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73841__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__73863 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__73864 = null;
var count__73865 = (0);
var i__73866 = (0);
while(true){
if((i__73866 < count__73865)){
var vec__73887 = chunk__73864.cljs$core$IIndexed$_nth$arity$2(null,i__73866);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73887,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73887,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__74055 = seq__73863;
var G__74056 = chunk__73864;
var G__74057 = count__73865;
var G__74058 = (i__73866 + (1));
seq__73863 = G__74055;
chunk__73864 = G__74056;
count__73865 = G__74057;
i__73866 = G__74058;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__73863);
if(temp__5753__auto__){
var seq__73863__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73863__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__73863__$1);
var G__74061 = cljs.core.chunk_rest(seq__73863__$1);
var G__74062 = c__4556__auto__;
var G__74063 = cljs.core.count(c__4556__auto__);
var G__74064 = (0);
seq__73863 = G__74061;
chunk__73864 = G__74062;
count__73865 = G__74063;
i__73866 = G__74064;
continue;
} else {
var vec__73896 = cljs.core.first(seq__73863__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73896,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73896,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__74072 = cljs.core.next(seq__73863__$1);
var G__74073 = null;
var G__74074 = (0);
var G__74075 = (0);
seq__73863 = G__74072;
chunk__73864 = G__74073;
count__73865 = G__74074;
i__73866 = G__74075;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__73848_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__73848_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__73849_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__73849_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__73850_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__73850_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__73851_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__73851_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__73931){
var map__73932 = p__73931;
var map__73932__$1 = (((((!((map__73932 == null))))?(((((map__73932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73932):map__73932);
var svc = map__73932__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73932__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73932__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
