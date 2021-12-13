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
var G__72660__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__72660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72661__i = 0, G__72661__a = new Array(arguments.length -  0);
while (G__72661__i < G__72661__a.length) {G__72661__a[G__72661__i] = arguments[G__72661__i + 0]; ++G__72661__i;}
  args = new cljs.core.IndexedSeq(G__72661__a,0,null);
} 
return G__72660__delegate.call(this,args);};
G__72660.cljs$lang$maxFixedArity = 0;
G__72660.cljs$lang$applyTo = (function (arglist__72663){
var args = cljs.core.seq(arglist__72663);
return G__72660__delegate(args);
});
G__72660.cljs$core$IFn$_invoke$arity$variadic = G__72660__delegate;
return G__72660;
})()
);

(o.error = (function() { 
var G__72664__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__72664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__72665__i = 0, G__72665__a = new Array(arguments.length -  0);
while (G__72665__i < G__72665__a.length) {G__72665__a[G__72665__i] = arguments[G__72665__i + 0]; ++G__72665__i;}
  args = new cljs.core.IndexedSeq(G__72665__a,0,null);
} 
return G__72664__delegate.call(this,args);};
G__72664.cljs$lang$maxFixedArity = 0;
G__72664.cljs$lang$applyTo = (function (arglist__72666){
var args = cljs.core.seq(arglist__72666);
return G__72664__delegate(args);
});
G__72664.cljs$core$IFn$_invoke$arity$variadic = G__72664__delegate;
return G__72664;
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
