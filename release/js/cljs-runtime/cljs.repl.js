goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50658){
var map__50659 = p__50658;
var map__50659__$1 = cljs.core.__destructure_map(map__50659);
var m = map__50659__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50659__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50659__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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
var seq__50660_50932 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50661_50933 = null;
var count__50662_50934 = (0);
var i__50663_50935 = (0);
while(true){
if((i__50663_50935 < count__50662_50934)){
var f_50937 = chunk__50661_50933.cljs$core$IIndexed$_nth$arity$2(null,i__50663_50935);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50937], 0));


var G__50938 = seq__50660_50932;
var G__50939 = chunk__50661_50933;
var G__50940 = count__50662_50934;
var G__50941 = (i__50663_50935 + (1));
seq__50660_50932 = G__50938;
chunk__50661_50933 = G__50939;
count__50662_50934 = G__50940;
i__50663_50935 = G__50941;
continue;
} else {
var temp__5753__auto___50942 = cljs.core.seq(seq__50660_50932);
if(temp__5753__auto___50942){
var seq__50660_50943__$1 = temp__5753__auto___50942;
if(cljs.core.chunked_seq_QMARK_(seq__50660_50943__$1)){
var c__4679__auto___50944 = cljs.core.chunk_first(seq__50660_50943__$1);
var G__50945 = cljs.core.chunk_rest(seq__50660_50943__$1);
var G__50946 = c__4679__auto___50944;
var G__50947 = cljs.core.count(c__4679__auto___50944);
var G__50948 = (0);
seq__50660_50932 = G__50945;
chunk__50661_50933 = G__50946;
count__50662_50934 = G__50947;
i__50663_50935 = G__50948;
continue;
} else {
var f_50949 = cljs.core.first(seq__50660_50943__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50949], 0));


var G__50950 = cljs.core.next(seq__50660_50943__$1);
var G__50951 = null;
var G__50952 = (0);
var G__50953 = (0);
seq__50660_50932 = G__50950;
chunk__50661_50933 = G__50951;
count__50662_50934 = G__50952;
i__50663_50935 = G__50953;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50955 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50955], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50955)))?cljs.core.second(arglists_50955):arglists_50955)], 0));
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
var seq__50670_50962 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50671_50963 = null;
var count__50672_50964 = (0);
var i__50673_50965 = (0);
while(true){
if((i__50673_50965 < count__50672_50964)){
var vec__50684_50966 = chunk__50671_50963.cljs$core$IIndexed$_nth$arity$2(null,i__50673_50965);
var name_50967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50684_50966,(0),null);
var map__50687_50968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50684_50966,(1),null);
var map__50687_50969__$1 = cljs.core.__destructure_map(map__50687_50968);
var doc_50970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50687_50969__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50687_50969__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50967], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50971], 0));

if(cljs.core.truth_(doc_50970)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50970], 0));
} else {
}


var G__50972 = seq__50670_50962;
var G__50973 = chunk__50671_50963;
var G__50974 = count__50672_50964;
var G__50975 = (i__50673_50965 + (1));
seq__50670_50962 = G__50972;
chunk__50671_50963 = G__50973;
count__50672_50964 = G__50974;
i__50673_50965 = G__50975;
continue;
} else {
var temp__5753__auto___50976 = cljs.core.seq(seq__50670_50962);
if(temp__5753__auto___50976){
var seq__50670_50977__$1 = temp__5753__auto___50976;
if(cljs.core.chunked_seq_QMARK_(seq__50670_50977__$1)){
var c__4679__auto___50978 = cljs.core.chunk_first(seq__50670_50977__$1);
var G__50980 = cljs.core.chunk_rest(seq__50670_50977__$1);
var G__50981 = c__4679__auto___50978;
var G__50982 = cljs.core.count(c__4679__auto___50978);
var G__50983 = (0);
seq__50670_50962 = G__50980;
chunk__50671_50963 = G__50981;
count__50672_50964 = G__50982;
i__50673_50965 = G__50983;
continue;
} else {
var vec__50691_50984 = cljs.core.first(seq__50670_50977__$1);
var name_50985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50691_50984,(0),null);
var map__50694_50986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50691_50984,(1),null);
var map__50694_50987__$1 = cljs.core.__destructure_map(map__50694_50986);
var doc_50988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50694_50987__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50694_50987__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50985], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50989], 0));

if(cljs.core.truth_(doc_50988)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50988], 0));
} else {
}


var G__50991 = cljs.core.next(seq__50670_50977__$1);
var G__50992 = null;
var G__50993 = (0);
var G__50994 = (0);
seq__50670_50962 = G__50991;
chunk__50671_50963 = G__50992;
count__50672_50964 = G__50993;
i__50673_50965 = G__50994;
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

var seq__50697 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50698 = null;
var count__50699 = (0);
var i__50700 = (0);
while(true){
if((i__50700 < count__50699)){
var role = chunk__50698.cljs$core$IIndexed$_nth$arity$2(null,i__50700);
var temp__5753__auto___50995__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50995__$1)){
var spec_50996 = temp__5753__auto___50995__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50996)], 0));
} else {
}


