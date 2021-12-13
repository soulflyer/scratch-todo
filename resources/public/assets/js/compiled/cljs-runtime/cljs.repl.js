goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__70893){
var map__70896 = p__70893;
var map__70896__$1 = (((((!((map__70896 == null))))?(((((map__70896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70896):map__70896);
var m = map__70896__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70896__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70896__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__70901_71222 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__70902_71223 = null;
var count__70903_71224 = (0);
var i__70904_71225 = (0);
while(true){
if((i__70904_71225 < count__70903_71224)){
var f_71230 = chunk__70902_71223.cljs$core$IIndexed$_nth$arity$2(null,i__70904_71225);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_71230], 0));


var G__71233 = seq__70901_71222;
var G__71234 = chunk__70902_71223;
var G__71235 = count__70903_71224;
var G__71236 = (i__70904_71225 + (1));
seq__70901_71222 = G__71233;
chunk__70902_71223 = G__71234;
count__70903_71224 = G__71235;
i__70904_71225 = G__71236;
continue;
} else {
var temp__5753__auto___71241 = cljs.core.seq(seq__70901_71222);
if(temp__5753__auto___71241){
var seq__70901_71242__$1 = temp__5753__auto___71241;
if(cljs.core.chunked_seq_QMARK_(seq__70901_71242__$1)){
var c__4556__auto___71243 = cljs.core.chunk_first(seq__70901_71242__$1);
var G__71244 = cljs.core.chunk_rest(seq__70901_71242__$1);
var G__71245 = c__4556__auto___71243;
var G__71246 = cljs.core.count(c__4556__auto___71243);
var G__71247 = (0);
seq__70901_71222 = G__71244;
chunk__70902_71223 = G__71245;
count__70903_71224 = G__71246;
i__70904_71225 = G__71247;
continue;
} else {
var f_71248 = cljs.core.first(seq__70901_71242__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_71248], 0));


var G__71249 = cljs.core.next(seq__70901_71242__$1);
var G__71250 = null;
var G__71251 = (0);
var G__71252 = (0);
seq__70901_71222 = G__71249;
chunk__70902_71223 = G__71250;
count__70903_71224 = G__71251;
i__70904_71225 = G__71252;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_71263 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_71263], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_71263)))?cljs.core.second(arglists_71263):arglists_71263)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__70953_71271 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__70954_71272 = null;
var count__70955_71273 = (0);
var i__70956_71274 = (0);
while(true){
if((i__70956_71274 < count__70955_71273)){
var vec__70990_71279 = chunk__70954_71272.cljs$core$IIndexed$_nth$arity$2(null,i__70956_71274);
var name_71280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70990_71279,(0),null);
var map__70993_71281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70990_71279,(1),null);
var map__70993_71283__$1 = (((((!((map__70993_71281 == null))))?(((((map__70993_71281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70993_71281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70993_71281):map__70993_71281);
var doc_71284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70993_71283__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_71285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70993_71283__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_71280], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_71285], 0));

if(cljs.core.truth_(doc_71284)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_71284], 0));
} else {
}


var G__71307 = seq__70953_71271;
var G__71308 = chunk__70954_71272;
var G__71309 = count__70955_71273;
var G__71310 = (i__70956_71274 + (1));
seq__70953_71271 = G__71307;
chunk__70954_71272 = G__71308;
count__70955_71273 = G__71309;
i__70956_71274 = G__71310;
continue;
} else {
var temp__5753__auto___71321 = cljs.core.seq(seq__70953_71271);
if(temp__5753__auto___71321){
var seq__70953_71323__$1 = temp__5753__auto___71321;
if(cljs.core.chunked_seq_QMARK_(seq__70953_71323__$1)){
var c__4556__auto___71326 = cljs.core.chunk_first(seq__70953_71323__$1);
var G__71328 = cljs.core.chunk_rest(seq__70953_71323__$1);
var G__71329 = c__4556__auto___71326;
var G__71330 = cljs.core.count(c__4556__auto___71326);
var G__71331 = (0);
seq__70953_71271 = G__71328;
chunk__70954_71272 = G__71329;
count__70955_71273 = G__71330;
i__70956_71274 = G__71331;
continue;
} else {
var vec__70998_71343 = cljs.core.first(seq__70953_71323__$1);
var name_71344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70998_71343,(0),null);
var map__71001_71345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70998_71343,(1),null);
var map__71001_71346__$1 = (((((!((map__71001_71345 == null))))?(((((map__71001_71345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71001_71345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71001_71345):map__71001_71345);
var doc_71347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71001_71346__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_71348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71001_71346__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_71344], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_71348], 0));

if(cljs.core.truth_(doc_71347)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_71347], 0));
} else {
}


