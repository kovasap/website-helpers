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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$get_notes_by_category_$_iter__20723(s__20724){
return (new cljs.core.LazySeq(null,(function (){
var s__20724__$1 = s__20724;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20724__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var note = cljs.core.first(xs__6385__auto__);
var iterys__5519__auto__ = ((function (s__20724__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function website_helpers$notes$get_notes_by_category_$_iter__20723_$_iter__20725(s__20726){
return (new cljs.core.LazySeq(null,((function (s__20724__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__20726__$1 = s__20726;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__20726__$1);
if(temp__5825__auto____$1){
var s__20726__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20726__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20726__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20728 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20727 = (0);
while(true){
if((i__20727 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__20727);
cljs.core.chunk_append(b__20728,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__21244 = (i__20727 + (1));
i__20727 = G__21244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20728),website_helpers$notes$get_notes_by_category_$_iter__20723_$_iter__20725(cljs.core.chunk_rest(s__20726__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20728),null);
}
} else {
var category = cljs.core.first(s__20726__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_category_$_iter__20723_$_iter__20725(cljs.core.rest(s__20726__$2)));
}
} else {
return null;
}
break;
}
});})(s__20724__$1,note,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__20724__$1,note,xs__6385__auto__,temp__5825__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,website_helpers$notes$get_notes_by_category_$_iter__20723(cljs.core.rest(s__20724__$1)));
} else {
var G__21247 = cljs.core.rest(s__20724__$1);
s__20724__$1 = G__21247;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$get_notes_by_directory_$_iter__20754(s__20755){
return (new cljs.core.LazySeq(null,(function (){
var s__20755__$1 = s__20755;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20755__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var note = cljs.core.first(xs__6385__auto__);
var iterys__5519__auto__ = ((function (s__20755__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function website_helpers$notes$get_notes_by_directory_$_iter__20754_$_iter__20756(s__20757){
return (new cljs.core.LazySeq(null,((function (s__20755__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__20757__$1 = s__20757;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__20757__$1);
if(temp__5825__auto____$1){
var s__20757__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20757__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20757__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20759 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20758 = (0);
while(true){
if((i__20758 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__20758);
cljs.core.chunk_append(b__20759,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__21251 = (i__20758 + (1));
i__20758 = G__21251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20759),website_helpers$notes$get_notes_by_directory_$_iter__20754_$_iter__20756(cljs.core.chunk_rest(s__20757__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20759),null);
}
} else {
var category = cljs.core.first(s__20757__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_directory_$_iter__20754_$_iter__20756(cljs.core.rest(s__20757__$2)));
}
} else {
return null;
}
break;
}
});})(s__20755__$1,note,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__20755__$1,note,xs__6385__auto__,temp__5825__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"path-categories","path-categories",1155646784).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,website_helpers$notes$get_notes_by_directory_$_iter__20754(cljs.core.rest(s__20755__$1)));
} else {
var G__21254 = cljs.core.rest(s__20755__$1);
s__20755__$1 = G__21254;
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
var G__20800 = arguments.length;
switch (G__20800) {
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
return cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__20819){
var vec__20823 = p__20819;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20823,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20823,(1),null);
return cljs.core.count(v);
}),(function (){var iter__5523__auto__ = (function website_helpers$notes$iter__20829(s__20830){
return (new cljs.core.LazySeq(null,(function (){
var s__20830__$1 = s__20830;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20830__$1);
if(temp__5825__auto__){
var s__20830__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20830__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20830__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20832 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20831 = (0);
while(true){
if((i__20831 < size__5522__auto__)){
var vec__20840 = cljs.core._nth(c__5521__auto__,i__20831);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20840,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20840,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
cljs.core.chunk_append(b__20832,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null));

var G__21259 = (i__20831 + (1));
i__20831 = G__21259;
continue;
} else {
var G__21260 = (i__20831 + (1));
i__20831 = G__21260;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20832),website_helpers$notes$iter__20829(cljs.core.chunk_rest(s__20830__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20832),null);
}
} else {
var vec__20864 = cljs.core.first(s__20830__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20864,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20864,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null),website_helpers$notes$iter__20829(cljs.core.rest(s__20830__$2)));
} else {
var G__21261 = cljs.core.rest(s__20830__$2);
s__20830__$1 = G__21261;
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
var G__20890 = arguments.length;
switch (G__20890) {
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
var vec__20903 = website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2(notes,categories_to_ignore);
var largest_category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20903,(0),null);
var largest_notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20903,(1),null);
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
return website_helpers.notes.get_notes_by_fn(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.creation_time,notes),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.timestamp__GT_month,website_helpers.notes.creation_time));
}),new cljs.core.Keyword(null,"most-recently-changed","most-recently-changed",-1386837287),(function (notes){
return website_helpers.notes.get_notes_by_fn(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.last_modification_time,notes),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.timestamp__GT_month,website_helpers.notes.last_modification_time));
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20949_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.path__GT_url(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__20949_SHARP_)),url);
}),possible_notes));
});
website_helpers.notes.make_nested_note_html = (function website_helpers$notes$make_nested_note_html(notes_by_category,cur_page){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$notes$make_nested_note_html_$_iter__20970(s__20971){
return (new cljs.core.LazySeq(null,(function (){
var s__20971__$1 = s__20971;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__20971__$1);
if(temp__5825__auto__){
var s__20971__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20971__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20971__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20973 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20972 = (0);
while(true){
if((i__20972 < size__5522__auto__)){
var vec__20986 = cljs.core._nth(c__5521__auto__,i__20972);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20986,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20986,(1),null);
cljs.core.chunk_append(b__20973,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (i__20972,vec__20986,category,subtree,c__5521__auto__,size__5522__auto__,b__20973,s__20971__$2,temp__5825__auto__){
return (function website_helpers$notes$make_nested_note_html_$_iter__20970_$_iter__20991(s__20992){
return (new cljs.core.LazySeq(null,((function (i__20972,vec__20986,category,subtree,c__5521__auto__,size__5522__auto__,b__20973,s__20971__$2,temp__5825__auto__){
return (function (){
var s__20992__$1 = s__20992;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__20992__$1);
if(temp__5825__auto____$1){
var s__20992__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20992__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__20992__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__20994 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__20993 = (0);
while(true){
if((i__20993 < size__5522__auto____$1)){
var note = cljs.core._nth(c__5521__auto____$1,i__20993);
cljs.core.chunk_append(b__20994,website_helpers.notes.note_to_li(note,cur_page));

var G__21317 = (i__20993 + (1));
i__20993 = G__21317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20994),website_helpers$notes$make_nested_note_html_$_iter__20970_$_iter__20991(cljs.core.chunk_rest(s__20992__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20994),null);
}
} else {
var note = cljs.core.first(s__20992__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note,cur_page),website_helpers$notes$make_nested_note_html_$_iter__20970_$_iter__20991(cljs.core.rest(s__20992__$2)));
}
} else {
return null;
}
break;
}
});})(i__20972,vec__20986,category,subtree,c__5521__auto__,size__5522__auto__,b__20973,s__20971__$2,temp__5825__auto__))
,null,null));
});})(i__20972,vec__20986,category,subtree,c__5521__auto__,size__5522__auto__,b__20973,s__20971__$2,temp__5825__auto__))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(cur_page),category)) || (((5) > cljs.core.count(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(notes_by_category))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)], null)], null),(website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$2 ? website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$2(subtree,cur_page) : website_helpers.notes.make_nested_note_html.call(null,subtree,cur_page))], null)], null)], null)));

