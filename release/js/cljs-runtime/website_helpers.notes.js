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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$get_notes_by_category_$_iter__45454(s__45455){
return (new cljs.core.LazySeq(null,(function (){
var s__45455__$1 = s__45455;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45455__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var note = cljs.core.first(xs__6385__auto__);
var iterys__5519__auto__ = ((function (s__45455__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function website_helpers$notes$get_notes_by_category_$_iter__45454_$_iter__45456(s__45457){
return (new cljs.core.LazySeq(null,((function (s__45455__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__45457__$1 = s__45457;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__45457__$1);
if(temp__5825__auto____$1){
var s__45457__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45457__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45457__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45459 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45458 = (0);
while(true){
if((i__45458 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__45458);
cljs.core.chunk_append(b__45459,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__45661 = (i__45458 + (1));
i__45458 = G__45661;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45459),website_helpers$notes$get_notes_by_category_$_iter__45454_$_iter__45456(cljs.core.chunk_rest(s__45457__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45459),null);
}
} else {
var category = cljs.core.first(s__45457__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_category_$_iter__45454_$_iter__45456(cljs.core.rest(s__45457__$2)));
}
} else {
return null;
}
break;
}
});})(s__45455__$1,note,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__45455__$1,note,xs__6385__auto__,temp__5825__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,website_helpers$notes$get_notes_by_category_$_iter__45454(cljs.core.rest(s__45455__$1)));
} else {
var G__45662 = cljs.core.rest(s__45455__$1);
s__45455__$1 = G__45662;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$get_notes_by_directory_$_iter__45460(s__45461){
return (new cljs.core.LazySeq(null,(function (){
var s__45461__$1 = s__45461;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45461__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var note = cljs.core.first(xs__6385__auto__);
var iterys__5519__auto__ = ((function (s__45461__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function website_helpers$notes$get_notes_by_directory_$_iter__45460_$_iter__45462(s__45463){
return (new cljs.core.LazySeq(null,((function (s__45461__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__45463__$1 = s__45463;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__45463__$1);
if(temp__5825__auto____$1){
var s__45463__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45463__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45463__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45465 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45464 = (0);
while(true){
if((i__45464 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__45464);
cljs.core.chunk_append(b__45465,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__45663 = (i__45464 + (1));
i__45464 = G__45663;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45465),website_helpers$notes$get_notes_by_directory_$_iter__45460_$_iter__45462(cljs.core.chunk_rest(s__45463__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45465),null);
}
} else {
var category = cljs.core.first(s__45463__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_directory_$_iter__45460_$_iter__45462(cljs.core.rest(s__45463__$2)));
}
} else {
return null;
}
break;
}
});})(s__45461__$1,note,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__45461__$1,note,xs__6385__auto__,temp__5825__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"path-categories","path-categories",1155646784).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,website_helpers$notes$get_notes_by_directory_$_iter__45460(cljs.core.rest(s__45461__$1)));
} else {
var G__45664 = cljs.core.rest(s__45461__$1);
s__45461__$1 = G__45664;
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
var G__45471 = arguments.length;
switch (G__45471) {
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
return cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__45479){
var vec__45480 = p__45479;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45480,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45480,(1),null);
return cljs.core.count(v);
}),(function (){var iter__5523__auto__ = (function website_helpers$notes$iter__45483(s__45484){
return (new cljs.core.LazySeq(null,(function (){
var s__45484__$1 = s__45484;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45484__$1);
if(temp__5825__auto__){
var s__45484__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45484__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45484__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45486 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45485 = (0);
while(true){
if((i__45485 < size__5522__auto__)){
var vec__45490 = cljs.core._nth(c__5521__auto__,i__45485);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45490,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45490,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
cljs.core.chunk_append(b__45486,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null));

var G__45666 = (i__45485 + (1));
i__45485 = G__45666;
continue;
} else {
var G__45667 = (i__45485 + (1));
i__45485 = G__45667;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45486),website_helpers$notes$iter__45483(cljs.core.chunk_rest(s__45484__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45486),null);
}
} else {
var vec__45493 = cljs.core.first(s__45484__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45493,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45493,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null),website_helpers$notes$iter__45483(cljs.core.rest(s__45484__$2)));
} else {
var G__45668 = cljs.core.rest(s__45484__$2);
s__45484__$1 = G__45668;
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
var G__45500 = arguments.length;
switch (G__45500) {
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
var vec__45508 = website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2(notes,categories_to_ignore);
var largest_category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45508,(0),null);
var largest_notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45508,(1),null);
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
website_helpers.notes.month_name_to_index = (function website_helpers$notes$month_name_to_index(month_name){
var G__45519 = month_name;
switch (G__45519) {
case "January":
return (0);

break;
case "February":
return (1);

break;
case "March":
return (2);

break;
case "April":
return (3);

break;
case "May":
return (4);

break;
case "June":
return (5);

break;
case "July":
return (6);

break;
case "August":
return (7);

break;
case "September":
return (8);

break;
case "October":
return (9);

break;
case "November":
return (10);

break;
case "December":
return (11);

break;
default:
return null;

}
});
website_helpers.notes.month__GT_timestamp = (function website_helpers$notes$month__GT_timestamp(date_string){
var vec__45520 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(date_string,/ /);
var month_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45520,(0),null);
var year_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45520,(1),null);
var year = parseInt(year_str);
var month_index = website_helpers.notes.month_name_to_index(month_name);
if(cljs.core.truth_((function (){var and__5043__auto__ = month_index;
if(cljs.core.truth_(and__5043__auto__)){
return year;
} else {
return and__5043__auto__;
}
})())){
var js_date = (new Date(year,month_index,(1)));
return Math.floor((js_date.getTime() / (1000)));
} else {
return null;
}
});
website_helpers.notes.last_modification_time = (function website_helpers$notes$last_modification_time(note){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,new cljs.core.Keyword(null,"modification-unix-timestamps","modification-unix-timestamps",653432816).cljs$core$IFn$_invoke$arity$1(note));
});
website_helpers.notes.organization_schemes = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directory","directory",-58912409),website_helpers.notes.get_notes_by_directory,new cljs.core.Keyword(null,"most-recently-created","most-recently-created",605389572),(function (notes){
return website_helpers.notes.get_notes_by_fn(notes,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.timestamp__GT_month,website_helpers.notes.creation_time));
}),new cljs.core.Keyword(null,"most-recently-changed","most-recently-changed",-1386837287),(function (notes){
return website_helpers.notes.get_notes_by_fn(notes,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.timestamp__GT_month,website_helpers.notes.last_modification_time));
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45531_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.path__GT_url(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__45531_SHARP_)),url);
}),possible_notes));
});
website_helpers.notes.make_nested_note_html = (function website_helpers$notes$make_nested_note_html(notes_by_category,cur_page){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$notes$make_nested_note_html_$_iter__45540(s__45541){
return (new cljs.core.LazySeq(null,(function (){
var s__45541__$1 = s__45541;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45541__$1);
if(temp__5825__auto__){
var s__45541__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45541__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45541__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45543 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45542 = (0);
while(true){
if((i__45542 < size__5522__auto__)){
var vec__45547 = cljs.core._nth(c__5521__auto__,i__45542);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45547,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45547,(1),null);
cljs.core.chunk_append(b__45543,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (i__45542,vec__45547,category,subtree,c__5521__auto__,size__5522__auto__,b__45543,s__45541__$2,temp__5825__auto__){
return (function website_helpers$notes$make_nested_note_html_$_iter__45540_$_iter__45550(s__45551){
return (new cljs.core.LazySeq(null,((function (i__45542,vec__45547,category,subtree,c__5521__auto__,size__5522__auto__,b__45543,s__45541__$2,temp__5825__auto__){
return (function (){
var s__45551__$1 = s__45551;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__45551__$1);
if(temp__5825__auto____$1){
var s__45551__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45551__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__45551__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__45553 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__45552 = (0);
while(true){
if((i__45552 < size__5522__auto____$1)){
var note = cljs.core._nth(c__5521__auto____$1,i__45552);
cljs.core.chunk_append(b__45553,website_helpers.notes.note_to_li(note,cur_page));

var G__45675 = (i__45552 + (1));
i__45552 = G__45675;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45553),website_helpers$notes$make_nested_note_html_$_iter__45540_$_iter__45550(cljs.core.chunk_rest(s__45551__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45553),null);
}
} else {
var note = cljs.core.first(s__45551__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note,cur_page),website_helpers$notes$make_nested_note_html_$_iter__45540_$_iter__45550(cljs.core.rest(s__45551__$2)));
}
} else {
return null;
}
break;
}
});})(i__45542,vec__45547,category,subtree,c__5521__auto__,size__5522__auto__,b__45543,s__45541__$2,temp__5825__auto__))
,null,null));
});})(i__45542,vec__45547,category,subtree,c__5521__auto__,size__5522__auto__,b__45543,s__45541__$2,temp__5825__auto__))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(cur_page),category)) || (((5) > cljs.core.count(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(notes_by_category))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)], null)], null),(website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$2 ? website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$2(subtree,cur_page) : website_helpers.notes.make_nested_note_html.call(null,subtree,cur_page))], null)], null)], null)));