var G__71373 = cljs.core.next(seq__70953_71323__$1);
var G__71374 = null;
var G__71375 = (0);
var G__71376 = (0);
seq__70953_71271 = G__71373;
chunk__70954_71272 = G__71374;
count__70955_71273 = G__71375;
i__70956_71274 = G__71376;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__71007 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__71008 = null;
var count__71009 = (0);
var i__71010 = (0);
while(true){
if((i__71010 < count__71009)){
var role = chunk__71008.cljs$core$IIndexed$_nth$arity$2(null,i__71010);
var temp__5753__auto___71384__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___71384__$1)){
var spec_71393 = temp__5753__auto___71384__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_71393)], 0));
} else {
}


var G__71396 = seq__71007;
var G__71397 = chunk__71008;
var G__71398 = count__71009;
var G__71399 = (i__71010 + (1));
seq__71007 = G__71396;
chunk__71008 = G__71397;
count__71009 = G__71398;
i__71010 = G__71399;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__71007);
if(temp__5753__auto____$1){
var seq__71007__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__71007__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__71007__$1);
var G__71406 = cljs.core.chunk_rest(seq__71007__$1);
var G__71407 = c__4556__auto__;
var G__71408 = cljs.core.count(c__4556__auto__);
var G__71409 = (0);
seq__71007 = G__71406;
chunk__71008 = G__71407;
count__71009 = G__71408;
i__71010 = G__71409;
continue;
} else {
var role = cljs.core.first(seq__71007__$1);
var temp__5753__auto___71410__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___71410__$2)){
var spec_71428 = temp__5753__auto___71410__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_71428)], 0));
} else {
}


