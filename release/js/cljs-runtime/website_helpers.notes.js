goog.provide('website_helpers.notes');
website_helpers.notes.Note = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
website_helpers.notes.ex_note = (function website_helpers$notes$ex_note(n,categories){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"markdown","markdown",1227225089),["text ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword(null,"path","path",-188191168),["content/docs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".md"].join(''),new cljs.core.Keyword(null,"title","title",636505583),["t-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword(null,"categories","categories",178386610),categories], null);
});
website_helpers.notes.example_notes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.notes.ex_note("1",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["b",null,"a 1",null], null), null)),website_helpers.notes.ex_note("2",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a 1",null], null), null)),website_helpers.notes.ex_note("3",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c",null], null), null)),website_helpers.notes.ex_note("4",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c",null,"a 1",null], null), null))], null);
/**
 * Returns a map of categories to all notes with that category.
 */
website_helpers.notes.get_notes_by_category = (function website_helpers$notes$get_notes_by_category(notes){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$get_notes_by_category_$_iter__51316(s__51317){
return (new cljs.core.LazySeq(null,(function (){
var s__51317__$1 = s__51317;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__51317__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var note = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__51317__$1,note,xs__6360__auto__,temp__5804__auto__){
return (function website_helpers$notes$get_notes_by_category_$_iter__51316_$_iter__51318(s__51319){
return (new cljs.core.LazySeq(null,((function (s__51317__$1,note,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__51319__$1 = s__51319;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__51319__$1);
if(temp__5804__auto____$1){
var s__51319__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51319__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51319__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51321 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51320 = (0);
while(true){
if((i__51320 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__51320);
cljs.core.chunk_append(b__51321,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__51388 = (i__51320 + (1));
i__51320 = G__51388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51321),website_helpers$notes$get_notes_by_category_$_iter__51316_$_iter__51318(cljs.core.chunk_rest(s__51319__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51321),null);
}
} else {
var category = cljs.core.first(s__51319__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_category_$_iter__51316_$_iter__51318(cljs.core.rest(s__51319__$2)));
}
} else {
return null;
}
break;
}
});})(s__51317__$1,note,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__51317__$1,note,xs__6360__auto__,temp__5804__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,website_helpers$notes$get_notes_by_category_$_iter__51316(cljs.core.rest(s__51317__$1)));
} else {
var G__51389 = cljs.core.rest(s__51317__$1);
s__51317__$1 = G__51389;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(notes);
})());
});
website_helpers.notes.get_largest_category = (function website_helpers$notes$get_largest_category(var_args){
var G__51323 = arguments.length;
switch (G__51323) {
case 1:
return website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$1 = (function (notes){
return website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2(notes,cljs.core.PersistentHashSet.EMPTY);
}));

(website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2 = (function (notes,categories_to_ignore){
return cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__51324){
var vec__51325 = p__51324;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51325,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51325,(1),null);
return cljs.core.count(v);
}),(function (){var iter__5523__auto__ = (function website_helpers$notes$iter__51328(s__51329){
return (new cljs.core.LazySeq(null,(function (){
var s__51329__$1 = s__51329;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__51329__$1);
if(temp__5804__auto__){
var s__51329__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51329__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51329__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51331 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51330 = (0);
while(true){
if((i__51330 < size__5522__auto__)){
var vec__51332 = cljs.core._nth(c__5521__auto__,i__51330);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51332,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51332,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
cljs.core.chunk_append(b__51331,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null));

var G__51391 = (i__51330 + (1));
i__51330 = G__51391;
continue;
} else {
var G__51392 = (i__51330 + (1));
i__51330 = G__51392;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51331),website_helpers$notes$iter__51328(cljs.core.chunk_rest(s__51329__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51331),null);
}
} else {
var vec__51335 = cljs.core.first(s__51329__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51335,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51335,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null),website_helpers$notes$iter__51328(cljs.core.rest(s__51329__$2)));
} else {
var G__51393 = cljs.core.rest(s__51329__$2);
s__51329__$1 = G__51393;
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
return iter__5523__auto__(website_helpers.notes.get_notes_by_category(notes));
})())));
}));

(website_helpers.notes.get_largest_category.cljs$lang$maxFixedArity = 2);

website_helpers.notes.get_notes_by_largest_category = (function website_helpers$notes$get_notes_by_largest_category(var_args){
var G__51339 = arguments.length;
switch (G__51339) {
case 1:
return website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$1 = (function (notes){
return website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$2(notes,cljs.core.PersistentHashSet.EMPTY);
}));

(website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$2 = (function (notes,categories_to_ignore){
if((((notes == null)) || ((cljs.core.count(notes) <= (1))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),notes], null);
} else {
var vec__51340 = website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2(notes,categories_to_ignore);
var largest_category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51340,(0),null);
var largest_notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51340,(1),null);
var other_notes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(notes,largest_notes);
if((largest_notes == null)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),notes], null);
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([largest_category,website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$2(largest_notes,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(categories_to_ignore,largest_category))]),website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$2(other_notes,categories_to_ignore)], 0));
}
}
}));