var G__50997 = seq__50697;
var G__50998 = chunk__50698;
var G__50999 = count__50699;
var G__51000 = (i__50700 + (1));
seq__50697 = G__50997;
chunk__50698 = G__50998;
count__50699 = G__50999;
i__50700 = G__51000;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__50697);
if(temp__5753__auto____$1){
var seq__50697__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50697__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50697__$1);
var G__51001 = cljs.core.chunk_rest(seq__50697__$1);
var G__51002 = c__4679__auto__;
var G__51003 = cljs.core.count(c__4679__auto__);
var G__51004 = (0);
seq__50697 = G__51001;
chunk__50698 = G__51002;
count__50699 = G__51003;
i__50700 = G__51004;
continue;
} else {
var role = cljs.core.first(seq__50697__$1);
var temp__5753__auto___51005__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___51005__$2)){
var spec_51006 = temp__5753__auto___51005__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51006)], 0));
} else {
}


var G__51008 = cljs.core.next(seq__50697__$1);
var G__51009 = null;
var G__51010 = (0);
var G__51011 = (0);
seq__50697 = G__51008;
chunk__50698 = G__51009;
count__50699 = G__51010;
i__50700 = G__51011;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
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
var G__51016 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51017 = cljs.core.ex_cause(t);
via = G__51016;
t = G__51017;
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
var map__50724 = datafied_throwable;
var map__50724__$1 = cljs.core.__destructure_map(map__50724);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50724__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50724__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50724__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50725 = cljs.core.last(via);
var map__50725__$1 = cljs.core.__destructure_map(map__50725);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50725__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50725__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50725__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50726 = data;
var map__50726__$1 = cljs.core.__destructure_map(map__50726);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50726__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50726__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50726__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50727 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50727__$1 = cljs.core.__destructure_map(map__50727);
var top_data = map__50727__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50727__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50728 = phase;
var G__50728__$1 = (((G__50728 instanceof cljs.core.Keyword))?G__50728.fqn:null);
switch (G__50728__$1) {
case "read-source":
var map__50729 = data;
var map__50729__$1 = cljs.core.__destructure_map(map__50729);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50729__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50729__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50730 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50730__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50730,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50730);
var G__50730__$2 = (cljs.core.truth_((function (){var fexpr__50731 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50731.cljs$core$IFn$_invoke$arity$1 ? fexpr__50731.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50731.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50730__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50730__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50730__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50730__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50732 = top_data;
var G__50732__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50732,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50732);
var G__50732__$2 = (cljs.core.truth_((function (){var fexpr__50733 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50733.cljs$core$IFn$_invoke$arity$1 ? fexpr__50733.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50733.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50732__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50732__$1);
var G__50732__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50732__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50732__$2);
var G__50732__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50732__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50732__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50732__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50732__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50751 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50751,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50751,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50751,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50751,(3),null);
var G__50754 = top_data;
var G__50754__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50754,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50754);
var G__50754__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50754__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50754__$1);
var G__50754__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50754__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50754__$2);
var G__50754__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50754__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50754__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50754__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50754__$4;
}

break;
case "execution":
var vec__50763 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50763,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50763,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50763,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50763,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50722_SHARP_){
var or__4253__auto__ = (p1__50722_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__50767 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50767.cljs$core$IFn$_invoke$arity$1 ? fexpr__50767.cljs$core$IFn$_invoke$arity$1(p1__50722_SHARP_) : fexpr__50767.call(null,p1__50722_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__50775 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50775__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50775,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50775);
var G__50775__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50775__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50775__$1);
var G__50775__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50775__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50775__$2);
var G__50775__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50775__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50775__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50775__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50775__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50728__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50811){
var map__50816 = p__50811;
var map__50816__$1 = cljs.core.__destructure_map(map__50816);
var triage_data = map__50816__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50816__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50816__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50816__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50816__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50816__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50816__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50816__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50816__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50836 = phase;
var G__50836__$1 = (((G__50836 instanceof cljs.core.Keyword))?G__50836.fqn:null);
switch (G__50836__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50838 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50839 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50840 = loc;
var G__50841 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50850_51124 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50851_51125 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50852_51126 = true;
var _STAR_print_fn_STAR__temp_val__50853_51127 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50852_51126);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50853_51127);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50808_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50808_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50851_51125);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50850_51124);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50838,G__50839,G__50840,G__50841) : format.call(null,G__50838,G__50839,G__50840,G__50841));

break;
case "macroexpansion":
var G__50859 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50860 = cause_type;
var G__50861 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50862 = loc;
var G__50863 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50859,G__50860,G__50861,G__50862,G__50863) : format.call(null,G__50859,G__50860,G__50861,G__50862,G__50863));

break;
case "compile-syntax-check":
var G__50864 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50865 = cause_type;
var G__50866 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50867 = loc;
var G__50868 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50864,G__50865,G__50866,G__50867,G__50868) : format.call(null,G__50864,G__50865,G__50866,G__50867,G__50868));

break;
case "compilation":
var G__50869 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50870 = cause_type;
var G__50871 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50872 = loc;
var G__50873 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50869,G__50870,G__50871,G__50872,G__50873) : format.call(null,G__50869,G__50870,G__50871,G__50872,G__50873));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50875 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50876 = symbol;
var G__50877 = loc;
var G__50878 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50884_51131 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50885_51132 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50886_51133 = true;
var _STAR_print_fn_STAR__temp_val__50887_51134 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50886_51133);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50887_51134);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50809_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50809_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50885_51132);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50884_51131);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50875,G__50876,G__50877,G__50878) : format.call(null,G__50875,G__50876,G__50877,G__50878));
} else {
var G__50899 = "Execution error%s at %s(%s).\n%s\n";
var G__50900 = cause_type;
var G__50901 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50902 = loc;
var G__50903 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50899,G__50900,G__50901,G__50902,G__50903) : format.call(null,G__50899,G__50900,G__50901,G__50902,G__50903));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50836__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
