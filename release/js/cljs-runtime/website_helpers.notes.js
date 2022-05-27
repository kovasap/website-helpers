goog.provide('website_helpers.notes');
website_helpers.notes.Note = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
website_helpers.notes.Hiccup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"any","any",1705907423)], null);
website_helpers.notes.example_notes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"1",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/one.md",new cljs.core.Keyword(null,"title","title",636505583),"one",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["a",null,"b",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"2",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/two.md",new cljs.core.Keyword(null,"title","title",636505583),"two",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"3",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/thr.md",new cljs.core.Keyword(null,"title","title",636505583),"thr",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c",null], null), null)], null)], null);
/**
 * Returns a map of categories to all notes with that category.
 */
website_helpers.notes.get_notes_by_category = (function website_helpers$notes$get_notes_by_category(notes){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function website_helpers$notes$get_notes_by_category_$_iter__55170(s__55171){
return (new cljs.core.LazySeq(null,(function (){
var s__55171__$1 = s__55171;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__55171__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var note = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__55171__$1,note,xs__6308__auto__,temp__5753__auto__){
return (function website_helpers$notes$get_notes_by_category_$_iter__55170_$_iter__55172(s__55173){
return (new cljs.core.LazySeq(null,((function (s__55171__$1,note,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__55173__$1 = s__55173;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__55173__$1);
if(temp__5753__auto____$1){
var s__55173__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55173__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__55173__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__55175 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__55174 = (0);
while(true){
if((i__55174 < size__4651__auto__)){
var category = cljs.core._nth(c__4650__auto__,i__55174);
cljs.core.chunk_append(b__55175,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__55227 = (i__55174 + (1));
i__55174 = G__55227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55175),website_helpers$notes$get_notes_by_category_$_iter__55170_$_iter__55172(cljs.core.chunk_rest(s__55173__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55175),null);
}
} else {
var category = cljs.core.first(s__55173__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_category_$_iter__55170_$_iter__55172(cljs.core.rest(s__55173__$2)));
}
} else {
return null;
}
break;
}
});})(s__55171__$1,note,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__55171__$1,note,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,website_helpers$notes$get_notes_by_category_$_iter__55170(cljs.core.rest(s__55171__$1)));
} else {
var G__55228 = cljs.core.rest(s__55171__$1);
s__55171__$1 = G__55228;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(notes);
})());
});
website_helpers.notes.get_largest_category = (function website_helpers$notes$get_largest_category(var_args){
var G__55177 = arguments.length;
switch (G__55177) {
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
return website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}));

(website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2 = (function (notes,categories_to_ignore){
return cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__55178){
var vec__55179 = p__55178;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55179,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55179,(1),null);
return cljs.core.count(v);
}),(function (){var iter__4652__auto__ = (function website_helpers$notes$iter__55182(s__55183){
return (new cljs.core.LazySeq(null,(function (){
var s__55183__$1 = s__55183;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__55183__$1);
if(temp__5753__auto__){
var s__55183__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55183__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__55183__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__55185 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__55184 = (0);
while(true){
if((i__55184 < size__4651__auto__)){
var vec__55186 = cljs.core._nth(c__4650__auto__,i__55184);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55186,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55186,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
cljs.core.chunk_append(b__55185,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null));

var G__55230 = (i__55184 + (1));
i__55184 = G__55230;
continue;
} else {
var G__55231 = (i__55184 + (1));
i__55184 = G__55231;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55185),website_helpers$notes$iter__55182(cljs.core.chunk_rest(s__55183__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55185),null);
}
} else {
var vec__55189 = cljs.core.first(s__55183__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55189,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55189,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null),website_helpers$notes$iter__55182(cljs.core.rest(s__55183__$2)));
} else {
var G__55233 = cljs.core.rest(s__55183__$2);
s__55183__$1 = G__55233;
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
return iter__4652__auto__(website_helpers.notes.get_notes_by_category(notes));
})())));
}));

(website_helpers.notes.get_largest_category.cljs$lang$maxFixedArity = 2);

website_helpers.notes.get_notes_by_largest_category = (function website_helpers$notes$get_notes_by_largest_category(var_args){
var G__55193 = arguments.length;
switch (G__55193) {
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
if((cljs.core.count(notes) <= (1))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),notes], null);
} else {
var vec__55194 = website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2(notes,categories_to_ignore);
var largest_category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55194,(0),null);
var largest_notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55194,(1),null);
var other_notes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(notes,largest_notes);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([largest_category,website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$2(largest_notes,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(categories_to_ignore,largest_category))]),website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$2(other_notes,categories_to_ignore)], 0));
}
}));

