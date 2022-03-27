goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53068 = arguments.length;
var i__4865__auto___53069 = (0);
while(true){
if((i__4865__auto___53069 < len__4864__auto___53068)){
args__4870__auto__.push((arguments[i__4865__auto___53069]));

var G__53070 = (i__4865__auto___53069 + (1));
i__4865__auto___53069 = G__53070;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq52469){
var G__52470 = cljs.core.first(seq52469);
var seq52469__$1 = cljs.core.next(seq52469);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52470,seq52469__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__52474 = cljs.core.seq(sources);
var chunk__52475 = null;
var count__52476 = (0);
var i__52477 = (0);
while(true){
if((i__52477 < count__52476)){
var map__52486 = chunk__52475.cljs$core$IIndexed$_nth$arity$2(null,i__52477);
var map__52486__$1 = cljs.core.__destructure_map(map__52486);
var src = map__52486__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52486__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52486__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52486__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52486__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52487){var e_53071 = e52487;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53071);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53071.message)].join('')));
}

var G__53072 = seq__52474;
var G__53073 = chunk__52475;
var G__53074 = count__52476;
var G__53075 = (i__52477 + (1));
seq__52474 = G__53072;
chunk__52475 = G__53073;
count__52476 = G__53074;
i__52477 = G__53075;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52474);
if(temp__5753__auto__){
var seq__52474__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52474__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__52474__$1);
var G__53076 = cljs.core.chunk_rest(seq__52474__$1);
var G__53077 = c__4679__auto__;
var G__53078 = cljs.core.count(c__4679__auto__);
var G__53079 = (0);
seq__52474 = G__53076;
chunk__52475 = G__53077;
count__52476 = G__53078;
i__52477 = G__53079;
continue;
} else {
var map__52488 = cljs.core.first(seq__52474__$1);
var map__52488__$1 = cljs.core.__destructure_map(map__52488);
var src = map__52488__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52488__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52488__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52488__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52488__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52490){var e_53080 = e52490;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53080);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53080.message)].join('')));
}

var G__53081 = cljs.core.next(seq__52474__$1);
var G__53082 = null;
var G__53083 = (0);
var G__53084 = (0);
seq__52474 = G__53081;
chunk__52475 = G__53082;
count__52476 = G__53083;
i__52477 = G__53084;
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
var seq__52496 = cljs.core.seq(js_requires);
var chunk__52497 = null;
var count__52498 = (0);
var i__52499 = (0);
while(true){
if((i__52499 < count__52498)){
var js_ns = chunk__52497.cljs$core$IIndexed$_nth$arity$2(null,i__52499);
var require_str_53085 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53085);


var G__53086 = seq__52496;
var G__53087 = chunk__52497;
var G__53088 = count__52498;
var G__53089 = (i__52499 + (1));
seq__52496 = G__53086;
chunk__52497 = G__53087;
count__52498 = G__53088;
i__52499 = G__53089;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52496);
if(temp__5753__auto__){
var seq__52496__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52496__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__52496__$1);
var G__53091 = cljs.core.chunk_rest(seq__52496__$1);
var G__53092 = c__4679__auto__;
var G__53093 = cljs.core.count(c__4679__auto__);
var G__53094 = (0);
seq__52496 = G__53091;
chunk__52497 = G__53092;
count__52498 = G__53093;
i__52499 = G__53094;
continue;
} else {
var js_ns = cljs.core.first(seq__52496__$1);
var require_str_53095 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53095);


