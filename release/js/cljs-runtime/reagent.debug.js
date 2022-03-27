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
var G__51963__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51964__i = 0, G__51964__a = new Array(arguments.length -  0);
while (G__51964__i < G__51964__a.length) {G__51964__a[G__51964__i] = arguments[G__51964__i + 0]; ++G__51964__i;}
  args = new cljs.core.IndexedSeq(G__51964__a,0,null);
} 
return G__51963__delegate.call(this,args);};
G__51963.cljs$lang$maxFixedArity = 0;
G__51963.cljs$lang$applyTo = (function (arglist__51965){
var args = cljs.core.seq(arglist__51965);
return G__51963__delegate(args);
});
G__51963.cljs$core$IFn$_invoke$arity$variadic = G__51963__delegate;
return G__51963;
})()
);

(o.error = (function() { 
var G__51966__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51967__i = 0, G__51967__a = new Array(arguments.length -  0);
while (G__51967__i < G__51967__a.length) {G__51967__a[G__51967__i] = arguments[G__51967__i + 0]; ++G__51967__i;}
  args = new cljs.core.IndexedSeq(G__51967__a,0,null);
} 
return G__51966__delegate.call(this,args);};
G__51966.cljs$lang$maxFixedArity = 0;
G__51966.cljs$lang$applyTo = (function (arglist__51968){
var args = cljs.core.seq(arglist__51968);
return G__51966__delegate(args);
});
G__51966.cljs$core$IFn$_invoke$arity$variadic = G__51966__delegate;
return G__51966;
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