(website_helpers.notes.get_notes_by_largest_category.cljs$lang$maxFixedArity = 2);

website_helpers.notes.note_to_li = (function website_helpers$notes$note_to_li(note){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(note)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),clojure.string.replace(clojure.string.replace_first(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(note),"content",""),/.md/,"/")], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(note)], null)], null);
});
website_helpers.notes.make_subtree = (function website_helpers$notes$make_subtree(notes_by_category){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4652__auto__ = (function website_helpers$notes$make_subtree_$_iter__55197(s__55198){
return (new cljs.core.LazySeq(null,(function (){
var s__55198__$1 = s__55198;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__55198__$1);
if(temp__5753__auto__){
var s__55198__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55198__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__55198__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__55200 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__55199 = (0);
while(true){
if((i__55199 < size__4651__auto__)){
var vec__55201 = cljs.core._nth(c__4650__auto__,i__55199);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55201,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55201,(1),null);
cljs.core.chunk_append(b__55200,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4652__auto__ = ((function (i__55199,vec__55201,category,subtree,c__4650__auto__,size__4651__auto__,b__55200,s__55198__$2,temp__5753__auto__){
return (function website_helpers$notes$make_subtree_$_iter__55197_$_iter__55204(s__55205){
return (new cljs.core.LazySeq(null,((function (i__55199,vec__55201,category,subtree,c__4650__auto__,size__4651__auto__,b__55200,s__55198__$2,temp__5753__auto__){
return (function (){
var s__55205__$1 = s__55205;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__55205__$1);
if(temp__5753__auto____$1){
var s__55205__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55205__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__55205__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__55207 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__55206 = (0);
while(true){
if((i__55206 < size__4651__auto____$1)){
var note = cljs.core._nth(c__4650__auto____$1,i__55206);
cljs.core.chunk_append(b__55207,website_helpers.notes.note_to_li(note));

var G__55235 = (i__55206 + (1));
i__55206 = G__55235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55207),website_helpers$notes$make_subtree_$_iter__55197_$_iter__55204(cljs.core.chunk_rest(s__55205__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55207),null);
}
} else {
var note = cljs.core.first(s__55205__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note),website_helpers$notes$make_subtree_$_iter__55197_$_iter__55204(cljs.core.rest(s__55205__$2)));
}
} else {
return null;
}
break;
}
});})(i__55199,vec__55201,category,subtree,c__4650__auto__,size__4651__auto__,b__55200,s__55198__$2,temp__5753__auto__))
,null,null));
});})(i__55199,vec__55201,category,subtree,c__4650__auto__,size__4651__auto__,b__55200,s__55198__$2,temp__5753__auto__))
;
return iter__4652__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),category], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)], null)], null),(website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$1 ? website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$1(subtree) : website_helpers.notes.make_subtree.call(null,subtree))], null)], null)], null)));