var G__53096 = cljs.core.next(seq__52496__$1);
var G__53097 = null;
var G__53098 = (0);
var G__53099 = (0);
seq__52496 = G__53096;
chunk__52497 = G__53097;
count__52498 = G__53098;
i__52499 = G__53099;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__52503){
var map__52504 = p__52503;
var map__52504__$1 = cljs.core.__destructure_map(map__52504);
var msg = map__52504__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52504__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52504__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52505(s__52506){
return (new cljs.core.LazySeq(null,(function (){
var s__52506__$1 = s__52506;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__52506__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__52511 = cljs.core.first(xs__6308__auto__);
var map__52511__$1 = cljs.core.__destructure_map(map__52511);
var src = map__52511__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52511__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52511__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__52506__$1,map__52511,map__52511__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52504,map__52504__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52505_$_iter__52507(s__52508){
return (new cljs.core.LazySeq(null,((function (s__52506__$1,map__52511,map__52511__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52504,map__52504__$1,msg,info,reload_info){
return (function (){
var s__52508__$1 = s__52508;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__52508__$1);
if(temp__5753__auto____$1){
var s__52508__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52508__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__52508__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__52510 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__52509 = (0);
while(true){
if((i__52509 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__52509);
cljs.core.chunk_append(b__52510,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__53112 = (i__52509 + (1));
i__52509 = G__53112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52510),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52505_$_iter__52507(cljs.core.chunk_rest(s__52508__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52510),null);
}
} else {
var warning = cljs.core.first(s__52508__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52505_$_iter__52507(cljs.core.rest(s__52508__$2)));
}
} else {
return null;
}
break;
}
});})(s__52506__$1,map__52511,map__52511__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52504,map__52504__$1,msg,info,reload_info))
,null,null));
});})(s__52506__$1,map__52511,map__52511__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52504,map__52504__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52505(cljs.core.rest(s__52506__$1)));
} else {
var G__53114 = cljs.core.rest(s__52506__$1);
s__52506__$1 = G__53114;
continue;
}
} else {
var G__53115 = cljs.core.rest(s__52506__$1);
s__52506__$1 = G__53115;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__52512_53116 = cljs.core.seq(warnings);
var chunk__52513_53117 = null;
var count__52514_53118 = (0);
var i__52515_53119 = (0);
while(true){
if((i__52515_53119 < count__52514_53118)){
var map__52518_53120 = chunk__52513_53117.cljs$core$IIndexed$_nth$arity$2(null,i__52515_53119);
var map__52518_53121__$1 = cljs.core.__destructure_map(map__52518_53120);
var w_53122 = map__52518_53121__$1;
var msg_53123__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52518_53121__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52518_53121__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52518_53121__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52518_53121__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53126)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53124),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53125),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53123__$1)].join(''));


var G__53127 = seq__52512_53116;
var G__53128 = chunk__52513_53117;
var G__53129 = count__52514_53118;
var G__53130 = (i__52515_53119 + (1));
seq__52512_53116 = G__53127;
chunk__52513_53117 = G__53128;
count__52514_53118 = G__53129;
i__52515_53119 = G__53130;
continue;
} else {
var temp__5753__auto___53131 = cljs.core.seq(seq__52512_53116);
if(temp__5753__auto___53131){
var seq__52512_53132__$1 = temp__5753__auto___53131;
if(cljs.core.chunked_seq_QMARK_(seq__52512_53132__$1)){
var c__4679__auto___53138 = cljs.core.chunk_first(seq__52512_53132__$1);
var G__53139 = cljs.core.chunk_rest(seq__52512_53132__$1);
var G__53140 = c__4679__auto___53138;
var G__53141 = cljs.core.count(c__4679__auto___53138);
var G__53142 = (0);
seq__52512_53116 = G__53139;
chunk__52513_53117 = G__53140;
count__52514_53118 = G__53141;
i__52515_53119 = G__53142;
continue;
} else {
var map__52519_53143 = cljs.core.first(seq__52512_53132__$1);
var map__52519_53144__$1 = cljs.core.__destructure_map(map__52519_53143);
var w_53145 = map__52519_53144__$1;
var msg_53146__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52519_53144__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52519_53144__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52519_53144__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52519_53144__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53149)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53147),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53148),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53146__$1)].join(''));


