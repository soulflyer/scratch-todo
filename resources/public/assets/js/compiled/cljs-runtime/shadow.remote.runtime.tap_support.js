goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__71892,p__71893){
var map__71894 = p__71892;
var map__71894__$1 = (((((!((map__71894 == null))))?(((((map__71894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71894):map__71894);
var svc = map__71894__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71894__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71894__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71894__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__71895 = p__71893;
var map__71895__$1 = (((((!((map__71895 == null))))?(((((map__71895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71895):map__71895);
var msg = map__71895__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71895__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71895__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71895__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71895__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__71908,p__71909){
var map__71910 = p__71908;
var map__71910__$1 = (((((!((map__71910 == null))))?(((((map__71910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71910):map__71910);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71910__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__71911 = p__71909;
var map__71911__$1 = (((((!((map__71911 == null))))?(((((map__71911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71911):map__71911);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71911__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__71915,p__71916){
var map__71918 = p__71915;
var map__71918__$1 = (((((!((map__71918 == null))))?(((((map__71918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71918):map__71918);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71918__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71918__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__71919 = p__71916;
var map__71919__$1 = (((((!((map__71919 == null))))?(((((map__71919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71919):map__71919);
var msg = map__71919__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71919__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__71926,tid){
var map__71927 = p__71926;
var map__71927__$1 = (((((!((map__71927 == null))))?(((((map__71927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71927):map__71927);
var svc = map__71927__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71927__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__71937 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__71938 = null;
var count__71939 = (0);
var i__71940 = (0);
while(true){
if((i__71940 < count__71939)){
var vec__71949 = chunk__71938.cljs$core$IIndexed$_nth$arity$2(null,i__71940);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71949,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71949,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__72001 = seq__71937;
var G__72002 = chunk__71938;
var G__72003 = count__71939;
var G__72004 = (i__71940 + (1));
seq__71937 = G__72001;
chunk__71938 = G__72002;
count__71939 = G__72003;
i__71940 = G__72004;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__71937);
if(temp__5753__auto__){
var seq__71937__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71937__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__71937__$1);
var G__72006 = cljs.core.chunk_rest(seq__71937__$1);
var G__72007 = c__4556__auto__;
var G__72008 = cljs.core.count(c__4556__auto__);
var G__72009 = (0);
seq__71937 = G__72006;
chunk__71938 = G__72007;
count__71939 = G__72008;
i__71940 = G__72009;
continue;
} else {
var vec__71953 = cljs.core.first(seq__71937__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71953,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71953,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__72014 = cljs.core.next(seq__71937__$1);
var G__72015 = null;
var G__72016 = (0);
var G__72017 = (0);
seq__71937 = G__72014;
chunk__71938 = G__72015;
count__71939 = G__72016;
i__71940 = G__72017;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__71932_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__71932_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__71933_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__71933_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__71934_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__71934_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__71935_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__71935_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__71980){
var map__71981 = p__71980;
var map__71981__$1 = (((((!((map__71981 == null))))?(((((map__71981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71981):map__71981);
var svc = map__71981__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71981__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71981__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
