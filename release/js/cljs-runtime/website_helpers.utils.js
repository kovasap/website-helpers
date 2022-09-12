goog.provide('website_helpers.utils');
/**
 * If no vars are selected, all are!
 */
website_helpers.utils.get_selected_vars = (function website_helpers$utils$get_selected_vars(selections){
if(cljs.core.every_QMARK_((function (p1__44004_SHARP_){
return cljs.core.not(p1__44004_SHARP_);
}),cljs.core.vals(selections))){
return cljs.core.set(cljs.core.keys(selections));
} else {
return cljs.core.set((function (){var iter__5523__auto__ = (function website_helpers$utils$get_selected_vars_$_iter__44005(s__44006){
return (new cljs.core.LazySeq(null,(function (){
var s__44006__$1 = s__44006;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__44006__$1);
if(temp__5804__auto__){
var s__44006__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44006__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44006__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44008 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44007 = (0);
while(true){
if((i__44007 < size__5522__auto__)){
var vec__44009 = cljs.core._nth(c__5521__auto__,i__44007);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44009,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44009,(1),null);
if(cljs.core.truth_(selected)){
cljs.core.chunk_append(b__44008,var$);

var G__44020 = (i__44007 + (1));
i__44007 = G__44020;
continue;
} else {
var G__44021 = (i__44007 + (1));
i__44007 = G__44021;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44008),website_helpers$utils$get_selected_vars_$_iter__44005(cljs.core.chunk_rest(s__44006__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44008),null);
}
} else {
var vec__44012 = cljs.core.first(s__44006__$2);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44012,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44012,(1),null);
if(cljs.core.truth_(selected)){
return cljs.core.cons(var$,website_helpers$utils$get_selected_vars_$_iter__44005(cljs.core.rest(s__44006__$2)));
} else {
var G__44022 = cljs.core.rest(s__44006__$2);
s__44006__$1 = G__44022;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44015_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__44015_SHARP_,/=/);
}),param_strs));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
website_helpers.utils.get_url_param_selections = (function website_helpers$utils$get_url_param_selections(vars,url_params){
cljs.core.reset_BANG_(url_params,website_helpers.utils.parse_params());

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$utils$get_url_param_selections_$_iter__44016(s__44017){
return (new cljs.core.LazySeq(null,(function (){
var s__44017__$1 = s__44017;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__44017__$1);
if(temp__5804__auto__){
var s__44017__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44017__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44017__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44019 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44018 = (0);
while(true){
if((i__44018 < size__5522__auto__)){
var var$ = cljs.core._nth(c__5521__auto__,i__44018);
cljs.core.chunk_append(b__44019,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.contains_QMARK_(cljs.core.deref(url_params),var$)], null));

var G__44023 = (i__44018 + (1));
i__44018 = G__44023;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44019),website_helpers$utils$get_url_param_selections_$_iter__44016(cljs.core.chunk_rest(s__44017__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44019),null);
}
} else {
var var$ = cljs.core.first(s__44017__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.contains_QMARK_(cljs.core.deref(url_params),var$)], null),website_helpers$utils$get_url_param_selections_$_iter__44016(cljs.core.rest(s__44017__$2)));
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