var G__53151 = cljs.core.next(seq__52512_53132__$1);
var G__53152 = null;
var G__53153 = (0);
var G__53154 = (0);
seq__52512_53116 = G__53151;
chunk__52513_53117 = G__53152;
count__52514_53118 = G__53153;
i__52515_53119 = G__53154;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__52502_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__52502_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__52526){
var map__52527 = p__52526;
var map__52527__$1 = cljs.core.__destructure_map(map__52527);
var msg = map__52527__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52527__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52527__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__52528 = cljs.core.seq(updates);
var chunk__52530 = null;
var count__52531 = (0);
var i__52532 = (0);
while(true){
if((i__52532 < count__52531)){
var path = chunk__52530.cljs$core$IIndexed$_nth$arity$2(null,i__52532);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52692_53162 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52696_53163 = null;
var count__52697_53164 = (0);
var i__52698_53165 = (0);
while(true){
if((i__52698_53165 < count__52697_53164)){
var node_53167 = chunk__52696_53163.cljs$core$IIndexed$_nth$arity$2(null,i__52698_53165);
if(cljs.core.not(node_53167.shadow$old)){
var path_match_53168 = shadow.cljs.devtools.client.browser.match_paths(node_53167.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53168)){
var new_link_53169 = (function (){var G__52748 = node_53167.cloneNode(true);
G__52748.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53168),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52748;
})();
(node_53167.shadow$old = true);

(new_link_53169.onload = ((function (seq__52692_53162,chunk__52696_53163,count__52697_53164,i__52698_53165,seq__52528,chunk__52530,count__52531,i__52532,new_link_53169,path_match_53168,node_53167,path,map__52527,map__52527__$1,msg,updates,reload_info){
return (function (e){
var seq__52751_53170 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__52753_53171 = null;
var count__52754_53172 = (0);
var i__52755_53173 = (0);
while(true){
if((i__52755_53173 < count__52754_53172)){
var map__52764_53174 = chunk__52753_53171.cljs$core$IIndexed$_nth$arity$2(null,i__52755_53173);
var map__52764_53175__$1 = cljs.core.__destructure_map(map__52764_53174);
var task_53176 = map__52764_53175__$1;
var fn_str_53177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52764_53175__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_53178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52764_53175__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_53179 = goog.getObjectByName(fn_str_53177,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_53178)].join(''));

(fn_obj_53179.cljs$core$IFn$_invoke$arity$2 ? fn_obj_53179.cljs$core$IFn$_invoke$arity$2(path,new_link_53169) : fn_obj_53179.call(null,path,new_link_53169));


var G__53180 = seq__52751_53170;
var G__53181 = chunk__52753_53171;
var G__53182 = count__52754_53172;
var G__53183 = (i__52755_53173 + (1));
seq__52751_53170 = G__53180;
chunk__52753_53171 = G__53181;
count__52754_53172 = G__53182;
i__52755_53173 = G__53183;
continue;
} else {
var temp__5753__auto___53184 = cljs.core.seq(seq__52751_53170);
if(temp__5753__auto___53184){
var seq__52751_53185__$1 = temp__5753__auto___53184;
if(cljs.core.chunked_seq_QMARK_(seq__52751_53185__$1)){
var c__4679__auto___53186 = cljs.core.chunk_first(seq__52751_53185__$1);
var G__53187 = cljs.core.chunk_rest(seq__52751_53185__$1);
var G__53188 = c__4679__auto___53186;
var G__53189 = cljs.core.count(c__4679__auto___53186);
var G__53190 = (0);
seq__52751_53170 = G__53187;
chunk__52753_53171 = G__53188;
count__52754_53172 = G__53189;
i__52755_53173 = G__53190;
continue;
} else {
var map__52767_53191 = cljs.core.first(seq__52751_53185__$1);
var map__52767_53192__$1 = cljs.core.__destructure_map(map__52767_53191);
var task_53193 = map__52767_53192__$1;
var fn_str_53194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52767_53192__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_53195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52767_53192__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_53196 = goog.getObjectByName(fn_str_53194,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_53195)].join(''));

(fn_obj_53196.cljs$core$IFn$_invoke$arity$2 ? fn_obj_53196.cljs$core$IFn$_invoke$arity$2(path,new_link_53169) : fn_obj_53196.call(null,path,new_link_53169));


var G__53197 = cljs.core.next(seq__52751_53185__$1);
var G__53198 = null;
var G__53199 = (0);
var G__53200 = (0);
seq__52751_53170 = G__53197;
chunk__52753_53171 = G__53198;
count__52754_53172 = G__53199;
i__52755_53173 = G__53200;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_53167);
});})(seq__52692_53162,chunk__52696_53163,count__52697_53164,i__52698_53165,seq__52528,chunk__52530,count__52531,i__52532,new_link_53169,path_match_53168,node_53167,path,map__52527,map__52527__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53168], 0));

goog.dom.insertSiblingAfter(new_link_53169,node_53167);


var G__53201 = seq__52692_53162;
var G__53202 = chunk__52696_53163;
var G__53203 = count__52697_53164;
var G__53204 = (i__52698_53165 + (1));
seq__52692_53162 = G__53201;
chunk__52696_53163 = G__53202;
count__52697_53164 = G__53203;
i__52698_53165 = G__53204;
continue;
} else {
var G__53205 = seq__52692_53162;
var G__53206 = chunk__52696_53163;
var G__53207 = count__52697_53164;
var G__53208 = (i__52698_53165 + (1));
seq__52692_53162 = G__53205;
chunk__52696_53163 = G__53206;
count__52697_53164 = G__53207;
i__52698_53165 = G__53208;
continue;
}
} else {
var G__53209 = seq__52692_53162;
var G__53210 = chunk__52696_53163;
var G__53211 = count__52697_53164;
var G__53212 = (i__52698_53165 + (1));
seq__52692_53162 = G__53209;
chunk__52696_53163 = G__53210;
count__52697_53164 = G__53211;
i__52698_53165 = G__53212;
continue;
}
} else {
var temp__5753__auto___53213 = cljs.core.seq(seq__52692_53162);
if(temp__5753__auto___53213){
var seq__52692_53214__$1 = temp__5753__auto___53213;
if(cljs.core.chunked_seq_QMARK_(seq__52692_53214__$1)){
var c__4679__auto___53215 = cljs.core.chunk_first(seq__52692_53214__$1);
var G__53222 = cljs.core.chunk_rest(seq__52692_53214__$1);
var G__53223 = c__4679__auto___53215;
var G__53224 = cljs.core.count(c__4679__auto___53215);
var G__53225 = (0);
seq__52692_53162 = G__53222;
chunk__52696_53163 = G__53223;
count__52697_53164 = G__53224;
i__52698_53165 = G__53225;
continue;
} else {
var node_53226 = cljs.core.first(seq__52692_53214__$1);
if(cljs.core.not(node_53226.shadow$old)){
var path_match_53227 = shadow.cljs.devtools.client.browser.match_paths(node_53226.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53227)){
var new_link_53228 = (function (){var G__52768 = node_53226.cloneNode(true);
G__52768.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53227),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52768;
})();
(node_53226.shadow$old = true);

(new_link_53228.onload = ((function (seq__52692_53162,chunk__52696_53163,count__52697_53164,i__52698_53165,seq__52528,chunk__52530,count__52531,i__52532,new_link_53228,path_match_53227,node_53226,seq__52692_53214__$1,temp__5753__auto___53213,path,map__52527,map__52527__$1,msg,updates,reload_info){
return (function (e){
var seq__52769_53229 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__52771_53230 = null;
var count__52772_53231 = (0);
var i__52773_53232 = (0);
while(true){
if((i__52773_53232 < count__52772_53231)){
var map__52789_53233 = chunk__52771_53230.cljs$core$IIndexed$_nth$arity$2(null,i__52773_53232);
var map__52789_53234__$1 = cljs.core.__destructure_map(map__52789_53233);
var task_53235 = map__52789_53234__$1;
var fn_str_53236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52789_53234__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_53237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52789_53234__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_53238 = goog.getObjectByName(fn_str_53236,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_53237)].join(''));

(fn_obj_53238.cljs$core$IFn$_invoke$arity$2 ? fn_obj_53238.cljs$core$IFn$_invoke$arity$2(path,new_link_53228) : fn_obj_53238.call(null,path,new_link_53228));


var G__53239 = seq__52769_53229;
var G__53240 = chunk__52771_53230;
var G__53241 = count__52772_53231;
var G__53242 = (i__52773_53232 + (1));
seq__52769_53229 = G__53239;
chunk__52771_53230 = G__53240;
count__52772_53231 = G__53241;
i__52773_53232 = G__53242;
continue;
} else {
var temp__5753__auto___53243__$1 = cljs.core.seq(seq__52769_53229);
if(temp__5753__auto___53243__$1){
var seq__52769_53244__$1 = temp__5753__auto___53243__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52769_53244__$1)){
var c__4679__auto___53245 = cljs.core.chunk_first(seq__52769_53244__$1);
var G__53246 = cljs.core.chunk_rest(seq__52769_53244__$1);
var G__53247 = c__4679__auto___53245;
var G__53248 = cljs.core.count(c__4679__auto___53245);
var G__53249 = (0);
seq__52769_53229 = G__53246;
chunk__52771_53230 = G__53247;
count__52772_53231 = G__53248;
i__52773_53232 = G__53249;
continue;
} else {
var map__52790_53250 = cljs.core.first(seq__52769_53244__$1);
var map__52790_53251__$1 = cljs.core.__destructure_map(map__52790_53250);
var task_53252 = map__52790_53251__$1;
var fn_str_53253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52790_53251__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_53254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52790_53251__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_53255 = goog.getObjectByName(fn_str_53253,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_53254)].join(''));

(fn_obj_53255.cljs$core$IFn$_invoke$arity$2 ? fn_obj_53255.cljs$core$IFn$_invoke$arity$2(path,new_link_53228) : fn_obj_53255.call(null,path,new_link_53228));


var G__53257 = cljs.core.next(seq__52769_53244__$1);
var G__53258 = null;
var G__53259 = (0);
var G__53260 = (0);
seq__52769_53229 = G__53257;
chunk__52771_53230 = G__53258;
count__52772_53231 = G__53259;
i__52773_53232 = G__53260;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_53226);
});})(seq__52692_53162,chunk__52696_53163,count__52697_53164,i__52698_53165,seq__52528,chunk__52530,count__52531,i__52532,new_link_53228,path_match_53227,node_53226,seq__52692_53214__$1,temp__5753__auto___53213,path,map__52527,map__52527__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53227], 0));

goog.dom.insertSiblingAfter(new_link_53228,node_53226);


var G__53261 = cljs.core.next(seq__52692_53214__$1);
var G__53262 = null;
var G__53263 = (0);
var G__53264 = (0);
seq__52692_53162 = G__53261;
chunk__52696_53163 = G__53262;
count__52697_53164 = G__53263;
i__52698_53165 = G__53264;
continue;
} else {
var G__53265 = cljs.core.next(seq__52692_53214__$1);
var G__53266 = null;
var G__53267 = (0);
var G__53268 = (0);
seq__52692_53162 = G__53265;
chunk__52696_53163 = G__53266;
count__52697_53164 = G__53267;
i__52698_53165 = G__53268;
continue;
}
} else {
var G__53269 = cljs.core.next(seq__52692_53214__$1);
var G__53270 = null;
var G__53271 = (0);
var G__53272 = (0);
seq__52692_53162 = G__53269;
chunk__52696_53163 = G__53270;
count__52697_53164 = G__53271;
i__52698_53165 = G__53272;
continue;
}
}
} else {
}
}
break;
}


