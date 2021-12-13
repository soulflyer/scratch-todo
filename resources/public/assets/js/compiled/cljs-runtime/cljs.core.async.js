goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__67192 = arguments.length;
switch (G__67192) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async67195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67195 = (function (f,blockable,meta67196){
this.f = f;
this.blockable = blockable;
this.meta67196 = meta67196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async67195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67197,meta67196__$1){
var self__ = this;
var _67197__$1 = this;
return (new cljs.core.async.t_cljs$core$async67195(self__.f,self__.blockable,meta67196__$1));
}));

(cljs.core.async.t_cljs$core$async67195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67197){
var self__ = this;
var _67197__$1 = this;
return self__.meta67196;
}));

(cljs.core.async.t_cljs$core$async67195.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67195.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async67195.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async67195.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async67195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta67196","meta67196",-678432424,null)], null);
}));

(cljs.core.async.t_cljs$core$async67195.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async67195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67195");

(cljs.core.async.t_cljs$core$async67195.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async67195");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async67195.
 */
cljs.core.async.__GT_t_cljs$core$async67195 = (function cljs$core$async$__GT_t_cljs$core$async67195(f__$1,blockable__$1,meta67196){
return (new cljs.core.async.t_cljs$core$async67195(f__$1,blockable__$1,meta67196));
});

}

return (new cljs.core.async.t_cljs$core$async67195(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__67238 = arguments.length;
switch (G__67238) {
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
var G__67255 = arguments.length;
switch (G__67255) {
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
var G__67263 = arguments.length;
switch (G__67263) {
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
var val_69797 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_69797) : fn1.call(null,val_69797));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_69797) : fn1.call(null,val_69797));
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
var G__67276 = arguments.length;
switch (G__67276) {
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
var n__4613__auto___69812 = n;
var x_69813 = (0);
while(true){
if((x_69813 < n__4613__auto___69812)){
(a[x_69813] = x_69813);

var G__69814 = (x_69813 + (1));
x_69813 = G__69814;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async67282 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67282 = (function (flag,meta67283){
this.flag = flag;
this.meta67283 = meta67283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async67282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67284,meta67283__$1){
var self__ = this;
var _67284__$1 = this;
return (new cljs.core.async.t_cljs$core$async67282(self__.flag,meta67283__$1));
}));

(cljs.core.async.t_cljs$core$async67282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67284){
var self__ = this;
var _67284__$1 = this;
return self__.meta67283;
}));

(cljs.core.async.t_cljs$core$async67282.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67282.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async67282.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async67282.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async67282.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta67283","meta67283",-1464256198,null)], null);
}));

(cljs.core.async.t_cljs$core$async67282.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async67282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67282");

(cljs.core.async.t_cljs$core$async67282.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async67282");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async67282.
 */
cljs.core.async.__GT_t_cljs$core$async67282 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async67282(flag__$1,meta67283){
return (new cljs.core.async.t_cljs$core$async67282(flag__$1,meta67283));
});

}

return (new cljs.core.async.t_cljs$core$async67282(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async67285 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67285 = (function (flag,cb,meta67286){
this.flag = flag;
this.cb = cb;
this.meta67286 = meta67286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async67285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67287,meta67286__$1){
var self__ = this;
var _67287__$1 = this;
return (new cljs.core.async.t_cljs$core$async67285(self__.flag,self__.cb,meta67286__$1));
}));

(cljs.core.async.t_cljs$core$async67285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67287){
var self__ = this;
var _67287__$1 = this;
return self__.meta67286;
}));

(cljs.core.async.t_cljs$core$async67285.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async67285.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async67285.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async67285.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async67285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta67286","meta67286",-634681346,null)], null);
}));

(cljs.core.async.t_cljs$core$async67285.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async67285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67285");

(cljs.core.async.t_cljs$core$async67285.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async67285");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async67285.
 */
cljs.core.async.__GT_t_cljs$core$async67285 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async67285(flag__$1,cb__$1,meta67286){
return (new cljs.core.async.t_cljs$core$async67285(flag__$1,cb__$1,meta67286));
});

}

