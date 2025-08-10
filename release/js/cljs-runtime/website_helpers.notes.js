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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$get_notes_by_category_$_iter__20688(s__20689){
return (new cljs.core.LazySeq(null,(function (){
var s__20689__$1 = s__20689;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20689__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var note = cljs.core.first(xs__6385__auto__);
var iterys__5519__auto__ = ((function (s__20689__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function website_helpers$notes$get_notes_by_category_$_iter__20688_$_iter__20692(s__20693){
return (new cljs.core.LazySeq(null,((function (s__20689__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__20693__$1 = s__20693;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__20693__$1);
if(temp__5825__auto____$1){
var s__20693__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20693__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20693__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20695 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20694 = (0);
while(true){
if((i__20694 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__20694);
cljs.core.chunk_append(b__20695,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__22092 = (i__20694 + (1));
i__20694 = G__22092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20695),website_helpers$notes$get_notes_by_category_$_iter__20688_$_iter__20692(cljs.core.chunk_rest(s__20693__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20695),null);
}
} else {
var category = cljs.core.first(s__20693__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_category_$_iter__20688_$_iter__20692(cljs.core.rest(s__20693__$2)));
}
} else {
return null;
}
break;
}
});})(s__20689__$1,note,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__20689__$1,note,xs__6385__auto__,temp__5825__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,website_helpers$notes$get_notes_by_category_$_iter__20688(cljs.core.rest(s__20689__$1)));
} else {
var G__22102 = cljs.core.rest(s__20689__$1);
s__20689__$1 = G__22102;
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
/**
 * Returns a map of path categories (derived from directories) to all notes
 *   with that category.
 */
website_helpers.notes.get_notes_by_directory = (function website_helpers$notes$get_notes_by_directory(notes){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$get_notes_by_directory_$_iter__20743(s__20744){
return (new cljs.core.LazySeq(null,(function (){
var s__20744__$1 = s__20744;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20744__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var note = cljs.core.first(xs__6385__auto__);
var iterys__5519__auto__ = ((function (s__20744__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function website_helpers$notes$get_notes_by_directory_$_iter__20743_$_iter__20745(s__20746){
return (new cljs.core.LazySeq(null,((function (s__20744__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__20746__$1 = s__20746;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__20746__$1);
if(temp__5825__auto____$1){
var s__20746__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20746__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20746__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20748 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20747 = (0);
while(true){
if((i__20747 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__20747);
cljs.core.chunk_append(b__20748,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__22118 = (i__20747 + (1));
i__20747 = G__22118;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20748),website_helpers$notes$get_notes_by_directory_$_iter__20743_$_iter__20745(cljs.core.chunk_rest(s__20746__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20748),null);
}
} else {
var category = cljs.core.first(s__20746__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_directory_$_iter__20743_$_iter__20745(cljs.core.rest(s__20746__$2)));
}
} else {
return null;
}
break;
}
});})(s__20744__$1,note,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__20744__$1,note,xs__6385__auto__,temp__5825__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"path-categories","path-categories",1155646784).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,website_helpers$notes$get_notes_by_directory_$_iter__20743(cljs.core.rest(s__20744__$1)));
} else {
var G__22123 = cljs.core.rest(s__20744__$1);
s__20744__$1 = G__22123;
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
var G__20963 = arguments.length;
switch (G__20963) {
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
return cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__21110){
var vec__21136 = p__21110;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21136,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21136,(1),null);
return cljs.core.count(v);
}),(function (){var iter__5523__auto__ = (function website_helpers$notes$iter__21156(s__21157){
return (new cljs.core.LazySeq(null,(function (){
var s__21157__$1 = s__21157;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21157__$1);
if(temp__5825__auto__){
var s__21157__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21157__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21157__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21159 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21158 = (0);
while(true){
if((i__21158 < size__5522__auto__)){
var vec__21220 = cljs.core._nth(c__5521__auto__,i__21158);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21220,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21220,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
cljs.core.chunk_append(b__21159,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null));

var G__22138 = (i__21158 + (1));
i__21158 = G__22138;
continue;
} else {
var G__22140 = (i__21158 + (1));
i__21158 = G__22140;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21159),website_helpers$notes$iter__21156(cljs.core.chunk_rest(s__21157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21159),null);
}
} else {
var vec__21273 = cljs.core.first(s__21157__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21273,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21273,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null),website_helpers$notes$iter__21156(cljs.core.rest(s__21157__$2)));
} else {
var G__22149 = cljs.core.rest(s__21157__$2);
s__21157__$1 = G__22149;
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
var G__21367 = arguments.length;
switch (G__21367) {
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
var vec__21424 = website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2(notes,categories_to_ignore);
var largest_category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21424,(0),null);
var largest_notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21424,(1),null);
var other_notes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(notes,largest_notes);
if((largest_notes == null)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),notes], null);
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([largest_category,website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$2(largest_notes,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(categories_to_ignore,largest_category))]),website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$2(other_notes,categories_to_ignore)], 0));
}
}
}));

(website_helpers.notes.get_notes_by_largest_category.cljs$lang$maxFixedArity = 2);

website_helpers.notes.get_notes_by_fn = (function website_helpers$notes$get_notes_by_fn(notes,f){
return cljs.core.update_vals(cljs.core.group_by(f,notes),(function (v){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),v], null);
}));
});
website_helpers.notes.creation_time = (function website_helpers$notes$creation_time(note){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,new cljs.core.Keyword(null,"modification-unix-timestamps","modification-unix-timestamps",653432816).cljs$core$IFn$_invoke$arity$1(note));
});
website_helpers.notes.timestamp__GT_month = (function website_helpers$notes$timestamp__GT_month(timestamp){
return (new Date((timestamp * (1000)))).toLocaleString("en-US",({"month": "long", "year": "numeric"}));
});
website_helpers.notes.last_modification_time = (function website_helpers$notes$last_modification_time(note){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,new cljs.core.Keyword(null,"modification-unix-timestamps","modification-unix-timestamps",653432816).cljs$core$IFn$_invoke$arity$1(note));
});
website_helpers.notes.organization_schemes = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directory","directory",-58912409),website_helpers.notes.get_notes_by_directory,new cljs.core.Keyword(null,"most-recently-created","most-recently-created",605389572),(function (notes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),website_helpers.notes.get_notes_by_fn(notes,website_helpers.notes.creation_time));
}),new cljs.core.Keyword(null,"most-recently-changed","most-recently-changed",-1386837287),(function (notes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),website_helpers.notes.get_notes_by_fn(notes,website_helpers.notes.last_modification_time));
}),new cljs.core.Keyword(null,"category","category",-593092832),website_helpers.notes.get_notes_by_category,new cljs.core.Keyword(null,"largest-category","largest-category",227675861),website_helpers.notes.get_notes_by_largest_category], null);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(note)], null),website_helpers.notes.note__GT_link(note,cur_page_note)], null);
});
website_helpers.notes.get_cur_page_note = (function website_helpers$notes$get_cur_page_note(possible_notes){
var url = window.location.pathname;
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21559_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.path__GT_url(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__21559_SHARP_)),url);
}),possible_notes));
});
website_helpers.notes.make_nested_note_html = (function website_helpers$notes$make_nested_note_html(notes_by_category,cur_page,key_view_fn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$notes$make_nested_note_html_$_iter__21613(s__21614){
return (new cljs.core.LazySeq(null,(function (){
var s__21614__$1 = s__21614;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21614__$1);
if(temp__5825__auto__){
var s__21614__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21614__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21614__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21616 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21615 = (0);
while(true){
if((i__21615 < size__5522__auto__)){
var vec__21648 = cljs.core._nth(c__5521__auto__,i__21615);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21648,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21648,(1),null);
cljs.core.chunk_append(b__21616,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (i__21615,vec__21648,category,subtree,c__5521__auto__,size__5522__auto__,b__21616,s__21614__$2,temp__5825__auto__){
return (function website_helpers$notes$make_nested_note_html_$_iter__21613_$_iter__21651(s__21652){
return (new cljs.core.LazySeq(null,((function (i__21615,vec__21648,category,subtree,c__5521__auto__,size__5522__auto__,b__21616,s__21614__$2,temp__5825__auto__){
return (function (){
var s__21652__$1 = s__21652;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__21652__$1);
if(temp__5825__auto____$1){
var s__21652__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21652__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__21652__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__21654 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__21653 = (0);
while(true){
if((i__21653 < size__5522__auto____$1)){
var note = cljs.core._nth(c__5521__auto____$1,i__21653);
cljs.core.chunk_append(b__21654,website_helpers.notes.note_to_li(note,cur_page));

var G__22177 = (i__21653 + (1));
i__21653 = G__22177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21654),website_helpers$notes$make_nested_note_html_$_iter__21613_$_iter__21651(cljs.core.chunk_rest(s__21652__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21654),null);
}
} else {
var note = cljs.core.first(s__21652__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note,cur_page),website_helpers$notes$make_nested_note_html_$_iter__21613_$_iter__21651(cljs.core.rest(s__21652__$2)));
}
} else {
return null;
}
break;
}
});})(i__21615,vec__21648,category,subtree,c__5521__auto__,size__5522__auto__,b__21616,s__21614__$2,temp__5825__auto__))
,null,null));
});})(i__21615,vec__21648,category,subtree,c__5521__auto__,size__5522__auto__,b__21616,s__21614__$2,temp__5825__auto__))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(cur_page),category)) || (((5) > cljs.core.count(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(notes_by_category))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize((key_view_fn.cljs$core$IFn$_invoke$arity$1 ? key_view_fn.cljs$core$IFn$_invoke$arity$1(category) : key_view_fn.call(null,category)))], null)], null),(website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$3 ? website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$3(subtree,cur_page,key_view_fn) : website_helpers.notes.make_nested_note_html.call(null,subtree,cur_page,key_view_fn))], null)], null)], null)));