(website_helpers.notes.get_notes_by_largest_category.cljs$lang$maxFixedArity = 2);

website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$1(cljs.core.set(website_helpers.all_data.notes));
website_helpers.notes.path__GT_url = (function website_helpers$notes$path__GT_url(path){
return clojure.string.replace(clojure.string.replace_first(path,"content",""),/.md/,"/");
});
website_helpers.notes.note__GT_link = (function website_helpers$notes$note__GT_link(note,cur_page_note){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(function (){var attrs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),website_helpers.notes.path__GT_url(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(note))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur_page_note,note)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null));
} else {
return attrs;
}
})(),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(note)], null);
});
website_helpers.notes.note_to_li = (function website_helpers$notes$note_to_li(note,cur_page_note){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(note)], null),website_helpers.notes.note__GT_link(note,cur_page_note)], null);
});
website_helpers.notes.get_cur_page_note = (function website_helpers$notes$get_cur_page_note(possible_notes){
var url = window.location.pathname;
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51343_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.path__GT_url(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__51343_SHARP_)),url);
}),possible_notes));
});
website_helpers.notes.make_subtree = (function website_helpers$notes$make_subtree(notes_by_category,cur_page){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$notes$make_subtree_$_iter__51344(s__51345){
return (new cljs.core.LazySeq(null,(function (){
var s__51345__$1 = s__51345;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__51345__$1);
if(temp__5804__auto__){
var s__51345__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51345__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51345__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51347 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51346 = (0);
while(true){
if((i__51346 < size__5522__auto__)){
var vec__51348 = cljs.core._nth(c__5521__auto__,i__51346);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51348,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51348,(1),null);
cljs.core.chunk_append(b__51347,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (i__51346,vec__51348,category,subtree,c__5521__auto__,size__5522__auto__,b__51347,s__51345__$2,temp__5804__auto__){
return (function website_helpers$notes$make_subtree_$_iter__51344_$_iter__51351(s__51352){
return (new cljs.core.LazySeq(null,((function (i__51346,vec__51348,category,subtree,c__5521__auto__,size__5522__auto__,b__51347,s__51345__$2,temp__5804__auto__){
return (function (){
var s__51352__$1 = s__51352;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__51352__$1);
if(temp__5804__auto____$1){
var s__51352__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51352__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__51352__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__51354 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__51353 = (0);
while(true){
if((i__51353 < size__5522__auto____$1)){
var note = cljs.core._nth(c__5521__auto____$1,i__51353);
cljs.core.chunk_append(b__51354,website_helpers.notes.note_to_li(note,cur_page));

var G__51395 = (i__51353 + (1));
i__51353 = G__51395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51354),website_helpers$notes$make_subtree_$_iter__51344_$_iter__51351(cljs.core.chunk_rest(s__51352__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51354),null);
}
} else {
var note = cljs.core.first(s__51352__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note,cur_page),website_helpers$notes$make_subtree_$_iter__51344_$_iter__51351(cljs.core.rest(s__51352__$2)));
}
} else {
return null;
}
break;
}
});})(i__51346,vec__51348,category,subtree,c__5521__auto__,size__5522__auto__,b__51347,s__51345__$2,temp__5804__auto__))
,null,null));
});})(i__51346,vec__51348,category,subtree,c__5521__auto__,size__5522__auto__,b__51347,s__51345__$2,temp__5804__auto__))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(cur_page),category)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)], null)], null),(website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$2 ? website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$2(subtree,cur_page) : website_helpers.notes.make_subtree.call(null,subtree,cur_page))], null)], null)], null)));