return (new cljs.core.async.t_cljs$core$async67285(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__67300_SHARP_){
var G__67302 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__67300_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__67302) : fret.call(null,G__67302));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__67301_SHARP_){
var G__67303 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__67301_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__67303) : fret.call(null,G__67303));
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
var G__69827 = (i + (1));
i = G__69827;
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
var len__4736__auto___69832 = arguments.length;
var i__4737__auto___69833 = (0);
while(true){
if((i__4737__auto___69833 < len__4736__auto___69832)){
args__4742__auto__.push((arguments[i__4737__auto___69833]));

var G__69834 = (i__4737__auto___69833 + (1));
i__4737__auto___69833 = G__69834;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__67307){
var map__67308 = p__67307;
var map__67308__$1 = (((((!((map__67308 == null))))?(((((map__67308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67308):map__67308);
var opts = map__67308__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq67305){
var G__67306 = cljs.core.first(seq67305);
var seq67305__$1 = cljs.core.next(seq67305);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67306,seq67305__$1);
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
var G__67320 = arguments.length;
switch (G__67320) {
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
var c__67107__auto___69837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = (function (state_67357){
var state_val_67358 = (state_67357[(1)]);
if((state_val_67358 === (7))){
var inst_67353 = (state_67357[(2)]);
var state_67357__$1 = state_67357;
var statearr_67361_69838 = state_67357__$1;
(statearr_67361_69838[(2)] = inst_67353);

(statearr_67361_69838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67358 === (1))){
var state_67357__$1 = state_67357;
var statearr_67362_69840 = state_67357__$1;
(statearr_67362_69840[(2)] = null);

(statearr_67362_69840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67358 === (4))){
var inst_67335 = (state_67357[(7)]);
var inst_67335__$1 = (state_67357[(2)]);
var inst_67337 = (inst_67335__$1 == null);
var state_67357__$1 = (function (){var statearr_67364 = state_67357;
(statearr_67364[(7)] = inst_67335__$1);

return statearr_67364;
})();
if(cljs.core.truth_(inst_67337)){
var statearr_67365_69841 = state_67357__$1;
(statearr_67365_69841[(1)] = (5));

} else {
var statearr_67367_69842 = state_67357__$1;
(statearr_67367_69842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67358 === (13))){
var state_67357__$1 = state_67357;
var statearr_67369_69843 = state_67357__$1;
(statearr_67369_69843[(2)] = null);

(statearr_67369_69843[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67358 === (6))){
var inst_67335 = (state_67357[(7)]);
var state_67357__$1 = state_67357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67357__$1,(11),to,inst_67335);
} else {
if((state_val_67358 === (3))){
var inst_67355 = (state_67357[(2)]);
var state_67357__$1 = state_67357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67357__$1,inst_67355);
} else {
if((state_val_67358 === (12))){
var state_67357__$1 = state_67357;
var statearr_67372_69852 = state_67357__$1;
(statearr_67372_69852[(2)] = null);

(statearr_67372_69852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67358 === (2))){
var state_67357__$1 = state_67357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67357__$1,(4),from);
} else {
if((state_val_67358 === (11))){
var inst_67346 = (state_67357[(2)]);
var state_67357__$1 = state_67357;
if(cljs.core.truth_(inst_67346)){
var statearr_67375_69853 = state_67357__$1;
(statearr_67375_69853[(1)] = (12));

} else {
var statearr_67376_69854 = state_67357__$1;
(statearr_67376_69854[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67358 === (9))){
var state_67357__$1 = state_67357;
var statearr_67377_69858 = state_67357__$1;
(statearr_67377_69858[(2)] = null);

(statearr_67377_69858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67358 === (5))){
var state_67357__$1 = state_67357;
if(cljs.core.truth_(close_QMARK_)){
var statearr_67382_69859 = state_67357__$1;
(statearr_67382_69859[(1)] = (8));

} else {
var statearr_67383_69860 = state_67357__$1;
(statearr_67383_69860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67358 === (14))){
var inst_67351 = (state_67357[(2)]);
var state_67357__$1 = state_67357;
var statearr_67384_69864 = state_67357__$1;
(statearr_67384_69864[(2)] = inst_67351);

(statearr_67384_69864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67358 === (10))){
var inst_67343 = (state_67357[(2)]);
var state_67357__$1 = state_67357;
var statearr_67392_69871 = state_67357__$1;
(statearr_67392_69871[(2)] = inst_67343);

(statearr_67392_69871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67358 === (8))){
var inst_67340 = cljs.core.async.close_BANG_(to);
var state_67357__$1 = state_67357;
var statearr_67398_69876 = state_67357__$1;
(statearr_67398_69876[(2)] = inst_67340);

(statearr_67398_69876[(1)] = (10));


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
var cljs$core$async$state_machine__66939__auto__ = null;
var cljs$core$async$state_machine__66939__auto____0 = (function (){
var statearr_67402 = [null,null,null,null,null,null,null,null];
(statearr_67402[(0)] = cljs$core$async$state_machine__66939__auto__);

(statearr_67402[(1)] = (1));

return statearr_67402;
});
var cljs$core$async$state_machine__66939__auto____1 = (function (state_67357){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_67357);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e67403){var ex__66942__auto__ = e67403;
var statearr_67404_69887 = state_67357;
(statearr_67404_69887[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_67357[(4)]))){
var statearr_67405_69891 = state_67357;
(statearr_67405_69891[(1)] = cljs.core.first((state_67357[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69892 = state_67357;
state_67357 = G__69892;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$state_machine__66939__auto__ = function(state_67357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66939__auto____1.call(this,state_67357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66939__auto____0;
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66939__auto____1;
return cljs$core$async$state_machine__66939__auto__;
})()
})();
var state__67109__auto__ = (function (){var statearr_67406 = f__67108__auto__();
(statearr_67406[(6)] = c__67107__auto___69837);

return statearr_67406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
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
var process = (function (p__67415){
var vec__67416 = p__67415;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67416,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67416,(1),null);
var job = vec__67416;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__67107__auto___69897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = (function (state_67423){
var state_val_67424 = (state_67423[(1)]);
if((state_val_67424 === (1))){
var state_67423__$1 = state_67423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67423__$1,(2),res,v);
} else {
if((state_val_67424 === (2))){
var inst_67420 = (state_67423[(2)]);
var inst_67421 = cljs.core.async.close_BANG_(res);
var state_67423__$1 = (function (){var statearr_67425 = state_67423;
(statearr_67425[(7)] = inst_67420);

return statearr_67425;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_67423__$1,inst_67421);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____0 = (function (){
var statearr_67426 = [null,null,null,null,null,null,null,null];
(statearr_67426[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__);

(statearr_67426[(1)] = (1));

return statearr_67426;
});
var cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____1 = (function (state_67423){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_67423);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e67427){var ex__66942__auto__ = e67427;
var statearr_67428_69898 = state_67423;
(statearr_67428_69898[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_67423[(4)]))){
var statearr_67429_69899 = state_67423;
(statearr_67429_69899[(1)] = cljs.core.first((state_67423[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69900 = state_67423;
state_67423 = G__69900;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__ = function(state_67423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____1.call(this,state_67423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__;
})()
})();
var state__67109__auto__ = (function (){var statearr_67430 = f__67108__auto__();
(statearr_67430[(6)] = c__67107__auto___69897);

return statearr_67430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__67431){
var vec__67432 = p__67431;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67432,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67432,(1),null);
var job = vec__67432;
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
var n__4613__auto___69921 = n;
var __69922 = (0);
while(true){
if((__69922 < n__4613__auto___69921)){
var G__67436_69923 = type;
var G__67436_69924__$1 = (((G__67436_69923 instanceof cljs.core.Keyword))?G__67436_69923.fqn:null);
switch (G__67436_69924__$1) {
case "compute":
var c__67107__auto___69926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__69922,c__67107__auto___69926,G__67436_69923,G__67436_69924__$1,n__4613__auto___69921,jobs,results,process,async){
return (function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = ((function (__69922,c__67107__auto___69926,G__67436_69923,G__67436_69924__$1,n__4613__auto___69921,jobs,results,process,async){
return (function (state_67453){
var state_val_67454 = (state_67453[(1)]);
if((state_val_67454 === (1))){
var state_67453__$1 = state_67453;
var statearr_67458_69927 = state_67453__$1;
(statearr_67458_69927[(2)] = null);

(statearr_67458_69927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67454 === (2))){
var state_67453__$1 = state_67453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67453__$1,(4),jobs);
} else {
if((state_val_67454 === (3))){
var inst_67448 = (state_67453[(2)]);
var state_67453__$1 = state_67453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67453__$1,inst_67448);
} else {
if((state_val_67454 === (4))){
var inst_67440 = (state_67453[(2)]);
var inst_67441 = process(inst_67440);
var state_67453__$1 = state_67453;
if(cljs.core.truth_(inst_67441)){
var statearr_67463_69951 = state_67453__$1;
(statearr_67463_69951[(1)] = (5));

} else {
var statearr_67464_69952 = state_67453__$1;
(statearr_67464_69952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67454 === (5))){
var state_67453__$1 = state_67453;
var statearr_67465_69957 = state_67453__$1;
(statearr_67465_69957[(2)] = null);

(statearr_67465_69957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67454 === (6))){
var state_67453__$1 = state_67453;
var statearr_67467_69962 = state_67453__$1;
(statearr_67467_69962[(2)] = null);

(statearr_67467_69962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67454 === (7))){
var inst_67446 = (state_67453[(2)]);
var state_67453__$1 = state_67453;
var statearr_67468_69963 = state_67453__$1;
(statearr_67468_69963[(2)] = inst_67446);

(statearr_67468_69963[(1)] = (3));


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
});})(__69922,c__67107__auto___69926,G__67436_69923,G__67436_69924__$1,n__4613__auto___69921,jobs,results,process,async))
;
return ((function (__69922,switch__66938__auto__,c__67107__auto___69926,G__67436_69923,G__67436_69924__$1,n__4613__auto___69921,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____0 = (function (){
var statearr_67470 = [null,null,null,null,null,null,null];
(statearr_67470[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__);

(statearr_67470[(1)] = (1));

return statearr_67470;
});
var cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____1 = (function (state_67453){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_67453);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e67471){var ex__66942__auto__ = e67471;
var statearr_67472_69965 = state_67453;
(statearr_67472_69965[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_67453[(4)]))){
var statearr_67473_69966 = state_67453;
(statearr_67473_69966[(1)] = cljs.core.first((state_67453[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69971 = state_67453;
state_67453 = G__69971;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__ = function(state_67453){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____1.call(this,state_67453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__;
})()
;})(__69922,switch__66938__auto__,c__67107__auto___69926,G__67436_69923,G__67436_69924__$1,n__4613__auto___69921,jobs,results,process,async))
})();
var state__67109__auto__ = (function (){var statearr_67474 = f__67108__auto__();
(statearr_67474[(6)] = c__67107__auto___69926);

return statearr_67474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
});})(__69922,c__67107__auto___69926,G__67436_69923,G__67436_69924__$1,n__4613__auto___69921,jobs,results,process,async))
);


break;
case "async":
var c__67107__auto___69977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__69922,c__67107__auto___69977,G__67436_69923,G__67436_69924__$1,n__4613__auto___69921,jobs,results,process,async){
return (function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = ((function (__69922,c__67107__auto___69977,G__67436_69923,G__67436_69924__$1,n__4613__auto___69921,jobs,results,process,async){
return (function (state_67487){
var state_val_67488 = (state_67487[(1)]);
if((state_val_67488 === (1))){
var state_67487__$1 = state_67487;
var statearr_67493_69980 = state_67487__$1;
(statearr_67493_69980[(2)] = null);

(statearr_67493_69980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67488 === (2))){
var state_67487__$1 = state_67487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67487__$1,(4),jobs);
} else {
if((state_val_67488 === (3))){
var inst_67485 = (state_67487[(2)]);
var state_67487__$1 = state_67487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67487__$1,inst_67485);
} else {
if((state_val_67488 === (4))){
var inst_67477 = (state_67487[(2)]);
var inst_67478 = async(inst_67477);
var state_67487__$1 = state_67487;
if(cljs.core.truth_(inst_67478)){
var statearr_67495_69994 = state_67487__$1;
(statearr_67495_69994[(1)] = (5));

} else {
var statearr_67496_69995 = state_67487__$1;
(statearr_67496_69995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67488 === (5))){
var state_67487__$1 = state_67487;
var statearr_67497_69996 = state_67487__$1;
(statearr_67497_69996[(2)] = null);

(statearr_67497_69996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67488 === (6))){
var state_67487__$1 = state_67487;
var statearr_67498_69997 = state_67487__$1;
(statearr_67498_69997[(2)] = null);

(statearr_67498_69997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67488 === (7))){
var inst_67483 = (state_67487[(2)]);
var state_67487__$1 = state_67487;
var statearr_67499_69998 = state_67487__$1;
(statearr_67499_69998[(2)] = inst_67483);

(statearr_67499_69998[(1)] = (3));


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
});})(__69922,c__67107__auto___69977,G__67436_69923,G__67436_69924__$1,n__4613__auto___69921,jobs,results,process,async))
;
return ((function (__69922,switch__66938__auto__,c__67107__auto___69977,G__67436_69923,G__67436_69924__$1,n__4613__auto___69921,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____0 = (function (){
var statearr_67500 = [null,null,null,null,null,null,null];
(statearr_67500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__);

(statearr_67500[(1)] = (1));

return statearr_67500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____1 = (function (state_67487){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_67487);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e67501){var ex__66942__auto__ = e67501;
var statearr_67502_69999 = state_67487;
(statearr_67502_69999[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_67487[(4)]))){
var statearr_67503_70000 = state_67487;
(statearr_67503_70000[(1)] = cljs.core.first((state_67487[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70001 = state_67487;
state_67487 = G__70001;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__ = function(state_67487){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____1.call(this,state_67487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__;
})()
;})(__69922,switch__66938__auto__,c__67107__auto___69977,G__67436_69923,G__67436_69924__$1,n__4613__auto___69921,jobs,results,process,async))
})();
var state__67109__auto__ = (function (){var statearr_67504 = f__67108__auto__();
(statearr_67504[(6)] = c__67107__auto___69977);

return statearr_67504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
});})(__69922,c__67107__auto___69977,G__67436_69923,G__67436_69924__$1,n__4613__auto___69921,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67436_69924__$1)].join('')));

}

var G__70008 = (__69922 + (1));
__69922 = G__70008;
continue;
} else {
}
break;
}

var c__67107__auto___70009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = (function (state_67527){
var state_val_67528 = (state_67527[(1)]);
if((state_val_67528 === (7))){
var inst_67523 = (state_67527[(2)]);
var state_67527__$1 = state_67527;
var statearr_67529_70010 = state_67527__$1;
(statearr_67529_70010[(2)] = inst_67523);

(statearr_67529_70010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67528 === (1))){
var state_67527__$1 = state_67527;
var statearr_67530_70011 = state_67527__$1;
(statearr_67530_70011[(2)] = null);

(statearr_67530_70011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67528 === (4))){
var inst_67508 = (state_67527[(7)]);
var inst_67508__$1 = (state_67527[(2)]);
var inst_67509 = (inst_67508__$1 == null);
var state_67527__$1 = (function (){var statearr_67531 = state_67527;
(statearr_67531[(7)] = inst_67508__$1);

return statearr_67531;
})();
if(cljs.core.truth_(inst_67509)){
var statearr_67532_70018 = state_67527__$1;
(statearr_67532_70018[(1)] = (5));

} else {
var statearr_67533_70019 = state_67527__$1;
(statearr_67533_70019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67528 === (6))){
var inst_67513 = (state_67527[(8)]);
var inst_67508 = (state_67527[(7)]);
var inst_67513__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_67514 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67515 = [inst_67508,inst_67513__$1];
var inst_67516 = (new cljs.core.PersistentVector(null,2,(5),inst_67514,inst_67515,null));
var state_67527__$1 = (function (){var statearr_67534 = state_67527;
(statearr_67534[(8)] = inst_67513__$1);

return statearr_67534;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67527__$1,(8),jobs,inst_67516);
} else {
if((state_val_67528 === (3))){
var inst_67525 = (state_67527[(2)]);
var state_67527__$1 = state_67527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67527__$1,inst_67525);
} else {
if((state_val_67528 === (2))){
var state_67527__$1 = state_67527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67527__$1,(4),from);
} else {
if((state_val_67528 === (9))){
var inst_67520 = (state_67527[(2)]);
var state_67527__$1 = (function (){var statearr_67535 = state_67527;
(statearr_67535[(9)] = inst_67520);

return statearr_67535;
})();
var statearr_67536_70020 = state_67527__$1;
(statearr_67536_70020[(2)] = null);

(statearr_67536_70020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67528 === (5))){
var inst_67511 = cljs.core.async.close_BANG_(jobs);
var state_67527__$1 = state_67527;
var statearr_67537_70021 = state_67527__$1;
(statearr_67537_70021[(2)] = inst_67511);

(statearr_67537_70021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67528 === (8))){
var inst_67513 = (state_67527[(8)]);
var inst_67518 = (state_67527[(2)]);
var state_67527__$1 = (function (){var statearr_67540 = state_67527;
(statearr_67540[(10)] = inst_67518);

return statearr_67540;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67527__$1,(9),results,inst_67513);
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
var cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____0 = (function (){
var statearr_67541 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_67541[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__);

(statearr_67541[(1)] = (1));

return statearr_67541;
});
var cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____1 = (function (state_67527){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_67527);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e67542){var ex__66942__auto__ = e67542;
var statearr_67543_70039 = state_67527;
(statearr_67543_70039[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_67527[(4)]))){
var statearr_67544_70040 = state_67527;
(statearr_67544_70040[(1)] = cljs.core.first((state_67527[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70041 = state_67527;
state_67527 = G__70041;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__ = function(state_67527){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____1.call(this,state_67527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__;
})()
})();
var state__67109__auto__ = (function (){var statearr_67545 = f__67108__auto__();
(statearr_67545[(6)] = c__67107__auto___70009);

return statearr_67545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
}));


var c__67107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = (function (state_67591){
var state_val_67592 = (state_67591[(1)]);
if((state_val_67592 === (7))){
var inst_67586 = (state_67591[(2)]);
var state_67591__$1 = state_67591;
var statearr_67596_70042 = state_67591__$1;
(statearr_67596_70042[(2)] = inst_67586);

(statearr_67596_70042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (20))){
var state_67591__$1 = state_67591;
var statearr_67597_70043 = state_67591__$1;
(statearr_67597_70043[(2)] = null);

(statearr_67597_70043[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (1))){
var state_67591__$1 = state_67591;
var statearr_67598_70044 = state_67591__$1;
(statearr_67598_70044[(2)] = null);

(statearr_67598_70044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (4))){
var inst_67548 = (state_67591[(7)]);
var inst_67548__$1 = (state_67591[(2)]);
var inst_67549 = (inst_67548__$1 == null);
var state_67591__$1 = (function (){var statearr_67602 = state_67591;
(statearr_67602[(7)] = inst_67548__$1);

return statearr_67602;
})();
if(cljs.core.truth_(inst_67549)){
var statearr_67603_70045 = state_67591__$1;
(statearr_67603_70045[(1)] = (5));

} else {
var statearr_67607_70046 = state_67591__$1;
(statearr_67607_70046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (15))){
var inst_67564 = (state_67591[(8)]);
var state_67591__$1 = state_67591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67591__$1,(18),to,inst_67564);
} else {
if((state_val_67592 === (21))){
var inst_67581 = (state_67591[(2)]);
var state_67591__$1 = state_67591;
var statearr_67608_70047 = state_67591__$1;
(statearr_67608_70047[(2)] = inst_67581);

(statearr_67608_70047[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (13))){
var inst_67583 = (state_67591[(2)]);
var state_67591__$1 = (function (){var statearr_67612 = state_67591;
(statearr_67612[(9)] = inst_67583);

return statearr_67612;
})();
var statearr_67613_70048 = state_67591__$1;
(statearr_67613_70048[(2)] = null);

(statearr_67613_70048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (6))){
var inst_67548 = (state_67591[(7)]);
var state_67591__$1 = state_67591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67591__$1,(11),inst_67548);
} else {
if((state_val_67592 === (17))){
var inst_67576 = (state_67591[(2)]);
var state_67591__$1 = state_67591;
if(cljs.core.truth_(inst_67576)){
var statearr_67614_70051 = state_67591__$1;
(statearr_67614_70051[(1)] = (19));

} else {
var statearr_67615_70052 = state_67591__$1;
(statearr_67615_70052[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (3))){
var inst_67588 = (state_67591[(2)]);
var state_67591__$1 = state_67591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67591__$1,inst_67588);
} else {
if((state_val_67592 === (12))){
var inst_67561 = (state_67591[(10)]);
var state_67591__$1 = state_67591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67591__$1,(14),inst_67561);
} else {
if((state_val_67592 === (2))){
var state_67591__$1 = state_67591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67591__$1,(4),results);
} else {
if((state_val_67592 === (19))){
var state_67591__$1 = state_67591;
var statearr_67616_70058 = state_67591__$1;
(statearr_67616_70058[(2)] = null);

(statearr_67616_70058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (11))){
var inst_67561 = (state_67591[(2)]);
var state_67591__$1 = (function (){var statearr_67617 = state_67591;
(statearr_67617[(10)] = inst_67561);

return statearr_67617;
})();
var statearr_67618_70061 = state_67591__$1;
(statearr_67618_70061[(2)] = null);

(statearr_67618_70061[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (9))){
var state_67591__$1 = state_67591;
var statearr_67620_70063 = state_67591__$1;
(statearr_67620_70063[(2)] = null);

(statearr_67620_70063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (5))){
var state_67591__$1 = state_67591;
if(cljs.core.truth_(close_QMARK_)){
var statearr_67622_70068 = state_67591__$1;
(statearr_67622_70068[(1)] = (8));

} else {
var statearr_67623_70069 = state_67591__$1;
(statearr_67623_70069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (14))){
var inst_67564 = (state_67591[(8)]);
var inst_67564__$1 = (state_67591[(2)]);
var inst_67569 = (inst_67564__$1 == null);
var inst_67570 = cljs.core.not(inst_67569);
var state_67591__$1 = (function (){var statearr_67628 = state_67591;
(statearr_67628[(8)] = inst_67564__$1);

return statearr_67628;
})();
if(inst_67570){
var statearr_67630_70072 = state_67591__$1;
(statearr_67630_70072[(1)] = (15));

} else {
var statearr_67631_70073 = state_67591__$1;
(statearr_67631_70073[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (16))){
var state_67591__$1 = state_67591;
var statearr_67635_70074 = state_67591__$1;
(statearr_67635_70074[(2)] = false);

(statearr_67635_70074[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (10))){
var inst_67556 = (state_67591[(2)]);
var state_67591__$1 = state_67591;
var statearr_67636_70076 = state_67591__$1;
(statearr_67636_70076[(2)] = inst_67556);

(statearr_67636_70076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (18))){
var inst_67573 = (state_67591[(2)]);
var state_67591__$1 = state_67591;
var statearr_67637_70077 = state_67591__$1;
(statearr_67637_70077[(2)] = inst_67573);

(statearr_67637_70077[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67592 === (8))){
var inst_67553 = cljs.core.async.close_BANG_(to);
var state_67591__$1 = state_67591;
var statearr_67638_70078 = state_67591__$1;
(statearr_67638_70078[(2)] = inst_67553);

(statearr_67638_70078[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____0 = (function (){
var statearr_67640 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_67640[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__);

(statearr_67640[(1)] = (1));

return statearr_67640;
});
var cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____1 = (function (state_67591){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_67591);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e67641){var ex__66942__auto__ = e67641;
var statearr_67642_70080 = state_67591;
(statearr_67642_70080[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_67591[(4)]))){
var statearr_67643_70081 = state_67591;
(statearr_67643_70081[(1)] = cljs.core.first((state_67591[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70082 = state_67591;
state_67591 = G__70082;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__ = function(state_67591){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____1.call(this,state_67591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__66939__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__66939__auto__;
})()
})();
var state__67109__auto__ = (function (){var statearr_67644 = f__67108__auto__();
(statearr_67644[(6)] = c__67107__auto__);

return statearr_67644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
}));

return c__67107__auto__;
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
var G__67648 = arguments.length;
switch (G__67648) {
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
var G__67651 = arguments.length;
switch (G__67651) {
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
var G__67657 = arguments.length;
switch (G__67657) {
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
var c__67107__auto___70092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = (function (state_67688){
var state_val_67689 = (state_67688[(1)]);
if((state_val_67689 === (7))){
var inst_67684 = (state_67688[(2)]);
var state_67688__$1 = state_67688;
var statearr_67690_70097 = state_67688__$1;
(statearr_67690_70097[(2)] = inst_67684);

(statearr_67690_70097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67689 === (1))){
var state_67688__$1 = state_67688;
var statearr_67692_70098 = state_67688__$1;
(statearr_67692_70098[(2)] = null);

(statearr_67692_70098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67689 === (4))){
var inst_67664 = (state_67688[(7)]);
var inst_67664__$1 = (state_67688[(2)]);
var inst_67665 = (inst_67664__$1 == null);
var state_67688__$1 = (function (){var statearr_67693 = state_67688;
(statearr_67693[(7)] = inst_67664__$1);

return statearr_67693;
})();
if(cljs.core.truth_(inst_67665)){
var statearr_67694_70109 = state_67688__$1;
(statearr_67694_70109[(1)] = (5));

} else {
var statearr_67695_70113 = state_67688__$1;
(statearr_67695_70113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67689 === (13))){
var state_67688__$1 = state_67688;
var statearr_67696_70114 = state_67688__$1;
(statearr_67696_70114[(2)] = null);

(statearr_67696_70114[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67689 === (6))){
var inst_67664 = (state_67688[(7)]);
var inst_67670 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_67664) : p.call(null,inst_67664));
var state_67688__$1 = state_67688;
if(cljs.core.truth_(inst_67670)){
var statearr_67697_70115 = state_67688__$1;
(statearr_67697_70115[(1)] = (9));

} else {
var statearr_67698_70116 = state_67688__$1;
(statearr_67698_70116[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67689 === (3))){
var inst_67686 = (state_67688[(2)]);
var state_67688__$1 = state_67688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67688__$1,inst_67686);
} else {
if((state_val_67689 === (12))){
var state_67688__$1 = state_67688;
var statearr_67700_70131 = state_67688__$1;
(statearr_67700_70131[(2)] = null);

(statearr_67700_70131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67689 === (2))){
var state_67688__$1 = state_67688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67688__$1,(4),ch);
} else {
if((state_val_67689 === (11))){
var inst_67664 = (state_67688[(7)]);
var inst_67674 = (state_67688[(2)]);
var state_67688__$1 = state_67688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67688__$1,(8),inst_67674,inst_67664);
} else {
if((state_val_67689 === (9))){
var state_67688__$1 = state_67688;
var statearr_67701_70135 = state_67688__$1;
(statearr_67701_70135[(2)] = tc);

(statearr_67701_70135[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67689 === (5))){
var inst_67667 = cljs.core.async.close_BANG_(tc);
var inst_67668 = cljs.core.async.close_BANG_(fc);
var state_67688__$1 = (function (){var statearr_67702 = state_67688;
(statearr_67702[(8)] = inst_67667);

return statearr_67702;
})();
var statearr_67703_70152 = state_67688__$1;
(statearr_67703_70152[(2)] = inst_67668);

(statearr_67703_70152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67689 === (14))){
var inst_67682 = (state_67688[(2)]);
var state_67688__$1 = state_67688;
var statearr_67704_70159 = state_67688__$1;
(statearr_67704_70159[(2)] = inst_67682);

(statearr_67704_70159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67689 === (10))){
var state_67688__$1 = state_67688;
var statearr_67705_70164 = state_67688__$1;
(statearr_67705_70164[(2)] = fc);

(statearr_67705_70164[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67689 === (8))){
var inst_67676 = (state_67688[(2)]);
var state_67688__$1 = state_67688;
if(cljs.core.truth_(inst_67676)){
var statearr_67706_70166 = state_67688__$1;
(statearr_67706_70166[(1)] = (12));

} else {
var statearr_67707_70172 = state_67688__$1;
(statearr_67707_70172[(1)] = (13));

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
var cljs$core$async$state_machine__66939__auto__ = null;
var cljs$core$async$state_machine__66939__auto____0 = (function (){
var statearr_67709 = [null,null,null,null,null,null,null,null,null];
(statearr_67709[(0)] = cljs$core$async$state_machine__66939__auto__);

(statearr_67709[(1)] = (1));

return statearr_67709;
});
var cljs$core$async$state_machine__66939__auto____1 = (function (state_67688){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_67688);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e67713){var ex__66942__auto__ = e67713;
var statearr_67714_70173 = state_67688;
(statearr_67714_70173[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_67688[(4)]))){
var statearr_67715_70174 = state_67688;
(statearr_67715_70174[(1)] = cljs.core.first((state_67688[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70177 = state_67688;
state_67688 = G__70177;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$state_machine__66939__auto__ = function(state_67688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66939__auto____1.call(this,state_67688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66939__auto____0;
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66939__auto____1;
return cljs$core$async$state_machine__66939__auto__;
})()
})();
var state__67109__auto__ = (function (){var statearr_67716 = f__67108__auto__();
(statearr_67716[(6)] = c__67107__auto___70092);

return statearr_67716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
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
var c__67107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = (function (state_67763){
var state_val_67764 = (state_67763[(1)]);
if((state_val_67764 === (7))){
var inst_67759 = (state_67763[(2)]);
var state_67763__$1 = state_67763;
var statearr_67765_70178 = state_67763__$1;
(statearr_67765_70178[(2)] = inst_67759);

(statearr_67765_70178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67764 === (1))){
var inst_67735 = init;
var inst_67738 = inst_67735;
var state_67763__$1 = (function (){var statearr_67767 = state_67763;
(statearr_67767[(7)] = inst_67738);

return statearr_67767;
})();
var statearr_67768_70179 = state_67763__$1;
(statearr_67768_70179[(2)] = null);

(statearr_67768_70179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67764 === (4))){
var inst_67745 = (state_67763[(8)]);
var inst_67745__$1 = (state_67763[(2)]);
var inst_67746 = (inst_67745__$1 == null);
var state_67763__$1 = (function (){var statearr_67770 = state_67763;
(statearr_67770[(8)] = inst_67745__$1);

return statearr_67770;
})();
if(cljs.core.truth_(inst_67746)){
var statearr_67771_70180 = state_67763__$1;
(statearr_67771_70180[(1)] = (5));

} else {
var statearr_67774_70181 = state_67763__$1;
(statearr_67774_70181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67764 === (6))){
var inst_67749 = (state_67763[(9)]);
var inst_67738 = (state_67763[(7)]);
var inst_67745 = (state_67763[(8)]);
var inst_67749__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_67738,inst_67745) : f.call(null,inst_67738,inst_67745));
var inst_67751 = cljs.core.reduced_QMARK_(inst_67749__$1);
var state_67763__$1 = (function (){var statearr_67776 = state_67763;
(statearr_67776[(9)] = inst_67749__$1);

return statearr_67776;
})();
if(inst_67751){
var statearr_67777_70182 = state_67763__$1;
(statearr_67777_70182[(1)] = (8));

} else {
var statearr_67778_70183 = state_67763__$1;
(statearr_67778_70183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67764 === (3))){
var inst_67761 = (state_67763[(2)]);
var state_67763__$1 = state_67763;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67763__$1,inst_67761);
} else {
if((state_val_67764 === (2))){
var state_67763__$1 = state_67763;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67763__$1,(4),ch);
} else {
if((state_val_67764 === (9))){
var inst_67749 = (state_67763[(9)]);
var inst_67738 = inst_67749;
var state_67763__$1 = (function (){var statearr_67781 = state_67763;
(statearr_67781[(7)] = inst_67738);

return statearr_67781;
})();
var statearr_67782_70188 = state_67763__$1;
(statearr_67782_70188[(2)] = null);

(statearr_67782_70188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67764 === (5))){
var inst_67738 = (state_67763[(7)]);
var state_67763__$1 = state_67763;
var statearr_67788_70189 = state_67763__$1;
(statearr_67788_70189[(2)] = inst_67738);

(statearr_67788_70189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67764 === (10))){
var inst_67757 = (state_67763[(2)]);
var state_67763__$1 = state_67763;
var statearr_67790_70190 = state_67763__$1;
(statearr_67790_70190[(2)] = inst_67757);

(statearr_67790_70190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67764 === (8))){
var inst_67749 = (state_67763[(9)]);
var inst_67753 = cljs.core.deref(inst_67749);
var state_67763__$1 = state_67763;
var statearr_67791_70191 = state_67763__$1;
(statearr_67791_70191[(2)] = inst_67753);

(statearr_67791_70191[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__66939__auto__ = null;
var cljs$core$async$reduce_$_state_machine__66939__auto____0 = (function (){
var statearr_67792 = [null,null,null,null,null,null,null,null,null,null];
(statearr_67792[(0)] = cljs$core$async$reduce_$_state_machine__66939__auto__);

(statearr_67792[(1)] = (1));

return statearr_67792;
});
var cljs$core$async$reduce_$_state_machine__66939__auto____1 = (function (state_67763){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_67763);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e67793){var ex__66942__auto__ = e67793;
var statearr_67794_70200 = state_67763;
(statearr_67794_70200[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_67763[(4)]))){
var statearr_67795_70201 = state_67763;
(statearr_67795_70201[(1)] = cljs.core.first((state_67763[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70203 = state_67763;
state_67763 = G__70203;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__66939__auto__ = function(state_67763){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__66939__auto____1.call(this,state_67763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__66939__auto____0;
cljs$core$async$reduce_$_state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__66939__auto____1;
return cljs$core$async$reduce_$_state_machine__66939__auto__;
})()
})();
var state__67109__auto__ = (function (){var statearr_67798 = f__67108__auto__();
(statearr_67798[(6)] = c__67107__auto__);

return statearr_67798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
}));

return c__67107__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__67107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = (function (state_67806){
var state_val_67807 = (state_67806[(1)]);
if((state_val_67807 === (1))){
var inst_67800 = cljs.core.async.reduce(f__$1,init,ch);
var state_67806__$1 = state_67806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67806__$1,(2),inst_67800);
} else {
if((state_val_67807 === (2))){
var inst_67802 = (state_67806[(2)]);
var inst_67803 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_67802) : f__$1.call(null,inst_67802));
var state_67806__$1 = state_67806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67806__$1,inst_67803);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__66939__auto__ = null;
var cljs$core$async$transduce_$_state_machine__66939__auto____0 = (function (){
var statearr_67808 = [null,null,null,null,null,null,null];
(statearr_67808[(0)] = cljs$core$async$transduce_$_state_machine__66939__auto__);

(statearr_67808[(1)] = (1));

return statearr_67808;
});
var cljs$core$async$transduce_$_state_machine__66939__auto____1 = (function (state_67806){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_67806);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e67809){var ex__66942__auto__ = e67809;
var statearr_67810_70220 = state_67806;
(statearr_67810_70220[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_67806[(4)]))){
var statearr_67812_70221 = state_67806;
(statearr_67812_70221[(1)] = cljs.core.first((state_67806[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70222 = state_67806;
state_67806 = G__70222;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__66939__auto__ = function(state_67806){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__66939__auto____1.call(this,state_67806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__66939__auto____0;
cljs$core$async$transduce_$_state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__66939__auto____1;
return cljs$core$async$transduce_$_state_machine__66939__auto__;
})()
})();
var state__67109__auto__ = (function (){var statearr_67821 = f__67108__auto__();
(statearr_67821[(6)] = c__67107__auto__);

return statearr_67821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
}));

return c__67107__auto__;
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
var G__67831 = arguments.length;
switch (G__67831) {
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
var c__67107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = (function (state_67868){
var state_val_67869 = (state_67868[(1)]);
if((state_val_67869 === (7))){
var inst_67850 = (state_67868[(2)]);
var state_67868__$1 = state_67868;
var statearr_67872_70229 = state_67868__$1;
(statearr_67872_70229[(2)] = inst_67850);

(statearr_67872_70229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67869 === (1))){
var inst_67843 = cljs.core.seq(coll);
var inst_67844 = inst_67843;
var state_67868__$1 = (function (){var statearr_67874 = state_67868;
(statearr_67874[(7)] = inst_67844);

return statearr_67874;
})();
var statearr_67875_70230 = state_67868__$1;
(statearr_67875_70230[(2)] = null);

(statearr_67875_70230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67869 === (4))){
var inst_67844 = (state_67868[(7)]);
var inst_67848 = cljs.core.first(inst_67844);
var state_67868__$1 = state_67868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67868__$1,(7),ch,inst_67848);
} else {
if((state_val_67869 === (13))){
var inst_67862 = (state_67868[(2)]);
var state_67868__$1 = state_67868;
var statearr_67898_70231 = state_67868__$1;
(statearr_67898_70231[(2)] = inst_67862);

(statearr_67898_70231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67869 === (6))){
var inst_67853 = (state_67868[(2)]);
var state_67868__$1 = state_67868;
if(cljs.core.truth_(inst_67853)){
var statearr_67899_70232 = state_67868__$1;
(statearr_67899_70232[(1)] = (8));

} else {
var statearr_67902_70233 = state_67868__$1;
(statearr_67902_70233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67869 === (3))){
var inst_67866 = (state_67868[(2)]);
var state_67868__$1 = state_67868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67868__$1,inst_67866);
} else {
if((state_val_67869 === (12))){
var state_67868__$1 = state_67868;
var statearr_67903_70234 = state_67868__$1;
(statearr_67903_70234[(2)] = null);

(statearr_67903_70234[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67869 === (2))){
var inst_67844 = (state_67868[(7)]);
var state_67868__$1 = state_67868;
if(cljs.core.truth_(inst_67844)){
var statearr_67904_70236 = state_67868__$1;
(statearr_67904_70236[(1)] = (4));

} else {
var statearr_67905_70237 = state_67868__$1;
(statearr_67905_70237[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67869 === (11))){
var inst_67859 = cljs.core.async.close_BANG_(ch);
var state_67868__$1 = state_67868;
var statearr_67907_70238 = state_67868__$1;
(statearr_67907_70238[(2)] = inst_67859);

(statearr_67907_70238[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67869 === (9))){
var state_67868__$1 = state_67868;
if(cljs.core.truth_(close_QMARK_)){
var statearr_67908_70239 = state_67868__$1;
(statearr_67908_70239[(1)] = (11));

} else {
var statearr_67914_70240 = state_67868__$1;
(statearr_67914_70240[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67869 === (5))){
var inst_67844 = (state_67868[(7)]);
var state_67868__$1 = state_67868;
var statearr_67926_70241 = state_67868__$1;
(statearr_67926_70241[(2)] = inst_67844);

(statearr_67926_70241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67869 === (10))){
var inst_67864 = (state_67868[(2)]);
var state_67868__$1 = state_67868;
var statearr_67928_70248 = state_67868__$1;
(statearr_67928_70248[(2)] = inst_67864);

(statearr_67928_70248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67869 === (8))){
var inst_67844 = (state_67868[(7)]);
var inst_67855 = cljs.core.next(inst_67844);
var inst_67844__$1 = inst_67855;
var state_67868__$1 = (function (){var statearr_67929 = state_67868;
(statearr_67929[(7)] = inst_67844__$1);

return statearr_67929;
})();
var statearr_67934_70250 = state_67868__$1;
(statearr_67934_70250[(2)] = null);

(statearr_67934_70250[(1)] = (2));


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
var cljs$core$async$state_machine__66939__auto__ = null;
var cljs$core$async$state_machine__66939__auto____0 = (function (){
var statearr_67935 = [null,null,null,null,null,null,null,null];
(statearr_67935[(0)] = cljs$core$async$state_machine__66939__auto__);

(statearr_67935[(1)] = (1));

return statearr_67935;
});
var cljs$core$async$state_machine__66939__auto____1 = (function (state_67868){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_67868);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e67936){var ex__66942__auto__ = e67936;
var statearr_67937_70253 = state_67868;
(statearr_67937_70253[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_67868[(4)]))){
var statearr_67938_70254 = state_67868;
(statearr_67938_70254[(1)] = cljs.core.first((state_67868[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70256 = state_67868;
state_67868 = G__70256;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$state_machine__66939__auto__ = function(state_67868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66939__auto____1.call(this,state_67868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66939__auto____0;
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66939__auto____1;
return cljs$core$async$state_machine__66939__auto__;
})()
})();
var state__67109__auto__ = (function (){var statearr_67939 = f__67108__auto__();
(statearr_67939[(6)] = c__67107__auto__);

return statearr_67939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
}));

return c__67107__auto__;
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
var G__67941 = arguments.length;
switch (G__67941) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_70271 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_70271(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_70272 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_70272(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_70273 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_70273(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_70283 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_70283(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async68007 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68007 = (function (ch,cs,meta68008){
this.ch = ch;
this.cs = cs;
this.meta68008 = meta68008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async68007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68009,meta68008__$1){
var self__ = this;
var _68009__$1 = this;
return (new cljs.core.async.t_cljs$core$async68007(self__.ch,self__.cs,meta68008__$1));
}));

(cljs.core.async.t_cljs$core$async68007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68009){
var self__ = this;
var _68009__$1 = this;
return self__.meta68008;
}));

(cljs.core.async.t_cljs$core$async68007.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68007.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async68007.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68007.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async68007.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async68007.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async68007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta68008","meta68008",-1338430813,null)], null);
}));

(cljs.core.async.t_cljs$core$async68007.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async68007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68007");

(cljs.core.async.t_cljs$core$async68007.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async68007");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async68007.
 */
cljs.core.async.__GT_t_cljs$core$async68007 = (function cljs$core$async$mult_$___GT_t_cljs$core$async68007(ch__$1,cs__$1,meta68008){
return (new cljs.core.async.t_cljs$core$async68007(ch__$1,cs__$1,meta68008));
});

}

return (new cljs.core.async.t_cljs$core$async68007(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__67107__auto___70300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = (function (state_68170){
var state_val_68171 = (state_68170[(1)]);
if((state_val_68171 === (7))){
var inst_68166 = (state_68170[(2)]);
var state_68170__$1 = state_68170;
var statearr_68172_70308 = state_68170__$1;
(statearr_68172_70308[(2)] = inst_68166);

(statearr_68172_70308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (20))){
var inst_68053 = (state_68170[(7)]);
var inst_68065 = cljs.core.first(inst_68053);
var inst_68066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_68065,(0),null);
var inst_68067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_68065,(1),null);
var state_68170__$1 = (function (){var statearr_68178 = state_68170;
(statearr_68178[(8)] = inst_68066);

return statearr_68178;
})();
if(cljs.core.truth_(inst_68067)){
var statearr_68179_70310 = state_68170__$1;
(statearr_68179_70310[(1)] = (22));

} else {
var statearr_68181_70311 = state_68170__$1;
(statearr_68181_70311[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (27))){
var inst_68105 = (state_68170[(9)]);
var inst_68099 = (state_68170[(10)]);
var inst_68097 = (state_68170[(11)]);
var inst_68020 = (state_68170[(12)]);
var inst_68105__$1 = cljs.core._nth(inst_68097,inst_68099);
var inst_68106 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_68105__$1,inst_68020,done);
var state_68170__$1 = (function (){var statearr_68186 = state_68170;
(statearr_68186[(9)] = inst_68105__$1);

return statearr_68186;
})();
if(cljs.core.truth_(inst_68106)){
var statearr_68187_70321 = state_68170__$1;
(statearr_68187_70321[(1)] = (30));

} else {
var statearr_68188_70322 = state_68170__$1;
(statearr_68188_70322[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (1))){
var state_68170__$1 = state_68170;
var statearr_68189_70333 = state_68170__$1;
(statearr_68189_70333[(2)] = null);

(statearr_68189_70333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (24))){
var inst_68053 = (state_68170[(7)]);
var inst_68072 = (state_68170[(2)]);
var inst_68073 = cljs.core.next(inst_68053);
var inst_68029 = inst_68073;
var inst_68030 = null;
var inst_68031 = (0);
var inst_68032 = (0);
var state_68170__$1 = (function (){var statearr_68193 = state_68170;
(statearr_68193[(13)] = inst_68072);

(statearr_68193[(14)] = inst_68029);

(statearr_68193[(15)] = inst_68030);

(statearr_68193[(16)] = inst_68032);

(statearr_68193[(17)] = inst_68031);

return statearr_68193;
})();
var statearr_68194_70339 = state_68170__$1;
(statearr_68194_70339[(2)] = null);

(statearr_68194_70339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (39))){
var state_68170__$1 = state_68170;
var statearr_68198_70348 = state_68170__$1;
(statearr_68198_70348[(2)] = null);

(statearr_68198_70348[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (4))){
var inst_68020 = (state_68170[(12)]);
var inst_68020__$1 = (state_68170[(2)]);
var inst_68021 = (inst_68020__$1 == null);
var state_68170__$1 = (function (){var statearr_68205 = state_68170;
(statearr_68205[(12)] = inst_68020__$1);

return statearr_68205;
})();
if(cljs.core.truth_(inst_68021)){
var statearr_68206_70349 = state_68170__$1;
(statearr_68206_70349[(1)] = (5));

} else {
var statearr_68207_70350 = state_68170__$1;
(statearr_68207_70350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (15))){
var inst_68029 = (state_68170[(14)]);
var inst_68030 = (state_68170[(15)]);
var inst_68032 = (state_68170[(16)]);
var inst_68031 = (state_68170[(17)]);
var inst_68047 = (state_68170[(2)]);
var inst_68048 = (inst_68032 + (1));
var tmp68195 = inst_68029;
var tmp68196 = inst_68030;
var tmp68197 = inst_68031;
var inst_68029__$1 = tmp68195;
var inst_68030__$1 = tmp68196;
var inst_68031__$1 = tmp68197;
var inst_68032__$1 = inst_68048;
var state_68170__$1 = (function (){var statearr_68214 = state_68170;
(statearr_68214[(18)] = inst_68047);

(statearr_68214[(14)] = inst_68029__$1);

(statearr_68214[(15)] = inst_68030__$1);

(statearr_68214[(16)] = inst_68032__$1);

(statearr_68214[(17)] = inst_68031__$1);

return statearr_68214;
})();
var statearr_68215_70354 = state_68170__$1;
(statearr_68215_70354[(2)] = null);

(statearr_68215_70354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (21))){
var inst_68076 = (state_68170[(2)]);
var state_68170__$1 = state_68170;
var statearr_68220_70360 = state_68170__$1;
(statearr_68220_70360[(2)] = inst_68076);

(statearr_68220_70360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (31))){
var inst_68105 = (state_68170[(9)]);
var inst_68109 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_68105);
var state_68170__$1 = state_68170;
var statearr_68224_70361 = state_68170__$1;
(statearr_68224_70361[(2)] = inst_68109);

(statearr_68224_70361[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (32))){
var inst_68096 = (state_68170[(19)]);
var inst_68098 = (state_68170[(20)]);
var inst_68099 = (state_68170[(10)]);
var inst_68097 = (state_68170[(11)]);
var inst_68111 = (state_68170[(2)]);
var inst_68112 = (inst_68099 + (1));
var tmp68217 = inst_68096;
var tmp68218 = inst_68098;
var tmp68219 = inst_68097;
var inst_68096__$1 = tmp68217;
var inst_68097__$1 = tmp68219;
var inst_68098__$1 = tmp68218;
var inst_68099__$1 = inst_68112;
var state_68170__$1 = (function (){var statearr_68228 = state_68170;
(statearr_68228[(19)] = inst_68096__$1);

(statearr_68228[(21)] = inst_68111);

(statearr_68228[(20)] = inst_68098__$1);

(statearr_68228[(10)] = inst_68099__$1);

(statearr_68228[(11)] = inst_68097__$1);

return statearr_68228;
})();
var statearr_68232_70367 = state_68170__$1;
(statearr_68232_70367[(2)] = null);

(statearr_68232_70367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (40))){
var inst_68135 = (state_68170[(22)]);
var inst_68139 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_68135);
var state_68170__$1 = state_68170;
var statearr_68235_70372 = state_68170__$1;
(statearr_68235_70372[(2)] = inst_68139);

(statearr_68235_70372[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (33))){
var inst_68122 = (state_68170[(23)]);
var inst_68124 = cljs.core.chunked_seq_QMARK_(inst_68122);
var state_68170__$1 = state_68170;
if(inst_68124){
var statearr_68241_70377 = state_68170__$1;
(statearr_68241_70377[(1)] = (36));

} else {
var statearr_68242_70381 = state_68170__$1;
(statearr_68242_70381[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (13))){
var inst_68041 = (state_68170[(24)]);
var inst_68044 = cljs.core.async.close_BANG_(inst_68041);
var state_68170__$1 = state_68170;
var statearr_68243_70382 = state_68170__$1;
(statearr_68243_70382[(2)] = inst_68044);

(statearr_68243_70382[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (22))){
var inst_68066 = (state_68170[(8)]);
var inst_68069 = cljs.core.async.close_BANG_(inst_68066);
var state_68170__$1 = state_68170;
var statearr_68244_70384 = state_68170__$1;
(statearr_68244_70384[(2)] = inst_68069);

(statearr_68244_70384[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (36))){
var inst_68122 = (state_68170[(23)]);
var inst_68130 = cljs.core.chunk_first(inst_68122);
var inst_68131 = cljs.core.chunk_rest(inst_68122);
var inst_68132 = cljs.core.count(inst_68130);
var inst_68096 = inst_68131;
var inst_68097 = inst_68130;
var inst_68098 = inst_68132;
var inst_68099 = (0);
var state_68170__$1 = (function (){var statearr_68248 = state_68170;
(statearr_68248[(19)] = inst_68096);

(statearr_68248[(20)] = inst_68098);

(statearr_68248[(10)] = inst_68099);

(statearr_68248[(11)] = inst_68097);

return statearr_68248;
})();
var statearr_68250_70399 = state_68170__$1;
(statearr_68250_70399[(2)] = null);

(statearr_68250_70399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (41))){
var inst_68122 = (state_68170[(23)]);
var inst_68141 = (state_68170[(2)]);
var inst_68142 = cljs.core.next(inst_68122);
var inst_68096 = inst_68142;
var inst_68097 = null;
var inst_68098 = (0);
var inst_68099 = (0);
var state_68170__$1 = (function (){var statearr_68251 = state_68170;
(statearr_68251[(19)] = inst_68096);

(statearr_68251[(25)] = inst_68141);

(statearr_68251[(20)] = inst_68098);

(statearr_68251[(10)] = inst_68099);

(statearr_68251[(11)] = inst_68097);

return statearr_68251;
})();
var statearr_68256_70404 = state_68170__$1;
(statearr_68256_70404[(2)] = null);

(statearr_68256_70404[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (43))){
var state_68170__$1 = state_68170;
var statearr_68258_70407 = state_68170__$1;
(statearr_68258_70407[(2)] = null);

(statearr_68258_70407[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (29))){
var inst_68150 = (state_68170[(2)]);
var state_68170__$1 = state_68170;
var statearr_68260_70409 = state_68170__$1;
(statearr_68260_70409[(2)] = inst_68150);

(statearr_68260_70409[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (44))){
var inst_68163 = (state_68170[(2)]);
var state_68170__$1 = (function (){var statearr_68261 = state_68170;
(statearr_68261[(26)] = inst_68163);

return statearr_68261;
})();
var statearr_68262_70412 = state_68170__$1;
(statearr_68262_70412[(2)] = null);

(statearr_68262_70412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (6))){
var inst_68086 = (state_68170[(27)]);
var inst_68085 = cljs.core.deref(cs);
var inst_68086__$1 = cljs.core.keys(inst_68085);
var inst_68087 = cljs.core.count(inst_68086__$1);
var inst_68088 = cljs.core.reset_BANG_(dctr,inst_68087);
var inst_68094 = cljs.core.seq(inst_68086__$1);
var inst_68096 = inst_68094;
var inst_68097 = null;
var inst_68098 = (0);
var inst_68099 = (0);
var state_68170__$1 = (function (){var statearr_68263 = state_68170;
(statearr_68263[(19)] = inst_68096);

(statearr_68263[(28)] = inst_68088);

(statearr_68263[(20)] = inst_68098);

(statearr_68263[(10)] = inst_68099);

(statearr_68263[(11)] = inst_68097);

(statearr_68263[(27)] = inst_68086__$1);

return statearr_68263;
})();
var statearr_68270_70430 = state_68170__$1;
(statearr_68270_70430[(2)] = null);

(statearr_68270_70430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (28))){
var inst_68096 = (state_68170[(19)]);
var inst_68122 = (state_68170[(23)]);
var inst_68122__$1 = cljs.core.seq(inst_68096);
var state_68170__$1 = (function (){var statearr_68280 = state_68170;
(statearr_68280[(23)] = inst_68122__$1);

return statearr_68280;
})();
if(inst_68122__$1){
var statearr_68281_70432 = state_68170__$1;
(statearr_68281_70432[(1)] = (33));

} else {
var statearr_68282_70433 = state_68170__$1;
(statearr_68282_70433[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (25))){
var inst_68098 = (state_68170[(20)]);
var inst_68099 = (state_68170[(10)]);
var inst_68102 = (inst_68099 < inst_68098);
var inst_68103 = inst_68102;
var state_68170__$1 = state_68170;
if(cljs.core.truth_(inst_68103)){
var statearr_68289_70434 = state_68170__$1;
(statearr_68289_70434[(1)] = (27));

} else {
var statearr_68290_70435 = state_68170__$1;
(statearr_68290_70435[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (34))){
var state_68170__$1 = state_68170;
var statearr_68292_70436 = state_68170__$1;
(statearr_68292_70436[(2)] = null);

(statearr_68292_70436[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (17))){
var state_68170__$1 = state_68170;
var statearr_68293_70443 = state_68170__$1;
(statearr_68293_70443[(2)] = null);

(statearr_68293_70443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (3))){
var inst_68168 = (state_68170[(2)]);
var state_68170__$1 = state_68170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68170__$1,inst_68168);
} else {
if((state_val_68171 === (12))){
var inst_68081 = (state_68170[(2)]);
var state_68170__$1 = state_68170;
var statearr_68294_70444 = state_68170__$1;
(statearr_68294_70444[(2)] = inst_68081);

(statearr_68294_70444[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (2))){
var state_68170__$1 = state_68170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68170__$1,(4),ch);
} else {
if((state_val_68171 === (23))){
var state_68170__$1 = state_68170;
var statearr_68300_70450 = state_68170__$1;
(statearr_68300_70450[(2)] = null);

(statearr_68300_70450[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (35))){
var inst_68148 = (state_68170[(2)]);
var state_68170__$1 = state_68170;
var statearr_68302_70452 = state_68170__$1;
(statearr_68302_70452[(2)] = inst_68148);

(statearr_68302_70452[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (19))){
var inst_68053 = (state_68170[(7)]);
var inst_68057 = cljs.core.chunk_first(inst_68053);
var inst_68058 = cljs.core.chunk_rest(inst_68053);
var inst_68059 = cljs.core.count(inst_68057);
var inst_68029 = inst_68058;
var inst_68030 = inst_68057;
var inst_68031 = inst_68059;
var inst_68032 = (0);
var state_68170__$1 = (function (){var statearr_68303 = state_68170;
(statearr_68303[(14)] = inst_68029);

(statearr_68303[(15)] = inst_68030);

(statearr_68303[(16)] = inst_68032);

(statearr_68303[(17)] = inst_68031);

return statearr_68303;
})();
var statearr_68304_70468 = state_68170__$1;
(statearr_68304_70468[(2)] = null);

(statearr_68304_70468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (11))){
var inst_68029 = (state_68170[(14)]);
var inst_68053 = (state_68170[(7)]);
var inst_68053__$1 = cljs.core.seq(inst_68029);
var state_68170__$1 = (function (){var statearr_68305 = state_68170;
(statearr_68305[(7)] = inst_68053__$1);

return statearr_68305;
})();
if(inst_68053__$1){
var statearr_68306_70469 = state_68170__$1;
(statearr_68306_70469[(1)] = (16));

} else {
var statearr_68307_70471 = state_68170__$1;
(statearr_68307_70471[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (9))){
var inst_68083 = (state_68170[(2)]);
var state_68170__$1 = state_68170;
var statearr_68308_70475 = state_68170__$1;
(statearr_68308_70475[(2)] = inst_68083);

(statearr_68308_70475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (5))){
var inst_68027 = cljs.core.deref(cs);
var inst_68028 = cljs.core.seq(inst_68027);
var inst_68029 = inst_68028;
var inst_68030 = null;
var inst_68031 = (0);
var inst_68032 = (0);
var state_68170__$1 = (function (){var statearr_68310 = state_68170;
(statearr_68310[(14)] = inst_68029);

(statearr_68310[(15)] = inst_68030);

(statearr_68310[(16)] = inst_68032);

(statearr_68310[(17)] = inst_68031);

return statearr_68310;
})();
var statearr_68311_70482 = state_68170__$1;
(statearr_68311_70482[(2)] = null);

(statearr_68311_70482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (14))){
var state_68170__$1 = state_68170;
var statearr_68312_70489 = state_68170__$1;
(statearr_68312_70489[(2)] = null);

(statearr_68312_70489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (45))){
var inst_68156 = (state_68170[(2)]);
var state_68170__$1 = state_68170;
var statearr_68313_70496 = state_68170__$1;
(statearr_68313_70496[(2)] = inst_68156);

(statearr_68313_70496[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (26))){
var inst_68086 = (state_68170[(27)]);
var inst_68152 = (state_68170[(2)]);
var inst_68153 = cljs.core.seq(inst_68086);
var state_68170__$1 = (function (){var statearr_68314 = state_68170;
(statearr_68314[(29)] = inst_68152);

return statearr_68314;
})();
if(inst_68153){
var statearr_68315_70497 = state_68170__$1;
(statearr_68315_70497[(1)] = (42));

} else {
var statearr_68316_70498 = state_68170__$1;
(statearr_68316_70498[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (16))){
var inst_68053 = (state_68170[(7)]);
var inst_68055 = cljs.core.chunked_seq_QMARK_(inst_68053);
var state_68170__$1 = state_68170;
if(inst_68055){
var statearr_68319_70500 = state_68170__$1;
(statearr_68319_70500[(1)] = (19));

} else {
var statearr_68320_70501 = state_68170__$1;
(statearr_68320_70501[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (38))){
var inst_68145 = (state_68170[(2)]);
var state_68170__$1 = state_68170;
var statearr_68321_70504 = state_68170__$1;
(statearr_68321_70504[(2)] = inst_68145);

(statearr_68321_70504[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (30))){
var state_68170__$1 = state_68170;
var statearr_68322_70505 = state_68170__$1;
(statearr_68322_70505[(2)] = null);

(statearr_68322_70505[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (10))){
var inst_68030 = (state_68170[(15)]);
var inst_68032 = (state_68170[(16)]);
var inst_68040 = cljs.core._nth(inst_68030,inst_68032);
var inst_68041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_68040,(0),null);
var inst_68042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_68040,(1),null);
var state_68170__$1 = (function (){var statearr_68324 = state_68170;
(statearr_68324[(24)] = inst_68041);

return statearr_68324;
})();
if(cljs.core.truth_(inst_68042)){
var statearr_68327_70506 = state_68170__$1;
(statearr_68327_70506[(1)] = (13));

} else {
var statearr_68328_70507 = state_68170__$1;
(statearr_68328_70507[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (18))){
var inst_68079 = (state_68170[(2)]);
var state_68170__$1 = state_68170;
var statearr_68329_70508 = state_68170__$1;
(statearr_68329_70508[(2)] = inst_68079);

(statearr_68329_70508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (42))){
var state_68170__$1 = state_68170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68170__$1,(45),dchan);
} else {
if((state_val_68171 === (37))){
var inst_68122 = (state_68170[(23)]);
var inst_68135 = (state_68170[(22)]);
var inst_68020 = (state_68170[(12)]);
var inst_68135__$1 = cljs.core.first(inst_68122);
var inst_68136 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_68135__$1,inst_68020,done);
var state_68170__$1 = (function (){var statearr_68330 = state_68170;
(statearr_68330[(22)] = inst_68135__$1);

return statearr_68330;
})();
if(cljs.core.truth_(inst_68136)){
var statearr_68332_70521 = state_68170__$1;
(statearr_68332_70521[(1)] = (39));

} else {
var statearr_68333_70522 = state_68170__$1;
(statearr_68333_70522[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68171 === (8))){
var inst_68032 = (state_68170[(16)]);
var inst_68031 = (state_68170[(17)]);
var inst_68034 = (inst_68032 < inst_68031);
var inst_68035 = inst_68034;
var state_68170__$1 = state_68170;
if(cljs.core.truth_(inst_68035)){
var statearr_68334_70523 = state_68170__$1;
(statearr_68334_70523[(1)] = (10));

} else {
var statearr_68335_70525 = state_68170__$1;
(statearr_68335_70525[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__66939__auto__ = null;
var cljs$core$async$mult_$_state_machine__66939__auto____0 = (function (){
var statearr_68344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68344[(0)] = cljs$core$async$mult_$_state_machine__66939__auto__);

(statearr_68344[(1)] = (1));

return statearr_68344;
});
var cljs$core$async$mult_$_state_machine__66939__auto____1 = (function (state_68170){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_68170);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e68346){var ex__66942__auto__ = e68346;
var statearr_68347_70528 = state_68170;
(statearr_68347_70528[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_68170[(4)]))){
var statearr_68352_70530 = state_68170;
(statearr_68352_70530[(1)] = cljs.core.first((state_68170[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70531 = state_68170;
state_68170 = G__70531;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__66939__auto__ = function(state_68170){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__66939__auto____1.call(this,state_68170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__66939__auto____0;
cljs$core$async$mult_$_state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__66939__auto____1;
return cljs$core$async$mult_$_state_machine__66939__auto__;
})()
})();
var state__67109__auto__ = (function (){var statearr_68361 = f__67108__auto__();
(statearr_68361[(6)] = c__67107__auto___70300);

return statearr_68361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
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
var G__68363 = arguments.length;
switch (G__68363) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_70545 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_70545(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_70550 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_70550(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_70557 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_70557(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_70565 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_70565(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_70570 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_70570(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___70572 = arguments.length;
var i__4737__auto___70573 = (0);
while(true){
if((i__4737__auto___70573 < len__4736__auto___70572)){
args__4742__auto__.push((arguments[i__4737__auto___70573]));

var G__70574 = (i__4737__auto___70573 + (1));
i__4737__auto___70573 = G__70574;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__68373){
var map__68374 = p__68373;
var map__68374__$1 = (((((!((map__68374 == null))))?(((((map__68374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68374):map__68374);
var opts = map__68374__$1;
var statearr_68376_70578 = state;
(statearr_68376_70578[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_68380_70579 = state;
(statearr_68380_70579[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_68381_70580 = state;
(statearr_68381_70580[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq68368){
var G__68369 = cljs.core.first(seq68368);
var seq68368__$1 = cljs.core.next(seq68368);
var G__68370 = cljs.core.first(seq68368__$1);
var seq68368__$2 = cljs.core.next(seq68368__$1);
var G__68371 = cljs.core.first(seq68368__$2);
var seq68368__$3 = cljs.core.next(seq68368__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68369,G__68370,G__68371,seq68368__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async68403 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68403 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta68404){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta68404 = meta68404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async68403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68405,meta68404__$1){
var self__ = this;
var _68405__$1 = this;
return (new cljs.core.async.t_cljs$core$async68403(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta68404__$1));
}));

(cljs.core.async.t_cljs$core$async68403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68405){
var self__ = this;
var _68405__$1 = this;
return self__.meta68404;
}));

(cljs.core.async.t_cljs$core$async68403.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68403.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async68403.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68403.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async68403.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async68403.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async68403.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async68403.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async68403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta68404","meta68404",2039066308,null)], null);
}));

(cljs.core.async.t_cljs$core$async68403.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async68403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68403");

(cljs.core.async.t_cljs$core$async68403.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async68403");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async68403.
 */
cljs.core.async.__GT_t_cljs$core$async68403 = (function cljs$core$async$mix_$___GT_t_cljs$core$async68403(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta68404){
return (new cljs.core.async.t_cljs$core$async68403(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta68404));
});

}

return (new cljs.core.async.t_cljs$core$async68403(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__67107__auto___70598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = (function (state_68527){
var state_val_68528 = (state_68527[(1)]);
if((state_val_68528 === (7))){
var inst_68437 = (state_68527[(2)]);
var state_68527__$1 = state_68527;
var statearr_68529_70601 = state_68527__$1;
(statearr_68529_70601[(2)] = inst_68437);

(statearr_68529_70601[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (20))){
var inst_68450 = (state_68527[(7)]);
var state_68527__$1 = state_68527;
var statearr_68530_70603 = state_68527__$1;
(statearr_68530_70603[(2)] = inst_68450);

(statearr_68530_70603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (27))){
var state_68527__$1 = state_68527;
var statearr_68532_70607 = state_68527__$1;
(statearr_68532_70607[(2)] = null);

(statearr_68532_70607[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (1))){
var inst_68424 = (state_68527[(8)]);
var inst_68424__$1 = calc_state();
var inst_68426 = (inst_68424__$1 == null);
var inst_68427 = cljs.core.not(inst_68426);
var state_68527__$1 = (function (){var statearr_68534 = state_68527;
(statearr_68534[(8)] = inst_68424__$1);

return statearr_68534;
})();
if(inst_68427){
var statearr_68535_70613 = state_68527__$1;
(statearr_68535_70613[(1)] = (2));

} else {
var statearr_68536_70615 = state_68527__$1;
(statearr_68536_70615[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (24))){
var inst_68474 = (state_68527[(9)]);
var inst_68483 = (state_68527[(10)]);
var inst_68497 = (state_68527[(11)]);
var inst_68497__$1 = (inst_68474.cljs$core$IFn$_invoke$arity$1 ? inst_68474.cljs$core$IFn$_invoke$arity$1(inst_68483) : inst_68474.call(null,inst_68483));
var state_68527__$1 = (function (){var statearr_68538 = state_68527;
(statearr_68538[(11)] = inst_68497__$1);

return statearr_68538;
})();
if(cljs.core.truth_(inst_68497__$1)){
var statearr_68539_70616 = state_68527__$1;
(statearr_68539_70616[(1)] = (29));

} else {
var statearr_68540_70617 = state_68527__$1;
(statearr_68540_70617[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (4))){
var inst_68440 = (state_68527[(2)]);
var state_68527__$1 = state_68527;
if(cljs.core.truth_(inst_68440)){
var statearr_68541_70619 = state_68527__$1;
(statearr_68541_70619[(1)] = (8));

} else {
var statearr_68542_70620 = state_68527__$1;
(statearr_68542_70620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (15))){
var inst_68468 = (state_68527[(2)]);
var state_68527__$1 = state_68527;
if(cljs.core.truth_(inst_68468)){
var statearr_68543_70625 = state_68527__$1;
(statearr_68543_70625[(1)] = (19));

} else {
var statearr_68544_70626 = state_68527__$1;
(statearr_68544_70626[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (21))){
var inst_68473 = (state_68527[(12)]);
var inst_68473__$1 = (state_68527[(2)]);
var inst_68474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_68473__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_68475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_68473__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_68476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_68473__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_68527__$1 = (function (){var statearr_68547 = state_68527;
(statearr_68547[(9)] = inst_68474);

(statearr_68547[(12)] = inst_68473__$1);

(statearr_68547[(13)] = inst_68475);

return statearr_68547;
})();
return cljs.core.async.ioc_alts_BANG_(state_68527__$1,(22),inst_68476);
} else {
if((state_val_68528 === (31))){
var inst_68505 = (state_68527[(2)]);
var state_68527__$1 = state_68527;
if(cljs.core.truth_(inst_68505)){
var statearr_68548_70640 = state_68527__$1;
(statearr_68548_70640[(1)] = (32));

} else {
var statearr_68549_70641 = state_68527__$1;
(statearr_68549_70641[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (32))){
var inst_68482 = (state_68527[(14)]);
var state_68527__$1 = state_68527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68527__$1,(35),out,inst_68482);
} else {
if((state_val_68528 === (33))){
var inst_68473 = (state_68527[(12)]);
var inst_68450 = inst_68473;
var state_68527__$1 = (function (){var statearr_68550 = state_68527;
(statearr_68550[(7)] = inst_68450);

return statearr_68550;
})();
var statearr_68551_70647 = state_68527__$1;
(statearr_68551_70647[(2)] = null);

(statearr_68551_70647[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (13))){
var inst_68450 = (state_68527[(7)]);
var inst_68457 = inst_68450.cljs$lang$protocol_mask$partition0$;
var inst_68458 = (inst_68457 & (64));
var inst_68459 = inst_68450.cljs$core$ISeq$;
var inst_68460 = (cljs.core.PROTOCOL_SENTINEL === inst_68459);
var inst_68461 = ((inst_68458) || (inst_68460));
var state_68527__$1 = state_68527;
if(cljs.core.truth_(inst_68461)){
var statearr_68555_70656 = state_68527__$1;
(statearr_68555_70656[(1)] = (16));

} else {
var statearr_68557_70657 = state_68527__$1;
(statearr_68557_70657[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (22))){
var inst_68482 = (state_68527[(14)]);
var inst_68483 = (state_68527[(10)]);
var inst_68481 = (state_68527[(2)]);
var inst_68482__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_68481,(0),null);
var inst_68483__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_68481,(1),null);
var inst_68484 = (inst_68482__$1 == null);
var inst_68485 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_68483__$1,change);
var inst_68486 = ((inst_68484) || (inst_68485));
var state_68527__$1 = (function (){var statearr_68558 = state_68527;
(statearr_68558[(14)] = inst_68482__$1);

(statearr_68558[(10)] = inst_68483__$1);

return statearr_68558;
})();
if(cljs.core.truth_(inst_68486)){
var statearr_68559_70658 = state_68527__$1;
(statearr_68559_70658[(1)] = (23));

} else {
var statearr_68560_70663 = state_68527__$1;
(statearr_68560_70663[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (36))){
var inst_68473 = (state_68527[(12)]);
var inst_68450 = inst_68473;
var state_68527__$1 = (function (){var statearr_68561 = state_68527;
(statearr_68561[(7)] = inst_68450);

return statearr_68561;
})();
var statearr_68562_70668 = state_68527__$1;
(statearr_68562_70668[(2)] = null);

(statearr_68562_70668[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (29))){
var inst_68497 = (state_68527[(11)]);
var state_68527__$1 = state_68527;
var statearr_68563_70673 = state_68527__$1;
(statearr_68563_70673[(2)] = inst_68497);

(statearr_68563_70673[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (6))){
var state_68527__$1 = state_68527;
var statearr_68564_70678 = state_68527__$1;
(statearr_68564_70678[(2)] = false);

(statearr_68564_70678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (28))){
var inst_68493 = (state_68527[(2)]);
var inst_68494 = calc_state();
var inst_68450 = inst_68494;
var state_68527__$1 = (function (){var statearr_68573 = state_68527;
(statearr_68573[(7)] = inst_68450);

(statearr_68573[(15)] = inst_68493);

return statearr_68573;
})();
var statearr_68574_70688 = state_68527__$1;
(statearr_68574_70688[(2)] = null);

(statearr_68574_70688[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (25))){
var inst_68519 = (state_68527[(2)]);
var state_68527__$1 = state_68527;
var statearr_68579_70693 = state_68527__$1;
(statearr_68579_70693[(2)] = inst_68519);

(statearr_68579_70693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (34))){
var inst_68517 = (state_68527[(2)]);
var state_68527__$1 = state_68527;
var statearr_68587_70694 = state_68527__$1;
(statearr_68587_70694[(2)] = inst_68517);

(statearr_68587_70694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (17))){
var state_68527__$1 = state_68527;
var statearr_68591_70699 = state_68527__$1;
(statearr_68591_70699[(2)] = false);

(statearr_68591_70699[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (3))){
var state_68527__$1 = state_68527;
var statearr_68596_70703 = state_68527__$1;
(statearr_68596_70703[(2)] = false);

(statearr_68596_70703[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (12))){
var inst_68521 = (state_68527[(2)]);
var state_68527__$1 = state_68527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68527__$1,inst_68521);
} else {
if((state_val_68528 === (2))){
var inst_68424 = (state_68527[(8)]);
var inst_68429 = inst_68424.cljs$lang$protocol_mask$partition0$;
var inst_68430 = (inst_68429 & (64));
var inst_68431 = inst_68424.cljs$core$ISeq$;
var inst_68432 = (cljs.core.PROTOCOL_SENTINEL === inst_68431);
var inst_68433 = ((inst_68430) || (inst_68432));
var state_68527__$1 = state_68527;
if(cljs.core.truth_(inst_68433)){
var statearr_68603_70707 = state_68527__$1;
(statearr_68603_70707[(1)] = (5));

} else {
var statearr_68608_70708 = state_68527__$1;
(statearr_68608_70708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (23))){
var inst_68482 = (state_68527[(14)]);
var inst_68488 = (inst_68482 == null);
var state_68527__$1 = state_68527;
if(cljs.core.truth_(inst_68488)){
var statearr_68616_70709 = state_68527__$1;
(statearr_68616_70709[(1)] = (26));

} else {
var statearr_68617_70710 = state_68527__$1;
(statearr_68617_70710[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (35))){
var inst_68508 = (state_68527[(2)]);
var state_68527__$1 = state_68527;
if(cljs.core.truth_(inst_68508)){
var statearr_68619_70716 = state_68527__$1;
(statearr_68619_70716[(1)] = (36));

} else {
var statearr_68624_70720 = state_68527__$1;
(statearr_68624_70720[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (19))){
var inst_68450 = (state_68527[(7)]);
var inst_68470 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_68450);
var state_68527__$1 = state_68527;
var statearr_68625_70721 = state_68527__$1;
(statearr_68625_70721[(2)] = inst_68470);

(statearr_68625_70721[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (11))){
var inst_68450 = (state_68527[(7)]);
var inst_68454 = (inst_68450 == null);
var inst_68455 = cljs.core.not(inst_68454);
var state_68527__$1 = state_68527;
if(inst_68455){
var statearr_68627_70722 = state_68527__$1;
(statearr_68627_70722[(1)] = (13));

} else {
var statearr_68628_70726 = state_68527__$1;
(statearr_68628_70726[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (9))){
var inst_68424 = (state_68527[(8)]);
var state_68527__$1 = state_68527;
var statearr_68630_70727 = state_68527__$1;
(statearr_68630_70727[(2)] = inst_68424);

(statearr_68630_70727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (5))){
var state_68527__$1 = state_68527;
var statearr_68631_70728 = state_68527__$1;
(statearr_68631_70728[(2)] = true);

(statearr_68631_70728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (14))){
var state_68527__$1 = state_68527;
var statearr_68632_70729 = state_68527__$1;
(statearr_68632_70729[(2)] = false);

(statearr_68632_70729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (26))){
var inst_68483 = (state_68527[(10)]);
var inst_68490 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_68483);
var state_68527__$1 = state_68527;
var statearr_68633_70730 = state_68527__$1;
(statearr_68633_70730[(2)] = inst_68490);

(statearr_68633_70730[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (16))){
var state_68527__$1 = state_68527;
var statearr_68635_70731 = state_68527__$1;
(statearr_68635_70731[(2)] = true);

(statearr_68635_70731[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (38))){
var inst_68513 = (state_68527[(2)]);
var state_68527__$1 = state_68527;
var statearr_68640_70732 = state_68527__$1;
(statearr_68640_70732[(2)] = inst_68513);

(statearr_68640_70732[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (30))){
var inst_68474 = (state_68527[(9)]);
var inst_68483 = (state_68527[(10)]);
var inst_68475 = (state_68527[(13)]);
var inst_68500 = cljs.core.empty_QMARK_(inst_68474);
var inst_68501 = (inst_68475.cljs$core$IFn$_invoke$arity$1 ? inst_68475.cljs$core$IFn$_invoke$arity$1(inst_68483) : inst_68475.call(null,inst_68483));
var inst_68502 = cljs.core.not(inst_68501);
var inst_68503 = ((inst_68500) && (inst_68502));
var state_68527__$1 = state_68527;
var statearr_68641_70736 = state_68527__$1;
(statearr_68641_70736[(2)] = inst_68503);

(statearr_68641_70736[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (10))){
var inst_68424 = (state_68527[(8)]);
var inst_68445 = (state_68527[(2)]);
var inst_68447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_68445,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_68448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_68445,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_68449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_68445,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_68450 = inst_68424;
var state_68527__$1 = (function (){var statearr_68642 = state_68527;
(statearr_68642[(7)] = inst_68450);

(statearr_68642[(16)] = inst_68447);

(statearr_68642[(17)] = inst_68449);

(statearr_68642[(18)] = inst_68448);

return statearr_68642;
})();
var statearr_68643_70740 = state_68527__$1;
(statearr_68643_70740[(2)] = null);

(statearr_68643_70740[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (18))){
var inst_68465 = (state_68527[(2)]);
var state_68527__$1 = state_68527;
var statearr_68644_70741 = state_68527__$1;
(statearr_68644_70741[(2)] = inst_68465);

(statearr_68644_70741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (37))){
var state_68527__$1 = state_68527;
var statearr_68646_70742 = state_68527__$1;
(statearr_68646_70742[(2)] = null);

(statearr_68646_70742[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68528 === (8))){
var inst_68424 = (state_68527[(8)]);
var inst_68442 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_68424);
var state_68527__$1 = state_68527;
var statearr_68647_70743 = state_68527__$1;
(statearr_68647_70743[(2)] = inst_68442);

(statearr_68647_70743[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__66939__auto__ = null;
var cljs$core$async$mix_$_state_machine__66939__auto____0 = (function (){
var statearr_68648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68648[(0)] = cljs$core$async$mix_$_state_machine__66939__auto__);

(statearr_68648[(1)] = (1));

return statearr_68648;
});
var cljs$core$async$mix_$_state_machine__66939__auto____1 = (function (state_68527){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_68527);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e68649){var ex__66942__auto__ = e68649;
var statearr_68650_70754 = state_68527;
(statearr_68650_70754[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_68527[(4)]))){
var statearr_68651_70759 = state_68527;
(statearr_68651_70759[(1)] = cljs.core.first((state_68527[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70766 = state_68527;
state_68527 = G__70766;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__66939__auto__ = function(state_68527){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__66939__auto____1.call(this,state_68527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__66939__auto____0;
cljs$core$async$mix_$_state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__66939__auto____1;
return cljs$core$async$mix_$_state_machine__66939__auto__;
})()
})();
var state__67109__auto__ = (function (){var statearr_68653 = f__67108__auto__();
(statearr_68653[(6)] = c__67107__auto___70598);

return statearr_68653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_70791 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_70791(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_70810 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_70810(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_70838 = (function() {
var G__70839 = null;
var G__70839__1 = (function (p){
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
var G__70839__2 = (function (p,v){
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
G__70839 = function(p,v){
switch(arguments.length){
case 1:
return G__70839__1.call(this,p);
case 2:
return G__70839__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__70839.cljs$core$IFn$_invoke$arity$1 = G__70839__1;
G__70839.cljs$core$IFn$_invoke$arity$2 = G__70839__2;
return G__70839;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__68670 = arguments.length;
switch (G__68670) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_70838(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_70838(p,v);
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
var G__68677 = arguments.length;
switch (G__68677) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__68673_SHARP_){
if(cljs.core.truth_((p1__68673_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__68673_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__68673_SHARP_.call(null,topic)))){
return p1__68673_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__68673_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async68681 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68681 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta68682){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta68682 = meta68682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async68681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68683,meta68682__$1){
var self__ = this;
var _68683__$1 = this;
return (new cljs.core.async.t_cljs$core$async68681(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta68682__$1));
}));

(cljs.core.async.t_cljs$core$async68681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68683){
var self__ = this;
var _68683__$1 = this;
return self__.meta68682;
}));

(cljs.core.async.t_cljs$core$async68681.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async68681.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async68681.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async68681.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async68681.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async68681.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async68681.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta68682","meta68682",-737258306,null)], null);
}));

(cljs.core.async.t_cljs$core$async68681.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async68681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68681");

(cljs.core.async.t_cljs$core$async68681.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async68681");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async68681.
 */
cljs.core.async.__GT_t_cljs$core$async68681 = (function cljs$core$async$__GT_t_cljs$core$async68681(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta68682){
return (new cljs.core.async.t_cljs$core$async68681(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta68682));
});

}

return (new cljs.core.async.t_cljs$core$async68681(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__67107__auto___70882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = (function (state_68761){
var state_val_68762 = (state_68761[(1)]);
if((state_val_68762 === (7))){
var inst_68757 = (state_68761[(2)]);
var state_68761__$1 = state_68761;
var statearr_68763_70887 = state_68761__$1;
(statearr_68763_70887[(2)] = inst_68757);

(statearr_68763_70887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (20))){
var state_68761__$1 = state_68761;
var statearr_68764_70888 = state_68761__$1;
(statearr_68764_70888[(2)] = null);

(statearr_68764_70888[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (1))){
var state_68761__$1 = state_68761;
var statearr_68765_70889 = state_68761__$1;
(statearr_68765_70889[(2)] = null);

(statearr_68765_70889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (24))){
var inst_68739 = (state_68761[(7)]);
var inst_68749 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_68739);
var state_68761__$1 = state_68761;
var statearr_68767_70890 = state_68761__$1;
(statearr_68767_70890[(2)] = inst_68749);

(statearr_68767_70890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (4))){
var inst_68689 = (state_68761[(8)]);
var inst_68689__$1 = (state_68761[(2)]);
var inst_68690 = (inst_68689__$1 == null);
var state_68761__$1 = (function (){var statearr_68768 = state_68761;
(statearr_68768[(8)] = inst_68689__$1);

return statearr_68768;
})();
if(cljs.core.truth_(inst_68690)){
var statearr_68769_70894 = state_68761__$1;
(statearr_68769_70894[(1)] = (5));

} else {
var statearr_68770_70899 = state_68761__$1;
(statearr_68770_70899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (15))){
var inst_68733 = (state_68761[(2)]);
var state_68761__$1 = state_68761;
var statearr_68771_70905 = state_68761__$1;
(statearr_68771_70905[(2)] = inst_68733);

(statearr_68771_70905[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (21))){
var inst_68754 = (state_68761[(2)]);
var state_68761__$1 = (function (){var statearr_68772 = state_68761;
(statearr_68772[(9)] = inst_68754);

return statearr_68772;
})();
var statearr_68773_70912 = state_68761__$1;
(statearr_68773_70912[(2)] = null);

(statearr_68773_70912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (13))){
var inst_68714 = (state_68761[(10)]);
var inst_68716 = cljs.core.chunked_seq_QMARK_(inst_68714);
var state_68761__$1 = state_68761;
if(inst_68716){
var statearr_68775_70929 = state_68761__$1;
(statearr_68775_70929[(1)] = (16));

} else {
var statearr_68776_70930 = state_68761__$1;
(statearr_68776_70930[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (22))){
var inst_68746 = (state_68761[(2)]);
var state_68761__$1 = state_68761;
if(cljs.core.truth_(inst_68746)){
var statearr_68777_70937 = state_68761__$1;
(statearr_68777_70937[(1)] = (23));

} else {
var statearr_68779_70938 = state_68761__$1;
(statearr_68779_70938[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (6))){
var inst_68741 = (state_68761[(11)]);
var inst_68739 = (state_68761[(7)]);
var inst_68689 = (state_68761[(8)]);
var inst_68739__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_68689) : topic_fn.call(null,inst_68689));
var inst_68740 = cljs.core.deref(mults);
var inst_68741__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_68740,inst_68739__$1);
var state_68761__$1 = (function (){var statearr_68781 = state_68761;
(statearr_68781[(11)] = inst_68741__$1);

(statearr_68781[(7)] = inst_68739__$1);

return statearr_68781;
})();
if(cljs.core.truth_(inst_68741__$1)){
var statearr_68782_70972 = state_68761__$1;
(statearr_68782_70972[(1)] = (19));

} else {
var statearr_68783_70973 = state_68761__$1;
(statearr_68783_70973[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (25))){
var inst_68751 = (state_68761[(2)]);
var state_68761__$1 = state_68761;
var statearr_68784_70982 = state_68761__$1;
(statearr_68784_70982[(2)] = inst_68751);

(statearr_68784_70982[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (17))){
var inst_68714 = (state_68761[(10)]);
var inst_68724 = cljs.core.first(inst_68714);
var inst_68725 = cljs.core.async.muxch_STAR_(inst_68724);
var inst_68726 = cljs.core.async.close_BANG_(inst_68725);
var inst_68727 = cljs.core.next(inst_68714);
var inst_68700 = inst_68727;
var inst_68701 = null;
var inst_68702 = (0);
var inst_68703 = (0);
var state_68761__$1 = (function (){var statearr_68785 = state_68761;
(statearr_68785[(12)] = inst_68703);

(statearr_68785[(13)] = inst_68726);

(statearr_68785[(14)] = inst_68702);

(statearr_68785[(15)] = inst_68701);

(statearr_68785[(16)] = inst_68700);

return statearr_68785;
})();
var statearr_68786_70989 = state_68761__$1;
(statearr_68786_70989[(2)] = null);

(statearr_68786_70989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (3))){
var inst_68759 = (state_68761[(2)]);
var state_68761__$1 = state_68761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68761__$1,inst_68759);
} else {
if((state_val_68762 === (12))){
var inst_68735 = (state_68761[(2)]);
var state_68761__$1 = state_68761;
var statearr_68787_70996 = state_68761__$1;
(statearr_68787_70996[(2)] = inst_68735);

(statearr_68787_70996[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (2))){
var state_68761__$1 = state_68761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68761__$1,(4),ch);
} else {
if((state_val_68762 === (23))){
var state_68761__$1 = state_68761;
var statearr_68789_71002 = state_68761__$1;
(statearr_68789_71002[(2)] = null);

(statearr_68789_71002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (19))){
var inst_68741 = (state_68761[(11)]);
var inst_68689 = (state_68761[(8)]);
var inst_68744 = cljs.core.async.muxch_STAR_(inst_68741);
var state_68761__$1 = state_68761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68761__$1,(22),inst_68744,inst_68689);
} else {
if((state_val_68762 === (11))){
var inst_68700 = (state_68761[(16)]);
var inst_68714 = (state_68761[(10)]);
var inst_68714__$1 = cljs.core.seq(inst_68700);
var state_68761__$1 = (function (){var statearr_68790 = state_68761;
(statearr_68790[(10)] = inst_68714__$1);

return statearr_68790;
})();
if(inst_68714__$1){
var statearr_68791_71004 = state_68761__$1;
(statearr_68791_71004[(1)] = (13));

} else {
var statearr_68792_71005 = state_68761__$1;
(statearr_68792_71005[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (9))){
var inst_68737 = (state_68761[(2)]);
var state_68761__$1 = state_68761;
var statearr_68794_71011 = state_68761__$1;
(statearr_68794_71011[(2)] = inst_68737);

(statearr_68794_71011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (5))){
var inst_68697 = cljs.core.deref(mults);
var inst_68698 = cljs.core.vals(inst_68697);
var inst_68699 = cljs.core.seq(inst_68698);
var inst_68700 = inst_68699;
var inst_68701 = null;
var inst_68702 = (0);
var inst_68703 = (0);
var state_68761__$1 = (function (){var statearr_68795 = state_68761;
(statearr_68795[(12)] = inst_68703);

(statearr_68795[(14)] = inst_68702);

(statearr_68795[(15)] = inst_68701);

(statearr_68795[(16)] = inst_68700);

return statearr_68795;
})();
var statearr_68796_71019 = state_68761__$1;
(statearr_68796_71019[(2)] = null);

(statearr_68796_71019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (14))){
var state_68761__$1 = state_68761;
var statearr_68802_71020 = state_68761__$1;
(statearr_68802_71020[(2)] = null);

(statearr_68802_71020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (16))){
var inst_68714 = (state_68761[(10)]);
var inst_68718 = cljs.core.chunk_first(inst_68714);
var inst_68719 = cljs.core.chunk_rest(inst_68714);
var inst_68720 = cljs.core.count(inst_68718);
var inst_68700 = inst_68719;
var inst_68701 = inst_68718;
var inst_68702 = inst_68720;
var inst_68703 = (0);
var state_68761__$1 = (function (){var statearr_68803 = state_68761;
(statearr_68803[(12)] = inst_68703);

(statearr_68803[(14)] = inst_68702);

(statearr_68803[(15)] = inst_68701);

(statearr_68803[(16)] = inst_68700);

return statearr_68803;
})();
var statearr_68804_71031 = state_68761__$1;
(statearr_68804_71031[(2)] = null);

(statearr_68804_71031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (10))){
var inst_68703 = (state_68761[(12)]);
var inst_68702 = (state_68761[(14)]);
var inst_68701 = (state_68761[(15)]);
var inst_68700 = (state_68761[(16)]);
var inst_68708 = cljs.core._nth(inst_68701,inst_68703);
var inst_68709 = cljs.core.async.muxch_STAR_(inst_68708);
var inst_68710 = cljs.core.async.close_BANG_(inst_68709);
var inst_68711 = (inst_68703 + (1));
var tmp68798 = inst_68702;
var tmp68799 = inst_68701;
var tmp68800 = inst_68700;
var inst_68700__$1 = tmp68800;
var inst_68701__$1 = tmp68799;
var inst_68702__$1 = tmp68798;
var inst_68703__$1 = inst_68711;
var state_68761__$1 = (function (){var statearr_68806 = state_68761;
(statearr_68806[(12)] = inst_68703__$1);

(statearr_68806[(17)] = inst_68710);

(statearr_68806[(14)] = inst_68702__$1);

(statearr_68806[(15)] = inst_68701__$1);

(statearr_68806[(16)] = inst_68700__$1);

return statearr_68806;
})();
var statearr_68807_71033 = state_68761__$1;
(statearr_68807_71033[(2)] = null);

(statearr_68807_71033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (18))){
var inst_68730 = (state_68761[(2)]);
var state_68761__$1 = state_68761;
var statearr_68809_71035 = state_68761__$1;
(statearr_68809_71035[(2)] = inst_68730);

(statearr_68809_71035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68762 === (8))){
var inst_68703 = (state_68761[(12)]);
var inst_68702 = (state_68761[(14)]);
var inst_68705 = (inst_68703 < inst_68702);
var inst_68706 = inst_68705;
var state_68761__$1 = state_68761;
if(cljs.core.truth_(inst_68706)){
var statearr_68810_71036 = state_68761__$1;
(statearr_68810_71036[(1)] = (10));

} else {
var statearr_68812_71037 = state_68761__$1;
(statearr_68812_71037[(1)] = (11));

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
var cljs$core$async$state_machine__66939__auto__ = null;
var cljs$core$async$state_machine__66939__auto____0 = (function (){
var statearr_68813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68813[(0)] = cljs$core$async$state_machine__66939__auto__);

(statearr_68813[(1)] = (1));

return statearr_68813;
});
var cljs$core$async$state_machine__66939__auto____1 = (function (state_68761){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_68761);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e68814){var ex__66942__auto__ = e68814;
var statearr_68815_71038 = state_68761;
(statearr_68815_71038[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_68761[(4)]))){
var statearr_68817_71040 = state_68761;
(statearr_68817_71040[(1)] = cljs.core.first((state_68761[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71043 = state_68761;
state_68761 = G__71043;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$state_machine__66939__auto__ = function(state_68761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66939__auto____1.call(this,state_68761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66939__auto____0;
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66939__auto____1;
return cljs$core$async$state_machine__66939__auto__;
})()
})();
var state__67109__auto__ = (function (){var statearr_68820 = f__67108__auto__();
(statearr_68820[(6)] = c__67107__auto___70882);

return statearr_68820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
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
var G__68822 = arguments.length;
switch (G__68822) {
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
var G__68828 = arguments.length;
switch (G__68828) {
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
var G__68832 = arguments.length;
switch (G__68832) {
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
var c__67107__auto___71070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = (function (state_68878){
var state_val_68879 = (state_68878[(1)]);
if((state_val_68879 === (7))){
var state_68878__$1 = state_68878;
var statearr_68880_71072 = state_68878__$1;
(statearr_68880_71072[(2)] = null);

(statearr_68880_71072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68879 === (1))){
var state_68878__$1 = state_68878;
var statearr_68881_71079 = state_68878__$1;
(statearr_68881_71079[(2)] = null);

(statearr_68881_71079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68879 === (4))){
var inst_68836 = (state_68878[(7)]);
var inst_68837 = (state_68878[(8)]);
var inst_68839 = (inst_68837 < inst_68836);
var state_68878__$1 = state_68878;
if(cljs.core.truth_(inst_68839)){
var statearr_68882_71080 = state_68878__$1;
(statearr_68882_71080[(1)] = (6));

} else {
var statearr_68883_71081 = state_68878__$1;
(statearr_68883_71081[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68879 === (15))){
var inst_68864 = (state_68878[(9)]);
var inst_68869 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_68864);
var state_68878__$1 = state_68878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68878__$1,(17),out,inst_68869);
} else {
if((state_val_68879 === (13))){
var inst_68864 = (state_68878[(9)]);
var inst_68864__$1 = (state_68878[(2)]);
var inst_68865 = cljs.core.some(cljs.core.nil_QMARK_,inst_68864__$1);
var state_68878__$1 = (function (){var statearr_68884 = state_68878;
(statearr_68884[(9)] = inst_68864__$1);

return statearr_68884;
})();
if(cljs.core.truth_(inst_68865)){
var statearr_68885_71092 = state_68878__$1;
(statearr_68885_71092[(1)] = (14));

} else {
var statearr_68886_71094 = state_68878__$1;
(statearr_68886_71094[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68879 === (6))){
var state_68878__$1 = state_68878;
var statearr_68887_71096 = state_68878__$1;
(statearr_68887_71096[(2)] = null);

(statearr_68887_71096[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68879 === (17))){
var inst_68871 = (state_68878[(2)]);
var state_68878__$1 = (function (){var statearr_68891 = state_68878;
(statearr_68891[(10)] = inst_68871);

return statearr_68891;
})();
var statearr_68892_71097 = state_68878__$1;
(statearr_68892_71097[(2)] = null);

(statearr_68892_71097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68879 === (3))){
var inst_68876 = (state_68878[(2)]);
var state_68878__$1 = state_68878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68878__$1,inst_68876);
} else {
if((state_val_68879 === (12))){
var _ = (function (){var statearr_68894 = state_68878;
(statearr_68894[(4)] = cljs.core.rest((state_68878[(4)])));

return statearr_68894;
})();
var state_68878__$1 = state_68878;
var ex68888 = (state_68878__$1[(2)]);
var statearr_68895_71102 = state_68878__$1;
(statearr_68895_71102[(5)] = ex68888);


if((ex68888 instanceof Object)){
var statearr_68896_71105 = state_68878__$1;
(statearr_68896_71105[(1)] = (11));

(statearr_68896_71105[(5)] = null);

} else {
throw ex68888;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68879 === (2))){
var inst_68835 = cljs.core.reset_BANG_(dctr,cnt);
var inst_68836 = cnt;
var inst_68837 = (0);
var state_68878__$1 = (function (){var statearr_68897 = state_68878;
(statearr_68897[(11)] = inst_68835);

(statearr_68897[(7)] = inst_68836);

(statearr_68897[(8)] = inst_68837);

return statearr_68897;
})();
var statearr_68900_71109 = state_68878__$1;
(statearr_68900_71109[(2)] = null);

(statearr_68900_71109[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68879 === (11))){
var inst_68843 = (state_68878[(2)]);
var inst_68844 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_68878__$1 = (function (){var statearr_68902 = state_68878;
(statearr_68902[(12)] = inst_68843);

return statearr_68902;
})();
var statearr_68903_71110 = state_68878__$1;
(statearr_68903_71110[(2)] = inst_68844);

(statearr_68903_71110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68879 === (9))){
var inst_68837 = (state_68878[(8)]);
var _ = (function (){var statearr_68904 = state_68878;
(statearr_68904[(4)] = cljs.core.cons((12),(state_68878[(4)])));

return statearr_68904;
})();
var inst_68850 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_68837) : chs__$1.call(null,inst_68837));
var inst_68851 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_68837) : done.call(null,inst_68837));
var inst_68852 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_68850,inst_68851);
var ___$1 = (function (){var statearr_68908 = state_68878;
(statearr_68908[(4)] = cljs.core.rest((state_68878[(4)])));

return statearr_68908;
})();
var state_68878__$1 = state_68878;
var statearr_68909_71120 = state_68878__$1;
(statearr_68909_71120[(2)] = inst_68852);

(statearr_68909_71120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68879 === (5))){
var inst_68862 = (state_68878[(2)]);
var state_68878__$1 = (function (){var statearr_68910 = state_68878;
(statearr_68910[(13)] = inst_68862);

return statearr_68910;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68878__$1,(13),dchan);
} else {
if((state_val_68879 === (14))){
var inst_68867 = cljs.core.async.close_BANG_(out);
var state_68878__$1 = state_68878;
var statearr_68912_71145 = state_68878__$1;
(statearr_68912_71145[(2)] = inst_68867);

(statearr_68912_71145[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68879 === (16))){
var inst_68874 = (state_68878[(2)]);
var state_68878__$1 = state_68878;
var statearr_68913_71151 = state_68878__$1;
(statearr_68913_71151[(2)] = inst_68874);

(statearr_68913_71151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68879 === (10))){
var inst_68837 = (state_68878[(8)]);
var inst_68855 = (state_68878[(2)]);
var inst_68856 = (inst_68837 + (1));
var inst_68837__$1 = inst_68856;
var state_68878__$1 = (function (){var statearr_68914 = state_68878;
(statearr_68914[(14)] = inst_68855);

(statearr_68914[(8)] = inst_68837__$1);

return statearr_68914;
})();
var statearr_68915_71166 = state_68878__$1;
(statearr_68915_71166[(2)] = null);

(statearr_68915_71166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68879 === (8))){
var inst_68860 = (state_68878[(2)]);
var state_68878__$1 = state_68878;
var statearr_68916_71172 = state_68878__$1;
(statearr_68916_71172[(2)] = inst_68860);

(statearr_68916_71172[(1)] = (5));


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
var cljs$core$async$state_machine__66939__auto__ = null;
var cljs$core$async$state_machine__66939__auto____0 = (function (){
var statearr_68918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68918[(0)] = cljs$core$async$state_machine__66939__auto__);

(statearr_68918[(1)] = (1));

return statearr_68918;
});
var cljs$core$async$state_machine__66939__auto____1 = (function (state_68878){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_68878);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e68919){var ex__66942__auto__ = e68919;
var statearr_68921_71186 = state_68878;
(statearr_68921_71186[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_68878[(4)]))){
var statearr_68922_71188 = state_68878;
(statearr_68922_71188[(1)] = cljs.core.first((state_68878[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71197 = state_68878;
state_68878 = G__71197;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$state_machine__66939__auto__ = function(state_68878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66939__auto____1.call(this,state_68878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66939__auto____0;
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66939__auto____1;
return cljs$core$async$state_machine__66939__auto__;
})()
})();
var state__67109__auto__ = (function (){var statearr_68923 = f__67108__auto__();
(statearr_68923[(6)] = c__67107__auto___71070);

return statearr_68923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
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
var G__68927 = arguments.length;
switch (G__68927) {
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
var c__67107__auto___71231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = (function (state_68964){
var state_val_68968 = (state_68964[(1)]);
if((state_val_68968 === (7))){
var inst_68943 = (state_68964[(7)]);
var inst_68944 = (state_68964[(8)]);
var inst_68943__$1 = (state_68964[(2)]);
var inst_68944__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_68943__$1,(0),null);
var inst_68945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_68943__$1,(1),null);
var inst_68946 = (inst_68944__$1 == null);
var state_68964__$1 = (function (){var statearr_68969 = state_68964;
(statearr_68969[(7)] = inst_68943__$1);

(statearr_68969[(9)] = inst_68945);

(statearr_68969[(8)] = inst_68944__$1);

return statearr_68969;
})();
if(cljs.core.truth_(inst_68946)){
var statearr_68970_71253 = state_68964__$1;
(statearr_68970_71253[(1)] = (8));

} else {
var statearr_68971_71264 = state_68964__$1;
(statearr_68971_71264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68968 === (1))){
var inst_68932 = cljs.core.vec(chs);
var inst_68933 = inst_68932;
var state_68964__$1 = (function (){var statearr_68972 = state_68964;
(statearr_68972[(10)] = inst_68933);

return statearr_68972;
})();
var statearr_68975_71265 = state_68964__$1;
(statearr_68975_71265[(2)] = null);

(statearr_68975_71265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68968 === (4))){
var inst_68933 = (state_68964[(10)]);
var state_68964__$1 = state_68964;
return cljs.core.async.ioc_alts_BANG_(state_68964__$1,(7),inst_68933);
} else {
if((state_val_68968 === (6))){
var inst_68960 = (state_68964[(2)]);
var state_68964__$1 = state_68964;
var statearr_68979_71282 = state_68964__$1;
(statearr_68979_71282[(2)] = inst_68960);

(statearr_68979_71282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68968 === (3))){
var inst_68962 = (state_68964[(2)]);
var state_68964__$1 = state_68964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68964__$1,inst_68962);
} else {
if((state_val_68968 === (2))){
var inst_68933 = (state_68964[(10)]);
var inst_68935 = cljs.core.count(inst_68933);
var inst_68936 = (inst_68935 > (0));
var state_68964__$1 = state_68964;
if(cljs.core.truth_(inst_68936)){
var statearr_68984_71286 = state_68964__$1;
(statearr_68984_71286[(1)] = (4));

} else {
var statearr_68985_71289 = state_68964__$1;
(statearr_68985_71289[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68968 === (11))){
var inst_68933 = (state_68964[(10)]);
var inst_68953 = (state_68964[(2)]);
var tmp68981 = inst_68933;
var inst_68933__$1 = tmp68981;
var state_68964__$1 = (function (){var statearr_68987 = state_68964;
(statearr_68987[(11)] = inst_68953);

(statearr_68987[(10)] = inst_68933__$1);

return statearr_68987;
})();
var statearr_68988_71300 = state_68964__$1;
(statearr_68988_71300[(2)] = null);

(statearr_68988_71300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68968 === (9))){
var inst_68944 = (state_68964[(8)]);
var state_68964__$1 = state_68964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68964__$1,(11),out,inst_68944);
} else {
if((state_val_68968 === (5))){
var inst_68958 = cljs.core.async.close_BANG_(out);
var state_68964__$1 = state_68964;
var statearr_68991_71301 = state_68964__$1;
(statearr_68991_71301[(2)] = inst_68958);

(statearr_68991_71301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68968 === (10))){
var inst_68956 = (state_68964[(2)]);
var state_68964__$1 = state_68964;
var statearr_68994_71306 = state_68964__$1;
(statearr_68994_71306[(2)] = inst_68956);

(statearr_68994_71306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68968 === (8))){
var inst_68943 = (state_68964[(7)]);
var inst_68945 = (state_68964[(9)]);
var inst_68933 = (state_68964[(10)]);
var inst_68944 = (state_68964[(8)]);
var inst_68948 = (function (){var cs = inst_68933;
var vec__68939 = inst_68943;
var v = inst_68944;
var c = inst_68945;
return (function (p1__68925_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__68925_SHARP_);
});
})();
var inst_68949 = cljs.core.filterv(inst_68948,inst_68933);
var inst_68933__$1 = inst_68949;
var state_68964__$1 = (function (){var statearr_68996 = state_68964;
(statearr_68996[(10)] = inst_68933__$1);

return statearr_68996;
})();
var statearr_68997_71325 = state_68964__$1;
(statearr_68997_71325[(2)] = null);

(statearr_68997_71325[(1)] = (2));


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
var cljs$core$async$state_machine__66939__auto__ = null;
var cljs$core$async$state_machine__66939__auto____0 = (function (){
var statearr_68999 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68999[(0)] = cljs$core$async$state_machine__66939__auto__);

(statearr_68999[(1)] = (1));

return statearr_68999;
});
var cljs$core$async$state_machine__66939__auto____1 = (function (state_68964){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_68964);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e69002){var ex__66942__auto__ = e69002;
var statearr_69003_71395 = state_68964;
(statearr_69003_71395[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_68964[(4)]))){
var statearr_69004_71404 = state_68964;
(statearr_69004_71404[(1)] = cljs.core.first((state_68964[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71418 = state_68964;
state_68964 = G__71418;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$state_machine__66939__auto__ = function(state_68964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66939__auto____1.call(this,state_68964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66939__auto____0;
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66939__auto____1;
return cljs$core$async$state_machine__66939__auto__;
})()
})();
var state__67109__auto__ = (function (){var statearr_69007 = f__67108__auto__();
(statearr_69007[(6)] = c__67107__auto___71231);

return statearr_69007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
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
var G__69013 = arguments.length;
switch (G__69013) {
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
var c__67107__auto___71451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = (function (state_69038){
var state_val_69039 = (state_69038[(1)]);
if((state_val_69039 === (7))){
var inst_69020 = (state_69038[(7)]);
var inst_69020__$1 = (state_69038[(2)]);
var inst_69021 = (inst_69020__$1 == null);
var inst_69022 = cljs.core.not(inst_69021);
var state_69038__$1 = (function (){var statearr_69040 = state_69038;
(statearr_69040[(7)] = inst_69020__$1);

return statearr_69040;
})();
if(inst_69022){
var statearr_69041_71456 = state_69038__$1;
(statearr_69041_71456[(1)] = (8));

} else {
var statearr_69042_71457 = state_69038__$1;
(statearr_69042_71457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69039 === (1))){
var inst_69015 = (0);
var state_69038__$1 = (function (){var statearr_69045 = state_69038;
(statearr_69045[(8)] = inst_69015);

return statearr_69045;
})();
var statearr_69046_71459 = state_69038__$1;
(statearr_69046_71459[(2)] = null);

(statearr_69046_71459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69039 === (4))){
var state_69038__$1 = state_69038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69038__$1,(7),ch);
} else {
if((state_val_69039 === (6))){
var inst_69033 = (state_69038[(2)]);
var state_69038__$1 = state_69038;
var statearr_69048_71470 = state_69038__$1;
(statearr_69048_71470[(2)] = inst_69033);

(statearr_69048_71470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69039 === (3))){
var inst_69035 = (state_69038[(2)]);
var inst_69036 = cljs.core.async.close_BANG_(out);
var state_69038__$1 = (function (){var statearr_69049 = state_69038;
(statearr_69049[(9)] = inst_69035);

return statearr_69049;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69038__$1,inst_69036);
} else {
if((state_val_69039 === (2))){
var inst_69015 = (state_69038[(8)]);
var inst_69017 = (inst_69015 < n);
var state_69038__$1 = state_69038;
if(cljs.core.truth_(inst_69017)){
var statearr_69051_71488 = state_69038__$1;
(statearr_69051_71488[(1)] = (4));

} else {
var statearr_69056_71490 = state_69038__$1;
(statearr_69056_71490[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69039 === (11))){
var inst_69015 = (state_69038[(8)]);
var inst_69025 = (state_69038[(2)]);
var inst_69026 = (inst_69015 + (1));
var inst_69015__$1 = inst_69026;
var state_69038__$1 = (function (){var statearr_69057 = state_69038;
(statearr_69057[(8)] = inst_69015__$1);

(statearr_69057[(10)] = inst_69025);

return statearr_69057;
})();
var statearr_69058_71510 = state_69038__$1;
(statearr_69058_71510[(2)] = null);

(statearr_69058_71510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69039 === (9))){
var state_69038__$1 = state_69038;
var statearr_69062_71514 = state_69038__$1;
(statearr_69062_71514[(2)] = null);

(statearr_69062_71514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69039 === (5))){
var state_69038__$1 = state_69038;
var statearr_69063_71522 = state_69038__$1;
(statearr_69063_71522[(2)] = null);

(statearr_69063_71522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69039 === (10))){
var inst_69030 = (state_69038[(2)]);
var state_69038__$1 = state_69038;
var statearr_69064_71535 = state_69038__$1;
(statearr_69064_71535[(2)] = inst_69030);

(statearr_69064_71535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69039 === (8))){
var inst_69020 = (state_69038[(7)]);
var state_69038__$1 = state_69038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69038__$1,(11),out,inst_69020);
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
var cljs$core$async$state_machine__66939__auto__ = null;
var cljs$core$async$state_machine__66939__auto____0 = (function (){
var statearr_69066 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69066[(0)] = cljs$core$async$state_machine__66939__auto__);

(statearr_69066[(1)] = (1));

return statearr_69066;
});
var cljs$core$async$state_machine__66939__auto____1 = (function (state_69038){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_69038);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e69067){var ex__66942__auto__ = e69067;
var statearr_69070_71548 = state_69038;
(statearr_69070_71548[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_69038[(4)]))){
var statearr_69071_71551 = state_69038;
(statearr_69071_71551[(1)] = cljs.core.first((state_69038[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71554 = state_69038;
state_69038 = G__71554;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$state_machine__66939__auto__ = function(state_69038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66939__auto____1.call(this,state_69038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66939__auto____0;
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66939__auto____1;
return cljs$core$async$state_machine__66939__auto__;
})()
})();
var state__67109__auto__ = (function (){var statearr_69073 = f__67108__auto__();
(statearr_69073[(6)] = c__67107__auto___71451);

return statearr_69073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69082 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69082 = (function (f,ch,meta69083){
this.f = f;
this.ch = ch;
this.meta69083 = meta69083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69084,meta69083__$1){
var self__ = this;
var _69084__$1 = this;
return (new cljs.core.async.t_cljs$core$async69082(self__.f,self__.ch,meta69083__$1));
}));

(cljs.core.async.t_cljs$core$async69082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69084){
var self__ = this;
var _69084__$1 = this;
return self__.meta69083;
}));

(cljs.core.async.t_cljs$core$async69082.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69082.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async69082.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async69082.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69082.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69095 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69095 = (function (f,ch,meta69083,_,fn1,meta69096){
this.f = f;
this.ch = ch;
this.meta69083 = meta69083;
this._ = _;
this.fn1 = fn1;
this.meta69096 = meta69096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69097,meta69096__$1){
var self__ = this;
var _69097__$1 = this;
return (new cljs.core.async.t_cljs$core$async69095(self__.f,self__.ch,self__.meta69083,self__._,self__.fn1,meta69096__$1));
}));

(cljs.core.async.t_cljs$core$async69095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69097){
var self__ = this;
var _69097__$1 = this;
return self__.meta69096;
}));

(cljs.core.async.t_cljs$core$async69095.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69095.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async69095.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69095.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__69076_SHARP_){
var G__69110 = (((p1__69076_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__69076_SHARP_) : self__.f.call(null,p1__69076_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__69110) : f1.call(null,G__69110));
});
}));

(cljs.core.async.t_cljs$core$async69095.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69083","meta69083",-255975678,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async69082","cljs.core.async/t_cljs$core$async69082",225645549,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta69096","meta69096",-147319939,null)], null);
}));

(cljs.core.async.t_cljs$core$async69095.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69095");

(cljs.core.async.t_cljs$core$async69095.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async69095");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69095.
 */
cljs.core.async.__GT_t_cljs$core$async69095 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async69095(f__$1,ch__$1,meta69083__$1,___$2,fn1__$1,meta69096){
return (new cljs.core.async.t_cljs$core$async69095(f__$1,ch__$1,meta69083__$1,___$2,fn1__$1,meta69096));
});

}

return (new cljs.core.async.t_cljs$core$async69095(self__.f,self__.ch,self__.meta69083,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__69123 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__69123) : self__.f.call(null,G__69123));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async69082.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69082.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async69082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69083","meta69083",-255975678,null)], null);
}));

(cljs.core.async.t_cljs$core$async69082.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69082");

(cljs.core.async.t_cljs$core$async69082.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async69082");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69082.
 */
cljs.core.async.__GT_t_cljs$core$async69082 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async69082(f__$1,ch__$1,meta69083){
return (new cljs.core.async.t_cljs$core$async69082(f__$1,ch__$1,meta69083));
});

}

return (new cljs.core.async.t_cljs$core$async69082(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69134 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69134 = (function (f,ch,meta69135){
this.f = f;
this.ch = ch;
this.meta69135 = meta69135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69136,meta69135__$1){
var self__ = this;
var _69136__$1 = this;
return (new cljs.core.async.t_cljs$core$async69134(self__.f,self__.ch,meta69135__$1));
}));

(cljs.core.async.t_cljs$core$async69134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69136){
var self__ = this;
var _69136__$1 = this;
return self__.meta69135;
}));

(cljs.core.async.t_cljs$core$async69134.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69134.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async69134.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69134.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async69134.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69134.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async69134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69135","meta69135",1895624878,null)], null);
}));

(cljs.core.async.t_cljs$core$async69134.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69134");

(cljs.core.async.t_cljs$core$async69134.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async69134");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69134.
 */
cljs.core.async.__GT_t_cljs$core$async69134 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async69134(f__$1,ch__$1,meta69135){
return (new cljs.core.async.t_cljs$core$async69134(f__$1,ch__$1,meta69135));
});

}

return (new cljs.core.async.t_cljs$core$async69134(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69161 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69161 = (function (p,ch,meta69162){
this.p = p;
this.ch = ch;
this.meta69162 = meta69162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69163,meta69162__$1){
var self__ = this;
var _69163__$1 = this;
return (new cljs.core.async.t_cljs$core$async69161(self__.p,self__.ch,meta69162__$1));
}));

(cljs.core.async.t_cljs$core$async69161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69163){
var self__ = this;
var _69163__$1 = this;
return self__.meta69162;
}));

(cljs.core.async.t_cljs$core$async69161.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69161.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async69161.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async69161.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69161.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async69161.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69161.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async69161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69162","meta69162",-288693447,null)], null);
}));

(cljs.core.async.t_cljs$core$async69161.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69161");

(cljs.core.async.t_cljs$core$async69161.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async69161");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69161.
 */
cljs.core.async.__GT_t_cljs$core$async69161 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async69161(p__$1,ch__$1,meta69162){
return (new cljs.core.async.t_cljs$core$async69161(p__$1,ch__$1,meta69162));
});

}

return (new cljs.core.async.t_cljs$core$async69161(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__69191 = arguments.length;
switch (G__69191) {
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
var c__67107__auto___71662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = (function (state_69220){
var state_val_69221 = (state_69220[(1)]);
if((state_val_69221 === (7))){
var inst_69215 = (state_69220[(2)]);
var state_69220__$1 = state_69220;
var statearr_69226_71667 = state_69220__$1;
(statearr_69226_71667[(2)] = inst_69215);

(statearr_69226_71667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69221 === (1))){
var state_69220__$1 = state_69220;
var statearr_69229_71671 = state_69220__$1;
(statearr_69229_71671[(2)] = null);

(statearr_69229_71671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69221 === (4))){
var inst_69201 = (state_69220[(7)]);
var inst_69201__$1 = (state_69220[(2)]);
var inst_69202 = (inst_69201__$1 == null);
var state_69220__$1 = (function (){var statearr_69231 = state_69220;
(statearr_69231[(7)] = inst_69201__$1);

return statearr_69231;
})();
if(cljs.core.truth_(inst_69202)){
var statearr_69233_71673 = state_69220__$1;
(statearr_69233_71673[(1)] = (5));

} else {
var statearr_69235_71674 = state_69220__$1;
(statearr_69235_71674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69221 === (6))){
var inst_69201 = (state_69220[(7)]);
var inst_69206 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_69201) : p.call(null,inst_69201));
var state_69220__$1 = state_69220;
if(cljs.core.truth_(inst_69206)){
var statearr_69237_71675 = state_69220__$1;
(statearr_69237_71675[(1)] = (8));

} else {
var statearr_69238_71676 = state_69220__$1;
(statearr_69238_71676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69221 === (3))){
var inst_69217 = (state_69220[(2)]);
var state_69220__$1 = state_69220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69220__$1,inst_69217);
} else {
if((state_val_69221 === (2))){
var state_69220__$1 = state_69220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69220__$1,(4),ch);
} else {
if((state_val_69221 === (11))){
var inst_69209 = (state_69220[(2)]);
var state_69220__$1 = state_69220;
var statearr_69246_71677 = state_69220__$1;
(statearr_69246_71677[(2)] = inst_69209);

(statearr_69246_71677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69221 === (9))){
var state_69220__$1 = state_69220;
var statearr_69251_71678 = state_69220__$1;
(statearr_69251_71678[(2)] = null);

(statearr_69251_71678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69221 === (5))){
var inst_69204 = cljs.core.async.close_BANG_(out);
var state_69220__$1 = state_69220;
var statearr_69256_71679 = state_69220__$1;
(statearr_69256_71679[(2)] = inst_69204);

(statearr_69256_71679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69221 === (10))){
var inst_69212 = (state_69220[(2)]);
var state_69220__$1 = (function (){var statearr_69261 = state_69220;
(statearr_69261[(8)] = inst_69212);

return statearr_69261;
})();
var statearr_69262_71681 = state_69220__$1;
(statearr_69262_71681[(2)] = null);

(statearr_69262_71681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69221 === (8))){
var inst_69201 = (state_69220[(7)]);
var state_69220__$1 = state_69220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69220__$1,(11),out,inst_69201);
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
var cljs$core$async$state_machine__66939__auto__ = null;
var cljs$core$async$state_machine__66939__auto____0 = (function (){
var statearr_69264 = [null,null,null,null,null,null,null,null,null];
(statearr_69264[(0)] = cljs$core$async$state_machine__66939__auto__);

(statearr_69264[(1)] = (1));

return statearr_69264;
});
var cljs$core$async$state_machine__66939__auto____1 = (function (state_69220){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_69220);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e69268){var ex__66942__auto__ = e69268;
var statearr_69270_71686 = state_69220;
(statearr_69270_71686[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_69220[(4)]))){
var statearr_69271_71688 = state_69220;
(statearr_69271_71688[(1)] = cljs.core.first((state_69220[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71690 = state_69220;
state_69220 = G__71690;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$state_machine__66939__auto__ = function(state_69220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66939__auto____1.call(this,state_69220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66939__auto____0;
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66939__auto____1;
return cljs$core$async$state_machine__66939__auto__;
})()
})();
var state__67109__auto__ = (function (){var statearr_69273 = f__67108__auto__();
(statearr_69273[(6)] = c__67107__auto___71662);

return statearr_69273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__69282 = arguments.length;
switch (G__69282) {
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
var c__67107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = (function (state_69357){
var state_val_69358 = (state_69357[(1)]);
if((state_val_69358 === (7))){
var inst_69351 = (state_69357[(2)]);
var state_69357__$1 = state_69357;
var statearr_69360_71702 = state_69357__$1;
(statearr_69360_71702[(2)] = inst_69351);

(statearr_69360_71702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69358 === (20))){
var inst_69320 = (state_69357[(7)]);
var inst_69332 = (state_69357[(2)]);
var inst_69333 = cljs.core.next(inst_69320);
var inst_69304 = inst_69333;
var inst_69305 = null;
var inst_69306 = (0);
var inst_69307 = (0);
var state_69357__$1 = (function (){var statearr_69361 = state_69357;
(statearr_69361[(8)] = inst_69305);

(statearr_69361[(9)] = inst_69307);

(statearr_69361[(10)] = inst_69304);

(statearr_69361[(11)] = inst_69332);

(statearr_69361[(12)] = inst_69306);

return statearr_69361;
})();
var statearr_69362_71710 = state_69357__$1;
(statearr_69362_71710[(2)] = null);

(statearr_69362_71710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69358 === (1))){
var state_69357__$1 = state_69357;
var statearr_69364_71713 = state_69357__$1;
(statearr_69364_71713[(2)] = null);

(statearr_69364_71713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69358 === (4))){
var inst_69293 = (state_69357[(13)]);
var inst_69293__$1 = (state_69357[(2)]);
var inst_69294 = (inst_69293__$1 == null);
var state_69357__$1 = (function (){var statearr_69365 = state_69357;
(statearr_69365[(13)] = inst_69293__$1);

return statearr_69365;
})();
if(cljs.core.truth_(inst_69294)){
var statearr_69373_71715 = state_69357__$1;
(statearr_69373_71715[(1)] = (5));

} else {
var statearr_69374_71719 = state_69357__$1;
(statearr_69374_71719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69358 === (15))){
var state_69357__$1 = state_69357;
var statearr_69378_71720 = state_69357__$1;
(statearr_69378_71720[(2)] = null);

(statearr_69378_71720[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69358 === (21))){
var state_69357__$1 = state_69357;
var statearr_69383_71721 = state_69357__$1;
(statearr_69383_71721[(2)] = null);

(statearr_69383_71721[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69358 === (13))){
var inst_69305 = (state_69357[(8)]);
var inst_69307 = (state_69357[(9)]);
var inst_69304 = (state_69357[(10)]);
var inst_69306 = (state_69357[(12)]);
var inst_69315 = (state_69357[(2)]);
var inst_69316 = (inst_69307 + (1));
var tmp69375 = inst_69305;
var tmp69376 = inst_69304;
var tmp69377 = inst_69306;
var inst_69304__$1 = tmp69376;
var inst_69305__$1 = tmp69375;
var inst_69306__$1 = tmp69377;
var inst_69307__$1 = inst_69316;
var state_69357__$1 = (function (){var statearr_69388 = state_69357;
(statearr_69388[(8)] = inst_69305__$1);

(statearr_69388[(14)] = inst_69315);

(statearr_69388[(9)] = inst_69307__$1);

(statearr_69388[(10)] = inst_69304__$1);

(statearr_69388[(12)] = inst_69306__$1);

return statearr_69388;
})();
var statearr_69389_71729 = state_69357__$1;
(statearr_69389_71729[(2)] = null);

(statearr_69389_71729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69358 === (22))){
var state_69357__$1 = state_69357;
var statearr_69390_71730 = state_69357__$1;
(statearr_69390_71730[(2)] = null);

(statearr_69390_71730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69358 === (6))){
var inst_69293 = (state_69357[(13)]);
var inst_69302 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_69293) : f.call(null,inst_69293));
var inst_69303 = cljs.core.seq(inst_69302);
var inst_69304 = inst_69303;
var inst_69305 = null;
var inst_69306 = (0);
var inst_69307 = (0);
var state_69357__$1 = (function (){var statearr_69394 = state_69357;
(statearr_69394[(8)] = inst_69305);

(statearr_69394[(9)] = inst_69307);

(statearr_69394[(10)] = inst_69304);

(statearr_69394[(12)] = inst_69306);

return statearr_69394;
})();
var statearr_69395_71740 = state_69357__$1;
(statearr_69395_71740[(2)] = null);

(statearr_69395_71740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69358 === (17))){
var inst_69320 = (state_69357[(7)]);
var inst_69325 = cljs.core.chunk_first(inst_69320);
var inst_69326 = cljs.core.chunk_rest(inst_69320);
var inst_69327 = cljs.core.count(inst_69325);
var inst_69304 = inst_69326;
var inst_69305 = inst_69325;
var inst_69306 = inst_69327;
var inst_69307 = (0);
var state_69357__$1 = (function (){var statearr_69399 = state_69357;
(statearr_69399[(8)] = inst_69305);

(statearr_69399[(9)] = inst_69307);

(statearr_69399[(10)] = inst_69304);

(statearr_69399[(12)] = inst_69306);

return statearr_69399;
})();
var statearr_69400_71747 = state_69357__$1;
(statearr_69400_71747[(2)] = null);

(statearr_69400_71747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69358 === (3))){
var inst_69353 = (state_69357[(2)]);
var state_69357__$1 = state_69357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69357__$1,inst_69353);
} else {
if((state_val_69358 === (12))){
var inst_69341 = (state_69357[(2)]);
var state_69357__$1 = state_69357;
var statearr_69402_71751 = state_69357__$1;
(statearr_69402_71751[(2)] = inst_69341);

(statearr_69402_71751[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69358 === (2))){
var state_69357__$1 = state_69357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69357__$1,(4),in$);
} else {
if((state_val_69358 === (23))){
var inst_69349 = (state_69357[(2)]);
var state_69357__$1 = state_69357;
var statearr_69407_71755 = state_69357__$1;
(statearr_69407_71755[(2)] = inst_69349);

(statearr_69407_71755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69358 === (19))){
var inst_69336 = (state_69357[(2)]);
var state_69357__$1 = state_69357;
var statearr_69412_71756 = state_69357__$1;
(statearr_69412_71756[(2)] = inst_69336);

(statearr_69412_71756[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69358 === (11))){
var inst_69320 = (state_69357[(7)]);
var inst_69304 = (state_69357[(10)]);
var inst_69320__$1 = cljs.core.seq(inst_69304);
var state_69357__$1 = (function (){var statearr_69413 = state_69357;
(statearr_69413[(7)] = inst_69320__$1);

return statearr_69413;
})();
if(inst_69320__$1){
var statearr_69414_71758 = state_69357__$1;
(statearr_69414_71758[(1)] = (14));

} else {
var statearr_69420_71759 = state_69357__$1;
(statearr_69420_71759[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69358 === (9))){
var inst_69343 = (state_69357[(2)]);
var inst_69344 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_69357__$1 = (function (){var statearr_69421 = state_69357;
(statearr_69421[(15)] = inst_69343);

return statearr_69421;
})();
if(cljs.core.truth_(inst_69344)){
var statearr_69424_71765 = state_69357__$1;
(statearr_69424_71765[(1)] = (21));

} else {
var statearr_69430_71766 = state_69357__$1;
(statearr_69430_71766[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69358 === (5))){
var inst_69296 = cljs.core.async.close_BANG_(out);
var state_69357__$1 = state_69357;
var statearr_69432_71769 = state_69357__$1;
(statearr_69432_71769[(2)] = inst_69296);

(statearr_69432_71769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69358 === (14))){
var inst_69320 = (state_69357[(7)]);
var inst_69323 = cljs.core.chunked_seq_QMARK_(inst_69320);
var state_69357__$1 = state_69357;
if(inst_69323){
var statearr_69433_71770 = state_69357__$1;
(statearr_69433_71770[(1)] = (17));

} else {
var statearr_69434_71771 = state_69357__$1;
(statearr_69434_71771[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69358 === (16))){
var inst_69339 = (state_69357[(2)]);
var state_69357__$1 = state_69357;
var statearr_69436_71773 = state_69357__$1;
(statearr_69436_71773[(2)] = inst_69339);

(statearr_69436_71773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69358 === (10))){
var inst_69305 = (state_69357[(8)]);
var inst_69307 = (state_69357[(9)]);
var inst_69312 = cljs.core._nth(inst_69305,inst_69307);
var state_69357__$1 = state_69357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69357__$1,(13),out,inst_69312);
} else {
if((state_val_69358 === (18))){
var inst_69320 = (state_69357[(7)]);
var inst_69330 = cljs.core.first(inst_69320);
var state_69357__$1 = state_69357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69357__$1,(20),out,inst_69330);
} else {
if((state_val_69358 === (8))){
var inst_69307 = (state_69357[(9)]);
var inst_69306 = (state_69357[(12)]);
var inst_69309 = (inst_69307 < inst_69306);
var inst_69310 = inst_69309;
var state_69357__$1 = state_69357;
if(cljs.core.truth_(inst_69310)){
var statearr_69441_71785 = state_69357__$1;
(statearr_69441_71785[(1)] = (10));

} else {
var statearr_69443_71786 = state_69357__$1;
(statearr_69443_71786[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__66939__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__66939__auto____0 = (function (){
var statearr_69444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69444[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__66939__auto__);

(statearr_69444[(1)] = (1));

return statearr_69444;
});
var cljs$core$async$mapcat_STAR__$_state_machine__66939__auto____1 = (function (state_69357){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_69357);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e69445){var ex__66942__auto__ = e69445;
var statearr_69446_71797 = state_69357;
(statearr_69446_71797[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_69357[(4)]))){
var statearr_69448_71801 = state_69357;
(statearr_69448_71801[(1)] = cljs.core.first((state_69357[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71807 = state_69357;
state_69357 = G__71807;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__66939__auto__ = function(state_69357){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__66939__auto____1.call(this,state_69357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__66939__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__66939__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__66939__auto__;
})()
})();
var state__67109__auto__ = (function (){var statearr_69451 = f__67108__auto__();
(statearr_69451[(6)] = c__67107__auto__);

return statearr_69451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
}));

return c__67107__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__69459 = arguments.length;
switch (G__69459) {
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
var G__69462 = arguments.length;
switch (G__69462) {
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
var G__69470 = arguments.length;
switch (G__69470) {
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
var c__67107__auto___71852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = (function (state_69498){
var state_val_69499 = (state_69498[(1)]);
if((state_val_69499 === (7))){
var inst_69493 = (state_69498[(2)]);
var state_69498__$1 = state_69498;
var statearr_69501_71853 = state_69498__$1;
(statearr_69501_71853[(2)] = inst_69493);

(statearr_69501_71853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69499 === (1))){
var inst_69474 = null;
var state_69498__$1 = (function (){var statearr_69502 = state_69498;
(statearr_69502[(7)] = inst_69474);

return statearr_69502;
})();
var statearr_69503_71857 = state_69498__$1;
(statearr_69503_71857[(2)] = null);

(statearr_69503_71857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69499 === (4))){
var inst_69477 = (state_69498[(8)]);
var inst_69477__$1 = (state_69498[(2)]);
var inst_69479 = (inst_69477__$1 == null);
var inst_69480 = cljs.core.not(inst_69479);
var state_69498__$1 = (function (){var statearr_69507 = state_69498;
(statearr_69507[(8)] = inst_69477__$1);

return statearr_69507;
})();
if(inst_69480){
var statearr_69508_71861 = state_69498__$1;
(statearr_69508_71861[(1)] = (5));

} else {
var statearr_69509_71862 = state_69498__$1;
(statearr_69509_71862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69499 === (6))){
var state_69498__$1 = state_69498;
var statearr_69510_71863 = state_69498__$1;
(statearr_69510_71863[(2)] = null);

(statearr_69510_71863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69499 === (3))){
var inst_69495 = (state_69498[(2)]);
var inst_69496 = cljs.core.async.close_BANG_(out);
var state_69498__$1 = (function (){var statearr_69514 = state_69498;
(statearr_69514[(9)] = inst_69495);

return statearr_69514;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69498__$1,inst_69496);
} else {
if((state_val_69499 === (2))){
var state_69498__$1 = state_69498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69498__$1,(4),ch);
} else {
if((state_val_69499 === (11))){
var inst_69477 = (state_69498[(8)]);
var inst_69487 = (state_69498[(2)]);
var inst_69474 = inst_69477;
var state_69498__$1 = (function (){var statearr_69515 = state_69498;
(statearr_69515[(10)] = inst_69487);

(statearr_69515[(7)] = inst_69474);

return statearr_69515;
})();
var statearr_69516_71884 = state_69498__$1;
(statearr_69516_71884[(2)] = null);

(statearr_69516_71884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69499 === (9))){
var inst_69477 = (state_69498[(8)]);
var state_69498__$1 = state_69498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69498__$1,(11),out,inst_69477);
} else {
if((state_val_69499 === (5))){
var inst_69477 = (state_69498[(8)]);
var inst_69474 = (state_69498[(7)]);
var inst_69482 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_69477,inst_69474);
var state_69498__$1 = state_69498;
if(inst_69482){
var statearr_69525_71890 = state_69498__$1;
(statearr_69525_71890[(1)] = (8));

} else {
var statearr_69526_71891 = state_69498__$1;
(statearr_69526_71891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69499 === (10))){
var inst_69490 = (state_69498[(2)]);
var state_69498__$1 = state_69498;
var statearr_69528_71897 = state_69498__$1;
(statearr_69528_71897[(2)] = inst_69490);

(statearr_69528_71897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69499 === (8))){
var inst_69474 = (state_69498[(7)]);
var tmp69520 = inst_69474;
var inst_69474__$1 = tmp69520;
var state_69498__$1 = (function (){var statearr_69529 = state_69498;
(statearr_69529[(7)] = inst_69474__$1);

return statearr_69529;
})();
var statearr_69530_71907 = state_69498__$1;
(statearr_69530_71907[(2)] = null);

(statearr_69530_71907[(1)] = (2));


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
var cljs$core$async$state_machine__66939__auto__ = null;
var cljs$core$async$state_machine__66939__auto____0 = (function (){
var statearr_69532 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69532[(0)] = cljs$core$async$state_machine__66939__auto__);

(statearr_69532[(1)] = (1));

return statearr_69532;
});
var cljs$core$async$state_machine__66939__auto____1 = (function (state_69498){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_69498);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e69537){var ex__66942__auto__ = e69537;
var statearr_69538_71914 = state_69498;
(statearr_69538_71914[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_69498[(4)]))){
var statearr_69539_71917 = state_69498;
(statearr_69539_71917[(1)] = cljs.core.first((state_69498[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71924 = state_69498;
state_69498 = G__71924;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$state_machine__66939__auto__ = function(state_69498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66939__auto____1.call(this,state_69498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66939__auto____0;
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66939__auto____1;
return cljs$core$async$state_machine__66939__auto__;
})()
})();
var state__67109__auto__ = (function (){var statearr_69541 = f__67108__auto__();
(statearr_69541[(6)] = c__67107__auto___71852);

return statearr_69541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__69549 = arguments.length;
switch (G__69549) {
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
var c__67107__auto___71948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = (function (state_69596){
var state_val_69597 = (state_69596[(1)]);
if((state_val_69597 === (7))){
var inst_69592 = (state_69596[(2)]);
var state_69596__$1 = state_69596;
var statearr_69601_71952 = state_69596__$1;
(statearr_69601_71952[(2)] = inst_69592);

(statearr_69601_71952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69597 === (1))){
var inst_69555 = (new Array(n));
var inst_69556 = inst_69555;
var inst_69557 = (0);
var state_69596__$1 = (function (){var statearr_69602 = state_69596;
(statearr_69602[(7)] = inst_69556);

(statearr_69602[(8)] = inst_69557);

return statearr_69602;
})();
var statearr_69604_71956 = state_69596__$1;
(statearr_69604_71956[(2)] = null);

(statearr_69604_71956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69597 === (4))){
var inst_69560 = (state_69596[(9)]);
var inst_69560__$1 = (state_69596[(2)]);
var inst_69561 = (inst_69560__$1 == null);
var inst_69562 = cljs.core.not(inst_69561);
var state_69596__$1 = (function (){var statearr_69608 = state_69596;
(statearr_69608[(9)] = inst_69560__$1);

return statearr_69608;
})();
if(inst_69562){
var statearr_69609_71965 = state_69596__$1;
(statearr_69609_71965[(1)] = (5));

} else {
var statearr_69617_71966 = state_69596__$1;
(statearr_69617_71966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69597 === (15))){
var inst_69586 = (state_69596[(2)]);
var state_69596__$1 = state_69596;
var statearr_69627_71967 = state_69596__$1;
(statearr_69627_71967[(2)] = inst_69586);

(statearr_69627_71967[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69597 === (13))){
var state_69596__$1 = state_69596;
var statearr_69628_71969 = state_69596__$1;
(statearr_69628_71969[(2)] = null);

(statearr_69628_71969[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69597 === (6))){
var inst_69557 = (state_69596[(8)]);
var inst_69581 = (inst_69557 > (0));
var state_69596__$1 = state_69596;
if(cljs.core.truth_(inst_69581)){
var statearr_69635_71971 = state_69596__$1;
(statearr_69635_71971[(1)] = (12));

} else {
var statearr_69636_71972 = state_69596__$1;
(statearr_69636_71972[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69597 === (3))){
var inst_69594 = (state_69596[(2)]);
var state_69596__$1 = state_69596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69596__$1,inst_69594);
} else {
if((state_val_69597 === (12))){
var inst_69556 = (state_69596[(7)]);
var inst_69584 = cljs.core.vec(inst_69556);
var state_69596__$1 = state_69596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69596__$1,(15),out,inst_69584);
} else {
if((state_val_69597 === (2))){
var state_69596__$1 = state_69596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69596__$1,(4),ch);
} else {
if((state_val_69597 === (11))){
var inst_69575 = (state_69596[(2)]);
var inst_69576 = (new Array(n));
var inst_69556 = inst_69576;
var inst_69557 = (0);
var state_69596__$1 = (function (){var statearr_69641 = state_69596;
(statearr_69641[(7)] = inst_69556);

(statearr_69641[(10)] = inst_69575);

(statearr_69641[(8)] = inst_69557);

return statearr_69641;
})();
var statearr_69642_71983 = state_69596__$1;
(statearr_69642_71983[(2)] = null);

(statearr_69642_71983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69597 === (9))){
var inst_69556 = (state_69596[(7)]);
var inst_69573 = cljs.core.vec(inst_69556);
var state_69596__$1 = state_69596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69596__$1,(11),out,inst_69573);
} else {
if((state_val_69597 === (5))){
var inst_69565 = (state_69596[(11)]);
var inst_69560 = (state_69596[(9)]);
var inst_69556 = (state_69596[(7)]);
var inst_69557 = (state_69596[(8)]);
var inst_69564 = (inst_69556[inst_69557] = inst_69560);
var inst_69565__$1 = (inst_69557 + (1));
var inst_69566 = (inst_69565__$1 < n);
var state_69596__$1 = (function (){var statearr_69649 = state_69596;
(statearr_69649[(12)] = inst_69564);

(statearr_69649[(11)] = inst_69565__$1);

return statearr_69649;
})();
if(cljs.core.truth_(inst_69566)){
var statearr_69650_71985 = state_69596__$1;
(statearr_69650_71985[(1)] = (8));

} else {
var statearr_69651_71986 = state_69596__$1;
(statearr_69651_71986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69597 === (14))){
var inst_69589 = (state_69596[(2)]);
var inst_69590 = cljs.core.async.close_BANG_(out);
var state_69596__$1 = (function (){var statearr_69656 = state_69596;
(statearr_69656[(13)] = inst_69589);

return statearr_69656;
})();
var statearr_69657_71988 = state_69596__$1;
(statearr_69657_71988[(2)] = inst_69590);

(statearr_69657_71988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69597 === (10))){
var inst_69579 = (state_69596[(2)]);
var state_69596__$1 = state_69596;
var statearr_69658_71996 = state_69596__$1;
(statearr_69658_71996[(2)] = inst_69579);

(statearr_69658_71996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69597 === (8))){
var inst_69565 = (state_69596[(11)]);
var inst_69556 = (state_69596[(7)]);
var tmp69655 = inst_69556;
var inst_69556__$1 = tmp69655;
var inst_69557 = inst_69565;
var state_69596__$1 = (function (){var statearr_69659 = state_69596;
(statearr_69659[(7)] = inst_69556__$1);

(statearr_69659[(8)] = inst_69557);

return statearr_69659;
})();
var statearr_69660_71997 = state_69596__$1;
(statearr_69660_71997[(2)] = null);

(statearr_69660_71997[(1)] = (2));


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
var cljs$core$async$state_machine__66939__auto__ = null;
var cljs$core$async$state_machine__66939__auto____0 = (function (){
var statearr_69661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69661[(0)] = cljs$core$async$state_machine__66939__auto__);

(statearr_69661[(1)] = (1));

return statearr_69661;
});
var cljs$core$async$state_machine__66939__auto____1 = (function (state_69596){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_69596);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e69663){var ex__66942__auto__ = e69663;
var statearr_69667_71998 = state_69596;
(statearr_69667_71998[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_69596[(4)]))){
var statearr_69668_71999 = state_69596;
(statearr_69668_71999[(1)] = cljs.core.first((state_69596[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72000 = state_69596;
state_69596 = G__72000;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$state_machine__66939__auto__ = function(state_69596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66939__auto____1.call(this,state_69596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66939__auto____0;
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66939__auto____1;
return cljs$core$async$state_machine__66939__auto__;
})()
})();
var state__67109__auto__ = (function (){var statearr_69669 = f__67108__auto__();
(statearr_69669[(6)] = c__67107__auto___71948);

return statearr_69669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__69671 = arguments.length;
switch (G__69671) {
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
var c__67107__auto___72022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__67108__auto__ = (function (){var switch__66938__auto__ = (function (state_69717){
var state_val_69718 = (state_69717[(1)]);
if((state_val_69718 === (7))){
var inst_69713 = (state_69717[(2)]);
var state_69717__$1 = state_69717;
var statearr_69722_72025 = state_69717__$1;
(statearr_69722_72025[(2)] = inst_69713);

(statearr_69722_72025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69718 === (1))){
var inst_69676 = [];
var inst_69677 = inst_69676;
var inst_69678 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_69717__$1 = (function (){var statearr_69723 = state_69717;
(statearr_69723[(7)] = inst_69677);

(statearr_69723[(8)] = inst_69678);

return statearr_69723;
})();
var statearr_69725_72026 = state_69717__$1;
(statearr_69725_72026[(2)] = null);

(statearr_69725_72026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69718 === (4))){
var inst_69681 = (state_69717[(9)]);
var inst_69681__$1 = (state_69717[(2)]);
var inst_69682 = (inst_69681__$1 == null);
var inst_69683 = cljs.core.not(inst_69682);
var state_69717__$1 = (function (){var statearr_69726 = state_69717;
(statearr_69726[(9)] = inst_69681__$1);

return statearr_69726;
})();
if(inst_69683){
var statearr_69727_72033 = state_69717__$1;
(statearr_69727_72033[(1)] = (5));

} else {
var statearr_69728_72034 = state_69717__$1;
(statearr_69728_72034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69718 === (15))){
var inst_69707 = (state_69717[(2)]);
var state_69717__$1 = state_69717;
var statearr_69729_72036 = state_69717__$1;
(statearr_69729_72036[(2)] = inst_69707);

(statearr_69729_72036[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69718 === (13))){
var state_69717__$1 = state_69717;
var statearr_69730_72037 = state_69717__$1;
(statearr_69730_72037[(2)] = null);

(statearr_69730_72037[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69718 === (6))){
var inst_69677 = (state_69717[(7)]);
var inst_69702 = inst_69677.length;
var inst_69703 = (inst_69702 > (0));
var state_69717__$1 = state_69717;
if(cljs.core.truth_(inst_69703)){
var statearr_69731_72043 = state_69717__$1;
(statearr_69731_72043[(1)] = (12));

} else {
var statearr_69732_72044 = state_69717__$1;
(statearr_69732_72044[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69718 === (3))){
var inst_69715 = (state_69717[(2)]);
var state_69717__$1 = state_69717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69717__$1,inst_69715);
} else {
if((state_val_69718 === (12))){
var inst_69677 = (state_69717[(7)]);
var inst_69705 = cljs.core.vec(inst_69677);
var state_69717__$1 = state_69717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69717__$1,(15),out,inst_69705);
} else {
if((state_val_69718 === (2))){
var state_69717__$1 = state_69717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69717__$1,(4),ch);
} else {
if((state_val_69718 === (11))){
var inst_69681 = (state_69717[(9)]);
var inst_69685 = (state_69717[(10)]);
var inst_69695 = (state_69717[(2)]);
var inst_69696 = [];
var inst_69697 = inst_69696.push(inst_69681);
var inst_69677 = inst_69696;
var inst_69678 = inst_69685;
var state_69717__$1 = (function (){var statearr_69733 = state_69717;
(statearr_69733[(11)] = inst_69695);

(statearr_69733[(7)] = inst_69677);

(statearr_69733[(12)] = inst_69697);

(statearr_69733[(8)] = inst_69678);

return statearr_69733;
})();
var statearr_69734_72056 = state_69717__$1;
(statearr_69734_72056[(2)] = null);

(statearr_69734_72056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69718 === (9))){
var inst_69677 = (state_69717[(7)]);
var inst_69693 = cljs.core.vec(inst_69677);
var state_69717__$1 = state_69717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69717__$1,(11),out,inst_69693);
} else {
if((state_val_69718 === (5))){
var inst_69681 = (state_69717[(9)]);
var inst_69685 = (state_69717[(10)]);
var inst_69678 = (state_69717[(8)]);
var inst_69685__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_69681) : f.call(null,inst_69681));
var inst_69686 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_69685__$1,inst_69678);
var inst_69687 = cljs.core.keyword_identical_QMARK_(inst_69678,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_69688 = ((inst_69686) || (inst_69687));
var state_69717__$1 = (function (){var statearr_69737 = state_69717;
(statearr_69737[(10)] = inst_69685__$1);

return statearr_69737;
})();
if(cljs.core.truth_(inst_69688)){
var statearr_69738_72058 = state_69717__$1;
(statearr_69738_72058[(1)] = (8));

} else {
var statearr_69739_72059 = state_69717__$1;
(statearr_69739_72059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69718 === (14))){
var inst_69710 = (state_69717[(2)]);
var inst_69711 = cljs.core.async.close_BANG_(out);
var state_69717__$1 = (function (){var statearr_69741 = state_69717;
(statearr_69741[(13)] = inst_69710);

return statearr_69741;
})();
var statearr_69743_72060 = state_69717__$1;
(statearr_69743_72060[(2)] = inst_69711);

(statearr_69743_72060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69718 === (10))){
var inst_69700 = (state_69717[(2)]);
var state_69717__$1 = state_69717;
var statearr_69748_72061 = state_69717__$1;
(statearr_69748_72061[(2)] = inst_69700);

(statearr_69748_72061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69718 === (8))){
var inst_69677 = (state_69717[(7)]);
var inst_69681 = (state_69717[(9)]);
var inst_69685 = (state_69717[(10)]);
var inst_69690 = inst_69677.push(inst_69681);
var tmp69740 = inst_69677;
var inst_69677__$1 = tmp69740;
var inst_69678 = inst_69685;
var state_69717__$1 = (function (){var statearr_69749 = state_69717;
(statearr_69749[(7)] = inst_69677__$1);

(statearr_69749[(14)] = inst_69690);

(statearr_69749[(8)] = inst_69678);

return statearr_69749;
})();
var statearr_69750_72069 = state_69717__$1;
(statearr_69750_72069[(2)] = null);

(statearr_69750_72069[(1)] = (2));


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
var cljs$core$async$state_machine__66939__auto__ = null;
var cljs$core$async$state_machine__66939__auto____0 = (function (){
var statearr_69751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69751[(0)] = cljs$core$async$state_machine__66939__auto__);

(statearr_69751[(1)] = (1));

return statearr_69751;
});
var cljs$core$async$state_machine__66939__auto____1 = (function (state_69717){
while(true){
var ret_value__66940__auto__ = (function (){try{while(true){
var result__66941__auto__ = switch__66938__auto__(state_69717);
if(cljs.core.keyword_identical_QMARK_(result__66941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66941__auto__;
}
break;
}
}catch (e69752){var ex__66942__auto__ = e69752;
var statearr_69753_72072 = state_69717;
(statearr_69753_72072[(2)] = ex__66942__auto__);


if(cljs.core.seq((state_69717[(4)]))){
var statearr_69754_72073 = state_69717;
(statearr_69754_72073[(1)] = cljs.core.first((state_69717[(4)])));

} else {
throw ex__66942__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72079 = state_69717;
state_69717 = G__72079;
continue;
} else {
return ret_value__66940__auto__;
}
break;
}
});
cljs$core$async$state_machine__66939__auto__ = function(state_69717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66939__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66939__auto____1.call(this,state_69717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66939__auto____0;
cljs$core$async$state_machine__66939__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66939__auto____1;
return cljs$core$async$state_machine__66939__auto__;
})()
})();
var state__67109__auto__ = (function (){var statearr_69755 = f__67108__auto__();
(statearr_69755[(6)] = c__67107__auto___72022);

return statearr_69755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__67109__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