var G__53273 = seq__52528;
var G__53274 = chunk__52530;
var G__53275 = count__52531;
var G__53276 = (i__52532 + (1));
seq__52528 = G__53273;
chunk__52530 = G__53274;
count__52531 = G__53275;
i__52532 = G__53276;
continue;
} else {
var G__53277 = seq__52528;
var G__53278 = chunk__52530;
var G__53279 = count__52531;
var G__53280 = (i__52532 + (1));
seq__52528 = G__53277;
chunk__52530 = G__53278;
count__52531 = G__53279;
i__52532 = G__53280;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52528);
if(temp__5753__auto__){
var seq__52528__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52528__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__52528__$1);
var G__53286 = cljs.core.chunk_rest(seq__52528__$1);
var G__53287 = c__4679__auto__;
var G__53288 = cljs.core.count(c__4679__auto__);
var G__53289 = (0);
seq__52528 = G__53286;
chunk__52530 = G__53287;
count__52531 = G__53288;
i__52532 = G__53289;
continue;
} else {
var path = cljs.core.first(seq__52528__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52796_53292 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52800_53293 = null;
var count__52801_53294 = (0);
var i__52802_53295 = (0);
while(true){
if((i__52802_53295 < count__52801_53294)){
var node_53298 = chunk__52800_53293.cljs$core$IIndexed$_nth$arity$2(null,i__52802_53295);
if(cljs.core.not(node_53298.shadow$old)){
var path_match_53299 = shadow.cljs.devtools.client.browser.match_paths(node_53298.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53299)){
var new_link_53300 = (function (){var G__52900 = node_53298.cloneNode(true);
G__52900.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53299),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52900;
})();
(node_53298.shadow$old = true);

(new_link_53300.onload = ((function (seq__52796_53292,chunk__52800_53293,count__52801_53294,i__52802_53295,seq__52528,chunk__52530,count__52531,i__52532,new_link_53300,path_match_53299,node_53298,path,seq__52528__$1,temp__5753__auto__,map__52527,map__52527__$1,msg,updates,reload_info){
return (function (e){
var seq__52907_53301 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__52909_53302 = null;
var count__52910_53303 = (0);
var i__52911_53304 = (0);
while(true){
if((i__52911_53304 < count__52910_53303)){
var map__52924_53305 = chunk__52909_53302.cljs$core$IIndexed$_nth$arity$2(null,i__52911_53304);
var map__52924_53306__$1 = cljs.core.__destructure_map(map__52924_53305);
var task_53307 = map__52924_53306__$1;
var fn_str_53308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52924_53306__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_53309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52924_53306__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_53310 = goog.getObjectByName(fn_str_53308,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_53309)].join(''));

(fn_obj_53310.cljs$core$IFn$_invoke$arity$2 ? fn_obj_53310.cljs$core$IFn$_invoke$arity$2(path,new_link_53300) : fn_obj_53310.call(null,path,new_link_53300));


var G__53311 = seq__52907_53301;
var G__53312 = chunk__52909_53302;
var G__53313 = count__52910_53303;
var G__53314 = (i__52911_53304 + (1));
seq__52907_53301 = G__53311;
chunk__52909_53302 = G__53312;
count__52910_53303 = G__53313;
i__52911_53304 = G__53314;
continue;
} else {
var temp__5753__auto___53315__$1 = cljs.core.seq(seq__52907_53301);
if(temp__5753__auto___53315__$1){
var seq__52907_53316__$1 = temp__5753__auto___53315__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52907_53316__$1)){
var c__4679__auto___53317 = cljs.core.chunk_first(seq__52907_53316__$1);
var G__53318 = cljs.core.chunk_rest(seq__52907_53316__$1);
var G__53319 = c__4679__auto___53317;
var G__53320 = cljs.core.count(c__4679__auto___53317);
var G__53321 = (0);
seq__52907_53301 = G__53318;
chunk__52909_53302 = G__53319;
count__52910_53303 = G__53320;
i__52911_53304 = G__53321;
continue;
} else {
var map__52928_53322 = cljs.core.first(seq__52907_53316__$1);
var map__52928_53323__$1 = cljs.core.__destructure_map(map__52928_53322);
var task_53324 = map__52928_53323__$1;
var fn_str_53325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52928_53323__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_53326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52928_53323__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_53327 = goog.getObjectByName(fn_str_53325,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_53326)].join(''));

(fn_obj_53327.cljs$core$IFn$_invoke$arity$2 ? fn_obj_53327.cljs$core$IFn$_invoke$arity$2(path,new_link_53300) : fn_obj_53327.call(null,path,new_link_53300));


var G__53328 = cljs.core.next(seq__52907_53316__$1);
var G__53329 = null;
var G__53330 = (0);
var G__53331 = (0);
seq__52907_53301 = G__53328;
chunk__52909_53302 = G__53329;
count__52910_53303 = G__53330;
i__52911_53304 = G__53331;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_53298);
});})(seq__52796_53292,chunk__52800_53293,count__52801_53294,i__52802_53295,seq__52528,chunk__52530,count__52531,i__52532,new_link_53300,path_match_53299,node_53298,path,seq__52528__$1,temp__5753__auto__,map__52527,map__52527__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53299], 0));

goog.dom.insertSiblingAfter(new_link_53300,node_53298);


var G__53337 = seq__52796_53292;
var G__53338 = chunk__52800_53293;
var G__53339 = count__52801_53294;
var G__53340 = (i__52802_53295 + (1));
seq__52796_53292 = G__53337;
chunk__52800_53293 = G__53338;
count__52801_53294 = G__53339;
i__52802_53295 = G__53340;
continue;
} else {
var G__53341 = seq__52796_53292;
var G__53342 = chunk__52800_53293;
var G__53343 = count__52801_53294;
var G__53344 = (i__52802_53295 + (1));
seq__52796_53292 = G__53341;
chunk__52800_53293 = G__53342;
count__52801_53294 = G__53343;
i__52802_53295 = G__53344;
continue;
}
} else {
var G__53351 = seq__52796_53292;
var G__53352 = chunk__52800_53293;
var G__53353 = count__52801_53294;
var G__53354 = (i__52802_53295 + (1));
seq__52796_53292 = G__53351;
chunk__52800_53293 = G__53352;
count__52801_53294 = G__53353;
i__52802_53295 = G__53354;
continue;
}
} else {
var temp__5753__auto___53355__$1 = cljs.core.seq(seq__52796_53292);
if(temp__5753__auto___53355__$1){
var seq__52796_53356__$1 = temp__5753__auto___53355__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52796_53356__$1)){
var c__4679__auto___53357 = cljs.core.chunk_first(seq__52796_53356__$1);
var G__53358 = cljs.core.chunk_rest(seq__52796_53356__$1);
var G__53359 = c__4679__auto___53357;
var G__53360 = cljs.core.count(c__4679__auto___53357);
var G__53361 = (0);
seq__52796_53292 = G__53358;
chunk__52800_53293 = G__53359;
count__52801_53294 = G__53360;
i__52802_53295 = G__53361;
continue;
} else {
var node_53362 = cljs.core.first(seq__52796_53356__$1);
if(cljs.core.not(node_53362.shadow$old)){
var path_match_53363 = shadow.cljs.devtools.client.browser.match_paths(node_53362.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53363)){
var new_link_53364 = (function (){var G__52930 = node_53362.cloneNode(true);
G__52930.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53363),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52930;
})();
(node_53362.shadow$old = true);

(new_link_53364.onload = ((function (seq__52796_53292,chunk__52800_53293,count__52801_53294,i__52802_53295,seq__52528,chunk__52530,count__52531,i__52532,new_link_53364,path_match_53363,node_53362,seq__52796_53356__$1,temp__5753__auto___53355__$1,path,seq__52528__$1,temp__5753__auto__,map__52527,map__52527__$1,msg,updates,reload_info){
return (function (e){
var seq__52933_53370 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__52935_53371 = null;
var count__52936_53372 = (0);
var i__52937_53373 = (0);
while(true){
if((i__52937_53373 < count__52936_53372)){
var map__52947_53374 = chunk__52935_53371.cljs$core$IIndexed$_nth$arity$2(null,i__52937_53373);
var map__52947_53375__$1 = cljs.core.__destructure_map(map__52947_53374);
var task_53376 = map__52947_53375__$1;
var fn_str_53377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52947_53375__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_53378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52947_53375__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_53379 = goog.getObjectByName(fn_str_53377,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_53378)].join(''));

(fn_obj_53379.cljs$core$IFn$_invoke$arity$2 ? fn_obj_53379.cljs$core$IFn$_invoke$arity$2(path,new_link_53364) : fn_obj_53379.call(null,path,new_link_53364));


var G__53380 = seq__52933_53370;
var G__53381 = chunk__52935_53371;
var G__53382 = count__52936_53372;
var G__53383 = (i__52937_53373 + (1));
seq__52933_53370 = G__53380;
chunk__52935_53371 = G__53381;
count__52936_53372 = G__53382;
i__52937_53373 = G__53383;
continue;
} else {
var temp__5753__auto___53384__$2 = cljs.core.seq(seq__52933_53370);
if(temp__5753__auto___53384__$2){
var seq__52933_53385__$1 = temp__5753__auto___53384__$2;
if(cljs.core.chunked_seq_QMARK_(seq__52933_53385__$1)){
var c__4679__auto___53386 = cljs.core.chunk_first(seq__52933_53385__$1);
var G__53387 = cljs.core.chunk_rest(seq__52933_53385__$1);
var G__53388 = c__4679__auto___53386;
var G__53389 = cljs.core.count(c__4679__auto___53386);
var G__53390 = (0);
seq__52933_53370 = G__53387;
chunk__52935_53371 = G__53388;
count__52936_53372 = G__53389;
i__52937_53373 = G__53390;
continue;
} else {
var map__52955_53391 = cljs.core.first(seq__52933_53385__$1);
var map__52955_53392__$1 = cljs.core.__destructure_map(map__52955_53391);
var task_53393 = map__52955_53392__$1;
var fn_str_53394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52955_53392__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_53395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52955_53392__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_53401 = goog.getObjectByName(fn_str_53394,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_53395)].join(''));

(fn_obj_53401.cljs$core$IFn$_invoke$arity$2 ? fn_obj_53401.cljs$core$IFn$_invoke$arity$2(path,new_link_53364) : fn_obj_53401.call(null,path,new_link_53364));


var G__53402 = cljs.core.next(seq__52933_53385__$1);
var G__53403 = null;
var G__53404 = (0);
var G__53405 = (0);
seq__52933_53370 = G__53402;
chunk__52935_53371 = G__53403;
count__52936_53372 = G__53404;
i__52937_53373 = G__53405;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_53362);
});})(seq__52796_53292,chunk__52800_53293,count__52801_53294,i__52802_53295,seq__52528,chunk__52530,count__52531,i__52532,new_link_53364,path_match_53363,node_53362,seq__52796_53356__$1,temp__5753__auto___53355__$1,path,seq__52528__$1,temp__5753__auto__,map__52527,map__52527__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53363], 0));

