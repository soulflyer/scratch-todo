goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__74541__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__74541 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74546__i = 0, G__74546__a = new Array(arguments.length -  0);
while (G__74546__i < G__74546__a.length) {G__74546__a[G__74546__i] = arguments[G__74546__i + 0]; ++G__74546__i;}
  args = new cljs.core.IndexedSeq(G__74546__a,0,null);
} 
return G__74541__delegate.call(this,args);};
G__74541.cljs$lang$maxFixedArity = 0;
G__74541.cljs$lang$applyTo = (function (arglist__74551){
var args = cljs.core.seq(arglist__74551);
return G__74541__delegate(args);
});
G__74541.cljs$core$IFn$_invoke$arity$variadic = G__74541__delegate;
return G__74541;
})()
);

(o.error = (function() { 
var G__74552__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__74552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74553__i = 0, G__74553__a = new Array(arguments.length -  0);
while (G__74553__i < G__74553__a.length) {G__74553__a[G__74553__i] = arguments[G__74553__i + 0]; ++G__74553__i;}
  args = new cljs.core.IndexedSeq(G__74553__a,0,null);
} 
return G__74552__delegate.call(this,args);};
G__74552.cljs$lang$maxFixedArity = 0;
G__74552.cljs$lang$applyTo = (function (arglist__74554){
var args = cljs.core.seq(arglist__74554);
return G__74552__delegate(args);
});
G__74552.cljs$core$IFn$_invoke$arity$variadic = G__74552__delegate;
return G__74552;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
