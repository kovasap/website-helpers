goog.provide('website_helpers.recent_posts');
/**
 * A post title with the first few lines.  Links to the actual post.
 */
website_helpers.recent_posts.collapsed_post = (function website_helpers$recent_posts$collapsed_post(p__45780){
var map__45781 = p__45780;
var map__45781__$1 = cljs.core.__destructure_map(map__45781);
var note = map__45781__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45781__$1,new cljs.core.Keyword(null,"title","title",636505583));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45781__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var markdown__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45781__$1,new cljs.core.Keyword(null,"markdown","markdown",1227225089));
var categories = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45781__$1,new cljs.core.Keyword(null,"categories","categories",178386610));
var paragraphs = clojure.string.split.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = markdown__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})(),/\n\n/);
var first_p_of_content = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45779_SHARP_){
return ((clojure.string.starts_with_QMARK_(p1__45779_SHARP_,"---")) || (clojure.string.starts_with_QMARK_(p1__45779_SHARP_,"#")));
}),paragraphs));
if(clojure.string.blank_QMARK_(cljs.core.first(paragraphs))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Empty page"], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"baseline"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null)], null),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),website_helpers.notes.timestamp__GT_day(website_helpers.notes.last_modification_time(note))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",categories)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),first_p_of_content,"  ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),website_helpers.hyperlink_lists.markdown_path_to_url(path)], null),"..."], null)], null)], null);
}
});
website_helpers.recent_posts.take_all_when_nil = (function website_helpers$recent_posts$take_all_when_nil(n,coll){
if((n == null)){
return coll;
} else {
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll);
}
});
website_helpers.recent_posts.recent_posts = (function website_helpers$recent_posts$recent_posts(var_args){
var G__45783 = arguments.length;
switch (G__45783) {
case 0:
return website_helpers.recent_posts.recent_posts.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return website_helpers.recent_posts.recent_posts.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return website_helpers.recent_posts.recent_posts.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('website_helpers.recent_posts.recent_posts', website_helpers.recent_posts.recent_posts);

(website_helpers.recent_posts.recent_posts.cljs$core$IFn$_invoke$arity$0 = (function (){
return website_helpers.recent_posts.recent_posts.cljs$core$IFn$_invoke$arity$2(null,cljs.core.deref(website_helpers.global.notes));
}));

(website_helpers.recent_posts.recent_posts.cljs$core$IFn$_invoke$arity$1 = (function (n){
return website_helpers.recent_posts.recent_posts.cljs$core$IFn$_invoke$arity$2(n,cljs.core.deref(website_helpers.global.notes));
}));

(website_helpers.recent_posts.recent_posts.cljs$core$IFn$_invoke$arity$2 = (function (n,notes){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(website_helpers.recent_posts.collapsed_post,website_helpers.recent_posts.take_all_when_nil(n,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.last_modification_time,notes))))], null));
});
}));

(website_helpers.recent_posts.recent_posts.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=website_helpers.recent_posts.js.map
