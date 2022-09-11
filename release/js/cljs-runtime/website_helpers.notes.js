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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$get_notes_by_category_$_iter__46152(s__46153){
return (new cljs.core.LazySeq(null,(function (){
var s__46153__$1 = s__46153;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__46153__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var note = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__46153__$1,note,xs__6360__auto__,temp__5804__auto__){
return (function website_helpers$notes$get_notes_by_category_$_iter__46152_$_iter__46154(s__46155){
return (new cljs.core.LazySeq(null,((function (s__46153__$1,note,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__46155__$1 = s__46155;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__46155__$1);
if(temp__5804__auto____$1){
var s__46155__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46155__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__46155__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__46157 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__46156 = (0);
while(true){
if((i__46156 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__46156);
cljs.core.chunk_append(b__46157,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__46224 = (i__46156 + (1));
i__46156 = G__46224;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46157),website_helpers$notes$get_notes_by_category_$_iter__46152_$_iter__46154(cljs.core.chunk_rest(s__46155__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46157),null);
}
} else {
var category = cljs.core.first(s__46155__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_category_$_iter__46152_$_iter__46154(cljs.core.rest(s__46155__$2)));
}
} else {
return null;
}
break;
}
});})(s__46153__$1,note,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__46153__$1,note,xs__6360__auto__,temp__5804__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,website_helpers$notes$get_notes_by_category_$_iter__46152(cljs.core.rest(s__46153__$1)));
} else {
var G__46225 = cljs.core.rest(s__46153__$1);
s__46153__$1 = G__46225;
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
var G__46159 = arguments.length;
switch (G__46159) {
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
return cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__46160){
var vec__46161 = p__46160;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46161,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46161,(1),null);
return cljs.core.count(v);
}),(function (){var iter__5523__auto__ = (function website_helpers$notes$iter__46164(s__46165){
return (new cljs.core.LazySeq(null,(function (){
var s__46165__$1 = s__46165;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__46165__$1);
if(temp__5804__auto__){
var s__46165__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46165__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__46165__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__46167 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__46166 = (0);
while(true){
if((i__46166 < size__5522__auto__)){
var vec__46168 = cljs.core._nth(c__5521__auto__,i__46166);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46168,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46168,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
cljs.core.chunk_append(b__46167,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null));

var G__46227 = (i__46166 + (1));
i__46166 = G__46227;
continue;
} else {
var G__46228 = (i__46166 + (1));
i__46166 = G__46228;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46167),website_helpers$notes$iter__46164(cljs.core.chunk_rest(s__46165__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46167),null);
}
} else {
var vec__46171 = cljs.core.first(s__46165__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46171,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46171,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null),website_helpers$notes$iter__46164(cljs.core.rest(s__46165__$2)));
} else {
var G__46229 = cljs.core.rest(s__46165__$2);
s__46165__$1 = G__46229;
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
var G__46175 = arguments.length;
switch (G__46175) {
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
var vec__46176 = website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2(notes,categories_to_ignore);
var largest_category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46176,(0),null);
var largest_notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46176,(1),null);
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
website_helpers.notes.note_to_li = (function website_helpers$notes$note_to_li(note){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(note)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),website_helpers.notes.path__GT_url(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(note))], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(note)], null)], null);
});
website_helpers.notes.get_cur_page_note = (function website_helpers$notes$get_cur_page_note(possible_notes){
var url = window.location.pathname;
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46179_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.path__GT_url(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__46179_SHARP_)),url);
}),possible_notes));
});
website_helpers.notes.make_subtree = (function website_helpers$notes$make_subtree(notes_by_category){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$notes$make_subtree_$_iter__46180(s__46181){
return (new cljs.core.LazySeq(null,(function (){
var s__46181__$1 = s__46181;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__46181__$1);
if(temp__5804__auto__){
var s__46181__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46181__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__46181__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__46183 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__46182 = (0);
while(true){
if((i__46182 < size__5522__auto__)){
var vec__46184 = cljs.core._nth(c__5521__auto__,i__46182);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46184,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46184,(1),null);
cljs.core.chunk_append(b__46183,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (i__46182,vec__46184,category,subtree,c__5521__auto__,size__5522__auto__,b__46183,s__46181__$2,temp__5804__auto__){
return (function website_helpers$notes$make_subtree_$_iter__46180_$_iter__46187(s__46188){
return (new cljs.core.LazySeq(null,((function (i__46182,vec__46184,category,subtree,c__5521__auto__,size__5522__auto__,b__46183,s__46181__$2,temp__5804__auto__){
return (function (){
var s__46188__$1 = s__46188;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__46188__$1);
if(temp__5804__auto____$1){
var s__46188__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46188__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__46188__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__46190 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__46189 = (0);
while(true){
if((i__46189 < size__5522__auto____$1)){
var note = cljs.core._nth(c__5521__auto____$1,i__46189);
cljs.core.chunk_append(b__46190,website_helpers.notes.note_to_li(note));

var G__46235 = (i__46189 + (1));
i__46189 = G__46235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46190),website_helpers$notes$make_subtree_$_iter__46180_$_iter__46187(cljs.core.chunk_rest(s__46188__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46190),null);
}
} else {
var note = cljs.core.first(s__46188__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note),website_helpers$notes$make_subtree_$_iter__46180_$_iter__46187(cljs.core.rest(s__46188__$2)));
}
} else {
return null;
}
break;
}
});})(i__46182,vec__46184,category,subtree,c__5521__auto__,size__5522__auto__,b__46183,s__46181__$2,temp__5804__auto__))
,null,null));
});})(i__46182,vec__46184,category,subtree,c__5521__auto__,size__5522__auto__,b__46183,s__46181__$2,temp__5804__auto__))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(website_helpers.notes.get_cur_page_note(new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(subtree))),category)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)], null)], null),(website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$1 ? website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$1(subtree) : website_helpers.notes.make_subtree.call(null,subtree))], null)], null)], null)));

