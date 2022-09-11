goog.provide('website_helpers.utils');
/**
 * If no vars are selected, all are!
 */
website_helpers.utils.get_selected_vars = (function website_helpers$utils$get_selected_vars(selections){
if(cljs.core.every_QMARK_((function (p1__38467_SHARP_){
return cljs.core.not(p1__38467_SHARP_);
}),cljs.core.vals(selections))){
return cljs.core.set(cljs.core.keys(selections));
} else {
return cljs.core.set((function (){var iter__5523__auto__ = (function website_helpers$utils$get_selected_vars_$_iter__38468(s__38469){
return (new cljs.core.LazySeq(null,(function (){
var s__38469__$1 = s__38469;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38469__$1);
if(temp__5804__auto__){
var s__38469__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38469__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38469__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38471 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38470 = (0);
while(true){
if((i__38470 < size__5522__auto__)){
var vec__38472 = cljs.core._nth(c__5521__auto__,i__38470);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38472,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38472,(1),null);
if(cljs.core.truth_(selected)){
cljs.core.chunk_append(b__38471,var$);

var G__38483 = (i__38470 + (1));
i__38470 = G__38483;
continue;
} else {
var G__38484 = (i__38470 + (1));
i__38470 = G__38484;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38471),website_helpers$utils$get_selected_vars_$_iter__38468(cljs.core.chunk_rest(s__38469__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38471),null);
}
} else {
var vec__38475 = cljs.core.first(s__38469__$2);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38475,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38475,(1),null);
if(cljs.core.truth_(selected)){
return cljs.core.cons(var$,website_helpers$utils$get_selected_vars_$_iter__38468(cljs.core.rest(s__38469__$2)));
} else {
var G__38485 = cljs.core.rest(s__38469__$2);
s__38469__$1 = G__38485;
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
}
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38478_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__38478_SHARP_,/=/);
}),param_strs));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
website_helpers.utils.get_url_param_selections = (function website_helpers$utils$get_url_param_selections(vars){
var url_params = website_helpers.utils.parse_params();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$utils$get_url_param_selections_$_iter__38479(s__38480){
return (new cljs.core.LazySeq(null,(function (){
var s__38480__$1 = s__38480;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38480__$1);
if(temp__5804__auto__){
var s__38480__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38480__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38480__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38482 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38481 = (0);
while(true){
if((i__38481 < size__5522__auto__)){
var var$ = cljs.core._nth(c__5521__auto__,i__38481);
cljs.core.chunk_append(b__38482,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.contains_QMARK_(url_params,var$)], null));

var G__38486 = (i__38481 + (1));
i__38481 = G__38486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38482),website_helpers$utils$get_url_param_selections_$_iter__38479(cljs.core.chunk_rest(s__38480__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38482),null);
}
} else {
var var$ = cljs.core.first(s__38480__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.contains_QMARK_(url_params,var$)], null),website_helpers$utils$get_url_param_selections_$_iter__38479(cljs.core.rest(s__38480__$2)));
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
