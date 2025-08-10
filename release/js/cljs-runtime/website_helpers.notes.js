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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$get_notes_by_category_$_iter__40925(s__40926){
return (new cljs.core.LazySeq(null,(function (){
var s__40926__$1 = s__40926;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__40926__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var note = cljs.core.first(xs__6385__auto__);
var iterys__5519__auto__ = ((function (s__40926__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function website_helpers$notes$get_notes_by_category_$_iter__40925_$_iter__40927(s__40928){
return (new cljs.core.LazySeq(null,((function (s__40926__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__40928__$1 = s__40928;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__40928__$1);
if(temp__5825__auto____$1){
var s__40928__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40928__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40928__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40930 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40929 = (0);
while(true){
if((i__40929 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__40929);
cljs.core.chunk_append(b__40930,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__41008 = (i__40929 + (1));
i__40929 = G__41008;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40930),website_helpers$notes$get_notes_by_category_$_iter__40925_$_iter__40927(cljs.core.chunk_rest(s__40928__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40930),null);
}
} else {
var category = cljs.core.first(s__40928__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_category_$_iter__40925_$_iter__40927(cljs.core.rest(s__40928__$2)));
}
} else {
return null;
}
break;
}
});})(s__40926__$1,note,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__40926__$1,note,xs__6385__auto__,temp__5825__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,website_helpers$notes$get_notes_by_category_$_iter__40925(cljs.core.rest(s__40926__$1)));
} else {
var G__41009 = cljs.core.rest(s__40926__$1);
s__40926__$1 = G__41009;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$get_notes_by_directory_$_iter__40931(s__40932){
return (new cljs.core.LazySeq(null,(function (){
var s__40932__$1 = s__40932;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__40932__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var note = cljs.core.first(xs__6385__auto__);
var iterys__5519__auto__ = ((function (s__40932__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function website_helpers$notes$get_notes_by_directory_$_iter__40931_$_iter__40933(s__40934){
return (new cljs.core.LazySeq(null,((function (s__40932__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__40934__$1 = s__40934;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__40934__$1);
if(temp__5825__auto____$1){
var s__40934__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40934__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40934__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40936 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40935 = (0);
while(true){
if((i__40935 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__40935);
cljs.core.chunk_append(b__40936,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__41010 = (i__40935 + (1));
i__40935 = G__41010;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40936),website_helpers$notes$get_notes_by_directory_$_iter__40931_$_iter__40933(cljs.core.chunk_rest(s__40934__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40936),null);
}
} else {
var category = cljs.core.first(s__40934__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_directory_$_iter__40931_$_iter__40933(cljs.core.rest(s__40934__$2)));
}
} else {
return null;
}
break;
}
});})(s__40932__$1,note,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__40932__$1,note,xs__6385__auto__,temp__5825__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"path-categories","path-categories",1155646784).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,website_helpers$notes$get_notes_by_directory_$_iter__40931(cljs.core.rest(s__40932__$1)));
} else {
var G__41011 = cljs.core.rest(s__40932__$1);
s__40932__$1 = G__41011;
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
var G__40938 = arguments.length;
switch (G__40938) {
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
return cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__40939){
var vec__40940 = p__40939;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40940,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40940,(1),null);
return cljs.core.count(v);
}),(function (){var iter__5523__auto__ = (function website_helpers$notes$iter__40943(s__40944){
return (new cljs.core.LazySeq(null,(function (){
var s__40944__$1 = s__40944;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__40944__$1);
if(temp__5825__auto__){
var s__40944__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40944__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40944__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40946 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40945 = (0);
while(true){
if((i__40945 < size__5522__auto__)){
var vec__40947 = cljs.core._nth(c__5521__auto__,i__40945);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40947,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40947,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
cljs.core.chunk_append(b__40946,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null));

var G__41013 = (i__40945 + (1));
i__40945 = G__41013;
continue;
} else {
var G__41014 = (i__40945 + (1));
i__40945 = G__41014;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40946),website_helpers$notes$iter__40943(cljs.core.chunk_rest(s__40944__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40946),null);
}
} else {
var vec__40950 = cljs.core.first(s__40944__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40950,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40950,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null),website_helpers$notes$iter__40943(cljs.core.rest(s__40944__$2)));
} else {
var G__41015 = cljs.core.rest(s__40944__$2);
s__40944__$1 = G__41015;
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
var G__40954 = arguments.length;
switch (G__40954) {
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
var vec__40955 = website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2(notes,categories_to_ignore);
var largest_category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40955,(0),null);
var largest_notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40955,(1),null);
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
return website_helpers.notes.get_notes_by_fn(notes,website_helpers.notes.creation_time);
}),new cljs.core.Keyword(null,"most-recently-changed","most-recently-changed",-1386837287),(function (notes){
return website_helpers.notes.get_notes_by_fn(notes,website_helpers.notes.last_modification_time);
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__40958_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.path__GT_url(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__40958_SHARP_)),url);
}),possible_notes));
});
website_helpers.notes.make_nested_note_html = (function website_helpers$notes$make_nested_note_html(notes_by_category,cur_page,key_view_fn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$notes$make_nested_note_html_$_iter__40960(s__40961){
return (new cljs.core.LazySeq(null,(function (){
var s__40961__$1 = s__40961;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__40961__$1);
if(temp__5825__auto__){
var s__40961__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40961__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40961__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40963 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40962 = (0);
while(true){
if((i__40962 < size__5522__auto__)){
var vec__40964 = cljs.core._nth(c__5521__auto__,i__40962);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40964,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40964,(1),null);
cljs.core.chunk_append(b__40963,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (i__40962,vec__40964,category,subtree,c__5521__auto__,size__5522__auto__,b__40963,s__40961__$2,temp__5825__auto__){
return (function website_helpers$notes$make_nested_note_html_$_iter__40960_$_iter__40967(s__40968){
return (new cljs.core.LazySeq(null,((function (i__40962,vec__40964,category,subtree,c__5521__auto__,size__5522__auto__,b__40963,s__40961__$2,temp__5825__auto__){
return (function (){
var s__40968__$1 = s__40968;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__40968__$1);
if(temp__5825__auto____$1){
var s__40968__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40968__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__40968__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__40970 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__40969 = (0);
while(true){
if((i__40969 < size__5522__auto____$1)){
var note = cljs.core._nth(c__5521__auto____$1,i__40969);
cljs.core.chunk_append(b__40970,website_helpers.notes.note_to_li(note,cur_page));

var G__41017 = (i__40969 + (1));
i__40969 = G__41017;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40970),website_helpers$notes$make_nested_note_html_$_iter__40960_$_iter__40967(cljs.core.chunk_rest(s__40968__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40970),null);
}
} else {
var note = cljs.core.first(s__40968__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note,cur_page),website_helpers$notes$make_nested_note_html_$_iter__40960_$_iter__40967(cljs.core.rest(s__40968__$2)));
}
} else {
return null;
}
break;
}
});})(i__40962,vec__40964,category,subtree,c__5521__auto__,size__5522__auto__,b__40963,s__40961__$2,temp__5825__auto__))
,null,null));
});})(i__40962,vec__40964,category,subtree,c__5521__auto__,size__5522__auto__,b__40963,s__40961__$2,temp__5825__auto__))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(cur_page),category)) || (((5) > cljs.core.count(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(notes_by_category))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize((key_view_fn.cljs$core$IFn$_invoke$arity$1 ? key_view_fn.cljs$core$IFn$_invoke$arity$1(category) : key_view_fn.call(null,category)))], null)], null),(website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$3 ? website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$3(subtree,cur_page,key_view_fn) : website_helpers.notes.make_nested_note_html.call(null,subtree,cur_page,key_view_fn))], null)], null)], null)));

var G__41022 = (i__40962 + (1));
i__40962 = G__41022;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40963),website_helpers$notes$make_nested_note_html_$_iter__40960(cljs.core.chunk_rest(s__40961__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40963),null);
}
} else {
var vec__40971 = cljs.core.first(s__40961__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40971,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40971,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__40971,category,subtree,s__40961__$2,temp__5825__auto__){
return (function website_helpers$notes$make_nested_note_html_$_iter__40960_$_iter__40974(s__40975){
return (new cljs.core.LazySeq(null,(function (){
var s__40975__$1 = s__40975;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__40975__$1);
if(temp__5825__auto____$1){
var s__40975__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40975__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40975__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40977 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40976 = (0);
while(true){
if((i__40976 < size__5522__auto__)){
var note = cljs.core._nth(c__5521__auto__,i__40976);
cljs.core.chunk_append(b__40977,website_helpers.notes.note_to_li(note,cur_page));

var G__41023 = (i__40976 + (1));
i__40976 = G__41023;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40977),website_helpers$notes$make_nested_note_html_$_iter__40960_$_iter__40974(cljs.core.chunk_rest(s__40975__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40977),null);
}
} else {
var note = cljs.core.first(s__40975__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note,cur_page),website_helpers$notes$make_nested_note_html_$_iter__40960_$_iter__40974(cljs.core.rest(s__40975__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__40971,category,subtree,s__40961__$2,temp__5825__auto__))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(cur_page),category)) || (((5) > cljs.core.count(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(notes_by_category))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize((key_view_fn.cljs$core$IFn$_invoke$arity$1 ? key_view_fn.cljs$core$IFn$_invoke$arity$1(category) : key_view_fn.call(null,category)))], null)], null),(website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$3 ? website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$3(subtree,cur_page,key_view_fn) : website_helpers.notes.make_nested_note_html.call(null,subtree,cur_page,key_view_fn))], null)], null)], null)),website_helpers$notes$make_nested_note_html_$_iter__40960(cljs.core.rest(s__40961__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__40959_SHARP_){
var k = cljs.core.first(p1__40959_SHARP_);
if(typeof k === 'string'){
return k;
} else {
if(cljs.core.int_QMARK_(k)){
return (- k);
} else {
if((k instanceof cljs.core.Keyword)){
return cljs.core.name(k);
} else {
var G__40978 = k;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__40978], 0));

return G__40978;

}
}
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
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__40979_SHARP_){
return clojure.set.subset_QMARK_(selected_categories,new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(p1__40979_SHARP_));
}),notes));
}
});
website_helpers.notes.make_nested_note_list = (function website_helpers$notes$make_nested_note_list(notes,selected_categories,organization_fn,key_view_fn){
return website_helpers.notes.make_nested_note_html((function (){var G__40980 = website_helpers.notes.get_notes_for_categories(notes,selected_categories);
return (organization_fn.cljs$core$IFn$_invoke$arity$1 ? organization_fn.cljs$core$IFn$_invoke$arity$1(G__40980) : organization_fn.call(null,G__40980));
})(),website_helpers.notes.get_cur_page_note(notes),key_view_fn);
});
website_helpers.notes.set_one_to_true = (function website_helpers$notes$set_one_to_true(ks,k_to_true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$set_one_to_true_$_iter__40981(s__40982){
return (new cljs.core.LazySeq(null,(function (){
var s__40982__$1 = s__40982;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__40982__$1);
if(temp__5825__auto__){
var s__40982__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40982__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40982__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40984 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40983 = (0);
while(true){
if((i__40983 < size__5522__auto__)){
var k = cljs.core._nth(c__5521__auto__,i__40983);
cljs.core.chunk_append(b__40984,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null));

var G__41028 = (i__40983 + (1));
i__40983 = G__41028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40984),website_helpers$notes$set_one_to_true_$_iter__40981(cljs.core.chunk_rest(s__40982__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40984),null);
}
} else {
var k = cljs.core.first(s__40982__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null),website_helpers$notes$set_one_to_true_$_iter__40981(cljs.core.rest(s__40982__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Organize by..."], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null),(function (){var iter__5523__auto__ = (function website_helpers$notes$organization_radios_$_iter__40985(s__40986){
return (new cljs.core.LazySeq(null,(function (){
var s__40986__$1 = s__40986;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__40986__$1);
if(temp__5825__auto__){
var s__40986__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40986__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40986__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40988 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40987 = (0);
while(true){
if((i__40987 < size__5522__auto__)){
var vec__40989 = cljs.core._nth(c__5521__auto__,i__40987);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40989,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40989,(1),null);
cljs.core.chunk_append(b__40988,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scheme], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"organization-scheme",new cljs.core.Keyword(null,"checked","checked",-50955819),selected,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__40987,vec__40989,scheme,selected,c__5521__auto__,size__5522__auto__,b__40988,s__40986__$2,temp__5825__auto__){
return (function (_){
return cljs.core.reset_BANG_(organization_scheme,website_helpers.notes.set_one_to_true(cljs.core.keys(website_helpers.notes.organization_schemes),scheme));
});})(i__40987,vec__40989,scheme,selected,c__5521__auto__,size__5522__auto__,b__40988,s__40986__$2,temp__5825__auto__))
], null)], null),scheme], null));

var G__41029 = (i__40987 + (1));
i__40987 = G__41029;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40988),website_helpers$notes$organization_radios_$_iter__40985(cljs.core.chunk_rest(s__40986__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40988),null);
}
} else {
var vec__40992 = cljs.core.first(s__40986__$2);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40992,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40992,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scheme], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"organization-scheme",new cljs.core.Keyword(null,"checked","checked",-50955819),selected,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__40992,scheme,selected,s__40986__$2,temp__5825__auto__){
return (function (_){
return cljs.core.reset_BANG_(organization_scheme,website_helpers.notes.set_one_to_true(cljs.core.keys(website_helpers.notes.organization_schemes),scheme));
});})(vec__40992,scheme,selected,s__40986__$2,temp__5825__auto__))
], null)], null),scheme], null),website_helpers$notes$organization_radios_$_iter__40985(cljs.core.rest(s__40986__$2)));
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
})], null)], null),"Show unselected pages in graph?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.notes.organization_radios,organization_scheme], null),(function (){var selected_organization_scheme = cljs.core.first((function (){var iter__5523__auto__ = (function website_helpers$notes$make_index_menu_$_iter__40995(s__40996){
return (new cljs.core.LazySeq(null,(function (){
var s__40996__$1 = s__40996;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__40996__$1);
if(temp__5825__auto__){
var s__40996__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40996__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40996__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40998 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40997 = (0);
while(true){
if((i__40997 < size__5522__auto__)){
var vec__40999 = cljs.core._nth(c__5521__auto__,i__40997);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40999,(0),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40999,(1),null);
if(cljs.core.truth_(selected_QMARK_)){
cljs.core.chunk_append(b__40998,scheme);

var G__41034 = (i__40997 + (1));
i__40997 = G__41034;
continue;
} else {
var G__41035 = (i__40997 + (1));
i__40997 = G__41035;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40998),website_helpers$notes$make_index_menu_$_iter__40995(cljs.core.chunk_rest(s__40996__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40998),null);
}
} else {
var vec__41002 = cljs.core.first(s__40996__$2);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41002,(0),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41002,(1),null);
if(cljs.core.truth_(selected_QMARK_)){
return cljs.core.cons(scheme,website_helpers$notes$make_index_menu_$_iter__40995(cljs.core.rest(s__40996__$2)));
} else {
var G__41036 = cljs.core.rest(s__40996__$2);
s__40996__$1 = G__41036;
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
return website_helpers.notes.make_nested_note_list(cljs.core.deref(website_helpers.global.notes),website_helpers.utils.get_selected_vars(cljs.core.deref(website_helpers.global.category_selections)),(selected_organization_scheme.cljs$core$IFn$_invoke$arity$1 ? selected_organization_scheme.cljs$core$IFn$_invoke$arity$1(website_helpers.notes.organization_schemes) : selected_organization_scheme.call(null,website_helpers.notes.organization_schemes)),(cljs.core.truth_((function (){var fexpr__41005 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"most-recently-created","most-recently-created",605389572),null,new cljs.core.Keyword(null,"most-recently-changed","most-recently-changed",-1386837287),null], null), null);
return (fexpr__41005.cljs$core$IFn$_invoke$arity$1 ? fexpr__41005.cljs$core$IFn$_invoke$arity$1(selected_organization_scheme) : fexpr__41005.call(null,selected_organization_scheme));
})())?website_helpers.notes.timestamp__GT_month:cljs.core.identity));
})()], null);
});
});
goog.exportSymbol('website_helpers.notes.make_index_menu', website_helpers.notes.make_index_menu);
website_helpers.notes.random_page = (function website_helpers$notes$random_page(var_args){
var G__41007 = arguments.length;
switch (G__41007) {
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