var G__71441 = cljs.core.next(seq__71007__$1);
var G__71442 = null;
var G__71443 = (0);
var G__71444 = (0);
seq__71007 = G__71441;
chunk__71008 = G__71442;
count__71009 = G__71443;
i__71010 = G__71444;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__71460 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__71461 = cljs.core.ex_cause(t);
via = G__71460;
t = G__71461;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__71046 = datafied_throwable;
var map__71046__$1 = (((((!((map__71046 == null))))?(((((map__71046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71046):map__71046);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71046__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71046__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71046__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__71047 = cljs.core.last(via);
var map__71047__$1 = (((((!((map__71047 == null))))?(((((map__71047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71047):map__71047);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71047__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71047__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71047__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__71048 = data;
var map__71048__$1 = (((((!((map__71048 == null))))?(((((map__71048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71048):map__71048);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71048__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71048__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71048__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__71049 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__71049__$1 = (((((!((map__71049 == null))))?(((((map__71049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71049):map__71049);
var top_data = map__71049__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71049__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__71056 = phase;
var G__71056__$1 = (((G__71056 instanceof cljs.core.Keyword))?G__71056.fqn:null);
switch (G__71056__$1) {
case "read-source":
var map__71063 = data;
var map__71063__$1 = (((((!((map__71063 == null))))?(((((map__71063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71063):map__71063);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71063__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71063__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__71066 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__71066__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71066,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__71066);
var G__71066__$2 = (cljs.core.truth_((function (){var fexpr__71067 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__71067.cljs$core$IFn$_invoke$arity$1 ? fexpr__71067.cljs$core$IFn$_invoke$arity$1(source) : fexpr__71067.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__71066__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__71066__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71066__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__71066__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__71068 = top_data;
var G__71068__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71068,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__71068);
var G__71068__$2 = (cljs.core.truth_((function (){var fexpr__71069 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__71069.cljs$core$IFn$_invoke$arity$1 ? fexpr__71069.cljs$core$IFn$_invoke$arity$1(source) : fexpr__71069.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__71068__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__71068__$1);
var G__71068__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71068__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__71068__$2);
var G__71068__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71068__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__71068__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71068__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__71068__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__71073 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71073,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71073,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71073,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71073,(3),null);
var G__71078 = top_data;
var G__71078__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71078,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__71078);
var G__71078__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71078__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__71078__$1);
var G__71078__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71078__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__71078__$2);
var G__71078__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71078__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__71078__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71078__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__71078__$4;
}

break;
case "execution":
var vec__71085 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71085,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71085,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71085,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71085,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__71044_SHARP_){
var or__4126__auto__ = (p1__71044_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__71090 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__71090.cljs$core$IFn$_invoke$arity$1 ? fexpr__71090.cljs$core$IFn$_invoke$arity$1(p1__71044_SHARP_) : fexpr__71090.call(null,p1__71044_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__71095 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__71095__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71095,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__71095);
var G__71095__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71095__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__71095__$1);
var G__71095__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71095__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__71095__$2);
var G__71095__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71095__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__71095__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71095__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__71095__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71056__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__71106){
var map__71107 = p__71106;
var map__71107__$1 = (((((!((map__71107 == null))))?(((((map__71107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71107):map__71107);
var triage_data = map__71107__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71107__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71107__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71107__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71107__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71107__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71107__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71107__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71107__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__71111 = phase;
var G__71111__$1 = (((G__71111 instanceof cljs.core.Keyword))?G__71111.fqn:null);
switch (G__71111__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__71112 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__71113 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__71114 = loc;
var G__71115 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__71126_71608 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__71127_71609 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__71128_71610 = true;
var _STAR_print_fn_STAR__temp_val__71129_71611 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__71128_71610);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__71129_71611);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71103_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__71103_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__71127_71609);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__71126_71608);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__71112,G__71113,G__71114,G__71115) : format.call(null,G__71112,G__71113,G__71114,G__71115));

break;
case "macroexpansion":
var G__71140 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__71141 = cause_type;
var G__71142 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__71143 = loc;
var G__71144 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__71140,G__71141,G__71142,G__71143,G__71144) : format.call(null,G__71140,G__71141,G__71142,G__71143,G__71144));

break;
case "compile-syntax-check":
var G__71146 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__71147 = cause_type;
var G__71148 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__71149 = loc;
var G__71150 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__71146,G__71147,G__71148,G__71149,G__71150) : format.call(null,G__71146,G__71147,G__71148,G__71149,G__71150));

break;
case "compilation":
var G__71152 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__71153 = cause_type;
var G__71154 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__71155 = loc;
var G__71156 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__71152,G__71153,G__71154,G__71155,G__71156) : format.call(null,G__71152,G__71153,G__71154,G__71155,G__71156));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__71157 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__71158 = symbol;
var G__71159 = loc;
var G__71160 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__71161_71653 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__71162_71654 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__71163_71655 = true;
var _STAR_print_fn_STAR__temp_val__71164_71656 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__71163_71655);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__71164_71656);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71104_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__71104_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__71162_71654);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__71161_71653);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__71157,G__71158,G__71159,G__71160) : format.call(null,G__71157,G__71158,G__71159,G__71160));
} else {
var G__71177 = "Execution error%s at %s(%s).\n%s\n";
var G__71178 = cause_type;
var G__71179 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__71180 = loc;
var G__71181 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__71177,G__71178,G__71179,G__71180,G__71181) : format.call(null,G__71177,G__71178,G__71179,G__71180,G__71181));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71111__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
