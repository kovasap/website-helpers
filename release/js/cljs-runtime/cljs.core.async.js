goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__47384 = arguments.length;
switch (G__47384) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47395 = (function (f,blockable,meta47396){
this.f = f;
this.blockable = blockable;
this.meta47396 = meta47396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47397,meta47396__$1){
var self__ = this;
var _47397__$1 = this;
return (new cljs.core.async.t_cljs$core$async47395(self__.f,self__.blockable,meta47396__$1));
}));

(cljs.core.async.t_cljs$core$async47395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47397){
var self__ = this;
var _47397__$1 = this;
return self__.meta47396;
}));

(cljs.core.async.t_cljs$core$async47395.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47395.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47395.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async47395.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async47395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47396","meta47396",-81718978,null)], null);
}));

(cljs.core.async.t_cljs$core$async47395.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47395");

(cljs.core.async.t_cljs$core$async47395.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47395");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47395.
 */
cljs.core.async.__GT_t_cljs$core$async47395 = (function cljs$core$async$__GT_t_cljs$core$async47395(f__$1,blockable__$1,meta47396){
return (new cljs.core.async.t_cljs$core$async47395(f__$1,blockable__$1,meta47396));
});

}

return (new cljs.core.async.t_cljs$core$async47395(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47420 = arguments.length;
switch (G__47420) {
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
var G__47422 = arguments.length;
switch (G__47422) {
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
var G__47427 = arguments.length;
switch (G__47427) {
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
var val_49653 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49653) : fn1.call(null,val_49653));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49653) : fn1.call(null,val_49653));
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
var G__47433 = arguments.length;
switch (G__47433) {
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
var n__4741__auto___49657 = n;
var x_49658 = (0);
while(true){
if((x_49658 < n__4741__auto___49657)){
(a[x_49658] = x_49658);

var G__49660 = (x_49658 + (1));
x_49658 = G__49660;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47438 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47438 = (function (flag,meta47439){
this.flag = flag;
this.meta47439 = meta47439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47440,meta47439__$1){
var self__ = this;
var _47440__$1 = this;
return (new cljs.core.async.t_cljs$core$async47438(self__.flag,meta47439__$1));
}));

(cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47440){
var self__ = this;
var _47440__$1 = this;
return self__.meta47439;
}));

(cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47438.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async47438.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47439","meta47439",252598439,null)], null);
}));

(cljs.core.async.t_cljs$core$async47438.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47438");

(cljs.core.async.t_cljs$core$async47438.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47438");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47438.
 */
cljs.core.async.__GT_t_cljs$core$async47438 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47438(flag__$1,meta47439){
return (new cljs.core.async.t_cljs$core$async47438(flag__$1,meta47439));
});

}

return (new cljs.core.async.t_cljs$core$async47438(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47441 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47441 = (function (flag,cb,meta47442){
this.flag = flag;
this.cb = cb;
this.meta47442 = meta47442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47443,meta47442__$1){
var self__ = this;
var _47443__$1 = this;
return (new cljs.core.async.t_cljs$core$async47441(self__.flag,self__.cb,meta47442__$1));
}));

(cljs.core.async.t_cljs$core$async47441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47443){
var self__ = this;
var _47443__$1 = this;
return self__.meta47442;
}));

(cljs.core.async.t_cljs$core$async47441.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47441.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async47441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47442","meta47442",751760709,null)], null);
}));

(cljs.core.async.t_cljs$core$async47441.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47441");

(cljs.core.async.t_cljs$core$async47441.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47441");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47441.
 */
cljs.core.async.__GT_t_cljs$core$async47441 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47441(flag__$1,cb__$1,meta47442){
return (new cljs.core.async.t_cljs$core$async47441(flag__$1,cb__$1,meta47442));
});

}