var G__51396 = (i__51346 + (1));
i__51346 = G__51396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51347),website_helpers$notes$make_subtree_$_iter__51344(cljs.core.chunk_rest(s__51345__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51347),null);
}
} else {
var vec__51355 = cljs.core.first(s__51345__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51355,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51355,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__51355,category,subtree,s__51345__$2,temp__5804__auto__){
return (function website_helpers$notes$make_subtree_$_iter__51344_$_iter__51358(s__51359){
return (new cljs.core.LazySeq(null,(function (){
var s__51359__$1 = s__51359;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__51359__$1);
if(temp__5804__auto____$1){
var s__51359__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51359__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51359__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51361 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51360 = (0);
while(true){
if((i__51360 < size__5522__auto__)){
var note = cljs.core._nth(c__5521__auto__,i__51360);
cljs.core.chunk_append(b__51361,website_helpers.notes.note_to_li(note,cur_page));

var G__51397 = (i__51360 + (1));
i__51360 = G__51397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51361),website_helpers$notes$make_subtree_$_iter__51344_$_iter__51358(cljs.core.chunk_rest(s__51359__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51361),null);
}
} else {
var note = cljs.core.first(s__51359__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note,cur_page),website_helpers$notes$make_subtree_$_iter__51344_$_iter__51358(cljs.core.rest(s__51359__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__51355,category,subtree,s__51345__$2,temp__5804__auto__))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(cur_page),category)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)], null)], null),(website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$2 ? website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$2(subtree,cur_page) : website_helpers.notes.make_subtree.call(null,subtree,cur_page))], null)], null)], null)),website_helpers$notes$make_subtree_$_iter__51344(cljs.core.rest(s__51345__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(notes_by_category);
})()));
});
website_helpers.notes.get_notes_for_categories = (function website_helpers$notes$get_notes_for_categories(notes,selected_categories){
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51362_SHARP_){
return (!(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(selected_categories,new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(p1__51362_SHARP_)))));
}),notes));
});
/**
 * Converts a map produced by get-notes-by-category to a PageTree)
 *   readable by page_graph.cljs logic.
 */
website_helpers.notes.notes_by_category_to_children_tree = (function website_helpers$notes$notes_by_category_to_children_tree(notes_by_category,categories_to_idx){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$notes$notes_by_category_to_children_tree_$_iter__51363(s__51364){
return (new cljs.core.LazySeq(null,(function (){
var s__51364__$1 = s__51364;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__51364__$1);
if(temp__5804__auto__){
var s__51364__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51364__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51364__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51366 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51365 = (0);
while(true){
if((i__51365 < size__5522__auto__)){
var vec__51367 = cljs.core._nth(c__5521__auto__,i__51365);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51367,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51367,(1),null);
cljs.core.chunk_append(b__51366,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"notes","notes",-1039600523),k))?cljs.core.vec(v):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),k,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,k),new cljs.core.Keyword(null,"children","children",-940561982),(website_helpers.notes.notes_by_category_to_children_tree.cljs$core$IFn$_invoke$arity$2 ? website_helpers.notes.notes_by_category_to_children_tree.cljs$core$IFn$_invoke$arity$2(v,categories_to_idx) : website_helpers.notes.notes_by_category_to_children_tree.call(null,v,categories_to_idx))], null)], null)));