var G__22183 = (i__21615 + (1));
i__21615 = G__22183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21616),website_helpers$notes$make_nested_note_html_$_iter__21613(cljs.core.chunk_rest(s__21614__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21616),null);
}
} else {
var vec__21746 = cljs.core.first(s__21614__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21746,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21746,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__21746,category,subtree,s__21614__$2,temp__5825__auto__){
return (function website_helpers$notes$make_nested_note_html_$_iter__21613_$_iter__21751(s__21752){
return (new cljs.core.LazySeq(null,(function (){
var s__21752__$1 = s__21752;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__21752__$1);
if(temp__5825__auto____$1){
var s__21752__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21752__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21752__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21754 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21753 = (0);
while(true){
if((i__21753 < size__5522__auto__)){
var note = cljs.core._nth(c__5521__auto__,i__21753);
cljs.core.chunk_append(b__21754,website_helpers.notes.note_to_li(note,cur_page));

var G__22188 = (i__21753 + (1));
i__21753 = G__22188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21754),website_helpers$notes$make_nested_note_html_$_iter__21613_$_iter__21751(cljs.core.chunk_rest(s__21752__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21754),null);
}
} else {
var note = cljs.core.first(s__21752__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note,cur_page),website_helpers$notes$make_nested_note_html_$_iter__21613_$_iter__21751(cljs.core.rest(s__21752__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__21746,category,subtree,s__21614__$2,temp__5825__auto__))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(cur_page),category)) || (((5) > cljs.core.count(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(notes_by_category))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize((key_view_fn.cljs$core$IFn$_invoke$arity$1 ? key_view_fn.cljs$core$IFn$_invoke$arity$1(category) : key_view_fn.call(null,category)))], null)], null),(website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$3 ? website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$3(subtree,cur_page,key_view_fn) : website_helpers.notes.make_nested_note_html.call(null,subtree,cur_page,key_view_fn))], null)], null)], null)),website_helpers$notes$make_nested_note_html_$_iter__21613(cljs.core.rest(s__21614__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__21588_SHARP_){
var k = cljs.core.first(p1__21588_SHARP_);
if(typeof k === 'string'){
return k;
} else {
return cljs.core.name(k);
}
}),notes_by_category));
})()));
});
website_helpers.notes.overlap_QMARK_ = (function website_helpers$notes$overlap_QMARK_(set1,set2){
return (!(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(set1,set2))));
});
website_helpers.notes.get_notes_for_categories = (function website_helpers$notes$get_notes_for_categories(notes,selected_categories){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(selected_categories))){
return cljs.core.set(notes);
} else {
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21784_SHARP_){
return clojure.set.subset_QMARK_(selected_categories,new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(p1__21784_SHARP_));
}),notes));
}
});
website_helpers.notes.make_nested_note_list = (function website_helpers$notes$make_nested_note_list(notes,selected_categories,organization_fn,key_view_fn){
return website_helpers.notes.make_nested_note_html((function (){var G__21798 = website_helpers.notes.get_notes_for_categories(notes,selected_categories);
return (organization_fn.cljs$core$IFn$_invoke$arity$1 ? organization_fn.cljs$core$IFn$_invoke$arity$1(G__21798) : organization_fn.call(null,G__21798));
})(),website_helpers.notes.get_cur_page_note(notes),key_view_fn);
});
website_helpers.notes.set_one_to_true = (function website_helpers$notes$set_one_to_true(ks,k_to_true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$set_one_to_true_$_iter__21804(s__21805){
return (new cljs.core.LazySeq(null,(function (){
var s__21805__$1 = s__21805;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21805__$1);
if(temp__5825__auto__){
var s__21805__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21805__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21805__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21807 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21806 = (0);
while(true){
if((i__21806 < size__5522__auto__)){
var k = cljs.core._nth(c__5521__auto__,i__21806);
cljs.core.chunk_append(b__21807,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null));

var G__22227 = (i__21806 + (1));
i__21806 = G__22227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21807),website_helpers$notes$set_one_to_true_$_iter__21804(cljs.core.chunk_rest(s__21805__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21807),null);
}
} else {
var k = cljs.core.first(s__21805__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null),website_helpers$notes$set_one_to_true_$_iter__21804(cljs.core.rest(s__21805__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(ks);
})()),k_to_true,true);
});
website_helpers.notes.organization_radios = (function website_helpers$notes$organization_radios(organization_scheme){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Organize by..."], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null),(function (){var iter__5523__auto__ = (function website_helpers$notes$organization_radios_$_iter__21854(s__21855){
return (new cljs.core.LazySeq(null,(function (){
var s__21855__$1 = s__21855;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21855__$1);
if(temp__5825__auto__){
var s__21855__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21855__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21855__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21857 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21856 = (0);
while(true){
if((i__21856 < size__5522__auto__)){
var vec__21870 = cljs.core._nth(c__5521__auto__,i__21856);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21870,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21870,(1),null);
cljs.core.chunk_append(b__21857,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scheme], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"organization-scheme",new cljs.core.Keyword(null,"checked","checked",-50955819),selected,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__21856,vec__21870,scheme,selected,c__5521__auto__,size__5522__auto__,b__21857,s__21855__$2,temp__5825__auto__){
return (function (_){
return cljs.core.reset_BANG_(organization_scheme,website_helpers.notes.set_one_to_true(cljs.core.keys(website_helpers.notes.organization_schemes),scheme));
});})(i__21856,vec__21870,scheme,selected,c__5521__auto__,size__5522__auto__,b__21857,s__21855__$2,temp__5825__auto__))
], null)], null),scheme], null));

