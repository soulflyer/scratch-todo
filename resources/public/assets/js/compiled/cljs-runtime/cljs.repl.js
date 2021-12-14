goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__72786){
var map__72787 = p__72786;
var map__72787__$1 = (((((!((map__72787 == null))))?(((((map__72787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72787):map__72787);
var m = map__72787__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72787__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72787__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__72791_73120 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__72792_73121 = null;
var count__72793_73122 = (0);
var i__72794_73123 = (0);
while(true){
if((i__72794_73123 < count__72793_73122)){
var f_73125 = chunk__72792_73121.cljs$core$IIndexed$_nth$arity$2(null,i__72794_73123);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_73125], 0));


var G__73126 = seq__72791_73120;
var G__73127 = chunk__72792_73121;
var G__73128 = count__72793_73122;
var G__73129 = (i__72794_73123 + (1));
seq__72791_73120 = G__73126;
chunk__72792_73121 = G__73127;
count__72793_73122 = G__73128;
i__72794_73123 = G__73129;
continue;
} else {
var temp__5753__auto___73131 = cljs.core.seq(seq__72791_73120);
if(temp__5753__auto___73131){
var seq__72791_73132__$1 = temp__5753__auto___73131;
if(cljs.core.chunked_seq_QMARK_(seq__72791_73132__$1)){
var c__4556__auto___73133 = cljs.core.chunk_first(seq__72791_73132__$1);
var G__73134 = cljs.core.chunk_rest(seq__72791_73132__$1);
var G__73135 = c__4556__auto___73133;
var G__73136 = cljs.core.count(c__4556__auto___73133);
var G__73137 = (0);
seq__72791_73120 = G__73134;
chunk__72792_73121 = G__73135;
count__72793_73122 = G__73136;
i__72794_73123 = G__73137;
continue;
} else {
var f_73138 = cljs.core.first(seq__72791_73132__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_73138], 0));


var G__73139 = cljs.core.next(seq__72791_73132__$1);
var G__73140 = null;
var G__73141 = (0);
var G__73142 = (0);
seq__72791_73120 = G__73139;
chunk__72792_73121 = G__73140;
count__72793_73122 = G__73141;
i__72794_73123 = G__73142;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_73143 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_73143], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_73143)))?cljs.core.second(arglists_73143):arglists_73143)], 0));
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
var seq__72803_73158 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__72804_73159 = null;
var count__72805_73160 = (0);
var i__72806_73161 = (0);
while(true){
if((i__72806_73161 < count__72805_73160)){
var vec__72827_73163 = chunk__72804_73159.cljs$core$IIndexed$_nth$arity$2(null,i__72806_73161);
var name_73164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72827_73163,(0),null);
var map__72830_73165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72827_73163,(1),null);
var map__72830_73166__$1 = (((((!((map__72830_73165 == null))))?(((((map__72830_73165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72830_73165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72830_73165):map__72830_73165);
var doc_73167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72830_73166__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_73168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72830_73166__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_73164], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_73168], 0));

if(cljs.core.truth_(doc_73167)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_73167], 0));
} else {
}


var G__73175 = seq__72803_73158;
var G__73176 = chunk__72804_73159;
var G__73177 = count__72805_73160;
var G__73178 = (i__72806_73161 + (1));
seq__72803_73158 = G__73175;
chunk__72804_73159 = G__73176;
count__72805_73160 = G__73177;
i__72806_73161 = G__73178;
continue;
} else {
var temp__5753__auto___73180 = cljs.core.seq(seq__72803_73158);
if(temp__5753__auto___73180){
var seq__72803_73181__$1 = temp__5753__auto___73180;
if(cljs.core.chunked_seq_QMARK_(seq__72803_73181__$1)){
var c__4556__auto___73183 = cljs.core.chunk_first(seq__72803_73181__$1);
var G__73184 = cljs.core.chunk_rest(seq__72803_73181__$1);
var G__73185 = c__4556__auto___73183;
var G__73186 = cljs.core.count(c__4556__auto___73183);
var G__73187 = (0);
seq__72803_73158 = G__73184;
chunk__72804_73159 = G__73185;
count__72805_73160 = G__73186;
i__72806_73161 = G__73187;
continue;
} else {
var vec__72833_73188 = cljs.core.first(seq__72803_73181__$1);
var name_73189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72833_73188,(0),null);
var map__72836_73190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72833_73188,(1),null);
var map__72836_73191__$1 = (((((!((map__72836_73190 == null))))?(((((map__72836_73190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72836_73190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72836_73190):map__72836_73190);
var doc_73192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72836_73191__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_73193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72836_73191__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_73189], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_73193], 0));

if(cljs.core.truth_(doc_73192)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_73192], 0));
} else {
}