var G__51406 = (i__51365 + (1));
i__51365 = G__51406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51366),website_helpers$notes$notes_by_category_to_children_tree_$_iter__51363(cljs.core.chunk_rest(s__51364__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51366),null);
}
} else {
var vec__51370 = cljs.core.first(s__51364__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51370,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51370,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"notes","notes",-1039600523),k))?cljs.core.vec(v):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),k,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,k),new cljs.core.Keyword(null,"children","children",-940561982),(website_helpers.notes.notes_by_category_to_children_tree.cljs$core$IFn$_invoke$arity$2 ? website_helpers.notes.notes_by_category_to_children_tree.cljs$core$IFn$_invoke$arity$2(v,categories_to_idx) : website_helpers.notes.notes_by_category_to_children_tree.call(null,v,categories_to_idx))], null)], null)),website_helpers$notes$notes_by_category_to_children_tree_$_iter__51363(cljs.core.rest(s__51364__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(notes_by_category);
})()));
});
website_helpers.notes.organize_notes_by_category = (function website_helpers$notes$organize_notes_by_category(notes,selected_categories){
return website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$1(website_helpers.notes.get_notes_for_categories(notes,selected_categories));
});
website_helpers.notes.index_categories = (function website_helpers$notes$index_categories(categories,num_notes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$index_categories_$_iter__51373(s__51374){
return (new cljs.core.LazySeq(null,(function (){
var s__51374__$1 = s__51374;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__51374__$1);
if(temp__5804__auto__){
var s__51374__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51374__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51374__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51376 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51375 = (0);
while(true){
if((i__51375 < size__5522__auto__)){
var vec__51377 = cljs.core._nth(c__5521__auto__,i__51375);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51377,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51377,(1),null);
cljs.core.chunk_append(b__51376,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(num_notes + i)], null));

var G__51407 = (i__51375 + (1));
i__51375 = G__51407;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51376),website_helpers$notes$index_categories_$_iter__51373(cljs.core.chunk_rest(s__51374__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51376),null);
}
} else {
var vec__51380 = cljs.core.first(s__51374__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51380,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51380,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(num_notes + i)], null),website_helpers$notes$index_categories_$_iter__51373(cljs.core.rest(s__51374__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,categories));
})());
});
website_helpers.notes.to_tree = (function website_helpers$notes$to_tree(){
return cljs.test.test_var(website_helpers.notes.to_tree.cljs$lang$var);
});
website_helpers.notes.to_tree.cljs$lang$test = (function (){
website_helpers.notes.example_categories = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c",null,"a 1",null], null), null);

try{var values__10764__auto__ = (new cljs.core.List(null,website_helpers.notes.notes_by_category_to_children_tree(website_helpers.notes.organize_notes_by_category(website_helpers.notes.example_notes,website_helpers.notes.example_categories),website_helpers.notes.index_categories(website_helpers.notes.example_categories,cljs.core.count(website_helpers.notes.example_notes))),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a 1",new cljs.core.Keyword(null,"idx","idx",1053688473),(5),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"c",new cljs.core.Keyword(null,"idx","idx",1053688473),(4),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"4",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 4",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/4.md",new cljs.core.Keyword(null,"title","title",636505583),"t-4",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c",null,"a 1",null], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"b",new cljs.core.Keyword(null,"idx","idx",1053688473),null,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"1",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 1",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/1.md",new cljs.core.Keyword(null,"title","title",636505583),"t-1",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["b",null,"a 1",null], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"2",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 2",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/2.md",new cljs.core.Keyword(null,"title","title",636505583),"t-2",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a 1",null], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"3",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 3",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/3.md",new cljs.core.Keyword(null,"title","title",636505583),"t-3",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c",null], null), null)], null)], null),null,(1),null)),(2),null));
var result__10765__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__10764__auto__);
if(cljs.core.truth_(result__10765__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["website_helpers/notes.cljs",47,new cljs.core.Keyword(null,"pass","pass",1574159993),7,157,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"notes-by-category-to-children-tree","notes-by-category-to-children-tree",-982591524,null),cljs.core.list(new cljs.core.Symbol(null,"organize-notes-by-category","organize-notes-by-category",-1788070850,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null)),cljs.core.list(new cljs.core.Symbol(null,"index-categories","index-categories",-594031902,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a 1",new cljs.core.Keyword(null,"idx","idx",1053688473),(5),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"c",new cljs.core.Keyword(null,"idx","idx",1053688473),(4),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"4",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 4",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/4.md",new cljs.core.Keyword(null,"title","title",636505583),"t-4",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"b",new cljs.core.Keyword(null,"idx","idx",1053688473),null,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"1",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 1",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/1.md",new cljs.core.Keyword(null,"title","title",636505583),"t-1",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["b","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"2",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 2",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/2.md",new cljs.core.Keyword(null,"title","title",636505583),"t-2",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"3",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 3",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/3.md",new cljs.core.Keyword(null,"title","title",636505583),"t-3",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c","null"], null), null)], null)], null)),173,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10764__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["website_helpers/notes.cljs",47,new cljs.core.Keyword(null,"fail","fail",1706214930),7,157,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"notes-by-category-to-children-tree","notes-by-category-to-children-tree",-982591524,null),cljs.core.list(new cljs.core.Symbol(null,"organize-notes-by-category","organize-notes-by-category",-1788070850,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null)),cljs.core.list(new cljs.core.Symbol(null,"index-categories","index-categories",-594031902,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a 1",new cljs.core.Keyword(null,"idx","idx",1053688473),(5),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"c",new cljs.core.Keyword(null,"idx","idx",1053688473),(4),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"4",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 4",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/4.md",new cljs.core.Keyword(null,"title","title",636505583),"t-4",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"b",new cljs.core.Keyword(null,"idx","idx",1053688473),null,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"1",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 1",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/1.md",new cljs.core.Keyword(null,"title","title",636505583),"t-1",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["b","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"2",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 2",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/2.md",new cljs.core.Keyword(null,"title","title",636505583),"t-2",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"3",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 3",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/3.md",new cljs.core.Keyword(null,"title","title",636505583),"t-3",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c","null"], null), null)], null)], null)),173,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10764__auto__),null,(1),null)),(2),null)),null]));
}

