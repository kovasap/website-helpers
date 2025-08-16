goog.provide('website_helpers.utils');
website_helpers.utils.get_selected_vars = (function website_helpers$utils$get_selected_vars(selections){
return cljs.core.set((function (){var iter__5523__auto__ = (function website_helpers$utils$get_selected_vars_$_iter__52861(s__52862){
return (new cljs.core.LazySeq(null,(function (){
var s__52862__$1 = s__52862;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__52862__$1);
if(temp__5825__auto__){
var s__52862__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52862__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__52862__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__52864 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__52863 = (0);
while(true){
if((i__52863 < size__5522__auto__)){
var vec__52865 = cljs.core._nth(c__5521__auto__,i__52863);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52865,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52865,(1),null);
if(cljs.core.truth_(selected)){
cljs.core.chunk_append(b__52864,var$);

var G__52888 = (i__52863 + (1));
i__52863 = G__52888;
continue;
} else {
var G__52889 = (i__52863 + (1));
i__52863 = G__52889;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52864),website_helpers$utils$get_selected_vars_$_iter__52861(cljs.core.chunk_rest(s__52862__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52864),null);
}
} else {
var vec__52868 = cljs.core.first(s__52862__$2);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52868,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52868,(1),null);
if(cljs.core.truth_(selected)){
return cljs.core.cons(var$,website_helpers$utils$get_selected_vars_$_iter__52861(cljs.core.rest(s__52862__$2)));
} else {
var G__52890 = cljs.core.rest(s__52862__$2);
s__52862__$1 = G__52890;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(selections);
})());
});
website_helpers.utils.my_md__GT_hiccup = (function website_helpers$utils$my_md__GT_hiccup(string){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),cljs.core.rest(cljs.core.rest(cljs.core.last(markdown_to_hiccup.core.component(markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$1(string))))));
});
website_helpers.utils.my_md__GT_hiccup("[Slipways](https://slipways.net/)");
website_helpers.utils.my_md__GT_hiccup("This includes watching videos from channels like\n  [Veritasium](https://www.youtube.com/user/1veritasium), \n  [CGP Grey](https://www.youtube.com/user/CGPGrey),\n  and [Kurzgesagt](https://www.youtube.com/user/Kurzgesagt).");
/**
 * Parse URL parameters into a hashmap
 */
website_helpers.utils.parse_params = (function website_helpers$utils$parse_params(){
var url = window.location;
var param_strs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),/\&/);
if(clojure.string.includes_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"?")){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$utils$parse_params_$_iter__52872(s__52873){
return (new cljs.core.LazySeq(null,(function (){
var s__52873__$1 = s__52873;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__52873__$1);
if(temp__5825__auto__){
var s__52873__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52873__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__52873__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__52875 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__52874 = (0);
while(true){
if((i__52874 < size__5522__auto__)){
var vec__52876 = cljs.core._nth(c__5521__auto__,i__52874);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52876,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52876,(1),null);
cljs.core.chunk_append(b__52875,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(k,/\+/," "),v], null));

var G__52891 = (i__52874 + (1));
i__52874 = G__52891;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52875),website_helpers$utils$parse_params_$_iter__52872(cljs.core.chunk_rest(s__52873__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52875),null);
}
} else {
var vec__52879 = cljs.core.first(s__52873__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52879,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52879,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(k,/\+/," "),v], null),website_helpers$utils$parse_params_$_iter__52872(cljs.core.rest(s__52873__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52871_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__52871_SHARP_,/=/);
}),param_strs));
})());
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
website_helpers.utils.get_url_param_selections = (function website_helpers$utils$get_url_param_selections(vars,url_params){
cljs.core.reset_BANG_(url_params,website_helpers.utils.parse_params());

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$utils$get_url_param_selections_$_iter__52882(s__52883){
return (new cljs.core.LazySeq(null,(function (){
var s__52883__$1 = s__52883;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__52883__$1);
if(temp__5825__auto__){
var s__52883__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52883__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__52883__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__52885 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__52884 = (0);
while(true){
if((i__52884 < size__5522__auto__)){
var var$ = cljs.core._nth(c__5521__auto__,i__52884);
cljs.core.chunk_append(b__52885,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.contains_QMARK_(cljs.core.deref(url_params),var$)], null));

var G__52892 = (i__52884 + (1));
i__52884 = G__52892;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52885),website_helpers$utils$get_url_param_selections_$_iter__52882(cljs.core.chunk_rest(s__52883__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52885),null);
}
} else {
var var$ = cljs.core.first(s__52883__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.contains_QMARK_(cljs.core.deref(url_params),var$)], null),website_helpers$utils$get_url_param_selections_$_iter__52882(cljs.core.rest(s__52883__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(vars);
})());
});

//# sourceMappingURL=website_helpers.utils.js.map