var G__73194 = cljs.core.next(seq__72803_73181__$1);
var G__73195 = null;
var G__73196 = (0);
var G__73197 = (0);
seq__72803_73158 = G__73194;
chunk__72804_73159 = G__73195;
count__72805_73160 = G__73196;
i__72806_73161 = G__73197;
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

var seq__72838 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__72839 = null;
var count__72840 = (0);
var i__72841 = (0);
while(true){
if((i__72841 < count__72840)){
var role = chunk__72839.cljs$core$IIndexed$_nth$arity$2(null,i__72841);
var temp__5753__auto___73201__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___73201__$1)){
var spec_73202 = temp__5753__auto___73201__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_73202)], 0));
} else {
}


var G__73203 = seq__72838;
var G__73204 = chunk__72839;
var G__73205 = count__72840;
var G__73206 = (i__72841 + (1));
seq__72838 = G__73203;
chunk__72839 = G__73204;
count__72840 = G__73205;
i__72841 = G__73206;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__72838);
if(temp__5753__auto____$1){
var seq__72838__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__72838__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__72838__$1);
var G__73207 = cljs.core.chunk_rest(seq__72838__$1);
var G__73208 = c__4556__auto__;
var G__73209 = cljs.core.count(c__4556__auto__);
var G__73210 = (0);
seq__72838 = G__73207;
chunk__72839 = G__73208;
count__72840 = G__73209;
i__72841 = G__73210;
continue;
} else {
var role = cljs.core.first(seq__72838__$1);
var temp__5753__auto___73211__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___73211__$2)){
var spec_73212 = temp__5753__auto___73211__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_73212)], 0));
} else {
}


