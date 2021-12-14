goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___75319 = arguments.length;
var i__4737__auto___75320 = (0);
while(true){
if((i__4737__auto___75320 < len__4736__auto___75319)){
args__4742__auto__.push((arguments[i__4737__auto___75320]));

var G__75321 = (i__4737__auto___75320 + (1));
i__4737__auto___75320 = G__75321;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq75030){
var G__75031 = cljs.core.first(seq75030);
var seq75030__$1 = cljs.core.next(seq75030);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75031,seq75030__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__75039 = cljs.core.seq(sources);
var chunk__75040 = null;
var count__75041 = (0);
var i__75042 = (0);
while(true){
if((i__75042 < count__75041)){
var map__75060 = chunk__75040.cljs$core$IIndexed$_nth$arity$2(null,i__75042);
var map__75060__$1 = (((((!((map__75060 == null))))?(((((map__75060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75060):map__75060);
var src = map__75060__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75060__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75060__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75060__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75060__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e75066){var e_75324 = e75066;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_75324);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_75324.message)].join('')));
}

var G__75325 = seq__75039;
var G__75326 = chunk__75040;
var G__75327 = count__75041;
var G__75328 = (i__75042 + (1));
seq__75039 = G__75325;
chunk__75040 = G__75326;
count__75041 = G__75327;
i__75042 = G__75328;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__75039);
if(temp__5753__auto__){
var seq__75039__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75039__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__75039__$1);
var G__75332 = cljs.core.chunk_rest(seq__75039__$1);
var G__75333 = c__4556__auto__;
var G__75334 = cljs.core.count(c__4556__auto__);
var G__75335 = (0);
seq__75039 = G__75332;
chunk__75040 = G__75333;
count__75041 = G__75334;
i__75042 = G__75335;
continue;
} else {
var map__75068 = cljs.core.first(seq__75039__$1);
var map__75068__$1 = (((((!((map__75068 == null))))?(((((map__75068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75068):map__75068);
var src = map__75068__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75068__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75068__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75068__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75068__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e75071){var e_75337 = e75071;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_75337);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_75337.message)].join('')));
}

var G__75338 = cljs.core.next(seq__75039__$1);
var G__75339 = null;
var G__75340 = (0);
var G__75341 = (0);
seq__75039 = G__75338;
chunk__75040 = G__75339;
count__75041 = G__75340;
i__75042 = G__75341;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__75078 = cljs.core.seq(js_requires);
var chunk__75079 = null;
var count__75080 = (0);
var i__75081 = (0);
while(true){
if((i__75081 < count__75080)){
var js_ns = chunk__75079.cljs$core$IIndexed$_nth$arity$2(null,i__75081);
var require_str_75345 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_75345);


var G__75347 = seq__75078;
var G__75348 = chunk__75079;
var G__75349 = count__75080;
var G__75350 = (i__75081 + (1));
seq__75078 = G__75347;
chunk__75079 = G__75348;
count__75080 = G__75349;
i__75081 = G__75350;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__75078);
if(temp__5753__auto__){
var seq__75078__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75078__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__75078__$1);
var G__75351 = cljs.core.chunk_rest(seq__75078__$1);
var G__75352 = c__4556__auto__;
var G__75353 = cljs.core.count(c__4556__auto__);
var G__75354 = (0);
seq__75078 = G__75351;
chunk__75079 = G__75352;
count__75080 = G__75353;
i__75081 = G__75354;
continue;
} else {
var js_ns = cljs.core.first(seq__75078__$1);
var require_str_75355 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_75355);


var G__75356 = cljs.core.next(seq__75078__$1);
var G__75357 = null;
var G__75358 = (0);
var G__75359 = (0);
seq__75078 = G__75356;
chunk__75079 = G__75357;
count__75080 = G__75358;
i__75081 = G__75359;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__75093){
var map__75094 = p__75093;
var map__75094__$1 = (((((!((map__75094 == null))))?(((((map__75094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75094):map__75094);
var msg = map__75094__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75094__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75094__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__75096(s__75097){
return (new cljs.core.LazySeq(null,(function (){
var s__75097__$1 = s__75097;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__75097__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__75104 = cljs.core.first(xs__6308__auto__);
var map__75104__$1 = (((((!((map__75104 == null))))?(((((map__75104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75104):map__75104);
var src = map__75104__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75104__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75104__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__75097__$1,map__75104,map__75104__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__75094,map__75094__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__75096_$_iter__75098(s__75099){
return (new cljs.core.LazySeq(null,((function (s__75097__$1,map__75104,map__75104__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__75094,map__75094__$1,msg,info,reload_info){
return (function (){
var s__75099__$1 = s__75099;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__75099__$1);
if(temp__5753__auto____$1){
var s__75099__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__75099__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__75099__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__75101 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__75100 = (0);
while(true){
if((i__75100 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__75100);
cljs.core.chunk_append(b__75101,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__75366 = (i__75100 + (1));
i__75100 = G__75366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75101),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__75096_$_iter__75098(cljs.core.chunk_rest(s__75099__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75101),null);
}
} else {
var warning = cljs.core.first(s__75099__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__75096_$_iter__75098(cljs.core.rest(s__75099__$2)));
}
} else {
return null;
}
break;
}
});})(s__75097__$1,map__75104,map__75104__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__75094,map__75094__$1,msg,info,reload_info))
,null,null));
});})(s__75097__$1,map__75104,map__75104__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__75094,map__75094__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__75096(cljs.core.rest(s__75097__$1)));
} else {
var G__75368 = cljs.core.rest(s__75097__$1);
s__75097__$1 = G__75368;
continue;
}
} else {
var G__75369 = cljs.core.rest(s__75097__$1);
s__75097__$1 = G__75369;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__75108_75370 = cljs.core.seq(warnings);
var chunk__75109_75371 = null;
var count__75110_75372 = (0);
var i__75111_75373 = (0);
while(true){
if((i__75111_75373 < count__75110_75372)){
var map__75123_75374 = chunk__75109_75371.cljs$core$IIndexed$_nth$arity$2(null,i__75111_75373);
var map__75123_75375__$1 = (((((!((map__75123_75374 == null))))?(((((map__75123_75374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75123_75374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75123_75374):map__75123_75374);
var w_75376 = map__75123_75375__$1;
var msg_75377__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75123_75375__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_75378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75123_75375__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_75379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75123_75375__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_75380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75123_75375__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_75380)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_75378),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_75379),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_75377__$1)].join(''));


var G__75381 = seq__75108_75370;
var G__75382 = chunk__75109_75371;
var G__75383 = count__75110_75372;
var G__75384 = (i__75111_75373 + (1));
seq__75108_75370 = G__75381;
chunk__75109_75371 = G__75382;
count__75110_75372 = G__75383;
i__75111_75373 = G__75384;
continue;
} else {
var temp__5753__auto___75385 = cljs.core.seq(seq__75108_75370);
if(temp__5753__auto___75385){
var seq__75108_75386__$1 = temp__5753__auto___75385;
if(cljs.core.chunked_seq_QMARK_(seq__75108_75386__$1)){
var c__4556__auto___75387 = cljs.core.chunk_first(seq__75108_75386__$1);
var G__75388 = cljs.core.chunk_rest(seq__75108_75386__$1);
var G__75389 = c__4556__auto___75387;
var G__75390 = cljs.core.count(c__4556__auto___75387);
var G__75391 = (0);
seq__75108_75370 = G__75388;
chunk__75109_75371 = G__75389;
count__75110_75372 = G__75390;
i__75111_75373 = G__75391;
continue;
} else {
var map__75128_75393 = cljs.core.first(seq__75108_75386__$1);
var map__75128_75394__$1 = (((((!((map__75128_75393 == null))))?(((((map__75128_75393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75128_75393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75128_75393):map__75128_75393);
var w_75395 = map__75128_75394__$1;
var msg_75396__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75128_75394__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_75397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75128_75394__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_75398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75128_75394__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_75399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75128_75394__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_75399)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_75397),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_75398),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_75396__$1)].join(''));


var G__75401 = cljs.core.next(seq__75108_75386__$1);
var G__75402 = null;
var G__75403 = (0);
var G__75404 = (0);
seq__75108_75370 = G__75401;
chunk__75109_75371 = G__75402;
count__75110_75372 = G__75403;
i__75111_75373 = G__75404;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__75090_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__75090_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__75130){
var map__75131 = p__75130;
var map__75131__$1 = (((((!((map__75131 == null))))?(((((map__75131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75131):map__75131);
var msg = map__75131__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75131__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__75133 = cljs.core.seq(updates);
var chunk__75135 = null;
var count__75136 = (0);
var i__75137 = (0);
while(true){
if((i__75137 < count__75136)){
var path = chunk__75135.cljs$core$IIndexed$_nth$arity$2(null,i__75137);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__75176_75411 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__75180_75412 = null;
var count__75181_75413 = (0);
var i__75182_75414 = (0);
while(true){
if((i__75182_75414 < count__75181_75413)){
var node_75415 = chunk__75180_75412.cljs$core$IIndexed$_nth$arity$2(null,i__75182_75414);
if(cljs.core.not(node_75415.shadow$old)){
var path_match_75416 = shadow.cljs.devtools.client.browser.match_paths(node_75415.getAttribute("href"),path);
if(cljs.core.truth_(path_match_75416)){
var new_link_75417 = (function (){var G__75194 = node_75415.cloneNode(true);
G__75194.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_75416),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__75194;
})();
(node_75415.shadow$old = true);

(new_link_75417.onload = ((function (seq__75176_75411,chunk__75180_75412,count__75181_75413,i__75182_75414,seq__75133,chunk__75135,count__75136,i__75137,new_link_75417,path_match_75416,node_75415,path,map__75131,map__75131__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_75415);
});})(seq__75176_75411,chunk__75180_75412,count__75181_75413,i__75182_75414,seq__75133,chunk__75135,count__75136,i__75137,new_link_75417,path_match_75416,node_75415,path,map__75131,map__75131__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_75416], 0));

goog.dom.insertSiblingAfter(new_link_75417,node_75415);


var G__75418 = seq__75176_75411;
var G__75419 = chunk__75180_75412;
var G__75420 = count__75181_75413;
var G__75421 = (i__75182_75414 + (1));
seq__75176_75411 = G__75418;
chunk__75180_75412 = G__75419;
count__75181_75413 = G__75420;
i__75182_75414 = G__75421;
continue;
} else {
var G__75422 = seq__75176_75411;
var G__75423 = chunk__75180_75412;
var G__75424 = count__75181_75413;
var G__75425 = (i__75182_75414 + (1));
seq__75176_75411 = G__75422;
chunk__75180_75412 = G__75423;
count__75181_75413 = G__75424;
i__75182_75414 = G__75425;
continue;
}
} else {
var G__75426 = seq__75176_75411;
var G__75427 = chunk__75180_75412;
var G__75428 = count__75181_75413;
var G__75429 = (i__75182_75414 + (1));
seq__75176_75411 = G__75426;
chunk__75180_75412 = G__75427;
count__75181_75413 = G__75428;
i__75182_75414 = G__75429;
continue;
}
} else {
var temp__5753__auto___75430 = cljs.core.seq(seq__75176_75411);
if(temp__5753__auto___75430){
var seq__75176_75431__$1 = temp__5753__auto___75430;
if(cljs.core.chunked_seq_QMARK_(seq__75176_75431__$1)){
var c__4556__auto___75432 = cljs.core.chunk_first(seq__75176_75431__$1);
var G__75433 = cljs.core.chunk_rest(seq__75176_75431__$1);
var G__75434 = c__4556__auto___75432;
var G__75435 = cljs.core.count(c__4556__auto___75432);
var G__75436 = (0);
seq__75176_75411 = G__75433;
chunk__75180_75412 = G__75434;
count__75181_75413 = G__75435;
i__75182_75414 = G__75436;
continue;
} else {
var node_75437 = cljs.core.first(seq__75176_75431__$1);
if(cljs.core.not(node_75437.shadow$old)){
var path_match_75438 = shadow.cljs.devtools.client.browser.match_paths(node_75437.getAttribute("href"),path);
if(cljs.core.truth_(path_match_75438)){
var new_link_75439 = (function (){var G__75195 = node_75437.cloneNode(true);
G__75195.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_75438),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__75195;
})();
(node_75437.shadow$old = true);

(new_link_75439.onload = ((function (seq__75176_75411,chunk__75180_75412,count__75181_75413,i__75182_75414,seq__75133,chunk__75135,count__75136,i__75137,new_link_75439,path_match_75438,node_75437,seq__75176_75431__$1,temp__5753__auto___75430,path,map__75131,map__75131__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_75437);
});})(seq__75176_75411,chunk__75180_75412,count__75181_75413,i__75182_75414,seq__75133,chunk__75135,count__75136,i__75137,new_link_75439,path_match_75438,node_75437,seq__75176_75431__$1,temp__5753__auto___75430,path,map__75131,map__75131__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_75438], 0));

goog.dom.insertSiblingAfter(new_link_75439,node_75437);


var G__75440 = cljs.core.next(seq__75176_75431__$1);
var G__75441 = null;
var G__75442 = (0);
var G__75443 = (0);
seq__75176_75411 = G__75440;
chunk__75180_75412 = G__75441;
count__75181_75413 = G__75442;
i__75182_75414 = G__75443;
continue;
} else {
var G__75444 = cljs.core.next(seq__75176_75431__$1);
var G__75445 = null;
var G__75446 = (0);
var G__75447 = (0);
seq__75176_75411 = G__75444;
chunk__75180_75412 = G__75445;
count__75181_75413 = G__75446;
i__75182_75414 = G__75447;
continue;
}
} else {
var G__75448 = cljs.core.next(seq__75176_75431__$1);
var G__75449 = null;
var G__75450 = (0);
var G__75451 = (0);
seq__75176_75411 = G__75448;
chunk__75180_75412 = G__75449;
count__75181_75413 = G__75450;
i__75182_75414 = G__75451;
continue;
}
}
} else {
}
}
break;
}


var G__75452 = seq__75133;
var G__75453 = chunk__75135;
var G__75454 = count__75136;
var G__75455 = (i__75137 + (1));
seq__75133 = G__75452;
chunk__75135 = G__75453;
count__75136 = G__75454;
i__75137 = G__75455;
continue;
} else {
var G__75456 = seq__75133;
var G__75457 = chunk__75135;
var G__75458 = count__75136;
var G__75459 = (i__75137 + (1));
seq__75133 = G__75456;
chunk__75135 = G__75457;
count__75136 = G__75458;
i__75137 = G__75459;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__75133);
if(temp__5753__auto__){
var seq__75133__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75133__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__75133__$1);
var G__75461 = cljs.core.chunk_rest(seq__75133__$1);
var G__75462 = c__4556__auto__;
var G__75463 = cljs.core.count(c__4556__auto__);
var G__75464 = (0);
seq__75133 = G__75461;
chunk__75135 = G__75462;
count__75136 = G__75463;
i__75137 = G__75464;
continue;
} else {
var path = cljs.core.first(seq__75133__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__75199_75465 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__75203_75466 = null;
var count__75204_75467 = (0);
var i__75205_75468 = (0);
while(true){
if((i__75205_75468 < count__75204_75467)){
var node_75469 = chunk__75203_75466.cljs$core$IIndexed$_nth$arity$2(null,i__75205_75468);
if(cljs.core.not(node_75469.shadow$old)){
var path_match_75470 = shadow.cljs.devtools.client.browser.match_paths(node_75469.getAttribute("href"),path);
if(cljs.core.truth_(path_match_75470)){
var new_link_75471 = (function (){var G__75218 = node_75469.cloneNode(true);
G__75218.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_75470),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__75218;
})();
(node_75469.shadow$old = true);

(new_link_75471.onload = ((function (seq__75199_75465,chunk__75203_75466,count__75204_75467,i__75205_75468,seq__75133,chunk__75135,count__75136,i__75137,new_link_75471,path_match_75470,node_75469,path,seq__75133__$1,temp__5753__auto__,map__75131,map__75131__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_75469);
});})(seq__75199_75465,chunk__75203_75466,count__75204_75467,i__75205_75468,seq__75133,chunk__75135,count__75136,i__75137,new_link_75471,path_match_75470,node_75469,path,seq__75133__$1,temp__5753__auto__,map__75131,map__75131__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_75470], 0));

goog.dom.insertSiblingAfter(new_link_75471,node_75469);


var G__75472 = seq__75199_75465;
var G__75473 = chunk__75203_75466;
var G__75474 = count__75204_75467;
var G__75475 = (i__75205_75468 + (1));
seq__75199_75465 = G__75472;
chunk__75203_75466 = G__75473;
count__75204_75467 = G__75474;
i__75205_75468 = G__75475;
continue;
} else {
var G__75476 = seq__75199_75465;
var G__75477 = chunk__75203_75466;
var G__75478 = count__75204_75467;
var G__75479 = (i__75205_75468 + (1));
seq__75199_75465 = G__75476;
chunk__75203_75466 = G__75477;
count__75204_75467 = G__75478;
i__75205_75468 = G__75479;
continue;
}
} else {
var G__75480 = seq__75199_75465;
var G__75481 = chunk__75203_75466;
var G__75482 = count__75204_75467;
var G__75483 = (i__75205_75468 + (1));
seq__75199_75465 = G__75480;
chunk__75203_75466 = G__75481;
count__75204_75467 = G__75482;
i__75205_75468 = G__75483;
continue;
}
} else {
var temp__5753__auto___75484__$1 = cljs.core.seq(seq__75199_75465);
if(temp__5753__auto___75484__$1){
var seq__75199_75486__$1 = temp__5753__auto___75484__$1;
if(cljs.core.chunked_seq_QMARK_(seq__75199_75486__$1)){
var c__4556__auto___75487 = cljs.core.chunk_first(seq__75199_75486__$1);
var G__75488 = cljs.core.chunk_rest(seq__75199_75486__$1);
var G__75489 = c__4556__auto___75487;
var G__75490 = cljs.core.count(c__4556__auto___75487);
var G__75491 = (0);
seq__75199_75465 = G__75488;
chunk__75203_75466 = G__75489;
count__75204_75467 = G__75490;
i__75205_75468 = G__75491;
continue;
} else {
var node_75492 = cljs.core.first(seq__75199_75486__$1);
if(cljs.core.not(node_75492.shadow$old)){
var path_match_75493 = shadow.cljs.devtools.client.browser.match_paths(node_75492.getAttribute("href"),path);
if(cljs.core.truth_(path_match_75493)){
var new_link_75494 = (function (){var G__75222 = node_75492.cloneNode(true);
G__75222.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_75493),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__75222;
})();
(node_75492.shadow$old = true);

(new_link_75494.onload = ((function (seq__75199_75465,chunk__75203_75466,count__75204_75467,i__75205_75468,seq__75133,chunk__75135,count__75136,i__75137,new_link_75494,path_match_75493,node_75492,seq__75199_75486__$1,temp__5753__auto___75484__$1,path,seq__75133__$1,temp__5753__auto__,map__75131,map__75131__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_75492);
});})(seq__75199_75465,chunk__75203_75466,count__75204_75467,i__75205_75468,seq__75133,chunk__75135,count__75136,i__75137,new_link_75494,path_match_75493,node_75492,seq__75199_75486__$1,temp__5753__auto___75484__$1,path,seq__75133__$1,temp__5753__auto__,map__75131,map__75131__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_75493], 0));

goog.dom.insertSiblingAfter(new_link_75494,node_75492);


var G__75495 = cljs.core.next(seq__75199_75486__$1);
var G__75496 = null;
var G__75497 = (0);
var G__75498 = (0);
seq__75199_75465 = G__75495;
chunk__75203_75466 = G__75496;
count__75204_75467 = G__75497;
i__75205_75468 = G__75498;
continue;
} else {
var G__75499 = cljs.core.next(seq__75199_75486__$1);
var G__75500 = null;
var G__75501 = (0);
var G__75502 = (0);
seq__75199_75465 = G__75499;
chunk__75203_75466 = G__75500;
count__75204_75467 = G__75501;
i__75205_75468 = G__75502;
continue;
}
} else {
var G__75503 = cljs.core.next(seq__75199_75486__$1);
var G__75504 = null;
var G__75505 = (0);
var G__75506 = (0);
seq__75199_75465 = G__75503;
chunk__75203_75466 = G__75504;
count__75204_75467 = G__75505;
i__75205_75468 = G__75506;
continue;
}
}
} else {
}
}
break;
}


var G__75507 = cljs.core.next(seq__75133__$1);
var G__75508 = null;
var G__75509 = (0);
var G__75510 = (0);
seq__75133 = G__75507;
chunk__75135 = G__75508;
count__75136 = G__75509;
i__75137 = G__75510;
continue;
} else {
var G__75511 = cljs.core.next(seq__75133__$1);
var G__75512 = null;
var G__75513 = (0);
var G__75514 = (0);
seq__75133 = G__75511;
chunk__75135 = G__75512;
count__75136 = G__75513;
i__75137 = G__75514;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__75224){
var map__75225 = p__75224;
var map__75225__$1 = (((((!((map__75225 == null))))?(((((map__75225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75225):map__75225);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75225__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__75229){
var map__75230 = p__75229;
var map__75230__$1 = (((((!((map__75230 == null))))?(((((map__75230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75230):map__75230);
var _ = map__75230__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75230__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__75233,done,error){
var map__75234 = p__75233;
var map__75234__$1 = (((((!((map__75234 == null))))?(((((map__75234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75234):map__75234);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75234__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__75237,done,error){
var map__75238 = p__75237;
var map__75238__$1 = (((((!((map__75238 == null))))?(((((map__75238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75238):map__75238);
var msg = map__75238__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75238__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75238__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75238__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__75241){
var map__75242 = p__75241;
var map__75242__$1 = (((((!((map__75242 == null))))?(((((map__75242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75242):map__75242);
var src = map__75242__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75242__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__75245 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__75245) : done.call(null,G__75245));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__75246){
var map__75247 = p__75246;
var map__75247__$1 = (((((!((map__75247 == null))))?(((((map__75247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75247):map__75247);
var msg__$1 = map__75247__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75247__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e75249){var ex = e75249;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__75250){
var map__75251 = p__75250;
var map__75251__$1 = (((((!((map__75251 == null))))?(((((map__75251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75251):map__75251);
var env = map__75251__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75251__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__75287){
var map__75288 = p__75287;
var map__75288__$1 = (((((!((map__75288 == null))))?(((((map__75288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75288):map__75288);
var msg = map__75288__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75288__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__75290){
var map__75291 = p__75290;
var map__75291__$1 = (((((!((map__75291 == null))))?(((((map__75291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75291):map__75291);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75291__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75291__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__75299){
var map__75303 = p__75299;
var map__75303__$1 = (((((!((map__75303 == null))))?(((((map__75303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75303):map__75303);
var svc = map__75303__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75303__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