var G__21330 = (i__20972 + (1));
i__20972 = G__21330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20973),website_helpers$notes$make_nested_note_html_$_iter__20970(cljs.core.chunk_rest(s__20971__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20973),null);
}
} else {
var vec__21011 = cljs.core.first(s__20971__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21011,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21011,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__21011,category,subtree,s__20971__$2,temp__5825__auto__){
return (function website_helpers$notes$make_nested_note_html_$_iter__20970_$_iter__21021(s__21022){
return (new cljs.core.LazySeq(null,(function (){
var s__21022__$1 = s__21022;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__21022__$1);
if(temp__5825__auto____$1){
var s__21022__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21022__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21022__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21024 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21023 = (0);
while(true){
if((i__21023 < size__5522__auto__)){
var note = cljs.core._nth(c__5521__auto__,i__21023);
cljs.core.chunk_append(b__21024,website_helpers.notes.note_to_li(note,cur_page));

var G__21346 = (i__21023 + (1));
i__21023 = G__21346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21024),website_helpers$notes$make_nested_note_html_$_iter__20970_$_iter__21021(cljs.core.chunk_rest(s__21022__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21024),null);
}
} else {
var note = cljs.core.first(s__21022__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note,cur_page),website_helpers$notes$make_nested_note_html_$_iter__20970_$_iter__21021(cljs.core.rest(s__21022__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__21011,category,subtree,s__20971__$2,temp__5825__auto__))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(cur_page),category)) || (((5) > cljs.core.count(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(notes_by_category))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)], null)], null),(website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$2 ? website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$2(subtree,cur_page) : website_helpers.notes.make_nested_note_html.call(null,subtree,cur_page))], null)], null)], null)),website_helpers$notes$make_nested_note_html_$_iter__20970(cljs.core.rest(s__20971__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__20963_SHARP_){
var k = cljs.core.first(p1__20963_SHARP_);
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
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21047_SHARP_){
return clojure.set.subset_QMARK_(selected_categories,new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(p1__21047_SHARP_));
}),notes));
}
});
website_helpers.notes.make_nested_note_list = (function website_helpers$notes$make_nested_note_list(notes,selected_categories,organization_fn){
return website_helpers.notes.make_nested_note_html((function (){var G__21055 = website_helpers.notes.get_notes_for_categories(notes,selected_categories);
return (organization_fn.cljs$core$IFn$_invoke$arity$1 ? organization_fn.cljs$core$IFn$_invoke$arity$1(G__21055) : organization_fn.call(null,G__21055));
})(),website_helpers.notes.get_cur_page_note(notes));
});
website_helpers.notes.set_one_to_true = (function website_helpers$notes$set_one_to_true(ks,k_to_true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$set_one_to_true_$_iter__21059(s__21060){
return (new cljs.core.LazySeq(null,(function (){
var s__21060__$1 = s__21060;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21060__$1);
if(temp__5825__auto__){
var s__21060__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21060__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21060__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21062 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21061 = (0);
while(true){
if((i__21061 < size__5522__auto__)){
var k = cljs.core._nth(c__5521__auto__,i__21061);
cljs.core.chunk_append(b__21062,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null));

var G__21359 = (i__21061 + (1));
i__21061 = G__21359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21062),website_helpers$notes$set_one_to_true_$_iter__21059(cljs.core.chunk_rest(s__21060__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21062),null);
}
} else {
var k = cljs.core.first(s__21060__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null),website_helpers$notes$set_one_to_true_$_iter__21059(cljs.core.rest(s__21060__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Organize by..."], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null),(function (){var iter__5523__auto__ = (function website_helpers$notes$organization_radios_$_iter__21094(s__21095){
return (new cljs.core.LazySeq(null,(function (){
var s__21095__$1 = s__21095;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21095__$1);
if(temp__5825__auto__){
var s__21095__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21095__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21095__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21097 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21096 = (0);
while(true){
if((i__21096 < size__5522__auto__)){
var vec__21101 = cljs.core._nth(c__5521__auto__,i__21096);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21101,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21101,(1),null);
cljs.core.chunk_append(b__21097,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scheme], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"organization-scheme",new cljs.core.Keyword(null,"checked","checked",-50955819),selected,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__21096,vec__21101,scheme,selected,c__5521__auto__,size__5522__auto__,b__21097,s__21095__$2,temp__5825__auto__){
return (function (_){
return cljs.core.reset_BANG_(organization_scheme,website_helpers.notes.set_one_to_true(cljs.core.keys(website_helpers.notes.organization_schemes),scheme));
});})(i__21096,vec__21101,scheme,selected,c__5521__auto__,size__5522__auto__,b__21097,s__21095__$2,temp__5825__auto__))
], null)], null),scheme], null));

var G__21361 = (i__21096 + (1));
i__21096 = G__21361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21097),website_helpers$notes$organization_radios_$_iter__21094(cljs.core.chunk_rest(s__21095__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21097),null);
}
} else {
var vec__21110 = cljs.core.first(s__21095__$2);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21110,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21110,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scheme], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"organization-scheme",new cljs.core.Keyword(null,"checked","checked",-50955819),selected,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__21110,scheme,selected,s__21095__$2,temp__5825__auto__){
return (function (_){
return cljs.core.reset_BANG_(organization_scheme,website_helpers.notes.set_one_to_true(cljs.core.keys(website_helpers.notes.organization_schemes),scheme));
});})(vec__21110,scheme,selected,s__21095__$2,temp__5825__auto__))
], null)], null),scheme], null),website_helpers$notes$organization_radios_$_iter__21094(cljs.core.rest(s__21095__$2)));
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
})], null)], null),"Show unselected pages in graph?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.notes.organization_radios,organization_scheme], null),(function (){var selected_organization_scheme = cljs.core.first((function (){var iter__5523__auto__ = (function website_helpers$notes$make_index_menu_$_iter__21121(s__21122){
return (new cljs.core.LazySeq(null,(function (){
var s__21122__$1 = s__21122;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21122__$1);
if(temp__5825__auto__){
var s__21122__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21122__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21122__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21124 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21123 = (0);
while(true){
if((i__21123 < size__5522__auto__)){
var vec__21129 = cljs.core._nth(c__5521__auto__,i__21123);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21129,(0),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21129,(1),null);
if(cljs.core.truth_(selected_QMARK_)){
cljs.core.chunk_append(b__21124,scheme);

var G__21372 = (i__21123 + (1));
i__21123 = G__21372;
continue;
} else {
var G__21374 = (i__21123 + (1));
i__21123 = G__21374;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21124),website_helpers$notes$make_index_menu_$_iter__21121(cljs.core.chunk_rest(s__21122__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21124),null);
}
} else {
var vec__21135 = cljs.core.first(s__21122__$2);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21135,(0),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21135,(1),null);
if(cljs.core.truth_(selected_QMARK_)){
return cljs.core.cons(scheme,website_helpers$notes$make_index_menu_$_iter__21121(cljs.core.rest(s__21122__$2)));
} else {
var G__21378 = cljs.core.rest(s__21122__$2);
s__21122__$1 = G__21378;
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
return website_helpers.notes.make_nested_note_list(cljs.core.deref(website_helpers.global.notes),website_helpers.utils.get_selected_vars(cljs.core.deref(website_helpers.global.category_selections)),(selected_organization_scheme.cljs$core$IFn$_invoke$arity$1 ? selected_organization_scheme.cljs$core$IFn$_invoke$arity$1(website_helpers.notes.organization_schemes) : selected_organization_scheme.call(null,website_helpers.notes.organization_schemes)));
})()], null);
});
});
goog.exportSymbol('website_helpers.notes.make_index_menu', website_helpers.notes.make_index_menu);
website_helpers.notes.random_page = (function website_helpers$notes$random_page(var_args){
var G__21150 = arguments.length;
switch (G__21150) {
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
