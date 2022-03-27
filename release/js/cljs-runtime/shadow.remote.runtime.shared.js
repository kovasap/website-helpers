goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__48236,res){
var map__48244 = p__48236;
var map__48244__$1 = cljs.core.__destructure_map(map__48244);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48244__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48244__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__48249 = res;
var G__48249__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48249,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__48249);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48249__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__48249__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__48254 = arguments.length;
switch (G__48254) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__48257,msg,handlers,timeout_after_ms){
var map__48260 = p__48257;
var map__48260__$1 = cljs.core.__destructure_map(map__48260);
var runtime = map__48260__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48260__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48410 = arguments.length;
var i__4865__auto___48411 = (0);
while(true){
if((i__4865__auto___48411 < len__4864__auto___48410)){
args__4870__auto__.push((arguments[i__4865__auto___48411]));

var G__48412 = (i__4865__auto___48411 + (1));
i__4865__auto___48411 = G__48412;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__48275,ev,args){
var map__48276 = p__48275;
var map__48276__$1 = cljs.core.__destructure_map(map__48276);
var runtime = map__48276__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48276__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__48279 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__48283 = null;
var count__48284 = (0);
var i__48285 = (0);
while(true){
if((i__48285 < count__48284)){
var ext = chunk__48283.cljs$core$IIndexed$_nth$arity$2(null,i__48285);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__48413 = seq__48279;
var G__48414 = chunk__48283;
var G__48415 = count__48284;
var G__48416 = (i__48285 + (1));
seq__48279 = G__48413;
chunk__48283 = G__48414;
count__48284 = G__48415;
i__48285 = G__48416;
continue;
} else {
var G__48417 = seq__48279;
var G__48418 = chunk__48283;
var G__48419 = count__48284;
var G__48420 = (i__48285 + (1));
seq__48279 = G__48417;
chunk__48283 = G__48418;
count__48284 = G__48419;
i__48285 = G__48420;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48279);
if(temp__5753__auto__){
var seq__48279__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48279__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48279__$1);
var G__48422 = cljs.core.chunk_rest(seq__48279__$1);
var G__48423 = c__4679__auto__;
var G__48424 = cljs.core.count(c__4679__auto__);
var G__48425 = (0);
seq__48279 = G__48422;
chunk__48283 = G__48423;
count__48284 = G__48424;
i__48285 = G__48425;
continue;
} else {
var ext = cljs.core.first(seq__48279__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__48426 = cljs.core.next(seq__48279__$1);
var G__48427 = null;
var G__48428 = (0);
var G__48429 = (0);
seq__48279 = G__48426;
chunk__48283 = G__48427;
count__48284 = G__48428;
i__48285 = G__48429;
continue;
} else {
var G__48430 = cljs.core.next(seq__48279__$1);
var G__48431 = null;
var G__48432 = (0);
var G__48433 = (0);
seq__48279 = G__48430;
chunk__48283 = G__48431;
count__48284 = G__48432;
i__48285 = G__48433;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq48266){
var G__48267 = cljs.core.first(seq48266);
var seq48266__$1 = cljs.core.next(seq48266);
var G__48268 = cljs.core.first(seq48266__$1);
var seq48266__$2 = cljs.core.next(seq48266__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48267,G__48268,seq48266__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__48307,p__48308){
var map__48310 = p__48307;
var map__48310__$1 = cljs.core.__destructure_map(map__48310);
var runtime = map__48310__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48310__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__48311 = p__48308;
var map__48311__$1 = cljs.core.__destructure_map(map__48311);
var msg = map__48311__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48311__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__48313 = cljs.core.deref(state_ref);
var map__48313__$1 = cljs.core.__destructure_map(map__48313);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48313__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48313__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__48319){
var map__48321 = p__48319;
var map__48321__$1 = cljs.core.__destructure_map(map__48321);
var runtime = map__48321__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48321__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__48325,msg){
var map__48326 = p__48325;
var map__48326__$1 = cljs.core.__destructure_map(map__48326);
var runtime = map__48326__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48326__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__48337,key,p__48338){
var map__48339 = p__48337;
var map__48339__$1 = cljs.core.__destructure_map(map__48339);
var state = map__48339__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48339__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__48340 = p__48338;
var map__48340__$1 = cljs.core.__destructure_map(map__48340);
var spec = map__48340__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48340__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__48348,key,spec){
var map__48350 = p__48348;
var map__48350__$1 = cljs.core.__destructure_map(map__48350);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48350__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__48352_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__48352_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__48353_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__48353_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__48354_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__48354_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__48355_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__48355_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__48356_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__48356_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__48369,key){
var map__48370 = p__48369;
var map__48370__$1 = cljs.core.__destructure_map(map__48370);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48370__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__48378,msg){
var map__48379 = p__48378;
var map__48379__$1 = cljs.core.__destructure_map(map__48379);
var runtime = map__48379__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48379__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__48384,p__48385){
var map__48388 = p__48384;
var map__48388__$1 = cljs.core.__destructure_map(map__48388);
var runtime = map__48388__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48388__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__48389 = p__48385;
var map__48389__$1 = cljs.core.__destructure_map(map__48389);
var msg = map__48389__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48389__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48389__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__48395 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__48397 = null;
var count__48398 = (0);
var i__48399 = (0);
while(true){
if((i__48399 < count__48398)){
var map__48404 = chunk__48397.cljs$core$IIndexed$_nth$arity$2(null,i__48399);
var map__48404__$1 = cljs.core.__destructure_map(map__48404);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48404__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__48447 = seq__48395;
var G__48448 = chunk__48397;
var G__48449 = count__48398;
var G__48450 = (i__48399 + (1));
seq__48395 = G__48447;
chunk__48397 = G__48448;
count__48398 = G__48449;
i__48399 = G__48450;
continue;
} else {
var G__48451 = seq__48395;
var G__48452 = chunk__48397;
var G__48453 = count__48398;
var G__48454 = (i__48399 + (1));
seq__48395 = G__48451;
chunk__48397 = G__48452;
count__48398 = G__48453;
i__48399 = G__48454;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48395);
if(temp__5753__auto__){
var seq__48395__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48395__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48395__$1);
var G__48455 = cljs.core.chunk_rest(seq__48395__$1);
var G__48456 = c__4679__auto__;
var G__48457 = cljs.core.count(c__4679__auto__);
var G__48458 = (0);
seq__48395 = G__48455;
chunk__48397 = G__48456;
count__48398 = G__48457;
i__48399 = G__48458;
continue;
} else {
var map__48406 = cljs.core.first(seq__48395__$1);
var map__48406__$1 = cljs.core.__destructure_map(map__48406);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48406__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__48459 = cljs.core.next(seq__48395__$1);
var G__48460 = null;
var G__48461 = (0);
var G__48462 = (0);
seq__48395 = G__48459;
chunk__48397 = G__48460;
count__48398 = G__48461;
i__48399 = G__48462;
continue;
} else {
var G__48463 = cljs.core.next(seq__48395__$1);
var G__48464 = null;
var G__48465 = (0);
var G__48466 = (0);
seq__48395 = G__48463;
chunk__48397 = G__48464;
count__48398 = G__48465;
i__48399 = G__48466;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
