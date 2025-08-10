goog.provide('website_helpers.hyperlink_lists');
website_helpers.hyperlink_lists.markdown_path_to_html_link = (function website_helpers$hyperlink_lists$markdown_path_to_html_link(path){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),clojure.string.replace(clojure.string.replace(path,"content/","/"),".md","/")], null),path], null);
});
website_helpers.hyperlink_lists.category_link = (function website_helpers$hyperlink_lists$category_link(category){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["/?",clojure.string.replace(category," ","-"),"=true"].join('')], null),category], null);
});
website_helpers.hyperlink_lists.link_list = (function website_helpers$hyperlink_lists$link_list(title,links,link_fn){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),": "].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(((links == null))?"":cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),(function (){var iter__5523__auto__ = (function website_helpers$hyperlink_lists$link_list_$_iter__43608(s__43609){
return (new cljs.core.LazySeq(null,(function (){
var s__43609__$1 = s__43609;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__43609__$1);
if(temp__5825__auto__){
var s__43609__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43609__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__43609__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__43611 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__43610 = (0);
while(true){
if((i__43610 < size__5522__auto__)){
var link = cljs.core._nth(c__5521__auto__,i__43610);
cljs.core.chunk_append(b__43611,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(link_fn.cljs$core$IFn$_invoke$arity$1 ? link_fn.cljs$core$IFn$_invoke$arity$1(link) : link_fn.call(null,link))], null));

var G__43615 = (i__43610 + (1));
i__43610 = G__43615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43611),website_helpers$hyperlink_lists$link_list_$_iter__43608(cljs.core.chunk_rest(s__43609__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43611),null);
}
} else {
var link = cljs.core.first(s__43609__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(link_fn.cljs$core$IFn$_invoke$arity$1 ? link_fn.cljs$core$IFn$_invoke$arity$1(link) : link_fn.call(null,link))], null),website_helpers$hyperlink_lists$link_list_$_iter__43608(cljs.core.rest(s__43609__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(links);
})()))], null);
});
/**
 * current-page-path is a string like docs/visual-art/generative-art.md
 */
website_helpers.hyperlink_lists.categories_and_backlinks = (function website_helpers$hyperlink_lists$categories_and_backlinks(var_args){
var G__43614 = arguments.length;
switch (G__43614) {
case 1:
return website_helpers.hyperlink_lists.categories_and_backlinks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return website_helpers.hyperlink_lists.categories_and_backlinks.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('website_helpers.hyperlink_lists.categories_and_backlinks', website_helpers.hyperlink_lists.categories_and_backlinks);

(website_helpers.hyperlink_lists.categories_and_backlinks.cljs$core$IFn$_invoke$arity$1 = (function (current_page_path){
return website_helpers.hyperlink_lists.categories_and_backlinks.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(website_helpers.global.notes),current_page_path);
}));

(website_helpers.hyperlink_lists.categories_and_backlinks.cljs$core$IFn$_invoke$arity$2 = (function (notes,current_page_path){
return (function (notes__$1,current_page_path__$1){
var current_note = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43612_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__43612_SHARP_),["content/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_page_path__$1)].join(''));
}),notes__$1));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),website_helpers.hyperlink_lists.link_list("Backlinks",new cljs.core.Keyword(null,"backlinks","backlinks",1645357998).cljs$core$IFn$_invoke$arity$1(current_note),website_helpers.hyperlink_lists.markdown_path_to_html_link),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),website_helpers.hyperlink_lists.link_list("Categories",new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(current_note),website_helpers.hyperlink_lists.category_link)], null);
});
}));

(website_helpers.hyperlink_lists.categories_and_backlinks.cljs$lang$maxFixedArity = 2);

/**
 * current-page-path is a string like docs/visual-art/generative-art.md
 */
website_helpers.hyperlink_lists.categories_and_backlinks_to_element = (function website_helpers$hyperlink_lists$categories_and_backlinks_to_element(current_page_path,element_id){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.hyperlink_lists.categories_and_backlinks.cljs$core$IFn$_invoke$arity$1(current_page_path)], null),document.getElementById(element_id));
});
goog.exportSymbol('website_helpers.hyperlink_lists.categories_and_backlinks_to_element', website_helpers.hyperlink_lists.categories_and_backlinks_to_element);

//# sourceMappingURL=website_helpers.hyperlink_lists.js.map