var G__46240 = (i__46182 + (1));
i__46182 = G__46240;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46183),website_helpers$notes$make_subtree_$_iter__46180(cljs.core.chunk_rest(s__46181__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46183),null);
}
} else {
var vec__46191 = cljs.core.first(s__46181__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46191,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46191,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__46191,category,subtree,s__46181__$2,temp__5804__auto__){
return (function website_helpers$notes$make_subtree_$_iter__46180_$_iter__46194(s__46195){
return (new cljs.core.LazySeq(null,(function (){
var s__46195__$1 = s__46195;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__46195__$1);
if(temp__5804__auto____$1){
var s__46195__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46195__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__46195__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__46197 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__46196 = (0);
while(true){
if((i__46196 < size__5522__auto__)){
var note = cljs.core._nth(c__5521__auto__,i__46196);
cljs.core.chunk_append(b__46197,website_helpers.notes.note_to_li(note));

var G__46241 = (i__46196 + (1));
i__46196 = G__46241;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46197),website_helpers$notes$make_subtree_$_iter__46180_$_iter__46194(cljs.core.chunk_rest(s__46195__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46197),null);
}
} else {
var note = cljs.core.first(s__46195__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note),website_helpers$notes$make_subtree_$_iter__46180_$_iter__46194(cljs.core.rest(s__46195__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__46191,category,subtree,s__46181__$2,temp__5804__auto__))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(website_helpers.notes.get_cur_page_note(new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(subtree))),category)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)], null)], null),(website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$1 ? website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$1(subtree) : website_helpers.notes.make_subtree.call(null,subtree))], null)], null)], null)),website_helpers$notes$make_subtree_$_iter__46180(cljs.core.rest(s__46181__$2)));
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
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46198_SHARP_){
return (!(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(selected_categories,new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(p1__46198_SHARP_)))));
}),notes));
});
/**
 * Converts a map produced by get-notes-by-category to a PageTree}
 *   readable by page_graph.cljs logic.
 */
