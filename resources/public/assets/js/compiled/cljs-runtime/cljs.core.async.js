goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__69717 = arguments.length;
switch (G__69717) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69722 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69722 = (function (f,blockable,meta69723){
this.f = f;
this.blockable = blockable;
this.meta69723 = meta69723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69724,meta69723__$1){
var self__ = this;
var _69724__$1 = this;
return (new cljs.core.async.t_cljs$core$async69722(self__.f,self__.blockable,meta69723__$1));
}));

(cljs.core.async.t_cljs$core$async69722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69724){
var self__ = this;
var _69724__$1 = this;
return self__.meta69723;
}));

(cljs.core.async.t_cljs$core$async69722.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69722.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async69722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async69722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta69723","meta69723",1782279939,null)], null);
}));

(cljs.core.async.t_cljs$core$async69722.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69722");

(cljs.core.async.t_cljs$core$async69722.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async69722");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69722.
 */
cljs.core.async.__GT_t_cljs$core$async69722 = (function cljs$core$async$__GT_t_cljs$core$async69722(f__$1,blockable__$1,meta69723){
return (new cljs.core.async.t_cljs$core$async69722(f__$1,blockable__$1,meta69723));
});

}

return (new cljs.core.async.t_cljs$core$async69722(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__69755 = arguments.length;
switch (G__69755) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__69765 = arguments.length;
switch (G__69765) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__69769 = arguments.length;
switch (G__69769) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_72214 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_72214) : fn1.call(null,val_72214));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_72214) : fn1.call(null,val_72214));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__69775 = arguments.length;
switch (G__69775) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___72217 = n;
var x_72218 = (0);
while(true){
if((x_72218 < n__4613__auto___72217)){
(a[x_72218] = x_72218);

var G__72219 = (x_72218 + (1));
x_72218 = G__72219;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69785 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69785 = (function (flag,meta69786){
this.flag = flag;
this.meta69786 = meta69786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69787,meta69786__$1){
var self__ = this;
var _69787__$1 = this;
return (new cljs.core.async.t_cljs$core$async69785(self__.flag,meta69786__$1));
}));

(cljs.core.async.t_cljs$core$async69785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69787){
var self__ = this;
var _69787__$1 = this;
return self__.meta69786;
}));

(cljs.core.async.t_cljs$core$async69785.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69785.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async69785.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69785.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async69785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta69786","meta69786",626845827,null)], null);
}));

(cljs.core.async.t_cljs$core$async69785.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69785");

(cljs.core.async.t_cljs$core$async69785.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async69785");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69785.
 */
cljs.core.async.__GT_t_cljs$core$async69785 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async69785(flag__$1,meta69786){
return (new cljs.core.async.t_cljs$core$async69785(flag__$1,meta69786));
});

}

return (new cljs.core.async.t_cljs$core$async69785(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69805 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69805 = (function (flag,cb,meta69806){
this.flag = flag;
this.cb = cb;
this.meta69806 = meta69806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69807,meta69806__$1){
var self__ = this;
var _69807__$1 = this;
return (new cljs.core.async.t_cljs$core$async69805(self__.flag,self__.cb,meta69806__$1));
}));

(cljs.core.async.t_cljs$core$async69805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69807){
var self__ = this;
var _69807__$1 = this;
return self__.meta69806;
}));

(cljs.core.async.t_cljs$core$async69805.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69805.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async69805.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69805.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async69805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta69806","meta69806",472390578,null)], null);
}));

(cljs.core.async.t_cljs$core$async69805.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69805.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69805");

(cljs.core.async.t_cljs$core$async69805.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async69805");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69805.
 */
cljs.core.async.__GT_t_cljs$core$async69805 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async69805(flag__$1,cb__$1,meta69806){
return (new cljs.core.async.t_cljs$core$async69805(flag__$1,cb__$1,meta69806));
});

}