return result__10765__auto__;
}catch (e51383){var t__10815__auto__ = e51383;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["website_helpers/notes.cljs",47,new cljs.core.Keyword(null,"error","error",-978969032),7,157,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"notes-by-category-to-children-tree","notes-by-category-to-children-tree",-982591524,null),cljs.core.list(new cljs.core.Symbol(null,"organize-notes-by-category","organize-notes-by-category",-1788070850,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null)),cljs.core.list(new cljs.core.Symbol(null,"index-categories","index-categories",-594031902,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a 1",new cljs.core.Keyword(null,"idx","idx",1053688473),(5),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"c",new cljs.core.Keyword(null,"idx","idx",1053688473),(4),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"4",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 4",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/4.md",new cljs.core.Keyword(null,"title","title",636505583),"t-4",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"b",new cljs.core.Keyword(null,"idx","idx",1053688473),null,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"1",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 1",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/1.md",new cljs.core.Keyword(null,"title","title",636505583),"t-1",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["b","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"2",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 2",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/2.md",new cljs.core.Keyword(null,"title","title",636505583),"t-2",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"3",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 3",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/3.md",new cljs.core.Keyword(null,"title","title",636505583),"t-3",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c","null"], null), null)], null)], null)),173,t__10815__auto__,null]));
}});

(website_helpers.notes.to_tree.cljs$lang$var = new cljs.core.Var(function(){return website_helpers.notes.to_tree;},new cljs.core.Symbol("website-helpers.notes","to-tree","website-helpers.notes/to-tree",-1805703668,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"website-helpers.notes","website-helpers.notes",1477508270,null),new cljs.core.Symbol(null,"to-tree","to-tree",-639084910,null),"website_helpers/notes.cljs",17,1,155,155,cljs.core.List.EMPTY,null,(cljs.core.truth_(website_helpers.notes.to_tree)?website_helpers.notes.to_tree.cljs$lang$test:null)])));
website_helpers.notes.make_category_menu = (function website_helpers$notes$make_category_menu(notes,selected_categories){
return website_helpers.notes.make_subtree(website_helpers.notes.organize_notes_by_category(notes,selected_categories),website_helpers.notes.get_cur_page_note(notes));
});
website_helpers.notes.filter_category_selections = (function website_helpers$notes$filter_category_selections(notes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$filter_category_selections_$_iter__51384(s__51385){
return (new cljs.core.LazySeq(null,(function (){
var s__51385__$1 = s__51385;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__51385__$1);
if(temp__5804__auto__){
var s__51385__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51385__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51385__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51387 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51386 = (0);
while(true){
if((i__51386 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__51386);
cljs.core.chunk_append(b__51387,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,cljs.core.contains_QMARK_(cljs.core.deref(website_helpers.global.url_params),category)], null));

var G__51420 = (i__51386 + (1));
i__51386 = G__51420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51387),website_helpers$notes$filter_category_selections_$_iter__51384(cljs.core.chunk_rest(s__51385__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51387),null);
}
} else {
var category = cljs.core.first(s__51385__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,cljs.core.contains_QMARK_(cljs.core.deref(website_helpers.global.url_params),category)], null),website_helpers$notes$filter_category_selections_$_iter__51384(cljs.core.rest(s__51385__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.keys(website_helpers.notes.get_notes_by_category(notes)));
})());
});
website_helpers.notes.make_index_menu = (function website_helpers$notes$make_index_menu(notes){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.common_components.dropdown_check_list,website_helpers.global.url_params,"Select Categories"], null)], null),website_helpers.notes.make_category_menu(notes,website_helpers.utils.get_selected_vars(website_helpers.notes.filter_category_selections(notes)))], null);
});
});
goog.exportSymbol('website_helpers.notes.make_index_menu', website_helpers.notes.make_index_menu);
website_helpers.notes.random_page = (function website_helpers$notes$random_page(notes){
return (function (){
var note = cljs.core.rand_nth(notes);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([note], 0));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Random Page: ",website_helpers.notes.note__GT_link(note,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"70%"], null)], null)," (",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(note)),")"], null)], null);
});
});
goog.exportSymbol('website_helpers.notes.random_page', website_helpers.notes.random_page);

//# sourceMappingURL=website_helpers.notes.js.map