website_helpers.notes.notes_by_category_to_children_tree = (function website_helpers$notes$notes_by_category_to_children_tree(notes_by_category,categories_to_idx){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$notes$notes_by_category_to_children_tree_$_iter__46199(s__46200){
return (new cljs.core.LazySeq(null,(function (){
var s__46200__$1 = s__46200;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__46200__$1);
if(temp__5804__auto__){
var s__46200__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46200__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__46200__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__46202 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__46201 = (0);
while(true){
if((i__46201 < size__5522__auto__)){
var vec__46203 = cljs.core._nth(c__5521__auto__,i__46201);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46203,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46203,(1),null);
cljs.core.chunk_append(b__46202,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"notes","notes",-1039600523),k))?cljs.core.vec(v):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),k,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,k),new cljs.core.Keyword(null,"children","children",-940561982),(website_helpers.notes.notes_by_category_to_children_tree.cljs$core$IFn$_invoke$arity$2 ? website_helpers.notes.notes_by_category_to_children_tree.cljs$core$IFn$_invoke$arity$2(v,categories_to_idx) : website_helpers.notes.notes_by_category_to_children_tree.call(null,v,categories_to_idx))], null)], null)));

var G__46246 = (i__46201 + (1));
i__46201 = G__46246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46202),website_helpers$notes$notes_by_category_to_children_tree_$_iter__46199(cljs.core.chunk_rest(s__46200__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46202),null);
}
} else {
var vec__46206 = cljs.core.first(s__46200__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46206,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46206,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"notes","notes",-1039600523),k))?cljs.core.vec(v):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),k,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,k),new cljs.core.Keyword(null,"children","children",-940561982),(website_helpers.notes.notes_by_category_to_children_tree.cljs$core$IFn$_invoke$arity$2 ? website_helpers.notes.notes_by_category_to_children_tree.cljs$core$IFn$_invoke$arity$2(v,categories_to_idx) : website_helpers.notes.notes_by_category_to_children_tree.call(null,v,categories_to_idx))], null)], null)),website_helpers$notes$notes_by_category_to_children_tree_$_iter__46199(cljs.core.rest(s__46200__$2)));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$index_categories_$_iter__46209(s__46210){
return (new cljs.core.LazySeq(null,(function (){
var s__46210__$1 = s__46210;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__46210__$1);
if(temp__5804__auto__){
var s__46210__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46210__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__46210__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__46212 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__46211 = (0);
while(true){
if((i__46211 < size__5522__auto__)){
var vec__46213 = cljs.core._nth(c__5521__auto__,i__46211);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46213,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46213,(1),null);
cljs.core.chunk_append(b__46212,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(num_notes + i)], null));

var G__46247 = (i__46211 + (1));
i__46211 = G__46247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46212),website_helpers$notes$index_categories_$_iter__46209(cljs.core.chunk_rest(s__46210__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46212),null);
}
} else {
var vec__46216 = cljs.core.first(s__46210__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46216,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46216,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(num_notes + i)], null),website_helpers$notes$index_categories_$_iter__46209(cljs.core.rest(s__46210__$2)));
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
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["website_helpers/notes.cljs",47,new cljs.core.Keyword(null,"pass","pass",1574159993),7,151,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"notes-by-category-to-children-tree","notes-by-category-to-children-tree",-982591524,null),cljs.core.list(new cljs.core.Symbol(null,"organize-notes-by-category","organize-notes-by-category",-1788070850,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null)),cljs.core.list(new cljs.core.Symbol(null,"index-categories","index-categories",-594031902,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a 1",new cljs.core.Keyword(null,"idx","idx",1053688473),(5),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"c",new cljs.core.Keyword(null,"idx","idx",1053688473),(4),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"4",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 4",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/4.md",new cljs.core.Keyword(null,"title","title",636505583),"t-4",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"b",new cljs.core.Keyword(null,"idx","idx",1053688473),null,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"1",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 1",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/1.md",new cljs.core.Keyword(null,"title","title",636505583),"t-1",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["b","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"2",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 2",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/2.md",new cljs.core.Keyword(null,"title","title",636505583),"t-2",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"3",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 3",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/3.md",new cljs.core.Keyword(null,"title","title",636505583),"t-3",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c","null"], null), null)], null)], null)),167,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10764__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["website_helpers/notes.cljs",47,new cljs.core.Keyword(null,"fail","fail",1706214930),7,151,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"notes-by-category-to-children-tree","notes-by-category-to-children-tree",-982591524,null),cljs.core.list(new cljs.core.Symbol(null,"organize-notes-by-category","organize-notes-by-category",-1788070850,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null)),cljs.core.list(new cljs.core.Symbol(null,"index-categories","index-categories",-594031902,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a 1",new cljs.core.Keyword(null,"idx","idx",1053688473),(5),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"c",new cljs.core.Keyword(null,"idx","idx",1053688473),(4),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"4",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 4",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/4.md",new cljs.core.Keyword(null,"title","title",636505583),"t-4",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"b",new cljs.core.Keyword(null,"idx","idx",1053688473),null,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"1",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 1",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/1.md",new cljs.core.Keyword(null,"title","title",636505583),"t-1",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["b","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"2",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 2",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/2.md",new cljs.core.Keyword(null,"title","title",636505583),"t-2",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"3",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 3",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/3.md",new cljs.core.Keyword(null,"title","title",636505583),"t-3",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c","null"], null), null)], null)], null)),167,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10764__auto__),null,(1),null)),(2),null)),null]));
}

