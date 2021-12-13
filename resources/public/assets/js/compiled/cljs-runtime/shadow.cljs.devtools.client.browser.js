goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72901 = arguments.length;
var i__4737__auto___72902 = (0);
while(true){
if((i__4737__auto___72902 < len__4736__auto___72901)){
args__4742__auto__.push((arguments[i__4737__auto___72902]));

var G__72903 = (i__4737__auto___72902 + (1));
i__4737__auto___72902 = G__72903;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq72643){
var G__72644 = cljs.core.first(seq72643);
var seq72643__$1 = cljs.core.next(seq72643);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72644,seq72643__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__72645 = cljs.core.seq(sources);
var chunk__72646 = null;
var count__72647 = (0);
var i__72648 = (0);
while(true){
if((i__72648 < count__72647)){
var map__72655 = chunk__72646.cljs$core$IIndexed$_nth$arity$2(null,i__72648);
var map__72655__$1 = (((((!((map__72655 == null))))?(((((map__72655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72655):map__72655);
var src = map__72655__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72655__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72655__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72655__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72655__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e72657){var e_72907 = e72657;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_72907);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_72907.message)].join('')));
}

var G__72908 = seq__72645;
var G__72909 = chunk__72646;
var G__72910 = count__72647;
var G__72911 = (i__72648 + (1));
seq__72645 = G__72908;
chunk__72646 = G__72909;
count__72647 = G__72910;
i__72648 = G__72911;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__72645);
if(temp__5753__auto__){
var seq__72645__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72645__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__72645__$1);
var G__72914 = cljs.core.chunk_rest(seq__72645__$1);
var G__72915 = c__4556__auto__;
var G__72916 = cljs.core.count(c__4556__auto__);
var G__72917 = (0);
seq__72645 = G__72914;
chunk__72646 = G__72915;
count__72647 = G__72916;
i__72648 = G__72917;
continue;
} else {
var map__72658 = cljs.core.first(seq__72645__$1);
var map__72658__$1 = (((((!((map__72658 == null))))?(((((map__72658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72658):map__72658);
var src = map__72658__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72658__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72658__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72658__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72658__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e72662){var e_72920 = e72662;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_72920);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_72920.message)].join('')));
}

var G__72921 = cljs.core.next(seq__72645__$1);
var G__72922 = null;
var G__72923 = (0);
var G__72924 = (0);
seq__72645 = G__72921;
chunk__72646 = G__72922;
count__72647 = G__72923;
i__72648 = G__72924;
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
var seq__72668 = cljs.core.seq(js_requires);
var chunk__72669 = null;
var count__72670 = (0);
var i__72671 = (0);
while(true){
if((i__72671 < count__72670)){
var js_ns = chunk__72669.cljs$core$IIndexed$_nth$arity$2(null,i__72671);
var require_str_72925 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_72925);


var G__72926 = seq__72668;
var G__72927 = chunk__72669;
var G__72928 = count__72670;
var G__72929 = (i__72671 + (1));
seq__72668 = G__72926;
chunk__72669 = G__72927;
count__72670 = G__72928;
i__72671 = G__72929;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__72668);
if(temp__5753__auto__){
var seq__72668__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72668__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__72668__$1);
var G__72930 = cljs.core.chunk_rest(seq__72668__$1);
var G__72931 = c__4556__auto__;
var G__72932 = cljs.core.count(c__4556__auto__);
var G__72933 = (0);
seq__72668 = G__72930;
chunk__72669 = G__72931;
count__72670 = G__72932;
i__72671 = G__72933;
continue;
} else {
var js_ns = cljs.core.first(seq__72668__$1);
var require_str_72934 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_72934);


var G__72935 = cljs.core.next(seq__72668__$1);
var G__72936 = null;
var G__72937 = (0);
var G__72938 = (0);
seq__72668 = G__72935;
chunk__72669 = G__72936;
count__72670 = G__72937;
i__72671 = G__72938;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__72677){
var map__72678 = p__72677;
var map__72678__$1 = (((((!((map__72678 == null))))?(((((map__72678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72678):map__72678);
var msg = map__72678__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72678__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72678__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__72680(s__72681){
return (new cljs.core.LazySeq(null,(function (){
var s__72681__$1 = s__72681;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__72681__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__72687 = cljs.core.first(xs__6308__auto__);
var map__72687__$1 = (((((!((map__72687 == null))))?(((((map__72687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72687):map__72687);
var src = map__72687__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72687__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72687__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__72681__$1,map__72687,map__72687__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__72678,map__72678__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__72680_$_iter__72682(s__72683){
return (new cljs.core.LazySeq(null,((function (s__72681__$1,map__72687,map__72687__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__72678,map__72678__$1,msg,info,reload_info){
return (function (){
var s__72683__$1 = s__72683;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__72683__$1);
if(temp__5753__auto____$1){
var s__72683__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__72683__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__72683__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__72685 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__72684 = (0);
while(true){
if((i__72684 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__72684);
cljs.core.chunk_append(b__72685,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__72941 = (i__72684 + (1));
i__72684 = G__72941;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72685),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__72680_$_iter__72682(cljs.core.chunk_rest(s__72683__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72685),null);
}
} else {
var warning = cljs.core.first(s__72683__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__72680_$_iter__72682(cljs.core.rest(s__72683__$2)));
}
} else {
return null;
}
break;
}
});})(s__72681__$1,map__72687,map__72687__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__72678,map__72678__$1,msg,info,reload_info))
,null,null));
});})(s__72681__$1,map__72687,map__72687__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__72678,map__72678__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__72680(cljs.core.rest(s__72681__$1)));
} else {
var G__72943 = cljs.core.rest(s__72681__$1);
s__72681__$1 = G__72943;
continue;
}
} else {
var G__72944 = cljs.core.rest(s__72681__$1);
s__72681__$1 = G__72944;
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
var seq__72690_72945 = cljs.core.seq(warnings);
var chunk__72691_72946 = null;
var count__72692_72947 = (0);
var i__72693_72948 = (0);
while(true){
if((i__72693_72948 < count__72692_72947)){
var map__72704_72949 = chunk__72691_72946.cljs$core$IIndexed$_nth$arity$2(null,i__72693_72948);
var map__72704_72950__$1 = (((((!((map__72704_72949 == null))))?(((((map__72704_72949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72704_72949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72704_72949):map__72704_72949);
var w_72951 = map__72704_72950__$1;
var msg_72952__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72704_72950__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_72953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72704_72950__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_72954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72704_72950__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_72955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72704_72950__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_72955)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_72953),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_72954),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_72952__$1)].join(''));


var G__72959 = seq__72690_72945;
var G__72960 = chunk__72691_72946;
var G__72961 = count__72692_72947;
var G__72962 = (i__72693_72948 + (1));
seq__72690_72945 = G__72959;
chunk__72691_72946 = G__72960;
count__72692_72947 = G__72961;
i__72693_72948 = G__72962;
continue;
} else {
var temp__5753__auto___72963 = cljs.core.seq(seq__72690_72945);
if(temp__5753__auto___72963){
var seq__72690_72964__$1 = temp__5753__auto___72963;
if(cljs.core.chunked_seq_QMARK_(seq__72690_72964__$1)){
var c__4556__auto___72968 = cljs.core.chunk_first(seq__72690_72964__$1);
var G__72969 = cljs.core.chunk_rest(seq__72690_72964__$1);
var G__72970 = c__4556__auto___72968;
var G__72971 = cljs.core.count(c__4556__auto___72968);
var G__72972 = (0);
seq__72690_72945 = G__72969;
chunk__72691_72946 = G__72970;
count__72692_72947 = G__72971;
i__72693_72948 = G__72972;
continue;
} else {
var map__72706_72973 = cljs.core.first(seq__72690_72964__$1);
var map__72706_72974__$1 = (((((!((map__72706_72973 == null))))?(((((map__72706_72973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72706_72973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72706_72973):map__72706_72973);
var w_72975 = map__72706_72974__$1;
var msg_72976__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72706_72974__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_72977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72706_72974__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_72978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72706_72974__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_72979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72706_72974__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_72979)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_72977),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_72978),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_72976__$1)].join(''));


var G__72980 = cljs.core.next(seq__72690_72964__$1);
var G__72981 = null;
var G__72982 = (0);
var G__72983 = (0);
seq__72690_72945 = G__72980;
chunk__72691_72946 = G__72981;
count__72692_72947 = G__72982;
i__72693_72948 = G__72983;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__72676_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__72676_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__72717){
var map__72718 = p__72717;
var map__72718__$1 = (((((!((map__72718 == null))))?(((((map__72718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72718):map__72718);
var msg = map__72718__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72718__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__72720 = cljs.core.seq(updates);
var chunk__72722 = null;
var count__72723 = (0);
var i__72724 = (0);
while(true){
if((i__72724 < count__72723)){
var path = chunk__72722.cljs$core$IIndexed$_nth$arity$2(null,i__72724);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__72796_72987 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__72800_72988 = null;
var count__72801_72989 = (0);
var i__72802_72990 = (0);
while(true){
if((i__72802_72990 < count__72801_72989)){
var node_72991 = chunk__72800_72988.cljs$core$IIndexed$_nth$arity$2(null,i__72802_72990);
if(cljs.core.not(node_72991.shadow$old)){
var path_match_72992 = shadow.cljs.devtools.client.browser.match_paths(node_72991.getAttribute("href"),path);
if(cljs.core.truth_(path_match_72992)){
var new_link_72993 = (function (){var G__72821 = node_72991.cloneNode(true);
G__72821.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_72992),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__72821;
})();
(node_72991.shadow$old = true);

(new_link_72993.onload = ((function (seq__72796_72987,chunk__72800_72988,count__72801_72989,i__72802_72990,seq__72720,chunk__72722,count__72723,i__72724,new_link_72993,path_match_72992,node_72991,path,map__72718,map__72718__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_72991);
});})(seq__72796_72987,chunk__72800_72988,count__72801_72989,i__72802_72990,seq__72720,chunk__72722,count__72723,i__72724,new_link_72993,path_match_72992,node_72991,path,map__72718,map__72718__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_72992], 0));

goog.dom.insertSiblingAfter(new_link_72993,node_72991);


var G__72994 = seq__72796_72987;
var G__72995 = chunk__72800_72988;
var G__72996 = count__72801_72989;
var G__72997 = (i__72802_72990 + (1));
seq__72796_72987 = G__72994;
chunk__72800_72988 = G__72995;
count__72801_72989 = G__72996;
i__72802_72990 = G__72997;
continue;
} else {
var G__72998 = seq__72796_72987;
var G__72999 = chunk__72800_72988;
var G__73000 = count__72801_72989;
var G__73001 = (i__72802_72990 + (1));
seq__72796_72987 = G__72998;
chunk__72800_72988 = G__72999;
count__72801_72989 = G__73000;
i__72802_72990 = G__73001;
continue;
}
} else {
var G__73002 = seq__72796_72987;
var G__73003 = chunk__72800_72988;
var G__73004 = count__72801_72989;
var G__73005 = (i__72802_72990 + (1));
seq__72796_72987 = G__73002;
chunk__72800_72988 = G__73003;
count__72801_72989 = G__73004;
i__72802_72990 = G__73005;
continue;
}
} else {
var temp__5753__auto___73006 = cljs.core.seq(seq__72796_72987);
if(temp__5753__auto___73006){
var seq__72796_73007__$1 = temp__5753__auto___73006;
if(cljs.core.chunked_seq_QMARK_(seq__72796_73007__$1)){
var c__4556__auto___73008 = cljs.core.chunk_first(seq__72796_73007__$1);
var G__73009 = cljs.core.chunk_rest(seq__72796_73007__$1);
var G__73010 = c__4556__auto___73008;
var G__73011 = cljs.core.count(c__4556__auto___73008);
var G__73012 = (0);
seq__72796_72987 = G__73009;
chunk__72800_72988 = G__73010;
count__72801_72989 = G__73011;
i__72802_72990 = G__73012;
continue;
} else {
var node_73013 = cljs.core.first(seq__72796_73007__$1);
if(cljs.core.not(node_73013.shadow$old)){
var path_match_73014 = shadow.cljs.devtools.client.browser.match_paths(node_73013.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73014)){
var new_link_73015 = (function (){var G__72828 = node_73013.cloneNode(true);
G__72828.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73014),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__72828;
})();
(node_73013.shadow$old = true);

(new_link_73015.onload = ((function (seq__72796_72987,chunk__72800_72988,count__72801_72989,i__72802_72990,seq__72720,chunk__72722,count__72723,i__72724,new_link_73015,path_match_73014,node_73013,seq__72796_73007__$1,temp__5753__auto___73006,path,map__72718,map__72718__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_73013);
});})(seq__72796_72987,chunk__72800_72988,count__72801_72989,i__72802_72990,seq__72720,chunk__72722,count__72723,i__72724,new_link_73015,path_match_73014,node_73013,seq__72796_73007__$1,temp__5753__auto___73006,path,map__72718,map__72718__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73014], 0));

goog.dom.insertSiblingAfter(new_link_73015,node_73013);


var G__73016 = cljs.core.next(seq__72796_73007__$1);
var G__73017 = null;
var G__73018 = (0);
var G__73019 = (0);
seq__72796_72987 = G__73016;
chunk__72800_72988 = G__73017;
count__72801_72989 = G__73018;
i__72802_72990 = G__73019;
continue;
} else {
var G__73020 = cljs.core.next(seq__72796_73007__$1);
var G__73021 = null;
var G__73022 = (0);
var G__73023 = (0);
seq__72796_72987 = G__73020;
chunk__72800_72988 = G__73021;
count__72801_72989 = G__73022;
i__72802_72990 = G__73023;
continue;
}
} else {
var G__73024 = cljs.core.next(seq__72796_73007__$1);
var G__73025 = null;
var G__73026 = (0);
var G__73027 = (0);
seq__72796_72987 = G__73024;
chunk__72800_72988 = G__73025;
count__72801_72989 = G__73026;
i__72802_72990 = G__73027;
continue;
}
}
} else {
}
}
break;
}


var G__73028 = seq__72720;
var G__73029 = chunk__72722;
var G__73030 = count__72723;
var G__73031 = (i__72724 + (1));
seq__72720 = G__73028;
chunk__72722 = G__73029;
count__72723 = G__73030;
i__72724 = G__73031;
continue;
} else {
var G__73032 = seq__72720;
var G__73033 = chunk__72722;
var G__73034 = count__72723;
var G__73035 = (i__72724 + (1));
seq__72720 = G__73032;
chunk__72722 = G__73033;
count__72723 = G__73034;
i__72724 = G__73035;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__72720);
if(temp__5753__auto__){
var seq__72720__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72720__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__72720__$1);
var G__73036 = cljs.core.chunk_rest(seq__72720__$1);
var G__73037 = c__4556__auto__;
var G__73038 = cljs.core.count(c__4556__auto__);
var G__73039 = (0);
seq__72720 = G__73036;
chunk__72722 = G__73037;
count__72723 = G__73038;
i__72724 = G__73039;
continue;
} else {
var path = cljs.core.first(seq__72720__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__72829_73040 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__72833_73041 = null;
var count__72834_73042 = (0);
var i__72835_73043 = (0);
while(true){
if((i__72835_73043 < count__72834_73042)){
var node_73044 = chunk__72833_73041.cljs$core$IIndexed$_nth$arity$2(null,i__72835_73043);
if(cljs.core.not(node_73044.shadow$old)){
var path_match_73045 = shadow.cljs.devtools.client.browser.match_paths(node_73044.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73045)){
var new_link_73046 = (function (){var G__72843 = node_73044.cloneNode(true);
G__72843.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73045),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__72843;
})();
(node_73044.shadow$old = true);

(new_link_73046.onload = ((function (seq__72829_73040,chunk__72833_73041,count__72834_73042,i__72835_73043,seq__72720,chunk__72722,count__72723,i__72724,new_link_73046,path_match_73045,node_73044,path,seq__72720__$1,temp__5753__auto__,map__72718,map__72718__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_73044);
});})(seq__72829_73040,chunk__72833_73041,count__72834_73042,i__72835_73043,seq__72720,chunk__72722,count__72723,i__72724,new_link_73046,path_match_73045,node_73044,path,seq__72720__$1,temp__5753__auto__,map__72718,map__72718__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73045], 0));

goog.dom.insertSiblingAfter(new_link_73046,node_73044);


var G__73047 = seq__72829_73040;
var G__73048 = chunk__72833_73041;
var G__73049 = count__72834_73042;
var G__73050 = (i__72835_73043 + (1));
seq__72829_73040 = G__73047;
chunk__72833_73041 = G__73048;
count__72834_73042 = G__73049;
i__72835_73043 = G__73050;
continue;
} else {
var G__73051 = seq__72829_73040;
var G__73052 = chunk__72833_73041;
var G__73053 = count__72834_73042;
var G__73054 = (i__72835_73043 + (1));
seq__72829_73040 = G__73051;
chunk__72833_73041 = G__73052;
count__72834_73042 = G__73053;
i__72835_73043 = G__73054;
continue;
}
} else {
var G__73055 = seq__72829_73040;
var G__73056 = chunk__72833_73041;
var G__73057 = count__72834_73042;
var G__73058 = (i__72835_73043 + (1));
seq__72829_73040 = G__73055;
chunk__72833_73041 = G__73056;
count__72834_73042 = G__73057;
i__72835_73043 = G__73058;
continue;
}
} else {
var temp__5753__auto___73059__$1 = cljs.core.seq(seq__72829_73040);
if(temp__5753__auto___73059__$1){
var seq__72829_73060__$1 = temp__5753__auto___73059__$1;
if(cljs.core.chunked_seq_QMARK_(seq__72829_73060__$1)){
var c__4556__auto___73061 = cljs.core.chunk_first(seq__72829_73060__$1);
var G__73062 = cljs.core.chunk_rest(seq__72829_73060__$1);
var G__73063 = c__4556__auto___73061;
var G__73064 = cljs.core.count(c__4556__auto___73061);
var G__73065 = (0);
seq__72829_73040 = G__73062;
chunk__72833_73041 = G__73063;
count__72834_73042 = G__73064;
i__72835_73043 = G__73065;
continue;
} else {
var node_73066 = cljs.core.first(seq__72829_73060__$1);
if(cljs.core.not(node_73066.shadow$old)){
var path_match_73067 = shadow.cljs.devtools.client.browser.match_paths(node_73066.getAttribute("href"),path);
if(cljs.core.truth_(path_match_73067)){
var new_link_73068 = (function (){var G__72844 = node_73066.cloneNode(true);
G__72844.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_73067),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__72844;
})();
(node_73066.shadow$old = true);

(new_link_73068.onload = ((function (seq__72829_73040,chunk__72833_73041,count__72834_73042,i__72835_73043,seq__72720,chunk__72722,count__72723,i__72724,new_link_73068,path_match_73067,node_73066,seq__72829_73060__$1,temp__5753__auto___73059__$1,path,seq__72720__$1,temp__5753__auto__,map__72718,map__72718__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_73066);
});})(seq__72829_73040,chunk__72833_73041,count__72834_73042,i__72835_73043,seq__72720,chunk__72722,count__72723,i__72724,new_link_73068,path_match_73067,node_73066,seq__72829_73060__$1,temp__5753__auto___73059__$1,path,seq__72720__$1,temp__5753__auto__,map__72718,map__72718__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_73067], 0));

goog.dom.insertSiblingAfter(new_link_73068,node_73066);


var G__73071 = cljs.core.next(seq__72829_73060__$1);
var G__73072 = null;
var G__73073 = (0);
var G__73074 = (0);
seq__72829_73040 = G__73071;
chunk__72833_73041 = G__73072;
count__72834_73042 = G__73073;
i__72835_73043 = G__73074;
continue;
} else {
var G__73075 = cljs.core.next(seq__72829_73060__$1);
var G__73076 = null;
var G__73077 = (0);
var G__73078 = (0);
seq__72829_73040 = G__73075;
chunk__72833_73041 = G__73076;
count__72834_73042 = G__73077;
i__72835_73043 = G__73078;
continue;
}
} else {
var G__73079 = cljs.core.next(seq__72829_73060__$1);
var G__73080 = null;
var G__73081 = (0);
var G__73082 = (0);
seq__72829_73040 = G__73079;
chunk__72833_73041 = G__73080;
count__72834_73042 = G__73081;
i__72835_73043 = G__73082;
continue;
}
}
} else {
}
}
break;
}


var G__73083 = cljs.core.next(seq__72720__$1);
var G__73084 = null;
var G__73085 = (0);
var G__73086 = (0);
seq__72720 = G__73083;
chunk__72722 = G__73084;
count__72723 = G__73085;
i__72724 = G__73086;
continue;
} else {
var G__73091 = cljs.core.next(seq__72720__$1);
var G__73092 = null;
var G__73093 = (0);
var G__73094 = (0);
seq__72720 = G__73091;
chunk__72722 = G__73092;
count__72723 = G__73093;
i__72724 = G__73094;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__72845){
var map__72846 = p__72845;
var map__72846__$1 = (((((!((map__72846 == null))))?(((((map__72846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72846):map__72846);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72846__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__72857){
var map__72858 = p__72857;
var map__72858__$1 = (((((!((map__72858 == null))))?(((((map__72858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72858):map__72858);
var _ = map__72858__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72858__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__72861,done,error){
var map__72862 = p__72861;
var map__72862__$1 = (((((!((map__72862 == null))))?(((((map__72862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72862):map__72862);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72862__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__72864,done,error){
var map__72865 = p__72864;
var map__72865__$1 = (((((!((map__72865 == null))))?(((((map__72865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72865):map__72865);
var msg = map__72865__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72865__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72865__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72865__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__72867){
var map__72868 = p__72867;
var map__72868__$1 = (((((!((map__72868 == null))))?(((((map__72868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72868):map__72868);
var src = map__72868__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72868__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__72870 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__72870) : done.call(null,G__72870));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__72871){
var map__72872 = p__72871;
var map__72872__$1 = (((((!((map__72872 == null))))?(((((map__72872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72872):map__72872);
var msg__$1 = map__72872__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72872__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e72875){var ex = e72875;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__72879){
var map__72882 = p__72879;
var map__72882__$1 = (((((!((map__72882 == null))))?(((((map__72882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72882):map__72882);
var env = map__72882__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72882__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__72889){
var map__72890 = p__72889;
var map__72890__$1 = (((((!((map__72890 == null))))?(((((map__72890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72890):map__72890);
var msg = map__72890__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72890__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__72895){
var map__72896 = p__72895;
var map__72896__$1 = (((((!((map__72896 == null))))?(((((map__72896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72896):map__72896);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72896__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72896__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__72898){
var map__72899 = p__72898;
var map__72899__$1 = (((((!((map__72899 == null))))?(((((map__72899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72899):map__72899);
var svc = map__72899__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72899__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