return (new cljs.core.async.t_cljs$core$async47441(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__47446_SHARP_){
var G__47453 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47446_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47453) : fret.call(null,G__47453));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47447_SHARP_){
var G__47458 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47447_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47458) : fret.call(null,G__47458));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__49668 = (i + (1));
i = G__49668;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
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
var args__4870__auto__ = [];
var len__4864__auto___49669 = arguments.length;
var i__4865__auto___49670 = (0);
while(true){
if((i__4865__auto___49670 < len__4864__auto___49669)){
args__4870__auto__.push((arguments[i__4865__auto___49670]));

var G__49671 = (i__4865__auto___49670 + (1));
i__4865__auto___49670 = G__49671;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47463){
var map__47464 = p__47463;
var map__47464__$1 = cljs.core.__destructure_map(map__47464);
var opts = map__47464__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47461){
var G__47462 = cljs.core.first(seq47461);
var seq47461__$1 = cljs.core.next(seq47461);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47462,seq47461__$1);
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
var G__47467 = arguments.length;
switch (G__47467) {
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
var c__41615__auto___49673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = (function (state_47511){
var state_val_47512 = (state_47511[(1)]);
if((state_val_47512 === (7))){
var inst_47506 = (state_47511[(2)]);
var state_47511__$1 = state_47511;
var statearr_47514_49674 = state_47511__$1;
(statearr_47514_49674[(2)] = inst_47506);

(statearr_47514_49674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47512 === (1))){
var state_47511__$1 = state_47511;
var statearr_47517_49676 = state_47511__$1;
(statearr_47517_49676[(2)] = null);

(statearr_47517_49676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47512 === (4))){
var inst_47481 = (state_47511[(7)]);
var inst_47481__$1 = (state_47511[(2)]);
var inst_47483 = (inst_47481__$1 == null);
var state_47511__$1 = (function (){var statearr_47524 = state_47511;
(statearr_47524[(7)] = inst_47481__$1);

return statearr_47524;
})();
if(cljs.core.truth_(inst_47483)){
var statearr_47525_49678 = state_47511__$1;
(statearr_47525_49678[(1)] = (5));

} else {
var statearr_47526_49679 = state_47511__$1;
(statearr_47526_49679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47512 === (13))){
var state_47511__$1 = state_47511;
var statearr_47528_49680 = state_47511__$1;
(statearr_47528_49680[(2)] = null);

(statearr_47528_49680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47512 === (6))){
var inst_47481 = (state_47511[(7)]);
var state_47511__$1 = state_47511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47511__$1,(11),to,inst_47481);
} else {
if((state_val_47512 === (3))){
var inst_47509 = (state_47511[(2)]);
var state_47511__$1 = state_47511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47511__$1,inst_47509);
} else {
if((state_val_47512 === (12))){
var state_47511__$1 = state_47511;
var statearr_47543_49681 = state_47511__$1;
(statearr_47543_49681[(2)] = null);

(statearr_47543_49681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47512 === (2))){
var state_47511__$1 = state_47511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47511__$1,(4),from);
} else {
if((state_val_47512 === (11))){
var inst_47499 = (state_47511[(2)]);
var state_47511__$1 = state_47511;
if(cljs.core.truth_(inst_47499)){
var statearr_47546_49682 = state_47511__$1;
(statearr_47546_49682[(1)] = (12));

} else {
var statearr_47547_49683 = state_47511__$1;
(statearr_47547_49683[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47512 === (9))){
var state_47511__$1 = state_47511;
var statearr_47549_49684 = state_47511__$1;
(statearr_47549_49684[(2)] = null);

(statearr_47549_49684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47512 === (5))){
var state_47511__$1 = state_47511;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47551_49688 = state_47511__$1;
(statearr_47551_49688[(1)] = (8));

} else {
var statearr_47552_49689 = state_47511__$1;
(statearr_47552_49689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47512 === (14))){
var inst_47504 = (state_47511[(2)]);
var state_47511__$1 = state_47511;
var statearr_47557_49690 = state_47511__$1;
(statearr_47557_49690[(2)] = inst_47504);

(statearr_47557_49690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47512 === (10))){
var inst_47496 = (state_47511[(2)]);
var state_47511__$1 = state_47511;
var statearr_47558_49691 = state_47511__$1;
(statearr_47558_49691[(2)] = inst_47496);

(statearr_47558_49691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47512 === (8))){
var inst_47487 = cljs.core.async.close_BANG_(to);
var state_47511__$1 = state_47511;
var statearr_47559_49692 = state_47511__$1;
(statearr_47559_49692[(2)] = inst_47487);

(statearr_47559_49692[(1)] = (10));


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
var cljs$core$async$state_machine__41531__auto__ = null;
var cljs$core$async$state_machine__41531__auto____0 = (function (){
var statearr_47565 = [null,null,null,null,null,null,null,null];
(statearr_47565[(0)] = cljs$core$async$state_machine__41531__auto__);

(statearr_47565[(1)] = (1));

return statearr_47565;
});
var cljs$core$async$state_machine__41531__auto____1 = (function (state_47511){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_47511);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e47567){var ex__41534__auto__ = e47567;
var statearr_47572_49693 = state_47511;
(statearr_47572_49693[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_47511[(4)]))){
var statearr_47573_49694 = state_47511;
(statearr_47573_49694[(1)] = cljs.core.first((state_47511[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49695 = state_47511;
state_47511 = G__49695;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$state_machine__41531__auto__ = function(state_47511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41531__auto____1.call(this,state_47511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41531__auto____0;
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41531__auto____1;
return cljs$core$async$state_machine__41531__auto__;
})()
})();
var state__41617__auto__ = (function (){var statearr_47574 = f__41616__auto__();
(statearr_47574[(6)] = c__41615__auto___49673);

return statearr_47574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
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
var process = (function (p__47579){
var vec__47582 = p__47579;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47582,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47582,(1),null);
var job = vec__47582;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__41615__auto___49696 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = (function (state_47589){
var state_val_47590 = (state_47589[(1)]);
if((state_val_47590 === (1))){
var state_47589__$1 = state_47589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47589__$1,(2),res,v);
} else {
if((state_val_47590 === (2))){
var inst_47586 = (state_47589[(2)]);
var inst_47587 = cljs.core.async.close_BANG_(res);
var state_47589__$1 = (function (){var statearr_47594 = state_47589;
(statearr_47594[(7)] = inst_47586);

return statearr_47594;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47589__$1,inst_47587);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____0 = (function (){
var statearr_47598 = [null,null,null,null,null,null,null,null];
(statearr_47598[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__);

(statearr_47598[(1)] = (1));

return statearr_47598;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____1 = (function (state_47589){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_47589);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e47599){var ex__41534__auto__ = e47599;
var statearr_47600_49697 = state_47589;
(statearr_47600_49697[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_47589[(4)]))){
var statearr_47601_49698 = state_47589;
(statearr_47601_49698[(1)] = cljs.core.first((state_47589[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49699 = state_47589;
state_47589 = G__49699;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__ = function(state_47589){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____1.call(this,state_47589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__;
})()
})();
var state__41617__auto__ = (function (){var statearr_47605 = f__41616__auto__();
(statearr_47605[(6)] = c__41615__auto___49696);

return statearr_47605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__47607){
var vec__47608 = p__47607;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47608,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47608,(1),null);
var job = vec__47608;
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
var n__4741__auto___49700 = n;
var __49701 = (0);
while(true){
if((__49701 < n__4741__auto___49700)){
var G__47612_49702 = type;
var G__47612_49703__$1 = (((G__47612_49702 instanceof cljs.core.Keyword))?G__47612_49702.fqn:null);
switch (G__47612_49703__$1) {
case "compute":
var c__41615__auto___49705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49701,c__41615__auto___49705,G__47612_49702,G__47612_49703__$1,n__4741__auto___49700,jobs,results,process,async){
return (function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = ((function (__49701,c__41615__auto___49705,G__47612_49702,G__47612_49703__$1,n__4741__auto___49700,jobs,results,process,async){
return (function (state_47628){
var state_val_47629 = (state_47628[(1)]);
if((state_val_47629 === (1))){
var state_47628__$1 = state_47628;
var statearr_47638_49706 = state_47628__$1;
(statearr_47638_49706[(2)] = null);

(statearr_47638_49706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47629 === (2))){
var state_47628__$1 = state_47628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47628__$1,(4),jobs);
} else {
if((state_val_47629 === (3))){
var inst_47625 = (state_47628[(2)]);
var state_47628__$1 = state_47628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47628__$1,inst_47625);
} else {
if((state_val_47629 === (4))){
var inst_47615 = (state_47628[(2)]);
var inst_47617 = process(inst_47615);
var state_47628__$1 = state_47628;
if(cljs.core.truth_(inst_47617)){
var statearr_47644_49707 = state_47628__$1;
(statearr_47644_49707[(1)] = (5));

} else {
var statearr_47645_49708 = state_47628__$1;
(statearr_47645_49708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47629 === (5))){
var state_47628__$1 = state_47628;
var statearr_47646_49709 = state_47628__$1;
(statearr_47646_49709[(2)] = null);

(statearr_47646_49709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47629 === (6))){
var state_47628__$1 = state_47628;
var statearr_47647_49710 = state_47628__$1;
(statearr_47647_49710[(2)] = null);

(statearr_47647_49710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47629 === (7))){
var inst_47623 = (state_47628[(2)]);
var state_47628__$1 = state_47628;
var statearr_47651_49711 = state_47628__$1;
(statearr_47651_49711[(2)] = inst_47623);

(statearr_47651_49711[(1)] = (3));


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
});})(__49701,c__41615__auto___49705,G__47612_49702,G__47612_49703__$1,n__4741__auto___49700,jobs,results,process,async))
;
return ((function (__49701,switch__41530__auto__,c__41615__auto___49705,G__47612_49702,G__47612_49703__$1,n__4741__auto___49700,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____0 = (function (){
var statearr_47653 = [null,null,null,null,null,null,null];
(statearr_47653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__);

(statearr_47653[(1)] = (1));

return statearr_47653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____1 = (function (state_47628){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_47628);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e47654){var ex__41534__auto__ = e47654;
var statearr_47655_49713 = state_47628;
(statearr_47655_49713[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_47628[(4)]))){
var statearr_47657_49714 = state_47628;
(statearr_47657_49714[(1)] = cljs.core.first((state_47628[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49715 = state_47628;
state_47628 = G__49715;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__ = function(state_47628){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____1.call(this,state_47628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__;
})()
;})(__49701,switch__41530__auto__,c__41615__auto___49705,G__47612_49702,G__47612_49703__$1,n__4741__auto___49700,jobs,results,process,async))
})();
var state__41617__auto__ = (function (){var statearr_47659 = f__41616__auto__();
(statearr_47659[(6)] = c__41615__auto___49705);

return statearr_47659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
});})(__49701,c__41615__auto___49705,G__47612_49702,G__47612_49703__$1,n__4741__auto___49700,jobs,results,process,async))
);


break;
case "async":
var c__41615__auto___49716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49701,c__41615__auto___49716,G__47612_49702,G__47612_49703__$1,n__4741__auto___49700,jobs,results,process,async){
return (function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = ((function (__49701,c__41615__auto___49716,G__47612_49702,G__47612_49703__$1,n__4741__auto___49700,jobs,results,process,async){
return (function (state_47672){
var state_val_47673 = (state_47672[(1)]);
if((state_val_47673 === (1))){
var state_47672__$1 = state_47672;
var statearr_47692_49718 = state_47672__$1;
(statearr_47692_49718[(2)] = null);

(statearr_47692_49718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47673 === (2))){
var state_47672__$1 = state_47672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47672__$1,(4),jobs);
} else {
if((state_val_47673 === (3))){
var inst_47670 = (state_47672[(2)]);
var state_47672__$1 = state_47672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47672__$1,inst_47670);
} else {
if((state_val_47673 === (4))){
var inst_47662 = (state_47672[(2)]);
var inst_47663 = async(inst_47662);
var state_47672__$1 = state_47672;
if(cljs.core.truth_(inst_47663)){
var statearr_47694_49720 = state_47672__$1;
(statearr_47694_49720[(1)] = (5));

} else {
var statearr_47695_49721 = state_47672__$1;
(statearr_47695_49721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47673 === (5))){
var state_47672__$1 = state_47672;
var statearr_47697_49722 = state_47672__$1;
(statearr_47697_49722[(2)] = null);

(statearr_47697_49722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47673 === (6))){
var state_47672__$1 = state_47672;
var statearr_47698_49723 = state_47672__$1;
(statearr_47698_49723[(2)] = null);

(statearr_47698_49723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47673 === (7))){
var inst_47668 = (state_47672[(2)]);
var state_47672__$1 = state_47672;
var statearr_47699_49724 = state_47672__$1;
(statearr_47699_49724[(2)] = inst_47668);

(statearr_47699_49724[(1)] = (3));


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
});})(__49701,c__41615__auto___49716,G__47612_49702,G__47612_49703__$1,n__4741__auto___49700,jobs,results,process,async))
;
return ((function (__49701,switch__41530__auto__,c__41615__auto___49716,G__47612_49702,G__47612_49703__$1,n__4741__auto___49700,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____0 = (function (){
var statearr_47701 = [null,null,null,null,null,null,null];
(statearr_47701[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__);

(statearr_47701[(1)] = (1));

return statearr_47701;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____1 = (function (state_47672){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_47672);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e47705){var ex__41534__auto__ = e47705;
var statearr_47706_49725 = state_47672;
(statearr_47706_49725[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_47672[(4)]))){
var statearr_47709_49726 = state_47672;
(statearr_47709_49726[(1)] = cljs.core.first((state_47672[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49728 = state_47672;
state_47672 = G__49728;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__ = function(state_47672){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____1.call(this,state_47672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__;
})()
;})(__49701,switch__41530__auto__,c__41615__auto___49716,G__47612_49702,G__47612_49703__$1,n__4741__auto___49700,jobs,results,process,async))
})();
var state__41617__auto__ = (function (){var statearr_47710 = f__41616__auto__();
(statearr_47710[(6)] = c__41615__auto___49716);

return statearr_47710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
});})(__49701,c__41615__auto___49716,G__47612_49702,G__47612_49703__$1,n__4741__auto___49700,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47612_49703__$1)].join('')));

}

var G__49729 = (__49701 + (1));
__49701 = G__49729;
continue;
} else {
}
break;
}

var c__41615__auto___49731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = (function (state_47732){
var state_val_47733 = (state_47732[(1)]);
if((state_val_47733 === (7))){
var inst_47728 = (state_47732[(2)]);
var state_47732__$1 = state_47732;
var statearr_47735_49732 = state_47732__$1;
(statearr_47735_49732[(2)] = inst_47728);

(statearr_47735_49732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47733 === (1))){
var state_47732__$1 = state_47732;
var statearr_47736_49733 = state_47732__$1;
(statearr_47736_49733[(2)] = null);

(statearr_47736_49733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47733 === (4))){
var inst_47713 = (state_47732[(7)]);
var inst_47713__$1 = (state_47732[(2)]);
var inst_47714 = (inst_47713__$1 == null);
var state_47732__$1 = (function (){var statearr_47737 = state_47732;
(statearr_47737[(7)] = inst_47713__$1);

return statearr_47737;
})();
if(cljs.core.truth_(inst_47714)){
var statearr_47738_49734 = state_47732__$1;
(statearr_47738_49734[(1)] = (5));

} else {
var statearr_47740_49735 = state_47732__$1;
(statearr_47740_49735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47733 === (6))){
var inst_47718 = (state_47732[(8)]);
var inst_47713 = (state_47732[(7)]);
var inst_47718__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47719 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47720 = [inst_47713,inst_47718__$1];
var inst_47721 = (new cljs.core.PersistentVector(null,2,(5),inst_47719,inst_47720,null));
var state_47732__$1 = (function (){var statearr_47752 = state_47732;
(statearr_47752[(8)] = inst_47718__$1);

return statearr_47752;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47732__$1,(8),jobs,inst_47721);
} else {
if((state_val_47733 === (3))){
var inst_47730 = (state_47732[(2)]);
var state_47732__$1 = state_47732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47732__$1,inst_47730);
} else {
if((state_val_47733 === (2))){
var state_47732__$1 = state_47732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47732__$1,(4),from);
} else {
if((state_val_47733 === (9))){
var inst_47725 = (state_47732[(2)]);
var state_47732__$1 = (function (){var statearr_47753 = state_47732;
(statearr_47753[(9)] = inst_47725);

return statearr_47753;
})();
var statearr_47754_49736 = state_47732__$1;
(statearr_47754_49736[(2)] = null);

(statearr_47754_49736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47733 === (5))){
var inst_47716 = cljs.core.async.close_BANG_(jobs);
var state_47732__$1 = state_47732;
var statearr_47755_49737 = state_47732__$1;
(statearr_47755_49737[(2)] = inst_47716);

(statearr_47755_49737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47733 === (8))){
var inst_47718 = (state_47732[(8)]);
var inst_47723 = (state_47732[(2)]);
var state_47732__$1 = (function (){var statearr_47756 = state_47732;
(statearr_47756[(10)] = inst_47723);

return statearr_47756;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47732__$1,(9),results,inst_47718);
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
var cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____0 = (function (){
var statearr_47757 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__);

(statearr_47757[(1)] = (1));

return statearr_47757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____1 = (function (state_47732){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_47732);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e47758){var ex__41534__auto__ = e47758;
var statearr_47759_49738 = state_47732;
(statearr_47759_49738[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_47732[(4)]))){
var statearr_47760_49739 = state_47732;
(statearr_47760_49739[(1)] = cljs.core.first((state_47732[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49740 = state_47732;
state_47732 = G__49740;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__ = function(state_47732){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____1.call(this,state_47732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__;
})()
})();
var state__41617__auto__ = (function (){var statearr_47761 = f__41616__auto__();
(statearr_47761[(6)] = c__41615__auto___49731);

return statearr_47761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
}));


var c__41615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = (function (state_47805){
var state_val_47806 = (state_47805[(1)]);
if((state_val_47806 === (7))){
var inst_47801 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
var statearr_47807_49741 = state_47805__$1;
(statearr_47807_49741[(2)] = inst_47801);

(statearr_47807_49741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (20))){
var state_47805__$1 = state_47805;
var statearr_47808_49742 = state_47805__$1;
(statearr_47808_49742[(2)] = null);

(statearr_47808_49742[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (1))){
var state_47805__$1 = state_47805;
var statearr_47809_49744 = state_47805__$1;
(statearr_47809_49744[(2)] = null);

(statearr_47809_49744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (4))){
var inst_47770 = (state_47805[(7)]);
var inst_47770__$1 = (state_47805[(2)]);
var inst_47771 = (inst_47770__$1 == null);
var state_47805__$1 = (function (){var statearr_47810 = state_47805;
(statearr_47810[(7)] = inst_47770__$1);

return statearr_47810;
})();
if(cljs.core.truth_(inst_47771)){
var statearr_47811_49745 = state_47805__$1;
(statearr_47811_49745[(1)] = (5));

} else {
var statearr_47812_49746 = state_47805__$1;
(statearr_47812_49746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (15))){
var inst_47783 = (state_47805[(8)]);
var state_47805__$1 = state_47805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47805__$1,(18),to,inst_47783);
} else {
if((state_val_47806 === (21))){
var inst_47796 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
var statearr_47813_49747 = state_47805__$1;
(statearr_47813_49747[(2)] = inst_47796);

(statearr_47813_49747[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (13))){
var inst_47798 = (state_47805[(2)]);
var state_47805__$1 = (function (){var statearr_47815 = state_47805;
(statearr_47815[(9)] = inst_47798);

return statearr_47815;
})();
var statearr_47816_49748 = state_47805__$1;
(statearr_47816_49748[(2)] = null);

(statearr_47816_49748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (6))){
var inst_47770 = (state_47805[(7)]);
var state_47805__$1 = state_47805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47805__$1,(11),inst_47770);
} else {
if((state_val_47806 === (17))){
var inst_47791 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
if(cljs.core.truth_(inst_47791)){
var statearr_47817_49749 = state_47805__$1;
(statearr_47817_49749[(1)] = (19));

} else {
var statearr_47818_49750 = state_47805__$1;
(statearr_47818_49750[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (3))){
var inst_47803 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47805__$1,inst_47803);
} else {
if((state_val_47806 === (12))){
var inst_47780 = (state_47805[(10)]);
var state_47805__$1 = state_47805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47805__$1,(14),inst_47780);
} else {
if((state_val_47806 === (2))){
var state_47805__$1 = state_47805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47805__$1,(4),results);
} else {
if((state_val_47806 === (19))){
var state_47805__$1 = state_47805;
var statearr_47819_49751 = state_47805__$1;
(statearr_47819_49751[(2)] = null);

(statearr_47819_49751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (11))){
var inst_47780 = (state_47805[(2)]);
var state_47805__$1 = (function (){var statearr_47820 = state_47805;
(statearr_47820[(10)] = inst_47780);

return statearr_47820;
})();
var statearr_47821_49752 = state_47805__$1;
(statearr_47821_49752[(2)] = null);

(statearr_47821_49752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (9))){
var state_47805__$1 = state_47805;
var statearr_47822_49753 = state_47805__$1;
(statearr_47822_49753[(2)] = null);

(statearr_47822_49753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (5))){
var state_47805__$1 = state_47805;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47823_49757 = state_47805__$1;
(statearr_47823_49757[(1)] = (8));

} else {
var statearr_47824_49758 = state_47805__$1;
(statearr_47824_49758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (14))){
var inst_47783 = (state_47805[(8)]);
var inst_47785 = (state_47805[(11)]);
var inst_47783__$1 = (state_47805[(2)]);
var inst_47784 = (inst_47783__$1 == null);
var inst_47785__$1 = cljs.core.not(inst_47784);
var state_47805__$1 = (function (){var statearr_47825 = state_47805;
(statearr_47825[(8)] = inst_47783__$1);

(statearr_47825[(11)] = inst_47785__$1);

return statearr_47825;
})();
if(inst_47785__$1){
var statearr_47826_49759 = state_47805__$1;
(statearr_47826_49759[(1)] = (15));

} else {
var statearr_47827_49760 = state_47805__$1;
(statearr_47827_49760[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (16))){
var inst_47785 = (state_47805[(11)]);
var state_47805__$1 = state_47805;
var statearr_47834_49761 = state_47805__$1;
(statearr_47834_49761[(2)] = inst_47785);

(statearr_47834_49761[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (10))){
var inst_47777 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
var statearr_47846_49762 = state_47805__$1;
(statearr_47846_49762[(2)] = inst_47777);

(statearr_47846_49762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (18))){
var inst_47788 = (state_47805[(2)]);
var state_47805__$1 = state_47805;
var statearr_47853_49763 = state_47805__$1;
(statearr_47853_49763[(2)] = inst_47788);

(statearr_47853_49763[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47806 === (8))){
var inst_47774 = cljs.core.async.close_BANG_(to);
var state_47805__$1 = state_47805;
var statearr_47854_49764 = state_47805__$1;
(statearr_47854_49764[(2)] = inst_47774);

(statearr_47854_49764[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____0 = (function (){
var statearr_47855 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47855[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__);

(statearr_47855[(1)] = (1));

return statearr_47855;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____1 = (function (state_47805){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_47805);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e47856){var ex__41534__auto__ = e47856;
var statearr_47857_49765 = state_47805;
(statearr_47857_49765[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_47805[(4)]))){
var statearr_47859_49766 = state_47805;
(statearr_47859_49766[(1)] = cljs.core.first((state_47805[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49768 = state_47805;
state_47805 = G__49768;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__ = function(state_47805){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____1.call(this,state_47805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41531__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41531__auto__;
})()
})();
var state__41617__auto__ = (function (){var statearr_47860 = f__41616__auto__();
(statearr_47860[(6)] = c__41615__auto__);

return statearr_47860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
}));

return c__41615__auto__;
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
var G__47864 = arguments.length;
switch (G__47864) {
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
var G__47887 = arguments.length;
switch (G__47887) {
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
var G__47931 = arguments.length;
switch (G__47931) {
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
var c__41615__auto___49777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = (function (state_47958){
var state_val_47959 = (state_47958[(1)]);
if((state_val_47959 === (7))){
var inst_47954 = (state_47958[(2)]);
var state_47958__$1 = state_47958;
var statearr_47960_49778 = state_47958__$1;
(statearr_47960_49778[(2)] = inst_47954);

(statearr_47960_49778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47959 === (1))){
var state_47958__$1 = state_47958;
var statearr_47961_49779 = state_47958__$1;
(statearr_47961_49779[(2)] = null);

(statearr_47961_49779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47959 === (4))){
var inst_47934 = (state_47958[(7)]);
var inst_47934__$1 = (state_47958[(2)]);
var inst_47936 = (inst_47934__$1 == null);
var state_47958__$1 = (function (){var statearr_47966 = state_47958;
(statearr_47966[(7)] = inst_47934__$1);

return statearr_47966;
})();
if(cljs.core.truth_(inst_47936)){
var statearr_47967_49788 = state_47958__$1;
(statearr_47967_49788[(1)] = (5));

} else {
var statearr_47972_49789 = state_47958__$1;
(statearr_47972_49789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47959 === (13))){
var state_47958__$1 = state_47958;
var statearr_47977_49796 = state_47958__$1;
(statearr_47977_49796[(2)] = null);

(statearr_47977_49796[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47959 === (6))){
var inst_47934 = (state_47958[(7)]);
var inst_47941 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47934) : p.call(null,inst_47934));
var state_47958__$1 = state_47958;
if(cljs.core.truth_(inst_47941)){
var statearr_47978_49797 = state_47958__$1;
(statearr_47978_49797[(1)] = (9));

} else {
var statearr_47980_49798 = state_47958__$1;
(statearr_47980_49798[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47959 === (3))){
var inst_47956 = (state_47958[(2)]);
var state_47958__$1 = state_47958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47958__$1,inst_47956);
} else {
if((state_val_47959 === (12))){
var state_47958__$1 = state_47958;
var statearr_47981_49799 = state_47958__$1;
(statearr_47981_49799[(2)] = null);

(statearr_47981_49799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47959 === (2))){
var state_47958__$1 = state_47958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47958__$1,(4),ch);
} else {
if((state_val_47959 === (11))){
var inst_47934 = (state_47958[(7)]);
var inst_47945 = (state_47958[(2)]);
var state_47958__$1 = state_47958;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47958__$1,(8),inst_47945,inst_47934);
} else {
if((state_val_47959 === (9))){
var state_47958__$1 = state_47958;
var statearr_47982_49806 = state_47958__$1;
(statearr_47982_49806[(2)] = tc);

(statearr_47982_49806[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47959 === (5))){
var inst_47938 = cljs.core.async.close_BANG_(tc);
var inst_47939 = cljs.core.async.close_BANG_(fc);
var state_47958__$1 = (function (){var statearr_47983 = state_47958;
(statearr_47983[(8)] = inst_47938);

return statearr_47983;
})();
var statearr_47984_49809 = state_47958__$1;
(statearr_47984_49809[(2)] = inst_47939);

(statearr_47984_49809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47959 === (14))){
var inst_47952 = (state_47958[(2)]);
var state_47958__$1 = state_47958;
var statearr_47985_49810 = state_47958__$1;
(statearr_47985_49810[(2)] = inst_47952);

(statearr_47985_49810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47959 === (10))){
var state_47958__$1 = state_47958;
var statearr_47986_49811 = state_47958__$1;
(statearr_47986_49811[(2)] = fc);

(statearr_47986_49811[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47959 === (8))){
var inst_47947 = (state_47958[(2)]);
var state_47958__$1 = state_47958;
if(cljs.core.truth_(inst_47947)){
var statearr_47988_49820 = state_47958__$1;
(statearr_47988_49820[(1)] = (12));

} else {
var statearr_47989_49821 = state_47958__$1;
(statearr_47989_49821[(1)] = (13));

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
var cljs$core$async$state_machine__41531__auto__ = null;
var cljs$core$async$state_machine__41531__auto____0 = (function (){
var statearr_47991 = [null,null,null,null,null,null,null,null,null];
(statearr_47991[(0)] = cljs$core$async$state_machine__41531__auto__);

(statearr_47991[(1)] = (1));

return statearr_47991;
});
var cljs$core$async$state_machine__41531__auto____1 = (function (state_47958){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_47958);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e47992){var ex__41534__auto__ = e47992;
var statearr_47993_49828 = state_47958;
(statearr_47993_49828[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_47958[(4)]))){
var statearr_47994_49835 = state_47958;
(statearr_47994_49835[(1)] = cljs.core.first((state_47958[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49836 = state_47958;
state_47958 = G__49836;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$state_machine__41531__auto__ = function(state_47958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41531__auto____1.call(this,state_47958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41531__auto____0;
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41531__auto____1;
return cljs$core$async$state_machine__41531__auto__;
})()
})();
var state__41617__auto__ = (function (){var statearr_47995 = f__41616__auto__();
(statearr_47995[(6)] = c__41615__auto___49777);

return statearr_47995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
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
var c__41615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = (function (state_48017){
var state_val_48018 = (state_48017[(1)]);
if((state_val_48018 === (7))){
var inst_48013 = (state_48017[(2)]);
var state_48017__$1 = state_48017;
var statearr_48019_49838 = state_48017__$1;
(statearr_48019_49838[(2)] = inst_48013);

(statearr_48019_49838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48018 === (1))){
var inst_47996 = init;
var inst_47997 = inst_47996;
var state_48017__$1 = (function (){var statearr_48020 = state_48017;
(statearr_48020[(7)] = inst_47997);

return statearr_48020;
})();
var statearr_48021_49841 = state_48017__$1;
(statearr_48021_49841[(2)] = null);

(statearr_48021_49841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48018 === (4))){
var inst_48000 = (state_48017[(8)]);
var inst_48000__$1 = (state_48017[(2)]);
var inst_48001 = (inst_48000__$1 == null);
var state_48017__$1 = (function (){var statearr_48022 = state_48017;
(statearr_48022[(8)] = inst_48000__$1);

return statearr_48022;
})();
if(cljs.core.truth_(inst_48001)){
var statearr_48023_49842 = state_48017__$1;
(statearr_48023_49842[(1)] = (5));

} else {
var statearr_48024_49844 = state_48017__$1;
(statearr_48024_49844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48018 === (6))){
var inst_48000 = (state_48017[(8)]);
var inst_48004 = (state_48017[(9)]);
var inst_47997 = (state_48017[(7)]);
var inst_48004__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47997,inst_48000) : f.call(null,inst_47997,inst_48000));
var inst_48005 = cljs.core.reduced_QMARK_(inst_48004__$1);
var state_48017__$1 = (function (){var statearr_48025 = state_48017;
(statearr_48025[(9)] = inst_48004__$1);

return statearr_48025;
})();
if(inst_48005){
var statearr_48026_49846 = state_48017__$1;
(statearr_48026_49846[(1)] = (8));

} else {
var statearr_48027_49847 = state_48017__$1;
(statearr_48027_49847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48018 === (3))){
var inst_48015 = (state_48017[(2)]);
var state_48017__$1 = state_48017;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48017__$1,inst_48015);
} else {
if((state_val_48018 === (2))){
var state_48017__$1 = state_48017;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48017__$1,(4),ch);
} else {
if((state_val_48018 === (9))){
var inst_48004 = (state_48017[(9)]);
var inst_47997 = inst_48004;
var state_48017__$1 = (function (){var statearr_48030 = state_48017;
(statearr_48030[(7)] = inst_47997);

return statearr_48030;
})();
var statearr_48031_49848 = state_48017__$1;
(statearr_48031_49848[(2)] = null);

(statearr_48031_49848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48018 === (5))){
var inst_47997 = (state_48017[(7)]);
var state_48017__$1 = state_48017;
var statearr_48032_49849 = state_48017__$1;
(statearr_48032_49849[(2)] = inst_47997);

(statearr_48032_49849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48018 === (10))){
var inst_48011 = (state_48017[(2)]);
var state_48017__$1 = state_48017;
var statearr_48033_49850 = state_48017__$1;
(statearr_48033_49850[(2)] = inst_48011);

(statearr_48033_49850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48018 === (8))){
var inst_48004 = (state_48017[(9)]);
var inst_48007 = cljs.core.deref(inst_48004);
var state_48017__$1 = state_48017;
var statearr_48034_49854 = state_48017__$1;
(statearr_48034_49854[(2)] = inst_48007);

(statearr_48034_49854[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__41531__auto__ = null;
var cljs$core$async$reduce_$_state_machine__41531__auto____0 = (function (){
var statearr_48035 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48035[(0)] = cljs$core$async$reduce_$_state_machine__41531__auto__);

(statearr_48035[(1)] = (1));

return statearr_48035;
});
var cljs$core$async$reduce_$_state_machine__41531__auto____1 = (function (state_48017){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_48017);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e48036){var ex__41534__auto__ = e48036;
var statearr_48037_49855 = state_48017;
(statearr_48037_49855[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_48017[(4)]))){
var statearr_48038_49856 = state_48017;
(statearr_48038_49856[(1)] = cljs.core.first((state_48017[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49857 = state_48017;
state_48017 = G__49857;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__41531__auto__ = function(state_48017){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__41531__auto____1.call(this,state_48017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__41531__auto____0;
cljs$core$async$reduce_$_state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__41531__auto____1;
return cljs$core$async$reduce_$_state_machine__41531__auto__;
})()
})();
var state__41617__auto__ = (function (){var statearr_48040 = f__41616__auto__();
(statearr_48040[(6)] = c__41615__auto__);

return statearr_48040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
}));

return c__41615__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__41615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = (function (state_48049){
var state_val_48050 = (state_48049[(1)]);
if((state_val_48050 === (1))){
var inst_48043 = cljs.core.async.reduce(f__$1,init,ch);
var state_48049__$1 = state_48049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48049__$1,(2),inst_48043);
} else {
if((state_val_48050 === (2))){
var inst_48045 = (state_48049[(2)]);
var inst_48046 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_48045) : f__$1.call(null,inst_48045));
var state_48049__$1 = state_48049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48049__$1,inst_48046);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__41531__auto__ = null;
var cljs$core$async$transduce_$_state_machine__41531__auto____0 = (function (){
var statearr_48052 = [null,null,null,null,null,null,null];
(statearr_48052[(0)] = cljs$core$async$transduce_$_state_machine__41531__auto__);

(statearr_48052[(1)] = (1));

return statearr_48052;
});
var cljs$core$async$transduce_$_state_machine__41531__auto____1 = (function (state_48049){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_48049);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e48053){var ex__41534__auto__ = e48053;
var statearr_48055_49860 = state_48049;
(statearr_48055_49860[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_48049[(4)]))){
var statearr_48056_49861 = state_48049;
(statearr_48056_49861[(1)] = cljs.core.first((state_48049[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49862 = state_48049;
state_48049 = G__49862;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__41531__auto__ = function(state_48049){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__41531__auto____1.call(this,state_48049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__41531__auto____0;
cljs$core$async$transduce_$_state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__41531__auto____1;
return cljs$core$async$transduce_$_state_machine__41531__auto__;
})()
})();
var state__41617__auto__ = (function (){var statearr_48058 = f__41616__auto__();
(statearr_48058[(6)] = c__41615__auto__);

return statearr_48058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
}));

return c__41615__auto__;
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
var G__48060 = arguments.length;
switch (G__48060) {
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
var c__41615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = (function (state_48085){
var state_val_48086 = (state_48085[(1)]);
if((state_val_48086 === (7))){
var inst_48067 = (state_48085[(2)]);
var state_48085__$1 = state_48085;
var statearr_48087_49864 = state_48085__$1;
(statearr_48087_49864[(2)] = inst_48067);

(statearr_48087_49864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48086 === (1))){
var inst_48061 = cljs.core.seq(coll);
var inst_48062 = inst_48061;
var state_48085__$1 = (function (){var statearr_48088 = state_48085;
(statearr_48088[(7)] = inst_48062);

return statearr_48088;
})();
var statearr_48089_49865 = state_48085__$1;
(statearr_48089_49865[(2)] = null);

(statearr_48089_49865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48086 === (4))){
var inst_48062 = (state_48085[(7)]);
var inst_48065 = cljs.core.first(inst_48062);
var state_48085__$1 = state_48085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48085__$1,(7),ch,inst_48065);
} else {
if((state_val_48086 === (13))){
var inst_48079 = (state_48085[(2)]);
var state_48085__$1 = state_48085;
var statearr_48090_49866 = state_48085__$1;
(statearr_48090_49866[(2)] = inst_48079);

(statearr_48090_49866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48086 === (6))){
var inst_48070 = (state_48085[(2)]);
var state_48085__$1 = state_48085;
if(cljs.core.truth_(inst_48070)){
var statearr_48091_49867 = state_48085__$1;
(statearr_48091_49867[(1)] = (8));

} else {
var statearr_48092_49868 = state_48085__$1;
(statearr_48092_49868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48086 === (3))){
var inst_48083 = (state_48085[(2)]);
var state_48085__$1 = state_48085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48085__$1,inst_48083);
} else {
if((state_val_48086 === (12))){
var state_48085__$1 = state_48085;
var statearr_48093_49869 = state_48085__$1;
(statearr_48093_49869[(2)] = null);

(statearr_48093_49869[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48086 === (2))){
var inst_48062 = (state_48085[(7)]);
var state_48085__$1 = state_48085;
if(cljs.core.truth_(inst_48062)){
var statearr_48094_49870 = state_48085__$1;
(statearr_48094_49870[(1)] = (4));

} else {
var statearr_48095_49871 = state_48085__$1;
(statearr_48095_49871[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48086 === (11))){
var inst_48076 = cljs.core.async.close_BANG_(ch);
var state_48085__$1 = state_48085;
var statearr_48096_49872 = state_48085__$1;
(statearr_48096_49872[(2)] = inst_48076);

(statearr_48096_49872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48086 === (9))){
var state_48085__$1 = state_48085;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48097_49873 = state_48085__$1;
(statearr_48097_49873[(1)] = (11));

} else {
var statearr_48098_49874 = state_48085__$1;
(statearr_48098_49874[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48086 === (5))){
var inst_48062 = (state_48085[(7)]);
var state_48085__$1 = state_48085;
var statearr_48099_49875 = state_48085__$1;
(statearr_48099_49875[(2)] = inst_48062);

(statearr_48099_49875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48086 === (10))){
var inst_48081 = (state_48085[(2)]);
var state_48085__$1 = state_48085;
var statearr_48100_49876 = state_48085__$1;
(statearr_48100_49876[(2)] = inst_48081);

(statearr_48100_49876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48086 === (8))){
var inst_48062 = (state_48085[(7)]);
var inst_48072 = cljs.core.next(inst_48062);
var inst_48062__$1 = inst_48072;
var state_48085__$1 = (function (){var statearr_48101 = state_48085;
(statearr_48101[(7)] = inst_48062__$1);

return statearr_48101;
})();
var statearr_48102_49877 = state_48085__$1;
(statearr_48102_49877[(2)] = null);

(statearr_48102_49877[(1)] = (2));


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
var cljs$core$async$state_machine__41531__auto__ = null;
var cljs$core$async$state_machine__41531__auto____0 = (function (){
var statearr_48103 = [null,null,null,null,null,null,null,null];
(statearr_48103[(0)] = cljs$core$async$state_machine__41531__auto__);

(statearr_48103[(1)] = (1));

return statearr_48103;
});
var cljs$core$async$state_machine__41531__auto____1 = (function (state_48085){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_48085);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e48104){var ex__41534__auto__ = e48104;
var statearr_48105_49879 = state_48085;
(statearr_48105_49879[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_48085[(4)]))){
var statearr_48106_49880 = state_48085;
(statearr_48106_49880[(1)] = cljs.core.first((state_48085[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49881 = state_48085;
state_48085 = G__49881;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$state_machine__41531__auto__ = function(state_48085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41531__auto____1.call(this,state_48085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41531__auto____0;
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41531__auto____1;
return cljs$core$async$state_machine__41531__auto__;
})()
})();
var state__41617__auto__ = (function (){var statearr_48107 = f__41616__auto__();
(statearr_48107[(6)] = c__41615__auto__);

return statearr_48107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
}));

return c__41615__auto__;
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
var G__48109 = arguments.length;
switch (G__48109) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_49883 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_49883(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_49888 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_49888(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_49889 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_49889(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_49892 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_49892(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48112 = (function (ch,cs,meta48113){
this.ch = ch;
this.cs = cs;
this.meta48113 = meta48113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48114,meta48113__$1){
var self__ = this;
var _48114__$1 = this;
return (new cljs.core.async.t_cljs$core$async48112(self__.ch,self__.cs,meta48113__$1));
}));

(cljs.core.async.t_cljs$core$async48112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48114){
var self__ = this;
var _48114__$1 = this;
return self__.meta48113;
}));

(cljs.core.async.t_cljs$core$async48112.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48112.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48112.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48112.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async48112.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async48112.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async48112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48113","meta48113",1591985391,null)], null);
}));

(cljs.core.async.t_cljs$core$async48112.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48112");

(cljs.core.async.t_cljs$core$async48112.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48112");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48112.
 */
cljs.core.async.__GT_t_cljs$core$async48112 = (function cljs$core$async$mult_$___GT_t_cljs$core$async48112(ch__$1,cs__$1,meta48113){
return (new cljs.core.async.t_cljs$core$async48112(ch__$1,cs__$1,meta48113));
});

}

return (new cljs.core.async.t_cljs$core$async48112(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__41615__auto___49902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = (function (state_48250){
var state_val_48251 = (state_48250[(1)]);
if((state_val_48251 === (7))){
var inst_48245 = (state_48250[(2)]);
var state_48250__$1 = state_48250;
var statearr_48255_49903 = state_48250__$1;
(statearr_48255_49903[(2)] = inst_48245);

(statearr_48255_49903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (20))){
var inst_48148 = (state_48250[(7)]);
var inst_48160 = cljs.core.first(inst_48148);
var inst_48161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48160,(0),null);
var inst_48162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48160,(1),null);
var state_48250__$1 = (function (){var statearr_48256 = state_48250;
(statearr_48256[(8)] = inst_48161);

return statearr_48256;
})();
if(cljs.core.truth_(inst_48162)){
var statearr_48258_49910 = state_48250__$1;
(statearr_48258_49910[(1)] = (22));

} else {
var statearr_48259_49911 = state_48250__$1;
(statearr_48259_49911[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (27))){
var inst_48190 = (state_48250[(9)]);
var inst_48117 = (state_48250[(10)]);
var inst_48197 = (state_48250[(11)]);
var inst_48192 = (state_48250[(12)]);
var inst_48197__$1 = cljs.core._nth(inst_48190,inst_48192);
var inst_48198 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48197__$1,inst_48117,done);
var state_48250__$1 = (function (){var statearr_48261 = state_48250;
(statearr_48261[(11)] = inst_48197__$1);

return statearr_48261;
})();
if(cljs.core.truth_(inst_48198)){
var statearr_48262_49918 = state_48250__$1;
(statearr_48262_49918[(1)] = (30));

} else {
var statearr_48263_49919 = state_48250__$1;
(statearr_48263_49919[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (1))){
var state_48250__$1 = state_48250;
var statearr_48265_49920 = state_48250__$1;
(statearr_48265_49920[(2)] = null);

(statearr_48265_49920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (24))){
var inst_48148 = (state_48250[(7)]);
var inst_48167 = (state_48250[(2)]);
var inst_48168 = cljs.core.next(inst_48148);
var inst_48126 = inst_48168;
var inst_48127 = null;
var inst_48128 = (0);
var inst_48129 = (0);
var state_48250__$1 = (function (){var statearr_48269 = state_48250;
(statearr_48269[(13)] = inst_48127);

(statearr_48269[(14)] = inst_48167);

(statearr_48269[(15)] = inst_48128);

(statearr_48269[(16)] = inst_48129);

(statearr_48269[(17)] = inst_48126);

return statearr_48269;
})();
var statearr_48270_49928 = state_48250__$1;
(statearr_48270_49928[(2)] = null);

(statearr_48270_49928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (39))){
var state_48250__$1 = state_48250;
var statearr_48274_49929 = state_48250__$1;
(statearr_48274_49929[(2)] = null);

(statearr_48274_49929[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (4))){
var inst_48117 = (state_48250[(10)]);
var inst_48117__$1 = (state_48250[(2)]);
var inst_48118 = (inst_48117__$1 == null);
var state_48250__$1 = (function (){var statearr_48277 = state_48250;
(statearr_48277[(10)] = inst_48117__$1);

return statearr_48277;
})();
if(cljs.core.truth_(inst_48118)){
var statearr_48278_49931 = state_48250__$1;
(statearr_48278_49931[(1)] = (5));

} else {
var statearr_48282_49932 = state_48250__$1;
(statearr_48282_49932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (15))){
var inst_48127 = (state_48250[(13)]);
var inst_48128 = (state_48250[(15)]);
var inst_48129 = (state_48250[(16)]);
var inst_48126 = (state_48250[(17)]);
var inst_48144 = (state_48250[(2)]);
var inst_48145 = (inst_48129 + (1));
var tmp48271 = inst_48127;
var tmp48272 = inst_48128;
var tmp48273 = inst_48126;
var inst_48126__$1 = tmp48273;
var inst_48127__$1 = tmp48271;
var inst_48128__$1 = tmp48272;
var inst_48129__$1 = inst_48145;
var state_48250__$1 = (function (){var statearr_48288 = state_48250;
(statearr_48288[(13)] = inst_48127__$1);

(statearr_48288[(18)] = inst_48144);

(statearr_48288[(15)] = inst_48128__$1);

(statearr_48288[(16)] = inst_48129__$1);

(statearr_48288[(17)] = inst_48126__$1);

return statearr_48288;
})();
var statearr_48289_49944 = state_48250__$1;
(statearr_48289_49944[(2)] = null);

(statearr_48289_49944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (21))){
var inst_48171 = (state_48250[(2)]);
var state_48250__$1 = state_48250;
var statearr_48293_49945 = state_48250__$1;
(statearr_48293_49945[(2)] = inst_48171);

(statearr_48293_49945[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (31))){
var inst_48197 = (state_48250[(11)]);
var inst_48201 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48197);
var state_48250__$1 = state_48250;
var statearr_48295_49946 = state_48250__$1;
(statearr_48295_49946[(2)] = inst_48201);

(statearr_48295_49946[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (32))){
var inst_48190 = (state_48250[(9)]);
var inst_48191 = (state_48250[(19)]);
var inst_48192 = (state_48250[(12)]);
var inst_48189 = (state_48250[(20)]);
var inst_48203 = (state_48250[(2)]);
var inst_48204 = (inst_48192 + (1));
var tmp48290 = inst_48190;
var tmp48291 = inst_48191;
var tmp48292 = inst_48189;
var inst_48189__$1 = tmp48292;
var inst_48190__$1 = tmp48290;
var inst_48191__$1 = tmp48291;
var inst_48192__$1 = inst_48204;
var state_48250__$1 = (function (){var statearr_48297 = state_48250;
(statearr_48297[(9)] = inst_48190__$1);

(statearr_48297[(19)] = inst_48191__$1);

(statearr_48297[(21)] = inst_48203);

(statearr_48297[(12)] = inst_48192__$1);

(statearr_48297[(20)] = inst_48189__$1);

return statearr_48297;
})();
var statearr_48299_49951 = state_48250__$1;
(statearr_48299_49951[(2)] = null);

(statearr_48299_49951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (40))){
var inst_48216 = (state_48250[(22)]);
var inst_48220 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48216);
var state_48250__$1 = state_48250;
var statearr_48300_49960 = state_48250__$1;
(statearr_48300_49960[(2)] = inst_48220);

(statearr_48300_49960[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (33))){
var inst_48207 = (state_48250[(23)]);
var inst_48209 = cljs.core.chunked_seq_QMARK_(inst_48207);
var state_48250__$1 = state_48250;
if(inst_48209){
var statearr_48302_49961 = state_48250__$1;
(statearr_48302_49961[(1)] = (36));

} else {
var statearr_48303_49962 = state_48250__$1;
(statearr_48303_49962[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (13))){
var inst_48138 = (state_48250[(24)]);
var inst_48141 = cljs.core.async.close_BANG_(inst_48138);
var state_48250__$1 = state_48250;
var statearr_48304_49963 = state_48250__$1;
(statearr_48304_49963[(2)] = inst_48141);

(statearr_48304_49963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (22))){
var inst_48161 = (state_48250[(8)]);
var inst_48164 = cljs.core.async.close_BANG_(inst_48161);
var state_48250__$1 = state_48250;
var statearr_48306_49967 = state_48250__$1;
(statearr_48306_49967[(2)] = inst_48164);

(statearr_48306_49967[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (36))){
var inst_48207 = (state_48250[(23)]);
var inst_48211 = cljs.core.chunk_first(inst_48207);
var inst_48212 = cljs.core.chunk_rest(inst_48207);
var inst_48213 = cljs.core.count(inst_48211);
var inst_48189 = inst_48212;
var inst_48190 = inst_48211;
var inst_48191 = inst_48213;
var inst_48192 = (0);
var state_48250__$1 = (function (){var statearr_48309 = state_48250;
(statearr_48309[(9)] = inst_48190);

(statearr_48309[(19)] = inst_48191);

(statearr_48309[(12)] = inst_48192);

(statearr_48309[(20)] = inst_48189);

return statearr_48309;
})();
var statearr_48312_49968 = state_48250__$1;
(statearr_48312_49968[(2)] = null);

(statearr_48312_49968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (41))){
var inst_48207 = (state_48250[(23)]);
var inst_48222 = (state_48250[(2)]);
var inst_48223 = cljs.core.next(inst_48207);
var inst_48189 = inst_48223;
var inst_48190 = null;
var inst_48191 = (0);
var inst_48192 = (0);
var state_48250__$1 = (function (){var statearr_48314 = state_48250;
(statearr_48314[(9)] = inst_48190);

(statearr_48314[(19)] = inst_48191);

(statearr_48314[(12)] = inst_48192);

(statearr_48314[(25)] = inst_48222);

(statearr_48314[(20)] = inst_48189);

return statearr_48314;
})();
var statearr_48316_49969 = state_48250__$1;
(statearr_48316_49969[(2)] = null);

(statearr_48316_49969[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (43))){
var state_48250__$1 = state_48250;
var statearr_48317_49970 = state_48250__$1;
(statearr_48317_49970[(2)] = null);

(statearr_48317_49970[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (29))){
var inst_48231 = (state_48250[(2)]);
var state_48250__$1 = state_48250;
var statearr_48318_49971 = state_48250__$1;
(statearr_48318_49971[(2)] = inst_48231);

(statearr_48318_49971[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (44))){
var inst_48241 = (state_48250[(2)]);
var state_48250__$1 = (function (){var statearr_48320 = state_48250;
(statearr_48320[(26)] = inst_48241);

return statearr_48320;
})();
var statearr_48322_49972 = state_48250__$1;
(statearr_48322_49972[(2)] = null);

(statearr_48322_49972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (6))){
var inst_48181 = (state_48250[(27)]);
var inst_48180 = cljs.core.deref(cs);
var inst_48181__$1 = cljs.core.keys(inst_48180);
var inst_48182 = cljs.core.count(inst_48181__$1);
var inst_48183 = cljs.core.reset_BANG_(dctr,inst_48182);
var inst_48188 = cljs.core.seq(inst_48181__$1);
var inst_48189 = inst_48188;
var inst_48190 = null;
var inst_48191 = (0);
var inst_48192 = (0);
var state_48250__$1 = (function (){var statearr_48323 = state_48250;
(statearr_48323[(9)] = inst_48190);

(statearr_48323[(19)] = inst_48191);

(statearr_48323[(12)] = inst_48192);

(statearr_48323[(27)] = inst_48181__$1);

(statearr_48323[(20)] = inst_48189);

(statearr_48323[(28)] = inst_48183);

return statearr_48323;
})();
var statearr_48324_49976 = state_48250__$1;
(statearr_48324_49976[(2)] = null);

(statearr_48324_49976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (28))){
var inst_48207 = (state_48250[(23)]);
var inst_48189 = (state_48250[(20)]);
var inst_48207__$1 = cljs.core.seq(inst_48189);
var state_48250__$1 = (function (){var statearr_48328 = state_48250;
(statearr_48328[(23)] = inst_48207__$1);

return statearr_48328;
})();
if(inst_48207__$1){
var statearr_48329_49981 = state_48250__$1;
(statearr_48329_49981[(1)] = (33));

} else {
var statearr_48330_49985 = state_48250__$1;
(statearr_48330_49985[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (25))){
var inst_48191 = (state_48250[(19)]);
var inst_48192 = (state_48250[(12)]);
var inst_48194 = (inst_48192 < inst_48191);
var inst_48195 = inst_48194;
var state_48250__$1 = state_48250;
if(cljs.core.truth_(inst_48195)){
var statearr_48331_49986 = state_48250__$1;
(statearr_48331_49986[(1)] = (27));

} else {
var statearr_48332_49987 = state_48250__$1;
(statearr_48332_49987[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (34))){
var state_48250__$1 = state_48250;
var statearr_48333_49991 = state_48250__$1;
(statearr_48333_49991[(2)] = null);

(statearr_48333_49991[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (17))){
var state_48250__$1 = state_48250;
var statearr_48334_49992 = state_48250__$1;
(statearr_48334_49992[(2)] = null);

(statearr_48334_49992[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (3))){
var inst_48247 = (state_48250[(2)]);
var state_48250__$1 = state_48250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48250__$1,inst_48247);
} else {
if((state_val_48251 === (12))){
var inst_48176 = (state_48250[(2)]);
var state_48250__$1 = state_48250;
var statearr_48335_49994 = state_48250__$1;
(statearr_48335_49994[(2)] = inst_48176);

(statearr_48335_49994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (2))){
var state_48250__$1 = state_48250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48250__$1,(4),ch);
} else {
if((state_val_48251 === (23))){
var state_48250__$1 = state_48250;
var statearr_48341_49996 = state_48250__$1;
(statearr_48341_49996[(2)] = null);

(statearr_48341_49996[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (35))){
var inst_48229 = (state_48250[(2)]);
var state_48250__$1 = state_48250;
var statearr_48342_50000 = state_48250__$1;
(statearr_48342_50000[(2)] = inst_48229);

(statearr_48342_50000[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (19))){
var inst_48148 = (state_48250[(7)]);
var inst_48152 = cljs.core.chunk_first(inst_48148);
var inst_48153 = cljs.core.chunk_rest(inst_48148);
var inst_48154 = cljs.core.count(inst_48152);
var inst_48126 = inst_48153;
var inst_48127 = inst_48152;
var inst_48128 = inst_48154;
var inst_48129 = (0);
var state_48250__$1 = (function (){var statearr_48343 = state_48250;
(statearr_48343[(13)] = inst_48127);

(statearr_48343[(15)] = inst_48128);

(statearr_48343[(16)] = inst_48129);

(statearr_48343[(17)] = inst_48126);

return statearr_48343;
})();
var statearr_48344_50009 = state_48250__$1;
(statearr_48344_50009[(2)] = null);

(statearr_48344_50009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (11))){
var inst_48148 = (state_48250[(7)]);
var inst_48126 = (state_48250[(17)]);
var inst_48148__$1 = cljs.core.seq(inst_48126);
var state_48250__$1 = (function (){var statearr_48345 = state_48250;
(statearr_48345[(7)] = inst_48148__$1);

return statearr_48345;
})();
if(inst_48148__$1){
var statearr_48346_50010 = state_48250__$1;
(statearr_48346_50010[(1)] = (16));

} else {
var statearr_48347_50015 = state_48250__$1;
(statearr_48347_50015[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (9))){
var inst_48178 = (state_48250[(2)]);
var state_48250__$1 = state_48250;
var statearr_48351_50016 = state_48250__$1;
(statearr_48351_50016[(2)] = inst_48178);

(statearr_48351_50016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (5))){
var inst_48124 = cljs.core.deref(cs);
var inst_48125 = cljs.core.seq(inst_48124);
var inst_48126 = inst_48125;
var inst_48127 = null;
var inst_48128 = (0);
var inst_48129 = (0);
var state_48250__$1 = (function (){var statearr_48357 = state_48250;
(statearr_48357[(13)] = inst_48127);

(statearr_48357[(15)] = inst_48128);

(statearr_48357[(16)] = inst_48129);

(statearr_48357[(17)] = inst_48126);

return statearr_48357;
})();
var statearr_48358_50018 = state_48250__$1;
(statearr_48358_50018[(2)] = null);

(statearr_48358_50018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (14))){
var state_48250__$1 = state_48250;
var statearr_48359_50019 = state_48250__$1;
(statearr_48359_50019[(2)] = null);

(statearr_48359_50019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (45))){
var inst_48238 = (state_48250[(2)]);
var state_48250__$1 = state_48250;
var statearr_48360_50020 = state_48250__$1;
(statearr_48360_50020[(2)] = inst_48238);

(statearr_48360_50020[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (26))){
var inst_48181 = (state_48250[(27)]);
var inst_48233 = (state_48250[(2)]);
var inst_48234 = cljs.core.seq(inst_48181);
var state_48250__$1 = (function (){var statearr_48361 = state_48250;
(statearr_48361[(29)] = inst_48233);

return statearr_48361;
})();
if(inst_48234){
var statearr_48362_50024 = state_48250__$1;
(statearr_48362_50024[(1)] = (42));

} else {
var statearr_48363_50029 = state_48250__$1;
(statearr_48363_50029[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (16))){
var inst_48148 = (state_48250[(7)]);
var inst_48150 = cljs.core.chunked_seq_QMARK_(inst_48148);
var state_48250__$1 = state_48250;
if(inst_48150){
var statearr_48365_50033 = state_48250__$1;
(statearr_48365_50033[(1)] = (19));

} else {
var statearr_48366_50034 = state_48250__$1;
(statearr_48366_50034[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (38))){
var inst_48226 = (state_48250[(2)]);
var state_48250__$1 = state_48250;
var statearr_48367_50035 = state_48250__$1;
(statearr_48367_50035[(2)] = inst_48226);

(statearr_48367_50035[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (30))){
var state_48250__$1 = state_48250;
var statearr_48368_50039 = state_48250__$1;
(statearr_48368_50039[(2)] = null);

(statearr_48368_50039[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (10))){
var inst_48127 = (state_48250[(13)]);
var inst_48129 = (state_48250[(16)]);
var inst_48137 = cljs.core._nth(inst_48127,inst_48129);
var inst_48138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48137,(0),null);
var inst_48139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48137,(1),null);
var state_48250__$1 = (function (){var statearr_48371 = state_48250;
(statearr_48371[(24)] = inst_48138);

return statearr_48371;
})();
if(cljs.core.truth_(inst_48139)){
var statearr_48372_50044 = state_48250__$1;
(statearr_48372_50044[(1)] = (13));

} else {
var statearr_48373_50045 = state_48250__$1;
(statearr_48373_50045[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (18))){
var inst_48174 = (state_48250[(2)]);
var state_48250__$1 = state_48250;
var statearr_48374_50047 = state_48250__$1;
(statearr_48374_50047[(2)] = inst_48174);

(statearr_48374_50047[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (42))){
var state_48250__$1 = state_48250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48250__$1,(45),dchan);
} else {
if((state_val_48251 === (37))){
var inst_48117 = (state_48250[(10)]);
var inst_48207 = (state_48250[(23)]);
var inst_48216 = (state_48250[(22)]);
var inst_48216__$1 = cljs.core.first(inst_48207);
var inst_48217 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48216__$1,inst_48117,done);
var state_48250__$1 = (function (){var statearr_48375 = state_48250;
(statearr_48375[(22)] = inst_48216__$1);

return statearr_48375;
})();
if(cljs.core.truth_(inst_48217)){
var statearr_48377_50051 = state_48250__$1;
(statearr_48377_50051[(1)] = (39));

} else {
var statearr_48380_50054 = state_48250__$1;
(statearr_48380_50054[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48251 === (8))){
var inst_48128 = (state_48250[(15)]);
var inst_48129 = (state_48250[(16)]);
var inst_48131 = (inst_48129 < inst_48128);
var inst_48132 = inst_48131;
var state_48250__$1 = state_48250;
if(cljs.core.truth_(inst_48132)){
var statearr_48381_50057 = state_48250__$1;
(statearr_48381_50057[(1)] = (10));

} else {
var statearr_48382_50058 = state_48250__$1;
(statearr_48382_50058[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__41531__auto__ = null;
var cljs$core$async$mult_$_state_machine__41531__auto____0 = (function (){
var statearr_48383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48383[(0)] = cljs$core$async$mult_$_state_machine__41531__auto__);

(statearr_48383[(1)] = (1));

return statearr_48383;
});
var cljs$core$async$mult_$_state_machine__41531__auto____1 = (function (state_48250){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_48250);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e48386){var ex__41534__auto__ = e48386;
var statearr_48387_50061 = state_48250;
(statearr_48387_50061[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_48250[(4)]))){
var statearr_48390_50062 = state_48250;
(statearr_48390_50062[(1)] = cljs.core.first((state_48250[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50066 = state_48250;
state_48250 = G__50066;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__41531__auto__ = function(state_48250){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__41531__auto____1.call(this,state_48250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__41531__auto____0;
cljs$core$async$mult_$_state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__41531__auto____1;
return cljs$core$async$mult_$_state_machine__41531__auto__;
})()
})();
var state__41617__auto__ = (function (){var statearr_48392 = f__41616__auto__();
(statearr_48392[(6)] = c__41615__auto___49902);

return statearr_48392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
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
var G__48394 = arguments.length;
switch (G__48394) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_50078 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_50078(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_50079 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_50079(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_50080 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_50080(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_50081 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_50081(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_50082 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_50082(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50089 = arguments.length;
var i__4865__auto___50090 = (0);
while(true){
if((i__4865__auto___50090 < len__4864__auto___50089)){
args__4870__auto__.push((arguments[i__4865__auto___50090]));

var G__50091 = (i__4865__auto___50090 + (1));
i__4865__auto___50090 = G__50091;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48441){
var map__48442 = p__48441;
var map__48442__$1 = cljs.core.__destructure_map(map__48442);
var opts = map__48442__$1;
var statearr_48443_50092 = state;
(statearr_48443_50092[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_48444_50093 = state;
(statearr_48444_50093[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_48445_50094 = state;
(statearr_48445_50094[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48436){
var G__48437 = cljs.core.first(seq48436);
var seq48436__$1 = cljs.core.next(seq48436);
var G__48438 = cljs.core.first(seq48436__$1);
var seq48436__$2 = cljs.core.next(seq48436__$1);
var G__48439 = cljs.core.first(seq48436__$2);
var seq48436__$3 = cljs.core.next(seq48436__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48437,G__48438,G__48439,seq48436__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48469 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48469 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48470){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48470 = meta48470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48471,meta48470__$1){
var self__ = this;
var _48471__$1 = this;
return (new cljs.core.async.t_cljs$core$async48469(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48470__$1));
}));

(cljs.core.async.t_cljs$core$async48469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48471){
var self__ = this;
var _48471__$1 = this;
return self__.meta48470;
}));

(cljs.core.async.t_cljs$core$async48469.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48469.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async48469.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48469.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48469.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48469.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48469.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48469.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48470","meta48470",-1933323195,null)], null);
}));

(cljs.core.async.t_cljs$core$async48469.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48469");

(cljs.core.async.t_cljs$core$async48469.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48469");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48469.
 */
cljs.core.async.__GT_t_cljs$core$async48469 = (function cljs$core$async$mix_$___GT_t_cljs$core$async48469(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48470){
return (new cljs.core.async.t_cljs$core$async48469(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48470));
});

}

return (new cljs.core.async.t_cljs$core$async48469(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41615__auto___50103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = (function (state_48544){
var state_val_48545 = (state_48544[(1)]);
if((state_val_48545 === (7))){
var inst_48503 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
if(cljs.core.truth_(inst_48503)){
var statearr_48546_50104 = state_48544__$1;
(statearr_48546_50104[(1)] = (8));

} else {
var statearr_48547_50106 = state_48544__$1;
(statearr_48547_50106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (20))){
var inst_48496 = (state_48544[(7)]);
var state_48544__$1 = state_48544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48544__$1,(23),out,inst_48496);
} else {
if((state_val_48545 === (1))){
var inst_48478 = calc_state();
var inst_48479 = cljs.core.__destructure_map(inst_48478);
var inst_48480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48479,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48479,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48479,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48483 = inst_48478;
var state_48544__$1 = (function (){var statearr_48549 = state_48544;
(statearr_48549[(8)] = inst_48480);

(statearr_48549[(9)] = inst_48481);

(statearr_48549[(10)] = inst_48483);

(statearr_48549[(11)] = inst_48482);

return statearr_48549;
})();
var statearr_48550_50125 = state_48544__$1;
(statearr_48550_50125[(2)] = null);

(statearr_48550_50125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (24))){
var inst_48486 = (state_48544[(12)]);
var inst_48483 = inst_48486;
var state_48544__$1 = (function (){var statearr_48551 = state_48544;
(statearr_48551[(10)] = inst_48483);

return statearr_48551;
})();
var statearr_48552_50126 = state_48544__$1;
(statearr_48552_50126[(2)] = null);

(statearr_48552_50126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (4))){
var inst_48496 = (state_48544[(7)]);
var inst_48498 = (state_48544[(13)]);
var inst_48495 = (state_48544[(2)]);
var inst_48496__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48495,(0),null);
var inst_48497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48495,(1),null);
var inst_48498__$1 = (inst_48496__$1 == null);
var state_48544__$1 = (function (){var statearr_48554 = state_48544;
(statearr_48554[(7)] = inst_48496__$1);

(statearr_48554[(13)] = inst_48498__$1);

(statearr_48554[(14)] = inst_48497);

return statearr_48554;
})();
if(cljs.core.truth_(inst_48498__$1)){
var statearr_48555_50127 = state_48544__$1;
(statearr_48555_50127[(1)] = (5));

} else {
var statearr_48556_50128 = state_48544__$1;
(statearr_48556_50128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (15))){
var inst_48487 = (state_48544[(15)]);
var inst_48517 = (state_48544[(16)]);
var inst_48517__$1 = cljs.core.empty_QMARK_(inst_48487);
var state_48544__$1 = (function (){var statearr_48557 = state_48544;
(statearr_48557[(16)] = inst_48517__$1);

return statearr_48557;
})();
if(inst_48517__$1){
var statearr_48558_50129 = state_48544__$1;
(statearr_48558_50129[(1)] = (17));

} else {
var statearr_48560_50130 = state_48544__$1;
(statearr_48560_50130[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (21))){
var inst_48486 = (state_48544[(12)]);
var inst_48483 = inst_48486;
var state_48544__$1 = (function (){var statearr_48561 = state_48544;
(statearr_48561[(10)] = inst_48483);

return statearr_48561;
})();
var statearr_48562_50131 = state_48544__$1;
(statearr_48562_50131[(2)] = null);

(statearr_48562_50131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (13))){
var inst_48510 = (state_48544[(2)]);
var inst_48511 = calc_state();
var inst_48483 = inst_48511;
var state_48544__$1 = (function (){var statearr_48563 = state_48544;
(statearr_48563[(17)] = inst_48510);

(statearr_48563[(10)] = inst_48483);

return statearr_48563;
})();
var statearr_48564_50132 = state_48544__$1;
(statearr_48564_50132[(2)] = null);

(statearr_48564_50132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (22))){
var inst_48538 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
var statearr_48566_50133 = state_48544__$1;
(statearr_48566_50133[(2)] = inst_48538);

(statearr_48566_50133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (6))){
var inst_48497 = (state_48544[(14)]);
var inst_48501 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48497,change);
var state_48544__$1 = state_48544;
var statearr_48567_50134 = state_48544__$1;
(statearr_48567_50134[(2)] = inst_48501);

(statearr_48567_50134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (25))){
var state_48544__$1 = state_48544;
var statearr_48568_50135 = state_48544__$1;
(statearr_48568_50135[(2)] = null);

(statearr_48568_50135[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (17))){
var inst_48488 = (state_48544[(18)]);
var inst_48497 = (state_48544[(14)]);
var inst_48519 = (inst_48488.cljs$core$IFn$_invoke$arity$1 ? inst_48488.cljs$core$IFn$_invoke$arity$1(inst_48497) : inst_48488.call(null,inst_48497));
var inst_48520 = cljs.core.not(inst_48519);
var state_48544__$1 = state_48544;
var statearr_48569_50136 = state_48544__$1;
(statearr_48569_50136[(2)] = inst_48520);

(statearr_48569_50136[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (3))){
var inst_48542 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48544__$1,inst_48542);
} else {
if((state_val_48545 === (12))){
var state_48544__$1 = state_48544;
var statearr_48571_50137 = state_48544__$1;
(statearr_48571_50137[(2)] = null);

(statearr_48571_50137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (2))){
var inst_48486 = (state_48544[(12)]);
var inst_48483 = (state_48544[(10)]);
var inst_48486__$1 = cljs.core.__destructure_map(inst_48483);
var inst_48487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48486__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48486__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48486__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48544__$1 = (function (){var statearr_48572 = state_48544;
(statearr_48572[(15)] = inst_48487);

(statearr_48572[(18)] = inst_48488);

(statearr_48572[(12)] = inst_48486__$1);

return statearr_48572;
})();
return cljs.core.async.ioc_alts_BANG_(state_48544__$1,(4),inst_48490);
} else {
if((state_val_48545 === (23))){
var inst_48528 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
if(cljs.core.truth_(inst_48528)){
var statearr_48573_50138 = state_48544__$1;
(statearr_48573_50138[(1)] = (24));

} else {
var statearr_48574_50139 = state_48544__$1;
(statearr_48574_50139[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (19))){
var inst_48523 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
var statearr_48576_50140 = state_48544__$1;
(statearr_48576_50140[(2)] = inst_48523);

(statearr_48576_50140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (11))){
var inst_48497 = (state_48544[(14)]);
var inst_48507 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_48497);
var state_48544__$1 = state_48544;
var statearr_48577_50141 = state_48544__$1;
(statearr_48577_50141[(2)] = inst_48507);

(statearr_48577_50141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (9))){
var inst_48487 = (state_48544[(15)]);
var inst_48514 = (state_48544[(19)]);
var inst_48497 = (state_48544[(14)]);
var inst_48514__$1 = (inst_48487.cljs$core$IFn$_invoke$arity$1 ? inst_48487.cljs$core$IFn$_invoke$arity$1(inst_48497) : inst_48487.call(null,inst_48497));
var state_48544__$1 = (function (){var statearr_48578 = state_48544;
(statearr_48578[(19)] = inst_48514__$1);

return statearr_48578;
})();
if(cljs.core.truth_(inst_48514__$1)){
var statearr_48579_50145 = state_48544__$1;
(statearr_48579_50145[(1)] = (14));

} else {
var statearr_48580_50146 = state_48544__$1;
(statearr_48580_50146[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (5))){
var inst_48498 = (state_48544[(13)]);
var state_48544__$1 = state_48544;
var statearr_48581_50151 = state_48544__$1;
(statearr_48581_50151[(2)] = inst_48498);

(statearr_48581_50151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (14))){
var inst_48514 = (state_48544[(19)]);
var state_48544__$1 = state_48544;
var statearr_48583_50152 = state_48544__$1;
(statearr_48583_50152[(2)] = inst_48514);

(statearr_48583_50152[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (26))){
var inst_48533 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
var statearr_48584_50154 = state_48544__$1;
(statearr_48584_50154[(2)] = inst_48533);

(statearr_48584_50154[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (16))){
var inst_48525 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
if(cljs.core.truth_(inst_48525)){
var statearr_48585_50155 = state_48544__$1;
(statearr_48585_50155[(1)] = (20));

} else {
var statearr_48586_50156 = state_48544__$1;
(statearr_48586_50156[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (10))){
var inst_48540 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
var statearr_48587_50157 = state_48544__$1;
(statearr_48587_50157[(2)] = inst_48540);

(statearr_48587_50157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (18))){
var inst_48517 = (state_48544[(16)]);
var state_48544__$1 = state_48544;
var statearr_48589_50158 = state_48544__$1;
(statearr_48589_50158[(2)] = inst_48517);

(statearr_48589_50158[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (8))){
var inst_48496 = (state_48544[(7)]);
var inst_48505 = (inst_48496 == null);
var state_48544__$1 = state_48544;
if(cljs.core.truth_(inst_48505)){
var statearr_48590_50159 = state_48544__$1;
(statearr_48590_50159[(1)] = (11));

} else {
var statearr_48591_50160 = state_48544__$1;
(statearr_48591_50160[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__41531__auto__ = null;
var cljs$core$async$mix_$_state_machine__41531__auto____0 = (function (){
var statearr_48592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48592[(0)] = cljs$core$async$mix_$_state_machine__41531__auto__);

(statearr_48592[(1)] = (1));

return statearr_48592;
});
var cljs$core$async$mix_$_state_machine__41531__auto____1 = (function (state_48544){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_48544);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e48594){var ex__41534__auto__ = e48594;
var statearr_48595_50170 = state_48544;
(statearr_48595_50170[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_48544[(4)]))){
var statearr_48596_50171 = state_48544;
(statearr_48596_50171[(1)] = cljs.core.first((state_48544[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50172 = state_48544;
state_48544 = G__50172;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__41531__auto__ = function(state_48544){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__41531__auto____1.call(this,state_48544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__41531__auto____0;
cljs$core$async$mix_$_state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__41531__auto____1;
return cljs$core$async$mix_$_state_machine__41531__auto__;
})()
})();
var state__41617__auto__ = (function (){var statearr_48597 = f__41616__auto__();
(statearr_48597[(6)] = c__41615__auto___50103);

return statearr_48597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_50175 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_50175(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_50177 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_50177(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_50179 = (function() {
var G__50181 = null;
var G__50181__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__50181__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__50181 = function(p,v){
switch(arguments.length){
case 1:
return G__50181__1.call(this,p);
case 2:
return G__50181__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50181.cljs$core$IFn$_invoke$arity$1 = G__50181__1;
G__50181.cljs$core$IFn$_invoke$arity$2 = G__50181__2;
return G__50181;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48605 = arguments.length;
switch (G__48605) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50179(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50179(p,v);
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
var G__48609 = arguments.length;
switch (G__48609) {
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
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__48607_SHARP_){
if(cljs.core.truth_((p1__48607_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48607_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48607_SHARP_.call(null,topic)))){
return p1__48607_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48607_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48613 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48613 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48614){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48614 = meta48614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48615,meta48614__$1){
var self__ = this;
var _48615__$1 = this;
return (new cljs.core.async.t_cljs$core$async48613(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48614__$1));
}));

(cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48615){
var self__ = this;
var _48615__$1 = this;
return self__.meta48614;
}));

(cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async48613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48614","meta48614",-613342802,null)], null);
}));

(cljs.core.async.t_cljs$core$async48613.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48613");

(cljs.core.async.t_cljs$core$async48613.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48613");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48613.
 */
cljs.core.async.__GT_t_cljs$core$async48613 = (function cljs$core$async$__GT_t_cljs$core$async48613(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48614){
return (new cljs.core.async.t_cljs$core$async48613(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48614));
});

}

return (new cljs.core.async.t_cljs$core$async48613(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41615__auto___50190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = (function (state_48691){
var state_val_48692 = (state_48691[(1)]);
if((state_val_48692 === (7))){
var inst_48687 = (state_48691[(2)]);
var state_48691__$1 = state_48691;
var statearr_48699_50191 = state_48691__$1;
(statearr_48699_50191[(2)] = inst_48687);

(statearr_48699_50191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (20))){
var state_48691__$1 = state_48691;
var statearr_48703_50192 = state_48691__$1;
(statearr_48703_50192[(2)] = null);

(statearr_48703_50192[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (1))){
var state_48691__$1 = state_48691;
var statearr_48704_50193 = state_48691__$1;
(statearr_48704_50193[(2)] = null);

(statearr_48704_50193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (24))){
var inst_48670 = (state_48691[(7)]);
var inst_48679 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48670);
var state_48691__$1 = state_48691;
var statearr_48705_50201 = state_48691__$1;
(statearr_48705_50201[(2)] = inst_48679);

(statearr_48705_50201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (4))){
var inst_48622 = (state_48691[(8)]);
var inst_48622__$1 = (state_48691[(2)]);
var inst_48623 = (inst_48622__$1 == null);
var state_48691__$1 = (function (){var statearr_48710 = state_48691;
(statearr_48710[(8)] = inst_48622__$1);

return statearr_48710;
})();
if(cljs.core.truth_(inst_48623)){
var statearr_48711_50202 = state_48691__$1;
(statearr_48711_50202[(1)] = (5));

} else {
var statearr_48713_50203 = state_48691__$1;
(statearr_48713_50203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (15))){
var inst_48664 = (state_48691[(2)]);
var state_48691__$1 = state_48691;
var statearr_48717_50205 = state_48691__$1;
(statearr_48717_50205[(2)] = inst_48664);

(statearr_48717_50205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (21))){
var inst_48684 = (state_48691[(2)]);
var state_48691__$1 = (function (){var statearr_48719 = state_48691;
(statearr_48719[(9)] = inst_48684);

return statearr_48719;
})();
var statearr_48723_50206 = state_48691__$1;
(statearr_48723_50206[(2)] = null);

(statearr_48723_50206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (13))){
var inst_48646 = (state_48691[(10)]);
var inst_48648 = cljs.core.chunked_seq_QMARK_(inst_48646);
var state_48691__$1 = state_48691;
if(inst_48648){
var statearr_48724_50207 = state_48691__$1;
(statearr_48724_50207[(1)] = (16));

} else {
var statearr_48725_50208 = state_48691__$1;
(statearr_48725_50208[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (22))){
var inst_48676 = (state_48691[(2)]);
var state_48691__$1 = state_48691;
if(cljs.core.truth_(inst_48676)){
var statearr_48726_50209 = state_48691__$1;
(statearr_48726_50209[(1)] = (23));

} else {
var statearr_48727_50210 = state_48691__$1;
(statearr_48727_50210[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (6))){
var inst_48622 = (state_48691[(8)]);
var inst_48672 = (state_48691[(11)]);
var inst_48670 = (state_48691[(7)]);
var inst_48670__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48622) : topic_fn.call(null,inst_48622));
var inst_48671 = cljs.core.deref(mults);
var inst_48672__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48671,inst_48670__$1);
var state_48691__$1 = (function (){var statearr_48728 = state_48691;
(statearr_48728[(11)] = inst_48672__$1);

(statearr_48728[(7)] = inst_48670__$1);

return statearr_48728;
})();
if(cljs.core.truth_(inst_48672__$1)){
var statearr_48729_50220 = state_48691__$1;
(statearr_48729_50220[(1)] = (19));

} else {
var statearr_48730_50221 = state_48691__$1;
(statearr_48730_50221[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (25))){
var inst_48681 = (state_48691[(2)]);
var state_48691__$1 = state_48691;
var statearr_48731_50223 = state_48691__$1;
(statearr_48731_50223[(2)] = inst_48681);

(statearr_48731_50223[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (17))){
var inst_48646 = (state_48691[(10)]);
var inst_48655 = cljs.core.first(inst_48646);
var inst_48656 = cljs.core.async.muxch_STAR_(inst_48655);
var inst_48657 = cljs.core.async.close_BANG_(inst_48656);
var inst_48658 = cljs.core.next(inst_48646);
var inst_48632 = inst_48658;
var inst_48633 = null;
var inst_48634 = (0);
var inst_48635 = (0);
var state_48691__$1 = (function (){var statearr_48732 = state_48691;
(statearr_48732[(12)] = inst_48633);

(statearr_48732[(13)] = inst_48657);

(statearr_48732[(14)] = inst_48634);

(statearr_48732[(15)] = inst_48632);

(statearr_48732[(16)] = inst_48635);

return statearr_48732;
})();
var statearr_48733_50228 = state_48691__$1;
(statearr_48733_50228[(2)] = null);

(statearr_48733_50228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (3))){
var inst_48689 = (state_48691[(2)]);
var state_48691__$1 = state_48691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48691__$1,inst_48689);
} else {
if((state_val_48692 === (12))){
var inst_48666 = (state_48691[(2)]);
var state_48691__$1 = state_48691;
var statearr_48734_50229 = state_48691__$1;
(statearr_48734_50229[(2)] = inst_48666);

(statearr_48734_50229[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (2))){
var state_48691__$1 = state_48691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48691__$1,(4),ch);
} else {
if((state_val_48692 === (23))){
var state_48691__$1 = state_48691;
var statearr_48735_50241 = state_48691__$1;
(statearr_48735_50241[(2)] = null);

(statearr_48735_50241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (19))){
var inst_48622 = (state_48691[(8)]);
var inst_48672 = (state_48691[(11)]);
var inst_48674 = cljs.core.async.muxch_STAR_(inst_48672);
var state_48691__$1 = state_48691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48691__$1,(22),inst_48674,inst_48622);
} else {
if((state_val_48692 === (11))){
var inst_48646 = (state_48691[(10)]);
var inst_48632 = (state_48691[(15)]);
var inst_48646__$1 = cljs.core.seq(inst_48632);
var state_48691__$1 = (function (){var statearr_48736 = state_48691;
(statearr_48736[(10)] = inst_48646__$1);

return statearr_48736;
})();
if(inst_48646__$1){
var statearr_48737_50242 = state_48691__$1;
(statearr_48737_50242[(1)] = (13));

} else {
var statearr_48738_50244 = state_48691__$1;
(statearr_48738_50244[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (9))){
var inst_48668 = (state_48691[(2)]);
var state_48691__$1 = state_48691;
var statearr_48739_50245 = state_48691__$1;
(statearr_48739_50245[(2)] = inst_48668);

(statearr_48739_50245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (5))){
var inst_48629 = cljs.core.deref(mults);
var inst_48630 = cljs.core.vals(inst_48629);
var inst_48631 = cljs.core.seq(inst_48630);
var inst_48632 = inst_48631;
var inst_48633 = null;
var inst_48634 = (0);
var inst_48635 = (0);
var state_48691__$1 = (function (){var statearr_48741 = state_48691;
(statearr_48741[(12)] = inst_48633);

(statearr_48741[(14)] = inst_48634);

(statearr_48741[(15)] = inst_48632);

(statearr_48741[(16)] = inst_48635);

return statearr_48741;
})();
var statearr_48743_50246 = state_48691__$1;
(statearr_48743_50246[(2)] = null);

(statearr_48743_50246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (14))){
var state_48691__$1 = state_48691;
var statearr_48749_50247 = state_48691__$1;
(statearr_48749_50247[(2)] = null);

(statearr_48749_50247[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (16))){
var inst_48646 = (state_48691[(10)]);
var inst_48650 = cljs.core.chunk_first(inst_48646);
var inst_48651 = cljs.core.chunk_rest(inst_48646);
var inst_48652 = cljs.core.count(inst_48650);
var inst_48632 = inst_48651;
var inst_48633 = inst_48650;
var inst_48634 = inst_48652;
var inst_48635 = (0);
var state_48691__$1 = (function (){var statearr_48752 = state_48691;
(statearr_48752[(12)] = inst_48633);

(statearr_48752[(14)] = inst_48634);

(statearr_48752[(15)] = inst_48632);

(statearr_48752[(16)] = inst_48635);

return statearr_48752;
})();
var statearr_48755_50250 = state_48691__$1;
(statearr_48755_50250[(2)] = null);

(statearr_48755_50250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (10))){
var inst_48633 = (state_48691[(12)]);
var inst_48634 = (state_48691[(14)]);
var inst_48632 = (state_48691[(15)]);
var inst_48635 = (state_48691[(16)]);
var inst_48640 = cljs.core._nth(inst_48633,inst_48635);
var inst_48641 = cljs.core.async.muxch_STAR_(inst_48640);
var inst_48642 = cljs.core.async.close_BANG_(inst_48641);
var inst_48643 = (inst_48635 + (1));
var tmp48746 = inst_48633;
var tmp48747 = inst_48634;
var tmp48748 = inst_48632;
var inst_48632__$1 = tmp48748;
var inst_48633__$1 = tmp48746;
var inst_48634__$1 = tmp48747;
var inst_48635__$1 = inst_48643;
var state_48691__$1 = (function (){var statearr_48757 = state_48691;
(statearr_48757[(12)] = inst_48633__$1);

(statearr_48757[(14)] = inst_48634__$1);

(statearr_48757[(17)] = inst_48642);

(statearr_48757[(15)] = inst_48632__$1);

(statearr_48757[(16)] = inst_48635__$1);

return statearr_48757;
})();
var statearr_48758_50256 = state_48691__$1;
(statearr_48758_50256[(2)] = null);

(statearr_48758_50256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (18))){
var inst_48661 = (state_48691[(2)]);
var state_48691__$1 = state_48691;
var statearr_48759_50257 = state_48691__$1;
(statearr_48759_50257[(2)] = inst_48661);

(statearr_48759_50257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48692 === (8))){
var inst_48634 = (state_48691[(14)]);
var inst_48635 = (state_48691[(16)]);
var inst_48637 = (inst_48635 < inst_48634);
var inst_48638 = inst_48637;
var state_48691__$1 = state_48691;
if(cljs.core.truth_(inst_48638)){
var statearr_48761_50263 = state_48691__$1;
(statearr_48761_50263[(1)] = (10));

} else {
var statearr_48762_50264 = state_48691__$1;
(statearr_48762_50264[(1)] = (11));

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
var cljs$core$async$state_machine__41531__auto__ = null;
var cljs$core$async$state_machine__41531__auto____0 = (function (){
var statearr_48766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48766[(0)] = cljs$core$async$state_machine__41531__auto__);

(statearr_48766[(1)] = (1));

return statearr_48766;
});
var cljs$core$async$state_machine__41531__auto____1 = (function (state_48691){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_48691);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e48767){var ex__41534__auto__ = e48767;
var statearr_48769_50271 = state_48691;
(statearr_48769_50271[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_48691[(4)]))){
var statearr_48771_50272 = state_48691;
(statearr_48771_50272[(1)] = cljs.core.first((state_48691[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50274 = state_48691;
state_48691 = G__50274;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$state_machine__41531__auto__ = function(state_48691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41531__auto____1.call(this,state_48691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41531__auto____0;
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41531__auto____1;
return cljs$core$async$state_machine__41531__auto__;
})()
})();
var state__41617__auto__ = (function (){var statearr_48774 = f__41616__auto__();
(statearr_48774[(6)] = c__41615__auto___50190);

return statearr_48774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
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
var G__48780 = arguments.length;
switch (G__48780) {
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
var G__48794 = arguments.length;
switch (G__48794) {
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
var G__48805 = arguments.length;
switch (G__48805) {
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
var c__41615__auto___50299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = (function (state_48866){
var state_val_48867 = (state_48866[(1)]);
if((state_val_48867 === (7))){
var state_48866__$1 = state_48866;
var statearr_48871_50301 = state_48866__$1;
(statearr_48871_50301[(2)] = null);

(statearr_48871_50301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48867 === (1))){
var state_48866__$1 = state_48866;
var statearr_48874_50302 = state_48866__$1;
(statearr_48874_50302[(2)] = null);

(statearr_48874_50302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48867 === (4))){
var inst_48818 = (state_48866[(7)]);
var inst_48817 = (state_48866[(8)]);
var inst_48820 = (inst_48818 < inst_48817);
var state_48866__$1 = state_48866;
if(cljs.core.truth_(inst_48820)){
var statearr_48878_50303 = state_48866__$1;
(statearr_48878_50303[(1)] = (6));

} else {
var statearr_48879_50304 = state_48866__$1;
(statearr_48879_50304[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48867 === (15))){
var inst_48850 = (state_48866[(9)]);
var inst_48856 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48850);
var state_48866__$1 = state_48866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48866__$1,(17),out,inst_48856);
} else {
if((state_val_48867 === (13))){
var inst_48850 = (state_48866[(9)]);
var inst_48850__$1 = (state_48866[(2)]);
var inst_48851 = cljs.core.some(cljs.core.nil_QMARK_,inst_48850__$1);
var state_48866__$1 = (function (){var statearr_48888 = state_48866;
(statearr_48888[(9)] = inst_48850__$1);

return statearr_48888;
})();
if(cljs.core.truth_(inst_48851)){
var statearr_48891_50305 = state_48866__$1;
(statearr_48891_50305[(1)] = (14));

} else {
var statearr_48893_50308 = state_48866__$1;
(statearr_48893_50308[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48867 === (6))){
var state_48866__$1 = state_48866;
var statearr_48894_50309 = state_48866__$1;
(statearr_48894_50309[(2)] = null);

(statearr_48894_50309[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48867 === (17))){
var inst_48858 = (state_48866[(2)]);
var state_48866__$1 = (function (){var statearr_48904 = state_48866;
(statearr_48904[(10)] = inst_48858);

return statearr_48904;
})();
var statearr_48905_50310 = state_48866__$1;
(statearr_48905_50310[(2)] = null);

(statearr_48905_50310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48867 === (3))){
var inst_48863 = (state_48866[(2)]);
var state_48866__$1 = state_48866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48866__$1,inst_48863);
} else {
if((state_val_48867 === (12))){
var _ = (function (){var statearr_48909 = state_48866;
(statearr_48909[(4)] = cljs.core.rest((state_48866[(4)])));

return statearr_48909;
})();
var state_48866__$1 = state_48866;
var ex48900 = (state_48866__$1[(2)]);
var statearr_48913_50314 = state_48866__$1;
(statearr_48913_50314[(5)] = ex48900);


if((ex48900 instanceof Object)){
var statearr_48915_50315 = state_48866__$1;
(statearr_48915_50315[(1)] = (11));

(statearr_48915_50315[(5)] = null);

} else {
throw ex48900;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48867 === (2))){
var inst_48815 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48817 = cnt;
var inst_48818 = (0);
var state_48866__$1 = (function (){var statearr_48922 = state_48866;
(statearr_48922[(11)] = inst_48815);

(statearr_48922[(7)] = inst_48818);

(statearr_48922[(8)] = inst_48817);

return statearr_48922;
})();
var statearr_48924_50317 = state_48866__$1;
(statearr_48924_50317[(2)] = null);

(statearr_48924_50317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48867 === (11))){
var inst_48826 = (state_48866[(2)]);
var inst_48827 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48866__$1 = (function (){var statearr_48926 = state_48866;
(statearr_48926[(12)] = inst_48826);

return statearr_48926;
})();
var statearr_48927_50319 = state_48866__$1;
(statearr_48927_50319[(2)] = inst_48827);

(statearr_48927_50319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48867 === (9))){
var inst_48818 = (state_48866[(7)]);
var _ = (function (){var statearr_48931 = state_48866;
(statearr_48931[(4)] = cljs.core.cons((12),(state_48866[(4)])));

return statearr_48931;
})();
var inst_48834 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48818) : chs__$1.call(null,inst_48818));
var inst_48835 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48818) : done.call(null,inst_48818));
var inst_48836 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48834,inst_48835);
var ___$1 = (function (){var statearr_48932 = state_48866;
(statearr_48932[(4)] = cljs.core.rest((state_48866[(4)])));

return statearr_48932;
})();
var state_48866__$1 = state_48866;
var statearr_48934_50321 = state_48866__$1;
(statearr_48934_50321[(2)] = inst_48836);

(statearr_48934_50321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48867 === (5))){
var inst_48846 = (state_48866[(2)]);
var state_48866__$1 = (function (){var statearr_48937 = state_48866;
(statearr_48937[(13)] = inst_48846);

return statearr_48937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48866__$1,(13),dchan);
} else {
if((state_val_48867 === (14))){
var inst_48854 = cljs.core.async.close_BANG_(out);
var state_48866__$1 = state_48866;
var statearr_48939_50322 = state_48866__$1;
(statearr_48939_50322[(2)] = inst_48854);

(statearr_48939_50322[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48867 === (16))){
var inst_48861 = (state_48866[(2)]);
var state_48866__$1 = state_48866;
var statearr_48941_50323 = state_48866__$1;
(statearr_48941_50323[(2)] = inst_48861);

(statearr_48941_50323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48867 === (10))){
var inst_48818 = (state_48866[(7)]);
var inst_48839 = (state_48866[(2)]);
var inst_48840 = (inst_48818 + (1));
var inst_48818__$1 = inst_48840;
var state_48866__$1 = (function (){var statearr_48942 = state_48866;
(statearr_48942[(7)] = inst_48818__$1);

(statearr_48942[(14)] = inst_48839);

return statearr_48942;
})();
var statearr_48945_50324 = state_48866__$1;
(statearr_48945_50324[(2)] = null);

(statearr_48945_50324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48867 === (8))){
var inst_48844 = (state_48866[(2)]);
var state_48866__$1 = state_48866;
var statearr_48947_50325 = state_48866__$1;
(statearr_48947_50325[(2)] = inst_48844);

(statearr_48947_50325[(1)] = (5));


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
var cljs$core$async$state_machine__41531__auto__ = null;
var cljs$core$async$state_machine__41531__auto____0 = (function (){
var statearr_48951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48951[(0)] = cljs$core$async$state_machine__41531__auto__);

(statearr_48951[(1)] = (1));

return statearr_48951;
});
var cljs$core$async$state_machine__41531__auto____1 = (function (state_48866){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_48866);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e48953){var ex__41534__auto__ = e48953;
var statearr_48954_50326 = state_48866;
(statearr_48954_50326[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_48866[(4)]))){
var statearr_48956_50327 = state_48866;
(statearr_48956_50327[(1)] = cljs.core.first((state_48866[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50328 = state_48866;
state_48866 = G__50328;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$state_machine__41531__auto__ = function(state_48866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41531__auto____1.call(this,state_48866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41531__auto____0;
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41531__auto____1;
return cljs$core$async$state_machine__41531__auto__;
})()
})();
var state__41617__auto__ = (function (){var statearr_48960 = f__41616__auto__();
(statearr_48960[(6)] = c__41615__auto___50299);

return statearr_48960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
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
var G__48967 = arguments.length;
switch (G__48967) {
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
var c__41615__auto___50334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = (function (state_49010){
var state_val_49011 = (state_49010[(1)]);
if((state_val_49011 === (7))){
var inst_48985 = (state_49010[(7)]);
var inst_48987 = (state_49010[(8)]);
var inst_48985__$1 = (state_49010[(2)]);
var inst_48987__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48985__$1,(0),null);
var inst_48989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48985__$1,(1),null);
var inst_48990 = (inst_48987__$1 == null);
var state_49010__$1 = (function (){var statearr_49016 = state_49010;
(statearr_49016[(7)] = inst_48985__$1);

(statearr_49016[(9)] = inst_48989);

(statearr_49016[(8)] = inst_48987__$1);

return statearr_49016;
})();
if(cljs.core.truth_(inst_48990)){
var statearr_49017_50336 = state_49010__$1;
(statearr_49017_50336[(1)] = (8));

} else {
var statearr_49018_50337 = state_49010__$1;
(statearr_49018_50337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49011 === (1))){
var inst_48975 = cljs.core.vec(chs);
var inst_48976 = inst_48975;
var state_49010__$1 = (function (){var statearr_49021 = state_49010;
(statearr_49021[(10)] = inst_48976);

return statearr_49021;
})();
var statearr_49023_50342 = state_49010__$1;
(statearr_49023_50342[(2)] = null);

(statearr_49023_50342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49011 === (4))){
var inst_48976 = (state_49010[(10)]);
var state_49010__$1 = state_49010;
return cljs.core.async.ioc_alts_BANG_(state_49010__$1,(7),inst_48976);
} else {
if((state_val_49011 === (6))){
var inst_49005 = (state_49010[(2)]);
var state_49010__$1 = state_49010;
var statearr_49025_50349 = state_49010__$1;
(statearr_49025_50349[(2)] = inst_49005);

(statearr_49025_50349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49011 === (3))){
var inst_49007 = (state_49010[(2)]);
var state_49010__$1 = state_49010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49010__$1,inst_49007);
} else {
if((state_val_49011 === (2))){
var inst_48976 = (state_49010[(10)]);
var inst_48978 = cljs.core.count(inst_48976);
var inst_48979 = (inst_48978 > (0));
var state_49010__$1 = state_49010;
if(cljs.core.truth_(inst_48979)){
var statearr_49030_50353 = state_49010__$1;
(statearr_49030_50353[(1)] = (4));

} else {
var statearr_49031_50354 = state_49010__$1;
(statearr_49031_50354[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49011 === (11))){
var inst_48976 = (state_49010[(10)]);
var inst_48998 = (state_49010[(2)]);
var tmp49026 = inst_48976;
var inst_48976__$1 = tmp49026;
var state_49010__$1 = (function (){var statearr_49033 = state_49010;
(statearr_49033[(11)] = inst_48998);

(statearr_49033[(10)] = inst_48976__$1);

return statearr_49033;
})();
var statearr_49034_50355 = state_49010__$1;
(statearr_49034_50355[(2)] = null);

(statearr_49034_50355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49011 === (9))){
var inst_48987 = (state_49010[(8)]);
var state_49010__$1 = state_49010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49010__$1,(11),out,inst_48987);
} else {
if((state_val_49011 === (5))){
var inst_49003 = cljs.core.async.close_BANG_(out);
var state_49010__$1 = state_49010;
var statearr_49039_50360 = state_49010__$1;
(statearr_49039_50360[(2)] = inst_49003);

(statearr_49039_50360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49011 === (10))){
var inst_49001 = (state_49010[(2)]);
var state_49010__$1 = state_49010;
var statearr_49042_50361 = state_49010__$1;
(statearr_49042_50361[(2)] = inst_49001);

(statearr_49042_50361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49011 === (8))){
var inst_48985 = (state_49010[(7)]);
var inst_48989 = (state_49010[(9)]);
var inst_48976 = (state_49010[(10)]);
var inst_48987 = (state_49010[(8)]);
var inst_48993 = (function (){var cs = inst_48976;
var vec__48981 = inst_48985;
var v = inst_48987;
var c = inst_48989;
return (function (p1__48962_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48962_SHARP_);
});
})();
var inst_48994 = cljs.core.filterv(inst_48993,inst_48976);
var inst_48976__$1 = inst_48994;
var state_49010__$1 = (function (){var statearr_49045 = state_49010;
(statearr_49045[(10)] = inst_48976__$1);

return statearr_49045;
})();
var statearr_49046_50366 = state_49010__$1;
(statearr_49046_50366[(2)] = null);

(statearr_49046_50366[(1)] = (2));


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
var cljs$core$async$state_machine__41531__auto__ = null;
var cljs$core$async$state_machine__41531__auto____0 = (function (){
var statearr_49050 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49050[(0)] = cljs$core$async$state_machine__41531__auto__);

(statearr_49050[(1)] = (1));

return statearr_49050;
});
var cljs$core$async$state_machine__41531__auto____1 = (function (state_49010){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_49010);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e49051){var ex__41534__auto__ = e49051;
var statearr_49052_50374 = state_49010;
(statearr_49052_50374[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_49010[(4)]))){
var statearr_49054_50375 = state_49010;
(statearr_49054_50375[(1)] = cljs.core.first((state_49010[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50376 = state_49010;
state_49010 = G__50376;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$state_machine__41531__auto__ = function(state_49010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41531__auto____1.call(this,state_49010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41531__auto____0;
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41531__auto____1;
return cljs$core$async$state_machine__41531__auto__;
})()
})();
var state__41617__auto__ = (function (){var statearr_49058 = f__41616__auto__();
(statearr_49058[(6)] = c__41615__auto___50334);

return statearr_49058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
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
var G__49063 = arguments.length;
switch (G__49063) {
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
var c__41615__auto___50385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = (function (state_49089){
var state_val_49090 = (state_49089[(1)]);
if((state_val_49090 === (7))){
var inst_49071 = (state_49089[(7)]);
var inst_49071__$1 = (state_49089[(2)]);
var inst_49072 = (inst_49071__$1 == null);
var inst_49073 = cljs.core.not(inst_49072);
var state_49089__$1 = (function (){var statearr_49095 = state_49089;
(statearr_49095[(7)] = inst_49071__$1);

return statearr_49095;
})();
if(inst_49073){
var statearr_49096_50386 = state_49089__$1;
(statearr_49096_50386[(1)] = (8));

} else {
var statearr_49098_50387 = state_49089__$1;
(statearr_49098_50387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (1))){
var inst_49066 = (0);
var state_49089__$1 = (function (){var statearr_49102 = state_49089;
(statearr_49102[(8)] = inst_49066);

return statearr_49102;
})();
var statearr_49103_50389 = state_49089__$1;
(statearr_49103_50389[(2)] = null);

(statearr_49103_50389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (4))){
var state_49089__$1 = state_49089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49089__$1,(7),ch);
} else {
if((state_val_49090 === (6))){
var inst_49084 = (state_49089[(2)]);
var state_49089__$1 = state_49089;
var statearr_49105_50394 = state_49089__$1;
(statearr_49105_50394[(2)] = inst_49084);

(statearr_49105_50394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (3))){
var inst_49086 = (state_49089[(2)]);
var inst_49087 = cljs.core.async.close_BANG_(out);
var state_49089__$1 = (function (){var statearr_49106 = state_49089;
(statearr_49106[(9)] = inst_49086);

return statearr_49106;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49089__$1,inst_49087);
} else {
if((state_val_49090 === (2))){
var inst_49066 = (state_49089[(8)]);
var inst_49068 = (inst_49066 < n);
var state_49089__$1 = state_49089;
if(cljs.core.truth_(inst_49068)){
var statearr_49107_50396 = state_49089__$1;
(statearr_49107_50396[(1)] = (4));

} else {
var statearr_49108_50397 = state_49089__$1;
(statearr_49108_50397[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (11))){
var inst_49066 = (state_49089[(8)]);
var inst_49076 = (state_49089[(2)]);
var inst_49077 = (inst_49066 + (1));
var inst_49066__$1 = inst_49077;
var state_49089__$1 = (function (){var statearr_49109 = state_49089;
(statearr_49109[(8)] = inst_49066__$1);

(statearr_49109[(10)] = inst_49076);

return statearr_49109;
})();
var statearr_49110_50398 = state_49089__$1;
(statearr_49110_50398[(2)] = null);

(statearr_49110_50398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (9))){
var state_49089__$1 = state_49089;
var statearr_49115_50399 = state_49089__$1;
(statearr_49115_50399[(2)] = null);

(statearr_49115_50399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (5))){
var state_49089__$1 = state_49089;
var statearr_49119_50400 = state_49089__$1;
(statearr_49119_50400[(2)] = null);

(statearr_49119_50400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (10))){
var inst_49081 = (state_49089[(2)]);
var state_49089__$1 = state_49089;
var statearr_49121_50401 = state_49089__$1;
(statearr_49121_50401[(2)] = inst_49081);

(statearr_49121_50401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49090 === (8))){
var inst_49071 = (state_49089[(7)]);
var state_49089__$1 = state_49089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49089__$1,(11),out,inst_49071);
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
var cljs$core$async$state_machine__41531__auto__ = null;
var cljs$core$async$state_machine__41531__auto____0 = (function (){
var statearr_49122 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49122[(0)] = cljs$core$async$state_machine__41531__auto__);

(statearr_49122[(1)] = (1));

return statearr_49122;
});
var cljs$core$async$state_machine__41531__auto____1 = (function (state_49089){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_49089);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e49123){var ex__41534__auto__ = e49123;
var statearr_49124_50407 = state_49089;
(statearr_49124_50407[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_49089[(4)]))){
var statearr_49125_50408 = state_49089;
(statearr_49125_50408[(1)] = cljs.core.first((state_49089[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50414 = state_49089;
state_49089 = G__50414;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$state_machine__41531__auto__ = function(state_49089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41531__auto____1.call(this,state_49089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41531__auto____0;
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41531__auto____1;
return cljs$core$async$state_machine__41531__auto__;
})()
})();
var state__41617__auto__ = (function (){var statearr_49130 = f__41616__auto__();
(statearr_49130[(6)] = c__41615__auto___50385);

return statearr_49130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49136 = (function (f,ch,meta49137){
this.f = f;
this.ch = ch;
this.meta49137 = meta49137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49138,meta49137__$1){
var self__ = this;
var _49138__$1 = this;
return (new cljs.core.async.t_cljs$core$async49136(self__.f,self__.ch,meta49137__$1));
}));

(cljs.core.async.t_cljs$core$async49136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49138){
var self__ = this;
var _49138__$1 = this;
return self__.meta49137;
}));

(cljs.core.async.t_cljs$core$async49136.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49136.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49136.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49136.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49136.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49143 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49143 = (function (f,ch,meta49137,_,fn1,meta49144){
this.f = f;
this.ch = ch;
this.meta49137 = meta49137;
this._ = _;
this.fn1 = fn1;
this.meta49144 = meta49144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49145,meta49144__$1){
var self__ = this;
var _49145__$1 = this;
return (new cljs.core.async.t_cljs$core$async49143(self__.f,self__.ch,self__.meta49137,self__._,self__.fn1,meta49144__$1));
}));

(cljs.core.async.t_cljs$core$async49143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49145){
var self__ = this;
var _49145__$1 = this;
return self__.meta49144;
}));

(cljs.core.async.t_cljs$core$async49143.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49143.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async49143.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49143.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__49131_SHARP_){
var G__49147 = (((p1__49131_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49131_SHARP_) : self__.f.call(null,p1__49131_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__49147) : f1.call(null,G__49147));
});
}));

(cljs.core.async.t_cljs$core$async49143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49137","meta49137",-439334140,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49136","cljs.core.async/t_cljs$core$async49136",-1629579201,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49144","meta49144",1044636800,null)], null);
}));

(cljs.core.async.t_cljs$core$async49143.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49143");

(cljs.core.async.t_cljs$core$async49143.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49143");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49143.
 */
cljs.core.async.__GT_t_cljs$core$async49143 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49143(f__$1,ch__$1,meta49137__$1,___$2,fn1__$1,meta49144){
return (new cljs.core.async.t_cljs$core$async49143(f__$1,ch__$1,meta49137__$1,___$2,fn1__$1,meta49144));
});

}

return (new cljs.core.async.t_cljs$core$async49143(self__.f,self__.ch,self__.meta49137,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__49156 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__49156) : self__.f.call(null,G__49156));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async49136.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49136.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async49136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49137","meta49137",-439334140,null)], null);
}));

(cljs.core.async.t_cljs$core$async49136.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49136");

(cljs.core.async.t_cljs$core$async49136.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49136");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49136.
 */
cljs.core.async.__GT_t_cljs$core$async49136 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49136(f__$1,ch__$1,meta49137){
return (new cljs.core.async.t_cljs$core$async49136(f__$1,ch__$1,meta49137));
});

}

return (new cljs.core.async.t_cljs$core$async49136(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49165 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49165 = (function (f,ch,meta49166){
this.f = f;
this.ch = ch;
this.meta49166 = meta49166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49167,meta49166__$1){
var self__ = this;
var _49167__$1 = this;
return (new cljs.core.async.t_cljs$core$async49165(self__.f,self__.ch,meta49166__$1));
}));

(cljs.core.async.t_cljs$core$async49165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49167){
var self__ = this;
var _49167__$1 = this;
return self__.meta49166;
}));

(cljs.core.async.t_cljs$core$async49165.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49165.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49165.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49165.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49165.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49165.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async49165.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49166","meta49166",1126484039,null)], null);
}));

(cljs.core.async.t_cljs$core$async49165.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49165");

(cljs.core.async.t_cljs$core$async49165.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49165");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49165.
 */
cljs.core.async.__GT_t_cljs$core$async49165 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49165(f__$1,ch__$1,meta49166){
return (new cljs.core.async.t_cljs$core$async49165(f__$1,ch__$1,meta49166));
});

}

return (new cljs.core.async.t_cljs$core$async49165(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49177 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49177 = (function (p,ch,meta49178){
this.p = p;
this.ch = ch;
this.meta49178 = meta49178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49179,meta49178__$1){
var self__ = this;
var _49179__$1 = this;
return (new cljs.core.async.t_cljs$core$async49177(self__.p,self__.ch,meta49178__$1));
}));

(cljs.core.async.t_cljs$core$async49177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49179){
var self__ = this;
var _49179__$1 = this;
return self__.meta49178;
}));

(cljs.core.async.t_cljs$core$async49177.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49177.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49177.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49177.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49177.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49177.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49177.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async49177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49178","meta49178",-2098691040,null)], null);
}));

(cljs.core.async.t_cljs$core$async49177.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49177");

(cljs.core.async.t_cljs$core$async49177.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49177");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49177.
 */
cljs.core.async.__GT_t_cljs$core$async49177 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49177(p__$1,ch__$1,meta49178){
return (new cljs.core.async.t_cljs$core$async49177(p__$1,ch__$1,meta49178));
});

}

return (new cljs.core.async.t_cljs$core$async49177(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__49197 = arguments.length;
switch (G__49197) {
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
var c__41615__auto___50442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = (function (state_49218){
var state_val_49219 = (state_49218[(1)]);
if((state_val_49219 === (7))){
var inst_49214 = (state_49218[(2)]);
var state_49218__$1 = state_49218;
var statearr_49221_50443 = state_49218__$1;
(statearr_49221_50443[(2)] = inst_49214);

(statearr_49221_50443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (1))){
var state_49218__$1 = state_49218;
var statearr_49222_50444 = state_49218__$1;
(statearr_49222_50444[(2)] = null);

(statearr_49222_50444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (4))){
var inst_49200 = (state_49218[(7)]);
var inst_49200__$1 = (state_49218[(2)]);
var inst_49201 = (inst_49200__$1 == null);
var state_49218__$1 = (function (){var statearr_49223 = state_49218;
(statearr_49223[(7)] = inst_49200__$1);

return statearr_49223;
})();
if(cljs.core.truth_(inst_49201)){
var statearr_49224_50445 = state_49218__$1;
(statearr_49224_50445[(1)] = (5));

} else {
var statearr_49225_50446 = state_49218__$1;
(statearr_49225_50446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (6))){
var inst_49200 = (state_49218[(7)]);
var inst_49205 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49200) : p.call(null,inst_49200));
var state_49218__$1 = state_49218;
if(cljs.core.truth_(inst_49205)){
var statearr_49226_50447 = state_49218__$1;
(statearr_49226_50447[(1)] = (8));

} else {
var statearr_49227_50448 = state_49218__$1;
(statearr_49227_50448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (3))){
var inst_49216 = (state_49218[(2)]);
var state_49218__$1 = state_49218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49218__$1,inst_49216);
} else {
if((state_val_49219 === (2))){
var state_49218__$1 = state_49218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49218__$1,(4),ch);
} else {
if((state_val_49219 === (11))){
var inst_49208 = (state_49218[(2)]);
var state_49218__$1 = state_49218;
var statearr_49232_50449 = state_49218__$1;
(statearr_49232_50449[(2)] = inst_49208);

(statearr_49232_50449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (9))){
var state_49218__$1 = state_49218;
var statearr_49236_50454 = state_49218__$1;
(statearr_49236_50454[(2)] = null);

(statearr_49236_50454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (5))){
var inst_49203 = cljs.core.async.close_BANG_(out);
var state_49218__$1 = state_49218;
var statearr_49238_50458 = state_49218__$1;
(statearr_49238_50458[(2)] = inst_49203);

(statearr_49238_50458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (10))){
var inst_49211 = (state_49218[(2)]);
var state_49218__$1 = (function (){var statearr_49239 = state_49218;
(statearr_49239[(8)] = inst_49211);

return statearr_49239;
})();
var statearr_49240_50460 = state_49218__$1;
(statearr_49240_50460[(2)] = null);

(statearr_49240_50460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (8))){
var inst_49200 = (state_49218[(7)]);
var state_49218__$1 = state_49218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49218__$1,(11),out,inst_49200);
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
var cljs$core$async$state_machine__41531__auto__ = null;
var cljs$core$async$state_machine__41531__auto____0 = (function (){
var statearr_49244 = [null,null,null,null,null,null,null,null,null];
(statearr_49244[(0)] = cljs$core$async$state_machine__41531__auto__);

(statearr_49244[(1)] = (1));

return statearr_49244;
});
var cljs$core$async$state_machine__41531__auto____1 = (function (state_49218){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_49218);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e49246){var ex__41534__auto__ = e49246;
var statearr_49247_50461 = state_49218;
(statearr_49247_50461[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_49218[(4)]))){
var statearr_49248_50462 = state_49218;
(statearr_49248_50462[(1)] = cljs.core.first((state_49218[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50463 = state_49218;
state_49218 = G__50463;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$state_machine__41531__auto__ = function(state_49218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41531__auto____1.call(this,state_49218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41531__auto____0;
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41531__auto____1;
return cljs$core$async$state_machine__41531__auto__;
})()
})();
var state__41617__auto__ = (function (){var statearr_49252 = f__41616__auto__();
(statearr_49252[(6)] = c__41615__auto___50442);

return statearr_49252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49255 = arguments.length;
switch (G__49255) {
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
var c__41615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = (function (state_49326){
var state_val_49327 = (state_49326[(1)]);
if((state_val_49327 === (7))){
var inst_49321 = (state_49326[(2)]);
var state_49326__$1 = state_49326;
var statearr_49328_50470 = state_49326__$1;
(statearr_49328_50470[(2)] = inst_49321);

(statearr_49328_50470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49327 === (20))){
var inst_49287 = (state_49326[(7)]);
var inst_49302 = (state_49326[(2)]);
var inst_49303 = cljs.core.next(inst_49287);
var inst_49273 = inst_49303;
var inst_49274 = null;
var inst_49275 = (0);
var inst_49276 = (0);
var state_49326__$1 = (function (){var statearr_49329 = state_49326;
(statearr_49329[(8)] = inst_49302);

(statearr_49329[(9)] = inst_49275);

(statearr_49329[(10)] = inst_49273);

(statearr_49329[(11)] = inst_49274);

(statearr_49329[(12)] = inst_49276);

return statearr_49329;
})();
var statearr_49330_50471 = state_49326__$1;
(statearr_49330_50471[(2)] = null);

(statearr_49330_50471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49327 === (1))){
var state_49326__$1 = state_49326;
var statearr_49331_50472 = state_49326__$1;
(statearr_49331_50472[(2)] = null);

(statearr_49331_50472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49327 === (4))){
var inst_49262 = (state_49326[(13)]);
var inst_49262__$1 = (state_49326[(2)]);
var inst_49263 = (inst_49262__$1 == null);
var state_49326__$1 = (function (){var statearr_49332 = state_49326;
(statearr_49332[(13)] = inst_49262__$1);

return statearr_49332;
})();
if(cljs.core.truth_(inst_49263)){
var statearr_49333_50473 = state_49326__$1;
(statearr_49333_50473[(1)] = (5));

} else {
var statearr_49335_50474 = state_49326__$1;
(statearr_49335_50474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49327 === (15))){
var state_49326__$1 = state_49326;
var statearr_49340_50475 = state_49326__$1;
(statearr_49340_50475[(2)] = null);

(statearr_49340_50475[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49327 === (21))){
var state_49326__$1 = state_49326;
var statearr_49341_50476 = state_49326__$1;
(statearr_49341_50476[(2)] = null);

(statearr_49341_50476[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49327 === (13))){
var inst_49275 = (state_49326[(9)]);
var inst_49273 = (state_49326[(10)]);
var inst_49274 = (state_49326[(11)]);
var inst_49276 = (state_49326[(12)]);
var inst_49283 = (state_49326[(2)]);
var inst_49284 = (inst_49276 + (1));
var tmp49336 = inst_49275;
var tmp49337 = inst_49273;
var tmp49338 = inst_49274;
var inst_49273__$1 = tmp49337;
var inst_49274__$1 = tmp49338;
var inst_49275__$1 = tmp49336;
var inst_49276__$1 = inst_49284;
var state_49326__$1 = (function (){var statearr_49342 = state_49326;
(statearr_49342[(9)] = inst_49275__$1);

(statearr_49342[(10)] = inst_49273__$1);

(statearr_49342[(11)] = inst_49274__$1);

(statearr_49342[(12)] = inst_49276__$1);

(statearr_49342[(14)] = inst_49283);

return statearr_49342;
})();
var statearr_49343_50477 = state_49326__$1;
(statearr_49343_50477[(2)] = null);

(statearr_49343_50477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49327 === (22))){
var state_49326__$1 = state_49326;
var statearr_49344_50478 = state_49326__$1;
(statearr_49344_50478[(2)] = null);

(statearr_49344_50478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49327 === (6))){
var inst_49262 = (state_49326[(13)]);
var inst_49271 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49262) : f.call(null,inst_49262));
var inst_49272 = cljs.core.seq(inst_49271);
var inst_49273 = inst_49272;
var inst_49274 = null;
var inst_49275 = (0);
var inst_49276 = (0);
var state_49326__$1 = (function (){var statearr_49345 = state_49326;
(statearr_49345[(9)] = inst_49275);

(statearr_49345[(10)] = inst_49273);

(statearr_49345[(11)] = inst_49274);

(statearr_49345[(12)] = inst_49276);

return statearr_49345;
})();
var statearr_49346_50479 = state_49326__$1;
(statearr_49346_50479[(2)] = null);

(statearr_49346_50479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49327 === (17))){
var inst_49287 = (state_49326[(7)]);
var inst_49295 = cljs.core.chunk_first(inst_49287);
var inst_49296 = cljs.core.chunk_rest(inst_49287);
var inst_49297 = cljs.core.count(inst_49295);
var inst_49273 = inst_49296;
var inst_49274 = inst_49295;
var inst_49275 = inst_49297;
var inst_49276 = (0);
var state_49326__$1 = (function (){var statearr_49347 = state_49326;
(statearr_49347[(9)] = inst_49275);

(statearr_49347[(10)] = inst_49273);

(statearr_49347[(11)] = inst_49274);

(statearr_49347[(12)] = inst_49276);

return statearr_49347;
})();
var statearr_49348_50480 = state_49326__$1;
(statearr_49348_50480[(2)] = null);

(statearr_49348_50480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49327 === (3))){
var inst_49323 = (state_49326[(2)]);
var state_49326__$1 = state_49326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49326__$1,inst_49323);
} else {
if((state_val_49327 === (12))){
var inst_49311 = (state_49326[(2)]);
var state_49326__$1 = state_49326;
var statearr_49349_50481 = state_49326__$1;
(statearr_49349_50481[(2)] = inst_49311);

(statearr_49349_50481[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49327 === (2))){
var state_49326__$1 = state_49326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49326__$1,(4),in$);
} else {
if((state_val_49327 === (23))){
var inst_49319 = (state_49326[(2)]);
var state_49326__$1 = state_49326;
var statearr_49350_50482 = state_49326__$1;
(statearr_49350_50482[(2)] = inst_49319);

(statearr_49350_50482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49327 === (19))){
var inst_49306 = (state_49326[(2)]);
var state_49326__$1 = state_49326;
var statearr_49351_50483 = state_49326__$1;
(statearr_49351_50483[(2)] = inst_49306);

(statearr_49351_50483[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49327 === (11))){
var inst_49287 = (state_49326[(7)]);
var inst_49273 = (state_49326[(10)]);
var inst_49287__$1 = cljs.core.seq(inst_49273);
var state_49326__$1 = (function (){var statearr_49352 = state_49326;
(statearr_49352[(7)] = inst_49287__$1);

return statearr_49352;
})();
if(inst_49287__$1){
var statearr_49353_50484 = state_49326__$1;
(statearr_49353_50484[(1)] = (14));

} else {
var statearr_49354_50485 = state_49326__$1;
(statearr_49354_50485[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49327 === (9))){
var inst_49313 = (state_49326[(2)]);
var inst_49314 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_49326__$1 = (function (){var statearr_49355 = state_49326;
(statearr_49355[(15)] = inst_49313);

return statearr_49355;
})();
if(cljs.core.truth_(inst_49314)){
var statearr_49356_50486 = state_49326__$1;
(statearr_49356_50486[(1)] = (21));

} else {
var statearr_49357_50487 = state_49326__$1;
(statearr_49357_50487[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49327 === (5))){
var inst_49265 = cljs.core.async.close_BANG_(out);
var state_49326__$1 = state_49326;
var statearr_49358_50488 = state_49326__$1;
(statearr_49358_50488[(2)] = inst_49265);

(statearr_49358_50488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49327 === (14))){
var inst_49287 = (state_49326[(7)]);
var inst_49293 = cljs.core.chunked_seq_QMARK_(inst_49287);
var state_49326__$1 = state_49326;
if(inst_49293){
var statearr_49359_50491 = state_49326__$1;
(statearr_49359_50491[(1)] = (17));

} else {
var statearr_49360_50492 = state_49326__$1;
(statearr_49360_50492[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49327 === (16))){
var inst_49309 = (state_49326[(2)]);
var state_49326__$1 = state_49326;
var statearr_49361_50493 = state_49326__$1;
(statearr_49361_50493[(2)] = inst_49309);

(statearr_49361_50493[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49327 === (10))){
var inst_49274 = (state_49326[(11)]);
var inst_49276 = (state_49326[(12)]);
var inst_49281 = cljs.core._nth(inst_49274,inst_49276);
var state_49326__$1 = state_49326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49326__$1,(13),out,inst_49281);
} else {
if((state_val_49327 === (18))){
var inst_49287 = (state_49326[(7)]);
var inst_49300 = cljs.core.first(inst_49287);
var state_49326__$1 = state_49326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49326__$1,(20),out,inst_49300);
} else {
if((state_val_49327 === (8))){
var inst_49275 = (state_49326[(9)]);
var inst_49276 = (state_49326[(12)]);
var inst_49278 = (inst_49276 < inst_49275);
var inst_49279 = inst_49278;
var state_49326__$1 = state_49326;
if(cljs.core.truth_(inst_49279)){
var statearr_49362_50497 = state_49326__$1;
(statearr_49362_50497[(1)] = (10));

} else {
var statearr_49363_50498 = state_49326__$1;
(statearr_49363_50498[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__41531__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__41531__auto____0 = (function (){
var statearr_49364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49364[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__41531__auto__);

(statearr_49364[(1)] = (1));

return statearr_49364;
});
var cljs$core$async$mapcat_STAR__$_state_machine__41531__auto____1 = (function (state_49326){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_49326);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e49366){var ex__41534__auto__ = e49366;
var statearr_49367_50502 = state_49326;
(statearr_49367_50502[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_49326[(4)]))){
var statearr_49368_50503 = state_49326;
(statearr_49368_50503[(1)] = cljs.core.first((state_49326[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50504 = state_49326;
state_49326 = G__50504;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__41531__auto__ = function(state_49326){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__41531__auto____1.call(this,state_49326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__41531__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__41531__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__41531__auto__;
})()
})();
var state__41617__auto__ = (function (){var statearr_49370 = f__41616__auto__();
(statearr_49370[(6)] = c__41615__auto__);

return statearr_49370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
}));

return c__41615__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49372 = arguments.length;
switch (G__49372) {
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
var G__49376 = arguments.length;
switch (G__49376) {
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
var G__49378 = arguments.length;
switch (G__49378) {
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
var c__41615__auto___50512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = (function (state_49404){
var state_val_49405 = (state_49404[(1)]);
if((state_val_49405 === (7))){
var inst_49399 = (state_49404[(2)]);
var state_49404__$1 = state_49404;
var statearr_49406_50513 = state_49404__$1;
(statearr_49406_50513[(2)] = inst_49399);

(statearr_49406_50513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49405 === (1))){
var inst_49381 = null;
var state_49404__$1 = (function (){var statearr_49407 = state_49404;
(statearr_49407[(7)] = inst_49381);

return statearr_49407;
})();
var statearr_49408_50514 = state_49404__$1;
(statearr_49408_50514[(2)] = null);

(statearr_49408_50514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49405 === (4))){
var inst_49384 = (state_49404[(8)]);
var inst_49384__$1 = (state_49404[(2)]);
var inst_49385 = (inst_49384__$1 == null);
var inst_49386 = cljs.core.not(inst_49385);
var state_49404__$1 = (function (){var statearr_49409 = state_49404;
(statearr_49409[(8)] = inst_49384__$1);

return statearr_49409;
})();
if(inst_49386){
var statearr_49410_50515 = state_49404__$1;
(statearr_49410_50515[(1)] = (5));

} else {
var statearr_49411_50516 = state_49404__$1;
(statearr_49411_50516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49405 === (6))){
var state_49404__$1 = state_49404;
var statearr_49412_50517 = state_49404__$1;
(statearr_49412_50517[(2)] = null);

(statearr_49412_50517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49405 === (3))){
var inst_49401 = (state_49404[(2)]);
var inst_49402 = cljs.core.async.close_BANG_(out);
var state_49404__$1 = (function (){var statearr_49413 = state_49404;
(statearr_49413[(9)] = inst_49401);

return statearr_49413;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49404__$1,inst_49402);
} else {
if((state_val_49405 === (2))){
var state_49404__$1 = state_49404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49404__$1,(4),ch);
} else {
if((state_val_49405 === (11))){
var inst_49384 = (state_49404[(8)]);
var inst_49393 = (state_49404[(2)]);
var inst_49381 = inst_49384;
var state_49404__$1 = (function (){var statearr_49414 = state_49404;
(statearr_49414[(7)] = inst_49381);

(statearr_49414[(10)] = inst_49393);

return statearr_49414;
})();
var statearr_49415_50518 = state_49404__$1;
(statearr_49415_50518[(2)] = null);

(statearr_49415_50518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49405 === (9))){
var inst_49384 = (state_49404[(8)]);
var state_49404__$1 = state_49404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49404__$1,(11),out,inst_49384);
} else {
if((state_val_49405 === (5))){
var inst_49381 = (state_49404[(7)]);
var inst_49384 = (state_49404[(8)]);
var inst_49388 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49384,inst_49381);
var state_49404__$1 = state_49404;
if(inst_49388){
var statearr_49418_50519 = state_49404__$1;
(statearr_49418_50519[(1)] = (8));

} else {
var statearr_49420_50520 = state_49404__$1;
(statearr_49420_50520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49405 === (10))){
var inst_49396 = (state_49404[(2)]);
var state_49404__$1 = state_49404;
var statearr_49421_50521 = state_49404__$1;
(statearr_49421_50521[(2)] = inst_49396);

(statearr_49421_50521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49405 === (8))){
var inst_49381 = (state_49404[(7)]);
var tmp49416 = inst_49381;
var inst_49381__$1 = tmp49416;
var state_49404__$1 = (function (){var statearr_49422 = state_49404;
(statearr_49422[(7)] = inst_49381__$1);

return statearr_49422;
})();
var statearr_49423_50523 = state_49404__$1;
(statearr_49423_50523[(2)] = null);

(statearr_49423_50523[(1)] = (2));


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
var cljs$core$async$state_machine__41531__auto__ = null;
var cljs$core$async$state_machine__41531__auto____0 = (function (){
var statearr_49424 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49424[(0)] = cljs$core$async$state_machine__41531__auto__);

(statearr_49424[(1)] = (1));

return statearr_49424;
});
var cljs$core$async$state_machine__41531__auto____1 = (function (state_49404){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_49404);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e49425){var ex__41534__auto__ = e49425;
var statearr_49426_50524 = state_49404;
(statearr_49426_50524[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_49404[(4)]))){
var statearr_49428_50525 = state_49404;
(statearr_49428_50525[(1)] = cljs.core.first((state_49404[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50526 = state_49404;
state_49404 = G__50526;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$state_machine__41531__auto__ = function(state_49404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41531__auto____1.call(this,state_49404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41531__auto____0;
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41531__auto____1;
return cljs$core$async$state_machine__41531__auto__;
})()
})();
var state__41617__auto__ = (function (){var statearr_49432 = f__41616__auto__();
(statearr_49432[(6)] = c__41615__auto___50512);

return statearr_49432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49434 = arguments.length;
switch (G__49434) {
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
var c__41615__auto___50532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = (function (state_49477){
var state_val_49478 = (state_49477[(1)]);
if((state_val_49478 === (7))){
var inst_49473 = (state_49477[(2)]);
var state_49477__$1 = state_49477;
var statearr_49479_50537 = state_49477__$1;
(statearr_49479_50537[(2)] = inst_49473);

(statearr_49479_50537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (1))){
var inst_49438 = (new Array(n));
var inst_49439 = inst_49438;
var inst_49440 = (0);
var state_49477__$1 = (function (){var statearr_49483 = state_49477;
(statearr_49483[(7)] = inst_49440);

(statearr_49483[(8)] = inst_49439);

return statearr_49483;
})();
var statearr_49484_50542 = state_49477__$1;
(statearr_49484_50542[(2)] = null);

(statearr_49484_50542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (4))){
var inst_49443 = (state_49477[(9)]);
var inst_49443__$1 = (state_49477[(2)]);
var inst_49444 = (inst_49443__$1 == null);
var inst_49445 = cljs.core.not(inst_49444);
var state_49477__$1 = (function (){var statearr_49485 = state_49477;
(statearr_49485[(9)] = inst_49443__$1);

return statearr_49485;
})();
if(inst_49445){
var statearr_49486_50547 = state_49477__$1;
(statearr_49486_50547[(1)] = (5));

} else {
var statearr_49487_50548 = state_49477__$1;
(statearr_49487_50548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (15))){
var inst_49467 = (state_49477[(2)]);
var state_49477__$1 = state_49477;
var statearr_49488_50549 = state_49477__$1;
(statearr_49488_50549[(2)] = inst_49467);

(statearr_49488_50549[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (13))){
var state_49477__$1 = state_49477;
var statearr_49489_50550 = state_49477__$1;
(statearr_49489_50550[(2)] = null);

(statearr_49489_50550[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (6))){
var inst_49440 = (state_49477[(7)]);
var inst_49463 = (inst_49440 > (0));
var state_49477__$1 = state_49477;
if(cljs.core.truth_(inst_49463)){
var statearr_49490_50551 = state_49477__$1;
(statearr_49490_50551[(1)] = (12));

} else {
var statearr_49491_50553 = state_49477__$1;
(statearr_49491_50553[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (3))){
var inst_49475 = (state_49477[(2)]);
var state_49477__$1 = state_49477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49477__$1,inst_49475);
} else {
if((state_val_49478 === (12))){
var inst_49439 = (state_49477[(8)]);
var inst_49465 = cljs.core.vec(inst_49439);
var state_49477__$1 = state_49477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49477__$1,(15),out,inst_49465);
} else {
if((state_val_49478 === (2))){
var state_49477__$1 = state_49477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49477__$1,(4),ch);
} else {
if((state_val_49478 === (11))){
var inst_49457 = (state_49477[(2)]);
var inst_49458 = (new Array(n));
var inst_49439 = inst_49458;
var inst_49440 = (0);
var state_49477__$1 = (function (){var statearr_49505 = state_49477;
(statearr_49505[(7)] = inst_49440);

(statearr_49505[(8)] = inst_49439);

(statearr_49505[(10)] = inst_49457);

return statearr_49505;
})();
var statearr_49506_50555 = state_49477__$1;
(statearr_49506_50555[(2)] = null);

(statearr_49506_50555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (9))){
var inst_49439 = (state_49477[(8)]);
var inst_49455 = cljs.core.vec(inst_49439);
var state_49477__$1 = state_49477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49477__$1,(11),out,inst_49455);
} else {
if((state_val_49478 === (5))){
var inst_49440 = (state_49477[(7)]);
var inst_49443 = (state_49477[(9)]);
var inst_49439 = (state_49477[(8)]);
var inst_49449 = (state_49477[(11)]);
var inst_49447 = (inst_49439[inst_49440] = inst_49443);
var inst_49449__$1 = (inst_49440 + (1));
var inst_49450 = (inst_49449__$1 < n);
var state_49477__$1 = (function (){var statearr_49513 = state_49477;
(statearr_49513[(12)] = inst_49447);

(statearr_49513[(11)] = inst_49449__$1);

return statearr_49513;
})();
if(cljs.core.truth_(inst_49450)){
var statearr_49514_50558 = state_49477__$1;
(statearr_49514_50558[(1)] = (8));

} else {
var statearr_49515_50559 = state_49477__$1;
(statearr_49515_50559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (14))){
var inst_49470 = (state_49477[(2)]);
var inst_49471 = cljs.core.async.close_BANG_(out);
var state_49477__$1 = (function (){var statearr_49517 = state_49477;
(statearr_49517[(13)] = inst_49470);

return statearr_49517;
})();
var statearr_49518_50560 = state_49477__$1;
(statearr_49518_50560[(2)] = inst_49471);

(statearr_49518_50560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (10))){
var inst_49461 = (state_49477[(2)]);
var state_49477__$1 = state_49477;
var statearr_49519_50561 = state_49477__$1;
(statearr_49519_50561[(2)] = inst_49461);

(statearr_49519_50561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49478 === (8))){
var inst_49439 = (state_49477[(8)]);
var inst_49449 = (state_49477[(11)]);
var tmp49516 = inst_49439;
var inst_49439__$1 = tmp49516;
var inst_49440 = inst_49449;
var state_49477__$1 = (function (){var statearr_49527 = state_49477;
(statearr_49527[(7)] = inst_49440);

(statearr_49527[(8)] = inst_49439__$1);

return statearr_49527;
})();
var statearr_49528_50562 = state_49477__$1;
(statearr_49528_50562[(2)] = null);

(statearr_49528_50562[(1)] = (2));


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
var cljs$core$async$state_machine__41531__auto__ = null;
var cljs$core$async$state_machine__41531__auto____0 = (function (){
var statearr_49532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49532[(0)] = cljs$core$async$state_machine__41531__auto__);

(statearr_49532[(1)] = (1));

return statearr_49532;
});
var cljs$core$async$state_machine__41531__auto____1 = (function (state_49477){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_49477);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e49533){var ex__41534__auto__ = e49533;
var statearr_49537_50563 = state_49477;
(statearr_49537_50563[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_49477[(4)]))){
var statearr_49538_50564 = state_49477;
(statearr_49538_50564[(1)] = cljs.core.first((state_49477[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50565 = state_49477;
state_49477 = G__50565;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$state_machine__41531__auto__ = function(state_49477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41531__auto____1.call(this,state_49477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41531__auto____0;
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41531__auto____1;
return cljs$core$async$state_machine__41531__auto__;
})()
})();
var state__41617__auto__ = (function (){var statearr_49539 = f__41616__auto__();
(statearr_49539[(6)] = c__41615__auto___50532);

return statearr_49539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49541 = arguments.length;
switch (G__49541) {
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
var c__41615__auto___50567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41616__auto__ = (function (){var switch__41530__auto__ = (function (state_49590){
var state_val_49591 = (state_49590[(1)]);
if((state_val_49591 === (7))){
var inst_49586 = (state_49590[(2)]);
var state_49590__$1 = state_49590;
var statearr_49592_50568 = state_49590__$1;
(statearr_49592_50568[(2)] = inst_49586);

(statearr_49592_50568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (1))){
var inst_49546 = [];
var inst_49547 = inst_49546;
var inst_49548 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49590__$1 = (function (){var statearr_49593 = state_49590;
(statearr_49593[(7)] = inst_49548);

(statearr_49593[(8)] = inst_49547);

return statearr_49593;
})();
var statearr_49595_50569 = state_49590__$1;
(statearr_49595_50569[(2)] = null);

(statearr_49595_50569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (4))){
var inst_49551 = (state_49590[(9)]);
var inst_49551__$1 = (state_49590[(2)]);
var inst_49552 = (inst_49551__$1 == null);
var inst_49553 = cljs.core.not(inst_49552);
var state_49590__$1 = (function (){var statearr_49599 = state_49590;
(statearr_49599[(9)] = inst_49551__$1);

return statearr_49599;
})();
if(inst_49553){
var statearr_49600_50570 = state_49590__$1;
(statearr_49600_50570[(1)] = (5));

} else {
var statearr_49601_50571 = state_49590__$1;
(statearr_49601_50571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (15))){
var inst_49547 = (state_49590[(8)]);
var inst_49578 = cljs.core.vec(inst_49547);
var state_49590__$1 = state_49590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49590__$1,(18),out,inst_49578);
} else {
if((state_val_49591 === (13))){
var inst_49573 = (state_49590[(2)]);
var state_49590__$1 = state_49590;
var statearr_49604_50572 = state_49590__$1;
(statearr_49604_50572[(2)] = inst_49573);

(statearr_49604_50572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (6))){
var inst_49547 = (state_49590[(8)]);
var inst_49575 = inst_49547.length;
var inst_49576 = (inst_49575 > (0));
var state_49590__$1 = state_49590;
if(cljs.core.truth_(inst_49576)){
var statearr_49606_50574 = state_49590__$1;
(statearr_49606_50574[(1)] = (15));

} else {
var statearr_49607_50578 = state_49590__$1;
(statearr_49607_50578[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (17))){
var inst_49583 = (state_49590[(2)]);
var inst_49584 = cljs.core.async.close_BANG_(out);
var state_49590__$1 = (function (){var statearr_49609 = state_49590;
(statearr_49609[(10)] = inst_49583);

return statearr_49609;
})();
var statearr_49610_50579 = state_49590__$1;
(statearr_49610_50579[(2)] = inst_49584);

(statearr_49610_50579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (3))){
var inst_49588 = (state_49590[(2)]);
var state_49590__$1 = state_49590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49590__$1,inst_49588);
} else {
if((state_val_49591 === (12))){
var inst_49547 = (state_49590[(8)]);
var inst_49566 = cljs.core.vec(inst_49547);
var state_49590__$1 = state_49590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49590__$1,(14),out,inst_49566);
} else {
if((state_val_49591 === (2))){
var state_49590__$1 = state_49590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49590__$1,(4),ch);
} else {
if((state_val_49591 === (11))){
var inst_49555 = (state_49590[(11)]);
var inst_49551 = (state_49590[(9)]);
var inst_49547 = (state_49590[(8)]);
var inst_49563 = inst_49547.push(inst_49551);
var tmp49611 = inst_49547;
var inst_49547__$1 = tmp49611;
var inst_49548 = inst_49555;
var state_49590__$1 = (function (){var statearr_49612 = state_49590;
(statearr_49612[(12)] = inst_49563);

(statearr_49612[(7)] = inst_49548);

(statearr_49612[(8)] = inst_49547__$1);

return statearr_49612;
})();
var statearr_49613_50583 = state_49590__$1;
(statearr_49613_50583[(2)] = null);

(statearr_49613_50583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (9))){
var inst_49548 = (state_49590[(7)]);
var inst_49559 = cljs.core.keyword_identical_QMARK_(inst_49548,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_49590__$1 = state_49590;
var statearr_49614_50584 = state_49590__$1;
(statearr_49614_50584[(2)] = inst_49559);

(statearr_49614_50584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (5))){
var inst_49555 = (state_49590[(11)]);
var inst_49556 = (state_49590[(13)]);
var inst_49551 = (state_49590[(9)]);
var inst_49548 = (state_49590[(7)]);
var inst_49555__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49551) : f.call(null,inst_49551));
var inst_49556__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49555__$1,inst_49548);
var state_49590__$1 = (function (){var statearr_49615 = state_49590;
(statearr_49615[(11)] = inst_49555__$1);

(statearr_49615[(13)] = inst_49556__$1);

return statearr_49615;
})();
if(inst_49556__$1){
var statearr_49616_50585 = state_49590__$1;
(statearr_49616_50585[(1)] = (8));

} else {
var statearr_49617_50586 = state_49590__$1;
(statearr_49617_50586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (14))){
var inst_49555 = (state_49590[(11)]);
var inst_49551 = (state_49590[(9)]);
var inst_49568 = (state_49590[(2)]);
var inst_49569 = [];
var inst_49570 = inst_49569.push(inst_49551);
var inst_49547 = inst_49569;
var inst_49548 = inst_49555;
var state_49590__$1 = (function (){var statearr_49618 = state_49590;
(statearr_49618[(7)] = inst_49548);

(statearr_49618[(14)] = inst_49570);

(statearr_49618[(15)] = inst_49568);

(statearr_49618[(8)] = inst_49547);

return statearr_49618;
})();
var statearr_49619_50587 = state_49590__$1;
(statearr_49619_50587[(2)] = null);

(statearr_49619_50587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (16))){
var state_49590__$1 = state_49590;
var statearr_49621_50588 = state_49590__$1;
(statearr_49621_50588[(2)] = null);

(statearr_49621_50588[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (10))){
var inst_49561 = (state_49590[(2)]);
var state_49590__$1 = state_49590;
if(cljs.core.truth_(inst_49561)){
var statearr_49623_50589 = state_49590__$1;
(statearr_49623_50589[(1)] = (11));

} else {
var statearr_49624_50590 = state_49590__$1;
(statearr_49624_50590[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (18))){
var inst_49580 = (state_49590[(2)]);
var state_49590__$1 = state_49590;
var statearr_49625_50594 = state_49590__$1;
(statearr_49625_50594[(2)] = inst_49580);

(statearr_49625_50594[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (8))){
var inst_49556 = (state_49590[(13)]);
var state_49590__$1 = state_49590;
var statearr_49626_50595 = state_49590__$1;
(statearr_49626_50595[(2)] = inst_49556);

(statearr_49626_50595[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__41531__auto__ = null;
var cljs$core$async$state_machine__41531__auto____0 = (function (){
var statearr_49628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49628[(0)] = cljs$core$async$state_machine__41531__auto__);

(statearr_49628[(1)] = (1));

return statearr_49628;
});
var cljs$core$async$state_machine__41531__auto____1 = (function (state_49590){
while(true){
var ret_value__41532__auto__ = (function (){try{while(true){
var result__41533__auto__ = switch__41530__auto__(state_49590);
if(cljs.core.keyword_identical_QMARK_(result__41533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41533__auto__;
}
break;
}
}catch (e49629){var ex__41534__auto__ = e49629;
var statearr_49630_50604 = state_49590;
(statearr_49630_50604[(2)] = ex__41534__auto__);


if(cljs.core.seq((state_49590[(4)]))){
var statearr_49632_50605 = state_49590;
(statearr_49632_50605[(1)] = cljs.core.first((state_49590[(4)])));

} else {
throw ex__41534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50606 = state_49590;
state_49590 = G__50606;
continue;
} else {
return ret_value__41532__auto__;
}
break;
}
});
cljs$core$async$state_machine__41531__auto__ = function(state_49590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41531__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41531__auto____1.call(this,state_49590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41531__auto____0;
cljs$core$async$state_machine__41531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41531__auto____1;
return cljs$core$async$state_machine__41531__auto__;
})()
})();
var state__41617__auto__ = (function (){var statearr_49636 = f__41616__auto__();
(statearr_49636[(6)] = c__41615__auto___50567);

return statearr_49636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41617__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