var G__55240 = (i__55199 + (1));
i__55199 = G__55240;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55200),website_helpers$notes$make_subtree_$_iter__55197(cljs.core.chunk_rest(s__55198__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55200),null);
}
} else {
var vec__55208 = cljs.core.first(s__55198__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55208,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55208,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4652__auto__ = ((function (vec__55208,category,subtree,s__55198__$2,temp__5753__auto__){
return (function website_helpers$notes$make_subtree_$_iter__55197_$_iter__55211(s__55212){
return (new cljs.core.LazySeq(null,(function (){
var s__55212__$1 = s__55212;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__55212__$1);
if(temp__5753__auto____$1){
var s__55212__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55212__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__55212__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__55214 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__55213 = (0);
while(true){
if((i__55213 < size__4651__auto__)){
var note = cljs.core._nth(c__4650__auto__,i__55213);
cljs.core.chunk_append(b__55214,website_helpers.notes.note_to_li(note));

var G__55241 = (i__55213 + (1));
i__55213 = G__55241;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55214),website_helpers$notes$make_subtree_$_iter__55197_$_iter__55211(cljs.core.chunk_rest(s__55212__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55214),null);
}
} else {
var note = cljs.core.first(s__55212__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note),website_helpers$notes$make_subtree_$_iter__55197_$_iter__55211(cljs.core.rest(s__55212__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__55208,category,subtree,s__55198__$2,temp__5753__auto__))
;
return iter__4652__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),category], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)], null)], null),(website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$1 ? website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$1(subtree) : website_helpers.notes.make_subtree.call(null,subtree))], null)], null)], null)),website_helpers$notes$make_subtree_$_iter__55197(cljs.core.rest(s__55198__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(notes_by_category);
})()));
});
website_helpers.notes.get_notes_for_categories = (function website_helpers$notes$get_notes_for_categories(notes,category_selections){
var categories_to_include = cljs.core.set((function (){var iter__4652__auto__ = (function website_helpers$notes$get_notes_for_categories_$_iter__55216(s__55217){
return (new cljs.core.LazySeq(null,(function (){
var s__55217__$1 = s__55217;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__55217__$1);
if(temp__5753__auto__){
var s__55217__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55217__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__55217__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__55219 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__55218 = (0);
while(true){
if((i__55218 < size__4651__auto__)){
var vec__55220 = cljs.core._nth(c__4650__auto__,i__55218);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55220,(0),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55220,(1),null);
if(cljs.core.truth_(selected_QMARK_)){
cljs.core.chunk_append(b__55219,category);

var G__55242 = (i__55218 + (1));
i__55218 = G__55242;
continue;
} else {
var G__55243 = (i__55218 + (1));
i__55218 = G__55243;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55219),website_helpers$notes$get_notes_for_categories_$_iter__55216(cljs.core.chunk_rest(s__55217__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55219),null);
}
} else {
var vec__55223 = cljs.core.first(s__55217__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55223,(0),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55223,(1),null);
if(cljs.core.truth_(selected_QMARK_)){
return cljs.core.cons(category,website_helpers$notes$get_notes_for_categories_$_iter__55216(cljs.core.rest(s__55217__$2)));
} else {
var G__55244 = cljs.core.rest(s__55217__$2);
s__55217__$1 = G__55244;
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
return iter__4652__auto__(category_selections);
})());
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55215_SHARP_){
return (!(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(categories_to_include,new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(p1__55215_SHARP_)))));
}),notes);
});
website_helpers.notes.make_category_menu = (function website_helpers$notes$make_category_menu(notes,category_selections,organization_fn){
return website_helpers.notes.make_subtree((function (){var G__55226 = cljs.core.set(website_helpers.notes.get_notes_for_categories(notes,category_selections));
return (organization_fn.cljs$core$IFn$_invoke$arity$1 ? organization_fn.cljs$core$IFn$_invoke$arity$1(G__55226) : organization_fn.call(null,G__55226));
})());
});
website_helpers.notes.example_category_selections = new cljs.core.PersistentArrayMap(null, 3, ["a",true,"b",true,"c",true], null);

//# sourceMappingURL=website_helpers.notes.js.map