goog.dom.insertSiblingAfter(new_link_53364,node_53362);


var G__53412 = cljs.core.next(seq__52796_53356__$1);
var G__53413 = null;
var G__53414 = (0);
var G__53415 = (0);
seq__52796_53292 = G__53412;
chunk__52800_53293 = G__53413;
count__52801_53294 = G__53414;
i__52802_53295 = G__53415;
continue;
} else {
var G__53416 = cljs.core.next(seq__52796_53356__$1);
var G__53417 = null;
var G__53418 = (0);
var G__53419 = (0);
seq__52796_53292 = G__53416;
chunk__52800_53293 = G__53417;
count__52801_53294 = G__53418;
i__52802_53295 = G__53419;
continue;
}
} else {
var G__53420 = cljs.core.next(seq__52796_53356__$1);
var G__53421 = null;
var G__53422 = (0);
var G__53423 = (0);
seq__52796_53292 = G__53420;
chunk__52800_53293 = G__53421;
count__52801_53294 = G__53422;
i__52802_53295 = G__53423;
continue;
}
}
} else {
}
}
break;
}


var G__53424 = cljs.core.next(seq__52528__$1);
var G__53425 = null;
var G__53426 = (0);
var G__53427 = (0);
seq__52528 = G__53424;
chunk__52530 = G__53425;
count__52531 = G__53426;
i__52532 = G__53427;
continue;
} else {
var G__53428 = cljs.core.next(seq__52528__$1);
var G__53429 = null;
var G__53430 = (0);
var G__53431 = (0);
seq__52528 = G__53428;
chunk__52530 = G__53429;
count__52531 = G__53430;
i__52532 = G__53431;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__52982){
var map__52983 = p__52982;
var map__52983__$1 = cljs.core.__destructure_map(map__52983);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52983__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__53018){
var map__53019 = p__53018;
var map__53019__$1 = cljs.core.__destructure_map(map__53019);
var _ = map__53019__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53019__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__53020,done,error){
var map__53021 = p__53020;
var map__53021__$1 = cljs.core.__destructure_map(map__53021);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53021__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__53022,done,error){
var map__53023 = p__53022;
var map__53023__$1 = cljs.core.__destructure_map(map__53023);
var msg = map__53023__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53023__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53023__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53023__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__53030){
var map__53031 = p__53030;
var map__53031__$1 = cljs.core.__destructure_map(map__53031);
var src = map__53031__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53031__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__53032 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__53032) : done.call(null,G__53032));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__53033){
var map__53034 = p__53033;
var map__53034__$1 = cljs.core.__destructure_map(map__53034);
var msg__$1 = map__53034__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53034__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e53042){var ex = e53042;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__53047){
var map__53048 = p__53047;
var map__53048__$1 = cljs.core.__destructure_map(map__53048);
var env = map__53048__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53048__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__53058){
var map__53059 = p__53058;
var map__53059__$1 = cljs.core.__destructure_map(map__53059);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53059__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53059__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__53062){
var map__53063 = p__53062;
var map__53063__$1 = cljs.core.__destructure_map(map__53063);
var svc = map__53063__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53063__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