var G__73214 = cljs.core.next(seq__72838__$1);
var G__73215 = null;
var G__73216 = (0);
var G__73217 = (0);
seq__72838 = G__73214;
chunk__72839 = G__73215;
count__72840 = G__73216;
i__72841 = G__73217;
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
var G__73225 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__73226 = cljs.core.ex_cause(t);
via = G__73225;
t = G__73226;
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
var map__72871 = datafied_throwable;
var map__72871__$1 = (((((!((map__72871 == null))))?(((((map__72871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72871):map__72871);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72871__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72871__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72871__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__72872 = cljs.core.last(via);
var map__72872__$1 = (((((!((map__72872 == null))))?(((((map__72872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72872):map__72872);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72872__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72872__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72872__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__72873 = data;
var map__72873__$1 = (((((!((map__72873 == null))))?(((((map__72873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72873):map__72873);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72873__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72873__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72873__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__72874 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__72874__$1 = (((((!((map__72874 == null))))?(((((map__72874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72874):map__72874);
var top_data = map__72874__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72874__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__72882 = phase;
var G__72882__$1 = (((G__72882 instanceof cljs.core.Keyword))?G__72882.fqn:null);
switch (G__72882__$1) {
case "read-source":
var map__72885 = data;
var map__72885__$1 = (((((!((map__72885 == null))))?(((((map__72885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72885):map__72885);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72885__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72885__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__72887 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__72887__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72887,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__72887);
var G__72887__$2 = (cljs.core.truth_((function (){var fexpr__72893 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__72893.cljs$core$IFn$_invoke$arity$1 ? fexpr__72893.cljs$core$IFn$_invoke$arity$1(source) : fexpr__72893.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__72887__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__72887__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72887__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__72887__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__72899 = top_data;
var G__72899__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72899,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__72899);
var G__72899__$2 = (cljs.core.truth_((function (){var fexpr__72909 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__72909.cljs$core$IFn$_invoke$arity$1 ? fexpr__72909.cljs$core$IFn$_invoke$arity$1(source) : fexpr__72909.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__72899__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__72899__$1);
var G__72899__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72899__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__72899__$2);
var G__72899__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72899__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__72899__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72899__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__72899__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__72923 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72923,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72923,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72923,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72923,(3),null);
var G__72927 = top_data;
var G__72927__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72927,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__72927);
var G__72927__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72927__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__72927__$1);
var G__72927__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72927__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__72927__$2);
var G__72927__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72927__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__72927__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72927__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__72927__$4;
}

break;
case "execution":
var vec__72941 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72941,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72941,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72941,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72941,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__72868_SHARP_){
var or__4126__auto__ = (p1__72868_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__72949 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__72949.cljs$core$IFn$_invoke$arity$1 ? fexpr__72949.cljs$core$IFn$_invoke$arity$1(p1__72868_SHARP_) : fexpr__72949.call(null,p1__72868_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__72950 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__72950__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72950,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__72950);
var G__72950__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72950__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__72950__$1);
var G__72950__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72950__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__72950__$2);
var G__72950__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72950__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__72950__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72950__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__72950__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72882__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__72996){
var map__72997 = p__72996;
var map__72997__$1 = (((((!((map__72997 == null))))?(((((map__72997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72997):map__72997);
var triage_data = map__72997__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72997__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72997__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72997__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72997__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72997__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72997__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72997__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72997__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__73035 = phase;
var G__73035__$1 = (((G__73035 instanceof cljs.core.Keyword))?G__73035.fqn:null);
switch (G__73035__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__73036 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__73037 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__73038 = loc;
var G__73039 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__73041_73299 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__73042_73300 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__73043_73301 = true;
var _STAR_print_fn_STAR__temp_val__73044_73302 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__73043_73301);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__73044_73302);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72980_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__72980_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__73042_73300);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__73041_73299);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__73036,G__73037,G__73038,G__73039) : format.call(null,G__73036,G__73037,G__73038,G__73039));

break;
case "macroexpansion":
var G__73060 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__73061 = cause_type;
var G__73062 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__73063 = loc;
var G__73064 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__73060,G__73061,G__73062,G__73063,G__73064) : format.call(null,G__73060,G__73061,G__73062,G__73063,G__73064));

break;
case "compile-syntax-check":
var G__73066 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__73067 = cause_type;
var G__73068 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__73069 = loc;
var G__73070 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__73066,G__73067,G__73068,G__73069,G__73070) : format.call(null,G__73066,G__73067,G__73068,G__73069,G__73070));

break;
case "compilation":
var G__73072 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__73073 = cause_type;
var G__73074 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__73075 = loc;
var G__73076 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__73072,G__73073,G__73074,G__73075,G__73076) : format.call(null,G__73072,G__73073,G__73074,G__73075,G__73076));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__73092 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__73093 = symbol;
var G__73094 = loc;
var G__73095 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__73096_73313 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__73097_73314 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__73098_73315 = true;
var _STAR_print_fn_STAR__temp_val__73099_73316 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__73098_73315);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__73099_73316);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72987_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__72987_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__73097_73314);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__73096_73313);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__73092,G__73093,G__73094,G__73095) : format.call(null,G__73092,G__73093,G__73094,G__73095));
} else {
var G__73106 = "Execution error%s at %s(%s).\n%s\n";
var G__73107 = cause_type;
var G__73108 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__73109 = loc;
var G__73110 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__73106,G__73107,G__73108,G__73109,G__73110) : format.call(null,G__73106,G__73107,G__73108,G__73109,G__73110));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73035__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