return result__10765__auto__;
}catch (e46219){var t__10815__auto__ = e46219;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["website_helpers/notes.cljs",47,new cljs.core.Keyword(null,"error","error",-978969032),7,151,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"notes-by-category-to-children-tree","notes-by-category-to-children-tree",-982591524,null),cljs.core.list(new cljs.core.Symbol(null,"organize-notes-by-category","organize-notes-by-category",-1788070850,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null)),cljs.core.list(new cljs.core.Symbol(null,"index-categories","index-categories",-594031902,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a 1",new cljs.core.Keyword(null,"idx","idx",1053688473),(5),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"c",new cljs.core.Keyword(null,"idx","idx",1053688473),(4),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"4",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 4",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/4.md",new cljs.core.Keyword(null,"title","title",636505583),"t-4",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"b",new cljs.core.Keyword(null,"idx","idx",1053688473),null,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"1",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 1",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/1.md",new cljs.core.Keyword(null,"title","title",636505583),"t-1",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["b","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"2",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 2",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/2.md",new cljs.core.Keyword(null,"title","title",636505583),"t-2",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"3",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 3",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/3.md",new cljs.core.Keyword(null,"title","title",636505583),"t-3",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c","null"], null), null)], null)], null)),167,t__10815__auto__,null]));
}});

(website_helpers.notes.to_tree.cljs$lang$var = new cljs.core.Var(function(){return website_helpers.notes.to_tree;},new cljs.core.Symbol("website-helpers.notes","to-tree","website-helpers.notes/to-tree",-1805703668,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"website-helpers.notes","website-helpers.notes",1477508270,null),new cljs.core.Symbol(null,"to-tree","to-tree",-639084910,null),"website_helpers/notes.cljs",17,1,149,149,cljs.core.List.EMPTY,null,(cljs.core.truth_(website_helpers.notes.to_tree)?website_helpers.notes.to_tree.cljs$lang$test:null)])));
website_helpers.notes.make_category_menu = (function website_helpers$notes$make_category_menu(notes,selected_categories){
return website_helpers.notes.make_subtree(website_helpers.notes.organize_notes_by_category(notes,selected_categories));
});
website_helpers.notes.filter_category_selections = (function website_helpers$notes$filter_category_selections(notes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$filter_category_selections_$_iter__46220(s__46221){
return (new cljs.core.LazySeq(null,(function (){
var s__46221__$1 = s__46221;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__46221__$1);
if(temp__5804__auto__){
var s__46221__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46221__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__46221__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__46223 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__46222 = (0);
while(true){
if((i__46222 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__46222);
cljs.core.chunk_append(b__46223,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,cljs.core.contains_QMARK_(cljs.core.deref(website_helpers.global.url_params),category)], null));

var G__46260 = (i__46222 + (1));
i__46222 = G__46260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46223),website_helpers$notes$filter_category_selections_$_iter__46220(cljs.core.chunk_rest(s__46221__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46223),null);
}
} else {
var category = cljs.core.first(s__46221__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,cljs.core.contains_QMARK_(cljs.core.deref(website_helpers.global.url_params),category)], null),website_helpers$notes$filter_category_selections_$_iter__46220(cljs.core.rest(s__46221__$2)));
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

//# sourceMappingURL=website_helpers.notes.js.map