var G__22242 = (i__21856 + (1));
i__21856 = G__22242;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21857),website_helpers$notes$organization_radios_$_iter__21854(cljs.core.chunk_rest(s__21855__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21857),null);
}
} else {
var vec__21891 = cljs.core.first(s__21855__$2);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21891,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21891,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scheme], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"organization-scheme",new cljs.core.Keyword(null,"checked","checked",-50955819),selected,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__21891,scheme,selected,s__21855__$2,temp__5825__auto__){
return (function (_){
return cljs.core.reset_BANG_(organization_scheme,website_helpers.notes.set_one_to_true(cljs.core.keys(website_helpers.notes.organization_schemes),scheme));
});})(vec__21891,scheme,selected,s__21855__$2,temp__5825__auto__))
], null)], null),scheme], null),website_helpers$notes$organization_radios_$_iter__21854(cljs.core.rest(s__21855__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(organization_scheme));
})())], null);
});
website_helpers.notes.make_index_menu = (function website_helpers$notes$make_index_menu(){
var organization_scheme = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.notes.set_one_to_true(cljs.core.keys(website_helpers.notes.organization_schemes),new cljs.core.Keyword(null,"most-recently-changed","most-recently-changed",-1386837287)));
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.common_components.dropdown_check_list,website_helpers.global.category_selections,"Select Categories",website_helpers.global.sync_category_selections_BANG_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),"show-unselected-nodes-in-graph",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref(website_helpers.global.show_unselected_nodes_in_graph_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(website_helpers.global.graph_update_num,cljs.core.inc);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(website_helpers.global.show_unselected_nodes_in_graph_QMARK_,cljs.core.not);
})], null)], null),"Show unselected pages in graph?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.notes.organization_radios,organization_scheme], null),(function (){var selected_organization_scheme = cljs.core.first((function (){var iter__5523__auto__ = (function website_helpers$notes$make_index_menu_$_iter__21926(s__21927){
return (new cljs.core.LazySeq(null,(function (){
var s__21927__$1 = s__21927;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21927__$1);
if(temp__5825__auto__){
var s__21927__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21927__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21927__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21929 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21928 = (0);
while(true){
if((i__21928 < size__5522__auto__)){
var vec__21937 = cljs.core._nth(c__5521__auto__,i__21928);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21937,(0),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21937,(1),null);
if(cljs.core.truth_(selected_QMARK_)){
cljs.core.chunk_append(b__21929,scheme);

var G__22252 = (i__21928 + (1));
i__21928 = G__22252;
continue;
} else {
var G__22254 = (i__21928 + (1));
i__21928 = G__22254;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21929),website_helpers$notes$make_index_menu_$_iter__21926(cljs.core.chunk_rest(s__21927__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21929),null);
}
} else {
var vec__21947 = cljs.core.first(s__21927__$2);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21947,(0),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21947,(1),null);
if(cljs.core.truth_(selected_QMARK_)){
return cljs.core.cons(scheme,website_helpers$notes$make_index_menu_$_iter__21926(cljs.core.rest(s__21927__$2)));
} else {
var G__22259 = cljs.core.rest(s__21927__$2);
s__21927__$1 = G__22259;
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
return iter__5523__auto__(cljs.core.deref(organization_scheme));
})());
return website_helpers.notes.make_nested_note_list(cljs.core.deref(website_helpers.global.notes),website_helpers.utils.get_selected_vars(cljs.core.deref(website_helpers.global.category_selections)),(selected_organization_scheme.cljs$core$IFn$_invoke$arity$1 ? selected_organization_scheme.cljs$core$IFn$_invoke$arity$1(website_helpers.notes.organization_schemes) : selected_organization_scheme.call(null,website_helpers.notes.organization_schemes)),(cljs.core.truth_((function (){var fexpr__21955 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"most-recently-created","most-recently-created",605389572),null,new cljs.core.Keyword(null,"most-recently-changed","most-recently-changed",-1386837287),null], null), null);
return (fexpr__21955.cljs$core$IFn$_invoke$arity$1 ? fexpr__21955.cljs$core$IFn$_invoke$arity$1(selected_organization_scheme) : fexpr__21955.call(null,selected_organization_scheme));
})())?website_helpers.notes.timestamp__GT_month:cljs.core.identity));
})()], null);
});
});
goog.exportSymbol('website_helpers.notes.make_index_menu', website_helpers.notes.make_index_menu);
website_helpers.notes.random_page = (function website_helpers$notes$random_page(var_args){
var G__21966 = arguments.length;
switch (G__21966) {
case 0:
return website_helpers.notes.random_page.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return website_helpers.notes.random_page.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('website_helpers.notes.random_page', website_helpers.notes.random_page);

(website_helpers.notes.random_page.cljs$core$IFn$_invoke$arity$0 = (function (){
return website_helpers.notes.random_page.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(website_helpers.global.notes));
}));

(website_helpers.notes.random_page.cljs$core$IFn$_invoke$arity$1 = (function (notes){
return (function (){
var note = cljs.core.rand_nth(notes);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Random Page: ",website_helpers.notes.note__GT_link(note,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"70%"], null)], null)], null)," (",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(note)),")"], null);
});
}));

(website_helpers.notes.random_page.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=website_helpers.notes.js.map