var G__45676 = (i__45542 + (1));
i__45542 = G__45676;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45543),website_helpers$notes$make_nested_note_html_$_iter__45540(cljs.core.chunk_rest(s__45541__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45543),null);
}
} else {
var vec__45567 = cljs.core.first(s__45541__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45567,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45567,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__45567,category,subtree,s__45541__$2,temp__5825__auto__){
return (function website_helpers$notes$make_nested_note_html_$_iter__45540_$_iter__45570(s__45571){
return (new cljs.core.LazySeq(null,(function (){
var s__45571__$1 = s__45571;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__45571__$1);
if(temp__5825__auto____$1){
var s__45571__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45571__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45571__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45573 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45572 = (0);
while(true){
if((i__45572 < size__5522__auto__)){
var note = cljs.core._nth(c__5521__auto__,i__45572);
cljs.core.chunk_append(b__45573,website_helpers.notes.note_to_li(note,cur_page));

var G__45677 = (i__45572 + (1));
i__45572 = G__45677;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45573),website_helpers$notes$make_nested_note_html_$_iter__45540_$_iter__45570(cljs.core.chunk_rest(s__45571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45573),null);
}
} else {
var note = cljs.core.first(s__45571__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note,cur_page),website_helpers$notes$make_nested_note_html_$_iter__45540_$_iter__45570(cljs.core.rest(s__45571__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__45567,category,subtree,s__45541__$2,temp__5825__auto__))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(cur_page),category)) || (((5) > cljs.core.count(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(notes_by_category))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)], null)], null),(website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$2 ? website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$2(subtree,cur_page) : website_helpers.notes.make_nested_note_html.call(null,subtree,cur_page))], null)], null)], null)),website_helpers$notes$make_nested_note_html_$_iter__45540(cljs.core.rest(s__45541__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__45535_SHARP_){
var k = cljs.core.first(p1__45535_SHARP_);
if((!((website_helpers.notes.month__GT_timestamp(k) == null)))){
return (- website_helpers.notes.month__GT_timestamp(k));
} else {
if(typeof k === 'string'){
return k;
} else {
if(cljs.core.int_QMARK_(k)){
return (- k);
} else {
if((k instanceof cljs.core.Keyword)){
return cljs.core.name(k);
} else {
if((k == null)){
return (- (1000));
} else {
var G__45584 = k;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__45584], 0));

return G__45584;

}
}
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
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45589_SHARP_){
return clojure.set.subset_QMARK_(selected_categories,new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(p1__45589_SHARP_));
}),notes));
}
});
website_helpers.notes.make_nested_note_list = (function website_helpers$notes$make_nested_note_list(notes,selected_categories,organization_fn){
return website_helpers.notes.make_nested_note_html((function (){var G__45597 = website_helpers.notes.get_notes_for_categories(notes,selected_categories);
return (organization_fn.cljs$core$IFn$_invoke$arity$1 ? organization_fn.cljs$core$IFn$_invoke$arity$1(G__45597) : organization_fn.call(null,G__45597));
})(),website_helpers.notes.get_cur_page_note(notes));
});
website_helpers.notes.set_one_to_true = (function website_helpers$notes$set_one_to_true(ks,k_to_true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$set_one_to_true_$_iter__45599(s__45601){
return (new cljs.core.LazySeq(null,(function (){
var s__45601__$1 = s__45601;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45601__$1);
if(temp__5825__auto__){
var s__45601__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45601__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45601__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45604 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45603 = (0);
while(true){
if((i__45603 < size__5522__auto__)){
var k = cljs.core._nth(c__5521__auto__,i__45603);
cljs.core.chunk_append(b__45604,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null));

var G__45681 = (i__45603 + (1));
i__45603 = G__45681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45604),website_helpers$notes$set_one_to_true_$_iter__45599(cljs.core.chunk_rest(s__45601__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45604),null);
}
} else {
var k = cljs.core.first(s__45601__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null),website_helpers$notes$set_one_to_true_$_iter__45599(cljs.core.rest(s__45601__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Organize by..."], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null),(function (){var iter__5523__auto__ = (function website_helpers$notes$organization_radios_$_iter__45611(s__45612){
return (new cljs.core.LazySeq(null,(function (){
var s__45612__$1 = s__45612;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45612__$1);
if(temp__5825__auto__){
var s__45612__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45612__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45612__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45614 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45613 = (0);
while(true){
if((i__45613 < size__5522__auto__)){
var vec__45622 = cljs.core._nth(c__5521__auto__,i__45613);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45622,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45622,(1),null);
cljs.core.chunk_append(b__45614,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scheme], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"organization-scheme",new cljs.core.Keyword(null,"style","style",-496642736),website_helpers.common_components.input_style,new cljs.core.Keyword(null,"checked","checked",-50955819),selected,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__45613,vec__45622,scheme,selected,c__5521__auto__,size__5522__auto__,b__45614,s__45612__$2,temp__5825__auto__){
return (function (_){
return cljs.core.reset_BANG_(organization_scheme,website_helpers.notes.set_one_to_true(cljs.core.keys(website_helpers.notes.organization_schemes),scheme));
});})(i__45613,vec__45622,scheme,selected,c__5521__auto__,size__5522__auto__,b__45614,s__45612__$2,temp__5825__auto__))
], null)], null),scheme], null));

var G__45682 = (i__45613 + (1));
i__45613 = G__45682;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45614),website_helpers$notes$organization_radios_$_iter__45611(cljs.core.chunk_rest(s__45612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45614),null);
}
} else {
var vec__45629 = cljs.core.first(s__45612__$2);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45629,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45629,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scheme], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"organization-scheme",new cljs.core.Keyword(null,"style","style",-496642736),website_helpers.common_components.input_style,new cljs.core.Keyword(null,"checked","checked",-50955819),selected,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__45629,scheme,selected,s__45612__$2,temp__5825__auto__){
return (function (_){
return cljs.core.reset_BANG_(organization_scheme,website_helpers.notes.set_one_to_true(cljs.core.keys(website_helpers.notes.organization_schemes),scheme));
});})(vec__45629,scheme,selected,s__45612__$2,temp__5825__auto__))
], null)], null),scheme], null),website_helpers$notes$organization_radios_$_iter__45611(cljs.core.rest(s__45612__$2)));
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.common_components.dropdown_check_list,website_helpers.global.category_selections,"Select Categories",website_helpers.global.sync_category_selections_BANG_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),"show-unselected-nodes-in-graph",new cljs.core.Keyword(null,"style","style",-496642736),website_helpers.common_components.input_style,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref(website_helpers.global.show_unselected_nodes_in_graph_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(website_helpers.global.graph_update_num,cljs.core.inc);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(website_helpers.global.show_unselected_nodes_in_graph_QMARK_,cljs.core.not);
})], null)], null),"Show unselected pages in graph?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.notes.organization_radios,organization_scheme], null),(function (){var selected_organization_scheme = cljs.core.first((function (){var iter__5523__auto__ = (function website_helpers$notes$make_index_menu_$_iter__45637(s__45638){
return (new cljs.core.LazySeq(null,(function (){
var s__45638__$1 = s__45638;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45638__$1);
if(temp__5825__auto__){
var s__45638__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45638__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45638__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45640 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45639 = (0);
while(true){
if((i__45639 < size__5522__auto__)){
var vec__45641 = cljs.core._nth(c__5521__auto__,i__45639);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45641,(0),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45641,(1),null);
if(cljs.core.truth_(selected_QMARK_)){
cljs.core.chunk_append(b__45640,scheme);

var G__45684 = (i__45639 + (1));
i__45639 = G__45684;
continue;
} else {
var G__45685 = (i__45639 + (1));
i__45639 = G__45685;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45640),website_helpers$notes$make_index_menu_$_iter__45637(cljs.core.chunk_rest(s__45638__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45640),null);
}
} else {
var vec__45644 = cljs.core.first(s__45638__$2);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45644,(0),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45644,(1),null);
if(cljs.core.truth_(selected_QMARK_)){
return cljs.core.cons(scheme,website_helpers$notes$make_index_menu_$_iter__45637(cljs.core.rest(s__45638__$2)));
} else {
var G__45687 = cljs.core.rest(s__45638__$2);
s__45638__$1 = G__45687;
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
var G__45652 = arguments.length;
switch (G__45652) {
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