return (new cljs.core.async.t_cljs$core$async69805(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__69841_SHARP_){
var G__69854 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__69841_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__69854) : fret.call(null,G__69854));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__69843_SHARP_){
var G__69860 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__69843_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__69860) : fret.call(null,G__69860));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__72241 = (i + (1));
i = G__72241;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72247 = arguments.length;
var i__4737__auto___72248 = (0);
while(true){
if((i__4737__auto___72248 < len__4736__auto___72247)){
args__4742__auto__.push((arguments[i__4737__auto___72248]));

var G__72249 = (i__4737__auto___72248 + (1));
i__4737__auto___72248 = G__72249;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__69911){
var map__69913 = p__69911;
var map__69913__$1 = (((((!((map__69913 == null))))?(((((map__69913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69913):map__69913);
var opts = map__69913__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq69881){
var G__69882 = cljs.core.first(seq69881);
var seq69881__$1 = cljs.core.next(seq69881);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69882,seq69881__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__69942 = arguments.length;
switch (G__69942) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__69613__auto___72263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = (function (state_70063){
var state_val_70064 = (state_70063[(1)]);
if((state_val_70064 === (7))){
var inst_70053 = (state_70063[(2)]);
var state_70063__$1 = state_70063;
var statearr_70068_72264 = state_70063__$1;
(statearr_70068_72264[(2)] = inst_70053);

(statearr_70068_72264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (1))){
var state_70063__$1 = state_70063;
var statearr_70069_72265 = state_70063__$1;
(statearr_70069_72265[(2)] = null);

(statearr_70069_72265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (4))){
var inst_70009 = (state_70063[(7)]);
var inst_70009__$1 = (state_70063[(2)]);
var inst_70022 = (inst_70009__$1 == null);
var state_70063__$1 = (function (){var statearr_70074 = state_70063;
(statearr_70074[(7)] = inst_70009__$1);

return statearr_70074;
})();
if(cljs.core.truth_(inst_70022)){
var statearr_70075_72269 = state_70063__$1;
(statearr_70075_72269[(1)] = (5));

} else {
var statearr_70077_72270 = state_70063__$1;
(statearr_70077_72270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (13))){
var state_70063__$1 = state_70063;
var statearr_70078_72271 = state_70063__$1;
(statearr_70078_72271[(2)] = null);

(statearr_70078_72271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (6))){
var inst_70009 = (state_70063[(7)]);
var state_70063__$1 = state_70063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70063__$1,(11),to,inst_70009);
} else {
if((state_val_70064 === (3))){
var inst_70056 = (state_70063[(2)]);
var state_70063__$1 = state_70063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70063__$1,inst_70056);
} else {
if((state_val_70064 === (12))){
var state_70063__$1 = state_70063;
var statearr_70087_72281 = state_70063__$1;
(statearr_70087_72281[(2)] = null);

(statearr_70087_72281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (2))){
var state_70063__$1 = state_70063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70063__$1,(4),from);
} else {
if((state_val_70064 === (11))){
var inst_70042 = (state_70063[(2)]);
var state_70063__$1 = state_70063;
if(cljs.core.truth_(inst_70042)){
var statearr_70090_72286 = state_70063__$1;
(statearr_70090_72286[(1)] = (12));

} else {
var statearr_70091_72287 = state_70063__$1;
(statearr_70091_72287[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (9))){
var state_70063__$1 = state_70063;
var statearr_70092_72289 = state_70063__$1;
(statearr_70092_72289[(2)] = null);

(statearr_70092_72289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (5))){
var state_70063__$1 = state_70063;
if(cljs.core.truth_(close_QMARK_)){
var statearr_70094_72298 = state_70063__$1;
(statearr_70094_72298[(1)] = (8));

} else {
var statearr_70095_72300 = state_70063__$1;
(statearr_70095_72300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (14))){
var inst_70051 = (state_70063[(2)]);
var state_70063__$1 = state_70063;
var statearr_70096_72301 = state_70063__$1;
(statearr_70096_72301[(2)] = inst_70051);

(statearr_70096_72301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (10))){
var inst_70038 = (state_70063[(2)]);
var state_70063__$1 = state_70063;
var statearr_70109_72302 = state_70063__$1;
(statearr_70109_72302[(2)] = inst_70038);

(statearr_70109_72302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70064 === (8))){
var inst_70034 = cljs.core.async.close_BANG_(to);
var state_70063__$1 = state_70063;
var statearr_70116_72304 = state_70063__$1;
(statearr_70116_72304[(2)] = inst_70034);

(statearr_70116_72304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69361__auto__ = null;
var cljs$core$async$state_machine__69361__auto____0 = (function (){
var statearr_70118 = [null,null,null,null,null,null,null,null];
(statearr_70118[(0)] = cljs$core$async$state_machine__69361__auto__);

(statearr_70118[(1)] = (1));

return statearr_70118;
});
var cljs$core$async$state_machine__69361__auto____1 = (function (state_70063){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_70063);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e70123){var ex__69364__auto__ = e70123;
var statearr_70124_72305 = state_70063;
(statearr_70124_72305[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_70063[(4)]))){
var statearr_70127_72307 = state_70063;
(statearr_70127_72307[(1)] = cljs.core.first((state_70063[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72311 = state_70063;
state_70063 = G__72311;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$state_machine__69361__auto__ = function(state_70063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69361__auto____1.call(this,state_70063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69361__auto____0;
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69361__auto____1;
return cljs$core$async$state_machine__69361__auto__;
})()
})();
var state__69615__auto__ = (function (){var statearr_70129 = f__69614__auto__();
(statearr_70129[(6)] = c__69613__auto___72263);

return statearr_70129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__70137){
var vec__70138 = p__70137;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70138,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70138,(1),null);
var job = vec__70138;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__69613__auto___72317 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = (function (state_70145){
var state_val_70146 = (state_70145[(1)]);
if((state_val_70146 === (1))){
var state_70145__$1 = state_70145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70145__$1,(2),res,v);
} else {
if((state_val_70146 === (2))){
var inst_70142 = (state_70145[(2)]);
var inst_70143 = cljs.core.async.close_BANG_(res);
var state_70145__$1 = (function (){var statearr_70148 = state_70145;
(statearr_70148[(7)] = inst_70142);

return statearr_70148;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_70145__$1,inst_70143);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____0 = (function (){
var statearr_70149 = [null,null,null,null,null,null,null,null];
(statearr_70149[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__);

(statearr_70149[(1)] = (1));

return statearr_70149;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____1 = (function (state_70145){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_70145);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e70151){var ex__69364__auto__ = e70151;
var statearr_70153_72324 = state_70145;
(statearr_70153_72324[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_70145[(4)]))){
var statearr_70154_72326 = state_70145;
(statearr_70154_72326[(1)] = cljs.core.first((state_70145[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72327 = state_70145;
state_70145 = G__72327;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__ = function(state_70145){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____1.call(this,state_70145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__;
})()
})();
var state__69615__auto__ = (function (){var statearr_70155 = f__69614__auto__();
(statearr_70155[(6)] = c__69613__auto___72317);

return statearr_70155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__70156){
var vec__70157 = p__70156;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70157,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70157,(1),null);
var job = vec__70157;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___72332 = n;
var __72333 = (0);
while(true){
if((__72333 < n__4613__auto___72332)){
var G__70163_72334 = type;
var G__70163_72335__$1 = (((G__70163_72334 instanceof cljs.core.Keyword))?G__70163_72334.fqn:null);
switch (G__70163_72335__$1) {
case "compute":
var c__69613__auto___72337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__72333,c__69613__auto___72337,G__70163_72334,G__70163_72335__$1,n__4613__auto___72332,jobs,results,process,async){
return (function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = ((function (__72333,c__69613__auto___72337,G__70163_72334,G__70163_72335__$1,n__4613__auto___72332,jobs,results,process,async){
return (function (state_70177){
var state_val_70178 = (state_70177[(1)]);
if((state_val_70178 === (1))){
var state_70177__$1 = state_70177;
var statearr_70184_72339 = state_70177__$1;
(statearr_70184_72339[(2)] = null);

(statearr_70184_72339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70178 === (2))){
var state_70177__$1 = state_70177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70177__$1,(4),jobs);
} else {
if((state_val_70178 === (3))){
var inst_70175 = (state_70177[(2)]);
var state_70177__$1 = state_70177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70177__$1,inst_70175);
} else {
if((state_val_70178 === (4))){
var inst_70167 = (state_70177[(2)]);
var inst_70168 = process(inst_70167);
var state_70177__$1 = state_70177;
if(cljs.core.truth_(inst_70168)){
var statearr_70195_72348 = state_70177__$1;
(statearr_70195_72348[(1)] = (5));

} else {
var statearr_70200_72349 = state_70177__$1;
(statearr_70200_72349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70178 === (5))){
var state_70177__$1 = state_70177;
var statearr_70205_72350 = state_70177__$1;
(statearr_70205_72350[(2)] = null);

(statearr_70205_72350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70178 === (6))){
var state_70177__$1 = state_70177;
var statearr_70206_72351 = state_70177__$1;
(statearr_70206_72351[(2)] = null);

(statearr_70206_72351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70178 === (7))){
var inst_70173 = (state_70177[(2)]);
var state_70177__$1 = state_70177;
var statearr_70207_72353 = state_70177__$1;
(statearr_70207_72353[(2)] = inst_70173);

(statearr_70207_72353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__72333,c__69613__auto___72337,G__70163_72334,G__70163_72335__$1,n__4613__auto___72332,jobs,results,process,async))
;
return ((function (__72333,switch__69360__auto__,c__69613__auto___72337,G__70163_72334,G__70163_72335__$1,n__4613__auto___72332,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____0 = (function (){
var statearr_70208 = [null,null,null,null,null,null,null];
(statearr_70208[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__);

(statearr_70208[(1)] = (1));

return statearr_70208;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____1 = (function (state_70177){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_70177);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e70209){var ex__69364__auto__ = e70209;
var statearr_70210_72355 = state_70177;
(statearr_70210_72355[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_70177[(4)]))){
var statearr_70211_72358 = state_70177;
(statearr_70211_72358[(1)] = cljs.core.first((state_70177[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72360 = state_70177;
state_70177 = G__72360;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__ = function(state_70177){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____1.call(this,state_70177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__;
})()
;})(__72333,switch__69360__auto__,c__69613__auto___72337,G__70163_72334,G__70163_72335__$1,n__4613__auto___72332,jobs,results,process,async))
})();
var state__69615__auto__ = (function (){var statearr_70212 = f__69614__auto__();
(statearr_70212[(6)] = c__69613__auto___72337);

return statearr_70212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
});})(__72333,c__69613__auto___72337,G__70163_72334,G__70163_72335__$1,n__4613__auto___72332,jobs,results,process,async))
);


break;
case "async":
var c__69613__auto___72363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__72333,c__69613__auto___72363,G__70163_72334,G__70163_72335__$1,n__4613__auto___72332,jobs,results,process,async){
return (function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = ((function (__72333,c__69613__auto___72363,G__70163_72334,G__70163_72335__$1,n__4613__auto___72332,jobs,results,process,async){
return (function (state_70227){
var state_val_70228 = (state_70227[(1)]);
if((state_val_70228 === (1))){
var state_70227__$1 = state_70227;
var statearr_70229_72364 = state_70227__$1;
(statearr_70229_72364[(2)] = null);

(statearr_70229_72364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70228 === (2))){
var state_70227__$1 = state_70227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70227__$1,(4),jobs);
} else {
if((state_val_70228 === (3))){
var inst_70225 = (state_70227[(2)]);
var state_70227__$1 = state_70227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70227__$1,inst_70225);
} else {
if((state_val_70228 === (4))){
var inst_70217 = (state_70227[(2)]);
var inst_70218 = async(inst_70217);
var state_70227__$1 = state_70227;
if(cljs.core.truth_(inst_70218)){
var statearr_70231_72367 = state_70227__$1;
(statearr_70231_72367[(1)] = (5));

} else {
var statearr_70232_72368 = state_70227__$1;
(statearr_70232_72368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70228 === (5))){
var state_70227__$1 = state_70227;
var statearr_70233_72374 = state_70227__$1;
(statearr_70233_72374[(2)] = null);

(statearr_70233_72374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70228 === (6))){
var state_70227__$1 = state_70227;
var statearr_70236_72378 = state_70227__$1;
(statearr_70236_72378[(2)] = null);

(statearr_70236_72378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70228 === (7))){
var inst_70223 = (state_70227[(2)]);
var state_70227__$1 = state_70227;
var statearr_70237_72379 = state_70227__$1;
(statearr_70237_72379[(2)] = inst_70223);

(statearr_70237_72379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__72333,c__69613__auto___72363,G__70163_72334,G__70163_72335__$1,n__4613__auto___72332,jobs,results,process,async))
;
return ((function (__72333,switch__69360__auto__,c__69613__auto___72363,G__70163_72334,G__70163_72335__$1,n__4613__auto___72332,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____0 = (function (){
var statearr_70238 = [null,null,null,null,null,null,null];
(statearr_70238[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__);

(statearr_70238[(1)] = (1));

return statearr_70238;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____1 = (function (state_70227){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_70227);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e70240){var ex__69364__auto__ = e70240;
var statearr_70241_72386 = state_70227;
(statearr_70241_72386[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_70227[(4)]))){
var statearr_70242_72387 = state_70227;
(statearr_70242_72387[(1)] = cljs.core.first((state_70227[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72391 = state_70227;
state_70227 = G__72391;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__ = function(state_70227){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____1.call(this,state_70227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__;
})()
;})(__72333,switch__69360__auto__,c__69613__auto___72363,G__70163_72334,G__70163_72335__$1,n__4613__auto___72332,jobs,results,process,async))
})();
var state__69615__auto__ = (function (){var statearr_70243 = f__69614__auto__();
(statearr_70243[(6)] = c__69613__auto___72363);

return statearr_70243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
});})(__72333,c__69613__auto___72363,G__70163_72334,G__70163_72335__$1,n__4613__auto___72332,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__70163_72335__$1)].join('')));

}

var G__72392 = (__72333 + (1));
__72333 = G__72392;
continue;
} else {
}
break;
}

var c__69613__auto___72393 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = (function (state_70267){
var state_val_70268 = (state_70267[(1)]);
if((state_val_70268 === (7))){
var inst_70263 = (state_70267[(2)]);
var state_70267__$1 = state_70267;
var statearr_70271_72398 = state_70267__$1;
(statearr_70271_72398[(2)] = inst_70263);

(statearr_70271_72398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70268 === (1))){
var state_70267__$1 = state_70267;
var statearr_70273_72402 = state_70267__$1;
(statearr_70273_72402[(2)] = null);

(statearr_70273_72402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70268 === (4))){
var inst_70248 = (state_70267[(7)]);
var inst_70248__$1 = (state_70267[(2)]);
var inst_70249 = (inst_70248__$1 == null);
var state_70267__$1 = (function (){var statearr_70274 = state_70267;
(statearr_70274[(7)] = inst_70248__$1);

return statearr_70274;
})();
if(cljs.core.truth_(inst_70249)){
var statearr_70276_72408 = state_70267__$1;
(statearr_70276_72408[(1)] = (5));

} else {
var statearr_70277_72412 = state_70267__$1;
(statearr_70277_72412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70268 === (6))){
var inst_70253 = (state_70267[(8)]);
var inst_70248 = (state_70267[(7)]);
var inst_70253__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_70254 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70255 = [inst_70248,inst_70253__$1];
var inst_70256 = (new cljs.core.PersistentVector(null,2,(5),inst_70254,inst_70255,null));
var state_70267__$1 = (function (){var statearr_70278 = state_70267;
(statearr_70278[(8)] = inst_70253__$1);

return statearr_70278;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70267__$1,(8),jobs,inst_70256);
} else {
if((state_val_70268 === (3))){
var inst_70265 = (state_70267[(2)]);
var state_70267__$1 = state_70267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70267__$1,inst_70265);
} else {
if((state_val_70268 === (2))){
var state_70267__$1 = state_70267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70267__$1,(4),from);
} else {
if((state_val_70268 === (9))){
var inst_70260 = (state_70267[(2)]);
var state_70267__$1 = (function (){var statearr_70280 = state_70267;
(statearr_70280[(9)] = inst_70260);

return statearr_70280;
})();
var statearr_70282_72417 = state_70267__$1;
(statearr_70282_72417[(2)] = null);

(statearr_70282_72417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70268 === (5))){
var inst_70251 = cljs.core.async.close_BANG_(jobs);
var state_70267__$1 = state_70267;
var statearr_70283_72421 = state_70267__$1;
(statearr_70283_72421[(2)] = inst_70251);

(statearr_70283_72421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70268 === (8))){
var inst_70253 = (state_70267[(8)]);
var inst_70258 = (state_70267[(2)]);
var state_70267__$1 = (function (){var statearr_70284 = state_70267;
(statearr_70284[(10)] = inst_70258);

return statearr_70284;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70267__$1,(9),results,inst_70253);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____0 = (function (){
var statearr_70286 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_70286[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__);

(statearr_70286[(1)] = (1));

return statearr_70286;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____1 = (function (state_70267){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_70267);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e70287){var ex__69364__auto__ = e70287;
var statearr_70288_72431 = state_70267;
(statearr_70288_72431[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_70267[(4)]))){
var statearr_70289_72433 = state_70267;
(statearr_70289_72433[(1)] = cljs.core.first((state_70267[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72438 = state_70267;
state_70267 = G__72438;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__ = function(state_70267){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____1.call(this,state_70267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__;
})()
})();
var state__69615__auto__ = (function (){var statearr_70295 = f__69614__auto__();
(statearr_70295[(6)] = c__69613__auto___72393);

return statearr_70295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
}));


var c__69613__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = (function (state_70349){
var state_val_70350 = (state_70349[(1)]);
if((state_val_70350 === (7))){
var inst_70345 = (state_70349[(2)]);
var state_70349__$1 = state_70349;
var statearr_70352_72439 = state_70349__$1;
(statearr_70352_72439[(2)] = inst_70345);

(statearr_70352_72439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70350 === (20))){
var state_70349__$1 = state_70349;
var statearr_70353_72440 = state_70349__$1;
(statearr_70353_72440[(2)] = null);

(statearr_70353_72440[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70350 === (1))){
var state_70349__$1 = state_70349;
var statearr_70354_72447 = state_70349__$1;
(statearr_70354_72447[(2)] = null);

(statearr_70354_72447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70350 === (4))){
var inst_70302 = (state_70349[(7)]);
var inst_70302__$1 = (state_70349[(2)]);
var inst_70303 = (inst_70302__$1 == null);
var state_70349__$1 = (function (){var statearr_70355 = state_70349;
(statearr_70355[(7)] = inst_70302__$1);

return statearr_70355;
})();
if(cljs.core.truth_(inst_70303)){
var statearr_70356_72448 = state_70349__$1;
(statearr_70356_72448[(1)] = (5));

} else {
var statearr_70357_72449 = state_70349__$1;
(statearr_70357_72449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70350 === (15))){
var inst_70319 = (state_70349[(8)]);
var state_70349__$1 = state_70349;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70349__$1,(18),to,inst_70319);
} else {
if((state_val_70350 === (21))){
var inst_70336 = (state_70349[(2)]);
var state_70349__$1 = state_70349;
var statearr_70358_72456 = state_70349__$1;
(statearr_70358_72456[(2)] = inst_70336);

(statearr_70358_72456[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70350 === (13))){
var inst_70338 = (state_70349[(2)]);
var state_70349__$1 = (function (){var statearr_70360 = state_70349;
(statearr_70360[(9)] = inst_70338);

return statearr_70360;
})();
var statearr_70361_72457 = state_70349__$1;
(statearr_70361_72457[(2)] = null);

(statearr_70361_72457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70350 === (6))){
var inst_70302 = (state_70349[(7)]);
var state_70349__$1 = state_70349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70349__$1,(11),inst_70302);
} else {
if((state_val_70350 === (17))){
var inst_70331 = (state_70349[(2)]);
var state_70349__$1 = state_70349;
if(cljs.core.truth_(inst_70331)){
var statearr_70362_72458 = state_70349__$1;
(statearr_70362_72458[(1)] = (19));

} else {
var statearr_70363_72459 = state_70349__$1;
(statearr_70363_72459[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70350 === (3))){
var inst_70347 = (state_70349[(2)]);
var state_70349__$1 = state_70349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70349__$1,inst_70347);
} else {
if((state_val_70350 === (12))){
var inst_70316 = (state_70349[(10)]);
var state_70349__$1 = state_70349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70349__$1,(14),inst_70316);
} else {
if((state_val_70350 === (2))){
var state_70349__$1 = state_70349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70349__$1,(4),results);
} else {
if((state_val_70350 === (19))){
var state_70349__$1 = state_70349;
var statearr_70364_72462 = state_70349__$1;
(statearr_70364_72462[(2)] = null);

(statearr_70364_72462[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70350 === (11))){
var inst_70316 = (state_70349[(2)]);
var state_70349__$1 = (function (){var statearr_70365 = state_70349;
(statearr_70365[(10)] = inst_70316);

return statearr_70365;
})();
var statearr_70367_72464 = state_70349__$1;
(statearr_70367_72464[(2)] = null);

(statearr_70367_72464[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70350 === (9))){
var state_70349__$1 = state_70349;
var statearr_70368_72465 = state_70349__$1;
(statearr_70368_72465[(2)] = null);

(statearr_70368_72465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70350 === (5))){
var state_70349__$1 = state_70349;
if(cljs.core.truth_(close_QMARK_)){
var statearr_70369_72466 = state_70349__$1;
(statearr_70369_72466[(1)] = (8));

} else {
var statearr_70370_72467 = state_70349__$1;
(statearr_70370_72467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70350 === (14))){
var inst_70319 = (state_70349[(8)]);
var inst_70319__$1 = (state_70349[(2)]);
var inst_70320 = (inst_70319__$1 == null);
var inst_70321 = cljs.core.not(inst_70320);
var state_70349__$1 = (function (){var statearr_70371 = state_70349;
(statearr_70371[(8)] = inst_70319__$1);

return statearr_70371;
})();
if(inst_70321){
var statearr_70372_72469 = state_70349__$1;
(statearr_70372_72469[(1)] = (15));

} else {
var statearr_70373_72471 = state_70349__$1;
(statearr_70373_72471[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70350 === (16))){
var state_70349__$1 = state_70349;
var statearr_70374_72473 = state_70349__$1;
(statearr_70374_72473[(2)] = false);

(statearr_70374_72473[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70350 === (10))){
var inst_70313 = (state_70349[(2)]);
var state_70349__$1 = state_70349;
var statearr_70375_72479 = state_70349__$1;
(statearr_70375_72479[(2)] = inst_70313);

(statearr_70375_72479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70350 === (18))){
var inst_70328 = (state_70349[(2)]);
var state_70349__$1 = state_70349;
var statearr_70376_72488 = state_70349__$1;
(statearr_70376_72488[(2)] = inst_70328);

(statearr_70376_72488[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70350 === (8))){
var inst_70310 = cljs.core.async.close_BANG_(to);
var state_70349__$1 = state_70349;
var statearr_70377_72490 = state_70349__$1;
(statearr_70377_72490[(2)] = inst_70310);

(statearr_70377_72490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____0 = (function (){
var statearr_70379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_70379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__);

(statearr_70379[(1)] = (1));

return statearr_70379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____1 = (function (state_70349){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_70349);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e70380){var ex__69364__auto__ = e70380;
var statearr_70381_72493 = state_70349;
(statearr_70381_72493[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_70349[(4)]))){
var statearr_70382_72494 = state_70349;
(statearr_70382_72494[(1)] = cljs.core.first((state_70349[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72495 = state_70349;
state_70349 = G__72495;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__ = function(state_70349){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____1.call(this,state_70349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69361__auto__;
})()
})();
var state__69615__auto__ = (function (){var statearr_70383 = f__69614__auto__();
(statearr_70383[(6)] = c__69613__auto__);

return statearr_70383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
}));

return c__69613__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__70385 = arguments.length;
switch (G__70385) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__70388 = arguments.length;
switch (G__70388) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__70392 = arguments.length;
switch (G__70392) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__69613__auto___72528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = (function (state_70418){
var state_val_70419 = (state_70418[(1)]);
if((state_val_70419 === (7))){
var inst_70414 = (state_70418[(2)]);
var state_70418__$1 = state_70418;
var statearr_70421_72529 = state_70418__$1;
(statearr_70421_72529[(2)] = inst_70414);

(statearr_70421_72529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70419 === (1))){
var state_70418__$1 = state_70418;
var statearr_70422_72530 = state_70418__$1;
(statearr_70422_72530[(2)] = null);

(statearr_70422_72530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70419 === (4))){
var inst_70395 = (state_70418[(7)]);
var inst_70395__$1 = (state_70418[(2)]);
var inst_70396 = (inst_70395__$1 == null);
var state_70418__$1 = (function (){var statearr_70423 = state_70418;
(statearr_70423[(7)] = inst_70395__$1);

return statearr_70423;
})();
if(cljs.core.truth_(inst_70396)){
var statearr_70424_72532 = state_70418__$1;
(statearr_70424_72532[(1)] = (5));

} else {
var statearr_70425_72536 = state_70418__$1;
(statearr_70425_72536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70419 === (13))){
var state_70418__$1 = state_70418;
var statearr_70426_72537 = state_70418__$1;
(statearr_70426_72537[(2)] = null);

(statearr_70426_72537[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70419 === (6))){
var inst_70395 = (state_70418[(7)]);
var inst_70401 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_70395) : p.call(null,inst_70395));
var state_70418__$1 = state_70418;
if(cljs.core.truth_(inst_70401)){
var statearr_70427_72538 = state_70418__$1;
(statearr_70427_72538[(1)] = (9));

} else {
var statearr_70428_72539 = state_70418__$1;
(statearr_70428_72539[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70419 === (3))){
var inst_70416 = (state_70418[(2)]);
var state_70418__$1 = state_70418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70418__$1,inst_70416);
} else {
if((state_val_70419 === (12))){
var state_70418__$1 = state_70418;
var statearr_70430_72540 = state_70418__$1;
(statearr_70430_72540[(2)] = null);

(statearr_70430_72540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70419 === (2))){
var state_70418__$1 = state_70418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70418__$1,(4),ch);
} else {
if((state_val_70419 === (11))){
var inst_70395 = (state_70418[(7)]);
var inst_70405 = (state_70418[(2)]);
var state_70418__$1 = state_70418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70418__$1,(8),inst_70405,inst_70395);
} else {
if((state_val_70419 === (9))){
var state_70418__$1 = state_70418;
var statearr_70431_72554 = state_70418__$1;
(statearr_70431_72554[(2)] = tc);

(statearr_70431_72554[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70419 === (5))){
var inst_70398 = cljs.core.async.close_BANG_(tc);
var inst_70399 = cljs.core.async.close_BANG_(fc);
var state_70418__$1 = (function (){var statearr_70432 = state_70418;
(statearr_70432[(8)] = inst_70398);

return statearr_70432;
})();
var statearr_70433_72558 = state_70418__$1;
(statearr_70433_72558[(2)] = inst_70399);

(statearr_70433_72558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70419 === (14))){
var inst_70412 = (state_70418[(2)]);
var state_70418__$1 = state_70418;
var statearr_70434_72559 = state_70418__$1;
(statearr_70434_72559[(2)] = inst_70412);

(statearr_70434_72559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70419 === (10))){
var state_70418__$1 = state_70418;
var statearr_70435_72560 = state_70418__$1;
(statearr_70435_72560[(2)] = fc);

(statearr_70435_72560[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70419 === (8))){
var inst_70407 = (state_70418[(2)]);
var state_70418__$1 = state_70418;
if(cljs.core.truth_(inst_70407)){
var statearr_70437_72561 = state_70418__$1;
(statearr_70437_72561[(1)] = (12));

} else {
var statearr_70438_72562 = state_70418__$1;
(statearr_70438_72562[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69361__auto__ = null;
var cljs$core$async$state_machine__69361__auto____0 = (function (){
var statearr_70439 = [null,null,null,null,null,null,null,null,null];
(statearr_70439[(0)] = cljs$core$async$state_machine__69361__auto__);

(statearr_70439[(1)] = (1));

return statearr_70439;
});
var cljs$core$async$state_machine__69361__auto____1 = (function (state_70418){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_70418);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e70440){var ex__69364__auto__ = e70440;
var statearr_70441_72563 = state_70418;
(statearr_70441_72563[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_70418[(4)]))){
var statearr_70442_72570 = state_70418;
(statearr_70442_72570[(1)] = cljs.core.first((state_70418[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72571 = state_70418;
state_70418 = G__72571;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$state_machine__69361__auto__ = function(state_70418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69361__auto____1.call(this,state_70418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69361__auto____0;
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69361__auto____1;
return cljs$core$async$state_machine__69361__auto__;
})()
})();
var state__69615__auto__ = (function (){var statearr_70443 = f__69614__auto__();
(statearr_70443[(6)] = c__69613__auto___72528);

return statearr_70443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__69613__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = (function (state_70466){
var state_val_70467 = (state_70466[(1)]);
if((state_val_70467 === (7))){
var inst_70462 = (state_70466[(2)]);
var state_70466__$1 = state_70466;
var statearr_70468_72575 = state_70466__$1;
(statearr_70468_72575[(2)] = inst_70462);

(statearr_70468_72575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70467 === (1))){
var inst_70445 = init;
var inst_70446 = inst_70445;
var state_70466__$1 = (function (){var statearr_70470 = state_70466;
(statearr_70470[(7)] = inst_70446);

return statearr_70470;
})();
var statearr_70471_72576 = state_70466__$1;
(statearr_70471_72576[(2)] = null);

(statearr_70471_72576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70467 === (4))){
var inst_70449 = (state_70466[(8)]);
var inst_70449__$1 = (state_70466[(2)]);
var inst_70450 = (inst_70449__$1 == null);
var state_70466__$1 = (function (){var statearr_70472 = state_70466;
(statearr_70472[(8)] = inst_70449__$1);

return statearr_70472;
})();
if(cljs.core.truth_(inst_70450)){
var statearr_70473_72577 = state_70466__$1;
(statearr_70473_72577[(1)] = (5));

} else {
var statearr_70474_72578 = state_70466__$1;
(statearr_70474_72578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70467 === (6))){
var inst_70453 = (state_70466[(9)]);
var inst_70449 = (state_70466[(8)]);
var inst_70446 = (state_70466[(7)]);
var inst_70453__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_70446,inst_70449) : f.call(null,inst_70446,inst_70449));
var inst_70454 = cljs.core.reduced_QMARK_(inst_70453__$1);
var state_70466__$1 = (function (){var statearr_70475 = state_70466;
(statearr_70475[(9)] = inst_70453__$1);

return statearr_70475;
})();
if(inst_70454){
var statearr_70476_72585 = state_70466__$1;
(statearr_70476_72585[(1)] = (8));

} else {
var statearr_70477_72586 = state_70466__$1;
(statearr_70477_72586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70467 === (3))){
var inst_70464 = (state_70466[(2)]);
var state_70466__$1 = state_70466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70466__$1,inst_70464);
} else {
if((state_val_70467 === (2))){
var state_70466__$1 = state_70466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70466__$1,(4),ch);
} else {
if((state_val_70467 === (9))){
var inst_70453 = (state_70466[(9)]);
var inst_70446 = inst_70453;
var state_70466__$1 = (function (){var statearr_70479 = state_70466;
(statearr_70479[(7)] = inst_70446);

return statearr_70479;
})();
var statearr_70480_72587 = state_70466__$1;
(statearr_70480_72587[(2)] = null);

(statearr_70480_72587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70467 === (5))){
var inst_70446 = (state_70466[(7)]);
var state_70466__$1 = state_70466;
var statearr_70481_72588 = state_70466__$1;
(statearr_70481_72588[(2)] = inst_70446);

(statearr_70481_72588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70467 === (10))){
var inst_70460 = (state_70466[(2)]);
var state_70466__$1 = state_70466;
var statearr_70482_72589 = state_70466__$1;
(statearr_70482_72589[(2)] = inst_70460);

(statearr_70482_72589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70467 === (8))){
var inst_70453 = (state_70466[(9)]);
var inst_70456 = cljs.core.deref(inst_70453);
var state_70466__$1 = state_70466;
var statearr_70483_72590 = state_70466__$1;
(statearr_70483_72590[(2)] = inst_70456);

(statearr_70483_72590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__69361__auto__ = null;
var cljs$core$async$reduce_$_state_machine__69361__auto____0 = (function (){
var statearr_70484 = [null,null,null,null,null,null,null,null,null,null];
(statearr_70484[(0)] = cljs$core$async$reduce_$_state_machine__69361__auto__);

(statearr_70484[(1)] = (1));

return statearr_70484;
});
var cljs$core$async$reduce_$_state_machine__69361__auto____1 = (function (state_70466){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_70466);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e70485){var ex__69364__auto__ = e70485;
var statearr_70486_72591 = state_70466;
(statearr_70486_72591[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_70466[(4)]))){
var statearr_70487_72592 = state_70466;
(statearr_70487_72592[(1)] = cljs.core.first((state_70466[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72593 = state_70466;
state_70466 = G__72593;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__69361__auto__ = function(state_70466){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__69361__auto____1.call(this,state_70466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__69361__auto____0;
cljs$core$async$reduce_$_state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__69361__auto____1;
return cljs$core$async$reduce_$_state_machine__69361__auto__;
})()
})();
var state__69615__auto__ = (function (){var statearr_70489 = f__69614__auto__();
(statearr_70489[(6)] = c__69613__auto__);

return statearr_70489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
}));

return c__69613__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__69613__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = (function (state_70495){
var state_val_70496 = (state_70495[(1)]);
if((state_val_70496 === (1))){
var inst_70490 = cljs.core.async.reduce(f__$1,init,ch);
var state_70495__$1 = state_70495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70495__$1,(2),inst_70490);
} else {
if((state_val_70496 === (2))){
var inst_70492 = (state_70495[(2)]);
var inst_70493 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_70492) : f__$1.call(null,inst_70492));
var state_70495__$1 = state_70495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70495__$1,inst_70493);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__69361__auto__ = null;
var cljs$core$async$transduce_$_state_machine__69361__auto____0 = (function (){
var statearr_70498 = [null,null,null,null,null,null,null];
(statearr_70498[(0)] = cljs$core$async$transduce_$_state_machine__69361__auto__);

(statearr_70498[(1)] = (1));

return statearr_70498;
});
var cljs$core$async$transduce_$_state_machine__69361__auto____1 = (function (state_70495){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_70495);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e70499){var ex__69364__auto__ = e70499;
var statearr_70500_72594 = state_70495;
(statearr_70500_72594[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_70495[(4)]))){
var statearr_70501_72595 = state_70495;
(statearr_70501_72595[(1)] = cljs.core.first((state_70495[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72597 = state_70495;
state_70495 = G__72597;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__69361__auto__ = function(state_70495){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__69361__auto____1.call(this,state_70495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__69361__auto____0;
cljs$core$async$transduce_$_state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__69361__auto____1;
return cljs$core$async$transduce_$_state_machine__69361__auto__;
})()
})();
var state__69615__auto__ = (function (){var statearr_70502 = f__69614__auto__();
(statearr_70502[(6)] = c__69613__auto__);

return statearr_70502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
}));

return c__69613__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__70505 = arguments.length;
switch (G__70505) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__69613__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = (function (state_70530){
var state_val_70531 = (state_70530[(1)]);
if((state_val_70531 === (7))){
var inst_70512 = (state_70530[(2)]);
var state_70530__$1 = state_70530;
var statearr_70533_72607 = state_70530__$1;
(statearr_70533_72607[(2)] = inst_70512);

(statearr_70533_72607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70531 === (1))){
var inst_70506 = cljs.core.seq(coll);
var inst_70507 = inst_70506;
var state_70530__$1 = (function (){var statearr_70534 = state_70530;
(statearr_70534[(7)] = inst_70507);

return statearr_70534;
})();
var statearr_70535_72608 = state_70530__$1;
(statearr_70535_72608[(2)] = null);

(statearr_70535_72608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70531 === (4))){
var inst_70507 = (state_70530[(7)]);
var inst_70510 = cljs.core.first(inst_70507);
var state_70530__$1 = state_70530;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70530__$1,(7),ch,inst_70510);
} else {
if((state_val_70531 === (13))){
var inst_70524 = (state_70530[(2)]);
var state_70530__$1 = state_70530;
var statearr_70536_72609 = state_70530__$1;
(statearr_70536_72609[(2)] = inst_70524);

(statearr_70536_72609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70531 === (6))){
var inst_70515 = (state_70530[(2)]);
var state_70530__$1 = state_70530;
if(cljs.core.truth_(inst_70515)){
var statearr_70537_72613 = state_70530__$1;
(statearr_70537_72613[(1)] = (8));

} else {
var statearr_70538_72614 = state_70530__$1;
(statearr_70538_72614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70531 === (3))){
var inst_70528 = (state_70530[(2)]);
var state_70530__$1 = state_70530;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70530__$1,inst_70528);
} else {
if((state_val_70531 === (12))){
var state_70530__$1 = state_70530;
var statearr_70539_72616 = state_70530__$1;
(statearr_70539_72616[(2)] = null);

(statearr_70539_72616[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70531 === (2))){
var inst_70507 = (state_70530[(7)]);
var state_70530__$1 = state_70530;
if(cljs.core.truth_(inst_70507)){
var statearr_70541_72618 = state_70530__$1;
(statearr_70541_72618[(1)] = (4));

} else {
var statearr_70542_72619 = state_70530__$1;
(statearr_70542_72619[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70531 === (11))){
var inst_70521 = cljs.core.async.close_BANG_(ch);
var state_70530__$1 = state_70530;
var statearr_70543_72620 = state_70530__$1;
(statearr_70543_72620[(2)] = inst_70521);

(statearr_70543_72620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70531 === (9))){
var state_70530__$1 = state_70530;
if(cljs.core.truth_(close_QMARK_)){
var statearr_70544_72621 = state_70530__$1;
(statearr_70544_72621[(1)] = (11));

} else {
var statearr_70545_72622 = state_70530__$1;
(statearr_70545_72622[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70531 === (5))){
var inst_70507 = (state_70530[(7)]);
var state_70530__$1 = state_70530;
var statearr_70546_72624 = state_70530__$1;
(statearr_70546_72624[(2)] = inst_70507);

(statearr_70546_72624[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70531 === (10))){
var inst_70526 = (state_70530[(2)]);
var state_70530__$1 = state_70530;
var statearr_70547_72626 = state_70530__$1;
(statearr_70547_72626[(2)] = inst_70526);

(statearr_70547_72626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70531 === (8))){
var inst_70507 = (state_70530[(7)]);
var inst_70517 = cljs.core.next(inst_70507);
var inst_70507__$1 = inst_70517;
var state_70530__$1 = (function (){var statearr_70548 = state_70530;
(statearr_70548[(7)] = inst_70507__$1);

return statearr_70548;
})();
var statearr_70550_72627 = state_70530__$1;
(statearr_70550_72627[(2)] = null);

(statearr_70550_72627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69361__auto__ = null;
var cljs$core$async$state_machine__69361__auto____0 = (function (){
var statearr_70551 = [null,null,null,null,null,null,null,null];
(statearr_70551[(0)] = cljs$core$async$state_machine__69361__auto__);

(statearr_70551[(1)] = (1));

return statearr_70551;
});
var cljs$core$async$state_machine__69361__auto____1 = (function (state_70530){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_70530);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e70552){var ex__69364__auto__ = e70552;
var statearr_70553_72629 = state_70530;
(statearr_70553_72629[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_70530[(4)]))){
var statearr_70554_72630 = state_70530;
(statearr_70554_72630[(1)] = cljs.core.first((state_70530[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72631 = state_70530;
state_70530 = G__72631;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$state_machine__69361__auto__ = function(state_70530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69361__auto____1.call(this,state_70530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69361__auto____0;
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69361__auto____1;
return cljs$core$async$state_machine__69361__auto__;
})()
})();
var state__69615__auto__ = (function (){var statearr_70556 = f__69614__auto__();
(statearr_70556[(6)] = c__69613__auto__);

return statearr_70556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
}));

return c__69613__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__70559 = arguments.length;
switch (G__70559) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_72643 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_72643(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_72644 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_72644(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_72645 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_72645(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_72647 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_72647(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70572 = (function (ch,cs,meta70573){
this.ch = ch;
this.cs = cs;
this.meta70573 = meta70573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70574,meta70573__$1){
var self__ = this;
var _70574__$1 = this;
return (new cljs.core.async.t_cljs$core$async70572(self__.ch,self__.cs,meta70573__$1));
}));

(cljs.core.async.t_cljs$core$async70572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70574){
var self__ = this;
var _70574__$1 = this;
return self__.meta70573;
}));

(cljs.core.async.t_cljs$core$async70572.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70572.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async70572.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70572.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async70572.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async70572.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async70572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta70573","meta70573",-86833805,null)], null);
}));

(cljs.core.async.t_cljs$core$async70572.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70572");

(cljs.core.async.t_cljs$core$async70572.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async70572");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70572.
 */
cljs.core.async.__GT_t_cljs$core$async70572 = (function cljs$core$async$mult_$___GT_t_cljs$core$async70572(ch__$1,cs__$1,meta70573){
return (new cljs.core.async.t_cljs$core$async70572(ch__$1,cs__$1,meta70573));
});

}

return (new cljs.core.async.t_cljs$core$async70572(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__69613__auto___72654 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = (function (state_70730){
var state_val_70731 = (state_70730[(1)]);
if((state_val_70731 === (7))){
var inst_70725 = (state_70730[(2)]);
var state_70730__$1 = state_70730;
var statearr_70733_72659 = state_70730__$1;
(statearr_70733_72659[(2)] = inst_70725);

(statearr_70733_72659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (20))){
var inst_70627 = (state_70730[(7)]);
var inst_70641 = cljs.core.first(inst_70627);
var inst_70642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70641,(0),null);
var inst_70643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70641,(1),null);
var state_70730__$1 = (function (){var statearr_70735 = state_70730;
(statearr_70735[(8)] = inst_70642);

return statearr_70735;
})();
if(cljs.core.truth_(inst_70643)){
var statearr_70736_72663 = state_70730__$1;
(statearr_70736_72663[(1)] = (22));

} else {
var statearr_70737_72664 = state_70730__$1;
(statearr_70737_72664[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (27))){
var inst_70594 = (state_70730[(9)]);
var inst_70672 = (state_70730[(10)]);
var inst_70674 = (state_70730[(11)]);
var inst_70679 = (state_70730[(12)]);
var inst_70679__$1 = cljs.core._nth(inst_70672,inst_70674);
var inst_70680 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_70679__$1,inst_70594,done);
var state_70730__$1 = (function (){var statearr_70738 = state_70730;
(statearr_70738[(12)] = inst_70679__$1);

return statearr_70738;
})();
if(cljs.core.truth_(inst_70680)){
var statearr_70739_72675 = state_70730__$1;
(statearr_70739_72675[(1)] = (30));

} else {
var statearr_70740_72676 = state_70730__$1;
(statearr_70740_72676[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (1))){
var state_70730__$1 = state_70730;
var statearr_70741_72677 = state_70730__$1;
(statearr_70741_72677[(2)] = null);

(statearr_70741_72677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (24))){
var inst_70627 = (state_70730[(7)]);
var inst_70648 = (state_70730[(2)]);
var inst_70649 = cljs.core.next(inst_70627);
var inst_70603 = inst_70649;
var inst_70604 = null;
var inst_70605 = (0);
var inst_70606 = (0);
var state_70730__$1 = (function (){var statearr_70742 = state_70730;
(statearr_70742[(13)] = inst_70648);

(statearr_70742[(14)] = inst_70605);

(statearr_70742[(15)] = inst_70603);

(statearr_70742[(16)] = inst_70604);

(statearr_70742[(17)] = inst_70606);

return statearr_70742;
})();
var statearr_70743_72688 = state_70730__$1;
(statearr_70743_72688[(2)] = null);

(statearr_70743_72688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (39))){
var state_70730__$1 = state_70730;
var statearr_70747_72689 = state_70730__$1;
(statearr_70747_72689[(2)] = null);

(statearr_70747_72689[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (4))){
var inst_70594 = (state_70730[(9)]);
var inst_70594__$1 = (state_70730[(2)]);
var inst_70595 = (inst_70594__$1 == null);
var state_70730__$1 = (function (){var statearr_70748 = state_70730;
(statearr_70748[(9)] = inst_70594__$1);

return statearr_70748;
})();
if(cljs.core.truth_(inst_70595)){
var statearr_70751_72690 = state_70730__$1;
(statearr_70751_72690[(1)] = (5));

} else {
var statearr_70752_72691 = state_70730__$1;
(statearr_70752_72691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (15))){
var inst_70605 = (state_70730[(14)]);
var inst_70603 = (state_70730[(15)]);
var inst_70604 = (state_70730[(16)]);
var inst_70606 = (state_70730[(17)]);
var inst_70623 = (state_70730[(2)]);
var inst_70624 = (inst_70606 + (1));
var tmp70744 = inst_70605;
var tmp70745 = inst_70603;
var tmp70746 = inst_70604;
var inst_70603__$1 = tmp70745;
var inst_70604__$1 = tmp70746;
var inst_70605__$1 = tmp70744;
var inst_70606__$1 = inst_70624;
var state_70730__$1 = (function (){var statearr_70754 = state_70730;
(statearr_70754[(14)] = inst_70605__$1);

(statearr_70754[(15)] = inst_70603__$1);

(statearr_70754[(18)] = inst_70623);

(statearr_70754[(16)] = inst_70604__$1);

(statearr_70754[(17)] = inst_70606__$1);

return statearr_70754;
})();
var statearr_70755_72693 = state_70730__$1;
(statearr_70755_72693[(2)] = null);

(statearr_70755_72693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (21))){
var inst_70652 = (state_70730[(2)]);
var state_70730__$1 = state_70730;
var statearr_70759_72695 = state_70730__$1;
(statearr_70759_72695[(2)] = inst_70652);

(statearr_70759_72695[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (31))){
var inst_70679 = (state_70730[(12)]);
var inst_70683 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_70679);
var state_70730__$1 = state_70730;
var statearr_70763_72696 = state_70730__$1;
(statearr_70763_72696[(2)] = inst_70683);

(statearr_70763_72696[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (32))){
var inst_70672 = (state_70730[(10)]);
var inst_70673 = (state_70730[(19)]);
var inst_70674 = (state_70730[(11)]);
var inst_70671 = (state_70730[(20)]);
var inst_70685 = (state_70730[(2)]);
var inst_70686 = (inst_70674 + (1));
var tmp70756 = inst_70672;
var tmp70757 = inst_70673;
var tmp70758 = inst_70671;
var inst_70671__$1 = tmp70758;
var inst_70672__$1 = tmp70756;
var inst_70673__$1 = tmp70757;
var inst_70674__$1 = inst_70686;
var state_70730__$1 = (function (){var statearr_70767 = state_70730;
(statearr_70767[(10)] = inst_70672__$1);

(statearr_70767[(19)] = inst_70673__$1);

(statearr_70767[(21)] = inst_70685);

(statearr_70767[(11)] = inst_70674__$1);

(statearr_70767[(20)] = inst_70671__$1);

return statearr_70767;
})();
var statearr_70768_72698 = state_70730__$1;
(statearr_70768_72698[(2)] = null);

(statearr_70768_72698[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (40))){
var inst_70698 = (state_70730[(22)]);
var inst_70702 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_70698);
var state_70730__$1 = state_70730;
var statearr_70769_72699 = state_70730__$1;
(statearr_70769_72699[(2)] = inst_70702);

(statearr_70769_72699[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (33))){
var inst_70689 = (state_70730[(23)]);
var inst_70691 = cljs.core.chunked_seq_QMARK_(inst_70689);
var state_70730__$1 = state_70730;
if(inst_70691){
var statearr_70770_72700 = state_70730__$1;
(statearr_70770_72700[(1)] = (36));

} else {
var statearr_70771_72701 = state_70730__$1;
(statearr_70771_72701[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (13))){
var inst_70617 = (state_70730[(24)]);
var inst_70620 = cljs.core.async.close_BANG_(inst_70617);
var state_70730__$1 = state_70730;
var statearr_70772_72702 = state_70730__$1;
(statearr_70772_72702[(2)] = inst_70620);

(statearr_70772_72702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (22))){
var inst_70642 = (state_70730[(8)]);
var inst_70645 = cljs.core.async.close_BANG_(inst_70642);
var state_70730__$1 = state_70730;
var statearr_70773_72703 = state_70730__$1;
(statearr_70773_72703[(2)] = inst_70645);

(statearr_70773_72703[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (36))){
var inst_70689 = (state_70730[(23)]);
var inst_70693 = cljs.core.chunk_first(inst_70689);
var inst_70694 = cljs.core.chunk_rest(inst_70689);
var inst_70695 = cljs.core.count(inst_70693);
var inst_70671 = inst_70694;
var inst_70672 = inst_70693;
var inst_70673 = inst_70695;
var inst_70674 = (0);
var state_70730__$1 = (function (){var statearr_70775 = state_70730;
(statearr_70775[(10)] = inst_70672);

(statearr_70775[(19)] = inst_70673);

(statearr_70775[(11)] = inst_70674);

(statearr_70775[(20)] = inst_70671);

return statearr_70775;
})();
var statearr_70778_72707 = state_70730__$1;
(statearr_70778_72707[(2)] = null);

(statearr_70778_72707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (41))){
var inst_70689 = (state_70730[(23)]);
var inst_70704 = (state_70730[(2)]);
var inst_70705 = cljs.core.next(inst_70689);
var inst_70671 = inst_70705;
var inst_70672 = null;
var inst_70673 = (0);
var inst_70674 = (0);
var state_70730__$1 = (function (){var statearr_70780 = state_70730;
(statearr_70780[(10)] = inst_70672);

(statearr_70780[(19)] = inst_70673);

(statearr_70780[(11)] = inst_70674);

(statearr_70780[(20)] = inst_70671);

(statearr_70780[(25)] = inst_70704);

return statearr_70780;
})();
var statearr_70781_72712 = state_70730__$1;
(statearr_70781_72712[(2)] = null);

(statearr_70781_72712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (43))){
var state_70730__$1 = state_70730;
var statearr_70783_72713 = state_70730__$1;
(statearr_70783_72713[(2)] = null);

(statearr_70783_72713[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (29))){
var inst_70713 = (state_70730[(2)]);
var state_70730__$1 = state_70730;
var statearr_70784_72714 = state_70730__$1;
(statearr_70784_72714[(2)] = inst_70713);

(statearr_70784_72714[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (44))){
var inst_70722 = (state_70730[(2)]);
var state_70730__$1 = (function (){var statearr_70788 = state_70730;
(statearr_70788[(26)] = inst_70722);

return statearr_70788;
})();
var statearr_70789_72715 = state_70730__$1;
(statearr_70789_72715[(2)] = null);

(statearr_70789_72715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (6))){
var inst_70663 = (state_70730[(27)]);
var inst_70662 = cljs.core.deref(cs);
var inst_70663__$1 = cljs.core.keys(inst_70662);
var inst_70664 = cljs.core.count(inst_70663__$1);
var inst_70665 = cljs.core.reset_BANG_(dctr,inst_70664);
var inst_70670 = cljs.core.seq(inst_70663__$1);
var inst_70671 = inst_70670;
var inst_70672 = null;
var inst_70673 = (0);
var inst_70674 = (0);
var state_70730__$1 = (function (){var statearr_70791 = state_70730;
(statearr_70791[(10)] = inst_70672);

(statearr_70791[(19)] = inst_70673);

(statearr_70791[(11)] = inst_70674);

(statearr_70791[(28)] = inst_70665);

(statearr_70791[(20)] = inst_70671);

(statearr_70791[(27)] = inst_70663__$1);

return statearr_70791;
})();
var statearr_70792_72721 = state_70730__$1;
(statearr_70792_72721[(2)] = null);

(statearr_70792_72721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (28))){
var inst_70671 = (state_70730[(20)]);
var inst_70689 = (state_70730[(23)]);
var inst_70689__$1 = cljs.core.seq(inst_70671);
var state_70730__$1 = (function (){var statearr_70796 = state_70730;
(statearr_70796[(23)] = inst_70689__$1);

return statearr_70796;
})();
if(inst_70689__$1){
var statearr_70797_72722 = state_70730__$1;
(statearr_70797_72722[(1)] = (33));

} else {
var statearr_70798_72723 = state_70730__$1;
(statearr_70798_72723[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (25))){
var inst_70673 = (state_70730[(19)]);
var inst_70674 = (state_70730[(11)]);
var inst_70676 = (inst_70674 < inst_70673);
var inst_70677 = inst_70676;
var state_70730__$1 = state_70730;
if(cljs.core.truth_(inst_70677)){
var statearr_70800_72725 = state_70730__$1;
(statearr_70800_72725[(1)] = (27));

} else {
var statearr_70801_72726 = state_70730__$1;
(statearr_70801_72726[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (34))){
var state_70730__$1 = state_70730;
var statearr_70802_72727 = state_70730__$1;
(statearr_70802_72727[(2)] = null);

(statearr_70802_72727[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (17))){
var state_70730__$1 = state_70730;
var statearr_70806_72729 = state_70730__$1;
(statearr_70806_72729[(2)] = null);

(statearr_70806_72729[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (3))){
var inst_70727 = (state_70730[(2)]);
var state_70730__$1 = state_70730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70730__$1,inst_70727);
} else {
if((state_val_70731 === (12))){
var inst_70658 = (state_70730[(2)]);
var state_70730__$1 = state_70730;
var statearr_70807_72733 = state_70730__$1;
(statearr_70807_72733[(2)] = inst_70658);

(statearr_70807_72733[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (2))){
var state_70730__$1 = state_70730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70730__$1,(4),ch);
} else {
if((state_val_70731 === (23))){
var state_70730__$1 = state_70730;
var statearr_70809_72734 = state_70730__$1;
(statearr_70809_72734[(2)] = null);

(statearr_70809_72734[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (35))){
var inst_70711 = (state_70730[(2)]);
var state_70730__$1 = state_70730;
var statearr_70813_72736 = state_70730__$1;
(statearr_70813_72736[(2)] = inst_70711);

(statearr_70813_72736[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (19))){
var inst_70627 = (state_70730[(7)]);
var inst_70631 = cljs.core.chunk_first(inst_70627);
var inst_70632 = cljs.core.chunk_rest(inst_70627);
var inst_70633 = cljs.core.count(inst_70631);
var inst_70603 = inst_70632;
var inst_70604 = inst_70631;
var inst_70605 = inst_70633;
var inst_70606 = (0);
var state_70730__$1 = (function (){var statearr_70814 = state_70730;
(statearr_70814[(14)] = inst_70605);

(statearr_70814[(15)] = inst_70603);

(statearr_70814[(16)] = inst_70604);

(statearr_70814[(17)] = inst_70606);

return statearr_70814;
})();
var statearr_70816_72739 = state_70730__$1;
(statearr_70816_72739[(2)] = null);

(statearr_70816_72739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (11))){
var inst_70627 = (state_70730[(7)]);
var inst_70603 = (state_70730[(15)]);
var inst_70627__$1 = cljs.core.seq(inst_70603);
var state_70730__$1 = (function (){var statearr_70818 = state_70730;
(statearr_70818[(7)] = inst_70627__$1);

return statearr_70818;
})();
if(inst_70627__$1){
var statearr_70820_72740 = state_70730__$1;
(statearr_70820_72740[(1)] = (16));

} else {
var statearr_70822_72741 = state_70730__$1;
(statearr_70822_72741[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (9))){
var inst_70660 = (state_70730[(2)]);
var state_70730__$1 = state_70730;
var statearr_70823_72742 = state_70730__$1;
(statearr_70823_72742[(2)] = inst_70660);

(statearr_70823_72742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (5))){
var inst_70601 = cljs.core.deref(cs);
var inst_70602 = cljs.core.seq(inst_70601);
var inst_70603 = inst_70602;
var inst_70604 = null;
var inst_70605 = (0);
var inst_70606 = (0);
var state_70730__$1 = (function (){var statearr_70825 = state_70730;
(statearr_70825[(14)] = inst_70605);

(statearr_70825[(15)] = inst_70603);

(statearr_70825[(16)] = inst_70604);

(statearr_70825[(17)] = inst_70606);

return statearr_70825;
})();
var statearr_70826_72743 = state_70730__$1;
(statearr_70826_72743[(2)] = null);

(statearr_70826_72743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (14))){
var state_70730__$1 = state_70730;
var statearr_70829_72744 = state_70730__$1;
(statearr_70829_72744[(2)] = null);

(statearr_70829_72744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (45))){
var inst_70719 = (state_70730[(2)]);
var state_70730__$1 = state_70730;
var statearr_70831_72745 = state_70730__$1;
(statearr_70831_72745[(2)] = inst_70719);

(statearr_70831_72745[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (26))){
var inst_70663 = (state_70730[(27)]);
var inst_70715 = (state_70730[(2)]);
var inst_70716 = cljs.core.seq(inst_70663);
var state_70730__$1 = (function (){var statearr_70833 = state_70730;
(statearr_70833[(29)] = inst_70715);

return statearr_70833;
})();
if(inst_70716){
var statearr_70835_72746 = state_70730__$1;
(statearr_70835_72746[(1)] = (42));

} else {
var statearr_70836_72747 = state_70730__$1;
(statearr_70836_72747[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (16))){
var inst_70627 = (state_70730[(7)]);
var inst_70629 = cljs.core.chunked_seq_QMARK_(inst_70627);
var state_70730__$1 = state_70730;
if(inst_70629){
var statearr_70839_72751 = state_70730__$1;
(statearr_70839_72751[(1)] = (19));

} else {
var statearr_70841_72752 = state_70730__$1;
(statearr_70841_72752[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (38))){
var inst_70708 = (state_70730[(2)]);
var state_70730__$1 = state_70730;
var statearr_70842_72753 = state_70730__$1;
(statearr_70842_72753[(2)] = inst_70708);

(statearr_70842_72753[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (30))){
var state_70730__$1 = state_70730;
var statearr_70843_72754 = state_70730__$1;
(statearr_70843_72754[(2)] = null);

(statearr_70843_72754[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (10))){
var inst_70604 = (state_70730[(16)]);
var inst_70606 = (state_70730[(17)]);
var inst_70616 = cljs.core._nth(inst_70604,inst_70606);
var inst_70617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70616,(0),null);
var inst_70618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70616,(1),null);
var state_70730__$1 = (function (){var statearr_70846 = state_70730;
(statearr_70846[(24)] = inst_70617);

return statearr_70846;
})();
if(cljs.core.truth_(inst_70618)){
var statearr_70848_72755 = state_70730__$1;
(statearr_70848_72755[(1)] = (13));

} else {
var statearr_70850_72756 = state_70730__$1;
(statearr_70850_72756[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (18))){
var inst_70656 = (state_70730[(2)]);
var state_70730__$1 = state_70730;
var statearr_70852_72757 = state_70730__$1;
(statearr_70852_72757[(2)] = inst_70656);

(statearr_70852_72757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (42))){
var state_70730__$1 = state_70730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70730__$1,(45),dchan);
} else {
if((state_val_70731 === (37))){
var inst_70594 = (state_70730[(9)]);
var inst_70698 = (state_70730[(22)]);
var inst_70689 = (state_70730[(23)]);
var inst_70698__$1 = cljs.core.first(inst_70689);
var inst_70699 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_70698__$1,inst_70594,done);
var state_70730__$1 = (function (){var statearr_70855 = state_70730;
(statearr_70855[(22)] = inst_70698__$1);

return statearr_70855;
})();
if(cljs.core.truth_(inst_70699)){
var statearr_70856_72759 = state_70730__$1;
(statearr_70856_72759[(1)] = (39));

} else {
var statearr_70857_72760 = state_70730__$1;
(statearr_70857_72760[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70731 === (8))){
var inst_70605 = (state_70730[(14)]);
var inst_70606 = (state_70730[(17)]);
var inst_70608 = (inst_70606 < inst_70605);
var inst_70609 = inst_70608;
var state_70730__$1 = state_70730;
if(cljs.core.truth_(inst_70609)){
var statearr_70861_72761 = state_70730__$1;
(statearr_70861_72761[(1)] = (10));

} else {
var statearr_70862_72762 = state_70730__$1;
(statearr_70862_72762[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__69361__auto__ = null;
var cljs$core$async$mult_$_state_machine__69361__auto____0 = (function (){
var statearr_70864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70864[(0)] = cljs$core$async$mult_$_state_machine__69361__auto__);

(statearr_70864[(1)] = (1));

return statearr_70864;
});
var cljs$core$async$mult_$_state_machine__69361__auto____1 = (function (state_70730){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_70730);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e70867){var ex__69364__auto__ = e70867;
var statearr_70868_72771 = state_70730;
(statearr_70868_72771[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_70730[(4)]))){
var statearr_70870_72772 = state_70730;
(statearr_70870_72772[(1)] = cljs.core.first((state_70730[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72777 = state_70730;
state_70730 = G__72777;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__69361__auto__ = function(state_70730){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__69361__auto____1.call(this,state_70730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__69361__auto____0;
cljs$core$async$mult_$_state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__69361__auto____1;
return cljs$core$async$mult_$_state_machine__69361__auto__;
})()
})();
var state__69615__auto__ = (function (){var statearr_70871 = f__69614__auto__();
(statearr_70871[(6)] = c__69613__auto___72654);

return statearr_70871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__70878 = arguments.length;
switch (G__70878) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_72781 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_72781(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_72789 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_72789(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_72790 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_72790(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_72796 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_72796(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_72798 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_72798(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72800 = arguments.length;
var i__4737__auto___72801 = (0);
while(true){
if((i__4737__auto___72801 < len__4736__auto___72800)){
args__4742__auto__.push((arguments[i__4737__auto___72801]));

var G__72802 = (i__4737__auto___72801 + (1));
i__4737__auto___72801 = G__72802;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__70918){
var map__70919 = p__70918;
var map__70919__$1 = (((((!((map__70919 == null))))?(((((map__70919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70919):map__70919);
var opts = map__70919__$1;
var statearr_70921_72816 = state;
(statearr_70921_72816[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_70923_72817 = state;
(statearr_70923_72817[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_70924_72818 = state;
(statearr_70924_72818[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq70910){
var G__70911 = cljs.core.first(seq70910);
var seq70910__$1 = cljs.core.next(seq70910);
var G__70912 = cljs.core.first(seq70910__$1);
var seq70910__$2 = cljs.core.next(seq70910__$1);
var G__70913 = cljs.core.first(seq70910__$2);
var seq70910__$3 = cljs.core.next(seq70910__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70911,G__70912,G__70913,seq70910__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70936 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70936 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta70937){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta70937 = meta70937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70938,meta70937__$1){
var self__ = this;
var _70938__$1 = this;
return (new cljs.core.async.t_cljs$core$async70936(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta70937__$1));
}));

(cljs.core.async.t_cljs$core$async70936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70938){
var self__ = this;
var _70938__$1 = this;
return self__.meta70937;
}));

(cljs.core.async.t_cljs$core$async70936.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70936.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async70936.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70936.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70936.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70936.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70936.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70936.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta70937","meta70937",-1767849959,null)], null);
}));

(cljs.core.async.t_cljs$core$async70936.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70936.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70936");

(cljs.core.async.t_cljs$core$async70936.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async70936");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70936.
 */
cljs.core.async.__GT_t_cljs$core$async70936 = (function cljs$core$async$mix_$___GT_t_cljs$core$async70936(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta70937){
return (new cljs.core.async.t_cljs$core$async70936(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta70937));
});

}

return (new cljs.core.async.t_cljs$core$async70936(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__69613__auto___72852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = (function (state_71092){
var state_val_71093 = (state_71092[(1)]);
if((state_val_71093 === (7))){
var inst_70983 = (state_71092[(2)]);
var state_71092__$1 = state_71092;
var statearr_71099_72853 = state_71092__$1;
(statearr_71099_72853[(2)] = inst_70983);

(statearr_71099_72853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (20))){
var inst_70995 = (state_71092[(7)]);
var state_71092__$1 = state_71092;
var statearr_71102_72856 = state_71092__$1;
(statearr_71102_72856[(2)] = inst_70995);

(statearr_71102_72856[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (27))){
var state_71092__$1 = state_71092;
var statearr_71104_72858 = state_71092__$1;
(statearr_71104_72858[(2)] = null);

(statearr_71104_72858[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (1))){
var inst_70969 = (state_71092[(8)]);
var inst_70969__$1 = calc_state();
var inst_70971 = (inst_70969__$1 == null);
var inst_70972 = cljs.core.not(inst_70971);
var state_71092__$1 = (function (){var statearr_71108 = state_71092;
(statearr_71108[(8)] = inst_70969__$1);

return statearr_71108;
})();
if(inst_70972){
var statearr_71109_72859 = state_71092__$1;
(statearr_71109_72859[(1)] = (2));

} else {
var statearr_71110_72860 = state_71092__$1;
(statearr_71110_72860[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (24))){
var inst_71038 = (state_71092[(9)]);
var inst_71028 = (state_71092[(10)]);
var inst_71057 = (state_71092[(11)]);
var inst_71057__$1 = (inst_71028.cljs$core$IFn$_invoke$arity$1 ? inst_71028.cljs$core$IFn$_invoke$arity$1(inst_71038) : inst_71028.call(null,inst_71038));
var state_71092__$1 = (function (){var statearr_71114 = state_71092;
(statearr_71114[(11)] = inst_71057__$1);

return statearr_71114;
})();
if(cljs.core.truth_(inst_71057__$1)){
var statearr_71115_72861 = state_71092__$1;
(statearr_71115_72861[(1)] = (29));

} else {
var statearr_71116_72863 = state_71092__$1;
(statearr_71116_72863[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (4))){
var inst_70986 = (state_71092[(2)]);
var state_71092__$1 = state_71092;
if(cljs.core.truth_(inst_70986)){
var statearr_71121_72864 = state_71092__$1;
(statearr_71121_72864[(1)] = (8));

} else {
var statearr_71123_72866 = state_71092__$1;
(statearr_71123_72866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (15))){
var inst_71021 = (state_71092[(2)]);
var state_71092__$1 = state_71092;
if(cljs.core.truth_(inst_71021)){
var statearr_71127_72869 = state_71092__$1;
(statearr_71127_72869[(1)] = (19));

} else {
var statearr_71129_72870 = state_71092__$1;
(statearr_71129_72870[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (21))){
var inst_71027 = (state_71092[(12)]);
var inst_71027__$1 = (state_71092[(2)]);
var inst_71028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71027__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_71029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71027__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_71030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71027__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_71092__$1 = (function (){var statearr_71133 = state_71092;
(statearr_71133[(12)] = inst_71027__$1);

(statearr_71133[(13)] = inst_71029);

(statearr_71133[(10)] = inst_71028);

return statearr_71133;
})();
return cljs.core.async.ioc_alts_BANG_(state_71092__$1,(22),inst_71030);
} else {
if((state_val_71093 === (31))){
var inst_71067 = (state_71092[(2)]);
var state_71092__$1 = state_71092;
if(cljs.core.truth_(inst_71067)){
var statearr_71138_72878 = state_71092__$1;
(statearr_71138_72878[(1)] = (32));

} else {
var statearr_71140_72879 = state_71092__$1;
(statearr_71140_72879[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (32))){
var inst_71036 = (state_71092[(14)]);
var state_71092__$1 = state_71092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71092__$1,(35),out,inst_71036);
} else {
if((state_val_71093 === (33))){
var inst_71027 = (state_71092[(12)]);
var inst_70995 = inst_71027;
var state_71092__$1 = (function (){var statearr_71148 = state_71092;
(statearr_71148[(7)] = inst_70995);

return statearr_71148;
})();
var statearr_71149_72881 = state_71092__$1;
(statearr_71149_72881[(2)] = null);

(statearr_71149_72881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (13))){
var inst_70995 = (state_71092[(7)]);
var inst_71010 = inst_70995.cljs$lang$protocol_mask$partition0$;
var inst_71011 = (inst_71010 & (64));
var inst_71012 = inst_70995.cljs$core$ISeq$;
var inst_71013 = (cljs.core.PROTOCOL_SENTINEL === inst_71012);
var inst_71014 = ((inst_71011) || (inst_71013));
var state_71092__$1 = state_71092;
if(cljs.core.truth_(inst_71014)){
var statearr_71151_72883 = state_71092__$1;
(statearr_71151_72883[(1)] = (16));

} else {
var statearr_71152_72884 = state_71092__$1;
(statearr_71152_72884[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (22))){
var inst_71036 = (state_71092[(14)]);
var inst_71038 = (state_71092[(9)]);
var inst_71035 = (state_71092[(2)]);
var inst_71036__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71035,(0),null);
var inst_71038__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71035,(1),null);
var inst_71041 = (inst_71036__$1 == null);
var inst_71042 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71038__$1,change);
var inst_71043 = ((inst_71041) || (inst_71042));
var state_71092__$1 = (function (){var statearr_71159 = state_71092;
(statearr_71159[(14)] = inst_71036__$1);

(statearr_71159[(9)] = inst_71038__$1);

return statearr_71159;
})();
if(cljs.core.truth_(inst_71043)){
var statearr_71161_72888 = state_71092__$1;
(statearr_71161_72888[(1)] = (23));

} else {
var statearr_71162_72889 = state_71092__$1;
(statearr_71162_72889[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (36))){
var inst_71027 = (state_71092[(12)]);
var inst_70995 = inst_71027;
var state_71092__$1 = (function (){var statearr_71165 = state_71092;
(statearr_71165[(7)] = inst_70995);

return statearr_71165;
})();
var statearr_71166_72898 = state_71092__$1;
(statearr_71166_72898[(2)] = null);

(statearr_71166_72898[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (29))){
var inst_71057 = (state_71092[(11)]);
var state_71092__$1 = state_71092;
var statearr_71168_72908 = state_71092__$1;
(statearr_71168_72908[(2)] = inst_71057);

(statearr_71168_72908[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (6))){
var state_71092__$1 = state_71092;
var statearr_71170_72922 = state_71092__$1;
(statearr_71170_72922[(2)] = false);

(statearr_71170_72922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (28))){
var inst_71050 = (state_71092[(2)]);
var inst_71051 = calc_state();
var inst_70995 = inst_71051;
var state_71092__$1 = (function (){var statearr_71173 = state_71092;
(statearr_71173[(7)] = inst_70995);

(statearr_71173[(15)] = inst_71050);

return statearr_71173;
})();
var statearr_71174_72926 = state_71092__$1;
(statearr_71174_72926[(2)] = null);

(statearr_71174_72926[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (25))){
var inst_71085 = (state_71092[(2)]);
var state_71092__$1 = state_71092;
var statearr_71182_72928 = state_71092__$1;
(statearr_71182_72928[(2)] = inst_71085);

(statearr_71182_72928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (34))){
var inst_71083 = (state_71092[(2)]);
var state_71092__$1 = state_71092;
var statearr_71185_72932 = state_71092__$1;
(statearr_71185_72932[(2)] = inst_71083);

(statearr_71185_72932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (17))){
var state_71092__$1 = state_71092;
var statearr_71186_72937 = state_71092__$1;
(statearr_71186_72937[(2)] = false);

(statearr_71186_72937[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (3))){
var state_71092__$1 = state_71092;
var statearr_71190_72944 = state_71092__$1;
(statearr_71190_72944[(2)] = false);

(statearr_71190_72944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (12))){
var inst_71089 = (state_71092[(2)]);
var state_71092__$1 = state_71092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71092__$1,inst_71089);
} else {
if((state_val_71093 === (2))){
var inst_70969 = (state_71092[(8)]);
var inst_70975 = inst_70969.cljs$lang$protocol_mask$partition0$;
var inst_70976 = (inst_70975 & (64));
var inst_70977 = inst_70969.cljs$core$ISeq$;
var inst_70978 = (cljs.core.PROTOCOL_SENTINEL === inst_70977);
var inst_70979 = ((inst_70976) || (inst_70978));
var state_71092__$1 = state_71092;
if(cljs.core.truth_(inst_70979)){
var statearr_71196_72955 = state_71092__$1;
(statearr_71196_72955[(1)] = (5));

} else {
var statearr_71197_72956 = state_71092__$1;
(statearr_71197_72956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (23))){
var inst_71036 = (state_71092[(14)]);
var inst_71045 = (inst_71036 == null);
var state_71092__$1 = state_71092;
if(cljs.core.truth_(inst_71045)){
var statearr_71202_72967 = state_71092__$1;
(statearr_71202_72967[(1)] = (26));

} else {
var statearr_71205_72971 = state_71092__$1;
(statearr_71205_72971[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (35))){
var inst_71070 = (state_71092[(2)]);
var state_71092__$1 = state_71092;
if(cljs.core.truth_(inst_71070)){
var statearr_71207_72972 = state_71092__$1;
(statearr_71207_72972[(1)] = (36));

} else {
var statearr_71208_72973 = state_71092__$1;
(statearr_71208_72973[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (19))){
var inst_70995 = (state_71092[(7)]);
var inst_71024 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_70995);
var state_71092__$1 = state_71092;
var statearr_71213_72974 = state_71092__$1;
(statearr_71213_72974[(2)] = inst_71024);

(statearr_71213_72974[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (11))){
var inst_70995 = (state_71092[(7)]);
var inst_71003 = (inst_70995 == null);
var inst_71004 = cljs.core.not(inst_71003);
var state_71092__$1 = state_71092;
if(inst_71004){
var statearr_71215_72985 = state_71092__$1;
(statearr_71215_72985[(1)] = (13));

} else {
var statearr_71217_72988 = state_71092__$1;
(statearr_71217_72988[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (9))){
var inst_70969 = (state_71092[(8)]);
var state_71092__$1 = state_71092;
var statearr_71220_72995 = state_71092__$1;
(statearr_71220_72995[(2)] = inst_70969);

(statearr_71220_72995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (5))){
var state_71092__$1 = state_71092;
var statearr_71222_73011 = state_71092__$1;
(statearr_71222_73011[(2)] = true);

(statearr_71222_73011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (14))){
var state_71092__$1 = state_71092;
var statearr_71225_73018 = state_71092__$1;
(statearr_71225_73018[(2)] = false);

(statearr_71225_73018[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (26))){
var inst_71038 = (state_71092[(9)]);
var inst_71047 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_71038);
var state_71092__$1 = state_71092;
var statearr_71226_73019 = state_71092__$1;
(statearr_71226_73019[(2)] = inst_71047);

(statearr_71226_73019[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (16))){
var state_71092__$1 = state_71092;
var statearr_71230_73026 = state_71092__$1;
(statearr_71230_73026[(2)] = true);

(statearr_71230_73026[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (38))){
var inst_71078 = (state_71092[(2)]);
var state_71092__$1 = state_71092;
var statearr_71231_73031 = state_71092__$1;
(statearr_71231_73031[(2)] = inst_71078);

(statearr_71231_73031[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (30))){
var inst_71029 = (state_71092[(13)]);
var inst_71038 = (state_71092[(9)]);
var inst_71028 = (state_71092[(10)]);
var inst_71062 = cljs.core.empty_QMARK_(inst_71028);
var inst_71063 = (inst_71029.cljs$core$IFn$_invoke$arity$1 ? inst_71029.cljs$core$IFn$_invoke$arity$1(inst_71038) : inst_71029.call(null,inst_71038));
var inst_71064 = cljs.core.not(inst_71063);
var inst_71065 = ((inst_71062) && (inst_71064));
var state_71092__$1 = state_71092;
var statearr_71240_73040 = state_71092__$1;
(statearr_71240_73040[(2)] = inst_71065);

(statearr_71240_73040[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (10))){
var inst_70969 = (state_71092[(8)]);
var inst_70991 = (state_71092[(2)]);
var inst_70992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70991,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70991,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70991,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_70995 = inst_70969;
var state_71092__$1 = (function (){var statearr_71245 = state_71092;
(statearr_71245[(16)] = inst_70993);

(statearr_71245[(7)] = inst_70995);

(statearr_71245[(17)] = inst_70994);

(statearr_71245[(18)] = inst_70992);

return statearr_71245;
})();
var statearr_71246_73057 = state_71092__$1;
(statearr_71246_73057[(2)] = null);

(statearr_71246_73057[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (18))){
var inst_71018 = (state_71092[(2)]);
var state_71092__$1 = state_71092;
var statearr_71251_73065 = state_71092__$1;
(statearr_71251_73065[(2)] = inst_71018);

(statearr_71251_73065[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (37))){
var state_71092__$1 = state_71092;
var statearr_71253_73071 = state_71092__$1;
(statearr_71253_73071[(2)] = null);

(statearr_71253_73071[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71093 === (8))){
var inst_70969 = (state_71092[(8)]);
var inst_70988 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_70969);
var state_71092__$1 = state_71092;
var statearr_71256_73085 = state_71092__$1;
(statearr_71256_73085[(2)] = inst_70988);

(statearr_71256_73085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__69361__auto__ = null;
var cljs$core$async$mix_$_state_machine__69361__auto____0 = (function (){
var statearr_71263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71263[(0)] = cljs$core$async$mix_$_state_machine__69361__auto__);

(statearr_71263[(1)] = (1));

return statearr_71263;
});
var cljs$core$async$mix_$_state_machine__69361__auto____1 = (function (state_71092){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_71092);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e71264){var ex__69364__auto__ = e71264;
var statearr_71265_73104 = state_71092;
(statearr_71265_73104[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_71092[(4)]))){
var statearr_71271_73105 = state_71092;
(statearr_71271_73105[(1)] = cljs.core.first((state_71092[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73111 = state_71092;
state_71092 = G__73111;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__69361__auto__ = function(state_71092){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__69361__auto____1.call(this,state_71092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__69361__auto____0;
cljs$core$async$mix_$_state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__69361__auto____1;
return cljs$core$async$mix_$_state_machine__69361__auto__;
})()
})();
var state__69615__auto__ = (function (){var statearr_71274 = f__69614__auto__();
(statearr_71274[(6)] = c__69613__auto___72852);

return statearr_71274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_73112 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_73112(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_73130 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_73130(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_73144 = (function() {
var G__73145 = null;
var G__73145__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__73145__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__73145 = function(p,v){
switch(arguments.length){
case 1:
return G__73145__1.call(this,p);
case 2:
return G__73145__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__73145.cljs$core$IFn$_invoke$arity$1 = G__73145__1;
G__73145.cljs$core$IFn$_invoke$arity$2 = G__73145__2;
return G__73145;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__71286 = arguments.length;
switch (G__71286) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_73144(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_73144(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__71289 = arguments.length;
switch (G__71289) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__71287_SHARP_){
if(cljs.core.truth_((p1__71287_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__71287_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__71287_SHARP_.call(null,topic)))){
return p1__71287_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__71287_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71290 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71290 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta71291){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta71291 = meta71291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71292,meta71291__$1){
var self__ = this;
var _71292__$1 = this;
return (new cljs.core.async.t_cljs$core$async71290(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta71291__$1));
}));

(cljs.core.async.t_cljs$core$async71290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71292){
var self__ = this;
var _71292__$1 = this;
return self__.meta71291;
}));

(cljs.core.async.t_cljs$core$async71290.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71290.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async71290.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71290.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async71290.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async71290.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async71290.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async71290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta71291","meta71291",1974413666,null)], null);
}));

(cljs.core.async.t_cljs$core$async71290.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71290");

(cljs.core.async.t_cljs$core$async71290.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async71290");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71290.
 */
cljs.core.async.__GT_t_cljs$core$async71290 = (function cljs$core$async$__GT_t_cljs$core$async71290(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta71291){
return (new cljs.core.async.t_cljs$core$async71290(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta71291));
});

}

return (new cljs.core.async.t_cljs$core$async71290(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__69613__auto___73213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = (function (state_71368){
var state_val_71369 = (state_71368[(1)]);
if((state_val_71369 === (7))){
var inst_71364 = (state_71368[(2)]);
var state_71368__$1 = state_71368;
var statearr_71372_73219 = state_71368__$1;
(statearr_71372_73219[(2)] = inst_71364);

(statearr_71372_73219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (20))){
var state_71368__$1 = state_71368;
var statearr_71373_73224 = state_71368__$1;
(statearr_71373_73224[(2)] = null);

(statearr_71373_73224[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (1))){
var state_71368__$1 = state_71368;
var statearr_71374_73227 = state_71368__$1;
(statearr_71374_73227[(2)] = null);

(statearr_71374_73227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (24))){
var inst_71347 = (state_71368[(7)]);
var inst_71356 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_71347);
var state_71368__$1 = state_71368;
var statearr_71375_73228 = state_71368__$1;
(statearr_71375_73228[(2)] = inst_71356);

(statearr_71375_73228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (4))){
var inst_71297 = (state_71368[(8)]);
var inst_71297__$1 = (state_71368[(2)]);
var inst_71298 = (inst_71297__$1 == null);
var state_71368__$1 = (function (){var statearr_71376 = state_71368;
(statearr_71376[(8)] = inst_71297__$1);

return statearr_71376;
})();
if(cljs.core.truth_(inst_71298)){
var statearr_71377_73229 = state_71368__$1;
(statearr_71377_73229[(1)] = (5));

} else {
var statearr_71378_73230 = state_71368__$1;
(statearr_71378_73230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (15))){
var inst_71341 = (state_71368[(2)]);
var state_71368__$1 = state_71368;
var statearr_71379_73231 = state_71368__$1;
(statearr_71379_73231[(2)] = inst_71341);

(statearr_71379_73231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (21))){
var inst_71361 = (state_71368[(2)]);
var state_71368__$1 = (function (){var statearr_71380 = state_71368;
(statearr_71380[(9)] = inst_71361);

return statearr_71380;
})();
var statearr_71381_73236 = state_71368__$1;
(statearr_71381_73236[(2)] = null);

(statearr_71381_73236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (13))){
var inst_71323 = (state_71368[(10)]);
var inst_71325 = cljs.core.chunked_seq_QMARK_(inst_71323);
var state_71368__$1 = state_71368;
if(inst_71325){
var statearr_71382_73239 = state_71368__$1;
(statearr_71382_73239[(1)] = (16));

} else {
var statearr_71383_73240 = state_71368__$1;
(statearr_71383_73240[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (22))){
var inst_71353 = (state_71368[(2)]);
var state_71368__$1 = state_71368;
if(cljs.core.truth_(inst_71353)){
var statearr_71384_73242 = state_71368__$1;
(statearr_71384_73242[(1)] = (23));

} else {
var statearr_71385_73243 = state_71368__$1;
(statearr_71385_73243[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (6))){
var inst_71347 = (state_71368[(7)]);
var inst_71297 = (state_71368[(8)]);
var inst_71349 = (state_71368[(11)]);
var inst_71347__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_71297) : topic_fn.call(null,inst_71297));
var inst_71348 = cljs.core.deref(mults);
var inst_71349__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71348,inst_71347__$1);
var state_71368__$1 = (function (){var statearr_71386 = state_71368;
(statearr_71386[(7)] = inst_71347__$1);

(statearr_71386[(11)] = inst_71349__$1);

return statearr_71386;
})();
if(cljs.core.truth_(inst_71349__$1)){
var statearr_71387_73247 = state_71368__$1;
(statearr_71387_73247[(1)] = (19));

} else {
var statearr_71388_73249 = state_71368__$1;
(statearr_71388_73249[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (25))){
var inst_71358 = (state_71368[(2)]);
var state_71368__$1 = state_71368;
var statearr_71391_73252 = state_71368__$1;
(statearr_71391_73252[(2)] = inst_71358);

(statearr_71391_73252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (17))){
var inst_71323 = (state_71368[(10)]);
var inst_71332 = cljs.core.first(inst_71323);
var inst_71333 = cljs.core.async.muxch_STAR_(inst_71332);
var inst_71334 = cljs.core.async.close_BANG_(inst_71333);
var inst_71335 = cljs.core.next(inst_71323);
var inst_71308 = inst_71335;
var inst_71309 = null;
var inst_71310 = (0);
var inst_71311 = (0);
var state_71368__$1 = (function (){var statearr_71392 = state_71368;
(statearr_71392[(12)] = inst_71311);

(statearr_71392[(13)] = inst_71334);

(statearr_71392[(14)] = inst_71310);

(statearr_71392[(15)] = inst_71309);

(statearr_71392[(16)] = inst_71308);

return statearr_71392;
})();
var statearr_71393_73258 = state_71368__$1;
(statearr_71393_73258[(2)] = null);

(statearr_71393_73258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (3))){
var inst_71366 = (state_71368[(2)]);
var state_71368__$1 = state_71368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71368__$1,inst_71366);
} else {
if((state_val_71369 === (12))){
var inst_71343 = (state_71368[(2)]);
var state_71368__$1 = state_71368;
var statearr_71395_73259 = state_71368__$1;
(statearr_71395_73259[(2)] = inst_71343);

(statearr_71395_73259[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (2))){
var state_71368__$1 = state_71368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71368__$1,(4),ch);
} else {
if((state_val_71369 === (23))){
var state_71368__$1 = state_71368;
var statearr_71399_73260 = state_71368__$1;
(statearr_71399_73260[(2)] = null);

(statearr_71399_73260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (19))){
var inst_71297 = (state_71368[(8)]);
var inst_71349 = (state_71368[(11)]);
var inst_71351 = cljs.core.async.muxch_STAR_(inst_71349);
var state_71368__$1 = state_71368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71368__$1,(22),inst_71351,inst_71297);
} else {
if((state_val_71369 === (11))){
var inst_71323 = (state_71368[(10)]);
var inst_71308 = (state_71368[(16)]);
var inst_71323__$1 = cljs.core.seq(inst_71308);
var state_71368__$1 = (function (){var statearr_71401 = state_71368;
(statearr_71401[(10)] = inst_71323__$1);

return statearr_71401;
})();
if(inst_71323__$1){
var statearr_71402_73265 = state_71368__$1;
(statearr_71402_73265[(1)] = (13));

} else {
var statearr_71403_73267 = state_71368__$1;
(statearr_71403_73267[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (9))){
var inst_71345 = (state_71368[(2)]);
var state_71368__$1 = state_71368;
var statearr_71404_73270 = state_71368__$1;
(statearr_71404_73270[(2)] = inst_71345);

(statearr_71404_73270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (5))){
var inst_71305 = cljs.core.deref(mults);
var inst_71306 = cljs.core.vals(inst_71305);
var inst_71307 = cljs.core.seq(inst_71306);
var inst_71308 = inst_71307;
var inst_71309 = null;
var inst_71310 = (0);
var inst_71311 = (0);
var state_71368__$1 = (function (){var statearr_71406 = state_71368;
(statearr_71406[(12)] = inst_71311);

(statearr_71406[(14)] = inst_71310);

(statearr_71406[(15)] = inst_71309);

(statearr_71406[(16)] = inst_71308);

return statearr_71406;
})();
var statearr_71408_73273 = state_71368__$1;
(statearr_71408_73273[(2)] = null);

(statearr_71408_73273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (14))){
var state_71368__$1 = state_71368;
var statearr_71412_73275 = state_71368__$1;
(statearr_71412_73275[(2)] = null);

(statearr_71412_73275[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (16))){
var inst_71323 = (state_71368[(10)]);
var inst_71327 = cljs.core.chunk_first(inst_71323);
var inst_71328 = cljs.core.chunk_rest(inst_71323);
var inst_71329 = cljs.core.count(inst_71327);
var inst_71308 = inst_71328;
var inst_71309 = inst_71327;
var inst_71310 = inst_71329;
var inst_71311 = (0);
var state_71368__$1 = (function (){var statearr_71416 = state_71368;
(statearr_71416[(12)] = inst_71311);

(statearr_71416[(14)] = inst_71310);

(statearr_71416[(15)] = inst_71309);

(statearr_71416[(16)] = inst_71308);

return statearr_71416;
})();
var statearr_71417_73279 = state_71368__$1;
(statearr_71417_73279[(2)] = null);

(statearr_71417_73279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (10))){
var inst_71311 = (state_71368[(12)]);
var inst_71310 = (state_71368[(14)]);
var inst_71309 = (state_71368[(15)]);
var inst_71308 = (state_71368[(16)]);
var inst_71317 = cljs.core._nth(inst_71309,inst_71311);
var inst_71318 = cljs.core.async.muxch_STAR_(inst_71317);
var inst_71319 = cljs.core.async.close_BANG_(inst_71318);
var inst_71320 = (inst_71311 + (1));
var tmp71409 = inst_71310;
var tmp71410 = inst_71309;
var tmp71411 = inst_71308;
var inst_71308__$1 = tmp71411;
var inst_71309__$1 = tmp71410;
var inst_71310__$1 = tmp71409;
var inst_71311__$1 = inst_71320;
var state_71368__$1 = (function (){var statearr_71418 = state_71368;
(statearr_71418[(12)] = inst_71311__$1);

(statearr_71418[(17)] = inst_71319);

(statearr_71418[(14)] = inst_71310__$1);

(statearr_71418[(15)] = inst_71309__$1);

(statearr_71418[(16)] = inst_71308__$1);

return statearr_71418;
})();
var statearr_71419_73283 = state_71368__$1;
(statearr_71419_73283[(2)] = null);

(statearr_71419_73283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (18))){
var inst_71338 = (state_71368[(2)]);
var state_71368__$1 = state_71368;
var statearr_71420_73286 = state_71368__$1;
(statearr_71420_73286[(2)] = inst_71338);

(statearr_71420_73286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71369 === (8))){
var inst_71311 = (state_71368[(12)]);
var inst_71310 = (state_71368[(14)]);
var inst_71314 = (inst_71311 < inst_71310);
var inst_71315 = inst_71314;
var state_71368__$1 = state_71368;
if(cljs.core.truth_(inst_71315)){
var statearr_71424_73289 = state_71368__$1;
(statearr_71424_73289[(1)] = (10));

} else {
var statearr_71425_73290 = state_71368__$1;
(statearr_71425_73290[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69361__auto__ = null;
var cljs$core$async$state_machine__69361__auto____0 = (function (){
var statearr_71426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71426[(0)] = cljs$core$async$state_machine__69361__auto__);

(statearr_71426[(1)] = (1));

return statearr_71426;
});
var cljs$core$async$state_machine__69361__auto____1 = (function (state_71368){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_71368);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e71427){var ex__69364__auto__ = e71427;
var statearr_71428_73292 = state_71368;
(statearr_71428_73292[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_71368[(4)]))){
var statearr_71429_73293 = state_71368;
(statearr_71429_73293[(1)] = cljs.core.first((state_71368[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73294 = state_71368;
state_71368 = G__73294;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$state_machine__69361__auto__ = function(state_71368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69361__auto____1.call(this,state_71368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69361__auto____0;
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69361__auto____1;
return cljs$core$async$state_machine__69361__auto__;
})()
})();
var state__69615__auto__ = (function (){var statearr_71430 = f__69614__auto__();
(statearr_71430[(6)] = c__69613__auto___73213);

return statearr_71430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__71445 = arguments.length;
switch (G__71445) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__71460 = arguments.length;
switch (G__71460) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__71468 = arguments.length;
switch (G__71468) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__69613__auto___73322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = (function (state_71519){
var state_val_71520 = (state_71519[(1)]);
if((state_val_71520 === (7))){
var state_71519__$1 = state_71519;
var statearr_71521_73323 = state_71519__$1;
(statearr_71521_73323[(2)] = null);

(statearr_71521_73323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71520 === (1))){
var state_71519__$1 = state_71519;
var statearr_71524_73324 = state_71519__$1;
(statearr_71524_73324[(2)] = null);

(statearr_71524_73324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71520 === (4))){
var inst_71476 = (state_71519[(7)]);
var inst_71475 = (state_71519[(8)]);
var inst_71478 = (inst_71476 < inst_71475);
var state_71519__$1 = state_71519;
if(cljs.core.truth_(inst_71478)){
var statearr_71526_73326 = state_71519__$1;
(statearr_71526_73326[(1)] = (6));

} else {
var statearr_71527_73328 = state_71519__$1;
(statearr_71527_73328[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71520 === (15))){
var inst_71501 = (state_71519[(9)]);
var inst_71506 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_71501);
var state_71519__$1 = state_71519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71519__$1,(17),out,inst_71506);
} else {
if((state_val_71520 === (13))){
var inst_71501 = (state_71519[(9)]);
var inst_71501__$1 = (state_71519[(2)]);
var inst_71502 = cljs.core.some(cljs.core.nil_QMARK_,inst_71501__$1);
var state_71519__$1 = (function (){var statearr_71529 = state_71519;
(statearr_71529[(9)] = inst_71501__$1);

return statearr_71529;
})();
if(cljs.core.truth_(inst_71502)){
var statearr_71530_73336 = state_71519__$1;
(statearr_71530_73336[(1)] = (14));

} else {
var statearr_71531_73338 = state_71519__$1;
(statearr_71531_73338[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71520 === (6))){
var state_71519__$1 = state_71519;
var statearr_71532_73343 = state_71519__$1;
(statearr_71532_73343[(2)] = null);

(statearr_71532_73343[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71520 === (17))){
var inst_71508 = (state_71519[(2)]);
var state_71519__$1 = (function (){var statearr_71534 = state_71519;
(statearr_71534[(10)] = inst_71508);

return statearr_71534;
})();
var statearr_71535_73352 = state_71519__$1;
(statearr_71535_73352[(2)] = null);

(statearr_71535_73352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71520 === (3))){
var inst_71513 = (state_71519[(2)]);
var state_71519__$1 = state_71519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71519__$1,inst_71513);
} else {
if((state_val_71520 === (12))){
var _ = (function (){var statearr_71536 = state_71519;
(statearr_71536[(4)] = cljs.core.rest((state_71519[(4)])));

return statearr_71536;
})();
var state_71519__$1 = state_71519;
var ex71533 = (state_71519__$1[(2)]);
var statearr_71537_73360 = state_71519__$1;
(statearr_71537_73360[(5)] = ex71533);


if((ex71533 instanceof Object)){
var statearr_71538_73361 = state_71519__$1;
(statearr_71538_73361[(1)] = (11));

(statearr_71538_73361[(5)] = null);

} else {
throw ex71533;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71520 === (2))){
var inst_71474 = cljs.core.reset_BANG_(dctr,cnt);
var inst_71475 = cnt;
var inst_71476 = (0);
var state_71519__$1 = (function (){var statearr_71541 = state_71519;
(statearr_71541[(7)] = inst_71476);

(statearr_71541[(11)] = inst_71474);

(statearr_71541[(8)] = inst_71475);

return statearr_71541;
})();
var statearr_71542_73371 = state_71519__$1;
(statearr_71542_73371[(2)] = null);

(statearr_71542_73371[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71520 === (11))){
var inst_71480 = (state_71519[(2)]);
var inst_71481 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_71519__$1 = (function (){var statearr_71543 = state_71519;
(statearr_71543[(12)] = inst_71480);

return statearr_71543;
})();
var statearr_71544_73374 = state_71519__$1;
(statearr_71544_73374[(2)] = inst_71481);

(statearr_71544_73374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71520 === (9))){
var inst_71476 = (state_71519[(7)]);
var _ = (function (){var statearr_71546 = state_71519;
(statearr_71546[(4)] = cljs.core.cons((12),(state_71519[(4)])));

return statearr_71546;
})();
var inst_71487 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_71476) : chs__$1.call(null,inst_71476));
var inst_71488 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_71476) : done.call(null,inst_71476));
var inst_71489 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_71487,inst_71488);
var ___$1 = (function (){var statearr_71548 = state_71519;
(statearr_71548[(4)] = cljs.core.rest((state_71519[(4)])));

return statearr_71548;
})();
var state_71519__$1 = state_71519;
var statearr_71549_73382 = state_71519__$1;
(statearr_71549_73382[(2)] = inst_71489);

(statearr_71549_73382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71520 === (5))){
var inst_71499 = (state_71519[(2)]);
var state_71519__$1 = (function (){var statearr_71553 = state_71519;
(statearr_71553[(13)] = inst_71499);

return statearr_71553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71519__$1,(13),dchan);
} else {
if((state_val_71520 === (14))){
var inst_71504 = cljs.core.async.close_BANG_(out);
var state_71519__$1 = state_71519;
var statearr_71554_73390 = state_71519__$1;
(statearr_71554_73390[(2)] = inst_71504);

(statearr_71554_73390[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71520 === (16))){
var inst_71511 = (state_71519[(2)]);
var state_71519__$1 = state_71519;
var statearr_71555_73391 = state_71519__$1;
(statearr_71555_73391[(2)] = inst_71511);

(statearr_71555_73391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71520 === (10))){
var inst_71476 = (state_71519[(7)]);
var inst_71492 = (state_71519[(2)]);
var inst_71493 = (inst_71476 + (1));
var inst_71476__$1 = inst_71493;
var state_71519__$1 = (function (){var statearr_71556 = state_71519;
(statearr_71556[(14)] = inst_71492);

(statearr_71556[(7)] = inst_71476__$1);

return statearr_71556;
})();
var statearr_71557_73397 = state_71519__$1;
(statearr_71557_73397[(2)] = null);

(statearr_71557_73397[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71520 === (8))){
var inst_71497 = (state_71519[(2)]);
var state_71519__$1 = state_71519;
var statearr_71558_73403 = state_71519__$1;
(statearr_71558_73403[(2)] = inst_71497);

(statearr_71558_73403[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69361__auto__ = null;
var cljs$core$async$state_machine__69361__auto____0 = (function (){
var statearr_71559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71559[(0)] = cljs$core$async$state_machine__69361__auto__);

(statearr_71559[(1)] = (1));

return statearr_71559;
});
var cljs$core$async$state_machine__69361__auto____1 = (function (state_71519){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_71519);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e71560){var ex__69364__auto__ = e71560;
var statearr_71561_73409 = state_71519;
(statearr_71561_73409[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_71519[(4)]))){
var statearr_71562_73412 = state_71519;
(statearr_71562_73412[(1)] = cljs.core.first((state_71519[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73413 = state_71519;
state_71519 = G__73413;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$state_machine__69361__auto__ = function(state_71519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69361__auto____1.call(this,state_71519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69361__auto____0;
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69361__auto____1;
return cljs$core$async$state_machine__69361__auto__;
})()
})();
var state__69615__auto__ = (function (){var statearr_71563 = f__69614__auto__();
(statearr_71563[(6)] = c__69613__auto___73322);

return statearr_71563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__71566 = arguments.length;
switch (G__71566) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69613__auto___73419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = (function (state_71603){
var state_val_71604 = (state_71603[(1)]);
if((state_val_71604 === (7))){
var inst_71580 = (state_71603[(7)]);
var inst_71578 = (state_71603[(8)]);
var inst_71578__$1 = (state_71603[(2)]);
var inst_71580__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71578__$1,(0),null);
var inst_71582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71578__$1,(1),null);
var inst_71584 = (inst_71580__$1 == null);
var state_71603__$1 = (function (){var statearr_71606 = state_71603;
(statearr_71606[(9)] = inst_71582);

(statearr_71606[(7)] = inst_71580__$1);

(statearr_71606[(8)] = inst_71578__$1);

return statearr_71606;
})();
if(cljs.core.truth_(inst_71584)){
var statearr_71608_73430 = state_71603__$1;
(statearr_71608_73430[(1)] = (8));

} else {
var statearr_71609_73431 = state_71603__$1;
(statearr_71609_73431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71604 === (1))){
var inst_71567 = cljs.core.vec(chs);
var inst_71568 = inst_71567;
var state_71603__$1 = (function (){var statearr_71610 = state_71603;
(statearr_71610[(10)] = inst_71568);

return statearr_71610;
})();
var statearr_71611_73432 = state_71603__$1;
(statearr_71611_73432[(2)] = null);

(statearr_71611_73432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71604 === (4))){
var inst_71568 = (state_71603[(10)]);
var state_71603__$1 = state_71603;
return cljs.core.async.ioc_alts_BANG_(state_71603__$1,(7),inst_71568);
} else {
if((state_val_71604 === (6))){
var inst_71598 = (state_71603[(2)]);
var state_71603__$1 = state_71603;
var statearr_71612_73434 = state_71603__$1;
(statearr_71612_73434[(2)] = inst_71598);

(statearr_71612_73434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71604 === (3))){
var inst_71600 = (state_71603[(2)]);
var state_71603__$1 = state_71603;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71603__$1,inst_71600);
} else {
if((state_val_71604 === (2))){
var inst_71568 = (state_71603[(10)]);
var inst_71570 = cljs.core.count(inst_71568);
var inst_71571 = (inst_71570 > (0));
var state_71603__$1 = state_71603;
if(cljs.core.truth_(inst_71571)){
var statearr_71617_73437 = state_71603__$1;
(statearr_71617_73437[(1)] = (4));

} else {
var statearr_71618_73438 = state_71603__$1;
(statearr_71618_73438[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71604 === (11))){
var inst_71568 = (state_71603[(10)]);
var inst_71591 = (state_71603[(2)]);
var tmp71614 = inst_71568;
var inst_71568__$1 = tmp71614;
var state_71603__$1 = (function (){var statearr_71620 = state_71603;
(statearr_71620[(10)] = inst_71568__$1);

(statearr_71620[(11)] = inst_71591);

return statearr_71620;
})();
var statearr_71624_73440 = state_71603__$1;
(statearr_71624_73440[(2)] = null);

(statearr_71624_73440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71604 === (9))){
var inst_71580 = (state_71603[(7)]);
var state_71603__$1 = state_71603;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71603__$1,(11),out,inst_71580);
} else {
if((state_val_71604 === (5))){
var inst_71596 = cljs.core.async.close_BANG_(out);
var state_71603__$1 = state_71603;
var statearr_71625_73441 = state_71603__$1;
(statearr_71625_73441[(2)] = inst_71596);

(statearr_71625_73441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71604 === (10))){
var inst_71594 = (state_71603[(2)]);
var state_71603__$1 = state_71603;
var statearr_71626_73442 = state_71603__$1;
(statearr_71626_73442[(2)] = inst_71594);

(statearr_71626_73442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71604 === (8))){
var inst_71582 = (state_71603[(9)]);
var inst_71568 = (state_71603[(10)]);
var inst_71580 = (state_71603[(7)]);
var inst_71578 = (state_71603[(8)]);
var inst_71586 = (function (){var cs = inst_71568;
var vec__71573 = inst_71578;
var v = inst_71580;
var c = inst_71582;
return (function (p1__71564_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__71564_SHARP_);
});
})();
var inst_71587 = cljs.core.filterv(inst_71586,inst_71568);
var inst_71568__$1 = inst_71587;
var state_71603__$1 = (function (){var statearr_71627 = state_71603;
(statearr_71627[(10)] = inst_71568__$1);

return statearr_71627;
})();
var statearr_71628_73453 = state_71603__$1;
(statearr_71628_73453[(2)] = null);

(statearr_71628_73453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69361__auto__ = null;
var cljs$core$async$state_machine__69361__auto____0 = (function (){
var statearr_71629 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71629[(0)] = cljs$core$async$state_machine__69361__auto__);

(statearr_71629[(1)] = (1));

return statearr_71629;
});
var cljs$core$async$state_machine__69361__auto____1 = (function (state_71603){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_71603);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e71630){var ex__69364__auto__ = e71630;
var statearr_71631_73457 = state_71603;
(statearr_71631_73457[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_71603[(4)]))){
var statearr_71632_73458 = state_71603;
(statearr_71632_73458[(1)] = cljs.core.first((state_71603[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73459 = state_71603;
state_71603 = G__73459;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$state_machine__69361__auto__ = function(state_71603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69361__auto____1.call(this,state_71603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69361__auto____0;
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69361__auto____1;
return cljs$core$async$state_machine__69361__auto__;
})()
})();
var state__69615__auto__ = (function (){var statearr_71634 = f__69614__auto__();
(statearr_71634[(6)] = c__69613__auto___73419);

return statearr_71634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__71643 = arguments.length;
switch (G__71643) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69613__auto___73467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = (function (state_71667){
var state_val_71668 = (state_71667[(1)]);
if((state_val_71668 === (7))){
var inst_71649 = (state_71667[(7)]);
var inst_71649__$1 = (state_71667[(2)]);
var inst_71650 = (inst_71649__$1 == null);
var inst_71651 = cljs.core.not(inst_71650);
var state_71667__$1 = (function (){var statearr_71669 = state_71667;
(statearr_71669[(7)] = inst_71649__$1);

return statearr_71669;
})();
if(inst_71651){
var statearr_71670_73474 = state_71667__$1;
(statearr_71670_73474[(1)] = (8));

} else {
var statearr_71671_73476 = state_71667__$1;
(statearr_71671_73476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71668 === (1))){
var inst_71644 = (0);
var state_71667__$1 = (function (){var statearr_71672 = state_71667;
(statearr_71672[(8)] = inst_71644);

return statearr_71672;
})();
var statearr_71673_73484 = state_71667__$1;
(statearr_71673_73484[(2)] = null);

(statearr_71673_73484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71668 === (4))){
var state_71667__$1 = state_71667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71667__$1,(7),ch);
} else {
if((state_val_71668 === (6))){
var inst_71662 = (state_71667[(2)]);
var state_71667__$1 = state_71667;
var statearr_71674_73491 = state_71667__$1;
(statearr_71674_73491[(2)] = inst_71662);

(statearr_71674_73491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71668 === (3))){
var inst_71664 = (state_71667[(2)]);
var inst_71665 = cljs.core.async.close_BANG_(out);
var state_71667__$1 = (function (){var statearr_71675 = state_71667;
(statearr_71675[(9)] = inst_71664);

return statearr_71675;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_71667__$1,inst_71665);
} else {
if((state_val_71668 === (2))){
var inst_71644 = (state_71667[(8)]);
var inst_71646 = (inst_71644 < n);
var state_71667__$1 = state_71667;
if(cljs.core.truth_(inst_71646)){
var statearr_71677_73513 = state_71667__$1;
(statearr_71677_73513[(1)] = (4));

} else {
var statearr_71679_73518 = state_71667__$1;
(statearr_71679_73518[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71668 === (11))){
var inst_71644 = (state_71667[(8)]);
var inst_71654 = (state_71667[(2)]);
var inst_71655 = (inst_71644 + (1));
var inst_71644__$1 = inst_71655;
var state_71667__$1 = (function (){var statearr_71680 = state_71667;
(statearr_71680[(8)] = inst_71644__$1);

(statearr_71680[(10)] = inst_71654);

return statearr_71680;
})();
var statearr_71681_73531 = state_71667__$1;
(statearr_71681_73531[(2)] = null);

(statearr_71681_73531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71668 === (9))){
var state_71667__$1 = state_71667;
var statearr_71682_73533 = state_71667__$1;
(statearr_71682_73533[(2)] = null);

(statearr_71682_73533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71668 === (5))){
var state_71667__$1 = state_71667;
var statearr_71683_73540 = state_71667__$1;
(statearr_71683_73540[(2)] = null);

(statearr_71683_73540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71668 === (10))){
var inst_71659 = (state_71667[(2)]);
var state_71667__$1 = state_71667;
var statearr_71687_73550 = state_71667__$1;
(statearr_71687_73550[(2)] = inst_71659);

(statearr_71687_73550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71668 === (8))){
var inst_71649 = (state_71667[(7)]);
var state_71667__$1 = state_71667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71667__$1,(11),out,inst_71649);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69361__auto__ = null;
var cljs$core$async$state_machine__69361__auto____0 = (function (){
var statearr_71688 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71688[(0)] = cljs$core$async$state_machine__69361__auto__);

(statearr_71688[(1)] = (1));

return statearr_71688;
});
var cljs$core$async$state_machine__69361__auto____1 = (function (state_71667){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_71667);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e71689){var ex__69364__auto__ = e71689;
var statearr_71690_73568 = state_71667;
(statearr_71690_73568[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_71667[(4)]))){
var statearr_71691_73573 = state_71667;
(statearr_71691_73573[(1)] = cljs.core.first((state_71667[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73574 = state_71667;
state_71667 = G__73574;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$state_machine__69361__auto__ = function(state_71667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69361__auto____1.call(this,state_71667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69361__auto____0;
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69361__auto____1;
return cljs$core$async$state_machine__69361__auto__;
})()
})();
var state__69615__auto__ = (function (){var statearr_71692 = f__69614__auto__();
(statearr_71692[(6)] = c__69613__auto___73467);

return statearr_71692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71694 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71694 = (function (f,ch,meta71695){
this.f = f;
this.ch = ch;
this.meta71695 = meta71695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71696,meta71695__$1){
var self__ = this;
var _71696__$1 = this;
return (new cljs.core.async.t_cljs$core$async71694(self__.f,self__.ch,meta71695__$1));
}));

(cljs.core.async.t_cljs$core$async71694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71696){
var self__ = this;
var _71696__$1 = this;
return self__.meta71695;
}));

(cljs.core.async.t_cljs$core$async71694.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71694.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71694.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71694.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71694.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71697 = (function (f,ch,meta71695,_,fn1,meta71698){
this.f = f;
this.ch = ch;
this.meta71695 = meta71695;
this._ = _;
this.fn1 = fn1;
this.meta71698 = meta71698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71699,meta71698__$1){
var self__ = this;
var _71699__$1 = this;
return (new cljs.core.async.t_cljs$core$async71697(self__.f,self__.ch,self__.meta71695,self__._,self__.fn1,meta71698__$1));
}));

(cljs.core.async.t_cljs$core$async71697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71699){
var self__ = this;
var _71699__$1 = this;
return self__.meta71698;
}));

(cljs.core.async.t_cljs$core$async71697.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async71697.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async71697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__71693_SHARP_){
var G__71700 = (((p1__71693_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__71693_SHARP_) : self__.f.call(null,p1__71693_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__71700) : f1.call(null,G__71700));
});
}));

(cljs.core.async.t_cljs$core$async71697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71695","meta71695",-609985113,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async71694","cljs.core.async/t_cljs$core$async71694",-977716220,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta71698","meta71698",-276630601,null)], null);
}));

(cljs.core.async.t_cljs$core$async71697.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71697");

(cljs.core.async.t_cljs$core$async71697.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async71697");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71697.
 */
cljs.core.async.__GT_t_cljs$core$async71697 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async71697(f__$1,ch__$1,meta71695__$1,___$2,fn1__$1,meta71698){
return (new cljs.core.async.t_cljs$core$async71697(f__$1,ch__$1,meta71695__$1,___$2,fn1__$1,meta71698));
});

}

return (new cljs.core.async.t_cljs$core$async71697(self__.f,self__.ch,self__.meta71695,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__71701 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__71701) : self__.f.call(null,G__71701));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async71694.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71694.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async71694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71695","meta71695",-609985113,null)], null);
}));

(cljs.core.async.t_cljs$core$async71694.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71694");

(cljs.core.async.t_cljs$core$async71694.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async71694");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71694.
 */
cljs.core.async.__GT_t_cljs$core$async71694 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async71694(f__$1,ch__$1,meta71695){
return (new cljs.core.async.t_cljs$core$async71694(f__$1,ch__$1,meta71695));
});

}

return (new cljs.core.async.t_cljs$core$async71694(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71702 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71702 = (function (f,ch,meta71703){
this.f = f;
this.ch = ch;
this.meta71703 = meta71703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71704,meta71703__$1){
var self__ = this;
var _71704__$1 = this;
return (new cljs.core.async.t_cljs$core$async71702(self__.f,self__.ch,meta71703__$1));
}));

(cljs.core.async.t_cljs$core$async71702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71704){
var self__ = this;
var _71704__$1 = this;
return self__.meta71703;
}));

(cljs.core.async.t_cljs$core$async71702.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71702.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71702.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71702.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async71702.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71702.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async71702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71703","meta71703",-423437788,null)], null);
}));

(cljs.core.async.t_cljs$core$async71702.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71702");

(cljs.core.async.t_cljs$core$async71702.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async71702");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71702.
 */
cljs.core.async.__GT_t_cljs$core$async71702 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async71702(f__$1,ch__$1,meta71703){
return (new cljs.core.async.t_cljs$core$async71702(f__$1,ch__$1,meta71703));
});

}

return (new cljs.core.async.t_cljs$core$async71702(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71709 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71709 = (function (p,ch,meta71710){
this.p = p;
this.ch = ch;
this.meta71710 = meta71710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71711,meta71710__$1){
var self__ = this;
var _71711__$1 = this;
return (new cljs.core.async.t_cljs$core$async71709(self__.p,self__.ch,meta71710__$1));
}));

(cljs.core.async.t_cljs$core$async71709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71711){
var self__ = this;
var _71711__$1 = this;
return self__.meta71710;
}));

(cljs.core.async.t_cljs$core$async71709.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71709.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71709.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71709.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71709.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async71709.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71709.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async71709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71710","meta71710",-631799217,null)], null);
}));

(cljs.core.async.t_cljs$core$async71709.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71709");

(cljs.core.async.t_cljs$core$async71709.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async71709");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71709.
 */
cljs.core.async.__GT_t_cljs$core$async71709 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async71709(p__$1,ch__$1,meta71710){
return (new cljs.core.async.t_cljs$core$async71709(p__$1,ch__$1,meta71710));
});

}

return (new cljs.core.async.t_cljs$core$async71709(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__71717 = arguments.length;
switch (G__71717) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69613__auto___73694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = (function (state_71738){
var state_val_71739 = (state_71738[(1)]);
if((state_val_71739 === (7))){
var inst_71734 = (state_71738[(2)]);
var state_71738__$1 = state_71738;
var statearr_71754_73695 = state_71738__$1;
(statearr_71754_73695[(2)] = inst_71734);

(statearr_71754_73695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71739 === (1))){
var state_71738__$1 = state_71738;
var statearr_71755_73697 = state_71738__$1;
(statearr_71755_73697[(2)] = null);

(statearr_71755_73697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71739 === (4))){
var inst_71720 = (state_71738[(7)]);
var inst_71720__$1 = (state_71738[(2)]);
var inst_71721 = (inst_71720__$1 == null);
var state_71738__$1 = (function (){var statearr_71762 = state_71738;
(statearr_71762[(7)] = inst_71720__$1);

return statearr_71762;
})();
if(cljs.core.truth_(inst_71721)){
var statearr_71763_73702 = state_71738__$1;
(statearr_71763_73702[(1)] = (5));

} else {
var statearr_71764_73703 = state_71738__$1;
(statearr_71764_73703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71739 === (6))){
var inst_71720 = (state_71738[(7)]);
var inst_71725 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_71720) : p.call(null,inst_71720));
var state_71738__$1 = state_71738;
if(cljs.core.truth_(inst_71725)){
var statearr_71765_73717 = state_71738__$1;
(statearr_71765_73717[(1)] = (8));

} else {
var statearr_71766_73718 = state_71738__$1;
(statearr_71766_73718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71739 === (3))){
var inst_71736 = (state_71738[(2)]);
var state_71738__$1 = state_71738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71738__$1,inst_71736);
} else {
if((state_val_71739 === (2))){
var state_71738__$1 = state_71738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71738__$1,(4),ch);
} else {
if((state_val_71739 === (11))){
var inst_71728 = (state_71738[(2)]);
var state_71738__$1 = state_71738;
var statearr_71781_73724 = state_71738__$1;
(statearr_71781_73724[(2)] = inst_71728);

(statearr_71781_73724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71739 === (9))){
var state_71738__$1 = state_71738;
var statearr_71782_73729 = state_71738__$1;
(statearr_71782_73729[(2)] = null);

(statearr_71782_73729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71739 === (5))){
var inst_71723 = cljs.core.async.close_BANG_(out);
var state_71738__$1 = state_71738;
var statearr_71789_73730 = state_71738__$1;
(statearr_71789_73730[(2)] = inst_71723);

(statearr_71789_73730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71739 === (10))){
var inst_71731 = (state_71738[(2)]);
var state_71738__$1 = (function (){var statearr_71790 = state_71738;
(statearr_71790[(8)] = inst_71731);

return statearr_71790;
})();
var statearr_71791_73731 = state_71738__$1;
(statearr_71791_73731[(2)] = null);

(statearr_71791_73731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71739 === (8))){
var inst_71720 = (state_71738[(7)]);
var state_71738__$1 = state_71738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71738__$1,(11),out,inst_71720);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69361__auto__ = null;
var cljs$core$async$state_machine__69361__auto____0 = (function (){
var statearr_71794 = [null,null,null,null,null,null,null,null,null];
(statearr_71794[(0)] = cljs$core$async$state_machine__69361__auto__);

(statearr_71794[(1)] = (1));

return statearr_71794;
});
var cljs$core$async$state_machine__69361__auto____1 = (function (state_71738){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_71738);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e71795){var ex__69364__auto__ = e71795;
var statearr_71796_73740 = state_71738;
(statearr_71796_73740[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_71738[(4)]))){
var statearr_71797_73744 = state_71738;
(statearr_71797_73744[(1)] = cljs.core.first((state_71738[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73745 = state_71738;
state_71738 = G__73745;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$state_machine__69361__auto__ = function(state_71738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69361__auto____1.call(this,state_71738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69361__auto____0;
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69361__auto____1;
return cljs$core$async$state_machine__69361__auto__;
})()
})();
var state__69615__auto__ = (function (){var statearr_71799 = f__69614__auto__();
(statearr_71799[(6)] = c__69613__auto___73694);

return statearr_71799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__71801 = arguments.length;
switch (G__71801) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__69613__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = (function (state_71866){
var state_val_71867 = (state_71866[(1)]);
if((state_val_71867 === (7))){
var inst_71862 = (state_71866[(2)]);
var state_71866__$1 = state_71866;
var statearr_71868_73753 = state_71866__$1;
(statearr_71868_73753[(2)] = inst_71862);

(statearr_71868_73753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71867 === (20))){
var inst_71832 = (state_71866[(7)]);
var inst_71843 = (state_71866[(2)]);
var inst_71844 = cljs.core.next(inst_71832);
var inst_71818 = inst_71844;
var inst_71819 = null;
var inst_71820 = (0);
var inst_71821 = (0);
var state_71866__$1 = (function (){var statearr_71869 = state_71866;
(statearr_71869[(8)] = inst_71821);

(statearr_71869[(9)] = inst_71819);

(statearr_71869[(10)] = inst_71820);

(statearr_71869[(11)] = inst_71843);

(statearr_71869[(12)] = inst_71818);

return statearr_71869;
})();
var statearr_71870_73754 = state_71866__$1;
(statearr_71870_73754[(2)] = null);

(statearr_71870_73754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71867 === (1))){
var state_71866__$1 = state_71866;
var statearr_71871_73759 = state_71866__$1;
(statearr_71871_73759[(2)] = null);

(statearr_71871_73759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71867 === (4))){
var inst_71807 = (state_71866[(13)]);
var inst_71807__$1 = (state_71866[(2)]);
var inst_71808 = (inst_71807__$1 == null);
var state_71866__$1 = (function (){var statearr_71872 = state_71866;
(statearr_71872[(13)] = inst_71807__$1);

return statearr_71872;
})();
if(cljs.core.truth_(inst_71808)){
var statearr_71873_73762 = state_71866__$1;
(statearr_71873_73762[(1)] = (5));

} else {
var statearr_71874_73763 = state_71866__$1;
(statearr_71874_73763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71867 === (15))){
var state_71866__$1 = state_71866;
var statearr_71878_73764 = state_71866__$1;
(statearr_71878_73764[(2)] = null);

(statearr_71878_73764[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71867 === (21))){
var state_71866__$1 = state_71866;
var statearr_71879_73768 = state_71866__$1;
(statearr_71879_73768[(2)] = null);

(statearr_71879_73768[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71867 === (13))){
var inst_71821 = (state_71866[(8)]);
var inst_71819 = (state_71866[(9)]);
var inst_71820 = (state_71866[(10)]);
var inst_71818 = (state_71866[(12)]);
var inst_71828 = (state_71866[(2)]);
var inst_71829 = (inst_71821 + (1));
var tmp71875 = inst_71819;
var tmp71876 = inst_71820;
var tmp71877 = inst_71818;
var inst_71818__$1 = tmp71877;
var inst_71819__$1 = tmp71875;
var inst_71820__$1 = tmp71876;
var inst_71821__$1 = inst_71829;
var state_71866__$1 = (function (){var statearr_71880 = state_71866;
(statearr_71880[(8)] = inst_71821__$1);

(statearr_71880[(9)] = inst_71819__$1);

(statearr_71880[(10)] = inst_71820__$1);

(statearr_71880[(14)] = inst_71828);

(statearr_71880[(12)] = inst_71818__$1);

return statearr_71880;
})();
var statearr_71881_73772 = state_71866__$1;
(statearr_71881_73772[(2)] = null);

(statearr_71881_73772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71867 === (22))){
var state_71866__$1 = state_71866;
var statearr_71882_73773 = state_71866__$1;
(statearr_71882_73773[(2)] = null);

(statearr_71882_73773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71867 === (6))){
var inst_71807 = (state_71866[(13)]);
var inst_71816 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_71807) : f.call(null,inst_71807));
var inst_71817 = cljs.core.seq(inst_71816);
var inst_71818 = inst_71817;
var inst_71819 = null;
var inst_71820 = (0);
var inst_71821 = (0);
var state_71866__$1 = (function (){var statearr_71883 = state_71866;
(statearr_71883[(8)] = inst_71821);

(statearr_71883[(9)] = inst_71819);

(statearr_71883[(10)] = inst_71820);

(statearr_71883[(12)] = inst_71818);

return statearr_71883;
})();
var statearr_71884_73781 = state_71866__$1;
(statearr_71884_73781[(2)] = null);

(statearr_71884_73781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71867 === (17))){
var inst_71832 = (state_71866[(7)]);
var inst_71836 = cljs.core.chunk_first(inst_71832);
var inst_71837 = cljs.core.chunk_rest(inst_71832);
var inst_71838 = cljs.core.count(inst_71836);
var inst_71818 = inst_71837;
var inst_71819 = inst_71836;
var inst_71820 = inst_71838;
var inst_71821 = (0);
var state_71866__$1 = (function (){var statearr_71885 = state_71866;
(statearr_71885[(8)] = inst_71821);

(statearr_71885[(9)] = inst_71819);

(statearr_71885[(10)] = inst_71820);

(statearr_71885[(12)] = inst_71818);

return statearr_71885;
})();
var statearr_71886_73784 = state_71866__$1;
(statearr_71886_73784[(2)] = null);

(statearr_71886_73784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71867 === (3))){
var inst_71864 = (state_71866[(2)]);
var state_71866__$1 = state_71866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71866__$1,inst_71864);
} else {
if((state_val_71867 === (12))){
var inst_71852 = (state_71866[(2)]);
var state_71866__$1 = state_71866;
var statearr_71887_73788 = state_71866__$1;
(statearr_71887_73788[(2)] = inst_71852);

(statearr_71887_73788[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71867 === (2))){
var state_71866__$1 = state_71866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71866__$1,(4),in$);
} else {
if((state_val_71867 === (23))){
var inst_71860 = (state_71866[(2)]);
var state_71866__$1 = state_71866;
var statearr_71888_73790 = state_71866__$1;
(statearr_71888_73790[(2)] = inst_71860);

(statearr_71888_73790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71867 === (19))){
var inst_71847 = (state_71866[(2)]);
var state_71866__$1 = state_71866;
var statearr_71889_73796 = state_71866__$1;
(statearr_71889_73796[(2)] = inst_71847);

(statearr_71889_73796[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71867 === (11))){
var inst_71832 = (state_71866[(7)]);
var inst_71818 = (state_71866[(12)]);
var inst_71832__$1 = cljs.core.seq(inst_71818);
var state_71866__$1 = (function (){var statearr_71890 = state_71866;
(statearr_71890[(7)] = inst_71832__$1);

return statearr_71890;
})();
if(inst_71832__$1){
var statearr_71891_73799 = state_71866__$1;
(statearr_71891_73799[(1)] = (14));

} else {
var statearr_71893_73802 = state_71866__$1;
(statearr_71893_73802[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71867 === (9))){
var inst_71854 = (state_71866[(2)]);
var inst_71855 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_71866__$1 = (function (){var statearr_71901 = state_71866;
(statearr_71901[(15)] = inst_71854);

return statearr_71901;
})();
if(cljs.core.truth_(inst_71855)){
var statearr_71902_73804 = state_71866__$1;
(statearr_71902_73804[(1)] = (21));

} else {
var statearr_71903_73806 = state_71866__$1;
(statearr_71903_73806[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71867 === (5))){
var inst_71810 = cljs.core.async.close_BANG_(out);
var state_71866__$1 = state_71866;
var statearr_71907_73808 = state_71866__$1;
(statearr_71907_73808[(2)] = inst_71810);

(statearr_71907_73808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71867 === (14))){
var inst_71832 = (state_71866[(7)]);
var inst_71834 = cljs.core.chunked_seq_QMARK_(inst_71832);
var state_71866__$1 = state_71866;
if(inst_71834){
var statearr_71908_73814 = state_71866__$1;
(statearr_71908_73814[(1)] = (17));

} else {
var statearr_71909_73817 = state_71866__$1;
(statearr_71909_73817[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71867 === (16))){
var inst_71850 = (state_71866[(2)]);
var state_71866__$1 = state_71866;
var statearr_71910_73819 = state_71866__$1;
(statearr_71910_73819[(2)] = inst_71850);

(statearr_71910_73819[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71867 === (10))){
var inst_71821 = (state_71866[(8)]);
var inst_71819 = (state_71866[(9)]);
var inst_71826 = cljs.core._nth(inst_71819,inst_71821);
var state_71866__$1 = state_71866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71866__$1,(13),out,inst_71826);
} else {
if((state_val_71867 === (18))){
var inst_71832 = (state_71866[(7)]);
var inst_71841 = cljs.core.first(inst_71832);
var state_71866__$1 = state_71866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71866__$1,(20),out,inst_71841);
} else {
if((state_val_71867 === (8))){
var inst_71821 = (state_71866[(8)]);
var inst_71820 = (state_71866[(10)]);
var inst_71823 = (inst_71821 < inst_71820);
var inst_71824 = inst_71823;
var state_71866__$1 = state_71866;
if(cljs.core.truth_(inst_71824)){
var statearr_71911_73829 = state_71866__$1;
(statearr_71911_73829[(1)] = (10));

} else {
var statearr_71912_73832 = state_71866__$1;
(statearr_71912_73832[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__69361__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__69361__auto____0 = (function (){
var statearr_71913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71913[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__69361__auto__);

(statearr_71913[(1)] = (1));

return statearr_71913;
});
var cljs$core$async$mapcat_STAR__$_state_machine__69361__auto____1 = (function (state_71866){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_71866);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e71914){var ex__69364__auto__ = e71914;
var statearr_71915_73838 = state_71866;
(statearr_71915_73838[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_71866[(4)]))){
var statearr_71916_73839 = state_71866;
(statearr_71916_73839[(1)] = cljs.core.first((state_71866[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73845 = state_71866;
state_71866 = G__73845;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__69361__auto__ = function(state_71866){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__69361__auto____1.call(this,state_71866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__69361__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__69361__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__69361__auto__;
})()
})();
var state__69615__auto__ = (function (){var statearr_71917 = f__69614__auto__();
(statearr_71917[(6)] = c__69613__auto__);

return statearr_71917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
}));

return c__69613__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__71919 = arguments.length;
switch (G__71919) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__71921 = arguments.length;
switch (G__71921) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__71926 = arguments.length;
switch (G__71926) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69613__auto___73882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = (function (state_71953){
var state_val_71954 = (state_71953[(1)]);
if((state_val_71954 === (7))){
var inst_71948 = (state_71953[(2)]);
var state_71953__$1 = state_71953;
var statearr_71955_73890 = state_71953__$1;
(statearr_71955_73890[(2)] = inst_71948);

(statearr_71955_73890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71954 === (1))){
var inst_71928 = null;
var state_71953__$1 = (function (){var statearr_71958 = state_71953;
(statearr_71958[(7)] = inst_71928);

return statearr_71958;
})();
var statearr_71960_73894 = state_71953__$1;
(statearr_71960_73894[(2)] = null);

(statearr_71960_73894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71954 === (4))){
var inst_71932 = (state_71953[(8)]);
var inst_71932__$1 = (state_71953[(2)]);
var inst_71933 = (inst_71932__$1 == null);
var inst_71934 = cljs.core.not(inst_71933);
var state_71953__$1 = (function (){var statearr_71961 = state_71953;
(statearr_71961[(8)] = inst_71932__$1);

return statearr_71961;
})();
if(inst_71934){
var statearr_71962_73895 = state_71953__$1;
(statearr_71962_73895[(1)] = (5));

} else {
var statearr_71963_73899 = state_71953__$1;
(statearr_71963_73899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71954 === (6))){
var state_71953__$1 = state_71953;
var statearr_71964_73900 = state_71953__$1;
(statearr_71964_73900[(2)] = null);

(statearr_71964_73900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71954 === (3))){
var inst_71950 = (state_71953[(2)]);
var inst_71951 = cljs.core.async.close_BANG_(out);
var state_71953__$1 = (function (){var statearr_71965 = state_71953;
(statearr_71965[(9)] = inst_71950);

return statearr_71965;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_71953__$1,inst_71951);
} else {
if((state_val_71954 === (2))){
var state_71953__$1 = state_71953;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71953__$1,(4),ch);
} else {
if((state_val_71954 === (11))){
var inst_71932 = (state_71953[(8)]);
var inst_71941 = (state_71953[(2)]);
var inst_71928 = inst_71932;
var state_71953__$1 = (function (){var statearr_71966 = state_71953;
(statearr_71966[(7)] = inst_71928);

(statearr_71966[(10)] = inst_71941);

return statearr_71966;
})();
var statearr_71967_73916 = state_71953__$1;
(statearr_71967_73916[(2)] = null);

(statearr_71967_73916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71954 === (9))){
var inst_71932 = (state_71953[(8)]);
var state_71953__$1 = state_71953;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71953__$1,(11),out,inst_71932);
} else {
if((state_val_71954 === (5))){
var inst_71928 = (state_71953[(7)]);
var inst_71932 = (state_71953[(8)]);
var inst_71936 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71932,inst_71928);
var state_71953__$1 = state_71953;
if(inst_71936){
var statearr_71969_73933 = state_71953__$1;
(statearr_71969_73933[(1)] = (8));

} else {
var statearr_71970_73935 = state_71953__$1;
(statearr_71970_73935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71954 === (10))){
var inst_71945 = (state_71953[(2)]);
var state_71953__$1 = state_71953;
var statearr_71971_73936 = state_71953__$1;
(statearr_71971_73936[(2)] = inst_71945);

(statearr_71971_73936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71954 === (8))){
var inst_71928 = (state_71953[(7)]);
var tmp71968 = inst_71928;
var inst_71928__$1 = tmp71968;
var state_71953__$1 = (function (){var statearr_71972 = state_71953;
(statearr_71972[(7)] = inst_71928__$1);

return statearr_71972;
})();
var statearr_71973_73941 = state_71953__$1;
(statearr_71973_73941[(2)] = null);

(statearr_71973_73941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69361__auto__ = null;
var cljs$core$async$state_machine__69361__auto____0 = (function (){
var statearr_71974 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71974[(0)] = cljs$core$async$state_machine__69361__auto__);

(statearr_71974[(1)] = (1));

return statearr_71974;
});
var cljs$core$async$state_machine__69361__auto____1 = (function (state_71953){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_71953);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e71975){var ex__69364__auto__ = e71975;
var statearr_71976_73943 = state_71953;
(statearr_71976_73943[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_71953[(4)]))){
var statearr_71977_73948 = state_71953;
(statearr_71977_73948[(1)] = cljs.core.first((state_71953[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73950 = state_71953;
state_71953 = G__73950;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$state_machine__69361__auto__ = function(state_71953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69361__auto____1.call(this,state_71953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69361__auto____0;
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69361__auto____1;
return cljs$core$async$state_machine__69361__auto__;
})()
})();
var state__69615__auto__ = (function (){var statearr_71978 = f__69614__auto__();
(statearr_71978[(6)] = c__69613__auto___73882);

return statearr_71978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__71980 = arguments.length;
switch (G__71980) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69613__auto___73969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = (function (state_72021){
var state_val_72022 = (state_72021[(1)]);
if((state_val_72022 === (7))){
var inst_72017 = (state_72021[(2)]);
var state_72021__$1 = state_72021;
var statearr_72023_73976 = state_72021__$1;
(statearr_72023_73976[(2)] = inst_72017);

(statearr_72023_73976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72022 === (1))){
var inst_71984 = (new Array(n));
var inst_71985 = inst_71984;
var inst_71986 = (0);
var state_72021__$1 = (function (){var statearr_72027 = state_72021;
(statearr_72027[(7)] = inst_71986);

(statearr_72027[(8)] = inst_71985);

return statearr_72027;
})();
var statearr_72032_73989 = state_72021__$1;
(statearr_72032_73989[(2)] = null);

(statearr_72032_73989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72022 === (4))){
var inst_71989 = (state_72021[(9)]);
var inst_71989__$1 = (state_72021[(2)]);
var inst_71990 = (inst_71989__$1 == null);
var inst_71991 = cljs.core.not(inst_71990);
var state_72021__$1 = (function (){var statearr_72039 = state_72021;
(statearr_72039[(9)] = inst_71989__$1);

return statearr_72039;
})();
if(inst_71991){
var statearr_72040_74000 = state_72021__$1;
(statearr_72040_74000[(1)] = (5));

} else {
var statearr_72041_74005 = state_72021__$1;
(statearr_72041_74005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72022 === (15))){
var inst_72011 = (state_72021[(2)]);
var state_72021__$1 = state_72021;
var statearr_72042_74006 = state_72021__$1;
(statearr_72042_74006[(2)] = inst_72011);

(statearr_72042_74006[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72022 === (13))){
var state_72021__$1 = state_72021;
var statearr_72043_74009 = state_72021__$1;
(statearr_72043_74009[(2)] = null);

(statearr_72043_74009[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72022 === (6))){
var inst_71986 = (state_72021[(7)]);
var inst_72007 = (inst_71986 > (0));
var state_72021__$1 = state_72021;
if(cljs.core.truth_(inst_72007)){
var statearr_72048_74015 = state_72021__$1;
(statearr_72048_74015[(1)] = (12));

} else {
var statearr_72052_74017 = state_72021__$1;
(statearr_72052_74017[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72022 === (3))){
var inst_72019 = (state_72021[(2)]);
var state_72021__$1 = state_72021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72021__$1,inst_72019);
} else {
if((state_val_72022 === (12))){
var inst_71985 = (state_72021[(8)]);
var inst_72009 = cljs.core.vec(inst_71985);
var state_72021__$1 = state_72021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72021__$1,(15),out,inst_72009);
} else {
if((state_val_72022 === (2))){
var state_72021__$1 = state_72021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72021__$1,(4),ch);
} else {
if((state_val_72022 === (11))){
var inst_72001 = (state_72021[(2)]);
var inst_72002 = (new Array(n));
var inst_71985 = inst_72002;
var inst_71986 = (0);
var state_72021__$1 = (function (){var statearr_72056 = state_72021;
(statearr_72056[(10)] = inst_72001);

(statearr_72056[(7)] = inst_71986);

(statearr_72056[(8)] = inst_71985);

return statearr_72056;
})();
var statearr_72057_74039 = state_72021__$1;
(statearr_72057_74039[(2)] = null);

(statearr_72057_74039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72022 === (9))){
var inst_71985 = (state_72021[(8)]);
var inst_71999 = cljs.core.vec(inst_71985);
var state_72021__$1 = state_72021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72021__$1,(11),out,inst_71999);
} else {
if((state_val_72022 === (5))){
var inst_71989 = (state_72021[(9)]);
var inst_71994 = (state_72021[(11)]);
var inst_71986 = (state_72021[(7)]);
var inst_71985 = (state_72021[(8)]);
var inst_71993 = (inst_71985[inst_71986] = inst_71989);
var inst_71994__$1 = (inst_71986 + (1));
var inst_71995 = (inst_71994__$1 < n);
var state_72021__$1 = (function (){var statearr_72068 = state_72021;
(statearr_72068[(12)] = inst_71993);

(statearr_72068[(11)] = inst_71994__$1);

return statearr_72068;
})();
if(cljs.core.truth_(inst_71995)){
var statearr_72072_74060 = state_72021__$1;
(statearr_72072_74060[(1)] = (8));

} else {
var statearr_72073_74065 = state_72021__$1;
(statearr_72073_74065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72022 === (14))){
var inst_72014 = (state_72021[(2)]);
var inst_72015 = cljs.core.async.close_BANG_(out);
var state_72021__$1 = (function (){var statearr_72079 = state_72021;
(statearr_72079[(13)] = inst_72014);

return statearr_72079;
})();
var statearr_72080_74067 = state_72021__$1;
(statearr_72080_74067[(2)] = inst_72015);

(statearr_72080_74067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72022 === (10))){
var inst_72005 = (state_72021[(2)]);
var state_72021__$1 = state_72021;
var statearr_72081_74077 = state_72021__$1;
(statearr_72081_74077[(2)] = inst_72005);

(statearr_72081_74077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72022 === (8))){
var inst_71994 = (state_72021[(11)]);
var inst_71985 = (state_72021[(8)]);
var tmp72078 = inst_71985;
var inst_71985__$1 = tmp72078;
var inst_71986 = inst_71994;
var state_72021__$1 = (function (){var statearr_72084 = state_72021;
(statearr_72084[(7)] = inst_71986);

(statearr_72084[(8)] = inst_71985__$1);

return statearr_72084;
})();
var statearr_72085_74078 = state_72021__$1;
(statearr_72085_74078[(2)] = null);

(statearr_72085_74078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69361__auto__ = null;
var cljs$core$async$state_machine__69361__auto____0 = (function (){
var statearr_72086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72086[(0)] = cljs$core$async$state_machine__69361__auto__);

(statearr_72086[(1)] = (1));

return statearr_72086;
});
var cljs$core$async$state_machine__69361__auto____1 = (function (state_72021){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_72021);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e72087){var ex__69364__auto__ = e72087;
var statearr_72088_74080 = state_72021;
(statearr_72088_74080[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_72021[(4)]))){
var statearr_72089_74081 = state_72021;
(statearr_72089_74081[(1)] = cljs.core.first((state_72021[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74082 = state_72021;
state_72021 = G__74082;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$state_machine__69361__auto__ = function(state_72021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69361__auto____1.call(this,state_72021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69361__auto____0;
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69361__auto____1;
return cljs$core$async$state_machine__69361__auto__;
})()
})();
var state__69615__auto__ = (function (){var statearr_72090 = f__69614__auto__();
(statearr_72090[(6)] = c__69613__auto___73969);

return statearr_72090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__72092 = arguments.length;
switch (G__72092) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69613__auto___74085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69614__auto__ = (function (){var switch__69360__auto__ = (function (state_72134){
var state_val_72135 = (state_72134[(1)]);
if((state_val_72135 === (7))){
var inst_72130 = (state_72134[(2)]);
var state_72134__$1 = state_72134;
var statearr_72136_74086 = state_72134__$1;
(statearr_72136_74086[(2)] = inst_72130);

(statearr_72136_74086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72135 === (1))){
var inst_72093 = [];
var inst_72094 = inst_72093;
var inst_72095 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_72134__$1 = (function (){var statearr_72137 = state_72134;
(statearr_72137[(7)] = inst_72094);

(statearr_72137[(8)] = inst_72095);

return statearr_72137;
})();
var statearr_72138_74090 = state_72134__$1;
(statearr_72138_74090[(2)] = null);

(statearr_72138_74090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72135 === (4))){
var inst_72098 = (state_72134[(9)]);
var inst_72098__$1 = (state_72134[(2)]);
var inst_72099 = (inst_72098__$1 == null);
var inst_72100 = cljs.core.not(inst_72099);
var state_72134__$1 = (function (){var statearr_72139 = state_72134;
(statearr_72139[(9)] = inst_72098__$1);

return statearr_72139;
})();
if(inst_72100){
var statearr_72140_74091 = state_72134__$1;
(statearr_72140_74091[(1)] = (5));

} else {
var statearr_72141_74092 = state_72134__$1;
(statearr_72141_74092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72135 === (15))){
var inst_72124 = (state_72134[(2)]);
var state_72134__$1 = state_72134;
var statearr_72142_74098 = state_72134__$1;
(statearr_72142_74098[(2)] = inst_72124);

(statearr_72142_74098[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72135 === (13))){
var state_72134__$1 = state_72134;
var statearr_72143_74100 = state_72134__$1;
(statearr_72143_74100[(2)] = null);

(statearr_72143_74100[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72135 === (6))){
var inst_72094 = (state_72134[(7)]);
var inst_72119 = inst_72094.length;
var inst_72120 = (inst_72119 > (0));
var state_72134__$1 = state_72134;
if(cljs.core.truth_(inst_72120)){
var statearr_72144_74104 = state_72134__$1;
(statearr_72144_74104[(1)] = (12));

} else {
var statearr_72145_74105 = state_72134__$1;
(statearr_72145_74105[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72135 === (3))){
var inst_72132 = (state_72134[(2)]);
var state_72134__$1 = state_72134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72134__$1,inst_72132);
} else {
if((state_val_72135 === (12))){
var inst_72094 = (state_72134[(7)]);
var inst_72122 = cljs.core.vec(inst_72094);
var state_72134__$1 = state_72134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72134__$1,(15),out,inst_72122);
} else {
if((state_val_72135 === (2))){
var state_72134__$1 = state_72134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72134__$1,(4),ch);
} else {
if((state_val_72135 === (11))){
var inst_72098 = (state_72134[(9)]);
var inst_72102 = (state_72134[(10)]);
var inst_72112 = (state_72134[(2)]);
var inst_72113 = [];
var inst_72114 = inst_72113.push(inst_72098);
var inst_72094 = inst_72113;
var inst_72095 = inst_72102;
var state_72134__$1 = (function (){var statearr_72149 = state_72134;
(statearr_72149[(7)] = inst_72094);

(statearr_72149[(11)] = inst_72114);

(statearr_72149[(8)] = inst_72095);

(statearr_72149[(12)] = inst_72112);

return statearr_72149;
})();
var statearr_72150_74116 = state_72134__$1;
(statearr_72150_74116[(2)] = null);

(statearr_72150_74116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72135 === (9))){
var inst_72094 = (state_72134[(7)]);
var inst_72110 = cljs.core.vec(inst_72094);
var state_72134__$1 = state_72134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72134__$1,(11),out,inst_72110);
} else {
if((state_val_72135 === (5))){
var inst_72098 = (state_72134[(9)]);
var inst_72095 = (state_72134[(8)]);
var inst_72102 = (state_72134[(10)]);
var inst_72102__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_72098) : f.call(null,inst_72098));
var inst_72103 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_72102__$1,inst_72095);
var inst_72104 = cljs.core.keyword_identical_QMARK_(inst_72095,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_72105 = ((inst_72103) || (inst_72104));
var state_72134__$1 = (function (){var statearr_72151 = state_72134;
(statearr_72151[(10)] = inst_72102__$1);

return statearr_72151;
})();
if(cljs.core.truth_(inst_72105)){
var statearr_72153_74119 = state_72134__$1;
(statearr_72153_74119[(1)] = (8));

} else {
var statearr_72154_74120 = state_72134__$1;
(statearr_72154_74120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72135 === (14))){
var inst_72127 = (state_72134[(2)]);
var inst_72128 = cljs.core.async.close_BANG_(out);
var state_72134__$1 = (function (){var statearr_72167 = state_72134;
(statearr_72167[(13)] = inst_72127);

return statearr_72167;
})();
var statearr_72168_74123 = state_72134__$1;
(statearr_72168_74123[(2)] = inst_72128);

(statearr_72168_74123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72135 === (10))){
var inst_72117 = (state_72134[(2)]);
var state_72134__$1 = state_72134;
var statearr_72169_74128 = state_72134__$1;
(statearr_72169_74128[(2)] = inst_72117);

(statearr_72169_74128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72135 === (8))){
var inst_72094 = (state_72134[(7)]);
var inst_72098 = (state_72134[(9)]);
var inst_72102 = (state_72134[(10)]);
var inst_72107 = inst_72094.push(inst_72098);
var tmp72155 = inst_72094;
var inst_72094__$1 = tmp72155;
var inst_72095 = inst_72102;
var state_72134__$1 = (function (){var statearr_72170 = state_72134;
(statearr_72170[(7)] = inst_72094__$1);

(statearr_72170[(8)] = inst_72095);

(statearr_72170[(14)] = inst_72107);

return statearr_72170;
})();
var statearr_72171_74131 = state_72134__$1;
(statearr_72171_74131[(2)] = null);

(statearr_72171_74131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69361__auto__ = null;
var cljs$core$async$state_machine__69361__auto____0 = (function (){
var statearr_72173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72173[(0)] = cljs$core$async$state_machine__69361__auto__);

(statearr_72173[(1)] = (1));

return statearr_72173;
});
var cljs$core$async$state_machine__69361__auto____1 = (function (state_72134){
while(true){
var ret_value__69362__auto__ = (function (){try{while(true){
var result__69363__auto__ = switch__69360__auto__(state_72134);
if(cljs.core.keyword_identical_QMARK_(result__69363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69363__auto__;
}
break;
}
}catch (e72174){var ex__69364__auto__ = e72174;
var statearr_72175_74132 = state_72134;
(statearr_72175_74132[(2)] = ex__69364__auto__);


if(cljs.core.seq((state_72134[(4)]))){
var statearr_72177_74133 = state_72134;
(statearr_72177_74133[(1)] = cljs.core.first((state_72134[(4)])));

} else {
throw ex__69364__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74134 = state_72134;
state_72134 = G__74134;
continue;
} else {
return ret_value__69362__auto__;
}
break;
}
});
cljs$core$async$state_machine__69361__auto__ = function(state_72134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69361__auto____1.call(this,state_72134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69361__auto____0;
cljs$core$async$state_machine__69361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69361__auto____1;
return cljs$core$async$state_machine__69361__auto__;
})()
})();
var state__69615__auto__ = (function (){var statearr_72178 = f__69614__auto__();
(statearr_72178[(6)] = c__69613__auto___74085);

return statearr_72178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69615__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
